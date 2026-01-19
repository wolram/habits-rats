<template>
  <section class="blog" id="blog">
    <div class="section-header fade-in">
      <div class="section-label">📝 Blog</div>
      <h2 class="section-title">
        Ideias, ciência e estratégias para hábitos duradouros
      </h2>
      <p class="section-desc">
        Conteúdo prático para transformar intenção em ação, com foco em
        consistência.
      </p>
    </div>

    <div class="blog-grid">
      <article
        v-for="post in featuredPosts"
        :key="post.id"
        class="blog-card fade-in"
      >
        <div class="blog-card-top">
          <span
            class="post-tag"
            :style="{ background: `var(--${post.color})`, color: 'var(--bg-primary)' }"
          >
            {{ post.category }}
          </span>
          <span class="blog-date">{{ post.date }}</span>
        </div>
        <h3 class="blog-title">{{ post.title }}</h3>
        <p class="blog-excerpt">{{ post.excerpt }}</p>
        <router-link
          class="blog-link"
          :to="`/blog/${post.slug}`"
        >
          Ler artigo
          <span aria-hidden="true">→</span>
        </router-link>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { blogPosts } from '../data/blogPosts.js';

// Seleciona os 3 primeiros posts para exibir na Home
const featuredPosts = computed(() => blogPosts.slice(0, 3));
</script>

<style scoped>
.post-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  letter-spacing: 0.5px;
}
</style>