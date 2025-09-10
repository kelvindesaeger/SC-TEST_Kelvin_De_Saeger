<template>
  <BaseCard class="text-center" v-if="user">
    <div class="d-inline-block position-relative mb-3">
      <img
        v-if="user.avatar_url"
        :src="user.avatar_url"
        :alt="user.name"
        class="rounded-circle border border-4 border-primary"
        style="width: 96px; height: 96px; object-fit: cover;"
      />
      <div
        v-else
        class="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white fw-bold"
        style="width: 96px; height: 96px; font-size: 1.5rem;"
      >
        {{ userInitials }}
      </div>

      <BaseBadge
        class="position-absolute bottom-0 end-0 shadow"
        variant="warning"
      >
        LVL {{ user.level }}
      </BaseBadge>
    </div>

    <h2 class="h5 fw-bold mb-1">{{ user.name }}</h2>
    <p class="text-muted mb-3">Elite Player</p>

    <div class="d-flex justify-content-center">
      <BaseBadge variant="info">🏆 Top 5%</BaseBadge>
    </div>
  </BaseCard>

  <div v-else class="text-center my-5">
    <BaseLoader />
    Loading user...
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useUserDataStore } from '../../store/userDataStore'
import BaseCard from "../common/BaseCard.vue"
import BaseBadge from "../common/BaseBadge.vue"
import BaseLoader from "../common/BaseLoader.vue"

const userStore = useUserDataStore()

const userInitials = computed(() => {
  if (!userStore.user) return ''
  return userStore.user.name
    .split(" ")
    .map(n => n[0])
    .join("")
})

const user = computed(() => userStore.user)
</script>
