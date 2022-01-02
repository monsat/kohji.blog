<script setup lang="ts">
interface Props {
  bare: boolean
}

const { bare } = defineProps<Props>()
</script>

<template>
  <p v-if="bare"><slot name="neta">ネタバレの内容</slot></p>
  <p v-else><slot name="default">ネタバレに配慮した内容</slot></p>
</template>
