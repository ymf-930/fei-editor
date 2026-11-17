import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// VitePress 构建会自动加载根 vite.config.ts。此时必须返回精简配置：
// 库专用的 vue/dts 插件与 lib 构建项会与 VitePress 内置插件冲突，
// 导致 .vue 组件被重复处理（解析为空）及 inlineDynamicImports 报错。
const isVitepress = process.argv.some(arg => /vitepress/i.test(arg))

// https://vitejs.dev/config/
export default defineConfig(
  isVitepress
    ? {
        // VitePress 文档站构建：不注入库专用插件与 lib 配置
      }
    : {
        plugins: [
          vue({
            script: {
              defineModel: true,
            },
          }),
          dts({
            insertTypesEntry: true,
            copyDtsFiles: true,
            include: ['src/**/*'],
            exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
            rollupTypes: true,
          }),
        ],
        resolve: {
          alias: {
            '@': resolve(__dirname, 'src'),
            'fei-editor': resolve(__dirname, 'src/index.ts'),
          },
        },
        build: {
          lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'FeiEditor',
            fileName: (format) => `fei-editor.${format}.js`,
            formats: ['es', 'umd', 'cjs'],
          },
          rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'brace'],
            output: {
              // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
              globals: {
                vue: 'Vue',
                brace: 'ace',
              },
              // 使用命名导出，避免混合导出警告
              exports: 'named',
              // 优化代码分割
              manualChunks: undefined,
            },
          },
          sourcemap: true,
          minify: 'terser',
          outDir: 'lib',
          emptyOutDir: false,
          // 构建优化
          target: 'es2020',
          cssCodeSplit: false,
          reportCompressedSize: false,
          chunkSizeWarningLimit: 1000,
        },
        // 开发服务器配置
        server: {
          port: 3000,
          open: true,
          cors: true,
        },
        // 预览服务器配置
        preview: {
          port: 4173,
          open: true,
        },
        // 优化依赖
        optimizeDeps: {
          include: ['vue', 'brace'],
        },
      },
)
