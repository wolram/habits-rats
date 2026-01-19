<template>
  <div class="legal-page">
    <AppNavigation />
    <main class="container legal-content">
      <h1>Política de Privacidade - HabitRats</h1>
      <p class="last-updated">Última atualização: 19 de Janeiro de 2026</p>

      <section>
        <p>
          Esta Política de Privacidade descreve como o HabitRats ("nós", "nosso"
          ou "App") coleta, usa, armazena e protege suas informações pessoais.
          Ao usar nosso aplicativo, você concorda com as práticas descritas
          nesta política.
        </p>
      </section>

      <section>
        <h2>1. Informações que Coletamos</h2>
        <h3>1.1 Informações Fornecidas por Você</h3>
        <ul>
          <li><strong>Nome de usuário</strong>: Para personalizar sua experiência</li>
          <li><strong>Email</strong> (opcional): Para recuperação de conta e comunicações</li>
          <li><strong>Dados de hábitos</strong>: Hábitos criados, check-ins, notas e progresso</li>
          <li><strong>Metas e objetivos</strong>: Suas metas pessoais e progresso</li>
          <li><strong>Badges e conquistas</strong>: Suas conquistas desbloqueadas</li>
        </ul>

        <h3>1.2 Dados de Saúde (com sua permissão)</h3>
        <ul>
          <li><strong>Apple Health</strong>: Passos, sono, treinos, calorias, etc.</li>
          <li>Você controla quais dados são compartilhados.</li>
          <li>Podemos ler e escrever dados no Apple Health com sua autorização explícita.</li>
          <li>Você pode revogar acesso a qualquer momento.</li>
        </ul>

        <h3>1.3 Informações Coletadas Automaticamente</h3>
        <ul>
          <li><strong>Dados de uso</strong>: Como você usa o App, features mais usadas, tempo de uso</li>
          <li><strong>Dados do dispositivo</strong>: Modelo, sistema operacional, versão do App</li>
          <li><strong>Dados de desempenho</strong>: Crashes, erros, tempo de resposta</li>
          <li><strong>Dados de assinatura</strong>: Status da assinatura, plano ativo, histórico de compras</li>
        </ul>

        <h3>1.4 Informações que NÃO Coletamos</h3>
        <p>❌ Localização geográfica<br>
        ❌ Contatos<br>
        ❌ Fotos ou câmera (exceto se você adicionar provas de hábitos)<br>
        ❌ Microfone<br>
        ❌ Histórico de navegação</p>
      </section>

      <section>
        <h2>2. Como Usamos Suas Informações</h2>
        <h3>2.1 Fornecimento do Serviço</h3>
        <ul>
          <li>Permitir que você crie e rastreie hábitos</li>
          <li>Sincronizar dados entre dispositivos (usuários premium)</li>
          <li>Calcular estatísticas, streaks e progresso</li>
          <li>Desbloquear badges e conquistas</li>
          <li>Integrar com Apple Health</li>
        </ul>

        <h3>2.2 Melhoria do Serviço</h3>
        <ul>
          <li>Analisar como o App é usado para melhorar features</li>
          <li>Identificar e corrigir bugs</li>
          <li>Desenvolver novos recursos</li>
          <li>Otimizar desempenho</li>
        </ul>
      </section>

      <section>
        <h2>3. Compartilhamento de Dados</h2>
        <h3>3.1 Não Vendemos Seus Dados</h3>
        <p>❌ Nós NUNCA vendemos, alugamos ou comercializamos seus dados pessoais.</p>

        <h3>3.2 Compartilhamento Limitado</h3>
        <p><strong>Apple:</strong> Processamento de pagamentos, Push notifications, Dados de saúde (apenas localmente).</p>
        <p><strong>Requisitos Legais:</strong> Podemos divulgar informações se exigido por lei ou ordem judicial.</p>
      </section>

      <section>
        <h2>4. Armazenamento e Segurança</h2>
        <p>Seus dados são armazenados localmente no seu dispositivo e, se você for usuário Premium, sincronizados via iCloud ou servidores seguros com criptografia de ponta a ponta.</p>
      </section>

      <section>
        <h2>5. Seus Direitos (LGPD/GDPR)</h2>
        <p>Você tem direito a acessar, corrigir, excluir e portar seus dados. Você pode exercer esses direitos diretamente nas configurações do aplicativo ou entrando em contato conosco.</p>
      </section>

      <section>
        <h2>6. Contato</h2>
        <p>Para dúvidas sobre privacidade, entre em contato em: <a href="mailto:contato@habitsrats.app">contato@habitsrats.app</a></p>
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
