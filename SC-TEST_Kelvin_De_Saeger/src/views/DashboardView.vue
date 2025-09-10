<template>
  <div class="mb-5">
    <!-- Header -->
    <header class="text-center mb-4">
      <h1 class="display-4 fw-bold text-primary">
        Player Dashboard
      </h1>
      <p class="text-muted">Track your progress and achievements</p>
    </header>

    <!-- Loading / Error -->
    <div v-if="userStore.loading" class="text-center my-5">
      <BaseLoader />
    </div>
    <div v-else-if="userStore.error" class="alert alert-danger text-center my-5">
      {{ userStore.error }}
      <button class="btn btn-primary mt-3" @click="userStore.fetchData()">Retry</button>
    </div>

    <div v-else class="row g-4 mb-4">
      <div class="col-md-4">
        <ProfileCard />
      </div>

      <div class="col-md-4">
        <LevelProgress />
      </div>

      <div class="col-md-4">
        <BaseCard class="p-4 h-100" v-if="userStore.user">
          <h5 class="mb-3 d-flex align-items-center gap-2">📊 Quick Stats</h5>
          <div class="mb-2">
            <div class="d-flex justify-content-between">
              <span class="small text-muted">Total Achievements</span>
              <strong>{{ userStore.achievements.length }}</strong>
            </div>
          </div>

          <div class="mb-2">
            <div class="d-flex justify-content-between">
              <span class="small text-muted">Current Level</span>
              <strong class="text-primary">{{ userStore.user.level }}</strong>
            </div>
          </div>

          <div>
            <div class="d-flex justify-content-between">
              <span class="small text-muted">XP Progress</span>
              <strong class="text-success">{{ xpPercentage }}%</strong>
            </div>
          </div>

          <div class="text-center my-4">
            <button class="btn btn-warning m-1" @click="userStore.addXP(30)">
                Gain 30 XP
            </button>
            <button class="btn btn-success m-1" @click="userStore.addXP(500)">
                Gain 500 XP
            </button>
            <button class="btn btn-primary m-1" @click="userStore.addXP(2000)">
                Gain 2000 XP
            </button>
        </div>
        </BaseCard>
        <div v-else class="text-center my-5">
          <BaseLoader />
        </div>
      </div>
    </div>

    <AchievementsList />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserDataStore } from '../store/userDataStore'
import ProfileCard from '../components/profile/ProfileCard.vue'
import LevelProgress from '../components/progress/LevelProgress.vue'
import AchievementsList from '../components/achievements/AchievementsList.vue'
import BaseCard from '../components/common/BaseCard.vue'
import BaseLoader from '../components/common/BaseLoader.vue'

const userStore = useUserDataStore()

const xpPercentage = computed(() => {
  if (!userStore.user) return 0
  return Math.round(
    (userStore.user.current_xp / (userStore.user.current_xp + userStore.user.xp_to_next_level)) * 100
  )
})
</script>

<style scoped>

</style>
