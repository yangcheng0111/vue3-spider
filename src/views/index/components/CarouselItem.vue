<script setup>
import { ref } from 'vue'
const imgList = ref([
  'https://ts1.cn.mm.bing.net/th/id/R-C.0b31e840a54f0b2968476cbbf55e866f?rik=SO06%2b%2b%2bOsjO38w&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50110%2f8335.jpg_wh1200.jpg&ehk=xt%2by6EhO2LkQhWDEmfv1z57lGksvQ7eOUIAEXgDPTqc%3d&risl=&pid=ImgRaw&r=0',
  'https://ts1.cn.mm.bing.net/th/id/R-C.0b31e840a54f0b2968476cbbf55e866f?rik=SO06%2b%2b%2bOsjO38w&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50110%2f8335.jpg_wh1200.jpg&ehk=xt%2by6EhO2LkQhWDEmfv1z57lGksvQ7eOUIAEXgDPTqc%3d&risl=&pid=ImgRaw&r=0',
  'https://ts1.cn.mm.bing.net/th/id/R-C.0b31e840a54f0b2968476cbbf55e866f?rik=SO06%2b%2b%2bOsjO38w&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50110%2f8335.jpg_wh1200.jpg&ehk=xt%2by6EhO2LkQhWDEmfv1z57lGksvQ7eOUIAEXgDPTqc%3d&risl=&pid=ImgRaw&r=0'
])
</script>

<template>
  <div class="banner">
    <div class="wrapper">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <h3 text="2xl" justify="center"><img :src="item" alt="" /></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-color: rgba(232, 232, 232, 0.4);
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  margin: 0;
  text-align: center;
  width: 600px;
  height: 340px;
}

h3 img {
  width: 600px;
  height: 340px;
  object-fit: contain;
}
</style>
