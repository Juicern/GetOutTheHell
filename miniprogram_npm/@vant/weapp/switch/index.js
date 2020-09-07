Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../common/color");

e.VantComponent({
    field: !0,
    classes: [ "node-class" ],
    props: {
        checked: {
            type: null,
            observer: function(e) {
                var t = this.getLoadingColor(e);
                this.setData({
                    value: e,
                    loadingColor: t
                });
            }
        },
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: "30px"
        },
        activeValue: {
            type: null,
            value: !0
        },
        inactiveValue: {
            type: null,
            value: !1
        }
    },
    created: function() {
        var e = this.data.checked, t = this.getLoadingColor(e);
        this.setData({
            value: e,
            loadingColor: t
        });
    },
    methods: {
        getLoadingColor: function(e) {
            var a = this.data, i = a.activeColor, o = a.inactiveColor;
            return e ? i || t.BLUE : o || t.GRAY_DARK;
        },
        onClick: function() {
            var e = this.data, t = e.activeValue, a = e.inactiveValue;
            if (!this.data.disabled && !this.data.loading) {
                var i = this.data.checked === t ? a : t;
                this.$emit("input", i), this.$emit("change", i);
            }
        }
    }
});