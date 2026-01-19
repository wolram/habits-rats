<template>
  <section class="features" id="features">
    <div class="section-header fade-in">
      <div class="section-label">✨ Recursos</div>
      <h2 class="section-title">
        Tudo que você precisa para criar consistência
      </h2>
      <p class="section-desc">
        Ferramentas poderosas para rastrear, visualizar e gamificar seus hábitos
        diários.
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
</template>

<script setup>
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
</script>
