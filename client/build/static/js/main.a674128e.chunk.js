(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(n,e,t){n.exports=t(26)},19:function(n,e,t){},20:function(n,e,t){},26:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(9),i=t.n(o),c=(t(19),t(20),t(1)),l=t(2);function d(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: center;\n    height: 32px;\n    min-height: 40px;\n    padding: 4px;\n    background: rgba(0,0,0,.15);\n\n    .logo {\n        height: 100%;\n    }\n"]);return d=function(){return n},n}var s=Object(l.a)((function(n){var e=n.className;return r.a.createElement("header",{className:e},r.a.createElement("div",null,r.a.createElement("img",{src:"https://avatars0.githubusercontent.com/u/17697287?s=460&v=4",alt:"",className:"logo"})))}))(d()),u=t(3);function p(){var n=Object(c.a)(["\n    display: flex;\n    padding: 8px 4px 4px 8px;\n\n    .board-title {\n        color: #fff;\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 32px;\n        padding: 0 12px;\n    }\n"]);return p=function(){return n},n}var f=Object(l.a)((function(n){var e=n.className,t=Object(a.useState)({}),o=Object(u.a)(t,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){fetch("/api").then((function(n){return n.json()})).then((function(n){c(n)}))}),[]),r.a.createElement("div",{className:e},r.a.createElement("div",null,r.a.createElement("span",{className:"board-title"},i.title)))}))(p());function m(){var n=Object(c.a)(["\n    color: #172b4d;\n    box-sizing: border-box;\n    -webkit-appearance: none;\n    border-radius: 3px;\n    display: block;\n    line-height: 20px;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    resize: none;\n    padding: 6px 8px;\n    margin: 0 0 4px;\n    width: 100%;\n    border: none;\n    height: ",";\n"]);return m=function(){return n},n}var b=l.a.textarea(m(),(function(n){return n.small?"32px":"90px"}));function x(){var n=Object(c.a)(["\n    width: 32px;\n    height: 32px;\n    font-size: 18px;\n    line-height: 32px;\n    color: #6b778c;\n    text-align: center;\n    cursor: pointer;\n"]);return x=function(){return n},n}function g(){var n=Object(c.a)(["\n    display: inline-block;\n    font-weight: 400;\n    line-height: 20px;\n    margin: 0;\n    padding: 6px 12px;\n    text-align: center;\n    background-color: #5aac44;\n    box-shadow: none;\n    border: none;\n    color: #fff;\n    -webkit-appearance: none;\n    border-radius: 3px;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #61bd4f;\n    }\n"]);return g=function(){return n},n}var h=l.a.button(g()),v=l.a.span(x());function w(){var n=Object(c.a)(["\n    flex: 1 1 auto;\n    margin-bottom: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 0 4px;\n    z-index: 1;\n    min-height: 0;\n\n    .list-card {\n        background-color: #fff;\n        border-radius: 3px;\n        box-shadow: 0 1px 0 rgba(9,30,66,.25);\n        cursor: pointer;\n        display: block;\n        margin-bottom: 8px;\n        max-width: 300px;\n        min-height: 20px;\n        position: relative;\n        text-decoration: none;\n        z-index: 0;\n\n        &:hover {\n            background-color: #f4f5f7;\n        }\n\n        &:hover .edit-card {\n            display: block;\n        }\n    }\n\n    .list-card-detail {\n        display: flex;\n        justify-content: space-between;\n        padding: 6px 8px;\n        margin: 0 0 4px;\n        overflow: hidden;\n        text-decoration: none;\n        word-wrap: break-word;\n    }\n\n    .edit-card {\n        display: none;\n        width: 20px;\n        height: 20px;\n        background-color: #f4f5f7;\n        background-clip: padding-box;\n        background-origin: padding-box;\n        border-radius: 3px;\n        opacity: .8;\n        padding: 4px;\n        position: absolute;\n        right: 2px;\n        top: 2px;\n        background: url(./icon-pencil.svg) 50% 50% no-repeat;\n        background-size: 16px;\n\n        &:hover {\n            background-color: #ebecf0;\n            opacity: 1;\n        }\n    }\n\n    .quick-card-editor {\n        overflow: hidden;\n        overflow-wrap: break-word;\n        resize: none;\n        background: #ebecf0;\n        \n        button {\n            margin: 8px;\n        }\n    }\n\n"]);return w=function(){return n},n}var k=l.a.div(w()),E=function(n){var e=n.cardItems,t=n.setCardItems,o=Object(a.useState)(!1),i=Object(u.a)(o,2),c=i[0],l=i[1],d=Object(a.useState)(null),s=Object(u.a)(d,2),p=s[0],f=s[1],m=Object(a.useRef)();function x(n){13===n.keyCode?(g(),n.preventDefault()):27===n.keyCode&&(t((function(n){return n})),v(),n.preventDefault())}function g(){e[p].title=m.current.value,t(e),v()}function v(){l(!1),f(null)}Object(a.useEffect)((function(){c&&null!==p&&(m.current.focus(),m.current.value=e[p].title)}),[p]);var w=function(n,t){return r.a.createElement("div",{className:"list-card",key:t},r.a.createElement("div",{className:"list-card-detail"},r.a.createElement("div",null,n.title),r.a.createElement("div",{className:"edit-card",onClick:function(){!function(n){c||(console.log(e),l(!0),f(n))}(t)}})))},E=function(n){return r.a.createElement("div",{className:"quick-card-editor",key:n},r.a.createElement(b,{ref:m,onChange:function(n){!function(n){m.current.value=n.target.value}(n)},onKeyDown:function(n){x(n)}}),r.a.createElement(h,{onClick:function(){g()}},"Save"))};return r.a.createElement(k,null,e.map((function(n,e){return c&&e===p?E(e):w(n,e)})))},j=t(4);function y(){var n=Object(c.a)(["\n    padding: 0 4px;\n\n\n\n    .list-card {\n        padding: 5px;\n        background-color: #fff;\n        border-radius: 3px;\n        box-shadow: 0 1px 0 rgba(9,30,66,.25);\n        cursor: pointer;\n        display: block;\n        margin-bottom: 8px;\n        max-width: 300px;\n        min-height: 20px;\n        position: relative;\n        text-decoration: none;\n        z-index: 0;\n    }\n\n    textarea {\n        width: 100%;\n        resize: none;\n        background: none;\n        border: none;\n        box-shadow: none;\n        height: auto;\n        margin-bottom: 4px;\n        max-height: 162px;\n        min-height: 54px;\n        overflow-y: auto;\n    }\n\n    .composer-controls {\n        display: flex;\n\n        > * {\n            margin-right: 6px;\n        }\n    }\n\n\n\n"]);return y=function(){return n},n}var O=l.a.div(y()),C=function(n){var e=n.cardItems,t=n.setCardItems,o=n.isComposing,i=Object(a.useRef)();function c(){n.setIsComposing(!1)}function l(){if(""!==i.current.value){var n={title:i.current.value,completed:!1};t([].concat(Object(j.a)(e),[n])),c()}}return Object(a.useEffect)((function(){o&&i.current.focus()}),[o]),r.a.createElement(O,null,r.a.createElement("div",{className:"list-card"},r.a.createElement("textarea",{ref:i,placeholder:"Enter a title for this card\u2026",onKeyDown:function(n){!function(n){13===n.keyCode?(l(),n.preventDefault()):27===n.keyCode&&(c(),n.preventDefault())}(n)}})),r.a.createElement("div",{className:"composer-controls"},r.a.createElement(h,{onClick:l},"Add Card"),r.a.createElement(v,{onClick:c},"\u2716")))};function N(){var n=Object(c.a)(["\n    .list-wrapper {\n        width: 272px;\n        margin: 0 4px;\n        height: 100%;\n        box-sizing: border-box;\n        display: inline-block;\n        vertical-align: top;\n        white-space: nowrap;\n    }\n\n    .list-content {\n        padding: 8px;\n        background-color: #ebecf0;\n        border-radius: 3px;\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        max-height: 100%;\n        position: relative;\n        white-space: normal;\n    }\n\n    .list-header {\n        flex: 0 0 auto;\n        margin-bottom: 10px;\n        padding: 0 8px;\n        position: relative;\n        min-height: 20px;\n    }\n\n    .list-header-title {\n        font-size: 14px;\n        line-height: 20px;\n        color: #172b4d;\n        font-weight: 600;\n    }\n\n    .board-title {\n        color: #fff;\n        font-size: 18px;\n        font-weight: 700;\n        line-height: 32px;\n        padding: 0 12px;\n    }\n\n    .card-composer-container {\n        color: #5e6c84;\n        border-radius: 3px;\n        flex-grow: 1;\n        margin: 5px;\n        padding: 5px 8px;\n        cursor: pointer;\n\n        &:hover {\n            background-color: rgba(9,30,66,.08);\n            color: #172b4d;\n        }\n    }\n\n"]);return N=function(){return n},n}var z=l.a.div(N()),I=function(n){var e=n.list_title,t=n.list_items,o=Object(a.useState)(!1),i=Object(u.a)(o,2),c=i[0],l=i[1],d=Object(a.useState)(t),s=Object(u.a)(d,2),p=s[0],f=s[1];return r.a.createElement(z,null,r.a.createElement("div",{className:"list-wrapper"},r.a.createElement("div",{className:"list-content"},r.a.createElement("div",{className:"list-header"},r.a.createElement("div",{className:"list-header-title"},e)),r.a.createElement(E,{cardItems:p,setCardItems:f}),c?r.a.createElement(C,{isComposing:c,setIsComposing:l,cardItems:p,setCardItems:f}):r.a.createElement("div",{className:"card-composer-container",onClick:function(){c||l(!0)}},r.a.createElement("span",null,"+ Add another card")))))};function D(){var n=Object(c.a)(["\n    .add-list-wrapper {\n        background-color: #ebecf0;\n        border-radius: 3px;\n        padding: 10px 8px;\n        width: 272px;\n        margin: 0 4px;\n        box-sizing: border-box;\n        display: inline-block;\n        vertical-align: top;\n        white-space: nowrap;\n        color: #fff;\n        \n        &.is-idle {\n            background-color: hsla(0,0%,100%,.24);\n            cursor: pointer;\n            \n            &:hover {\n                background-color: hsla(0,0%,100%,.32);\n            }\n        }\n    }\n\n    .add-list-controls {\n        display: flex;\n\n        button {\n            margin-right: 6px;\n        }\n    }\n\n    .add-list-editor {\n\n        textarea {\n            margin-bottom: 8px;\n            box-shadow: inset 0 0 0 2px #0079bf;\n        }\n    }\n"]);return D=function(){return n},n}var S=l.a.div(D()),_=function(n){var e=n.lists,t=n.setLists,o=Object(a.useState)(!1),i=Object(u.a)(o,2),c=i[0],l=i[1],d=Object(a.useRef)();function s(){if(""!==d.current.value){var n={list_title:d.current.value,list_items:[]};t([].concat(Object(j.a)(e),[n])),l(!1)}}Object(a.useEffect)((function(){c&&d.current.focus()}),[c]);return r.a.createElement(S,null,r.a.createElement("div",{className:"add-list-wrapper ".concat(c?"":"is-idle"),onClick:function(){c||l(!0)}},c?r.a.createElement("div",{className:"add-list-editor"},r.a.createElement(b,{small:!0,ref:d,placeholder:"Enter list title...",onKeyDown:function(n){!function(n){13===n.keyCode?(s(),n.preventDefault()):27===n.keyCode&&(l(!1),n.preventDefault())}(n)}}),r.a.createElement("div",{className:"add-list-controls"},r.a.createElement(h,{onClick:s},"Add Card"),r.a.createElement(v,{onClick:function(){l(!1)}},"\u2716"))):r.a.createElement("div",null,"+ Add another list")))};function A(){var n=Object(c.a)(["\n    display: flex;\n    user-select: none;\n    white-space: nowrap;\n    margin-bottom: 8px;\n    overflow-x: auto;\n    overflow-y: hidden;\n    padding: 8px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: calc(100vh - 120px);\n    width: calc(100% - 16px);\n"]);return A=function(){return n},n}var K=l.a.div(A()),R=function(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1];Object(a.useEffect)((function(){fetch("/api/lists").then((function(n){return n.json()})).then((function(n){o(n)}))}),[]);var i=t.map((function(n,e){return r.a.createElement(I,{list_title:n.list_title,list_items:n.list_items,key:e})}));return r.a.createElement(K,{id:"board"},i,r.a.createElement(_,{lists:t,setLists:o}))};var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(f,null),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a674128e.chunk.js.map