import { createApp } from 'vue';
import './styles/index.css';
import App from './App.vue';
import router from '@/router'
import { useREM } from '@/utils/flexible';

useREM();
createApp(App).use(router).mount('#app');
