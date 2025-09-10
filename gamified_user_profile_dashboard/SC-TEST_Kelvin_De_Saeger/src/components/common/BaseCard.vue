<template>
  <div class="card p-4 shadow-sm border-2 border-light" :class="customClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string
}>()
</script>