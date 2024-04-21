<script setup>
import { ref } from 'vue'
import { userMoviePageService } from '@/api/movie'
import { userBookPageService } from '@/api/book'
import Star from '@/components/Star.vue'
import { getRandomInt } from '@/utils/Toolfunction'

const props = defineProps({
  category: {},
  title: {}
})

const DataList = ref([])

const getDataList = async () => {
  const data = {
    page: getRandomInt(1, 100),
    pageSize: 5
  }
  const res =
    props.category === 'movie'
      ? await userMoviePageService(data)
      : await userBookPageService(data)

  DataList.value = res.data.data.records
}
getDataList()
</script>
<template>
  <div class="wrapper">
    <div class="title">
      <h3>{{ props.title }}</h3>
      <p>查看更多<span>></span></p>
    </div>
    <div class="bd">
      <ul>
        <li v-for="item in DataList" :key="item">
          <a href="#">
            <div class="pic">
              <img :src="item.imgUrl" :alt="item.name" />
            </div>
            <!-- 星星封装成组件 -->
            <Star :score="item.score"></Star>
            <h3>{{ item.name }}</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.wrapper {
  margin-top: 30px;
}
.title {
  display: flex;
  justify-content: space-between;
  height: 54px;
  line-height: 54px;
  background-color: rgba(232, 232, 232, 0.4);
}

.title h3 {
  font-weight: 400;
  font-size: 30px;
}
.title p {
  cursor: pointer;
  color: gray;
}
.title p:hover,
.title p:hover span {
  color: #409eff;
}
.title p span {
  margin-left: 5px;
  color: gray;
}
.bd {
  margin-top: 20px;
  height: 270px;
  padding: 10px;
}

ul {
  display: flex;
  justify-content: space-between;
}
li {
  text-align: center;
  transition: all 0.75s;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}
li:hover {
  transform: scale(1.001);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

li img {
  width: 202px;
  height: 202px;
  object-fit: contain;
}
</style>
