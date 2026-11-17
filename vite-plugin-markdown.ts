import { Plugin } from 'vite'
import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
}).use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink()
})

export function markdownPlugin(): Plugin {
  return {
    name: 'vite-plugin-markdown',
    transform(code, id) {
      if (id.endsWith('.md')) {
        const html = md.render(code)
        const result = `
<template>
  <div class="markdown-content">
    ${html}
  </div>
</template>

<script setup>
// Markdown content
</script>

<style scoped>
.markdown-content {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.markdown-content h1,
.markdown-content h2,
.markdown-content h3,
.markdown-content h4,
.markdown-content h5,
.markdown-content h6 {
  color: #1089ff;
  margin-top: 30px;
  margin-bottom: 15px;
}

.markdown-content h1 {
  border-bottom: 2px solid #1089ff;
  padding-bottom: 10px;
}

.markdown-content p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.markdown-content code {
  background-color: #f5f5f5;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
}

.markdown-content pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 15px 0;
}

.markdown-content pre code {
  background: none;
  padding: 0;
}

.markdown-content ul,
.markdown-content ol {
  padding-left: 20px;
  margin-bottom: 15px;
}

.markdown-content li {
  margin-bottom: 8px;
}

.markdown-content a {
  color: #1089ff;
  text-decoration: none;
}

.markdown-content a:hover {
  text-decoration: underline;
}

.markdown-content blockquote {
  border-left: 4px solid #1089ff;
  padding-left: 15px;
  margin: 15px 0;
  color: #666;
}
</style>
`
        return {
          code: result,
          map: null
        }
      }
    }
  }
}



