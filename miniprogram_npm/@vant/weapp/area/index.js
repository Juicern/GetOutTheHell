var e = function() {
    return (e = Object.assign || function(e) {
        for (var t, n = 1, i = arguments.length; n < i; n++) {
            t = arguments[n];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
        }
        return e;
    }).apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../common/component"), n = require("../picker/shared");

t.VantComponent({
    classes: [ "active-class", "toolbar-class", "column-class" ],
    props: e(e({}, n.pickerProps), {
        value: {
            type: String,
            observer: function(e) {
                this.code = e, this.setValues();
            }
        },
        areaList: {
            type: Object,
            value: {},
            observer: "setValues"
        },
        columnsNum: {
            type: null,
            value: 3,
            observer: function(e) {
                this.setData({
                    displayColumns: this.data.columns.slice(0, +e)
                });
            }
        },
        columnsPlaceholder: {
            type: Array,
            observer: function(e) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: e[0] || "",
                        city: e[1] || "",
                        county: e[2] || ""
                    }
                });
            }
        }
    }),
    data: {
        columns: [ {
            values: []
        }, {
            values: []
        }, {
            values: []
        } ],
        displayColumns: [ {
            values: []
        }, {
            values: []
        }, {
            values: []
        } ],
        typeToColumnsPlaceholder: {}
    },
    mounted: function() {
        var e = this;
        setTimeout(function() {
            e.setValues();
        }, 0);
    },
    methods: {
        getPicker: function() {
            return null == this.picker && (this.picker = this.selectComponent(".van-area__picker")), 
            this.picker;
        },
        onCancel: function(e) {
            this.emit("cancel", e.detail);
        },
        onConfirm: function(e) {
            var t = e.detail.index, n = e.detail.value;
            n = this.parseOutputValues(n), this.emit("confirm", {
                value: n,
                index: t
            });
        },
        emit: function(e, t) {
            t.values = t.value, delete t.value, this.$emit(e, t);
        },
        parseOutputValues: function(e) {
            var t = this.data.columnsPlaceholder;
            return e.map(function(e, n) {
                return e ? ((e = JSON.parse(JSON.stringify(e))).code && e.name !== t[n] || (e.code = "", 
                e.name = ""), e) : e;
            });
        },
        onChange: function(e) {
            var t = this, n = e.detail, i = n.index, s = n.picker, r = n.value;
            this.code = r[i].code, this.setValues().then(function() {
                t.$emit("change", {
                    picker: s,
                    values: t.parseOutputValues(s.getValues()),
                    index: i
                });
            });
        },
        getConfig: function(e) {
            var t = this.data.areaList;
            return t && t[e + "_list"] || {};
        },
        getList: function(e, t) {
            var n = this.data.typeToColumnsPlaceholder, i = [];
            if ("province" !== e && !t) return i;
            var s = this.getConfig(e);
            if (i = Object.keys(s).map(function(e) {
                return {
                    code: e,
                    name: s[e]
                };
            }), t && ("9" === t[0] && "city" === e && (t = "9"), i = i.filter(function(e) {
                return 0 === e.code.indexOf(t);
            })), n[e] && i.length) {
                var r = "province" === e ? "" : "city" === e ? "000000".slice(2, 4) : "000000".slice(4, 6);
                i.unshift({
                    code: "" + t + r,
                    name: n[e]
                });
            }
            return i;
        },
        getIndex: function(e, t) {
            var n = "province" === e ? 2 : "city" === e ? 4 : 6, i = this.getList(e, t.slice(0, n - 2));
            "9" === t[0] && "province" === e && (n = 1), t = t.slice(0, n);
            for (var s = 0; s < i.length; s++) if (i[s].code.slice(0, n) === t) return s;
            return 0;
        },
        setValues: function() {
            var e = this, t = this.getConfig("county"), n = this.code;
            n || (n = this.data.columnsPlaceholder.length ? "000000" : Object.keys(t)[0] ? Object.keys(t)[0] : "");
            var i = this.getList("province"), s = this.getList("city", n.slice(0, 2)), r = this.getPicker();
            if (r) {
                var c = [];
                return c.push(r.setColumnValues(0, i, !1)), c.push(r.setColumnValues(1, s, !1)), 
                s.length && "00" === n.slice(2, 4) && (n = s[0].code), c.push(r.setColumnValues(2, this.getList("county", n.slice(0, 4)), !1)), 
                Promise.all(c).catch(function() {}).then(function() {
                    return r.setIndexes([ e.getIndex("province", n), e.getIndex("city", n), e.getIndex("county", n) ]);
                }).catch(function() {});
            }
        },
        getValues: function() {
            var e = this.getPicker();
            return e ? e.getValues().filter(function(e) {
                return !!e;
            }) : [];
        },
        getDetail: function() {
            var e = this.getValues(), t = {
                code: "",
                country: "",
                province: "",
                city: "",
                county: ""
            };
            if (!e.length) return t;
            var n = e.map(function(e) {
                return e.name;
            });
            return t.code = e[e.length - 1].code, "9" === t.code[0] ? (t.country = n[1] || "", 
            t.province = n[2] || "") : (t.province = n[0] || "", t.city = n[1] || "", t.county = n[2] || ""), 
            t;
        },
        reset: function(e) {
            return this.code = e || "", this.setValues();
        }
    }
});