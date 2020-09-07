Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../mixins/button"), o = require("../mixins/open-type");

e.VantComponent({
    mixins: [ t.button, o.openType ],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        description: String,
        round: {
            type: Boolean,
            value: !0
        },
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: !0
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: !0
        },
        closeOnClickAction: {
            type: Boolean,
            value: !0
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        onSelect: function(e) {
            var t = e.currentTarget.dataset.index, o = this.data.actions[t];
            !o || o.disabled || o.loading || (this.$emit("select", o), this.data.closeOnClickAction && this.onClose());
        },
        onCancel: function() {
            this.$emit("cancel");
        },
        onClose: function() {
            this.$emit("close");
        },
        onClickOverlay: function() {
            this.$emit("click-overlay"), this.onClose();
        }
    }
});