<script setup lang="ts">
  import DashboardView from './views/DashboardView.vue';
  import { onMounted } from 'vue'
  import { useUserDataStore } from './store/userDataStore'
import BaseLoader from './components/common/BaseLoader.vue';

  const dashboardStore = useUserDataStore()
  onMounted(() => {
    dashboardStore.fetchData()
  })

</script>

<template>
  <div>
    <div v-if="dashboardStore.loading">
      <BaseLoader />
    </div>

    <div v-else-if="dashboardStore.error" class="alert alert-danger text-center my-5">
      {{ dashboardStore.error }}
      <button class="btn btn-primary mt-3" @click="dashboardStore.fetchData()">Retry</button>
    </div>

    <div v-else>
      <DashboardView
        :userData="dashboardStore.user"
        :achievements="dashboardStore.achievements"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
