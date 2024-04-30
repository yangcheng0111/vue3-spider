<script setup>
const props = defineProps({
  title: { type: String }
})
</script>

<template>
  <div class="imagelist">
    <h4>
      <span>{{ props.title }}</span>
    </h4>
    <!-- 数据填充部分 -->
    <slot></slot>
  </div>
</template>

<style>
.imagelist {
  margin-bottom: 30px;
}
.imagelist h4 {
  margin: 24px 0 12px;
  color: green;
}

.imagelist ul {
  display: flex;
  justify-content: space-between;

  text-align: center;
}
.imagelist ul li {
  width: 95px;
  height: 182px;
}
.imagelist ul li img {
  width: 100%;
  height: 133px;
  object-fit: contain;
}

.imagelist ul li span,
.imagelist ul li p {
  font-size: 13px;
  padding: 2px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.imagelist ul li span {
  display: block;
}
.imagelist ul li p {
  color: #666;
}
</style>
