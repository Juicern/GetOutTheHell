function t(t, e) {
    var a = Math.pow(10, 10);
    return Math.round((t + e) * a) / a;
}

function e(t, e) {
    return String(t) === String(e);
}

var a = function() {
    return (a = Object.assign || function(t) {
        for (var e, a = 1, i = arguments.length; a < i; a++) {
            e = arguments[a];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        }
        return t;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("../common/component"), n = require("../common/utils");

i.VantComponent({
    field: !0,
    classes: [ "input-class", "plus-class", "minus-class" ],
    props: {
        value: {
            type: null,
            observer: function(t) {
                e(t, this.data.currentValue) || this.setData({
                    currentValue: this.format(t)
                });
            }
        },
        integer: {
            type: Boolean,
            observer: "check"
        },
        disabled: Boolean,
        inputWidth: null,
        buttonSize: null,
        asyncChange: Boolean,
        disableInput: Boolean,
        decimalLength: {
            type: Number,
            value: null,
            observer: "check"
        },
        min: {
            type: null,
            value: 1,
            observer: "check"
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER,
            observer: "check"
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: !0
        },
        showMinus: {
            type: Boolean,
            value: !0
        },
        disablePlus: Boolean,
        disableMinus: Boolean,
        longPress: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        currentValue: ""
    },
    created: function() {
        this.setData({
            currentValue: this.format(this.data.value)
        });
    },
    methods: {
        check: function() {
            var t = this.format(this.data.currentValue);
            e(t, this.data.currentValue) || this.setData({
                currentValue: t
            });
        },
        isDisabled: function(t) {
            return "plus" === t ? this.data.disabled || this.data.disablePlus || this.data.currentValue >= this.data.max : this.data.disabled || this.data.disableMinus || this.data.currentValue <= this.data.min;
        },
        onFocus: function(t) {
            this.$emit("focus", t.detail);
        },
        onBlur: function(t) {
            var e = this.format(t.detail.value);
            this.emitChange(e), this.$emit("blur", a(a({}, t.detail), {
                value: e
            }));
        },
        filter: function(t) {
            return t = String(t).replace(/[^0-9.-]/g, ""), this.data.integer && -1 !== t.indexOf(".") && (t = t.split(".")[0]), 
            t;
        },
        format: function(t) {
            return t = this.filter(t), t = "" === t ? 0 : +t, t = Math.max(Math.min(this.data.max, t), this.data.min), 
            n.isDef(this.data.decimalLength) && (t = t.toFixed(this.data.decimalLength)), t;
        },
        onInput: function(t) {
            var e = (t.detail || {}).value, a = void 0 === e ? "" : e;
            if ("" !== a) {
                var i = this.filter(a);
                if (n.isDef(this.data.decimalLength) && -1 !== i.indexOf(".")) {
                    var s = i.split(".");
                    i = s[0] + "." + s[1].slice(0, this.data.decimalLength);
                }
                this.emitChange(i);
            }
        },
        emitChange: function(t) {
            this.data.asyncChange || this.setData({
                currentValue: t
            }), this.$emit("change", t);
        },
        onChange: function() {
            var e = this.type;
            if (this.isDisabled(e)) this.$emit("overlimit", e); else {
                var a = "minus" === e ? -this.data.step : +this.data.step, i = this.format(t(+this.data.currentValue, a));
                this.emitChange(i), this.$emit(e);
            }
        },
        longPressStep: function() {
            var t = this;
            this.longPressTimer = setTimeout(function() {
                t.onChange(), t.longPressStep();
            }, 200);
        },
        onTap: function(t) {
            var e = t.currentTarget.dataset.type;
            this.type = e, this.onChange();
        },
        onTouchStart: function(t) {
            var e = this;
            if (this.data.longPress) {
                clearTimeout(this.longPressTimer);
                var a = t.currentTarget.dataset.type;
                this.type = a, this.isLongPress = !1, this.longPressTimer = setTimeout(function() {
                    e.isLongPress = !0, e.onChange(), e.longPressStep();
                }, 600);
            }
        },
        onTouchEnd: function() {
            this.data.longPress && clearTimeout(this.longPressTimer);
        }
    }
});