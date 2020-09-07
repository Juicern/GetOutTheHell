var n = require("./utils/index.js");

App({
    globalData: {
        openId: null,
        wxUserInfo: null,
        userInfo: null,
        permission: null,
        isMaster: !1,
        isStudent: !1,
        organ: [],
        bathhouse: null,
        error: !1,
        sessionKey: null,
        name:'',
        school:'',
        location:'',
        year:'2020',
        month:'',
        date:'',
        hour:'',
        min:''
    },
    onShow: function(n) {
        this.getOpenId(), wx.setKeepScreenOn({
            keepScreenOn: !0
        });
    },
    getOpenId: function() {
        var e = this;
        wx.login({
            success: function(o) {
                o.code && (0, n.Request)(n.Api.getOpenId, {
                    code: o.code,
                    appid: "wx0f11869b9dfd9a48",
                    secret: "86ae54a75085c6530e015c53158d6005",
                    grantType: "authorization_code"
                }).then(function(n) {
                    e.globalData.sessionKey = n.session_key, e.globalData.openId = n.openid, e.getUserInfo();
                }).catch(function(n) {
                    e.globalData.error = !0, e.loadFinish();
                });
            },
            fail: function() {
                e.globalData.error = !0, e.loadFinish();
            }
        });
    },
    getUserInfo: function() {
        var n = this;
        wx.getSetting({
            success: function(e) {
                wx.getUserInfo({
                    success: function(e) {
                        n.globalData.wxUserInfo = e.userInfo, n.loadFinish();
                    },
                    fail: function() {
                        n.loadFinish();
                    }
                });
            }
        });
    },
    loadFinish: function() {
        this.onLoadFinish && this.onLoadFinish(this.globalData);
    }
});