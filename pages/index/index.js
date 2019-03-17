//index.js
//获取应用实例
const app = getApp()
var swiperImgSrc = [
  {
    id: 0,
    src: "https://www.nordicvisitor.com/images/sweden/countryside-and-natural-scenary.jpg"
  },
  {
    id: 1,
    src: "https://farm2.staticflickr.com/1583/24911819103_6a4405b9d3_o.jpg"
  },
  {
    id: 2,
    src: "http://europeanfocus.paintscapewordpresshost.net/wp-content/uploads/2011/05/CottagesAtSunset-copy.jpg"
  }
]
var shareLikeBefore = [
    [
      {
        id: 0,
        src: "/images/share.png"
      },
      {
        id: 1,
        src: "/images/star.png"
      },
      {
        id: 2,
        src: "/images/like.png"
      }
  ],
  [
    {
      id: 0,
      src: "/images/share2.png"
    },
    {
      id: 1,
      src: "/images/star2.png"
    },
    {
      id: 2,
      src: "/images/like2.png"
    }
  ]
]
var shareLikeAfter = [
  {
    id: 0,
    src: "/images/share2.png"
  },
  {
    id: 1,
    src: "/images/star2.png"
  },
  {
    id: 2,
    src: "/images/like2.png"
  },
]
var content = [
  {
    id : 0,
    src: "http://img.news.sina.com/life/p/2012/0710/U140P5029T2D485177F32DT20120711120217.jpg",
    title: "Bayern, Germany: Welcome tourists from all over the world",
    text: "Der Freistaat Bayern ist mit mehr als 70500 Quadratkilometern das flächengrößte der 16 Länder in Deutschland und liegt in dessen Südosten."
  },
  {
    id: 1,
    src: "http://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/cleanup/sampletrip/Aerial_View1.jpg",
    title: "Rio, Brazil: Welcome tourists from all over the world",
    text: "Rio de Janeiro is anchor to the Rio de Janeiro metropolitan area and the second-most populous municipality in Brazil and the sixth-most populous in the Americas."
  },
  {
    id: 2,
    src: "http://images.china.cn/attachement/jpg/site1000/20150827/001fd04cef8217489eba10.jpg",
    title: "Shenzhen, China: Welcome tourists from all over the world",
    text: "Shenzhen is a major city in Guangdong Province, China; it forms part of the Pearl River Delta megalopolis, bordering Hong Kong, Huizhou and Dongguan."
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Sydney_Opera_House_01.jpg/1200px-Sydney_Opera_House_01.jpg",
    title: "Sydney, Australia: Welcome tourists from all over the world",
    text: "Sydney, located on Australia's east coast, is the state capital of New South Wales and the most populous city in Australia and Oceania."
  }
]
var shareLikeFlag = false
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperImgSrc: swiperImgSrc,
    shareLikeBefore: shareLikeBefore,
    shareLikeAfter: shareLikeAfter,
    shareLikeFlag : shareLikeFlag,
    content: content
  },
  shareLike(e){
    var pos = e.target.dataset.id[0]
    console.log(pos)
    shareLikeFlag = !shareLikeFlag
    this.setData({
      shareLikeFlag : shareLikeFlag
      
    })
    // console.log(shareLikeBefore[pos].src)
    // console.log(shareLikeAfter[pos].src)
    // e.target.src =  shareLikeAfter[pos].src
    // this.setData({
    //   shareLikeBefore: shareLikeBefore
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onPullDownRefresh(){
    setTimeout(function(){
      console.log('Here we see the fantastic world')
    }, 2000)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
