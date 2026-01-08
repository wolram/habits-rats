<template>
  <div>
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>
    <div class="bg-glow bg-glow-3"></div>

    <nav>
      <a href="#home" class="logo">
        <img
          class="logo-image"
          :src="logoUrl"
          alt="HabitRats"
        />
      </a>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>

      <div class="nav-cta">
        <a href="https://app.habitrats.com/login" class="btn btn-secondary">Entrar</a>
        <a href="https://apps.apple.com/br/app/habitrats/id1234567890" class="btn btn-primary">Baixar App</a>
      </div>
    </nav>

    <section class="hero" id="home">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="dot"></span>
            Novo: Integração com Apple Watch e Apple Intelligence
          </div>

          <h1>
            Transforme hábitos em <span class="highlight">progresso visível</span>
          </h1>

          <p>
            Rastreie seus hábitos com o visual de heatmap estilo GitHub.
            Ganhe XP, suba de nível e construa streaks que você vai querer manter.
          </p>

          <div class="hero-actions">
            <a href="https://apps.apple.com/br/app/habitrats/id1234567890" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download na App Store"
                class="store-badge"
              />
            </a>
          </div>

          <div class="hero-stats">
            <div v-for="stat in heroStats" :key="stat.label" class="stat">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="phone-mockup">
            <div class="phone-frame">
              <div class="phone-screen">
                <div class="screen-content">
                  <div class="screen-header">
                    <span class="screen-title">Hoje</span>
                    <div class="screen-avatar"></div>
                  </div>

                  <div class="streak-card">
                    <div class="streak-label">Streak atual</div>
                    <div class="streak-value">47 <span>dias</span></div>
                  </div>

                  <div class="heatmap-container">
                    <div class="heatmap-label">Últimas 12 semanas</div>
                    <div class="heatmap">
                      <div
                        v-for="(level, index) in heroHeatmapData"
                        :key="`hero-${index}`"
                        class="heatmap-cell"
                        :style="{
                          backgroundColor: colorSchemes.green[level],
                          animationDelay: `${index * 10}ms`,
                        }"
                      ></div>
                    </div>
                  </div>

                  <div class="habit-list">
                    <div v-for="habit in heroHabits" :key="habit.name" class="habit-item">
                      <div class="habit-icon" :style="{ background: habit.background }">
                        {{ habit.icon }}
                      </div>
                      <div class="habit-info">
                        <div class="habit-name">{{ habit.name }}</div>
                        <div class="habit-streak">{{ habit.streak }}</div>
                      </div>
                      <div class="habit-check" :class="{ done: habit.done, pending: !habit.done }">
                        <span v-if="habit.done">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="floating-badge floating-badge-1">
            <img
              class="badge-icon"
              :src="streakBadgeUrl"
              alt="Streak 100 badge"
            />
            <div>
              <div class="badge-text">Streak 100</div>
              <div class="badge-sub">Gold Badge Unlocked</div>
            </div>
          </div>

          <div class="floating-badge floating-badge-2">
            <img
              class="badge-icon"
              :src="levelBadgeUrl"
              alt="Level up badge"
            />
            <div>
              <div class="badge-text">Level Up!</div>
              <div class="badge-sub">+250 XP</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features" id="features">
      <div class="section-header fade-in">
        <div class="section-label">✨ Recursos</div>
        <h2 class="section-title">Tudo que você precisa para criar consistência</h2>
        <p class="section-desc">
          Ferramentas poderosas para rastrear, visualizar e gamificar seus hábitos diários.
        </p>
      </div>

      <div class="features-grid">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card fade-in"
          :style="{ '--card-accent': `var(--${feature.accent})` }"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
        </div>
      </div>
    </section>

    <section class="heatmap-section" id="heatmap">
      <div class="heatmap-showcase">
        <div class="section-header" style="text-align: left; margin: 0;">
          <div class="section-label">📊 Visualização</div>
          <h2 class="section-title">Seu progresso, visível em cada célula</h2>
          <p class="section-desc">
            Inspirado no gráfico de contribuições do GitHub, nosso heatmap transforma dados em motivação.
            Cada cor representa um hábito a ser medido — seja para melhorar (improvement) ou monitorar excessos.
          </p>

          <div style="margin-top: 40px;">
            <h4 style="font-size: 14px; color: var(--text-muted); margin-bottom: 16px;">COMO FUNCIONA</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 16px;">
              <li
                v-for="item in heatmapBullets"
                :key="item"
                style="display: flex; align-items: center; gap: 12px;"
              >
                <span style="color: var(--green);">✓</span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="heatmap-demo fade-in">
          <div class="heatmap-demo-header">
            <span class="heatmap-demo-title">Escolha sua cor</span>
            <div class="color-picker" role="group" aria-label="Selecionador de cores do heatmap">
              <button
                v-for="option in colorPickerOptions"
                :key="option.key"
                class="color-dot"
                :class="{ active: currentColor === option.key }"
                :style="{ background: `var(--${option.key})` }"
                :aria-label="`Cor ${option.key}`"
                :aria-pressed="currentColor === option.key"
                @click="setColor(option.key)"
                @keydown.enter="setColor(option.key)"
                @keydown.space.prevent="setColor(option.key)"
                type="button"
              ></button>
            </div>
          </div>

          <div class="heatmap-large">
            <div
              v-for="(level, index) in demoHeatmapData"
              :key="`demo-${index}`"
              class="heatmap-cell"
              :style="{
                backgroundColor: activeScheme[level],
                animationDelay: `${index * 6}ms`,
              }"
            ></div>
          </div>

          <div class="heatmap-legend">
            <span class="legend-label">Menos</span>
            <div class="legend-colors">
              <div
                v-for="(color, index) in legendColors"
                :key="`legend-${index}`"
                class="legend-color"
                :style="{ backgroundColor: color }"
              ></div>
            </div>
            <span class="legend-label">Mais</span>
          </div>
        </div>
      </div>
    </section>

    <section class="colors-section">
      <div class="section-header fade-in">
        <div class="section-label">🌈 Personalização</div>
        <h2 class="section-title">8 cores para expressar sua personalidade</h2>
        <p class="section-desc">
          Cada hábito pode ter sua própria cor. Crie categorias visuais ou simplesmente escolha o que te faz feliz.
        </p>
      </div>

      <div class="colors-grid">
        <div
          v-for="color in colorCards"
          :key="color.key"
          class="color-card fade-in"
          :style="{ '--card-color': `var(--${color.key})` }"
        >
          <div class="color-preview" :style="{ background: `var(--${color.key})` }"></div>
          <div class="color-name">{{ color.name }}</div>
          <div class="color-hex">{{ color.hex }}</div>
        </div>
      </div>
    </section>

    <section class="watch-section" id="watch">
      <div class="watch-container">
        <div class="watch-visual fade-in">
          <div class="watch-mockup">
            <div class="watch-screen">
              <div class="watch-time">09:41</div>
              <div class="watch-habits">
                <div v-for="habit in watchHabits" :key="habit.name" class="watch-habit">
                  <span class="watch-habit-icon">{{ habit.icon }}</span>
                  <span class="watch-habit-name">{{ habit.name }}</span>
                  <span
                    class="watch-habit-check"
                    :style="habit.done
                      ? { background: 'var(--green)', color: 'var(--bg-primary)' }
                      : { border: '2px solid var(--bg-tertiary)' }"
                  >
                    <span v-if="habit.done">✓</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="watch-content">
          <div class="section-header fade-in" style="text-align: left; margin: 0;">
            <div class="section-label">⌚ Apple Watch</div>
            <h2 class="section-title">Check-in rápido direto do pulso</h2>
            <p class="section-desc">
              Não precisa pegar o celular. Complete seus hábitos em segundos diretamente do Apple Watch.
            </p>
          </div>

          <div class="watch-features fade-in">
            <div v-for="feature in watchFeatures" :key="feature.title" class="watch-feature">
              <div class="watch-feature-icon">{{ feature.icon }}</div>
              <div>
                <h4 class="watch-feature-title">{{ feature.title }}</h4>
                <p class="watch-feature-desc">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing" id="pricing">
      <div class="section-header fade-in">
        <div class="section-label">💰 Preços</div>
        <h2 class="section-title">Simples e transparente</h2>
        <p class="section-desc">Comece grátis, upgrade quando quiser. Trial de 7 dias nos planos pagos.</p>
      </div>

      <div class="pricing-grid pricing-grid-4">
        <div
          v-for="tier in pricingTiers"
          :key="tier.name"
          class="pricing-card fade-in"
          :class="{ featured: tier.featured }"
        >
          <div v-if="tier.badge" class="pricing-badge">{{ tier.badge }}</div>
          <h3 class="pricing-name">{{ tier.name }}</h3>
          <p class="pricing-desc">{{ tier.desc }}</p>

          <div class="pricing-price">
            <span class="price-currency">R$</span>
            <span class="price-value">{{ tier.price }}</span>
            <span class="price-period">{{ tier.period }}</span>
          </div>

          <div v-if="tier.trial" class="pricing-trial">
            <span class="trial-badge">{{ tier.trial }}</span>
          </div>

          <ul class="pricing-features">
            <li v-for="feature in tier.features" :key="feature">
              <span class="check-icon">✓</span>
              {{ feature }}
            </li>
          </ul>

          <a href="https://apps.apple.com/br/app/habitrats/id1234567890" class="btn" :class="tier.ctaClass" style="width: 100%; justify-content: center;">
            {{ tier.ctaLabel }}
          </a>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta-container fade-in">
        <h2>Comece sua jornada hoje</h2>
        <p>Junte-se a mais de 50.000 pessoas construindo hábitos melhores com HabitRats.</p>

        <div class="cta-buttons">
          <a href="https://apps.apple.com/br/app/habitrats/id1234567890" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
              />
            </svg>
            Download para iOS
          </a>
          <a href="#pricing" class="btn btn-secondary">Saiba mais</a>
        </div>
      </div>
    </section>

    <section class="blog" id="blog">
      <div class="section-header fade-in">
        <div class="section-label">📝 Blog</div>
        <h2 class="section-title">Ideias, ciência e estratégias para hábitos duradouros</h2>
        <p class="section-desc">
          Conteúdo prático para transformar intenção em ação, com foco em consistência.
        </p>
      </div>

      <div class="blog-grid">
        <article v-for="post in blogPosts" :key="post.title" class="blog-card fade-in">
          <div class="blog-card-top">
            <span class="blog-tag" :style="{ background: `var(--${post.accent})` }">
              {{ post.tag }}
            </span>
            <span class="blog-date">{{ post.date }}</span>
          </div>
          <h3 class="blog-title">{{ post.title }}</h3>
          <p class="blog-excerpt">{{ post.excerpt }}</p>
          <a class="blog-link" :href="`https://blog.habitrats.com/${post.slug || 'artigo'}`">
            Ler artigo
            <span aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>

    <footer>
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <a href="#" class="logo">
              <img
                class="logo-image"
                :src="logoUrl"
                alt="HabitRats"
              />
            </a>
            <p>Transforme consistência em progresso visível. Rastreie hábitos, ganhe XP e evolua todo dia.</p>
          </div>

          <div v-for="column in footerColumns" :key="column.title" class="footer-column">
            <h4>{{ column.title }}</h4>
            <ul>
              <li v-for="link in column.links" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span class="footer-copy">© 2025 HabitRats. Todos os direitos reservados.</span>

          <div class="footer-social">
            <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label">
              {{ social.icon }}
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import logoUrl from './assets/brand/full-logo-rainbow-dark.png';
import streakBadgeUrl from './assets/brand/badges/streak_100-gold-yellow.png';
import levelBadgeUrl from './assets/brand/badges/level_up-gold-red.png';

