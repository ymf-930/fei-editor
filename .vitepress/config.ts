import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FEI-EDITOR',
  description: '基于Vue的代码编辑器插件',
  
  // 基础路径（GitHub Pages 项目站点需要带仓库名）
  base: '/fei-editor/',

  // 文档源独立存放，避免 VitePress 扫描整个项目根目录
  srcDir: 'docs-src',

  // README 中的 LICENSE 等链接不在文档站内，忽略死链检查
  ignoreDeadLinks: true,
  
  // 主题配置
  themeConfig: {
    // 网站标题
    siteTitle: 'FEI-EDITOR',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      { text: '示例', link: '/editor' },
      { text: '配置', link: '/options' }
    ],
    
    // 侧边栏
    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '介绍', link: '/guide' },
          { text: '编辑器示例', link: '/editor' },
          { text: '配置选项', link: '/options' }
        ]
      }
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ymf-930/fei-editor' }
    ],
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 FEI-EDITOR'
    },
    
    // 搜索
    search: {
      provider: 'local'
    }
  },
  
  // Markdown配置
  markdown: {
    lineNumbers: true,
    theme: 'github-dark'
  },
  
  // 开发服务器配置
  server: {
    port: 8087,
    open: true
  },
  
  // Vite配置
  vite: {
    resolve: {
      alias: {
        'fei-editor': new URL('../src/index.ts', import.meta.url).pathname
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', 'ant-design-vue', 'brace']
    }
  }
})
