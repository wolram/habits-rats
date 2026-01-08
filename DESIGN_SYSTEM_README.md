# 🎨 HabitsRats Design System

Sistema de design completo para o HabitsRats, documentando todos os tokens de design, componentes e padrões visuais.

## 📦 O que está incluído

### 1. **Página HTML Standalone** (`design-system.html`)
Página completa e standalone com todos os componentes e documentação visual.
- ✅ Não requer build
- ✅ Pode ser aberta diretamente no navegador
- ✅ Perfeita para compartilhar com designers e stakeholders

### 2. **Componente Vue** (`src/components/DesignSystem.vue`)
Componente Vue reativo para integração na aplicação.
- ✅ Integrado com Vue 3
- ✅ Usa os mesmos estilos da aplicação
- ✅ Componentes interativos

### 3. **Guia Figma** (`FIGMA_DESIGN_SYSTEM.md`)
Documentação completa para criar o design system no Figma.
- ✅ Especificações detalhadas de cores
- ✅ Guia de tipografia
- ✅ Estrutura de componentes
- ✅ Variables e effects

## 🎯 Acesso Rápido

### Visualizar Online
Abra o arquivo `design-system.html` diretamente no navegador ou acesse através da navegação do site:
```
https://habitsrats.com/design-system.html
```

### Usar no Vue
```vue
<template>
  <DesignSystem />
</template>

<script>
import DesignSystem from '@/components/DesignSystem.vue';

export default {
  components: {
    DesignSystem
  }
};
</script>
```

## 🎨 Tokens de Design

### Cores

#### Backgrounds
| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-primary` | `#0D0D0D` | Fundo principal |
| `--bg-secondary` | `#1A1A1A` | Cards, containers |
| `--bg-tertiary` | `#242424` | Divisores, bordas |
| `--bg-elevated` | `#2D2D2D` | Elementos elevados |

#### Brand Colors
| Token | Valor | Uso |
|-------|-------|-----|
| `--green` | `#39D353` | Cor primária, CTAs |
| `--teal` | `#00D2D3` | Gradientes, destaques |
| `--blue` | `#54A0FF` | Links, informação |
| `--purple` | `#A855F7` | Premium, destaque |
| `--pink` | `#FF6B9D` | Favoritos, likes |
| `--red` | `#FF6B6B` | Erros, ações destrutivas |
| `--orange` | `#FF9F43` | Avisos |
| `--yellow` | `#FECA57` | Atenção |

#### Heatmap
| Token | Valor | Uso |
|-------|-------|-----|
| `--heat-0` | `#161B22` | Nenhuma atividade |
| `--heat-1` | `#0E4429` | Baixa atividade |
| `--heat-2` | `#006D32` | Média atividade |
| `--heat-3` | `#26A641` | Alta atividade |
| `--heat-4` | `#39D353` | Atividade máxima |

### Tipografia

#### Famílias
- **Display/Body**: Space Grotesk
- **Monospace**: JetBrains Mono

#### Escalas
| Estilo | Tamanho | Peso | Line Height |
|--------|---------|------|-------------|
| Display 1 | 64px | Bold | 110% |
| Display 2 | 48px | Bold | 120% |
| Heading 1 | 32px | Bold | 130% |
| Heading 2 | 24px | SemiBold | 140% |
| Heading 3 | 20px | SemiBold | 140% |
| Body Large | 18px | Regular | 160% |
| Body Normal | 16px | Regular | 160% |
| Body Small | 14px | Regular | 160% |
| Caption | 12px | Regular | 150% |

### Espaçamento

Baseado em múltiplos de 4px:
- `--space-xs`: 4px
- `--space-sm`: 8px
- `--space-md`: 16px
- `--space-lg`: 24px
- `--space-xl`: 32px
- `--space-2xl`: 48px
- `--space-3xl`: 64px

### Border Radius

- `--radius-sm`: 6px (inputs, elementos pequenos)
- `--radius-md`: 12px (botões, badges)
- `--radius-lg`: 20px (cards)
- `--radius-xl`: 32px (modais)

## 🧩 Componentes

### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
```

**Variants:**
- `btn-primary` - CTA principal (verde)
- `btn-secondary` - Ações secundárias
- `btn-outline` - Botões de borda
- `btn-ghost` - Botões discretos

**Sizes:**
- `btn-sm` - 8px 16px padding
- Default - 12px 24px padding
- `btn-lg` - 16px 32px padding

### Inputs

```html
<input type="text" class="input" placeholder="Digite algo...">
```

**States:**
- Default
- Focus (border verde + shadow)
- Error (border vermelho)
- Disabled (opacity 50%)

### Cards

```html
<div class="card">
  <div class="card-header">Título</div>
  <div class="card-body">Conteúdo do card</div>
</div>
```

**Variants:**
- Default - Estático
- Interactive - Com hover effects
- Highlighted - Com borda verde

### Badges

```html
<div class="badge badge-success">
  <span class="dot"></span>
  Ativo
