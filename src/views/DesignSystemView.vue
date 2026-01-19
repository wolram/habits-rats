<template>
  <div class="design-system">
    <!-- Navigation -->
    <header class="ds-header">
      <div class="container">
        <h1>HabitsRats Design System</h1>
        <nav>
          <ul>
            <li>
              <a href="#colors" @click.prevent="scrollTo('colors')">Cores</a>
            </li>
            <li>
              <a href="#typography" @click.prevent="scrollTo('typography')"
                >Tipografia</a
              >
            </li>
            <li>
              <a href="#components" @click.prevent="scrollTo('components')"
                >Componentes</a
              >
            </li>
            <li>
              <a href="#spacing" @click.prevent="scrollTo('spacing')"
                >Espaçamento</a
              >
            </li>
            <li>
              <a href="#icons" @click.prevent="scrollTo('icons')">Ícones</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Content -->
    <div class="container">
      <!-- Introduction -->
      <section class="ds-intro">
        <h2>📐 Design System</h2>
        <p>
          Sistema de design completo do HabitsRats. Este guia documenta todos os
          tokens, componentes e padrões visuais usados no aplicativo.
        </p>
      </section>

      <!-- Colors -->
      <section id="colors" class="ds-section">
        <h2>🎨 Paleta de Cores</h2>

        <h3>Backgrounds</h3>
        <div class="color-grid">
          <ColorCard
            v-for="color in backgrounds"
            :key="color.name"
            :name="color.name"
            :variable="color.variable"
            :hex="color.hex"
          />
        </div>

        <h3>Text Colors</h3>
        <div class="color-grid">
          <ColorCard
            v-for="color in textColors"
            :key="color.name"
            :name="color.name"
            :variable="color.variable"
            :hex="color.hex"
          />
        </div>

        <h3>Brand Colors</h3>
        <div class="color-grid">
          <ColorCard
            v-for="color in brandColors"
            :key="color.name"
            :name="color.name"
            :variable="color.variable"
            :hex="color.hex"
          />
        </div>

        <h3>Heatmap Colors</h3>
        <div class="color-grid">
          <ColorCard
            v-for="color in heatmapColors"
            :key="color.name"
            :name="color.name"
            :variable="color.variable"
            :hex="color.hex"
          />
        </div>
      </section>

      <!-- Typography -->
      <section id="typography" class="ds-section">
        <h2>✍️ Tipografia</h2>

        <h3>Famílias de Fonte</h3>
        <div class="code-block">
          --font-display: 'Space Grotesk', sans-serif;<br />
          --font-mono: 'JetBrains Mono', monospace;
        </div>

        <h3>Escalas Tipográficas</h3>
        <TypographyExample
          v-for="typo in typographyScale"
          :key="typo.name"
          :label="typo.label"
          :className="typo.className"
          :text="typo.text"
        />
      </section>

      <!-- Components -->
      <section id="components" class="ds-section">
        <h2>🧩 Componentes</h2>

        <h3>Buttons</h3>
        <div class="component-preview">
          <div>
            <div class="preview-label">Primary</div>
            <button class="btn btn-primary">Baixar App</button>
          </div>
          <div>
            <div class="preview-label">Secondary</div>
            <button class="btn btn-secondary">Saiba Mais</button>
          </div>
          <div>
            <div class="preview-label">Outline</div>
            <button class="btn btn-outline">Ver Planos</button>
          </div>
          <div>
            <div class="preview-label">Ghost</div>
            <button class="btn btn-ghost">Cancelar</button>
          </div>
        </div>

        <h3>Button Sizes</h3>
        <div class="component-preview">
          <button class="btn btn-primary btn-sm">Small</button>
          <button class="btn btn-primary">Default</button>
          <button class="btn btn-primary btn-lg">Large</button>
        </div>

        <h3>Inputs</h3>
        <div class="component-preview">
          <input type="text" class="input" placeholder="Digite seu email..." />
          <input type="text" class="input" placeholder="Nome do hábito" />
          <input type="password" class="input" placeholder="Senha" />
        </div>

        <h3>Cards</h3>
        <div class="card-grid">
          <div class="card">
            <div class="card-header">🎯 Heatmap Visual</div>
            <div class="card-body">
              Visualize sua consistência com um heatmap estilo GitHub que mostra
              seu progresso ao longo do tempo.
            </div>
          </div>
          <div class="card">
            <div class="card-header">⚡ Sistema de XP</div>
            <div class="card-body">
              Ganhe pontos de experiência e suba de nível conforme mantém seus
              hábitos em dia.
            </div>
          </div>
        </div>

        <h3>Badges</h3>
        <div class="component-preview">
          <div class="badge badge-success">
            <span class="badge-dot"></span>
            Ativo
          </div>
          <div class="badge badge-warning">
            <span class="badge-dot"></span>
            Atenção
          </div>
          <div class="badge badge-error">
            <span class="badge-dot"></span>
            Erro
          </div>
          <div class="badge badge-info">
            <span class="badge-dot"></span>
            Info
          </div>
        </div>

        <h3>Heatmap Cells</h3>
        <div class="component-preview">
          <div class="heatmap-container">
            <div
              v-for="level in 5"
              :key="level"
              class="heatmap-cell"
              :style="{ background: `var(--heat-${level - 1})` }"
            >
              {{ level - 1 }}
            </div>
          </div>
        </div>
      </section>

      <!-- Spacing -->
      <section id="spacing" class="ds-section">
        <h2>📏 Espaçamento</h2>
        <p>Sistema de espaçamento baseado em múltiplos de 4px</p>

        <div class="spacing-demo">
          <div
            v-for="space in spacingScale"
            :key="space.name"
            class="spacing-box"
            :style="{ width: space.value, height: '40px' }"
          >
            {{ space.label }}
          </div>
        </div>

        <h3>Border Radius</h3>
        <div class="radius-grid">
          <div
            v-for="radius in radiusScale"
            :key="radius.name"
            class="radius-card"
          >
            <div
              class="radius-swatch"
              :style="{ borderRadius: radius.value }"
            ></div>
            <h4>{{ radius.name }}</h4>
            <code>{{ radius.variable }}</code>
          </div>
        </div>
      </section>

      <!-- Icons -->
      <section id="icons" class="ds-section">
        <h2>🎯 Ícones</h2>
        <p>Ícones SVG com stroke de 2px, minimalistas e consistentes</p>

        <div class="icon-grid">
          <div v-for="icon in icons" :key="icon.name" class="icon-example">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                :d="icon.path"
              />
            </svg>
            <span>{{ icon.name }}</span>
          </div>
        </div>
      </section>
    </div>

    <footer class="ds-footer">
      <div class="container">
        <p>HabitsRats Design System • 2026</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DesignSystemView',

  data() {
    return {
      backgrounds: [
        { name: 'Primary', variable: '--bg-primary', hex: '#0D0D0D' },
        { name: 'Secondary', variable: '--bg-secondary', hex: '#1A1A1A' },
        { name: 'Tertiary', variable: '--bg-tertiary', hex: '#242424' },
        { name: 'Elevated', variable: '--bg-elevated', hex: '#2D2D2D' },
      ],

      textColors: [
        { name: 'Primary', variable: '--text-primary', hex: '#FFFFFF' },
        { name: 'Secondary', variable: '--text-secondary', hex: '#8B949E' },
        { name: 'Muted', variable: '--text-muted', hex: '#484F58' },
      ],

      brandColors: [
        { name: 'Green', variable: '--green', hex: '#39D353' },
        { name: 'Teal', variable: '--teal', hex: '#00D2D3' },
        { name: 'Blue', variable: '--blue', hex: '#54A0FF' },
        { name: 'Purple', variable: '--purple', hex: '#A855F7' },
        { name: 'Pink', variable: '--pink', hex: '#FF6B9D' },
        { name: 'Red', variable: '--red', hex: '#FF6B6B' },
        { name: 'Orange', variable: '--orange', hex: '#FF9F43' },
        { name: 'Yellow', variable: '--yellow', hex: '#FECA57' },
      ],

      heatmapColors: [
        { name: 'Level 0', variable: '--heat-0', hex: '#161B22' },
        { name: 'Level 1', variable: '--heat-1', hex: '#0E4429' },
        { name: 'Level 2', variable: '--heat-2', hex: '#006D32' },
        { name: 'Level 3', variable: '--heat-3', hex: '#26A641' },
        { name: 'Level 4', variable: '--heat-4', hex: '#39D353' },
      ],

      typographyScale: [
        {
          name: 'display-1',
          label: 'Display 1 - 64px / Bold',
          className: 'display-1',
          text: 'Transforme hábitos em progresso',
        },
        {
          name: 'display-2',
          label: 'Display 2 - 48px / Bold',
          className: 'display-2',
          text: 'Construa consistência diária',
        },
        {
          name: 'heading-1',
          label: 'Heading 1 - 32px / Bold',
          className: 'heading-1',
          text: 'Rastreie seus hábitos visualmente',
        },
        {
          name: 'heading-2',
          label: 'Heading 2 - 24px / SemiBold',
          className: 'heading-2',
          text: 'Ganhe XP e suba de nível',
        },
        {
          name: 'heading-3',
          label: 'Heading 3 - 20px / SemiBold',
          className: 'heading-3',
          text: 'Mantenha suas streaks vivas',
        },
        {
          name: 'body-large',
          label: 'Body Large - 18px / Regular',
          className: 'body-large',
          text: 'O HabitsRats ajuda você a construir hábitos duradouros através de gamificação e visualização de progresso.',
        },
        {
          name: 'body-normal',
          label: 'Body Normal - 16px / Regular',
          className: 'body-normal',
          text: 'Acompanhe sua jornada com heatmaps estilo GitHub e ganhe recompensas conforme progride.',
        },
        {
          name: 'body-small',
          label: 'Body Small - 14px / Regular',
          className: 'body-small',
          text: 'Sincronize com Apple Watch e receba lembretes inteligentes.',
        },
        {
          name: 'caption',
          label: 'Caption - 12px / Regular',
          className: 'caption',
          text: 'Disponível na App Store para iOS e watchOS',
        },
      ],

      spacingScale: [
        { name: 'xs', label: '4px - XS', value: '4px' },
        { name: 'sm', label: '8px - SM', value: '8px' },
        { name: 'md', label: '16px - MD', value: '16px' },
        { name: 'lg', label: '24px - LG', value: '24px' },
        { name: 'xl', label: '32px - XL', value: '32px' },
        { name: '2xl', label: '48px - 2XL', value: '48px' },
        { name: '3xl', label: '64px - 3XL', value: '64px' },
      ],

      radiusScale: [
        { name: 'Small', variable: '--radius-sm: 6px', value: '6px' },
        { name: 'Medium', variable: '--radius-md: 12px', value: '12px' },
        { name: 'Large', variable: '--radius-lg: 20px', value: '20px' },
        { name: 'Extra Large', variable: '--radius-xl: 32px', value: '32px' },
      ],

      icons: [
        { name: 'Check', path: 'M5 13l4 4L19 7' },
        { name: 'Close', path: 'M6 18L18 6M6 6l12 12' },
        { name: 'Plus', path: 'M12 4v16m8-8H4' },
        {
          name: 'More',
          path: 'M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        { name: 'Streak', path: 'M13 10V3L4 14h7v7l9-11h-7z' },
        {
          name: 'Star',
          path: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
        },
        { name: 'Time', path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
        {
          name: 'Chart',
          path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        },
      ],
    };
  },

  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
  },

  components: {
    ColorCard: {
      props: ['name', 'variable', 'hex'],
      template: `
        <div class="color-card">
          <div class="color-swatch" :style="{ background: hex }"></div>
          <h4>{{ name }}</h4>
          <code>{{ variable }}</code>
          <code>{{ hex }}</code>
        </div>
      `,
    },

    TypographyExample: {
      props: ['label', 'className', 'text'],
      template: `
        <div class="typo-example">
          <div class="label">{{ label }}</div>
          <div :class="className">{{ text }}</div>
        </div>
      `,
    },
  },
};
</script>

