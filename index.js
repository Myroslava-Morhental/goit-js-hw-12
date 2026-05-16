import{a as p,S as y,i as l}from"./assets/vendor-DFA_L3eI.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="55828489-8fa9c2e53a806421b815e9240",L="https://pixabay.com/api/";function b(i){return p(L,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:o})=>o)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),q=new y(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function S(i){const o=i.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:h})=>`
      <li class="gallery-card">
            <a class="gallery-link" href="${n}">
                <img class="gallery-img" src="${r}" alt="${e}" width="360" height="152"/>
            </a>
            <ul class="gallery-info">
                <li class="info-item">
                    <h3 class="info-title">Likes</h3>
                    <p class="info-qty">${t}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Views</h3>
                    <p class="info-qty">${s}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Comments</h3>
                    <p class="info-qty">${d}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Downloads</h3>
                    <p class="info-qty">${h}</p>
                </li>
            </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),q.refresh()}function a(){c.innerHTML=""}function F(){u.classList.remove("hidden")}function f(){u.classList.add("hidden")}const A=document.querySelector('input[name="search-text"]'),m=document.querySelector(".form");m.addEventListener("submit",$);f();function $(i){i.preventDefault(),a();const o=A.value.trim();if(!o){l.error({message:"Search field cannot be empty",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB"});return}a(),F(),b(o).then(r=>{if(r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB"});return}S(r.hits)}).catch(r=>{console.log("error",r.message)}).finally(()=>{m.reset(),f()})}
//# sourceMappingURL=index.js.map
