import App from './App'
import { createSSRApp } from 'vue'

// 引入 uView UI
import uview from '@/uni_modules/uview-ui'

export function createApp() {
  const app = createSSRApp(App)
  
  // 使用 uView
  app.use(uview)
  
  return {
    app
  }
}
