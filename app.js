const LEGACY_STORAGE_KEY = "static-quiz-system-state-v1";
const ACTIVE_PROFILE_KEY = "static-quiz-system-active-profile";
const STORAGE_KEY_PREFIX = "static-quiz-system-state-v2";
const DEFAULT_PROFILE_ID = "bruno";
const REVIEW_MASTERY_STREAK = 2;
const ANSWER_LETTERS = ["A", "B", "C", "D", "E"];

const elements = {
  appTitle: document.getElementById("app-title"),
  appSubtitle: document.getElementById("app-subtitle"),
  profileButtons: document.querySelectorAll("[data-profile]"),
  startAllBtn: document.getElementById("start-all-btn"),
  reviewModeBtn: document.getElementById("review-mode-btn"),
  resetProgressBtn: document.getElementById("reset-progress-btn"),
  modeLabel: document.getElementById("mode-label"),
  progressLabel: document.getElementById("progress-label"),
  scoreLabel: document.getElementById("score-label"),
  accuracyLabel: document.getElementById("accuracy-label"),
  questionCategory: document.getElementById("question-category"),
  questionPosition: document.getElementById("question-position"),
  questionText: document.getElementById("question-text"),
  answerButtons: document.getElementById("answer-buttons"),
  feedbackBox: document.getElementById("feedback-box"),
  nextBtn: document.getElementById("next-btn"),
  bankSize: document.getElementById("bank-size"),
  pendingReview: document.getElementById("pending-review"),
  trackedReview: document.getElementById("tracked-review")
};

let activeProfileId = getInitialProfileId();
let activeQuestionSet = QUESTION_SETS[activeProfileId];
let questions = activeQuestionSet.questions;
let questionMap = createQuestionMap();
let appState = loadState();
let session = createEmptySession();

function getInitialProfileId() {
  const savedProfileId = localStorage.getItem(ACTIVE_PROFILE_KEY);
  return QUESTION_SETS[savedProfileId] ? savedProfileId : DEFAULT_PROFILE_ID;
}

function getStorageKey(profileId = activeProfileId) {
  return `${STORAGE_KEY_PREFIX}-${profileId}`;
}

function createQuestionMap() {
  return new Map(questions.map((question) => [question.id, question]));
}

function createEmptySession() {
  return {
    mode: "all",
    queue: [],
    reviewQueue: [],
    currentQuestionId: null,
    currentAnswers: [],
    currentQueueSource: "main",
    answeredCurrent: false,
    currentIndex: 0,
    totalPlanned: 0,
    sessionCorrect: 0,
    sessionAnswered: 0,
    reviewStep: 0,
    isComplete: true
  };
}

function createDefaultQuestionStat() {
  return {
    correct: 0,
    incorrect: 0,
    streak: 0,
    lastResult: null,
    needsReview: false,
    timesReviewed: 0
  };
}

function createDefaultState() {
  return {
    totalAnswered: 0,
    totalCorrect: 0,
    totalIncorrect: 0,
    questionStats: {}
  };
}

function parseSavedState(storageKey) {
  try {
    const savedState = JSON.parse(localStorage.getItem(storageKey));
    if (!savedState || typeof savedState !== "object") {
      return null;
    }

    return {
      totalAnswered: Number(savedState.totalAnswered) || 0,
      totalCorrect: Number(savedState.totalCorrect) || 0,
      totalIncorrect: Number(savedState.totalIncorrect) || 0,
      questionStats: savedState.questionStats || {}
    };
  } catch (error) {
    return null;
  }
}

function loadState() {
  const currentState = parseSavedState(getStorageKey());

  if (currentState) {
    return currentState;
  }

  // Mantém o progresso antigo do primeiro quiz do Bruno, caso já existisse no navegador.
  if (activeProfileId === DEFAULT_PROFILE_ID) {
    return parseSavedState(LEGACY_STORAGE_KEY) || createDefaultState();
  }

  return createDefaultState();
}

