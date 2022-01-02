<script lang="ts">
import { ref, onMounted } from 'vue'

let counter = 0
</script>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  switchWrapperClass?: string
  switchBgClass?: string
  buttonClass?: string
  labelClass?: string
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const {
  modelValue,
  switchWrapperClass,
  switchBgClass,
  buttonClass,
} = withDefaults(defineProps<Props>(), {
  switchWrapperClass: 'relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in',
  switchBgClass: 'toggle-label block overflow-hidden h-7 rounded-full cursor-pointer',
  buttonClass: 'toggle-checkbox absolute block w-5 h-5 m-1 rounded-full border-4 appearance-none cursor-pointer',
  labelClass: 'leading-7 cursor-pointer',
})

const emit = defineEmits<Emits>()

const switchId = `netaBareSwitch-${++counter}`
const checked = ref(false)
</script>

<template>
  <div>
    <div :class="switchWrapperClass">
      <input
        v-model="checked"
        :id="switchId"
        type="checkbox"
        :class="buttonClass"
        @change="emit('update:modelValue', checked)"
      />
      <label
        :for="switchId"
        :class="switchBgClass"
      />
    </div>
    <label
      :for="switchId"
      :class="labelClass"
    >
      <slot name="default">ネタバレを表示</slot>
    </label>
  </div>
</template>

<style scoped>
/* https://tailwindcomponents.com/component/toggle-switch */
.toggle-checkbox {
  background-color: var(--c-text);
}
.toggle-checkbox:checked {
  right: 0;
  background-color: var(--c-tip-bg);
}
.toggle-checkbox + .toggle-label {
  box-sizing: border-box;
  border: 1px solid var(--c-tip);
  background-color: var(--c-tip-bg);
}
.toggle-checkbox:checked + .toggle-label {
  background-color: var(--c-tip);
}
</style>
