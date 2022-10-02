import svgIcon from './svg-icon/index.vue';
import type { App } from 'vue';

export default {
  install(app: App) {
    app.component('m-svg-icon', svgIcon)
  }
}