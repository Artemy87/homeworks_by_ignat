(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={container:"Affair_container__1iON4",priority:"Affair_priority__1jVve",low:"Affair_low__1VzjE",middle:"Affair_middle__3wbh3",high:"Affair_high__2_8bi",deleteButtons:"Affair_deleteButtons__1uWKK",name:"Affair_name__wrv2c"}},function(e,a,t){e.exports={message:"Message_message__8WR15",image:"Message_image__2IpiT",content:"Message_content__Ltxgc",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG",angle:"Message_angle__1T-oN"}},function(e,a,t){e.exports={container:"Affairs_container__1RINw",allButton:"Affairs_allButton__2vUx6",highButton:"Affairs_highButton__3X5RH",middleButton:"Affairs_middleButton__1X75t",lowButton:"Affairs_lowButton__22v1y"}},,,,function(e,a,t){e.exports={errorMessage:"Greeting_errorMessage__zEoF5",inputClass:"Greeting_inputClass__14GLD",count:"Greeting_count__2ZvGI"}},,function(e,a,t){e.exports={red:"SuperButton_red__1kaz_",default:"SuperButton_default__-BXUG"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X",testInput:"HW4_testInput__NJ1eu"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,function(e,a,t){e.exports={App:"App_App__1Sc4o"}},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(25),t(18)),i=t.n(o);var s=function(){return r.a.createElement("div",null,"// add NavLinks")},u=t(1),m=t(5),d=t.n(m);var f=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{className:d.a.image,src:e.avatar,alt:""}),r.a.createElement("div",{className:d.a.angle}),r.a.createElement("div",{className:d.a.content},r.a.createElement("div",{className:d.a.name},e.name),r.a.createElement("div",{className:d.a.text},e.message),r.a.createElement("div",{className:d.a.time},e.time)))};var _=function(){return r.a.createElement("div",null)},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Sarah Connor",p="The unknown future rolls toward us. I face it for the first time with a sense of hope. Because if a machine, a Terminator... can learn the value of human life... maybe we can too.",g="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"Homeworks 1"),"should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",r.a.createElement(f,{avatar:E,name:h,message:p,time:g}),r.a.createElement("hr",null),"\u0434\u043b\u044f \u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u0430, \u043c\u043e\u0433\u0443 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c",r.a.createElement(_,null),r.a.createElement("hr",null))},b=t(2),N=t(4),k=t.n(N),C=t(8),w=t(12),y=t.n(w),x=function(e){var a=e.red,t=e.className,n=Object(C.a)(e,["red","className"]),l="".concat(a?y.a.red:y.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},O=function(e){var a="low"===e.affair.priority?"".concat(k.a.priority," ").concat(k.a.low):"middle"===e.affair.priority?"".concat(k.a.priority," ").concat(k.a.middle):"".concat(k.a.priority," ").concat(k.a.high);return console.log(a),r.a.createElement("div",{className:k.a.container},r.a.createElement("div",{className:k.a.name},e.affair.name),r.a.createElement("div",{className:a},e.affair.priority),r.a.createElement(x,{className:k.a.deleteButtons,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))},j=t(6),S=t.n(j),A=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:S.a.container},r.a.createElement("div",{className:S.a.item},a),r.a.createElement("div",{className:S.a.filter},r.a.createElement(x,{className:S.a.allButton,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(x,{className:S.a.middleButton,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(x,{className:S.a.highButton,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(x,{className:S.a.lowButton,onClick:function(){e.setFilter("low")}},"Low")))},B=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(n.useState)(B),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),i=o[0],s=o[1],u=function(e,a){return"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"Homeworks 2"),r.a.createElement(A,{data:u,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(19),H=t(10),M=t.n(H),W=t(13),F=t.n(W),K=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,s=Object(C.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(F.a.error," ").concat(i||""),m="".concat(F.a.errorInput," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c&&r.a.createElement("span",{className:u},c))},P=function(e){var a=e.name,t=e.setNameCallback,n=e.onKeyPress,l=e.addUser,c=e.error,o=e.totalUsers;return r.a.createElement("div",null,r.a.createElement(K,{value:a,onChange:t,onKeyPress:n,className:M.a.inputClass}),r.a.createElement(x,{disabled:!!c,onClick:l},"add"),r.a.createElement("span",{className:M.a.count},"count users: ",o),c&&r.a.createElement("div",{className:M.a.errorMessage},c))},R=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(null),u=Object(b.a)(s,2),m=u[0],d=u[1],f=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){d(""),i(e.currentTarget.value)},onKeyPress:function(e){d(null),"Enter"===e.key&&""!==o.trim()?(t(o),alert("Hello ".concat(o,"!")),i("")):d("name is require!")},addUser:function(){""!==o.trim()?(t(o),alert("Hello ".concat(o,"!")),i("")):d("name is require!")},error:m,totalUsers:f})},U=t(28);var G=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"Homeworks 3"),r.a.createElement(R,{users:t,addUserCallback:function(e){l([].concat(Object(T.a)(t),[{_id:Object(U.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},X=t(14),J=t.n(X),z=t(15),L=t.n(z),q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(C.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(n.useState)(!1),s=Object(b.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h3",null,"Homeworks 4"),r.a.createElement("div",{className:J.a.column},r.a.createElement(K,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(K,{className:J.a.blue}),r.a.createElement(x,null,"default"),r.a.createElement(x,{red:!0,onClick:o},"delete "),r.a.createElement(x,{disabled:!0},"disabled"),r.a.createElement(q,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(q,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(I,null),r.a.createElement(G,null),r.a.createElement(Z,null))};var D=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Y="/pre-junior";var $=function(){return r.a.createElement("div",null,"Routes \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0440\u043e\u0443\u0442",r.a.createElement(u.d,null,"\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 '/' \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR",r.a.createElement(u.b,{path:"/",element:r.a.createElement(u.a,{to:Y})}),r.a.createElement(u.b,{path:Y,element:r.a.createElement(V,null)}),"// add routes \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",r.a.createElement(u.b,{path:"/*",element:r.a.createElement(D,null)})))},Q=t(11);var ee=function(){return r.a.createElement("div",null,r.a.createElement(Q.a,null,r.a.createElement(s,null),r.a.createElement($,null)))};var ae=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("h2",null,"React homeworks:"),r.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.a64175e1.chunk.js.map