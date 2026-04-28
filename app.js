const LEGACY_STORAGE_KEY = "static-quiz-system-state-v1";
const ACTIVE_PROFILE_KEY = "static-quiz-system-active-profile";
const ACTIVE_LANGUAGE_KEY = "static-quiz-system-active-language";
const STORAGE_KEY_PREFIX = "static-quiz-system-state-v2";
const DEFAULT_PROFILE_ID = "bruno";
const DEFAULT_LANGUAGE_ID = "pt";
const REVIEW_MASTERY_STREAK = 2;
const ANSWER_LETTERS = ["A", "B", "C", "D", "E"];

const I18N = {
  pt: {
    htmlLang: "pt-BR",
    pageTitle: "Sistema de Quiz Estático",
    eyebrow: "Treinador de estudos no navegador",
    profileSwitchLabel: "Selecionar perfil do quiz",
    languageSwitchLabel: "Selecionar idioma",
    startAll: "Iniciar Quiz Completo",
    reviewWrong: "Revisar Erros",
    resetProgress: "Zerar Progresso",
    modeLabel: "Modo",
    progressLabel: "Progresso",
    scoreLabel: "Pontuação",
    accuracyLabel: "Aproveitamento",
    nextQuestion: "Próxima Questão",
    sessionSummaryTitle: "Resumo da Sessão",
    questionBankLabel: "Banco de questões",
    pendingReviewLabel: "Erros pendentes de revisão",
    trackedReviewLabel: "Questões com histórico de erro",
    howItWorksTitle: "Como Funciona",
    howItWorksText: "Respostas erradas entram em uma fila de revisão. Sequências de acertos aumentam o intervalo, então questões dominadas aparecem com menos frequência. Tudo fica salvo no navegador com LocalStorage.",
    allMode: "Quiz Completo",
    reviewMode: "Revisão de Erros",
    readyPosition: "Aguardando início",
    readyMessage: "Clique em “Iniciar Quiz Completo” para começar.",
    emptyReviewMessage: "Não há respostas erradas salvas para revisar agora.",
    emptyBankMessage: "Nenhuma questão foi carregada.",
    questionPosition: "Questão {current} de {total}",
    correctFeedback: "Correto. {explanation}",
    incorrectFeedback: "Incorreto. Você escolheu \"{selected}\". Resposta correta: \"{correct}\". {explanation}",
    completedCategory: "Concluído",
    completedPosition: "Sessão finalizada",
    completedReviewMessage: "Revisão concluída. Inicie outra revisão ou refaça o quiz completo.",
    completedAllMessage: "Quiz completo concluído. As respostas erradas foram revisadas pela fila de repetição.",
    sessionAccuracyMessage: "Aproveitamento da sessão: {accuracy}%. Questões respondidas: {answered}. Acertos: {correct}.",
    scoreValue: "{correct} acertos",
    resetMessage: "Progresso zerado. Clique em “Iniciar Quiz Completo” para recomeçar.",
    profileSelectedMessage: "Perfil de {owner} selecionado. Clique em “Iniciar Quiz Completo” para começar.",
    profiles: {
      bruno: {
        title: "Quiz Analista de Informática",
        description: "Questões alinhadas ao edital SED/SC 794/2026 para Analista de Informática, com revisão de erros e repetição espaçada simples."
      },
      maria: {
        title: "Quiz Professora AEE/Misto e Libras",
        description: "Questões alinhadas ao edital SED/SC 793/2026 para AEE/Misto e Intérprete da Libras, com foco no nível da prova."
      }
    },
    categories: {
      "Conhecimentos Gerais": "Conhecimentos Gerais",
      "Noções de Informática": "Noções de Informática",
      "Conhecimentos Específicos": "Conhecimentos Específicos",
      "Metodologia da Prática Docente": "Metodologia da Prática Docente",
      "Específicos - AEE/Misto": "Específicos - AEE/Misto",
      "Específicos - Intérprete da Libras": "Específicos - Intérprete da Libras"
    },
    difficulties: {
      "Fácil": "Fácil",
      "Média": "Média",
      "Difícil": "Difícil"
    }
  },
  en: {
    htmlLang: "en",
    pageTitle: "Static Quiz System",
    eyebrow: "Browser-based study trainer",
    profileSwitchLabel: "Select quiz profile",
    languageSwitchLabel: "Select language",
    startAll: "Start Full Quiz",
    reviewWrong: "Review Mistakes",
    resetProgress: "Reset Progress",
    modeLabel: "Mode",
    progressLabel: "Progress",
    scoreLabel: "Score",
    accuracyLabel: "Accuracy",
    nextQuestion: "Next Question",
    sessionSummaryTitle: "Session Summary",
    questionBankLabel: "Question bank",
    pendingReviewLabel: "Mistakes pending review",
    trackedReviewLabel: "Questions with mistake history",
    howItWorksTitle: "How It Works",
    howItWorksText: "Wrong answers enter a review queue. Correct streaks increase the interval, so mastered questions appear less often. Everything is saved locally in the browser with LocalStorage.",
    allMode: "Full Quiz",
    reviewMode: "Mistake Review",
    readyPosition: "Waiting to start",
    readyMessage: "Click “Start Full Quiz” to begin.",
    emptyReviewMessage: "There are no saved mistakes to review right now.",
    emptyBankMessage: "No questions were loaded.",
    questionPosition: "Question {current} of {total}",
    correctFeedback: "Correct. {explanation}",
    incorrectFeedback: "Incorrect. You chose \"{selected}\". Correct answer: \"{correct}\". {explanation}",
    completedCategory: "Completed",
    completedPosition: "Session finished",
    completedReviewMessage: "Review finished. Start another review or retake the full quiz.",
    completedAllMessage: "Full quiz finished. Wrong answers were reviewed through the repetition queue.",
    sessionAccuracyMessage: "Session accuracy: {accuracy}%. Questions answered: {answered}. Correct answers: {correct}.",
    scoreValue: "{correct} correct",
    resetMessage: "Progress reset. Click “Start Full Quiz” to begin again.",
    profileSelectedMessage: "{owner}'s profile selected. Click “Start Full Quiz” to begin.",
    profiles: {
      bruno: {
        title: "IT Analyst Quiz",
        description: "Questions aligned with the SED/SC 794/2026 notice for IT Analyst, featuring mistake review and a simple spaced repetition flow."
      },
      maria: {
        title: "AEE/Mixed and Libras Teacher Quiz",
        description: "Questions aligned with the SED/SC 793/2026 notice for AEE/Mixed and Libras Interpreter teacher roles, tuned to the exam level."
      }
    },
    categories: {
      "Conhecimentos Gerais": "General Knowledge",
      "Noções de Informática": "Computer Basics",
      "Conhecimentos Específicos": "Role-Specific Knowledge",
      "Metodologia da Prática Docente": "Teaching Practice Methodology",
      "Específicos - AEE/Misto": "Specific Topics - AEE/Mixed",
      "Específicos - Intérprete da Libras": "Specific Topics - Libras Interpreter"
    },
    difficulties: {
      "Fácil": "Easy",
      "Média": "Medium",
      "Difícil": "Hard"
    }
  }
};

