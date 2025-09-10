<template>
  <div class="progress" style="height: 1rem;">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: value + '%' }"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <slot>{{ Math.round(value) }}%</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: number
}>()
</script>