function saveState() {
  localStorage.setItem(getStorageKey(), JSON.stringify(appState));
}

function getQuestionStat(questionId) {
  if (!appState.questionStats[questionId]) {
    appState.questionStats[questionId] = createDefaultQuestionStat();
  }
  return appState.questionStats[questionId];
}

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function randomizeAnswers(question) {
  const answerChoices = question.options.map((option, index) => ({
    label: option,
    isCorrect: index === question.answerIndex
  }));

  return shuffleArray(answerChoices);
}

function createInitialQueue() {
  const randomizedQuestions = shuffleArray(questions);

  // Questões com menor sequência de acertos aparecem antes para priorizar revisão.
  randomizedQuestions.sort((left, right) => {
    const leftStreak = getQuestionStat(left.id).streak;
    const rightStreak = getQuestionStat(right.id).streak;

    if (leftStreak === rightStreak) {
      return 0;
    }

    return leftStreak - rightStreak;
  });

  return randomizedQuestions.map((question) => question.id);
}

function buildReviewModeQueue() {
  const reviewCandidates = questions.filter((question) => getQuestionStat(question.id).needsReview);

  if (reviewCandidates.length === 0) {
    return [];
  }

  const weightedQueue = [];

  reviewCandidates.forEach((question) => {
    const stat = getQuestionStat(question.id);
    const weight = Math.max(1, REVIEW_MASTERY_STREAK + 1 - Math.min(stat.streak, REVIEW_MASTERY_STREAK));

    for (let count = 0; count < weight; count += 1) {
      weightedQueue.push(question.id);
    }
  });

  return shuffleArray(weightedQueue);
}

function startSession(mode) {
  const queue = mode === "review" ? buildReviewModeQueue() : createInitialQueue();

  session = {
    ...createEmptySession(),
    mode,
    queue,
    totalPlanned: queue.length,
    isComplete: queue.length === 0
  };

  if (queue.length === 0) {
    const message = mode === "review"
      ? "Não há respostas erradas salvas para revisar agora."
      : "Nenhuma questão foi carregada.";
    showIdleState(message);
    updateDashboard();
    return;
  }

  showNextQuestion();
  updateDashboard();
}

function showIdleState(message) {
  session.currentQuestionId = null;
  session.currentAnswers = [];
  session.answeredCurrent = false;
  session.isComplete = true;

  elements.questionCategory.textContent = activeQuestionSet.owner;
  elements.questionPosition.textContent = "Aguardando início";
  elements.questionText.textContent = message;
  elements.answerButtons.innerHTML = "";
  elements.nextBtn.disabled = true;
  hideFeedback();
}

function showNextQuestion() {
  if (session.queue.length === 0) {
    let dueReviewItems = extractDueReviewItems();

    // Se nada venceu ainda, avançamos até a próxima revisão agendada.
    if (dueReviewItems.length === 0 && session.reviewQueue.length > 0) {
      session.reviewStep = Math.min(...session.reviewQueue.map((entry) => entry.dueStep));
      dueReviewItems = extractDueReviewItems();
    }

    if (dueReviewItems.length > 0) {
      session.queue = dueReviewItems;
      session.currentQueueSource = "review";
    } else {
      finishSession();
      return;
    }
  } else {
    session.currentQueueSource = session.currentQueueSource || "main";
  }

  session.currentQuestionId = session.queue.shift();
  session.currentAnswers = randomizeAnswers(questionMap.get(session.currentQuestionId));
  session.answeredCurrent = false;
  session.currentIndex += 1;

  renderQuestion();
}

function extractDueReviewItems() {
  const dueItems = [];
  const pendingItems = [];

  session.reviewQueue.forEach((entry) => {
    if (entry.dueStep <= session.reviewStep) {
      dueItems.push(entry.id);
    } else {
      pendingItems.push(entry);
    }
  });

  session.reviewQueue = pendingItems;
  return shuffleArray(dueItems);
}

