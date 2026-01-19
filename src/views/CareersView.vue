<template>
  <div class="careers-page">
    <div class="bg-grid"></div>
    <AppNavigation />

    <main class="container">
      <div class="careers-content fade-in">
        <div class="icon-wrapper">
          <span class="rocket-icon">🚀</span>
        </div>
        <h1>Junte-se à revolução dos hábitos</h1>
        <p class="subtitle">
          Estamos construindo o futuro do desenvolvimento pessoal. Nossas vagas estarão abertas em breve.
        </p>
        
        <div class="status-card">
          <span class="status-dot"></span>
          <p>Atualmente não temos posições abertas.</p>
        </div>

        <p class="follow-us">
          Siga-nos no <a href="https://linkedin.com/company/habitratsapp">LinkedIn</a> para ser o primeiro a saber.
        </p>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AppNavigation from '../components/AppNavigation.vue';
import AppFooter from '../components/AppFooter.vue';

onMounted(() => {
  setTimeout(() => {
    document.querySelector('.careers-content').classList.add('visible');
  }, 100);
});
</script>

<style scoped>
.careers-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
}

.careers-content {
  text-align: center;
  max-width: 600px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.careers-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(57, 211, 83, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
  border: 1px solid rgba(57, 211, 83, 0.2);
}

.rocket-icon {
  font-size: 40px;
}

h1 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

.status-card {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  padding: 16px 24px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--text-muted);
  border-radius: 50%;
}

.status-card p {
  margin: 0;
  font-size: 14px;
  color: var(--text-secondary);
}

.follow-us {
  font-size: 14px;
  color: var(--text-muted);
}

.follow-us a {
  color: var(--green);
  text-decoration: none;
  font-weight: 500;
}

.follow-us a:hover {
  text-decoration: underline;
}
</style>
