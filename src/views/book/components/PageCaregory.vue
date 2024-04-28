<script setup>
const arr = [
  '文学',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史',
  '历史'
]
const handleSelect = (index) => {
  console.log(index)
}
</script>

<template>
  <div class="header">
    <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item
        v-for="(item, index) in arr.splice(0, 9)"
        :key="item"
        :index="index"
        >{{ item }}</el-menu-item
      >
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item v-for="item in 60" :key="item" :index="item + 1"
          >item one</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped>
/* 查看更多的位置 */
li.el-sub-menu {
  margin-left: auto;
}

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
