if(!window.getI18NString) { getI18NString = function(s) { return s; } }
window.Q = function(t, i, n) {
    "use strict";
    function e(t, i, n) {
        if (t[$r]()) {
            var s = t._fo || t.getChildren();
            if (s) {
                s = s._k2 || s;
                for (var r = 0,
                h = s[Fr]; h > r; r++) if (i.call(n, s[r]) === !1 || e(s[r], i, n) === !1) return ! 1;
                return ! 0
            }
        }
    }
    function s(t) {
        if (!t[$r]()) return t instanceof f$ ? t: null;
        for (var i, n = t._fo._k2,
        e = n[Fr] - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }
    function r(t, i, n, e) {
        return e ? h(t, i, n) : a(t, i, n)
    }
    function h(t, i, n) {
        t = t._k2 || t;
        for (var e, s = 0,
        r = t.length; r > s; s++) if (e = t[s], e[$r]() && !h(e[Gr], i, n) || i.call(n, e) === !1) return ! 1;
        return ! 0
    }
    function a(t, i, n) {
        t = t._k2 || t;
        for (var e, s = 0,
        r = t[Fr]; r > s; s++) if (e = t[s], i.call(n, e) === !1 || e[$r]() && !a(e[Gr], i, n)) return ! 1;
        return ! 0
    }
    function o(t, i, n, e) {
        return e ? f(t, i, n) : _(t, i, n)
    }
    function f(t, i, n) {
        t = t._k2 || t;
        for (var e, s = t[Fr], r = s - 1; r >= 0; r--) if (e = t[r], e[$r]() && !f(e[Gr], i, n) || i[Yr](n, e) === !1) return ! 1;
        return ! 0
    }
    function _(t, i, n) {
        t = t._k2 || t;
        for (var e, s = t[Fr], r = s - 1; r >= 0; r--) if (e = t[r], i[Yr](n, e) === !1 || e[$r]() && !_(e[Gr], i, n)) return ! 1;
        return ! 0
    }
    function c(t, i, n) {
        for (var e, s = (t._k2 || t)[Ur](0); s[Fr];) {
            e = s[0],
            s = s.splice(1);
            var r = i[Yr](n, e);
            if (r === !1) return ! 1;
            if (e[$r]()) {
                var h = e.children;
                h = h._k2 || h,
                s = s[Hr](h)
            }
        }
        return ! 0
    }
    function u(t, i, n) {
        for (var e, s = (t._k2 || t)[Ur](0); s.length;) {
            e = s[s.length - 1],
            s = s[qr](0, s[Fr] - 1);
            var r = i[Yr](n, e);
            if (r === !1) return ! 1;
            if (e[$r]()) {
                var h = e[Gr];
                h = h._k2 || h,
                s = s.concat(h)
            }
        }
        return ! 0
    }
    function d(t, i) {
        function n(t, n) {
            for (var e = t.length,
            s = n.length,
            r = e + s,
            h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }
        function e(t) {
            var i = t.length,
            s = Math[Wr](i / 2);
            return 1 >= i ? t: n(e(t[Ur](0, s)), e(t.slice(s)))
        }
        return e(t)
    }
    function l(t, i, n, e) {
        t instanceof gN && (t = t._k2);
        for (var s = 0,
        r = (t._k2 || t)[Fr]; r > s; s++) {
            var h = i[Yr](n, t[s], s, e);
            if (h === !1) return ! 1
        }
        return ! 0
    }
    function v(t, i, n) {
        for (var e = t instanceof gN,
        s = t._k2 || t,
        r = 0,
        h = s[Fr]; h > r; r++) {
            var a = s[r];
            i[Yr](n, a) && (e ? t[Vr](a) : t.splice(r, 1), r--, h--)
        }
    }
    function b(t, i, n, e) {
        t instanceof gN && (t = t._k2);
        for (var s = (t._k2 || t)[Fr] - 1; s >= 0; s--) {
            var r = i.call(n, t[s], s, e);
            if (r === !1) return ! 1
        }
        return ! 0
    }
    function y(t) {
        if (t[Xr] instanceof Function) return t.clone(!0);
        var i, n = [];
        return l(t,
        function(t) {
            i = t && t[Xr] instanceof Function ? t.clone() : t,
            n.push(i)
        },
        this),
        n
    }
    function g(t, i, e) {
        e === n || 0 > e ? t[Kr](i) : t[qr](e, 0, i)
    }
    function p(t, i) {
        var n = t[Zr](i);
        return 0 > n || n >= t[Fr] ? !1 : t[qr](n, 1)
    }
    function x(t, i) {
        var n = !1;
        return l(t,
        function(t) {
            return i == t ? (n = !0, !1) : void 0
        }),
        n
    }
    function m(t, i, n) {
        return i instanceof Object ? t = G(i, t) : i && !n && (n = parseInt(i)),
        i && !n && (n = parseInt(i)),
        n ? setTimeout(t, n) : setTimeout(t)
    }
    function E(i, n) {
        return n && (i = G(n, i)),
        t.requestAnimationFrame(i)
    }
    function w(t, i) {
        return t[Jr] = i,
        t
    }
    function T(t, i) {
        if (!t.hasOwnProperty(Qr)) {
            var n = t.getAttribute(th);
            if (!n) return w(t, i);
            for (var e = n.split(ih), s = 0, r = e[Fr]; r > s; s++) if (e[s] == i) return;
            return n += ih + i,
            w(t, n)
        }
        t.classList[nh](i)
    }
    function O(t, i) {
        if (!t.hasOwnProperty(Qr)) {
            var n = t[eh](th);
            if (!n || !n[Zr](i)) return;
            for (var e = "",
            s = n[sh](ih), r = 0, h = s[Fr]; h > r; r++) s[r] != i && (e += s[r] + ih);
            return w(t, e)
        }
        t.classList.remove(i)
    }
    function M(t) {
        return t instanceof Number || rh == typeof t
    }
    function I(t) {
        return t !== n && (t instanceof String || hh == typeof t)
    }
    function k(t) {
        return t !== n && (t instanceof Boolean || ah == typeof t)
    }
    function S(t) {
        return Array[oh](t)
    }
    function C(i) {
        i || (i = t.event),
        i[fh] ? i[fh]() : i[_h] = !1
    }
    function j(i) {
        i || (i = t.event),
        i[ch] ? i[ch]() : i[uh] || (i.cancelBubble = !0)
    }
    function P(t) {
        C(t),
        j(t)
    }
    function A(t) {
        return Math[dh](Math[lh]() * t)
    }
    function L() {
        return Math.random() >= .5
    }
    function z(t, i) {
        var n = t;
        for (var e in i) if (i.__lookupGetter__) {
            var s = i.__lookupGetter__(e),
            r = i.__lookupSetter__(e);
            s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
        } else n[e] = i[e];
        return n
    }
    function D(t, i, n) {
        if (! (t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        vh == typeof i && (e = i, i = t, t = function() {
            i.apply(this, arguments)
        });
        var s = t.prototype,
        r = function() {};
        return r[bh] = i.prototype,
        t[bh] = new r,
        t[yh] = i[bh],
        t.superclass.constructor = i,
        z(t[bh], s),
        e && z(t[bh], e),
        n && z(t[bh], n),
        t[bh][th] = t,
        t
    }
    function N(t, i, n) {
        return R(t, i, "constructor", n)
    }
    function R(t, i, n, e) {
        var s = i[yh];
        if (s) {
            var r = s[n];
            return r ? r[gh](t, e) : void 0
        }
    }
    function B(t) {
        return t[ph](4)
    }
    function $(t) {
        delete t[xh],
        delete t[mh]
    }
    function F(t, i) {
        t[i] && ($(t[i]), delete t[i])
    }
    function G(t, i) {
        var n = function() {
            return n[mh].apply(n[xh], arguments)
        };
        return n[mh] = i,
        n[xh] = t,
        n
    }
    function Y(t, i) {
        return t == i
    }
    function U(t, i, e, s, r) {
        if (s) return void Object.defineProperty(t, i, {
            value: e,
            enumerable: !0
        });
        var h = {
            configurable: !0,
            enumerable: !0
        },
        a = Eh + i;
        e !== n && (t[a] = e),
        h[wh] = function() {
            return this[a]
        },
        h[Th] = function(t) {
            var n = this[a];
            if (Y(n, t)) return ! 1;
            var e = new NN(this, i, t, n);
            return this[Oh](e) ? (this[a] = t, r && r[Yr](this, t, n), this.onEvent(e), !0) : !1
        },
        Object.defineProperty(t, i, h)
    }
    function H(t, i) {
        for (var n = 0,
        e = i[Fr]; e > n; n++) {
            var s = i[n];
            U(t, s[Mh] || s, s[Ih] || s.value, s[kh], s[Sh])
        }
    }
    function q(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[dh](16777215 * Math[lh]());
            return Ch + (i >> 16 & 255) + jh + (i >> 8 & 255) + jh + (255 & i) + jh + t.toFixed(2) + Ph
        }
        return X(Math[dh](16777215 * Math[lh]()))
    }
    function W(t) {
        return t > 0 ? Math[dh](t) : Math[Wr](t)
    }
    function V(t) {
        return t > 0 ? Math[Wr](t) : Math.floor(t)
    }
    function X(t) {
        return 16777216 > t ? Ah + (Lh + t.toString(16))[Ur]( - 6) : Ch + (t >> 16 & 255) + jh + (t >> 8 & 255) + jh + (255 & t) + jh + ((t >> 24 & 255) / 255)[ph](2) + Ph
    }
    function K(t, i, n) {
        vh != typeof n || n.hasOwnProperty(zh) || (n[zh] = !0),
        Object[Dh](t, i, n)
    }
    function Z(t, i) {
        for (var n in i) if (Nh != n[0]) {
            var e = i[n];
            vh != typeof e || e.hasOwnProperty(zh) || (e[zh] = !0)
        }
        Object[Rh](t, i)
    }
    function J(i, n) {
        n || (n = t);
        for (var e = i.split(Bh), s = 0, r = e.length; r > s; s++) {
            var h = e[s];
            n = n[h]
        }
        return n
    }
    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t.touches !== n
    }
    function ti(i) {
        t.console && console[$h](i)
    }
    function ii(i) {
        t[Fh] && console[Gh](i)
    }
    function ni(i) {
        t[Fh] && console[Yh](i)
    }
    function ei(t, i, n) {
        var e, s, r;
        0 == t._ny ? (e = -1, r = 0, s = i) : 0 == t._o1 ? (e = 0, r = 1, s = n) : (e = -1 / t._ny, s = (t._ny - e) * i + t._nz, r = 1);
        var h = new wN;
        return h._ny = e,
        h._nz = s,
        h._o1 = r,
        h._ns = i,
        h._nt = n,
        h._ly = Math[Uh](e, r),
        h._o1os = Math[Hh](h._ly),
        h._sin = Math.sin(h._ly),
        h
    }
    function si(t, i, n, e, s) {
        var r, h;
        i > e ? r = -1 : e > i && (r = 1),
        n > s ? h = -1 : s > n && (h = 1);
        var a, o;
        if (!r) return o = 0 > h ? t.y: t[qh],
        {
            x: i,
            y: o
        };
        if (!h) return a = 0 > r ? t.x: t.right,
        {
            x: a,
            y: n
        };
        var f = (n - s) / (i - e),
        _ = n - f * i,
        c = 0 > r ? i - t.x: i - t[Wh],
        u = 0 > h ? n - t.y: n - t.bottom;
        return Math[Vh](f) >= Math[Vh](u / c) ? (o = 0 > h ? t.y: t[qh], a = (o - _) / f) : (a = 0 > r ? t.x: t[Wh], o = f * a + _),
        {
            x: a,
            y: o
        }
    }
    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }
    function hi(t, i, n, e, s, r) {
        return s >= t && t + n >= s && r >= i && i + e >= r
    }
    function ai(t, i, n, e, s, r, h, a) {
        return s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }
    function oi(t, i, e) {
        if (!t) return {
            x: 0,
            y: 0
        };
        if (t.x !== n) return {
            x: t.x,
            y: t.y
        };
        var s, r, h = t[Xh],
        a = t.verticalPosition;
        switch (h) {
        case kN:
            s = 0;
            break;
        case CN:
            s = i;
            break;
        default:
            s = i / 2
        }
        switch (a) {
        case jN:
            r = 0;
            break;
        case AN:
            r = e;
            break;
        default:
            r = e / 2
        }
        return {
            x: s,
            y: r
        }
    }
    function fi(t, i, n) {
        t[Gr][nh](i, n),
        t[Kh](i, n)
    }
    function _i(t, i) {
        t._fo && (t._fo.remove(i), t.onChildRemove(i))
    }
    function ci(t) {
        return t.replace(/^-ms-/, Zh).replace(/-([\da-z])/gi,
        function(t, i) {
            return i[Jh]()
        })
    }
    function ui(t) {
        return t[Qh](/[A-Z]/g,
        function(t) {
            return ta + t.toLowerCase()
        }).replace(/^ms-/, ia)
    }
    function di(t, i) {
        var n = t.style;
        if (!n) return ! 1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = tR(e)) && (n[s] = i[e]);
        return t
    }
    function li(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = tR(i)) && (e += ui(n) + na + t[i] + ea);
        return e ? e[sa](0, e[Fr] - 1) : e
    }
    function vi(t, i, n) { (i = tR(i)) && (t[ra][i] = n)
    }
    function bi(t, i) {
        return JN ? (i && !I(i) && (i = li(i)), JN[ha] ? void JN[ha](t + aa + i + oa, 0) : void(JN[fa] && JN[fa](t, i, 0))) : !1
    }
    function yi(i, n) {
        i[_a] && (i = i[ca] && i[ca][Fr] ? i[ca][0] : i[_a][0]);
        var e = n[ua](),
        s = i[da] || 0,
        r = i.clientY || 0;
        return cN && hN && (t[la] && s == i.pageX && (s -= t[la]), t[va] && r == i[ba] && (r -= t[va])),
        {
            x: s - e.left,
            y: r - e.top
        }
    }
    function gi(t, i) {
        return this[Eh + i] = nR(t, i,
        function(t) {
            return wi[Yr](this, t, i)
        },
        !1, this)
    }
    function pi(t) {
        var i = this;
        return t[ya] = function() {
            return i._l1.getElementByMouseEvent(t)
        },
        t.getUI = function() {
            return i._l1[ga](t)
        },
        t
    }
    function xi(t) {
        this.__o1ancelClick || (this.__o1lickEvent = t, this.__o1lickTime ? this.__o1lickTime++:(this.__o1lickTime = 1, setTimeout(G(this,
        function() {
            if (this.__o1lickEvent) {
                var t = this.__o1lickTime;
                this.__o1lickTime = 0,
                1 == t ? this._ie(this.__o1lickEvent, pa) : t > 1 && this._ie(this.__o1lickEvent, xa),
                this.__o1lickEvent = null
            }
        }), bN[ma])))
    }
    function mi(t) {
        if (t[_a]) {
            for (var i = t[_a], n = [], e = 0, s = i.length; s > e; e++) {
                var r = i[e];
                n[Kr]({
                    pageX: r.pageX,
                    pageY: r.pageY,
                    clientX: r[da],
                    clientY: r[Ea]
                })
            }
            return {
                timeStamp: t[wa],
                touches: n,
                scale: t[Ta]
            }
        }
        return {
            timeStamp: t[wa],
            x: t[da],
            y: t[Ea]
        }
    }
    function Ei(t, i) {
        switch (i) {
        case "touchstart":
            if (t[_a].length >= 2) return this._ny6 = mi(t),
            this._d0[Oa](),
            this._1t(),
            void(this._d2 || (this._d2 = t, this._ny6 = mi(t)));
        case "mousedown":
            if (P(t), 2 == t.button) return;
            if (this._ie(t, Ma), this._d2 = t, this._ny6 = mi(t), t[Ia] || (this.__onLongPressFunction ? this.__longPressTimer && this._1t() : this.__onLongPressFunction = G(this,
            function() {
                this.__longPressTimer = null,
                this._d2 && (this.__o1ancelClick = !0, this._ie(this._d2, ka))
            }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, bN.LONG_PRESS_INTERVAL), this.__o1ancelClick = !1), cN) return;
            return void(hR._o1urrentInteractionSupport = this);
        case "touchend":
            if (!this._d2) return void(this._moving = null);
            if (t[_a][Fr]) return void(this._ny6 = mi(t));
            t.timeStamp - this._d2[wa] < 200 && xi[Yr](this, this._d2);
        case "touchcancel":
            if (!this._d2) return void(this._moving = null);
            this._moving && (this._moving = null, this._if(t));
        case "mouseup":
            return void this._e3(t);
        case "click":
            return void xi[Yr](this, t);
        case "mousewheel":
        case "DOMMouseScroll":
            return t[Sa] = t[Ca] || -t.detail,
            this._ie(t, ja);
        case "touchmove":
            var n = t[_a][Fr];
            return this._moving || (this._moving = !0, 1 == n && this._e6()),
            void this._k4(t)
        }
    }
    function wi(t, i) {
        return t = pi.call(this, t),
        Ei.call(this, t, i),
        Pa != i && Aa != i ? this._ie(t, La + i) : void 0
    }
    function Ti(t, i) {
        var n = Eh + i;
        eR(t, i, this[n]),
        F(this, n)
    }
    function Oi(i) {
        l(sR,
        function(t) {
            gi[Yr](this, i, t)
        },
        this),
        cN || hR._nz1 || (hR._nz1 = !0, nR(t, za,
        function(t) {
            if (hR._o1urrentInteractionSupport) {
                P(t);
                var i = hR._o1urrentInteractionSupport;
                if (!hR._dragging) {
                    if (i._d2) {
                        var n = i._d2.screenX - t[Da],
                        e = i._d2[Na] - t[Na];
                        if (4 > n * n + e * e) return
                    }
                    hR._dragging = !0,
                    i._e6()
                }
                i._k4(t)
            }
        },
        !0), nR(t, Ra,
        function(t) {
            var i = hR._o1urrentInteractionSupport;
            delete hR._o1urrentInteractionSupport,
            hR._dragging && (delete hR._dragging, C(t), t = pi[Yr](i, t), i._if(t), i._e3(t))
        },
        !0))
    }
    function Mi(t) {
        l(sR,
        function(i) {
            Ti[Yr](this, t, i)
        },
        this),
        this._nyj()
    }
    function Ii(t, i, n) {
        this._n2 = t,
        this._d0 = new Si,
        Oi[Yr](this, t),
        i && (this._listener = i),
        this._l8 = n
    }
    function ki(t) {
        return aN && t.metaKey || !aN && t[Ba]
    }
    function Si() {
        this[$a] = []
    }
    function Ci(t, i, n, e, s) {
        Pi(t,
        function(e) {
            if (i) {
                var s = e[Fa];
                if (!s) return void(n || pR)(Ga + t + Ya);
                i(s)
            }
        },
        n, e, s)
    }
    function ji(t, i, n, e, s) {
        Pi(t,
        function(e) {
            if (i) {
                var s, r = e.responseText;
                if (!r) return (n || pR)(Ga + t + Ua),
                s = new Error(Ga + t + Ua),
                i(r, s);
                try {
                    r = JSON[Ha](r)
                } catch(h) { (n || pR)(h),
                    s = h
                }
                i(r, s)
            }
        },
        n, e, s)
    }
    function Pi(t, i, n, e, s) { (n === !1 || e === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest,
            h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h[Zr](qa) > 0 ? "&": qa,
                h += a + Wa + Date[Va]()
            }
            r.open(Xa, h),
            r[Ka] = function() {
                return 4 == r[Za] ? r[Ja] && 200 != r[Ja] ? void(n || pR)(Ga + t + Qa) : void(i && i(r)) : void 0
            },
            r.send(e)
        } catch(o) { (n || pR)(Ga + t + Qa, o)
        }
    }
    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }
    function ai(t, i, n, e, s, r, h, a) {
        return s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }
    function Ai(t, i, n) {
        return t instanceof Object && t.x ? zi(t, i, 0, 0) : Li(t, i, n, 0, 0)
    }
    function Li(t, i, n, e, s) {
        var r = Math[to](n),
        h = Math[Hh](n),
        a = t - e,
        o = i - s;
        return t = a * h - o * r + e,
        i = a * r + o * h + s,
        new mN(t, i, n)
    }
    function zi(t, i, n, e) {
        n = n || 0,
        e = e || 0;
        var s = Math[to](i),
        r = Math[Hh](i),
        h = t.x - n,
        a = t.y - e;
        return t.x = h * r - a * s + n,
        t.y = h * s + a * r + e,
        t
    }
    function Di(t, i, n) {
        return Ni(t, i, n, 0, 0)
    }
    function Ni(t, i, n, e, s) {
        var r = Li(t.x, t.y, i, e, s),
        h = Ai(t.x + t[io], t.y, i, e, s),
        a = Ai(t.x + t[io], t.y + t[no], i, e, s),
        o = Ai(t.x, t.y + t[no], i, e, s);
        return n ? n[Oa]() : n = new ON,
        n[eo](r),
        n[eo](h),
        n[eo](a),
        n[eo](o),
        n
    }
    function Ri(t, i) {
        var n = this[so] || 1;
        this[ra][io] = t + ro,
        this.style[no] = i + ro,
        this[io] = t * n,
        this.height = i * n
    }
    function Bi() {
        this[ho][io] = this[ho][io]
    }
    function $i(t) {
        var i = t[ao] || t[oo] || t[fo] || t[_o] || t[co] || 1;
        return ER / i
    }
    function Fi(t, n, e) {
        var s = i[uo](ho);
        if (s.g = s.getContext(lo), t !== !0 && !e) return t && n && (s.width = t, s[no] = n),
        s;
        var r = s.g;
        return r.ratio = s[so] = $i(r),
        s.setSize = Ri,
        r._l5 = Bi,
        t && n && s.setSize(t, n),
        s
    }
    function Gi(t, i, e) {
        if (t === n || null === t) return {
            width: 0,
            height: 0
        };
        var s = Yi();
        e = e || bN.FONT,
        s[vo] != e && (s[vo] = e);
        for (var r = i * bN[bo], h = 0, a = 0, o = t[sh](yo), f = 0, _ = o.length; _ > f; f++) {
            var c = o[f];
            h = Math.max(s.measureText(c)[io], h),
            a += r
        }
        return {
            width: h,
            height: a
        }
    }
    function Yi(t, i) {
        return wR || (wR = Fi()),
        t && i && (wR.width = t, wR[no] = i),
        wR.g
    }
    function Ui(t) {
        return Math[$h](t + Math.sqrt(t * t + 1))
    }
    function Hi(t, i) {
        i = i || t(1);
        var n = 1 / i,
        e = .5 * n,
        s = Math[go](1, i / 100);
        return function(r) {
            if (0 >= r) return 0;
            if (r >= i) return 1;
            for (var h = r * n,
            a = 0; a++<10;) {
                var o = t(h),
                f = r - o;
                if (Math[Vh](f) <= s) return h;
                h += f * e
            }
            return h
        }
    }
    function qi(t, i, n) {
        var e = 1 - t,
        s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
        r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
            a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: r,
                rotate: Math.atan2(a, h)
            }
        }
        return {
            t: t,
            x: s,
            y: r
        }
    }
    function Wi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e: -1
    }
    function Vi(t, i) {
        i[nh](t[4], t[5]);
        var n = Wi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = qi(n, t);
            i.add(e.x, e.y)
        }
        var s = Wi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = qi(s, t);
            i[nh](e.x, e.y)
        }
        return i
    }
    function Xi(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0],
            n = t[1],
            e = t[4],
            s = t[5],
            r = Math[po](TR(i, n, e, s));
            return function(t) {
                return r * t
            }
        }
        var h = t[0],
        a = t[2],
        o = t[4],
        f = h - 2 * a + o,
        _ = 2 * a - 2 * h;
        h = t[1],
        a = t[3],
        o = t[5];
        var c = h - 2 * a + o,
        u = 2 * a - 2 * h,
        d = 4 * (f * f + c * c),
        l = 4 * (f * _ + c * u),
        v = _ * _ + u * u,
        r = 4 * d * v - l * l,
        b = 1 / r,
        y = .125 * Math[xo](d, -1.5),
        g = 2 * Math[po](d),
        p = (r * Ui(l / Math[po](r)) + 2 * Math[po](d) * l * Math[po](v)) * y;
        return function(t) {
            var i = l + 2 * t * d,
            n = i / Math[po](r),
            e = i * i * b;
            return (r * Math[$h](n + Math[po](e + 1)) + g * i * Math[po](v + t * l + t * t * d)) * y - p
        }
    }
    function Ki(t, i, n) {
        var e = 1 - t,
        s = i[0],
        r = i[2],
        h = i[4],
        a = i[6],
        o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + ( - 3 * t * t + 6 * t - 3) * s;
        s = i[1],
        r = i[3],
        h = i[5],
        a = i[7];
        var _ = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + ( - 3 * t * t + 6 * t - 3) * s;
            return {
                x: o,
                y: _,
                rotate: Math.atan2(c, f)
            }
        }
        return {
            x: o,
            y: _
        }
    }
    function Zi(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * n,
        h = i - t,
        a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [ - r / (2 * s)] : (a = Math[po](a), [(a - r) / (2 * s), ( - a - r) / (2 * s)])
    }
    function Ji(t, i) {
        i[nh](t[6], t[7]);
        var n = Zi(t[0], t[2], t[4], t[6]);
        if (n) for (var e = 0; e < n[Fr]; e++) {
            var s = n[e];
            if (! (0 >= s || s >= 1)) {
                var r = Ki(s, t);
                i[nh](r.x, r.y)
            }
        }
        if (n = Zi(t[1], t[3], t[5], t[7])) for (var e = 0; e < n[Fr]; e++) {
            var s = n[e];
            if (! (0 >= s || s >= 1)) {
                var r = Ki(s, t);
                i[nh](r.x, r.y)
            }
        }
    }
    function Qi(t) {
        var i = {
            x: t[0],
            y: t[1]
        },
        n = {
            x: t[2],
            y: t[3]
        },
        e = {
            x: t[4],
            y: t[5]
        },
        s = {
            x: t[6],
            y: t[7]
        },
        r = i.x - 0,
        h = i.y - 0,
        a = n.x - 0,
        o = n.y - 0,
        f = e.x - 0,
        _ = e.y - 0,
        c = s.x - 0,
        u = s.y - 0,
        d = 3 * ( - r + 3 * a - 3 * f + c),
        l = 6 * (r - 2 * a + f),
        v = 3 * ( - r + a),
        b = 3 * ( - h + 3 * o - 3 * _ + u),
        y = 6 * (h - 2 * o + _),
        g = 3 * ( - h + o),
        p = function(t) {
            var i = d * t * t + l * t + v,
            n = b * t * t + y * t + g;
            return Math[po](i * i + n * n)
        },
        x = (p(0) + 4 * p(.5) + p(1)) / 6;
        return x
    }
    function tn(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e,
            r = 2 * t - 4 * i + 2 * n,
            h = i - t;
            return function(t) {
                return 3 * (s * t * t + r * t + h)
            }
        }
        function e(t, i) {
            var n = s(t),
            e = r(t);
            return Math[po](n * n + e * e) * i
        }
        var s = n(t[0], t[2], t[4], t[6]),
        r = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function(t) {
            if (!t) return 0;
            for (var i, n = 0,
            s = 0;;) {
                if (i = n + h, i >= t) return s += e(n, i - n);
                s += e(n, h),
                n = i
            }
        }
    }
    function nn(t, i, n) {
        return TR(i, n, t.cx, t.cy) <= t._squareR + OR
    }
    function en(t, i, n, e) {
        return n = n || sn(t, i),
        new rn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }
    function sn(t, i) {
        return EN(t.x, t.y, i.x, i.y)
    }
    function rn(t, i, n, e, s, r, h) {
        this.cx = t,
        this.cy = i,
        this.r = n,
        this._squareR = n * n,
        this.p1 = e,
        this.p2 = s,
        this.p3 = r,
        this._otherPoint = h
    }
    function hn(t, i, n, e) {
        this.cx = t,
        this.cy = i,
        this[io] = n,
        this[no] = e
    }
    function an(t) {
        var i = t[0],
        n = t[1],
        e = t[2],
        s = rn._kvCircle(i, n, e);
        return fn(t, i, n, e, s)
    }
    function on(t, i) {
        i = i || _n(t);
        for (var n, e = i.width / i[no], s = [], r = t.length, h = 0; r > h; h++) n = t[h],
        s[Kr]({
            x: n.x,
            y: n.y * e
        });
        var a = an(s);
        return a ? new hn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }
    function fn(t, i, n, e, s) {
        for (var r, h, a = t[Fr], o = s._squareR, f = 0; a > f; f++) if (r = t[f], r != i && r != n && r != e) {
            var _ = TR(s.cx, s.cy, r.x, r.y);
            _ - OR > o && (o = _, h = r)
        }
        if (!h) return s;
        var c, u = rn._kvCircle(h, i, n),
        d = rn._kvCircle(h, i, e),
        l = rn._kvCircle(h, e, n);
        return nn(u, e.x, e.y) && (c = u),
        nn(d, n.x, n.y) && (!c || c.r > d.r) && (c = d),
        nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l),
        i = c.p1,
        n = c.p2,
        e = c.p3 || c._otherPoint,
        fn(t, i, n, e, c)
    }
    function _n(t) {
        for (var i, n = t[Fr], e = new ON, s = 0; n > s; s++) i = t[s],
        e[nh](i.x, i.y);
        return e
    }
    function cn(t, i, n, e, s) {
        this._74 && this.validate();
        var r = s ? this[mo](s) : this.bounds,
        h = n / r[io],
        a = t - h * r.x,
        o = e / r[no],
        f = i - o * r.y,
        _ = this._fy,
        c = [];
        return l(_,
        function(t) {
            var i = t[Xr](),
            n = i.points;
            if (n && n[Fr]) {
                for (var e = n[Fr], s = [], r = 0; e > r; r++) {
                    var _ = n[r];
                    r++;
                    var u = n[r];
                    _ = h * _ + a,
                    u = o * u + f,
                    s[Kr](_),
                    s.push(u)
                }
                i[$a] = s
            }
            c.push(i)
        },
        this),
        new nB(c)
    }
    function un(t, i, n, e, s, r) {
        if (s = s || 0, n = n || 0, !s && !r) return ! 1;
        if (!e) {
            var h = this[mo](s);
            if (!h[Eo](t, i, n)) return ! 1
        }
        var a = Math[wo](2 * n) || 1,
        o = Yi(a, a),
        f = (o[ho], -t + n),
        _ = -i + n;
        if (o[To](1, 0, 0, 1, f, _), !o[Oo]) {
            this._ma(o),
            s && o.stroke(),
            r && o.fill();
            for (var c = o[Mo](0, 0, a, a)[Io], u = c.length / 4; u > 0;) {
                if (c[4 * u - 1] > iB) return ! 0; --u
            }
            return ! 1
        }
        return o[ko] = (s || 0) + 2 * n,
        this._ma(o),
        s && o[Oo](n, n) ? !0 : r ? o[So](n, n) : !1
    }
    function dn(t, i, n) {
        if (!this._jf) return null;
        var e = this._fy;
        if (e.length < 2) return null;
        n === !1 && (t += this._jf);
        var s = e[0];
        if (0 >= t) return Bs(s.points[0], s[$a][1], e[1][$a][0], e[1][$a][1], t, i);
        if (t >= this._jf) {
            s = e[e[Fr] - 1];
            var r, h, a = s.points,
            o = a.length,
            f = a[o - 2],
            _ = a[o - 1];
            if (o >= 4) r = a[o - 4],
            h = a[o - 3];
            else {
                s = e[e[Fr] - 2];
                var c = s[Co];
                r = c.x,
                h = c.y
            }
            return Bs(f, _, f + f - r, _ + _ - h, t - this._jf, i)
        }
        for (var u, d = 0,
        l = 1,
        o = e[Fr]; o > l; l++) if (u = e[l], u._jf) {
            if (! (d + u._jf < t)) {
                var v, c = s[Co];
                if (u.type == JR) {
                    var b = u[$a];
                    v = ln(t - d, u, c.x, c.y, b[0], b[1], b[2], b[3], u._r)
                } else {
                    if (!u._lf) return Bs(c.x, c.y, u[$a][0], u[$a][1], t - d, i);
                    var y = Hi(u._lf, u._jf)(t - d),
                    b = u[$a];
                    v = u[jo] == ZR && 6 == b[Fr] ? Ki(y, [c.x, c.y][Hr](b), !0) : qi(y, [c.x, c.y][Hr](b), !0)
                }
                return i && (v.x -= i * Math.sin(v[Po] || 0), v.y += i * Math[Hh](v[Po] || 0)),
                v
            }
            d += u._jf,
            s = u
        } else s = u
    }
    function ln(t, i, n, e, s, r, h, a) {
        if (t <= i._l1) return Bs(n, e, s, r, t);
        if (t >= i._jf) return t -= i._jf,
        Bs(i._p2x, i._p2y, h, a, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i._CCW && (o = -o);
            var f = Li(i._p1x, i._p1y, o, i._o.x, i._o.y);
            return f[Po] += i._ny1 || 0,
            f[Po] += Math.PI,
            f
        }
        return Bs(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }
    function ei(t, i, n) {
        var e, s, r;
        0 == t._ny ? (e = -1, r = 0, s = i) : 0 == t._o1 ? (e = 0, r = 1, s = n) : (e = -1 / t._ny, s = (t._ny - e) * i + t._nz, r = 1);
        var h = new wN;
        return h._ny = e,
        h._nz = s,
        h._o1 = r,
        h._ns = i,
        h._nt = n,
        h
    }
    function vn(t) {
        return t %= 2 * Math.PI,
        0 > t && (t += 2 * Math.PI),
        t
    }
    function bn(t, i, n, e, s, r, h, a) {
        var o = EN(i, n, e, s),
        f = EN(e, s, r, h);
        if (!o || !f) return t._d = 0,
        t._r = 0,
        t._l1 = o,
        t._l2 = f,
        t._jf = 0;
        var _ = gn(e, s, i, n),
        c = gn(e, s, r, h);
        t._ny1 = _,
        t._ny2 = c;
        var u = _ - c;
        u = vn(u),
        u > Math.PI && (u = 2 * Math.PI - u, t._CCW = !0);
        var d = Math.PI - u,
        l = Math[Ao](u / 2),
        v = a / l,
        b = Math[go](o, f);
        v > b && (v = b, a = l * v);
        var y, g = e + Math[Hh](_) * v,
        p = s + Math.sin(_) * v,
        x = e + Math.cos(c) * v,
        m = s + Math[to](c) * v,
        E = new wN(i, n, e, s),
        w = new wN(e, s, r, h),
        T = ei(E, g, p),
        O = ei(w, x, m),
        M = T._43(O),
        I = Math.atan2(p - M.y, g - M.x),
        k = Math[Uh](m - M.y, x - M.x);
        y = t._CCW ? k: I;
        for (var S, C = 0; 4 > C;) {
            var j = C * pN;
            if (vn(j - y) <= d) {
                var P, A;
                if (S ? S++:S = 1, 0 == C ? (P = M.x + a, A = M.y) : 1 == C ? (P = M.x, A = M.y + a) : 2 == C ? (P = M.x - a, A = M.y) : (P = M.x, A = M.y - a), t[Lo + S] = {
                    x: P,
                    y: A
                },
                2 == S) break
            }
            C++
        }
        return t._p1x = g,
        t._p1y = p,
        t._p2x = x,
        t._p2y = m,
        t._o = M,
        t._d = v,
        t._r = a,
        t._l1 = o - v,
        t._l2 = f - v,
        t._jf = t._l1 + d * a
    }
    function yn(t, i, n, e, s, r, h) {
        var a = gn(n, e, t, i),
        o = gn(n, e, s, r),
        f = a - o;
        return h ? f: (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }
    function gn(t, i, n, e) {
        return Math[Uh](e - i, n - t)
    }
    function pn(t) {
        var i = IR.exec(t);
        if (i) return i[1];
        var n = t[zo](Bh);
        return n >= 0 && n < t.length - 1 ? t[sa](n + 1) : void 0
    }
    function xn(t) {
        if (!t) return null;
        if (t instanceof nB) return LR;
        if (t[Do] instanceof Function) return AR;
        if (I(t)) {
            var i = pn(t);
            if (i) {
                if (!QD && kR[No](i)) return PR;
                if (SR.test(i)) return jR
            }
            return CR
        }
    }
    function mn(t, i, n) {
        if (this._mf = xn(t), !this._mf) throw new Error("the image format is not supported", t);
        this._mc = t,
        this._nz0 = i,
        this._9h = n,
        this[io] = i || bN[Ro],
        this[no] = n || bN[Bo],
        this._jy = {}
    }
    function En(t, i, n, e) {
        return i ? (RR[t] = new mn(i, n, e), t) : void delete RR[t]
    }
    function wn(t) {
        if (t._l0) return t._l0;
        var i = I(t);
        if (!i && !t.name) return t._l0 = new mn(t);
        var n = t.name || t;
        return n in RR ? RR[n] : RR[n] = new mn(t)
    }
    function Tn(t) {
        return t in RR
    }
    function On(t, i, n) {
        n = n || {};
        var e = t[mo](n[ko]);
        if (!e[io] || !e[no]) return ! 1;
        var s = i.getContext(lo),
        r = i[so] || 1,
        h = n[$o] || Fo,
        a = /full/i[No](h),
        o = /uniform/i[No](h),
        f = 1,
        _ = 1;
        if (a) {
            var c = i[io],
            u = i[no],
            d = n[Go],
            l = 0,
            v = 0;
            if (d) {
                var b, y, g, p;
                M(d) ? b = y = g = p = d: (b = d[Yo] || 0, y = d[qh] || 0, g = d[Uo] || 0, p = d.right || 0),
                c -= g + p,
                u -= b + y,
                l += g,
                v += b
            }
            f = c / e[io],
            _ = u / e[no],
            o && (f > _ ? (l += (c - _ * e.width) / 2, f = _) : _ > f && (v += (u - f * e[no]) / 2, _ = f)),
            (l || v) && s.translate(l, v)
        }
        s[Ho]( - e.x * f, -e.y * _),
        t.draw(s, r, n, f, _, !0)
    }
    function Mn(t, i, n) {
        var e = wn(t);
        return e ? (e[qo](), (e._mf == PR || e._7m()) && e._nyg(function(t) {
            t[Wo] && (this[io] = this.width, On(t.source, this, n))
        },
        i), void On(e, i, n)) : (xR.error(Vo + t), !1)
    }
    function In(t, i, e, s) {
        var r = t[Fr];
        if (r && !(0 > r)) {
            s = s || 1;
            for (var h, a, o, f = [], _ = 0; _++<r;) if (h = t[Xo](_, 0), h && EN(i, e, h.x, h.y) <= s) {
                a = _,
                o = h[Po];
                break
            }
            if (a !== n) {
                for (var h, c, u, d = 0,
                _ = 0,
                l = t._fy[Fr]; l > _; _++) {
                    if (h = t._fy[_], !c && (d += h._jf || 0, d > a)) {
                        c = !0;
                        var v = Math.max(10, h._jf / 6),
                        b = v * Math[to](o),
                        y = v * Math[Hh](o);
                        if (h.type == ZR) {
                            var g = h.points[0],
                            p = h[$a][1];
                            if (u) {
                                var x = new wN(i, e, i + y, e + b),
                                m = x._43(new wN(u[Co].x, u[Co].y, h.points[0], h[$a][1]));
                                m.x !== n && (g = m.x, p = m.y)
                            }
                            f[Kr](new tB(ZR, [g, p, i - y, e - b, i, e]))
                        } else f.push(new tB(KR, [i - y, e - b, i, e]));
                        if (h.points) if (h[jo] == ZR) {
                            h[$a][0] = i + y,
                            h.points[1] = e + b;
                            var x = new wN(i, e, i + y, e + b),
                            m = x._43(new wN(h[$a][2], h[$a][3], h[$a][4], h[$a][5]));
                            m.x !== n && (h.points[2] = m.x, h[$a][3] = m.y)
                        } else if (h[jo] == KR) {
                            h[jo] = ZR,
                            h[$a] = [i + y, e + b][Hr](h[$a]);
                            var x = new wN(i, e, i + y, e + b),
                            m = x._43(new wN(h[$a][2], h.points[3], h[$a][4], h.points[5]));
                            m.x !== n && (h[$a][2] = m.x, h.points[3] = m.y)
                        } else h[jo] == XR && (h[jo] = KR, h[$a] = [i + y, e + b][Hr](h[$a]), _ == l - 1 && (h[Ko] = !0))
                    }
                    f[Kr](h),
                    u = h
                }
                return f
            }
        }
    }
    function kn(t) {
        var i = t[io],
        n = t[no];
        try {
            var e = t.g[Mo](0, 0, i, n);
            return Cn(e[Io], i, n)
        } catch(s) {
            xR.error(s)
        }
    }
    function Sn(t, i, n) {
        this._18(t, i, n)
    }
    function Cn(t, i, n) {
        return new Sn(t, i, n)
    }
    function jn(t) {
        if (Ah == t[0]) {
            if (t = t[sa](1), 3 == t.length) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t[Fr]) return;
            return t = parseInt(t, 16),
            [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i.test(t)) {
            var i = t.indexOf(Zo),
            n = t[Zr](Ph);
            if (0 > i || i > n) return;
            if (t = t[sa](i + 1, n), t = t.split(jh), t[Fr] < 3) return;
            var e = parseInt(t[0]),
            s = parseInt(t[1]),
            r = parseInt(t[2]),
            h = 3 == t[Fr] ? 255 : parseInt(t[3]);
            return [e, s, r, h]
        }
    }
    function Pn(t, i, n) {
        return n || (n = bN[Jo]),
        n == mR[Qo] ? t * i: n == mR.BLEND_MODE_DARKEN ? Math[go](t, i) : n == mR[tf] ? 1 - (1 - i) / t: n == mR[nf] ? t + i - 1 : n == mR[ef] ? Math[sf](t, i) : n == mR[rf] ? t + i - t * i: i
    }
    function An(t, i, n) {
        var e = jn(i);
        if (!e) return void xR[Yh](hf + i + af);
        var s = t.g.getImageData(0, 0, t[io], t[no]),
        r = s.data;
        if (n instanceof Function) r = n(t, r, e) || r;
        else {
            var h = e[0] / 255,
            a = e[1] / 255,
            o = e[2] / 255;
            if (n == mR[of]) for (var f = 0,
            _ = r[Fr]; _ > f; f += 4) {
                var c = 77 * r[f] + 151 * r[f + 1] + 28 * r[f + 2] >> 8;
                r[f] = c * h | 0,
                r[f + 1] = c * a | 0,
                r[f + 2] = c * o | 0
            } else for (var f = 0,
            _ = r[Fr]; _ > f; f += 4) r[f] = 255 * Pn(h, r[f] / 255, n) | 0,
            r[f + 1] = 255 * Pn(a, r[f + 1] / 255, n) | 0,
            r[f + 2] = 255 * Pn(o, r[f + 2] / 255, n) | 0
        }
        var t = Fi(t[io], t[no]);
        return t.g[ff](s, 0, 0),
        t
    }
    function Ln(t, i, n, e) {
        return 1 > n && (n = 1),
        zn(t - n, i - n, 2 * n, 2 * n, e)
    }
    function zn(t, i, n, e, s) {
        n = Math.round(n) || 1,
        e = Math[wo](e) || 1;
        var r = Yi(n, e);
        r.setTransform(1, 0, 0, 1, -t, -i),
        s.draw(r);
        for (var h = r[Mo](0, 0, n, e)[Io], a = h.length / 4; a-->0;) if (h[4 * a - 1] > iB) return ! 0;
        return ! 1
    }
    function Dn(t, i, n, e, s, r) {
        t -= s.$x,
        i -= s.$y;
        var h = s._fv[_f](t, i, n, e);
        if (!h) return ! 1;
        t = h.x * r,
        i = h.y * r,
        n = h[io] * r,
        e = h[no] * r,
        n = Math[wo](n) || 1,
        e = Math[wo](e) || 1;
        var a = Yi(),
        o = a[ho];
        o[io] < n || o[no] < e ? (o[io] = n, o[no] = e) : (a[To](1, 0, 0, 1, 0, 0), a[cf](0, 0, n, e)),
        a.setTransform(1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r),
        a[Ta](r, r),
        s._jt(a, 1);
        for (var f = a[Mo](0, 0, n, e)[Io], _ = f[Fr] / 4; _-->0;) if (f[4 * _ - 1] > iB) return ! 0;
        return ! 1
    }
    function Nn(t, i, n, e, s, r, h, a, o) {
        if (hi(t, i, n, e, a, o)) return null;
        var f, _, c, u = new tB(XR, [t + n - s, i]),
        d = new tB(KR, [t + n, i, t + n, i + r]),
        l = new tB(XR, [t + n, i + e - r]),
        v = new tB(KR, [t + n, i + e, t + n - s, i + e]),
        b = new tB(XR, [t + s, i + e]),
        y = new tB(KR, [t, i + e, t, i + e - r]),
        g = new tB(XR, [t, i + r]),
        p = new tB(KR, [t, i, t + s, i]),
        x = (new tB(QR), [u, d, l, v, b, y, g, p]),
        m = new ON(t + s, i + r, n - s - s, e - r - r);
        t > a ? (f = kN, c = 5) : a > t + n ? (f = CN, c = 1) : (f = SN, c = 0),
        i > o ? (_ = jN, f == kN && (c = 7)) : o > i + e ? (_ = AN, f == CN ? c = 3 : f == SN && (c = 4)) : (_ = PN, f == kN ? c = 6 : f == CN && (c = 2));
        var E = Yn(c, t, i, n, e, s, r, h, a, o, m),
        w = E[0],
        T = E[1],
        O = new nB,
        M = O._fy;
        M[Kr](new tB(VR, [w.x, w.y])),
        M.push(new tB(XR, [a, o])),
        M.push(new tB(XR, [T.x, T.y])),
        T._me && (M[Kr](T._me), T._meNO++);
        for (var I = T._meNO % 8,
        k = w._meNO; M[Kr](x[I]), ++I, I %= 8, I != k;);
        return w._me && M[Kr](w._me),
        O.closePath(),
        O
    }
    function Rn(t, i, e, s, r, h, a, o, f, _, c, u, d, l) {
        var v = new wN(u, d, e, s),
        b = new wN(i[0], i[1], i[4], i[5]),
        y = b._43(v, c),
        g = y[0],
        p = y[1];
        if (g._rest !== n) {
            g._meNO = (t - 1) % 8,
            p._meNO = (t + 1) % 8;
            var x = g._rest;
            7 == t ? (g.y = h + _ + Math.min(l[no], x), p.x = r + f + Math[go](l[io], x)) : 5 == t ? (g.x = r + f + Math[go](l[io], x), p.y = h + o - _ - Math.min(l.height, x)) : 3 == t ? (g.y = h + o - _ - Math.min(l[no], x), p.x = r + a - f - Math.min(l[io], x)) : 1 == t && (g.x = r + a - f - Math[go](l.width, x), p.y = h + _ + Math.min(l[no], x))
        } else {
            v._nk(v._ns, v._nt, g.x, g.y),
            g = v._$p(i),
            v._nk(v._ns, v._nt, p.x, p.y),
            p = v._$p(i);
            var m = Un(i, [g, p]),
            E = m[0],
            w = m[2];
            g._meNO = t,
            p._meNO = t,
            g._me = new tB(KR, E.slice(2)),
            p._me = new tB(KR, w.slice(2))
        }
        return [g, p]
    }
    function Bn(t, i, n, e, s, r, h, a, o, f) {
        var _, c;
        if (o - a >= i + r) _ = {
            y: n,
            x: o - a
        },
        _._meNO = 0;
        else {
            _ = {
                y: n + h,
                x: Math[sf](i, o - a)
            };
            var u = [i, n + h, i, n, i + r, n],
            d = new wN(o, f, _.x, _.y);
            if (_ = d._$p(u)) {
                S(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Un(u, [_]);
                l = l[0],
                l && (_._me = new tB(KR, l.slice(2))),
                _._meNO = 7
            } else _ = {
                y: n,
                x: i + r
            },
            _._meNO = 0
        }
        if (i + e - r >= o + a) c = {
            y: n,
            x: o + a
        },
        c._meNO = 0;
        else {
            c = {
                y: n + h,
                x: Math[go](i + e, o + a)
            };
            var v = [i + e - r, n, i + e, n, i + e, n + h],
            d = new wN(o, f, c.x, c.y);
            if (c = d._$p(v)) {
                S(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Un(v, [c]);
                l && l[l[Fr] - 1] && (c._me = new tB(KR, l[l[Fr] - 1][Ur](2))),
                c._meNO = 1
            } else c = {
                y: n,
                x: i + e - r
            },
            c._meNO = 0
        }
        return [_, c]
    }
    function $n(t, i, n, e, s, r, h, a, o, f) {
        var _, c;
        if (f - a >= n + h) _ = {
            x: i + e,
            y: f - a
        },
        _._meNO = 2;
        else {
            _ = {
                x: i + e - r,
                y: Math.max(n, f - a)
            };
            var u = [i + e - r, n, i + e, n, i + e, n + h],
            d = new wN(o, f, _.x, _.y);
            if (_ = d._$p(u)) {
                S(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Un(u, [_]);
                l = l[0],
                l && (_._me = new tB(KR, l[Ur](2))),
                _._meNO = 1
            } else _ = {
                x: i + e,
                y: n + h
            },
            _._meNO = 2
        }
        if (n + s - h >= f + a) c = {
            x: i + e,
            y: f + a
        },
        c._meNO = 2;
        else {
            c = {
                x: i + e - r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
            d = new wN(o, f, c.x, c.y);
            if (c = d._$p(v)) {
                S(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Un(v, [c]);
                l[1] && (c._me = new tB(KR, l[1][Ur](2))),
                c._meNO = 3
            } else c = {
                x: i + e,
                y: n + s - h
            },
            c._meNO = 2
        }
        return [_, c]
    }
    function Fn(t, i, n, e, s, r, h, a, o, f) {
        var _, c;
        if (o - a >= i + r) c = {
            y: n + s,
            x: o - a
        },
        c._meNO = 4;
        else {
            c = {
                y: n + s - h,
                x: Math.max(i, o - a)
            };
            var u = [i + r, n + s, i, n + s, i, n + s - h],
            d = new wN(o, f, c.x, c.y);
            if (c = d._$p(u)) {
                S(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Un(u, [c]);
                l = l[l.length - 1],
                l && (c._me = new tB(KR, l[Ur](2))),
                c._meNO = 5
            } else c = {
                y: n + s,
                x: i + r
            },
            c._meNO = 4
        }
        if (i + e - r >= o + a) _ = {
            y: n + s,
            x: o + a
        },
        _._meNO = 4;
        else {
            _ = {
                y: n + s - h,
                x: Math[go](i + e, o + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
            d = new wN(o, f, _.x, _.y);
            if (_ = d._$p(v)) {
                S(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Un(v, [_]);
                l[0] && (_._me = new tB(KR, l[0][Ur](2))),
                _._meNO = 3
            } else _ = {
                y: n + s,
                x: i + e - r
            },
            _._meNO = 4
        }
        return [_, c]
    }
    function Gn(t, i, n, e, s, r, h, a, o, f) {
        var _, c;
        if (f - a >= n + h) c = {
            x: i,
            y: f - a
        },
        c._meNO = 6;
        else {
            c = {
                x: i + r,
                y: Math[sf](n, f - a)
            };
            var u = [i, n + h, i, n, i + r, n],
            d = new wN(o, f, c.x, c.y);
            if (c = d._$p(u)) {
                S(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Un(u, [c]);
                l = l[l[Fr] - 1],
                l && (c._me = new tB(KR, l.slice(2)))
            } else c = {
                x: i,
                y: n + h
            };
            c._meNO = 7
        }
        if (n + s - h >= f + a) _ = {
            x: i,
            y: f + a
        },
        _._meNO = 6;
        else {
            _ = {
                x: i + r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + r, n + s, i, n + s, i, n + s - h],
            d = new wN(o, f, _.x, _.y);
            if (_ = d._$p(v)) {
                S(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Un(v, [_]);
                l[0] && (_._me = new tB(KR, l[0][Ur](2))),
                _._meNO = 5
            } else _ = {
                x: i,
                y: n + s - h
            },
            _._meNO = 6
        }
        return [_, c]
    }
    function Yn(t, i, n, e, s, r, h, a, o, f, _) {
        var c = a / 2;
        switch (t) {
        case 7:
            var u = [i, n + h, i, n, i + r, n],
            d = i + r,
            l = n + h;
            return Rn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
        case 5:
            return u = [i + r, n + s, i, n + s, i, n + s - h],
            d = i + r,
            l = n + s - h,
            Rn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
        case 3:
            return u = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
            d = i + e - r,
            l = n + s - h,
            Rn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
        case 1:
            return u = [i + e - r, n, i + e, n, i + e, n + h],
            d = i + e - r,
            l = n + h,
            Rn(t, u, d, l, i, n, e, s, r, h, a, o, f, _);
        case 0:
            return Bn(t, i, n, e, s, r, h, c, o, f, _);
        case 2:
            return $n(t, i, n, e, s, r, h, c, o, f, _);
        case 4:
            return Fn(t, i, n, e, s, r, h, c, o, f, _);
        case 6:
            return Gn(t, i, n, e, s, r, h, c, o, f, _)
        }
    }
    function Un(t, i) {
        for (var e, s, r, h, a, o, f = t[0], _ = t[1], c = t[2], u = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[Fr]; b++) a = i[b],
        o = a.t,
        0 != o && 1 != o ? (e = f + (c - f) * o, s = _ + (u - _) * o, r = c + (d - c) * o, h = u + (l - u) * o, v[Kr]([f, _, e, s, a.x, a.y]), f = a.x, _ = a.y, c = r, u = h) : v.push(null);
        return r !== n && v.push([a.x, a.y, r, h, d, l]),
        v
    }
    function Hn(t) {
        return this[uf] && this._nzl && (t.x -= this._nzl.x, t.y -= this._nzl.y),
        this[df] && zi(t, this[df]),
        t.x += this[lf] || 0,
        t.y += this.$offsetY || 0,
        this[vf] && this.$_hostRotate ? zi(t, this[bf]) : t
    }
    function qn(t) {
        return this[vf] && this.$_hostRotate && zi(t, -this[bf]),
        t.x -= this[lf] || 0,
        t.y -= this[yf] || 0,
        this[df] && zi(t, -this.$rotate),
        this[uf] && this._nzl && (t.x += this._nzl.x, t.y += this._nzl.y),
        t
    }
    function Wn() {
        var t = this[gf];
        this[gf] && (this.$invalidateSize = !1, this.$invalidateAnchorPoint = !0, this._8j.setByRect(this._ji), this.$padding && this._8j[pf](this.$padding), this.$border && this._8j[pf](this[xf]));
        var i = this._11();
        if (i) var n = this[mf] && this.$pointerWidth;
        return this[Ef] && this[uf] && (this.$invalidateAnchorPoint = !1, n && (t = !0), this._nzl = oi(this[wf], this._8j[io], this._8j[no]), this._nzl.x += this._8j.x, this._nzl.y += this._8j.y),
        i ? (t && (this._nzackgroundGradientInvalidateFlag = !0, Vn.call(this, n)), this._nzackgroundGradientInvalidateFlag && (this._nzackgroundGradientInvalidateFlag = !1, this._nzackgroundGradient = this[Tf] && this._msShape && this._msShape[Of] ? BR[bh].generatorGradient[Yr](this.backgroundGradient, this._msShape[Of]) : null), t) : (this.__mvPointer = !1, t)
    }
    function Vn(t) {
        var i = this._8j.x + this[xf] / 2,
        n = this._8j.y + this.$border / 2,
        e = this._8j[io] - this[xf],
        s = this._8j[no] - this.$border,
        r = 0,
        h = 0;
        if (this[Mf] && (M(this[Mf]) ? r = h = this[Mf] : (r = this[Mf].x || 0, h = this[Mf].y || 0), r = Math[go](r, e / 2), h = Math[go](h, s / 2)), t && (this._pointerX = this._nzl.x - this[lf] + this[If], this._pointerY = this._nzl.y - this[yf] + this[kf], !this._8j[Eo](this._pointerX, this._pointerY))) {
            var a = new sB(i, n, e, s, r, h, this[Sf], this._pointerX, this._pointerY);
            return this._msShape = a._me,
            this._msShape.bounds[Th](i, n, e, s),
            void(this.__mvPointer = !0)
        }
        this._msShape && this._msShape.clear(),
        this._msShape = c$.getRect(i, n, e, s, r, h, this._msShape),
        this._msShape[Of].set(i, n, e, s)
    }
    function Xn(t, i, n, e) {
        return e && (t[io] < 0 || t.height < 0) ? (t.x = i, t.y = n, void(t.width = t[no] = 0)) : (i < t.x ? (t[io] += t.x - i, t.x = i) : i > t.x + t[io] && (t[io] = i - t.x), void(n < t.y ? (t[no] += t.y - n, t.y = n) : n > t.y + t[no] && (t[no] = n - t.y)))
    }
    function Kn(t, i, e) {
        var s, r = t[Cf],
        h = t.layoutByPath === n ? this[jf] : t[jf];
        return this.$data instanceof nB && h ? (s = MR._nz7(r, this[Pf], this[ko], i, e), s.x *= this._jm, s.y *= this._jn) : (s = oi(r, this._8j.width, this._8j.height), s.x += this._8j.x, s.y += this._8j.y),
        Hn.call(this, s)
    }
    function Zn(t, i) {
        if (i) if (i._8j[Af]()) t.$x = i.$x,
        t.$y = i.$y;
        else {
            var n = Kn[Yr](i, t);
            t.$x = n.x,
            t.$y = n.y,
            t._hostRotate = n[Po]
        } else t.$x = 0,
        t.$y = 0;
        t[Lf] && aB.call(t)
    }
    function Jn(t) {
        if (t[zf] === n) {
            var i, e;
            if (t[Df]) i = t[Nf],
            e = t[Df];
            else {
                var s;
                if (t[Rf] !== n) s = Rf;
                else {
                    if (t[Bf] === n) return ! 1;
                    s = Bf
                }
                e = function(t) {
                    this[s] = t
                },
                i = function() {
                    return this[s]
                }
            }
            K(t, zf, {
                get: function() {
                    return i.call(this)
                },
                set: function(t) {
                    e[Yr](this, t)
                }
            })
        }
        if (t[$f] === n) {
            var r;
            if (t[Ff] !== n) r = Ff;
            else {
                if (t.webkitLineDashOffset === n) return;
                r = Gf
            }
            K(t, $f, {
                get: function() {
                    return this[r]
                },
                set: function(t) {
                    this[r] = t
                }
            })
        }
    }
    function Qn(t, i, n, e, s) {
        var r, h, a, o, f, _, c, u, d = function(t) {
            return function(i) {
                t(i)
            }
        },
        l = function() {
            h = null,
            a = null,
            o = f,
            f = null,
            _ = null
        },
        v = function(t) {
            r = t,
            c || (c = Fi()),
            c[io] = r[io],
            c.height = r[no],
            i[io] = r.width,
            i[no] = r[no]
        },
        b = function(t) {
            y(),
            l(),
            h = t[Yf] ? t.transparencyIndex: null,
            a = 10 * t[Uf],
            f = t.disposalMethod
        },
        y = function() {
            if (_) {
                var t = _.getImageData(0, 0, r[io], r[no]),
                n = {
                    data: t,
                    _pixels: Cn(t.data, r[io], r[no]),
                    delay: a
                };
                s[Yr](i, n)
            }
        },
        g = function(t) {
            _ || (_ = c[Hf](lo));
            var i = t.lctFlag ? t.lct: r[qf],
            n = _[Mo](t[Wf], t[Vf], t[io], t[no]);
            t[Xf][Kf](function(t, e) {
                h !== t ? (n[Io][4 * e + 0] = i[t][0], n.data[4 * e + 1] = i[t][1], n[Io][4 * e + 2] = i[t][2], n.data[4 * e + 3] = 255) : (2 === o || 3 === o) && (n.data[4 * e + 3] = 0)
            }),
            _[cf](0, 0, r[io], r[no]),
            _.putImageData(n, t.leftPos, t[Vf])
        },
        p = function() {},
        x = {
            hdr: d(v),
            gce: d(b),
            com: d(p),
            app: {
                NETSCAPE: d(p)
            },
            img: d(g, !0),
            eof: function() {
                y(),
                n[Yr](i)
            }
        },
        m = new XMLHttpRequest;
        QD || m[Zf]("text/plain; charset=x-user-defined"),
        m.onload = function() {
            u = new uB(m[Jf]);
            try {
                lB(u, x)
            } catch(t) {
                e[Yr](i, Ha)
            }
        },
        m[Qf] = function() {
            e.call(i, t_)
        },
        m[i_](Xa, t, !0),
        m[n_]()
    }
    function te(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 51, 49, 51, 51, 55, 51, 51, 55, 50, 49, 56, 10, 10, 48, 10];
        return i.forEach(function(n, e) {
            i[e] = t(n)
        }),
        i[e_]("")
    }
    function ie(t, i) {
        try {
            if (null == t || t[Fr] < 8) return;
            if (null == i || i[Fr] <= 0) return;
            for (var n = "",
            e = 0; e < i[Fr]; e++) n += i[s_](e).toString();
            var s = Math.floor(n[Fr] / 5),
            r = parseInt(n.charAt(s) + n[r_](2 * s) + n[r_](3 * s) + n[r_](4 * s) + n[r_](5 * s), 10),
            h = Math[wo](i.length / 2),
            a = Math[xo](2, 31) - 1,
            o = parseInt(t.substring(t[Fr] - 8, t[Fr]), 16);
            for (t = t.substring(0, t[Fr] - 8), n += o; n[Fr] > 10;) n = (parseInt(n[sa](0, 10), 10) + parseInt(n[sa](10, n[Fr]), 10)).toString();
            n = (r * n + h) % a;
            for (var f = "",
            _ = "",
            e = 0; e < t.length; e += 2) f = parseInt(parseInt(t[sa](e, e + 2), 16) ^ Math[dh](n / a * 255), 10),
            _ += String[h_](f),
            n = (r * n + h) % a;
            return 0 | _[0] ? HB = xB[a_ + wB + o_](_) : null
        } catch(c) {}
    }
    function ne() {
        var t = bB;
        if (!t) return void(ZB = !0);
        UB = t;
        var i;
        t = t[sh](jh);
        for (var n = 0; n < t[Fr] && (i = ie(t[n], gB), !(i && i.split(yo)[Fr] >= 8));) 1 == t.length && (i = ie(t[n], f_)),
        n++;
        if (!i || i.split(yo).length < 8) return VB = !0,
        "" === gB || gB == __ + IB + c_ + kB + u_ || gB == d_ + MB + l_ ? (XB = i$, ZB = !1, QB = !1, void(YB = !1)) : (XB = i$, void(ZB = !0));
        YB = i[sh](yo);
        var e = YB[3];
        if (e != FF) return VB = !0,
        void(QB = !0);
        ZB = !1,
        QB = !1;
        var s = YB[0]; (v_ == s || b_ == s) && (VB = !1);
        var r = YB[5];
        KB = r;
        var h = YB[6];
        XB = h
    }
    function ee() {
        var t = UB;
        if (t) {
            var i;
            t = t.split(jh);
            for (var n = 0; n < t.length && (i = n$(t[n], gB), !(i && i.split(yo)[Fr] >= 8));) 1 == t.length && (i = n$(t[n], f_)),
            n++;
            if (i[sh](yo).length >= 8) return void(JB = !1)
        }
        return "" === gB || gB == __ + IB + c_ + kB + u_ || gB == d_ + MB + l_ ? void(JB = !1) : void(JB = !0)
    }
    function se() {
        if (VB) {
            var t = ar[AB + jo]._jt,
            i = WB;
            ar[AB + jo]._jt = function() {
                t[gh](this, arguments),
                i[Yr](this._d9, this.g)
            };
            var n = cs[AB + jo]._gi;
            cs[AB + jo]._gi = function(t) {
                n.apply(this, arguments),
                i[Yr](this, t)
            }
        }
    }
    function re() {
        if (KB !== !0 && KB) {
            var t = KB.split(Bh);
            if (3 != t[Fr]) return void(d$.prototype._jt = null);
            var i = parseInt(t[0], 10),
            n = parseInt(t[1], 10),
            e = parseInt(t[2], 10),
            s = 3,
            r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            yB > r && (d$.prototype._jt = null)
        }
    }
    function he() {
        var t = 0 | XB;
        t && (gN[AB + jo]._lc = function(i, e) {
            var s = i.id;
            return s === n || this[y_](s) ? !1 : this._k2[Fr] > t ? !1 : (g(this._k2, i, e), this._m8[s] = i, i)
        })
    }
    function ae() {
        ZB && (gN[AB + jo]._lc = gN[AB + jo]._fx)
    }
    function oe() {
        JB && (cs[AB + jo]._kl = null)
    }
    function fe() {
        t$ && (ds[bh]._ki = ds[bh]._6e)
    }
    function _e() {
        QB && (N$[AB + jo]._kl = null)
    }
    function ce() {
        YB === n && (cs[AB + jo]._kl = null)
    }
    function ue(t) {
        return t.parent ? (t = t[g_], t._dy ? t._dy: t._hz === !1 ? t: null) : null
    }
    function de(t, i, n) {
        if (n = n || i[p_], n == t) return ! 1;
        var e = t.getEdgeBundle(n);
        return e || (e = new CF(t, n), t._linkedNodes[n.id] = e),
        e._ja(i, t)
    }
    function le(t, i, n) {
        if (n = n || i.toAgent, n == t) return ! 1;
        var e = t.getEdgeBundle(n);
        return e ? e._o1e(i, t) : void 0
    }
    function ve(t, i, e) {
        return e === n && (e = i[p_]),
        e != t ? (t._8b || (t._8b = new gN), t._8b[nh](i) === !1 ? !1 : void t._9l++) : void 0
    }
    function be(t, i, n) {
        return t._8b && t._8b.remove(i) !== !1 ? (t._9l--, void le(t, i, n)) : !1
    }
    function ye(t, i) {
        return i[x_] != t ? (t._9f || (t._9f = new gN), t._9f.add(i) === !1 ? !1 : void t._nyp++) : void 0
    }
    function ge(t, i) {
        return t._9f && t._9f[Vr](i) !== !1 ? (t._nyp--, void le(i[x_], i, t)) : !1
    }
    function pe(t, i) {
        if (i === n && (i = t instanceof o$), i) {
            if (t[m_]()) return null;
            var e = pe(t[E_], !1);
            if (t.isLooped()) return e;
            for (var s = pe(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[w_](s)) return s;
                if (s[w_](e)) return e;
                e = pe(e, !1),
                s = pe(s, !1)
            }
            return null
        }
        for (var r = t.parent; null != r;) {
            if (r._i0()) return r;
            r = r.parent
        }
        return null
    }
    function xe(t, i, n) {
        t._i0() && t[$r]() && t[Gr][Kf](function(t) {
            t instanceof f$ && i[nh](t) && xe(t, i, n)
        },
        this),
        t[T_]() && t._em[Kf](function(t) { (null == n || n[O_](t)) && i[nh](t) && xe(t, i, n)
        })
    }
    function me(t, i) {
        i[g_] ? i[g_][M_](i, i[g_][I_] - 1) : t[k_].setIndex(i, t[k_][Fr] - 1)
    }
    function Ee(t, i) {
        if (i instanceof o$) return void(i[m_]() || Te(t, i));
        for (me(t, i); i = i[g_];) me(t, i)
    }
    function we(t, i) {
        if (i instanceof o$) return void(i[m_]() || Te(t, i));
        for (me(t, i); i = i.parent;) me(t, i)
    }
    function Te(t, i) {
        var n = i.fromAgent;
        if (i[S_]()) me(t, n);
        else {
            var e = i[p_];
            me(t, n),
            me(t, e)
        }
    }
    function Oe(t, i) {
        return t._9l++,
        t._gf ? (i._jb = t._i3, t._i3._jc = i, void(t._i3 = i)) : (t._gf = i, void(t._i3 = i))
    }
    function Me(t, i) {
        t._9l--,
        t._i3 == i && (t._i3 = i._jb),
        i._jb ? i._jb._jc = i._jc: t._gf = i._jc,
        i._jc && (i._jc._jb = i._jb),
        i._jb = null,
        i._jc = null,
        le(t, i, i[C_])
    }
    function Ie(t, i) {
        return t._nyp++,
        t._i1 ? (i._k6 = t._k1, t._k1._k7 = i, void(t._k1 = i)) : (t._i1 = i, void(t._k1 = i))
    }
    function ke(t, i) {
        t._nyp--,
        t._k1 == i && (t._k1 = i._k6),
        i._k6 ? i._k6._k7 = i._k7: t._i1 = i._k7,
        i._k7 && (i._k7._k6 = i._k6),
        i._k6 = null,
        i._k7 = null
    }
    function Se(t, i) {
        return i = i || new gN,
        t[j_](function(t) {
            i.add({
                id: t.id,
                edge: t,
                fromAgent: t[P_]._dy,
                toAgent: t.$to._dy
            })
        }),
        t[A_](function(t) {
            t instanceof f$ && Se(t, i)
        }),
        i
    }
    function Ce(t, i, n) {
        return Pe(t, i, n) === !1 ? !1 : je(t, i, n)
    }
    function je(t, i, n) {
        if (t._gf) for (var e = t._gf; e;) {
            if (i.call(n, e) === !1) return ! 1;
            e = e._jc
        }
    }
    function Pe(t, i, n) {
        if (t._i1) for (var e = t._i1; e;) {
            if (i[Yr](n, e) === !1) return ! 1;
            e = e._k7
        }
    }
    function Ae(t, i, e, s, r, h, a) {
        return h || a ? (h = h || 0, a = a === n ? h: a || 0, h = Math.min(h, s / 2), a = Math.min(a, r / 2), t[L_](i + h, e), t.lineTo(i + s - h, e), t[z_](i + s, e, i + s, e + a), t.lineTo(i + s, e + r - a), t[z_](i + s, e + r, i + s - h, e + r), t.lineTo(i + h, e + r), t[z_](i, e + r, i, e + r - a), t.lineTo(i, e + a), t[z_](i, e, i + h, e), t.closePath(), t) : (t[L_](i, e), t.lineTo(i + s, e), t[D_](i + s, e + r), t[D_](i, e + r), t[N_](), t)
    }
    function Le(t, i) {
        var n = i.r || 1,
        e = i.cx || 0,
        s = i.cy || 0,
        r = n * Math.tan(Math.PI / 8),
        h = n * Math.sin(Math.PI / 4);
        t.moveTo(e + n, s),
        t[z_](e + n, s + r, e + h, s + h),
        t.quadTo(e + r, s + n, e, s + n),
        t[z_](e - r, s + n, e - h, s + h),
        t.quadTo(e - n, s + r, e - n, s),
        t[z_](e - n, s - r, e - h, s - h),
        t.quadTo(e - r, s - n, e, s - n),
        t.quadTo(e + r, s - n, e + h, s - h),
        t.quadTo(e + n, s - r, e + n, s)
    }
    function ze(t, i, n, e, s) {
        i instanceof hn && (e = i.width, s = i.height, n = i.cy - s / 2, i = i.cx - e / 2);
        var r = .5522848,
        h = e / 2 * r,
        a = s / 2 * r,
        o = i + e,
        f = n + s,
        _ = i + e / 2,
        c = n + s / 2;
        return t.moveTo(i, c),
        t.curveTo(i, c - a, _ - h, n, _, n),
        t[R_](_ + h, n, o, c - a, o, c),
        t[R_](o, c + a, _ + h, f, _, f),
        t[R_](_ - h, f, i, c + a, i, c),
        t
    }
    function De(t, i, n, e, s) {
        var r = 2 * e,
        h = 2 * s,
        a = i + e / 2,
        o = n + s / 2;
        return t[L_](a - r / 4, o - h / 12),
        t[D_](i + .306 * e, n + .579 * s),
        t[D_](a - r / 6, o + h / 4),
        t[D_](i + e / 2, n + .733 * s),
        t.lineTo(a + r / 6, o + h / 4),
        t[D_](i + .693 * e, n + .579 * s),
        t[D_](a + r / 4, o - h / 12),
        t[D_](i + .611 * e, n + .332 * s),
        t[D_](a + 0, o - h / 4),
        t[D_](i + .388 * e, n + .332 * s),
        t[N_](),
        t
    }
    function Ne(t, i, n, e, s) {
        return t[L_](i, n),
        t.lineTo(i + e, n + s / 2),
        t[D_](i, n + s),
        t[N_](),
        t
    }
    function Re(t, i, n, e, s) {
        return t[L_](i, n + s / 2),
        t[D_](i + e / 2, n),
        t[D_](i + e, n + s / 2),
        t[D_](i + e / 2, n + s),
        t.closePath(),
        t
    }
    function Be(t, i, n, e, s, r) {
        return t[L_](i, n),
        t.lineTo(i + e, n + s / 2),
        t.lineTo(i, n + s),
        r || (t[D_](i + .25 * e, n + s / 2), t[N_]()),
        t
    }
    function $e(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t,
        e = e || 50,
        s = s || 0,
        i = i || 0,
        n = n || 0;
        for (var r, h, a = 0,
        o = 2 * Math.PI / t,
        f = new nB; t > a;) r = i + e * Math.cos(s),
        h = n + e * Math[to](s),
        a ? f[D_](r, h) : f[L_](r, h),
        ++a,
        s += o;
        return f.closePath(),
        f
    }
    function Fe() {
        var t = new nB;
        return t[L_](75, 40),
        t.curveTo(75, 37, 70, 25, 50, 25),
        t[R_](20, 25, 20, 62.5, 20, 62.5),
        t[R_](20, 80, 40, 102, 75, 120),
        t.curveTo(110, 102, 130, 80, 130, 62.5),
        t.curveTo(130, 62.5, 130, 25, 100, 25),
        t.curveTo(85, 25, 75, 37, 75, 40),
        t
    }
    function Ge() {
        var t = new nB;
        return t[L_](20, 0),
        t[D_](80, 0),
        t[D_](100, 100),
        t.lineTo(0, 100),
        t.closePath(),
        t
    }
    function Ye() {
        var t = new nB;
        return t[L_](100, 0),
        t.lineTo(100, 80),
        t[D_](0, 100),
        t[D_](0, 20),
        t.closePath(),
        t
    }
    function Ue() {
        var t = new nB;
        return t[L_](20, 0),
        t[D_](100, 0),
        t[D_](80, 100),
        t[D_](0, 100),
        t[N_](),
        t
    }
    function He() {
        var t = new nB;
        return t[L_](43, 23),
        t.lineTo(28, 10),
        t[D_](37, 2),
        t[D_](63, 31),
        t.lineTo(37, 59),
        t[D_](28, 52),
        t.lineTo(44, 38),
        t[D_](3, 38),
        t[D_](3, 23),
        t.closePath(),
        t
    }
    function qe() {
        var t = new nB;
        return t[L_](1, 8),
        t[D_](7, 2),
        t.lineTo(32, 26),
        t[D_](7, 50),
        t[D_](1, 44),
        t.lineTo(18, 26),
        t.closePath(),
        t[L_](27, 8),
        t.lineTo(33, 2),
        t[D_](57, 26),
        t.lineTo(33, 50),
        t[D_](27, 44),
        t.lineTo(44, 26),
        t[N_](),
        t
    }
    function We() {
        var t = new nB;
        return t[L_](0, 15),
        t.lineTo(23, 15),
        t[D_](23, 1),
        t.lineTo(47, 23),
        t[D_](23, 43),
        t.lineTo(23, 29),
        t[D_](0, 29),
        t[N_](),
        t
    }
    function Ve() {
        var t = new nB;
        return t.moveTo(0, 21),
        t[D_](30, 21),
        t.lineTo(19, 0),
        t.lineTo(25, 0),
        t[D_](47, 25),
        t[D_](25, 48),
        t[D_](19, 48),
        t[D_](30, 28),
        t[D_](0, 28),
        t[N_](),
        t
    }
    function Xe() {
        var t = new nB;
        return t[L_](0, 0),
        t[D_](34, 24),
        t.lineTo(0, 48),
        t[D_](14, 24),
        t[N_](),
        t
    }
    function Ke() {
        var t = new nB;
        return t[L_](20, 0),
        t[D_](34, 14),
        t.lineTo(20, 28),
        t[D_](22, 18),
        t[D_](1, 25),
        t[D_](10, 14),
        t[D_](1, 3),
        t[D_](22, 10),
        t[N_](),
        t
    }
    function Ze() {
        var t = new nB;
        return t.moveTo(4, 18),
        t[D_](45, 18),
        t[D_](37, 4),
        t[D_](83, 25),
        t[D_](37, 46),
        t.lineTo(45, 32),
        t[D_](4, 32),
        t[N_](),
        t
    }
    function Je() {
        var t = new nB;
        return t[L_](17, 11),
        t.lineTo(27, 11),
        t.lineTo(42, 27),
        t[D_](27, 42),
        t[D_](17, 42),
        t.lineTo(28, 30),
        t.lineTo(4, 30),
        t.lineTo(4, 23),
        t[D_](28, 23),
        t.closePath(),
        t
    }
    function Qe() {
        c$[B_](mR[$_], ze(new nB, 0, 0, 100, 100)),
        c$[B_](mR.SHAPE_RECT, Ae(new nB, 0, 0, 100, 100)),
        c$[B_](mR[F_], Ae(new nB, 0, 0, 100, 100, 20, 20)),
        c$[B_](mR[G_], De(new nB, 0, 0, 100, 100)),
        c$[B_](mR[Y_], Ne(new nB, 0, 0, 100, 100)),
        c$.register(mR[U_], $e(5)),
        c$.register(mR[H_], $e(6)),
        c$[B_](mR[q_], Re(new nB, 0, 0, 100, 100)),
        c$[B_](mR[W_], Fe()),
        c$[B_](mR[V_], Ge()),
        c$[B_](mR.SHAPE_RHOMBUS, Ye()),
        c$.register(mR[X_], Ue());
        var t = new nB;
        t.moveTo(20, 0),
        t.lineTo(40, 0),
        t.lineTo(40, 20),
        t[D_](60, 20),
        t[D_](60, 40),
        t[D_](40, 40),
        t.lineTo(40, 60),
        t[D_](20, 60),
        t[D_](20, 40),
        t[D_](0, 40),
        t[D_](0, 20),
        t[D_](20, 20),
        t[N_](),
        c$[B_](mR[K_], t),
        c$[B_](mR[Z_], Be(new nB, 0, 0, 100, 100)),
        c$[B_](mR[J_], He()),
        c$.register(mR[Q_], qe()),
        c$.register(mR.SHAPE_ARROW_3, We()),
        c$.register(mR[tc], Ve()),
        c$.register(mR[ic], Xe()),
        c$.register(mR[nc], Ke()),
        c$[B_](mR[ec], Ze()),
        c$[B_](mR[sc], Je()),
        c$.register(mR[rc], Be(new nB, 0, 0, 100, 100, !0))
    }
    function ts() {
        N(this, ts, arguments),
        this[hc] = !0
    }
    function is() {
        N(this, is),
        this._14 = new YN
    }
    function ns() {
        if (this._hz === !0) {
            var t = this._8b,
            i = this._9f;
            if (t) for (t = t._k2; t[Fr];) {
                var n = t[0];
                be(this, n, n.toAgent)
            }
            if (i) for (i = i._k2; i[Fr];) {
                var n = i[0];
                ge(this, n, n[x_])
            }
            return void this.forEachChild(function(t) {
                t._i0() && ns[Yr](t)
            })
        }
        var e = Se(this);
        e[Kf](function(t) {
            t = t[ac];
            var i = t.$from,
            n = t.$to,
            e = i.isDescendantOf(this),
            s = n[w_](this);
            e && !s ? (ve(this, t), de(this, t)) : s && !e && (ye(this, t), de(t[x_], t, this))
        },
        this)
    }
    function es() {
        N(this, es, arguments),
        this[oc] = null
    }
    function ss(t, i, n, e) {
        return t[i] = n,
        e ? {
            get: function() {
                return this[i]
            },
            set: function(t) {
                if (t !== this[i]) {
                    this[i] = t,
                    !this._nz1,
                    this._1v = !0;
                    for (var n = e[Fr]; --n >= 0;) this[e[n]] = !0
                }
            }
        }: {
            get: function() {
                return this[i]
            },
            set: function(t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }
    function rs(t, i) {
        var n = {},
        e = {};
        for (var s in i) {
            var r = i[s];
            r[fc] && r[fc].forEach(function(t, i, n) {
                n[i] = _c + t,
                e[t] = !0
            }),
            n[s] = ss(t, Eh + s, r[cc], r[fc])
        }
        for (var h in e) t[_c + h] = !0;
        Object.defineProperties(t, n)
    }
    function hs(t, i, n, e) {
        if (Array[oh](i)) for (var s = i.length; --s >= 0;) hs(t, i[s], n, e);
        else {
            var r = i.target;
            if (r) {
                if (r instanceof d$ || (r = t[r]), !r) return
            } else r = t;
            if (e || (e = t[uc](i[dc], n)), i.bindingProperty && (r[i[lc]] = e), i[vc]) {
                var h = i[vc];
                h instanceof Function || (h = t[h]),
                h instanceof Function && h[Yr](t, e, r)
            }
        }
    }
    function as() {
        l$.forEach(function(t) {
            this[t] = {}
        },
        this)
    }
    function os(t, i, n, e) {
        return e == mR[bc] ? void(t[n] = i) : e == mR.PROPERTY_TYPE_CLIENT ? void t[Th](n, i) : e == mR[yc] ? void t.setStyle(n, i) : !1
    }
    function fs() {
        N(this, fs, arguments)
    }
    function _s() {
        N(this, _s, arguments)
    }
    function cs(t) {
        this._6l(),
        this._dw(t),
        this._gd = [],
        this._nzb = new z$,
        this._kj = new ds(this),
        this._ng = new gN;
        var i = this;
        this._ng._fx = function(t, n, e) {
            n[gc]();
            var s = n.uiBounds;
            return n._i8 && s && i._nzb._ms(n.$x + n[pc].x, n.$y + n[pc].y, n[pc].width, n.uiBounds.height),
            gN[bh]._fx.call(this, t, n, e)
        },
        this._ng[Oa] = function() {
            return this.forEach(function(t) {
                t[gc]()
            }),
            gN.prototype.clear.call(this)
        },
        this._o1r = [],
        this._8t = {},
        this._8o = new ON,
        this._8e = [],
        this._o1g()
    }
    function us(t) {
        var i = Fi(!0);
        return Jn(i.g),
        i[xc] = function() {
            return ! 1
        },
        t[mc](i),
        i[Jr] = P$,
        i
    }
    function ds(t) {
        this._d9 = t,
        this._kj = new yN,
        this._kj[so] = t[so],
        this._6n = new ON
    }
    function ls(t, i, n, e) {
        var s = vs(t, i, n, e),
        r = [];
        if (ps(t)) bs(s, i, n, r, e[Ec](v$[wc]));
        else {
            Ss(t, i, n, r, s, e);
            var h = ys(t, e),
            a = h ? Ts(t, s, i, n, e.getStyle(v$[Tc])) : e[Ec](v$.EDGE_SPLIT_VALUE);
            0 == a && (s = !s)
        }
        return r
    }
    function vs(t, i, n) {
        if (null != t) {
            if (t == mR[Oc] || t == mR[Mc] || t == mR[Ic] || t == mR[kc] || t == mR.EDGE_TYPE_EXTEND_RIGHT) return ! 0;
            if (t == mR[Sc] || t == mR[Cc] || t == mR[jc] || t == mR[Pc] || t == mR[Ac]) return ! 1
        }
        var e = Es(i, n),
        s = ws(i, n);
        return e >= s
    }
    function bs(t, i, n, e, s) {
        t ? Ls(i, n, e, s) : zs(i, n, e, s)
    }
    function ys(t, i) {
        return i[Ec](v$[Lc])
    }
    function gs(t) {
        return null != t && (t == mR[Pc] || t == mR[kc] || t == mR[Ac] || t == mR[zc])
    }
    function ps(t) {
        return t && (t == mR[Dc] || t == mR[Oc] || t == mR[Sc])
    }
    function xs(t, i, n, e, s) {
        if (t == mR.EDGE_TYPE_HORIZONTAL_VERTICAL || t == mR[jc]) return new mN(e.x + e[io] / 2, e.y + e[no] / 2);
        var r;
        if (gs(t)) {
            var h = Math[go](n.y, e.y),
            a = Math[go](n.x, e.x),
            o = Math[sf](n[qh], e[qh]),
            f = Math.max(n.right, e[Wh]);
            if (r = s.getStyle(v$[wc]), t == mR[Pc]) return new mN((a + f) / 2, h - r);
            if (t == mR[kc]) return new mN(a - r, (h + o) / 2);
            if (t == mR[Ac]) return new mN((a + f) / 2, o + r);
            if (t == mR[zc]) return new mN(f + r, (h + o) / 2)
        }
        var _ = ys(t, s);
        if (r = _ ? Ts(t, i, n, e, s[Ec](v$[Tc])) : s[Ec](v$.EDGE_SPLIT_VALUE), r == Number.NEGATIVE_INFINITY || r == Number.POSITIVE_INFINITY) return new mN(e.x + e.width / 2, e.y + e.height / 2);
        if (0 == r) return new mN(n.x + n[io] / 2, n.y + n[no] / 2);
        if (i) {
            var c = n.x + n.right < e.x + e[Wh];
            return new mN(Is(c, r, n.x, n[io]), n.y + n.height / 2)
        }
        var u = n.y + n.bottom < e.y + e[qh];
        return new mN(n.x + n[io] / 2, Is(u, r, n.y, n[no]))
    }
    function ms(t, i, n, e) {
        var s = Math[sf](i, e) - Math[go](t, n);
        return s - (i - t + e - n)
    }
    function Es(t, i) {
        var n = Math.max(t.x + t[io], i.x + i[io]) - Math[go](t.x, i.x);
        return n - t[io] - i[io]
    }
    function ws(t, i) {
        var n = Math[sf](t.y + t.height, i.y + i[no]) - Math.min(t.y, i.y);
        return n - t[no] - i.height
    }
    function Ts(t, i, n, e, s) {
        var r = Os(s, i, n, e, null);
        return r * s
    }
    function Os(t, i, n, e) {
        return i ? Ms(t, n.x, n[Wh], e.x, e[Wh]) : Ms(t, n.y, n[qh], e.y, e[qh])
    }
    function Ms(t, i, n, e, s) {
        var r = ms(i, n, e, s),
        h = e + s > i + n;
        if (r > 0) {
            if (1 == t) return r + (s - e) / 2;
            if (t >= 0 && 1 > t) return r;
            if (0 > t) return h ? e - i: n - s
        }
        return Math[Vh](h && t > 0 || !h && 0 > t ? n - s: i - e)
    }
    function Is(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math[Vh](i)
    }
    function ks(t, i) {
        var n = t[Fr];
        if (! (3 > n)) {
            var e = i[Ec](v$[Nc]);
            if (e != mR[Rc]) {
                var s = i.getStyle(v$[Bc]),
                r = 0,
                h = 0;
                s && (M(s) ? r = h = s: (r = s.x || 0, h = s.y || 0));
                for (var a, o, f, _, c = t[0], u = t[1], d = null, l = 2; n > l; l++) {
                    var v = t[l],
                    b = u.x - c.x,
                    y = u.y - c.y,
                    x = v.x - u.x,
                    m = v.y - u.y,
                    E = !b || b > -OR && OR > b,
                    w = !y || y > -OR && OR > y,
                    T = !x || x > -OR && OR > x,
                    O = !m || m > -OR && OR > m,
                    I = w; (E && O || w && T) && (I ? (a = Math[go](2 == l ? Math[Vh](b) : Math[Vh](b) / 2, r), o = Math[go](l == n - 1 ? Math.abs(m) : Math[Vh](m) / 2, h), f = new mN(u.x - (b > 0 ? a: -a), u.y), _ = new mN(u.x, u.y + (m > 0 ? o: -o))) : (a = Math[go](l == n - 1 ? Math.abs(x) : Math[Vh](x) / 2, r), o = Math[go](2 == l ? Math[Vh](y) : Math[Vh](y) / 2, h), f = new mN(u.x, u.y - (y > 0 ? o: -o)), _ = new mN(u.x + (x > 0 ? a: -a), u.y)), p(t, u), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == mR.EDGE_CORNER_BEVEL ? (g(t, _, l), l++, n++) : e == mR[$c] && (g(t, [u, _], l), l++, n++)),
                    c = u,
                    u = v
                }
                null != d && _.x == u.x && _.y == u.y && p(t, u)
            }
        }
    }
    function Ss(t, i, n, e, s, r) {
        var h = r[Ec](v$[Fc]),
        a = null == h;
        if (null != h) {
            var o = (new ON)[Gc](i)[Gc](n);
            o.intersects(h) || (s = Cs(h.x, h.y, o.y, o.x, o.bottom, o[Wh]))
        } else h = xs(t, s, i, n, r);
        s ? As(i, n, h, e, a) : Ps(i, n, h, e, a)
    }
    function Cs(t, i, n, e, s, r) {
        return n > i && n - i > e - t && n - i > t - r || i > s && i - s > e - t && i - s > t - r ? !1 : !0
    }
    function js(t, i, n) {
        return i >= t.x && i <= t[Wh] && n >= t.y && n <= t.bottom
    }
    function Ps(t, i, n, e, s) {
        var r = Math[sf](t.y, i.y),
        h = Math[go](t.y + t[no], i.y + i[no]),
        a = null != n ? n.y: h + (r - h) / 2,
        o = t.x + t.width / 2,
        f = i.x + i.width / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[io] && (o = n.x), n.x >= i.x && n.x <= i.x + i[io] && (f = n.x)), js(i, o, a) || js(t, o, a) || e[Kr](new mN(o, a)), js(i, f, a) || js(t, f, a) || e[Kr](new mN(f, a)), 0 == e[Fr]) if (null != n) js(i, n.x, a) || js(t, n.x, a) || e[Kr](new mN(n.x, a));
        else {
            var _ = Math.max(t.x, i.x),
            c = Math.min(t.x + t.width, i.x + i[io]);
            e[Kr](new mN(_ + (c - _) / 2, a))
        }
    }
    function As(t, i, n, e, s) {
        var r = Math[sf](t.x, i.x),
        h = Math[go](t.x + t.width, i.x + i[io]),
        a = null != n ? n.x: h + (r - h) / 2,
        o = t.y + t.height / 2,
        f = i.y + i.height / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[no] && (o = n.y), n.y >= i.y && n.y <= i.y + i[no] && (f = n.y)), js(i, a, o) || js(t, a, o) || e[Kr](new mN(a, o)), js(i, a, f) || js(t, a, f) || e[Kr](new mN(a, f)), 0 == e[Fr]) if (null != n) js(i, a, n.y) || js(t, a, n.y) || e[Kr](new mN(a, n.y));
        else {
            var _ = Math[sf](t.y, i.y),
            c = Math[go](t.y + t.height, i.y + i[no]);
            e.push(new mN(a, _ + (c - _) / 2))
        }
    }
    function Ls(t, i, n, e) {
        var s = i.x + i[io] < t.x,
        r = t.x + t[io] < i.x,
        h = s ? t.x: t.x + t[io],
        a = t.y + t.height / 2,
        o = r ? i.x: i.x + i.width,
        f = i.y + i[no] / 2,
        _ = e,
        c = s ? -_: _,
        u = new mN(h + c, a);
        c = r ? -_: _;
        var d = new mN(o + c, f);
        if (s == r) {
            var l = s ? Math[go](h, o) - e: Math[sf](h, o) + e;
            n[Kr](new mN(l, a)),
            n[Kr](new mN(l, f))
        } else if (u.x < d.x == s) {
            var v = a + (f - a) / 2;
            n.push(u),
            n[Kr](new mN(u.x, v)),
            n.push(new mN(d.x, v)),
            n[Kr](d)
        } else n.push(u),
        n[Kr](d)
    }
    function zs(t, i, n, e) {
        var s = i.y + i[no] < t.y,
        r = t.y + t.height < i.y,
        h = t.x + t.width / 2,
        a = s ? t.y: t.y + t[no],
        o = i.x + i[io] / 2,
        f = r ? i.y: i.y + i[no],
        _ = e,
        c = s ? -_: _,
        u = new mN(h, a + c);
        c = r ? -_: _;
        var d = new mN(o, f + c);
        if (s == r) {
            var l = s ? Math[go](a, f) - e: Math[sf](a, f) + e;
            n[Kr](new mN(h, l)),
            n[Kr](new mN(o, l))
        } else if (u.y < d.y == s) {
            var v = h + (o - h) / 2;
            n[Kr](u),
            n[Kr](new mN(v, u.y)),
            n[Kr](new mN(v, d.y)),
            n[Kr](d)
        } else n[Kr](u),
        n.push(d)
    }
    function Ds(t) {
        return t == mR[Yc] || t == mR[Mc] || t == mR[Ic] || t == mR[Cc] || t == mR[jc] || t == mR[Pc] || t == mR[kc] || t == mR[Ac] || t == mR[zc] || t == mR[Dc] || t == mR[Oc] || t == mR[Sc]
    }
    function Ns(t, i) {
        var n, e;
        i && i[io] && i[no] ? (n = i[io], e = i.height) : n = e = isNaN(i) ? bN[Uc] : i;
        var s = c$[Hc](t, -n, -e / 2, n, e);
        return s || (s = new nB, s.moveTo( - n, -e / 2), s[D_](0, 0), s[D_]( - n, e / 2)),
        s
    }
    function Rs(t, i) {
        var n = Math[to](i),
        e = Math.cos(i),
        s = t.x,
        r = t.y;
        return t.x = s * e - r * n,
        t.y = s * n + r * e,
        t
    }
    function Bs(t, i, n, e, s, r) {
        var h = Math.atan2(e - i, n - t),
        a = new mN(s, r);
        return a[Po] = h,
        Rs(a, h),
        a.x += t,
        a.y += i,
        a
    }
    function $s(t, i, n, e, s) {
        i = si(e, i.x, i.y, n.x, n.y),
        n = si(s, n.x, n.y, i.x, i.y);
        var r = Math.PI / 2 + Math.atan2(n.y - i.y, n.x - i.x),
        h = t * Math[Hh](r),
        a = t * Math.sin(r),
        o = n.x - i.x,
        f = n.y - i.y,
        _ = i.x + .25 * o,
        c = i.y + .25 * f,
        u = i.x + .75 * o,
        d = i.y + .75 * f;
        return [new tB(ZR, [_ + h, c + a, u + h, d + a])]
    }
    function Fs(t, i, e) {
        if (g(t, new tB(VR, [i.x, i.y]), 0), e) {
            if (t[Fr] > 1) {
                var s = t[t[Fr] - 1];
                if (KR == s[jo] && (s.invalidTerminal || s.points[2] === n || null === s[$a][2])) return s.points[2] = e.x,
                s.points[3] = e.y,
                void(s[Ko] = !0);
                if (ZR == s[jo] && (s[Ko] || s[$a][4] === n || null === s[$a][4])) return s.points[4] = e.x,
                s[$a][5] = e.y,
                void(s[Ko] = !0)
            }
            t[Kr](new tB(XR, [e.x, e.y]))
        }
    }
    function Gs(t, i, n, e, s, r, h, a) {
        return i.hasPathSegments() ? void(n._fy = i._ny5[qc]()) : e == s ? void t[Wc](n, e, r, h) : void t[Vc](n, e, s, r, h, a)
    }
    function Ys(t, i, n, e, s) {
        var r = e == s,
        h = t[Xc][Kc](e),
        a = r ? h: t.graph.getUI(s);
        if (h && a) {
            var o = i[Zc],
            f = h[Jc][Xr](),
            _ = r ? f: a[Jc].clone(),
            c = i.hasPathSegments();
            if (!r && !o && !c) {
                var u = e.busLayout,
                d = s[hc];
                if (u != d) {
                    var l, v, b, y, g = i[Qc];
                    u ? (l = h, v = f, b = a, y = _) : (l = a, v = _, b = h, y = f);
                    var p = Xs(v, l, u, b, y, g);
                    if (p && 2 == p[Fr]) {
                        var x = p[0],
                        m = p[1];
                        return n[L_](x.x, x.y),
                        m.x == x.x && m.y == x.y && (m.y += .01),
                        n[D_](m.x, m.y),
                        void(n._74 = !0)
                    }
                }
            }
            Gs(t, i, n, h, a, o, f, _),
            (!r || c) && Us(t, i, n, h, a, o, f, _),
            n._74 = !0
        }
    }
    function Us(t, i, e, s, r, h, a, o) {
        var f = a[tu],
        _ = o[tu],
        c = t[iu],
        u = t[nu];
        if (!c && !u) return void Fs(e._fy, f, _);
        var d = e._fy;
        if (d[Fr]) {
            if (c) {
                var l = d[0],
                v = l[eu];
                a.contains(v.x, v.y) && (l[jo] == ZR ? (f = v, v = {
                    x: l.points[2],
                    y: l.points[3]
                },
                l.points = l[$a].slice(2), l[jo] = KR) : l[jo] == KR && (f = v, v = {
                    x: l[$a][0],
                    y: l[$a][1]
                },
                l[$a] = l[$a].slice(2), l[jo] = XR)),
                Hs(s, a, v, f, n, n)
            }
            if (u) {
                var b, y = d[d.length - 1],
                g = y[Co],
                p = y.points[Fr],
                x = g.x === n || g.y === n;
                p >= 4 && (x || o.contains(g.x, g.y)) && (x || (_ = g), b = !0, g = {
                    x: y[$a][p - 4],
                    y: y[$a][p - 3]
                },
                o.contains(g.x, g.y) && (_ = g, p >= 6 ? (g = {
                    x: y.points[p - 6],
                    y: y.points[p - 5]
                },
                y[$a] = y.points.slice(0, 4), y.type = KR) : 1 == d[Fr] ? (g = {
                    x: f.x,
                    y: f.y
                },
                y[$a] = y[$a][Ur](0, 2), y.type = XR) : (y = d[d.length - 2], g = y[Co]))),
                Hs(r, o, g, _, n, n),
                b && (p = y[$a].length, y[$a][p - 2] = _.x, y.points[p - 1] = _.y, _ = null)
            }
        } else {
            var m = Math[Uh](_.y - f.y, _.x - f.x),
            E = Math[Hh](m),
            w = Math.sin(m);
            c && Hs(s, a, _, f, E, w),
            u && Hs(r, o, f, _, -E, -w)
        }
        Fs(e._fy, f, _)
    }
    function Hs(t, i, e, s, r, h) {
        if (r === n) {
            var a = Math[Uh](e.y - s.y, e.x - s.x);
            r = Math[Hh](a),
            h = Math[to](a)
        }
        for (e = {
            x: e.x,
            y: e.y
        },
        i[su](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
            if (!i[su](e.x, e.y)) return s;
            if (t[ru](e.x - r, e.y - h, bN[hu])) {
                s.x = e.x - r / 2,
                s.y = e.y - h / 2;
                break
            }
            e.x -= r,
            e.y -= h
        }
        return s
    }
    function qs(t, i, n, e, s, r, h, a) {
        if (i.hasPathSegments()) return i._ny5;
        var o = i[Zc];
        if (Ds(o)) {
            var f = ls(o, n, e, t, s, r);
            if (!f || !f[Fr]) return null;
            g(f, h, 0),
            f[Kr](a),
            o != mR[Dc] && ks(f, t);
            for (var _ = [], c = f[Fr], u = 1; c - 1 > u; u++) {
                var d = f[u];
                _[Kr](S(d) ? new tB(KR, [d[0].x, d[0].y, d[1].x, d[1].y]) : new tB(XR, [d.x, d.y]))
            }
            return _
        }
        if (i[au]) {
            var l = t._2k();
            if (!l) return;
            return $s(l, h, a, n, e)
        }
    }
    function Ws(t, i, n) {
        var e = t[Ec](v$.EDGE_LOOPED_EXTAND),
        s = t._2k(),
        r = e + .2 * s,
        h = i.x + i.width - r,
        a = i.y,
        o = i.x + i[io],
        f = i.y + r;
        e += s;
        var _ = .707,
        c = -.707,
        u = i.x + i[io],
        d = i.y,
        l = u + _ * e,
        v = d + c * e,
        b = {
            x: h,
            y: a
        },
        y = {
            x: l,
            y: v
        },
        g = {
            x: o,
            y: f
        },
        p = b.x,
        x = y.x,
        m = g.x,
        E = b.y,
        w = y.y,
        T = g.y,
        O = ((T - E) * (w * w - E * E + x * x - p * p) + (w - E) * (E * E - T * T + p * p - m * m)) / (2 * (x - p) * (T - E) - 2 * (m - p) * (w - E)),
        M = ((m - p) * (x * x - p * p + w * w - E * E) + (x - p) * (p * p - m * m + E * E - T * T)) / (2 * (w - E) * (m - p) - 2 * (T - E) * (x - p)),
        r = Math.sqrt((p - O) * (p - O) + (E - M) * (E - M)),
        I = Math[Uh](b.y - M, b.x - O),
        k = Math[Uh](g.y - M, g.x - O),
        S = k - I;
        return 0 > S && (S += 2 * Math.PI),
        Vs(O, M, I, S, r, r, !0, n)
    }
    function Vs(t, i, n, e, s, r, h, a) {
        var o, f, _, c, u, d, l, v, b, y, g;
        if (Math[Vh](e) > 2 * Math.PI && (e = 2 * Math.PI), u = Math[Wr](Math.abs(e) / (Math.PI / 4)), o = e / u, f = o, _ = n, u > 0) {
            d = t + Math.cos(_) * s,
            l = i + Math.sin(_) * r,
            moveTo ? a[L_](d, l) : a[D_](d, l);
            for (var p = 0; u > p; p++) _ += f,
            c = _ - f / 2,
            v = t + Math.cos(_) * s,
            b = i + Math[to](_) * r,
            y = t + Math.cos(c) * (s / Math[Hh](f / 2)),
            g = i + Math[to](c) * (r / Math[Hh](f / 2)),
            a[z_](y, g, v, b)
        }
    }
    function Xs(t, i, e, s, r, h) {
        var a = r.cx,
        o = r.cy,
        f = a < t.x,
        _ = a > t[Wh],
        c = o < t.y,
        u = o > t.bottom,
        d = t.cx,
        l = t.cy,
        v = f || _,
        b = c || u,
        y = h === n || null === h;
        y && (h = Math[Uh](o - l, a - d), v || b || (h += Math.PI));
        var g = Math[Hh](h),
        p = Math.sin(h),
        x = Zs(i, t, {
            x: a,
            y: o
        },
        -g, -p);
        x || (h = Math.atan2(o - l, a - d), v || b || (h += Math.PI), g = Math[Hh](h), p = Math[to](h), x = Zs(i, t, {
            x: a,
            y: o
        },
        -g, -p) || {
            x: d,
            y: l
        });
        var m = Zs(s, r, {
            x: x.x,
            y: x.y
        },
        -x[ou] || g, -x[fu] || p, !1) || {
            x: a,
            y: o
        };
        return e ? [x, m] : [m, x]
    }
    function Ks(t, i, n, e, s, r) {
        var h = i < t.x,
        a = i > t[Wh],
        o = n < t.y,
        f = n > t.bottom;
        if (h && e > 0) {
            var _ = t.x - i,
            c = n + _ * s / e;
            if (c >= t.y && c <= t.bottom) return {
                x: t.x,
                y: c,
                perX: e,
                perY: s
            }
        }
        if (a && 0 > e) {
            var _ = t.right - i,
            c = n + _ * s / e;
            if (c >= t.y && c <= t[qh]) return {
                x: t[Wh],
                y: c,
                perX: e,
                perY: s
            }
        }
        if (o && s > 0) {
            var u = t.y - n,
            d = i + u * e / s;
            if (d >= t.x && d <= t[Wh]) return {
                x: d,
                y: t.y,
                perX: e,
                perY: s
            }
        }
        if (f && 0 > s) {
            var u = t.bottom - n,
            d = i + u * e / s;
            if (d >= t.x && d <= t[Wh]) return {
                x: d,
                y: t[qh],
                perX: e,
                perY: s
            }
        }
        return r !== !1 ? Ks(t, i, n, -e, -s, !1) : void 0
    }
    function Zs(t, i, n, e, s, r) {
        if (!i[su](n.x, n.y)) {
            if (n = Ks(i, n.x, n.y, e, s, r), !n) return;
            return Js(t, i, n, n[ou], n.perY)
        }
        return r === !1 ? Js(t, i, n, e, s) : Js(t, i, {
            x: n.x,
            y: n.y,
            perX: e,
            perY: s
        },
        e, s) || Js(t, i, n, -e, -s)
    }
    function Js(t, i, n, e, s) {
        for (;;) {
            if (!i[su](n.x, n.y)) return;
            if (t[ru](n.x + e, n.y + s)) break;
            n.x += e,
            n.y += s
        }
        return n
    }
    function Qs(t) {
        return Tn(t) ? t: t[_u](/.(gif|jpg|jpeg|png)$/gi) ? t: (t = J(t), t instanceof Object && t[Do] ? t: void 0)
    }
    function tr(t) {
        for (var i = t[g_]; i;) {
            if (i[cu]) return i;
            i = i.parent
        }
        return null
    }
    function ir() {
        N(this, ir, arguments)
    }
    function nr(t, n, e, s, r, h, a) {
        var o = i.createElement(uu);
        o[Jr] = du,
        di(o, $$),
        n && di(o, n);
        var f = i[uo](lu);
        return h && (cN ? f.ontouchstart = h: f.onmousedown = h),
        f[Mh] = a,
        f.src = e,
        di(f, F$),
        r && di(f, r),
        s && vi(f, vu, bu),
        o._img = f,
        o[mc](f),
        t[mc](o),
        o
    }
    function er(t, n) {
        this._navPane = i[uo](uu),
        this._navPane[Jr] = yu,
        di(this._navPane, {
            "background-color": gu,
            overflow: pu,
            "float": Uo,
            "user-select": xu,
            position: mu
        }),
        this._top = nr(this._navPane, {
            width: Eu
        },
        bN[wu], !1, null, n, Yo),
        this._left = nr(this._navPane, {
            height: Eu
        },
        bN.NAVIGATION_IMAGE_LEFT, !1, G$, n, Uo),
        this._right = nr(this._navPane, {
            height: Eu,
            right: Tu
        },
        bN[Ou], !0, G$, n, Wh),
        this._nzottom = nr(this._navPane, {
            width: Eu,
            bottom: Tu
        },
        bN[wu], !0, null, n, qh),
        t[mc](this._navPane)
    }
    function sr(t, i) {
        this._d9 = t;
        var n = function(i) {
            var n, e, s = i[Mu],
            r = s[Mh];
            if (Uo == r) n = 1;
            else if (Wh == r) n = -1;
            else if (Yo == r) e = 1;
            else {
                if (qh != r) return;
                e = -1
            }
            cN && (s[Jr] = Iu, setTimeout(function() {
                s[Jr] = ""
            },
            100)),
            P(i),
            t._l1._ny1(n, e)
        };
        er[Yr](this, i, n),
        this._3x(i[ku], i.clientHeight)
    }
    function rr(t, i) {
        this._d9 = t,
        this.init(i, t)
    }
    function hr() {
        N(this, hr, arguments)
    }
    function ar(t, i) {
        this._d9 = t,
        this._jw = us(i),
        this.g = this._jw.g,
        this._nye = new gN
    }
    function or(t) {
        var i = t.selectionModel,
        n = [];
        return t[Su][Kf](function(i) {
            t[Cu](i) && t[ju](i) && n.push(i)
        }),
        i[Th](n)
    }
    function fr(t, i, e, s) {
        s === n && (s = bN[Pu]);
        var r = t[Au](i);
        return e ? t[Lu](r.x, r.y, s) : t.zoomOut(r.x, r.y, s)
    }
    function _r(t, i, n) {
        var e = t.bounds;
        n = n || e,
        i = i || 1;
        var s = null;
        s && n[io] * n[no] * i * i > s && (i = Math[po](s / n[io] / n[no]));
        var r = Fi();
        Jn(r.g),
        r[io] = n[io] * i,
        r[no] = n.height * i,
        t._8l._gi(r.g, i, n);
        var h = null;
        try {
            h = r.toDataURL(zu)
        } catch(a) {
            xR[Yh](a)
        }
        return {
            canvas: r,
            data: h,
            width: r.width,
            height: r.height
        }
    }
    function cr(t) {
        this.graph = t,
        this[Du] = t[Du]
    }
    function ur(t, i) {
        this[Nu] = t,
        this.defaultCursor = i || Ru
    }
    function dr() {
        N(this, dr, arguments)
    }
    function lr(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }
    function vr() {
        N(this, vr, arguments)
    }
    function br() {
        N(this, br, arguments)
    }
    function yr() {
        N(this, yr, arguments)
    }
    function gr() {
        N(this, gr, arguments)
    }
    function pr(i, n, e) {
        i += t.pageXOffset,
        n += t[va];
        var s = e[ua]();
        return {
            x: i + s[Uo],
            y: n + s[Yo]
        }
    }
    function xr(t, i, n) {
        var e = t.offsetWidth,
        s = t.offsetHeight;
        t.style[Uo] = i - e / 2 + ro,
        t[ra][Yo] = n - s / 2 + ro
    }
    function mr(t) {
        var n = i[uo](ho),
        e = n[Hf](lo),
        s = getComputedStyle(t, null),
        r = s[vo];
        r || (r = s[Bu] + ih + s[$u] + ih + s[Fu]),
        e.font = r;
        var h = t.value,
        a = h.split(yo),
        o = parseInt(s.fontSize),
        f = 0,
        _ = 0;
        return xR.forEach(a,
        function(t) {
            var i = e[Gu](t)[io];
            i > f && (f = i),
            _ += 1.2 * o
        }),
        {
            width: f,
            height: _
        }
    }
    function Er(t, n) {
        if (rh == typeof t[Yu] && rh == typeof t[Uu]) {
            var e = t[cc],
            s = t.selectionStart;
            t.value = e.slice(0, s) + n + e[Ur](t[Uu]),
            t[Uu] = t[Yu] = s + n[Fr]
        } else if (Hu != typeof i[qu]) {
            var r = i[qu][Wu]();
            r[Vu] = n,
            r.collapse(!1),
            r[Xu]()
        }
    }
    function wr(i) {
        if (QD) {
            var n = t[Ku] || t[la],
            e = t[Zu] || t.pageYOffset;
            return i[Xu](),
            void t[Ju](n, e)
        }
        i[Xu]()
    }
    function Tr() {}
    function Or(t) {
        this[Xc] = t,
        this[Du] = t[Du],
        this[Qu] = cN ? 8 : 5
    }
    function Mr(t) {
        this[Xc] = t,
        this.topCanvas = t.topCanvas,
        this[Qu] = cN ? 8 : 4,
        this._rotateHandleLength = cN ? 30 : 20
    }
    function Ir(t, i) {
        var n = new ON;
        return n[eo](Hn[Yr](t, {
            x: i.x,
            y: i.y
        })),
        n[eo](Hn[Yr](t, {
            x: i.x + i[io],
            y: i.y
        })),
        n[eo](Hn[Yr](t, {
            x: i.x + i[io],
            y: i.y + i.height
        })),
        n[eo](Hn[Yr](t, {
            x: i.x,
            y: i.y + i[no]
        })),
        n
    }
    function kr(t) {
        t %= 2 * Math.PI;
        var i = Math[wo](t / H$);
        return 0 == i || 4 == i ? "ew-resize": 1 == i || 5 == i ? "nwse-resize": 2 == i || 6 == i ? "ns-resize": td
    }
    function Sr(n, e, s) {
        var r = i[id],
        h = new xR.Rect(t[la], t.pageYOffset, r.clientWidth - 2, r[nd] - 2),
        a = n.offsetWidth,
        o = n.offsetHeight;
        e + a > h.x + h.width && (e = h.x + h.width - a),
        s + o > h.y + h.height && (s = h.y + h.height - o),
        e < h.x && (e = h.x),
        s < h.y && (s = h.y),
        n[ra][Uo] = e + ro,
        n.style[Yo] = s + ro
    }
    function Cr(t, i, n, e, s) {
        this.source = t,
        this.type = ed,
        this.kind = i,
        this[sd] = n,
        this[Io] = e,
        this[rd] = s
    }
    function jr(t) {
        this._4z = {},
        this._l1 = t,
        this._l1._24[hd](this._9s, this),
        this[ad] = mR[od]
    }
    function Pr(t) {
        return t >= 10 && 20 > t
    }
    function Ar(t) {
        return t == fF || t == uF
    }
    function Lr() {
        var t, i, n = {},
        e = [],
        s = 0,
        r = {},
        h = 0;
        this[Xc][Kf](function(a) {
            if (this.isLayoutable(a)) if (a instanceof f$) {
                var o = {
                    node: a,
                    id: a.id,
                    x: a.x,
                    y: a.y
                };
                for (this[fd] && this[fd](a, o), n[a.id] = o, e[Kr](o), s++, i = a[g_]; i instanceof u$;) {
                    t || (t = {});
                    var f = t[i.id];
                    f || (f = t[i.id] = {
                        id: i.id,
                        children: []
                    }),
                    f.children[Kr](o),
                    i = i[g_]
                }
            } else if (a instanceof o$ && !a[S_]() && a[x_] && a[p_]) {
                var o = {
                    edge: a
                };
                r[a.id] = o,
                h++
            }
        },
        this);
        var a = {};
        for (var o in r) {
            var f = r[o],
            _ = f[ac],
            c = _[x_],
            u = _.toAgent,
            d = c.id + ta + u.id,
            l = u.id + ta + c.id;
            if (n[c.id] && n[u.id] && !a[d] && !a[l]) {
                var v = n[c.id],
                b = n[u.id];
                f[E_] = v,
                f.to = b,
                a[d] = f,
                this[_d] && this[_d](_, f)
            } else delete r[o],
            h--
        }
        return {
            groups: t,
            nodesArray: e,
            nodes: n,
            nodeCount: s,
            edges: r,
            edgeCount: h,
            minEnergy: this[cd](s, h)
        }
    }
    function zr(t) {
        this[Xc] = t,
        this[ud] = {}
    }
    function Dr() {
        N(this, Dr, arguments)
    }
    function Nr(t, i, n, e, s) {
        e ? t[j_](function(e) {
            var r = e[dd](t);
            r != n && r._marker != s && i(r, t)
        },
        this, !0) : t[ld](function(e) {
            var r = e.toAgent;
            r != n && r._marker != s && i(r, t)
        })
    }
    var Rr = "d1d1ce5814683d8df70167dffd31fb5c38b1573a529a50820570e0aeb9e0872ad189ea895a4f9a8aece077a1abe1fd2f4eca35b65c9dd1847d141140ba3ecfad3bbce1c9432ad42d1e0d40ad20801a792a979f1d1ac066e4c222ada32668c92f03ef089bd6ccd6c2154472ddd47284f845ebf2103e09f1266a457241e5d8bc146bd715ac44572266e2871979f2e2d20d8437ad7a8ed6428d9dddc1fb30aeda2ec782203bf16d9410e7e3f1cc1f05dc975b28ff8721f01e13838877206a6b0a4247983048333c748eaddfbf8cad537c67ee708036484b85272ea9b6c2ffaba55e981d67e03a152c64b92ad2c68ee063a3b565b9f5af052718e8dd3062b51aa0e14190e0b41e23ef722972a8f876aa4d85a64a626350e7ef8421303cc02ca910a4b8ec0cf75718418ceae77d988ba115ef0f8dcabb2aaea37058469b5acee30204c338f977befe3a2b0457613959e6d7631b06886db8003c5ea0a5f871a4da8fcb4d7d6800d416acf4851d0f26a380f9893b434015bc15204c2d93c76136deea45ffc5bf80022b2cbcd4f367f8698106323b266ccf1acce054bbb55858b2a35b7eb5b210c097e996bde52d466fee1556fff4a48c09586786949cef3acb0082327b824f9dd9fe42e9214c51dd31e3d24afa9d61ee179dfef52225473191b22cfdb50f410aef28fb0ed3d6c1ba7c666fc9e1a55b10dc8bf40ad1872b5bdba94cc094e977f555918dc64a348af79e2c775ced0bffb1efa1461c21a466d72a267c8db70cba720bda1d4e40d48ef4d10af6a11c4ccf17e8a59915e111a9c9ac718b35400915857186e26253bdc4019e0d1c980bd9dabcd864b9e77a3b35a75815a12840b26c51f5e3cec5970cc31baffb8ec4c05b41520987282964b303d1a83b6e6a8dc5a949410e75bdbbc7ac3c2e9171dc0886253b4037e2da182f49637c28cf2cc2298e43f80e546ead8e810c78d4b111207fa8d719fcfbb6641a1c65899f7b934c780cfb74cfaea10b294d27043a339d4a53c9c0f749598b8163f87c162525271a05f27a2397e7097628bc90d2ed6bb30c55f27dcb1de7d9492f672d3cb8bd5b2e64d37e9d6a369c9302fa522e4c2fc599bc08a4fa1bf1dae922fa062718635e1f2607fac907e2b21b40047f19a8a67f14ca6dfe5f21a449000c604fb48c210c7f909c84a3b29a422c5b588820b7dcaa86699b38fe90ce452ff4c6fcc8ec4fe2317c245b7de1cad6044332c5b60bb5204366f71f42c5ae0af75a231f0690591f1d2b5d07cf234ae418adeea22a975ffb07b6390a06658b76d4172a203e4eecb696ebff0eb3888ca5db346d391ae94401023eb830507b7e735c3bf8912dda47bf3f35f5fa5a638296182721658cf00f83f3af43febfbf67685ec4f25b9d06a9606652184108346a63a6f5544827d55e325976fca822b1a9eab63c064090789538674adfe48a88cfa568668011c1d2b19ab3c71f40038f33202c95d0dc000ec19d34f5501fe574d39073878d09a7d3f43fca3bccfe70b8d603e7ccb416c917b8b0d8653d15f0e3ccf8641e52c6f95beb6ab0484cf87fb91800ee335ff24b03b03e3d57cefb5fdb1afeca181acf352ac96425ef26ef7e10ac7cdf86c3b31db339b893efeb3dd09a083ba35c5cff752cfa6a6f4b0c6dc09cb0e7df35f666d68deeb80291cfafcaea6a610eeb015d2f748fc65937c864dbdc9c5ddf644475116d7f4077411ed70016b85cd7071dc4cd64f9a5cc93a2a874b699cc46a7699c77d51861f1f251b13ab109b8be0f7fa6405ff382a31875fa255590a33b17684fb83579ef17e3c49365fcdc858a0e95c4129bd29a139c7db40a70330e0df8e7329b7cc1e72c7687067f468096dd8c8525515262b647a276adebf1be2f30f3643cad0bcb53d75578dd2cd883b0ea53888fdb62d744ad82c17d2e1378feeb2dc84f012211ebb5280eae29b16d07700cbc70d1e08fa963242d0fb25cd6c364138902060e37d4205f4fbaca5953c36237f314105fe413bcff7ca2ce72bfaaad2db4f0b15bfeeeef3249bf15d7ab54134b89f06d059ea0cb0354da76e0a2464ee66f1ff024a8c6da9f254a169d93eeddb4b177e128912d6941270b6d1c422545b5ef0dfa3f38e6c1a71cde1c0f5b3279f2fbe19d1d9ae90a20e4635f1c2c87a28147b29ce7a2d9f4b49d9e836e6047a7e5f8f8ae7596209247552a33724524c20c45dab94ec088b3bd4d6e6997f5f4161f686ce6dd735dd72cddcf6dfd5be387606354d881bc72dba0bdb43e0038018fa1423406d174c3829ef6f1c6d21f7570ae6a88955397466592b5ae9954c1841ec8dc1243b2a9138bf136277162449b5f02d3d2ef7917e3e1e5cf004a1d1a5103b2cf6f823906f499a9dd6c356b515d2f5761a36cfe6a26f98255f9824f1b88ec2a70ab9fefbdc1a7603d88af2f26d13e6e13e72c2557b2b5501c2803459e6c6150d0fb6332ea0fb21d9c7e17b11f090ae707c0ba63d924a7116cdc365d5bce0f39dada74ff9af206040674af050170ae568955885e5158dedc7282d8f9191888b5e4fd1d3f54b8b0a84e51e058f7e12ee2aa205b3e0d4611f54aa57039d803e9f5d6d7aaa86ba9d62ccdd0788e7c55d87bc1d6ecdcb01506de600f8b6212d268ac9bb94734ca17e529fd8594a2e31507b42d4abe22caa2507302e51951d2b250537aa2b56cbb1bae8cbdfad9ce5bc1f605f3dc140d4e9a01f05837b52295b7858e8e2b45cc42cb4c295768a5d93475dfb1ef618e6ba3dca5e7658536492c849fdb27df42f8e7468055529af4b7d338f3a32cb80f5903017b75090813d4da9c533fcfa909c3813666047e7c977d123fec445388dc3e32595c87975c2d80d13f4c9b04da5cbb54fc6ec34cc767b64378fb739f79ba882073a690d95a4e0a95824c976fdb62f5f31490e86721aadd3f31dbd01af0b27ae5d7c4327e579035a31128bdcdb322ed0a3ff9f631e6805076ded266d2eb49f2d8d1c7f6666dc919b8d47dd756b6f650a20a9a4f230e8e10feeba4367a2b7f64ebccc7afd24ec62f1f92e5b8904264e7fa3362b7150c4019be998e78987d5fdbda8644b2b568d16d324a57cf6b2becf37af10631a365704cb64cc73f54f2c709cec620adb4d801a34f859df2b8fb07f5ad6b86b5bf4e829614ced534c12394a0b7308415d3ded29fa608ac630a635d8e3838fd7f55ca8eda8f6332cb81424014d4e3c6f5544253ee0d6e4b5dc33b583da51751cde2ca187f972a70858b630559c6c5428026fa16f648f0b6cd3ac9327be16baa780fcc478426e9253a37deff0d66e451ae2ff0bd07f963e278d8b80e1fd7ec810f7b52b008260f80847cd529f130ed5172f31f311bff43694fd9ad3a866f0e1757fe116ad808bf5e71b3e06cd2b38aa2ae85e276fbb5dd36937954f3bd1a496d36a90c53aadf2ca2b734d264a4b11b18f9e0ae43d4266b01a4743d45b400e39fe3dcec89db85e09d9caf5ae2e1c6a2c4f78831e16a9c165650a1285c2e5d2caa798f10e14dd61a5e571c2810434187ea5a4e3eddb4b3d887eb544be7b55f1b42ac89a6e9563b7d5e15dfc361147cbc036a918d7ddb65df89a5c2d743244f096282773e53634ebf8613162bcab81d8fe1c514f51ee806e4818d86121ab57850d9ef98333dcf0894b8aefd9183dc63892574e0e57390e595aae5bc9e4aca4f54a1569887dd1c2b9ed5411b65cb3171043d59faecc1bef53be2884fd5df697cda92f032b3fbf47a22c2685a0a9c80ffa4ff04da1567d07e343034d847e009ad216d8d58c28d7b7117fa11183ab073b75f06c016c025708b6deb3abf001c971b99f47d11ba63f04cb4ea71efd431f62b82142190d1e5aa5ba3538a2eb1078f0318946ed40f6984f78f06cae0e353566b222b68d4bc74c3fde1e852bb38a39a56c651ccddc22221e2585816ccc851a6382e3dc9cf240f322155a215a7420405ae27685fde41d4b2644a90c7532aef2890c64f9d51c4a375a0cd9cee48cc657c2b26b7f93fb9fafc34df2fbfa3ee385862ae478cba80d975ac20e102d261b2c4487298dba71519bc4f06aa4231f13018c98a231e5c0e4f54deb330e0a1ac966ed5b815ca77dc40459fd84818994d64e6d76c6f209d1840acf1ffcf67ad94ff261beb6402327bb55978833725af82b18079ff1c91fd544bfd65f260533f8b7c0bd4062686c65c94bb9865e7a7f89d27d223a00af7d5060b417fa71a500047ce2da7ec3fbe1278a14e88c2ef231062fae458daf7b50e2ce8283a515cfc5d6430c5b1becb9e402ef98ec38ba0b4fa3a17c295e19f2ee5a217762ec4b25ac2ba42c1157d6d66ffb0f894ad72061bf8e9aa9b73480778321b1fc993b69bdf0e3454e1ffd76811f76017ebc01f8445c8af0cbded380636b62e61679c79672328cd38464f4e6a328661d1785475e911748c1a72c5d03d4e9cca7e9382164d5c3af336fc417b3fa2d5d1be34a1e75540f1bac24b5ec7b3d88cb33dffb03ff964a5b5d1da8f9e490858781fea77b6d7b2dc3346184cd206a144af68e7bc57f24c4f7c9170740993edf006ba7fef65528f6b60406d62ef8cb5cb6bc2dac823ae9a4bb9e0059a00efd5caa6c525f41235e138ca389e726f286ac0138a4d07941bc334754ab7bfb52b1190e22ec12633fc38402616d2b8bf129988a076981e785134267168948373115d08c47fe0b8ae83f1a1440d424211fba896efd9539e5eba0d2a2086638b41a17dfca1904f990efc110da0e99382259981de102402b8461e10c075e96d271f8e1b732208f138b0fffeca7e5123c12db92006142b2358bc02075001b4c595d012e0064cd425af0666b2c40bb90536c4c6edf0602a085872a21c10f4f5abb518e9ebcfed9e2ef3b9d2443100bc50c9c32e8ea1a72c8f220415bb068b2a76d42def29b888d06112b01141309e32e6d5bc8af6160774cce270aba9efa3abfc41495d0cf1be4fe167e92221ad30a1f1c7e012e6f3eadd8c0516cfff052c40f2be3ad132da385882c5e480b2ed47f9ecc838c250104aa3c83b959d003261834f858cdc934ddd3abce40d42af54123b9cca594649c238cf6d3438e6404584bb7e5df5802f6071b663010419e6961438a4ed9d49ec5cc4521e825970e1d8e3c499acb59f3dbdc068e2771d7be62aea4bfe73f63d64fd671276ece1272c5642655d523321f61b83a8cb0b9529744e218f0ec600ddd2c474c965242c7c350965ff93b2413e89f2d880785e8506d179b7f91822ad05441acc2828c98d44579e5d32880dd8ded1e986c2c4bc2e4aeca67fb8e235c4a81040a37f7cc96928d65fcbefd493dcd53650cd218772862df73f74b3bf5047ee4f9ad2761221fa50f9f34b20cbb9942b89447df75a79e43fd03f98c735e6697bf5bc1e1bed9535b0c435e6438aacc234adcf3c0330017a29e01dc04e1b0a6ce056a37aca16bca02dd44df307c66694131d61be72d7c0e1369f0f3dea56fee0949b21ff06d2357f04aa4dbb700a0f95ea7a4d25bed7ce8b329dad4316882751ec2062203ea0582e2a3e39095b7ab744ea2d8bd3b495f9b73b96e42ee33cad73dfd19b9ca009f8e9b23bd5883100a2a4e68e66b321538262b02ea4404892423d40b78590440f417bcd3cac32454d5451cf4de4d223d66532a971a04fe49357920a038c47a5ef9e8e63f30cfe80de7610b6583708872dab1743b8c881eea13287702d97147c50404257925cc927d09c8c34a713e1a8e0c695f309668bc7504ed9b39facf85f2444e3b4c1f6e15f097e81b2badd14f24f41917b5bfa322f371e22ec814451485c8d3a33c3f0f63c7dfafe7dc945f5037bf6a07746cdf3b978296fef5fc76f9b6d9eeb7d864f298b69e2373a990a88cc1d3bfda2bb0582a08cb906b20d79026a511c097f3aa03f5f31f2299c0d6a65cd78ea49ead2b810f06ea8788340f8ba2004ed2692ca6b416164e4f3f2fb13aab86c49592dab2b6faee206ae79038db5f540e7a1d387faec2c55aab095cad303a9a67c103518a721a18cde9d5710b5d2ee350fb82c8c33f7f13f91c8497e53365bc72a22a5df4bf98b5b12aac97f9f4af6ebe8bed83b089d6cba9d011908afcff54647d08fbd89f9cccd6bbd92e7f7733c30f9b784ea241a34d95656c80b8b3bfc126abf3ec8037ea8ae982c2de5996e8e1318e549f0754bcd4b47ec9db1a064e957a1b19667c082ca6f0bb49018cb0f38d1cb8c2be5f58a6f80a4bb91b7cd53253ea087f52c4e579e278d3b2f5fbd2caf003f50301b506595888e79e5b3976856bdad60fff7939bad00b51a2f76a0362de8e4b23800fcfc8acb12548a94bb600c6da28db7ff73564f032cb63a7b8e736c088df91f336785785a3562fc54e9424d164b6d6ce2aac319d54493e0a1da45950800c1ae5fcbc43e96ff1695bb8baca6fdc8ff5e1dced135884cb9f4f4829043dea332e3741c6b88cc6ae4edea2fe65d048e4beba365d0ccc7d99ebf8b2dd12a1b38803bba1a710602f3881d124e80bebb66387af182323687e71335733ca0fada2a2b94df2f1fd761b4d8e4106641a0a0d14b6b148e361caca30f23808d8bbe88247e7d86b15d354d4c5b8ac63a4435370b80647b6fea1baaf6f688ae64f7829dfc2ebdd773b12c7b186fa74fc57b40cd82661f3a58534f0be89e50e1c638d2cc6c8f96c43bc3fb7c7f02044749a30909bed6a3ac87d98c678c63ebd9b186792e631a4b52513eb7c0ae738ef6ff49ef85dcfd4662e358c3b174b5068b86362e880189e7f022e387d6a6533d732ca6cf78b9cca081e58a208cb9a21800f29a557691121c8a3145456552671f91ac0b48e88cba641f6f610e900801f20e5e2f5b815681f6e4df73c698311979908646831191ea61a95c4119655d37970d3c4e614f0d4e9481ea8ebef7e1a64bb18f9b1d762b3d21dbfae10d470e9b6ed97e04bfc7d8a4e26af98cb11e8f98004f2d1930dccc19e9b48419bd849bf14475d8791b11eb138f9a81781f17be0b4052c39a27ce8359d8e79ab5d8b6b9aa1287a072d9d8448217fe422c07255ae9b6286a1838952e9159021bf32a05f1646fc48af062ea433076a6cda67def7da8623282294678fb15ff1477dbda5f80b3a7fcc872f7ecc69ac905957675b6ce2c5455971ec08e884dd4e8564704ac969061c5fcdb6b0ad741009057588b07b7ef295e7dafdb84ff6abac2fd98c20cb482b3d4151c0c53cac31eaf6b09e8dfc4e4ed26a253897ff7c2bbf864036e170af57bdf065fa4e94585394b629b96e9f0983e0c7a5703dfc23e74d6e7f4188d5defa1d48ba5b7753d215189cff2fb163447956f85460665aba3c39b857b14b5a22d24fc60ccb2c4be9b287fd16443f2565258f51270e4cfa701e0ada7e79e2f5c3be79726e17a60c2bf65f9407f7e084f342435aaf81eb4d0d32d5f3321542cec33fd976da375d51244c4ebbd46f8170bb0f5d5bee4164bf81cbab7f6f760e86572e0450d29cdb75af5085bc145ce7bf7de91eb1aa6d54c812f73f5554730f5e983e221935cf60f33d8638c16047fc86aed866aa22a9cb4c242c47da01923b26256f8f3408d20b3b07cf0bc3a198b3ec5986a888fb5aa0cafb726e8d921e5c2d4f5b52ca6ca35ade04b94ea931a6c51c5789cf7826f71797d350314c6ede78831556f7286d97c948c9daedffcd60ca919a6ceb6c553f816d66bc7c7eaac113381d8f2e0498c26c69d008f79a2cbf0dc0eb44297021381d69f002eab136ef573672f48d9632aa517f80bb56f601cc4d2a7b078f5b46762274a48e3a3776d733d1b43625dc992ec94a7b2c498ab6e73216c34b33ce3b775449e55c69b86868906e3d0b4c2e72f02a2dc2b79989c937f814fa1fb02c267e00327f1166945bbf4f1fab53fac6e2c634630c080880867aa772878af2955926c7e76c615d89f3cf0ac8cc94e8353591c4c33dbad283b0f6c0aae3fb515c23bfcce242677d49e3687e6bf95d7ae3d9977058f6330dbee787535b39e54c0703296224aa97478ae800e6ce55244b8b172a76a12a67a8fba7f3427ba10b766f9f696ee5b53e25bca917cd993fb9ba758e14120f9ee9938ead5783fcf153e0ac9a864cbf8e932f92f0b63b86f1391b4d215658cd65afe94fb5bd38ef1e78c18494f7f730e1a1c0a72d7a7b79b96cbb032acc5e06fe3e75788fe9c195aa14cbc6bb15bc7c6ca3f3e1760689f83e63a6242484584e4186324e368e99e1792afb65e4c74968f64517f574de919d6377674351c1809cf81007912a1e75909229eb42029946f2d28ab8bf59af0726c3489b8c1e627c4c43213414dcd8e14339f776ca7b299a1a2690a95f6064866cc952c8d19fbe01f37e7f928559cd8322dacb028b3ad5a00ff73679a2e3a195bf56100fd06efb6336aa45bf3b72c1153f4eb2d878deb20b17aa4dcb63570c7bd03c086d2eda1411b6e2547789aa988b37fc1f9b3a898f674022d1ea6d543b2d8ca5ca9a4e0ac98c5b79249a143e67a3fdf6282e25f012a630091db687a075cf9db0e2c6a6c25a4822daf7f700f0bf2c51c19ffe41abf20d422ec089e256d749dd2978fae407bf8c0db46d5be5977d9febafd6239a4b3c843a3f019823e059a211d3f4e1ecdfec366efe8a145e06c8b161f6967c7b06b9e57228931a4d16aef1820e17ab170790679d02ddf2bc3dd9cae6f8476a9f6139ab98bead7eddbc8990d2172c4f4a85b076c1e1523a4bb2403fd8d5799792362b7f321b223e19477b3dc973041e7452a143e8e9c637d322003aefe7e875a8baa4e78051244a071602f2b250f4d188536b5b113d72990d05a33774e6af3f3b264ee472fd504086a3b9353550c974835904a19cf56e807806d40e024fa4ca8756073080b72df9abd9e7106b628e4770f0f3bfff76b3df8b398f5fd5b745457b42fbb3b69eb8e3f7aaff575976fbaaeefe9753a786c901a9a0db74ca8b7e7f42711472852e67d1c0e1c7e4eee4dfa4b20d7717c36fe336a043b22189d5cca5ca34de03c6d96141a382c9473d15edccf44005856dfd9f6ef577954155f697eabe95f98baa52703c6a2ba3326e87a746f1cb43ba69e04ab3bac94d64295d5335293b0ad0fe80d72ce7e6e8f57bcf7454209dc0f7705cb798d4889c55f2bf141be406104d3c33497ea78be4af3aa58cc14f5283bff3eda8e40f05b891d6291266f6967e0933d95e40972f52e0adaeb13ecbc325ebec8581a94a4481152e7928d203d9be8b883c9d448153ea6423fe30359fc18904dd013f59328f9a328f4663d6bc0cb19d0f5f77fe29921aed6b508f54ddff5a2a25508e7551e418a4c95298c39884a0d4c3452b4e288fa99f5d7e09318c131e8a49f7e335c88482875fd997a4e002fcde7bab08c24561f94ba2f95871f63c0861a536c607a6bc1c612df999b3a1323d0e4c16c41fc0d8694e8c6631a03ef8ef6b9c3ff766bbc336b94188af533710d2910ea5c027660b467a6275068345f2f2689f997f73d20db7de91121d0241d5b77fc0731913d5ccd3b6f49b2f99ad3de42d4c315c606c182a58307237921ba57d42bc6d20de6fe87b4355de66afb0d02992fe506579451d8e9bfa8601caf9f6ef0b2e3d2860687a1bcf6a8ed12a7b00869a1b0aed53b6f32f05c54faec142f57b09df964f66efd2eb716ab31b47310fc0f611e6625aaf60675de0fe95615f9e3041408b0e2b4f63e71b88b3d733067aa98c7451470b8c0214c9847b04ac643ca3d3867b2c4318111e156d0b17839a2ab3f92d1874438188e2ab5ec312eba66b29181fc2bc03cdc134919477f322f50a20eefc329b1e76d87932c7285a99840e16c20622c7622e3cb96b6556ebdbe066ea702eb0de6cb2837640d992a8f2bb1d2debc4cc8198ac5291b1550183d24f472f0b55e7dbd2bf94f09ddf9eb18fd457c9625375fefa091aadebe8e794d553f06dae9f33f5b505117eb2f69c1a7797fce25b20d5e63591e7c767d2b8dc5cdede47a2b5024ef582b8a5466c9f34cf146cb94dc7808e1289fb7fe26229ed60f5d4f86223ff1e016d95234d3c501ea3004ce23dca1ee27cda582e31fcb7a91175a0371f11e19d05dc1ef1f621624793bb2b5cb02b7bfcd0cb109ecc75cd6bdf31daa7535ec0deefb585fb5b278ddd2a6a0a761dd51bae65fca3ac35825205e7e5fe203ae0e144338e8679424855560e8666092abecc7e5c3fe8e1a06d81b7d23b0df0adf783743cd5e5437ff3f6521e2b48cb44ce80ef33f4fd769e99681b4e5c1cc4586db9a693b01650981a263a0d58465f57b7c78d5c877b436cbfbf5a3faf2f337f705b9c7fbe2fa999f0fe6ed305f79a36ed756fa740d77d6499226feb848e8e823b62b9d2a3d5ade2126bec0053632026e1be9da402700c0e56880789c317f2c883f97e6e3d2bc694f854f0bc9418441af6ecf82b4a7545c10f3d91b684bbb67896810bc23324e05052fe269f4fe56e64c240949c1c6eead5d4676bab0ea128dd80f99385329527032ec9bb45160e806d25284d8acdb6d3284fa9c018a2da3973fbc080b698b59cc54995b1f0db92d8b3f802eba36ef72f74b0b7c02db29bffcf1979bb913f7748b5b8c2153945688840680933db76cde94aca37cdc520f209638c07eaa3397cc6dc8f12f19fcc97236814ea5c28697de15eba6981bdd99a6e066085e7878e23f840248c9f8c0b0b0255c27fc208df81a445cc36ec408b60957771d0ade812f135023647e97c74a62a8625e0351947a2a79e65cf9b09c25132b59c3a69d93152703e3db2a51f52011fc7779d9f084de626af2d9a925bb02282bf7ffbd84706079352863d2f790862b92b3ef7563d53cda562f049724b7e2578becdb42c76e0165a77bb0f94ee4870aa9f72ef0573439e8353189d285aa1374112d07ba3c15952a070a6de6a873850fac2bcfd3a4b7f7f12d910f34f64131f640aa02e541e0058eabf652de4b71f5a7d1a5f00be36e35004f42fa59335257ab8f1d3e5b0c5f1c7376d0f27bf142953038951eb1a88cf7a8f9b5a741b9ade9acea54fc54a11e0b2cdf89f3a396d257c50fc6ec2c6dfc6b383f97f1fa9df1b844443b97a43d53f0e56469a7d8706ee7ec731f6f20d2c8b850074caf45db27dfbe14a7d03659781b2f912be4a0ee502461764a06ff150596a4ede2378a5e86d655480600262d9c38acbdac90aee49aa4ec689ba5887455df8218272d9d981f3b7fe0b37118d90a74641913bda9284cb7712915395fa847ffa1e503e49f7481e77a8a5c1f9e17373f1db6d8eb6e6f5cd41eae86e6d634a12a3023aaf810f22c3af3b3b2b716f5284b54fbd0bc5292fd6923ca9dd7a77b1a6f8ec3d88a2a656f2eb9872afbf2d2ba47161daf6decbe268b002bb0fcf5dd207cfe9a69513a934928e39acdb329d316d8de2c8ef6fa2a4b24d661e08b210b2cb26aedf8bef81aec1c6111dc3b41e58a087854a171b3031699b8ac85e2d15476cb3fb0cd13a6c3d25efdb240975483b13f4f9503d03b0893bfa57e540532036eb4c513f5975397809f62bb79b010a0798b117f29c4b4f9902574eb2d84157fc2b5424603e17b8277e820e7fcece90ff75d1d0f7dee16f9e9b308fba08f770213ee4bbdd6b6062a12021888bc6c9044a0d18857954d3d212cc26f913ce5fd524216fd69b3163e35781313f17d586824546b7d1ad62bbada6746b9d4f6482659b5c208a440075b224e7801a382810ceec28742e69f1fc870567621da23529ee99dd3c314065ad119d934f19b4af4b62b6cb0e945219775ecde7d8bd35fafde89cceac37dff6c128c525861f0bef039bc24ab260cfba3c0ce07b5543c1ff077719a57a02638bcf3ef3da6dcde9895656e2298cc234993a513c9659faba71b1bf65c6d4ac106724f814b9ea77e36f33192a7cb99a4482bcf871274270ac2b579eeea0fa97187320e59d7da2f1f40c28be7751bc9b2557d1122c39aec83faf451bea97878366d89de7ba9834986f31c32767c8b3a34cc14252dc3848a90096a511e605b993f01abd8765b58296ad60ccc3c2346b69fd46e930e79f419c9a4585072a214ea95e52e8d07da38b9c751bbc4aacc8ea4293f0409e0b489c922a6c56ca6be37b5227b565a0b8e0d8ad12df9048b69ed3f34ac822c0088c4718880ab0a0c71cafcca47feb198064a6b1666b6a114ffb59d863637c6aacc33aa1b0e5bd585bbd1093241f7f560dc8e39fa89ac76ea030c55edb72572f96de17a33fbd7228a331c0869d7bb36a13a7ace16df61236e85937e42df9e18241887c91012d19ae594dc4121c8d0712e50dee3e7da27551acf2db11f9be9502137853e2f60ae33de044601bf2fb55f684b1bc203e3352a46c0609690a2f294cae71d9d1858067dc6cbe9b26c8e7ca5f95910ef1bd2cf61f52ec2592ae3b441d1788d7a9a4ca0c61443934b854e8cbfe461b2cf9ef2c9a89946da3f2e38cc3344cdfacd2aa66a819f4f4ec0f1c33a9fd5eb5846e88091352ae6cd2caa4af0118b29451a829f1f28ef6bca1f91610f3ffaa89e1c1700f8d5b58dcb8d0eb9bc91ffcb025a6f8b7b5c52bbb9c13e7f7a5bab8918a009f404a683cfee101ee80a762abdf3ee2f2b4fd3f55a4c951f2726e7b90bca2535be69688677f0869576cddb9d560051ea967d90998a9f605d10077ac9ac7325a28b6f9f334d7eb5f38a22d76f7e963bcfbbf624eabe473c807109d378a882913e54c5830654dec9c1932e11c1564ae267078a2b1302f4367d70718ef01b35278857320507e8d3a03c587092c0620de4ee14b288483c185d6777e27d3b03d3f238c2457d58e6f6730705491ca3c353e53747c80d471082917dc0542570bd595a00926a7aa772573864b95561dfd2025592811aa27cdb3ab11cc57d4341d97fd01e5b5dd66bec23ad637991c5ec2659bc101620261a6e6544df8ace9b1045c7385d98926405b123c3019aa93021ee354efe2eac45d2e0e11ada0725181e51ed1528b1a056baadb665b91ee3e22347cd251906703f0ade5d12b643ac9daacf83969e124c1c7cfb148bc5da2366ce793da998651b39229ad6673f27ec369acf8aa56821019d6893369262d1d8781104f49adf08fe9baa2dc39a1c57e770751b34cbd6282c9b517e6d79a6ddeb7d8a50969d4234d268bee2699c9535a59c9340e04f0dd0f27ffb5801789e4488f25b9b7d6468a0da15c53826f7184aef74143ab3c2e5664723efd802d1d187615addd4af2b8e22a49de1f5eb0b0977c84b0ee285cd4ee92bc09952d41983b7a29d38c985c5bfd472744b8b3cef8169b940c8d4fa197bf7a39ecf56783df2262423acc4154713dc075e66df4bb77d0b24d4f7e6e4b25df443a6d8cc574b4573723609ba3d4885c8648042d51fd37bd38a1e315e18377798e1bf1e69447cb8243594c329067473561492ffc2ce3a434e6ac658f9e432d48ef20ab11f62914671fcc5ecdea8ea72deb33224a72a5e9e6007b012d77549a332439130401add224a50b66c1ca23437973b968c538b5208a72adecff0de067da2934e9acbcf79283d48549ceeb310fb01da8968b34aa12883293e76fd0cf0c255013f0ca1ed6c38bad685b3eba4a7736b6b65f35b5408961a42b6124b1e8cfccd45ede63ded0ab49b9ed7ab12402c00ab25d511c1c5dfa03932d83f18240455216a2d2b5397653ed04cb14061945aca71a5f6327680edcb42f46fc0d5e87b80b778e0d04123df8763e80af2f1cf411fd115c8b054702bc157a294cf5e00bd8f0a78f4bf5cb80c6d3794bd9668d78dbd54a861ddfe2a60f6148397b2a4297bf57615899bc8f8043fbf224967b5853983203a061eee8e84e46b64aec11a1d21bf9e1bd5cb2fb47e4023c54dc4f9ad4631e370a20c7e21c344f432cc32d921ac019dcab568550145c27d07b1902c37cb2a01be6e786fd8e86e183356fdd9d76342a5e8f02113ba71a7c1d94c7e325b7ae38d1cef97f6fc188509f4afead3d12b946b21e4167300a2c8b961dd76b0d91bdf21d13d1d9c78567dae473a536e1f7ee043df408f6cff5fc91c790e2de6c5b41dfe06b20905dd8009e31f42d010a68e4a5191780dee76fa6f7726f10433697e05fc60e7c2c9830fb5a96196ea11249ac564d0593538c1b70a69054e4accc213856b2390e81afae3a67e85d0a8ae97c37fd6fd0e8053aa855ffa7caf70010ee645b8b7400a2bcc0a72e912fe428e359b6ea0f19bf837b9385eae4fc6f4d7e4554f387cbe107a3d4edfca37a8d27ef5215c4246b88b2634b2ae9255d083c98046239ccddbb2eaca4a5c59579f9ecb899b0afdbb04eb1d3bc1d7ce47a007a7aa1bce7bb661c03c5ba41b0c380f8b792519478902d676ebf5519d3886604a418e4fb43e9902c9acb3511cfc867c7c6d6705fec68ccd8006a813ac9d33e494d084abb6bac208a04471d536311334392a818a02c141cefe694ae2c63467207a44381a1d6938ac42c9e356ab74345df9b91140a11b7fc236ba88ea73d05f7e3a3eef64deda20e596c8ee8809c77ca767334078aa3551a3e08505942dd7a0bca23976f2b3555d1baafcc7b2b1c91d06364e1a2042266edb8db4987845d834ddd40006a26adb5070d7f548b1fdd599075ee2eda0c2708c5b8878d85aaf1aeda172fa48ecffad69283f0dd13742f0bf17390a8596ee9495949f219af673536aab56f9e5aaea2ae720b032fa32dbef16fcbdc1e2ea52218f640e8b98cb24ccef663623a89d535c64e4d54be7c663264862d286ada81cf5de21eeb0fcd33c7570ada1b245ae6532f9cb3f2b013576f1c15e6ffe29db1a4f1437741bab06c8d3ae35413d6cfbc3ee54292983573a0ef7fa007d4c4f25d5d164e9126fc8a5bc191afa5f2512f4a767389ed15fa96cc222ea8b4fc1766b6eb0fce3ed538e2cb81be60580bd6afeaf007f504e8e5dbc300d3c4b3028ac98ece915d54c758b52889bace03b53bd7ae1d09cb5c1096078143f67cb7d642d920674b03437497c4650de58b98b78bd3b47ac93bda1fa78c7ac60c45cd0b6399ca94a5f63d9e3b89697c8f8650dcab44dc26fefefb1372233f4412bdcd7d99f7f8ec0fdab7893d7648ed113da8fdd50daf291b5df1cee840b5aa9cc2b92df8c94101d985e87f01241c26c77e4ab3c0f87a07bfeced6fb0b3e4a896c5be2cac31a086721f5b0fb12f9ec5b4417ccb2da13e73b448a99d3957816b1fbf2f5bc77d3104dfdc91b5c39b6c75510c0b1967a54af7d4f1cadbe2f4ac6a502b56e430e1903b812c4c6b01538aeeb87282ee3dab9c31da37241a4d7a400576551bb7a3de5105810703aef4f95c86c61b72d397ae13532de2250f670856d3773e7265930f6fe86fba75d75ad0b26905d64941f732caa05b833a3b44fe976a0c91f24b19616bbf7fa92a9de0ee3ad2eaadc1ee987faae2526b4d0caf11f3da4034d8b2bb1b1197bb9bc97b604f2e66d50fffbb084c525f546787c79aab289829a1bb90087dccfa47f69bc565928cc7e5c2b1d7224ff344253f7d8e59abaa256c56359a7a482fbb8b6c652aae612e8d82353d2e61ec7e72eb4a06cfe99248b82ad509dfe9454f53c51992142467d3daa4c960ea86504cba0c5838d6d010120160c32eebfc16817e3195a67d963e74b064e2ca78cf18b067d09064a7d21cf56280f6b3c9ee0280e16aef60d3fe69eb2be8797857da0480056ba11553c29aa065f7f0a39b36b09f1b441a9cfefc3ebb98675102a4533ce2c0ff2523a9040e92e2e8b316902d270ffa290c5555f56b6d6a6f99b173716f0f247f1c1b08629c88e4db2d3d0a09a1323539aa88b907071e90ce42876ce8cdda4baa7fbd054b9f1a92b7ae58449f7f8885cd5b3f5b501b66afe96fcfc551fb194ff9ee14ecc16fb28620da73b3f11b0d5df1d0c40fb26c8a73348240fda804d41f15a70312c5592efc3a18448c0b05d9c7ab1ff32603e7b4f1205c5918016bd92cb77ce86997d8c5e0f6d09919e285614ae2d3691566b461ffd9a8b4255fdcd5b7d133944d33d2768b98e034b5b58ac203e73fa1ad5c8f0167b2f6d849fa8385248a660a8707d3d871e80ae0591f0214aa609217166b898b06fb444e59c45f233ed290d06c9a6ec7302f4e23e89838bc4422531182df5870ddd27e339bc95ae5faf41dafa9bdac4d704058e493b2f7152c85adef33a40bd02b6360ec1cc4fcb1d7e4d0ae700a8063186852efc4f93788b6a82af28e2d768cdf05e1e49d849c054edc1a88d12c6b418e65b01941a4c0c6bcb6edf2810a7e309cb36bc151c68ffc8a0190ce8e591a0bc0493b9acdfa7b56dc8836adac97c22147d975beedd5f3cb588f91267ee714bf8ec8370c3a5bc66416829138b7c6f51a783b38ddf5234287f1520e373f91455e6763840c273457605d65c072286cde29d1fbcfd32b7eb99904eeafb11f4523d5fc94bbbb24a0a94f969cdd1c7c38b1673196f83854b9e1aa696fd0f1dc5ae6f60e1c3ccb85c9323a8be60df171d86afaee2cd3879588279b9fc0afd583d07394264d3959374e5fe3583a68f58f4e0061c95115554c780a6e0df493312578cfa2eedbebbb793d203cbd6d5a0f2daf41a611dc9eb5134f7997bb10c291ad23a041a1b7d02270932453582207344b5e2417aebac194a4ee9ac602a4af765090a41e39757e7c9d260583a60b3a6eb0ee06dda1ecef2fdb266c16b92b727bc715a8e3d6c453d7dcb31af4897e35be16045245449cd11ecef30111feb6aff76bd1880884c5b4e0f6104b018b61258b5b9305fb494878627ee114b3d25f2de6155f55994579f96a3a159be3911bc94d52beae0495d78fbc86ec33f95a8eceffdb7fd6816327f4bcdc105b16e7ab0462fcd97a82d993e13d5fd2724c9174bb821811f38bc78d578fea7c897eca405ffab3e5564080ec629ccb4078042ebd1895f7eb6c071dbc4a8af4e9f98089df8027a6e42b63cf8f516c91f72c67a40e8fb1e10f96f76134034efaab08c3f47fe02c49ccc03b3ac4be7acaa5015decd2b69c4b015f04842e437cd6c67c59c0002528273e1699a51c20b942bf3e91120bd964f8896e2adf8dd4873207fe1fb423511a867d68d945f2ea9f5d74aece7a606220d0293c24b54afb4e78536cb0582e58136bbf483cebc9df3c17dc005a78c603af3fbe4607bf82b796ce26597193a973264f605d69b77b4000c9b5f8c81791fb68c83d80d6ca69390ac91c817dff740e95ec29b1b6a2e3a903233ddc12f85125d674adf09d58368c30a7e3127b501659d1f8cd7c58e3a934cd8c16e672269303ac9e01340ed95df7ca64381c40a5670a6deed62adcd3c106c5a353498a201839152",
    Br = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]"; !
    function(t) {
        function i(t, i) {
            for (var n = "",
            e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5),
            r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
            h = Math.round(i.length / 2),
            a = Math.pow(2, 31) - 1,
            o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (r * n + h) % a;
            for (var f = "",
            _ = "",
            e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)),
            _ += String.fromCharCode(f),
            n = (r * n + h) % a;
            return _
        }
        t = i(t, "QUNEE"),
        Br = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    } (Rr);
    var $r = Br[0] + Br[1] + Br[2],
    Fr = Br[3],
    Gr = Br[4],
    Yr = Br[5],
    Ur = Br[6],
    Hr = Br[7],
    qr = Br[8],
    Wr = Br[9],
    Vr = Br[10],
    Xr = Br[11],
    Kr = Br[12],
    Zr = Br[13] + Br[14] + Br[15],
    Jr = Br[16] + Br[17] + Br[18],
    Qr = Br[16] + Br[19] + Br[20],
    th = Br[16],
    ih = Br[21],
    nh = Br[22],
    eh = Br[23] + Br[24] + Br[25],
    sh = Br[26],
    rh = Br[27],
    hh = Br[28],
    ah = Br[29],
    oh = Br[30] + Br[24] + Br[31],
    fh = Br[32] + Br[33] + Br[34],
    _h = Br[35] + Br[36] + Br[37],
    ch = Br[38] + Br[39] + Br[40],
    uh = Br[41] + Br[42] + Br[43],
    dh = Br[44],
    lh = Br[45],
    vh = Br[46],
    bh = Br[47],
    yh = Br[48],
    gh = Br[49],
    ph = Br[50] + Br[51] + Br[52],
    xh = Br[53],
    mh = Br[54],
    Eh = Br[55],
    wh = Br[23],
    Th = Br[56],
    Oh = Br[57] + Br[58] + Br[59],
    Mh = Br[60],
    Ih = Br[61] + Br[36] + Br[37],
    kh = Br[62] + Br[14] + Br[63],
    Sh = Br[64] + Br[65] + Br[66],
    Ch = Br[67] + Br[68],
    jh = Br[69],
    Ph = Br[70],
    Ah = Br[71],
    Lh = Br[72],
    zh = Br[73],
    Dh = Br[74] + Br[39] + Br[75],
    Nh = Br[76],
    Rh = Br[74] + Br[39] + Br[77],
    Bh = Br[78],
    $h = Br[79],
    Fh = Br[80],
    Gh = Br[81],
    Yh = Br[82],
    Uh = Br[83] + Br[84],
    Hh = Br[85],
    qh = Br[86],
    Wh = Br[87],
    Vh = Br[88],
    Xh = Br[89] + Br[39] + Br[90],
    Kh = Br[64] + Br[1] + Br[91] + Br[24] + Br[92],
    Zh = Br[93] + Br[94],
    Jh = Br[50] + Br[95] + Br[96] + Br[1] + Br[97],
    Qh = Br[98],
    ta = Br[94],
    ia = Br[94] + Br[93] + Br[94],
    na = Br[99],
    ea = Br[100],
    sa = Br[101],
    ra = Br[102],
    ha = Br[103] + Br[104] + Br[105],
    aa = Br[106],
    oa = Br[107],
    fa = Br[22] + Br[104] + Br[105],
    _a = Br[108],
    ca = Br[109] + Br[110] + Br[111],
    ua = Br[23] + Br[42] + Br[112] + Br[1] + Br[113] + Br[104] + Br[114],
    da = Br[115] + Br[116],
    la = Br[117] + Br[118] + Br[119],
    va = Br[117] + Br[120] + Br[119],
    ba = Br[117] + Br[121],
    ya = Br[23] + Br[33] + Br[122],
    ga = Br[23] + Br[123] + Br[124] + Br[125] + Br[126] + Br[58] + Br[59],
    pa = Br[127],
    xa = Br[128],
    ma = Br[129] + Br[76] + Br[130] + Br[76] + Br[131] + Br[76] + Br[132],
    Ea = Br[115] + Br[121],
    wa = Br[133] + Br[65] + Br[134],
    Ta = Br[135],
    Oa = Br[136],
    Ma = Br[137],
    Ia = Br[138],
    ka = Br[139],
    Sa = Br[140],
    Ca = Br[141] + Br[33] + Br[142],
    ja = Br[143],
    Pa = Br[144],
    Aa = Br[145],
    La = Br[64],
    za = Br[146],
    Da = Br[147] + Br[116],
    Na = Br[147] + Br[121],
    Ra = Br[148],
    Ba = Br[149] + Br[150] + Br[151],
    $a = Br[152],
    Fa = Br[153] + Br[154],
    Ga = Br[155],
    Ya = Br[156] + Br[154] + Br[21] + Br[157] + Br[21] + Br[82] + Br[78],
    Ua = Br[156] + Br[158] + Br[21] + Br[157] + Br[21] + Br[82] + Br[78],
    Ha = Br[159],
    qa = Br[160],
    Wa = Br[161] + Br[133] + Br[162],
    Va = Br[163],
    Xa = Br[164],
    Ka = Br[165],
    Za = Br[166] + Br[65] + Br[167],
    Ja = Br[168],
    Qa = Br[156] + Br[169] + Br[21] + Br[82],
    to = Br[170],
    io = Br[171],
    no = Br[172],
    eo = Br[22] + Br[39] + Br[173],
    so = Br[174],
    ro = Br[175],
    ho = Br[176],
    ao = Br[177] + Br[42] + Br[178] + Br[65] + Br[179] + Br[39] + Br[180] + Br[104] + Br[181],
    oo = Br[182] + Br[42] + Br[178] + Br[65] + Br[179] + Br[39] + Br[180] + Br[104] + Br[181],
    fo = Br[93] + Br[42] + Br[178] + Br[65] + Br[179] + Br[39] + Br[180] + Br[104] + Br[181],
    _o = Br[183] + Br[42] + Br[178] + Br[65] + Br[179] + Br[39] + Br[180] + Br[104] + Br[181],
    co = Br[184] + Br[65] + Br[179] + Br[39] + Br[180] + Br[104] + Br[181],
    uo = Br[185] + Br[58] + Br[186],
    lo = Br[84] + Br[187],
    vo = Br[188],
    bo = Br[189] + Br[76] + Br[190],
    yo = Br[191],
    go = Br[192],
    po = Br[193],
    xo = Br[194],
    mo = Br[23] + Br[42] + Br[195],
    Eo = Br[196] + Br[39] + Br[173],
    wo = Br[197],
    To = Br[56] + Br[110] + Br[198],
    Oo = Br[30] + Br[39] + Br[173] + Br[199] + Br[200] + Br[65] + Br[201],
    Mo = Br[23] + Br[199] + Br[202] + Br[33] + Br[122],
    Io = Br[203],
    ko = Br[204] + Br[205] + Br[206],
    So = Br[30] + Br[39] + Br[173] + Br[199] + Br[200] + Br[39] + Br[207],
    Co = Br[208] + Br[39] + Br[173],
    jo = Br[209],
    Po = Br[210],
    Ao = Br[211],
    Lo = Br[76] + Br[212] + Br[39] + Br[173],
    zo = Br[208] + Br[199] + Br[213] + Br[14] + Br[15],
    Do = Br[214],
    No = Br[215],
    Ro = Br[216] + Br[76] + Br[217],
    Bo = Br[216] + Br[76] + Br[190],
    $o = Br[135] + Br[125] + Br[218],
    Fo = Br[219] + Br[78] + Br[220],
    Go = Br[221],
    Yo = Br[222],
    Uo = Br[223],
    Ho = Br[224],
    qo = Br[225],
    Wo = Br[226],
    Vo = Br[214] + Br[21] + Br[227] + Br[21] + Br[82] + Br[228],
    Xo = Br[23] + Br[19] + Br[229],
    Ko = Br[230] + Br[110] + Br[231],
    Zo = Br[68],
    Jo = Br[232] + Br[76] + Br[233],
    Qo = Br[232] + Br[76] + Br[233] + Br[76] + Br[234],
    tf = Br[232] + Br[76] + Br[233] + Br[76] + Br[235] + Br[76] + Br[236],
    nf = Br[232] + Br[76] + Br[233] + Br[76] + Br[237] + Br[76] + Br[236],
    ef = Br[232] + Br[76] + Br[233] + Br[76] + Br[238],
    sf = Br[239],
    rf = Br[232] + Br[76] + Br[233] + Br[76] + Br[240],
    hf = Br[241] + Br[21] + Br[82] + Br[242],
    af = Br[243],
    of = Br[232] + Br[76] + Br[233] + Br[76] + Br[244],
    ff = Br[245] + Br[199] + Br[202] + Br[33] + Br[122],
    _f = Br[246],
    cf = Br[136] + Br[104] + Br[114],
    uf = Br[55] + Br[247] + Br[42] + Br[124] + Br[24] + Br[248] + Br[39] + Br[173],
    df = Br[55] + Br[210],
    lf = Br[55] + Br[249] + Br[116],
    vf = Br[55] + Br[250],
    bf = Br[251] + Br[252] + Br[104] + Br[253],
    yf = Br[55] + Br[249] + Br[121],
    gf = Br[55] + Br[254] + Br[65] + Br[255],
    pf = Br[256],
    xf = Br[55] + Br[257],
    mf = Br[258] + Br[39] + Br[259],
    Ef = Br[55] + Br[254] + Br[24] + Br[248] + Br[39] + Br[173],
    wf = Br[55] + Br[260] + Br[39] + Br[90],
    Tf = Br[261] + Br[262] + Br[263],
    Of = Br[264],
    Mf = Br[55] + Br[257] + Br[104] + Br[265],
    If = Br[55] + Br[266] + Br[116],
    kf = Br[55] + Br[266] + Br[121],
    Sf = Br[55] + Br[266] + Br[205] + Br[206],
    Cf = Br[267],
    jf = Br[247] + Br[42] + Br[124] + Br[39] + Br[207],
    Pf = Br[55] + Br[203],
    Af = Br[30] + Br[58] + Br[268],
    Lf = Br[55] + Br[254] + Br[104] + Br[253],
    zf = Br[204] + Br[33] + Br[269],
    Df = Br[56] + Br[19] + Br[270] + Br[33] + Br[269],
    Nf = Br[23] + Br[19] + Br[270] + Br[33] + Br[269],
    Rf = Br[182] + Br[33] + Br[269],
    Bf = Br[177] + Br[19] + Br[270] + Br[33] + Br[269],
    $f = Br[204] + Br[33] + Br[269] + Br[14] + Br[119],
    Ff = Br[182] + Br[33] + Br[269] + Br[14] + Br[119],
    Gf = Br[177] + Br[19] + Br[270] + Br[33] + Br[269] + Br[14] + Br[119],
    Yf = Br[271] + Br[262] + Br[272],
    Uf = Br[273] + Br[110] + Br[274],
    Hf = Br[23] + Br[1] + Br[275],
    qf = Br[276],
    Wf = Br[223] + Br[39] + Br[277],
    Vf = Br[222] + Br[39] + Br[277],
    Xf = Br[278],
    Kf = Br[279] + Br[58] + Br[280],
    Zf = Br[281] + Br[125] + Br[274] + Br[110] + Br[282],
    Jf = Br[153] + Br[110] + Br[283],
    Qf = Br[284],
    t_ = Br[285],
    i_ = Br[286],
    n_ = Br[287],
    e_ = Br[288],
    s_ = Br[289] + Br[1] + Br[218] + Br[24] + Br[290],
    r_ = Br[289] + Br[24] + Br[290],
    h_ = Br[291] + Br[1] + Br[292] + Br[1] + Br[218],
    a_ = Br[293] + Br[95],
    o_ = Br[294],
    f_ = Br[295],
    __ = Br[296],
    c_ = Br[297],
    u_ = Br[290],
    d_ = Br[298],
    l_ = Br[299] + Br[78] + Br[299] + Br[78] + Br[300],
    v_ = Br[84],
    b_ = Br[301],
    y_ = Br[302] + Br[42] + Br[124] + Br[199] + Br[187],
    g_ = Br[303],
    p_ = Br[50] + Br[24] + Br[304],
    x_ = Br[291] + Br[24] + Br[304],
    m_ = Br[30] + Br[199] + Br[305],
    E_ = Br[291],
    w_ = Br[30] + Br[33] + Br[306] + Br[14] + Br[15],
    T_ = Br[0] + Br[51] + Br[307],
    O_ = Br[308],
    M_ = Br[56] + Br[1] + Br[91] + Br[199] + Br[213],
    I_ = Br[4] + Br[1] + Br[309],
    k_ = Br[310],
    S_ = Br[30] + Br[19] + Br[311],
    C_ = Br[55] + Br[50],
    j_ = Br[279] + Br[58] + Br[280] + Br[58] + Br[312],
    P_ = Br[55] + Br[291],
    A_ = Br[279] + Br[58] + Br[280] + Br[1] + Br[91],
    L_ = Br[313] + Br[110] + Br[183],
    z_ = Br[314] + Br[110] + Br[183],
    D_ = Br[204] + Br[110] + Br[183],
    N_ = Br[315] + Br[39] + Br[207],
    R_ = Br[316] + Br[110] + Br[183],
    B_ = Br[317],
    $_ = Br[318] + Br[76] + Br[319],
    F_ = Br[318] + Br[76] + Br[320],
    G_ = Br[318] + Br[76] + Br[321],
    Y_ = Br[318] + Br[76] + Br[322],
    U_ = Br[318] + Br[76] + Br[323],
    H_ = Br[318] + Br[76] + Br[324],
    q_ = Br[318] + Br[76] + Br[325],
    W_ = Br[318] + Br[76] + Br[326],
    V_ = Br[318] + Br[76] + Br[327],
    X_ = Br[318] + Br[76] + Br[328],
    K_ = Br[318] + Br[76] + Br[329],
    Z_ = Br[318] + Br[76] + Br[330] + Br[76] + Br[331],
    J_ = Br[318] + Br[76] + Br[330] + Br[76] + Br[300],
    Q_ = Br[318] + Br[76] + Br[330] + Br[76] + Br[84],
    tc = Br[318] + Br[76] + Br[330] + Br[76] + Br[332],
    ic = Br[318] + Br[76] + Br[330] + Br[76] + Br[333],
    nc = Br[318] + Br[76] + Br[330] + Br[76] + Br[334],
    ec = Br[318] + Br[76] + Br[330] + Br[76] + Br[335],
    sc = Br[318] + Br[76] + Br[330] + Br[76] + Br[336],
    rc = Br[318] + Br[76] + Br[330] + Br[76] + Br[337],
    hc = Br[338] + Br[19] + Br[339],
    ac = Br[340],
    oc = Br[55] + Br[227],
    fc = Br[225] + Br[51] + Br[341],
    _c = Br[55] + Br[254],
    cc = Br[342],
    uc = Br[23] + Br[39] + Br[75],
    dc = Br[343],
    lc = Br[344] + Br[39] + Br[75],
    vc = Br[345],
    bc = Br[346] + Br[76] + Br[347] + Br[76] + Br[348],
    yc = Br[346] + Br[76] + Br[347] + Br[76] + Br[349],
    gc = Br[350],
    pc = Br[351] + Br[42] + Br[195],
    xc = Br[352],
    mc = Br[353] + Br[1] + Br[91],
    Ec = Br[23] + Br[65] + Br[354],
    wc = Br[355] + Br[76] + Br[356],
    Tc = Br[355] + Br[76] + Br[357] + Br[76] + Br[358],
    Oc = Br[355] + Br[76] + Br[347] + Br[76] + Br[359] + Br[76] + Br[360],
    Mc = Br[355] + Br[76] + Br[347] + Br[76] + Br[361] + Br[76] + Br[360],
    Ic = Br[355] + Br[76] + Br[347] + Br[76] + Br[360] + Br[76] + Br[362],
    kc = Br[355] + Br[76] + Br[347] + Br[76] + Br[356] + Br[76] + Br[363],
    Sc = Br[355] + Br[76] + Br[347] + Br[76] + Br[359] + Br[76] + Br[362],
    Cc = Br[355] + Br[76] + Br[347] + Br[76] + Br[361] + Br[76] + Br[362],
    jc = Br[355] + Br[76] + Br[347] + Br[76] + Br[362] + Br[76] + Br[360],
    Pc = Br[355] + Br[76] + Br[347] + Br[76] + Br[356] + Br[76] + Br[364],
    Ac = Br[355] + Br[76] + Br[347] + Br[76] + Br[356] + Br[76] + Br[365],
    Lc = Br[355] + Br[76] + Br[357] + Br[76] + Br[366] + Br[76] + Br[358],
    zc = Br[355] + Br[76] + Br[347] + Br[76] + Br[356] + Br[76] + Br[367],
    Dc = Br[355] + Br[76] + Br[347] + Br[76] + Br[359],
    Nc = Br[355] + Br[76] + Br[368],
    Rc = Br[355] + Br[76] + Br[368] + Br[76] + Br[369],
    Bc = Br[355] + Br[76] + Br[368] + Br[76] + Br[370],
    $c = Br[355] + Br[76] + Br[368] + Br[76] + Br[371],
    Fc = Br[355] + Br[76] + Br[372] + Br[76] + Br[373],
    Gc = Br[374],
    Yc = Br[355] + Br[76] + Br[347] + Br[76] + Br[361],
    Uc = Br[330] + Br[76] + Br[375],
    Hc = Br[23] + Br[65] + Br[376],
    qc = Br[50] + Br[33] + Br[377],
    Wc = Br[214] + Br[19] + Br[311] + Br[58] + Br[312],
    Vc = Br[214] + Br[58] + Br[312],
    Xc = Br[378],
    Kc = Br[23] + Br[379],
    Zc = Br[340] + Br[110] + Br[282],
    Jc = Br[380] + Br[42] + Br[195],
    Qc = Br[381],
    tu = Br[382],
    iu = Br[291] + Br[24] + Br[290] + Br[58] + Br[312],
    nu = Br[50] + Br[24] + Br[290] + Br[58] + Br[312],
    eu = Br[383] + Br[39] + Br[173],
    su = Br[302],
    ru = Br[384] + Br[110] + Br[385],
    hu = Br[386] + Br[76] + Br[355] + Br[76] + Br[387] + Br[76] + Br[388],
    au = Br[55] + Br[389] + Br[58] + Br[390],
    ou = Br[391] + Br[116],
    fu = Br[391] + Br[121],
    _u = Br[392],
    cu = Br[393] + Br[65] + Br[394] + Br[17] + Br[395],
    uu = Br[396],
    du = Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[17] + Br[399] + Br[94] + Br[42] + Br[400],
    lu = Br[401],
    vu = Br[402],
    bu = Br[210] + Br[68] + Br[403] + Br[404] + Br[70],
    yu = Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[17] + Br[399],
    gu = Br[67] + Br[68] + Br[299] + Br[405] + Br[299] + Br[405] + Br[299] + Br[405] + Br[299] + Br[70],
    pu = Br[406],
    xu = Br[407],
    mu = Br[408],
    Eu = Br[409] + Br[410],
    wu = Br[411] + Br[76] + Br[216] + Br[76] + Br[364],
    Tu = Br[299] + Br[175],
    Ou = Br[411] + Br[76] + Br[216] + Br[76] + Br[363],
    Mu = Br[412],
    Iu = Br[413],
    ku = Br[115] + Br[205] + Br[206],
    Su = Br[378] + Br[125] + Br[414],
    Cu = Br[30] + Br[36] + Br[415],
    ju = Br[30] + Br[65] + Br[416],
    Pu = Br[417] + Br[76] + Br[418],
    Au = Br[419] + Br[110] + Br[183] + Br[19] + Br[420],
    Lu = Br[421] + Br[199] + Br[200],
    zu = Br[227] + Br[422] + Br[423],
    Du = Br[222] + Br[1] + Br[424],
    Nu = Br[425],
    Ru = Br[61],
    Bu = Br[188] + Br[65] + Br[354],
    $u = Br[188] + Br[65] + Br[255],
    Fu = Br[188] + Br[51] + Br[426],
    Gu = Br[427] + Br[110] + Br[283],
    Yu = Br[428] + Br[65] + Br[429],
    Uu = Br[428] + Br[58] + Br[430],
    Hu = Br[431],
    qu = Br[428],
    Wu = Br[185] + Br[104] + Br[432],
    Vu = Br[433],
    Xu = Br[434],
    Ku = Br[435] + Br[116],
    Zu = Br[435] + Br[121],
    Ju = Br[435] + Br[110] + Br[183],
    Qu = Br[436] + Br[65] + Br[255],
    td = Br[437] + Br[94] + Br[438],
    id = Br[439] + Br[58] + Br[186],
    nd = Br[115] + Br[440] + Br[441],
    ed = Br[442],
    sd = Br[443],
    rd = Br[444],
    hd = Br[22] + Br[19] + Br[445],
    ad = Br[446] + Br[125] + Br[218],
    od = Br[447] + Br[76] + Br[233] + Br[76] + Br[448],
    fd = Br[353] + Br[17] + Br[218] + Br[199] + Br[449],
    _d = Br[353] + Br[58] + Br[312] + Br[199] + Br[449],
    cd = Br[192] + Br[58] + Br[450] + Br[51] + Br[451],
    ud = Br[446] + Br[125] + Br[452] + Br[17] + Br[453],
    dd = Br[454] + Br[17] + Br[218],
    ld = Br[279] + Br[58] + Br[280] + Br[14] + Br[455] + Br[58] + Br[312],
    vd = Br[456] + Br[24] + Br[304],
    bd = Br[457],
    yd = Br[458] + Br[24] + Br[459] + Br[51] + Br[460],
    gd = Br[177] + Br[104] + Br[461] + Br[24] + Br[459] + Br[51] + Br[460],
    pd = Br[182] + Br[104] + Br[461] + Br[24] + Br[459] + Br[51] + Br[460],
    xd = Br[183] + Br[104] + Br[461] + Br[24] + Br[459] + Br[51] + Br[460],
    md = Br[41] + Br[24] + Br[459] + Br[51] + Br[460],
    Ed = Br[182] + Br[1] + Br[462] + Br[24] + Br[459] + Br[51] + Br[460],
    wd = Br[93] + Br[1] + Br[462] + Br[24] + Br[459] + Br[51] + Br[460],
    Td = Br[136] + Br[110] + Br[463],
    Od = Br[71] + Br[464],
    Md = Br[465],
    Id = Br[466] + Br[76] + Br[375],
    kd = Br[175] + Br[21],
    Sd = Br[466] + Br[76] + Br[467],
    Cd = Br[468] + Br[68],
    jd = Br[69] + Br[299] + Br[69] + Br[299] + Br[69],
    Pd = Br[23] + Br[42] + Br[124] + Br[199] + Br[213],
    Ad = Br[156] + Br[469] + Br[21] + Br[470],
    Ld = Br[23] + Br[42] + Br[124] + Br[199] + Br[187],
    zd = Br[383] + Br[1] + Br[91],
    Dd = Br[383] + Br[58] + Br[186] + Br[1] + Br[91],
    Nd = Br[471] + Br[110] + Br[282],
    Rd = Br[472] + Br[17] + Br[18],
    Bd = Br[473] + Br[65] + Br[474],
    $d = Br[39] + Br[173] + Br[68],
    Fd = Br[405],
    Gd = Br[475],
    Yd = Br[17] + Br[476] + Br[17],
    Ud = Br[65] + Br[255] + Br[68],
    Hd = Br[196] + Br[104] + Br[114],
    qd = Br[22] + Br[104] + Br[114],
    Wd = Br[477] + Br[76] + Br[478],
    Vd = Br[479],
    Xd = Br[480] + Br[39] + Br[90],
    Kd = Br[481] + Br[17] + Br[18],
    Zd = Br[482],
    Jd = Br[483],
    Qd = Br[484],
    tl = Br[485],
    il = Br[486],
    nl = Br[363] + Br[76] + Br[364],
    el = Br[363] + Br[76] + Br[487],
    sl = Br[488] + Br[76] + Br[364],
    rl = Br[488] + Br[76] + Br[365],
    hl = Br[367] + Br[76] + Br[364],
    al = Br[367] + Br[76] + Br[365],
    ol = Br[363] + Br[76] + Br[365],
    fl = Br[367] + Br[76] + Br[487],
    _l = Br[489],
    cl = Br[490],
    ul = Br[491],
    dl = Br[226] + Br[492],
    ll = Br[405] + Br[209] + Br[492],
    vl = Br[405] + Br[491] + Br[492],
    bl = Br[493] + Br[36] + Br[37],
    yl = Br[343] + Br[110] + Br[282],
    gl = Br[343] + Br[78] + Br[494],
    pl = Br[405] + Br[343] + Br[17] + Br[18] + Br[492],
    xl = Br[405] + Br[493] + Br[36] + Br[37] + Br[492],
    ml = Br[405] + Br[342] + Br[492],
    El = Br[343] + Br[17] + Br[18],
    wl = Br[495] + Br[199] + Br[213],
    Tl = Br[493] + Br[199] + Br[213],
    Ol = Br[23] + Br[1] + Br[91] + Br[199] + Br[213],
    Ml = Br[496] + Br[78] + Br[22],
    Il = Br[496] + Br[78] + Br[10],
    kl = Br[496] + Br[78] + Br[13],
    Sl = Br[497],
    Cl = Br[64] + Br[58] + Br[59],
    jl = Br[498],
    Pl = Br[499],
    Al = Br[500],
    Ll = Br[10] + Br[19] + Br[445],
    zl = Br[501],
    Dl = Br[13],
    Nl = Br[405] + Br[203] + Br[492],
    Rl = Br[405] + Br[13] + Br[492],
    Bl = Br[405] + Br[493] + Br[199] + Br[213] + Br[492],
    $l = Br[502] + Br[76] + Br[503],
    Fl = Br[13] + Br[78] + Br[494],
    Gl = Br[64] + Br[39] + Br[504] + Br[1] + Br[505],
    Yl = Br[64] + Br[1] + Br[91] + Br[104] + Br[506],
    Ul = Br[50] + Br[1] + Br[2],
    Hl = Br[64] + Br[1] + Br[2] + Br[1] + Br[507],
    ql = Br[502] + Br[76] + Br[508] + Br[76] + Br[509],
    Wl = Br[76] + Br[510],
    Vl = Br[502] + Br[76] + Br[511],
    Xl = Br[76] + Br[512],
    Kl = Br[513],
    Zl = Br[501] + Br[1] + Br[514] + Br[33] + Br[515],
    Jl = Br[428] + Br[1] + Br[514] + Br[33] + Br[515],
    Ql = Br[203] + Br[1] + Br[514] + Br[33] + Br[515],
    tv = Br[57] + Br[33] + Br[122] + Br[39] + Br[75] + Br[1] + Br[514],
    iv = Br[64] + Br[33] + Br[122] + Br[39] + Br[75] + Br[1] + Br[505],
    nv = Br[496] + Br[199] + Br[213] + Br[1] + Br[514] + Br[33] + Br[515],
    ev = Br[55] + Br[310],
    sv = Br[56] + Br[199] + Br[213],
    rv = Br[516],
    hv = Br[303] + Br[1] + Br[514] + Br[33] + Br[515],
    av = Br[203] + Br[517],
    ov = Br[518],
    fv = Br[502] + Br[76] + Br[519],
    _v = Br[520],
    cv = Br[110] + Br[198],
    uv = Br[185] + Br[39] + Br[521],
    dv = Br[433] + Br[422] + Br[522],
    lv = Br[295] + Br[94] + Br[523],
    vv = Br[524],
    bv = Br[525],
    yv = Br[22] + Br[58] + Br[59] + Br[19] + Br[445],
    gv = Br[526] + Br[76] + Br[527] + Br[76] + Br[131],
    pv = Br[528] + Br[126] + Br[65] + Br[529],
    xv = Br[69] + Br[530] + Br[69] + Br[148] + Br[69] + Br[144] + Br[69] + Br[146] + Br[69] + Br[531],
    mv = Br[69] + Br[532] + Br[69] + Br[533] + Br[69] + Br[534] + Br[69] + Br[535],
    Ev = Br[536],
    wv = Br[537],
    Tv = Br[538],
    Ov = Br[23] + Br[1] + Br[539] + Br[65] + Br[540],
    Mv = Br[541],
    Iv = Br[542],
    kv = Br[176] + Br[39] + Br[543],
    Sv = Br[64] + Br[58] + Br[186] + Br[104] + Br[544],
    Cv = Br[64] + Br[1] + Br[507],
    jv = Br[187] + Br[65] + Br[545],
    Pv = Br[546],
    Av = Br[547] + Br[1] + Br[309],
    Lv = Br[548],
    zv = Br[549],
    Dv = Br[94] + Br[177] + Br[94] + Br[421] + Br[94] + Br[550],
    Nv = Br[94] + Br[177] + Br[94] + Br[421] + Br[94] + Br[551],
    Rv = Br[94] + Br[177] + Br[94] + Br[552],
    Bv = Br[94] + Br[177] + Br[94] + Br[553],
    $v = Br[94] + Br[182] + Br[94] + Br[421] + Br[94] + Br[550],
    Fv = Br[94] + Br[182] + Br[94] + Br[421] + Br[94] + Br[551],
    Gv = Br[94] + Br[182] + Br[94] + Br[552],
    Yv = Br[94] + Br[182] + Br[94] + Br[553],
    Uv = Br[554],
    Hv = Br[313],
    qv = Br[555] + Br[68] + Br[203] + Br[99] + Br[227] + Br[422] + Br[556] + Br[100] + Br[557] + Br[558] + Br[69] + Br[559] + Br[560] + Br[561] + Br[299] + Br[562] + Br[563] + Br[564] + Br[565] + Br[566] + Br[567] + Br[568] + Br[15] + Br[336] + Br[422] + Br[569] + Br[565] + Br[570] + Br[486] + Br[84] + Br[571] + Br[299] + Br[187] + Br[84] + Br[51] + Br[124] + Br[572] + Br[569] + Br[559] + Br[573] + Br[486] + Br[574] + Br[200] + Br[575] + Br[482] + Br[576] + Br[333] + Br[577] + Br[578] + Br[579] + Br[17] + Br[580] + Br[422] + Br[39] + Br[581] + Br[39] + Br[561] + Br[125] + Br[582] + Br[583] + Br[15] + Br[584] + Br[124] + Br[585] + Br[200] + Br[422] + Br[586] + Br[587] + Br[588] + Br[589] + Br[579] + Br[24] + Br[590] + Br[262] + Br[567] + Br[116] + Br[332] + Br[591] + Br[592] + Br[593] + Br[485] + Br[594] + Br[561] + Br[300] + Br[1] + Br[595] + Br[596] + Br[482] + Br[24] + Br[300] + Br[124] + Br[24] + Br[332] + Br[597] + Br[150] + Br[565] + Br[121] + Br[561] + Br[42] + Br[598] + Br[599] + Br[600] + Br[601] + Br[602] + Br[603] + Br[567] + Br[604] + Br[567] + Br[605] + Br[336] + Br[565] + Br[422] + Br[332] + Br[606] + Br[607] + Br[608] + Br[609] + Br[333] + Br[610] + Br[611] + Br[336] + Br[21] + Br[336] + Br[69] + Br[554],
    Wv = Br[612] + Br[14] + Br[455],
    Vv = Br[612] + Br[199] + Br[200],
    Xv = Br[76] + Br[613],
    Kv = Br[299] + Br[78] + Br[299],
    Zv = Br[30] + Br[110] + Br[614] + Br[65] + Br[615],
    Jv = Br[302] + Br[104] + Br[114],
    Qv = Br[104] + Br[114],
    tb = Br[65] + Br[255],
    ib = Br[39] + Br[173],
    nb = Br[58] + Br[59],
    eb = Br[19] + Br[20] + Br[58] + Br[59],
    sb = Br[440] + Br[616],
    rb = Br[617] + Br[445],
    hb = Br[169] + Br[618],
    ab = Br[169] + Br[154],
    ob = Br[30] + Br[125] + Br[619] + Br[150] + Br[151],
    fb = Br[440] + Br[269] + Br[19] + Br[20],
    _b = Br[620],
    cb = Br[621],
    ub = Br[22] + Br[622] + Br[105],
    db = Br[623],
    lb = Br[624],
    vb = Br[257] + Br[78] + Br[625],
    bb = Br[257],
    yb = Br[626],
    gb = Br[627],
    pb = Br[627] + Br[78] + Br[440],
    xb = Br[627] + Br[78] + Br[36],
    mb = Br[628],
    Eb = Br[628] + Br[78] + Br[440],
    wb = Br[628] + Br[78] + Br[36],
    Tb = Br[628] + Br[78] + Br[440] + Br[78] + Br[36],
    Ob = Br[628] + Br[78] + Br[36] + Br[78] + Br[440],
    Mb = Br[629] + Br[78] + Br[222],
    Ib = Br[629] + Br[78] + Br[223],
    kb = Br[629] + Br[78] + Br[86],
    Sb = Br[629] + Br[78] + Br[87],
    Cb = Br[630],
    jb = Br[631],
    Pb = Br[625],
    Ab = Br[632],
    Lb = Br[633],
    zb = Br[634],
    Db = Br[635],
    Nb = Br[636],
    Rb = Br[637],
    Bb = Br[638],
    $b = Br[639],
    Fb = Br[640],
    Gb = Br[641],
    Yb = Br[642],
    Ub = Br[643],
    Hb = Br[644],
    qb = Br[645],
    Wb = Br[646] + Br[78] + Br[647],
    Vb = Br[646] + Br[78] + Br[300],
    Xb = Br[646] + Br[78] + Br[84],
    Kb = Br[646] + Br[78] + Br[301],
    Zb = Br[646] + Br[78] + Br[332],
    Jb = Br[646] + Br[78] + Br[333],
    Qb = Br[646] + Br[78] + Br[334],
    ty = Br[646] + Br[78] + Br[335],
    iy = Br[646] + Br[78] + Br[336],
    ny = Br[646] + Br[78] + Br[286],
    ey = Br[189] + Br[76] + Br[648] + Br[76] + Br[347] + Br[76] + Br[649],
    sy = Br[650],
    ry = Br[189] + Br[76] + Br[648] + Br[76] + Br[347] + Br[76] + Br[651],
    hy = Br[652],
    ay = Br[189] + Br[76] + Br[653] + Br[76] + Br[347] + Br[76] + Br[654],
    oy = Br[189] + Br[76] + Br[653] + Br[76] + Br[347] + Br[76] + Br[655],
    fy = Br[656],
    _y = Br[657] + Br[76] + Br[658] + Br[76] + Br[659],
    cy = Br[657] + Br[76] + Br[235],
    uy = Br[657] + Br[76] + Br[347] + Br[76] + Br[658],
    dy = Br[660] + Br[76] + Br[217],
    ly = Br[129] + Br[76] + Br[661],
    vy = Br[216] + Br[76] + Br[477] + Br[76] + Br[375],
    by = Br[185] + Br[1] + Br[424],
    yy = Br[662] + Br[110] + Br[183],
    gy = Br[477] + Br[76] + Br[663] + Br[76] + Br[664],
    py = Br[56] + Br[42] + Br[124] + Br[104] + Br[114],
    xy = Br[303] + Br[17] + Br[218],
    my = Br[10] + Br[1] + Br[91],
    Ey = Br[199] + Br[202] + Br[21] + Br[169] + Br[21] + Br[82] + Br[228],
    wy = Br[665],
    Ty = Br[666],
    Oy = Br[667],
    My = Br[668],
    Iy = Br[669],
    ky = Br[670] + Br[65] + Br[354],
    Sy = Br[71] + Br[671],
    Cy = Br[670],
    jy = Br[672],
    Py = Br[433] + Br[24] + Br[673],
    Ay = Br[674],
    Ly = Br[71] + Br[675],
    zy = Br[465] + Br[21],
    Dy = Br[676] + Br[65] + Br[354],
    Ny = Br[71] + Br[677],
    Ry = Br[676] + Br[110] + Br[283],
    By = Br[71] + Br[678],
    $y = Br[670] + Br[110] + Br[283],
    Fy = Br[679],
    Gy = Br[626] + Br[1] + Br[680],
    Yy = Br[626] + Br[42] + Br[681],
    Uy = Br[626] + Br[14] + Br[119] + Br[121],
    Hy = Br[19] + Br[682] + Br[683],
    qy = Br[684] + Br[1] + Br[680],
    Wy = Br[58] + Br[685] + Br[683],
    Vy = Br[684] + Br[1] + Br[680] + Br[42] + Br[686] + Br[125] + Br[218],
    Xy = Br[214] + Br[199] + Br[202],
    Ky = Br[239] + Br[65] + Br[545],
    Zy = Br[227],
    Jy = Br[169],
    Qy = Br[317] + Br[199] + Br[202],
    tg = Br[0] + Br[199] + Br[202],
    ig = Br[23] + Br[24] + Br[687] + Br[199] + Br[688],
    ng = Br[689],
    eg = Br[690] + Br[76] + Br[347] + Br[76] + Br[691],
    sg = Br[690] + Br[76] + Br[347] + Br[76] + Br[237],
    rg = Br[488] + Br[76] + Br[487],
    hg = Br[692],
    ag = Br[185] + Br[104] + Br[693] + Br[262] + Br[263],
    og = Br[22] + Br[1] + Br[680] + Br[65] + Br[222],
    fg = Br[237] + Br[76] + Br[690] + Br[76] + Br[362],
    _g = Br[237] + Br[76] + Br[690] + Br[76] + Br[360],
    cg = Br[691] + Br[76] + Br[690],
    ug = Br[694] + Br[76] + Br[237] + Br[76] + Br[690],
    dg = Br[694] + Br[76] + Br[237] + Br[76] + Br[690] + Br[76] + Br[362],
    lg = Br[595],
    vg = Br[476],
    bg = Br[592],
    yg = Br[695] + Br[76] + Br[189] + Br[76] + Br[696],
    gg = Br[695] + Br[76] + Br[697] + Br[76] + Br[696],
    pg = Br[695] + Br[76] + Br[698] + Br[76] + Br[696],
    xg = Br[695] + Br[76] + Br[699],
    mg = Br[30] + Br[17] + Br[700],
    Eg = Br[39] + Br[207] + Br[65] + Br[701],
    wg = Br[428] + Br[1] + Br[680],
    Tg = Br[428] + Br[65] + Br[702] + Br[42] + Br[681],
    Og = Br[626] + Br[14] + Br[119] + Br[116],
    Mg = Br[657] + Br[76] + Br[347] + Br[76] + Br[703],
    Ig = Br[428] + Br[42] + Br[704],
    kg = Br[676],
    Sg = Br[204] + Br[1] + Br[705],
    Cg = Br[204] + Br[706] + Br[707],
    jg = Br[708] + Br[65] + Br[354],
    Pg = Br[708],
    Ag = Br[670] + Br[1] + Br[680],
    Lg = Br[670] + Br[262] + Br[263],
    zg = Br[709] + Br[39] + Br[207],
    Dg = Br[232] + Br[76] + Br[233] + Br[76] + Br[710],
    Ng = Br[711],
    Rg = Br[712],
    Bg = Br[241] + Br[78] + Br[713],
    $g = Br[714] + Br[78] + Br[713],
    Fg = Br[715],
    Gg = Br[147],
    Yg = Br[716],
    Ug = Br[717],
    Hg = Br[67] + Br[68] + Br[299] + Br[69] + Br[299] + Br[69] + Br[299] + Br[69] + Br[299] + Br[70],
    qg = Br[656] + Br[19] + Br[718],
    Wg = Br[185] + Br[19] + Br[719] + Br[262] + Br[263],
    Vg = Br[71] + Br[300] + Br[1] + Br[334] + Br[42] + Br[569] + Br[33],
    Xg = Br[71] + Br[720],
    Kg = Br[71] + Br[721] + Br[58] + Br[336] + Br[42],
    Zg = Br[71] + Br[722] + Br[42] + Br[723],
    Jg = Br[71] + Br[722] + Br[24] + Br[724],
    Qg = Br[71] + Br[725] + Br[1] + Br[726],
    tp = Br[71] + Br[727],
    ip = Br[71] + Br[300] + Br[33] + Br[334] + Br[1] + Br[569] + Br[51],
    np = Br[71] + Br[728] + Br[42] + Br[299],
    ep = Br[71] + Br[729] + Br[730],
    sp = Br[71] + Br[300] + Br[51] + Br[334] + Br[731] + Br[84],
    rp = Br[71] + Br[722] + Br[24] + Br[732],
    hp = Br[71] + Br[733],
    ap = Br[734] + Br[1] + Br[735] + Br[110] + Br[183],
    op = Br[71] + Br[84] + Br[579] + Br[336] + Br[736],
    fp = Br[71] + Br[737],
    _p = Br[662],
    cp = Br[71] + Br[738] + Br[33] + Br[726],
    up = Br[71] + Br[739],
    dp = Br[71] + Br[300] + Br[51] + Br[740] + Br[24] + Br[332],
    lp = Br[71] + Br[741] + Br[742] + Br[84],
    vp = Br[71] + Br[743] + Br[744],
    bp = Br[71] + Br[300] + Br[58] + Br[334] + Br[745] + Br[299],
    yp = Br[71] + Br[746],
    gp = Br[71] + Br[15] + Br[335] + Br[15] + Br[336] + Br[15] + Br[336],
    pp = Br[71] + Br[334] + Br[24] + Br[747],
    xp = Br[71] + Br[332] + Br[51] + Br[332] + Br[1] + Br[332] + Br[42],
    mp = Br[71] + Br[748],
    Ep = Br[71] + Br[749],
    wp = Br[71] + Br[334] + Br[51] + Br[334] + Br[58] + Br[334] + Br[51],
    Tp = Br[71] + Br[332] + Br[1] + Br[750],
    Op = Br[71] + Br[751],
    Mp = Br[71] + Br[335] + Br[33] + Br[335] + Br[33] + Br[335] + Br[33],
    Ip = Br[71] + Br[752],
    kp = Br[71] + Br[753],
    Sp = Br[71] + Br[754],
    Cp = Br[71] + Br[569] + Br[58] + Br[569] + Br[33] + Br[569] + Br[33],
    jp = Br[71] + Br[24] + Br[335] + Br[24] + Br[333] + Br[24] + Br[332],
    Pp = Br[71] + Br[24] + Br[569] + Br[24] + Br[334] + Br[24] + Br[333],
    Ap = Br[71] + Br[24] + Br[335] + Br[24] + Br[332] + Br[24] + Br[301],
    Lp = Br[71] + Br[755],
    zp = Br[71] + Br[58] + Br[569] + Br[756],
    Dp = Br[71] + Br[569] + Br[757] + Br[299] + Br[476] + Br[299],
    Np = Br[758] + Br[1] + Br[735] + Br[110] + Br[183],
    Rp = Br[71] + Br[483] + Br[569] + Br[759],
    Bp = Br[71] + Br[301] + Br[579] + Br[301] + Br[476] + Br[760],
    $p = Br[71] + Br[42] + Br[84] + Br[761],
    Fp = Br[71] + Br[84] + Br[58] + Br[336] + Br[762],
    Gp = Br[71] + Br[763],
    Yp = Br[71] + Br[486] + Br[333] + Br[486] + Br[333] + Br[486] + Br[334],
    Up = Br[397] + Br[94],
    Hp = Br[764],
    qp = Br[765],
    Wp = Br[766],
    Vp = Br[62],
    Xp = Br[62] + Br[95] + Br[767],
    Kp = Br[62] + Br[42] + Br[768],
    Zp = Br[199] + Br[305] + Br[21] + Br[769] + Br[21] + Br[770] + Br[78],
    Jp = Br[771],
    Qp = Br[772],
    tx = Br[773],
    ix = Br[17] + Br[774] + Br[21] + Br[476] + Br[21] + Br[772] + Br[21] + Br[775] + Br[78],
    nx = Br[776],
    ex = Br[777],
    sx = Br[276] + Br[65] + Br[255],
    rx = Br[778] + Br[1] + Br[680],
    hx = Br[779] + Br[24] + Br[780] + Br[104] + Br[181],
    ax = Br[62] + Br[42] + Br[781],
    ox = Br[276] + Br[51] + Br[782],
    fx = Br[783],
    _x = Br[784],
    cx = Br[785] + Br[125] + Br[786],
    ux = Br[456] + Br[199] + Br[787],
    dx = Br[788],
    lx = Br[789],
    vx = Br[790] + Br[440] + Br[791],
    bx = Br[790] + Br[33] + Br[122],
    yx = Br[792],
    gx = Br[793],
    px = Br[794],
    xx = Br[795],
    mx = Br[794] + Br[33] + Br[122],
    Ex = Br[796],
    wx = Br[797],
    Tx = Br[798],
    Ox = Br[283] + Br[110] + Br[282],
    Mx = Br[799],
    Ix = Br[800] + Br[51] + Br[782],
    kx = Br[800],
    Sx = Br[801] + Br[125] + Br[550] + Br[1] + Br[218] + Br[65] + Br[255],
    Cx = Br[802],
    jx = Br[803],
    Px = Br[283],
    Ax = Br[804],
    Lx = Br[95] + Br[805] + Br[21] + Br[806] + Br[492] + Br[299] + Br[807],
    zx = Br[531],
    Dx = Br[776] + Br[150] + Br[151],
    Nx = Br[808] + Br[1] + Br[218],
    Rx = Br[191] + Br[36] + Br[809] + Br[228],
    Bx = Br[810],
    $x = Br[191] + Br[39] + Br[811] + Br[21] + Br[33] + Br[812] + Br[228],
    Fx = Br[813] + Br[33] + Br[812],
    Gx = Br[814],
    Yx = Br[815],
    Ux = Br[15] + Br[816] + Br[486] + Br[332] + Br[579] + Br[817] + Br[818] + Br[335] + Br[476] + Br[819] + Br[579] + Br[820] + Br[483] + Br[301] + Br[821] + Br[569] + Br[822] + Br[823] + Br[824] + Br[825] + Br[826] + Br[299] + Br[486] + Br[333] + Br[15] + Br[827] + Br[476] + Br[828] + Br[829] + Br[830] + Br[486] + Br[335] + Br[831] + Br[301] + Br[476] + Br[832] + Br[833] + Br[834] + Br[483] + Br[569] + Br[486] + Br[835] + Br[476] + Br[84] + Br[836] + Br[837] + Br[838] + Br[839] + Br[840] + Br[84] + Br[841] + Br[842] + Br[69] + Br[843] + Br[300] + Br[476] + Br[844] + Br[187] + Br[845] + Br[476] + Br[846] + Br[15] + Br[847] + Br[848] + Br[849] + Br[850] + Br[851] + Br[852] + Br[332] + Br[853] + Br[854] + Br[855] + Br[856] + Br[476] + Br[335] + Br[857] + Br[301] + Br[483] + Br[299] + Br[858] + Br[859] + Br[860] + Br[861] + Br[579] + Br[834] + Br[862] + Br[863] + Br[187] + Br[864] + Br[579] + Br[865] + Br[848] + Br[84] + Br[483] + Br[866] + Br[579] + Br[569] + Br[867] + Br[868] + Br[869] + Br[870] + Br[857] + Br[569] + Br[476] + Br[871] + Br[872] + Br[724] + Br[873] + Br[299] + Br[874] + Br[875] + Br[476] + Br[876] + Br[579] + Br[332],
    Hx = Br[191] + Br[19] + Br[877] + Br[21] + Br[50] + Br[492],
    qx = Br[410] + Br[878] + Br[879] + Br[410] + Br[301] + Br[24] + Br[410] + Br[878] + Br[880] + Br[78] + Br[295] + Br[78] + Br[789] + Br[410] + Br[84] + Br[1] + Br[881] + Br[78] + Br[295] + Br[78] + Br[789],
    Wx = Br[882],
    Vx = Br[883],
    Xx = Br[884],
    Kx = Br[56] + Br[110],
    Zx = Br[885],
    Jx = Br[335] + Br[78],
    Qx = Br[886],
    tm = Br[277],
    im = Br[887],
    nm = Br[1] + Br[424],
    em = Br[104] + Br[888],
    sm = Br[1] + Br[889],
    rm = Br[890],
    hm = Br[891],
    am = Br[185],
    om = Br[892],
    fm = Br[893],
    _m = Br[894],
    cm = Br[895],
    um = Br[896],
    dm = Br[897],
    lm = Br[463],
    vm = Br[898],
    bm = Br[899],
    ym = Br[397] + Br[900],
    gm = Br[21] + Br[279] + Br[21] + Br[901] + Br[333],
    pm = Br[902],
    xm = Br[903],
    mm = Br[904],
    Em = Br[905] + Br[78] + Br[906] + Br[78] + Br[300],
    wm = Br[65] + Br[907],
    Tm = Br[908],
    Om = Br[58] + Br[186],
    Mm = Br[18],
    Im = Br[909],
    km = Br[910] + Br[205] + Br[911],
    Sm = Br[33] + Br[812],
    Cm = Br[912],
    jm = Br[283] + Br[84] + Br[33],
    Pm = Br[482] + Br[110] + Br[283],
    Am = Br[56] + Br[65] + Br[354],
    Lm = Br[254] + Br[36] + Br[913],
    zm = Br[351],
    Dm = Br[254],
    Nm = Br[55] + Br[60],
    Rm = Br[397] + Br[78] + Br[58] + Br[186],
    Bm = Br[351] + Br[1] + Br[914],
    $m = Br[592] + Br[199] + Br[213],
    Fm = Br[915],
    Gm = Br[245] + Br[65] + Br[916],
    Ym = Br[917],
    Um = Br[397] + Br[78] + Br[58] + Br[312],
    Hm = Br[23] + Br[58] + Br[312] + Br[42] + Br[918],
    qm = Br[919] + Br[78] + Br[920],
    Wm = Br[921] + Br[39] + Br[207] + Br[1] + Br[514],
    Vm = Br[22] + Br[39] + Br[207] + Br[65] + Br[701],
    Xm = Br[50],
    Km = Br[389] + Br[58] + Br[390],
    Zm = Br[397] + Br[94] + Br[471],
    Jm = Br[55] + Br[922],
    Qm = Br[922],
    tE = Br[252],
    iE = Br[50] + Br[51] + Br[307],
    nE = Br[397] + Br[78] + Br[17] + Br[218],
    eE = Br[923] + Br[78] + Br[22],
    sE = Br[923] + Br[78] + Br[10],
    rE = Br[924],
    hE = Br[260] + Br[39] + Br[90],
    aE = Br[55] + Br[919],
    oE = Br[925] + Br[76] + Br[926],
    fE = Br[330] + Br[76] + Br[696],
    _E = Br[397] + Br[78] + Br[65] + Br[376] + Br[17] + Br[218],
    cE = Br[919],
    uE = Br[10] + Br[39] + Br[207] + Br[65] + Br[701],
    dE = Br[927],
    lE = Br[928],
    vE = Br[397] + Br[78] + Br[42] + Br[929],
    bE = Br[42] + Br[929],
    yE = Br[446] + Br[65] + Br[394] + Br[17] + Br[395],
    gE = Br[930] + Br[76] + Br[347] + Br[76] + Br[931],
    pE = Br[930] + Br[76] + Br[932],
    xE = Br[930] + Br[76] + Br[933] + Br[76] + Br[375],
    mE = Br[254] + Br[51] + Br[782],
    EE = Br[55] + Br[934] + Br[110] + Br[282],
    wE = Br[930] + Br[76] + Br[347],
    TE = Br[55] + Br[221],
    OE = Br[55] + Br[192] + Br[65] + Br[255],
    ME = Br[935],
    IE = Br[397] + Br[78] + Br[262] + Br[936],
    kE = Br[192] + Br[65] + Br[255],
    SE = Br[934] + Br[110] + Br[282],
    CE = Br[934] + Br[199] + Br[202],
    jE = Br[262] + Br[936],
    PE = Br[397] + Br[78] + Br[110] + Br[283],
    AE = Br[254] + Br[33] + Br[122],
    LE = Br[71] + Br[937],
    zE = Br[428] + Br[42] + Br[938] + Br[1] + Br[680],
    DE = Br[676] + Br[104] + Br[114],
    NE = Br[939] + Br[65] + Br[940],
    RE = Br[941],
    BE = Br[55] + Br[942],
    $E = Br[419] + Br[24] + Br[943],
    FE = Br[249] + Br[116],
    GE = Br[249] + Br[121],
    YE = Br[657] + Br[76] + Br[347] + Br[76] + Br[703] + Br[76] + Br[931],
    UE = Br[257] + Br[1] + Br[680],
    HE = Br[257] + Br[19] + Br[270] + Br[33] + Br[269] + Br[14] + Br[119],
    qE = Br[55] + Br[261] + Br[1] + Br[680],
    WE = Br[55] + Br[261] + Br[262] + Br[263],
    VE = Br[427],
    XE = Br[225] + Br[65] + Br[255],
    KE = Br[64] + Br[42] + Br[195] + Br[1] + Br[505],
    ZE = Br[55] + Br[254] + Br[19] + Br[229],
    JE = Br[55] + Br[254] + Br[36] + Br[913],
    QE = Br[55] + Br[944],
    tw = Br[55] + Br[258] + Br[58] + Br[268],
    iw = Br[945],
    nw = Br[946] + Br[36] + Br[947],
    ew = Br[55] + Br[254] + Br[33] + Br[122],
    sw = Br[249],
    rw = Br[64] + Br[33] + Br[122] + Br[1] + Br[505],
    hw = Br[36] + Br[913],
    aw = Br[19] + Br[229],
    ow = Br[24] + Br[248] + Br[39] + Br[173],
    fw = Br[42] + Br[938] + Br[262] + Br[263],
    _w = Br[657] + Br[76] + Br[703],
    cw = Br[657] + Br[76] + Br[347],
    uw = Br[104] + Br[253],
    dw = Br[33] + Br[122],
    lw = Br[346] + Br[76] + Br[347] + Br[76] + Br[948],
    vw = Br[428] + Br[78] + Br[241],
    bw = Br[428] + Br[78] + Br[257],
    yw = Br[657] + Br[76] + Br[658] + Br[76] + Br[949] + Br[76] + Br[116],
    gw = Br[428] + Br[78] + Br[209],
    pw = Br[950] + Br[76] + Br[235],
    xw = Br[684] + Br[78] + Br[241],
    mw = Br[951],
    Ew = Br[942],
    ww = Br[658] + Br[76] + Br[659],
    Tw = Br[626] + Br[78] + Br[952],
    Ow = Br[626] + Br[78] + Br[241],
    Mw = Br[658] + Br[76] + Br[949] + Br[76] + Br[116],
    Iw = Br[626] + Br[78] + Br[249] + Br[78] + Br[807],
    kw = Br[626] + Br[78] + Br[249] + Br[78] + Br[124],
    Sw = Br[318] + Br[76] + Br[953],
    Cw = Br[954] + Br[78] + Br[676],
    jw = Br[318] + Br[76] + Br[953] + Br[76] + Br[349],
    Pw = Br[954] + Br[78] + Br[676] + Br[78] + Br[102],
    Aw = Br[954] + Br[78] + Br[204] + Br[78] + Br[955],
    Lw = Br[318] + Br[76] + Br[189] + Br[76] + Br[956] + Br[76] + Br[949],
    zw = Br[318] + Br[76] + Br[957] + Br[76] + Br[235],
    Dw = Br[954] + Br[78] + Br[670] + Br[78] + Br[241],
    Nw = Br[318] + Br[76] + Br[957] + Br[76] + Br[690],
    Rw = Br[954] + Br[78] + Br[670] + Br[78] + Br[958],
    Bw = Br[318] + Br[76] + Br[959],
    $w = Br[954] + Br[78] + Br[708],
    Fw = Br[318] + Br[76] + Br[959] + Br[76] + Br[349],
    Gw = Br[954] + Br[78] + Br[708] + Br[78] + Br[102],
    Yw = Br[204] + Br[78] + Br[960],
    Uw = Br[189] + Br[76] + Br[653],
    Hw = Br[204] + Br[78] + Br[288],
    qw = Br[961] + Br[76] + Br[366] + Br[76] + Br[962],
    Ww = Br[247] + Br[78] + Br[963] + Br[78] + Br[919],
    Vw = Br[964] + Br[76] + Br[235],
    Xw = Br[261] + Br[78] + Br[241],
    Kw = Br[261] + Br[78] + Br[958],
    Zw = Br[703],
    Jw = Br[257] + Br[78] + Br[171],
    Qw = Br[703] + Br[76] + Br[235],
    tT = Br[257] + Br[78] + Br[241],
    iT = Br[703] + Br[76] + Br[189] + Br[76] + Br[956],
    nT = Br[257] + Br[78] + Br[204] + Br[78] + Br[955],
    eT = Br[703] + Br[76] + Br[189] + Br[76] + Br[956] + Br[76] + Br[949],
    sT = Br[703] + Br[76] + Br[370],
    rT = Br[257] + Br[78] + Br[489],
    hT = Br[932],
    aT = Br[216] + Br[76] + Br[964] + Br[76] + Br[235],
    oT = Br[216] + Br[76] + Br[703],
    fT = Br[227] + Br[78] + Br[257] + Br[78] + Br[171],
    _T = Br[216] + Br[76] + Br[703] + Br[76] + Br[235],
    cT = Br[227] + Br[78] + Br[257] + Br[78] + Br[102],
    uT = Br[216] + Br[76] + Br[703] + Br[76] + Br[189] + Br[76] + Br[956],
    dT = Br[216] + Br[76] + Br[703] + Br[76] + Br[189] + Br[76] + Br[956] + Br[76] + Br[949],
    lT = Br[216] + Br[76] + Br[370],
    vT = Br[216] + Br[76] + Br[703] + Br[76] + Br[370],
    bT = Br[227] + Br[78] + Br[489],
    yT = Br[227] + Br[78] + Br[221],
    gT = Br[216] + Br[76] + Br[571] + Br[76] + Br[508],
    pT = Br[227] + Br[78] + Br[592] + Br[78] + Br[13],
    xT = Br[216] + Br[76] + Br[965],
    mT = Br[227] + Br[78] + Br[966],
    ET = Br[216] + Br[76] + Br[951],
    wT = Br[227] + Br[78] + Br[942],
    TT = Br[967] + Br[76] + Br[968],
    OT = Br[798] + Br[78] + Br[210],
    MT = Br[967] + Br[76] + Br[969],
    IT = Br[798] + Br[78] + Br[267],
    kT = Br[967] + Br[76] + Br[970],
    ST = Br[798] + Br[78] + Br[944],
    CT = Br[967] + Br[76] + Br[971] + Br[76] + Br[969],
    jT = Br[798] + Br[78] + Br[241],
    PT = Br[798] + Br[78] + Br[188] + Br[78] + Br[924],
    AT = Br[798] + Br[78] + Br[188] + Br[78] + Br[972],
    LT = Br[967] + Br[76] + Br[466] + Br[76] + Br[349],
    zT = Br[798] + Br[78] + Br[188] + Br[78] + Br[102],
    DT = Br[967] + Br[76] + Br[932],
    NT = Br[798] + Br[78] + Br[221],
    RT = Br[967] + Br[76] + Br[660] + Br[76] + Br[217],
    BT = Br[798] + Br[78] + Br[266] + Br[78] + Br[171],
    $T = Br[798] + Br[78] + Br[266],
    FT = Br[967] + Br[76] + Br[370],
    GT = Br[798] + Br[78] + Br[489],
    YT = Br[967] + Br[76] + Br[949] + Br[76] + Br[116],
    UT = Br[798] + Br[78] + Br[249] + Br[78] + Br[807],
    HT = Br[967] + Br[76] + Br[949] + Br[76] + Br[121],
    qT = Br[798] + Br[78] + Br[249] + Br[78] + Br[124],
    WT = Br[798] + Br[78] + Br[924],
    VT = Br[967] + Br[76] + Br[973] + Br[76] + Br[969],
    XT = Br[798] + Br[78] + Br[974] + Br[78] + Br[267],
    KT = Br[798] + Br[78] + Br[257],
    ZT = Br[798] + Br[78] + Br[257] + Br[78] + Br[102],
    JT = Br[967] + Br[76] + Br[964] + Br[76] + Br[235],
    QT = Br[967] + Br[76] + Br[964] + Br[76] + Br[690],
    tO = Br[967] + Br[76] + Br[975],
    iO = Br[798] + Br[78] + Br[250],
    nO = Br[967] + Br[76] + Br[658] + Br[76] + Br[659],
    eO = Br[798] + Br[78] + Br[626] + Br[78] + Br[952],
    sO = Br[798] + Br[78] + Br[626] + Br[78] + Br[241],
    rO = Br[967] + Br[76] + Br[658] + Br[76] + Br[949] + Br[76] + Br[116],
    hO = Br[967] + Br[76] + Br[658] + Br[76] + Br[949] + Br[76] + Br[121],
    aO = Br[798] + Br[78] + Br[592] + Br[78] + Br[13],
    oO = Br[967] + Br[76] + Br[976] + Br[76] + Br[364],
    fO = Br[798] + Br[78] + Br[64] + Br[78] + Br[222],
    _O = Br[934] + Br[78] + Br[676],
    cO = Br[930] + Br[76] + Br[953] + Br[76] + Br[349],
    uO = Br[934] + Br[78] + Br[676] + Br[78] + Br[241],
    dO = Br[930] + Br[76] + Br[953] + Br[76] + Br[189] + Br[76] + Br[956],
    lO = Br[930] + Br[76] + Br[953] + Br[76] + Br[189] + Br[76] + Br[956] + Br[76] + Br[949],
    vO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[968],
    bO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[969],
    yO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[235],
    gO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[466] + Br[76] + Br[349],
    pO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[932],
    xO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[660] + Br[76] + Br[217],
    mO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[660],
    EO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[370],
    wO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[949] + Br[76] + Br[116],
    TO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[949] + Br[76] + Br[121],
    OO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[703],
    MO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[703] + Br[76] + Br[349],
    IO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[964] + Br[76] + Br[235],
    kO = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[975],
    SO = Br[355] + Br[76] + Br[217],
    CO = Br[340] + Br[78] + Br[171],
    jO = Br[355] + Br[76] + Br[235],
    PO = Br[340] + Br[78] + Br[241],
    AO = Br[340] + Br[78] + Br[708],
    LO = Br[355] + Br[76] + Br[959] + Br[76] + Br[349],
    zO = Br[340] + Br[78] + Br[708] + Br[78] + Br[102],
    DO = Br[355] + Br[76] + Br[189] + Br[76] + Br[956],
    NO = Br[340] + Br[78] + Br[204] + Br[78] + Br[955],
    RO = Br[355] + Br[76] + Br[189] + Br[76] + Br[956] + Br[76] + Br[949],
    BO = Br[355] + Br[76] + Br[978] + Br[76] + Br[949],
    $O = Br[340] + Br[78] + Br[291] + Br[78] + Br[249],
    FO = Br[355] + Br[76] + Br[696] + Br[76] + Br[949],
    GO = Br[340] + Br[78] + Br[50] + Br[78] + Br[249],
    YO = Br[355] + Br[76] + Br[977] + Br[76] + Br[979],
    UO = Br[340] + Br[78] + Br[389] + Br[78] + Br[980],
    HO = Br[355] + Br[76] + Br[981] + Br[76] + Br[982],
    qO = Br[340] + Br[78] + Br[983] + Br[78] + Br[984],
    WO = Br[340] + Br[78] + Br[629],
    VO = Br[340] + Br[78] + Br[985] + Br[78] + Br[986],
    XO = Br[340] + Br[78] + Br[26] + Br[78] + Br[987],
    KO = Br[355] + Br[76] + Br[357] + Br[76] + Br[478],
    ZO = Br[340] + Br[78] + Br[26] + Br[78] + Br[342],
    JO = Br[340] + Br[78] + Br[988],
    QO = Br[340] + Br[78] + Br[988] + Br[78] + Br[489],
    tM = Br[355] + Br[76] + Br[978] + Br[76] + Br[989] + Br[76] + Br[355],
    iM = Br[340] + Br[78] + Br[291] + Br[78] + Br[990] + Br[78] + Br[340],
    nM = Br[355] + Br[76] + Br[696] + Br[76] + Br[989] + Br[76] + Br[355],
    eM = Br[340] + Br[78] + Br[50] + Br[78] + Br[990] + Br[78] + Br[340],
    sM = Br[646] + Br[78] + Br[291],
    rM = Br[330] + Br[76] + Br[978] + Br[76] + Br[375],
    hM = Br[646] + Br[78] + Br[291] + Br[78] + Br[924],
    aM = Br[330] + Br[76] + Br[978] + Br[76] + Br[949],
    oM = Br[646] + Br[78] + Br[291] + Br[78] + Br[249],
    fM = Br[330] + Br[76] + Br[978] + Br[76] + Br[953],
    _M = Br[646] + Br[78] + Br[291] + Br[78] + Br[676],
    cM = Br[330] + Br[76] + Br[978] + Br[76] + Br[953] + Br[76] + Br[349],
    uM = Br[330] + Br[76] + Br[978] + Br[76] + Br[959],
    dM = Br[646] + Br[78] + Br[291] + Br[78] + Br[708],
    lM = Br[330] + Br[76] + Br[978] + Br[76] + Br[959] + Br[76] + Br[349],
    vM = Br[646] + Br[78] + Br[291] + Br[78] + Br[204] + Br[78] + Br[955],
    bM = Br[330] + Br[76] + Br[978] + Br[76] + Br[957] + Br[76] + Br[235],
    yM = Br[330] + Br[76] + Br[978] + Br[76] + Br[957] + Br[76] + Br[690],
    gM = Br[330] + Br[76] + Br[978] + Br[76] + Br[189] + Br[76] + Br[648],
    pM = Br[646] + Br[78] + Br[291] + Br[78] + Br[204] + Br[78] + Br[960],
    xM = Br[330] + Br[76] + Br[978] + Br[76] + Br[189] + Br[76] + Br[653],
    mM = Br[646] + Br[78] + Br[291] + Br[78] + Br[204] + Br[78] + Br[288],
    EM = Br[646] + Br[78] + Br[50],
    wM = Br[330] + Br[76] + Br[696] + Br[76] + Br[375],
    TM = Br[646] + Br[78] + Br[50] + Br[78] + Br[924],
    OM = Br[330] + Br[76] + Br[696] + Br[76] + Br[949],
    MM = Br[646] + Br[78] + Br[50] + Br[78] + Br[249],
    IM = Br[330] + Br[76] + Br[696] + Br[76] + Br[953],
    kM = Br[646] + Br[78] + Br[50] + Br[78] + Br[676],
    SM = Br[330] + Br[76] + Br[696] + Br[76] + Br[953] + Br[76] + Br[349],
    CM = Br[330] + Br[76] + Br[696] + Br[76] + Br[959],
    jM = Br[646] + Br[78] + Br[50] + Br[78] + Br[708],
    PM = Br[330] + Br[76] + Br[696] + Br[76] + Br[959] + Br[76] + Br[349],
    AM = Br[330] + Br[76] + Br[696] + Br[76] + Br[189] + Br[76] + Br[956],
    LM = Br[646] + Br[78] + Br[50] + Br[78] + Br[204] + Br[78] + Br[955],
    zM = Br[330] + Br[76] + Br[696] + Br[76] + Br[957] + Br[76] + Br[235],
    DM = Br[646] + Br[78] + Br[50] + Br[78] + Br[670] + Br[78] + Br[241],
    NM = Br[330] + Br[76] + Br[696] + Br[76] + Br[957] + Br[76] + Br[690],
    RM = Br[330] + Br[76] + Br[696] + Br[76] + Br[189] + Br[76] + Br[648],
    BM = Br[646] + Br[78] + Br[50] + Br[78] + Br[204] + Br[78] + Br[960],
    $M = Br[646] + Br[78] + Br[50] + Br[78] + Br[204] + Br[78] + Br[288],
    FM = Br[428] + Br[110] + Br[282],
    GM = Br[657] + Br[76] + Br[658] + Br[76] + Br[949] + Br[76] + Br[121],
    YM = Br[944],
    UM = Br[241],
    HM = Br[967] + Br[76] + Br[703],
    qM = Br[967] + Br[76] + Br[703] + Br[76] + Br[349],
    WM = Br[261] + Br[1] + Br[680],
    VM = Br[258] + Br[14] + Br[200] + Br[110] + Br[991],
    XM = Br[658] + Br[76] + Br[235],
    KM = Br[658] + Br[76] + Br[949] + Br[76] + Br[121],
    ZM = Br[974] + Br[39] + Br[90],
    JM = Br[266] + Br[205] + Br[206],
    QM = Br[967] + Br[76] + Br[660],
    tI = Br[257] + Br[104] + Br[265],
    iI = Br[250],
    nI = Br[967] + Br[76] + Br[375],
    eI = Br[967] + Br[76] + Br[571] + Br[76] + Br[508],
    sI = Br[76] + Br[992],
    rI = Br[964] + Br[76] + Br[690],
    hI = Br[257] + Br[19] + Br[270] + Br[33] + Br[269],
    aI = Br[76] + Br[183] + Br[300] + Br[485],
    oI = Br[966] + Br[110] + Br[282],
    fI = Br[318] + Br[76] + Br[189] + Br[76] + Br[956],
    _I = Br[993] + Br[42] + Br[994],
    cI = Br[76] + Br[333] + Br[561],
    uI = Br[930] + Br[76] + Br[964] + Br[76] + Br[235],
    dI = Br[954],
    lI = Br[930] + Br[76] + Br[953],
    vI = Br[76] + Br[995],
    bI = Br[330] + Br[76] + Br[978],
    yI = Br[291] + Br[24] + Br[996],
    gI = Br[50] + Br[24] + Br[996],
    pI = Br[355] + Br[76] + Br[959],
    xI = Br[291] + Br[24] + Br[996] + Br[65] + Br[255],
    mI = Br[291] + Br[24] + Br[996] + Br[14] + Br[119],
    EI = Br[291] + Br[24] + Br[996] + Br[65] + Br[201],
    wI = Br[291] + Br[24] + Br[996] + Br[65] + Br[201] + Br[65] + Br[354],
    TI = Br[291] + Br[24] + Br[996] + Br[14] + Br[997],
    OI = Br[291] + Br[24] + Br[996] + Br[51] + Br[998] + Br[1] + Br[680],
    MI = Br[330] + Br[76] + Br[978] + Br[76] + Br[189] + Br[76] + Br[956],
    II = Br[291] + Br[24] + Br[996] + Br[19] + Br[270] + Br[33] + Br[269],
    kI = Br[330] + Br[76] + Br[978] + Br[76] + Br[189] + Br[76] + Br[956] + Br[76] + Br[949],
    SI = Br[291] + Br[24] + Br[996] + Br[19] + Br[270] + Br[706] + Br[707],
    CI = Br[291] + Br[24] + Br[996] + Br[19] + Br[270] + Br[1] + Br[705],
    jI = Br[50] + Br[24] + Br[996] + Br[65] + Br[255],
    PI = Br[50] + Br[24] + Br[996] + Br[14] + Br[119],
    AI = Br[50] + Br[24] + Br[996] + Br[65] + Br[201],
    LI = Br[50] + Br[24] + Br[996] + Br[65] + Br[201] + Br[65] + Br[354],
    zI = Br[50] + Br[24] + Br[996] + Br[14] + Br[997],
    DI = Br[50] + Br[24] + Br[996] + Br[14] + Br[997] + Br[65] + Br[354],
    NI = Br[50] + Br[24] + Br[996] + Br[51] + Br[998] + Br[1] + Br[680],
    RI = Br[50] + Br[24] + Br[996] + Br[51] + Br[998] + Br[262] + Br[263],
    BI = Br[50] + Br[24] + Br[996] + Br[19] + Br[270] + Br[33] + Br[269],
    $I = Br[330] + Br[76] + Br[696] + Br[76] + Br[189] + Br[76] + Br[956] + Br[76] + Br[949],
    FI = Br[330] + Br[76] + Br[696] + Br[76] + Br[189] + Br[76] + Br[653],
    GI = Br[50] + Br[24] + Br[996] + Br[19] + Br[270] + Br[706] + Br[707],
    YI = Br[50] + Br[24] + Br[996] + Br[19] + Br[270] + Br[1] + Br[705],
    UI = Br[389] + Br[19] + Br[999],
    HI = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[971] + Br[76] + Br[969],
    qI = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[466] + Br[76] + Br[375],
    WI = Br[355] + Br[76] + Br[977] + Br[76] + Br[967] + Br[76] + Br[964] + Br[76] + Br[690],
    VI = Br[254] + Br[65] + Br[376],
    XI = Br[189] + Br[76] + Br[648],
    KI = Br[216] + Br[76] + Br[932],
    ZI = Br[254] + Br[1] + Br[2] + Br[199] + Br[213],
    JI = Br[254] + Br[65] + Br[255],
    QI = Br[64] + Br[42] + Br[1e3] + Br[39] + Br[75] + Br[1] + Br[514],
    tk = Br[254] + Br[104] + Br[1001],
    ik = Br[1002] + Br[19] + Br[999],
    nk = Br[1002] + Br[42] + Br[1e3] + Br[39] + Br[77],
    ek = Br[344] + Br[39] + Br[77],
    sk = Br[22] + Br[42] + Br[1e3],
    rk = Br[22] + Br[1] + Br[91],
    hk = Br[481],
    ak = Br[55] + Br[428] + Br[42] + Br[704],
    ok = Br[55] + Br[626] + Br[14] + Br[119] + Br[116],
    fk = Br[55] + Br[428] + Br[65] + Br[702] + Br[14] + Br[119] + Br[116],
    _k = Br[55] + Br[428] + Br[65] + Br[702] + Br[14] + Br[119] + Br[121],
    ck = Br[55] + Br[428] + Br[65] + Br[702] + Br[42] + Br[681],
    uk = Br[55] + Br[254] + Br[42] + Br[195],
    dk = Br[380] + Br[1] + Br[505],
    lk = Br[55] + Br[684] + Br[1] + Br[680],
    vk = Br[55] + Br[684] + Br[1] + Br[680] + Br[42] + Br[686] + Br[125] + Br[218],
    bk = Br[55] + Br[626] + Br[1] + Br[680],
    yk = Br[55] + Br[626] + Br[42] + Br[681],
    gk = Br[55] + Br[626] + Br[14] + Br[119] + Br[121],
    pk = Br[380],
    xk = Br[379] + Br[76] + Br[1003] + Br[76] + Br[1004],
    mk = Br[55] + Br[924],
    Ek = Br[55] + Br[254] + Br[65] + Br[545],
    wk = Br[56] + Br[125] + Br[1005] + Br[42] + Br[195],
    Tk = Br[55] + Br[254] + Br[51] + Br[998] + Br[262] + Br[263],
    Ok = Br[55] + Br[670] + Br[262] + Br[263],
    Mk = Br[55] + Br[966] + Br[110] + Br[282],
    Ik = Br[55] + Br[204] + Br[205] + Br[206],
    kk = Br[55] + Br[670] + Br[1] + Br[680],
    Sk = Br[65] + Br[545],
    Ck = Br[51] + Br[998] + Br[262] + Br[263],
    jk = Br[967] + Br[76] + Br[235],
    Pk = Br[55] + Br[188] + Br[65] + Br[255],
    Ak = Br[55] + Br[188],
    Lk = Br[973] + Br[76] + Br[969],
    zk = Br[433] + Br[42] + Br[1006],
    Dk = Br[51] + Br[889],
    Nk = Br[55] + Br[254] + Br[51] + Br[889],
    Rk = Br[55] + Br[188] + Br[65] + Br[354],
    Bk = Br[466] + Br[76] + Br[349],
    $k = Br[919] + Br[42] + Br[195],
    Fk = Br[55] + Br[254] + Br[110] + Br[183] + Br[24] + Br[996],
    Gk = Br[55] + Br[254] + Br[51] + Br[1007] + Br[24] + Br[996],
    Yk = Br[225] + Br[51] + Br[1007] + Br[24] + Br[996],
    Uk = Br[55] + Br[291] + Br[24] + Br[996],
    Hk = Br[55] + Br[291] + Br[24] + Br[996] + Br[65] + Br[376],
    qk = Br[291] + Br[24] + Br[996] + Br[19] + Br[229],
    Wk = Br[55] + Br[291] + Br[24] + Br[996] + Br[65] + Br[255],
    Vk = Br[291] + Br[24] + Br[996] + Br[65] + Br[916],
    Xk = Br[262] + Br[263],
    Kk = Br[928] + Br[262] + Br[263],
    Zk = Br[291] + Br[24] + Br[996] + Br[51] + Br[998] + Br[262] + Br[263],
    Jk = Br[55] + Br[50] + Br[24] + Br[996],
    Qk = Br[55] + Br[50] + Br[24] + Br[996] + Br[65] + Br[376],
    tS = Br[50] + Br[24] + Br[996] + Br[19] + Br[229],
    iS = Br[55] + Br[50] + Br[24] + Br[996] + Br[65] + Br[255],
    nS = Br[50] + Br[24] + Br[996] + Br[65] + Br[916],
    eS = Br[24] + Br[996] + Br[65] + Br[201],
    sS = Br[24] + Br[996] + Br[65] + Br[201] + Br[65] + Br[354],
    rS = Br[24] + Br[996] + Br[65] + Br[916],
    hS = Br[24] + Br[996] + Br[19] + Br[270] + Br[33] + Br[269],
    aS = Br[24] + Br[996] + Br[19] + Br[270] + Br[33] + Br[269] + Br[14] + Br[119],
    oS = Br[24] + Br[996] + Br[51] + Br[998] + Br[1] + Br[680],
    fS = Br[24] + Br[996] + Br[51] + Br[998] + Br[262] + Br[263],
    _S = Br[24] + Br[996] + Br[19] + Br[270] + Br[1] + Br[705],
    cS = Br[24] + Br[996] + Br[19] + Br[270] + Br[706] + Br[707],
    uS = Br[24] + Br[996] + Br[14] + Br[997],
    dS = Br[24] + Br[996] + Br[14] + Br[997] + Br[65] + Br[354],
    lS = Br[55] + Br[708],
    vS = Br[51] + Br[1007] + Br[24] + Br[996],
    bS = Br[110] + Br[183] + Br[24] + Br[996],
    yS = Br[355] + Br[76] + Br[347] + Br[76] + Br[1008],
    gS = Br[23] + Br[120] + Br[119],
    pS = Br[23] + Br[42] + Br[918] + Br[19] + Br[999],
    xS = Br[185] + Br[42] + Br[918] + Br[19] + Br[999],
    mS = Br[1009],
    ES = Br[225] + Br[39] + Br[1010],
    wS = Br[214] + Br[104] + Br[1011] + Br[19] + Br[270],
    TS = Br[919] + Br[65] + Br[1012],
    OS = Br[279] + Br[58] + Br[280] + Br[104] + Br[1013],
    MS = Br[1014] + Br[24] + Br[290] + Br[1] + Br[1015],
    IS = Br[351] + Br[199] + Br[187],
    kS = Br[1016] + Br[199] + Br[213],
    SS = Br[397] + Br[94] + Br[262] + Br[398],
    CS = Br[78] + Br[397] + Br[94] + Br[262] + Br[398],
    jS = Br[433] + Br[94] + Br[974] + Br[492] + Br[223] + Br[1017] + Br[708] + Br[492] + Br[407] + Br[1018] + Br[177] + Br[94] + Br[1019] + Br[94] + Br[1020] + Br[94] + Br[241] + Br[99] + Br[67] + Br[68] + Br[299] + Br[69] + Br[299] + Br[69] + Br[299] + Br[69] + Br[299] + Br[1021] + Br[456] + Br[94] + Br[434] + Br[492] + Br[407],
    PS = Br[299] + Br[21] + Br[299],
    AS = Br[397] + Br[94] + Br[1] + Br[424],
    LS = Br[299],
    zS = Br[397] + Br[94] + Br[1] + Br[424] + Br[39] + Br[543],
    DS = Br[56] + Br[65] + Br[255],
    NS = Br[249] + Br[440] + Br[441],
    RS = Br[1022],
    BS = Br[71] + Br[1023],
    $S = Br[71] + Br[1024] + Br[1025] + Br[333],
    FS = Br[71] + Br[1026] + Br[58] + Br[299],
    GS = Br[950] + Br[76] + Br[235] + Br[76] + Br[232] + Br[76] + Br[233],
    YS = Br[411] + Br[76] + Br[1027],
    US = Br[1028] + Br[78] + Br[1029],
    HS = Br[1028] + Br[78] + Br[407],
    qS = Br[1028] + Br[78] + Br[138],
    WS = Br[411] + Br[76] + Br[347],
    VS = Br[23] + Br[58] + Br[186] + Br[42] + Br[124] + Br[199] + Br[187],
    XS = Br[10] + Br[42] + Br[124] + Br[199] + Br[187],
    KS = Br[76] + Br[482] + Br[333],
    ZS = Br[225] + Br[58] + Br[312] + Br[42] + Br[918],
    JS = Br[279] + Br[58] + Br[280] + Br[42] + Br[124] + Br[33] + Br[1030] + Br[51] + Br[1031],
    QS = Br[428] + Br[125] + Br[414],
    tC = Br[23] + Br[199] + Br[213] + Br[42] + Br[124] + Br[199] + Br[187],
    iC = Br[379] + Br[517],
    nC = Br[156] + Br[469] + Br[21] + Br[1032],
    eC = Br[56] + Br[199] + Br[213] + Br[24] + Br[1033],
    sC = Br[30] + Br[42] + Br[918] + Br[58] + Br[390],
    rC = Br[1034] + Br[58] + Br[1035],
    hC = Br[411] + Br[76] + Br[1036],
    aC = Br[1037] + Br[78] + Br[264],
    oC = Br[438],
    fC = Br[1038] + Br[36] + Br[1039],
    _C = Br[1040],
    cC = Br[1041],
    uC = Br[38] + Br[58] + Br[59],
    dC = Br[203] + Br[110] + Br[1042],
    lC = Br[23] + Br[33] + Br[1043] + Br[199] + Br[449],
    vC = Br[50] + Br[19] + Br[1044],
    bC = Br[1045] + Br[24] + Br[1046],
    yC = Br[17] + Br[218],
    gC = Br[110] + Br[283],
    pC = Br[185] + Br[110] + Br[283],
    xC = Br[65] + Br[376] + Br[17] + Br[218],
    mC = Br[185] + Br[262] + Br[936],
    EC = Br[185] + Br[17] + Br[218],
    wC = Br[23] + Br[58] + Br[186] + Br[42] + Br[124] + Br[125] + Br[126] + Br[58] + Br[59],
    TC = Br[1047],
    OC = Br[115] + Br[39] + Br[77],
    MC = Br[523],
    IC = Br[64] + Br[58] + Br[186] + Br[1] + Br[1048],
    kC = Br[0] + Br[39] + Br[207] + Br[65] + Br[1012],
    SC = Br[1049],
    CC = Br[1050],
    jC = Br[1051] + Br[19] + Br[1052] + Br[110] + Br[183],
    PC = Br[22] + Br[58] + Br[186],
    AC = Br[23] + Br[33] + Br[34] + Br[65] + Br[354],
    LC = Br[224] + Br[110] + Br[183],
    zC = Br[382] + Br[110] + Br[183],
    DC = Br[5] + Br[19] + Br[1053],
    NC = Br[421] + Br[24] + Br[459],
    RC = Br[192] + Br[65] + Br[545],
    BC = Br[421] + Br[24] + Br[290],
    $C = Br[135] + Br[65] + Br[1054],
    FC = Br[1055],
    GC = Br[1056] + Br[65] + Br[1057] + Br[24] + Br[687],
    YC = Br[56] + Br[19] + Br[229],
    UC = Br[30] + Br[125] + Br[1058],
    HC = Br[1059],
    qC = Br[76] + Br[1060],
    WC = Br[1061],
    VC = Br[1062] + Br[901],
    XC = Br[1063],
    KC = Br[33] + Br[1064] + Br[21] + Br[58] + Br[1065] + Br[228],
    ZC = Br[10] + Br[65] + Br[940],
    JC = Br[1066] + Br[76] + Br[1067],
    QC = Br[185] + Br[65] + Br[376] + Br[17] + Br[218],
    tj = Br[65] + Br[376],
    ij = Br[64] + Br[199] + Br[1068] + Br[58] + Br[59],
    nj = Br[19] + Br[270],
    ej = Br[65] + Br[916],
    sj = Br[58] + Br[312],
    rj = Br[340] + Br[1069] + Br[914],
    hj = Br[442] + Br[39] + Br[77],
    aj = Br[967] + Br[76] + Br[466] + Br[76] + Br[375],
    oj = Br[64] + Br[19] + Br[999] + Br[58] + Br[1070],
    fj = Br[1071] + Br[58] + Br[268] + Br[19] + Br[999],
    _j = Br[19] + Br[999] + Br[21] + Br[1] + Br[1072] + Br[155] + Br[290] + Br[21] + Br[58] + Br[268],
    cj = Br[442] + Br[125] + Br[218],
    uj = Br[1073] + Br[58] + Br[312],
    dj = Br[1074],
    lj = Br[1075] + Br[58] + Br[1076],
    vj = Br[1077],
    bj = Br[61] + Br[1] + Br[1078],
    yj = Br[343] + Br[1] + Br[514] + Br[33] + Br[515],
    gj = Br[930] + Br[76] + Br[933] + Br[76] + Br[217],
    pj = Br[930] + Br[76] + Br[933] + Br[76] + Br[190],
    xj = Br[930] + Br[76] + Br[347] + Br[76] + Br[319],
    mj = Br[930] + Br[76] + Br[347] + Br[76] + Br[633],
    Ej = Br[76] + Br[1079],
    wj = Br[203] + Br[99] + Br[227] + Br[422] + Br[423] + Br[100] + Br[557] + Br[558] + Br[69] + Br[559] + Br[560] + Br[561] + Br[299] + Br[562] + Br[563] + Br[564] + Br[565] + Br[566] + Br[567] + Br[1080] + Br[183] + Br[1081] + Br[1074] + Br[125] + Br[1082] + Br[570] + Br[486] + Br[84] + Br[571] + Br[299] + Br[187] + Br[84] + Br[51] + Br[124] + Br[572] + Br[569] + Br[559] + Br[573] + Br[486] + Br[574] + Br[200] + Br[575] + Br[482] + Br[576] + Br[333] + Br[577] + Br[1083] + Br[1084] + Br[1085] + Br[579] + Br[17] + Br[1086] + Br[36] + Br[482] + Br[300] + Br[199] + Br[1087] + Br[300] + Br[1088] + Br[1089] + Br[199] + Br[1090] + Br[1091] + Br[422] + Br[1092] + Br[1093] + Br[1094] + Br[262] + Br[301] + Br[1095] + Br[187] + Br[1096] + Br[1097] + Br[33] + Br[187] + Br[42] + Br[565] + Br[1098] + Br[422] + Br[300] + Br[1099] + Br[290] + Br[300] + Br[1100] + Br[299] + Br[1101] + Br[334] + Br[58] + Br[1074] + Br[1102] + Br[334] + Br[1103] + Br[299] + Br[559] + Br[1104] + Br[1105] + Br[1106] + Br[84] + Br[15] + Br[17] + Br[723] + Br[565] + Br[84] + Br[15] + Br[121] + Br[1074] + Br[476] + Br[1107] + Br[1108] + Br[33] + Br[1109] + Br[336] + Br[1110] + Br[39] + Br[569] + Br[422] + Br[334] + Br[483] + Br[834] + Br[586] + Br[571] + Br[84] + Br[1111] + Br[885] + Br[1112] + Br[1113] + Br[1114] + Br[561] + Br[1115] + Br[561] + Br[33] + Br[565] + Br[335] + Br[900] + Br[334] + Br[455] + Br[335] + Br[1116] + Br[1117] + Br[1118] + Br[104] + Br[335] + Br[1119] + Br[116] + Br[301] + Br[262] + Br[476] + Br[19] + Br[301] + Br[1120] + Br[567] + Br[397] + Br[483] + Br[300] + Br[1121] + Br[334] + Br[600] + Br[65] + Br[567] + Br[1122] + Br[567] + Br[1123] + Br[1124] + Br[262] + Br[336] + Br[1125] + Br[476] + Br[95] + Br[482] + Br[1126] + Br[299] + Br[1127] + Br[290] + Br[19] + Br[559] + Br[1128] + Br[485] + Br[397] + Br[1129] + Br[24] + Br[1130] + Br[1131] + Br[335] + Br[807] + Br[1132] + Br[300] + Br[1133] + Br[563] + Br[422] + Br[51] + Br[1134] + Br[301] + Br[14] + Br[334] + Br[39] + Br[1135] + Br[1136] + Br[334] + Br[1137] + Br[300] + Br[567] + Br[1138] + Br[482] + Br[1139] + Br[124] + Br[1140] + Br[299] + Br[561] + Br[58] + Br[818] + Br[36] + Br[1141] + Br[1142] + Br[484] + Br[334] + Br[1074] + Br[1143] + Br[1144] + Br[482] + Br[1145] + Br[1146] + Br[1147] + Br[116] + Br[476] + Br[300] + Br[1148] + Br[422] + Br[1149] + Br[300] + Br[1150] + Br[1151] + Br[84] + Br[1152] + Br[1153] + Br[1154] + Br[335] + Br[95] + Br[482] + Br[422] + Br[1155] + Br[335] + Br[14] + Br[1156] + Br[1111] + Br[1157] + Br[150] + Br[484] + Br[199] + Br[200] + Br[571] + Br[84] + Br[36] + Br[485] + Br[706] + Br[807] + Br[1074] + Br[125] + Br[483] + Br[422] + Br[567] + Br[58] + Br[15] + Br[84] + Br[36] + Br[336] + Br[1074] + Br[1158] + Br[900] + Br[84] + Br[51] + Br[1159] + Br[205] + Br[1160] + Br[300] + Br[1161] + Br[1162] + Br[1087] + Br[1131] + Br[332] + Br[486] + Br[19] + Br[579] + Br[334] + Br[1163] + Br[569] + Br[567] + Br[42] + Br[301] + Br[1164] + Br[300] + Br[116] + Br[1074] + Br[24] + Br[200] + Br[299] + Br[397] + Br[1074] + Br[1165] + Br[1166] + Br[422] + Br[299] + Br[58] + Br[200] + Br[104] + Br[1166] + Br[36] + Br[335] + Br[1167] + Br[335] + Br[1168] + Br[1169] + Br[1170] + Br[187] + Br[24] + Br[559] + Br[1117] + Br[579] + Br[333] + Br[33] + Br[1171] + Br[422] + Br[1172] + Br[706] + Br[301] + Br[567] + Br[1173] + Br[422] + Br[262] + Br[486] + Br[336] + Br[1174] + Br[65] + Br[422] + Br[84] + Br[1175] + Br[125] + Br[586] + Br[150] + Br[334] + Br[422] + Br[301] + Br[125] + Br[569] + Br[1176] + Br[1172] + Br[1177] + Br[1178] + Br[262] + Br[567] + Br[299] + Br[262] + Br[300] + Br[1074] + Br[1179] + Br[335] + Br[1074] + Br[333] + Br[1180] + Br[1181] + Br[1182] + Br[262] + Br[1183] + Br[1184] + Br[485] + Br[706] + Br[1185] + Br[205] + Br[84] + Br[17] + Br[561] + Br[300] + Br[422] + Br[567] + Br[332] + Br[422] + Br[569] + Br[1186] + Br[1187] + Br[33] + Br[1188] + Br[1168] + Br[332] + Br[1189] + Br[483] + Br[104] + Br[559] + Br[1190] + Br[290] + Br[333] + Br[1183] + Br[110] + Br[1191] + Br[1074] + Br[124] + Br[1192] + Br[336] + Br[1193] + Br[484] + Br[1194] + Br[595] + Br[300] + Br[394] + Br[84] + Br[422] + Br[1195] + Br[397] + Br[484] + Br[1074] + Br[1196] + Br[397] + Br[1166] + Br[36] + Br[1197] + Br[334] + Br[1074] + Br[1198] + Br[36] + Br[1199] + Br[1200] + Br[1201] + Br[299] + Br[1202] + Br[1203] + Br[36] + Br[335] + Br[561] + Br[19] + Br[1204] + Br[336] + Br[1183] + Br[1205] + Br[300] + Br[579] + Br[116] + Br[482] + Br[1206] + Br[484] + Br[84] + Br[1207] + Br[1208] + Br[1209] + Br[84] + Br[17] + Br[485] + Br[1210] + Br[595] + Br[1211] + Br[482] + Br[1074] + Br[1212] + Br[300] + Br[1213] + Br[290] + Br[299] + Br[1214] + Br[440] + Br[183] + Br[17] + Br[565] + Br[116] + Br[1087] + Br[1215] + Br[1216] + Br[1217] + Br[1087] + Br[110] + Br[1218] + Br[336] + Br[39] + Br[1183] + Br[51] + Br[332] + Br[1219] + Br[1183] + Br[262] + Br[1220] + Br[1221] + Br[1222] + Br[440] + Br[1223] + Br[1224] + Br[290] + Br[301] + Br[116] + Br[1225] + Br[332] + Br[205] + Br[1166] + Br[569] + Br[14] + Br[1166] + Br[1226] + Br[332] + Br[1125] + Br[335] + Br[187] + Br[301] + Br[17] + Br[124] + Br[95] + Br[559] + Br[121] + Br[485] + Br[706] + Br[301] + Br[65] + Br[1227] + Br[150] + Br[1166] + Br[150] + Br[1228] + Br[571] + Br[1229] + Br[334] + Br[1230] + Br[1074] + Br[33] + Br[1231] + Br[1232] + Br[476] + Br[334] + Br[150] + Br[1233] + Br[150] + Br[336] + Br[116] + Br[559] + Br[1074] + Br[440] + Br[301] + Br[200] + Br[1234] + Br[1235] + Br[262] + Br[299] + Br[482] + Br[262] + Br[300] + Br[484] + Br[1] + Br[579] + Br[110] + Br[124] + Br[121] + Br[807] + Br[300] + Br[482] + Br[336] + Br[1236] + Br[116] + Br[335] + Br[1237] + Br[332] + Br[1] + Br[561] + Br[333] + Br[65] + Br[486] + Br[440] + Br[807] + Br[336] + Br[15] + Br[33] + Br[1238] + Br[1239] + Br[290] + Br[121] + Br[332] + Br[592] + Br[84] + Br[262] + Br[1240] + Br[1241] + Br[561] + Br[51] + Br[422] + Br[124] + Br[332] + Br[900] + Br[19] + Br[1242] + Br[205] + Br[992] + Br[1243] + Br[422] + Br[476] + Br[1244] + Br[1074] + Br[1245] + Br[336] + Br[262] + Br[183] + Br[104] + Br[1166] + Br[299] + Br[366] + Br[595] + Br[1246] + Br[1247] + Br[604] + Br[183] + Br[333] + Br[1248] + Br[333] + Br[187] + Br[1249] + Br[485] + Br[39] + Br[332] + Br[42] + Br[1250] + Br[1251] + Br[1074] + Br[200] + Br[300] + Br[886] + Br[1252] + Br[1253] + Br[301] + Br[1254] + Br[290] + Br[125] + Br[807] + Br[1255] + Br[334] + Br[807] + Br[58] + Br[485] + Br[14] + Br[333] + Br[14] + Br[579] + Br[1256] + Br[592] + Br[334] + Br[187] + Br[1257] + Br[1258] + Br[1259] + Br[486] + Br[205] + Br[84] + Br[1260] + Br[301] + Br[17] + Br[586] + Br[1261] + Br[476] + Br[1262] + Br[900] + Br[706] + Br[586] + Br[1263] + Br[1264] + Br[878] + Br[1265] + Br[1266] + Br[1267] + Br[1268] + Br[65] + Br[299] + Br[571] + Br[569] + Br[1269] + Br[335] + Br[1270] + Br[1271] + Br[334] + Br[561] + Br[1272] + Br[200] + Br[65] + Br[333] + Br[1273] + Br[397] + Br[482] + Br[335] + Br[1274] + Br[14] + Br[1275] + Br[1276] + Br[1166] + Br[39] + Br[187] + Br[1277] + Br[483] + Br[856] + Br[24] + Br[335] + Br[900] + Br[336] + Br[476] + Br[440] + Br[484] + Br[335] + Br[262] + Br[567] + Br[33] + Br[335] + Br[579] + Br[65] + Br[1278] + Br[334] + Br[1279] + Br[205] + Br[476] + Br[51] + Br[299] + Br[1183] + Br[110] + Br[569] + Br[1166] + Br[1280] + Br[1074] + Br[483] + Br[33] + Br[569] + Br[482] + Br[335] + Br[579] + Br[1281] + Br[586] + Br[335] + Br[1074] + Br[65] + Br[1282] + Br[1283] + Br[58] + Br[579] + Br[334] + Br[484] + Br[1284] + Br[301] + Br[1285] + Br[1074] + Br[1166] + Br[301] + Br[36] + Br[1286] + Br[335] + Br[1287] + Br[332] + Br[42] + Br[1183] + Br[14] + Br[334] + Br[1288] + Br[440] + Br[1183] + Br[1289] + Br[592] + Br[334] + Br[290] + Br[1290] + Br[124] + Br[84] + Br[1291] + Br[125] + Br[561] + Br[301] + Br[1292] + Br[595] + Br[110] + Br[1183] + Br[1293] + Br[299] + Br[1172] + Br[1294] + Br[1295] + Br[84] + Br[1296] + Br[1074] + Br[1297] + Br[1298] + Br[39] + Br[333] + Br[559] + Br[336] + Br[486] + Br[116] + Br[1299] + Br[609] + Br[333] + Br[610] + Br[162],
    Tj = Br[203] + Br[99] + Br[227] + Br[422] + Br[423] + Br[100] + Br[557] + Br[558] + Br[69] + Br[559] + Br[560] + Br[561] + Br[299] + Br[562] + Br[563] + Br[564] + Br[565] + Br[566] + Br[567] + Br[1300] + Br[567] + Br[1301] + Br[422] + Br[104] + Br[200] + Br[1074] + Br[335] + Br[570] + Br[486] + Br[84] + Br[571] + Br[299] + Br[187] + Br[84] + Br[51] + Br[124] + Br[572] + Br[569] + Br[559] + Br[573] + Br[486] + Br[574] + Br[200] + Br[575] + Br[482] + Br[576] + Br[333] + Br[577] + Br[1083] + Br[1302] + Br[1085] + Br[579] + Br[17] + Br[484] + Br[1303] + Br[1172] + Br[1074] + Br[1304] + Br[482] + Br[1305] + Br[1087] + Br[336] + Br[586] + Br[1306] + Br[567] + Br[1307] + Br[484] + Br[1308] + Br[565] + Br[24] + Br[559] + Br[1309] + Br[124] + Br[299] + Br[1310] + Br[1299] + Br[36] + Br[1311] + Br[397] + Br[15] + Br[299] + Br[24] + Br[1074] + Br[1] + Br[1312] + Br[1313] + Br[476] + Br[51] + Br[482] + Br[17] + Br[900] + Br[332] + Br[1314] + Br[290] + Br[397] + Br[595] + Br[262] + Br[1315] + Br[1316] + Br[567] + Br[1317] + Br[1087] + Br[566] + Br[290] + Br[262] + Br[84] + Br[199] + Br[485] + Br[1318] + Br[586] + Br[569] + Br[200] + Br[84] + Br[39] + Br[483] + Br[299] + Br[1319] + Br[1320] + Br[301] + Br[116] + Br[586] + Br[336] + Br[14] + Br[15] + Br[17] + Br[1321] + Br[1322] + Br[422] + Br[187] + Br[1323] + Br[1324] + Br[440] + Br[1325] + Br[121] + Br[484] + Br[51] + Br[1326] + Br[1327] + Br[565] + Br[332] + Br[15] + Br[1074] + Br[482] + Br[95] + Br[1328] + Br[58] + Br[1329] + Br[336] + Br[116] + Br[200] + Br[1074] + Br[124] + Br[1330] + Br[332] + Br[900] + Br[1331] + Br[586] + Br[1332] + Br[807] + Br[335] + Br[1333] + Br[51] + Br[183] + Br[301] + Br[1074] + Br[1334] + Br[1335] + Br[422] + Br[1336] + Br[592] + Br[1337] + Br[1338] + Br[422] + Br[569] + Br[1339] + Br[1340] + Br[422] + Br[579] + Br[24] + Br[1341] + Br[1310] + Br[586] + Br[1342] + Br[484] + Br[1343] + Br[200] + Br[262] + Br[301] + Br[486] + Br[299] + Br[1344] + Br[299] + Br[1345] + Br[33] + Br[335] + Br[24] + Br[1172] + Br[422] + Br[50] + Br[440] + Br[299] + Br[1346] + Br[1347] + Br[1074] + Br[1348] + Br[483] + Br[333] + Br[1349] + Br[1172] + Br[199] + Br[484] + Br[1350] + Br[200] + Br[24] + Br[299] + Br[1351] + Br[1166] + Br[1352] + Br[1353] + Br[1354] + Br[561] + Br[1355] + Br[262] + Br[1356] + Br[1357] + Br[51] + Br[1358] + Br[262] + Br[567] + Br[1359] + Br[1183] + Br[1360] + Br[336] + Br[584] + Br[1087] + Br[301] + Br[422] + Br[336] + Br[17] + Br[1361] + Br[1318] + Br[1074] + Br[807] + Br[58] + Br[183] + Br[300] + Br[1362] + Br[333] + Br[1363] + Br[1364] + Br[51] + Br[561] + Br[334] + Br[1365] + Br[476] + Br[571] + Br[1056] + Br[301] + Br[1074] + Br[300] + Br[150] + Br[290] + Br[36] + Br[595] + Br[116] + Br[486] + Br[335] + Br[571] + Br[1166] + Br[301] + Br[290] + Br[299] + Br[440] + Br[124] + Br[336] + Br[571] + Br[336] + Br[1366] + Br[24] + Br[15] + Br[205] + Br[567] + Br[1367] + Br[1368] + Br[1369] + Br[1370] + Br[1371] + Br[84] + Br[476] + Br[397] + Br[1372] + Br[58] + Br[300] + Br[1373] + Br[397] + Br[825] + Br[397] + Br[1374] + Br[1375] + Br[104] + Br[476] + Br[1376] + Br[1087] + Br[84] + Br[485] + Br[1359] + Br[15] + Br[569] + Br[1377] + Br[1378] + Br[1379] + Br[110] + Br[1183] + Br[24] + Br[1380] + Br[571] + Br[559] + Br[1381] + Br[1382] + Br[397] + Br[1383] + Br[397] + Br[336] + Br[485] + Br[1384] + Br[1385] + Br[33] + Br[1386] + Br[24] + Br[592] + Br[1387] + Br[559] + Br[569] + Br[116] + Br[1172] + Br[569] + Br[104] + Br[1087] + Br[1356] + Br[476] + Br[14] + Br[333] + Br[42] + Br[732] + Br[1166] + Br[116] + Br[567] + Br[14] + Br[579] + Br[1388] + Br[483] + Br[706] + Br[333] + Br[1389] + Br[595] + Br[571] + Br[300] + Br[104] + Br[586] + Br[334] + Br[14] + Br[559] + Br[95] + Br[183] + Br[1390] + Br[486] + Br[300] + Br[1391] + Br[1392] + Br[334] + Br[1393] + Br[1394] + Br[1395] + Br[1396] + Br[300] + Br[1397] + Br[199] + Br[1183] + Br[1398] + Br[592] + Br[856] + Br[199] + Br[1399] + Br[300] + Br[565] + Br[1] + Br[1400] + Br[121] + Br[301] + Br[565] + Br[301] + Br[121] + Br[84] + Br[586] + Br[58] + Br[1401] + Br[335] + Br[586] + Br[1402] + Br[1166] + Br[125] + Br[1403] + Br[95] + Br[483] + Br[1321] + Br[1404] + Br[262] + Br[595] + Br[1405] + Br[1406] + Br[39] + Br[1407] + Br[1074] + Br[900] + Br[205] + Br[595] + Br[298] + Br[183] + Br[706] + Br[595] + Br[262] + Br[332] + Br[262] + Br[1408] + Br[301] + Br[116] + Br[300] + Br[110] + Br[1409] + Br[300] + Br[124] + Br[24] + Br[334] + Br[1410] + Br[1163] + Br[1411] + Br[1412] + Br[706] + Br[15] + Br[39] + Br[332] + Br[579] + Br[125] + Br[484] + Br[1413] + Br[335] + Br[1] + Br[332] + Br[1] + Br[300] + Br[561] + Br[125] + Br[565] + Br[1414] + Br[592] + Br[1415] + Br[1416] + Br[299] + Br[561] + Br[706] + Br[290] + Br[1417] + Br[567] + Br[1418] + Br[561] + Br[1419] + Br[124] + Br[1420] + Br[586] + Br[336] + Br[1421] + Br[726] + Br[39] + Br[124] + Br[1114] + Br[300] + Br[65] + Br[595] + Br[95] + Br[559] + Br[569] + Br[116] + Br[1422] + Br[1423] + Br[187] + Br[36] + Br[1424] + Br[1166] + Br[299] + Br[121] + Br[300] + Br[1425] + Br[84] + Br[1426] + Br[332] + Br[476] + Br[36] + Br[1427] + Br[1428] + Br[1240] + Br[199] + Br[301] + Br[1429] + Br[84] + Br[1430] + Br[335] + Br[17] + Br[484] + Br[116] + Br[200] + Br[36] + Br[334] + Br[482] + Br[1431] + Br[84] + Br[1432] + Br[586] + Br[333] + Br[595] + Br[17] + Br[200] + Br[336] + Br[1087] + Br[14] + Br[1433] + Br[1434] + Br[1435] + Br[19] + Br[1436] + Br[1437] + Br[300] + Br[24] + Br[1438] + Br[336] + Br[1439] + Br[1278] + Br[334] + Br[482] + Br[51] + Br[595] + Br[17] + Br[1440] + Br[42] + Br[422] + Br[476] + Br[39] + Br[1441] + Br[1442] + Br[58] + Br[15] + Br[19] + Br[1443] + Br[84] + Br[486] + Br[1444] + Br[1366] + Br[422] + Br[440] + Br[1074] + Br[24] + Br[200] + Br[333] + Br[1445] + Br[17] + Br[1183] + Br[1446] + Br[579] + Br[150] + Br[1087] + Br[301] + Br[1447] + Br[569] + Br[1448] + Br[299] + Br[1449] + Br[422] + Br[17] + Br[595] + Br[110] + Br[1450] + Br[422] + Br[1451] + Br[569] + Br[485] + Br[1452] + Br[334] + Br[476] + Br[58] + Br[586] + Br[706] + Br[476] + Br[569] + Br[1453] + Br[95] + Br[483] + Br[299] + Br[571] + Br[581] + Br[33] + Br[565] + Br[1074] + Br[19] + Br[187] + Br[125] + Br[301] + Br[1183] + Br[84] + Br[1183] + Br[569] + Br[482] + Br[1454] + Br[482] + Br[1455] + Br[332] + Br[17] + Br[335] + Br[51] + Br[1456] + Br[1457] + Br[333] + Br[58] + Br[1458] + Br[706] + Br[1459] + Br[1460],
    Oj = Br[1461] + Br[175],
    Mj = Br[1462] + Br[21] + Br[299] + Br[78] + Br[84] + Br[1172] + Br[21] + Br[1463] + Br[94] + Br[550],
    Ij = Br[1464],
    kj = Br[806],
    Sj = Br[78] + Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[17] + Br[399] + Br[21] + Br[401],
    Cj = Br[1462] + Br[99] + Br[300] + Br[100] + Br[261] + Br[94] + Br[241] + Br[492] + Br[67] + Br[68] + Br[299] + Br[405] + Br[299] + Br[405] + Br[299] + Br[405] + Br[299] + Br[78] + Br[333] + Br[70],
    jj = Br[78] + Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[17] + Br[399],
    Pj = Br[1462] + Br[99] + Br[299] + Br[100],
    Aj = Br[1465],
    Lj = Br[99] + Br[1462] + Br[21] + Br[301] + Br[1172] + Br[21] + Br[1466] + Br[94] + Br[734] + Br[68] + Br[299] + Br[78] + Br[336] + Br[405] + Br[299] + Br[405] + Br[299] + Br[78] + Br[336] + Br[405] + Br[300] + Br[70],
    zj = Br[78] + Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[17] + Br[399] + Br[99] + Br[413],
    Dj = Br[1462] + Br[99] + Br[300] + Br[100],
    Nj = Br[99] + Br[1462] + Br[21] + Br[299] + Br[78] + Br[301] + Br[1172] + Br[21] + Br[714],
    Rj = Br[1059] + Br[42] + Br[195],
    Bj = Br[78] + Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[65] + Br[529] + Br[42] + Br[1412],
    $j = Br[267] + Br[492] + Br[408] + Br[100] + Br[518] + Br[94] + Br[1467] + Br[492] + Br[257] + Br[94] + Br[518] + Br[100] + Br[518] + Br[94] + Br[626] + Br[1468] + Br[677] + Br[21] + Br[299] + Br[175] + Br[21] + Br[299] + Br[175] + Br[21] + Br[300] + Br[175] + Br[1017] + Br[261] + Br[94] + Br[241] + Br[492] + Br[67] + Br[68] + Br[1469] + Br[69] + Br[1469] + Br[69] + Br[1469] + Br[69] + Br[299] + Br[78] + Br[301] + Br[1021] + Br[257] + Br[94] + Br[489] + Br[492] + Br[332] + Br[175] + Br[100] + Br[1470] + Br[492] + Br[300] + Br[175] + Br[100],
    Fj = Br[1470] + Br[94] + Br[86] + Br[492] + Br[336] + Br[175] + Br[100],
    Gj = Br[1470] + Br[94] + Br[87] + Br[492] + Br[336] + Br[175] + Br[100],
    Yj = Br[78] + Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[65] + Br[529] + Br[39] + Br[1471],
    Uj = Br[99] + Br[1462] + Br[21] + Br[301] + Br[1172] + Br[21] + Br[1466] + Br[94] + Br[734] + Br[68] + Br[299] + Br[78] + Br[336] + Br[405] + Br[299] + Br[405] + Br[299] + Br[78] + Br[336] + Br[405] + Br[300] + Br[1021],
    Hj = Br[397] + Br[94] + Br[262] + Br[398] + Br[94] + Br[65] + Br[529] + Br[39] + Br[1471],
    qj = Br[30] + Br[440],
    Wj = Br[42] + Br[1472],
    Vj = Br[1473],
    Xj = Br[1474] + Br[76] + Br[1475],
    Kj = Br[1476],
    Zj = Br[239] + Br[110] + Br[274],
    Jj = Br[1477] + Br[110] + Br[282],
    Qj = Br[447] + Br[76] + Br[1478] + Br[76] + Br[375] + Br[76] + Br[1479],
    tP = Br[447] + Br[76] + Br[968] + Br[76] + Br[1478] + Br[76] + Br[375] + Br[76] + Br[1480],
    iP = Br[447] + Br[76] + Br[968] + Br[76] + Br[1478] + Br[76] + Br[375] + Br[76] + Br[1479],
    nP = Br[1037],
    eP = Br[10] + Br[33] + Br[1481],
    sP = Br[22] + Br[33] + Br[1481],
    rP = Br[946] + Br[33] + Br[1482],
    hP = Br[33] + Br[1481] + Br[199] + Br[1068],
    aP = Br[214] + Br[39] + Br[173],
    oP = Br[102] + Br[33] + Br[1482],
    fP = Br[23] + Br[33] + Br[34] + Br[33] + Br[1482] + Br[65] + Br[916],
    _P = Br[446] + Br[39] + Br[173],
    cP = Br[33] + Br[1482] + Br[39] + Br[207] + Br[199] + Br[1068],
    uP = Br[1483],
    dP = Br[185] + Br[58] + Br[312] + Br[42] + Br[124] + Br[199] + Br[1068],
    lP = Br[1484],
    vP = Br[50] + Br[19] + Br[1044] + Br[39] + Br[173],
    bP = Br[1051] + Br[19] + Br[1052] + Br[51] + Br[1007],
    yP = Br[1485],
    gP = Br[1] + Br[1486] + Br[65] + Br[376] + Br[199] + Br[1068],
    pP = Br[185] + Br[19] + Br[270] + Br[42] + Br[124] + Br[199] + Br[1068],
    xP = Br[1] + Br[1486] + Br[19] + Br[270] + Br[199] + Br[1068],
    mP = Br[58] + Br[312] + Br[379],
    EP = Br[1487],
    wP = Br[397] + Br[94] + Br[19] + Br[999] + Br[58] + Br[1488],
    TP = Br[1489] + Br[1490] + Br[1374] + Br[58] + Br[21] + Br[300] + Br[175],
    OP = Br[333] + Br[175],
    MP = Br[518] + Br[65] + Br[702],
    IP = Br[1491],
    kP = Br[1492],
    SP = Br[41] + Br[58] + Br[1070],
    CP = Br[38] + Br[58] + Br[1070],
    jP = Br[64] + Br[65] + Br[255] + Br[1] + Br[514],
    PP = Br[249] + Br[205] + Br[206],
    AP = Br[967] + Br[76] + Br[1493] + Br[76] + Br[1494] + Br[76] + Br[1495] + Br[76] + Br[1496] + Br[76] + Br[1497],
    LP = Br[185] + Br[901],
    zP = Br[64] + Br[1] + Br[1498] + Br[14] + Br[200] + Br[205] + Br[911],
    DP = Br[530],
    NP = Br[38] + Br[58] + Br[1070] + Br[205] + Br[1499] + Br[1] + Br[1498] + Br[14] + Br[200] + Br[205] + Br[911],
    RP = Br[19] + Br[999] + Br[58] + Br[1488],
    BP = Br[798] + Br[58] + Br[1488],
    $P = Br[1500] + Br[65] + Br[394] + Br[17] + Br[395],
    FP = Br[393] + Br[33] + Br[1501] + Br[1] + Br[1498] + Br[110] + Br[183] + Br[14] + Br[1502],
    GP = Br[421] + Br[110] + Br[183] + Br[14] + Br[1502],
    YP = Br[50] + Br[1] + Br[424],
    UP = Br[1483] + Br[19] + Br[999] + Br[58] + Br[1070],
    HP = Br[0] + Br[58] + Br[312] + Br[42] + Br[918],
    qP = Br[10] + Br[65] + Br[940] + Br[42] + Br[124] + Br[199] + Br[1068],
    WP = Br[1503] + Br[150] + Br[151],
    VP = Br[1504] + Br[21] + Br[227] + Br[228],
    XP = Br[21] + Br[807] + Br[21],
    KP = Br[1505] + Br[58] + Br[1065],
    ZP = Br[30] + Br[65] + Br[1506],
    JP = Br[446] + Br[33] + Br[1507] + Br[58] + Br[186],
    QP = Br[1066] + Br[76] + Br[1508] + Br[76] + Br[1509],
    tA = Br[313] + Br[58] + Br[1065],
    iA = Br[279] + Br[58] + Br[280] + Br[104] + Br[1013] + Br[36] + Br[415] + Br[379],
    nA = Br[1510] + Br[205] + Br[1511],
    eA = Br[1066] + Br[76] + Br[1508] + Br[76] + Br[1512],
    sA = Br[1513],
    rA = Br[203] + Br[39] + Br[75] + Br[1] + Br[514] + Br[33] + Br[515],
    hA = Br[214] + Br[19] + Br[270] + Br[199] + Br[187],
    aA = Br[214] + Br[19] + Br[270],
    oA = Br[30] + Br[1] + Br[1514] + Br[39] + Br[173],
    fA = Br[71] + Br[1515],
    _A = Br[10] + Br[39] + Br[207] + Br[65] + Br[701] + Br[42] + Br[124] + Br[199] + Br[213],
    cA = Br[30] + Br[104] + Br[1516],
    uA = Br[473] + Br[65] + Br[701],
    dA = Br[373] + Br[76] + Br[1508] + Br[76] + Br[1509],
    lA = Br[986],
    vA = Br[986] + Br[199] + Br[213],
    bA = Br[373] + Br[76] + Br[1517],
    yA = Br[373] + Br[76] + Br[1508] + Br[76] + Br[1512],
    gA = Br[1518] + Br[150] + Br[151],
    pA = Br[657] + Br[76] + Br[1519] + Br[76] + Br[953],
    xA = Br[1520] + Br[76] + Br[1512],
    mA = Br[657] + Br[76] + Br[1519] + Br[76] + Br[957] + Br[76] + Br[235],
    EA = Br[279] + Br[58] + Br[280] + Br[36] + Br[415] + Br[379],
    wA = Br[1520] + Br[76] + Br[1521],
    TA = Br[1522] + Br[94] + Br[438],
    OA = Br[1523] + Br[94] + Br[438],
    MA = Br[1524] + Br[94] + Br[438],
    IA = Br[67] + Br[68] + Br[299] + Br[405] + Br[1525] + Br[405] + Br[299] + Br[405] + Br[300] + Br[70],
    kA = Br[71] + Br[1526] + Br[299],
    SA = Br[30] + Br[104] + Br[1527],
    CA = Br[30] + Br[58] + Br[1528],
    jA = Br[1529],
    PA = Br[1530] + Br[76] + Br[1512],
    AA = Br[104] + Br[1531] + Br[199] + Br[1068],
    LA = Br[1520],
    zA = Br[56] + Br[65] + Br[940],
    DA = Br[287] + Br[110] + Br[183] + Br[110] + Br[991],
    NA = Br[434] + Br[24] + Br[687],
    RA = Br[1532] + Br[76] + Br[1533],
    BA = Br[1532] + Br[76] + Br[1534],
    $A = Br[397] + Br[94] + Br[110] + Br[1535],
    FA = Br[71] + Br[1536],
    GA = Br[300] + Br[175] + Br[21] + Br[1489] + Br[1490] + Br[33] + Br[569] + Br[33] + Br[569] + Br[33] + Br[569],
    YA = Br[84] + Br[175] + Br[21] + Br[332] + Br[175],
    UA = Br[915] + Br[110] + Br[282],
    HA = Br[1537] + Br[1197] + Br[1538],
    qA = Br[117] + Br[116],
    WA = Br[1539],
    VA = Br[915] + Br[33] + Br[1540],
    XA = Br[185] + Br[51] + Br[451],
    KA = Br[23] + Br[110] + Br[1535],
    ZA = Br[393] + Br[205] + Br[1541] + Br[571] + Br[1542],
    JA = Br[1037] + Br[78] + Br[313] + Br[78] + Br[1483],
    QA = Br[1037] + Br[78] + Br[1543],
    tL = Br[1037] + Br[78] + Br[313] + Br[78] + Br[888],
    iL = Br[1066] + Br[76] + Br[1544],
    nL = Br[1037] + Br[78] + Br[1545],
    eL = Br[1037] + Br[78] + Br[1546],
    sL = Br[986] + Br[78] + Br[313] + Br[78] + Br[1483],
    rL = Br[986] + Br[78] + Br[1543],
    hL = Br[986] + Br[78] + Br[313] + Br[78] + Br[888],
    aL = Br[1530] + Br[76] + Br[1509],
    oL = Br[438] + Br[78] + Br[1483],
    fL = Br[1547],
    _L = Br[438] + Br[78] + Br[888],
    cL = Br[1548],
    uL = Br[968] + Br[76] + Br[1512],
    dL = Br[210] + Br[78] + Br[888],
    lL = Br[355] + Br[76] + Br[977],
    vL = Br[340] + Br[78] + Br[389],
    bL = Br[434] + Br[78] + Br[1483],
    yL = Br[434] + Br[78] + Br[1549],
    gL = Br[434] + Br[78] + Br[888],
    pL = Br[526] + Br[76] + Br[130],
    xL = Br[1550] + Br[78] + Br[144],
    mL = Br[446] + Br[199] + Br[1068] + Br[125] + Br[218],
    EL = Br[23] + Br[199] + Br[1068] + Br[199] + Br[1551],
    wL = Br[317] + Br[199] + Br[1552],
    TL = Br[447] + Br[76] + Br[233] + Br[76] + Br[1553],
    OL = Br[1554],
    ML = Br[447] + Br[76] + Br[233] + Br[76] + Br[657],
    IL = Br[447] + Br[76] + Br[233] + Br[76] + Br[1555],
    kL = Br[1556],
    SL = Br[1557],
    CL = Br[447] + Br[76] + Br[233] + Br[76] + Br[1558] + Br[76] + Br[1559] + Br[76] + Br[355],
    jL = Br[185] + Br[78] + Br[1560] + Br[78] + Br[340],
    PL = Br[185] + Br[78] + Br[340],
    AL = Br[447] + Br[76] + Br[233] + Br[76] + Br[1558] + Br[76] + Br[318],
    LL = Br[185] + Br[78] + Br[954],
    zL = Br[447] + Br[76] + Br[233] + Br[76] + Br[1558] + Br[76] + Br[189],
    DL = Br[185] + Br[78] + Br[204],
    NL = Br[447] + Br[76] + Br[233] + Br[76] + Br[1561],
    RL = Br[65] + Br[940] + Br[199] + Br[1068],
    BL = Br[125] + Br[1562] + Br[199] + Br[1068],
    $L = Br[205] + Br[1541] + Br[571] + Br[1542] + Br[199] + Br[1068],
    FL = Br[33] + Br[1501] + Br[1] + Br[1498] + Br[199] + Br[1068],
    GL = Br[58] + Br[1563] + Br[199] + Br[1068],
    YL = Br[110] + Br[1535] + Br[199] + Br[1068],
    UL = Br[104] + Br[1564] + Br[65] + Br[940] + Br[199] + Br[1068],
    HL = Br[39] + Br[1010] + Br[199] + Br[1068],
    qL = Br[19] + Br[1565],
    WL = Br[1566],
    VL = Br[1567],
    XL = Br[1568],
    KL = Br[963] + Br[24] + Br[1569],
    ZL = Br[1570] + Br[76] + Br[367],
    JL = Br[1570] + Br[76] + Br[363],
    QL = Br[1570] + Br[76] + Br[488],
    tz = Br[1570] + Br[76] + Br[365],
    iz = Br[1570] + Br[76] + Br[364],
    nz = Br[1570] + Br[76] + Br[487],
    ez = Br[1571],
    sz = Br[1572] + Br[78] + Br[1573],
    rz = Br[1571] + Br[78] + Br[565],
    hz = Br[1571] + Br[78] + Br[1183],
    az = Br[961] + Br[76] + Br[347] + Br[76] + Br[1574] + Br[76] + Br[360],
    oz = Br[961] + Br[76] + Br[347] + Br[76] + Br[1575] + Br[76] + Br[1576],
    fz = Br[30] + Br[440] + Br[1577] + Br[33] + Br[1578],
    _z = Br[61] + Br[65] + Br[255],
    cz = Br[30] + Br[19] + Br[1579],
    uz = Br[565] + Br[262] + Br[705],
    dz = Br[1183] + Br[262] + Br[705],
    lz = Br[247] + Br[110] + Br[282],
    vz = Br[303] + Br[1] + Br[2] + Br[33] + Br[1578],
    bz = Br[1580],
    yz = Br[1581],
    gz = Br[946] + Br[19] + Br[339],
    pz = Br[471],
    xz = Br[76] + Br[1105],
    mz = Br[76] + Br[1582],
    Ez = Br[252] + Br[1583],
    wz = Br[252] + Br[1125],
    Tz = Br[471] + Br[121],
    Oz = Br[471] + Br[116],
    Mz = Br[303] + Br[42] + Br[195],
    Iz = Br[247] + Br[104] + Br[1013],
    kz = Br[254] + Br[19] + Br[339] + Br[33] + Br[377],
    Sz = Br[1584],
    Cz = Br[38],
    jz = Br[1585] + Br[19] + Br[339] + Br[33] + Br[377],
    Pz = Br[23] + Br[125] + Br[1586] + Br[199] + Br[1587],
    Az = Br[247] + Br[33] + Br[377],
    Lz = Br[1588],
    zz = Br[133] + Br[65] + Br[1054],
    Dz = Br[30] + Br[104] + Br[1589],
    Nz = Br[980],
    Rz = Br[1483] + Br[24] + Br[1590],
    Bz = Br[42] + Br[1591] + Br[19] + Br[1565],
    $z = Br[1592],
    Fz = Br[1593],
    Gz = Br[220],
    Yz = Br[1594],
    Uz = Br[1595] + Br[76] + Br[1596] + Br[76] + Br[1597],
    Hz = Br[370] + Br[76] + Br[233] + Br[76] + Br[1598],
    qz = Br[23] + Br[17] + Br[218] + Br[65] + Br[255],
    Wz = Br[1599],
    Vz = Br[381] + Br[65] + Br[1600],
    Xz = Br[23] + Br[104] + Br[265],
    Kz = Br[489] + Br[125] + Br[218],
    Zz = Br[471] + Br[84],
    Jz = Br[355] + Br[76] + Br[977] + Br[76] + Br[1601],
    Qz = Br[471] + Br[300],
    tD = Br[1051] + Br[42] + Br[1602],
    iD = Br[30] + Br[39] + Br[1603] + Br[14] + Br[1604],
    nD = Br[1605],
    eD = Br[548] + Br[199] + Br[1606],
    sD = Br[1607],
    rD = Br[1607] + Br[116],
    hD = Br[30] + Br[199] + Br[1608],
    aD = Br[1609],
    oD = Br[1607] + Br[121],
    fD = Br[1585],
    _D = Br[933] + Br[76] + Br[478],
    cD = Br[1610],
    uD = Br[247] + Br[125] + Br[1611],
    dD = Br[247] + Br[58] + Br[1612],
    lD = Br[1613],
    vD = Br[1614],
    bD = Br[1615],
    yD = Br[1002],
    gD = Br[1613] + Br[24] + Br[31],
    pD = Br[1616],
    xD = Br[1038],
    mD = Br[1617],
    ED = Br[192] + Br[58] + Br[450],
    wD = Br[446] + Br[58] + Br[450],
    TD = Br[65] + Br[1618] + Br[19] + Br[1565],
    OD = Br[493] + Br[19] + Br[1619],
    MD = Br[279] + Br[58] + Br[280] + Br[42] + Br[124] + Br[110] + Br[1620] + Br[42] + Br[1621] + Br[51] + Br[1031] + Br[65] + Br[1622],
    ID = Br[30] + Br[1623],
    kD = Br[30] + Br[14] + Br[1624],
    SD = Br[30] + Br[205] + Br[1625],
    CD = Br[30] + Br[1] + Br[1626],
    jD = Br[30] + Br[125] + Br[1627],
    PD = Br[33] + Br[1628],
    AD = Br[1] + Br[1629],
    LD = Br[262] + Br[1630],
    zD = Br[262] + Br[398],
    DD = Br[42] + Br[97] + Br[379],
    ND = Br[58] + Br[186] + Br[379],
    RD = Br[19] + Br[999] + Br[379],
    BD = Br[199] + Br[202] + Br[379],
    $D = Br[65] + Br[1631],
    FD = Br[39] + Br[207],
    GD = Br[262] + Br[398] + Br[125] + Br[414],
    YD = Br[397] + Br[1632] + Br[21] + Br[279] + Br[21] + Br[901] + Br[333],
    UD = Br[84] + Br[78] + Br[299],
    HD = Br[84] + Br[78] + Br[332] + Br[21] + Br[1633] + Br[84],
    qD = Br[397] + Br[1632] + Br[228] + Br[33] + Br[1634] + Br[21] + Br[1] + Br[1635] + Br[21] + Br[279] + Br[21] + Br[901] + Br[333] + Br[422] + Br[1] + Br[424],
    WD = Br[522],
    VD = Br[1173] + Br[1481],
    XD = Br[1079] + Br[422] + Br[298] + Br[422] + Br[1636],
    KD = 0;
    if (t.navigator) {
        var ZD = navigator[vd],
        JD = /opera/i[No](ZD),
        QD = !JD && /msie/i[No](ZD),
        tN = /rv:11.0/i[No](ZD),
        iN = /MSIE 10./i[No](ZD);
        if (tN && (QD = !0), /msie\s[6,7,8]/i[No](ZD)) throw new Error("your browser is not supported");
        var nN = /webkit|khtml/i[No](ZD),
        eN = !nN && /gecko/i.test(ZD),
        sN = /firefox\//i[No](ZD),
        rN = /Chrome\//i[No](ZD),
        hN = !rN && /Safari\//i.test(ZD),
        aN = /Macintosh;/i[No](ZD),
        oN = /(iPad|iPhone|iPod)/g[No](ZD),
        fN = /Android/g[No](ZD),
        _N = /Windows Phone/g[No](ZD),
        cN = (oN || fN || _N) && bd in t,
        uN = ZD.match(/AppleWebKit\/([0-9\.]*)/);
        if (uN && uN[Fr] > 1) var dN = parseFloat(uN[1]);
        if (fN) {
            var lN = parseFloat(ZD[_u](/Android\s([0-9\.]*)/)[1]);
            if (dN && 534.3 >= dN) var vN = !0
        }
    }
    t[yd] || (t[yd] = t[gd] || t[pd] || t[xd] || t.msRequestAnimationFrame ||
    function(i) {
        return t.setTimeout(function() {
            i()
        },
        1e3 / 60)
    }),
    t[md] || (t[md] = t.webkitCancelAnimationFrame || t[Ed] || t.oCancelAnimationFrame || t[wd] ||
    function(i) {
        return t[Td](i)
    });
    var bN = {
        SELECTION_TOLERANCE: 2,
        DOUBLE_BUFFER: n,
        LABEL_COLOR: Od
    };
    Z(bN, {
        FONT_STYLE: {
            get: function() {
                return this._fontStyle || (this._fontStyle = Md)
            },
            set: function(t) {
                this._fontStyle != t && (this._fontStyle = t, this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function() {
                return this._fontSize || (this._fontSize = 12)
            },
            set: function(t) {
                this._fontSize != t && (this._fontSize = t, this._fontChanged = !0)
            }
        },
        FONT_FAMILY: {
            get: function() {
                return this._fontFamily || (this._fontFamily = "Verdana,helvetica,arial,sans-serif")
            },
            set: function(t) {
                this._fontFamily != t && (this._fontFamily = t, this._fontChanged = !0)
            }
        },
        FONT: {
            get: function() {
                return (this._fontChanged || this._fontChanged === n) && (this._fontChanged = !1, this._font = this.FONT_STYLE + ih + this[Id] + kd + this[Sd]),
                this._font
            }
        }
    });
    var yN = function() {};
    yN.prototype = {
        _nq: 0,
        _no: 0,
        _l9: !0,
        _la: 1,
        _g2: function(t, i, n) {
            var e = this._d3(i),
            s = this._d4(n),
            r = t * e,
            h = t * s;
            return this._nyb(t, i - r, n - h)
        },
        _d3: function(t) {
            return (t - this._nq) / this._la
        },
        _d4: function(t) {
            return (t - this._no) / this._la
        },
        _dz: function(t, i) {
            return this._nyb(this._la, this._nq + t, this._no + i)
        },
        _nyb: function(t, i, n) {
            return this._la == t && this._nq == i && this._no == n ? !1 : (this._l9 && (1 != this[so] || 2 != this[so] ? (i = Math[wo](i * this.ratio) / this[so], n = Math.round(n * this[so]) / this[so]) : (i = Math[wo](i), n = Math.round(n))), this._nq = i, this._no = n, this._la = t, void(this._3e && this._3e()))
        },
        _ha: function() {
            return {
                a: this._la,
                b: 0,
                c: 0,
                d: this._la,
                e: this._nq,
                f: this._no
            }
        },
        toString: function() {
            return Cd + B(this._la) + jd + B(this._la) + jh + B(this._nq) + jh + B(this._no) + Ph
        },
        _h9: function(t) {
            vi(t, vu, this.toString())
        }
    };
    var gN = function(t) {
        this._k2 = [],
        this._m8 = {},
        t && this[nh](t)
    };
    gN[bh] = {
        _k2: null,
        _m8: null,
        get: function(t) {
            return this[Pd](t)
        },
        getById: function(t) {
            return this._m8[t]
        },
        getByIndex: function(t) {
            return this._k2[t]
        },
        forEach: function(t, i, n) {
            return l(this._k2, t, i, n)
        },
        forEachReverse: function(t, i, n) {
            return b(this._k2, t, i, n)
        },
        size: function() {
            return this._k2[Fr]
        },
        contains: function(t) {
            return this.containsById(t.id)
        },
        containsById: function(t) {
            return this._m8.hasOwnProperty(t)
        },
        setIndex: function(t, i) {
            var n = this._k2.indexOf(t);
            if (0 > n) throw new Error(Ga + t.id + Ad);
            return n == i ? !1 : (this._k2.splice(n, 1), this._k2[qr](i, 0, t), !0)
        },
        setIndexAfter: function(t, i) {
            var n = this._k2[Zr](t);
            if (0 > n) throw new Error(Ga + t.id + Ad);
            return n == i ? i: n == i + 1 ? i + 1 : (n > i && (i += 1), this._k2[qr](n, 1), this._k2[qr](i, 0, t), i)
        },
        setIndexBefore: function(t, i) {
            var n = this._k2[Zr](t);
            if (0 > n) throw new Error(Ga + t.id + Ad);
            return n == i ? i: n == i - 1 ? i - 1 : (i > n && (i -= 1), this._k2[qr](n, 1), this._k2.splice(i, 0, t), i)
        },
        indexOf: function(t) {
            return this._k2[Zr](t)
        },
        getIndexById: function(t) {
            var i = this[Ld](t);
            return i ? this._k2[Zr](i) : -1
        },
        add: function(t, i) {
            return S(t) ? this._fz(t, i) : this._lc(t, i)
        },
        addFirst: function(t) {
            return this.add(t, 0)
        },
        _fz: function(t, i) {
            if (0 == t.length) return ! 1;
            var e = !1,
            s = i >= 0;
            t = t._k2 || t;
            for (var r = 0,
            h = t[Fr]; h > r; r++) {
                var a = t[r];
                null !== a && a !== n && this._lc(a, i, !0) && (e = !0, s && i++)
            }
            return e
        },
        _lc: function(t, i) {
            var e = t.id;
            return e === n || this.containsById(e) ? !1 : (g(this._k2, t, i), this._m8[e] = t, t)
        },
        remove: function(t) {
            return S(t) ? this._nyi(t) : t.id ? this._fx(t.id, t) : this.removeById(t)
        },
        _nyi: function(t) {
            if (0 == t[Fr]) return ! 1;
            var i = !1;
            t = t._k2 || t;
            for (var e = 0,
            s = t.length; s > e; e++) {
                var r = t[e];
                if (null !== r && r !== n) {
                    r.id === n && (r = this._m8[r]);
                    var h = r.id;
                    this._fx(h, r, !0) && (i = !0)
                }
            }
            return i
        },
        _fx: function(t, i) {
            return t !== n && this.containsById(t) ? ((null === i || i === n) && (i = this.getById(t)), delete this._m8[t], p(this._k2, i), !0) : !1
        },
        removeById: function(t) {
            var i = this._m8[t];
            return i ? this._fx(t, i) : !1
        },
        set: function(t) {
            if (!t || 0 == t) return void this.clear();
            if (this.isEmpty() || !S(t)) return this[Oa](),
            this.add(t);
            var i = [],
            n = {},
            e = 0;
            if (l(t,
            function(t) {
                this._m8[t.id] ? (n[t.id] = t, e++) : i[Kr](t)
            },
            this), e != this[Fr]) {
                var s = [];
                this.forEach(function(t) {
                    n[t.id] || s.push(t)
                },
                this),
                s[Fr] && this._nyi(s)
            }
            return i[Fr] && this._fz(i),
            !0
        },
        clear: function() {
            return this.isEmpty() ? !1 : (this._k2.length = 0, this._m8 = {},
            !0)
        },
        toDatas: function() {
            return this._k2[Ur](0)
        },
        isEmpty: function() {
            return 0 == this._k2[Fr]
        },
        valueOf: function() {
            return this._k2.length
        },
        clone: function(t) {
            var i = new gN;
            return i.add(t ? y(this._k2) : this[qc]()),
            i
        }
    },
    Z(gN[bh], {
        datas: {
            get: function() {
                return this._k2
            }
        },
        random: {
            get: function() {
                return this._k2 && this._k2[Fr] ? this._k2[A(this._k2[Fr])] : null
            }
        },
        length: {
            get: function() {
                return this._k2 ? this._k2[Fr] : 0
            }
        }
    });
    var pN = (2 * Math.PI, .5 * Math.PI),
    xN = function(t, i) {
        i = i.toUpperCase();
        for (var n = QD ? t[zd] : t[Dd]; n && (1 != n[Nd] || n[Rd] && n[Rd][Jh]() != i);) n = QD ? n[Bd] : n.nextElementSibling;
        return n && 1 == n[Nd] && n.tagName && n[Rd][Jh]() == i ? n: null
    },
    mN = function(t, i, n) {
        t instanceof mN && (i = t.y, t = t.x, n = t[Po]),
        this[Th](t, i, n)
    },
    EN = function(t, i, n, e) {
        var s = t - n,
        r = i - e;
        return Math[po](s * s + r * r)
    };
    mN[bh] = {
        x: 0,
        y: 0,
        rotate: n,
        set: function(t, i, n) {
            this.x = t || 0,
            this.y = i || 0,
            this[Po] = n || 0
        },
        negate: function() {
            this.x = -this.x,
            this.y = -this.y
        },
        offset: function(t, i) {
            this.x += t,
            this.y += i
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function(t) {
            return EN(this.x, this.y, t.x, t.y)
        },
        toString: function() {
            return $d + this.x + Fd + this.y + Ph
        },
        clone: function() {
            return new mN(this.x, this.y)
        }
    },
    Object.defineProperty(mN[bh], Gd, {
        get: function() {
            return Math[po](this.x * this.x + this.y * this.y)
        }
    });
    var wN = function(t, i, e, s) {
        t !== n && this._nk(t, i, e, s)
    };
    wN.prototype = {
        _ns: null,
        _nt: null,
        _nw: null,
        _nv: null,
        _ny: null,
        _nz: null,
        _o1: 1,
        _nk: function(t, i, n, e) {
            this._ns = t,
            this._nt = i,
            this._nw = n,
            this._nv = e,
            t == n ? (this._ny = -1, this._o1 = 0, this._nz = t) : (this._ny = (i - e) / (t - n), this._nz = i - this._ny * t, this._o1 = 1),
            this._ly = Math[Uh](this._nv - this._nt, this._nw - this._ns),
            this._o1os = Math[Hh](this._ly),
            this._sin = Math.sin(this._ly)
        },
        _o1i: function(t) {
            return 0 == this._o1 ? Number.NaN: this._ny * t + this._nz
        },
        _o1k: function(t) {
            return 0 == this._ny ? Number[Yd] : (t - this._nz) / this._ny
        },
        _$p: function(t) {
            var i, n, e, s, r, h = t[0],
            a = t[2],
            o = t[4],
            f = t[1],
            _ = t[3],
            c = t[5],
            u = this._ny,
            d = this._nz,
            l = this._o1;
            if (0 == l ? (e = Math[po](( - u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = -u * a + u * h, r = u * o - 2 * u * a + u * h) : (e = Math[po](( - f + u * h + d) * c + _ * _ + ( - 2 * u * a - 2 * d) * _ + (u * o + d) * f + ( - u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = -_ + f + u * a - u * h, r = c - 2 * _ + f - u * o + 2 * u * a - u * h), 0 != r) {
                i = (e + s) / r,
                n = ( - e + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = qi(i, t)),
                n >= 0 && 1 >= n && (b = qi(n, t)),
                v && b ? [v, b] : v ? v: b ? b: void 0
            }
        },
        _43: function(t, i, n) {
            if (this._ny == t._ny || 0 == this._o1 && 0 == t._o1) return null;
            var e, s;
            if (e = 0 == this._o1 ? this._nz: 0 == t._o1 ? t._nz: (t._nz - this._nz) / (this._ny - t._ny), s = 0 == this._ny ? this._nz: 0 == t._ny ? t._nz: this._o1 ? this._ny * e + this._nz: t._ny * e + t._nz, !i) return {
                x: e,
                y: s
            };
            var r, h, a;
            if (n) r = -i / 2,
            h = -r;
            else {
                r = -EN(this._ns, this._nt, e, s),
                h = EN(this._nw, this._nv, e, s);
                var o = -r + h;
                if (o > i) {
                    var f = i / o;
                    r *= f,
                    h *= f
                } else a = (i - o) / 2
            }
            var _ = this._7v(e, s, r),
            c = this._7v(e, s, h);
            return a && (_._rest = a, c._rest = a),
            [_, c]
        },
        _7v: function(t, i, n) {
            return 0 == this._o1 ? {
                x: t,
                y: i + n
            }: {
                x: t + n * this._o1os,
                y: i + n * this._sin
            }
        }
    };
    var TN = function(t, i) {
        this[io] = t,
        this.height = i
    };
    TN[bh] = {
        width: 0,
        height: 0,
        isEmpty: function() {
            return this[io] <= 0 || this[no] <= 0
        },
        clone: function() {
            return new TN(this[io], this[no])
        },
        toString: function() {
            return Ud + this.width + Fd + this.height + Ph
        }
    };
    var ON = function(t, i, e, s) {
        t instanceof Object && !M(t) && (i = t.y, e = t[io], s = t.height, t = t.x),
        e === n && (e = -1),
        s === n && (s = -1),
        this.x = t || 0,
        this.y = i || 0,
        this[io] = e,
        this.height = s
    };
    ON[bh] = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function(t) {
            this.x = t.x || 0,
            this.y = t.y || 0,
            this[io] = t[io] || 0,
            this[no] = t.height || 0
        },
        set: function(t, i, n, e) {
            this.x = t || 0,
            this.y = i || 0,
            this[io] = n || 0,
            this.height = e || 0
        },
        offset: function(t, i) {
            this.x += t,
            this.y += i
        },
        contains: function(t, i) {
            return t instanceof ON ? ai(this.x, this.y, this.width, this.height, t.x, t.y, t.width, t.height) : t >= this.x && t <= this.x + this[io] && i >= this.y && i <= this.y + this[no]
        },
        intersectsPoint: function(t, i, n) {
            return this[io] <= 0 && this[no] <= 0 ? !1 : n ? this[Hd](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[io] && i >= this.y && i <= this.y + this[no]
        },
        intersectsRect: function(t, i, n, e) {
            return ri(this.x, this.y, this[io], this.height, t, i, n, e)
        },
        intersects: function(t, i) {
            return M(t[io]) ? this.intersectsRect(t.x, t.y, t[io], t[no]) : this.intersectsPoint(t, i)
        },
        intersection: function(t, i, n, e) {
            var s = this.x,
            r = this.y,
            h = s;
            h += this.width;
            var a = r;
            a += this[no];
            var o = t;
            o += n;
            var f = i;
            return f += e,
            t > s && (s = t),
            i > r && (r = i),
            h > o && (h = o),
            a > f && (a = f),
            h -= s,
            a -= r,
            0 > h || 0 > a ? null: new ON(s, r, h, a)
        },
        addPoint: function(t) {
            this.add(t.x, t.y)
        },
        add: function(t, i) {
            if (M(t[io])) return this[qd](t.x, t.y, t[io], t[no]);
            if (M(t.x) && (i = t.y, t = t.x), this.width < 0 || this[no] < 0) return this.x = t,
            this.y = i,
            void(this[io] = this[no] = 0);
            var n = this.x,
            e = this.y,
            s = this[io],
            r = this.height;
            s += n,
            r += e,
            n > t && (n = t),
            e > i && (e = i),
            t > s && (s = t),
            i > r && (r = i),
            s -= n,
            r -= e,
            s > Number[Wd] && (s = Number[Wd]),
            r > Number[Wd] && (r = Number.MAX_VALUE),
            this.set(n, e, s, r)
        },
        addRect: function(t, i, n, e) {
            var s = this[io],
            r = this[no]; (0 > s || 0 > r) && this[Th](t, i, n, e);
            var h = n,
            a = e;
            if (! (0 > h || 0 > a)) {
                var o = this.x,
                f = this.y;
                s += o,
                r += f;
                var _ = t,
                c = i;
                h += _,
                a += c,
                o > _ && (o = _),
                f > c && (f = c),
                h > s && (s = h),
                a > r && (r = a),
                s -= o,
                r -= f,
                s > Number.MAX_VALUE && (s = Number[Wd]),
                r > Number.MAX_VALUE && (r = Number.MAX_VALUE),
                this.set(o, f, s, r)
            }
        },
        shrink: function(t, i, n, e) {
            return M(t) ? 1 == arguments[Fr] ? e = i = n = t || 0 : 2 == arguments[Fr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t.left || 0, n = t.bottom || 0, e = t.right || 0, t = t.top || 0),
            this.x += i,
            this.y += t,
            this[io] -= i + e,
            this[no] -= t + n,
            this
        },
        grow: function(t, i, n, e) {
            return M(t) ? 1 == arguments[Fr] ? e = i = n = t || 0 : 2 == arguments[Fr] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t.left || 0, n = t[qh] || 0, e = t[Wh] || 0, t = t[Yo] || 0),
            this.x -= i,
            this.y -= t,
            this.width += i + e,
            this[no] += t + n,
            this
        },
        isEmpty: function() {
            return this[io] <= 0 && this[no] <= 0
        },
        toString: function() {
            return this.x + Vd + this.y + Vd + this[io] + Vd + this.height
        },
        union: function(t) {
            var i = this[io],
            n = this[no];
            if (0 > i || 0 > n) return new ON(t.x, t.y, t[io], t.height);
            var e = t[io],
            s = t[no];
            if (0 > e || 0 > s) return new ON(this.x, this.y, this.width, this[no]);
            var r = this.x,
            h = this.y;
            i += r,
            n += h;
            var a = t.x,
            o = t.y;
            return e += a,
            s += o,
            r > a && (r = a),
            h > o && (h = o),
            e > i && (i = e),
            s > n && (n = s),
            i -= r,
            n -= h,
            i > Number[Wd] && (i = Number[Wd]),
            n > Number[Wd] && (n = Number[Wd]),
            new ON(r, h, i, n)
        },
        clear: function() {
            this[Th](0, 0, -1, -1)
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y && this.width == t[io] && this[no] == t[no]
        },
        clone: function(t, i) {
            return new ON(this.x + (t || 0), this.y + (i || 0), this[io], this.height)
        },
        getIntersectionPoint: function(t, i, n, e) {
            return si(this, t, i, n, e)
        }
    },
    D(ON, TN),
    Z(ON[bh], {
        left: {
            get: function() {
                return this.x
            }
        },
        top: {
            get: function() {
                return this.y
            }
        },
        bottom: {
            get: function() {
                return this.y + this[no]
            }
        },
        right: {
            get: function() {
                return this.x + this[io]
            }
        },
        cx: {
            get: function() {
                return this.x + this[io] / 2
            }
        },
        cy: {
            get: function() {
                return this.y + this[no] / 2
            }
        },
        center: {
            get: function() {
                return new mN(this.cx, this.cy)
            }
        }
    });
    var MN = function(t, i, n, e) {
        1 == arguments.length ? i = n = e = t: 2 == arguments[Fr] && (n = t, e = i),
        this[Th](t, i, n, e)
    };
    MN[bh] = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function(t, i, n, e) {
            this.top = t || 0,
            this[Uo] = i || 0,
            this[qh] = n || 0,
            this[Wh] = e || 0
        },
        clone: function() {
            return new MN(this.top, this.left, this[qh], this[Wh])
        },
        equals: function(t) {
            return t && this.top == t.top && this[qh] == t[qh] && this[Uo] == t.left && this[Wh] == t[Wh]
        }
    };
    var IN = function(t, i) {
        this[Xh] = t,
        this.verticalPosition = i
    };
    IN.prototype = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function() {
            return (this[Xh] || "") + (this[Xd] || "")
        }
    },
    K(IN[bh], Kd, {
        get: function() {
            return (this.horizontalPosition || "") + (this[Xd] || "")
        }
    });
    var kN = Zd,
    SN = Jd,
    CN = Qd,
    jN = u_,
    PN = tl,
    AN = il;
    IN[nl] = new IN(kN, jN),
    IN[el] = new IN(kN, PN),
    IN.LEFT_BOTTOM = new IN(kN, AN),
    IN[sl] = new IN(SN, jN),
    IN.CENTER_MIDDLE = new IN(SN, PN),
    IN[rl] = new IN(SN, AN),
    IN[hl] = new IN(CN, jN),
    IN.RIGHT_MIDDLE = new IN(CN, PN),
    IN[al] = new IN(CN, AN);
    var LN = [IN[nl], IN.LEFT_MIDDLE, IN[ol], IN.CENTER_TOP, IN.CENTER_MIDDLE, IN[rl], IN[hl], IN[fl], IN[al]];
    K(IN, lh, {
        get: function() {
            return LN[A(LN[Fr])]
        }
    });
    var zN = function(t, i, n, e, s) {
        this[Th](t, i, n, e),
        this[_l] = s
    };
    zN[bh] = {
        radius: 0,
        classify: function(t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        },
        intersectsRect: function(t, i, n, e) {
            if (R(this, zN, Hd, arguments) === !1) return ! 1;
            var s = this.x,
            r = this.y,
            h = s + this[io],
            a = r + this.height,
            o = 2 * radius,
            f = 2 * radius,
            _ = Math.min(this[io], Math.abs(o)) / 2,
            c = Math[go](this[no], Math.abs(f)) / 2,
            u = this.classify(t, s, h, _),
            d = this[cl](t + n, s, h, _),
            l = this[cl](i, r, a, c),
            v = this[cl](i + e, r, a, c);
            return 2 == u || 2 == d || 2 == l || 2 == v ? !0 : 2 > u && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + _) : t -= h - _, i = 1 == v ? i = i + e - (r + c) : i -= a - c, t /= _, i /= c, 1 >= t * t + i * i)
        },
        intersectsPoint: function(t, i) {
            if (R(this, zN, Eo, arguments) === !1) return ! 1;
            var n = this.x,
            e = this.y,
            s = n + this[io],
            r = e + this[no];
            if (n > t || e > i || t >= s || i >= r) return ! 1;
            var h = 2 * radius,
            a = 2 * radius,
            o = Math[go](this[io], Math[Vh](h)) / 2,
            f = Math.min(this[no], Math[Vh](a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        },
        clone: function() {
            return new zN(this.x, this.y, this[io], this[no], this[_l])
        }
    },
    D(zN, ON);
    var DN = function(t, i, n, e) {
        this[Wo] = t,
        this[jo] = i,
        this[ul] = n,
        this[cc] = e
    };
    DN.prototype = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function() {
            return dl + this[Wo] + ll + this.type + vl + this[ul]
        }
    };
    var NN = function(t, i, n, e, s) {
        this.source = t,
        this.kind = i,
        this[bl] = e,
        this[cc] = n,
        this[yl] = s
    };
    NN[bh] = {
        type: gl,
        propertyType: null,
        toString: function() {
            return dl + this[Wo] + ll + this[jo] + pl + this[ul] + xl + this.oldValue + ml + this[cc]
        }
    },
    D(NN, DN),
    K(NN[bh], El, {
        get: function() {
            return this[ul]
        },
        set: function(t) {
            this[ul] = t
        }
    });
    var RN = function(t, i, n) {
        this.source = t,
        this.oldValue = t.parent,
        this[cc] = i,
        this[wl] = n,
        this[bl] && (this[Tl] = this[bl][Ol](t))
    };
    RN.prototype = {
        kind: g_
    },
    D(RN, NN);
    var BN = function(t, i) {
        this.source = t,
        this[cc] = i
    };
    BN[bh][ul] = Ml,
    D(BN, NN);
    var $N = function(t, i) {
        this.source = t,
        this[cc] = i
    };
    $N.prototype[ul] = Il,
    D($N, NN);
    var FN = function(t, i, n, e) {
        this.source = i,
        this[bl] = n,
        this[cc] = e,
        this.parent = t,
        this.child = i,
        this[Tl] = n,
        this[wl] = e
    };
    FN.prototype[ul] = kl,
    D(FN, NN);
    var GN = function() {};
    GN[bh] = {
        listener: null,
        beforeEvent: function(t) {
            return null != this[Sl] && this[Sl].beforeEvent ? this[Sl][Oh](t) : !0
        },
        onEvent: function(t) {
            null != this[Sl] && this[Sl][Cl] && this.listener.onEvent(t)
        }
    };
    var YN = function() {
        N(this, YN, arguments),
        this[jl] = {},
        this[Pl] = []
    },
    UN = function(t, i) {
        this.listener = t,
        this[xh] = i,
        t instanceof Function ? this[Cl] = t: (this[Cl] = t[Cl], this[Oh] = t[Oh]),
        this[Al] = function(t) {
            return t && this[Sl] == t.listener && this[xh] == t[xh]
        }
    };
    UN[bh] = {
        equals: function(t) {
            return t && this[Sl] == t.listener && this[xh] == t[xh]
        },
        destroy: function() {
            delete this[xh],
            delete this.listener
        }
    },
    YN[bh] = {
        listeners: null,
        _nyr: function() {
            return this.listeners && this.listeners[Fr] > 0
        },
        _6s: function(t, i) {
            return t instanceof YN ? t: new UN(t, i)
        },
        _nyc: function(t, i) {
            if (t instanceof YN) return this.listeners[Zr](t);
            for (var n = this[Pl], e = 0, s = n[Fr]; s > e; e++) {
                var r = n[e];
                if (r.listener == t && r.scope == i) return e
            }
            return - 1
        },
        contains: function(t, i) {
            return this._nyc(t, i) >= 0
        },
        addListener: function(t, i) {
            return this[su](t, i) ? !1 : void this.listeners[Kr](this._6s(t, i))
        },
        removeListener: function(t, i, n) {
            var e = this._nyc(t, i);
            if (e >= 0) {
                var s = this[Pl][qr](e, 1)[0];
                n || $(s)
            }
        },
        on: function(t, i) {
            this[hd](t, i)
        },
        un: function(t, i, n) {
            this[Ll](t, i, n)
        },
        onEvent: function(t) {
            return this[Pl] ? void l(this[Pl],
            function(i) {
                i[Cl] && (i.scope ? i[Cl][Yr](i.scope, t) : i[Cl](t))
            },
            this) : !1
        },
        beforeEvent: function(t) {
            return this[Pl] ? l(this[Pl],
            function(i) {
                return i[Oh] ? i[xh] ? i[Oh][Yr](i[xh], t) : i[Oh](t) : !0
            },
            this) : !0
        },
        _eh: function(t) {
            return this.beforeEvent(t) === !1 ? !1 : (this[Cl](t), !0)
        },
        clear: function() {
            this.listeners = []
        },
        destroy: function() {
            this[Oa]()
        }
    },
    D(YN, GN);
    var HN = {
        onEvent: function() {},
        beforeEvent: function() {}
    },
    qN = function(t, i, n, e, s) {
        this.source = t,
        this[jo] = zl,
        this.kind = i,
        this.data = n,
        this[Dl] = e,
        this[Tl] = s
    };
    qN[bh] = {
        index: -1,
        oldIndex: -1,
        toString: function() {
            return dl + this[Wo] + ll + this[jo] + vl + this[ul] + Nl + this[Io] + Rl + this.index + Bl + this.oldIndex
        }
    },
    D(qN, DN),
    qN.KIND_ADD = nh,
    qN[$l] = Vr,
    qN.KIND_CLEAR = Oa,
    qN.KIND_INDEX_CHANGE = Fl;
    var WN = function() {
        this.id = ++KD,
        this._o1b = {}
    };
    WN[bh] = {
        _o1b: null,
        id: null,
        get: function(t) {
            return this._o1b[t]
        },
        set: function(t, i) {
            var n = this.get(t);
            if (n === i) return ! 1;
            var e = new NN(this, t, i, n);
            return e[yl] = mR.PROPERTY_TYPE_CLIENT,
            this._nze(t, i, e, this._o1b)
        },
        _nze: function(t, i, e, s) {
            return this[Oh](e) === !1 ? !1 : (s || (s = this._o1b), i === n ? delete s[t] : s[t] = i, this.onEvent(e), !0)
        },
        remove: function(t) {
            this[Th](t, null)
        },
        valueOf: function() {
            return this.id
        },
        toString: function() {
            return this.id
        },
        _dw: function(t, i) {
            if (i === n && (i = -1), this == t || t == this._jr) return ! 1;
            if (t && this == t._jr && !t._dw(null)) return ! 1;
            var e = new RN(this, t, i);
            if (!this.beforeEvent(e)) return ! 1;
            var s, r, h = this._jr;
            return t && (s = new BN(t, this), !t.beforeEvent(s)) ? !1 : null == h || (r = new $N(h, this), h.beforeEvent(r)) ? (this._jr = t, null != t && fi(t, this, i), null != h && _i(h, this), this[Cl](e), null != t && t[Cl](s), null != h && h.onEvent(r), this[Gl](h, t), !0) : !1
        },
        addChild: function(t, i) {
            var n = t._dw(this, i);
            return n && this[Kh](t, i),
            n
        },
        onChildAdd: function() {},
        removeChild: function(t) {
            if (!this._fo || !this._fo[su](t)) return ! 1;
            var i = t._dw(null);
            return this[Yl](t),
            i
        },
        onChildRemove: function() {},
        toChildren: function() {
            return this._fo ? this._fo[qc]() : null
        },
        clearChildren: function() {
            if (this._fo && this._fo.length) {
                var t = this[Ul]();
                l(t,
                function(t) {
                    t._dw(null)
                },
                this),
                this[Hl](t)
            }
        },
        forEachChild: function(t, i) {
            return this[$r]() ? this._fo[Kf](t, i) : !1
        },
        onChildrenClear: function() {},
        getChildIndex: function(t) {
            return this._fo && this._fo.length ? this._fo[Zr](t) : -1
        },
        setChildIndex: function(t, i) {
            if (!this._fo || !this._fo.length) return ! 1;
            var n = this._fo[Zr](t);
            if (0 > n || n == i) return ! 1;
            var e = new FN(this, t, n, i);
            return this[Oh](e) === !1 ? !1 : (this._fo[Vr](t) && this._fo[nh](t, i), this.onEvent(e), !0)
        },
        hasChildren: function() {
            return this._fo && this._fo.length > 0
        },
        getChildAt: function(t) {
            return null == this._fo ? null: this._fo._k2[t]
        },
        isDescendantOf: function(t) {
            if (!t[$r]()) return ! 1;
            for (var i = this[g_]; null != i;) {
                if (t == i) return ! 0;
                i = i.parent
            }
            return ! 1
        },
        onParentChanged: function() {},
        firePropertyChangeEvent: function(t, i, n, e) {
            this.onEvent(new NN(this, t, i, n, e))
        }
    },
    D(WN, GN),
    Z(WN.prototype, {
        childrenCount: {
            get: function() {
                return this._fo ? this._fo.length: 0
            }
        },
        children: {
            get: function() {
                return this._fo || (this._fo = new gN),
                this._fo
            }
        },
        parent: {
            get: function() {
                return this._jr
            },
            set: function(t) {
                this._dw(t, -1)
            }
        },
        properties: {
            get: function() {
                return this._o1b
            },
            set: function(t) {
                this._o1b != t && (this._o1b = t)
            }
        }
    });
    var VN = function() {
        this._k2 = [],
        this._m8 = {},
        this._24 = new YN
    };
    VN[bh] = {
        beforeEvent: function(t) {
            return null != this._24 && this._24[Oh] ? this._24[Oh](t) : !0
        },
        onEvent: function(t) {
            return this._24 instanceof Function ? void this._24(t) : void(null != this._24 && this._24[Cl] && this._24[Cl](t))
        },
        _24: null,
        setIndex: function(t, i) {
            if (!this[su](t)) throw new Error(Ga + t.getId() + Ad);
            var n = this.indexOf(t);
            if (n == i) return ! 1;
            var e = new qN(this, qN[ql], t, i, n);
            return this[Oh](e) === !1 ? !1 : (this._k2[Vr](t) >= 0 && this._k2.add(i, t), this[Cl](e), !0)
        },
        _fz: function(t, i) {
            if (0 == t.length) return ! 1;
            var e = !1,
            s = i >= 0,
            r = new qN(this, qN.KIND_ADD, t, i);
            if (this.beforeEvent(r) === !1) return ! 1;
            var h = [];
            t = t._k2 || t;
            for (var a = 0,
            o = t[Fr]; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._lc(f, i, !0) && (h.push(f), e = !0, s && i++)
            }
            return r[Io] = h,
            this[Cl](r),
            e
        },
        _lc: function(t, i, n) {
            if (this[O_](t) === !1) return ! 1;
            if (n) return R(this, VN, Wl, arguments);
            var e = new qN(this, qN[Vl], t, i);
            return this[Oh](e) === !1 ? !1 : R(this, VN, Wl, arguments) ? (this._ld(t, e), t) : !1
        },
        _ld: function(t, i) {
            this[Cl](i)
        },
        _nyi: function(t) {
            if (0 == t.length) return ! 1;
            var i = new qN(this, qN[$l], t);
            if (this[Oh](i) === !1) return ! 1;
            var e = [],
            s = !1;
            t = t._k2 || t;
            for (var r = 0,
            h = t.length; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null),
                    this._fx(o, a, !0) && (e[Kr](a), s = !0)
                }
            }
            return i[Io] = e,
            this.onEvent(i),
            s
        },
        _fx: function(t, i, n) {
            if (n) return R(this, VN, Xl, arguments);
            var e = new qN(this, qN[$l], i);
            return this[Oh](e) === !1 ? !1 : R(this, VN, Xl, arguments) ? (this.onEvent(e), !0) : !1
        },
        clear: function() {
            if (this.isEmpty()) return ! 1;
            var t = new qN(this, qN.KIND_CLEAR, this[qc]());
            return this[Oh](t) === !1 ? !1 : R(this, VN, Oa) ? (this.onEvent(t), !0) : !1
        },
        accept: function(t) {
            return this[Kl] && this[Kl](t) === !1 ? !1 : !0
        }
    },
    D(VN, gN),
    K(VN.prototype, Zl, {
        get: function() {
            return this._24
        }
    });
    var XN = function() {
        N(this, XN, arguments),
        this.selectionChangeDispatcher = new YN,
        this._selectionModel = new KN(this),
        this._selectionModel._24 = this[Jl],
        this[Ql] = new YN,
        this[Ql][hd]({
            beforeEvent: this[tv],
            onEvent: this[iv]
        },
        this),
        this.parentChangeDispatcher = new YN,
        this[nv] = new YN,
        this.$roots = new gN;
        var t = this;
        this[ev][sv] = function(i, n) {
            if (!t[ev][su](i)) throw new Error(Ga + i.id + Ad);
            var e = t[ev]._k2.indexOf(i);
            if (e == n) return ! 1;
            t[ev]._k2.splice(e, 1),
            t[ev]._k2[qr](n, 0, i),
            t._o1gIndexFlag = !0;
            var s = new FN(t, i, e, n);
            return t._2m(s),
            !0
        }
    };
    XN[bh] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _ld: function(t, i) {
            t[Sl] = this.dataChangeDispatcher,
            t[g_] || this[ev].add(t),
            this[Cl](i)
        },
        _fx: function(t, i) {
            if (R(this, XN, Xl, arguments)) {
                if (i instanceof o$) i[rv]();
                else if (i instanceof f$) {
                    var n = i.getEdges();
                    this[Vr](n)
                }
                var e = i[g_];
                return null == e ? this[ev][Vr](i) : (e.removeChild(i), e.__74 = !0),
                i.hasChildren() && this[Vr](i[Ul]()),
                i[Sl] = null,
                !0
            }
            return ! 1
        },
        _5s: function(t) {
            var i = t.source;
            this.contains(i) && (null == i.parent ? this[ev].add(i) : null == t[bl] && this[ev][Vr](i), this[hv].onEvent(t))
        },
        _2m: function(t) {
            this.childIndexChangeDispatcher.onEvent(t)
        },
        beforeDataPropertyChange: function(t) {
            return t instanceof RN ? this.parentChangeDispatcher.beforeEvent(t) : !0
        },
        onDataPropertyChanged: function(t) {
            return t instanceof RN ? (this._o1gIndexFlag = !0, t.source._o1gIndexFlag = !0, void this._5s(t)) : void(t instanceof FN && (this._o1gIndexFlag = !0, t[Wo]._o1gIndexFlag = !0, this._2m(t)))
        },
        toRoots: function() {
            return this[ev][qc]()
        },
        _gl: function(t) {
            var i, n = t._jr;
            i = n ? n._fo: this.$roots;
            var e = i.indexOf(t);
            if (0 > e) throw new Error(av + t + "' not exist in the box");
            return 0 == e ? n: i[Pd](e - 1)
        },
        _gn: function(t) {
            var i, n = t._jr;
            i = n ? n._fo: this.$roots;
            var e = i[Zr](t);
            if (0 > e) throw new Error(av + t + "' not exist in the box");
            return e == i.length - 1 ? n ? this._gn(n) : null: i[Pd](e + 1)
        },
        forEachByDepthFirst: function(t, i, n) {
            return this[ev][Fr] ? r(this[ev], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function(t, i, n) {
            return this[ev][Fr] ? o(this[ev], t, i, n) : !1
        },
        forEachByBreadthFirst: function(t, i) {
            return this.$roots[Fr] ? c(this[ev], t, i) : !1
        },
        forEachByBreadthFirstReverse: function(t, i) {
            return this[ev][Fr] ? u(this[ev], t, i) : !1
        },
        clear: function() {
            return R(this, XN, Oa) ? (this[ev][Oa](), this.selectionModel[Oa](), !0) : !1
        }
    },
    D(XN, VN),
    Z(XN[bh], {
        selectionModel: {
            get: function() {
                return this._selectionModel
            }
        },
        roots: {
            get: function() {
                return this.$roots
            }
        }
    });
    var KN = function(t) {
        N(this, KN),
        this[ov] = t,
        this._nzoxChangeListener = {
            onEvent: function(t) {
                qN[$l] == t[ul] ? null != t[Io] ? this.remove(t[Io]) : null != t[rd] && this[Vr](t[rd]) : qN[fv] == t.kind && this[Oa]()
            }
        },
        this[ov][Zl].addListener(this._nzoxChangeListener, this)
    };
    KN[bh] = {
        box: null,
        isSelected: function(t) {
            return this[y_](t.id || t)
        },
        select: function(t) {
            return this.add(t)
        },
        unselect: function(t) {
            return this[Vr](t)
        },
        reverseSelect: function(t) {
            return this[su](t) ? this[Vr](t) : this[nh](t)
        },
        accept: function(t) {
            return this[ov][su](t)
        }
    },
    D(KN, VN);
    var ZN = null,
    JN = null,
    QN = null,
    tR = function() {
        if (!i[uo]) return function(t) {
            return t
        };
        var t = i[uo](uu),
        e = t[ra],
        s = {};
        return function(t) {
            if (s[t]) return s[t];
            var i = ci(t);
            return e[i] !== n || QN && e[i = ci(QN + i)] !== n ? (s[t] = i, i) : t
        }
    } (),
    iR = {}; !
    function() {
        if (!i[_v]) return ! 1;
        for (var e = i.head,
        s = "Webkit Moz O ms Khtml" [sh](ih), r = 0; r < s[Fr]; r++) if (e[ra][s[r] + cv] !== n) {
            QN = ta + s[r].toLowerCase() + ta;
            break
        }
        var h = i[uo](ra);
        t[uv] || h[mc](i.createTextNode("")),
        h.classList && (ZN = !0),
        h[jo] = dv,
        h.id = lv,
        e[mc](h),
        JN = h[vv];
        var a, o;
        for (var f in iR) {
            var _ = iR[f];
            a = f,
            o = "";
            for (var c in _) o += tR(c) + na + _[c] + bv;
            bi(a, o)
        }
    } ();
    var nR = function(t, i, n, e, s) {
        if (s) {
            var r = function(t) {
                r[mh][Yr](r[xh], t)
            };
            return r[xh] = s,
            r[mh] = n,
            t.addEventListener(i, r, e),
            r
        }
        return t[yv](i, n, e),
        n
    },
    eR = function(t, i, n) {
        t.removeEventListener(i, n)
    },
    C = function(t) {
        t[fh] ? t[fh]() : t.returnValue = !1
    },
    j = function(t) {
        t[ch] ? t[ch]() : t.cancelBubble || (t[uh] = !0)
    },
    P = function(t) {
        C(t),
        j(t)
    };
    bN[ma] = cN ? 500 : 300,
    bN[gv] = cN ? 1500 : 1e3;
    var sR, rR = ja in t ? "mousewheel": pv;
    sR = rR + xv,
    cN && (sR += mv),
    sR = sR[sh](jh),
    Ii.prototype = {
        _nyj: function() {
            hR._o1urrentInteractionSupport == this && (delete hR._dragging, delete hR._o1urrentInteractionSupport),
            this._1t(),
            delete this._ny6,
            this._d2 && (delete this._d2[ya], delete this._d2[Kc], delete this._d2)
        },
        _l8: null,
        _id: function() {
            var t = this._n2;
            t && Mi[Yr](this, t)
        },
        destroy: function() {
            this._id()
        },
        _d2: null,
        _1t: function() {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        },
        _e6: function() {
            this.__o1ancelClick = !0,
            this._1t(),
            this._ie(this._d2, Ev),
            this._d0[Oa]()
        },
        _d0: null,
        _78: function(t) {
            var i = this._ny6;
            this._ny6 = mi(t),
            this._d0[nh](i, this._ny6, t)
        },
        _k4: function(t) {
            this._78(t),
            this._ie(t, wv),
            t[_a] && t[_a].length > 1 && this._ie(t, Tv)
        },
        _if: function(t) {
            cN || this._78(t);
            var i = this._d0[Ov]();
            i && (t.vx = i.x, t.vy = i.y),
            this._ie(t, Mv),
            this._d0.clear()
        },
        _e3: function(t) {
            this._d2 && (this._1t(), this._ie(t, Iv), this._d2 = null, this._ny6 = null)
        },
        _ie: function(t, i) {
            this._listener && this._listener[i] instanceof Function && this._listener[i].call(this._listener, t, this._l8 || this._n2)
        }
    };
    var hR = function(t) {
        this._l1 = t,
        N(this, hR, [t[kv]])
    };
    hR._o1urrentInteractionSupport = null,
    hR[bh] = {
        _52: function(t) {
            this._55(function(i) {
                i[Sv] instanceof Function && i[Sv](t, this._l1)
            })
        },
        _7e: function() {
            this._55(function(t) {
                t[Cv] instanceof Function && t.onClear(this._l1)
            })
        },
        _id: function() {
            this._2c && this._2i(this._2c),
            this._$v && this._2i(this._$v),
            this._nyj()
        },
        _l1: null,
        _2c: null,
        _$v: null,
        _7c: function(t) {
            return this._2c == t ? !1 : (this._2c && this._2c[Fr] && this._2i(this._2c), void(this._2c = t))
        },
        _$c: function(t) {
            this._$v || (this._$v = []),
            this._$v[Kr](t)
        },
        _6: function(t) {
            this._$v && 0 != this._$v.length && p(this._$v, t)
        },
        _ie: function(t, i, n) {
            this._l1[i] instanceof Function && this._l1[i][Yr](this._l1, t, n),
            this._2c && this._hg(t, i, this._2c, n),
            this._$v && this._hg(t, i, this._$v, n)
        },
        _55: function(t) {
            this._2c && l(this._2c, t, this),
            this._$v && l(this._$v, t, this)
        },
        _hg: function(t, i, n, e) {
            if (!S(n)) return void this._ny2(t, i, n, e);
            for (var s = 0; s < n[Fr]; s++) {
                var r = n[s];
                this._ny2(t, i, r, e)
            }
        },
        _ny2: function(t, i, n, e) {
            var s = n[i];
            s && s[Yr](n, t, this._l1, e)
        },
        _3o: function(t) {
            t[gc] instanceof Function && t[gc][Yr](t, this._l1)
        },
        _2i: function(t) {
            if (!S(t)) return void this._3o(t);
            for (var i = 0; i < t[Fr]; i++) {
                var n = t[i];
                n && this._3o(n)
            }
        }
    },
    D(hR, Ii),
    Si[bh] = {
        limitCount: 10,
        points: null,
        add: function(t, i, n) {
            var e = i[wa] - t[wa] || 1;
            n.interval = e;
            var s, r;
            if (!n.touches) return s = i.x - t.x,
            r = i.y - t.y,
            n.dx = s,
            n.dy = r,
            void this._lc(s, r, e);
            var h = n[_a][Fr];
            if (1 == h) s = n[_a][0][da] - t.touches[0][da],
            r = n.touches[0][Ea] - t[_a][0].clientY;
            else {
                for (var a, o, f, _ = [], c = [], u = 0, d = 0, l = 0, v = 0, b = 0, y = 0, g = 0, h = t.touches[Fr]; h > g; g++) {
                    a = t[_a][g];
                    var p = a[da],
                    x = a.clientY;
                    u += p,
                    d += x,
                    g && (b = Math.max(b, Math[po]((p - o) * (p - o) + (x - f) * (x - f)))),
                    o = p,
                    f = x,
                    _[Kr]({
                        x: p,
                        y: x
                    })
                }
                u /= h,
                d /= h;
                for (var g = 0,
                h = n[_a].length; h > g; g++) {
                    a = n[_a][g];
                    var p = a[da],
                    x = a.clientY;
                    l += p,
                    v += x,
                    g && (y = Math.max(y, Math[po]((p - o) * (p - o) + (x - f) * (x - f)))),
                    o = p,
                    f = x,
                    c[Kr]({
                        x: p,
                        y: x
                    })
                }
                if (l /= h, v /= h, s = l - u, r = v - d, b && y) {
                    var m = y / b;
                    n[Ta] && t[Ta] && (m = n[Ta] / t.scale),
                    n[tu] = {
                        x: l,
                        y: v,
                        clientX: l,
                        clientY: v
                    },
                    n[jv] = m,
                    n[Pv] = t
                }
            }
            n.dx = s,
            n.dy = r,
            this._lc(s, r, e)
        },
        _lc: function(t, i, n) {
            var e = {
                interval: n,
                dx: t,
                dy: i
            };
            this[$a][qr](0, 0, e),
            this[$a][Fr] > this[Av] && this.points[Lv]()
        },
        getCurrentSpeed: function() {
            if (!this[$a][Fr]) return null;
            for (var t = 0,
            i = 0,
            n = 0,
            e = 0,
            s = this[$a][Fr]; s > e; e++) {
                var r = this.points[e],
                h = r[zv];
                if (h > 300) break;
                if (t += r[zv], i += r.dx, n += r.dy, t > 500) break
            }
            return 0 == t || 0 == i && 0 == n ? null: {
                x: i / t,
                y: n / t
            }
        },
        clear: function() {
            this[$a] = []
        }
    };
    var aR, oR, fR, _R;
    nN ? (aR = Dv, oR = Nv, fR = Rv, _R = Bv) : eN ? (aR = $v, oR = Fv, fR = Gv, _R = Yv) : (aR = Uv, oR = Uv, fR = Ru, _R = Hv);
    var cR = qv,
    uR = Math.PI,
    dR = Math[xo],
    lR = Math[to],
    vR = 1.70158,
    bR = {
        swing: function(t) {
            return - Math[Hh](t * uR) / 2 + .5
        },
        easeNone: function(t) {
            return t
        },
        easeIn: function(t) {
            return t * t
        },
        easeOut: function(t) {
            return (2 - t) * t
        },
        easeBoth: function(t) {
            return (t *= 2) < 1 ? .5 * t * t: .5 * (1 - --t * (t - 2))
        },
        easeInStrong: function(t) {
            return t * t * t * t
        },
        easeOutStrong: function(t) {
            return 1 - --t * t * t * t
        },
        easeBothStrong: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t: .5 * (2 - (t -= 2) * t * t * t)
        },
        elasticIn: function(t) {
            var i = .3,
            n = i / 4;
            return 0 === t || 1 === t ? t: -(dR(2, 10 * (t -= 1)) * lR(2 * (t - n) * uR / i))
        },
        elasticOut: function(t) {
            var i = .3,
            n = i / 4;
            return 0 === t || 1 === t ? t: dR(2, -10 * t) * lR(2 * (t - n) * uR / i) + 1
        },
        elasticBoth: function(t) {
            var i = .45,
            n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t: 1 > t ? -.5 * dR(2, 10 * (t -= 1)) * lR(2 * (t - n) * uR / i) : dR(2, -10 * (t -= 1)) * lR(2 * (t - n) * uR / i) * .5 + 1
        },
        backIn: function(t) {
            return 1 === t && (t -= .001),
            t * t * ((vR + 1) * t - vR)
        },
        backOut: function(t) {
            return (t -= 1) * t * ((vR + 1) * t + vR) + 1
        },
        backBoth: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * (((vR *= 1.525) + 1) * t - vR) : .5 * ((t -= 2) * t * (((vR *= 1.525) + 1) * t + vR) + 2)
        },
        bounceIn: function(t) {
            return 1 - bR[Wv](1 - t)
        },
        bounceOut: function(t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t: 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
        },
        bounceBoth: function(t) {
            return.5 > t ? .5 * bR[Vv](2 * t) : .5 * bR[Wv](2 * t - 1) + .5
        }
    },
    yR = function(t) {
        this._k9 = t
    };
    yR[bh] = {
        _k9: null,
        _l4: function(t) {
            var i = Date[Va]();
            this._mj();
            var n = this;
            this._requestID = requestAnimationFrame(function e() {
                var s = Date[Va](),
                r = s - i;
                return ! r || n._k9 && n._k9(r) !== !1 ? (i = s, void(n._requestID = requestAnimationFrame(e))) : (n._mj(), void(t instanceof Function && t.call()))
            })
        },
        _mj: function() {
            return this._requestID ? (t.cancelAnimationFrame(this._requestID), void delete this._requestID) : !1
        },
        _f7: function() {
            return null != this._requestID
        }
    };
    var gR = function(t, i, n, e) {
        this._onStep = t,
        this._l8 = i || this,
        this._4a = e,
        n && n > 0 && (this._j3 = n)
    };
    gR[bh] = {
        _j3: 1e3,
        _4a: null,
        _f4: 0,
        _mj: function() {
            return this._f4 = 0,
            this._o1n = 0,
            R(this, gR, Xv)
        },
        _o1n: 0,
        _k9: function(t) {
            if (this._f4 += t, this._f4 >= this._j3) return this._onStep[Yr](this._l8, 1, (1 - this._o1n) * this._j3, t, this._j3),
            !1;
            var i = this._f4 / this._j3;
            return this._4a && (i = this._4a(i)),
            this._onStep[Yr](this._l8, i, (i - this._o1n) * this._j3, t, this._j3) === !1 ? !1 : void(this._o1n = i)
        }
    },
    D(gR, yR);
    var pR = function(t) {
        ni(t)
    },
    xR = {
        version: Kv,
        extend: D,
        doSuperConstructor: N,
        doSuper: R,
        createFunction: G,
        setClass: w,
        appendClass: T,
        removeClass: O,
        forEach: l,
        forEachReverse: b,
        isNumber: M,
        isString: I,
        isBoolean: k,
        isArray: S,
        eventPreventDefault: C,
        eventStopPropagation: j,
        stopEvent: P,
        callLater: m,
        nextFrame: E,
        forEachChild: e,
        forEachByDepthFirst: r,
        forEachByDepthFirstReverse: o,
        forEachByBreadthFirst: c,
        randomInt: A,
        randomBool: L,
        randomColor: q,
        addEventListener: nR,
        getFirstElementChildByTagName: xN
    };
    xR[Zv] = cN,
    xR.isIOS = oN,
    xR[Eo] = hi,
    xR[Jv] = ai,
    xR[Qv] = ON,
    xR[tb] = TN,
    xR[ib] = mN,
    xR.Insets = MN,
    xR[nb] = DN,
    xR.PropertyChangeEvent = NN,
    xR[eb] = qN,
    xR[sb] = GN,
    xR.Dispatcher = YN,
    xR.Position = IN,
    xR.Data = WN,
    xR.SelectionModel = KN,
    xR.DataModel = XN,
    xR[rb] = HN,
    xR[hb] = Pi,
    xR[ab] = Ci,
    xR.loadJSON = ji,
    xR[ob] = ki,
    xR.calculateDistance = EN,
    xR[fb] = gN,
    xR.DragSupport = Ii,
    xR[_b] = function(t) {
        alert(t)
    },
    xR[cb] = function(t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[Yr](e, s) : s
    },
    xR.confirm = function(t, i, n) {
        var e = confirm(t);
        return e && i ? i[Yr](n) : e
    },
    xR[ub] = bi;
    var mR = {
        IMAGE_ADJUST_FLIP: db,
        IMAGE_ADJUST_MIRROR: lb,
        SELECTION_TYPE_BORDER_RECT: vb,
        SELECTION_TYPE_BORDER: bb,
        SELECTION_TYPE_SHADOW: yb,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: gb,
        EDGE_TYPE_ELBOW_HORIZONTAL: pb,
        EDGE_TYPE_ELBOW_VERTICAL: xb,
        EDGE_TYPE_ORTHOGONAL: mb,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Eb,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: wb,
        EDGE_TYPE_HORIZONTAL_VERTICAL: Tb,
        EDGE_TYPE_VERTICAL_HORIZONTAL: Ob,
        EDGE_TYPE_EXTEND_TOP: Mb,
        EDGE_TYPE_EXTEND_LEFT: Ib,
        EDGE_TYPE_EXTEND_BOTTOM: kb,
        EDGE_TYPE_EXTEND_RIGHT: Sb,
        EDGE_TYPE_ZIGZAG: Cb,
        EDGE_CORNER_NONE: xu,
        EDGE_CORNER_ROUND: wo,
        EDGE_CORNER_BEVEL: jb,
        GROUP_TYPE_RECT: Pb,
        GROUP_TYPE_CIRCLE: Ab,
        GROUP_TYPE_ELLIPSE: Lb,
        SHAPE_CIRCLE: zb,
        SHAPE_RECT: Pb,
        SHAPE_ROUNDRECT: Db,
        SHAPE_STAR: Nb,
        SHAPE_TRIANGLE: Rb,
        SHAPE_HEXAGON: Bb,
        SHAPE_PENTAGON: $b,
        SHAPE_TRAPEZIUM: Fb,
        SHAPE_RHOMBUS: Gb,
        SHAPE_PARALLELOGRAM: Yb,
        SHAPE_HEART: Ub,
        SHAPE_DIAMOND: Hb,
        SHAPE_CROSS: qb,
        SHAPE_ARROW_STANDARD: Wb,
        SHAPE_ARROW_1: Vb,
        SHAPE_ARROW_2: Xb,
        SHAPE_ARROW_3: Kb,
        SHAPE_ARROW_4: Zb,
        SHAPE_ARROW_5: Jb,
        SHAPE_ARROW_6: Qb,
        SHAPE_ARROW_7: ty,
        SHAPE_ARROW_8: iy,
        SHAPE_ARROW_OPEN: ny
    };
    mR[ey] = sy,
    mR.LINE_CAP_TYPE_ROUND = wo,
    mR[ry] = hy,
    mR[ay] = jb,
    mR.LINE_JOIN_TYPE_ROUND = wo,
    mR[oy] = fy,
    bN.SELECTION_TYPE = mR.SELECTION_TYPE_SHADOW,
    bN.SELECTION_TOLERANCE = 3,
    bN.SELECTION_BORDER = 2,
    bN[_y] = 7,
    bN[cy] = X(3422561023),
    bN.SELECTION_TYPE = mR[uy],
    bN.BORDER_RADIUS = 10,
    bN[dy] = 10,
    bN[ly] = n,
    bN[Uc] = 10,
    bN[vy] = 200,
    bN[bo] = 1.2;
    var ER = t.devicePixelRatio || 1;
    1 > ER && (ER = 1);
    var wR;
    xR[by] = Fi;
    var TR = function(t, i, n, e) {
        var s = t - n,
        r = i - e;
        return s * s + r * r
    };
    rn[bh] = {
        equals: function(t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    },
    rn._kvCircle = function(t, i, n) {
        if (!n) return en(t, i);
        var e = TR(t.x, t.y, i.x, i.y),
        s = TR(t.x, t.y, n.x, n.y),
        r = TR(n.x, n.y, i.x, i.y);
        if (e + OR >= s + r) return en(t, i, 0, n);
        if (s + OR >= e + r) return en(t, n, 0, i);
        if (r + OR >= e + s) return en(i, n, 0, t);
        var h;
        Math.abs(n.y - i.y) < 1e-4 && (h = t, t = i, i = h),
        h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * ( - t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * ( - t.y + n.y)) / (2 * h),
        o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new rn(a, o, EN(a, o, t.x, t.y), t, i, n)
    };
    var OR = .01,
    MR = {
        _nz7: function(t, i, e, s, r) {
            var h = 0,
            a = 0,
            o = i._jf;
            if (e = e || 0, t.x === n) {
                var f = t[Xh],
                _ = t[Xd],
                c = !0;
                switch (f) {
                case CN:
                    c = !1;
                    break;
                case SN:
                    h += o / 2
                }
                switch (_) {
                case jN:
                    a -= e / 2;
                    break;
                case AN:
                    a += e / 2
                }
            } else h = t.x,
            a = t.y,
            Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
            r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o: s.x);
            var u = dn[Yr](i, h, a, c);
            return u ? (r || null == s || u.offset(s), u) : {
                x: 0,
                y: 0
            }
        },
        _ma: function(t, i) {
            var n = i[jo],
            e = i.points;
            switch (n) {
            case JR:
                t[yy](e[0], e[1], e[2], e[3], i._r);
                break;
            case VR:
                t[L_](e[0], e[1]);
                break;
            case XR:
                t[D_](e[0], e[1]);
                break;
            case KR:
                t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
                break;
            case ZR:
                t.bezierCurveTo(e[0], e[1], e[2], e[3], e[4], e[5]);
                break;
            case QR:
                t[N_]()
            }
        },
        _5m: function(t, i, n, e) {
            var s = i.type;
            if (s != VR && s != QR) {
                var r = n[Co],
                h = i[$a];
                switch (n.type == VR && t.add(r.x, r.y), s) {
                case JR:
                    bn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]),
                    t[nh](h[0], h[1]),
                    t[nh](i._p1x, i._p1y),
                    t[nh](i._p2x, i._p2y),
                    i._nzoundaryPoint1 && t.add(i._nzoundaryPoint1.x, i._nzoundaryPoint1.y),
                    i._nzoundaryPoint2 && t.add(i._nzoundaryPoint2.x, i._nzoundaryPoint2.y);
                    break;
                case XR:
                    t[nh](h[0], h[1]);
                    break;
                case KR:
                    Vi([r.x, r.y][Hr](h), t);
                    break;
                case ZR:
                    Ji([r.x, r.y][Hr](h), t);
                    break;
                case QR:
                    e && t.add(e.points[0], e[$a][1])
                }
            }
        },
        _5p: function(t, i, n) {
            var e = t[jo];
            if (e == VR) return 0;
            var s = i[Co],
            r = t[$a];
            switch (e == ZR && 4 == r[Fr] && (e = KR), e) {
            case XR:
                return EN(r[0], r[1], s.x, s.y);
            case JR:
                return t._jf;
            case KR:
                var h = Xi([s.x, s.y].concat(r));
                return t._lf = h,
                h(1);
            case ZR:
                var h = tn([s.x, s.y][Hr](r));
                return t._lf = h,
                h(1) || Qi([s.x, s.y][Hr](r));
            case QR:
                if (s && n) return t.points = n[$a],
                EN(n[$a][0], n.points[1], s.x, s.y)
            }
            return 0
        }
    },
    IR = /^data:image\/(\w+);base64,/i,
    kR = /^gif/i,
    SR = /^svg/i,
    CR = 10,
    jR = 11,
    PR = 12,
    AR = 20,
    LR = 30;
    bN[Ro] = 50,
    bN[Bo] = 30,
    bN[gy] = 1e6;
    var zR = 1,
    DR = 2,
    NR = 3;
    mn[bh] = {
        _kw: 0,
        _74: !0,
        _l0: null,
        _jw: null,
        _mc: null,
        _mf: null,
        _nz0: n,
        _9h: n,
        _7m: function() {
            return this._kw == zR
        },
        getBounds: function(t) {
            return this._mf == LR ? this._mc[mo](t) : (this._74 && this._fu(), this)
        },
        validate: function() {
            this._74 && this._fu()
        },
        _fu: function() {
            if (this._74 = !1, this._mf == LR) return this._mc[qo](),
            void this[py](this._mc.bounds);
            if (this._mf == AR) return void this._95();
            if (this._kw != zR) try {
                this._dv()
            } catch(t) {
                this._kw = NR,
                xR.error(t)
            }
        },
        _5k: function() {
            this._eh(),
            this._dispatcher[Oa](),
            delete this._dispatcher
        },
        _ia: function(t) {
            this._l0 && this._l0[xy] && this._l0.parentNode[my](this._l0),
            this._kw = NR,
            xR[Yh](Ey + this._mc),
            this._pixels = null,
            this._jw = null,
            this._l0 = null,
            t !== !1 && this._5k()
        },
        _dv: function() {
            var t = this._mc;
            if (this._kw = zR, this._dispatcher = new YN, this._mf == PR) {
                for (var n in fB) this[n] = fB[n];
                return void Qn(this._mc, this, this._dm, this._ia, this._fe)
            }
            this._l0 || (QD ? (this._l0 = i[uo](lu), this._l0[ra][wy] = pu, i.body[mc](this._l0)) : this._l0 = new Image),
            this._l0[Ty] = t,
            !QD && this._l0[io] ? (this._l0.onload = this._l0[Qf] = null, this._87()) : (this._l0[Oy] = QD ?
            function(t) {
                setTimeout(this._87[My](this, t), 100)
            } [My](this) : this._87[My](this), this._l0.onerror = this._ia[My](this))
        },
        _87: function() {
            this._kw = DR;
            var t = this._l0[io],
            i = this._l0[no];
            if (this._l0[xy] && this._l0.parentNode[my](this._l0), !t || !i) return void this._ia();
            this[io] = t,
            this[no] = i;
            var n = this._e5();
            n[io] = t,
            n.height = i,
            n.g.drawImage(this._l0, 0, 0, t, i),
            this._pixels = QD && this._mf == jR ? null: kn(n),
            this._5k()
        },
        _95: function() {
            var t = this._mc;
            if (! (t[Do] instanceof Function)) return void this._ia(!1);
            if (t[Iy] === !1 && t.width && t.height) return this[io] = t.width,
            void(this[no] = t[no]);
            var i = t[io] || bN.IMAGE_MAX_SIZE,
            n = t.height || bN[vy],
            e = this._e5();
            e.width = i,
            e[no] = n;
            var s = e.g;
            t[Do](s);
            var r = s[Mo](0, 0, i, n),
            h = Cn(r[Io], i, n);
            this.x = h._x,
            this.y = h._y,
            this.width = h._width,
            this[no] = h._height,
            e[io] = this[io],
            e[no] = this[no],
            s[ff](r, -this.x, -this.y),
            this._pixels = h
        },
        _e5: function() {
            return this._jw || (this._jw = Fi())
        },
        _77: function(t, i, n, e, s, r) {
            i.save(),
            i[Pb](0, 0, e, s),
            i[ky] = r || Sy,
            i[Cy](),
            i[jy](),
            i[Py] = tu,
            i.textBaseline = Ay,
            i[ky] = Ly;
            var h = 6 * (i[ho][so] || 1);
            i[vo] = zy + h + "px Verdana,helvetica,arial,sans-serif",
            i[Dy] = Ny,
            i[ko] = 1,
            i[Ry](t, e / 2 + .5, s / 2 + .5),
            i[Dy] = By,
            i[Ry](t, e / 2 - .5, s / 2 - .5),
            i[$y](t, e / 2, s / 2),
            i[Fy]()
        },
        draw: function(t, i, n, e, s, r) {
            if (this[io] && this[no]) {
                i = i || 1,
                e = e || 1,
                s = s || 1;
                var h = this.width * e,
                a = this[no] * s;
                if (r && n[Gy] && (t[Gy] = n[Gy], t.shadowBlur = (n[Yy] || 0) * i, t.shadowOffsetX = (n.shadowOffsetX || 0) * i, t[Uy] = (n[Uy] || 0) * i), this._kw == zR) return this._77(Hy, t, i, h, a, n[qy]);
                if (this._kw == NR) return this._77(Wy, t, i, h, a, n[qy]);
                if (this._mf == LR) return t.scale(e, s),
                void this._mc[Do](t, i, n);
                var o = this._g4(i, e, s);
                return o ? ((this.x || this.y) && t[Ho](this.x * e, this.y * s), t[Ta](e / o.scale, s / o[Ta]), void o._ma(t, n[qy], n[Vy])) : void this._kl(t, i, e, s, this[io] * e, this.height * s, n)
            }
        },
        _kl: function(t, i, n, e, s, r, h) {
            if (this._mf == AR) return 1 != n && 1 != e && t[Ta](n, e),
            void this._mc.draw(t, h);
            if (this._l0) {
                if (!sN) return void t[Xy](this._l0, 0, 0, s, r);
                var n = i * s / this[io],
                e = i * r / this[no];
                t[Ta](1 / n, 1 / e),
                t[Xy](this._l0, 0, 0, s * n, r * e)
            }
        },
        _jy: null,
        _g4: function(t, i, n) {
            if (this._mf == AR && this._mc.cacheable === !1) return null;
            if (this._mf == CR || (t *= Math.max(i, n)) <= 1) return this._defaultCache || (this._defaultCache = this._gb(this._jw || this._l0, 1)),
            this._defaultCache;
            var e = this._jy[Ky] || 0;
            if (t = Math[Wr](t), e >= t) {
                for (var s = t,
                r = this._jy[s]; ! r && ++s <= e;) r = this._jy[s];
                if (r) return r
            }
            t % 2 && t++;
            var h = this[io] * t,
            a = this[no] * t;
            if (h * a > bN[gy]) return null;
            var o = Fi(h, a);
            return (this.x || this.y) && o.g[Ho]( - this.x * t, -this.y * t),
            this._kl(o.g, 1, t, t, h, a),
            this._gb(o, t)
        },
        _gb: function(t, i) {
            var n = new eB(t, i);
            return this._jy[i] = n,
            this._jy[Ky] = i,
            n
        },
        hitTest: function(t, i, n) {
            if (this._mf == LR) return this._mc[ru][gh](this._mc, arguments);
            if (! (this._pixels || this._l0 && this._l0._pixels)) return ! 0;
            var e = this._pixels || this._l0._pixels;
            return e._io(t, i, n)
        },
        _eh: function() {
            this._dispatcher && this._dispatcher.onEvent(new DN(this, Zy, Jy, this._l0))
        },
        _nyg: function(t, i) {
            this._dispatcher && this._dispatcher[hd](t, i)
        },
        _6x: function(t, i) {
            this._dispatcher && this._dispatcher[Ll](t, i)
        },
        _o18: function(t) {
            this._jy = {},
            (t || this[io] * this[no] > 1e5) && (this._l0 = null, this._jw = null)
        }
    },
    D(mn, ON);
    var RR = {};
    xR[Xy] = Mn,
    xR[Qy] = En,
    xR[tg] = Tn,
    xR[ig] = function() {
        var t = [];
        for (var i in RR) t[Kr](i);
        return t
    };
    var BR = function(t, i, n, e, s, r) {
        this[jo] = t,
        this[ng] = i,
        this.positions = n,
        this[Qc] = e || 0,
        this.tx = s || 0,
        this.ty = r || 0
    };
    mR[eg] = Qd,
    mR[sg] = Zd,
    BR.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: IN[rg],
        isEmpty: function() {
            return null == this[ng] || 0 == this[ng][Fr]
        },
        _6j: function() {
            var t = this.colors[Fr];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[Kr](n * e);
            return this[hg] || (this.positions = i),
            i
        },
        generatorGradient: function(t) {
            if (null == this.colors || 0 == this.colors.length) return null;
            var i, n = Yi();
            if (this[jo] == mR[sg]) {
                var e = this[Qc];
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var r = Math[Uh](t.height, t[io]),
                    h = Math[po](t[io] * t[io] + t.height * t.height),
                    a = r - e;
                    s = Math[Hh](a) * h
                } else {
                    var r = Math.atan2(t[io], t[no]),
                    h = Math[po](t[io] * t.width + t.height * t[no]),
                    a = r - (e - Math.PI / 2);
                    s = Math.cos(a) * h
                }
                var o = s / 2,
                f = o * Math.cos(e),
                _ = o * Math[to](e),
                c = t.x + t[io] / 2 - f,
                u = t.y + t.height / 2 - _,
                d = t.x + t[io] / 2 + f,
                l = t.y + t[no] / 2 + _;
                i = n.createLinearGradient(c, u, d, l)
            } else {
                if (! (this[jo] = mR[eg])) return null;
                var v = oi(this[Cf], t.width, t[no]);
                v.x += t.x,
                v.y += t.y,
                this.tx && (v.x += Math[Vh](this.tx) < 1 ? t[io] * this.tx: this.tx),
                this.ty && (v.y += Math.abs(this.ty) < 1 ? t[no] * this.ty: this.ty);
                var b = EN(v.x, v.y, t.x, t.y);
                b = Math.max(b, EN(v.x, v.y, t.x, t.y + t.height)),
                b = Math[sf](b, EN(v.x, v.y, t.x + t.width, t.y + t[no])),
                b = Math.max(b, EN(v.x, v.y, t.x + t[io], t.y)),
                i = n[ag](v.x, v.y, 0, v.x, v.y, b)
            }
            var y = this.colors,
            g = this[hg];
            g && g[Fr] == y.length || (g = this._6j());
            for (var p = 0,
            x = y[Fr]; x > p; p++) i[og](g[p], y[p]);
            return i
        }
    };
    var $R = new BR(mR.GRADIENT_TYPE_LINEAR, [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
    FR = new BR(mR[sg], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], 0),
    GR = (new BR(mR[sg], [X(1154272460), X(1442840575)], [.1, .9], 0), new BR(mR[eg], [X(2298478591), X(1156509422), X(1720223880), X(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
    YR = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)],
    UR = [0, .12, .28, .45, .6, .75, .8, 1],
    HR = new BR(mR[sg], YR, UR),
    qR = new BR(mR[sg], YR, UR, Math.PI / 2),
    WR = new BR(mR[eg], YR, UR);
    BR[fg] = $R,
    BR[_g] = FR,
    BR[cg] = GR,
    BR[ug] = HR,
    BR[dg] = qR,
    BR.RAINBOW_RADIAL_GRADIENT = WR;
    var VR = tl,
    XR = Zd,
    KR = lg,
    ZR = Jd,
    JR = vg,
    QR = bg;
    mR.SEGMENT_MOVE_TO = VR,
    mR[yg] = XR,
    mR[gg] = KR,
    mR.SEGMENT_CURVE_TO = ZR,
    mR[pg] = JR,
    mR[xg] = QR;
    var tB = function(t, i) {
        this.id = ++KD,
        S(t) ? this[$a] = t: (this[jo] = t, this[$a] = i)
    };
    tB[bh] = {
        toJSON: function() {
            var t = {
                type: this.type,
                points: this[$a]
            };
            return this.invalidTerminal && (t[Ko] = !0),
            t
        },
        parseJSON: function(t) {
            this.type = t[jo],
            this.points = t.points,
            this[Ko] = t.invalidTerminal
        },
        points: null,
        type: XR,
        clone: function() {
            return new tB(this[jo], y(this[$a]))
        },
        move: function(t, i) {
            if (this[$a]) for (var n = 0,
            e = this.points[Fr]; e > n; n++) {
                var s = this[$a][n];
                xR[mg](s) && (this[$a][n] += n % 2 == 0 ? t: i)
            }
        }
    },
    Z(tB[bh], {
        lastPoint: {
            get: function() {
                return this[jo] == JR ? {
                    x: this._p2x,
                    y: this._p2y
                }: {
                    x: this[$a][this[$a][Fr] - 2],
                    y: this[$a][this[$a][Fr] - 1]
                }
            }
        },
        firstPoint: {
            get: function() {
                return {
                    x: this.points[0],
                    y: this[$a][1]
                }
            }
        }
    }),
    xR[Eg] = tB;
    var iB = 0,
    nB = function(t) {
        this[Of] = new ON,
        this._fy = t || []
    };
    nB[bh] = {
        toJSON: function() {
            var t = [];
            return this._fy[Kf](function(i) {
                t[Kr](i.toJSON())
            }),
            t
        },
        parseJSON: function(t) {
            var i = this._fy;
            t.forEach(function(t) {
                i[Kr](new tB(t[jo], t.points))
            })
        },
        clear: function() {
            this._fy[Fr] = 0,
            this.bounds.clear(),
            this._jf = 0,
            this._74 = !0
        },
        _dt: !0,
        _73: function(t, i) {
            this._dt && 0 === this._fy.length && t != VR && this._fy[Kr](new tB(VR, [0, 0])),
            this._fy.push(new tB(t, i)),
            this._74 = !0
        },
        add: function(t) {
            this._fy.push(t),
            this._74 = !0
        },
        removePathSegment: function(t) {
            return t >= this._fy.length ? !1 : (this._fy[qr](t, 1), void(this._74 = !0))
        },
        moveTo: function(t, i) {
            this._73(VR, [t, i])
        },
        lineTo: function(t, i) {
            this._73(XR, [t, i])
        },
        quadTo: function(t, i, n, e) {
            this._73(KR, [t, i, n, e])
        },
        curveTo: function(t, i, n, e, s, r) {
            this._73(ZR, [t, i, n, e, s, r])
        },
        arcTo: function(t, i, n, e, s) {
            this._73(JR, [t, i, n, e, s])
        },
        closePath: function() {
            this._73(QR)
        },
        _83: function(t, i, n, e, s) {
            if (e[wg]) {
                if (n == mR[uy]) {
                    if (!e[Tg]) return;
                    return t[Gy] = e.selectionColor,
                    t.shadowBlur = e.selectionShadowBlur * i,
                    t[Og] = (e.selectionShadowOffsetX || 0) * i,
                    void(t[Uy] = (e.selectionShadowOffsetY || 0) * i)
                }
                if (n == mR[Mg]) {
                    if (!e.selectionBorder) return;
                    t[Dy] = e[wg],
                    t.lineWidth = e[Ig] + (s.lineWidth || 0),
                    this._ma(t),
                    t[kg]()
                }
            }
        },
        _74: !0,
        _fy: null,
        _jf: 0,
        lineCap: sy,
        lineJoin: wo,
        draw: function(t, i, n, e, s) {
            t[Sg] = n.lineCap || this.lineCap,
            t.lineJoin = n[Cg] || this[Cg],
            e && (s || (s = n), this._83(t, i, s.selectionType, s, n)),
            n[jg] && (this._ma(t), t[ko] = n[ko] + 2 * (n[Pg] || 0), t.strokeStyle = n[jg], t[kg]()),
            t[ko] = 0,
            this._ma(t),
            n[Ag] && (t[ky] = n[qy] || n.fillColor, t[Cy]()),
            n[Lg] && (t[ky] = n._fillGradient || n.fillGradient, t[Cy]()),
            n[ko] && (t[ko] = n.lineWidth, n[zf] && (t[zf] = n[zf], t[$f] = n.lineDashOffset), t.strokeStyle = n.renderColor || n.strokeStyle, t[kg](), t.lineDash = [])
        },
        _ma: function(t) {
            t[zg]();
            for (var i, n, e = 0,
            s = this._fy.length; s > e; e++) i = this._fy[e],
            MR._ma(t, i, n),
            n = i
        },
        invalidate: function() {
            this._74 = !0
        },
        validate: function() {
            if (this._74 = !1, this.bounds.clear(), this._jf = 0, 0 != this._fy.length) for (var t, i, n = this._fy,
            e = 1,
            s = n[0], r = s, h = n[Fr]; h > e; e++) t = n[e],
            t[jo] == VR ? r = t: (MR._5m(this.bounds, t, s, r), i = MR._5p(t, s, r), t._jf = i, this._jf += i),
            s = t
        },
        getBounds: function(t, i) {
            if (this._74 && this[qo](), i = i || new ON, t) {
                var n = t / 2;
                i[Th](this[Of].x - n, this[Of].y - n, this[Of].width + t, this.bounds[no] + t)
            } else i[Th](this[Of].x, this[Of].y, this[Of][io], this.bounds.height);
            return i
        },
        hitTest: function(t, i, n, e, s, r) {
            return un[Yr](this, t, i, n, e, s, r)
        },
        toSegments: function() {
            return [][Hr](this._fy)
        },
        generator: function(t, i, n, e, s) {
            return cn.call(this, t, i, n, e, s)
        },
        getLocation: function(t, i) {
            return dn[Yr](this, t, i || 0)
        }
    },
    Z(nB[bh], {
        segments: {
            get: function() {
                return this._fy
            },
            set: function(t) {
                this.clear(),
                this._fy = t
            }
        },
        length: {
            get: function() {
                return this._74 && this.validate(),
                this._jf
            }
        },
        _empty: {
            get: function() {
                return 0 == this._fy[Fr]
            }
        }
    }),
    Sn[bh] = {
        _18: function(t, i) {
            var n, e, s, r, h, a = t[Fr],
            o = 0,
            f = 0;
            for (h = 0; a > h; h += 4) if (t[h + 3] > 0) {
                n = (h + 4) / i / 4 | 0;
                break
            }
            for (h = a - 4; h >= 0; h -= 4) if (t[h + 3] > 0) {
                e = (h + 4) / i / 4 | 0;
                break
            }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    s = o;
                    break
                }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++) if (t[f * i * 4 + 4 * o + 3] > 0) {
                    r = o;
                    break
                }
                if (r >= 0) break
            }
            this._x = s,
            this._y = n,
            this._width = r - s + 1,
            this._height = e - n + 1,
            this._ji = new ON(s, n, this._width, this._height),
            this._pixelSize = this._width * this._height,
            this._originalPixelsWidth = i,
            this._originalPixels = t
        },
        _f5: function(t, i) {
            return this._originalPixels[4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        },
        _io: function(t, i, n) {
            if (t = Math[wo](t - this._x), i = Math.round(i - this._y), !n || 1 >= n) return this._f5(t, i);
            n = 0 | n;
            for (var e = t,
            s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._f5(e, s)) return ! 0; ++e
                }++s
            }
            return ! 1
        }
    },
    mR[Dg] = Ng,
    mR[Qo] = Rg,
    mR[tf] = Bg,
    mR[nf] = $g,
    mR.BLEND_MODE_LIGHTEN = Fg,
    mR[rf] = Gg,
    mR[of] = Yg,
    bN[Jo] = mR[nf];
    var eB = function(t, i, n) {
        this._jw = t,
        this.scale = i || 1,
        t instanceof Image && (n = !1),
        this._im = n
    };
    eB[bh] = {
        scale: 1,
        _jw: null,
        _jy: null,
        _im: !0,
        _ma: function(t, i, n) {
            if (!i || this._im === !1) return void t[Xy](this._jw, 0, 0);
            this._jy || (this._jy = {});
            var e = i + n,
            s = this._jy[e];
            if (s || (s = An(this._jw, i, n), s || (this._im = !1), this._jy[e] = s || this._jw), s) if (QD) try {
                t[Xy](s, 0, 0)
            } catch(r) {} else t.drawImage(s, 0, 0)
        }
    };
    var sB = function(t, i, n, e, s, r, h, a, o) {
        this._me = Nn(t, i, n, e, s, r, h, a, o)
    },
    rB = {
        server: {
            draw: function(t) {
                t[Ug](),
                t[Ho](0, 0),
                t[zg](),
                t[L_](0, 0),
                t.lineTo(40, 0),
                t[D_](40, 40),
                t[D_](0, 40),
                t[N_](),
                t[jy](),
                t[Ho](0, 0),
                t.translate(0, 0),
                t[Ta](1, 1),
                t[Ho](0, 0),
                t[Dy] = Hg,
                t.lineCap = sy,
                t[Cg] = fy,
                t[qg] = 4,
                t[Ug](),
                t[Ug](),
                t.restore(),
                t[Ug](),
                t.restore(),
                t[Ug](),
                t.restore(),
                t[Ug](),
                t.restore(),
                t.save(),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.save(),
                t.restore(),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t.restore(),
                t[Ug](),
                t[Fy](),
                t.restore(),
                t.save();
                var i = t[Wg](6.75, 3.9033, 30.5914, 27.7447);
                i.addColorStop(.0493, Vg),
                i[og](.0689, Xg),
                i[og](.0939, Kg),
                i[og](.129, Zg),
                i.addColorStop(.2266, Jg),
                i[og](.2556, Qg),
                i[og](.2869, tp),
                i.addColorStop(.3194, ip),
                i.addColorStop(.3525, np),
                i.addColorStop(.3695, ep),
                i[og](.5025, sp),
                i[og](.9212, rp),
                i[og](1, hp),
                t[ky] = i,
                t[zg](),
                t.moveTo(25.677, 4.113),
                t.bezierCurveTo(25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
                t[ap](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
                t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
                t[ap](9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
                t[ap](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
                t[ap](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
                t[ap](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
                t[ap](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
                t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
                t[ap](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
                t[ap](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
                t[ap](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
                t[ap](25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
                t.bezierCurveTo(25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
                t[N_](),
                t[Cy](),
                t.stroke(),
                t[Fy](),
                t[Ug](),
                t.save(),
                t[ky] = op,
                t.beginPath(),
                t[L_](19.763, 6.645),
                t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
                t[ap](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
                t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
                t[ap](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
                t[D_](21.398, 36.253),
                t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
                t[ap](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
                t[ap](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
                t[ap](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
                t[D_](4.675, 37.877),
                t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
                t[ap](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
                t[ap](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
                t[ap](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
                t[D_](2.924, 8.431),
                t[ap](2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
                t[ap](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
                t[ap](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
                t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
                t.lineTo(19.763, 6.645),
                t.closePath(),
                t[Cy](),
                t.stroke(),
                t[Fy](),
                t[Fy](),
                t[Ug](),
                t[ky] = fp,
                t[zg](),
                t[_p](12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
                t[N_](),
                t[Cy](),
                t.stroke(),
                t[Fy](),
                t[Ug](),
                t[ky] = op,
                t[zg](),
                t[_p](12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
                t[N_](),
                t[Cy](),
                t[kg](),
                t.restore(),
                t[Ug](),
                t[ky] = fp,
                t.beginPath(),
                t[L_](19.377, 17.247),
                t[ap](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
                t[D_](5.882, 18.108999999999998),
                t[ap](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
                t[D_](5.02, 11.144),
                t[ap](5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
                t[D_](18.516, 10.281),
                t[ap](18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
                t[D_](19.377, 17.247),
                t[N_](),
                t.fill(),
                t[kg](),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t.fillStyle = op,
                t[zg](),
                t.moveTo(18.536, 13.176),
                t[ap](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
                t[D_](6.479, 13.794),
                t[ap](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
                t.lineTo(5.861, 11.84),
                t[ap](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
                t.lineTo(17.918, 11.221),
                t[ap](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
                t[D_](18.535, 13.176),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t.save(),
                t[ky] = op,
                t[zg](),
                t[L_](18.536, 16.551),
                t[ap](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
                t[D_](6.479, 17.168999999999997),
                t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
                t.lineTo(5.861, 15.215999999999998),
                t[ap](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
                t.lineTo(17.918, 14.596999999999998),
                t.bezierCurveTo(18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
                t.lineTo(18.535, 16.551),
                t[N_](),
                t[Cy](),
                t[kg](),
                t.restore(),
                t.restore(),
                t[Fy]()
            }
        },
        exchanger2: {
            draw: function(t) {
                t.save(),
                t.translate(0, 0),
                t[zg](),
                t.moveTo(0, 0),
                t[D_](40, 0),
                t[D_](40, 40),
                t.lineTo(0, 40),
                t[N_](),
                t[jy](),
                t[Ho](0, 0),
                t[Ho](0, 0),
                t.scale(1, 1),
                t[Ho](0, 0),
                t.strokeStyle = Hg,
                t[Sg] = sy,
                t[Cg] = fy,
                t[qg] = 4,
                t[Ug](),
                t.save(),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.save(),
                t.restore(),
                t.save(),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.save(),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t.restore(),
                t[Ug](),
                t.restore(),
                t[Ug](),
                t[Fy](),
                t[Fy](),
                t[Ug]();
                var i = t[Wg](.4102, 24.3613, 39.5898, 24.3613);
                i.addColorStop(0, Vg),
                i[og](.0788, Jg),
                i[og](.2046, cp),
                i[og](.3649, up),
                i.addColorStop(.5432, dp),
                i[og](.6798, lp),
                i[og](.7462, vp),
                i[og](.8508, bp),
                i[og](.98, Qg),
                i.addColorStop(1, yp),
                t[ky] = i,
                t.beginPath(),
                t.moveTo(.41, 16.649),
                t[ap](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002),
                t[ap](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
                t[ap](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
                t[ap](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
                t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
                t[ap](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
                t[ap](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t[ky] = op,
                t[zg](),
                t[L_](16.4, 25.185),
                t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
                t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999),
                t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
                t[ap](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
                t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
                t[ap](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
                t[ap](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
                t[ap](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
                t[ap](23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
                t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t[Fy](),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t[Ug](),
                t[Ug](),
                t[Ug](),
                t[ky] = gp,
                t.beginPath(),
                t[L_](5.21, 21.754),
                t[D_](8.188, 17.922),
                t[D_](9.53, 18.75),
                t[D_](15.956, 16.004),
                t[D_](18.547, 17.523),
                t.lineTo(12.074, 20.334),
                t[D_](13.464, 21.204),
                t.lineTo(5.21, 21.754),
                t[N_](),
                t.fill(),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t[Ug](),
                t.fillStyle = gp,
                t[zg](),
                t[L_](17.88, 14.61),
                t[D_](9.85, 13.522),
                t.lineTo(11.703, 12.757),
                t[D_](7.436, 10.285),
                t.lineTo(10.783, 8.942),
                t[D_](15.091, 11.357),
                t[D_](16.88, 10.614),
                t.lineTo(17.88, 14.61),
                t.closePath(),
                t[Cy](),
                t.stroke(),
                t.restore(),
                t.restore(),
                t[Ug](),
                t[Ug](),
                t[ky] = gp,
                t.beginPath(),
                t[L_](17.88, 14.61),
                t.lineTo(9.85, 13.522),
                t[D_](11.703, 12.757),
                t[D_](7.436, 10.285),
                t[D_](10.783, 8.942),
                t[D_](15.091, 11.357),
                t[D_](16.88, 10.614),
                t[D_](17.88, 14.61),
                t.closePath(),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t.restore(),
                t[Ug](),
                t[Ug](),
                t[Ug](),
                t.fillStyle = gp,
                t[zg](),
                t.moveTo(23.556, 15.339),
                t.lineTo(20.93, 13.879),
                t.lineTo(26.953, 11.304),
                t[D_](25.559, 10.567),
                t.lineTo(33.251, 9.909),
                t[D_](31.087, 13.467),
                t[D_](29.619, 12.703),
                t[D_](23.556, 15.339),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t.restore(),
                t.save(),
                t.save(),
                t[Ug](),
                t.fillStyle = gp,
                t[zg](),
                t[L_](30.028, 23.383),
                t[D_](24.821, 20.366),
                t.lineTo(22.915, 21.227),
                t.lineTo(21.669, 16.762),
                t[D_](30.189, 17.942),
                t[D_](28.33, 18.782),
                t.lineTo(33.579, 21.725),
                t.lineTo(30.028, 23.383),
                t.closePath(),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t.fillStyle = gp,
                t[zg](),
                t[L_](30.028, 23.383),
                t[D_](24.821, 20.366),
                t[D_](22.915, 21.227),
                t.lineTo(21.669, 16.762),
                t[D_](30.189, 17.942),
                t[D_](28.33, 18.782),
                t[D_](33.579, 21.725),
                t[D_](30.028, 23.383),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t.restore(),
                t[Fy](),
                t[Fy](),
                t[Fy]()
            }
        },
        exchanger: {
            draw: function(t) {
                t.save(),
                t[Ho](0, 0),
                t[zg](),
                t[L_](0, 0),
                t.lineTo(40, 0),
                t.lineTo(40, 40),
                t[D_](0, 40),
                t[N_](),
                t.clip(),
                t[Ho](0, 0),
                t[Ho](0, 0),
                t.scale(1, 1),
                t[Ho](0, 0),
                t[Dy] = Hg,
                t.lineCap = sy,
                t[Cg] = fy,
                t[qg] = 4,
                t[Ug](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.save(),
                t.restore(),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t.restore(),
                t[Fy](),
                t.save();
                var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                i[og](0, pp),
                i.addColorStop(.0788, xp),
                i[og](.352, mp),
                i.addColorStop(.6967, Ep),
                i[og](.8916, wp),
                i[og](.9557, Tp),
                i.addColorStop(1, Op),
                t[ky] = i,
                t[zg](),
                t[L_](39.449, 12.417),
                t[D_](39.384, 9.424),
                t[ap](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024),
                t[ap]( - .026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002),
                t[ap](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437),
                t.bezierCurveTo(1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
                t[ap](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
                t[ap](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
                t[ap](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
                t[ap](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
                t[D_](37.711, 30.316999999999997),
                t[D_](39.281, 16.498999999999995),
                t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
                t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
                t[N_](),
                t[Cy](),
                t[kg](),
                t.restore(),
                t[Ug](),
                t[Ug](),
                t.save(),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.save(),
                t.restore(),
                t.save(),
                t.restore(),
                t.save(),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.restore(),
                t[Ug]();
                var i = t[Wg](19.8052, 7.7949, 19.8052, 24.7632);
                i.addColorStop(0, Mp),
                i[og](.1455, Ip),
                i.addColorStop(.2975, kp),
                i.addColorStop(.4527, Sp),
                i[og](.6099, Cp),
                i[og](.7687, jp),
                i[og](.9268, Pp),
                i[og](.9754, Ap),
                i[og](1, Lp),
                t.fillStyle = i,
                t[zg](),
                t.moveTo(33.591, 24.763),
                t.bezierCurveTo(23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
                t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003),
                t[ap](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
                t.bezierCurveTo(4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
                t[ap](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
                t[ap](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
                t[ap](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
                t[ap](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
                t.bezierCurveTo(37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
                t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
                t[ap](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
                t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
                t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
                t[N_](),
                t.fill(),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t.save(),
                t[ky] = gp,
                t.beginPath(),
                t[L_](10.427, 19.292),
                t[D_](5.735, 16.452),
                t[D_](12.58, 13.8),
                t[D_](12.045, 15.07),
                t[D_](20.482, 15.072),
                t[D_](19.667, 17.887),
                t.lineTo(11.029, 17.851),
                t.lineTo(10.427, 19.292),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t.fillStyle = gp,
                t[zg](),
                t[L_](13.041, 13.042),
                t[D_](8.641, 10.73),
                t.lineTo(14.82, 8.474),
                t[D_](14.373, 9.537),
                t.lineTo(22.102, 9.479),
                t.lineTo(21.425, 11.816),
                t.lineTo(13.54, 11.85),
                t[D_](13.041, 13.042),
                t.closePath(),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Fy](),
                t.save(),
                t.save(),
                t.fillStyle = gp,
                t[zg](),
                t[L_](29.787, 16.049),
                t[D_](29.979, 14.704),
                t[D_](21.51, 14.706),
                t[D_](22.214, 12.147),
                t[D_](30.486, 12.116),
                t[D_](30.653, 10.926),
                t.lineTo(36.141, 13.4),
                t[D_](29.787, 16.049),
                t.closePath(),
                t[Cy](),
                t.stroke(),
                t.restore(),
                t[Fy](),
                t.save(),
                t[Ug](),
                t[ky] = gp,
                t[zg](),
                t[L_](28.775, 23.14),
                t[D_](29.011, 21.49),
                t[D_](19.668, 21.405),
                t[D_](20.523, 18.295),
                t[D_](29.613, 18.338),
                t.lineTo(29.815, 16.898),
                t.lineTo(35.832, 19.964),
                t[D_](28.775, 23.14),
                t[N_](),
                t.fill(),
                t[kg](),
                t.restore(),
                t[Fy](),
                t.restore(),
                t[Fy]()
            }
        },
        cloud: {
            draw: function(t) {
                t[Ug](),
                t[zg](),
                t[L_](0, 0),
                t[D_](90.75, 0),
                t[D_](90.75, 62.125),
                t[D_](0, 62.125),
                t.closePath(),
                t.clip(),
                t[Dy] = Hg,
                t.lineCap = sy,
                t.lineJoin = fy,
                t.miterLimit = 4,
                t[Ug]();
                var i = t[Wg](44.0054, 6.4116, 44.0054, 51.3674);
                i[og](0, "rgba(159, 160, 160, 0.7)"),
                i[og](.9726, zp),
                t[ky] = i,
                t[zg](),
                t[L_](57.07, 20.354),
                t[ap](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
                t[ap](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
                t[ap](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
                t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
                t[ap](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
                t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
                t[ap](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
                t.bezierCurveTo(43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
                t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
                t.bezierCurveTo(66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
                t[ap](73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
                t[N_](),
                t[Cy](),
                t[kg](),
                t.restore(),
                t[Fy]()
            }
        },
        node: {
            width: 60,
            height: 100,
            draw: function(t) {
                t.save(),
                t.translate(0, 0),
                t[zg](),
                t[L_](0, 0),
                t[D_](40, 0),
                t[D_](40, 40),
                t.lineTo(0, 40),
                t[N_](),
                t[jy](),
                t.translate(0, 0),
                t.translate(0, 0),
                t.scale(1, 1),
                t.translate(0, 0),
                t.strokeStyle = Hg,
                t.lineCap = sy,
                t.lineJoin = fy,
                t.miterLimit = 4,
                t[Ug](),
                t[ky] = Dp,
                t[zg](),
                t.moveTo(13.948, 31.075),
                t[D_](25.914, 31.075),
                t[Np](25.914, 31.075, 25.914, 31.075),
                t.lineTo(25.914, 34.862),
                t.quadraticCurveTo(25.914, 34.862, 25.914, 34.862),
                t[D_](13.948, 34.862),
                t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862),
                t[D_](13.948, 31.075),
                t[Np](13.948, 31.075, 13.948, 31.075),
                t.closePath(),
                t[Cy](),
                t.stroke(),
                t[Fy](),
                t[Ug](),
                t[ky] = Rp,
                t.beginPath(),
                t[L_](29.679, 35.972),
                t.bezierCurveTo(29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
                t.lineTo(11.456, 37.244),
                t[ap](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
                t[D_](10.183, 36.136),
                t[ap](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
                t[D_](28.407, 34.863),
                t[ap](29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
                t.lineTo(29.678, 35.972),
                t[N_](),
                t[Cy](),
                t[kg](),
                t.restore(),
                t[Ug](),
                t[ky] = Rp,
                t[zg](),
                t[L_](.196, 29.346),
                t[ap](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075),
                t[D_](37.936, 31.075),
                t[ap](38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
                t[D_](39.665, 27.174),
                t[D_](.196, 27.174),
                t[D_](.196, 29.346),
                t[N_](),
                t[Cy](),
                t[kg](),
                t.restore(),
                t[Ug](),
                t[ky] = Bp,
                t[zg](),
                t[L_](37.937, 3.884),
                t[D_](1.926, 3.884),
                t[ap](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614),
                t[D_](.19699999999999984, 27.12),
                t.lineTo(39.666000000000004, 27.12),
                t[D_](39.666000000000004, 5.615),
                t[ap](39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t[Fy](),
                t.save(),
                t[Ug](),
                t[Fy](),
                t.save(),
                t[Fy](),
                t.restore(),
                t[Ug]();
                var i = t[Wg](6.9609, 2.9341, 32.9008, 28.874);
                i[og](0, $p),
                i[og](1, Fp),
                t.fillStyle = i,
                t.beginPath(),
                t[L_](35.788, 6.39),
                t[D_](4.074, 6.39),
                t[ap](3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
                t.lineTo(2.702, 24.616),
                t.lineTo(37.159, 24.616),
                t[D_](37.159, 7.763),
                t[ap](37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
                t[N_](),
                t[Cy](),
                t.stroke(),
                t[Fy](),
                t[Fy]()
            }
        },
        group: {
            draw: function(t) {
                t[Ug](),
                t[Ho](0, 0),
                t.beginPath(),
                t[L_](0, 0),
                t[D_](47.75, 0),
                t.lineTo(47.75, 40),
                t[D_](0, 40),
                t[N_](),
                t.clip(),
                t.translate(0, 0),
                t[Ho](0, 0),
                t.scale(1, 1),
                t[Ho](0, 0),
                t[Dy] = Hg,
                t.lineCap = sy,
                t[Cg] = fy,
                t.miterLimit = 4,
                t[Ug](),
                t.save(),
                t[ky] = Dp,
                t[zg](),
                t.moveTo(10.447, 26.005),
                t[D_](18.847, 26.005),
                t[Np](18.847, 26.005, 18.847, 26.005),
                t.lineTo(18.847, 28.663),
                t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663),
                t[D_](10.447, 28.663),
                t[Np](10.447, 28.663, 10.447, 28.663),
                t[D_](10.447, 26.005),
                t[Np](10.447, 26.005, 10.447, 26.005),
                t.closePath(),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Ug](),
                t[ky] = Rp,
                t.beginPath(),
                t.moveTo(21.491, 29.443),
                t[ap](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
                t.lineTo(8.698, 30.338),
                t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
                t[D_](7.8020000000000005, 29.557000000000002),
                t[ap](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
                t.lineTo(20.597, 28.662000000000003),
                t[ap](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
                t[D_](21.491, 29.443),
                t[N_](),
                t.fill(),
                t[kg](),
                t.restore(),
                t[Ug](),
                t[ky] = Rp,
                t[zg](),
                t[L_](.789, 24.79),
                t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
                t.lineTo(27.289, 26.005),
                t[ap](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
                t[D_](28.504, 23.267),
                t[D_](.789, 23.267),
                t.lineTo(.789, 24.79),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Ug](),
                t[ky] = Bp,
                t[zg](),
                t.moveTo(27.289, 6.912),
                t.lineTo(2.006, 6.912),
                t[ap](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126),
                t[D_](.7889999999999997, 23.227),
                t[D_](28.503999999999998, 23.227),
                t[D_](28.503999999999998, 8.126),
                t[ap](28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
                t.closePath(),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t.save(),
                t.save(),
                t[Fy](),
                t.save(),
                t.restore(),
                t.restore(),
                t.save();
                var i = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                i[og](0, $p),
                i[og](1, Fp),
                t.fillStyle = i,
                t.beginPath(),
                t[L_](25.78, 8.671),
                t.lineTo(3.514, 8.671),
                t[ap](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
                t[D_](2.549, 21.466),
                t[D_](26.743, 21.466),
                t[D_](26.743, 9.636),
                t[ap](26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t.restore(),
                t[Ug](),
                t[Ug](),
                t.fillStyle = Dp,
                t[zg](),
                t.moveTo(27.053, 33.602),
                t[D_](36.22, 33.602),
                t[Np](36.22, 33.602, 36.22, 33.602),
                t.lineTo(36.22, 36.501),
                t[Np](36.22, 36.501, 36.22, 36.501),
                t[D_](27.053, 36.501),
                t[Np](27.053, 36.501, 27.053, 36.501),
                t.lineTo(27.053, 33.602),
                t[Np](27.053, 33.602, 27.053, 33.602),
                t.closePath(),
                t.fill(),
                t[kg](),
                t.restore(),
                t[Ug](),
                t[ky] = Rp,
                t[zg](),
                t[L_](39.104, 37.352),
                t[ap](39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
                t[D_](25.143, 38.327),
                t[ap](24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
                t.lineTo(24.166, 37.477999999999994),
                t[ap](24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
                t.lineTo(38.131, 36.501),
                t[ap](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
                t.lineTo(39.105, 37.352),
                t.closePath(),
                t.fill(),
                t[kg](),
                t.restore(),
                t[Ug](),
                t[ky] = Rp,
                t[zg](),
                t[L_](16.514, 32.275),
                t[ap](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
                t.lineTo(45.433, 33.601),
                t[ap](46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
                t.lineTo(46.758, 30.607999999999997),
                t[D_](16.514, 30.607999999999997),
                t[D_](16.514, 32.275),
                t[N_](),
                t.fill(),
                t[kg](),
                t[Fy](),
                t.save(),
                t[ky] = Bp,
                t[zg](),
                t.moveTo(45.433, 12.763),
                t[D_](17.839, 12.763),
                t[ap](17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
                t[D_](16.514, 30.57),
                t[D_](46.757999999999996, 30.57),
                t.lineTo(46.757999999999996, 14.088),
                t[ap](46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t.save(),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.restore(),
                t[Ug](),
                i = t[Wg](21.6973, 12.0352, 41.5743, 31.9122),
                i[og](0, $p),
                i.addColorStop(1, Fp),
                t.fillStyle = i,
                t[zg](),
                t[L_](43.785, 14.683),
                t[D_](19.486, 14.683),
                t[ap](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
                t[D_](18.433, 28.649),
                t.lineTo(44.837, 28.649),
                t[D_](44.837, 15.734),
                t[ap](44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t.restore(),
                t[Ug](),
                t.globalAlpha = .5,
                t[zg](),
                t[L_](23.709, 36.33),
                t[D_](4.232, 36.33),
                t.lineTo(4.232, 27.199),
                t[D_](5.304, 27.199),
                t.lineTo(5.304, 35.259),
                t[D_](23.709, 35.259),
                t[D_](23.709, 36.33),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Fy]()
            }
        },
        subnetwork: {
            draw: function(t) {
                t[Ug](),
                t.translate(0, 0),
                t[zg](),
                t[L_](0, 0),
                t[D_](60.75, 0),
                t[D_](60.75, 42.125),
                t[D_](0, 42.125),
                t.closePath(),
                t[jy](),
                t.translate(0, .26859504132231393),
                t[Ta](.6694214876033058, .6694214876033058),
                t[Ho](0, 0),
                t.strokeStyle = Hg,
                t[Sg] = sy,
                t[Cg] = fy,
                t[qg] = 4,
                t[Ug](),
                t.save(),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t[Fy](),
                t.save();
                var i = t[Wg](43.6724, -2.7627, 43.6724, 59.3806);
                i[og](0, "rgba(159, 160, 160, 0.7)"),
                i.addColorStop(.9726, zp),
                t[ky] = i,
                t[zg](),
                t[L_](61.732, 16.509),
                t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
                t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
                t.bezierCurveTo(29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
                t[ap](9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
                t[ap](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
                t[ap](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
                t[ap](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
                t[ap](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
                t[ap](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
                t[ap](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
                t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
                t[N_](),
                t[Cy](),
                t.stroke(),
                t[Fy](),
                t[Ug](),
                t[Ug](),
                t[ky] = Dp,
                t[zg](),
                t[L_](34.966, 44.287),
                t.lineTo(45.112, 44.287),
                t[Np](45.112, 44.287, 45.112, 44.287),
                t.lineTo(45.112, 47.497),
                t[Np](45.112, 47.497, 45.112, 47.497),
                t.lineTo(34.966, 47.497),
                t.quadraticCurveTo(34.966, 47.497, 34.966, 47.497),
                t[D_](34.966, 44.287),
                t[Np](34.966, 44.287, 34.966, 44.287),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t[Ug](),
                t[ky] = Gp,
                t[zg](),
                t[L_](48.306, 48.439),
                t[ap](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
                t.lineTo(32.854, 49.52),
                t[ap](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
                t.lineTo(31.771, 48.578),
                t[ap](31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
                t[D_](47.226, 47.497),
                t[ap](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
                t.lineTo(48.306, 48.439),
                t[N_](),
                t.fill(),
                t[kg](),
                t[Fy](),
                t.save(),
                t[ky] = Yp,
                t.beginPath(),
                t[L_](23.302, 42.82),
                t[ap](23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
                t[D_](55.308, 44.287),
                t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
                t.lineTo(56.775, 40.98),
                t[D_](23.302, 40.98),
                t.lineTo(23.302, 42.82),
                t[N_](),
                t.fill(),
                t[kg](),
                t[Fy](),
                t[Ug](),
                t.fillStyle = Bp,
                t[zg](),
                t.moveTo(55.307, 21.229),
                t[D_](24.771, 21.229),
                t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
                t[D_](23.301000000000002, 40.933),
                t.lineTo(56.774, 40.933),
                t[D_](56.774, 22.695),
                t.bezierCurveTo(56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
                t[N_](),
                t[Cy](),
                t[kg](),
                t[Fy](),
                t.save(),
                t[Ug](),
                t[Fy](),
                t[Ug](),
                t[Fy](),
                t.restore(),
                t[Ug](),
                i = t[Wg](29.04, 20.4219, 51.0363, 42.4181),
                i.addColorStop(0, $p),
                i[og](1, Fp),
                t[ky] = i,
                t.beginPath(),
                t[L_](53.485, 23.353),
                t.lineTo(26.592, 23.353),
                t[ap](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
                t[D_](25.427, 38.807),
                t[D_](54.647, 38.807),
                t.lineTo(54.647, 24.517000000000003),
                t[ap](54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
                t.closePath(),
                t[Cy](),
                t.stroke(),
                t[Fy](),
                t[Fy](),
                t[Fy]()
            }
        }
    };
    for (var hB in rB) En(Up + hB, rB[hB]);
    var aB = function() {
        this[Lf] = !1;
        var t = this._fv;
        t[Oa]();
        var i = this._8j.x + this[xf] / 2,
        n = this._8j.y + this.$border / 2,
        e = this._8j[io] - this.$border,
        s = this._8j.height - this[xf],
        r = Hn[Yr](this, {
            x: i,
            y: n
        });
        Xn(t, r.x, r.y, !0),
        r = Hn[Yr](this, {
            x: i + e,
            y: n
        }),
        Xn(t, r.x, r.y),
        r = Hn[Yr](this, {
            x: i + e,
            y: n + s
        }),
        Xn(t, r.x, r.y),
        r = Hn[Yr](this, {
            x: i,
            y: n + s
        }),
        Xn(t, r.x, r.y),
        this.__mvPointer && (r = Hn.call(this, {
            x: this._pointerX,
            y: this._pointerY
        }), Xn(t, r.x, r.y)),
        this.$border && t[pf](this[xf] / 2)
    },
    oB = 20,
    fB = {
        _h6: !1,
        _ku: null,
        _dk: 0,
        _ln: -1,
        _lm: null,
        _fe: function(t) {
            this._ku || (this._ku = [], this._kw = DR),
            this._ku.push(t),
            this._fg(),
            this._l4()
        },
        _l4: function() {
            if (!this._lm) {
                var t = this;
                this._lm = setTimeout(function i() {
                    return t._fg() !== !1 ? void(t._lm = setTimeout(i, t._h7())) : void delete t._lm
                },
                this._h7())
            }
        },
        _h7: function() {
            return Math.max(oB, this._ku[this._ln].delay)
        },
        _fg: function() {
            return this._h3(this._ln + 1)
        },
        _h3: function(t) {
            if (this._h6) t %= this._dk;
            else if (t >= this._ku[Fr]) return ! 1;
            if (this._ln == t) return ! 1;
            this._ln = t;
            var i = this._ku[this._ln],
            n = i._o1ache;
            return n || (i._o1ache = n = Fi(this[io], this[no]), n.g[ff](i[Io], 0, 0), n._pixels = i._pixels),
            this._l0 = n,
            this[gf] = !0,
            this._eh()
        },
        _dm: function() {
            return this._ku ? (this._h6 = !0, this._dk = this._ku[Fr], 1 == this._dk ? this._eh() : void this._l4()) : void this._ia()
        },
        _mj: function() {
            this._lm && (clearTimeout(this._lm), delete this._lm)
        },
        _eh: function() {
            var t = this._dispatcher[Pl];
            if (!t || !t[Fr]) return ! 1;
            for (var i = new DN(this, Zy, Jy, this._l0), n = 0, e = t[Fr]; e > n; n++) {
                var s = t[n];
                s[xh]._jr && s[xh]._jr._ided ? (t[qr](n, 1), n--, e--) : s[Cl][Yr](s[xh], i)
            }
            return t[Fr] > 0
        },
        _nyg: function(t, i) {
            this._dispatcher[hd](t, i),
            this._h6 && !this._lm && this._l4()
        },
        _6x: function(t, i) {
            this._dispatcher.removeListener(t, i),
            this._dispatcher._nyr() || this._mj()
        },
        _id: function() {
            this._mj(),
            this._dispatcher[Oa]()
        },
        _g4: function() {
            var t = this._l0._nzufferedImage;
            return t || (this._l0._nzufferedImage = t = new eB(this._l0, 1)),
            t
        }
    },
    _B = function(t) {
        return t[Hp](function(t, i) {
            return 2 * t + i
        },
        0)
    },
    cB = function(t) {
        for (var i = [], n = 7; n >= 0; n--) i.push( !! (t & 1 << n));
        return i
    },
    uB = function(t) {
        this[Io] = t,
        this[qp] = this[Io].length,
        this[Wp] = 0,
        this.readByte = function() {
            if (this.pos >= this[Io][Fr]) throw new Error("Attempted to read past end of stream.");
            return 255 & t[s_](this[Wp]++)
        },
        this.readBytes = function(t) {
            for (var i = [], n = 0; t > n; n++) i[Kr](this.readByte());
            return i
        },
        this[Vp] = function(t) {
            for (var i = "",
            n = 0; t > n; n++) i += String.fromCharCode(this.readByte());
            return i
        },
        this[Xp] = function() {
            var t = this[Kp](2);
            return (t[1] << 8) + t[0]
        }
    },
    dB = function(t, i) {
        for (var n, e, s = 0,
        r = function(t) {
            for (var n = 0,
            e = 0; t > e; e++) i.charCodeAt(s >> 3) & 1 << (7 & s) && (n |= 1 << e),
            s++;
            return n
        },
        h = [], a = 1 << t, o = a + 1, f = t + 1, _ = [], c = function() {
            _ = [],
            f = t + 1;
            for (var i = 0; a > i; i++) _[i] = [i];
            _[a] = [],
            _[o] = null
        };;) if (e = n, n = r(f), n !== a) {
            if (n === o) break;
            if (n < _[Fr]) e !== a && _.push(_[e].concat(_[n][0]));
            else {
                if (n !== _[Fr]) throw new Error(Zp);
                _[Kr](_[e].concat(_[e][0]))
            }
            h[Kr][gh](h, _[n]),
            _[Fr] === 1 << f && 12 > f && f++
        } else c();
        return h
    },
    lB = function(t, i) {
        i || (i = {});
        var n = function(i) {
            for (var n = [], e = 0; i > e; e++) n[Kr](t[Kp](3));
            return n
        },
        e = function() {
            var i, n;
            n = "";
            do i = t.readByte(),
            n += t[Vp](i);
            while (0 !== i);
            return n
        },
        s = function() {
            var e = {};
            if (e.sig = t[Vp](3), e[Jp] = t[Vp](3), Qp !== e[tx]) throw new Error(ix);
            e.width = t[Xp](),
            e.height = t.readUnsigned();
            var s = cB(t.readByte());
            e.gctFlag = s[nx](),
            e.colorRes = _B(s[qr](0, 3)),
            e[ex] = s[nx](),
            e[sx] = _B(s.splice(0, 3)),
            e[rx] = t.readByte(),
            e[hx] = t[ax](),
            e[ox] && (e[qf] = n(1 << e[sx] + 1)),
            i[fx] && i[fx](e)
        },
        r = function(n) {
            var s = function(n) {
                var e = (t[ax](), cB(t[ax]()));
                n[_x] = e[qr](0, 3),
                n[cx] = _B(e[qr](0, 3)),
                n[ux] = e[nx](),
                n[Yf] = e.shift(),
                n.delayTime = t[Xp](),
                n.transparencyIndex = t[ax](),
                n.terminator = t[ax](),
                i.gce && i.gce(n)
            },
            r = function(t) {
                t[dx] = e(),
                i[lx] && i[lx](t)
            },
            h = function(n) {
                t[ax](),
                n[vx] = t[Kp](12),
                n[bx] = e(),
                i[yx] && i[yx](n)
            },
            a = function(n) {
                var s = function(n) {
                    t[ax](),
                    n.unknown = t[ax](),
                    n[gx] = t[Xp](),
                    n.terminator = t[ax](),
                    i[px] && i[px][xx] && i.app[xx](n)
                },
                r = function(t) {
                    t[mx] = e(),
                    i[px] && i[px][t[Ex]] && i[px][t[Ex]](t)
                };
                switch (t[ax](), n[Ex] = t.read(8), n.authCode = t[Vp](3), n[Ex]) {
                case "NETSCAPE":
                    s(n);
                    break;
                default:
                    r(n)
                }
            },
            o = function(t) {
                t[Io] = e(),
                i.unknown && i[wx](t)
            };
            switch (n[Tx] = t.readByte(), n[Tx]) {
            case 249:
                n[Ox] = Mx,
                s(n);
                break;
            case 254:
                n.extType = lx,
                r(n);
                break;
            case 1:
                n[Ox] = yx,
                h(n);
                break;
            case 255:
                n[Ox] = px,
                a(n);
                break;
            default:
                n[Ox] = wx,
                o(n)
            }
        },
        h = function(s) {
            var r = function(t, i) {
                for (var n = new Array(t[Fr]), e = t[Fr] / i, s = function(e, s) {
                    var r = t.slice(s * i, (s + 1) * i);
                    n.splice[gh](n, [e * i, i][Hr](r))
                },
                r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++) for (var f = r[o]; e > f; f += h[o]) s(f, a),
                a++;
                return n
            };
            s[Wf] = t.readUnsigned(),
            s.topPos = t[Xp](),
            s.width = t[Xp](),
            s[no] = t[Xp]();
            var h = cB(t.readByte());
            s[Ix] = h[nx](),
            s.interlaced = h.shift(),
            s.sorted = h[nx](),
            s.reserved = h[qr](0, 2),
            s.lctSize = _B(h[qr](0, 3)),
            s[Ix] && (s[kx] = n(1 << s.lctSize + 1)),
            s[Sx] = t.readByte();
            var a = e();
            s[Xf] = dB(s.lzwMinCodeSize, a),
            s[Cx] && (s.pixels = r(s[Xf], s.width)),
            i[lu] && i[lu](s)
        },
        a = function() {
            var n = {};
            switch (n[jx] = t[ax](), String.fromCharCode(n.sentinel)) {
            case "!":
                n[jo] = Px,
                r(n);
                break;
            case ",":
                n.type = lu,
                h(n);
                break;
            case ";":
                n[jo] = Ax,
                i[Ax] && i[Ax](n);
                break;
            default:
                throw new Error(Lx + n[jx].toString(16))
            }
            Ax !== n[jo] && setTimeout(a, 0)
        },
        o = function() {
            s(),
            setTimeout(a, 0)
        };
        o()
    },
    vB = "";
    i[yv] && i[yv](zx,
    function(t) {
        if (t[Ba] && t[Dx] && t.altKey && 73 == t[Nx]) {
            var i = xR.name + Rx + xR[Bx] + $x + xR[Fx] + yo + xR[Gx] + yo + xR[Yx] + vB;
            xR.alert(i)
        }
    },
    !1);
    var bB = Ux;
    vB = Hx + decodeURIComponent(qx);
    var yB, gB, pB, xB = t,
    mB = Wx,
    EB = Vx,
    wB = Xx,
    TB = Kx,
    OB = Zx,
    MB = Jx,
    IB = Qx,
    kB = tm,
    SB = im,
    CB = nm,
    jB = em,
    PB = sm,
    AB = rm,
    LB = hm,
    zB = am,
    DB = om,
    NB = fm,
    RB = _m,
    BB = cm,
    $B = um,
    FB = dm,
    GB = xB[TB + lm];
    GB && (gB = xB[LB + vm][OB + bm], GB[Yr](xB, ne, DB), GB[Yr](xB, ee, BB), GB[Yr](xB,
    function() {
        UB && UB == bB && (t$ = !1)
    },
    NB));
    var YB, UB, HB, qB = 111,
    WB = function(t, i) {
//        i || (i = ym + EB + gm);
//        try {
//            pB[Yr](t, i, 6 * qB, 1 * qB)
//        } catch(n) {}
    },
    VB = !0,
    XB = !0,
    KB = !0,
    ZB = !0,
    JB = !0,
    QB = !0,
    t$ = !0,
    i$ = cN ? 200 : 1024,
    n$ = function(t, i) {
        return ie ? ie(t, i) || "": void 0
    };
    if (i.createElement) {
        var e$ = i[uo](pm);
        e$[ra][xm] = xu,
        e$[Oy] = function(t) {
            var i = t[Mu].contentWindow,
            n = gB;
            if ("" === n || mm == n || Em == n) return void this[xy][xy].removeChild(this.parentNode);
            var e = i[wm][h_];
            i[TB + lm](function() {
                te(e) != YB && (d$.prototype._jt = null)
            },
            BB),
            this[xy][xy][my](this[xy])
        };
        var s$ = i.createElement(uu);
        s$[ra][io] = Tu,
        s$[ra].height = Tu,
        s$[ra][Tm] = pu,
        s$[mc](e$),
        i[id].appendChild(s$)
    }
    if (i[zB + Om]) {
        var r$ = i[zB + Om](SB + Mm);
        r$[ra][xm] = xu,
        r$[Oy] = function(t) {
            var i = Im,
            n = t[Mu][i + km];
            yB = n[Sm][Va]();
            var e = n[CB + jB + Cm + PB + jm][AB + jo];
            pB = e[mB + Pm],
            rN && (n = xB);
            var s = n[TB + lm];
//            s[Yr](xB, ae, BB),
//            s[Yr](xB, oe, $B),
//            s[Yr](xB, _e, FB),
//            s.call(xB, ce, NB),
//            s[Yr](xB, se, RB),
//            s[Yr](xB, he, FB),
//            s[Yr](xB, fe, BB),
//            s.call(xB, re, BB),
            this[xy].parentNode[my](this[xy])
        };
        var s$ = i[uo](uu);
        s$[ra][io] = Tu,
        s$[ra][no] = Tu,
        s$[ra][Tm] = pu,
        s$[mc](r$),
        i[id][mc](s$)
    }
    var h$ = function(t, i, n, e) {
        this[Wo] = t,
        this[ul] = i,
        this[bl] = e,
        this.value = n,
        this.propertyType = mR[yc]
    };
    D(h$, NN);
    var a$ = function(t) {
        this.id = ++KD,
        this._o1b = {},
        this._js = {},
        t && (this.$name = t)
    };
    a$.prototype = {
        _js: null,
        getStyle: function(t) {
            return this._js[t]
        },
        setStyle: function(t, i) {
            var n = this._js[t];
            return n === i || n && i && n.equals && n[Al](i) ? !1 : this._nze(t, i, new h$(this, t, i, n), this._js)
        },
        putStyles: function(t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._js[n] = e: this[Am](n, e)
            }
        },
        _13: !0,
        invalidateVisibility: function(t) {
            this._13 = !0,
            t || (this instanceof f$ && this.hasEdge() && this[j_](function(t) {
                t._13 = !0
            }), this._i0() && this[$r]() && this[A_](function(t) {
                t.invalidateVisibility()
            }))
        },
        onParentChanged: function() {
            this[Lm]()
        },
        _i0: function() {
            return ! this._4g && this instanceof u$
        },
        invalidate: function() {
            this[Cl](new DN(this, zm, Dm))
        },
        _o19: null,
        addUI: function(t, i) {
            if (this._o19 || (this._o19 = new gN), t.id || (t.id = ++KD), this._o19.containsById(t.id)) return ! 1;
            var n = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._o19[nh](n);
            var e = new DN(this, zm, nh, n);
            return this.onEvent(e)
        },
        removeUI: function(t) {
            if (!this._o19) return ! 1;
            var i = this._o19.getById(t.id);
            return i ? (this._o19[Vr](i), void this[Cl](new DN(this, zm, Vr, i))) : !1
        },
        toString: function() {
            return this[Nm] || this.id
        },
        type: Rm,
        _4g: !1,
        _i8: !0
    },
    D(a$, WN),
    H(a$[bh], [Bm, Mh, $m, Fm]),
    Z(a$[bh], {
        enableSubNetwork: {
            get: function() {
                return this._4g
            },
            set: function(t) {
                if (this._4g != t) {
                    var i = this._4g;
                    this._4g = t,
                    this instanceof f$ && this._1a(),
                    this.onEvent(new NN(this, cu, t, i))
                }
            }
        },
        bindingUIs: {
            get: function() {
                return this._o19
            }
        },
        styles: {
            get: function() {
                return this._js
            },
            set: function(t) {
                if (this._js != t) {
                    for (var i in this._js) i in t || (t[i] = n);
                    this[Gm](t),
                    this._js = t
                }
            }
        }
    });
    var o$ = function(t, i, n) {
        this.id = ++KD,
        this._o1b = {},
        this._js = {},
        n && (this[Nm] = n),
        this[P_] = t,
        this[C_] = i,
        this[Ym]()
    };
    o$.prototype = {
        $uiClass: fs,
        _k6: null,
        _jb: null,
        _k7: null,
        _jc: null,
        _eu: !1,
        type: Um,
        otherNode: function(t) {
            return t == this[E_] ? this.to: t == this.to ? this[E_] : void 0
        },
        connect: function() {
            if (this._eu) return ! 1;
            if (!this.$from || !this[C_]) return ! 1;
            if (this._eu = !0, this[P_] == this[C_]) return void this[P_]._i6(this);
            Ie(this[C_], this),
            Oe(this[P_], this),
            de(this[P_], this, this[C_]);
            var t = this[x_],
            i = this.toAgent;
            if (t != i) {
                var n;
                this[P_]._dy && (ve(t, this, i), n = !0),
                this[C_]._dy && (ye(i, this, t), n = !0),
                n && de(t, this, i)
            }
        },
        disconnect: function() {
            if (!this._eu) return ! 1;
            if (this._eu = !1, this.$from == this[C_]) return void this.$from._o1d(this);
            Me(this.$from, this),
            ke(this[C_], this),
            le(this[P_], this, this[C_]);
            var t = this[x_],
            i = this[p_];
            if (t != i) {
                var n;
                this[P_]._dy && (be(t, this, i), n = !0),
                this[C_]._dy && (ge(i, this, t), n = !0),
                n && le(t, this, i)
            }
        },
        isConnected: function() {
            return this._eu
        },
        isInvalid: function() {
            return ! this.$from || !this[C_]
        },
        isLooped: function() {
            return this[P_] == this[C_]
        },
        getEdgeBundle: function(t) {
            return t ? this._3b() : this[S_]() ? this.$from._4l: this[P_][Hm](this[C_])
        },
        hasEdgeBundle: function() {
            var t = this.getEdgeBundle(!0);
            return t && t.edges[Fr] > 1
        },
        _3b: function() {
            var t = this[x_],
            i = this[p_];
            return t == i ? this[P_]._dy || this[C_]._dy ? null: this[P_]._4l: this[x_][Hm](this[p_])
        },
        _ny5: null,
        hasPathSegments: function() {
            return this._ny5 && !this._ny5[Af]()
        },
        isBundleEnabled: function() {
            return this.bundleEnabled && !this.hasPathSegments()
        },
        firePathChange: function(t) {
            this.onEvent(new NN(this, qm, t))
        },
        addPathSegment: function(t, i, n) {
            var e = new tB(i || XR, t);
            this._ny5 || (this._ny5 = new gN),
            this._ny5.add(e, n),
            this[Wm](e)
        },
        addPathSegement: function() {
            return xR[$h]('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'),
            this[Vm][gh](this, arguments)
        },
        removePathSegmentByIndex: function(t) {
            if (!this._ny5) return ! 1;
            var i = this._ny5.getByIndex(t);
            i && (this._ny5[Vr](i), this.firePathChange(i))
        },
        removePathSegment: function(t) {
            return this._ny5 ? (this._ny5[Vr](t), void this.firePathChange(t)) : !1
        },
        movePathSegment: function(t, i, n) {
            if (!this._ny5) return ! 1;
            if (t = t || 0, i = i || 0, xR[mg](n)) {
                var e = this._ny5[Pd](n);
                return e ? (e[Hv](t, i), void this.firePathChange()) : !1
            }
            l(function(n) {
                n[Hv](t, i)
            }),
            this[Wm]()
        },
        move: function(t, i) {
            return this._ny5 ? (this._ny5[Kf](function(n) {
                n[Hv](t, i)
            },
            this), void this[Wm]()) : !1
        },
        validateEdgeBundle: function() {}
    },
    D(o$, a$),
    Z(o$[bh], {
        pathSegments: {
            get: function() {
                return this._ny5
            },
            set: function(t) {
                xR[oh](t) && (t = new gN(t)),
                this._ny5 = t,
                this[Wm]()
            }
        },
        from: {
            get: function() {
                return this[P_]
            },
            set: function(t) {
                if (this[P_] != t) {
                    var i = new NN(this, E_, t, this[P_]);
                    this.beforeEvent(i) !== !1 && (this[rv](), this[P_] = t, this.connect(), this[Cl](i))
                }
            }
        },
        to: {
            get: function() {
                return this[C_]
            },
            set: function(t) {
                if (this[C_] != t) {
                    var i = new NN(this, Xm, t, this.$to);
                    this[Oh](i) !== !1 && (this[rv](), this.$to = t, this.connect(), this[Cl](i))
                }
            }
        },
        fromAgent: {
            get: function() {
                return this[P_] ? this.$from._dy || this[P_] : null
            }
        },
        toAgent: {
            get: function() {
                return this[C_] ? this[C_]._dy || this[C_] : null
            }
        }
    }),
    H(o$.prototype, [Zc, {
        name: Km,
        value: !0
    },
    Qc]);
    var f$ = function(t, i, n) {
        this.id = ++KD,
        this._o1b = {},
        this._js = {},
        t && (this[Nm] = t),
        this[oc] = Zm,
        this[wf] = IN[rg],
        this[Jm] = {
            x: i || 0,
            y: n || 0
        },
        this._linkedNodes = {}
    };
    f$[bh] = {
        $uiClass: _s,
        _dy: null,
        forEachEdge: function(t, i, n) {
            return ! n && this._l6 && this._l6[Kf](t, i) === !1 ? !1 : Ce(this, t, i)
        },
        forEachOutEdge: function(t, i) {
            return je(this, t, i)
        },
        forEachInEdge: function(t, i) {
            return Pe(this, t, i)
        },
        getEdges: function() {
            var t = [];
            return this[j_](function(i) {
                t[Kr](i)
            }),
            t
        },
        _i1: null,
        _gf: null,
        _k1: null,
        _i3: null,
        _nyp: 0,
        _9l: 0,
        hasInEdge: function() {
            return null != this._i1
        },
        hasOutEdge: function() {
            return null != this._gf
        },
        hasEdge: function() {
            return null != this._i1 || null != this._gf || this.hasLoops()
        },
        linkedWith: function(t) {
            return t.from == this || t.to == this || t[x_] == this || t.toAgent == this
        },
        hasEdgeWith: function(t) {
            var i = this[Hm](t);
            return i && i.edges[Fr] > 0
        },
        _l6: null,
        _4l: null,
        hasLoops: function() {
            return this._l6 && this._l6[Fr] > 0
        },
        _i6: function(t) {
            return this._l6 || (this._l6 = new gN, this._4l = new CF(this, this, this._l6)),
            this._4l._ja(t)
        },
        _o1d: function(t) {
            return this._4l ? this._4l._o1e(t) : void 0
        },
        getEdgeBundle: function(t) {
            return t == this ? this._4l: this._linkedNodes[t.id] || t._linkedNodes[this.id]
        },
        _6z: function() {
            return this._9f && this._9f[Fr]
        },
        _5n: function() {
            return this._8b && this._8b[Fr]
        },
        _9g: function() {
            return this._6z() || this._5n()
        },
        _8b: null,
        _9f: null,
        _o1c: function() {
            var t = this._dy,
            i = ue(this);
            if (t != i) {
                var n = Se(this);
                this._99(i),
                n[Kf](function(t) {
                    var i = t[x_],
                    n = t[p_],
                    t = t[ac],
                    e = t.$from._dy,
                    s = t[C_]._dy;
                    i != n && (i && be(i, t, n || t[C_]), n && ge(n, t, i || t[P_])),
                    e != s && (e && ve(e, t, s || t[C_]), s && ye(s, t, e || t[P_]), de(e || t[P_], t, s || t[C_]))
                },
                this)
            }
        },
        onParentChanged: function() {
            this.invalidateVisibility(),
            this._o1c()
        },
        _89: null,
        _1a: function() {
            var t;
            if (this._4g ? t = null: (t = this._dy, t || this._hz !== !1 || (t = this)), this._89 == t) return ! 1;
            if (this._89 = t, this._fo && this._fo._k2.length) for (var i, n = this._fo._k2,
            e = 0,
            s = n.length; s > e; e++) i = n[e],
            i instanceof f$ && i._99(t)
        },
        setLocation: function(t, i) {
            if (this.$location && this.$location.x == t && this.$location.y == i) return ! 1;
            var n = new NN(this, Qm, this[Jm], {
                x: t,
                y: i
            });
            return this[Oh](n) === !1 ? !1 : (this[Jm] ? (this.$location.x = t, this[Jm].y = i) : this[Jm] = new mN(t, i), this.onEvent(n), !0)
        },
        _em: null,
        addFollower: function(t) {
            return null == t ? !1 : t[tE] = this
        },
        removeFollower: function(t) {
            return this._em && this._em.contains(t) ? t[tE] = null: !1
        },
        hasFollowers: function() {
            return this._em && !this._em.isEmpty()
        },
        toFollowers: function() {
            return this.hasFollowers() ? this._em[qc]() : null
        },
        clearFollowers: function() {
            this[T_]() && (this[iE](), l(this[iE](),
            function(t) {
                t[tE] = null
            }))
        },
        getFollowerIndex: function(t) {
            return this._em && this._em.contains(t) ? this._em[Zr](t) : -1
        },
        setFollowerIndex: function(t, i) {
            return this._em && this._em[su](t) ? void this._em.setIndex(t, i) : -1
        },
        getFollowerCount: function() {
            return this._em ? this._em[Fr] : 0
        },
        _96: function() {
            return this._em ? this._em: (this._em = new gN, this._em)
        },
        isFollow: function(t) {
            if (!t || !this._host) return ! 1;
            for (var i = this._host; i;) {
                if (i == t) return ! 0;
                i = i._host
            }
            return ! 1
        },
        _99: function(t) {
            return t == this._dy ? !1 : (this._dy = t, this.invalidateVisibility(), void this._1a())
        },
        type: nE
    },
    D(f$, a$),
    Z(f$[bh], {
        loops: {
            get: function() {
                return this._l6
            }
        },
        edgeCount: {
            get: function() {
                return this._nyp + this._9l
            }
        },
        agentNode: {
            get: function() {
                return this._dy || this
            }
        },
        host: {
            set: function(t) {
                if (this == t || t == this._host) return ! 1;
                var i = new NN(this, tE, this._host, t);
                if (!1 === this[Oh](i)) return ! 1;
                var n = null,
                e = null,
                s = this._host;
                if (null != t && (n = new NN(t, eE, null, this), !1 === t[Oh](n))) return ! 1;
                if (null != s && (e = new NN(s, sE, null, this), !1 === s.beforeEvent(e))) return ! 1;
                if (this._host = t, null != t) {
                    var r = t._96();
                    r.add(this)
                }
                if (null != s) {
                    var r = s._96();
                    r[Vr](this)
                }
                return this[Cl](i),
                null != t && t[Cl](n),
                null != s && s[Cl](e),
                !0
            },
            get: function() {
                return this._host
            }
        }
    }),
    H(f$.prototype, [Qm, rE, Zy, Po, hE]),
    Z(f$.prototype, {
        x: {
            get: function() {
                return this[Qm].x
            },
            set: function(t) {
                t != this[Qm].x && (this[Qm] = new mN(t, this[Qm].y))
            }
        },
        y: {
            get: function() {
                return this[Qm].y
            },
            set: function(t) {
                t != this[Qm].y && (this[Qm] = new mN(this[Qm].x, t))
            }
        }
    });
    var _$ = function(t, i) {
        t instanceof nB && (i = t, t = n),
        N(this, _$, [t]),
        this[aE] = i || new nB,
        this[Zy] = this[aE],
        this[hE] = null,
        this.uiClass = hr,
        bN[oE] || (bN[oE] = {},
        bN[oE][v$[fE]] = !1),
        this[Gm](bN.SHAPENODE_STYLES)
    };
    _$[bh] = {
        $uiClass: hr,
        type: _E,
        moveTo: function(t, i) {
            this[cE][L_](t, i),
            this[Wm]()
        },
        lineTo: function(t, i) {
            this[cE][D_](t, i),
            this[Wm]()
        },
        quadTo: function(t, i, n, e) {
            this[cE][z_](t, i, n, e),
            this[Wm]()
        },
        curveTo: function(t, i, n, e, s, r) {
            this[cE].curveTo(t, i, n, e, s, r),
            this[Wm]()
        },
        arcTo: function(t, i, n, e, s) {
            this[cE][yy](t, i, n, e, s),
            this[Wm]()
        },
        closePath: function() {
            this.path[N_](),
            this[Wm]()
        },
        clear: function() {
            this[cE].clear(),
            this[Wm]()
        },
        removePathSegmentByIndex: function(t) {
            this[cE][uE](t) !== !1 && this.firePathChange()
        },
        firePathChange: function() {
            this[cE]._74 = !0,
            this.onEvent(new NN(this, qm))
        }
    },
    D(_$, f$),
    H(_$.prototype, [cE]),
    Z(_$[bh], {
        pathSegments: {
            get: function() {
                return this[cE][dE]
            },
            set: function(t) {
                this[cE][dE] = t || [],
                this[Wm]()
            }
        },
        length: {
            get: function() {
                return this.path.length
            }
        }
    }),
    xR.ShapeNode = _$;
    var c$ = {
        _kc: {},
        register: function(t, i) {
            c$._kc[t] = i
        },
        getShape: function(t, i, e, s, r, h) {
            s === n && (s = i, r = e, i = 0, e = 0),
            s || (s = 50),
            r || (r = 50);
            var a = c$._kc[t];
            return a ? a[lE] instanceof Function ? a.generator(i, e, s, r, h) : a: void 0
        },
        getRect: function(t, i, n, e, s, r, h) {
            return Ae(h || new nB, t, i, n, e, s, r)
        },
        getAllShapes: function(t, i, n, e, s) {
            var r = {};
            for (var h in c$._kc) {
                var a = c$[Hc](h, t, i, n, e, s);
                a && (r[h] = a)
            }
            return r
        },
        createRegularShape: function(t, i, n, e, s) {
            return $e(t, i, n, e, s)
        }
    };
    Qe(),
    ts[bh] = {
        type: vE
    },
    D(ts, _$),
    xR[bE] = ts,
    is[bh] = {
        _hb: function(t) {
            var i, n = t._jr;
            i = n ? n._fo: this.$roots;
            var e = i[Zr](t);
            if (0 > e) throw new Error(av + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof f$ ? n: null;
                e -= 1;
                var r = i[Pd](e);
                if (r = s(r)) return r
            }
            return null
        },
        forEachNode: function(t, i) {
            this.forEach(function(n) {
                return n instanceof f$ && t[Yr](i, n) === !1 ? !1 : void 0
            })
        },
        _3w: null
    },
    D(is, XN),
    Z(is.prototype, {
        propertyChangeDispatcher: {
            get: function() {
                return this._14
            }
        },
        currentSubNetwork: {
            get: function() {
                return this._3w
            },
            set: function(t) {
                if (t && !t[cu] && (t = null), this._3w != t) {
                    var i = this._3w;
                    this._3w = t,
                    this._14.onEvent(new NN(this, yE, t, i))
                }
            }
        }
    }),
    bN.GROUP_TYPE = mR[gE],
    bN[pE] = 5,
    bN.GROUP_EXPANDED = !0,
    bN[xE] = {
        width: 60,
        height: 60
    };
    var u$ = function(t, i, e) {
        N(this, u$, arguments),
        (i === n || e === n) && (this[Jm][mE] = !0),
        this[EE] = bN[wE],
        this[TE] = bN.GROUP_PADDING,
        this.$image = rB.group,
        this[OE] = bN[xE],
        this[ME] = bN.GROUP_EXPANDED
    };
    u$[bh] = {
        type: IE,
        $uiClass: ir,
        _9x: function() {
            return ! this._hz && !this._dy
        },
        forEachOutEdge: function(t, i, n) {
            return je(this, t, i) === !1 ? !1 : !n && this._9x() && this._8b ? this._8b[Kf](t, i) : void 0
        },
        forEachInEdge: function(t, i, n) {
            return Pe(this, t, i) === !1 ? !1 : !n && this._9x() && this._9f ? this._9f.forEach(t, i) : void 0
        },
        forEachEdge: function(t, i, n) {
            return R(this, u$, j_, arguments) === !1 ? !1 : n || n || !this._9x() ? void 0 : this._9f && this._9f.forEach(t, i) === !1 ? !1 : this._8b ? this._8b[Kf](t, i) : void 0
        },
        hasInEdge: function(t) {
            return t ? null != this._i1: null != this._i1 || this._6z()
        },
        hasOutEdge: function(t) {
            return t ? null != this._gf: null != this._gf || this._5n()
        },
        hasEdge: function(t) {
            return t ? null != this._i1 || null != this._gf: null != this._i1 || null != this._gf || this._9g()
        }
    },
    D(u$, f$),
    Z(u$[bh], {
        expanded: {
            get: function() {
                return this._hz
            },
            set: function(t) {
                if (this._hz != t) {
                    var i = new NN(this, ME, t, this._hz);
                    this.beforeEvent(i) !== !1 && (this._hz = t, this._1a(), this[Cl](i), this._dy || ns[Yr](this))
                }
            }
        }
    }),
    H(u$.prototype, [kE, SE, Go, CE]),
    xR[jE] = u$,
    es[bh].type = PE,
    D(es, f$),
    xR.Text = es;
    var d$ = function(t) {
        this._ji = new ON,
        this._8j = new ON,
        this._fv = new ON,
        this.id = ++KD,
        t && (this[Io] = t)
    };
    d$[bh] = {
        invalidate: function() {
            this[AE]()
        },
        _1v: !0,
        _ji: null,
        _8j: null,
        _fv: null,
        _nz1: !1,
        _jm: 1,
        _jn: 1,
        _i8: !0,
        _8r: 0,
        _7j: 0,
        _jr: null,
        _nzl: null,
        borderColor: LE,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1m: function() {
            this.$anchorPoint = oi(this.anchorPosition, this._8r, this._7j)
        },
        setMeasuredBounds: function(t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t[no], t = t[io]),
            this._ji[io] == t && this._ji.height == i && this._ji.x == n && this._ji.y == e ? !1 : void this._ji[Th](n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function() {},
        measure: function() {},
        draw: function() {},
        _83: function(t, i, n) {
            n.selectionType == mR[uy] ? (t[Gy] = n[wg], t[Yy] = n[Tg] * i, t[Og] = (n.selectionShadowOffsetX || 0) * i, t[Uy] = (n.selectionShadowOffsetY || 0) * i) : this._2d(t, i, n)
        },
        _2d: function(t, i, n) {
            var e = n[Ig] || 0;
            n[zE] && (t[ky] = n[zE], t.fillRect(this._8j.x - e / 2, this._8j.y - e / 2, this._8j[io] + e, this._8j[no] + e)),
            t[Dy] = n[wg],
            t[ko] = e,
            t[DE](this._8j.x - e / 2, this._8j.y - e / 2, this._8j[io] + e, this._8j[no] + e)
        },
        _jt: function(t, i, n, e) {
            if (!this._i8) return ! 1;
            if (this[NE] || (n = this[RE]), (n && !this.syncSelectionStyles || !e) && (e = this), t[Ug](), 1 != this[BE] && (t[$E] = this[BE]), t[Ho](this.$x, this.$y), this[vf] && this.$_hostRotate && t[Po](this[bf]), (this[FE] || this[GE]) && t.translate(this[FE], this[GE]), this[df] && t.rotate(this.$rotate), this[uf] && this._nzl && t.translate( - this._nzl.x, -this._nzl.y), this[Gy] && (t[Gy] = this.shadowColor, t[Yy] = this.shadowBlur * i, t[Og] = this[Og] * i, t[Uy] = this[Uy] * i), n && e.selectionType == mR[YE] && (this._2d(t, i, e), n = !1), this._11() && this._msShape && !this._msShape._empty) {
                this._msShape.validate();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this[UE],
                    lineDash: this.borderLineDash,
                    lineDashOffset: this[HE],
                    fillColor: this[qE],
                    fillGradient: this._nzackgroundGradient,
                    lineCap: sy,
                    lineJoin: wo
                };
                this._msShape[Do](t, i, s, n, e),
                n = !1,
                t.shadowColor = Hg
            }
            t[zg](),
            this[Do](t, i, n, e),
            t[Fy]()
        },
        invalidateData: function() {
            this.$invalidateData = !0,
            this._1v = !0
        },
        invalidateSize: function() {
            this[gf] = !0,
            this._1v = !0
        },
        invalidateRender: function() {
            this._1v = !0
        },
        _5g: function() {},
        _11: function() {
            return this.$backgroundColor || this.$backgroundGradient || this[xf]
        },
        _4p: function() {
            return this[qE] || this[WE]
        },
        doValidate: function() {
            return this.$invalidateData && (this.$invalidateData = !1, this[VE]() !== !1 && (this[gf] = !0)),
            this[gf] && this.validateSize && this[XE](),
            Wn.call(this) ? (this[Lf] = !0, this[KE] && this[KE](), !0) : this[ZE] ? (this[ZE] = !1, !0) : void 0
        },
        validate: function() {
            var t = this._i8;
            return this[JE] && (this[JE] = !1, this._i8 = this[QE], !this._i8 || (this[Pf] || this[tw]) && this._5g() !== !1 || (this._i8 = !1)),
            this._i8 ? (this._1v = !1, this._nz1 || (this[iw](), this._nz1 = !0), this[nw]()) : t != this._i8
        },
        _ic: function(t, i) {
            return t -= this.$x,
            i -= this.$y,
            qn.call(this, {
                x: t,
                y: i
            })
        },
        hitTest: function(t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fv[Eo](t, i, n)) return ! 1;
            var s = qn[Yr](this, {
                x: t,
                y: i
            });
            return t = s.x,
            i = s.y,
            !e && this._11() && this._msShape && this._msShape.hitTest(t, i, n, !1, this[xf], this[qE] || this.$backgroundGradient) ? !0 : this.doHitTest(t, i, n)
        },
        doHitTest: function(t, i, n) {
            return this._ji[Eo](t, i, n)
        },
        hitTestByBounds: function(t, i, n, e) {
            var s = this._ic(t, i);
            return ! e && this._11() && this._msShape && this._msShape.hitTest(t, i, n, !1, this[xf], this.$backgroundColor || this[WE]) ? !0 : this._ji[Eo](s.x, s.y, n)
        },
        onDataChanged: function() {
            this[ew] = !0,
            this._1v = !0,
            this.$invalidateVisibility = !0
        },
        getBounds: function() {
            var t = this._fv[Xr]();
            return t[sw](this.x, this.y),
            this[g_] && (this[g_].rotate && Di(t, this[g_][Po], t), t.offset(this[g_].x || 0, this[g_].y || 0)),
            t
        },
        destroy: function() {
            this._ided = !0
        },
        _ee: !1
    },
    Z(d$[bh], {
        originalBounds: {
            get: function() {
                return this._ji
            }
        },
        data: {
            get: function() {
                return this[Pf]
            },
            set: function(t) {
                if (this.$data != t) {
                    var i = this[Pf];
                    this[Pf] = t,
                    this[rw](t, i)
                }
            }
        },
        parent: {
            get: function() {
                return this._jr
            }
        },
        showOnTop: {
            get: function() {
                return this._ee
            },
            set: function(t) {
                t != this._ee && (this._ee = t, this._1v = !0, this._jr && this._jr._nyu && this._jr._nyu(this))
            }
        }
    }),
    rs(d$[bh], {
        visible: {
            value: !0,
            validateFlags: [hw, aw]
        },
        showEmpty: {
            validateFlags: [hw]
        },
        anchorPosition: {
            value: IN[rg],
            validateFlags: [ow]
        },
        position: {
            value: IN[rg],
            validateFlags: [aw]
        },
        offsetX: {
            value: 0,
            validateFlags: [aw]
        },
        offsetY: {
            value: 0,
            validateFlags: [aw]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: [tb, ow]
        },
        padding: {
            value: 0,
            validateFlags: [tb]
        },
        border: {
            value: 0,
            validateFlags: [tb]
        },
        borderRadius: {
            value: bN.BORDER_RADIUS
        },
        showPointer: {
            value: !1,
            validateFlags: [tb]
        },
        pointerX: {
            value: 0,
            validateFlags: [tb]
        },
        pointerY: {
            value: 0,
            validateFlags: [tb]
        },
        pointerWidth: {
            value: bN.POINTER_WIDTH
        },
        backgroundColor: {
            validateFlags: [tb]
        },
        backgroundGradient: {
            validateFlags: [tb, fw]
        },
        selected: {
            value: !1,
            validateFlags: [tb]
        },
        selectionBorder: {
            value: bN[_w],
            validateFlags: [tb]
        },
        selectionShadowBlur: {
            value: bN.SELECTION_SHADOW_BLUR,
            validateFlags: [tb]
        },
        selectionColor: {
            value: bN[cy],
            validateFlags: [tb]
        },
        selectionType: {
            value: bN[cw],
            validateFlags: [tb]
        },
        selectionShadowOffsetX: {
            value: 0,
            validateFlags: [tb]
        },
        selectionShadowOffsetY: {
            value: 0,
            validateFlags: [tb]
        },
        shadowBlur: {
            value: 0,
            validateFlags: [tb]
        },
        shadowColor: {
            validateFlags: [tb]
        },
        shadowOffsetX: {
            value: 0,
            validateFlags: [tb]
        },
        shadowOffsetY: {
            value: 0,
            validateFlags: [tb]
        },
        renderColorBlendMode: {},
        renderColor: {},
        x: {
            value: 0,
            validateFlags: [aw]
        },
        y: {
            value: 0,
            validateFlags: [aw]
        },
        rotatable: {
            value: !0,
            validateFlags: [uw, tb]
        },
        rotate: {
            value: 0,
            validateFlags: [uw, tb]
        },
        _hostRotate: {
            validateFlags: [uw]
        },
        lineWidth: {
            value: 0,
            validateFlags: [dw]
        },
        alpha: {
            value: 1
        }
    });
    var l$ = [mR[bc], mR.PROPERTY_TYPE_STYLE, mR[lw]];
    as[bh] = {
        removeBinding: function(t) {
            for (var i = l$.length; --i >= 0;) {
                var n = l$[i],
                e = this[n];
                for (var s in e) {
                    var r = e[s];
                    Array[oh](r) ? (v(r,
                    function(i) {
                        return i.target == t
                    },
                    this), r[Fr] || delete e[s]) : r[Mu] == t && delete e[s]
                }
            }
        },
        _2g: function(t, i, n) {
            if (!n && (n = this[i[yl] || mR.PROPERTY_TYPE_ACCESSOR], !n)) return ! 1;
            var e = n[t];
            e ? (Array.isArray(e) || (n[t] = e = [e]), e[Kr](i)) : n[t] = i
        },
        _30: function(t, i, n, e, s, r) {
            t = t || mR.PROPERTY_TYPE_ACCESSOR;
            var h = this[t];
            if (!h) return ! 1;
            var a = {
                property: i,
                propertyType: t,
                bindingProperty: e,
                target: n,
                callback: s,
                invalidateSize: r
            };
            this._2g(i, a, h)
        },
        onBindingPropertyChange: function(t, i, n, e) {
            var s = this[n || mR[bc]];
            if (!s) return ! 1;
            var r = s[i];
            return r ? (t._1v = !0, hs(t, r, n, e), !0) : !1
        },
        initBindingProperties: function(t, i) {
            for (var e = l$[Fr]; --e >= 0;) {
                var s = l$[e],
                r = this[s];
                for (var h in r) {
                    var a = r[h];
                    if (a[lc]) {
                        var o = a.target;
                        if (o) {
                            if (! (o instanceof d$ || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t[uc](a[dc], s) : s == mR[yc] ? t[Xc][Ec](t[Pf], a[dc]) : t[Pf][a[dc]],
                        f !== n && (o[a[lc]] = f)
                    }
                }
            }
        }
    };
    var v$ = {};
    v$[cy] = vw,
    v$[_w] = bw,
    v$[_y] = "selection.shadow.blur",
    v$[yw] = "selection.shadow.offset.x",
    v$.SELECTION_SHADOW_OFFSET_Y = "selection.shadow.offset.y",
    v$[cw] = gw,
    v$[pw] = xw,
    v$.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode",
    v$[mw] = Ew,
    v$[ww] = Tw,
    v$.SHADOW_COLOR = Ow,
    v$[Mw] = Iw,
    v$.SHADOW_OFFSET_Y = kw,
    v$[Sw] = Cw,
    v$[jw] = Pw,
    v$.SHAPE_LINE_DASH = Aw,
    v$[Lw] = "shape.line.dash.offset",
    v$[zw] = Dw,
    v$[Nw] = Rw,
    v$[Bw] = $w,
    v$[Fw] = Gw,
    v$.LINE_CAP = Yw,
    v$[Uw] = Hw,
    v$[qw] = Ww,
    v$[Vw] = Xw,
    v$.BACKGROUND_GRADIENT = Kw,
    v$[Zw] = Jw,
    v$[Qw] = tT,
    v$[iT] = nT,
    v$[eT] = "border.line.dash.offset",
    v$[sT] = rT,
    v$[hT] = Go,
    v$[aT] = "image.background.color",
    v$.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient",
    v$[oT] = fT,
    v$.IMAGE_BORDER_STYLE = v$[_T] = cT,
    v$[uT] = "image.border.line.dash",
    v$[dT] = "image.border.line.dash.offset",
    v$[lT] = v$[vT] = bT,
    v$.IMAGE_PADDING = yT,
    v$[gT] = pT,
    v$[xT] = mT,
    v$[ET] = wT,
    v$[TT] = OT,
    v$[MT] = IT,
    v$[kT] = ST,
    v$[CT] = "label.anchor.position",
    v$.LABEL_COLOR = jT,
    v$.LABEL_FONT_SIZE = PT,
    v$.LABEL_FONT_FAMILY = AT,
    v$[LT] = zT,
    v$[DT] = NT,
    v$[RT] = BT,
    v$.LABEL_POINTER = $T,
    v$[FT] = GT,
    v$[YT] = UT,
    v$[HT] = qT,
    v$.LABEL_SIZE = WT,
    v$[VT] = XT,
    v$.LABEL_BORDER = KT,
    v$.LABEL_BORDER_STYLE = ZT,
    v$[JT] = "label.background.color",
    v$[QT] = "label.background.gradient",
    v$[tO] = iO,
    v$[nO] = eO,
    v$.LABEL_SHADOW_COLOR = sO,
    v$[rO] = "label.shadow.offset.x",
    v$[hO] = "label.shadow.offset.y",
    v$.LABEL_Z_INDEX = aO,
    v$[oO] = fO,
    v$.GROUP_BACKGROUND_COLOR = "group.background.color",
    v$.GROUP_BACKGROUND_GRADIENT = "group.background.gradient",
    v$.GROUP_STROKE = _O,
    v$[cO] = uO,
    v$[dO] = "group.stroke.line.dash",
    v$[lO] = "group.stroke.line.dash.offset",
    v$[vO] = "edge.bundle.label.rotate",
    v$[bO] = "edge.bundle.label.position",
    v$.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position",
    v$[yO] = "edge.bundle.label.color",
    v$.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size",
    v$.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family",
    v$[gO] = "edge.bundle.label.font.style",
    v$[pO] = "edge.bundle.label.padding",
    v$[xO] = "edge.bundle.label.pointer.width",
    v$[mO] = "edge.bundle.label.pointer",
    v$[EO] = "edge.bundle.label.radius",
    v$[wO] = "edge.bundle.label.offset.x",
    v$[TO] = "edge.bundle.label.offset.y",
    v$[OO] = "edge.bundle.label.border",
    v$[MO] = "edge.bundle.label.border.color",
    v$[IO] = "edge.bundle.label.background.color",
    v$.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT = "edge.bundle.label.background.gradient",
    v$[kO] = "edge.bundle.label.rotatable",
    v$[SO] = CO,
    v$[jO] = PO,
    v$.EDGE_OUTLINE = AO,
    v$[LO] = zO,
    v$[DO] = NO,
    v$[RO] = "edge.line.dash.offset",
    v$[BO] = $O,
    v$[FO] = GO,
    v$[YO] = UO,
    v$[HO] = qO,
    v$.EDGE_EXTEND = WO,
    v$.EDGE_CONTROL_POINT = VO,
    v$[Lc] = "edge.split.by.percent",
    v$[Tc] = XO,
    v$[KO] = ZO,
    v$[Nc] = JO,
    v$[Bc] = QO,
    v$[tM] = iM,
    v$[nM] = eM,
    v$.ARROW_FROM = sM,
    v$[rM] = hM,
    v$[aM] = oM,
    v$[fM] = _M,
    v$[cM] = "arrow.from.stroke.style",
    v$[uM] = dM,
    v$[lM] = "arrow.from.outline.style",
    v$.ARROW_FROM_LINE_DASH = vM,
    v$.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset",
    v$[bM] = "arrow.from.fill.color",
    v$[yM] = "arrow.from.fill.gradient",
    v$[gM] = pM,
    v$[xM] = mM,
    v$.ARROW_TO = EM,
    v$[wM] = TM,
    v$[OM] = MM,
    v$[IM] = kM,
    v$[SM] = "arrow.to.stroke.style",
    v$[CM] = jM,
    v$[PM] = "arrow.to.outline.style",
    v$[AM] = LM,
    v$.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset",
    v$[zM] = DM,
    v$[NM] = "arrow.to.fill.gradient",
    v$[RM] = BM,
    v$.ARROW_TO_LINE_JOIN = $M;
    var b$ = new as,
    y$ = mR[bc],
    g$ = mR.PROPERTY_TYPE_STYLE,
    p$ = !1;
    b$._30(g$, v$[cw], null, FM),
    b$._30(g$, v$[_w], null, Ig),
    b$._30(g$, v$.SELECTION_SHADOW_BLUR, null, Tg),
    b$._30(g$, v$[cy], null, wg),
    b$._30(g$, v$[yw], null, "selectionShadowOffsetX"),
    b$._30(g$, v$[GM], null, "selectionShadowOffsetY"),
    b$._30(y$, Mh, Tx, Io),
    b$._30(g$, v$.LABEL_VISIBLE, Tx, YM),
    b$._30(g$, v$.LABEL_POSITION, Tx, Cf),
    b$._30(g$, v$.LABEL_ANCHOR_POSITION, Tx, hE),
    b$._30(g$, v$.LABEL_COLOR, Tx, UM),
    b$._30(g$, v$.LABEL_FONT_SIZE, Tx, $u),
    b$._30(g$, v$[HM], Tx, bb),
    b$._30(g$, v$[qM], Tx, UE),
    b$._30(g$, v$[JT], Tx, WM),
    b$._30(g$, v$[oO], Tx, VM),
    p$ || (b$._30(g$, v$[ww], null, Yy), b$._30(g$, v$[XM], null, Gy), b$._30(g$, v$[Mw], null, Og), b$._30(g$, v$[KM], null, Uy), b$._30(g$, v$.LABEL_FONT_FAMILY, Tx, Fu), b$._30(g$, v$[LT], Tx, Bu), b$._30(g$, v$[VT], Tx, ZM), b$._30(g$, v$[TT], Tx, Po), b$._30(g$, v$.LABEL_PADDING, Tx, Go), b$._30(g$, v$[RT], Tx, JM), b$._30(g$, v$[QM], Tx, mf), b$._30(g$, v$[FT], Tx, tI), b$._30(g$, v$[YT], Tx, FE), b$._30(g$, v$[HT], Tx, GE), b$._30(g$, v$[tO], Tx, iI), b$._30(g$, v$[QT], Tx, Tf), b$._30(g$, v$[nI], Tx, rE), b$._30(g$, v$[nO], Tx, Yy), b$._30(g$, v$.LABEL_SHADOW_COLOR, Tx, Gy), b$._30(g$, v$.LABEL_SHADOW_OFFSET_X, Tx, Og), b$._30(g$, v$[hO], Tx, Uy), b$._30(g$, v$[eI], Tx, $m), b$._30(g$, v$[pw], null, qy), b$._30(g$, v$.RENDER_COLOR_BLEND_MODE, null, Vy), b$._30(g$, v$[mw], null, Ew));
    var x$ = new as;
    x$._30(y$, Qm),
    x$._30(y$, hE, null, sI),
    x$._30(y$, Po, null, Po),
    p$ || (x$._30(g$, v$[Vw], null, WM), x$._30(g$, v$[rI], null, Tf), x$._30(g$, v$.PADDING, null, Go), x$._30(g$, v$[Zw], null, bb), x$._30(g$, v$.BORDER_RADIUS, null, tI), x$._30(g$, v$.BORDER_COLOR, null, UE), x$._30(g$, v$[iT], null, hI), x$._30(g$, v$[eT], null, HE)),
    x$._30(y$, Zy, Zy, Io, aI),
    x$._30(y$, rE, Zy, rE),
    x$._30(g$, v$[Sw], Zy, ko),
    x$._30(g$, v$.SHAPE_STROKE_STYLE, Zy, Dy),
    x$._30(g$, v$[zw], Zy, Ag),
    x$._30(g$, v$.LAYOUT_BY_PATH, Zy, jf),
    p$ || (x$._30(g$, v$[xT], Zy, oI), x$._30(g$, v$.SHAPE_OUTLINE, Zy, Pg), x$._30(g$, v$[Fw], Zy, jg), x$._30(g$, v$[Nw], Zy, Lg), x$._30(g$, v$[fI], Zy, zf), x$._30(g$, v$.SHAPE_LINE_DASH_OFFSET, Zy, $f), x$._30(g$, v$.LINE_CAP, Zy, Sg), x$._30(g$, v$[Uw], Zy, Cg), x$._30(g$, v$.IMAGE_BACKGROUND_COLOR, Zy, WM), x$._30(g$, v$.IMAGE_BACKGROUND_GRADIENT, Zy, Tf), x$._30(g$, v$.IMAGE_PADDING, Zy, Go), x$._30(g$, v$.IMAGE_BORDER, Zy, bb), x$._30(g$, v$[vT], Zy, tI), x$._30(g$, v$[_T], Zy, UE), x$._30(g$, v$[uT], Zy, hI), x$._30(g$, v$[dT], Zy, HE), x$._30(g$, v$[gT], Zy, $m), x$._30(g$, v$[ET], Zy, Ew)),
    x$._30(y$, ME, null, null, _I),
    x$._30(y$, cu, null, null, _I);
    var m$ = new as;
    m$._30(y$, SE, null, null, cI),
    m$._30(y$, CE, null, null, cI),
    m$._30(y$, kE, null, null, cI),
    m$._30(y$, Go, null, null, cI),
    m$._30(g$, v$[uI], dI, Ag),
    m$._30(g$, v$.GROUP_BACKGROUND_GRADIENT, dI, Lg),
    m$._30(g$, v$[lI], dI, ko),
    m$._30(g$, v$[cO], dI, Dy),
    m$._30(g$, v$.GROUP_STROKE_LINE_DASH, dI, zf),
    m$._30(g$, v$[lO], dI, $f);
    var E$ = new as;
    E$._30(y$, E_, dI, null, vI),
    E$._30(y$, Xm, dI, null, vI),
    E$._30(y$, Zc, dI, null, vI),
    E$._30(g$, v$.EDGE_WIDTH, dI, ko),
    E$._30(g$, v$[jO], dI, Dy),
    E$._30(g$, v$[bI], dI, yI),
    E$._30(g$, v$[fE], dI, gI),
    p$ || (E$._30(g$, v$[tM], null, iu, vI), E$._30(g$, v$.EDGE_TO_AT_EDGE, null, nu, vI), E$._30(g$, v$[pI], dI, Pg), E$._30(g$, v$[LO], dI, jg), E$._30(g$, v$.EDGE_LINE_DASH, dI, zf), E$._30(g$, v$.EDGE_LINE_DASH_OFFSET, dI, $f), E$._30(g$, v$.EDGE_CONTROL_POINT, dI, null, vI), E$._30(g$, v$[BO], dI, null, vI), E$._30(g$, v$[FO], dI, null, vI), E$._30(g$, v$.LINE_CAP, dI, Sg), E$._30(g$, v$[Uw], dI, Cg), E$._30(y$, qm, null, null, vI, !0), E$._30(y$, Qc, null, null, vI, !0), E$._30(g$, v$.ARROW_FROM_SIZE, dI, xI), E$._30(g$, v$[aM], dI, mI), E$._30(g$, v$.ARROW_FROM_STROKE, dI, EI), E$._30(g$, v$[cM], dI, wI), E$._30(g$, v$.ARROW_FROM_OUTLINE, dI, TI), E$._30(g$, v$[lM], dI, "fromArrowOutlineStyle"), E$._30(g$, v$[bM], dI, OI), E$._30(g$, v$[yM], dI, "fromArrowFillGradient"), E$._30(g$, v$[MI], dI, II), E$._30(g$, v$[kI], dI, "fromArrowLineDashOffset"), E$._30(g$, v$[xM], dI, SI), E$._30(g$, v$[gM], dI, CI), E$._30(g$, v$[wM], dI, jI), E$._30(g$, v$[OM], dI, PI), E$._30(g$, v$[IM], dI, AI), E$._30(g$, v$[SM], dI, LI), E$._30(g$, v$[CM], dI, zI), E$._30(g$, v$.ARROW_TO_OUTLINE_STYLE, dI, DI), E$._30(g$, v$[zM], dI, NI), E$._30(g$, v$[NM], dI, RI), E$._30(g$, v$[AM], dI, BI), E$._30(g$, v$[$I], dI, "toArrowLineDashOffset"), E$._30(g$, v$[FI], dI, GI), E$._30(g$, v$.ARROW_TO_LINE_CAP, dI, YI));
    var w$ = new as;
    w$._30(g$, v$[yO], UI, UM),
    w$._30(g$, v$[bO], UI, Cf),
    w$._30(g$, v$[HI], UI, hE),
    w$._30(g$, v$[qI], UI, $u),
    w$._30(g$, v$.EDGE_BUNDLE_LABEL_ROTATABLE, UI, iI),
    p$ || (w$._30(g$, v$[vO], UI, Po), w$._30(g$, v$.EDGE_BUNDLE_LABEL_FONT_FAMILY, UI, Fu), w$._30(g$, v$[gO], UI, Bu), w$._30(g$, v$.EDGE_BUNDLE_LABEL_PADDING, UI, Go), w$._30(g$, v$.EDGE_BUNDLE_LABEL_POINTER_WIDTH, UI, JM), w$._30(g$, v$.EDGE_BUNDLE_LABEL_POINTER, UI, mf), w$._30(g$, v$.EDGE_BUNDLE_LABEL_RADIUS, UI, tI), w$._30(g$, v$[wO], UI, FE), w$._30(g$, v$[TO], UI, GE), w$._30(g$, v$[OO], UI, bb), w$._30(g$, v$[MO], UI, UE), w$._30(g$, v$.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, UI, WM), w$._30(g$, v$[WI], UI, Tf));
    var T$ = new as;
    T$._30(y$, Qm),
    T$._30(g$, v$[Vw], null, WM),
    T$._30(g$, v$[rI], null, Tf),
    T$._30(g$, v$[hT], null, Go),
    T$._30(g$, v$[Zw], null, bb),
    T$._30(g$, v$.BORDER_RADIUS, null, tI),
    T$._30(g$, v$[Qw], null, UE),
    T$._30(g$, v$[iT], null, hI),
    T$._30(g$, v$[eT], null, HE),
    T$._30(y$, Po, null, Po),
    T$._30(y$, qm, null, null, VI),
    T$._30(y$, cE, Zy, Io),
    T$._30(y$, rE, Zy, rE),
    T$._30(g$, v$.SHAPE_STROKE, Zy, ko),
    T$._30(g$, v$[jw], Zy, Dy),
    T$._30(g$, v$[zw], Zy, Ag),
    T$._30(g$, v$[Nw], Zy, Lg),
    p$ || (T$._30(g$, v$[Bw], Zy, Pg), T$._30(g$, v$.SHAPE_OUTLINE_STYLE, Zy, jg), T$._30(g$, v$[fI], Zy, zf), T$._30(g$, v$[Lw], Zy, $f), T$._30(g$, v$[XI], Zy, Sg), T$._30(g$, v$[Uw], Zy, Cg), T$._30(g$, v$.LAYOUT_BY_PATH, Zy, jf), T$._30(g$, v$[aT], Zy, WM), T$._30(g$, v$.IMAGE_BACKGROUND_GRADIENT, Zy, Tf), T$._30(g$, v$[KI], Zy, Go), T$._30(g$, v$.IMAGE_BORDER, Zy, bb), T$._30(g$, v$[vT], Zy, tI), T$._30(g$, v$[_T], Zy, UE), T$._30(g$, v$[uT], Zy, hI), T$._30(g$, v$[dT], Zy, HE), T$._30(g$, v$.ARROW_FROM, Zy, yI), T$._30(g$, v$[rM], Zy, xI), T$._30(g$, v$.ARROW_FROM_OFFSET, Zy, mI), T$._30(g$, v$.ARROW_FROM_STROKE, Zy, EI), T$._30(g$, v$[cM], Zy, wI), T$._30(g$, v$[bM], Zy, OI), T$._30(g$, v$[yM], Zy, "fromArrowFillGradient"), T$._30(g$, v$[MI], Zy, II), T$._30(g$, v$[kI], Zy, "fromArrowLineDashOffset"), T$._30(g$, v$[xM], Zy, SI), T$._30(g$, v$[gM], Zy, CI), T$._30(g$, v$[wM], Zy, jI), T$._30(g$, v$[OM], Zy, PI), T$._30(g$, v$.ARROW_TO, Zy, gI), T$._30(g$, v$[IM], Zy, AI), T$._30(g$, v$[SM], Zy, LI), T$._30(g$, v$[zM], Zy, NI), T$._30(g$, v$.ARROW_TO_FILL_GRADIENT, Zy, RI), T$._30(g$, v$[AM], Zy, BI), T$._30(g$, v$[$I], Zy, "toArrowLineDashOffset"), T$._30(g$, v$[FI], Zy, GI), T$._30(g$, v$[RM], Zy, YI));
    var O$ = function(t, i) {
        return t = t.zIndex,
        i = i[$m],
        t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    },
    M$ = function(t, i) {
        this[pc] = new ON,
        N(this, M$, arguments),
        this.id = this.$data.id,
        this[Xc] = i,
        this._fo = [],
        this._o16 = new as
    };
    M$[bh] = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _o16: null,
        _fo: null,
        addChild: function(t, i) {
            t._jr = this,
            i !== n ? g(this._fo, t, i) : this._fo[Kr](t),
            t._ee && this._nyu(t),
            this[ZI](),
            this[JI]()
        },
        removeChild: function(t) {
            this._o16.removeBinding(t),
            t._jr = null,
            p(this._fo, t),
            this._jp && this._jp[Vr](t),
            this.invalidateSize()
        },
        getProperty: function(t, i) {
            return i == mR.PROPERTY_TYPE_STYLE ? this.graph[Ec](this[Pf], t) : i == mR[lw] ? this[Pf][wh](t) : this[Pf][t]
        },
        getStyle: function(t) {
            return this[Xc][Ec](this[Pf], t)
        },
        _15: function(t, i, n) {
            var e = this._o16.onBindingPropertyChange(this, t, i, n);
            return b$[QI](this, t, i, n) || e
        },
        onPropertyChange: function(t) {
            if ($m == t[ul]) return this[tk](),
            !0;
            if (zm == t[jo]) {
                if (Dm == t[ul]) return this.invalidate(),
                !0;
                var i = t.value;
                return i && i.ui ? (nh == t[ul] ? this._9d(i) : Vr == t[ul] && this[my](i.ui), !0) : !1
            }
            return this._15(t.kind, t[yl] || y$, t.value)
        },
        label: null,
        initLabel: function() {
            var t = new k$;
            t[Mh] = Tx,
            this.addChild(t),
            this.label = t
        },
        initialize: function() {
            this[ik](),
            this[Pf]._o19 && this[Pf]._o19.forEach(this._9d, this),
            b$.initBindingProperties(this),
            this._o16[nk](this, !1)
        },
        addBinding: function(t, i) {
            return i[dc] ? (i[Mu] = t, void this._o16._2g(i[dc], i)) : !1
        },
        _fs: function(t, i) {
            var n = this[Pf];
            if (!n._o19) return ! 1;
            var e = n._o19[Ld](t.id);
            if (!e || !e.bindingProperties) return ! 1;
            var s = e.bindingProperties;
            if (S(s)) {
                var r = !1;
                return l(s,
                function(t) {
                    return Io == t[lc] ? (r = os(n, i, t[dc], t[yl]), !1) : void 0
                },
                this),
                r
            }
            return Io == s[lc] ? os(n, i, s[dc], s[yl]) : !1
        },
        _9d: function(t) {
            var i = t.ui;
            if (i) {
                var n = t[ek];
                n && (Array.isArray(n) ? n[Kf](function(t) {
                    this[sk](i, t)
                },
                this) : this.addBinding(i, n)),
                this[rk](i)
            }
        },
        validate: function() {
            return this._nz1 || (this[iw](), this._nz1 = !0),
            this[nw]()
        },
        _$i: !0,
        invalidateChildrenIndex: function() {
            this._$i = !0
        },
        doValidate: function() {
            if (this._1v && (this._1v = !1, this.validateChildren() && (this[VE](), this[gf] = !0), this._$i && (this._$i = !1, rN ? this._fo = d(this._fo, O$) : this._fo[hk](O$))), Wn.call(this) && (this[Lf] = !0), this[Lf]) {
                aB[Yr](this),
                this[pc][py](this._fv);
                var t = this[ak] || 0,
                i = Math[sf](this.$selectionBorder || 0, this[ok] || 0, this[fk] || 0),
                n = Math[sf](this.$shadowOffsetY || 0, this[_k] || 0),
                e = Math[sf](2 * t, this.$shadowBlur, this[ck]);
                e += bN.UI_BOUNDS_GROW || 0;
                var s = e - i,
                r = e + i,
                h = e - n,
                a = e + n;
                return 0 > s && (s = 0),
                0 > r && (r = 0),
                0 > h && (h = 0),
                0 > a && (a = 0),
                this[pc].grow(h, s, a, r),
                this[KE] && this[KE](),
                this[uk] = !0,
                !0
            }
        },
        validateChildren: function() {
            var t, i = this._nzody,
            n = this[dk];
            i && (i[lk] = this[lk], i.$renderColorBlendMode = this[vk], i[bk] = this[bk], i.$shadowBlur = this[yk], i[ok] = this[ok], i.$shadowOffsetY = this[gk]),
            this[dk] = !1,
            i && i._1v && (n = i[qo]() || n, i.$x = 0, i.$y = 0, i.$invalidateRotate && aB[Yr](i), t = !0);
            for (var e = 0,
            s = this._fo[Fr]; s > e; e++) {
                var r = this._fo[e];
                if (r != i) {
                    var h = r._1v && r.validate(); (h || n) && r._i8 && Zn(r, i, this),
                    !t && h && (t = !0)
                }
            }
            return t
        },
        measure: function() {
            this._ji[Oa]();
            for (var t, i, n = 0,
            e = this._fo[Fr]; e > n; n++) t = this._fo[n],
            t._i8 && (i = t._fv, i[io] <= 0 || i[no] <= 0 || this._ji.addRect(t.$x + i.x, t.$y + i.y, i[io], i[no]))
        },
        _jp: null,
        _nyu: function(t) {
            if (!this._jp) {
                if (!t[VM]) return;
                return this._jp = new gN,
                this._jp[nh](t)
            }
            return t[VM] ? this._jp.add(t) : this._jp[Vr](t)
        },
        draw: function(t, i, n) {
            for (var e, s = 0,
            r = this._fo[Fr]; r > s; s++) e = this._fo[s],
            e._i8 && !e.showOnTop && e._jt(t, i, n, this)
        },
        _9n: function(t, i) {
            if (!this._i8 || !this._jp || !this._jp.length) return ! 1;
            t.save(),
            t[Ho](this.$x, this.$y),
            this[vf] && this[bf] && t.rotate(this[bf]),
            (this.offsetX || this.offsetY) && t[Ho](this[FE], this[GE]),
            this[df] && t[Po](this[df]),
            this[uf] && this._nzl && t[Ho]( - this._nzl.x, -this._nzl.y),
            this.shadowColor && (t.shadowColor = this[Gy], t[Yy] = this.shadowBlur * i, t[Og] = this[Og] * i, t[Uy] = this[Uy] * i),
            t[zg]();
            for (var n, e = 0,
            s = this._fo.length; s > e; e++) n = this._fo[e],
            n._i8 && n.showOnTop && n._jt(t, i, this.selected, this);
            t[Fy]()
        },
        doHitTest: function(t, i, n) {
            if (n) {
                if (!this._ji[Hd](t - n, i - n, 2 * n, 2 * n)) return ! 1
            } else if (!this._ji[Eo](t, i)) return ! 1;
            return this.hitTestChildren(t, i, n)
        },
        hitTestChildren: function(t, i, n) {
            for (var e, s = this._fo.length - 1; s >= 0; s--) if (e = this._fo[s], e._i8 && e[ru](t, i, n)) return e;
            return ! 1
        },
        destroy: function() {
            this._ided = !0;
            for (var t, i = this._fo[Fr] - 1; i >= 0; i--) t = this._fo[i],
            t[gc]()
        }
    },
    D(M$, d$),
    Z(M$.prototype, {
        renderColorBlendMode: {
            get: function() {
                return this[vk]
            },
            set: function(t) {
                this[vk] = t,
                this._1v = !0,
                this[pk] && (this.body[Vy] = this[vk])
            }
        },
        renderColor: {
            get: function() {
                return this.$renderColor
            },
            set: function(t) {
                this[lk] = t,
                this._1v = !0,
                this[pk] && (this[pk].renderColor = this[lk])
            }
        },
        bodyBounds: {
            get: function() {
                if (this[uk]) {
                    this[uk] = !1;
                    var t, i = this[pk];
                    t = i && i._i8 && !this._11() ? i._fv[Xr]() : this._fv[Xr](),
                    this.rotate && Di(t, this[Po], t),
                    t.x += this.$x,
                    t.y += this.$y,
                    this._o1z = t
                }
                return this._o1z
            }
        },
        bounds: {
            get: function() {
                return new ON((this.$x || 0) + this[pc].x, (this.$y || 0) + this[pc].y, this.uiBounds[io], this[pc].height)
            }
        },
        body: {
            get: function() {
                return this._nzody
            },
            set: function(t) {
                t && this._nzody != t && (this._nzody = t, this.bodyChanged = !0, this[JI]())
            }
        }
    }),
    bN[xk] = 1;
    var I$ = function() {
        N(this, I$, arguments)
    };
    I$.prototype = {
        strokeStyle: By,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jm: 1,
        _jn: 1,
        outline: 0,
        onDataChanged: function(t) {
            R(this, I$, rw, arguments),
            this._l0 && this._87 && this._l0._6x(this._87, this),
            t && this._o1m(t)
        },
        _o1m: function(t) {
            this._l0 = wn(t),
            this._l0[qo](),
            (this._l0._mf == PR || this._l0._7m()) && (this._87 || (this._87 = function() {
                this[AE](),
                this._jr && this._jr.graph && (this._jr[JI](), this._jr[Xc][Dm]())
            }), this._l0._nyg(this._87, this))
        },
        _l0: null,
        initialize: function() {
            this._o1m(this.$data)
        },
        _5g: function() {
            return this._l0 && this._l0.draw
        },
        _9v: function(t) {
            if (!t || t.width <= 0 || t[no] <= 0 || !this[mk] || !(this[rE] instanceof Object)) return this._jm = 1,
            void(this._jn = 1);
            var i = this[rE].width,
            e = this[rE][no];
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jm = 1,
            void(this._jn = 1);
            var s, r, h = t.width,
            a = t[no];
            i >= 0 && (s = i / h),
            e >= 0 && (r = e / a),
            0 > i ? s = r: 0 > e && (r = s),
            this._jm = s,
            this._jn = r
        },
        validateSize: function() {
            if (this[Ek]) {
                this[Ek] = !1;
                var t = this._originalBounds;
                this._jm,
                this._jn,
                this._9v(t),
                this[wk](t[io] * this._jm, t[no] * this._jn, t.x * this._jm, t.y * this._jn)
            }
        },
        measure: function() {
            var t = this._l0.getBounds(this[ko] + this[Pg]);
            return t ? (this.$invalidateScale = !0, void(this._originalBounds = t.clone())) : void this._ji[Th](0, 0, 0, 0)
        },
        onBoundsChanged: function() {
            this[Tk] = !0
        },
        _26: function() {
            this[Tk] = !1,
            this._fillGradient = this[Lg] ? BR[bh].generatorGradient[Yr](this[Ok], this._8j) : null
        },
        _ka: function(t) {
            var i, n;
            if (db == this[Mk]) i = 1,
            n = -1;
            else {
                if (lb != this[Mk]) return;
                i = -1,
                n = 1
            }
            var e = this._ji.cx,
            s = this._ji.cy;
            t.translate(e, s),
            t.scale(i, n),
            t.translate( - e, -s)
        },
        draw: function(t, i, n, e) {
            if (this._jm && this._jn) {
                if (this[Tk] && this._26(), t[Ug](), this[Mk] && this._ka(t), this._l0._mf == LR) return t.scale(this._jm, this._jn),
                this._l0._mc.draw(t, i, this, n, e || this),
                void t[Fy]();
                n && this._83(t, i, e),
                this._l0[Do](t, i, this, this._jm, this._jn),
                t[Fy]()
            }
        },
        doHitTest: function(t, i, n) {
            if (this._l0[ru]) {
                if (db == this.$adjustType) {
                    var e = this._ji.cy;
                    i = 2 * e - i
                } else if (lb == this[Mk]) {
                    var s = this._ji.cx;
                    t = 2 * s - t
                }
                t /= this._jm,
                i /= this._jn;
                var r = (this._jm + this._jn) / 2;
                return r > 1 && (n /= r, n = 0 | n),
                this._l0._mc instanceof nB ? this._l0._mc[ru](t, i, n, !0, this[Ik], this[kk] || this[Ok]) : this._l0[ru](t, i, n)
            }
            return ! 0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    },
    D(I$, d$),
    rs(I$[bh], {
        adjustType: {},
        fillColor: {},
        size: {
            validateFlags: [tb, Sk]
        },
        fillGradient: {
            validateFlags: [Ck]
        }
    }),
    Z(I$.prototype, {
        originalBounds: {
            get: function() {
                return this._originalBounds
            }
        }
    }),
    bN.ALIGN_POSITION = IN[rg];
    var k$ = function() {
        N(this, k$, arguments),
        this[UM] = bN.LABEL_COLOR
    };
    k$.prototype = {
        color: bN[jk],
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _gh: null,
        alignPosition: null,
        measure: function() {
            this[vo];
            var t = Gi(this[Pf], this[Pk] || bN.FONT_SIZE, this[Ak]);
            if (this._gh = t, this[mk]) {
                var i = this.$size.width || 0,
                n = this.$size.height || 0;
                return this[wk](i > t.width ? i: t.width, n > t[no] ? n: t[no])
            }
            return this[wk](t[io], t[no])
        },
        doHitTest: function(t, i, n) {
            return this[Pf] ? Ln(t, i, n, this) : !1
        },
        draw: function(t, i, n, e) {
            n && this._83(t, i, e);
            var s = this[Pk] || bN[Id];
            if (this[vf] && this[bf]) {
                var r = vn(this[bf]);
                r > pN && 3 * pN > r && (t[Ho](this._ji[io] / 2, this._ji[no] / 2), t.rotate(Math.PI), t[Ho]( - this._ji[io] / 2, -this._ji[no] / 2))
            }
            var h = this[ZM] || bN[Lk],
            a = h[Xh],
            o = h[Xd],
            f = s * bN.LINE_HEIGHT,
            _ = f / 2;
            if (o != jN && this._gh[no] < this._ji[no]) {
                var c = this._ji[no] - this._gh[no];
                _ += o == PN ? c / 2 : c
            }
            t[Ho](0, _),
            t[vo] != this[Ak] && (t[vo] = this[Ak]),
            a == SN ? (t[Py] = tu, t.translate(this._ji[io] / 2, 0)) : a == CN ? (t[Py] = Wh, t.translate(this._ji[io], 0)) : t.textAlign = Uo,
            t[zk] = Ay,
            t[ky] = this.color;
            for (var u = 0,
            d = this.$data[sh](yo), l = 0, v = d.length; v > l; l++) {
                var b = d[l];
                t[$y](b, 0, u),
                u += f
            }
        },
        _5g: function() {
            return null != this[Pf] || this.$size
        },
        $invalidateFont: !0
    },
    D(k$, d$),
    rs(k$.prototype, {
        size: {
            validateFlags: [dw]
        },
        fontStyle: {
            validateFlags: [dw, Dk]
        },
        fontSize: {
            validateFlags: [dw, Dk]
        },
        fontFamily: {
            validateFlags: [dw, Dk]
        }
    }),
    Z(k$.prototype, {
        font: {
            get: function() {
                return this[Nk] && (this[Nk] = !1, this[Ak] = (this[Rk] || bN[Bk]) + ih + (this.$fontSize || bN[Id]) + kd + (this.$fontFamily || bN[Sd])),
                this.$font
            }
        }
    });
    var S$ = function(t) {
        t = t || new nB,
        this[$k] = new ON,
        N(this, S$, [t])
    };
    S$[bh] = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function() {
            this.$invalidateFromArrow = !0,
            this[Fk] = !0,
            this[Pf].getBounds(this[Ik] + this.$outline, this.pathBounds),
            this[wk](this.pathBounds)
        },
        validateSize: function() {
            if (this.$invalidateFromArrow || this[Fk]) {
                var t = this[$k][Xr]();
                if (this[Gk]) {
                    this.$invalidateFromArrow = !1;
                    var i = this[Yk]();
                    i && t[nh](i)
                }
                if (this[Fk]) {
                    this[Fk] = !1;
                    var i = this.validateToArrow();
                    i && t.add(i)
                }
                this[wk](t)
            }
        },
        validateFromArrow: function() {
            if (!this[Pf]._jf || !this[Uk]) return void(this[Hk] = null);
            var t = this[Pf],
            i = 0,
            n = 0,
            e = this.$fromArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._jf)),
            this[qk] = t[Xo](i, n),
            this[qk][Po] = Math.PI + this[qk][Po] || 0,
            this[Hk] = Ns(this[Uk], this[Wk]);
            var s = this.$fromArrowShape[mo](this[Vk].lineWidth + this[Vk][Pg]);
            return this.fromArrowFillGradient instanceof xR[Xk] ? this[Vk]._fillGradient = BR[bh][Kk].call(this[Zk], s) : this.fromArrowStyles && (this[Vk]._fillGradient = null),
            Ni(s, this.fromArrowLocation.rotate, s, s[Wh], s.cy),
            s[sw](this.fromArrowLocation.x, this[qk].y),
            s
        },
        validateToArrow: function() {
            if (!this[Pf]._jf || !this[Jk]) return void(this[Qk] = null);
            var t = this.$data,
            i = 0,
            n = 0,
            e = this.$toArrowOffset;
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0),
            0 > i && i > -1 && (i *= t._jf),
            i += t._jf,
            this[tS] = t.getLocation(i, n),
            this[Qk] = Ns(this[Jk], this[iS]);
            var s = this[Qk].getBounds(this[nS][ko] + this[nS].outline);
            return this.toArrowFillGradient instanceof xR.Gradient ? this[nS]._fillGradient = BR[bh][Kk][Yr](this[RI], s) : this[nS] && (this[nS]._fillGradient = null),
            Ni(s, this[tS][Po], s, s[Wh], s.cy),
            s[sw](this[tS].x, this.toArrowLocation.y),
            s
        },
        _2q: function(t) {
            var i = t ? "from": Xm,
            e = this[i + eS];
            e === n && (e = this[Ik]);
            var s = this[i + sS];
            s === n && (s = this[Dy]);
            var r = this[i + rS];
            r || (this[i + rS] = r = {}),
            r[ko] = e,
            r.strokeStyle = s,
            r[zf] = this[i + hS],
            r[$f] = this[i + aS],
            r[Ag] = this[i + oS],
            r[Lg] = this[i + fS],
            r[Sg] = this[i + _S],
            r.lineJoin = this[i + cS],
            r[Pg] = this[i + uS] || 0,
            r.outlineStyle = this[i + dS]
        },
        doValidate: function() {
            return this.$fromArrow && this._2q(!0),
            this[Jk] && this._2q(!1),
            R(this, S$, nw)
        },
        drawArrow: function(t, i, n, e) {
            if (this.$fromArrow && this[Hk]) {
                t[Ug]();
                var s = this[qk],
                r = s.x,
                h = s.y,
                a = s[Po];
                t.translate(r, h),
                a && t.rotate(a),
                this[Hk][Do](t, i, this[Vk], n, e),
                t.restore()
            }
            if (this[Jk] && this[Qk]) {
                t[Ug]();
                var s = this[tS],
                r = s.x,
                h = s.y,
                a = s[Po];
                t.translate(r, h),
                a && t[Po](a),
                this.$toArrowShape[Do](t, i, this.toArrowStyles, n, e),
                t[Fy]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function() {
            this.$invalidateFillGradient = !0
        },
        _26: function() {
            this[Tk] = !1,
            this._fillGradient = this[Ok] ? BR[bh][Kk][Yr](this[Ok], this._8j) : null
        },
        draw: function(t, i, n, e) {
            this[Tk] && this._26(),
            this[Pf][Do](t, i, this, n, e),
            this.drawArrow(t, i, n, e)
        },
        doHitTest: function(t, i, n) {
            if (this[Pf].hitTest(t, i, n, !0, this[Ik] + this[lS], this[kk] || this[Ok])) return ! 0;
            if (this[Jk] && this[Qk]) {
                var e = t - this.toArrowLocation.x,
                s = i - this[tS].y;
                if (this[tS][Po]) {
                    var r = Ai(e, s, -this[tS].rotate);
                    e = r.x,
                    s = r.y
                }
                var h = this.toArrowStyles[Ag] || this[nS][Lg];
                if (this[Qk][ru](e, s, n, !0, this[nS][ko], h)) return ! 0
            }
            if (this.$fromArrow && this[Hk]) {
                var e = t - this[qk].x,
                s = i - this.fromArrowLocation.y;
                if (this[qk][Po]) {
                    var r = Ai(e, s, -this.fromArrowLocation.rotate);
                    e = r.x,
                    s = r.y
                }
                var h = this[Vk].fillColor || this[Vk][Lg];
                if (this[Hk][ru](e, s, n, !0, this[Vk][ko], h)) return ! 0
            }
            return ! 1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    },
    D(S$, d$),
    rs(S$[bh], {
        fillColor: {},
        fillGradient: {
            validateFlags: [Ck]
        },
        fromArrowOffset: {
            validateFlags: [vS, tb]
        },
        fromArrowSize: {
            validateFlags: [vS, tb]
        },
        fromArrow: {
            validateFlags: [vS, tb]
        },
        fromArrowOutline: {
            validateFlags: [vS, tb]
        },
        fromArrowStroke: {
            validateFlags: [vS, tb]
        },
        toArrowOffset: {
            validateFlags: [bS, tb]
        },
        toArrowSize: {
            validateFlags: [bS, tb]
        },
        toArrow: {
            validateFlags: [bS, tb]
        },
        toArrowOutline: {
            validateFlags: [bS, tb]
        },
        toArrowStroke: {
            validateFlags: [bS, tb]
        },
        outline: {
            value: 0,
            validateFlags: [dw]
        }
    }),
    Z(S$[bh], {
        length: {
            get: function() {
                return this.data.length
            }
        }
    }),
    fs[bh] = {
        shape: null,
        path: null,
        initialize: function() {
            R(this, fs, iw),
            this[cE] = new nB,
            this[cE]._dt = !1,
            this.shape = new S$(this[cE]),
            this[rk](this[dI], 0),
            this._nzody = this.shape,
            E$[nk](this)
        },
        _1w: !0,
        _5x: null,
        _11: function() {
            return ! 1
        },
        _4p: function() {
            return ! 1
        },
        validatePoints: function() {
            this[dI][AE]();
            var t = this[Pf],
            i = this[cE];
            i.clear();
            var n = t[x_],
            e = t[p_];
            n && e && Ys(this, t, i, n, e)
        },
        drawLoopedEdge: function(t, i, n, e) {
            Ws(this, e, t)
        },
        drawEdge: function(t, i, n, e, s, r) {
            var h = this[Ec](v$[BO]),
            a = this[Ec](v$[FO]);
            if (h && (s.x += h.x || 0, s.y += h.y || 0), a && (r.x += a.x || 0, r.y += a.y || 0), e == mR[yS]) {
                var o = s.center,
                f = r[tu],
                _ = (o.x + f.x) / 2,
                c = (o.y + f.y) / 2,
                u = o.x - f.x,
                d = o.y - f.y,
                l = Math[po](u * u + d * d),
                v = Math[Uh](d, u);
                v += Math.PI / 6,
                l *= .04,
                l > 30 && (l = 30);
                var b = Math[Hh](v) * l,
                y = Math[to](v) * l;
                return t[D_](_ - y, c + b),
                void t[D_](_ + y, c - b)
            }
            var g = qs(this, this[Io], s, r, i, n, s[tu], r[tu]);
            g && (t._fy = g)
        },
        _2k: function() {
            if (!this.$data.isBundleEnabled()) return null;
            var t = this[Xc]._8l._90(this[Pf]);
            if (!t || !t.canBind(this.graph) || !t._hz) return null;
            var i = t[gS](this);
            return t.isPositiveOrder(this[Pf]) || (i = -i),
            i
        },
        checkBundleLabel: function() {
            var t = this[pS]();
            return t ? (this[UI] || this[xS](), this[UI]._i8 = !0, void(this[UI][Io] = t)) : void(this[UI] && (this[UI]._i8 = !1, this[UI][Io] = null))
        },
        createBundleLabel: function() {
            var t = new k$;
            t[mS] = !1,
            this.bundleLabel = t,
            this[rk](this[UI]),
            w$[nk](this)
        },
        getBundleLabel: function() {
            return this[Xc][pS](this[Io])
        },
        doValidate: function() {
            return this._1w && (this._1w = !1, this[ES]()),
            this.checkBundleLabel(),
            R(this, fs, nw)
        },
        _51: function() {
            this._1w = !0,
            this[JI]()
        },
        _15: function(t, i, n) {
            var e = this._o16.onBindingPropertyChange(this, t, i, n);
            return e = b$[QI](this, t, i, n) || e,
            this[UI] && this[UI][Pf] && (e = w$.onBindingPropertyChange(this, t, i, n) || e),
            E$.onBindingPropertyChange(this, t, i, n) || e
        }
    },
    D(fs, M$),
    fs[wS] = function(t, i, n, e) {
        if (t[L_](i.x, i.y), !e || e == mR.EDGE_TYPE_DEFAULT) return void t[D_](n.x, n.y);
        if (e == mR[jc]) t[D_](i.x, n.y);
        else if (e == mR[Ic]) t[D_](n.x, i.y);
        else if (0 == e[Zr](mR[Yc])) {
            var s;
            s = e == mR.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : e == mR[Cc] ? !1 : Math[Vh](i.x - n.x) > Math.abs(i.y - n.y);
            var r = (i.x + n.x) / 2,
            h = (i.y + n.y) / 2;
            s ? (t.lineTo(r, i.y), t[D_](r, n.y)) : (t[D_](i.x, h), t.lineTo(n.x, h))
        }
        t.lineTo(n.x, n.y)
    },
    Z(fs[bh], {
        length: {
            get: function() {
                return this[cE] ? this[cE][Fr] : 0
            }
        }
    }),
    fs[bh].addPoint = function(t, i, n) {
        var e = In(this[cE], t, i, n);
        if (e && e[Fr] > 2) {
            var s = this[Io],
            r = e[e[Fr] - 1];
            s[TS] = r.type == XR ? e[qr](1, e[Fr] - 2) : e[qr](1, e[Fr] - 1)
        }
    },
    _s[bh] = {
        _35: null,
        image: null,
        initialize: function() {
            R(this, _s, iw),
            this._nyo(),
            x$.initBindingProperties(this)
        },
        _o1m: function() {
            this[Io].image ? this.image && (this[pk] = this[Zy]) : this[Tx] && (this.body = this[Tx])
        },
        _nyo: function() {
            this.image = new I$,
            this[rk](this.image, 0),
            this._o1m()
        },
        doValidate: function() {
            this.body && (this instanceof ir && !this[Pf][CE] && this._67() ? this[pk][uf] = !1 : (this[pk][uf] = null != this._35, this[pk][hE] = this._35));
            var t = this.$data[Jm],
            i = 0,
            n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this.$invalidateBounds = !0),
            this.$x = i,
            this.$y = n,
            M$[bh].doValidate[Yr](this) || e
        },
        _15: function(t, i, n) {
            var e = this._o16[QI](this, t, i, n);
            return e = b$[QI](this, t, i, n) || e,
            x$.onBindingPropertyChange(this, t, i, n) || e
        }
    },
    D(_s, M$);
    var C$ = function(t, i) {
        return t = t[Pf][$m] || 0,
        i = i.$data.zIndex || 0,
        t - i
    };
    cs[bh] = {
        _ls: 1,
        _o1r: null,
        _8t: null,
        _8o: null,
        _$n: !0,
        _ng: null,
        _nc: null,
        _jw: null,
        _nzb: null,
        _74: !1,
        _nz1: !1,
        _kj: null,
        _4i: function(t, i) {
            for (var n = this._o1r,
            e = 0,
            s = n[Fr]; s > e; e++) if (t.call(i, n[e]) === !1) return ! 1
        },
        _fb: function(t, i) {
            this._ng.forEach(t, i)
        },
        _16: function(t, i) {
            for (var n = this._o1r,
            e = n.length - 1; e >= 0; e--) if (t[Yr](i, n[e]) === !1) return ! 1
        },
        _4k: function(t, i) {
            this._ng[OS](t, i)
        },
        _3x: function(t, i) {
            this._7r && this._7r._3x && this._7r._3x(t, i)
        },
        _o1v: function() {
            this._kj._57(),
            this._l1 && this._l1[MS] ? this._kj._f0(0, 0) : this._kj._2z = !0
        },
        _4m: function() {
            return this._$n && (this._$n = !1, this._28()),
            this._8o
        },
        _4b: function() {
            return this._kj._1k ? !1 : (this._kj._1k = !0, void this._o1g())
        },
        _o1g: function() {
            this._74 || (this._74 = !0, E(this._fu[My](this)))
        },
        _nz4: function() {
            var t = !this._nz1 || 0 == this._ng[Fr];
            this._nz1 || (this._nz1 = !0, this._o1v(), this._$n = !0),
            this._nyw(t);
            var i = this._jw.g;
            if (this._ng.isEmpty()) return i._l5(),
            this._topCanvas._jt(),
            this._74 = !1,
            this._kj._ki(this, !0),
            void this._4m();
            if (this._kj._ki(this, this._l1.fullRefresh || this._nzb._ml), this._kl) {
                var n = this._la;
                i.canvas[so] && (n *= i[ho][so]),
                this._kl(i, n, t)
            }
            this._nzb._l5(),
            this._kj._6v(),
            this._topCanvas._jt(),
            this._74 = !1
        },
        _fu: function() {
            this._74 && (this._ided || (this._nz1 && this._l1 && this._l1._13 && (this._l1._13 = !1, this._l1[Kf](function(t) {
                t[Lm](!0)
            })), this._nz4(), this._2f()))
        },
        _gd: null,
        _1q: function(t, i, n, e, s) {
            if (!n || !e) return void this._62();
            var r = this._o1r,
            h = this._8t;
            this._62(),
            this._gd[Fr] = 0;
            var a, o = {},
            f = this._nzb;
            s = s || f._ml;
            for (var _, c, u, d, l, v, b = this._ng._k2,
            y = t + n,
            g = i + e,
            p = 0,
            x = b[Fr]; x > p; p++) if (v = b[p], l = v.__oldBounds, v.__oldBounds = null, v._i8) if (d = v.__jiChanged, v.__jiChanged = !1, _ = v[pc], c = _.x + v.$x, u = _.y + v.$y, y > c && g > u && c + _[io] > t && u + _[no] > i) {
                if (a = v[Pf].zIndex, a in o || (o[a] = !0, this._gd[Kr](a || 0)), r[Kr](v), this._8t[v.id] = v, s) continue;
                l && (f._ms(l.x, l.y, l[io], l[no]), s = f._ml),
                d && (f._ms(c, u, _.width, _.height), s = f._ml)
            } else ! s && h[v.id] && l && (f._ms(l.x, l.y, l[io], l[no]), s = f._ml);
            else ! s && l && (f._ms(l.x, l.y, l[io], l[no]), s = f._ml)
        },
        _o1x: function(t) {
            var i = t[Pf].__i8Changed;
            return t.$data.__i8Changed = !1,
            t._1v || t[Pf]._74 ? (t[Pf]._74 = !1, t._nz1 && (t.__oldBounds = {
                x: t.$x + t[pc].x,
                y: t.$y + t[pc].y,
                width: t.uiBounds[io],
                height: t.uiBounds.height
            }), t.__jiChanged = t[qo](), i || t.__jiChanged) : (i && t._nz1 && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t[pc].y,
                width: t[pc][io],
                height: t[pc][no]
            }), i)
        },
        _kl: function(t, i, n, e) {
            e = e || this._kj._6n;
            var s = e.x,
            r = e.y,
            h = e[io],
            a = e[no];
            this._1q(s, r, h, a, n),
            this._4m(),
            this._gd[Fr] && (rN ? (this._gd[hk](), this._o1r = d(this._o1r, C$)) : this._o1r.sort(C$));
            try {
                this._ik(t, i)
            } catch(o) {
                xR[Yh](o),
                this._liFlag || (this._liFlag = !0, this._l1[Dm]())
            }
        },
        _ik: function(t, i) {
            t[Ug](),
            this._nzb._jv(t, this._jw, this._kj),
            this._kj._nzq(t);
            for (var n, e, s = this._o1r,
            r = [], h = 0, a = s.length; a > h; h++) n = s[h],
            e = n[pc],
            (this._nzb._ml || this._nzb._fm(e.x + n.$x, e.y + n.$y, e[io], e[no])) && (n._jt(t, i), n._jp && n._jp[Fr] && r[Kr](n));
            if (r[Fr]) for (h = 0, a = r[Fr]; a > h; h++) r[h]._9n(t, i);
            t[Fy]()
        },
        _gi: function(t, i, n) {
            t.save(),
            t[Ho]( - n.x * i, -n.y * i),
            t[Ta](i, i);
            var e, s, r = this._ng._k2[Ur]();
            this._gd[Fr] && (rN ? (this._gd[hk](), r = d(r, C$)) : r.sort(C$));
            for (var h = [], a = 0, o = r[Fr]; o > a; a++) e = r[a],
            e._i8 && (s = e[pc], n[Hd](s.x + e.$x, s.y + e.$y, s[io], s[no]) && (e._jt(t, i), e._jp && e._jp[Fr] && h.push(e)));
            if (h.length) for (a = 0, o = h[Fr]; o > a; a++) h[a]._9n(t, i);
            t[Fy]()
        },
        _1f: function() {},
        _28: function() {
            for (var t, i, n = this._ng._k2,
            e = new ON,
            s = n.length - 1; s >= 0; s--) t = n[s],
            t._i8 && (i = t[pc], e[qd](t.$x + i.x, t.$y + i.y, i[io], i[no]));
            var r = this._8o;
            this._8o = e,
            e[Al](r) || this._1f(r, e)
        },
        _nyw: function() {
            for (var t, i = this._ng._k2,
            n = i[Fr] - 1; n >= 0; n--) t = i[n],
            this._o1x(t) && !this._$n && (this._$n = !0)
        },
        _23: function(t, i, n, e) {
            this._nzb._ml || (t && (t > 0 && this._nzb._ms(this._kj._6n.x, this._kj._6n.y, t / this._kj._la, this._kj._9o / this._kj._la), n + t < this._kj._o15 && this._nzb._ms(this._kj._6n.x + (n + t) / this._kj._la, this._kj._6n.y, (this._kj._o15 - n - t) / this._kj._la, this._kj._9o / this._kj._la)), i && (i > 0 && this._nzb._ms(this._kj._6n.x, this._kj._6n.y, this._kj._o15 / this._kj._la, i / this._kj._la), e + i < this._kj._9o && this._nzb._ms(this._kj._6n.x, this._kj._6n.y + (e + i) / this._kj._la, this._kj._o15 / this._kj._la, (this._kj._9o - e - i) / this._kj._la)))
        },
        _dz: function(t, i) {
            this._o1g(),
            this._kj._dz(t, i)
        },
        _nyy: function(t, i, n) {
            this._o1g(),
            this._kj._nyy(t, i, n)
        },
        _92: function() {},
        _g2: function(t, i, n) {
            return this._nz1 ? void(this._kj._g2(t, i, n) !== !1 && this._o1g()) : void(this._kj._la = t)
        },
        _1z: function() {
            var t = this._4m();
            if (!t[Af]()) {
                var i = this._kj._o15 / t[io],
                n = this._kj._9o / t[no],
                e = Math[go](i, n);
                return e = Math.max(this._gs, Math.min(this._fq, e)),
                {
                    scale: e,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _kn: function(t, i, n) {
            return this._kj._kn(t, i, n) === !1 ? !1 : void this._o1g()
        },
        _ih: function(t, i) {
            return this._kj._ih(t, i) === !1 ? !1 : void this._o1g()
        },
        _kp: function(t, i) {
            return this._kj._kp(t, i) === !1 ? !1 : void this._o1g()
        },
        _7b: function() {
            return this._kj._7bFlag ? !1 : (this._kj._7bFlag = !0, void this._o1g())
        },
        _62: function() {
            this._o1r[Fr] = 0,
            this._8t = {}
        },
        _lr: function() {
            this._l5()
        },
        _id: function() {
            this._l5(),
            this._ided = !0,
            this._74 = !1,
            this._topCanvas.clear(),
            this._8e.length = 0,
            this._7r && (this._7r._id(), delete this._7r)
        },
        _l5: function() {
            this._nz1 = !1,
            this._$n = !0,
            this._ng[Oa](),
            this._62(),
            this._nzb._l5(),
            this._o1g()
        },
        _88: function(t, i, n, e) {
            var s = this._la;
            return new ON(this._d3(t), this._d4(i), n / s, e / s)
        },
        _d3: function(t) {
            return this._kj._d3(t)
        },
        _d4: function(t) {
            return this._kj._d4(t)
        },
        _e9: function(t) {
            return this._kj._e9(t)
        },
        _eb: function(t) {
            return this._kj._eb(t)
        },
        _lp: function(t) {
            return this._ng[Ld](t.id || t)
        },
        _$h: function(t) {
            var i = this._8c(t);
            return i.x = this._d3(i.x),
            i.y = this._d4(i.y),
            i
        },
        _gu: function(t, i) {
            return {
                x: this._e9(t),
                y: this._eb(i)
            }
        },
        _ed: function(t, i) {
            return {
                x: this._d3(t),
                y: this._d4(i)
            }
        },
        _8c: function(t) {
            return yi(t, this._jwPanel)
        },
        _3v: function(t) {
            if (t[IS] !== n) return t[IS] ? this._ng.getById(t.uiId) : null;
            var i = Math[wo](bN.SELECTION_TOLERANCE / this._kj._la) || .1;
            this._jw[so] && (i *= this._jw[so]);
            for (var e, s = this._$h(t), r = s.x, h = s.y, a = this._o1r, o = a[Fr] - 1; o >= 0; o--) if (e = a[o], e._i8 && e[ru](r, h, i)) return t.uiId = e.id,
            e;
            t[IS] = null
        },
        hitTest: function(t) {
            var i = this._3v(t);
            if (!i) return null;
            var n = Math.round(bN.SELECTION_TOLERANCE / this._kj._la) || 1;
            this._jw.ratio && (n *= this._jw[so]);
            var e = this._$h(t),
            s = e.x,
            r = e.y,
            h = i[ru](s, r, n, !0);
            return h instanceof d$ ? h: i
        },
        _nz6: function(t) {
            t.id !== n && (t = t.id);
            var i = this._ng[Ld](t);
            return i ? new ON((i.$x || 0) + i[pc].x, (i.$y || 0) + i.uiBounds.y, i[pc][io], i[pc].height) : void 0
        },
        _8e: null,
        _2f: function() {
            if (!this._8e[Fr]) return ! 1;
            var t = this._8e;
            this._8e = [],
            l(t,
            function(t) {
                try {
                    t.delay ? m(t[Yr], t[xh], t.delay) : t[Yr].call(t[xh])
                } catch(i) {}
            },
            this),
            this._fu()
        },
        callLater: function(t, i, n) {
            i && M(i) && (n = i, i = null);
            var e = this._8e;
            e[Kr]({
                call: t,
                scope: i,
                delay: n
            }),
            this._74 || this._2f()
        },
        _6l: function() {
            return this._jwPanel || this._5q(),
            this._jwPanel
        },
        _5q: function() {
            var t = i[uo](uu);
            t[Jr] = L$,
            t[kS] = 0,
            this._jw = us(t),
            this.ratio = this._jw.ratio || 1,
            this._topCanvas = new ar(this, t),
            this._jwPanel = t
        },
        _dw: function(t) {
            var i = this._6l();
            i[xy] && i[xy].removeChild(i),
            t[mc](this._6l()),
            T(t, SS)
        }
    },
    bi(CS, jS);
    var j$ = {
        position: mu,
        "user-select": xu,
        outline: xu,
        "transform-origin": PS,
        "-webkit-tap-highlight-color": Hg
    },
    P$ = AS;
    bi(Bh + P$, j$);
    var A$ = {
        width: Eu,
        height: Eu,
        overflow: pu,
        outline: xu,
        padding: LS
    },
    L$ = zS;
    bi(Bh + L$, A$),
    Z(cs[bh], {
        _6n: {
            get: function() {
                return this._kj._6n
            }
        },
        _et: {
            get: function() {
                return this._kj._et
            },
            set: function(t) {
                return ! t || 1 > t ? !1 : void(this._kj._et = t)
            }
        },
        _fq: {
            get: function() {
                return this._kj._fq
            },
            set: function(t) {
                return ! t || 1 > t ? !1 : void(this._kj._fq = t)
            }
        },
        _gs: {
            get: function() {
                return this._kj._gs
            },
            set: function(t) {
                return ! t || 0 >= t ? !1 : void(this._kj._gs = t)
            }
        },
        _la: {
            get: function() {
                return this._kj._g5()
            },
            set: function(t) {
                this._g2(t)
            }
        },
        _nq: {
            get: function() {
                return this._kj._lv()
            }
        },
        _no: {
            get: function() {
                return this._kj._lu()
            }
        }
    }),
    ds[bh] = {
        _d9: null,
        _o15: 0,
        _9o: 0,
        _2z: !0,
        _1k: !0,
        _kj: null,
        _6n: null,
        _et: 1.3,
        _fq: 10,
        _gs: .1,
        _la: 1,
        _nq: 0,
        _no: 0,
        _6v: function() {
            this._kj._h9(this._d9._jw)
        },
        _57: function() {
            return this._1k = !1,
            this._6e(this._d9._jwPanel.clientWidth, this._d9._jwPanel[nd])
        },
        _6e: function(t, i) {
            return this._o15 == t && this._9o == i ? !1 : (this._o15 = t, this._9o = i, void this._d9._3x(t, i))
        },
        _f0: function(t, i, n) {
            n && (n = Math[sf](this._gs, Math[go](this._fq, n)), this._la = n),
            this._nq = this._o15 / 2 - t * this._la,
            this._no = this._9o / 2 - i * this._la,
            this._2z = !0
        },
        _3k: function(t, i) {
            t = t || this._o15,
            i = i || this._9o,
            this._6n.set( - this._nq / this._la, -this._no / this._la, t / this._la, i / this._la)
        },
        _kn: function(t, i, n) {
            return this._g2(this._6h() * t, i, n)
        },
        _kp: function(t, i) {
            return this._g2(this._6h() * this._et, t, i)
        },
        _ih: function(t, i) {
            return this._g2(this._6h() / this._et, t, i)
        },
        _g2: function(t, i, e) {
            this._7bFlag = !1,
            t = Math.max(this._gs, Math.min(this._fq, t));
            var s = this._6h();
            return i === n && (i = this._o15 / 2, e = this._9o / 2),
            t != s && (this._2z = !0, this._d9._92(s, t)),
            this._kj._g2(t / this._la, i, e)
        },
        _6h: function() {
            return this._la * this._kj._la
        },
        _dz: function(t, i) {
            this._kj._dz(t, i)
        },
        _nyy: function(t, i, n) {
            var e = this._lv(),
            s = this._lu(),
            r = this._g5();
            return n && (n = Math.max(this._gs, Math.min(this._fq, n))),
            t != e || i != s || n && n != r ? (n && n != r ? (n /= this._la, this._2z = !0) : n = this._kj._la, t -= e * n, i -= s * n, this._kj._nyb(n, t, i), this._d9._3e(e, s, r, arguments[0], arguments[1], arguments[2]), r != arguments[2] && this._d9._92(r, arguments[2]), !0) : !1
        },
        _7b: function() {
            this._7bFlag = !0
        },
        _g5: function() {
            return this._la * this._kj._la
        },
        _lv: function() {
            return this._nq * this._kj._la + this._kj._nq
        },
        _lu: function() {
            return this._no * this._kj._la + this._kj._no
        },
        _ki: function(t, i) {
            this._1k && this._57(),
            cN && fN && (i = !0);
            var n = t._jw,
            e = n[so] || 1,
            s = n[ku],
            r = n[nd],
            h = this._o15 != s,
            a = this._9o != r,
            o = h || a;
            o && t._topCanvas._jw[DS](this._o15, this._9o);
            var f = this._nq,
            _ = this._no,
            c = this._la;
            if (this._7bFlag) {
                this._7bFlag = !1;
                var u = t._1z();
                u && this._f0(u.cx, u.cy, u[Ta])
            }
            if (this._2z || i || o) return this._2z = !1,
            this._la *= this._kj._la,
            this._nq = this._nq * this._kj._la + this._kj._nq,
            this._no = this._no * this._kj._la + this._kj._no,
            this._kj._la = 1,
            this._kj._nq = 0,
            this._kj._no = 0,
            o && n.setSize(this._o15, this._9o),
            t._nzb._ml = !0,
            this._3k(this._o15, this._9o),
            void((f != this._nq || _ != this._no || c != this._la) && (t._3e(f, _, c, this._nq, this._no, this._la), c != this._la && t._92(c, this._la)));
            var d = this._kj._nq,
            l = this._kj._no;
            if (d || l) {
                this._kj._nq = 0,
                this._kj._no = 0,
                this._nq += d,
                this._no += l,
                this._3k(s, r);
                var v = n.g;
                this._f2(v, n, d * e, l * e),
                t._23(d, l, s, r),
                t._3e(f, _, c, this._nq, this._no, this._la)
            }
        },
        _f2: function(t, n, e, s) {
            var r = this._nzackCanvas;
            r || (r = this._nzackCanvas = i[uo](ho), r.g = r[Hf](lo)),
            r.width = n[io],
            r[no] = n.height,
            r.g.drawImage(n, e, s),
            t._l5(),
            t.drawImage(r, 0, 0)
        },
        _nzq: function(t) {
            1 != t.canvas.ratio && t[Ta](t[ho].ratio, t[ho][so]),
            t.translate(this._nq, this._no),
            t[Ta](this._la, this._la)
        },
        _d3: function(t) {
            return (t - this._nq) / this._la
        },
        _d4: function(t) {
            return (t - this._no) / this._la
        },
        _e9: function(t) {
            return t * this._la + this._nq
        },
        _eb: function(t) {
            return t * this._la + this._no
        }
    };
    var z$ = function() {
        this._hr = [],
        this._ji = new ON
    };
    z$[bh] = {
        _hp: 20,
        _hr: null,
        _ml: !1,
        _ji: null,
        _l5: function() {
            this._ml = !1,
            this._hr[Fr] = 0,
            this._ji.clear()
        },
        _i5: function() {
            return this._ml || this._hr[Fr] > 0
        },
        _ms: function(t, i, n, e) {
            this._ml || 0 >= n || 0 >= e || (this._hr.push({
                x: t,
                y: i,
                width: n,
                height: e
            }), this._ji[qd](t, i, n, e))
        },
        _hu: function(t) {
            this._ms(t.x, t.y, t[io], t.height)
        },
        _fm: function(t, i, n, e) {
            if (!this._ji[Hd](t, i, n, e)) return ! 1;
            if (vN || this._hr.length >= this._hp) return ! 0;
            for (var s, r = 0,
            h = this._hr[Fr]; h > r; r++) if (s = this._hr[r], ri(t, i, n, e, s.x, s.y, s[io], s.height)) return ! 0;
            return ! 1
        },
        _jv: function(t, i, n) {
            if (this._ml) return t[To](1, 0, 0, 1, 0, 0),
            void(fN && 4.3 > lN ? (t.clearRect(0, 0, i.width, i[no]), i[ra].display = xu, i[NS], i[ra][xm] = RS) : t[cf](0, 0, i[io], i[no]));
            t[zg]();
            var e, s, r, h, a = n._la,
            o = this._hr,
            f = i[so] || 1;
            if (vN || o[Fr] >= this._hp) return e = n._e9(this._ji.x) * f,
            s = n._eb(this._ji.y) * f,
            r = V(e + this._ji[io] * a * f) - (e = W(e)),
            h = V(s + this._ji[no] * a * f) - (s = W(s)),
            t[cf](e, s, r, h),
            t[Pb](e, s, r, h),
            void t[jy]();
            for (var _, c = 0,
            u = o.length; u > c; c++) _ = o[c],
            e = n._e9(_.x) * f,
            s = n._eb(_.y) * f,
            r = V(e + _[io] * a * f) - (e = W(e)),
            h = V(s + _[no] * a * f) - (s = W(s)),
            t.clearRect(e, s, r, h),
            t[Pb](e, s, r, h);
            t[jy]()
        }
    };
    var D$ = {};
    D$[v$[cy]] = bN[cy],
    D$[v$.SELECTION_BORDER] = bN.SELECTION_BORDER,
    D$[v$[_y]] = bN.SELECTION_SHADOW_BLUR,
    D$[v$[cw]] = mR[uy],
    D$[v$[yw]] = 2,
    D$[v$[GM]] = 2,
    D$[v$[jk]] = bN.LABEL_COLOR,
    D$[v$.LABEL_POSITION] = IN[rl],
    D$[v$[CT]] = IN[sl],
    D$[v$[DT]] = new MN(0, 2),
    D$[v$.LABEL_POINTER_WIDTH] = 8,
    D$[v$.LABEL_RADIUS] = 8,
    D$[v$[QM]] = !0,
    D$[v$[HM]] = 0,
    D$[v$[qM]] = By,
    D$[v$[tO]] = !0,
    D$[v$[JT]] = null,
    D$[v$[QT]] = null,
    D$[v$.EDGE_COLOR] = BS,
    D$[v$.EDGE_WIDTH] = 1.5,
    D$[v$[tM]] = !0,
    D$[v$.EDGE_TO_AT_EDGE] = !0,
    D$[v$[uI]] = X(3438210798),
    D$[v$[lI]] = 1,
    D$[v$.GROUP_STROKE_STYLE] = By,
    D$[v$[fE]] = !0,
    D$[v$[rM]] = bN[Uc],
    D$[v$.ARROW_TO_SIZE] = bN[Uc],
    D$[v$[HO]] = 10,
    D$[v$[Bc]] = 8,
    D$[v$[Nc]] = mR[$c],
    D$[v$[Lc]] = !0,
    D$[v$[wc]] = 20,
    D$[v$[Tc]] = .5,
    D$[v$.EDGE_SPLIT_VALUE] = 20,
    D$[v$.EDGE_BUNDLE_GAP] = 20,
    D$[v$[HI]] = IN[rl],
    D$[v$[bO]] = IN[sl],
    D$[v$[yO]] = $S,
    D$[v$[Sw]] = 1,
    D$[v$[jw]] = FS,
    D$[v$[GS]] = bN.BLEND_MODE,
    D$[v$.ALPHA] = 1,
    bN[hu] = 2,
    mR[YS] = US,
    mR.NAVIGATION_NONE = HS,
    mR.NAVIGATION_BUTTON = qS,
    bN[WS] = mR.NAVIGATION_SCROLLBAR;
    var N$ = function(t, n) {
        this._l1 = t,
        I(n) && (n = i[VS](n)),
        n && n[Rd] || (n = i.createElement(uu)),
        N(this, N$, [n]),
        this._l1._14[hd](this._1g, this),
        this._l1._$f.addListener(this._21, this),
        this._l1._24.addListener(this._9s, this),
        this._l1._1i.addListener(this._7u, this),
        this._l1._$w[hd](this._3m, this),
        this._l1._$x[hd](this._48, this),
        this._nzu = {},
        this._46(bN[WS], !0)
    };
    N$[bh] = {
        _$l: null,
        _48: function(t) {
            var i = t[Wo],
            n = t[Io];
            if (n) if (this._nz1) {
                var e, s;
                if (S(n)) for (var r = 0,
                h = n[Fr]; h > r; r++) s = n[r].id,
                e = this._ng[Ld](s),
                e && (e.selected = i[y_](s), e.invalidateRender());
                else {
                    if (s = n.id, e = this._ng[Ld](s), !e) return;
                    e[RE] = i[y_](s),
                    e[tk]()
                }
                this._o1g()
            } else {
                this._$l || (this._$l = {});
                var e, s;
                if (S(n)) for (var r = 0,
                h = n[Fr]; h > r; r++) s = n[r].id,
                this._$l[s] = !0;
                else s = n.id,
                this._$l[s] = !0
            }
        },
        _l1: null,
        _o1o: function(t) {
            var i = t[Bm];
            return i ? new i(t, this._l1) : void 0
        },
        _1g: function() {},
        _21: function(t) {
            if (!this._nz1) return ! 1;
            var i = t[Wo],
            n = t.kind;
            cu == n && this._l1[Lm](),
            Bm == n ? (this._ng[XS](i.id), this._ld(i)) : ME == n && i._i0() && t[cc] && this._6f(i);
            var e = this._ng.getById(i.id);
            e && e._nz1 && e.onPropertyChange(t) && this._o1g()
        },
        _4e: function(t) {
            var i = this._lp(t);
            i && (i[AE](), this._o1g())
        },
        _9s: function(t) {
            if (!this._nz1) return ! 1;
            switch (this._$n = !0, t[ul]) {
            case qN.KIND_ADD:
                this._ld(t[Io]);
                break;
            case qN.KIND_REMOVE:
                this._go(t.data);
                break;
            case qN.KIND_CLEAR:
                this._j7(t[Io])
            }
        },
        _l5: function() {
            this._nzu = {},
            R(this, N$, KS)
        },
        _nzu: null,
        _ld: function(t) {
            var i = this._o1o(t);
            i && (this._ng[nh](i), this._nz1 && (this._nzu[t.id] = t), this._o1g())
        },
        _go: function(t) {
            if (xR[oh](t)) {
                for (var i, n = [], e = 0, s = t[Fr]; s > e; e++) i = t[e].id,
                n[Kr](i),
                delete this._nzu[i];
                t = n
            } else t = t.id,
            delete this._nzu[t];
            this._ng[Vr](t) && this._o1g()
        },
        _j7: function() {
            this._l5()
        },
        _7u: function(t) {
            return this._nz1 ? void(t[Wo] instanceof f$ && !this._nzu[t[Wo].id] && (t[bl] && (this._4e(t[bl]), t[bl].__74 = !0), t.value && (this._4e(t[cc]), t.value.__74 = !0), this._6f(t[Wo]))) : !1
        },
        _3m: function(t) {
            return this._nz1 ? void(t[Wo] instanceof f$ && !this._nzu[t[Wo].id] && this._6f(t[Wo])) : !1
        },
        _nyw: function(t) {
            return t ? this._$z() : void this._9j()
        },
        _3s: function(t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[Hm](!0);
                if (!i) return t._edgeBundleInvalidateFlag = !1,
                void t[ZS]();
                i._fu(this._l1),
                i._nzy(function(t) {
                    t[ZS]()
                })
            }
        },
        _$z: function() {
            var t, i = (this._l1, this._l1[Su]),
            n = this._ng,
            e = [],
            s = 1;
            if (i[JS](function(i) {
                return i instanceof o$ ? (this._3s(i), void e[Kr](i)) : (t = this._o1o(i), void(t && (n.add(t), t._i8 = this._f9(i, !1, !0), i.__ln = s++)))
            },
            this), n.length) for (var r = n._k2,
            s = r[Fr] - 1; s >= 0; s--) t = r[s],
            t._i8 && this._40(t, t[Pf]);
            for (var h, s = 0,
            a = e.length; a > s; s++) if (h = e[s], t = this._o1o(h)) if (t._i8 = this._f9(h, !0, !0), t._i8) {
                this._40(t, h, !0),
                n.add(t);
                var o = h.fromAgent,
                f = h[p_],
                _ = o.__ln || 0;
                o != f && (_ = Math[sf](_, f.__ln || 0)),
                h.__ln = _
            } else n[nh](t);
            if (e[Fr] && n._k2.sort(function(t, i) {
                return t[Pf].__ln - i[Pf].__ln
            }), this._$l) {
                var c = i[QS];
                for (var u in this._$l) if (c.containsById(u)) {
                    var t = n.getById(u);
                    t && (t.selected = !0)
                }
                this._$l = null
            }
        },
        _9j: function() {
            for (var t in this._nzu) {
                var i = this._nzu[t];
                i instanceof f$ ? this._6f(i) : this._6g(i)
            }
            this._nzu = {};
            for (var n, e, s, r = this._ng._k2,
            h = [], a = r[Fr] - 1; a >= 0; a--) n = r[a],
            e = n[Pf],
            s = e instanceof o$,
            s && this._3s(e),
            n._i8 = this._f9(e, s),
            n._i8 ? s ? h[Kr](n) : this._40(n, e) && !this._$n && (this._$n = !0) : e.__i8Changed && n._nz1 && (n.__oldBounds = {
                x: n.$x + n.uiBounds.x,
                y: n.$y + n.uiBounds.y,
                width: n[pc][io],
                height: n.uiBounds[no]
            });
            if (h[Fr]) for (var a = 0,
            o = h[Fr]; o > a; a++) n = h[a],
            this._40(n, n[Pf]) && !this._$n && (this._$n = !0)
        },
        _40: function(t, i, e) {
            if (e || e === n && i instanceof o$) return i.__51 && (i.__51 = !1, t._51()),
            this._o1x(t);
            if (i.__74 && i._i0() && (t._5w(), i.__74 = !1), this._o1x(t)) {
                var s = this._50(i);
                return s && (s.__74 = !0),
                i.hasEdge() && i[j_](function(t) {
                    t.__51 = !0
                },
                this),
                !0
            }
        },
        _33: function(t, i) {
            var n = t.fromAgent,
            e = t[p_],
            s = i[tC](n.id);
            if (n == e) return s;
            var r = i[tC](e.id);
            return Math.max(s, r)
        },
        _37: function(t, i) {
            var n = this[Su]._hb(t);
            return n ? i.getIndexById(n.id) : 0
        },
        _6f: function(t) {
            var i = this._ng,
            n = i[Ld](t.id);
            if (!n) throw new Error(iC + t.name + nC);
            var s = this._37(t, i),
            r = [n];
            t.hasChildren() && e(t,
            function(t) {
                t instanceof f$ && (n = i.getById(t.id), n && r[Kr](n))
            },
            this),
            this._5c(i, s, r)
        },
        _6g: function(t) {
            var i = this._ng[Ld](t.id);
            if (i) {
                var n = this._33(t, this._ng);
                this._ng.setIndexBefore(i, n)
            }
        },
        _5c: function(t, i, n) {
            function e(t) {
                s.add(t)
            }
            var s = new gN;
            l(n,
            function(n) {
                i = t[eC](n, i),
                n[Pf].forEachEdge(e)
            },
            this),
            0 != s[Fr] && s.forEach(this._6g, this)
        },
        _90: function(t) {
            return t[Hm](!0)
        },
        _64: function(t) {
            if (!t[sC]()) return ! 1;
            var i = t[Hm](!0);
            i && i[rC]() !== !1 && this._o1g()
        },
        _50: function(t) {
            var i = pe(t);
            return i && i[ME] ? i: null
        },
        _hd: function(t) {
            return pe(t)
        },
        _39: function(t, i, n) {
            t._13 = !1;
            var e = t._i8;
            t._i8 = this._5g(t, i),
            n || t._i8 == e || (t.__i8Changed = !0)
        },
        _5g: function(t, i) {
            return this._45(t, i) ? !this._l1._i8Filter || this._l1._i8Filter(t) !== !1 : !1
        },
        _f9: function(t, i, n) {
            return t._13 && this._39(t, i, n),
            t._i8
        },
        _9a: function(t) {
            return ! this._l1._3w || this._l1._3w == tr(t)
        },
        _45: function(t, i) {
            if (t[YM] === !1) return ! 1;
            if (i === n && (i = t instanceof o$), !i) return this._l1._3w != tr(t) ? !1 : !t._dy;
            var e = t.fromAgent,
            s = t[p_];
            if (!e || !s) return ! 1;
            if (e == s && !t.isLooped()) return ! 1;
            if (t[sC]()) {
                var r = t[Hm](!0);
                if (r && !r._f9(t)) return ! 1
            }
            var h = this._f9(e, !1),
            a = this._f9(s, !1);
            return h && a ? !0 : !1
        },
        _7q: null,
        _7r: null,
        _46: function(t, i) {
            return i || t != this._7q ? (this._7q = t, this._7r && (this._7r._id(), delete this._7r), t == mR[YS] ? void(this._7r = new rr(this, this._jwPanel)) : t == mR[hC] ? void(this._7r = new sr(this, this._jwPanel)) : void 0) : !1
        },
        _3e: function(t, i, n, e, s, r) {
            this._l1._4s(new NN(this._l1, vu, {
                tx: e,
                ty: s,
                scale: r
            },
            {
                tx: t,
                ty: i,
                scale: n
            })),
            this._5o()
        },
        _92: function(t, i) {
            this._l1._4s(new NN(this._l1, Ta, i, t))
        },
        _5o: function() {
            this._7r && this._7r._ki(),
            this._l1._4s(new NN(this._l1, Of))
        },
        _1f: function(t, i) {
            this._l1._4s(new NN(this._l1, aC, i, t)),
            this._5o()
        }
    },
    D(N$, cs),
    Z(N$.prototype, {
        graphModel: {
            get: function() {
                return this._l1._l1Model
            }
        }
    });
    var R$ = function(i, n) {
        this._14 = new YN,
        this._14.on(function(t) {
            yE == t.kind && this.invalidateVisibility()
        },
        this),
        this._24 = new YN,
        this._24[hd](function(t) { ! this[yE] || t[ul] != qN[fv] && t.kind != qN[$l] || this[Su].contains(this[yE]) || (this[yE] = null)
        },
        this),
        this._$f = new YN,
        this._1i = new YN,
        this._$w = new YN,
        this._$x = new YN,
        this[Su] = n || new is,
        this._8l = new N$(this, i),
        this._32 = new jr(this),
        this._1o = new YN,
        this._onresize = nR(t, oC,
        function() {
            this[fC]()
        },
        !1, this),
        this._8l._jwPanel.ondrop = function(t) {
            this[_C](t)
        } [My](this),
        this._8l._jwPanel[cC] = function(t) {
            this[cC](t)
        } [My](this)
    };
    R$[bh] = {
        fullRefresh: !1,
        originAtCenter: !0,
        editable: !1,
        ondragover: function(t) {
            xR[uC](t)
        },
        getDropInfo: function(t, i) {
            var n = null;
            if (i) try {
                n = JSON[Ha](i)
            } catch(e) {}
            return n
        },
        ondrop: function(t) {
            var i = t[dC];
            if (i) {
                var n = i[ya](Vu),
                e = this[lC](t, n);
                e || (e = {},
                e[Zy] = i.getData(Zy), e[jo] = i.getData(jo), e.label = i[ya](Tx), e.groupImage = i[ya](CE));
                var s = this[Au](t);
                if (s = this[vC](s.x, s.y), !(this[bC] instanceof Function && this.dropAction.call(this, t, s, e) === !1) && (e[Zy] || e[Tx])) {
                    var r = e[Zy],
                    h = e[jo],
                    a = e[Tx],
                    o = e.groupImage;
                    xR[uC](t);
                    var f;
                    if (h && yC != h ? gC == h ? f = this[pC](a, s.x, s.y) : xC == h ? f = this.createShapeNode(a, s.x, s.y) : jE == h ? (f = this[mC](a, s.x, s.y), o && (o = Qs(o), o && (f[CE] = o))) : (h = J(h), h instanceof Function && h[bh] instanceof f$ && (f = new h, f.name = a, f[Qm] = new mN(s.x, s.y), this._l1Model[nh](f))) : f = this[EC](a, s.x, s.y), f) {
                        if (r && (r = Qs(r), r && (f.image = r)), t[Dx]) {
                            var _ = this[wC](t); (_[cu] || _ instanceof u$) && (f[g_] = _)
                        }
                        if (e[TC]) for (var c in e[TC]) f[c] = e.properties[c];
                        if (e.clientProperties) for (var c in e[OC]) f[Th](c, e.clientProperties[c]);
                        if (e[MC] && f[Gm](e[MC]), this[IC](f, t, e) === !1) return ! 1;
                        var u = new Cr(this, Cr.ELEMENT_CREATED, t, f);
                        return this.onInteractionEvent(u),
                        f
                    }
                }
            }
        },
        enableDoubleClickToOverview: !0,
        _8l: null,
        _14: null,
        _24: null,
        _$f: null,
        _$x: null,
        _1i: null,
        _$w: null,
        _25: function(t) {
            return this._14.beforeEvent(t)
        },
        _4s: function(t) {
            this._14[Cl](t)
        },
        isVisible: function(t) {
            return this._8l._f9(t)
        },
        isMovable: function(t) {
            return (t instanceof f$ || t instanceof o$ && t[kC]()) && t[SC] !== !1
        },
        isSelectable: function(t) {
            return t.selectable !== !1
        },
        isEditable: function(t) {
            return t[mS] !== !1
        },
        isRotatable: function(t) {
            return t[iI] !== !1
        },
        isResizable: function(t) {
            return t.resizable !== !1
        },
        canLinkFrom: function(t) {
            return t.linkable !== !1 && t.canLinkFrom !== !1
        },
        canLinkTo: function(t) {
            return t[CC] !== !1 && t[jC] !== !1
        },
        createNode: function(t, i, n) {
            var e = new f$(t, i, n);
            return this._l1Model[nh](e),
            e
        },
        createText: function(t, i, n) {
            var e = new es(t, i, n);
            return this._l1Model[nh](e),
            e
        },
        createShapeNode: function(t, i, n, e) {
            M(i) && (e = n, n = i, i = null);
            var s = new _$(t, i);
            return s.$location = new mN(n, e),
            this._l1Model[nh](s),
            s
        },
        createGroup: function(t, i, n) {
            var e = new u$(t, i, n);
            return this._l1Model[nh](e),
            e
        },
        createEdge: function(t, i, n) {
            if (t instanceof f$) {
                var e = n;
                n = i,
                i = t,
                t = e
            }
            var s = new o$(i, n);
            return t && (s[Nm] = t),
            this._l1Model.add(s),
            s
        },
        addElement: function(t, i) {
            this._l1Model.add(t),
            i && t.hasChildren() && t.forEachChild(function(t) {
                this[PC](t, i)
            },
            this)
        },
        removeElement: function(t) {
            this._l1Model[Vr](t)
        },
        clear: function() {
            this._l1Model[Oa]()
        },
        getStyle: function(t, i) {
            var e = t._js[i];
            return e !== n ? e: this[AC](i)
        },
        getDefaultStyle: function(t) {
            if (this._js) {
                var i = this._js[t];
                if (i !== n) return i
            }
            return D$[t]
        },
        translate: function(t, i, n) {
            return n ? this[LC](this.tx + t, this.ty + i, this[Ta], n) : this._8l._dz(t, i)
        },
        translateTo: function(t, i, n, e) {
            if (e) {
                var s = this._5e();
                return s._l2(t, i, n, e)
            }
            return this._8l._nyy(t, i, n)
        },
        centerTo: function(t, i, n, e) {
            return (!n || 0 >= n) && (n = this[Ta]),
            this[LC](this[io] / 2 - t * n, this.height / 2 - i * n, n, e)
        },
        moveToCenter: function(t, i) {
            this.callLater(function() {
                var n = this[Of];
                this[zC](n.cx, n.cy, t, i)
            },
            this)
        },
        zoomToOverview: function(t, i) {
            return this[DC](function() {
                var n = this._8l._1z();
                n && (i && (n[Ta] = Math.min(n.scale, i)), this[zC](n.cx, n.cy, n.scale, t))
            },
            this)
        },
        zoomAt: function(t, i, e, s) {
            if (s === n && (s = this[NC] === n || null === this[NC] ? bN.ZOOM_ANIMATE: this[NC]), i === n && (i = this[io] / 2), i = i || 0, e === n && (e = this.height / 2), e = e || 0, s) {
                var r = this.scale;
                return t = r * t,
                t >= this[Ky] || t <= this[RC] ? !1 : (i = t * (this.tx - i) / r + i, e = t * (this.ty - e) / r + e, this[LC](i, e, t, s))
            }
            return this._8l._kn(t, i, e)
        },
        zoomOut: function(t, i, n) {
            return n ? this[BC](1 / this[$C], t, i, n) : this._8l._ih(t, i)
        },
        zoomIn: function(t, i, n) {
            return n ? this.zoomAt(this[$C], t, i, n) : this._8l._kp(t, i)
        },
        _5e: function() {
            return this._panAnimation || (this._panAnimation = new U$(this)),
            this._panAnimation
        },
        enableInertia: !0,
        _ny1: function(t, i) {
            var n = this._5e();
            return n._hy(t || 0, i || 0)
        },
        stopAnimation: function() {
            this._panAnimation && this._panAnimation._mj()
        },
        getUI: function(t) {
            return Q(t) ? this._8l._3v(t) : this._8l._lp(t)
        },
        getUIByMouseEvent: function(t) {
            return this._8l._3v(t)
        },
        hitTest: function(t) {
            return this._8l[ru](t)
        },
        globalToLocal: function(t) {
            return this._8l._8c(t)
        },
        toCanvas: function(t, i) {
            return this._8l._gu(t, i)
        },
        toLogical: function(t, i) {
            return Q(t) ? this._8l._$h(t) : this._8l._ed(t, i)
        },
        getElementByMouseEvent: function(t) {
            var i = this._8l._3v(t);
            return i ? i[Pf] : void 0
        },
        getElement: function(t) {
            if (Q(t)) {
                var i = this._8l._3v(t);
                return i ? i.$data: null
            }
            return this._l1Model[Ld](t)
        },
        invalidate: function() {
            this._8l._o1g()
        },
        invalidateUI: function(t) {
            t.invalidate(),
            this[Dm]()
        },
        invalidateElement: function(t) {
            this._8l._4e(t)
        },
        getUIBounds: function(t) {
            return this._8l._nz6(t)
        },
        forEachVisibleUI: function(t, i) {
            return this._8l._4i(t, i)
        },
        forEachReverseVisibleUI: function(t, i) {
            return this._8l._16(t, i)
        },
        forEachUI: function(t, i) {
            return this._8l._fb(t, i)
        },
        forEachReverseUI: function(t, i) {
            return this._8l._4k(t, i)
        },
        forEach: function(t, i) {
            return this._l1Model.forEach(t, i)
        },
        getElementByName: function(t) {
            var i;
            return this._l1Model[Kf](function(n) {
                return n[Mh] == t ? (i = n, !1) : void 0
            }),
            i
        },
        focus: function(i) {
            if (i) {
                var n = t[Ku] || t.pageXOffset,
                e = t.scrollY || t[va];
                return this.canvasPanel[FC](),
                void t.scrollTo(n, e)
            }
            this[kv].focus()
        },
        callLater: function(t, i, n) {
            this._8l[DC](t, i, n)
        },
        exportImage: function(t, i) {
            return _r(this, t, i)
        },
        setSelection: function(t) {
            return this._l1Model._selectionModel[Th](t)
        },
        select: function(t) {
            return this._l1Model._selectionModel[Xu](t)
        },
        unselect: function(t) {
            return this._l1Model._selectionModel.unselect(t)
        },
        reverseSelect: function(t) {
            return this._l1Model._selectionModel.reverseSelect(t)
        },
        selectAll: function() {
            or(this)
        },
        unSelectAll: function() {
            this[QS][Oa]()
        },
        unselectAll: function() {
            this[GC]()
        },
        isSelected: function(t) {
            return this._l1Model._selectionModel.contains(t)
        },
        sendToTop: function(t) {
            Ee(this._l1Model, t)
        },
        sendToBottom: function(t) {
            we(this._l1Model, t)
        },
        moveElements: function(t, i, n) {
            var e = [],
            s = new gN;
            return l(t,
            function(t) {
                t instanceof f$ ? e[Kr](t) : t instanceof o$ && s.add(t)
            }),
            this._ew(e, i, n, s)
        },
        _ew: function(t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[Fr] && 0 == e.length) return ! 1;
            if (0 != t[Fr]) {
                var s = this._4w(t);
                e = this._4u(s, e),
                l(s,
                function(t) {
                    var e = t[Jm];
                    e ? t[YC](e.x + i, e.y + n) : t[YC](i, n)
                })
            }
            return e && e[Fr] && this._eq(e, i, n),
            !0
        },
        _eq: function(t, i, n) {
            t[Kf](function(t) {
                t[Hv](i, n)
            })
        },
        _4u: function(t, i) {
            return this[Su][Kf](function(n) {
                n instanceof o$ && this[UC](n) && t[su](n.fromAgent) && t[su](n[p_]) && i.add(n)
            },
            this),
            i
        },
        _4w: function(t) {
            var i = new gN;
            return l(t,
            function(t) { ! this[UC](t),
                i[nh](t),
                xe(t, i, this._movableFilter)
            },
            this),
            i
        },
        reverseExpanded: function(t) {
            return this._8l._64(t)
        },
        _32: null,
        _1o: null,
        beforeInteractionEvent: function(t) {
            return this._1o.beforeEvent(t)
        },
        onInteractionEvent: function(t) {
            this._1o[Cl](t)
        },
        addCustomInteraction: function(t) {
            this._32.addCustomInteraction(t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function(t) {
            return t[Fm] || t[Mh]
        },
        updateViewport: function() {
            this._8l._4b();
            var t = new NN(this, HC);
            this._4s(t)
        },
        destroy: function() {
            this._4s(new NN(this, gc, !0, this._ided)),
            this._ided = !0,
            eR(t, oC, this._onresize),
            F(this, qC),
            this._32.destroy(),
            this.graphModel = new is;
            var i = this[WC];
            this._8l._id(),
            i && (i[VC] = "")
        },
        onPropertyChange: function(t, i, n) {
            this._14[hd](function(e) {
                e[ul] == t && i[Yr](n, e)
            })
        },
        removeSelection: function() {
            var t = this[QS]._k2;
            return t && 0 != t[Fr] ? (t = t.slice(), this._l1Model[Vr](t), t) : !1
        },
        removeSelectionByInteraction: function(t) {
            var i = this[QS].datas;
            return i && 0 != i[Fr] ? void xR[XC](KC + i[Fr],
            function() {
                var i = this[ZC]();
                if (i) {
                    var n = new Cr(this, Cr[JC], t, i);
                    this.onInteractionEvent(n)
                }
            },
            this) : !1
        },
        createShapeByInteraction: function(t, i, n, e) {
            var s = new nB(i);
            i.length > 2 && s[N_]();
            var r = this[QC](tj, s, n, e);
            this[IC](r, t);
            var h = new Cr(this, Cr.ELEMENT_CREATED, t, r);
            return this[ij](h),
            r
        },
        createLineByInteraction: function(t, i, n, e) {
            var s = new nB(i),
            r = this[QC](nj, s, n, e);
            r[Am](xR[ej][zw], null),
            r.setStyle(xR[ej][Nw], null),
            r[Am](xR.Styles[qw], !0),
            this.onElementCreated(r, t);
            var h = new Cr(this, Cr.ELEMENT_CREATED, t, r);
            return this[ij](h),
            r
        },
        createEdgeByInteraction: function(t, i, n, e) {
            var s = this.createEdge(sj, t, i);
            if (e) s._ny5 = e;
            else {
                var r = this[rj],
                h = this[Zc];
                this.interactionProperties && (r = this.interactionProperties[Bm] || r, h = this[hj][Zc] || h),
                r && (s.uiClass = r),
                h && (s[Zc] = h)
            }
            this.onElementCreated(s, n);
            var a = new Cr(this, Cr.ELEMENT_CREATED, n, s);
            return this[ij](a),
            s
        },
        onElementCreated: function(t) { ! t[g_] && this[yE] && (t[g_] = this[yE])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function(t, i, n, e) {
            var s = this;
            n.startEdit(e.x, e.y, i[Io], this[Ec](t, v$[aj]),
            function(n) {
                return s[oj](t, i, n, i[g_])
            })
        },
        onLabelEdit: function(t, i, n, e) {
            return n || this[fj] ? void(Tx == i[Mh] ? t[Mh] = n: e._fs(i, n) === !1 && (i[Io] = n, this.invalidateElement(t))) : (xR.alert(_j), !1)
        },
        setInteractionMode: function(t, i) {
            this[cj] = t,
            this[hj] = i
        },
        upSubNetwork: function() {
            return this._3w ? this[yE] = tr(this._3w) : !1
        },
        _13: !1,
        invalidateVisibility: function() {
            this._13 = !0,
            this[Dm]()
        },
        getBundleLabel: function(t) {
            var i = t[Hm](!0);
            return i && i[uj] == t ? dj + i[lj][Fr] : null
        },
        zoomAnimation: null
    },
    Z(R$[bh], {
        center: {
            get: function() {
                return this[vC](this[WC][ku] / 2, this[WC][nd] / 2)
            }
        },
        visibleFilter: {
            get: function() {
                return this._i8Filter
            },
            set: function(t) {
                this._i8Filter = t,
                this[Lm]()
            }
        },
        topCanvas: {
            get: function() {
                return this._8l._topCanvas
            }
        },
        propertyChangeDispatcher: {
            get: function() {
                return this._14
            }
        },
        listChangeDispatcher: {
            get: function() {
                return this._24
            }
        },
        dataPropertyChangeDispatcher: {
            get: function() {
                return this._$f
            }
        },
        selectionChangeDispatcher: {
            get: function() {
                return this._$x
            }
        },
        parentChangeDispatcher: {
            get: function() {
                return this._1i
            }
        },
        childIndexChangeDispatcher: {
            get: function() {
                return this._$w
            }
        },
        interactionDispatcher: {
            get: function() {
                return this._1o
            }
        },
        cursor: {
            set: function(t) {
                this.canvasPanel[ra][vj] = t || this._32[bj]
            },
            get: function() {
                return this.canvasPanel.style[vj]
            }
        },
        interactionMode: {
            get: function() {
                return this._32._o1urrentMode
            },
            set: function(t) {
                var i = this[cj];
                i != t && (this._32[ad] = t, this._4s(new NN(this, cj, t, i)))
            }
        },
        scaleStep: {
            get: function() {
                return this._8l._et
            },
            set: function(t) {
                this._8l._et = t
            }
        },
        maxScale: {
            get: function() {
                return this._8l._fq
            },
            set: function(t) {
                this._8l._fq = t
            }
        },
        minScale: {
            get: function() {
                return this._8l._gs
            },
            set: function(t) {
                this._8l._gs = t
            }
        },
        scale: {
            get: function() {
                return this._8l._la
            },
            set: function(t) {
                return this._8l._la = t
            }
        },
        tx: {
            get: function() {
                return this._8l._nq
            }
        },
        ty: {
            get: function() {
                return this._8l._no
            }
        },
        styles: {
            get: function() {
                return this._js
            },
            set: function(t) {
                this._js = t
            }
        },
        selectionModel: {
            get: function() {
                return this._l1Model._selectionModel
            }
        },
        graphModel: {
            get: function() {
                return this._l1Model
            },
            set: function(t) {
                if (this._l1Model == t) return ! 1;
                var i = this._l1Model,
                n = new NN(this, Su, i, t);
                return this._25(n) === !1 ? !1 : (null != i && (i[yj][Ll](this._14, this), i[Zl].removeListener(this._24, this), i[Ql].removeListener(this._$f, this), i[hv].removeListener(this._1i, this), i[nv][Ll](this._$w, this), i[Jl].removeListener(this._$x, this)), this._l1Model = t, this._l1Model && (this._l1Model[yj].addListener(this._14, this), this._l1Model[Zl][hd](this._24, this), this._l1Model[Ql][hd](this._$f, this), this._l1Model.parentChangeDispatcher.addListener(this._1i, this), this._l1Model[nv][hd](this._$w, this), this._l1Model[Jl][hd](this._$x, this)), this._8l && this._8l._lr(), void this._4s(n))
            }
        },
        count: {
            get: function() {
                return this._l1Model.length
            }
        },
        width: {
            get: function() {
                return this[WC].clientWidth
            }
        },
        height: {
            get: function() {
                return this[WC].clientHeight
            }
        },
        viewportBounds: {
            get: function() {
                return this._8l._6n
            }
        },
        bounds: {
            get: function() {
                return this._8l._4m()
            }
        },
        canvasPanel: {
            get: function() {
                return this._8l._jwPanel
            }
        },
        html: {
            get: function() {
                return this._8l._jwPanel[xy]
            }
        },
        navigationType: {
            get: function() {
                return this._8l._7q
            },
            set: function(t) {
                this._8l._46(t)
            }
        },
        _3w: {
            get: function() {
                return this._l1Model._3w
            }
        },
        currentSubNetwork: {
            get: function() {
                return this._l1Model[yE]
            },
            set: function(t) {
                this._l1Model[yE] = t
            }
        }
    }),
    bN[gj] = 60,
    bN[pj] = 60,
    ir.prototype = {
        initialize: function() {
            R(this, ir, iw),
            this[_I]()
        },
        _nzh: function() {
            this._me = new nB,
            this.shape = new I$(this._me),
            this.shape.layoutByPath = !1,
            this.addChild(this[dI], 0),
            this[pk] = this[dI]
        },
        checkBody: function() {
            return this._67() ? (this._2y = !0, this[dI] ? (this[dI][YM] = !0, this[pk] = this.shape) : (this._nzh(), m$.initBindingProperties(this)), void(this[Zy] && (this[Zy][YM] = !1))) : (this.image ? (this[Zy][YM] = !0, this[pk] = this[Zy]) : this._nyo(), void(this[dI] && (this[dI][YM] = !1)))
        },
        _67: function() {
            return this[Pf]._i0() && this.$data[ME]
        },
        _me: null,
        _2y: !0,
        _5w: function() {
            this._1v = !0,
            this._2y = !0
        },
        doValidate: function() {
            if (this._2y && this._67()) {
                if (this._2y = !1, this[dI].invalidateData(), this[Pf][CE]) {
                    this[dI][Io] = this[Pf].groupImage;
                    var t = this._2w();
                    return this[dI][FE] = t.x + t[io] / 2,
                    this[dI][GE] = t.y + t.height / 2,
                    this[dI][rE] = {
                        width: t[io],
                        height: t.height
                    },
                    _s.prototype[nw][Yr](this)
                }
                this.shape[FE] = 0,
                this[dI][GE] = 0;
                var i = this._8h(this[Pf].groupType);
                this._me[Oa](),
                i instanceof ON ? Ae(this._me, i.x, i.y, i[io], i[no], i.rx, i.ry) : i instanceof rn ? Le(this._me, i) : i instanceof hn && ze(this._me, i),
                this._me._74 = !0,
                this.shape.invalidateData()
            }
            return _s[bh][nw][Yr](this)
        },
        _70: function(t, i, n) {
            switch (t) {
            case mR[xj]:
                return new rn(0, 0, Math[sf](i, n) / 2);
            case mR[mj]:
                return new hn(0, 0, i, n);
            default:
                return new ON( - i / 2, -n / 2, i, n)
            }
        },
        _2w: function() {
            return this._8h(null)
        },
        _8h: function(t) {
            var i = this[Io],
            n = i[Go],
            e = i[kE],
            s = bN[gj],
            r = bN[pj];
            if (e && (s = e[io], r = e[no]), !i[$r]()) return this._70(t, s, r);
            var h, a = this.$data._fo._k2; (t == mR[xj] || t == mR[mj]) && (h = []);
            for (var o, f, _, c, u = new ON,
            d = 0,
            l = a.length; l > d; d++) {
                var v = a[d];
                if (this[Xc][Cu](v)) {
                    var b = this[Xc][Kc](v);
                    b && (o = b.$x + b._fv.x, f = b.$y + b._fv.y, _ = b._fv.width, c = b._fv[no], u[qd](o, f, _, c), h && (h.push({
                        x: o,
                        y: f
                    }), h.push({
                        x: o + _,
                        y: f
                    }), h.push({
                        x: o + _,
                        y: f + c
                    }), h.push({
                        x: o,
                        y: f + c
                    })))
                }
            }
            n && u.grow(n);
            var y = this[Pf].$location;
            y ? y.invalidateFlag && (y[mE] = !1, y.x = u.cx, y.y = u.cy) : y = this[Pf][Jm] = {
                x: u.cx,
                y: u.cy
            };
            var g, p = y.x,
            x = y.y;
            if (t == mR.GROUP_TYPE_CIRCLE) {
                g = an(h),
                g.cx -= p,
                g.cy -= x;
                var m = Math[sf](s, r) / 2;
                return g.r < m && (g.cx += m - g.r, g.cy += m - g.r, g.r = m),
                g
            }
            return t == mR[mj] ? (g = on(h, u), g.cx -= p, g.cy -= x, g[io] < s && (g.cx += (s - g.width) / 2, g[io] = s), g[no] < r && (g.cy += (r - g[no]) / 2, g.height = r), g) : (g = u, u[io] < s && (u[io] = s), u[no] < r && (u.height = r), u.offset( - p, -x), g)
        },
        _15: function(t, i, n) {
            if (!this._67()) return R(this, ir, Ej, arguments);
            var e = this._o16[QI](this, t, i, n);
            return e = b$[QI](this, t, i, n) || e,
            e = x$.onBindingPropertyChange(this, t, i, n) || e,
            m$[QI](this, t, i, n) || e
        }
    },
    D(ir, _s);
    var B$ = {
        draw: function() {}
    };
    bN[Ou] = wj,
    bN.NAVIGATION_IMAGE_TOP = Tj;
    var $$ = {
        position: mu,
        "text-align": tu
    },
    F$ = {
        padding: Oj,
        transition: Mj
    },
    G$ = {
        position: Ij,
        display: kj
    };
    bi(Sj, "opacity:0.7;vertical-align:middle;"),
    bi(".Q-Graph-Nav img:hover,img.hover", Cj),
    cN || (bi(jj, Pj + tR(Aj) + Lj), bi(zj, Dj + tR(Aj) + Nj)),
    sr.prototype = {
        _dc: function(t, i) {
            return t._i8 == i ? !1 : (t._i8 = i, void(t.style[xm] = i ? "block": xu))
        },
        _3x: function(t, i) {
            var n = i / 2 - this._left._img[nd] / 2 + ro;
            this._left._img[ra][Yo] = n,
            this._right._img[ra][Yo] = n,
            this._navPane[ra].width = t + ro,
            this._navPane.style[no] = i + ro
        },
        _nyd: function(t, i, n, e) {
            this._dc(this._top, t),
            this._dc(this._left, i),
            this._dc(this._nzottom, n),
            this._dc(this._right, e)
        },
        _id: function() {
            var t = this._navPane[xy];
            t && t.removeChild(this._navPane)
        },
        _ki: function() {
            var t = this._d9._l1;
            if (t) {
                var i = t.bounds;
                if (i.isEmpty()) return void this._nyd(!1, !1, !1, !1);
                var n = t[Rj],
                e = n.y > i.y + 1,
                s = n.x > i.x + 1,
                r = n[qh] < i[qh] - 1,
                h = n.right < i[Wh] - 1;
                this._nyd(e, s, r, h)
            }
        }
    };
    var Y$ = 8;
    bi(Bj, $j),
    bi(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + tR(Aj) + ": background-color 0.2s linear;"),
    bi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"),
    bi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"),
    bi(".Q-Graph-ScrollBar--V.Both", Fj),
    bi(".Q-Graph-ScrollBar--H.Both", Gj),
    cN || (bi(Yj, Pj + tR(Aj) + Uj), bi(".Q-Graph:hover .Q-Graph-ScrollPane", Dj + tR(Aj) + ":opacity 0.3s linear;")),
    rr[bh] = {
        _id: function() {
            this._verticalDragSupport._id(),
            this._horizontalDragSupport._id(),
            delete this._verticalDragSupport,
            delete this._horizontalDragSupport,
            this._n2[xy] && this._n2.parentNode[my](this._n2)
        },
        _n2: null,
        _o13: null,
        _85: null,
        init: function(t) {
            var n = i[uo](uu);
            n.className = Hj,
            di(n, {
                width: Eu,
                height: Eu,
                position: Ij
            });
            var e = i[uo](uu);
            e[Jr] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[uo](uu);
            s[Jr] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H",
            n[mc](e),
            n[mc](s),
            t.appendChild(n),
            this._n2 = n,
            this._85 = s,
            this._o13 = e,
            s[qj] = !0;
            var r = this,
            h = {
                ondrag: function(t, i) {
                    var n = r._d9._l1;
                    if (n) {
                        var e = i[qj],
                        s = e ? t.dx: t.dy;
                        if (s && i.scale) {
                            var h = n[Ta] / i[Ta];
                            e ? n[Ho]( - h * s, 0) : n[Ho](0, -h * s),
                            xR.stopEvent(t)
                        }
                    }
                },
                enddrag: function(t, i) {
                    var n = r._d9._l1;
                    if (n && n.enableInertia) {
                        var e = i.isH,
                        s = e ? t.vx: t.vy;
                        if (Math[Vh](s) > .1) {
                            var h = n[Ta] / i[Ta];
                            s *= h,
                            e ? n._ny1( - s, 0) : n._ny1(0, -s)
                        }
                    }
                }
            };
            this._verticalDragSupport = new Ii(e, h),
            this._horizontalDragSupport = new Ii(s, h)
        },
        _ki: function() {
            var t = this._d9._l1;
            if (t) {
                var i = t.bounds;
                if (i[Af]()) return this._5b(!1),
                void this._59(!1);
                var n = t.viewportBounds,
                e = t[io],
                s = t[no],
                r = t[Ta],
                h = 1 / r,
                a = n.x > i.x + h || n[Wh] < i[Wh] - h,
                o = n.y > i.y + h || n.bottom < i[qh] - h,
                f = a && o;
                f ? (T(this._o13, Wj), T(this._85, Wj)) : (O(this._o13, Wj), O(this._85, Wj)),
                this._5b(a, n, i, f ? e - Y$: e),
                this._59(o, n, i, f ? s - Y$: s)
            }
        },
        _5b: function(t, i, n, e) {
            if (!t) return this._85[ra][xm] = xu,
            void(this._85[Ta] = 0);
            var s = Math[go](i.x, n.x),
            r = Math.max(i.right, n[Wh]),
            h = r - s,
            a = e / h;
            this._85.scale = a,
            this._85[ra][Uo] = parseInt((i.x - s) * a) + ro,
            this._85[ra][Wh] = parseInt((r - i[Wh]) * a) + ro,
            this._85[ra][xm] = ""
        },
        _59: function(t, i, n, e) {
            if (!t) return this._o13.style[xm] = xu,
            void(this._o13.scale = 0);
            var s = Math[go](i.y, n.y),
            r = Math.max(i.bottom, n[qh]),
            h = r - s,
            a = e / h;
            this._o13[Ta] = a,
            this._o13.style.top = parseInt((i.y - s) * a) + ro,
            this._o13.style.bottom = parseInt((r - i[qh]) * a) + ro,
            this._o13[ra].display = ""
        }
    },
    hr.prototype = {
        shape: null,
        initialize: function() {
            R(this, hr, iw),
            this._nyo(),
            T$[nk](this)
        },
        _nyo: function() {
            this[Zy] = new S$(this[Pf][cE]),
            this[rk](this[Zy], 0),
            this[pk] = this[Zy]
        },
        invalidateShape: function() {
            this[Zy][AE](),
            this[tk]()
        },
        _15: function(t, i, n) {
            var e = this._o16[QI](this, t, i, n);
            return e = b$.onBindingPropertyChange(this, t, i, n) || e,
            T$[QI](this, t, i, n) || e
        },
        doValidate: function() {
            this[pk] && (this[pk][uf] = null != this._35, this.body[hE] = this._35);
            var t = this.$data.$location,
            i = 0,
            n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[uk] = !0),
            this.$x = i,
            this.$y = n,
            M$[bh].doValidate[Yr](this) || e
        }
    },
    D(hr, M$),
    Z(hr.prototype, {
        path: {
            get: function() {
                return this.data[cE]
            }
        },
        length: {
            get: function() {
                return this.data[Fr]
            }
        }
    }),
    hr[bh].addPoint = function(t, i, n) {
        var e = this._ic(t, i),
        s = this[Io],
        r = In(s[cE], e.x, e.y, n);
        r && (s[TS] = r)
    },
    ar[bh] = {
        _mv: function() {
            this._jw[ra].visibility = YM
        },
        _kr: function() {
            this._jw[ra][wy] = pu
        },
        clear: function() {
            this._nye.clear(),
            this._o1g()
        },
        contains: function(t) {
            return t instanceof Object && t.id && (t = t.id),
            this._nye[y_](t)
        },
        addDrawable: function(t, i) {
            if (i) {
                var n = {
                    id: ++KD,
                    drawable: t,
                    scope: i
                };
                return this._nye.add(n),
                n
            }
            return t.id || (t.id = ++KD),
            this._nye[nh](t),
            t
        },
        removeDrawable: function(t) {
            return t.id ? void this._nye[Vr](t) : this._nye.removeById(t)
        },
        _nye: null,
        invalidate: function() {
            this._o1g()
        },
        _o1g: function() {
            this._d9._74 || this._jt()
        },
        _jt: function() {
            vi(this._jw, vu, "");
            var t = this._d9._la,
            i = this.g;
            i[To](1, 0, 0, 1, 0, 0),
            i[cf](0, 0, this._jw[io], this._jw.height),
            i[Ug](),
            this._d9._kj._nzq(i);
            for (var n = this._nye._k2,
            e = 0,
            s = n[Fr]; s > e; e++) i[Ug](),
            i[zg](),
            this._ht(i, n[e], t),
            i[Fy]();
            i[Fy]()
        },
        _ht: function(t, i, n) {
            return i instanceof Function ? void i(t, n) : void(i[Vj] instanceof Function && i[xh] && i[Vj][Yr](i[xh], t, n))
        }
    },
    bN[Pu] = QD ? !1 : !0;
    var U$ = function(t) {
        this._l1 = t
    };
    bN[Xj] = 600,
    bN.ANIMATION_TYPE = bR.easeOut,
    U$.prototype = {
        _l1: null,
        _ny: .001,
        _eo: null,
        _d7: function(t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        },
        _hy: function(t, i) {
            t *= .6,
            i *= .6,
            t = this._d7(t),
            i = this._d7(i),
            this._mj();
            var n = Math[po](t * t + i * i);
            if (.01 > n) return ! 1;
            var e = Math.min(bN[Xj], n / this._ny);
            this._speedX = t,
            this._speedY = i,
            this._nyX = t / e,
            this._nyY = i / e,
            this._eo = new gR(this._5t, this, e, bR.easeOutStrong),
            this._eo._l4()
        },
        _5t: function(t, i) {
            if (0 != t) {
                var n = this._speedX * i - .5 * this._nyX * i * i,
                e = this._speedY * i - .5 * this._nyY * i * i;
                this._speedX -= this._nyX * i,
                this._speedY -= this._nyY * i,
                this._l1[Ho](n, e)
            }
        },
        _mj: function() {
            this._eo && this._eo._mj()
        },
        _it: function(t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t,
            n = this._fromTY + (this._toTY - this._fromTY) * t,
            e = this._fromScale + (this._toScale - this._fromScale) * t;
            this._l1[LC](i, n, e)
        },
        _l2: function(t, i, n, e) {
            var s = this._l1,
            r = s[Ta];
            if (0 >= n && (n = r), this._mj(), t != s.tx || i != s.ty || n != r) {
                var h, a, o;
                e instanceof Object && (h = e[Kj], a = e[Zj], o = e[Jj]);
                var f = s.tx,
                _ = s.ty;
                if (!h) {
                    var c = EN(t, i, f, _);
                    if (h = c / 2, n != r) {
                        var u = n > r ? n / r: r / n;
                        h = Math[sf](h, 50 * u)
                    }
                }
                a = a || bN[Xj],
                o = o || bN.ANIMATION_TYPE,
                h = Math[go](a, h),
                this._fromTX = f,
                this._fromTY = _,
                this._fromScale = r,
                this._toTX = t,
                this._toTY = i,
                this._toScale = n,
                this._eo = new gR(this._it, this, h, o),
                this._eo._l4()
            }
        }
    },
    bN.INTERACTION_HANDLER_SIZE_TOUCH = 8,
    bN[Qj] = 4,
    bN[tP] = 30,
    bN[iP] = 20;
    var H$ = Math.PI / 4;
    cr.prototype = {
        onElementRemoved: function(t, i) {
            this[nP] && (t == this[nP] || S(t) && x(t, this.element)) && this[gc](i)
        },
        onClear: function(t) {
            this[nP] && this[gc](t)
        },
        destroy: function() {
            delete this.element,
            this.removeDrawable()
        },
        invalidate: function() {
            this[Du][Dm]()
        },
        removeDrawable: function() {
            this._gyId && (this[Du][eP](this._gyId), delete this._gyId, this[Dm]())
        },
        addDrawable: function() {
            this._gyId || (this._gyId = this.topCanvas[sP](this[rP], this).id, this.invalidate())
        },
        doDraw: function() {},
        escapable: !0,
        onkeydown: function(t, i) {
            this.escapable && 27 == t.keyCode && (P(t), this[gc](i))
        }
    },
    xR[hP] = cr,
    ur.prototype = {
        defaultCursor: Ru,
        getInteractionInstances: function(t) {
            if (!this.interactions) return null;
            for (var i = [], n = 0, e = this[Nu].length; e > n; n++) {
                var s = this[Nu][n];
                s instanceof Function ? i[Kr](new s(t)) : s instanceof Object && i[Kr](s)
            }
            return i
        }
    },
    dr.prototype = {
        _f1: null,
        _jg: null,
        destroy: function() {
            R(this, dr, gc, arguments),
            delete this._jg,
            delete this._ny6,
            delete this._f1
        },
        doDraw: function(t) {
            var i = this[$a];
            i && (i.forEach(function(i) {
                this[aP](t, i)
            },
            this), this.isClosePath && t.closePath(), this[oP](t))
        },
        styleDraw: function(t) {
            var i = lr(this[Xc][hj], this[fP](this.graph));
            i[ko] && (t[ko] = i.lineWidth, i[Sg] && (t[Sg] = i.lineCap), i[Cg] && (t[Cg] = i[Cg]), i[zf] && (t[zf] = i[zf], t[$f] = i[$f] || 0), t.strokeStyle = i.strokeStyle, t[kg]()),
            i.fillStyle && (t[ky] = i[ky], t[Cy]())
        },
        drawPoint: function(t, i, n) {
            if (n) return void t[L_](i.x, i.y);
            if (xR[oh](i)) {
                var e = i[0],
                s = i[1];
                t[Np](e.x, e.y, s.x, s.y)
            } else t[D_](i.x, i.y)
        },
        setCurrentPoint: function(t) {
            this[_P] = t
        },
        addPoint: function(t) {
            this._jg || (this._jg = [], this[sP]()),
            this._jg[Kr](t),
            this[Dm]()
        }
    },
    Z(dr.prototype, {
        currentPoint: {
            get: function() {
                return this._ny6
            },
            set: function(t) {
                this._ny6 = t,
                this.invalidate()
            }
        },
        prevPoint: {
            get: function() {
                return this._jg && this._jg.length ? this._jg[this._jg[Fr] - 1] : null
            }
        },
        points: {
            get: function() {
                return this._ny6 && this._jg && this._jg[Fr] ? this._jg.concat(this._ny6) : void 0
            }
        }
    }),
    D(dr, cr),
    xR[cP] = dr,
    vr[bh] = {
        destroy: function() {
            R(this, vr, gc, arguments),
            delete this._l4Time,
            delete this[uP]
        },
        doDraw: function(t, i) {
            return this._jg ? this._jg[Fr] <= 1 ? gr[bh][rP][Yr](this, t, i) : void R(this, vr, rP, arguments) : void 0
        },
        ondblclick: function(t, i) {
            this.destroy(i)
        },
        finish: function(t, i, n) {
            if (this._l4Time && Date.now() - this._l4Time < 200) return void this[gc](i);
            var e;
            this._jg && this._jg.length >= 2 && (this._jg[nx](), e = new gN, l(this._jg,
            function(t) {
                if (xR[oh](t)) {
                    var i = t[0],
                    n = t[1];
                    e[nh](new tB(mR[gg], [i.x, i.y, n.x, n.y]))
                } else e[nh](new tB(mR[yg], [t.x, t.y]))
            },
            this)),
            i[dP](this[uP], n, t, e),
            this[gc](i)
        },
        onstart: function(t, i) {
            if (2 != t[Ia]) {
                var n = t[ya]();
                if (this[uP]) {
                    var e = n instanceof f$ && i[jC](n, this.start);
                    return e ? void this[lP](t, i, n) : void this[eo](this[vP](t))
                }
                var s = n instanceof f$ && i[bP](n);
                s && (this.start = n, this._l4Time = Date.now(), this[eo](this[vP](t)))
            }
        },
        onmousemove: function(t) {
            this[uP] && this.setCurrentPoint(this[vP](t))
        },
        toLogicalPoint: function(t) {
            return this[Xc][vC](t)
        },
        startdrag: function(t) {
            this[uP] && (t[yP] = !0)
        },
        ondrag: function(t) {
            this.start && this.setCurrentPoint(this[vP](t))
        },
        enddrag: function(t, i) {
            if (this.start) {
                var n = t.getData(),
                e = n instanceof f$ && i[jC](n, this[uP]);
                e && this.finish(t, i, n)
            }
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this.graph[AC](v$[SO]),
                strokeStyle: this[Xc][AC](v$[jO]),
                lineDash: this[Xc][AC](v$.EDGE_LINE_DASH),
                lineDashOffset: this[Xc].getDefaultStyle(v$[RO]),
                lineCap: this.graph[AC](v$[XI]),
                lineJoin: this[Xc].getDefaultStyle(v$.LINE_JOIN)
            }
        }
    },
    D(vr, dr),
    xR.CreateEdgeInteraction = vr,
    br.prototype = {
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this[Xc][AC](v$.SHAPE_STROKE),
                strokeStyle: this[Xc][AC](v$.SHAPE_STROKE_STYLE),
                fillStyle: this[Xc].getDefaultStyle(v$.SHAPE_FILL_COLOR)
            }
        },
        finish: function(t, i) {
            if (this._jg && this._jg.length) {
                var n = this._jg,
                e = 0,
                s = 0,
                r = 0;
                n.forEach(function(t) {
                    return xR[oh](t) ? void t[Kf](function() {
                        e += t.x,
                        s += t.y,
                        r++
                    }) : (e += t.x, s += t.y, void r++)
                }),
                e /= r,
                s /= r;
                var h = [];
                n.forEach(function(t, i) {
                    if (0 == i) return void h.push(new tB(mR.SEGMENT_MOVE_TO, [t.x - e, t.y - s]));
                    if (xR[oh](t)) {
                        var n = t[0],
                        r = t[1];
                        h[Kr](new tB(mR[gg], [n.x - e, n.y - s, r.x - e, r.y - s]))
                    } else h[Kr](new tB(mR[yg], [t.x - e, t.y - s]))
                }),
                this[uo](t, h, e, s),
                this.destroy(i)
            }
        },
        startdrag: function(t) {
            t[yP] = !0
        },
        createElement: function(t, i, n, e) {
            return this[Xc].createShapeByInteraction(t, i, n, e)
        },
        onstart: function(t, i) {
            var n = i.toLogical(t);
            this._f1 = n,
            this[eo](n)
        },
        onmousemove: function(t, i) {
            this._f1 && (this[_P] = i.toLogical(t))
        },
        ondblclick: function(t, i) {
            if (this._f1) {
                if (this._jg[Fr] < 3) return void this[gc](i);
                delete this._jg[this._jg[Fr] - 1],
                this[lP](t, i)
            }
        },
        isClosePath: !0
    },
    D(br, dr),
    xR[gP] = br,
    yr.prototype = {
        isClosePath: !1,
        createElement: function(t, i, n, e) {
            return this.graph[pP](t, i, n, e)
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: D$[v$.SHAPE_STROKE],
                strokeStyle: D$[v$[jw]],
                lineDash: this[Xc][AC](v$.SHAPE_LINE_DASH),
                lineDashOffset: this[Xc][AC](v$[Lw]),
                lineCap: this[Xc][AC](v$.LINE_CAP),
                lineJoin: this.graph[AC](v$[Uw])
            }
        }
    },
    D(yr, br),
    xR[xP] = yr,
    gr.prototype = {
        destroy: function(t) {
            R(this, gr, gc, arguments),
            t[vj] = "",
            this[uP] = null
        },
        doDraw: function(t) {
            if (this.start && this[_P]) {
                var i, n;
                this[Xc][hj] && (i = this[Xc][hj][Bm], n = this[Xc].interactionProperties.edgeType),
                i = i || this[Xc][rj] || xR[mP],
                n = n || this[Xc][Zc];
                var e = i[wS] || xR[mP][wS],
                s = this.graph[Kc](this[uP]);
                s && s.bodyBounds && (s = s[Jc][tu], e(t, s, this[_P], n), this[oP](t))
            }
        },
        canLinkFrom: function(t, i) {
            return t instanceof f$ && i[bP](t)
        },
        canLinkTo: function(t, i) {
            return t instanceof f$ && i[jC](t, this.start)
        },
        startdrag: function(t, i) {
            var n = t[ya]();
            this[bP](n, i) && (t[yP] = !0, this[uP] = n, i[vj] = Uv, this[sP]())
        },
        ondrag: function(t, i) {
            this[uP] && (xR[uC](t), this.currentPoint = i[vC](t), this[Dm]())
        },
        enddrag: function(t, i) {
            if (this[uP]) {
                this[Dm]();
                var n = t[ya]();
                this[jC](n, i) && i.createEdgeByInteraction(this[uP], n, t),
                this[gc](i)
            }
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this[Xc].getDefaultStyle(v$[SO]),
                strokeStyle: this.graph[AC](v$[jO]),
                lineDash: this[Xc][AC](v$[DO]),
                lineDashOffset: this[Xc][AC](v$[RO]),
                lineCap: this[Xc].getDefaultStyle(v$[XI]),
                lineJoin: this.graph[AC](v$[Uw])
            }
        }
    },
    D(gr, dr),
    xR.CreateSimpleEdgeInteraction = gr,
    bN.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1,
    Tr[bh] = {
        html: null,
        createHTML: function() {
            var t = i.createElement(EP);
            t[Jr] = wP,
            t[ra][Cf] = mu,
            t[ra][Py] = tu,
            t[ra][bb] = TP,
            t.style.padding = OP,
            t[ra][MP] = "0px 0px 10px rgba(40, 85, 184, 0.75)",
            t[ra].display = xu,
            t.style[Tm] = pu;
            var n = this;
            return t[IP] = function(t) {
                n.onValueChange(t)
            },
            t[kP] = function(t) {
                return 27 == t.keyCode ? void n[SP]() : void 0
            },
            t.onkeypress = function(i) {
                if (13 == i.keyCode || 10 == i.keyCode) {
                    if (i[fh](), i.altKey || i[Ba] || i[Dx]) return Er(t, yo),
                    void n.onValueChange(i);
                    n[CP]()
                }
            },
            i.body[mc](t),
            t
        },
        setText: function(t, i) {
            this[WC].value = t || "",
            i && (this.html.style[$u] = i),
            wr(this[WC]),
            this[jP](this[WC])
        },
        onSizeChange: function(t) {
            var i = (t[PP], t[NS], mr(t));
            return t[ra][io] = i[io] + 30 + ro,
            t[ra].height = i.height + 10 + ro,
            i
        },
        onValueChange: function(t) {
            var i = t[Mu];
            this.onSizeChange(i),
            i.style[Uo] = i.x - i[PP] / 2 + ro
        },
        onClickOnWindow: function(t) {
            t.target != this.html && (bN[AP] ? this.stopEdit() : this[SP]())
        },
        startEdit: function(i, n, e, s, r) {
            this.html || (this[WC] = this[LP]()),
            this.stopEditWhenClickOnWindow || (this.stopEditWhenClickOnWindow = function(t) {
                this[zP](t)
            } [My](this)),
            t.addEventListener(DP, this[NP], !0),
            this.callback = r,
            this[WC].x = i,
            this[WC].y = n,
            this[WC][ra].display = kj,
            xr(this[WC], i, n),
            this.setText(e, s || 10),
            xr(this[WC], i, n)
        },
        isEditing: function() {
            return xu != this[WC][ra][xm]
        },
        cancelEdit: function() {
            this[CP](!0)
        },
        stopEdit: function(i) {
            if (this.isEditing()) {
                t.removeEventListener(DP, this.stopEditWhenClickOnWindow);
                var n = this[WC].value;
                if (!i && this[vc] && this[vc](n) === !1) return ! 1;
                this[WC][ra][xm] = xu,
                this.html.value = null,
                this.callback = null
            }
        },
        destroy: function() {
            this[WC] && i[pk][my](this.html)
        }
    },
    xR[RP] = Tr;
    var q$ = function(t) {
        this.graph = t
    };
    q$[bh] = {
        destroy: function(t) {
            t.labelEditor && (t.labelEditor[gc](), delete t[BP])
        },
        ondblclick: function(t, i) {
            var n = t.getData();
            if (!n) return i[yE] ? void i[$P]() : void(i[FP] && i[GP](bN.ZOOM_ANIMATE));
            if (i.editable && i.isEditable(n)) {
                var e = i[ru](t);
                if (e instanceof k$ && e[mS] !== !1) {
                    var s = i[BP];
                    s || (i[BP] = s = new Tr);
                    var r = e[mo]();
                    return r = i[YP](r.x + r.width / 2, r.y + r.height / 2),
                    r = pr(r.x, r.y, i[WC]),
                    void i[UP](n, e, s, r)
                }
            }
            var h = n instanceof u$,
            a = n instanceof o$ && n[HP]();
            return n._4g && (ki(t) || !h && !a) ? void(i[yE] = n) : h ? void(n[ME] = !n[ME]) : a ? void this[Xc][rC](n) : void 0
        }
    };
    var W$ = function(t) {
        this[Xc] = t
    };
    W$.prototype = {
        onmousedown: function(t, i) {
            i.focus(!0)
        },
        onkeydown: function(t, i) {
            if (i[mS]) {
                var n = t[Nx];
                if (8 == n || 46 == n || 127 == n) return i[qP](t),
                void C(t);
                if (ki(t)) {
                    if (67 == n);
                    else if (86 == n);
                    else if (90 == n);
                    else if (89 != n) return;
                    C(t)
                }
            }
        }
    },
    xR.EditInteraction = W$;
    var V$ = function(t) {
        this[Xc] = t
    };
    V$[bh] = {
        onkeydown: function(i, n) {
            if (i[WP] && 83 == i[Nx]) {
                var e = n.exportImage(n[Ta], n[Rj]),
                s = t[i_](),
                r = s.document;
                r.title = VP + e[io] + XP + e[no];
                var h = r[uo](lu);
                h[Ty] = e.data,
                r[pk].appendChild(h),
                C(i)
            }
        }
    };
    var X$ = function(t) {
        this[Xc] = t
    };
    X$[bh] = {
        destroy: function() {
            delete this[KP],
            delete this.currentDraggingElement
        },
        _2o: function(t) {
            var i = new gN;
            return t[QS][Kf](function(n) {
                t[UC](n) && t[Cu](n) && i.add(n)
            },
            this),
            i
        },
        onstart: function(t, i) {
            this.currentDraggingElement && this[gc](i)
        },
        startdrag: function(t, i) {
            if (!t.responded) {
                var n = t[ya]();
                if (!n || !i[ZP](n) || !i[UC](n)) return void this[gc](i);
                t[yP] = !0,
                this[JP] = n,
                this[KP] = this._2o(i);
                var e = new Cr(i, Cr[QP], t, this[JP], this[KP][rd]);
                return i.beforeInteractionEvent(e) === !1 ? void this[gc](i) : void i[ij](e)
            }
        },
        ondrag: function(t, i) {
            if (this.currentDraggingElement) {
                P(t);
                var n = t.dx,
                e = t.dy,
                s = i[Ta];
                n /= s,
                e /= s;
                var r = new Cr(i, Cr.ELEMENT_MOVING, t, this[JP], this[KP][rd]);
                i[tA](this[KP][rd], n, e),
                i.onInteractionEvent(r)
            }
        },
        enddrag: function(t, i) {
            if (this.currentDraggingElement) {
                if (this[KP] && this[KP][Fr]) {
                    if (t.shiftKey) {
                        var n, e = i[vC](t),
                        s = e.x,
                        r = e.y;
                        i[iA](function(t) {
                            var i = t[Io];
                            if (!this[KP][su](i) && t[pc][Eo](s - t.x, r - t.y) && t[ru](s, r, 1)) {
                                if (i instanceof xR[sj]) {
                                    if (!i[cu]) return;
                                    for (var e = this[KP][Fr]; e-->0;) {
                                        var h = this[KP][wh](e);
                                        if (h instanceof xR[yC] && h[nA](i)) return
                                    }
                                    return n = i,
                                    !1
                                }
                                return (i[cu] || i._i0() && i[ME]) && (n = i),
                                !1
                            }
                        },
                        this),
                        n && this[KP].forEach(function(t) {
                            for (var i = t.parent; i;) {
                                if (this[KP].contains(i)) return;
                                i = i[g_]
                            }
                            t[g_] = n
                        },
                        this)
                    }
                    var h = new Cr(i, Cr[eA], t, this[JP], this.draggingElements[rd]);
                    i[ij](h)
                }
                this.destroy(i)
            }
        },
        onpinch: function(t, i) {
            this.currentDraggingElement && this[Mv](t, i)
        },
        step: 1,
        onkeydown: function(t, i) {
            if (ki(t)) {
                var n, e;
                if (37 == t[Nx] ? n = -1 : 39 == t[Nx] ? n = 1 : 38 == t[Nx] ? e = -1 : 40 == t[Nx] && (e = 1), n || e) {
                    var s = this._2o(i).datas;
                    if (0 != s.length) {
                        C(t),
                        n = n || 0,
                        e = e || 0;
                        var r = this[sA] / i.scale,
                        h = new Cr(i, Cr[eA], t, null, s);
                        i[tA](s, n * r, e * r),
                        i[ij](h)
                    }
                }
            }
        }
    };
    var K$ = function(t) {
        this[Xc] = t
    };
    K$[bh] = {
        onkeydown: function(t, i) {
            ki(t) || (37 == t.keyCode ? (this._5u(i, 1, 0), C(t)) : 39 == t[Nx] ? (this._5u(i, -1, 0), C(t)) : 38 == t[Nx] ? (this._5u(i, 0, 1), C(t)) : 40 == t[Nx] && (this._5u(i, 0, -1), C(t)))
        },
        _5u: function(t, i, n) {
            t._ny1(i, n)
        },
        onstart: function(t, i) {
            this._l4 && this.destroy(i)
        },
        _l4: !1,
        startdrag: function(t, i) {
            t[yP] || (t.responded = !0, this._l4 = !0, i[vj] = _R)
        },
        ondrag: function(t, i) {
            this._l4 && (P(t), i.translate(t.dx || 0, t.dy || 0))
        },
        enddrag: function(t, i) {
            if (this._l4) {
                if (i.enableInertia !== !1) {
                    var n = t.vx,
                    e = t.vy; (Math[Vh](n) > .1 || Math[Vh](e) > .1) && i._ny1(n, e)
                }
                this[gc](i)
            }
        },
        onpinch: function(t, i) {
            this._l4 = !0;
            var n = t.dScale;
            if (n && 1 != n) {
                var e = i.globalToLocal(t[tu]);
                i.zoomAt(n, e.x, e.y, !1)
            }
        },
        destroy: function(t) {
            this._l4 = !1,
            t[vj] = null
        }
    },
    Or[bh] = {
        _21: function(t) {
            this[nP] && t.source == this[nP] && this.graph[DC](function() {
                this._ki()
            },
            this)
        },
        _8: function() {
            this._mcPropertyChangeListing || (this._mcPropertyChangeListing = !0, this.graph.dataPropertyChangeDispatcher[hd](this._21, this))
        },
        _4: function() {
            this._mcPropertyChangeListing = !1,
            this[Xc][rA][Ll](this._21, this)
        },
        onElementRemoved: function(t, i) {
            this.element && (t == this[nP] || S(t) && x(t, this[nP])) && this.destroy(i)
        },
        onClear: function(t) {
            this.element && this[gc](t)
        },
        destroy: function() {
            this[Xc][vj] = null,
            this[nP] && delete this[nP]._editting,
            delete this[nP],
            delete this._ny5,
            delete this._ny6,
            delete this._o1anEdit,
            this._79(),
            this._4()
        },
        _79: function() {
            this[hA] && (this[Du].removeDrawable(this[hA]), delete this.drawLineId, this[Du][Dm]())
        },
        _nzn: function() {
            this[hA] && this[Du][su](this.drawLineId) || (this[hA] = this[Du][sP](this[aA], this).id, this[Du][Dm]())
        },
        _ny5: null,
        _6b: function(t) {
            this._ny5 = t,
            this[Dm]()
        },
        _e8: function(t, i, n) {
            t.beginPath(),
            i[oA] ? t[Pb](i.x - this[Qu] / n, i.y - this[Qu] / n, this.handlerSize / n * 2, this[Qu] / n * 2) : t[_p](i.x, i.y, this[Qu] / n, 0, 2 * Math.PI, !1),
            t.lineWidth = 1 / n,
            t.lineDash = [],
            t[Dy] = Ly,
            t[ky] = "rgba(255, 255, 0, 0.8)",
            t[kg](),
            t[Cy]()
        },
        _gy: function(t, i, n, e) {
            e ? t[L_](i, n) : t[D_](i, n)
        },
        drawLine: function(t, i) {
            if (this._ny5 && this._ny5.length) {
                t.save();
                var n = this[nP] instanceof _$;
                n && (t[Ho](this.element.x, this.element.y), this[nP][Po] && t.rotate(this[nP].rotate));
                var e, s = [];
                t[zg](),
                this._ny5[Fr],
                l(this._ny5,
                function(i) {
                    if (i[jo] != mR[xg]) for (var n = 0,
                    r = i[$a]; n + 1 < r[Fr];) {
                        var h = r[n],
                        a = r[n + 1],
                        o = {
                            x: h,
                            y: a,
                            isControlPoint: this._7t(i, n)
                        };
                        s[Kr](o),
                        this._gy(t, o.x, o.y, null == e),
                        e = o,
                        n += 2
                    }
                },
                this),
                t[ko] = 1 / i,
                t[zf] = [2 / i, 3 / i],
                t[Dy] = fA,
                t[kg](),
                l(s,
                function(n) {
                    this._e8(t, n, i)
                },
                this),
                t[Fy]()
            }
        },
        invalidate: function() {
            this[Du][Dm]()
        },
        _41: function(t) {
            if (this.element != t && (this[nP] && this.destroy(), t && this.isEditable(t))) {
                var i = this._61(t, this.graph);
                i && (this.element = t, t._editting = !0, this._o1anEdit = !0, this._6b(i), this._8(), this._nzn())
            }
        },
        _ki: function() {
            if (this[hA] && this.element) {
                var t = this._61(this[nP], this[Xc]);
                return t ? void this._6b(t) : void this.destroy(this.graph)
            }
        },
        _61: function(t, i) {
            return i.isEditable(t) ? t[TS] || [] : void 0
        },
        _ic: function(t, i) {
            t -= this[nP].x,
            i -= this[nP].y;
            var n = {
                x: t,
                y: i
            };
            return this[nP][Po] && Rs(n, -this[nP].rotate),
            n
        },
        onclick: function(t, i) {
            if (i[mS] && t.altKey && this.element) {
                var n = this._gw(t, i);
                if (n && n[oA]) return void this.element[_A](n[Dl]);
                if (this.element == t[ya]()) {
                    var e = i[vC](t),
                    s = i[Kc](this[nP]);
                    s[eo](e.x, e.y, this[Qu] || 2)
                }
            }
        },
        isEditable: function(t) {
            return this[Xc].isEditable(t) && (t instanceof o$ || t instanceof _$)
        },
        ondblclick: function(t, i) {
            if (!i.editable) return void(this[nP] && this[gc](i));
            var n = t[ya]();
            return ! n || n == this[nP] || n._editting ? void this.destroy(i) : void this._41(n)
        },
        onstart: function(t, i) {
            if (!i[mS]) return void(this[nP] && this.destroy(i));
            if (!t[yP]) {
                if (this.element && this._gw(t, i)) return void(t[yP] = !0);
                var n = t[ya]();
                return n && i[cA](n) && n instanceof _$ ? void(this.element && n != this[nP] && this[gc]()) : void this._41(n)
            }
        },
        onrelease: function() {
            this[nP] && (this._o1anEdit = !0)
        },
        _ny6: null,
        _gw: function(t, i) {
            var n = i.toLogical(t);
            this[nP] instanceof _$ && (n = this._ic(n.x, n.y));
            var e, s = i[Ta],
            r = this[Qu] / s,
            h = this._ny5;
            return l(h,
            function(t, i) {
                for (var s = 0,
                a = t[$a]; s + 1 < a.length;) {
                    var o = a[s],
                    f = a[s + 1],
                    _ = EN(n.x, n.y, o, f);
                    if (r > _) {
                        if (e = {
                            segment: t,
                            index: i,
                            pointIndex: s
                        },
                        this._7t(t, s)) {
                            e.isControlPoint = !0;
                            var c = h instanceof gN ? h[Pd](i + 1) : h[i + 1];
                            c && (e[uA] = c)
                        }
                        return ! 1
                    }
                    s += 2
                }
            },
            this),
            e
        },
        _7t: function(t, i) {
            return i == t.points.length - 2
        },
        startdrag: function(t, i) {
            if (this[nP] && this._o1anEdit && (this._ny6 = this._gw(t, i), this._ny6)) {
                this._79(),
                t.responded = !0;
                var n = new Cr(i, Cr[dA], t, this[nP]);
                n[lA] = this._ny6,
                i[ij](n)
            }
        },
        ondrag: function(t, i) {
            if (this[nP] && this._ny6) {
                var n = t.dx,
                e = t.dy,
                s = i.scale;
                if (n /= s, e /= s, this.element[Po]) {
                    var r = {
                        x: n,
                        y: e
                    };
                    Rs(r, -this[nP][Po]),
                    n = r.x,
                    e = r.y
                }
                var h = this._ny6.segment;
                if (!this._ny6.isControlPoint || h.type != KR && h[jo] != ZR) h[$a][this._ny6[vA]] += n,
                h.points[this._ny6[vA] + 1] += e;
                else {
                    for (var a = h.points.length - 4; a < h.points[Fr];) h.points[a] += n,
                    h[$a][a + 1] += e,
                    a += 2; ! this._ny6[uA] || this._ny6[uA][jo] != ZR && this._ny6[uA][jo] != KR || (this._ny6[uA][$a][0] += n, this._ny6[uA][$a][1] += e)
                }
                this[nP][Wm]();
                var o = new Cr(i, Cr[bA], t, this[nP]);
                o[lA] = this._ny6,
                i[ij](o)
            }
        },
        enddrag: function(t, i) {
            if (this[nP] && this._ny6) {
                this._nzn(),
                this._ki();
                var n = new Cr(i, Cr[yA], t, this[nP]);
                n[lA] = this._ny6,
                i[ij](n)
            }
        },
        onmousemove: function(t, i) {
            this[nP] && (i[vj] = t[gA] && (this._gw(t, i) || this[nP] == t[ya]()) ? "crosshair": null)
        }
    },
    bN[pA] = 1,
    bN.SELECTION_RECTANGLE_STROKE_COLOR = X(3724541951),
    bN.SELECTION_RECTANGLE_FILL_COLOR = X(1430753245);
    var Z$ = function(t) {
        this[Xc] = t,
        this[Du] = t._8l._topCanvas
    };
    Z$[bh] = {
        onstart: function(t, i) {
            this._l4 && this.destroy(i)
        },
        startdrag: function(t, i) {
            t[yP] || (t.responded = !0, this._l4 = i.toLogical(t), i[vj] = Uv, this._1jId = this[Du][sP](this._1j, this).id)
        },
        ondrag: function(t, i) {
            if (this._l4) {
                P(t),
                this._end = i[vC](t),
                this.invalidate();
                var n = new Cr(i, Cr.SELECT_START, t, i[QS]);
                i[ij](n)
            }
        },
        enddrag: function(t, i) {
            if (this._l4) {
                this._fuTimer && (clearTimeout(this._fuTimer), this._fuTimer = null),
                this._fu(!0),
                this.destroy(i);
                var n = new Cr(i, Cr[xA], t, i[QS]);
                i.onInteractionEvent(n)
            }
        },
        onpinch: function(t, i) {
            this._l4 && this.enddrag(t, i)
        },
        _1j: function(t, i) {
            t.strokeStyle = bN.SELECTION_RECTANGLE_STROKE_COLOR,
            t[ky] = bN[mA],
            t[ko] = bN[pA] / i;
            var n = this._l4.x,
            e = this._l4.y;
            t[Pb](n, e, this._end.x - n, this._end.y - e),
            t[Cy](),
            t.stroke()
        },
        invalidate: function() {
            return this[mE] ? void this[Du][Dm]() : (this[mE] = !0, void(this._fuTimer = setTimeout(this._fu[My](this), 100)))
        },
        _fu: function(t) {
            if (this.invalidateFlag = !1, this._fuTimer = null, !this._l4 || iN && !t) return void this[Du][Dm]();
            var i = Math[go](this._l4.x, this._end.x),
            n = Math[go](this._l4.y, this._end.y),
            e = Math[Vh](this._l4.x - this._end.x),
            s = Math.abs(this._l4.y - this._end.y);
            if (!e || !s) return void this.graph[QS][Oa]();
            var r, h = [],
            a = this[Xc][Ta];
            if (this[Xc][EA](function(t) {
                t._i8 && this[Xc].isSelectable(t[Pf]) && (r = t._fv, (ai(i, n, e, s, r.x + t._x, r.y + t._y, r[io], r[no]) || Dn(i, n, e, s, t, a)) && h.push(t[Pf]))
            },
            this), this.graph[QS][Th](h), this[Du].invalidate(), !t) {
                var o = new Cr(this.graph, Cr[wA], null, this[Xc][QS]);
                this.graph[ij](o)
            }
        },
        destroy: function(t) {
            this._l4 = null,
            t[vj] = null,
            this._1jId && (this[Du][eP](this._1jId), delete this._1jId, this.topCanvas.invalidate())
        }
    };
    var H$ = Math.PI / 4;
    Mr[bh] = {
        _dx: !1,
        _e1: !1,
        _21: function(t) {
            this.element && t.source == this.element && this[Xc][DC](function() {
                this._ny4()
            },
            this)
        },
        _8: function() {
            this._mcPropertyChangeListing || (this._mcPropertyChangeListing = !0, this[Xc].dataPropertyChangeDispatcher[hd](this._21, this))
        },
        _4: function() {
            this._mcPropertyChangeListing = !1,
            this[Xc][rA][Ll](this._21, this)
        },
        onElementRemoved: function(t, i) {
            this[nP] && (t == this[nP] || S(t) && x(t, this[nP])) && this[gc](i)
        },
        onClear: function(t) {
            this.element && this[gc](t)
        },
        ondblclick: function(t, i) {
            this[nP] && this[gc](i)
        },
        destroy: function(t) {
            t[vj] = null,
            delete this[nP],
            delete this._o1z,
            delete this._nzody,
            delete this._ny6,
            delete this._o1anEdit,
            delete this._jg,
            delete this._rotatePoint,
            delete this._e1,
            delete this._dx,
            delete this._insets,
            this._79(),
            this._4()
        },
        _79: function() {
            this._gyId && (this[Du].removeDrawable(this._gyId), delete this._gyId, this[Du][Dm]())
        },
        _nzn: function() {
            this._gyId && this.topCanvas[su](this._gyId) || (this._gyId = this[Du].addDrawable(this._gy, this).id, this[Du][Dm]())
        },
        _o1z: null,
        _jg: null,
        _8q: function(t) {
            this._o1z = t;
            var i = this._o1z.x,
            n = this._o1z.y,
            e = this._o1z.width,
            s = this._o1z[no],
            r = this[nP] instanceof u$ && this[nP][ME];
            if (this._e1) {
                var h = [];
                r || (h.push({
                    x: i,
                    y: n,
                    p: IN[nl],
                    cursor: TA,
                    rotate: 5 * H$
                }), h[Kr]({
                    x: i + e / 2,
                    y: n,
                    p: IN.CENTER_TOP,
                    cursor: OA,
                    rotate: 6 * H$
                }), h[Kr]({
                    x: i + e,
                    y: n,
                    p: IN[hl],
                    cursor: td,
                    rotate: 7 * H$
                }), h.push({
                    x: i,
                    y: n + s / 2,
                    p: IN[el],
                    cursor: MA,
                    rotate: 4 * H$
                }), h[Kr]({
                    x: i,
                    y: n + s,
                    p: IN[ol],
                    cursor: td,
                    rotate: 3 * H$
                })),
                h.push({
                    x: i + e,
                    y: n + s / 2,
                    p: IN[fl],
                    cursor: MA,
                    rotate: 0
                }),
                h.push({
                    x: i + e / 2,
                    y: n + s,
                    p: IN[rl],
                    cursor: OA,
                    rotate: 2 * H$
                }),
                h[Kr]({
                    x: i + e,
                    y: n + s,
                    p: IN[al],
                    cursor: TA,
                    rotate: H$
                }),
                this._jg = h
            }
            this._rotatePoint = this._dx ? {
                x: i + e / 2,
                y: n,
                cursor: cR
            }: null,
            this._o1g()
        },
        _e8: function(t, i, n, e) {
            t.beginPath();
            var s = (this[Qu] - 1) / e;
            t[Pb](i - s, n - s, 2 * s, 2 * s),
            t[ko] = 1 / e,
            t[zf] = [],
            t[Dy] = Ly,
            t[ky] = "rgba(255, 255, 255, 0.8)",
            t[kg](),
            t.fill()
        },
        _5h: function(t, i, n, e, s, r) {
            s = s || this[Qu],
            r = r || IA,
            t.beginPath(),
            s /= e,
            t[_p](i, n, s, 0, 2 * Math.PI, !1),
            t[ko] = 1 / e,
            t.lineDash = [],
            t.strokeStyle = Ly,
            t[ky] = r,
            t.stroke(),
            t[Cy]()
        },
        _ic: function(t, i) {
            t -= this[nP].x,
            i -= this[nP].y;
            var n = {
                x: t,
                y: i
            };
            return this[nP][Po] && Rs(n, -this[nP].rotate),
            n
        },
        _gy: function(t, i) {
            if (this._o1z) {
                if (t.save(), t.translate(this.element.x, this[nP].y), this.element[Po] && t[Po](this[nP].rotate), this._rotatePoint) {
                    this._5h(t, 0, 0, i, 3, kA);
                    var n = this._rotatePoint.x,
                    e = this._rotatePoint.y - this._rotateHandleLength / i;
                    t[zg](),
                    t[L_](n, this._rotatePoint.y),
                    t[D_](n, e),
                    t.lineWidth = 1 / i,
                    t[Dy] = fA,
                    t[kg](),
                    this._5h(t, n, e, i)
                }
                if (this._jg) {
                    var s = this._o1z.x,
                    r = this._o1z.y,
                    h = this._o1z[io],
                    a = this._o1z[no];
                    t.beginPath(),
                    t.rect(s, r, h, a),
                    t[ko] = 1 / i,
                    t[zf] = [2 / i, 3 / i],
                    t[Dy] = fA,
                    t[kg](),
                    l(this._jg,
                    function(n) {
                        this._e8(t, n.x, n.y, i)
                    },
                    this)
                }
                t.restore()
            }
        },
        _o1g: function() {
            this[Du][Dm]()
        },
        _41: function(t, i, n, e) {
            this.element = t,
            this._nzn();
            var s = i[Kc](t);
            this._nzody = s.body,
            this._e1 = n,
            this._dx = e,
            this._ny4(),
            this._8()
        },
        _ny4: function() {
            if (this._gyId) {
                var t = Ir(this._nzody, this._nzody._ji),
                i = Ir(this._nzody, this._nzody._8j);
                this._insets = new MN(t.y - i.y, t.x - i.x, i.bottom - t.bottom, i[Wh] - t[Wh]),
                this._8q(i)
            }
        },
        _nyn: function(t, i) {
            return i[cA](t)
        },
        _nyt: function(t, i) {
            return (!t._i0() || !t[ME]) && i[SA](t)
        },
        _d6: function(t, i) {
            return t instanceof f$ && i[CA](t)
        },
        onstart: function(t, i) {
            if (!i.editable) return void(this[nP] && this[gc](i));
            if (!t[yP]) {
                var n = i[Kc](t),
                e = t[ya]();
                if (e != this.element) {
                    if (this.element) {
                        if (this._gw(t, i)) return void(t[yP] = !0);
                        this.destroy(i)
                    }
                    if (e && !e._editting && this._d6(e, i)) {
                        var s = this._nyn(e, i, n),
                        r = this._nyt(e, i, n); (s || r) && this._41(e, i, s, r)
                    }
                }
            }
        },
        onrelease: function(t, i) {
            this[nP] && (this._o1anEdit = !0, this._nzn(), i[DC](function() {
                this._ny4()
            },
            this))
        },
        _ny6: null,
        _gw: function(t, i) {
            var n = i.toLogical(t);
            n = this._ic(n.x, n.y);
            var e = i.scale,
            s = this[Qu] / e;
            if (this._rotatePoint) {
                var r = this._rotatePoint.x,
                h = this._rotatePoint.y - this._rotateHandleLength / e;
                if (EN(n.x, n.y, r, h) < s) return this._rotatePoint
            }
            if (this._jg && this._jg[Fr]) {
                var a;
                return l(this._jg,
                function(t) {
                    return EN(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                },
                this),
                a
            }
        },
        onmousemove: function(t, i) {
            if (this.element) {
                var n = this._gw(t, i);
                if (!n) return void(i[vj] = null);
                if (n != this._rotatePoint && this.element.rotate) {
                    var e = n[Po] + this.element[Po];
                    return void(i[vj] = kr(e))
                }
                i.cursor = n[vj]
            }
        },
        startdrag: function(t, i) {
            if (this.element && (this._79(), this._o1anEdit && (this._ny6 = this._gw(t, i), this._ny6))) {
                if (t[yP] = !0, this._ny6 == this._rotatePoint) return this._ny6[uP] = i.toLogical(t),
                void(this._ny6.rotate = this[nP][Po] || 0);
                var n = new Cr(i, Cr.RESIZE_START, t, this[nP]);
                n[lA] = this._ny6,
                i.onInteractionEvent(n)
            }
        },
        _80: function(t, i, n, e, s, r) {
            var h = this._o1z,
            a = h.x,
            o = h.y,
            f = h.width,
            _ = h.height;
            if (r) {
                var c = e != f;
                c ? s = e * _ / f: e = s * f / _
            }
            var u = t[cE]._fy,
            d = e / f,
            l = s / _,
            v = -a * d + i,
            b = -o * l + n;
            u.forEach(function(t) {
                if (t[jo] != mR.SEGMENT_CLOSE) {
                    var e = t[$a];
                    if (e && e[Fr]) for (var s = 0,
                    r = e[Fr]; r > s; s += 2) {
                        var h = e[s],
                        f = e[s + 1];
                        e[s] = (h - a) * d + i - v,
                        e[s + 1] = (f - o) * l + n - b
                    }
                }
            }),
            this._o1z[Th](i - v, n - b, e, s),
            t.setLocation(t.x + v, t.y + b),
            t[Wm]()
        },
        _ny8: function(t, i, n, e, s) {
            this._o1z[Th](i, n, e, s),
            t.minSize = {
                width: e,
                height: s
            }
        },
        _4q: function(t, i, n, e, s) {
            if (this[nP] instanceof u$) return this._ny8(this[nP], t, i, n, e, s);
            if (this[nP] instanceof _$) return this._80(this[nP], t, i, n, e, s);
            var r = this._nzody instanceof k$;
            if (!r && s) {
                var h = this._o1z,
                a = this._nzody.originalBounds,
                o = n != h[io];
                o ? e = n * a[no] / a.width: n = e * a.width / a[no]
            }
            var f = this[nP][hE],
            _ = new TN(n - this._insets[Uo] - this._insets.right, e - this._insets[Yo] - this._insets[qh]);
            if (_[io] < 1 && (n = this._insets[Uo] + this._insets[Wh] + 1, _[io] = 1), _.height < 1 && (e = this._insets[Yo] + this._insets[qh] + 1, _.height = 1), r ? this.element.setStyle(v$[nI], _) : this[nP][rE] = _, f) {
                var c = oi(f, n, e),
                u = c.x + t - (this._nzody[FE] || 0),
                d = c.y + i - (this._nzody[GE] || 0);
                if (this._o1z.set(t - u, i - d, n, e), this[nP][Po]) {
                    var c = Rs({
                        x: u,
                        y: d
                    },
                    this[nP][Po]);
                    u = c.x,
                    d = c.y
                }
                this[nP].x += u,
                this.element.y += d
            } else {
                var u = this._o1z.x * n / this._o1z[io] - t,
                d = this._o1z.y * e / this._o1z[no] - i;
                if (this._o1z.set(t + u, i + d, n, e), this[nP][Po]) {
                    var c = Rs({
                        x: u,
                        y: d
                    },
                    this[nP][Po]);
                    u = c.x,
                    d = c.y
                }
                this[nP].x -= u,
                this[nP].y -= d
            }
        },
        ondrag: function(t, i) {
            if (this[nP] && this._ny6) if (this._ny6 != this._rotatePoint) {
                var n = t.dx,
                e = t.dy,
                s = i.scale;
                if (n /= s, e /= s, this.element.rotate) {
                    var r = {
                        x: n,
                        y: e
                    };
                    Rs(r, -this.element[Po]),
                    n = r.x,
                    e = r.y
                }
                var h = this._ny6.p,
                a = this._o1z,
                o = a.x,
                f = a.y,
                _ = a[io],
                c = a[no];
                h[Xh] == kN ? n >= _ ? (o += _, _ = n - _ || 1) : (o += n, _ -= n) : h.horizontalPosition == CN && ( - n >= _ ? (_ = -n - _ || 1, o -= _) : _ += n),
                h[Xd] == jN ? e >= c ? (f += c, c = e - c || 1) : (f += e, c -= e) : h[Xd] == AN && ( - e >= c ? (c = -e - c || 1, f -= c) : c += e),
                this._4q(o, f, _, c, t.shiftKey);
                var u = new Cr(i, Cr.RESIZING, t, this[nP]);
                u[lA] = this._ny6,
                i[ij](u)
            } else {
                var r = i[vC](t),
                d = yn(r.x, r.y, this.element.x, this.element.y, this._ny6[uP].x, this._ny6.start.y, !0);
                d += this._ny6.rotate || 0,
                t[Dx] && (d = Math.round(d / Math.PI * 4) * Math.PI / 4),
                this[nP][Po] = d % (2 * Math.PI);
                var u = new Cr(i, Cr[jA], t, this[nP])
            }
        },
        enddrag: function(t, i) {
            if (this[nP] && this._ny6 && this._ny6 != this._rotatePoint) {
                var n = new Cr(i, Cr[PA], t, this[nP]);
                n[lA] = this._ny6,
                i.onInteractionEvent(n)
            }
        }
    },
    xR[AA] = Mr;
    var J$ = function(t) {
        this[Xc] = t
    };
    J$[bh] = {
        onstart: function(t, i) {
            if (!t[yP]) { ! cN && QD && i.focus(!0);
                var n = t[ya]();
                if (n && !i.isSelectable(n) && (n = null), n && ki(t)) {
                    i.reverseSelect(n);
                    var e = new Cr(i, Cr[LA], t, i[QS]);
                    return void i[ij](e)
                }
                if (!n || !i[QS][ZP](n)) {
                    n ? (i[zA](n), i[DA](n)) : i[zA](null);
                    var e = new Cr(i, Cr[LA], t, i[QS]);
                    i[ij](e)
                }
            }
        },
        onkeydown: function(t, i) {
            return 27 == t.keyCode ? void i[GC]() : void(ki(t) && 65 == t[Nx] && (i[NA](), C(t)))
        }
    };
    var Q$ = 0,
    tF = 15;
    bN[RA] = 3e3,
    bN[BA] = 1e3;
    var iF = $A;
    bi(Bh + iF, {
        "background-color": FA,
        overflow: pu,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: By,
        "pointer-events": xu,
        border: GA,
        padding: YA,
        display: kj,
        position: mu
    });
    var nF = function(t) {
        this.graph = t,
        this._nz8 = {}
    };
    nF[bh] = {
        _nz8: null,
        _nza: null,
        _nzd: function() {
            delete this._initTimer,
            this._nz8[Io] && (this._nza || (this._nza = i[uo](uu), this._nza[Jr] = iF), this._nza.parentNode || i[pk].appendChild(this._nza), this._dh(this[Xc], this._nz8[Io]))
        },
        _dh: function(t, i) {
            var n = t.getTooltip(i),
            e = Vu == i[UA];
            n && !e && (n = n.replace(/\n/g, HA)),
            e ? this._nza.textContent = n || "": this._nza[VC] = n || "";
            var s = this._nz8.evt[qA] + Q$,
            r = this._nz8[WA][ba] + tF;
            Sr(this._nza, s, r),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
            this._deleteTimer = setTimeout(xR.createFunction(this, this._8i), t.tooltipDuration || bN[RA])
        },
        _8i: function() {
            delete this._deleteTimer,
            this._nza && this._nza.parentNode && this._nza.parentNode[my](this._nza),
            delete this._nza,
            this._nz8 = {}
        },
        _fc: function(t, i, n, e) {
            if (!this._nza) {
                var s = e[VA];
                return isNaN(s) && (s = bN.TOOLTIP_DELAY),
                void(this._initTimer = setTimeout(xR[XA](this, this._nzd), s))
            }
            this._dh(e, t)
        },
        onstart: function(t, i) {
            this.destroy(i)
        },
        onmousemove: function(t, i) {
            if (i.enableTooltip) {
                var n = t[ya]();
                if (this._nz8.evt = t, this._nz8[Io] != n && (this._nz8[Io] = n, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), n)) {
                    var e = i[KA](n);
                    e && this._fc(n, e, t, i)
                }
            }
        },
        destroy: function() {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
            this._nza && this._8i(),
            this._nz8 = {}
        }
    };
    var eF = function(t) {
        this.graph = t
    };
    eF[bh] = {
        onmousewheel: function(t, i) {
            if (i[ZA] !== !1) {
                if (i._scaling) return void C(t);
                i._scaling = !0,
                m(function() {
                    delete i._scaling
                },
                this, 100),
                fr(i, t, t.delta > 0) !== !1 && C(t)
            }
        }
    };
    var sF = function(t) {
        this.graph = t
    };
    sF[bh] = {
        onclick: function(t, i) {
            fr(i, t, !ki(t))
        }
    };
    var rF = function(t) {
        this[Xc] = t
    };
    rF[bh] = {
        onclick: function(t, i) {
            fr(i, t, ki(t))
        }
    },
    D(Cr, DN),
    Cr.ELEMENT_MOVE_START = JA,
    Cr.ELEMENT_MOVING = QA,
    Cr[eA] = tL,
    Cr[iL] = nL,
    Cr[JC] = eL,
    Cr[dA] = sL,
    Cr.POINT_MOVING = rL,
    Cr[yA] = hL,
    Cr[aL] = oL,
    Cr.RESIZING = fL,
    Cr[PA] = _L,
    Cr[jA] = cL,
    Cr[uL] = dL,
    Cr[lL] = vL,
    Cr[LA] = Xu,
    Cr.SELECT_START = bL,
    Cr[wA] = yL,
    Cr[xA] = gL,
    Cr[pL] = xL,
    jr[bh] = {
        _9s: function(t) {
            if (this._interactionSupport) switch (t[ul]) {
            case qN.KIND_REMOVE:
                this._interactionSupport._52(t[Io]);
                break;
            case qN[fv]:
                this._interactionSupport._7e(t.data)
            }
        },
        destroy: function() {
            delete this._l1,
            delete this._4z,
            this._interactionSupport && (this._interactionSupport._id(), delete this._interactionSupport)
        },
        _l1: null,
        _4z: null,
        defaultMode: null,
        _gj: function(t, i, n) {
            this._4z[t] = new ur(i, n),
            t == this[ad] && this._interactionSupport._7c(i)
        },
        addCustomInteraction: function(t) {
            this._interactionSupport._$c(t)
        },
        _ne: function(t) {
            var i = this._4z[t];
            return i ? i: hF[t]
        }
    },
    Z(jr[bh], {
        defaultCursor: {
            get: function() {
                return this.currentInteractionMode ? this[mL][bj] : void 0
            }
        },
        currentMode: {
            get: function() {
                return this._o1urrentMode
            },
            set: function(t) {
                this._o1urrentMode != t && (this._o1urrentMode, this._interactionSupport || (this._interactionSupport = new hR(this._l1)), this._o1urrentMode = t, this[mL] = this._ne(this._o1urrentMode), this._l1.cursor = this[bj], this._interactionSupport._7c(this.currentInteractionMode ? this[mL][EL](this._l1) : []))
            }
        }
    });
    var hF = {};
    bN[wL] = function(t, i, n) {
        var e = new ur(i, n);
        hF[t] = e
    },
    mR[TL] = OL,
    mR[od] = Ru,
    mR[ML] = qu,
    mR[IL] = kL,
    mR.INTERACTION_MODE_ZOOMOUT = SL,
    mR[CL] = jL,
    mR.INTERACTION_MODE_CREATE_EDGE = PL,
    mR[AL] = LL,
    mR[zL] = DL,
    bN.registerInteractions(mR.INTERACTION_MODE_VIEW, [J$, K$, eF, V$, q$, nF]),
    bN[wL](mR[CL], [W$, gr, J$, K$, eF, V$, nF]),
    bN[wL](mR.INTERACTION_MODE_CREATE_EDGE, [W$, vr, J$, K$, eF, V$, nF]),
    bN.registerInteractions(mR[AL], [W$, br, J$, K$, eF, V$, nF]),
    bN[wL](mR.INTERACTION_MODE_CREATE_LINE, [yr, J$, K$, eF, V$, nF]),
    bN.registerInteractions(mR.INTERACTION_MODE_DEFAULT, [W$, Mr, Or, J$, X$, K$, eF, V$, q$, nF]),
    bN.registerInteractions(mR.INTERACTION_MODE_SELECTION, [W$, Mr, Or, J$, X$, Z$, K$, eF, V$, q$, nF]),
    bN.registerInteractions(mR[IL], [eF, V$, sF], aR),
    bN[wL](mR[NL], [eF, V$, rF], oR),
    xR.PanInteraction = K$,
    xR[RL] = J$,
    xR[BL] = X$,
    xR[$L] = eF,
    xR[FL] = q$,
    xR[GL] = V$,
    xR[YL] = nF,
    xR[UL] = Z$,
    xR[HL] = Or;
    var aF = function(t) {
        this[Xc] = t
    };
    xR[qL] = aF,
    aF.prototype = {
        getNodeBounds: function(t) {
            return this.graph.getUIBounds(t)
        },
        isLayoutable: function(t) {
            return t[WL] !== !1
        },
        getLayoutResult: function() {},
        updateLocations: function(t, i, n, e, s) {
            if (i === !0) {
                if (this[VL] || (this[VL] = new LF), n && (this.animate[Kj] = n), e && (this[VL].animationType = e), this[VL][XL] = t, s) {
                    var r = s,
                    h = this;
                    s = function() {
                        r[Yr](h, t)
                    }
                }
                return void this[VL][uP](s)
            }
            for (var a in t) {
                var o = t[a],
                f = o.node;
                f[YC](o.x, o.y)
            }
            s && s.call(this, t)
        },
        _g6: function(t) {
            var i, n, e, s = null;
            t && (i = t[KL], s = t[vc], n = t[Kj], e = t[Jj]);
            var r = this.getLayoutResult(t);
            return r ? (this.updateLocations(r, i, n, e, s), r) : !1
        },
        doLayout: function(t, i) {
            return this[Xc] && i !== !0 ? void this.graph[DC](function() {
                this._g6(t)
            },
            this) : this._g6(t)
        }
    };
    var oF = 11,
    fF = 12,
    _F = 13,
    cF = 21,
    uF = 22,
    dF = 23;
    mR[ZL] = oF,
    mR[JL] = fF,
    mR[QL] = _F,
    mR[tz] = cF,
    mR[iz] = uF,
    mR[nz] = dF;
    var lF = ez,
    vF = sz,
    bF = rz,
    yF = hz;
    mR.LAYOUT_TYPE_EVEN = lF,
    mR[az] = bF,
    mR.LAYOUT_TYPE_EVEN_VERTICAL = yF,
    mR[oz] = vF,
    xR[fz] = Pr;
    var gF = function(t) {
        this.graph = t
    };
    gF[bh] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: cF,
        layoutType: lF,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function(t) {
            if (this[Xc]._8l._nz1) {
                var i = this.graph[Kc](t);
                if (i) return i._fv
            }
            return t[Zy] && t[Zy][Of] ? {
                width: t.image[Of][io],
                height: t[Zy][Of][no]
            }: this[_z]
        },
        _o1t: function(t, i) {
            if (this[cz](t)) {
                var n = this.getNodeSize(t),
                e = t.id,
                s = (t.parentChildrenDirection, i ? this._9q[i.id] : this._nzo);
                this._9q[e] = new pF(t[uz] || this[uz], t[dz] || this.vGap, t[lz] || this[lz], t[vz], s, t, n[io], n[no])
            }
        },
        _9q: null,
        _nzo: null,
        _l5: function() {
            this._9q = null,
            this._nzo = null
        },
        getLayoutResult: function(t) {
            var i, n, e, s, r = this[Xc];
            t instanceof Object && (i = t.x, n = t.y, r = t[bz] || this.graph, e = t.bounds, s = t[yz]),
            this._9q = {},
            this._nzo = new pF,
            this._nzo._nk(this.hGap, this[dz], this[vz], this.layoutType);
            var h = {},
            a = NF(r, this._o1t, this, !1, s);
            return a && (this._nzo._g6(i || 0, n || 0, h), e && e[Th](this._nzo.x, this._nzo.y, this._nzo.width, this._nzo[no])),
            this._l5(),
            h
        },
        doLayout: function(t, i) {
            if (M(t)) {
                var n = t,
                e = 0;
                M(i) && (e = i),
                t = {
                    x: n,
                    y: e
                },
                i = !0
            }
            return R(this, gF, gz, [t, i])
        }
    },
    D(gF, aF);
    var pF = function(t, i, n, e, s, r, h, a) {
        this._n6 = t || 0,
        this._n8 = i || 0,
        this[lz] = n,
        this[vz] = e,
        this.parentBounds = s,
        s && s._h1(this),
        this[pz] = r,
        this._fl = h,
        this._dn = a
    };
    pF[bh] = {
        _nk: function(t, i, n, e) {
            this._n6 = t,
            this._n8 = i,
            this[vz] = n,
            this[lz] = e
        },
        _8n: function() {
            this._fo = []
        },
        _n6: 0,
        _n8: 0,
        _fo: null,
        _fl: 0,
        _dn: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _h1: function(t) {
            this._fo || (this._fo = []),
            this._fo.push(t)
        },
        _dp: function(t, i, n, e) {
            var s = new ON;
            return n(this._fo,
            function(n) {
                n._42(t, i),
                s.add(n),
                e ? t += n[io] + this._n6: i += n[no] + this._n8
            },
            this),
            s
        },
        _8u: function(t, i, n, e, s) {
            var r, h = e ? this._n6: this._n8,
            a = e ? this._n8: this._n6,
            o = e ? "width": no,
            f = e ? "height": io,
            _ = e ? "_fl": xz,
            c = e ? "_dn": mz,
            u = e ? "hostDX": Ez,
            d = e ? "hostDY": wz,
            v = new ON,
            b = 0,
            y = 0,
            g = [],
            p = 0,
            x = 0;
            n(this._fo,
            function(n) {
                var s = x >= y;
                n._inheritedParentChildrenDirection = s ? e ? fF: uF: e ? oF: cF,
                n._42(t, i),
                s ? (g.push(n), b = Math[sf](b, n[o]), y += n[f] + a) : (r || (r = []), r[Kr](n), p = Math[sf](p, n[o]), x += n[f] + a)
            },
            this),
            y -= a,
            x -= a;
            var m = Math[sf](y, x),
            E = h,
            w = 0;
            this[pz] && (s && (E += this[_] + h, m > this[c] ? this[d] = (m - this[c]) / 2 : w = (this[c] - m) / 2), this[u] = b + E / 2 - this[_] / 2);
            var T = 0,
            O = w;
            return l(g,
            function(t) {
                e ? t[sw](b - t[o], O) : t[sw](O, b - t[o]),
                O += a + t[f],
                v[nh](t)
            },
            this),
            r ? (O = w, T = b + E, l(r,
            function(t) {
                e ? t.offset(T, O) : t[sw](O, T),
                O += a + t[f],
                v[nh](t)
            },
            this), v) : v
        },
        offset: function(t, i) {
            this.x += t,
            this.y += i,
            this.nodeX += t,
            this[Tz] += i,
            this._7g(t, i)
        },
        _nzj: function(t, i) {
            return 2 * this.cx - t - i - t
        },
        _nz2: function(t, i) {
            return 2 * this.cy - t - i - t
        },
        _na: function(t) {
            if (this._fo && 0 != this._fo.length) {
                if (t) return this[pz] && (this[Oz] += this._nzj(this[Oz], this._fl)),
                void l(this._fo,
                function(t) {
                    t[sw](this._nzj(t.x, t[io]), 0)
                },
                this);
                this.node && (this[Tz] += this._nz2(this.nodeY, this._dn)),
                l(this._fo,
                function(t) {
                    t.offset(0, this._nz2(t.y, t.height))
                },
                this)
            }
        },
        _7g: function(t, i) {
            this._fo && l(this._fo,
            function(n) {
                n[sw](t, i)
            },
            this)
        },
        _42: function(t, i) {
            return this.x = t || 0,
            this.y = i || 0,
            this._fo && 0 != this._fo[Fr] ? void this._27(this.x, this.y, this.layoutType) : void(this.node && (this[io] = this._fl, this.height = this._dn, this[Oz] = this.x, this.nodeY = this.y))
        },
        _7i: function(t) {
            this[pz] && (t[this.node.id] = {
                node: this[pz],
                x: this[Oz] + this._fl / 2,
                y: this[Tz] + this._dn / 2,
                left: this[Oz],
                top: this[Tz],
                width: this._fl,
                height: this._dn
            }),
            this._fo && l(this._fo,
            function(i) {
                i._7i(t)
            },
            this)
        },
        _g6: function(t, i, n) {
            this._42(t, i),
            this._7i(n)
        },
        _27: function(t, i, e) {
            var s, r = t,
            h = i; ! this[vz] && this[Mz] && (this[vz] = this._inheritedParentChildrenDirection || this[Mz][vz]);
            var a = this[vz],
            o = Pr(a);
            if (this[pz]) {
                s = a == _F || a == dF;
                var f = Ar(a);
                s || (o ? t += this._fl + this._n6: i += this._dn + this._n8)
            }
            var _, c = this[pz] && this[pz][Iz] ? b: l;
            if (e == vF) _ = this._8u(t, i, c, !o, s);
            else {
                var u;
                u = e == lF ? !o: e == bF,
                _ = this._dp(t, i, c, u, s)
            }
            var d = 0,
            v = 0;
            _ && !_.isEmpty() && (d = _[io], v = _.height, this[nh](_)),
            this.node && (this[Oz] = r, this[Tz] = h, this.hostDX !== n || this[Ez] !== n ? (this[Oz] += this[wz] || 0, this[Tz] += this[Ez] || 0) : o ? this[Tz] += v / 2 - this._dn / 2 : this[Oz] += d / 2 - this._fl / 2, this[qd](this[Oz], this.nodeY, this._fl, this._dn), f && this._na(o))
        },
        node: null,
        uiBounds: null
    },
    D(pF, ON),
    zr[bh] = {
        layoutDatas: null,
        isMovable: function(t) {
            return ! this[ud][t.id]
        },
        _75: !1,
        _3y: function() {
            this._75 = !0,
            this[Xc]._24[hd](this._9c, this),
            this[Xc]._1o[hd](this._2e, this)
        },
        _1y: function() {
            this._75 = !1,
            this.graph._24[Ll](this._9c, this),
            this.graph._1o[Ll](this._2e, this)
        },
        invalidateFlag: !0,
        invalidateLayoutDatas: function() {
            this[mE] = !0
        },
        resetLayoutDatas: function() {
            return this[mE] = !1,
            this.layoutDatas = Lr.call(this)
        },
        _2e: function(t) {
            Cr.ELEMENT_MOVE_START == t[ul] ? (this.currentMovingNodes = {},
            t.datas.forEach(function(t) {
                this[ud][t.id] = t
            },
            this)) : Cr[eA] == t[ul] && (this.currentMovingNodes = {})
        },
        _9c: function() {
            this[kz]()
        },
        isRunning: function() {
            return this[Sz] && this[Sz]._f7()
        },
        getLayoutResult: function() {
            this[Cz](),
            this[jz]();
            for (var t = this[Pz](this[Az].nodeCount || 0, this[Az].edgeCount || 0), i = 0; t > i && this[sA](!1) !== !1; i++);
            var n = this[Az].nodes;
            return this[Lz](),
            n
        },
        _mp: function() {
            return ! 1
        },
        step: function(t) {
            if (t === !1) return this._mp(this[zz]); (this[mE] || !this.layoutDatas) && this[jz]();
            var i = this._mp(t),
            n = this[Az].nodes;
            for (var e in n) {
                var s = n[e],
                r = s[pz];
                this.isMovable(r) ? r[YC](s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        },
        onstop: function() {
            delete this.layoutDatas
        },
        start: function(t) {
            if (this[Dz]()) return ! 1;
            this._75 || this._3y(),
            this._k9r || (this._k9r = G(this,
            function(t) {
                return this[sA](t)
            })),
            this[kz](),
            this[Sz] = new yR(this._k9r);
            var i = this;
            return this[Sz]._l4(function() {
                i[Lz](),
                t && t()
            }),
            !0
        },
        stop: function() {
            this[Sz] && (this[Sz]._mj(), this[Lz]())
        },
        getMaxIterations: function(t) {
            return Math[go](1e3, 3 * t + 10)
        },
        minEnergyFunction: function(t, i) {
            return 10 + Math[xo](t + i, 1.4)
        },
        resetGraph: function() {
            this._75 || this._3y(),
            this.resetLayoutDatas()
        },
        destroy: function() {
            this[Cz](),
            this._1y()
        }
    },
    D(zr, aF);
    var xF = function(t, i, n, e) {
        this[Xc] = t,
        M(i) && (this[_l] = i),
        M(n) && (this[Nz] = n),
        M(e) && (this[Rz] = e)
    };
    xR[Bz] = xF;
    var mF = $z,
    EF = Fz,
    wF = Gz,
    TF = Yz;
    mR.ANGLE_SPACING_PROPORTIONAL = mF,
    mR[Uz] = EF,
    mR.RADIUS_MODE_UNIFORM = wF,
    mR[Hz] = TF,
    xF.prototype = {
        angleSpacing: mF,
        radiusMode: TF,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9q: null,
        _nzo: null,
        _l5: function() {
            this._9q = null,
            this._nzo = null
        },
        getLayoutResult: function(t) {
            var i, n = 0,
            e = 0,
            s = this[Xc];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[bz] || this[Xc], i = t.bounds),
            this._9q = {},
            this._nzo = new IF(this);
            var r = {},
            h = RF(s, this._o1t, this);
            return h && (this._nzo._fo && 1 == this._nzo._fo.length && (this._nzo = this._nzo._fo[0]), this._nzo._es(!0), this._nzo._69(n, e, this.startAngle, r, i)),
            this._l5(),
            r
        },
        _o1t: function(t, i) {
            if (this[cz](t)) {
                var n = i ? this._9q[i.id] : this._nzo;
                this._9q[t.id] = new IF(this, t, n)
            }
        },
        defaultSize: 40,
        getRadius: function() {
            return this[_l]
        },
        getNodeSize: function(t) {
            if (this[Xc]._8l._nz1) {
                var i = this[Xc].getUI(t);
                if (i) return (i._fv[io] + i._fv.height) / 2
            }
            return this.defaultSize
        },
        getGap: function() {
            return this.gap
        },
        _3g: function(t, i, n) {
            return this[qz](t, i, n) + this.getGap(t, i, n)
        }
    };
    var OF = function(t) {
        var i, n = this._fo.length,
        e = 0,
        s = 0;
        if (l(this._fo,
        function(t) {
            var n = t._es();
            1 > n && (n = 1),
            s += n,
            n > e && (e = n, i = t)
        },
        this), n > 1) {
            var r = 0,
            h = {},
            a = s / n / 3;
            s = 0,
            l(this._fo,
            function(t) {
                var i = t._my;
                a > i && (i = a),
                h[t.id] = i,
                s += i
            },
            this);
            var o = kF / s;
            l(this._fo,
            function(i, n) {
                var e = h[i.id],
                s = e * o;
                0 === n && (r = t ? -s / 2 : -s),
                i._ly = r + s / 2,
                i._m0 = s,
                r += s
            },
            this)
        }
        return [e, i._m0]
    },
    MF = function(t) {
        var i = this._91,
        n = 2 * Math.PI / i,
        e = 0,
        s = t ? 0 : i > 1 ? -n / 2 : 0;
        return l(this._fo,
        function(t) {
            t._ly = s % kF,
            s += n,
            t._m0 = n;
            var i = t._es();
            i > e && (e = i)
        },
        this),
        [e, n]
    },
    IF = function(t, i, n) {
        this[Wz] = t,
        i && (this._n0 = i, this.id = i.id),
        n && (n._h1(this), n._mx = !1, this._lw = n._lw + 1)
    },
    kF = 2 * Math.PI;
    IF[bh] = {
        _m0: 0,
        _ly: 0,
        _ke: 0,
        _du: 0,
        _d5: 0,
        _lw: 0,
        _mx: !0,
        _my: 0,
        _h0: 0,
        _fo: null,
        _n0: null,
        _h1: function(t) {
            this._fo || (this._fo = []),
            this._fo[Kr](t),
            t[g_] = this
        },
        _he: function(t) {
            if (this._ly = (this._ly + t) % kF, this._fo) {
                var i = this._fo[Fr];
                if (1 == i) return void this._fo[0]._he(this._ly);
                t = this._ly + Math.PI,
                l(this._fo,
                function(i) {
                    i._he(t)
                },
                this)
            }
        },
        _91: 0,
        _6u: function(t) {
            return this._n0 && (this._h0 = this[Wz]._3g(this._n0, this._lw, this._mx) / 2),
            this._fo ? (this._h0, this._91 = this._fo[Fr], this._91 <= 2 || this[Wz][Vz] == EF ? MF[Yr](this, t) : OF[Yr](this, t)) : null
        },
        _es: function(t) {
            var i = this._6u(t);
            if (!i) return this._my = this._h0;
            var n = i[0],
            e = i[1],
            s = this[Wz][Xz](this._n0, this._lw);
            if (s < this._h0 && (s = this._h0), this._du = s, this._h0 + n > s && (s = this._h0 + n), n && this._91 > 1 && e < Math.PI) {
                var r = n / Math[to](e / 2);
                r > s && (s = r)
            }
            return this._ke = s,
            this._my = s + n,
            this._n0 && this._fo && this[Wz][Kz] == TF && l(this._fo,
            function(t) {
                var i = t._my;
                1 == t._91 && (i /= 2);
                var n = this._h0 + i,
                e = t._m0;
                if (e && e < Math.PI) {
                    var s = Math[to](e / 2),
                    r = i / s;
                    r > i && (i = r)
                }
                n > i && (i = n),
                t._d5 = i
            },
            this),
            (!this._n0 || t) && this._he(0),
            this._my
        },
        _69: function(t, i, n, e, s) {
            if (this._n0 && (e[this._n0.id] = {
                x: t,
                y: i,
                node: this._n0
            },
            s && s[qd](t - this._h0 / 2, i - this._h0 / 2, this._h0, this._h0)), this._fo) {
                if (!this._n0 && 1 == this._fo.length) return void this._fo[0]._69(t, i, n, e, s);
                n = n || 0;
                var r = this._ke,
                h = this._du;
                l(this._fo,
                function(a) {
                    var o = r;
                    a._d5 && (o = Math[sf](h, a._d5));
                    var f = a._ly + n,
                    _ = t + o * Math[Hh](f),
                    c = i + o * Math[to](f);
                    a._69(_, c, n, e, s)
                },
                this)
            }
        }
    },
    D(xF, aF);
    var SF = function() {
        N(this, SF, arguments)
    };
    D(SF, Dr);
    var CF = function(t, i) {
        this.node1 = t,
        this[Zz] = i,
        t == i ? (this[S_] = !0, this._m6 = t._l6) : this._m6 = new gN,
        this._8g = [],
        this._hz = bN.EDGE_BUNDLE_EXPANDED
    };
    bN[Jz] = !0,
    CF.prototype = {
        node1: null,
        node2: null,
        _m6: null,
        _hz: bN.EDGE_BUNDLE_EXPANDED,
        _8g: null,
        _g1: null,
        agentEdge: null,
        _nzy: function(t, i, n) {
            this._m6.forEach(function(e) {
                return n && e.$from != n && e.fromAgent != n ? void 0 : t[Yr](i, e)
            })
        },
        _5z: 0,
        _6c: 0,
        _ja: function(t, i) {
            return this._m6[nh](t) === !1 ? !1 : (i == this[Qz] ? this._5z++:this._6c++, this._nz1 ? void this._1b(t) : void(this._nz1 = !0))
        },
        _o1e: function(t, i) {
            return this._m6[Vr](t) === !1 ? !1 : (i == this.node1 ? this._5z--:this._6c--, this._1b(t), void this._m6.forEach(function(t) {
                t._edgeBundleInvalidateFlag = !0,
                t.__51 = !0
            },
            this))
        },
        _1b: function(t) {
            this._o1gBindableFlag = !0,
            this._74 = !0,
            t._edgeBundleInvalidateFlag = !0,
            t.__51 = !0
        },
        _o1g: function() {
            this._74 || (this._74 = !0, this._m6[Kf](function(t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },
        isEmpty: function() {
            return this._m6[Af]()
        },
        isPositiveOrder: function(t) {
            return this[Qz] == t.$from || this[Qz] == t[x_]
        },
        canBind: function(t) {
            return t && this._74 && this._fu(t),
            this._m6[Fr] > 1 && this._8g[Fr] > 1
        },
        _ir: function(t) {
            return this._8g[Zr](t)
        },
        getYOffset: function(t) {
            return this._g1[t.id]
        },
        _54: function(t) {
            if (!this[tD]()) return void(this._g1 = {});
            var i = {},
            n = this._8g[Fr];
            if (! (2 > n)) {
                var e = 0,
                s = this._8g[0];
                i[s.id] = 0;
                for (var r = 1; n > r; r++) {
                    s = this._8g[r];
                    var h = t[Ec](s, v$.EDGE_BUNDLE_GAP) || D$[v$.EDGE_BUNDLE_GAP];
                    e += h,
                    i[s.id] = e
                }
                if (!this.isLooped) for (var a = e / 2,
                r = 0; n > r; r++) s = this._8g[r],
                i[s.id] -= a;
                this._g1 = i
            }
        },
        _nzv: function(t) {
            return this._hz == t ? !1 : (this._hz = t, this._o1g(), !0)
        },
        reverseExpanded: function() {
            return this._nzv(!this._hz)
        },
        _1s: function() {
            this._o1gBindableFlag = !1,
            this._8g.length = 0;
            var t;
            this._m6.forEach(function(i) {
                if (i[sC]()) {
                    if (!this[iD](i)) return t || (t = []),
                    void t[Kr](i);
                    this._8g.push(i)
                }
            },
            this),
            t && (this._8g = t[Hr](this._8g))
        },
        _f9: function(t) {
            return t == this[uj] || !this[tD]() || this._hz
        },
        _fu: function(t) {
            this._74 = !1,
            this._m6.forEach(function(t) {
                t._edgeBundleInvalidateFlag = !1
            }),
            this._o1gBindableFlag && this._1s();
            var i = this._hz,
            n = this[tD](),
            e = !n || i;
            l(this._8g,
            function(t) {
                t._13 = !0,
                t._i8InBundle = e,
                e && (t.__51 = !0)
            },
            this),
            e ? this._nya(null, t) : (this._nya(this._8g[0], t), this[uj]._i8InBundle = !0, this[uj].__51 = !0),
            e && this._54(t)
        },
        _nya: function(t, i) {
            if (t != this[uj]) {
                var n = this[uj];
                return this[uj] = t,
                i && i._4s(new NN(this, uj, t, n)),
                !0
            }
        }
    },
    Z(CF.prototype, {
        bindableEdges: {
            get: function() {
                return this._8g
            }
        },
        edges: {
            get: function() {
                return this._m6._k2
            }
        },
        length: {
            get: function() {
                return this._m6 ? this._m6[Fr] : 1
            }
        },
        expanded: {
            get: function() {
                return this._hz
            },
            set: function(t) {
                return this._hz == t ? !1 : (this._hz = t, void this._o1g())
            }
        }
    });
    var jF = function() {
        function t(t, i) {
            this[pz] = t,
            this[pk] = i
        }
        function i() {
            this[nD] = [],
            this[eD] = 0
        }
        var n = -1e6,
        e = .8;
        i[bh] = {
            isEmpty: function() {
                return 0 === this.popIdx
            },
            push: function(i, n) {
                var e = this.stack[this[eD]];
                e ? (e.node = i, e.body = n) : this.stack[this[eD]] = new t(i, n),
                ++this[eD]
            },
            pop: function() {
                return this.popIdx > 0 ? this[nD][--this.popIdx] : void 0
            },
            reset: function() {
                this[eD] = 0
            }
        };
        var s = [],
        r = new i,
        h = function() {
            this[pk] = null,
            this.quads = [],
            this[sD] = 0,
            this[rD] = 0,
            this.massY = 0,
            this[Uo] = 0,
            this[Yo] = 0,
            this[qh] = 0,
            this.right = 0,
            this[hD] = !1
        },
        a = [],
        o = 0,
        f = function() {
            var t;
            return a[o] ? (t = a[o], t[aD][0] = null, t[aD][1] = null, t[aD][2] = null, t[aD][3] = null, t.body = null, t[sD] = t.massX = t[oD] = 0, t[Uo] = t[Wh] = t[Yo] = t[qh] = 0, t[hD] = !1) : (t = new h, a[o] = t),
            ++o,
            t
        },
        _ = f(),
        c = function(t, i) {
            var n = Math[Vh](t.x - i.x),
            e = Math.abs(t.y - i.y);
            return 1e-8 > n && 1e-8 > e
        },
        u = function(t) {
            for (r[fD](), r[Kr](_, t); ! r[Af]();) {
                var i = r[Lv](),
                n = i.node,
                e = i.body;
                if (n[hD]) {
                    var s = e.x,
                    h = e.y;
                    n.mass = n[sD] + e[sD],
                    n[rD] = n[rD] + e[sD] * s,
                    n[oD] = n[oD] + e.mass * h;
                    var a = 0,
                    o = n.left,
                    u = (n.right + o) / 2,
                    d = n[Yo],
                    l = (n[qh] + d) / 2;
                    if (s > u) {
                        a += 1;
                        var v = o;
                        o = u,
                        u += u - v
                    }
                    if (h > l) {
                        a += 2;
                        var b = d;
                        d = l,
                        l += l - b
                    }
                    var y = n[aD][a];
                    y || (y = f(), y[Uo] = o, y[Yo] = d, y.right = u, y[qh] = l, n[aD][a] = y),
                    r[Kr](y, e)
                } else if (n[pk]) {
                    var g = n[pk];
                    if (n.body = null, n[hD] = !0, c(g, e)) {
                        if (n.right - n.left < 1e-8) return;
                        do {
                            var p = Math.random(), x = (n.right - n[Uo]) * p, m = (n[qh] - n.top) * p;
                            g.x = n[Uo] + x, g.y = n[Yo] + m
                        } while ( c ( g , e ))
                    }
                    r[Kr](n, g),
                    r[Kr](n, e)
                } else n[pk] = e
            }
        },
        d = function(t) {
            var i, r, h, a, o = s,
            f = 1,
            c = 0,
            u = 1;
            for (o[0] = _; f;) {
                var d = o[c],
                l = d[pk];
                f -= 1,
                c += 1,
                l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math.sqrt(r * r + h * h), 0 === a && (r = (Math.random() - .5) / 50, h = (Math[lh]() - .5) / 50, a = Math[po](r * r + h * h)), i = n * l[sD] * t[sD] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = d.massX / d.mass - t.x, h = d.massY / d[sD] - t.y, a = Math[po](r * r + h * h), 0 === a && (r = (Math.random() - .5) / 50, h = (Math.random() - .5) / 50, a = Math[po](r * r + h * h)), (d[Wh] - d[Uo]) / a < e ? (i = n * d[sD] * t.mass / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (d[aD][0] && (o[u] = d[aD][0], f += 1, u += 1), d.quads[1] && (o[u] = d[aD][1], f += 1, u += 1), d[aD][2] && (o[u] = d[aD][2], f += 1, u += 1), d.quads[3] && (o[u] = d[aD][3], f += 1, u += 1)))
            }
        },
        l = function(t, i) {
            n = i;
            var e, s = Number.MAX_VALUE,
            r = Number.MAX_VALUE,
            h = Number[_D],
            a = Number[_D],
            c = t,
            d = c.length;
            for (e = d; e--;) {
                var l = c[e].x,
                v = c[e].y;
                s > l && (s = l),
                l > h && (h = l),
                r > v && (r = v),
                v > a && (a = v)
            }
            var b = h - s,
            y = a - r;
            for (b > y ? a = r + b: h = s + y, o = 0, _ = f(), _.left = s, _[Wh] = h, _.top = r, _[qh] = a, e = d; e--;) u(c[e], _)
        };
        return {
            init: l,
            update: d
        }
    },
    PF = function(t) {
        t.fx -= t.x * this.attractive,
        t.fy -= t.y * this[cD]
    },
    AF = function(t) {
        if (0 != t.k) {
            var i = this._o1p,
            n = t[E_],
            e = t.to,
            s = e.x - n.x,
            r = e.y - n.y,
            h = s * s + r * r,
            a = Math.sqrt(h) || .1,
            o = (a - i) * t.k * this.elastic;
            o /= a;
            var f = o * s,
            _ = o * r;
            e.fx -= f,
            e.fy -= _,
            n.fx += f,
            n.fy += _
        }
    };
    Dr[bh] = {
        appendNodeInfo: function(t, i) {
            i[sD] = t[uD] || 1,
            i.fx = 0,
            i.fy = 0,
            i.vx = 0,
            i.vy = 0
        },
        appendEdgeInfo: function(t, i) {
            i.k = t[dD] || 1
        },
        setMass: function(t, i) {
            t[uD] = i,
            this.layoutDatas && this[Az][lD] && (t = this[Az][lD][t.id], t && (t[sD] = i))
        },
        setElasticity: function(t, i) {
            t.layoutElasticity = i,
            this[Az] && this[Az][vD] && (t = this[Az][vD][t.id], t && (t.k = i))
        },
        _o1p: 50,
        _j5: .5,
        timeStep: .15,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _mq: 1e3,
        _kg: function(t) {
            return this._mq + .3 * (t - this._mq)
        },
        _mp: function(t, i) {
            var n = (Date.now(), this[Az].nodes);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[lh]() - .5, s.y += Math[lh]() - .5),
                PF.call(this, s)
            }
            var r = this[Az][bD];
            if (r) for (var e in r) {
                var h = r[e],
                a = h[Gr],
                o = 0,
                f = 0;
                a.forEach(function(t) {
                    o += t.x,
                    f += t.y
                }),
                o /= a.length,
                f /= a[Fr];
                var _ = 10 * this[cD];
                a[Kf](function(t) {
                    t.fx -= (t.x - o) * _,
                    t.fy -= (t.y - f) * _
                })
            }
            var c = this._nbodyForce;
            c || (c = this._nbodyForce = jF()),
            c[yD](this[Az][gD], -this[pD] * this.repulsion * this[pD]);
            for (var e in n) c[xD](n[e]);
            if (this[mD]) {
                var u = this[Az][vD];
                for (var e in u) AF[Yr](this, u[e])
            }
            return this._mn(t)
        },
        _mn: function(t) {
            var i = this[Az][ED],
            n = (this.layoutDatas[wD], this[Az].nodes),
            t = this[zz],
            e = 0,
            s = this._j5;
            for (var r in n) {
                var h = n[r],
                a = h.fx / h[sD],
                o = h.fy / h[sD],
                f = h.vx += a * t,
                _ = h.vy += o * t;
                h.x += f * t,
                h.y += _ * t,
                i > e && (e += 2 * (f * f + _ * _)),
                h.fx = 0,
                h.fy = 0,
                h.vx *= s,
                h.vy *= s
            }
            return this.layoutDatas[wD] = e,
            e >= i
        }
    },
    D(Dr, zr),
    xR[TD] = Dr;
    var LF = function(t) {
        this[XL] = t
    };
    LF[bh] = {
        oldLocations: null,
        _el: null,
        duration: 700,
        animationType: bR.easeOutStrong,
        _7o: function(t) {
            if (this._el = t, this.oldLocations = {},
            t) for (var i in t) {
                var n = t[i],
                e = n[pz];
                this[OD][i] = {
                    x: e.x,
                    y: e.y
                }
            }
        },
        setLocation: function(t, i, n) {
            t.setLocation(i, n)
        },
        forEach: function(t, i) {
            for (var n in this[XL]) {
                var e = this.oldLocations[n],
                s = this.locations[n];
                t[Yr](i, e, s)
            }
        },
        _ky: function(t) {
            this[Kf](function(i, n) {
                var e = n.node,
                s = i.x + (n.x - i.x) * t,
                r = i.y + (n.y - i.y) * t;
                this[YC](e, s, r)
            },
            this)
        },
        stop: function() {
            this._nynimate && this._nynimate._mj()
        },
        start: function(t) {
            this._nynimate ? (this._nynimate._mj(), this._nynimate._j3 = this[Kj], this._nynimate._eoType = this[Jj], this._nynimate._onfinish = this._onfinish) : this._nynimate = new gR(this._ky, this, this[Kj], this.animationType),
            this._nynimate._l4(t)
        }
    },
    Z(LF[bh], {
        locations: {
            get: function() {
                return this._el
            },
            set: function(t) {
                this._el != t && this._7o(t)
            }
        }
    });
    var zF = function(t) {
        var i = new gN;
        return t[Kf](function(t) {
            t instanceof f$ && (t.hasInEdge() || i[nh](t._dy || t))
        }),
        i
    },
    DF = function(t, i, n, e, s, r) {
        if (i instanceof WN) return t(i, n, e, s, r),
        i;
        if (i instanceof R$) {
            var h = new gN;
            i._l1Model[Kf](function(t) {
                return i[Cu](t) ? t._i0() && t._hz && t[$r]() ? void(t.$location && (t.$location[mE] = !1)) : void h[nh](t) : void 0
            }),
            i = h
        }
        var i = zF(i);
        return l(i,
        function(i) {
            t(i, n, e, s, r)
        }),
        i
    },
    NF = function(t, i, n, e, s) {
        return DF(BF, t, i, n, e, s)
    },
    RF = function(t, i, n, e, s) {
        return DF($F, t, i, n, e, s)
    };
    is[bh].forEachByTopoDepthFirstSearch = function(t, i, n, e) {
        NF(this, t, i, n, e)
    },
    is[bh][MD] = function(t, i, n, e) {
        RF(this, t, i, n, e)
    };
    var BF = function(t, i, n, e, s) {
        function r(t, i, n, e, s, h, a, o) {
            t._marker = h,
            e || i[Yr](n, t, o, a),
            Nr(t,
            function(o) {
                r(o, i, n, e, s, h, a + 1, t)
            },
            o, s, h),
            e && i.call(n, t, o, a)
        }
        r(t, i, n, e, s, {},
        0)
    },
    $F = function(t, i, n, e, s) {
        function r(t, i, n, e, s, h, a) {
            var o, f = t[Fr];
            t[Kf](function(t, r) {
                var _ = t.v;
                _._marker = h,
                e || i[Yr](n, _, t._from, a, r, f),
                Nr(_,
                function(t) {
                    o || (o = []),
                    t._marker = h,
                    o[Kr]({
                        v: t,
                        _from: _
                    })
                },
                _, s, h)
            }),
            o && r(o, i, n, e, s, h, a + 1),
            e && t[Kf](function(t, e) {
                i[Yr](n, t.v, t._from, a, e, f)
            })
        }
        r([{
            v: t
        }], i, n, e, s, {},
        0)
    };
    xR.toColor = X,
    xR[$h] = ti,
    xR[Yh] = ni,
    xR.trace = ii,
    xR[ID] = QD,
    xR[kD] = JD,
    xR[SD] = nN,
    xR.isGecko = eN,
    xR.isFirefox = sN,
    xR.isSafari = hN,
    xR[CD] = rN,
    xR[jD] = aN,
    xR.DefaultStyles = D$,
    xR[PD] = bN,
    xR[ej] = v$,
    xR[AD] = mR,
    xR[LD] = rB,
    xR[zD] = R$,
    xR[DD] = d$,
    xR[ND] = M$,
    xR.NodeUI = _s,
    xR.EdgeUI = fs,
    xR[RD] = k$,
    xR[BD] = I$,
    xR[$D] = c$,
    xR[FD] = nB,
    xR.Gradient = BR,
    xR.InteractionEvent = Cr,
    xR[Om] = a$,
    xR[yC] = f$,
    xR[sj] = o$,
    xR[GD] = is,
    xR.EdgeBundle = CF,
    xR.TreeLayouter = gF,
    xR.name = YD;
    var FF = UD;
    return xR[Bx] = HD,
    xR.about = qD,
    xR[Yx] = "Copyright © 2015 moniware.com",
    xR[WD] = di,
    xR[VD] = B$,
    ti = function() {},
    xR[Fx] = XD,
    xR
} (window, document);