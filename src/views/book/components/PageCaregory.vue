<script setup>
import { ref } from 'vue'

const arr = ref([
  '文学文学文学文学文学',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '文学',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '文学',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '文学',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史'
])
const handleSelect = (index) => {
  console.log(index)
}
</script>

<template>
  <div class="header">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item, index) in arr" :key="item" :index="index">{{
        item
      }}</el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.header {
  margin-bottom: 30px;
}
</style>

<style>
div.el-menu--horizontal.el-menu--popup-container {
  max-width: 700px;
}

ul.el-menu.el-menu--popup.el-menu--popup-bottom-start {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 30px;
}
</style>
