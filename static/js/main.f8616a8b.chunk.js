(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,t,a){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,t,a){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,function(e,t,a){e.exports={App:"App_App__1Sc4o"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8"}},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(20),a(13)),u=a.n(o),s=a(6);var m=function(){return r.a.createElement("div",null,"Add NavLinks")},i=a(1);var d=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement("hr",null),r.a.createElement("hr",null))},E=a(2);var p=function(e){return r.a.createElement("div",null,"// show some text",r.a.createElement("button",{onClick:function(){}},"X"))};var h=function(e){var t=e.data.map((function(t){return r.a.createElement(p,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){}},"All"),r.a.createElement("button",{onClick:function(){}},"High"),r.a.createElement("button",{onClick:function(){}},"Middle"),r.a.createElement("button",{onClick:function(){}},"Low"))},f=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var b=function(){var e=Object(n.useState)(f),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(E.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:void 0}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(h,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(void 0)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=a(14),_=a.n(v),k=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=_.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},C=function(e){e.users,e.addUserCallback;var t=Object(n.useState)(""),a=Object(E.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),u=Object(E.a)(o,2),s=u[0];u[1];return r.a.createElement(k,{name:l,setNameCallback:function(e){c("")},addUser:function(){alert("Hello  !")},error:s,totalUsers:0})};var g=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(C,{users:a,addUserCallback:function(e){l([])}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=a(4),x=a(7),j=a.n(x),w=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(j.a.error," ").concat(u||""),i="".concat(j.a.errorInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i},s)),c&&r.a.createElement("span",{className:m},c))},O=a(8),S=a.n(O),y=a(9),I=a.n(y),A=function(e){var t=e.red,a=e.className,n=Object(N.a)(e,["red","className"]),l="".concat(t?I.a.red:I.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},T=a(10),U=a.n(T),H=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,a=(e.spanClassName,e.children),n=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),l="".concat(U.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){},className:l},n)),a&&r.a.createElement("span",{className:U.a.spanClassName},a))};var B=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(E.a)(u,2),m=s[0],i=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:S.a.column},r.a.createElement(w,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(w,{className:S.a.blue}),r.a.createElement(A,null,"default"),r.a.createElement(A,{red:!0,onClick:o},"delete "),r.a.createElement(A,{disabled:!0},"disabled"),r.a.createElement(H,{checked:m,onChangeChecked:i},"some text "),r.a.createElement(H,{checked:m,onChange:function(e){return i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var W=function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(b,null),r.a.createElement(g,null),r.a.createElement(B,null))};var G=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},J="/pre-junior";var K=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(i.a,{to:J})}),r.a.createElement(i.b,{path:J,element:r.a.createElement(W,null)}),"// add routes",r.a.createElement(i.b,{path:"/*",element:r.a.createElement(G,null)})))};var P=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement(K,null)))};var X=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement("hr",null),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.f8616a8b.chunk.js.map