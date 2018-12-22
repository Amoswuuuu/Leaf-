// find.js

var app = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id: 0, 'type': 'nmbb', name: '匿名表白' },
      { id: 1, 'type': 'xytc', name: '校园吐槽' },
      { id: 2, 'type': 'swzl', name: '失物招领' },
      { id: 3, 'type': 'jzxx', name: '兼职信息' },
      { id: 4, 'type': 'tzsc', name: '跳蚤市场' },
      // { id: 5, 'type': 'hdbm', name: '活动报名' }
    ],
    info: [],
    img: '/res/ico/like.png'
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
  like: function(e) {
    var that = this;
    console.log(e.currentTarget.id)
    console.log("dsads")
    for (var i = 0; i < this.data.info.length; i++) {
      if (this.data.info[i].id == e.currentTarget.id) {
        var index = i;
        break;
      }
    }
    console.log(index)
    var condtion = this.data.info[index].condtion;
    var zanshu = this.data.info[index];
    var infodata = this.data.info;
    console.log(this.data.info[index].condtion)
    if (this.data.info[index].condtion == undefined || this.data.info[index].condtion == false) {
      this.data.info[index].condtion = true,
        wx.request({
          url: 'https://www.gxfwz36524.com/api/index/addzan',
          data: {
            id: e.currentTarget.id,
            schoolnum: app.schoolnum,
            name: app.nicename
          },
          method: 'POST',
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          success: function(e) {
            console.log(zanshu)
            zanshu.zanshu = e.data
            console.log(infodata)
            console.log(e)
            that.setData({
              info: infodata
            })
          }
        })

    } else {
      this.data.info[index].condtion = false;
      wx.request({
        url: 'https://www.gxfwz36524.com/api/index/jianzan',
        data: {
          id: e.currentTarget.id,
          schoolnum: app.schoolnum,
          name: app.nicename
        },
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(e) {

          zanshu.zanshu = e.data
          console.log(infodata)
          console.log(e)
          that.setData({
            info: infodata
          })
        }
      })
    }
  },
  comment: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/core/comment/comment?id=' + e.target.id,
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
    var that = this;
    wx.request({
      url: 'https://www.gxfwz36524.com/api/index/show',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.data.info = res.data;
        that.setData({
          info: res.data
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
    //显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://www.gxfwz36524.com/api/index/show',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.data.info = res.data;
        that.setData({
          info: res.data
        })
      }
    })
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