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
  color: var(--brand-green) !important;
}

/* ============================================
   NAVIGATION
============================================ */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(13, 13, 13, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--bg-tertiary);
  transition: transform 0.3s ease-in-out;
}

nav.nav-hidden {
  transform: translateY(-100%);
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-image {
  width: 140px;
  height: auto;
  display: block;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s;
  padding: 4px 0;
  position: relative;
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--brand-green);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-cta {
  display: flex;
  gap: 12px;
  align-items: center;
}

@media (max-width: 768px) {
  nav {
    padding: 16px 20px;
  }
  
  .nav-links {
    display: none;
  }
}
</style>