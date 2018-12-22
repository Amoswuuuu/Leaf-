// userCtr.js

var app = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    actions: [{
        name: '取消修改',
      },
      {
        name: '确认修改',
        color: '#0072ff'
      }
    ]
  },
  handleOpen() {
    this.setData({
      visible: true
    });
  },

  bindChange: function (e) {
    var id = e.currentTarget.id; // 获取当前表单元素Id
    var input = e.detail.value; // 获取当前表单元素输入框内容
    if (input) {
    } else {
      wx.showToast({
        title: '昵称不能为空',
        image:'/res/ico/error.png',
        duration: 4000
      })
    }
  },

  handleClick({ detail }) {
    const index = detail.index;
    console.log(detail)
    if (index == 0) {
      this.setData({
        visible: false
      })
    } else {
      //提交修改

    }
    this.setData({
      visible: false
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