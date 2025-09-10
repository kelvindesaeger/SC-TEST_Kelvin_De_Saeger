<template>
  <span
    class="badge"
    :class="badgeClass"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
}>()

const badgeClass = computed(() => {
  return props.variant ? `bg-${props.variant}` : "bg-secondary"
})
</script>
