<template>
  <section class="pricing" id="pricing">
    <div class="section-header fade-in">
      <div class="section-label">💰 Preços</div>
      <h2 class="section-title">Simples e transparente</h2>
      <p class="section-desc">
        Comece grátis, upgrade quando quiser. Trial de 7 dias nos planos pagos.
      </p>
    </div>

    <div class="pricing-grid pricing-grid-4">
      <div
        v-for="tier in pricingTiers"
        :key="tier.name"
        class="pricing-card fade-in"
        :class="{ featured: tier.featured }"
      >
        <div v-if="tier.badge" class="pricing-badge">{{ tier.badge }}</div>
        <h3 class="pricing-name">{{ tier.name }}</h3>
        <p class="pricing-desc">{{ tier.desc }}</p>

        <div class="pricing-price">
          <span class="price-currency">R$</span>
          <span class="price-value">{{ tier.price }}</span>
          <span class="price-period">{{ tier.period }}</span>
        </div>

        <div v-if="tier.trial" class="pricing-trial">
          <span class="trial-badge">{{ tier.trial }}</span>
        </div>

        <ul class="pricing-features">
          <li v-for="feature in tier.features" :key="feature">
            <span class="check-icon">✓</span>
            {{ feature }}
          </li>
        </ul>

        <a
          href="https://apps.apple.com/br/app/habitrats/id1234567890"
          class="btn"
          :class="tier.ctaClass"
          style="width: 100%; justify-content: center"
        >
          {{ tier.ctaLabel }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const pricingTiers = [
  {
    name: 'Gratuito',
    desc: 'Perfeito para começar',
    price: '0',
    period: '/mês',
    badge: null,
    trial: null,
    features: [
      'Até 5 hábitos',
      'Check-ins diários',
      'Calendário básico',
      'Estatísticas simples',
      'HealthKit básico',
      'Badges principais',
    ],
    featured: false,
    ctaLabel: 'Começar Grátis',
    ctaClass: 'btn-secondary',
  },
  {
    name: 'Mensal',
    desc: 'Flexibilidade total',
    price: '9,90',
    period: '/mês',
    badge: null,
    trial: '7 dias grátis',
    features: [
      'Hábitos ilimitados',
      'Análises avançadas',
      'Sincronização na nuvem',
      'Exportar dados (JSON/CSV)',
      'Widgets premium',
      'Sem anúncios',
      'Suporte prioritário',
    ],
    featured: false,
    ctaLabel: 'Iniciar Trial Grátis',
    ctaClass: 'btn-secondary',
  },
  {
    name: 'Anual',
    desc: 'Melhor custo-benefício',
    price: '59,90',
    period: '/ano',
    badge: 'Economize 50%',
    trial: '7 dias grátis',
    features: [
      'Tudo do plano Mensal',
      'Equivale a R$ 4,99/mês',
      'Hábitos ilimitados',
      'Análises avançadas',
      'Sincronização na nuvem',
      'Exportar dados (JSON/CSV)',
      'Widgets premium',
    ],
    featured: true,
    ctaLabel: 'Iniciar Trial Grátis',
    ctaClass: 'btn-primary',
  },
  {
    name: 'Vitalício',
    desc: 'Pague uma vez, use para sempre',
    price: '99,90',
    period: ' único',
    badge: 'Melhor valor',
    trial: null,
    features: [
      'Acesso permanente',
      'Todas as features premium',
      'Atualizações futuras incluídas',
      'Hábitos ilimitados',
      'Análises avançadas',
      'Sincronização na nuvem',
      'Exportar dados (JSON/CSV)',
      'Suporte prioritário',
    ],
    featured: false,
    ctaLabel: 'Comprar Agora',
    ctaClass: 'btn-secondary',
  },
];
</script>
