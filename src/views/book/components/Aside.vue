<script setup></script>

<template>
  <h4>
    书籍推荐
    <span class="small">随机显示· · · · · · </span>
  </h4>
  <ul>
    <li v-for="item in 9" :key="item">
      <a class="DarkStage" href="">
        <img
          src="https://img1.doubanio.com/view/subject/s/public/s2347590.jpg"
          alt=""
        />
        <p class="small">动物农场</p>
      </a>
    </li>
  </ul>
</template>
<style scoped>
.right h4 {
  margin-bottom: 10px;
}
.right h4 span {
  color: #666;
}
.right ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.right ul li a {
  padding: 5px;

  display: inline-block;
  width: 100px;
  height: 140px;
  color: rgb(64, 158, 255);
  text-align: center;
}

.right ul li a img {
  width: 67px;
  object-fit: cover;
}
</style>
