(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/node_modules/@gsap/react/src/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const StickyCard = ()=>{
    _s();
    const stickyCardsData = [
        {
            index: "01",
            title: "Modularity",
            image: "/mexico-b.jpg",
            description: "Every element is built to snap into place. We design modular system where clarity, structure, and reuse come first-no clutter, no excess."
        },
        {
            index: "02",
            title: "Materials",
            image: "/mexico-b.jpg",
            description: "Every element is built to snap into place. We design modular system where clarity, structure, and reuse come first-no clutter, no excess."
        },
        {
            index: "03",
            title: "Modularity",
            image: "/mexico-b.jpg",
            description: "Every element is built to snap into place. We design modular system where clarity, structure, and reuse come first-no clutter, no excess."
        },
        {
            index: "04",
            title: "Modularity",
            image: "/mexico-b.jpg",
            description: "Every element is built to snap into place. We design modular system where clarity, structure, and reuse come first-no clutter, no excess."
        }
    ];
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"])({
        "StickyCard.useGSAP": ()=>{
            const stickyCards = document.querySelectorAll(".sticky-card");
            stickyCards.forEach({
                "StickyCard.useGSAP": (card, index)=>{
                    if (index < stickyCards.length - 1) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: card,
                            start: "top top",
                            endTrigger: stickyCards[stickyCards.length - 1],
                            end: "top top",
                            pin: true,
                            pinSpacing: false
                        });
                    }
                    if (index < stickyCards.length - 1) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                            trigger: stickyCards[index + 1],
                            start: "top bottom",
                            end: "top top",
                            onUpdate: {
                                "StickyCard.useGSAP": (self)=>{
                                    const progress = self.progress;
                                    const scale = 1 - progress * 0.25;
                                    const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                                    const afterOpacity = progress;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                                        scale: scale,
                                        rotation: rotation,
                                        "--after-opacity": afterOpacity
                                    });
                                }
                            }["StickyCard.useGSAP"]
                        });
                    }
                }
            }["StickyCard.useGSAP"]);
        }
    }["StickyCard.useGSAP"], {
        scope: container
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sticky-cards",
        ref: container,
        children: stickyCardsData.map((cardData, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky-card-index",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: cardData.index
                        }, void 0, false, {
                            fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky-card-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky-card-content-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "sticky-card-header",
                                    children: cardData.title
                                }, void 0, false, {
                                    fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                lineNumber: 101,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticy-card-img",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: cardData.image,
                                    alt: cardData.title
                                }, void 0, false, {
                                    fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                lineNumber: 105,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky-card-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky-card-copy-title",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "(About the state)"
                                        }, void 0, false, {
                                            fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                            lineNumber: 112,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                        lineNumber: 111,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky-card-copy-description",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: cardData.description
                                        }, void 0, false, {
                                            fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                        lineNumber: 100,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
                lineNumber: 94,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/bread/webDesign/WEb-DESIgn/Scroll_Animations/drift_card/src/components/StickyCard.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StickyCard, "rHbtpTvjRV8wc+C7qlvIGf1YLV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$bread$2f$webDesign$2f$WEb$2d$DESIgn$2f$Scroll_Animations$2f$drift_card$2f$node_modules$2f40$gsap$2f$react$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGSAP"]
    ];
});
_c = StickyCard;
const __TURBOPACK__default__export__ = StickyCard;
var _c;
__turbopack_context__.k.register(_c, "StickyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=e128e_WEb-DESIgn_Scroll_Animations_drift_card_src_components_StickyCard_tsx_d4a9dbc1._.js.map