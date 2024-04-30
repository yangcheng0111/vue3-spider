<script setup>
import { storeToRefs } from 'pinia'
import { useBookStore } from '@/stores/index'

const BookStore = useBookStore()
const { bookData } = storeToRefs(BookStore)
</script>

<template>
  <div class="content">
    <span class="pl">作者:</span>

    <span class="attrs"
      ><a href="#" rel="v:starring">{{ bookData.author }}</a>
    </span>
    <br />
    <span class="pl">出版社:</span>

    <span class="attrs"
      ><a href="#" rel="v:starring">{{ bookData.press }}</a>
    </span>

    <br />
    <span class="pl">出品方:</span>

    <span class="attrs"
      ><a href="#" rel="v:starring">{{ bookData.producer }}</a>
    </span>
    <br />
    <span class="pl">副标题:</span>

    <span class="attrs"
      ><a href="#" rel="v:starring">{{ bookData.subheading }}</a>
    </span>
    <br />
    <span class="pl">原作名:</span>

    <span class="attrs"
      ><a href="#" rel="v:starring">{{ bookData.alias }}</a>
    </span>
    <br />
    <span class="pl">译者:</span>

    <span class="attrs"
      ><a href="#" rel="v:starring">{{ bookData.translator }}</a>
    </span>
    <br />
    <span class="pl">出版年:</span>

    <span class="attrs">{{ bookData.time }}</span>
    <br />

    <span class="pl">页数:</span>

    <span class="attrs">{{ bookData.pages }}</span>
    <br />

    <span class="pl">定价:</span>

    <span class="attrs">{{ bookData.price }}</span>
    <br />

    <span class="pl">装帧:</span>

    <span class="attrs">{{ bookData.binding }}</span>
    <br />

    <span class="pl">ISBN:</span>

    <span class="attrs">{{ bookData.isbn }}</span>
  </div>
</template>

<style scoped>
.content {
  width: 400px;
  margin-left: 15px;
}
.content span {
  font-size: 13px;
  color: #666;
}
.content a {
  color: rgb(64, 182, 250);
}
.content a:hover {
  color: rgb(64, 182, 250, 0.5);
}
</style>