const elements = {
  appTitle: document.getElementById("app-title"),
  appSubtitle: document.getElementById("app-subtitle"),
  profileButtons: document.querySelectorAll("[data-profile]"),
  languageButtons: document.querySelectorAll("[data-language]"),
  translatedText: document.querySelectorAll("[data-i18n]"),
  translatedAriaLabels: document.querySelectorAll("[data-i18n-aria-label]"),
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

let activeLanguageId = getInitialLanguageId();
let activeProfileId = getInitialProfileId();
let activeQuestionSet = QUESTION_SETS[activeProfileId];
let questions = activeQuestionSet.questions;
let questionMap = createQuestionMap();
let appState = loadState();
let session = createEmptySession();

function getInitialLanguageId() {
  const savedLanguageId = localStorage.getItem(ACTIVE_LANGUAGE_KEY);
  return I18N[savedLanguageId] ? savedLanguageId : DEFAULT_LANGUAGE_ID;
}

function getInitialProfileId() {
  const savedProfileId = localStorage.getItem(ACTIVE_PROFILE_KEY);
  return QUESTION_SETS[savedProfileId] ? savedProfileId : DEFAULT_PROFILE_ID;
}

function t(key, replacements = {}) {
  const value = I18N[activeLanguageId][key] || I18N[DEFAULT_LANGUAGE_ID][key] || key;
  if (typeof value !== "string") {
    return value;
  }

  return Object.entries(replacements).reduce(
    (text, [name, replacement]) => text.replaceAll(`{${name}}`, String(replacement)),
    value
  );
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
    sourceIndex: index,
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
    const message = mode === "review" ? t("emptyReviewMessage") : t("emptyBankMessage");
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
  elements.questionPosition.textContent = t("readyPosition");
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

function translateCategory(category) {
  return I18N[activeLanguageId].categories[category] || category;
}

function translateDifficulty(difficulty) {
  return I18N[activeLanguageId].difficulties[difficulty] || difficulty;
}

function getLocalizedQuestion(question) {
  if (activeLanguageId !== "en" || typeof EN_QUESTION_TRANSLATIONS === "undefined") {
    return question;
  }

  const translation = EN_QUESTION_TRANSLATIONS[question.id];
  if (!translation) {
    return question;
  }

  return {
    ...question,
    prompt: translation.prompt || question.prompt,
    options: translation.options || question.options,
    explanation: translation.explanation || question.explanation
  };
}

function renderQuestion() {
  const sourceQuestion = questionMap.get(session.currentQuestionId);
  const question = getLocalizedQuestion(sourceQuestion);

  updateCurrentQuestionChrome();
  elements.questionText.textContent = question.prompt;
  elements.answerButtons.innerHTML = "";
  elements.nextBtn.disabled = true;
  hideFeedback();

  session.currentAnswers.forEach((answer, index) => {
    const button = document.createElement("button");
    const letter = document.createElement("span");
    const label = document.createElement("span");

    button.className = "answer-btn";
    button.dataset.answerLabel = answer.label;
    letter.className = "answer-letter";
    letter.textContent = ANSWER_LETTERS[index];
    label.className = "answer-label";
    label.textContent = question.options[answer.sourceIndex];

    button.append(letter, label);
    button.addEventListener("click", () => handleAnswer(answer));
    elements.answerButtons.appendChild(button);
  });

  updateDashboard();
}

function updateCurrentQuestionChrome() {
  const question = questionMap.get(session.currentQuestionId);
  const progressTotal = session.totalPlanned + session.reviewQueue.length + session.queue.length + 1;

  elements.modeLabel.textContent = session.mode === "review" ? t("reviewMode") : t("allMode");
  elements.questionCategory.textContent = question.difficulty
    ? `${translateCategory(question.category)} • ${translateDifficulty(question.difficulty)}`
    : translateCategory(question.category);
  elements.questionPosition.textContent = t("questionPosition", {
    current: session.currentIndex,
    total: progressTotal
  });
}

function handleAnswer(selectedAnswer) {
  if (session.answeredCurrent) {
    return;
  }

  session.answeredCurrent = true;
  session.sessionAnswered += 1;
  session.reviewStep += 1;

  const sourceQuestion = questionMap.get(session.currentQuestionId);
  const question = getLocalizedQuestion(sourceQuestion);
  const stat = getQuestionStat(sourceQuestion.id);
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
        id: sourceQuestion.id,
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
      id: sourceQuestion.id,
      dueStep: session.reviewStep + 1
    });
  }

  saveState();
  decorateAnswerButtons(selectedAnswer);
  showFeedback(isCorrect, question, selectedAnswer);
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

