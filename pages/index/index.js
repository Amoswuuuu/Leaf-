// index.js

Page({

  /**
   * 页面的初始数据
   */

  data: {
    notice:'欢迎打开木叶汇华，一木一叶，句句真情。在这里你可以匿名表白、校园吐槽、失物招领，更多新功能正在紧张开发中······',
    help_status: false,
  },
  tapHelp: function(e) {
    if (e.target.id == 'help') {
      this.hideHelp();
    }
  },
  showHelp: function(e) {
    this.setData({
      'help_status': true
    });
  },
  hideHelp: function(e) {
    this.setData({
      'help_status': false
    });
  },
  search: function() {
    wx.navigateTo({
      url: '/pages/core/search/search',
    })
  },
  create: function() {
    wx.navigateTo({
      url: '/pages/core/create/create',
    })
  },
  share: function() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    wx.request({
      url: 'https://www.gxfwz36524.com/api/index/resou',
      data: {

      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(e) {
        console.log(typeof(e.data))
        console.log(e.data[0]["name"])
        that.setData({
          maintext: e.data[0]["maintext"],
          name: e.data[0]["name"],
          image: e.data["image"]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})