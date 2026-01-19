<template>
  <section class="hero" id="home">
    <div class="hero-container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="dot"></span>
          Novo: Integração com Apple Watch e Apple Intelligence
        </div>

        <h1>
          Transforme hábitos em
          <span class="highlight">progresso visível</span>
        </h1>

        <p>
          Rastreie seus hábitos com o visual de heatmap estilo GitHub. Ganhe XP,
          suba de nível e construa streaks que você vai querer manter.
        </p>

                            <div class="hero-actions">
                              <a
                                href="https://apps.apple.com/br/app/habitrats/id1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                @click="triggerConfetti"
                              >
                                <img
                                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                  alt="Download na App Store"
                                  class="store-badge"
                                />
                              </a>
                            </div>                </div>
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
                  <div
                    v-for="habit in heroHabits"
                    :key="habit.name"
                    class="habit-item"
                  >
                    <div
                      class="habit-icon"
                      :style="{ background: habit.background }"
                    >
                      {{ habit.icon }}
                    </div>
                    <div class="habit-info">
                      <div class="habit-name">{{ habit.name }}</div>
                      <div class="habit-streak">{{ habit.streak }}</div>
                    </div>
                    <div
                      class="habit-check"
                      :class="{ done: habit.done, pending: !habit.done }"
                    >
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
          <img class="badge-icon" :src="levelBadgeUrl" alt="Level up badge" />
          <div>
            <div class="badge-text">Level Up!</div>
            <div class="badge-sub">+250 XP</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import confetti from 'canvas-confetti';
import streakBadgeUrl from '../assets/brand/badges/streak_100-gold-yellow.png';
import levelBadgeUrl from '../assets/brand/badges/level_up-gold-red.png';

const heroHabits = [
  {
    icon: '💪',
    name: 'Treino',
    streak: '🔥 23 dias',
    background: 'rgba(255, 107, 107, 0.2)',
    done: true,
  },
  {
    icon: '💧',
    name: 'Água',
    streak: '🔥 47 dias',
    background: 'rgba(84, 160, 255, 0.2)',
    done: true,
  },
  {
    icon: '📖',
    name: 'Leitura',
    streak: '🔥 15 dias',
    background: 'rgba(168, 85, 247, 0.2)',
    done: false,
  },
];

const colorSchemes = {
  green: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
};

function triggerConfetti() {
  const end = Date.now() + 1000;
  const colors = ['#39D353', '#00D2D3', '#54A0FF', '#A855F7', '#FF6B9D', '#FF6B6B', '#FF9F43', '#FECA57'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

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

const heroHeatmapData = ref(generateHeatmapData(5, 12));
</script>
