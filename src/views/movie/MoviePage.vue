<script setup>
import { ref } from 'vue'
import PageCaregory from './PageComponents/PageCaregory.vue'
import PageContainer from './PageComponents/PageContainer.vue'

const currentPage4 = ref(4)

const pageSize4 = ref(100)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>

<template>
  <!-- 选项部分 -->
  <PageCaregory></PageCaregory>
  <!-- 数据部分 -->
  <PageContainer></PageContainer>

  <!-- 页码部分 -->
  <div class="demo-pagination-block wrapper">
    <!-- current-page 当前页 -->
    <!-- page-size 页面大小 -->
    <!--  page-sizes 可改变页面大小-->
    <!-- total总页数 -->
    <!-- size-change page-size改变时触发 -->
    <!-- current-change当前页改变触发 -->
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style scoped>
.demo-pagination-block {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}
</style>
