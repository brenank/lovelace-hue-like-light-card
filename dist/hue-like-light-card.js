/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$5=globalThis,e$8=t$5.ShadowRoot&&(void 0===t$5.ShadyCSS||t$5.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$6=new WeakMap;let n$5 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$8&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$6.set(s,t));}return t}toString(){return this.cssText}};const r$7=t=>new n$5("string"==typeof t?t:t+"",void 0,s$3),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$5(o,t,s$3)},S$2=(s,o)=>{if(e$8)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$5.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$8?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$7(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$7,getOwnPropertyDescriptor:r$6,getOwnPropertyNames:h$2,getOwnPropertySymbols:o$5,getPrototypeOf:n$4}=Object,a$3=globalThis,c$1=a$3.trustedTypes,l$3=c$1?c$1.emptyScript:"",p$2=a$3.reactiveElementPolyfillSupport,d$2=(t,s)=>t,u$2={toAttribute(t,s){switch(s){case Boolean:t=t?l$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$4(t,s),y$1={attribute:!0,type:String,converter:u$2,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$3.litPropertyMetadata??=new WeakMap;let b$1 = class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$7(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$6(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$2("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$2("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$2("properties"))){const t=this.properties,s=[...h$2(t),...o$5(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$2(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$2).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$2;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i,e=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(e?r:this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$ET();}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET();}updated(t){}firstUpdated(t){}};b$1.elementStyles=[],b$1.shadowRootOptions={mode:"open"},b$1[d$2("elementProperties")]=new Map,b$1[d$2("finalized")]=new Map,p$2?.({ReactiveElement:b$1}),(a$3.reactiveElementVersions??=[]).push("2.0.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$4=globalThis,i$3=t$4.trustedTypes,s$2=i$3?i$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$6="$lit$",h$1=`lit$${(Math.random()+"").slice(9)}$`,o$4="?"+h$1,n$3=`<${o$4}>`,r$5=document,l$2=()=>r$5.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$2=Array.isArray,u$1=t=>a$2(t)||"function"==typeof t?.[Symbol.iterator],d$1="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v$1=/-->/g,_$1=/>/g,m$1=RegExp(`>|${d$1}(?:([^\\s"'>=/]+)(${d$1}*=${d$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$1=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E$1=r$5.createTreeWalker(r$5,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$2?s$2.createHTML(i):i}const P$1=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v$1:void 0!==u[1]?c=_$1:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$1):void 0!==u[3]&&(c=m$1):c===m$1?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$1:'"'===u[3]?g:p$1):c===g||c===p$1?c=m$1:c===v$1||c===_$1?c=f:(c=m$1,r=void 0);const x=c===m$1&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$3:d>=0?(o.push(a),s.slice(0,d)+e$6+s.slice(d)+h$1+x):s+h$1+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};let V$1 = class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P$1(t,s);if(this.el=V.createElement(f,n),E$1.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E$1.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$6)){const i=v[a++],s=r.getAttribute(t).split(h$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H$1:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h$1)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h$1),s=t.length-1;if(s>0){r.textContent=i$3?i$3.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$2()),E$1.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$2());}}}else if(8===r.nodeType)if(r.data===o$4)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$1,t+1));)d.push({type:7,index:c}),t+=h$1.length-1;}c++;}}static createElement(t,i){const s=r$5.createElement("template");return s.innerHTML=t,s}};function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}let S$1 = class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$5).importNode(i,!0);E$1.currentNode=e;let h=E$1.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L$1(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E$1.nextNode(),o++);}return E$1.currentNode=r$5,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u$1(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$5.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V$1.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S$1(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V$1(t)),i}T(t){a$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l$2()),this.k(l$2()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T?void 0:t;}}let H$1 = class H extends R{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}};class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}let L$1 = class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}};const z={j:e$6,P:h$1,A:o$4,C:1,M:P$1,L:S$1,R:u$1,V:N,D:M,I:R,H: H$1,N:I,U:k,B:L$1},Z=t$4.litHtmlPolyfillSupport;Z?.(V$1,M),(t$4.litHtmlVersions??=[]).push("3.1.0");const j$1=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l$2(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s$1 = class s extends b$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j$1(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}};s$1._$litElement$=!0,s$1[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s$1});const r$4=globalThis.litElementPolyfillSupport;r$4?.({LitElement:s$1});(globalThis.litElementVersions??=[]).push("4.0.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$5=t=>(...e)=>({_$litDirective$:t,values:e});let i$2 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$4=e$5(class extends i$2{constructor(t){if(super(t),t.type!==t$3.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.it){this.it=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.it)t in i||(r.remove(t),this.it.delete(t));for(const t in i){const s=!!i[t];s===this.it.has(t)||this.st?.has(t)||(s?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)));}return w}});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3={attribute:!0,type:String,converter:u$2,reflect:!1,hasChanged:f$1},r$3=(t=o$3,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$2(t){return (e,o)=>"object"==typeof o?r$3(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$2(r){return n$2({...r,state:!0,attribute:!1})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$3=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$2(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:u}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$3(n,s,{get(){if(r){let t=e.call(this);return void 0===t&&(t=o(this),u.call(this,t)),t}return o(this)}})}return e$3(n,s,{get(){return o(this)}})}}

var t$1,r$1,a$1=function(e,t){return o$2(t).format(e)},o$2=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})};!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t$1||(t$1={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r$1||(r$1={}));var b=function(e){if(e.time_format===r$1.language||e.time_format===r$1.system){var t=e.time_format===r$1.language?e.language:void 0,n=(new Date).toLocaleString(t);return n.includes("AM")||n.includes("PM")}return e.time_format===r$1.am_pm},v=function(e,t){return _(t).format(e)},_=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:b(e)?"numeric":"2-digit",minute:"2-digit",hour12:b(e)})},D=function(e,t){return S(t).format(e)},S=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:b(e)})};function O(){return (O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);}return e}).apply(this,arguments)}var q=function(e,t,r,n){void 0===n&&(n=!1),e._themes||(e._themes={});var i=t.default_theme;("default"===r||r&&t.themes[r])&&(i=r);var a=O({},e._themes);if("default"!==i){var o=t.themes[i];Object.keys(o).forEach(function(t){var r="--"+t;e._themes[r]="",a[r]=o[t];});}if(e.updateStyles?e.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,a),n){var u=document.querySelector("meta[name=theme-color]");if(u){u.hasAttribute("default-content")||u.setAttribute("default-content",u.getAttribute("content"));var c=a["--primary-color"]||u.getAttribute("default-content");u.setAttribute("content",c);}}};function E(e){return e.substr(0,e.indexOf("."))}function L(e){return E(e.entity_id)}var P=function(e){return !!e.attributes.unit_of_measurement||!!e.attributes.state_class},U=function(e){switch(e.number_format){case t$1.comma_decimal:return ["en-US","en"];case t$1.decimal_comma:return ["de","es","it"];case t$1.space_comma:return ["fr","sv","cs"];case t$1.system:return;default:return e.language}},B=function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},H=function(e,r,n){var i=r?U(r):void 0;if(Number.isNaN=Number.isNaN||function e(t){return "number"==typeof t&&e(t)},(null==r?void 0:r.number_format)!==t$1.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,V(e,n)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,V(e,n)).format(Number(e))}return "string"==typeof e?e:B(e,null==n?void 0:n.maximumFractionDigits).toString()+("currency"===(null==n?void 0:n.style)?" "+n.currency:"")},V=function(e,t){var r=O({maximumFractionDigits:2},t);if("string"!=typeof e)return r;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var n=e.indexOf(".")>-1?e.split(".")[1].length:0;r.minimumFractionDigits=n,r.maximumFractionDigits=n;}return r},W=function(e,t,r,n){var i=void 0!==n?n:t.state;if("unknown"===i||"unavailable"===i)return e("state.default."+i);if(P(t)){if("monetary"===t.attributes.device_class)try{return H(i,r,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return H(i,r)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var o=L(t);if("input_datetime"===o){var u;if(void 0===n)return t.attributes.has_date&&t.attributes.has_time?(u=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),v(u,r)):t.attributes.has_date?(u=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),a$1(u,r)):t.attributes.has_time?((u=new Date).setHours(t.attributes.hour,t.attributes.minute),D(u,r)):t.state;try{var c=n.split(" ");if(2===c.length)return v(new Date(c.join("T")),r);if(1===c.length){if(n.includes("-"))return a$1(new Date(n+"T00:00"),r);if(n.includes(":")){var m=new Date;return D(new Date(m.toISOString().split("T")[0]+"T"+n),r)}}return n}catch(e){return n}}return "humidifier"===o&&"on"===i&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===o||"number"===o||"input_number"===o?H(i,r):t.attributes.device_class&&e("component."+o+".state."+t.attributes.device_class+"."+i)||e("component."+o+".state._."+i)||i},ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i};var le=function(e){ne(window,"haptic",e);};

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e$1=Symbol.for(""),o$1=t=>{if(t?.r===e$1)return t?._$litStatic$},i$1=t=>({_$litStatic$:t,r:e$1}),a=new Map,l$1=t=>(r,...e)=>{const i=e.length;let s,l;const n=[],u=[];let c,$=0,f=!1;for(;$<i;){for(c=r[$];$<i&&void 0!==(l=e[$],s=o$1(l));)c+=s+r[++$],f=!0;$!==i&&u.push(l),n.push(c),$++;}if($===i&&n.push(r[i]),f){const t=n.join("$$lit$$");void 0===(r=a.get(t))&&(n.raw=n,a.set(t,r=n)),e=u;}return t(r,...e)},n$1=l$1(x);

class Color {
    constructor(colorOrRedOrHue, opacityOrGreenOrSaturation, blueOrValue, opacity = 1, mode = 'rgb') {
        this._opacity = 1;
        if (typeof colorOrRedOrHue == 'string') {
            this.parse(colorOrRedOrHue);
            this.setOpacity(opacityOrGreenOrSaturation !== null && opacityOrGreenOrSaturation !== void 0 ? opacityOrGreenOrSaturation : this._opacity);
        }
        else if (mode == 'rgb') {
            this.setRgb(colorOrRedOrHue, opacityOrGreenOrSaturation !== null && opacityOrGreenOrSaturation !== void 0 ? opacityOrGreenOrSaturation : 0, blueOrValue !== null && blueOrValue !== void 0 ? blueOrValue : 0);
            this.setOpacity(opacity);
        }
        else if (mode == 'hsv') {
            this.setHsv(colorOrRedOrHue, opacityOrGreenOrSaturation !== null && opacityOrGreenOrSaturation !== void 0 ? opacityOrGreenOrSaturation : 0, blueOrValue !== null && blueOrValue !== void 0 ? blueOrValue : 0);
        }
        this._originalMode = mode;
    }
    /** Will validate and set new values to R, G, B */
    setRgb(r, g, b) {
        if (r < 0 || r > 255)
            throw new Error('Red value must be in range [0, 255].');
        if (g < 0 || g > 255)
            throw new Error('Green value must be in range [0, 255].');
        if (b < 0 || b > 255)
            throw new Error('Blue value must be in range [0, 255].');
        this._red = r;
        this._green = g;
        this._blue = b;
    }
    setHsv(h, s, v) {
        if (h < 0 || h > 360)
            throw new Error('Hue value must be in range [0, 360].');
        if (s < 0 || s > 1)
            throw new Error('Saturation value must be in range [0, 1].');
        if (v < 0 || v > 1)
            throw new Error('HSV Value must be in range [0, 1].');
        this._hsv = [h, s, v];
        // set also rgb
        const [r, g, b] = Color.hsv2rgb(h, s, v);
        this.setRgb(r, g, b);
    }
    /** Will validate and set new value to opacity. */
    setOpacity(value) {
        if (value < 0)
            throw new Error('Minimal value for opacity is 0.');
        if (value > 1)
            throw new Error('Maximal value for opacity is 1.');
        // Round to 2 decimal places
        this._opacity = Math.round(value * 100) / 100;
    }
    /**
     * @returns the original mode in which was this color created.
     */
    getOriginalMode() {
        return this._originalMode;
    }
    /**
     * @returns red color component of this color (value in range 0 - 255).
     */
    getRed() {
        return this._red;
    }
    /**
     * @returns green color component of this color (value in range 0 - 255).
     */
    getGreen() {
        return this._green;
    }
    /**
     * @returns blue color component of this color (value in range 0 - 255).
     */
    getBlue() {
        return this._blue;
    }
    //#region HSV
    ensureHSV() {
        if (!this._hsv) {
            this._hsv = Color.rgb2hsv(this.getRed(), this.getGreen(), this.getBlue());
        }
        return this._hsv;
    }
    /**
     * @returns Hue color component of this color (value in range 0 - 360),
     */
    getHue() {
        return this.ensureHSV()[0];
    }
    /**
     * @returns Saturation color component of this color (value in range 0 - 1),
     */
    getSaturation() {
        return this.ensureHSV()[1];
    }
    /**
     * @returns Value (from HSV) color component of this color (value in range 0 - 1),
     */
    getValue() {
        return this.ensureHSV()[2];
    }
    //#endregion
    /**
     * @returns opacity of this color (value in range 0 - 1).
     */
    getOpacity() {
        return this._opacity;
    }
    /**
     * @returns relative luminance (0-255).
     */
    getLuminance() {
        return this._red * 0.299 + this._green * 0.587 + this._blue * 0.114;
    }
    /**
     * Returns foreground for this color, either @param light (potentially white) or @param dark (potentially black).
     * @param offset: offset added to luminance: higher value => sooner dark foreground (can be negative)
     */
    getForeground(light, dark, offset) {
        const luminance = this.getLuminance();
        return (luminance + offset) < Color.LuminanceBreakingPoint ? light : dark;
    }
    /**
    * Parses the given color string. Only supports color name, rgb(a) and hex format.
    */
    parse(colorId, allowNames = true) {
        var _a;
        if (colorId.startsWith('#')) {
            colorId = colorId.substring(1);
            const isHex3 = colorId.length == 3;
            const isHex4 = colorId.length == 4;
            const isHex6 = colorId.length == 6;
            const isHex8 = colorId.length == 8;
            if (!isHex3 && !isHex6 && !isHex4 && !isHex8) {
                throw new Error('Hex color format should have 3/6 letters or 4/8 letters for transparency.');
            }
            // parse all chars to integers
            const colorValues = [];
            for (let i = 0; i < colorId.length; i++) {
                const value = parseInt(colorId[i], 16);
                if (isNaN(value))
                    throw new Error(`Hex color format contains non hex characters - '${colorId[i]}'.`);
                colorValues.push(value);
            }
            if (isHex3 || isHex4) {
                this.setRgb(colorValues[0] * 16 + colorValues[0], colorValues[1] * 16 + colorValues[1], colorValues[2] * 16 + colorValues[2]);
                if (isHex4)
                    this.setOpacity((colorValues[3] * 16 + colorValues[3]) / 255);
            }
            else if (isHex6 || isHex8) {
                this.setRgb(colorValues[0] * 16 + colorValues[1], colorValues[2] * 16 + colorValues[3], colorValues[4] * 16 + colorValues[5]);
                if (isHex8)
                    this.setOpacity((colorValues[6] * 16 + colorValues[7]) / 255);
            }
        }
        else if (colorId.startsWith('rgb')) {
            const parts = colorId.match(/^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,?\s*(\d*(?:\.\d+\s*)?)\)$/);
            if (!parts) {
                throw new Error('Unrecognized color format rgb[a](...): ' + colorId);
            }
            else {
                // [ str, r, g, b, a|undefined ]
                this.setRgb(parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3]));
                if (((_a = parts[4]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.setOpacity(parseFloat(parts[4]));
                }
            }
        }
        else {
            if (allowNames) {
                // small hack: https://stackoverflow.com/a/47355187/1341409
                const ctx = document.createElement('canvas').getContext('2d');
                if (ctx != null) {
                    ctx.fillStyle = colorId;
                    this.parse(ctx.fillStyle, false); // standardized color format (hex)
                    return;
                }
            }
            throw new Error('Unrecognized color format: ' + colorId);
        }
    }
    toString() {
        if (this._opacity < 1) {
            return `rgba(${this._red},${this._green},${this._blue},${this._opacity})`;
        }
        return `rgb(${this._red},${this._green},${this._blue})`;
    }
    // #region Utils
    /**
     * @param hue in range [0, 360]
     * @param saturation in range [0,1]
     * @param value in range [0,1]
     * @returns [r,g,b] each in range [0,255]
     * See: https://en.wikipedia.org/wiki/HSL_and_HSV#From_HSV
     */
    static hsv2rgb(hue, saturation, value) {
        const chroma = value * saturation;
        const hue1 = hue / 60;
        const x = chroma * (1 - Math.abs((hue1 % 2) - 1));
        let r1 = 0, g1 = 0, b1 = 0;
        if (hue1 >= 0 && hue1 <= 1) {
            ([r1, g1, b1] = [chroma, x, 0]);
        }
        else if (hue1 >= 1 && hue1 <= 2) {
            ([r1, g1, b1] = [x, chroma, 0]);
        }
        else if (hue1 >= 2 && hue1 <= 3) {
            ([r1, g1, b1] = [0, chroma, x]);
        }
        else if (hue1 >= 3 && hue1 <= 4) {
            ([r1, g1, b1] = [0, x, chroma]);
        }
        else if (hue1 >= 4 && hue1 <= 5) {
            ([r1, g1, b1] = [x, 0, chroma]);
        }
        else if (hue1 >= 5 && hue1 <= 6) {
            ([r1, g1, b1] = [chroma, 0, x]);
        }
        const m = value - chroma;
        const [r, g, b] = [r1 + m, g1 + m, b1 + m];
        // Change r,g,b values from [0,1] to [0,255]
        return [Math.round(255 * r), Math.round(255 * g), Math.round(255 * b)];
    }
    /**
     * @param r in range [0,255]
     * @param g in range [0,255]
     * @param b in range [0,255]
     * @returns [hue, saturation, value] where hue is in range [0,360], saturation and value are in range [0,1]
     * See: https://en.wikipedia.org/wiki/HSL_and_HSV#HSV_to_RGB
     */
    static rgb2hsv(r, g, b) {
        const rabs = r / 255;
        const gabs = g / 255;
        const babs = b / 255;
        const v = Math.max(rabs, gabs, babs);
        const diff = v - Math.min(rabs, gabs, babs);
        const diffc = (c) => (v - c) / 6 / diff + 1 / 2;
        const percentRoundFn = (num) => Math.round(num * 100) / 100;
        let h = 0, s;
        if (diff == 0) {
            h = s = 0;
        }
        else {
            s = diff / v;
            const rr = diffc(rabs);
            const gg = diffc(gabs);
            const bb = diffc(babs);
            if (rabs === v) {
                h = bb - gg;
            }
            else if (gabs === v) {
                h = (1 / 3) + rr - bb;
            }
            else if (babs === v) {
                h = (2 / 3) + gg - rr;
            }
            if (h < 0) {
                h += 1;
            }
            else if (h > 1) {
                h -= 1;
            }
        }
        return [
            Math.round(h * 360),
            percentRoundFn(s),
            percentRoundFn(v)
        ];
    }
    static hueTempToRgb(kelvin) {
        const start = 2000;
        const tres = 4200;
        const end = 6500;
        const startRgb = [255, 180, 55];
        const tresRgb = [255, 255, 255];
        const endRgb = [190, 228, 243];
        /**
         * @param t normalized value 0 - 1
         * @param min Minimal returned value
         * @param max Maximal returned value
         */
        const linearScale = function (t, min, max) {
            return (max - min) * t + min;
        };
        if (kelvin < start)
            kelvin = start;
        if (kelvin > end)
            kelvin = end;
        if (kelvin < tres) {
            const k = (kelvin - start) / (tres - start); // normalize
            const r1 = linearScale(k, startRgb[0], tresRgb[0]);
            const g1 = linearScale(k, startRgb[1], tresRgb[1]);
            const b1 = linearScale(k, startRgb[2], tresRgb[2]);
            return [
                Math.round(r1),
                Math.round(g1),
                Math.round(b1)
            ];
        }
        else {
            const k = (kelvin - tres) / (end - tres); // normalize
            const r2 = linearScale(k, tresRgb[0], endRgb[0]);
            const g2 = linearScale(k, tresRgb[1], endRgb[1]);
            const b2 = linearScale(k, tresRgb[2], endRgb[2]);
            return [
                Math.round(r2),
                Math.round(g2),
                Math.round(b2)
            ];
        }
    }
}
Color.LuminanceBreakingPoint = 192; // hue breaking point is pretty high

class Consts {
}
Consts.Version = 'v1.5.0';
Consts.Dev = true;
Consts.CardElementName = Consts.Dev ? 'hue-like-light-card-test' : 'hue-like-light-card';
Consts.ElementPostfix = Consts.Dev ? '-test' : '';
Consts.CardName = 'Hue-Like Light Card';
Consts.CardDescription = 'Hue-like way to control your lights';
Consts.HueBorderRadius = 10;
Consts.HueShadow = '0px 2px 3px rgba(0,0,0,0.4)';
Consts.LightColor = new Color('#fff');
Consts.LightOffColor = new Color('#fff', 0.85);
Consts.DarkColor = new Color(0, 0, 0, 0.7);
Consts.DarkOffColor = new Color(0, 0, 0, 0.5);
Consts.WarmColor = '#ffda95';
Consts.ColdColor = '#f5f5ff';
Consts.DefaultColor = 'warm';
Consts.OffColor = '#666';
Consts.TileOffColor = 'rgba(102, 102, 102, 0.6)';
Consts.DialogBgColor = '#171717';
Consts.DialogFgLightColor = new Color('#aaa');
Consts.DialogOffColor = '#363636';
Consts.GradientOffset = 7; // percent
Consts.TransitionDefault = 'all 0.3s ease-out 0s';
Consts.TimeCacheInterval = 1500; // ms
// Theme colors
Consts.ThemeDefault = 'default';
Consts.ThemeCardBackground = '--hue-detected-card-bg';
Consts.ThemeCardBackgroundVar = `var(${Consts.ThemeCardBackground})`;
Consts.ThemeCardPossibleBackgrounds = [
    '--ha-card-background',
    '--card-background-color',
    '--paper-card-background-color',
    '--primary-background-color'
];
Consts.ThemeDialogHeadingColorVar = 'var(--mdc-dialog-heading-ink-color)';
Consts.ThemeSecondaryTextColorVar = 'var(--secondary-text-color)';
// Icon size
Consts.IconSize = {
    'big': 2.0,
    'original': 1.41666667,
    'small': 1.0
};

class ColorExtended extends Color {
    constructor(colorName) {
        if (colorName == ColorExtended.themeColor) {
            super(0, 0, 0);
            this._isThemeColor = true;
        }
        else {
            super(colorName);
            this._isThemeColor = false;
        }
    }
    getBaseColor() {
        if (this._isThemeColor)
            throw new Error('Cannot getBaseColor on ' + ColorExtended.themeColor);
        return new Color(this.getRed(), this.getGreen(), this.getBlue(), this.getOpacity());
    }
    isThemeColor() {
        return this._isThemeColor;
    }
    getLuminance() {
        if (this._isThemeColor)
            throw new Error('Cannot getLuminance on ' + ColorExtended.themeColor);
        return super.getLuminance();
    }
    getForeground(light, dark, offset) {
        if (this._isThemeColor)
            throw new Error('Cannot getForeground on ' + ColorExtended.themeColor);
        return super.getForeground(light, dark, offset);
    }
    toString() {
        if (this._isThemeColor)
            return 'var(--' + ColorExtended.themeColor + ')';
        return super.toString();
    }
}
ColorExtended.themeColor = 'theme-color';

class Background {
    constructor(backgroundsOrColors) {
        if (!((backgroundsOrColors === null || backgroundsOrColors === void 0 ? void 0 : backgroundsOrColors.length) > 0))
            throw new Error('At least one background or color is needed for new Background(...).');
        this._colors = backgroundsOrColors.flatMap(b => {
            if (b instanceof ColorExtended) {
                throw new Error('ColorExtended cannot be used in Background. Resolve it first.');
            }
            if (b instanceof Color) {
                return [b];
            }
            else if (b instanceof Background) {
                // eslint-disable-next-line no-underscore-dangle
                return b._colors;
            }
            else {
                throw new Error('Only array of Colors or Backgrounds is supported for new Background(...).');
            }
        });
        // sort the colors based on hue (starting from around 195 - light blue)
        // the Official app is olso showing only 5 colors, so every color gets wide enough stripe in card
        // I think it's like cheating, so we don't do this (at least not now)
        const getSortValue = (c) => {
            let result = c.getHue() - 195; // this hue value should be first
            if (result < 0) {
                result += 360;
            }
            return result;
        };
        this._colors.sort((a, b) => getSortValue(a) - getSortValue(b));
    }
    /**
     * Gets foreground for this background, either @param light (potentially white) or @param dark (potentially black).
     * @param offset: offset added to luminance (can move breaking point in either direction)
     */
    getForeground(light, dark, offset) {
        if (this._colors.length < 3) {
            return this._colors[0].getForeground(light, dark, offset);
        }
        // wee need to choose color based on the brightness of the first half
        let forLight = 0;
        for (let i = 0; i < this._colors.length / 2; i++) {
            if (this._colors[i].getForeground(true, false, offset))
                forLight++;
        }
        // of more than half (of half of the colors) is for light, then return light
        return forLight > this._colors.length / 4 ? light : dark;
    }
    toString() {
        if (this._colors.length == 1)
            return this._colors[0].toString();
        const step = 100.0 / (this._colors.length - 1);
        const offset = Consts.GradientOffset;
        let colors = `${this._colors[0]} 0%, ${this._colors[0]} ${offset}%`; // first 10% must be the first light
        let currentStep = 0;
        for (let i = 1; i < this._colors.length; i++) {
            currentStep += step;
            // last 10% must be the last light
            if (i + 1 == this._colors.length) {
                colors += `, ${this._colors[i]} ${100 - offset}%`;
            }
            colors += `, ${this._colors[i]} ${Math.round(currentStep)}%`;
        }
        return `linear-gradient(100deg, ${colors})`;
    }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="important",i=" !"+n,o=e$5(class extends i$2{constructor(t){if(super(t),t.type!==t$3.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(r)),this.render(r);for(const t of this.ut)null==r[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ut.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e;}}return w}});

/**
 * Contains methods with styles, that allow changing theme of single element.
 */
class ThemeHelper {
    /**
     * @returns style variables for switches. Needs to be called with @method detectSwitchColors.
     */
    static getSwitchThemeStyle() {
        const styles = {
            '--switch-checked-button-color': `var(${ThemeHelper.switchCheckedButtonColorVar})`,
            '--switch-checked-track-color': `var(${ThemeHelper.switchCheckedTrackColorVar})`
        };
        return styles;
    }
    /**
     * Will detect and set switch color variables (for use with @method getSwitchThemeStyle)
     */
    static detectSwitchColors(element, force = false) {
        ThemeHelper.detectThemeVariable(element, ThemeHelper.switchCheckedButtonColorVar, ThemeHelper.possibleSwitchCheckedButtonColors, 'switchBtnDetected', force);
        ThemeHelper.detectThemeVariable(element, ThemeHelper.switchCheckedTrackColorVar, ThemeHelper.possibleSwitchCheckedTrackColors, 'switchTrckDetected', force);
    }
    // #endregion
    static setDialogThemeStyles(dialog, hueBgColorVariable, detectThemeBg) {
        if (detectThemeBg) {
            // Detect theme color if needed
            ThemeHelper.detectThemeCardBackground(dialog, true, 1); // offset: 1 for dialog
        }
        // To help change themes on the fly
        dialog.style.setProperty('--mdc-theme-surface', `var(${hueBgColorVariable}, ${Consts.ThemeCardBackgroundVar})`);
    }
    /**
     * Will try to apply theme on given element.
     * @returns If the theme was applied (only when the theme changes).
     */
    static applyTheme(element, themes, theme) {
        if (element.dataset.themeLocal == theme)
            return false;
        q(element, themes, theme);
        if (theme != Consts.ThemeDefault) {
            element.dataset.themeLocal = theme;
        }
        else {
            delete element.dataset.themeLocal;
        }
        // Detect switch colors
        ThemeHelper.detectSwitchColors(element, true);
        return true;
    }
    /**
     * Will detect card background from theme on this element.
     */
    static detectThemeCardBackground(element, force = false, offset = 0) {
        ThemeHelper.detectThemeVariable(element, Consts.ThemeCardBackground, Consts.ThemeCardPossibleBackgrounds, 'hueBgDetected', force, offset);
    }
    /**
     * Will detect and set variable to the first possible value.
     * @param element Main card element which has possible local theme variables set in style.
     * @param targetVariable Name of the variable the will be set after the detection.
     * @param possibleVariables Names of possible variables ordered from most specific.
     * @param detectedIdentifier Name of data attribute, which will hold the detected variable name.
     * @param force If set will again detect the variable name even when the detectedIdentifier attribute is already set.
     * @param offset Offset for the possibleVariables parameter. When set to 1, first possible variable is skipped.
     */
    static detectThemeVariable(element, targetVariable, possibleVariables, detectedIdentifier, force = false, offset = 0) {
        if (element.dataset[detectedIdentifier] && !force)
            return;
        // if element has applied custom theme - check theme locally
        const detectLocally = !!element.dataset.themeLocal;
        let possibleVar;
        for (possibleVar of possibleVariables) {
            if (offset > 0) {
                offset--;
                continue;
            }
            // for local theme - check properties on elements style attribute
            if (detectLocally) {
                // iterate all number indexes from zero, till variable found or undefined is returned
                let exists = false;
                let index = 0;
                while (element.style[index]) {
                    const s = element.style[index];
                    if (s == possibleVar) {
                        exists = true;
                        break;
                    }
                    index++;
                }
                // if variable found - set as theme background
                if (exists) {
                    element.style.setProperty(targetVariable, `var(${possibleVar})`);
                    break;
                }
            }
            else {
                element.style.setProperty(targetVariable, `var(${possibleVar})`);
                const cptStyle = getComputedStyle(element);
                const actValue = cptStyle.getPropertyValue(targetVariable);
                if (actValue)
                    break;
            }
        }
        let attrValue = (possibleVar || 'none');
        if (detectLocally) {
            attrValue += ';local';
        }
        element.dataset[detectedIdentifier] = attrValue;
    }
}
// #region Switch styles
ThemeHelper.switchCheckedButtonColorVar = '--detected-switch-checked-button-color';
ThemeHelper.switchCheckedTrackColorVar = '--detected-switch-checked-track-color';
ThemeHelper.possibleSwitchCheckedButtonColors = [
    '--switch-checked-button-color',
    '--primary-color'
];
ThemeHelper.possibleSwitchCheckedTrackColors = [
    '--switch-checked-track-color',
    '--switch-checked-color',
    '--dark-primary-color'
];

class ColorResolver {
    static getColor(color_id) {
        switch (color_id) {
            case 'warm':
                return new Color(Consts.WarmColor);
            case 'cold':
                return new Color(Consts.ColdColor);
            default:
                return new Color(color_id);
        }
    }
}

function nameof(key1, key2) {
    return key2 !== null && key2 !== void 0 ? key2 : key1;
}
/**
 * Ensures that given entityId is under expectedDomain, else throws exception.
 */
function ensureEntityDomain(entityId, expectedDomain, ...expectedDomains) {
    expectedDomains.unshift(expectedDomain);
    const domain = entityId.split('.')[0];
    if (expectedDomains.indexOf(domain) < 0)
        throw new Error(`Unsupported entity type: ${domain} (in '${entityId}'). Supported type(s): '${expectedDomains.join('\', \'')}'.`);
}
/**
 * @returns new array from passed array, but with removed duplicites.
 */
function removeDuplicites(array) {
    return array.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
}
/**
 * @returns given text without diacritics, using normalized state for removal.
 */
function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

var KnownIconSize;
(function (KnownIconSize) {
    KnownIconSize["Big"] = "big";
    KnownIconSize["Original"] = "original";
    KnownIconSize["Small"] = "small";
})(KnownIconSize || (KnownIconSize = {}));
var SliderType;
(function (SliderType) {
    SliderType["Default"] = "default";
    SliderType["None"] = "none";
    SliderType["Mushroom"] = "mushroom";
})(SliderType || (SliderType = {}));
var ClickAction;
(function (ClickAction) {
    ClickAction["Default"] = "default";
    ClickAction["NoAction"] = "none";
    ClickAction["TurnOn"] = "turn-on";
    ClickAction["TurnOff"] = "turn-off";
    ClickAction["MoreInfo"] = "more-info";
    ClickAction["Scene"] = "scene";
    ClickAction["HueScreen"] = "hue-screen";
})(ClickAction || (ClickAction = {}));
var SceneOrder;
(function (SceneOrder) {
    SceneOrder["Default"] = "default";
    SceneOrder["NameAsc"] = "name-asc";
    SceneOrder["NameDesc"] = "name-desc";
})(SceneOrder || (SceneOrder = {}));
class ClickActionData {
    constructor(plainConfig) {
        if (typeof plainConfig == 'string') {
            this._onlyValue = plainConfig;
        }
        else if (plainConfig instanceof ClickActionData) {
            // eslint-disable-next-line no-underscore-dangle
            this._onlyValue = plainConfig._onlyValue;
            // eslint-disable-next-line no-underscore-dangle
            this._valueStore = plainConfig._valueStore;
        }
        else {
            this._valueStore = plainConfig || {};
        }
    }
    /**
     * Gets data parameter from config.
     */
    getData(key) {
        if (this._onlyValue)
            return this._onlyValue;
        return this._valueStore[key];
    }
}
class SceneConfig {
    constructor(entity) {
        ensureEntityDomain(entity, 'scene');
        this.entity = entity;
    }
    getActivationService() {
        const defaultService = 'scene.turn_on';
        const service = this.activation || defaultService;
        const splitted = service.split('.');
        if (splitted.length != 2) {
            throw new Error(`Unrecognized service '${service}'. The service should have 2 parts separated by '.' (dot). E.g.: '${defaultService}'`);
        }
        return splitted;
    }
    getActivationData() {
        const result = { entity_id: this.entity };
        if (this.activationData) {
            // insert data from config (it is possible to overwrite entity_id)
            for (const key in this.activationData) {
                if (Object.prototype.hasOwnProperty.call(this.activationData, key)) {
                    result[key] = this.activationData[key];
                }
            }
        }
        return result;
    }
}
class SceneData {
    constructor(configOrEntityId) {
        if (typeof configOrEntityId == 'string') {
            this._config = new SceneConfig(configOrEntityId);
        }
        else {
            this._config = configOrEntityId;
        }
    }
    set hass(value) {
        this._hass = value;
        this._entity = this._hass.states[this._config.entity];
    }
    /**
     * Will activate this scene
     */
    activate() {
        this.ensureHass();
        const serviceParts = this._config.getActivationService();
        const data = this._config.getActivationData();
        this._hass.callService(serviceParts[0], serviceParts[1], data);
    }
    getTitle(cardTitle) {
        this.ensureHass();
        if (this._config.title)
            return this._config.title;
        // try to remove prefix of cardTitle from friendly name
        let friendlyName = this._entity.attributes.friendly_name;
        if (cardTitle && (friendlyName === null || friendlyName === void 0 ? void 0 : friendlyName.toLowerCase().indexOf(cardTitle.toLowerCase())) == 0) {
            // remove the cardTitle prefix from this scene name
            friendlyName = friendlyName.substring(cardTitle.length).trimStart();
        }
        return friendlyName;
    }
    /**
     * @returns icon from config or from entity settings or passed defaultIcon.
     */
    getIcon(defaultIcon = null) {
        this.ensureHass();
        // if config has empty icon defined - return empty
        if (this._config.icon != undefined)
            return this._config.icon;
        return this._entity.attributes.icon || defaultIcon;
    }
    /**
     * @returns color as instance of Color or null, if no color is present.
     */
    getColor() {
        if (!this._config.color)
            return null;
        return ColorResolver.getColor(this._config.color);
    }
    ensureHass() {
        if (!this._hass)
            throw new Error('Scene data not initialized - call setHass first!');
    }
}

var HueMushroomSliderContainer_1;
/*
 * This is container for mushroom-slider, which will create margin and style the slider in the way, we need.
 *
 * using: https://github.com/phischdev/lovelace-mushroom-better-sliders/blob/main/src/shared/slider.ts
 * inspiration: https://github.com/phischdev/lovelace-mushroom-better-sliders/blob/main/src/cards/light-card/controls/light-brightness-control.ts
 */
let HueMushroomSliderContainer = HueMushroomSliderContainer_1 = class HueMushroomSliderContainer extends s$1 {
    constructor() {
        super(...arguments);
        // Property mirrors
        this.disabled = false;
        this.step = 1;
        this.min = 0;
        this.max = 100;
    }
    onChange(e) {
        this.value = e.detail.value;
        this.dispatchEvent(new CustomEvent('change', {
            detail: {
                value: this.value
            }
        }));
    }
    onCurrentChange(e) {
        const value = e.detail.value;
        this.dispatchEvent(new CustomEvent('current-change', {
            detail: {
                value
            }
        }));
    }
    render() {
        return x `
            <mushroom-slider
                .disabled=${this.disabled}
                .value=${this.value}
                .step=${this.step}
                .min=${this.min}
                .max=${this.max}
                .showActive=${true}
                @change=${this.onChange}
                @current-change=${this.onCurrentChange}
            />
        `;
    }
    static get styles() {
        return i$5 `
            :host {
                display: inline;

                /* colors */
                --slider-color: var(--dark-primary-color, var(--primary-color));
                --slider-outline-color: transparent;
                --slider-bg-color: rgba(0,0,0,0.3);
            }
            mushroom-slider {
                display: inline-block;
                width: calc(100% - ${2 * HueMushroomSliderContainer_1.Margin}px);
                margin-top: ${HueMushroomSliderContainer_1.MarginTop}px;
                margin-left: ${HueMushroomSliderContainer_1.Margin}px;
                margin-right: ${HueMushroomSliderContainer_1.Margin}px;

                /* colors */
                --main-color: var(--slider-color);
                --bg-color: var(--slider-bg-color);
                --bg-color-inactive: var(--slider-bg-color);
                --main-outline-color: var(--slider-outline-color);

                /* base styles: */
                --control-height: var(--mush-control-height, ${HueMushroomSliderContainer_1.Height}px);
                --control-border-radius: var(--mush-control-border-radius, 12px);
            }
        `;
    }
};
/**
 * Name of this Element
 */
HueMushroomSliderContainer.ElementName = 'hue-mushroom-slider-container' + Consts.ElementPostfix;
// Consts
HueMushroomSliderContainer.MarginTop = 8;
HueMushroomSliderContainer.Margin = 14;
HueMushroomSliderContainer.Height = 28;
__decorate([
    n$2({ type: Boolean })
], HueMushroomSliderContainer.prototype, "disabled", void 0);
__decorate([
    n$2({ attribute: false, type: Number, reflect: true })
], HueMushroomSliderContainer.prototype, "value", void 0);
__decorate([
    n$2({ type: Number })
], HueMushroomSliderContainer.prototype, "step", void 0);
__decorate([
    n$2({ type: Number })
], HueMushroomSliderContainer.prototype, "min", void 0);
__decorate([
    n$2({ type: Number })
], HueMushroomSliderContainer.prototype, "max", void 0);
HueMushroomSliderContainer = HueMushroomSliderContainer_1 = __decorate([
    t$2(HueMushroomSliderContainer.ElementName)
], HueMushroomSliderContainer);

class ViewUtils {
    /**
     * Creates switch for given ILightContainer.
     * @param onChange Be careful - this function is called on different scope, better pack your function to arrow call.
     */
    static createSwitch(ctrl, onChange) {
        // To help change themes on the fly
        const styles = ThemeHelper.getSwitchThemeStyle();
        return n$1 `
        <ha-switch
            .checked=${ctrl.isOn()}
            .disabled=${ctrl.isUnavailable()}
            .haptic=true
            style=${o(styles)}
            @change=${(ev) => this.changed(ctrl, onChange, false, ev)}
        ></ha-switch>`;
    }
    /**
     * Creates slider for given ILightContainer and config.
     * @param onChange Be careful - this function is called on different scope, better pack your function to arrow call.
     */
    static createSlider(ctrl, config, onChange) {
        // If the controller doesn't support brightness change or slider is disabled, the slider will not be created
        if (!ctrl.features.brightness || config.slider == SliderType.None)
            return T;
        const min = config.allowZero ? 0 : 1;
        const max = 100;
        const step = 1;
        if (config.slider == SliderType.Mushroom) {
            return n$1 `
                <${i$1(HueMushroomSliderContainer.ElementName)}
                    class="brightness-slider"
                    .min=${min}
                    .max=${max}
                    .step=${step}
                    .disabled=${config.allowZero ? ctrl.isUnavailable() : ctrl.isOff()}
                    .value=${ctrl.brightnessValue}
                    .showActive=${true}
                    @change=${(ev) => this.changed(ctrl, onChange, true, ev)}
                />`;
            // @current-change=${this.onCurrentChange}
        }
        return n$1 `
        <ha-slider pin ignore-bar-touch
            class="brightness-slider"
            .min=${min}
            .max=${max}
            .step=${step}
            .disabled=${config.allowZero ? ctrl.isUnavailable() : ctrl.isOff()}
            .value=${ctrl.brightnessValue}
            @change=${(ev) => this.changed(ctrl, onChange, true, ev)}
        ></ha-slider>`;
    }
    static changed(ctrl, onChange, isSlider, ev) {
        // TODO: try to update on sliding (use throttle) not only on change. (https://www.webcomponents.org/element/@polymer/paper-slider/elements/paper-slider#events)
        const target = ev.target;
        if (!target)
            return;
        if (isSlider) {
            const value = target.value;
            if (value != null) {
                ctrl.brightnessValue = parseInt(value);
            }
        }
        else { // isToggle
            const checked = target.checked;
            if (checked) {
                ctrl.turnOn();
            }
            else {
                ctrl.turnOff();
            }
        }
        // update styles
        onChange();
        //this.updateStyles();
    }
    /**
     * Calculates and returns background and foregound color (for actual light brightness).
     * Creates readable text on background with shadow based on current brightness.
     * @param ctrl Light controller
     * @param offBackground background used when all lights are off (null can be passed, and if used, null bg and fg will be returned)
     * @param assumeShadow If turned off, calculates foreground for max brightness (noShadow).
     * @param defaultColor Default color, if light does not provide his color.
     */
    static calculateBackAndForeground(ctrl, offBackground, assumeShadow = true, defaultColor = offBackground) {
        const currentBackground = ctrl.isOff() ? offBackground : (ctrl.getBackground() || defaultColor || offBackground);
        let foreground;
        if (currentBackground == null) {
            foreground = null;
        }
        else {
            const fgx = this.calculateForeground(ctrl, currentBackground, assumeShadow);
            foreground = fgx.foreground;
        }
        return {
            background: currentBackground,
            foreground: foreground
        };
    }
    /**
     * Calculates and returns foregound color for given background (and actual light brightness).
     * Creates readable text on background with shadow based on current brightness.
     * @param assumeShadow If turned off, calculates foreground for max brightness (noShadow).
     */
    static calculateForeground(ctrl, currentBackground, assumeShadow = true) {
        let currentValue = ctrl.brightnessValue;
        // if the shadow is not present, act like the value is on max.
        if (!assumeShadow) {
            currentValue = 100;
        }
        const opacity = 1;
        const offset = ctrl.isOn() && currentValue > 50
            ? -(10 - ((currentValue - 50) / 5)) // offset: -10-0
            : 0;
        let foreground = ctrl.isOn() && currentValue <= 50
            ? Consts.LightColor // is on and under 50 => Light
            : currentBackground.getForeground(Consts.LightColor, // should be light
            Consts.DarkColor, // should be dark
            offset // offset for darker brightness
            );
        // make the dark little lighter, when Off
        if (ctrl.isOff()) {
            if (foreground == Consts.DarkColor) {
                foreground = Consts.DarkOffColor;
            }
            else {
                foreground = Consts.LightOffColor;
            }
        }
        return {
            foreground: foreground,
            opacity: opacity
        };
    }
    /**
     * Calculates default shadow for passed element, using passed ILightContainer state and config.
     */
    static calculateDefaultShadow(element, ctrl, useOffShadow) {
        if (ctrl.isOff())
            return useOffShadow ? 'inset 0px 0px 10px rgba(0,0,0,0.2)' : '0px 0px 0px white';
        const card = element;
        if (!card || !card.clientHeight)
            return '';
        const darkness = 100 - ctrl.brightnessValue;
        const coef = (card.clientHeight / 100);
        const spread = 20;
        const position = spread + (darkness * 0.95) * coef;
        let width = card.clientHeight / 2;
        if (darkness > 70) {
            width -= (width - 20) * (darkness - 70) / 30; // width: 20-clientHeight/2
        }
        let shadowDensity = 0.65;
        if (darkness > 60) {
            shadowDensity -= (shadowDensity - 0.5) * (darkness - 60) / 40; // shadowDensity: 0.5-0.65
        }
        return `inset 0px -${position}px ${width}px -${spread}px rgba(0,0,0,${shadowDensity})`;
    }
    /** Will return whether hue custom icons (https://github.com/arallsopp/hass-hue-icons) are installed */
    static hasHueIcons() {
        const haWindow = window;
        return !!haWindow.customIcons && typeof haWindow.customIcons.hue == 'object';
    }
    /** Will set size of icon inside of HaIcon */
    static setIconSize(haIcon, sizePx) {
        sizePx = Math.round(sizePx);
        if (haIcon) {
            // wait for render
            haIcon.updateComplete.then(() => {
                const innerIcon = haIcon.renderRoot.children[0];
                innerIcon.style.setProperty('--mdc-icon-size', sizePx + 'px');
            });
        }
    }
}

class QueueItem {
    constructor(action, waitBeforeMs) {
        this._waitAfter = waitBeforeMs;
        this._action = action;
    }
    get action() {
        return this._action;
    }
    get waitAfter() {
        return this._waitAfter;
    }
}
class HueEffectQueue {
    constructor() {
        this._queue = new Array();
        this._currentEffectId = null;
    }
    get currentEffectId() {
        return this._currentEffectId;
    }
    addEffect(waitBeforeMs, action) {
        const item = new QueueItem(action, waitBeforeMs);
        this._queue.push(item);
    }
    start() {
        let i = 0;
        const callback = () => {
            this.planEffect(++i, callback);
        };
        this.planEffect(i, callback);
    }
    stop() {
        if (this._currentEffectId) {
            clearTimeout(this._currentEffectId);
            this._currentEffectId = null;
        }
    }
    stopAndClear() {
        this.stop();
        this._queue.length = 0;
    }
    planEffect(index, callback = null) {
        if (index >= this._queue.length) {
            this._currentEffectId = null;
            return;
        }
        const item = this._queue[index];
        this._currentEffectId = setTimeout(() => {
            item.action();
            if (callback) {
                callback();
            }
        }, item.waitAfter);
    }
}

class IdLitElement extends s$1 {
    constructor(idPrefix) {
        super();
        this._id = idPrefix + '_' + IdLitElement.maxId++;
    }
}
IdLitElement.maxId = 1;

/*! Hammer.JS - v2.0.17-rc - 2019-12-16
 * http://naver.github.io/egjs
 *
 * Forked By Naver egjs
 * Copyright (c) hammerjs
 * Licensed under the MIT license */
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;

if (typeof Object.assign !== 'function') {
  assign = function assign(target) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var output = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];

      if (source !== undefined && source !== null) {
        for (var nextKey in source) {
          if (source.hasOwnProperty(nextKey)) {
            output[nextKey] = source[nextKey];
          }
        }
      }
    }

    return output;
  };
} else {
  assign = Object.assign;
}

var assign$1 = assign;

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = typeof document === "undefined" ? {
  style: {}
} : document.createElement('div');
var TYPE_FUNCTION = 'function';
var round = Math.round,
    abs = Math.abs;
var now = Date.now;

/**
 * @private
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */

function prefixed(obj, property) {
  var prefix;
  var prop;
  var camelProp = property[0].toUpperCase() + property.slice(1);
  var i = 0;

  while (i < VENDOR_PREFIXES.length) {
    prefix = VENDOR_PREFIXES[i];
    prop = prefix ? prefix + camelProp : property;

    if (prop in obj) {
      return prop;
    }

    i++;
  }

  return undefined;
}

/* eslint-disable no-new-func, no-nested-ternary */
var win;

if (typeof window === "undefined") {
  // window is undefined in node.js
  win = {};
} else {
  win = window;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
function getTouchActionProps() {
  if (!NATIVE_TOUCH_ACTION) {
    return false;
  }

  var touchMap = {};
  var cssSupports = win.CSS && win.CSS.supports;
  ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {
    // If css.supports is not supported but there is native touch-action assume it supports
    // all values. This is the case for IE 10 and 11.
    return touchMap[val] = cssSupports ? win.CSS.supports('touch-action', val) : true;
  });
  return touchMap;
}

var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented

var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
var SUPPORT_TOUCH = 'ontouchstart' in win;
var SUPPORT_POINTER_EVENTS = prefixed(win, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';
var COMPUTE_INTERVAL = 25;
var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;
var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;
var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * @private
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
  var i;

  if (!obj) {
    return;
  }

  if (obj.forEach) {
    obj.forEach(iterator, context);
  } else if (obj.length !== undefined) {
    i = 0;

    while (i < obj.length) {
      iterator.call(context, obj[i], i, obj);
      i++;
    }
  } else {
    for (i in obj) {
      obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
    }
  }
}

/**
 * @private
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */

function boolOrFn(val, args) {
  if (typeof val === TYPE_FUNCTION) {
    return val.apply(args ? args[0] || undefined : undefined, args);
  }

  return val;
}

/**
 * @private
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
  return str.indexOf(find) > -1;
}

/**
 * @private
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */

function cleanTouchActions(actions) {
  // none
  if (inStr(actions, TOUCH_ACTION_NONE)) {
    return TOUCH_ACTION_NONE;
  }

  var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
  var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y); // if both pan-x and pan-y are set (different recognizers
  // for different directions, e.g. horizontal pan but vertical swipe?)
  // we need none (as otherwise with pan-x pan-y combined none of these
  // recognizers will work, since the browser would handle all panning

  if (hasPanX && hasPanY) {
    return TOUCH_ACTION_NONE;
  } // pan-x OR pan-y


  if (hasPanX || hasPanY) {
    return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
  } // manipulation


  if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
    return TOUCH_ACTION_MANIPULATION;
  }

  return TOUCH_ACTION_AUTO;
}

/**
 * @private
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */

var TouchAction =
/*#__PURE__*/
function () {
  function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
  }
  /**
   * @private
   * set the touchAction value on the element or enable the polyfill
   * @param {String} value
   */


  var _proto = TouchAction.prototype;

  _proto.set = function set(value) {
    // find out the touch-action by the event handlers
    if (value === TOUCH_ACTION_COMPUTE) {
      value = this.compute();
    }

    if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
      this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
    }

    this.actions = value.toLowerCase().trim();
  };
  /**
   * @private
   * just re-set the touchAction value
   */


  _proto.update = function update() {
    this.set(this.manager.options.touchAction);
  };
  /**
   * @private
   * compute the value for the touchAction property based on the recognizer's settings
   * @returns {String} value
   */


  _proto.compute = function compute() {
    var actions = [];
    each(this.manager.recognizers, function (recognizer) {
      if (boolOrFn(recognizer.options.enable, [recognizer])) {
        actions = actions.concat(recognizer.getTouchAction());
      }
    });
    return cleanTouchActions(actions.join(' '));
  };
  /**
   * @private
   * this method is called on each input cycle and provides the preventing of the browser behavior
   * @param {Object} input
   */


  _proto.preventDefaults = function preventDefaults(input) {
    var srcEvent = input.srcEvent;
    var direction = input.offsetDirection; // if the touch action did prevented once this session

    if (this.manager.session.prevented) {
      srcEvent.preventDefault();
      return;
    }

    var actions = this.actions;
    var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

    if (hasNone) {
      // do not prevent defaults if this is a tap gesture
      var isTapPointer = input.pointers.length === 1;
      var isTapMovement = input.distance < 2;
      var isTapTouchTime = input.deltaTime < 250;

      if (isTapPointer && isTapMovement && isTapTouchTime) {
        return;
      }
    }

    if (hasPanX && hasPanY) {
      // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
      return;
    }

    if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
      return this.preventSrc(srcEvent);
    }
  };
  /**
   * @private
   * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
   * @param {Object} srcEvent
   */


  _proto.preventSrc = function preventSrc(srcEvent) {
    this.manager.session.prevented = true;
    srcEvent.preventDefault();
  };

  return TouchAction;
}();

