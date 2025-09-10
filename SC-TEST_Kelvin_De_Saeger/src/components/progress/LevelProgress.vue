<template>
  <BaseCard class="bg-light border-success border-2" v-if="user">
    <div class="text-center mb-3">
      <h3 class="h6 fw-semibold d-flex justify-content-center align-items-center gap-2">
        ⚡ Level Progress
      </h3>
      <div class="fs-3 fw-bold text-success">Level {{ user.level }}</div>
    </div>

    <div class="mb-3">
      <div class="d-flex justify-content-between small mb-1">
        <span class="text-muted">Current XP</span>
        <span class="fw-medium">{{ user.current_xp.toLocaleString() }}</span>
      </div>

      <BaseProgress :value="progressPercentage" />

      <div class="d-flex justify-content-between small mt-1">
        <span class="text-muted">Next Level</span>
        <span class="fw-medium">{{ totalXPNeeded.toLocaleString() }}</span>
      </div>
    </div>

    <div class="text-center p-3 bg-white rounded shadow-sm">
      <div class="small text-muted">XP to next level</div>
      <div class="fs-4 fw-bold text-success">{{ user.xp_to_next_level.toLocaleString() }}</div>
    </div>

  </BaseCard>

  <div v-else class="text-center my-5">
    <BaseLoader />
    Loading XP info...
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useUserDataStore } from '../../store/userDataStore'
import BaseCard from "../common/BaseCard.vue"
import BaseProgress from "../common/BaseProgress.vue"
import BaseLoader from "../common/BaseLoader.vue"

const userStore = useUserDataStore()
const user = computed(() => userStore.user)

const progressPercentage = computed(() => {
  if (!user.value) return 0
  return (user.value.current_xp / user.value.xp_to_next_level) * 100
})

const totalXPNeeded = computed(() => user.value ? user.value.xp_to_next_level : 0)
</script>
