var e = function() {
    return (e = Object.assign || function(e) {
        for (var t, a = 1, i = arguments.length; a < i; a++) {
            t = arguments[a];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), a = require("./utils"), i = require("./shared");

t.VantComponent({
    props: e(e({
        disabled: Boolean,
        multiple: Boolean,
        uploadText: String,
        useBeforeRead: Boolean,
        afterRead: null,
        beforeRead: null,
        previewSize: {
            type: null,
            value: 90
        },
        name: {
            type: [ Number, String ],
            value: ""
        },
        accept: {
            type: String,
            value: "image"
        },
        fileList: {
            type: Array,
            value: [],
            observer: "formatFileList"
        },
        maxSize: {
            type: Number,
            value: Number.MAX_VALUE
        },
        maxCount: {
            type: Number,
            value: 100
        },
        deletable: {
            type: Boolean,
            value: !0
        },
        showUpload: {
            type: Boolean,
            value: !0
        },
        previewImage: {
            type: Boolean,
            value: !0
        },
        previewFullImage: {
            type: Boolean,
            value: !0
        },
        imageFit: {
            type: String,
            value: "scaleToFill"
        },
        uploadIcon: {
            type: String,
            value: "photograph"
        }
    }, i.chooseImageProps), i.chooseVideoProps),
    data: {
        lists: [],
        isInCount: !0
    },
    methods: {
        formatFileList: function() {
            var t = this.data, i = t.fileList, n = void 0 === i ? [] : i, r = t.maxCount, o = n.map(function(t) {
                return e(e({}, t), {
                    isImage: void 0 === t.isImage ? a.isImageFile(t) : t.isImage
                });
            });
            this.setData({
                lists: o,
                isInCount: o.length < r
            });
        },
        getDetail: function(e) {
            return {
                name: this.data.name,
                index: null == e ? this.data.fileList.length : e
            };
        },
        startUpload: function() {
            var t = this, i = this.data, n = i.maxCount, r = i.multiple, o = i.accept, l = i.lists;
            i.disabled || a.chooseFile(e(e({}, this.data), {
                maxCount: n - l.length
            })).then(function(i) {
                var n = null;
                n = a.isVideo(i, o) ? e({
                    path: i.tempFilePath
                }, i) : r ? i.tempFiles : i.tempFiles[0], t.onBeforeRead(n);
            }).catch(function(e) {
                t.$emit("error", e);
            });
        },
        onBeforeRead: function(t) {
            var i = this, n = this.data, r = n.beforeRead, o = n.useBeforeRead, l = !0;
            "function" == typeof r && (l = r(t, this.getDetail())), o && (l = new Promise(function(a, n) {
                i.$emit("before-read", e(e({
                    file: t
                }, i.getDetail()), {
                    callback: function(e) {
                        e ? a() : n();
                    }
                }));
            })), l && (a.isPromise(l) ? l.then(function(e) {
                return i.onAfterRead(e || t);
            }) : this.onAfterRead(t));
        },
        onAfterRead: function(t) {
            var a = this.data.maxSize;
            (Array.isArray(t) ? t.some(function(e) {
                return e.size > a;
            }) : t.size > a) ? this.$emit("oversize", e({
                file: t
            }, this.getDetail())) : ("function" == typeof this.data.afterRead && this.data.afterRead(t, this.getDetail()), 
            this.$emit("after-read", e({
                file: t
            }, this.getDetail())));
        },
        deleteItem: function(t) {
            var a = t.currentTarget.dataset.index;
            this.$emit("delete", e(e({}, this.getDetail(a)), {
                file: this.data.fileList[a]
            }));
        },
        onPreviewImage: function(t) {
            var a = t.currentTarget.dataset.index, i = this.data.lists, n = i[a];
            this.$emit("click-preview", e({
                url: n.url || n.path
            }, this.getDetail(a))), this.data.previewFullImage && wx.previewImage({
                urls: i.filter(function(e) {
                    return e.isImage;
                }).map(function(e) {
                    return e.url || e.path;
                }),
                current: n.url || n.path,
                fail: function() {
                    wx.showToast({
                        title: "预览图片失败",
                        icon: "none"
                    });
                }
            });
        }
    }
});