(function(e) {
    function t(t) { for (var a, r, c = t[0], s = t[1], u = t[2], l = 0, d = []; l < c.length; l++) r = c[l], Object.prototype.hasOwnProperty.call(i, r) && i[r] && d.push(i[r][0]), i[r] = 0; for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        p && p(t); while (d.length) d.shift()(); return o.push.apply(o, u || []), n() }

    function n() { for (var e, t = 0; t < o.length; t++) { for (var n = o[t], a = !0, r = 1; r < n.length; r++) { var c = n[r];
                0 !== i[c] && (a = !1) }
            a && (o.splice(t--, 1), e = s(s.s = n[0])) } return e } var a = {},
        r = { app: 0 },
        i = { app: 0 },
        o = [];

    function c(e) { return s.p + "static/js/" + ({ AddressDetail: "AddressDetail" }[e] || e) + "." + { AddressDetail: "ec67413e", "chunk-247b8b24": "0ba482cc", "chunk-2a529452": "9e3fac5a", "chunk-30b9e6ac": "a738a22c", "chunk-37728e4e": "ea1c4198", "chunk-4d4969f4": "df696781", "chunk-5308e757": "b2085853", "chunk-6e25b410": "a5b60277", "chunk-83f91b46": "9db5378f" }[e] + ".js" }

    function s(t) { if (a[t]) return a[t].exports; var n = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports }
    s.e = function(e) { var t = [],
            n = { AddressDetail: 1, "chunk-247b8b24": 1, "chunk-2a529452": 1, "chunk-30b9e6ac": 1, "chunk-37728e4e": 1, "chunk-4d4969f4": 1, "chunk-5308e757": 1, "chunk-6e25b410": 1, "chunk-83f91b46": 1 };
        r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise((function(t, n) { for (var a = "static/css/" + ({ AddressDetail: "AddressDetail" }[e] || e) + "." + { AddressDetail: "920ef19e", "chunk-247b8b24": "c78551d8", "chunk-2a529452": "b45cf2bf", "chunk-30b9e6ac": "63ae480e", "chunk-37728e4e": "fdcb91b5", "chunk-4d4969f4": "7179f3cb", "chunk-5308e757": "764d7f16", "chunk-6e25b410": "f68ef949", "chunk-83f91b46": "4948b7bd" }[e] + ".css", i = s.p + a, o = document.getElementsByTagName("link"), c = 0; c < o.length; c++) { var u = o[c],
                    l = u.getAttribute("data-href") || u.getAttribute("href"); if ("stylesheet" === u.rel && (l === a || l === i)) return t() } var d = document.getElementsByTagName("style"); for (c = 0; c < d.length; c++) { u = d[c], l = u.getAttribute("data-href"); if (l === a || l === i) return t() } var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function(t) { var a = t && t.target && t.target.src || i,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = a, delete r[e], p.parentNode.removeChild(p), n(o) }, p.href = i; var A = document.getElementsByTagName("head")[0];
            A.appendChild(p) })).then((function() { r[e] = 0 }))); var a = i[e]; if (0 !== a)
            if (a) t.push(a[2]);
            else { var o = new Promise((function(t, n) { a = i[e] = [t, n] }));
                t.push(a[2] = o); var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = c(e); var d = new Error;
                u = function(t) { l.onerror = l.onload = null, clearTimeout(p); var n = i[e]; if (0 !== n) { if (n) { var a = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", d.name = "ChunkLoadError", d.type = a, d.request = r, n[1](d) }
                        i[e] = void 0 } }; var p = setTimeout((function() { u({ type: "timeout", target: l }) }), 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l) }
        return Promise.all(t) }, s.m = e, s.c = a, s.d = function(e, t, n) { s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, s.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, s.t = function(e, t) { if (1 & t && (e = s(e)), 8 & t) return e; if (4 & t && "object" === typeof e && e && e.__esModule) return e; var n = Object.create(null); if (s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var a in e) s.d(n, a, function(t) { return e[t] }.bind(null, a)); return n }, s.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return s.d(t, "a", t), t }, s.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, s.p = "", s.oe = function(e) { throw console.error(e), e }; var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = t, u = u.slice(); for (var d = 0; d < u.length; d++) t(u[d]); var p = l;
    o.push([0, "chunk-vendors"]), n() })({ 0: function(e, t, n) { e.exports = n("56d7") }, "01df": function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAYAAADtj3ZXAAAAAXNSR0IArs4c6QAAANpJREFUKFONkT9rAkEUxGfUtH44wSIgFqaQFMFTiKebUvAuK+LdNWKKQEhj6TcTa3FHVjn/nEHzYIs3+5t5j112jJ1TqIl4wkURqOB4LsszubZiYOwGQLUAPWwlrBkM7LOIXxLlh44zsCVZp+87xjYJfAP/CBB2jq6RjQfLg/kQMPx8IfkFoHRnA0epNYvCH8+czMeASRvQnLzW/Z0EAXxNo/dFHn5l9mJg4jeplBYCBKmXRGFS+JHbJbvGdgVM882cMMyiflwkbybnQPAx6UluRIc4icPRX++wB6hORFN8/0mAAAAAAElFTkSuQmCC" }, "01ea": function(e, t, n) { "use strict";
        n.d(t, "a", (function() { return a })); var a = { MAFAAddress: "0x774c68722a4546248Bfc4D53A78E876a154d2EdA", USDTAddress: "0x12cf459B5d90fA6D697e245e1d0CFAe2068fb766", IDOAddress: "0xcAB53A5fBD94894Ce57121d0320CeEC5bd1186fb", ZeroAddress: "0x0000000000000000000000000000000000000000", chainId: 97 } }, "089e": function(e, t, n) { e.exports = n.p + "static/img/about_img01.6f649f56.png" }, "0f2f": function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAAXNSR0IArs4c6QAAAdRQTFRFAAAAAAAAAP//gICAVaqqgICAgIC/gL+/ZpmZmZmZgKqqkpKSgJ+fn5+/jqqqmZmzi6KikpKkiJmqj5+vjpyqlKGujJmmkp6qi6KukJumkKaxiZ2nj56tkZ+skaKujZ2ukqGsjqGvj52qj6GukKCpj56uj6KukaCrkJ6sjZ+sj6CtjqGuj5+sjZ+rjqCskaCvkJ6tkKGtjp+rkZ+uj6CukKGskKCrkJ+sj6Ctj6CskJ+tkKGtkKCsjp+skaGsj5+tkKCskKCuj6GskJ+sj6CtkKCuj5+tkJ+tkaCtkJ+tkKGukKCtj6CtkJ+tj6CskaCtkJ+skJ+tj6Ctj5+skKCtkaCtkKCukJ+tkKCtkJ+tj6CskaCtkKCskKCtj5+tkKCskKCukKCtkKCsj5+tkKCtj6Csj5+tkKCtkJ+skJ+tkKGtkJ+tkKCtj6Csj6CtkKCukKCtkKCskKCtkaCukKCtkKCtkJ+skKCukKCtkKCtkJ+sj6CtkKCtkKCtkKCtkaGtj6CtkKCtkKCtkKCskKCtkJ+tkKCtkKCtkKCtkKCukKGukKCtj5+tkKCskKCsj6CskKCtkKCtkJ+tj6CtkKCtkKCtkKCtkKGtkKCtkKCskKCtkKCtLrQWswAAAJt0Uk5TAAEBAgMEBAQFBQYHCAgJCgsODxASExQVFhcXGiIlLC8xNjk5PkJCQ0dKS09QVVZWV1dYWFtcXmVmaWpqbm9vcHFxcnV5gYKFhoiKjI+PlJaXmJudnqSmp6eoqausrLKztrq8vb6/wMTFyMjKysvLzM7P0dLT1NXV1tfY2dvc3uDi5Obn5+jo7O7u7u/w8fP09ff4+fn6+/v8/f79UvODAAAB7klEQVQYGZ3B+UOLcQAH4E+9bjNHjo3NldcRmnJWKlLINYZk5KaWmTZbmpwJLVdEm+/nn/V9371365eeB/MRau4ZKhSLhaEbzSHMQYn0C1pEf0RBBWqOHjkVXr6o4Cwi6oNLMMWKngXhEMjTbeTQ9s6vlPIBWPxJut1dBWBjD6WkH6YY3fqWQXdgimQMBlXQ6VtHNQx1M6RQoVOGaXuyZ101bKdJDivQNNL2cAFcFmdINkCToK0dHrtIJiCFBW3d8BokRRhAGx2+n++oWwinTpJtAOL0GLt+pAaWwyTjALKc7XdsNQxNJLMAJllJPcq2vSE5CaDECn6uhbTp4gg1JQBFGt6dOXvrwSh1VyDt+MSyEoAJ6saPLoWm9mpf9Fz3yRVYuX+ahgkAL6h5uh5OB8ff05YFcJOaLrjU/qFDHEArNbfhVk+HVgBhQelfkwKnLtpEGNIgdb8ye49tgek1bQloGmm5UAVDhrYGaJSXtDxaAt3Wv7QMK9DtFDQ9V6C7xhl1w74xSkKFIUbTCeiq3vIxUPOZUgwmf5KGH8cXQdpNjsJ/n1LSD0sgT9MpAMvTJO99oJQPwCGYomFqM9bcoSkVhIvvsmDZq0sfaRBRH7zUHD1yKipQIgOCFjEQUTCHUEtvulCa/pLubQlhHv4DBiavo0q1kvAAAAAASUVORK5CYII=" }, 1: function(e, t) {}, 10: function(e, t) {}, 11: function(e, t) {}, 12: function(e, t) {}, 13: function(e, t) {}, 1346: function(e, t, n) { e.exports = n.p + "static/img/p2.894f90fe.png" }, 1367: function(e, t, n) {}, "139d": function(e, t, n) { "use strict";
        n("c969") }, 14: function(e, t) {}, 15: function(e, t) {}, "159f": function(e, t, n) { e.exports = n.p + "static/img/p1.906091d2.png" }, "1ca4": function(e, t, n) { e.exports = n.p + "static/img/mack.65fdab22.png" }, 2: function(e, t) {}, "23cd": function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAAXNSR0IArs4c6QAAAMNQTFRFAAAAAAAAgICAVVVVVVWqZmZmZmaZVYCAZneIcHCAaXiHY3GAa3mGaHGEcXuEbXaJcnuNbneIb3qLbXeIcHqKb3qJcXqIb3iKb3uKbnqIb3qIb3qLcHmMb3qKcXmJcHqKcXmLcHqKb3mKb3uKcXuKcHqJb3mKcXuKcHqJcHqJb3mKb3uKcHqKcHqKcXuJcXuLcHqKcHqKcHqKcHmLcHuLcXqKcHmJcHmKcHuKcHqJcXqKb3qKcXqKcHqJcHqLcHqKcXuKHJJhlgAAAEF0Uk5TAAECAwMFBQYPEBESExsbHB0eLi8wRVZXV1haWl1eX2BjZH5+gYKDg4SGh4eSlJycnZ+hoqKjpKSoqaqsrK2tsrPOMWXIAAABVUlEQVQ4y62UWVuCQBSGPzALDDcQoXJfshJJU1NrtPP/f1UXyCxsWU/f3RxeZs4O/F4lpzMJGbFw0nFKeVClvyOhXb+SBZU9RqqYX05R1YDSCqoJyt5Tlva2QjlHytbRkajagfJ0qAnvA8pXwOPwqEj3Z8pghRgzI6yb/vQ2Gnqb+NAFAOjrBLPyGgDQjs9rHQBaKrR1z9UccFMLAHoKNTfiwMbc1gOAJ5l6vuZp4r7RDACW8osmoFkaADSFdQkAcjpcQHukmQbAF9ZPAJCoVx2wiMgCdPmRxG0++G0uJW6TfmsCZ9/Md0r4JiLd8ChvXuTwZ2rexjFlzJVc9tQqDCLoyt2qhWmpNW0DQONulahxVFPRIRt/OFqn2yXqEJiX9dsP3fvAZ2FRQC3ETNcLJqsuz+kphzo56tRn33ew/7RDLt1IGfvttmBbTkP29RFOC7blP+gba0/RBr77E1cAAAAASUVORK5CYII=" }, "26e3": function(e, t, n) {}, 2802: function(e, t, n) {}, 3: function(e, t) {}, 33371: function(e, t, n) {}, 3924: function(e, t, n) { "use strict";
        n("421b") }, 4: function(e, t) {}, "421b": function(e, t, n) {}, 4360: function(e, t, n) { "use strict"; var a, r = n("5502");

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var o = function(e, t) { sessionStorage.setItem(e, t) };
        t["a"] = Object(r["a"])({ state: (a = { accounts: [], provider: null, TronAccounts: "", TronProvider: null, netId: "", locale: "", themeMode: "", menuRouter: "" }, i(a, "provider", null), i(a, "promotionUrl", ""), i(a, "activeMenu", "Index"), a), mutations: { updateAccount: function(e, t) { e.accounts = t }, updateProvider: function(e, t) { e.provider = t }, updateTronAccount: function(e, t) { e.TronAccounts = t }, updateTronProvider: function(e, t) { e.TronProvider = t }, updateNetId: function(e, t) { e.netId = t }, updateLocale: function(e, t) { e.locale = t }, updateThemeMode: function(e, t) { e.themeMode = t }, updatePromotionUrl: function(e, t) { e.promotionUrl = t }, updateactiveMenu: function(e, t) { e.activeMenu = t }, statechange: function(e, t) { e.hasOwnProperty(t.ways) && (e[t.ways] = t.data, o(t.ways, t.data)) } }, actions: {}, modules: {} }) }, 5: function(e, t) {}, 5025: function(e, t, n) { e.exports = n.p + "static/img/1.70bd913e.png" }, "55e5": function(e, t, n) { e.exports = n.p + "static/img/p8.223e190f.png" }, "56d7": function(e, t, n) { "use strict";
        n.r(t); var a = n("7a23");

        function r(e, t, n, r, i, o) { var c = Object(a["S"])("Header"),
                s = Object(a["S"])("Headers"),
                u = Object(a["S"])("el-header"),
                l = Object(a["S"])("router-view"),
                d = Object(a["S"])("el-main"),
                p = Object(a["S"])("Footer"),
                A = Object(a["S"])("mobile-footer"),
                m = Object(a["S"])("el-container"); return Object(a["J"])(), Object(a["j"])(m, null, { default: Object(a["gb"])((function() { return [Object(a["q"])(u, null, { default: Object(a["gb"])((function() { return [e.$isInMobile ? (Object(a["J"])(), Object(a["j"])(s, { key: 1 })) : (Object(a["J"])(), Object(a["j"])(c, { key: 0 }))] })), _: 1 }), Object(a["q"])(d, null, { default: Object(a["gb"])((function() { return [Object(a["q"])(l)] })), _: 1 }), Object(a["q"])(p), Object(a["q"])(A)] })), _: 1 }) } var i = n("5502"),
            o = function(e) { return Object(a["M"])("data-v-18b1b19b"), e = e(), Object(a["K"])(), e },
            c = { class: "page-header" },
            s = { class: "page-header-wrapper" },
            u = { class: "container-wrapper flex-middle flex-between" },
            l = { class: "left flex-middle" },
            d = { class: "site" },
            p = { class: "img-wrap flex-middle" },
            A = ["src"],
            m = { class: "right" },
            b = { class: "menu-wrap flex-middle" },
            f = { class: "sub-menu" },
            y = o((function() { return Object(a["m"])("i", { class: "el-icon-arrow-down el-icon--right" }, null, -1) })),
            g = o((function() { return Object(a["m"])("i", { class: "el-icon-arrow-up el-icon--right" }, null, -1) })),
            h = { class: "sub-menu--box" },
            v = { class: "sub-menu" },
            O = { class: "sub-menu--box" },
            C = { key: 1, class: "menu-item" },
            j = o((function() { return Object(a["m"])("div", { class: "menu-line" }, null, -1) }));

        function w(e, t, r, i, o, w) { return Object(a["J"])(), Object(a["l"])("div", c, [Object(a["m"])("div", s, [Object(a["m"])("div", u, [Object(a["m"])("div", l, [Object(a["m"])("div", d, [Object(a["m"])("div", p, [Object(a["m"])("img", { src: n("cf05"), class: "logo", onError: t[0] || (t[0] = function() { return e.$setErrorImg && e.$setErrorImg.apply(e, arguments) }), alt: "" }, null, 40, A)])])]), Object(a["m"])("div", m, [Object(a["m"])("div", b, [Object(a["m"])("div", { class: "menu-box flex-middle", onMouseleave: t[17] || (t[17] = function() { return e.menuleave && e.menuleave.apply(e, arguments) }) }, [Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "Index" === e.activeMenu }]), onMouseover: t[1] || (t[1] = function() { return e.menuover && e.menuover.apply(e, arguments) }), onClick: t[2] || (t[2] = function(t) { return e.gotoLike("IndexBox", "Index") }) }, Object(a["W"])(e.$t("首頁")), 35), Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "about" === e.activeMenu }]), onMouseover: t[3] || (t[3] = function() { return e.menuover && e.menuover.apply(e, arguments) }), onClick: t[4] || (t[4] = function(t) { return e.gotoLike("AboutBox", "about") }) }, Object(a["W"])(e.$t("關於")), 35), Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "Features" === e.activeMenu }]), onMouseover: t[5] || (t[5] = function() { return e.menuover && e.menuover.apply(e, arguments) }), onClick: t[6] || (t[6] = function(t) { return e.gotoLike("FeaturesBox", "Features") }) }, Object(a["W"])(e.$t("特征")), 35), Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "PlaceMent" === e.activeMenu }]), onMouseover: t[7] || (t[7] = function() { return e.menuover && e.menuover.apply(e, arguments) }), onClick: t[8] || (t[8] = function(t) { return e.gotoLike("idoBox", "PlaceMent") }) }, " IDO ", 34), Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "Tokens" === e.activeMenu }]), onMouseover: t[9] || (t[9] = function() { return e.menuover && e.menuover.apply(e, arguments) }), onClick: t[10] || (t[10] = function(t) { return e.gotoLike("tokenBox", "Tokens") }) }, Object(a["W"])(e.$t("代幣")), 35), Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "Roadmap" === e.activeMenu }]), onMouseover: t[11] || (t[11] = function() { return e.menuover && e.menuover.apply(e, arguments) }), onClick: t[12] || (t[12] = function(t) { return e.gotoLike("RoadmapBox", "Roadmap") }) }, Object(a["W"])(e.$t("路線圖")), 35), Object(a["m"])("div", f, [Object(a["m"])("div", { class: "menu-item", onMouseover: t[13] || (t[13] = function() { return e.menuover && e.menuover.apply(e, arguments) }) }, [Object(a["p"])(Object(a["W"])("en" === e.locale ? "English" : "繁體中文") + " ", 1), y, g], 32), Object(a["m"])("div", h, [Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "en" === e.locale }]), onClick: t[14] || (t[14] = function(t) { return e.changeLanguage("en") }) }, " English ", 2), Object(a["m"])("div", { class: Object(a["z"])(["menu-item", { "menu-item--active": "zh-tw" === e.locale }]), onClick: t[15] || (t[15] = function(t) { return e.changeLanguage("zh-tw") }) }, " 繁體中文 ", 2)])]), Object(a["m"])("div", v, [Object(a["m"])("div", O, ["zh-tw" === e.locale ? (Object(a["J"])(), Object(a["l"])("div", { key: 0, class: "menu-item", onClick: t[16] || (t[16] = function(t) { return e.changeLanguage("en") }) }, " English ")) : Object(a["k"])("", !0), "en" === e.locale ? (Object(a["J"])(), Object(a["l"])("div", C, " 簡體中文 ")) : Object(a["k"])("", !0)])])], 32), j])])])])]) } var k = n("6c02"),
            I = n("79fa"),
            Q = n("98b3"),
            x = n("1344"),
            F = Object(x["a"])(),
            M = F;

        function T(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function E(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? T(Object(n), !0).forEach((function(t) { B(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function B(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var P = { components: {}, setup: function() { var e = Object(k["e"])(),
                        t = Object(i["b"])(),
                        n = Object(a["N"])({ activeMenu: t.state.activeMenu, themeMode: Object(a["h"])((function() { return t.state.themeMode })), mobileShowMenu: !1, locale: Object(a["h"])((function() { return t.state.locale })), tokenlist: [], toSwap: function() { window.location.href = "/swap" }, handleSelect: function() { n.mobileShowMenu = !1 }, changeThemeMode: function() { var e = "dark" === n.themeMode ? "light" : "dark";
                                Q["b"].set(e), t.commit("updateThemeMode", e) }, changeLanguage: function(t) { Object(I["c"])(t), e.go(0) }, menuover: function(e) { var t = 0,
                                    n = 0;
                                e.target.offsetParent.className.includes("sub-menu") ? (t = e.target.offsetParent.offsetLeft, n = e.target.offsetParent.offsetWidth) : (t = e.target.offsetLeft, n = e.target.offsetWidth), document.getElementsByClassName("menu-line")[0].style.width = n + "px", document.getElementsByClassName("menu-line")[0].style.opacity = 1, document.getElementsByClassName("menu-line")[0].style.left = t + "px" }, menuleave: function() { document.getElementsByClassName("menu-line")[0].style.opacity = 0 }, gotoLike: function(e, a) { M.emit("param", { pagesUrl: e }), t.commit("updateactiveMenu", a), n.activeMenu = a } }),
                        r = Object(a["Y"])(n); return E({}, r) } },
            S = (n("79e4"), n("3924"), n("d959")),
            D = n.n(S); const K = D()(P, [
            ["render", w],
            ["__scopeId", "data-v-18b1b19b"]
        ]); var V = K,
            J = n("1ca4"),
            L = n.n(J),
            R = n("7484"),
            U = n.n(R),
            W = function(e) { return Object(a["M"])("data-v-2b56cb4e"), e = e(), Object(a["K"])(), e },
            N = { class: "page" },
            X = { class: "header" },
            G = { class: "flex-between flex-middle" },
            q = W((function() { return Object(a["m"])("div", { class: "left" }, [Object(a["m"])("img", { src: L.a, alt: "" })], -1) })),
            Y = { class: "right flex-middle" },
            H = { class: "item" };

        function Z(e, t, n, r, i, o) { var c = Object(a["S"])("sidebar"); return Object(a["J"])(), Object(a["l"])(a["b"], null, [Object(a["m"])("div", N, [Object(a["m"])("div", X, [Object(a["m"])("div", G, [q, Object(a["m"])("div", Y, [Object(a["m"])("div", H, [Object(a["m"])("img", { onClick: t[0] || (t[0] = Object(a["jb"])((function() { return e.shows && e.shows.apply(e, arguments) }), ["stop"])), class: "icon", src: U.a, alt: "" })])])])])]), Object(a["hb"])(Object(a["q"])(c, { onShowfun: e.showfun }, null, 8, ["onShowfun"]), [
                [a["db"], e.show]
            ])], 64) } var z = n("a6f1"),
            _ = n.n(z),
            $ = n("7d55"),
            ee = n.n($),
            te = n("9701"),
            ne = n.n(te),
            ae = n("23cd"),
            re = n.n(ae),
            ie = n("e96b"),
            oe = n.n(ie),
            ce = n("0f2f"),
            se = n.n(ce),
            ue = n("89de"),
            le = n.n(ue),
            de = n("01df"),
            pe = n.n(de),
            Ae = function(e) { return Object(a["M"])("data-v-0c4c41d1"), e = e(), Object(a["K"])(), e },
            me = { class: "package" },
            be = { class: "rigt" },
            fe = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: _.a, alt: "" }, null, -1) })),
            ye = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: ee.a, alt: "" }, null, -1) })),
            ge = { class: "title" },
            he = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: ne.a, alt: "" }, null, -1) })),
            ve = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: re.a, alt: "" }, null, -1) })),
            Oe = { class: "title" },
            Ce = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: ne.a, alt: "" }, null, -1) })),
            je = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: re.a, alt: "" }, null, -1) })),
            we = { class: "title" },
            ke = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: ne.a, alt: "" }, null, -1) })),
            Ie = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: re.a, alt: "" }, null, -1) })),
            Qe = { class: "title" },
            xe = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: ne.a, alt: "" }, null, -1) })),
            Fe = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: re.a, alt: "" }, null, -1) })),
            Me = { class: "title" },
            Te = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: ne.a, alt: "" }, null, -1) })),
            Ee = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: re.a, alt: "" }, null, -1) })),
            Be = { class: "title" },
            Pe = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: oe.a, alt: "" }, null, -1) })),
            Se = Ae((function() { return Object(a["m"])("img", { class: "item-icon", src: se.a, alt: "" }, null, -1) })),
            De = { class: "title flex-item" },
            Ke = { key: 0, class: "icon", src: le.a, alt: "" },
            Ve = { key: 1, class: "icon", src: pe.a, alt: "" },
            Je = { class: "item-title" };

        function Le(e, t, n, r, i, o) { return Object(a["J"])(), Object(a["l"])("div", me, [Object(a["m"])("div", be, [Object(a["m"])("div", { class: "warp", onClick: t[10] || (t[10] = function() { return e.hide && e.hide.apply(e, arguments) }) }, [Object(a["m"])("div", { class: Object(a["z"])(["flex-middle item", { active: "Index" === e.activeMenu }]), onClick: t[0] || (t[0] = function(t) { return e.gotoLike("IndexBox", "Index") }) }, [fe, ye, Object(a["m"])("div", ge, Object(a["W"])(e.$t("首頁")) + Object(a["W"])(e.activeMenu), 1)], 2), Object(a["m"])("div", { class: Object(a["z"])(["flex-middle item", { active: "About" === e.activeMenu }]), onClick: t[1] || (t[1] = function(t) { return e.gotoLike("AboutBox", "About") }) }, [he, ve, Object(a["m"])("div", Oe, Object(a["W"])(e.$t("關於")), 1)], 2), Object(a["m"])("div", { class: Object(a["z"])(["flex-middle item", { active: "Features" === e.activeMenu }]), onClick: t[2] || (t[2] = function(t) { return e.gotoLike("FeaturesBox", "Features") }) }, [Ce, je, Object(a["m"])("div", we, Object(a["W"])(e.$t("特征")), 1)], 2), Object(a["m"])("div", { class: Object(a["z"])(["flex-middle item", { active: "PlaceMent" === e.activeMenu }]), onClick: t[3] || (t[3] = function(t) { return e.gotoLike("idoBox", "PlaceMent") }) }, [ke, Ie, Object(a["m"])("div", Qe, Object(a["W"])(e.$t("IDO")), 1)], 2), Object(a["m"])("div", { class: Object(a["z"])(["flex-middle item", { active: "Tokens" === e.activeMenu }]), onClick: t[4] || (t[4] = function(t) { return e.gotoLike("TokenBox", "Tokens") }) }, [xe, Fe, Object(a["m"])("div", Me, Object(a["W"])(e.$t("代幣")), 1)], 2), Object(a["m"])("div", { class: Object(a["z"])(["flex-middle item", { active: "Roadmap" === e.activeMenu }]), onClick: t[5] || (t[5] = function(t) { return e.gotoLike("RoadmapBox", "Roadmap") }) }, [Te, Ee, Object(a["m"])("div", Be, Object(a["W"])(e.$t("路線圖")), 1)], 2), Object(a["m"])("div", null, [Object(a["m"])("div", { class: Object(a["z"])(["flex-middle item", { active: "8" === e.numtype }]), onClick: t[7] || (t[7] = Object(a["jb"])((function() {}), ["stop"])) }, [Pe, Se, Object(a["m"])("div", De, Object(a["W"])("en" === e.local ? "English" : "繁體中文"), 1), Object(a["m"])("div", { class: "right flex-middle", onClick: t[6] || (t[6] = Object(a["jb"])((function(t) { return e.event("8") }), ["stop"])) }, ["8" === e.numtype ? (Object(a["J"])(), Object(a["l"])("img", Ke)) : (Object(a["J"])(), Object(a["l"])("img", Ve))])], 2), Object(a["hb"])(Object(a["m"])("div", Je, [Object(a["m"])("div", { class: "text", onClick: t[8] || (t[8] = function(t) { return e.changeLanguage("zh-tw") }) }, "繁體中文"), Object(a["m"])("div", { class: "text", onClick: t[9] || (t[9] = function(t) { return e.changeLanguage("en") }) }, "English")], 512), [
                [a["db"], "8" === e.numtype]
            ])])])])]) }

        function Re(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function Ue(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Re(Object(n), !0).forEach((function(t) { We(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function We(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var Ne = { setup: function(e, t) { var n = Object(k["e"])(),
                    r = Object(i["b"])(),
                    o = Object(a["N"])({ activeMenu: r.state.activeMenu, numtype: "", local: Object(a["h"])((function() { return r.state.locale })), pagesabout: Object(a["h"])((function() { return r.state.pagesabout })), event: function(e) { if (o.numtype === e) return o.numtype = "";
                            o.numtype = e }, changeLanguage: function(e) { Object(I["c"])(e), n.go(0) }, toSwap: function() { window.location.href = "/swap" }, hide: function() { t.emit("showfun") }, goDetail: function() {}, gotoLike: function(e, t) { console.log(t), M.emit("param", { pagesUrl: e }), r.commit("updateactiveMenu", t), o.activeMenu = t } }),
                    c = Object(a["Y"])(o); return Ue({}, c) } };
        n("ec4c"); const Xe = D()(Ne, [
            ["render", Le],
            ["__scopeId", "data-v-0c4c41d1"]
        ]); var Ge = Xe;

        function qe(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function Ye(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? qe(Object(n), !0).forEach((function(t) { He(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qe(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function He(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var Ze = { components: { sidebar: Ge }, setup: function() { var e = Object(a["N"])({ show: !1, shows: function() { e.show = !0 }, showfun: function() { e.show = !1 } }),
                    t = Object(a["Y"])(e); return Ye({}, t) } };
        n("7175"); const ze = D()(Ze, [
            ["render", Z],
            ["__scopeId", "data-v-2b56cb4e"]
        ]); var _e = ze,
            $e = n("d5e3"),
            et = n.n($e),
            tt = n("d279"),
            nt = n.n(tt),
            at = function(e) { return Object(a["M"])("data-v-327d9624"), e = e(), Object(a["K"])(), e },
            rt = { class: "footer-box" },
            it = { class: "footer-warp" },
            ot = { class: "footer-item" },
            ct = at((function() { return Object(a["m"])("img", { src: L.a, class: "foot-image" }, null, -1) })),
            st = at((function() { return Object(a["m"])("a", null, "Navigating the Markets with Confidence with MAFA-AI ", -1) })),
            ut = { class: "img-box" },
            lt = at((function() { return Object(a["m"])("a", { href: "https://t.me/MAFA_AI" }, [Object(a["m"])("img", { src: et.a, class: "tubiao" })], -1) })),
            dt = at((function() { return Object(a["m"])("img", { src: nt.a, class: "tubiao" }, null, -1) })),
            pt = [dt],
            At = { class: "footer-one" },
            mt = at((function() { return Object(a["m"])("div", null, "Quick Menu", -1) })),
            bt = Object(a["o"])('<div class="footer-one" data-v-327d9624><div data-v-327d9624>Useful Links</div><a href="https://www.dexview.com/bsc/?trade=true" data-v-327d9624>Dextool</a><a href="https://pancakeswap.finance/swap?outputCurrency=" data-v-327d9624>PancakeSwap</a><a href="https://poocoin.app/tokens/" data-v-327d9624>Poocoin</a><a href="https://mafa-ai.gitbook.io/mafa-ai/" data-v-327d9624>Whitepaper</a></div>', 1);

        function ft(e, t, n, r, i, o) { return Object(a["J"])(), Object(a["l"])("div", rt, [Object(a["m"])("div", it, [Object(a["m"])("div", ot, [ct, st, Object(a["m"])("div", ut, [lt, Object(a["m"])("a", { onClick: t[0] || (t[0] = function(t) { return e.gotoqq() }) }, pt)])]), Object(a["m"])("div", At, [mt, Object(a["m"])("a", { onClick: t[1] || (t[1] = function(t) { return e.gotoLike("IndexBox") }) }, "Home "), Object(a["m"])("a", { onClick: t[2] || (t[2] = function(t) { return e.gotoLike("AboutBox") }) }, "About"), Object(a["m"])("a", { onClick: t[3] || (t[3] = function(t) { return e.gotoLike("FeaturesBox") }) }, "Features"), Object(a["m"])("a", { onClick: t[4] || (t[4] = function(t) { return e.gotoLike("idoBox") }) }, "PlaceMent"), Object(a["m"])("a", { onClick: t[5] || (t[5] = function(t) { return e.gotoLike("TokenBox") }) }, "Token"), Object(a["m"])("a", { onClick: t[6] || (t[6] = function(t) { return e.gotoLike("RoadmapBox") }) }, "Roadmap")]), bt])]) }

        function yt(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function gt(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? yt(Object(n), !0).forEach((function(t) { ht(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yt(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function ht(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var vt = { setup: function(e, t) { var n = Object(k["e"])(),
                    r = Object(i["b"])(),
                    o = Object(a["N"])({ numtype: "", local: Object(a["h"])((function() { return r.state.locale })), pagesabout: Object(a["h"])((function() { return r.state.pagesabout })), event: function(e) { if (o.numtype === e) return o.numtype = "";
                            o.numtype = e }, changeLanguage: function(e) { Object(I["c"])(e), n.go(0) }, toSwap: function() { window.location.href = "/swap" }, hide: function() { t.emit("showfun") }, goDetail: function() {}, gotoqq: function(e) { window.location.href = "https://jq.qq.com/?_wv=1027&k=8PW8fd4A" }, gotoLike: function(e) { M.emit("param", { pagesUrl: e }) } }),
                    c = Object(a["Y"])(o); return gt({}, c) } };
        n("79d6"); const Ot = D()(vt, [
            ["render", ft],
            ["__scopeId", "data-v-327d9624"]
        ]); var Ct = Ot,
            jt = { key: 0, class: "mobile-footer-kong" },
            wt = { key: 1, class: "mobile-footer" },
            kt = { class: "wrap flex-between" },
            It = { key: 0, class: "account-btn flex-middle" },
            Qt = { class: "text text-ellipsis flex-item" },
            xt = { class: "point" },
            Ft = { height: "100", version: "1.1", width: "100", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", style: { overflow: "hidden", position: "relative" } },
            Mt = Object(a["o"])('<desc style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"> Created with Raphaël 2.3.0 </desc><defs style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"></defs><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#f5e900" stroke="none" style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"></rect><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#c81432" stroke="none" transform="matrix(-0.9993,0.0367,-0.0367,-0.9993,15.6207,16.3788)" style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"></rect><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#2349e1" stroke="none" transform="matrix(0.8983,-0.4394,0.4394,0.8983,4.4322,0.6987)" style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"></rect><rect x="0" y="0" width="16" height="16" rx="0" ry="0" fill="#fa9a00" stroke="none" transform="matrix(0.3343,-0.9425,0.9425,0.3343,-15.1471,13.0953)" style="-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"></rect>', 6),
            Tt = [Mt],
            Et = { key: 1 },
            Bt = Object(a["m"])("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", class: "sc-TOsTZ cgjuDl" }, [Object(a["m"])("path", { d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z", stroke: "black", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }), Object(a["m"])("path", { d: "M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z", stroke: "black", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }), Object(a["m"])("path", { d: "M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z", stroke: "black", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })], -1),
            Pt = { class: "more-links", id: "linkDom" },
            St = { key: 0, target: "_blank", rel: "noopener noreferrer", href: "https://preview-static.clewm.net/cli/view-doc/view.html?url=https%3A%2F%2Fncstatic.clewm.net%2Frsrc%2F2021%2F0809%2F13%2F690478c3e77acc04218f933d080ca5f3.pdf&filename=KIS%20Smart%20Contract%20Audit%20Report.pdf&download=1&code=qFZHeDG&open=a1a4f764619343c79419586366b9cc39&action=&_=1628488610718&frompc=false&org_id=15715899&web_url=http%3A%2F%2Fqr61.cn%2FovMfl9%2FqFZHeDG&app=&shareUrl=&shareName=KIS%2520Smart%2520Contract%2520Audit%2520Repor&shareCodeUrl=&auth_app_maps=&auth_maps=&auth_maps_publickey=&auth_maps_time=&surl=&free=1&uni=&collect=0&from=h5&show_collect=1&show_share=1", class: "link-item" },
            Dt = { key: 1, target: "_blank", rel: "noopener noreferrer", href: "https://preview-static.clewm.net/cli/view-doc/view.html?url=https%3A%2F%2Fncstatic.clewm.net%2Frsrc%2F2021%2F0809%2F13%2Fe9691251ee09c86343a0aed303a5a190.pdf&filename=KIS%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E5%AE%A1%E8%AE%A1%E6%8A%A5%E5%91%8A.pdf&download=1&code=qBqTmOG&open=a1a4f764619343c79419586366b9cc39&action=&_=1628488718428&frompc=false&org_id=15715899&web_url=http%3A%2F%2Fqr61.cn%2FovMfl9%2FqBqTmOG&app=&shareUrl=&shareName=KIS%25E6%2599%25BA%25E8%2583%25BD%25E5%2590%2588%25E7%25BA%25A6%25E5%25AE%25A1%25E8%25AE%25A1%25E6%258A%25A5%25E5%2591%258A.pdf&shareCodeUrl=&auth_app_maps=&auth_maps=&auth_maps_publickey=&auth_maps_time=&surl=&free=1&uni=&collect=0&from=h5&show_collect=1&show_share=1", class: "link-item" },
            Kt = { target: "_blank", rel: "noopener noreferrer", href: "http://ok.kiswap.club/home/index?lang=zh-CN", class: "link-item" },
            Vt = { target: "_blank", rel: "noopener noreferrer", href: "https://twitter.com/Kiswap_offical", class: "link-item" },
            Jt = { target: "_blank", rel: "noopener noreferrer", href: "https://t.me/Kiswap", class: "link-item" },
            Lt = { target: "_blank", rel: "noopener noreferrer", href: "https://t.me/KiSwapAnnouncement", class: "link-item" };

        function Rt(e, t, n, r, i, o) { return Object(a["J"])(), Object(a["l"])(a["b"], null, [!e.$isInMobile && e.res ? (Object(a["J"])(), Object(a["l"])("div", jt)) : Object(a["k"])("", !0), !e.$isInMobile && e.res ? (Object(a["J"])(), Object(a["l"])("div", wt, [Object(a["m"])("div", kt, [e.address ? (Object(a["J"])(), Object(a["l"])("div", It, [Object(a["m"])("p", Qt, Object(a["W"])(e.address.substring(0, 6)) + "..." + Object(a["W"])(e.address.substring(e.address.length - 4, e.address.length)), 1), Object(a["m"])("div", xt, [(Object(a["J"])(), Object(a["l"])("svg", Ft, Tt))])])) : (Object(a["J"])(), Object(a["l"])("div", Et)), Object(a["m"])("div", { class: "more-btn flex-center", onClick: t[0] || (t[0] = Object(a["jb"])((function() { return e.showLinkFun && e.showLinkFun.apply(e, arguments) }), ["stop"])) }, [Bt, Object(a["hb"])(Object(a["m"])("div", Pt, ["en" === e.local ? (Object(a["J"])(), Object(a["l"])("a", St, Object(a["W"])(e.$t("合約審計")), 1)) : Object(a["k"])("", !0), "zh-cn" === e.local ? (Object(a["J"])(), Object(a["l"])("a", Dt, Object(a["W"])(e.$t("合約審計")), 1)) : Object(a["k"])("", !0), Object(a["m"])("a", Kt, Object(a["W"])(e.$t("docs")), 1), Object(a["m"])("a", Vt, Object(a["W"])(e.$t("twitter")), 1), Object(a["m"])("a", Jt, Object(a["W"])(e.$t("telegramGroup")), 1), Object(a["m"])("a", Lt, Object(a["W"])(e.$t("telegram")), 1)], 512), [
                [a["db"], e.showLink]
            ])])])])) : Object(a["k"])("", !0)], 64) } var Ut = { class: "index-top" },
            Wt = { class: "t-text" };

        function Nt(e, t, n, r, i, o) { return Object(a["J"])(), Object(a["l"])("div", Ut, [Object(a["m"])("div", Wt, [Object(a["m"])("h1", null, Object(a["W"])(n.h1), 1)]), Object(a["m"])("h4", null, Object(a["W"])(n.h4), 1)]) } var Xt = { props: ["h1", "h4"] };
        n("ae54"); const Gt = D()(Xt, [
            ["render", Nt],
            ["__scopeId", "data-v-1d48d15d"]
        ]); var qt = Gt,
            Yt = n("4026"),
            Ht = (n("d8e1"), n("6092"), n("a93e"), n("722f"), n("01ea"));

        function Zt(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function zt(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Zt(Object(n), !0).forEach((function(t) { _t(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function _t(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var $t = { components: { IndexTop: qt, CountTo: Yt["CountTo"] }, setup: function() { var e = Object(i["b"])(),
                    t = Object(a["N"])({ res: !1, local: Object(a["h"])((function() { return e.state.locale })), rate: Object(a["h"])((function() { return e.state.rate })), address: Object(a["h"])((function() { return e.state.accounts[0] })), showLink: !1, showLinkFun: function() { t.showLink = !t.showLink } });
                t.address, Object(a["G"])((function() { var e = document.getElementById("linkDom");
                    document.addEventListener("click", (function(n) { t.showLink && (e.contains(n.target) || (t.showLink = !1)) })) })), Object(a["eb"])((function() { return t.address }), (function(e) {})); var n = Object(a["Y"])(t); return zt({}, n) } };
        n("919c"); const en = D()($t, [
            ["render", Rt]
        ]); var tn = en,
            nn = n("ee10");

        function an(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function rn(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? an(Object(n), !0).forEach((function(t) { on(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function on(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var cn = { components: { Header: V, Footer: Ct, MobileFooter: tn, Headers: _e }, setup: function() { var e = Object(i["b"])(),
                    t = Object(a["N"])({ themeMode: Object(a["h"])((function() { return e.state.themeMode })) });
                document.getElementsByTagName("body")[0].className = "theme-".concat(t.themeMode), Object(a["eb"])((function() { return t.themeMode }), (function(e) { e && (document.getElementsByTagName("body")[0].className = "theme-".concat(t.themeMode)) })), location.href.includes("cross/chain") || nn["a"].initWeb3(); var n = Object(a["Y"])(t); return rn({}, n) } };
        n("9c38"); const sn = D()(cn, [
            ["render", r]
        ]); var un = sn,
            ln = n("3fd4"),
            dn = (n("7dd6"), n("aa59")),
            pn = n.n(dn),
            An = n("5df7"),
            mn = n.n(An),
            bn = n("868b"),
            fn = n.n(bn),
            yn = n("089e"),
            gn = n.n(yn),
            hn = n("5025"),
            vn = n.n(hn),
            On = n("9ab3"),
            Cn = n.n(On),
            jn = n("b35b"),
            wn = n.n(jn),
            kn = n("9bb4"),
            In = n.n(kn),
            Qn = n("8398"),
            xn = n.n(Qn),
            Fn = n("159f"),
            Mn = n.n(Fn),
            Tn = n("1346"),
            En = n.n(Tn),
            Bn = n("ccfe"),
            Pn = n.n(Bn),
            Sn = n("d876"),
            Dn = n.n(Sn),
            Kn = n("5bef"),
            Vn = n.n(Kn),
            Jn = n("e5d9"),
            Ln = n.n(Jn),
            Rn = n("e3ee"),
            Un = n.n(Rn),
            Wn = n("55e5"),
            Nn = n.n(Wn),
            Xn = n("72ba"),
            Gn = n.n(Xn),
            qn = n("cea6"),
            Yn = n.n(qn),
            Hn = function(e) { return Object(a["M"])("data-v-8498dbf4"), e = e(), Object(a["K"])(), e },
            Zn = { class: "index-box" },
            zn = { class: "banner-bg", id: "IndexBox" },
            _n = { class: "banner-warp" },
            $n = Hn((function() { return Object(a["m"])("img", { src: L.a }, null, -1) })),
            ea = { class: "title" },
            ta = { class: "text-white" },
            na = Hn((function() { return Object(a["m"])("i", { class: "flash-across" }, null, -1) })),
            aa = Hn((function() { return Object(a["m"])("img", { src: pn.a, class: "img-one" }, null, -1) })),
            ra = Hn((function() { return Object(a["m"])("img", { src: mn.a, class: "img-two" }, null, -1) })),
            ia = Hn((function() { return Object(a["m"])("img", { src: fn.a, class: "img-three" }, null, -1) })),
            oa = { class: "content-box", id: "AboutBox" },
            ca = { class: "about-left" },
            sa = { class: "about-title" },
            ua = { class: "about-content" },
            la = { class: "about-content" },
            da = Hn((function() { return Object(a["m"])("img", { src: gn.a, class: "rightimg" }, null, -1) })),
            pa = { class: "features-box", id: "FeaturesBox" },
            Aa = { class: "features-text features-bg1" },
            ma = Hn((function() { return Object(a["m"])("img", { src: vn.a, class: "features-img" }, null, -1) })),
            ba = { class: "features-title" },
            fa = { class: "features-con" },
            ya = { class: "features-text features-bg2" },
            ga = Hn((function() { return Object(a["m"])("img", { src: Cn.a, class: "features-img" }, null, -1) })),
            ha = { class: "features-title" },
            va = { class: "features-con" },
            Oa = { class: "features-text features-bg3" },
            Ca = Hn((function() { return Object(a["m"])("img", { src: wn.a, class: "features-img" }, null, -1) })),
            ja = { class: "features-title" },
            wa = { class: "features-con" },
            ka = { class: "features-text features-bg4" },
            Ia = Hn((function() { return Object(a["m"])("img", { src: In.a, class: "features-img" }, null, -1) })),
            Qa = { class: "features-title" },
            xa = { class: "features-con" },
            Fa = { class: "ido-box", id: "idoBox" },
            Ma = { class: "ido-top" },
            Ta = { class: "ido-title" },
            Ea = { class: "ido-content" },
            Ba = { class: "ido-bottom" },
            Pa = { class: "ido-left" },
            Sa = { class: "Progress-box-phone" },
            Da = { class: "usdt-box" },
            Ka = { class: "Progress-box-pc" },
            Va = { class: "usdt-box" },
            Ja = { class: "input-box" },
            La = { class: "input-left" },
            Ra = { class: "input-right" },
            Ua = Hn((function() { return Object(a["m"])("i", { class: "flash-across" }, null, -1) })),
            Wa = Hn((function() { return Object(a["m"])("i", { class: "flash-across" }, null, -1) })),
            Na = { class: "right-tips-usdt" },
            Xa = { class: "input-box" },
            Ga = { class: "input-left" },
            qa = { class: "input-right" },
            Ya = Hn((function() { return Object(a["m"])("i", { class: "flash-across" }, null, -1) })),
            Ha = { key: 1, class: "center-text-btn-disabled" },
            Za = { class: "input-box" },
            za = { class: "input-left" },
            _a = { class: "center-text-btn" },
            $a = Hn((function() { return Object(a["m"])("i", { class: "flash-across" }, null, -1) })),
            er = { class: "ido-left" },
            tr = { class: "input-box" },
            nr = { class: "input-left" },
            ar = { class: "input-box" },
            rr = { class: "Inviteraddress" },
            ir = { class: "right-but-box" },
            or = { class: "right-but" },
            cr = { class: "right-but" },
            sr = { class: "right-tips" },
            ur = { class: "token-warp", id: "tokenBox" },
            lr = { class: "token-box" },
            dr = { class: "token-left" },
            pr = { class: "token-title" },
            Ar = { class: "token-content token-margin" },
            mr = { class: "token-content" },
            br = { class: "token-content" },
            fr = { class: "token-content" },
            yr = { class: "token-content" },
            gr = { class: "token-content" },
            hr = Hn((function() { return Object(a["m"])("img", { src: xn.a, class: "rightimg" }, null, -1) })),
            vr = Object(a["o"])('<div class="token-img-list" data-v-8498dbf4><div class="token-imgbox" data-v-8498dbf4><img src="' + Mn.a + '" class="img1" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + En.a + '" class="img1" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Pn.a + '" class="img1" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Dn.a + '" class="img3" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Vn.a + '" class="img2" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Ln.a + '" class="img2" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Un.a + '" class="img4" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Nn.a + '" class="img1" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Gn.a + '" class="img5" data-v-8498dbf4></div><div class="token-imgbox" data-v-8498dbf4><img src="' + Yn.a + '" class="img6" data-v-8498dbf4></div></div>', 1),
            Or = { style: { width: "100%", overflow: "auto" } },
            Cr = { id: "RoadmapBox", class: "roadmap-box" },
            jr = { class: "roadmap-top" },
            wr = { class: "roadmap-top-one" },
            kr = Hn((function() { return Object(a["m"])("div", { class: "roadmap-top-one-yuanwarp" }, [Object(a["m"])("div", { class: "roadmap-top-one-yuan" })], -1) })),
            Ir = { class: "roadmap-title" },
            Qr = { class: "roadmap-text" },
            xr = { class: "roadmap-text" },
            Fr = { class: "roadmap-text" },
            Mr = { class: "roadmap-text" },
            Tr = { class: "roadmap-text" },
            Er = { class: "roadmap-top-two" },
            Br = Hn((function() { return Object(a["m"])("div", { class: "roadmap-top-two-yuanwarp" }, [Object(a["m"])("div", { class: "roadmap-top-two-yuan" })], -1) })),
            Pr = { class: "roadmap-title" },
            Sr = { class: "roadmap-text" },
            Dr = { class: "roadmap-text" },
            Kr = { class: "roadmap-text" },
            Vr = { class: "roadmap-text" },
            Jr = { class: "roadmap-top-three" },
            Lr = Hn((function() { return Object(a["m"])("div", { class: "roadmap-top-three-yuanwarp" }, [Object(a["m"])("div", { class: "roadmap-top-three-yuan" })], -1) })),
            Rr = { class: "roadmap-title" },
            Ur = { class: "roadmap-text" },
            Wr = { class: "roadmap-text" },
            Nr = { class: "roadmap-text" },
            Xr = Hn((function() { return Object(a["m"])("div", { class: "roadmap-content" }, null, -1) })),
            Gr = { class: "roadmap-bottom" },
            qr = { class: "roadmap-bottom-one" },
            Yr = { class: "roadmap-bottom-one-title" },
            Hr = Hn((function() { return Object(a["m"])("div", { class: "roadmap-bottom-one-yuanwarp" }, [Object(a["m"])("div", { class: "roadmap-bottom-one-yuan" })], -1) })),
            Zr = { class: "roadmap-title2" },
            zr = { class: "roadmap-text" },
            _r = { class: "roadmap-text" },
            $r = { class: "roadmap-text" },
            ei = { class: "roadmap-text" },
            ti = { class: "roadmap-bottom-two" },
            ni = { class: "roadmap-bottom-two-title" },
            ai = Hn((function() { return Object(a["m"])("div", { class: "roadmap-bottom-two-yuanwarp" }, [Object(a["m"])("div", { class: "roadmap-bottom-two-yuan" })], -1) })),
            ri = { class: "roadmap-title2" },
            ii = { class: "roadmap-text" },
            oi = { class: "roadmap-text" },
            ci = { class: "roadmap-text" },
            si = { class: "roadmap-text" },
            ui = { class: "roadmap-text" },
            li = { class: "roadmap-bottom-three" },
            di = { class: "roadmap-bottom-three-title" },
            pi = Hn((function() { return Object(a["m"])("div", { class: "roadmap-bottom-three-yuanwarp" }, [Object(a["m"])("div", { class: "roadmap-bottom-three-yuan" })], -1) })),
            Ai = { class: "roadmap-title2" },
            mi = { class: "roadmap-text" },
            bi = { class: "roadmap-text" },
            fi = { class: "roadmap-text" },
            yi = { class: "roadmap-text" },
            gi = { class: "roadmap-bottom-fore" },
            hi = { class: "roadmap-bottom-fore-title" },
            vi = Hn((function() { return Object(a["m"])("div", { class: "roadmap-bottom-fore-yuanwarp" }, [Object(a["m"])("div", { class: "roadmap-bottom-fore-yuan" })], -1) })),
            Oi = { class: "roadmap-title2" },
            Ci = { class: "roadmap-text" },
            ji = { class: "roadmap-text" },
            wi = { class: "roadmap-text" },
            ki = { class: "roadmap-text" };

        function Ii(e, t, n, r, i, o) { var c = Object(a["S"])("Progress"); return Object(a["J"])(), Object(a["l"])("div", Zn, [Object(a["m"])("div", zn, [Object(a["m"])("div", _n, [$n, Object(a["m"])("div", ea, Object(a["W"])(e.$t("月球人工智能")), 1), Object(a["m"])("div", ta, Object(a["W"])(e.$t("MAFA-AI 一個去中心化的虛擬世界")), 1), Object(a["m"])("a", { class: "center-text-btn", onClick: t[0] || (t[0] = function(t) { return e.gotoLink("idoBox") }) }, [na, Object(a["p"])(" " + Object(a["W"])(e.$t("立即加入")), 1)]), aa, ra, ia])]), Object(a["m"])("div", oa, [Object(a["m"])("div", ca, [Object(a["m"])("div", sa, Object(a["W"])(e.$t("什麽是MAFA-AI？")), 1), Object(a["m"])("div", ua, Object(a["W"])(e.$t("月球的人工智能（MAFA-AI）是一个去中心化的虚拟世界，它结合了区块链技术和人工智能，创造出独特的沉浸式体验。 探索星球，与 AI 驱动的实体互动，并参与充满活力的社区。")), 1), Object(a["m"])("div", la, Object(a["W"])(e.$t("MAFA-AI是一个尖端的人工智能平台，为各行各业提供创新的解决方案和先进的技术。")), 1)]), da]), Object(a["m"])("div", pa, [Object(a["m"])("div", Aa, [ma, Object(a["m"])("div", ba, Object(a["W"])(e.$t("電報人工智能機器人")), 1), Object(a["m"])("div", fa, Object(a["W"])(e.$t("由MAFA演算法驅動的MAFA AI Telegram AI機器人可用於提供財務建議，回答有關市場和投資的問題，並進行實時市場分析。下面是此類機器人的一些潛在用例。")), 1)]), Object(a["m"])("div", ya, [ga, Object(a["m"])("div", ha, Object(a["W"])(e.$t("數據分析")), 1), Object(a["m"])("div", va, Object(a["W"])(e.$t("MAFA-AI系統分析廣泛的市場數據，包括財務報表，公司業績，經濟指標等，以做出明智的投資決策。")), 1)]), Object(a["m"])("div", Oa, [Ca, Object(a["m"])("div", ja, Object(a["W"])(e.$t("MAFA-AI資產智能：加密資產的公正視角")), 1), Object(a["m"])("div", wa, Object(a["W"])(e.$t("MAFA-AI-資產智能報告提供從項目背景到技術集成的深入信息，讓您在將新資產和協議納入產品或投資組合時放心")), 1)]), Object(a["m"])("div", ka, [Ia, Object(a["m"])("div", Qa, Object(a["W"])(e.$t("MAFA-AI儀表板")), 1), Object(a["m"])("div", xa, Object(a["W"])(e.$t("通過利用人工智能的力量，MAFA-AI驅動的賭註系統可以為用戶提供更高效、更有利可圖的賭註體驗，幫助他們獲得更高的回報並增加投資。您將有權投資$MAFA，並獲得豐厚的獎勵。")), 1)])]), Object(a["m"])("div", Fa, [Object(a["m"])("div", Ma, [Object(a["m"])("div", Ta, Object(a["W"])(e.$t("IDO火爆上线")), 1), Object(a["m"])("div", Ea, Object(a["W"])(e.$t("在下方你可以参与我们的预售，通过预售获得更多的代币，同时参与成功以后可以参与邀请奖励获得更多的代币奖励")), 1)]), Object(a["m"])("div", Ba, [Object(a["m"])("div", Pa, [Object(a["m"])("div", Sa, [Object(a["q"])(c, { width: 350, progress: e.progressNum, strokeWidth: 20, showInfo: !0 }, null, 8, ["progress"]), Object(a["m"])("div", Da, [Object(a["m"])("div", null, Object(a["W"])(e.accumulatedAmount) + "USDT", 1), Object(a["m"])("div", null, Object(a["W"])(e.totalAmount) + "USDT", 1)])]), Object(a["m"])("div", Ka, [Object(a["q"])(c, { width: 780, progress: e.progressNum, strokeWidth: 20, showInfo: !0 }, null, 8, ["progress"]), Object(a["m"])("div", Va, [Object(a["m"])("div", null, Object(a["W"])(e.accumulatedAmount) + "USDT", 1), Object(a["m"])("div", null, Object(a["W"])(e.totalAmount) + "USDT", 1)])]), Object(a["m"])("div", Ja, [Object(a["m"])("div", La, Object(a["W"])(e.$t("數量")), 1), Object(a["m"])("div", Ra, [Object(a["hb"])(Object(a["m"])("input", { type: "number", "onUpdate:modelValue": t[1] || (t[1] = function(t) { return e.money = t }), style: { "border-radius": "15px" } }, null, 512), [
                [a["cb"], e.money]
            ]), !e.allowance || e.BigNumber(e.allowance).lte(0) || e.BigNumber(e.allowance).lt(e.BigNumber(e.money).multipliedBy(Math.pow(10, 18)).toFixed()) ? (Object(a["J"])(), Object(a["l"])("div", { key: 0, class: "center-text-btn", onClick: t[2] || (t[2] = function(t) { return e.approve() }) }, [Ua, Object(a["p"])(" " + Object(a["W"])(e.$t("授權")), 1)])) : (Object(a["J"])(), Object(a["l"])("div", { key: 1, class: "center-text-btn", onClick: t[3] || (t[3] = function(t) { return e.pay() }) }, [Wa, Object(a["p"])(" " + Object(a["W"])(e.$t("支付")), 1)]))])]), Object(a["m"])("div", Na, Object(a["W"])(e.minCont) + "USDT-" + Object(a["W"])(e.maxCont) + "USDT ", 1), Object(a["m"])("div", Xa, [Object(a["m"])("div", Ga, Object(a["W"])(e.$t("我的")) + " MAFA", 1), Object(a["m"])("div", qa, [Object(a["m"])("p", null, Object(a["W"])(e.pendingMafa), 1), e.claimed ? (Object(a["J"])(), Object(a["l"])("div", Ha)) : (Object(a["J"])(), Object(a["l"])("div", { key: 0, class: "center-text-btn", onClick: t[4] || (t[4] = function(t) { return e.receive() }) }, [Ya, Object(a["p"])(" " + Object(a["W"])(e.$t("領取")), 1)]))])]), Object(a["m"])("div", Za, [Object(a["m"])("div", za, Object(a["W"])(e.$t("邀请链接")), 1), Object(a["m"])("div", { class: "input-right", onClick: t[5] || (t[5] = function(t) { return e.copyLikn() }) }, [Object(a["m"])("p", null, Object(a["W"])(e.promotionLink), 1), Object(a["m"])("div", _a, [$a, Object(a["p"])(" " + Object(a["W"])(e.$t("複製")), 1)])])])]), Object(a["m"])("div", er, [Object(a["m"])("div", tr, [Object(a["m"])("div", nr, Object(a["W"])(e.$t("邀請人地址")), 1)]), Object(a["m"])("div", ar, [Object(a["m"])("div", rr, Object(a["W"])(e.Inviteraddress), 1)]), Object(a["m"])("div", ir, [Object(a["m"])("div", or, Object(a["W"])(e.$t("推薦人數")) + ": " + Object(a["W"])(e.teamNumber), 1), Object(a["m"])("div", cr, Object(a["W"])(e.$t("獎勵金額")) + ":" + Object(a["W"])(e.rewardAmount) + " USDT ", 1)]), Object(a["m"])("div", sr, Object(a["W"])(e.$t("可獲得直接推薦7%，间推3%的USDT奖励")), 1)])])]), Object(a["m"])("div", ur, [Object(a["m"])("div", lr, [Object(a["m"])("div", dr, [Object(a["m"])("div", pr, Object(a["W"])(e.$t("代幣經濟學")), 1), Object(a["m"])("div", Ar, Object(a["W"])(e.$t("MAFA-AI人工智能是下一代利用人工智能的力量大規模解鎖數據的工具")), 1), Object(a["m"])("div", mr, Object(a["W"])(e.$t("-代幣名稱：MAFA-AI")), 1), Object(a["m"])("div", br, Object(a["W"])(e.$t("-代幣符號：MAFA")), 1), Object(a["m"])("div", fr, Object(a["W"])(e.$t("-區塊鏈：Binance智能鏈（BEP-20）")), 1), Object(a["m"])("div", yr, Object(a["W"])(e.$t("-總供應量：10億（1000000000）")), 1), Object(a["m"])("div", gr, Object(a["W"])(e.$t("-代币税：4%税,1%回流LP，2%技術開發，1%市場")), 1)]), hr]), vr]), Object(a["m"])("div", Or, [Object(a["m"])("div", Cr, [Object(a["m"])("div", jr, [Object(a["m"])("div", wr, [kr, Object(a["m"])("div", Ir, Object(a["W"])(e.$t("第1階段")), 1), Object(a["m"])("div", Qr, Object(a["W"])(e.$t("前端開發測試階段")), 1), Object(a["m"])("div", xr, Object(a["W"])(e.$t("全球營銷活動")), 1), Object(a["m"])("div", Fr, Object(a["W"])(e.$t("CoinMarketCap & CoinGecko上市")), 1), Object(a["m"])("div", Mr, Object(a["W"])(e.$t("BSCScan認證")), 1), Object(a["m"])("div", Tr, Object(a["W"])(e.$t("質押儀錶板")), 1)]), Object(a["m"])("div", Er, [Br, Object(a["m"])("div", Pr, Object(a["W"])(e.$t("第2階段")), 1), Object(a["m"])("div", Sr, Object(a["W"])(e.$t("APP Beta版測試")), 1), Object(a["m"])("div", Dr, Object(a["W"])(e.$t("IDO")), 1), Object(a["m"])("div", Kr, Object(a["W"])(e.$t("電報AI機器人")), 1), Object(a["m"])("div", Vr, Object(a["W"])(e.$t("一級交易所上市")), 1)]), Object(a["m"])("div", Jr, [Lr, Object(a["m"])("div", Rr, Object(a["W"])(e.$t("第3階段")), 1), Object(a["m"])("div", Ur, Object(a["W"])(e.$t("智能投資人工智慧機器人")), 1), Object(a["m"])("div", Wr, Object(a["W"])(e.$t("進一步一級交易所上市")), 1), Object(a["m"])("div", Nr, Object(a["W"])(e.$t("CK審計")), 1)])]), Xr, Object(a["m"])("div", Gr, [Object(a["m"])("div", qr, [Object(a["m"])("div", Yr, Object(a["W"])(e.$t("第1階段")), 1), Hr, Object(a["m"])("div", Zr, Object(a["W"])(e.$t("第1階段")), 1), Object(a["m"])("div", zr, Object(a["W"])(e.$t("理念與概念")), 1), Object(a["m"])("div", _r, Object(a["W"])(e.$t("品牌， 登陸頁面， 簡體紙")), 1), Object(a["m"])("div", $r, Object(a["W"])(e.$t("後端開發測試階段")), 1), Object(a["m"])("div", ei, Object(a["W"])(e.$t("合約審計")), 1)]), Object(a["m"])("div", ti, [Object(a["m"])("div", ni, Object(a["W"])(e.$t("第2階段")), 1), ai, Object(a["m"])("div", ri, Object(a["W"])(e.$t("第2階段")), 1), Object(a["m"])("div", ii, Object(a["W"])(e.$t("社交媒體廣告")), 1), Object(a["m"])("div", oi, Object(a["W"])(e.$t("MAFA-AI NFT市場")), 1), Object(a["m"])("div", ci, Object(a["W"])(e.$t("複製交易AI機器人")), 1), Object(a["m"])("div", si, Object(a["W"])(e.$t("付費營銷和媒體活動")), 1), Object(a["m"])("div", ui, Object(a["W"])(e.$t("標樁儀表板")), 1)]), Object(a["m"])("div", li, [Object(a["m"])("div", di, Object(a["W"])(e.$t("第3階段")), 1), pi, Object(a["m"])("div", Ai, Object(a["W"])(e.$t("第3階段")), 1), Object(a["m"])("div", mi, Object(a["W"])(e.$t("V2白皮書")), 1), Object(a["m"])("div", bi, Object(a["W"])(e.$t("名人合作")), 1), Object(a["m"])("div", fi, Object(a["W"])(e.$t("V2網站")), 1), Object(a["m"])("div", yi, Object(a["W"])(e.$t("資產智能Dapp")), 1)]), Object(a["m"])("div", gi, [Object(a["m"])("div", hi, Object(a["W"])(e.$t("第4階段")), 1), vi, Object(a["m"])("div", Oi, Object(a["W"])(e.$t("第4階段")), 1), Object(a["m"])("div", Ci, Object(a["W"])(e.$t("不斷擴大的生態系統")), 1), Object(a["m"])("div", ji, Object(a["W"])(e.$t("Daaps UI 升級到 V2")), 1), Object(a["m"])("div", wi, Object(a["W"])(e.$t("贊助與合作")), 1), Object(a["m"])("div", ki, Object(a["W"])(e.$t("全球化")), 1)])])])])]) } var Qi = n("a4a5"),
            xi = n("fbfe"),
            Fi = n("47e2"),
            Mi = function(e) { return Object(a["M"])("data-v-6d7937f8"), e = e(), Object(a["K"])(), e },
            Ti = { class: "m-progress-outer" },
            Ei = { class: "m-progress-inner" },
            Bi = { key: 1, class: "u-success", viewBox: "64 64 896 896", "data-icon": "check-circle", "aria-hidden": "true", focusable: "false" },
            Pi = Mi((function() { return Object(a["m"])("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" }, null, -1) })),
            Si = [Pi],
            Di = { key: 2, class: "u-progress-text" };

        function Ki(e, t, n, r, i, o) { return Object(a["J"])(), Object(a["l"])("div", { class: "m-progress", style: Object(a["A"])("width:".concat(n.width, "px;")) }, [Object(a["m"])("div", Ti, [Object(a["m"])("div", Ei, [Object(a["m"])("div", { class: Object(a["z"])(["u-progress-bg", { "u-success-bg": n.progress >= 100 }]), style: Object(a["A"])("width: ".concat(n.progress >= 100 ? 100 : n.progress, "%; height: ").concat(n.strokeWidth, "px;")) }, null, 6)])]), n.showInfo ? (Object(a["J"])(), Object(a["l"])(a["b"], { key: 0 }, [], 64)) : Object(a["k"])("", !0), n.progress >= 100 ? (Object(a["J"])(), Object(a["l"])("svg", Bi, Si)) : (Object(a["J"])(), Object(a["l"])("p", Di, Object(a["W"])(n.progress >= 100 ? 100 : n.progress) + "%", 1))], 4) } var Vi = { name: "Progress", props: { width: { type: Number, default: 600 }, progress: { type: Number, default: 36 }, strokeWidth: { type: Number, default: 8 }, showInfo: { type: Boolean, default: !0 } } };
        n("81e7"); const Ji = D()(Vi, [
            ["render", Ki],
            ["__scopeId", "data-v-6d7937f8"]
        ]); var Li = Ji;

        function Ri(e) { var t = !1,
                n = document.createElement("input"); return n.value = e, document.body.appendChild(n), n.select(), document.execCommand("copy"), t = !!document.execCommand("copy"), document.body.removeChild(n), { isSuccessRef: t } } var Ui = n("901e"),
            Wi = n.n(Ui),
            Ni = n("9d56");

        function Xi(e) { return Xi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, Xi(e) }

        function Gi(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function qi(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Gi(Object(n), !0).forEach((function(t) { Yi(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gi(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function Yi(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

        function Hi() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Hi = function() { return e }; var e = {},
                t = Object.prototype,
                n = t.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                r = a.iterator || "@@iterator",
                i = a.asyncIterator || "@@asyncIterator",
                o = a.toStringTag || "@@toStringTag";

            function c(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t] } try { c({}, "") } catch (I) { c = function(e, t, n) { return e[t] = n } }

            function s(e, t, n, a) { var r = t && t.prototype instanceof d ? t : d,
                    i = Object.create(r.prototype),
                    o = new j(a || []); return i._invoke = function(e, t, n) { var a = "suspendedStart"; return function(r, i) { if ("executing" === a) throw new Error("Generator is already running"); if ("completed" === a) { if ("throw" === r) throw i; return k() } for (n.method = r, n.arg = i;;) { var o = n.delegate; if (o) { var c = v(o, n); if (c) { if (c === l) continue; return c } } if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) { if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg) } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing"; var s = u(e, t, n); if ("normal" === s.type) { if (a = n.done ? "completed" : "suspendedYield", s.arg === l) continue; return { value: s.arg, done: n.done } } "throw" === s.type && (a = "completed", n.method = "throw", n.arg = s.arg) } } }(e, n, o), i }

            function u(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (I) { return { type: "throw", arg: I } } }
            e.wrap = s; var l = {};

            function d() {}

            function p() {}

            function A() {} var m = {};
            c(m, r, (function() { return this })); var b = Object.getPrototypeOf,
                f = b && b(b(w([])));
            f && f !== t && n.call(f, r) && (m = f); var y = A.prototype = d.prototype = Object.create(m);

            function g(e) {
                ["next", "throw", "return"].forEach((function(t) { c(e, t, (function(e) { return this._invoke(t, e) })) })) }

            function h(e, t) {
                function a(r, i, o, c) { var s = u(e[r], e, i); if ("throw" !== s.type) { var l = s.arg,
                            d = l.value; return d && "object" == Xi(d) && n.call(d, "__await") ? t.resolve(d.__await).then((function(e) { a("next", e, o, c) }), (function(e) { a("throw", e, o, c) })) : t.resolve(d).then((function(e) { l.value = e, o(l) }), (function(e) { return a("throw", e, o, c) })) }
                    c(s.arg) } var r;
                this._invoke = function(e, n) {
                    function i() { return new t((function(t, r) { a(e, n, t, r) })) } return r = r ? r.then(i, i) : i() } }

            function v(e, t) { var n = e.iterator[t.method]; if (void 0 === n) { if (t.delegate = null, "throw" === t.method) { if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return l;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method") } return l } var a = u(n, e.iterator, t.arg); if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, l; var r = a.arg; return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l) }

            function O(e) { var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) }

            function C(e) { var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t }

            function j(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(O, this), this.reset(!0) }

            function w(e) { if (e) { var t = e[r]; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var a = -1,
                            i = function t() { for (; ++a < e.length;)
                                    if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t }; return i.next = i } } return { next: k } }

            function k() { return { value: void 0, done: !0 } } return p.prototype = A, c(y, "constructor", A), c(A, "constructor", p), p.displayName = c(A, o, "GeneratorFunction"), e.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, A) : (e.__proto__ = A, c(e, o, "GeneratorFunction")), e.prototype = Object.create(y), e }, e.awrap = function(e) { return { __await: e } }, g(h.prototype), c(h.prototype, i, (function() { return this })), e.AsyncIterator = h, e.async = function(t, n, a, r, i) { void 0 === i && (i = Promise); var o = new h(s(t, n, a, r), i); return e.isGeneratorFunction(n) ? o : o.next().then((function(e) { return e.done ? e.value : o.next() })) }, g(y), c(y, o, "Generator"), c(y, r, (function() { return this })), c(y, "toString", (function() { return "[object Generator]" })), e.keys = function(e) { var t = []; for (var n in e) t.push(n); return t.reverse(),
                    function n() { for (; t.length;) { var a = t.pop(); if (a in e) return n.value = a, n.done = !1, n } return n.done = !0, n } }, e.values = w, j.prototype = { constructor: j, reset: function(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(C), !e)
                        for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0) }, stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function(e) { if (this.done) throw e; var t = this;

                    function a(n, a) { return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a } for (var r = this.tryEntries.length - 1; r >= 0; --r) { var i = this.tryEntries[r],
                            o = i.completion; if ("root" === i.tryLoc) return a("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"),
                                s = n.call(i, "finallyLoc"); if (c && s) { if (this.prev < i.catchLoc) return a(i.catchLoc, !0); if (this.prev < i.finallyLoc) return a(i.finallyLoc) } else if (c) { if (this.prev < i.catchLoc) return a(i.catchLoc, !0) } else { if (!s) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return a(i.finallyLoc) } } } }, abrupt: function(e, t) { for (var a = this.tryEntries.length - 1; a >= 0; --a) { var r = this.tryEntries[a]; if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var o = i ? i.completion : {}; return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(o) }, complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l }, finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), C(n), l } }, catch: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.tryLoc === e) { var a = n.completion; if ("throw" === a.type) { var r = a.arg;
                                C(n) } return r } } throw new Error("illegal catch attempt") }, delegateYield: function(e, t, n) { return this.delegate = { iterator: w(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = void 0), l } }, e }

        function Zi(e, t, n, a, r, i, o) { try { var c = e[i](o),
                    s = c.value } catch (u) { return void n(u) }
            c.done ? t(s) : Promise.resolve(s).then(a, r) }

        function zi(e) { return function() { var t = this,
                    n = arguments; return new Promise((function(a, r) { var i = e.apply(t, n);

                    function o(e) { Zi(i, a, r, o, c, "next", e) }

                    function c(e) { Zi(i, a, r, o, c, "throw", e) }
                    o(void 0) })) } } var _i = { components: { Progress: Li }, setup: function() { var e = Object(i["b"])(),
                    t = Object(Fi["b"])(),
                    n = t.t;
                Object(a["G"])((function() { var t = window.location.href; if (-1 != t.indexOf("?")) { var n = t.substr(t.indexOf("?")),
                            a = n.split("=");
                        console.log("strs:", a), e.commit("updatePromotionUrl", a[1]) }
                    console.log("获取推荐人地址=" + e.state.promotionUrl) })), M.on("param", (function(e) { console.log(e), document.querySelector("#" + e.pagesUrl).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) })); var r = Object(a["N"])({ BigNumber: Wi.a, web3: Object(a["h"])((function() { return e.state.provider })), address: Object(a["h"])((function() { return e.state.accounts[0] })), poolAddress: Ht["a"].poolAddress, money: "", pendingMafa: 0, mafaDecimals: 0, Inviteraddress: "", promotionLink: "", recommendedNumber: 0, rewardAmount: 0, directPush: 0, progressNum: 10, Interposition: 0, accumulatedAmount: 0, totalAmount: 0, USDTContract: null, modeInfo: null, userData: null, balance: 0, allowance: 0, amount: "", USDTAmount: "", teamNumber: 0, claimed: !1, loading: !1, minCont: 150, maxCont: 400, initWallet: function() { r.address || nn["a"].initWeb3() }, pay: function(t) { if (Number(r.money)) { var a = new Wi.a(r.money).multipliedBy(Math.pow(10, 18)).toFixed(); if (new Wi.a(r.balance).lt(a)) ln["a"].error(n("餘額不足"));
                            else { console.log("address", r.address), r.loading = !0; var i = e.state.promotionUrl;
                                console.log("referAddress", Ht["a"].zeroAddress), i || (i = Ht["a"].ZeroAddress), r.idoContract.methods.contribute(i, a).estimateGas({ from: r.address }).then((function(e) { r.idoContract.methods.contribute(i, a).send({ from: r.address, gas: e }).then((function() { ln["a"].success(n("交易成功")), r.loading = !1, r.amount = "", r.initData() })).catch((function() { r.loading = !1, ln["a"].error(n("交易失敗")) })) })).catch((function(e) { console.log(e), r.loading = !1, console.log(e), r.loading = !1; var t = e.toString();
                                    t.includes("live") ? ln["a"].error("IDO no going") : t.includes("Ido ended") ? ln["a"].error("Ido ended") : t.includes("less than min amout") ? ln["a"].error("Less than min amout") : t.includes("Exceeds max amount") ? ln["a"].error("Exceeds max amount") : ln["a"].error(t) })) } } else ln["a"].error(n("請輸入購買數量")) }, receive: function(e) { console.log("领取 receive"), new Wi.a(r.pendingMafa).lt(0) ? ln["a"].error(n("餘額不足")) : (r.loading = !0, r.idoContract.methods.claim().estimateGas({ from: r.address }).then((function(e) { r.idoContract.methods.claim().send({ from: r.address, gas: e }).then((function() { ln["a"].success(n("成功")), r.loading = !1, r.amount = "", r.initData() })).catch((function() { r.loading = !1, ln["a"].error(n("失敗")) })) })).catch((function(e) { console.log(e), r.loading = !1; var t = e.toString();
                            t.includes("Claim not open yet") && ln["a"].error("Claim not open yet"), t.includes("No pending amount") && ln["a"].error("No pending amount"), t.includes("Claimed") && ln["a"].error("Claimed") }))) }, copyLikn: function(e) { console.log("复制链接 copyLikn"); var t = Ri(r.promotionLink),
                            a = t.isSuccessRef;
                        a ? ln["a"].success(n("复制成功")) : ln["a"].error(n("复制失败")) }, initContract: function() { r.idoContract = new r.web3.eth.Contract(Qi, Ht["a"].IDOAddress), r.USDTContract = new r.web3.eth.Contract(xi, Ht["a"].USDTAddress), r.mafaContract = new r.web3.eth.Contract(xi, Ht["a"].MAFAAddress); var e = window.location.href; - 1 != e.indexOf("?") && (e = e.substr(0, e.indexOf("?"))), r.promotionLink = e + "?promotion=" + r.address, r.initData() }, initData: function() { r.getInfo(), r.getBalance(), r.getAllowance(), r.getReferer() }, getBalance: function() { var e = zi(Hi().mark((function e() { var t; return Hi().wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.USDTContract.methods.balanceOf(r.address).call();
                                    case 2:
                                        t = e.sent, r.balance = t;
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) })));

                        function t() { return e.apply(this, arguments) } return t }(), getReferer: function() { var e = zi(Hi().mark((function e() { var t; return Hi().wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.idoContract.methods.getRefer(r.address).call();
                                    case 2:
                                        t = e.sent, r.Inviteraddress = t;
                                    case 4:
                                    case "end":
                                        return e.stop() } }), e) })));

                        function t() { return e.apply(this, arguments) } return t }(), gotoLink: function(e) { M.emit("param", { pagesUrl: e }) }, getInfo: function() { var e = zi(Hi().mark((function e() { var t, n; return Hi().wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.idoContract.methods.getIdoInfo().call();
                                    case 2:
                                        return t = e.sent, r.modeInfo = qi({}, t), console.log(r.modeInfo), e.next = 7, r.idoContract.methods.getUserInfo(r.address).call();
                                    case 7:
                                        return n = e.sent, r.userData = qi({}, n), console.log(r.userData), r.minCont = new Wi.a(r.modeInfo._min).dividedToIntegerBy(Math.pow(10, 18)).toFixed(), r.maxCont = new Wi.a(r.modeInfo._max).dividedToIntegerBy(Math.pow(10, 18)).toFixed(), e.next = 14, r.idoContract.methods.getTeamNumber(r.address).call();
                                    case 14:
                                        return r.teamNumber = e.sent, r.rewardAmount = new Wi.a(r.userData._rewardAmount).dividedToIntegerBy(Math.pow(10, 18)).toFixed(), r.accumulatedAmount = new Wi.a(r.modeInfo._contributedAmount).dividedToIntegerBy(Math.pow(10, 18)).toFixed(), r.totalAmount = new Wi.a(r.modeInfo._hardcap).dividedToIntegerBy(Math.pow(10, 18)).toFixed(), r.progressNum = 100 * r.accumulatedAmount / r.totalAmount, r.USDTAmount = new Wi.a(r.userData._contributed).dividedToIntegerBy(Math.pow(10, 18)).toFixed(), e.next = 22, r.mafaContract.methods.decimals().call();
                                    case 22:
                                        r.mafaDecimals = e.sent, r.pendingMafa = new Wi.a(r.userData._mafaAmount).dividedToIntegerBy(Math.pow(10, r.mafaDecimals)).toFixed(), console.log("mafa decimals", r.pendingMafa), r.claimed = r.userData.claimed;
                                    case 26:
                                    case "end":
                                        return e.stop() } }), e) })));

                        function t() { return e.apply(this, arguments) } return t }(), getAllowance: function() { var e = zi(Hi().mark((function e() { return Hi().wrap((function(e) { while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.USDTContract.methods.allowance(r.address, Ht["a"].IDOAddress).call();
                                    case 2:
                                        r.allowance = e.sent;
                                    case 3:
                                    case "end":
                                        return e.stop() } }), e) })));

                        function t() { return e.apply(this, arguments) } return t }(), approve: function() { r.loading = !0, r.USDTContract.methods.approve(Ht["a"].IDOAddress, Ni["a"]).send({ from: r.address }).then((function(e) { r.loading = !1, r.getAllowance() })).catch((function() { r.loading = !1 })) } });
                Object(a["eb"])((function() { return r.address }), (function(e) { e && r.initContract() })); var o = Object(a["Y"])(r); return qi({}, o) } };
        n("6829"), n("139d"), n("8898"); const $i = D()(_i, [
            ["render", Ii],
            ["__scopeId", "data-v-8498dbf4"]
        ]); var eo = $i,
            to = [{ path: "/", name: "Index", meta: { keepAlive: !1, isBack: !1 }, component: eo }, { path: "/about/index", name: "About", component: function() { return n.e("chunk-37728e4e").then(n.bind(null, "613f")) } }, { path: "/features/index", name: "Features", component: function() { return n.e("chunk-2a529452").then(n.bind(null, "5686")) } }, { path: "/tokens/index", name: "Tokens", component: function() { return n.e("chunk-6e25b410").then(n.bind(null, "24ef")) } }, { path: "/roadmap/index", name: "Roadmap", component: function() { return n.e("chunk-4d4969f4").then(n.bind(null, "2185")) } }, { path: "/address/list", name: "AddressList", component: function() { return n.e("chunk-83f91b46").then(n.bind(null, "2c9e")) } }, { path: "/pledge/:type/:name/:token", name: "Pledge", component: function() { return n.e("chunk-247b8b24").then(n.bind(null, "5e5a")) } }, { path: "/withdraw/:type/:name/:token", name: "Withdraw", component: function() { return n.e("chunk-30b9e6ac").then(n.bind(null, "f199")) } }, { path: "/ido", name: "Ido", component: function() { return n.e("chunk-5308e757").then(n.bind(null, "6f71")) } }, { path: "/block/address/detail/:address", name: "AddressDetail", component: function() { return n.e("AddressDetail").then(n.bind(null, "b633")) } }],
            no = Object(k["a"])({ history: Object(k["b"])(), routes: to }),
            ao = no,
            ro = n("4360"),
            io = n("7c3c"),
            oo = n.n(io),
            co = (Q["a"].get() || "en").toLowerCase();
        Object(I["c"])(co); var so = Q["b"].get() || "dark";
        Q["b"].set(so), ro["a"].commit("updateThemeMode", so); var uo = function(e) { if (!e || "0" === e) return {}; var t = decodeURIComponent(e).split("&"),
                    n = {}; return t.forEach((function(e) { var t = e.split("=");
                    1 === t.length ? n.id = t[0] : n[t[0]] = t[1] })), n },
            lo = window.location.href.replace(/#/g, ""); if (lo.includes("?")) { var po = lo.slice(lo.indexOf("?") + 1, lo.length),
                Ao = uo(po);
            Ao.theme && (Q["b"].set(Ao.theme), ro["a"].commit("updateThemeMode", Ao.theme)) } var mo = Object(a["i"])(un);
        mo.config.globalProperties.$tokenLogo = function(e) { var t = "https://xuruiju.gitee.io/assets/blockchains/okchain/assets/".concat(e, "/logo.png"); return t }, mo.config.globalProperties.dateFormat = oo.a, mo.config.globalProperties.$isInMobile = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(navigator.userAgent.toLowerCase()), mo.use(ln["c"]).use(ro["a"]).use(I["b"]).use(ao).mount("#app") }, "5bef": function(e, t, n) { e.exports = n.p + "static/img/p5.2c7dd1be.png" }, "5df7": function(e, t) { e.exports = "data:image/png;base64,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" }, "5fc9": function(e, t, n) {}, 6: function(e, t) {}, 6092: function(e) { e.exports = JSON.parse("{}") }, 6829: function(e, t, n) { "use strict";
        n("ff64") }, 7: function(e, t) {}, 7175: function(e, t, n) { "use strict";
        n("2802") }, "722f": function(e) { e.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]') }, "72ba": function(e, t, n) { e.exports = n.p + "static/img/p10.eda192d8.png" }, 7484: function(e, t) { e.exports = "data:image/png;base64,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" }, "79d6": function(e, t, n) { "use strict";
        n("1367") }, "79e4": function(e, t, n) { "use strict";
        n("cdc7") }, "79fa": function(e, t, n) { "use strict";
        n.d(t, "b", (function() { return f })), n.d(t, "c", (function() { return y })), n.d(t, "a", (function() { return g })); var a = n("47e2"),
            r = n("98b3"),
            i = n("4360"),
            o = n("b40f"),
            c = n.n(o),
            s = n("a0b8"),
            u = n.n(s),
            l = n("cb6e"),
            d = n("edd4");

        function p(e, t) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, a) } return n }

        function A(e) { for (var t = 1; t < arguments.length; t++) { var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) { m(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) })) } return e }

        function m(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var b = l,
            f = Object(a["a"])({ locale: "en", messages: { "zh-tw": A(A({}, l), u.a), en: A(A({}, d), c.a) }, missing: function(e, t) { var n = t.indexOf("."); if (-1 !== n) { var a = t.split(".");
                        console.log(a), b[a[0]][a[1]] = a[1] } else b[t] = t } }),
            y = function(e) { f.global.locale = e, i["a"].commit("updateLocale", e), r["a"].set(e) },
            g = function() { return f && f.global.locale } }, "7d55": function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAAXNSR0IArs4c6QAAALpQTFRFAAAAAAAAgICAVVVVbW2SYGCAbW2Ad3eIcHCAcICPaXiHcXuObXaJbneIc3mMcXeIcHmLbHmKbXmKcXmKb3eIcHqLcXuIcHmJb3uKb3mJb3mIcHuKb3mIb3mLcHmKcXuJcHiJcHqJb3mKcHqLb3mKcHuKb3qJcHmKcHmJcHuJb3qKcHmJcHqKb3mJb3uJcHqKb3mJcHuLcHqKcHmKcHuKcXqKcHqJcHqLb3qKcHqJcHqKcHqKcHqKcXuKJ8ax9AAAAD50Uk5TAAECAwcIDg8QEBEbHB4qKzk7PT0+S01SU2NlZmdnaWp7e3x9fomKi42Njo+bnJydnqChpqaqra2ur6+wsrPhCYM9AAAAxklEQVQ4y+3Sxw6CUBCFYRCwoqJYsGDBAij2hsK8/2uZXBFp945bE//1l1mcDMel4nkOTzG9h6kgKKcDaZBjKdGAIEOkq6INYXaBpmQHIjmVbFU/Q6xTLUupLiS6NdNK8yGV300OMYbMRrFhpDlQmkkfVV4DtVUpHGIHjLZyMOoRmB3yhPUBqUfYHmMbwnyMeYQB2p+x2VSLNKGxuxD9QcGlXetUI7V/aJArpi6ELTG2IKyBMfU1pM5Ww/fgLculGddSue97Asp36CM7QQd4AAAAAElFTkSuQmCC" }, 8: function(e, t) {}, "81e7": function(e, t, n) { "use strict";
        n("b439") }, "830f": function(e, t, n) {}, 8398: function(e, t, n) { e.exports = n.p + "static/img/oken.c7af5454.png" }, "84bd": function(e, t, n) {}, "868b": function(e, t, n) { e.exports = n.p + "static/img/banner_shape03.0458bf5b.png" }, 8898: function(e, t, n) { "use strict";
        n("33371") }, "89de": function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAJCAMAAADaUYZlAAAAAXNSR0IArs4c6QAAAFdQTFRFAAAABlTPCVTRCVbOCFTOCFbRCFXOB1fQB1TQCVXRCVXQCVbQCFTQCFbQCVXPCVbQCVbQCVbQCFbQCFbQCFbPCFbQCFbQCVbPCVbQCVbQCVXQCVbQCVbQgHA+6wAAABx0Uk5TAE9YWV5fY2dtb3J3fJex6eru8fT29vr8/P3+/ujKQHYAAABHSURBVAgdTcEHAoAgEAOwOlHcG47+/52iOEgQtKtGpCGdxqd2JKXCQwkvonArLANbwksNXyYHkp2/I8PI2IxeaDdvmbyhOwG/DAhFOnovswAAAABJRU5ErkJggg==" }, 9: function(e, t) {}, "919c": function(e, t, n) { "use strict";
        n("84bd") }, 9701: function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAAXNSR0IArs4c6QAAAPBQTFRFAAAAAAD/AFWqAFX/AEC/ADPMAEm2AEnbAEC/AFXGAFXOAFHRAE7IAE7TAFLMCVXQCVLRB1fQBlPSBlXOBlPQCFXNCFXRCFTOCFTRCFbOCFbOCFbQCFXOCFXPCFTQCFbQCFbQCFbPCFbRCFbPCFbPCFbRCFXQCFbQCVbQCVbQCVTQCVbQCVbPCVXQCVXPCVbQCFXPCFXQCFbQCFbPCFXQCVXPCVbRCVbQCFbRCFbQCFbPCFbQCVbQCFXPCFXQCVbQCVbRCVXPCVbQCVbRCVbQCVXQCVXQCFbQCFbPCFXQCFXQCFbQCFbQCFbQCVbRCVbQK7MAvAAAAE90Uk5TAAEDAwQFBwcICRUWFxcZGxwmKCorQkJDQ0RiYmN7fHx9gICFhoaHiIiJjo6Ps7S0ubm6u7zAwNDS09/f3+Dg4uLm5+fo6erw8fL19fb3/a9RPSIAAAFfSURBVDjLrZRrWwFBGIZvUQrJKSU5lOTQASUqOm1Ci+b//5s+LLMzy27q6vk279zXvPMe4fcKHJSaPVOYvWbpMOAGRatDYWtYja6CgoWJ0DUpBJeoeFcsqxt3UOmRWKXRvk5NxWpN06rHsXDT2Pa71RXu6so4CsJLJ3MqbHpiZsTCystXb1cXeWNxOAPAbziYl3wSILc4GxsAGR0aHM2rWZemDEBFozqhRWANaasAtFXqblumaSCNbYBn1WMYfDEfQMq2PgGojZEF34249QFFJSUACtUPQEwIsQeBvmJ3vFZEvnYsHK8pf0vB/G+7H8LxNztSQ0a501HDb+t5ayyokEZZebOrULegzexAL0xGr2kOIFl8ddTY8ANwLs/Fy+v35XYpW04i6/XbD917KmfhwYO6t2c64TFZCXVOZy7ULL3W1Kf/tEPW3UhAtKbtt1rUY1u2etOvz8eWx7b8B30D6J4DCzl8d74AAAAASUVORK5CYII=" }, "98b3": function(e, t, n) { "use strict";
        n.d(t, "a", (function() { return a })), n.d(t, "b", (function() { return r })); var a = o("i18nextLng"),
            r = o("themeMode", sessionStorage);

        function i(e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : localStorage; try { n.setItem(e, t) } catch (a) {} }

        function o(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : localStorage; return { get: function() { return t.getItem(e) }, set: function(n) { i(e, n, t) }, remove: function() { t.removeItem(e) } } } }, "9ab3": function(e, t, n) { e.exports = n.p + "static/img/2.a3d1ca57.png" }, "9bb4": function(e, t) { e.exports = "data:image/png;base64,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" }, "9c38": function(e, t, n) { "use strict";
        n("26e3") }, a4a5: function(e) { e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"referer","type":"address"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Buy","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"ContributedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAFA","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PeakAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"},{"internalType":"uint256","name":"_uAmount","type":"uint256"}],"name":"contribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"firstRewwardPct","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getIdoInfo","outputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"},{"internalType":"uint256","name":"_mafaPerUsdt","type":"uint256"},{"internalType":"uint256","name":"_hardcap","type":"uint256"},{"internalType":"uint256","name":"_contributedAmount","type":"uint256"},{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getRefer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTeam","outputs":[{"internalType":"address[]","name":"team","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getTeamNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256","name":"_contributed","type":"uint256"},{"internalType":"uint256","name":"_mafaAmount","type":"uint256"},{"internalType":"uint256","name":"_rewardAmount","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hardcap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"idoStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mafaPerUsdt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxCont","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minCont","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"rescueAnyBEP20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"rescueBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"secondRewwardPct","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"setIdoTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max","type":"uint256"},{"internalType":"uint256","name":"_min","type":"uint256"}],"name":"setMinMax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_open","type":"bool"}],"name":"setOpenClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_hardcap","type":"uint256"},{"internalType":"uint256","name":"_mafaPerUsdt","type":"uint256"}],"name":"setParams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"f","type":"uint256"},{"internalType":"uint256","name":"s","type":"uint256"}],"name":"setRewardParam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdtRec","type":"address"}],"name":"setUsdtRec","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_mafa","type":"address"}],"name":"setmafaAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalContributors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtRec","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]') }, a6f1: function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAAXNSR0IArs4c6QAAAMlQTFRFAAAAAAD/AACAAFWqAEC/AE3MAEbRAF3RAE3MAFHRAE7IAFXKB1XRBlPMBlPSBlXOCFTNCFTRBlXQBlTQBlXOCVbQCVXQCVTOCVTRB1bSCVbOCVbPCVbQCVXQCVXPCVbQCVXQCVfQCFXPCFbQCVbQCVXRCVXPCVXQCVXPCFbQCVXQCVbRCVXQCVbQCVXPCVbPCFXQCFbQCVbQCVbQCVbPCVbQCVbQCVXRCVbQCFbQCFbQCFbRCFXRCFbQCFbQCFbQCVXQCVbQCVbQ0DbmNgAAAEJ0Uk5TAAECAwQKCwsUFhcYJygoKj09UVJUVldYWGtudneNkJKTk5aXr7Cxs7TExcbIycvM3d7e3+Hk5ezt8/b3+Pj5+vv92xWvBQAAAMhJREFUOMvt1NcOgkAQhWFUsCH2LioqFhQUey/M+z+UyYpI2x1vTfyvv+zFyWQ5LlA0wuGVpvf7rIigmAKkboylhBHYDQW6ShvgZKRoSjLBlZkJV4UDeNrnw1T9DL7O1aCSLQhktfxDDCC0vmeYxAQojeMfJS6A2lx8q+waGC0le9QdMNsmCesAUpuwDcZWhFkYexAGaH/GZqrsSqWxG+++Qf5Ce62Zc9X4oUFOmDoSpmFMI6yMscpryB5bKc4vo19p5qrXuO97AhNL+44tm4J+AAAAAElFTkSuQmCC" }, a93e: function(e, t, n) { "use strict"; var a = n("01ea"),
            r = [{ pid: 0, lpAddresses: "0xD2cF1bA50874C0BfC03b234f9Bf7287863a9bABc", tokenAddress: "0xD2cF1bA50874C0BfC03b234f9Bf7287863a9bABc", tokenA: a["a"].kisAddress, tokenB: a["a"].sscAddress, name: "KIS LP", symbol: "KIS/SSC", tokenSymbol: "KIS/SSC", earnPercent: "1670%", allocPoint: 714, usdtTotal: 0, rate: 0, iconA: "", iconB: "", decimal: 18, islp: !0 }, { pid: 1, lpAddresses: a["a"].sscAddress, tokenAddress: a["a"].sscAddress, tokenA: a["a"].sscAddress, tokenB: a["a"].sscAddress, name: "SSC", symbol: "SSC", tokenSymbol: "SSC", earnPercent: "1670%", allocPoint: 214, usdtTotal: 0, rate: 0, iconA: "", iconB: "", decimal: 18, islp: !1 }, { pid: 2, lpAddresses: a["a"].kisAddress, tokenAddress: a["a"].kisAddress, tokenA: a["a"].kisAddress, tokenB: a["a"].kisAddress, name: "KIS", symbol: "KIS", tokenSymbol: "KIS", earnPercent: "1670%", allocPoint: 48, usdtTotal: 0, rate: 0, iconA: "", iconB: "", decimal: 18, islp: !1 }, { pid: 3, lpAddresses: a["a"].keyAddress, tokenAddress: a["a"].keyAddress, tokenA: a["a"].keyAddress, tokenB: a["a"].keyAddress, name: "KEY", symbol: "KEY", tokenSymbol: "KEY", earnPercent: "1670%", allocPoint: 24, usdtTotal: 0, rate: 0, iconA: "", iconB: "", decimal: 18, islp: !1 }];
        t["a"] = r }, aa59: function(e, t, n) { e.exports = n.p + "static/img/banner_shape01.d7e82c92.png" }, ae54: function(e, t, n) { "use strict";
        n("830f") }, b35b: function(e, t) { e.exports = "data:image/png;base64,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" }, b439: function(e, t, n) {}, c969: function(e, t, n) {}, cb6e: function(e) { e.exports = JSON.parse('{"IDO火爆上线":"IDO火爆上线","MAFA-AI 一個去中心化的虛擬世界":"MAFA-AI 一個去中心化的虛擬世界","什麽是MAFA-AI？":"什麽是MAFA-AI？","MAFA-AI是一个尖端的人工智能平台，为各行各业提供创新的解决方案和先进的技术。":"MAFA-AI是一个尖端的人工智能平台，为各行各业提供创新的解决方案和先进的技术。","月球的人工智能（MAFA-AI）是一个去中心化的虚拟世界，它结合了区块链技术和人工智能，创造出独特的沉浸式体验。 探索星球，与 AI 驱动的实体互动，并参与充满活力的社区。":"月球的人工智能（MAFA-AI）是一个去中心化的虚拟世界，它结合了区块链技术和人工智能，创造出独特的沉浸式体验。 探索星球，与 AI 驱动的实体互动，并参与充满活力的社区。","電報人工智能機器人":"電報人工智能機器人","由MAFA演算法驅動的MAFA AI Telegram AI機器人可用於提供財務建議，回答有關市場和投資的問題，並進行實時市場分析。下面是此類機器人的一些潛在用例。":"由MAFA演算法驅動的MAFA AI Telegram AI機器人可用於提供財務建議，回答有關市場和投資的問題，並進行實時市場分析。下面是此類機器人的一些潛在用例。","數據分析":"數據分析","MAFA-AI系統分析廣泛的市場數據，包括財務報表，公司業績，經濟指標等，以做出明智的投資決策。":"MAFA-AI系統分析廣泛的市場數據，包括財務報表，公司業績，經濟指標等，以做出明智的投資決策。","MAFA-AI資產智能：加密資產的公正視角":"MAFA-AI資產智能：加密資產的公正視角","MAFA-AI-資產智能報告提供從項目背景到技術集成的深入信息，讓您在將新資產和協議納入產品或投資組合時放心":"MAFA-AI-資產智能報告提供從項目背景到技術集成的深入信息，讓您在將新資產和協議納入產品或投資組合時放心","MAFA-AI儀表板":"MAFA-AI儀表板","通過利用人工智能的力量，MAFA-AI驅動的賭註系統可以為用戶提供更高效、更有利可圖的賭註體驗，幫助他們獲得更高的回報並增加投資。您將有權投資$MAFA，並獲得豐厚的獎勵。":"通過利用人工智能的力量，MAFA-AI驅動的賭註系統可以為用戶提供更高效、更有利可圖的賭註體驗，幫助他們獲得更高的回報並增加投資。您將有權投資$MAFA，並獲得豐厚的APR獎勵。","在下方你可以参与我们的预售，通过预售获得更多的代币，同时参与成功以后可以参与邀请奖励获得更多的代币奖励":"在下方你可以参与我们的预售，，通过预售获得更多的代币，同时参与成功以后可以参与邀请奖励获得更多的代币奖励","金額":"金額","支付":"支付","領取":"領取","邀请链接":"邀请链接","邀請人地址":"邀請人地址","推薦人數":"推薦人數","獎勵金額":"獎勵金額","可獲得直接推薦7%，间推3%的USDT奖励":"可獲得直接推薦7%，间推3%的USDT奖励","MAFA人工智能是下一代利用人工智能的力量大規模解鎖數據的工具":"MAFA人工智能是下一代利用人工智能的力量大規模解鎖數據的工具","我的":"我的","請輸入正確的數量":"請輸入正確的數量","區塊鏈":"區塊鏈","區塊":"區塊","交易":"交易","代幣":"代幣","閃兌":"閃兌","去中心化交易所":"去中心化交易所","挖礦":"挖礦","單幣挖礦":"單幣挖礦","LP挖礦":"LP挖礦","跨鏈橋":"跨鏈橋","版權所有Back":"版權所有Back","區塊瀏覽器":"區塊瀏覽器","請輸入區塊、地址、hash值":"請輸入區塊、地址、hash值","交易哈希":"交易哈希","狀態":"狀態","失敗":"失敗","時間戳":"時間戳","發送方":"發送方","接收方":"接收方","建立合約":"建立合約","價值":"價值","交易費用":"交易費用","燃料價格":"燃料價格","燃料限制":"燃料限制","數據輸入":"數據輸入","请将网络切换到BACK网络":"请将网络切换到BACK网络","網路錯誤":"網路錯誤","成功":"成功","合約地址":"合約地址","區塊高度":"區塊高度","區塊哈希值":"區塊哈希值","交易次數":"交易次數","叔區塊":"叔區塊","區塊產生者":"區塊產生者","燃料價值":"燃料價值","產生時間":"產生時間","BACK2.0瀏覽器":"BACK2.0瀏覽器","瀏覽器數據更加便捷":"瀏覽器數據更加便捷","立即檢視":"立即檢視","USDQ和PPT快速兌換":"USDQ和PPT快速兌換","幣種兌換方便快捷":"幣種兌換方便快捷","點擊交易":"點擊交易","流動性新增":"流動性新增","多幣種選擇，更多體驗":"多幣種選擇，更多體驗","點擊新增":"點擊新增","快速輕鬆的實現數字資產交易":"快速輕鬆的實現數字資產交易","點擊兌換":"點擊兌換","月球人工智能":"月球人工智能","立即加入":"立即加入","BACK還有更多功能任您選擇":"BACK還有更多功能任您選擇","USDQ置換PPT":"USDQ置換PPT","USDQ置換":"USDQ置換","兌換數量":"兌換數量","置換價格":"置換價格","每次兌換即按照置換價格進行兌換":"每次兌換即按照置換價格進行兌換","輸入兌換金額":"輸入兌換金額","鏈接錢包":"鏈接錢包","地址":"地址","交易記錄":"交易記錄","時間":"時間","總鎖倉量":"總鎖倉量","可領取":"可領取","操作":"操作","贖回":"贖回","可用":"可用","兌換價格":"兌換價格","手續費":"手續費","請輸入接收地址":"請輸入接收地址","個交易在這個區塊中":"個交易在這個區塊中","礦工":"礦工","難度值":"難度值","總難度值":"總難度值","容量":"容量","額外數據":"額外數據","哈希":"哈希","父區塊哈希":"父區塊哈希","當前區塊":"當前區塊","平均出塊時間(秒)":"平均出塊時間(秒)","地址數量(個)":"地址數量(個)","token數量(個)":"token數量(個)","BACK數據統計":"BACK數據統計","點選檢視":"點選檢視","轉出地址":"轉出地址","轉入地址":"轉入地址","數量":"數量","查看更多":"查看更多","哈希率":"哈希率","轉入記錄":"轉入記錄","BACK基金會私募計劃，全程公開透明":"BACK基金會私募計劃，全程公開透明","A輪計劃已開啟，盡情參與":"A輪計劃已開啟，盡情參與","BACK基金会私募计划":"BACK基金会私募计划","活動名稱":"活動名稱","活動時間":"活動時間","初始釋放時間":"初始釋放時間","IDO價格":"IDO價格","鎖倉時長":"鎖倉時長","天":"天","購買":"購買","BACK基金私募":"BACK基金私募","BACK基金會私募計劃":"BACK基金會私募計劃","鎖倉數量":"鎖倉數量","已領取數量":"已領取數量","可領取數量":"可領取數量","取消":"取消","BACK基金私募領取":"BACK基金私募領取","BACK基金私募購買":"BACK基金私募購買","已私募數量":"已私募數量","購買數量":"購買數量","請輸入購買數量":"請輸入購買數量","BACK代幣分配細則":"BACK代幣分配細則","分配細則":"分配細則","複製":"複製","基金會":"基金會","生態建設":"生態建設","私募":"私募","易趣分紅":"易趣分紅","流動性挖礦":"流動性挖礦","複製成功":"複製成功","分配項目":"分配項目","數額":"數額","具體用途":"具體用途","用於網絡鑄造BACK":"用於網絡鑄造BACK","用於生態建設發展":"用於生態建設發展","用於購買代幣":"用於購買代幣","通過區塊獎勵、網絡初始化等方式分給存儲提供者的代幣獎勵":"通過區塊獎勵、網絡初始化等方式分給存儲提供者的代幣獎勵","用於獎勵分紅":"用於獎勵分紅","請輸入質押數量":"請輸入質押數量","已質押type數量：":"已質押{type}數量：","可質押type數量：":"可質押{type}數量：","質押type數量：":"質押{type}數量：","質押中數量：":"質押中數量：","解押數量：":"解押數量：","剩餘數量：":"剩餘數量：","全部":"全部","質押":"質押","數量不足":"數量不足","確認":"確認","請連接MetaMask插件，或在TP錢包中打開":"請連接MetaMask插件，或在TP錢包中打開","請將網絡切換到幣安網絡":"請將網絡切換到幣安網絡","請將網絡切換到以太網絡":"請將網絡切換到以太網絡","請將網絡切換到BACK網絡":"請將網絡切換到BACK網絡","請連接TronLink插件，或在TP錢包中打開":"請連接TronLink插件，或在TP錢包中打開","提示":"提示","餘額不足":"餘額不足","地址錯誤":"地址錯誤","請輸入解押數量":"請輸入解押數量","返回":"返回","授權":"授權","交易成功":"交易成功","交易失敗":"交易失敗","釋放未開始":"釋放未開始","複製失敗":"複製失敗","關於":"關於","特征":"特征","IDO":"IDO","路線圖":"路線圖","高級AI算法：":"高級AI算法：","MAFA-AI使用尖端的人工智能算法來分析市場趨勢，並為投資者提供有價值的見解。":"MAFA-AI使用尖端的人工智能算法來分析市場趨勢，並為投資者提供有價值的見解。","權力下放：":"權力下放：","MAFA-AI是一個完全去中心化的平臺，這意味著投資者對其資產擁有完全控製權，不受集中交易所相關風險的影響。":"神经人工智能是一个完全去中心化的平台，这意味着投资者对其资产拥有完全控制权，不受集中交易所相关风险的影响。","閱讀更多信息":"閱讀更多信息","MAFA-AI智能投資機器人":"MAFA-AI智能投資機器人","這是一款人工智能產品，通過利用MAFA-AI的力量幫助您分析市場，投資分析可以變得更加準確、高效和數據驅動，為投資者提供競爭優勢，幫助您實現財務目標。":"這是一款人工智能產品，通過利用MAFA-AI的力量幫助您分析市場，投資分析可以變得更加準確、高效和數據驅動，為投資者提供競爭優勢，幫助您實現財務目標。","MAFA-AI復製交易者":"MAFA-AI復製交易者","MAFA-AI復製交易者是一種使用人工智能分析市場數據並實時復製成功交易者交易決策的交易系統。":"MAFA-AI復製交易者是一種使用人工智能分析市場數據並實時復製成功交易者交易決策的交易系統。","代幣經濟學":"代幣經濟學","MAFA-AI人工智能是下一代利用人工智能的力量大規模解鎖數據的工具":"MAFA-AI人工智能是下一代利用人工智能的力量大規模解鎖數據的工具","-代幣名稱：MAFA-AI":"-代幣名稱：MAFA-AI","-代幣符號：MAI":"-代幣符號：MAI","-區塊鏈：Binance智能鏈（BEP-20）":"-區塊鏈：Binance智能鏈（BEP-20）","-總供應量：10億（1000000000）":"-總供應量：10億（1000000000）","-代币税：4%税,1%回流LP，2%技術開發，1%市場":"-代币税：4%税,1%回流LP，2%技術開發，1%市場","第1階段":"第1階段","理念與概念":"理念與概念","品牌， 登陸頁面， 簡體紙":"品牌， 登陸頁面， 簡體紙","後端開發測試階段":"後端開發測試階段","前端開發測試階段":"前端開發測試階段","全球營銷活動":"全球營銷活動","CoinMarketCap & CoinGecko上市":"CoinMarketCap & CoinGecko上市","BSCScan認證":"BSCScan認證","質押儀錶板":"質押儀錶板","第2階段":"第2階段","社交媒體廣告":"社交媒體廣告","MAFA-AI NFT市場":"MAFA-AI NFT市場","複製交易AI機器人":"複製交易AI機器人","付費營銷和媒體活動":"付費營銷和媒體活動","APP Beta版測試":"APP Beta版測試","電報AI機器人":"電報AI機器人","一級交易所上市":"一級交易所上市","第3階段":"第3階段","V2白皮書":"V2白皮書","名人合作":"名人合作","V2網站":"V2網站","資產智能Dapp":"資產智能Dapp","智能投資人工智慧機器人":"智能投資人工智慧機器人","進一步一級交易所上市":"進一步一級交易所上市","CK審計":"CK審計","第4階段":"第4階段","不斷擴大的生態系統":"不斷擴大的生態系統","Daaps UI 升級到 V2":"Daaps UI 升級到 V2","贊助與合作":"贊助與合作","全球化":"全球化"}') }, ccfe: function(e, t, n) { e.exports = n.p + "static/img/p3.bf7326b1.png" }, cdc7: function(e, t, n) {}, cea6: function(e, t, n) { e.exports = n.p + "static/img/P11.de3fcdc2.jpg" }, cf05: function(e, t, n) { e.exports = n.p + "static/img/logo.65fdab22.png" }, d279: function(e, t, n) { e.exports = n.p + "static/img/qq.242d6382.png" }, d5e3: function(e, t, n) { e.exports = n.p + "static/img/dianbao.10486473.png" }, d876: function(e, t, n) { e.exports = n.p + "static/img/p4.fe699692.png" }, d8e1: function(e) { e.exports = JSON.parse("{}") }, e3ee: function(e, t, n) { e.exports = n.p + "static/img/p7.a78efe20.png" }, e5d9: function(e, t, n) { e.exports = n.p + "static/img/p6.025f3ab9.png" }, e96b: function(e, t) { e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAAXNSR0IArs4c6QAAAdRQTFRFAAAAAAAAAAD/AACAAAD/AID/AFWqAEC/ADPMAFXVAEm2AEC/AGDfAFXGAFXjAE3MAEbRAEnIAFXMAFDPAFXGAFHJAE3MAFXOAFHRAE7TAFnTCk7OCFLSB1PPBlfRBVHOBVPQCVXQCVXOCVXSCFbOCFXRCFTRB1bQB1bPB1XPBlTPBlbPCVTPCVbQCVXQCVTOCVTRCFfPCFbQCFTRCFbPCFXPB1XRB1TPB1fPB1bRCVXPCVXRCVfPB1bQCVbQCVXQCVXPCFTPCFbRCFXQCFXSCFbQCFbRCFbPCFbQCVbQCVXRCVbQB1bPCVbPCVbPCFXPCFfPCFfRCFbQCFbQCFbPCFbQCFbQCFbQCVbRCVbQCVfQCVbPCVbQCVbPCVbQCVbQCVXQCFXRCFXPCFXQCFXQCVbQCFXPCFbRCVbQCVXPCVXQCVbPCVbQCVXPCVbRCVXQCVXPCVbQCVXPCFbQCFbQCFXQCFbPCFbQCFbPCFbRCFfRCFXQCFbQCFbQCFbPCFbQCVXQCVbQCVbQCVXQCVXQCVbQCVbRCVbQCVXPCVbQCVXQCFbQCFbQCFbQCFbQCFXQCFbRCFXQCFbQCFbQCFXQCVbQCVbPCVbQCVbQCVXQCVbQCVbQGSszzwAAAJt0Uk5TAAEBAgICAwQFBgcICAkJCgsODxASExQVFhcXGiIlLC8xNjk5PkJDR0pLT1BVVldYWFtcXmVmaWpqbm9vcHFxcnV5eYGBgoWGiIiKjI+PlJaWlpeYm52epKanqKmpq6yys7a6vL2+v8DExcjKysvMzs/P0dLT1NXV1tbX2Nnb3N7g4uTm5+fn6Ozu7/Dx8/T19/j5+vv7/Pz9/v5jTGdGAAAB7klEQVQYGZ3BZ2MLAQAG4FccKdEYNRISoxyKS822WtTeqwQNFZs2Eq1IhKhZ1FklmnD3/ll3l9tNv/R5MBOxzv5huVqVh1OdMUxDkAYV2pRBSUADYpE+RRF+oT6FUygXQ/CI5thQLgqXSJleL3a0HvpKTTkCW3OWXrcXAVjZT022GZYkvdLzYEhMkEzCJKp0+9YbgKltklREGIQSHY82LwvAcYzkcwG6djruz4VHME8yAV2Gjn3w2UgyA01cpeMk/DKkGgfQQ5fvZ3rbgnA7TLIHwAB9xq7taoFtJ8kBAAVO9Tu5GKYOkgUAMhuRULfuDUkZQI0N/FwKzaqzL6mrAajS9O74iZv3Rmm4DM2GcdbVAMg0fN7dBF3rlfSF06f2L8DCbRWaZADPqHu8HG7bP72nowDgOnVH4LG+QpcbALqpS8NLoks3gLhKzb+OOXA7SocahyZDw6/8lj1rYHlNRwa6dtrOBWDK05GATijR9qAJhrV/aCsJMIgqLU9mw3CVk+KKrWPUqCJMSVoOwDDrLR8CLePUJGEJZ2n6sTcIzSZyFOG71GTDsEXKtBwEMP8pyTsfqClH4BLN0TSxGktu0ZKLwiN0SWHdq/MfaVL6QvATi/QpimhAkIYU2pQhScA0Yl2pEflv5ctIqiuGGfgPHGivWyn2OYsAAAAASUVORK5CYII=" }, ec4c: function(e, t, n) { "use strict";
        n("5fc9") }, edd4: function(e) { e.exports = JSON.parse('{"IDO火爆上线":"IDO Inprogress","MAFA-AI 一個去中心化的虛擬世界":"A decentralized virtual world that combines blockchain technology and artificial intelligence","什麽是MAFA-AI？":"What is MAFA-AI?","MAFA-AI是一个尖端的人工智能平台，为各行各业提供创新的解决方案和先进的技术。":"MAFA-AI is a cutting-edge artificial intelligence platform that provides innovative solutions and advanced technologies to various industries.","電報人工智能機器人":"Telegram AI Bot","由MAFA演算法驅動的MAFA AI Telegram AI機器人可用於提供財務建議，回答有關市場和投資的問題，並進行實時市場分析。下面是此類機器人的一些潛在用例。":"A MAFA AI Telegram AI Bot powered by mafa algorithm could be used to provide financial advice, answer questions about markets and investments, and perform real-time market analysis. Here are some potential use cases for this type of bot.","數據分析":"Data Analysis","MAFA-AI系統分析廣泛的市場數據，包括財務報表，公司業績，經濟指標等，以做出明智的投資決策。":"The MAFA-AI system analyzes a wide range of market data, including financial statements, company performance, economic indicators, and more, to make informed investment decisions.","MAFA-AI儀表板":"MAFA-AI Staking Dashboard","通過利用人工智能的力量，MAFA-AI驅動的賭註系統可以為用戶提供更高效、更有利可圖的賭註體驗，幫助他們獲得更高的回報並增加投資。您將有權投資$MAFA，並獲得豐厚的獎勵。":"By leveraging the power of AI, a MAFA-AI-powered staking system can provide users with a more efficient and profitable staking experience, helping them earn higher rewards and grow their investment. You will have option to Stake $MAFA and reap massive rewards as well.","MAFA-AI資產智能：加密資產的公正視角":"MAFA-AI Asset Intelligence:","MAFA-AI-資產智能報告提供從項目背景到技術集成的深入信息，讓您在將新資產和協議納入產品或投資組合時放心":"MAFA-AI - Asset Intelligence reports provide in-depth information spanning a project’s background to its technical integrations, to give you peace of mind when incorporating new assets and protocols into your product or portfolio","在下方你可以参与我们的预售，通过预售获得更多的代币，同时参与成功以后可以参与邀请奖励获得更多的代币奖励":"Yyou can participate in our pre-sale to get more tokens through the pre-sale, and after successful participation, you can participate in the invitation reward to get more token rewards","金額":"Amount","支付":"Pay","領取":"Claim","邀请链接":"Invitation link","邀請人地址":"Referer","推薦人數":"Number of referrals","獎勵金額":"Reward amount","可獲得直接推薦7%，间推3%的USDT奖励":"You can get 7% USDT rewards for direct referrals and 3% for indirect referrals","代幣經濟學":"Tokenomics","MAFA-AI人工智能是下一代利用人工智能的力量大規模解鎖數據的工具":"MAFA-AI is next generation tools to unlock data at a large scale with power of AI","我的":"My","第1階段":"Stage 1","理念與概念":"Idea & Concept","品牌， 登陸頁面， 簡體紙":"Branding, Landing page, Litepaper","後端開發測試階段":"Back-end development beta stage","合約審計":"Contract Audit","前端開發測試階段":"Front-end development beta stage","全球營銷活動":"Global Marketing Campaign","CoinMarketCap & CoinGecko上市":"CoinMarketCap & CoinGecko Listing","BSCScan認證":"BSCScan Verification","質押儀錶板":"Staking Dashboard","第2階段":"Stage 2","社交媒體廣告":"Social Media Ads Campaign","MAFA-AI NFT市場":"MAFA-AI NFT Marketplace","複製交易AI機器人":"Copy Trader AI Bot","付費營銷和媒體活動":"Paid Marketing & Media Campaign","APP Beta版測試":"App Beta Test","IDO":"IDO","電報AI機器人":"Telegram AI Bot","一級交易所上市":"Listing on Tier-1 CEXs","第3階段":"Stage 3","V2白皮書":"V2 Whitepaper Release","名人合作":"Celebrity Partnership","V2網站":"Website V2 Release","資產智能Dapp":"Asset Intelligence Dapp","智能投資人工智慧機器人":"Smart Investment AI Bot","進一步一級交易所上市":"Further Tier-1 Exchange Listing","CK審計":"Certik Audit","第4階段":"Stage 4","不斷擴大的生態系統":"Expanding Ecosystem","Daaps UI 升級到 V2":"Daaps UI upgrade to V2","贊助與合作":"Sponsorship & Partnership","全球化":"Worldwide","請輸入正確的數量":"Please enter the correct quantity","首頁":"Home","區塊鏈":"Blockchain","區塊":"Block","交易":"Transaction","代幣":"Token","閃兌":"Exchange","去中心化交易所":"Swap","挖礦":"Mining","單幣挖礦":"Coin Mining","LP挖礦":"LP Mining","跨鏈橋":"Cross-chain","版權所有Back":"Copyright Back","區塊瀏覽器":"Block Explorer","請輸入區塊、地址、hash值":"Please enter block, address, hash value","交易哈希":"Transaction hash","狀態":"Status","失敗":"Failure","時間戳":"Timestamp","發送方":"From","接收方":"To","建立合約":"Create Contract","價值":"Value","交易費用":"Transaction Fee","燃料價格":"Fuel price","燃料限制":"Fuel limit","數據輸入":"Data Entry","请将网络切换到BACK网络":"Please switch the network to the BACK network","網路錯誤":"Network Error","成功":"Success","合約地址":"Contract Address","區塊高度":"Block Height","區塊哈希值":"Block Hash Value","交易次數":"Transactions","叔區塊":"Uncle Block","區塊產生者":"Block Producer","燃料價值":"Fuel Value","產生時間":"Generated time","BACK2.0瀏覽器":"BACK2.0 Browser","瀏覽器數據更加便捷":"Browser data more convenient","立即檢視":"View Now","USDQ和PPT快速兌換":"USDQ and PPT","幣種兌換方便快捷":"Fast currency exchange","點擊交易":"Transaction","流動性新增":"Liquidity Addition","多幣種選擇，更多體驗":"Multiple currency options","點擊新增":"Add","快速輕鬆的實現數字資產交易":"Easy digital asset transactions","點擊兌換":"Exchange","月球人工智能":"Artificial Intelligence of the Moon","立即加入":"Join IDO","BACK還有更多功能任您選擇":"BACK has more features to choose from","USDQ置換PPT":"USDQ Swap PPT","USDQ置換":"USDQ swap","兌換數量":"Exchange Amount","置換價格":"Replacement Price","每次兌換即按照置換價格進行兌換":"Each exchange will be exchanged at the exchange price","輸入兌換金額":"Enter exchange amount","鏈接錢包":"Link Wallet","地址":"Address","交易記錄":"Transaction History","時間":"Age","總鎖倉量":"Total Lockup Amount","操作":"Operation","贖回":"Redeem","可用":"Available","兌換價格":"Exchange Price","手續費":"Handling fee","請輸入接收地址":"Please enter the receiving address","個交易在這個區塊中":" transactions in this block","礦工":"Miners","難度值":"Difficulty value","總難度值":"Total Difficulty Value","容量":"Capacity","額外數據":"Extra data","哈希":"Hash","父區塊哈希":"Parent block hash","當前區塊":"Current block","平均出塊時間(秒)":"Average Block Time(Sec)","地址數量(個)":"Number of addresses (number)","token數量(個)":"Number of tokens(pieces)","BACK數據統計":"BACK data statistics","點選檢視":"Click to view","轉出地址":"Outgoing Address","轉入地址":"To address","數量":"Amount","查看更多":"More","哈希率":"Hash rate","轉入記錄":"Transfer Record","BACK基金會私募計劃，全程公開透明":"BACK Foundation private placement plan, the whole process is open and transparent","A輪計劃已開啟，盡情參與":"The A round plan has been opened, please participate","BACK基金会私募计划":"BACK Foundation Private Placement Plan","活動名稱":"Activity name","活動時間":"Activity time","初始釋放時間":"Initial release time","IDO價格":"IDO price","鎖倉時長":"Lockup time","天":"days","購買":"Buy","BACK基金私募":"BACK fund private placement","BACK基金會私募計劃":"BACK Private Placement Plan ","鎖倉數量":"Locked quantity","已領取數量":"Received","可領取":"Pending","取消":"Cancel","BACK基金私募領取":"BACK fund private placement","BACK基金私募購買":"BACK Fund Private Purchase","已私募數量":"Private placement number","購買數量":"Buy quantity","請輸入購買數量":"Please input","BACK代幣分配細則":"BACK Token Distribution Details","分配細則":"Distribution Details","複製":"copy","基金會":" foundation","生態建設":" ecological construction","私募":" private placement","易趣分紅":" dividend","流動性挖礦":" liquidity mining","複製成功":"Copy successfully","分配項目":"Assign items","數額":"Amount","具體用途":"Use","用於網絡鑄造BACK":"For network minting BACK","用於生態建設發展":"For ecological construction and development","用於購買代幣":"For buying tokens","通過區塊獎勵、網絡初始化等方式分給存儲提供者的代幣獎勵":"Token rewards distributed to storage providers through block rewards, network initialization, etc.","用於獎勵分紅":"For reward dividends","請輸入質押數量":"Please enter the pledge amount","已質押type數量：":"Amount of pledged {type}:","可質押type數量：":"The amount of TT that can be pledged:","質押type數量：":"{type} pledge amount:","質押中數量：":"Amount in pledge:","解押數量：":"Number of Releases:","剩餘數量：":"The remaining amount:","全部":"All","質押":"Pledge","數量不足":"Insufficient quantity","確認":"Confirm","請連接MetaMask插件，或在TP錢包中打開":"Please connect the MetaMask plugin, or open it in the TP wallet","請將網絡切換到幣安網絡":"Please switch network to Binance Network","請將網絡切換到以太網絡":"Please switch the network to Ethernet","請將網絡切換到BACK網絡":"Please switch network to BACK network","請連接TronLink插件，或在TP錢包中打開":"Please connect the TronLink plugin, or open it in the TP wallet","提示":"Tips","餘額不足":"Insufficient balance","地址錯誤":"Wrong address","請輸入解押數量":"Please enter the release amount","返回":"Back","授權":"Approve","交易成功":"Transaction Successful","交易失敗":"Transaction Failed","釋放未開始":"Releasing not start","複製失敗":"Replication failed","關於":"About","特征":"Features","路線圖":"Roadmap","高級AI算法：":"Advanced AI algorithms:","月球的人工智能（MAFA-AI）是一个去中心化的虚拟世界，它结合了区块链技术和人工智能，创造出独特的沉浸式体验。 探索星球，与 AI 驱动的实体互动，并参与充满活力的社区。":"MAFA-AI is a decentralized virtual world that combines blockchain technology and artificial intelligence to create a unique immersive experience.Explore planets,interact with AI - powered entities,and participate in vibrant communities.","MAFA-AI使用尖端的人工智能算法來分析市場趨勢，並為投資者提供有價值的見解。":"MAFA-AI uses cutting-edge artificial intelligence algorithms to analyze market trends and provide investors with valuable insights.","權力下放：":"Decentralization:","MAFA-AI是一個完全去中心化的平臺，這意味著投資者對其資產擁有完全控製權，不受集中交易所相關風險的影響。":"MAFA-AI is a fully decentralized platform, which means that investors have complete control over their assets and are not subject to the risks associated with centralized exchanges.","閱讀更多信息":"Read More","MAFA-AI智能投資機器人":"MAFA-AI Smart Investment Bot","這是一款人工智能產品，通過利用MAFA-AI的力量幫助您分析市場，投資分析可以變得更加準確、高效和數據驅動，為投資者提供競爭優勢，幫助您實現財務目標。":"An AI product to help you Analyse the market by leveraging the power of MAFA-AI, investment analysis can become more accurate, efficient, and data-driven, providing investors with a competitive edge and helping you to achieve your financial goals.","MAFA-AI復製交易者":"MAFA-AI Copy Trader","MAFA-AI復製交易者是一種使用人工智能分析市場數據並實時復製成功交易者交易決策的交易系統。":"A MAFA-AI Copy Trader is a type of trading system that uses AI to analyze market data and copy the trading decisions of successful traders in real-time.","MAFA-AI是下一代利用人工智能的力量大規模解鎖數據的工具":"MAFA-AI is next generation tools to unlock data at a large scale with power of AI","-代幣名稱：MAFA-AI":"- Token name: MAFA-AI","-代幣符號：MAFA":"- Token Symbol: MAI","-區塊鏈：Binance智能鏈（BEP-20）":"- Blockchain: Binance Smart Chain (BEP-20)","-總供應量：10億（1000000000）":"- Total Supply: 1 Billion (1,000,000,000)","-代币税：4%税,1%回流LP，2%技術開發，1%市場":"- Token tax: 4% Tax,1% liquidity ,2% development,1% marketing","CoinMarketCap和CoinGecko上市":"CoinMarketCap & CoinGecko Listing","BSCScan驗證":"BSCScan Verification","標樁儀表板":"Staking Dashboard"}') }, ee10: function(e, t, n) { "use strict"; var a = n("99e5"),
            r = n.n(a),
            i = n("4360"),
            o = n("3fd4"),
            c = n("01ea"),
            s = n("79fa");

        function u(e) { return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, u(e) }

        function l() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ l = function() { return e }; var e = {},
                t = Object.prototype,
                n = t.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                r = a.iterator || "@@iterator",
                i = a.asyncIterator || "@@asyncIterator",
                o = a.toStringTag || "@@toStringTag";

            function c(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t] } try { c({}, "") } catch (x) { c = function(e, t, n) { return e[t] = n } }

            function s(e, t, n, a) { var r = t && t.prototype instanceof A ? t : A,
                    i = Object.create(r.prototype),
                    o = new k(a || []); return i._invoke = function(e, t, n) { var a = "suspendedStart"; return function(r, i) { if ("executing" === a) throw new Error("Generator is already running"); if ("completed" === a) { if ("throw" === r) throw i; return Q() } for (n.method = r, n.arg = i;;) { var o = n.delegate; if (o) { var c = C(o, n); if (c) { if (c === p) continue; return c } } if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) { if ("suspendedStart" === a) throw a = "completed", n.arg;
                                n.dispatchException(n.arg) } else "return" === n.method && n.abrupt("return", n.arg);
                            a = "executing"; var s = d(e, t, n); if ("normal" === s.type) { if (a = n.done ? "completed" : "suspendedYield", s.arg === p) continue; return { value: s.arg, done: n.done } } "throw" === s.type && (a = "completed", n.method = "throw", n.arg = s.arg) } } }(e, n, o), i }

            function d(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (x) { return { type: "throw", arg: x } } }
            e.wrap = s; var p = {};

            function A() {}

            function m() {}

            function b() {} var f = {};
            c(f, r, (function() { return this })); var y = Object.getPrototypeOf,
                g = y && y(y(I([])));
            g && g !== t && n.call(g, r) && (f = g); var h = b.prototype = A.prototype = Object.create(f);

            function v(e) {
                ["next", "throw", "return"].forEach((function(t) { c(e, t, (function(e) { return this._invoke(t, e) })) })) }

            function O(e, t) {
                function a(r, i, o, c) { var s = d(e[r], e, i); if ("throw" !== s.type) { var l = s.arg,
                            p = l.value; return p && "object" == u(p) && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) { a("next", e, o, c) }), (function(e) { a("throw", e, o, c) })) : t.resolve(p).then((function(e) { l.value = e, o(l) }), (function(e) { return a("throw", e, o, c) })) }
                    c(s.arg) } var r;
                this._invoke = function(e, n) {
                    function i() { return new t((function(t, r) { a(e, n, t, r) })) } return r = r ? r.then(i, i) : i() } }

            function C(e, t) { var n = e.iterator[t.method]; if (void 0 === n) { if (t.delegate = null, "throw" === t.method) { if (e.iterator.return && (t.method = "return", t.arg = void 0, C(e, t), "throw" === t.method)) return p;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method") } return p } var a = d(n, e.iterator, t.arg); if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, p; var r = a.arg; return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p) }

            function j(e) { var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t) }

            function w(e) { var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t }

            function k(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(j, this), this.reset(!0) }

            function I(e) { if (e) { var t = e[r]; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var a = -1,
                            i = function t() { for (; ++a < e.length;)
                                    if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t }; return i.next = i } } return { next: Q } }

            function Q() { return { value: void 0, done: !0 } } return m.prototype = b, c(h, "constructor", b), c(b, "constructor", m), m.displayName = c(b, o, "GeneratorFunction"), e.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, c(e, o, "GeneratorFunction")), e.prototype = Object.create(h), e }, e.awrap = function(e) { return { __await: e } }, v(O.prototype), c(O.prototype, i, (function() { return this })), e.AsyncIterator = O, e.async = function(t, n, a, r, i) { void 0 === i && (i = Promise); var o = new O(s(t, n, a, r), i); return e.isGeneratorFunction(n) ? o : o.next().then((function(e) { return e.done ? e.value : o.next() })) }, v(h), c(h, o, "Generator"), c(h, r, (function() { return this })), c(h, "toString", (function() { return "[object Generator]" })), e.keys = function(e) { var t = []; for (var n in e) t.push(n); return t.reverse(),
                    function n() { for (; t.length;) { var a = t.pop(); if (a in e) return n.value = a, n.done = !1, n } return n.done = !0, n } }, e.values = I, k.prototype = { constructor: k, reset: function(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                        for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0) }, stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval }, dispatchException: function(e) { if (this.done) throw e; var t = this;

                    function a(n, a) { return o.type = "throw", o.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a } for (var r = this.tryEntries.length - 1; r >= 0; --r) { var i = this.tryEntries[r],
                            o = i.completion; if ("root" === i.tryLoc) return a("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"),
                                s = n.call(i, "finallyLoc"); if (c && s) { if (this.prev < i.catchLoc) return a(i.catchLoc, !0); if (this.prev < i.finallyLoc) return a(i.finallyLoc) } else if (c) { if (this.prev < i.catchLoc) return a(i.catchLoc, !0) } else { if (!s) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return a(i.finallyLoc) } } } }, abrupt: function(e, t) { for (var a = this.tryEntries.length - 1; a >= 0; --a) { var r = this.tryEntries[a]; if (r.tryLoc <= this.prev && n.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var o = i ? i.completion : {}; return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, p) : this.complete(o) }, complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p }, finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), w(n), p } }, catch: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.tryLoc === e) { var a = n.completion; if ("throw" === a.type) { var r = a.arg;
                                w(n) } return r } } throw new Error("illegal catch attempt") }, delegateYield: function(e, t, n) { return this.delegate = { iterator: I(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = void 0), p } }, e }

        function d(e, t, n, a, r, i, o) { try { var c = e[i](o),
                    s = c.value } catch (u) { return void n(u) }
            c.done ? t(s) : Promise.resolve(s).then(a, r) }

        function p(e) { return function() { var t = this,
                    n = arguments; return new Promise((function(a, r) { var i = e.apply(t, n);

                    function o(e) { d(i, a, r, o, c, "next", e) }

                    function c(e) { d(i, a, r, o, c, "throw", e) }
                    o(void 0) })) } } var A = { web3: {}, t: s["b"].global.t, web3Provider: null, initWeb3: function() { var e = p(l().mark((function e(t) { return l().wrap((function(e) { while (1) switch (e.prev = e.next) {
                            case 0:
                                if (!window.ethereum) { e.next = 13; break } return A.web3Provider = window.ethereum, window.ethereum.on("accountsChanged", (function(e) { var t = A.web3.utils.toChecksumAddress(e[0]);
                                    i["a"].commit("updateAccount", [t]) })), e.prev = 3, e.next = 6, window.ethereum.enable();
                            case 6:
                                e.next = 11; break;
                            case 8:
                                e.prev = 8, e.t0 = e["catch"](3), Promise.reject(e.t0);
                            case 11:
                                e.next = 14; break;
                            case 13:
                                window.web3 ? A.web3Provider = window.web3.currentProvider : o["b"].error({ message: A.t("請連接MetaMask插件，或在TP錢包中打開") });
                            case 14:
                                A.web3Provider && (A.web3 = new r.a(A.web3Provider), A.changeNetwork(t));
                            case 15:
                            case "end":
                                return e.stop() } }), e, null, [
                        [3, 8]
                    ]) })));

                function t(t) { return e.apply(this, arguments) } return t }(), changeNetwork: function() { var e = p(l().mark((function e() { var t, n, a, r = arguments; return l().wrap((function(e) { while (1) switch (e.prev = e.next) {
                            case 0:
                                return t = r.length > 0 && void 0 !== r[0] ? r[0] : c["a"].chainId, e.next = 3, A.web3.eth.net.getId();
                            case 3:
                                n = e.sent, n != t ? (a = "", 97 == t && (a = A.t("請將網絡切換到幣安網絡")), 56 == t && (a = A.t("請將網絡切換到幣安網絡")), o["b"].error({ title: A.t("網路錯誤"), message: a })) : (i["a"].commit("updateNetId", t), i["a"].commit("updateProvider", A.web3), A.web3.eth.getAccounts().then((function(e) { var t = A.web3.utils.toChecksumAddress(e[0]);
                                    i["a"].commit("updateAccount", [t]) })), A.web3Provider.on("accountsChanged", (function(e) { var t = A.web3.utils.toChecksumAddress(e[0]);
                                    i["a"].commit("updateAccount", [t]) })), A.web3Provider.on("chainChanged", (function(e) { e != "0x".concat(t.toString(16)) ? i["a"].commit("updateAccount", []) : (i["a"].commit("updateProvider", A.web3), A.web3.eth.getAccounts().then((function(e) { var t = A.web3.utils.toChecksumAddress(e[0]);
                                        i["a"].commit("updateAccount", [t]) }))) })));
                            case 5:
                            case "end":
                                return e.stop() } }), e) })));

                function t() { return e.apply(this, arguments) } return t }(), initTronWeb: function() { var e = p(l().mark((function e() { var t; return l().wrap((function(e) { while (1) switch (e.prev = e.next) {
                            case 0:
                                if (!window.tronWeb) { e.next = 13; break } return e.prev = 1, e.next = 4, window.tronWeb.request({ method: "tron_requestAccounts" });
                            case 4:
                                window.tronWeb.defaultAddress && (i["a"].commit("updateTronAccount", window.tronWeb.defaultAddress.base58 ? window.tronWeb.defaultAddress.base58 : ""), i["a"].commit("updateTronProvider", window.tronWeb), i["a"].commit("updateNetId", "trx")), e.next = 11; break;
                            case 7:
                                e.prev = 7, e.t0 = e["catch"](1), t = 0, A.Inval = setInterval((function() { t += 1, A.defaultAddress = window.tronWeb.defaultAddress.base58 ? window.tronWeb.defaultAddress.base58 : "", window.tronWeb && A.defaultAddress || 3 != t || o["b"].error({ title: A.t("提示"), message: A.t("請連接TronLink插件，或在TP錢包中打開") }), A.defaultAddress && (window.clearInterval(A.Inval), i["a"].commit("updateTronAccount", window.tronWeb.defaultAddress.base58 ? window.tronWeb.defaultAddress.base58 : ""), i["a"].commit("updateTronProvider", window.tronWeb), i["a"].commit("updateNetId", "trx")) }), 1e3);
                            case 11:
                                e.next = 14; break;
                            case 13:
                                o["b"].error({ title: A.t("提示"), message: A.t("請連接TronLink插件，或在TP錢包中打開") });
                            case 14:
                            case "end":
                                return e.stop() } }), e, null, [
                        [1, 7]
                    ]) })));

                function t() { return e.apply(this, arguments) } return t }() };
        t["a"] = A }, fbfe: function(e) { e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"beneficiary","type":"address"}],"name":"CrossTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"recipient","type":"address"}],"name":"PayTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]') }, ff64: function(e, t, n) {} });
//# sourceMappingURL=app.43d9ae31.js.map