function showFeedback(isCorrect, question, selectedAnswer) {
  elements.feedbackBox.classList.remove("hidden", "success", "error");

  if (isCorrect) {
    elements.feedbackBox.classList.add("success");
    elements.feedbackBox.textContent = t("correctFeedback", { explanation: question.explanation });
    return;
  }

  const correctAnswer = question.options[question.answerIndex];
  elements.feedbackBox.classList.add("error");
  elements.feedbackBox.textContent = t("incorrectFeedback", {
    selected: question.options[selectedAnswer.sourceIndex],
    correct: correctAnswer,
    explanation: question.explanation
  });
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

  elements.questionCategory.textContent = t("completedCategory");
  elements.questionPosition.textContent = t("completedPosition");
  elements.questionText.textContent = session.mode === "review"
    ? t("completedReviewMessage")
    : t("completedAllMessage");

  elements.feedbackBox.classList.remove("hidden", "success", "error");
  elements.feedbackBox.classList.add("success");
  elements.feedbackBox.textContent = t("sessionAccuracyMessage", {
    accuracy,
    answered: session.sessionAnswered,
    correct: session.sessionCorrect
  });

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

  elements.modeLabel.textContent = session.mode === "review" ? t("reviewMode") : t("allMode");
  elements.progressLabel.textContent = progressTotal > 0 ? `${progressCurrent} / ${progressTotal}` : "0 / 0";
  elements.scoreLabel.textContent = t("scoreValue", { correct: session.sessionCorrect });
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
  showIdleState(t("resetMessage"));
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
  showIdleState(t("profileSelectedMessage", { owner: activeQuestionSet.owner }));
  updateDashboard();
}

