<template>
  <nav>
    <router-link to="/" class="logo">
      <img class="logo-image" :src="logoUrl" alt="HabitRats" />
    </router-link>

    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.path || link.href">
        <router-link
          v-if="link.path"
          :to="link.path"
          active-class="active-link"
        >
          {{ link.label }}
        </router-link>
        <a v-else :href="link.href">{{ link.label }}</a>
      </li>
    </ul>

    <div class="nav-cta">
      <a href="https://app.habitsrats.app/login" class="btn btn-secondary"
        >Entrar</a
      >
      <a
        href="https://apps.apple.com/br/app/habitrats/id1234567890"
        class="btn btn-primary"
        >Baixar App</a
      >
    </div>
  </nav>
</template>

<script setup>
import logoUrl from '../assets/brand/full-logo-rainbow-dark.png';

const navLinks = [
  { href: '/#features', label: 'Recursos' }, // Ajuste para funcionar vindo de outras páginas
  { href: '/#heatmap', label: 'Heatmap' },
  { href: '/#watch', label: 'Apple Watch' },
  { href: '/#pricing', label: 'Preços' },
  { path: '/blog', label: 'Blog' },
];
</script>

<style scoped>
.active-link {
  color: var(--green) !important;
}
</style>