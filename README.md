# Fei Editor

[![NPM version](https://img.shields.io/npm/v/fei-editor.svg)](https://www.npmjs.com/package/fei-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D.svg)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)

基于 Vue 3 + TypeScript + Vite 的现代化代码编辑器组件，基于 Ace Editor 构建。

## ✨ 特性

- 🚀 **Vue 3** - 基于 Vue 3 Composition API 构建
- 📦 **TypeScript** - 完整的 TypeScript 支持
- ⚡ **Vite** - 使用 Vite 进行快速构建
- 🎨 **Ant Design Vue** - 现代化的 UI 组件库
- 🔧 **Ace Editor** - 强大的代码编辑功能
- 📱 **响应式** - 支持移动端和桌面端
- 🎯 **轻量级** - 按需引入，体积小巧

## 📦 安装

### npm 安装

```bash
npm install fei-editor
```

### yarn 安装

```bash
yarn add fei-editor
```

### pnpm 安装

```bash
pnpm add fei-editor
```

### CDN 安装

```html
<!-- Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<!-- Fei Editor -->
<script src="https://unpkg.com/fei-editor@latest/lib/fei-editor.umd.js"></script>
```

## 🚀 快速开始

### 全局引入

```javascript
import { createApp } from 'vue'
import FeiEditor from 'fei-editor'
import App from './App.vue'

const app = createApp(App)
app.use(FeiEditor)
app.mount('#app')
```

### 按需引入

```javascript
import { createApp } from 'vue'
import { Editor } from 'fei-editor'
import App from './App.vue'

const app = createApp(App)
app.component('FeiEditor', Editor)
app.mount('#app')
```

### 在组件中使用

```vue
<template>
  <div>
    <FeiEditor
      v-model="code"
      :height="400"
      :options="editorOptions"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Editor } from 'fei-editor'

const code = ref('console.log("Hello, Fei Editor!")')

const editorOptions = {
  theme: 'chrome',
  mode: 'javascript',
  fontSize: 14,
  showGutter: true,
  showPrintMargin: false,
  wrap: true,
  readOnly: false
}

const handleChange = (value) => {
  console.log('代码变化:', value)
}
</script>
```

## 📖 API 文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| v-model | 编辑器内容 | `string` | `''` |
| height | 编辑器高度 | `number \| string` | `300` |
| width | 编辑器宽度 | `number \| string` | `'100%'` |
| options | 编辑器配置选项 | `object` | `{}` |
| readonly | 是否只读 | `boolean` | `false` |
| theme | 编辑器主题 | `string` | `'chrome'` |
| mode | 编辑器模式 | `string` | `'javascript'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 内容变化时触发 | `(value: string)` |
| focus | 获得焦点时触发 | `(event: Event)` |
| blur | 失去焦点时触发 | `(event: Event)` |
| init | 编辑器初始化完成 | `(editor: AceEditor)` |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getValue | 获取编辑器内容 | - |
| setValue | 设置编辑器内容 | `(value: string)` |
| setTheme | 设置主题 | `(theme: string)` |
| setMode | 设置模式 | `(mode: string)` |
| setReadOnly | 设置只读状态 | `(readonly: boolean)` |
| resize | 调整编辑器大小 | - |
| destroy | 销毁编辑器 | - |

## 🛠️ 开发

### 环境要求

- Node.js >= 18.0.0
- npm / yarn / pnpm

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建库
npm run build:lib

# 构建演示项目
npm run build:demo

# 代码检查
npm run lint

# 代码格式化
npm run format

# TypeScript 类型检查
npm run type-check
```

### 项目结构

```
fei-editor/
├── src/                    # 源代码
│   ├── components/         # 组件
│   │   └── editor/        # 编辑器组件
│   ├── types/             # 类型定义
│   ├── utils/             # 工具函数
│   └── index.ts           # 入口文件
├── examples/              # 演示项目
├── lib/                   # 构建输出
├── docs/                  # 文档站点
└── build/                 # 构建配置
```

## 📄 许可证

[MIT](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

- [GitHub Issues](https://github.com/ymf-930/fei-editor/issues)
- [Gitee Issues](https://gitee.com/ymf930/fei-editor/issues)
