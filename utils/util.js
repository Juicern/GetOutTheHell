var e = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
}, r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./projectUtil.js")), t = function(e, r) {
    for (var t = e.toString().split("").reverse(), a = t.length; a < r; a++) t.push("0");
    return t.reverse().join("");
};

module.exports = e({
    formatTime: function(e, r) {
        "string" == typeof e && (e = e.replace(/-/g, "/").replace("T", " ").replace(".0", ""));
        var a = new Date(e), n = a.getFullYear(), l = t(a.getMonth() + 1, 2), o = t(a.getDate(), 2), c = t(a.getHours(), 2), s = t(a.getMinutes(), 2), u = t(a.getSeconds(), 2);
        return r.replace("YYYY", n).replace("MM", l).replace("DD", o).replace("HH", c).replace("mm", s).replace("ss", u);
    }
}, r.default);