<script setup lang="ts">
import { usePages } from '@temp/pages'

const pages = usePages()
</script>

<template>
  <div>
    <h2>記事一覧</h2>
    <div class="flex flex-wrap md:(-mx-2)">
      <ArticleCardItem
        v-for="page in pages"
        :key="page.key"
        v-bind="page"
      />
    </div>
  </div>
</template>
