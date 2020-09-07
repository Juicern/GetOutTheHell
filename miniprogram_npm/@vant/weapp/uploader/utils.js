function e(e) {
    return r.some(function(o) {
        return -1 !== e.indexOf("." + o) || -1 !== e.indexOf("." + o.toLocaleUpperCase());
    });
}

function o(e) {
    return "function" == typeof e;
}

function t(e) {
    return null !== e && "object" === (void 0 === e ? "undefined" : n(e));
}

var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = [ "jpeg", "jpg", "gif", "png", "svg", "webp" ];

exports.isImageUrl = e, exports.isImageFile = function(o) {
    return o.type ? 0 === o.type.indexOf("image") : o.path ? e(o.path) : !!o.url && e(o.url);
}, exports.isVideo = function(e, o) {
    return "video" === o;
}, exports.chooseFile = function(e) {
    var o = e.accept, t = e.multiple, n = e.capture, r = e.compressed, i = e.maxDuration, s = e.sizeType, c = e.camera, u = e.maxCount;
    return "image" === o ? new Promise(function(e, o) {
        wx.chooseImage({
            count: t ? Math.min(u, 9) : 1,
            sourceType: n,
            sizeType: s,
            success: e,
            fail: o
        });
    }) : "video" === o ? new Promise(function(e, o) {
        wx.chooseVideo({
            sourceType: n,
            compressed: r,
            maxDuration: i,
            camera: c,
            success: e,
            fail: o
        });
    }) : new Promise(function(e, o) {
        wx.chooseMessageFile({
            count: t ? u : 1,
            type: "file",
            success: e,
            fail: o
        });
    });
}, exports.isFunction = o, exports.isObject = t, exports.isPromise = function(e) {
    return t(e) && o(e.then) && o(e.catch);
};