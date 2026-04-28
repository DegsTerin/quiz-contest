const BRUNO_QUESTIONS = [
  {
    id: "cg-01",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Segundo a Errata nº 01 do edital, como ficou a distribuição da Prova Objetiva para todos os cargos?",
    options: [
      "10 questões de Conhecimentos Gerais, 10 de Noções de Informática e 20 de Conhecimentos Específicos.",
      "20 questões de Conhecimentos Gerais, 10 de Noções de Informática e 10 de Conhecimentos Específicos.",
      "10 questões de Português, 10 de Matemática, 10 de Informática e 10 de Legislação.",
      "40 questões exclusivamente de Conhecimentos Específicos.",
      "10 questões de Metodologia da Prática Docente, 10 de Informática e 20 de Legislação."
    ],
    answerIndex: 0,
    explanation: "A Errata nº 01 unificou a distribuição: 10 de Conhecimentos Gerais, 10 de Noções de Informática e 20 de Conhecimentos Específicos."
  },
  {
    id: "cg-02",
    category: "Conhecimentos Gerais",
    difficulty: "Fácil",
    prompt: "Qual é a pontuação mínima exigida para aprovação na Prova Objetiva?",
    options: [
      "5,00 pontos.",
      "6,00 pontos.",
      "7,00 pontos.",
      "8,00 pontos.",
      "Apenas comparecimento à prova."
    ],
    answerIndex: 1,
    explanation: "O edital estabelece aprovação com nota mínima de 6,00 pontos na Prova Objetiva."
  },
  {
    id: "cg-03",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Para candidatos sem amparo legal especial, qual critério de desempate vem primeiro após a maior idade legal?",
    options: [
      "Maior pontuação em títulos.",
      "Maior número de acertos em Conhecimentos Específicos.",
      "Maior número de acertos em Conhecimentos Gerais.",
      "Maior número de acertos em Noções de Informática.",
      "Ordem alfabética do nome."
    ],
    answerIndex: 1,
    explanation: "Após a regra legal de idade quando aplicável, o edital prioriza mais acertos em Conhecimentos Específicos."
  },
  {
    id: "cg-04",
    category: "Conhecimentos Gerais",
    difficulty: "Fácil",
    prompt: "Qual princípio da Administração Pública exige atuação voltada ao interesse público, sem favorecimentos pessoais?",
    options: [
      "Impessoalidade.",
      "Publicidade.",
      "Eficiência.",
      "Moralidade.",
      "Especialidade."
    ],
    answerIndex: 0,
    explanation: "A impessoalidade impede favorecimentos pessoais e orienta a atuação administrativa ao interesse público."
  },
  {
    id: "cg-05",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Na Lei de Acesso à Informação, transparência ativa significa:",
    options: [
      "Fornecer informação somente depois de ordem judicial.",
      "Divulgar informações públicas de interesse coletivo independentemente de solicitação.",
      "Manter todos os atos administrativos sob sigilo.",
      "Responder apenas pedidos feitos por servidores públicos.",
      "Exigir justificativa obrigatória para qualquer pedido de informação."
    ],
    answerIndex: 1,
    explanation: "Transparência ativa é a publicação espontânea de informações públicas relevantes, sem necessidade de pedido individual."
  },
  {
    id: "cg-06",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "No contexto da LGPD, qual princípio limita o tratamento de dados pessoais ao mínimo necessário?",
    options: [
      "Adequação.",
      "Necessidade.",
      "Livre acesso.",
      "Qualidade dos dados.",
      "Não discriminação."
    ],
    answerIndex: 1,
    explanation: "O princípio da necessidade determina que apenas os dados indispensáveis à finalidade sejam tratados."
  },
  {
    id: "cg-07",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Em ética no serviço público, uma situação de conflito de interesses ocorre quando:",
    options: [
      "O servidor usa critérios técnicos para decidir.",
      "Um interesse privado pode influenciar o exercício imparcial da função pública.",
      "O servidor se declara impedido de atuar em processo relacionado a familiar.",
      "A administração divulga dados públicos no portal institucional.",
      "A equipe documenta uma decisão administrativa."
    ],
    answerIndex: 1,
    explanation: "Há conflito de interesses quando interesses particulares podem comprometer a imparcialidade da atuação pública."
  },
  {
    id: "cg-08",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "A gestão de riscos institucionais envolve, em sequência lógica:",
    options: [
      "Ignorar, transferir e arquivar riscos.",
      "Identificar, analisar, tratar e monitorar riscos.",
      "Punir, ocultar, substituir e apagar riscos.",
      "Centralizar, terceirizar e eliminar controles.",
      "Comprar, pagar e encerrar riscos."
    ],
    answerIndex: 1,
    explanation: "O ciclo básico de gestão de riscos passa por identificação, análise, tratamento e monitoramento."
  },
  {
    id: "cg-09",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Na organização federativa brasileira, a União, os Estados e os Municípios:",
    options: [
      "Têm competências distribuídas pela Constituição.",
      "Atuam sempre subordinados hierarquicamente aos Municípios.",
      "Não podem executar políticas públicas sociais.",
      "Possuem as mesmas competências em qualquer matéria.",
      "Dependem de autorização privada para legislar."
    ],
    answerIndex: 0,
    explanation: "O federalismo brasileiro distribui competências entre os entes federativos conforme a Constituição."
  },
  {
    id: "cg-10",
    category: "Conhecimentos Gerais",
    difficulty: "Fácil",
    prompt: "No atendimento ao cidadão, linguagem cidadã significa priorizar:",
    options: [
      "Termos técnicos sem explicação.",
      "Clareza, objetividade e compreensão pelo público.",
      "Siglas internas em todos os documentos.",
      "Respostas padronizadas sem relação com o pedido.",
      "Comunicação apenas verbal."
    ],
    answerIndex: 1,
    explanation: "A linguagem cidadã busca tornar a comunicação pública clara, acessível e útil ao cidadão."
  },
  {
    id: "cg-11",
    category: "Conhecimentos Gerais",
    difficulty: "Difícil",
    prompt: "Em continuidade de serviços públicos, uma estratégia adequada diante de indisponibilidade de sistema crítico é:",
    options: [
      "Aguardar a normalização sem plano de contingência.",
      "Acionar plano de continuidade, comunicar partes interessadas e priorizar serviços essenciais.",
      "Apagar logs para evitar responsabilização.",
      "Suspender todos os serviços por tempo indeterminado.",
      "Delegar a decisão exclusivamente ao fornecedor sem fiscalização."
    ],
    answerIndex: 1,
    explanation: "Continuidade exige plano, comunicação, priorização e restauração controlada dos serviços essenciais."
  },
  {
    id: "cg-12",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Sustentabilidade na gestão pública pode envolver:",
    options: [
      "Critérios socioambientais em compras e uso responsável de recursos.",
      "Aumento de desperdício para acelerar contratações.",
      "Descarte de equipamentos sem controle patrimonial.",
      "Vedação total a compras públicas.",
      "Uso exclusivo de papel em todos os processos."
    ],
    answerIndex: 0,
    explanation: "Sustentabilidade na gestão pública inclui critérios socioambientais, eficiência e responsabilidade institucional."
  },
  {
    id: "ni-01",
    category: "Noções de Informática",
    difficulty: "Fácil",
    prompt: "Qual alternativa descreve corretamente uma intranet?",
    options: [
      "Rede privada de uma organização, baseada em tecnologias de internet.",
      "Rede mundial pública sem controle de acesso.",
      "Programa usado apenas para edição de imagens.",
      "Dispositivo físico que substitui o roteador.",
      "Formato de arquivo de apresentação."
    ],
    answerIndex: 0,
    explanation: "Intranet é uma rede privada institucional que usa protocolos e tecnologias comuns à internet."
  },
  {
    id: "ni-02",
    category: "Noções de Informática",
    difficulty: "Fácil",
    prompt: "Em editores de texto, qual recurso é mais adequado para manter títulos padronizados e gerar sumário automaticamente?",
    options: [
      "Estilos de título.",
      "Zoom da página.",
      "Recortar e colar.",
      "Modo avião.",
      "Histórico do navegador."
    ],
    answerIndex: 0,
    explanation: "Estilos estruturam o documento e permitem recursos automáticos como sumário."
  },
  {
    id: "ni-03",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "Em planilhas, a fórmula `=SOMA(A1:A10)` tem a função de:",
    options: [
      "Ordenar os valores de A1 a A10.",
      "Somar os valores do intervalo A1 até A10.",
      "Transformar texto em imagem.",
      "Criar um gráfico de pizza automaticamente.",
      "Bloquear a edição da planilha."
    ],
    answerIndex: 1,
    explanation: "A função SOMA adiciona os valores contidos no intervalo informado."
  },
  {
    id: "ni-04",
    category: "Noções de Informática",
    difficulty: "Fácil",
    prompt: "Qual prática reduz o risco de perda de arquivos em ambiente de nuvem?",
    options: [
      "Trabalhar sempre sem sincronização.",
      "Manter organização de pastas, controle de compartilhamento e cópias de segurança quando necessário.",
      "Compartilhar todos os arquivos como públicos.",
      "Usar nomes idênticos para todos os documentos.",
      "Excluir versões antigas sem avaliação."
    ],
    answerIndex: 1,
    explanation: "Organização, controle de acesso e backup reduzem perdas e exposição indevida."
  },
  {
    id: "ni-05",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "No Google Workspace, qual ferramenta é mais indicada para criar formulários eletrônicos de coleta de respostas?",
    options: [
      "Google Forms.",
      "Google Meet.",
      "Google Calendar.",
      "Google Chat.",
      "Google Keep."
    ],
    answerIndex: 0,
    explanation: "Google Forms é a ferramenta voltada à criação de formulários e coleta estruturada de respostas."
  },
  {
    id: "ni-06",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "Ao receber um e-mail com link suspeito solicitando senha institucional, a conduta mais segura é:",
    options: [
      "Clicar rapidamente antes que expire.",
      "Responder com usuário e senha.",
      "Verificar remetente, evitar clicar e acionar o canal de segurança da organização.",
      "Encaminhar a todos os colegas.",
      "Baixar os anexos para confirmar."
    ],
    answerIndex: 2,
    explanation: "A situação sugere phishing; deve-se evitar interação e acionar os procedimentos de segurança."
  },
  {
    id: "ni-07",
    category: "Noções de Informática",
    difficulty: "Fácil",
    prompt: "Qual alternativa cita apenas navegadores web?",
    options: [
      "Chrome, Firefox e Edge.",
      "Word, Excel e PowerPoint.",
      "Windows, Android e iOS.",
      "PDF, DOCX e XLSX.",
      "CPU, RAM e SSD."
    ],
    answerIndex: 0,
    explanation: "Chrome, Firefox e Edge são navegadores usados para acessar páginas e sistemas web."
  },
  {
    id: "ni-08",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "O formato PDF é especialmente útil quando se deseja:",
    options: [
      "Preservar layout e facilitar leitura em diferentes dispositivos.",
      "Executar código diretamente no sistema operacional.",
      "Substituir banco de dados relacional.",
      "Aumentar a memória RAM.",
      "Criar rede sem fio."
    ],
    answerIndex: 0,
    explanation: "PDF é usado para preservar apresentação visual e distribuir documentos de forma consistente."
  },
  {
    id: "ni-09",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "Qual opção representa sistemas operacionais móveis?",
    options: [
      "Android e iOS.",
      "Chrome e Firefox.",
      "PDF e DOCX.",
      "HTTP e HTTPS.",
      "SQL e NoSQL."
    ],
    answerIndex: 0,
    explanation: "Android e iOS são sistemas operacionais usados em dispositivos móveis."
  },
  {
    id: "ni-10",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "No gerenciamento de arquivos, uma boa prática em ambiente compartilhado é:",
    options: [
      "Usar nomes descritivos e controlar permissões de acesso.",
      "Salvar tudo na área de trabalho de qualquer usuário.",
      "Dar permissão de edição pública para documentos sigilosos.",
      "Apagar arquivos sem verificar retenção ou necessidade.",
      "Evitar qualquer organização por pastas."
    ],
    answerIndex: 0,
    explanation: "Nomes claros e permissões adequadas melhoram localização, colaboração e segurança."
  },
  {
    id: "ni-11",
    category: "Noções de Informática",
    difficulty: "Fácil",
    prompt: "Qual recurso é adequado para reuniões remotas com áudio, vídeo e compartilhamento de tela?",
    options: [
      "Videoconferência.",
      "Compactador de arquivos.",
      "Gerenciador de tarefas local.",
      "Editor hexadecimal.",
      "Desfragmentador de disco."
    ],
    answerIndex: 0,
    explanation: "Ferramentas de videoconferência permitem comunicação síncrona com áudio, vídeo e tela."
  },
  {
    id: "ni-12",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "Noções básicas de segurança da informação incluem:",
    options: [
      "Confidencialidade, integridade e disponibilidade.",
      "Somente velocidade de download.",
      "Apenas edição de textos.",
      "Somente escolha de fonte em apresentações.",
      "Exclusivamente uso de imagens."
    ],
    answerIndex: 0,
    explanation: "A tríade confidencialidade, integridade e disponibilidade é fundamento da segurança da informação."
  },
  {
    id: "ni-13",
    category: "Noções de Informática",
    difficulty: "Média",
    prompt: "Em uma busca na internet, o uso de aspas em uma expressão geralmente serve para:",
    options: [
      "Pesquisar a frase exata.",
      "Traduzir automaticamente a página.",
      "Apagar resultados antigos.",
      "Impedir conexão HTTPS.",
      "Baixar todos os arquivos da página."
    ],
    answerIndex: 0,
    explanation: "Aspas orientam o buscador a procurar a expressão exata informada."
  },
  {
    id: "ce-01",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Na arquitetura de computadores, qual componente executa instruções e coordena operações lógicas e aritméticas?",
    options: [
      "CPU.",
      "SSD.",
      "Monitor.",
      "Switch.",
      "Fonte de alimentação."
    ],
    answerIndex: 0,
    explanation: "A CPU é a unidade central de processamento responsável pela execução de instruções."
  },
  {
    id: "ce-02",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Em sistemas operacionais, escalonamento de processos trata principalmente de:",
    options: [
      "Definir qual processo usará a CPU e por quanto tempo.",
      "Escolher a senha do usuário.",
      "Formatar monitores externos.",
      "Criptografar cabos de rede.",
      "Substituir memória persistente por memória volátil."
    ],
    answerIndex: 0,
    explanation: "O escalonador decide a alocação da CPU entre processos prontos para execução."
  },
  {
    id: "ce-03",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Paginação em gerenciamento de memória tem como objetivo:",
    options: [
      "Dividir memória virtual e física em blocos para permitir mapeamento flexível.",
      "Aumentar a frequência do processador.",
      "Substituir o sistema de arquivos.",
      "Criar usuários administrativos automaticamente.",
      "Eliminar a necessidade de memória RAM."
    ],
    answerIndex: 0,
    explanation: "Paginação permite mapear páginas virtuais em quadros físicos, apoiando memória virtual."
  },
  {
    id: "ce-04",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "No modelo OSI, roteamento e endereçamento lógico pertencem à camada:",
    options: [
      "Física.",
      "Enlace.",
      "Rede.",
      "Transporte.",
      "Aplicação."
    ],
    answerIndex: 2,
    explanation: "A camada de Rede trata de endereçamento lógico e roteamento entre redes."
  },
  {
    id: "ce-05",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em IPv4, a máscara /24 corresponde a:",
    options: [
      "255.0.0.0.",
      "255.255.0.0.",
      "255.255.255.0.",
      "255.255.255.252.",
      "255.255.255.255."
    ],
    answerIndex: 2,
    explanation: "O prefixo /24 indica 24 bits de rede, equivalentes à máscara 255.255.255.0."
  },
  {
    id: "ce-06",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Qual protocolo é usado para traduzir nomes de domínio em endereços IP?",
    options: [
      "DNS.",
      "SMTP.",
      "SSH.",
      "SNMP.",
      "NTP."
    ],
    answerIndex: 0,
    explanation: "DNS realiza resolução de nomes, convertendo domínios em endereços IP."
  },
  {
    id: "ce-07",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em monitoramento de redes, o SNMP é usado principalmente para:",
    options: [
      "Coletar informações e métricas de dispositivos gerenciados.",
      "Criptografar conexões web.",
      "Converter documentos em PDF.",
      "Executar consultas SQL.",
      "Distribuir endereços por DHCP exclusivamente."
    ],
    answerIndex: 0,
    explanation: "SNMP permite gerenciar e monitorar equipamentos de rede por meio de agentes e bases de informação."
  },
  {
    id: "ce-08",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em redes sem fio, WPA3 melhora a segurança em relação a padrões anteriores principalmente por:",
    options: [
      "Usar mecanismos mais fortes de autenticação e proteção contra ataques de dicionário offline.",
      "Eliminar a necessidade de senha em qualquer rede.",
      "Substituir endereçamento IP por Bluetooth.",
      "Aumentar automaticamente o alcance físico da antena.",
      "Impedir qualquer interferência eletromagnética."
    ],
    answerIndex: 0,
    explanation: "WPA3 fortalece autenticação e proteção criptográfica, inclusive contra ataques de adivinhação de senha."
  },
  {
    id: "ce-09",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Virtualização de servidores permite:",
    options: [
      "Executar múltiplas máquinas virtuais sobre o mesmo hardware físico.",
      "Remover a necessidade de sistema operacional.",
      "Transformar todo software em hardware.",
      "Garantir disponibilidade infinita sem backup.",
      "Substituir redes TCP/IP por planilhas."
    ],
    answerIndex: 0,
    explanation: "A virtualização abstrai recursos físicos para hospedar várias máquinas virtuais isoladas."
  },
  {
    id: "ce-10",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Em computação em nuvem, IaaS oferece ao cliente principalmente:",
    options: [
      "Infraestrutura como máquinas virtuais, redes e armazenamento.",
      "Somente aplicativos prontos de escritório.",
      "Apenas consultoria jurídica.",
      "Material impresso e treinamento presencial.",
      "Exclusivamente contas de e-mail."
    ],
    answerIndex: 0,
    explanation: "IaaS entrega recursos básicos de infraestrutura computacional sob demanda."
  },
  {
    id: "ce-11",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "A estratégia de backup 3-2-1 recomenda:",
    options: [
      "Três cópias, em dois tipos de mídia, com uma cópia fora do ambiente principal.",
      "Três senhas, dois usuários e uma planilha.",
      "Três servidores sem cópia externa.",
      "Dois backups anuais e uma restauração manual.",
      "Uma cópia local mantida indefinidamente."
    ],
    answerIndex: 0,
    explanation: "A regra 3-2-1 reduz risco de perda mantendo redundância e uma cópia externa ou isolada."
  },
  {
    id: "ce-12",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Em modelagem relacional, uma chave estrangeira serve para:",
    options: [
      "Relacionar uma tabela a outra por referência a uma chave.",
      "Criptografar todos os registros automaticamente.",
      "Criar backup incremental.",
      "Substituir a chave primária por texto livre.",
      "Eliminar a normalização."
    ],
    answerIndex: 0,
    explanation: "A chave estrangeira representa uma relação entre tabelas e preserva integridade referencial."
  },
  {
    id: "ce-13",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "No contexto ACID de transações, atomicidade significa que:",
    options: [
      "A transação é executada integralmente ou não produz efeito parcial.",
      "Todos os dados ficam públicos.",
      "Consultas sempre retornam em ordem alfabética.",
      "O banco dispensa controle de concorrência.",
      "Índices são recriados a cada SELECT."
    ],
    answerIndex: 0,
    explanation: "Atomicidade garante tudo-ou-nada, evitando estados parciais em caso de falha."
  },
  {
    id: "ce-14",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Uma forma adequada de reduzir risco de SQL Injection em uma API é:",
    options: [
      "Usar consultas parametrizadas e validação de entrada.",
      "Concatenar strings recebidas do usuário diretamente no SQL.",
      "Desativar logs de erro.",
      "Executar o banco sempre como administrador.",
      "Armazenar senhas em texto puro."
    ],
    answerIndex: 0,
    explanation: "Consultas parametrizadas separam dados de comandos SQL e reduzem a exploração por injeção."
  },
  {
    id: "ce-15",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Em controle de versão, um commit representa:",
    options: [
      "Um registro de alterações em um ponto da história do repositório.",
      "Um protocolo de roteamento.",
      "Um tipo de memória cache.",
      "Uma política de firewall.",
      "Um índice de banco de dados."
    ],
    answerIndex: 0,
    explanation: "Commit registra um conjunto de mudanças versionadas no repositório."
  },
  {
    id: "ce-16",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em CI/CD, entrega contínua significa que:",
    options: [
      "O software fica sempre em condição de implantação após validações automatizadas.",
      "Toda alteração é publicada em produção sem testes.",
      "O versionamento deixa de ser necessário.",
      "O banco de dados é apagado a cada compilação.",
      "A equipe não precisa revisar código."
    ],
    answerIndex: 0,
    explanation: "Entrega contínua mantém o produto pronto para implantação confiável, normalmente após testes automatizados."
  },
  {
    id: "ce-17",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Em uma API REST, o método HTTP normalmente usado para recuperar um recurso é:",
    options: [
      "GET.",
      "POST.",
      "PUT.",
      "PATCH.",
      "DELETE."
    ],
    answerIndex: 0,
    explanation: "GET é usado para leitura/recuperação de recursos em APIs HTTP."
  },
  {
    id: "ce-18",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em segurança da informação, autenticação multifator combina:",
    options: [
      "Dois ou mais fatores, como algo que o usuário sabe, possui ou é.",
      "Duas senhas iguais em sistemas diferentes.",
      "Dois navegadores no mesmo computador.",
      "Duas cópias públicas da senha.",
      "Dois bancos de dados sem criptografia."
    ],
    answerIndex: 0,
    explanation: "MFA aumenta segurança ao exigir fatores independentes de verificação."
  },
  {
    id: "ce-19",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em resposta a incidentes, qual etapa vem imediatamente após identificar e confirmar um incidente relevante?",
    options: [
      "Contenção para limitar impacto e propagação.",
      "Divulgação pública de todos os detalhes técnicos.",
      "Descarte de evidências.",
      "Desativação permanente de todos os serviços.",
      "Exclusão de backups."
    ],
    answerIndex: 0,
    explanation: "Após confirmação, a contenção busca limitar danos antes de erradicação e recuperação."
  },
  {
    id: "ce-20",
    category: "Conhecimentos Específicos",
    difficulty: "Média",
    prompt: "Um catálogo de serviços de TI tem como finalidade:",
    options: [
      "Apresentar os serviços disponíveis, níveis esperados e canais de solicitação.",
      "Guardar senhas dos usuários em texto aberto.",
      "Substituir todos os contratos administrativos.",
      "Bloquear qualquer atendimento remoto.",
      "Eliminar a necessidade de suporte ao usuário."
    ],
    answerIndex: 0,
    explanation: "O catálogo organiza a oferta de serviços de TI e melhora a comunicação com usuários."
  },
  {
    id: "ce-21",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em interoperabilidade de sistemas educacionais, uma preocupação central é:",
    options: [
      "Troca padronizada e segura de dados entre plataformas.",
      "Impedir qualquer integração entre sistemas.",
      "Usar somente arquivos impressos.",
      "Trocar dados pessoais sem base legal.",
      "Eliminar autenticação de usuários."
    ],
    answerIndex: 0,
    explanation: "Interoperabilidade exige padrões técnicos, segurança e conformidade legal no compartilhamento de dados."
  },
  {
    id: "ce-22",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Ao elaborar especificação técnica de TI para contratação pública, é mais adequado:",
    options: [
      "Definir requisitos funcionais, não funcionais, critérios de aceite e restrições relevantes.",
      "Indicar produto específico sem justificativa técnica.",
      "Omitir critérios de medição.",
      "Delegar a definição integral ao fornecedor contratado.",
      "Descrever apenas preferências pessoais da equipe."
    ],
    answerIndex: 0,
    explanation: "Boas especificações deixam claros requisitos, critérios de aceite, qualidade e condições de execução."
  },
  {
    id: "ce-23",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em ciência de dados, overfitting ocorre quando um modelo:",
    options: [
      "Ajusta-se demais aos dados de treino e generaliza mal para novos dados.",
      "Nunca aprende padrões dos dados.",
      "É treinado sem qualquer variável.",
      "Executa apenas operações de backup.",
      "Criptografa automaticamente o banco."
    ],
    answerIndex: 0,
    explanation: "Overfitting reduz a capacidade de generalização porque o modelo captura ruído ou particularidades do treino."
  },
  {
    id: "ce-24",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Em IoT no setor público, uma medida essencial de cibersegurança é:",
    options: [
      "Gerenciar credenciais, atualizar firmware e segmentar redes.",
      "Manter senhas padrão de fábrica.",
      "Conectar sensores críticos diretamente à rede pública sem controle.",
      "Desativar registros de acesso.",
      "Usar apenas comunicação sem autenticação."
    ],
    answerIndex: 0,
    explanation: "Dispositivos IoT exigem hardening, atualização, autenticação e segmentação para reduzir exposição."
  },
  {
    id: "ce-25",
    category: "Conhecimentos Específicos",
    difficulty: "Difícil",
    prompt: "Para conformidade com a LGPD em sistemas de informação educacional, é recomendável:",
    options: [
      "Aplicar controle de acesso, finalidade definida, minimização de dados e registro de operações.",
      "Dar acesso irrestrito a todos os dados de estudantes.",
      "Coletar dados sem finalidade específica.",
      "Manter bases sem rastreabilidade.",
      "Compartilhar dados sensíveis por links públicos."
    ],
    answerIndex: 0,
    explanation: "Sistemas educacionais tratam dados pessoais sensíveis e devem aplicar controles técnicos, finalidade e rastreabilidade."
  }
];

