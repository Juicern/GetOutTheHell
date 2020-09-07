Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../common/component"), t = require("../common/utils");

e.VantComponent({
    relation: {
        name: "grid-item",
        type: "descendant",
        current: "grid"
    },
    props: {
        square: {
            type: Boolean,
            observer: "updateChildren"
        },
        gutter: {
            type: [ Number, String ],
            value: 0,
            observer: "updateChildren"
        },
        clickable: {
            type: Boolean,
            observer: "updateChildren"
        },
        columnNum: {
            type: Number,
            value: 4,
            observer: "updateChildren"
        },
        center: {
            type: Boolean,
            value: !0,
            observer: "updateChildren"
        },
        border: {
            type: Boolean,
            value: !0,
            observer: "updateChildren"
        }
    },
    data: {
        viewStyle: ""
    },
    created: function() {
        var e = this.data.gutter;
        e && this.setData({
            viewStyle: "padding-left: " + t.addUnit(e)
        });
    },
    methods: {
        updateChildren: function() {
            this.children.forEach(function(e) {
                e.updateStyle();
            });
        }
    }
});