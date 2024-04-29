<script setup>
import { useMovieStore } from '@/stores/index'

const data = useMovieStore().movieData
// 演员解析列表
const starring = data.starring.split('/')
// 编辑解析列表
const screenwriter = data.screenwriter.split('/')
// 上映日期解析列表
const time = data.time.split('/')
</script>

<template>
  <div class="content">
    <span class="pl">导演:</span>

    <span class="attrs"
      ><a href="#" rel="v:starring">{{ data.director }}</a>
    </span>
    <br />
    <span class="pl">编剧:</span>

    <span class="attrs"
      ><span v-for="name in screenwriter" :key="name"
        ><a href="#">{{ name }}</a>
      </span>
    </span>
    <br />

    <span class="actor">
      <span class="pl">主演:</span>

      <span class="attrs"
        ><span v-for="name in starring" :key="name"
          ><a href="#">{{ name }}</a>
        </span>
      </span>
    </span>

    <br />
    <span class="pl">类型:</span>

    <span class="attrs">
      <span v-for="item in data.categoryList" :key="item.id">
        {{ item.name }}</span
      >
    </span>
    <br />
    <span class="pl">制片国家/地区:</span>

    <span class="attrs">
      <span>{{ data.country }}</span>
    </span>
    <br />

    <span class="pl">语言:</span>

    <span class="attrs">
      <span>{{ data.language }}</span>
    </span>
    <br />

    <span class="pl">上映日期:</span>
    <span class="attrs">
      <span v-for="name in time" :key="name"> {{ name }}</span>
    </span>
    <br />

    <span class="pl">片长:</span>
    <span class="attrs">
      <span>{{ data.runtime }}</span>
    </span>
    <br />

    <span class="pl">又名:</span>
    <span class="attrs">
      <span>{{ data.hotReviews }}</span>
    </span>
    <br />

    <span class="pl">IMDb:</span>
    <span class="attrs">
      <span>{{ data.imdb }}</span>
    </span>
    <br />
  </div>
</template>

<style scoped>
.content {
  width: 400px;
  margin-left: 15px;
  margin-bottom: 30px;
}
.content span {
  font-size: 13px;
}
.content span.pl {
  color: #666;
}
.content span.attrs span:not(:first-child)::before {
  content: '/';
  margin: 0 4px;
  color: #666;
}

.content a {
  color: rgb(64, 182, 250);
}
.content a:hover {
  color: rgb(64, 182, 250, 0.5);
}
</style>