/**
 * @private
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
  while (node) {
    if (node === parent) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

/**
 * @private
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */

function getCenter(pointers) {
  var pointersLength = pointers.length; // no need to loop when only one touch

  if (pointersLength === 1) {
    return {
      x: round(pointers[0].clientX),
      y: round(pointers[0].clientY)
    };
  }

  var x = 0;
  var y = 0;
  var i = 0;

  while (i < pointersLength) {
    x += pointers[i].clientX;
    y += pointers[i].clientY;
    i++;
  }

  return {
    x: round(x / pointersLength),
    y: round(y / pointersLength)
  };
}

/**
 * @private
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */

function simpleCloneInputData(input) {
  // make a simple copy of the pointers because we will get a reference if we don't
  // we only need clientXY for the calculations
  var pointers = [];
  var i = 0;

  while (i < input.pointers.length) {
    pointers[i] = {
      clientX: round(input.pointers[i].clientX),
      clientY: round(input.pointers[i].clientY)
    };
    i++;
  }

  return {
    timeStamp: now(),
    pointers: pointers,
    center: getCenter(pointers),
    deltaX: input.deltaX,
    deltaY: input.deltaY
  };
}

/**
 * @private
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */

function getDistance(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }

  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];
  return Math.sqrt(x * x + y * y);
}

/**
 * @private
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */

function getAngle(p1, p2, props) {
  if (!props) {
    props = PROPS_XY;
  }

  var x = p2[props[0]] - p1[props[0]];
  var y = p2[props[1]] - p1[props[1]];
  return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * @private
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */

function getDirection(x, y) {
  if (x === y) {
    return DIRECTION_NONE;
  }

  if (abs(x) >= abs(y)) {
    return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
  }

  return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

function computeDeltaXY(session, input) {
  var center = input.center; // let { offsetDelta:offset = {}, prevDelta = {}, prevInput = {} } = session;
  // jscs throwing error on defalut destructured values and without defaults tests fail

  var offset = session.offsetDelta || {};
  var prevDelta = session.prevDelta || {};
  var prevInput = session.prevInput || {};

  if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
    prevDelta = session.prevDelta = {
      x: prevInput.deltaX || 0,
      y: prevInput.deltaY || 0
    };
    offset = session.offsetDelta = {
      x: center.x,
      y: center.y
    };
  }

  input.deltaX = prevDelta.x + (center.x - offset.x);
  input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * @private
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
  return {
    x: x / deltaTime || 0,
    y: y / deltaTime || 0
  };
}

/**
 * @private
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */

function getScale(start, end) {
  return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

/**
 * @private
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */

function getRotation(start, end) {
  return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * @private
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */

function computeIntervalInputData(session, input) {
  var last = session.lastInterval || input;
  var deltaTime = input.timeStamp - last.timeStamp;
  var velocity;
  var velocityX;
  var velocityY;
  var direction;

  if (input.eventType !== INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
    var deltaX = input.deltaX - last.deltaX;
    var deltaY = input.deltaY - last.deltaY;
    var v = getVelocity(deltaTime, deltaX, deltaY);
    velocityX = v.x;
    velocityY = v.y;
    velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
    direction = getDirection(deltaX, deltaY);
    session.lastInterval = input;
  } else {
    // use latest velocity info if it doesn't overtake a minimum period
    velocity = last.velocity;
    velocityX = last.velocityX;
    velocityY = last.velocityY;
    direction = last.direction;
  }

  input.velocity = velocity;
  input.velocityX = velocityX;
  input.velocityY = velocityY;
  input.direction = direction;
}

/**
* @private
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */

function computeInputData(manager, input) {
  var session = manager.session;
  var pointers = input.pointers;
  var pointersLength = pointers.length; // store the first input to calculate the distance and direction

  if (!session.firstInput) {
    session.firstInput = simpleCloneInputData(input);
  } // to compute scale and rotation we need to store the multiple touches


  if (pointersLength > 1 && !session.firstMultiple) {
    session.firstMultiple = simpleCloneInputData(input);
  } else if (pointersLength === 1) {
    session.firstMultiple = false;
  }

  var firstInput = session.firstInput,
      firstMultiple = session.firstMultiple;
  var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
  var center = input.center = getCenter(pointers);
  input.timeStamp = now();
  input.deltaTime = input.timeStamp - firstInput.timeStamp;
  input.angle = getAngle(offsetCenter, center);
  input.distance = getDistance(offsetCenter, center);
  computeDeltaXY(session, input);
  input.offsetDirection = getDirection(input.deltaX, input.deltaY);
  var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
  input.overallVelocityX = overallVelocity.x;
  input.overallVelocityY = overallVelocity.y;
  input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
  input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
  input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
  input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
  computeIntervalInputData(session, input); // find the correct target

  var target = manager.element;
  var srcEvent = input.srcEvent;
  var srcEventTarget;

  if (srcEvent.composedPath) {
    srcEventTarget = srcEvent.composedPath()[0];
  } else if (srcEvent.path) {
    srcEventTarget = srcEvent.path[0];
  } else {
    srcEventTarget = srcEvent.target;
  }

  if (hasParent(srcEventTarget, target)) {
    target = srcEventTarget;
  }

  input.target = target;
}

/**
 * @private
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */

function inputHandler(manager, eventType, input) {
  var pointersLen = input.pointers.length;
  var changedPointersLen = input.changedPointers.length;
  var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
  var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
  input.isFirst = !!isFirst;
  input.isFinal = !!isFinal;

  if (isFirst) {
    manager.session = {};
  } // source event is the normalized value of the domEvents
  // like 'touchstart, mouseup, pointerdown'


  input.eventType = eventType; // compute scale, rotation etc

  computeInputData(manager, input); // emit secret event

  manager.emit('hammer.input', input);
  manager.recognize(input);
  manager.session.prevInput = input;
}

/**
 * @private
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
  return str.trim().split(/\s+/g);
}

/**
 * @private
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */

function addEventListeners(target, types, handler) {
  each(splitStr(types), function (type) {
    target.addEventListener(type, handler, false);
  });
}

/**
 * @private
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */

function removeEventListeners(target, types, handler) {
  each(splitStr(types), function (type) {
    target.removeEventListener(type, handler, false);
  });
}

/**
 * @private
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
  var doc = element.ownerDocument || element;
  return doc.defaultView || doc.parentWindow || window;
}

/**
 * @private
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */

var Input =
/*#__PURE__*/
function () {
  function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget; // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.

    this.domHandler = function (ev) {
      if (boolOrFn(manager.options.enable, [manager])) {
        self.handler(ev);
      }
    };

    this.init();
  }
  /**
   * @private
   * should handle the inputEvent data and trigger the callback
   * @virtual
   */


  var _proto = Input.prototype;

  _proto.handler = function handler() {};
  /**
   * @private
   * bind the events
   */


  _proto.init = function init() {
    this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
    this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
    this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
  };
  /**
   * @private
   * unbind the events
   */


  _proto.destroy = function destroy() {
    this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
    this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
    this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
  };

  return Input;
}();

/**
 * @private
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
  if (src.indexOf && !findByKey) {
    return src.indexOf(find);
  } else {
    var i = 0;

    while (i < src.length) {
      if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
        // do not use === here, test fails
        return i;
      }

      i++;
    }

    return -1;
  }
}

var POINTER_INPUT_MAP = {
  pointerdown: INPUT_START,
  pointermove: INPUT_MOVE,
  pointerup: INPUT_END,
  pointercancel: INPUT_CANCEL,
  pointerout: INPUT_CANCEL
}; // in IE10 the pointer types is defined as an enum

var IE10_POINTER_TYPE_ENUM = {
  2: INPUT_TYPE_TOUCH,
  3: INPUT_TYPE_PEN,
  4: INPUT_TYPE_MOUSE,
  5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816

};
var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel'; // IE10 has prefixed support, and case-sensitive

if (win.MSPointerEvent && !win.PointerEvent) {
  POINTER_ELEMENT_EVENTS = 'MSPointerDown';
  POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}
/**
 * @private
 * Pointer events input
 * @constructor
 * @extends Input
 */


var PointerEventInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(PointerEventInput, _Input);

  function PointerEventInput() {
    var _this;

    var proto = PointerEventInput.prototype;
    proto.evEl = POINTER_ELEMENT_EVENTS;
    proto.evWin = POINTER_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.store = _this.manager.session.pointerEvents = [];
    return _this;
  }
  /**
   * @private
   * handle mouse events
   * @param {Object} ev
   */


  var _proto = PointerEventInput.prototype;

  _proto.handler = function handler(ev) {
    var store = this.store;
    var removePointer = false;
    var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
    var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
    var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
    var isTouch = pointerType === INPUT_TYPE_TOUCH; // get index of the event in the store

    var storeIndex = inArray(store, ev.pointerId, 'pointerId'); // start and mouse must be down

    if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
      if (storeIndex < 0) {
        store.push(ev);
        storeIndex = store.length - 1;
      }
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
      removePointer = true;
    } // it not found, so the pointer hasn't been down (so it's probably a hover)


    if (storeIndex < 0) {
      return;
    } // update the event in the store


    store[storeIndex] = ev;
    this.callback(this.manager, eventType, {
      pointers: store,
      changedPointers: [ev],
      pointerType: pointerType,
      srcEvent: ev
    });

    if (removePointer) {
      // remove from the store
      store.splice(storeIndex, 1);
    }
  };

  return PointerEventInput;
}(Input);

/**
 * @private
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
  return Array.prototype.slice.call(obj, 0);
}

/**
 * @private
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */

function uniqueArray(src, key, sort) {
  var results = [];
  var values = [];
  var i = 0;

  while (i < src.length) {
    var val = key ? src[i][key] : src[i];

    if (inArray(values, val) < 0) {
      results.push(src[i]);
    }

    values[i] = val;
    i++;
  }

  if (sort) {
    if (!key) {
      results = results.sort();
    } else {
      results = results.sort(function (a, b) {
        return a[key] > b[key];
      });
    }
  }

  return results;
}

var TOUCH_INPUT_MAP = {
  touchstart: INPUT_START,
  touchmove: INPUT_MOVE,
  touchend: INPUT_END,
  touchcancel: INPUT_CANCEL
};
var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * @private
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */

var TouchInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(TouchInput, _Input);

  function TouchInput() {
    var _this;

    TouchInput.prototype.evTarget = TOUCH_TARGET_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.targetIds = {}; // this.evTarget = TOUCH_TARGET_EVENTS;

    return _this;
  }

  var _proto = TouchInput.prototype;

  _proto.handler = function handler(ev) {
    var type = TOUCH_INPUT_MAP[ev.type];
    var touches = getTouches.call(this, ev, type);

    if (!touches) {
      return;
    }

    this.callback(this.manager, type, {
      pointers: touches[0],
      changedPointers: touches[1],
      pointerType: INPUT_TYPE_TOUCH,
      srcEvent: ev
    });
  };

  return TouchInput;
}(Input);

function getTouches(ev, type) {
  var allTouches = toArray(ev.touches);
  var targetIds = this.targetIds; // when there is only one touch, the process can be simplified

  if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
    targetIds[allTouches[0].identifier] = true;
    return [allTouches, allTouches];
  }

  var i;
  var targetTouches;
  var changedTouches = toArray(ev.changedTouches);
  var changedTargetTouches = [];
  var target = this.target; // get target touches from touches

  targetTouches = allTouches.filter(function (touch) {
    return hasParent(touch.target, target);
  }); // collect touches

  if (type === INPUT_START) {
    i = 0;

    while (i < targetTouches.length) {
      targetIds[targetTouches[i].identifier] = true;
      i++;
    }
  } // filter changed touches to only contain touches that exist in the collected target ids


  i = 0;

  while (i < changedTouches.length) {
    if (targetIds[changedTouches[i].identifier]) {
      changedTargetTouches.push(changedTouches[i]);
    } // cleanup removed touches


    if (type & (INPUT_END | INPUT_CANCEL)) {
      delete targetIds[changedTouches[i].identifier];
    }

    i++;
  }

  if (!changedTargetTouches.length) {
    return;
  }

  return [// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
  uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
}

var MOUSE_INPUT_MAP = {
  mousedown: INPUT_START,
  mousemove: INPUT_MOVE,
  mouseup: INPUT_END
};
var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';
/**
 * @private
 * Mouse events input
 * @constructor
 * @extends Input
 */

var MouseInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(MouseInput, _Input);

  function MouseInput() {
    var _this;

    var proto = MouseInput.prototype;
    proto.evEl = MOUSE_ELEMENT_EVENTS;
    proto.evWin = MOUSE_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.pressed = false; // mousedown state

    return _this;
  }
  /**
   * @private
   * handle mouse events
   * @param {Object} ev
   */


  var _proto = MouseInput.prototype;

  _proto.handler = function handler(ev) {
    var eventType = MOUSE_INPUT_MAP[ev.type]; // on start we want to have the left mouse button down

    if (eventType & INPUT_START && ev.button === 0) {
      this.pressed = true;
    }

    if (eventType & INPUT_MOVE && ev.which !== 1) {
      eventType = INPUT_END;
    } // mouse must be down


    if (!this.pressed) {
      return;
    }

    if (eventType & INPUT_END) {
      this.pressed = false;
    }

    this.callback(this.manager, eventType, {
      pointers: [ev],
      changedPointers: [ev],
      pointerType: INPUT_TYPE_MOUSE,
      srcEvent: ev
    });
  };

  return MouseInput;
}(Input);

/**
 * @private
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function setLastTouch(eventData) {
  var _eventData$changedPoi = eventData.changedPointers,
      touch = _eventData$changedPoi[0];

  if (touch.identifier === this.primaryTouch) {
    var lastTouch = {
      x: touch.clientX,
      y: touch.clientY
    };
    var lts = this.lastTouches;
    this.lastTouches.push(lastTouch);

    var removeLastTouch = function removeLastTouch() {
      var i = lts.indexOf(lastTouch);

      if (i > -1) {
        lts.splice(i, 1);
      }
    };

    setTimeout(removeLastTouch, DEDUP_TIMEOUT);
  }
}

function recordTouches(eventType, eventData) {
  if (eventType & INPUT_START) {
    this.primaryTouch = eventData.changedPointers[0].identifier;
    setLastTouch.call(this, eventData);
  } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
    setLastTouch.call(this, eventData);
  }
}

function isSyntheticEvent(eventData) {
  var x = eventData.srcEvent.clientX;
  var y = eventData.srcEvent.clientY;

  for (var i = 0; i < this.lastTouches.length; i++) {
    var t = this.lastTouches[i];
    var dx = Math.abs(x - t.x);
    var dy = Math.abs(y - t.y);

    if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
      return true;
    }
  }

  return false;
}

var TouchMouseInput =
/*#__PURE__*/
function () {
  var TouchMouseInput =
  /*#__PURE__*/
  function (_Input) {
    _inheritsLoose(TouchMouseInput, _Input);

    function TouchMouseInput(_manager, callback) {
      var _this;

      _this = _Input.call(this, _manager, callback) || this;

      _this.handler = function (manager, inputEvent, inputData) {
        var isTouch = inputData.pointerType === INPUT_TYPE_TOUCH;
        var isMouse = inputData.pointerType === INPUT_TYPE_MOUSE;

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
          return;
        } // when we're in a touch event, record touches to  de-dupe synthetic mouse event


        if (isTouch) {
          recordTouches.call(_assertThisInitialized(_assertThisInitialized(_this)), inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(_assertThisInitialized(_assertThisInitialized(_this)), inputData)) {
          return;
        }

        _this.callback(manager, inputEvent, inputData);
      };

      _this.touch = new TouchInput(_this.manager, _this.handler);
      _this.mouse = new MouseInput(_this.manager, _this.handler);
      _this.primaryTouch = null;
      _this.lastTouches = [];
      return _this;
    }
    /**
     * @private
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */


    var _proto = TouchMouseInput.prototype;

    /**
     * @private
     * remove the event listeners
     */
    _proto.destroy = function destroy() {
      this.touch.destroy();
      this.mouse.destroy();
    };

    return TouchMouseInput;
  }(Input);

  return TouchMouseInput;
}();

/**
 * @private
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */

function createInputInstance(manager) {
  var Type; // let inputClass = manager.options.inputClass;

  var inputClass = manager.options.inputClass;

  if (inputClass) {
    Type = inputClass;
  } else if (SUPPORT_POINTER_EVENTS) {
    Type = PointerEventInput;
  } else if (SUPPORT_ONLY_TOUCH) {
    Type = TouchInput;
  } else if (!SUPPORT_TOUCH) {
    Type = MouseInput;
  } else {
    Type = TouchMouseInput;
  }

  return new Type(manager, inputHandler);
}

/**
 * @private
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */

function invokeArrayArg(arg, fn, context) {
  if (Array.isArray(arg)) {
    each(arg, context[fn], context);
    return true;
  }

  return false;
}

var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * @private
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
  return _uniqueId++;
}

/**
 * @private
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
  var manager = recognizer.manager;

  if (manager) {
    return manager.get(otherRecognizer);
  }

  return otherRecognizer;
}

/**
 * @private
 * get a usable string, used as event postfix
 * @param {constant} state
 * @returns {String} state
 */

function stateStr(state) {
  if (state & STATE_CANCELLED) {
    return 'cancel';
  } else if (state & STATE_ENDED) {
    return 'end';
  } else if (state & STATE_CHANGED) {
    return 'move';
  } else if (state & STATE_BEGAN) {
    return 'start';
  }

  return '';
}

/**
 * @private
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */

/**
 * @private
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */

var Recognizer =
/*#__PURE__*/
function () {
  function Recognizer(options) {
    if (options === void 0) {
      options = {};
    }

    this.options = _extends({
      enable: true
    }, options);
    this.id = uniqueId();
    this.manager = null; // default is enable true

    this.state = STATE_POSSIBLE;
    this.simultaneous = {};
    this.requireFail = [];
  }
  /**
   * @private
   * set options
   * @param {Object} options
   * @return {Recognizer}
   */


  var _proto = Recognizer.prototype;

  _proto.set = function set(options) {
    assign$1(this.options, options); // also update the touchAction, in case something changed about the directions/enabled state

    this.manager && this.manager.touchAction.update();
    return this;
  };
  /**
   * @private
   * recognize simultaneous with an other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.recognizeWith = function recognizeWith(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
      return this;
    }

    var simultaneous = this.simultaneous;
    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

    if (!simultaneous[otherRecognizer.id]) {
      simultaneous[otherRecognizer.id] = otherRecognizer;
      otherRecognizer.recognizeWith(this);
    }

    return this;
  };
  /**
   * @private
   * drop the simultaneous link. it doesnt remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.dropRecognizeWith = function dropRecognizeWith(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
      return this;
    }

    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    delete this.simultaneous[otherRecognizer.id];
    return this;
  };
  /**
   * @private
   * recognizer can only run when an other is failing
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.requireFailure = function requireFailure(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
      return this;
    }

    var requireFail = this.requireFail;
    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);

    if (inArray(requireFail, otherRecognizer) === -1) {
      requireFail.push(otherRecognizer);
      otherRecognizer.requireFailure(this);
    }

    return this;
  };
  /**
   * @private
   * drop the requireFailure link. it does not remove the link on the other recognizer.
   * @param {Recognizer} otherRecognizer
   * @returns {Recognizer} this
   */


  _proto.dropRequireFailure = function dropRequireFailure(otherRecognizer) {
    if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
      return this;
    }

    otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
    var index = inArray(this.requireFail, otherRecognizer);

    if (index > -1) {
      this.requireFail.splice(index, 1);
    }

    return this;
  };
  /**
   * @private
   * has require failures boolean
   * @returns {boolean}
   */


  _proto.hasRequireFailures = function hasRequireFailures() {
    return this.requireFail.length > 0;
  };
  /**
   * @private
   * if the recognizer can recognize simultaneous with an other recognizer
   * @param {Recognizer} otherRecognizer
   * @returns {Boolean}
   */


  _proto.canRecognizeWith = function canRecognizeWith(otherRecognizer) {
    return !!this.simultaneous[otherRecognizer.id];
  };
  /**
   * @private
   * You should use `tryEmit` instead of `emit` directly to check
   * that all the needed recognizers has failed before emitting.
   * @param {Object} input
   */


  _proto.emit = function emit(input) {
    var self = this;
    var state = this.state;

    function emit(event) {
      self.manager.emit(event, input);
    } // 'panstart' and 'panmove'


    if (state < STATE_ENDED) {
      emit(self.options.event + stateStr(state));
    }

    emit(self.options.event); // simple 'eventName' events

    if (input.additionalEvent) {
      // additional event(panleft, panright, pinchin, pinchout...)
      emit(input.additionalEvent);
    } // panend and pancancel


    if (state >= STATE_ENDED) {
      emit(self.options.event + stateStr(state));
    }
  };
  /**
   * @private
   * Check that all the require failure recognizers has failed,
   * if true, it emits a gesture event,
   * otherwise, setup the state to FAILED.
   * @param {Object} input
   */


  _proto.tryEmit = function tryEmit(input) {
    if (this.canEmit()) {
      return this.emit(input);
    } // it's failing anyway


    this.state = STATE_FAILED;
  };
  /**
   * @private
   * can we emit?
   * @returns {boolean}
   */


  _proto.canEmit = function canEmit() {
    var i = 0;

    while (i < this.requireFail.length) {
      if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
        return false;
      }

      i++;
    }

    return true;
  };
  /**
   * @private
   * update the recognizer
   * @param {Object} inputData
   */


  _proto.recognize = function recognize(inputData) {
    // make a new copy of the inputData
    // so we can change the inputData without messing up the other recognizers
    var inputDataClone = assign$1({}, inputData); // is is enabled and allow recognizing?

    if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
      this.reset();
      this.state = STATE_FAILED;
      return;
    } // reset when we've reached the end


    if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
      this.state = STATE_POSSIBLE;
    }

    this.state = this.process(inputDataClone); // the recognizer has recognized a gesture
    // so trigger an event

    if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
      this.tryEmit(inputDataClone);
    }
  };
  /**
   * @private
   * return the state of the recognizer
   * the actual recognizing happens in this method
   * @virtual
   * @param {Object} inputData
   * @returns {constant} STATE
   */

  /* jshint ignore:start */


  _proto.process = function process(inputData) {};
  /* jshint ignore:end */

  /**
   * @private
   * return the preferred touch-action
   * @virtual
   * @returns {Array}
   */


  _proto.getTouchAction = function getTouchAction() {};
  /**
   * @private
   * called when the gesture isn't allowed to recognize
   * like when another is being recognized or it is disabled
   * @virtual
   */


  _proto.reset = function reset() {};

  return Recognizer;
}();

/**
 * @private
 * A tap is recognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */

var TapRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(TapRecognizer, _Recognizer);

  function TapRecognizer(options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _Recognizer.call(this, _extends({
      event: 'tap',
      pointers: 1,
      taps: 1,
      interval: 300,
      // max time between the multi-tap taps
      time: 250,
      // max time of the pointer to be down (like finger on the screen)
      threshold: 9,
      // a minimal movement is ok, but keep it low
      posThreshold: 10
    }, options)) || this; // previous time and center,
    // used for tap counting

    _this.pTime = false;
    _this.pCenter = false;
    _this._timer = null;
    _this._input = null;
    _this.count = 0;
    return _this;
  }

  var _proto = TapRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_MANIPULATION];
  };

  _proto.process = function process(input) {
    var _this2 = this;

    var options = this.options;
    var validPointers = input.pointers.length === options.pointers;
    var validMovement = input.distance < options.threshold;
    var validTouchTime = input.deltaTime < options.time;
    this.reset();

    if (input.eventType & INPUT_START && this.count === 0) {
      return this.failTimeout();
    } // we only allow little movement
    // and we've reached an end event, so a tap is possible


    if (validMovement && validTouchTime && validPointers) {
      if (input.eventType !== INPUT_END) {
        return this.failTimeout();
      }

      var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
      var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
      this.pTime = input.timeStamp;
      this.pCenter = input.center;

      if (!validMultiTap || !validInterval) {
        this.count = 1;
      } else {
        this.count += 1;
      }

      this._input = input; // if tap count matches we have recognized it,
      // else it has began recognizing...

      var tapCount = this.count % options.taps;

      if (tapCount === 0) {
        // no failing requirements, immediately trigger the tap event
        // or wait as long as the multitap interval to trigger
        if (!this.hasRequireFailures()) {
          return STATE_RECOGNIZED;
        } else {
          this._timer = setTimeout(function () {
            _this2.state = STATE_RECOGNIZED;

            _this2.tryEmit();
          }, options.interval);
          return STATE_BEGAN;
        }
      }
    }

    return STATE_FAILED;
  };

  _proto.failTimeout = function failTimeout() {
    var _this3 = this;

    this._timer = setTimeout(function () {
      _this3.state = STATE_FAILED;
    }, this.options.interval);
    return STATE_FAILED;
  };

  _proto.reset = function reset() {
    clearTimeout(this._timer);
  };

  _proto.emit = function emit() {
    if (this.state === STATE_RECOGNIZED) {
      this._input.tapCount = this.count;
      this.manager.emit(this.options.event, this._input);
    }
  };

  return TapRecognizer;
}(Recognizer);

/**
 * @private
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */

var AttrRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(AttrRecognizer, _Recognizer);

  function AttrRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _Recognizer.call(this, _extends({
      pointers: 1
    }, options)) || this;
  }
  /**
   * @private
   * Used to check if it the recognizer receives valid input, like input.distance > 10.
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {Boolean} recognized
   */


  var _proto = AttrRecognizer.prototype;

  _proto.attrTest = function attrTest(input) {
    var optionPointers = this.options.pointers;
    return optionPointers === 0 || input.pointers.length === optionPointers;
  };
  /**
   * @private
   * Process the input and return the state for the recognizer
   * @memberof AttrRecognizer
   * @param {Object} input
   * @returns {*} State
   */


  _proto.process = function process(input) {
    var state = this.state;
    var eventType = input.eventType;
    var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
    var isValid = this.attrTest(input); // on cancel input and we've recognized before, return STATE_CANCELLED

    if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
      return state | STATE_CANCELLED;
    } else if (isRecognized || isValid) {
      if (eventType & INPUT_END) {
        return state | STATE_ENDED;
      } else if (!(state & STATE_BEGAN)) {
        return STATE_BEGAN;
      }

      return state | STATE_CHANGED;
    }

    return STATE_FAILED;
  };

  return AttrRecognizer;
}(Recognizer);

/**
 * @private
 * direction cons to string
 * @param {constant} direction
 * @returns {String}
 */

function directionStr(direction) {
  if (direction === DIRECTION_DOWN) {
    return 'down';
  } else if (direction === DIRECTION_UP) {
    return 'up';
  } else if (direction === DIRECTION_LEFT) {
    return 'left';
  } else if (direction === DIRECTION_RIGHT) {
    return 'right';
  }

  return '';
}

/**
 * @private
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */

var PanRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(PanRecognizer, _AttrRecognizer);

  function PanRecognizer(options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _AttrRecognizer.call(this, _extends({
      event: 'pan',
      threshold: 10,
      pointers: 1,
      direction: DIRECTION_ALL
    }, options)) || this;
    _this.pX = null;
    _this.pY = null;
    return _this;
  }

  var _proto = PanRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    var direction = this.options.direction;
    var actions = [];

    if (direction & DIRECTION_HORIZONTAL) {
      actions.push(TOUCH_ACTION_PAN_Y);
    }

    if (direction & DIRECTION_VERTICAL) {
      actions.push(TOUCH_ACTION_PAN_X);
    }

    return actions;
  };

  _proto.directionTest = function directionTest(input) {
    var options = this.options;
    var hasMoved = true;
    var distance = input.distance;
    var direction = input.direction;
    var x = input.deltaX;
    var y = input.deltaY; // lock to axis?

    if (!(direction & options.direction)) {
      if (options.direction & DIRECTION_HORIZONTAL) {
        direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        hasMoved = x !== this.pX;
        distance = Math.abs(input.deltaX);
      } else {
        direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
        hasMoved = y !== this.pY;
        distance = Math.abs(input.deltaY);
      }
    }

    input.direction = direction;
    return hasMoved && distance > options.threshold && direction & options.direction;
  };

  _proto.attrTest = function attrTest(input) {
    return AttrRecognizer.prototype.attrTest.call(this, input) && ( // replace with a super call
    this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
  };

  _proto.emit = function emit(input) {
    this.pX = input.deltaX;
    this.pY = input.deltaY;
    var direction = directionStr(input.direction);

    if (direction) {
      input.additionalEvent = this.options.event + direction;
    }

    _AttrRecognizer.prototype.emit.call(this, input);
  };

  return PanRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */

var SwipeRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(SwipeRecognizer, _AttrRecognizer);

  function SwipeRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _AttrRecognizer.call(this, _extends({
      event: 'swipe',
      threshold: 10,
      velocity: 0.3,
      direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
      pointers: 1
    }, options)) || this;
  }

  var _proto = SwipeRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return PanRecognizer.prototype.getTouchAction.call(this);
  };

  _proto.attrTest = function attrTest(input) {
    var direction = this.options.direction;
    var velocity;

    if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
      velocity = input.overallVelocity;
    } else if (direction & DIRECTION_HORIZONTAL) {
      velocity = input.overallVelocityX;
    } else if (direction & DIRECTION_VERTICAL) {
      velocity = input.overallVelocityY;
    }

    return _AttrRecognizer.prototype.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers === this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
  };

  _proto.emit = function emit(input) {
    var direction = directionStr(input.offsetDirection);

    if (direction) {
      this.manager.emit(this.options.event + direction, input);
    }

    this.manager.emit(this.options.event, input);
  };

  return SwipeRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */

var PinchRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(PinchRecognizer, _AttrRecognizer);

  function PinchRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _AttrRecognizer.call(this, _extends({
      event: 'pinch',
      threshold: 0,
      pointers: 2
    }, options)) || this;
  }

  var _proto = PinchRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_NONE];
  };

  _proto.attrTest = function attrTest(input) {
    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
  };

  _proto.emit = function emit(input) {
    if (input.scale !== 1) {
      var inOut = input.scale < 1 ? 'in' : 'out';
      input.additionalEvent = this.options.event + inOut;
    }

    _AttrRecognizer.prototype.emit.call(this, input);
  };

  return PinchRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */

var RotateRecognizer =
/*#__PURE__*/
function (_AttrRecognizer) {
  _inheritsLoose(RotateRecognizer, _AttrRecognizer);

  function RotateRecognizer(options) {
    if (options === void 0) {
      options = {};
    }

    return _AttrRecognizer.call(this, _extends({
      event: 'rotate',
      threshold: 0,
      pointers: 2
    }, options)) || this;
  }

  var _proto = RotateRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_NONE];
  };

  _proto.attrTest = function attrTest(input) {
    return _AttrRecognizer.prototype.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
  };

  return RotateRecognizer;
}(AttrRecognizer);

/**
 * @private
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */

var PressRecognizer =
/*#__PURE__*/
function (_Recognizer) {
  _inheritsLoose(PressRecognizer, _Recognizer);

  function PressRecognizer(options) {
    var _this;

    if (options === void 0) {
      options = {};
    }

    _this = _Recognizer.call(this, _extends({
      event: 'press',
      pointers: 1,
      time: 251,
      // minimal time of the pointer to be pressed
      threshold: 9
    }, options)) || this;
    _this._timer = null;
    _this._input = null;
    return _this;
  }

  var _proto = PressRecognizer.prototype;

  _proto.getTouchAction = function getTouchAction() {
    return [TOUCH_ACTION_AUTO];
  };

  _proto.process = function process(input) {
    var _this2 = this;

    var options = this.options;
    var validPointers = input.pointers.length === options.pointers;
    var validMovement = input.distance < options.threshold;
    var validTime = input.deltaTime > options.time;
    this._input = input; // we only allow little movement
    // and we've reached an end event, so a tap is possible

    if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
      this.reset();
    } else if (input.eventType & INPUT_START) {
      this.reset();
      this._timer = setTimeout(function () {
        _this2.state = STATE_RECOGNIZED;

        _this2.tryEmit();
      }, options.time);
    } else if (input.eventType & INPUT_END) {
      return STATE_RECOGNIZED;
    }

    return STATE_FAILED;
  };

  _proto.reset = function reset() {
    clearTimeout(this._timer);
  };

  _proto.emit = function emit(input) {
    if (this.state !== STATE_RECOGNIZED) {
      return;
    }

    if (input && input.eventType & INPUT_END) {
      this.manager.emit(this.options.event + "up", input);
    } else {
      this._input.timeStamp = now();
      this.manager.emit(this.options.event, this._input);
    }
  };

  return PressRecognizer;
}(Recognizer);

var defaults = {
  /**
   * @private
   * set if DOM events are being triggered.
   * But this is slower and unused by simple implementations, so disabled by default.
   * @type {Boolean}
   * @default false
   */
  domEvents: false,

  /**
   * @private
   * The value for the touchAction property/fallback.
   * When set to `compute` it will magically set the correct value based on the added recognizers.
   * @type {String}
   * @default compute
   */
  touchAction: TOUCH_ACTION_COMPUTE,

  /**
   * @private
   * @type {Boolean}
   * @default true
   */
  enable: true,

  /**
   * @private
   * EXPERIMENTAL FEATURE -- can be removed/changed
   * Change the parent input target element.
   * If Null, then it is being set the to main element.
   * @type {Null|EventTarget}
   * @default null
   */
  inputTarget: null,

  /**
   * @private
   * force an input class
   * @type {Null|Function}
   * @default null
   */
  inputClass: null,

  /**
   * @private
   * Some CSS properties can be used to improve the working of Hammer.
   * Add them to this method and they will be set when creating a new Manager.
   * @namespace
   */
  cssProps: {
    /**
     * @private
     * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userSelect: "none",

    /**
     * @private
     * Disable the Windows Phone grippers when pressing an element.
     * @type {String}
     * @default 'none'
     */
    touchSelect: "none",

    /**
     * @private
     * Disables the default callout shown when you touch and hold a touch target.
     * On iOS, when you touch and hold a touch target such as a link, Safari displays
     * a callout containing information about the link. This property allows you to disable that callout.
     * @type {String}
     * @default 'none'
     */
    touchCallout: "none",

    /**
     * @private
     * Specifies whether zooming is enabled. Used by IE10>
     * @type {String}
     * @default 'none'
     */
    contentZooming: "none",

    /**
     * @private
     * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
     * @type {String}
     * @default 'none'
     */
    userDrag: "none",

    /**
     * @private
     * Overrides the highlight color shown when the user taps a link or a JavaScript
     * clickable element in iOS. This property obeys the alpha value, if specified.
     * @type {String}
     * @default 'rgba(0,0,0,0)'
     */
    tapHighlightColor: "rgba(0,0,0,0)"
  }
};
/**
 * @private
 * Default recognizer setup when calling `Hammer()`
 * When creating a new Manager these will be skipped.
 * This is separated with other defaults because of tree-shaking.
 * @type {Array}
 */

var preset = [[RotateRecognizer, {
  enable: false
}], [PinchRecognizer, {
  enable: false
}, ['rotate']], [SwipeRecognizer, {
  direction: DIRECTION_HORIZONTAL
}], [PanRecognizer, {
  direction: DIRECTION_HORIZONTAL
}, ['swipe']], [TapRecognizer], [TapRecognizer, {
  event: 'doubletap',
  taps: 2
}, ['tap']], [PressRecognizer]];

var STOP = 1;
var FORCED_STOP = 2;
/**
 * @private
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */

function toggleCssProps(manager, add) {
  var element = manager.element;

  if (!element.style) {
    return;
  }

  var prop;
  each(manager.options.cssProps, function (value, name) {
    prop = prefixed(element.style, name);

    if (add) {
      manager.oldCssProps[prop] = element.style[prop];
      element.style[prop] = value;
    } else {
      element.style[prop] = manager.oldCssProps[prop] || "";
    }
  });

  if (!add) {
    manager.oldCssProps = {};
  }
}
/**
 * @private
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */


function triggerDomEvent(event, data) {
  var gestureEvent = document.createEvent("Event");
  gestureEvent.initEvent(event, true, true);
  gestureEvent.gesture = data;
  data.target.dispatchEvent(gestureEvent);
}
/**
* @private
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */


var Manager =
/*#__PURE__*/
function () {
  function Manager(element, options) {
    var _this = this;

    this.options = assign$1({}, defaults, options || {});
    this.options.inputTarget = this.options.inputTarget || element;
    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};
    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);
    toggleCssProps(this, true);
    each(this.options.recognizers, function (item) {
      var recognizer = _this.add(new item[0](item[1]));

      item[2] && recognizer.recognizeWith(item[2]);
      item[3] && recognizer.requireFailure(item[3]);
    }, this);
  }
  /**
   * @private
   * set options
   * @param {Object} options
   * @returns {Manager}
   */


  var _proto = Manager.prototype;

  _proto.set = function set(options) {
    assign$1(this.options, options); // Options that need a little more setup

    if (options.touchAction) {
      this.touchAction.update();
    }

    if (options.inputTarget) {
      // Clean up existing event listeners and reinitialize
      this.input.destroy();
      this.input.target = options.inputTarget;
      this.input.init();
    }

    return this;
  };
  /**
   * @private
   * stop recognizing for this session.
   * This session will be discarded, when a new [input]start event is fired.
   * When forced, the recognizer cycle is stopped immediately.
   * @param {Boolean} [force]
   */


  _proto.stop = function stop(force) {
    this.session.stopped = force ? FORCED_STOP : STOP;
  };
  /**
   * @private
   * run the recognizers!
   * called by the inputHandler function on every movement of the pointers (touches)
   * it walks through all the recognizers and tries to detect the gesture that is being made
   * @param {Object} inputData
   */


  _proto.recognize = function recognize(inputData) {
    var session = this.session;

    if (session.stopped) {
      return;
    } // run the touch-action polyfill


    this.touchAction.preventDefaults(inputData);
    var recognizer;
    var recognizers = this.recognizers; // this holds the recognizer that is being recognized.
    // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
    // if no recognizer is detecting a thing, it is set to `null`

    var curRecognizer = session.curRecognizer; // reset when the last recognizer is recognized
    // or when we're in a new session

    if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
      session.curRecognizer = null;
      curRecognizer = null;
    }

    var i = 0;

    while (i < recognizers.length) {
      recognizer = recognizers[i]; // find out if we are allowed try to recognize the input for this one.
      // 1.   allow if the session is NOT forced stopped (see the .stop() method)
      // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
      //      that is being recognized.
      // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
      //      this can be setup with the `recognizeWith()` method on the recognizer.

      if (session.stopped !== FORCED_STOP && ( // 1
      !curRecognizer || recognizer === curRecognizer || // 2
      recognizer.canRecognizeWith(curRecognizer))) {
        // 3
        recognizer.recognize(inputData);
      } else {
        recognizer.reset();
      } // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
      // current active recognizer. but only if we don't already have an active recognizer


      if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
        session.curRecognizer = recognizer;
        curRecognizer = recognizer;
      }

      i++;
    }
  };
  /**
   * @private
   * get a recognizer by its event name.
   * @param {Recognizer|String} recognizer
   * @returns {Recognizer|Null}
   */


  _proto.get = function get(recognizer) {
    if (recognizer instanceof Recognizer) {
      return recognizer;
    }

    var recognizers = this.recognizers;

    for (var i = 0; i < recognizers.length; i++) {
      if (recognizers[i].options.event === recognizer) {
        return recognizers[i];
      }
    }

    return null;
  };
  /**
   * @private add a recognizer to the manager
   * existing recognizers with the same event name will be removed
   * @param {Recognizer} recognizer
   * @returns {Recognizer|Manager}
   */


  _proto.add = function add(recognizer) {
    if (invokeArrayArg(recognizer, "add", this)) {
      return this;
    } // remove existing


    var existing = this.get(recognizer.options.event);

    if (existing) {
      this.remove(existing);
    }

    this.recognizers.push(recognizer);
    recognizer.manager = this;
    this.touchAction.update();
    return recognizer;
  };
  /**
   * @private
   * remove a recognizer by name or instance
   * @param {Recognizer|String} recognizer
   * @returns {Manager}
   */


  _proto.remove = function remove(recognizer) {
    if (invokeArrayArg(recognizer, "remove", this)) {
      return this;
    }

    var targetRecognizer = this.get(recognizer); // let's make sure this recognizer exists

    if (recognizer) {
      var recognizers = this.recognizers;
      var index = inArray(recognizers, targetRecognizer);

      if (index !== -1) {
        recognizers.splice(index, 1);
        this.touchAction.update();
      }
    }

    return this;
  };
  /**
   * @private
   * bind event
   * @param {String} events
   * @param {Function} handler
   * @returns {EventEmitter} this
   */


  _proto.on = function on(events, handler) {
    if (events === undefined || handler === undefined) {
      return this;
    }

    var handlers = this.handlers;
    each(splitStr(events), function (event) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    });
    return this;
  };
  /**
   * @private unbind event, leave emit blank to remove all handlers
   * @param {String} events
   * @param {Function} [handler]
   * @returns {EventEmitter} this
   */


  _proto.off = function off(events, handler) {
    if (events === undefined) {
      return this;
    }

    var handlers = this.handlers;
    each(splitStr(events), function (event) {
      if (!handler) {
        delete handlers[event];
      } else {
        handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
      }
    });
    return this;
  };
  /**
   * @private emit event to the listeners
   * @param {String} event
   * @param {Object} data
   */


  _proto.emit = function emit(event, data) {
    // we also want to trigger dom events
    if (this.options.domEvents) {
      triggerDomEvent(event, data);
    } // no handlers, so skip it all


    var handlers = this.handlers[event] && this.handlers[event].slice();

    if (!handlers || !handlers.length) {
      return;
    }

    data.type = event;

    data.preventDefault = function () {
      data.srcEvent.preventDefault();
    };

    var i = 0;

    while (i < handlers.length) {
      handlers[i](data);
      i++;
    }
  };
  /**
   * @private
   * destroy the manager and unbinds all events
   * it doesn't unbind dom events, that is the user own responsibility
   */


  _proto.destroy = function destroy() {
    this.element && toggleCssProps(this, false);
    this.handlers = {};
    this.session = {};
    this.input.destroy();
    this.element = null;
  };

  return Manager;
}();

var SINGLE_TOUCH_INPUT_MAP = {
  touchstart: INPUT_START,
  touchmove: INPUT_MOVE,
  touchend: INPUT_END,
  touchcancel: INPUT_CANCEL
};
var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';
/**
 * @private
 * Touch events input
 * @constructor
 * @extends Input
 */

var SingleTouchInput =
/*#__PURE__*/
function (_Input) {
  _inheritsLoose(SingleTouchInput, _Input);

  function SingleTouchInput() {
    var _this;

    var proto = SingleTouchInput.prototype;
    proto.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    proto.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    _this = _Input.apply(this, arguments) || this;
    _this.started = false;
    return _this;
  }

  var _proto = SingleTouchInput.prototype;

  _proto.handler = function handler(ev) {
    var type = SINGLE_TOUCH_INPUT_MAP[ev.type]; // should we handle the touch events?

    if (type === INPUT_START) {
      this.started = true;
    }

    if (!this.started) {
      return;
    }

    var touches = normalizeSingleTouches.call(this, ev, type); // when done, reset the started state

    if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
      this.started = false;
    }

    this.callback(this.manager, type, {
      pointers: touches[0],
      changedPointers: touches[1],
      pointerType: INPUT_TYPE_TOUCH,
      srcEvent: ev
    });
  };

  return SingleTouchInput;
}(Input);

function normalizeSingleTouches(ev, type) {
  var all = toArray(ev.touches);
  var changed = toArray(ev.changedTouches);

  if (type & (INPUT_END | INPUT_CANCEL)) {
    all = uniqueArray(all.concat(changed), 'identifier', true);
  }

  return [all, changed];
}

/**
 * @private
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
  var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
  return function () {
    var e = new Error('get-stack-trace');
    var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';
    var log = window.console && (window.console.warn || window.console.log);

    if (log) {
      log.call(window.console, deprecationMessage, stack);
    }

    return method.apply(this, arguments);
  };
}

/**
 * @private
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */

var extend = deprecate(function (dest, src, merge) {
  var keys = Object.keys(src);
  var i = 0;

  while (i < keys.length) {
    if (!merge || merge && dest[keys[i]] === undefined) {
      dest[keys[i]] = src[keys[i]];
    }

    i++;
  }

  return dest;
}, 'extend', 'Use `assign`.');

/**
 * @private
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */

var merge = deprecate(function (dest, src) {
  return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * @private
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */

function inherit(child, base, properties) {
  var baseP = base.prototype;
  var childP;
  childP = child.prototype = Object.create(baseP);
  childP.constructor = child;
  childP._super = baseP;

  if (properties) {
    assign$1(childP, properties);
  }
}

/**
 * @private
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
  return function boundFn() {
    return fn.apply(context, arguments);
  };
}

/**
 * @private
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */

var Hammer =
/*#__PURE__*/
function () {
  var Hammer =
  /**
    * @private
    * @const {string}
    */
  function Hammer(element, options) {
    if (options === void 0) {
      options = {};
    }

    return new Manager(element, _extends({
      recognizers: preset.concat()
    }, options));
  };

  Hammer.VERSION = "2.0.17-rc";
  Hammer.DIRECTION_ALL = DIRECTION_ALL;
  Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
  Hammer.DIRECTION_LEFT = DIRECTION_LEFT;
  Hammer.DIRECTION_RIGHT = DIRECTION_RIGHT;
  Hammer.DIRECTION_UP = DIRECTION_UP;
  Hammer.DIRECTION_HORIZONTAL = DIRECTION_HORIZONTAL;
  Hammer.DIRECTION_VERTICAL = DIRECTION_VERTICAL;
  Hammer.DIRECTION_NONE = DIRECTION_NONE;
  Hammer.DIRECTION_DOWN = DIRECTION_DOWN;
  Hammer.INPUT_START = INPUT_START;
  Hammer.INPUT_MOVE = INPUT_MOVE;
  Hammer.INPUT_END = INPUT_END;
  Hammer.INPUT_CANCEL = INPUT_CANCEL;
  Hammer.STATE_POSSIBLE = STATE_POSSIBLE;
  Hammer.STATE_BEGAN = STATE_BEGAN;
  Hammer.STATE_CHANGED = STATE_CHANGED;
  Hammer.STATE_ENDED = STATE_ENDED;
  Hammer.STATE_RECOGNIZED = STATE_RECOGNIZED;
  Hammer.STATE_CANCELLED = STATE_CANCELLED;
  Hammer.STATE_FAILED = STATE_FAILED;
  Hammer.Manager = Manager;
  Hammer.Input = Input;
  Hammer.TouchAction = TouchAction;
  Hammer.TouchInput = TouchInput;
  Hammer.MouseInput = MouseInput;
  Hammer.PointerEventInput = PointerEventInput;
  Hammer.TouchMouseInput = TouchMouseInput;
  Hammer.SingleTouchInput = SingleTouchInput;
  Hammer.Recognizer = Recognizer;
  Hammer.AttrRecognizer = AttrRecognizer;
  Hammer.Tap = TapRecognizer;
  Hammer.Pan = PanRecognizer;
  Hammer.Swipe = SwipeRecognizer;
  Hammer.Pinch = PinchRecognizer;
  Hammer.Rotate = RotateRecognizer;
  Hammer.Press = PressRecognizer;
  Hammer.on = addEventListeners;
  Hammer.off = removeEventListeners;
  Hammer.each = each;
  Hammer.merge = merge;
  Hammer.extend = extend;
  Hammer.bindFn = bindFn;
  Hammer.assign = assign$1;
  Hammer.inherit = inherit;
  Hammer.bindFn = bindFn;
  Hammer.prefixed = prefixed;
  Hammer.toArray = toArray;
  Hammer.inArray = inArray;
  Hammer.uniqueArray = uniqueArray;
  Hammer.splitStr = splitStr;
  Hammer.boolOrFn = boolOrFn;
  Hammer.hasParent = hasParent;
  Hammer.addEventListeners = addEventListeners;
  Hammer.removeEventListeners = removeEventListeners;
  Hammer.defaults = assign$1({}, defaults, {
    preset: preset
  });
  return Hammer;
}();

//  style loader but by script tag, not by the loader.

Hammer.defaults;

function noop(..._args) { }

const logMessage = (message) => {
    if (Consts.Dev) {
        console.log('[HueHistory] ' + message);
    }
};
class HueHistoryStep {
    /**
     * Creates step new step in history.
     * @param onEnter Callback that will be called when this state is entered ()
     */
    constructor(onEnter, onExit, type, emitId = true) {
        this._type = type;
        this._id = type + (emitId
            ? '-' + (++HueHistoryStep.lastGeneratedId)
            : '');
        this._onEnter = onEnter;
        this._onExit = onExit;
    }
    get id() {
        return this._id;
    }
    get type() {
        return this._type;
    }
    get isEntered() {
        return this._isEntered;
    }
    enter() {
        if (!this._isEntered) {
            logMessage('Entering ' + this._id);
            this._onEnter();
            this._isEntered = true;
        }
    }
    exit() {
        if (this._isEntered) {
            logMessage('Exiting ' + this._id);
            this._onExit();
            this._isEntered = false;
        }
    }
    getHistoryState() {
        return {
            isHue: true,
            hueId: this.id
        };
    }
}
HueHistoryStep.lastGeneratedId = 0;
class ExternalHistoryStep extends HueHistoryStep {
    constructor(state) {
        super(noop, noop, ExternalHistoryStep.tryGetExternalId(state), false);
    }
    static tryGetExternalId(state) {
        // some ID could be in 'dialog' property
        return state.dialog || JSON.stringify(state);
    }
}
class HistoryStack {
    constructor() {
        /** index in _stack */
        this._pointer = -1;
        this._stack = [];
    }
    logState(message) {
        logMessage(message);
        logMessage('Stack: ' + this._stack.length);
        if (this._pointer < 0) {
            logMessage('[x]');
        }
        for (let i = 0; i < this._stack.length; i++) {
            const m = (i == this._pointer ? '[x] ' : '[ ] ') + this._stack[i].id;
            logMessage(m);
        }
    }
    /** Will set the pointer before first state */
    resetBeforeStart() {
        // get all items needed to exit
        const toExit = [];
        for (let i = this._pointer; i >= 0; i--) {
            toExit.push(this._stack[this._pointer]);
        }
        this._pointer = -1;
        return {
            toExit,
            toEnter: [],
            found: true
        };
    }
    /** Will add item after the current position */
    push(item) {
        // remove all items after the pointer
        while (this._stack.length > (this._pointer + 1)) {
            this._stack.pop();
            // not calling exit, they should be exited
        }
        // push new items
        this._stack.push(item);
        this._pointer = this._stack.length - 1;
        this.logState('Pushed ' + item.id);
    }
    /** Will check if types are compatible, if so, will replace current item with the given one. */
    replaceIfPossible(item) {
        // check if replace is possible
        if (item.type && this._pointer >= 0) {
            const oldItem = this._stack[this._pointer];
            if (oldItem.type == item.type) {
                this._stack[this._pointer] = item;
                this.logState('Replaced ' + oldItem.id + ' with ' + item.id);
                return {
                    replaced: true,
                    oldItem
                };
            }
        }
        logMessage('Replace not possible for ' + item.id);
        return {
            replaced: false,
            oldItem: undefined
        };
    }
    moveToExternal(state) {
        const externalId = ExternalHistoryStep.tryGetExternalId(state);
        const result = this.moveTo(externalId);
        // we will play a little game here with HA
        if (result.found) {
            // dialog was closed - we are going one step back
            if (state.open == false && this._pointer > 0) {
                this._pointer--;
                // AND we merge our state with the dialog close state - so we can use BOTH
                const step = this._stack[this._pointer];
                const stepState = step.getHistoryState();
                const mergedState = Object.assign(Object.assign({}, state), stepState);
                history.replaceState(mergedState, '');
                this.logState(`Merged step ${step.id} into ${externalId} dialog close.`);
            }
        }
        return result;
    }
    /** Will try to find given id */
    moveTo(id) {
        let found = false;
        const toExit = [];
        const toEnter = [];
        // first try to find in history
        for (let i = this._pointer; i >= 0; i--) {
            const item = this._stack[i];
            if (item.id == id) {
                // we found the item - set pointer and break cycle
                this._pointer = i;
                found = true;
                break;
            }
            else {
                // not found, but is on the path - should be exited
                toExit.push(item);
            }
        }
        if (!found) {
            // clear items
            toExit.length = 0;
        }
        else {
            this.logState('Moved to ' + id);
            return {
                found,
                toExit,
                toEnter
            };
        }
        // try to find in future
        for (let i = this._pointer + 1; i < this._stack.length; i++) {
            const item = this._stack[i];
            if (item.id == id) {
                // we found the item - set pointer and break cycle
                this._pointer = i;
                found = true;
            }
            // enter everything we go through
            toEnter.push(item);
            if (found) {
                break;
            }
        }
        if (!found) {
            // clear items
            toEnter.length = 0;
            logMessage('NOT moved to ' + id);
        }
        else {
            this.logState('Moved to ' + id);
        }
        return {
            found,
            toExit,
            toEnter
        };
    }
    /**
     * Returns number of steps back in history, to reach the given ID.
     */
    stepsBackBefore(id) {
        for (let i = this._pointer; i >= 0; i--) {
            const item = this._stack[i];
            if (item.id == id) {
                const result = this._pointer - i + 1; // +1 => we want to go one step before this item;
                this.logState(result + ' steps back needed to go before ' + id);
                return result;
            }
        }
        return null;
    }
    isEmpty() {
        return this._stack.length == 0;
    }
}
/**
 * Manager, that takes care of opening dialogs/views and getting through history and back.
 */
class HueHistoryStateManager {
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    constructor() {
        this._states = new HistoryStack();
        window.addEventListener('popstate', (ev) => this.resolvePopstate(ev));
    }
    resolvePopstate(ev) {
        const state = ev.state;
        let moveResult;
        if ((state === null || state === void 0 ? void 0 : state.isHue) == true) {
            // ensure that the current history state is the same as in event (another listener might have changed this)
            window.history.replaceState(state, '');
            // move to the current state
            moveResult = this._states.moveTo(state.hueId);
        }
        else if (state != null) {
            moveResult = this._states.moveToExternal(state);
            if (!moveResult.found) {
                // our stack is ruined, reset everything
                moveResult = this._states.resetBeforeStart();
            }
            else {
                // don't fire any functions
                moveResult.found = false;
            }
        }
        else {
            // we're at the very beginning
            moveResult = this._states.resetBeforeStart();
        }
        // execute the moveResult
        if (moveResult.found) {
            moveResult.toExit.forEach(i => i.exit());
            moveResult.toEnter.forEach(i => i.enter());
        }
    }
    /** If new history state is set, we'll add external step state, so we can keep count. */
    tryAddExternalStep() {
        // we don't need this, if we are empty
        if (this._states.isEmpty())
            return;
        // we are on our own, no need to add anything
        const currentState = history.state;
        if ((currentState === null || currentState === void 0 ? void 0 : currentState.isHue) == true)
            return;
        /*
         * HA manages dialog history very badly.
         * It replaces current state (thank you HA) with dialog-closed state <= we lose info about our state HERE
         * and pushes new dialog-open state on the stack
         */
        /*
         * Not only that. The HA will destroy the history, when going back and thus closing the dialog.
         * In that case HA will always add another 'dialog closed' state to the history.
         * So every close of the same dialog you must press the browser 'back' once more to get where you started.
         * eg. When you open/close (back + forward) the dialog 6 times.
         * You must then go 6x back, to be back on the page you came from.
         */
        // new external state was added, we'll create info about this
        const step = new ExternalHistoryStep(currentState);
        this._states.push(step);
    }
    addStep(newStep) {
        var _a;
        // first step - setup baseStep
        if (this._states.isEmpty()) {
            const baseItem = new HueHistoryStep(noop, noop, 'startStep');
            this._states.push(baseItem);
            // set current step to start
            window.history.replaceState(baseItem.getHistoryState(), '');
        }
        const historyState = newStep.getHistoryState();
        // try to replace
        const replaceResult = this._states.replaceIfPossible(newStep);
        if (replaceResult.replaced) { // state replaced
            // do replace in history
            window.history.replaceState(historyState, '');
            // save oldItem's position into newItem
            newStep.position = (_a = replaceResult.oldItem) === null || _a === void 0 ? void 0 : _a.position;
        }
        else { // replace not possible, classic push
            // push it to stack
            this._states.push(newStep);
            // add it to the history
            window.history.pushState(historyState, '');
            // save position
            newStep.position = window.history.length; // new state has been pushed, our state is latest
        }
        // call enter function
        newStep.enter();
    }
    /** Will go to the state in history, before given step. */
    goBefore(exitedStep) {
        const backSteps = this._states.stepsBackBefore(exitedStep.id);
        if (backSteps) {
            window.history.go(-backSteps);
        }
    }
}
/* Scenario:
 1. openDialog
    - replaceState to firstState
    - pushState - dialog
 2. openDetail
    - pushState - detail
 3. back
    - popState - find prev. state (openDialog)
 4. forward
    - popState - find next state (openDetail)
 5. back
    - popState - find prev. state (openDialog)
 6. back
    - popState - find prev. state (firstState)
 7. forward
    - popState - find next state (openDialog)
 8. forward
    - popState - find next state (openDetail)

 */

/**
 * Base for tile element in HueDialog
 */
class HueDialogTile extends IdLitElement {
    set hass(hass) {
        const oldHass = this._hass;
        this._hass = hass;
        this.updateHassDependentProps();
        // custom @property() implementation
        this.requestUpdate(nameof(this, 'hass'), oldHass);
    }
    constructor() {
        super('HueDialogTile');
    }
    updateHassDependentProps() { }
    setupListeners() {
        if (this.tile && !this._mc) {
            this._mc = new Manager(this.tile);
            this._mc.add(new PressRecognizer());
            this._mc.on('press', () => {
                const entityId = this.getEntityId();
                if (entityId) {
                    if (!this.actionHandler)
                        throw new Error('Cannot open more-info - ActionHandler not set in ' + this._id);
                    this.actionHandler.showMoreInfo(entityId);
                    HueHistoryStateManager.instance.tryAddExternalStep();
                }
            });
            this._mc.add(new TapRecognizer());
            this._mc.on('tap', (e) => {
                if (!this.tile.classList.contains('no-click')) {
                    this.tileClicked(e);
                }
            });
        }
    }
    destroyListeners() {
        if (this._mc) {
            this._mc.destroy();
            this._mc = undefined;
        }
    }
    disableClick() {
        if (this.tile) {
            this.tile.classList.add('no-click');
        }
    }
    enableClick() {
        if (this.tile) {
            this.tile.classList.remove('no-click');
        }
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.setupListeners();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setupListeners();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.destroyListeners();
    }
}
/**
 * Name of this Element
 */
HueDialogTile.ElementName = 'hue-dialog-tile' + Consts.ElementPostfix;
HueDialogTile.padding = 5; // px
HueDialogTile.height = 90; // px
HueDialogTile.width = 85; // px
HueDialogTile.titleHeight = 35; // px
HueDialogTile.clickTransition = 'transform .15s';
HueDialogTile.hueDialogStyle = i$5 `
    :host{
        -webkit-tap-highlight-color: transparent;
    }
    .hue-tile{
        background: ${r$7(Consts.TileOffColor)};
        width: ${HueDialogTile.width}px;
        height: ${HueDialogTile.height}px;
        padding: ${HueDialogTile.padding}px;
        border-radius: ${Consts.HueBorderRadius}px;
        box-shadow: ${r$7(Consts.HueShadow)};
        overflow:hidden;
        user-select: none;
        transition: ${r$7(HueDialogTile.clickTransition)};
    }
    .hue-tile:not(.no-click):active:hover{
        transform: scale(0.95);
    }
    .title {
        color:${r$7(Consts.LightColor)};
        font-size: 12px;
        line-height: 15px;
        font-weight:400;
        height:${HueDialogTile.titleHeight}px;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        transition: ${r$7(Consts.TransitionDefault)};
    }
    .title span {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    `;
__decorate([
    n$2()
], HueDialogTile.prototype, "cardTitle", void 0);
__decorate([
    n$2()
], HueDialogTile.prototype, "actionHandler", void 0);
__decorate([
    e$2('.hue-tile')
], HueDialogTile.prototype, "tile", void 0);

var HueDialogSceneTile_1;
/**
 * Represents Scene tile element in HueDialog.
 */
let HueDialogSceneTile = HueDialogSceneTile_1 = class HueDialogSceneTile extends HueDialogTile {
    constructor() {
        super(...arguments);
        this._effectQueue = new HueEffectQueue();
        this._sceneConfig = null;
        this._scene = null;
    }
    set sceneConfig(config) {
        const oldSceneConfig = this._sceneConfig;
        this._sceneConfig = config;
        this._scene = new SceneData(config);
        this.updateHassDependentProps();
        // custom @property() implementation
        this.requestUpdate(nameof(this, 'sceneConfig'), oldSceneConfig);
    }
    updateHassDependentProps() {
        if (this._hass && this._scene) {
            this._scene.hass = this._hass;
        }
    }
    tileClicked() {
        if (!this._scene)
            return;
        // vibrate a little
        le('light');
        // activate scene
        this._scene.activate();
        // stops the animation and clears the queue
        this._effectQueue.stopAndClear();
        // find tile and start animation
        const sceneElement = this.renderRoot.querySelector('.scene');
        if (sceneElement) {
            sceneElement.classList.remove('clicked', 'unclicked');
            const animationMs = (HueDialogSceneTile_1.animationSeconds * 1000);
            this._effectQueue.addEffect(0, () => sceneElement.classList.add('clicked'));
            this._effectQueue.addEffect(3000, () => sceneElement.classList.add('unclicked'));
            this._effectQueue.addEffect(animationMs, () => {
                sceneElement.classList.add('stop-color-animate');
                sceneElement.classList.remove('clicked');
            });
            this._effectQueue.addEffect(50, () => {
                sceneElement.classList.remove('stop-color-animate', 'unclicked');
            });
            this._effectQueue.start();
        }
        // fire event on change
        this.dispatchEvent(new CustomEvent('activated', {
            detail: {
                tileElement: this
            }
        }));
    }
    static get styles() {
        return [
            HueDialogTile.hueDialogStyle,
            i$5 `
    .scene {
        cursor: pointer;
    }
    .scene .icon-background {
        height: calc(100% - ${HueDialogTile.titleHeight}px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scene .icon-background .color {
        background: var(--hue-tile-accent-color, darkgoldenrod);
        height: ${HueDialogSceneTile_1.colorDimensions}px;
        width: ${HueDialogSceneTile_1.colorDimensions}px;
        border-radius: ${HueDialogSceneTile_1.colorDimensions / 2}px;
        box-shadow: ${r$7(Consts.HueShadow)}, inset rgba(0,0,0,0.1) -8px -8px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all ${HueDialogSceneTile_1.animationSeconds}s linear;
    }
    .scene .icon-background .color ha-icon {
        color: var(--hue-tile-fg-color, ${r$7(Consts.LightColor)});
        transform: scale(${HueDialogSceneTile_1.iconScale});
    }
    .scene.clicked .icon-background .color {
        height: ${HueDialogTile.height * 2}px;
        width: ${HueDialogTile.width * 2}px;
        border-radius: ${HueDialogTile.height}px;
        margin-left: -${HueDialogTile.padding * 2}px;
        margin-right: -${HueDialogTile.padding * 2}px;
    }
    .scene.clicked .icon-background .color ha-icon{
        animation: pop-icon 0.5s linear 1;
    }
    .scene.unclicked .icon-background .color {
        background: transparent;
    }
    .scene.stop-color-animate .icon-background .color {
        transition: none;
    }

    .scene .title {
        transition: all ${HueDialogSceneTile_1.animationSeconds / 2}s linear;
    }
    .scene.clicked .title {
        color:var(--hue-tile-fg-text-color, ${r$7(Consts.LightColor)});
    }

    @keyframes pop-icon{
        50% { transform: scale(${HueDialogSceneTile_1.iconScale * 2}); }
    }
    `
        ];
    }
    getEntityId() {
        var _a;
        return (_a = this._sceneConfig) === null || _a === void 0 ? void 0 : _a.entity;
    }
    updated(changedProps) {
        if (this._scene && changedProps.has('sceneConfig')) {
            const accentColor = this._scene.getColor();
            if (accentColor) {
                const fg = accentColor.getForeground(Consts.LightColor, Consts.DarkColor, 20); // offset:20 - lets make the text color light sooner
                const textFg = accentColor.getForeground(Consts.LightColor, new Color('black'), 20); // offset:20 - lets make the text color light sooner
                this.style.setProperty('--hue-tile-accent-color', accentColor.toString());
                this.style.setProperty('--hue-tile-fg-color', fg.toString());
                this.style.setProperty('--hue-tile-fg-text-color', textFg.toString());
            }
        }
    }
    render() {
        if (!this._scene)
            return T;
        const title = this._scene.getTitle(this.cardTitle);
        /*eslint-disable */
        return x `
        <div class='hue-tile scene' title='${title}'>
            <div class='icon-background'>
                <div class='color'>
                    <ha-icon icon="${this._scene.getIcon('mdi:palette')}"></ha-icon>
                </div>
            </div>
            <div class='title'>
                <span>${title}</span>
            </div>
        </div>
        `;
        /*eslint-enable */
    }
};
HueDialogSceneTile.ElementName = HueDialogTile.ElementName + '-scene';
HueDialogSceneTile.colorDimensions = HueDialogTile.height / 2; // px
HueDialogSceneTile.iconScale = (HueDialogSceneTile_1.colorDimensions * 0.75) / 24; // 24 = default icon size
HueDialogSceneTile.animationSeconds = 1.0;
__decorate([
    r$2()
], HueDialogSceneTile.prototype, "_scene", void 0);
HueDialogSceneTile = HueDialogSceneTile_1 = __decorate([
    t$2(HueDialogSceneTile.ElementName)
], HueDialogSceneTile);

class IconHelper {
    /** @returns automatic icon that should be used for given count of lights. */
    static getIcon(lightCount) {
        const hasHueIcons = ViewUtils.hasHueIcons();
        let lightIcon;
        if (lightCount <= 1) {
            lightIcon = hasHueIcons ? this.HueOneIcon : this.DefaultOneIcon;
        }
        else if (lightCount <= 2) {
            lightIcon = hasHueIcons ? this.HueTwoIcon : this.DefaultTwoIcon;
        }
        else if (lightCount <= 3) {
            lightIcon = hasHueIcons ? this.HueThreeIcon : this.DefaultMoreIcon;
        }
        else {
            lightIcon = hasHueIcons ? this.HueMoreIcon : this.DefaultMoreIcon;
        }
        return lightIcon;
    }
}
IconHelper.DefaultOneIcon = 'mdi:lightbulb';
IconHelper.DefaultTwoIcon = 'mdi:lightbulb-multiple';
IconHelper.DefaultMoreIcon = 'mdi:lightbulb-group';
IconHelper.HueOneIcon = 'hue:bulb-classic';
IconHelper.HueTwoIcon = 'hue:bulb-group-classic';
IconHelper.HueThreeIcon = 'hue:bulb-group-classic-3';
IconHelper.HueMoreIcon = 'hue:bulb-group-classic-4';

var HueDialogLightTile_1;
/**
 * Represents Scene tile element in HueDialog.
 */
let HueDialogLightTile = HueDialogLightTile_1 = class HueDialogLightTile extends HueDialogTile {
    constructor() {
        super(...arguments);
        this.lightContainer = null;
        this.defaultColor = null;
        this.isSelected = false;
        this.isUnselected = false;
    }
    static get styles() {
        return [
            HueDialogTile.hueDialogStyle,
            i$5 `
    .hue-tile.light{
        height: ${HueDialogTile.height + HueDialogLightTile_1.switchHeight}px;
        background:var(--hue-light-background, ${r$7(Consts.TileOffColor)});
        box-shadow:var(--hue-light-box-shadow), ${r$7(Consts.HueShadow)};
        transition: ${r$7(Consts.TransitionDefault)}, ${r$7(HueDialogTile.clickTransition)};
    }

    .hue-tile.light.unselected{
        opacity: 0.7;
    }

    .selector.active{
        border: ${HueDialogLightTile_1.selectorWidth}px solid var(--hue-light-background, ${r$7(Consts.WarmColor)});
        padding: ${HueDialogLightTile_1.selectorSpacing}px;
        border-radius: ${Consts.HueBorderRadius + HueDialogLightTile_1.selectorWidth + HueDialogLightTile_1.selectorSpacing}px;
        margin: -${HueDialogLightTile_1.selectorWidth + HueDialogLightTile_1.selectorSpacing}px
    }

    .hue-tile.light .tap-area{
        display: flex;
        flex-flow: column;
        height: ${HueDialogTile.height}px;

        cursor: pointer;
    }

    .title{
        color: var(--hue-light-text-color, ${r$7(Consts.LightColor)});
        padding-bottom: ${HueDialogLightTile_1.titlePadding}px;
        font-weight: 500;
    }

    .icon-slot{
        display: flex;
        flex-flow: column;
        text-align: center;
        height: ${HueDialogTile.height - HueDialogLightTile_1.titleHeight - HueDialogLightTile_1.titlePadding}px;
        /*height: calc(100% - ${HueDialogLightTile_1.titleHeight}px - ${HueDialogLightTile_1.titlePadding}px - ${HueDialogLightTile_1.switchHeight}px);*/
        justify-content: center;
    }
    .icon-slot ha-icon {
        color: var(--hue-light-text-color, ${r$7(Consts.LightColor)});
        transform: scale(${HueDialogSceneTile.iconScale});
    }

    .switch{
        display:flex;
        flex-flow:column;

        height: ${HueDialogLightTile_1.switchHeight + HueDialogTile.padding}px;
        justify-content: center;
        background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
        border-top: 1px solid rgba(80, 80, 80, 0.1);
        box-sizing: content-box;
        margin: 0 -${HueDialogTile.padding}px;
    }
    .switch ha-switch{
        justify-content:center;
    }

    `
        ];
    }
    updated(changedProps) {
        // register for changes on light
        if (changedProps.has('lightContainer')) {
            const oldValue = changedProps.get('lightContainer');
            if (oldValue) {
                oldValue.unregisterOnPropertyChanged(this._id);
            }
            if (this.lightContainer) {
                this.lightContainer.registerOnPropertyChanged(this._id, () => this.lightUpdated());
            }
        }
        if (this.lightContainer) {
            if (this.lightContainer.isOn()) {
                const defaultColorBg = this.defaultColor ? new Background([this.defaultColor]) : null;
                const bfg = ViewUtils.calculateBackAndForeground(this.lightContainer, null, true, defaultColorBg);
                if (bfg.background) {
                    this.style.setProperty('--hue-light-background', bfg.background.toString());
                }
                if (bfg.foreground) {
                    this.style.setProperty('--hue-light-text-color', bfg.foreground.toString());
                }
            }
            else {
                this.style.removeProperty('--hue-light-background');
                this.style.removeProperty('--hue-light-text-color');
            }
            const shadow = ViewUtils.calculateDefaultShadow(this, this.lightContainer, false);
            this.style.setProperty('--hue-light-box-shadow', shadow);
        }
        if (changedProps.has('isSelected')) {
            const selector = this.renderRoot.querySelector('.selector');
            selector.classList.toggle('active', !!this.isSelected);
            // fire event on change
            this.dispatchEvent(new CustomEvent('selected-change', {
                detail: {
                    isSelected: this.isSelected,
                    lightContainer: this.lightContainer,
                    tileElement: this
                }
            }));
        }
        if (changedProps.has('isUnselected')) {
            const tile = this.renderRoot.querySelector('.hue-tile');
            tile.classList.toggle('unselected', !!this.isUnselected);
        }
    }
    lightUpdated() {
        this.requestUpdate();
    }
    tileClicked() {
        // toggle select this light
        this.isSelected = !this.isSelected;
    }
    getEntityId() {
        var _a;
        return (_a = this.lightContainer) === null || _a === void 0 ? void 0 : _a.getEntityId();
    }
    render() {
        var _a;
        if (!this.lightContainer)
            return T;
        const title = this.lightContainer.getTitle().resolveToString(null);
        const icon = (_a = this.lightContainer.getIcon()) !== null && _a !== void 0 ? _a : IconHelper.getIcon(1);
        /*eslint-disable */
        return x `
        <div class='selector'>
            <div class='hue-tile light' title='${title}'>
                <div class='tap-area'>
                    <div class='icon-slot'>
                        <ha-icon icon="${icon}"></ha-icon>
                    </div>
                    <div class='title'>
                        <span>${title}</span>
                    </div>
                </div>
                <div class='switch' @mouseenter=${() => this.disableClick()} @mouseleave=${() => this.enableClick()}>
                    ${ViewUtils.createSwitch(this.lightContainer, noop)}
                </div>
            </div>
        </div>
        `;
        /*eslint-enable */
    }
};
/**
 * Name of this Element
 */
HueDialogLightTile.ElementName = HueDialogTile.ElementName + '-light';
HueDialogLightTile.titlePadding = 10;
HueDialogLightTile.switchHeight = 45;
HueDialogLightTile.selectorWidth = 2;
HueDialogLightTile.selectorSpacing = 2;
__decorate([
    n$2()
], HueDialogLightTile.prototype, "lightContainer", void 0);
__decorate([
    n$2()
], HueDialogLightTile.prototype, "defaultColor", void 0);
__decorate([
    n$2()
], HueDialogLightTile.prototype, "isSelected", void 0);
__decorate([
    n$2()
], HueDialogLightTile.prototype, "isUnselected", void 0);
HueDialogLightTile = HueDialogLightTile_1 = __decorate([
    t$2(HueDialogLightTile.ElementName)
], HueDialogLightTile);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const {D:t}=z,e=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,l=o=>null!=o?._$litType$?.h,s=()=>document.createComment(""),r=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(s(),l),c=e.insertBefore(s(),l);n=new t(i,c,o,o.options);}else {const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t);}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t;}}}return n},u={},m=(o,t=u)=>o._$AH=t,p=o=>o._$AH,j=o=>{o._$AR();};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=t=>l(t)?t._$litType$.h:t.strings,h=e$5(class extends i$2{constructor(t){super(t),this.tt=new WeakMap;}render(t){return [t]}update(s,[e$1]){const u=e(this.et)?d(this.et):null,h=e(e$1)?d(e$1):null;if(null!==u&&(null===h||u!==h)){const e=p(s).pop();let o=this.tt.get(u);if(void 0===o){const s=document.createDocumentFragment();o=j$1(T,s),o.setConnected(!1),this.tt.set(u,o);}m(o,[e]),r(o,void 0,e);}if(null!==h){if(null===u||u!==h){const t=this.tt.get(h);if(void 0!==t){const i=p(t).pop();j(s),r(s,void 0,i),m(s,[i]);}}this.et=e$1;}else this.et=void 0;return this.render(e$1)}});

