"use strict";(self.webpackChunkMovies_react=self.webpackChunkMovies_react||[]).push([[349],{405:function(e,t,n){function r(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function i(e){r(o,a,c,i,u,"next",e)}function u(e){r(o,a,c,i,u,"throw",e)}i(void 0)}))}}n.d(t,{yA:function(){return s},uV:function(){return h},Hx:function(){return v},WK:function(){return _},Yi:function(){return m},wr:function(){return p}});var c=n(757),o=n.n(c),i="https://api.themoviedb.org/3",u="543844f1638a5c7bfa18719dc8b6440a",s="https://image.tmdb.org/t/p/w500";function l(){return f.apply(this,arguments)}function f(){return f=a(o().mark((function e(){var t,n,r,a=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not fond"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(){return l("".concat(i,"/trending/all/day?api_key=").concat(u))}function m(e){return l("".concat(i,"/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"))}function _(e){return l("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function h(e){return l("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"))}function v(e){return l("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"))}},170:function(e,t,n){n.d(t,{Z:function(){return m}});n(791);var r=n(689),a=n(87),c=n(405),o="MoviesGallery_gallery__bWWuP",i="MoviesGallery_gallery__item__fkRyT",u="MoviesGallery_gallery__img__3niZ6",s="MoviesGallery_gallery__link__A3CCf",l="MoviesGallery_gallery__text__NbiL0",f=n(698),p=n(184),m=function(e){var t=e.movies,n=(0,r.TH)();return(0,p.jsx)("ul",{className:o,children:t.map((function(e){return(0,p.jsx)("li",{className:i,children:(0,p.jsxs)(a.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:n}},className:s,children:[(0,p.jsx)("img",{src:null===e.poster_path?f:c.yA+e.poster_path,alt:e.title,className:u}),(0,p.jsx)("p",{className:l,children:e.title})]})},e.id)}))})}},349:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(439),a=n(791),c=n(689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s="Searchbar_searchbar__1g1Ji",l="Searchbar_searchform__yKuGw",f="Searchbar_searchform__button__NQbRU",p="Searchbar_searchform__input__Ot4AC",m=n(184);function _(e){var t=e.onSubmit,n=(0,a.useState)(""),o=(0,r.Z)(n,2),i=o[0],_=o[1],h=(0,c.TH)(),v=(0,c.s0)();return(0,m.jsx)("header",{className:s,children:(0,m.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),""!==i.trim()?(v(u(u({},h),{},{search:"query=".concat(i)})),t(i)):alert("Enter your request, please!")},children:[(0,m.jsx)("button",{type:"submit",className:f,children:"Search"}),(0,m.jsx)("input",{className:p,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"enter movie name",value:i,onChange:function(e){_(e.currentTarget.value.toLowerCase())}})]})})}var h=n(170),v=n(405);function b(){var e,t=(0,a.useState)(""),n=(0,r.Z)(t,2)[1],o=(0,a.useState)(null),i=(0,r.Z)(o,2),u=i[0],s=i[1],l=(0,c.TH)(),f=null!==(e=new URLSearchParams(l.search).get("query"))&&void 0!==e?e:"";(0,a.useEffect)((function(){f&&(0,v.WK)(f).then((function(e){s(e.results)}))}),[f]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{onSubmit:function(e){n(e)}}),u&&(0,m.jsx)(h.Z,{movies:u})]})}},698:function(e,t,n){e.exports=n.p+"static/media/no-image.bede3672f3895ecabe5d.png"}}]);
//# sourceMappingURL=349.d1f1da04.chunk.js.map