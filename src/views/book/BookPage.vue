<script setup>
import PageCaregory from './PageComponents/PageCaregory.vue'
import PageContainer from './PageComponents/PageContainer.vue'
import Aside from '@/components/Aside.vue'

// import { ref } from 'vue'
</script>
<template>
  <div class="wrapper">
    <div class="left">
      <!-- 类型导航 -->
      <PageCaregory></PageCaregory>
      <!-- 数据展示部分 -->
      <PageContainer></PageContainer>
    </div>

    <div class="right">
      <Aside title="书籍"></Aside>
    </div>
  </div>
  <!-- 回到顶部 -->
  <el-backtop :right="200" :bottom="100" />
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
  width: 330px;
}
</style>
