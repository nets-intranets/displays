(this["webpackJsonpremy-room-display"]=this["webpackJsonpremy-room-display"]||[]).push([[0],{29:function(e,t,n){e.exports=n(81)},35:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),i=n.n(o),c=n(4),s=n.n(c),u=n(10),l=n(9),m=(n(35),n(3)),d=n.n(m),f=n(8),p=n.n(f),b=(n(39),function(e){var t=Object(a.useState)("10:00"),n=Object(l.a)(t,2);n[0],n[1];return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.onAdd&&e.onAdd()}},"Add Booking"))}),v=function(e){return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("div",null,"Organizer: ",e.organizer.emailAddress.name," (",e.organizer.emailAddress.address,")"),r.a.createElement("div",null,p()(e.start.dateTime).tz("Europe/Paris").format("hh:mm")," - ",p()(e.end.dateTime).tz("Europe/Paris").format("hh:mm")),r.a.createElement("button",{onClick:function(){e.onDelete&&e.onDelete(e.id)}},"Delete Booking"))},h=n(27),E=n.n(h),g="http://localhost:8000";function y(e){return new Promise((function(t,n){E()(e).then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}function j(e){return y({method:"get",url:g+"/v1.0/rooms/ConfRoom2@niegrejoh.onmicrosoft.com/todays-bookings",headers:{Cookie:"ARRAffinity=ff0fc5d39aabac4576907838eb0a630c9b0bc10114083b2334023199b7c16e27"}})}function O(e){return y({method:"get",url:g+"/v1.0/rooms/ConfRoom2@niegrejoh.onmicrosoft.com",headers:{Cookie:"ARRAffinity=ff0fc5d39aabac4576907838eb0a630c9b0bc10114083b2334023199b7c16e27"}})}function w(e,t,n){return y({method:"post",url:g+"/v1.0/bookings/"+e,headers:{"Content-Type":"application/json"},data:{startDateTime:t,endDateTime:n,timeZone:"UTC"}})}function k(e,t){return y({method:"delete",url:g+"/v1.0/bookings/"+e+"/"+t,headers:{"Content-Type":"application/json"}})}var x=n(28);n(79);var A=function(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(0),m=Object(l.a)(c,2),f=m[0],h=(m[1],Object(x.useTimer)({autoStart:!0,expiryTimestamp:Date.now()+5e3,onExpire:function(){return console.warn("onExpire called")}}));h.seconds,h.minutes,h.hours,h.days,h.isRunning,h.start,h.pause,h.resume,h.restart;Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(e.email).then((function(e){return A(e.value)})),O(e.email).then((function(e){i(e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.email],f);var E=Object(a.useState)([]),g=Object(l.a)(E,2),y=g[0],A=g[1],T=function(e,t){var n,a;return n=!0,d()(t).startOf("day").toISOString(),d()(t).endOf("day").toISOString(),e.forEach((function(e){var r=d()(e.start.dateTime),o=d()(e.end.dateTime);d()(t).isBetween(r,o)&&(n=!1,a=e)})),[n,void 0,void 0,a,void 0]}(y,p()()),D=Object(l.a)(T,6),S=D[0],C=(D[1],D[2],D[3]),R=(D[4],D[5]);return r.a.createElement("div",null,r.a.createElement("div",{className:"displaytitle"}," ",o.displayName," "),r.a.createElement("div",{className:S?"room-available":"room-buzy",style:{fontSize:"100px",textAlign:"center"}},S&&r.a.createElement("div",null,r.a.createElement("div",{className:"status-block"},r.a.createElement("div",{className:"status-heading"},"Available"),r.a.createElement("div",{className:"status-subheading"},"Available next ",R)),r.a.createElement(b,{onAdd:function(){var t=Object(u.a)(s.a.mark((function t(n,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p()().format("YYYY-MM-DDTHH:mm:00"),a=p()().add(15,"m").format("YYYY-MM-DDTHH:mm:00"),t.next=4,w(e.room.email,n,a);case 4:window.location.reload();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()})),!S&&r.a.createElement("div",null,r.a.createElement(v,Object.assign({onDelete:function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.room.email,n);case 2:window.location.reload();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C)))),r.a.createElement("div",{style:{padding:"16px"}}),y.map((function(t){return r.a.createElement(v,Object.assign({onDelete:function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e.room.email,n);case 2:window.location.reload();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},t))})))};n(80);var T=function(){return r.a.createElement("div",{className:"section min-height-100"},r.a.createElement("div",{className:"container  min-height-100"},r.a.createElement(A,{room:{title:"Room",email:"ConfRoom2@niegrejoh.onmicrosoft.com"}})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.112792f9.chunk.js.map