//msg.js
var app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  del: function(e) {
    console.log(e)

    var that = this;
    wx.request({
      url: 'https://www.gxfwz36524.com/api/index/del',
      data: {
        schoolnum: app.schoolnum,
        id: e.target.id
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(e) {
        wx.request({
          url: 'https://www.gxfwz36524.com/api/index/ownerlist',
          data: {
            schoolnum: app.schoolnum,

          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function(e) {
            console.log(e)
            that.setData({
              info: e.data
            })
          }

        })

      }

    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      time: app.t,
      schoolnum: app.id,
      name: app.nicename
    })

    var that = this;
    wx.request({
      url: 'https://www.gxfwz36524.com/api/index/ownerlist',
      data: {
        schoolnum: app.schoolnum,

      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(e) {
        console.log(e)
        that.setData({
          info: e.data
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