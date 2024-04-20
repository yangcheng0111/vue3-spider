<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <div>
    <!-- elment-plus 国际化 设置为中文模式 -->
    <el-config-provider :locale="zhCn">
      <router-view> </router-view>
    </el-config-provider>
  </div>
</template>

<style scoped></style>
