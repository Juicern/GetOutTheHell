//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开始制作',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:'',
    school:'',
    location:'',
    year:'2020',
    month:'',
    date:'',
    hour:'',
    min:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  name:function(e){
    console.log(e)
    this.setData({
      name:e.detail.value
    })
    app.globalData.name=e.detail.value
  },

  location:function(e){
    console.log(e)
    this.setData({
      location:e.detail.value
    })
    app.globalData.location=e.detail.value
  },

  school:function(e){
    console.log(e)
    this.setData({
      school:e.detail.value
    })
    app.globalData.school=e.detail.value
  },

  year:function(e){
    console.log(e)
    this.setData({
      year:e.detail.value
    })
    app.globalData.year=e.detail.value
  },

  month:function(e){
    console.log(e)
    this.setData({
      month:e.detail.value
    })
    app.globalData.month=e.detail.value
  },

  date:function(e){
    console.log(e)
    this.setData({
      date:e.detail.value
    })
    app.globalData.date=e.detail.value
  },

  hour:function(e){
    console.log(e)
    this.setData({
      hour:e.detail.value
    })
    app.globalData.hour=e.detail.value
  },

  min:function(e){
    console.log(e)
    this.setData({
     min:e.detail.value
    })
    app.globalData.min=e.detail.value
  },



  goresult:function(){
    wx.navigateTo({
      url: '../result/index',
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
