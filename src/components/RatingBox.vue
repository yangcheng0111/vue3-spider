<script setup>
import Star from '@/components/Star.vue'
const props = defineProps({
  score: { type: Number },
  commentsNum: { type: Number },
  title: { type: String }
})
</script>
<template>
  <div class="ratingBox">
    <h4 class="small">{{ props.title }}评分</h4>
    <p>8.0</p>
    <Star :score="props.score"></Star>
    <span
      ><i>{{ props.commentsNum }}</i
      >评分</span
    >
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
