import { createApp } from 'vue'
// @ts-ignore
import router from './route'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './assets/styles/index.styl'

import DemoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav.vue'
// 自定义组件库内容

// 当前组件的引入 - 临时注释掉可能有问题的导入
// import Editor from 'fei-editor'

// import * as ace from 'brace'
import 'brace/ext/emmet'
import 'brace/ext/language_tools'
import 'brace/mode/json'
import 'brace/snippets/json'
import 'brace/mode/javascript'
import 'brace/snippets/javascript'
import 'brace/mode/markdown'
import 'brace/snippets/markdown'
import 'brace/mode/sql'
import 'brace/snippets/sql'
import 'brace/mode/java'
import 'brace/snippets/java'
import 'brace/mode/elixir'
import 'brace/snippets/elixir'
import 'brace/mode/html'
import 'brace/snippets/html'
import 'brace/mode/css'
import 'brace/snippets/css'
import 'brace/mode/stylus'
import 'brace/snippets/stylus'
import 'brace/theme/chrome'
import 'brace/theme/xcode'
import 'brace/theme/clouds'
import 'brace/theme/crimson_editor'
import 'brace/theme/sqlserver'
import 'brace/theme/github'
import 'brace/theme/textmate'
import 'brace/theme/tomorrow'
import 'brace/theme/solarized_light'
import 'brace/theme/cobalt'
import 'brace/theme/dracula'
import 'brace/theme/monokai'
import 'brace/theme/solarized_dark'
import 'brace/theme/terminal'
import 'brace/theme/vibrant_ink'

const app = createApp(App)
app.use(Antd)
// app.use(Editor) // 临时注释掉
// app.config.productionTip = false

app.component('DemoBlock', DemoBlock)
app.component('MainHeader', MainHeader)
app.component('MainFooter', MainFooter)
app.component('SideNav', SideNav)

app.use(router)

// 直接挂载应用，不使用router.isReady()
console.log('Mounting app directly...')
app.mount('#app')
console.log('Vue app mounted')

// 隐藏loading mask
setTimeout(() => {
  const loadingMask = document.getElementById('loading-mask')
  if (loadingMask) {
    console.log('Hiding loading mask')
    loadingMask.style.display = 'none'
  }
  // 跳转到guide页面
  console.log('Navigating to /guide')
  router.push('/guide')
}, 1000)

// 添加路由监听
router.afterEach((to: any, from: any) => {
  console.log('Route changed from', from.path, 'to', to.path)
})
