import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { nextTick } from 'vue'
import hljs from 'highlight.js'

// 动态导入markdown文件
const routes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: 'guide',
    name: 'index',
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('./docs/guide.md'),
    meta: { desc: '介绍' }
  },
  {
    path: '/editor',
    name: 'editor', 
    component: () => import('./docs/editor.md'),
    meta: { desc: '编辑器示例' }
  },
  {
    path: '/options',
    name: 'options',
    component: () => import('./docs/options.md'),
    meta: { desc: 'options配置项' }
  }
]

console.log('Routes configured:', routes.map(r => ({ path: r.path, name: r.name })))

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  console.log('Navigating to:', to.path, to.name)
  console.log('Available routes:', routes.map(r => r.path))
  next()
})

router.afterEach(async () => {
  await nextTick()
  const blocks = document.querySelectorAll('pre code:not(.hljs)')
  Array.prototype.forEach.call(blocks, hljs.highlightElement)
})

export default router
