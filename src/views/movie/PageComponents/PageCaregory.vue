<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<template>
  <!-- 三个地方 点击其中某个打开对应参数选项  点击参数或其他类别就收起来-->
  <!-- 头部导航 -->
  <div class="header">
    <div class="wrapper">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-sub-menu index="1">
          <template #title>类型</template>
          <el-menu-item v-for="item in 20" :index="item + 20" :key="item"
            >item one</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>年份</template>
          <el-menu-item v-for="item in 20" :index="item + 30" :key="item"
            >item one</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>地区</template>
          <el-menu-item v-for="item in 20" :index="item + 40" :key="item"
            >item one</el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

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
