if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const t=e=>n(e,s),f={module:{uri:s},exports:o,require:t};i[s]=Promise.all(c.map((e=>f[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-873c5e43"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"imgs/eye162.png",revision:"225cf4ea85587d51f8c0cbe0fcc78c52"},{url:"index.html",revision:"43da798be9fd5caf72ded40ea99070c4"},{url:"main.bundle.js",revision:"77059a2abf713e316c78cafb2867a082"},{url:"manifest.webmanifest",revision:"2387c4611b6e16f6f9f3117f17239fd9"},{url:"vendors.bundle.js",revision:"0e63e541824a411e0c87357fc6c164c3"},{url:"vendors.bundle.js.LICENSE.txt",revision:"539cf9c71fede5e617c2feac32907c3f"}],{})}));
