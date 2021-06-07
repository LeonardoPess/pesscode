(()=>{"use strict";class t extends class{constructor(t,e){this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active",this.changeEvent=new Event("changeEvent")}transition(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}updatePosition(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}onStart(t){let e;"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}slidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slidesIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlide(t){const e=this.slideArray[t];this.moveSlide(e.position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>t.element.classList.remove(this.activeClass))),this.slideArray[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onResize(){setTimeout((()=>{this.slidesConfig(),this.changeSlide(this.index.active)}),1e3)}addResizeEvent(){window.addEventListener("resize",this.onResize)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),200)}}(this.onResize.bind(this))}init(){return this.slide&&(this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.addResizeEvent(),this.changeSlide(0)),this}}{constructor(t,e){super(t,e),this.bindControlEvents()}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvent()}addArrowEvent(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.wrapper.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.activeControlItem(),this.controlArray.forEach(this.eventControl)}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}new class{constructor(t,e,i){this.menuBtn=document.querySelector(t),this.menuContainer=document.querySelector(e),this.logo=document.querySelector(".logo"),this.activeState=i,this._expanded=this.expanded,this.links=[...this.menuContainer.querySelectorAll('a[href^="#"]')],this.toggle=this.toggle.bind(this),this.goToId=this.goToId.bind(this)}get expanded(){return JSON.parse(this.menuContainer.getAttribute("aria-expanded"))}open(){this.menuBtn.setAttribute("aria-expanded",!0),this.menuContainer.setAttribute("aria-expanded",!0),this.menuBtn.classList.add("open"),this.menuContainer.classList.add(this.activeState)}close(){this.menuBtn.setAttribute("aria-expanded",!1),this.menuContainer.setAttribute("aria-expanded",!1),this.menuBtn.classList.remove("open"),this.menuContainer.classList.remove(this.activeState)}toggle(){this.expanded?this.close():this.open()}goToId(){this.close()}handleEvents(){this.links.forEach((t=>t.addEventListener("click",this.goToId))),this.menuBtn.addEventListener("click",this.toggle)}init(){this.handleEvents()}}(".menu-btn","nav.mobile ul","show").init(),new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}getScrollTopByHref(t){const e=t.getAttribute("href");return document.querySelector(e).offsetTop}scrollToSection(t){t.preventDefault(),t.currentTarget.getAttribute("href");const e=this.getScrollTopByHref(t.currentTarget)-30;this.scrollToPosition(e)}scrollToPosition(t){!function(t,e,i){const s=window.scrollX||window.pageXOffset,n=window.scrollY||window.pageYOffset,o=0-s,r=e-n,h=(new Date).getTime();i=void 0!==i?i:400;const a=(t,e,i,s)=>(t/=s/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e,d=setInterval((()=>{const t=(new Date).getTime()-h,e=a(t,s,o,i),l=a(t,n,r,i);t>=i&&clearInterval(d),window.scroll(e,l)}),1e3/60)}(0,t)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('a[href^="#"]').init(),setTimeout((()=>{const e=new t(".slide",".slide-wrapper");e.init(),e.addControl(".custom-controls")}),3e3),new class{constructor(t,e){this.slide=document.querySelector(t),this.items=this.slide.querySelectorAll(t+" > *"),this.hasNavigation=e,this.active=0,this.classActive="active",this.prev=this.prev.bind(this),this.next=this.next.bind(this)}activeSlide(t){this.active=t,this.items.forEach((t=>t.classList.remove(this.classActive))),this.items[t].classList.add("active"),this.autoSlide()}prev(){this.active>0?this.activeSlide(this.active-1):this.activeSlide(this.items.length-1)}next(){this.active<this.items.length-1?this.activeSlide(this.active+1):this.activeSlide(0)}addNavigation(){const t=document.querySelector(".slide-prev"),e=document.querySelector(".slide-next");t.addEventListener("click",this.prev),e.addEventListener("click",this.next)}autoSlide(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.next()}),1e4)}init(){this.slide&&(this.activeSlide(0),this.hasNavigation&&this.addNavigation())}}(".slideReviews",!1).init(),new class{constructor(t){this.texts=document.querySelectorAll(t)}typeWriter(t){const e=t.innerHTML.split("");t.innerHTML="",e.forEach(((e,i)=>{setTimeout((()=>t.innerHTML+=e),80*i)}))}init(){this.texts.forEach((t=>{this.typeWriter(t)}))}}(".textWriter").init()})();