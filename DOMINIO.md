# ◆ DOMÍNIO — como apontar o endereço próprio pro site

Guia pra ligar `afieldecide.com.br` (registrado no [registro.br](https://registro.br), ~R$ 40/ano — o único custo do movimento) ao site no GitHub Pages.

> Ainda sem domínio? O site funciona normalmente em `https://afieldecide.github.io/site/`. O domínio só deixa o endereço mais fácil de falar no rádio, no story e na arquibancada.

---

## Passo 1 — No registro.br (configurar o DNS)

Entre no painel do registro.br → seu domínio → **Editar zona** (modo avançado) e crie estes registros:

| Tipo | Nome | Valor |
|---|---|---|
| A | *(raiz — deixe em branco)* | `185.199.108.153` |
| A | *(raiz)* | `185.199.109.153` |
| A | *(raiz)* | `185.199.110.153` |
| A | *(raiz)* | `185.199.111.153` |
| CNAME | `www` | `afieldecide.github.io.` |

*(Os 4 endereços A são os servidores oficiais do GitHub Pages — [documentação](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).)*

## Passo 2 — No GitHub (avisar o Pages)

1. Repositório `afieldecide/site` → **Settings** → **Pages**.
2. Em **Custom domain**, digite `afieldecide.com.br` → **Save**.
   *(Isso cria automaticamente um arquivo `CNAME` na raiz do repositório — é normal, deixe ele lá.)*
3. Espere a verificação (pode levar de minutos a ~24h, é o tempo do DNS se espalhar).
4. Quando aparecer o cadeado, marque **Enforce HTTPS**. Sempre.

## Passo 3 — Proteger o domínio na organização (anti-sequestro)

Em `github.com/organizations/afieldecide` → **Settings** → **Pages** → **Verified domains** → adicione e verifique `afieldecide.com.br`. Isso impede que outra pessoa aponte um Pages estranho pro nosso domínio se ele um dia ficar solto.

## Passo 4 — Atualizar os endereços no site

Depois que o domínio estiver no ar, trocar no `index.html` (é busca-e-troca simples):

- `https://afieldecide.github.io/site/` → `https://afieldecide.com.br/` (nas tags `og:url`, `og:image` e `canonical` do `<head>`)

## Lembretes de governança

- O domínio é **conta crítica**: entra na [regra dos 3](MANTENEDORES.md) (no mínimo 3 pessoas com acesso ao painel do registro.br).
- A renovação anual (~R$ 40) é **contribuição de trabalho** de alguém da rede — como quem imprime um cartaz. Não é arrecadação; o movimento não tem caixa.
- Se o domínio se perder um dia, nada essencial morre: vale o [`RECOMEÇAR.md`](RECOMEÇAR.md).
