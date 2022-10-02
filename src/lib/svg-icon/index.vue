<template>
  <svg :aria-hidden="true">
    <use :xlink:href="symbolId" :class="fillClass" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
const props = defineProps({
  // 显示的svg
  name: {
    type: String,
    required: true,
  },
  // 图标颜色
  color: {
    type: String,
  },
  // tailwind指定svg颜色类名
  fillClass: {
    type: String,
  }
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>
