Object.defineProperty(exports, "__esModule", {
    value: !0
}), require("../common/component").VantComponent({
    relation: {
        name: "sidebar-item",
        type: "descendant",
        current: "sidebar",
        linked: function() {
            this.setActive(this.data.activeKey);
        },
        unlinked: function() {
            this.setActive(this.data.activeKey);
        }
    },
    props: {
        activeKey: {
            type: Number,
            value: 0,
            observer: "setActive"
        }
    },
    beforeCreate: function() {
        this.currentActive = -1;
    },
    methods: {
        setActive: function(e) {
            var t = this, i = t.children, r = t.currentActive;
            if (!i.length) return Promise.resolve();
            this.currentActive = e;
            var n = [];
            return r !== e && i[r] && n.push(i[r].setActive(!1)), i[e] && n.push(i[e].setActive(!0)), 
            Promise.all(n);
        }
    }
});