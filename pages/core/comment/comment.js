// comment.js

var app = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/res/img/b1.jpg',
      '/res/img/b2.jpg',
      '/res/img/b3.jpg'
    ],

    info: [],
    ellipsis: false, // 文字是否收起，默认收起
  },

  imgPre: function() {
    wx.previewImage({
      urls: [],
    })
  },

  ellipsis: function() {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    app.id = options.id
    // wx.setNavigationBarTitle({
    //   title:/* amount +*/ '10条评论'
    // })
    var that = this;
    wx.request({
      url: "https://www.gxfwz36524.com/api/index/showtitle",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        id: app.id,
        openid: app.openid
      },
      success: function(e) {
        wx.request({
          url: "https://www.gxfwz36524.com/api/index/showpic",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          data: {
            id: app.id,
            openid: app.openid
          },
          success: function(e) {
            console.log("dsads")
            console.log(e)
            that.setData({
              pic: e.data
            })
          }
        })

        console.log("dsds")
        console.log(e)
        that.setData({
          title: e.data.maintext,
          name: e.data.name
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  formSubmit: function(e) {
    var that = this
    console.log(e)
    if (e.detail.value.comment == "") {
      wx.showModal({
        content: '请输入评论内容',
        showCancel: false
      })
      return false;
    }



    wx.request({
      url: "https://www.gxfwz36524.com/api/index/commentadd",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        contentid: app.id,
        commentcontent: e.detail.value.comment,
        commentschoolnum: app.schoolnum,
        commenter: app.nicename
      },
      success: function(e) {
        wx.request({
          url: "https://www.gxfwz36524.com/api/index/commentshow",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          data: {
            id: app.id
          },
          success: function(res) {
            console.log("dsds")
            console.log(res)
            that.setData({
              info: res.data
            })
          }
        })
        console.log(e)
        wx.showModal({
          content: '添加成功',
          showCancel: false
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    wx.request({
      url: "https://www.gxfwz36524.com/api/index/commentshow",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: {
        id: app.id
      },
      success: function(e) {
        console.log(e.data)
        console.log(typeof(e.data))
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
    //显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: 'https://www.gxfwz36524.com/api/index/commentshow',
      method: 'POST',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      data: {
        id: app.id
      },
      success: function(e) {
        console.log(e.data)
        console.log(typeof(e.data))
        that.setData({
          info: e.data
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