<template>
  <section id="pricing" class="pricing">
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

<style scoped>
/* ============================================
   PRICING SECTION
============================================ */
.pricing {
  padding: 100px 40px;
}

.pricing-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
}

.pricing-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.pricing-card {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  border-radius: var(--radius-lg);
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}

.pricing-card:hover {
  border-color: var(--text-muted);
  transform: translateY(-5px);
}

.pricing-card.featured {
  border-color: var(--brand-green);
  background: linear-gradient(180deg, var(--bg-secondary) 0%, rgba(57, 211, 83, 0.05) 100%);
  box-shadow: 0 0 40px rgba(57, 211, 83, 0.1);
}

.pricing-badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--brand-green);
  color: #000;
  font-size: 11px;
  font-weight: 700;
  border-radius: var(--radius-full);
  margin-bottom: 16px;
  width: fit-content;
  text-transform: uppercase;
}

.pricing-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.pricing-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  min-height: 40px;
}

.pricing-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 8px;
}

.price-currency {
  font-size: 16px;
  color: var(--text-secondary);
}

.price-value {
  font-size: 32px;
  font-weight: 700;
  font-family: var(--font-mono);
  color: var(--text-primary);
}

.price-period {
  font-size: 14px;
  color: var(--text-muted);
}

.pricing-trial {
  margin-bottom: 24px;
}

.trial-badge {
  display: inline-block;
  padding: 4px 8px;
  background: rgba(57, 211, 83, 0.1);
  border: 1px solid rgba(57, 211, 83, 0.3);
  color: var(--brand-green);
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
}

.pricing-features {
  list-style: none;
  margin-bottom: 32px;
  flex: 1;
}

.pricing-features li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--bg-tertiary);
  font-size: 14px;
  line-height: 1.4;
}

.pricing-features li:last-child {
  border-bottom: none;
}

.check-icon {
  color: var(--brand-green);
  font-weight: bold;
}

@media (max-width: 1024px) {
  .pricing-grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .pricing {
    padding: 80px 20px;
  }
  
  .pricing-grid-4 {
    grid-template-columns: 1fr;
  }
}
</style>