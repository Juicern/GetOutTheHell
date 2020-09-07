Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../mixins/link"), e = require("../common/component"), n = require("../common/utils");

e.VantComponent({
    relation: {
        name: "grid",
        type: "ancestor",
        current: "grid-item"
    },
    classes: [ "content-class", "icon-class", "text-class" ],
    mixins: [ t.link ],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    data: {
        viewStyle: ""
    },
    mounted: function() {
        this.updateStyle();
    },
    methods: {
        updateStyle: function() {
            if (this.parent) {
                var t = this.parent, e = t.data, i = t.children, o = e.columnNum, r = e.border, a = e.square, s = e.gutter, c = e.clickable, l = e.center, u = 100 / o + "%", d = [];
                if (d.push("width: " + u), a && d.push("padding-top: " + u), s) {
                    var p = n.addUnit(s);
                    d.push("padding-right: " + p), i.indexOf(this) >= o && d.push("margin-top: " + p);
                }
                var h = "";
                a && s && (h = "\n          right: " + (p = n.addUnit(s)) + ";\n          bottom: " + p + ";\n          height: auto;\n        "), 
                this.setData({
                    viewStyle: d.join("; "),
                    contentStyle: h,
                    center: l,
                    border: r,
                    square: a,
                    gutter: s,
                    clickable: c
                });
            }
        },
        onClick: function() {
            this.$emit("click"), this.jumpLink();
        }
    }
});