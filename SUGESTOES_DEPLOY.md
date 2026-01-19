# 🚀 Sugestões para Colocar o Site no Ar

**Data da Análise:** Janeiro 2026  
**Status Atual:** Projeto bem estruturado, faltam alguns ajustes finais

---

## ✅ O QUE JÁ ESTÁ PRONTO

### Código e Estrutura
- ✅ Projeto Vue 3 + Vite configurado corretamente
- ✅ Componentes funcionais e bem organizados
- ✅ CSS responsivo e acessível
- ✅ SEO básico (meta tags, sitemap.xml, robots.txt)
- ✅ Google Analytics configurado (precisa do ID real)
- ✅ Links corrigidos e funcionais

### Documentação
- ✅ README.md completo
- ✅ DEPLOY.md com instruções
- ✅ STATUS.md com status do projeto

---

## 🔴 CRÍTICO - Fazer ANTES do Deploy

### 1. **Atualizar Google Analytics ID**
**Arquivo:** `index.html` (linha ~29-34)

**Status:** ❌ Placeholder `G-XXXXXXXXXX` ainda presente

**Ação:**
```html
<!-- SUBSTITUIR -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- POR -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID_REAL"></script>
<script>
  gtag('config', 'G-SEU_ID_REAL');
</script>
```

**Como obter:** https://analytics.google.com → Criar propriedade → Copiar ID

---

### 2. **Atualizar App Store Links**
**Arquivo:** `src/App.vue` (linhas ~25, ~48, ~340, ~353)

**Status:** ❌ Placeholder `id1234567890` ainda presente

**Ação:**
```javascript
// SUBSTITUIR TODAS AS OCORRÊNCIAS
href: 'https://apps.apple.com/br/app/habitrats/id1234567890'

// POR
href: 'https://apps.apple.com/br/app/habitrats/idSEU_ID_REAL'
```

**Como obter:** Após publicar na App Store, o ID estará na URL da página do app

---

### 3. **Criar Imagem OG (Open Graph)**
**Arquivo:** `index.html` (linha ~14 e ~21)

**Status:** ❌ Referência a `og-image.png` que não existe

**Ação:**
1. Criar imagem `public/og-image.png` (recomendado: 1200x630px)
2. Deve conter:
   - Logo HabitRats
   - Texto: "HabitRats - Rastreie seus hábitos"
   - Visual atrativo (pode usar screenshot do app)

**Ferramentas:**
- Canva: https://canva.com
- Figma: https://figma.com
- Ou usar screenshot do app + adicionar texto

---

### 4. **Verificar/Criar Domínio**
**Status:** ⚠️ URLs hardcoded com `habitrats.com`

**Ação:**
- Se já tem domínio: verificar se está correto
- Se não tem: escolher e configurar antes do deploy
- Atualizar todas as URLs em:
  - `index.html` (meta tags)
  - `public/sitemap.xml`
  - `public/robots.txt`
  - `src/App.vue` (links do footer)

---

## 🟡 IMPORTANTE - Fazer DEPOIS do Deploy (ou antes se possível)

### 5. **Configurar HTTPS**
**Status:** ⚠️ Depende da plataforma de deploy

**Ação:**
- **Vercel/Netlify:** Automático (já vem com HTTPS)
- **Servidor próprio:** Configurar certificado SSL (Let's Encrypt)

---

### 6. **Testar Build de Produção**
**Comando:**
```bash
npm run build
npm run preview
```

**Verificar:**
- [ ] Site carrega sem erros
- [ ] Todos os links funcionam
- [ ] Imagens aparecem corretamente
- [ ] Responsivo em mobile/tablet/desktop
- [ ] Console do browser sem erros

---

### 7. **Configurar Arquivo de Deploy (Opcional mas Recomendado)**

#### Para Vercel:
Criar `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Para Netlify:
Criar `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 8. **Criar .gitignore (se não existir)**
**Arquivo:** `.gitignore`

**Conteúdo sugerido:**
```
node_modules/
dist/
.DS_Store
*.log
.env
.env.local
```

---

## 🟢 MELHORIAS - Fazer quando tiver tempo

### 9. **Otimizar Imagens**
**Status:** ⚠️ Imagens PNG podem ser comprimidas

**Ação:**
- Comprimir badges PNG com TinyPNG: https://tinypng.com
- Considerar converter para WebP (melhor compressão)
- Adicionar `srcset` para diferentes resoluções

---

### 10. **Adicionar Favicon**
**Status:** ⚠️ Tem `apple-touch-icon.png` mas falta favicon.ico

**Ação:**
- Criar `favicon.ico` (16x16, 32x32, 48x48)
- Adicionar em `index.html`:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

---

### 11. **Adicionar PWA (Progressive Web App)**
**Status:** ❌ Não implementado

**Benefícios:**
- Instalável no mobile
- Funciona offline
- Melhor experiência

**Ação:**
- Criar `manifest.json`
- Adicionar service worker
- Configurar ícones PWA

---

### 12. **Testar Cross-Browser**
**Browsers para testar:**
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)

