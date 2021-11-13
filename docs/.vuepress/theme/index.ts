import type { ThemeObject } from '@vuepress/core'
import { path } from '@vuepress/utils'

const childDefaultTheme: ThemeObject = {
  name: 'vuepress-theme-default-child',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
  },
}

export default childDefaultTheme
