//index.js
//获取城市数据
const cityData = require('../../resource/cityData.js')
// const shareLike = require('../../common/shareLike.js')
const shareLikeIcon = cityData.shareLikeIcon;
const content = cityData.content;
//获取应用实例
const app = getApp()
const swiperImgSrc = [
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

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    swiperImgSrc: swiperImgSrc,
    shareLikeIcon: shareLikeIcon,
    content: content
  },
  /**
   * share-like icons click event
   */
  shareItem(e){
    const self = this;
    let pos = e.target.dataset.id
  //标记分享状态
  content[pos].shareFlag = !content[pos].shareFlag
  this.setData({
      //更新content内容
      content: content
    })
  },
keepItem(e) {
    const self = this;
    let pos = e.target.dataset.id;
    content[pos].keepFlag = !content[pos].keepFlag
    this.setData({
      content: content
    })
  },
likeItem(e) {
    const self = this;
    let pos = e.target.dataset.id;
    content[pos].likeFlag = !content[pos].likeFlag
    this.setData({
      content: content
    })
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
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
