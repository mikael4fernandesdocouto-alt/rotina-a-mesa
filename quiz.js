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
    name: "Decisão",
    title: "O seu gargalo está na decisão.",
    summary: "Você não trava por falta de tempo. Trava porque a refeição continua sendo uma decisão aberta na hora em que você já está com fome. Cada escolha adiada vira delivery, lanche ou o mesmo prato de sempre.",
    error: "O plano quebra quando a semana começa e nenhuma refeição está nomeada. Aí a decisão volta para o momento de maior cansaço, e é exatamente ali que ela costuma falhar.",
    gains: [
      "Você para de decidir o que comer já com fome.",
      "A lista de compras passa a ter destino, não só variedade.",
      "A semana começa com duas refeições resolvidas antes da segunda-feira.",
    ],
    actions: ["Reserve um momento da semana para olhar sua agenda.",
      "Escolha quais refeições precisam ser decididas com antecedência.",
      "Confira o que já tem em casa e monte a lista com o que falta."],
    offer: "O planejador semanal transforma as refeições que você já escolheu em uma lista de compras pronta.",
  },
  T: {
    name: "Tempo",
    title: "O seu gargalo está no tempo.",
    summary: "A sua rotina não comporta uma organização longa. Quando o método pede mais tempo do que você tem, ele é abandonado na segunda ou na terça, e a semana volta para o improviso.",
    error: "O plano quebra quando ele exige uma hora de domingo que você não tem. Sem um recorte de 15 minutos, a semana inteira fica sem ponto de partida.",
    gains: [
      "Você sabe o que adiantar primeiro, mesmo em dia corrido.",
      "O preparo deixa de competir com o cansaço no fim do dia.",
      "Uma opção simples fica pronta para quando o plano mudar.",
    ],
    actions: ["Escolha dois dias corridos para organizar primeiro.",
      "Separe em uma lista o que você pode adiantar no tempo que tem.",
      "Deixe uma opção simples escolhida para os dias em que o plano mudar."],
    offer: "O checklist de preparo resolve o que fazer primeiro nos dias em que não sobra tempo.",
  },
  V: {
    name: "Variedade",
    title: "O seu gargalo está na variedade.",
    summary: "Você sabe cozinhar, mas repete sempre as mesmas cinco coisas. Sem repertório à mão, variar vira improviso, e o improviso termina no mesmo pedido de delivery de sempre.",
    error: "O plano quebra quando chega a hora de escolher e você não lembra de nada além do arroz com frango. A falta de repertório é lida como falta de vontade, mas é falta de lista.",
    gains: [
      "Você consulta ideias em vez de tentar lembrar delas.",
      "As opções ficam separadas por tipo de dia: corrido ou tranquilo.",
      "A semana ganha variação sem aumentar o tempo de preparo.",
    ],
    actions: ["Anote cinco preparações que você já conhece.",
      "Separe as opções por situação, como dias corridos e dias mais tranquilos.",
      "Escolha duas opções da lista para encaixar na semana."],
    offer: "O banco de ideias editável resolve o \"não sei o que fazer\" antes que ele vire pedido de delivery.",
  },
  C: {
    name: "Constância",
    title: "O seu gargalo está na constância.",
    summary: "Você começa bem, mas perde o ritmo no meio da semana. Não é falta de plano. É falta de um plano que sobreviva à semana que realmente aconteceu.",
    error: "O plano quebra na quinta-feira, quando um imprevisto desmonta dois dias e você abandona o restante. Sem uma revisão curta, o que funcionou não é reaproveitado.",
    gains: [
      "O que funcionou é repetido em vez de redescoberto.",
      "Um imprevisto ajusta dois dias, não a semana inteira.",
      "O plano da semana seguinte nasce do que já deu certo.",
    ],
    actions: ["Escolha duas refeições para organizar nesta semana.",
      "Marque um dia para revisar o que funcionou.",
      "Ajuste o plano da próxima semana conforme os horários disponíveis."],
    offer: "O roteiro de revisão semanal mostra o que repetir e o que ajustar, para o plano não morrer na quinta.",
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

function maxFor(profile) {
  let max = 0;
  for (const [, choices] of questions) {
    const best = Math.max(0, ...choices.filter(([, key]) => key === profile).map(([, , points]) => points || 0));
    max += best;
  }
  return max;
}

function evaluate(answers) {
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
  return { profile: tied.includes(preference) ? preference : tied[0], scores };
}

const config = window.ROTINA_CONFIG ?? {};
const offerConfig = config.offer ?? {};
const proofConfig = config.proof ?? {};
const element = id => document.getElementById(id);
const answers = Array(questions.length).fill(null);
const campaignTags = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const money = value => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
let step = 0;
let currentPage;
let lastStepView;
let started = false;
let loading = false;

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
const checkoutOrigins = ["https://pay.kiwify.com.br", "https://pay.kiwify.com"];
const canSell = checkoutOrigins.includes(checkoutUrl?.origin) &&
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

/* ---------------- prova social, preço e urgência ---------------- */

function renderProof() {
  const total = Number(proofConfig.total);
  if (Number.isFinite(total) && total > 0) {
    element("proof").hidden = false;
    element("proof-total").textContent = new Intl.NumberFormat("pt-BR").format(total);
    const rating = Number(proofConfig.rating);
    const reviews = Number(proofConfig.reviews);
    if (rating > 0) {
      const stars = "★".repeat(Math.round(rating)).padEnd(5, "☆");
      element("proof-rating").innerHTML = `${stars} <b>${rating.toFixed(1).replace(".", ",")}</b>${reviews > 0 ? ` · ${new Intl.NumberFormat("pt-BR").format(reviews)} avaliações` : ""}`;
    }
  }
  const live = Number(proofConfig.live);
  const today = Number(proofConfig.today);
  if (live > 0 || today > 0) {
    element("live").hidden = false;
    const parts = [];
    if (live > 0) parts.push(`${new Intl.NumberFormat("pt-BR").format(live)} respondendo agora`);
    if (today > 0) parts.push(`${new Intl.NumberFormat("pt-BR").format(today)} hoje`);
    element("live-text").textContent = parts.join(" · ");
  }
}

function renderOffer() {
  const bonuses = Array.isArray(offerConfig.bonuses) ? offerConfig.bonuses : [];
  element("bonuses").replaceChildren(...bonuses.map(bonus => {
    const item = document.createElement("li");
    const copy = document.createElement("div");
    const title = document.createElement("b");
    title.textContent = bonus.title;
    copy.append(title);
    if (bonus.detail) {
      const detail = document.createElement("span");
      detail.textContent = bonus.detail;
      copy.append(detail);
    }
    item.append(copy);
    if (Number(bonus.value) > 0) {
      const anchor = document.createElement("s");
      anchor.textContent = money(Number(bonus.value));
      item.append(anchor);
    }
    return item;
  }));

  const bonusValue = bonuses.reduce((sum, bonus) => sum + (Number(bonus.value) || 0), 0);
  const anchorTotal = (Number(offerConfig.anchorBRL) || 0) + bonusValue;
  if (anchorTotal > 0) element("anchor-total").textContent = money(anchorTotal);

  const price = Number(config.priceBRL);
  if (Number.isFinite(price) && price > 0) {
    element("price").innerHTML = `${money(price)}<small>pagamento único · acesso imediato</small>`;
    element("sticky-price").textContent = money(price);
    if (element("quick-price")) element("quick-price").textContent = money(price);
  }
  if (offerConfig.priceNote) element("price-note").textContent = offerConfig.priceNote;

  const days = Number(offerConfig.guaranteeDays);
  if (days > 0) element("guarantee-title").textContent = `${days} dias de garantia.`;

  const scarcity = offerConfig.scarcity ?? {};
  const sold = Number(scarcity.sold);
  const total = Number(scarcity.total);
  if (sold > 0 && total > 0) {
    element("scarcity").hidden = false;
    element("scarcity").textContent = (scarcity.label || "{sold} de {total} vagas preenchidas")
      .replace("{sold}", new Intl.NumberFormat("pt-BR").format(sold))
      .replace("{total}", new Intl.NumberFormat("pt-BR").format(total));
  }

  element("countdown").hidden = !offerConfig.countdown;
  element("topbar").hidden = !(offerConfig.countdown || (sold > 0 && total > 0));
  element("topbar-text").textContent = offerConfig.banner || "Kit Rotina à Mesa com preço de lançamento";

  if (canSell) {
    element("preview-note").hidden = true;
    element("checkout").href = offerDestination();
    if (element("checkout-top")) element("checkout-top").href = offerDestination();
    if (element("quick-offer")) element("quick-offer").hidden = false;
    element("sale-details").textContent = `Pagamento único. ${config.accessDetails} Suporte em ${config.supportEmail}.`;
    for (const [page, link] of [["terms", termsUrl], ["privacy", privacyUrl]]) {
      element(`${page}-seller`).textContent = `Responsável pela oferta: ${config.seller}. Contato: ${config.supportEmail}.`;
      element(`${page}-seller`).hidden = false;
      element(`${page}-link`).href = link.href;
      element(`${page}-link`).hidden = false;
    }
  } else {
    // Sem dados de venda, o bloco resumido nem aparece: não faz sentido um botão morto no topo.
    if (element("quick-offer")) element("quick-offer").hidden = true;
    for (const id of ["checkout", "sticky-buy", "checkout-top"]) {
      const cta = element(id);
      if (!cta) continue;
      cta.classList.add("is-disabled");
      cta.removeAttribute("href");
      cta.setAttribute("role", "link");
      cta.setAttribute("aria-disabled", "true");
    }
    element("sale-details").hidden = true;
  }
}

function tickCountdown() {
  const clock = element("countdown-clock");
  if (!clock) return;
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end - now);
  const pad = value => String(value).padStart(2, "0");
  clock.textContent = `${pad(Math.floor(diff / 3600000))}:${pad(Math.floor(diff / 60000) % 60)}:${pad(Math.floor(diff / 1000) % 60)}`;
}

