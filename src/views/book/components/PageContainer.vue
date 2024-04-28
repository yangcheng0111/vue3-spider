<script setup>
import { ref } from 'vue'
import Star from '@/components/Star.vue'

const count = ref(0)
const load = () => {
  count.value += 1
  if (count.value === 20) {
    loading.value = false
  }
}
const loading = ref(true)
</script>

<template>
  <div class="body">
    <ul v-infinite-scroll="load" :infinite-scroll-disabled="!loading">
      <li v-for="item in count" :key="item">
        <div class="lf">
          <img
            src="https://img3.doubanio.com/view/subject/s/public/s34790242.jpg"
            alt=""
          />
        </div>
        <div class="rg">
          <el-link href="#" type="primary">
            <h4>哈耶克论哈耶克：对谈式自传</h4>
          </el-link>

          <p class="small">
            [英]弗里德里希·A.哈耶克（F.A.Hayek） 著 /
            [美]斯蒂芬·克雷斯吉（Stephen Kresge） / [美]莱夫·魏纳（Leif Wenar）
            编 / 2024-3 / 译林出版社 / 69.00元 / 精装
          </p>
          <span><Star score="5"></Star><b>5</b> (<i>74</i>人评价)</span>
        </div>
      </li>
      <li
        v-if="loading"
        v-loading="loading"
        element-loading-text="加载中..."
      ></li>
      <li v-else>
        <el-empty description="没了" :image-size="80" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 边框 */
.body ul li {
  margin-top: -1px;
  border: 1px dashed #ddd;
  border-bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 120px;
  padding: 15px 8px 5px;
}
.body ul li:last-child {
  border-bottom: 1px dashed ddd;
}

.body ul li .lf img {
  width: 70px;
  object-fit: cover;
}
.body ul li .rg {
  width: 590px;
}
/* 超出省略 */
.body ul li .rg p {
  margin: 8px 0 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.body ul li .rg span {
  display: flex;
  color: #666;
}
.body ul li .rg span b {
  color: rgb(242, 203, 81);
  margin-right: 8px;
}

.el-empty {
  margin: 0 auto;
}
</style>
