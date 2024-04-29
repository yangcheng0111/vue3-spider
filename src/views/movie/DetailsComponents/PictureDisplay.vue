<script setup>
const props = defineProps({
  title: { type: String },
  characterList: {}
})
</script>

<template>
  <div class="imagelist">
    <h4>
      <span>{{ props.title }}</span>
    </h4>
    <ul>
      <li v-for="item in characterList" :key="item.id">
        <img :src="item.imgUrl" alt="" />
        <span>{{ item.name }}</span>
        <p>{{ item.role }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
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
