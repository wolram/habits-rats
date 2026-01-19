<template>
  <footer>
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <router-link to="/" class="logo">
            <img class="logo-image" :src="logoUrl" alt="HabitRats" />
          </router-link>
          <p>
            Transforme consistência em progresso visível. Rastreie hábitos,
            ganhe XP e evolua todo dia.
          </p>
        </div>

        <div
          v-for="column in footerColumns"
          :key="column.title"
          class="footer-column"
        >
          <h4>{{ column.title }}</h4>
          <ul>
            <li v-for="link in column.links" :key="link.label">
              <router-link v-if="link.path" :to="link.path">
                {{ link.label }}
              </router-link>
              <a v-else :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-copy"
          >© {{ new Date().getFullYear() }} HabitRats. Todos os direitos reservados.</span
        >

        <div class="footer-social">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
          >
            {{ social.icon }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoUrl from '../assets/brand/full-logo-rainbow-dark.png';

const footerColumns = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '/#features' },
      { label: 'Preços', href: '/#pricing' },
      { label: 'Apple Watch', href: '/#watch' },
      { label: 'Atualizações', path: '/updates' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Carreiras', path: '/careers' },
      { label: 'Contato', path: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidade', path: '/privacy' },
      { label: 'Termos', path: '/terms' },
      { label: 'Cookies', path: '/cookies' },
    ],
  },
];

const socialLinks = [
  { label: 'X (Twitter)', icon: '𝕏', href: 'https://x.com/habitratsapp' },
  {
    label: 'Instagram',
    icon: '📷',
    href: 'https://instagram.com/habitratsapp',
  },
  {
    label: 'TikTok',
    icon: '📱',
    href: 'https://tiktok.com/@habitratsapp',
  },
  {
    label: 'LinkedIn',
    icon: 'in',
    href: 'https://linkedin.com/company/habitratsapp',
  },
];
</script>