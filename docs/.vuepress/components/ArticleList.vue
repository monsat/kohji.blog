<script setup lang="ts">
import { usePages } from '@temp/pages'

const pages = usePages()
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
          （{{ (new Date(page.frontmatter.date)).toLocaleDateString() }}）
        </span>
      </li>
    </ul>
  </div>
</template>
