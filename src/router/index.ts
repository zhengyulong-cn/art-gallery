import {createRouter, createWebHashHistory} from 'vue-router';
import routes from './modules'
// 创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;