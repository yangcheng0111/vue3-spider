<script setup>
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<template>
  <div class="shortcut">
    <div class="wrapper">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#333"
        text-color="white"
      >
        <el-menu-item index="1">登陆</el-menu-item>
        <el-menu-item index="2">注册</el-menu-item>

        <el-sub-menu index="3">
          <template #title>杨程</template>
          <el-menu-item index="3-1">修改密码</el-menu-item>
          <el-menu-item index="3-2">编辑资料</el-menu-item>
          <el-menu-item index="3-3">重置密码</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
.shortcut {
  background-color: #333;
}
.el-menu {
  display: flex;
  justify-content: flex-end;
  height: 40px;
}
</style>