function renderQuestion() {
  const question = questionMap.get(session.currentQuestionId);
  const progressTotal = session.totalPlanned + session.reviewQueue.length + session.queue.length + 1;

  elements.modeLabel.textContent = session.mode === "review" ? "Revisão de Erros" : "Quiz Completo";
  elements.questionCategory.textContent = question.difficulty
    ? `${question.category} • ${question.difficulty}`
    : question.category;
  elements.questionPosition.textContent = `Questão ${session.currentIndex} de ${progressTotal}`;
  elements.questionText.textContent = question.prompt;
  elements.answerButtons.innerHTML = "";
  elements.nextBtn.disabled = true;
  hideFeedback();

  session.currentAnswers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.dataset.answerLabel = answer.label;
    button.innerHTML = `<span class="answer-letter">${ANSWER_LETTERS[index]}</span><span>${answer.label}</span>`;
    button.addEventListener("click", () => handleAnswer(answer));
    elements.answerButtons.appendChild(button);
  });

  updateDashboard();
}

function handleAnswer(selectedAnswer) {
  if (session.answeredCurrent) {
    return;
  }

  session.answeredCurrent = true;
  session.sessionAnswered += 1;
  session.reviewStep += 1;

  const question = questionMap.get(session.currentQuestionId);
  const stat = getQuestionStat(question.id);
  const isCorrect = selectedAnswer.isCorrect;

  appState.totalAnswered += 1;

  if (isCorrect) {
    appState.totalCorrect += 1;
    session.sessionCorrect += 1;
    stat.correct += 1;
    stat.streak += 1;
    stat.lastResult = "correct";

    if (stat.streak >= REVIEW_MASTERY_STREAK) {
      stat.needsReview = false;
    }

    if (session.currentQueueSource === "review" && stat.needsReview) {
      const delay = Math.min(4, stat.streak + 1);
      session.reviewQueue.push({
        id: question.id,
        dueStep: session.reviewStep + delay
      });
      stat.timesReviewed += 1;
    }
  } else {
    appState.totalIncorrect += 1;
    stat.incorrect += 1;
    stat.streak = 0;
    stat.lastResult = "incorrect";
    stat.needsReview = true;

    session.reviewQueue.push({
      id: question.id,
      dueStep: session.reviewStep + 1
    });
  }

  saveState();
  decorateAnswerButtons(selectedAnswer);
  showFeedback(isCorrect, question, selectedAnswer.label);
  elements.nextBtn.disabled = false;
  updateDashboard();
}

function decorateAnswerButtons(selectedAnswer) {
  const answerButtons = Array.from(elements.answerButtons.children);
  const correctLabel = session.currentAnswers.find((answer) => answer.isCorrect).label;

  answerButtons.forEach((button) => {
    button.disabled = true;

    if (button.dataset.answerLabel === correctLabel) {
      button.classList.add("correct");
    }

    if (!selectedAnswer.isCorrect && button.dataset.answerLabel === selectedAnswer.label) {
      button.classList.add("incorrect");
    }
  });
}

function showFeedback(isCorrect, question, selectedLabel) {
  elements.feedbackBox.classList.remove("hidden", "success", "error");

  if (isCorrect) {
    elements.feedbackBox.classList.add("success");
    elements.feedbackBox.textContent = `Correto. ${question.explanation}`;
    return;
  }

  const correctAnswer = question.options[question.answerIndex];
  elements.feedbackBox.classList.add("error");
  elements.feedbackBox.textContent = `Incorreto. Você escolheu "${selectedLabel}". Resposta correta: "${correctAnswer}". ${question.explanation}`;
}

function hideFeedback() {
  elements.feedbackBox.classList.add("hidden");
  elements.feedbackBox.classList.remove("success", "error");
  elements.feedbackBox.textContent = "";
}

