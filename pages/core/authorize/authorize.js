//js
var app = getApp().globalData
Page({
  data: {

  },
  onShow: function() {
    
  },
  bindGetUserInfo: function(e) {
    wx.getSetting({
      success: (response) => {
        console.log(typeof (response.authSetting))
        for (var i in response.authSetting)
        {
          console.log(response.authSetting[i])
          var t=response.authSetting[i]
        }
        console.log(typeof(t))
        if (t==true)
        {
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              console.log(res.userInfo.nickName)
              app.nicename = res.userInfo.nickName
             app.url= res.userInfo.avatarUrl
             app. gender = res.userInfo.gender ,
                wx.redirectTo({
                  url: '/pages/core/login/login',
           })
            },
          })
        }
        else{
           wx.showModal({
             content: '亲，你好像点错了~',
              showCancel:false
           })
        }
        
      },
     
    })


  }
       
})

