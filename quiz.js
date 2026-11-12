const questions = [
  ["O que você mais quer facilitar?", [
    ["Decidir as refeições da semana", "P", 2], ["Preparar com menos correria", "T", 2],
    ["Variar as opções", "V", 2], ["Manter a organização ao longo da semana", "C", 2],
  ]],
  ["Quando você costuma decidir o que vai preparar?", [
    ["Antes de a semana começar", "C", 1], ["No próprio dia", "P", 1],
    ["Perto da hora da refeição", "P", 2], ["Depende da semana", "C", 1],
  ]],
  ["Como você costuma organizar as compras?", [
    ["Faço uma lista com base nas refeições", "C", 1], ["Anoto os itens que lembro", "P", 1],
    ["Compro conforme os itens vão faltando", "P", 2], ["Outra pessoa costuma fazer as compras"],
  ]],
  ["O que mais atrapalha sua organização?", [
    ["Ter pouco tempo", "T", 2], ["Ficar sem ideias do que preparar", "V", 2],
    ["Descobrir que falta algum ingrediente", "P", 2], ["Começar a planejar e perder o ritmo", "C", 2],
  ]],
  ["Quanto tempo você costuma reservar para organizar a semana?", [
    ["Até 10 minutos", "T", 1], ["Mais de 10 e até 20 minutos"],
    ["Mais de 20 minutos"], ["Ainda não separo um tempo para isso", "P", 1],
  ]],
  ["Para quantas pessoas você organiza refeições?", [
    ["Só para mim"], ["Duas pessoas"], ["Três ou mais pessoas"], ["Varia ao longo da semana"],
  ]],
  ["Qual recurso ajudaria mais na sua semana?", [
    ["Um calendário semanal", "P", 1], ["Um checklist de preparo", "T", 1],
    ["Um banco de ideias", "V", 1], ["Uma revisão semanal simples", "C", 1],
  ]],
  ["Como você prefere usar um material de planejamento?", [
    ["No celular"], ["Impresso"], ["Das duas formas"],
  ]],
];

const profiles = {
  P: {
    title: "Comece pelas decisões da semana.",
    actions: ["Reserve um momento da semana para olhar sua agenda.",
      "Escolha quais refeições precisam ser decididas com antecedência.",
      "Confira o que já tem em casa e monte a lista com o que falta."],
    offer: "Comece pelo planejador semanal e transforme as refeições escolhidas em uma lista de compras.",
  },
  T: {
    title: "Comece simplificando o preparo.",
    actions: ["Escolha dois dias corridos para organizar primeiro.",
      "Separe em uma lista o que você pode adiantar no tempo que tem.",
      "Deixe uma opção simples escolhida para os dias em que o plano mudar."],
    offer: "Comece pelo checklist de preparo para decidir o que adiantar e quando.",
  },
  V: {
    title: "Comece reunindo suas ideias.",
    actions: ["Anote cinco preparações que você já conhece.",
      "Separe as opções por situação, como dias corridos e dias mais tranquilos.",
      "Escolha duas opções da lista para encaixar na semana."],
    offer: "Comece pelo banco editável de ideias e consulte sua lista quando precisar variar.",
  },
  C: {
    title: "Comece com um plano que caiba na rotina.",
    actions: ["Escolha duas refeições para organizar nesta semana.",
      "Marque um dia para revisar o que funcionou.",
      "Ajuste o plano da próxima semana conforme os horários disponíveis."],
    offer: "Comece pelo roteiro de revisão semanal para repetir o que funcionou e ajustar o restante.",
  },
};

const householdExamples = [
  "Se você organiza só para si, escolha dois dias em que costuma decidir a refeição em cima da hora.",
  "Para duas pessoas, combinem primeiro quais dias os dois vão fazer a mesma refeição.",
  "Para três ou mais pessoas, anote quem costuma comer em casa antes de montar a lista.",
  "Se o número de pessoas varia, marque os dias em que precisa confirmar quantos vão comer.",
];
const formatNotes = [
  "Para usar no celular, abra o planejador e guarde a lista de compras em um lugar fácil de consultar.",
  "Para usar impresso, deixe o planejador em um lugar visível e leve a lista separada às compras.",
  "Para combinar os formatos, deixe o planejador impresso em casa e consulte a lista no celular.",
];

