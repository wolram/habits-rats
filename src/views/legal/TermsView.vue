<template>
  <div class="legal-page">
    <AppNavigation />
    <main class="container legal-content">
      <h1>Termos de Uso - HabitRats</h1>
      <p class="last-updated">Última atualização: 19 de Janeiro de 2026</p>

      <section>
        <p>
          Bem-vindo ao HabitRats! Ao baixar, instalar ou usar nosso aplicativo,
          você concorda em ficar vinculado a estes Termos de Uso. Leia-os
          atentamente.
        </p>
      </section>

      <section>
        <h2>1. O Serviço</h2>
        <p>
          O HabitRats é uma ferramenta de rastreamento de hábitos que permite
          monitorar progresso diário, visualizar estatísticas e integrar com
          dados de saúde.
        </p>
      </section>

      <section>
        <h2>2. Assinaturas e Pagamentos</h2>
        <h3>2.1 Planos</h3>
        <ul>
          <li><strong>Gratuito:</strong> Acesso básico limitado.</li>
          <li><strong>Premium:</strong> Hábitos ilimitados, backup na nuvem, exportação e mais.</li>
        </ul>

        <h3>2.2 Pagamentos</h3>
        <p>
          Todos os pagamentos são processados pela Apple App Store. As
          assinaturas renovam automaticamente a menos que canceladas 24h antes
          do fim do período.
        </p>

        <h3>2.3 Cancelamento</h3>
        <p>
          Você pode cancelar a qualquer momento nas configurações do seu Apple
          ID. O cancelamento interrompe a renovação automática, mas não
          reembolsa o período já pago.
        </p>
      </section>

      <section>
        <h2>3. Uso Aceitável</h2>
        <p>Você concorda em não usar o App para fins ilegais, não tentar hackear ou engenharia reversa, e não compartilhar sua conta de forma abusiva.</p>
      </section>

      <section>
        <h2>4. Propriedade Intelectual</h2>
        <p>Todo o design, código, logotipos e conteúdo do HabitRats são propriedade exclusiva nossa. Você recebe uma licença limitada para uso pessoal.</p>
      </section>

      <section>
        <h2>5. Isenção de Garantias</h2>
        <p>O App é fornecido "como está". Não garantimos que será livre de erros ou ininterrupto. O uso é por sua conta e risco.</p>
      </section>

      <section>
        <h2>6. Contato</h2>
        <p>Para dúvidas legais ou sobre os termos: <a href="mailto:contato@habitsrats.app">contato@habitsrats.app</a></p>
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

a {
  color: var(--green);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