const navLinks = [
  { href: '#features', label: 'Recursos' },
  { href: '#heatmap', label: 'Heatmap' },
  { href: '#watch', label: 'Apple Watch' },
  { href: '#pricing', label: 'Preços' },
  { href: 'https://blog.habitrats.com', label: 'Blog' },
];

const heroStats = [
  { value: '50K+', label: 'Usuários ativos' },
  { value: '2.5M', label: 'Hábitos completados' },
  { value: '4.9', label: 'Avaliação App Store' },
];

const heroHabits = [
  { icon: '💪', name: 'Treino', streak: '🔥 23 dias', background: 'rgba(255, 107, 107, 0.2)', done: true },
  { icon: '💧', name: 'Água', streak: '🔥 47 dias', background: 'rgba(84, 160, 255, 0.2)', done: true },
  { icon: '📖', name: 'Leitura', streak: '🔥 15 dias', background: 'rgba(168, 85, 247, 0.2)', done: false },
];

const features = [
  {
    icon: '📊',
    title: 'Heatmap Visual',
    desc: 'Visualize seu progresso com heatmaps estilo GitHub. Cada célula representa um dia — quanto mais verde, maior sua consistência.',
    accent: 'green',
  },
  {
    icon: '🎮',
    title: 'Gamificação',
    desc: 'Ganhe XP por cada hábito completado, suba de nível e desbloqueie badges exclusivas. Transforme disciplina em diversão.',
    accent: 'purple',
  },
  {
    icon: '🔥',
    title: 'Streaks',
    desc: 'Construa sequências de dias consecutivos. O sistema celebra seu progresso e te motiva a não quebrar a corrente.',
    accent: 'orange',
  },
  {
    icon: '⌚',
    title: 'Apple Watch',
    desc: 'Check-in rápido direto do pulso. Complicações personalizadas mostram seu progresso diário a qualquer momento.',
    accent: 'blue',
  },
  {
    icon: '🎨',
    title: '8 Cores Rainbow',
    desc: 'Personalize cada hábito com sua cor favorita. Do vermelho ao rosa, crie um visual único que combina com você.',
    accent: 'pink',
  },
  {
    icon: '🔒',
    title: 'Modo Discreto',
    desc: 'Hábitos sensíveis? Ative o modo discreto para esconder nomes e usar ícones genéricos. Sua privacidade importa.',
    accent: 'teal',
  },
  {
    icon: '🧠',
    title: 'Apple Intelligence',
    desc: 'Insights inteligentes sobre seus padrões de hábitos. Sugestões personalizadas e resumos automáticos powered by Apple Intelligence.',
    accent: 'blue',
  },
];

