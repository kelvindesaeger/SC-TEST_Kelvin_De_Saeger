import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchUserProfile, fetchAchievements } from '../services/userService'
import type { IUserData } from '../interfaces/IUserData'
import type { IAchievement } from '../interfaces/IAchievements'

export const useUserDataStore = defineStore('userData', () => {
  const user = ref<IUserData | null>(null)
  const achievements = ref<IAchievement[]>([])
  const loading = ref(true)
  const error = ref('')

  const fetchData = async () => {
    loading.value = true
    error.value = ''
    try {
      const [userData, achievementsData] = await Promise.all([
        fetchUserProfile(),
        fetchAchievements()
      ])
      user.value = userData
      achievements.value = achievementsData
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch data'
    } finally {
      loading.value = false
    }
  }

const addXP = (amount: number) => {
  if (!user.value) return

  user.value.current_xp += amount

  while (user.value.current_xp >= user.value.xp_to_next_level) {
    const currentLevelXP = user.value.xp_to_next_level

    // Save the overflow XP before leveling up
    user.value.current_xp -= currentLevelXP
    user.value.level += 1

    // Increase the XP required for the next level by 20%
    user.value.xp_to_next_level = Math.floor(currentLevelXP * 1.2)

  }
}


  return { user, achievements, loading, error, fetchData, addXP }
})
