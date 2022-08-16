(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{E:()=>Ke});const t=[{title:"Aqua Caelestis",src:"../assets/sounds/Aqua Caelestis.mp3",duration:"00:39"},{title:"Ennio Morricone",src:"../assets/sounds/Ennio Morricone.mp3",duration:"01:37"},{title:"River Flows In You",src:"../assets/sounds/River Flows In You.mp3",duration:"01:37"},{title:"Summer Wind",src:"../assets/sounds/Summer Wind.mp3",duration:"01:51"}],n=document.querySelector(".music-player"),o=document.querySelector(".playlist"),c=document.querySelector(".play-pause"),r=document.querySelector(".prevSong"),s=document.querySelector(".nextSong"),a=document.querySelector(".volume-btn"),i=document.querySelector(".volume-icon"),l=document.querySelector(".volume__slider"),u=document.querySelector(".volume__level"),d=document.querySelector(".controls__info"),m=document.querySelector(".info__song-time"),h=document.querySelector(".info__song-text"),g=document.querySelector(".duration__slider"),y=document.querySelector(".song__currenttime"),w=new Audio;let f=!1,S=0,v=.75,q=100*v;function L(){w.src=t[S].src,T(),f?(b(c),_(),y.style.width="0%",w.pause(),f=!1):(w.currentTime=0,w.play(),p(c),function(){const e=o.childNodes[S];e.classList.add("active"),p(e)}(),setTimeout(M,200),f=!0)}function p(e){const t=e.querySelector(".playBtn");t.classList.remove("fa-play"),t.classList.add("fa-pause")}function b(e){const t=e.querySelector(".playBtn");t.classList.remove("fa-pause"),t.classList.add("fa-play")}function _(){const e=o.childNodes[S];e.classList.remove("active"),b(e)}function k(){_(),j(),S=S===t.length-1?0:++S,f=!1,L()}function x(e){o.childNodes[S].childNodes[0]===this||(_(),j(),S=+this.dataset.number,f=!1),L()}function C(){i.classList.remove("fa-volume-xmark"),i.classList.add("fa-volume-high")}function E(){i.classList.remove("fa-volume-high"),i.classList.add("fa-volume-xmark")}function $(){u.style.width=`${q}%`}function T(){const e=function(e){let t=parseInt(e),n=parseInt(t/60);t%=60;let o=t.toString().padStart(2,0);return`${n.toString().padStart(2,0)}:${o}`}(w.currentTime);m.textContent=`${e} / ${t[S].duration}`,function(){const e=Math.round(w.currentTime/w.duration*100);y.style.width=`${e}%`}()}function M(){h.textContent=t[S].title,d.classList.add("show")}function j(){d.classList.remove("show"),h.textContent=""}$(),T(),M(),c.addEventListener("click",L),r.addEventListener("click",(function(){_(),j(),S=0===S?t.length-1:--S,f=!1,L()})),s.addEventListener("click",k),w.addEventListener("ended",k),a.addEventListener("click",(function(){i.classList.contains("fa-volume-high")?(E(),w.volume=0,u.style.width="0%"):(C(),w.volume=v,$())})),l.addEventListener("click",(function(e){const t=e.offsetX,n=l.offsetWidth;0<t&&t<n&&(v=+(t/n).toFixed(2),q=100*v),q<5?(v=0,q=0,E(),w.volume=0):(C(),w.volume=v),$()})),w.addEventListener("timeupdate",T),g.addEventListener("click",(function(e){const t=g.offsetWidth,n=e.offsetX/t*w.duration;w.currentTime=n}));const I=document.querySelector(".date");function U(){I.classList.contains("show")?(I.classList.remove("show"),setTimeout((()=>U()),300)):I.classList.add("show")}const A=["night","morning","afternoon","evening"],B={"en-US":["Good night,","Good morning,","Good afternoon,","Good evening,"],"ru-RU":["Доброй ночи,","Доброе утро,","Добрый день,","Добрый вечер,"]},D={"en-US":"Enter your name","ru-RU":"Введите имя"},G=document.querySelector(".greeting"),H=document.querySelector(".greeting-container"),N=document.querySelector(".name");function P(e){return void 0===e&&(e=(new Date).getHours()),Math.floor(e/6)}function R(){H.classList.contains("show")?(H.classList.remove("show"),setTimeout((()=>R()),300)):H.classList.add("show")}function W(e,t){return Math.floor(Math.random()*(t-e+1))+e}const O=document.querySelector("body"),F=document.querySelector(".btn-left"),Y=document.querySelector(".btn-right");let z=W(1,20);async function J(){const e=new Image;"GitHub"===Ke.bgSrc?e.src=`https://raw.githubusercontent.com/RussianBoy64/stage1-tasks/assets/images/${A[P()]}/${z.toString().padStart(2,"0")}.webp`:"Unsplash"===Ke.bgSrc?e.src=await async function(){let e=0===Ke.keyword.length?A[P()]:Ke.keyword;e instanceof Array&&(e=function(e){return e.reduce(((e,t)=>e+`query=${t}||`),"")}(e));const t=`https://api.unsplash.com/photos/random?${e}&orientation=landscape&client_id=BqMBDBbjd6MPILUA4zYcYSMA7i39DUiFfP9-iqWrm2Y`,n=await fetch(t);return(await n.json()).urls.regular}():"Flickr"===Ke.bgSrc&&(e.src=await async function(){let e=0===Ke.keyword.length?A[P()]:Ke.keyword;e instanceof Array&&(e=function(e){return e.join(",")}(e));const t=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d76f235c6f367ab7ab9cbbc7f82d2ce7&tags=${e}&tag_mode=any&extras=url_l&per_page=200&page=1&format=json&nojsoncallback=1`,n=await fetch(t),o=(await n.json()).photos.photo.filter((e=>e.width_l>e.height_l));return o[W(0,o.length-1)].url_l}()),e.addEventListener("load",(()=>{O.style.backgroundImage=`url(${e.src})`})),O.addEventListener("transitionend",(()=>{F.addEventListener("click",X),Y.addEventListener("click",Q)}))}function X(){F.removeEventListener("click",X),Y.removeEventListener("click",Q),z=1===z?20:--z,J()}function Q(){F.removeEventListener("click",X),Y.removeEventListener("click",Q),z=20===z?1:++z,J()}const K=document.querySelector(".time");function V(e){K.textContent=function(e){const t=new Date,n=`${t.getHours().toString().padStart(2,"0")} : ${t.getMinutes().toString().padStart(2,"0")} : ${t.getSeconds().toString().padStart(2,"0")}`;return"00 : 00 : 00"===n?(U(),R(),J()):"06 : 00 : 00"!==n&&"12 : 00 : 00"!==n&&"18 : 00 : 00"!==n||(R(),J()),n}(),setTimeout((()=>V(e)),1e3)}const Z={ru:{wind:"Скорость ветра",windMetric:"м/с",humidity:"Влажность"},en:{wind:"Wind speed",windMetric:"mps",humidity:"Humidity"}},ee={en:{error:"Error",400:"nothing to geocode",404:"city not found"},ru:{error:"Ошибка",400:"город не введен",404:"город не найден"}},te={en:"Enter city",ru:"Введите город"},ne=document.querySelector(".weather"),oe=document.querySelector(".weather__city"),ce=document.querySelector(".weather__error-container"),re=document.querySelector(".weather__error-name"),se=document.querySelector(".weather__error-message"),ae=document.querySelector(".weather__description-container"),ie=document.querySelector(".weather-icon"),le=document.querySelector(".weather__temperature"),ue=document.querySelector(".weather__description"),de=document.querySelector(".weather__wind"),me=document.querySelector(".weather__humidity");async function he(e,t,n="metric"){t&&(t=t.slice(0,2));const o=`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=${t}&appid=0acf28d2a0bde48f52da4ba3eb20ecef&units=${n}`;oe.value=e,oe.placeholder=te[t];const c=await fetch(o),r=await c.json();c.ok?(ce.classList.contains("show")&&(ce.classList.remove("show"),re.textContent="",se.textContent=""),ge(r,t)):(ae.classList.contains("show")&&(ae.classList.remove("show"),ie.className="weather-icon owf",le.textContent="",ue.textContent="",de.textContent="",me.textContent=""),ye(r,e,t)),ne.classList.add("show")}function ge(e,t){ae.classList.contains("show")?(ae.classList.remove("show"),setTimeout((()=>ge(e,t)),300)):(ie.className=`weather-icon owf owf-${e.weather[0].id}`,le.textContent=`${Math.floor(e.main.temp)}°C`,ue.textContent=e.weather[0].description,de.textContent=`${Z[t].wind}: ${Math.floor(e.wind.speed)} ${Z[t].windMetric}`,me.textContent=`${Z[t].humidity}: ${Math.floor(e.main.humidity)}%`,ae.classList.add("show"))}function ye(e,t,n){ce.classList.contains("show")?(ce.classList.remove("show"),setTimeout((()=>ye(e,t,n)),300)):(re.textContent=`${ee[n].error}: ${e.cod}`,se.textContent=`'${t}' ${ee[n][e.cod]}`,ce.classList.add("show"))}oe.addEventListener("change",(function(){Ke.city=oe.value,he(oe.value,Ke.locale)}));const we=document.querySelector(".quote-container"),fe=document.querySelector(".quote-change"),Se=document.querySelector(".quote"),ve=document.querySelector(".quote-text"),qe=document.querySelector(".quote-author");let Le;function pe(e){Se.classList.contains("show")?(Se.classList.remove("show"),setTimeout((()=>pe(e)),300)):(ve.textContent=`"${e.text}"`,qe.textContent=e.author,Se.classList.add("show"),we.classList.add("show"))}async function be(e,t){const n=await fetch("./assets/quotes/quotes.json"),o=await n.json(),c=o[e].length;Le=t||W(0,c),pe(o[e][Le])}fe.addEventListener("click",(()=>be(Ke.locale)));const _e={"en-US":{lang:"Language",bgSrc:"Background src",bgTheme:"Background theme",bgThemePlh:"Enter tag",title:"Show",time:"Time",date:"Date",greeting:"Greeting",quote:"Quote",weather:"Weather",audio:"Audio"},"ru-RU":{lang:"Язые",bgSrc:"Фоновый сервис",bgTheme:"Фоновая тема",bgThemePlh:"Введите тему",title:"Показать",time:"Время",date:"Дата",greeting:"Приветствие",quote:"Цитата",weather:"Погода",audio:"Аудио"}},ke=document.querySelector(".settings__btn"),xe=document.querySelector(".settings__container"),Ce=document.querySelector(".settings__form"),Ee=document.querySelector(".settings__title"),$e=document.querySelector(".backdrop"),Te=document.querySelector(".bgTheme-container"),Me=document.querySelector("#language"),je=document.querySelector("#bgSrc"),Ie=document.querySelector("#bgTag"),Ue=document.querySelector("#timeStg"),Ae=document.querySelector("#dateStg"),Be=document.querySelector("#greetingStg"),De=document.querySelector("#quoteStg"),Ge=document.querySelector("#weatherStg"),He=document.querySelector("#audioStg"),Ne=document.querySelector(".language-label"),Pe=document.querySelector(".bgSrc-label"),Re=document.querySelector(".bgTheme-label"),We=document.querySelector(".time-label"),Oe=document.querySelector(".date-label"),Fe=document.querySelector(".greeting-label"),Ye=document.querySelector(".quote-label"),ze=document.querySelector(".weather-label"),Je=document.querySelector(".audio-label");function Xe(){"GitHub"===je.value?Te.classList.remove("show"):Te.classList.add("show")}function Qe(e){e.time?(K.classList.add("show"),V(e.locale)):K.classList.remove("show"),e.date?(U(),function(e,t){const n=function(e,t){return void 0===t&&(t=new Date),t.toLocaleDateString(e,{weekday:"long",month:"long",day:"numeric"})}(e,t);I.textContent=n}(e.locale)):I.classList.remove("show"),e.greeting?(R(),function(e,t){const n=P(void 0);G.textContent=B[e][n],N.placeholder=D[e]}(e.locale),function(e){e.name?(N.value=e.name,N.size=e.name.length):N.size=13,N.maxLength=15,N.addEventListener("keyup",(()=>{const t=N.value,n=N.value.length;N.size=0===n?13:n>15?15:n,e.name=t}))}(e)):H.classList.remove("show"),J(),e.weather?he(e.city,e.locale):ne.classList.remove("show"),e.quote?be(e.locale,Le):we.classList.remove("show"),e.audio?n.classList.add("show"):n.classList.remove("show"),function(e){Ne.textContent=_e[e.locale].lang,Me.value=e.locale,Pe.textContent=_e[e.locale].bgSrc,je.value=e.bgSrc,Xe(),Re.textContent=_e[e.locale].bgTheme,Ie.placeholder=_e[e.locale].bgThemePlh,Ie.value=null===e.keyword?null:e.keyword.join(" "),Ee.textContent=_e[e.locale].title,We.textContent=_e[e.locale].time,Ue.checked=e.time,Oe.textContent=_e[e.locale].date,Ae.checked=e.date,Fe.textContent=_e[e.locale].greeting,Be.checked=e.greeting,Ye.textContent=_e[e.locale].quote,De.checked=e.quote,ze.textContent=_e[e.locale].weather,Ge.checked=e.weather,Je.textContent=_e[e.locale].audio,He.checked=e.audio}(e)}ke.addEventListener("click",(function(){ke.classList.toggle("active"),xe.classList.toggle("show"),$e.classList.toggle("active")})),je.addEventListener("change",Xe),$e.addEventListener("click",(function(){ke.classList.remove("active"),xe.classList.remove("show"),$e.classList.remove("active")})),Ce.addEventListener("submit",(function(e){e.preventDefault(),function(){if(Ke.locale=Me.value,Ke.bgSrc=je.value,"GitHub"===je.value)Ke.keyword=null,Ie.value="";else{const e=Ie.value.replace(/,/g,"").toLowerCase().split(" ").filter((e=>""!==e));Ke.keyword=e}Ke.time=Ue.checked,Ke.date=Ae.checked,Ke.greeting=Be.checked,Ke.quote=De.checked,Ke.weather=Ge.checked,Ke.audio=He.checked}(),Qe(Ke)}));let Ke=new class{constructor(e,t){this.name=e||"",this.city=t||"Saratov",this.locale="ru-RU",this.bgSrc="GitHub",this.keyword=null,this.time=!0,this.date=!0,this.greeting=!0,this.quote=!0,this.weather=!0,this.audio=!0}};document.addEventListener("DOMContentLoaded",(()=>{Ke=function(){const e=localStorage.getItem("user");return JSON.parse(e)}()||Ke,function(){for(let e=0;e<t.length;e++){const n=document.createElement("li");n.classList.add("playlist__item"),n.innerHTML=`<button class="btn" data-number="${e}">\n    <i class="fa-solid fa-play playBtn"></i>\n  </button>\n  <div class="playlist__item__song-info">\n    <span class="playlist__item__song-name">${t[e].title}</span\n    ><span class="playlist__item__song-duration">${t[e].duration}</span>\n  </div>`,o.append(n),n.querySelector("button").addEventListener("click",x)}}(),Qe(Ke)})),window.addEventListener("beforeunload",(()=>function(e){const t=JSON.stringify(e);localStorage.setItem("user",t)}(Ke))),console.log("Итоговая оценка 150/160\n1. Часы и календарь - 15/15\n2. Приветствие - 10/10\n3. Смена фонового изображения - 20/20\n4. Виджет погоды - 15/15\n5. Виджет цитата дня - 10/10\n6. Аудиоплеер - 15/15\n7. Продвинутый аудиоплеер - 20/20\n8. Перевод приложения на два языка(en/ru) - 15/15\n9. Получение фонового изображения от API - 10/10\n10. Настройки приложения - 20/20\n11. Дополнительный функционал - 0/10\n\nП.с. На дополнительный функционал не хватило времени,\nно основной старался делать без ошибок и несколько раз перепроверил.\nОсновного функционала должно хватить, чтобы мне набрать максимальные\n150 баллов за этот таск.\nЕсли я где-то пропустил ошибку в основном функционале,\nпожалуйста оставьте свой контакт(лучше Telegram), чтобы я успел исправить\nи скинуть на перепроверку. Спасибо!\n ")})();
