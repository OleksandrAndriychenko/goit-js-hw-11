import{a as u,S as f,i as h}from"./assets/vendor-Dy2ZTtfi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function m(r){const s="51351700-57b4425fb1f1cd66a3797fddb",o="https://pixabay.com/api/",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`${o}?${a}`).then(e=>e.data.hits).catch(e=>console.log(e))}let n=null;const l=document.querySelector(".gallery");function g(r){return r.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:t,comments:i,downloads:d})=>`
        <li class="gallery-card">
            <a class="gallery-link" href=${o}>
            <img
                class="gallery-image"
                src=${s}
                alt=${a}
            /></a>
            <div class="note">
                <div class="likes">
                <h3>likes</h3>
                <h3>${e}</h3>
                </div>
                <div class="views">
                <h3>views</h3></h3>
                <h3>${t}</h3>
                </div>
                <div class="comments">
                <h3>comments</h3>
                <h3>${i}</h3>
                </div>
                <div class="downloads">
                <h3>downloads</h3>
                <h3>${d}</h3>
                </div>
            </div>
        </li>
    `).join("")}function y(){n?n.refresh():n=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0,showCounter:!0})}function p(){l&&(l.innerHTML="")}function v(r){l.innerHTML=g(r),y()}function L(){document.querySelector(".load").classList.add("loader")}function c(){document.querySelector(".loader").classList.remove("loader")}const b=document.querySelector(".gallery"),S=document.querySelector(".form");S.addEventListener("submit",$);function $(r){r.preventDefault(),p(),L();const s=r.target.elements["search-text"].value;m(s).then(o=>{o.length<=0?(h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}),c()):(c(),v(o))}).catch(o=>{b.innerHTML=`<h3>${o.message}</h3>`})}
//# sourceMappingURL=index.js.map
