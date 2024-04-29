<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeIndex = ref('/index')
const show = ref(true)

// 刷新页面加载
const updateRoute = () => {
  const router = useRouter()
  const href = router.currentRoute._value.fullPath
  // 如果是详情页则不需要渲染
  show.value = !href.includes('/details')
  // 选中项加载
  activeIndex.value = href
}
updateRoute()

const handleSelect = (key) => {
  activeIndex.value = key
}
</script>
<template>
  <div class="header" v-if="show">
    <div class="wrapper">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router="true"
      >
        <el-menu-item style="pointer-events: none">
          <img style="width: 100px" src="@/assets/logo.svg" alt="logo" />
        </el-menu-item>
        <div class="flex-grow" />

        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/movie/page">电影</el-menu-item>
        <el-menu-item index="/book/page">书籍</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style scoped>
.header {
  margin: 22px auto;
  height: 88px;
}

.flex-grow {
  margin-right: 60px;
}

.el-menu--horizontal.el-menu {
  border-bottom: 0;
  background-color: rgb(249, 246, 245);
}
</style>
