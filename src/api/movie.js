import request from '@/utils/request'
/**
 * 获取电影分页数据
 *
 */
export const userMoviePageService = (data) => {
  return request.post('/movie/page', data)
}

/**
 * 获取电影详情页数据数据
 *test
 */
export const userMovieDetailsService = (id) => {
  console.log('电影id查询接口', id)
  return {
    code: 1,
    msg: null,
    data: {
      id: 1,
      movieUrl: 'https://movie.douban.com/subject/1292052/',
      imgUrl:
        'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
      name: '肖申克的救赎',
      alias: 'TheShawshankRedemption',
      score: 9.7,
      commentsNum: 2924661,
      hotReviews: '希望让人自由。',
      director: '弗兰克·德拉邦特',
      starring:
        '蒂姆·罗宾斯/摩根·弗里曼/鲍勃·冈顿/威廉姆·赛德勒/克兰西·布朗/吉尔·贝罗斯/马克·罗斯顿/詹姆斯·惠特摩/杰弗里·德曼/拉里·布兰登伯格/尼尔·吉恩托利/布赖恩·利比/大卫·普罗瓦尔/约瑟夫·劳格诺/祖德·塞克利拉/保罗·麦克兰尼/芮妮·布莱恩/阿方索·弗里曼/V·J·福斯特/弗兰克·梅德拉诺/马克·迈尔斯/尼尔·萨默斯/耐德·巴拉米/布赖恩·戴拉特/唐·麦克马纳斯',
      year: '1994',
      country: '美国',
      language: ' 英语',
      time: '1994-09-10(多伦多电影节)/1994-10-14(美国)',
      runtime: '142分钟',
      synopsis:
        '\n    一场谋杀案使银行家安迪（蒂姆•罗宾斯TimRobbins饰）蒙冤入狱，谋杀妻子及其情人的指控将囚禁他终生。在肖申克监狱的首次现身就让监狱“大哥”瑞德（摩根•弗里曼MorganFreeman饰）对他另眼相看。瑞德帮助他搞到一把石锤和一幅女明星海报，两人渐成患难之交。很快，安迪在监狱里大显其才，担当监狱图书管理员，并利用自己的金融知识帮助监狱官避税，引起了典狱长的注意，被招致麾下帮助典狱长洗黑钱。偶然一次，他得知一名新入狱的小偷能够作证帮他洗脱谋杀罪。燃起一丝希望的安迪找到了典狱长，希望他能帮自己翻案。阴险伪善的狱长假装答应安迪，背后却派人杀死小偷，让他唯一能合法出狱的希望泯灭。沮丧的安迪并没有绝望，在一个电闪雷鸣的风雨夜，一场暗藏几十年的越狱计划让他自我救赎，重获自由！老朋友瑞德在他的鼓舞和帮助下，也勇敢地奔向自由。\n\n\n    本片获得1995年奥...\n',
      imdb: ' tt0111161',
      screenwriter: '弗兰克·德拉邦特/斯蒂芬·金',
      characterList: [
        {
          id: 1,
          imgUrl: 'https://img1.doubanio.com/view/celebrity/m/public/p230.jpg',
          name: '弗兰克·德拉邦特',
          role: '导演',
          movieId: '1'
        },
        {
          id: 2,
          imgUrl:
            'https://img9.doubanio.com/view/celebrity/m/public/p17525.jpg',
          name: '蒂姆·罗宾斯',
          role: '饰 安迪·杜佛兰 Andy Dufresne',
          movieId: '1'
        },
        {
          id: 3,
          imgUrl:
            'https://img3.doubanio.com/view/celebrity/m/public/p34642.jpg',
          name: '摩根·弗里曼',
          role: "饰 艾利斯·波伊德·“瑞德”·瑞丁 Ellis Boyd 'Red' Redding",
          movieId: '1'
        },
        {
          id: 4,
          imgUrl: 'https://img3.doubanio.com/view/celebrity/m/public/p5837.jpg',
          name: '鲍勃·冈顿',
          role: '饰 监狱长山姆·诺顿 Warden Norton',
          movieId: '1'
        },
        {
          id: 5,
          imgUrl: 'https://img3.doubanio.com/view/celebrity/m/public/p7827.jpg',
          name: '威廉姆·赛德勒',
          role: '饰 海伍德 Heywood',
          movieId: '1'
        },
        {
          id: 6,
          imgUrl:
            'https://img1.doubanio.com/view/personage/m/public/af679543a3cc6a54afe91023a73b7348.jpg',
          name: '克兰西·布朗',
          role: '饰 上尉哈德利 Captain Hadley',
          movieId: '1'
        }
      ],
      categoryList: [
        {
          id: 5,
          type: 1,
          name: '犯罪'
        },
        {
          id: 1,
          type: 1,
          name: '剧情'
        }
      ]
    }
  }
}
