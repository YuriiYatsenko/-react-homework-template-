"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[895],{6895:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});var t=r(9439),s=r(2791),i=r(5861),c=r(7757),a=r.n(c),o=r(3016),l=r(3329),d=function(e){var n=e.movie;return(0,l.jsxs)("div",{className:"movie-card",children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:n.title}),(0,l.jsxs)("div",{className:"info",children:[(0,l.jsx)("h2",{children:n.title}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Release Date:"})," ",n.release_date]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Overview:"})," ",n.overview]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Original Title:"})," ",n.original_title]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Original Language:"})," ",n.original_language]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Popularity:"})," ",n.popularity]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Vote Average:"})," ",n.vote_average]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Vote Count:"})," ",n.vote_count]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Genres:"})," ",n.genre_ids.map((function(e){return(0,l.jsx)("span",{children:e},e)}))]})]})]})},h=function(){var e=(0,s.useState)([]),n=(0,t.Z)(e,2),r=n[0],c=n[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,i.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=e228a48ce493c266d1ac0e25cdb4d9c4");case 3:n=e.sent,c(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c([]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{className:"movie-list",children:[(0,l.jsx)("h2",{children:"Movie List"}),(0,l.jsx)("div",{className:"movies-container",children:r.map((function(e){return(0,l.jsx)(d,{movie:e},e.id)}))})]})},u=function(){var e=(0,s.useState)([]),n=(0,t.Z)(e,2),r=n[0],i=n[1];return(0,s.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=e228a48ce493c266d1ac0e25cdb4d9c4").then((function(e){return e.json()})).then((function(e){i(e.results)})).catch((function(e){}))}),[]),(0,l.jsx)("div",{className:"home-wrapper",children:(0,l.jsxs)("section",{children:[(0,l.jsx)("h1",{children:"Weekly Trends"}),(0,l.jsx)(h,{movies:r})]})})}}}]);
//# sourceMappingURL=895.16095d28.chunk.js.map