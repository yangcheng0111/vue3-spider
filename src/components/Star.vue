<script setup>
const props = defineProps({
  score: { type: Number }
})

console.log(props.score)
const num = Math.floor(props.score / 2)
</script>
<template>
  <span
    v-for="item in num"
    :key="item"
    class="iconfont icon-xingxing"
    style="color: rgb(242, 203, 81)"
  >
  </span>
  <span
    v-for="item in 5 - num"
    :key="item"
    class="iconfont icon-xingxing"
    style="color: #cdcdcd"
  >
  </span>
</template>

<style scoped></style>