/* ---------------- consentimento ---------------- */

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

/* ---------------- quiz ---------------- */

function renderQuestion(focus) {
  const [title, choices] = questions[step];
  const remaining = questions.length - step - 1;
  element("step-label").textContent = `Pergunta ${step + 1} de ${questions.length}` +
    (remaining === 0 ? " · última" : remaining <= 2 ? " · quase lá" : "");
  element("progress").value = step + 1;
  element("question-title").textContent = title;
  element("form-error").hidden = true;
  element("continue").textContent = step === questions.length - 1 ? "Ver meu diagnóstico" : "Continuar";
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

function impact(profile, score) {
  const max = maxFor(profile);
  const ratio = max ? score / max : 0;
  if (ratio >= 0.75) return { level: 2, label: "alto" };
  if (ratio >= 0.5) return { level: 1, label: "moderado" };
  return { level: 0, label: "inicial" };
}

function renderQuotes() {
  const list = Array.isArray(config.testimonials) ? config.testimonials.filter(item => item?.text) : [];
  const section = element("quotes");
  section.hidden = list.length === 0;
  element("quotes-title").hidden = list.length === 0;
  section.replaceChildren(...list.map(item => {
    const entry = document.createElement("li");
    const head = document.createElement("div");
    head.className = "quote-head";
    const avatar = document.createElement("span");
    avatar.className = "quote-avatar";
    avatar.setAttribute("aria-hidden", "true");
    avatar.textContent = String(item.name || "?").trim().slice(0, 1).toUpperCase();
    const who = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = item.name || "Cliente";
    who.append(name);
    if (item.meta) {
      const meta = document.createElement("div");
      meta.textContent = item.meta;
      who.append(meta);
    }
    head.append(avatar, who);
    const stars = document.createElement("span");
    stars.className = "stars";
    stars.textContent = "★★★★★";
    head.append(stars);
    const text = document.createElement("p");
    text.textContent = item.text;
    entry.append(head, text);
    return entry;
  }));
}

function renderResult(result) {
  const profile = profiles[result.profile];
  element("profile-badge").textContent = `Perfil ${result.profile} · ${profile.name}`;
  element("result-title").textContent = profile.title;
  element("result-summary").textContent = profile.summary;
  element("error-text").textContent = profile.error;
  element("actions").replaceChildren(...profile.actions.map(action => {
    const item = document.createElement("li");
    item.textContent = action;
    return item;
  }));
  element("gains").replaceChildren(...profile.gains.map(gain => {
    const item = document.createElement("li");
    item.textContent = gain;
    return item;
  }));
  element("example").textContent = householdExamples[answers[5]];
  element("offer-lead").textContent = `${profile.offer} ${formatNotes[answers[7]]}`;

  const level = impact(result.profile, result.scores[result.profile]);
  element("impact-label").textContent = level.label;
  [...element("impact-scale").children].forEach((segment, index) => {
    segment.classList.toggle("on", index <= level.level);
  });
  renderQuotes();
}

function renderRoute(focus = true) {
  const hash = location.hash;
  const result = evaluate(answers);
  let page = "home";
  if (hash === "#quiz") page = "quiz";
  if (hash === "#resultado" && result) page = "result";
  if (hash === "#resultado" && !result) {
    history.replaceState(null, "", "#quiz");
    page = "quiz";
  }
  const previous = currentPage;
  currentPage = page;
  element("loading").hidden = true;
  for (const section of ["home", "quiz", "result"]) element(section).hidden = section !== page;
  for (const section of ["pain", "how"]) element(section).hidden = page !== "home";
  element("sticky-cta").hidden = page !== "result";
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
      updateHomeCta();
      if (focus) focusScreen("hero-title");
    }
  }
}

