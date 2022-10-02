<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import { isMobileTerminal } from '@/utils/flexible';
import NavigationMobile from './NavigationMobile.vue';
import NavigationPC from './NavigationPC.vue';

import { getCategory } from '@/api/category';
import type { ICategoryItem } from '@/api/category';

const categoryData: Ref<ICategoryItem[]> = ref([]);
const getCategoryData = () => {
  getCategory().then(data => {
    console.log(data);
    categoryData.value = data;
  }).catch(err => {
    console.error(err);
  })
}
onMounted(() => {
  getCategoryData()
})
</script>

<template>
  <NavigationMobile v-if="isMobileTerminal" :categoryData="categoryData" />
  <NavigationPC v-else />
</template>