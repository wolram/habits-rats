<template>
  <div>
    <div class="bg-grid"></div>
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>
    <div class="bg-glow bg-glow-3"></div>

    <AppNavigation />
    <HeroSection />
    <FeaturesSection />
    <HeatmapSection />
    <WatchSection />
    <PricingSection />
    <CtaSection />
    <BlogSection />
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import AppNavigation from '../components/AppNavigation.vue';
import HeroSection from '../components/HeroSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import HeatmapSection from '../components/HeatmapSection.vue';
import WatchSection from '../components/WatchSection.vue';
import PricingSection from '../components/PricingSection.vue';
import CtaSection from '../components/CtaSection.vue';
import BlogSection from '../components/BlogSection.vue';
import AppFooter from '../components/AppFooter.vue';

let observer;

onMounted(() => {
  // Pequeno delay para garantir que os componentes filhos foram montados e o DOM existe
  setTimeout(() => {
    const elements = document.querySelectorAll('.fade-in');
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));
  }, 100);
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>