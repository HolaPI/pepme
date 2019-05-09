const shareLikeIcon = [
  {
    id: 0,
    bfeSrc: "/images/share.png",
    aftSrc: "/images/share2.png"
  },
  {
    id: 1,
    bfeSrc: "/images/star.png",
    aftSrc: "/images/star2.png"
  },
  {
    id: 2,
    bfeSrc: "/images/like.png",
    aftSrc: "/images/like2.png"
  },
  {
    id: 3,
    bfeSrc: "/images/comment.png",
    aftSrc: "/images/comment2.png"
  }
]
//特别推荐
const special = [
  {
    id: 0,
    src: "https://www.nordicvisitor.com/images/sweden/countryside-and-natural-scenary.jpg",
    title: "Bayern, Germany: Welcome tourists from all over the world",
    text: "Der Freistaat Bayern ist mit mehr als 70500 Quadratkilometern das flächengrößte der 16 Länder in Deutschland und liegt in dessen Südosten.",
    continent: 'europe',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 234,
    comments: [
      {
        user: 'WEN',
        time: null,
        avatar: '/images/explore2.png',
        context: 'Nice place, wish to be there one day. Nice place, wish to be there one day. Nice place, wish to be there one day.'
      },
      {
        user: 'WXW',
        time: null,
        avatar: '/images/camping2.png',
        context: 'Dude, really a nice spot.'
      }
    ]
  },
  {
    id: 1,
    src: "https://farm2.staticflickr.com/1583/24911819103_6a4405b9d3_o.jpg",
    title: "Bayern, Germany: Welcome tourists from all over the world",
    text: "Der Freistaat Bayern ist mit mehr als 70500 Quadratkilometern das flächengrößte der 16 Länder in Deutschland und liegt in dessen Südosten.",
    continent: 'europe',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 1245,
    comments: [
      {
        user: 'WXW',
        time: null,
        avatar: '/images/camping2.png',
        context: 'Great, really a nice spot.'
      }
    ]
  },
  {
    id: 2,
    src: "http://europeanfocus.paintscapewordpresshost.net/wp-content/uploads/2011/05/CottagesAtSunset-copy.jpg",
    title: "Bayern, Germany: Welcome tourists from all over the world",
    text: "Der Freistaat Bayern ist mit mehr als 70500 Quadratkilometern das flächengrößte der 16 Länder in Deutschland und liegt in dessen Südosten.",
    continent: 'europe',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 432,
    comments: [
      {
        user: 'Xue',
        time: null,
        avatar: '/images/explore2.png',
        context: 'Nice place, wish to be there one day. Nice place, wish to be there one day. Nice place, wish to be there one day.'
      }
    ]
  }
]
//所有城市信息
const content = [
  {
    id: 0,
    src: "http://img.news.sina.com/life/p/2012/0710/U140P5029T2D485177F32DT20120711120217.jpg",
    title: "Bayern, Germany: Welcome tourists from all over the world",
    text: "Der Freistaat Bayern ist mit mehr als 70500 Quadratkilometern das flächengrößte der 16 Länder in Deutschland und liegt in dessen Südosten.",
    continent: 'europe',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 0
  },
  {
    id: 1,
    src: "http://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/cleanup/sampletrip/Aerial_View1.jpg",
    title: "Rio, Brazil: Welcome tourists from all over the world",
    text: "Rio de Janeiro is anchor to the Rio de Janeiro metropolitan area and the second-most populous municipality in Brazil and the sixth-most populous in the Americas.",
    continent: 'samerica',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 0
  },
  {
    id: 2,
    src: "http://images.china.cn/attachement/jpg/site1000/20150827/001fd04cef8217489eba10.jpg",
    title: "Shenzhen, China: Welcome tourists from all over the world",
    text: "Shenzhen is a major city in Guangdong Province, China; it forms part of the Pearl River Delta megalopolis, bordering Hong Kong, Huizhou and Dongguan.",
    continent: 'asia',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 0
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sydney_Opera_House_01.jpg/1200px-Sydney_Opera_House_01.jpg",
    title: "Sydney, Australia: Welcome tourists from all over the world",
    text: "Sydney, located on Australia's east coast, is the state capital of New South Wales and the most populous city in Australia and Oceania.",
    continent: 'oceania',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 0
  },
  {
    id: 4,
    src: "https://s4827.pcdn.co/wp-content/uploads/2017/11/sanfrancisco.jpg",
    title: "San Francisco, America: Welcome tourists from all over the world",
    text: "San Francisco, officially the City and County of San Francisco, is the cultural, commercial, and financial center of Northern California.",
    continent: 'namerica',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 0
  },
  {
    id: 5,
    src: "http://www.orangesmile.com/common/img_final_large/casablanca_sightseeing.jpg",
    title: "Casablanca, Morocco: Welcome tourists from all over the world",
    text: "Casablanca, located in the central-western part of Morocco and bordering the Atlantic Ocean, is the largest city in the Kingdom of Morocco.",
    continent: 'africa',
    shareFlag: false,
    keepFlag: false,
    likeFlag: false,
    ratings: 0
  }
]
module.exports = {
  shareLikeIcon,
  special,
  content
}