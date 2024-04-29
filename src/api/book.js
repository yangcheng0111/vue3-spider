import request from '@/utils/request'
/**
 * 获取电影分页数据
 *
 */
export const userBookPageService = (data) => {
  return request.post('/book/page', data)
}
