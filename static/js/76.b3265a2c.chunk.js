"use strict";(self.webpackChunkMovies_react=self.webpackChunkMovies_react||[]).push([[76],{405:function(e,n,t){function a(e,n,t,a,i,s,r){try{var c=e[s](r),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(a,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,s){var r=e.apply(n,t);function c(e){a(r,i,s,c,o,"next",e)}function o(e){a(r,i,s,c,o,"throw",e)}c(void 0)}))}}t.d(n,{yA:function(){return l},uV:function(){return p},Hx:function(){return h},WK:function(){return f},Yi:function(){return v},wr:function(){return _}});var s=t(757),r=t.n(s),c="https://api.themoviedb.org/3",o="543844f1638a5c7bfa18719dc8b6440a",l="https://image.tmdb.org/t/p/w500";function u(){return d.apply(this,arguments)}function d(){return d=i(r().mark((function e(){var n,t,a,i=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(n,t);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not fond"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function _(){return u("".concat(c,"/trending/all/day?api_key=").concat(o))}function v(e){return u("".concat(c,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function f(e){return u("".concat(c,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function p(e){return u("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}function h(e){return u("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"))}},76:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(439),i=t(791),s=t(689),r=t(87),c=t(718),o=t(405),l="MovieDetails_container__6fEfu",u="MovieDetails_wrapper__eugUr",d="MovieDetails_button__9VA3h",_="MovieDetails_details__NEBVF",v="MovieDetails_details__img__y6m7w",f="MovieDetails_details__descr__aZgS9",p="MovieDetails_details__rate__LFn1g",h="MovieDetails_details__plot__kbwiZ",m="MovieDetails_details__genres__-bd2M",x="MovieDetails_plot__span__SNCMr",j="MovieDetails_genres__span__cTKpf",g="MovieDetails_nav__u1IBS",b="MovieDetails_nav__link__9TViv",k=t(698),w=t(184),y=(0,i.lazy)((function(){return t.e(389).then(t.bind(t,766))})),M=(0,i.lazy)((function(){return t.e(262).then(t.bind(t,819))}));function N(){var e,n,t,N,D=(0,s.TH)(),S=(0,s.UO)().movieId,U=(0,i.useState)(null),A=(0,a.Z)(U,2),Z=A[0],C=A[1];(0,i.useEffect)((function(){(0,o.Yi)(S).then((function(e){C(e)}))}),[S]);var E=null!==(e=null===(n=D.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,w.jsx)("div",{className:u,children:Z&&(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)(r.rU,{to:E,children:(0,w.jsx)("button",{type:"button",className:d,children:"\u2b9c Back"})}),(0,w.jsxs)("div",{className:_,children:[(0,w.jsx)("img",{src:null===Z.poster_path?k:o.yA+Z.poster_path,alt:Z.title,className:v}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("h2",{children:Z.title}),(0,w.jsxs)("p",{className:p,children:[(0,w.jsx)("span",{children:"Rating: "}),Z.vote_average]}),(0,w.jsxs)("p",{className:h,children:[(0,w.jsx)("span",{className:x,children:"Plot: "}),Z.overview]}),(0,w.jsxs)("p",{className:m,children:[(0,w.jsx)("span",{className:j,children:"Genres: "}),Z.genres.map((function(e){return e.name})).join(" ")]})]})]}),(0,w.jsx)("h3",{children:"Additional information"}),(0,w.jsxs)("nav",{className:g,children:[(0,w.jsx)(r.OL,{to:"/movies/".concat(S,"/cast"),state:{from:(null===(t=D.state)||void 0===t?void 0:t.from)||"/"},className:b,children:"Cast"}),(0,w.jsx)(r.OL,{to:"/movies/".concat(S,"/reviews"),state:{from:(null===(N=D.state)||void 0===N?void 0:N.from)||"/"},className:b,children:"Reviews"})]}),(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)(c.Z,{}),children:(0,w.jsxs)(s.Z5,{children:[(0,w.jsx)(s.AW,{path:"cast",element:(0,w.jsx)(y,{movieId:S})}),(0,w.jsx)(s.AW,{path:"reviews",element:(0,w.jsx)(M,{movieId:S})})]})})]})})}},698:function(e,n,t){e.exports=t.p+"static/media/no-image.bede3672f3895ecabe5d.png"}}]);
//# sourceMappingURL=76.b3265a2c.chunk.js.map