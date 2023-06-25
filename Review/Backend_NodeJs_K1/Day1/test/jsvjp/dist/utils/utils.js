import { colorsList as e, wordsList as r } from "../themes/themes.js";
const t = (selector, errorMessage) => {
    "string" == typeof selector && "" !== selector.trim() || o("h1", "error", "Invalid selector");
    const t = document.querySelector(selector); if (!t)
        throw new Error(errorMessage || `No element found matching selector: ${selector}`); return t
},
    n = (selector, errorMessage) => {
        "string" == typeof selector && "" !== selector.trim() || o("h1", "error", "Invalid selector");
        const t = document.querySelectorAll(selector); if (0 === t.length)
            throw new Error(errorMessage || `No elements found matching selector: ${selector}`); return Array.from(t)
    },
    o = (tag, className, text, options) => {
        tag && "string" == typeof tag || o("h1", "error", "Invalid tag name");
        const a = document.createElement(tag); if (text && (a.textContent = text),
            className && a.classList.add(className), options)
            for (let e in options) a.setAttribute(e, options[e]); return t("body").appendChild(a), a
    },
    s = (selector, property, value) => {
        const o = t(selector, `No element matches the selector "${selector}"`);
        o instanceof Array ? o.forEach((e => e.style[property] = value)) : o.style[property] = value
    },
    a = () => { const r = e; return r[Math.floor(Math.random() * r.length)] },
    l = (...data) => {
        data.some((e => void 0 === e)) ? o("h1", "error", "data cannot be undefined")
            : data.forEach((e => {
                const n = o("pre"), s = o("code"); let l;
                try { JSON.parse(e), l = JSON.stringify(JSON.parse(e), null, 2) }
                catch (r) {
                    l = Array.isArray(e) || "object" == typeof e ? JSON.stringify(e, null, 2)
                        : String(e)
                } if (Array.isArray(e) || "object" == typeof e) s.innerText = l;
                else {
                    n.classList.add("code");
                    const e = r, t = new RegExp(Object.keys(e).join("|") + "|[^ws]", "gi"),
                        o = [], c = l.replace(t, (r => {
                            if (e.hasOwnProperty(r))
                                return `<span style="color:${e[r].color}">${r}</span>`;
                            if (/[(){}\[\]]/.test(r)) {
                                let e = a(); if ("(" === r || "{" === r || "[" === r)
                                    return o.push(e), `<span style="color:${e}">${r}</span>`;
                                return `<span style="color:${o.pop() || a()}">${r}</span>`
                            } return r
                        })); s.innerHTML = c
                } n.appendChild(s), t("body").appendChild(n)
            }))
    }; export { t as $, n as $$, o as HTML, s as CSS, l as log };