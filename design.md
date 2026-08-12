# Design system · A Fiel Decide

Fonte da verdade visual deste repositório. Leia antes de criar ou alterar qualquer tela.

Regra de sincronia: toda mudança de estilo atualiza **três** arquivos no mesmo commit, `styles.css`, este `design.md` e o `design.html`. O `design.html` carrega o `styles.css` de produção, então ele não consegue mentir sobre cor, borda ou sombra. O que ele não prova sozinho são as regras escritas aqui.

Origem: handoff do redesign de agosto de 2026, implementado no commit `4df3cb1`. Os tokens abaixo foram lidos do `styles.css` em produção, que prevalece sobre qualquer documento anterior.

## Direção

Papel e tinta. Fanzine de arquibancada com métrica de jornal: papel envelhecido, preto pesado, borda reta, sombra dura sem desfoque.

Três decisões estruturais separam este sistema de um template:

1. **Não existe cor de acento.** A ênfase é a inversão: bloco preto com texto cor de papel. Preto e branco é a identidade do clube, e uma quarta cor decorativa quebraria isso.
2. **Não existe modo escuro.** O documento declara `color-scheme: light` e `theme-color: #efece4`. As seções pretas (`.sec--dark`) já fazem o trabalho de contraste, e um tema escuro automático apagaria a inversão como recurso de ênfase.
3. **A marca é a faixa listrada.** O movimento não pode usar o escudo do clube, então a faixa preto e papel ocupa o lugar dele: no logotipo, sob os títulos e no selo do rodapé.

## Cores

Nomes iguais aos do `styles.css`. Não introduza cor fora desta tabela.

### Sobre papel

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#efece4` | Fundo geral, papel envelhecido |
| `--card` | `#f8f6f0` | Fundo de cartão sobre o papel |
| `--white` | `#ffffff` | Só o hover do cartão do Placar |
| `--ink` | `#0d0c0b` | Texto, bordas, sombras duras, blocos invertidos |
| `--ink-soft` | `#3d3730` | Parágrafo secundário sobre papel |
| `--gray` | `#6b655e` | Rótulo monoespaçado |
| `--gray-src` | `#5c554e` | Linha de fonte no rodapé do cartão |
| `--num-ghost` | `#c4bfb6` | Numeral gigante 01/02/03 das cláusulas |
| `--shadow-on-paper` | `#97928a` | Sombra dura de botão preto sobre papel |

### Sobre tinta

| Token | Hex | Uso |
|---|---|---|
| `--on-dark` | `#efece4` | Texto sobre preto |
| `--on-dark-mute` | `#9c968d` | Secundário sobre preto: rótulo, fonte, descrição do índice |
| `--on-dark-body` | `#b5afa6` | Corpo dentro dos cartões pretos (passos) |
| `--rule-dark` | `#3a352f` | Divisória sobre preto, e o `gap` que vira linha na grade de passos |
| `--shadow-on-dark` | `#55504a` | Sombra dura de botão sobre preto |

O handoff chamava as duas sombras de `--shadow-dark`. Em produção elas são dois tokens separados, `--shadow-on-paper` e `--shadow-on-dark`, porque a sombra muda de cor conforme a superfície.

### Valores ainda fora dos tokens

Três cores estão escritas direto no CSS e deveriam virar token na próxima mexida:

| Hex | Onde | Sugestão de nome |
|---|---|---|
| `#4a443e` | `.foot-legal` | `--ink-legal` |
| `#191714` | `.passo:hover` | `--ink-hover` |
| `#7d786f` | listra clara dentro de `#meta-bar` | `--stripe-mute` |

## Tipografia

Três famílias, auto-hospedadas em `fonts/` como `.woff2` com `font-display: swap`. Sem CDN, de propósito: a cláusula do `RECOMEÇAR.md` exige que o repositório clonado funcione offline.

| Papel | Família | Pesos | Regra fixa |
|---|---|---|---|
| Display | `Archivo Black` (`--f-display`) | 400 | Sempre caixa alta, `letter-spacing` de `-.02em` a `-.035em`, `line-height` de `.84` a `1.05` |
| Corpo | `Archivo` (`--f-body`) | 400, 500, 600 | `line-height` de `1.55` a `1.62`, `text-wrap: pretty` |
| Rótulo | `Courier Prime` (`--f-mono`) | 400, 700 | Sempre caixa alta, `letter-spacing` de `.08em` a `.2em`, 10,5px a 13px |

Escala de display, toda em `clamp` (mobile para desktop):

