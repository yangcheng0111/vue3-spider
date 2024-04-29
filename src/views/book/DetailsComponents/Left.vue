<script setup>
import DataContent from './DataContent.vue'
import RatingBox from '@/components/RatingBox.vue'
import ContentIntroduction from './ContentIntroduction.vue'
import PictureDisplay from './PictureDisplay.vue'
</script>
<template>
  <div class="left">
    <h1>
      <p>小小小小的人间</p>
    </h1>
    <!-- 内容 -->
    <div class="info">
      <h2>
        <img
          src="https://img1.doubanio.com/view/subject/s/public/s34799730.jpg"
          alt=""
        />
      </h2>
      <DataContent></DataContent>
      <RatingBox></RatingBox>
    </div>

    <!-- 剧情简介 -->
    <ContentIntroduction title="小小小小的人间"></ContentIntroduction>
    <!-- 演员表 -->
    <PictureDisplay title="小小小小的人间"></PictureDisplay>
  </div>
</template>

<style>
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
