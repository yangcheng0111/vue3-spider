import { createApp } from 'vue'
import pinia from './stores'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { MotionPlugin } from '@vueuse/motion'

import { lazyPlugin } from './directives'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(MotionPlugin)

app.mount('#app')
