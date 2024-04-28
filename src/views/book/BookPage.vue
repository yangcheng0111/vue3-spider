<script setup>
import PageCaregory from './components/PageCaregory.vue'
import PageContainer from './components/PageContainer.vue'
import { ref } from 'vue'

</script>
<template>
  <div class="wrapper">
    <div class="left">
      <!-- 类型导航 -->
      <PageCaregory></PageCaregory>
      <!-- 数据展示部分 -->
      <PageContainer></PageContainer>
    </div>

    <div class="right"></div>
  </div>

  <el-backtop :right="100" :bottom="100" />
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.left {
  width: 700px;
}
.right {
  width: 300px;
  height: 200px;
  background-color: pink;
}
</style>