| Elemento | Classe | Tamanho | Entrelinha |
|---|---|---|---|
| H1 da capa | `.mega` | `clamp(58px, 14.5vw, 206px)` | .84 |
| H1 de página interna | `.page-title` | `clamp(40px, 9vw, 124px)` | .86 |
| H2 de seção | `.sec-title` | `clamp(32px, 6vw, 76px)` | .94 |
| H2 da meta | `.sec-title--meta` | `clamp(38px, 8.4vw, 112px)` | .88 |
| Tese do hero | `.thesis` | `clamp(23px, 3.2vw, 40px)` | 1.02 |
| Título no índice | `.indice .t` | `clamp(24px, 4.2vw, 52px)` | 1 |
| Número da sangria | `.sangria .num` | `clamp(34px, 6vw, 66px)` | 1 |
| Número do Placar | `.placar-card .num` | `clamp(30px, 3.7vw, 44px)` | .95 |
| Marquee inferior | `.marquee-bottom` | `clamp(24px, 3.6vw, 48px)` | 1 |
| H3 de cartão | `.block h3` | `clamp(20px, 2.4vw, 27px)` | 1.05 |
| Linha de abertura | `.lead` | `clamp(16px, 1.7vw, 21px)` | 1.5 |
| Corpo | `.hero-p` | `clamp(15px, 1.4vw, 17.5px)` | 1.6 |

Todo número que muda leva `font-variant-numeric: tabular-nums`, para o dígito não tremer enquanto conta.

## Espaçamento e forma

- Largura máxima de conteúdo: **1180px** (`.wrap`), padding lateral **20px**.
- Respiro vertical de seção: `clamp(46px, 6.5vw, 90px)`.
- Medida de leitura: 48ch no parágrafo do hero, 52ch na meta, 58ch na abertura, 72ch a 74ch nos parágrafos longos.
- **Raio de canto: 0 em tudo.** Canto reto é identidade, não preferência.
- Bordas: `1.5px` no link de navegação e no logotipo, `2px` em botão, cartão do Placar, selo e marquee do topo, `3px` em cartão de conteúdo, divisória de seção, barra da meta e barra de navegação.
- Divisória por `gap`: a grade de passos usa `gap: 2px` sobre fundo `--rule-dark`, e a linha entre células é o próprio vão.

## Sombra dura

A assinatura do sistema. Sempre `Npx Npx 0 <cor>`, nunca com desfoque, nunca colorida.

| Elemento | Repouso | Interação |
|---|---|---|
| Botão | `5px 5px 0` | Hover afunda: `translate(3px, 3px)` e sombra `1px 1px 0` |
| Botão da navegação (`.nav-sign`, `.menu-btn`) | `3px 3px 0` | Hover afunda: `translate(2px, 2px)` e sombra `1px 1px 0` |
| Cartão do Placar | `5px 5px 0 --ink` | Hover sobe: `translate(-3px, -3px)`, sombra `9px 9px 0`, fundo `--white` |
| Cartão de conteúdo (`.clausula`, `.block`) | `6px 6px 0 --ink` | Hover sobe: `translate(-3px, -3px)` e sombra `11px 11px 0` |
| Cartão da sangria | `9px 9px 0 --ink` | Estático |

A lógica é constante: o que se clica afunda, o que se lê sobe. Não invente um terceiro comportamento.

Durações: `transform` e `box-shadow` em `.12s` a `.14s`, `color` em `.16s`, `padding-left` em `.2s`.

## Texturas

Toda a gráfica do site é CSS. Não existe imagem, ícone ou SVG externo, só o favicon embutido no `<head>`.

1. **Grão de papel** (`.grain`): camada `position: fixed; inset: 0; pointer-events: none; opacity: .22`, com `radial-gradient(var(--ink) 0.7px, transparent 0.8px)` em `background-size: 5px 5px`, deslizando com `grainshift`. Fica em `z-index: 0`, e todo conteúdo sobe para `z-index: 1`.
2. **Mosaico de arquibancada** (`.mosaic`): `repeating-linear-gradient(90deg, var(--ink) 0 16px, var(--paper) 16px 32px)`, altura 14px, borda 2px, animado. A variante `.mosaic--thin` tem 12px de altura, listras de 14px e fica parada, e é a usada nas páginas internas.
3. **Faixa listrada pequena** (`.stripe`): a mesma ideia em 4px, no logotipo (22x12px) e no selo do rodapé (20x11px). No botão de menu a listra é horizontal (`.stripes-h`, 16x10px, listras de 2px).
4. **Barra da meta** (`#meta-bar`): preenchimento listrado em `repeating-linear-gradient(90deg, var(--paper) 0 14px, #7d786f 14px 28px)`, dentro de uma caixa de 28px com borda 3px `--paper` sobre fundo `--ink`.

## Marca

