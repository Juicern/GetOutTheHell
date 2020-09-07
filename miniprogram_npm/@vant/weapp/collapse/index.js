Object.defineProperty(exports, "__esModule", {
    value: !0
}), require("../common/component").VantComponent({
    relation: {
        name: "collapse-item",
        type: "descendant",
        current: "collapse"
    },
    props: {
        value: {
            type: null,
            observer: "updateExpanded"
        },
        accordion: {
            type: Boolean,
            observer: "updateExpanded"
        },
        border: {
            type: Boolean,
            value: !0
        }
    },
    methods: {
        updateExpanded: function() {
            this.children.forEach(function(e) {
                e.updateExpanded();
            });
        },
        switch: function(e, t) {
            var n = this.data, o = n.accordion, a = n.value;
            e = o ? t ? e : "" : t ? (a || []).concat(e) : (a || []).filter(function(t) {
                return t !== e;
            }), this.$emit("change", e), this.$emit("input", e);
        }
    }
});