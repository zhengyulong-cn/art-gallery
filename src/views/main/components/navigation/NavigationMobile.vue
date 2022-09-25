<script setup lang="ts">
import { defineProps } from 'vue';
import type { ICategoryItem } from '@/api/category';
defineProps({
  categoryData: {
    type: Array as () => Array<ICategoryItem>,
    require: true,
  }
})
</script>

<template>
  <div class=" bg-white sticky top-0 left-0 z-10">
    <ul class=" relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
      <li v-for="item in categoryData" :key="item.id" class="shrink-0 px-1.5 py-0.5 z-10">{{ item.name }}</li>
    </ul>
  </div>
</template>