<script setup>
import Left from './DetailsComponents/Left.vue'
import Aside from '@/components/Aside.vue'
import { useMovieStore } from '@/stores/index'
// 获取数据
const MovieStore = useMovieStore()
MovieStore.getMovieData(1)
const data = useMovieStore().movieData
</script>
<template>
  <div class="wrapper">
    <Left v-if="data.name"></Left>

    <div class="right">
      <Aside title="电影"></Aside>
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
