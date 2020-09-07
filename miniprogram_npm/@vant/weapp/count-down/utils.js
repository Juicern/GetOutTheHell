function e(e, r) {
    void 0 === r && (r = 2);
    for (var o = e + ""; o.length < r; ) o = "0" + o;
    return o;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = 1e3, o = 60 * r, s = 60 * o, t = 24 * s;

exports.parseTimeData = function(e) {
    return {
        days: Math.floor(e / t),
        hours: Math.floor(e % t / s),
        minutes: Math.floor(e % s / o),
        seconds: Math.floor(e % o / r),
        milliseconds: Math.floor(e % r)
    };
}, exports.parseFormat = function(r, o) {
    var s = o.days, t = o.hours, n = o.minutes, a = o.seconds, i = o.milliseconds;
    return -1 === r.indexOf("DD") ? t += 24 * s : r = r.replace("DD", e(s)), -1 === r.indexOf("HH") ? n += 60 * t : r = r.replace("HH", e(t)), 
    -1 === r.indexOf("mm") ? a += 60 * n : r = r.replace("mm", e(n)), -1 === r.indexOf("ss") ? i += 1e3 * a : r = r.replace("ss", e(a)), 
    r.replace("SSS", e(i, 3));
}, exports.isSameSecond = function(e, r) {
    return Math.floor(e / 1e3) === Math.floor(r / 1e3);
};