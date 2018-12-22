// create.js

import {
  $init,
  $digest
} from '../../../utils/common.util.js'
var util = require('../../../utils/upLoad.js')
var app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['匿名表白', '校园吐槽', '失物招领','兼职信息','跳蚤市场'],
    index: 0,
    images: [],
    id: '',
    flag: 0

  },
  //picker传值
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //字数限制
  bindWordLimit: function(e) {
    var value = e.detail.value,
      len = parseInt(value.length);

    if (len > this.data.noteMaxLen) return;

    this.setData({
      currentNoteLen: len //当前字数
      //limitNoteLen: this.data.noteMaxLen - len //剩余字数
    });
  },
  //switch设置
  onChange(event) {
    console.log(typeof(event.detail.value))
    if (event.detail.value == true)
      app.niming = 1
    else
      app.niming = 0;
    const detail = event.detail;
    console.log(app.niming)
    this.setData({
      'switch1': detail.value
    })

  },

  //button事件
  handleClick: function() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    $init(this)
  },
  removeImage(e) {
    const idx = e.target.dataset.idx
    this.data.images.splice(idx, 1)
    $digest(this)
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx], //当前预览的图片
      urls: images, //所有要预览的图片
    })
  },

  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        console.log(res)
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        this.data.images = images.length <= 3 ? images : images.slice(0, 3)
        $digest(this)
      }
    })
  },
  upload: function() {
    var that = this
    for (var i = 0; i < this.data.images.length; i++) {
      wx.uploadFile({
        url: 'https://www.gxfwz36524.com/api/index/addfile',
        filePath: this.data.images[i],
        name: 'file',
        formData: {
          id: this.data.id,
          openid: app.openid,
        },
        success: function(res) {
          console.log(res)
          if (res) {
            wx.showToast({
              title: '提交成功~！',
              duration: 3000
            });
          }
        }
      })
    }
  },
  formSubmit: function(re) {
    var that = this
    if (re.detail.value.text == '') {
      wx.showModal({
        content: '请输入内容',
        showCancel: false
      })
      return false;
    }

    wx.request({
      url: 'https://www.gxfwz36524.com/TextScanSample.php',
      data: {},
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        content: re.detail.value.text
      },
      success: function(e) {
        if (e.data == "fail") {
          wx.showModal({
            content: '上传文字不合法',
            showCancel: false
          })
        } else {
          wx.request({
            url: 'https://www.gxfwz36524.com/api/index/add',
            data: {
              pack: re.detail.value.pack,
              text: re.detail.value.text,
              niming: app.niming,
              schoolnum: app.schoolnum,
              name: app.nicename
            },
            method: 'POST',
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function(e) {
              console.log(e)
              that.data.id = e.data;
              console.log(that.data.id);
              console.log(that.data.images)
              if (that.data.images) {
                that.upload();
              }
              console.log("find")
              wx.switchTab({
                url: '../../../pages/find/find',
              })

            }
          })

        }
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
    app.niming = 0
    wx.request({
      url: 'https://www.gxfwz36524.com/api/index/getaccesstoken',
      data: {},
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(e) {
        console.log("acc")
        console.log(e)
        app.getaccesstoken = e.data.access_token
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