<style scoped>
/* Import the same styles from design-system.html */
/* This component uses the global styles defined in styles.css */

.design-system {
  min-height: 100vh;
}

.ds-header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--bg-tertiary);
  padding: 24px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(26, 26, 26, 0.8);
}

.ds-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ds-header h1 {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--green), var(--teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ds-header nav ul {
  display: flex;
  gap: 24px;
  list-style: none;
}

.ds-header nav a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
  cursor: pointer;
}

.ds-header nav a:hover {
  color: var(--text-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.ds-section {
  margin-bottom: 64px;
}

.ds-section h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
}

.ds-section h3 {
  font-size: 24px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 16px;
}

.ds-section p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.color-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: 24px;
  border: 1px solid var(--bg-tertiary);
}

.color-swatch {
  height: 80px;
  border-radius: var(--radius-sm);
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.color-card h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.color-card code {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 4px;
}

.component-preview {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  padding: 48px;
  margin-bottom: 24px;
  border: 1px solid var(--bg-tertiary);
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}

.preview-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
}

.heatmap-container {
  display: flex;
  gap: 8px;
}

.heatmap-cell {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.spacing-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.spacing-box {
  background: var(--green);
  color: var(--bg-primary);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
}

.radius-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
}

.radius-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: 24px;
  border: 1px solid var(--bg-tertiary);
}

.radius-swatch {
  height: 80px;
  background: var(--green);
  margin-bottom: 16px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 24px;
}

.icon-example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  border: 1px solid var(--bg-tertiary);
}

.icon-example svg {
  width: 32px;
  height: 32px;
  stroke: var(--text-primary);
}

.icon-example span {
  font-size: 12px;
  color: var(--text-muted);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.badge-success .badge-dot {
  background: var(--green);
}

.badge-warning .badge-dot {
  background: var(--yellow);
}

.badge-error .badge-dot {
  background: var(--red);
}

.badge-info .badge-dot {
  background: var(--blue);
}

.typo-example {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: 24px;
  margin-bottom: 16px;
  border: 1px solid var(--bg-tertiary);
}

.typo-example .label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.code-block {
  background: var(--bg-tertiary);
  border: 1px solid var(--bg-elevated);
  border-radius: var(--radius-sm);
  padding: 16px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--green);
  margin-bottom: 16px;
}

.ds-footer {
  background: var(--bg-secondary);
  padding: 48px 0;
  text-align: center;
  border-top: 1px solid var(--bg-tertiary);
  margin-top: 64px;
}

.ds-footer p {
  color: var(--text-muted);
  font-size: 14px;
}
</style>
