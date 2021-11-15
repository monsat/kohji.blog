<script setup lang="ts">
interface Props {
  title: string
  path: string
  frontmatter: Object
}

const props = defineProps<Props>()
</script>

<template>
  <div class="my-2 w-full md:(my-4 w-1/2)">
    <RouterLink :to="props.path">
      <div class="h-full flex justify-between">
        <article class="w-full flex flex-col f p-2 md:(mx-2 p-4) rounded shadow overflow-hidden bg-brand-100 dark:(bg-brand-750) hover:opacity-80">
          <header class="flex-grow">
            <h1 class="m-0 mb-4 text-lg">
              {{ props.title }}
            </h1>
          </header>
          <footer class="flex-grow-0 text-right">
            <div>
              {{ props.frontmatter.date && (new Date(props.frontmatter.date)).toLocaleDateString() || '' }}
            </div>
          </footer>
        </article>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
a { color: inherit; }
.theme-default-content:not(.custom) a:hover {
  text-decoration: unset;
}
</style>