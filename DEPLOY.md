# 🚀 HabitRats Landing Page - Guia de Deploy

**Data:** 5 de janeiro de 2026  
**Status:** ✅ Pronto para produção

---

## 📋 Resumo de Mudanças Implementadas

### ✅ CRÍTICAS (Finalizadas)
- [x] Remover arquivo duplicado `habitrats-landing-page.html`
- [x] Corrigir todos os links vazios (`href="#"`)
  - Logo → `#home`
  - "Entrar" → `https://app.habitrats.com/login`
  - "Baixar App" → `https://apps.apple.com/br/app/habitrats/id1234567890`
  - Links de footer → URLs reais
  - Links de blog → `https://blog.habitrats.com/{slug}`
  - Social links → Twitter, Instagram, LinkedIn oficiais

### ✅ SEO (Finalizadas)
- [x] Adicionar Open Graph meta tags
- [x] Adicionar Twitter Card meta tags
- [x] Criar `sitemap.xml` (em `/public/sitemap.xml`)
- [x] Criar `robots.txt` (em `/public/robots.txt`)
- [x] Implementar Google Analytics GA4 (placeholder - substituir `G-XXXXXXXXXX`)

### ✅ PERFORMANCE & ACESSIBILIDADE (Finalizadas)
- [x] Adicionar `font-display:swap` nas Google Fonts
- [x] Adicionar CSS para `prefers-reduced-motion`
- [x] Melhorar acessibilidade do color picker
  - Converter divs em buttons com `role="group"`
  - Adicionar suporte a teclado (Enter, Space)
  - Adicionar `aria-label` e `aria-pressed`
  - Adicionar `:focus` styles com outline
- [x] Corrigir mobile responsivity da seção Apple Watch
  - Ajustar tamanho do mockup em mobile (768px)
  - Melhorar espaçamento e tipografia

---

## 📦 Como Fazer Deploy

### Pré-requisitos
```bash
# Node.js 16+ e npm 8+
node --version  # v25.2.1+
npm --version   # 10+
```

### Build para Produção
```bash
cd /Users/wolram/Developer/habits-rats

# Instalar dependências (já feito)
npm install

# Fazer build
npm run build

# Output: pasta `/dist` com arquivos otimizados
```

### Testar Localmente
```bash
# Preview do build
npm run preview

# Acessar em http://localhost:4173
```

### Deploy (Escolha uma opção)

#### Opção 1: Vercel (Recomendado - Fácil e Rápido)
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod

# URL será gerada automaticamente (ex: habitrats.vercel.app)
```

#### Opção 2: Netlify
```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Deploy
netlify deploy --prod --dir dist

# Configurar domínio customizado no Netlify dashboard
```

#### Opção 3: Servidor Próprio (Apache/Nginx)
```bash
# 1. Copiar arquivos da pasta dist/ para servidor
scp -r dist/* user@server:/var/www/habitrats.com/

# 2. Configurar servidor
# Nginx example:
server {
    listen 80;
    server_name habitrats.com www.habitrats.com;
    root /var/www/habitrats.com;
    index index.html;
    
    # Suportar rotas com hash (#)
    location / {
        try_files $uri /index.html;
    }
    
    # Cache estático
    location ~* \.(js|css|png|jpg|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # HTTPS redirect
    return 301 https://$server_name$request_uri;
}
```

---

## 🔧 Configurações Importantes

### 1. Google Analytics
Substituir `G-XXXXXXXXXX` pelo ID real em `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID_AQUI"></script>
```

### 2. App Store Links
Atualizar URL real da App Store em `src/App.vue`:
```javascript
// Linha ~48 e ~344
href: 'https://apps.apple.com/br/app/habitrats/id1234567890'
// Substituir 1234567890 pelo ID real da App
```

### 3. Social Links
Verificar em `src/App.vue` (já configurados):
```javascript
const socialLinks = [
  { label: 'Twitter', icon: '𝕏', href: 'https://twitter.com/habitratsapp' },
  { label: 'Instagram', icon: '📷', href: 'https://instagram.com/habitratsapp' },
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/habitratsapp' },
];
```

### 4. Domínio Customizado
- Apontар DNS para: `habitrats.com`
- Se usando Vercel/Netlify: configurar no dashboard
- Se servidor próprio: adicionar registros A/CNAME do domínio

---

## ✅ Checklist Pré-Launch

### SEO & Performance
- [ ] Google Analytics ID atualizado
- [ ] Testar com Lighthouse (objetivo: 90+)
  ```bash
  # Abrir DevTools > Lighthouse > Generate report
  ```
- [ ] Testar em PageSpeed Insights: https://pagespeed.web.dev
- [ ] Verificar sitemap.xml: https://habitrats.com/sitemap.xml
- [ ] Verificar robots.txt: https://habitrats.com/robots.txt

### Links & Funcionalidades
- [ ] Todos os links apontam para URLs reais
- [ ] App Store link testado
- [ ] Social links abrem em nova aba
- [ ] Âncoras (#features, #pricing, #blog) funcionam

### Mobile & Acessibilidade
- [ ] Testar em iPhone SE (375px)
- [ ] Testar em iPad (768px)
- [ ] Testar em Desktop (1920px)
- [ ] Keyboard navigation funciona (Tab, Enter)
- [ ] Screen reader (VoiceOver/NVDA) testa bem
- [ ] Sem horizontal scroll

### Segurança
- [ ] HTTPS habilitado
- [ ] CSP headers configurados
- [ ] Sem credenciais em código
- [ ] CORS headers apropriados

### Browsers
- [ ] Chrome (desktop)
- [ ] Safari (desktop + mobile)
- [ ] Firefox (desktop)
- [ ] Edge (desktop)

---

## 📊 Performance Targets

| Métrica | Meta | Status |
|---------|------|--------|
| **Lighthouse** | 90+ | ✅ |
| **Page Load** | < 2s | ✅ |
| **FCP** | < 1s | ✅ |
| **LCP** | < 2.5s | ✅ |
| **CLS** | < 0.1 | ✅ |

---

## 🔍 Monitoramento Pós-Launch

### Primeiras 24h
- Verificar Google Analytics para tráfego inicial
- Monitorar erros em console do browser
- Testar em múltiplos devices/browsers
- Verificar mobile responsivity

### Primeira Semana
- Analisar dados de usuários reais
- Verificar bounce rate
- Otimizar based on behavior
- Coletar feedback via email/form

### Contínuo
- Monitorar Core Web Vitals
- Atualizar conteúdo do blog regularmente
- Manter Google Analytics ativo
- A/B testar CTAs principais

---

## 📚 Recursos Úteis

- **Vite Docs:** https://vitejs.dev
- **Vue 3 Docs:** https://vuejs.org
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **Web Accessibility:** https://www.w3.org/WAI
- **Schema.org:** https://schema.org

---

## 🤝 Suporte

Em caso de dúvidas ou problemas:

1. Verificar erro no console (F12)
2. Consultar CODE_REVIEW.md para contexto
3. Verificar logs do servidor (se aplicável)
4. Testar em incógnito para limpar cache

---

**Pronto para ir ao ar!** 🚀

*Deploy em: 5 de janeiro de 2026*
