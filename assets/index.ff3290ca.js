import{S as oe,i as de,s as pe,e as n,t as T,a as f,b as i,c as Y,d as e,f as V,n as D,g as ee,l as Ce,h as te,j as ve,m as le,k as se,o as ne,p as Le,q as ie,r as ye,u as be,v as ke,w as Pe,B as xe,x as qe}from"./vendor.dacea698.js";const Me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}};Me();function je(c){let t,a,r,l,o,s,d,v,$,q,k,p=c[1][0]+"",h,I,H,z=c[2][0]+"",M,E,y,G,Z,C,R,F=c[1][1]+"",K,ae,P,A=c[2][1]+"",S,re,_,j,ce,L,Q,x=c[1][2]+"",J,B,O,N=c[2][2]+"",U;return{c(){t=n("div"),a=n("div"),r=n("span"),l=T(c[0]),o=f(),s=n("div"),d=n("div"),v=n("span"),v.textContent="1 \u5C0F\u65F6",$=f(),q=n("span"),k=n("span"),h=T(p),I=f(),H=n("span"),M=T(z),E=f(),y=n("div"),G=n("span"),G.textContent="10 \u5C0F\u65F6",Z=f(),C=n("span"),R=n("span"),K=T(F),ae=f(),P=n("span"),S=T(A),re=f(),_=n("div"),j=n("span"),j.textContent="20 \u5C0F\u65F6",ce=f(),L=n("span"),Q=n("span"),J=T(x),B=f(),O=n("span"),U=T(N),i(a,"class","card-title text-white bg-tc-6 svelte-16qeg72"),i(k,"class","line-through"),i(H,"class","text-red-500 font-bold"),i(d,"class","option svelte-16qeg72"),i(R,"class","line-through"),i(P,"class","text-red-500 font-bold"),i(y,"class","option svelte-16qeg72"),i(Q,"class","line-through"),i(O,"class","text-red-500 font-bold"),i(_,"class","option svelte-16qeg72"),i(s,"class","card-content bg-tc-1 svelte-16qeg72"),i(t,"class","card bg-white shadow-md svelte-16qeg72")},m(g,w){Y(g,t,w),e(t,a),e(a,r),e(r,l),e(t,o),e(t,s),e(s,d),e(d,v),e(d,$),e(d,q),e(q,k),e(k,h),e(q,I),e(q,H),e(H,M),e(s,E),e(s,y),e(y,G),e(y,Z),e(y,C),e(C,R),e(R,K),e(C,ae),e(C,P),e(P,S),e(s,re),e(s,_),e(_,j),e(_,ce),e(_,L),e(L,Q),e(Q,J),e(L,B),e(L,O),e(O,U)},p(g,[w]){w&1&&V(l,g[0]),w&2&&p!==(p=g[1][0]+"")&&V(h,p),w&4&&z!==(z=g[2][0]+"")&&V(M,z),w&2&&F!==(F=g[1][1]+"")&&V(K,F),w&4&&A!==(A=g[2][1]+"")&&V(S,A),w&2&&x!==(x=g[1][2]+"")&&V(J,x),w&4&&N!==(N=g[2][2]+"")&&V(U,N)},i:D,o:D,d(g){g&&ee(t)}}}function Ie(c,t,a){let{title:r}=t,{commonPrice:l}=t,{currentPrice:o}=t;return c.$$set=s=>{"title"in s&&a(0,r=s.title),"commonPrice"in s&&a(1,l=s.commonPrice),"currentPrice"in s&&a(2,o=s.currentPrice)},[r,l,o]}class ge extends oe{constructor(t){super();de(this,t,Ie,je,pe,{title:0,commonPrice:1,currentPrice:2})}}var Ze="/assets/1.c686fe7a.jpg",Ae="/assets/2.61ea6a97.jpg",Be="/assets/qr-code.41c7ba7f.png";function we(c,t,a){const r=c.slice();return r[9]=t[a],r[11]=a,r}function $e(c){let t,a=c[9].title+"",r,l,o,s;function d(){return c[4](c[11])}return{c(){t=n("div"),r=T(a),l=f(),i(t,"class","section-nav h-full w-32 font-bold flex items-center justify-center cursor-pointer svelte-1bp5tok")},m(v,$){Y(v,t,$),e(t,r),e(t,l),o||(s=Ce(t,"click",d),o=!0)},p(v,$){c=v},d(v){v&&ee(t),o=!1,s()}}}function Oe(c){let t,a,r,l,o,s,d,v,$,q,k,p,h,I,H,z,M,E,y,G,Z,C,R,F,K,ae,P,A,S,re,_,j,ce,L,Q,x,J,B,O,N,U,g,w,me,W,he,fe,X=c[2],b=[];for(let u=0;u<X.length;u+=1)b[u]=$e(we(c,X,u));return j=new ge({props:{title:"\u7B97\u6CD5\u9762\u8BD5\u6A21\u62DF\uFF08\u4EC5\u7B97\u6CD5\uFF09",commonPrice:["500 \u5143","2000 \u5143","4000 \u5143"],currentPrice:["288 \u5143","888 \u5143","1688 \u5143"]}}),L=new ge({props:{title:"\u672C\u7855\u535A\u7B97\u6CD5\u8BFE\u4E1A\u6307\u5BFC",commonPrice:["1000 \u5143","9000 \u5143","18000 \u5143"],currentPrice:["588 \u5143","5088 \u5143","8888 \u5143"]}}),x=new ge({props:{title:"\u7CBE\u54C1\u7B97\u6CD5\u591A\u5BF9\u4E00\u6307\u5BFC",commonPrice:["5000 \u5143","45000 \u5143","90000 \u5143"],currentPrice:["2588 \u5143","22888 \u5143","38888 \u5143"]}}),{c(){t=n("div"),a=n("div"),a.innerHTML=`<h1>\u7B97\u6CD5\u6307\u5BFC\u670D\u52A1</h1> 
    <p class="text-xl">\u7531\u7ADE\u8D5B\u7ECF\u9A8C\u3001\u4E1A\u754C\u9605\u5386\u4E30\u5BCC\u7684\u5BFC\u5E08\u56E2\u4F53\u591A\u5BF9\u4E00\u6307\u5BFC\u670D\u52A1\uFF0C\u4E3A\u60A8\u9AD8\u6548\u7406\u6E05\u57FA\u7840\u7B97\u6CD5\u4F53\u7CFB\uFF0C\u4EE5\u4E13\u4E1A\u77E5\u8BC6\u5168\u9762\u8986\u76D6\u6C42\u5B66\u3001\u6C42\u804C\u9053\u8DEF\uFF0C\u52A9\u60A8\u62AB\u8346\u65A9\u68D8\u3002</p>`,r=f(),l=n("div");for(let u=0;u<b.length;u+=1)b[u].c();o=f(),s=n("div"),d=n("section"),v=n("div"),$=n("div"),$.textContent=`${c[2][0].title}`,q=f(),k=n("div"),p=n("ul"),p.innerHTML=`<li class="svelte-1bp5tok"><strong>\u5DE5\u6B32\u5584\u5176\u4E8B\uFF0C\u5FC5\u5148\u5229\u5176\u5668\u3002</strong>\u901A\u8FC7\u4E00\u6B21\u7B80\u5355\u7684\u4E13\u5C5E\u54A8\u8BE2\u6C9F\u901A\uFF0C\u6709\u7684\u653E\u77E2\u5730\u4E2A\u6027\u5316\u5B9A\u5236\u5B66\u5458\u7684\u5B66\u4E60\u65B9\u6848\u3002</li> 
          <li class="svelte-1bp5tok"><strong>\u4E0D\u79EF\u8DEC\u6B65\uFF0C\u65E0\u4EE5\u81F3\u5343\u91CC\u3002</strong>\u901A\u8FC7\u7CFB\u7EDF\u6027\u6216\u4E13\u9898\u6027\u7684\u7B97\u6CD5\u8BFE\u7A0B\uFF0C\u4E3A\u72EC\u7ACB\u89E3\u9898\u80FD\u529B\u7684\u63D0\u5347\u6253\u4E0B\u575A\u5B9E\u7684\u57FA\u7840\u3002</li> 
          <li class="svelte-1bp5tok"><strong>\u517B\u5175\u5343\u65E5\uFF0C\u7528\u5175\u4E00\u65F6\u3002</strong>\u9488\u5BF9\u5B66\u5458\u5927\u89C4\u6A21\u5237\u9898\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u96BE\u9898\u3001\u7E41\u9898\u8FDB\u884C\u89E3\u7B54\uFF0C\u5E76\u6307\u5BFC\u517B\u6210\u65E5\u5E38\u5237\u9898\u7684\u6B63\u786E\u4E60\u60EF\u3002</li> 
          <li class="svelte-1bp5tok">\u5B9E\u9645\u5B66\u4E60\u6D41\u7A0B\u53EF\u6839\u636E\u5B66\u5458\u81EA\u8EAB\u60C5\u51B5\u7075\u6D3B\u8C03\u6574\u3002</li>`,h=f(),I=n("img"),z=f(),M=n("section"),E=n("div"),y=n("div"),y.textContent=`${c[2][1].title}`,G=f(),Z=n("div"),C=n("img"),F=f(),K=n("p"),K.textContent="\u4E3B\u8BB2\u8001\u5E08\u4E3AICPC\u4E16\u754C\u603B\u51B3\u8D5B\u91D1\u724C\u83B7\u5F97\u8005\uFF0C\u5E76\u62E5\u6709\u4E30\u5BCC\u7684\u7B97\u6CD5\u6559\u5B66\u7ECF\u9A8C\uFF1A3\u5E74ICPC\u7ADE\u8D5B\u6559\u7EC3\u7ECF\u9A8C\uFF0C\u6307\u5BFC\u7684\u961F\u4F0D\u66FE\u4E24\u6B21\u83B7\u5F97ICPC\u4E16\u754C\u603B\u51B3\u8D5B\u91D1\u724C\u3002\u5176\u4F59\u56E2\u961F\u6210\u5458\u5747\u4E3A\u56FD\u5185\u540D\u6821\u6BD5\u4E1A\uFF0C\u542B\u591A\u540DICPC\u4E9A\u6D32\u533A\u91D1\u724C\u83B7\u5F97\u8005\u3001\u6D77\u5185\u5916\u540D\u6821\u535A\u58EB\u3001\u56FD\u5185\u9876\u7EA7offer\u83B7\u5F97\u8005\uFF0C\u5206\u5E03\u5728\u5404\u5927\u516C\u53F8\u548C\u521B\u4E1A\u516C\u53F8\u7684\u6700\u524D\u7EBF\uFF0C\u719F\u6089\u5404\u5927\u5C0F\u516C\u53F8\u7684\u9762\u8BD5\u6D41\u7A0B\u548C\u6A21\u5F0F\u3002",ae=f(),P=n("section"),A=n("div"),S=n("div"),S.textContent=`${c[2][2].title}`,re=f(),_=n("div"),te(j.$$.fragment),ce=f(),te(L.$$.fragment),Q=f(),te(x.$$.fragment),J=f(),B=n("section"),O=n("div"),N=n("div"),N.textContent=`${c[2][3].title}`,U=f(),g=n("div"),w=n("h3"),w.textContent="\u5FAE\u4FE1\u54A8\u8BE2\u8BB7\u8001\u5E08",me=f(),W=n("img"),i(a,"class","p-10 text-center bg-tc-5 text-white text-shadow-md"),i(l,"class","nav sticky top-16 z-1 h-16 flex justify-center bg-white svelte-1bp5tok"),i($,"class","title svelte-1bp5tok"),i(v,"class","title-wrapper svelte-1bp5tok"),i(I,"class","img1 svelte-1bp5tok"),ve(I.src,H=Ze)||i(I,"src",H),i(I,"alt","img1"),i(k,"class","content svelte-1bp5tok"),i(d,"class","svelte-1bp5tok"),i(y,"class","title svelte-1bp5tok"),i(E,"class","title-wrapper svelte-1bp5tok"),i(C,"class","img2 svelte-1bp5tok"),ve(C.src,R=Ae)||i(C,"src",R),i(C,"alt","img2"),i(Z,"class","content svelte-1bp5tok"),i(M,"class","svelte-1bp5tok"),i(S,"class","title svelte-1bp5tok"),i(A,"class","title-wrapper svelte-1bp5tok"),i(_,"class","content content-card svelte-1bp5tok"),i(P,"class","svelte-1bp5tok"),i(N,"class","title svelte-1bp5tok"),i(O,"class","title-wrapper svelte-1bp5tok"),i(W,"class","qr-code svelte-1bp5tok"),ve(W.src,he=Be)||i(W,"src",he),i(W,"alt","qr-code"),i(g,"class","content flex-col items-start justify-center svelte-1bp5tok"),i(B,"class","svelte-1bp5tok"),i(s,"class","flex-row justify-center items-center"),i(t,"class","body")},m(u,ue){Y(u,t,ue),e(t,a),e(t,r),e(t,l);for(let m=0;m<b.length;m+=1)b[m].m(l,null);c[5](l),e(t,o),e(t,s),e(s,d),e(d,v),e(v,$),e(d,q),e(d,k),e(k,p),e(k,h),e(k,I),e(s,z),e(s,M),e(M,E),e(E,y),e(M,G),e(M,Z),e(Z,C),e(Z,F),e(Z,K),e(s,ae),e(s,P),e(P,A),e(A,S),e(P,re),e(P,_),le(j,_,null),e(_,ce),le(L,_,null),e(_,Q),le(x,_,null),e(s,J),e(s,B),e(B,O),e(O,N),e(B,U),e(B,g),e(g,w),e(g,me),e(g,W),c[6](s),fe=!0},p(u,[ue]){if(ue&12){X=u[2];let m;for(m=0;m<X.length;m+=1){const _e=we(u,X,m);b[m]?b[m].p(_e,ue):(b[m]=$e(_e),b[m].c(),b[m].m(l,null))}for(;m<b.length;m+=1)b[m].d(1);b.length=X.length}},i(u){fe||(se(j.$$.fragment,u),se(L.$$.fragment,u),se(x.$$.fragment,u),fe=!0)},o(u){ne(j.$$.fragment,u),ne(L.$$.fragment,u),ne(x.$$.fragment,u),fe=!1},d(u){u&&ee(t),Le(b,u),c[5](null),ie(j),ie(L),ie(x),c[6](null)}}}function Ne(c,t,a){let r,l,o=[{title:"\u670D\u52A1\u6D41\u7A0B"},{title:"\u8D85\u5F3A\u5E08\u8D44"},{title:"\u5957\u9910\u65B9\u6848"},{title:"\u54A8\u8BE2\u65B9\u5F0F"}];function s(p=0){l.children[p].scrollIntoView({behavior:"smooth"})}function d(p){p[0].isIntersecting?p[0].target.classList.add("intersecting"):p[0].target.classList.remove("intersecting");for(let h=0;h<l.children.length;++h)r.children[h].classList.remove("active");for(let h=0;h<l.children.length;++h)if(l.children[h].className.includes("intersecting")){r.children[h].classList.add("active");break}}const v=new IntersectionObserver(d,{rootMargin:"-130px"});ye(()=>{for(let p=0;p<l.children.length;++p)v.observe(l.children[p])});const $=p=>s(p);function q(p){be[p?"unshift":"push"](()=>{r=p,a(0,r)})}function k(p){be[p?"unshift":"push"](()=>{l=p,a(1,l)})}return[r,l,o,s,$,q,k]}class Se extends oe{constructor(t){super();de(this,t,Ne,Oe,pe,{})}}function Te(c){let t,a;return{c(){t=ke("svg"),a=ke("path"),i(a,"d","M510.78,10.87a.5.5,0,0,0,0-.12,8.28,8.28,0,0,0-.25-1c0-.13-.08-.26-.13-.39s-.11-.27-.17-.4-.13-.27-.2-.4-.13-.24-.2-.36a5.81,5.81,0,0,0-.4-.61l-.2-.26-.43-.48a.52.52,0,0,0-.1-.11l-.15-.14-.29-.26L508,6.15l-.4-.29-.18-.12c-.17-.11-.35-.21-.54-.31l-.09,0a6.65,6.65,0,0,0-.61-.27l-.09,0-.56-.19-.22-.06c-.12,0-.24-.06-.37-.09l-.47-.09h-.1a6.88,6.88,0,0,0-1.28-.08c-3.5.12-5.24,2.11-7.88,5.14-6,6.83-24.1,27.63-54.17,37.6-15.55,5.14-26.12,4.67-43.62,3.89-5.86-.26-12.51-.55-20.31-.68C346,50,288,49.08,236.09,70.91c-23.13,9.72-44.77,24-64.43,42.55l-.42-.42a7.51,7.51,0,0,0-10.62,0L142.39,131.4,56.49,45l21-21.12a7.5,7.5,0,0,0-4-12.68L9.89.11A7.5,7.5,0,0,0,1.21,8.78L12.26,72.72a7.47,7.47,0,0,0,5.13,5.87,7.3,7.3,0,0,0,2.26.35A7.46,7.46,0,0,0,25,76.73L45.91,55.66,131.81,142l-19.12,19.23a7.52,7.52,0,0,0,0,10.6l1.07,1.06a214,214,0,0,0-33,54.22C59,279.36,60,337.61,60.46,368.91c.12,7.84.42,14.54.67,20.45.77,17.57,1.23,28.18-3.88,43.78-9.92,30.27-30.6,48.53-37.4,54.53-3,2.64-5,4.39-5.1,7.86a6.56,6.56,0,0,0,.08,1.33v.06c0,.15.05.29.08.44s.05.24.08.36l.06.22c.06.19.12.38.19.56l0,.08c.09.22.19.44.29.65h0a7.4,7.4,0,0,0,1.87,2.35l.14.11c.13.11.27.21.41.31l.24.15a2.5,2.5,0,0,0,.35.21,2.69,2.69,0,0,0,.29.16l.31.15.36.15.24.09.45.14h0a7.64,7.64,0,0,0,2.09.29,8.36,8.36,0,0,0,2-.24h0l353.23-50.52,56.89,57.2A7.52,7.52,0,0,0,439.8,512a7.66,7.66,0,0,0,2.95-.6,7.5,7.5,0,0,0,4.54-7.09l-1.46-57.19,56.83,1.47a7.5,7.5,0,0,0,5.51-12.79l-50.05-50.33L510.65,14.18h0A8,8,0,0,0,510.78,10.87Zm-486.22,45L17.8,16.72l38.92,6.8ZM241.91,84.73c49-20.6,104.92-19.71,135-19.23,7.57.12,14.1.41,19.86.67,18.57.82,30.83,1.36,49-4.64,3.18-1.05,6.23-2.21,9.17-3.45-15.56,13.11-36.84,27.1-63.08,35.1-13.58,4.15-21.95,4.78-32.54,5.57a239.85,239.85,0,0,0-32.16,4.16c-40.15,8-78.29,25.68-113.46,52.49l-31.39-31.34C200.55,106.93,220.57,93.71,241.91,84.73ZM166,129l42.3,42.22L170.9,208.76l-42.29-42.23ZM71.51,437.8c6-18.19,5.42-30.48,4.61-49.1-.25-5.81-.54-12.39-.66-20-.48-30.2-1.37-86.43,19.15-135.77a198.08,198.08,0,0,1,29.83-49.33l32.27,32.22c-22.14,32.18-37,66.77-44.13,102.91a246.71,246.71,0,0,0-4.1,32.2c-.8,10.69-1.43,19.14-5.58,32.85-8,26.32-21.82,47.67-34.83,63.3C69.3,444.09,70.46,441,71.51,437.8ZM52.64,483.92C75,464.78,104,432,117.26,388.09c4.62-15.29,5.38-25.38,6.18-36.07a228.89,228.89,0,0,1,3.86-30.43c6.6-33.4,20.22-65.46,40.48-95.41a7.49,7.49,0,0,0,3.14.69h0a7.44,7.44,0,0,0,5.3-2.21l18.88-19L358.52,370l1.59,62.1a7.51,7.51,0,0,0,2.18,5.1l2.11,2.12ZM375,428.74l-1.11-43.26,56.79,57.11,1.11,43.25Zm109.31,4.37-43-1.11-56.88-57.19,43,1.11Zm-39.49-61L436,363.21a7.48,7.48,0,0,0-5.12-2.21l-61.71-1.59L205.69,195.05l18.48-18.59a7.49,7.49,0,0,0,.2-10.36c32.9-24.73,68.42-41,105.7-48.49a225.44,225.44,0,0,1,30.34-3.9c10.61-.79,20.63-1.54,35.8-6.19,38.14-11.62,66.5-34.72,83.58-52,4.29-4.36,8.19-8.67,11.68-12.79Z"),i(a,"fill","white"),i(t,"xmlns","http://www.w3.org/2000/svg"),i(t,"viewBox","0 0 512 512")},m(r,l){Y(r,t,l),e(t,a)},p:D,i:D,o:D,d(r){r&&ee(t)}}}class He extends oe{constructor(t){super();de(this,t,null,Te,pe,{})}}function ze(c){let t,a,r,l,o,s;return r=new He({}),{c(){t=n("div"),a=n("span"),te(r.$$.fragment),l=f(),o=n("span"),o.textContent="\u7F57\u5BBE\u6C49\u6559\u7B97\u6CD5",i(a,"class","w-6 h-6"),i(o,"class","flex items-center text-2xl"),i(t,"class","sticky top-0 z-2 h-16 px-8 flex items-center gap-6 bg-dark-500 text-light-500")},m(d,v){Y(d,t,v),e(t,a),le(r,a,null),e(t,l),e(t,o),s=!0},p:D,i(d){s||(se(r.$$.fragment,d),s=!0)},o(d){ne(r.$$.fragment,d),s=!1},d(d){d&&ee(t),ie(r)}}}class Ee extends oe{constructor(t){super();de(this,t,null,ze,pe,{})}}Pe({dsn:"https://9e846f235a254f4482a1cbf6e065e59a@o1086363.ingest.sentry.io/6098326",integrations:[new xe],tracesSampleRate:1}),qe("access");function Re(c){let t,a,r,l,o;return a=new Ee({}),l=new Se({}),{c(){t=n("main"),te(a.$$.fragment),r=f(),te(l.$$.fragment)},m(s,d){Y(s,t,d),le(a,t,null),e(t,r),le(l,t,null),o=!0},p:D,i(s){o||(se(a.$$.fragment,s),se(l.$$.fragment,s),o=!0)},o(s){ne(a.$$.fragment,s),ne(l.$$.fragment,s),o=!1},d(s){s&&ee(t),ie(a),ie(l)}}}class Fe extends oe{constructor(t){super();de(this,t,null,Re,pe,{})}}new Fe({target:document.getElementById("app")});
