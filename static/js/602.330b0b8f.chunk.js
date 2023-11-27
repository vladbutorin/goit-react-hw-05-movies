"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{615:function(n,t,e){e.d(t,{Z:function(){return h}});var r,a,u,o=e(689),c=e(168),i=e(867),s=e(87),f=i.ZP.ul(r||(r=(0,c.Z)(["\n  list-style-type: none;\n"]))),p=i.ZP.li(a||(a=(0,c.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),l=(0,i.ZP)(s.rU)(u||(u=(0,c.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),d=e(184),h=function(n){var t=n.films,e=(0,o.TH)();return(0,d.jsx)(f,{children:t.map((function(n){return(0,d.jsx)(p,{children:(0,d.jsx)(l,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},602:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,u,o=e(439),c=e(791),i=e(478),s=e(615),f=e(168),p=e(867),l=p.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),d=p.ZP.input(a||(a=(0,f.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n"]))),h=p.ZP.button(u||(u=(0,f.Z)(["\n  padding: 8px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n"]))),v=e(184),x=function(n){var t=n.searchMovies,e=(0,c.useState)(""),r=(0,o.Z)(e,2),a=r[0],u=r[1];return(0,v.jsxs)(l,{onSubmit:function(n){n.preventDefault(),t(a.toLowerCase())},children:[(0,v.jsx)(d,{type:"text",name:"query",autoFocus:!0,value:a,onChange:function(n){u(n.target.value)}}),(0,v.jsx)(h,{type:"submit",children:"Search"})]})},g=e(975),m=function(){var n=(0,c.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,c.useState)(!1),u=(0,o.Z)(a,2),f=u[0],p=u[1],l=(0,c.useState)(!1),d=(0,o.Z)(l,2),h=d[0],m=d[1];return(0,v.jsxs)("main",{children:[(0,v.jsx)(x,{searchMovies:function(n){p(!0),(0,g.Ml)(n).then((function(n){r(n),m(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){p(!1)}))}}),f&&(0,v.jsx)(i.Z,{}),h&&(0,v.jsx)("p",{children:"There is no movies with this request. Please, try again"}),e&&(0,v.jsx)(s.Z,{films:e})]})}},975:function(n,t,e){e.d(t,{Bt:function(){return l},Ml:function(){return s},Tg:function(){return i},Y5:function(){return f},wL:function(){return p}});var r=e(861),a=e(757),u=e.n(a),o=e(340);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="f96208f409ce63a5ff6417faca60abae",i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.330b0b8f.chunk.js.map