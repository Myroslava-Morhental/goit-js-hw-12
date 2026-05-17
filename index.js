import{a as w,S as F,i as s}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const M="55828489-8fa9c2e53a806421b815e9240",A="https://pixabay.com/api/";async function m(r,t=1){const{data:i}=await w(A,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return i}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".js-load-more"),$=new F(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function g(r){const t=r.map(({webformatURL:i,largeImageURL:l,tags:e,likes:o,views:a,comments:S,downloads:v})=>`
      <li class="gallery-card">
            <a class="gallery-link" href="${l}">
                <img class="gallery-img" src="${i}" alt="${e}" width="360" height="152"/>
            </a>
            <ul class="gallery-info">
                <li class="info-item">
                    <h3 class="info-title">Likes</h3>
                    <p class="info-qty">${o}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Views</h3>
                    <p class="info-qty">${a}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Comments</h3>
                    <p class="info-qty">${S}</p>
                </li>
                <li class="info-item">
                    <h3 class="info-title">Downloads</h3>
                    <p class="info-qty">${v}</p>
                </li>
            </ul>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",t),$.refresh()}function E(){h.innerHTML=""}function L(){p.classList.remove("hidden")}function d(){p.classList.add("hidden")}function b(){y.classList.replace("load-more-hidden","load-more")}function f(){y.classList.replace("load-more","load-more-hidden")}const P=document.querySelector('input[name="search-text"]'),q=document.querySelector(".form"),R=document.querySelector(".js-load-more");let n=1,c="",u=0;q.addEventListener("submit",B);R.addEventListener("click",O);d();f();async function B(r){if(r.preventDefault(),c=P.value.trim(),!c){s.error({message:"Search field cannot be empty",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB"});return}E(),f(),L(),m(c,n).then(t=>{if(t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040",messageColor:"#FAFAFB"});return}u=Math.ceil(t.totalHits/15),g(t.hits),n<u?b():s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}).catch(t=>{s.error({message:t.message,position:"topRight"})}).finally(()=>{q.reset(),d()})}async function O(){n+=1,f(),L();try{const r=await m(c,n);g(r.hits),n<u?b():s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){s.error({message:r.message,position:"topRight"})}finally{d()}}
//# sourceMappingURL=index.js.map
