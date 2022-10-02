<template>
  <div class=" bg-white sticky top-0 left-0 z-10">
    <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
      <!-- 下拉菜单图标 -->
      <li class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-[-10px_0_10px_white]">
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger" />
      </li>
      <!-- last:mr-4让最后一个元素有边距，不被阴影覆盖 -->
      <li v-for="item in categoryData" :key="item.id" class="shrink-0 px-1.5 py-0.5 z-10 last:mr-4">{{ item.name }}</li>
    </ul>
  </div>
</template>

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
