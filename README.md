# Rotina à Mesa

Funil de diagnóstico gratuito em português, com oito perguntas, quatro perfis de resultado e uma mini página de vendas do kit digital. As respostas ficam na memória da página. O perfil e as respostas não são incluídos na URL nem nos eventos.

## Estrutura da página

1. **Abertura** com promessa de diagnóstico, garantias de esforço ("2 minutos", "sem cadastro"), prova social e contador de urgência.
2. **Bloco de dor**, para o visitante se reconhecer antes de começar.
3. **Como funciona**, em três passos, para reduzir a incerteza.
4. **Quiz em micro-etapas**, uma pergunta por tela, com barra de progresso e aviso de "quase lá".
5. **Tela de carregamento** de 2 segundos, que dá peso ao resultado.
6. **Resultado personalizado**: perfil, impacto do gargalo, três passos, onde o plano quebra, o que muda e depoimentos.
7. **Oferta** com ancoragem de preço, pilha de valor, bônus, garantia, escassez e CTA fixo no celular.
8. **FAQ** com as objeções mais comuns e dois P.S. de fechamento.

## Gatilhos usados

| Gatilho | Onde está |
| --- | --- |
| Prazo e urgência | barra superior com contagem até 23h59 |
| Escassez | "lote de lançamento: 63 de 100 vendas" |
| Prova social numérica | total de diagnósticos, nota e número de avaliações |
| Prova social ao vivo | "23 respondendo agora · 89 hoje" |
| Depoimentos | bloco "Quem já fez o diagnóstico" |
| Ancoragem de preço | "R$ 184 em materiais" riscado contra o preço atual |
| Pilha de valor e bônus | lista de entregáveis com valor individual |
| Reversão de risco | garantia de 7 dias |
| Aversão à perda | P.S. avisando que o resultado não fica salvo |
| Compromisso e consistência | quiz curto, resposta por resposta |
| Efeito de progresso | barra, "quase lá" e retomada do ponto onde parou |
| Efeito Zeigarnik | tarefa incompleta sinalizada na abertura |
| Reciprocidade | diagnóstico gratuito antes de qualquer oferta |
| Contraste e conta mental | "sai mais barato que uma semana de delivery" |
| Quebra de objeção | FAQ com seis perguntas |
| Personalização | quatro perfis com textos próprios |

## O que precisa ser real antes de anunciar

Os campos de prova social, depoimentos e escassez em `dist/config.js` são **exemplos de estrutura**. Substitua por dados verdadeiros antes de rodar tráfego. Números, avaliações, depoimentos ou vagas inventados configuram propaganda enganosa (CDC art. 37 e Código do CONAR).

Para remover qualquer bloco, basta esvaziar o campo:

```js
proof: {},          // esconde a linha de prova social
testimonials: [],   // esconde os depoimentos
scarcity: {},       // esconde a escassez
countdown: false,   // esconde a contagem regressiva
```

Depoimentos precisam de autorização de quem escreveu e devem refletir resultados reais. Resultados individuais variam.

## Configuração da oferta

Em `dist/config.js`:

- `checkoutUrl`: link direto HTTPS de `pay.kiwify.com.br`.
- `seller`, `supportEmail`, `accessDetails`, `privacyUrl`, `termsUrl`: obrigatórios para liberar a venda.
- `priceBRL`: preço real do kit.
- `offer.anchorBRL`: soma dos materiais sem desconto.
- `offer.bonuses`: bônus com título, descrição e valor declarado.
- `offer.guaranteeDays`: prazo de garantia.
- `offer.scarcity`: total e vendidos do lote.
- `offer.countdown`: liga a contagem até 23h59.
- `offer.banner`: texto da barra superior.

O botão de compra só funciona quando todos os campos obrigatórios estão válidos. Sem isso, a página mostra a oferta completa em modo de prévia, com o botão desativado e um aviso.

## Abrir e publicar

Abra `dist/index.html` no navegador ou sirva a pasta `dist` via HTTP. No Windows, a partir desta pasta, rode `python -m http.server 8080 --directory dist` e abra http://localhost:8080.

No GitHub Pages, o conteúdo de `dist` precisa estar na raiz do repositório. As rotas do quiz usam fragmentos e não precisam de reescrita do servidor.

## Medição

Ativar `measurementEnabled` libera apenas eventos no `dataLayer`, mediante permissão. O adaptador deve respeitar a escolha salva, ouvir `rotina:measurement` e interromper o envio após recusa. Eventos disponíveis: `landing_view`, `quiz_start`, `quiz_step_view`, `quiz_complete`, `result_view` e `offer_click`.

Se optar pela atribuição por campanha, marque `forwardCampaignTags` e `measurementEnabled`. Após permissão, a página encaminha ao checkout os cinco campos UTM comuns. O projeto não envia evento de compra por clique ou visita: use o relatório de compras aprovadas da Kiwify.

## Arquivos

- `dist/index.html`: abertura, quiz, resultado, oferta, FAQ e avisos.
- `dist/style.css`: layout e estilos responsivos.
- `dist/quiz.js`: perguntas, pontuação, perfis, prova social, preço, contagem e eventos.
- `dist/config.js`: oferta, prova social e opções de lançamento.
- `dist/mesa.webp`: fotografia ilustrativa da abertura.
