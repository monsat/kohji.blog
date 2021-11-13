<script>
import { defineComponent } from 'vue'
import { usePages } from '@temp/pages'

export default defineComponent({
  setup() {
    const pages = usePages()
    console.log(pages)
    return { pages }
  },
})
</script>

<template>
  <div class="sidebar-content-box">
    <h2>記事一覧</h2>
    <ul>
      <li
        v-for="page in pages"
        :key="page.key"
      >
        <RouterLink :to="page.path">{{ page.title }}</RouterLink>
        <span v-if="page.frontmatter.date">
          （{{ (new Date(page.frontmatter.date)).toLocaleString().split(' ')[0] }}）
        </span>
      </li>
    </ul>
  </div>
</template>
