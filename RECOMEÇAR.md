# ◆ RECOMEÇAR — o teste do desaparecimento

> **Pergunta que este arquivo responde:** se todos os mantenedores sumirem hoje — cansaram, brigaram, perderam as senhas, foram atropelados por um trólebus na Rua São Jorge — como um grupo de torcedores reergue o movimento num fim de semana?

Resposta curta: **fazendo uma cópia.** Tudo o que importa neste movimento é público e replicável. As senhas morrem; a urna de vidro fica.

Este guia foi escrito pra quem **nunca programou**. Se você sabe abrir um site e criar uma conta, você consegue.

---

## Passo 1 — Copie o repositório (5 minutos)

1. Crie uma conta gratuita no [GitHub](https://github.com) (ou use a sua).
2. Visite este repositório: `github.com/afieldecide/site`.
3. Clique no botão **Fork** (canto superior direito) → **Create fork**.

Pronto: você agora tem uma cópia completa do site — com todo o histórico de mudanças desde o primeiro dia. Ninguém pode apagar a sua cópia.

> Este repositório também deve ter espelhos em outros serviços (Codeberg/GitLab). Se o GitHub inteiro sumir, procure `afieldecide` nesses serviços — ou peça na rede: **cada pessoa que já clonou tem o movimento inteiro no computador.**

## Passo 2 — Ponha o site no ar (10 minutos)

No **seu fork**:

1. Vá em **Settings** (engrenagem) → **Pages** (menu lateral).
2. Em *Build and deployment* → *Source*, escolha **Deploy from a branch**.
3. Em *Branch*, escolha **main** e pasta **/ (root)** → **Save**.
4. Espere 1–2 minutos. O site estará no ar em: `https://SEU-USUARIO.github.io/site/`

É isso. O site inteiro, funcionando, no seu endereço, de graça.

## Passo 3 — Recupere os dados históricos

Todos os resultados de consultas e números do Placar Aberto vivem (ou viverão) em repositórios públicos da organização — em arquivos legíveis por humanos, com lacre [OpenTimestamps](https://opentimestamps.org) na blockchain do Bitcoin. Faça fork deles também. **Nenhuma apuração se perde**: qualquer resultado pode ser reconferido pra sempre, e o lacre prova que ninguém alterou uma vírgula.

## Passo 4 — Suba uma urna nova (quando houver plataforma de voto)

O código da plataforma de consultas é aberto e documentado no repositório dela, com instruções de "1 comando e está rodando" nos planos gratuitos (Cloudflare/Supabase). A instância oficial é **substituível por desenho**: quem hospeda hoje não é dono de nada.

## Passo 5 — Anuncie o novo endereço

1. Publique o link novo nos canais públicos da rede (grupos, perfis, núcleos).
2. Se os perfis sociais também se perderam, crie novos e ancore a confiança no que não se perde: **o histórico público do Git e os lacres na blockchain**. Quem duvidar, confere.
3. Reúna 3 pessoas de núcleos diferentes e recomponha a [regra dos 3](MANTENEDORES.md). Atualize o `MANTENEDORES.md` do novo repositório.

---

## O que se perde e o que fica

| Se perde (paciência) | Fica (o que importa) |
|---|---|
| As senhas das contas antigas | **O código inteiro, com histórico assinado** |
| Talvez o domínio (registre outro por ~R$ 40) | **Todos os resultados e dados públicos** |
| Talvez os perfis sociais | **Os lacres na blockchain — impossíveis de apagar** |
| Quem cansou no caminho | **A rede. E a rede reergue o resto.** |

## As regras que a cópia carrega junto

Quem reergue o movimento herda as cláusulas pétreas — elas viajam com o código:

1. **Não arrecada dinheiro. Nunca.**
2. **Ponte com o Conselho, não guerra.**
3. **Sem spam.**
4. **1 pessoa = 1 voto** — sem peso por dinheiro, sem token.
5. **Código aberto pra sempre** (a licença AGPL-3.0 garante: nem quem copia pode fechar).

---

*Um movimento que pode ser reerguido por qualquer torcedor num fim de semana é um movimento que não tem dono. Era esse o objetivo. **Vai, Corinthians.***
