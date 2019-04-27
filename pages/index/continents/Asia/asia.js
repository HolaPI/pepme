// pages/index/continents/Asia/asia.js
const cityData = require('../../../../resource/cityData.js')
const shareLikeIcon = cityData.shareLikeIcon;
const content = cityData.content;
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