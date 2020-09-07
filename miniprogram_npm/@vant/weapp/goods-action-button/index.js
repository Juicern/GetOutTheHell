Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), e = require("../mixins/link"), n = require("../mixins/button"), i = require("../mixins/open-type");

t.VantComponent({
    mixins: [ e.link, n.button, i.openType ],
    relation: {
        type: "ancestor",
        name: "goods-action",
        current: "goods-action-button"
    },
    props: {
        text: String,
        color: String,
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        type: {
            type: String,
            value: "danger"
        }
    },
    mounted: function() {
        this.updateStyle();
    },
    methods: {
        onClick: function(t) {
            this.$emit("click", t.detail), this.jumpLink();
        },
        updateStyle: function() {
            var t = this.parent.children, e = void 0 === t ? [] : t, n = e.length, i = e.indexOf(this);
            this.setData({
                isFirst: 0 === i,
                isLast: i === n - 1
            });
        }
    }
});