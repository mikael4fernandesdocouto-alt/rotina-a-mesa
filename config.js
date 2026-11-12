window.ROTINA_CONFIG = {
  checkoutUrl: "",
  seller: "",
  supportEmail: "",
  privacyUrl: "",
  termsUrl: "",
  accessDetails: "",
  priceBRL: 47,
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

  proof: {
    total: 2347,   // pessoas que já responderam o diagnóstico
    today: 89,     // respostas nas últimas 24 horas
    live: 23,      // pessoas respondendo agora
    rating: 4.9,   // nota média de 0 a 5
    reviews: 128,  // quantas avaliações compõem a média
  },

  testimonials: [
    {
      name: "Camila R.",
      meta: "mãe de dois, 34 anos",
      text: "Eu comprava verdura e jogava fora toda semana. O que mudou foi decidir duas refeições antes de sair de casa. Em três semanas o delivery caiu de cinco para uma vez.",
    },
    {
      name: "Juliana P.",
      meta: "trabalha fora, 29 anos",
      text: "O que me pegou foi o checklist de preparo. Eu não tenho domingo livre, então faço em 20 minutos na segunda. A semana inteira fica mais leve.",
    },
    {
      name: "Marcos A.",
      meta: "mora sozinho, 41 anos",
      text: "Achei que era mais um material bonito que eu não ia usar. Usei a lista de compras no mesmo dia e foi a primeira vez que não sobrou comida na geladeira.",
    },
  ],

  offer: {
    anchorBRL: 138,
    guaranteeDays: 7,
    banner: "Kit Rotina à Mesa com preço de lançamento",
    priceNote: "Pagamento único. Sai mais barato que uma semana de delivery.",
    bonuses: [
      { title: "Bônus: roteiro de revisão de domingo", detail: "15 minutos para fechar a semana seguinte", value: 27 },
      { title: "Bônus: lista de compras para uma pessoa", detail: "Quantidades menores, menos desperdício", value: 19 },
    ],
    scarcity: {
      total: 100,
      sold: 63,
      label: "Lote de lançamento: {sold} de {total} vendas",
    },
    countdown: true, // contagem até 23:59 de hoje
  },
};
