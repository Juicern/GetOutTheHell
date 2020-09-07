Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), e = require("../common/color");

t.VantComponent({
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: "danger"
        },
        color: {
            type: String,
            value: e.WHITE
        },
        duration: {
            type: Number,
            value: 3e3
        },
        zIndex: {
            type: Number,
            value: 110
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        show: !1
    },
    created: function() {
        var t = wx.getSystemInfoSync().statusBarHeight;
        this.setData({
            statusBarHeight: t
        });
    },
    methods: {
        show: function() {
            var t = this, e = this.data, a = e.duration, o = e.onOpened;
            clearTimeout(this.timer), this.setData({
                show: !0
            }), wx.nextTick(o), a > 0 && a !== 1 / 0 && (this.timer = setTimeout(function() {
                t.hide();
            }, a));
        },
        hide: function() {
            var t = this.data.onClose;
            clearTimeout(this.timer), this.setData({
                show: !1
            }), wx.nextTick(t);
        },
        onTap: function(t) {
            var e = this.data.onClick;
            e && e(t.detail);
        }
    }
});