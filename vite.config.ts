import { defineConfig } from 'vite'
import path from 'path'
import process from 'process'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置使用SVG
    createSvgIconsPlugin({
      iconDirs: [
        path.resolve(process.cwd(), 'src/assets/icons'),
      ],
      symbolId: 'icon-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      // 代理所有/api请求
      '/api': {
        // 代理请求后的代理地址
        target: 'https://api.imooc-front.lgdsunday.club',
        // 跨域
        changeOrigin: true,
      }
    }
  }
})
