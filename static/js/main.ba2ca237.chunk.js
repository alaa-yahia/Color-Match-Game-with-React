(this.webpackJsonpcolor=this.webpackJsonpcolor||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(9),n(3));n(10);var s=function(){var e=["black","blue","red","green","yellow"],t=i(),n=Object(a.useState)("playing"),r=Object(l.a)(n,2),c=r[0],s=r[1];function u(e){return e[Math.floor(Math.random()*e.length)]}function i(){var t=u(e);return{upperWord:t,lowerWord:u(e),lowerWordInk:Math.random()<.4?t:u(e)}}function m(e){0===(t.upperWord===t.lowerWordInk^e)?s("correct"):s("wrong")}return Object(a.useEffect)((function(){"playing"!==c&&setTimeout((function(){t=i(),s("playing")}),500)}),[c]),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"help"},"Does the meaning of the top word match the ink color of the bottom word?"),o.a.createElement("div",{className:"body"},o.a.createElement("div",{className:"game-status status-".concat(c)}),o.a.createElement("div",{className:"meaning"},t.upperWord.toUpperCase()),o.a.createElement("div",{className:"ink",style:{color:t.lowerWordInk}},t.lowerWord.toUpperCase()),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:function(){return m(!0)}},"YES"),o.a.createElement("button",{onClick:function(){return m(!1)}},"NO"))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.ba2ca237.chunk.js.map