O movimento é independente e não pode usar ativo oficial do clube. A identidade se apoia em dois sinais:

- **A faixa listrada**, que substitui o escudo, no logotipo, sob os títulos e no selo do rodapé.
- **O losango**, quadrado girado 45 graus, presente no favicon (contorno de 5px em `--ink` sobre `--paper`) e como separador `◆` no marquee inferior.

Proibido em qualquer contexto: escudo, mascote, emblema, tipografia oficial ou qualquer outro ativo do Sport Club Corinthians Paulista.

## Componentes

Cada item lista a classe real. Use a classe, não recrie o estilo.

### Casca (em toda página)

- **`.marquee-top`**: fita preta sticky no topo, 36px, `z-index: 60`, mono 700 12,5px com `.18em`. Leva `aria-hidden="true"`, porque é ornamento e o leitor de tela não precisa repetir o texto.
- **`.navbar`**: sticky em `top: 36px`, `z-index: 55`, fundo `rgba(239,236,228,.94)` com `backdrop-filter: blur(8px)`, borda inferior 3px. À esquerda o `.logo` (faixa mais nome em display 16px). À direita `.nav-links` (visível a partir de 860px, hover mostra borda de 1.5px), o `.menu-btn` (abaixo de 860px) e o `.nav-sign` sempre visível.
- **`.mobile-menu`**: painel preto full-width abaixo da barra, aberto pela classe `.open`. Oito páginas em display 20px, uma por linha, divisória `1px --rule-dark` e seta `→`. O botão controla `aria-expanded` e `aria-controls`.
- **`.marquee-bottom`**: fita de papel com bordas de 3px em cima e embaixo, display grande, rolando no sentido contrário ao do topo.
- **`footer`**: mono 12,5px com entrelinha 1.8, em quatro blocos: frase em display, `.foot-selo` com faixa e borda de 2px, `.foot-legal` até 74ch com o link do repositório sublinhado, e `.foot-hash` em display, com `overflow-wrap: anywhere` — a hashtag `#DemocraciaCorinthianaDigital` é uma palavra só e estoura a caixa num celular de 375px sem isso.

### Capa

- **`.hero`**: `.kicker` em mono à esquerda e `.stamp` preto balançando à direita, depois `.mega`, depois a faixa `.mosaic`, depois `.hero-grid` de duas colunas `minmax(300px, 1fr)`.
- **`.thesis`**: tese em display com a palavra-chave em `.inv`, que inverte fundo (`--ink`) e texto (`--on-dark`) com `padding: 0 .14em`.
- **`.sangria`**: cartão de borda 3px e sombra 9px. Cabeçalho em mono com divisória **tracejada** de 2px e o ponto `.blip` pulsando. Número em display com `tabular-nums`, legenda em 14px.
- **`.quote-band`**: faixa preta com a citação em display e a fonte em mono `--on-dark-mute`, alinhadas pela `baseline`.
- **`.placar-card`**: número em display, rótulo em corpo 14,5px e `.src` empurrado para o rodapé por `margin-top: auto`, em mono 10,5px. **Todo número exibido carrega a fonte no próprio cartão.**
- **`.passos`**: grade de quatro cartões pretos separados pelo `gap` de 2px.
- **`.clausula`**: numeral `--num-ghost` em display, título e parágrafo, sobre `--card` com borda 3px.
- **`.indice`**: lista de links sobre preto, cada linha com título em display, descrição em mono e seta. Hover desloca `padding-left: 14px` e clareia para `--white`.

### Páginas internas

Molde único, oito instâncias: `.back`, `.label`, `.page-title`, `.mosaic--thin`, `.lead`, grade `.blocks` de cartões `.block`, e o fecho `.page-cta` em preto com a frase em display até 18ch e um `.btn--paper`.

### Botões

Quatro variantes sobre a base `.btn` (mono 700, 13px, `.12em`, caixa alta, padding `15px 20px`, borda 2px).

| Classe | Superfície | Fundo | Sombra |
|---|---|---|---|
| `.btn--ink` | papel | `--ink`, texto `--on-dark` | `5px 5px 0 --shadow-on-paper` |
| `.btn--line` | papel | transparente, texto `--ink` | `5px 5px 0 --ink` |
| `.btn--paper` | tinta | `--paper`, texto `--ink` | `5px 5px 0 --shadow-on-dark` |
| `.btn--ghost` | tinta | transparente, borda `--paper` | `5px 5px 0 --shadow-on-dark` |

A ação principal de uma tela usa a variante sólida (`--ink` sobre papel, `--paper` sobre tinta). As demais ficam de contorno. Uma tela tem um sólido só.

## Movimento

