import Editor from './components/editor/index.vue'
import log from './utils/log'
import type { App } from 'vue'

import config from '../package.json'

const version = config.version

interface InstallOptions {
  disabledDoc?: boolean
}

const install = function (app: App, options: InstallOptions = {}): App {
  app.component(Editor.name || 'FeiEditor', Editor)

  if (!options.disabledDoc) {
    log.printVersion(config.name, config.version, config.homepage, '#722ed1')
  }
  return app
}

export { Editor }
export type { InstallOptions }

export default { version, install }
