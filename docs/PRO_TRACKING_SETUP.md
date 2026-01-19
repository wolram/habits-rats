# Guia de Rastreamento Profissional (Além do GA4)

Para um lançamento de nível profissional, o Google Analytics 4 (GA4) não é suficiente. Ele diz "o que" aconteceu, mas não "por que" ou "como".

Aqui estão as 3 ferramentas gratuitas (tiers iniciais) que recomendamos adicionar antes do lançamento.

---

## 1. Observabilidade de Erros: Sentry (Essencial)

Se o site travar no iPhone de um usuário, você nunca saberá sem isso. O Sentry avisa em tempo real: *"Erro na linha 45 do HeroSection.vue no Safari iOS"*.

**Como instalar:**

1. Crie conta em [sentry.io](https://sentry.io).
2. Crie um projeto "Vue".
3. Rode: `npm install @sentry/vue --save`
4. Adicione em `src/main.js`:

```javascript
import * as Sentry from "@sentry/vue";

Sentry.init({
  app,
  dsn: "SUA_CHAVE_DSN_AQUI", // Pegue no painel do Sentry
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
```

---

## 2. Comportamento do Usuário: Microsoft Clarity (Recomendado)

O Clarity é 100% gratuito e permite ver **mapas de calor** e **gravações de tela**. Você vê exatamente onde as pessoas clicam, até onde rolam a página e onde se frustram (rage clicks).

**Como instalar:**

1. Crie conta em [clarity.microsoft.com](https://clarity.microsoft.com).
2. Adicione o ID do projeto no `head` do `index.html` (o Clarity fornece o script pronto).

---

## 3. Google Search Console (Obrigatório para SEO)

É aqui que você envia seu sitemap e vê se o Google está indexando seu site.

**Passos:**

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. Adicione a propriedade `https://habitsrats.app`.
3. Verifique a propriedade (método DNS é o melhor).
4. No menu "Sitemaps", envie: `https://habitsrats.app/sitemap.xml`.

---

## Resumo da Stack de Monitoramento

| Ferramenta | Função | Status Atual | Ação Necessária |
| :--- | :--- | :--- | :--- |
| **GA4** | Métricas de Marketing | 🟡 Placeholder | Substituir ID no HTML |
| **Sentry** | Rastreamento de Bugs | 🔴 Ausente | Instalar SDK |
| **Clarity** | UX & Heatmaps | 🔴 Ausente | Adicionar Script |
| **GSC** | Indexação Google | 🟡 Sitemap pronto | Enviar URL |

> 💡 **Dica Pro:** Não lance sem Sentry. Um erro silencioso no botão de "Baixar" pode custar centenas de usuários.
