import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { markdownPlugin } from './vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
      include: [/\.vue$/, /\.md$/],
    }),
    markdownPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'fei-editor': resolve(__dirname, 'src/index.ts'),
    },
  },
  root: 'examples',
  server: {
    port: 8087,
    open: true,
    cors: true,
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'examples/index.html'),
      },
    },
    target: 'es2020',
    sourcemap: true,
  },
  // 临时使用简化的main文件进行测试
  define: {
    __MAIN_FILE__: JSON.stringify('./main-simple.ts'),
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'ant-design-vue', 'brace', '@ant-design/icons-vue'],
  },
})
