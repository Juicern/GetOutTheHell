Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    get: function(e, t, u) {
        return this.request("get", e, t, u);
    },
    post: function(e, t, u) {
        return this.request("post", e, t, u);
    },
    put: function(e, t, u) {
        return this.request("put", e, t, u);
    },
    delete: function(e, t, u) {
        return this.request("delete", e, t, u);
    },
    request: function(e, t, u, r) {
        var n = r.headers;
        return new Promise(function(r, s) {
            wx.request({
                method: e,
                url: t,
                header: n,
                data: u,
                success: function(e) {
                    r(e);
                },
                fail: function(e) {
                    s(e);
                }
            });
        });
    }
};