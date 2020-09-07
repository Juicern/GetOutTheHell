Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = require("../common/component"), o = require("../mixins/button"), t = require("../mixins/open-type"), e = require("../common/color");

n.VantComponent({
    mixins: [ o.button, t.openType ],
    props: {
        show: {
            type: Boolean,
            observer: function(n) {
                !n && this.stopLoading();
            }
        },
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: null,
        zIndex: {
            type: Number,
            value: 2e3
        },
        confirmButtonText: {
            type: String,
            value: "确认"
        },
        cancelButtonText: {
            type: String,
            value: "取消"
        },
        confirmButtonColor: {
            type: String,
            value: e.BLUE
        },
        cancelButtonColor: {
            type: String,
            value: e.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            value: !0
        },
        overlay: {
            type: Boolean,
            value: !0
        },
        transition: {
            type: String,
            value: "scale"
        }
    },
    data: {
        loading: {
            confirm: !1,
            cancel: !1
        }
    },
    methods: {
        onConfirm: function() {
            this.handleAction("confirm");
        },
        onCancel: function() {
            this.handleAction("cancel");
        },
        onClickOverlay: function() {
            this.onClose("overlay");
        },
        handleAction: function(n) {
            var o;
            this.data.asyncClose && this.setData((o = {}, o["loading." + n] = !0, o)), this.onClose(n);
        },
        close: function() {
            this.setData({
                show: !1
            });
        },
        stopLoading: function() {
            this.setData({
                loading: {
                    confirm: !1,
                    cancel: !1
                }
            });
        },
        onClose: function(n) {
            this.data.asyncClose || this.close(), this.$emit("close", n), this.$emit(n, {
                dialog: this
            });
            var o = this.data["confirm" === n ? "onConfirm" : "onCancel"];
            o && o(this);
        }
    }
});