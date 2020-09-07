Object.defineProperty(exports, "__esModule", {
    value: !0
}), require("../common/component").VantComponent({
    classes: [ "main-item-class", "content-item-class", "main-active-class", "content-active-class", "main-disabled-class", "content-disabled-class" ],
    props: {
        items: {
            type: Array,
            observer: "updateSubItems"
        },
        activeId: null,
        mainActiveIndex: {
            type: Number,
            value: 0,
            observer: "updateSubItems"
        },
        height: {
            type: [ Number, String ],
            value: 300
        },
        max: {
            type: Number,
            value: 1 / 0
        }
    },
    data: {
        subItems: []
    },
    methods: {
        onSelectItem: function(e) {
            var t = e.currentTarget.dataset.item, a = Array.isArray(this.data.activeId), i = a && this.data.activeId.length >= this.data.max, s = a ? this.data.activeId.indexOf(t.id) > -1 : this.data.activeId === t.id;
            t.disabled || i && !s || this.$emit("click-item", t);
        },
        onClickNav: function(e) {
            var t = e.detail;
            this.data.items[t].disabled || this.$emit("click-nav", {
                index: t
            });
        },
        updateSubItems: function() {
            var e = this.data, t = (e.items[e.mainActiveIndex] || {}).children, a = void 0 === t ? [] : t;
            return this.set({
                subItems: a
            });
        }
    }
});