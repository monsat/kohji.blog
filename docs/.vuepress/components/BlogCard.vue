<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { $fetch } from 'ohmyfetch'

interface Props {
  src: string
}

interface BlogCardResult {
  url: string
  title: string
  content?: string
}

const { src } = defineProps<Props>()

const base = 'https://nuxt-blog-card.coedo.workers.dev/api/card/'
const api = `${base}${encodeURIComponent(src)}`

const results = ref<BlogCardResult>(null)

onMounted(async () => {
  const { url, title, content } = await $fetch(api)
  results.value = { url, title, content }
})

</script>

<template>
  <div>
    <div v-if="results">
      {{ results.url }}
      {{ results.title }}
      {{ results.content }}
    </div>
  </div>
</template>