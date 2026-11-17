// import type { Editor } from 'brace'

export interface EditorProps {
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

export interface EditorEmits {
  (e: 'blur', event: Event): void
  (e: 'focus', event: Event): void
  (e: 'init', editor: any): void
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}

export interface EditorInstance {
  getValue(): string
  setValue(value: string, cursor?: number): void
  setTheme(theme: string): void
  setReadOnly(readonly: boolean): void
  setFontSize(size: string | number): void
  setOptions(options: Record<string, any>): void
  focus(): void
  blur(): void
  resize(): void
  destroy(): void
  on(event: string, callback: Function): void
  getSession(): {
    setMode(mode: string): void
    setValue(value: string, cursor?: number): void
    setUseWrapMode(use: boolean): void
    setTabSize(size: number): void
  }
  container: HTMLElement
  $blockScrolling: number
  setShowPrintMargin(show: boolean): void
  gotoLine(line: number, column: number, animate: boolean): void
}