class Point {
    constructor(x, y) {
        if (isNaN(x))
            x = 0;
        if (isNaN(y))
            y = 0;
        this.X = x;
        this.Y = y;
    }
    getYDiff(startPoint) {
        return this.Y - startPoint.Y;
    }
    getXDiff(startPoint) {
        return this.X - startPoint.X;
    }
    getDiff(startPoint) {
        return new Point(this.getXDiff(startPoint), this.getYDiff(startPoint));
    }
    toString() {
        return `[${this.X},${this.Y}]`;
    }
}
/** Simple type for coordinates from Mouse. */
class MousePoint extends Point {
    constructor(mouseEvent) {
        super(mouseEvent.clientX, mouseEvent.clientY);
    }
}
/** Simple type for coordinates from Touch. */
class TouchPoint extends Point {
    constructor(touch) {
        super(touch.clientX, touch.clientY);
    }
}

/**
 * Object helping with registering and unregistering mouse/touch drag events.
 */
class PointerDragHelper {
    constructor(element, onDragStart, onDragMove, onDragEnd) {
        this._currentMode = null;
        this._isMoving = false;
        this._isConnected = false;
        this._element = element;
        this._onDragStart = this.createDragStartDelegate(onDragStart);
        this._onDragMove = this.createDragMoveDelegate(onDragMove);
        this._onDragEnd = this.createDragEndDelegate(onDragEnd);
        this.connectListeners();
    }
    get isMoving() {
        return this._isMoving;
    }
    createDragStartDelegate(callback) {
        return (ev) => {
            // already in some mode
            if (this._currentMode) {
                return;
            }
            const isTouch = PointerDragHelper.isTouchEvent(ev);
            callback(ev, isTouch);
            this._currentMode = isTouch ? 'touch' : 'mouse';
            if (isTouch) {
                document.addEventListener('touchmove', this._onDragMove);
                document.addEventListener('touchend', this._onDragEnd);
                ev.preventDefault();
            }
            else {
                document.addEventListener('mousemove', this._onDragMove);
                document.addEventListener('mouseup', this._onDragEnd);
            }
        };
    }
    createDragMoveDelegate(callback) {
        return (ev) => {
            this._isMoving = true;
            callback(ev, PointerDragHelper.isTouchEvent(ev));
        };
    }
    createDragEndDelegate(callback) {
        return (ev) => {
            this._isMoving = false;
            // drag end is not needed
            if (callback) {
                callback(ev, PointerDragHelper.isTouchEvent(ev));
            }
            this.removeDocumentListeners();
            this._currentMode = null;
        };
    }
    /** Register element listeners */
    connectListeners() {
        if (!this._isConnected) {
            this._isConnected = true;
            this._element.addEventListener('mousedown', this._onDragStart);
            this._element.addEventListener('touchstart', this._onDragStart);
        }
    }
    /**
     * Removes document listeners.
     */
    removeDocumentListeners() {
        document.removeEventListener('touchmove', this._onDragMove);
        document.removeEventListener('touchend', this._onDragEnd);
        document.removeEventListener('mousemove', this._onDragMove);
        document.removeEventListener('mouseup', this._onDragEnd);
    }
    /**
     * Removes document and element listeners.
     * (Whole functionality will be turned off.)
     */
    removeAllListeners() {
        this.removeDocumentListeners();
        this._element.removeEventListener('mousedown', this._onDragStart);
        this._element.removeEventListener('touchstart', this._onDragStart);
        this._isConnected = false;
    }
    static isTouchEvent(ev) {
        return 'touches' in ev;
    }
}

var HueBrightnessRollup_1;
let HueBrightnessRollup = HueBrightnessRollup_1 = class HueBrightnessRollup extends s$1 {
    constructor() {
        super();
        this._deadZone = 5;
        this._wheelChange = 3;
        this._wheelDebounceInterval = 800; // ms
        this._wheelCloseInterval = 800; // ms
        this._value = 100;
        this._immediateValue = this._value;
        this.enabled = true;
        this.width = 100;
        this.height = 60;
        this.heightOpened = 200;
        this.iconSize = 24;
        // #region Mouse events
        this._isOpened = false;
        this._clickPosition = null;
        this._hasMouseMoved = false;
        this._onDocumentMouseUpDelegate = () => this.onDocumentMouseUp();
        this._onDocumentMouseMoveDelegate = (ev, isTouch) => this.onDocumentMouseMove(ev, isTouch);
        this._onDocumentWheelDelegate = (ev) => this.onDocumentWheel(ev);
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        this.setValue(newValue, false); // external value set, no event fired
    }
    /**
     * Will set @param newValue as actual value to @property value.
     * @param dispatchEvent When set, will dispatch 'change' event.
     */
    setValue(newValue, dispatchEvent) {
        newValue = HueBrightnessRollup_1.cleanValue(newValue);
        if (newValue != this._value) {
            const oldValue = this._value;
            this._value = newValue;
            // notify change
            this.requestUpdate(nameof(this, 'value'), oldValue);
            // fire change event
            if (dispatchEvent) {
                const event = new CustomEvent('change', {
                    detail: { oldValue, newValue }
                });
                this.dispatchEvent(event);
            }
            // change Immediate value
            this.immediateValue = newValue;
        }
    }
    get immediateValue() {
        return this._immediateValue;
    }
    set immediateValue(newValue) {
        newValue = HueBrightnessRollup_1.cleanValue(newValue);
        // if changed - change immediateValue
        if (newValue != this.immediateValue) {
            const oldValue = this.immediateValue;
            this._immediateValue = newValue;
            // notify changed property
            this.requestUpdate(nameof(this, 'immediateValue'), oldValue);
            // fire event
            const event = new CustomEvent('immediate-value-change', {
                detail: { oldValue, newValue }
            });
            this.dispatchEvent(event);
        }
    }
    /** Will clean value (set it to whole numbers and ensure range <1,100>) */
    static cleanValue(newValue) {
        newValue = Math.round(newValue);
        if (newValue < 1)
            newValue = 1;
        else if (newValue > 100)
            newValue = 100;
        return newValue;
    }
    /** Changes @property immediateValue by @param addition. Set @param useValueAsBase to true to add to @property value instead of @property immediateValue. */
    changeImmediateValue(addition, useValueAsBase) {
        // add addition to startValue;
        const newValue = (useValueAsBase ? this.value : this.immediateValue) + addition;
        this.immediateValue = newValue;
    }
    /** Will set actual @property immediateValue to @property value. */
    applyImmediateValue() {
        this.setValue(this.immediateValue, true); // Set value and dispatch change event
    }
    toggleBar(open, fast) {
        this._isOpened = open;
        this._wrapperElement.classList.toggle('fast', fast);
        this._wrapperElement.classList.toggle('open', this._isOpened);
        // remove document events when bar is closed (could be closed by timer)
        if (!open) {
            this.removeDocumentListeners();
        }
        // fire open or close event
        const eventType = this._isOpened ? 'open' : 'close';
        const event = new CustomEvent(eventType, {
            detail: { isOpen: this._isOpened }
        });
        this.dispatchEvent(event);
    }
    get _isMouseDown() {
        return this._clickPosition != null;
    }
    onBarMouseDown(ev, isTouch) {
        if (isTouch) {
            this._clickPosition = new TouchPoint(ev.changedTouches[0]);
        }
        else {
            this._clickPosition = new MousePoint(ev);
        }
        // register wheel document events
        if (!isTouch) {
            document.addEventListener('wheel', this._onDocumentWheelDelegate);
        }
    }
    removeDocumentListeners() {
        // remove document events
        if (this._dragHelper) {
            this._dragHelper.removeDocumentListeners();
        }
        document.removeEventListener('wheel', this._onDocumentWheelDelegate);
    }
    onDocumentMouseUp() {
        if (this._isMouseDown) {
            if (!this._hasMouseMoved) {
                this.toggleBar(!this._isOpened, false);
            }
            else {
                this.toggleBar(false, true);
            }
        }
        this._clickPosition = null;
        // reset mouse move
        if (this._hasMouseMoved) {
            this._hasMouseMoved = false;
            // when is closed - apply immediate value
            if (!this._isOpened) {
                this.applyImmediateValue();
            }
        }
    }
    onDocumentMouseMove(ev, isTouch) {
        if (this._isMouseDown) {
            let currentPos;
            if (isTouch) {
                currentPos = new TouchPoint(ev.changedTouches[0]);
            }
            else {
                currentPos = new MousePoint(ev);
            }
            let yDiff = currentPos.getYDiff(this._clickPosition);
            // when moved by minimal of 5 pxs
            if (!this._hasMouseMoved && Math.abs(yDiff) > this._deadZone) {
                if (!this._isOpened) {
                    this.toggleBar(true, true);
                }
                this._hasMouseMoved = true;
                // set new clickPoint after starting to move
                this._clickPosition = currentPos;
                // compute new diff
                yDiff = currentPos.getYDiff(this._clickPosition);
            }
            if (this._hasMouseMoved && this._isOpened) {
                // stop potential wheel close or set (and apply its value right now)
                this.clearWheelTimeouts(true);
                // get current change
                const percentChange = (-(yDiff / this.heightOpened)) * 100;
                this.changeImmediateValue(percentChange, true);
            }
        }
    }
    onDocumentWheel(ev) {
        if (this._isOpened) {
            const yDiff = ev.deltaY > 0 ? -this._wheelChange : this._wheelChange;
            this.changeImmediateValue(yDiff, false);
            // Clear previouse debounce timeouts
            this.clearWheelTimeouts();
            // Debounce the submit of wheel change
            this._wheelSubmitTimeoutId = setTimeout(() => {
                this.applyImmediateValue();
            }, this._wheelDebounceInterval);
            // Debounce of closing the control
            this._wheelCloseTimeoutId = setTimeout(() => {
                this.toggleBar(false, false);
            }, this._wheelCloseInterval);
        }
    }
    clearWheelTimeouts(applyPlannedValue = false) {
        if (this._wheelSubmitTimeoutId) {
            clearTimeout(this._wheelSubmitTimeoutId);
            this._wheelSubmitTimeoutId = null;
            // apply value if planned
            if (applyPlannedValue) {
                this.applyImmediateValue();
            }
        }
        if (this._wheelCloseTimeoutId) {
            clearTimeout(this._wheelCloseTimeoutId);
            this._wheelCloseTimeoutId = null;
        }
    }
    updated(changedProps, isFirst = false) {
        var _a;
        super.updated(changedProps);
        const instant = (a) => {
            this._wrapperElement.classList.add('instant');
            a();
            noop(this._wrapperElement.offsetHeight); // Trigger a reflow, flushing the CSS changes
            this._wrapperElement.classList.remove('instant');
        };
        if (changedProps.has('width')) {
            instant(() => {
                this.style.setProperty('--rollup-width', this.width + 'px');
            });
        }
        if (changedProps.has('height')) {
            instant(() => {
                this.style.setProperty('--rollup-height', this.height + 'px');
            });
        }
        if (changedProps.has('heightOpened')) {
            instant(() => {
                this.style.setProperty('--rollup-height-opened', this.heightOpened + 'px');
            });
        }
        if (changedProps.has('iconSize')) {
            const haIcon = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ha-icon');
            ViewUtils.setIconSize(haIcon, this.iconSize);
            this.style.setProperty('--rollup-icon-size', this.iconSize + 'px');
        }
        if (changedProps.has('enabled')) {
            this._wrapperElement.classList.toggle('disabled', !this.enabled);
            if (!this.enabled) {
                // disable control
                this.clearWheelTimeouts(false);
                this.disconnectListeners();
                this.toggleBar(false, true); // close bar
            }
            else {
                // enable back
                this.connectListeners();
            }
        }
        if (changedProps.has('immediateValue') || isFirst) {
            this._valueElement.style.height = this.immediateValue + '%';
        }
    }
    render() {
        const icon = ViewUtils.hasHueIcons() ? 'hue:scene-bright' : 'mdi:brightness-7';
        return x `
        <div id='wrapper'>
            <div id='desc'>
                <span>
                ${this.enabled ? x `${this.immediateValue} %` : T}
                </span>
            </div>
            <div id='bar'>
                <div id='value'></div>
                <div id='icon'>
                    <ha-icon icon="${icon}"></ha-icon>
                </div>
            </div>
        </div>`;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._wrapperElement = this.renderRoot.querySelector('#wrapper');
        const barElement = this._wrapperElement.querySelector('#bar');
        this._dragHelper = new PointerDragHelper(barElement, (ev, t) => this.onBarMouseDown(ev, t), this._onDocumentMouseMoveDelegate, this._onDocumentMouseUpDelegate);
        // get value element
        this._valueElement = barElement.querySelector('#value');
        // manually call update with isFirst flag
        this.updated(changedProps, true);
    }
    connectedCallback() {
        super.connectedCallback();
        // connect listeners back
        this.connectListeners();
    }
    connectListeners() {
        var _a;
        (_a = this._dragHelper) === null || _a === void 0 ? void 0 : _a.connectListeners();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // disconnect all listeners
        this.disconnectListeners();
    }
    disconnectListeners() {
        var _a;
        // remove document events
        this.removeDocumentListeners();
        (_a = this._dragHelper) === null || _a === void 0 ? void 0 : _a.removeAllListeners();
    }
};
/**
 * Name of this Element
 */
HueBrightnessRollup.ElementName = 'hue-brightness-rollup' + Consts.ElementPostfix;
// #endregion
HueBrightnessRollup.styles = i$5 `
    :host {
        user-select: none;
        -webkit-user-select: none;
    }

    #wrapper{
        color: white;
    }
    #bar{
        position: relative;
        transition: all 0.25s linear;

        width: var(--rollup-width);
        height: var(--rollup-height);

        cursor: pointer;
    }
    #bar, #desc span{
        transition: all 0.25s linear;
    }
    .fast #bar,
    .fast #desc span{
        transition: all 0.15s linear;
    }
    .instant #bar{
        transition: none;
    }
    .open #bar{
        height: var(--rollup-height-opened);
        /*
        margin-top: calc(var(--rollup-height) - var(--rollup-height-opened));
        */
    }
    #desc{
        text-align: center;
        margin: 4px;
    }
    #value{
        position:absolute;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }
    #icon{
        text-align: center;
        position: absolute;
        bottom: calc((var(--rollup-height) - var(--rollup-icon-size, 24px)) / 2);
        width: 100%;
    }

    /* Disabled */
    #wrapper.disabled{
        opacity: 0.6;
    }
    .disabled #bar{
        cursor: default;
    }
    .disabled #bar #value{
        height: 2px !important;
    }

    /* Hue styling: */
    #bar{
        box-shadow: ${r$7(Consts.HueShadow)};
        background: ${r$7(Consts.TileOffColor)};
        border-radius: calc(var(--rollup-height) / 2);
        overflow: hidden;
    }
    #value{
        background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%);
    }
    #desc span{
        border-radius: 10px;
        padding: 0 4px;
    }
    .open #desc span{
        box-shadow: ${r$7(Consts.HueShadow)};
        background: ${r$7(Consts.TileOffColor)};
    }
    `;
__decorate([
    n$2({ reflect: true })
], HueBrightnessRollup.prototype, "enabled", void 0);
__decorate([
    n$2({ reflect: true })
], HueBrightnessRollup.prototype, "width", void 0);
__decorate([
    n$2({ reflect: true })
], HueBrightnessRollup.prototype, "height", void 0);
__decorate([
    n$2()
], HueBrightnessRollup.prototype, "heightOpened", void 0);
__decorate([
    n$2()
], HueBrightnessRollup.prototype, "iconSize", void 0);
__decorate([
    n$2()
], HueBrightnessRollup.prototype, "value", null);
__decorate([
    n$2()
], HueBrightnessRollup.prototype, "immediateValue", null);
HueBrightnessRollup = HueBrightnessRollup_1 = __decorate([
    t$2(HueBrightnessRollup.ElementName)
], HueBrightnessRollup);

var HueColorTempPicker_1;
/** Uses LocalStorage to save and get already rendered wheels. */
class HueColorWheelCache {
    static saveWheel(mode, radius, tempMin, tempMax, canvas) {
        const key = this.createKey(mode, radius, tempMin, tempMax);
        const dataUrl = canvas.toDataURL(); // we're using dataUrl, because in raw format, the image exceeds localStorage size limit
        try {
            localStorage.setItem(key, dataUrl);
        }
        catch (e) {
            console.error(e);
        }
    }
    static tryGetWheel(mode, radius, tempMin, tempMax) {
        const key = this.createKey(mode, radius, tempMin, tempMax);
        try {
            const dataUrl = localStorage.getItem(key) || null;
            if (dataUrl) {
                return {
                    success: true,
                    dataUrl
                };
            }
        }
        catch (e) {
            console.error(e);
        }
        return {
            success: false,
            dataUrl: null
        };
    }
    static createKey(mode, radius, tempMin, tempMax) {
        let modeString = mode;
        if (mode == 'temp') {
            modeString += `(${tempMin}-${tempMax})`;
        }
        return `HueColorWheelCache_${modeString}${radius}x${radius}v${this.version}`;
    }
}
// version 2 - revised function to distribute kelvin values across the temp wheel
HueColorWheelCache.version = 2;
/**
 * Color and Temp picker.
 */
let HueColorTempPicker = HueColorTempPicker_1 = class HueColorTempPicker extends s$1 {
    constructor() {
        super();
        this.mode = 'color';
        // #region Rendering
        this._tempMin = 2000; // default hue min
        this._tempMax = 6535; // default hue max
        this._isRendered = false;
        this._markers = new Array();
        // if browser (or test engine) not support ResizeObserver
        if (typeof ResizeObserver == 'undefined') {
            this._ro = null;
        }
        else {
            this._ro = new ResizeObserver(() => this.onResize());
        }
    }
    /**
     * Will change min and max temp in kelvins.
     * Forcing the picker to re-render the temp wheel.
     */
    setTempRange(minKelvin, maxKelvin) {
        let changed = false;
        if (minKelvin != this._tempMin) {
            this._tempMin = minKelvin;
            changed = true;
        }
        if (maxKelvin != this._tempMax) {
            this._tempMax = maxKelvin;
            changed = true;
        }
        if (changed && this._isRendered && this.mode == 'temp') {
            this.drawWheel();
        }
    }
    onResize() {
        this._markers.forEach(m => m.refresh());
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.setupLayers();
        this.drawWheel();
        this._isRendered = true;
    }
    updated(_changedProperties) {
        if (_changedProperties.has('mode') && _changedProperties.get('mode')) {
            this.drawWheel();
        }
    }
    /**
     * Setup everything (get elements + set sizes).
     */
    setupLayers() {
        this._canvas = this.renderRoot.querySelector('#canvas');
        this._backgroundLayer = this.renderRoot.querySelector('#backgroundLayer');
        this._interactionLayer = this.renderRoot.querySelector('#interactionLayer');
        // synchronise width/height coordinates
        this._backgroundLayer.width = HueColorTempPicker_1.renderWidthHeight;
        this._backgroundLayer.height = HueColorTempPicker_1.renderWidthHeight;
    }
    /**
     * Will add new marker to rendering.
     * @returns Reference to the marker (so you can set icon, color, temp, etc. and also get events when something changes)
     */
    addMarker() {
        const m = new HueColorTempPickerMarker(this);
        this._markers.push(m);
        this.requestUpdate('_markers');
        return m;
    }
    /**
     * Draws temp or color wheel depending on the selected mode.
     */
    drawWheel() {
        const ctx = this._backgroundLayer.getContext('2d');
        if (ctx == null)
            throw Error('Cannot create convas context!');
        const radius = HueColorTempPicker_1.renderWidthHeight / 2;
        const cacheItem = HueColorWheelCache.tryGetWheel(this.mode, radius, this._tempMin, this._tempMax);
        if (cacheItem.success) {
            // we have dataUrl, we need to parse them through Image element, then render them to canvas
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
            };
            img.src = cacheItem.dataUrl;
        }
        else {
            const image = ctx.createImageData(2 * radius, 2 * radius);
            const data = image.data;
            for (let x = -radius; x < radius; x++) {
                for (let y = -radius; y < radius; y++) {
                    const colorAndValue = this.getColorAndValue(x, y, radius);
                    if (!colorAndValue)
                        continue;
                    const [red, green, blue] = colorAndValue.color;
                    const alpha = 255;
                    data[colorAndValue.index] = red;
                    data[colorAndValue.index + 1] = green;
                    data[colorAndValue.index + 2] = blue;
                    data[colorAndValue.index + 3] = alpha;
                }
            }
            ctx.putImageData(image, 0, 0);
            HueColorWheelCache.saveWheel(this.mode, radius, this._tempMin, this._tempMax, this._backgroundLayer);
        }
        console.log(`Drew ${this.mode} wheel`);
    }
    //#region Marker methods
    /**
     * @returns current rendered or expected radius.
     */
    getRadius() {
        var _a;
        let width = (_a = this._canvas) === null || _a === void 0 ? void 0 : _a.clientWidth;
        if (!width) { // not visible
            width = Math.min(HueColorTempPicker_1.maxWidth, HueColorTempPicker_1.renderWidthHeight);
        }
        return width / 2;
    }
    /**
     * @retuns the point on the canvas wich has been touched or clicked.
     * @param offset Use this offset if you want to adjust the result.
     */
    getCanvasMousePoint(ev, offset) {
        let point;
        if ('changedTouches' in ev) {
            point = new TouchPoint(ev.changedTouches[0]);
        }
        else {
            point = new MousePoint(ev);
        }
        let x = point.X - this._canvas.offsetLeft;
        let y = point.Y - this._canvas.offsetTop;
        if (offset) {
            x -= offset.X;
            y -= offset.Y;
        }
        return new Point(x, y);
    }
    //#endregion
    /**
     * Gets color and value of coordinate point depending on selected mode.
     * @param x coordinate X [-radius, radius]
     * @param y coordinate Y [-radius, radius]
     * @param radius Radius of color wheel
     */
    getColorAndValue(x, y, radius) {
        if (this.mode == 'color') {
            return this.getColorAndHSV(x, y, radius);
        }
        else if (this.mode == 'temp') {
            return this.getTempAndKelvin(x, y, radius);
        }
        return null;
    }
    getColorAndHSV(x, y, radius) {
        const [r, phi] = HueColorTempPicker_1.utils.xy2polar(x, y);
        if (r - HueColorTempPicker_1.overRender > radius) {
            // skip all (x,y) coordinates that are outside of the circle
            return null;
        }
        // Figure out the starting index of this pixel in the image data array.
        const index = HueColorTempPicker_1.computeIndex(x, y, radius)[0];
        const deg = HueColorTempPicker_1.utils.rad2deg(phi);
        const hue = HueColorTempPicker_1.utils.getHue(deg);
        const saturation = HueColorTempPicker_1.utils.getSaturation(r, radius);
        const value = HueColorTempPicker_1.utils.getHSvalue(hue, r, radius);
        const color = Color.hsv2rgb(hue, saturation, value);
        return {
            index: index,
            color: color,
            hsv: [hue, saturation, value]
        };
    }
    getTempAndKelvin(x, y, radius) {
        const [r] = HueColorTempPicker_1.utils.xy2polar(x, y);
        if (r - HueColorTempPicker_1.overRender > radius) {
            // skip all (x,y) coordinates that are outside of the circle
            return null;
        }
        // Figure out the starting index of this pixel in the image data array.
        const [index, , adjustedY, rowLength] = HueColorTempPicker_1.computeIndex(x, y, radius);
        const n = adjustedY / rowLength;
        const kelvin = Math.round(HueColorTempPicker_1.utils.hueCurveScale(n, this._tempMin, this._tempMax));
        const color = Color.hueTempToRgb(kelvin);
        return {
            index: index,
            color: color,
            kelvin: kelvin
        };
    }
    static computeIndex(x, y, radius) {
        const rowLength = 2 * radius;
        const adjustedX = x + radius; // convert x from [-50, 50] to [0, 100] (the coordinates of the image data array)
        const adjustedY = y + radius; // convert y from [-50, 50] to [0, 100] (the coordinates of the image data array)
        const pixelWidth = 4; // each pixel requires 4 slots in the data array
        const index = (adjustedX + (adjustedY * rowLength)) * pixelWidth;
        return [index, adjustedX, adjustedY, rowLength];
    }
    /**
     * Gets coordinates (from center) of given kelvin temperature on temp wheel.
     * @param kelvin Color temperature
     * @param radius Radius of color wheel
     * @param currentCoordinates Actual coordinates on wheel. (May be used for setting the marker close to it.)
     */
    getCoordinatesAndTemp(kelvin, radius, currentCoordinates) {
        if (kelvin < this._tempMin)
            kelvin = this._tempMin;
        else if (kelvin > this._tempMax)
            kelvin = this._tempMax;
        const rowLength = 2 * radius;
        const n = HueColorTempPicker_1.utils.inverseHueCurveScale(kelvin, this._tempMin, this._tempMax);
        const adjustedY = n * rowLength;
        let y = adjustedY - radius;
        // clean y
        y = Math.round(y);
        // easiest X is in the middle (full range)
        let x = 0;
        if (currentCoordinates) {
            // currentCoordinates is passed, try to find valid X closest to given coords
            // get min and max possible X for given Y
            const maxX = Math.ceil(Math.sqrt(radius * radius - y * y));
            const minX = -maxX;
            // limit x in range [minX, maxX]
            x = currentCoordinates.X;
            if (x < minX)
                x = minX;
            else if (x > maxX)
                x = maxX;
        }
        const color = Color.hueTempToRgb(kelvin);
        return {
            position: new Point(x, y),
            color: color
        };
    }
    /**
     * Gets coordinates (from center) of given HSV color on color wheel.
     * @param hue Hue value of color
     * @param saturation Saturation value of color
     * @param radius Radius of color wheel
     */
    getCoordinatesAndColor(hue, saturation, radius) {
        const deg = HueColorTempPicker_1.utils.getDeg(hue);
        const phi = HueColorTempPicker_1.utils.deg2rad(deg);
        const r = HueColorTempPicker_1.utils.getR(saturation, radius);
        let [x, y] = HueColorTempPicker_1.utils.polar2xy(r, phi);
        // clean x and y values
        y = Math.round(y);
        x = Math.round(x);
        const value = HueColorTempPicker_1.utils.getHSvalue(hue, r, radius);
        const color = Color.hsv2rgb(hue, saturation, value);
        return {
            position: new Point(x, y),
            color: color
        };
    }
    render() {
        return x `
        <div id='canvas'>
            <svg id="interactionLayer">
                <defs>
                    <filter id="new-shadow">
                        <feDropShadow dx="0" dy="1.0" stdDeviation="2.0" flood-opacity="1"></feDropShadow>
                    </filter>
                </defs>
                ${this._markers.map(m => m.render())}
            </svg>
            <canvas id="backgroundLayer"></canvas>
        </div>`;
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this._ro) === null || _a === void 0 ? void 0 : _a.observe(this);
        this.onResize();
        this._markers.forEach(m => m.connectAllListeners());
    }
    disconnectedCallback() {
        var _a;
        super.disconnectedCallback();
        (_a = this._ro) === null || _a === void 0 ? void 0 : _a.unobserve(this);
        // remove document events
        this._markers.forEach(m => m.removeAllListeners());
    }
};
/**
 * Name of this Element
 */
