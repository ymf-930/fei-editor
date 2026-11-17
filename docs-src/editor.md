# Editor 编辑器

## 基础用法

代码编辑器，默认支持多种语法，内部实现了按需引入，使用的时候只需要设置lang就可以，具体参数配置看以下代码

### 基础示例

```vue
<template>
  <fei-editor
    v-model="jsonStr"
    lang="json"
    width="100%"
    height="300"
    :theme="theme"
    :readonly="readonly"
    :font-size="fontSize"
  />
</template>

<script setup>
import { ref } from 'vue'

const jsonStr = ref('{"name": "fei-editor", "version": "0.0.2"}')
const theme = ref('chrome')
const readonly = ref(false)
const fontSize = ref(12)
</script>
```

## 支持的语言

- JavaScript
- JSON
- HTML
- CSS
- SQL
- Java
- Markdown
- Elixir
- Stylus

## 支持的主题

- chrome
- xcode
- clouds
- crimson_editor
- sqlserver
- github
- textmate
- tomorrow
- solarized_light
- cobalt
- dracula
- monokai
- solarized_dark
- terminal
- vibrant_ink

## 属性配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值 | string | — | — |
| lang | 语言类型 | string | javascript/json/html/css/sql/java/markdown/elixir/stylus | json |
| theme | 主题 | string | chrome/xcode/clouds/crimson_editor/sqlserver/github/textmate/tomorrow/solarized_light/cobalt/dracula/monokai/solarized_dark/terminal/vibrant_ink | chrome |
| height | 编辑器高度 | string/number | — | 350 |
| width | 编辑器宽度 | string/number | — | 100% |
| fontSize | 字体大小 | number | — | 12 |
| readonly | 是否只读 | boolean | — | false |
| wrap | 是否换行 | boolean | — | false |
| snippets | 是否启用代码片段 | boolean | — | true |
| options | 其他配置项 | object | — | — |

## 事件

| 事件名称 | 说明 | 回调参数 |
|----------|------|----------|
| change | 内容改变时触发 | (value: string) |
| blur | 失去焦点时触发 | (event: Event) |
| init | 编辑器初始化完成时触发 | (editor: EditorInstance) |

## 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getValue | 获取编辑器内容 | — |

## 高级用法

### 自定义配置

```vue
<template>
  <fei-editor
    v-model="code"
    lang="javascript"
    :options="editorOptions"
    @init="onEditorInit"
  />
</template>

<script setup>
import { ref } from 'vue'

const code = ref('console.log("Hello World!")')
const editorOptions = ref({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
  showLineNumbers: true,
  showGutter: true,
  highlightActiveLine: true
})

const onEditorInit = (editor) => {
  console.log('Editor initialized:', editor)
}
</script>
```

### 动态切换语言和主题

```vue
<template>
  <div>
    <a-select v-model:value="currentLang" @change="onLangChange">
      <a-select-option value="javascript">JavaScript</a-select-option>
      <a-select-option value="json">JSON</a-select-option>
      <a-select-option value="html">HTML</a-select-option>
      <a-select-option value="css">CSS</a-select-option>
    </a-select>
    
    <a-select v-model:value="currentTheme" @change="onThemeChange">
      <a-select-option value="chrome">Chrome</a-select-option>
      <a-select-option value="monokai">Monokai</a-select-option>
      <a-select-option value="dracula">Dracula</a-select-option>
    </a-select>
    
    <fei-editor
      v-model="code"
      :lang="currentLang"
      :theme="currentTheme"
      height="400"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')
const currentLang = ref('javascript')
const currentTheme = ref('chrome')

const onLangChange = () => {
  // 语言切换逻辑
}

const onThemeChange = () => {
  // 主题切换逻辑
}
</script>
```




