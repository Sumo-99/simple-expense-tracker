(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{44:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(19),a=n.n(r),s=n(0),o=function(){return Object(s.jsx)("h2",{style:{"text-align":"center"},children:"Expense Tracker"})},i=n(5),u=n(20),l=n(3),j=function(t,e){switch(e.type){case"get_transaction":return Object(l.a)(Object(l.a)({},t),{},{loading:!1,transactions:e.payload});case"delete_transaction":return Object(l.a)(Object(l.a)({},t),{},{transactions:t.transactions.filter((function(t){return t._id!==e.payload}))});case"add_transaction":return Object(l.a)(Object(l.a)({},t),{},{transactions:[].concat(Object(u.a)(t.transactions),[e.payload])});case"error_transaction":return Object(l.a)(Object(l.a)({},t),{},{error:e.payload});default:return t}},d=n(9),b=n.n(d),x={transactions:[],loading:!0},O=Object(c.createContext)(x),p=function(t){var e=t.children,n=Object(c.useReducer)(j,x),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(s.jsx)(O.Provider,{value:{transactions:a.transactions,error:a.error,loading:a.loading,viewTransactions:function(){b.a.get("/api/transaction/").then((function(t){console.log("Success: ",t);var e=t.data;o({type:"get_transaction",payload:e.data})})).catch((function(t){console.log("Error: ",t),o({type:"error_transaction",payload:t.response})}))},deleteTransaction:function(t){b.a.delete("/api/transaction/".concat(t)).then((function(e){console.log("Response: ",e),o({type:"delete_transaction",payload:t})})).catch((function(t){o({type:"error_transaction",payload:t.response})}))},addTransaction:function(t){b.a.post("/api/transaction",t,{headers:{"Content-Type":"application/json"}}).then((function(t){var e=t.data;o({type:"add_transaction",payload:e.data})})).catch((function(t){o({type:"error_transaction",payload:t.response})}))}},children:e})};function h(t){var e=t.toFixed(2).split(".");return"\u20b9 "+("-"===e[0].split("")[0]?"-":"")+e[0].split("").reverse().reduce((function(t,e,n,c){return"-"===e?t:e+(!n||n%3?"":",")+t}),"")+"."+e[1]}var f=function(){var t=Object(c.useContext)(O).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Your Balance"}),Object(s.jsx)("h1",{children:h(t)})]})};function m(t){var e=t.toFixed(2).split(".");return"\u20b9 "+e[0].split("").reverse().reduce((function(t,e,n,c){return"-"===e?t:e+(!n||n%3?"":",")+t}),"")+"."+e[1]}var v=function(){var t=Object(c.useContext)(O).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0),n=-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0);return Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Income"}),Object(s.jsx)("p",{className:"money plus",children:m(e)})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Expense"}),Object(s.jsx)("p",{className:"money minus",children:m(n)})]})]})};function y(t){var e=t.toFixed(2).split(".");return"\u20b9 "+e[0].split("").reverse().reduce((function(t,e,n,c){return"-"===e?t:e+(!n||n%3?"":",")+t}),"")+"."+e[1]}var g=function(t){var e=t.transaction,n=Object(c.useContext)(O).deleteTransaction,r=e.amount<0?"-":"+";return Object(s.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(s.jsxs)("span",{children:[r,y(e.amount)]}),Object(s.jsx)("button",{onClick:function(){return n(e._id)},className:"delete-btn",children:"x"})]})},C=function(){var t=Object(c.useContext)(O),e=t.transactions,n=t.viewTransactions;return Object(c.useEffect)((function(){n()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"History"}),Object(s.jsx)("ul",{className:"list",children:e.map((function(t){return Object(s.jsx)(g,{transaction:t},t.id)}))})]})},N=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(0),o=Object(i.a)(a,2),u=o[0],l=o[1],j=Object(c.useContext)(O).addTransaction,d=function(t){var e={id:Math.floor(1e8*Math.random()),text:n,amount:"sub"===t?-1*u:+u};j(e)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Add new transaction"}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"text",children:"Text"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(s.jsx)("br",{})]}),Object(s.jsx)("input",{type:"number",onChange:function(t){return l(t.target.value)},placeholder:"Enter amount..."})]}),Object(s.jsxs)("div",{className:"btn-bar",children:[Object(s.jsx)("button",{onClick:function(){d("sub")},className:"btn",children:"Add expense"}),Object(s.jsx)("button",{onClick:function(){d("add")},className:"btn",children:"Add income"})]})]})};n(44);var _=function(){return Object(s.jsxs)(p,{children:[Object(s.jsx)(o,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(f,{}),Object(s.jsx)(v,{}),Object(s.jsx)(C,{}),Object(s.jsx)(N,{})]})]})};a.a.render(Object(s.jsx)(_,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d233e7be.chunk.js.map