<template>
  <div class="blog-page">
    <div class="bg-grid"></div>
    <AppNavigation />

    <main class="container">
      <div class="blog-header fade-in">
        <div class="section-label">📝 Blog HabitRats</div>
        <h1>Conhecimento para sua evolução</h1>
        <p>
          Dicas práticas, ciência e estratégias para dominar seus hábitos em
          todas as áreas da vida.
        </p>
      </div>

      <!-- Filtros de Categoria -->
      <div class="category-filters fade-in">
        <button
          class="filter-btn"
          :class="{ active: selectedCategory === 'Todos' }"
          @click="selectedCategory = 'Todos'"
        >
          Todos
        </button>
        <button
          v-for="category in categories"
          :key="category"
          class="filter-btn"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <!-- Grid de Posts -->
      <div class="posts-grid">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          class="post-card entry-animation"
          :style="{ '--card-accent': `var(--${post.color})` }"
        >
          <div class="post-meta">
            <span
              class="post-tag"
              :style="{
                background: `var(--${post.color})`,
                color: 'var(--bg-primary)',
              }"
            >
              {{ post.category }}
            </span>
            <span class="post-read-time">{{ post.readTime }} min de leitura</span>
          </div>
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <div class="post-footer">
            <span class="post-date">{{ post.date }}</span>
            <router-link :to="`/blog/${post.slug}`" class="read-more">Ler artigo →</router-link>
          </div>
        </article>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { blogPosts } from '../data/blogPosts.js'; // Importando dados centralizados
import AppNavigation from '../components/AppNavigation.vue';
import AppFooter from '../components/AppFooter.vue';

const selectedCategory = ref('Todos');

// Extrai categorias únicas diretamente dos posts para garantir correspondência exata
const categories = computed(() => {
  const uniqueCategories = new Set(blogPosts.map(post => post.category));
  return Array.from(uniqueCategories);
});

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === selectedCategory.value);
});

let observer;

onMounted(() => {
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
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 80px;
  flex: 1;
}

.blog-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--green);
  margin-bottom: 16px;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.1;
}

p {
  font-size: 18px;
  color: var(--text-secondary);
}

/* Filtros */
.category-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 60px;
}

.filter-btn {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 20px;
  font-family: var(--font-display);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  border-color: var(--text-muted);
  color: var(--text-primary);
}

.filter-btn.active {
  background: var(--text-primary);
  color: var(--bg-primary);
  border-color: var(--text-primary);
  font-weight: 600;
}

/* Animação de entrada simples para os posts */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.entry-animation {
  animation: fadeUp 0.6s ease forwards;
}

/* Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
}

.post-card {
  background: var(--bg-secondary);
  border: 1px solid var(--bg-tertiary);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.post-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--card-accent);
  opacity: 0.5;
  transition: opacity 0.3s;
}

.post-card:hover {
  transform: translateY(-5px);
  border-color: var(--card-accent);
}

.post-card:hover::before {
  opacity: 1;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.post-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 10px;
  letter-spacing: 0.5px;
}

.post-read-time {
  font-size: 12px;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.post-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.4;
}

.post-excerpt {
  font-size: 15px;
  color: var(--text-secondary);
  margin-bottom: 24px;
  flex: 1;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--bg-tertiary);
  padding-top: 20px;
}

.post-date {
  font-size: 13px;
  color: var(--text-muted);
}

.read-more {
  font-size: 14px;
  font-weight: 600;
  color: var(--card-accent);
  text-decoration: none;
  transition: transform 0.2s;
}

.read-more:hover {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 32px;
  }
}
</style>