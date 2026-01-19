<template>
  <div class="about-page">
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow-1"></div>
    <AppNavigation />

    <main class="container">
      <!-- Hero Section -->
      <section class="about-hero fade-in">
        <div class="hero-content">
          <div class="section-label">👋 Nossa História</div>
          <h1>Mais do que um app. <br><span class="highlight">Um movimento contra a culpa.</span></h1>
          <p class="hero-text">
            A maioria dos apps de hábitos foi feita para robôs, não para humanos. 
            Nós falhamos. Nós esquecemos. E isso não deveria zerar nosso progresso. 
            O Habits Rats nasceu para celebrar a consistência imperfeita.
          </p>
        </div>
      </section>

      <!-- Stats Grid -->
      <section class="stats-section fade-in">
        <div class="stat-card">
          <span class="stat-number">v1.0</span>
          <span class="stat-label">Lançamento Oficial</span>
        </div>
        <div class="stat-card highlight-card">
          <span class="stat-number">100%</span>
          <span class="stat-label">Privacidade Local</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">Apple</span>
          <span class="stat-label">Ecosystem Ready</span>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="mission-section fade-in">
        <div class="mission-grid">
          <div class="mission-text">
            <h2>Por que existimos</h2>
            <p>
              Em um mundo obcecado por produtividade tóxica, escolhemos um caminho diferente.
              Acreditamos que a mudança real vem de pequenas ações repetidas, não de grandes sacrifícios temporários.
            </p>
            <ul class="values-list">
              <li>
                <span class="check-icon">✓</span>
                <strong>Psicologia > Força de Vontade:</strong> Usamos ciência comportamental para tornar hábitos automáticos.
              </li>
              <li>
                <span class="check-icon">✓</span>
                <strong>Dados Invisíveis:</strong> O que é medido é gerenciado. Tornamos seu esforço visível e bonito.
              </li>
              <li>
                <span class="check-icon">✓</span>
                <strong>Você no Controle:</strong> Seus dados, suas regras. Sem anúncios, sem venda de informações.
              </li>
            </ul>
          </div>
          <div class="mission-visual">
            <div class="visual-card">
              <div class="card-icon">🧠</div>
              <h3>Dopamina Ética</h3>
              <p>Usamos o sistema de recompensa do seu cérebro para construir, não para viciar.</p>
            </div>
            <div class="visual-card offset-card">
              <div class="card-icon">📊</div>
              <h3>Clareza Visual</h3>
              <p>Heatmaps que mostram a verdade: você está evoluindo, mesmo nos dias ruins.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team-section fade-in">
        <div class="team-header">
          <h2>Quem somos nós</h2>
          <p>Um time pequeno e apaixonado de biohackers, designers e desenvolvedores construindo a ferramenta que sempre quisemos usar.</p>
        </div>
        
        <div class="team-grid">
          <div class="team-member">
            <div class="avatar-placeholder color-1">Dev</div>
            <h3>Engenharia</h3>
            <p>Obcecados por performance e código limpo.</p>
          </div>
          <div class="team-member">
            <div class="avatar-placeholder color-2">Design</div>
            <h3>Produto</h3>
            <p>Focados na beleza da funcionalidade.</p>
          </div>
          <div class="team-member">
            <div class="avatar-placeholder color-3">Science</div>
            <h3>Comportamento</h3>
            <p>Traduzindo estudos em funcionalidades.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="about-cta fade-in">
        <h2>Faça parte da nossa história</h2>
        <p>Comece hoje a construir a melhor versão de si mesmo.</p>
        <div class="cta-buttons">
          <a href="https://apps.apple.com/br/app/habitrats/id1234567890" class="btn btn-primary">Baixar App</a>
          <router-link to="/careers" class="btn btn-secondary">Trabalhe Conosco</router-link>
        </div>
      </section>
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
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
  }, 100);
});
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  flex: 1;
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hero */
.about-hero {
  text-align: center;
  margin-bottom: 100px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
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
  margin-bottom: 24px;
}

h1 {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 700;
  margin-bottom: 32px;
  line-height: 1.1;
}

.highlight {
  background: linear-gradient(135deg, var(--green), var(--teal));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text {
  font-size: 20px;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
}

/* Stats */
.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 120px;
}

.stat-card {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  padding: 40px 20px;
  border-radius: 24px;
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--text-muted);
}

.highlight-card {
  background: linear-gradient(135deg, rgba(57, 211, 83, 0.1), rgba(0, 210, 211, 0.1));
  border-color: rgba(57, 211, 83, 0.2);
}

.stat-number {
  display: block;
  font-size: 48px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Mission */
.mission-section {
  margin-bottom: 120px;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.mission-text h2 {
  font-size: 40px;
  margin-bottom: 24px;
}

.mission-text p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.values-list {
  list-style: none;
}

.values-list li {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.5;
}

.check-icon {
  color: var(--green);
  font-weight: bold;
}

.values-list strong {
  color: var(--text-primary);
}

.mission-visual {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.visual-card {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  padding: 32px;
  border-radius: 20px;
  width: 80%;
}

.offset-card {
  align-self: flex-end;
  background: var(--bg-elevated);
}

.card-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.visual-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.visual-card p {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

/* Team */
.team-section {
  margin-bottom: 120px;
  text-align: center;
}

.team-header {
  max-width: 600px;
  margin: 0 auto 60px;
}

.team-header h2 {
  font-size: 40px;
  margin-bottom: 16px;
}

.team-header p {
  font-size: 18px;
  color: var(--text-secondary);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.team-member {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  padding: 40px;
  border-radius: 24px;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  border-color: var(--text-muted);
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--bg-primary);
  font-size: 14px;
}

.color-1 { background: var(--purple); }
.color-2 { background: var(--blue); }
.color-3 { background: var(--green); }

.team-member h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.team-member p {
  font-size: 14px;
  color: var(--text-secondary);
}

/* CTA */
.about-cta {
  text-align: center;
  padding: 80px;
  background: linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary));
  border-radius: 32px;
  border: 1px solid var(--bg-tertiary);
}

.about-cta h2 {
  font-size: 32px;
  margin-bottom: 16px;
}

.about-cta p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

@media (max-width: 768px) {
  .stats-section {
    grid-template-columns: 1fr;
  }
  
  .mission-grid {
    grid-template-columns: 1fr;
  }
  
  .visual-card {
    width: 100%;
  }
  
  .offset-card {
    align-self: flex-start;
  }
}
</style>