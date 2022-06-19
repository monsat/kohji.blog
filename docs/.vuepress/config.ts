import { defineUserConfig } from 'vuepress'
import { childDefaultTheme } from './theme'
import { viteBundler } from 'vuepress'
import { path } from '@vuepress/utils'
import WindiCSS from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars'

import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import { usePagesPlugin } from 'vuepress-plugin-use-pages'
import { netabareSwitchPlugin } from 'vuepress-plugin-netabare-switch'

import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: 'ja',
  title: 'kohji.blog',
  description: '田中弘治のブログ',

  bundler: viteBundler({
    viteOptions: {
      build: {
        rollupOptions: {
          plugins: [
            dynamicImportVars(),
          ],
        },
      },
      plugins: [
        WindiCSS({
          preflight: false,
          scan: {
            include: [
              path.resolve(__dirname, './**/*.{vue,html,md}'),
              path.resolve(__dirname, '../../node_modules/vuepress-plugin-netabare-switch/lib/**/*.{vue,html,md}'),
            ],
            exclude: [
              'node_modules/**/*',
              '.git/**/*',
            ],
          },
          config: {
            theme: {
              colors: {
                ...colors,
                brand: {
                  950: '#06110c',
                  900: '#0c2117',
                  850: '#113223',
                  800: '#17422f',
                  750: '#1d533b',
                  700: '#236446',
                  650: '#297452',
                  600: '#2e855e',
                  550: '#349569',
                  500: '#3aa675',
                  450: '#4eaf83',
                  400: '#61b891',
                  350: '#75c19e',
                  300: '#89caac',
                  250: '#9dd3ba',
                  200: '#b0dbc8',
                  150: '#c4e4d6',
                  100: '#d8ede3',
                },
              },
            },
          },
        }),
      ],
    },
    vuePluginOptions: {},
  }),

  markdown: {
    breaks: true,
  },
  theme: childDefaultTheme,
  plugins: [
    searchPlugin(),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    usePagesPlugin({
      startsWith: '/a/',
    }),
    netabareSwitchPlugin(),
    googleAnalyticsPlugin({ id: 'G-83SWW0DJYQ' }),
  ],
  shouldPrefetch: true,
  extendsPageOptions: ({ filePath, frontmatter }, app) => {
    if (filePath?.startsWith(app.dir.source('a/'))) {
      frontmatter = {
        ...frontmatter,
        permalinkPattern: '/a/:slug',
      }
    }
  },
})
