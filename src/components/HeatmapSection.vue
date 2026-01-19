<template>
  <section class="heatmap-section" id="heatmap">
    <div class="heatmap-showcase">
      <div class="section-header" style="text-align: left; margin: 0">
        <div class="section-label">📊 Visualização</div>
        <h2 class="section-title">Seu progresso, visível em cada célula</h2>
        <p class="section-desc">
          Inspirado no gráfico de contribuições do GitHub, nosso heatmap
          transforma dados em motivação. Cada cor representa um hábito a ser
          medido — seja para melhorar (improvement) ou monitorar excessos.
        </p>

        <div style="margin-top: 40px">
          <h4
            style="
              font-size: 14px;
              color: var(--text-muted);
              margin-bottom: 16px;
            "
          >
            COMO FUNCIONA
          </h4>
          <ul
            style="
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 16px;
            "
          >
            <li
              v-for="item in heatmapBullets"
              :key="item"
              style="display: flex; align-items: center; gap: 12px"
            >
              <span style="color: var(--green)">✓</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="heatmap-demo fade-in">
        <div class="heatmap-demo-header">
          <span class="heatmap-demo-title">Escolha sua cor</span>
          <div
            class="color-picker"
            role="group"
            aria-label="Selecionador de cores do heatmap"
          >
            <button
              v-for="option in colorPickerOptions"
              :key="option.key"
              class="color-dot"
              :class="{ active: currentColor === option.key }"
              :style="{ background: `var(--${option.key})` }"
              :aria-label="`Cor ${option.key}`"
              :aria-pressed="currentColor === option.key"
              @click="setColor(option.key)"
              @keydown.enter="setColor(option.key)"
              @keydown.space.prevent="setColor(option.key)"
              type="button"
            ></button>
          </div>
        </div>

        <div class="heatmap-large">
          <div
            v-for="(level, index) in demoHeatmapData"
            :key="`demo-${index}`"
            class="heatmap-cell"
            :style="{
              backgroundColor: activeScheme[level],
              animationDelay: `${index * 6}ms`,
            }"
          ></div>
        </div>

        <div class="heatmap-legend">
          <span class="legend-label">Menos</span>
          <div class="legend-colors">
            <div
              v-for="(color, index) in legendColors"
              :key="`legend-${index}`"
              class="legend-color"
              :style="{ backgroundColor: color }"
            ></div>
          </div>
          <span class="legend-label">Mais</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const heatmapBullets = [
  'Cada célula = 1 dia',
  '5 níveis de intensidade',
  'Cada cor = 1 hábito',
  'Histórico de até 1 ano',
];

const colorPickerOptions = [
  { key: 'green' },
  { key: 'blue' },
  { key: 'purple' },
  { key: 'pink' },
  { key: 'red' },
  { key: 'orange' },
  { key: 'yellow' },
  { key: 'teal' },
];

const colorSchemes = {
  green: ['#161B22', '#0E4429', '#006D32', '#26A641', '#39D353'],
  blue: ['#1A2233', '#264466', '#336699', '#2E86DE', '#54A0FF'],
  purple: ['#1F1A2E', '#3D2A5C', '#5B3A8A', '#6D28D9', '#A855F7'],
  pink: ['#2D1A22', '#5C2644', '#8B3366', '#BE185D', '#FF6B9D'],
  red: ['#2D1A1A', '#5C2626', '#8B3333', '#CC4444', '#FF6B6B'],
  orange: ['#2D2419', '#5C4526', '#8B6633', '#CC7A2E', '#FF9F43'],
  yellow: ['#2D2A19', '#5C5426', '#8B7E33', '#D4A81E', '#FECA57'],
  teal: ['#192D2D', '#265C5C', '#338B8B', '#01A3A4', '#00D2D3'],
};

const currentColor = ref('green');
const activeScheme = computed(() => colorSchemes[currentColor.value]);
const legendColors = computed(() => activeScheme.value);

function generateHeatmapData(rows, cols) {
  const data = [];
  for (let i = 0; i < rows * cols; i += 1) {
    const random = Math.random();
    if (random < 0.15) data.push(0);
    else if (random < 0.35) data.push(1);
    else if (random < 0.55) data.push(2);
    else if (random < 0.8) data.push(3);
    else data.push(4);
  }
  return data;
}

const demoHeatmapData = ref(generateHeatmapData(7, 20));

function setColor(colorKey) {
  currentColor.value = colorKey;
  demoHeatmapData.value = generateHeatmapData(7, 20);
}
</script>
