"use strict";(self.webpackChunkMovies_react=self.webpackChunkMovies_react||[]).push([[766,389],{405:function(n,t,e){function r(n,t,e,r,a,c,u){try{var i=n[c](u),o=i.value}catch(s){return void e(s)}i.done?t(o):Promise.resolve(o).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,c){var u=n.apply(t,e);function i(n){r(u,a,c,i,o,"next",n)}function o(n){r(u,a,c,i,o,"throw",n)}i(void 0)}))}}e.d(t,{yA:function(){return s},uV:function(){return m},Hx:function(){return h},WK:function(){return d},Yi:function(){return v},wr:function(){return p}});var c=e(757),u=e.n(c),i="https://api.themoviedb.org/3",o="543844f1638a5c7bfa18719dc8b6440a",s="https://image.tmdb.org/t/p/w500";function f(){return l.apply(this,arguments)}function l(){return l=a(u().mark((function n(){var t,e,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not fond"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function p(){return f("".concat(i,"/trending/all/day?api_key=").concat(o))}function v(n){return f("".concat(i,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))}function d(n){return f("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))}function m(n){return f("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))}function h(n){return f("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"))}},766:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(439),a=e(791),c=e(405),u="Cast_list__F+X8v",i="Cast_element__Z0Uxf",o="Cast_image__J0Tcb",s="Cast_name__a4rAf",f=e(184);function l(n){var t=n.movieId,e=(0,a.useState)([]),l=(0,r.Z)(e,2),p=l[0],v=l[1];return(0,a.useEffect)((function(){(0,c.uV)(t).then((function(n){return v(n.cast)}))}),[t]),(0,f.jsx)("ul",{className:u,children:p.map((function(n){return(0,f.jsxs)("li",{className:i,children:[(0,f.jsx)("img",{className:o,src:c.yA+n.profile_path,alt:n.name}),(0,f.jsx)("p",{className:s,children:n.name})]},n.id)}))})}}}]);
//# sourceMappingURL=766.6d6955e1.chunk.js.map