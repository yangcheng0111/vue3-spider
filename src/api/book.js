import request from '@/utils/request'
/**
 * 获取书籍分页数据
 *
 */
export const userBookPageService = (data) => {
  return request.post('/book/page', data)
}

/**
 * 获取书籍详情页数据数据
 *test
 */
export const userBookDetailsService = (id) => {
  console.log('书籍id查询接口', id)
  return {
    code: 1,
    msg: null,
    data: {
      id: 6978,
      bookUrl: 'https://book.douban.com/subject/6021440/',
      imgUrl: 'https://img9.doubanio.com/view/subject/s/public/s4669554.jpg',
      name: '黑客与画家',
      alias: 'Hackers and Painters: Big Ideas from the Computer Age',
      score: 8.7,
      commentsNum: 23164,
      author: '[美] Paul Graham',
      price: 49.0,
      time: '2011-4',
      press: '人民邮电出版社',
      translator: '阮一峰',
      producer: '图灵教育',
      subheading: null,
      pages: '264',
      binding: '平装',
      series: null,
      isbn: '9787115249494',
      introduction:
        '本书是硅谷创业之父Paul Graham 的文集，主要介绍黑客即优秀程序员的爱好和动机，讨论黑客成长、黑客对世界的贡献以及编程语言和黑客工作方法等所有对计算机时代感兴趣的人的一些话题。书中的内容不但有助于了解计算机编程的本质、互联网行业的规则，还会帮助读者了解我们这个时代，迫使读者独立思考。\n    \n本书适合所有程序员和互联网创业者，也适合一切对计算机行业感兴趣的读者。',
      authorImage:
        'https://img3.doubanio.com/view/personage/m/public/39b308e72b580b6a8239871621a482d3.jpg',
      role: '作者',
      author_introduction: null
    }
  }
}