---

### 13. **Validar Acessibilidade**
**Ferramentas:**
- Lighthouse (Chrome DevTools)
- WAVE: https://wave.webaim.org
- axe DevTools

**Verificar:**
- [ ] Contraste de cores (WCAG AA mínimo)
- [ ] Navegação por teclado
- [ ] Screen readers (VoiceOver, NVDA)

---

### 14. **Configurar Monitoramento**
**Após deploy:**
- [ ] Google Analytics funcionando
- [ ] Google Search Console configurado
- [ ] Uptime monitoring (UptimeRobot, Pingdom)

---

## 📋 CHECKLIST FINAL ANTES DO DEPLOY

### Pré-Deploy (5-10 minutos)
- [ ] Google Analytics ID atualizado
- [ ] App Store links atualizados (ou remover se app não publicado)
- [ ] Imagem OG criada e adicionada
- [ ] Domínio verificado/configurado
- [ ] Build testado localmente (`npm run build && npm run preview`)
- [ ] Console do browser sem erros
- [ ] Links todos funcionais

### Deploy
- [ ] Escolher plataforma (Vercel recomendado)
- [ ] Fazer deploy
- [ ] Verificar site no ar
- [ ] Testar em mobile

### Pós-Deploy (primeiras 24h)
- [ ] Verificar Google Analytics recebendo dados
- [ ] Testar em múltiplos browsers
- [ ] Verificar HTTPS funcionando
- [ ] Testar links externos (App Store, social)
- [ ] Monitorar erros no console

---

## 🚀 OPÇÕES DE DEPLOY (Escolha uma)

### Opção 1: Vercel (Recomendado - Mais Fácil)
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

**Vantagens:**
- ✅ Gratuito
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Deploy em 2 minutos
- ✅ Preview de cada commit

---

### Opção 2: Netlify
```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy --prod --dir dist
```

**Vantagens:**
- ✅ Gratuito
- ✅ HTTPS automático
- ✅ Formulários integrados
- ✅ Deploy em 2 minutos

---

### Opção 3: GitHub Pages
```bash
# 1. Build
npm run build

# 2. Configurar GitHub Actions ou fazer push manual
# Ver: https://github.com/peaceiris/actions-gh-pages
```

**Vantagens:**
- ✅ Gratuito
- ✅ Integrado com GitHub
- ⚠️ Requer configuração adicional

---

### Opção 4: Servidor Próprio
```bash
# 1. Build
npm run build

# 2. Copiar para servidor
scp -r dist/* user@server:/var/www/habitrats.com/

# 3. Configurar nginx/apache
```

**Vantagens:**
- ✅ Controle total
- ⚠️ Requer conhecimento de servidor
- ⚠️ Precisa configurar SSL manualmente

---

## 📊 PRIORIZAÇÃO

### 🔴 FAZER AGORA (Bloqueadores)
1. Atualizar Google Analytics ID
2. Atualizar App Store links (ou remover temporariamente)
3. Criar imagem OG
4. Testar build local

### 🟡 FAZER HOJE (Importante)
5. Escolher plataforma de deploy
6. Fazer deploy
7. Verificar site funcionando

### 🟢 FAZER DEPOIS (Melhorias)
8. Otimizar imagens
9. Adicionar PWA
10. Testar cross-browser
11. Configurar monitoramento

---

## 🆘 PROBLEMAS COMUNS

### Build falha
```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Links não funcionam
- Verificar se são links relativos ou absolutos
- Verificar se `base` no `vite.config.js` está correto

### Imagens não aparecem
- Verificar caminhos (devem ser relativos a `/public`)
- Verificar se imagens estão em `public/` ou `src/assets/`

### Estilos não aplicam
- Hard refresh: Cmd+Shift+R (Mac) ou Ctrl+Shift+R (Windows)
- Limpar cache do browser

---

## 📞 PRÓXIMOS PASSOS

1. **Agora:** Atualizar IDs (GA4, App Store)
2. **Agora:** Criar imagem OG
3. **Hoje:** Fazer deploy em Vercel/Netlify
4. **Amanhã:** Verificar analytics e testar tudo
5. **Esta semana:** Otimizar e melhorar

---

**Tempo estimado para colocar no ar:** 15-30 minutos (após atualizar IDs)

**Status geral:** 🟢 **95% PRONTO** - Só faltam ajustes finais!

---

*Documento criado em: Janeiro 2026*  
*Última atualização: Janeiro 2026*
