<template>
  <div class="contact-page">
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow-contact"></div>
    <AppNavigation />

    <main class="container">
      <div class="contact-header fade-in">
        <div class="section-label">📬 Central de Ajuda</div>
        <h1>Estamos aqui para você</h1>
        <p>Dúvidas, sugestões ou apenas um "olá". Escolha o canal ideal ou encontre sua resposta abaixo.</p>
      </div>

      <div class="content-wrapper">
        <!-- Coluna da Esquerda: Canais Diretos -->
        <div class="channels-column fade-in">
          <h2 class="column-title">Canais Diretos</h2>
          
          <div class="contact-cards">
            <!-- Suporte -->
            <a href="mailto:hello@habitsrats.app" class="contact-card card-support">
              <div class="card-icon-wrapper">
                <span class="icon">💬</span>
              </div>
              <div class="card-content">
                <h3>Suporte & Feedback</h3>
                <p>Problemas técnicos, bugs ou sugestões de melhoria.</p>
                <span class="card-link">hello@habitsrats.app</span>
              </div>
            </a>

            <!-- Jurídico -->
            <a href="mailto:contato@habitsrats.app" class="contact-card card-legal">
              <div class="card-icon-wrapper">
                <span class="icon">⚖️</span>
              </div>
              <div class="card-content">
                <h3>Jurídico & Privacidade</h3>
                <p>LGPD, Termos de Uso e dados pessoais.</p>
                <span class="card-link">contato@habitsrats.app</span>
              </div>
            </a>

            <!-- Redes Sociais -->
            <div class="contact-card card-social">
              <div class="card-icon-wrapper">
                <span class="icon">📱</span>
              </div>
              <div class="card-content">
                <h3>Redes Sociais</h3>
                <p>Siga-nos para dicas e atualizações diárias.</p>
                <div class="social-links-inline">
                  <a href="https://x.com/habitratsapp" target="_blank">X</a>
                  <a href="https://instagram.com/habitratsapp" target="_blank">Instagram</a>
                  <a href="https://tiktok.com/@habitratsapp" target="_blank">TikTok</a>
                  <a href="https://linkedin.com/company/habitratsapp" target="_blank">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna da Direita: FAQ -->
        <div class="faq-column fade-in">
          <h2 class="column-title">Perguntas Frequentes</h2>
          
          <div class="faq-list">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index" 
              class="faq-item"
              :class="{ active: faq.isOpen }"
              @click="toggleFaq(index)"
            >
              <div class="faq-question">
                <span>{{ faq.question }}</span>
                <span class="faq-toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppNavigation from '../components/AppNavigation.vue';
import AppFooter from '../components/AppFooter.vue';

const faqs = ref([
  {
    question: 'O Habits Rats é gratuito?',
    answer: 'Sim! Você pode baixar e usar o plano Gratuito para sempre, que inclui até 5 hábitos e recursos essenciais. O plano Premium desbloqueia hábitos ilimitados e estatísticas avançadas.',
    isOpen: false
  },
  {
    question: 'Tem versão para Android?',
    answer: 'Atualmente somos exclusivos para iOS (iPhone e Apple Watch) para garantir a melhor integração possível com o ecossistema Apple. Uma versão Android está em nossos planos futuros.',
    isOpen: false
  },
  {
    question: 'Como cancelo minha assinatura?',
    answer: 'Como todas as assinaturas da App Store, você deve cancelar direto no seu iPhone: Ajustes > Seu Nome > Assinaturas > Habits Rats > Cancelar.',
    isOpen: false
  },
  {
    question: 'Meus dados são privados?',
    answer: 'Absolutamente. Seus dados de saúde ficam no seu dispositivo (ou iCloud pessoal). Nós não vendemos seus dados para ninguém.',
    isOpen: false
  }
]);

function toggleFaq(index) {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
}

onMounted(() => {
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 100);
});
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.bg-glow-contact {
  position: fixed;
  top: 20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(57, 211, 83, 0.15) 0%, rgba(0,0,0,0) 70%);
  z-index: -1;
  pointer-events: none;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  flex: 1;
  width: 100%;
}

.contact-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 80px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.contact-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-label {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--green);
  margin-bottom: 16px;
}

h1 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  margin-bottom: 16px;
}

p {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Layout Grid */
.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.column-title {
  font-size: 20px;
  margin-bottom: 32px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.channels-column, .faq-column {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.2s;
}

.channels-column.visible, .faq-column.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Cards */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-card {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  padding: 24px;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  overflow: hidden;
}

.contact-card:hover {
  transform: translateX(5px);
  border-color: var(--card-hover-color, var(--text-muted));
  background: var(--bg-elevated);
}

.card-support:hover { --card-hover-color: var(--green); }
.card-legal:hover { --card-hover-color: var(--blue); }
.card-social:hover { --card-hover-color: var(--purple); }

.card-icon-wrapper {
  width: 50px;
  height: 50px;
  background: var(--bg-tertiary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.card-content h3 {
  font-size: 16px;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.card-content p {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.card-link {
  font-size: 13px;
  font-weight: 600;
  color: var(--green);
  font-family: var(--font-mono);
}

.social-links-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.social-links-inline a {
  font-size: 12px;
  font-weight: 600;
  color: var(--green);
  text-decoration: none;
  background: rgba(57, 211, 83, 0.1);
  padding: 4px 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.social-links-inline a:hover {
  background: var(--green);
  color: var(--bg-primary);
}

/* FAQ */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--text-muted);
}

.faq-item.active {
  background: var(--bg-elevated);
  border-color: var(--green);
}

.faq-question {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
}

.faq-toggle {
  color: var(--text-muted);
  font-size: 20px;
  transition: transform 0.3s ease;
}

.faq-item.active .faq-toggle {
  transform: rotate(45deg);
  color: var(--green);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 20px;
}

.faq-item.active .faq-answer {
  max-height: 200px;
  padding-bottom: 20px;
}

.faq-answer p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Mobile */
@media (max-width: 900px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}
</style>