| Nome | O que faz | Duração |
|---|---|---|
| `tick` | Marquee do topo, `translateX` 0 para -50% | 68s linear infinito |
| `tickR` | Marquee do rodapé, -50% para 0 | 72s linear infinito |
| `mosaic` | Desliza a faixa listrada, 0 para 64px | 8s linear infinito |
| `grainshift` | Desliza o grão, 0 para `120px 90px` | 16s linear infinito |
| `stampb` | Selo balança, `rotate` -6deg para -2.5deg | 3.6s ease-in-out infinito |
| `blip` | Ponto do ao vivo, `opacity` 1 para .2 | 1.4s ease-in-out infinito |
| barra da meta | `width` de 0% ao percentual real | 1.6s `cubic-bezier(.2,.7,.2,1)` |

Os marquees usam dois `<span>` idênticos lado a lado num flex `width: max-content`, animando até -50%, e por isso o loop não tem emenda. **A velocidade foi reduzida a pedido e não deve ser acelerada.**

`prefers-reduced-motion: reduce` desliga as seis animações e todas as transições de hover. Qualquer animação nova entra nesse bloco no mesmo commit.

Animação aqui serve para mostrar que algo está vivo ou que algo mudou. Animação decorativa fica de fora.

## Acessibilidade

- Foco visível global: `outline: 3px solid currentColor` com `outline-offset: 3px`. Não remova, e não troque por sombra.
- Alvo de toque: os botões têm 15px de padding vertical sobre 13px de texto, o que passa de 44px. Mantenha esse piso em qualquer alvo novo.
- `lang="pt-BR"` no documento.
- Marquees levam `aria-hidden="true"`, porque repetem texto que já existe na página.
- `tabular-nums` em número que muda.
- Contraste conferido sobre `--paper`: `--gray` 4,87:1, `--gray-src` 6,21:1, `--ink-soft` 9,95:1. Sobre `--ink`: `--on-dark-mute` 6,66:1. Todos passam em AA para corpo.
- **Exceção conhecida:** `--num-ghost` sobre `--card` dá 1,69:1 e não passa nem no critério de texto grande. Hoje o numeral `01/02/03` é ornamento e a ordem das cláusulas está no fluxo de leitura. Se esse numeral virar informação necessária, escureça para cerca de `#8f8981`, que atinge 3:1.

## Reserva: definido, ainda não escrito no styles.css

O site atual não tem formulário nem botão desativado. Quando a urna e o abaixo-assinado chegarem, use estas regras em vez de inventar na hora, e mova-as para o `styles.css` no mesmo commit.

- **Campo de formulário:** rótulo em mono 12px caixa alta `--gray`; campo com fundo `--card`, borda 2px `--ink`, texto em corpo 16px, altura mínima 48px, canto reto. O foco herda o `outline` global. Erro: borda mais grossa e mensagem em mono, ambas em `--ink`, com o texto carregando a informação. Não existe vermelho no sistema, e inventar um abriria a porta para a segunda cor decorativa.
- **Botão desativado:** `opacity: .45`, `box-shadow: none`, `cursor: not-allowed`, sem `transform` no hover. A sombra sumindo já comunica que não há o que afundar.
- **Confirmação de envio:** bloco invertido com o texto em display, sem verde e sem ícone. A inversão é o sinal.

Restrição de produto que vale como restrição de design: nenhum formulário pode pedir Pix, doação ou dado de pagamento. É cláusula pétrea do movimento.

## Voz na interface

- Caixa alta pertence ao display e ao rótulo em mono. Texto corrido sempre em caixa normal.
- Registro paulistano, com "você". Nunca "tu" ou "teu".
- No máximo um slogan por seção, de preferência fechando.
- Negrito só em regra dura e número-chave.
- Todo número exibido vem com a fonte ao lado ou no rodapé do cartão. Número sem fonte não entra.
- Sem emoji na interface.

## Faça

- Canto reto, borda sólida, sombra dura sem desfoque.
- Inversão para dar ênfase, em vez de cor.
- Um botão sólido por tela, o resto de contorno.
- Mono para todo metadado: rótulo, fonte, data, passo, selo.
- Fonte citada em todo número.
- `prefers-reduced-motion` atendido no mesmo commit da animação.

## Evite

- `border-radius`, sombra com desfoque, gradiente decorativo, brilho, vidro fosco.
- Qualquer cor fora da tabela de tokens, em especial verde de sucesso e vermelho de erro.
- Escudo, mascote ou qualquer ativo oficial do clube.
- Fonte carregada por CDN. A fonte mora em `fonts/`.
- Acelerar os marquees.
- Imagem ou ícone externo. A gráfica do site é CSS.
