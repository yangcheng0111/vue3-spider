<script setup>
import Star from '@/components/Star.vue'
</script>
<template>
  <div class="ratingBox">
    <h4 class="small">电影评分</h4>
    <p>8.0</p>
    <Star score="8"></Star>
    <span><i>1992123</i>评分</span>
  </div>
</template>
<style scoped>
.ratingBox {
  flex: 1;
  padding-left: 15px;
  border-left: 1px solid #eaeaea;
}
.ratingBox h4 {
  color: #666;
}
.ratingBox p {
  text-align: center;
  font-size: 50px;
  padding-bottom: 10px;

  border-bottom: 1px solid #eaeaea;
}
.ratingBox span i {
  margin-right: 5px;
}
.ratingBox .right {
  width: 330px;
  height: 600px;
  background-color: blue;
}
</style>
