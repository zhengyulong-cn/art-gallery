import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
