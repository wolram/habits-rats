<template>
  <section class="watch-section" id="watch">
    <div class="watch-container">
      <div class="watch-visual fade-in">
        <div class="watch-mockup">
          <div class="watch-screen">
            <div class="watch-time">09:41</div>
            <div class="watch-habits">
              <div
                v-for="habit in watchHabits"
                :key="habit.name"
                class="watch-habit"
              >
                <span class="watch-habit-icon">
                  <component :is="habit.icon" :size="20" />
                </span>
                <span class="watch-habit-name">{{ habit.name }}</span>
                <span
                  class="watch-habit-check"
                  :style="
                    habit.done
                      ? {
                          background: 'var(--brand-green)',
                          color: 'var(--bg-primary)',
                        }
                      : { border: '1px solid var(--bg-tertiary)' }
                  "
                >
                  <span v-if="habit.done">✓</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="watch-content">
        <div class="section-header fade-in" style="text-align: left; margin: 0">
          <div class="section-label">⌚ Apple Watch</div>
          <h2 class="section-title">Check-in rápido direto do pulso</h2>
          <p class="section-desc">
            Não precisa pegar o celular. Complete seus hábitos em segundos
            diretamente do Apple Watch.
          </p>
        </div>

        <div class="watch-features fade-in">
          <div
            v-for="feature in watchFeatures"
            :key="feature.title"
            class="watch-feature"
          >
            <div class="watch-feature-icon">
              <component :is="feature.icon" :size="24" />
            </div>
            <div>
              <h4 class="watch-feature-title">{{ feature.title }}</h4>
              <p class="watch-feature-desc">{{ feature.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  Dumbbell, 
  Droplets, 
  BookOpen, 
  Flower2, 
  Zap, 
  CircleGauge, 
  Heart 
} from 'lucide-vue-next';

const watchHabits = [
  { icon: Dumbbell, name: 'Treino', done: true },
  { icon: Droplets, name: 'Água', done: true },
  { icon: BookOpen, name: 'Leitura', done: false },
  { icon: Flower2, name: 'Meditação', done: false },
];

const watchFeatures = [
  {
    icon: Zap,
    title: 'Check-in com 1 toque',
    desc: 'Marque hábitos como feitos instantaneamente. Sem fricção, sem desculpas.',
  },
  {
    icon: CircleGauge,
    title: 'Complicações',
    desc: 'Veja seu streak atual e hábitos pendentes direto no mostrador do relógio.',
  },
  {
    icon: Heart,
    title: 'HealthKit',
    desc: 'Sincronize automaticamente passos, sono e exercícios do Apple Health.',
  },
];
</script>

<style scoped>
/* ============================================
   WATCH SECTION
============================================ */
.watch-section {
  padding: 100px 40px;
  position: relative;
  overflow: hidden;
}

.watch-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.watch-mockup {
  width: 300px;
  height: 360px;
  background: var(--bg-tertiary);
  border-radius: 64px;
  padding: 16px;
  position: relative;
  box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  margin: 0 auto;
}

.watch-mockup::before {
  content: '';
  position: absolute;
  right: -10px;
  top: 80px;
  width: 8px;
  height: 48px;
  background: var(--bg-elevated);
  border-radius: 4px;
}

.watch-screen {
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  border-radius: 48px;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.watch-time {
  font-size: 48px;
  font-weight: 700;
  font-family: var(--font-mono);
  text-align: center;
  margin-bottom: 20px;
}

.watch-habits {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.watch-habit {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
}

.watch-habit-icon {
  font-size: 20px;
  display: flex;
  align-items: center;
}

.watch-habit-name {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
}

.watch-habit-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.watch-features {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
}

.watch-feature {
  display: flex;
  gap: 20px;
}

.watch-feature-icon {
  width: 56px;
  height: 56px;
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--brand-blue);
  flex-shrink: 0;
}

.watch-feature-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.watch-feature-desc {
  font-size: 15px;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .watch-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .watch-mockup {
    order: -1;
  }
}

@media (max-width: 768px) {
  .watch-section {
    padding: 80px 20px;
  }
}
</style>