function t() {
    var t = getCurrentPages();
    return t[t.length - 1];
}

var e = function() {
    return (e = Object.assign || function(t) {
        for (var e, n = 1, o = arguments.length; n < o; n++) {
            e = arguments[n];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
        return t;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = [], o = function o(r) {
    return r = e(e({}, o.currentOptions), r), new Promise(function(o, s) {
        var c = (r.context || t()).selectComponent(r.selector);
        delete r.context, delete r.selector, c ? (c.setData(e({
            onCancel: s,
            onConfirm: o
        }, r)), n.push(c)) : console.warn("未找到 van-dialog 节点，请确认 selector 及 context 是否正确");
    });
};

o.defaultOptions = {
    show: !0,
    title: "",
    width: null,
    message: "",
    zIndex: 100,
    overlay: !0,
    selector: "#van-dialog",
    className: "",
    asyncClose: !1,
    transition: "scale",
    customStyle: "",
    messageAlign: "",
    overlayStyle: "",
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    showConfirmButton: !0,
    showCancelButton: !1,
    closeOnClickOverlay: !1,
    confirmButtonOpenType: ""
}, o.alert = o, o.confirm = function(t) {
    return o(e({
        showCancelButton: !0
    }, t));
}, o.close = function() {
    n.forEach(function(t) {
        t.close();
    }), n = [];
}, o.stopLoading = function() {
    n.forEach(function(t) {
        t.stopLoading();
    });
}, o.setDefaultOptions = function(t) {
    Object.assign(o.currentOptions, t);
}, o.resetDefaultOptions = function() {
    o.currentOptions = e({}, o.defaultOptions);
}, o.resetDefaultOptions(), exports.default = o;