function switchLanguage(languageId) {
  if (!I18N[languageId] || languageId === activeLanguageId) {
    return;
  }

  activeLanguageId = languageId;
  localStorage.setItem(ACTIVE_LANGUAGE_KEY, activeLanguageId);
  applyLanguage();

  if (session.currentQuestionId) {
    rerenderCurrentQuestionAfterLanguageChange();
  } else {
    showIdleState(t("readyMessage"));
  }

  updateDashboard();
}

function rerenderCurrentQuestionAfterLanguageChange() {
  const sourceQuestion = questionMap.get(session.currentQuestionId);
  const localizedQuestion = getLocalizedQuestion(sourceQuestion);

  updateCurrentQuestionChrome();
  elements.questionText.textContent = localizedQuestion.prompt;

  Array.from(elements.answerButtons.children).forEach((button, index) => {
    const label = button.querySelector(".answer-label");
    const answer = session.currentAnswers[index];
    const localizedAnswer = localizedQuestion.options[answer.sourceIndex];

    if (label && localizedAnswer) {
      label.textContent = localizedAnswer;
    }
  });
}

function applyStaticTranslations() {
  document.documentElement.lang = I18N[activeLanguageId].htmlLang;
  document.title = t("pageTitle");

  elements.translatedText.forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  elements.translatedAriaLabels.forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}

function updateProfileUi() {
  const profileCopy = I18N[activeLanguageId].profiles[activeProfileId];
  elements.appTitle.textContent = profileCopy.title;
  elements.appSubtitle.textContent = profileCopy.description;

  elements.profileButtons.forEach((button) => {
    const isActive = button.dataset.profile === activeProfileId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateLanguageUi() {
  elements.languageButtons.forEach((button) => {
    const isActive = button.dataset.language === activeLanguageId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function applyLanguage() {
  applyStaticTranslations();
  updateProfileUi();
  updateLanguageUi();
}

elements.startAllBtn.addEventListener("click", () => startSession("all"));
elements.reviewModeBtn.addEventListener("click", () => startSession("review"));
elements.resetProgressBtn.addEventListener("click", resetProgress);
elements.nextBtn.addEventListener("click", showNextQuestion);
elements.profileButtons.forEach((button) => {
  button.addEventListener("click", () => switchProfile(button.dataset.profile));
});
elements.languageButtons.forEach((button) => {
  button.addEventListener("click", () => switchLanguage(button.dataset.language));
});

applyLanguage();
showIdleState(t("readyMessage"));
updateDashboard();