HueColorTempPicker.ElementName = 'hue-color-temp-picker' + Consts.ElementPostfix;
HueColorTempPicker.overRender = 2;
HueColorTempPicker.maxWidth = 400;
HueColorTempPicker.renderWidthHeight = 600;
HueColorTempPicker.utils = {
    /**
     * Returns value in range from @param min to @param max based on hand crafted curve, as similar tu og Hue, as possible.
     * @param t normalized value 0 - 1
     * @param min Minimal returned value
     * @param max Maximal returned value
     */
    hueCurveScale: function (t, min, max) {
        let addon = 0;
        const coef = (max / min) / 65;
        if (t <= 0.1) {
            addon = this.linearScale(t * 10, 0, coef);
        }
        else if (t <= 0.97) {
            addon = coef - this.linearScale((t - 0.1) / 0.9, 0, 2 * coef);
        }
        else {
            addon = -coef + this.linearScale((t - 0.97) / 0.03, 0, coef);
        }
        return (Math.pow(max / min, Math.pow(t, 1.55)) + addon) * min;
    },
    /**
     * Returns reverse value to fcion hueCurveScale - normalized value 0 - 1 with position of y on scale from @param min to @param max.
     * @param y Value in range from @param min to @param max based on hand crafted curve, as similar tu og Hue, as possible.
     * @param min Minimal given value
     * @param max Maximal given value
     */
    inverseHueCurveScale: function (targetValue, min, max) {
        const epsilon = 0.0001; // Tolerance for convergence
        let low = 0;
        let high = 1;
        let t = 0.5; // Initial guess for t
        // we are using binary search - this function is not used so often, the performance should be enough
        while (high - low > epsilon) {
            const midValue = this.hueCurveScale(t, min, max);
            if (midValue < targetValue) {
                low = t;
            }
            else {
                high = t;
            }
            t = (low + high) / 2;
        }
        return t;
    },
    /**
     * @param t normalized value 0 - 1
     * @param min Minimal returned value
     * @param max Maximal returned value
     */
    linearScale: function (t, min, max) {
        return (max - min) * t + min;
    },
    /**
     * From X and Y coordinates @returns [length from center, angle in RAD].
     */
    xy2polar: function (x, y) {
        const r = Math.sqrt(x * x + y * y);
        const phi = Math.atan2(y, x);
        return [r, phi];
    },
    polar2xy: function (r, phi) {
        const x = r * Math.cos(phi);
        const y = r * Math.sin(phi);
        return [x, y];
    },
    /**
     * @param rad in [-π, π] range
     * @returns degree in [0, 360] range
     */
    rad2deg: function (rad) {
        return ((rad + Math.PI) / (2 * Math.PI)) * 360;
    },
    deg2rad: function (deg) {
        return (deg / 360) * 2 * Math.PI - Math.PI;
    },
    getHue: function (deg) {
        // rotate to Hue position
        deg -= 70;
        if (deg < 0)
            deg += 360;
        return deg;
    },
    getDeg: function (hue) {
        hue += 70;
        if (hue > 360)
            hue -= 360;
        return hue;
    },
    getSaturation: function (r, radius) {
        const exp = 1.9;
        const saturation = Math.pow(r, exp) / Math.pow(radius, exp);
        return saturation > 1 ? 1 : saturation;
    },
    getR: function (saturation, radius) {
        const exp = 1.9;
        const r = Math.pow(saturation * Math.pow(radius, exp), 1 / exp);
        return r;
    },
    getHSvalue: function (hue, r, radius) {
        let value = 0.95;
        value = HueColorTempPicker_1.utils.fixHSValue(value, r, radius, hue, 60, true);
        value = HueColorTempPicker_1.utils.fixHSValue(value, r, radius, hue, 180, true);
        value = HueColorTempPicker_1.utils.fixHSValue(value, r, radius, hue, 240, false);
        value = HueColorTempPicker_1.utils.fixHSValue(value, r, radius, hue, 300, true);
        return value > 1 ? 1 : value;
    },
    fixHSValue: function (value, r, radius, hue, fixPoint, lower, maxOffset = 5) {
        const precondition = lower
            ? r > (radius / 2)
            : r < (3 * radius / 4) && r > (radius / 4);
        if (precondition && hue >= (fixPoint - maxOffset) && hue <= (fixPoint + maxOffset)) {
            let offset = fixPoint - hue;
            if (offset < 0) {
                offset = -offset;
            }
            offset = maxOffset - offset;
            if (lower) {
                value -= offset / 360;
            }
            else {
                value += offset / 360;
            }
        }
        return value;
    }
};
// #endregion
HueColorTempPicker.styles = i$5 `
    :host {
        user-select: none;
        -webkit-user-select: none;
    }

    #canvas {
        position: relative;
        width: 100%;
        max-width: ${HueColorTempPicker_1.maxWidth}px;
        margin: auto;
    }
    #canvas > * {
        display: block;
    }
    #interactionLayer {
        color: white;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: visible;
    }
    #backgroundLayer {
        width: 100%;

        border-radius: 50%;
        box-shadow: ${r$7(Consts.HueShadow)}
    }

    .marker {
        fill: currentColor;
        filter: url(#new-shadow);
    }
    .icon {
        transform: scale(1.2) translate(8px, 8px);
        transition: ${r$7(Consts.TransitionDefault)};
        fill: white;
    }
    .gm.boing {
        animation: boing 150ms ease-in-out;
    }
    .marker, .icon{
        cursor: pointer;
    }

    @keyframes boing {
        0% {
            scale:0.9;
        }
        50% {
            scale:1;
            translate: 0 -5px;
        }
        100% {
            scale:1;
        }
      }
    `;
__decorate([
    n$2()
], HueColorTempPicker.prototype, "mode", void 0);
HueColorTempPicker = HueColorTempPicker_1 = __decorate([
    t$2(HueColorTempPicker.ElementName)
], HueColorTempPicker);
class HueColorTempPickerMarker {
    constructor(parent) {
        this._color = new Color(0, 0, 0);
        this._temp = 0;
        this._mode = 'color';
        this._icon = HueColorTempPickerMarker.defaultIconName;
        this._isOff = false;
        this._parent = parent;
        [this._markerG, this._iconPath] = HueColorTempPickerMarker.drawMarker();
        this.position = new Point(this.getRadius() * 0.3, this.getRadius() * 0.6);
        this.makeDraggable();
    }
    getRadius() {
        return this._parent.getRadius();
    }
    dispatchChangeEvent(immediate) {
        const type = immediate ? 'immediate-value-change' : 'change';
        this._parent.dispatchEvent(new CustomEvent(type, {
            detail: {
                marker: this,
                mode: this.mode,
                newColor: this._color,
                newTemp: this.mode == 'temp' ? this.temp : null
            }
        }));
    }
    boing() {
        const normalClass = 'gm';
        const boingClass = 'gm boing';
        this._markerG.setAttribute('class', boingClass);
        setTimeout(() => {
            this._markerG.setAttribute('class', normalClass);
        }, 200); // animation takes 150ms, 
    }
    get position() {
        return this._position;
    }
    set position(pos) {
        var _a;
        // if is position from mousemove - turn on
        if ((_a = this._dragHelper) === null || _a === void 0 ? void 0 : _a.isMoving) {
            this._isOff = false;
        }
        const radius = this.getRadius();
        this._position = HueColorTempPickerMarker.limitCoordinates(pos, radius);
        // refresh position of marker
        this.renderPosition();
        // Get color and value from parent
        const centerPos = this.getPositionFromCenter(radius);
        const colorAndValue = this._parent.getColorAndValue(centerPos.X, centerPos.Y, radius);
        if (colorAndValue) {
            if ('hsv' in colorAndValue) {
                const [hue, saturation, value] = colorAndValue.hsv;
                this._color = new Color(hue, saturation, value, 1, 'hsv');
            }
            else {
                const [red, green, blue] = colorAndValue.color;
                this._color = new Color(red, green, blue);
            }
            this.renderColor();
            this.mode = this._parent.mode;
            // save temp, if given
            if ('kelvin' in colorAndValue) {
                this._temp = colorAndValue.kelvin;
            }
            this.dispatchChangeEvent(true);
        }
    }
    setPositionFromCenter(posCenter, radius) {
        const newPos = new Point(posCenter.X + radius, posCenter.Y + radius);
        this._position = HueColorTempPickerMarker.limitCoordinates(newPos, radius);
        this.renderPosition();
    }
    getPositionFromCenter(radius = null) {
        radius = radius !== null && radius !== void 0 ? radius : this.getRadius();
        return new Point(this._position.X - radius, this._position.Y - radius);
    }
    get mode() {
        return this._mode;
    }
    set mode(mod) {
        this._mode = mod;
        this.renderMode();
    }
    /**
     * Will refresh position and then render all values.
     */
    refresh() {
        if (this.mode == 'temp') {
            this.temp = this.temp;
        }
        else {
            this.color = this.color;
        }
    }
    /** Gets or sets whether light with this marker is currently off. */
    get isOff() {
        return this._isOff;
    }
    set isOff(value) {
        this._isOff = value;
        this.renderColor();
    }
    get color() {
        return this._color;
    }
    set color(col) {
        if (typeof col == 'string') {
            col = new Color(col);
        }
        // set and render color
        this._color = col;
        this.renderColor();
        // change mode to color
        this.mode = 'color';
        // get position of marker:
        const radius = this.getRadius();
        const coordsAndColor = this._parent.getCoordinatesAndColor(col.getHue(), col.getSaturation(), radius);
        // set and render position
        this.setPositionFromCenter(coordsAndColor.position, radius);
    }
    get temp() {
        return this._temp;
    }
    set temp(tmp) {
        this._temp = tmp;
        const wasColorMode = this.mode == 'color';
        // change mode to temp
        this.mode = 'temp';
        // get position (and color) of marker
        const radius = this.getRadius();
        const centerPos = this.getPositionFromCenter(radius);
        const coordsAndColor = this._parent.getCoordinatesAndTemp(this._temp, radius, wasColorMode ? undefined : centerPos);
        // set and render position 
        this.setPositionFromCenter(coordsAndColor.position, radius);
        // and color
        const [r, g, b] = coordsAndColor.color;
        this._color = new Color(r, g, b);
    }
    get icon() {
        return this._icon;
    }
    set icon(ico) {
        this._icon = ico;
        this.getIcon(ico).then(path => {
            if (!path) {
                this._icon = HueColorTempPickerMarker.defaultIconName;
                path = HueColorTempPickerMarker.defaultIcon;
            }
            // Apply icon
            this._iconPath.setAttribute('d', path);
        });
    }
    async getIcon(name) {
        if (!name)
            return null;
        const iconType = customElements.get('ha-icon');
        if (!iconType)
            return null;
        const haIcon = new iconType();
        haIcon.icon = name;
        /* eslint-disable no-underscore-dangle */
        await haIcon._loadIcon();
        return haIcon._path;
        /* eslint-enable no-underscore-dangle */
    }
    // #region Rendering
    /**
     * @returns offset of marker tip (point where color is taken).
     */
    getMarkerOffset() {
        const rect = this._markerG.getBBox();
        // init fallback
        if (rect.width == 0) {
            rect.width = 48;
            rect.height = 60;
        }
        const x = rect.width / 2;
        const y = rect.height;
        return new Point(x, y);
    }
    renderColor() {
        if (this._isOff) {
            this._markerG.style.color = 'rgb(0,0,0)';
            this._iconPath.style.fill = Consts.LightColor.toString();
        }
        else {
            this._markerG.style.color = this._color.toString();
            // for temp view I want only one change of foreground in the middle of the wheel
            const luminanceOffset = this.mode == 'temp' ? -25 : 0;
            const foreground = this._color.getForeground(Consts.LightColor, Consts.DarkColor, luminanceOffset);
            this._iconPath.style.fill = foreground.toString();
        }
    }
    renderMode() {
        this._markerG.style.opacity = this.mode == this._parent.mode ? '1.0' : '0.6';
    }
    renderPosition() {
        const offset = this.getMarkerOffset();
        const x = this.position.X - offset.X;
        const y = this.position.Y - offset.Y;
        this._markerG.style.transform = `translate(${x}px,${y}px)`;
        this._markerG.style.transformOrigin = `${this.position.X}px ${this.position.Y}px`;
    }
    /**
     * Will render current state to the returned graphics object.
     */
    render() {
        // render property dependencies
        this.renderColor();
        this.renderPosition();
        this.renderMode();
        // return marker object
        return this._markerG;
    }
    makeDraggable() {
        this._dragHelper = new PointerDragHelper(this._markerG, (ev) => this.onDragStart(ev), (ev) => this.onDrag(ev), () => this.onDragEnd());
    }
    onDragStart(ev) {
        const mousePoint = this._parent.getCanvasMousePoint(ev);
        this._dragOffset = mousePoint.getDiff(this.position);
    }
    onDrag(ev) {
        this.position = this._parent.getCanvasMousePoint(ev, this._dragOffset);
    }
    onDragEnd() {
        this.dispatchChangeEvent(false);
    }
    connectAllListeners() {
        var _a;
        (_a = this._dragHelper) === null || _a === void 0 ? void 0 : _a.connectListeners();
    }
    removeAllListeners() {
        var _a;
        (_a = this._dragHelper) === null || _a === void 0 ? void 0 : _a.removeAllListeners();
    }
    // #endregion
    /**
     * Draws and returns marker element.
     */
    static drawMarker() {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'gm');
        const m = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        m.setAttribute('class', 'marker');
        m.setAttribute('d', 'M 24,0 C 10.745166,0 0,10.575951 0,23.622046 0,39.566928 21,57.578739 22.05,58.346457 L 24,60 25.95,58.346457 C 27,57.578739 48,39.566928 48,23.622046 48,10.575951 37.254834,0 24,0 Z');
        // 48x60 px
        const i = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        i.setAttribute('class', 'icon');
        i.setAttribute('d', this.defaultIcon);
        g.appendChild(m);
        g.appendChild(i);
        return [g, i];
    }
    /**
     * Will check if the given point (coordinates from top left corner) is inside given radius.
     * @returns Given point or updated from inside the radius.
     */
    static limitCoordinates(pointFromTopLeft, radius) {
        if (radius <= 0)
            return pointFromTopLeft;
        // get coordinates from center
        const x1 = pointFromTopLeft.X - radius;
        const y1 = pointFromTopLeft.Y - radius;
        const vect1 = Math.abs(Math.sqrt(x1 * x1 + y1 * y1));
        // it's outside - make it inside
        if (vect1 > radius) {
            const coef = radius / vect1;
            const x2 = x1 * coef + radius;
            const y2 = y1 * coef + radius;
            return new Point(x2, y2);
        }
        // it's inside
        return pointFromTopLeft;
    }
}
HueColorTempPickerMarker.defaultIconName = 'default';
HueColorTempPickerMarker.defaultIcon = 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z';

class ControlResources {
}
ControlResources.ModeColorIcon64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAECxJREFUeJzFW3usbUdZ/9as136cs27Va9BgUoSb8tDQq9SqtJreWKCINVCEmPoAQ1P+aEUSa4KaGq8hxBcaMQhCeBgKKSpFbZvekggEbVGk9JVoq1cvUbFGEulZ5+zX2mut8ZuZb2a+mb32uVd6ru7k1++bWXuvPb/f95vH2j1XwEV61RVk9XG4rH52cn39PPFr9Xemd9ffnf19fVU+q3+okPUPl7K+YSTrGxFvxPxm7PvZfFHflj1Z/1J6pj4t3lH/evLa+p3Ji+rfh+JijVMc9Q1rSI/XeXI9SHEfpPnfQVb8BRTj26Gc/giMd14Io90JjCuA8a7BiKD6RrsjKHcug2L6CvzML0JW/ilk2RcgE39ZfzD58foO+JajHu+RCVDDN52oRfW7kJdfhHz0SRhNrkXCFUyQ3GQHdLSkxzsReUS549sKJfWVO1MU5Gq858cgy79Yf0L8YX03vPioxv2MBKjhBWmdnLiqTi89gxV7Akm+FXYvuRR2j6UwPQawg5gSJljhqYVqU5/CmNraGcoJFsc8yipBUZ6NTroZivLR+tPpA/VfJy+v/wby/xcBanjJcRDlB5H4p7DCr9Ckd3Ggu5b4rqk6x3gLgsoT+XJ3EwXH9KU4ve6GQtxZPw7P+T8VoE6ufhmkxX1Qjn8aJtMJTHeMzV1UxKZIZIIRMZqGKCfmWjlVREy74Dlr5xPClEDtTMcCstENkGdn6rO4YH4ZkosqQA3Xj2tx3W/iAO9FklfALlZK41iI6hAXTHa91Z0Lqk0nuHWgOsQFlYn59Pm49nxcFuL9X/sqHLsoAtTw+hMginuxcr+Alc5hB79YYUqw7R2a5yoqN4yHYN2wY6CcoIF5wcDbOYHnzhU7IPNpKrPRm2SafvarX4OTRypADW94Flr+/VCOTmlLKwJjsvdkSqB+lY+nfgpojA1KRDE2NtdWp3Zhbc9ybfUxgeUZz01bpmOHPilPdkn6oX/fS779SASo4RYkP/ocErrGVXxnx1d8SnNeVXxnN8R0d9gFowGUDAW5oogcoR0wZQ5AZFOQhF7sQJsoTE6uk/SBJ3GLekYC1HDbCUjLO7HSl/lKR9AC2DZbDO2C6OzOQQ5w1mdt5wCyd7wQZlMWsfqZQS+mijh0CBVbGH/rGtI/ebhOXvJ1CVDD7WOc8++DYnSNs7u2/BiC9iD4NGD2t1AESzYl8tjy48jmhKBv5K0vlPXHSJ4AYyUAojzZgvjA52u45H/vADE6jZU6Zea2JW/n+cRjYy2w19l64NYCqvRoHM15thbkk2gdYGBiSJr7fWqqroj3uvITIm8xuryB9F2fqoe3yEEB6uR3XoZHz7e6QVuSOh+HhLY5YMScUMYOsHlMnvKg4qPQBQq68iOq/MhVnwhz8hpryH+yheTGCxKghveoE947cMXPYTTyFtZ53B4zi0ft8WTzemFhrU9tS1STHYV5yiJBpiWSL3HeW/IjtL1CSTFGmeB68KufqOGyQwWo4SMpkn8nDu6KYPAx2cOEiGGFKEbDyFnMI/LZyM13C0VeEZeJrb4haSvv8xjFCRTh9/6oRpW2OiDJvg+//MccqZIIloysq/SItVnO4e4x9n3FFsIBaY5yo/IysdXfqLQmy93ARcCpcC1OhVduF0CMbsfqT8z8HCA0BEeci8Lmu9sBeLVLgiVeErjdSwMnQmGIq6o78uVWGNK8rVBkDYjTgwLUcEbt+dfio6YfnMoVShULn5eUFyy6Prquwd8zMnleMAEwzwomQOGRGtK4FWv0CCmMCAodYB+Y6HPftmjxabl1uW6/+LdruGrTAaK8BQeZ6oHyCm/MWyKjhaB2ycRyZPl72fW88MhIiIA0EU+LIJcJkReGaO9IloEQmyiJuBMAp4K49TRti8JU//PH8cteE85PGlxAbKDyW2MRfdYKwCsfVTzbJG5cUEKit71CE7cwlc81qc6hiCvunGD7cDF8eQvmNwTjgKT8fvzSb3ODyQtvV96nkW/GLO6P85zdK2fEMU9zIkq5ILBcJjkSzYi4yTsdcxatKFaIjOUGLWEN2TeuILleC1DDExkK8BZcbNKN1dg5IZq72ZAY+QD5IkRhBWNI85A8F8GRzxl5n3eBAJuEbV+LsXUxs9Pgpltr2EEHFM/FVfdKvypbkpZo1M64M8pNkgEGRND3YpXPiq0iKPISbPUzV/mOOaAPKuyvt67invzaOwDwePyCBpLvEPglz8dVtgrmXJpvWjMdqFiWYcx8dEgJ6hrlQ+8RBJsnGUWTS0gD8gqqT+o83YougBIgJXFSyjXyNcDlKEDxPT1WQaqVFklJK4JbnGybiZBlw+SzAQz1W3EUBEfqckteOtIhcekcEaIl0h2RZoTV4kfIdFyBuFL0SfFdiniPJHsSweQohrJhaqD348AZrO3m80CVA9LMGelA5RX5hJO3VbUOSF001RUDFedVFppoGxFXaLQAyUnRJsnzWiGgQ/RovV4YSByIiQY9Xre5tqirVhoiZVHngpCGpDVx6lfXE2rjoE21RYB+C7oLQMuwDpCcEE2SXNqIBNYKqYr4RswVOi0MiZJYCAepCcQWjkg6CI+UiaLuYRGRtkL0LlrSqYtDZLuIcEg81RGPxMoBx8QqSSZKgBXCCaFESJUQHl1KwEF3JEhnReCOSA4hnojQEYeS94QlHtrCyidEmMdEVZTIJrzKmqwhnWisnAACUADABKBJPNYsrnFsrUKCX4LohYfUDlH9gIIAiqGA/wnASIr4moI+iWnILegZugG0BJ63kSANtY0I4MQwAljyQFDEgQQAg5YEaSlXUMQ7CGNPeQ9WEMfP/CdxDUYeNFEvArjYRwJsigCMOI1PkwVygufQOAESXXQFsaTExhgNAxelZTduI3QMPYMWxHNmLysCOPL8c/Ze/P42X0f5OhrzECcO0eA3rhAqug9Kupn0N12zvlb6L9aDkTRIaeAGLz0ktaUFkQ2Jh/AiSLy/R+siJy5ZtWUQvSBSY6VBAqykJx0IIT3WEVoibdGxyIVwgij0nrwVAuQQcW996wS/DnA3SIeQsHRELVlPWqLTLXnTFkvsW+Kdl0qAPoQWoCco8r0RQLXXHEqAnkToTd4ReurrZNjnAEPgIggmhmDrgAjmviGuiPVEuEeyMYwAC8wtlAP+VQtAWMkBEbgQEfn2EGgxOk/cCdAz8tKT7tnc74KKJ9T22+Hm4cifDcwZwK764CrPxViYvn0lwDlOLiYZt9vDiHdh9QN0m9XfWDMGnBCKsw1Dp8Q0OjEmbnew6wFOhXNqCnxpgYNTWCq0FAkrhZYioWFRozVxrdBGoP5OYlVwj4wdYkWIV/fOxSRwQUd7e+umwRD8k2BHvwGED0z2oSn/knLAQzFxTtaSbxjidkPEnQgRuh5tiSwVAtJ8IQVwhxlbLS9IuMeH70kiMVI6CqfuWOwfkrwYrX7YKlAAgH9AQrPzkY7JuuqyKg9Vv+uFJr4m8s4BclOITQfY6nMHxGKJSIQ4hsKwiF+ZP6zOAWfR/g8v8Fs5ljhZFmvKqW2x4n1KLNbPsW7xsROPjKtWGoHYGmLbbmuV9uRmYff08DRnr8fH3dZ9zj4Axb8B8N8F9C9H/4wOeFy8DaoGp8G7kah0JNth4pokizEanuMDhF4bkGXTSecSN02ibdSdN4JjbJwPYei6YELxJ0MvRA/5HVB9ZU//KowL4WeR7H8sqOox4RWr7mHk7WcMedyCsKyNnvsR4SFIdtzeIAdbsCmCd0P87O8fjVGAWkL5ccVdC/AbUP0nToN75yTAHEeysFizHLFkkUML1ygh8DFzbWy/avvhRXNg23UYeGILcSHvsU9/gkX/OwDa/zMA2b84AdQLDz3vVsQteRdXoQDbsFyp6gtEQi6RhnhrEG+h7rDFDl7u0KWf1jhJjiTKzwdBz/8mb/S5IHsPVI90gQDvheoxnAYPDongMCQG9WniDZHHyisHNHw3oW1SE42dIONnEU9+dQi5VeCCWDifr4G7Ij0nqwfut7yD/zuMR+HTWPFmhqRmVP2ZxdK0h7BYJRgFrR9SI94R7FnD5fFhi1ygjuNz3C/Vs8mSSBgAi/YaRNcSds3/+sN+AcI757/COQcCoPqfwXXgHktYY8UiE8Nibsk3lnxvdo8I9mzBD1pOhD6EcsKCCbB0AJdb0rwvFEy1RfB5rP6DuPfftVWAu6Ba4wB+Hqv/pCJ3sApFOFBY+Hy2TPCaMG5B8guNTfLupEkIjt4ReV15mWgsFAIBYsAh12LB0qfwBHgbVJ+cbxVAve6H6stYnV9G0p0j7QiHDjjA0R7gqJeNdNZ3B6MBF8TPGZb0IhJiJc3gV3KIIGwh7qfGkCvw5Pd2qD76hZjv4F+JIY+7sKof3l/4qluovv2lieraHMnPcCVbYHTb5pqdJNmJMgCSnrcGCz3vyRm9wRIfnOaQ6KmgXLAJCPLlwHusADj/75GQvm+I66AAD0Il1VTAKfDIPhqmJuI2qj4VZ3ZXUGcHQpwvWk/UEWYicMx7glQwU0BFJcTcERM6zjHOmRD+PRCLcA73/Zuhem97wQKo1+NQ7eFU+Bkk+YitvHYBJx9XOYImPFB9Ve05J07kFwxLSUIExAUjBhtkN10hzuK8vwmq33pqG89D/1b4LJ4W0Ak3IOGnaiS+R9hfmjOCwqzxua38jBC3Z62BdYJuWwF4jpj1VH3EjFwwizA/BCjWHh55Xy+r058+jON5/1r8K7I6hwP6wb0FPPL0zAigdgcLJYDOm6jPYk3tdYTWC6Lyg46hVwIYHCD5AyngAEkdOPKqLVwMr2kBzuIT3ymo3vbw+fhd0L8X2JPVWZwON6HtH91q99j2lLvIF79ueCq4dcBNCb8VmiiC9WAOgwsfzvn0zVDdel7yFyyAejWyeghPt9fgVvYRFELyiqt8xuLssMrTdDhoI1D1Zx1VXld/0wW++qbavPoo0D34tHeVrN50qO2/LgH0q6ue7jJ4A+7PP4VEz+4j2Rh1Y2DzfYv1FiD5/c7HujXQfV0C++iCfRRA/VXbPopQ45D3IaFochTgKVzwbsHV/jVQ/cTWBe+ZC6BeT1dS/lf1URzjq3BanEG7t6rSbuFr/MI3tCDaxW7WssWPL4C9nwZ6HZAGc+ALn7DtDi3/V1j1V8vqlX8A1Y8ObnVHK4B9/Vv1j52AV+MDzOuQ4GMH1gUNi6z6NUFXvaGKWwcMQTmgN/GgM9V3MNPgHD7cvBG3ueugOrVxwrv4AqjXE9VKPlr9Wfe31eW4XV6NQtxZr+C/95T9ESruNSavaUro9trEPRVbg7r1+V5noKcDkt9DIWqcBmj3GteAP0fi13XVC58rq5N3QHXl/PwDvVgC8Nfnqgf6FG7Eh8ErUIyfQ1s/jgve+mDL/D9ovQsOWOX5dqgd0OMU65MnF11yeyOTKzqZvlZWz7n//AO6sNfR/uvx+yoJd1fn5B9X78LxvxTF+AF86HkzbnkfQEEeQkH2AtvHU0AvfLCP5B/DNeDDuMa8Be9xCh/iv1d+8yVvh284/k9wybO6oxzy/wBj4DViryyfzgAAAABJRU5ErkJggg==';
ControlResources.ModeTempIcon64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAFa0lEQVR4nO2bW2xUVRSGv7XPmZnSRtpU64XgFUNUiilKJZJi5VYMQgjRGhNDDPFRgwkajS8kPphAiNZn1MQYIzEYUaOAChTkGtDYWLXEBAwKCXJRILbQ6cz5fSjVaTsz7dxLx+9pZp+91/n3Ouvs+zEKiL68t4rYhNkE1oipAVk9plvBKpMXUC9wHKwLpw6MQ4Ri+2zhdxcKpdHybVCbm2sIRZcCrZgtACbkaDGKbA8Em3D+x7Z475l86Bwgbw7QlqZ7EKtBT2JWlS+7g2+iXmAznmuzR/YcyofJnB2grx66mz6tw2wJlv+ISn1jduH0cq6OyFqwNjfXEHGvYnoWw8tFRNYECMf7xPSSLdl9KhsTWTlAXy1YhIK3kN2cTfkCcBZnq6xl+8ZMC2bkALU3+/RFXkN6EcxlerOCY7xDbXiVzfy8Z/RFRon2t9Tyt20Ea8lOXZGQviVuy23xthOjyT4qB2j70htQbBvQkJO44vErTgtt/rajI2Uc0QH9lQ8OYNyeH21F4wwKmmzh1l/SZUrrAO1vraXn8g6unic/BPuVSPCwzfn8t5Q5Ul1Qe7NPvOYLjLH9zo/M91THm1I1jH7KYkHta7gx3uCNjhlc8DYIVhho6MWkEaCdTyyC+BZsDHZ1WWMrbe6md4elDk1Q+7IaiPyAMVYGOXnCLmBMt+YPf09MHf4KuMpXYbxVHoBqpDbg8cTEQRGgXSvuxqkTSjS2LwbOzbOm99oH/g6OAGfrMDd+Kw8g1gsaBxrEfyNAB1feQx8/FnVKWyqkFpvz7teQGAExtxpn47/y/awGvoYrEaD252uIXD4BBVrJGXMoINBUa9pwtD8CJvQtRX6ZVB4Ah2etwNorr4Dfyjga8oySVmCtqeOFKqI6Q86rt1cZkvDit/n0ebMxlVflAQwj7s3zMa+xDDq+5DgafTyvAZWpB4wGH/x6XJk6QNT7uNCtpdZRMoyJPs5PvlFZJvhY6kWhcsDHhUqtoaT874D/HVD2DjC/F7NIqYWUCh8XOo7Z1FILKQmi28cLd0GZOgC6fCzUgdmyUispER0+XsWhJDtGZYIO+1QE+4iGo2DhUsspOhbf2b8oevrgdoz5pdZTVEQXdbOm9U8ELLQJ58rLAQQfmVn/Sogu/lJHPPZ72YwHJBFoul077af/doYuHtuI2ZOl1FU0Au216jvmQOLOkDehDaM8HOCCNwZ+Dt4d7v2zHezhogsqLkcI19SbWRyGOkDdDxBzB7FxvEcolluo4pOBv8NPiEjvCVYUV1VxMNgBLDQzJaQNRtKNsSDoBLuuqOoKjl3yHfeZ2ZHE1GELgmZ2qjemVUIfFE9cUVgTGlJ5SHNOsLsv/jbwTEElFQuxtTLkHk0M/QFSH5SUKi9G47uBmQUVV3iOEfYeqDY7l+xi2tb+bHf3ZOdFvoGr7pwwAJLOhsxvnlhhP6fKM2J3d/6SpkQVOwDU5VVdwVG3ibl1VeHD6XKNqr8/fVlTY7G+bXaVnBiXOIuxeNIIlYcMPpg42aNb4rG+TzBm5Cav4BzzQ6Glk9KEfSIZjfhOSpW9F3s3gD2VnbYCY2wNK7xicnXyBi95kQyRZEfPR58OTG8C1ZmWLxCXTKy5sybyerKuLh1Zj/k7z/Xc7Jm1AY9layMvSDtc4J67q65i2CBnNOQ86en869JcxbVecH+utjLkiEmvTL+u8tNMn3oieZn1SbLvz11eEATBakRLob4zkCQz9nnOe6Ph2shnA1PaXMj7tHfvH+enhAi3SmqVNCMfU2uDLsRHRvDhrJuu+SkfOhNsF449J3tuCRTMcx6NEg2S6s1sYroykroNusxcB8QPe15o54PXVxzNJczT8Q+nqrqMIUr4CAAAAABJRU5ErkJggg==';

var HueColorTempModeSelector_1;
/**
 * Mode selector for Color and Temp picker.
 */
let HueColorTempModeSelector = HueColorTempModeSelector_1 = class HueColorTempModeSelector extends s$1 {
    constructor() {
        super();
        this.mode = 'color';
        this.showColor = true;
        this.showTemp = true;
        this.colorPicker = null;
    }
    /**
     * Will select possible mode based on current property settings.
     * Will never select 'brightness mode'.
     */
    selectPossibleMode() {
        if (this.showColor) {
            this.mode = 'color';
        }
        else if (this.showTemp) {
            this.mode = 'temp';
        }
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has('mode') && this.colorPicker) {
            if (this.mode == 'color' || this.mode == 'temp') {
                this.colorPicker.mode = this.mode;
            }
        }
        if (changedProps.has('mode') && this.mode == 'brightness') {
            const haIcon = this.renderRoot.querySelector('.wheel.brightness ha-icon');
            ViewUtils.setIconSize(haIcon, HueColorTempModeSelector_1.wheelHeight);
        }
    }
    render() {
        if (!this.showColor && !this.showTemp && this.mode != 'brightness')
            return T;
        return x `
        <div class='controls'>
        ${h(this.mode == 'brightness'
            ? this.createBrightnessWheel()
            : x `
                ${this.createWheel('color')}
                ${this.createWheel('temp')}
            `)}
        </div>`;
    }
    createBrightnessWheel() {
        if (this.mode != 'brightness')
            return T;
        const icon = ViewUtils.hasHueIcons() ? 'hue:scene-bright' : 'mdi:brightness-7';
        return x `
        <div class='wheel-wrapper active' @click=${() => this.mode = 'brightness'}>
            <span class='wheel brightness'>
                <ha-icon icon="${icon}"></ha-icon>
            </span>
        </div>`;
    }
    createWheel(mode) {
        if (mode == 'temp' && !this.showTemp)
            return T;
        if (mode == 'color' && !this.showColor)
            return T;
        const wrapperClass = {
            'wheel-wrapper': true,
            'active': this.mode == mode
        };
        return x `
        <div class='${e$4(wrapperClass)}' @click=${() => this.mode = mode}>
            <span class='wheel ${mode}'></span>
        </div>`;
    }
};
/**
 * Name of this Element
 */
