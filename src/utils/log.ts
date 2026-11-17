type ColorType = 'primary' | 'success' | 'warning' | 'danger' | 'default'

/**
 * @description 返回这个样式的颜色值
 * @param type 样式名称 [ primary | success | warning | danger | text ]
 */
export function typeColor(type: ColorType | string = 'default'): string {
  let color = ''
  switch (type) {
    case 'primary':
      color = '#1089ff'
      break
    case 'success':
      color = '#52c41a'
      break
    case 'warning':
      color = '#fa8c16'
      break
    case 'danger':
      color = '#f5222d'
      break
    case 'default':
      color = '#35495E'
      break
    default:
      color = type
      break
  }
  return color
}

const print = (text: any, type: ColorType | string = 'default', back = false): void => {
  if (typeof text === 'object') {
    // 如果是对象则调用打印对象方式
    console.dir(text)
    return
  }
  if (back) {
    // 如果是打印带背景图的
    console.log(
      `%c ${text} `,
      `background:${typeColor(type)}; padding: 2px; border-radius: 2px;color: #fff;`,
    )
  } else {
    console.log(`%c ${text} `, `color: ${typeColor(type)};`)
  }
}

const pretty = (title: string, text: string, type: ColorType | string = 'primary'): void => {
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${typeColor(type)};border:1px solid ${typeColor(
      type,
    )}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
    `border:1px solid ${typeColor(
      type,
    )}; padding: 1px; border-radius: 0 2px 2px 0; color: ${typeColor(type)};`,
    'background:transparent',
  )
}

const primary = (text: any, back = false): void => {
  print(text, 'primary', back)
}
const success = (text: any, back = false): void => {
  print(text, 'success', back)
}
const info = (text: any, back = false): void => {
  print(text, 'info', back)
}
const warning = (text: any, back = false): void => {
  print(text, 'warning', back)
}
const danger = (text: any, back = false): void => {
  print(text, 'danger', back)
}
const printVersion = (
  title: string,
  version: string,
  link: string,
  type: ColorType | string = 'primary',
  fontSize = '20px',
  versionColor = '#999',
): void => {
  console.log(
    `%c${title.toUpperCase()} %cV${version}  ${link}`,
    `color: ${typeColor(
      type,
    )};font-weight: 500;font-size: ${fontSize};font-family: Source Sans Pro,Helvetica Neue,Arial,sans-serif;`,
    `color: ${versionColor};`,
  )
}
interface LogInterface {
  print: (text: any, type?: ColorType | string, back?: boolean) => void
  pretty: (title: string, text: string, type?: ColorType | string) => void
  primary: (text: any, back?: boolean) => void
  info: (text: any, back?: boolean) => void
  success: (text: any, back?: boolean) => void
  warning: (text: any, back?: boolean) => void
  danger: (text: any, back?: boolean) => void
  printVersion: (
    title: string,
    version: string,
    link: string,
    type?: ColorType | string,
    fontSize?: string,
    versionColor?: string
  ) => void
}

const log: LogInterface = {
  print,
  pretty,
  primary,
  info,
  success,
  warning,
  danger,
  printVersion,
}

export default log

export const throwError = (scope: string, m: string): void => {
  pretty(scope, m, 'danger')
}
export const throwWarn = (scope: string, m: string): void => {
  pretty(scope, m, 'warning')
}
