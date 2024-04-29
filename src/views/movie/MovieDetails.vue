<script setup>
import Left from './components/Left.vue'
</script>
<template>
  <div class="wrapper">
    <Left></Left>

    <div class="right"></div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
