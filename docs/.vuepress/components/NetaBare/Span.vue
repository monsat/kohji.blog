<script setup lang="ts">
interface Props {
  bare: boolean
  neta: string
}

const { bare, neta } = defineProps<Props>()
</script>

<template>
  <span v-if="bare" v-text="neta"></span>
  <span v-else><slot></slot></span>
</template>
