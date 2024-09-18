(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[66032, 3902], {
    82655: function(e, n, i) {
        Promise.resolve().then(i.bind(i, 83954)),
        Promise.resolve().then(i.t.bind(i, 18305, 23)),
        Promise.resolve().then(i.t.bind(i, 25327, 23)),
        Promise.resolve().then(i.bind(i, 897)),
        Promise.resolve().then(i.bind(i, 30697)),
        Promise.resolve().then(i.bind(i, 86999)),
        Promise.resolve().then(i.bind(i, 27594)),
        Promise.resolve().then(i.bind(i, 67046)),
        Promise.resolve().then(i.bind(i, 50274)),
        Promise.resolve().then(i.bind(i, 35475)),
        Promise.resolve().then(i.bind(i, 55780)),
        Promise.resolve().then(i.t.bind(i, 69679, 23)),
        Promise.resolve().then(i.bind(i, 47816)),
        Promise.resolve().then(i.bind(i, 30925)),
        Promise.resolve().then(i.bind(i, 97821)),
        Promise.resolve().then(i.bind(i, 45777)),
        Promise.resolve().then(i.bind(i, 29060)),
        Promise.resolve().then(i.bind(i, 51921)),
        Promise.resolve().then(i.bind(i, 1138)),
        Promise.resolve().then(i.t.bind(i, 27706, 23)),
        Promise.resolve().then(i.bind(i, 83794)),
        Promise.resolve().then(i.bind(i, 76805)),
        Promise.resolve().then(i.t.bind(i, 23789, 23)),
        Promise.resolve().then(i.t.bind(i, 74131, 23)),
        Promise.resolve().then(i.t.bind(i, 68191, 23)),
        Promise.resolve().then(i.t.bind(i, 92232, 23)),
        Promise.resolve().then(i.t.bind(i, 13586, 23)),
        Promise.resolve().then(i.bind(i, 9729)),
        Promise.resolve().then(i.bind(i, 76839)),
        Promise.resolve().then(i.bind(i, 28370)),
        Promise.resolve().then(i.t.bind(i, 12048, 23)),
        Promise.resolve().then(i.t.bind(i, 43314, 23)),
        Promise.resolve().then(i.t.bind(i, 2134, 23)),
        Promise.resolve().then(i.t.bind(i, 5033, 23)),
        Promise.resolve().then(i.t.bind(i, 26402, 23)),
        Promise.resolve().then(i.t.bind(i, 54225, 23)),
        Promise.resolve().then(i.t.bind(i, 76584, 23)),
        Promise.resolve().then(i.t.bind(i, 41790, 23)),
        Promise.resolve().then(i.t.bind(i, 90485, 23)),
        Promise.resolve().then(i.t.bind(i, 6989, 23)),
        Promise.resolve().then(i.t.bind(i, 14370, 23)),
        Promise.resolve().then(i.t.bind(i, 96679, 23)),
        Promise.resolve().then(i.t.bind(i, 55195, 23)),
        Promise.resolve().then(i.t.bind(i, 26354, 23)),
        Promise.resolve().then(i.t.bind(i, 71745, 23)),
        Promise.resolve().then(i.t.bind(i, 62854, 23)),
        Promise.resolve().then(i.t.bind(i, 9424, 23)),
        Promise.resolve().then(i.t.bind(i, 14541, 23)),
        Promise.resolve().then(i.t.bind(i, 51341, 23)),
        Promise.resolve().then(i.t.bind(i, 49339, 23)),
        Promise.resolve().then(i.t.bind(i, 41243, 23)),
        Promise.resolve().then(i.t.bind(i, 24571, 23)),
        Promise.resolve().then(i.t.bind(i, 15012, 23)),
        Promise.resolve().then(i.t.bind(i, 7543, 23)),
        Promise.resolve().then(i.t.bind(i, 72653, 23)),
        Promise.resolve().then(i.t.bind(i, 64027, 23)),
        Promise.resolve().then(i.t.bind(i, 12750, 23)),
        Promise.resolve().then(i.t.bind(i, 62315, 23)),
        Promise.resolve().then(i.t.bind(i, 84823, 23)),
        Promise.resolve().then(i.t.bind(i, 88076, 23)),
        Promise.resolve().then(i.bind(i, 36423)),
        Promise.resolve().then(i.bind(i, 55693)),
        Promise.resolve().then(i.bind(i, 96325)),
        Promise.resolve().then(i.bind(i, 6227))
    },
    83954: function(e, n, i) {
        "use strict";
        i.d(n, {
            Protected: function() {
                return h
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(20582)
          , r = i(67754)
          , l = i(28645);
        let d = e => {
            let n = (0,
            r.usePathname)()
              , [i,o] = (0,
            s.useState)("")
              , [d,a] = (0,
            s.useState)(!1)
              , [c,u] = (0,
            s.useState)("")
              , v = async t => {
                t.preventDefault(),
                a(!0);
                try {
                    let t = await fetch("/api/password", {
                        method: "POST",
                        body: JSON.stringify({
                            password: i,
                            page: n
                        })
                    })
                      , s = await t.json();
                    (null == s ? void 0 : s.isValid) ? (await e.getProtectedData()).success || (u("An error occurred"),
                    a(!1)) : (u("Incorrect password"),
                    a(!1))
                } catch (e) {
                    a(!1)
                }
            }
              , m = e => {
                c && u(""),
                o(e.target.value)
            }
            ;
            return (0,
            t.jsxs)("form", {
                onSubmit: v,
                children: [(0,
                t.jsxs)("div", {
                    className: "super-password-protection__input",
                    children: [(0,
                    t.jsx)("div", {
                        className: "super-password-protection__input-lock",
                        children: (0,
                        t.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "var(--color-text-default-light)",
                            children: (0,
                            t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            })
                        })
                    }), (0,
                    t.jsx)("input", {
                        value: i,
                        onChange: m,
                        type: "password",
                        placeholder: "Enter password"
                    }), d ? (0,
                    t.jsx)(l.a, {}) : (0,
                    t.jsx)("div", {
                        onClick: v,
                        className: "super-password-protection__input-arrow",
                        children: (0,
                        t.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: (0,
                            t.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    })]
                }), (0,
                t.jsx)("p", {
                    className: "super-password-protection__error",
                    children: c
                })]
            })
        }
        ;
        var a = i(50274)
          , c = i(35475)
          , u = i(89452)
          , v = i(58416);
        i(28840);
        let m = e => {
            var n, i, s, o, r, m, p, h, j;
            let {head: b, pagePath: g} = e
              , x = (null == b ? void 0 : null === (n = b.breadcrumbs) || void 0 === n ? void 0 : n.length) > 1 ? "parent-page__".concat(b.breadcrumbs[b.breadcrumbs.length - 2].id) : (null == b ? void 0 : null === (i = b.breadcrumbs) || void 0 === i ? void 0 : i.length) === 1 ? "parent-page__index" : "";
            return (0,
            t.jsxs)("main", {
                id: "page-".concat(g),
                className: (0,
                v.cn)("super-content page__".concat(g), x),
                children: [(null === (o = e.settings) || void 0 === o ? void 0 : null === (s = o.navbar) || void 0 === s ? void 0 : s.type) && (null === (m = e.settings) || void 0 === m ? void 0 : null === (r = m.navbar) || void 0 === r ? void 0 : r.type) !== u.Fs.Notion ? (null === (h = e.settings) || void 0 === h ? void 0 : null === (p = h.navbar) || void 0 === p ? void 0 : p.type) && e.settings.navbar.type !== u.Fs.Hidden && e.settings.navbar.breadcrumbs && (null === (j = e.head.breadcrumbs) || void 0 === j ? void 0 : j.length) ? (0,
                t.jsx)(c.NavbarBreadcrumbs, {
                    navbar: e.settings.navbar,
                    head: e.head
                }) : null : (0,
                t.jsx)(a.NotionNavbar, {
                    ...e.head,
                    ...e.settings
                }), (0,
                t.jsx)("div", {
                    className: "super-password-protection",
                    children: (0,
                    t.jsx)("div", {
                        className: "super-password-protection__wrapper",
                        children: e.loading ? (0,
                        t.jsx)(l.a, {}) : (0,
                        t.jsxs)(t.Fragment, {
                            children: [(0,
                            t.jsx)("h1", {
                                className: "super-password-protection__title",
                                children: "This page is password protected"
                            }), (0,
                            t.jsx)(d, {
                                ...e
                            })]
                        })
                    })
                })]
            })
        }
          , p = (0,
        o.default)( () => Promise.all([i.e(18287), i.e(8014), i.e(62903), i.e(87084), i.e(81882)]).then(i.bind(i, 84538)).then(e => e.PageLayout), {
            loadableGenerated: {
                webpack: () => [84538]
            }
        })
          , h = e => {
            let[n,i] = (0,
            s.useState)(null)
              , [o,r] = (0,
            s.useState)()
              , l = async () => {
                var n;
                let t = await fetch("/api/protected-data?page=".concat((null === (n = e.page) || void 0 === n ? void 0 : n.join("/")) || ""), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                  , s = await t.json();
                return s.success ? (r(s.data),
                i(!0)) : i(!1),
                s
            }
            ;
            return (0,
            s.useEffect)( () => {
                l()
            }
            , []),
            n ? (0,
            t.jsx)(p, {
                ...o,
                pagePath: e.pagePath
            }) : (0,
            t.jsx)(m, {
                loading: !1 !== n,
                getProtectedData: l,
                pagePath: e.pagePath,
                settings: e.settings,
                head: e.head
            })
        }
    },
    27594: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            ErrorPage: function() {
                return o
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(58416);
        i(41155);
        let o = e => (0,
        t.jsx)("div", {
            className: (0,
            s.cn)("super-error", "notfound" === e.type ? "super-error__not-found" : ""),
            onClick: "notfound" === e.type ? () => window.location.replace("/") : void 0,
            children: "notpublic" === e.type ? (0,
            t.jsxs)("div", {
                className: "super-error__content",
                children: [(0,
                t.jsx)("p", {
                    className: "super-error__text",
                    children: "Hmm. Looks like your Notion page doesn’t"
                }), (0,
                t.jsx)("p", {
                    className: "super-error__text",
                    children: "exist yet, or sharing is disabled."
                })]
            }) : (0,
            t.jsxs)("div", {
                className: "super-error__content",
                children: [(0,
                t.jsx)("p", {
                    className: "super-error__text",
                    children: "This page doesn't seem to exist."
                }), (0,
                t.jsx)("p", {
                    className: "super-error__text",
                    children: "Click anywhere to go back."
                })]
            })
        })
    },
    50274: function(e, n, i) {
        "use strict";
        i.d(n, {
            NotionNavbar: function() {
                return m
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(20582)
          , r = i(58416)
          , l = i(10762)
          , d = i(59590)
          , a = i(21966)
          , c = i(10119);
        i(24177);
        let u = (0,
        o.default)( () => Promise.all([i.e(94844), i.e(1605)]).then(i.bind(i, 1605)).then(e => e.Search), {
            loadableGenerated: {
                webpack: () => [1605]
            }
        })
          , v = (0,
        o.default)( () => Promise.all([i.e(24997), i.e(78557), i.e(60564), i.e(66916), i.e(99585), i.e(86019)]).then(i.bind(i, 86019)).then(e => e.NavbarMenu), {
            loadableGenerated: {
                webpack: () => [86019]
            }
        })
          , m = e => {
            var n, i;
            let {navbar: o, sidebar: m, root: p, breadcrumbs: h, themeToggle: j, siteSearch: b} = e
              , {containerRef: g, isShown: x, onOpen: f, onClose: w} = (0,
            l.O)({
                noMobile: !0
            })
              , [y,_] = (0,
            s.useState)(!1)
              , [N,P] = (0,
            s.useState)(!1)
              , k = x ? w : f
              , S = () => {
                _(!0),
                P(!N)
            }
            ;
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("nav", {
                    className: "notion-navbar",
                    children: (0,
                    t.jsxs)("div", {
                        className: "notion-navbar__content",
                        children: [(0,
                        t.jsx)(d.a, {
                            root: p,
                            breadcrumbs: h,
                            isNavbar: !0
                        }), (0,
                        t.jsxs)("div", {
                            className: "notion-navbar__actions",
                            children: [j ? (0,
                            t.jsx)(a.ThemeToggle, {
                                notion: !0
                            }) : null, b ? (0,
                            t.jsx)("div", {
                                className: (0,
                                r.cn)("notion-navbar__button notion-navbar__search", (null == m ? void 0 : m.enabled) && (null == m ? void 0 : m.searchEnabled) ? "sidebar-search" : ""),
                                onClick: S,
                                children: (0,
                                t.jsx)(c.J, {
                                    type: "Search",
                                    size: 20
                                })
                            }) : null, (null == m ? void 0 : null === (n = m.links) || void 0 === n ? void 0 : n.length) && (null == m ? void 0 : m.enabled) ? (0,
                            t.jsx)("div", {
                                className: (0,
                                r.cn)("super-navbar__button super-navbar__menu-open"),
                                onClick: k,
                                children: x ? (0,
                                t.jsx)(c.J, {
                                    type: "X",
                                    size: 20
                                }) : (0,
                                t.jsx)(c.J, {
                                    type: "Menu",
                                    size: 20
                                })
                            }) : null]
                        })]
                    })
                }), (null == m ? void 0 : null === (i = m.links) || void 0 === i ? void 0 : i.length) && (null == m ? void 0 : m.enabled) ? (0,
                t.jsx)(v, {
                    menuRef: g,
                    navbar: o,
                    sidebar: m,
                    open: x,
                    toggleSearch: S,
                    close: w,
                    siteSearch: !!b
                }) : null, b && y ? (0,
                t.jsx)(u, {
                    open: N,
                    close: () => P(!1)
                }) : null]
            })
        }
    },
    35475: function(e, n, i) {
        "use strict";
        i.d(n, {
            NavbarBreadcrumbs: function() {
                return r
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(59590);
        let r = e => {
            var n;
            let[i,r] = (0,
            s.useState)();
            return (0,
            s.useEffect)( () => {
                r(document.getElementsByClassName("super-navbar")[0])
            }
            , []),
            (0,
            t.jsx)("div", {
                className: "super-navbar__breadcrumbs",
                style: {
                    position: (null == e.navbar.isSticky ? e.navbar.style.isSticky : e.navbar.isSticky) ? "sticky" : "absolute"
                },
                children: (0,
                t.jsx)(o.a, {
                    root: null === (n = e.head) || void 0 === n ? void 0 : n.root,
                    breadcrumbs: e.head.breadcrumbs,
                    isNavbar: !0
                })
            })
        }
    },
    55780: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            Breadcrumb: function() {
                return m
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(63884)
          , r = i(58416)
          , l = i(42383)
          , d = i(10762)
          , a = i(39227)
          , c = i(58846);
        let u = e => {
            var n;
            let i = null === (n = e.icon) || void 0 === n ? void 0 : n.startsWith("/icons/");
            return e.icon ? e.icon.startsWith("http") || e.icon.startsWith("data") || i ? (0,
            t.jsx)(c.t, {
                className: "notion-breadcrumb__icon",
                src: i ? "https://notion.so".concat(e.icon) : e.icon,
                alt: e.title,
                width: 16,
                height: 16,
                priority: e.priority
            }) : (0,
            t.jsx)("div", {
                style: {
                    fontSize: 18,
                    lineHeight: 1
                },
                children: e.icon
            }) : null
        }
          , v = e => {
            let {containerRef: n, isShown: i, onOpen: s, onClose: r} = (0,
            d.O)();
            return (0,
            t.jsx)(a.L, {
                containerRef: n,
                isShown: !!i,
                onOpen: s,
                onClose: r,
                trigger: (0,
                t.jsx)("p", {
                    className: "notion-breadcrumb__item notion-breadcrumb__ellipsis",
                    children: "..."
                }),
                children: (0,
                t.jsx)("div", {
                    className: "notion-breadcrumb__dropdown",
                    children: (0,
                    t.jsx)("div", {
                        className: "notion-dropdown__option-list",
                        children: e.options.map( (e, n) => {
                            let {icon: i, id: s, title: l, uri: d} = e;
                            return (0,
                            t.jsx)(o.r, {
                                uri: d,
                                children: (0,
                                t.jsxs)("div", {
                                    onClick: r,
                                    className: "notion-dropdown__option",
                                    children: [0 === n ? null : (0,
                                    t.jsx)("p", {
                                        className: "notion-breadcrumb__dropdown-option-arrow",
                                        children: "↳"
                                    }), (0,
                                    t.jsx)(u, {
                                        icon: i,
                                        title: l
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "notion-breadcrumb__dropdown-option-title",
                                        children: l
                                    })]
                                }, s)
                            }, s)
                        }
                        )
                    })
                })
            })
        }
        ;
        i(62290);
        let m = e => {
            let[n,i] = (0,
            s.useState)([null == e ? void 0 : e.root])
              , d = (0,
            l.Z)()
              , a = {
                uri: "",
                icon: "",
                title: ""
            };
            return (0,
            s.useEffect)( () => {
                let n = [null == e ? void 0 : e.root, ...(null == e ? void 0 : e.breadcrumbs) || []]
                  , t = e => {
                    let t = n.slice(1, n.length + e);
                    i([n[0], {
                        ...a,
                        options: t
                    }, ...n.slice(e)])
                }
                ;
                return window.innerWidth <= 546 && n.length > 2 ? t(-1) : window.innerWidth <= 768 && n.length > 3 ? t(-2) : n.length > 4 ? t(-3) : i(n),
                () => {}
            }
            , [null == e ? void 0 : e.root, null == e ? void 0 : e.breadcrumbs, d.width]),
            (0,
            t.jsx)("div", {
                className: "notion-breadcrumb",
                children: null == n ? void 0 : n.map( (i, l) => {
                    let {uri: d, icon: a, title: c, options: m, id: p} = i;
                    return (0,
                    t.jsxs)(s.Fragment, {
                        children: [l > 0 ? (0,
                        t.jsx)("span", {
                            className: "notion-breadcrumb__divider",
                            children: "/"
                        }) : null, (null == m ? void 0 : m.length) ? (0,
                        t.jsx)(v, {
                            options: m,
                            isNavbar: e.isNavbar
                        }) : (0,
                        t.jsxs)(o.r, {
                            uri: d,
                            className: (0,
                            r.cn)("notion-breadcrumb__item", 1 === n.length ? "single" : "", a ? "has-icon" : ""),
                            children: [(0,
                            t.jsx)(u, {
                                icon: a,
                                title: c,
                                priority: e.isNavbar
                            }), (0,
                            t.jsx)("div", {
                                className: "notion-navbar__title notion-breadcrumb__title",
                                children: c || ""
                            })]
                        })]
                    }, p)
                }
                )
            })
        }
    },
    59590: function(e, n, i) {
        "use strict";
        i.d(n, {
            a: function() {
                return t.Breadcrumb
            }
        });
        var t = i(55780)
    },
    47816: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            Code: function() {
                return P
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(58416)
          , r = i(67368)
          , l = i(72658)
          , d = i(26863)
          , a = i(22335)
          , c = i.n(a)
          , u = i(68619);
        let v = () => c().highlightAll()
          , m = e => Array.isArray(e.src) ? (0,
        t.jsx)(t.Fragment, {
            children: e.src.map( (n, i) => (0,
            t.jsx)(d.default, {
                id: n,
                src: n,
                strategy: "afterInteractive",
                onLoad: i === e.src.length - 1 ? v : void 0
            }, n))
        }) : (0,
        t.jsx)(d.default, {
            id: e.src,
            src: e.src,
            strategy: "afterInteractive",
            onLoad: v
        })
          , p = e => {
            let {colorMode: n} = (0,
            u.T)();
            return (0,
            s.useEffect)( () => {
                (0,
                r.OP)(e.src) && v()
            }
            , [e.src, n]),
            (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                r.OP)(e.src) ? null : (0,
                t.jsx)(m, {
                    src: e.src
                }), (0,
                t.jsx)("pre", {
                    children: (0,
                    t.jsx)("code", {
                        className: e.lang ? "language-".concat(e.lang) : "",
                        children: e.children
                    })
                })]
            })
        }
          , h = {
            ABAP: "abap",
            Agda: "agda",
            Arduino: "arduino",
            Bash: "bash",
            BASIC: "basic",
            BNF: "bnf",
            C: "c",
            Clojure: "clojure",
            src: "coffeescript",
            "C++": "cpp",
            "C#": "csharp",
            Coq: "coq",
            CSS: "css",
            Dart: "dart",
            Dhall: "dhall",
            Diff: "diff",
            Docker: "docker",
            EBNF: "ebnf",
            Elixir: "elixir",
            Elm: "elm",
            Erlang: "erlang",
            Flow: "flow",
            Fortran: "fortran",
            "F#": "fsharp",
            GLSL: "glsl",
            Go: "go",
            GraphQL: "graphql",
            Groovy: "groovy",
            Haskell: "haskell",
            HTML: "html",
            Java: "java",
            JavaScript: "javascript",
            JSON: "json",
            Julia: "julia",
            Kotlin: "kotlin",
            LaTeX: "latex",
            Less: "less",
            Lips: "lisp",
            LiveScript: "livescript",
            "LLVM IR": "llvm",
            Lua: "lua",
            Makefile: "makefile",
            Markdown: "markdown",
            Markup: "markup",
            MATLAB: "matlab",
            Mathematica: "mathematica",
            Mermaid: "mermaid",
            Nix: "nix",
            "Objective-C": "objectivec",
            OCaml: "ocaml",
            Pascal: "pascal",
            Perl: "perl",
            PHP: "php",
            PowerShell: "powershell",
            Prolog: "prolog",
            Protobuf: "protobuf",
            Python: "python",
            R: "r",
            Reason: "reason",
            Ruby: "ruby",
            Rust: "rust",
            Sass: "sass",
            Scala: "scala",
            Scheme: "scheme",
            Scss: "scss",
            Shell: "shell",
            Solidity: "solidity",
            SQL: "sql",
            Swift: "swift",
            TOML: "toml",
            TypeScript: "typescript",
            "VB.Net": "vbnet",
            Verilog: "verilog",
            VHDL: "vhdl",
            "Visual Basic": "visualbasic",
            WebAssembly: "wasm",
            XML: "xml",
            YAML: "yaml"
        }
          , j = "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-markup-templating.min.js";
        function b(e) {
            if (!e)
                return {
                    src: null,
                    lang: void 0
                };
            {
                let n = h[e];
                if (null == n)
                    return {
                        src: null,
                        lang: void 0
                    };
                switch (n) {
                case "abap":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-abap.min.js",
                        lang: n
                    };
                case "agda":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-agda.min.js",
                        lang: n
                    };
                case "arduino":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-arduino.min.js",
                        lang: n
                    };
                case "bash":
                case "shell":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-bash.min.js",
                        lang: n
                    };
                case "basic":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-basic.min.js",
                        lang: n
                    };
                case "bnf":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-bnf.min.js",
                        lang: n
                    };
                case "c":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-c.min.js",
                        lang: n
                    };
                case "clojure":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-clojure.min.js",
                        lang: n
                    };
                case "coffeescript":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-coffeescript.min.js",
                        lang: n
                    };
                case "cpp":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-cpp.min.js",
                        lang: n
                    };
                case "csharp":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-csharp.min.js",
                        lang: n
                    };
                case "coq":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-coq.min.js",
                        lang: n
                    };
                case "css":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-css.min.js",
                        lang: n
                    };
                case "dart":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-dart.min.js",
                        lang: n
                    };
                case "dhall":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-dhall.min.js",
                        lang: n
                    };
                case "diff":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-diff.min.js",
                        lang: n
                    };
                case "docker":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-docker.min.js",
                        lang: n
                    };
                case "elixir":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-elixir.min.js",
                        lang: n
                    };
                case "elm":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-elm.min.js",
                        lang: n
                    };
                case "ebnf":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-ebnf.min.js",
                        lang: n
                    };
                case "erlang":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-erlang.min.js",
                        lang: n
                    };
                case "flow":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-flow.min.js",
                        lang: n
                    };
                case "fortran":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-fortran.min.js",
                        lang: n
                    };
                case "fsharp":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-fsharp.min.js",
                        lang: n
                    };
                case "glsl":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-glsl.min.js",
                        lang: n
                    };
                case "go":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-go.min.js",
                        lang: n
                    };
                case "graphql":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-graphql.min.js",
                        lang: n
                    };
                case "groovy":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-groovy.min.js",
                        lang: n
                    };
                case "haskell":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-haskell.min.js",
                        lang: n
                    };
                case "html":
                case "markup":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-markup.min.js",
                        lang: n
                    };
                case "java":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-java.min.js",
                        lang: n
                    };
                case "javascript":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-javascript.min.js",
                        lang: n
                    };
                case "json":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-json.min.js",
                        lang: n
                    };
                case "julia":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-julia.min.js",
                        lang: n
                    };
                case "kotlin":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-kotlin.min.js",
                        lang: n
                    };
                case "latex":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-latex.min.js",
                        lang: n
                    };
                case "less":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-less.min.js",
                        lang: n
                    };
                case "lisp":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-lisp.min.js",
                        lang: n
                    };
                case "livescript":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-livescript.min.js",
                        lang: n
                    };
                case "llvm":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-llvm.min.js",
                        lang: n
                    };
                case "lua":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-lua.min.js",
                        lang: n
                    };
                case "makefile":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-makefile.min.js",
                        lang: n
                    };
                case "markdown":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-markdown.min.js",
                        lang: n
                    };
                case "matlab":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-matlab.min.js",
                        lang: n
                    };
                case "mathematica":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-wolfram.min.js",
                        lang: n
                    };
                case "mermaid":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-mermaid.min.js",
                        lang: n
                    };
                case "nix":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-nix.min.js",
                        lang: n
                    };
                case "objectivec":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-objectivec.min.js",
                        lang: n
                    };
                case "ocaml":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-ocaml.min.js",
                        lang: n
                    };
                case "pascal":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-pascal.min.js",
                        lang: n
                    };
                case "perl":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-perl.min.js",
                        lang: n
                    };
                case "php":
                    return {
                        src: [j, "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-php.min.js"],
                        lang: n
                    };
                case "powershell":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-powershell.min.js",
                        lang: n
                    };
                case "prolog":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-prolog.min.js",
                        lang: n
                    };
                case "protobuf":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-protobuf.min.js",
                        lang: n
                    };
                case "python":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-python.min.js",
                        lang: n
                    };
                case "r":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-r.min.js",
                        lang: n
                    };
                case "reason":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-reason.min.js",
                        lang: n
                    };
                case "ruby":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-ruby.min.js",
                        lang: n
                    };
                case "rust":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-rust.min.js",
                        lang: n
                    };
                case "sass":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-sass.min.js",
                        lang: n
                    };
                case "scala":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-scala.min.js",
                        lang: n
                    };
                case "scheme":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-scheme.min.js",
                        lang: n
                    };
                case "scss":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-scss.min.js",
                        lang: n
                    };
                case "solidity":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-solidity.min.js",
                        lang: n
                    };
                case "sql":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-sql.min.js",
                        lang: n
                    };
                case "swift":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-swift.min.js",
                        lang: n
                    };
                case "toml":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-toml.min.js",
                        lang: n
                    };
                case "typescript":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-typescript.min.js",
                        lang: n
                    };
                case "vbnet":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-vbnet.min.js",
                        lang: n
                    };
                case "verilog":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-verilog.min.js",
                        lang: n
                    };
                case "vhdl":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-vhdl.min.js",
                        lang: n
                    };
                case "visualbasic":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-visual-basic.min.js",
                        lang: n
                    };
                case "wasm":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-wasm.min.js",
                        lang: n
                    };
                case "xml":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-xml-doc.min.js",
                        lang: n
                    };
                case "yaml":
                    return {
                        src: "https://cdn.jsdelivr.net/npm/prismjs@1.27.0/components/prism-yaml.min.js",
                        lang: n
                    }
                }
                return {
                    src: null,
                    lang: void 0
                }
            }
        }
        let g = e => {
            var n;
            let i = b(null === (n = e.language) || void 0 === n ? void 0 : n.trim());
            return (0,
            t.jsx)(s.Suspense, {
                children: (0,
                t.jsx)(p, {
                    ...i,
                    children: e.children
                })
            })
        }
        ;
        var x = i(72833);
        let f = e => {
            let[n,o] = (0,
            s.useState)(!1);
            return (0,
            s.useEffect)( () => {
                o(!0),
                (async () => {
                    let {default: e} = await Promise.all([i.e(14843), i.e(98735)]).then(i.bind(i, 95199));
                    e.initialize({
                        startOnLoad: !0,
                        theme: "default"
                    }),
                    e.run()
                }
                )()
            }
            , []),
            n ? (0,
            t.jsx)("pre", {
                children: (0,
                t.jsx)("code", {
                    className: "mermaid",
                    children: e.children
                })
            }) : null
        }
        ;
        var w = i(3902);
        i(8650);
        let y = e => {
            let[n,i] = (0,
            s.useState)(!1)
              , o = () => {
                navigator.clipboard.writeText(e.content),
                i(!0),
                setTimeout( () => i(!1), 2e3)
            }
            ;
            return (0,
            t.jsxs)("button", {
                className: "notion-code__copy-button",
                onClick: o,
                children: [(0,
                t.jsx)(w.Copy, {}), n ? "Copied" : "Copy"]
            })
        }
        ;
        var _ = i(45428)
          , N = i(79826);
        let P = e => {
            let {settings: n, config: i} = (0,
            N.A)()
              , s = (0,
            r.S$)(e.title);
            return s.startsWith("super-embed:") && (0,
            r.cj)(n) ? (0,
            t.jsx)(l.S, {
                children: (0,
                t.jsx)(_.q, {
                    ...e,
                    isPreview: null == i ? void 0 : i.isPreview
                })
            }) : (0,
            t.jsxs)("div", {
                id: (0,
                r.wj)(e.id),
                className: (0,
                o.cn)("notion-code", e.wrap ? "" : "no-wrap"),
                children: [(0,
                t.jsx)(y, {
                    content: s
                }), (null == e ? void 0 : e.language) === "Mermaid" && (null == e ? void 0 : e.previewFormat) !== "code" ? (null == e ? void 0 : e.previewFormat) === "preview" ? (0,
                t.jsx)(f, {
                    children: s
                }) : (0,
                t.jsx)("pre", {
                    className: "notion-code__mermaid-split",
                    children: (0,
                    t.jsxs)("code", {
                        children: [(0,
                        t.jsx)(g, {
                            language: null == e ? void 0 : e.language,
                            children: s
                        }), (0,
                        t.jsx)(f, {
                            children: s
                        })]
                    })
                }) : (0,
                t.jsx)(g, {
                    language: null == e ? void 0 : e.language,
                    children: s
                }), (0,
                t.jsx)(x.Y, {
                    children: e.caption
                })]
            })
        }
    },
    45428: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            q: function() {
                return SuperEmbed
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27573)
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7653)
          , _lib_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67368);
        let SuperEmbed = props => {
            let id = (0,
            _lib_util__WEBPACK_IMPORTED_MODULE_2__.wj)(props.id)
              , content = (0,
            _lib_util__WEBPACK_IMPORTED_MODULE_2__.S$)(props.title);
            return (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useEffect)( () => {
                var _document_getElementById;
                let code = props.isPreview ? null === (_document_getElementById = document.getElementById("static-renderer-frame")) || void 0 === _document_getElementById ? void 0 : _document_getElementById.contentDocument.getElementById(id) : document.getElementById(id);
                code && code.querySelectorAll("script").forEach(script => {
                    if (!script.src && script.innerText)
                        eval(script.innerText),
                        script.remove();
                    else {
                        let s = document.createElement("script");
                        Array.from(script.attributes).forEach(e => {
                            s.setAttribute(e.name, e.value)
                        }
                        ),
                        script.parentNode && (script.parentNode.insertBefore(s, script.nextSibling),
                        script.remove())
                    }
                }
                )
            }
            , []),
            (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                id: id,
                className: "super-embed",
                dangerouslySetInnerHTML: {
                    __html: content.replace("super-embed:", "")
                }
            })
        }
    },
    30925: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            Calendar: function() {
                return I
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(20582)
          , r = i(46161)
          , l = i.n(r)
          , d = i(46732)
          , a = i.n(d)
          , c = i(42383)
          , u = i(18609);
        let v = e => (0,
        t.jsxs)("div", {
            className: "notion-collection-calendar__header-date-controls",
            children: [(0,
            t.jsx)("div", {
                className: "notion-collection-calendar__header-date-back",
                onClick: e.onClickEvents.prev,
                children: (0,
                t.jsx)(u.J, {
                    type: "chevronLeft",
                    size: "14px",
                    width: 14,
                    height: 14
                })
            }), (0,
            t.jsx)("div", {
                className: "notion-collection-calendar__header-date-today",
                onClick: e.onClickEvents.current,
                children: "Today"
            }), (0,
            t.jsx)("div", {
                className: "notion-collection-calendar__header-date-forward",
                onClick: e.onClickEvents.next,
                children: (0,
                t.jsx)(u.J, {
                    type: "chevronRight",
                    size: "14px",
                    width: 14,
                    height: 14
                })
            })]
        })
          , m = e => (0,
        t.jsxs)("div", {
            dir: "ltr",
            className: "notion-collection-calendar__header",
            children: [(0,
            t.jsx)("div", {
                className: "notion-collection-calendar__header-date",
                children: e.headerDate
            }), (0,
            t.jsx)(v, {
                ...e
            })]
        });
        var p = i(67368)
          , h = i(58416);
        let j = e => {
            let n = 0 === l()(e.date).day() || 6 === l()(e.date).day();
            return (0,
            t.jsxs)("div", {
                onClick: e.onClick,
                className: (0,
                h.cn)("notion-collection-calendar__date", e.bottomBorder ? "" : "no-border", n ? "weekend" : "", (null == e ? void 0 : e.index) === 0 ? "first" : void 0),
                children: [(0,
                t.jsxs)("div", {
                    className: (0,
                    h.cn)("notion-collection-calendar__date-number", l()().isSame(e.date, "day") ? "today" : e.isCurrentMonth || "week" === e.viewRange ? "" : "inactive"),
                    children: [e.isMobile || 1 !== e.date.date() || l()().isSame(e.date, "day") ? null : e.date.format("MMM"), " ", e.date.format("D")]
                }), e.hasEvents ? (0,
                t.jsx)("div", {
                    className: "notion-collection-calendar__event-dot-wrapper",
                    children: (0,
                    t.jsx)("div", {
                        className: "notion-collection-calendar__event-dot"
                    })
                }) : null]
            })
        }
        ;
        var b = i(24535);
        let g = 7
          , x = e => {
            let n;
            let {end_date: i, start_date: s} = e.event
              , o = l()(s).diff(l()(e.dayRange.start), "day")
              , r = !1
              , d = !1;
            o < 0 ? (d = !0,
            n = 0) : n = o;
            let a = 1;
            return i && (l()(i).diff(l()(e.dayRange.start), "day") > e.daysInMonth ? (r = !0,
            a = g - n) : a = l()(i).diff(l()(d ? e.dayRange.start : s), "day") + 1),
            (0,
            t.jsx)("div", {
                className: "notion-collection-calendar__item-wrapper",
                style: {
                    left: "".concat(100 / g * n, "%"),
                    width: "".concat(100 / g * a, "%"),
                    top: "".concat(e.eventHeight * (e.event.top || 0), "px")
                },
                children: (0,
                t.jsx)("div", {
                    className: (0,
                    h.cn)("notion-collection-calendar__item", r ? "overflowLeft" : "", d ? "overflowRight" : ""),
                    children: (0,
                    t.jsx)(b.z, {
                        style: {
                            height: "".concat(e.eventHeight - 6, "px")
                        },
                        ...e.event,
                        superProperties: (0,
                        p.mg)(e),
                        viewType: "calendar",
                        viewId: e.viewId,
                        ctx: e.ctx
                    })
                })
            })
        }
          , f = (e, n) => {
            var i, t, s, o, r;
            let {end_date: l, start_date: d} = (null == e ? void 0 : null === (r = e.propertyValues) || void 0 === r ? void 0 : null === (o = r[n]) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : null === (t = s[1]) || void 0 === t ? void 0 : null === (i = t[0]) || void 0 === i ? void 0 : i[1]) || {};
            return {
                end_date: l,
                start_date: d
            }
        }
          , w = (e, n, i, t) => null == e ? void 0 : e.filter(e => {
            let {end_date: s, start_date: o} = f(e, t)
              , r = s ? +l()(s) : null
              , d = +l()(o)
              , a = +l()(i)
              , c = +l()(n);
            return !!(r && (d <= c && r >= a || r <= a && r >= c) || d <= a && d >= c)
        }
        )
          , y = (e, n) => {
            let i = []
              , t = []
              , s = null == e ? void 0 : e.sort( (e, n) => {
                let i = l()(n.created_time).diff(e.created_time, "second");
                return i || (i = e.id < n.id ? -1 : 1),
                i
            }
            );
            return null == s || s.forEach(e => {
                let {end_date: i, start_date: s} = f(e, n)
                  , o = {
                    ...e,
                    start_date: s
                };
                i && (o.end_date = i),
                t.push(o)
            }
            ),
            t.forEach( (e, s) => {
                let {end_date: o, start_date: r} = e
                  , d = o ? l()(o).diff(r, "day") + 1 : 1
                  , a = ( () => {
                    var e, a;
                    let c = w([...t.filter( (e, n) => n < s)], r, o || r, n)
                      , u = (null === (e = c[c.length - 1]) || void 0 === e ? void 0 : e.top) + 1 || 0
                      , v = u;
                    for (let e = 0; e < u; e++) {
                        let n = !0;
                        for (let t = 0; t < d; t++) {
                            let s = l()(r).add(t, "day").format("YYYY-MM-DD");
                            if (i[s] && (null === (a = i[s]) || void 0 === a ? void 0 : a[e])) {
                                n = !1;
                                break
                            }
                        }
                        if (n) {
                            v = e,
                            i[r] || (i[r] = []),
                            i[r][v] = 1;
                            break
                        }
                    }
                    return v
                }
                )();
                e.top = a;
                for (let e = 0; e < d; e++) {
                    let n = l()(r).add(e, "day").format("YYYY-MM-DD");
                    i[n] || (i[n] = []),
                    i[n][a] = 1
                }
            }
            ),
            t
        }
          , _ = 7
          , N = e => {
            var n, i;
            let s = parseInt(l()().format("w")) - parseInt(l()().startOf("M").format("w"))
              , o = "week" === e.viewRange ? l()().date(1).add(e.dayOffset, "day").subtract(e.firstDayOfMonth, "days").add(s, "week").startOf("day") : l()().date(1).month(e.month).year(e.year).subtract(e.firstDayOfMonth, "days").add(e.index, "week").startOf("day")
              , r = e.dayOffset + ("week" === e.viewRange ? 7 * Math.ceil((l()().date() - l()().day()) / 7) : 0)
              , d = {
                start: o,
                end: o.add(_ - 1, "days").endOf("day")
            }
              , a = y(w(e.children, d.start.toString(), d.end.toString(), e.calendarBy), e.calendarBy).filter(e => !!e.start_date)
              , c = e.isMobile ? [] : a.map(e => e.top)
              , u = 22 * (e.isMobile ? 1 : (null === (i = a[0]) || void 0 === i ? void 0 : null === (n = i.values) || void 0 === n ? void 0 : n.length) || 1) + 16;
            return (0,
            t.jsxs)("div", {
                className: "notion-collection-calendar__row",
                style: {
                    height: "".concat(30 + u * (c.length > 0 ? Math.max(...c) + 1 : 1), "px")
                },
                children: [[...Array(_)].map( (n, i) => {
                    let s = e.index * _ + i - e.firstDayOfMonth
                      , o = "week" === e.viewRange ? l()().date(1).add(s + r, "day") : l()().date(1).month(e.month).year(e.year).add(s, "day")
                      , d = l()().month(e.month).isSame(o, "month")
                      , c = !1;
                    return e.isMobile && (c = a.some(e => l()(o).startOf("day").isBetween(e.start_date, (null == e ? void 0 : e.end_date) || e.start_date, null, "[]"))),
                    (0,
                    t.jsx)(j, {
                        bottomBorder: e.bottomBorder,
                        hasEvents: c,
                        isMobile: e.isMobile,
                        date: o,
                        isCurrentMonth: d,
                        index: e.index,
                        viewRange: e.viewRange,
                        onClick: () => e.onDateClick(o)
                    }, "".concat(e.index, "-").concat(i))
                }
                ), !e.isMobile && !!(null == a ? void 0 : a.length) && a.map(n => (0,
                t.jsx)(x, {
                    dayRange: d,
                    daysInMonth: e.daysInMonth,
                    event: n,
                    superProperties: (0,
                    p.mg)(e),
                    eventHeight: u,
                    viewId: e.viewId,
                    ctx: e.ctx
                }, n.id))]
            }, e.index)
        }
          , P = 7
          , k = e => {
            var n, i, s;
            let {month: o, year: r, dayOffset: d, isMobile: a} = e
              , {settings: {mondayFirst: c}} = e.ctx
              , u = l()().month(o).year(r).daysInMonth()
              , v = l()().year(r).month(o).date(0).day()
              , m = null === (i = e.view) || void 0 === i ? void 0 : null === (n = i.format) || void 0 === n ? void 0 : n.calendar_by.property
              , h = (null === (s = e.view) || void 0 === s ? void 0 : s.calendarViewRange) === "week" ? 1 : Math.ceil((u + v) / P);
            return !c && v++,
            (0,
            t.jsx)(t.Fragment, {
                children: [...Array(h)].map( (n, i) => {
                    var s, l;
                    return (0,
                    t.jsx)(N, {
                        isMobile: a,
                        calendarBy: m,
                        index: i,
                        month: o,
                        dayOffset: d,
                        viewRange: null === (s = e.view) || void 0 === s ? void 0 : s.calendarViewRange,
                        year: r,
                        firstDayOfMonth: v,
                        daysInMonth: u,
                        superProperties: (0,
                        p.mg)(e),
                        bottomBorder: i !== h - 1,
                        onDateClick: e.onDateClick,
                        viewId: null === (l = e.view) || void 0 === l ? void 0 : l.id,
                        ctx: e.ctx,
                        children: e.items
                    }, i)
                }
                )
            })
        }
        ;
        i(10724);
        let S = (0,
        o.default)( () => Promise.all([i.e(31062), i.e(4352), i.e(14408)]).then(i.bind(i, 14408)).then(e => e.CalendarBottomSheet), {
            loadableGenerated: {
                webpack: () => [14408]
            }
        });
        l().extend(a());
        let I = e => {
            var n, i, o, r, d;
            let {settings: a} = e.ctx
              , {mondayFirst: u} = a
              , {isMobile: v, width: p} = (0,
            c.Z)()
              , [h,j] = (0,
            s.useState)(l()().subtract(0, "month").month())
              , [b,g] = (0,
            s.useState)(l()().year())
              , [x,f] = (0,
            s.useState)(0)
              , _ = null === (i = e.view) || void 0 === i ? void 0 : null === (n = i.format) || void 0 === n ? void 0 : n.calendar_by.property
              , N = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
              , [P,I] = (0,
            s.useState)();
            function C() {
                I(null)
            }
            (0,
            s.useEffect)( () => {
                window.addEventListener("(orientation: portrait)", C),
                (p || 0) > 547 && C()
            }
            , [p]),
            u && N.push(N.shift());
            let M = () => {
                j(l()().month()),
                g(l()().year())
            }
              , T = () => {
                f(0)
            }
              , z = () => {
                let e = l()().month(h).year(b).subtract(1, "month");
                j(e.month()),
                g(e.year())
            }
              , O = () => {
                let e = l()().month(h).year(b).add(1, "month");
                j(e.month()),
                g(e.year())
            }
              , L = () => {
                f(x - 7)
            }
              , R = () => {
                f(x + 7)
            }
              , B = () => {
                let e = l()().add(x, "day").day()
                  , n = l()().add(x, "day").subtract(u ? e - 1 : e, "day")
                  , i = l()(n).add(6, "day");
                return n.month() !== i.month() ? "".concat(l()(n).format("MMM ".concat(n.year() !== i.year() ? "YYYY" : "")), " - ").concat(i.format("MMM YYYY")) : l()().add(x, "day").format("MMMM YYYY")
            }
              , E = (null === (o = e.view) || void 0 === o ? void 0 : o.calendarViewRange) === "week" ? B() : l()().month(h).year(b).format("MMMM YYYY")
              , D = (null === (r = e.view) || void 0 === r ? void 0 : r.calendarViewRange) === "week" ? {
                prev: L,
                next: R,
                current: T
            } : {
                prev: z,
                next: O,
                current: M
            };
            return (0,
            t.jsxs)("div", {
                dir: "ltr",
                className: "notion-collection-calendar",
                children: [(0,
                t.jsx)(m, {
                    headerDate: E,
                    onClickEvents: D
                }), (0,
                t.jsx)("div", {
                    dir: "ltr",
                    className: "notion-collection-calendar__week-days",
                    children: N.map(e => (0,
                    t.jsx)("div", {
                        className: "notion-collection-calendar__week-day-item",
                        children: e
                    }, e))
                }), (0,
                t.jsx)(k, {
                    ...e,
                    month: h,
                    year: b,
                    dayOffset: x,
                    isMobile: v,
                    onDateClick: e => {
                        v && I(e)
                    }
                }), P ? (0,
                t.jsx)(S, {
                    viewId: null === (d = e.view) || void 0 === d ? void 0 : d.id,
                    title: l()(P).format("MMMM D, YYYY"),
                    items: y(w(e.items, l()(P).startOf("day").toString(), l()(P).endOf("day").toString(), _), _).filter(e => !!e.start_date),
                    ctx: e.ctx,
                    superProperties: e.superProperties
                }, P) : null]
            })
        }
    },
    96436: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
            z: function() {
                return CollectionCard
            }
        });
        var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27573)
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7653)
          , _lib_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58416)
          , _lib_super_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90464)
          , _lib_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67368)
          , _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63884)
          , _CollectionCardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69869)
          , _collection_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14370)
          , _collection_card_scss__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_collection_card_scss__WEBPACK_IMPORTED_MODULE_6__);
        let evalSuperFunction = func => {
            try {
                return eval(func)
            } catch (e) {
                console.log("ERROR", e)
            }
        }
          , CollectionCard = e => {
            let {settings: n} = e.ctx
              , i = (0,
            _lib_super_properties__WEBPACK_IMPORTED_MODULE_2__.P)("link", null == e ? void 0 : e.values, null == e ? void 0 : e.superProperties)
              , t = (0,
            _lib_super_properties__WEBPACK_IMPORTED_MODULE_2__.P)("function", null == e ? void 0 : e.values, null == e ? void 0 : e.superProperties)
              , s = t ? evalSuperFunction(t) : void 0
              , o = n.pageProperties || e.hasContent || i ? i || e.uri : null;
            return (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: (0,
                _lib_util__WEBPACK_IMPORTED_MODULE_3__.wj)(e.id),
                onClick: s,
                className: (0,
                _lib_styles__WEBPACK_IMPORTED_MODULE_7__.cn)("notion-collection-card", e.viewType, e.hasContent || i || s ? void 0 : "no-click"),
                style: e.style,
                children: [o ? (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Link__WEBPACK_IMPORTED_MODULE_4__.r, {
                    uri: o,
                    className: "notion-collection-card__anchor",
                    children: (0,
                    _lib_util__WEBPACK_IMPORTED_MODULE_3__.S$)(e.title)
                }) : null, (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollectionCardContent__WEBPACK_IMPORTED_MODULE_5__.a, {
                    ...e
                })]
            }, "".concat(e.viewId, ":::").concat((0,
            _lib_util__WEBPACK_IMPORTED_MODULE_3__.wj)(e.id)))
        }
    },
    69869: function(e, n, i) {
        "use strict";
        i.d(n, {
            a: function() {
                return u
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(61025)
          , o = i.n(s)
          , r = i(58416)
          , l = i(67368)
          , d = i(58846)
          , a = i(92198);
        i(14370);
        let c = {
            small: 180,
            medium: 260,
            large: 320
        }
          , u = e => {
            var n, i, s, u, v, m;
            let {settings: p} = e.ctx
              , h = e.cardCoverPosition || (null == e ? void 0 : e.coverPosition)
              , j = "number" == typeof h ? 0 === h ? "center 100%" : "center ".concat(100 * (1 - h || .5), "%") : "center 50%"
              , b = (null == e ? void 0 : null === (n = e.viewCovers) || void 0 === n ? void 0 : n[e.viewId]) || e.cover
              , g = e.values && e.values.length ? e.values.filter(n => !Object.values((0,
            l.mg)(e)).includes(n.id)).filter(e => {
                var n;
                return !!e.value && (null === (n = e.value) || void 0 === n ? void 0 : n.length) !== 0 && "title" !== e.type
            }
            ) : [];
            return (0,
            t.jsxs)(t.Fragment, {
                children: [e.hasCover && b ? (0,
                t.jsx)(d.t, {
                    src: b,
                    alt: (null === (s = e.title) || void 0 === s ? void 0 : null === (i = s[0]) || void 0 === i ? void 0 : i[0]) || "item",
                    className: (0,
                    r.cn)("notion-collection-card__cover", e.coverSize, e.hideTitle && !(g && g.length) ? "only-cover" : void 0),
                    width: 3 * c[e.coverSize || "medium"],
                    height: (null == p ? void 0 : null === (u = p.theme) || void 0 === u ? void 0 : u.collectionCard)["coverHeight".concat(o()(e.coverSize || "medium"))],
                    objectFit: e.containImage ? "contain" : "cover",
                    objectPosition: j
                }) : e.hasCover ? (0,
                t.jsx)("div", {
                    style: {
                        width: "100%",
                        height: (null == p ? void 0 : null === (v = p.theme) || void 0 === v ? void 0 : v.collectionCard)["coverHeight".concat(o()(e.coverSize || "medium"))]
                    }
                }) : null, (null == g ? void 0 : g.length) || !e.hideTitle ? (0,
                t.jsxs)("div", {
                    className: (0,
                    r.cn)("notion-collection-card__content", "notion-collection-card__property-list", e.hideTitle ? "no-title" : void 0),
                    children: [e.hideTitle ? null : (0,
                    t.jsx)(a.Z, {
                        type: "title",
                        value: e.title,
                        className: "notion-collection-card__property",
                        icon: (null == e ? void 0 : null === (m = e.title) || void 0 === m ? void 0 : m.length) ? e.icon || (e.hasContent ? "page" : void 0) : void 0,
                        iconSize: 16
                    }, e.id + "-title"), (null == g ? void 0 : g.length) ? g.map(n => (0,
                    t.jsx)(a.Z, {
                        wrap: e.tableWrap,
                        ...n,
                        className: "notion-collection-card__property",
                        componentType: "collection-card"
                    }, n.id)) : null]
                }) : null]
            })
        }
    },
    24535: function(e, n, i) {
        "use strict";
        i.d(n, {
            z: function() {
                return t.z
            }
        });
        var t = i(96436)
    },
    21154: function(e, n, i) {
        "use strict";
        i.d(n, {
            X: function() {
                return l
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(18609);
        i(62854);
        let o = e => (0,
        t.jsx)("a", {
            className: "notion-anchor",
            href: "#".concat(e.href)
        });
        var r = i(92204);
        i(9424);
        let l = e => {
            var n, i, l;
            return (0,
            t.jsxs)("h3", {
                className: "notion-collection__header",
                children: [(0,
                t.jsx)(o, {
                    href: e.id
                }), (null === (n = e.view) || void 0 === n ? void 0 : n.icon) && e.view.icon.startsWith ? (0,
                t.jsx)("div", {
                    className: "notion-collection__header-icon",
                    children: (0,
                    t.jsx)(s.J, {
                        src: (null === (i = e.view) || void 0 === i ? void 0 : i.icon) || e.icon,
                        size: 21,
                        width: 21,
                        height: 21
                    })
                }) : null, (0,
                t.jsx)(r.m, {
                    children: (null === (l = e.view) || void 0 === l ? void 0 : l.title) || e.title
                })]
            })
        }
    },
    46002: function(e, n, i) {
        "use strict";
        i.d(n, {
            n: function() {
                return _
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(58416)
          , o = i(67368);
        i(6989);
        let r = e => {
            var n, i;
            let r = (null === (i = e.view) || void 0 === i ? void 0 : null === (n = i.visibleColumns) || void 0 === n ? void 0 : n.filter(n => !Object.values((0,
            o.mg)(e)).includes(n.id))) || [];
            return (0,
            t.jsx)("tr", {
                children: r.map(e => (0,
                t.jsx)("th", {
                    className: (0,
                    s.cn)("notion-collection-table__head-cell", e.type),
                    style: e.width ? {
                        width: "".concat(e.width + 2, "px")
                    } : {},
                    children: e.name
                }, e.id))
            })
        }
        ;
        var l = i(1138);
        let d = e => {
            var n, i, d, a;
            let c = (null === (n = e.view) || void 0 === n ? void 0 : n.format) || {}
              , u = !!(null == e ? void 0 : null === (i = e.view) || void 0 === i ? void 0 : i.toggleBy);
            return (0,
            t.jsx)("div", {
                className: "notion-collection-table__wrapper",
                children: (0,
                t.jsxs)("table", {
                    className: (0,
                    s.cn)("notion-collection-table", (null == c ? void 0 : c.table_wrap) ? "wrap-cells" : void 0),
                    children: [(0,
                    t.jsx)("thead", {
                        className: "notion-collection-table__head",
                        children: (0,
                        t.jsx)(r, {
                            ...e
                        })
                    }), (0,
                    t.jsx)("tbody", {
                        className: "notion-collection-table__body",
                        children: (null === (a = e.items) || void 0 === a ? void 0 : null === (d = a.filter(e => e.values && !e.isSubItem)) || void 0 === d ? void 0 : d.map(n => {
                            var i;
                            return (0,
                            t.jsx)(l.TableRow, {
                                ...n,
                                ctx: e.ctx,
                                displaySubItems: u,
                                superProperties: (0,
                                o.mg)(e),
                                tableWrap: null === (i = e.view) || void 0 === i ? void 0 : i.tableWrap,
                                allItems: e.items
                            }, n.id)
                        }
                        )) || []
                    })]
                })
            })
        }
        ;
        var a = i(24535);
        i(96679);
        let c = e => {
            var n, i;
            let r = !e.hideCover && (null === (n = e.items) || void 0 === n ? void 0 : n.some(n => {
                var i, t;
                return n.cover || (null === (t = n.viewCovers) || void 0 === t ? void 0 : t[null === (i = e.view) || void 0 === i ? void 0 : i.id])
            }
            ))
              , l = (null === (i = e.items) || void 0 === i ? void 0 : i.map(n => {
                var i, s, l;
                return (0,
                t.jsx)(a.z, {
                    ...n,
                    superProperties: (0,
                    o.mg)(e),
                    hasCover: r,
                    hideTitle: !!(null === (i = e.view) || void 0 === i ? void 0 : i.hideTitle),
                    containImage: e.containImage,
                    coverSize: e.coverSize,
                    tableWrap: null === (s = e.view) || void 0 === s ? void 0 : s.tableWrap,
                    viewType: "gallery",
                    viewId: null === (l = e.view) || void 0 === l ? void 0 : l.id,
                    ctx: e.ctx
                }, n.id)
            }
            )) || [];
            return (0,
            t.jsx)("div", {
                className: (0,
                s.cn)("notion-collection-gallery", e.hideBorderTop ? "no-border-top" : "", e.grouped ? "grouped" : "", e.coverSize),
                children: l
            })
        }
        ;
        var u = i(82110);
        i(55195);
        let v = e => {
            var n, i, r;
            let l = !!(null == e ? void 0 : null === (n = e.view) || void 0 === n ? void 0 : n.toggleBy)
              , d = (null === (r = e.items) || void 0 === r ? void 0 : null === (i = r.filter(e => e.values && !e.isSubItem)) || void 0 === i ? void 0 : i.map(n => (0,
            t.jsx)(u.w, {
                ...n,
                ctx: e.ctx,
                superProperties: (0,
                o.mg)(e),
                displaySubItems: l,
                allItems: e.items
            }, n.id))) || [];
            return (0,
            t.jsx)("div", {
                className: (0,
                s.cn)("notion-collection-list", e.hideBorderTop ? "no-border-top" : ""),
                children: d
            })
        }
        ;
        var m = i(92198)
          , p = i(1746);
        i(26354);
        let h = e => {
            var n, i, r, l;
            let d = (null == e ? void 0 : null === (r = e.view) || void 0 === r ? void 0 : null === (i = r.format) || void 0 === i ? void 0 : null === (n = i.board_columns_by) || void 0 === n ? void 0 : n.disableBoardColorColumns) === !1
              , a = (null == e ? void 0 : null === (l = e.items) || void 0 === l ? void 0 : l.map(n => {
                var i, s;
                return (0,
                t.jsx)(b, {
                    ...n,
                    viewId: null === (i = e.view) || void 0 === i ? void 0 : i.id,
                    coverSize: e.coverSize,
                    superProperties: (0,
                    o.mg)(e),
                    hideCover: e.hideCover,
                    containImage: e.containImage,
                    group: !!e.grouped,
                    showColumnColors: d,
                    tableWrap: null === (s = e.view) || void 0 === s ? void 0 : s.tableWrap,
                    ctx: e.ctx
                }, n.column.id)
            }
            )) || []
              , c = a.map( () => "var(--collection-card-cover-size-".concat(e.coverSize, ")")).join(" ");
            return (0,
            t.jsx)("div", {
                className: (0,
                s.cn)("notion-collection-board", e.hideBorderTop ? "no-border-top" : "", e.grouped ? "grouped" : "", e.coverSize),
                style: {
                    gridTemplateColumns: c
                },
                children: a
            })
        }
          , j = e => {
            var n, i, s, o, r, l;
            return (0,
            t.jsx)(m.Z, {
                type: null == e ? void 0 : null === (i = e.column) || void 0 === i ? void 0 : null === (n = i.title) || void 0 === n ? void 0 : n.type,
                value: null == e ? void 0 : null === (o = e.column) || void 0 === o ? void 0 : null === (s = o.title) || void 0 === s ? void 0 : s.value,
                icon: null == e ? void 0 : null === (l = e.column) || void 0 === l ? void 0 : null === (r = l.title) || void 0 === r ? void 0 : r.icon,
                className: "notion-collection-board__column-header"
            })
        }
          , b = e => {
            var n, i, o, r, l, d, c;
            let u = (0,
            p.iI)((null === (n = e.column) || void 0 === n ? void 0 : n.color) || (null === (l = e.column) || void 0 === l ? void 0 : null === (r = l.title) || void 0 === r ? void 0 : null === (o = r.value) || void 0 === o ? void 0 : null === (i = o[0]) || void 0 === i ? void 0 : i.color) || "default", "background");
            return (0,
            t.jsxs)("div", {
                className: (0,
                s.cn)("notion-collection-board__column", u && e.showColumnColors ? (0,
                p.Of)(u, !0) : ""),
                children: [e.group ? null : (0,
                t.jsx)(j, {
                    column: e.column
                }), null === (d = e.items) || void 0 === d ? void 0 : d.map(n => (0,
                t.jsx)("div", {
                    className: "notion-collection-board__item",
                    children: (0,
                    t.jsx)(a.z, {
                        ...n,
                        superProperties: e.superProperties,
                        hasCover: !e.hideCover && !!n.cover,
                        containImage: e.containImage,
                        coverSize: e.coverSize,
                        viewType: "board",
                        viewId: e.viewId,
                        tableWrap: e.tableWrap,
                        ctx: e.ctx
                    })
                }, n.id))]
            }, null === (c = e.column) || void 0 === c ? void 0 : c.value)
        }
        ;
        var g = i(30925)
          , x = i(67659)
          , f = i(45777);
        i(71745);
        let w = e => {
            let {group: n, collectionComponent: i, viewProps: s} = e
              , o = "board" === s.view.type
              , r = s.view.format.collection_group_by
              , l = [];
            return l = o && r ? s.items.map(e => ({
                ...e,
                items: e.items.filter( (n, i) => e.items.findIndex(e => {
                    let {id: i} = e;
                    return i === n.id
                }
                ) === i).filter(e => Object.values(n.blocks).some(n => (null == n ? void 0 : n.blockIds) && n.blockIds.includes(e.id)))
            })) : s.items.reduce( (e, i) => {
                if ((null == n ? void 0 : n.blockIds) && n.blockIds.includes(i.id)) {
                    var t;
                    e.push(i),
                    (null === (t = i.subItems) || void 0 === t ? void 0 : t.length) && i.subItems.forEach(i => {
                        if (!((null == n ? void 0 : n.blockIds) && n.blockIds.includes(i))) {
                            let n = s.items.find(e => e.id === i);
                            e.push(n)
                        }
                    }
                    )
                }
                return e
            }
            , []),
            (0,
            t.jsx)(i, {
                groupTitle: n.title.value,
                grouped: !0,
                ...s,
                items: l
            })
        }
          , y = e => {
            let {viewProps: n, viewType: i, gridTemplateColumns: s, collectionComponent: o} = e
              , r = n.view.groups;
            return (0,
            t.jsxs)("div", {
                className: "notion-collection-group__".concat(i),
                children: [(0,
                t.jsx)("div", {
                    className: "notion-collection-group__header",
                    style: {
                        gridTemplateColumns: s
                    },
                    children: n.items.map(e => {
                        var i;
                        return (null === (i = n.view) || void 0 === i ? void 0 : i.type) === "board" ? (0,
                        t.jsx)(j, {
                            ...e
                        }, e.id) : null
                    }
                    )
                }), r.map( (e, i) => e.hidden ? null : (0,
                t.jsxs)(f.GroupedCollectionSection, {
                    index: i,
                    isBoard: "board" === n.view.type,
                    collectionComponent: (0,
                    t.jsx)(w, {
                        group: e,
                        collectionComponent: o,
                        viewProps: n
                    }),
                    children: [(0,
                    t.jsx)(x.d, {
                        className: "notion-collection-group__section-toggle"
                    }), (0,
                    t.jsx)(m.Z, {
                        type: e.title.type,
                        value: e.title.value
                    })]
                }, i))]
            })
        }
          , _ = e => {
            var n, i, s, o, r, l, a, u, m, p, j, b, x, f, w, _, N, P, k, S, I, C, M;
            let {records: T} = e.ctx
              , z = null === (n = e.view) || void 0 === n ? void 0 : n.type
              , O = null === (i = e.view) || void 0 === i ? void 0 : i.toggleBy
              , L = (e, n) => n.map(n => {
                var i, t;
                let s = (null === (i = e.propertyValues) || void 0 === i ? void 0 : i[n.id]) || (null === (t = e.properties) || void 0 === t ? void 0 : t[n.id]);
                return "board" !== z || (null == s ? void 0 : s.length) ? {
                    ...n,
                    value: s,
                    options: null
                } : null
            }
            ).filter(e => !!e)
              , R = e => {
                var n, i, t, s;
                return O ? null === (n = (null === (i = e.propertyValues) || void 0 === i ? void 0 : i[O.property]) || (null === (s = e.values) || void 0 === s ? void 0 : null === (t = s.find(e => (null == e ? void 0 : e.id) === O.property)) || void 0 === t ? void 0 : t.value)) || void 0 === n ? void 0 : n.map(e => {
                    var n, i, t, s;
                    let o = null == e ? void 0 : null === (t = e[1]) || void 0 === t ? void 0 : null === (i = t[0]) || void 0 === i ? void 0 : null === (n = i[1]) || void 0 === n ? void 0 : n.id
                      , r = o ? T.block[o] || (null === (s = Object.values(T.block)) || void 0 === s ? void 0 : s.find(e => (null == e ? void 0 : e.blockId) === o || (null == e ? void 0 : e.id) === o)) : null;
                    return null == r ? void 0 : r.id
                }
                ).filter(e => !!e) : []
            }
              , B = (e, n, i, t) => {
                let s = []
                  , o = (n || []).map(o => {
                    var r, l, d, a, c, u, v, m, p, h, j, b;
                    if ("string" == typeof o) {
                        let b = {
                            ...(null === (r = T.block) || void 0 === r ? void 0 : r[o]) ? null === (l = T.block) || void 0 === l ? void 0 : l[o] : {}
                        };
                        if (b.id) {
                            if (b.values = L(b, i),
                            (null == O ? void 0 : O.property) && ["table", "list"].includes(e)) {
                                let e = (null === (d = b.values) || void 0 === d ? void 0 : d.length) && (null === (p = b.propertyValues) || void 0 === p ? void 0 : null === (m = p[O.relatedProperty]) || void 0 === m ? void 0 : null === (v = m[0]) || void 0 === v ? void 0 : null === (u = v[1]) || void 0 === u ? void 0 : null === (c = u[0]) || void 0 === c ? void 0 : null === (a = c[1]) || void 0 === a ? void 0 : a.id)
                                  , i = null === (h = Object.values(T.block)) || void 0 === h ? void 0 : h.find(n => (null == n ? void 0 : n.blockId) === e || (null == n ? void 0 : n.id) === e)
                                  , o = !!i && n.includes(i.id);
                                b.subItems = R(b),
                                (null === (j = b.subItems) || void 0 === j ? void 0 : j.length) && (s = [...s, ...b.subItems]),
                                (o || t) && (b.isSubItem = !0)
                            }
                            return b
                        }
                    } else {
                        let e = null === (b = T.block) || void 0 === b ? void 0 : b[o.id];
                        return e ? {
                            ...o,
                            ...e
                        } : null
                    }
                }
                ).filter(e => !!e)
                  , r = s.filter(e => !n.includes(e));
                return r.length ? [...o, ...B(e, r, i, !0)] : o
            }
              , E = {
                ...e,
                hideBorderTop: !1
            }
              , D = (null === (s = e.view) || void 0 === s ? void 0 : s.format) || {}
              , W = (null === (o = e.view) || void 0 === o ? void 0 : o.visibleColumns) || []
              , Y = B(null === (r = e.view) || void 0 === r ? void 0 : r.type, null === (l = e.view) || void 0 === l ? void 0 : l.items, W);
            switch (null === (a = e.view) || void 0 === a ? void 0 : a.type) {
            case "board":
                E.coverSize = (null == D ? void 0 : D.board_cover_size) || "medium",
                E.containImage = (null == D ? void 0 : D.board_cover_aspect) === "contain",
                E.hideCover = !(null == D ? void 0 : null === (b = D.board_cover) || void 0 === b ? void 0 : b.type),
                E.items = (null === (f = e.view) || void 0 === f ? void 0 : null === (x = f.boardItems) || void 0 === x ? void 0 : x.map(n => {
                    var i;
                    return {
                        ...n,
                        items: B(null === (i = e.view) || void 0 === i ? void 0 : i.type, n.items, W)
                    }
                }
                )) || [];
                break;
            case "gallery":
                E.coverSize = D.gallery_cover_size || "medium",
                E.containImage = (null == D ? void 0 : D.gallery_cover_aspect) === "contain",
                E.hideCover = !(null == D ? void 0 : null === (w = D.gallery_cover) || void 0 === w ? void 0 : w.type),
                E.items = Y;
                break;
            case "calendar":
            case "table":
            case "list":
            case "page":
                E.items = Y
            }
            if ((null === (m = E.view) || void 0 === m ? void 0 : null === (u = m.format) || void 0 === u ? void 0 : u.collection_groups) && ((null === (j = E.view) || void 0 === j ? void 0 : null === (p = j.groups) || void 0 === p ? void 0 : p.length) || 0) > 0) {
                let n = "";
                return (null === (_ = E.view) || void 0 === _ ? void 0 : _.type) === "board" && (n = (null === (S = e.view) || void 0 === S ? void 0 : null === (k = S.boardItems) || void 0 === k ? void 0 : null === (P = k.map( () => "var(--collection-card-cover-size-".concat(E.coverSize, ")"))) || void 0 === P ? void 0 : P.join(" ")) || ""),
                (null == E ? void 0 : null === (N = E.items) || void 0 === N ? void 0 : N.length) ? (0,
                t.jsx)(y, {
                    viewType: z,
                    viewProps: E,
                    gridTemplateColumns: n,
                    collectionComponent: "table" === z ? d : "gallery" === z ? c : "list" === z ? v : "board" === z ? h : null
                }) : null
            }
            {
                let n = null == e ? void 0 : null === (C = e.view) || void 0 === C ? void 0 : null === (I = C.format) || void 0 === I ? void 0 : I.hide_linked_collection_name;
                switch (E.hideBorderTop = !!(n && !e.hasMultipleViews),
                z) {
                case "table":
                    return (0,
                    t.jsx)(d, {
                        ...E
                    });
                case "gallery":
                    return (0,
                    t.jsx)(c, {
                        ...E
                    });
                case "list":
                    return (0,
                    t.jsx)(v, {
                        ...E
                    });
                case "board":
                    return (0,
                    t.jsx)(h, {
                        ...E
                    });
                case "calendar":
                    return (0,
                    t.jsx)(g.Calendar, {
                        ...E
                    });
                case "page":
                    return (0,
                    t.jsx)(t.Fragment, {
                        children: null === (M = e.wikiPage) || void 0 === M ? void 0 : M.children
                    });
                default:
                    return console.log('Collection view type "'.concat(z, '" is unsupported')),
                    (0,
                    t.jsx)(t.Fragment, {})
                }
            }
        }
    },
    97821: function(e, n, i) {
        "use strict";
        i.d(n, {
            CollectionWithViewSwitcher: function() {
                return m
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(58416)
          , r = i(46002)
          , l = i(21154)
          , d = i(98767)
          , a = i(10762)
          , c = i(39227)
          , u = i(18609);
        let v = e => {
            let {containerRef: n, isShown: i, onOpen: o, onClose: r} = (0,
            a.O)()
              , [l,d] = (0,
            s.useState)(e.views[0])
              , v = e.views.filter(e => (null == e ? void 0 : e.type) !== "timeline");
            return (0,
            t.jsx)(c.L, {
                selectedOption: {
                    type: l.type,
                    label: l.name,
                    value: l.id,
                    icon: l.icon
                },
                containerRef: n,
                isShown: i,
                onOpen: o,
                onClose: r,
                children: (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("div", {
                        className: "notion-dropdown__menu-header",
                        children: (0,
                        t.jsxs)("p", {
                            children: [v.length, " views"]
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "notion-dropdown__option-list",
                        children: v.map(n => (0,
                        t.jsxs)("div", {
                            className: "notion-dropdown__option ".concat(n.id === l.id ? "active" : ""),
                            onClick: () => {
                                d(n),
                                e.onClick(n),
                                r()
                            }
                            ,
                            children: [(0,
                            t.jsx)("div", {
                                className: "notion-dropdown__option-icon",
                                children: n.icon ? (0,
                                t.jsx)(u.J, {
                                    src: n.icon,
                                    size: 16,
                                    width: 16,
                                    height: 16
                                }) : (0,
                                t.jsx)(u.J, {
                                    type: "".concat("page" === n.type ? "list" : n.type, "Collection"),
                                    size: 16,
                                    width: 16,
                                    height: 16
                                })
                            }), (0,
                            t.jsx)("p", {
                                children: n.name
                            })]
                        }, n.id))
                    })]
                })
            })
        }
          , m = e => {
            var n, i;
            let {views: a, superProperties: c, ctx: u} = e
              , [m,p] = (0,
            s.useState)(null == a ? void 0 : a[0])
              , h = "page" === m.type
              , j = (0,
            o.cn)("notion-collection__header-wrapper", h ? "notion-wiki__wrapper" : "");
            return (0,
            t.jsx)(d.J, {
                ...e,
                header: "collection_page" === e.type ? a && a.length > 1 ? (0,
                t.jsx)("div", {
                    className: j,
                    children: (0,
                    t.jsx)(v, {
                        views: a,
                        onClick: e => p(e)
                    })
                }) : null : e.isRoot && a && a.length > 1 ? (0,
                t.jsx)("div", {
                    className: j,
                    children: (0,
                    t.jsx)(v, {
                        views: a,
                        onClick: e => p(e)
                    })
                }) : e.isRoot || (null == m ? void 0 : null === (n = m.format) || void 0 === n ? void 0 : n.hide_linked_collection_name) && (!a || a.length <= 1) ? null : (0,
                t.jsxs)("div", {
                    className: j,
                    children: [(null == m ? void 0 : null === (i = m.format) || void 0 === i ? void 0 : i.hide_linked_collection_name) ? null : (0,
                    t.jsx)(l.X, {
                        ...e,
                        view: m
                    }), a && a.length > 1 ? (0,
                    t.jsx)(v, {
                        views: a,
                        onClick: e => p(e)
                    }) : null]
                }),
                children: (0,
                t.jsx)(r.n, {
                    view: m,
                    hasMultipleViews: !!(null == a ? void 0 : a.length),
                    superProperties: c,
                    wikiPage: h ? e : void 0,
                    ctx: u
                })
            })
        }
    },
    98767: function(e, n, i) {
        "use strict";
        i.d(n, {
            J: function() {
                return l
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(58416)
          , o = i(89452)
          , r = i(67368);
        let l = e => {
            var n;
            let {settings: i} = e.ctx
              , l = null === (n = e.collectionId) || void 0 === n ? void 0 : n.split("-").join("")
              , d = null == e.fullWidth || e.fullWidth
              , a = (null == i ? void 0 : i.footer) && i.footer.type !== o.ZX.None;
            return "collection_page" === e.type || e.isRoot ? (0,
            t.jsxs)("article", {
                id: (0,
                r.wj)(e.id),
                className: (0,
                s.cn)("notion-root", d ? "full-width" : "max-width", a ? "has-footer" : "", "notion-collection", "notion-collection-page", l ? "collection-".concat(l) : ""),
                children: [e.header, e.children]
            }) : (0,
            t.jsxs)("div", {
                id: (0,
                r.wj)(e.id),
                className: (0,
                s.cn)("notion-collection", "inline", l ? "collection-".concat(l) : ""),
                children: [e.header, e.children]
            })
        }
    },
    45777: function(e, n, i) {
        "use strict";
        i.d(n, {
            GroupedCollectionSection: function() {
                return r
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(58416);
        let r = e => {
            let {collectionComponent: n, isBoard: i, index: r, children: l} = e
              , [d,a] = (0,
            s.useState)(!0);
            return (0,
            t.jsxs)("div", {
                className: (0,
                o.cn)("notion-collection-group__section", d ? "open" : "", i ? "board" : ""),
                children: [(0,
                t.jsx)("div", {
                    onClick: () => a(!d),
                    className: (0,
                    o.cn)("notion-collection-group__section-header", i ? "no-border" : "", r > 0 ? "not-first" : ""),
                    children: l
                }), d ? n : null]
            })
        }
    },
    82110: function(e, n, i) {
        "use strict";
        i.d(n, {
            w: function() {
                return c
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(67368)
          , o = i(90464)
          , r = i(63884)
          , l = i(92198)
          , d = i(51921)
          , a = i(29060);
        let c = e => {
            var n, i, c, u;
            let {settings: v} = e.ctx
              , m = !!(null === (n = e.subItems) || void 0 === n ? void 0 : n.length)
              , p = !!(e.displaySubItems && m)
              , h = (0,
            o.P)("link", null == e ? void 0 : e.values, null == e ? void 0 : e.superProperties)
              , j = v.pageProperties || e.hasContent || h ? h || e.uri : null
              , b = (0,
            t.jsxs)(a.ListRowRoot, {
                id: e.id,
                uri: j,
                children: [j ? (0,
                t.jsx)(r.r, {
                    uri: j,
                    className: "notion-collection-list__item-anchor"
                }) : null, (0,
                t.jsx)(l.Z, {
                    type: "title",
                    value: e.title,
                    icon: (null == e ? void 0 : null === (i = e.title) || void 0 === i ? void 0 : i.length) ? e.icon || (e.hasContent ? "page" : void 0) : void 0
                }), (0,
                t.jsx)("div", {
                    className: "notion-collection-list__item-content",
                    children: null === (u = e.values) || void 0 === u ? void 0 : null === (c = u.filter(n => !Object.values((0,
                    s.mg)(e)).includes(n.id))) || void 0 === c ? void 0 : c.map(n => n.value ? (0,
                    t.jsx)(l.Z, {
                        ...n,
                        icon: e.icon,
                        className: "notion-collection-list__item-property"
                    }, n.id) || [] : null)
                })]
            });
            return p ? (0,
            t.jsx)(d.ListSubItemWrapper, {
                ctx: e.ctx,
                superProperties: e.superProperties,
                subItems: e.subItems,
                allItems: e.allItems,
                children: b
            }) : b
        }
    },
    29060: function(e, n, i) {
        "use strict";
        i.d(n, {
            ListRowRoot: function() {
                return r
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(67754)
          , o = i(67368);
        let r = e => {
            let n = (0,
            s.usePathname)();
            return (0,
            t.jsx)("div", {
                id: (0,
                o.wj)(e.id),
                className: "notion-collection-list__item ".concat(n === e.uri ? "active" : ""),
                children: e.children
            }, (0,
            o.wj)(e.id))
        }
    },
    51921: function(e, n, i) {
        "use strict";
        i.d(n, {
            ListSubItemWrapper: function() {
                return a
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(67754)
          , r = i(58416)
          , l = i(67659)
          , d = i(82110);
        let a = e => {
            var n;
            let i = (0,
            o.usePathname)()
              , a = null == e ? void 0 : null === (n = e.subItems) || void 0 === n ? void 0 : n.map(n => {
                var i;
                return null === (i = e.allItems) || void 0 === i ? void 0 : i.find(e => e.id === n)
            }
            ).filter(e => !!e)
              , c = null == a ? void 0 : a.some(e => i === (null == e ? void 0 : e.uri))
              , [u,v] = (0,
            s.useState)(c);
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsxs)("div", {
                    className: "notion-collection-list__toggle-wrapper",
                    children: [(0,
                    t.jsx)("div", {
                        className: (0,
                        r.cn)("notion-toggle", u ? "open" : ""),
                        onClick: () => v(!u),
                        children: (0,
                        t.jsx)("div", {
                            className: "notion-toggle__summary",
                            children: (0,
                            t.jsx)(l.d, {})
                        })
                    }), e.children]
                }), u ? (0,
                t.jsx)("div", {
                    style: {
                        paddingLeft: "calc(var(--list-sub-item-padding))"
                    },
                    children: null == a ? void 0 : a.map(n => (0,
                    t.jsx)(d.w, {
                        ...n,
                        ctx: e.ctx,
                        displaySubItems: !0,
                        superProperties: e.superProperties,
                        allItems: e.allItems
                    }))
                }) : null]
            })
        }
    },
    1138: function(e, n, i) {
        "use strict";
        i.d(n, {
            TableRow: function() {
                return m
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(67368)
          , r = i(58416)
          , l = i(90464)
          , d = i(92198)
          , a = i(67659)
          , c = i(63884);
        i(6989);
        let u = e => "title" === e.col.type ? (0,
        t.jsx)(v, {
            ...e,
            displaySubItems: e.displaySubItems,
            tableWrap: e.tableWrap,
            superProperties: e.superProperties
        }) : (0,
        t.jsx)("td", {
            className: (0,
            r.cn)("notion-collection-table__cell", e.col.type),
            children: (0,
            t.jsx)(d.Z, {
                wrap: e.tableWrap,
                ...e.col
            })
        }, e.col.id)
          , v = e => {
            var n, i, s, o, u;
            let {settings: v} = e.ctx
              , m = (0,
            l.P)("link", null === (n = e.row) || void 0 === n ? void 0 : n.values, e.superProperties)
              , p = (0,
            t.jsx)(d.Z, {
                type: "title",
                value: e.row.title,
                wrap: e.col.wrap || e.tableWrap,
                icon: (null === (s = e.row) || void 0 === s ? void 0 : null === (i = s.title) || void 0 === i ? void 0 : i.length) ? e.row.icon || (e.row.hasContent ? "page" : void 0) : void 0
            })
              , h = v.pageProperties || e.row.hasContent || m ? m || e.row.uri : null
              , j = () => h ? (0,
            t.jsx)(c.r, {
                uri: h,
                id: e.row.id,
                children: p
            }) : p
              , b = () => (0,
            t.jsxs)("div", {
                className: "notion-collection-table__toggle-wrapper",
                children: [(0,
                t.jsx)("div", {
                    className: (0,
                    r.cn)("notion-toggle", e.subItemsVisible ? "open" : ""),
                    onClick: () => e.setSubItemsVisible(!e.subItemsVisible),
                    children: (0,
                    t.jsx)("div", {
                        className: "notion-toggle__summary",
                        children: (0,
                        t.jsx)(a.d, {})
                    })
                }), (0,
                t.jsx)(j, {})]
            })
              , g = () => {
                var n, i;
                return e.displaySubItems && (null == e ? void 0 : null === (i = e.row) || void 0 === i ? void 0 : null === (n = i.subItems) || void 0 === n ? void 0 : n.length) ? (0,
                t.jsx)(b, {}) : (0,
                t.jsx)("div", {
                    style: e.displaySubItems ? {
                        paddingLeft: "calc(var(--table-sub-item-padding) * ".concat((null == e ? void 0 : e.subItemDepth) + 1, ")")
                    } : void 0,
                    children: (0,
                    t.jsx)(j, {})
                })
            }
            ;
            return (0,
            t.jsx)("td", {
                className: (0,
                r.cn)("notion-collection-table__cell", e.col.type, h ? void 0 : "no-click"),
                children: e.isSubItem ? (0,
                t.jsx)("div", {
                    style: (null == e ? void 0 : null === (u = e.row) || void 0 === u ? void 0 : null === (o = u.subItems) || void 0 === o ? void 0 : o.length) ? {
                        paddingLeft: "calc(var(--table-sub-item-padding) * ".concat(null == e ? void 0 : e.subItemDepth, ")")
                    } : void 0,
                    children: (0,
                    t.jsx)(g, {})
                }) : (0,
                t.jsx)(g, {})
            }, e.col.id)
        }
          , m = e => {
            var n;
            let[i,r] = (0,
            s.useState)(!1)
              , l = (null == e ? void 0 : e.subItemDepth) || 0;
            return (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("tr", {
                    className: e.displaySubItems ? "notion-collection-table__sub-item-row" : void 0,
                    children: e.values && e.values.length ? e.values.filter(n => !Object.values((0,
                    o.mg)(e)).includes(n.id)).map(n => (0,
                    t.jsx)(u, {
                        row: e,
                        col: n,
                        ctx: e.ctx,
                        tableWrap: e.tableWrap,
                        displaySubItems: e.displaySubItems,
                        subItemDepth: l,
                        isSubItem: e.isSubItem,
                        subItemsVisible: i,
                        setSubItemsVisible: r,
                        superProperties: e.superProperties
                    }, n.id)) : null
                }, e.id), i ? null == e ? void 0 : null === (n = e.subItems) || void 0 === n ? void 0 : n.map(n => {
                    var i;
                    let s = null == e ? void 0 : null === (i = e.allItems) || void 0 === i ? void 0 : i.find(e => e.id === n);
                    return s ? (0,
                    t.jsx)(m, {
                        ...s,
                        ctx: e.ctx,
                        subItemDepth: l + 1,
                        displaySubItems: e.displaySubItems,
                        superProperties: e.superProperties,
                        allItems: e.allItems
                    }) : null
                }
                ) : null]
            })
        }
    },
    39227: function(e, n, i) {
        "use strict";
        i.d(n, {
            L: function() {
                return l
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(58416)
          , r = i(18609);
        i(26456);
        let l = e => {
            var n, i, l, d;
            let[a,c] = (0,
            s.useState)(0);
            return (0,
            s.useEffect)( () => {
                let n = () => {
                    var e, n, i, t;
                    let s;
                    let o = document.querySelector("#static-renderer > iframe");
                    (null == (s = o ? null == o ? void 0 : null === (i = o.contentWindow) || void 0 === i ? void 0 : null === (n = i.document) || void 0 === n ? void 0 : null === (e = n.querySelector(".notion-dropdown__menu")) || void 0 === e ? void 0 : e.getBoundingClientRect() : null === (t = document.querySelector(".notion-dropdown__menu.open")) || void 0 === t ? void 0 : t.getBoundingClientRect()) ? void 0 : s.x) - a < 20 && c((null == s ? void 0 : s.x) - 30)
                }
                ;
                return e.isShown ? (n(),
                addEventListener("resize", n)) : setTimeout( () => {
                    c(0),
                    removeEventListener("resize", n)
                }
                , 120),
                () => {
                    removeEventListener("resize", n)
                }
            }
            , [e.isShown]),
            (0,
            t.jsxs)("div", {
                ref: e.containerRef,
                className: "notion-dropdown",
                id: e.id,
                children: [(0,
                t.jsx)("div", {
                    onClick: e.isShown ? e.onClose : e.onOpen,
                    children: e.trigger || (0,
                    t.jsxs)("div", {
                        className: "notion-dropdown__button",
                        children: [(null === (n = e.selectedOption) || void 0 === n ? void 0 : n.icon) ? (0,
                        t.jsx)(r.J, {
                            src: e.selectedOption.icon,
                            size: 16,
                            width: 16,
                            height: 16,
                            noTextSize: !0
                        }) : (0,
                        t.jsx)(r.J, {
                            type: "".concat((null === (i = e.selectedOption) || void 0 === i ? void 0 : i.type) === "page" ? "list" : null === (l = e.selectedOption) || void 0 === l ? void 0 : l.type, "Collection"),
                            size: 16,
                            width: 16,
                            height: 16
                        }), (0,
                        t.jsx)("p", {
                            className: "notion-dropdown__button-title",
                            children: null === (d = e.selectedOption) || void 0 === d ? void 0 : d.label
                        }), (0,
                        t.jsx)(r.J, {
                            type: "chevronDown",
                            size: "10px",
                            width: 10,
                            height: 10
                        })]
                    })
                }), (0,
                t.jsx)("div", {
                    className: "notion-dropdown__menu-wrapper",
                    children: (0,
                    t.jsx)("div", {
                        style: a ? {
                            left: "calc(".concat(-1 * a, "px)")
                        } : void 0,
                        className: (0,
                        o.cn)("notion-dropdown__menu", e.isShown ? "animate-in open" : !1 === e.isShown ? "animate-out close" : "initial-state close"),
                        children: e.children
                    })
                })]
            })
        }
    },
    40758: function(e, n, i) {
        "use strict";
        i.d(n, {
            X: function() {
                return d
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(1746)
          , o = i(58416)
          , r = i(67368)
          , l = i(92204);
        i(24571);
        let d = e => {
            switch (e.subType) {
            case "header":
                return (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("span", {
                        className: "notion-heading__anchor",
                        id: e.id
                    }), (0,
                    t.jsx)(l.m, {
                        el: (0,
                        t.jsx)("h1", {
                            id: (0,
                            r.wj)(e.id),
                            className: (0,
                            o.cn)("notion-heading", (0,
                            s.Of)(e.color), e.isToggle ? "toggle" : "")
                        }, e.id),
                        children: e.title
                    })]
                });
            case "sub_header":
                return (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("span", {
                        className: "notion-heading__anchor",
                        id: e.id
                    }), (0,
                    t.jsx)(l.m, {
                        el: (0,
                        t.jsx)("h2", {
                            id: (0,
                            r.wj)(e.id),
                            className: (0,
                            o.cn)("notion-heading", (0,
                            s.Of)(e.color), e.isToggle ? "toggle" : "")
                        }, e.id),
                        children: e.title
                    })]
                });
            default:
                return (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                    t.jsx)("span", {
                        className: "notion-heading__anchor",
                        id: e.id
                    }), (0,
                    t.jsx)(l.m, {
                        el: (0,
                        t.jsx)("h3", {
                            id: (0,
                            r.wj)(e.id),
                            className: (0,
                            o.cn)("notion-heading", (0,
                            s.Of)(e.color), e.isToggle ? "toggle" : "")
                        }, e.id),
                        children: e.title
                    })]
                })
            }
        }
    },
    3902: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            Copy: function() {
                return s
            }
        });
        var t = i(27573);
        i(7653);
        let s = e => (0,
        t.jsx)("svg", {
            className: "notion-icon notion-icon__copy",
            viewBox: "0 0 14 16",
            style: e.style,
            children: (0,
            t.jsx)("path", {
                d: "M2.404 15.322h5.701c1.26 0 1.887-.662 1.887-1.927V12.38h1.154c1.254 0 1.91-.662 1.91-1.928V5.555c0-.774-.158-1.266-.626-1.74L9.512.837C9.066.387 8.545.21 7.865.21H5.463c-1.254 0-1.91.662-1.91 1.928v1.084H2.404c-1.254 0-1.91.668-1.91 1.933v8.239c0 1.265.656 1.927 1.91 1.927zm7.588-6.62c0-.792-.1-1.161-.592-1.665L6.225 3.814c-.452-.462-.844-.58-1.5-.591V2.215c0-.533.28-.832.843-.832h2.38v2.883c0 .726.386 1.113 1.107 1.113h2.83v4.998c0 .539-.276.832-.844.832H9.992V8.701zm-.79-4.29c-.206 0-.288-.088-.288-.287V1.594l2.771 2.818H9.201zM2.503 14.15c-.563 0-.844-.293-.844-.832V5.232c0-.539.281-.837.85-.837h1.91v3.187c0 .85.416 1.26 1.26 1.26h3.14v4.476c0 .54-.28.832-.843.832H2.504zM5.79 7.816c-.24 0-.346-.105-.346-.345V4.547l3.223 3.27H5.791z"
            })
        })
    },
    36423: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            Toggle: function() {
                return u
            }
        });
        var t = i(27573)
          , s = i(7653)
          , o = i(1746)
          , r = i(58416)
          , l = i(67368)
          , d = i(92204)
          , a = i(40758)
          , c = i(82715);
        i(62574);
        let u = e => {
            let[n,i] = (0,
            s.useState)(!1)
              , u = "header" === e.subType ? "notion-toggle-heading-1" : "sub_header" === e.subType ? "notion-toggle-heading-2" : e.subType ? "notion-toggle-heading-3" : "";
            return (0,
            t.jsxs)("div", {
                id: (0,
                l.wj)(e.id),
                className: (0,
                r.cn)("notion-toggle", n ? "open" : "closed", u, (0,
                o.Of)(null == e ? void 0 : e.color)),
                children: [(0,
                t.jsxs)("div", {
                    className: "notion-toggle__summary",
                    onClick: () => i(!n),
                    children: [(0,
                    t.jsx)(c.d, {}), e.subType ? (0,
                    t.jsx)(a.X, {
                        ...e,
                        type: "heading",
                        subType: e.subType,
                        depth: e.depth || 0,
                        title: e.title,
                        isToggle: !0
                    }) : (0,
                    t.jsx)(d.m, {
                        children: e.title
                    })]
                }), n ? (0,
                t.jsx)("div", {
                    className: "notion-toggle__content",
                    children: e.children
                }) : null]
            })
        }
    },
    82715: function(e, n, i) {
        "use strict";
        i.d(n, {
            d: function() {
                return o
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(58416);
        let o = e => {
            let {className: n} = e;
            return (0,
            t.jsx)("div", {
                className: (0,
                s.cn)("notion-toggle__trigger", n),
                children: (0,
                t.jsx)("div", {
                    className: "notion-toggle__trigger_icon",
                    children: (0,
                    t.jsx)("span", {
                        children: "‣"
                    })
                })
            })
        }
    },
    67659: function(e, n, i) {
        "use strict";
        i.d(n, {
            Z: function() {
                return t.Toggle
            },
            d: function() {
                return s.d
            }
        });
        var t = i(36423)
          , s = i(82715)
    },
    55693: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            Tweet: function() {
                return a
            }
        });
        var t = i(27573);
        i(7653);
        var s = i(20582)
          , o = i(67368)
          , r = i(72833);
        i(99823);
        let l = (0,
        s.default)( () => i.e(29779).then(i.bind(i, 29779)), {
            loadableGenerated: {
                webpack: () => [29779]
            }
        });
        function d(e) {
            try {
                return new URL(e).pathname.split("/").pop()
            } catch (e) {
                return
            }
        }
        let a = e => {
            let n = e.tweetId || d(e.source);
            return (0,
            t.jsxs)("div", {
                id: (0,
                o.wj)(n),
                className: "notion-tweet",
                children: [(0,
                t.jsx)(l, {
                    tweetId: n,
                    onTweetLoadSuccess: e => e.style.border = "1px transparent solid"
                }), e.caption ? (0,
                t.jsx)(r.Y, {
                    children: e.caption
                }) : ""]
            }, n)
        }
    },
    90464: function(e, n, i) {
        "use strict";
        i.d(n, {
            P: function() {
                return s
            }
        });
        var t = i(67368);
        let s = (e, n, i) => {
            var s, o, r, l, d, a, c, u;
            if (!i || !n)
                return null;
            let v = null == n ? void 0 : n.find(n => i[e] && n.id === i[e]);
            if (!v)
                return null;
            let m = (0,
            t.S$)(v.value);
            return m.trim().length || "link" !== e || (null === (l = v.value) || void 0 === l ? void 0 : null === (r = l[0]) || void 0 === r ? void 0 : null === (o = r[1]) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : s[0]) !== "a" ? m : null === (u = v.value) || void 0 === u ? void 0 : null === (c = u[0]) || void 0 === c ? void 0 : null === (a = c[1]) || void 0 === a ? void 0 : null === (d = a[0]) || void 0 === d ? void 0 : d[1]
        }
    },
    41155: function() {},
    43314: function() {},
    24177: function() {},
    2134: function() {},
    62854: function() {},
    26402: function() {},
    76584: function() {},
    41790: function() {},
    62290: function() {},
    90485: function() {},
    8650: function() {},
    26354: function() {},
    10724: function() {},
    14370: function() {},
    96679: function() {},
    71745: function() {},
    55195: function() {},
    6989: function() {},
    9424: function() {},
    14541: function() {},
    26456: function() {},
    23789: function() {},
    88076: function() {},
    49339: function() {},
    41243: function() {},
    24571: function() {},
    15012: function() {},
    7543: function() {},
    72653: function() {},
    64027: function() {},
    12750: function() {},
    54225: function() {},
    62315: function() {},
    62574: function() {},
    99823: function() {},
    84823: function() {},
    28840: function() {}
}, function(e) {
    var n = function(n) {
        return e(e.s = n)
    };
    e.O(0, [3799, 37770, 58703, 41586, 59689, 17019, 39706, 5322, 4200, 88709, 10153, 37955, 81293, 60286, 1744], function() {
        return n(82655)
    }),
    _N_E = e.O()
}
]);
