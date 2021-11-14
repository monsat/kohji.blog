<script lang="ts">
import 'virtual:windi.css'
import { defineComponent } from 'vue'
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default defineComponent({
  components: { Layout },
})
</script>
<script setup lang="ts">
import { usePageData, usePageFrontmatter } from '@vuepress/client'

const page = usePageData()
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>()
</script>

<template>
  <Layout>
    <template #sidebar-bottom>
      <ArticleList/>
    </template>
    <template #page-top>
      <div
        v-if="page.path !== '/'"
        class="theme-default-content"
      >
        <h1>{{ page.title }}</h1>
        <hr>
        <p v-if="frontmatter.date" class="text-right">📅 {{ frontmatter.date.slice(0, 10) }}</p>
      </div>
    </template>
  </Layout>
</template>

<style>
img.logo {
  border-radius: 50%;
}

.sidebar-content-box {
  padding: 1.5rem;
}
.sidebar-content-box > h2 {
  font-size: 1.1em;
  font-weight: bold;
}
</style>
