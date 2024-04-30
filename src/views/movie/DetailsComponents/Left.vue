<script setup>
import { storeToRefs } from 'pinia'

import DataContent from './DataContent.vue'
import RatingBox from '@/components/RatingBox.vue'
import ContentIntroduction from './ContentIntroduction.vue'
import PictureDisplay from './PictureDisplay.vue'
import { useMovieStore } from '@/stores/index'

const movieStore = useMovieStore()
const { movieData } = storeToRefs(movieStore)
</script>
<template>
  <div class="left">
    <h1>
      <p>{{ movieData.name }}</p>
      <span>{{ movieData.alias }} </span><i>({{ movieData.year }})</i>
    </h1>
    <!-- 内容 -->
    <div class="info">
      <h2>
        <img :src="movieData.imgUrl" />
      </h2>
      <DataContent></DataContent>
      <RatingBox
        :score="movieData.score"
        :commentsNum="movieData.commentsNum"
        title="电影"
      ></RatingBox>
    </div>

    <!-- 剧情简介 -->
    <ContentIntroduction :title="movieData.name">{{
      movieData.synopsis
    }}</ContentIntroduction>
    <!-- 演员表 -->
    <PictureDisplay
      :title="movieData.name + '的演职表'"
      :characterList="movieData.characterList"
    ></PictureDisplay>
  </div>
</template>

<style>
.left {
  width: 680px;
}

.left h1 {
  display: flex;
  margin-bottom: 12px;
}
.left h1 span,
.left h1 p {
  font-weight: bold;
}
.left h1 span {
  margin: 0 5px;
}
.left h1 i {
  font-size: 26px;
  color: #666;
}
.left .info {
  display: flex;
  justify-content: flex-start;
}

.left .info h2 img {
  width: 135px;
  object-fit: cover;
}
</style>
