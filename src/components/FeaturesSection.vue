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
        <div class="feature-icon">
          <component :is="feature.icon" :size="32" :stroke-width="1.5" />
        </div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  LayoutGrid, 
  Gamepad2, 
  Flame, 
  Watch, 
  EyeOff, 
  BrainCircuit 
} from 'lucide-vue-next';

const features = [
  {
    icon: LayoutGrid,
    title: 'Heatmap Visual',
    desc: 'Visualize seu progresso com heatmaps estilo GitHub. Cada célula representa um dia — quanto mais verde, maior sua consistência.',
    accent: 'green',
  },
  {
    icon: Gamepad2,
    title: 'Gamificação',
    desc: 'Ganhe XP por cada hábito completado, suba de nível e desbloqueie badges exclusivas. Transforme disciplina em diversão.',
    accent: 'purple',
  },
  {
    icon: Flame,
    title: 'Streaks',
    desc: 'Construa sequências de dias consecutivos. O sistema celebra seu progresso e te motiva a não quebrar a corrente.',
    accent: 'orange',
  },
  {
    icon: Watch,
    title: 'Apple Watch',
    desc: 'Check-in rápido direto do pulso. Complicações personalizadas mostram seu progresso diário a qualquer momento.',
    accent: 'blue',
  },
  {
    icon: EyeOff,
    title: 'Modo Discreto',
    desc: 'Hábitos sensíveis? Ative o modo discreto para esconder nomes e usar ícones genéricos. Sua privacidade importa.',
    accent: 'teal',
  },
  {
    icon: BrainCircuit,
    title: 'Apple Intelligence',
    desc: 'Insights inteligentes sobre seus padrões de hábitos. Sugestões personalizadas e resumos automáticos powered by Apple Intelligence.',
    accent: 'blue',
  },
];
</script>
