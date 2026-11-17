# Options

fei-editor 配置项列表说明

## editor选项

| 选项名 | 类型 | 默认值 | 可选值 | 备注 |
|--------|------|--------|--------|------|
| selectionStyle | string | "line" | "line", "text" | 选择样式 |
| highlightActiveLine | boolean | true | true, false | 高亮当前行 |
| highlightSelectedWord | boolean | true | true, false | 高亮选中单词 |
| readOnly | boolean | false | true, false | 只读模式 |
| cursorStyle | string | "ace" | "ace", "slim", "smooth", "wide" | 光标样式 |
| mergeUndoDeltas | boolean | true | true, false | 合并撤销操作 |
| behavioursEnabled | boolean | true | true, false | 启用行为 |
| wrapBehavioursEnabled | boolean | true | true, false | 启用换行行为 |
| autoScrollEditorIntoView | boolean | false | true, false | 自动滚动到视图 |
| keyboardHandler | string | null | null, "vim", "emacs" | 键盘处理器 |
| placeholder | string | null | string | 占位符文本 |

## renderer选项

| 选项名 | 类型 | 默认值 | 可选值 | 备注 |
|--------|------|--------|--------|------|
| className | string | "ace_editor" | string | CSS类名 |
| theme | string | "ace/theme/textmate" | string | 主题 |
| mode | string | "ace/mode/text" | string | 模式 |
| fontSize | number | 12 | number | 字体大小 |
| fontFamily | string | "Monaco, Menlo, 'Ubuntu Mono', monospace" | string | 字体族 |
| maxLines | number | Infinity | number | 最大行数 |
| minLines | number | 1 | number | 最小行数 |
| showLineNumbers | boolean | true | true, false | 显示行号 |
| showGutter | boolean | true | true, false | 显示行号栏 |
| showPrintMargin | boolean | true | true, false | 显示打印边距 |
| printMarginColumn | number | 80 | number | 打印边距列数 |
| printMargin | boolean | true | true, false | 打印边距 |
| fadeFoldWidgets | boolean | false | true, false | 淡出折叠小部件 |
| showFoldWidgets | boolean | true | true, false | 显示折叠小部件 |
| showInvisibles | boolean | false | true, false | 显示不可见字符 |
| displayIndentGuides | boolean | true | true, false | 显示缩进指南 |
| highlightGutterLine | boolean | true | true, false | 高亮行号栏行 |
| animatedScroll | boolean | false | true, false | 动画滚动 |
| maxPixelHeight | number | 0 | number | 最大像素高度 |
| scrollPastEnd | boolean | false | true, false | 滚动超过末尾 |
| fixedWidthGutter | boolean | false | true, false | 固定宽度行号栏 |
| wrap | boolean | false | true, false | 自动换行 |
| wrapMethod | string | "auto" | "auto", "code", "text" | 换行方法 |
| indentedSoftWrap | boolean | true | true, false | 缩进软换行 |
| hScrollBarAlwaysVisible | boolean | false | true, false | 水平滚动条始终可见 |
| vScrollBarAlwaysVisible | boolean | false | true, false | 垂直滚动条始终可见 |
| fontLigatures | boolean | false | true, false | 字体连字 |
| mouseWheelScrollSpeed | number | 1 | number | 鼠标滚轮滚动速度 |
| dragDelay | number | 0 | number | 拖拽延迟 |
| dragEnabled | boolean | true | true, false | 启用拖拽 |
| focusTimout | number | 0 | number | 焦点超时 |
| tooltipFollowsMouse | boolean | false | true, false | 工具提示跟随鼠标 |
| firstLineNumber | number | 1 | number | 第一行行号 |
| overwrite | boolean | false | true, false | 覆盖模式 |
| newLineMode | string | "auto" | "auto", "unix", "windows" | 换行模式 |
| useWorker | boolean | true | true, false | 使用Web Worker |
| useSoftTabs | boolean | true | true, false | 使用软制表符 |
| tabSize | number | 4 | number | 制表符大小 |
| wrapMode | boolean | false | true, false | 换行模式 |
| foldStyle | string | "markbegin" | "markbegin", "markbeginend", "manual" | 折叠样式 |
| path | string | "" | string | 路径 |
| relativeLineNumbers | boolean | false | true, false | 相对行号 |

## mouseHandler选项

| 选项名 | 类型 | 默认值 | 可选值 | 备注 |
|--------|------|--------|--------|------|
| dragDelay | number | 0 | number | 拖拽延迟 |
| dragEnabled | boolean | true | true, false | 启用拖拽 |
| focusTimout | number | 0 | number | 焦点超时 |
| tooltipFollowsMouse | boolean | false | true, false | 工具提示跟随鼠标 |

## session选项

| 选项名 | 类型 | 默认值 | 可选值 | 备注 |
|--------|------|--------|--------|------|
| firstLineNumber | number | 1 | number | 第一行行号 |
| overwrite | boolean | false | true, false | 覆盖模式 |
| newLineMode | string | "auto" | "auto", "unix", "windows" | 换行模式 |
| useWorker | boolean | true | true, false | 使用Web Worker |
| useSoftTabs | boolean | true | true, false | 使用软制表符 |
| tabSize | number | 4 | number | 制表符大小 |
| wrapMode | boolean | false | true, false | 换行模式 |
| foldStyle | string | "markbegin" | "markbegin", "markbeginend", "manual" | 折叠样式 |
| path | string | "" | string | 路径 |
| relativeLineNumbers | boolean | false | true, false | 相对行号 |

## 扩展选项

### 代码补全

```javascript
{
  enableBasicAutocompletion: true,    // 启用基本自动补全
  enableSnippets: true,               // 启用代码片段
  enableLiveAutocompletion: true,     // 启用实时自动补全
  enableEmmet: true,                  // 启用Emmet
  completers: []                      // 自定义补全器
}
```

### 搜索和替换

```javascript
{
  wrap: true,                         // 循环搜索
  caseSensitive: false,               // 区分大小写
  wholeWord: false,                   // 全词匹配
  regExp: false,                      // 正则表达式
  skipCurrent: false                  // 跳过当前匹配
}
```

### 键盘快捷键

```javascript
{
  keyboardHandler: "ace/keyboard/vim", // Vim模式
  // 或
  keyboardHandler: "ace/keyboard/emacs" // Emacs模式
}
```

### 自定义主题

```javascript
{
  theme: "ace/theme/monokai",         // 主题路径
  // 或自定义主题
  theme: {
    name: "custom",
    styles: {
      ".ace_editor": {
        "background-color": "#1e1e1e",
        "color": "#d4d4d4"
      }
    }
  }
}
```

## 使用示例

```vue
<template>
  <fei-editor
    v-model="code"
    :options="editorOptions"
    @init="onEditorInit"
  />
</template>

<script setup>
import { ref } from 'vue'

const code = ref('console.log("Hello World!")')

const editorOptions = ref({
  // 编辑器选项
  selectionStyle: "line",
  highlightActiveLine: true,
  readOnly: false,
  cursorStyle: "ace",
  
  // 渲染器选项
  fontSize: 14,
  fontFamily: "Monaco, Menlo, 'Ubuntu Mono', monospace",
  showLineNumbers: true,
  showGutter: true,
  showPrintMargin: false,
  wrap: true,
  
  // 会话选项
  tabSize: 2,
  useSoftTabs: true,
  useWorker: true,
  
  // 扩展选项
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
})

const onEditorInit = (editor) => {
  console.log('Editor initialized with options:', editorOptions.value)
}
</script>
```




