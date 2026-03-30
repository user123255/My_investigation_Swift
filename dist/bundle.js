(function(){"use strict";const nh=()=>{};var eo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},rh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,y=(o&3)<<4|l>>4;let I=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(I=64)),r.push(e[p],e[y],e[I],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(no(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):rh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||y==null)throw new sh;const I=o<<2|l>>4;if(r.push(I),d!==64){const S=l<<4&240|d>>2;if(r.push(S),y!==64){const P=d<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};let sh=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const ih=function(n){const t=no(n);return ro.encodeByteArray(t,!0)},zn=function(n){return ih(n).replace(/\./g,"")},oh=function(n){try{return ro.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=()=>ah().__FIREBASE_DEFAULTS__,lh=()=>{if(typeof process>"u"||typeof eo>"u")return;const n=eo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&oh(n[1]);return t&&JSON.parse(t)},ns=()=>{try{return nh()||ch()||lh()||uh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hh=n=>{var t,e;return(e=(t=ns())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},dh=n=>{const t=hh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},so=()=>{var n;return(n=ns())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ph(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[zn(JSON.stringify(e)),zn(JSON.stringify(a)),""].join(".")}const en={};function gh(){const n={prod:[],emulator:[]};for(const t of Object.keys(en))en[t]?n.emulator.push(t):n.prod.push(t);return n}function _h(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let io=!1;function yh(n,t){if(typeof window>"u"||typeof document>"u"||!rs(window.location.host)||en[n]===t||en[n]||io)return;en[n]=t;function e(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=gh().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function l(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,S){I.setAttribute("width","24"),I.setAttribute("id",S),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{io=!0,a()},I}function p(I,S){I.setAttribute("id",S),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function y(){const I=_h(r),S=e("text"),P=document.getElementById(S)||document.createElement("span"),N=e("learnmore"),V=document.getElementById(N)||document.createElement("a"),B=e("preprendIcon"),x=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const q=I.element;l(q),p(V,N);const nt=d();h(x,B),q.append(x,P,V,nt),document.body.appendChild(q)}o?(P.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vh(){var n;const t=(n=ns())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Th(){return!vh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ih(){try{return typeof indexedDB=="object"}catch{return!1}}function wh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="FirebaseError";let Gn=class Zu extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ah,Object.setPrototypeOf(this,Zu.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}},oo=class{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?bh(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Gn(s,l,r)}};function bh(n,t){return n.replace(Rh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Rh=/\{\$([^}]+)}/g;function Wn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ao(o)&&ao(a)){if(!Wn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ao(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n){return n&&n._delegate?n._delegate:n}let nn=class{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new fh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ph(t))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=de){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=de){return this.instances.has(t)}getOptions(t=de){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ch(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=de){return this.component?this.component.multipleInstances?t:de:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ch(n){return n===de?void 0:n}function Ph(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Sh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Dh={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Nh=z.INFO,kh={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Oh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=kh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let co=class{constructor(t){this.name=t,this._logLevel=Nh,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}};const Mh=(n,t)=>t.some(e=>n instanceof e);let lo,uo;function xh(){return lo||(lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lh(){return uo||(uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ho=new WeakMap,ss=new WeakMap,fo=new WeakMap,is=new WeakMap,os=new WeakMap;function Fh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Qt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&ho.set(e,n)}).catch(()=>{}),os.set(t,n),t}function $h(n){if(ss.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ss.set(n,t)}let as={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ss.get(n);if(t==="objectStoreNames")return n.objectStoreNames||fo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Bh(n){as=n(as)}function Uh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(cs(this),t,...e);return fo.set(r,t.sort?t.sort():[t]),Qt(r)}:Lh().includes(n)?function(...t){return n.apply(cs(this),t),Qt(ho.get(this))}:function(...t){return Qt(n.apply(cs(this),t))}}function jh(n){return typeof n=="function"?Uh(n):(n instanceof IDBTransaction&&$h(n),Mh(n,xh())?new Proxy(n,as):n)}function Qt(n){if(n instanceof IDBRequest)return Fh(n);if(is.has(n))return is.get(n);const t=jh(n);return t!==n&&(is.set(n,t),os.set(t,n)),t}const cs=n=>os.get(n);function ls(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Qt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Qt(a.result),h.oldVersion,h.newVersion,Qt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const qh=["get","getKey","getAll","getAllKeys","count"],Hh=["put","add","delete","clear"],us=new Map;function po(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(us.get(t))return us.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Hh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qh.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),s&&h.done]))[0]};return us.set(t,o),o}Bh(n=>({...n,get:(t,e,r)=>po(t,e)||n.get(t,e,r),has:(t,e)=>!!po(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}};function Gh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hs="@firebase/app",mo="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new co("@firebase/app"),Wh="@firebase/app-compat",Kh="@firebase/analytics-compat",Qh="@firebase/analytics",Yh="@firebase/app-check-compat",Xh="@firebase/app-check",Jh="@firebase/auth",Zh="@firebase/auth-compat",td="@firebase/database",ed="@firebase/data-connect",nd="@firebase/database-compat",rd="@firebase/functions",sd="@firebase/functions-compat",id="@firebase/installations",od="@firebase/installations-compat",ad="@firebase/messaging",cd="@firebase/messaging-compat",ld="@firebase/performance",ud="@firebase/performance-compat",hd="@firebase/remote-config",dd="@firebase/remote-config-compat",fd="@firebase/storage",pd="@firebase/storage-compat",md="@firebase/firestore",gd="@firebase/ai",_d="@firebase/firestore-compat",yd="firebase",Ed="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]",vd={[hs]:"fire-core",[Wh]:"fire-core-compat",[Qh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Xh]:"fire-app-check",[Yh]:"fire-app-check-compat",[Jh]:"fire-auth",[Zh]:"fire-auth-compat",[td]:"fire-rtdb",[ed]:"fire-data-connect",[nd]:"fire-rtdb-compat",[rd]:"fire-fn",[sd]:"fire-fn-compat",[id]:"fire-iid",[od]:"fire-iid-compat",[ad]:"fire-fcm",[cd]:"fire-fcm-compat",[ld]:"fire-perf",[ud]:"fire-perf-compat",[hd]:"fire-rc",[dd]:"fire-rc-compat",[fd]:"fire-gcs",[pd]:"fire-gcs-compat",[md]:"fire-fst",[_d]:"fire-fst-compat",[gd]:"fire-vertex","fire-js":"fire-js",[yd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Map,Td=new Map,fs=new Map;function go(n,t){try{n.container.addComponent(t)}catch(e){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Qn(n){const t=n.name;if(fs.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;fs.set(t,n);for(const e of Kn.values())go(e,n);for(const e of Td.values())go(e,n);return!0}function Id(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function wd(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new oo("app","Firebase",Ad);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=Ed;function _o(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ds,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(e||(e=so()),!e)throw Yt.create("no-options");const o=Kn.get(s);if(o){if(Wn(e,o.options)&&Wn(r,o.config))return o;throw Yt.create("duplicate-app",{appName:s})}const a=new Vh(s);for(const h of fs.values())a.addComponent(h);const l=new bd(e,r,a);return Kn.set(s,l),l}function Sd(n=ds){const t=Kn.get(n);if(!t&&n===ds&&so())return _o();if(!t)throw Yt.create("no-app",{appName:n});return t}function Ne(n,t,e){var r;let s=(r=vd[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}Qn(new nn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="firebase-heartbeat-database",Pd=1,rn="firebase-heartbeat-store";let ps=null;function yo(){return ps||(ps=ls(Cd,Pd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(rn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Yt.create("idb-open",{originalErrorMessage:n.message})})),ps}async function Vd(n){try{const e=(await yo()).transaction(rn),r=await e.objectStore(rn).get(vo(n));return await e.done,r}catch(t){if(t instanceof Gn)Ut.warn(t.message);else{const e=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(e.message)}}}async function Eo(n,t){try{const r=(await yo()).transaction(rn,"readwrite");await r.objectStore(rn).put(t,vo(n)),await r.done}catch(e){if(e instanceof Gn)Ut.warn(e.message);else{const r=Yt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(r.message)}}}function vo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=1024,Nd=30;let kd=class{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Md(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=To();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Nd){const a=xd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=To(),{heartbeatsToSend:r,unsentEntries:s}=Od(this._heartbeatsCache.heartbeats),o=zn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ut.warn(e),""}}};function To(){return new Date().toISOString().substring(0,10)}function Od(n,t=Dd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Io(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Io(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}let Md=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ih()?wh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Vd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}};function Io(n){return zn(JSON.stringify({version:2,heartbeats:n})).length}function xd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n){Qn(new nn("platform-logger",t=>new zh(t),"PRIVATE")),Qn(new nn("heartbeat",t=>new kd(t),"PRIVATE")),Ne(hs,mo,n),Ne(hs,mo,"esm2017"),Ne("fire-js","")}Ld("");var Fd="firebase",$d="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne(Fd,$d,"app");var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xt,Ao;(function(){var n;/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */function t(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(E,T,A){for(var g=Array(arguments.length-2),Gt=2;Gt<arguments.length;Gt++)g[Gt-2]=arguments[Gt];return m.prototype[T].apply(E,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,_){_||(_=0);var E=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)E[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)E[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],T=v.g[2];var A=v.g[3],g=m+(A^_&(T^A))+E[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+E[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+E[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+E[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+E[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+E[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+E[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+E[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+E[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+E[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+E[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+E[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+E[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+E[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+E[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+E[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^A&(_^T))+E[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+E[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+E[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+E[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+E[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+E[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+E[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+E[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+E[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+E[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+E[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+E[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+E[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+E[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+E[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+E[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^A)+E[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+E[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+E[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+E[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+E[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+E[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+E[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+E[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+E[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+E[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+E[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+E[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+E[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+E[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+E[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+E[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~A))+E[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+E[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+E[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+E[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+E[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+E[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+E[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+E[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+E[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+E[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+E[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+E[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+E[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+E[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+E[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+E[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,E=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=_;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<m;)if(E[T++]=v.charCodeAt(A++),T==this.blockSize){s(this,E),T=0;break}}else for(;A<m;)if(E[T++]=v[A++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var E=0;32>E;E+=8)v[_++]=this.g[m]>>>E&255;return v};function o(v,m){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;for(var _=[],E=!0,T=v.length-1;0<=T;T--){var A=v[T]|0;E&&A==m||(_[T]=A,E=!1)}this.g=_}var l={};function h(v){return-128<=v&&128>v?o(v,function(m){return new a([m|0],0>m?-1:0)}):new a([v|0],0>v?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return y;if(0>v)return V(d(-v));for(var m=[],_=1,E=0;v>=_;E++)m[E]=v/_|0,_*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return V(p(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),E=y,T=0;T<v.length;T+=8){var A=Math.min(8,v.length-T),g=parseInt(v.substring(T,T+A),m);8>A?(A=d(Math.pow(m,A)),E=E.j(A).add(d(g))):(E=E.j(_),E=E.add(d(g)))}return E}var y=h(0),I=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-V(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var E=this.i(_);v+=(0<=E?E:4294967296+E)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(N(this))return"-"+V(this).toString(v);for(var m=d(Math.pow(v,6)),_=this,E="";;){var T=nt(_,m).g;_=B(_,T.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,P(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function N(v){return v.h==-1}n.l=function(v){return v=B(this,v),N(v)?-1:P(v)?0:1};function V(v){for(var m=v.g.length,_=[],E=0;E<m;E++)_[E]=~v.g[E];return new a(_,~v.h).add(I)}n.abs=function(){return N(this)?V(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0,T=0;T<=m;T++){var A=E+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);E=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(v,m){return v.add(V(m))}n.j=function(v){if(P(this)||P(v))return y;if(N(this))return N(v)?V(this).j(V(v)):V(V(this).j(v));if(N(v))return V(this.j(V(v)));if(0>this.l(S)&&0>v.l(S))return d(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],E=0;E<2*m;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<v.g.length;T++){var A=this.i(E)>>>16,g=this.i(E)&65535,Gt=v.i(T)>>>16,Cn=v.i(T)&65535;_[2*E+2*T]+=g*Cn,x(_,2*E+2*T),_[2*E+2*T+1]+=A*Cn,x(_,2*E+2*T+1),_[2*E+2*T+1]+=g*Gt,x(_,2*E+2*T+1),_[2*E+2*T+2]+=A*Gt,x(_,2*E+2*T+2)}for(E=0;E<m;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=m;E<2*m;E++)_[E]=0;return new a(_,0)};function x(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function q(v,m){this.g=v,this.h=m}function nt(v,m){if(P(m))throw Error("division by zero");if(P(v))return new q(y,y);if(N(v))return m=nt(V(v),m),new q(V(m.g),V(m.h));if(N(m))return m=nt(v,V(m)),new q(V(m.g),m.h);if(30<v.g.length){if(N(v)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,E=m;0>=E.l(v);)_=kt(_),E=kt(E);var T=lt(_,1),A=lt(E,1);for(E=lt(E,2),_=lt(_,2);!P(E);){var g=A.add(E);0>=g.l(v)&&(T=T.add(_),A=g),E=lt(E,1),_=lt(_,1)}return m=B(v,T.j(m)),new q(T,m)}for(T=y;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(_),g=A.j(m);N(g)||0<g.l(v);)_-=E,A=d(_),g=A.j(m);P(A)&&(A=I),T=T.add(A),v=B(v,g)}return new q(T,v)}n.A=function(v){return nt(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)&v.i(E);return new a(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)|v.i(E);return new a(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],E=0;E<m;E++)_[E]=this.i(E)^v.i(E);return new a(_,this.h^v.h)};function kt(v){for(var m=v.g.length+1,_=[],E=0;E<m;E++)_[E]=v.i(E)<<1|v.i(E-1)>>>31;return new a(_,v.h)}function lt(v,m){var _=m>>5;m%=32;for(var E=v.g.length-_,T=[],A=0;A<E;A++)T[A]=0<m?v.i(A+_)>>>m|v.i(A+_+1)<<32-m:v.i(A+_);return new a(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ao=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Xt=a}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var Yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bo,sn,Ro,Xn,ms,So,Co,Po;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,u){return i==Array.prototype||i==Object.prototype||(i[c]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yn=="object"&&Yn];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in u))break t;u=u[w]}i=i[i.length-1],f=u[i],c=c(f),c!=f&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var u=0,f=!1,w={next:function(){if(!f&&u<i.length){var b=u++;return{value:c(b,i[b]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,u){return u})}});/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */var a=a||{},l=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,u){return i.call.apply(i.bind,arguments)}function y(i,c,u){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(c,w)}}return function(){return i.apply(c,arguments)}}function I(i,c,u){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,I.apply(null,arguments)}function S(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function P(i,c){function u(){}u.prototype=c.prototype,i.aa=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(f,w,b){for(var D=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)D[Q-2]=arguments[Q];return c.prototype[w].apply(f,D)}}function N(i){const c=i.length;if(0<c){const u=Array(c);for(let f=0;f<c;f++)u[f]=i[f];return u}return[]}function V(i,c){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const w=i.length||0,b=f.length||0;i.length=w+b;for(let D=0;D<b;D++)i[w+D]=f[D]}else i.push(f)}}class B{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var kt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function lt(i,c,u){for(const f in i)c.call(u,i[f],f,i)}function v(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function m(i){const c={};for(const u in i)c[u]=i[u];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,c){let u,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(u in f)i[u]=f[u];for(let b=0;b<_.length;b++)u=_[b],Object.prototype.hasOwnProperty.call(f,u)&&(i[u]=f[u])}}function T(i){var c=1;i=i.split(":");const u=[];for(;0<c&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function A(i){l.setTimeout(()=>{throw i},0)}function g(){var i=Di;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class Gt{constructor(){this.h=this.g=null}add(c,u){const f=Cn.get();f.set(c,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Cn=new B(()=>new Zy,i=>i.reset());class Zy{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Pn,Vn=!1,Di=new Gt,Zl=()=>{const i=l.Promise.resolve(void 0);Pn=()=>{i.then(tE)}};var tE=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){A(u)}var c=Cn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}Vn=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var eE=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return i})();function Dn(i,c){if(Et.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(kt){t:{try{nt(c.nodeName);var w=!0;break t}catch{}w=!1}w||(c=null)}}else u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:nE[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Dn.aa.h.call(this)}}P(Dn,Et);var nE={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Lr="closure_listenable_"+(1e6*Math.random()|0),rE=0;function sE(i,c,u,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!f,this.ha=w,this.key=++rE,this.da=this.fa=!1}function Fr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function $r(i){this.src=i,this.g={},this.h=0}$r.prototype.add=function(i,c,u,f,w){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var D=ki(i,c,f,w);return-1<D?(c=i[D],u||(c.fa=!1)):(c=new sE(c,this.src,b,!!f,w),c.fa=u,i.push(c)),c};function Ni(i,c){var u=c.type;if(u in i.g){var f=i.g[u],w=Array.prototype.indexOf.call(f,c,void 0),b;(b=0<=w)&&Array.prototype.splice.call(f,w,1),b&&(Fr(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function ki(i,c,u,f){for(var w=0;w<i.length;++w){var b=i[w];if(!b.da&&b.listener==c&&b.capture==!!u&&b.ha==f)return w}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Mi={};function tu(i,c,u,f,w){if(Array.isArray(c)){for(var b=0;b<c.length;b++)tu(i,c[b],u,f,w);return null}return u=ru(u),i&&i[Lr]?i.K(c,u,d(f)?!!f.capture:!1,w):iE(i,c,u,!1,f,w)}function iE(i,c,u,f,w,b){if(!c)throw Error("Invalid event type");var D=d(w)?!!w.capture:!!w,Q=Li(i);if(Q||(i[Oi]=Q=new $r(i)),u=Q.add(c,u,f,D,b),u.proxy)return u;if(f=oE(),u.proxy=f,f.src=i,f.listener=u,i.addEventListener)eE||(w=D),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(nu(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function oE(){function i(u){return c.call(i.src,i.listener,u)}const c=aE;return i}function eu(i,c,u,f,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)eu(i,c[b],u,f,w);else f=d(f)?!!f.capture:!!f,u=ru(u),i&&i[Lr]?(i=i.i,c=String(c).toString(),c in i.g&&(b=i.g[c],u=ki(b,u,f,w),-1<u&&(Fr(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete i.g[c],i.h--)))):i&&(i=Li(i))&&(c=i.g[c.toString()],i=-1,c&&(i=ki(c,u,f,w)),(u=-1<i?c[i]:null)&&xi(u))}function xi(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Lr])Ni(c.i,i);else{var u=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(u,f,i.capture):c.detachEvent?c.detachEvent(nu(u),f):c.addListener&&c.removeListener&&c.removeListener(f),(u=Li(c))?(Ni(u,i),u.h==0&&(u.src=null,c[Oi]=null)):Fr(i)}}}function nu(i){return i in Mi?Mi[i]:Mi[i]="on"+i}function aE(i,c){if(i.da)i=!0;else{c=new Dn(c,this);var u=i.listener,f=i.ha||i.src;i.fa&&xi(i),i=u.call(f,c)}return i}function Li(i){return i=i[Oi],i instanceof $r?i:null}var Fi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(i){return typeof i=="function"?i:(i[Fi]||(i[Fi]=function(c){return i.handleEvent(c)}),i[Fi])}function vt(){ce.call(this),this.i=new $r(this),this.M=this,this.F=null}P(vt,ce),vt.prototype[Lr]=!0,vt.prototype.removeEventListener=function(i,c,u,f){eu(this,i,c,u,f)};function wt(i,c){var u,f=i.F;if(f)for(u=[];f;f=f.F)u.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new Et(c,i);else if(c instanceof Et)c.target=c.target||i;else{var w=c;c=new Et(f,i),E(c,w)}if(w=!0,u)for(var b=u.length-1;0<=b;b--){var D=c.g=u[b];w=Br(D,f,!0,c)&&w}if(D=c.g=i,w=Br(D,f,!0,c)&&w,w=Br(D,f,!1,c)&&w,u)for(b=0;b<u.length;b++)D=c.g=u[b],w=Br(D,f,!1,c)&&w}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var u=i.g[c],f=0;f<u.length;f++)Fr(u[f]);delete i.g[c],i.h--}}this.F=null},vt.prototype.K=function(i,c,u,f){return this.i.add(String(i),c,!1,u,f)},vt.prototype.L=function(i,c,u,f){return this.i.add(String(i),c,!0,u,f)};function Br(i,c,u,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,b=0;b<c.length;++b){var D=c[b];if(D&&!D.da&&D.capture==u){var Q=D.listener,mt=D.ha||D.src;D.fa&&Ni(i.i,D),w=Q.call(mt,f)!==!1&&w}}return w&&!f.defaultPrevented}function su(i,c,u){if(typeof i=="function")u&&(i=I(i,u));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function iu(i){i.g=su(()=>{i.g=null,i.i&&(i.i=!1,iu(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class cE extends ce{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nn(i){ce.call(this),this.h=i,this.g={}}P(Nn,ce);var ou=[];function au(i){lt(i.g,function(c,u){this.g.hasOwnProperty(u)&&xi(c)},i),i.g={}}Nn.prototype.N=function(){Nn.aa.N.call(this),au(this)},Nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $i=l.JSON.stringify,lE=l.JSON.parse,uE=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Bi(){}Bi.prototype.h=null;function cu(i){return i.h||(i.h=i.i())}function lu(){}var kn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ui(){Et.call(this,"d")}P(Ui,Et);function ji(){Et.call(this,"c")}P(ji,Et);var Se={},uu=null;function Ur(){return uu=uu||new vt}Se.La="serverreachability";function hu(i){Et.call(this,Se.La,i)}P(hu,Et);function On(i){const c=Ur();wt(c,new hu(c))}Se.STAT_EVENT="statevent";function du(i,c){Et.call(this,Se.STAT_EVENT,i),this.stat=c}P(du,Et);function At(i){const c=Ur();wt(c,new du(c,i))}Se.Ma="timingevent";function fu(i,c){Et.call(this,Se.Ma,i),this.size=c}P(fu,Et);function Mn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function xn(){this.g=!0}xn.prototype.xa=function(){this.g=!1};function hE(i,c,u,f,w,b){i.info(function(){if(i.g)if(b)for(var D="",Q=b.split("&"),mt=0;mt<Q.length;mt++){var W=Q[mt].split("=");if(1<W.length){var Tt=W[0];W=W[1];var It=Tt.split("_");D=2<=It.length&&It[1]=="type"?D+(Tt+"="+W+"&"):D+(Tt+"=redacted&")}}else D=null;else D=b;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+u+`
`+D})}function dE(i,c,u,f,w,b,D){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+u+`
`+b+" "+D})}function Xe(i,c,u,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+pE(i,u)+(f?" "+f:"")})}function fE(i,c){i.info(function(){return"TIMEOUT: "+c})}xn.prototype.info=function(){};function pE(i,c){if(!i.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var f=u[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var b=w[0];if(b!="noop"&&b!="stop"&&b!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return $i(u)}catch{return c}}var jr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qi;function qr(){}P(qr,Bi),qr.prototype.g=function(){return new XMLHttpRequest},qr.prototype.i=function(){return{}},qi=new qr;function le(i,c,u,f){this.j=i,this.i=c,this.l=u,this.R=f||1,this.U=new Nn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var gu={},Hi={};function zi(i,c,u){i.L=1,i.v=Wr(Wt(c)),i.m=u,i.P=!0,_u(i,null)}function _u(i,c){i.F=Date.now(),Hr(i),i.A=Wt(i.v);var u=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Du(u.i,"t",f),i.C=0,u=i.j.J,i.h=new mu,i.g=Qu(i.j,u?c:null,!i.m),0<i.O&&(i.M=new cE(I(i.Y,i,i.g),i.O)),c=i.U,u=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(ou[0]=w.toString()),w=ou);for(var b=0;b<w.length;b++){var D=tu(u,w[b],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),On(),hE(i.i,i.u,i.A,i.l,i.R,i.m)}le.prototype.ca=function(i){i=i.target;const c=this.M;c&&Kt(i)==3?c.j():this.Y(i)},le.prototype.Y=function(i){try{if(i==this.g)t:{const It=Kt(this.g);var c=this.g.Ba();const tn=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Fu(this.g)))){this.J||It!=4||c==7||(c==8||0>=tn?On(3):On(2)),Gi(this);var u=this.g.Z();this.X=u;e:if(yu(this)){var f=Fu(this.g);i="";var w=f.length,b=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ce(this),Ln(this);var D="";break e}this.h.i=new l.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(b&&c==w-1)});f.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,dE(this.i,this.u,this.A,this.l,this.R,It,u),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,mt=this.g;if((Q=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Q)){var W=Q;break e}}W=null}if(u=W)Xe(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wi(this,u);else{this.o=!1,this.s=3,At(12),Ce(this),Ln(this);break t}}if(this.P){u=!0;let Ot;for(;!this.J&&this.C<D.length;)if(Ot=mE(this,D),Ot==Hi){It==4&&(this.s=4,At(14),u=!1),Xe(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==gu){this.s=4,At(15),Xe(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else Xe(this.i,this.l,Ot,null),Wi(this,Ot);if(yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||D.length!=0||this.h.h||(this.s=1,At(16),u=!1),this.o=this.o&&u,!u)Xe(this.i,this.l,D,"[Invalid Chunked Response]"),Ce(this),Ln(this);else if(0<D.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Zi(Tt),Tt.M=!0,At(11))}}else Xe(this.i,this.l,D,null),Wi(this,D);It==4&&Ce(this),this.o&&!this.J&&(It==4?zu(this.j,this):(this.o=!1,Hr(this)))}else NE(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Ce(this),Ln(this)}}}catch{}finally{}};function yu(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function mE(i,c){var u=i.C,f=c.indexOf(`
`,u);return f==-1?Hi:(u=Number(c.substring(u,f)),isNaN(u)?gu:(f+=1,f+u>c.length?Hi:(c=c.slice(f,f+u),i.C=f+u,c)))}le.prototype.cancel=function(){this.J=!0,Ce(this)};function Hr(i){i.S=Date.now()+i.I,Eu(i,i.I)}function Eu(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Mn(I(i.ba,i),c)}function Gi(i){i.B&&(l.clearTimeout(i.B),i.B=null)}le.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(fE(this.i,this.A),this.L!=2&&(On(),At(17)),Ce(this),this.s=2,Ln(this)):Eu(this,this.S-i)};function Ln(i){i.j.G==0||i.J||zu(i.j,i)}function Ce(i){Gi(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,au(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Wi(i,c){try{var u=i.j;if(u.G!=0&&(u.g==i||Ki(u.h,i))){if(!i.K&&Ki(u.h,i)&&u.G==3){try{var f=u.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Zr(u),Xr(u);else break t;Ji(u),At(18)}}else u.za=w[1],0<u.za-u.T&&37500>w[2]&&u.F&&u.v==0&&!u.C&&(u.C=Mn(I(u.Za,u),6e3));if(1>=Iu(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ve(u,11)}else if((i.K||u.g==i)&&Zr(u),!x(c))for(w=u.Da.g.parse(c),c=0;c<w.length;c++){let W=w[c];if(u.T=W[0],W=W[1],u.G==2)if(W[0]=="c"){u.K=W[1],u.ia=W[2];const Tt=W[3];Tt!=null&&(u.la=Tt,u.j.info("VER="+u.la));const It=W[4];It!=null&&(u.Aa=It,u.j.info("SVER="+u.Aa));const tn=W[5];tn!=null&&typeof tn=="number"&&0<tn&&(f=1.5*tn,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Ot=i.g;if(Ot){const es=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(es){var b=f.h;b.g||es.indexOf("spdy")==-1&&es.indexOf("quic")==-1&&es.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Qi(b,b.h),b.h=null))}if(f.D){const to=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;to&&(f.ya=to,tt(f.I,f.D,to))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var D=i;if(f.qa=Ku(f,f.J?f.ia:null,f.W),D.K){wu(f.h,D);var Q=D,mt=f.L;mt&&(Q.I=mt),Q.B&&(Gi(Q),Hr(Q)),f.g=D}else qu(f);0<u.i.length&&Jr(u)}else W[0]!="stop"&&W[0]!="close"||Ve(u,7);else u.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Ve(u,7):Xi(u):W[0]!="noop"&&u.l&&u.l.ta(W),u.v=0)}}On(4)}catch{}}var gE=class{constructor(i,c){this.g=i,this.map=c}};function vu(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tu(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Iu(i){return i.h?1:i.g?i.g.size:0}function Ki(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Qi(i,c){i.g?i.g.add(c):i.h=c}function wu(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}vu.prototype.cancel=function(){if(this.i=Au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Au(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.D);return c}return N(i.i)}function _E(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],u=i.length,f=0;f<u;f++)c.push(i[f]);return c}c=[],u=0;for(f in i)c[u++]=i[f];return c}function yE(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var u=0;u<i;u++)c.push(u);return c}c=[],u=0;for(const f in i)c[u++]=f;return c}}}function bu(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var u=yE(i),f=_E(i),w=f.length,b=0;b<w;b++)c.call(void 0,f[b],u&&u[b],i)}var Ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function EE(i,c){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var f=i[u].indexOf("="),w=null;if(0<=f){var b=i[u].substring(0,f);w=i[u].substring(f+1)}else b=i[u];c(b,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Pe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Pe){this.h=i.h,zr(this,i.j),this.o=i.o,this.g=i.g,Gr(this,i.s),this.l=i.l;var c=i.i,u=new Bn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),Su(this,u),this.m=i.m}else i&&(c=String(i).match(Ru))?(this.h=!1,zr(this,c[1]||"",!0),this.o=Fn(c[2]||""),this.g=Fn(c[3]||"",!0),Gr(this,c[4]),this.l=Fn(c[5]||"",!0),Su(this,c[6]||"",!0),this.m=Fn(c[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}Pe.prototype.toString=function(){var i=[],c=this.j;c&&i.push($n(c,Cu,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push($n(c,Cu,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push($n(u,u.charAt(0)=="/"?IE:TE,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",$n(u,AE)),i.join("")};function Wt(i){return new Pe(i)}function zr(i,c,u){i.j=u?Fn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Gr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Su(i,c,u){c instanceof Bn?(i.i=c,bE(i.i,i.h)):(u||(c=$n(c,wE)),i.i=new Bn(c,i.h))}function tt(i,c,u){i.i.set(c,u)}function Wr(i){return tt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Fn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function $n(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,vE),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function vE(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Cu=/[#\/\?@]/g,TE=/[#\?:]/g,IE=/[#\?]/g,wE=/[#\?@]/g,AE=/#/g;function Bn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function ue(i){i.g||(i.g=new Map,i.h=0,i.i&&EE(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=Bn.prototype,n.add=function(i,c){ue(this),this.i=null,i=Je(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function Pu(i,c){ue(i),c=Je(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Vu(i,c){return ue(i),c=Je(i,c),i.g.has(c)}n.forEach=function(i,c){ue(this),this.g.forEach(function(u,f){u.forEach(function(w){i.call(c,w,f,this)},this)},this)},n.na=function(){ue(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let f=0;f<c.length;f++){const w=i[f];for(let b=0;b<w.length;b++)u.push(c[f])}return u},n.V=function(i){ue(this);let c=[];if(typeof i=="string")Vu(this,i)&&(c=c.concat(this.g.get(Je(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)c=c.concat(i[u])}return c},n.set=function(i,c){return ue(this),this.i=null,i=Je(this,i),Vu(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Du(i,c,u){Pu(i,c),0<u.length&&(i.i=null,i.g.set(Je(i,c),N(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var f=c[u];const b=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var w=b;D[f]!==""&&(w+="="+encodeURIComponent(String(D[f]))),i.push(w)}}return this.i=i.join("&")};function Je(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function bE(i,c){c&&!i.j&&(ue(i),i.i=null,i.g.forEach(function(u,f){var w=f.toLowerCase();f!=w&&(Pu(this,f),Du(this,w,u))},i)),i.j=c}function RE(i,c){const u=new xn;if(l.Image){const f=new Image;f.onload=S(he,u,"TestLoadImage: loaded",!0,c,f),f.onerror=S(he,u,"TestLoadImage: error",!1,c,f),f.onabort=S(he,u,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(he,u,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function SE(i,c){const u=new xn,f=new AbortController,w=setTimeout(()=>{f.abort(),he(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(w),b.ok?he(u,"TestPingServer: ok",!0,c):he(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),he(u,"TestPingServer: error",!1,c)})}function he(i,c,u,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(u)}catch{}}function CE(){this.g=new uE}function PE(i,c,u){const f=u||"";try{bu(i,function(w,b){let D=w;d(w)&&(D=$i(w)),c.push(f+b+"="+encodeURIComponent(D))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function Kr(i){this.l=i.Ub||null,this.j=i.eb||!1}P(Kr,Bi),Kr.prototype.g=function(){return new Qr(this.l,this.j)},Kr.prototype.i=(function(i){return function(){return i}})({});function Qr(i,c){vt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Qr,vt),n=Qr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,jn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nu(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nu(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Un(this):jn(this),this.readyState==3&&Nu(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Un(this))},n.Qa=function(i){this.g&&(this.response=i,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(i){i.readyState=4,i.l=null,i.j=null,i.v=null,jn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function jn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ku(i){let c="";return lt(i,function(u,f){c+=f,c+=":",c+=u,c+=`\r
`}),c}function Yi(i,c,u){t:{for(f in u){var f=!1;break t}f=!0}f||(u=ku(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):tt(i,c,u))}function rt(i){vt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(rt,vt);var VE=/^https?$/i,DE=["POST","PUT"];n=rt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qi.g(),this.v=this.o?cu(this.o):cu(qi),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){Ou(this,b);return}if(i=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)u.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())u.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),w=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(DE,c,void 0))||f||w||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of u)this.g.setRequestHeader(b,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Lu(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){Ou(this,b)}};function Ou(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,Mu(i),Yr(i)}function Mu(i){i.A||(i.A=!0,wt(i,"complete"),wt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,wt(this,"complete"),wt(this,"abort"),Yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yr(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?xu(this):this.bb())},n.bb=function(){xu(this)};function xu(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Kt(i)!=4||i.Z()!=2)){if(i.u&&Kt(i)==4)su(i.Ea,0,i);else if(wt(i,"readystatechange"),Kt(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var f;if(f=D===0){var w=String(i.D).match(Ru)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),f=!VE.test(w?w.toLowerCase():"")}u=f}if(u)wt(i,"complete"),wt(i,"success");else{i.m=6;try{var b=2<Kt(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",Mu(i)}}finally{Yr(i)}}}}function Yr(i,c){if(i.g){Lu(i);const u=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||wt(i,"ready");try{u.onreadystatechange=f}catch{}}}function Lu(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Kt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),lE(c)}};function Fu(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function NE(i){const c={};i=(i.g&&2<=Kt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(x(i[f]))continue;var u=T(i[f]);const w=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=c[w]||[];c[w]=b,b.push(u)}v(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function $u(i){this.Aa=0,this.i=[],this.j=new xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,i),this.cb=qn("retryDelaySeedMs",1e4,i),this.Wa=qn("forwardChannelMaxRetries",2,i),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new vu(i&&i.concurrentRequestLimit),this.Da=new CE,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=$u.prototype,n.la=8,n.G=1,n.connect=function(i,c,u,f){At(0),this.W=i,this.H=c||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Ku(this,null,this.W),Jr(this)};function Xi(i){if(Bu(i),i.G==3){var c=i.U++,u=Wt(i.I);if(tt(u,"SID",i.K),tt(u,"RID",c),tt(u,"TYPE","terminate"),Hn(i,u),c=new le(i,i.j,c),c.L=2,c.v=Wr(Wt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Qu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Hr(c)}Wu(i)}function Xr(i){i.g&&(Zi(i),i.g.cancel(),i.g=null)}function Bu(i){Xr(i),i.u&&(l.clearTimeout(i.u),i.u=null),Zr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Jr(i){if(!Tu(i.h)&&!i.s){i.s=!0;var c=i.Ga;Pn||Zl(),Vn||(Pn(),Vn=!0),Di.add(c,i),i.B=0}}function kE(i,c){return Iu(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Mn(I(i.Ga,i,c),Gu(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new le(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),E(b,this.S)):b=this.S),this.m!==null||this.O||(w.H=b,b=null),this.P)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=ju(this,w,c),u=Wt(this.I),tt(u,"RID",i),tt(u,"CVER",22),this.D&&tt(u,"X-HTTP-Session-Id",this.D),Hn(this,u),b&&(this.O?c="headers="+encodeURIComponent(String(ku(b)))+"&"+c:this.m&&Yi(u,this.m,b)),Qi(this.h,w),this.Ua&&tt(u,"TYPE","init"),this.P?(tt(u,"$req",c),tt(u,"SID","null"),w.T=!0,zi(w,u,null)):zi(w,u,c),this.G=2}}else this.G==3&&(i?Uu(this,i):this.i.length==0||Tu(this.h)||Uu(this))};function Uu(i,c){var u;c?u=c.l:u=i.U++;const f=Wt(i.I);tt(f,"SID",i.K),tt(f,"RID",u),tt(f,"AID",i.T),Hn(i,f),i.m&&i.o&&Yi(f,i.m,i.o),u=new le(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),c&&(i.i=c.D.concat(i.i)),c=ju(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Qi(i.h,u),zi(u,f,c)}function Hn(i,c){i.H&&lt(i.H,function(u,f){tt(c,f,u)}),i.l&&bu({},function(u,f){tt(c,f,u)})}function ju(i,c,u){u=Math.min(i.i.length,u);var f=i.l?I(i.l.Na,i.l,i):null;t:{var w=i.i;let b=-1;for(;;){const D=["count="+u];b==-1?0<u?(b=w[0].g,D.push("ofs="+b)):b=0:D.push("ofs="+b);let Q=!0;for(let mt=0;mt<u;mt++){let W=w[mt].g;const Tt=w[mt].map;if(W-=b,0>W)b=Math.max(0,w[mt].g-100),Q=!1;else try{PE(Tt,D,"req"+W+"_")}catch{f&&f(Tt)}}if(Q){f=D.join("&");break t}}}return i=i.i.splice(0,u),c.D=i,f}function qu(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;Pn||Zl(),Vn||(Pn(),Vn=!0),Di.add(c,i),i.v=0}}function Ji(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Mn(I(i.Fa,i),Gu(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Mn(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Xr(this),Hu(this))};function Zi(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function Hu(i){i.g=new le(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Wt(i.qa);tt(c,"RID","rpc"),tt(c,"SID",i.K),tt(c,"AID",i.T),tt(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&tt(c,"TO",i.ja),tt(c,"TYPE","xmlhttp"),Hn(i,c),i.m&&i.o&&Yi(c,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Wr(Wt(c)),u.m=null,u.P=!0,_u(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Xr(this),Ji(this),At(19))};function Zr(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function zu(i,c){var u=null;if(i.g==c){Zr(i),Zi(i),i.g=null;var f=2}else if(Ki(i.h,c))u=c.D,wu(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var w=i.B;f=Ur(),wt(f,new fu(f,u)),Jr(i)}else qu(i);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&kE(i,c)||f==2&&Ji(i)))switch(u&&0<u.length&&(c=i.h,c.i=c.i.concat(u)),w){case 1:Ve(i,5);break;case 4:Ve(i,10);break;case 3:Ve(i,6);break;default:Ve(i,2)}}}function Gu(i,c){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*c}function Ve(i,c){if(i.j.info("Error code "+c),c==2){var u=I(i.fb,i),f=i.Xa;const w=!f;f=new Pe(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zr(f,"https"),Wr(f),w?RE(f.toString(),u):SE(f.toString(),u)}else At(2);i.G=0,i.l&&i.l.sa(c),Wu(i),Bu(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Wu(i){if(i.G=0,i.ka=[],i.l){const c=Au(i.h);(c.length!=0||i.i.length!=0)&&(V(i.ka,c),V(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function Ku(i,c,u){var f=u instanceof Pe?Wt(u):new Pe(u);if(f.g!="")c&&(f.g=c+"."+f.g),Gr(f,f.s);else{var w=l.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var b=new Pe(null);f&&zr(b,f),c&&(b.g=c),w&&Gr(b,w),u&&(b.l=u),f=b}return u=i.D,c=i.ya,u&&c&&tt(f,u,c),tt(f,"VER",i.la),Hn(i,f),f}function Qu(i,c,u){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new rt(new Kr({eb:u})):new rt(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yu(){}n=Yu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ts(){}ts.prototype.g=function(i,c){return new St(i,c)};function St(i,c){vt.call(this),this.g=new $u(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!x(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Ze(this)}P(St,vt),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Xi(this.g)},St.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=$i(i),i=u);c.i.push(new gE(c.Ya++,i)),c.G==3&&Jr(c)},St.prototype.N=function(){this.g.l=null,delete this.j,Xi(this.g),delete this.g,St.aa.N.call(this)};function Xu(i){Ui.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}P(Xu,Ui);function Ju(){ji.call(this),this.status=1}P(Ju,ji);function Ze(i){this.g=i}P(Ze,Yu),Ze.prototype.ua=function(){wt(this.g,"a")},Ze.prototype.ta=function(i){wt(this.g,new Xu(i))},Ze.prototype.sa=function(i){wt(this.g,new Ju)},Ze.prototype.ra=function(){wt(this.g,"b")},ts.prototype.createWebChannel=ts.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,Po=function(){return new ts},Co=function(){return Ur()},So=Se,ms={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jr.NO_ERROR=0,jr.TIMEOUT=8,jr.HTTP_ERROR=6,Xn=jr,pu.COMPLETE="complete",Ro=pu,lu.EventType=kn,kn.OPEN="a",kn.CLOSE="b",kn.ERROR="c",kn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,sn=lu,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,bo=rt}).apply(typeof Yn<"u"?Yn:typeof self<"u"?self:typeof window<"u"?window:{});const Vo="@firebase/firestore",Do="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ke="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new co("@firebase/firestore");function Oe(){return fe.logLevel}function O(n,...t){if(fe.logLevel<=z.DEBUG){const e=t.map(gs);fe.debug(`Firestore (${ke}): ${n}`,...e)}}function jt(n,...t){if(fe.logLevel<=z.ERROR){const e=t.map(gs);fe.error(`Firestore (${ke}): ${n}`,...e)}}function Jt(n,...t){if(fe.logLevel<=z.WARN){const e=t.map(gs);fe.warn(`Firestore (${ke}): ${n}`,...e)}}function gs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,No(n,r,e)}function No(n,t,e){let r=`FIRESTORE (${ke}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw jt(r),new Error(r)}function K(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||No(t,s,r)}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Gn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class Ud{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class jd{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Zt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},l=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new ko(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class qd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Hd{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new qd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Oo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wd(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Oo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Oo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Gd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function ys(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return j(r,s);{const o=Mo(),a=Wd(o.encode(xo(n,e)),o.encode(xo(t,e)));return a!==0?a:j(r,s)}}e+=r>65535?2:1}return j(n.length,t.length)}function xo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Wd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return j(n[e],t[e]);return j(n.length,t.length)}function Me(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="__name__";class Mt{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Mt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Mt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Mt.isNumericId(t),s=Mt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Mt.extractNumericId(t).compare(Mt.extractNumericId(e)):ys(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xt.fromString(t.substring(4,t.length-2))}}class Y extends Mt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const Kd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Mt{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Kd.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Lo}static keyField(){return new dt([Lo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new k(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new k(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n,t,e){if(!e)throw new k(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Qd(n,t,e,r){if(t===!0&&r===!0)throw new k(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function $o(n){if(!M.isDocumentKey(n))throw new k(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bo(n){if(M.isDocumentKey(n))throw new k(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Uo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Jn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Zn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Jn(n);throw new k(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,t){const e={typeString:n};return t&&(e.value=t),e}function on(n,t){if(!Uo(n))throw new k(R.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(R.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=-62135596800,qo=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*qo);return new X(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<jo)throw new k(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qo}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(on(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-jo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:it("string",X._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(t){return new $(t)}static min(){return new $(new X(0,0))}static max(){return new $(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=-1;function Yd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new X(e+1,0):new X(e,r));return new te(s,M.empty(),t)}function Xd(n){return new te(n.readTime,n.key,an)}class te{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new te($.min(),M.empty(),an)}static max(){return new te($.max(),M.empty(),an)}}function Jd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Zd)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let s=0,o=0,a=!1;t.forEach((l=>{++s,l.next((()=>{++o,a&&o===s&&e()}),(h=>r(h)))})),a=!0,o===s&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((s=>s?C.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((p=>{a[d]=p,++l,l===o&&r(a)}),(p=>s(p)))}}))}static doWhile(t,e){return new C(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function ef(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Le(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}tr.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=-1;function er(n){return n==null}function nr(n){return n===0&&1/n==-1/0}function nf(n){return typeof n=="number"&&Number.isInteger(n)&&!nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="";function rf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=zo(t)),t=sf(n.get(e),t);return zo(t)}function sf(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Ho:e+="";break;default:e+=o}}return e}function zo(n){return n+Ho+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function pe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||ft.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ft.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rr(this.root,t,this.comparator,!1)}getReverseIterator(){return new rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rr(this.root,t,this.comparator,!0)}}class rr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ft{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=o??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ft(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1,ft.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ko(this.data.getIterator())}getIteratorFrom(t){return new Ko(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ct)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ct(this.comparator);return e.data=t,e}}class Ko{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Dt([])}unionWith(t){let e=new ct(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Dt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Me(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Qo("Invalid base64 string: "+o):o}})(t);return new pt(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(t);return new pt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const of=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=of.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ne(n){return typeof n=="string"?pt.fromBase64String(n):pt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="server_timestamp",Xo="__type__",Jo="__previous_value__",Zo="__local_write_time__";function vs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Xo])===null||e===void 0?void 0:e.stringValue)===Yo}function sr(n){const t=n.mapValue.fields[Jo];return vs(t)?sr(t):t}function cn(n){const t=ee(n.mapValue.fields[Zo].timestampValue);return new X(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e,r,s,o,a,l,h,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const ir="(default)";class ln{constructor(t,e){this.projectId=t,this.database=e||ir}static empty(){return new ln("","")}get isDefaultDatabase(){return this.database===ir}isEqual(t){return t instanceof ln&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="__type__",cf="__max__",or={mapValue:{}},ea="__vector__",ar="value";function re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vs(n)?4:uf(n)?9007199254740991:lf(n)?10:11:F(28295,{value:n})}function xt(n,t){if(n===t)return!0;const e=re(n);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return cn(n).isEqual(cn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ee(s.timestampValue),l=ee(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ne(s.bytesValue).isEqual(ne(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),l=st(o.doubleValue);return a===l?nr(a)===nr(l):isNaN(a)&&isNaN(l)}return!1})(n,t);case 9:return Me(n.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Go(a)!==Go(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!xt(a[h],l[h])))return!1;return!0})(n,t);default:return F(52216,{left:n})}}function un(n,t){return(n.values||[]).find((e=>xt(e,t)))!==void 0}function Fe(n,t){if(n===t)return 0;const e=re(n),r=re(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return(function(o,a){const l=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return na(n.timestampValue,t.timestampValue);case 4:return na(cn(n),cn(t));case 5:return ys(n.stringValue,t.stringValue);case 6:return(function(o,a){const l=ne(o),h=ne(a);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,a){const l=o.split("/"),h=a.split("/");for(let d=0;d<l.length&&d<h.length;d++){const p=j(l[d],h[d]);if(p!==0)return p}return j(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,a){const l=j(st(o.latitude),st(a.latitude));return l!==0?l:j(st(o.longitude),st(a.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return ra(n.arrayValue,t.arrayValue);case 10:return(function(o,a){var l,h,d,p;const y=o.fields||{},I=a.fields||{},S=(l=y[ar])===null||l===void 0?void 0:l.arrayValue,P=(h=I[ar])===null||h===void 0?void 0:h.arrayValue,N=j(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:ra(S,P)})(n.mapValue,t.mapValue);case 11:return(function(o,a){if(o===or.mapValue&&a===or.mapValue)return 0;if(o===or.mapValue)return 1;if(a===or.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const I=ys(h[y],p[y]);if(I!==0)return I;const S=Fe(l[h[y]],d[p[y]]);if(S!==0)return S}return j(h.length,p.length)})(n.mapValue,t.mapValue);default:throw F(23264,{le:e})}}function na(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=ee(n),r=ee(t),s=j(e.seconds,r.seconds);return s!==0?s:j(e.nanos,r.nanos)}function ra(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Fe(e[s],r[s]);if(o)return o}return j(e.length,r.length)}function $e(n){return Ts(n)}function Ts(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ee(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ne(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ts(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Ts(e.fields[a])}`;return s+"}"})(n.mapValue):F(61005,{value:n})}function cr(n){switch(re(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=sr(n);return t?16+cr(t):16;case 5:return 2*n.stringValue.length;case 6:return ne(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+cr(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return pe(r.fields,((o,a)=>{s+=o.length+cr(a)})),s})(n.mapValue);default:throw F(13486,{value:n})}}function sa(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Is(n){return!!n&&"integerValue"in n}function ws(n){return!!n&&"arrayValue"in n}function ia(n){return!!n&&"nullValue"in n}function oa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lr(n){return!!n&&"mapValue"in n}function lf(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[ta])===null||e===void 0?void 0:e.stringValue)===ea}function hn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return pe(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=hn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=hn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function uf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===cf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!lr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=hn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach(((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=hn(a):s.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());lr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];lr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){pe(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Ct(hn(this.value))}}function aa(n){const t=[];return pe(n.fields,((e,r)=>{const s=new dt([e]);if(lr(r)){const o=aa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)})),new Dt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new _t(t,0,$.min(),$.min(),$.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,$.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,$.min(),$.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,$.min(),$.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.position=t,this.inclusive=e}}function ca(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Fe(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function la(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!xt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e="asc"){this.field=t,this.dir=e}}function hf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{}class ot extends ua{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ff(t,e,r):e==="array-contains"?new gf(t,r):e==="in"?new _f(t,r):e==="not-in"?new yf(t,r):e==="array-contains-any"?new Ef(t,r):new ot(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new pf(t,r):new mf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Fe(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(Fe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends ua{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Nt(t,e)}matches(t){return ha(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ha(n){return n.op==="and"}function da(n){return df(n)&&ha(n)}function df(n){for(const t of n.filters)if(t instanceof Nt)return!1;return!0}function As(n){if(n instanceof ot)return n.field.canonicalString()+n.op.toString()+$e(n.value);if(da(n))return n.filters.map((t=>As(t))).join(",");{const t=n.filters.map((e=>As(e))).join(",");return`${n.op}(${t})`}}function fa(n,t){return n instanceof ot?(function(r,s){return s instanceof ot&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)})(n,t):n instanceof Nt?(function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,l)=>o&&fa(a,s.filters[l])),!0):!1})(n,t):void F(19439)}function pa(n){return n instanceof ot?(function(e){return`${e.field.canonicalString()} ${e.op} ${$e(e.value)}`})(n):n instanceof Nt?(function(e){return e.op.toString()+" {"+e.getFilters().map(pa).join(" ,")+"}"})(n):"Filter"}class ff extends ot{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class pf extends ot{constructor(t,e){super(t,"in",e),this.keys=ma("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class mf extends ot{constructor(t,e){super(t,"not-in",e),this.keys=ma("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ma(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>M.fromName(r.referenceValue)))}class gf extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ws(e)&&un(e.arrayValue,this.value)}}class _f extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&un(this.value.arrayValue,e)}}class yf extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!un(this.value.arrayValue,e)}}class Ef extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ws(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>un(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.Pe=null}}function ga(n,t=null,e=[],r=[],s=null,o=null,a=null){return new vf(n,t,e,r,s,o,a)}function bs(n){const t=U(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>As(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),er(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>$e(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>$e(r))).join(",")),t.Pe=e}return t.Pe}function Rs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!hf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!fa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!la(n.startAt,t.startAt)&&la(n.endAt,t.endAt)}function Ss(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Tf(n,t,e,r,s,o,a,l){return new Be(n,t,e,r,s,o,a,l)}function _a(n){return new Be(n)}function ya(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ea(n){return n.collectionGroup!==null}function fn(n){const t=U(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ct(dt.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new dn(o,r))})),e.has(dt.keyField().canonicalString())||t.Te.push(new dn(dt.keyField(),r))}return t.Te}function Lt(n){const t=U(n);return t.Ie||(t.Ie=If(t,fn(n))),t.Ie}function If(n,t){if(n.limitType==="F")return ga(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new dn(s.field,o)}));const e=n.endAt?new ur(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ur(n.startAt.position,n.startAt.inclusive):null;return ga(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Cs(n,t){const e=n.filters.concat([t]);return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Ps(n,t,e){return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function hr(n,t){return Rs(Lt(n),Lt(t))&&n.limitType===t.limitType}function va(n){return`${bs(Lt(n))}|lt:${n.limitType}`}function Ue(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>pa(s))).join(", ")}]`),er(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>$e(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>$e(s))).join(",")),`Target(${r})`})(Lt(n))}; limitType=${n.limitType})`}function dr(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of fn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(a,l,h){const d=ca(a,l,h);return a.inclusive?d<=0:d<0})(r.startAt,fn(r),s)||r.endAt&&!(function(a,l,h){const d=ca(a,l,h);return a.inclusive?d>=0:d>0})(r.endAt,fn(r),s))})(n,t)}function wf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ta(n){return(t,e)=>{let r=!1;for(const s of fn(n)){const o=Af(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Af(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,a,l){const h=a.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Fe(h,d):F(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){pe(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Wo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new et(M.comparator);function qt(){return bf}const Ia=new et(M.comparator);function pn(...n){let t=Ia;for(const e of n)t=t.insert(e.key,e);return t}function wa(n){let t=Ia;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function ge(){return mn()}function Aa(){return mn()}function mn(){return new me((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Rf=new et(M.comparator),Sf=new ct(M.comparator);function H(...n){let t=Sf;for(const e of n)t=t.add(e);return t}const Cf=new ct(j);function Pf(){return Cf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nr(t)?"-0":t}}function ba(n){return{integerValue:""+n}}function Vf(n,t){return nf(t)?ba(t):Vs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function Df(n,t,e){return n instanceof pr?(function(s,o){const a={fields:{[Xo]:{stringValue:Yo},[Zo]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&vs(o)&&(o=sr(o)),o&&(a.fields[Jo]=o),{mapValue:a}})(e,t):n instanceof gn?Sa(n,t):n instanceof _n?Ca(n,t):(function(s,o){const a=Ra(s,o),l=Pa(a)+Pa(s.Ee);return Is(a)&&Is(s.Ee)?ba(l):Vs(s.serializer,l)})(n,t)}function Nf(n,t,e){return n instanceof gn?Sa(n,t):n instanceof _n?Ca(n,t):e}function Ra(n,t){return n instanceof mr?(function(r){return Is(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class pr extends fr{}class gn extends fr{constructor(t){super(),this.elements=t}}function Sa(n,t){const e=Va(t);for(const r of n.elements)e.some((s=>xt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class _n extends fr{constructor(t){super(),this.elements=t}}function Ca(n,t){let e=Va(t);for(const r of n.elements)e=e.filter((s=>!xt(s,r)));return{arrayValue:{values:e}}}class mr extends fr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Pa(n){return st(n.integerValue||n.doubleValue)}function Va(n){return ws(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function kf(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof gn&&s instanceof gn||r instanceof _n&&s instanceof _n?Me(r.elements,s.elements,xt):r instanceof mr&&s instanceof mr?xt(r.Ee,s.Ee):r instanceof pr&&s instanceof pr})(n.transform,t.transform)}class Of{constructor(t,e){this.version=t,this.transformResults=e}}class Ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ht}static exists(t){return new Ht(void 0,t)}static updateTime(t){return new Ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class _r{}function Da(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new xa(n.key,Ht.none()):new En(n.key,n.data,Ht.none());{const e=n.data,r=Ct.empty();let s=new ct(dt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new _e(n.key,r,new Dt(s.toArray()),Ht.none())}}function Mf(n,t,e){n instanceof En?(function(s,o,a){const l=s.value.clone(),h=Oa(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,t,e):n instanceof _e?(function(s,o,a){if(!gr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=Oa(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(ka(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function yn(n,t,e,r){return n instanceof En?(function(o,a,l,h){if(!gr(o.precondition,a))return l;const d=o.value.clone(),p=Ma(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof _e?(function(o,a,l,h){if(!gr(o.precondition,a))return l;const d=Ma(o.fieldTransforms,h,a),p=a.data;return p.setAll(ka(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(n,t,e,r):(function(o,a,l){return gr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,t,e)}function xf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Ra(r.transform,s||null);o!=null&&(e===null&&(e=Ct.empty()),e.set(r.field,o))}return e||null}function Na(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Me(r,s,((o,a)=>kf(o,a)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class En extends _r{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _e extends _r{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ka(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Oa(n,t,e){const r=new Map;K(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Nf(a,l,e[s]))}return r}function Ma(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Df(o,a,t))}return r}class xa extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lf extends _r{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Mf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Aa();return this.mutations.forEach((s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=Da(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument($.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),H())}isEqual(t){return this.batchId===t.batchId&&Me(this.mutations,t.mutations,((e,r)=>Na(e,r)))&&Me(this.baseMutations,t.baseMutations,((e,r)=>Na(e,r)))}}class Ds{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){K(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=(function(){return Rf})();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ds(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,G;function Uf(n){switch(n){case R.OK:return F(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function La(n){if(n===void 0)return jt("GRPC error has no .code"),R.UNKNOWN;switch(n){case at.OK:return R.OK;case at.CANCELLED:return R.CANCELLED;case at.UNKNOWN:return R.UNKNOWN;case at.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case at.INTERNAL:return R.INTERNAL;case at.UNAVAILABLE:return R.UNAVAILABLE;case at.UNAUTHENTICATED:return R.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case at.NOT_FOUND:return R.NOT_FOUND;case at.ALREADY_EXISTS:return R.ALREADY_EXISTS;case at.PERMISSION_DENIED:return R.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case at.ABORTED:return R.ABORTED;case at.OUT_OF_RANGE:return R.OUT_OF_RANGE;case at.UNIMPLEMENTED:return R.UNIMPLEMENTED;case at.DATA_LOSS:return R.DATA_LOSS;default:return F(39323,{code:n})}}(G=at||(at={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Xt([4294967295,4294967295],0);function Fa(n){const t=Mo().encode(n),e=new Ao;return e.update(t),new Uint8Array(e.digest())}function $a(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Xt([e,r],0),new Xt([s,o],0)]}class Ns{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new vn(`Invalid padding: ${e}`);if(r<0)throw new vn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new vn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Xt.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(Xt.fromNumber(r)));return s.compare(jf)===1&&(s=new Xt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Fa(t),[r,s]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ns(o,s,e);return r.forEach((l=>a.insert(l))),a}insert(t){if(this.fe===0)return;const e=Fa(t),[r,s]=$a(e);for(let o=0;o<this.hashCount;o++){const a=this.pe(r,s,o);this.we(a)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Tn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new yr($.min(),s,new et(j),qt(),H())}}class Tn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Tn(r,e,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class Ba{constructor(t,e){this.targetId=t,this.De=e}}class Ua{constructor(t,e,r=pt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ja{constructor(){this.ve=0,this.Ce=qa(),this.Fe=pt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=H(),e=H(),r=H();return this.Ce.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:o})}})),new Tn(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=qa()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class qf{constructor(t){this.We=t,this.Ge=new Map,this.ze=qt(),this.je=vr(),this.Je=vr(),this.He=new et(j)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:F(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((r,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(Ss(o))if(r===0){const a=new M(o.path);this.Xe(e,a,_t.newNoDocument(a,$.min()))}else K(r===1,20013,{expectedCount:r});else{const a=this.ot(e);if(a!==r){const l=this._t(t),h=l?this.ut(l,t,a):1;if(h!==0){this.rt(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=ne(r).toUint8Array()}catch(h){if(h instanceof Qo)return Jt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Ns(a,s,o)}catch(h){return Jt(h instanceof vn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.fe===0?null:l}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Xe(e,o,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((o,a)=>{const l=this.st(a);if(l){if(o.current&&Ss(l.target)){const h=new M(l.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,_t.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}}));let r=H();this.Je.forEach(((o,a)=>{let l=!0;a.forEachWhile((h=>{const d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.ze.forEach(((o,a)=>a.setReadTime(t)));const s=new yr(t,e,this.He,this.ze,r);return this.ze=qt(),this.je=vr(),this.Je=vr(),this.He=new et(j),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new ja,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ct(j),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ct(j),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new ja),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function vr(){return new et(M.comparator)}function qa(){return new et(M.comparator)}const Hf={asc:"ASCENDING",desc:"DESCENDING"},zf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gf={and:"AND",or:"OR"};class Wf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ks(n,t){return n.useProto3Json||er(t)?t:{value:t}}function Tr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ha(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Kf(n,t){return Tr(n,t.toTimestamp())}function Ft(n){return K(!!n,49232),$.fromTimestamp((function(e){const r=ee(e);return new X(r.seconds,r.nanos)})(n))}function Os(n,t){return Ms(n,t).canonicalString()}function Ms(n,t){const e=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function za(n){const t=Y.fromString(n);return K(Xa(t),10190,{key:t.toString()}),t}function xs(n,t){return Os(n.databaseId,t.path)}function Ls(n,t){const e=za(t);if(e.get(1)!==n.databaseId.projectId)throw new k(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Wa(e))}function Ga(n,t){return Os(n.databaseId,t)}function Qf(n){const t=za(n);return t.length===4?Y.emptyPath():Wa(t)}function Fs(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wa(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ka(n,t,e){return{name:xs(n,t),fields:e.value.mapValue.fields}}function Yf(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(K(p===void 0||typeof p=="string",58123),pt.fromBase64String(p||"")):(K(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pt.fromUint8Array(p||new Uint8Array))})(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&(function(d){const p=d.code===void 0?R.UNKNOWN:La(d.code);return new k(p,d.message||"")})(a);e=new Ua(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ls(n,r.document.name),o=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):$.min(),l=new Ct({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];e=new Er(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ls(n,r.document),o=r.readTime?Ft(r.readTime):$.min(),a=_t.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Er([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ls(n,r.document),o=r.removedTargetIds||[];e=new Er([],o,s,null)}else{if(!("filter"in t))return F(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Bf(s,o),l=r.targetId;e=new Ba(l,a)}}return e}function Xf(n,t){let e;if(t instanceof En)e={update:Ka(n,t.key,t.value)};else if(t instanceof xa)e={delete:xs(n,t.key)};else if(t instanceof _e)e={update:Ka(n,t.key,t.data),updateMask:op(t.fieldMask)};else{if(!(t instanceof Lf))return F(16599,{Rt:t.type});e={verify:xs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,a){const l=a.transform;if(l instanceof pr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof gn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof _n)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mr)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw F(20930,{transform:a.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Kf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:F(27497)})(n,t.precondition)),e}function Jf(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map((e=>(function(s,o){let a=s.updateTime?Ft(s.updateTime):Ft(o);return a.isEqual($.min())&&(a=Ft(o)),new Of(a,s.transformResults||[])})(e,t)))):[]}function Zf(n,t){return{documents:[Ga(n,t.path)]}}function tp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ga(n,s);const o=(function(d){if(d.length!==0)return Ya(Nt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(I){return{field:je(I.field),direction:rp(I.dir)}})(p)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=ks(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:s}}function ep(n){let t=Qf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){K(r===1,65062);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=(function(y){const I=Qa(y);return I instanceof Nt&&da(I)?I.getFilters():[I]})(e.where));let a=[];e.orderBy&&(a=(function(y){return y.map((I=>(function(P){return new dn(qe(P.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(P.direction))})(I)))})(e.orderBy));let l=null;e.limit&&(l=(function(y){let I;return I=typeof y=="object"?y.value:y,er(I)?null:I})(e.limit));let h=null;e.startAt&&(h=(function(y){const I=!!y.before,S=y.values||[];return new ur(S,I)})(e.startAt));let d=null;return e.endAt&&(d=(function(y){const I=!y.before,S=y.values||[];return new ur(S,I)})(e.endAt)),Tf(t,s,a,o,l,"F",h,d)}function np(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Qa(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=qe(e.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=qe(e.unaryFilter.field);return ot.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=qe(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qe(e.unaryFilter.field);return ot.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(e){return ot.create(qe(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Nt.create(e.compositeFilter.filters.map((r=>Qa(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(e.compositeFilter.op))})(n):F(30097,{filter:n})}function rp(n){return Hf[n]}function sp(n){return zf[n]}function ip(n){return Gf[n]}function je(n){return{fieldPath:n.canonicalString()}}function qe(n){return dt.fromServerFormat(n.fieldPath)}function Ya(n){return n instanceof ot?(function(e){if(e.op==="=="){if(oa(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NAN"}};if(ia(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(oa(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NOT_NAN"}};if(ia(e.value))return{unaryFilter:{field:je(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:je(e.field),op:sp(e.op),value:e.value}}})(n):n instanceof Nt?(function(e){const r=e.getFilters().map((s=>Ya(s)));return r.length===1?r[0]:{compositeFilter:{op:ip(e.op),filters:r}}})(n):F(54877,{filter:n})}function op(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Xa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e,r,s,o=$.min(),a=$.min(),l=pt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t){this.gt=t}}function cp(n){const t=ep({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ps(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.Dn=new up}addToCollectionParentIndex(t,e){return this.Dn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(te.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class up{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ct(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ct(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Za=41943040;class bt{static withCacheSize(t){return new bt(t,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(Za,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new He(0)}static ur(){return new He(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="LruGarbageCollector",hp=1048576;function ec([n,t],[e,r]){const s=j(n,e);return s===0?j(t,r):s}class dp{constructor(t){this.Tr=t,this.buffer=new ct(ec),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ec(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class fp{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){O(tc,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Le(e)?O(tc,"Ignoring IndexedDB error during garbage collection: ",e):await xe(e)}await this.Rr(3e5)}))}}class pp{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(tr.ue);const r=new dp(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Ja)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ja):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,l,h,d;const p=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s)))).next((y=>(r=y,l=Date.now(),this.removeTargets(t,r,e)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((y=>(d=Date.now(),Oe()<=z.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y}))))}}function mp(n,t){return new pp(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.changes=new me((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&yn(r.mutation,s,Dt.empty(),X.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,H()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=H()){const s=ge();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let a=pn();return o.forEach(((l,h)=>{a=a.insert(l,h.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const r=ge();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,H())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((a,l)=>{e.set(a,l)}))}))}computeViews(t,e,r,s){let o=qt();const a=mn(),l=(function(){return mn()})();return e.forEach(((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof _e)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),yn(p.mutation,d,p.mutation.getFieldMask(),X.now())):a.set(d.key,Dt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,p)=>a.set(d,p))),e.forEach(((d,p)=>{var y;return l.set(d,new _p(p,(y=a.get(d))!==null&&y!==void 0?y:null))})),l)))}recalculateAndSaveOverlays(t,e){const r=mn();let s=new et(((a,l)=>a-l)),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const l of a)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Dt.empty();p=l.applyToLocalView(d,p),r.set(h,p);const y=(s.get(l.batchId)||H()).add(h);s=s.insert(l.batchId,y)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,p=h.value,y=Aa();p.forEach((I=>{if(!o.has(I)){const S=Da(e.get(I),r.get(I));S!==null&&y.set(I,S),o=o.add(I)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ea(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(ge());let l=an,h=o;return a.next((d=>C.forEach(d,((p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),o.get(p)?C.resolve():this.remoteDocumentCache.getEntry(t,p).next((I=>{h=h.insert(p,I)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,H()))).next((p=>({batchId:l,changes:wa(p)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let s=pn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=pn();return this.indexManager.getCollectionParents(t,o).next((l=>C.forEach(l,(h=>{const d=(function(y,I){return new Be(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next((p=>{p.forEach(((y,I)=>{a=a.insert(y,I)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,_t.newInvalidDocument(p)))}));let l=pn();return a.forEach(((h,d)=>{const p=o.get(h);p!==void 0&&yn(p.mutation,d,Dt.empty(),X.now()),dr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return C.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:cp(s.bundledQuery),readTime:Ft(s.readTime)}})(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.overlays=new et(M.comparator),this.kr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ge();return C.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=ge(),o=e.length+1,a=new M(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new et(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=ge(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=ge(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,p)=>l.set(d,p))),!(l.size()>=s)););return C.resolve(l)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new $f(e,r));let o=this.kr.get(e);o===void 0&&(o=H(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.qr=new ct(ut.Qr),this.$r=new ct(ut.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new ut(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new ut(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new M(new Y([])),r=new ut(e,t),s=new ut(e,t+1),o=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new M(new Y([])),r=new ut(e,t),s=new ut(e,t+1);let o=H();return this.$r.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(t){const e=new ut(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ut{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return M.comparator(t.key,e.key)||j(t.Hr,e.Hr)}static Ur(t,e){return j(t.Hr,e.Hr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ct(ut.Qr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ff(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new ut(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(t,e){return C.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?Es:this.er-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ut(e,0),s=new ut(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);o.push(l)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ct(j);return e.forEach((s=>{const o=new ut(s,0),a=new ut(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],(l=>{r=r.add(l.Hr)}))})),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ut(new M(o),0);let l=new ct(j);return this.Yr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(h.Hr)),!0)}),a),C.resolve(this.ei(l))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){K(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(e.mutations,(s=>{const o=new ut(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new ut(e,0),s=this.Yr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(t){this.ni=t,this.docs=(function(){return new et(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const a=e.path,l=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Jd(Xd(p),r)<=0||(s.has(p.key)||dr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){F(9500)}ri(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Ap(this)}getSize(t){return C.resolve(this.size)}}class Ap extends gp{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t){this.persistence=t,this.ii=new me((e=>bs(e)),Rs),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.si=0,this.oi=new $s,this.targetCount=0,this._i=He.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),C.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new He(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.hr(e),C.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)})),C.waitFor(o).next((()=>s))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((a=>{o.push(s.markPotentiallyOrphaned(t,a))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.ai={},this.overlays={},this.ui=new tr(0),this.ci=!1,this.ci=!0,this.li=new Tp,this.referenceDelegate=t(this),this.hi=new bp(this),this.indexManager=new lp,this.remoteDocumentCache=(function(s){return new wp(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new ap(e),this.Ti=new Ep(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Ip(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){O("MemoryPersistence","Starting transaction:",t);const s=new Rp(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return C.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class Rp extends tf{constructor(t){super(),this.currentSequenceNumber=t}}class Bs{constructor(t){this.persistence=t,this.Ai=new $s,this.Ri=null}static Vi(t){return new Bs(t)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,(r=>{const s=M.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,$.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return C.or([()=>C.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Ir{constructor(t,e){this.persistence=t,this.gi=new me((r=>rf(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=mp(this,e)}static Vi(t,e){return new Ir(t,e)}Ii(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return C.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?C.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(a=>this.Sr(t,a,e).next((l=>{l||(r++,o.removeEntry(a,$.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=cr(t.data.value)),e}Sr(t,e,r){return C.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=H(),s=H();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Us(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Th()?8:ef(Eh())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Sp;return this.ws(t,e,a).next((l=>{if(o.result=l,this.Rs)return this.Ss(t,e,a,l.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(Oe()<=z.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(Oe()<=z.DEBUG&&O("QueryEngine","Query:",Ue(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Oe()<=z.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Lt(e))):C.resolve())}ps(t,e){if(ya(e))return C.resolve(null);let r=Lt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ps(e,null,"F"),r=Lt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const a=H(...o);return this.gs.getDocuments(t,a).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.bs(e,l);return this.Ds(e,d,a,h.readTime)?this.ps(t,Ps(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ys(t,e,r,s){return ya(e)||s.isEqual($.min())?C.resolve(null):this.gs.getDocuments(t,r).next((o=>{const a=this.bs(e,o);return this.Ds(e,a,r,s)?C.resolve(null):(Oe()<=z.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ue(e)),this.vs(t,a,e,Yd(s,an)).next((l=>l)))}))}bs(t,e){let r=new ct(Ta(t));return e.forEach(((s,o)=>{dr(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return Oe()<=z.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Ue(e)),this.gs.getDocumentsMatchingQuery(t,e,te.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="LocalStore",Pp=3e8;class Vp{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new et(j),this.Ms=new me((o=>bs(o)),Rs),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yp(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function Dp(n,t,e,r){return new Vp(n,t,e,r)}async function rc(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],l=[];let h=H();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:l})))}))}))}function Np(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,p){const y=d.batch,I=y.keys();let S=C.resolve();return I.forEach((P=>{S=S.next((()=>p.getEntry(h,P))).next((N=>{const V=d.docVersions.get(P);K(V!==null,48541),N.version.compareTo(V)<0&&(y.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(h,y)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=H();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function sc(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function kp(n,t){const e=U(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const l=[];t.targetChanges.forEach(((p,y)=>{const I=s.get(y);if(!I)return;l.push(e.hi.removeMatchingKeys(o,p.removedDocuments,y).next((()=>e.hi.addMatchingKeys(o,p.addedDocuments,y))));let S=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?S=S.withResumeToken(pt.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(y,S),(function(N,V,B){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Pp?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(I,S,p)&&l.push(e.hi.updateTargetData(o,S))}));let h=qt(),d=H();if(t.documentUpdates.forEach((p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))})),l.push(Op(o,a,t.documentUpdates).next((p=>{h=p.Ls,d=p.ks}))),!r.isEqual($.min())){const p=e.hi.getLastRemoteSnapshotVersion(o).next((y=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(p)}return C.waitFor(l).next((()=>a.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Fs=s,o)))}function Op(n,t,e){let r=H(),s=H();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let a=qt();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual($.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):O(js,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{Ls:a,ks:s}}))}function Mp(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Es),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function xp(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.hi.getTargetData(r,t).next((o=>o?(s=o,C.resolve(s)):e.hi.allocateTargetId(r).next((a=>(s=new se(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r}))}async function qs(n,t,e){const r=U(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Le(a))throw a;O(js,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function ic(n,t,e){const r=U(n);let s=$.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,p){const y=U(h),I=y.Ms.get(p);return I!==void 0?C.resolve(y.Fs.get(I)):y.hi.getTargetData(d,p)})(r,a,Lt(t)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:$.min(),e?o:H()))).next((l=>(Lp(r,wf(t),l),{documents:l,qs:o})))))}function Lp(n,t,e){let r=n.xs.get(t)||$.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(t,r)}class oc{constructor(){this.activeTargetIds=Pf()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fp{constructor(){this.Fo=new oc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new oc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="ConnectivityMonitor";class cc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(ac,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){O(ac,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr=null;function Hs(){return wr===null?wr=(function(){return 268435456+Math.round(2147483648*Math.random())})():wr++,"0x"+wr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="RestConnection",Bp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Up{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===ir?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Hs(),l=this.Go(t,e.toUriEncodedString());O(zs,`Sending RPC '${t}' ${a}:`,l,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:d}=new URL(l),p=rs(d);return this.jo(t,l,h,r,p).then((y=>(O(zs,`Received RPC '${t}' ${a}: `,y),y)),(y=>{throw Jt(zs,`RPC '${t}' ${a} failed with error: `,y,"url: ",l,"request:",r),y}))}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ke})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=Bp[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class qp extends Up{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const a=Hs();return new Promise(((l,h)=>{const d=new bo;d.setWithCredentials(!0),d.listenOnce(Ro.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Xn.NO_ERROR:const y=d.getResponseJson();O(yt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),l(y);break;case Xn.TIMEOUT:O(yt,`RPC '${t}' ${a} timed out`),h(new k(R.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const I=d.getStatus();if(O(yt,`RPC '${t}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const P=S==null?void 0:S.error;if(P&&P.status&&P.message){const N=(function(B){const x=B.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(x)>=0?x:R.UNKNOWN})(P.status);h(new k(N,P.message))}else h(new k(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new k(R.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(yt,`RPC '${t}' ${a} completed.`)}}));const p=JSON.stringify(s);O(yt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",p,r,15)}))}P_(t,e,r){const s=Hs(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Po(),l=Co(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");O(yt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const y=a.createWebChannel(p,h);this.T_(y);let I=!1,S=!1;const P=new jp({Ho:V=>{S?O(yt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(I||(O(yt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),I=!0),O(yt,`RPC '${t}' stream ${s} sending:`,V),y.send(V))},Yo:()=>y.close()}),N=(V,B,x)=>{V.listen(B,(q=>{try{x(q)}catch(nt){setTimeout((()=>{throw nt}),0)}}))};return N(y,sn.EventType.OPEN,(()=>{S||(O(yt,`RPC '${t}' stream ${s} transport opened.`),P.s_())})),N(y,sn.EventType.CLOSE,(()=>{S||(S=!0,O(yt,`RPC '${t}' stream ${s} transport closed`),P.__(),this.I_(y))})),N(y,sn.EventType.ERROR,(V=>{S||(S=!0,Jt(yt,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),P.__(new k(R.UNAVAILABLE,"The operation could not be completed")))})),N(y,sn.EventType.MESSAGE,(V=>{var B;if(!S){const x=V.data[0];K(!!x,16349);const q=x,nt=(q==null?void 0:q.error)||((B=q[0])===null||B===void 0?void 0:B.error);if(nt){O(yt,`RPC '${t}' stream ${s} received error:`,nt);const kt=nt.status;let lt=(function(_){const E=at[_];if(E!==void 0)return La(E)})(kt),v=nt.message;lt===void 0&&(lt=R.INTERNAL,v="Unknown error status: "+kt+" with message "+nt.message),S=!0,P.__(new k(lt,v)),y.close()}else O(yt,`RPC '${t}' stream ${s} received:`,x),P.a_(x)}})),N(l,So.STAT_EVENT,(V=>{V.stat===ms.PROXY?O(yt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===ms.NOPROXY&&O(yt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{P.o_()}),0),P}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Gs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){return new Wf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="PersistentStream";class hc{constructor(t,e,r,s,o,a,l,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new lc(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new k(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return O(uc,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(O(uc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hp extends hc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Yf(this.serializer,t),r=(function(o){if(!("targetChange"in o))return $.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?Ft(a.readTime):$.min()})(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Fs(this.serializer),e.addTarget=(function(o,a){let l;const h=a.target;if(l=Ss(h)?{documents:Zf(o,h)}:{query:tp(o,h).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ha(o,a.resumeToken);const d=ks(o,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){l.readTime=Tr(o,a.snapshotVersion.toTimestamp());const d=ks(o,a.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=np(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Fs(this.serializer),e.removeTarget=t,this.k_(e)}}class zp extends hc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Jf(t.writeResults,t.commitTime),r=Ft(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Fs(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Xf(this.serializer,r)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{}class Wp extends Gp{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new k(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(t,Ms(e,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(R.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(t,Ms(e,r),s,a,l,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(R.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Kp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jt(e),this._a=!1):O("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="RemoteStore";class Qp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Ee(this)&&(O(ye,"Restarting streams for network reachability change."),await(async function(h){const d=U(h);d.Ia.add(4),await In(d),d.Aa.set("Unknown"),d.Ia.delete(4),await br(d)})(this))}))})),this.Aa=new Kp(r,s)}}async function br(n){if(Ee(n))for(const t of n.da)await t(!0)}async function In(n){for(const t of n.da)await t(!1)}function dc(n,t){const e=U(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Ys(e)?Qs(e):ze(e).x_()&&Ks(e,t))}function Ws(n,t){const e=U(n),r=ze(e);e.Ta.delete(t),r.x_()&&fc(e,t),e.Ta.size===0&&(r.x_()?r.B_():Ee(e)&&e.Aa.set("Unknown"))}function Ks(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(n).H_(t)}function fc(n,t){n.Ra.$e(t),ze(n).Y_(t)}function Qs(n){n.Ra=new qf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),ze(n).start(),n.Aa.aa()}function Ys(n){return Ee(n)&&!ze(n).M_()&&n.Ta.size>0}function Ee(n){return U(n).Ia.size===0}function pc(n){n.Ra=void 0}async function Yp(n){n.Aa.set("Online")}async function Xp(n){n.Ta.forEach(((t,e)=>{Ks(n,t)}))}async function Jp(n,t){pc(n),Ys(n)?(n.Aa.la(t),Qs(n)):n.Aa.set("Unknown")}async function Zp(n,t,e){if(n.Aa.set("Online"),t instanceof Ua&&t.state===2&&t.cause)try{await(async function(s,o){const a=o.cause;for(const l of o.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,t)}catch(r){O(ye,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Rr(n,r)}else if(t instanceof Er?n.Ra.Ye(t):t instanceof Ba?n.Ra.it(t):n.Ra.et(t),!e.isEqual($.min()))try{const r=await sc(n.localStore);e.compareTo(r)>=0&&await(function(o,a){const l=o.Ra.Pt(a);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ta.get(d);p&&o.Ta.set(d,p.withResumeToken(h.resumeToken,a))}})),l.targetMismatches.forEach(((h,d)=>{const p=o.Ta.get(h);if(!p)return;o.Ta.set(h,p.withResumeToken(pt.EMPTY_BYTE_STRING,p.snapshotVersion)),fc(o,h);const y=new se(p.target,h,d,p.sequenceNumber);Ks(o,y)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){O(ye,"Failed to raise snapshot:",r),await Rr(n,r)}}async function Rr(n,t,e){if(!Le(t))throw t;n.Ia.add(1),await In(n),n.Aa.set("Offline"),e||(e=()=>sc(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(ye,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await br(n)}))}function mc(n,t){return t().catch((e=>Rr(n,e,t)))}async function Sr(n){const t=U(n),e=ie(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Es;for(;tm(t);)try{const s=await Mp(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,em(t,s)}catch(s){await Rr(t,s)}gc(t)&&_c(t)}function tm(n){return Ee(n)&&n.Pa.length<10}function em(n,t){n.Pa.push(t);const e=ie(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function gc(n){return Ee(n)&&!ie(n).M_()&&n.Pa.length>0}function _c(n){ie(n).start()}async function nm(n){ie(n).na()}async function rm(n){const t=ie(n);for(const e of n.Pa)t.X_(e.mutations)}async function sm(n,t,e){const r=n.Pa.shift(),s=Ds.from(r,t,e);await mc(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Sr(n)}async function im(n,t){t&&ie(n).Z_&&await(async function(r,s){if((function(a){return Uf(a)&&a!==R.ABORTED})(s.code)){const o=r.Pa.shift();ie(r).N_(),await mc(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Sr(r)}})(n,t),gc(n)&&_c(n)}async function yc(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),O(ye,"RemoteStore received new credentials");const r=Ee(e);e.Ia.add(3),await In(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await br(e)}async function om(n,t){const e=U(n);t?(e.Ia.delete(2),await br(e)):t||(e.Ia.add(2),await In(e),e.Aa.set("Unknown"))}function ze(n){return n.Va||(n.Va=(function(e,r,s){const o=U(e);return o.ia(),new Hp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Yp.bind(null,n),e_:Xp.bind(null,n),n_:Jp.bind(null,n),J_:Zp.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),Ys(n)?Qs(n):n.Aa.set("Unknown")):(await n.Va.stop(),pc(n))}))),n.Va}function ie(n){return n.ma||(n.ma=(function(e,r,s){const o=U(e);return o.ia(),new zp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:nm.bind(null,n),n_:im.bind(null,n),ea:rm.bind(null,n),ta:sm.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Sr(n)):(await n.ma.stop(),n.Pa.length>0&&(O(ye,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Xs(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Js(n,t){if(jt("AsyncQueue",`${t}: ${n}`),Le(n))return new k(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static emptySet(t){return new Ge(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=pn(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ge)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ge;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this.fa=new et(M.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):F(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,r)=>{t.push(r)})),t}}class We{constructor(t,e,r,s,o,a,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach((l=>{a.push({type:0,doc:l})})),new We(t,e,Ge.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class cm{constructor(){this.queries=vc(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=U(e),o=s.queries;s.queries=vc(),o.forEach(((a,l)=>{for(const h of l.wa)h.onError(r)}))})(this,new k(R.ABORTED,"Firestore shutting down"))}}function vc(){return new me((n=>va(n)),hr)}async function lm(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new am,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=Js(a,`Initialization of query '${Ue(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Zs(e)}async function um(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function hm(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&Zs(e)}function dm(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function Zs(n){n.Da.forEach((t=>{t.next()}))}var ti,Tc;(Tc=ti||(ti={})).Fa="default",Tc.Cache="cache";class fm{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new We(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=We.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==ti.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t){this.key=t}}class wc{constructor(t){this.key=t}}class pm{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=H(),this.mutatedKeys=H(),this.Xa=Ta(t),this.eu=new Ge(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new Ec,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((p,y)=>{const I=s.get(p),S=dr(this.query,y)?y:null,P=!!I&&this.mutatedKeys.has(I.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;I&&S?I.data.isEqual(S.data)?P!==N&&(r.track({type:3,doc:S}),V=!0):this.iu(I,S)||(r.track({type:2,doc:S}),V=!0,(h&&this.Xa(S,h)>0||d&&this.Xa(S,d)<0)&&(l=!0)):!I&&S?(r.track({type:0,doc:S}),V=!0):I&&!S&&(r.track({type:1,doc:I}),V=!0,(h||d)&&(l=!0)),V&&(S?(a=a.add(S),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:l,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const a=t.ru.pa();a.sort(((p,y)=>(function(S,P){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:V})}};return N(S)-N(P)})(p.type,y.type)||this.Xa(p.doc,y.doc))),this.su(r),s=s!=null&&s;const l=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new We(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Ec,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=H(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const e=[];return t.forEach((r=>{this.Za.has(r)||e.push(new wc(r))})),this.Za.forEach((r=>{t.has(r)||e.push(new Ic(r))})),e}uu(t){this.Ha=t.qs,this.Za=H();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return We.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ei="SyncEngine";class mm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class gm{constructor(t){this.key=t,this.lu=!1}}class _m{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new me((l=>va(l)),hr),this.Tu=new Map,this.Iu=new Set,this.du=new et(M.comparator),this.Eu=new Map,this.Au=new $s,this.Ru={},this.Vu=new Map,this.mu=He.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ym(n,t,e=!0){const r=Dc(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Ac(r,t,e,!0),s}async function Em(n,t){const e=Dc(n);await Ac(e,t,!0,!1)}async function Ac(n,t,e,r){const s=await xp(n.localStore,Lt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await vm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&dc(n.remoteStore,s),l}async function vm(n,t,e,r,s){n.gu=(y,I,S)=>(async function(N,V,B,x){let q=V.view.nu(B);q.Ds&&(q=await ic(N.localStore,V.query,!1).then((({documents:v})=>V.view.nu(v,q))));const nt=x&&x.targetChanges.get(V.targetId),kt=x&&x.targetMismatches.get(V.targetId)!=null,lt=V.view.applyChanges(q,N.isPrimaryClient,nt,kt);return Vc(N,V.targetId,lt._u),lt.snapshot})(n,y,I,S);const o=await ic(n.localStore,t,!0),a=new pm(t,o.qs),l=a.nu(o.documents),h=Tn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,h);Vc(n,e,d._u);const p=new mm(t,e,a);return n.Pu.set(t,p),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function Tm(n,t,e){const r=U(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter((a=>!hr(a,t)))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qs(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Ws(r.remoteStore,s.targetId),ni(r,s.targetId)})).catch(xe)):(ni(r,s.targetId),await qs(r.localStore,s.targetId,!0))}async function Im(n,t){const e=U(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Ws(e.remoteStore,r.targetId))}async function wm(n,t,e){const r=Vm(n);try{const s=await(function(a,l){const h=U(a),d=X.now(),p=l.reduce(((S,P)=>S.add(P.key)),H());let y,I;return h.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let P=qt(),N=H();return h.Os.getEntries(S,p).next((V=>{P=V,P.forEach(((B,x)=>{x.isValidDocument()||(N=N.add(B))}))})).next((()=>h.localDocuments.getOverlayedDocuments(S,P))).next((V=>{y=V;const B=[];for(const x of l){const q=xf(x,y.get(x.key).overlayedDocument);q!=null&&B.push(new _e(x.key,q,aa(q.value.mapValue),Ht.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,B,l)})).next((V=>{I=V;const B=V.applyToLocalDocumentSet(y,N);return h.documentOverlayCache.saveOverlays(S,V.batchId,B)}))})).then((()=>({batchId:I.batchId,changes:wa(y)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new et(j)),d=d.insert(l,h),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,e),await wn(r,s.changes),await Sr(r.remoteStore)}catch(s){const o=Js(s,"Failed to persist write");e.reject(o)}}async function bc(n,t){const e=U(n);try{const r=await kp(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const a=e.Eu.get(o);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?K(a.lu,14607):s.removedDocuments.size>0&&(K(a.lu,42227),a.lu=!1))})),await wn(e,r,t)}catch(r){await xe(r)}}function Rc(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,a)=>{const l=a.view.va(t);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const h=U(a);h.onlineState=l;let d=!1;h.queries.forEach(((p,y)=>{for(const I of y.wa)I.va(l)&&(d=!0)})),d&&Zs(h)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Am(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let a=new et(M.comparator);a=a.insert(o,_t.newNoDocument(o,$.min()));const l=H().add(o),h=new yr($.min(),new Map,new et(j),a,l);await bc(r,h),r.du=r.du.remove(o),r.Eu.delete(t),ri(r)}else await qs(r.localStore,t,!1).then((()=>ni(r,t,e))).catch(xe)}async function bm(n,t){const e=U(n),r=t.batch.batchId;try{const s=await Np(e.localStore,t);Cc(e,r,null),Sc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await wn(e,s)}catch(s){await xe(s)}}async function Rm(n,t,e){const r=U(n);try{const s=await(function(a,l){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return h.mutationQueue.lookupMutationBatch(d,l).next((y=>(K(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>h.localDocuments.getDocuments(d,p)))}))})(r.localStore,t);Cc(r,t,e),Sc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await wn(r,s)}catch(s){await xe(s)}}function Sc(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function Cc(n,t,e){const r=U(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function ni(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((r=>{n.Au.containsKey(r)||Pc(n,r)}))}function Pc(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(Ws(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),ri(n))}function Vc(n,t,e){for(const r of e)r instanceof Ic?(n.Au.addReference(r.key,t),Sm(n,r)):r instanceof wc?(O(ei,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Pc(n,r.key)):F(19791,{yu:r})}function Sm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(O(ei,"New document in limbo: "+e),n.Iu.add(r),ri(n))}function ri(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new M(Y.fromString(t)),r=n.mu.next();n.Eu.set(r,new gm(e)),n.du=n.du.insert(e,r),dc(n.remoteStore,new se(Lt(_a(e.path)),r,"TargetPurposeLimboResolution",tr.ue))}}async function wn(n,t,e){const r=U(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,h)=>{a.push(r.gu(h,t,e).then((d=>{var p;if((d||e)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=e==null?void 0:e.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Us.Es(h.targetId,d);o.push(y)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>C.forEach(d,(I=>C.forEach(I.Is,(S=>p.persistence.referenceDelegate.addReference(y,I.targetId,S))).next((()=>C.forEach(I.ds,(S=>p.persistence.referenceDelegate.removeReference(y,I.targetId,S)))))))))}catch(y){if(!Le(y))throw y;O(js,"Failed to update sequence numbers: "+y)}for(const y of d){const I=y.targetId;if(!y.fromCache){const S=p.Fs.get(I),P=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(P);p.Fs=p.Fs.insert(I,N)}}})(r.localStore,o))}async function Cm(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){O(ei,"User change. New user:",t.toKey());const r=await rc(e.localStore,t);e.currentUser=t,(function(o,a){o.Vu.forEach((l=>{l.forEach((h=>{h.reject(new k(R.CANCELLED,a))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await wn(e,r.Bs)}}function Pm(n,t){const e=U(n),r=e.Eu.get(t);if(r&&r.lu)return H().add(r.key);{let s=H();const o=e.Tu.get(t);if(!o)return s;for(const a of o){const l=e.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function Dc(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=bc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Am.bind(null,t),t.hu.J_=hm.bind(null,t.eventManager),t.hu.pu=dm.bind(null,t.eventManager),t}function Vm(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=bm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Rm.bind(null,t),t}class Cr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ar(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Dp(this.persistence,new Cp,t.initialUser,this.serializer)}Du(t){return new nc(Bs.Vi,this.serializer)}bu(t){return new Fp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cr.provider={build:()=>new Cr};class Dm extends Cr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){K(this.persistence.referenceDelegate instanceof Ir,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new fp(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new nc((r=>Ir.Vi(r,e)),this.serializer)}}class si{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cm.bind(null,this.syncEngine),await om(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new cm})()}createDatastore(t){const e=Ar(t.databaseInfo.databaseId),r=(function(o){return new qp(o)})(t.databaseInfo);return(function(o,a,l,h){return new Wp(o,a,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,a,l){return new Qp(r,s,o,a,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>Rc(this.syncEngine,e,0)),(function(){return cc.C()?new cc:new $p})())}createSyncEngine(t,e){return(function(s,o,a,l,h,d,p){const y=new _m(s,o,a,l,h,d);return p&&(y.fu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=U(s);O(ye,"RemoteStore shutting down."),o.Ia.add(5),await In(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}si.provider={build:()=>new si};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="FirestoreClient";class km{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=_s.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{O(oe,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O(oe,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Js(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ii(n,t){n.asyncQueue.verifyOperationInProgress(),O(oe,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await rc(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{Jt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Jt("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function Nc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Om(n);O(oe,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>yc(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>yc(t.remoteStore,s))),n._onlineComponents=t}async function Om(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(oe,"Using user provided OfflineComponentProvider");try{await ii(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Jt("Error using user provided cache. Falling back to memory cache: "+e),await ii(n,new Cr)}}else O(oe,"Using default OfflineComponentProvider"),await ii(n,new Dm(void 0));return n._offlineComponents}async function kc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(oe,"Using user provided OnlineComponentProvider"),await Nc(n,n._uninitializedComponentsProvider._online)):(O(oe,"Using default OnlineComponentProvider"),await Nc(n,new si))),n._onlineComponents}function Mm(n){return kc(n).then((t=>t.syncEngine))}async function xm(n){const t=await kc(n),e=t.eventManager;return e.onListen=ym.bind(null,t.syncEngine),e.onUnlisten=Tm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Em.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Im.bind(null,t.syncEngine),e}function Lm(n,t,e={}){const r=new Zt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,a,l,h,d){const p=new Nm({next:I=>{p.Ou(),a.enqueueAndForget((()=>um(o,y))),I.fromCache&&h.source==="server"?d.reject(new k(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new fm(l,p,{includeMetadataChanges:!0,ka:!0});return lm(o,y)})(await xm(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="firestore.googleapis.com",Lc=!0;class Fc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xc,this.ssl=Lc}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Lc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Za;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<hp)throw new k(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Pr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Bd;switch(r.type){case"firstParty":return new Hd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Mc.get(e);r&&(O("ComponentProvider","Removing Datastore"),Mc.delete(e),r.terminate())})(this),Promise.resolve()}}function Fm(n,t,e,r={}){var s;n=Zn(n,Pr);const o=rs(t),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(ph(`https://${h}`),yh("Firestore",!0)),a.host!==xc&&a.host!==h&&Jt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Wn(d,l)&&(n._setSettings(d),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=gt.MOCK_USER;else{p=mh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new k(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new gt(I)}n._authCredentials=new Ud(new ko(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ve(this.firestore,t,this._query)}}class ht{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ht(this.firestore,t,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(on(e,ht._jsonSchema))return new ht(t,r||null,new M(Y.fromString(e.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:it("string",ht._jsonSchemaVersion),referencePath:it("string")};class ae extends ve{constructor(t,e,r){super(t,e,_a(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ht(this.firestore,null,new M(t))}withConverter(t){return new ae(this.firestore,t,this._path)}}function $c(n,t,...e){if(n=De(n),Fo("collection","path",t),n instanceof Pr){const r=Y.fromString(t,...e);return Bo(r),new ae(n,null,r)}{if(!(n instanceof ht||n instanceof ae))throw new k(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Bo(r),new ae(n.firestore,null,r)}}function $m(n,t,...e){if(n=De(n),arguments.length===1&&(t=_s.newId()),Fo("doc","path",t),n instanceof Pr){const r=Y.fromString(t,...e);return $o(r),new ht(n,null,new M(r))}{if(!(n instanceof ht||n instanceof ae))throw new k(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return $o(r),new ht(n.firestore,n instanceof ae?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="AsyncQueue";class Uc{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new lc(this,"async_queue_retry"),this.oc=()=>{const r=Gs();r&&O(Bc,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=Gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Gs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Zt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Le(t))throw t;O(Bc,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,jt("INTERNAL UNHANDLED ERROR: ",jc(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Xs.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&F(47125,{hc:jc(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function jc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class oi extends Pr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Uc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Uc(t),this._firestoreClient=void 0,await t}}}function Bm(n,t){const e=typeof n=="object"?n:Sd(),r=typeof n=="string"?n:ir,s=Id(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=dh("firestore");o&&Fm(s,...o)}return s}function qc(n){if(n._terminated)throw new k(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Um(n),n._firestoreClient}function Um(n){var t,e,r;const s=n._freezeSettings(),o=(function(l,h,d,p){return new af(l,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Oc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new km(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pt(pt.fromBase64String(t))}catch(e){throw new k(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pt(pt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(on(t,Pt._jsonSchema))return Pt.fromBase64String(t.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:it("string",Pt._jsonSchemaVersion),bytes:it("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(t){if(on(t,$t._jsonSchema))return new $t(t.latitude,t.longitude)}}$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:it("string",$t._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(on(t,Bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Bt(t.vectorValues);throw new k(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Bt._jsonSchemaVersion="firestore/vectorValue/1.0",Bt._jsonSchema={type:it("string",Bt._jsonSchemaVersion),vectorValues:it("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=/^__.*__$/;class qm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new _e(t,this.data,this.fieldMask,e,this.fieldTransforms):new En(t,this.data,e,this.fieldTransforms)}}function zc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:n})}}class ci{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return Vr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(zc(this.Ec)&&jm.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Hm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Ar(t)}Dc(t,e,r,s=!1){return new ci({Ec:t,methodName:e,bc:r,path:dt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gc(n){const t=n._freezeSettings(),e=Ar(n._databaseId);return new Hm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zm(n,t,e,r,s,o={}){const a=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);Qc("Data must be an object, but it was:",a,r);const l=Wc(r,a);let h,d;if(o.merge)h=new Dt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const I=Wm(t,y,e);if(!a.contains(I))throw new k(R.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Qm(p,I)||p.push(I)}h=new Dt(p),d=a.fieldTransforms.filter((y=>h.covers(y.field)))}else h=null,d=a.fieldTransforms;return new qm(new Ct(l),h,d)}function Gm(n,t,e,r=!1){return li(e,n.Dc(r?4:3,t))}function li(n,t){if(Kc(n=De(n)))return Qc("Unsupported field value:",t,n),Wc(n,t);if(n instanceof Hc)return(function(r,s){if(!zc(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const l of r){let h=li(l,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=X.fromDate(r);return{timestampValue:Tr(s.serializer,o)}}if(r instanceof X){const o=new X(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(s.serializer,o)}}if(r instanceof $t)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Ha(s.serializer,r._byteString)};if(r instanceof ht){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Os(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Bt)return(function(a,l){return{mapValue:{fields:{[ta]:{stringValue:ea},[ar]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw l.wc("VectorValues must only contain numeric values.");return Vs(l.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Jn(r)}`)})(n,t)}function Wc(n,t){const e={};return Wo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(n,((r,s)=>{const o=li(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Kc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof X||n instanceof $t||n instanceof Pt||n instanceof ht||n instanceof Hc||n instanceof Bt)}function Qc(n,t,e){if(!Kc(e)||!Uo(e)){const r=Jn(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Wm(n,t,e){if((t=De(t))instanceof ai)return t._internalPath;if(typeof t=="string")return Yc(n,t);throw Vr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Km=new RegExp("[~\\*/\\[\\]]");function Yc(n,t,e){if(t.search(Km)>=0)throw Vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ai(...t.split("."))._internalPath}catch{throw Vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Vr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(R.INVALID_ARGUMENT,l+n+h)}function Qm(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ym(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ui("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ym extends Xc{data(){return super.data()}}function ui(n,t){return typeof t=="string"?Yc(n,t):t instanceof ai?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hi{}class Jc extends hi{}function Jm(n,t,...e){let r=[];t instanceof hi&&r.push(t),r=r.concat(e),(function(o){const a=o.filter((h=>h instanceof fi)).length,l=o.filter((h=>h instanceof di)).length;if(a>1||a>0&&l>0)throw new k(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class di extends Jc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new di(t,e,r)}_apply(t){const e=this._parse(t);return el(t._query,e),new ve(t.firestore,t.converter,Cs(t._query,e))}_parse(t){const e=Gc(t.firestore);return(function(o,a,l,h,d,p,y){let I;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new k(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){tl(y,p);const P=[];for(const N of y)P.push(Zc(h,o,N));I={arrayValue:{values:P}}}else I=Zc(h,o,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||tl(y,p),I=Gm(l,a,y,p==="in"||p==="not-in");return ot.create(d,p,I)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class fi extends hi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new fi(t,e)}_parse(t){const e=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return e.length===1?e[0]:Nt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)el(a,h),a=Cs(a,h)})(t._query,e),new ve(t.firestore,t.converter,Cs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pi extends Jc{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new pi(t,e)}_apply(t){const e=(function(s,o,a){if(s.startAt!==null)throw new k(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dn(o,a)})(t._query,this._field,this._direction);return new ve(t.firestore,t.converter,(function(s,o){const a=s.explicitOrderBy.concat([o]);return new Be(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Zm(n,t="asc"){const e=t,r=ui("orderBy",n);return pi._create(r,e)}function Zc(n,t,e){if(typeof(e=De(e))=="string"){if(e==="")throw new k(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ea(t)&&e.indexOf("/")!==-1)throw new k(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Y.fromString(e));if(!M.isDocumentKey(r))throw new k(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sa(n,new M(r))}if(e instanceof ht)return sa(n,e._key);throw new k(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jn(e)}.`)}function tl(n,t){if(!Array.isArray(n)||n.length===0)throw new k(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function el(n,t){const e=(function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new k(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class tg{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw F(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return pe(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[ar].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>st(a.doubleValue)));return new Bt(o)}convertGeoPoint(t){return new $t(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=sr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(cn(t));default:return null}}convertTimestamp(t){const e=ee(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);K(Xa(r),9688,{name:t});const s=new ln(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Dr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ke extends Xc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ui("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ke._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ke._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ke._jsonSchema={type:it("string",Ke._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class Nr extends Ke{data(t={}){return super.data(t)}}class Qe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Dr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new Nr(this._firestore,this._userDataWriter,r.key,r,new Dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const h=new Nr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Dr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new Nr(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Dr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:ng(l.type),doc:h,oldIndex:d,newIndex:p}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Qe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=_s.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ng(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}Qe._jsonSchemaVersion="firestore/querySnapshot/1.0",Qe._jsonSchema={type:it("string",Qe._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class rg extends tg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ht(this.firestore,null,e)}}function sg(n){n=Zn(n,ve);const t=Zn(n.firestore,oi),e=qc(t),r=new rg(t);return Xm(n._query),Lm(e,n._query).then((s=>new Qe(t,r,n,s)))}function ig(n,t){const e=Zn(n.firestore,oi),r=$m(n),s=eg(n.converter,t);return og(e,[zm(Gc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then((()=>r))}function og(n,t){return(function(r,s){const o=new Zt;return r.asyncQueue.enqueueAndForget((async()=>wm(await Mm(r),s,o))),o.promise})(qc(n),t)}(function(t,e=!0){(function(s){ke=s})(Rd),Qn(new nn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new oi(new jd(r.getProvider("auth-internal")),new zd(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ln(d.options.projectId,p)})(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Ne(Vo,Do,t),Ne(Vo,Do,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ag=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,y=(o&3)<<4|l>>4;let I=(l&15)<<2|d>>6,S=d&63;h||(S=64,a||(I=64)),r.push(e[p],e[y],e[I],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(nl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ag(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||d==null||y==null)throw new lg;const I=o<<2|l>>4;if(r.push(I),d!==64){const S=l<<4&240|d>>2;if(r.push(S),y!==64){const P=d<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ug=function(n){const t=nl(n);return cg.encodeByteArray(t,!0)},rl=function(n){return ug(n).replace(/\./g,"")};function hg(){try{return typeof indexedDB=="object"}catch{return!1}}function dg(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="FirebaseError";let mi=class th extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=fg,Object.setPrototypeOf(this,th.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sl.prototype.create)}},sl=class{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?pg(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new mi(s,l,r)}};function pg(n,t){return n.replace(mg,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const mg=/\{\$([^}]+)}/g;let gi=class{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const gg={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},_g=J.INFO,yg={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Eg=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=yg[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let vg=class{constructor(t){this.name=t,this._logLevel=_g,this._logHandler=Eg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gg[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ig(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ig(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _i="@firebase/app",il="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new vg("@firebase/app"),wg="@firebase/app-compat",Ag="@firebase/analytics-compat",bg="@firebase/analytics",Rg="@firebase/app-check-compat",Sg="@firebase/app-check",Cg="@firebase/auth",Pg="@firebase/auth-compat",Vg="@firebase/database",Dg="@firebase/data-connect",Ng="@firebase/database-compat",kg="@firebase/functions",Og="@firebase/functions-compat",Mg="@firebase/installations",xg="@firebase/installations-compat",Lg="@firebase/messaging",Fg="@firebase/messaging-compat",$g="@firebase/performance",Bg="@firebase/performance-compat",Ug="@firebase/remote-config",jg="@firebase/remote-config-compat",qg="@firebase/storage",Hg="@firebase/storage-compat",zg="@firebase/firestore",Gg="@firebase/ai",Wg="@firebase/firestore-compat",Kg="firebase",Qg={[_i]:"fire-core",[wg]:"fire-core-compat",[bg]:"fire-analytics",[Ag]:"fire-analytics-compat",[Sg]:"fire-app-check",[Rg]:"fire-app-check-compat",[Cg]:"fire-auth",[Pg]:"fire-auth-compat",[Vg]:"fire-rtdb",[Dg]:"fire-data-connect",[Ng]:"fire-rtdb-compat",[kg]:"fire-fn",[Og]:"fire-fn-compat",[Mg]:"fire-iid",[xg]:"fire-iid-compat",[Lg]:"fire-fcm",[Fg]:"fire-fcm-compat",[$g]:"fire-perf",[Bg]:"fire-perf-compat",[Ug]:"fire-rc",[jg]:"fire-rc-compat",[qg]:"fire-gcs",[Hg]:"fire-gcs-compat",[zg]:"fire-fst",[Wg]:"fire-fst-compat",[Gg]:"fire-vertex","fire-js":"fire-js",[Kg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new Map,Xg=new Map,ol=new Map;function al(n,t){try{n.container.addComponent(t)}catch(e){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Te(n){const t=n.name;if(ol.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;ol.set(t,n);for(const e of Yg.values())al(e,n);for(const e of Xg.values())al(e,n);return!0}function cl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new sl("app","Firebase",Jg);function Ie(n,t,e){let r=Qg[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(a.join(" "));return}Te(new gi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="firebase-heartbeat-database",t_=1,An="firebase-heartbeat-store";let Ei=null;function ll(){return Ei||(Ei=ls(Zg,t_,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(An)}catch(e){console.warn(e)}}}}).catch(n=>{throw yi.create("idb-open",{originalErrorMessage:n.message})})),Ei}async function e_(n){try{const e=(await ll()).transaction(An),r=await e.objectStore(An).get(hl(n));return await e.done,r}catch(t){if(t instanceof mi)zt.warn(t.message);else{const e=yi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(e.message)}}}async function ul(n,t){try{const r=(await ll()).transaction(An,"readwrite");await r.objectStore(An).put(t,hl(n)),await r.done}catch(e){if(e instanceof mi)zt.warn(e.message);else{const r=yi.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});zt.warn(r.message)}}}function hl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=1024,r_=30;class s_{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new o_(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=dl();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>r_){const a=a_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dl(),{heartbeatsToSend:r,unsentEntries:s}=i_(this._heartbeatsCache.heartbeats),o=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return zt.warn(e),""}}}function dl(){return new Date().toISOString().substring(0,10)}function i_(n,t=n_){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),fl(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),fl(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class o_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hg()?dg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await e_(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return ul(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function fl(n){return rl(JSON.stringify({version:2,heartbeats:n})).length}function a_(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){Te(new gi("platform-logger",t=>new Tg(t),"PRIVATE")),Te(new gi("heartbeat",t=>new s_(t),"PRIVATE")),Ie(_i,il,n),Ie(_i,il,"esm2020"),Ie("fire-js","")}c_("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const l_={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},u_=Z.INFO,h_={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},d_=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=h_[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class f_{constructor(t){this.name=t,this._logLevel=u_,this._logHandler=d_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?l_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...t),this._logHandler(this,Z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...t),this._logHandler(this,Z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...t),this._logHandler(this,Z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...t),this._logHandler(this,Z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...t),this._logHandler(this,Z.ERROR,...t)}}function p_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function m_(){try{return typeof indexedDB=="object"}catch{return!1}}function g_(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function __(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="FirebaseError";let pl=class eh extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=y_,Object.setPrototypeOf(this,eh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ml.prototype.create)}},ml=class{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?E_(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new pl(s,l,r)}};function E_(n,t){return n.replace(v_,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const v_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=1e3,I_=2,w_=14400*1e3,A_=.5;function gl(n,t=T_,e=I_){const r=t*Math.pow(e,n),s=Math.round(A_*r*(Math.random()-.5)*2);return Math.min(w_,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(n){return n&&n._delegate?n._delegate:n}let _l=class{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="FirebaseError";class kr extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=R_,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yl.prototype.create)}}class yl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?S_(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new kr(s,l,r)}}function S_(n,t){return n.replace(C_,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const C_=/\{\$([^}]+)}/g;class El{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}const vl="@firebase/installations",vi="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=1e4,Il=`w:${vi}`,wl="FIS_v2",P_="https://firebaseinstallations.googleapis.com/v1",V_=3600*1e3,D_="installations",N_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},we=new yl(D_,N_,k_);function Al(n){return n instanceof kr&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl({projectId:n}){return`${P_}/projects/${n}/installations`}function Rl(n){return{token:n.token,requestStatus:2,expiresIn:M_(n.expiresIn),creationTime:Date.now()}}async function Sl(n,t){const r=(await t.json()).error;return we.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Cl({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function O_(n,{refreshToken:t}){const e=Cl(n);return e.append("Authorization",x_(t)),e}async function Pl(n){const t=await n();return t.status>=500&&t.status<600?n():t}function M_(n){return Number(n.replace("s","000"))}function x_(n){return`${wl} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=bl(n),s=Cl(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:wl,appId:n.appId,sdkVersion:Il},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Pl(()=>fetch(r,l));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Rl(d.authToken)}}else throw await Sl("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_=/^[cdef][\w-]{21}$/,Ti="";function B_(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=U_(n);return $_.test(e)?e:Ti}catch{return Ti}}function U_(n){return F_(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;function Nl(n,t){const e=Or(n);kl(e,t),j_(e,t)}function kl(n,t){const e=Dl.get(n);if(e)for(const r of e)r(t)}function j_(n,t){const e=q_();e&&e.postMessage({key:n,fid:t}),H_()}let Ae=null;function q_(){return!Ae&&"BroadcastChannel"in self&&(Ae=new BroadcastChannel("[Firebase] FID Change"),Ae.onmessage=n=>{kl(n.data.key,n.data.fid)}),Ae}function H_(){Dl.size===0&&Ae&&(Ae.close(),Ae=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="firebase-installations-database",G_=1,be="firebase-installations-store";let Ii=null;function wi(){return Ii||(Ii=ls(z_,G_,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(be)}}})),Ii}async function Mr(n,t){const e=Or(n),s=(await wi()).transaction(be,"readwrite"),o=s.objectStore(be),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&Nl(n,t.fid),t}async function Ol(n){const t=Or(n),r=(await wi()).transaction(be,"readwrite");await r.objectStore(be).delete(t),await r.done}async function xr(n,t){const e=Or(n),s=(await wi()).transaction(be,"readwrite"),o=s.objectStore(be),a=await o.get(e),l=t(a);return l===void 0?await o.delete(e):await o.put(l,e),await s.done,l&&(!a||a.fid!==l.fid)&&Nl(n,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(n){let t;const e=await xr(n.appConfig,r=>{const s=W_(r),o=K_(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Ti?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function W_(n){const t=n||{fid:B_(),registrationStatus:0};return xl(t)}function K_(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(we.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Q_(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Y_(n)}:{installationEntry:t}}async function Q_(n,t){try{const e=await L_(n,t);return Mr(n.appConfig,e)}catch(e){throw Al(e)&&e.customData.serverCode===409?await Ol(n.appConfig):await Mr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Y_(n){let t=await Ml(n.appConfig);for(;t.registrationStatus===1;)await Vl(100),t=await Ml(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await Ai(n);return r||e}return t}function Ml(n){return xr(n,t=>{if(!t)throw we.create("installation-not-found");return xl(t)})}function xl(n){return X_(n)?{fid:n.fid,registrationStatus:0}:n}function X_(n){return n.registrationStatus===1&&n.registrationTime+Tl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_({appConfig:n,heartbeatServiceProvider:t},e){const r=Z_(n,e),s=O_(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Il,appId:n.appId}},l={method:"POST",headers:s,body:JSON.stringify(a)},h=await Pl(()=>fetch(r,l));if(h.ok){const d=await h.json();return Rl(d)}else throw await Sl("Generate Auth Token",h)}function Z_(n,{fid:t}){return`${bl(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n,t=!1){let e;const r=await xr(n.appConfig,o=>{if(!Fl(o))throw we.create("not-registered");const a=o.authToken;if(!t&&ny(a))return o;if(a.requestStatus===1)return e=ty(n,t),o;{if(!navigator.onLine)throw we.create("app-offline");const l=sy(o);return e=ey(n,l),l}});return e?await e:r.authToken}async function ty(n,t){let e=await Ll(n.appConfig);for(;e.authToken.requestStatus===1;)await Vl(100),e=await Ll(n.appConfig);const r=e.authToken;return r.requestStatus===0?bi(n,t):r}function Ll(n){return xr(n,t=>{if(!Fl(t))throw we.create("not-registered");const e=t.authToken;return iy(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ey(n,t){try{const e=await J_(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Mr(n.appConfig,r),e}catch(e){if(Al(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Ol(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Mr(n.appConfig,r)}throw e}}function Fl(n){return n!==void 0&&n.registrationStatus===2}function ny(n){return n.requestStatus===2&&!ry(n)}function ry(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+V_}function sy(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function iy(n){return n.requestStatus===1&&n.requestTime+Tl<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(n){const t=n,{installationEntry:e,registrationPromise:r}=await Ai(t);return r?r.catch(console.error):bi(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(n,t=!1){const e=n;return await cy(e),(await bi(e,t)).token}async function cy(n){const{registrationPromise:t}=await Ai(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(n){if(!n||!n.options)throw Ri("App Configuration");if(!n.name)throw Ri("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Ri(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ri(n){return we.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="installations",uy="installations-internal",hy=n=>{const t=n.getProvider("app").getImmediate(),e=ly(t),r=cl(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},dy=n=>{const t=n.getProvider("app").getImmediate(),e=cl(t,$l).getImmediate();return{getId:()=>oy(e),getToken:s=>ay(e,s)}};function fy(){Te(new El($l,hy,"PUBLIC")),Te(new El(uy,dy,"PRIVATE"))}fy(),Ie(vl,vi),Ie(vl,vi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="analytics",py="firebase_id",my="origin",gy=60*1e3,_y="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Si="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new f_("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vt=new ml("analytics","Analytics",yy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(n){if(!n.startsWith(Si)){const t=Vt.create("invalid-gtag-resource",{gtagURL:n});return Rt.warn(t.message),""}return n}function Ul(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function vy(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Ty(n,t){const e=vy("firebase-js-sdk-policy",{createScriptURL:Ey}),r=document.createElement("script"),s=`${Si}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Iy(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function wy(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Ul(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(l){Rt.error(l)}n("config",s,o)}async function Ay(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const l=await Ul(e);for(const h of a){const d=l.find(y=>y.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Rt.error(o)}}function by(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[l,h]=a;await Ay(n,t,e,l,h)}else if(o==="config"){const[l,h]=a;await wy(n,t,e,r,l,h)}else if(o==="consent"){const[l,h]=a;n("consent",l,h)}else if(o==="get"){const[l,h,d]=a;n("get",l,h,d)}else if(o==="set"){const[l]=a;n("set",l)}else n(o,...a)}catch(l){Rt.error(l)}}return s}function Ry(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=by(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Sy(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Si)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=30,Py=1e3;class Vy{constructor(t={},e=Py){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const jl=new Vy;function Dy(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Ny(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:Dy(r)},o=_y.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let l="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(l=h.error.message)}catch{}throw Vt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function ky(n,t=jl,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Vt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Vt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new xy;return setTimeout(async()=>{l.abort()},gy),ql({appId:r,apiKey:s,measurementId:o},a,l,t)}async function ql(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=jl){var o;const{appId:a,measurementId:l}=n;try{await Oy(r,t)}catch(h){if(l)return Rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw h}try{const h=await Ny(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!My(d)){if(s.deleteThrottleMetadata(a),l)return Rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:l};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?gl(e,s.intervalMillis,Cy):gl(e,s.intervalMillis),y={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return s.setThrottleMetadata(a,y),Rt.debug(`Calling attemptFetch again in ${p} millis`),ql(n,y,r,s)}}function Oy(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Vt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function My(n){if(!(n instanceof pl)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class xy{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Ly(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(){if(m_())try{await g_()}catch(n){return Rt.warn(Vt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Rt.warn(Vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $y(n,t,e,r,s,o,a){var l;const h=ky(n);h.then(S=>{e[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&Rt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Rt.error(S)),t.push(h);const d=Fy().then(S=>{if(S)return r.getId()}),[p,y]=await Promise.all([h,d]);Sy(o)||Ty(o,p.measurementId),s("js",new Date);const I=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return I[my]="firebase",I.update=!0,y!=null&&(I[py]=y),s("config",p.measurementId,I),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t){this.app=t}_delete(){return delete bn[this.app.options.appId],Promise.resolve()}}let bn={},Hl=[];const zl={};let Ci="dataLayer",Uy="gtag",Gl,Wl,Kl=!1;function jy(){const n=[];if(p_()&&n.push("This is a browser extension environment."),__()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Vt.create("invalid-analytics-context",{errorInfo:t});Rt.warn(e.message)}}function qy(n,t,e){jy();const r=n.options.appId;if(!r)throw Vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vt.create("no-api-key");if(bn[r]!=null)throw Vt.create("already-exists",{id:r});if(!Kl){Iy(Ci);const{wrappedGtag:o,gtagCore:a}=Ry(bn,Hl,zl,Ci,Uy);Wl=o,Gl=a,Kl=!0}return bn[r]=$y(n,Hl,zl,t,Gl,Ci,e),new By(n)}function Hy(n,t,e,r){n=b_(n),Ly(Wl,bn[n.app.options.appId],t,e,r).catch(s=>Rt.error(s))}const Ql="@firebase/analytics",Yl="0.10.17";function zy(){Te(new _l(Bl,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return qy(r,s,e)},"PUBLIC")),Te(new _l("analytics-internal",n,"PRIVATE")),Ie(Ql,Yl),Ie(Ql,Yl,"esm2017");function n(t){try{const e=t.getProvider(Bl).getImmediate();return{logEvent:(r,s,o)=>Hy(e,r,s,o)}}catch(e){throw Vt.create("interop-component-reg-failed",{reason:e})}}}zy();const Gy=_o({apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0}),Xl=Bm(Gy);async function Wy(n){try{const t=new Date;return t.setFullYear(2026),(await ig($c(Xl,"items"),{...n,timestamp:t})).id}catch(t){throw new Error("Error adding item: "+t.message)}}async function Ky(){const n=Jm($c(Xl,"items"),Zm("timestamp","desc"));try{const t=await sg(n),e=[];return t.forEach(r=>{var a,l;const s=r.data();let o=((l=(a=s.timestamp)==null?void 0:a.toDate)==null?void 0:l.call(a))||new Date;o.setFullYear(2026),e.push({id:r.id,...s,timestamp:o})}),e}catch(t){throw new Error("Error fetching items: "+t.message)}}let Ye=null,Pi=[],Rn=[];const Re=new Map,Qy=()=>{const n=localStorage.getItem("geocache");if(n){const t=JSON.parse(n);for(const[e,r]of Object.entries(t))Re.set(e,r.coords),Rn.push({address:e,fullAddress:r.fullAddress,coords:r.coords})}},Jl=()=>{const n={};Re.forEach((t,e)=>{const r=Rn.find(s=>s.address===e);n[e]={coords:t,fullAddress:r?r.fullAddress:e}}),localStorage.setItem("geocache",JSON.stringify(n))};function Yy(){if(Ye)return;Qy(),Ye=L.map("map").setView([1.9441,30.0619],13),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(Ye);const n=document.getElementById("address-list");n&&(n.innerHTML="<h4>Pinned Locations</h4><p>No locations to display. Perform a search to see pinned locations.</p>")}const Xy=n=>new Promise(t=>setTimeout(t,n));async function Jy(n){if(Re.has(n))return Re.get(n);try{const t=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(n)}&format=json&limit=1&addressdetails=1`,r=await(await fetch(t,{headers:{"User-Agent":"LostAndFoundTracker/1.0 (your-email@example.com)"}})).json();if(r.length>0){const{lat:s,lon:o,display_name:a}=r[0],l=[parseFloat(s),parseFloat(o)];return Re.set(n,l),Rn.push({address:n,fullAddress:a,coords:l}),Jl(),l}}catch(t){console.warn(`Nominatim geocoding failed for "${n}":`,t)}try{const e=`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(n)}.json?access_token=undefined`,s=await(await fetch(e)).json();if(s.features&&s.features.length>0){const[o,a]=s.features[0].center,l=s.features[0].place_name,h=[a,o];return Re.set(n,h),Rn.push({address:n,fullAddress:l,coords:h}),Jl(),h}}catch(t){console.error(`Mapbox geocoding failed for "${n}":`,t)}return null}async function Vi(n){Pi.forEach(o=>o.remove()),Pi=[];const t=[...new Set(n.map(o=>o.location_desc).filter(Boolean))];for(let o=0;o<t.length;o++){const a=t[o];await Jy(a),o<t.length-1&&await Xy(1e3)}const e=new Map;for(const o of n){const a=o.location_desc;if(!a)continue;const l=Re.get(a);if(!l)continue;const h=l.join(",");e.has(h)||e.set(h,[]),e.get(h).push(o)}const r=[];e.forEach((o,a)=>{const[l,h]=a.split(",").map(parseFloat),d=o.map(y=>`
            <b>${y.title}</b><br>
            ${y.description||"No description"}
        `).join("<hr>"),p=L.marker([l,h]).addTo(Ye).bindPopup(d);Pi.push(p),r.push([l,h])}),r.length>0?Ye.fitBounds(r,{padding:[50,50]}):Ye.setView([1.9441,30.0619],13);const s=document.getElementById("address-list");if(s)if(s.innerHTML="<h4>Pinned Locations</h4>",e.size===0)s.innerHTML+="<p>No locations to display. Perform a search to see pinned locations.</p>";else{const o=[];if(e.forEach((a,l)=>{const h=Rn.find(d=>d.coords.join(",")===l);h&&o.push(h.fullAddress)}),o.length>0){const a=document.createElement("ul");o.forEach(l=>{const h=document.createElement("li");h.textContent=l,a.appendChild(h)}),s.appendChild(a)}else s.innerHTML+="<p>No addresses found for the pinned locations.</p>"}}async function Sn(n="all",t=""){const e=document.getElementById("items-list"),r=document.getElementById("search-feedback");if(!e){console.error("Items list element not found!");return}e.innerHTML="",r?(console.log("Feedback element found:",r),r.innerHTML=""):console.warn("Search feedback element not found!");try{const s=await Ky();console.log("Fetched items:",s);const o=new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i"),a=s.filter(l=>(n==="all"||l.status===n)&&((l.title?o.test(l.title):!1)||(l.description?o.test(l.description):!1)));if(console.log("Filtered items:",a),r&&(a.length===0?r.innerHTML="0 items matched":r.innerHTML=`${a.length} item${a.length===1?"":"s"} matched`,console.log("Feedback message set to:",r.innerHTML)),a.length===0){e.innerHTML="<p class='no-items'>No items found</p>",await Vi([]);return}a.forEach(l=>{const h=document.createElement("div");h.classList.add("item-card");const d=l.title.split(" - "),p=d[0]||"Untitled Item",y=d[1]||"Date unknown";h.innerHTML=`
                <div class="card-body">
                    <div class="card-header">
                        <h4 class="card-title">${p}</h4>
                        <small class="timestamp">${y}</small>
                    </div>
                    <span class="status-badge ${l.status==="found"?"status-found":l.status==="lost"?"status-lost":""}">${l.status?l.status.toUpperCase():"UNKNOWN"}</span>
                    <p class="card-text">${l.description||"No description provided."}</p>
                    <div class="item-details">
                        <p><strong>Location:</strong> ${l.location_desc||"Not specified"}</p>
                        <p data-contact-info><strong>Contact:</strong> ${l.contact_info||"Not provided"}</p>
                    </div>
                    ${l.image_link?`
                    <div class="card-image">
                        <img src="${l.image_link}" alt="${p}" class="item-image">
                    </div>`:""}
                </div>
            `,e.appendChild(h)}),await Vi(a)}catch(s){console.error("Error fetching items:",s),e.innerHTML=`
            <div class="alert alert-danger">
                Error loading items. Please refresh the page.
                ${s.message?`<div class="error-detail">${s.message}</div>`:""}
            </div>
        `,r&&(r.innerHTML="Error loading items."),await Vi([])}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM fully loaded"),Yy();const n=document.getElementById("report-form"),t=document.getElementById("keyword-search-btn"),e=document.getElementById("keyword-search"),r=document.getElementById("statusTabs"),s=document.getElementById("report-date"),o=document.getElementById("item-title"),a=document.getElementById("reportModal"),l=document.getElementById("report-btn"),h=document.getElementById("report-modal-toggle"),d=document.getElementById("report-modal-close"),p=document.getElementById("report-modal-cancel"),y=document.getElementById("navbar-toggle"),I=document.getElementById("navbarNav");Sn();const S=()=>{if(n&&(console.log("Resetting form state"),n.reset(),n.classList.remove("was-validated"),n.querySelectorAll(".form-input, .form-select").forEach(P=>{P.classList.remove("is-invalid"),P.setCustomValidity(""),P.setAttribute("data-pristine","true")}),s&&(s.valueAsDate=new Date),o)){const P=new Date,N=String(P.getDate()).padStart(2,"0"),V=String(P.getMonth()+1).padStart(2,"0"),B=P.getFullYear(),x=`${N}/${V}/${B}`;o.placeholder=`e.g., Lost Wallet - ${x}`,o.value=""}};if(y&&I&&y.addEventListener("click",()=>{console.log("Navbar toggle clicked"),I.classList.toggle("show")}),l&&l.addEventListener("click",()=>{console.log("Report button clicked"),a&&(S(),a.classList.add("show"))}),h&&h.addEventListener("click",P=>{P.preventDefault(),console.log("Report modal toggle clicked"),a&&(S(),a.classList.add("show"))}),d&&d.addEventListener("click",()=>{console.log("Modal close clicked"),a&&a.classList.remove("show")}),p&&p.addEventListener("click",()=>{console.log("Modal cancel clicked"),a&&a.classList.remove("show")}),a&&a.addEventListener("click",P=>{P.target===a&&a.classList.remove("show")}),s&&o){const P=new Date;P.setFullYear(2026),s.valueAsDate=P;const N=String(P.getDate()).padStart(2,"0"),V=String(P.getMonth()+1).padStart(2,"0"),B=P.getFullYear(),x=`${N}/${V}/${B}`;o.placeholder=`e.g., Lost Wallet - ${x}`,s.addEventListener("change",function(){const q=new Date(this.value);q.setFullYear(2026);const nt=String(q.getDate()).padStart(2,"0"),kt=String(q.getMonth()+1).padStart(2,"0"),lt=q.getFullYear(),v=`${nt}/${kt}/${lt}`,m=o.value.split(" - ")[0]||"";o.value=m?`${m} - ${v}`:"",o.placeholder=`e.g., Lost Wallet - ${v}`})}n&&(n.querySelectorAll(".form-input, .form-select").forEach(P=>{P.addEventListener("input",()=>{P.setAttribute("data-pristine","false"),P.classList.remove("is-invalid"),P.setCustomValidity("")})}),n.addEventListener("submit",async P=>{if(P.preventDefault(),!n.checkValidity()){P.stopPropagation(),n.classList.add("was-validated"),n.querySelectorAll(".form-input, .form-select").forEach(B=>{B.validity.valid||B.classList.add("is-invalid")});return}const N=o.value.trim();if(N.match(/.+\s-\s\d{2}\/\d{2}\/\d{4}/))o.setCustomValidity("");else{o.classList.add("is-invalid"),o.setCustomValidity("Invalid format"),P.stopPropagation(),n.classList.add("was-validated");return}const V=n.querySelector("#submit-btn");V.disabled=!0,V.classList.add("loading");try{const B={title:N,description:document.getElementById("description").value,location_desc:document.getElementById("location-desc").value,image_link:document.getElementById("image-link").value||"",contact_info:document.getElementById("contact-info").value,status:document.getElementById("item-status").value,item_type:document.getElementById("item-type").value,report_date:s.value};await Wy(B),console.log("Item added:",B),n.reset(),s.valueAsDate=new Date,o.placeholder=`e.g., Lost Wallet - ${new Date().toLocaleDateString("en-GB")}`,n.classList.remove("was-validated"),a&&a.classList.remove("show");const x=document.createElement("div");x.className="alert alert-success",x.innerHTML=`
                    <strong>Success!</strong> Item reported successfully.
                    <button type="button" class="alert-close">×</button>
                `,document.body.appendChild(x),setTimeout(()=>x.remove(),3e3),x.querySelector(".alert-close").addEventListener("click",()=>x.remove()),Sn()}catch(B){console.error("Error reporting item:",B);const x=document.createElement("div");x.className="alert alert-danger",x.innerHTML=`
                    <strong>Error!</strong> ${B.message}
                    <button type="button" class="alert-close">×</button>
                `,document.body.appendChild(x),setTimeout(()=>x.remove(),3e3),x.querySelector(".alert-close").addEventListener("click",()=>x.remove())}finally{V.disabled=!1,V.classList.remove("loading")}})),t&&e&&(t.addEventListener("click",()=>{const P=e.value;console.log("Search clicked, query:",P),Sn("all",P)}),e.addEventListener("keypress",P=>{if(P.key==="Enter"){P.preventDefault();const N=e.value;console.log("Search triggered by Enter key, query:",N),Sn("all",N)}})),r&&r.addEventListener("click",P=>{const N=P.target.closest(".tab-link");if(N&&N.dataset.status){console.log("Tab clicked:",N.dataset.status),document.querySelectorAll(".tab-link").forEach(B=>B.classList.remove("active")),N.classList.add("active");const V=document.getElementById("keyword-search").value;Sn(N.dataset.status,V)}})})})();
