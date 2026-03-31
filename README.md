# Netflix - Clone de Interface com Perfis

Projeto front-end inspirado na experiência da Netflix, com seleção de perfis, catálogo dinâmico e deploy automático no GitHub Pages.

Este projeto foi desenvolvido durante o curso Imersão Front-End da Alura.

## Funcionalidades

- Tela inicial com seleção de perfis.
- Persistência de tema na página inicial (claro/escuro).
- Persistência de perfil ativo com localStorage (nome e imagem).
- Catálogo com renderização dinâmica de carrosséis.
- Catálogo personalizado por perfil (títulos de seções por usuário).
- Tema do catálogo por perfil, salvo separadamente no localStorage.
- Bloqueio de acesso direto ao catálogo sem seleção de perfil.
- Deploy automático no GitHub Pages via GitHub Actions.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- GitHub Pages
- GitHub Actions

## Estrutura do Projeto

```text
.
├── index.html
├── script.js
├── style.css
├── assets/
├── catalogo/
│   ├── catalogo.html
│   ├── catalogo.css
│   └── js/
│       ├── data.js
│       ├── main.js
│       ├── utils.js
│       └── components/
│           ├── Card.js
│           └── Carousel.js
└── .github/
    └── workflows/
        └── deploy-pages.yml
```

## Como Executar Localmente

Como é um projeto estático, você pode abrir o `index.html` no navegador.

Para melhor experiência com módulos ES (catálogo), use um servidor local:

- VS Code + Live Server, ou
- terminal com servidor simples (exemplo):

```bash
npx serve .
```

Depois, acesse a URL exibida no terminal.

## Fluxo de Navegação

1. A aplicação inicia na página de perfis.
2. Ao clicar em um perfil:
   - nome e imagem são salvos no localStorage;
   - o usuário é redirecionado para o catálogo.
3. O catálogo lê o perfil ativo e atualiza:
   - nome no topo;
   - avatar no topo;
   - títulos de seção por perfil;
   - preferência de tema por perfil.

## Deploy

O deploy está configurado em `.github/workflows/deploy-pages.yml`.

A publicação ocorre automaticamente quando há push na branch `main`.

### Configuração no GitHub

- Repositório > Settings > Pages
- Source: GitHub Actions

## Observações

- Alguns cards usam thumbnails de vídeos externos; disponibilidade pode variar ao longo do tempo.
- Em caso de atualização não refletida no navegador, faça um hard reload (`Ctrl + F5`).

## Autora

Gilvaneide Medeiros

## Agradecimentos

Agradecimento especial aos instrutores da Imersão Front-End da Alura:

- Guilherme Lima
- Fernanda Degolin
- Thamiris Adriano
