<template>
  <div class="blog-post-page">
    <div class="bg-grid"></div>
    <AppNavigation />

    <main class="container" v-if="post">
      <article class="blog-post fade-in">
        <header class="post-header">
          <div class="post-meta-top">
            <router-link to="/blog" class="back-link">← Voltar para o Blog</router-link>
            <span class="post-category" :style="{ color: `var(--${post.color})` }">
              {{ post.category }}
            </span>
          </div>
          
          <h1 class="post-title">{{ post.title }}</h1>
          
          <div class="post-meta-bottom">
            <span class="post-date">{{ post.date }}</span>
            <span class="separator">•</span>
            <span class="post-read-time">{{ post.readTime }} min de leitura</span>
          </div>
        </header>

        <div class="post-content" v-html="post.content"></div>

        <div class="post-footer-cta">
          <h3>Gostou deste artigo?</h3>
          <p>Comece a rastrear seus hábitos hoje mesmo com o Habits Rats.</p>
          <a href="https://apps.apple.com/br/app/habitrats/id1234567890" class="btn btn-primary">
            Baixar App
          </a>
        </div>
      </article>
    </main>

    <main class="container error-container" v-else>
      <h1>Artigo não encontrado</h1>
      <p>O post que você está procurando não existe ou foi removido.</p>
      <router-link to="/blog" class="btn btn-secondary">Voltar ao Blog</router-link>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { blogPosts } from '../data/blogPosts.js';
import AppNavigation from '../components/AppNavigation.vue';
import AppFooter from '../components/AppFooter.vue';

const route = useRoute();
const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug);
});

onMounted(() => {
  window.scrollTo(0, 0);
  
  // Animação de entrada simples
  setTimeout(() => {
    const el = document.querySelector('.fade-in');
    if (el) el.classList.add('visible');
  }, 100);
});
</script>

<style scoped>
.blog-post-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 800px; /* Largura de leitura confortável */
  margin: 0 auto;
  padding: 120px 20px 80px;
  flex: 1;
}

.back-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--text-primary);
}

.post-header {
  margin-bottom: 48px;
  text-align: center;
}

.post-meta-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.post-category {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
}

.post-title {
  font-size: clamp(32px, 5vw, 48px);
  line-height: 1.2;
  margin-bottom: 16px;
  background: linear-gradient(180deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-meta-bottom {
  color: var(--text-muted);
  font-size: 14px;
  font-family: var(--font-mono);
}

.separator {
  margin: 0 8px;
}

/* Estilos do conteúdo do post (v-html) */
:deep(.post-content) {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text-secondary);
}

:deep(.post-content p) {
  margin-bottom: 24px;
}

:deep(.post-content h2) {
  color: var(--text-primary);
  font-size: 28px;
  margin-top: 48px;
  margin-bottom: 24px;
}

:deep(.post-content h3) {
  color: var(--text-primary);
  font-size: 22px;
  margin-top: 32px;
  margin-bottom: 16px;
}

:deep(.post-content ul), :deep(.post-content ol) {
  margin-bottom: 24px;
  padding-left: 24px;
}

:deep(.post-content li) {
  margin-bottom: 8px;
}

:deep(.post-content strong) {
  color: var(--text-primary);
}

:deep(.post-content blockquote) {
  border-left: 4px solid var(--green);
  padding-left: 20px;
  font-style: italic;
  color: var(--text-primary);
  margin: 32px 0;
}

.post-footer-cta {
  margin-top: 80px;
  padding: 40px;
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 20px;
  text-align: center;
}

.post-footer-cta h3 {
  font-size: 24px;
  margin-bottom: 12px;
}

.post-footer-cta p {
  margin-bottom: 24px;
  color: var(--text-secondary);
}

.error-container {
  text-align: center;
  padding-top: 200px;
}
</style>