const heatmapBullets = [
  'Cada célula = 1 dia',
  '5 níveis de intensidade',
  'Cada cor = 1 hábito',
  'Histórico de até 1 ano',
];

const colorPickerOptions = [
  { key: 'green' },
  { key: 'blue' },
  { key: 'purple' },
  { key: 'pink' },
  { key: 'red' },
  { key: 'orange' },
  { key: 'yellow' },
  { key: 'teal' },
];

const colorCards = [
  { key: 'red', name: 'Vermelho', hex: '#FF6B6B' },
  { key: 'orange', name: 'Laranja', hex: '#FF9F43' },
  { key: 'yellow', name: 'Amarelo', hex: '#FECA57' },
  { key: 'green', name: 'Verde', hex: '#39D353' },
  { key: 'teal', name: 'Turquesa', hex: '#00D2D3' },
  { key: 'blue', name: 'Azul', hex: '#54A0FF' },
  { key: 'purple', name: 'Roxo', hex: '#A855F7' },
  { key: 'pink', name: 'Rosa', hex: '#FF6B9D' },
];

const watchHabits = [
  { icon: '💪', name: 'Treino', done: true },
  { icon: '💧', name: 'Água', done: true },
  { icon: '📖', name: 'Leitura', done: false },
  { icon: '🧘', name: 'Meditação', done: false },
];

