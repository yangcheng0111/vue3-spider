import { useIntersectionObserver } from '@vueuse/core'

// 懒加载插件
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
          // 进入可视区域
          if (isIntersecting) {
            el.src = binding.value
          }
        })
      }
    })
  }
}