function updateHomeCta() {
  const answered = answers.filter(answer => answer !== null).length;
  const done = answered === questions.length;
  const note = element("resume-note");
  const label = element("start-label");
  const start = element("start");
  if (done) {
    start.href = "#resultado";
    label.textContent = "Ver o meu diagnóstico";
    note.textContent = "O seu diagnóstico está pronto e ainda não foi salvo.";
    note.hidden = false;
  } else if (answered > 0) {
    start.href = "#quiz";
    label.textContent = `Continuar de onde parei (${answered} de ${questions.length})`;
    note.textContent = `Você parou na pergunta ${answered}. Faltam ${questions.length - answered}.`;
    note.hidden = false;
  } else {
    start.href = "#quiz";
    label.textContent = "Fazer meu diagnóstico gratuito";
    note.hidden = true;
  }
}

function startLoading() {
  if (loading) return;
  loading = true;
  for (const section of ["home", "quiz", "result"]) element(section).hidden = true;
  element("sticky-cta").hidden = true;
  element("loading").hidden = false;
  window.scrollTo(0, 0);
  const bar = element("loading-bar");
  const text = element("loading-text");
  const checks = ["check-1", "check-2", "check-3"];
  const messages = [
    [0, "Cruzando as suas respostas…"],
    [36, "Identificando o seu perfil…"],
    [70, "Montando os 3 primeiros passos…"],
  ];
  const fast = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startedAt = Date.now();
  const duration = fast ? 400 : 1200;
  bar.value = 0;
  let write = 0;
  const timer = setInterval(() => {
    const elapsed = Date.now() - startedAt;
    const target = Math.min(100, Math.round((elapsed / duration) * 100));
    bar.value = target;
    while (write < messages.length && target >= messages[write][0]) {
      text.textContent = messages[write][1];
      if (write > 0) element(checks[write - 1]).classList.add("done");
      write += 1;
    }
    if (target >= 100) {
      clearInterval(timer);
      checks.forEach(id => element(id).classList.add("done"));
      setTimeout(() => {
        loading = false;
        location.hash = "resultado";
      }, fast ? 100 : 300);
    }
  }, 40);
}

/* ---------------- eventos ---------------- */

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
  } else if (evaluate(answers)) {
    track("quiz_complete");
    startLoading();
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

for (const id of ["checkout", "sticky-buy", "checkout-top"]) {
  element(id)?.addEventListener("click", event => {
    if (!canSell) event.preventDefault();
    track("offer_click");
  });
}

renderProof();
renderOffer();
renderQuotes();
tickCountdown();
setInterval(tickCountdown, 1000);
updateConsent();
window.addEventListener("hashchange", () => renderRoute());
renderRoute(false);
