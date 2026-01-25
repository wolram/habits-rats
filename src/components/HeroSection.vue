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
        </div>
      </div>

      <div class="hero-visual">
        <div class="phone-mockup">
          <div class="phone-frame">
            <div class="phone-screen">
              <div class="carousel-container">
                <transition-group name="fade">
                  <div
                    v-for="(image, index) in screenshots"
                    :key="image"
                    v-show="currentImageIndex === index"
                    class="carousel-slide"
                  >
                    <img :src="image" :alt="`Screenshot ${index + 1}`" />
                  </div>
                </transition-group>
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import confetti from 'canvas-confetti';
import streakBadgeUrl from '../assets/brand/badges/streak_100-gold-yellow.png';
import levelBadgeUrl from '../assets/brand/badges/level_up-gold-red.png';

// Importando screenshots renomeadas
import screen1 from '../assets/screenshots/screen-1.png';
import screen2 from '../assets/screenshots/screen-2.png';
import screen3 from '../assets/screenshots/screen-3.png';
import screen4 from '../assets/screenshots/screen-4.png';
import screen5 from '../assets/screenshots/screen-5.png';

const screenshots = [screen1, screen2, screen3, screen4, screen5];
const currentImageIndex = ref(0);
let carouselInterval;

onMounted(() => {
  carouselInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % screenshots.length;
  }, 4000); // Troca a cada 4 segundos
});

onBeforeUnmount(() => {
  clearInterval(carouselInterval);
});

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
</script>

<style scoped>
/* Ajustes para o Carousel */
.phone-screen {
  position: relative;
  width: 100%;
  background: #000;
  display: flex; /* Remove espaços brancos extras */
}

.carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Transição de Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>