const MARIA_QUESTIONS = [
  {
    id: "m-cg-01",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Segundo a Errata nº 01 do Edital 793/SED/2026, como ficou a distribuição da Prova Objetiva para Professor?",
    options: [
      "10 questões de Conhecimentos Gerais, 10 de Metodologia da Prática Docente e 20 de Conhecimentos Específicos.",
      "10 questões de Português, 10 de Informática e 20 de Matemática.",
      "20 questões de Conhecimentos Gerais e 20 de Informática.",
      "40 questões exclusivamente de Conhecimentos Específicos.",
      "10 questões de Legislação, 10 de Libras, 10 de AEE e 10 de Informática."
    ],
    answerIndex: 0,
    explanation: "Para Professor, a errata organiza a prova em 10 questões gerais, 10 de metodologia e 20 específicas."
  },
  {
    id: "m-cg-02",
    category: "Conhecimentos Gerais",
    difficulty: "Fácil",
    prompt: "Qual é a nota mínima prevista para aprovação na Prova Objetiva?",
    options: [
      "4,00 pontos.",
      "5,00 pontos.",
      "6,00 pontos.",
      "7,50 pontos.",
      "Apenas presença no dia da prova."
    ],
    answerIndex: 2,
    explanation: "O edital exige nota mínima de 6,00 pontos na Prova Objetiva."
  },
  {
    id: "m-cg-03",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "No desempate para Professor, depois da regra legal de maior idade quando aplicável, qual critério aparece primeiro?",
    options: [
      "Maior número de acertos em Conhecimentos Específicos.",
      "Maior número de acertos em Conhecimentos Gerais.",
      "Maior pontuação em Metodologia da Prática Docente.",
      "Maior tempo de inscrição no concurso.",
      "Ordem alfabética."
    ],
    answerIndex: 0,
    explanation: "A errata prioriza Conhecimentos Específicos no desempate, seguido por Metodologia e Conhecimentos Gerais."
  },
  {
    id: "m-cg-04",
    category: "Conhecimentos Gerais",
    difficulty: "Fácil",
    prompt: "Uma atribuição essencial do professor da rede pública é:",
    options: [
      "Planejar, ministrar aulas, avaliar aprendizagens e participar das atividades pedagógicas da escola.",
      "Atuar apenas em tarefas administrativas sem contato com estudantes.",
      "Substituir o projeto político-pedagógico por decisões individuais.",
      "Aplicar avaliações externas sem análise pedagógica.",
      "Definir sozinho as normas do sistema estadual de ensino."
    ],
    answerIndex: 0,
    explanation: "A função docente envolve planejamento, ensino, avaliação e participação na vida pedagógica escolar."
  },
  {
    id: "m-cg-05",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "A Lei Geral de Proteção de Dados é especialmente relevante na escola porque:",
    options: [
      "Autoriza a divulgação pública de dados de estudantes sem finalidade.",
      "Dispensa cuidado com dados de crianças e adolescentes.",
      "Exige finalidade, segurança e necessidade no tratamento de dados pessoais.",
      "Permite compartilhar laudos e relatórios em grupos abertos.",
      "Substitui o dever de sigilo profissional."
    ],
    answerIndex: 2,
    explanation: "Dados educacionais e de saúde/deficiência exigem tratamento com finalidade, minimização, segurança e sigilo."
  },
  {
    id: "m-cg-06",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "O Plano Estadual de Educação orienta a gestão pública educacional principalmente por meio de:",
    options: [
      "Metas e estratégias para ampliar acesso, qualidade, inclusão e valorização da educação.",
      "Regras de comércio exterior para escolas.",
      "Normas exclusivamente contábeis para empresas privadas.",
      "Critérios para substituir o currículo por cursos livres.",
      "Proibição de avaliação institucional."
    ],
    answerIndex: 0,
    explanation: "Planos de educação estruturam metas e estratégias para políticas públicas educacionais."
  },
  {
    id: "m-cg-07",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Indicadores como aprovação, reprovação, abandono e distorção idade-série ajudam a escola a:",
    options: [
      "Produzir diagnósticos e planejar intervenções pedagógicas.",
      "Classificar estudantes de forma definitiva.",
      "Dispensar o acompanhamento individual.",
      "Eliminar a necessidade de planejamento.",
      "Substituir o trabalho docente por ranking."
    ],
    answerIndex: 0,
    explanation: "Indicadores são instrumentos de leitura da realidade e devem orientar ações pedagógicas e de gestão."
  },
  {
    id: "m-cg-08",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "O Fundeb está relacionado ao financiamento de:",
    options: [
      "Manutenção e desenvolvimento da educação básica pública e valorização dos profissionais da educação.",
      "Exclusivamente obras rodoviárias.",
      "Apenas universidades privadas.",
      "Programas de saúde sem relação com educação.",
      "Publicidade institucional sem limite."
    ],
    answerIndex: 0,
    explanation: "O Fundeb é mecanismo central de financiamento da educação básica pública."
  },
  {
    id: "m-cg-09",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "Na comunicação com famílias e estudantes, linguagem cidadã significa:",
    options: [
      "Usar termos técnicos sem explicação.",
      "Comunicar com clareza, respeito, objetividade e acessibilidade.",
      "Ocultar informações escolares relevantes.",
      "Responder apenas por siglas internas.",
      "Evitar registros formais."
    ],
    answerIndex: 1,
    explanation: "A linguagem cidadã aproxima o serviço público da população e facilita compreensão e participação."
  },
  {
    id: "m-cg-10",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "O princípio da impessoalidade na Administração Pública exige que o servidor:",
    options: [
      "Atue conforme o interesse público, sem favorecimento ou perseguição pessoal.",
      "Escolha estudantes por preferência pessoal.",
      "Ignore normas coletivas da escola.",
      "Priorize interesses privados em decisões públicas.",
      "Divulgue dados pessoais por afinidade."
    ],
    answerIndex: 0,
    explanation: "A impessoalidade impede favorecimentos e orienta a atuação pública por critérios objetivos."
  },
  {
    id: "m-cg-11",
    category: "Conhecimentos Gerais",
    difficulty: "Difícil",
    prompt: "Em uma política pública inclusiva, articulação intersetorial significa:",
    options: [
      "A escola atuar isoladamente, sem contato com saúde, assistência ou família.",
      "Integrar educação, família e demais serviços quando necessário, respeitando sigilo e responsabilidades.",
      "Transferir a responsabilidade pedagógica apenas para a família.",
      "Substituir o currículo por atendimento clínico.",
      "Permitir acesso irrestrito a documentos sensíveis."
    ],
    answerIndex: 1,
    explanation: "A inclusão pode exigir diálogo entre setores, mas sem abandonar o papel pedagógico da escola nem violar sigilo."
  },
  {
    id: "m-cg-12",
    category: "Conhecimentos Gerais",
    difficulty: "Média",
    prompt: "A transparência ativa no serviço público consiste em:",
    options: [
      "Divulgar informações públicas de interesse coletivo independentemente de solicitação.",
      "Responder somente quando houver processo judicial.",
      "Manter todos os atos em sigilo permanente.",
      "Exigir justificativa para qualquer informação pública.",
      "Enviar dados pessoais de estudantes a terceiros."
    ],
    answerIndex: 0,
    explanation: "Transparência ativa é a publicação espontânea de informações públicas, preservados os sigilos legais."
  },
  {
    id: "m-md-01",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "Na perspectiva sociointeracionista, a aprendizagem é favorecida quando o professor:",
    options: [
      "Media interações, propõe desafios e considera conhecimentos prévios dos estudantes.",
      "Elimina a participação dos estudantes.",
      "Foca apenas em memorização mecânica sem contexto.",
      "Avalia somente ao fim do ano.",
      "Evita qualquer trabalho colaborativo."
    ],
    answerIndex: 0,
    explanation: "A mediação docente e a interação social são centrais para aprendizagem significativa nessa perspectiva."
  },
  {
    id: "m-md-02",
    category: "Metodologia da Prática Docente",
    difficulty: "Fácil",
    prompt: "Um bom planejamento de aula deve conter principalmente:",
    options: [
      "Objetivos, conteúdos, estratégias, recursos, avaliação e possíveis adaptações.",
      "Apenas lista de exercícios, sem objetivos.",
      "Somente o nome do professor.",
      "Um roteiro fixo que não pode ser ajustado.",
      "Apenas a nota final da turma."
    ],
    answerIndex: 0,
    explanation: "Planejar é organizar intencionalmente objetivos, caminhos, recursos e formas de acompanhamento."
  },
  {
    id: "m-md-03",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "O Projeto Político-Pedagógico da escola deve ser entendido como:",
    options: [
      "Documento coletivo que orienta identidade, metas, práticas e organização pedagógica.",
      "Documento secreto da direção.",
      "Plano individual de cada estudante.",
      "Registro substituto da legislação educacional.",
      "Calendário de festas sem relação pedagógica."
    ],
    answerIndex: 0,
    explanation: "O PPP expressa decisões coletivas sobre a função social, organização e práticas da escola."
  },
  {
    id: "m-md-04",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "A avaliação formativa se caracteriza por:",
    options: [
      "Acompanhar o processo de aprendizagem e orientar intervenções durante o percurso.",
      "Apenas classificar estudantes no fim do período.",
      "Eliminar devolutivas aos estudantes.",
      "Ser aplicada somente em provas externas.",
      "Dispensar registros pedagógicos."
    ],
    answerIndex: 0,
    explanation: "A avaliação formativa acompanha, devolve informações e apoia ajustes pedagógicos contínuos."
  },
  {
    id: "m-md-05",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "O Desenho Universal para a Aprendizagem propõe:",
    options: [
      "Múltiplas formas de engajamento, representação e expressão da aprendizagem.",
      "Uma única forma de ensinar para todos.",
      "Retirar objetivos curriculares de estudantes com deficiência.",
      "Substituir a mediação docente por tecnologia.",
      "Aplicar sempre a mesma prova sem adaptações."
    ],
    answerIndex: 0,
    explanation: "O DUA busca reduzir barreiras oferecendo diferentes meios para acessar, participar e demonstrar aprendizagem."
  },
  {
    id: "m-md-06",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "Metodologias ativas são mais bem representadas por práticas que:",
    options: [
      "Colocam o estudante em participação investigativa, colaborativa e reflexiva.",
      "Exigem silêncio absoluto e cópia permanente.",
      "Dispensam objetivos de aprendizagem.",
      "Impedem trabalho em grupo.",
      "Transformam o professor em mero espectador sem intervenção."
    ],
    answerIndex: 0,
    explanation: "Metodologias ativas ampliam protagonismo discente com mediação pedagógica clara."
  },
  {
    id: "m-md-07",
    category: "Metodologia da Prática Docente",
    difficulty: "Difícil",
    prompt: "Uma adaptação curricular adequada para inclusão deve:",
    options: [
      "Reduzir barreiras de acesso ao currículo sem excluir o estudante das experiências da turma.",
      "Retirar o estudante da sala comum sempre que houver dificuldade.",
      "Eliminar qualquer expectativa de aprendizagem.",
      "Ser definida sem diálogo com professores e família.",
      "Impedir uso de tecnologia assistiva."
    ],
    answerIndex: 0,
    explanation: "Adaptações devem garantir participação e aprendizagem, preservando vínculo com o currículo e a turma."
  },
  {
    id: "m-md-08",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "Recuperação paralela significa:",
    options: [
      "Intervenções durante o processo para superar dificuldades de aprendizagem.",
      "Apenas nova prova no fim do ano.",
      "Punição para quem não aprendeu.",
      "Dispensa de frequência escolar.",
      "Atividade sem relação com diagnóstico."
    ],
    answerIndex: 0,
    explanation: "A recuperação deve acontecer ao longo do percurso, com base em diagnóstico e replanejamento."
  },
  {
    id: "m-md-09",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "O uso pedagógico de avaliações externas deve servir para:",
    options: [
      "Ler evidências, identificar desigualdades e planejar ações, sem reduzir o currículo ao teste.",
      "Punir automaticamente estudantes com baixo desempenho.",
      "Substituir todas as avaliações da escola.",
      "Ignorar o contexto social e pedagógico.",
      "Cancelar o planejamento docente."
    ],
    answerIndex: 0,
    explanation: "Avaliações externas podem orientar decisões, mas não devem empobrecer o currículo nem substituir avaliação escolar."
  },
  {
    id: "m-md-10",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "A aprendizagem cooperativa pressupõe:",
    options: [
      "Interdependência positiva, responsabilidade individual e interação entre estudantes.",
      "Competição permanente sem colaboração.",
      "Trabalho em grupo sem objetivo comum.",
      "Um estudante fazendo tudo sozinho.",
      "Ausência de mediação docente."
    ],
    answerIndex: 0,
    explanation: "Na cooperação, o grupo aprende junto, mas cada estudante também mantém responsabilidade pelo processo."
  },
  {
    id: "m-md-11",
    category: "Metodologia da Prática Docente",
    difficulty: "Difícil",
    prompt: "Em uma turma heterogênea, diferenciação pedagógica significa:",
    options: [
      "Variar estratégias, recursos e formas de expressão para atender necessidades sem baixar expectativas indevidamente.",
      "Separar definitivamente estudantes por desempenho.",
      "Dar a mesma tarefa da mesma forma para todos sempre.",
      "Eliminar objetivos para estudantes que precisam de apoio.",
      "Avaliar apenas com prova escrita padronizada."
    ],
    answerIndex: 0,
    explanation: "Diferenciar é ajustar caminhos e suportes mantendo compromisso com aprendizagem e participação."
  },
  {
    id: "m-md-12",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "Uma rubrica avaliativa é útil porque:",
    options: [
      "Explicita critérios e níveis de desempenho esperados.",
      "Oculta os critérios de correção.",
      "Serve apenas para calcular frequência.",
      "Substitui todo feedback do professor.",
      "Impede autoavaliação."
    ],
    answerIndex: 0,
    explanation: "Rubricas tornam critérios mais claros e favorecem feedback, autoavaliação e acompanhamento."
  },
  {
    id: "m-md-13",
    category: "Metodologia da Prática Docente",
    difficulty: "Média",
    prompt: "A gestão de sala inclusiva exige do professor:",
    options: [
      "Rotinas claras, vínculos respeitosos, mediação de conflitos e participação de todos.",
      "Padronização rígida que ignore necessidades específicas.",
      "Isolamento de estudantes com deficiência.",
      "Ausência de combinados coletivos.",
      "Foco apenas em controle disciplinar."
    ],
    answerIndex: 0,
    explanation: "Ambientes inclusivos combinam organização, acolhimento, expectativas claras e participação."
  },
  {
    id: "m-aee-01",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "Na política de educação especial, o público-alvo do AEE inclui principalmente estudantes com:",
    options: [
      "Deficiência, transtorno do espectro autista e altas habilidades/superdotação.",
      "Apenas dificuldades temporárias de estudo.",
      "Qualquer estudante que tenha nota baixa.",
      "Somente estudantes sem matrícula na classe comum.",
      "Exclusivamente estudantes adultos."
    ],
    answerIndex: 0,
    explanation: "A legislação de educação especial focaliza deficiência, TEA e altas habilidades/superdotação como público-alvo."
  },
  {
    id: "m-aee-02",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "O Plano de Desenvolvimento Individual deve:",
    options: [
      "Registrar avaliação, objetivos, estratégias, recursos, responsabilidades e acompanhamento do estudante.",
      "Ser uma lista genérica igual para todos.",
      "Substituir o currículo da turma.",
      "Ser feito apenas ao final do ano.",
      "Ficar sem revisão após elaborado."
    ],
    answerIndex: 0,
    explanation: "O PDI orienta a intervenção individualizada e precisa ser acompanhado e ajustado continuamente."
  },
  {
    id: "m-aee-03",
    category: "Específicos - AEE/Misto",
    difficulty: "Difícil",
    prompt: "A avaliação funcional no AEE busca identificar:",
    options: [
      "Barreiras, potencialidades, formas de comunicação, autonomia e necessidades de apoio.",
      "Somente a nota final do estudante.",
      "A causa médica como único dado relevante.",
      "A classificação definitiva para excluir da turma comum.",
      "A opinião de uma única pessoa sem observação."
    ],
    answerIndex: 0,
    explanation: "A avaliação funcional é pedagógica e contextual, voltada a apoios, barreiras e participação."
  },
  {
    id: "m-aee-04",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "Tecnologia assistiva pode ser definida como:",
    options: [
      "Recursos e serviços que ampliam funcionalidade, autonomia, comunicação e participação.",
      "Apenas computadores de alto custo.",
      "Qualquer atividade sem objetivo pedagógico.",
      "Material usado para substituir o professor.",
      "Recurso proibido em sala comum."
    ],
    answerIndex: 0,
    explanation: "Tecnologia assistiva reúne soluções simples ou complexas para reduzir barreiras e ampliar participação."
  },
  {
    id: "m-aee-05",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "Comunicação aumentativa e alternativa é indicada quando:",
    options: [
      "O estudante precisa de apoios para expressar-se ou compreender por meios além da fala oral convencional.",
      "O estudante já domina plenamente todos os gêneros escritos.",
      "A escola quer impedir interação social.",
      "O objetivo é retirar conteúdos curriculares.",
      "Não há necessidade de participação da família ou equipe."
    ],
    answerIndex: 0,
    explanation: "CAA amplia possibilidades comunicativas com imagens, símbolos, pranchas, gestos, dispositivos e outros recursos."
  },
  {
    id: "m-aee-06",
    category: "Específicos - AEE/Misto",
    difficulty: "Difícil",
    prompt: "No atendimento a estudante com deficiência visual, um conjunto adequado de apoios pode incluir:",
    options: [
      "Braille, orientação e mobilidade, materiais táteis, audiodescrição e recursos digitais acessíveis.",
      "Somente cópia do quadro em letra pequena.",
      "Proibição de participação em atividades práticas.",
      "Uso exclusivo de imagens sem descrição.",
      "Avaliação apenas oral para todos os conteúdos."
    ],
    answerIndex: 0,
    explanation: "A acessibilidade visual combina recursos táteis, sonoros, digitais e estratégias pedagógicas."
  },
  {
    id: "m-aee-07",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "Para estudantes com TEA, uma prática pedagógica frequentemente útil é:",
    options: [
      "Organizar rotinas previsíveis, apoios visuais e comunicação clara, com flexibilidade individual.",
      "Aplicar mudanças bruscas sem antecipação.",
      "Retirar toda interação social da rotina.",
      "Usar punição como principal estratégia.",
      "Ignorar interesses e sensibilidades sensoriais."
    ],
    answerIndex: 0,
    explanation: "Previsibilidade, apoios visuais e comunicação objetiva podem reduzir barreiras e favorecer participação."
  },
  {
    id: "m-aee-08",
    category: "Específicos - AEE/Misto",
    difficulty: "Difícil",
    prompt: "Na surdocegueira, a intervenção educacional tende a exigir:",
    options: [
      "Estratégias multissensoriais, comunicação individualizada e trabalho articulado com a equipe.",
      "Apenas explicação oral distante.",
      "Material exclusivamente visual sem adaptação.",
      "Ausência de mediação comunicativa.",
      "Avaliação padronizada sem apoios."
    ],
    answerIndex: 0,
    explanation: "A surdocegueira exige planejamento comunicativo e sensorial muito individualizado."
  },
  {
    id: "m-aee-09",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "O professor do AEE deve atuar em relação à sala comum de forma:",
    options: [
      "Articulada, colaborando com professores para reduzir barreiras e apoiar o acesso ao currículo.",
      "Isolada, sem comunicação com a equipe docente.",
      "Substitutiva, assumindo todas as aulas da turma.",
      "Clínica, sem objetivos pedagógicos.",
      "Apenas administrativa."
    ],
    answerIndex: 0,
    explanation: "O AEE complementa ou suplementa a escolarização e precisa dialogar com a sala comum."
  },
  {
    id: "m-aee-10",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "Para altas habilidades/superdotação, uma estratégia adequada é:",
    options: [
      "Enriquecimento curricular, investigação, projetos e desafios compatíveis com interesses e potencialidades.",
      "Reduzir oportunidades de aprendizagem para igualar a turma.",
      "Ignorar interesses específicos do estudante.",
      "Aplicar apenas tarefas repetitivas.",
      "Impedir participação em projetos."
    ],
    answerIndex: 0,
    explanation: "O enriquecimento curricular amplia profundidade, complexidade e autonomia na aprendizagem."
  },
  {
    id: "m-aee-11",
    category: "Específicos - AEE/Misto",
    difficulty: "Difícil",
    prompt: "A Lei Brasileira de Inclusão reforça que a educação da pessoa com deficiência deve ocorrer:",
    options: [
      "Em sistema educacional inclusivo, com acessibilidade, apoios e participação em igualdade de oportunidades.",
      "Apenas em instituições segregadas.",
      "Sem adaptações razoáveis.",
      "Com matrícula condicionada à existência de laudo perfeito.",
      "Fora do sistema regular sempre que houver necessidade de apoio."
    ],
    answerIndex: 0,
    explanation: "A LBI consolida o direito à educação inclusiva e aos apoios necessários para participação."
  },
  {
    id: "m-aee-12",
    category: "Específicos - AEE/Misto",
    difficulty: "Média",
    prompt: "Adequações avaliativas para estudantes público-alvo da educação especial devem:",
    options: [
      "Manter foco nos objetivos de aprendizagem, oferecendo recursos, tempo ou formas acessíveis de resposta.",
      "Eliminar qualquer critério pedagógico.",
      "Ser sempre iguais para todos os estudantes.",
      "Impedir demonstração de aprendizagem por meios alternativos.",
      "Servir para aprovar automaticamente."
    ],
    answerIndex: 0,
    explanation: "Adequações avaliativas removem barreiras sem abandonar objetivos pedagógicos e acompanhamento real."
  },
  {
    id: "m-aee-13",
    category: "Específicos - AEE/Misto",
    difficulty: "Difícil",
    prompt: "O monitoramento do PDI deve ocorrer para:",
    options: [
      "Verificar avanços, registrar evidências e ajustar estratégias quando necessário.",
      "Arquivar o documento sem novas análises.",
      "Comparar estudantes por ranking.",
      "Substituir reuniões pedagógicas.",
      "Dispensar diálogo com a família."
    ],
    answerIndex: 0,
    explanation: "O PDI é vivo: precisa de registros, análise de evidências e replanejamento."
  },
  {
    id: "m-lib-01",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Média",
    prompt: "A concepção socioantropológica da surdez compreende a pessoa surda principalmente como:",
    options: [
      "Sujeito pertencente a uma comunidade linguística e cultural, não reduzido à deficiência auditiva.",
      "Pessoa que deve abandonar a Libras obrigatoriamente.",
      "Paciente definido apenas por perda auditiva.",
      "Estudante sem direito à escolarização comum.",
      "Indivíduo incapaz de desenvolver língua."
    ],
    answerIndex: 0,
    explanation: "A perspectiva socioantropológica valoriza identidade, cultura surda e língua de sinais."
  },
  {
    id: "m-lib-02",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Média",
    prompt: "São parâmetros linguísticos da Libras:",
    options: [
      "Configuração de mão, ponto de articulação, movimento, orientação e expressões não manuais.",
      "Apenas alfabeto manual e leitura labial.",
      "Somente palavras escritas em português.",
      "Pontuação, acento gráfico e parágrafo.",
      "Tempo verbal escrito e concordância nominal do português."
    ],
    answerIndex: 0,
    explanation: "A Libras possui parâmetros visuais-espaciais próprios, incluindo expressões faciais e corporais."
  },
  {
    id: "m-lib-03",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Difícil",
    prompt: "Classificadores em Libras são recursos que:",
    options: [
      "Representam características, movimentos, formas, posições ou relações espaciais de referentes.",
      "Servem apenas para soletrar nomes próprios.",
      "Copiam a ordem sintática do português palavra por palavra.",
      "Eliminam expressões não manuais.",
      "São proibidos em contexto educacional."
    ],
    answerIndex: 0,
    explanation: "Classificadores exploram a modalidade visual-espacial para representar referentes e ações."
  },
  {
    id: "m-lib-04",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Média",
    prompt: "Sobre iconicidade na Libras, é correto afirmar que:",
    options: [
      "Alguns sinais têm relação visual com o referente, mas a língua não é mera mímica.",
      "Todos os sinais são universais e iguais em todos os países.",
      "A Libras não possui gramática.",
      "Iconicidade impede variação linguística.",
      "Todo sinal pode ser compreendido sem aprendizado."
    ],
    answerIndex: 0,
    explanation: "A iconicidade existe, mas a Libras é língua natural com regras, variação e arbitrariedade."
  },
  {
    id: "m-lib-05",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Difícil",
    prompt: "A organização espacial do discurso em Libras permite:",
    options: [
      "Estabelecer referentes no espaço, marcar relações e organizar coesão do discurso.",
      "Eliminar concordância e referenciação.",
      "Traduzir sempre na ordem literal do português.",
      "Usar somente sinais isolados sem contexto.",
      "Substituir expressões faciais por pontuação escrita."
    ],
    answerIndex: 0,
    explanation: "O espaço é elemento gramatical da Libras, usado para referenciação, concordância e organização discursiva."
  },
  {
    id: "m-lib-06",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Difícil",
    prompt: "Na educação bilíngue de surdos, a relação mais adequada entre Libras e Língua Portuguesa é:",
    options: [
      "Libras como língua de instrução/primeira língua e português escrito como segunda língua, conforme o contexto.",
      "Português oral obrigatório como única língua.",
      "Libras apenas como gesto auxiliar sem valor linguístico.",
      "Exclusão do português escrito.",
      "Uso de qualquer língua sem planejamento."
    ],
    answerIndex: 0,
    explanation: "A abordagem bilíngue reconhece a Libras como língua central e o português escrito como L2."
  },
  {
    id: "m-lib-07",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Média",
    prompt: "Na interpretação educacional, o intérprete de Libras deve:",
    options: [
      "Mediar linguisticamente com ética, fidelidade, sigilo e respeito aos limites da função.",
      "Assumir o papel de professor titular da disciplina.",
      "Alterar conteúdos conforme opinião pessoal.",
      "Avaliar sozinho o desempenho final do estudante.",
      "Omitir informações difíceis para simplificar sempre."
    ],
    answerIndex: 0,
    explanation: "O intérprete atua na mediação linguística e deve preservar ética, fidelidade e limites profissionais."
  },
  {
    id: "m-lib-08",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Média",
    prompt: "A Lei nº 10.436/2002 é importante porque:",
    options: [
      "Reconhece a Libras como meio legal de comunicação e expressão.",
      "Extingue a Língua Portuguesa nas escolas.",
      "Proíbe o uso de Libras em órgãos públicos.",
      "Regulamenta apenas transporte escolar.",
      "Define Libras como linguagem universal sem gramática."
    ],
    answerIndex: 0,
    explanation: "A Lei 10.436/2002 reconhece oficialmente a Libras no Brasil."
  },
  {
    id: "m-lib-09",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Difícil",
    prompt: "O Decreto nº 5.626/2005 regulamenta aspectos como:",
    options: [
      "Formação, ensino, uso e difusão da Libras e acessibilidade linguística para pessoas surdas.",
      "Apenas merenda escolar.",
      "Exclusivamente contratação de obras públicas.",
      "Proibição de intérpretes educacionais.",
      "Substituição da Libras por leitura labial."
    ],
    answerIndex: 0,
    explanation: "O decreto detalha políticas de Libras, formação de profissionais e acessibilidade comunicacional."
  },
  {
    id: "m-lib-10",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Difícil",
    prompt: "A análise contrastiva entre Libras e Língua Portuguesa ajuda o professor/intérprete a perceber que:",
    options: [
      "As línguas têm modalidades e estruturas distintas, exigindo escolhas tradutórias e pedagógicas adequadas.",
      "Libras deve copiar palavra por palavra a estrutura do português.",
      "Não há diferença entre língua sinalizada e língua oral-escrita.",
      "A tradução literal sempre garante compreensão.",
      "O português escrito não precisa ser ensinado."
    ],
    answerIndex: 0,
    explanation: "Comparar estruturas evita tradução mecânica e apoia ensino do português escrito como L2."
  },
  {
    id: "m-lib-11",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Média",
    prompt: "No contexto bilíngue, o DUA favorece estudantes surdos quando:",
    options: [
      "Oferece recursos visuais, Libras, português escrito acessível e múltiplas formas de participação.",
      "Retira a Libras da aula.",
      "Usa apenas exposição oral sem apoio visual.",
      "Impede interação com colegas.",
      "Aplica avaliações sem considerar modalidade linguística."
    ],
    answerIndex: 0,
    explanation: "O DUA amplia acesso ao conteúdo por diferentes modos, respeitando a experiência visual dos estudantes surdos."
  },
  {
    id: "m-lib-12",
    category: "Específicos - Intérprete da Libras",
    difficulty: "Média",
    prompt: "Em avaliações de estudantes surdos usuários de Libras, uma prática adequada é:",
    options: [
      "Garantir acessibilidade linguística e critérios coerentes com os objetivos avaliados.",
      "Avaliar somente oralidade em português.",
      "Desconsiderar a Libras na compreensão do enunciado.",
      "Punir diferenças linguísticas sem análise pedagógica.",
      "Impedir uso de recursos visuais."
    ],
    answerIndex: 0,
    explanation: "Avaliação bilíngue deve separar barreiras linguísticas do objetivo real de aprendizagem."
  }
];

const QUESTION_SETS = {
  bruno: {
    owner: "Bruno",
    title: "Quiz Analista de Informática",
    description: "Questões alinhadas ao edital SED/SC 794/2026 para Analista de Informática, com revisão de erros e repetição espaçada simples.",
    questions: BRUNO_QUESTIONS
  },
  maria: {
    owner: "Maria",
    title: "Quiz Professora AEE/Misto e Libras",
    description: "Questões alinhadas ao edital SED/SC 793/2026 para AEE/Misto e Intérprete da Libras, com foco no nível da prova.",
    questions: MARIA_QUESTIONS
  }
};
