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
          <p :class="{ active: Nav.category }">
            {{ NavName.category
            }}<i
              class="iconfont"
              :class="{
                'icon-shangla': Nav.category,
                'icon-xiala': !Nav.category
              }"
            ></i>
          </p>
        </div>
        <div class="country" @click="clickNav('country')">
          <p :class="{ active: Nav.country }">
            {{ NavName.country
            }}<i
              class="iconfont"
              :class="{
                'icon-shangla': Nav.country,
                'icon-xiala': !Nav.country
              }"
            ></i>
          </p>
        </div>
        <div class="year" @click="clickNav('year')">
          <p :class="{ active: Nav.year }">
            {{ NavName.year
            }}<i
              class="iconfont"
              :class="{
                'icon-shangla': Nav.year,
                'icon-xiala': !Nav.year
              }"
            ></i>
          </p>
        </div>
      </div>

      <div class="bd">
        <ul v-show="Nav.category">
          <li @click="clickNavClind('category', '类型')">全部</li>

          <li
            v-for="item in 10"
            :key="item"
            @click="clickNavClind('category', item)"
          >
            {{ item }}
          </li>
        </ul>
        <ul v-show="Nav.country">
          <li>2</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>
        <ul v-show="Nav.year">
          <li>3</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
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
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
}

p:hover {
  background-color: rgb(240, 243, 245);
}
p.active {
  background-color: rgb(240, 243, 245);
}
p i {
  margin-left: 10px;
  font-size: 10px;
  transition: all 2s;
}

/* 类型选项部分 */
.bd {
  width: 100%;
}

.bd ul {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  background-color: rgb(240, 243, 245);
}
.bd ul li {
  background-color: white;
  color: black;
  height: 30px;
  padding: 0 20px;
  line-height: 30px;
}
</style>
