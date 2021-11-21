(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={Filter:"Filter_Filter__oLBW5"}},19:function(t,e,n){},20:function(t,e,n){t.exports={App:"App_App__1IwtU",labelText:"App_labelText__CoK9n"}},3:function(t,e,n){t.exports={contactList:"ContactList_contactList__MhCa-",contactItem:"ContactList_contactItem__3SXm_",contactText:"ContactList_contactText__2SWsM",delBtn:"ContactList_delBtn__3KXDX",icon:"ContactList_icon__9vNcy"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),s=n.n(o),r=(n(19),n(20),n(10)),i=n(2),l=n(8),b=n.n(l),u=n(12),j=n.n(u),d=n(5),m=n.n(d),h=n(0);function f(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],s=c[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),b=l[0],u=l[1];return Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:o,number:b}),u(""),s("")},className:m.a.form,children:[Object(h.jsxs)("label",{className:m.a.label,children:[Object(h.jsx)("p",{className:"labelText",children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:o,onChange:function(t){s(t.target.value)}})]}),Object(h.jsxs)("label",{className:m.a.label,children:[Object(h.jsx)("p",{className:"labelText",children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:function(t){u(t.target.value)}})]}),Object(h.jsx)("button",{type:"submit",className:m.a.btn,children:"Add contact"})]})}var x=n(3),p=n.n(x),O=n(14);function _(t){var e=t.contacts,n=t.handleDel;return Object(h.jsx)("div",{className:"contacts",children:Object(h.jsx)("ul",{className:p.a.contactList,children:e&&e.map((function(t){return Object(h.jsxs)("li",{className:p.a.contactItem,children:[Object(h.jsxs)("p",{className:p.a.contactText,children:[t.name,": ",t.number]}),Object(h.jsx)("button",{className:p.a.delBtn,onClick:function(){n(t.id)},children:Object(h.jsx)(O.a,{className:p.a.icon})})]},t.id)}))})})}var C=n(13),v=n.n(C);function N(t){var e=t.filter,n=t.onChange;return Object(h.jsxs)("label",{className:v.a.Filter,children:[Object(h.jsx)("p",{className:"labelText",children:"Find contacts by name"}),Object(h.jsx)("input",{type:"text",className:"search",value:e,onChange:n})]})}function g(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),l=s[0],u=s[1];Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=function(t){if(n.length>0)return n.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))};return Object(h.jsxs)("section",{className:b.a.phonebook,children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsxs)("div",{className:b.a.featuresWrap,children:[Object(h.jsxs)("div",{className:b.a.addContact,children:[Object(h.jsx)("h2",{children:"Add new contact"}),Object(h.jsx)(f,{onSubmit:function(t){var e=t.name,n=t.number;d(e)?alert("".concat(e," is already in contacts.")):c((function(t){return[].concat(Object(r.a)(t),[{id:j.a.generate(),name:e,number:n}])}))}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(N,{filter:l,onChange:function(t){u(t.target.value)}}),Object(h.jsx)(_,{contacts:function(){if(n.length>0)return n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())}))}(),handleDel:function(t){var e=n.findIndex((function(e){return e.id===t}));c((function(t){var n=Object(r.a)(t);return n.splice(e,1),n}))}})]})]})]})}var k=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(g,{})})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__1CpPA",label:"ContactForm_label__2aadw",btn:"ContactForm_btn__1OZEn"}},8:function(t,e,n){t.exports={phonebook:"Phonebook_phonebook__1Yxq8",featuresWrap:"Phonebook_featuresWrap__3wqkD",addContact:"Phonebook_addContact__2kLq6"}}},[[30,1,2]]]);
//# sourceMappingURL=main.e78a6129.chunk.js.map