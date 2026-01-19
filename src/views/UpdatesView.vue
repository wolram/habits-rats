<template>
  <div class="updates-page">
    <div class="bg-grid"></div>
    <AppNavigation />

    <main class="container">
      <header class="updates-header fade-in">
        <div class="section-label">🚀 Changelog</div>
        <h1>Atualizações & Novidades</h1>
        <p>Acompanhe a evolução do Habits Rats. Estamos apenas começando.</p>
      </header>

      <div class="timeline">
        <!-- v1.0 Launch -->
        <div class="timeline-item fade-in">
          <div class="timeline-marker">
            <div class="version-badge">v1.0</div>
          </div>
          <div class="timeline-content">
            <span class="release-date">19 de Janeiro de 2026</span>
            <h2>Lançamento Oficial 🚀</h2>
            <p>
              Hoje marca o início da nossa jornada. O Habits Rats v1.0 chega à App Store com a missão de transformar a construção de hábitos em algo visível e gratificante.
            </p>
            
            <h3>Principais Recursos:</h3>
            <ul>
              <li><strong>Heatmap Visual:</strong> Visualize sua consistência com nosso gráfico de contribuições exclusivo.</li>
              <li><strong>Integração Apple Health:</strong> Seus dados de saúde (passos, sono, treino) importados automaticamente.</li>
              <li><strong>App para Apple Watch:</strong> Faça check-in dos seus hábitos direto do pulso.</li>
              <li><strong>Sistema de Gamificação:</strong> Ganhe XP, suba de nível e desbloqueie badges.</li>
              <li><strong>Modo Discreto:</strong> Proteja sua privacidade ocultando nomes de hábitos sensíveis.</li>
            </ul>

            <div class="release-cta">
              <a href="https://apps.apple.com/br/app/habitrats/id1234567890" class="btn btn-primary btn-sm">
                Baixar v1.0
              </a>
            </div>
          </div>
        </div>
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
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    });
    elements.forEach(el => observer.observe(el));
  }, 100);
});
</script>

<style scoped>
.updates-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  flex: 1;
}

.updates-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--green);
  margin-bottom: 16px;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
}

p {
  font-size: 18px;
  color: var(--text-secondary);
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 19px; /* Centralizar com o badge */
  width: 2px;
  background: var(--bg-tertiary);
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
}

.timeline-marker {
  position: absolute;
  left: -40px;
  top: 0;
  width: 40px;
  display: flex;
  justify-content: center;
}

.version-badge {
  background: var(--green);
  color: var(--bg-primary);
  font-weight: 700;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  position: relative;
  z-index: 2;
}

.timeline-content {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 20px;
  padding: 32px;
}

.release-date {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 8px;
}

.timeline-content h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.timeline-content p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.timeline-content ul {
  list-style: none;
  margin-bottom: 32px;
}

.timeline-content li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  font-size: 15px;
  color: var(--text-secondary);
}

.timeline-content li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: bold;
}

.timeline-content strong {
  color: var(--text-primary);
}
</style>
