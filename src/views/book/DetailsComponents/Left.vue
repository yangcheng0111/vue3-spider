<script setup>
import { storeToRefs } from 'pinia'

import DataContent from './DataContent.vue'
import RatingBox from '@/components/RatingBox.vue'
import ContentIntroduction from '@/components/ContentIntroduction.vue'
import PictureDisplay from '@/components/PictureDisplay.vue'
import { useBookStore } from '@/stores/index'
const BookStore = useBookStore()
const { bookData } = storeToRefs(BookStore)
</script>
<template>
  <div class="left">
    <h1>
      <p>{{ bookData.name }}</p>
    </h1>
    <!-- 内容 -->
    <div class="info">
      <h2>
        <img src="" v-img-lazy="bookData.imgUrl" alt="" />
      </h2>
      <DataContent></DataContent>
      <RatingBox :score="bookData.score"></RatingBox>
    </div>

    <!-- 剧情简介 -->
    <ContentIntroduction :title="bookData.name + '的内容简介'">
      {{ bookData.introduction }}
    </ContentIntroduction>
    <!-- 创作者 -->
    <PictureDisplay :title="bookData.name + '的创作者'">
      <ul>
        <li>
          <img :src="bookData.authorImage" alt="" />
          <span>{{ bookData.author.split(']')[1] }}</span>
          <p>{{ bookData.role }}</p>
        </li>
      </ul>
    </PictureDisplay>

    <!-- 作者简介 -->
    <ContentIntroduction title="作者简介">
      {{ bookData.author_introduction || '无' }}
    </ContentIntroduction>
  </div>
</template>

<style scoped>
.left {
  width: 680px;
  height: 600px;
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
