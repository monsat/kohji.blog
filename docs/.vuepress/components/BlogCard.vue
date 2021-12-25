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
  const { url, title, content, image } = await $fetch<BlogCardResult>(api)
  results.value = { url, title, content, image }
})

</script>

<template>
  <div>
    <div
      v-if="results"
      class="w-full lg:(max-w-full) flex rounded border border-solid border-gray-200 overflow-hidden"
    >
      <div
        v-if="results.image"
        :title="results.title"
        :style="{ backgroundImage: `url(${results.image})` }"
        class="h-48 flex-none bg-cover text-center overflow-hidden lg:(w-48)"
      />
      <div class="bg-gray-100 p-4 flex flex-col justify-between leading-normal">
        <div class="h-1.75rem overflow-hidden text-gray-600 font-bold text-xl ">{{ results.title }}</div>
        <p class="h-4.5rem overflow-hidden text-gray-600 text-base">{{ results.content }}</p>
        <div class="text-gray-600 font-bold text-sm text-right">{{ results.url }}</div>
      </div>
    </div>
  </div>
</template>
