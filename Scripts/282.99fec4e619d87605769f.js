"use strict";(self.webpackJsonpRuntime=self.webpackJsonpRuntime||[]).push([[282],{6282:(e,t,a)=>{function n(){!function(){const e=document.querySelectorAll('.dmMobileBody [dmle_extension="onelinksmenu"] li.dmUDNavigationItem_dmMore > a');e.forEach((e=>e.removeEventListener("click",r))),e.forEach((e=>e.addEventListener("click",r)))}(),[...document.querySelectorAll(".unifiednav:not([data-nav-structure='VERTICAL']) .unifiednav__container_sub-nav[data-depth=\"0\"]")].forEach((e=>{const t=e.querySelector(".unifiednav__container"),a=e.getBoundingClientRect();a.top+a.height<=window.innerHeight||(t?(e.style.transition="transform 0.1s ease-out, opacity 0.1s ease-out, clip-path 0.1s ease-out",e.addEventListener("wheel",(e=>{e.preventDefault();const t=e.currentTarget,n=Number(t.dataset.scrollY||0),r=window._navScrollSpeed||35,i=e.deltaY>0?r:-r,o=a.height-window.innerHeight+a.top,s=Math.max(0,Math.min(n+i,o));t.dataset.scrollY=s,t.style.transform=`translate(0, -${s}px)`,t.style.clipPath=`inset(${s}px -100vw -100vw -100vw)`}))):(e.style.maxHeight="65vh",e.style.overflow="auto"))})),function(){const e="Tab",t="Enter",a="Escape",n="Space",r="ArrowLeft",i="ArrowUp",o="ArrowRight",s="ArrowDown",c=document.querySelectorAll(".unifiednav");Array.from(c).forEach((c=>{const l=c.querySelectorAll(".unifiednav > ul > li, .middleLogoLink"),d=c.querySelectorAll(".unifiednav > ul > li li");let u,h,f=0,p=[];const y=e=>{e.style.removeProperty("opacity"),e.style.removeProperty("max-height")},v=()=>{u&&(y(u),u=null)},m=()=>{p.forEach((e=>y(e))),p=[]},b=e=>{const t=e.getElementsByTagName("a")[0];t&&t.focus()},g=e=>{f=e,e===l.length?f=0:e<0&&(f=l.length-1),l[f].classList.contains("middleLogoLink")?l[f].focus():b(l[f])},k=(e,t)=>{h=t;const a=e.children;t===a.length?h=0:t<0&&(h=a.length-1),b(a[h]),(e=>{u=e,u.style.opacity=1,u.style.maxHeight="initial",p.push(e)})(e)},A=e=>{e.getElementsByTagName("a")[0].click()};Array.prototype.forEach.call(l,((c,d)=>{(({element:e,index:t})=>{Array.from(e.querySelectorAll("a")).forEach(((a,n)=>{a.closest(".unifiednav__container_sub-nav")?a.setAttribute("tabindex","-1"):a.setAttribute("tabindex","0"),0===t&&0===n&&e.addEventListener("focus",(()=>{f=0}))}))})({element:c,index:d}),c.addEventListener("focus",(()=>{h=0,Array.prototype.forEach.call(l,(e=>{e.setAttribute("aria-expanded","false")}))})),c.addEventListener("click",(function(){"false"===this.getAttribute("aria-expanded")||null===this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","true"):this.setAttribute("aria-expanded","false")})),c.addEventListener("keydown",(function(c){let l=!1;const d=this.querySelector("ul");switch(c.code){case o:g(f+1),m(),l=!0;break;case r:g(f-1),m(),l=!0;break;case e:m();break;case n:case t:d?(h=0,v(),k(d,0)):A(this),l=!0;break;case s:d&&(h=0,k(d,0),l=!0);break;case i:d&&(h=d.querySelectorAll("li").length-1,k(d,h),l=!0);break;case a:v(),g(f),l=!0;break;default:l=!1}l&&c.preventDefault()}))})),Array.prototype.forEach.call(d,(c=>{c.addEventListener("keydown",(function(c){let l=!1;const d=this.querySelector("ul"),p=this.parentNode.parentNode,y=p.closest(".unifiednav__container_sub-nav"),b=()=>{v(),h=Array.prototype.indexOf.call(y.children,p),u=y,k(y,h)};switch(c.code){case e:m();break;case o:d?k(d,0):(g(f+1),m()),l=!0;break;case r:y?b():(g(f-1),m()),l=!0;break;case a:y?b():(g(f),v()),l=!0;break;case s:k(this.parentNode,h+1),l=!0;break;case i:k(this.parentNode,h-1),l=!0;break;case t:case n:d?k(d,0):A(this),l=!0;break;default:l=!1}return l&&(c.preventDefault(),c.stopPropagation()),!1}))}))}))}()}function r(e){const t=e.target.closest("li.dmUDNavigationItem_dmMore");t.classList.add("hover"),document.body.addEventListener("click",(()=>{t.classList.remove("hover")}),{once:!0})}a.r(t),a.d(t,{init:()=>n})}}]);