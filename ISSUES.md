# Templates de Issues para o projeto iFood (cadastro_app_giulia)

Use estes templates ao criar Issues no GitHub. Copie e cole no campo de nova Issue.

---

## Issue: Estrutura HTML/CSS base
Title: Criar estrutura HTML/CSS base

Descrição:
- Criar `index.html` com formulário de cadastro (nome, email, senha).
- Criar `styles.css` com estilo responsivo simples.
- Criar `app.js` vazio para começar a lógica.

Critérios de aceitação:
- Formulário visível e funcional localmente.
- Arquivos adicionados ao repositório na branch `staging`.

---

## Issue: Modelar classes POO para o projeto
Title: Modelar classes POO (Restaurante/Prato/Artista/Musica)

Descrição:
- Criar classes ES6 em `app.js` ou em módulos separados: `Restaurante`, `Prato`, `Artista`, `Musica`.
- Para cada classe, adicionar comentários explicativos (perguntas ao Copilot e respostas coladas como comentário).

Critérios de aceitação:
- Código com comentários que mostrem entendimento (constructor, this, métodos importantes).

---

## Issue: Configurar banco de dados no MongoDB Atlas
Title: Configurar MongoDB Atlas e Data API

Descrição:
- Criar conta no Atlas.
- Criar cluster e usuário.
- Liberar IP (usar 0.0.0.0/0 em ambiente de dev).
- Criar Data API e copiar API_URL e API_KEY.
- Registrar as credenciais em `.env` local e como Secrets na Vercel.

Critérios de aceitação:
- API_URL e API_KEY anotados no relatório.

---

## Issue: Gerenciamento de segredos e .gitignore
Title: Criar `.env` e `.gitignore`

Descrição:
- Criar arquivo `.env` local com variáveis (ver `.env.example`).
- Criar `.gitignore` incluindo `.env` e `node_modules/`.
- Perguntar ao Copilot porque `.env` deve estar no `.gitignore` e colar a resposta no relatório.

Critérios de aceitação:
- `.env` não comitado; `.env.example` com placeholders comitado.

---

## Issue: Deploy em Vercel (staging)
Title: Configurar Vercel e environment variables

Descrição:
- Importar repositório no Vercel.
- Garantir que `main` é branch de produção e `staging` gera previews.
- Adicionar Secrets (API_URL e API_KEY) para `staging` e `main`.

Critérios de aceitação:
- Link de preview de `staging` funcionando (quando integrado com DB).

---

## Issue: Conectar front ao banco (fetch)
Title: Substituir dados falsos por fetch à MongoDB Data API

Descrição:
- Em `app.js`, substituir dados de exemplo por chamadas `fetch` para a Data API.
- Usar variáveis de ambiente injetadas (via Vercel) para as chaves.

Critérios de aceitação:
- App carrega dados reais do banco no staging.

---

## Issue: Pull Request para `main` (sem merge)
Title: Criar PR de `staging` para `main` (V1 pronta para deploy em staging)

Descrição:
- Abrir PR no GitHub com descrição: "Esta é a V1 do projeto, pronta para deploy em staging".
- NÃO FAZER MERGE nesta etapa.

Critérios de aceitação:
- PR criado.
