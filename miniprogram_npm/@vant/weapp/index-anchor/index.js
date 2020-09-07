Object.defineProperty(exports, "__esModule", {
    value: !0
}), require("../common/component").VantComponent({
    relation: {
        name: "index-bar",
        type: "ancestor",
        current: "index-anchor"
    },
    props: {
        useSlot: Boolean,
        index: null
    },
    data: {
        active: !1,
        wrapperStyle: "",
        anchorStyle: ""
    },
    methods: {
        scrollIntoView: function(e) {
            var t = this;
            this.getBoundingClientRect().then(function(n) {
                wx.pageScrollTo({
                    duration: 0,
                    scrollTop: e + n.top - t.parent.data.stickyOffsetTop
                });
            });
        },
        getBoundingClientRect: function() {
            return this.getRect(".van-index-anchor-wrapper");
        }
    }
});