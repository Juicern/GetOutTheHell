Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), o = require("../common/color");

e.VantComponent({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        trackColor: String,
        showPivot: {
            type: Boolean,
            value: !0
        },
        color: {
            type: String,
            value: o.BLUE
        },
        textColor: {
            type: String,
            value: "#fff"
        },
        strokeWidth: {
            type: null,
            value: 4
        }
    }
});