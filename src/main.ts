import { createApp } from 'vue';
import './styles/index.css';
import App from './App.vue';
import router from '@/router'
import { useREM } from '@/utils/flexible';
import mLibs from '@/lib';
// 注册svg-icons
import 'virtual:svg-icons-register'

useREM();
const app = createApp(App);
app.use(router);
app.use(mLibs)
app.mount('#app');