HueColorTempModeSelector.ElementName = 'hue-color-temp-mode-selector' + Consts.ElementPostfix;
HueColorTempModeSelector.wheelHeight = 24; // same as default icon size
HueColorTempModeSelector.wheelSpace = 2;
HueColorTempModeSelector.wheelBorderWidth = 2;
HueColorTempModeSelector.wrapperHeight = HueColorTempModeSelector_1.wheelHeight + 2 * (HueColorTempModeSelector_1.wheelSpace + HueColorTempModeSelector_1.wheelBorderWidth);
HueColorTempModeSelector.totalPadding = 8;
HueColorTempModeSelector.wrapperGap = HueColorTempModeSelector_1.totalPadding;
HueColorTempModeSelector.totalHeight = HueColorTempModeSelector_1.wrapperHeight + 2 * HueColorTempModeSelector_1.totalPadding;
HueColorTempModeSelector.styles = i$5 `
    :host{
        user-select: none;
        -webkit-user-select: none;
        display:inline-block;
    }
    .controls{
        box-sizing: border-box;
        display: flex;
        height: ${HueColorTempModeSelector_1.totalHeight}px;
        padding: ${HueColorTempModeSelector_1.totalPadding}px;
        gap: ${HueColorTempModeSelector_1.wrapperGap}px;
        border-radius: ${HueColorTempModeSelector_1.totalHeight / 2}px;
        box-shadow: ${r$7(Consts.HueShadow)};
        background: ${r$7(Consts.TileOffColor)};
    }
    .controls .wheel-wrapper{
        box-sizing: border-box;
        width: ${HueColorTempModeSelector_1.wrapperHeight}px;
        height: ${HueColorTempModeSelector_1.wrapperHeight}px;
        padding: ${HueColorTempModeSelector_1.wheelSpace}px;
        border-radius: ${HueColorTempModeSelector_1.wrapperHeight / 2}px;
        border: ${HueColorTempModeSelector_1.wheelBorderWidth}px solid transparent;
        cursor: pointer;
    }
    .controls .wheel-wrapper:hover,
    .controls .wheel-wrapper:active{
        background-color: ${r$7(Consts.TileOffColor)};
    }
    .controls .wheel-wrapper.active{
        border-color: white;
    }
    .controls .wheel-wrapper .wheel{
        display:inline-block;
        width: ${HueColorTempModeSelector_1.wheelHeight}px;
        height: ${HueColorTempModeSelector_1.wheelHeight}px;
        border-radius: ${HueColorTempModeSelector_1.wheelHeight / 2}px;
        background-size: cover;
    }
    .wheel.color{
        background-image: url(${r$7(ControlResources.ModeColorIcon64)});
    }
    .wheel.temp{
        background-image: url(${r$7(ControlResources.ModeTempIcon64)});
    }
    .wheel.brightness{
        color: white;
    }
    `;
__decorate([
    n$2()
], HueColorTempModeSelector.prototype, "mode", void 0);
__decorate([
    n$2()
], HueColorTempModeSelector.prototype, "showColor", void 0);
__decorate([
    n$2()
], HueColorTempModeSelector.prototype, "showTemp", void 0);
__decorate([
    n$2()
], HueColorTempModeSelector.prototype, "colorPicker", void 0);
HueColorTempModeSelector = HueColorTempModeSelector_1 = __decorate([
    t$2(HueColorTempModeSelector.ElementName)
], HueColorTempModeSelector);

/*
 * Source: https://github.com/home-assistant/frontend/blob/dev/src/components/ha-control-switch.ts [2023-06-13]
 *
 * + removed unused parts
 * HA doesn't provide a way to load these lazy-loaded components. So we must make our own copy.
 */
