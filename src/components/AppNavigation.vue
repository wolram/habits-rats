<template>
  <nav :class="{ 'nav-hidden': isHidden }">
    <router-link to="/" class="logo">
      <img class="logo-image" :src="logoUrl" alt="Habits Rats" />
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
      <a
        href="https://apps.apple.com/br/app/habitrats/id1234567890"
        class="btn btn-primary"
        >Baixar App</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import logoUrl from '../assets/brand/full-logo-rainbow-dark.png';

const navLinks = [
  { href: '/#features', label: 'Recursos' },
  { href: '/#heatmap', label: 'Heatmap' },
  { href: '/#watch', label: 'Apple Watch' },
  { href: '/#pricing', label: 'Preços' },
  { path: '/blog', label: 'Blog' },
];

const isHidden = ref(false);
let lastScrollY = 0;
const scrollThreshold = 100;

const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < scrollThreshold) {
    isHidden.value = false;
  } else if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
    isHidden.value = true;
  } else if (currentScrollY < lastScrollY) {
    isHidden.value = false;
  }

  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.active-link {
  color: var(--green) !important;
}
</style>