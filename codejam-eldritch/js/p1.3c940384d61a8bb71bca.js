(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var n=r.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../"})(),e.d({},{$:()=>j});var t={};e.r(t),e.d(t,{blueCards:()=>a,brownCards:()=>n,greenCards:()=>o});const r={brown1:e.p+"assets/MythicCards/brown/brown1.png",brown2:e.p+"assets/MythicCards/brown/brown2.png",brown3:e.p+"assets/MythicCards/brown/brown3.png",brown4:e.p+"assets/MythicCards/brown/brown4.png",brown5:e.p+"assets/MythicCards/brown/brown5.png",brown6:e.p+"assets/MythicCards/brown/brown6.png",brown7:e.p+"assets/MythicCards/brown/brown7.png",brown8:e.p+"assets/MythicCards/brown/brown8.png",brown9:e.p+"assets/MythicCards/brown/brown9.png",brown10:e.p+"assets/MythicCards/brown/brown10.png",brown11:e.p+"assets/MythicCards/brown/brown11.png",brown12:e.p+"assets/MythicCards/brown/brown12.png",brown13:e.p+"assets/MythicCards/brown/brown13.png",brown14:e.p+"assets/MythicCards/brown/brown14.png",brown15:e.p+"assets/MythicCards/brown/brown15.png",brown16:e.p+"assets/MythicCards/brown/brown16.png",brown17:e.p+"assets/MythicCards/brown/brown17.png",brown18:e.p+"assets/MythicCards/brown/brown18.png",brown19:e.p+"assets/MythicCards/brown/brown19.png",brown20:e.p+"assets/MythicCards/brown/brown20.png",brown21:e.p+"assets/MythicCards/brown/brown21.png"},n=[{id:"brown1",cardFace:r.brown1,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:r.brown2,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:r.brown3,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:r.brown4,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:r.brown5,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:r.brown6,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:r.brown7,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:r.brown8,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:r.brown9,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:r.brown10,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:r.brown11,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:r.brown12,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:r.brown13,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:r.brown14,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:r.brown15,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:r.brown16,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:r.brown17,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:r.brown18,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:r.brown19,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:r.brown20,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:r.brown21,difficulty:"easy",color:"brown"}],s={blue1:e.p+"assets/MythicCards/blue/blue1.png",blue2:e.p+"assets/MythicCards/blue/blue2.png",blue3:e.p+"assets/MythicCards/blue/blue3.png",blue4:e.p+"assets/MythicCards/blue/blue4.png",blue5:e.p+"assets/MythicCards/blue/blue5.png",blue6:e.p+"assets/MythicCards/blue/blue6.png",blue7:e.p+"assets/MythicCards/blue/blue7.png",blue8:e.p+"assets/MythicCards/blue/blue8.png",blue9:e.p+"assets/MythicCards/blue/blue9.png",blue10:e.p+"assets/MythicCards/blue/blue10.png",blue11:e.p+"assets/MythicCards/blue/blue11.png",blue12:e.p+"assets/MythicCards/blue/blue12.png"},a=[{id:"blue1",cardFace:s.blue1,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:s.blue2,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:s.blue3,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:s.blue4,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:s.blue5,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:s.blue6,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:s.blue7,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:s.blue8,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:s.blue9,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:s.blue10,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:s.blue11,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:s.blue12,difficulty:"normal",color:"blue"}],c={green1:e.p+"assets/MythicCards/green/green1.png",green2:e.p+"assets/MythicCards/green/green2.png",green3:e.p+"assets/MythicCards/green/green3.png",green4:e.p+"assets/MythicCards/green/green4.png",green5:e.p+"assets/MythicCards/green/green5.png",green6:e.p+"assets/MythicCards/green/green6.png",green7:e.p+"assets/MythicCards/green/green7.png",green8:e.p+"assets/MythicCards/green/green8.png",green9:e.p+"assets/MythicCards/green/green9.png",green10:e.p+"assets/MythicCards/green/green10.png",green11:e.p+"assets/MythicCards/green/green11.png",green12:e.p+"assets/MythicCards/green/green12.png",green13:e.p+"assets/MythicCards/green/green13.png",green14:e.p+"assets/MythicCards/green/green14.png",green15:e.p+"assets/MythicCards/green/green15.png",green16:e.p+"assets/MythicCards/green/green16.png",green17:e.p+"assets/MythicCards/green/green17.png",green18:e.p+"assets/MythicCards/green/green18.png"},o=[{id:"green1",cardFace:c.green1,difficulty:"easy",color:"green"},{id:"green2",cardFace:c.green2,difficulty:"hard",color:"green"},{id:"green3",cardFace:c.green3,difficulty:"hard",color:"green"},{id:"green4",cardFace:c.green4,difficulty:"hard",color:"green"},{id:"green5",cardFace:c.green5,difficulty:"hard",color:"green"},{id:"green6",cardFace:c.green6,difficulty:"hard",color:"green"},{id:"green7",cardFace:c.green7,difficulty:"normal",color:"green"},{id:"green8",cardFace:c.green8,difficulty:"normal",color:"green"},{id:"green9",cardFace:c.green9,difficulty:"normal",color:"green"},{id:"green10",cardFace:c.green10,difficulty:"normal",color:"green"},{id:"green11",cardFace:c.green11,difficulty:"normal",color:"green"},{id:"green12",cardFace:c.green12,difficulty:"easy",color:"green"},{id:"green13",cardFace:c.green13,difficulty:"normal",color:"green"},{id:"green14",cardFace:c.green14,difficulty:"normal",color:"green"},{id:"green15",cardFace:c.green15,difficulty:"normal",color:"green"},{id:"green16",cardFace:c.green16,difficulty:"easy",color:"green"},{id:"green17",cardFace:c.green17,difficulty:"easy",color:"green"},{id:"green18",cardFace:c.green18,difficulty:"easy",color:"green"}],i={body:document.querySelector("body"),backdrop:document.querySelector(".backdrop"),loader:document.querySelector(".loader"),gameTitle:document.querySelector(".header__gameTitle"),main:document.querySelector(".main"),mainInner:document.querySelector(".main__inner"),settings:document.querySelector(".settings"),settingsForm:document.querySelector(".settings__form"),ancientSettings:document.querySelector(".settings__ancients"),complexitySettings:document.querySelector(".settings__complexity"),submitBtn:document.querySelector(".btn__submit"),mythicCard:document.querySelector(".mythic__card"),complexityTitle:document.querySelector(".complexity__title"),complexityLevel:document.querySelector(".level__progress"),ancientStageCards:document.querySelectorAll(".ancientStageCard"),gameDeckBtn:document.querySelector(".deck-btn"),gameDeckBtnText:document.querySelector(".deck-btn__text"),tshirt:document.querySelector(".tshirt"),newGameBtn:document.querySelector(".newGame-btn")},d={azathoth:e.p+"assets/Ancients/Azathoth.png",cthulhu:e.p+"assets/Ancients/Cthulthu.png",iogSothoth:e.p+"assets/Ancients/IogSothoth.png",shubNiggurath:e.p+"assets/Ancients/ShubNiggurath.png"},l=[{id:"azathoth",name:"azathoth",cardFace:d.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:d.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:d.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:d.shubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}],g=[{id:"veryEasy",name:"Very easy"},{id:"easy",name:"Easy"},{id:"normal",name:"Normal"},{id:"hard",name:"Hard"},{id:"veryHard",name:"Very hard"}],{mythicCard:u,complexityTitle:b,complexityLevel:h,ancientStageCards:f}=i;const{settings:y,settingsForm:p,ancientSettings:w,complexitySettings:m,submitBtn:C,mainInner:S}=i;async function F(e){const t=document.createElement("input");return t.setAttribute("type","radio"),t.setAttribute("name","ancient"),t.setAttribute("id",`${e.id}`),t.setAttribute("value",`${e.id}`),t}async function k(e){const t=document.createElement("label");t.setAttribute("for",`${e.id}`);const r=document.createElement("img");return r.setAttribute("src",`${e.cardFace}`),r.setAttribute("alt",`${e.name}`),r.className="card__img",t.appendChild(r),t}async function M(e){const t=document.createElement("input");return t.setAttribute("type","radio"),t.setAttribute("name","complexity"),t.setAttribute("id",`${e.id}`),t.setAttribute("value",`${e.id}`),t}async function L(e){const t=document.createElement("label");return t.setAttribute("for",`${e.id}`),t.textContent=e.name,t}function v(){return{ancientId:document.querySelector('input[name="ancient"]:checked')?.value||!1,complexityId:document.querySelector('input[name="complexity"]:checked')?.value||!1}}p.addEventListener("change",(function(){const{ancientId:e,complexityId:t}=v();e&&t&&(C.removeAttribute("disabled"),C.removeAttribute("title"))})),p.addEventListener("submit",(async function(e){e.preventDefault();const{ancientId:t,complexityId:r}=v();await async function(e,t){const r=function(e){return l.find((t=>t.id===e))}(e),n=(s=t,g.findIndex((e=>e.id===s))+1);var s;const a=new Image;a.src=r.cardFace,a.addEventListener("load",(()=>{u.src=r.cardFace})),b.textContent=g[n-1].name,h.style.width=20*n+"%",function(e,t){t.forEach((t=>{const[r,n]=t.dataset.cardinfo.split("_"),s=r+"Stage",a=n+"Cards";t.textContent=e[s][a]}))}(r,f),j.createDeck(r,t)}(t,r),y.classList.remove("visible"),S.classList.add("visible")}));const{loader:D}=i;function _(){D.remove(),y.classList.add("visible")}const{backdrop:x,settings:A,settingsForm:q,mainInner:E,submitBtn:I,gameDeckBtn:B,gameDeckBtnText:T,tshirt:$,newGameBtn:N}=i;B.addEventListener("click",(function(){const e=j.getCard();if(e){!function(e,t){const r=e+"_"+t,n=document.getElementById(r);n.textContent=--n.textContent}(j.currentStage,e.color);const t=new Image;t.src=e.cardFace,t.addEventListener("load",(()=>{B.classList.add("blink"),$.src=t.src,setTimeout((()=>{B.classList.remove("blink")}),500)}))}else{const e=new Image;e.src="./assets/mythicCardBackground.png",e.addEventListener("load",(()=>{B.classList.add("blink"),T.textContent="Deck is empty",$.src=e.src,setTimeout((()=>{B.classList.remove("blink")}),500)}))}})),N.addEventListener("click",(function(){E.classList.remove("visible"),q.reset(),I.setAttribute("disabled","disabled"),A.classList.add("visible"),$.src="./assets/mythicCardBackground.png",T.textContent="Get card",j.reset()}));let j=new class{constructor(){this.stagesLength={firstStage:0,secondStage:0,thirdStage:0},this.stages={firstStage:[],secondStage:[],thirdStage:[]},this.colorDecksLength={greenCards:0,brownCards:0,blueCards:0},this.colorDecks={greenCards:[],brownCards:[],blueCards:[]},this.currentStage=1,this.gameDeck=[]}reset(){this.stagesLength={firstStage:0,secondStage:0,thirdStage:0},this.stages={firstStage:[],secondStage:[],thirdStage:[]},this.colorDecksLength={greenCards:0,brownCards:0,blueCards:0},this.colorDecks={greenCards:[],brownCards:[],blueCards:[]},this.currentStage=1,this.gameDeck=[]}createDeck(e,t){const{firstStage:r,secondStage:n,thirdStage:s}=e;this.setDeckStageAndColorLength(e),this[t](),this.setStagesDecks(e),this.setGameDeck()}setDeckStageAndColorLength(e){for(let t in this.stagesLength)for(let r in e[t])this.stagesLength[t]+=e[t][r],this.colorDecksLength[r]+=e[t][r]}veryEasy(){for(let e in this.colorDecks){let r=t[e].filter((e=>"easy"===e.difficulty));if(r.length<this.colorDecksLength[e]){let n=t[e].filter((e=>"normal"===e.difficulty));const s=this.shuffle(n),a=this.colorDecksLength[e]-r.length;n=s.splice(0,a),r=r.concat(n)}const n=this.shuffle(r);this.setColorDeck(e,n)}}easy(){for(let e in this.colorDecks){const r=t[e].filter((e=>"hard"!==e.difficulty)),n=this.shuffle(r);this.setColorDeck(e,n)}}normal(){for(let e in this.colorDecks){const r=this.shuffle(t[e]);this.setColorDeck(e,r)}}hard(){for(let e in this.colorDecks){const r=t[e].filter((e=>"easy"!==e.difficulty)),n=this.shuffle(r);this.setColorDeck(e,n)}}veryHard(){for(let e in this.colorDecks){let r=t[e].filter((e=>"hard"===e.difficulty));if(r.length<this.colorDecksLength[e]){let n=t[e].filter((e=>"normal"===e.difficulty));const s=this.shuffle(n),a=this.colorDecksLength[e]-r.length;n=s.splice(0,a),r=r.concat(n)}const n=this.shuffle(r);this.setColorDeck(e,n)}}shuffle(e){let t=null,r=null;for(let n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),r=e[t],e[t]=e[n],e[n]=r;return e}setColorDeck(e,t){this.colorDecks[e]=t.slice(0,this.colorDecksLength[e])}setStagesDecks(e){for(let t in this.stages){for(let r in e[t]){const n=this.colorDecks[r].splice(0,e[t][r]);n.length&&(this.stages[t]=this.stages[t].concat(n))}this.stages[t]=this.shuffle(this.stages[t])}}setGameDeck(){this.gameDeck=this.stages.thirdStage.concat(this.stages.secondStage,this.stages.firstStage)}getCard(){return this.setCurrentStage(),this.gameDeck.pop()}setCurrentStage(){1===this.currentStage&&(this.stagesLength.firstStage>0?this.stagesLength.firstStage--:this.currentStage++),2===this.currentStage&&(this.stagesLength.secondStage>0?this.stagesLength.secondStage--:this.currentStage++),3===this.currentStage&&(this.stagesLength.thirdStage>0?this.stagesLength.thirdStage--:this.stagesLength.thirdStage=0)}};!async function(){for(let e of l){const t=await F(e),r=await k(e);w.appendChild(t),w.appendChild(r)}}(),async function(){for(let e of g){const t=await M(e),r=await L(e);m.appendChild(t),m.appendChild(r)}}(),window.addEventListener("load",(function(){x.classList.add("transparent"),D.classList.add("hidden"),D.addEventListener("transitionend",_)}))})();