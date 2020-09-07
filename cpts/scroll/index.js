var t = {
    init: "",
    pulling: "pulling",
    enough: "pulling enough",
    refreshing: "refreshing",
    refreshed: "refreshed",
    reset: "reset",
    loading: "loading"
};

Component({
    data: {
        onRefresh: !0,
        loaderState: t.init,
        pullHeight: 0,
        progressed: 0,
        pullDownHeight: 0,
        scrollTop: 0,
        animate: {}
    },
    properties: {
        height: {
            type: String
        },
        loading: {
            type: Boolean,
            value: !0,
            observer: function(t) {
                this.isChange(t);
            }
        },
        isEnd: {
            type: Boolean
        },
        isEmpty: {
            type: Boolean,
            value: !1
        },
        emptyText: {
            type: String,
            value: "暂无数据"
        }
    },
    methods: {
        isChange: function(e) {
            var i = this;
            e && (this.setData({
                loaderState: t.refreshed
            }), setTimeout(function() {
                i.setData({
                    loaderState: t.reset,
                    pullDownHeight: 0
                }, i.initSTATS);
            }, 500));
        },
        initSTATS: function() {
            var e = this;
            setTimeout(function() {
                e.setData({
                    loaderState: t.init
                });
            }, 500);
        },
        onScroll: function(t) {
            this.setData({
                scrollTop: t.detail.scrollTop
            });
        },
        isEnd: function() {
            this.data.isEnd || this.triggerEvent("loadMore");
        },
        calculateDistance: function(t) {
            return t.clientY - this._initialTouch.clientY;
        },
        touchStart: function(t) {
            this.canRefresh() && 1 == t.touches.length && (this._initialTouch = {
                clientY: t.touches[0].clientY,
                scrollTop: this.data.scrollTop
            });
        },
        touchMove: function(e) {
            if (this.canRefresh() && !(this.data.scrollTop > 0)) {
                var i = this.calculateDistance(e.touches[0]);
                if (i > 0 && this.data.scrollTop <= 5) {
                    var n = i - this._initialTouch.scrollTop;
                    n < 0 && (n = 0, this._initialTouch.scrollTop = i), this.setData({
                        loaderState: this.data.loaderState == t.enough ? t.enough : n > 60 ? t.enough : t.pulling,
                        pullDownHeight: n > 60 ? 60 : n
                    });
                }
            }
        },
        touchEnd: function(e) {
            var i = this;
            if (this.canRefresh() && !(this.data.ifScroll > 0)) {
                var n = {
                    loaderState: t.reset,
                    pullDownHeight: 0
                };
                this.data.loaderState == t.enough ? (this.setData({
                    loaderState: t.refreshing,
                    pullDownHeight: 60
                }), setTimeout(function() {
                    i.triggerEvent("onRefresh");
                }, 300)) : this.setData(n);
            }
        },
        canRefresh: function() {
            var e = this.data, i = e.onRefresh, n = e.loaderState;
            return i && [ t.refreshing, t.loading ].indexOf(n) < 0;
        }
    }
});