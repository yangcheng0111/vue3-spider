<script setup>
import Star from '@/components/Star.vue'
</script>

<template>
  <div class="body wrapper">
    <ul>
      <li v-for="item in 10" :key="item">
        <a @click="$router.push('/movie/details')">
          <h1>
            <img
              src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2891737518.jpg"
              alt=""
            />
            <span>7.5分</span>
          </h1>
          <Star score="7"></Star>
          <h4>无间道</h4>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 20px;
}

ul {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 48px;
}
ul li {
  margin-top: 10px;
}
ul li a {
  display: inline-block;
  width: 160px;
  height: 300px;
}
/* 图片部分 */
li a h4,
li a h1 {
  text-align: center;
}
li a h1 {
  position: relative;
}
li a h1 span {
  position: absolute;
  right: 3px;
  top: 0;
  padding: 2px 5px;
  background-color: #ff6700;
  font-size: 14px;
  color: white;
}

li a img {
  height: 220px;
  object-fit: cover;
}
/* 文字部分 */
.starAll {
  margin-top: 10px;
}

h4 {
  margin-top: 10px;
  font-weight: 400;
  font-size: 16px;
}
</style>
