window.ROTINA_CONFIG = {
  checkoutUrl: "https://pay.kiwify.com.br/mtsatgI",
  seller: "Simone Fernandes",
  supportEmail: "mikael4fernandesdocouto@gmail.com",
  privacyUrl: "https://mikael4fernandesdocouto-alt.github.io/rotina-a-mesa/privacidade/",
  termsUrl: "https://mikael4fernandesdocouto-alt.github.io/rotina-a-mesa/termos/",
  accessDetails: "Acesso imediato por e-mail, com login na área de membros.",
  priceBRL: 37.9,
  measurementEnabled: false,
  forwardCampaignTags: false,

  /* ============================================================
     GATILHOS DA PÁGINA
     ------------------------------------------------------------
     Os valores abaixo são EXEMPLOS de estrutura, não dados reais.
     Antes de rodar anúncios, troque por números verdadeiros.
     Prova social, avaliações e escassez inventadas são propaganda
     enganosa (CDC art. 37 e Código do CONAR).
     Deixe um bloco vazio para ele desaparecer da página:
       proof: {},  testimonials: [],  scarcity: {}
     ============================================================ */

  proof: {},

  testimonials: [],

  offer: {
    anchorBRL: 138,
    guaranteeDays: 7,
    banner: "5 jantares, 1 compra com preço de lançamento",
    priceNote: "Pagamento único. Sai mais barato que uma semana de delivery.",
    bonuses: [
      { title: "Bônus: roteiro de revisão de domingo", detail: "15 minutos para fechar a semana seguinte", value: 27 },
      { title: "Bônus: lista de compras para uma pessoa", detail: "Quantidades menores, menos desperdício", value: 19 },
    ],
    scarcity: {},
    countdown: false,
  },
};
