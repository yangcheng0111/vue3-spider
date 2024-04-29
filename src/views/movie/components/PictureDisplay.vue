<script setup>
const props = defineProps({
  title: { type: String }
})
</script>

<template>
  <div class="imagelist">
    <h4>
      <span>{{ props.title }}</span
      >的演职表
    </h4>
    <ul>
      <li v-for="item in 6" :key="item">
        <img
          src="https://img1.doubanio.com/view/celebrity/m/public/p230.webp"
          alt=""
        />
        <span>xxxxxxxxxxxxxxxxxxxx</span>
        <p>导演xxxxxxxxxxxxxxxxx</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
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
