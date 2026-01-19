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
                <span class="watch-habit-icon">{{ habit.icon }}</span>
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
</template>

<script setup>
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
</script>