function finishSession() {
  session.isComplete = true;
  session.currentQuestionId = null;
  elements.answerButtons.innerHTML = "";
  elements.nextBtn.disabled = true;

  const accuracy = session.sessionAnswered === 0
    ? 0
    : Math.round((session.sessionCorrect / session.sessionAnswered) * 100);

  elements.questionCategory.textContent = "Concluído";
  elements.questionPosition.textContent = "Sessão finalizada";
  elements.questionText.textContent = session.mode === "review"
    ? "Revisão concluída. Inicie outra revisão ou refaça o quiz completo."
    : "Quiz completo concluído. As respostas erradas foram revisadas pela fila de repetição.";

  elements.feedbackBox.classList.remove("hidden", "success", "error");
  elements.feedbackBox.classList.add("success");
  elements.feedbackBox.textContent = `Aproveitamento da sessão: ${accuracy}%. Questões respondidas: ${session.sessionAnswered}. Acertos: ${session.sessionCorrect}.`;

  updateDashboard();
}

function updateDashboard() {
  const totalQuestions = questions.length;
  const answered = appState.totalAnswered;
  const accuracy = answered === 0
    ? 0
    : Math.round((appState.totalCorrect / answered) * 100);
  const reviewCount = questions.filter((question) => getQuestionStat(question.id).needsReview).length;
  const trackedCount = questions.filter((question) => getQuestionStat(question.id).incorrect > 0).length;
  const progressTotal = session.totalPlanned + session.reviewQueue.length;
  const progressCurrent = Math.min(session.currentIndex, progressTotal);

  elements.progressLabel.textContent = progressTotal > 0 ? `${progressCurrent} / ${progressTotal}` : "0 / 0";
  elements.scoreLabel.textContent = `${session.sessionCorrect} acertos`;
  elements.accuracyLabel.textContent = `${accuracy}%`;
  elements.bankSize.textContent = String(totalQuestions);
  elements.pendingReview.textContent = String(reviewCount);
  elements.trackedReview.textContent = String(trackedCount);
  elements.reviewModeBtn.disabled = reviewCount === 0;
}

function resetProgress() {
  localStorage.removeItem(getStorageKey());

  if (activeProfileId === DEFAULT_PROFILE_ID) {
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  }

  appState = loadState();
  session = createEmptySession();
  showIdleState("Progresso zerado. Clique em “Iniciar Quiz Completo” para recomeçar.");
  updateDashboard();
}

function switchProfile(profileId) {
  if (!QUESTION_SETS[profileId] || profileId === activeProfileId) {
    return;
  }

  activeProfileId = profileId;
  activeQuestionSet = QUESTION_SETS[activeProfileId];
  questions = activeQuestionSet.questions;
  questionMap = createQuestionMap();
  localStorage.setItem(ACTIVE_PROFILE_KEY, activeProfileId);

  appState = loadState();
  session = createEmptySession();
  updateProfileUi();
  showIdleState(`Perfil de ${activeQuestionSet.owner} selecionado. Clique em “Iniciar Quiz Completo” para começar.`);
  updateDashboard();
}

function updateProfileUi() {
  elements.appTitle.textContent = activeQuestionSet.title;
  elements.appSubtitle.textContent = activeQuestionSet.description;

  elements.profileButtons.forEach((button) => {
    const isActive = button.dataset.profile === activeProfileId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

elements.startAllBtn.addEventListener("click", () => startSession("all"));
elements.reviewModeBtn.addEventListener("click", () => startSession("review"));
elements.resetProgressBtn.addEventListener("click", resetProgress);
elements.nextBtn.addEventListener("click", showNextQuestion);
elements.profileButtons.forEach((button) => {
  button.addEventListener("click", () => switchProfile(button.dataset.profile));
});

updateProfileUi();
showIdleState("Clique em “Iniciar Quiz Completo” para começar.");
updateDashboard();
