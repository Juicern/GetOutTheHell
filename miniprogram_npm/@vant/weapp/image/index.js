Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/utils"), t = require("../common/component"), i = require("../mixins/button"), o = require("../mixins/open-type"), s = {
    none: "center",
    fill: "scaleToFill",
    cover: "aspectFill",
    contain: "aspectFit",
    widthFix: "widthFix",
    heightFix: "heightFix"
};

t.VantComponent({
    mixins: [ i.button, o.openType ],
    classes: [ "custom-class", "loading-class", "error-class", "image-class" ],
    props: {
        src: {
            type: String,
            observer: function() {
                this.setData({
                    error: !1,
                    loading: !0
                });
            }
        },
        round: Boolean,
        width: {
            type: null,
            observer: "setStyle"
        },
        height: {
            type: null,
            observer: "setStyle"
        },
        radius: null,
        lazyLoad: Boolean,
        useErrorSlot: Boolean,
        useLoadingSlot: Boolean,
        showMenuByLongpress: Boolean,
        fit: {
            type: String,
            value: "fill",
            observer: "setMode"
        },
        showError: {
            type: Boolean,
            value: !0
        },
        showLoading: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        error: !1,
        loading: !0,
        viewStyle: ""
    },
    mounted: function() {
        this.setMode(), this.setStyle();
    },
    methods: {
        setMode: function() {
            this.setData({
                mode: s[this.data.fit]
            });
        },
        setStyle: function() {
            var t = this.data, i = t.width, o = t.height, s = t.radius, n = "";
            e.isDef(i) && (n += "width: " + e.addUnit(i) + ";"), e.isDef(o) && (n += "height: " + e.addUnit(o) + ";"), 
            e.isDef(s) && (n += "overflow: hidden;", n += "border-radius: " + e.addUnit(s) + ";"), 
            this.setData({
                viewStyle: n
            });
        },
        onLoad: function(e) {
            this.setData({
                loading: !1
            }), this.$emit("load", e.detail);
        },
        onError: function(e) {
            this.setData({
                loading: !1,
                error: !0
            }), this.$emit("error", e.detail);
        },
        onClick: function(e) {
            this.$emit("click", e.detail);
        }
    }
});