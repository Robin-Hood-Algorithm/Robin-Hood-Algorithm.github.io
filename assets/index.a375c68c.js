import{S as de,i as pe,s as ve,e as s,t as x,a as p,b as n,c as te,d as e,f as B,n as U,g as le,l as Ce,h as se,j as me,m as ne,k as ie,o as ae,p as Pe,q as re,r as ye,u as be,v as ke,w as $e,B as qe,x as Me}from"./vendor.dacea698.js";const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}};xe();function je(r){let t,a,c,l,o,i,u,m,b=r[1][0]+"",H,L,f,h,C=r[2][0]+"",W,ce,P,O=r[3][0]+"",z,oe,k,j,K=r[1][1]+"",X,Y,E,y,N=r[2][1]+"",R,ue,w,$=r[3][1]+"",ee,S,T,I,Q=r[1][2]+"",Z,V,A,D,q=r[2][2]+"",G,fe,M,J=r[3][2]+"",F;return{c(){t=s("div"),a=s("div"),c=s("span"),l=x(r[0]),o=p(),i=s("div"),u=s("div"),m=s("span"),H=x(b),L=p(),f=s("span"),h=s("span"),W=x(C),ce=p(),P=s("span"),z=x(O),oe=p(),k=s("div"),j=s("span"),X=x(K),Y=p(),E=s("span"),y=s("span"),R=x(N),ue=p(),w=s("span"),ee=x($),S=p(),T=s("div"),I=s("span"),Z=x(Q),V=p(),A=s("span"),D=s("span"),G=x(q),fe=p(),M=s("span"),F=x(J),n(a,"class","card-title text-white bg-tc-6 svelte-16qeg72"),n(h,"class","line-through"),n(P,"class","text-red-500 font-bold"),n(u,"class","option svelte-16qeg72"),n(y,"class","line-through"),n(w,"class","text-red-500 font-bold"),n(k,"class","option svelte-16qeg72"),n(D,"class","line-through"),n(M,"class","text-red-500 font-bold"),n(T,"class","option svelte-16qeg72"),n(i,"class","card-content bg-tc-1 svelte-16qeg72"),n(t,"class","card bg-white shadow-md svelte-16qeg72")},m(g,d){te(g,t,d),e(t,a),e(a,c),e(c,l),e(t,o),e(t,i),e(i,u),e(u,m),e(m,H),e(u,L),e(u,f),e(f,h),e(h,W),e(f,ce),e(f,P),e(P,z),e(i,oe),e(i,k),e(k,j),e(j,X),e(k,Y),e(k,E),e(E,y),e(y,R),e(E,ue),e(E,w),e(w,ee),e(i,S),e(i,T),e(T,I),e(I,Z),e(T,V),e(T,A),e(A,D),e(D,G),e(A,fe),e(A,M),e(M,F)},p(g,[d]){d&1&&B(l,g[0]),d&2&&b!==(b=g[1][0]+"")&&B(H,b),d&4&&C!==(C=g[2][0]+"")&&B(W,C),d&8&&O!==(O=g[3][0]+"")&&B(z,O),d&2&&K!==(K=g[1][1]+"")&&B(X,K),d&4&&N!==(N=g[2][1]+"")&&B(R,N),d&8&&$!==($=g[3][1]+"")&&B(ee,$),d&2&&Q!==(Q=g[1][2]+"")&&B(Z,Q),d&4&&q!==(q=g[2][2]+"")&&B(G,q),d&8&&J!==(J=g[3][2]+"")&&B(F,J)},i:U,o:U,d(g){g&&le(t)}}}function Ie(r,t,a){let{title:c}=t,{unit:l=["1 \u5C0F\u65F6","10 \u5C0F\u65F6","20 \u5C0F\u65F6"]}=t,{commonPrice:o}=t,{currentPrice:i}=t;return r.$$set=u=>{"title"in u&&a(0,c=u.title),"unit"in u&&a(1,l=u.unit),"commonPrice"in u&&a(2,o=u.commonPrice),"currentPrice"in u&&a(3,i=u.currentPrice)},[c,l,o,i]}class he extends de{constructor(t){super();pe(this,t,Ie,je,ve,{title:0,unit:1,commonPrice:2,currentPrice:3})}}var Ze="/assets/1.c686fe7a.jpg",Ae="/assets/2.61ea6a97.jpg",Be="/assets/qr-code.4159a929.png";function we(r,t,a){const c=r.slice();return c[9]=t[a],c[11]=a,c}function Le(r){let t,a=r[9].title+"",c,l,o,i;function u(){return r[4](r[11])}return{c(){t=s("div"),c=x(a),l=p(),n(t,"class","section-nav h-full w-32 font-bold flex items-center justify-center cursor-pointer svelte-1bp5tok")},m(m,b){te(m,t,b),e(t,c),e(t,l),o||(i=Ce(t,"click",u),o=!0)},p(m,b){r=m},d(m){m&&le(t),o=!1,i()}}}function Oe(r){let t,a,c,l,o,i,u,m,b,H,L,f,h,C,W,ce,P,O,z,oe,k,j,K,X,Y,E,y,N,R,ue,w,$,ee,S,T,I,Q,Z,V,A,D,q,G,fe,M,J,F,g=r[2],d=[];for(let v=0;v<g.length;v+=1)d[v]=Le(we(r,g,v));return $=new he({props:{title:"\u7B97\u6CD5\u9762\u8BD5\u6A21\u62DF\uFF08\u4EC5\u7B97\u6CD5\uFF09",unit:["1 \u6B21","5 \u6B21","10 \u6B21"],commonPrice:["500 \u5143","2000 \u5143","4000 \u5143"],currentPrice:["288 \u5143","888 \u5143","1688 \u5143"]}}),S=new he({props:{title:"\u672C\u7855\u535A\u7B97\u6CD5\u8BFE\u4E1A\u6307\u5BFC",commonPrice:["1000 \u5143","9000 \u5143","18000 \u5143"],currentPrice:["588 \u5143","5088 \u5143","8888 \u5143"]}}),I=new he({props:{title:"\u7CBE\u54C1\u7B97\u6CD5\u591A\u5BF9\u4E00\u6307\u5BFC",commonPrice:["5000 \u5143","45000 \u5143","90000 \u5143"],currentPrice:["2588 \u5143","22888 \u5143","38888 \u5143"]}}),{c(){t=s("div"),a=s("div"),a.innerHTML=`<h1>\u7B97\u6CD5\u6307\u5BFC\u670D\u52A1</h1> 
    <p class="text-xl">\u7531\u7ADE\u8D5B\u7ECF\u9A8C\u3001\u4E1A\u754C\u9605\u5386\u4E30\u5BCC\u7684\u5BFC\u5E08\u56E2\u4F53\u591A\u5BF9\u4E00\u6307\u5BFC\u670D\u52A1\uFF0C\u4E3A\u60A8\u9AD8\u6548\u7406\u6E05\u57FA\u7840\u7B97\u6CD5\u4F53\u7CFB\uFF0C\u4EE5\u4E13\u4E1A\u77E5\u8BC6\u5168\u9762\u8986\u76D6\u6C42\u5B66\u3001\u6C42\u804C\u9053\u8DEF\uFF0C\u52A9\u60A8\u62AB\u8346\u65A9\u68D8\u3002</p>`,c=p(),l=s("div");for(let v=0;v<d.length;v+=1)d[v].c();o=p(),i=s("div"),u=s("section"),m=s("div"),b=s("div"),b.textContent=`${r[2][0].title}`,H=p(),L=s("div"),f=s("ul"),f.innerHTML=`<li class="svelte-1bp5tok"><strong>\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u3002</strong>\u901A\u8FC7\u4E00\u6B21\u7B80\u5355\u7684\u4E13\u5C5E\u54A8\u8BE2\u6C9F\u901A\uFF0C\u6709\u7684\u653E\u77E2\u5730\u4E2A\u6027\u5316\u5B9A\u5236\u5B66\u5458\u7684\u5B66\u4E60\u65B9\u6848\u3002</li> 
          <li class="svelte-1bp5tok"><strong>\u4E0D\u79EF\u8DEC\u6B65\uFF0C\u65E0\u4EE5\u81F3\u5343\u91CC\u3002</strong>\u901A\u8FC7\u7CFB\u7EDF\u6027\u6216\u4E13\u9898\u6027\u7684\u7B97\u6CD5\u8BFE\u7A0B\uFF0C\u4E3A\u72EC\u7ACB\u89E3\u9898\u80FD\u529B\u7684\u63D0\u5347\u6253\u4E0B\u575A\u5B9E\u7684\u57FA\u7840\u3002</li> 
          <li class="svelte-1bp5tok"><strong>\u517B\u5175\u5343\u65E5\uFF0C\u7528\u5175\u4E00\u65F6\u3002</strong>\u9488\u5BF9\u5B66\u5458\u5927\u89C4\u6A21\u5237\u9898\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u96BE\u9898\u3001\u7E41\u9898\u8FDB\u884C\u89E3\u7B54\uFF0C\u5E76\u6307\u5BFC\u517B\u6210\u65E5\u5E38\u5237\u9898\u7684\u6B63\u786E\u4E60\u60EF\u3002</li> 
          <li class="svelte-1bp5tok">\u5B9E\u9645\u5B66\u4E60\u6D41\u7A0B\u53EF\u6839\u636E\u5B66\u5458\u81EA\u8EAB\u60C5\u51B5\u7075\u6D3B\u8C03\u6574\u3002</li>`,h=p(),C=s("img"),ce=p(),P=s("section"),O=s("div"),z=s("div"),z.textContent=`${r[2][1].title}`,oe=p(),k=s("div"),j=s("img"),X=p(),Y=s("p"),Y.textContent="\u4E3B\u8BB2\u8001\u5E08\u4E3AICPC\u4E16\u754C\u603B\u51B3\u8D5B\u91D1\u724C\u83B7\u5F97\u8005\uFF0C\u5E76\u62E5\u6709\u4E30\u5BCC\u7684\u7B97\u6CD5\u6559\u5B66\u7ECF\u9A8C\uFF1A3\u5E74ICPC\u7ADE\u8D5B\u6559\u7EC3\u7ECF\u9A8C\uFF0C\u6307\u5BFC\u7684\u961F\u4F0D\u66FE\u4E24\u6B21\u83B7\u5F97ICPC\u4E16\u754C\u603B\u51B3\u8D5B\u91D1\u724C\u3002\u5176\u4F59\u56E2\u961F\u6210\u5458\u5747\u4E3A\u56FD\u5185\u540D\u6821\u6BD5\u4E1A\uFF0C\u542B\u591A\u540DICPC\u4E9A\u6D32\u533A\u91D1\u724C\u83B7\u5F97\u8005\u3001\u6D77\u5185\u5916\u540D\u6821\u535A\u58EB\u3001\u56FD\u5185\u9876\u7EA7offer\u83B7\u5F97\u8005\uFF0C\u5206\u5E03\u5728\u5404\u5927\u516C\u53F8\u548C\u521B\u4E1A\u516C\u53F8\u7684\u6700\u524D\u7EBF\uFF0C\u719F\u6089\u5404\u5927\u5C0F\u516C\u53F8\u7684\u9762\u8BD5\u6D41\u7A0B\u548C\u6A21\u5F0F\u3002",E=p(),y=s("section"),N=s("div"),R=s("div"),R.textContent=`${r[2][2].title}`,ue=p(),w=s("div"),se($.$$.fragment),ee=p(),se(S.$$.fragment),T=p(),se(I.$$.fragment),Q=p(),Z=s("section"),V=s("div"),A=s("div"),A.textContent=`${r[2][3].title}`,D=p(),q=s("div"),G=s("h3"),G.textContent="\u5FAE\u4FE1\u54A8\u8BE2\u8BB7\u8001\u5E08",fe=p(),M=s("img"),n(a,"class","p-10 text-center bg-tc-5 text-white text-shadow-md"),n(l,"class","nav sticky top-16 z-1 h-16 flex justify-center bg-white svelte-1bp5tok"),n(b,"class","title svelte-1bp5tok"),n(m,"class","title-wrapper svelte-1bp5tok"),n(C,"class","img1 svelte-1bp5tok"),me(C.src,W=Ze)||n(C,"src",W),n(C,"alt","img1"),n(L,"class","content svelte-1bp5tok"),n(u,"class","svelte-1bp5tok"),n(z,"class","title svelte-1bp5tok"),n(O,"class","title-wrapper svelte-1bp5tok"),n(j,"class","img2 svelte-1bp5tok"),me(j.src,K=Ae)||n(j,"src",K),n(j,"alt","img2"),n(k,"class","content svelte-1bp5tok"),n(P,"class","svelte-1bp5tok"),n(R,"class","title svelte-1bp5tok"),n(N,"class","title-wrapper svelte-1bp5tok"),n(w,"class","content content-card svelte-1bp5tok"),n(y,"class","svelte-1bp5tok"),n(A,"class","title svelte-1bp5tok"),n(V,"class","title-wrapper svelte-1bp5tok"),n(M,"class","qr-code svelte-1bp5tok"),me(M.src,J=Be)||n(M,"src",J),n(M,"alt","qr-code"),n(q,"class","content flex-col items-start justify-center svelte-1bp5tok"),n(Z,"class","svelte-1bp5tok"),n(i,"class","flex-row justify-center items-center"),n(t,"class","body")},m(v,ge){te(v,t,ge),e(t,a),e(t,c),e(t,l);for(let _=0;_<d.length;_+=1)d[_].m(l,null);r[5](l),e(t,o),e(t,i),e(i,u),e(u,m),e(m,b),e(u,H),e(u,L),e(L,f),e(L,h),e(L,C),e(i,ce),e(i,P),e(P,O),e(O,z),e(P,oe),e(P,k),e(k,j),e(k,X),e(k,Y),e(i,E),e(i,y),e(y,N),e(N,R),e(y,ue),e(y,w),ne($,w,null),e(w,ee),ne(S,w,null),e(w,T),ne(I,w,null),e(i,Q),e(i,Z),e(Z,V),e(V,A),e(Z,D),e(Z,q),e(q,G),e(q,fe),e(q,M),r[6](i),F=!0},p(v,[ge]){if(ge&12){g=v[2];let _;for(_=0;_<g.length;_+=1){const _e=we(v,g,_);d[_]?d[_].p(_e,ge):(d[_]=Le(_e),d[_].c(),d[_].m(l,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=g.length}},i(v){F||(ie($.$$.fragment,v),ie(S.$$.fragment,v),ie(I.$$.fragment,v),F=!0)},o(v){ae($.$$.fragment,v),ae(S.$$.fragment,v),ae(I.$$.fragment,v),F=!1},d(v){v&&le(t),Pe(d,v),r[5](null),re($),re(S),re(I),r[6](null)}}}function Ne(r,t,a){let c,l,o=[{title:"\u670D\u52A1\u6D41\u7A0B"},{title:"\u8D85\u5F3A\u5E08\u8D44"},{title:"\u5957\u9910\u65B9\u6848"},{title:"\u54A8\u8BE2\u65B9\u5F0F"}];function i(f=0){l.children[f].scrollIntoView({behavior:"smooth"})}function u(f){f[0].isIntersecting?f[0].target.classList.add("intersecting"):f[0].target.classList.remove("intersecting");for(let h=0;h<l.children.length;++h)c.children[h].classList.remove("active");for(let h=0;h<l.children.length;++h)if(l.children[h].className.includes("intersecting")){c.children[h].classList.add("active");break}}const m=new IntersectionObserver(u,{rootMargin:"-130px"});ye(()=>{for(let f=0;f<l.children.length;++f)m.observe(l.children[f])});const b=f=>i(f);function H(f){be[f?"unshift":"push"](()=>{c=f,a(0,c)})}function L(f){be[f?"unshift":"push"](()=>{l=f,a(1,l)})}return[c,l,o,i,b,H,L]}class Se extends de{constructor(t){super();pe(this,t,Ne,Oe,ve,{})}}function Te(r){let t,a;return{c(){t=ke("svg"),a=ke("path"),n(a,"d","M510.78,10.87a.5.5,0,0,0,0-.12,8.28,8.28,0,0,0-.25-1c0-.13-.08-.26-.13-.39s-.11-.27-.17-.4-.13-.27-.2-.4-.13-.24-.2-.36a5.81,5.81,0,0,0-.4-.61l-.2-.26-.43-.48a.52.52,0,0,0-.1-.11l-.15-.14-.29-.26L508,6.15l-.4-.29-.18-.12c-.17-.11-.35-.21-.54-.31l-.09,0a6.65,6.65,0,0,0-.61-.27l-.09,0-.56-.19-.22-.06c-.12,0-.24-.06-.37-.09l-.47-.09h-.1a6.88,6.88,0,0,0-1.28-.08c-3.5.12-5.24,2.11-7.88,5.14-6,6.83-24.1,27.63-54.17,37.6-15.55,5.14-26.12,4.67-43.62,3.89-5.86-.26-12.51-.55-20.31-.68C346,50,288,49.08,236.09,70.91c-23.13,9.72-44.77,24-64.43,42.55l-.42-.42a7.51,7.51,0,0,0-10.62,0L142.39,131.4,56.49,45l21-21.12a7.5,7.5,0,0,0-4-12.68L9.89.11A7.5,7.5,0,0,0,1.21,8.78L12.26,72.72a7.47,7.47,0,0,0,5.13,5.87,7.3,7.3,0,0,0,2.26.35A7.46,7.46,0,0,0,25,76.73L45.91,55.66,131.81,142l-19.12,19.23a7.52,7.52,0,0,0,0,10.6l1.07,1.06a214,214,0,0,0-33,54.22C59,279.36,60,337.61,60.46,368.91c.12,7.84.42,14.54.67,20.45.77,17.57,1.23,28.18-3.88,43.78-9.92,30.27-30.6,48.53-37.4,54.53-3,2.64-5,4.39-5.1,7.86a6.56,6.56,0,0,0,.08,1.33v.06c0,.15.05.29.08.44s.05.24.08.36l.06.22c.06.19.12.38.19.56l0,.08c.09.22.19.44.29.65h0a7.4,7.4,0,0,0,1.87,2.35l.14.11c.13.11.27.21.41.31l.24.15a2.5,2.5,0,0,0,.35.21,2.69,2.69,0,0,0,.29.16l.31.15.36.15.24.09.45.14h0a7.64,7.64,0,0,0,2.09.29,8.36,8.36,0,0,0,2-.24h0l353.23-50.52,56.89,57.2A7.52,7.52,0,0,0,439.8,512a7.66,7.66,0,0,0,2.95-.6,7.5,7.5,0,0,0,4.54-7.09l-1.46-57.19,56.83,1.47a7.5,7.5,0,0,0,5.51-12.79l-50.05-50.33L510.65,14.18h0A8,8,0,0,0,510.78,10.87Zm-486.22,45L17.8,16.72l38.92,6.8ZM241.91,84.73c49-20.6,104.92-19.71,135-19.23,7.57.12,14.1.41,19.86.67,18.57.82,30.83,1.36,49-4.64,3.18-1.05,6.23-2.21,9.17-3.45-15.56,13.11-36.84,27.1-63.08,35.1-13.58,4.15-21.95,4.78-32.54,5.57a239.85,239.85,0,0,0-32.16,4.16c-40.15,8-78.29,25.68-113.46,52.49l-31.39-31.34C200.55,106.93,220.57,93.71,241.91,84.73ZM166,129l42.3,42.22L170.9,208.76l-42.29-42.23ZM71.51,437.8c6-18.19,5.42-30.48,4.61-49.1-.25-5.81-.54-12.39-.66-20-.48-30.2-1.37-86.43,19.15-135.77a198.08,198.08,0,0,1,29.83-49.33l32.27,32.22c-22.14,32.18-37,66.77-44.13,102.91a246.71,246.71,0,0,0-4.1,32.2c-.8,10.69-1.43,19.14-5.58,32.85-8,26.32-21.82,47.67-34.83,63.3C69.3,444.09,70.46,441,71.51,437.8ZM52.64,483.92C75,464.78,104,432,117.26,388.09c4.62-15.29,5.38-25.38,6.18-36.07a228.89,228.89,0,0,1,3.86-30.43c6.6-33.4,20.22-65.46,40.48-95.41a7.49,7.49,0,0,0,3.14.69h0a7.44,7.44,0,0,0,5.3-2.21l18.88-19L358.52,370l1.59,62.1a7.51,7.51,0,0,0,2.18,5.1l2.11,2.12ZM375,428.74l-1.11-43.26,56.79,57.11,1.11,43.25Zm109.31,4.37-43-1.11-56.88-57.19,43,1.11Zm-39.49-61L436,363.21a7.48,7.48,0,0,0-5.12-2.21l-61.71-1.59L205.69,195.05l18.48-18.59a7.49,7.49,0,0,0,.2-10.36c32.9-24.73,68.42-41,105.7-48.49a225.44,225.44,0,0,1,30.34-3.9c10.61-.79,20.63-1.54,35.8-6.19,38.14-11.62,66.5-34.72,83.58-52,4.29-4.36,8.19-8.67,11.68-12.79Z"),n(a,"fill","white"),n(t,"xmlns","http://www.w3.org/2000/svg"),n(t,"viewBox","0 0 512 512")},m(c,l){te(c,t,l),e(t,a)},p:U,i:U,o:U,d(c){c&&le(t)}}}class He extends de{constructor(t){super();pe(this,t,null,Te,ve,{})}}function ze(r){let t,a,c,l,o,i;return c=new He({}),{c(){t=s("div"),a=s("span"),se(c.$$.fragment),l=p(),o=s("span"),o.textContent="\u7F57\u5BBE\u6C49\u6559\u7B97\u6CD5",n(a,"class","w-6 h-6"),n(o,"class","flex items-center text-2xl"),n(t,"class","sticky top-0 z-2 h-16 px-8 flex items-center gap-6 bg-dark-500 text-light-500")},m(u,m){te(u,t,m),e(t,a),ne(c,a,null),e(t,l),e(t,o),i=!0},p:U,i(u){i||(ie(c.$$.fragment,u),i=!0)},o(u){ae(c.$$.fragment,u),i=!1},d(u){u&&le(t),re(c)}}}class Ee extends de{constructor(t){super();pe(this,t,null,ze,ve,{})}}$e({dsn:"https://9e846f235a254f4482a1cbf6e065e59a@o1086363.ingest.sentry.io/6098326",integrations:[new qe],tracesSampleRate:1}),Me("access");function Re(r){let t,a,c,l,o;return a=new Ee({}),l=new Se({}),{c(){t=s("main"),se(a.$$.fragment),c=p(),se(l.$$.fragment)},m(i,u){te(i,t,u),ne(a,t,null),e(t,c),ne(l,t,null),o=!0},p:U,i(i){o||(ie(a.$$.fragment,i),ie(l.$$.fragment,i),o=!0)},o(i){ae(a.$$.fragment,i),ae(l.$$.fragment,i),o=!1},d(i){i&&le(t),re(a),re(l)}}}class Fe extends de{constructor(t){super();pe(this,t,null,Re,ve,{})}}new Fe({target:document.getElementById("app")});
