import { createApp } from 'vue'
import router from './route'
import App from './App.vue'

console.log('Creating Vue app...')
const app = createApp(App)

console.log('Using router...')
app.use(router)

console.log('Mounting app...')
// Mount when the route is ready
router.isReady().then(() => {
  console.log('Router is ready, mounting app...')
  app.mount('#app', true)
  console.log('Vue app mounted')
  
  // 隐藏loading mask并跳转到测试页面
  setTimeout(() => {
    const loadingMask = document.getElementById('loading-mask')
    if (loadingMask) {
      console.log('Hiding loading mask')
      loadingMask.style.display = 'none'
    }
    // 强制跳转到测试页面
    console.log('Force navigating to /test')
    router.push('/test')
  }, 500)
}).catch((error: any) => {
  console.error('Router ready error:', error)
})

// 添加路由监听
router.afterEach((to: any, from: any) => {
  console.log('Route changed from', from.path, 'to', to.path)
})



