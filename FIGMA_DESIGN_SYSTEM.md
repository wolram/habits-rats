# 🎨 HabitsRats Design System - Guia Figma

Este documento contém todas as especificações para criar o design system completo do HabitsRats no Figma.

## 📋 Índice
1. [Setup Inicial](#setup-inicial)
2. [Color Styles](#color-styles)
3. [Text Styles](#text-styles)
4. [Components](#components)
5. [Variables](#variables)
6. [Effects](#effects)
7. [Grid System](#grid-system)
8. [Iconografia](#iconografia)

---

## 🎯 Setup Inicial

### Plugins Recomendados
- **Tokens Studio** - Para gerenciar design tokens
- **Iconify** - Biblioteca de ícones
- **Content Reel** - Para popular com conteúdo
- **Auto Layout** - Já nativo no Figma

### Estrutura de Arquivos
```
📁 HabitsRats Design System
├── 🎨 Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Effects
├── 🧩 Components
│   ├── Atoms
│   ├── Molecules
│   └── Organisms
└── 📱 Screens
    ├── Mobile
    ├── Desktop
    └── Apple Watch
```

---

## 🎨 Color Styles

### 1. Backgrounds
Crie os seguintes color styles (Right sidebar > Color styles > +):

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| `bg/primary` | `#0D0D0D` | `13, 13, 13` | Fundo principal da interface |
| `bg/secondary` | `#1A1A1A` | `26, 26, 26` | Cards, containers |
| `bg/tertiary` | `#242424` | `36, 36, 36` | Divisores, bordas |
| `bg/elevated` | `#2D2D2D` | `45, 45, 45` | Elementos elevados, modais |

### 2. Text Colors

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| `text/primary` | `#FFFFFF` | `255, 255, 255` | Títulos, texto principal |
| `text/secondary` | `#8B949E` | `139, 148, 158` | Subtítulos, descrições |
| `text/muted` | `#484F58` | `72, 79, 88` | Placeholders, labels discretos |

### 3. Brand Colors - Principais

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| `brand/green` | `#39D353` | `57, 211, 83` | CTA primário, sucesso, heatmap máximo |
| `brand/green-secondary` | `#26A641` | `38, 166, 65` | Hover states |
| `brand/green-tertiary` | `#1A7F37` | `26, 127, 55` | Active states |

### 4. Brand Colors - Secundárias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| `brand/teal` | `#00D2D3` | `0, 210, 211` | Gradientes, destaques |
| `brand/teal-secondary` | `#01A3A4` | `1, 163, 164` | Variações |
| `brand/teal-tertiary` | `#017F80` | `1, 127, 128` | Variações |
| `brand/blue` | `#54A0FF` | `84, 160, 255` | Informação, links |
| `brand/blue-secondary` | `#2E86DE` | `46, 134, 222` | Variações |
| `brand/blue-tertiary` | `#1E5FAA` | `30, 95, 170` | Variações |
| `brand/purple` | `#A855F7` | `168, 85, 247` | Premium, destaque |
| `brand/purple-secondary` | `#8B5CF6` | `139, 92, 246` | Variações |
| `brand/purple-tertiary` | `#6D28D9` | `109, 40, 217` | Variações |

### 5. Semantic Colors

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| `semantic/red` | `#FF6B6B` | `255, 107, 107` | Erro, ações destrutivas |
| `semantic/red-secondary` | `#EE5A5A` | `238, 90, 90` | Hover |
| `semantic/red-tertiary` | `#CC4444` | `204, 68, 68` | Active |
| `semantic/orange` | `#FF9F43` | `255, 159, 67` | Aviso |
| `semantic/orange-secondary` | `#F0932B` | `240, 147, 43` | Hover |
| `semantic/orange-tertiary` | `#CC7A2E` | `204, 122, 46` | Active |
| `semantic/yellow` | `#FECA57` | `254, 202, 87` | Atenção |
| `semantic/yellow-secondary` | `#F9CA24` | `249, 202, 36` | Hover |
| `semantic/yellow-tertiary` | `#D4A81E` | `212, 168, 30` | Active |
| `semantic/pink` | `#FF6B9D` | `255, 107, 157` | Favoritos, likes |
| `semantic/pink-secondary` | `#EC4899` | `236, 72, 153` | Hover |
| `semantic/pink-tertiary` | `#BE185D` | `190, 24, 93` | Active |

### 6. Heatmap Colors

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| `heatmap/level-0` | `#161B22` | `22, 27, 34` | Nenhuma atividade |
| `heatmap/level-1` | `#0E4429` | `14, 68, 41` | Baixa atividade (1-25%) |
| `heatmap/level-2` | `#006D32` | `0, 109, 50` | Média atividade (26-50%) |
| `heatmap/level-3` | `#26A641` | `38, 166, 65` | Alta atividade (51-75%) |
| `heatmap/level-4` | `#39D353` | `57, 211, 83` | Atividade máxima (76-100%) |

### Como criar Color Styles no Figma:
1. Crie um frame chamado "Colors"
2. Crie quadrados (100x100px) para cada cor
3. Preencha com as cores acima
4. Clique no fill > Style > + (Create style)
5. Nomeie usando a convenção: `category/name`
6. Adicione descrição com o uso

---

## ✍️ Text Styles

### Família de Fontes
- **Display & Body**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
  - Weights: Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Monospace**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
  - Weights: Regular (400), Medium (500)

### Escala Tipográfica

| Nome | Fonte | Peso | Tamanho | Line Height | Letter Spacing | Uso |
|------|-------|------|---------|-------------|----------------|-----|
| `Display/1` | Space Grotesk | Bold (700) | 64px | 110% | -0.02em | Hero titles, landing page |
| `Display/2` | Space Grotesk | Bold (700) | 48px | 120% | -0.01em | Section headers |
| `Heading/1` | Space Grotesk | Bold (700) | 32px | 130% | 0 | Page titles |
| `Heading/2` | Space Grotesk | SemiBold (600) | 24px | 140% | 0 | Section titles |
| `Heading/3` | Space Grotesk | SemiBold (600) | 20px | 140% | 0 | Card titles |
| `Body/Large` | Space Grotesk | Regular (400) | 18px | 160% | 0 | Intro paragraphs |
| `Body/Normal` | Space Grotesk | Regular (400) | 16px | 160% | 0 | Body text padrão |
| `Body/Small` | Space Grotesk | Regular (400) | 14px | 160% | 0 | Secondary text |
| `Caption` | Space Grotesk | Regular (400) | 12px | 150% | 0.01em | Labels, metadata |
| `Code/Regular` | JetBrains Mono | Regular (400) | 13px | 150% | 0 | Valores, dados técnicos |
| `Button/Default` | Space Grotesk | SemiBold (600) | 14px | 100% | 0 | Button text |
| `Button/Large` | Space Grotesk | SemiBold (600) | 16px | 100% | 0 | Large button text |

### Como criar Text Styles no Figma:
1. Crie um frame "Typography"
2. Digite um texto de exemplo
3. Aplique as configurações acima
4. Selecione o texto > Text section > Style > + (Create style)
5. Nomeie: `Category/Name`
6. Repita para todos os estilos

---

## 🧩 Components

### Button Component

#### Estrutura
```
Frame: Button
├── Auto Layout (Horizontal)
│   ├── Gap: 8px
│   ├── Padding: 12px 24px (default)
│   └── Align: Center
├── Icon (optional) - 16x16px
└── Text - Button/Default style
```

#### Variants

**State** × **Type** × **Size**

**States:**
- Default
- Hover (transform Y: -2px, shadow)
- Active (transform Y: 0)
- Disabled (opacity: 50%)

**Types:**

1. **Primary**
   - Fill: `brand/green`
   - Text: `#0D0D0D`
   - Radius: 12px
   - Hover: `brand/green-secondary` + `shadow/glow`

2. **Secondary**
   - Fill: `bg/elevated`
   - Text: `text/primary`
   - Border: 1px `bg/tertiary`
   - Radius: 12px
   - Hover: `bg/tertiary`

3. **Outline**
   - Fill: Transparent
   - Text: `text/primary`
   - Border: 2px `brand/green`
   - Radius: 12px
   - Hover: Fill `brand/green`, Text `#0D0D0D`

4. **Ghost**
   - Fill: Transparent
   - Text: `text/secondary`
   - Radius: 12px
   - Hover: Fill `bg/tertiary`, Text `text/primary`

**Sizes:**
- Small: 8px 16px, 12px text
- Default: 12px 24px, 14px text
- Large: 16px 32px, 16px text

#### Properties
- `hasIcon`: Boolean
- `iconPosition`: Left / Right
- `fullWidth`: Boolean

---

### Input Component

#### Estrutura
```
Frame: Input
├── Auto Layout (Horizontal)
│   ├── Padding: 12px 16px
│   ├── Gap: 8px
│   └── Fill: Hug
├── Icon (optional) - 16x16px
└── Text - Body/Small style
```

#### States
1. **Default**
   - Fill: `bg/secondary`
   - Border: 1px `bg/tertiary`
   - Radius: 6px
   - Text: `text/muted` (placeholder)

2. **Focus**
   - Border: 1px `brand/green`
   - Shadow: 0 0 0 3px `rgba(57, 211, 83, 0.1)`

3. **Error**
   - Border: 1px `semantic/red`
   - Shadow: 0 0 0 3px `rgba(255, 107, 107, 0.1)`

4. **Disabled**
   - Opacity: 50%
   - Cursor: not-allowed

#### Variants
- Text Input
- Password Input
- Search Input (with icon)
- Number Input

---

### Card Component

#### Estrutura
```
Frame: Card
├── Auto Layout (Vertical)
│   ├── Padding: 32px
│   ├── Gap: 16px
│   ├── Fill: bg/secondary
│   ├── Border: 1px bg/tertiary
│   └── Radius: 20px
├── Header
│   ├── Icon (optional) - 24x24px
│   └── Title - Heading/3
├── Body - Body/Normal
└── Footer (optional)
    └── Action buttons
```

#### Variants
1. **Default**
   - Static appearance

2. **Interactive**
   - Hover: translateY(-4px), border: `brand/green`, shadow/lg

3. **Highlighted**
   - Border: 2px `brand/green`
   - Shadow: `shadow/glow`

#### Use Cases
- Feature cards
- Stat cards
- Habit cards
- Achievement cards

---

### Badge Component

#### Estrutura
```
Frame: Badge
├── Auto Layout (Horizontal)
│   ├── Padding: 6px 12px
│   ├── Gap: 6px
│   ├── Radius: 999px
│   └── Align: Center
├── Dot (optional) - 8x8 circle
└── Text - Caption style
```

#### Variants

1. **Success**
   - Fill: `rgba(57, 211, 83, 0.1)`
   - Border: 1px `rgba(57, 211, 83, 0.2)`
   - Text: `brand/green`
   - Dot: `brand/green`

2. **Warning**
   - Fill: `rgba(254, 202, 87, 0.1)`
   - Border: 1px `rgba(254, 202, 87, 0.2)`
   - Text: `semantic/yellow`
   - Dot: `semantic/yellow`

3. **Error**
   - Fill: `rgba(255, 107, 107, 0.1)`
   - Border: 1px `rgba(255, 107, 107, 0.2)`
   - Text: `semantic/red`
   - Dot: `semantic/red`

4. **Info**
   - Fill: `rgba(84, 160, 255, 0.1)`
   - Border: 1px `rgba(84, 160, 255, 0.2)`
   - Text: `brand/blue`
   - Dot: `brand/blue`

5. **Neutral**
   - Fill: `bg/tertiary`
   - Border: 1px `bg/elevated`
   - Text: `text/secondary`

---

### Heatmap Cell Component

#### Estrutura
```
Frame: HeatmapCell
├── Size: 12x12px (mobile), 14x14px (desktop)
├── Border: 1px rgba(255, 255, 255, 0.1)
├── Radius: 2px
└── Fill: heatmap/level-X
```

#### Variants
- Level 0: `heatmap/level-0`
- Level 1: `heatmap/level-1`
- Level 2: `heatmap/level-2`
- Level 3: `heatmap/level-3`
- Level 4: `heatmap/level-4`

#### Interactive States
- Default
- Hover: Scale 1.2, show tooltip
- Selected: Border 2px `brand/green`

#### Additional Properties
- `hasData`: Boolean
- `date`: String
- `count`: Number

---

### Progress Bar Component

#### Estrutura
```
Frame: ProgressBar
├── Auto Layout (Horizontal)
│   ├── Width: 100% (fill)
│   ├── Height: 8px
│   ├── Radius: 999px
│   └── Fill: bg/tertiary
└── Fill
    ├── Width: X% (based on progress)
    ├── Height: 8px
    ├── Radius: 999px
    └── Fill: brand/green
```

#### Variants by Size
- Small: 4px height
- Default: 8px height
- Large: 12px height

#### Variants by Color
- Green (default)
- Blue
- Purple
- Gradient (green → teal)

---

### Modal Component

#### Estrutura
```
Frame: Modal
├── Overlay
│   ├── Fill: rgba(0, 0, 0, 0.8)
│   ├── Blur: 10px
│   └── Full screen
└── Content
    ├── Width: 500px max
    ├── Padding: 32px
    ├── Radius: 24px
    ├── Fill: bg/secondary
    ├── Border: 1px bg/tertiary
    ├── Shadow: shadow/lg
    └── Auto Layout (Vertical, gap 24px)
        ├── Header
        │   ├── Title - Heading/2
        │   └── Close button
        ├── Body - Body/Normal
        └── Footer
            └── Action buttons
```

---

### Navigation Component

#### Estrutura
```
Frame: Navigation
├── Auto Layout (Horizontal)
│   ├── Padding: 24px 20px
│   ├── Gap: 24px
│   ├── Width: 100%
│   ├── Fill: rgba(26, 26, 26, 0.8)
│   ├── Blur: 10px
│   └── Border bottom: 1px bg/tertiary
├── Logo - 32px height
├── Nav Links
│   └── Auto Layout (Horizontal, gap 24px)
│       └── Link - Body/Small, text/secondary
└── CTA Buttons
    ├── Button Secondary
    └── Button Primary
```

---

## 📐 Variables

### Spacing Scale
Crie variables no Figma (Settings > Variables):

| Nome | Valor | Uso |
|------|-------|-----|
| `spacing/xs` | 4px | Gaps mínimos |
| `spacing/sm` | 8px | Gaps pequenos, ícones |
| `spacing/md` | 16px | Gaps padrão |
| `spacing/lg` | 24px | Seções pequenas |
| `spacing/xl` | 32px | Seções médias |
| `spacing/2xl` | 48px | Seções grandes |
| `spacing/3xl` | 64px | Seções hero |

### Border Radius

| Nome | Valor | Uso |
|------|-------|-----|
| `radius/sm` | 6px | Inputs, small elements |
| `radius/md` | 12px | Buttons, badges |
| `radius/lg` | 20px | Cards |
| `radius/xl` | 32px | Modals, large containers |
| `radius/full` | 999px | Pills, circular elements |

---

## ✨ Effects

### Shadows
Crie effects no Figma:

#### Shadow/SM
- Type: Drop Shadow
- X: 0, Y: 1
- Blur: 2
- Color: `rgba(0, 0, 0, 0.3)`

#### Shadow/MD
- Type: Drop Shadow
- X: 0, Y: 4
- Blur: 8
- Color: `rgba(0, 0, 0, 0.4)`

#### Shadow/LG
- Type: Drop Shadow
- X: 0, Y: 10
- Blur: 20
- Color: `rgba(0, 0, 0, 0.5)`

#### Shadow/Glow
- Type: Drop Shadow
- X: 0, Y: 0
- Blur: 20
- Color: `rgba(57, 211, 83, 0.3)`

### Blur Effects

#### Blur/Light
- Type: Background Blur
- Amount: 10px

#### Blur/Medium
- Type: Background Blur
- Amount: 20px

#### Blur/Heavy
- Type: Background Blur
- Amount: 40px

---

## 📏 Grid System

### Desktop (1440px)
- Type: Grid
- Columns: 12
- Margin: 80px
- Gutter: 24px
- Color: `rgba(57, 211, 83, 0.1)`

### Tablet (768px)
- Type: Grid
- Columns: 8
- Margin: 40px
- Gutter: 20px
- Color: `rgba(57, 211, 83, 0.1)`

### Mobile (375px)
- Type: Grid
- Columns: 4
- Margin: 20px
- Gutter: 16px
- Color: `rgba(57, 211, 83, 0.1)`

### Baseline Grid
- Type: Rows
- Height: 8px
- Color: `rgba(57, 211, 83, 0.05)`

---

## 🎯 Iconografia

### Especificações
- **Style**: Outline
- **Stroke Width**: 2px
- **Stroke Cap**: Round
- **Stroke Join**: Round
- **Sizes**: 16px, 20px, 24px, 32px
- **Color**: Usar text styles ou brand colors

### Ícones Essenciais

#### Navigation
- Home
- Calendar
- Chart
- Profile
- Settings

#### Actions
- Plus
- Check
- Close
- Edit
- Delete
- Share
- Search
- Filter

#### Status
- Info
- Warning
- Error
- Success
- Clock

#### Gamification
- Streak (lightning)
- Star
- Trophy
- Medal
- Fire

#### Social
- Heart
- Comment
- Like

### Onde encontrar
- [Heroicons](https://heroicons.com/) - Recomendado
- [Lucide](https://lucide.dev/)
- Plugin Figma: Iconify

---

## 🎬 Animações & Transições

### Timing Functions
- **Ease Out**: Elementos aparecendo
- **Ease In**: Elementos desaparecendo
- **Ease In Out**: Elementos mudando de estado

### Durações
- **Fast**: 150ms - Micro interações
- **Base**: 200ms - Transições padrão
- **Slow**: 300ms - Animações complexas
- **Slower**: 500ms - Animações de página

### Propriedades Animáveis
- Opacity: 0 → 1
- Transform: translateY(20px) → 0
- Scale: 0.95 → 1
- Background: color transitions

### Smart Animate
Use o Smart Animate do Figma para criar:
- Modal open/close
- Dropdown expand/collapse
- Page transitions
- Button hover states

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile S | 320px | Single column |
| Mobile M | 375px | Single column |
| Mobile L | 425px | Single column |
| Tablet | 768px | 2 columns |
| Desktop | 1024px | 3-4 columns |
| Desktop L | 1440px | Full layout |
| Desktop XL | 1920px | Max width 1440px |

---

## 🔄 Manutenção

### Versionamento
Use o sistema de versioning do Figma:
- v1.0.0 - Initial release
- v1.1.0 - Minor updates (new components)
- v1.0.1 - Patches (small fixes)

### Biblioteca Compartilhada
1. Publique o arquivo como Library
2. Team members podem consumir
3. Updates propagam automaticamente
4. Documente mudanças no changelog

### Checklist para Novos Components
- [ ] Criado com Auto Layout
- [ ] Todas as variants configuradas
- [ ] Nomes semânticos e organizados
- [ ] Constraints configurados
- [ ] Responsive behavior testado
- [ ] Documentação inline
- [ ] Exemplos de uso criados
- [ ] Published to library

---

## 📚 Recursos Adicionais

### Links Úteis
- [Figma Best Practices](https://www.figma.com/best-practices/)
- [Design Systems Repo](https://designsystemsrepo.com/)
- [Component Gallery](https://component.gallery/)

### Inspiração
- [GitHub Primer](https://primer.style/)
- [Stripe Design](https://stripe.com/design)
- [Vercel Design](https://vercel.com/design)

---

## 📞 Suporte

Para dúvidas sobre implementação:
1. Consulte a página web: `/design-system.html`
2. Revise os códigos CSS no repositório
3. Verifique os exemplos de uso no Figma

**Última atualização**: Janeiro 2026
