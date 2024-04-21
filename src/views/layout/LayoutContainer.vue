<script setup>
import ShortCut from './components/ShortCut.vue'
import HeaderCut from './components/HeaderCut.vue'

import Foonter from './components/Foonter.vue'
</script>

<template>
  <ShortCut></ShortCut>
  <HeaderCut></HeaderCut>

  <router-view> </router-view>
  <Foonter></Foonter>
</template>
