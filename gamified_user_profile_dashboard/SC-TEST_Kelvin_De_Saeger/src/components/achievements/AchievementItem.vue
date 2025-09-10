<template>
  <div
    class="p-3 rounded border bg-light"
  >
    <div class="d-flex gap-3 align-items-start">
      <div class="fs-3">
        <img
          v-if="achievement.icon_url"
          :src="achievement.icon_url"
          :alt="achievement.title"
          class="img-fluid"
          style="width: 32px; height: 32px; object-fit: contain;"
        />
        <span v-else>{{ achievement.icon_url }}</span>
      </div>

      <div class="flex-grow-1">
        <h5 class="fw-semibold mb-1">{{ achievement.title }}</h5>
        <p class="text-muted small mb-0">{{ achievement.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAchievement } from '../../interfaces/IAchievements'
defineProps<{ achievement: IAchievement }>()
</script>
