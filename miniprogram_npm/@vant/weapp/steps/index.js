Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../common/color");

e.VantComponent({
    classes: [ "desc-class" ],
    props: {
        icon: String,
        steps: Array,
        active: Number,
        direction: {
            type: String,
            value: "horizontal"
        },
        activeColor: {
            type: String,
            value: t.GREEN
        },
        inactiveColor: {
            type: String,
            value: t.GRAY_DARK
        },
        activeIcon: {
            type: String,
            value: "checked"
        },
        inactiveIcon: String
    },
    methods: {
        onClick: function(e) {
            var t = e.currentTarget.dataset.index;
            this.$emit("click-step", t);
        }
    }
});