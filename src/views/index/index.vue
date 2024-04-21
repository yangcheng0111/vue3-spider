<script setup>
import { ref } from 'vue'
import CarouselItem from './components/CarouselItem.vue'
import TableItem from './components/TableItem.vue'
</script>
<template>
  <CarouselItem></CarouselItem>
  <TableItem category="movie" title="电影"></TableItem>
  <TableItem category="book" title="书籍"></TableItem>
</template>
