<template>
  <div class="demo-block" :class="[blockClass]">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots['default']">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
      <span class="expand-btn" @click="isExpanded = false">
        收起代码&nbsp;
        <UpOutlined v-if="isExpanded" />
        <DownOutlined v-else />
      </span>
    </div>
    <div class="demo-block-control" ref="control" @click="isExpanded = !isExpanded">
      <UpOutlined v-if="isExpanded" />
      <DownOutlined v-else />
      &nbsp;
      <span>{{ controlText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { UpOutlined, DownOutlined } from '@ant-design/icons-vue'

const router = useRouter()
const meta = ref<HTMLElement>()

const isExpanded = ref(false)
// const fixedControl = ref(false)
// const scrollParent = ref<HTMLElement | null>(null)

const blockClass = computed(() => {
  return `demo-${router.currentRoute.value.path.split('/').pop()}`
})

const controlText = computed(() => {
  return isExpanded.value ? '隐藏代码' : '显示代码'
})

const codeArea = computed(() => {
  return meta.value?.getElementsByClassName('meta')[0] as HTMLElement
})

const codeAreaHeight = computed(() => {
  if (meta.value?.getElementsByClassName('description').length) {
    return (
      (meta.value.getElementsByClassName('description')[0] as HTMLElement).clientHeight +
      (meta.value.getElementsByClassName('highlight')[0] as HTMLElement).clientHeight +
      20
    )
  }
  return (meta.value?.getElementsByClassName('highlight')[0] as HTMLElement)?.clientHeight || 0
})

watch(isExpanded, val => {
  if (codeArea.value) {
    codeArea.value.style.height = val ? `${codeAreaHeight.value + 1}px` : '0'
  }
})

onMounted(() => {
  nextTick(() => {
    const highlight = meta.value?.getElementsByClassName('highlight')[0] as HTMLElement
    if (highlight && !meta.value?.getElementsByClassName('description').length) {
      highlight.style.width = '100%'
    }
  })
})
</script>

<style lang="stylus">
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 2px;
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .source {
    padding: 24px;
  }
  .meta {
    position: relative;
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height .2s;
    .expand-btn {
      position: absolute;
      top: 16px;
      right: 24px;
      font-size: 12px;
      cursor: pointer;
      color: #1089ff;
    }
  }
  .description {
    padding: 10px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
    p {
      margin: 0;
      line-height: 26px;
    }
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .highlight {
    pre {
      margin: 0;
    }
    code {
      &.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        &::before {
          content: none;
        }
      }
    }
  }
  .demo-block-control {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    i {
      font-size: 16px;
      line-height: 44px;
      transition: .3s;
    }
    > span {
      font-size: 14px;
      line-height: 44px;
      transition: .3s;
    }
    &:hover {
      color: #1089ff;
      background-color: #f9fafc;
    }
  }
}
</style>
