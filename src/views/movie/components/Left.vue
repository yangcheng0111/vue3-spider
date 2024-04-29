<script setup>
import DataContent from './DataContent.vue'
import RatingBox from '@/components/RatingBox.vue'
import ContentIntroduction from './ContentIntroduction.vue'
import PictureDisplay from './PictureDisplay.vue'
</script>
<template>
  <div class="left">
    <h1>
      <p>肖申克的救赎</p>
      <span>The Shawshank Redemption </span><i>(2022)</i>
    </h1>
    <!-- 内容 -->
    <div class="info">
      <h2>
        <img
          src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2906644236.webp"
          alt=""
        />
      </h2>
      <DataContent></DataContent>
      <RatingBox></RatingBox>
    </div>

    <!-- 剧情简介 -->
    <ContentIntroduction title="肖申克的救赎"></ContentIntroduction>
    <!-- 演员表 -->
    <PictureDisplay title="肖申克的救赎"></PictureDisplay>
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
