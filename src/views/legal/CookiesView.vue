<template>
  <div class="legal-page">
    <AppNavigation />
    <main class="container legal-content">
      <h1>Política de Cookies</h1>
      <p class="last-updated">Última atualização: 19 de Janeiro de 2026</p>

      <section>
        <h2>O Habits Rats usa cookies?</h2>
        <p>
          O Habits Rats é um aplicativo nativo para iOS e, portanto, <strong>não utiliza cookies tradicionais de navegador</strong> para rastrear sua atividade dentro do aplicativo.
        </p>
      </section>

      <section>
        <h2>Tecnologias Similares</h2>
        <p>
          Embora não usemos cookies, utilizamos identificadores de dispositivo anônimos para fins de análise e melhoria do serviço.
        </p>
        <h3>Para que servem?</h3>
        <ul>
          <li><strong>Analytics:</strong> Entender quais recursos são mais utilizados para focar nosso desenvolvimento.</li>
          <li><strong>Crash Reporting:</strong> Identificar e corrigir erros e falhas no aplicativo.</li>
          <li><strong>Assinaturas:</strong> Validar o status da sua assinatura com a App Store.</li>
        </ul>
      </section>

      <section>
        <h2>Seu Controle</h2>
        <p>
          Você pode optar por não compartilhar dados de análise. Basta ir em:
        </p>
        <p><strong>Configurações do App > Privacidade > Compartilhar Análises</strong></p>
        <p>Desative essa opção a qualquer momento.</p>
      </section>

      <section>
        <h2>Site (habitsrats.app)</h2>
        <p>
          Em nosso site institucional (este que você está acessando), podemos usar cookies essenciais para funcionamento básico e segurança. Não usamos cookies de terceiros para publicidade comportamental.
        </p>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNavigation from '../../components/AppNavigation.vue';
import AppFooter from '../../components/AppFooter.vue';
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  flex: 1;
}

h1 {
  font-size: 36px;
  margin-bottom: 16px;
  color: var(--green);
}

.last-updated {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 48px;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 24px;
  margin-bottom: 24px;
  color: var(--text-primary);
  border-bottom: 1px solid var(--bg-tertiary);
  padding-bottom: 12px;
}

h3 {
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 16px;
  color: var(--text-primary);
}

p, li {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

ul {
  padding-left: 20px;
  margin-bottom: 24px;
}

li {
  margin-bottom: 8px;
}
</style>
