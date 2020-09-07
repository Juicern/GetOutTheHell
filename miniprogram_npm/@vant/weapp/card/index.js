Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../mixins/link");

require("../common/component").VantComponent({
    classes: [ "num-class", "desc-class", "thumb-class", "title-class", "price-class", "origin-price-class" ],
    mixins: [ t.link ],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: {
            type: String,
            observer: "updatePrice"
        },
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: "aspectFit"
        },
        currency: {
            type: String,
            value: "¥"
        }
    },
    methods: {
        updatePrice: function() {
            var t = this.data.price.toString().split(".");
            this.setData({
                integerStr: t[0],
                decimalStr: t[1] ? "." + t[1] : ""
            });
        },
        onClickThumb: function() {
            this.jumpLink("thumbLink");
        }
    }
});