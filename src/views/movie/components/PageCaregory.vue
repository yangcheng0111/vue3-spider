<script setup>
import { ref } from 'vue'

// 类型显示部分
const Nav = ref({
  category: false,
  country: false,
  year: false
})

// 导航文字变更部分
const NavName = ref({
  category: '类型',
  country: '地区',
  year: '年份'
})

const clickNav = (navName) => {
  Nav.value[navName] = !Nav.value[navName]
  for (let key in Nav.value) {
    if (key === navName) continue
    Nav.value[key] = false
  }
}

const clickNavClind = (nav, navname) => {
  NavName.value[nav] = navname
  clickNav(nav)
}
</script>
<template>
  <!-- 三个地方 点击其中某个打开对应参数选项  点击参数或其他类别就收起来-->
  <!-- 头部导航 -->
  <div class="header">
    <div class="wrapper">
      <div class="nav">
        <div class="category" @click="clickNav('category')">
          <p
            :class="{
              active: Nav.category,
              navNameChang: NavName.category !== '类型'
            }"
          >
            {{ NavName.category }}<i class="iconfont icon-xiala"></i>
          </p>
        </div>
        <div class="country" @click="clickNav('country')">
          <p :class="{ active: Nav.country }">
            {{ NavName.country }}<i class="iconfont icon-xiala"></i>
          </p>
        </div>
        <div class="year" @click="clickNav('year')">
          <p :class="{ active: Nav.year }">
            {{ NavName.year }}<i class="iconfont icon-xiala"></i>
          </p>
        </div>
      </div>

      <div class="bd">
        <ul v-show="Nav.category">
          <li @click="clickNavClind('category', '类型')">全部</li>
          <li
            v-for="item in 100"
            :key="item"
            @click="clickNavClind('category', item)"
            :class="{ active: NavName.category === item }"
          >
            {{ item }}
          </li>
        </ul>
        <ul v-show="Nav.country">
          <li>10</li>
        </ul>
        <ul v-show="Nav.year">
          <li>10</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h4 {
  font-size: 30px;
}
.nav {
  display: flex;
  gap: 30px;
}
p {
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
}
p.active,
p:hover {
  background-color: rgb(240, 243, 245);
}
p.navNameChang {
  color: rgb(34, 119, 170);
}

p .iconfont {
  display: inline-block;
  margin-left: 10px;
  font-size: 10px;
  transition: all 0.3s;
}
p.active .iconfont {
  transform: rotate(-180deg);
}

/* 类型选项部分 */
.bd {
  position: relative;
}

.bd ul {
  width: 100%;

  position: absolute;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  z-index: 999;

  background-color: rgb(240, 243, 245);
}
.bd ul li {
  cursor: pointer;
  background-color: white;
  color: black;
  height: 30px;
  padding: 0 20px;
  line-height: 30px;
}
.bd ul li.active,
.bd ul li:hover {
  background-color: rgb(34, 119, 170);
  color: white;
}
</style>