const watchFeatures = [
  {
    icon: '⚡',
    title: 'Check-in com 1 toque',
    desc: 'Marque hábitos como feitos instantaneamente. Sem fricção, sem desculpas.',
  },
  {
    icon: '📱',
    title: 'Complicações',
    desc: 'Veja seu streak atual e hábitos pendentes direto no mostrador do relógio.',
  },
  {
    icon: '❤️',
    title: 'HealthKit',
    desc: 'Sincronize automaticamente passos, sono e exercícios do Apple Health.',
  },
];

const pricingTiers = [
  {
    name: 'Gratuito',
    desc: 'Perfeito para começar',
    price: '0',
    period: '/mês',
    badge: null,
    trial: null,
    features: [
      'Até 5 hábitos',
      'Check-ins diários',
      'Calendário básico',
      'Estatísticas simples',
      'HealthKit básico',
      'Badges principais',
    ],
    featured: false,
    ctaLabel: 'Começar Grátis',
    ctaClass: 'btn-secondary',
  },
  {
    name: 'Mensal',
    desc: 'Flexibilidade total',
    price: '9,90',
    period: '/mês',
    badge: null,
    trial: '7 dias grátis',
    features: [
      'Hábitos ilimitados',
      'Análises avançadas',
      'Sincronização na nuvem',
      'Exportar dados (JSON/CSV)',
      'Todas as 8 cores',
      'Widgets premium',
      'Sem anúncios',
      'Suporte prioritário',
    ],
    featured: false,
    ctaLabel: 'Iniciar Trial Grátis',
    ctaClass: 'btn-secondary',
  },
  {
    name: 'Anual',
    desc: 'Melhor custo-benefício',
    price: '59,90',
    period: '/ano',
    badge: 'Economize 50%',
    trial: '7 dias grátis',
    features: [
      'Tudo do plano Mensal',
      'Equivale a R$ 4,99/mês',
      'Hábitos ilimitados',
      'Análises avançadas',
      'Sincronização na nuvem',
      'Exportar dados (JSON/CSV)',
      'Todas as 8 cores',
      'Widgets premium',
    ],
    featured: true,
    ctaLabel: 'Iniciar Trial Grátis',
    ctaClass: 'btn-primary',
  },
  {
    name: 'Vitalício',
    desc: 'Pague uma vez, use para sempre',
    price: '99,90',
    period: ' único',
    badge: 'Melhor valor',
    trial: null,
    features: [
      'Acesso permanente',
      'Todas as features premium',
      'Atualizações futuras incluídas',
      'Hábitos ilimitados',
      'Análises avançadas',
      'Sincronização na nuvem',
      'Exportar dados (JSON/CSV)',
      'Suporte prioritário',
    ],
    featured: false,
    ctaLabel: 'Comprar Agora',
    ctaClass: 'btn-secondary',
  },
];

