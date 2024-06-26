import { createPinia } from 'pinia'
//pinia持久化插件
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

export * from './modules/user'
export * from './modules/book'
export * from './modules/movie'
