<template>
  <div ref="editorRef" class="fei-editor" :style="wrapStyles" />
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import * as ace from 'brace'
import type { EditorProps, EditorEmits, EditorInstance } from '../../types'

// 定义组件名称
defineOptions({
  name: 'FeiEditor',
})

interface Props extends EditorProps {
  modelValue?: string
  lang?: string
  theme?: string
  height?: string
  width?: string
  fontSize?: number
  options?: Record<string, any>
  readonly?: boolean
  wrap?: boolean
  snippets?: boolean
  styles?: Record<string, any>
}

const props = withDefaults(defineProps<Props>(), {
  lang: 'json',
  theme: 'chrome',
  height: '350',
  width: '100%',
  fontSize: 12,
  readonly: false,
  wrap: false,
  snippets: true,
})

const emit = defineEmits<EditorEmits>()

// 使用模板引用定位当前实例，避免多实例场景下绑定到错误的 DOM
const editorRef = ref<HTMLElement | null>(null)
const editor = ref<EditorInstance | null>(null)
const contentBackup = ref('')

const wrapStyles = computed(() => {
  return {
    width: props.width ? px(props.width) : '100%',
    height: props.height ? px(props.height) : '100%',
    border: '1px solid #e8e8e8',
    ...props.styles,
  }
})

const px = (n: string): string => {
  return /^\d*$/.test(n) ? `${n}px` : n
}

const getValue = (): string => editor.value?.getValue() || ''

const setValue = (value: string, cursor?: number): void => {
  if (!editor.value) return
  const next = value || ''
  editor.value.setValue(next, cursor === undefined ? next.length : cursor)
  contentBackup.value = next
}

const setTheme = (theme: string): void => {
  editor.value?.setTheme('ace/theme/' + theme)
}

const setLang = (lang: string): void => {
  editor.value?.getSession().setMode('ace/mode/' + lang)
}

const focus = (): void => {
  editor.value?.focus()
}

const blur = (): void => {
  editor.value?.blur()
}

const getEditor = (): EditorInstance | null => editor.value

const handleFocus = (event: Event): void => {
  emit('focus', event)
}

const handleBlur = (event: Event): void => {
  emit('blur', event)
}

watch(
  () => props.modelValue,
  val => {
    if (contentBackup.value !== val && editor.value) {
      const next = val || ''
      // 将光标保持在内容末尾，避免外部赋值时跳到开头
      editor.value.getSession().setValue(next, next.length)
      contentBackup.value = next
    }
  },
)

watch(
  () => props.theme,
  newTheme => {
    if (editor.value) {
      editor.value.setTheme('ace/theme/' + newTheme)
    }
  },
)

watch(
  () => props.lang,
  newLang => {
    if (editor.value) {
      editor.value.getSession().setMode('ace/mode/' + newLang)
    }
  },
)

watch(
  () => props.options,
  newOption => {
    if (editor.value && newOption) {
      editor.value.setOptions(newOption)
    }
  },
)

watch(
  () => props.fontSize,
  newSize => {
    if (editor.value) {
      editor.value.setFontSize(newSize) // 设置文字大小
    }
  },
)

watch(
  () => props.readonly,
  val => {
    if (editor.value) {
      editor.value.setReadOnly(val) // 设置只读
    }
  },
)

watch(
  () => props.height,
  () => {
    nextTick(() => {
      editor.value?.resize()
    })
  },
)

watch(
  () => props.width,
  () => {
    nextTick(() => {
      editor.value?.resize()
    })
  },
)

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy()
    editor.value = null
  }
})

onMounted(() => {
  const editorElement = editorRef.value
  if (!editorElement) return

  const aceEditor = ace.edit(editorElement) as EditorInstance
  editor.value = aceEditor

  aceEditor.getSession().setMode('ace/mode/' + props.lang)
  aceEditor.setTheme('ace/theme/' + props.theme)
  aceEditor.$blockScrolling = Infinity
  aceEditor.setFontSize(props.fontSize) // 设置文字大小
  aceEditor.setReadOnly(props.readonly) // 设置只读
  aceEditor.getSession().setUseWrapMode(props.wrap)
  aceEditor.setShowPrintMargin(false)
  aceEditor.getSession().setTabSize(2)

  aceEditor.setOptions({
    enableBasicAutocompletion: props.snippets,
    enableSnippets: props.snippets,
    enableLiveAutocompletion: props.snippets,
  })

  emit('init', aceEditor)

  if (props.modelValue) {
    aceEditor.setValue(props.modelValue, -1)
  }
  contentBackup.value = props.modelValue || ''

  aceEditor.on('change', function () {
    const content = aceEditor.getValue()
    emit('update:modelValue', content)
    emit('change', content)
    contentBackup.value = content
  })
  aceEditor.on('focus', handleFocus)
  aceEditor.on('blur', handleBlur)
  if (props.options) {
    aceEditor.setOptions(props.options)
  }
})

defineExpose({
  getValue,
  setValue,
  setTheme,
  setLang,
  setMode: setLang,
  setReadOnly: (readonly: boolean) => editor.value?.setReadOnly(readonly),
  setFontSize: (size: number) => editor.value?.setFontSize(size),
  resize: () => editor.value?.resize(),
  destroy: () => {
    editor.value?.destroy()
    editor.value = null
  },
  focus,
  blur,
  getEditor,
})
</script>
