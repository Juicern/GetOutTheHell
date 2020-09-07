function t(t) {
    return function(e) {
        return new Promise(function(n) {
            setTimeout(function() {
                n({
                    data: {
                        code: 200,
                        data: t(e)
                    }
                });
            }, 500);
        });
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {
    get: {
        dict: {},
        fn: function(t, n) {
            return e.get.dict[t](n);
        }
    },
    post: {
        dict: {},
        fn: function(t, n) {
            return e.post.dict[t](n);
        }
    },
    put: {
        dict: {},
        fn: function(t, n) {
            return e.put.dict[t](n);
        }
    },
    delete: {
        dict: {},
        fn: function(t, n) {
            return e.delete.dict[t](n);
        }
    }
}, n = {
    get: function(n, c) {
        e.get.dict[n] = t(c);
    },
    post: function(n, c) {
        e.post.dict[n] = t(c);
    },
    put: function(n, c) {
        e.put.dict[n] = t(c);
    },
    delete: function(n, c) {
        e.delete.dict[n] = t(c);
    }
};

exports.Mock = n, exports.store = e;