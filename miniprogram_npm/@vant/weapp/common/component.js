function e(e, n, i) {
    Object.keys(i).forEach(function(t) {
        e[t] && (n[i[t]] = e[t]);
    });
}

function n(e, n, i) {
    var s, r = i.type, a = i.name, d = i.linked, o = i.unlinked, l = i.linkChanged, c = n.beforeCreate, h = n.destroyed;
    "descendant" === r && (e.created = function() {
        c && c.bind(this)(), this.children = this.children || [];
    }, e.detached = function() {
        this.children = [], h && h.bind(this)();
    }), e.relations = Object.assign(e.relations || {}, (s = {}, s["../" + a + "/index"] = {
        type: r,
        linked: function(e) {
            t[r].linked.bind(this)(e), d && d.bind(this)(e);
        },
        linkChanged: function(e) {
            l && l.bind(this)(e);
        },
        unlinked: function(e) {
            t[r].unlinked.bind(this)(e), o && o.bind(this)(e);
        }
    }, s));
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = require("../mixins/basic"), t = {
    ancestor: {
        linked: function(e) {
            this.parent = e;
        },
        unlinked: function() {
            this.parent = null;
        }
    },
    descendant: {
        linked: function(e) {
            this.children = this.children || [], this.children.push(e);
        },
        unlinked: function(e) {
            this.children = (this.children || []).filter(function(n) {
                return n !== e;
            });
        }
    }
};

exports.VantComponent = function(t) {
    void 0 === t && (t = {});
    var s = {};
    e(t, s, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses"
    });
    var r = t.relation;
    r && n(s, t, r), s.externalClasses = s.externalClasses || [], s.externalClasses.push("custom-class"), 
    s.behaviors = s.behaviors || [], s.behaviors.push(i.basic), t.field && s.behaviors.push("wx://form-field"), 
    s.properties && Object.keys(s.properties).forEach(function(e) {
        Array.isArray(s.properties[e]) && (s.properties[e] = null);
    }), s.options = {
        multipleSlots: !0,
        addGlobalClass: !0
    }, Component(s);
};