function t(t) {
    return setTimeout(t, 30);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("../common/component"), e = require("./utils");

i.VantComponent({
    props: {
        useSlot: Boolean,
        millisecond: Boolean,
        time: {
            type: Number,
            observer: "reset"
        },
        format: {
            type: String,
            value: "HH:mm:ss"
        },
        autoStart: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        timeData: e.parseTimeData(0),
        formattedTime: "0"
    },
    destroyed: function() {
        clearTimeout(this.tid), this.tid = null;
    },
    methods: {
        start: function() {
            this.counting || (this.counting = !0, this.endTime = Date.now() + this.remain, this.tick());
        },
        pause: function() {
            this.counting = !1, clearTimeout(this.tid);
        },
        reset: function() {
            this.pause(), this.remain = this.data.time, this.setRemain(this.remain), this.data.autoStart && this.start();
        },
        tick: function() {
            this.data.millisecond ? this.microTick() : this.macroTick();
        },
        microTick: function() {
            var i = this;
            this.tid = t(function() {
                i.setRemain(i.getRemain()), 0 !== i.remain && i.microTick();
            });
        },
        macroTick: function() {
            var i = this;
            this.tid = t(function() {
                var t = i.getRemain();
                e.isSameSecond(t, i.remain) && 0 !== t || i.setRemain(t), 0 !== i.remain && i.macroTick();
            });
        },
        getRemain: function() {
            return Math.max(this.endTime - Date.now(), 0);
        },
        setRemain: function(t) {
            this.remain = t;
            var i = e.parseTimeData(t);
            this.data.useSlot && this.$emit("change", i), this.setData({
                formattedTime: e.parseFormat(this.data.format, i)
            }), 0 === t && (this.pause(), this.$emit("finish"));
        }
    }
});