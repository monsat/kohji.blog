import { defineUserConfig } from 'vuepress-vite'
import type { DefaultThemeOptions } from 'vuepress-vite'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'ja',
  title: 'kohji.blog',
  description: '田中弘治のブログ',

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
