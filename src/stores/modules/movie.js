import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userMovieDetailsService } from '@/api/movie'

export const useMovieStore = defineStore(
  'movie-stores',
  () => {
    const movieData = ref({})

    const getMovieData = async (id) => {
      const res = await userMovieDetailsService(id)
      movieData.value = res.data
    }
    // 暴露才能使用
    return {
      movieData,
      getMovieData
    }
  },
  {
    persist: {
      storage: sessionStorage
    }
  }
)