</div>
```

**Variants:**
- `badge-success` - Verde
- `badge-warning` - Amarelo
- `badge-error` - Vermelho
- `badge-info` - Azul

### Heatmap Cells

```html
<div class="heatmap-cell" style="background: var(--heat-3);">3</div>
```

**Levels:** 0-4 (sem atividade até atividade máxima)

## 📱 Responsividade

### Breakpoints
- Mobile S: 320px
- Mobile M: 375px
- Mobile L: 425px
- Tablet: 768px
- Desktop: 1024px
- Desktop L: 1440px
- Desktop XL: 1920px

### Grid System
- **Desktop (1440px)**: 12 colunas, margin 80px, gutter 24px
- **Tablet (768px)**: 8 colunas, margin 40px, gutter 20px
- **Mobile (375px)**: 4 colunas, margin 20px, gutter 16px

## ✨ Animações

### Timing Functions
- **Fast**: 150ms - Micro interações
- **Base**: 200ms - Transições padrão
- **Slow**: 300ms - Animações complexas

### Efeitos Comuns
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hover Effect */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

## 🎯 Ícones

### Especificações
- **Style**: Outline
- **Stroke Width**: 2px
- **Stroke Cap**: Round
- **Sizes**: 16px, 20px, 24px, 32px

### Bibliotecas Recomendadas
- [Heroicons](https://heroicons.com/)
- [Lucide](https://lucide.dev/)
- [Iconify](https://icon-sets.iconify.design/)

## 🎨 Figma Setup

### Passo a Passo

1. **Instalar Fontes**
   - [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
   - [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

2. **Criar Color Styles**
   - Use a nomenclatura: `category/name`
   - Ex: `bg/primary`, `brand/green`, `text/secondary`

3. **Criar Text Styles**
   - Configure todas as escalas tipográficas
   - Use a nomenclatura: `Display/1`, `Heading/2`, `Body/Normal`

4. **Criar Components**
   - Use Auto Layout para todos os componentes
   - Configure variants (estado, tipo, tamanho)
   - Adicione propriedades interativas

5. **Setup Variables**
   - Spacing scale (4px, 8px, 16px, etc.)
   - Border radius (6px, 12px, 20px, 32px)
   - Shadows e effects

6. **Publicar como Library**
   - Permite uso por toda a equipe
   - Updates se propagam automaticamente

### Estrutura Recomendada
```
📁 HabitsRats Design System
├── 🎨 Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Effects
├── 🧩 Components
│   ├── Atoms (Button, Input, Badge)
│   ├── Molecules (Card, Modal)
│   └── Organisms (Navigation, Footer)
└── 📱 Screens
    ├── Mobile
    ├── Desktop
    └── Apple Watch
```

## 📚 Recursos

### Links Úteis
- [Figma Best Practices](https://www.figma.com/best-practices/)
- [Design Systems Repo](https://designsystemsrepo.com/)
- [Component Gallery](https://component.gallery/)

### Inspiração
- [GitHub Primer](https://primer.style/)
- [Stripe Design](https://stripe.com/design)
- [Vercel Design](https://vercel.com/design)

## 🔄 Manutenção

### Como Adicionar Novos Componentes

1. **Criar no Figma**
   - Design o componente
   - Configure variants
   - Adicione à library

2. **Implementar em CSS**
   - Adicione os estilos em `styles.css`
   - Use os tokens existentes
   - Mantenha consistência

3. **Documentar**
   - Adicione exemplo em `design-system.html`
   - Atualize componente Vue se necessário
   - Documente uso no README

4. **Testar**
   - Teste em diferentes viewports
   - Verifique acessibilidade
   - Valide com a equipe

### Versionamento

Use semantic versioning:
- **Major** (v2.0.0): Breaking changes
- **Minor** (v1.1.0): Novos componentes/features
- **Patch** (v1.0.1): Pequenos fixes

## 🤝 Contribuindo

### Guidelines

1. **Consistência é chave**
   - Use sempre os tokens definidos
   - Não crie valores arbitrários
   - Siga as convenções de nomenclatura

2. **Acessibilidade**
   - Contraste mínimo 4.5:1 para texto
   - Touch targets mínimo 44x44px
   - Suporte a navegação por teclado

3. **Performance**
   - Otimize animações (use transform/opacity)
   - Minimize re-paints
   - Use will-change com cuidado

4. **Documentação**
   - Sempre documente novos componentes
   - Adicione exemplos de uso
   - Inclua do's e don'ts

## 📞 Suporte

Para dúvidas sobre o design system:
1. Consulte a documentação completa em `FIGMA_DESIGN_SYSTEM.md`
2. Veja exemplos em `design-system.html`
3. Revise o código em `src/assets/styles.css`

---

**Última atualização**: Janeiro 2026
**Versão**: 1.0.0
**Mantido por**: Equipe HabitsRats
