import { RouteRecordRaw } from "vue-router";

const mobileRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Navigation',
    component: import('@/views/main/index.vue')
  }
]

export default mobileRoute;