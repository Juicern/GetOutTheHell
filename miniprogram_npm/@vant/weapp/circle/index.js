function e(e) {
    return Math.min(Math.max(e, 0), 100);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), r = require("../common/utils"), a = require("../common/color"), n = 2 * Math.PI, i = -Math.PI / 2;

t.VantComponent({
    props: {
        text: String,
        lineCap: {
            type: String,
            value: "round"
        },
        value: {
            type: Number,
            value: 0,
            observer: "reRender"
        },
        speed: {
            type: Number,
            value: 50
        },
        size: {
            type: Number,
            value: 100
        },
        fill: String,
        layerColor: {
            type: String,
            value: a.WHITE
        },
        color: {
            type: [ String, Object ],
            value: a.BLUE,
            observer: "setHoverColor"
        },
        type: {
            type: String,
            value: ""
        },
        strokeWidth: {
            type: Number,
            value: 4
        },
        clockwise: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        hoverColor: a.BLUE
    },
    methods: {
        getContext: function() {
            return this.ctx || (this.ctx = wx.createCanvasContext("van-circle", this)), this.ctx;
        },
        setHoverColor: function() {
            var e = this.data, t = e.color, a = e.size, n = e.type, i = n ? this.getContext(n) : this.getContext(), o = t;
            if (r.isObj(t)) {
                var l = i.createLinearGradient(a, 0, 0, 0);
                Object.keys(t).sort(function(e, t) {
                    return parseFloat(e) - parseFloat(t);
                }).map(function(e) {
                    return l.addColorStop(parseFloat(e) / 100, t[e]);
                }), o = l;
            }
            this.setData({
                hoverColor: o
            });
        },
        presetCanvas: function(e, t, r, a, n) {
            var i = this.data, o = i.strokeWidth, l = i.lineCap, s = i.clockwise, c = i.size / 2, u = c - o / 2;
            e.setStrokeStyle(t), e.setLineWidth(o), e.setLineCap(l), e.beginPath(), e.arc(c, c, u, r, a, !s), 
            e.stroke(), n && (e.setFillStyle(n), e.fill());
        },
        renderLayerCircle: function(e) {
            var t = this.data, r = t.layerColor, a = t.fill;
            this.presetCanvas(e, r, 0, n, a);
        },
        renderHoverCircle: function(e, t) {
            var r = this.data, a = r.clockwise, o = r.hoverColor, l = n * (t / 100), s = a ? i + l : 3 * Math.PI - (i + l);
            this.presetCanvas(e, o, i, s);
        },
        drawCircle: function(t) {
            var r = this.data, a = r.size, n = r.type, i = n ? this.getContext(n) : this.getContext();
            i.clearRect(0, 0, a, a), this.renderLayerCircle(i);
            var o = e(t);
            0 !== o && this.renderHoverCircle(i, o), i.draw();
        },
        reRender: function() {
            var e = this, t = this.data, r = t.value, a = t.speed;
            a <= 0 || a > 1e3 ? this.drawCircle(r) : (this.clearInterval(), this.currentValue = this.currentValue || 0, 
            this.interval = setInterval(function() {
                e.currentValue !== r ? (e.currentValue < r ? e.currentValue += 1 : e.currentValue -= 1, 
                e.drawCircle(e.currentValue)) : e.clearInterval();
            }, 1e3 / a));
        },
        clearInterval: function(e) {
            function t() {
                return e.apply(this, arguments);
            }
            return t.toString = function() {
                return e.toString();
            }, t;
        }(function() {
            this.interval && (clearInterval(this.interval), this.interval = null);
        })
    },
    created: function() {
        var e = this.data.value;
        this.currentValue = e, this.drawCircle(e);
    },
    destroyed: function() {
        this.ctx = null, this.clearInterval();
    }
});