function scoreAnswers(answers) {
  if (answers.length !== questions.length || questions.some(([, choices], index) => !choices[answers[index]])) {
    return null;
  }
  const scores = { P: 0, T: 0, V: 0, C: 0 };
  questions.forEach(([, choices], index) => {
    const [, profile, points] = choices[answers[index]];
    if (profile) scores[profile] += points;
  });
  const highest = Math.max(...Object.values(scores));
  const tied = Object.keys(scores).filter(profile => scores[profile] === highest);
  const preference = questions[0][1][answers[0]][1];
  return tied.includes(preference) ? preference : tied[0];
}

const config = window.ROTINA_CONFIG;
const element = id => document.getElementById(id);
const answers = Array(questions.length).fill(null);
const campaignTags = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
let step = 0;
let currentPage;
let lastStepView;
let started = false;

function validHttps(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password ? url : null;
  } catch {
    return null;
  }
}

const checkoutUrl = validHttps(config.checkoutUrl);
const privacyUrl = validHttps(config.privacyUrl);
const termsUrl = validHttps(config.termsUrl);
const canSell = checkoutUrl?.origin === "https://pay.kiwify.com.br" &&
  /^\/[a-z\d]+\/?$/i.test(checkoutUrl.pathname) && privacyUrl && termsUrl &&
  config.seller.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.supportEmail) &&
  config.accessDetails.trim() && Number.isFinite(config.priceBRL) && config.priceBRL > 0;

function savedPreference() {
  if (!config.measurementEnabled) return null;
  try {
    return localStorage.getItem("rotina-measurement");
  } catch {
    return null;
  }
}
let measurementChoice = savedPreference();

function track(event, details = {}) {
  if (config.measurementEnabled && measurementChoice === "allowed") {
    (window.dataLayer ??= []).push({ event, ...details });
  }
}

function offerDestination() {
  const url = new URL(checkoutUrl);
  if (config.forwardCampaignTags && measurementChoice === "allowed") {
    const source = new URLSearchParams(location.search);
    for (const tag of campaignTags) {
      const value = source.get(tag);
      if (value && /^[a-z\d_.-]{1,100}$/i.test(value)) url.searchParams.set(tag, value);
    }
  }
  return url.href;
}

function updateConsent() {
  element("consent-notice").hidden = !config.measurementEnabled || measurementChoice !== null;
  element("preference-status").textContent = {
    allowed: "Medição permitida neste navegador.",
    declined: "Medição recusada neste navegador.",
  }[measurementChoice] ?? "Nenhuma preferência escolhida.";
  element("allow").disabled = measurementChoice === "allowed";
  element("decline").disabled = measurementChoice === "declined";
  if (canSell) element("checkout").href = offerDestination();
}

function chooseMeasurement(choice) {
  const previous = measurementChoice;
  measurementChoice = choice;
  try {
    localStorage.setItem("rotina-measurement", choice);
  } catch {
    // The choice still applies while this page is open.
  }
  updateConsent();
  window.dispatchEvent(new CustomEvent("rotina:measurement", { detail: { allowed: choice === "allowed" } }));
  if (previous !== "allowed" && choice === "allowed" && currentPage === "home") track("landing_view");
}

function renderQuestion(focus) {
  const [title, choices] = questions[step];
  element("step-label").textContent = `Pergunta ${step + 1} de ${questions.length}`;
  element("progress").value = step + 1;
  element("question-title").textContent = title;
  element("form-error").hidden = true;
  element("continue").textContent = step === questions.length - 1 ? "Ver meu resultado" : "Continuar";
  element("options").replaceChildren(...choices.map(([label], index) => {
    const option = document.createElement("label");
    option.className = "option";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = String(index);
    radio.checked = answers[step] === index;
    const caption = document.createElement("span");
    caption.textContent = label;
    option.append(radio, caption);
    return option;
  }));
  if (focus) focusScreen("question-title");
  if (lastStepView !== step) {
    track("quiz_step_view", { step: step + 1 });
    lastStepView = step;
  }
}

