# 🐭 HabitRats Website

> Transforme hábitos em progresso visível com rastreamento estilo GitHub + gamificação + Apple Watch

Este é um projeto Vue.js 3 profissional, organizado e modularizado, projetado para ser escalável e fácil de manter.

---

## 📖 Documentação Rápida

### 🚀 Começar

```bash
npm install
npm run dev      # Desenvolvimento local
npm run build    # Build para produção
npm run preview  # Pré-visualização do build
npm run lint     # Verificar erros de código
npm run format   # Formatar código com Prettier
```

### 📚 Documentação

| Arquivo                            | Propósito                                  |
| ---------------------------------- | ------------------------------------------ |
| [docs/SUMMARY.md](docs/SUMMARY.md) | 📊 Resumo executivo + status de atividades |
| [docs/DEPLOY.md](docs/DEPLOY.md)   | 🚀 Guia de deployment em produção          |
| [docs/STATUS.md](docs/STATUS.md)   | 🔍 Status técnico detalhado + métricas     |

---

## ✨ Recursos

- 📊 **Heatmap Visual** - Inspirado no GitHub, mostra progresso diário
- 🎮 **Gamificação** - XP, níveis, badges e streaks
- ⌚ **Apple Watch** - Check-in rápido do pulso
- 📝 **Blog Integrado** - 18 posts sobre saúde e produtividade
- 🎨 **Design System** - Documentação completa de componentes e estilos
- 📱 **100% Responsivo** - Mobile, tablet, desktop
- ⚡ **Performance** - Otimizado para Vite e Vue 3

---

## 🛠️ Tech Stack

| Tecnologia   | Versão | Uso                      |
| ------------ | ------ | ------------------------ |
| Vue.js       | 3.4+   | Framework frontend       |
| Vue Router   | 4.0+   | Gerenciamento de rotas   |
| Vite         | 5.1+   | Build tool               |
| ESLint       | 8.0+   | Qualidade de código      |
| Prettier     | 3.0+   | Formatação de código     |

---

## 📁 Estrutura de Pastas (Arquitetura Profissional)

```
habitrats-website/
├── src/
│   ├── main.js          (Entry point)
│   ├── App.vue          (Root component)
│   ├── router/          (Configuração de rotas)
│   ├── views/           (Páginas: Home, Blog, DesignSystem)
│   ├── components/      (Componentes modulares: Hero, Pricing, etc.)
│   └── assets/          (CSS global, imagens, logos)
├── docs/                (Documentação do projeto)
├── public/              (Assets estáticos)
├── index.html           (HTML main)
├── vite.config.js       (Config Vite)
└── package.json         (Dependencies & Scripts)
```

---

## 🚀 Deploy

O projeto está configurado para ser buildado via Vite. Basta rodar `npm run build` e fazer o upload da pasta `dist/` para qualquer provedor de hospedagem estática (Vercel, Netlify, GitHub Pages).

---

## 📋 Checklist de Qualidade

- [x] Arquitetura modular (Views/Components)
- [x] Roteamento funcional (Vue Router)
- [x] Linting e Formatação (ESLint/Prettier)
- [x] SEO otimizado
- [x] Performance otimizada (Lazy loading de rotas)

---

## 📄 Licença

© 2026 HabitRats. Todos os direitos reservados.