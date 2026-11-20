# Portal do Aluno UCSal

MVP front-end feito com **Ionic Framework (v1)** + **AngularJS**. Todos os dados são mockados nos Services do AngularJS (sem banco de dados e sem back-end).

## Como rodar

```bash
npm install
npm start
```

Abre em `http://localhost:8100`.

## Login de teste

| Matrícula | Senha  |
|-----------|--------|
| 20261001  | 123456 |
| 20261002  | 654321 |

## Estrutura

```
www/
├── css/style.css          # Identidade visual (variáveis CSS com as cores da UCSal)
├── img/                   # Imagens ilustrativas das notícias
├── lib/                   # Ionic 1 (bundle com AngularJS + ui-router) e locale pt-BR
├── js/
│   ├── app.js             # Módulo ucsalApp e rotas ($stateProvider)
│   ├── controllers/       # LoginCtrl, NoticiasCtrl, PerfilCtrl, FinanceiroCtrl
│   └── services/          # AuthService, NoticiasService, AlunoService, FinanceiroService
├── templates/             # Telas (login, menu, noticias, noticia-detalhe, perfil, financeiro)
└── index.html
```
