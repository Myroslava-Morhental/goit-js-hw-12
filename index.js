import{a as v,S as F,i}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const M="55828489-8fa9c2e53a806421b815e9240",A="https://pixabay.com/api/";async function m(r,t=1){const{data:s}=await v(A,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return s}const h=document.querySelector(".gallery"),y=document.querySelector(".loader"),p=document.querySelector(".js-load-more"),B=new F(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function g(r){const t=r.map(({webformatURL:s,largeImageURL:n,tags:e,likes:o,views:l,comments:S,downloads:w})=>`
      <li class="gallery-card">
            <a class="gallery-link" href="${n}">
                <img class="gallery-img" src="${s}" alt="${e}" width="360" height="152"/>
            </a>
            <ul class="gallery-info">
                <li class="info-item">
                    <h3 class="info-title">Likes</h3>
                    <p class="info-qty">${o}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Views</h3>
                    <p class="info-qty">${l}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Comments</h3>
                    <p class="info-qty">${S}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Downloads</h3>
                    <p class="info-qty">${w}</p>
                </li>
            </ul>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",t),B.refresh()}function E(){h.innerHTML=""}function L(){y.classList.remove("hidden")}function u(){y.classList.add("hidden")}function b(){p.classList.replace("load-more-hidden","load-more")}function f(){p.classList.replace("load-more","load-more-hidden")}const R=document.querySelector('input[name="search-text"]'),q=document.querySelector(".form"),$=document.querySelector(".js-load-more"),P=document.querySelector(".gallery");let a=1,c="",d=0;q.addEventListener("submit",I);$.addEventListener("click",O);u();f();async function I(r){if(r.preventDefault(),c=R.value.trim(),a=1,!c){i.error({message:"Search field cannot be empty",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB"});return}E(),f(),L();try{const t=await m(c,a);if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB"});return}d=Math.ceil(t.totalHits/15),g(t.hits),a<d?b():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){i.error({message:t.message,position:"topRight"})}finally{q.reset(),u()}}async function O(){a+=1,f(),L();try{const r=await m(c,a);g(r.hits);const s=P.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"}),a<d?b():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){i.error({message:r.message,position:"topRight"})}finally{u()}}
//# sourceMappingURL=index.js.map
