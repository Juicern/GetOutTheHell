Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function() {
    return new Promise(function(t) {
        return setTimeout(t, 20);
    });
};

require("../common/component").VantComponent({
    classes: [ "title-class", "content-class" ],
    relation: {
        name: "collapse",
        type: "ancestor",
        current: "collapse-item"
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: !0
        },
        isLink: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        contentHeight: 0,
        expanded: !1,
        transition: !1
    },
    mounted: function() {
        var e = this;
        this.updateExpanded().then(t).then(function() {
            var t = {
                transition: !0
            };
            e.data.expanded && (t.contentHeight = "auto"), e.setData(t);
        });
    },
    methods: {
        updateExpanded: function() {
            if (!this.parent) return Promise.resolve();
            var t = this.parent.data, e = t.value, n = t.accordion, a = this.parent.children, i = void 0 === a ? [] : a, o = this.data.name, s = i.indexOf(this), r = null == o ? s : o, l = n ? e === r : (e || []).some(function(t) {
                return t === r;
            }), u = [];
            return l !== this.data.expanded && u.push(this.updateStyle(l)), u.push(this.set({
                index: s,
                expanded: l
            })), Promise.all(u);
        },
        updateStyle: function(e) {
            var n = this;
            return this.getRect(".van-collapse-item__content").then(function(t) {
                return t.height;
            }).then(function(a) {
                return e ? n.set({
                    contentHeight: a ? a + "px" : "auto"
                }) : n.set({
                    contentHeight: a + "px"
                }).then(t).then(function() {
                    return n.set({
                        contentHeight: 0
                    });
                });
            });
        },
        onClick: function() {
            if (!this.data.disabled) {
                var t = this.data, e = t.name, n = t.expanded, a = this.parent.children.indexOf(this), i = null == e ? a : e;
                this.parent.switch(i, !n);
            }
        },
        onTransitionEnd: function() {
            this.data.expanded && this.setData({
                contentHeight: "auto"
            });
        }
    }
});