(this["webpackJsonpremy-room-display"]=this["webpackJsonpremy-room-display"]||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=n(3),u=n(2),l=n.n(u),m=n(14),s=(n(22),function(e){return r.a.createElement("div",{className:"buzy-container"},e.title,r.a.createElement("div",{className:"buzy-container-status-red"}))}),f=function(){return r.a.createElement("div",null,"Free")},d=function(){return r.a.createElement("div",null,"Next")},h=n(15),b=n.n(h);function p(e){return function(e){return new Promise((function(t,n){b()(e).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}({method:"get",url:"https://nets-intranets-api.azurewebsites.net//v1.0/room/todays-bookings/ConfRoom2@niegrejoh.onmicrosoft.com",headers:{Cookie:"ARRAffinity=ff0fc5d39aabac4576907838eb0a630c9b0bc10114083b2334023199b7c16e27"}})}function E(e){return new Promise((function(e,t){e({})}))}var v=function(e){Object(a.useEffect)((function(){function t(){return(t=Object(m.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:p(e.email).then((function(e){return v(e.value)})),E(e.email).then((function(e){return o(e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.email]);var t=Object(a.useState)({}),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)([]),h=Object(i.a)(u,2),b=h[0],v=h[1];return r.a.createElement("div",null,"Room ",c.title,r.a.createElement(f,null),r.a.createElement(s,c),r.a.createElement(d,null),b.map((function(e){return r.a.createElement("div",null,JSON.stringify(e))})))};n(40);var y=function(){return r.a.createElement("div",{className:"section min-height-100"},r.a.createElement("div",{className:"container  min-height-100"},r.a.createElement(v,{room:{title:"Room",email:"ConfRoom2@niegrejoh.onmicrosoft.com"}})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a0922e46.chunk.js.map