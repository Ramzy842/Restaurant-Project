(()=>{"use strict";const e=function(){let e=document.querySelector(".content_container");const n=document.createElement("div");n.classList.add("main_content");const t=document.createElement("h1");t.innerText="Welcome to Marvaurant";const c=document.createElement("p");c.innerText="Marvaurant is a restaurant that offers meals from every galaxy and planet of the marvel cinematic universe.",n.appendChild(t),n.appendChild(c),e.appendChild(n)};let n=document.querySelector(".content_container");window.addEventListener("DOMContentLoaded",(()=>{t.style.background="#e4123f",e()}));const t=document.querySelector(".home"),c=document.querySelector(".menu"),a=document.querySelector(".contact");t.addEventListener("click",(()=>{t.style.background="#e4123f",c.style.background="none",a.style.background="none",n.innerHTML="",e()})),c.addEventListener("click",(()=>{c.style.background="#e4123f",t.style.background="none",a.style.background="none",n.innerHTML="",function(){let e=document.querySelector(".content_container");const n=document.createElement("div");n.classList.add("meals_menu");const t=document.createElement("div");t.classList.add("img1");const c=document.createElement("img");c.src="/src/img/menu/asgardian_pancakes.jpg";const a=document.createElement("p");a.innerText="Asgardian Pancakes";const d=document.createElement("div");d.classList.add("img2");const o=document.createElement("img");o.src="/src/img/menu/assemble_soup.jpg";const i=document.createElement("p");i.innerText="Assemble Soup";const s=document.createElement("div");s.classList.add("img3");const r=document.createElement("img");r.src="/src/img/menu/titan_burger.jpg";const l=document.createElement("p");l.innerText="Titan Burger";const m=document.createElement("div");m.classList.add("img4");const u=document.createElement("img");u.src="/src/img/menu/earth_cookies.jpg";const p=document.createElement("p");p.innerText="Earth Cookies",t.appendChild(c),t.appendChild(a),d.appendChild(o),d.appendChild(i),s.appendChild(r),s.appendChild(l),m.appendChild(u),m.appendChild(p),n.appendChild(t),n.appendChild(d),n.appendChild(s),n.appendChild(m),e.appendChild(n)}()})),a.addEventListener("click",(()=>{a.style.background="#e4123f",t.style.background="none",c.style.background="none",n.innerHTML="",function(){let e=document.createElement("div"),n=document.querySelector(".content_container");e.innerHTML='\n    <ul>\n        <li><span>Location:</span> Galaxies and Planets</li>\n        <li><span>Phone:</span> 655-788-127</li>\n        <li><span>Website:</span><a href="https://github.com/Ramzy842"> https://github.com/Ramzy842</a></li>\n    </ul>\n        ',e.classList.add("contact-info"),n.appendChild(e)}()}))})();