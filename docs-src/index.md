---
layout: home

hero:
  name: "FEI-EDITOR"
  text: "基于Vue的代码编辑器插件"
  tagline: "支持多种编程语言语法高亮，内置代码补全和智能提示"
  image:
    src: /logo.png
    alt: FEI-EDITOR
  actions:
    - theme: brand
      text: 开始使用
      link: /guide
    - theme: alt
      text: 查看示例
      link: /editor

features:
  - icon: 🎯
    title: 基于Vue 3
    details: 使用Vue 3 + TypeScript + Vite构建，现代化开发体验
  - icon: 🚀
    title: 多语言支持
    details: 支持JavaScript、TypeScript、Vue、HTML、CSS、JSON等多种编程语言
  - icon: 💡
    title: 智能提示
    details: 内置代码补全和智能提示功能，提升开发效率
  - icon: 🎨
    title: 主题丰富
    details: 提供多种主题可选，支持自定义样式
  - icon: 📱
    title: 响应式设计
    details: 支持移动端，适配各种屏幕尺寸
  - icon: 🔧
    title: 配置灵活
    details: 丰富的配置选项，满足不同使用场景
---

## 快速开始

### 安装

```bash
npm install fei-editor
```

### 使用

```vue
<template>
  <fei-editor 
    v-model="code" 
    :language="language"
    :theme="theme"
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const code = ref('console.log("Hello, fei-editor!")')
const language = ref('javascript')
const theme = ref('github')

const handleChange = (value) => {
  console.log('Code changed:', value)
}
</script>
```

## 特性

- 🎯 基于 Vue 3 + TypeScript + Vite
- 🚀 支持多种编程语言语法高亮
- 💡 内置代码补全和智能提示
- 🎨 多种主题可选
- 📱 响应式设计，支持移动端
- 🔧 丰富的配置选项
- 📦 轻量级，无冗余依赖

## 浏览器支持

支持所有现代浏览器：

- Chrome ≥ 60
- Firefox ≥ 60
- Safari ≥ 12
- Edge ≥ 79



