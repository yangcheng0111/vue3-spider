import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userBookDetailsService } from '@/api/book'

export const useBookStore = defineStore(
  'book-stores',
  () => {
    const bookData = ref({})

    const getBookData = async (id) => {
      const res = await userBookDetailsService(id)
      bookData.value = res.data
    }
    // 暴露才能使用
    return {
      bookData,
      getBookData
    }
  },
  {
    persist: {
      storage: sessionStorage
    }
  }
)