const blogPosts = [
  {
    tag: 'Consistência',
    title: 'O efeito composto dos micro-hábitos',
    excerpt: 'Como pequenas ações diárias geram mudanças enormes quando você acompanha a evolução.',
    date: '08 Mar 2025',
    accent: 'green-secondary',
    slug: 'efeito-composto-micro-habitos',
  },
  {
    tag: 'Rotina',
    title: '5 formas de manter o streak nos dias difíceis',
    excerpt: 'Estratégias simples para não quebrar a sequência quando a motivação cai.',
    date: '20 Fev 2025',
    accent: 'purple-secondary',
    slug: '5-formas-manter-streak-dias-dificeis',
  },
  {
    tag: 'Ciência',
    title: 'Por que visualizar progresso muda seu cérebro',
    excerpt: 'A psicologia por trás do heatmap e por que ver dados aumenta a adesão.',
    date: '02 Fev 2025',
    accent: 'orange-secondary',
    slug: 'visualizar-progresso-cerebro',
  },
];

const footerColumns = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '#features' },
      { label: 'Preços', href: '#pricing' },
      { label: 'Apple Watch', href: '#watch' },
      { label: 'Atualizações', href: 'https://blog.habitrats.com' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: 'https://habitrats.com/about' },
      { label: 'Blog', href: 'https://blog.habitrats.com' },
      { label: 'Carreiras', href: 'https://habitrats.com/careers' },
      { label: 'Contato', href: 'https://habitrats.com/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: 'https://habitrats.com/privacy' },
      { label: 'Termos', href: 'https://habitrats.com/terms' },
      { label: 'Cookies', href: 'https://habitrats.com/cookies' },
    ],
  },
];

const socialLinks = [
  { label: 'Twitter', icon: '𝕏', href: 'https://twitter.com/habitratsapp' },
  { label: 'Instagram', icon: '📷', href: 'https://instagram.com/habitratsapp' },
  { label: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/habitratsapp' },
];

const colorSchemes = {
  green: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
  blue: ['#1A2233', '#264466', '#336699', '#2E86DE', '#54A0FF'],
  purple: ['#1F1A2E', '#3D2A5C', '#5B3A8A', '#6D28D9', '#A855F7'],
  pink: ['#2D1A22', '#5C2644', '#8B3366', '#BE185D', '#FF6B9D'],
  red: ['#2D1A1A', '#5C2626', '#8B3333', '#CC4444', '#FF6B6B'],
  orange: ['#2D2419', '#5C4526', '#8B6633', '#CC7A2E', '#FF9F43'],
  yellow: ['#2D2A19', '#5C5426', '#8B7E33', '#D4A81E', '#FECA57'],
  teal: ['#192D2D', '#265C5C', '#338B8B', '#01A3A4', '#00D2D3'],
};

const currentColor = ref('green');
const heroHeatmapData = ref(generateHeatmapData(5, 12));
const demoHeatmapData = ref(generateHeatmapData(7, 20));
const activeScheme = computed(() => colorSchemes[currentColor.value]);
const legendColors = computed(() => activeScheme.value);

function generateHeatmapData(rows, cols) {
  const data = [];
  for (let i = 0; i < rows * cols; i += 1) {
    const random = Math.random();
    if (random < 0.15) data.push(0);
    else if (random < 0.35) data.push(1);
    else if (random < 0.55) data.push(2);
    else if (random < 0.8) data.push(3);
    else data.push(4);
  }
  return data;
}

function setColor(colorKey) {
  currentColor.value = colorKey;
  demoHeatmapData.value = generateHeatmapData(7, 20);
}

let observer;

onMounted(() => {
  const elements = document.querySelectorAll('.fade-in');
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((element) => observer.observe(element));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
