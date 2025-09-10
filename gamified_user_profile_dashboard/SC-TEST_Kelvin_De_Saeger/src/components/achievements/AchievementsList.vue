<template>
  <BaseCard>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="h5 fw-bold d-flex align-items-center gap-2">
        🏆 Achievements
      </h3>
      <BaseBadge variant="secondary">{{ userStore.achievements.length }} Unlocked</BaseBadge>
    </div>

    <div class="row g-3">
      <div
        v-for="achievement in displayedAchievements"
        :key="achievement.id"
        class="col-12 col-md-6"
      >
        <AchievementItem :achievement="achievement" />
      </div>
    </div>

    <div v-if="userStore.achievements.length > 4" class="text-center mt-3">
      <button class="btn btn-outline-primary btn-sm" @click="toggleShowAll">
        {{ showAll ? 'Show Less' : 'Show All' }}
      </button>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserDataStore } from '../../store/userDataStore'
import BaseCard from "../common/BaseCard.vue"
import BaseBadge from "../common/BaseBadge.vue"
import AchievementItem from "./AchievementItem.vue"

const userStore = useUserDataStore()
const showAll = ref(false)

const displayedAchievements = computed(() =>
  showAll.value ? userStore.achievements : userStore.achievements.slice(0, 4)
)

const toggleShowAll = () => {
  showAll.value = !showAll.value
}
</script>
