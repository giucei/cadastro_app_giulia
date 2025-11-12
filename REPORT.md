Relatório inicial — Projeto iFood (cadastro_app_giulia)

O que foi criado nesta etapa:
- `ISSUES.md` com templates prontos para colar no GitHub Issues.
- `index.html`, `styles.css`, `app.js` com formulário de cadastro e classes POO de exemplo.
- `.gitignore` e `.env.example` (contendo placeholders para API_URL e API_KEY).

Próximos passos (resumido):
1. Inicializar git (se ainda não):
   git init
   git add .
   git commit -m "chore: projeto inicial"
2. Criar branch `staging` e empurrar:
   git checkout -b staging
   git remote add origin <seu-repo-url>  # se ainda não
   git push -u origin staging
3. No GitHub: criar Issues a partir de `ISSUES.md` e abrir um Pull Request de `staging` -> `main` com a descrição:
   "Esta é a V1 do projeto, pronta para deploy em staging"

MongoDB Atlas & Vercel (anotações rápidas):
- Crie cluster no Atlas, usuário e Data API. Anote API_URL e API_KEY.
- Não comite `.env` com chaves. Use `.env` local e registre as mesmas chaves em Vercel > Environment Variables.

Notas de segurança e explicações obrigatórias (tarefas de relatório):
- Perguntar ao Copilot: "Copilot, por que o arquivo .env deve estar no .gitignore? O que aconteceria se eu subisse minhas chaves para o GitHub?" — cole a resposta no relatório final.
- Prepare o PDF final com as seções C) Dados, D) Segurança e F) Deploy conforme o enunciado do curso.

Entregáveis finais (lista):
- Documento PDF com a pesquisa e respostas.
- Link do repositório GitHub.
- Link de produção na Vercel.
- Resposta da IA ao prompt DevOps (incluir em relatório).
