Object.defineProperty(exports, "__esModule", {
    value: !0
}), require("../common/component").VantComponent({
    relation: {
        name: "row",
        type: "ancestor",
        current: "col"
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        viewStyle: ""
    },
    methods: {
        setGutter: function(e) {
            var t = e / 2 + "px", o = e ? "padding-left: " + t + "; padding-right: " + t + ";" : "";
            o !== this.data.viewStyle && this.setData({
                viewStyle: o
            });
        }
    }
});