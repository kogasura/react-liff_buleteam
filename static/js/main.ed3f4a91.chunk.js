(this["webpackJsonpliff-bule-team"]=this["webpackJsonpliff-bule-team"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(3),c=n.n(i),r=(n(14),n(15),n(1)),o=n(4),u=n(5),s=n(8),m=n(7),f=(window.liff,window.liff),d=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),i=n[0],c=n[1];return l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("button",{variant:"contained",color:"primary",onClick:function(){f.init({liffId:"https://liff.line.me/1654291898-PB5R9NVj"}).then((function(){f.login(),c(f.isLoggedIn())}))},disabled:i},"Login")),l.a.createElement("form",null,l.a.createElement("div",{className:"title"},l.a.createElement("p",null,"\u30df\u30fc\u30c6\u30a3\u30f3\u30b0\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("input",{type:"text"})),l.a.createElement("div",{className:"starttime"},l.a.createElement("p",null,"\u958b\u59cb\u6642\u9593\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("input",{type:"time",step:"300"})),l.a.createElement("div",{className:"endtime"},l.a.createElement("p",null,"\u7d42\u4e86\u6642\u9593\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("input",{type:"time",step:"300"})),l.a.createElement("div",{className:"people"},l.a.createElement("p",null,"\u52df\u96c6\u4eba\u6570\u3092\u8a18\u5165\u3057\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("select",null,l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"6"))),l.a.createElement("div",{className:"url"},l.a.createElement("p",null,"zoom\u7b49\u306eURL\u3092\u8cbc\u308a\u4ed8\u3051\u3066\u304f\u3060\u3055\u3044"),l.a.createElement("input",{type:"url"})),l.a.createElement("button",{onClick:e.shareContents},"\u5171\u6709")))},p=n(6),E=(window.liff,function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var l;return Object(o.a)(this,n),(l=t.call(this,e)).shareContents=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2);t[0],t[1]},l.state={},l}return Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{shareContents:this.shareContents}),l.a.createElement(p.a,null))}}]),n}(l.a.Component));var h=function(){return l.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){"use strict";(function(e){var a=n(1),l=n(0),i=n.n(l),c=window.liff;t.a=function(){var t=Object(l.useState)(!1),n=Object(a.a)(t,2),r=n[0],o=n[1];Object(l.useEffect)((function(){c.init({liffId:"https://liff.line.me/1654291898-PB5R9NVj"}).then((function(){o(c.isLoggedIn())}))}),[]);return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"qrValue"}),i.a.createElement("div",{className:"loginButton"},i.a.createElement("button",{variant:"contained",color:"primary",onClick:function(){c.init({liffId:"https://liff.line.me/1654291898-PB5R9NVj"}).then((function(){c.isLoggedIn()||(window.alert("LINE\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),c.login({redirectUri:e.REACT_APP_LIFF_URL}))}))},disabled:r},"Login"),i.a.createElement("buttun",{onClick:function(){c.init({liffId:"https://liff.line.me/1654291898-PB5R9NVj"}).then((function(){c.isInClient()||c.isLoggedIn()?c.shareTargetPicker([{type:"text",text:"hello world"}]):(window.alert("LINE\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u304f\u3060\u3055\u3044\u3002https://liff.line.me/1654291898-PB5R9NVj"),c.openWindow({url:"https://line.me",external:!0}))}))}},"login\u72b6\u6cc1\u3092\u78ba\u8a8d")))}}).call(this,n(16))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ed3f4a91.chunk.js.map