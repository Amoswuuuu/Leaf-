Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShareAppMessage: function() {
    return {
      title: 'Leaf+',
      desc: '表白、吐槽、失物招领总有一个适合你',
      path: '/pages/user/user',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      }
    };
  },
  pay() {
    let that = this
    wx.previewImage({
      urls: ["#"],
    })
    console.log('payPreview success')
  },
  copy() {
    let that = this
    wx.setClipboardData({
      data: '942926364',
      success() {
        console.log('success')
      }
    })
    wx.getClipboardData({
      success(res) {
        console.log(res.data)
      }
    })
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