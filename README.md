# ◆ A Fiel Decide — Democracia Corinthiana Digital

**Movimento independente da torcida do Corinthians.** Devolver **voz, voto e transparência** ao povo corinthiano — completando o SAFiel (que traz o capital) com o **mandato popular** (que destrava a política do Parque São Jorge).

> **O SAFiel traz o capital. A Fiel traz o mandato.**

🌐 **Site:** https://afieldecide.github.io/site/

---

## O que é este repositório

Este é o repositório público do site do movimento. Ele existe aqui — aberto, clonável, com histórico assinado — porque o movimento segue uma regra simples:

> **Tudo replicável. Tudo verificável. Ninguém indispensável.**

Qualquer pessoa que clona este repositório vira, sem saber, um backup completo do site do movimento. Se o site cair, se a conta sumir, se todos os responsáveis desaparecerem — **qualquer torcedor reergue tudo num fim de semana**. O passo a passo está em [`RECOMEÇAR.md`](RECOMEÇAR.md).

## As 3 cláusulas pétreas

1. **O movimento NÃO arrecada dinheiro.** Nada de Pix, vaquinha, escrow ou "fundo". Capital é papel de estrutura regulada (SAFiel/clube). Se alguém pedir dinheiro em nome do movimento, é golpe: denuncie.
2. **Ponte com o Conselho, não guerra.** O Conselho é convidado a entrar pra história como quem devolveu o clube ao povo.
3. **Sem spam.** Só canais públicos e convite digno. Ninguém garimpa e-mail privado nem dispara mensagem não pedida.

## A Urna de Vidro (resumo)

Quando as consultas populares começarem, cada votação fecha com um **arquivo público de apuração** (anônimo, recontável por qualquer um) e um **lacre criptográfico gratuito na blockchain do Bitcoin** (via [OpenTimestamps](https://opentimestamps.org)) — sem token, sem carteira, sem ninguém vendendo moedinha. A blockchain entra como **cartório, não como urna**.

> A urna é de vidro: qualquer um pode recontar os votos. E o lacre fica registrado num cartório mundial que ninguém apaga — nem a gente.

## Estrutura

| Arquivo | O que é |
|---|---|
| [`index.html`](index.html) | A capa do site (estático — HTML puro, sem servidor "pensante") |
| `manifesto/ urna/ safiel/ carta/ nucleos/ transparencia/ perguntas/ imprensa/` | As 8 páginas internas, cada uma com URL própria |
| [`styles.css`](styles.css) | Todo o visual do site (papel + preto, sombras duras, mosaico) |
| [`site.js`](site.js) | JS mínimo em vanilla: contador da sangria, barra da meta, menu, compartilhar |
| `fonts/` | Fontes auto-hospedadas (Archivo Black, Archivo, Courier Prime) — o site funciona offline |
| [`404.html`](404.html) | Página de erro no mesmo estilo |
| [`MANTENEDORES.md`](MANTENEDORES.md) | Quem cuida das chaves hoje + a regra dos 3 |
| [`RECOMEÇAR.md`](RECOMEÇAR.md) | O teste do desaparecimento: como reerguer tudo do zero |
| [`DOMINIO.md`](DOMINIO.md) | Como apontar o domínio próprio pro site |
| [`LICENSE`](LICENSE) | AGPL-3.0 — a licença anti-sequestro |
| `og-card.png` | Imagem de compartilhamento (WhatsApp/redes) |

## Como rodar / espelhar

É um site estático: **não precisa instalar nada.**

- **Ver localmente:** baixe o repositório e abra `index.html` no navegador. Pronto.
- **Subir um espelho seu:** faça *fork* deste repositório e ligue o GitHub Pages (Settings → Pages → branch `main`). Em minutos o site inteiro está no ar no seu endereço. Detalhes em [`RECOMEÇAR.md`](RECOMEÇAR.md).

## Governança

Este repositório vive numa **organização** (`github.com/afieldecide`), não na conta pessoal de ninguém. Toda chave crítica do movimento segue a **regra dos 3**: no mínimo três pessoas com acesso, de núcleos diferentes, com 2FA. Mantenedor é **zelador temporário, não dono** — quem são e como se troca está em [`MANTENEDORES.md`](MANTENEDORES.md).

## Licença: por que AGPL-3.0

Qualquer um pode copiar, modificar e rodar este código — mas quem modificar é **obrigado a manter o código aberto também**. Isso impede que uma empresa, um político ou um cartola pegue a plataforma, feche e transforme em produto próprio. É a licença anti-sequestro.

---

**Aviso:** este é um movimento independente de torcedores. **Não é comunicação oficial do Sport Club Corinthians Paulista** e não usa o escudo oficial. Não capta, não guarda e não movimenta dinheiro.

*O Corinthians é uma torcida que tem um time.*
