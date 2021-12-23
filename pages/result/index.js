var t = require("../../utils/index.js"), a = getApp();

Page({
    data: {
        wxUserInfo: null,
        userInfo: null,
        id: "",
        name:'',
        school:'',
        location:'',
        year:'',
        month:'',
        date:'',
        hour:'',
        min:''
    },
    onLoad: function(t) {
        this.setData({
            wxUserInfo: a.globalData.wxUserInfo,
            userInfo: a.globalData.userInfo,
            name:a.globalData.name,
            school:a.globalData.school,
            location:a.globalData.location,
            month:a.globalData.month,
            date:a.globalData.date,
            hour:a.globalData.hour,
            min:a.globalData.min
        })
    },
});