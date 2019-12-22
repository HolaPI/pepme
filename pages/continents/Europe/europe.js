// pages/index/continents/Asia/asia.js
const cityData = require('../../../resource/cityData.js')
const shareLikeIcon = cityData.shareLikeIcon;
//过滤出亚洲城市
const content = cityData.content.filter(city => {
  return city.continent == 'europe';
});
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shareLikeIcon: shareLikeIcon,
    content: content
  },
  shareItem(e) {
    const self = this;
    let pos = e.target.dataset.id
    let ret = content.filter(city => {
      return city.id == pos
    })
    //标记分享状态
    ret[0].shareFlag = !ret[0].shareFlag
    this.setData({
      //更新content内容
      content: content
    })
    wx.vibrateShort({})
  },
  keepItem(e) {
    const self = this;
    let pos = e.target.dataset.id;
    let ret = content.filter(city => {
      return city.id == pos
    })
    ret[0].keepFlag = !ret[0].keepFlag
    this.setData({
      content: content
    })
    wx.vibrateShort({})
  },
  likeItem(e) {
    const self = this;
    let pos = e.target.dataset.id;
    let ret = content.filter(city => {
      return city.id == pos
    })
    ret[0].likeFlag = !ret[0].likeFlag
    this.setData({
      content: content
    })
    wx.vibrateShort({})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})