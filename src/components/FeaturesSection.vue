<template>
  <section id="features" class="features">
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

<style scoped>
/* ============================================
   FEATURES SECTION
============================================ */
.features {
  padding: 100px 40px;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 64px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--brand-green);
  margin-bottom: 16px;
  padding: 6px 12px;
  background: rgba(57, 211, 83, 0.1);
  border-radius: var(--radius-full);
}

.section-title {
  font-size: clamp(36px, 4.5vw, 48px);
  margin-bottom: 20px;
}

.section-desc {
  font-size: 18px;
  color: var(--text-secondary);
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.feature-card {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--card-accent, var(--brand-green));
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--card-accent, var(--brand-green));
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-icon {
  width: 64px;
  height: 64px;
  background: var(--bg-elevated);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 24px;
  color: var(--card-accent);
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}

.feature-desc {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .features {
    padding: 80px 20px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>