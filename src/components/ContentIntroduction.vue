<script setup>
const props = defineProps({
  title: { type: String }
})
</script>

<template>
  <div class="context">
    <!-- 父亲传递 -->
    <h4>
      <span>{{ props.title }}</span>
    </h4>
    <!-- 默认插槽 写入内容 -->
    <p class="small">
      <slot> </slot>
    </p>
  </div>
</template>

<style scoped>
.context h4 {
  margin: 24px 0 12px;
  color: green;
}
.context p {
  text-indent: 2em;
}
</style>
