# 介绍

fei-editor vue3+版本

## 最新版本

[![NPM version](https://img.shields.io/badge/npm-v0.0.2-blue)](https://www.npmjs.com/package/fei-editor)

## 安装

通过[unpkg.com/fei-editor](https://unpkg.com/fei-editor/) 可以看到 fei-editor 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：

```html
<!-- import Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<!-- import fei-editor -->
<script src="https://unpkg.com/fei-editor@0.0.2/lib/index.min.js"></script>
```

推荐使用npm安装，它能更好地和[webpack](https://webpack.js.org/)打包工具配合使用。而且可以更好的和[webpack](https://webpack.js.org/)进行构建。

```bash
npm install fei-editor
```

## 快速上手

### 完整引入

在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import Editor from 'fei-editor'
import App from './App.vue'

const app = createApp(App)
app.use(Editor)
app.mount('#app')
```

以上代码便完成了 fei-editor 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "fei-editor",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Editor，那么需要在 main.js 中写入以下内容：

```javascript
import { createApp } from 'vue'
import { Editor } from 'fei-editor'
import App from './App.vue'

const app = createApp(App)
app.component('Editor', Editor)
app.mount('#app')
```

## 开始使用

至此，一个基于 Vue 和 fei-editor 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

推荐使用npm方式来进行使用，这样可以更好的配合webpack进行构建




