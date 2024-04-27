<script setup>
import Star from '@/components/Star.vue'
</script>

<template>
  <div class="body wrapper">
    <ul>
      <li>
        <a href="#">
          <h1>
            <img
              src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2891737518.jpg"
              alt=""
            />
          </h1>
          <Star score="7"></Star>
          <h4>无间道</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <h1>
            <img
              src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2891737518.jpg"
              alt=""
            />
          </h1>
          <Star score="7"></Star>
          <h4>无间道</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <h1>
            <img
              src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2891737518.jpg"
              alt=""
            />
          </h1>
          <Star score="7"></Star>
          <h4>无间道</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <h1>
            <img
              src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2891737518.jpg"
              alt=""
            />
          </h1>
          <Star score="7"></Star>
          <h4>无间道</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <h1>
            <img
              src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2891737518.jpg"
              alt=""
            />
          </h1>
          <Star score="7"></Star>
          <h4>无间道</h4>
        </a>
      </li>
      <li>
        <a href="#">
          <h1>
            <img
              src="https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2891737518.jpg"
              alt=""
            />
          </h1>
          <Star score="7"></Star>
          <h4>无间道</h4>
        </a>
      </li>
      <!-- <el-skeleton animated="true" throttle="200" style="width: 240px">
        <template #template>
          <el-skeleton-item
            variant="image"
            style="width: 160px; height: 220px"
          />

          <el-skeleton-item
            variant="text"
            style="width: 160px; margin-top: 20px"
          />
          <br />
          <el-skeleton-item
            variant="text"
            style="width: 160px; margin-top: 20px"
          />
        </template>
      </el-skeleton> -->
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
li a img {
  height: 220px;
  object-fit: contain;
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