let HueBigSwitch = class HueBigSwitch extends s$1 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.vertical = false;
        this.reversed = false;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.setupListeners();
        this.setAttribute('role', 'switch');
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has('checked')) {
            this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        }
    }
    _toggle() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        ne(this, 'change');
    }
    connectedCallback() {
        super.connectedCallback();
        this.setupListeners();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.destroyListeners();
    }
    setupListeners() {
        if (this.switch && !this._mc) {
            this._mc = new Manager(this.switch, {
                touchAction: this.vertical ? 'pan-x' : 'pan-y'
            });
            this._mc.add(new SwipeRecognizer({
                direction: this.vertical ? DIRECTION_VERTICAL : DIRECTION_HORIZONTAL
            }));
            this._mc.add(new TapRecognizer({ event: 'singletap' }));
            if (this.vertical) {
                this._mc.on('swipeup', () => {
                    if (this.disabled)
                        return;
                    this.checked = !!this.reversed;
                    ne(this, 'change');
                });
                this._mc.on('swipedown', () => {
                    if (this.disabled)
                        return;
                    this.checked = !this.reversed;
                    ne(this, 'change');
                });
            }
            else {
                this._mc.on('swiperight', () => {
                    if (this.disabled)
                        return;
                    this.checked = !this.reversed;
                    ne(this, 'change');
                });
                this._mc.on('swipeleft', () => {
                    if (this.disabled)
                        return;
                    this.checked = !!this.reversed;
                    ne(this, 'change');
                });
            }
            this._mc.on('singletap', () => {
                if (this.disabled)
                    return;
                this._toggle();
            });
            this.addEventListener('keydown', this._keydown);
        }
    }
    destroyListeners() {
        if (this._mc) {
            this._mc.destroy();
            this._mc = undefined;
        }
        this.removeEventListener('keydown', this._keydown);
    }
    _keydown(ev) {
        if (ev.key !== 'Enter' && ev.key !== ' ') {
            return;
        }
        ev.preventDefault();
        this._toggle();
    }
    render() {
        return x `
        <div id="switch" class="switch">
          <div class="background"></div>
          <div class="button" aria-hidden="true">
            ${this.checked
            ? x `<slot name="icon-on"></slot>`
            : x `<slot name="icon-off"></slot>`}
          </div>
        </div>
      `;
    }
    static get styles() {
        return i$5 `
        :host {
          display: block;
          --control-switch-on-color: var(--primary-color);
          --control-switch-off-color: var(--disabled-color);
          --control-switch-background-opacity: 0.2;
          --control-switch-thickness: 40px;
          --control-switch-border-radius: 12px;
          --control-switch-padding: 4px;
          --mdc-icon-size: 20px;
          height: var(--control-switch-thickness);
          width: 100%;
          box-sizing: border-box;
          user-select: none;
          cursor: pointer;
          border-radius: var(--control-switch-border-radius);
          outline: none;
          transition: box-shadow 180ms ease-in-out;
          -webkit-tap-highlight-color: transparent;
        }
        :host(:focus-visible) {
          box-shadow: 0 0 0 2px var(--control-switch-off-color);
        }
        :host([checked]:focus-visible) {
          box-shadow: 0 0 0 2px var(--control-switch-on-color);
        }
        .switch {
          box-sizing: border-box;
          position: relative;
          height: 100%;
          width: 100%;
          border-radius: var(--control-switch-border-radius);
          overflow: hidden;
          padding: var(--control-switch-padding);
          display: flex;
        }
        .switch .background {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--control-switch-off-color);
          transition: background-color 180ms ease-in-out;
          opacity: var(--control-switch-background-opacity);
        }
        .switch .button {
          width: 50%;
          height: 100%;
          background: lightgrey;
          border-radius: calc(
            var(--control-switch-border-radius) - var(--control-switch-padding)
          );
          transition: transform 180ms ease-in-out,
            background-color 180ms ease-in-out;
          background-color: var(--control-switch-off-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host([checked]) .switch .background {
          background-color: var(--control-switch-on-color);
        }
        :host([checked]) .switch .button {
          transform: translateX(100%);
          background-color: var(--control-switch-on-color);
        }
        :host([reversed]) .switch {
          flex-direction: row-reverse;
        }
        :host([reversed][checked]) .switch .button {
          transform: translateX(-100%);
        }
        :host([vertical]) {
          width: var(--control-switch-thickness);
          height: 100%;
        }
        :host([vertical][checked]) .switch .button {
          transform: translateY(100%);
        }
        :host([vertical]) .switch .button {
          width: 100%;
          height: 50%;
        }
        :host([vertical][reversed]) .switch {
          flex-direction: column-reverse;
        }
        :host([vertical][reversed][checked]) .switch .button {
          transform: translateY(-100%);
        }
        :host([disabled]) {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
    }
};
/**
 * Name of this Element
 */
HueBigSwitch.ElementName = 'hue-big-switch' + Consts.ElementPostfix;
__decorate([
    n$2({ type: Boolean, reflect: true })
], HueBigSwitch.prototype, "disabled", void 0);
__decorate([
    n$2({ type: Boolean })
], HueBigSwitch.prototype, "vertical", void 0);
__decorate([
    n$2({ type: Boolean })
], HueBigSwitch.prototype, "reversed", void 0);
__decorate([
    n$2({ type: Boolean, reflect: true })
], HueBigSwitch.prototype, "checked", void 0);
__decorate([
    e$2('#switch')
], HueBigSwitch.prototype, "switch", void 0);
HueBigSwitch = __decorate([
    t$2(HueBigSwitch.ElementName)
], HueBigSwitch);

var HueLightDetail_1;
let HueLightDetail = HueLightDetail_1 = class HueLightDetail extends IdLitElement {
    constructor() {
        super('HueLightDetail');
        this.lightContainer = null;
        this.hide(true);
    }
    /**
     * Called after new lightContainer is set.
     */
    onLightContainerChanged() {
        if (!this.lightContainer)
            return;
        // render will solve this
        if (this.lightContainer.features.isEmpty()) {
            // only adjust size
            this.updateBigSwitchSize();
            return;
        }
        const lightFeatures = this.lightContainer.features;
        this._colorMarker.icon = this.lightContainer.getIcon() || IconHelper.getIcon(1);
        this._modeSelector.showColor = lightFeatures.color;
        this._modeSelector.showTemp = lightFeatures.colorTemp;
        if (lightFeatures.colorTemp &&
            lightFeatures.colorTempMinKelvin &&
            lightFeatures.colorTempMaxKelvin) {
            // set new temp range
            this._colorPicker.setTempRange(lightFeatures.colorTempMinKelvin, lightFeatures.colorTempMaxKelvin);
        }
        // show full-sized brightness picker
        if (lightFeatures.isOnlyBrightness()) {
            this._modeSelector.mode = 'brightness';
            this.toggleFullSizedBrightness(true);
        }
        else {
            this._modeSelector.selectPossibleMode();
            this.toggleFullSizedBrightness(false);
        }
        this.onLightContainerState(true); // set mode, when changing light
    }
    toggleFullSizedBrightness(show) {
        if (show) {
            this._colorPicker.style.display = 'none';
        }
        this.updateBrightnessRollupSize(show);
        if (!show) {
            this._colorPicker.style.display = '';
        }
    }
    onLightContainerState(setMode = false) {
        if (!this.lightContainer)
            return;
        if (this.lightContainer.isColorModeColor()) {
            if (setMode) {
                this._modeSelector.mode = 'color';
            }
            if (this.lightContainer.color) {
                this._colorMarker.color = this.lightContainer.color;
            }
        }
        else if (this.lightContainer.isColorModeTemp()) {
            if (setMode) {
                this._modeSelector.mode = 'temp';
            }
            if (this.lightContainer.colorTemp) {
                this._colorMarker.temp = this.lightContainer.colorTemp;
            }
        }
        // show marker as off
        this._colorMarker.isOff = !this.lightContainer.isOn(); // unavailable state will be also off
        // enable or disable brightness rollup
        this._brightnessRollup.enabled = this.lightContainer.isOn();
        if (setMode) {
            this._colorMarker.boing();
        }
    }
    onColorChanged(ev) {
        if (!this.lightContainer)
            return;
        if (ev.detail.mode == 'temp') {
            this.lightContainer.colorTemp = ev.detail.newTemp;
        }
        else if (ev.detail.mode == 'color') {
            this.lightContainer.color = ev.detail.newColor;
        }
    }
    /** Will show this element (with animation). */
    show() {
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        this.style.removeProperty('display');
        setTimeout(() => this.classList.add('visible'));
        this.updateColorPickerSize();
        // to allow the color marker to overflow parent div
        if (this.parentElement) {
            this.parentElement.style.overflow = 'visible';
        }
        // fire show event
        this.dispatchEvent(new CustomEvent('show'));
    }
    /** Will hide this element (with animation). */
    hide(instant = false) {
        this.classList.remove('visible');
        if (instant) {
            this.style.display = 'none';
        }
        else {
            this._hideTimeout = setTimeout(() => {
                this._hideTimeout = null;
                this.style.display = 'none';
            }, 300);
        }
        // remove temporary overflow allowing
        if (this.parentElement) {
            this.parentElement.style.overflow = '';
        }
        // fire hide event
        this.dispatchEvent(new CustomEvent('hide'));
    }
    brightnessValueChanged(ev) {
        if (this.lightContainer) {
            this.lightContainer.brightnessValue = ev.detail.newValue;
        }
    }
    updated(changedProps) {
        // register for changes on light
        if (changedProps.has('lightContainer')) {
            const oldValue = changedProps.get('lightContainer');
            if (oldValue) {
                oldValue.unregisterOnPropertyChanged(this._id);
            }
            if (this.lightContainer) {
                this.lightContainer.registerOnPropertyChanged(this._id, () => {
                    this.onLightContainerState();
                    this.requestUpdate();
                });
                this.onLightContainerChanged();
            }
        }
    }
    render() {
        var _a;
        this._lastRenderedContainer = this.lightContainer || this._lastRenderedContainer;
        const onlySwitch = ((_a = this._lastRenderedContainer) === null || _a === void 0 ? void 0 : _a.features.isEmpty()) == true;
        return n$1 `
        <div>
            <ha-icon-button-prev class='back-button' @click=${() => this.hide()}></ha-icon-button-prev>
            ${h(onlySwitch ? this.createSwitchDetail() : this.createFullDetail())}
        </div>`;
    }
    onSwitch(ctrl, ev) {
        const target = ev.target;
        if (!target)
            return;
        const checked = target.checked;
        if (checked) {
            ctrl.turnOn();
        }
        else {
            ctrl.turnOff();
        }
    }
    createSwitchDetail() {
        const light = this._lastRenderedContainer;
        const colors = {
            '--control-switch-on-color': Consts.WarmColor,
            '--control-switch-off-color': Consts.OffColor
        };
        return n$1 `
            <${i$1(HueBigSwitch.ElementName)} class='light-switch'
                vertical
                reversed
                .checked=${light.isOn()}
                .showHandle=${!light.isUnavailable()}
                @change=${(ev) => this.onSwitch(light, ev)}
                style=${o(colors)}
                .disabled=${light.isUnavailable()}
            >
                <ha-icon icon="mdi:power-on" slot="icon-on"></ha-icon>
                <ha-icon icon="mdi:power-off" slot="icon-off"></ha-icon>
            </${i$1(HueBigSwitch.ElementName)}>
        `;
    }
    createFullDetail() {
        var _a, _b;
        const value = (_b = (_a = this._lastRenderedContainer) === null || _a === void 0 ? void 0 : _a.brightnessValue) !== null && _b !== void 0 ? _b : 100;
        return n$1 `
            <${i$1(HueColorTempPicker.ElementName)} class='color-picker'
                mode='color'
                @change=${(ev) => this.onColorChanged(ev)}
            >
            </${i$1(HueColorTempPicker.ElementName)}>
            <${i$1(HueColorTempModeSelector.ElementName)} class='mode-selector'>
            </${i$1(HueColorTempModeSelector.ElementName)}>
            <${i$1(HueBrightnessRollup.ElementName)} class='brightness-rollup'
                width='${HueLightDetail_1.rollupWidth}'
                height='${HueLightDetail_1.rollupHeight}'
                heightOpened='${HueLightDetail_1.rollupHeightOpen}'
                iconSize='${HueLightDetail_1.rollupIconSize}'
                .value=${value}
                @change=${(ev) => this.brightnessValueChanged(ev)}
            >
            </${i$1(HueBrightnessRollup.ElementName)}>
        `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => {
            if (!this._colorPicker) {
                this._colorPicker = this.renderRoot.querySelector('.color-picker');
                this._colorMarker = this._colorPicker.addMarker();
            }
            // get mode-selector and give it colorPicker
            if (!this._modeSelector) {
                this._modeSelector = this.renderRoot.querySelector('.mode-selector');
                this._modeSelector.colorPicker = this._colorPicker;
            }
            if (!this._brightnessRollup) {
                this._brightnessRollup = this.renderRoot.querySelector('.brightness-rollup');
            }
        });
    }
    updateColorPickerSize() {
        const colorPicker = this.renderRoot.querySelector('.color-picker');
        if (!colorPicker)
            return;
        const size = this.getPickerSize();
        if (!size) // not rendered
            return;
        colorPicker.style.width = size + 'px';
        colorPicker.style.height = size + 'px';
        // if there is more vertical space, move the color wheel to the center
        const verticalSpace = this.clientHeight - size - (HueLightDetail_1.colorPickerMarginTop + HueLightDetail_1.colorPickerMarginBottom);
        if (verticalSpace > 0) {
            const addMargin = verticalSpace / 2;
            colorPicker.style.marginTop = (HueLightDetail_1.colorPickerMarginTop + addMargin) + 'px';
            colorPicker.style.marginBottom = (HueLightDetail_1.colorPickerMarginBottom + addMargin) + 'px';
        }
        else {
            colorPicker.style.marginTop = '';
            colorPicker.style.marginBottom = '';
        }
    }
    updateBrightnessRollupSize(setFullSize) {
        const rollup = this.renderRoot.querySelector('.brightness-rollup');
        if (!rollup)
            return;
        const size = this.getPickerSize();
        if (!size) // not rendered
            return;
        rollup.classList.toggle('full-size', setFullSize);
        if (setFullSize) {
            let rollupSize = size / 3;
            // need to ensure, there's enough space for "100 %" label above rollup
            if (rollupSize < 56)
                rollupSize = 56;
            rollup.style.width = rollupSize + 'px';
            rollup.width = rollupSize;
            rollup.height = rollup.heightOpened = size;
            rollup.iconSize = HueLightDetail_1.rollupBigIconSize;
        }
        else {
            rollup.style.width = '';
            rollup.width = HueLightDetail_1.rollupWidth;
            rollup.height = HueLightDetail_1.rollupHeight;
            rollup.heightOpened = HueLightDetail_1.rollupHeightOpen;
            rollup.iconSize = HueLightDetail_1.rollupIconSize;
        }
    }
    updateBigSwitchSize() {
        const lightSwitch = this.renderRoot.querySelector('.light-switch');
        if (!lightSwitch)
            return;
        const size = this.getPickerSize();
        if (!size) // not rendered
            return;
        let width = size / 3;
        if (width < 60) {
            width = 60;
        }
        const widthPx = width + 'px';
        lightSwitch.style.width = widthPx;
        lightSwitch.style.setProperty('--control-switch-thickness', widthPx);
        lightSwitch.style.height = size + 'px';
    }
    getPickerSize() {
        const maxSize = Math.min(this.clientHeight, this.clientWidth);
        if (maxSize == 0) // not rendered
            return null;
        const size = maxSize - (HueLightDetail_1.colorPickerMarginTop + HueLightDetail_1.colorPickerMarginBottom);
        return size;
    }
};
/**
 * Name of this Element
 */
HueLightDetail.ElementName = 'hue-light-detail' + Consts.ElementPostfix;
HueLightDetail.colorPickerMarginTop = 40;
HueLightDetail.colorPickerMarginBottom = 20;
HueLightDetail.rollupHeight = HueColorTempModeSelector.totalHeight;
HueLightDetail.rollupWidth = HueColorTempModeSelector.totalHeight / 2 * 3;
HueLightDetail.rollupHeightOpen = 200;
HueLightDetail.rollupIconSize = 24;
HueLightDetail.rollupBigIconSize = 30;
HueLightDetail.selectorPadding = 24;
HueLightDetail.selectorBottom = 0;
HueLightDetail.styles = i$5 `
    :host {
        margin-top: -30px;
        opacity: 0;
        transition:${r$7(Consts.TransitionDefault)};
    }
    :host(.visible) {
        margin-top: 0;
        opacity: 1;
    }

    .back-button {
        color: white;
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .color-picker {
        display: block;
        margin: ${HueLightDetail_1.colorPickerMarginTop}px auto ${HueLightDetail_1.colorPickerMarginBottom}px auto;
    }
    .mode-selector {
        position: absolute;
        bottom: ${HueLightDetail_1.selectorBottom}px;
        left: ${HueLightDetail_1.selectorPadding}px;
    }
    .brightness-rollup {
        position: absolute;
        bottom: ${HueLightDetail_1.selectorBottom}px;
        right: ${HueLightDetail_1.selectorPadding}px;
    }
    .brightness-rollup.full-size {
        position:static;
        display:block;
        margin: ${HueLightDetail_1.colorPickerMarginTop - 25}px auto ${HueLightDetail_1.colorPickerMarginBottom}px auto;
    }
    .light-switch {
        margin: ${HueLightDetail_1.colorPickerMarginTop}px auto ${HueLightDetail_1.colorPickerMarginBottom}px auto;
    }
    `;
__decorate([
    n$2()
], HueLightDetail.prototype, "lightContainer", void 0);
HueLightDetail = HueLightDetail_1 = __decorate([
    t$2(HueLightDetail.ElementName)
], HueLightDetail);

var cs = {"card.description.allLightsOn":"Všechna světla jsou zapnutá","card.description.noLightsOn":"Všechna světla jsou vypnutá","card.description.oneLightOn":"1 světlo je zapnuté","card.description.someLightsAreOn":"Počet zapnutých světel: %s","dialog.lights":"Světla","dialog.scenes":"Moje scény","effects.candle":"Svíčka","effects.fireplace":"Ohniště","scenes.preset.bright":"Světlé","scenes.preset.concentrate":"Soustředění","scenes.preset.coolBright":"Jasné chladné","scenes.preset.dimmed":"Ztlumené","scenes.preset.doze":"Odpočívejte","scenes.preset.energize":"Povzbuzující","scenes.preset.naturalLight":"Přirozené světlo","scenes.preset.nightLight":"Noční světlo","scenes.preset.read":"Čtení","scenes.preset.relax":"Relaxační"};

var da = {"card.description.allLightsOn":"Alle lyskilder er tændt","card.description.noLightsOn":"Alle lyskilder er slukkede","card.description.oneLightOn":"1 lyskilde er tændt","card.description.someLightsAreOn":"%s lyskilder er tændt","dialog.lights":"Lyskilder","dialog.scenes":"Mine scener","effects.candle":"Stearinlys","effects.fireplace":"Pejs","scenes.preset.bright":"Klar","scenes.preset.concentrate":"Koncentrer dig","scenes.preset.coolBright":"Kølig klar","scenes.preset.dimmed":"Dæmpet","scenes.preset.doze":"Slap af","scenes.preset.energize":"Få ny energi","scenes.preset.naturalLight":"Naturligt lys","scenes.preset.nightLight":"Natlys","scenes.preset.read":"Læs","scenes.preset.relax":"Slap af"};

var de = {"card.description.allLightsOn":"Alle Lampen sind eingeschaltet","card.description.noLightsOn":"Alle Lampen sind ausgeschaltet","card.description.oneLightOn":"1 Licht ist eingeschaltet","card.description.someLightsAreOn":"%s Lampen sind eingeschaltet","dialog.lights":"Lampen","dialog.scenes":"Meine Szenen","effects.candle":"Kerze","effects.fireplace":"Kaminfeuer","scenes.preset.bright":"Hell","scenes.preset.concentrate":"Konzentrieren","scenes.preset.coolBright":"Kühles, helles Licht","scenes.preset.dimmed":"Gedimmt","scenes.preset.doze":"Ruhephase","scenes.preset.energize":"Energie tanken","scenes.preset.naturalLight":"Natürliches Licht","scenes.preset.nightLight":"Nachtlicht","scenes.preset.read":"Lesen","scenes.preset.relax":"Entspannen"};

var en = {"card.description.allLightsOn":"All lights are on","card.description.noLightsOn":"All lights are off","card.description.oneLightOn":"1 light is on","card.description.someLightsAreOn":"%s lights are on","dialog.lights":"Lights","dialog.scenes":"My scenes","effects.candle":"Candle","effects.fireplace":"Fireplace","scenes.preset.bright":"Bright","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Cool bright","scenes.preset.dimmed":"Dimmed","scenes.preset.doze":"Rest","scenes.preset.energize":"Energize","scenes.preset.naturalLight":"Natural light","scenes.preset.nightLight":"Nightlight","scenes.preset.read":"Read","scenes.preset.relax":"Relax"};

var en_gb = {"card.description.allLightsOn":"All lights are on","card.description.noLightsOn":"All lights are off","card.description.oneLightOn":"1 light is on","card.description.someLightsAreOn":"%s lights are on","dialog.lights":"Lights","dialog.scenes":"My scenes","effects.candle":"Candle","effects.fireplace":"Fireplace","scenes.preset.bright":"Bright","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Cool bright","scenes.preset.dimmed":"Dimmed","scenes.preset.doze":"Rest","scenes.preset.energize":"Energise","scenes.preset.naturalLight":"Natural light","scenes.preset.nightLight":"Nightlight","scenes.preset.read":"Read","scenes.preset.relax":"Relax"};

var es = {"card.description.allLightsOn":"Todas las luces encendidas","card.description.noLightsOn":"Todas las luces apagadas","card.description.oneLightOn":"1 luz encendida","card.description.someLightsAreOn":"Hay %s luces encendidas","dialog.lights":"Luces","dialog.scenes":"Mis escenas","effects.candle":"Vela","effects.fireplace":"Chimenea","scenes.preset.bright":"Brillante","scenes.preset.concentrate":"Concentración","scenes.preset.coolBright":"Brillante fría","scenes.preset.dimmed":"Atenuado","scenes.preset.doze":"Descanso","scenes.preset.energize":"Energía","scenes.preset.naturalLight":"Luz natural","scenes.preset.nightLight":"Luz nocturna","scenes.preset.read":"Lectura","scenes.preset.relax":"Relax"};

var fi = {"card.description.allLightsOn":"Kaikki valot ovat päällä","card.description.noLightsOn":"Kaikki valot ovat poissa päältä","card.description.oneLightOn":"1 valo on päällä","card.description.someLightsAreOn":"%s valot palavat","dialog.lights":"Valot","dialog.scenes":"Valaistusasetukseni","effects.candle":"Kynttilä","effects.fireplace":"Takka","scenes.preset.bright":"Bright","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Viileä kirkas","scenes.preset.dimmed":"Dimmed","scenes.preset.doze":"Lepohetki","scenes.preset.energize":"Energize","scenes.preset.naturalLight":"Luonnonvalo","scenes.preset.nightLight":"Yövalaistus","scenes.preset.read":"Read","scenes.preset.relax":"Relax"};

var fr = {"card.description.allLightsOn":"Toutes les lumières sont allumées","card.description.noLightsOn":"Toutes les lumières sont éteintes","card.description.oneLightOn":"1 lumière est allumée","card.description.someLightsAreOn":"%s lampes sont allumées","dialog.lights":"Lumières","dialog.scenes":"Mes scénarios","effects.candle":"Bougie","effects.fireplace":"Feu de cheminée","scenes.preset.bright":"Lumineux","scenes.preset.concentrate":"Concentration","scenes.preset.coolBright":"Lumière vive froide","scenes.preset.dimmed":"Atténué","scenes.preset.doze":"Repos","scenes.preset.energize":"Stimulation","scenes.preset.naturalLight":"Lumière naturelle","scenes.preset.nightLight":"Veilleuse","scenes.preset.read":"Lecture","scenes.preset.relax":"Détente"};

var it = {"card.description.allLightsOn":"Tutte le luci sono accese","card.description.noLightsOn":"Tutte le luci sono spente","card.description.oneLightOn":"1 luce è accesa","card.description.someLightsAreOn":"%s luci sono accese","dialog.lights":"Luci","dialog.scenes":"Le mie scene","effects.candle":"Candela","effects.fireplace":"Caminetto","scenes.preset.bright":"Luce brillante","scenes.preset.concentrate":"Concentrazione","scenes.preset.coolBright":"Fredda brillante","scenes.preset.dimmed":"Luce soffusa","scenes.preset.doze":"Riposo","scenes.preset.energize":"Energia","scenes.preset.naturalLight":"Luce naturale","scenes.preset.nightLight":"Luce notturna","scenes.preset.read":"Lettura","scenes.preset.relax":"Relax"};

var ja = {"card.description.allLightsOn":"すべてのライトがオンです","card.description.noLightsOn":"すべてのライトがオフです","card.description.oneLightOn":"1 個のライトがオンです","card.description.someLightsAreOn":"%s照明がオンです","dialog.lights":"ライト","dialog.scenes":"マイ シーン","effects.candle":"キャンドル","effects.fireplace":"暖炉","scenes.preset.bright":"明るめ","scenes.preset.concentrate":"集中する","scenes.preset.coolBright":"昼白色","scenes.preset.dimmed":"暗め","scenes.preset.doze":"残り","scenes.preset.energize":"やる気を出す","scenes.preset.naturalLight":"自然光","scenes.preset.nightLight":"夜間照明","scenes.preset.read":"読書をする","scenes.preset.relax":"くつろぐ"};

var ko = {"card.description.allLightsOn":"모든 조명 켜짐","card.description.noLightsOn":"모든 조명 꺼짐","card.description.oneLightOn":"1개 조명 켜짐","card.description.someLightsAreOn":"%s개의 조명이 켜져 있습니다","dialog.lights":"조명","dialog.scenes":"내 장면","effects.candle":"캔들","effects.fireplace":"벽난로","scenes.preset.bright":"밝게","scenes.preset.concentrate":"집중","scenes.preset.coolBright":"시원하고 밝은 느낌","scenes.preset.dimmed":"어둡게","scenes.preset.doze":"휴지","scenes.preset.energize":"활력","scenes.preset.naturalLight":"자연광","scenes.preset.nightLight":"야간 조명","scenes.preset.read":"독서","scenes.preset.relax":"휴식"};

var nb = {"card.description.allLightsOn":"Alle lysene er nå slått på","card.description.noLightsOn":"Alle lysene er nå slått av","card.description.oneLightOn":"1 lys er slått på","card.description.someLightsAreOn":"%s lysene er på","dialog.lights":"Lys","dialog.scenes":"Mine scener","effects.candle":"Vokslys","effects.fireplace":"Bål","scenes.preset.bright":"Lyst","scenes.preset.concentrate":"Konsentrer deg","scenes.preset.coolBright":"Kjølig lysstyrke","scenes.preset.dimmed":"Dimmet","scenes.preset.doze":"Hvile","scenes.preset.energize":"Lad batteriene","scenes.preset.naturalLight":"Naturlig lys","scenes.preset.nightLight":"Nattlys","scenes.preset.read":"Les","scenes.preset.relax":"Slapp av"};

var nl = {"card.description.allLightsOn":"Alle lampen staan aan","card.description.noLightsOn":"Alle lampen staan uit","card.description.oneLightOn":"1 lamp staat aan","card.description.someLightsAreOn":"%s lampen staan aan","dialog.lights":"Lampen","dialog.scenes":"Mijn scènes","effects.candle":"Kaars","effects.fireplace":"Open haard","scenes.preset.bright":"Helder","scenes.preset.concentrate":"Concentreren","scenes.preset.coolBright":"Koel helder","scenes.preset.dimmed":"Gedimd","scenes.preset.doze":"Rusten","scenes.preset.energize":"Energie","scenes.preset.naturalLight":"Natuurlijk licht","scenes.preset.nightLight":"Nachtlampje","scenes.preset.read":"Lezen","scenes.preset.relax":"Ontspannen"};

var pl = {"card.description.allLightsOn":"Wszystkie światła są włączone","card.description.noLightsOn":"Wszystkie światła są wyłączone","card.description.oneLightOn":"1 światło jest włączone","card.description.someLightsAreOn":"Zapalone światła %s","dialog.lights":"Światła","dialog.scenes":"Moje sceny","effects.candle":"Świeca","effects.fireplace":"Kominek","scenes.preset.bright":"Jasne","scenes.preset.concentrate":"Koncentracja","scenes.preset.coolBright":"Zimne światło","scenes.preset.dimmed":"Przyćmione","scenes.preset.doze":"Odpoczynek","scenes.preset.energize":"Energia","scenes.preset.naturalLight":"Światło naturalne","scenes.preset.nightLight":"Lampka nocna","scenes.preset.read":"Czytanie","scenes.preset.relax":"Relaks"};

var pt_br = {"card.description.allLightsOn":"Todas as luzes estão acesas","card.description.noLightsOn":"Todas as luzes estão apagadas","card.description.oneLightOn":"1 luz acesa","card.description.someLightsAreOn":"%s luzes estão acesas","dialog.lights":"Luzes","dialog.scenes":"Minhas cenas","effects.candle":"Vela","effects.fireplace":"Lareira","scenes.preset.bright":"Luz","scenes.preset.concentrate":"Concentrar","scenes.preset.coolBright":"Frio claro","scenes.preset.dimmed":"Esmaecido","scenes.preset.doze":"Repousar","scenes.preset.energize":"Energizar","scenes.preset.naturalLight":"Luz natural","scenes.preset.nightLight":"Luz noturna","scenes.preset.read":"Leitura","scenes.preset.relax":"Relaxar"};

var ru = {"card.description.allLightsOn":"Все лампы включены","card.description.noLightsOn":"Все лампы выключены","card.description.oneLightOn":"Включено ламп: 1","card.description.someLightsAreOn":"Включено ламп: %s","dialog.lights":"Лампы","dialog.scenes":"Мои варианты освещения","effects.candle":"Свеча","effects.fireplace":"Камин","scenes.preset.bright":"Яркий свет","scenes.preset.concentrate":"Концентрация","scenes.preset.coolBright":"Яркий холодный","scenes.preset.dimmed":"Приглушенный свет","scenes.preset.doze":"Отдых","scenes.preset.energize":"Заряд энергии","scenes.preset.naturalLight":"Дневной свет","scenes.preset.nightLight":"Ночное освещение","scenes.preset.read":"Чтение","scenes.preset.relax":"Отдых"};

var sk = {"card.description.allLightsOn":"Všetky svetlá zapnuté","card.description.noLightsOn":"Všetky svetlá vypnuté","card.description.oneLightOn":"1 svetlo je zapnuté","card.description.someLightsAreOn":"Počet zapnutých svetiel: %s","dialog.lights":"Svetlá","dialog.scenes":"Moje scény","effects.candle":"Sviečka","effects.fireplace":"Ohnisko","scenes.preset.bright":"Svetlé","scenes.preset.concentrate":"Sústredenie","scenes.preset.coolBright":"Jasné chladné","scenes.preset.dimmed":"Tlmené","scenes.preset.doze":"Odpočinok","scenes.preset.energize":"Povzbudzujúce","scenes.preset.naturalLight":"Prírodné svetlo","scenes.preset.nightLight":"Nočné svetlo","scenes.preset.read":"Čítanie","scenes.preset.relax":"Relaxačné"};

var sv = {"card.description.allLightsOn":"Alla lampor är tända","card.description.noLightsOn":"Alla lampor är släckta","card.description.oneLightOn":"En lampa är tänd","card.description.someLightsAreOn":"%s-lamporna är tända","dialog.lights":"Belysning","dialog.scenes":"Mina scener","effects.candle":"Kronljus","effects.fireplace":"Eldstad","scenes.preset.bright":"Klart ljus","scenes.preset.concentrate":"Concentrate","scenes.preset.coolBright":"Svalt ljus","scenes.preset.dimmed":"Dimrad","scenes.preset.doze":"Vila","scenes.preset.energize":"Få ny energi","scenes.preset.naturalLight":"Naturligt ljus","scenes.preset.nightLight":"Nattlampa","scenes.preset.read":"Läs","scenes.preset.relax":"Koppla av"};

var tr = {"card.description.allLightsOn":"Tüm ışıklar açık","card.description.noLightsOn":"Tüm ışıklar kapalı","card.description.oneLightOn":"1 ışık açık","card.description.someLightsAreOn":"%s ışıklar açık","dialog.lights":"Işıklar","dialog.scenes":"Görünümlerim","effects.candle":"Mum","effects.fireplace":"Şömine","scenes.preset.bright":"Parlak","scenes.preset.concentrate":"Odaklanın","scenes.preset.coolBright":"Soğuk parlak","scenes.preset.dimmed":"Karartılmış","scenes.preset.doze":"Dinlenme","scenes.preset.energize":"Canlanın","scenes.preset.naturalLight":"Doğal ışık","scenes.preset.nightLight":"Gece Işığı","scenes.preset.read":"Okuyun","scenes.preset.relax":"Dinlenin"};

var zh_hans = {"card.description.allLightsOn":"所有灯具均已亮起","card.description.noLightsOn":"所有灯具均已关闭","card.description.oneLightOn":"1 盏灯亮起","card.description.someLightsAreOn":"%s 盏灯亮起","dialog.lights":"灯","dialog.scenes":"我的场景","effects.candle":"烛光灯","effects.fireplace":"壁炉灯","scenes.preset.bright":"明亮","scenes.preset.concentrate":"集中精神","scenes.preset.coolBright":"明亮的冷光","scenes.preset.dimmed":"渐暗","scenes.preset.doze":"重置","scenes.preset.energize":"注入能量","scenes.preset.naturalLight":"自然光","scenes.preset.nightLight":"夜灯","scenes.preset.read":"静心阅读","scenes.preset.relax":"放松休息"};

var zh_hant = {"card.description.allLightsOn":"所有燈光已開啟","card.description.noLightsOn":"所有燈光已關閉","card.description.oneLightOn":"已開啟 1 盞燈","card.description.someLightsAreOn":"%s 燈光已就緒","dialog.lights":"燈光","dialog.scenes":"我的場景","effects.candle":"蠟燭","effects.fireplace":"壁爐","scenes.preset.bright":"明亮","scenes.preset.concentrate":"專注精神","scenes.preset.coolBright":"冷白光","scenes.preset.dimmed":"黯淡","scenes.preset.doze":"待用","scenes.preset.energize":"活力充沛","scenes.preset.naturalLight":"自然光","scenes.preset.nightLight":"夜燈","scenes.preset.read":"閱讀","scenes.preset.relax":"放鬆休息"};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages = {
    cs,
    da,
    de,
    en,
    en_gb,
    es,
    fi,
    fr,
    it,
    ja,
    ko,
    nb,
    nl,
    pl,
    pt_br,
    ru,
    sk,
    sv,
    tr,
    zh_hans,
    zh_hant
};
const defaultLang = 'en';
function localize(hassOrLanguage, resource, search = '', replace = '') {
    var _a, _b, _c;
    let lang;
    if (typeof hassOrLanguage == 'string') {
        lang = hassOrLanguage;
    }
    else {
        lang = hassOrLanguage.language || defaultLang;
    }
    lang = lang.replace('-', '_').toLowerCase();
    const langBase = lang.split('_')[0];
    let translated = ((_a = languages[lang]) !== null && _a !== void 0 ? _a : {})[resource] ||
        ((_b = languages[langBase]) !== null && _b !== void 0 ? _b : {})[resource] ||
        ((_c = languages[defaultLang]) !== null && _c !== void 0 ? _c : {})[resource] ||
        resource;
    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}

var HueDialog_1;
let HueDialog = HueDialog_1 = class HueDialog extends IdLitElement {
    constructor(config, lightController, actionHandler) {
        super('HueDialog');
        /*
        Doc:
        https://material-components.github.io/material-components-web-catalog/#/component/dialog
        */
        this._isRendered = false;
        this._backdropSet = false;
        this._lightDetailElement = null;
        this._config = config;
        this._ctrl = lightController;
        this._actionHandler = actionHandler;
    }
    //#region Hass changes
    onLightControllerChanged(propertyName) {
        // when LightController changed - update this
        if (propertyName == 'hass') {
            this.requestUpdate();
        }
    }
    onLightSelected(ev) {
        if (ev.detail.isSelected) {
            const show = () => {
                this._selectedLight = ev.detail.lightContainer;
                // scroll to selected light
                HueDialog_1.tileScrollTo(ev.detail.tileElement);
                // set light into detail
                if (this._lightDetailElement) {
                    this._lightDetailElement.lightContainer = this._selectedLight;
                    this._lightDetailElement.show();
                }
            };
            const hide = () => {
                var _a;
                this._selectedLight = null;
                // hide detail of selected light
                (_a = this._lightDetailElement) === null || _a === void 0 ? void 0 : _a.hide();
            };
            // show with history
            this._lightDetailHistoryStep = new HueHistoryStep(show, hide, HueLightDetail.ElementName);
            HueHistoryStateManager.instance.addStep(this._lightDetailHistoryStep);
        }
        else if (this._selectedLight == ev.detail.lightContainer) {
            this.hideLightDetail();
        }
    }
    hideLightDetail() {
        // hide with history
        if (this._lightDetailHistoryStep) {
            HueHistoryStateManager.instance.goBefore(this._lightDetailHistoryStep);
        }
    }
    toggleUnderDetailControls(show) {
        var _a, _b;
        const controls = this.renderRoot.querySelectorAll('.detail-hide');
        controls.forEach((el) => {
            el.classList.toggle('hue-hidden', show);
        });
        // scroll content down to lights
        const dialogShadowRoot = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ha-dialog')) === null || _b === void 0 ? void 0 : _b.shadowRoot;
        if (dialogShadowRoot) {
            const contentDiv = dialogShadowRoot.getElementById('content');
            if (contentDiv) {
                if (show) {
                    contentDiv.style.overflowY = 'hidden';
                    contentDiv.scrollBy({ top: contentDiv.scrollHeight, behavior: 'smooth' });
                }
                else {
                    contentDiv.style.overflowY = '';
                }
            }
        }
    }
    afterSceneActivated(ev) {
        // scroll to selected scene
        HueDialog_1.tileScrollTo(ev.detail.tileElement);
    }
    //#endregion
    //#region Tile-Scrollers
    static tileScrollTo(el) {
        if (!el)
            return;
        const tileScroller = el.closest('.tile-scroller');
        if (tileScroller == null)
            throw Error('Parent tile-scroller not found.');
        // get tile scroller bounds
        const tileScrollerStart = tileScroller.offsetLeft + tileScroller.scrollLeft;
        const tileScrollerEnd = tileScroller.clientWidth + tileScrollerStart;
        const minSpace = 10; // reasonable space before/after the element
        const elStart = el.offsetLeft - minSpace;
        const elEnd = el.offsetLeft + el.clientWidth + minSpace;
        // is reasonably visible?
        const isBefore = elStart < tileScrollerStart;
        const isAfter = elEnd > tileScrollerEnd;
        // if is inside or is outside on both sides (fail) - no scroll
        if (isBefore == isAfter)
            return;
        if (isBefore) {
            tileScroller.scrollBy({ left: elStart - tileScrollerStart, behavior: 'smooth' });
        }
        else {
            tileScroller.scrollBy({ left: elEnd - tileScrollerEnd, behavior: 'smooth' });
        }
    }
    /**
     * Insert and renders this dialog into <home-assistant>.
     */
    show() {
        if (this._isRendered)
            throw new Error('Already rendered!');
        // open with history
        this._historyStep = new HueHistoryStep(() => this.showInternal(), () => this.close(), HueDialog_1.ElementName);
        HueHistoryStateManager.instance.addStep(this._historyStep);
    }
    showInternal() {
        this._isRendered = true;
        // try to render ha-dialog as open
        const haDialog = this.getDialogElement();
        if (haDialog) {
            haDialog.open = true;
        }
        // append to DOM
        const haDom = document.getElementsByTagName('home-assistant');
        const haRoot = haDom.length ? haDom[0].shadowRoot : null;
        if (haRoot) {
            haRoot.appendChild(this);
        }
        else {
            document.body.appendChild(this);
        }
        // register update delegate
        this._ctrl.registerOnPropertyChanged(this._id, (p) => this.onLightControllerChanged(p));
    }
    close() {
        if (!this._isRendered)
            return;
        // try to find dialog
        const haDialog = this.getDialogElement();
        if (haDialog) {
            // if dialog closed - will call onDialogClose event
            haDialog.close();
        }
        else {
            // no haDialog found - use legacy way
            this.onDialogClose();
        }
    }
    getDialogElement() {
        if (!this._isRendered || !this.renderRoot)
            return null;
        return this.renderRoot.querySelector('ha-dialog');
    }
    /** When the dialog is closed. Removes itself from the DOM. */
    onDialogClose() {
        if (this._isRendered) {
            this.remove();
            // unregister update delegate
            this._ctrl.unregisterOnPropertyChanged(this._id);
            this._isRendered = false;
        }
        // go back in history
        if (this._historyStep) {
            HueHistoryStateManager.instance.goBefore(this._historyStep);
        }
    }
    static get styles() {
        return [
            HueDialog_1.haStyleDialog,
            i$5 `
    /* hiding controls when light detail is open */
    .detail-hide {
        transition:${r$7(Consts.TransitionDefault)};
    }

    .hue-hidden {
        opacity: 0;
        pointer-events: none;
    }

    /* icon centering */
    .mdc-icon-button i,
    .mdc-icon-button svg,
    .mdc-icon-button img,
    .mdc-icon-button ::slotted(*){
        height:auto;
    }

    /* same color header */
    .hue-heading {
        --hue-heading-text-color: var(--hue-text-color, ${r$7(Consts.ThemeDialogHeadingColorVar)});
        color:var(--hue-heading-text-color);
        background:var(--hue-background, ${r$7(Consts.ThemeCardBackgroundVar)} );
        box-shadow:var(--hue-box-shadow), 0px 5px 10px rgba(0,0,0,0.5);
        transition:${r$7(Consts.TransitionDefault)};

        border-bottom-left-radius: var(--ha-dialog-border-radius, 28px);
        border-bottom-right-radius: var(--ha-dialog-border-radius, 28px);
        padding-bottom: calc(var(--ha-dialog-border-radius, 28px) / 2);

        /* HA will show bottom border when scrolled down */
        border-bottom-width: 0;

        overflow:hidden;

        /* is above the backdrop */
        z-index:1;
    }
    ha-dialog-header {
        --mdc-theme-on-primary: var(--hue-heading-text-color);
        --mdc-theme-primary: transparent;
        flex-shrink: 0;
        display: block;
    }
    .hue-heading ha-switch {
        padding: 12px;
        margin: 4px 0;
    }
    .hue-heading .brightness-slider {
        width: 100%;
    }
    /* Disable the bottom border radius */
    /* in default styles: --ha-border-radius=0 in this case */
    /*
    @media all and (max-width: 450px), all and (max-height: 500px) {
        border-bottom-left-radius: none;
        border-bottom-right-radius: none;
        padding-bottom: none;
    }
    */

    /* titles */
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
    }
    .header .title{
        color: ${r$7(Consts.ThemeSecondaryTextColorVar)};
        font-family: var(--paper-font-title_-_font-family);
        -webkit-font-smoothing: var( --paper-font-title_-_-webkit-font-smoothing );
        font-size: var(--paper-font-subhead_-_font-size);
        font-weight: var(--paper-font-title_-_font-weight);
        letter-spacing: var(--paper-font-title_-_letter-spacing);
        line-height: var(--paper-font-title_-_line-height);
    }

    .content {
        outline: none;
    }

    /* tiles - scenes, lights */
    .tile-scroller {
        display: flex;
        flex-flow: column;
        /*gap: ${HueDialog_1.tileGap}px;*/
        max-width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0 ${HueDialog_1.haPadding}px;
        margin: 0 -${HueDialog_1.haPadding}px;
    }
    /* width */
    ::-webkit-scrollbar {
        height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
        /*background: #f1f1f1;*/
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    @media screen and (max-width: 768px){
        ::-webkit-scrollbar {
            -webkit-appearance: none;
            height: 0px;
            background: transparent;
        }
    }

    .tiles {
        display: flex;
        flex-flow: row;
        gap: ${HueDialog_1.tileGap}px;
        margin-bottom: ${HueDialog_1.tileGap}px;
    }
    .tile-scroller .tiles:first-child{
        margin-top: ${HueDialog_1.headerMargin}px;
    }
    .tiles::after {
        /* Flex loosing right padding, when overflowing */
        content: '';
        min-width: ${HueDialog_1.haPadding - HueDialog_1.tileGap}px;
    }

    /* Scene tiles */
    .tile-scroller.scene-tiles{
        min-height: 100px;
    }

    /* Light tiles */
    .tile-scroller.light-tiles{
        transition: ${r$7(Consts.TransitionDefault)};
        bottom: 100px;
    }

    @media all and (max-width: 450px), all and (max-height: 500px){
        .detail-active .tile-scroller.light-tiles{
            position: absolute;
            bottom: 30px;
            width: calc(100% - ${2 * this.haPadding}px);
        }
    }
    `
        ];
    }
    tryCreateBackdropAndLightDetail(throwError = false) {
        var _a, _b;
        // Allow gradient backdrop on dialog
        if (!this._backdropSet || !this._lightDetailElement) {
            // Trying to find surface element (it's not available during first load)
            const dialogShadowRoot = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ha-dialog')) === null || _b === void 0 ? void 0 : _b.shadowRoot;
            const surface = dialogShadowRoot && dialogShadowRoot.querySelector('.mdc-dialog__surface');
            // finally got surface element, let's create backdrop and other stuff
            if (surface) {
                if (!this._backdropSet) {
                    const backdropElement = document.createElement('div');
                    backdropElement.id = 'hue-backdrop';
                    backdropElement.style.position = 'absolute';
                    backdropElement.style.width = '100%';
                    backdropElement.style.height = '100%';
                    backdropElement.style.borderRadius = 'var(--ha-dialog-border-radius, 28px)'; // same as dialog
                    backdropElement.style.background = 'var(--hue-background)';
                    backdropElement.style.transition = Consts.TransitionDefault;
                    const mask = 'linear-gradient(rgba(255, 255, 255, .25) 0%, transparent 70%)';
                    backdropElement.style.mask = mask;
                    backdropElement.style.webkitMask = mask;
                    //backdropElement.style.zIndex = '0';
                    // if the browser doesn't support mask - don't render the backdrop element
                    if (backdropElement.style.mask || backdropElement.style.webkitMask) {
                        surface.prepend(backdropElement);
                    }
                    this._backdropSet = true;
                }
                if (!this._lightDetailElement) {
                    const detailElement = new HueLightDetail();
                    detailElement.style.position = 'absolute';
                    detailElement.style.width = '100%';
                    detailElement.style.height = 'calc(100% - 200px)';
                    detailElement.style.zIndex = '2'; // over header
                    // action for show and hide
                    detailElement.addEventListener('show', () => {
                        this.toggleUnderDetailControls(true);
                    });
                    detailElement.addEventListener('hide', () => {
                        this.toggleUnderDetailControls(false);
                        this.hideLightDetail();
                    });
                    surface.prepend(detailElement);
                    this._lightDetailElement = detailElement;
                }
            }
            else if (throwError) {
                throw new Error('Cannot create backdrop and lightDetail. Surface not found.');
            }
        }
    }
    // Can't be named 'updateStyles', because HA searches for that method and calls it instead of applying theme
    updateStylesInner(isFirst) {
        var _a, _b;
        const configBgColor = this._config.getHueScreenBgColor();
        // ## Content styles
        if (isFirst) {
            // apply theme
            ThemeHelper.applyTheme(this, this._ctrl.hass.themes, this._config.theme);
            // To help change themes on the fly
            ThemeHelper.setDialogThemeStyles(this, '--hue-screen-background', configBgColor.isThemeColor() || this._config.getOffColor().isThemeColor());
            let contentBg = null;
            let contentFg = null;
            if (!configBgColor.isThemeColor()) {
                contentBg = configBgColor;
                contentFg = contentBg.getForeground(Consts.DialogFgLightColor, Consts.DarkColor, +120); // for most colors use dark
                this.style.setProperty('--hue-screen-background', contentBg.toString());
                this.style.setProperty('--primary-text-color', contentFg.toString());
            }
        }
        // ## Heading styles
        const heading = this.renderRoot.querySelector('.hue-heading');
        if (!heading)
            throw new Error('Hue heading not found!');
        let offBackground;
        // if the user sets custom off color - use it
        if (this._config.wasOffColorSet) {
            const offColor = this._config.getOffColor();
            if (!offColor.isThemeColor()) {
                offBackground = new Background([offColor.getBaseColor()]);
            }
            else {
                offBackground = null;
            }
        }
        else {
            offBackground = new Background([new Color(Consts.DialogOffColor)]);
        }
        const bfg = ViewUtils.calculateBackAndForeground(this._ctrl, offBackground, true);
        const shadow = ViewUtils.calculateDefaultShadow(heading, this._ctrl, this._config.offShadow);
        if (this._config.hueBorders) {
            this.style.setProperty('--ha-dialog-border-radius', Consts.HueBorderRadius + 'px');
        }
        this.style.setProperty('--hue-background', (_b = (_a = bfg.background) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : Consts.ThemeCardBackgroundVar);
        this.style.setProperty('--hue-box-shadow', shadow);
        if (bfg.foreground != null) {
            this.style.setProperty('--hue-text-color', bfg.foreground.toString());
        }
        else {
            this.style.removeProperty('--hue-text-color');
        }
    }
    render() {
        this._isRendered = true;
        // inspiration: https://github.com/home-assistant/frontend/blob/dev/src/dialogs/more-info/ha-more-info-dialog.ts
        const cardTitle = this._config.getTitle(this._ctrl).resolveToString(this._ctrl.hass);
        const mdiClose = 'mdi:close';
        const onChangeCallback = () => {
            this.requestUpdate();
            this.updateStylesInner(false);
        };
        /*eslint-disable */
        return n$1 `
        <ha-dialog
          open
          @closed=${() => this.onDialogClose()}
          .heading=${cardTitle}
          hideActions
        >
          <ha-dialog-header slot="heading" class="hue-heading detail-hide">
            <ha-icon-button
              slot="navigationIcon"
              dialogAction="cancel"
            >
              <ha-icon
                icon=${mdiClose}
                style="height:auto"
              >
              </ha-icon>
            </ha-icon-button>
            <div
              slot="title"
              class="main-title"
              .title=${cardTitle}
            >
              ${cardTitle}
            </div>
            <div slot="actionItems">
              ${ViewUtils.createSwitch(this._ctrl, onChangeCallback)}
            </div>
            ${ViewUtils.createSlider(this._ctrl, this._config, onChangeCallback)}
          </ha-dialog-header>
          <div class="${e$4({
            'content': true,
            'detail-active': !!this._selectedLight
        })}" tabindex="-1" dialogInitialFocus>
            <div class='header detail-hide'>
                <div class='title'>${this._config.scenes.length ? localize(this._ctrl.hass, "dialog.scenes") : T}</div>
            </div>
            <div class='tile-scroller scene-tiles detail-hide'>
                <div class='tiles'>
                    ${(this._config.scenes.map((s, i) => i % 2 == 1 ? T :
            n$1 `<${i$1(HueDialogSceneTile.ElementName)}
                            .cardTitle=${cardTitle}
                            .sceneConfig=${s}
                            @activated=${(e) => this.afterSceneActivated(e)}
                            .hass=${this._ctrl.hass}
                            .actionHandler=${this._actionHandler}>
                        </${i$1(HueDialogSceneTile.ElementName)}>`))}
                </div>
                <div class='tiles'>
                    ${(this._config.scenes.map((s, i) => i % 2 == 0 ? T :
            n$1 `<${i$1(HueDialogSceneTile.ElementName)}
                            .cardTitle=${cardTitle}
                            .sceneConfig=${s}
                            @activated=${(e) => this.afterSceneActivated(e)}
                            .hass=${this._ctrl.hass}
                            .actionHandler=${this._actionHandler}>
                        </${i$1(HueDialogSceneTile.ElementName)}>`))}
                </div>
            </div>

            <div class='header detail-hide'>
                <div class='title'>${localize(this._ctrl.hass, "dialog.lights")}</div>
            </div>
            <div class='tile-scroller light-tiles'>
                <div class='tiles'>
                    ${(this._ctrl.getLights().map((l) => n$1 `<${i$1(HueDialogLightTile.ElementName)}
                            .cardTitle=${cardTitle}
                            .lightContainer=${l}
                            .isSelected=${this._selectedLight == l}
                            .isUnselected=${this._selectedLight && this._selectedLight != l}
                            @selected-change=${(e) => this.onLightSelected(e)}
                            .defaultColor=${this._config.getDefaultColor()}
                            .hass=${this._ctrl.hass}
                            .actionHandler=${this._actionHandler}>
                        </${i$1(HueDialogLightTile.ElementName)}>`))}
                </div>
            </div>
          </div>
        </ha-dialog>
        `;
        /*eslint-enable */
    }
    //#region updateStyles hooks
    updated(changedProps) {
        super.updated(changedProps);
        this.updateStylesInner(false);
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => {
            this.tryCreateBackdropAndLightDetail(true);
            this.updateStylesInner(true);
        });
    }
};
/**
 * Name of this Element
 */
HueDialog.ElementName = 'hue-dialog' + Consts.ElementPostfix;
//#endregion
/**
 * Default ha-dialog styles from HA.
 * See https://github.com/home-assistant/frontend/blob/dev/src/resources/styles.ts
 */
HueDialog.haStyleDialog = i$5 `
    /* mwc-dialog (ha-dialog) styles */
    ha-dialog {
      --mdc-dialog-min-width: 400px;
      --mdc-dialog-max-width: 600px;
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --justify-action-buttons: space-between;
    }
    ha-dialog .form {
      color: var(--primary-text-color);
    }
    a {
      color: var(--primary-color);
    }
    /* make dialog fullscreen on small screens */
    @media all and (max-width: 450px), all and (max-height: 500px) {
      ha-dialog {
        --mdc-dialog-min-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-max-width: calc(
          100vw - env(safe-area-inset-right) - env(safe-area-inset-left)
        );
        --mdc-dialog-min-height: 100%;
        --mdc-dialog-max-height: 100%;
        --vertical-align-dialog: flex-end;
        --ha-dialog-border-radius: 0px;
      }
    }
    mwc-button.warning {
      --mdc-theme-primary: var(--error-color);
    }
    .error {
      color: var(--error-color);
    }
  `;
HueDialog.headerMargin = 8;
HueDialog.tileGap = 10;
HueDialog.haPadding = 24;
__decorate([
    r$2()
], HueDialog.prototype, "_selectedLight", void 0);
HueDialog = HueDialog_1 = __decorate([
    t$2(HueDialog.ElementName)
], HueDialog);

class ActionHandler {
    constructor(config, ctrl, element) {
        this._config = config;
        this._ctrl = ctrl;
        this._owner = element;
    }
    showMoreInfo(entityId) {
        ne(this._owner, 'hass-more-info', { entityId: entityId });
    }
    handleCardClick() {
        const isOn = this._ctrl.isOn();
        let action = isOn ? this._config.onClickAction : this._config.offClickAction;
        const actionData = isOn ? this._config.onClickData : this._config.offClickData;
        // resolve the default action
        if (action == ClickAction.Default) {
            action = ClickAction.HueScreen;
        }
        // execute resolved or config action
        this.executeClickAction(action, actionData);
    }
    handleCardHold() {
        const isOn = this._ctrl.isOn();
        let action = isOn ? this._config.onHoldAction : this._config.offHoldAction;
        const actionData = isOn ? this._config.onHoldData : this._config.offHoldData;
        // resolve the default action
        if (action == ClickAction.Default) {
            action = ClickAction.MoreInfo;
        }
        // execute resolved or config action
        this.executeClickAction(action, actionData);
    }
    executeClickAction(action, actionData) {
        switch (action) {
            case ClickAction.NoAction:
                break;
            case ClickAction.TurnOn:
                this._ctrl.turnOn();
                break;
            case ClickAction.TurnOff:
                this._ctrl.turnOff();
                break;
            case ClickAction.MoreInfo:
                let entityId = actionData.getData('entity');
                // no entity defined in data
                if (!entityId) {
                    // if is on, get first onLight
                    if (this._ctrl.isOn()) {
                        entityId = this._ctrl.getLitLights()[0].getEntityId();
                    }
                    else {
                        entityId = this._config.getEntities()[0];
                    }
                }
                this.showMoreInfo(entityId);
                break;
            case ClickAction.Scene:
                const sceneId = actionData.getData('scene');
                if (!sceneId)
                    throw new Error('No scene for click defined.');
                // create scene object and activate
                const scene = new SceneData(sceneId);
                scene.hass = this._ctrl.hass;
                scene.activate();
                break;
            case ClickAction.HueScreen:
                const dialog = new HueDialog(this._config, this._ctrl, this);
                dialog.show();
                break;
            case ClickAction.Default:
                throw new Error('Cannot execute Default action');
            default:
                throw new Error(`Cannot executed unwknow action ${action}.`);
        }
    }
}

var HassLightColorMode;
(function (HassLightColorMode) {
    HassLightColorMode["unknown"] = "unknown";
    /**
     * The light can only be turned on or off.
     * Must be the only mode in supported_modes.
     */
    HassLightColorMode["onoff"] = "onoff";
    /**
     * Brightness of the light can be set.
     * Must be the only mode in supported_modes.
     */
    HassLightColorMode["brightness"] = "brightness";
    /**
     * Brightness and White color temperature can be set.
     * (If this is active mode, it means the light is in white temp mode as opposed to possible color mode.)
     */
    HassLightColorMode["color_temp"] = "color_temp";
    /**
     * Brightness and Color can be set.
     * Color can be found in `hs_color` as (hue, saturation) tuple and can be set using parameter of the same name.
     */
    HassLightColorMode["hs"] = "hs";
    /**
     * Brightness and Color can be set.
     * Color can be found in `xy_color` as (x, y) tuple and can be set using parameter of the same name.
     */
    HassLightColorMode["xy"] = "xy";
    /**
     * Brightness and Color can be set.
     * Color can be found in `rgb_color` as (r, g, b) tuple (brightness not normalized) and can be set using parameter of the same name.
     */
    HassLightColorMode["rgb"] = "rgb";
    /**
     * Brightness and Color can be set.
     * Color can be found in `rgbw_color` as (r, g, b, w) tuple (brightness not normalized) and can be set using parameter of the same name.
     */
    HassLightColorMode["rgbw"] = "rgbw";
    /**
     * Brightness and Color can be set.
     * Color can be found in `rgbww_color` as (r, g, b, cw, ww) tuple (brightness not normalized) and can be set using parameter of the same name.
     */
    HassLightColorMode["rgbww"] = "rgbww";
    /**
     * The light can be set to white mode, using the parameter `white` and setting brightness.
     * Must *NOT* be the only mode in supported_modes.
     */
    HassLightColorMode["white"] = "white";
})(HassLightColorMode || (HassLightColorMode = {}));

class VariableTemplatePart {
    constructor(templatePart) {
        this._attribute = null;
        // trim variable
        templatePart = templatePart.trim();
        const firstDot = templatePart.indexOf('.');
        const lastDot = templatePart.lastIndexOf('.');
        // if there are 2 different dots, take the string after last dot as attribute selector
        if (firstDot != lastDot) {
            this._textOrEntity = templatePart.substring(0, lastDot);
            this._attribute = templatePart.substring(lastDot + 1);
        }
        else {
            this._textOrEntity = templatePart;
        }
    }
    resolveToString(hass) {
        if (!hass) {
            return '';
        }
        else {
            const entity = hass.states[this._textOrEntity];
            if (!entity) {
                // error indication
                return 'MISS[' + this._textOrEntity + ']';
            }
            // from HA 2023.9 we can use new formatting functions
            const newHass = hass;
            // try resolve attribute
            if (this._attribute && entity.attributes) {
                const atr = entity.attributes[this._attribute];
                if (atr) {
                    if (newHass.formatEntityAttributeValue) {
                        return newHass.formatEntityAttributeValue(entity, this._attribute);
                    }
                    return atr.toString();
                }
                // if not found, fallback to state
            }
            if (newHass.formatEntityState) {
                return newHass.formatEntityState(entity);
            }
            // fallback to old localize function
            if (hass.localize != null) {
                return W(hass.localize, entity, hass.locale);
            }
            return entity.state;
        }
    }
}
/**
 * Static text implementing IHassTextTemplate
 */
class StaticTextTemplate {
    constructor(text) {
        this._text = text;
    }
    resolveToString(_hass = null) {
        return this._text;
    }
    toString() {
        return this.resolveToString();
    }
}
/**
 * HassTextTemplate that allows templated strings - like 'Text {{type.entity}} with attribute: {{ type.entity.attr }}!'
 */
class HassTextTemplate {
    /**
     * Creates Text template, that is dependend on hass states.
     */
    constructor(templateText) {
        this._templateParts = HassTextTemplate.parseTemplate(templateText);
    }
    /**
     * Will create string value, where variable parts of this template will be resolved.
     */
    resolveToString(hass) {
        // for most cards will be no variable
        if (this._templateParts.length == 1) {
            return this._templateParts[0].resolveToString(hass);
        }
        let result = '';
        this._templateParts.forEach(part => {
            result += part.resolveToString(hass);
        });
        return result;
    }
    static parseTemplate(templateText) {
        const result = new Array();
        let lastIndex = 0;
        let insideVariable = false;
        while (lastIndex < templateText.length) {
            let index;
            if (!insideVariable) {
                // searching for start of variable part
                index = templateText.indexOf('{{', lastIndex);
                if (index < 0)
                    break; // no beginning of variable found
                // create new text part
                const part = templateText.substring(lastIndex, index);
                result.push(new StaticTextTemplate(part));
                // change state to inside variable
                insideVariable = true;
            }
            else {
                // searching for end of variable part
                index = templateText.indexOf('}}', lastIndex);
                if (index < 0)
                    break; // no ending found
                // create new variable part
                const variablePart = templateText.substring(lastIndex, index);
                result.push(new VariableTemplatePart(variablePart));
                // change state to outside of variable
                insideVariable = false;
            }
            lastIndex = index + 2; // +2 - move index behind the template indicator
        }
        if (insideVariable) {
            //tell user, that last variable is not ended?
            lastIndex -= 2; // fix index of last variable start
        }
        // add remaining string to template collection
        if (lastIndex < templateText.length) {
            const lastPart = templateText.substring(lastIndex);
            result.push(new StaticTextTemplate(lastPart));
        }
        // return collection of template parts
        return result;
    }
}

class LightFeatures {
    constructor(lightEntity) {
        this.brightness = false;
        this.colorTemp = false;
        this.colorTempMinKelvin = null;
        this.colorTempMaxKelvin = null;
        this.color = false;
        // no modes
        if (lightEntity.attributes == null ||
            lightEntity.attributes.supported_color_modes == null ||
            lightEntity.attributes.supported_color_modes.length == 0) {
            return;
        }
        for (const mode of lightEntity.attributes.supported_color_modes) {
            switch (mode) {
                // only turning on and off is supported
                case HassLightColorMode.onoff:
                    //return; // should be the only mode (but could be incorrectly implemented)
                    break;
                // only brightness is supported
                case HassLightColorMode.brightness:
                    this.brightness = true;
                    //return; // should be the only mode (but could be incorrectly implemented)
                    break;
                case HassLightColorMode.color_temp:
                    this.brightness = true;
                    this.colorTemp = true;
                    break;
                case HassLightColorMode.hs:
                case HassLightColorMode.xy:
                case HassLightColorMode.rgb:
                case HassLightColorMode.rgbw:
                case HassLightColorMode.rgbww:
                    this.brightness = true;
                    this.color = true;
                    break;
            }
        }
        if (this.colorTemp) {
            this.colorTempMinKelvin = lightEntity.attributes.min_color_temp_kelvin || null;
            this.colorTempMaxKelvin = lightEntity.attributes.max_color_temp_kelvin || null;
        }
    }
    isEmpty() {
        return !this.color && !this.colorTemp && !this.brightness;
    }
    isOnlyBrightness() {
        return !this.color && !this.colorTemp && this.brightness;
    }
}
class LightFeaturesCombined {
    /**
     * Will create object, that implements ILightFeatures that is combined from multiple ILightFeatures.
     * @param features Callback, that returns array of features, so it always has current live data.
     */
    constructor(features) {
        this._features = features;
    }
    isEmpty() {
        return this._features().every(f => f.isEmpty());
    }
    isOnlyBrightness() {
        let isBrightness = false;
        const features = this._features();
        for (let i = 0; i < features.length; i++) {
            const f = features[i];
            if (f.isOnlyBrightness()) {
                isBrightness = true;
            }
            else if (!f.isEmpty()) {
                // not brightness and not empty
                return false;
            }
        }
        // return if at least one feature has only brightness (and the rest can be empty)
        return isBrightness;
    }
    get brightness() {
        return this._features().some(f => f.brightness);
    }
    get colorTemp() {
        return this._features().some(f => f.colorTemp);
    }
    get colorTempMinKelvin() {
        let min = null;
        // return the smallest value, if any specified
        this._features().forEach(f => {
            if (f.colorTempMinKelvin && (min == null || min > f.colorTempMinKelvin)) {
                min = f.colorTempMinKelvin;
            }
        });
        return min;
    }
    get colorTempMaxKelvin() {
        let max = null;
        // return the biggest value, if any specified
        this._features().forEach(f => {
            if (f.colorTempMaxKelvin && (max == null || max < f.colorTempMaxKelvin)) {
                max = f.colorTempMaxKelvin;
            }
        });
        return max;
    }
    get color() {
        return this._features().some(f => f.color);
    }
}

class TimeCacheValue {
    /**
     * Will create value returned from propertyFactory, that can avoid being cached.
     */
    constructor(value, dontCache = false) {
        this.value = value;
        this.dontCache = dontCache;
    }
}
class TimeCache {
    /**
     * Will create time cache with specified interval in miliseconds.
     * When calling getValue or setValue, the value will be cached for given interval.
     */
    constructor(cacheInterval) {
        this._factories = {};
        this._lastValues = {};
        this._cacheInterval = cacheInterval;
    }
    /**
     * Will register property with name and factory function factory.
     */
    registerProperty(name, factory) {
        this._factories[name] = factory;
        delete this._lastValues[name];
    }
    /**
     * Sets current value for some property.
     */
    setValue(name, value) {
        this.ensureExists(name);
        this._lastValues[name] = this.createCacheItem(value);
    }
    /**
     * Gets cached or current value of property
     */
    getValue(name) {
        this.ensureExists(name);
        const now = new Date().getTime();
        const cachedItem = this._lastValues[name];
        if (cachedItem && (now - cachedItem.time) < this._cacheInterval) {
            return cachedItem.value;
        }
        let value = this._factories[name]();
        let dontCache = false;
        if (value instanceof TimeCacheValue) {
            const cacheValue = value;
            value = cacheValue.value;
            dontCache = cacheValue.dontCache;
        }
        if (!dontCache) {
            this.setValue(name, value);
        }
        return value;
    }
    ensureExists(name) {
        if (!this._factories[name])
            throw Error(`Property with name ${name} is not registered in TimeCache.`);
    }
    createCacheItem(value) {
        return {
            value: value,
            time: new Date().getTime()
        };
    }
}

class NotifyBase {
    constructor() {
        this._propertyChangedCallbacks = {};
    }
    raisePropertyChanged(propertyName) {
        for (const callbackId in this._propertyChangedCallbacks) {
            this._propertyChangedCallbacks[callbackId](propertyName);
        }
    }
    /**
     * Will register callback on property change events.
     * @param id Id for this specific callback. If this id already exists, it's callback will be overwriten.
     * @param callback Action that will be called when any supported property if changed (takes propertyName as parameter).
     */
    registerOnPropertyChanged(id, callback) {
        this._propertyChangedCallbacks[id] = callback;
    }
    /**
     * Will unregister callback from property change events.
     * @param id Id for specific callback
     */
    unregisterOnPropertyChanged(id) {
        delete this._propertyChangedCallbacks[id];
    }
}

class LightContainer extends NotifyBase {
    constructor(entity_id) {
        super();
        ensureEntityDomain(entity_id, 'light');
        this._entity_id = entity_id;
        this.initTimeCache();
    }
    set hass(value) {
        this._hass = value;
        if (!this._hass.states) {
            throw new Error('No \'states\' available on passed hass instance.');
        }
        this._entity = this._hass.states[this._entity_id];
        if (!this._entity) {
            throw new Error(`Entity '${this._entity_id}' not found in states.`);
        }
        this._entityFeatures = new LightFeatures(this._entity);
        this.raisePropertyChanged('hass');
    }
    //#region Info
    getIcon() {
        return this._entity && this._entity.attributes.icon;
    }
    getTitle() {
        var _a;
        return new StaticTextTemplate((_a = this._entity.attributes.friendly_name) !== null && _a !== void 0 ? _a : this._entity_id);
    }
    getEntityId() {
        return this._entity_id;
    }
    get features() {
        return this._entityFeatures;
    }
    initTimeCache() {
        this._cache = new TimeCache(Consts.TimeCacheInterval); // ms
        this._cache.registerProperty('state', () => { var _a; return new TimeCacheValue((_a = this._entity) === null || _a === void 0 ? void 0 : _a.state, this.getDontCacheState()); });
        this._cache.registerProperty('brightnessValue', () => new TimeCacheValue(this.brightnessValueGetFactory(), this.getDontCacheBrightnessValue()));
        this._cache.registerProperty('colorMode', () => this.colorModeGetFactory());
        this._cache.registerProperty('colorTemp', () => this.colorTempGetFactory());
        this._cache.registerProperty('color', () => this.colorGetFactory());
    }
    getDontCacheState() {
        return !this._entity || this._entity.state == 'unavailable';
    }
    getDontCacheBrightnessValue() {
        var _a;
        return this.getDontCacheState() || ((_a = this._entity.attributes) === null || _a === void 0 ? void 0 : _a.brightness) == null;
    }
    notifyTurnOn() {
        this._cache.setValue('state', 'on');
        if (this._lastOnBrightnessValue) {
            this._cache.setValue('brightnessValue', this._lastOnBrightnessValue);
        }
    }
    notifyTurnOff() {
        this._cache.setValue('state', 'off');
        this._cache.setValue('brightnessValue', 0);
    }
    notifyBrightnessValueChanged(value) {
        if (value > 0) {
            this._lastOnBrightnessValue = value;
        }
        this._cache.setValue('brightnessValue', value);
        this._cache.setValue('state', value > 0 ? 'on' : 'off');
    }
    notifyColorTempChanged(value) {
        this._lastColorTemp = value;
        this._cache.setValue('colorTemp', value);
        this._cache.setValue('colorMode', HassLightColorMode.color_temp);
    }
    notifyColorChanged(value, mode) {
        this._cache.setValue('colorTemp', null);
        this._cache.setValue('colorMode', mode);
        this._cache.setValue('color', value);
    }
    //#endregion
    //#region State ON/OFF
    isUnavailable() {
        return this._cache.getValue('state') == 'unavailable';
    }
    isOn() {
        return this._cache.getValue('state') == 'on';
    }
    isOff() {
        return !this.isOn();
    }
    turnOn() {
        this.toggle(true);
    }
    turnOff() {
        this.toggle(false);
    }
    toggle(on) {
        if (this.isUnavailable())
            return;
        if (on) {
            this.notifyTurnOn();
        }
        else {
            this.notifyTurnOff();
        }
        this._hass.callService('light', on ? 'turn_on' : 'turn_off', { entity_id: this._entity_id });
    }
    //#endregion
    //#region Brightness Value
    brightnessValueGetFactory() {
        var _a;
        if (this.isOff())
            return 0;
        const attr = this._entity.attributes;
        const brightness = (_a = attr === null || attr === void 0 ? void 0 : attr.brightness) !== null && _a !== void 0 ? _a : 255;
        this._lastOnBrightnessValue = Math.round((brightness / 255.0) * 100); // brightness is 0-255
        return this._lastOnBrightnessValue;
    }
    get brightnessValue() {
        return this._cache.getValue('brightnessValue');
    }
    set brightnessValue(value) {
        // just to be sure
        if (value < 0) {
            value = 0;
        }
        else if (value > 100) {
            value = 100;
        }
        this.notifyBrightnessValueChanged(value);
        const brightness = Math.round((value / 100.0) * 255); // value is 0-100
        this._hass.callService('light', 'turn_on', {
            entity_id: this._entity_id,
            ['brightness']: brightness
        });
    }
    //#endregion
    //#region Color mode
    colorModeGetFactory() {
        let result = HassLightColorMode.unknown;
        let dontCache = true;
        if (this.isOn()) {
            const entityMode = this._entity.attributes.color_mode;
            if (entityMode) {
                result = entityMode;
                dontCache = false;
                // There is bug with unoriginal hue lights 
                // - color_temp is set only for a while, then the mode is switched back to xy (0,0) and temperature is not known
                // So, when we have last saved colortemp, and mode is xy = 00, then return color_temp
                if (this._lastColorTemp && result == HassLightColorMode.xy && this._entity.attributes.xy_color) {
                    const [x, y] = this._entity.attributes.xy_color;
                    if (x === 0 && y === 0) {
                        result = HassLightColorMode.color_temp;
                    }
                }
            }
        }
        return new TimeCacheValue(result, dontCache);
    }
    get colorMode() {
        return this._cache.getValue('colorMode');
    }
    isColorModeColor() {
        const colorModes = [
            HassLightColorMode.hs,
            HassLightColorMode.xy,
            HassLightColorMode.rgb,
            HassLightColorMode.rgbw,
            HassLightColorMode.rgbww
        ];
        return colorModes.includes(this.colorMode);
    }
    isColorModeTemp() {
        return this.colorMode == HassLightColorMode.color_temp;
    }
    //#endregion
    //#region Color Temp
    colorTempGetFactory() {
        // when is off or not in temp mode, return default
        if (this.isOff() || !this.isColorModeTemp())
            return new TimeCacheValue(null, true);
        const attr = this._entity.attributes;
        if (attr === null || attr === void 0 ? void 0 : attr.color_temp_kelvin) {
            this._lastColorTemp = attr === null || attr === void 0 ? void 0 : attr.color_temp_kelvin;
        }
        return new TimeCacheValue(this._lastColorTemp, !this._lastColorTemp);
    }
    get colorTemp() {
        return this._cache.getValue('colorTemp');
    }
    set colorTemp(newTemp) {
        var _a, _b, _c, _d, _e, _f;
        if (!newTemp)
            return;
        const minTemp = (_c = (_b = (_a = this._entity) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.min_color_temp_kelvin) !== null && _c !== void 0 ? _c : 2000;
        const maxTemp = (_f = (_e = (_d = this._entity) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.max_color_temp_kelvin) !== null && _f !== void 0 ? _f : 6500;
        // just to be sure
        if (newTemp < minTemp) {
            newTemp = minTemp;
        }
        else if (newTemp > maxTemp) {
            newTemp = maxTemp;
        }
        this.notifyColorTempChanged(newTemp);
        this._hass.callService('light', 'turn_on', {
            entity_id: this._entity_id,
            ['kelvin']: newTemp
        });
    }
    //#endregion
    //#region Color
    colorGetFactory() {
        var _a;
        // when is off or not in color mode, return default
        if (this.isOff() || !this.isColorModeColor())
            return new TimeCacheValue(null, true);
        const attr = (_a = this._entity) === null || _a === void 0 ? void 0 : _a.attributes;
        let result = null;
        if (attr.hs_color) {
            const [h, s] = attr.hs_color;
            result = new Color(h, s / 100, 1, 1, 'hsv');
        }
        else if (attr.rgb_color) {
            const [r, g, b] = attr.rgb_color;
            result = new Color(r, g, b);
        }
        return new TimeCacheValue(result, !result);
    }
    get color() {
        return this._cache.getValue('color');
    }
    set color(newColor) {
        if (!newColor)
            return;
        let mode;
        const serviceData = { entity_id: this._entity_id };
        if (newColor.getOriginalMode() == 'hsv') {
            mode = HassLightColorMode.hs;
            serviceData.hs_color = [newColor.getHue(), newColor.getSaturation() * 100];
        }
        else {
            mode = HassLightColorMode.rgb;
            serviceData.rgb_color = [newColor.getRed(), newColor.getGreen(), newColor.getBlue()];
        }
        this.notifyColorChanged(newColor, mode);
        this._hass.callService('light', 'turn_on', serviceData);
    }
    getBackground() {
        let temp;
        let color;
        let bgColor = null;
        if (this.isColorModeTemp() && (temp = this.colorTemp)) {
            const [r, g, b] = Color.hueTempToRgb(temp);
            bgColor = new Color(r, g, b);
        }
        else if (this.isColorModeColor() && (color = this.color)) {
            bgColor = color;
        }
        if (!bgColor) {
            if (this._lastBackground)
                return this._lastBackground;
            return null;
        }
        this._lastBackground = new Background([bgColor]);
        return this._lastBackground;
    }
}

/**
 * Static class making LightContainer instances global.
 */
class GlobalLights {
    static getLightContainer(entity_id) {
        let instance = this._containers[entity_id];
        if (!instance) {
            //console.log(`[GlobalLights] Creating instance for '${entity_id}'`);
            instance = new LightContainer(entity_id);
            this._containers[entity_id] = instance;
        }
        return instance;
    }
}
GlobalLights._containers = {};

class LightController extends NotifyBase {
    constructor(entity_ids, defaultColor, lightGroupEntityId) {
        super();
        // we need at least one
        if (!entity_ids.length)
            throw new Error('No entity specified.');
        this._defaultColor = defaultColor;
        this._lights = entity_ids.map(e => GlobalLights.getLightContainer(e));
        this._lightsFeatures = new LightFeaturesCombined(() => this._lights.map(l => l.features));
        if (lightGroupEntityId) {
            this._lightGroup = GlobalLights.getLightContainer(lightGroupEntityId);
        }
    }
    /**
     * Returns count of registered lights.
     */
    get count() {
        return this._lights.length;
    }
    /**
     * @returns all lit lights.
     */
    getLitLights() {
        return this._lights.filter(l => l.isOn());
    }
    /**
     * @returns all lights in this controller.
     */
    getLights() {
        return this._lights.map(l => l); // map will cause creation of new array
    }
    set hass(hass) {
        this._hass = hass;
        this._lights.forEach(l => l.hass = hass);
        if (this._lightGroup) {
            this._lightGroup.hass = hass;
        }
        this.raisePropertyChanged('hass');
    }
    get hass() {
        return this._hass;
    }
    isOn() {
        if (this._lightGroup) {
            return this._lightGroup.isOn();
        }
        return this._lights.some(l => l.isOn());
    }
    isOff() {
        if (this._lightGroup) {
            return this._lightGroup.isOff();
        }
        return this._lights.every(l => l.isOff());
    }
    isUnavailable() {
        if (this._lightGroup) {
            return this._lightGroup.isUnavailable();
        }
        return this._lights.every(l => l.isUnavailable());
    }
    turnOn() {
        if (this._lightGroup) {
            return this._lightGroup.turnOn();
        }
        this._lights.filter(l => l.isOff()).forEach(l => l.turnOn());
    }
    turnOff() {
        if (this._lightGroup) {
            return this._lightGroup.turnOff();
        }
        this._lights.filter(l => l.isOn()).forEach(l => l.turnOff());
    }
    get brightnessValue() {
        return this.valueGetFactory();
    }
    set brightnessValue(value) {
        const litLights = this._lights.filter(l => l.isOn());
        // when only one light is on, set the value to that light
        if (litLights.length == 1) {
            litLights[0].brightnessValue = value;
            return;
        }
        else if (litLights.length == 0) { // when no light is on, set value to all lights
            this._lights.forEach(l => l.brightnessValue = value);
            return;
        }
        // get percentage change of remaining value
        const oldValue = this.brightnessValue;
        const valueChange = value - oldValue;
        const remainingValue = valueChange > 0 ? (100 - this.brightnessValue) : this.brightnessValue;
        const percentualChange = valueChange / remainingValue; // percentual of remaining
        // calculate the value for each light
        this._lights.filter(l => l.isOn()).forEach(l => {
            const lightOldValue = l.brightnessValue;
            // of value of this light is the same asi value of controller, set it exactly to value
            if (lightOldValue == oldValue) {
                l.brightnessValue = value;
                return;
            }
            // get remaining part of this one light
            const remainingLightValue = valueChange > 0 ? (100 - l.brightnessValue) : l.brightnessValue;
            // compute value increment
            const lightValueChange = Math.round(remainingLightValue * percentualChange);
            // get new value
            let newValue = l.brightnessValue + lightValueChange;
            // don't let the value drop to zero, if the target value isn't exactly zero
            if (newValue < 1 && value > 0) {
                newValue = 1;
            }
            l.brightnessValue = newValue;
        });
    }
    valueGetFactory() {
        // get average from every light that is on
        let total = 0;
        let count = 0;
        this._lights.forEach(e => {
            if (e.isOn()) {
                count++;
                total += e.brightnessValue;
            }
        });
        if (count == 0)
            return 0;
        const value = total / count * 1.0;
        return value;
    }
    getIcon() {
        if (this._lights.length == 1) {
            return this._lights[0].getIcon() || IconHelper.getIcon(1);
        }
        return IconHelper.getIcon(this._lights.length);
    }
    getTitle() {
        if (this._lightGroup) {
            return this._lightGroup.getTitle();
        }
        let title = '';
        for (let i = 0; i < this._lights.length && i < 3; i++) {
            if (i > 0) {
                title += ', ';
            }
            title += this._lights[i].getTitle();
        }
        if (this._lights.length > 3)
            title += ', ...';
        return new StaticTextTemplate(title);
    }
    /**
     * @returns localized description of how many lights are on.
     */
    getDescription(description) {
        const total = this._lights.length;
        let lit = 0;
        this._lights.forEach(l => {
            if (l.isOn()) {
                lit++;
            }
        });
        let result;
        if (description != null) {
            if (description) {
                result = description.replace('%s', lit.toString());
                return new HassTextTemplate(result);
            }
            result = '';
        }
        else if (lit == 0) {
            result = localize(this.hass, 'card.description.noLightsOn');
        }
        else if (lit == total) {
            result = localize(this.hass, 'card.description.allLightsOn');
        }
        else if (lit == 1) {
            result = localize(this.hass, 'card.description.oneLightOn');
        }
        else {
            result = localize(this.hass, 'card.description.someLightsAreOn', '%s', lit.toString());
        }
        return new StaticTextTemplate(result);
    }
    getBackground() {
        const backgrounds = this._lights.filter(l => l.isOn()).map(l => l.getBackground() || this._defaultColor);
        if (backgrounds.length == 0)
            return null;
        return new Background(backgrounds);
    }
    getEntityId() {
        throw Error('Cannot get entity id from LightController');
    }
    get features() {
        return this._lightsFeatures;
    }
}

/**
 * Functions to call Hass WebSocket services to get data.
 * More info:
 * https://github.com/home-assistant/core/blob/dev/homeassistant/components/search/__init__.py
 */
class HassWsClient {
    /**
     * Will create WebCocket client instance.
     */
    constructor(hass) {
        if (!hass)
            throw new Error('Hass instance must be passed!');
        this._hass = hass;
    }
    /**
     * Will get all light entities in given area.
     * @param area - Area name.
     * @returns Ids of all light entities in given area or null, when nothing is returned - indicating, the area does not exist.
     */
    async getLightEntities(area) {
        var _a;
        // area codes are lowercase, underscore instead of spaces and removed diacritics
        const areaId = removeDiacritics(area).toLowerCase().replaceAll(/[ _-]+/g, '_');
        const areaResult = await this._hass.connection.sendMessagePromise({
            type: 'search/related',
            item_type: 'area',
            item_id: areaId
        });
        if (!areaResult || Object.keys(areaResult).length === 0) {
            return null;
        }
        const areaName = ((_a = this._hass.areas[areaId]) === null || _a === void 0 ? void 0 : _a.name) || area;
        if (areaResult.entity && areaResult.entity.length) {
            return {
                areaName: areaName,
                lights: areaResult.entity.filter((e) => e.startsWith('light.')),
                dataResult: areaResult
            };
        }
        return {
            areaName: areaName,
            lights: [],
            dataResult: areaResult
        };
    }
    /**
     * Will get area in which the entity is located.
     * @param entityId - Id of entity
     * @returns Area name or null, if no area is specified.
     */
    async getArea(entityId) {
        const entityResult = await this._hass.connection.sendMessagePromise({
            type: 'search/related',
            item_type: 'entity',
            item_id: entityId
        });
        if (entityResult && entityResult.area && entityResult.area.length) {
            return entityResult.area[0];
        }
        return null;
    }
    /**
     * Will get all scenes in given area.
     * @param area - Area name.
     * @returns Ids of all scenes in given area or empty array.
     */
    async getScenes(area) {
        const areaResult = await this._hass.connection.sendMessagePromise({
            type: 'search/related',
            item_type: 'area',
            item_id: area
        });
        return this.getScenesFromResult(areaResult);
    }
    /**
     * Will get all scenes in given area from @param areaResult.
     * @returns Ids of all scenes in given area or empty array.
     */
    getScenesFromResult(areaResult) {
        if (areaResult && areaResult.scene && areaResult.scene.length) {
            return areaResult.scene;
        }
        return [];
    }
}

class HueLikeLightCardConfig {
    constructor(plainConfig) {
        this._isInitialized = false;
        this._areaEntitiesLoaded = false;
        this._scenesLoaded = false;
        // check if we potentialy have at least one entity
        if (!plainConfig.entity && (!plainConfig.entities || !plainConfig.entities.length) && !plainConfig.area) {
            throw new Error('One of "entity" and/or "entities" or "area" needs to be set.');
        }
        this.entity = plainConfig.entity;
        this.entities = plainConfig.entities;
        this.area = plainConfig.area;
        this.groupEntity = plainConfig.groupEntity;
        this._title = plainConfig.title;
        this.description = plainConfig.description;
        this.icon = plainConfig.icon;
        this.iconSize = HueLikeLightCardConfig.getIconSize(plainConfig.iconSize);
        this.showSwitch = HueLikeLightCardConfig.getBoolean(plainConfig.showSwitch, true);
        this.slider = HueLikeLightCardConfig.getSliderType(plainConfig.slider);
        this._scenes = HueLikeLightCardConfig.getScenesArray(plainConfig.scenes);
        this.sceneOrder = HueLikeLightCardConfig.getSceneOrder(plainConfig.sceneOrder);
        this.offClickAction = HueLikeLightCardConfig.getClickAction(plainConfig.offClickAction);
        this.offClickData = new ClickActionData(plainConfig.offClickData);
        this.onClickAction = HueLikeLightCardConfig.getClickAction(plainConfig.onClickAction);
        this.onClickData = new ClickActionData(plainConfig.onClickData);
        this.offHoldAction = HueLikeLightCardConfig.getClickAction(plainConfig.offHoldAction);
        this.offHoldData = new ClickActionData(plainConfig.offHoldData);
        this.onHoldAction = HueLikeLightCardConfig.getClickAction(plainConfig.onHoldAction);
        this.onHoldData = new ClickActionData(plainConfig.onHoldData);
        this.allowZero = HueLikeLightCardConfig.getBoolean(plainConfig.allowZero, false);
        this.theme = plainConfig.theme || Consts.ThemeDefault;
        this.defaultColor = plainConfig.defaultColor || Consts.DefaultColor;
        this.offColor = plainConfig.offColor || Consts.OffColor;
        this.wasOffColorSet = !!plainConfig.offColor;
        this.hueScreenBgColor = plainConfig.hueScreenBgColor || Consts.DialogBgColor;
        this.offShadow = HueLikeLightCardConfig.getBoolean(plainConfig.offShadow, true);
        this.hueBorders = HueLikeLightCardConfig.getBoolean(plainConfig.hueBorders, true);
        this.style = plainConfig.style;
        this.card_mod = plainConfig.card_mod;
        // need some init?
        if (this.getEntities().length == 0 || this._scenes == null) {
            this._isInitialized = false;
        }
        else {
            this._isInitialized = true;
        }
    }
    /**
     * @returns boolean from plain config.
     * @param plain Plain value from config
     * @param def Default value if plain value is not filled
     */
    static getBoolean(plain, def) {
        if (plain == null)
            return def;
        return !!plain;
    }
    /**
     * @returns SliderType valid enum, default for empty or throws exception.
     */
    static getSliderType(plain) {
        if (!plain)
            return SliderType.Default;
        return this.tryParseEnum(SliderType, plain, 'Slider type');
    }
    /**
     * @returns ClickAction valid enum, default for empty or throws exception.
     */
    static getClickAction(plain) {
        if (!plain)
            return ClickAction.Default;
        return this.tryParseEnum(ClickAction, plain, 'Click action');
    }
    /**
     * @returns IconSize as number, default for empty or throws exception.
     */
    static getIconSize(plain) {
        if (!plain)
            return Consts.IconSize[KnownIconSize.Original];
        if (typeof plain == 'number') {
            return plain;
        }
        plain = plain.toString().toLowerCase();
        const iconSize = this.tryParseEnum(KnownIconSize, plain, 'Icon size');
        return Consts.IconSize[iconSize];
    }
    /**
     * @returns SceneOrder valid enum, default for empty or throws exception.
     */
    static getSceneOrder(plain) {
        if (!plain)
            return SceneOrder.Default;
        return this.tryParseEnum(SceneOrder, plain, 'Scene order');
    }
    static tryParseEnum(enumType, plain, name) {
        let helpValues = '';
        for (const value in enumType) {
            const enumValue = (enumType)[value];
            if (plain == enumValue)
                return plain;
            helpValues += `'${enumValue}', `;
        }
        throw new Error(`${name} '${plain}' was not recognized. Allowed values are: ${helpValues}`);
    }
    /**
     * @returns array of SceneConfig - parsed from passed plain config.
     * @param plain Plain value from config
     */
    static getScenesArray(plain) {
        if (!plain)
            return null;
        if (plain.length > 0) {
            const result = new Array();
            for (let i = 0; i < plain.length; i++) {
                const scene = plain[i];
                const pScene = HueLikeLightCardConfig.getScene(scene, i);
                if (pScene) {
                    result.push(pScene);
                }
            }
            return result;
        }
        return [];
    }
    /**
     * @returns SceneConfig - parse from passed plain config value.
     * @param plain Plain value of one scene from config
     * @param index Index of value in array (for error message purposes)
     */
    static getScene(plain, index) {
        if (typeof plain == 'string') {
            return new SceneConfig(plain);
        }
        if (!plain.entity) {
            throw new Error(`Scene on index ${index} is missing 'entity' attribute, which is required.`);
        }
        const result = new SceneConfig(plain.entity);
        result.title = plain.title;
        result.icon = plain.icon;
        result.color = plain.color;
        result.activation = plain.activation;
        result.activationData = plain.activationData;
        return result;
    }
    get title() {
        return this._title;
    }
    get scenes() {
        return this._scenes || [];
    }
    /**
     * @returns Title from config or from passed container.
     */
    getTitle(lightContainer) {
        return !!this.title
            ? new HassTextTemplate(this.title)
            : lightContainer.getTitle();
    }
    /**
     * @returns List of entity identifiers
     */
    getEntities() {
        // create list of entities (prepend entity and then insert all entities)
        const result = [];
        this.entity && result.push(this.entity);
        this.entities && this.entities.forEach(e => {
            if (typeof e == 'string') {
                result.push(e);
            }
            else if (e.entity) {
                result.push(e.entity);
            }
        });
        this._areaEntities && this._areaEntities.forEach(e => {
            result.push(e);
        });
        return result;
    }
    /**
     * @returns Default color as instance of Color.
     */
    getDefaultColor() {
        return ColorResolver.getColor(this.defaultColor);
    }
    /**
     * @returns Off color as instance of Color.
     */
    getOffColor() {
        return new ColorExtended(this.offColor);
    }
    /**
     * @returns Background color for hue-screen dialog.
     */
    getHueScreenBgColor() {
        return new ColorExtended(this.hueScreenBgColor);
    }
    /**
     * @returns If this config needs call to @method init, in order to be properly working.
     */
    get isInitialized() {
        return this._isInitialized;
    }
    /**
     * Will try to load everything needed for this configuration, to be fully loaded.
     * Might throw some errors.
     */
    async init(hass) {
        if (!hass)
            throw new Error('Hass instance must be passed!');
        // no need to do it again
        if (this._isInitialized)
            return;
        // init is running
        this._isInitialized = true;
        // load entities from area, if needed
        await this.tryLoadAreaInfo(hass);
        // load scenes if needed
        // fire&forget, no need to wait for these
        this.tryLoadScenes(hass);
    }
    /**
     * Will try to load area light entities from HA WS.
     * Will also set title and scenes, if possible.
     */
    async tryLoadAreaInfo(hass) {
        if (this._areaEntitiesLoaded || !this.area || this._areaEntities != null)
            return;
        this._areaEntitiesLoaded = true;
        const client = new HassWsClient(hass);
        let areaLightsInfo;
        try {
            areaLightsInfo = await client.getLightEntities(this.area);
        }
        catch (error) {
            console.error('Cannot load light entities from HA.');
            console.error(error);
            // rethrow exception for UI
            throw new Error(`Cannot load entities from area '${this.area}'. See console for more info.`);
        }
        if (areaLightsInfo == null) {
            throw new Error(`Area '${this.area}' does not exist.`);
        }
        // check for at least one light entity
        if (areaLightsInfo.lights.length == 0) {
            throw new Error(`Area '${this.area}' has no light entities.`);
        }
        this._areaEntities = areaLightsInfo.lights;
        // if no title is given, use area name
        if (this._title == null) {
            this._title = areaLightsInfo.areaName;
        }
        // if no other entities are set, use scenes from area
        if (this._scenes == null && this.getEntities().length == this._areaEntities.length) {
            const loadedScenes = client.getScenesFromResult(areaLightsInfo.dataResult);
            this.setLoadedScenes(loadedScenes);
        }
    }
    /**
     * Will try to load scenes from HA WS, if no scenes are configured.
     */
    async tryLoadScenes(hass) {
        if (this._scenesLoaded || this._scenes != null)
            return;
        this._scenesLoaded = true;
        const client = new HassWsClient(hass);
        try {
            /**
             * Potential optimization:
             * - load first areaInfo and check, if any other lights are in there (no need to call getArea so many times)
             * - areaResult can be passed to this method if some entities were loaded from area (this can be used with the point above)
             */
            // get entities, and create ordered list based on order of entities in config
            const entities = removeDuplicites(this.getEntities());
            const lightRelations = entities.map(entityId => {
                return { entityId };
            });
            // load all areas
            await Promise.all(lightRelations.map(async (relation) => {
                relation.area = await client.getArea(relation.entityId);
            }));
            // load scenes for areas
            await Promise.all(lightRelations.map(async (relation) => {
                if (relation.area) {
                    relation.areaScenes = await client.getScenes(relation.area);
                }
            }));
            // get all scenes - order depends on entity order in config
            let loadedScenes = lightRelations.filter(r => !!r.areaScenes).flatMap(r => r.areaScenes);
            loadedScenes = removeDuplicites(loadedScenes);
            this.setLoadedScenes(loadedScenes);
        }
        catch (error) {
            console.error('Cannot load scenes from HA.');
            console.error(error);
        }
    }
    /**
     * Will set loaded scenes to this config (using configured ordering)
     */
    setLoadedScenes(loadedScenes) {
        switch (this.sceneOrder) {
            case SceneOrder.NameAsc:
                loadedScenes.sort((s1, s2) => s1.localeCompare(s2));
                break;
            case SceneOrder.NameDesc:
                loadedScenes.sort((s1, s2) => s2.localeCompare(s1));
                break;
        }
        // set to config
        this._scenes = HueLikeLightCardConfig.getScenesArray(loadedScenes);
    }
}

class ErrorInfo {
    constructor(er) {
        if (typeof er === 'string') {
            this._message = er;
        }
        else if (er instanceof Error) {
            this._message = er.message;
            this._stack = er.stack;
        }
        else {
            this._message = (er === null || er === void 0 ? void 0 : er.toString()) || 'UNKNOWN ERROR';
        }
    }
    get message() {
        return this._message;
    }
    get stack() {
        return this._stack || '';
    }
}

class VersionNotifier {
    static toConsole() {
        const stopColors = [
            new Color('#0046FF'),
            new Color('#9E00FF'),
            new Color('#FF00F3'),
            new Color('#FF0032'),
            new Color('#FF8B00')
        ];
        const textInfo = this.getText();
        const consoleColors = new Array();
        const segmentSteps = Math.floor(textInfo.colorCount / (stopColors.length - 1));
        for (let i = 0; i < stopColors.length - 1; i++) {
            const color1 = stopColors[i];
            const color2 = stopColors[i + 1];
            const segmentGradient = this.generateGradientArray(color1, color2, segmentSteps);
            consoleColors.push(...segmentGradient);
        }
        while (consoleColors.length < textInfo.colorCount) {
            consoleColors.push(stopColors[stopColors.length - 1]);
        }
        /* eslint no-console: 0 */
        console.info(textInfo.result, ...consoleColors.map(c => 'font-weight:bold;color:white;background:' + c.toString()));
    }
    static getText() {
        const cardName = Consts.CardElementName.toUpperCase() + ' ' + Consts.Version;
        let result = '%c';
        let colorCount = 1;
        for (let i = 0; i < cardName.length; i++) {
            result += cardName.charAt(i) + '%c';
            colorCount++;
        }
        return {
            result,
            colorCount
        };
    }
    static generateGradientArray(color1, color2, steps) {
        const gradientArray = [];
        for (let i = 0; i < steps; i++) {
            const factor = i / steps;
            gradientArray.push(this.interpolateColor(color1, color2, factor));
        }
        return gradientArray;
    }
    static interpolateColor(color1, color2, factor) {
        const red = Math.round(color1.getRed() + factor * (color2.getRed() - color1.getRed()));
        const green = Math.round(color1.getGreen() + factor * (color2.getGreen() - color1.getGreen()));
        const blue = Math.round(color1.getBlue() + factor * (color2.getBlue() - color1.getBlue()));
        return new Color(red, green, blue);
    }
}

// Show version info in console
VersionNotifier.toConsole();
// This puts card into the UI card picker dialog
window.customCards = window.customCards || [];
window.customCards.push({
    type: Consts.CardElementName,
    name: Consts.CardName,
    description: Consts.CardDescription
});
let HueLikeLightCard = class HueLikeLightCard extends s$1 {
    constructor() {
        super(...arguments);
        this._configInitPending = false;
        this._switchColorDetected = false;
    }
    set hass(hass) {
        if (!hass)
            return;
        const oldHass = this._hass;
        this._hass = hass; // save hass instance
        // set hass instance where needed
        this.trySetHassWhereNeeded();
        // custom @property() implementation
        this.requestUpdate(nameof(this, 'hass'), oldHass);
    }
    get hass() {
        return this._hass;
    }
    catchErrors(action) {
        const catchRoutine = (e) => {
            this._error = new ErrorInfo(e);
            this.requestUpdate(); // render error
            // rethrow
            throw e;
        };
        try {
            this._error = undefined;
            if (action.constructor.name === 'AsyncFunction') {
                action().catch(catchRoutine);
            }
            else {
                action();
            }
        }
        catch (e) {
            catchRoutine(e);
        }
    }
    setConfig(plainConfig) {
        this.catchErrors(() => {
            const oldConfig = this._config;
            this._config = new HueLikeLightCardConfig(plainConfig);
            if (this._config.isInitialized) {
                this.useInitializedConfig(oldConfig);
            }
            else {
                this._oldConfig = oldConfig;
                this._configInitPending = true;
                // try to call init immediately (if hass is present)
                this.tryInitializeConfig(this.hass);
            }
        });
    }
    tryInitializeConfig(hass) {
        if (!hass || !this._configInitPending)
            return;
        const oldConfig = this._oldConfig;
        // no longer pending
        this._configInitPending = false;
        this._oldConfig = undefined;
        this.catchErrors(async () => {
            // try to init the config
            await this._config.init(hass);
            // if it ended up well, use the initialized config
            this.useInitializedConfig(oldConfig);
        });
    }
    useInitializedConfig(oldConfig) {
        var _a;
        if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.isInitialized) != true)
            throw new Error('Config is not initialized.');
        this._ctrl = new LightController(this._config.getEntities(), this._config.getDefaultColor(), this._config.groupEntity);
        this._actionHandler = new ActionHandler(this._config, this._ctrl, this);
        // For theme color set background to null
        const offColor = this._config.getOffColor();
        if (!offColor.isThemeColor()) {
            this._offBackground = new Background([offColor.getBaseColor()]);
        }
        else {
            this._offBackground = null;
        }
        this._error = undefined;
        // try set hass
        this.trySetHassWhereNeeded();
        // custom @property() implementation
        this.requestUpdate('_config', oldConfig);
    }
    /** Will try to set Hass to lightController (will not fail if no lightController exists) */
    trySetHassWhereNeeded() {
        if (!this.hass)
            return;
        // try to init config, if needed
        this.tryInitializeConfig(this.hass);
        // pass hass instance to Controller
        if (this._ctrl) {
            this._ctrl.hass = this.hass;
        }
    }
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
        return 3;
    }
    cardClicked() {
        // handle the click
        if (this._actionHandler) {
            this._actionHandler.handleCardClick();
        }
        // update styles
        this.updateStylesInner();
    }
    cardHolded() {
        // handle the hold
        if (this._actionHandler) {
            this._actionHandler.handleCardHold();
        }
        // update styles
        this.updateStylesInner();
    }
    updated(changedProps) {
        super.updated(changedProps);
        this.setupListeners();
        this.updateStylesInner();
        if (!this._config || !this.hass) {
            return;
        }
        const oldHass = changedProps.get('hass');
        const oldConfig = changedProps.get('_config');
        if (!oldHass || !oldConfig || oldHass.themes !== this.hass.themes || oldConfig.theme !== this._config.theme) {
            // Try apply theme
            if (ThemeHelper.applyTheme(this, this.hass.themes, this._config.theme)) {
                // Update styles - when theme changes
                this.updateStylesInner(true);
            }
        }
    }
    // Can't be named 'updateStyles', because HA searches for that method and calls it instead of applying theme
    updateStylesInner(forceRefresh = false) {
        var _a, _b, _c, _d;
        // no config or controller, do nothing
        if (!this._config || !this._ctrl)
            return;
        if (!this._switchColorDetected) {
            // Detect switch colors
            if (this._config.showSwitch) {
                ThemeHelper.detectSwitchColors(this);
            }
            this._switchColorDetected = true;
        }
        const card = this.renderRoot.querySelector('ha-card');
        // get defaultShadow (when not using hueBorders)
        if (!this._config.hueBorders && (this._haShadow == null || forceRefresh)) {
            // get default haShadow
            const c = document.createElement('ha-card');
            document.body.appendChild(c);
            const s = getComputedStyle(c);
            this._haShadow = s.boxShadow;
            c.remove();
            if (this._haShadow == 'none') {
                if (card == null) {
                    // wait for card element
                    this._haShadow = null;
                }
                else {
                    // since HA 2022.11 default ha-card has no shadow
                    card.classList.add('new-borders');
                }
            }
            // set default shadow property
            this.style.setProperty('--ha-default-shadow', this._haShadow);
        }
        // Set icon size
        this.style.setProperty('--hue-icon-size', this._config.iconSize.toString());
        // Detect theme color if needed
        if (this._offBackground == null) {
            ThemeHelper.detectThemeCardBackground(this, forceRefresh);
        }
        // Theme colors:
        // BG: --card-background-color OR OLD: --paper-card-background-color
        // FG: --primary-text-color (for off: --secondary-text-color)
        const bfg = ViewUtils.calculateBackAndForeground(this._ctrl, this._offBackground);
        const shadow = ViewUtils.calculateDefaultShadow(card, this._ctrl, this._config.offShadow);
        this.style.setProperty('--hue-background', (_b = (_a = bfg.background) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : Consts.ThemeCardBackgroundVar);
        this.style.setProperty('--hue-text-color', (_d = (_c = bfg.foreground) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : Consts.ThemeSecondaryTextColorVar);
        this.style.setProperty('--ha-card-box-shadow', shadow);
        this.style.setProperty('--hue-box-shadow', shadow);
    }
    render() {
        if (this._error) {
            return x `<ha-alert alert-type="error" .title=${this._error.message}>
                ${this._error.stack ? x `<pre>${this._error.stack}</pre>` : T}
            </ha-alert>`;
        }
        // no config, ctrl or hass
        if (!this._config || !this._ctrl || !this._hass)
            return T;
        const titleTemplate = this._config.getTitle(this._ctrl);
        const descriptionTemplate = this._ctrl.getDescription(this._config.description);
        const title = titleTemplate.resolveToString(this._hass);
        const description = descriptionTemplate.resolveToString(this._hass);
        const showSwitch = this._config.showSwitch;
        const textClass = { 'text-area': true, 'no-switch': !showSwitch };
        const cardClass = {
            'state-on': this._ctrl.isOn(),
            'state-off': this._ctrl.isOff(),
            'state-unavailable': this._ctrl.isUnavailable(),
            'hue-borders': this._config.hueBorders
        };
        const onChangeCallback = () => {
            this.requestUpdate();
            this.updateStylesInner();
        };
        return x `<ha-card class="${e$4(cardClass)}">
            <div class="tap-area">
                <ha-icon icon="${this._config.icon || this._ctrl.getIcon()}"></ha-icon>
                <div class="${e$4(textClass)}">
                    <h2>${title}</h2>
                    <div class="desc">${description}</div>
                </div>
            </div>
            ${showSwitch ? ViewUtils.createSwitch(this._ctrl, onChangeCallback) : T}

            ${ViewUtils.createSlider(this._ctrl, this._config, onChangeCallback)}
        </ha-card>`;
    }
    connectedCallback() {
        super.connectedCallback();
        // CSS
        this.updateStylesInner();
        // Listeners
        this.setupListeners();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.destroyListeners();
    }
    setupListeners() {
        const tapArea = this.renderRoot.querySelector('.tap-area');
        if (tapArea && !this._mc) {
            this._mc = new Manager(tapArea);
            this._mc.add(new PressRecognizer());
            this._mc.on('press', () => {
                this.cardHolded();
            });
            this._mc.add(new TapRecognizer());
            this._mc.on('tap', () => {
                this.cardClicked();
            });
        }
    }
    destroyListeners() {
        if (this._mc) {
            this._mc.destroy();
            this._mc = undefined;
        }
    }
};
// #### UI:
HueLikeLightCard.styles = i$5 `
    ha-card
    {
        min-height:80px;
        background:var(--hue-background);
        position:relative;
        box-shadow:var(--hue-box-shadow), var(--ha-default-shadow);
        background-origin: border-box;
    }
    ha-card.new-borders
    {
        /* since HA 2022.11 */
        box-shadow:var(--hue-box-shadow);
    }
    ha-card.hue-borders
    {
        border-radius:${Consts.HueBorderRadius}px;
        box-shadow:var(--hue-box-shadow), ${r$7(Consts.HueShadow)};
        border:none;
    }
    ha-card div.tap-area
    {
        height:46px; /* card(80) - slider(32) - border(2) */
        cursor: pointer;
    }
    ha-icon
    {
        position:absolute;
        left:22px;
        top:17px;
        transform:scale(var(--hue-icon-size, ${Consts.IconSize[KnownIconSize.Original]}));
        color:var(--hue-text-color);
        transition:${r$7(Consts.TransitionDefault)};
    }
    .text-area{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 50px;
        margin:0px 60px 0px 70px;
        line-height:normal;
        color:var(--hue-text-color);
        transition:${r$7(Consts.TransitionDefault)};
    }
    .text-area.no-switch{
        margin-right:10px;
    }
    .text-area h2
    {
        font-size:18px;
        font-weight:500;
        text-overflow:ellipsis;
        overflow:hidden;
        white-space:nowrap;
        margin:4px 0 2px 0;
    }
    .text-area .desc
    {
        font-size:13px;
        margin-top:-2px;
    }
    ha-switch
    {
        position:absolute;
        right:14px;
        top:22px;
    }
    .brightness-slider
    {
        width:100%;
    }
    ha-alert{
        display:flex;
        overflow:auto;
    }
    `;
HueLikeLightCard = __decorate([
    t$2(Consts.CardElementName)
], HueLikeLightCard);

export { HueLikeLightCard };