function focusScreen(id) {
  window.scrollTo(0, 0);
  element(id).focus({ preventScroll: true });
}

function renderResult(profile) {
  const result = profiles[profile];
  element("result-title").textContent = result.title;
  element("actions").replaceChildren(...result.actions.map(action => {
    const item = document.createElement("li");
    item.textContent = action;
    return item;
  }));
  element("example").textContent = householdExamples[answers[5]];
  element("offer-lead").textContent = result.offer;
  element("format").textContent = formatNotes[answers[7]];
}

function renderRoute(focus = true) {
  const hash = location.hash;
  const result = scoreAnswers(answers);
  let page = "home";
  if (hash === "#quiz") page = "quiz";
  if (hash === "#resultado" && result) page = "result";
  if (hash === "#resultado" && !result) {
    history.replaceState(null, "", "#quiz");
    page = "quiz";
  }
  const previous = currentPage;
  currentPage = page;
  for (const section of ["home", "quiz", "result"]) element(section).hidden = section !== page;
  if (page === "quiz") {
    if (!started) {
      started = true;
      track("quiz_start");
    }
    renderQuestion(focus);
  } else {
    lastStepView = undefined;
    if (page === "result") {
      renderResult(result);
      if (previous !== "result") track("result_view");
      if (focus) focusScreen("result-title");
    } else {
      if (previous === undefined) track("landing_view");
      if (focus) focusScreen("hero-title");
    }
  }
}

element("question-form").addEventListener("change", event => {
  if (event.target.name === "answer") {
    answers[step] = Number(event.target.value);
    element("form-error").hidden = true;
  }
});

element("question-form").addEventListener("submit", event => {
  event.preventDefault();
  if (answers[step] === null) {
    element("form-error").hidden = false;
    element("options").querySelector("input").focus();
    return;
  }
  if (step < questions.length - 1) {
    step += 1;
    renderQuestion(true);
  } else if (scoreAnswers(answers)) {
    track("quiz_complete");
    location.hash = "resultado";
  }
});

element("back").addEventListener("click", () => {
  if (step === 0) {
    location.hash = "inicio";
    return;
  }
  step -= 1;
  renderQuestion(true);
});
element("edit").addEventListener("click", () => {
  step = questions.length - 1;
  location.hash = "quiz";
});

document.querySelectorAll("[data-dialog]").forEach(button => {
  button.addEventListener("click", () => element(button.dataset.dialog).showModal());
});
element("allow").addEventListener("click", () => chooseMeasurement("allowed"));
element("decline").addEventListener("click", () => chooseMeasurement("declined"));
element("preferences").hidden = !config.measurementEnabled;
element("privacy-measurement").textContent = config.measurementEnabled
  ? "Com sua permissão, a página disponibiliza eventos genéricos de navegação e guarda sua preferência neste navegador. Você pode alterá-la aqui."
  : "A medição opcional está desativada nesta versão.";
if (canSell) {
  element("preview-note").hidden = true;
  element("sale").hidden = false;
  element("price").textContent = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(config.priceBRL);
  element("sale-details").textContent = `Pagamento único. ${config.accessDetails} Suporte em ${config.supportEmail}.`;
  for (const [page, link] of [["terms", termsUrl], ["privacy", privacyUrl]]) {
    element(`${page}-seller`).textContent = `Responsável pela oferta: ${config.seller}. Contato: ${config.supportEmail}.`;
    element(`${page}-seller`).hidden = false;
    element(`${page}-link`).href = link.href;
    element(`${page}-link`).hidden = false;
  }
  element("checkout").addEventListener("click", () => track("offer_click"));
}
updateConsent();
window.addEventListener("hashchange", () => renderRoute());
renderRoute(false);
