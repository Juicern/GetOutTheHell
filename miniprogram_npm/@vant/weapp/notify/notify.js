function e(e) {
    return "string" == typeof e ? {
        message: e
    } : e;
}

function t() {
    var e = getCurrentPages();
    return e[e.length - 1];
}

function n(n) {
    var c = ((n = o(o({}, r), e(n))).context || t()).selectComponent(n.selector);
    if (delete n.context, delete n.selector, c) return c.setData(n), c.show(), c;
    console.warn("未找到 van-notify 节点，请确认 selector 及 context 是否正确");
}

var o = function() {
    return (o = Object.assign || function(e) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = {
    selector: "#van-notify",
    type: "danger",
    message: "",
    background: "",
    duration: 3e3,
    zIndex: 110,
    color: require("../common/color").WHITE,
    safeAreaInsetTop: !1,
    onClick: function() {},
    onOpened: function() {},
    onClose: function() {}
};

exports.default = n, n.clear = function(n) {
    var c = ((n = o(o({}, r), e(n))).context || t()).selectComponent(n.selector);
    c && c.hide();
};