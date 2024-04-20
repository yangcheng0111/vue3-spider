import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: () => import('@/views/index/index.vue')
        },
        {
          path: '/movie/page',
          component: () => import('@/views/movie/MoviePage.vue')
        },
        {
          path: '/movie/details',
          component: () => import('@/views/movie/MovieDetails.vue')
        },
        {
          path: '/book/page',
          component: () => import('@/views/book/BookPage.vue')
        },
        {
          path: '/book/details',
          component: () => import('@/views/book/BookDetails.vue')
        }
      ]
    }
  ]
})

export default router
