import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { path } from '@vuepress/utils'
import WindiCSS from 'vite-plugin-windicss'
import colors from 'windicss/colors'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: 'ja',
  title: 'kohji.blog',
  description: '田中弘治のブログ',

  bundlerConfig: {
    viteOptions: {
      plugins: [
        WindiCSS({
          preflight: false,
          scan: {
            include: [`${path.resolve(__dirname)}/**/*.{vue,html,md}`],
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
  },

  markdown: {
    breaks: true,
  },
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/images/kohji_vector_white.png',
  },
  plugins: [
    ['@vuepress/plugin-search'],
    ['@vuepress/register-components', {
      componentsDir: path.resolve(__dirname, './components'),
    }],
    // Plugin Package 編集用: package.json の main と types の lib → src, js → ts
    // [path.resolve(__dirname, './plugin/vuepress-plugin-use-pages'), {
    //   startsWith: '/a/',
    // }],
    ['vuepress-plugin-use-pages', {
      startsWith: '/a/',
    }],
  ],
  shouldPrefetch: true,
  extendsPageOptions: ({ filePath }, app) => {
    if (filePath?.startsWith(app.dir.source('a/'))) {
      return {
        // head: [
        //   [
        //     { link: { rel: 'canonical', href: `https://kohji.blog/${filePath}` } },
        //   ],
        // ],
        frontmatter: {
          permalinkPattern: '/a/:slug',
        },
      }
    }
  },
  extendsPageData: (page) => {
    const meta = 'foobar'
    return { meta }
  },
})
