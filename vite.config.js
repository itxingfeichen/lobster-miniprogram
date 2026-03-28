import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      'uview-ui': resolve(__dirname, 'uni_modules/uview-ui')
    }
  },
  optimizeDeps: {
    include: []
  }
})
