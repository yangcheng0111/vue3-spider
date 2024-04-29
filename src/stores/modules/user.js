import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (newToken) => {
      token.value = newToken
    }
    const removeToken = () => {
      token.value = ''
    }

    // 暴露才能使用
    return {
      token,
      setToken,
      removeToken
    }
  },
  {
    persist: true
  }
)
