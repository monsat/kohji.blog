import { defaultTheme } from 'vuepress'
import type { Theme, ThemeObject } from '@vuepress/core'
import { path } from '@vuepress/utils'

export type ChildDefaultThemeOptions = {}

export const childDefaultTheme = (options?: ChildDefaultThemeOptions): Theme => (app): ThemeObject => ({
  name: 'vuepress-theme-default-child',
  extends: defaultTheme(),
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    logo: '/images/kohji_vector_white.png',
  },
})

export default childDefaultTheme
