Object.defineProperty(exports, "__esModule", {
    value: !0
}), require("../common/component").VantComponent({
    classes: [ "active-class", "disabled-class" ],
    relation: {
        type: "ancestor",
        name: "sidebar",
        current: "sidebar-item"
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean
    },
    methods: {
        onClick: function() {
            var e = this, t = this.parent;
            if (t && !this.data.disabled) {
                var i = t.children.indexOf(this);
                t.setActive(i).then(function() {
                    e.$emit("click", i), t.$emit("change", i);
                });
            }
        },
        setActive: function(e) {
            return this.setData({
                selected: e
            });
        }
    }
});