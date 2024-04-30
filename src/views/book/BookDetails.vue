<script setup>
import Left from './DetailsComponents/Left.vue'
import Aside from '@/components/Aside.vue'
import { useBookStore } from '@/stores/index'
const BookStore = useBookStore()
BookStore.getBookData(1)
</script>
<template>
  <div class="wrapper">
    <Left v-if="BookStore.bookData.name"></Left>

    <div class="right">
      <Aside title="书籍"></Aside>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
}
.right {
  width: 330px;
}
</style>
