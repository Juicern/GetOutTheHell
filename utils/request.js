Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

exports.default = function(o, n, a) {
    return new Promise(function(r, u) {
        (0, e.default)(o, n, a).then(function(e) {
            var o = e.data;
            200 == o.code ? (o.data && "object" == t(o.data) && (o.data._data = {
                message: o.data.message
            }), r(o.data)) : (wx.showToast({
                title: o.message || o.msg,
                icon: "none"
            }), u(o));
        }).catch(function(t) {
            return u(t);
        });
    });
};

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./baseRequest.js"));