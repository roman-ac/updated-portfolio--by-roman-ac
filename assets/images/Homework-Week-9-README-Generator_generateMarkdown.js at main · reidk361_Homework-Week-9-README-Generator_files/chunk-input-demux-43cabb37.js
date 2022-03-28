System.register(["./chunk-vendor.js"],function(){"use strict";var c,d,h;return{setters:[function(r){c=r.t,d=r.b,h=r.c}],execute:function(){var r=Object.defineProperty,p=Object.getOwnPropertyDescriptor,f=(t,e)=>r(t,"name",{value:e,configurable:!0}),o=(t,e,i,l)=>{for(var s=l>1?void 0:l?p(e,i):e,a=t.length-1,u;a>=0;a--)(u=t[a])&&(s=(l?u(e,i,s):u(s))||s);return l&&s&&r(e,i,s),s};let n=class extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));const t=this.closest("details");t&&t.addEventListener("toggle",()=>{t.open&&this.source.focus()})}relayKeydown(t){if((this.isControlTab(t.target)||t.target===this.source)&&(t.key==="ArrowDown"||t.key==="Tab"))t.preventDefault(),t.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if(t.key==="Escape"){const e=this.closest("details");e&&e.removeAttribute("open")}}isControlTab(t){return!t||!this.control?!1:Array.from(this.control.children).includes(t)}relayInput(t){if(!t.target)return;const i=t.target.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:i}))}routeCustomEvent(t){this.sinks[this.selectedIndex].dispatchEvent(t)}get selectedIndex(){if(!this.control)return 0;const t=this.control.querySelector('[aria-selected="true"]');return t?Array.from(this.control.children).indexOf(t):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(t){this.source.value=this.storedInput[this.selectedIndex];const e=t.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=e,this.source.setAttribute("aria-label",e),this.notifySelected()}notifySelected(){const t=this.sinks[this.selectedIndex],e=new CustomEvent("tab-selected");t.dispatchEvent(e)}};f(n,"InputDemuxElement"),o([c],n.prototype,"source",2),o([d],n.prototype,"sinks",2),o([c],n.prototype,"control",2),n=o([h],n)}}});
//# sourceMappingURL=chunk-input-demux-cea6c6d8.js.map
