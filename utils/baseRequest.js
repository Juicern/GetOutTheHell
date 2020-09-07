function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, a, o) {
    if (!e) throw new Error("请求的url为空");
    var u = e.match(/\:[a-zA-Z]+/g);
    u && u.forEach(function(r) {
        var t = r.substr(1);
        e = e.replace(r, a[t]), delete a[t];
    }), Object.keys(a).forEach(function(e) {
        void 0 === a[e] && delete a[e];
    });
    var c = e.match(/^(PUT|DELETE|GET|POST)\s/);
    c ? (e = e.replace(c[0], ""), c = c[0].toLowerCase().trim()) : c = "get";
    var n = wx.getStorageSync("token");
    return o = Object.assign({
        "X-Access-Token": n
    }, o), e in r.default[c].dict ? r.default[c].fn(e, a, {
        headers: o
    }) : t.default[c](e, a, {
        headers: o
    });
};

var r = e(require("../mock/index.js")), t = e(require("./wxRequest"));