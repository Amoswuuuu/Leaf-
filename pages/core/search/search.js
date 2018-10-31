Page({

  /**
   * 页面的初始数据
   */
  data: {
    isclose: true,
    searchvalue: "",
    searchsubmit: true,
    searchreset: false,
    hotsearch: [{
      message: "匿名表白"
    }, {
      message: "校园吐槽"
    }, {
      message: "失物招领"
    }, {
      message: "工学"
    }, {
      message: "文学"
    }, {
      message: "理学"
    }, {
      message: "教育法政"
    }, {
      message: "经管"
    }, {
      message: "传媒"
    }, {
      message: "艺术"
    }, {
      message: "外语"
    }],
    falg: true,
    hotsearch1: [{
      message: "工学"
    }, {
      message: "文学"
    }, {
      message: "理学"
    }, {
      message: "教育法政"
    }, {
      message: "经管"
    }, {
      message: "传媒"
    }, {
      message: "艺术"
    }, {
      message: "外语"
    }, {
      message: "匿名表白"
    }, {
      message: "校园吐槽"
    }, {
      message: "失物招领"
    }],
    hotsearch2: [{
      message: "新生杯"
    }, {
      message: "才艺大赛"
    }, {
      message: "负一楼食堂"
    }, {
      message: "二楼食堂"
    }, {
      message: "菜鸟驿站"
    }, {
      message: "操场"
    }, {
      message: "篮球场"
    }, {
      message: "轮滑场"
    }, {
      message: "排球场"
    }, {
      message: "3号宿舍楼"
    }, {
      message: "9号宿舍楼"
    }],
    historydata: [],
    historydatashow: false,
    searchresult: false,
    inputsearch: "", //输入框内的值,
  },
  /*输入框输入后触发，用于联想搜索和切换取消确认*/
  inputoperation: function(e) {
    this.setData({
      searchsubmit: false,
      searchreset: true,
      isclose: false,
      searchvalue: e.detail.value
      // searchvalue: this.data.searchvalue.concat(e.detail.value)
    })
  },
  //点击X
  resetinput: function() {
    this.setData({
      searchsubmit: true,
      searchreset: false,
      isclose: true,
      inputsearch: "",
      searchresult: false


    })
  },
  /*取消搜索 */
  cancelsearch: function() {
    wx.navigateBack({
      url: '../index/index'
    })
  },
  /*换一批操作 */
  changeother: function() {
    this.setData({
      falg: !this.data.falg
    })
  },
  /*点击搜索按钮触发*/
  searchbegin: function() {
    let that = this
    // wx.getStorage({
    //   key: 'historydata',
    //   success: function (res) {
    //     that.setData({
    //       historydata: res.data
    //     })
    //   }
    // })
    wx.setStorage({
      key: "historydata",
      data: that.data.historydata.concat(that.data.searchvalue)
    })
    console.log(that.data.historydata)
    //请求数据调页面
    // wx.navigateTo({
    //   url: '../detail/detail'
    // })
    this.setData({
      searchresult: true,
    })


  },
  //点击进入详情页
  gotodetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 历史搜索
    let that = this
    wx.getStorage({
      key: 'historydata',
      success: function(res) {
        console.log(res.data)
        that.setData({
          historydatashow: true,
          historydata: res.data
        })
      }
    })
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