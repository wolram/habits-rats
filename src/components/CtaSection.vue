<template>
  <section class="cta">
    <div class="cta-container fade-in">
      <h2>Comece sua jornada hoje</h2>
      <p>
        Faça parte do grupo de primeiros usuários construindo hábitos melhores com
        Habits Rats.
      </p>

      <div class="cta-buttons">
        <a
          href="https://apps.apple.com/br/app/habitrats/id1234567890"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
            />
          </svg>
          Download para iOS
        </a>
        <a href="#pricing" class="btn btn-secondary">Saiba mais</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ============================================
   CTA SECTION
============================================ */
.cta {
  padding: 100px 40px;
  text-align: center;
}

.cta-container {
  max-width: 900px;
  margin: 0 auto;
  background: var(--bg-secondary);
  padding: 64px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--bg-tertiary);
  position: relative;
  overflow: hidden;
}

.cta-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--brand-green),
    var(--brand-teal),
    var(--brand-purple),
    var(--brand-green)
  );
  background-size: 200% 100%;
  animation: rainbowSlide 4s linear infinite;
}

@keyframes rainbowSlide {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.cta h2 {
  font-size: clamp(32px, 4vw, 48px);
  margin-bottom: 16px;
}

.cta p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .cta {
    padding: 80px 20px;
  }
}
</style>