import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 暂时注释掉组件库注册，先确保VitePress能正常启动
    // import FeiEditor from 'fei-editor'
    // app.use(FeiEditor)
  }
} satisfies Theme

