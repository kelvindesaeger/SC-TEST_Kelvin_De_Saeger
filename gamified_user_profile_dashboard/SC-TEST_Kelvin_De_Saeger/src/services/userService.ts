import jsonData from '../data/data.json'
import type { IUserData } from '../interfaces/IUserData'
import type { IAchievement } from '../interfaces/IAchievements'

export const fetchUserProfile = async (): Promise<IUserData> => {
  return jsonData.profile
}

export const fetchAchievements = async (): Promise<IAchievement[]> => {
  return jsonData.achievements
}
