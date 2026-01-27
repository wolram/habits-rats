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
import screen1 from '../assets/screenshots/screen-1.jpg';
import screen2 from '../assets/screenshots/screen-2.jpg';
import screen3 from '../assets/screenshots/screen-3.jpg';
import screen4 from '../assets/screenshots/screen-4.jpg';
import screen5 from '../assets/screenshots/screen-5.jpg';

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
/* ============================================
   HERO SECTION
============================================ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 160px 40px 80px;
  position: relative;
  overflow: hidden;
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(57, 211, 83, 0.1);
  border: 1px solid rgba(57, 211, 83, 0.2);
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 500;
  color: var(--brand-green);
  margin-bottom: 32px;
  animation: fadeInUp 0.6s ease;
}

.hero-badge .dot {
  width: 8px;
  height: 8px;
  background: var(--brand-green);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero h1 {
  font-size: clamp(48px, 6vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  animation: fadeInUp 0.6s ease 0.1s both;
  color: var(--text-primary);
}

.hero h1 .highlight {
  color: var(--brand-green);
}

.hero p {
  font-size: 20px;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 540px;
  line-height: 1.6;
  animation: fadeInUp 0.6s ease 0.2s both;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
  animation: fadeInUp 0.6s ease 0.3s both;
}

.store-badge {
  height: 48px;
  transition: transform 0.3s;
}

.store-badge:hover {
  transform: translateY(-2px);
}

.hero-stats {
  display: flex;
  gap: 48px;
  animation: fadeInUp 0.6s ease 0.4s both;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
}

/* Hero Visual & Phone */
.hero-visual {
  position: relative;
  animation: fadeInUp 0.8s ease 0.3s both;
}

.phone-mockup {
  position: relative;
  max-width: 380px;
  margin: 0 auto;
  transform: rotate(-2deg);
  animation: phoneFloat 6s ease-in-out infinite;
}

@keyframes phoneFloat {
  0%, 100% { transform: rotate(-2deg) translateY(0); }
  50% { transform: rotate(-2deg) translateY(-20px); }
}

.phone-frame {
  background: var(--bg-primary);
  padding: 12px;
  border: 1px solid var(--bg-tertiary);
  border-radius: 48px;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Floating Badges */
.floating-badge {
  position: absolute;
  background: var(--bg-primary);
  border: 1px solid var(--bg-tertiary);
  padding: 16px 20px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: var(--shadow-brutal);
  animation: float 4s ease-in-out infinite;
}

.floating-badge-1 {
  top: 10%;
  right: -30px;
  border-color: var(--yellow);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 0 20px var(--yellow-glow);
  transform: rotate(4deg);
}

.floating-badge-2 {
  bottom: 20%;
  left: -50px;
  border-color: var(--pink);
  box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 0 20px var(--pink-glow);
  animation-delay: 2s;
  transform: rotate(-6deg);
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(var(--rotate, 0deg)); }
  50% { transform: translateY(-15px) rotate(var(--rotate, 0deg)); }
}

.floating-badge-1 { --rotate: 4deg; }
.floating-badge-2 { --rotate: -6deg; }

.badge-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.badge-text {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

.badge-sub {
  font-size: 12px;
  color: var(--text-secondary);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Ajustes para o Carousel */
.phone-screen {
  position: relative;
  width: 100%;
  background: #000;
  display: flex; /* Remove espaços brancos extras */
  overflow: hidden;
  aspect-ratio: 9/19.5;
  border-radius: 36px;
  border: 1px solid var(--bg-tertiary);
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

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-visual {
    order: -1;
  }

  .floating-badge {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 20px 60px;
  }
}
</style>