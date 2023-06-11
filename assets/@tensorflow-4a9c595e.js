/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ka=function(r,t){return(ka=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var o in e)e.hasOwnProperty(o)&&(n[o]=e[o])})(r,t)};function Kn(r,t){function n(){this.constructor=r}ka(r,t),r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function K(r,t,n,e){return new(n||(n=Promise))(function(o,a){function i(c){try{u(e.next(c))}catch(l){a(l)}}function s(c){try{u(e.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new n(function(l){l(c.value)}).then(i,s)}u((e=e.apply(r,t||[])).next())})}function X(r,t){var n,e,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,e&&(o=2&l[0]?e.return:l[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,l[1])).done)return o;switch(e=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,e=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(h){l=[6,h],e=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var cs=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,n){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+n+"."),this.platformName=t,this.platform=n},r.prototype.registerFlag=function(t,n,e){if(this.flagRegistry[t]={evaluationFn:n,setHook:e},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,n){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var n,e,o=(n=this.global.location.search,e={},n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return ls(e,i[0],i[1]),i.join("=")}),e);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function ls(r,t,n){r[decodeURIComponent(t)]=decodeURIComponent(n||"")}function M(){return Sa}var Sa=null,Pt=new Map,Pr=new Map;function Aa(r,t){var n=Na(r,t);return Pt.get(n)}function hs(r){return Pr.get(r)}function Oo(r){for(var t=Pt.entries(),n=[];;){var e=t.next(),o=e.done,a=e.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&n.push(s)}return n}function Da(r){var t=r.kernelName,n=r.backendName,e=Na(t,n);if(Pt.has(e))throw new Error("The kernel '"+t+"' for backend '"+n+"' is already registered");Pt.set(e,r)}function fs(r){var t=r.kernelName;Pr.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Pr.set(t,r)}function Na(r,t){return t+"_"+r}function Lr(r,t,n){return Math.max(r,Math.min(t,n))}function Ta(r){return r%2==0?r:r+1}function ps(r){for(var t=0,n=0;n<r.length;n++)t+=r[n];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function pn(r,t,n){n===void 0&&(n=""),E(Sn(r,t),function(){return n+" Shapes "+r+" and "+t+" must match"})}function ot(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Ze(r,t,n){if(t===void 0&&(t=[]),n===void 0&&(n=!1),t==null&&(t=[]),Array.isArray(r)||ne(r)&&!n)for(var e=0;e<r.length;++e)Ze(r[e],t,n);else t.push(r);return t}function j(r){if(r.length===0)return 1;for(var t=r[0],n=1;n<r.length;n++)t*=r[n];return t}function Sn(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var n=0;n<r.length;n++)if(r[n]!==t[n])return!1;return!0}function Cn(r){return r%1==0}function ds(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function Wr(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function Xe(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Mo(r,t,n){return t===void 0&&(t=function(e){return 0}),new Promise(function(e,o){var a=0,i=function(){if(r())e();else{a++;var s=t(a);n!=null&&a>=n?o():setTimeout(i,s)}};i()})}function vs(r,t){for(var n=1,e=-1,o=0;o<r.length;++o)if(r[o]>=0)n*=r[o];else if(r[o]===-1){if(e!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+e+" and dim "+o);e=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(e===-1){if(t>0&&t!==n)throw Error("Size("+t+") must match the product of shape "+r);return r}if(n===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+n);var a=r.slice();return a[e]=t/n,a}function kn(r,t){var n=t.length;return E((r=r==null?t.map(function(e,o){return o}):[].concat(r)).every(function(e){return e>=-n&&e<n}),function(){return"All values in axis param must be in range [-"+n+", "+n+") but got axis "+r}),E(r.every(function(e){return Cn(e)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(e){return e<0?n+e:e})}function ke(r,t){for(var n=[],e=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:kn(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(n.push(r[s]),e.push(s)),a[i]<=s&&i++}r[s]!==1&&(n.push(r[s]),e.push(s))}return{newShape:n,keptDims:e}}function pt(r,t){var n=null;if(r==null||r==="float32")n=new Float32Array(t);else if(r==="int32")n=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);n=new Uint8Array(t)}return n}function Lt(r,t){var n=null;if(r==null||r==="float32")n=new Float32Array(t);else if(r==="int32")n=new Int32Array(t);else if(r==="bool")n=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);n=new Array(t)}return n}function ms(r,t){for(var n=0;n<r.length;n++){var e=r[n];if(isNaN(e)||!isFinite(e))throw Error("A tensor of type "+t+" being uploaded contains "+e+".")}}function gs(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function ys(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function ne(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Fa(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function xs(r){if(r==null)return 0;var t=0;return r.forEach(function(n){return t+=n.length}),t}function to(r){return typeof r=="string"||r instanceof String}function bs(r){return typeof r=="boolean"}function ws(r){return typeof r=="number"}function yt(r){return Array.isArray(r)?yt(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":ws(r)?"float32":to(r)?"string":bs(r)?"bool":"float32"}function Ur(r){return!!(r&&r.constructor&&r.call&&r.apply)}function Vr(r,t){for(var n=t;n<r;++n)if(r%n==0)return n;return r}function ee(r){var t=r.length;if(t<2)return[];var n=new Array(t-1);n[t-2]=r[t-1];for(var e=t-3;e>=0;--e)n[e]=n[e+1]*r[e+1];return n}function _a(r,t,n){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Ze(r)),n&&ms(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var e=new Uint8Array(r.length),o=0;o<e.length;++o)Math.round(r[o])!==0&&(e[o]=1);return e}throw new Error("Unknown data type "+t)}function Bo(r,t){if(r.length===0)return t[0];var n=r.reduce(function(e,o){return e*o});if(n===0)return[];if(n!==t.length)throw new Error("["+r+"] does not match the input size.");return function e(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce(function(f,p){return f*p});for(c=0;c<u;c++)s[c]=e(o+c*h,l,i)}return s}(0,r,t)}function Oa(r,t){for(var n=xt(r,t),e=0;e<n.length;e++)n[e]=1;return n}function xt(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Qn(){return M().platform.now()}function Ma(r){r.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function Cs(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.encode(r,t)}function Wt(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.decode(r,t)}function Po(r,t,n){if(t===0)return 0;if(t===1)return r[0];for(var e=r[r.length-1],o=0;o<r.length-1;++o)e+=n[o]*r[o];return e}function Es(r,t,n){if(t===0)return[];if(t===1)return[r];for(var e=new Array(t),o=0;o<e.length-1;++o)e[o]=Math.floor(r/n[o]),r-=e[o]*n[o];return e[e.length-1]=r,e}var Rs=function(){function r(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Is)}return r.prototype.profileKernel=function(t,n,e){var o,a=this,i=this.backendTimer.time(function(){o=e()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var p=c[f];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+h+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,n,l)})})}),o},r}(),Is=function(){function r(){}return r.prototype.logKernelProfile=function(t,n,e,o,a,i){var s=typeof o=="number"?Xe(o+"ms",9):o.error,u=Xe(t,25),c=n.rank,l=n.size,h=Xe(n.shape.toString(),14),f="";for(var p in a){var d=a[p].shape||n.shape,m=d.length;f+=p+": "+m+"D "+(m>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Lo=20,it=3,pr=7;function ks(r,t,n,e){var o=ee(t),a=function(c,l,h,f){var p=j(l),d=f[f.length-1],m=new Array(d).fill(0),v=l.length,g=h==="complex64"?ut(c):c;if(v>1)for(var y=0;y<p/d;y++)for(var x=y*d,b=0;b<d;b++)m[b]=Math.max(m[b],st(g[x+b],0,h).length);return m}(r,t,n,o),i=t.length,s=function c(l,h,f,p,d,m){m===void 0&&(m=!0);var v=f==="complex64"?2:1,g=h[0],y=h.length;if(y===0)return f==="complex64"?[st(ut(l)[0],0,f)]:f==="bool"?[Ba(l[0])]:[l[0].toString()];if(y===1){if(g>Lo){var x=it*v,b=Array.from(l.slice(0,x)),w=Array.from(l.slice((g-it)*v,g*v));return f==="complex64"&&(b=ut(b),w=ut(w)),["["+b.map(function(B,z){return st(B,d[z],f)}).join(", ")+", ..., "+w.map(function(B,z){return st(B,d[g-it+z],f)}).join(", ")+"]"]}return["["+(f==="complex64"?ut(l):Array.from(l)).map(function(B,z){return st(B,d[z],f)}).join(", ")+"]"]}var R=h.slice(1),A=p.slice(1),k=p[0]*v,I=[];if(g>Lo){for(var S=0;S<it;S++){var F=(T=S*k)+k;I.push.apply(I,c(l.slice(T,F),R,f,A,d,!1))}for(I.push("..."),S=g-it;S<g;S++)F=(T=S*k)+k,I.push.apply(I,c(l.slice(T,F),R,f,A,d,S===g-1))}else for(S=0;S<g;S++){var T;F=(T=S*k)+k,I.push.apply(I,c(l.slice(T,F),R,f,A,d,S===g-1))}var W=y===2?",":"";for(I[0]="["+I[0]+W,S=1;S<I.length-1;S++)I[S]=" "+I[S]+W;var L=`,
`;for(S=2;S<y;S++)L+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(m?"":L),I}(r,t,n,o,a),u=["Tensor"];return e&&(u.push("  dtype: "+n),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function st(r,t,n){return Xe(Array.isArray(r)?parseFloat(r[0].toFixed(pr))+" + "+parseFloat(r[1].toFixed(pr))+"j":to(r)?"'"+r+"'":n==="bool"?Ba(r):parseFloat(r.toFixed(pr)).toString(),t)}function Ba(r){return r===0?"false":"true"}function ut(r){for(var t=[],n=0;n<r.length;n+=2)t.push([r[n],r[n+1]]);return t}var dt=function(){function r(t,n,e){var o=this;if(this.dtype=n,this.shape=t.slice(),this.size=j(t),e!=null){var a=e.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=e||Lt(n,this.size),this.strides=ee(t)}return r.prototype.set=function(t){for(var n=this,e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];e.length===0&&(e=[0]),E(e.length===this.rank,function(){return"The number of provided coordinates ("+e.length+") must match the rank ("+n.rank+")"});var a=this.locToIndex(e);this.values[a]=t},r.prototype.get=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];t.length===0&&(t=[0]);for(var e=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[e]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}e++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var n=t[t.length-1],e=0;e<t.length-1;++e)n+=this.strides[e]*t[e];return n},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var n=new Array(this.shape.length),e=0;e<n.length-1;++e)n[e]=Math.floor(t/this.strides[e]),t-=n[e]*this.strides[e];return n[n.length-1]=t,n},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Jn().makeTensor(this.values,this.shape,this.dtype)},r}(),Jn=null,O=null,Pa=null,On=function(){function r(t,n,e,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=j(t),this.strides=ee(t),this.dataId=e,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,n){return this.throwIfDisposed(),this.reshape([t,n])},r.prototype.as3D=function(t,n,e){return this.throwIfDisposed(),this.reshape([t,n,e])},r.prototype.as4D=function(t,n,e,o){return this.throwIfDisposed(),this.reshape([t,n,e,o])},r.prototype.as5D=function(t,n,e,o,a){return this.throwIfDisposed(),this.reshape([t,n,e,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),O.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(n){switch(n.label){case 0:return[4,this.data()];case 1:return t=n.sent(),[2,O.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return O.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(n){switch(n.label){case 0:return[4,this.data()];case 1:return t=n.sent(),[2,Bo(this.shape,t)]}})})},r.prototype.arraySync=function(){return Bo(this.shape,this.dataSync())},r.prototype.data=function(){return K(this,void 0,void 0,function(){var t,n;return X(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),t=Jn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:n=e.sent();try{return[2,n.map(function(o){return Wt(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}e.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Jn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(n){return Wt(n)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),[4,Jn().read(this.dataId)];case 1:return t=n.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Jn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),O.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),O.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),O.expandDims(this,t)},r.prototype.cumsum=function(t,n,e){return t===void 0&&(t=0),n===void 0&&(n=!1),e===void 0&&(e=!1),O.cumsum(this,t,n,e)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),O.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),O.clone(this)},r.prototype.oneHot=function(t,n,e){return this.throwIfDisposed(),O.oneHot(this,t,n,e)},r.prototype.toString=function(t){return t===void 0&&(t=!1),ks(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),O.tile(this,t)},r.prototype.gather=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),O.gather(this,t,n)},r.prototype.matMul=function(t,n,e){return n===void 0&&(n=!1),e===void 0&&(e=!1),this.throwIfDisposed(),O.matMul(this,t,n,e)},r.prototype.dot=function(t){return this.throwIfDisposed(),O.dot(this,t)},r.prototype.norm=function(t,n,e){return t===void 0&&(t="euclidean"),n===void 0&&(n=null),e===void 0&&(e=!1),this.throwIfDisposed(),O.norm(this,t,n,e)},r.prototype.slice=function(t,n){return this.throwIfDisposed(),O.slice(this,t,n)},r.prototype.reverse=function(t){return this.throwIfDisposed(),O.reverse(this,t)},r.prototype.concat=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),O.concat([this].concat(t),n)},r.prototype.split=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),O.split(this,t,n)},r.prototype.stack=function(t,n){return n===void 0&&(n=0),O.stack([this,t],n)},r.prototype.unstack=function(t){return t===void 0&&(t=0),O.unstack(this,t)},r.prototype.pad=function(t,n){return n===void 0&&(n=0),O.pad(this,t,n)},r.prototype.batchNormalization=function(t,n,e,o,a){return e===void 0&&(e=.001),Pa("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,n,a,o,e)},r.prototype.batchNorm=function(t,n,e,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),O.batchNorm(this,t,n,e,o,a)},r.prototype.all=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.all(this,t,n)},r.prototype.any=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.any(this,t,n)},r.prototype.logSumExp=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.logSumExp(this,t,n)},r.prototype.sum=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.sum(this,t,n)},r.prototype.prod=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.prod(this,t,n)},r.prototype.mean=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.mean(this,t,n)},r.prototype.min=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.min(this,t,n)},r.prototype.max=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),O.max(this,t,n)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),O.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),O.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),O.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),O.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),O.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),O.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),O.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),O.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),O.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),O.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),O.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),O.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),O.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),O.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),O.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),O.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),O.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),O.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),O.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),O.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),O.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),O.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),O.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),O.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),O.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),O.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),O.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),O.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),O.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),O.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),O.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),O.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),O.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),O.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),O.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),O.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),O.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),O.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),O.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),O.logicalXor(this,t)},r.prototype.where=function(t,n){return this.throwIfDisposed(),O.where(t,this,n)},r.prototype.neg=function(){return this.throwIfDisposed(),O.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),O.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),O.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),O.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),O.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),O.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),O.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),O.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),O.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),O.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),O.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),O.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),O.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),O.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),O.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),O.abs(this)},r.prototype.clipByValue=function(t,n){return this.throwIfDisposed(),O.clipByValue(this,t,n)},r.prototype.relu=function(){return this.throwIfDisposed(),O.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),O.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),O.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),O.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),O.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),O.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),O.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),O.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),O.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),O.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),O.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),O.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),O.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),O.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),O.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),O.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),O.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),O.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),O.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),O.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),O.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),O.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),O.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),O.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),O.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),O.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),O.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),O.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,n){return n===void 0&&(n=!1),this.throwIfDisposed(),O.image.resizeBilinear(this,t,n)},r.prototype.resizeNearestNeighbor=function(t,n){return n===void 0&&(n=!1),this.throwIfDisposed(),O.image.resizeNearestNeighbor(this,t,n)},r.prototype.conv1d=function(t,n,e,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),O.conv1d(this,t,n,e,o,a,i)},r.prototype.conv2d=function(t,n,e,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.conv2d(this,t,n,e,o,a,i)},r.prototype.conv2dTranspose=function(t,n,e,o,a){return this.throwIfDisposed(),O.conv2dTranspose(this,t,n,e,o,a)},r.prototype.depthwiseConv2D=function(t,n,e,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),O.depthwiseConv2d(this,t,n,e,o,a,i)},r.prototype.separableConv2d=function(t,n,e,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),O.separableConv2d(this,t,n,e,o,a,i)},r.prototype.avgPool=function(t,n,e,o){return this.throwIfDisposed(),O.avgPool(this,t,n,e,o)},r.prototype.maxPool=function(t,n,e,o){return this.throwIfDisposed(),O.maxPool(this,t,n,e,o)},r.prototype.localResponseNormalization=function(t,n,e,o){return t===void 0&&(t=5),n===void 0&&(n=1),e===void 0&&(e=1),o===void 0&&(o=.5),O.localResponseNormalization(this,t,n,e,o)},r.prototype.pool=function(t,n,e,o,a){return this.throwIfDisposed(),O.pool(this,t,n,e,o,a)},r.prototype.variable=function(t,n,e){return t===void 0&&(t=!0),this.throwIfDisposed(),Jn().makeVariable(this,t,n,e)},r.prototype.unsortedSegmentSum=function(t,n){return this.throwIfDisposed(),O.unsortedSegmentSum(this,t,n)},r.prototype.batchToSpaceND=function(t,n){return this.throwIfDisposed(),O.batchToSpaceND(this,t,n)},r.prototype.spaceToBatchND=function(t,n){return this.throwIfDisposed(),O.spaceToBatchND(this,t,n)},r.prototype.topk=function(t,n){return t===void 0&&(t=1),n===void 0&&(n=!0),this.throwIfDisposed(),O.topk(this,t,n)},r.prototype.stridedSlice=function(t,n,e,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),O.stridedSlice(this,t,n,e,o,a,i,s,u)},r.prototype.depthToSpace=function(t,n){return this.throwIfDisposed(),O.depthToSpace(this,t,n)},r.prototype.fft=function(){return this.throwIfDisposed(),O.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),O.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),O.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),O.spectral.irfft(this)},r}();Object.defineProperty(On,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Wo,zr,Gr,Hr,qr,Ut=function(r){function t(n,e,o,a){var i=r.call(this,n.shape,n.dtype,n.dataId,a)||this;return i.trainable=e,i.name=o,i}return Kn(t,r),t.prototype.assign=function(n){if(n.dtype!==this.dtype)throw new Error("dtype of the new value ("+n.dtype+") and previous value ("+this.dtype+") must match");if(!Sn(n.shape,this.shape))throw new Error("shape of the new value ("+n.shape+") and previous value ("+this.shape+") must match");Jn().disposeTensor(this),this.dataId=n.dataId,Jn().incRef(this,null)},t.prototype.dispose=function(){Jn().disposeVariable(this),this.isDisposedInternal=!0},t}(On);Object.defineProperty(Ut,Symbol.hasInstance,{value:function(r){return r instanceof On&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Wo||(Wo={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(zr||(zr={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Gr||(Gr={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(Hr||(Hr={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(qr||(qr={}));var Ss={float32:Hr,int32:zr,bool:Gr,complex64:qr};function Dn(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return Ss[r][t]}function dr(r){return Dn(r,"int32")}function yn(r,t){if(r.dtype===t.dtype)return[r,t];var n=Dn(r.dtype,t.dtype);return[r.cast(n),t.cast(n)]}function As(r,t){E(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function La(r){var t=[];return function n(e,o,a){if(e!=null){if(e instanceof On)return void o.push(e);if(i=e,!(!Array.isArray(i)&&typeof i!="object")){var i,s=e;for(var u in s){var c=s[u];a.has(c)||(a.add(c),n(c,o,a))}}}}(r,t,new Set),t}var vr,Uo=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Ds=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Uo}return r.prototype.ready=function(){return K(this,void 0,void 0,function(){var t,n,e;return X(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),n=0,o.label=1;case 1:return n<t.length?(e=t[n],[4,this.initializeBackend(e).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(e)]:[3,4];case 3:return o.sent(),[2];case 4:return n++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),n=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+n+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(n)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,n,e){return e===void 0&&(e=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:n,priority:e},!0)},r.prototype.setBackend=function(t){return K(this,void 0,void 0,function(){var n,e,o;return X(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,n=this.initializeBackend(t),e=n.success,n.asyncInit?[4,e]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=e,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Rs(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;Oo(this.backendName).forEach(function(n){n.setupFunc!=null&&n.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var n=this;Oo(t).forEach(function(e){e.disposeFunc!=null&&e.disposeFunc(n.registry[t])})},r.prototype.initializeBackend=function(t){var n=this,e=this.registryFactory[t];if(e==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=e.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<n.pendingBackendInitId)&&(n.registry[t]=s,n.pendingBackendInit=null,!0)}).catch(function(s){return!(a<n.pendingBackendInitId)&&(n.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(n,e){return t.registryFactory[e].priority-t.registryFactory[n].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),n=0;n<t.length;n++){var e=t[n],o=this.initializeBackend(e),a=o.success,i=o.asyncInit;if(i||a)return{name:e,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,n){var e=this.state.tensorInfo.get(n),o=e.backend,a=this.readSync(n);o.disposeData(n),e.backend=t,t.move(n,a,e.shape,e.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,n){var e,o=this,a=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(e)},function(){return(e=n())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),e})},r.prototype.scopedRun=function(t,n,e){t();try{var o=e();return n(),o}catch(a){throw n(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var n=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),e={x:t};return this.addTapeNode(this.state.activeScope.name,e,[n],function(o){return{x:function(){return o.toFloat()}}},[]),n},r.prototype.runKernel=function(t,n,e,o,a){return this.runKernelFunc(null,n,null,t,e,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,n,e){var o=this.backend.numDataIds(),a=0;e.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-n-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,n,e,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,p=function(y){h&&(l=y.map(function(x){return c.keep(c.clone(x))}))},d=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=Aa(o,this.backendName);return f=g!=null?function(){var y=c.backend.numDataIds();v=g.kernelFunc({inputs:n,attrs:a,backend:c.backend});var x=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,x);var b=x.map(function(R){var A=R.dataId,k=R.shape,I=R.dtype;return c.makeTensorFromDataId(A,k,I)}),w=b.filter(function(R,A){return s[A]});return p((i||[]).slice().concat(w)),b}:function(){var y=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,p)});var x=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,x),x},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,n,function(){return f()}):f()}),h&&this.addTapeNode(o,n,u,e,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(n).map(function(y){return n[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,n,e,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");e=e||"float32",o=o||this.backend;var a=t;e==="string"&&to(t[0])&&(a=t.map(function(l){return Cs(l)}));var i=o.write(a,n,e),s=new On(n,e,i,this.nextTensorId());if(this.incRef(s,o),e==="string"){var u=this.state.tensorInfo.get(i),c=xs(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,n,e,o){var a=new On(n,e=e||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,n,e,o){n===void 0&&(n=!0),e=e||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new Ut(t,n,e,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,n){var e=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,e===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Fa(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof Ut||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var n=this.state.tensorInfo.get(t.dataId);n.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=n.bytes),this.state.numDataBuffers--,n.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var n=this.state.registeredVariables[t];this.disposeVariable(n)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return K(this,void 0,void 0,function(){var n,e;return X(this,function(o){return this.state.profiling=!0,n=this.state.numBytes,e=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-e,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,n,e,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:e,saved:a},u=hs(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var f=e[h],p=xt(f.size,f.dtype);return i.makeTensor(p,f.shape,f.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n},r.prototype.endScope=function(t){for(var n=this,e=La(t),o=new Set(e.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(function(u){u.kept||u.scopeId!==s.id||n.track(u)})},r.prototype.gradients=function(t,n,e,o){var a=this;if(o===void 0&&(o=!1),E(n.length>0,function(){return"gradients() received an empty list of xs."}),e!=null&&e.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+e.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});E(i instanceof On,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},f={},p=0;p<c.length;p++)h[c[p].id]=!0;for(p=0;p<u.length;p++){var d=(R=u[p]).inputs;for(var m in d){for(var v=d[m],g=!1,y=0;y<c.length;y++)if(h[v.id]){R.outputs.forEach(function(S){return h[S.id]=!0}),g=!0,f[R.id]=!0;break}if(g)break}}var x={};x[l.id]=!0;var b={};for(p=u.length-1;p>=0;p--)for(d=(R=u[p]).inputs,y=0;y<R.outputs.length;y++)if(x[R.outputs[y].id]){for(var m in d)x[d[m].id]=!0,b[R.id]=!0;break}var w=[];for(p=0;p<u.length;p++){var R;if(f[(R=u[p]).id]&&b[R.id]){var A={};for(var m in R.inputs){var k=R.inputs[m];h[k.id]&&(A[m]=k)}var I=Object.assign({},R);I.inputs=A,I.outputs=R.outputs,w.push(I)}}return w}(this.state.activeTape,n,i);if(!o&&s.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=e??(u=i.shape,c=Oa(j(u),"float32"),N.makeTensor(c,u,"float32")),function(f,p,d){for(var m=function(g){var y=p[g],x=[];if(y.outputs.forEach(function(A){var k=f[A.id];k!=null?x.push(k):x.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var b=y.gradient(x),w=function(A){if(!(A in b))throw new Error("Cannot backprop through input "+A+". Available gradients found: "+Object.keys(b)+".");var k=d(function(){return b[A]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+A+" must have 'float32' dtype, but has '"+k.dtype+"'");var I=y.inputs[A];if(!Sn(k.shape,I.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+A+"' has shape '"+k.shape+"', which does not match the shape of the input '"+I.shape+"'");if(f[I.id]==null)f[I.id]=k;else{var S=f[I.id];f[I.id]=S.add(k),S.dispose()}};for(var R in y.inputs)w(R)},v=p.length-1;v>=0;v--)m(v)}(l,s,function(f){return a.tidy(f)});var h=n.map(function(f){return l[f.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(f){for(var p=0,d=f.saved;p<d.length;p++)d[p].dispose()}),a.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(t){var n=this;return E(Ur(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var e,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof On}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),n.runKernelFunc(function(s,u){return E((e=t.apply(void 0,o.concat([u]))).value instanceof On,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(Ur(e.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),e.value},i,function(s,u){var c=e.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(f){return f instanceof On}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(f,p){h[p]=function(){return f}}),h})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return K(this,void 0,void 0,function(){var n,e;return X(this,function(o){switch(o.label){case 0:return n=Qn(),[4,this.backend.time(t)];case 1:return(e=o.sent()).wallMs=Qn()-n,[2,e]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Uo,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),N=function(){var r=function(){if(vr==null){var n=void 0;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else{if(typeof self>"u")throw new Error("Could not find a global object");n=self}vr=n}return vr}();if(r._tfengine==null){var t=new cs(r);r._tfengine=new Ds(t)}return function(n){Sa=n}(r._tfengine.ENV),Jn=function(){return r._tfengine},r._tfengine}();function Wa(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var ce=M();ce.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),ce.registerFlag("IS_BROWSER",function(){return Wa()}),ce.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),ce.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),ce.registerFlag("PROD",function(){return!1}),ce.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return ce.getBool("DEBUG")}),ce.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),ce.registerFlag("IS_TEST",function(){return!1});var vt,zn,Vn,Ee={},mr={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Ns(r,t){Ee[r]=t}function re(r){r in Ee||(Ee[r]=function(n){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var e=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(n);return e.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Ee[n]},!1),n===1?e.getContext("webgl",mr)||e.getContext("experimental-webgl",mr):e.getContext("webgl2",mr)}(r));var t=Ee[r];return t.isContextLost()?(delete Ee[r],re(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Ee[r])}function tr(r,t){return[t,r]}function lt(r){var t=j(r);return Wr(Math.ceil(t/4))}function bt(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function ro(r,t){var n,e,o,a,i,s,u,c,l,h=r;return M().getNumber("WEBGL_VERSION")===2?(n=h.R32F,e=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(n=r.RGBA,e=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:e,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function Y(r,t,n){var e=n();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Os(o,a))}(r),e}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(vt||(vt={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(zn||(zn={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Vn||(Vn={}));var Ts=596e-10,Fs=65504;function _s(r){return!!(M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Ts<Math.abs(r)&&Math.abs(r)<Fs)}function Os(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function St(r,t,n){return fe(r,t,function(){return r.getExtension(n)},'Extension "'+n+'" not supported on this browser.')}function Ms(r,t,n){var e=fe(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(Y(r,t,function(){return r.shaderSource(e,n)}),Y(r,t,function(){return r.compileShader(e)}),r.getShaderParameter(e,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function Bs(r,t,n){var e=fe(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(Y(r,t,function(){return r.shaderSource(e,n)}),Y(r,t,function(){return r.compileShader(e)}),r.getShaderParameter(e,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Ps.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return Xe((g+1).toString(),c)+v}),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var p=l.slice(0,s-1),d=l.slice(s-1,s),m=l.slice(s);console.log(p.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+Xe(d[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(n,r.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}var gr,yr,Ps=/ERROR: [0-9]+:([0-9]+):/g;function Ls(r,t){return fe(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Ws(r,t,n){if(Y(r,t,function(){return r.linkProgram(n)}),r.getProgramParameter(n,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}function xr(r,t,n){if(Y(r,t,function(){return r.validateProgram(n)}),r.getProgramParameter(n,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function Us(r,t,n){var e=fe(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Y(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,e)}),Y(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,n,r.STATIC_DRAW)}),e}function Vs(r,t,n){var e=fe(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Y(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e)}),Y(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,n,r.STATIC_DRAW)}),e}function zs(r,t){return fe(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Gs(r,t){var n=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var e="["+r+"x"+t+"]";throw new Error("Requested texture size "+e+" is invalid.")}if(r>n||t>n)throw e="["+r+"x"+t+"]",new Error("Requested texture size "+e+" greater than WebGL maximum on this browser / GPU "+("["+n+"x"+n+"]")+".")}function Hs(r,t){return fe(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Vo(r,t,n,e,o,a,i,s){var u=r.getAttribLocation(n,e);return u!==-1&&(Y(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),Y(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),Y(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function qs(r,t,n,e){$s(r,e),Y(r,t,function(){return r.activeTexture(r.TEXTURE0+e)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,n)})}function Ks(r,t,n,e){return fe(r,t,function(){return r.getUniformLocation(n,e)},'uniform "'+e+'" not present in program.')}function Xs(r,t,n){return r.getUniformLocation(t,n)}function js(r,t,n,e,o,a){Y(r,t,function(){return qs(r,t,e,a)}),Y(r,t,function(){return r.uniform1i(o,a)})}function br(r,t,n,e){Y(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),Y(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,n,0)})}function zo(r,t,n){Y(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),Y(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function At(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Ys(r,t))}function Ys(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function fe(r,t,n,e){var o=Y(r,t,function(){return n()});if(o==null)throw new Error(e);return o}function $s(r,t){var n=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,e=t+r.TEXTURE0;if(e<r.TEXTURE0||e>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function Vt(r,t){return t===void 0&&(t=2),j(r.slice(0,r.length-t))}function zt(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function wr(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[Vt(r)].concat(zt(r))),t}function Qs(r,t){var n;t===void 0&&(t=!1);var e=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(e*=2,(r=r.map(function(c,l){return l>=r.length-2?Ta(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=ke(r);r=o.newShape}var a=j(r);if(r.length<=1&&a<=e)return[1,a];if(r.length===2&&r[0]<=e&&r[1]<=e)return r;if(r.length===3&&r[0]*r[1]<=e&&r[2]<=e)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=e&&r[1]*r[2]<=e)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=e&&r[3]<=e)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=e&&r[1]*r[2]*r[3]<=e)return[r[0],r[1]*r[2]*r[3]];if(t){var i=Vt(r),s=2,u=2;return r.length&&(s=(n=zt(r))[0],u=n[1]),Wr(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return Wr(a)}function Dt(r){return r%2==0}function Nt(r,t){if(Sn(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var n=r.slice(-1)[0],e=t.slice(-1)[0];if(n===e||Dt(n)&&Dt(e)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Dt(r[0])&&Dt(t[0])}function Js(r){if(gr==null){var t=re(r);gr=t.getParameter(t.MAX_TEXTURE_SIZE)}return gr}function Zs(r){if(yr==null){var t=re(r);yr=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,yr)}function nu(r){if(r===0)return 0;var t=re(r);return qn(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:qn(t,"EXT_disjoint_timer_query")?1:0}function qn(r,t){return r.getExtension(t)!=null}function Go(r){try{if(re(r)!=null)return!0}catch{return!1}return!1}function eu(r){if(r===0)return!1;var t=re(r);if(r===1){if(!qn(t,"OES_texture_float"))return!1}else if(!qn(t,"EXT_color_buffer_float"))return!1;return Kr(t)}function tu(r){if(r===0)return!1;var t=re(r);if(r!==1){if(qn(t,"EXT_color_buffer_float"))return Kr(t);if(qn(t,"EXT_color_buffer_half_float")){var n=t.getExtension("EXT_color_buffer_half_float");return function(e,o){var a=ro(e,o),i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);var u=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(i),e.deleteFramebuffer(s),u}(t,n)}return!1}return!!qn(t,"OES_texture_float")&&!!qn(t,"WEBGL_color_buffer_float")&&Kr(t)}function Kr(r){var t=ro(r),n=r.createTexture();r.bindTexture(r.TEXTURE_2D,n),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var e=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,e),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,n,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(n),r.deleteFramebuffer(e),o}function ru(r){return r===2&&re(r).fenceSync!=null}var Z=M();function Ua(r){M().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function Rn(r,t){return N.tidy(r,t)}function Bn(r){La(r).forEach(function(t){return t.dispose()})}function ou(r){return N.keep(r)}function Gt(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];M().getBool("IS_TEST")||console.warn.apply(console,r)}function be(r,t){var n=r;if(ne(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var e=[];Array.isArray(n)||ne(n)&&t!=="string";)e.push(n.length),n=n[0];return Array.isArray(r)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!ne(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,e,[]),e}function Ho(r,t,n,e){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+n+"' passed to '"+e+"' must be "+r+" tensor, but got "+t+" tensor")}function C(r,t,n,e){if(e===void 0&&(e="numeric"),r instanceof On)return Ho(e,r.dtype,t,n),r;var o=yt(r);if(o!=="string"&&["bool","int32","float32"].indexOf(e)>=0&&(o=e),Ho(e,o,t,n),r==null||!ne(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=be(r,o);ne(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?_a(r,o,M().getBool("DEBUG")):Ze(r,[],!0);return N.makeTensor(s,i,o)}function Ht(r,t,n,e){if(e===void 0&&(e="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return C(o,t+"["+a+"]",n)},e)}function Va(r,t){for(var n=0;n<r.length;++n)if(r[r.length-n-1]!==t-1-n)return!1;return!0}function au(r,t,n){for(var e=r.length+t.length,o=[],a=0,i=0,s=0;s<e;s++)n.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function Nn(r,t){for(var n=[],e=r.length,o=0;o<e;o++)t.indexOf(o)===-1&&n.push(r[o]);return[n,t.map(function(a){return r[a]})]}function Pn(r,t){return au(r,t.map(function(n){return 1}),t)}function Un(r,t,n){E(Va(t,n),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+n+" input."})}function oe(r,t){if(Va(r,t))return null;for(var n=[],e=0;e<t;++e)r.indexOf(e)===-1&&n.push(e);return r.forEach(function(o){return n.push(o)}),n}function oo(r){return r.map(function(t,n){return[n,t]}).sort(function(t,n){return t[1]-n[1]}).map(function(t){return t[0]})}function ae(r,t){for(var n=[],e=t-r;e<t;++e)n.push(e);return n}function iu(r,t){var n=r[0].length;r.forEach(function(o,a){E(o.length===n,function(){return"Error in concat"+n+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+n+")"})}),E(t>=0&&t<n,function(){return"Error in concat"+n+"D: axis must be between 0 and "+(n-1)+"."});var e=r[0];r.forEach(function(o,a){for(var i=0;i<n;i++)E(i===t||o[i]===e[i],function(){return"Error in concat"+n+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+e+") along the non-concatenated axis "+a+"."})})}function nt(r,t){for(var n=r[0].slice(),e=1;e<r.length;e++)n[t]+=r[e][t];return n}function D(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var n=t[0],e=r[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];N.startScope(n);try{var s=e.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),N.endScope(s),s}catch(u){throw N.endScope(null),u}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}Z.registerFlag("HAS_WEBGL",function(){return Z.getNumber("WEBGL_VERSION")>0}),Z.registerFlag("WEBGL_VERSION",function(){return Go(2)?2:Go(1)?1:0}),Z.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return Z.get("WEBGL_VERSION")===2}),Z.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),Z.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),Z.registerFlag("WEBGL_PACK",function(){return Z.getBool("HAS_WEBGL")}),Z.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_PACK_CLIP",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),Z.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_PACK_REDUCE",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_LAZILY_UNPACK",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_CONV_IM2COL",function(){return Z.getBool("WEBGL_PACK")}),Z.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Js(Z.getNumber("WEBGL_VERSION"))}),Z.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Zs(Z.getNumber("WEBGL_VERSION"))}),Z.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=Z.getNumber("WEBGL_VERSION");return r===0?0:nu(r)}),Z.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return Z.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),Z.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return eu(Z.getNumber("WEBGL_VERSION"))}),Z.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!Z.getBool("WEBGL_FORCE_F16_TEXTURES")&&Z.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),Z.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return tu(Z.getNumber("WEBGL_VERSION"))}),Z.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return ru(Z.getNumber("WEBGL_VERSION"))}),Z.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return Z.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Pa=Ua;var An=D({complex_:function(r,t){var n=C(r,"real","complex"),e=C(t,"imag","complex");return pn(n.shape,e.shape,"real and imag shapes, "+n.shape+" and "+e.shape+", must match in call to tf.complex()."),N.runKernelFunc(function(o){return o.complex(n,e)},{$real:n,$imag:e})}}),Hn=D({real_:function(r){var t=C(r,"input","real");return N.runKernelFunc(function(n){return n.real(t)},{$input:t})}}),Zn=D({imag_:function(r){var t=C(r,"input","imag");return N.runKernelFunc(function(n){return n.imag(t)},{$input:t})}});function Tn(r,t,n){return we(r,t,be(r,n),n)}function we(r,t,n,e){if(e==null&&(e=yt(r)),e==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!ne(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Ma(t);var o=j(t),a=j(n);E(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<n.length;++i){var s=n[i],u=i!==n.length-1||s!==j(t.slice(i));E(n[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+t+"). "})}}return ne(r)||Array.isArray(r)||(r=[r]),t=t||n,r=e!=="string"?_a(r,e,M().getBool("DEBUG")):Ze(r,[],!0),N.makeTensor(r,t,e)}function Q(r,t){if((ne(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&ne(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return we(r,[],[],t)}function et(r,t){ot(r);var n=be(r,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return we(r,null,n,t)}function je(r,t,n){if(ot(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var e=be(r,n);if(e.length!==2&&e.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(e.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return we(r,t,e,n)}function za(r,t,n){if(ot(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var e=be(r,n);if(e.length!==3&&e.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(e.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return we(r,t,e,n)}function Re(r,t,n){if(ot(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var e=be(r,n);if(e.length!==4&&e.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(e.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return we(r,t,e,n)}function su(r,t,n){if(ot(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var e=be(r,n);if(e.length!==5&&e.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(e.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return we(r,t,e,n)}function uu(r,t,n){if(ot(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var e=be(r,n);if(e.length!==6&&e.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(e.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return we(r,t=t||e,e,n)}function cu(r,t,n,e){return t===void 0&&(t=!0),N.makeVariable(r,t,n,e)}function at(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var n=at(r,"float32"),e=wn(r,"float32");return An(n,e)}var o=Oa(j(r),t);return N.makeTensor(o,r,t)}function wn(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var n=wn(r,"float32"),e=wn(r,"float32");return An(n,e)}var o=xt(j(r),t);return N.makeTensor(o,r,t)}function ao(r,t,n){return N.runKernelFunc(function(e){return e.fill(r,t,n)},{})}function lu(r,t,n){if(n<=0)throw new Error("The number of values should be positive.");return N.runKernelFunc(function(e){return e.linspace(r,t,n)},{})}function qt(r,t,n,e){if(n===void 0&&(n=1),e===void 0&&(e="float32"),n===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&n<0||t<r&&n>1)return wn([0],e);var o=xt(Math.abs(Math.ceil((t-r)/n)),e);t<r&&n===1&&(n=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return et(o,e)}var Ga=D({onesLike_:function(r){var t=C(r,"x","onesLike");if(t.dtype==="complex64"){var n=Ga(Hn(t)),e=hn(Zn(t));return An(n,e)}return N.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return hn(o)}}})}}),hn=D({zerosLike_:function(r){var t=C(r,"x","zerosLike");return N.runKernelFunc(function(n){return n.zerosLike(t)},{$x:t},function(n,e){return{$x:function(){return hn(n)}}})}}),te=D({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var n=Ht(r,"tensors","concat");n[0].dtype==="complex64"&&n.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=kn(t,n[0].shape)[0];var e=nt(n.map(function(s){return s.shape}),t);if(j(e)===0)return Tn([],e);if((n=n.filter(function(s){return s.size>0})).length===1)return n[0];var o=n.map(function(s){return s.shape});iu(o,t);var a=n,i={axis:t};return N.runKernelFunc(function(s){return s.concat(n,t)},a,function(s){var u=o.map(function(c){return c[t]});return io(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),hu=D({concat1d_:function(r){return te(r,0)}}),fu=D({concat2d_:function(r,t){return te(r,t)}}),pu=D({concat3d_:function(r,t){return te(r,t)}}),du=D({concat4d_:function(r,t){return te(r,t)}}),io=D({split_:function(r,t,n){n===void 0&&(n=0);var e,o=C(r,"x","split");return n=kn(n,o.shape)[0],typeof t=="number"?(E(o.shape[n]%t==0,function(){return"Number of splits must evenly divide the axis."}),e=new Array(t).fill(o.shape[n]/t)):(E(o.shape[n]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),e=t),N.runKernelFunc(function(a){return a.split(o,e,n)},{$x:o},function(a){return{$x:function(){return te(a,n)}}})}});function Fe(r,t){return r(t={exports:{}},t.exports),t.exports}var vu=Fe(function(r){(function(t,n,e){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var p=.02519603282416938*(u+=h.charCodeAt(f));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.alea=i})(0,r,!1)}),mu=Fe(function(r){(function(t,n,e){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xor128=i})(0,r,!1)}),gu=Fe(function(r){(function(t,n,e){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xorwow=i})(0,r,!1)}),yu=Fe(function(r){(function(t,n,e){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xorshift7=i})(0,r,!1)}),xu=Fe(function(r){(function(t,n,e){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,p=u.i;return u.w=h=h+1640531527|0,l=f[p+34&127],c=f[p=p+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[p]=l^c,u.i=p,l+(h^h>>>16)|0},function(c,l){var h,f,p,d,m,v=[],g=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,g=Math.max(g,l.length)),p=0,d=-32;d<g;++d)l&&(f^=l.charCodeAt((d+32)%l.length)),d===0&&(m=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,d>=0&&(m=m+1640531527|0,p=(h=v[127&d]^=f+m)==0?p+1:0);for(p>=128&&(v[127&(l&&l.length||0)]=-1),p=127,d=512;d>0;--d)f=v[p+34&127],h=v[p=p+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,v[p]=f^h;c.w=m,c.X=v,c.i=p}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.xor4096=i})(0,r,!1)}),bu=Fe(function(r){(function(t,n,e){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,p=u.d,d=u.a;return h=h<<25^h>>>7^f,f=f-p|0,p=p<<24^p>>>8^d,d=d-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-p|0,u.d=p<<16^f>>>16^d,u.a=d-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}n&&n.exports?n.exports=i:e&&e.amd?e(function(){return i}):this.tychei=i})(0,r,!1)}),Ie=Fe(function(r){(function(t,n){var e,o=this,a=256,i=6,s="random",u=n.pow(a,i),c=n.pow(2,52),l=2*c,h=a-1;function f(g,y,x){var b=[],w=m(function k(I,S){var F,T=[],W=typeof I;if(S&&W=="object")for(F in I)try{T.push(k(I[F],S-1))}catch{}return T.length?T:W=="string"?I:I+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[g,v(t)]:g??function(){try{var k;return e&&(k=e.randomBytes)?k=k(a):(k=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(k)),v(k)}catch{var I=o.navigator,S=I&&I.plugins;return[+new Date,o,S,o.screen,v(t)]}}(),3),b),R=new p(b),A=function(){for(var k=R.g(i),I=u,S=0;k<c;)k=(k+S)*a,I*=a,S=R.g(1);for(;k>=l;)k/=2,I/=2,S>>>=1;return(k+S)/I};return A.int32=function(){return 0|R.g(4)},A.quick=function(){return R.g(4)/4294967296},A.double=A,m(v(R.S),t),(y.pass||x||function(k,I,S,F){return F&&(F.S&&d(F,R),k.state=function(){return d(R,{})}),S?(n[s]=k,I):k})(A,w,"global"in y?y.global:this==n,y.state)}function p(g){var y,x=g.length,b=this,w=0,R=b.i=b.j=0,A=b.S=[];for(x||(g=[x++]);w<a;)A[w]=w++;for(w=0;w<a;w++)A[w]=A[R=h&R+g[w%x]+(y=A[w])],A[R]=y;(b.g=function(k){for(var I,S=0,F=b.i,T=b.j,W=b.S;k--;)I=W[F=h&F+1],S=S*a+W[h&(W[F]=W[T=h&T+I])+(W[T]=I)];return b.i=F,b.j=T,S})(a)}function d(g,y){return y.i=g.i,y.j=g.j,y.S=g.S.slice(),y}function m(g,y){for(var x,b=g+"",w=0;w<b.length;)y[h&w]=h&(x^=19*y[h&w])+b.charCodeAt(w++);return v(y)}function v(g){return String.fromCharCode.apply(0,g)}if(n["seed"+s]=f,m(n.random(),t),r.exports){r.exports=f;try{e=require("crypto")}catch{}}})([],Math)});Ie.alea=vu,Ie.xor128=mu,Ie.xorwow=gu,Ie.xorshift7=yu,Ie.xor4096=xu,Ie.tychei=bu;var rr=Ie.alea,so=function(){function r(t,n,e,o,a){this.mean=t,this.stdDev=n,this.dtype=e,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=rr(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var n,e,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);n=this.mean+this.stdDev*a*u,e=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(n)||(o=!0)}return this.truncated&&!this.isValidTruncated(e)||(this.nextVal=this.convertValue(e)),this.convertValue(n)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),wu=function(){function r(t,n,e,o){this.alpha=t,this.beta=1/n,this.dtype=e;var a=o||Math.random();this.randu=rr(a.toString()),this.randn=new so(0,1,e,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,n,e,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,n=1-.331*(t=o*o)*t,e=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<n||Math.log(a)<e)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),Cu=function(){function r(t,n,e,o){var a=this;if(t===void 0&&(t=0),n===void 0&&(n=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=n-t,this.dtype=e,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+n+" <= 1 and dtype is not float");this.random=rr(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function nn(r,t,n){return t===void 0&&(t="float32"),t=t||"float32",Ma(r),new dt(r,t,n)}function Eu(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var Ha=D({batchToSpaceND_:function(r,t,n){var e=C(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return E(e.rank>=1+t.length,function(){return"input rank is "+e.rank+" but should be > than blockShape.length "+t.length}),E(n.length===t.length,function(){return"crops.length is "+n.length+" but should be equal to blockShape.length  "+t.length}),E(e.shape[0]%o==0,function(){return"input tensor batch is "+e.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),N.runKernelFunc(function(a){return a.batchToSpaceND(e,t,n)},{$x:e},function(a){return{$x:function(){return a.spaceToBatchND(t,n)}}})}}),Ru=D({broadcastTo_:function(r,t){var n=C(r,"broadcastTo","x"),e=n.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<n.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+n.rank+".");if(t.length>n.rank){for(var o=n.shape.slice();o.length<t.length;)o.unshift(1);n=n.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(n.shape[i]===t[i])a[i]=1;else if(n.shape[i]!==1)throw new Error("broadcastTo(): ["+e+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?n.clone():N.runKernelFunc(function(u){return u.tile(n,a)},{input:n},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Iu=D({cast_:function(r,t){var n=C(r,"x","cast");if(!gs(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");var e={dtype:t};return N.runKernelFunc(function(o){return o.cast(n,t)},{x:n},function(o){return{x:function(){return o.clone()}}},"Cast",e)}}),ku=D({clone_:function(r){var t=C(r,"x","clone",null);return N.runKernelFunc(function(){return N.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(n){return{$x:function(){return n.toFloat()}}})}}),Su=D({cumsum_:function(r,t,n,e){t===void 0&&(t=0),n===void 0&&(n=!1),e===void 0&&(e=!1);var o=C(r,"x","cumsum"),a=oe([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=ae(1,o.rank)[0],u=N.runKernelFunc(function(c){return c.cumsum(i,s,n,e)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,n,!e)}}});return a!=null&&(u=u.transpose(a)),u}}),Au=D({depthToSpace_:function(r,t,n){n===void 0&&(n="NHWC");var e=C(r,"x","depthToSpace"),o=n==="NHWC"?e.shape[1]:e.shape[2],a=n==="NHWC"?e.shape[2]:e.shape[3],i=n==="NHWC"?e.shape[3]:e.shape[1];return E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+e.shape}),E(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+e.shape}),E(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+e.shape}),N.runKernelFunc(function(s){return s.depthToSpace(e,t,n)},{$x:e})}}),ve=D({expandDims_:function(r,t){t===void 0&&(t=0);var n=C(r,"x","expandDims",null);E(t<=n.rank,function(){return"Axis must be <= rank of the tensor"});var e=n.shape.slice();return t<0&&(E(-(n.rank+1)<=t,function(){return"Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"}),t=n.rank+t+1),e.splice(t,0,1),uo(n,e)}}),qa=D({eye_:function(r,t,n,e){e===void 0&&(e="float32"),t==null&&(t=r);for(var o=nn([r,t],e),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(n==null)return s;if(n.length===1)return ht(ve(s,0),[n[0],1,1]);if(n.length===2)return ht(ve(ve(s,0),0),[n[0],n[1],1,1]);if(n.length===3)return ht(ve(ve(ve(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}}),Du=D({multinomial_:function(r,t,n,e){e===void 0&&(e=!1);var o=C(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);n=n||Math.random();var s=i===1?o.as2D(1,-1):o,u=N.runKernelFunc(function(c){return c.multinomial(s,e,t,n)},{logits2D:s});return i===1?u.as1D():u}}),Xr=D({oneHot_:function(r,t,n,e){if(n===void 0&&(n=1),e===void 0&&(e=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),N.runKernelFunc(function(i){return i.oneHot(o,t,n,e)},{$indices:o},function(i){return{$indices:function(){return wn(o.shape,"float32")}}}).reshape(a)}}),wt=D({pad_:function(r,t,n){n===void 0&&(n=0);var e=C(r,"x","pad");if(e.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:n};return N.runKernelFunc(function(a){return a.pad(e,t,n)},{x:e},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,e.shape)}}},"PadV2",o)}}),Nu=D({pad1d_:function(r,t,n){return n===void 0&&(n=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),wt(r,[t],n)}}),Tu=D({pad2d_:function(r,t,n){return n===void 0&&(n=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wt(r,t,n)}}),Fu=D({pad3d_:function(r,t,n){return n===void 0&&(n=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wt(r,t,n)}}),_u=D({pad4d_:function(r,t,n){return n===void 0&&(n=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),wt(r,t,n)}}),Ou=D({rand_:function(r,t,n){var e=j(r),o=null;if(n==null||n==="float32")o=new Float32Array(e);else if(n==="int32")o=new Int32Array(e);else{if(n!=="bool")throw new Error("Unknown data type "+n);o=new Uint8Array(e)}for(var a=0;a<e;a++)o[a]=t();return N.makeTensor(o,r,n)}}),Mu=D({randomNormal_:function(r,t,n,e,o){if(t===void 0&&(t=0),n===void 0&&(n=1),e!=null&&e==="bool")throw new Error("Unsupported data type "+e);for(var a=new so(t,n,e,!1,o),i=nn(r,e),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Bu=D({randomGamma_:function(r,t,n,e,o){if(n===void 0&&(n=1),e===void 0&&(e="float32"),n==null&&(n=1),e==null&&(e="float32"),e!=="float32"&&e!=="int32")throw new Error("Unsupported data type "+e);for(var a=new wu(t,n,e,o),i=nn(r,e),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ka=D({randomUniform_:function(r,t,n,e,o){t===void 0&&(t=0),n===void 0&&(n=1),e===void 0&&(e="float32");for(var a=nn(r,e),i=new Cu(t,n,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),uo=D({reshape_:function(r,t){var n=C(r,"x","reshape",null);t=vs(t,n.size),E(n.size===j(t),function(){return"new shape and old shape must have the same number of elements."});var e={shape:t};return N.runKernelFunc(function(o){return o.reshape(n,t)},{x:n},function(o){return{x:function(){return o.reshape(n.shape)}}},"Reshape",e)}}),Xa=D({spaceToBatchND_:function(r,t,n){var e=C(r,"x","spaceToBatchND");return E(e.rank>=1+t.length,function(){return"input rank "+e.rank+" should be > than [blockShape] "+t.length}),E(n.length===t.length,function(){return"paddings.shape[0] "+n.length+" must be equal to [blockShape] "+t.length}),E(e.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+n[i-1][0]+n[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+e.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+t.toString()}),N.runKernelFunc(function(o){return o.spaceToBatchND(e,t,n)},{$x:e},function(o){return{$x:function(){return o.batchToSpaceND(t,n)}}})}}),ja=D({squeeze_:function(r,t){var n=C(r,"x","squeeze");return uo(n,ke(n.shape,t).newShape)}}),De=D({stack_:function(r,t){t===void 0&&(t=0);var n=Ht(r,"tensors","stack");if(E(n.length>=1,function(){return"Pass at least one tensor to tf.stack"}),n.length===1)return n[0].expandDims(t);var e=n[0].rank,o=n[0].shape,a=n[0].dtype;E(t<=e,function(){return"Axis must be <= rank of the tensor"}),n.forEach(function(s){pn(o,s.shape,"All tensors passed to stack must have matching shapes")}),n.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=n.map(function(s){return s.expandDims(t)});return te(i,t)}}),ht=D({tile_:function(r,t){var n=C(r,"x","tile",null);E(n.rank===t.length,function(){return"Error in transpose: rank of input "+n.rank+" must match length of reps "+t+"."});var e=[n],o={reps:t};return N.runKernelFunc(function(a,i){var s=a.tile(n,t);return i([n]),s},{x:n},function(a,i){var s=i[0];return{x:function(){var u=hn(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var h=0;h<t[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(h=0;h<t[2];++h)for(var f=0;f<t[3];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,e)}}),Pu=D({truncatedNormal_:function(r,t,n,e,o){if(t===void 0&&(t=0),n===void 0&&(n=1),e!=null&&e==="bool")throw new Error("Unsupported data type "+e);for(var a=new so(t,n,e,!0,o),i=nn(r,e),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),co=D({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var n=C(r,"x","unstack");E(t>=-n.shape.length&&t<n.shape.length,function(){return"Axis = "+t+" is not in [-"+n.shape.length+", "+n.shape.length+")"}),t<0&&(t+=n.shape.length);var e={axis:t};return N.runKernelFunc(function(o){return o.unstack(n,t)},{x:n},function(o){return{x:function(){return De(o,t)}}},"Unpack",e)}}),Lu=function(r,t){return K(this,void 0,void 0,function(){var n,e,o,a,i,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return n=C(r,"x","setdiff1d"),e=C(t,"y","setdiff1d"),E(n.dtype===e.dtype,function(){return"x and y should have the same dtype, but got x ("+n.dtype+") and y ("+e.dtype+")."}),E(n.rank===1,function(){return"x should be 1D tensor, but got x ("+n.shape+")."}),E(e.rank===1,function(){return"y should be 1D tensor, but got y ("+e.shape+")."}),[4,n.data()];case 1:return o=f.sent(),[4,e.data()];case 2:for(a=f.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new dt([s],n.dtype),c=new dt([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Kt(r,t,n,e){e===void 0&&(e=!0);var o=[];if(e)(o=o.concat(t.slice(0))).push(r[0]/n),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function Xt(r,t,n){n===void 0&&(n=!0);var e=[];if(n){e.push(t);for(var o=t+1;o<r;++o)o<=2*t?(e.push(o),e.push(o-(t+1))):e.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);e.push.apply(e,a),e.push(0),e.push.apply(e,i)}return e}function jt(r,t,n,e){e===void 0&&(e=!0);var o=[];e?o.push(r[0]/n):o.push(r[0]*n);for(var a=1;a<r.length;++a)a<=t.length?e?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function Ya(r,t){for(var n=[0],e=0;e<t;++e)n.push(r[e][0]);return n}function $a(r,t,n){for(var e=r.slice(0,1),o=0;o<n;++o)e.push(r[o+1]-t[o][0]-t[o][1]);return e}function Qa(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var n=t.shape,e=n[n.length-1],o=1,a=0;a<n.length-1;++a)o*=n[a];var i=r.shape,s=n.slice();s.pop();var u=1;for(a=e;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=ee(r.shape).map(function(l){return l/u}).concat([1]).slice(0,e);return[s,o,u,c]}var Ja=30;function Cr(r){return r<=Ja?r:Vr(r,Math.floor(Math.sqrt(r)))}function Wu(r,t,n){var e=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+e+", and batchDim: "+o+".";if(n.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<e+(n.rank-o))throw new Error(a+" Output shape length < "+(e+(n.rank-o)));if(n.rank!==o+r.length-e)throw new Error(a+" update.rank != "+(o+r.length-e));for(var i=0;i<o;++i)if(n.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+n.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<n.rank-o;++i)if(n.shape[i+o]!==r[i+e])throw new Error(a+" updates.shape["+(i+o)+"] ("+n.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Uu(r,t,n){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(n.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Wu(n,t,r)}function Yt(r,t,n){for(var e=t.shape.length,o=e>1?t.shape[e-1]:1,a=n.length,i=1,s=o;s<a;++s)i*=n[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:j(t.shape)/u,sliceSize:i,strides:ee(n.slice(0,o)).concat([1]),outputSize:j(n)}}function Vu(r,t,n){E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),E(r.rank===n.length,function(){return"Error in slice"+r.rank+"D: Length of size "+n+" must match the rank of the array ("+r.rank+")."});for(var e=function(a){E(t[a]+n[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+n[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)e(o)}function qo(r){for(var t=[],n=0;r>0;)1&r&&t.push(n),r/=2,n++;return t}function lo(r,t,n){for(var e=[],o=0;o<r.length;o++)e[o]=Math.ceil((t[o]-r[o])/n[o]);return e}function zu(r,t,n,e,o){var a=t[o],i=n[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=e[o];return a<0&&(a+=s),a=Lr(0,a,s-1)}function Gu(r,t,n,e,o){var a=t[o],i=n[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=e[o];return a<0&&(a+=s),a=i>0?Lr(0,a,s):Lr(-1,a,s-1)}function Za(r,t,n){for(var e=n.length,o=0;o<n.length;o++)if(n[o]>1){e=o;break}for(o=e+1;o<n.length;o++)if(t[o]>0||n[o]!==r[o])return!1;return!0}function ni(r,t){for(var n=r.length>0?r[r.length-1]:1,e=0;e<r.length-1;e++)n+=r[e]*t[e];return n}function Hu(r,t){E(Ur(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof Ut}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var n=t!=null;if(!n)for(var e in t=[],N.registeredVariables)t.push(N.registeredVariables[e]);var o=n?t.filter(function(l){return!l.trainable}):null,a=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=N.gradients(r,t,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function or(r){return N.customGrad(r)}var ho=D({softmax_:function(r,t){t===void 0&&(t=-1);var n=C(r,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+t);return N.runKernelFunc(function(e,o){var a=e.softmax(n,t);return o([a]),a},{logits:n},function(e,o){var a=o[0],i=e.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),qu=D({logSoftmax_:function(r,t){t===void 0&&(t=-1);var n=C(r,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and axis was "+t);return or(function(e,o){var a=e.max(t,!0),i=e.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(n)}}),ei=function(){function r(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,n){this.dataIdsCount++,this.data.set(t,n)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),ti=function(){function r(){}return r.prototype.time=function(t){return _("time")},r.prototype.read=function(t){return _("read")},r.prototype.readSync=function(t){return _("readSync")},r.prototype.numDataIds=function(){return _("numDataIds")},r.prototype.disposeData=function(t){return _("disposeData")},r.prototype.write=function(t,n,e){return _("write")},r.prototype.move=function(t,n,e,o){return _("move")},r.prototype.memory=function(){return _("memory")},r.prototype.floatPrecision=function(){return _("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,n,e,o){return _("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,_("fusedBatchMatMul")},r.prototype.slice=function(t,n,e){return _("slice")},r.prototype.stridedSlice=function(t,n,e,o){return _("stridedSlice")},r.prototype.unstack=function(t,n){return _("unstack")},r.prototype.reverse=function(t,n){return _("reverse")},r.prototype.concat=function(t,n){return _("concat")},r.prototype.neg=function(t){return _("neg")},r.prototype.add=function(t,n){return _("add")},r.prototype.addN=function(t){return _("addN")},r.prototype.subtract=function(t,n){return _("subtract")},r.prototype.multiply=function(t,n){return _("multiply")},r.prototype.realDivide=function(t,n){return _("realDivide")},r.prototype.floorDiv=function(t,n){return _("floorDiv")},r.prototype.sum=function(t,n){return _("sum")},r.prototype.prod=function(t,n){return _("prod")},r.prototype.unsortedSegmentSum=function(t,n,e){return _("unsortedSegmentSum")},r.prototype.argMin=function(t,n){return _("argMin")},r.prototype.argMax=function(t,n){return _("argMax")},r.prototype.equal=function(t,n){return _("equal")},r.prototype.notEqual=function(t,n){return _("notEqual")},r.prototype.less=function(t,n){return _("less")},r.prototype.lessEqual=function(t,n){return _("lessEqual")},r.prototype.greater=function(t,n){return _("greater")},r.prototype.greaterEqual=function(t,n){return _("greaterEqual")},r.prototype.logicalNot=function(t){return _("logicalNot")},r.prototype.logicalAnd=function(t,n){return _("logicalAnd")},r.prototype.logicalOr=function(t,n){return _("logicalOr")},r.prototype.where=function(t){return _("where")},r.prototype.select=function(t,n,e){return _("select")},r.prototype.topk=function(t,n,e){return _("topk")},r.prototype.min=function(t,n){return _("min")},r.prototype.minimum=function(t,n){return _("minimum")},r.prototype.mod=function(t,n){return _("mod")},r.prototype.max=function(t,n){return _("max")},r.prototype.maximum=function(t,n){return _("maximum")},r.prototype.all=function(t,n){return _("all")},r.prototype.any=function(t,n){return _("any")},r.prototype.squaredDifference=function(t,n){return _("squaredDifference")},r.prototype.ceil=function(t){return _("ceil")},r.prototype.floor=function(t){return _("floor")},r.prototype.round=function(t){return _("round")},r.prototype.sign=function(t){return _("sign")},r.prototype.isNaN=function(t){return _("isNaN")},r.prototype.isInf=function(t){return _("isInf")},r.prototype.isFinite=function(t){return _("isFinite")},r.prototype.pow=function(t,n){return _("pow")},r.prototype.exp=function(t){return _("exp")},r.prototype.expm1=function(t){return _("expm1")},r.prototype.softmax=function(t,n){return _("softmax")},r.prototype.log=function(t){return _("log")},r.prototype.log1p=function(t){return _("log1p")},r.prototype.sqrt=function(t){return _("sqrt")},r.prototype.rsqrt=function(t){return _("rsqrt")},r.prototype.square=function(t){return _("square")},r.prototype.reciprocal=function(t){return _("reciprocal")},r.prototype.relu=function(t){return _("relu")},r.prototype.relu6=function(t){return _("relu6")},r.prototype.prelu=function(t,n){return _("prelu")},r.prototype.elu=function(t){return _("elu")},r.prototype.eluDer=function(t,n){return _("eluDer")},r.prototype.selu=function(t){return _("selu")},r.prototype.int=function(t){return _("int")},r.prototype.clip=function(t,n,e){return _("clip")},r.prototype.abs=function(t){return _("abs")},r.prototype.complexAbs=function(t){return _("complexAbs")},r.prototype.sigmoid=function(t){return _("sigmoid")},r.prototype.softplus=function(t){return _("softplus")},r.prototype.sin=function(t){return _("sin")},r.prototype.cos=function(t){return _("cos")},r.prototype.tan=function(t){return _("tan")},r.prototype.asin=function(t){return _("asin")},r.prototype.acos=function(t){return _("acos")},r.prototype.atan=function(t){return _("atan")},r.prototype.atan2=function(t,n){return _("atan2")},r.prototype.sinh=function(t){return _("sinh")},r.prototype.cosh=function(t){return _("cosh")},r.prototype.tanh=function(t){return _("tanh")},r.prototype.asinh=function(t){return _("asinh")},r.prototype.acosh=function(t){return _("acosh")},r.prototype.atanh=function(t){return _("atanh")},r.prototype.erf=function(t){return _("erf")},r.prototype.step=function(t,n){return _("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,_("fusedConv2d")},r.prototype.conv2d=function(t,n,e){return _("conv2d")},r.prototype.conv2dDerInput=function(t,n,e){return _("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,n,e){return _("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,_("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,n,e){return _("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,n,e){return _("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,n,e){return _("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,n,e){return _("conv3d")},r.prototype.conv3dDerInput=function(t,n,e){return _("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,n,e){return _("conv3dDerFilter")},r.prototype.maxPool=function(t,n){return _("maxPool")},r.prototype.maxPoolBackprop=function(t,n,e,o){return _("maxPoolBackprop")},r.prototype.avgPool=function(t,n){return _("avgPool")},r.prototype.avgPoolBackprop=function(t,n,e){return _("avgPoolBackprop")},r.prototype.avgPool3d=function(t,n){return _("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,n,e){return _("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,n){return _("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,n,e,o){return _("maxPool3dBackprop")},r.prototype.reshape=function(t,n){return _("reshape")},r.prototype.cast=function(t,n){return _("cast")},r.prototype.tile=function(t,n){return _("tile")},r.prototype.pad=function(t,n,e){return _("pad")},r.prototype.transpose=function(t,n){return _("transpose")},r.prototype.gather=function(t,n,e){return _("gather")},r.prototype.gatherND=function(t,n){return _("gatherND")},r.prototype.scatterND=function(t,n,e){return _("scatterND")},r.prototype.batchToSpaceND=function(t,n,e){return _("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,n,e){return _("spaceToBatchND")},r.prototype.resizeBilinear=function(t,n,e,o){return _("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,n,e){return _("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,n,e,o){return _("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,n,e){return _("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,n,e,o,a,i){return _("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,n,e,o,a){return _("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,n,e,o,a,i,s){return _("LRNGrad")},r.prototype.multinomial=function(t,n,e,o){return _("multinomial")},r.prototype.oneHot=function(t,n,e,o){return _("oneHot")},r.prototype.cumsum=function(t,n,e,o){return _("cumsum")},r.prototype.nonMaxSuppression=function(t,n,e,o,a){return _("nonMaxSuppression")},r.prototype.fft=function(t){return _("fft")},r.prototype.ifft=function(t){return _("ifft")},r.prototype.complex=function(t,n){return _("complex")},r.prototype.real=function(t){return _("real")},r.prototype.imag=function(t){return _("imag")},r.prototype.cropAndResize=function(t,n,e,o,a,i){return _("cropAndResize")},r.prototype.depthToSpace=function(t,n,e){return _("depthToSpace")},r.prototype.split=function(t,n,e){return _("split")},r.prototype.sparseToDense=function(t,n,e,o){return _("sparseToDense")},r.prototype.diag=function(t){return _("diag")},r.prototype.fill=function(t,n,e){return _("fill")},r.prototype.onesLike=function(t){return _("onesLike")},r.prototype.zerosLike=function(t){return _("zerosLike")},r.prototype.linspace=function(t,n,e){return _("linspace")},r.prototype.dispose=function(){return _("dispose")},r}();function _(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function me(r,t){for(var n=r.length,e=[],o=0;o<n;o++){var a=n-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&e.unshift(a)}return e}function In(r,t){for(var n=[],e=0;e<t.length;e++){var o=r[r.length-e-1],a=t.length-e-1,i=t[a];(o==null||o===1&&i>1)&&n.unshift(a)}return n}function an(r,t){for(var n=[],e=Math.max(r.length,t.length),o=0;o<e;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)n.unshift(i);else if(i===1)n.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");n.unshift(a)}}return n}function mt(r,t,n,e,o,a,i){i===void 0&&(i="channelsLast");var s,u=Jt(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return _e(r,s,n,e,o,a,!1,i)}function $t(r,t,n,e,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=jr(t),l=c[0],h=c[1],f=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return Qt(r,s,n,e,o,!1,u,a)}function _e(r,t,n,e,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var p,d=t[0],m=t[1],v=t[3],g=Jt(n),y=g[0],x=g[1],b=Jt(e),w=b[0],R=b[1],A=Ye(d,w),k=Ye(m,R),I=function(L,B,z,V,P,G,H,q){var $,J,tn;if(typeof L=="number"){$={top:L,bottom:L,left:L,right:L,type:L===0?"VALID":"NUMBER"};var rn=function(un,dn,fn,xn,mn){xn==null&&(xn=ri(un,dn,fn));var gn=un[0],jn=un[1],Yn=ft((gn-dn+2*xn)/fn+1,mn);E(Cn(Yn),function(){return"The output # of rows ("+Yn+") must be an integer. Change the stride and/or zero pad parameters"});var Wn=ft((jn-dn+2*xn)/fn+1,mn);return E(Cn(Wn),function(){return"The output # of columns ("+Wn+") must be an integer. Change the stride and/or zero pad parameters"}),[Yn,Wn]}([B,z],G,V,L,q);J=rn[0],tn=rn[1]}else if(L==="same"){J=Math.ceil(B/V),tn=Math.ceil(z/P);var on=Math.max(0,(J-1)*V+G-B),cn=Math.max(0,(tn-1)*P+H-z),sn=Math.floor(on/2),ln=on-sn,En=Math.floor(cn/2);$={top:sn,bottom:ln,left:En,right:cn-En,type:"SAME"}}else{if(L!=="valid")throw Error("Unknown padding parameter: "+L);$={top:0,bottom:0,left:0,right:0,type:"VALID"},J=Math.ceil((B-G+1)/V),tn=Math.ceil((z-H+1)/P)}return{padInfo:$,outHeight:J,outWidth:tn}}(o,l,h,y,x,A,k,a),S=I.padInfo,F=I.outHeight,T=I.outWidth,W=i?v*f:v;return s==="channelsFirst"?p=[c,W,F,T]:s==="channelsLast"&&(p=[c,F,T,W]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:F,outWidth:T,outChannels:W,padInfo:S,strideHeight:y,strideWidth:x,filterHeight:d,filterWidth:m,effectiveFilterHeight:A,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:R,inShape:r,outShape:p,filterShape:t}}function Qt(r,t,n,e,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],p=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],p=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],p=r[1],l=r[2],h=r[3],f=r[4]}var d,m=t[0],v=t[1],g=t[2],y=t[4],x=jr(n),b=x[0],w=x[1],R=x[2],A=jr(e),k=A[0],I=A[1],S=A[2],F=Ye(m,k),T=Ye(v,I),W=Ye(g,S),L=function(H,q,$,J,tn,rn,on,cn,sn,ln,En){var un,dn,fn,xn;if(typeof H=="number"){un={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var mn=function(Pe,ue,ur,Le,$n,cr){$n==null&&($n=ri(Pe,ue,Le));var is=Pe[0],ss=Pe[1],us=Pe[2],lr=ft((is-ue+2*$n)/Le+1,cr);E(Cn(lr),function(){return"The output # of depths ("+lr+") must be an integer. Change the stride and/or zero pad parameters"});var hr=ft((ss-ue+2*$n)/Le+1,cr);E(Cn(hr),function(){return"The output # of rows ("+hr+") must be an integer. Change the stride and/or zero pad parameters"});var fr=ft((us-ue+2*$n)/Le+1,cr);return E(Cn(fr),function(){return"The output # of columns ("+fr+") must be an integer. Change the stride and/or zero pad parameters"}),[lr,hr,fr,ur]}([q,$,J,1],cn,1,tn,H,En);dn=mn[0],fn=mn[1],xn=mn[2]}else if(H==="same"){dn=Math.ceil(q/tn),fn=Math.ceil($/rn),xn=Math.ceil(J/on);var gn=(dn-1)*tn+cn-q,jn=(fn-1)*rn+sn-$,Yn=(xn-1)*on+ln-J,Wn=Math.floor(gn/2),Be=gn-Wn,ie=Math.floor(jn/2),de=jn-ie,se=Math.floor(Yn/2);un={top:ie,bottom:de,left:se,right:Yn-se,front:Wn,back:Be,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);un={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},dn=Math.ceil((q-cn+1)/tn),fn=Math.ceil(($-sn+1)/rn),xn=Math.ceil((J-ln+1)/on)}return{padInfo:un,outDepth:dn,outHeight:fn,outWidth:xn}}(o,l,h,f,b,w,R,F,T,W,s),B=L.padInfo,z=L.outDepth,V=L.outHeight,P=L.outWidth,G=a?y*p:y;return i==="channelsFirst"?d=[c,G,z,V,P]:i==="channelsLast"&&(d=[c,z,V,P,G]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:p,outDepth:z,outHeight:V,outWidth:P,outChannels:G,padInfo:B,strideDepth:b,strideHeight:w,strideWidth:R,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:F,effectiveFilterHeight:T,effectiveFilterWidth:W,dilationDepth:k,dilationHeight:I,dilationWidth:S,inShape:r,outShape:d,filterShape:t}}function ri(r,t,n,e){e===void 0&&(e=1);var o=Ye(t,e);return Math.floor((r[0]*(n-1)-n+o)/2)}function Jt(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function jr(r){return typeof r=="number"?[r,r,r]:r}function Ye(r,t){return t<=1?r:r+(r-1)*(t-1)}function ft(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function tt(r){var t=Jt(r),n=t[0],e=t[1],o=t[2];return n===1&&e===1&&o===1}function Ln(r,t){return tt(r)||tt(t)}function fo(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function oi(r,t,n){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var e=wn(r.shape),o=r.toFloat(),a=n.complex(o,e);return e.dispose(),o.dispose(),a}if(!ys(r.dtype,t))return N.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=n.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return n.int(r);if(t==="bool"){var s=Q(0,r.dtype);return a=n.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function Yr(r,t){return N.makeTensorFromDataId(r.dataId,t,r.dtype)}function ai(r,t,n){var e=(t-r)/(n-1),o=xt(n,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return et(o,"float32")}function $r(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var n=new Float32Array(2*r.length),e=0;e<n.length;e+=2)n[e]=r[e/2],n[e+1]=t[e/2];return n}function Ko(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Ku(r,t,n,e){r[2*e]=t,r[2*e+1]=n}function Xu(r,t,n){var e=(n?2:-2)*Math.PI*(r/t);return{real:Math.cos(e),imag:Math.sin(e)}}function ju(r,t,n){var e=function(a,i,s){return function(u,c,l){for(var h=0,f=u.length,p=0,d=!1;h<f;){var m=l(c,u[p=h+(f-h>>>1)]);m>0?h=p+1:(f=p,d=!m)}return d?h:-h-1}(a,i,s||Yu)}(r,t,n),o=e<0?-(e+1):e;r.splice(o,0,t)}function Yu(r,t){return r>t?1:r<t?-1:0}function po(r,t,n,e,o){return ii(r,t,n,e,o,0).selectedIndices}function vo(r,t,n,e,o,a){var i=ii(r,t,n,e,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function ii(r,t,n,e,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(b,w){return{score:b,boxIndex:w,suppressBeginIndex:0}}).filter(function(b){return b.score>o}).sort(Xo),c=a>0?-.5/a:0,l=[],h=[];l.length<n&&u.length>0;){var f=u.pop(),p=f.score,d=f.boxIndex,m=f.suppressBeginIndex;if(p<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var y=$u(r,d,l[g]);if(y>=e){v=!0;break}if(f.score=f.score*Qu(e,c,y),f.score<=o)break}f.suppressBeginIndex=l.length,v||(f.score===p?(l.push(d),h.push(f.score)):f.score>o&&ju(u,f,Xo))}var x=l.length;return s&&(l.fill(0,x),h.fill(0,x)),{selectedIndices:et(l,"int32"),selectedScores:et(h,"float32"),numValidOutputs:Q(x,"int32")}}function $u(r,t,n){var e=r.subarray(4*t,4*t+4),o=r.subarray(4*n,4*n+4),a=Math.min(e[0],e[2]),i=Math.min(e[1],e[3]),s=Math.max(e[0],e[2]),u=Math.max(e[1],e[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),p=(s-a)*(u-i),d=(h-c)*(f-l);if(p<=0||d<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,h),y=Math.min(u,f),x=Math.max(g-m,0)*Math.max(y-v,0);return x/(p+d-x)}function Qu(r,t,n){var e=Math.exp(t*n*n);return n<=r?e:0}function Xo(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function si(r,t,n){var e=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[n]=a;var i=r.slice(e,o);return e[n]+=a,i})}function ui(r,t){for(var n=new Array(r.rank),e=0;e<n.length;e++)n[e]=r.shape[e]*t[e];var o=nn(n,r.dtype);for(e=0;e<o.values.length;++e){for(var a=o.indexToLoc(e),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[e]=r.values[u]}return o.toTensor()}function ci(r,t,n,e,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=pt(n,s*e),l=pt("int32",s*e),h=0;h<s;h++){for(var f=h*u,p=r.subarray(f,f+u),d=[],m=0;m<p.length;m++)d.push({value:p[m],index:m});d.sort(function(b,w){return w.value-b.value});var v=h*e,g=c.subarray(v,v+e),y=l.subarray(v,v+e);for(m=0;m<e;m++)g[m]=d[m].value,y[m]=d[m].index}var x=t.slice();return x[x.length-1]=e,[Tn(c,x,n),Tn(l,x,"int32")]}function mo(r,t){for(var n=[],e=0;e<t.length;e++)t[e]&&n.push(e);var o=nn(r,"int32"),a=nn([n.length,r.length],"int32");for(e=0;e<n.length;e++){var i=o.indexToLoc(n[e]),s=e*r.length;a.values.set(i,s)}return a.toTensor()}var Ju=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var n=[];this.variableNames.forEach(function(o){n.push("float v"+o+" = get"+o+"AtOutCoords();")});var e=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        float result = `+e+`;
        setOutput(result);
      }
    `},Zu=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var n=[];this.variableNames.forEach(function(o){n.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var e=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        vec4 result = `+e+`;
        setOutput(result);
      }
    `},nc=function(r,t,n){this.variableNames=["A"];var e=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/e);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+e+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function li(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(n){return r+"."+n})}function Mn(r,t){return t===1?[r]:li(r,t)}function Fn(){var r,t,n,e,o,a,i,s,u,c;return M().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",n="out",e="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",n="varying",e="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:n,varyingFs:e,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function Se(r,t,n){n===void 0&&(n="index");var e=ee(t);return e.map(function(o,a){return"int "+r[a]+" = "+n+" / "+o+"; "+(a===e.length-1?"int "+r[a+1]+" = "+n+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function go(r){var t=ee(r).map(function(n){return n.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var hi=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function ec(r,t,n,e){var o=[];r.forEach(function(p){var d=j(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(p){return function(d,m,v){v===void 0&&(v=!1);var g="";g+=v?fi(d):ze(d);var y=d.shapeInfo.logicalShape,x=m.logicalShape;return y.length<=x.length&&(g+=v?function(b,w){var R,A=b.name,k=A.charAt(0).toUpperCase()+A.slice(1),I="get"+k+"AtOutCoords",S=b.shapeInfo.logicalShape.length,F=w.logicalShape.length,T=me(b.shapeInfo.logicalShape,w.logicalShape),W=vn(F),L=F-S,B=["x","y","z","w","u","v"];R=S===0?"":F<2&&T.length>=1?"coords = 0;":T.map(function($){return"coords."+B[$+L]+" = 0;"}).join(`
`);var z="";z=F<2&&S>0?"coords":b.shapeInfo.logicalShape.map(function($,J){return"coords."+B[J+L]}).join(", ");var V="return outputValue;",P=j(b.shapeInfo.logicalShape)===1,G=j(w.logicalShape)===1;if(S!==1||P||G){if(P&&!G)V=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(T.length){var H=S-2,q=S-1;T.indexOf(H)>-1&&T.indexOf(q)>-1?V="return vec4(outputValue.x);":T.indexOf(H)>-1?V="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":T.indexOf(q)>-1&&(V="return vec4(outputValue.xx, outputValue.zz);")}}else V=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+W+` coords = getOutputCoords();
      `+R+`
      vec4 outputValue = get`+k+"("+z+`);
      `+V+`
    }
  `}(d,m):function(b,w){var R=b.name,A=R.charAt(0).toUpperCase()+R.slice(1),k="get"+A+"AtOutCoords",I=w.texShape,S=b.shapeInfo.texShape,F=b.shapeInfo.logicalShape.length,T=w.logicalShape.length;if(!b.shapeInfo.isUniform&&F===T&&b.shapeInfo.flatOffset==null&&Sn(S,I))return`
      float `+k+`() {
        return sampleTexture(`+R+`, resultUV);
      }
    `;var W,L=vn(T),B=me(b.shapeInfo.logicalShape,w.logicalShape),z=T-F,V=["x","y","z","w","u","v"];W=F===0?"":T<2&&B.length>=1?"coords = 0;":B.map(function(G){return"coords."+V[G+z]+" = 0;"}).join(`
`);var P="";return P=T<2&&F>0?"coords":b.shapeInfo.logicalShape.map(function(G,H){return"coords."+V[H+z]}).join(", "),`
    float `+k+`() {
      `+L+` coords = getOutputCoords();
      `+W+`
      return get`+A+"("+P+`);
    }
  `}(d,m)),g}(p,t,e)}).join(`
`),c=t.texShape,l=Fn(),h=function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `}(l),f=function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+tc+`
    `+rc+`
    `+oc+`
  `}(l);return t.isPacked?(a=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(b,w){var R=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return R[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+R[1]+`.0);
      }
    `:R[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+R[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+R[0]+", "+R[1]+`));
      return 2 * (resTexRC.x * `+R[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(b,w){var R=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Sn(b,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+R[0]+", "+R[1]+`));
      }
    `;var A=Math.ceil(b[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+R[0]+", "+R[1]+`));

      int index = resTexRC.x * `+R[1]+` + resTexRC.y;
      int r = 2 * (index / `+A+`);
      int c = imod(index, `+A+`) * 2;

      return ivec2(r, c);
    }
  `}(p,d);case 3:return m=p,v=d,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],y=Math.ceil(m[2]/2),x=y*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(b,w){for(var R=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],A=Math.ceil(b[b.length-1]/2),k=A*Math.ceil(b[b.length-2]/2),I=k,S="",F="b, r, c",T=2;T<b.length-1;T++)I*=b[b.length-T-1],S=`
      int b`+T+" = index / "+I+`;
      index -= b`+T+" * "+I+`;
    `+S,F="b"+T+", "+F;return`
    ivec`+b.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+R[0]+", "+R[1]+`));
      int index = resTexRC.x * `+R[1]+` + resTexRC.y;

      `+S+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+A+`);
      int c = imod(index, `+A+`) * 2;

      return ivec`+b.length+"("+F+`);
    }
  `}(p,d)}var m,v,g,y,x}(t.logicalShape,c),i=function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `}(l)):(a=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(g,y){return Sn(g,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(p,d);case 3:return m=d,v=Se(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,y){var x=Se(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(p,d);case 5:return function(g,y){var x=Se(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(p,d);case 6:return function(g,y){var x=Se(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(p,d);default:throw new Error(p.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),i=function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),e&&(f+=ac),[f,h,i,s,a,u,n].join(`
`)}function ze(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(n){var e=n.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return"float "+o+"() {return "+e+";}";var a=n.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+e+`, halfCR);
      }
    `;var u=n.shapeInfo.texShape,c=u[0],l=u[1],h=Ce(e);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+e+`, uv);
    }
  `}(r);case 1:return function(n){var e=n.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1);if(n.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+We(n)+`
      }
    `;var a=n.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+e+`, halfCR);
      }
    `;var u=Ce(e);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+e+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+e+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+e+`, uv);
    }
  `}(r);case 2:return function(n){var e=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n.shapeInfo.texShape;if(i!=null&&Sn(e,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=ke(e),l=c.newShape,h=c.keptDims,f=l;if(f.length<e.length){var p=Ge(n,f);return`
      `+ze(p)+`
      float `+a+`(int row, int col) {
        return `+a+"("+He(["row","col"],h)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+e[1]+`, 1)));
        `+We(n)+`
      }
    `;var d=i[0],m=i[1],v=Ce(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+e[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+e[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+e[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+d+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(n){var e=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e[1]*e[2],s=e[2],u=ke(e),c=u.newShape,l=u.keptDims,h=c;if(h.length<e.length){var f=Ge(n,h);return`
        `+ze(f)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+He(["row","col","depth"],l)+`);
        }
      `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+We(n)+`
      }
    `;var p=n.shapeInfo.texShape,d=p[0],m=p[1],v=n.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+e[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=Ce(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+d+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(n){var e=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e[3],s=e[2]*i,u=e[1]*s,c=ke(e),l=c.newShape,h=c.keptDims;if(l.length<e.length){var f=Ge(n,l);return`
      `+ze(f)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+He(["row","col","depth","depth2"],h)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+We(n)+`
      }
    `;var p=n.shapeInfo.flatOffset,d=n.shapeInfo.texShape,m=d[0],v=d[1];if(v===u&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+e[1]*e[2]+", "+e[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=Ce(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(n){var e=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e[4],s=e[3]*i,u=e[2]*s,c=e[1]*u,l=ke(e),h=l.newShape,f=l.keptDims;if(h.length<e.length){var p=Ge(n,h);return`
      `+ze(p)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+He(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+We(n)+`
      }
    `;var d=n.shapeInfo.flatOffset,m=n.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+e[1]*e[2]*e[3]+`,
               `+e[2]*e[3]+", "+e[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=Ce(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(n){var e=n.shapeInfo.logicalShape,o=n.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=ke(e),s=i.newShape,u=i.keptDims;if(s.length<e.length){var c=Ge(n,s);return`
      `+ze(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+He(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=e[5],h=e[4]*l,f=e[3]*h,p=e[2]*f,d=e[1]*p;if(n.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+p+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+We(n)+`
      }
    `;var m=n.shapeInfo.flatOffset,v=n.shapeInfo.texShape,g=v[0],y=v[1];if(y===d&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+f+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+e[1]*e[2]*e[3]*e[4]+`,
               `+e[2]*e[3]*e[4]+`,
               `+e[3]*e[4]+`,
               `+e[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=Ce(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+p+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+g+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function fi(r){var t,n,e;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),e=Fn(),`
    vec4 `+n+`() {
      return `+e.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Fn();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=Fn();if(u!=null&&Sn(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=Ge(o,l);return`
        `+fi(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+He(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],p=c[1],d=Math.ceil(a[2]/2),m=d*Math.ceil(a[1]/2),v=Fn();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+p+", "+m+", "+d+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],p=Math.ceil(a[i-1]/2),d=p*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+d+" + (row / 2) * "+p+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,d*=a[i-g-1],v="b"+g+" * "+d+" + "+v;var y=Fn();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(r)}}var tc=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,rc=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,oc=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ac=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Ce(r){return"offset"+r}function We(r){var t=r.name,n=j(r.shapeInfo.logicalShape);return n<2?"return "+t+";":`
    for (int i = 0; i < `+n+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function vn(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Ge(r,t){var n=JSON.parse(JSON.stringify(r));return n.shapeInfo.logicalShape=t,n}function He(r,t){return t.map(function(n){return r[n]}).join(", ")}var ic=function(r,t,n,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(n.charAt(0).toUpperCase()+n.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),e||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=vn(c),h=Mn("coords",c);if(a===1){var f=vn(s=c+1);i=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),d="."+p[s-1],m=p.map(function(k){return"int "+k}),v=Mn("sourceLocR",s-1).concat("inIdx.r"),g=Mn("sourceLocG",s-1).concat("inIdx.g"),y=Mn("sourceLocB",s-1).concat("inIdx.b"),x=Mn("sourceLocA",s-1).concat("inIdx.a"),b=n==="max"?"greaterThan":"lessThan",w=e?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",R=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",A=e?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+A+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+R+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+R+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+b+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},sc=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,n=r.filterWidth,e=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+e+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},uc=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,n=r.filterHeight,e=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=l-1-r.padInfo.front,d=h-1-r.padInfo.top,m=f-1-r.padInfo.left,v=1/(t*n*e);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},cc=function(r,t,n,e,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],an(r,t),an(r,n);var i="0.0";e!=null&&(an(r,e),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(an(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},lc=function(r,t,n,e,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],an(r,t),an(r,n);var i="vec4(0.0)";e!=null&&(an(r,e),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(an(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},hc="return areal * breal - aimag * bimag;",fc="return areal * bimag + aimag * breal;",jo=function(r,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=an(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Er="return a + b;",Rr="return a - b;",Yo="return a * b;",pi="return (a < 0.) ? b * a : a;",bn=function(r,t,n){this.variableNames=["A","B"],this.outputShape=an(t,n),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},di=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,le=function(r,t,n,e){e===void 0&&(e=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=an(t,n);var o=this.outputShape.length,a="";if(e)if(o===0||j(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+vn(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=Mn("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},pc=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,n){var e=this;return function(o,a){e.minLoc==null&&(e.minLoc=o.getUniformLocationNoThrow(a,"minVal"),e.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(e.minLoc,t),o.gl.uniform1f(e.maxLoc,n)}},r}(),dc=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,n){var e=this;return function(o,a){e.minLoc==null&&(e.minLoc=o.getUniformLocationNoThrow(a,"minVal"),e.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(e.minLoc,t),o.gl.uniform1f(e.maxLoc,n)}},r}(),vc=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},mc=function(r){this.outputShape=[],this.outputShape=nt(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var n=1;n<t.length;n++)t[n]=t[n-1]+r[n][1];var e=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(n=1;n<t.length;n++){var o=t[n-1];e.push("else if (yC < "+t[n]+") setOutput(getT"+n+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];e.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+e.join(`
        `)+`
      }
    `},gc=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=nt(r,t);var n=this.outputShape,e=n.length,o=vn(e),a=Mn("coords",e),i=["x","y","z","w","u","v"].slice(0,e);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Tt(i,c,p)+`),
            vec2(`+Tt(l,c,p)+`));
        }`}var d=s.length,m=s[s.length-1];f+=`
        return getChannel(
          getT`+d+"("+Tt(i,c,m)+`),
          vec2(`+Tt(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[e-1]+" = "+a[e-1]+` + 1;
        if (`+a[e-1]+" < "+n[e-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[e-2]+" = "+a[e-2]+` + 1;
        if (`+a[e-2]+" < "+n[e-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[e-1]+" = "+a[e-1]+` - 1;
        if (`+a[e-2]+" < "+n[e-2]+` &&
            `+a[e-1]+" < "+n[e-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function Tt(r,t,n){var e=r.indexOf(t);return r.map(function(o,a){return a===e?o+" - "+n:o}).join()}var yc=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,n=r.strideWidth,e=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+e+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+n+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},xc=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,n=r.filterWidth,e=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=n-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+e+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},bc=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,n=r.strideHeight,e=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+n+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+e+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},wc=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,n=r.filterHeight,e=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=n-1-r.padInfo.top,c=e-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+n+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+n+` - 1 - wR;

            for (int wC = 0; wC < `+e+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+e+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Cc=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,n=r.strideWidth,e=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+e+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+n+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ec=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,n=r.filterWidth,e=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=n-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+e+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},$o=function(r,t,n,e){t===void 0&&(t=!1),n===void 0&&(n=null),e===void 0&&(e=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),p=r.inChannels%4,d=r.dataFormat==="channelsLast",m=d?1:2,v=d?2:3,g=d?3:1,y="",x="";n&&(y=e?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,x="result = activation(result);");var b=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),e&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+b+`
        `+x+`
        setOutput(result);
      }
    `},Rc=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,n=r.padInfo.top,e=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,p=4*Math.floor(r.inChannels/4),d=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+n+", "+e+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Qo=function(r,t,n,e){t===void 0&&(t=!1),n===void 0&&(n=null),e===void 0&&(e=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=r.outChannels/r.inChannels,m="",v="";n&&(m=e?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),e&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},Jo=function(r,t,n,e){t===void 0&&(t=!1),n===void 0&&(n=null),e===void 0&&(e=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=p,m="int xR; int xC; int xCOffset;",v=0;v<f;v++)for(var g=0;g<p;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<f;v++)for(var y=0;y<d;y++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*y)*h+`;
        `,c===1){if(g<p&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<p)){var x=s%2==0?Ta(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<p&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<p&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<p&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<p&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<p&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<f;v++)for(g=0;g<p;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var b="",w="";n&&(b=e?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`vec4 activation(vec4 x) {
          `+n+`
        }`,w="result = activation(result);");var R=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),e&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+R+`
        `+w+`
        setOutput(result);
      }
    `},Ic=function(r,t,n,e,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=n[0],h=n[1];this.outputShape=[c,l,h,u];var f=e==="bilinear"?1:0,p=[i-1+".0",s-1+".0"],d=p[0],m=p[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=v[0],y=v[1],x=v[2],b=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=b[0],R=b[1],A=b[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+R+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+A+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},kc=function(r,t,n){this.variableNames=["x"],this.outputShape=r;var e=r.length,o=r[r.length-1],a=n?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(n?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+vn(e)+` coords = getOutputCoords();
        int end = `+Zo(e,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+Zo(e,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(e,"coords")+`);
        }
        setOutput(val);
      }
    `};function Zo(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var Sc=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=vt.DENSE;var t=lt(r),n=Fn();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Se(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+n.output+` = result;
      }
    `},Ac=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=vt.DENSE;var t=lt(r),n=Fn();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+Se(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+n.output+` = result;
      }
    `},Dc=function(){function r(t,n,e){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=n,this.dataFormat=e,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+n+`;
      int offset_h = imod(h, `+n+`);
      int in_w = w / `+n+`;
      int offset_w = imod(w, `+n+`);
      int offset_d = (offset_h * `+n+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Nc=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Tc=function(r){this.variableNames=["A"],this.outTexUsage=zn.DOWNLOAD;var t=Fn();this.outputShape=r,this.userCode=`
      `+hi+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Fc=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=zn.DOWNLOAD;var t=Fn();this.outputShape=r,this.userCode=`
      `+hi+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},_c=function(r,t,n){n===void 0&&(n=!1),this.variableNames=["A"];var e=Fn(),o=t[0],a=t[1];this.outputShape=r;var i="result";n&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+go(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+e.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+e.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Oc=function(r,t,n){n===void 0&&(n=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var e=Fn(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";n&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+e.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+go(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+e.output+" = "+s+`;
      }
    `},Mc="return real * expR - imag * expI;",Bc="return real * expI + imag * expR;",na=function(r,t,n){this.variableNames=["real","imag"];var e=t[1];this.outputShape=t;var o=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=n?e+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+e+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+e+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Pc=function(){function r(t,n){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var n=this;return function(e,o){n.valueLoc==null&&(n.valueLoc=e.getUniformLocationNoThrow(o,"value")),e.gl.uniform1f(n.valueLoc,t)}},r}(),Lc=function(r,t,n){this.variableNames=["A","indices"];var e=r.slice();e[n]=t,this.outputShape=e,this.rank=e.length;var o=vn(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Wc=function(r,t,n){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=n;var e=vn(t.length),o=vn(n.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+e+" strides = "+e+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Uc(r,t){var n=Fn();return Ms(r,t,n.version+`
    precision highp float;
    `+n.attribute+` vec3 clipSpacePos;
    `+n.attribute+` vec2 uv;
    `+n.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Vc(r,t){return Us(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function zc(r,t){return Vs(r,t,new Uint16Array([0,1,2,2,1,3]))}function Ct(r,t,n,e,o,a,i){Gs(n,e);var s=zs(r,t),u=r.TEXTURE_2D;return Y(r,t,function(){return r.bindTexture(u,s)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),Y(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),Y(r,t,function(){return r.texImage2D(u,0,o,n,e,0,a,i,null)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Gc(r,t,n,e,o){var a=tr(n,e);return Ct(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Hc(r,t,n,e,o){var a=tr(n,e);return Ct(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function qc(r,t,n,e,o){var a=tr(n,e);return Ct(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Kc(r,t,n,e,o){var a=bt(n,e);return Ct(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Xc(r,t,n,e,o){var a=bt(n,e);return Ct(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function jc(r,t,n,e){return Y(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,e)}),Vo(r,t,n,"clipSpacePos",e,3,20,0)&&Vo(r,t,n,"uv",e,2,20,12)}function Yc(r,t,n,e,o,a,i){var s,u,c;Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,n)}),a instanceof Uint8Array?(s=new Uint8Array(e*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(e*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Y(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,e,o,0,r.RGBA,u,s)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function $c(r,t,n,e){Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,n)}),e.data instanceof Uint8Array?Y(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e.width,e.height,0,r.RGBA,r.UNSIGNED_BYTE,e.data)}):Y(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e)}),Y(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Qc(r,t,n,e,o){var a=r.createBuffer();Y(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*n*e;return Y(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),Y(r,t,function(){return r.readPixels(0,0,e,n,r.RGBA,r.FLOAT,0)}),Y(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function Jc(r,t,n){var e=r,o=new Float32Array(n);return e.bindBuffer(e.PIXEL_PACK_BUFFER,t),e.getBufferSubData(e.PIXEL_PACK_BUFFER,0,o),e.bindBuffer(e.PIXEL_PACK_BUFFER,null),o}function Zc(r,t,n,e,o){var a=tr(n,e),i=a[0],s=a[1],u=new Uint8Array(n*e*4);return Y(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function nl(r,t,n,e,o,a,i,s){var u=r,c=new Float32Array(function(l,h){var f=bt(l,h);return f[0]*f[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function el(r,t,n,e){var o=new Float32Array(n*e*4);return Y(r,t,function(){return r.readPixels(0,0,e,n,r.RGBA,r.FLOAT,o)}),o}var tl=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var n=M().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Ns(n,t)):this.gl=re(n);var e="WEBGL_color_buffer_float";if(M().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=St(this.gl,this.debug,"OES_texture_float"),qn(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=St(this.gl,this.debug,"OES_texture_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(e),qn(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=St(this.gl,this.debug,"EXT_color_buffer_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(e="EXT_color_buffer_float",qn(this.gl,e))this.colorBufferFloatExtension=this.gl.getExtension(e);else{if(!qn(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Vc(this.gl,this.debug),this.indexBuffer=zc(this.gl,this.debug),this.framebuffer=Hs(this.gl,this.debug),this.textureConfig=ro(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return M().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var n=this.gl;Y(n,this.debug,function(){return n.finish()}),Y(n,this.debug,function(){return n.bindFramebuffer(n.FRAMEBUFFER,null)}),Y(n,this.debug,function(){return n.deleteFramebuffer(t.framebuffer)}),Y(n,this.debug,function(){return n.bindBuffer(n.ARRAY_BUFFER,null)}),Y(n,this.debug,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null)}),Y(n,this.debug,function(){return n.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,n){return this.throwIfDisposed(),Gc(this.gl,this.debug,t,n,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,n){return this.throwIfDisposed(),Hc(this.gl,this.debug,t,n,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,n){return this.throwIfDisposed(),qc(this.gl,this.debug,t,n,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,n){this.throwIfDisposed(),$c(this.gl,this.debug,t,n)},r.prototype.uploadDenseMatrixToTexture=function(t,n,e,o){this.throwIfDisposed(),Yc(this.gl,this.debug,t,n,e,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,n){return this.throwIfDisposed(),Xc(this.gl,this.debug,t,n,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,n){return this.throwIfDisposed(),Kc(this.gl,this.debug,t,n,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var n=this;this.throwIfDisposed(),this.outputTexture===t&&(zo(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Y(this.gl,this.debug,function(){return n.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,n,e){var o=this;return this.downloadMatrixDriver(t,function(){return Zc(o.gl,o.debug,n,e,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,n,e,o,a,i){return nl(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,n){return Jc(this.gl,t,n)},r.prototype.createBufferFromTexture=function(t,n,e){this.bindTextureToFrameBuffer(t);var o=Qc(this.gl,this.debug,n,e,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var n,e,o=this;if(M().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),e=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},n=i}else M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),e=function(){return o.isQueryAvailable(n,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):e=function(){return!0};return{query:n,isFencePassed:e}},r.prototype.downloadMatrixFromPackedTexture=function(t,n,e){var o=this;return this.downloadMatrixDriver(t,function(){return el(o.gl,o.debug,n,e)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var n=this.gl,e=Bs(n,this.debug,t),o=Uc(n,this.debug),a=Ls(n,this.debug);return Y(n,this.debug,function(){return n.attachShader(a,o)}),Y(n,this.debug,function(){return n.attachShader(a,e)}),Ws(n,this.debug,a),this.debug&&xr(n,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=jc(n,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var n=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&Y(this.gl,this.debug,function(){return n.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var n=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&xr(this.gl,this.debug,this.program),Y(this.gl,this.debug,function(){return n.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,n,e){return e===void 0&&(e=!0),this.throwIfDisposed(),e?Ks(this.gl,this.debug,t,n):Xs(this.gl,t,n)},r.prototype.getAttributeLocation=function(t,n){var e=this;return this.throwIfDisposed(),Y(this.gl,this.debug,function(){return e.gl.getAttribLocation(t,n)})},r.prototype.getUniformLocationNoThrow=function(t,n){return this.throwIfDisposed(),this.gl.getUniformLocation(t,n)},r.prototype.setInputMatrixTexture=function(t,n,e){this.throwIfDisposed(),this.throwIfNoProgram(),js(this.gl,this.debug,this.program,t,n,e)},r.prototype.setOutputMatrixTexture=function(t,n,e){this.setOutputMatrixTextureDriver(t,e,n)},r.prototype.setOutputPackedMatrixTexture=function(t,n,e){this.throwIfDisposed();var o=bt(n,e),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,n,e,o){this.setOutputMatrixWriteRegionDriver(e,t,o,n)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,n,e,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&xr(this.gl,this.debug,this.program),At(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),Y(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),Y(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=St(this.gl,this.debug,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,n=this.getQueryTimerExtensionWebGL2(),e=t.createQuery();return t.beginQuery(n.TIME_ELAPSED_EXT,e),e}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var n=this.gl,e=this.getQueryTimerExtensionWebGL2();n.endQuery(e.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return K(this,void 0,void 0,function(){var n=this;return X(this,function(e){switch(e.label){case 0:return[4,Mo(function(){return n.disposed||n.isQueryAvailable(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return e.sent(),[2,this.getQueryTime(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,n){if(n===0)return null;if(n===2){var e=this.gl;return e.getQueryParameter(t,e.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,n){if(n===0)return!0;if(n===2){var e=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var n=this;return new Promise(function(e){n.addItemToPoll(function(){return t.isFencePassed()},function(){return e()})})},r.prototype.pollItems=function(){for(var t=function(e){for(var o=0;o<e.length&&e[o]();++o);return o-1}(this.itemsToPoll.map(function(e){return e.isDoneFn})),n=0;n<=t;++n)(0,this.itemsToPoll[n].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,n){var e=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:n}),this.itemsToPoll.length>1||Mo(function(){return e.pollItems(),e.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),br(this.gl,this.debug,t,this.framebuffer),this.debug&&At(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(br(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&At(this.gl)):zo(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,n){this.bindTextureToFrameBuffer(t);var e=n();return this.unbindTextureToFrameBuffer(),e},r.prototype.setOutputMatrixTextureDriver=function(t,n,e){this.throwIfDisposed();var o=this.gl;br(o,this.debug,t,this.framebuffer),this.debug&&At(o),this.outputTexture=t,Y(o,this.debug,function(){return o.viewport(0,0,n,e)}),Y(o,this.debug,function(){return o.scissor(0,0,n,e)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,n,e,o){var a=this;this.throwIfDisposed(),Y(this.gl,this.debug,function(){return a.gl.scissor(t,n,e,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function ea(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(n,e){var o=n.logicalShape,a=t[e],i=a.shape;if(!Sn(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!n.isUniform||!a.isUniform){var s=n.texShape,u=a.isUniform?null:a.texData.texShape;if(!Sn(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var rl=function(r,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e=n.filterWidth,o=n.inChannels,a=n.strideWidth,i=n.strideHeight,s=n.padInfo,u=n.outWidth,c=n.dilationWidth,l=n.dilationHeight,h=n.dataFormat,f=s.left,p=s.top,d=o*e,m=Fn(),v=h==="channelsLast",g=v?0:1,y=v?1:2,x="",b=0;b<=1;b++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+b+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+p+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+t[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*b+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+m.output+` = result;
      }
    `},ol=function(r,t,n,e,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+n+") + float("+e+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},al=function(r,t,n,e,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=n,this.alpha=e,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+e+") * norm + float("+n+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+e+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},il=function(r,t,n,e,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+n+") + float("+e+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},sl=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,n=r.strideWidth,e=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+e+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+n+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ul=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,n=r.strideHeight,e=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,p=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+n+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+e+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ir=function(r,t,n,e,o,a,i){n===void 0&&(n=!1),e===void 0&&(e=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=n?r[1]:r[2],u=Math.ceil(s/2),c=n?"i * 2, rc.y":"rc.y, i * 2",l=e?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=e?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",d="";a&&(p=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,d="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+d+`

        setOutput(result);
      }
    `},cl=function(){function r(t,n,e){this.variableNames=["probs"],this.outputShape=[t,e],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(n-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(n-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var n=this;return function(e,o){n.seedLoc==null&&(n.seedLoc=e.getUniformLocation(o,"seed")),e.gl.uniform1f(n.seedLoc,t)}},r}(),ll=function(r,t,n,e){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+e+"), float("+n+`),
                      float(index == coords.y)));
      }
    `},hl=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var n=Mn("rc",t),e=vn(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(t,r,n),a=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],n),i=function(s,u){var c=s.length,l=function(h,f){for(var p=[],d=0;d<=1;d++)for(var m=0;m<=1;m++){for(var v=(d===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<h;g++)v=f[f.length-1-g]+","+v;p.push(v)}return p}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,n);this.userCode=`
        void main() {
          `+e+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},fl=function(r,t,n){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var e=r.length,o=vn(e),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e);this.userCode=e!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+n+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+n+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},pl=function(r,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+r[g]+v[1]});for(var e=r.length,o=vn(e),a=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,g){return v[0]+r[g]}).join(","),s=Mn("rc",e),u=Mn("source",e),c=s[e-1]+" < "+this.outputShape[e-1],l=e===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[e-1]+` += 1;
       if(`+c+`) {
      `,e===1?"":`}
       rc = outputLoc;
       `+s[e-2]+` += 1;
       if(`+s[e-2]+" < "+this.outputShape[e-2]+") {",e===1?"":"  "+s[e-1]+` += 1;
         if(`+c+") {"],f=e===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",d=0,m=e===1?2:4;d<m;d++)p+=`
        `+h[d]+`
        if (`+f+`) {
          result[`+d+"] = float("+n+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;p+=e===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},kr=function(r,t,n){if(this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");var e=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=t==="avg",p="0.0";if(f||(p="-1.0 / 1e-20"),n)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(d="avgValue / count");var m=4*Math.floor(e/4),v=e%4,g=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+d+`);
      }
    `}},Sr=function(r,t,n){if(this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");var e=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.front,d=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),n)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(y="avgValue / count");var x=4*Math.floor(e/4),b=e%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+p+", "+d+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(b===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(b===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(b===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},dl=function(r,t){this.variableNames=["x"];var n=r.windowSize,e=r.batchSize,o=r.inSize,a=Math.ceil(o/n);this.outputShape=[e,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(n/4),l=n%4,h=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";t==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var p="";o%n>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},vl=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n="",e=0;e<4;e++){var o="thisRC = rc;";e%2==1&&(o+="thisRC.z += 1;"),e>1&&(o+="thisRC.y += 1;"),n+=`
        `+o+`
        `+(e>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+e+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(e>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+Se(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+go(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+n+`

        setOutput(result);
      }
    `},ml=function(r,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var e=t.shape,o=e[1],a=e[2],i=r.shape,s=i[1],u=i[2],c=[n&&s>1?o-1:o,n&&u>1?a-1:a],l=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,m=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},gl=function(r,t,n,e){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,n,s];var u=[e&&t>1?a-1:a,e&&n>1?i-1:i],c=[e&&t>1?t-1:t,e&&n>1?n-1:n];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},yl=function(r,t,n,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,n,s];var u=[e&&t>1?a-1:a,e&&n>1?i-1:i],c=[e&&t>1?t-1:t,e&&n>1?n-1:n];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(n-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},xl=function(r,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var e=t.shape,o=e[1],a=e[2],i=r.shape,s=i[1],u=i[2],c=[n&&s>1?o-1:o,n&&u>1?a-1:a],l=[n&&s>1?s-1:s,n&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,m=2*Math.ceil(p)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+n+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+n+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},bl=function(r,t,n,e){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,n,s];var u=[e&&t>1?a-1:a,e&&n>1?i-1:i],c=[e&&t>1?t-1:t,e&&n>1?n-1:n],l=e?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},wl=function(r,t){this.variableNames=["x"];var n=r.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=r,n!==1){var e=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=vn(n);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+e+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},Cl=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var n=r.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");this.outputShape=r;var e=Mn("rc",n),o=e[n-1]+" + 1 < "+this.outputShape[n-1],a=e[n-2]+" + 1 < "+this.outputShape[n-2],i=vn(n);function s(u){var c=r.map(function(l,h){return function(f,p){return t.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+p[f]+" - 1":""+p[f]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(e.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[n-1]="("+u[n-1]+" + 1)",s(u)}(e.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[n-2]="("+u[n-2]+" + 1)",s(u)}(e.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[n-1]="("+u[n-1]+" + 1)",u[n-2]="("+u[n-2]+" + 1)",s(u)}(e.slice())+`;
            }
          }
          setOutput(result);
        }
    `},ta=function(r,t,n,e,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=vn(o.length),u=vn(a.length),c="";n===1?c="i":n===2&&(c="i, j");var l="getIndices("+c+")",h="";e===1?h="i":e===2&&(h="i, coords[1]");var f="getUpdates("+h+")",p=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},El=function(r,t){this.variableNames=["x","segmentIds"];var n=r.windowSize,e=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/n);this.outputShape=[e,i];var s=4*Math.floor(n/4),u=n%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%n>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%n>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+n+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Rl=function(r,t,n){var e,o;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error("Where for rank "+n+" is not yet supported");if(n===1)o="resRC",e="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);e=i.join(),o=s.join()}var c=vn(n);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+e+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Il=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var n,e=vn(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Ar.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);n=`
        `+e+` sourceLoc;
        `+e+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+Ar[s]+" = start["+s+"] + coords."+Ar[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+n+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var n=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(e,o){n.startLoc==null&&(n.startLoc=e.getUniformLocationNoThrow(o,"start"),n.startLoc==null)||e.gl.uniform1iv(n.startLoc,t)}},r}(),Ar=["x","y","z","w","u","v"],kl=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var n=vn(this.rank),e=Mn("coords",this.rank),o=Mn("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+e[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+e[this.rank-1]+`;
      if (++`+e[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+e[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+n+"("+t.map(function(l,h){return"start["+h+"]"}).join()+");":t.map(function(l,h){return o[h]+" = "+e[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+n+` coords = getOutputCoords();
        `+n+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var n=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(e,o){n.startLoc==null&&(n.startLoc=e.getUniformLocationNoThrow(o,"start"),n.startLoc==null)||e.gl.uniform1iv(n.startLoc,t)}},r}(),Sl=function(r,t,n){this.variableNames=["x"],this.outputShape=n;var e=n.length,o=vn(n.length),a=vn(n.length),i="";if(e===1)i="coords * strides + begin";else{var s=0;i=n.map(function(u,c){return s++,n.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Al=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,n,e){var o,a=ra(n,e),i=oa(t,a,e);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===Vn.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===Vn.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===Vn.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===Vn.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===Vn.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,n,e,o){if(this.freeTextures!=null){var a=oa(n,ra(e,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var n in this.freeTextures)this.freeTextures[n].forEach(function(e){t.gpgpu.deleteMatrixTexture(e)});for(var n in this.usedTextures)this.usedTextures[n].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function ra(r,t){if(r===zn.UPLOAD)return Vn.PACKED_2X2_FLOAT32;if(r===zn.RENDER||r==null)return function(n){return M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?Vn.PACKED_2X2_FLOAT32:Vn.UNPACKED_FLOAT32:n?Vn.PACKED_2X2_FLOAT16:Vn.UNPACKED_FLOAT16}(t);if(r===zn.DOWNLOAD||r===zn.PIXELS)return Vn.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function oa(r,t,n){return r[0]+"_"+r[1]+"_"+t+"_"+n}var Dl=function(r,t){this.variableNames=["A"];for(var n=new Array(r.length),e=0;e<n.length;e++)n[e]=r[e]*t[e];this.outputShape=n,this.rank=n.length;var o=vn(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Nl=function(r,t){this.variableNames=["A"];for(var n=new Array(r.length),e=0;e<n.length;e++)n[e]=r[t[e]];this.outputShape=n,this.rank=n.length;var o=vn(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Tl=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var n=new Array(r.length),e=0;e<n.length;e++)n[e]=r[t[e]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=vn(this.rank),a=li("rc",this.rank),i=new Array(this.rank);for(e=0;e<t.length;e++)i[t[e]]=a[e];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+n[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+n[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},yo=1.7580993408473768,xo=1.0507009873554805,en=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Xn="if (isnan(x)) return x;",Fl="return x;",aa="return abs(x);",vi=Xn+`
  return (x < 0.0) ? 0.0 : x;
`,mi=Xn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,gi="return (x >= 0.0) ? x : (exp(x) - 1.0);",_l=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+yo+`;
  float scale = `+xo+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,ia="return -x;",sa="return ceil(x);",ua="return floor(x);",ca="return exp(x);",la="return exp(x) - 1.0;",Ol=Xn+`
  return sin(x);
`,Ml=Xn+`
  return cos(x);
`,Bl=Xn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Pl=Xn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Ll=Xn+`
  return atan(x);
`,Wl=Xn+"return log(x + sqrt(x * x + 1.0));",Ul=Xn+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Vl=Xn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Ft="return x;",zl="return x;",yi=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,xi=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,bi=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ct=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Gl=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,n=Mn("rc",t),e=vn(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,n),a=n.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+e+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},_t={};function Ot(r,t){if(t===void 0&&(t=!1),r==="linear")return t?zl:Fl;if(r==="relu")return t?yi:vi;if(r==="elu")return t?bi:gi;if(r==="relu6")return t?xi:mi;if(r==="prelu")return t?di:pi;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Hl=600,ql=function(r){function t(n){var e,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!M().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(n==null){var a=re(M().getNumber("WEBGL_VERSION"));o.binaryCache=((e=M().getNumber("WEBGL_VERSION"))in _t||(_t[e]={}),_t[e]),o.gpgpu=new tl(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=n,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=n.gl.canvas;return o.textureManager=new Al(o.gpgpu),o.numMBBeforeWarning=M().global.screen==null?1024:M().global.screen.height*M().global.screen.width*window.devicePixelRatio*Hl/1024/1024,o.texData=new ei(o,N),o}return Kn(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(n,e,o){if(M().getBool("DEBUG")&&this.checkNumericalProblems(n),o==="complex64"&&n!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:e,dtype:o,values:n,usage:zn.UPLOAD}),a},t.prototype.move=function(n,e,o,a){if(M().getBool("DEBUG")&&this.checkNumericalProblems(e),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(n,{shape:o,dtype:a,values:e,usage:zn.UPLOAD})},t.prototype.readSync=function(n){var e=this.texData.get(n),o=e.values,a=e.dtype,i=e.complexTensors,s=e.slice,u=e.shape,c=e.isPacked;if(s!=null){var l=void 0;l=c?new ct(u,Ft):new en(u,Ft);var h=this.runWebGLProgram(l,[{dataId:n,shape:u,dtype:a}],a),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(n);if(a==="string")return o;var p,d,m=this.activeTimers!=null;return m&&(p=Qn()),a==="complex64"?d=$r(i.real.dataSync(),i.imag.dataSync()):d=this.getValuesFromTexture(n),m&&(this.downloadWaitMs+=Qn()-p),this.convertAndCacheOnCPU(n,d)},t.prototype.read=function(n){return K(this,void 0,void 0,function(){var e,o,a,i,s,u,c,l,h,f,p,d,m,v,g,y,x,b,w,R,A,k;return X(this,function(I){switch(I.label){case 0:if(this.pendingRead.has(n))return e=this.pendingRead.get(n),[2,new Promise(function(S){return e.push(S)})];if(o=this.texData.get(n),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new ct(i,Ft):new en(i,Ft),f=this.runWebGLProgram(h,[{dataId:n,shape:i,dtype:u}],u),p=this.read(f.dataId),this.disposeData(f.dataId),[2,p];if(a!=null)return[2,this.convertAndCacheOnCPU(n)];if(!M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&M().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&M().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(n),v=this.texData.get(m.dataId),d=(k=this.gpgpu).createBufferFromTexture.apply(k,[v.texture].concat(lt(i)))),this.pendingRead.set(n,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=I.sent(),x=y[0],b=y[1],g=$r(x,b),[3,5];case 4:d==null?g=this.getValuesFromTexture(n):(w=j(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),I.label=5;case 5:return m!=null&&this.disposeData(m.dataId),R=this.convertAndCacheOnCPU(n,g),A=this.pendingRead.get(n),this.pendingRead.delete(n),A.forEach(function(S){return S(R)}),this.pendingDisposal.has(n)&&(this.pendingDisposal.delete(n),this.disposeData(n),this.pendingDeletes--),[2,R]}})})},t.prototype.checkNumericalProblems=function(n){if(n!=null)for(var e=0;e<n.length;e++){var o=n[e];if(!_s(o))throw M().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(n){var e,o=this.texData.get(n),a=o.shape,i=o.dtype,s=o.isPacked,u=j(a);if(M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(n),l=this.texData.get(c.dataId),h=(e=this.gpgpu).downloadMatrixFromPackedTexture.apply(e,[l.texture].concat(lt(a))).subarray(0,u);return this.disposeData(c.dataId),h}var f=M().getBool("WEBGL_PACK")&&s===!0,p=f?wr(a):a,d=f?new Fc(p):new Tc(p),m=this.runWebGLProgram(d,[{shape:p,dtype:i,dataId:n}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(n){return K(this,void 0,void 0,function(){var e,o,a,i,s,u,c;return X(this,function(l){switch(l.label){case 0:return e=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,n(),i=Ze(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=Ze(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=e,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=ps(c),u.getExtraProfileInfo=function(){return c.map(function(h,f){return{name:s[f],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Qn(),endMs:null}},t.prototype.endTimer=function(n){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),n):(n.endMs=Qn(),n)},t.prototype.getQueryTime=function(n){return K(this,void 0,void 0,function(){var e;return X(this,function(o){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(n)]:[2,(e=n).endMs-e.startMs]})})},t.prototype.disposeData=function(n){if(!this.pendingDisposal.has(n)){if(this.pendingRead.has(n))return this.pendingDisposal.add(n),void this.pendingDeletes++;if(this.texData.has(n)){this.releaseGPUData(n);var e=this.texData.get(n).complexTensors;e!=null&&(e.real.dispose(),e.imag.dispose()),this.texData.delete(n)}}},t.prototype.releaseGPUData=function(n){var e=this.texData.get(n),o=e.texture,a=e.dtype,i=e.texShape,s=e.usage,u=e.isPacked,c=e.slice,l=c&&c.origDataId||n,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var f=this.texData.get(n);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},t.prototype.getTexture=function(n){return this.uploadToGPU(n),this.texData.get(n).texture},t.prototype.getDataInfo=function(n){return this.texData.get(n)},t.prototype.getCPUBackend=function(){return M().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=N.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(n,e){var o=this;return e===void 0&&(e=128),this.getCPUBackend()!=null&&n.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<e})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(n,e){var o=this.makeOutput(n.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:N.keep(n.clone()),imag:N.keep(e.clone())},o},t.prototype.real=function(n){return this.texData.get(n.dataId).complexTensors.real.clone()},t.prototype.imag=function(n){return this.texData.get(n.dataId).complexTensors.imag.clone()},t.prototype.slice=function(n,e,o){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.slice(n,e,o);if(j(o)===0)return Tn([],o,n.dtype);var a=this.texData.get(n.dataId).isPacked,i=Za(n.shape,e,o);if(a||!i){var s=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new kl(o):new Il(o),u=s.getCustomSetupFunc(e);return this.compileAndRun(s,[n],null,u)}return this.uploadToGPU(n.dataId),this.shallowSlice(n,e,o)},t.prototype.shallowSlice=function(n,e,o){var a=this.texData.get(n.dataId),i=this.makeOutput(o,n.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=n.dtype;var u=ni(e,n.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||n.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(n,e,o,a){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.stridedSlice(n,e,o,a);var i=lo(e,o,a);if(i.some(function(u){return u===0}))return Tn([],i);var s=new Sl(e,a,i);return this.compileAndRun(s,[n])},t.prototype.reverse=function(n,e){var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Cl(n.shape,e):new wl(n.shape,e);return this.compileAndRun(o,[n])},t.prototype.concat=function(n,e){if(n[0].dtype==="complex64"){var o=n.map(function(p){return Hn(p)}),a=n.map(function(p){return Zn(p)});return An(this.concat(o,e),this.concat(a,e))}if(this.shouldExecuteOnCPU(n))return this.cpuBackend.concat(n,e);if(n.length===1)return n[0];if(n.length>M().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(n.length/2),s=this.concat(n.slice(0,i),e),u=this.concat(n.slice(i),e);return this.concat([s,u],e)}if(M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&n[0].rank>1){var c=new gc(n.map(function(p){return p.shape}),e);return this.compileAndRun(c,n)}var l=nt(n.map(function(p){return p.shape}),e),h=n.map(function(p){return p.as2D(-1,j(p.shape.slice(e)))}),f=new mc(h.map(function(p){return p.shape}));return this.compileAndRun(f,h).reshape(l)},t.prototype.neg=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.neg(n);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,ia,n.dtype);var e=new en(n.shape,ia);return this.compileAndRun(e,[n])},t.prototype.batchMatMul=function(n,e,o,a){var i=o?n.shape[2]:n.shape[1],s=a?e.shape[1]:e.shape[2],u=o?n.shape[1]:n.shape[2],c=n.shape[0];if((i===1||s===1)&&u>1e3){o&&(n=n.transpose([0,2,1])),a&&(e=e.transpose([0,2,1]));var l=s===1?n:n.as3D(c,u,1),h=s===1?2:1,f=s===1?e.as3D(c,1,u):e;return this.multiply(l,f).sum(h,!0)}var p=Dn(n.dtype,e.dtype),d=new Ir(n.shape,[c,i,s],o,a);return this.compileAndRun(d,[n,e],p)},t.prototype.fusedBatchMatMul=function(n){var e=n.a,o=n.b,a=n.transposeA,i=n.transposeB,s=n.bias,u=n.activation,c=n.preluActivationWeights,l=a?e.shape[2]:e.shape[1],h=i?o.shape[1]:o.shape[2],f=e.shape[0],p=Dn(e.dtype,o.dtype),d=s!=null,m=c!=null,v=u?Ot(u,!0):null,g=new Ir(e.shape,[f,l,h],a,i,d,v,m),y=[e,o];return s&&y.push(s),c&&y.push(c),this.compileAndRun(g,y,p)},t.prototype.multiply=function(n,e){if(n.dtype==="complex64"){var o=this.texData.get(n.dataId),a=this.texData.get(e.dataId),i=new jo(hc,n.shape,e.shape),s=new jo(fc,n.shape,e.shape),u=[this.makeComplexComponentTensorInfo(n,o.complexTensors.real),this.makeComplexComponentTensorInfo(n,o.complexTensors.imag),this.makeComplexComponentTensorInfo(e,a.complexTensors.real),this.makeComplexComponentTensorInfo(e,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.multiply(n,e);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,Yo,n.dtype);var f=new bn(Yo,n.shape,e.shape);return this.compileAndRun(f,[n,e],n.dtype)},t.prototype.batchNormalization=function(n,e,o,a,i,s){var u=[n,e,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),M().getBool("WEBGL_PACK_NORMALIZATION")){var h=new lc(n.shape,e.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var f=new cc(n.shape,e.shape,o.shape,c,l,a);return this.compileAndRun(f,u)},t.prototype.localResponseNormalization4D=function(n,e,o,a,i){var s=M().getBool("WEBGL_PACK_NORMALIZATION")?new il(n.shape,e,o,a,i):new ol(n.shape,e,o,a,i);return this.compileAndRun(s,[n])},t.prototype.LRNGrad=function(n,e,o,a,i,s,u){var c=new al(e.shape,a,i,s,u);return this.compileAndRun(c,[e,o,n])},t.prototype.tile=function(n,e){if(n.dtype==="string"){var o=this.readSync(n.dataId).map(function(i){return Wt(i)});return ui(nn(n.shape,n.dtype,o),e)}var a=new Dl(n.shape,e);return this.compileAndRun(a,[n])},t.prototype.pad=function(n,e,o){var a=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new pl(n.shape,e,o):new fl(n.shape,e,o);return this.compileAndRun(a,[n])},t.prototype.transpose=function(n,e){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.transpose(n,e);var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Tl(n.shape,e):new Nl(n.shape,e);return this.compileAndRun(o,[n])},t.prototype.gather=function(n,e,o){if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.gather(n,e,o);var a=new Lc(n.shape,e.size,o);return this.compileAndRun(a,[n,e])},t.prototype.batchToSpaceND=function(n,e,o){E(n.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=e.reduce(function(h,f){return h*f}),i=Kt(n.shape,e,a),s=Xt(i.length,e.length),u=jt(n.shape,e,a),c=Ya(o,e.length),l=$a(u,o,e.length);return n.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(n,e,o){E(n.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=e.reduce(function(f,p){return f*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+e.length;s<n.shape.length;++s)i.push([0,0]);var u=n.pad(i),c=Kt(u.shape,e,a,!1),l=Xt(c.length,e.length,!1),h=jt(u.shape,e,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.reduce=function(n,e,o){var a=n.shape[0],i=n.shape[1],s=Cr(i),u=new dl({windowSize:s,inSize:i,batchSize:a},e),c=this.compileAndRun(u,[n],o);return c.shape[1]===1?c:this.reduce(c,e,o)},t.prototype.argReduce=function(n,e,o){o===void 0&&(o=null);var a=n.shape[0],i=n.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=Cr(i),u=new nc({windowSize:s,inSize:i,batchSize:a},e,o==null),c=[n];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(n,e,l)},t.prototype.argReducePacked=function(n,e,o){o===void 0&&(o=null);var a=o!=null?o.shape:n.shape,i=Cr(a[a.length-1]),s=new ic(a,i,e,o==null),u=o==null?[n]:[n,o],c=this.compileAndRun(s,u,"int32");return c.rank===n.rank?this.argReducePacked(n,e,c):c},t.prototype.sum=function(n,e){Un("sum",e,n.rank);var o=Nn(n.shape,e),a=o[0],i=j(o[1]),s=n.as2D(-1,i),u=dr(n.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(n,e){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.prod(n,e);var o=Nn(n.shape,e),a=o[0],i=j(o[1]),s=n.as2D(-1,i),u=dr(n.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(n,e,o){var a=0,i=oe([a],n.rank),s=n;i!=null&&(s=n.transpose(i),a=ae(1,n.rank)[0]);var u=function(p,d,m){for(var v=[],g=p.length,y=0;y<g;y++)y!==d?v.push(p[y]):v.push(m);return v}(s.shape,a,o),c=j([s.shape[a]]),l=s.as2D(-1,c),h=dr(n.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",e,h,o).reshape(u);return i!=null&&(f=f.transpose(oo(i))),f},t.prototype.segOpCompute=function(n,e,o,a,i){var s=n.shape[0],u=n.shape[1],c=function(f,p){var d,m=!1;for(f<=Ja?(d=f,m=!0):d=Vr(f,Math.floor(Math.sqrt(f)));!m;)d>p||d===f?m=!0:d=Vr(f,d+1);return d}(u,i),l=new El({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[n,o],a);return h.shape[1]===i?h:(o=qt(0,i).tile([u/c]),this.segOpCompute(h,e,o,a,i))},t.prototype.argMinMaxReduce=function(n,e,o){var a=[e];if(Un("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,n.rank),!M().getBool("WEBGL_PACK_REDUCE")||n.rank<=2){var i=Nn(n.shape,a),s=i[0],u=j(i[1]),c=n.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(n,o)},t.prototype.argMin=function(n,e){return this.argMinMaxReduce(n,e,"min")},t.prototype.argMax=function(n,e){return this.argMinMaxReduce(n,e,"max")},t.prototype.cumsum=function(n,e,o,a){if(e!==n.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(n.rank-1)+" but got axis="+e);var i=new kc(n.shape,o,a);return this.compileAndRun(i,[n])},t.prototype.equal=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return vec4(equal(a, b));
`,"bool");var o=new bn("return float(a == b);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.notEqual=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return vec4(notEqual(a, b));
`,"bool");var o=new bn("return float(a != b);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.less=function(n,e){if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.less(n,e);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return vec4(lessThan(a, b));
`,"bool");var o=new bn("return float(a < b);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.lessEqual=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new bn("return float(a <= b);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.greater=function(n,e){if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.greater(n,e);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new bn("return float(a > b);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.greaterEqual=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new bn("return float(a >= b);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.logicalNot=function(n){var e=new en(n.shape,"return float(!(x >= 1.0));");return this.compileAndRun(e,[n])},t.prototype.logicalAnd=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new bn("return float(a >= 1.0 && b >= 1.0);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.logicalOr=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new bn("return float(a >= 1.0 || b >= 1.0);",n.shape,e.shape);return this.compileAndRun(o,[n,e],"bool")},t.prototype.select=function(n,e,o){var a=new Rl(n.rank,e.shape,e.rank);return this.compileAndRun(a,[n,e,o],Dn(e.dtype,o.dtype))},t.prototype.where=function(n){Gt("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var e=n.dataSync();return mo(n.shape,e)},t.prototype.topk=function(n,e,o){return ci(n.dataSync(),n.shape,n.dtype,e)},t.prototype.min=function(n,e){Un("min",e,n.rank);var o=Nn(n.shape,e),a=o[0],i=j(o[1]),s=n.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(n,e){if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.minimum(n,e);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,e.shape):new bn(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,n.shape,e.shape);return this.compileAndRun(o,[n,e])},t.prototype.mod=function(n,e){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,e.shape):new bn(`if (b == 0.0) return NAN;
  return mod(a, b);`,n.shape,e.shape);return this.compileAndRun(o,[n,e])},t.prototype.max=function(n,e){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.max(n,e);Un("max",e,n.rank);var o=Nn(n.shape,e),a=o[0],i=j(o[1]),s=n.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(n,e){if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.maximum(n,e);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,e.shape):new bn(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,n.shape,e.shape);return this.compileAndRun(o,[n,e])},t.prototype.all=function(n,e){Un("all",e,n.rank);var o=Nn(n.shape,e),a=o[0],i=j(o[1]),s=n.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(n,e){Un("any",e,n.rank);var o=Nn(n.shape,e),a=o[0],i=j(o[1]),s=n.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new bn(`
if (a == b) {
  return 1.0;
};
return a / b;`,n.shape,e.shape);return this.compileAndRun(o,[n,e],"float32")},t.prototype.floorDiv=function(n,e){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new bn(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,n.shape,e.shape);return this.compileAndRun(o,[n,e],"int32")},t.prototype.add=function(n,e){if(n.dtype==="complex64"&&e.dtype==="complex64")return this.complexSeparableBinaryOp(n,e,Er);if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.add(n,e);var o=Dn(n.dtype,e.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,Er,o);var a=new bn(Er,n.shape,e.shape);return this.compileAndRun(a,[n,e],o)},t.prototype.packedUnaryOp=function(n,e,o){var a=new ct(n.shape,e);return this.compileAndRun(a,[n],o)},t.prototype.packedBinaryOp=function(n,e,o,a,i){i===void 0&&(i=!1);var s=new le(o,n.shape,e.shape,i);return this.compileAndRun(s,[n,e],a)},t.prototype.complexSeparableBinaryOp=function(n,e,o){var a=this,i=this.texData.get(n.dataId),s=this.texData.get(e.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(f){var p=f[0],d=f[1],m=a.makeComplexComponentTensorInfo(n,p),v=a.makeComplexComponentTensorInfo(e,d),g=new bn(o,n.shape,e.shape);return a.compileAndRun(g,[m,v],Dn(p.dtype,d.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},t.prototype.makeComplexComponentTensorInfo=function(n,e){return{dataId:e.dataId,dtype:e.dtype,shape:n.shape}},t.prototype.addN=function(n){if(n.length===1)return n[0];if(n.length>M().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var e=Math.floor(n.length/2),o=this.addN(n.slice(0,e)),a=this.addN(n.slice(e));return this.addN([o,a])}var i=n.map(function(c){return c.dtype}).reduce(function(c,l){return Dn(c,l)}),s=n.map(function(c){return c.shape}),u=M().getBool("WEBGL_PACK")?new Zu(n[0].shape,s):new Ju(n[0].shape,s);return this.compileAndRun(u,n,i)},t.prototype.subtract=function(n,e){if(n.dtype==="complex64"&&e.dtype==="complex64")return this.complexSeparableBinaryOp(n,e,Rr);if(this.shouldExecuteOnCPU([n,e]))return this.cpuBackend.subtract(n,e);var o=Dn(n.dtype,e.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,e,Rr,n.dtype);var a=new bn(Rr,n.shape,e.shape);return this.compileAndRun(a,[n,e],o)},t.prototype.pow=function(n,e){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,e.shape):new bn(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,n.shape,e.shape),a=Dn(n.dtype,e.dtype);return this.compileAndRun(o,[n,e],a)},t.prototype.ceil=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.ceil(n);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,sa,n.dtype);var e=new en(n.shape,sa);return this.compileAndRun(e,[n])},t.prototype.floor=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.floor(n);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,ua,n.dtype);var e=new en(n.shape,ua);return this.compileAndRun(e,[n])},t.prototype.sign=function(n){var e=new en(n.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(e,[n])},t.prototype.isNaN=function(n){var e=new en(n.shape,"return float(isnan(x));");return this.compileAndRun(e,[n],"bool")},t.prototype.isInf=function(n){var e=new en(n.shape,"return float(isinf(x));");return this.compileAndRun(e,[n],"bool")},t.prototype.isFinite=function(n){var e=new en(n.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(e,[n],"bool")},t.prototype.round=function(n){var e=new en(n.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(e,[n])},t.prototype.exp=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.exp(n);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,ca,n.dtype);var e=new en(n.shape,ca);return this.compileAndRun(e,[n])},t.prototype.expm1=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.expm1(n);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,la,n.dtype);var e=new en(n.shape,la);return this.compileAndRun(e,[n])},t.prototype.softmax=function(n,e){var o=kn([e],n.shape),a=this.max(n,o),i=Pn(a.shape,o),s=this.subtract(n,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.log(n);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,n.dtype);var e=new en(n.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(e,[n])},t.prototype.log1p=function(n){var e=new en(n.shape,"return log(1.0 + x);");return this.compileAndRun(e,[n])},t.prototype.sqrt=function(n){var e=new en(n.shape,"return sqrt(x);");return this.compileAndRun(e,[n])},t.prototype.rsqrt=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.rsqrt(n);var e=new en(n.shape,"return inversesqrt(x);");return this.compileAndRun(e,[n])},t.prototype.reciprocal=function(n){var e=new en(n.shape,"return 1.0 / x;");return this.compileAndRun(e,[n])},t.prototype.relu=function(n){var e;return e=M().getBool("WEBGL_PACK")?new ct(n.shape,yi):new en(n.shape,vi),this.compileAndRun(e,[n])},t.prototype.relu6=function(n){var e;return e=M().getBool("WEBGL_PACK")?new ct(n.shape,xi):new en(n.shape,mi),this.compileAndRun(e,[n])},t.prototype.prelu=function(n,e){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le(di,n.shape,e.shape):new bn(pi,n.shape,e.shape);return this.compileAndRun(o,[n,e])},t.prototype.elu=function(n){if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,bi,n.dtype);var e=new en(n.shape,gi);return this.compileAndRun(e,[n])},t.prototype.eluDer=function(n,e){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,n.shape,e.shape):new bn("return (b >= 1.0) ? a : a * (b + 1.0);",n.shape,e.shape);return this.compileAndRun(o,[n,e])},t.prototype.selu=function(n){var e=new en(n.shape,_l);return this.compileAndRun(e,[n])},t.prototype.int=function(n){var e=new en(n.shape,"return float(int(x));");return this.compileAndRun(e,[n],"int32")},t.prototype.clip=function(n,e,o){var a,i=(a=M().getBool("WEBGL_PACK_CLIP")?new dc(n.shape):new pc(n.shape)).getCustomSetupFunc(e,o);return this.compileAndRun(a,[n],null,i)},t.prototype.abs=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.abs(n);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,aa,n.dtype);var e=new en(n.shape,aa);return this.compileAndRun(e,[n])},t.prototype.complexAbs=function(n){var e=this.texData.get(n.dataId),o=new vc(n.shape),a=[this.makeComplexComponentTensorInfo(n,e.complexTensors.real),this.makeComplexComponentTensorInfo(n,e.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(n){var e=new en(n.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(e,[n])},t.prototype.softplus=function(n){var e=new en(n.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(e,[n])},t.prototype.sin=function(n){var e=new en(n.shape,Ol);return this.compileAndRun(e,[n])},t.prototype.cos=function(n){var e=new en(n.shape,Ml);return this.compileAndRun(e,[n])},t.prototype.tan=function(n){var e=new en(n.shape,"return tan(x);");return this.compileAndRun(e,[n])},t.prototype.asin=function(n){var e=new en(n.shape,Bl);return this.compileAndRun(e,[n])},t.prototype.acos=function(n){var e=new en(n.shape,Pl);return this.compileAndRun(e,[n])},t.prototype.atan=function(n){var e=new en(n.shape,Ll);return this.compileAndRun(e,[n])},t.prototype.atan2=function(n,e){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,e.shape):new bn(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,n.shape,e.shape);return this.compileAndRun(o,[n,e])},t.prototype.sinh=function(n){var e=new en(n.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(e,[n])},t.prototype.cosh=function(n){var e=new en(n.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(e,[n])},t.prototype.tanh=function(n){var e=new en(n.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(e,[n])},t.prototype.asinh=function(n){var e=new en(n.shape,Wl);return this.compileAndRun(e,[n])},t.prototype.acosh=function(n){var e=new en(n.shape,Ul);return this.compileAndRun(e,[n])},t.prototype.atanh=function(n){var e=new en(n.shape,Vl);return this.compileAndRun(e,[n])},t.prototype.erf=function(n){var e=new en(n.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(e,[n])},t.prototype.step=function(n,e){var o=new en(n.shape,function(a){return a===void 0&&(a=0),Xn+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(e));return this.compileAndRun(o,[n])},t.prototype.conv2dByMatMul=function(n,e,o,a,i,s){var u=n.shape,c=this.texData.get(n.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,p=o.dataFormat==="channelsLast",d=(h===1||f===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(d||!M().getBool("WEBGL_LAZILY_UNPACK")||!M().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(n,[1,v,o.inChannels]),y=this.reshape(e,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var x=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),b={dataId:n.dataId,shape:[1,x,o.inChannels],dtype:n.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Nt(c.shape,b.shape),function(){return"packed reshape "+c.shape+" to "+b.shape+" isn't free"});var R=this.reshape(e,[1,o.inChannels,o.outChannels]),A=this.fusedBatchMatMul({a:b,b:R,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),k=this.texData.get(A.dataId);return E(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,k.shape=o.outShape,N.makeTensorFromDataId(A.dataId,o.outShape,A.dtype)},t.prototype.conv2dWithIm2Row=function(n,e,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,p=o.dataFormat==="channelsLast",d=u*c*l,m=f*h,v=[d,m],g=n.squeeze([0]),y=e.reshape([1,d,-1]),x=new rl(v,g.shape,o),b=this.compileAndRun(x,[g]).reshape([1,v[0],v[1]]),w=a!=null,R=s!=null,A=i?Ot(i,!0):null,k=new Ir(b.shape,[1,m,o.outChannels],!0,!1,w,A,R),I=[b,y];a&&I.push(a),R&&I.push(s);var S=this.compileAndRun(k,I);return p?S.reshape([1,f,h,o.outChannels]):S.reshape([1,o.outChannels,f,h])},t.prototype.fusedConv2d=function(n){var e=n.input,o=n.filter,a=n.convInfo,i=n.bias,s=n.activation,u=n.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(e,o,a,i,s,u);if(M().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?Ot(s,!1):null,f=new $o(a,c,h,l),p=[e,o];return i&&p.push(i),u&&p.push(u),this.compileAndRun(f,p)},t.prototype.conv2d=function(n,e,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(n,e,o);if(M().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,e,o);var a=new $o(o);return this.compileAndRun(a,[n,e])},t.prototype.conv2dDerInput=function(n,e,o){var a=new xc(o);return this.compileAndRun(a,[n,e])},t.prototype.conv2dDerFilter=function(n,e,o){var a=new yc(o);return this.compileAndRun(a,[n,e])},t.prototype.fusedDepthwiseConv2D=function(n){var e,o=n.input,a=n.filter,i=n.convInfo,s=n.bias,u=n.activation,c=n.preluActivationWeights,l=M().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?Ot(u,l):null,f=[o,a],p=s!=null,d=c!=null;return p&&f.push(s),d&&f.push(c),l?(e=new Jo(i,p,h,d),this.compileAndRun(e,f)):(e=new Qo(i,p,h,d),this.compileAndRun(e,f))},t.prototype.depthwiseConv2D=function(n,e,o){var a;return M().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new Jo(o),this.compileAndRun(a,[n,e])):(a=new Qo(o),this.compileAndRun(a,[n,e]))},t.prototype.depthwiseConv2DDerInput=function(n,e,o){var a=new Ec(o);return this.compileAndRun(a,[n,e])},t.prototype.depthwiseConv2DDerFilter=function(n,e,o){var a=new Cc(o);return this.compileAndRun(a,[n,e])},t.prototype.conv3d=function(n,e,o){var a=new Rc(o);return this.compileAndRun(a,[n,e])},t.prototype.conv3dDerInput=function(n,e,o){var a=new wc(o);return this.compileAndRun(a,[n,e])},t.prototype.conv3dDerFilter=function(n,e,o){var a=new bc(o);return this.compileAndRun(a,[n,e])},t.prototype.maxPool=function(n,e){var o=new kr(e,"max",!1);return this.compileAndRun(o,[n])},t.prototype.avgPool=function(n,e){var o=new kr(e,"avg",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.maxPoolBackprop=function(n,e,o,a){var i=new kr(a,"max",!0),s=this.compileAndRun(i,[e]),u=new sl(a),c=this.compileAndRun(u,[n,s],e.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(n,e,o){var a=new sc(o);return this.compileAndRun(a,[n],e.dtype)},t.prototype.cast=function(n,e){return oi(n,e,this)},t.prototype.unstack=function(n,e){for(var o=n.shape[e],a=new Array(n.rank-1),i=0,s=0;s<n.rank;s++)s!==e&&(a[i++]=n.shape[s]);var u=new Array(n.rank).fill(0),c=n.shape.slice();c[e]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[e]=s,l[s]=this.slice(n,u,c).reshape(a);return l},t.prototype.avgPool3d=function(n,e){var o=new Sr(e,"avg",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.avgPool3dBackprop=function(n,e,o){var a=new uc(o);return this.compileAndRun(a,[n],e.dtype)},t.prototype.maxPool3d=function(n,e){var o=new Sr(e,"max",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.maxPool3dBackprop=function(n,e,o,a){var i=new Sr(a,"max",!0),s=this.compileAndRun(i,[e]),u=new ul(a),c=this.compileAndRun(u,[n,s],e.dtype);return s.dispose(),c},t.prototype.reshape=function(n,e){var o=this.texData.get(n.dataId);if(o.isPacked&&!Nt(n.shape,e)&&(o.texture===null||!Nt(o.shape,e))){var a=this.packedReshape(n,e);return N.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return Yr(n,e)},t.prototype.resizeBilinear=function(n,e,o,a){var i=M().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new yl(n.shape,e,o,a):new gl(n.shape,e,o,a);return this.compileAndRun(i,[n],"float32")},t.prototype.resizeBilinearBackprop=function(n,e,o){var a=new ml(n,e,o);return this.compileAndRun(a,[n])},t.prototype.resizeNearestNeighbor=function(n,e,o,a){var i=new bl(n.shape,e,o,a);return this.compileAndRun(i,[n])},t.prototype.resizeNearestNeighborBackprop=function(n,e,o){var a=new xl(n,e,o);return this.compileAndRun(a,[n])},t.prototype.multinomial=function(n,e,o,a){var i=e?n:ho(n),s=i.shape[0],u=i.shape[1],c=new cl(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(n,e,o,a){var i=new ll(n.size,e,o,a);return this.compileAndRun(i,[n])},t.prototype.diag=function(n){var e=new Nc(n.size);return this.compileAndRun(e,[n])},t.prototype.nonMaxSuppression=function(n,e,o,a,i){return Gt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),po(n.dataSync(),e.dataSync(),o,a,i)},t.prototype.cropAndResize=function(n,e,o,a,i,s){var u=new Ic(n.shape,e.shape,a,i,s);return this.compileAndRun(u,[n,e,o],"float32")},t.prototype.depthToSpace=function(n,e,o){E(e>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+e});var a=n.shape[0],i=o==="NHWC"?n.shape[1]:n.shape[2],s=o==="NHWC"?n.shape[2]:n.shape[3],u=o==="NHWC"?n.shape[3]:n.shape[1],c=i*e,l=s*e,h=u/(e*e),f=new Dc(o==="NHWC"?[a,c,l,h]:[a,h,c,l],e,o);return this.compileAndRun(f,[n])},t.prototype.split=function(n,e,o){return si(n,e,o)},t.prototype.scatterND=function(n,e,o){var a=Yt(0,n,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],f=n.reshape([s,i]),p=e.reshape([s,u]);if(l===0)return Yr(Tn([]),o);var d=Q(0),m=new ta(s,i,f.rank,p.rank,c,h);return this.compileAndRun(m,[p,f,d]).reshape(o)},t.prototype.sparseToDense=function(n,e,o,a){var i=Yt(0,n,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new ta(u,s,n.rank,e.rank,c,[l,1]);return this.compileAndRun(h,[e,n,a]).reshape(o)},t.prototype.fft=function(n){return this.fftImpl(n,!1)},t.prototype.ifft=function(n){return this.fftImpl(n,!0)},t.prototype.fftImpl=function(n,e){var o=this.texData.get(n.dataId),a=new na(Mc,n.shape,e),i=new na(Bc,n.shape,e),s=[this.makeComplexComponentTensorInfo(n,o.complexTensors.real),this.makeComplexComponentTensorInfo(n,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(n.shape[0],n.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(n,e){var o=e.shape,a=o[o.length-1],i=Qa(n,e),s=i[0],u=i[1],c=i[2],l=i[3],h=e.reshape([u,a]),f=n.reshape([n.size/c,c]),p=new Wc(a,l,[u,c]);return this.compileAndRun(p,[f,h]).reshape(s)},t.prototype.fill=function(n,e,o){if((o=o||yt(e))==="string"){var a=Lt(o,j(n));return a.fill(e),N.makeTensor(a,n,o,this)}var i=new Pc(n,e),s=i.getCustomSetupFunc(e);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(n){if(n.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(n.shape,1,n.dtype)},t.prototype.zerosLike=function(n){return this.fill(n.shape,n.dtype==="string"?"":0,n.dtype)},t.prototype.linspace=function(n,e,o){return ai(n,e,o)},t.prototype.makeTensorInfo=function(n,e){var o=this.write(null,n,e);return this.texData.get(o).usage=null,{dataId:o,shape:n,dtype:e}},t.prototype.makeOutput=function(n,e){var o=this.makeTensorInfo(n,e).dataId;return N.makeTensorFromDataId(o,n,e,this)},t.prototype.unpackTensor=function(n){var e=new Gl(n.shape);return this.runWebGLProgram(e,[n],n.dtype)},t.prototype.packTensor=function(n){var e=new hl(n.shape);return this.runWebGLProgram(e,[n],n.dtype,null,!0)},t.prototype.packedReshape=function(n,e){var o=[Vt(n.shape)].concat(zt(n.shape)),a={dtype:n.dtype,shape:o,dataId:n.dataId},i=[Vt(e)].concat(zt(e)),s=new vl(i,o),u=this.runWebGLProgram(s,[a],n.dtype,null,!0);return{dataId:u.dataId,shape:e,dtype:u.dtype}},t.prototype.decode=function(n){var e,o=this.texData.get(n),a=o.isPacked,i=o.shape,s=o.dtype,u=wr(i);return e=a?new Ac(u):new Sc(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(e,[{shape:u,dtype:s,dataId:n}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(n,e,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(n.outputShape,o),c=this.texData.get(u.dataId);if(n.packedOutput&&(c.isPacked=!0),n.outPackingScheme===vt.DENSE){var l=lt(n.outputShape);c.texShape=l.map(function(x){return 2*x})}if(n.outTexUsage!=null&&(c.usage=n.outTexUsage),j(u.shape)===0)return c.values=pt(u.dtype,0),u;var h=[],f=e.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var b=s.texData.get(x.dataId);if(b.texture==null){if(!n.packedInputs&&j(x.shape)<=M().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};n.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}else if(!!b.isPacked!=!!n.packedInputs)x=b.isPacked?s.unpackTensor(x):s.packTensor(x),h.push(x),b=s.texData.get(x.dataId);else if(b.isPacked&&!Nt(b.shape,x.shape)){var w=x,R=x.shape;x.shape=b.shape,x=s.packedReshape(x,R),h.push(x),b=s.texData.get(x.dataId),w.shape=R}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(u.dataId);var p,d={shape:u.shape,texData:c,isUniform:!1},m=function(x,b,w){var R="";b.concat(w).forEach(function(I){var S=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,F=I.isUniform?"uniform":I.texData.texShape;R+=I.shape+"_"+F+"_"+S});var A=x.userCode,k=x.constructor.name;return k+="_"+R+"_"+A}(n,f,d),v=this.getAndSaveBinary(m,function(){return function(x,b,w,R){var A=b.userCode,k=w.map(function(P,G){var H={logicalShape:P.shape,texShape:P.isUniform?null:P.texData.texShape,isUniform:P.isUniform,isPacked:!P.isUniform&&P.texData.isPacked,flatOffset:null};return P.texData!=null&&P.texData.slice!=null&&P.texData.slice.flatOffset>0&&(H.flatOffset=P.texData.slice.flatOffset),{name:b.variableNames[G],shapeInfo:H}}),I=k.map(function(P){return P.shapeInfo}),S={logicalShape:R.shape,texShape:R.texData.texShape,isUniform:!1,isPacked:R.texData.isPacked,flatOffset:null},F=ec(k,S,A,b.packedInputs),T=x.createProgram(F),W=null,L=x.getUniformLocation(T,"NAN",!1);M().getNumber("WEBGL_VERSION")===1&&(W=x.getUniformLocation(T,"INFINITY",!1));for(var B={},z=0;z<b.variableNames.length;z++){var V=b.variableNames[z];B[V]=x.getUniformLocation(T,V,!1),B["offset"+V]=x.getUniformLocation(T,"offset"+V,!1)}return{program:b,source:F,webGLProgram:T,uniformLocations:B,inShapeInfos:I,outShapeInfo:S,infLoc:W,nanLoc:L}}(s.gpgpu,n,f,d)}),g=this.activeTimers!=null;if(g&&(p=this.startTimer()),function(x,b,w,R,A){ea(b.inShapeInfos,w),ea([b.outShapeInfo],[R]);var k=R.texData.texture,I=R.texData.texShape;R.texData.isPacked?x.setOutputPackedMatrixTexture(k,I[0],I[1]):x.setOutputMatrixTexture(k,I[0],I[1]),x.setProgram(b.webGLProgram),M().getNumber("WEBGL_VERSION")===1&&b.infLoc!==null&&x.gl.uniform1f(b.infLoc,1/0),b.nanLoc!==null&&x.gl.uniform1f(b.nanLoc,NaN),w.forEach(function(S,F){var T=b.program.variableNames[F],W=b.uniformLocations[T],L=b.uniformLocations["offset"+T];if(W!=null)if(S.isUniform)if(j(S.shape)<2)x.gl.uniform1f(W,S.uniformValues[0]);else{var B=S.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),x.gl.uniform1fv(W,B)}else S.texData.slice!=null&&L!=null&&x.gl.uniform1i(L,S.texData.slice.flatOffset),x.setInputMatrixTexture(S.texData.texture,W,F)}),A!=null&&A(x,b.webGLProgram),x.executeProgram()}(this.gpgpu,v,f,d,a),h.forEach(function(x){return s.disposeData(x.dataId)}),g&&(p=this.endTimer(p),this.activeTimers.push({name:n.constructor.name,query:this.getQueryTime(p)})),!M().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},t.prototype.compileAndRun=function(n,e,o,a,i){i===void 0&&(i=!1),o=o||e[0].dtype;var s=this.runWebGLProgram(n,e,o,a,i);return N.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(n,e){return n in this.binaryCache||(this.binaryCache[n]=e()),this.binaryCache[n]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var n=this;this.disposed||(M().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(e){n.gpgpu.deleteProgram(n.binaryCache[e].webGLProgram),delete n.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var n=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Rn(function(){if(!M().get("WEBGL_RENDER_FLOAT32_ENABLED")){var e=M().getBool("DEBUG");M().set("DEBUG",!1);var o=n.abs(Q(1e-8)).dataSync()[0];if(M().set("DEBUG",e),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(n){var e,o=this.texData.get(n),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=Qn());var p=o.texShape;if(p==null&&(p=Qs(a,l),o.texShape=p),s!=null){var d=wr(a),m=void 0,v=p[1],g=p[0],y=s instanceof Uint8Array;l?(v=(e=bt(p[0],p[1]))[0],g=e[1],m=new Oc(d,[g,v],y)):m=new _c(d,[g,v],y);var x=this.makeTensorInfo([g,v],i);this.texData.get(x.dataId).usage=y?zn.PIXELS:zn.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),v,g,s);var b=this.runWebGLProgram(m,[x],i,null,!0),w=this.texData.get(b.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(b.dataId),o.values=null,f&&(this.uploadWaitMs+=Qn()-h)}else{var R=this.acquireTexture(p,c,i,l);o.texture=R}}},t.prototype.convertAndCacheOnCPU=function(n,e){var o=this.texData.get(n),a=o.dtype;return this.releaseGPUData(n),e!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(e,a)),o.values},t.prototype.acquireTexture=function(n,e,o,a){if(this.numBytesInGPU+=this.computeBytes(n,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(n,e,a)},t.prototype.computeBytes=function(n,e){return n[0]*n[1]*Fa(e)},t}(ti);Wa()&&N.registerBackend("webgl",function(){return new ql},2);var Kl=D({square_:function(r){var t=C(r,"x","square"),n=[t];return N.runKernelFunc(function(e,o){return o([t]),e.square(t)},{x:t},null,"Square",{},n,[])}}),gt="SquaredDifference",wi=D({squaredDifference_:function(r,t){var n,e=C(r,"a","squaredDifference"),o=C(t,"b","squaredDifference");n=yn(e,o),e=n[0],o=n[1],an(e.shape,o.shape);var a={a:e,b:o},i=[e,o];return N.runKernelFunc(function(s,u){var c=s.squaredDifference(e,o);return u([e,o]),c},a,function(s,u){var c=u[0],l=u[1],h=Q(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},gt,{},i,[])}}),Xl=D({abs_:function(r){var t=C(r,"x","abs");return t.dtype==="complex64"?N.runKernelFunc(function(n){return n.complexAbs(t)},{$x:t}):N.runKernelFunc(function(n,e){var o=n.abs(t);return e([t]),o},{x:t},function(n,e){var o=e[0];return{x:function(){return n.mul(o.toFloat().step(-1))}}},"Abs")}}),jl=D({acos_:function(r){var t=C(r,"x","acos");return N.runKernelFunc(function(n,e){var o=n.acos(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.divStrict(Q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Yl=D({acosh_:function(r){var t=C(r,"x","acosh");return N.runKernelFunc(function(n,e){var o=n.acosh(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),$l=D({asin_:function(r){var t=C(r,"x","asin");return N.runKernelFunc(function(n,e){var o=n.asin(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.divStrict(Q(1).sub(o.toFloat().square()).sqrt())}}})}}),Ql=D({asinh_:function(r){var t=C(r,"x","asinh");return N.runKernelFunc(function(n,e){var o=n.asinh(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.divStrict(Q(1).add(o.toFloat().square()).sqrt())}}})}}),Jl=D({atan_:function(r){var t=C(r,"x","atan");return N.runKernelFunc(function(n,e){var o=n.atan(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.div(o.toFloat().square().add(1))}}})}}),Zl=D({atanh_:function(r){var t=C(r,"x","atanh");return N.runKernelFunc(function(n,e){var o=n.atanh(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.div(Q(1).sub(o.toFloat().square()))}}})}}),nh=D({ceil_:function(r){var t=C(r,"x","ceil");return N.runKernelFunc(function(n){return n.ceil(t)},{$x:t},function(n){return{$x:function(){return hn(n)}}})}}),eh=D({clipByValue_:function(r,t,n){var e=C(r,"x","clipByValue");E(t<=n,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+n+")."});var o=[e],a={min:t,max:n};return N.runKernelFunc(function(i,s){var u=i.clip(e,t,n);return s([e]),u},{x:e},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(n)),hn(i))}}},"ClipByValue",a,o)}}),th=D({cos_:function(r){var t=C(r,"x","cos"),n=[t];return N.runKernelFunc(function(e,o){var a=e.cos(t);return o([t]),a},{x:t},function(e,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(e)}}},"Cos",{},n)}}),rh=D({cosh_:function(r){var t=C(r,"x","cosh");return N.runKernelFunc(function(n,e){var o=n.cosh(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return o.toFloat().sinh().mulStrict(n)}}})}}),oh=D({erf_:function(r){var t=C(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),N.runKernelFunc(function(n,e){var o=n.erf(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),ah=D({exp_:function(r){var t=C(r,"x","exp");return N.runKernelFunc(function(n,e){var o=n.exp(t);return e([o]),o},{x:t},function(n,e){return{x:function(){return n.mulStrict(e[0])}}},"Exp",{},[],[!0])}}),ih=D({expm1_:function(r){var t=C(r,"x","expm1");return N.runKernelFunc(function(n,e){var o=n.expm1(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.mul(o.exp())}}})}}),sh=D({floor_:function(r){var t=C(r,"x","floor");return N.runKernelFunc(function(n){return n.floor(t)},{$x:t},function(n){return{$x:function(){return hn(n)}}})}}),uh=D({log_:function(r){var t=C(r,"x","log"),n=[t];return N.runKernelFunc(function(e,o){var a=e.log(t);return o([t]),a},{x:t},function(e,o){var a=o[0];return{x:function(){return e.div(a.toFloat())}}},"Log",{},n)}}),ch=D({log1p_:function(r){var t=C(r,"x","log1p");return N.runKernelFunc(function(n,e){var o=n.log1p(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.div(o.add(1))}}})}}),lh=D({logSigmoid_:function(r){var t=C(r,"x","logSigmoid");return N.runKernelFunc(function(n,e){var o=n.softplus(t.neg()).neg();return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.mul(o.neg().sigmoid())}}})}}),Ci=D({neg_:function(r){var t=C(r,"x","neg"),n=[t];return N.runKernelFunc(function(e){return e.neg(t)},{x:t},function(e){return{x:function(){return e.neg()}}},"Neg",{},n)}}),hh=D({reciprocal_:function(r){var t=C(r,"x","reciprocal");return N.runKernelFunc(function(n,e){var o=n.reciprocal(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.div(o.square().neg())}}})}}),fh=D({round_:function(r){var t=C(r,"x","round");return N.runKernelFunc(function(n){return n.round(t)},{$x:t},function(n){return{$x:function(){return hn(n)}}})}}),Ei=D({rsqrt_:function(r){var t=C(r,"x","rsqrt"),n=[t];return N.runKernelFunc(function(e,o){var a=e.rsqrt(t);return o([t]),a},{x:t},function(e,o){var a=o[0];return{x:function(){return e.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},n)}}),ph=D({sigmoid_:function(r){var t=C(r,"x","sigmoid");return N.runKernelFunc(function(n,e){var o=n.sigmoid(t);return e([o]),o},{x:t},function(n,e){var o=e[0];return{x:function(){return n.mul(o.mul(Q(1).sub(o)))}}},"Sigmoid")}}),dh=D({sign_:function(r){var t=C(r,"x","sign");return N.runKernelFunc(function(n){return n.sign(t)},{$x:t},function(n){return{$x:function(){return hn(n)}}})}}),vh=D({isNaN_:function(r){var t=C(r,"x","isNaN");return N.runKernelFunc(function(n){return n.isNaN(t)},{$x:t},function(n){return{$x:function(){return hn(n)}}})}}),mh=D({isInf_:function(r){var t=C(r,"x","isInf");return N.runKernelFunc(function(n){return n.isInf(t)},{$x:t},function(n){return{$x:function(){return hn(n)}}})}}),gh=D({isFinite_:function(r){var t=C(r,"x","isFinite");return N.runKernelFunc(function(n){return n.isFinite(t)},{$x:t},function(n){return{$x:function(){return hn(n)}}})}}),yh=D({sin_:function(r){var t=C(r,"x","sin"),n=[t];return N.runKernelFunc(function(e,o){var a=e.sin(t);return o([t]),a},{x:t},function(e,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(e)}}},"Sin",{},n)}}),xh=D({sinh_:function(r){var t=C(r,"x","sinh");return N.runKernelFunc(function(n,e){var o=n.sinh(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return o.toFloat().cosh().mulStrict(n)}}})}}),bh=D({softplus_:function(r){var t=C(r,"x","softplus");return N.runKernelFunc(function(n,e){var o=n.softplus(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.mul(o.sigmoid())}}})}}),wh=D({sqrt_:function(r){var t=C(r,"x","sqrt");return N.runKernelFunc(function(n,e){var o=n.sqrt(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.div(o.toFloat().sqrt().mul(2))}}})}}),Ch=D({step_:function(r,t){t===void 0&&(t=0);var n=C(r,"x","step");return N.runKernelFunc(function(e){return e.step(n,t)},{$x:n},function(e){return{$x:function(){return hn(e)}}})}}),Eh=D({tan_:function(r){var t=C(r,"x","tan");return N.runKernelFunc(function(n,e){var o=n.tan(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return n.div(o.cos().square())}}})}}),Rh=D({tanh_:function(r){var t=C(r,"x","tanh");return N.runKernelFunc(function(n,e){var o=n.tanh(t);return e([o]),o},{x:t},function(n,e){var o=e[0];return{x:function(){return Q(1).sub(o.square()).mulStrict(n)}}},"Tanh",{},null,[!0])}});function Ri(r,t,n,e,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(n,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),e!=null&&(s=C(e,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Et(u,c,l,s,i,a)}function Ii(r,t,n,e,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(n,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),e!=null&&(s=C(e,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Et(u,c,l,s,i,a)}function ki(r,t,n,e,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(n,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),e!=null&&(s=C(e,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Et(u,c,l,s,i,a)}function Et(r,t,n,e,o,a){a==null&&(a=.001);var i,s,u,c=C(r,"x","batchNorm"),l=C(t,"mean","batchNorm"),h=C(n,"variance","batchNorm");o!=null&&(i=C(o,"scale","batchNorm")),e!=null&&(s=C(e,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return N.runKernelFunc(function(p,d){var m=p.batchNormalization(u,Mt(l),Mt(h),a,Mt(i),Mt(s));return d([c,l,h,i]),m},{x:c,mean:l,variance:h,scale:i,offset:s},function(p,d){var m=d,v=m[0],g=m[1],y=m[2],x=m[3],b=x??Q(1),w=In(g.shape,u.shape),R=[];if(g.rank===1){for(var A=0;A<u.shape.length-1;++A)R.push(u.shape[A]);R.push(1)}var k=v.sub(g),I=p.mul(b),S=Ei(y.add(Q(a))),F=S.mul(S).mul(S).mul(Q(-.5));return{x:function(){return g.rank===1?p.mul(ht(S.as4D(1,1,1,g.shape[0]),R)).mul(b).reshape(v.shape):p.mul(S).mul(b).reshape(v.shape)},mean:function(){var T=S.mul(Q(-1)).mul(I);return g.rank===1&&(T=T.sum(w)),T.reshape(g.shape)},variance:function(){var T=F.mul(k).mul(I);return g.rank===1&&(T=T.sum(w)),T.reshape(g.shape)},scale:function(){var T=k.mul(S),W=p.mul(T);return g.rank===1&&(W=W.sum(w)),W.reshape(g.shape)},offset:function(){var T=p;return g.rank===1&&(T=T.sum(w)),T.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Mt(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function ar(){Ua("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Ih=D({batchNormalization2d_:function(r,t,n,e,o,a){return e===void 0&&(e=.001),ar(),Ri(r,t,n,a,o,e)}}),kh=D({batchNormalization3d_:function(r,t,n,e,o,a){return e===void 0&&(e=.001),ar(),Ii(r,t,n,a,o,e)}}),Sh=D({batchNormalization4d_:function(r,t,n,e,o,a){return e===void 0&&(e=.001),ar(),ki(r,t,n,a,o,e)}}),Ah=D({batchNormalization_:function(r,t,n,e,o,a){return e===void 0&&(e=.001),ar(),Et(r,t,n,a,o,e)}}),Dh=D({batchNorm_:Et}),Nh=D({batchNorm2d_:Ri}),Th=D({batchNorm3d_:Ii}),Fh=D({batchNorm4d_:ki}),ir=D({logicalAnd_:function(r,t){var n=C(r,"a","logicalAnd","bool"),e=C(t,"b","logicalAnd","bool");return an(n.shape,e.shape),N.runKernelFunc(function(o){return o.logicalAnd(n,e)},{a:n,b:e},null,"LogicalAnd")}}),_h=D({logicalNot_:function(r){var t=C(r,"x","logicalNot","bool");return N.runKernelFunc(function(n){return n.logicalNot(t)},{$x:t})}}),Si=D({logicalOr_:function(r,t){var n=C(r,"a","logicalOr","bool"),e=C(t,"b","logicalOr","bool");return an(n.shape,e.shape),N.runKernelFunc(function(o){return o.logicalOr(n,e)},{$a:n,$b:e})}}),Oh=D({logicalXor_:function(r,t){var n=C(r,"a","logicalXor","bool"),e=C(t,"b","logicalXor","bool");return an(n.shape,e.shape),Si(r,t).logicalAnd(ir(r,t).logicalNot())}}),Ne=D({where_:function(r,t,n){var e=C(t,"a","where"),o=C(n,"b","where"),a=C(r,"condition","where","bool");return pn(e.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===e.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):pn(a.shape,o.shape,"Error in where: "),N.runKernelFunc(function(i,s){var u=i.select(a,e,o);return s([a]),u},{$condition:a,$a:e,$b:o},function(i,s){var u=s[0];return{$condition:function(){return hn(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Ai=function(r){return K(this,void 0,void 0,function(){var t,n,e;return X(this,function(o){switch(o.label){case 0:return[4,(t=C(r,"condition","whereAsync","bool")).data()];case 1:return n=o.sent(),e=mo(t.shape,n),r!==t&&t.dispose(),[2,e]}})})},rt=D({add_:function(r,t){var n,e=C(r,"a","add"),o=C(t,"b","add");n=yn(e,o),e=n[0],o=n[1];var a=an(e.shape,o.shape);return N.runKernelFunc(function(i){return i.add(e,o)},{a:e,b:o},function(i){return{a:function(){var s=i,u=In(e.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(e.shape)},b:function(){var s=i,u=In(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Mh=D({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return C(o,"tensors"+a,"addN")}),n=t[0];t.forEach(function(o){if(o.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Sn(o.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var e=t;return N.runKernelFunc(function(o){return o.addN(t)},e,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),Bh=D({addStrict_:function(r,t){var n=C(r,"a","addStrict"),e=C(t,"b","addStrict");return pn(n.shape,e.shape,"Error in addStrict: "),n.add(e)}}),Ph=D({atan2_:function(r,t){var n,e=C(r,"a","atan2"),o=C(t,"b","atan2");n=yn(e,o),e=n[0],o=n[1];var a=an(e.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.atan2(e,o);return s([e,o]),u},{$a:e,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=rt(u.square(),c.square()),h=i.mul(c.div(l)),f=In(u.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=rt(u.square(),c.square()),h=Ci(i.mul(u.div(l))),f=In(c.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}})}}),bo=D({div_:function(r,t){var n,e=C(r,"a","div"),o=C(t,"b","div");if(n=yn(e,o),e=n[0],o=n[1],e.dtype==="int32"&&o.dtype==="int32")return Di(e,o);var a=an(e.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.realDivide(e,o);return s([e,o]),u},{a:e,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=In(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=In(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"Div")}}),Lh=D({divNoNan_:function(r,t){var n,e=C(r,"a","div"),o=C(t,"b","div");e=(n=yn(e,o))[0],o=n[1];var a=bo(e,o),i=hn(a),s=o.equal(i);return Ne(s,i,a)}}),Wh=D({divStrict_:function(r,t){var n=C(r,"a","div"),e=C(t,"b","div");return pn(n.shape,e.shape,"Error in divideStrict: "),n.div(e)}}),Di=D({floorDiv_:function(r,t){var n,e=C(r,"a","floorDiv"),o=C(t,"b","floorDiv");n=yn(e,o),e=n[0],o=n[1];var a=an(e.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.floorDiv(e,o);return s([e,o]),u},{a:e,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=In(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=In(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"FloorDiv")}}),wo=D({maximum_:function(r,t){var n,e=C(r,"a","maximum"),o=C(t,"b","maximum");return n=yn(e,o),e=n[0],o=n[1],e.dtype==="bool"&&(e=e.toInt(),o=o.toInt()),an(e.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.maximum(e,o);return i([e,o]),s},{a:e,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Uh=D({maximumStrict_:function(r,t){var n=C(r,"a","maximumStrict"),e=C(t,"b","maximumStrict");return pn(n.shape,e.shape,"Error in maximumStrict: "),n.maximum(e)}}),Ni=D({minimum_:function(r,t){var n,e=C(r,"a","minimum"),o=C(t,"b","minimum");return n=yn(e,o),e=n[0],o=n[1],e.dtype==="bool"&&(e=e.toInt(),o=o.toInt()),an(e.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.minimum(e,o);return i([e,o]),s},{a:e,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Vh=D({minimumStrict_:function(r,t){var n=C(r,"a","minimumStrict"),e=C(t,"b","minimumStrict");return pn(n.shape,e.shape,"Error in minimumStrict: "),n.minimum(e)}}),zh=D({mod_:function(r,t){var n,e=C(r,"a","mod"),o=C(t,"b","mod");n=yn(e,o),e=n[0],o=n[1];var a=an(e.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.mod(e,o);return s([e,o]),u},{$a:e,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=In(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=In(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Gh=D({modStrict_:function(r,t){var n=C(r,"a","modStrict"),e=C(t,"b","modStrict");return pn(n.shape,e.shape,"Error in modStrict: "),n.mod(e)}}),Ke=D({mul_:function(r,t){var n,e=C(r,"a","mul"),o=C(t,"b","mul");n=yn(e,o),e=n[0],o=n[1];var a=an(e.shape,o.shape);return N.runKernelFunc(function(i,s){var u=i.multiply(e,o);return s([e,o]),u},{a:e,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=In(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=In(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Hh=D({mulStrict_:function(r,t){var n=C(r,"a","mul"),e=C(t,"b","mul");return pn(n.shape,e.shape,"Error in multiplyStrict: "),n.mul(e)}}),Zt=D({pow_:function(r,t){var n,e=C(r,"base","pow"),o=C(t,"exp","pow");n=yn(e,o),e=n[0],o=n[1];var a=an(e.shape,o.shape),i=[e,o];return N.runKernelFunc(function(s,u){var c=s.pow(e,o);return u([e,o,c]),c},{a:e,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),p=s.mul(f.mul(c.pow(f.sub(Q(1))))),d=In(c.shape,a);return d.length>0&&(p=p.sum(d)),p.reshape(c.shape)},b:function(){var f=c.greater(0),p=c.log().where(f,hn(c)),d=s.mul(h.mul(p)),m=In(l.shape,a);return m.length>0&&(d=d.sum(m)),d.reshape(l.shape)}}},"Pow",{},i,[!0])}}),qh=D({powStrict_:function(r,t){return pn(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),Kh=D({squaredDifferenceStrict_:function(r,t){var n=C(r,"a","squaredDifferenceStrict"),e=C(t,"b","squaredDifferenceStrict");return pn(n.shape,e.shape,"Error in squaredDifferenceStrict: "),n.squaredDifference(e)}}),Te=D({sub_:function(r,t){var n,e=C(r,"a","sub"),o=C(t,"b","sub");n=yn(e,o),e=n[0],o=n[1];var a=an(e.shape,o.shape);return N.runKernelFunc(function(i){return i.subtract(e,o)},{a:e,b:o},function(i){return{a:function(){var s=i,u=In(e.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(e.shape)},b:function(){var s=i,u=In(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Xh=D({subStrict_:function(r,t){var n=C(r,"a","subStrict"),e=C(t,"b","subStrict");return pn(n.shape,e.shape,"Error in subStrict: "),n.sub(e)}}),Ti=D({equal_:function(r,t){var n,e=C(r,"a","equal"),o=C(t,"b","equal");return n=yn(e,o),e=n[0],o=n[1],an(e.shape,o.shape),N.runKernelFunc(function(a){return a.equal(e,o)},{$a:e,$b:o})}}),jh=D({equalStrict_:function(r,t){var n=C(r,"a","equalStrict"),e=C(t,"b","equalStrict");return pn(n.shape,e.shape,"Error in equalStrict: "),n.equal(e)}}),Yh=D({greater_:function(r,t){var n,e=C(r,"a","greater"),o=C(t,"b","greater");return n=yn(e,o),e=n[0],o=n[1],an(e.shape,o.shape),N.runKernelFunc(function(a){return a.greater(e,o)},{a:e,b:o},null,"Greater")}}),Fi=D({greaterEqual_:function(r,t){var n,e=C(r,"a","greaterEqual"),o=C(t,"b","greaterEqual");return n=yn(e,o),e=n[0],o=n[1],an(e.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.greaterEqual(e,o);return i([e,o]),s},{a:e,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return hn(s)},b:function(){return hn(u)}}},"GreaterEqual")}}),$h=D({greaterEqualStrict_:function(r,t){var n=C(r,"a","greaterEqualStrict"),e=C(t,"b","greaterEqualStrict");return pn(n.shape,e.shape,"Error in greaterEqualStrict: "),n.greaterEqual(e)}}),Qh=D({greaterStrict_:function(r,t){var n=C(r,"a","greaterStrict"),e=C(t,"b","greaterStrict");return pn(n.shape,e.shape,"Error in greaterStrict: "),n.greater(e)}}),Jh=D({less_:function(r,t){var n,e=C(r,"a","less"),o=C(t,"b","less");return n=yn(e,o),e=n[0],o=n[1],an(e.shape,o.shape),N.runKernelFunc(function(a){return a.less(e,o)},{a:e,b:o},null,"Less")}}),Zh=D({lessEqual_:function(r,t){var n,e=C(r,"a","lessEqual"),o=C(t,"b","lessEqual");return n=yn(e,o),e=n[0],o=n[1],an(e.shape,o.shape),N.runKernelFunc(function(a,i){var s=a.lessEqual(e,o);return i([e,o]),s},{a:e,b:o},null,"LessEqual")}}),nf=D({lessEqualStrict_:function(r,t){var n=C(r,"a","lessEqualStrict"),e=C(t,"b","lessEqualStrict");return pn(n.shape,e.shape,"Error in lessEqualStrict: "),n.lessEqual(e)}}),ef=D({lessStrict_:function(r,t){var n=C(r,"a","lessStrict"),e=C(t,"b","lessStrict");return pn(n.shape,e.shape,"Error in lessStrict: "),n.less(e)}}),tf=D({notEqual_:function(r,t){var n,e=C(r,"a","notEqual"),o=C(t,"b","notEqual");return n=yn(e,o),e=n[0],o=n[1],an(e.shape,o.shape),N.runKernelFunc(function(a){return a.notEqual(e,o)},{a:e,b:o},null,"NotEqual")}}),rf=D({notEqualStrict_:function(r,t){var n=C(r,"a","notEqualStrict"),e=C(t,"b","notEqualStrict");return pn(n.shape,e.shape,"Error in notEqualStrict: "),n.notEqual(e)}});function ha(r,t){for(var n=[],e=r;e<t;++e)n.push(e);return n}function fa(r){for(var t=[],n=0;n<r.length;++n)for(var e=0;e<r[n].length;++e)t.push(r[n][e]);return t}var Co=D({gather_:function(r,t,n){n===void 0&&(n=0);var e=C(r,"x","gather"),o=C(t,"indices","gather","int32");n=kn(n,e.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],h=1,f=1,p=0;p<u;p++)l.push(i.shape[p]),h*=i.shape[p];for(p=0;p<s.rank;p++)l.push(s.shape[p]);for(p=u+1;p<i.rank;p++)l.push(i.shape[p]),f*=i.shape[p];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}}(e,o,n);return N.runKernelFunc(function(i,s){var u=i.gather(e,o.flatten(),n);return s([o]),u},{x:e,indices:o},function(i,s){var u=s[0];return{x:function(){var c=e.shape,l=u.size,h=c.slice(0,n),f=h.length,p=c.slice(n,c.length).slice(1),d=p.length,m=ha(0,f),v=ha(f+1,f+1+d),g=fa([h,[l],p]),y=i.reshape(g),x=u.reshape([l]),b=fa([[f],m,v]),w=y.transpose(b),R=_i(w,x,e.shape[n]),A=oo(b);return R=R.transpose(A)},indices:function(){return u}}},"Gather",{axis:n}).reshape(a.outputShape)}}),_i=D({unsortedSegmentSum_:function(r,t,n){var e=C(r,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return E(Cn(n),function(){return"numSegments must be of dtype int"}),N.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(e,o,n);return i([o]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=wo(c,hn(c)),h=Co(u,l),f=Fi(c,Q(0,"int32")),p=h.rank-f.rank,d=0;d<p;++d)f=ve(f,d+1);f=ir(f,at(h.shape,"bool"));var m=hn(h);return Ne(f,h,m)}(a,s)}}})}}),of=function(r,t,n){return K(this,void 0,void 0,function(){var e,o,a,i,s,u,c,l,h,f,p,d,m;return X(this,function(v){switch(v.label){case 0:for(e=C(r,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),a=n??0,i=o.rank,s=e.shape,E(i>0,function(){return"mask cannot be scalar"}),pn(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=e.reshape(l),f=o.reshape([-1]),[4,Ai(f)];case 1:return p=v.sent(),d=p.squeeze([1]),m=Co(h,d,a),r!==e&&e.dispose(),t!==o&&o.dispose(),d.dispose(),h.dispose(),f.dispose(),p.dispose(),[2,m]}})})};function Oi(r,t,n,e,o,a,i){a===void 0&&(a="NHWC"),E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(n.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank});var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];E(l===n.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+n.shape[2]+"."}),E(h===n.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+n.shape[3]+"."}),i!=null&&E(Cn(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=fo(a),p=_e(s,n.shape,e,1,o,i,!1,f),d=N.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,n,p);return v([n,u]),g},{dy4D:u,filter:n},function(m,v){var g=v[0],y=v[1];return{dy4D:function(){return Rt(m,g,e,o,a,1,i)},filter:function(){return Eo(m,y,g.shape,e,o,a,i)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function Dr(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),n=t[0],e=t[1],o=t[2];return n===1&&e===1&&o===1}function Mi(r,t,n,e,o){E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(n.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank}),E(u===n.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+n.shape[3]+"."}),E(c===n.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+n.shape[4]+"."});var l=Qt(a,n.shape,e,1,o),h=N.runKernelFunc(function(f){return f.conv3dDerInput(i,n,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var af=D({conv1d_:function(r,t,n,e,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=C(r,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Cn(e),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+e+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(Ln(n,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=Rt(f,h,[1,n],e,"NHWC",[1,a],i);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),Rt=D({conv2d_:function(r,t,n,e,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=C(r,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Cn(e),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+e+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(Ln(n,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"});var f=fo(o),p=_e(c.shape,u.shape,n,a,e,i,!1,f),d=[u,c],m=N.runKernelFunc(function(v,g){var y=v.conv2d(c,u,p);return g([u,c]),y},{x:c,filter:u},function(v,g){var y=g,x=y[0],b=y[1];return E(tt(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Bi(b.shape,v,x,n,e,o)},filter:function(){return Eo(b,v,x.shape,n,e,o)}}},"Conv2D",p,d);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),sf=D({conv3d_:function(r,t,n,e,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=C(r,"x","conv3d"),s=C(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(f,p){return Dr(f)||Dr(p)}(n,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Qt(u.shape,s.shape,n,a,e),h=N.runKernelFunc(function(f,p){var d=f.conv3d(u,s,l);return p([u,s]),d},{x:u,$filter:s},function(f,p){E(Dr(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var d=p[0],m=p[1];return{x:function(){return Mi(d.shape,f,m,n,e)},$filter:function(){return function(v,g,y,x,b){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var R=g;R.rank===4&&(R=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(R.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+R.shape+"."}),E(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),E(w.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."}),E(R.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+R.shape[4]+") must match output depth for filter ("+y[4]+")."});var A=Qt(w.shape,y,x,1,b);return N.runKernelFunc(function(k){return k.conv3dDerFilter(w,R,A)},{x5D:w,dy5D:R})}(d,f,m.shape,n,e)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Eo=D({conv2dDerFilter_:function(r,t,n,e,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(n.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===n[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+n[2]+"."}),E(l===n[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+n[3]+")."}),i!=null&&E(Cn(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=fo(a),f=_e(s.shape,n,e,1,o,i,!1,h);return N.runKernelFunc(function(p){return p.conv2dDerFilter(s,u,f)},{x4D:s,dy4D:u})}}),Bi=D({conv2dDerInput_:Oi}),Ro=D({depthwiseConv2d_:function(r,t,n,e,o,a,i){a===void 0&&(a=[1,1]);var s=C(r,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(Ln(n,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),i!=null&&E(Cn(e),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+e+"."});var h=_e(c.shape,u.shape,n,a,e,i,!0),f=[c,u],p=N.runKernelFunc(function(d,m){var v=d.depthwiseConv2D(c,u,h);return m([c,u]),v},{x:c,filter:u},function(d,m){E(tt(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return Pi(v.shape,d,g,h)},filter:function(){return Li(v,d,g.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Pi=D({depthwiseConv2dDerInput_:function(r,t,n,e){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=N.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,n,e)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Li=D({depthwiseConv2dDerFilter_:function(r,t,n,e){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),N.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,e)},{x4D:o,dy4D:a})}}),uf=D({separableConv2d_:function(r,t,n,e,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=C(r,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(n,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=u.shape[2],p=u.shape[3];E(c.shape[2]===f*p,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*p+", but got "+c.shape[2]+"."});var d=Ro(l,u,e,o,i,a),m=Rt(d,c,1,"valid",i);return h?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),cf=D({conv2dTranspose_:function(r,t,n,e,o,a){return Oi(n,C(r,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),e,o,"NHWC",a)}}),lf=D({conv3dTranspose_:function(r,t,n,e,o){return Mi(n,C(r,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),e,o)}}),Wi=D({matMul_:function(r,t,n,e){var o;n===void 0&&(n=!1),e===void 0&&(e=!1);var a=C(r,"a","matMul"),i=C(t,"b","matMul");o=yn(a,i),a=o[0],i=o[1];var s=n?a.shape[a.rank-2]:a.shape[a.rank-1],u=e?i.shape[i.rank-1]:i.shape[i.rank-2],c=n?a.shape[a.rank-1]:a.shape[a.rank-2],l=e?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),p=j(h),d=j(f);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(Sn(h,f),function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+n+" and transposeB="+e+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=n?a.as3D(p,s,c):a.as3D(p,c,s),g=e?i.as3D(d,l,u):i.as3D(d,u,l),y={transposeA:n,transposeB:e};return N.runKernelFunc(function(x,b){var w=x.batchMatMul(v,g,n,e);return b([v,g]),w},{a:v,b:g},function(x,b){var w=b,R=w[0],A=w[1];return n||e?!n&&e?{a:function(){return x.matMul(A,!1,!1)},b:function(){return x.matMul(R,!0,!1)}}:n&&!e?{a:function(){return A.matMul(x,!1,!0)},b:function(){return R.matMul(x,!1,!1)}}:{a:function(){return A.matMul(x,!0,!0)},b:function(){return x.matMul(R,!0,!0)}}:{a:function(){return x.matMul(A,!1,!0)},b:function(){return R.matMul(x,!0,!1)}}},"BatchMatMul",y).reshape(m)}}),hf=D({dot_:function(r,t){var n=C(r,"t1","dot"),e=C(t,"t2","dot");E(!(n.rank!==1&&n.rank!==2||e.rank!==1&&e.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+e.rank+"."});var o=n.rank===1?n.size:n.shape[1],a=e.rank===1?e.size:e.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),n.rank===1&&e.rank===1?n.as2D(1,-1).matMul(e.as2D(-1,1)).asScalar():n.rank===1&&e.rank===2?n.as2D(1,-1).matMul(e.as2D(e.shape[0],e.shape[1])).as1D():n.rank===2&&e.rank===1?n.matMul(e.as2D(-1,1)).as1D():n.matMul(e.as2D(e.shape[0],e.shape[1]))}}),ff=D({outerProduct_:function(r,t){var n=C(r,"v1","outerProduct"),e=C(t,"v2","outerProduct");return E(n.rank===1&&e.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+e.rank+"."}),n.as2D(-1,1).matMul(e.as2D(1,-1))}}),It=D({reverse_:function(r,t){var n=C(r,"x","reverse");if(n.rank===0)return n.clone();var e=kn(t,n.shape);return N.runKernelFunc(function(o){return o.reverse(n,e)},{$x:n},function(o){return{$x:function(){return o.reverse(e)}}}).reshapeAs(n)}}),pf=D({reverse1d_:function(r){var t=C(r,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),It(t,0)}}),df=D({reverse2d_:function(r,t){var n=C(r,"x","reverse");return E(n.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+n.rank+"."}),It(n,t)}}),vf=D({reverse3d_:function(r,t){var n=C(r,"x","reverse");return E(n.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+n.rank+"."}),It(n,t)}}),mf=D({reverse4d_:function(r,t){var n=C(r,"x","reverse");return E(n.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+n.rank+"."}),It(n,t)}});function Ui(r,t,n,e,o,a){var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),e==null&&(e=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(Ln(n,e),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+e+"'"}),a!=null&&E(Cn(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=mt(s.shape,t,n,e,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Sn(c.inShape,c.outShape))return i.clone();var l=[s],h=N.runKernelFunc(function(f,p){var d=f.maxPool(s,c);return p([s,d]),d},{x:s},function(f,p){var d=p[0],m=p[1];return{x:function(){return function(v,g,y,x,b,w,R,A){var k=C(v,"dy","maxPoolBackprop"),I=C(g,"input","maxPoolBackprop"),S=C(y,"output","maxPoolBackprop");E(I.rank===k.rank,function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+k.rank+")"}),w==null&&(w=[1,1]),E(Ln(b,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"}),E(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),E(I.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."}),A!=null&&E(Cn(R),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+A+" but got pad "+R+"."});var F=mt(I.shape,x,b,w,R,A);return N.runKernelFunc(function(T){return T.maxPoolBackprop(k,I,S,F)},{$dy:k,$input:I})}(f,d,m,t,n,e,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function Vi(r,t,n,e,o,a){var i=C(r,"x","avgPool","float32");e==null&&(e=[1,1]),E(Ln(n,e),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+e+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Cn(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=mt(s.shape,t,n,e,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Sn(c.inShape,c.outShape))return i.clone();var l=N.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(f,p,d,m,v,g){var y=C(f,"dy","avgPoolBackprop"),x=C(p,"input","avgPoolBackprop");E(x.rank===y.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+y.rank+")"}),v==null&&(v=[1,1]),E(Ln(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var b=x,w=y,R=!1;x.rank===3&&(R=!0,b=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(b.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+b.rank+"."});var A=mt(b.shape,d,m,v,g),k=N.runKernelFunc(function(I){return I.avgPoolBackprop(w,b,A)},{dy4D:w,input4D:b});return R?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(h,s,t,n,e,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var gf=D({maxPool_:function(r,t,n,e,o){return Ui(r,t,n,1,e,o)}}),yf=D({avgPool_:function(r,t,n,e,o){return Vi(r,t,n,1,e,o)}}),xf=D({pool_:function(r,t,n,e,o,a){o==null&&(o=[1,1]),a==null&&(a=1),e===0&&(e="valid");var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(Ln(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=mt(s.shape,t,a,o,e),h=[l.dilationHeight,l.dilationWidth];c=e==="same"?function(b,w){var R=b.map(function(I,S){return I+(I-1)*(w[S]-1)}).map(function(I){return I-1}),A=R.map(function(I){return Math.floor(I/2)}),k=R.map(function(I,S){return I-A[S]});return R.map(function(I,S){return[A[S],k[S]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,p=function(b,w,R){var A=R.map(function(L){return L[0]}),k=R.map(function(L){return L[1]}),I=b.concat(A,k),S=w.map(function(L,B){return(L-I[B]%L)%L}),F=k.map(function(L,B){return L+S[B]}),T=w.map(function(L,B){return[A[B],F[B]]}),W=w.map(function(L,B){return[0,S[B]]});return[T,W]}([l.inHeight,l.inWidth],h,c),d=p[0],m=p[1],v=f?e:"valid",g=f?s:Xa(s,h,d),y=(n==="avg"?function(){return Vi(g,t,a,1,v)}:function(){return Ui(g,t,a,1,v)})(),x=f?y:Ha(y,h,m);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),bf=D({maxPool3d_:function(r,t,n,e,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(Ln(n,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),o!=null&&E(Cn(e),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+e+"."});var l=$t(u.shape,t,n,i,e,o,a),h=N.runKernelFunc(function(f,p){var d=f.maxPool3d(u,l);return p([u,d]),d},{x:u},function(f,p){var d=p[0],m=p[1];return{x:function(){return function(v,g,y,x,b,w,R,A){var k=C(v,"dy","maxPool3dBackprop"),I=C(g,"input","maxPool3dBackprop"),S=C(y,"output","maxPool3dBackprop"),F=k,T=I,W=S,L=!1;I.rank===4&&(L=!0,F=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),T=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),W=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3])),E(F.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."}),E(T.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+T.rank+"."}),E(W.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+W.rank+"."}),w==null&&(w=[1,1,1]),E(Ln(b,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+b+" and dilations '"+w+"'"}),A!=null&&E(Cn(R),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+A+" but got pad "+R+"."});var B=$t(T.shape,x,b,w,R,A),z=N.runKernelFunc(function(V){return V.maxPool3dBackprop(F,T,W,B)},{dy5D:F,input5D:T});return L?z.as4D(z.shape[1],z.shape[2],z.shape[3],z.shape[4]):z}(f,d,m,t,n,i,e,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),wf=D({avgPool3d_:function(r,t,n,e,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(Ln(n,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),o!=null&&E(Cn(e),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+e+"."});var l=$t(u.shape,t,n,i,e,o,a),h=N.runKernelFunc(function(f){return f.avgPool3d(u,l)},{x:u},function(f){return{x:function(){return function(p,d,m,v,g,y,x){var b=C(p,"dy","avgPool3dBackprop"),w=C(d,"input","avgPool3dBackprop"),R=b,A=w,k=!1;w.rank===4&&(k=!0,R=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3]),A=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(R.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+R.rank+"."}),E(A.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),g==null&&(g=[1,1,1]),E(Ln(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),x!=null&&E(Cn(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+y+"."});var I=$t(A.shape,m,v,g,y,x),S=N.runKernelFunc(function(F){return F.avgPool3dBackprop(R,A,I)},{dy5D:R,input5D:A});return k?S.as4D(S.shape[1],S.shape[2],S.shape[3],S.shape[4]):S}(f,u,t,n,i,e,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),xe=D({slice_:function(r,t,n){var e,o,a=C(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(e=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=n==null?new Array(a.rank).fill(-1):typeof n=="number"?[n].concat(new Array(a.rank-1).fill(-1)):n.length<a.rank?n.concat(new Array(a.rank-n.length).fill(-1)):n).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-e[c])}),Vu(a,e,o);var i=a.shape,s={begin:e,size:o};return N.runKernelFunc(function(u){return u.slice(a,e,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([e[l],i[l]-e[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),Cf=D({slice1d_:function(r,t,n){var e=C(r,"x","slice1d");return E(e.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+e.rank+" tensor"}),xe(e,[t],[n])}}),Ef=D({slice2d_:function(r,t,n){var e=C(r,"x","slice2d");return E(e.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+e.rank+" tensor"}),xe(e,t,n)}}),Rf=D({slice3d_:function(r,t,n){var e=C(r,"x","slice3d");return E(e.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+e.rank+" tensor"}),xe(e,t,n)}}),If=D({slice4d_:function(r,t,n){var e=C(r,"x","slice4d");return E(e.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+e.rank+" tensor"}),xe(e,t,n)}});function zi(r,t,n,e,o){return t.rank<n.rank&&(t=t.reshape(Pn(t.shape,e))),r.rank<n.rank&&(r=r.reshape(Pn(r.shape,e))),{x:function(){var a=r.mul(n.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var kf=D({all_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","all","bool"),o=kn(t,e.shape),a=o,i=oe(a,e.rank);i!=null&&(e=e.transpose(i),a=ae(a.length,e.rank));var s=N.runKernelFunc(function(c){return c.all(e,a)},{$x:e});if(n){var u=Pn(s.shape,o);return s.reshape(u)}return s}}),Sf=D({any_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","any","bool"),o=kn(t,e.shape),a=o,i=oe(a,e.rank);i!=null&&(e=e.transpose(i),a=ae(a.length,e.rank));var s=N.runKernelFunc(function(c){return c.any(e,a)},{$x:e});if(n){var u=Pn(s.shape,o);return s.reshape(u)}return s}}),Af=D({argMax_:function(r,t){t===void 0&&(t=0);var n=C(r,"x","argMax");t==null&&(t=0);var e=kn(t,n.shape),o=oe(e,n.rank);o!=null&&(n=n.transpose(o),e=ae(e.length,n.rank));var a={axis:e[0]},i=[n];return N.runKernelFunc(function(s,u){var c=s.argMax(n,e[0]);return u([n]),c},{x:n},function(s,u){var c=u[0];return{x:function(){return hn(c)}}},"ArgMax",a,i)}}),Df=D({argMin_:function(r,t){t===void 0&&(t=0);var n=C(r,"x","argMin");t==null&&(t=0);var e=kn(t,n.shape),o=oe(e,n.rank);return o!=null&&(n=n.transpose(o),e=ae(e.length,n.rank)),N.runKernelFunc(function(a,i){var s=a.argMin(n,e[0]);return i([n]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return hn(s)}}})}}),Nf=D({logSumExp_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","logSumExp"),o=kn(t,e.shape),a=e.max(o,!0),i=e.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(n){var u=Pn(s.shape,o);return s.reshape(u)}return s}}),Tf=D({max_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","max"),o=e,a=kn(t,e.shape),i=a,s=oe(i,e.rank);s!=null&&(e=e.transpose(s),i=ae(i.length,e.rank));var u=[e],c=N.runKernelFunc(function(h,f){var p=h.max(e,i);return f([o,p]),p},{x:e},function(h,f){return zi(h,f[1],f[0],a,s)},"Max",{axes:i},u,[!0]);if(n){var l=Pn(c.shape,a);c=c.reshape(l)}return c}}),Ff=D({mean_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","mean"),o=kn(t,e.shape),a=j(Nn(e.shape,o)[1]);return or(function(i){var s=Q(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,n),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(at(i.shape,"float32")).div(a)}}})(e)}}),_f=D({min_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","min"),o=e,a=kn(t,e.shape),i=a,s=oe(i,e.rank);s!=null&&(e=e.transpose(s),i=ae(i.length,e.rank));var u=[e],c=N.runKernelFunc(function(h,f){var p=h.min(e,i);return f([o,p]),p},{x:e},function(h,f){return zi(h,f[1],f[0],a,s)},"Min",{axes:i},u,[!0]);if(n){var l=Pn(c.shape,a);c=c.reshape(l)}return c}}),Of=D({moments_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=kn(t,(r=C(r,"x","moments")).shape),o=r.mean(e,n),a=o.shape;n||(a=Pn(o.shape,e));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(e,n)}}}),Gi=D({sum_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","sum");e.dtype==="bool"&&(e=e.toInt());var o=kn(t,e.shape);return or(function(a){var i=oe(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=ae(s.length,a.rank));var c=function(p){var d=a.shape.slice();return o.forEach(function(m){d[m]=1}),p.reshape(d).mul(at(a.shape,"float32"))},l={axes:s},h=N.runKernelFunc(function(p){return p.sum(u,s)},{x:u},function(p){return{x:function(){return c(p)}}},"Sum",l);if(n){var f=Pn(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}})(e)}}),Mf=D({prod_:function(r,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var e=C(r,"x","prod");e.dtype==="bool"&&(e=e.toInt());var o=kn(t,e.shape),a=oe(o,e.rank),i=o,s=e;a!=null&&(s=e.transpose(a),i=ae(i.length,e.rank));var u=N.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(n){var c=Pn(u.shape,o);u=u.reshape(c)}return u}}),Hi=D({elu_:function(r){var t=C(r,"x","elu");return N.runKernelFunc(function(n,e){var o=n.elu(t);return e([o]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){return N.runKernelFunc(function(a){return a.eluDer(n,o)},{dy:n,y:o})}}})}}),Bf=D({leakyRelu_:function(r,t){t===void 0&&(t=.2);var n=C(r,"x","leakyRelu");return wo(Q(t).mul(n),n)}}),qi=D({prelu_:function(r,t){var n=C(r,"x","prelu"),e=C(t,"alpha","prelu");return N.runKernelFunc(function(o,a){var i=o.prelu(n,e);return a([n,e]),i},{x:n,alpha:e},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return Ne(u,o,o.mul(s))},alpha:function(){var c=Ne(u,hn(o),o.mul(i)),l=In(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Ki=D({relu_:function(r){var t=C(r,"x","relu");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(n,e){var o=n.relu(t);return e([t]),o},{x:t},function(n,e){var o=e[0];return{x:function(){return n.mulStrict(o.step().toFloat())}}},"Relu")}}),Xi=D({relu6_:function(r){var t=C(r,"x","relu6");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(n,e){var o=n.relu6(t);return e([t]),o},{x:t},function(n,e){var o=e[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return n.mulStrict(a.toFloat())}}},"Relu6")}}),Pf=D({selu_:function(r){var t=C(r,"x","selu");return N.runKernelFunc(function(n,e){var o=n.selu(t);return e([t]),o},{$x:t},function(n,e){var o=e[0];return{$x:function(){var a=o.greater(Q(0)),i=Q(yo),s=Q(xo),u=n.mul(s),c=n.mul(i).mul(o.toFloat().exp());return Ne(a,u,c)}}})}}),Lf=D({transpose_:function(r,t){var n=C(r,"x","transpose");if(t==null&&(t=n.shape.map(function(o,a){return a}).reverse()),E(n.rank===t.length,function(){return"Error in transpose: rank of input "+n.rank+" must match length of perm "+t+"."}),t.forEach(function(o){E(o>=0&&o<n.rank,function(){return"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+t})}),n.rank<=1)return n.clone();var e={perm:t};return N.runKernelFunc(function(o){return o.transpose(n,t)},{x:n},function(o){var a=oo(t);return{x:function(){return o.transpose(a)}}},"Transpose",e)}}),Wf=D({localResponseNormalization_:function(r,t,n,e,o){t===void 0&&(t=5),n===void 0&&(n=1),e===void 0&&(e=1),o===void 0&&(o=.5);var a=C(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Cn(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=N.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,t,n,e,o);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],f=l[1];return{x4D:function(){return N.runKernelFunc(function(p){return p.LRNGrad(c,h,f,t,n,e,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),ji=D({norm_:function(r,t,n,e){t===void 0&&(t="euclidean"),n===void 0&&(n=null),e===void 0&&(e=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(Q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=C(r,"x","norm"),t,n),a=o.shape;if(e){var i=kn(n,r.shape);a=Pn(o.shape,i)}return o.reshape(a)}}),Uf=D({basicLSTMCell_:function(r,t,n,e,o,a){var i=C(r,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(n,"lstmBias","basicLSTMCell"),c=C(e,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),h=C(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),p=f.shape[0],d=f.shape[1]/4,m=[p,d],v=f.slice([0,0],m),g=f.slice([0,d],m),y=f.slice([0,2*d],m),x=f.slice([0,3*d],m),b=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(y).sigmoid())),w=b.tanh().mulStrict(x.sigmoid());return[b,w]}}),Vf=D({multiRNNCell_:function(r,t,n,e){for(var o=C(t,"data","multiRNNCell"),a=Ht(n,"c","multiRNNCell"),i=Ht(e,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),zf=D({movingAverage_:function(r,t,n,e,o){o===void 0&&(o=!0);var a=C(r,"v","movingAverage"),i=C(t,"x","movingAverage"),s=C(n,"decay","movingAverage");As(a,i),E(Sn(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=Q(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(e!=null,function(){return"When using zeroDebias: true, step is required."});var h=C(e,"step","movingAverage");l=l.div(u.sub(Zt(s,h)))}return a.add(l)}}),Gf=D({stridedSlice_:function(r,t,n,e,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),e==null&&(e=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=C(r,"x","stridedSlice"),l=qo(s),h=c.shape.slice();l.forEach(function(v){t[v]=0,n[v]=1,h.splice(v,0,1)}),c=c.reshape(h);for(var f=0;f<c.rank;f++)t[f]=zu(o,t,e,c.shape,f),n[f]=Gu(a,n,e,c.shape,f),e[f]=e[f]||1;var p=qo(u);p.forEach(function(v){n[v]=t[v]+1,e[v]=1});var d=lo(t,n,e),m=d.filter(function(v,g){return p.indexOf(g)===-1});return e.every(function(v){return v===1})?xe(c,t,d).reshape(m):N.runKernelFunc(function(v){return v.stridedSlice(c,t,n,e)},{$x:c}).reshape(m)}}),Hf=D({topk_:function(r,t,n){t===void 0&&(t=1),n===void 0&&(n=!0);var e=C(r,"x","topk");if(e.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=e.shape[e.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=N.runKernelFunc(function(i){return i.topk(e,t,n)},{$x:e});return{values:a[0],indices:a[1]}}}),qf=D({scatterND_:function(r,t,n){var e=C(r,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return Uu(o,e,n),N.runKernelFunc(function(a){return a.scatterND(e,o,n)},{indices:e,updates:o},null,"ScatterNd",{shape:n})}}),Io=D({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],n=r.size/t,e=r.as2D(n,t);return N.runKernelFunc(function(o){return o.fft(e)},{input:r}).reshape(r.shape)}}),nr=D({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],n=r.size/t,e=r.as2D(n,t);return N.runKernelFunc(function(o){return o.ifft(e)},{input:r}).reshape(r.shape)}}),ko=D({rfft_:function(r,t){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var n,e=r.shape[r.shape.length-1],o=r.size/e;if(t!=null&&t<e){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,n=r.slice(a,i),e=t}else if(t!=null&&t>e){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-e,n=r.concat(wn(s),r.shape.length-1),e=t}else n=r;var u=n.zerosLike(),c=An(n,u).as2D(o,e),l=Io(c),h=Math.floor(e/2)+1,f=Hn(l),p=Zn(l),d=f.split([h,e-h],f.shape.length-1),m=p.split([h,e-h],p.shape.length-1),v=n.shape.slice();return v[n.shape.length-1]=h,An(d[0],m[0]).reshape(v)}}),Yi=D({irfft_:function(r){var t=r.shape[r.shape.length-1],n=r.size/t;if(t<=2){var e=r.as2D(n,t),o=nr(e);return Hn(o)}var a=[n,2*(t-1)],i=Hn(r).as2D(n,t),s=Zn(r).as2D(n,t),u=i.slice([0,1],[n,t-2]).reverse(1),c=s.slice([0,1],[n,t-2]).reverse(1).mul(Q(-1)),l=i.concat(u,1),h=s.concat(c,1);return e=An(l,h).as2D(a[0],a[1]),o=nr(e),Hn(o)}}),Kf=Object.freeze({fft:Io,ifft:nr,rfft:ko,irfft:Yi}),Xf=D({sparseToDense_:function(r,t,n,e){e===void 0&&(e=0);var o=C(r,"sparseIndices","sparseToDense","int32"),a=C(t,"sparseValues","sparseToDense"),i=C(e,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,n,i),N.runKernelFunc(function(s){return s.sparseToDense(o,a,n,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),jf=D({gatherND_:function(r,t){var n=C(t,"indices","gatherND","int32"),e=C(r,"x","gatherND");return N.runKernelFunc(function(o){return o.gatherND(e,n)},{x:e,indices:n},null,"GatherNd")}}),Yf=D({diag_:function(r){var t=C(r,"x","diag").flatten(),n=r.shape.concat(r.shape);return N.runKernelFunc(function(e){return e.diag(t)},{$x:t}).reshape(n)}}),$f=D({dropout_:function(r,t,n,e){var o=C(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof On?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Sn(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,n),i=1-t,s=Ka(a,0,1,"float32",e).add(i).floor().div(i);return o.mul(s)}});function $i(r,t,n){for(var e=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+e-1);o[a]=t-n*Math.cos(i)}return et(o,"float32")}var So=D({hannWindow_:function(r){return $i(r,.5,.5)}}),Qi=D({hammingWindow_:function(r){return $i(r,.54,.46)}}),Ao=D({frame_:function(r,t,n,e,o){e===void 0&&(e=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(xe(r,a,t)),a+=n;if(e)for(;a<r.size;){var s=a+t-r.size,u=te([xe(r,a,t-s),ao([s],o)]);i.push(u),a+=n}return i.length===0?je([],[0,t]):te(i).as2D(i.length,t)}}),Ji=D({stft_:function(r,t,n,e,o){var a;o===void 0&&(o=So),e==null&&(a=t,e=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Ao(r,t,n),s=Ke(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(ko(s.slice([c,0],[1,t]),e));return te(u)}}),Qf=Object.freeze({hannWindow:So,hammingWindow:Qi,frame:Ao,stft:Ji}),_n,Jf=function(r,t,n){return n===void 0&&(n=1),K(this,void 0,void 0,function(){var e,o,a,i,s,u,c,l,h,f,p,d,m,v;return X(this,function(g){switch(g.label){case 0:return e=C(r,"predictions","inTopK"),o=C(t,"targets","inTopK"),E(e.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+e.rank}),E(e.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+e.rank+" and targets rank "+o.rank}),pn(e.shape.slice(0,e.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=e.shape[e.shape.length-1],E(n>0&&n<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+n}),[4,e.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],h=pt("bool",c=u[0]),f=0;f<c;f++){for(p=f*l,d=i.subarray(p,p+l),m=[],v=0;v<d.length;v++)m.push({value:d[v],index:v});for(m.sort(function(y,x){return x.value-y.value}),h[f]=0,v=0;v<n;v++)if(m[v].index===s[f]){h[f]=1;break}}return r!==e&&e.dispose(),t!==o&&o.dispose(),[2,Tn(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(_n||(_n={}));var Zf=D({absoluteDifference_:function(r,t,n,e){e===void 0&&(e=_n.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","absoluteDifference"),a=C(t,"predictions","absoluteDifference"),i=null;n!=null&&(i=C(n,"weights","absoluteDifference")),pn(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return pe(s,i,e)}}),pe=D({computeWeightedLoss_:function(r,t,n){n===void 0&&(n=_n.SUM_BY_NONZERO_WEIGHTS);var e=C(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var a=o==null?e:e.mul(o);if(n===_n.NONE)return a;if(n===_n.SUM)return a.sum();if(n===_n.MEAN){if(o==null)return a.mean();var i=e.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(Q(i)):s}if(n===_n.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(Q(e.size));var u=o.mul(at(e.shape)).notEqual(Q(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+n)}}),np=D({cosineDistance_:function(r,t,n,e,o){o===void 0&&(o=_n.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","cosineDistance"),i=C(t,"predictions","cosineDistance"),s=null;e!=null&&(s=C(e,"weights","cosineDistance")),pn(a.shape,i.shape,"Error in cosineDistance: ");var u=Q(1).sub(a.mul(i).sum(n,!0));return pe(u,s,o)}}),ep=D({hingeLoss_:function(r,t,n,e){e===void 0&&(e=_n.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","hingeLoss"),a=C(t,"predictions","hingeLoss"),i=null;n!=null&&(i=C(n,"weights","hingeLoss")),pn(o.shape,a.shape,"Error in hingeLoss: ");var s=Q(1);o=Q(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return pe(u,i,e)}}),tp=D({huberLoss_:function(r,t,n,e,o){e===void 0&&(e=1),o===void 0&&(o=_n.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","huberLoss"),i=C(t,"predictions","huberLoss"),s=null;n!=null&&(s=C(n,"weights","huberLoss")),pn(a.shape,i.shape,"Error in huberLoss: ");var u=Q(e),c=i.sub(a).abs(),l=Ni(c,u),h=c.sub(l),f=Q(.5).mul(l.square()).add(u.mul(h));return pe(f,s,o)}}),rp=D({logLoss_:function(r,t,n,e,o){e===void 0&&(e=1e-7),o===void 0&&(o=_n.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","logLoss"),i=C(t,"predictions","logLoss"),s=null;n!=null&&(s=C(n,"weights","logLoss")),pn(a.shape,i.shape,"Error in logLoss: ");var u=Q(1),c=Q(e),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return pe(l,s,o)}}),op=D({meanSquaredError_:function(r,t,n,e){e===void 0&&(e=_n.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","meanSquaredError"),a=C(t,"predictions","meanSquaredError"),i=null;n!=null&&(i=C(n,"weights","meanSquaredError")),pn(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return pe(s,i,e)}}),ap=D({sigmoidCrossEntropy_:function(r,t,n,e,o){e===void 0&&(e=0),o===void 0&&(o=_n.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"multiClassLabels","sigmoidCrossEntropy"),i=C(t,"logits","sigmoidCrossEntropy"),s=null;if(n!=null&&(s=C(n,"weights","sigmoidCrossEntropy")),pn(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),e>0){var u=Q(e),c=Q(1),l=Q(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(f,p){var d=C(f,"labels","sigmoidCrossEntropyWithLogits"),m=C(p,"logits","sigmoidCrossEntropyWithLogits");pn(d.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(d),y=m.abs().neg().exp().log1p();return v.sub(g).add(y)}(a,i);return pe(h,s,o)}}),ip=D({softmaxCrossEntropy_:function(r,t,n,e,o){e===void 0&&(e=0),o===void 0&&(o=_n.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"onehotLabels","softmaxCrossEntropy"),i=C(t,"logits","softmaxCrossEntropy"),s=null;if(n!=null&&(s=C(n,"weights","softmaxCrossEntropy")),pn(a.shape,i.shape,"Error in softmaxCrossEntropy: "),e>0){var u=Q(e),c=Q(1),l=Q(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(f,p,d){if(d===void 0&&(d=-1),d===-1&&(d=p.rank-1),d!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+d);return or(function(m,v,g){var y=v.logSumExp([d],!0),x=v.toFloat().sub(y);return g([m,x]),{value:x.mul(m).neg().sum([d]),gradFunc:function(b,w){var R=w[0],A=w[1],k=Pn(b.shape,[d]);return[b.reshape(k).mul(R.toFloat().sub(A.exp())),b.reshape(k).mul(A.exp().sub(R.toFloat()))]}}})(f,p)}(a,i);return pe(h,s,o)}}),sp=Object.freeze({get Reduction(){return _n},absoluteDifference:Zf,computeWeightedLoss:pe,cosineDistance:np,hingeLoss:ep,huberLoss:tp,logLoss:rp,meanSquaredError:op,sigmoidCrossEntropy:ap,softmaxCrossEntropy:ip});function pa(r,t){return t===void 0&&(t=!1),N.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var n=r.shape[0],e=r.shape[1],o=qa(n),a=r.clone(),i=je([[1]],[1,1]),s=i.clone(),u=n>=e?e:n,c=function(h){var f,p=a,d=s,m=o;f=N.tidy(function(){var v=a.slice([h,h],[n-h,1]),g=v.norm(),y=a.slice([h,h],[1,1]),x=je([[-1]]).where(y.greater(0),je([[1]])),b=y.sub(x.mul(g)),w=v.div(b);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var R=x.matMul(b).div(g).neg(),A=a.slice([h,0],[n-h,e]),k=R.mul(s);if(h===0)a=A.sub(k.matMul(s.transpose().matMul(A)));else{var I=A.sub(k.matMul(s.transpose().matMul(A)));a=a.slice([0,0],[h,e]).concat(I,0)}var S=o.slice([0,h],[n,o.shape[1]-h]);if(h===0)o=S.sub(S.matMul(s).matMul(k.transpose()));else{var F=S.sub(S.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[n,h]).concat(F,1)}return[s,a,o]}),s=f[0],a=f[1],o=f[2],Bn([p,d,m])},l=0;l<u;++l)c(l);return!t&&n>e&&(o=o.slice([0,0],[n,e]),a=a.slice([0,0],[e,e])),[o,a]})}var up=D({bandPart_:function(r,t,n){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(n%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+n+".");var e=C(r,"a","bandPart");if(e.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+e.rank+".");var o=e.shape,a=e.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(n<=s))throw new Error("bandPart(): numUpper ("+n+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),n<0&&(n=s);var u=qt(0,i,1,"int32").reshape([-1,1]),c=qt(0,s,1,"int32"),l=Te(u,c),h=ir(l.lessEqual(Q(+t,"int32")),l.greaterEqual(Q(-n,"int32"))),f=wn([i,s],e.dtype);return De(co(e.reshape([-1,i,s])).map(function(p){return Ne(h,p,f)})).reshape(o)}}),cp=D({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var n=r[0].shape[0],e=function(u){E(r[u].shape[0]===n,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+n+")"})},o=1;o<r.length;++o)e(o)}else t=!0,r=io(r,r.shape[0],0).map(function(u){return ja(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(N.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=Gi(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div(ji(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?De(a,0):a}}),lp=D({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return pa(r,t);var n=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),e=co(r.reshape([n,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return e.forEach(function(i){var s=pa(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[De(o,0).reshape(r.shape),De(a,0).reshape(r.shape)]}}),hp=Object.freeze({bandPart:up,gramSchmidt:cp,qr:lp});function sr(r,t,n,e,o,a){e==null&&(e=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return n=Math.min(n,i),E(0<=e&&e<=1,function(){return"iouThreshold must be in [0, 1], but was '"+e+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:n,iouThreshold:e,scoreThreshold:o,softNmsSigma:a}}var fp=D({resizeBilinear_:function(r,t,n){n===void 0&&(n=!1);var e=C(r,"images","resizeBilinear");E(e.rank===3||e.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+e.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=e,a=!1;e.rank===3&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,n)},{x:o},function(c,l){return{x:function(){return N.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],n)},{})}}},"ResizeBilinear",{alignCorners:n,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),pp=D({resizeNearestNeighbor_:function(r,t,n){n===void 0&&(n=!1);var e=C(r,"images","resizeNearestNeighbor");E(e.rank===3||e.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+e.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(e.dtype==="float32"||e.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=e,a=!1;e.rank===3&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,n)},{batchImages:o},function(c,l){return{batchImages:function(){return N.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],n)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),dp=D({nonMaxSuppression_:function(r,t,n,e,o){e===void 0&&(e=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=C(r,"boxes","nonMaxSuppression"),i=C(t,"scores","nonMaxSuppression"),s=sr(a,i,n,e,o);n=s.maxOutputSize,e=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:n,iouThreshold:e,scoreThreshold:o};return N.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,n,e,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),vp=function(r,t,n,e,o){return e===void 0&&(e=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),K(this,void 0,void 0,function(){var a,i,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(t,"scores","nonMaxSuppressionAsync"),s=sr(a,i,n,e,o),n=s.maxOutputSize,e=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=po(c,l,n,e,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,h]}})})},mp=D({nonMaxSuppressionWithScore_:function(r,t,n,e,o,a){e===void 0&&(e=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=C(r,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=sr(i,s,n,e,o,a),c={maxOutputSize:n=u.maxOutputSize,iouThreshold:e=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=N.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),gp=function(r,t,n,e,o,a){return e===void 0&&(e=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),K(this,void 0,void 0,function(){var i,s,u,c,l,h,f;return X(this,function(p){switch(p.label){case 0:return i=C(r,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=sr(i,s,n,e,o,a),n=u.maxOutputSize,e=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=p.sent(),l=c[0],h=c[1],f=vo(l,h,n,e,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,f]}})})},yp=D({cropAndResize_:function(r,t,n,e,o,a){var i=C(r,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(n,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(e.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+e.length+"."}),E(e[0]>=1&&e[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+e}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),N.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,e,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:e})}}),xp=Object.freeze({resizeBilinear:fp,resizeNearestNeighbor:pp,nonMaxSuppression:dp,nonMaxSuppressionAsync:vp,nonMaxSuppressionWithScore:mp,nonMaxSuppressionWithScoreAsync:gp,cropAndResize:yp}),Do=function(r,t){return!(r>0)||t==="linear"},No=function(r,t,n){if(n==null||n==="linear")return r;if(n==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+n+" has not been implemented yet.")},To=function(r,t){var n=t,e=In(r.shape,t.shape);return e.length>0&&(n=n.sum(e)),n.reshape(r.shape)},Fo=function(r,t,n){if(t==="linear")return r;if(t==="relu")return Ki(r);if(t==="elu")return Hi(r);if(t==="relu6")return Xi(r);if(t==="prelu")return qi(r,n);throw new Error("Unknown fused activation "+t+".")},bp=D({fusedMatMul_:function(r){var t,n=r.a,e=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(Do(N.state.gradientDepth,l)===!1){var f=Wi(n,e,a,s);return u!=null&&(f=rt(f,u)),Fo(f,l,h)}var p=C(n,"a","fused matMul"),d=C(e,"b","fused matMul");t=yn(p,d),p=t[0],d=t[1];var m=a?p.shape[p.rank-2]:p.shape[p.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],g=a?p.shape[p.rank-1]:p.shape[p.rank-2],y=s?d.shape[d.rank-2]:d.shape[d.rank-1],x=p.shape.slice(0,-2),b=d.shape.slice(0,-2),w=j(x),R=j(b);E(p.rank>=2&&d.rank>=2&&p.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."}),E(Sn(x,b),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+b+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."}),E(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var A,k,I=p.shape.slice(0,-2).concat([g,y]),S=a?p.as3D(w,m,g):p.as3D(w,g,m),F=s?d.as3D(R,y,v):d.as3D(R,v,y);u!=null&&an(I,(A=yn(A=C(u,"bias","fused matMul"),p)[0]).shape),h!=null&&(k=C(h,"prelu weights","fused matMul"));var T={a:S,b:F};u!=null&&(T.bias=A),h!=null&&(T.preluActivationWeights=k);var W=[S,F];return N.runKernelFunc(function(L,B){var z=L.fusedBatchMatMul({a:S,b:F,transposeA:a,transposeB:s,bias:A,activation:l,preluActivationWeights:k});return B([S,F,z]),z},T,function(L,B){var z=B[0],V=B[1],P=B[2],G=No(L,P,l),H={};return u!=null&&(H={bias:function(){return To(A,G)}}),Object.assign(a||s?!a&&s?{a:function(){return G.matMul(V,!1,!1)},b:function(){return G.matMul(z,!0,!1)}}:a&&!s?{a:function(){return V.matMul(G,!1,!0)},b:function(){return z.matMul(G,!1,!1)}}:{a:function(){return V.matMul(G,!0,!0)},b:function(){return G.matMul(z,!0,!0)}}:{a:function(){return G.matMul(V,!1,!0)},b:function(){return z.matMul(G,!0,!1)}},H)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},W,[!0]).reshape(I)}}),wp=D({fusedConv2d_:function(r){var t=r.x,n=r.filter,e=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(f=f||"linear",Do(N.state.gradientDepth,f)===!1){var d=Rt(t,n,e,o,i,u,c);return l!=null&&(d=rt(d,l)),Fo(d,f,p)}var m=C(t,"x","conv2d"),v=C(n,"filter","conv2d"),g=m,y=!1;m.rank===3&&(y=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Cn(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(Ln(e,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var x,b,w=_e(g.shape,v.shape,e,u,o,c);l!=null&&(x=yn(x=C(l,"bias","fused conv2d"),m)[0],an(w.outShape,x.shape)),p!=null&&(b=C(p,"prelu weights","fused conv2d"));var R={x:g,filter:v};l!=null&&(R.bias=x),p!=null&&(R.preluActivationWeights=b);var A=[v,g],k=N.runKernelFunc(function(I,S){var F=I.fusedConv2d({input:g,filter:v,convInfo:w,bias:x,activation:f,preluActivationWeights:b});return S([v,g,F]),F},R,function(I,S){var F=S,T=F[0],W=F[1],L=F[2],B=No(I,L,f);E(tt(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var z={};return l!=null&&(z={bias:function(){return To(x,B)}}),Object.assign({x:function(){return Bi(W.shape,B,T,e,o)},filter:function(){return Eo(W,B,T.shape,e,o)}},z)},"FusedConv2D",{convInfo:w,activation:f},A,[!0]);return y?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),Cp=D({fusedDepthwiseConv2d_:function(r){var t=r.x,n=r.filter,e=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(Do(N.state.gradientDepth,f)===!1){var d=Ro(t,n,e,o,i,u,c);return l!=null&&(d=rt(d,l)),Fo(d,f,p)}var m=C(t,"x","depthwiseConv2d"),v=C(n,"filter","depthwiseConv2d"),g=m,y=!1;m.rank===3&&(y=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(Ln(e,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+u+"'"}),c!=null&&E(Cn(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var x,b,w=_e(g.shape,v.shape,e,u,o,c,!0);l!=null&&(x=yn(x=C(l,"bias","fused conv2d"),m)[0],an(w.outShape,x.shape)),p!=null&&(b=C(p,"prelu weights","fused depthwiseConv2d"));var R={x:g,filter:v};l!=null&&(R.bias=x),p!=null&&(R.preluActivationWeights=b);var A=[v,g],k=N.runKernelFunc(function(I,S){var F=I.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:x,activation:f,preluActivationWeights:b});return S([v,g,F]),F},R,function(I,S){E(tt(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var F=S[0],T=S[1],W=S[2],L=No(I,W,f),B={};return l!=null&&(B={bias:function(){return To(x,L)}}),Object.assign({x:function(){return Pi(T.shape,L,F,w)},filter:function(){return Li(T,L,F.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:f},A,[!0]);return y?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),Ep=Object.freeze({matMul:bp,conv2d:wp,depthwiseConv2d:Cp}),Rp=Object.freeze({image:xp,linalg:hp,losses:sp,spectral:Kf,fused:Ep,signal:Qf,square:Kl,squaredDifference:wi,conv1d:af,conv2d:Rt,conv3d:sf,depthwiseConv2d:Ro,separableConv2d:uf,conv2dTranspose:cf,conv3dTranspose:lf,op:D,batchNormalization2d:Ih,batchNormalization3d:kh,batchNormalization4d:Sh,batchNormalization:Ah,batchNorm:Dh,batchNorm2d:Nh,batchNorm3d:Th,batchNorm4d:Fh,booleanMaskAsync:of,complex:An,real:Hn,imag:Zn,concat:te,concat1d:hu,concat2d:fu,concat3d:pu,concat4d:du,split:io,matMul:Wi,dot:hf,outerProduct:ff,reverse:It,reverse1d:pf,reverse2d:df,reverse3d:vf,reverse4d:mf,maxPool:gf,avgPool:yf,pool:xf,maxPool3d:bf,avgPool3d:wf,slice:xe,slice1d:Cf,slice2d:Ef,slice3d:Rf,slice4d:If,abs:Xl,acos:jl,acosh:Yl,asin:$l,asinh:Ql,atan:Jl,atanh:Zl,ceil:nh,clipByValue:eh,cos:th,cosh:rh,erf:oh,exp:ah,expm1:ih,floor:sh,log:uh,log1p:ch,logSigmoid:lh,neg:Ci,reciprocal:hh,round:fh,rsqrt:Ei,sigmoid:ph,sign:dh,isNaN:vh,isInf:mh,isFinite:gh,sin:yh,sinh:xh,softplus:bh,sqrt:wh,step:Ch,tan:Eh,tanh:Rh,all:kf,any:Sf,argMax:Af,argMin:Df,logSumExp:Nf,max:Tf,mean:Ff,min:_f,moments:Of,sum:Gi,prod:Mf,equal:Ti,equalStrict:jh,greater:Yh,greaterEqual:Fi,greaterEqualStrict:$h,greaterStrict:Qh,less:Jh,lessEqual:Zh,lessEqualStrict:nf,lessStrict:ef,notEqual:tf,notEqualStrict:rf,add:rt,addN:Mh,addStrict:Bh,atan2:Ph,div:bo,divNoNan:Lh,divStrict:Wh,floorDiv:Di,maximum:wo,maximumStrict:Uh,minimum:Ni,minimumStrict:Vh,mod:zh,modStrict:Gh,mul:Ke,mulStrict:Hh,pow:Zt,powStrict:qh,squaredDifferenceStrict:Kh,sub:Te,subStrict:Xh,elu:Hi,leakyRelu:Bf,prelu:qi,relu:Ki,relu6:Xi,selu:Pf,logicalAnd:ir,logicalNot:_h,logicalOr:Si,logicalXor:Oh,where:Ne,whereAsync:Ai,buffer:nn,print:Eu,batchToSpaceND:Ha,broadcastTo:Ru,cast:Iu,clone:ku,cumsum:Su,depthToSpace:Au,expandDims:ve,eye:qa,multinomial:Du,oneHot:Xr,pad:wt,pad1d:Nu,pad2d:Tu,pad3d:Fu,pad4d:_u,rand:Ou,randomNormal:Mu,randomGamma:Bu,randomUniform:Ka,reshape:uo,spaceToBatchND:Xa,squeeze:ja,stack:De,tile:ht,truncatedNormal:Pu,unstack:co,setdiff1dAsync:Lu,fill:ao,linspace:lu,ones:at,range:qt,scalar:Q,tensor:Tn,tensor1d:et,tensor2d:je,tensor3d:za,tensor4d:Re,tensor5d:su,tensor6d:uu,variable:cu,zeros:wn,onesLike:Ga,zerosLike:hn,transpose:Lf,softmax:ho,logSoftmax:qu,localResponseNormalization:Wf,norm:ji,gather:Co,unsortedSegmentSum:_i,basicLSTMCell:Uf,multiRNNCell:Vf,movingAverage:zf,stridedSlice:Gf,topk:Hf,scatterND:qf,fft:Io,ifft:nr,rfft:ko,irfft:Yi,sparseToDense:Xf,gatherND:jf,diag:Yf,dropout:$f,hannWindow:So,hammingWindow:Qi,frame:Ao,stft:Ji,inTopKAsync:Jf});function U(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(n){n!=null&&E(n.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Nr(r,t,n,e){if(n==="linear")return r.linear(t);if(n==="relu")return r.relu(t);if(n==="elu")return r.elu(t);if(n==="relu6")return r.relu6(t);if(n==="prelu")return r.prelu(t,e);throw new Error("Activation "+n+" has not been implemented for the CPU backend.")}var Ip=function(r){function t(){var n=r.call(this)||this;return n.blockSize=48,n.firstUse=!0,n.data=new ei(n,N),n}return Kn(t,r),t.prototype.write=function(n,e,o){this.firstUse&&(this.firstUse=!1,M().get("IS_NODE")&&Gt(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:n,dtype:o}),a},t.prototype.move=function(n,e,o,a){this.data.set(n,{values:e,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(n){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,this.readSync(n)]})})},t.prototype.readSync=function(n){var e=this.data.get(n),o=e.dtype,a=e.complexTensors;return o==="complex64"?$r(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(n).values},t.prototype.bufferSync=function(n){var e=this.readSync(n.dataId),o=e;if(n.dtype==="string")try{o=e.map(function(a){return Wt(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return nn(n.shape,n.dtype,o)},t.prototype.makeOutput=function(n,e,o){var a=this.write(n,e,o);return N.makeTensorFromDataId(a,e,o,this)},t.prototype.disposeData=function(n){if(this.data.has(n)){var e=this.data.get(n).complexTensors;e!=null&&(e.real.dispose(),e.imag.dispose()),this.data.delete(n)}},t.prototype.time=function(n){return K(this,void 0,void 0,function(){var e;return X(this,function(o){return e=Qn(),n(),[2,{kernelMs:Qn()-e}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(n,e){var o=this.makeOutput(null,n.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:N.keep(n.clone()),imag:N.keep(e.clone())},o},t.prototype.real=function(n){return this.data.get(n.dataId).complexTensors.real.clone()},t.prototype.imag=function(n){return this.data.get(n.dataId).complexTensors.imag.clone()},t.prototype.slice=function(n,e,o){if(U(n,"slice"),Za(n.shape,e,o)){var a=ni(e,n.strides),i=j(o);return Tn(this.readSync(n.dataId).subarray(a,a+i),o,n.dtype)}for(var s=nn(o,n.dtype),u=this.bufferSync(n),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,f){return h+e[f]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(n,e,o,a){U(n,"stridedSlice");var i=lo(e,o,a);if(i.some(function(p){return p===0}))return Tn([],i);for(var s=nn(i,n.dtype),u=this.bufferSync(n),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*a[f]+e[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},t.prototype.diag=function(n){for(var e=this.readSync(n.dataId),o=nn([n.size,n.size],n.dtype),a=o.values,i=0;i<e.length;i++)a[i*n.size+i]=e[i];return o.toTensor()},t.prototype.unstack=function(n,e){for(var o=n.shape[e],a=new Array(n.rank-1),i=0,s=0;s<n.rank;s++)s!==e&&(a[i++]=n.shape[s]);var u=new Array(n.rank).fill(0),c=n.shape.slice();c[e]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[e]=s,l[s]=this.slice(n,u,c).reshape(a);return l},t.prototype.reverse=function(n,e){U(n,"reverse");for(var o=nn(n.shape,n.dtype),a=this.bufferSync(n),i=function(u){var c=o.indexToLoc(u),l=c.slice();e.forEach(function(h){return l[h]=n.shape[h]-1-l[h]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(n,e){var o=this;if(n[0].dtype==="complex64"){var a=n.map(function(p){return Hn(p)}),i=n.map(function(p){return Zn(p)});return An(this.concat(a,e),this.concat(i,e))}var s=n.map(function(p){var d=j(p.shape.slice(e));return p.as2D(-1,d)}),u=nt(s.map(function(p){return p.shape}),1),c=nn(u,n[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(p){c.set(o.readSync(p.dataId),l),l+=p.size})}else{var h=0;s.forEach(function(p){for(var d=o.readSync(p.dataId),m=0,v=0;v<p.shape[0];++v)for(var g=v*u[1]+h,y=0;y<p.shape[1];++y)c[g+y]=d[m++];h+=p.shape[1]})}var f=nt(n.map(function(p){return p.shape}),e);return Tn(c,f,n[0].dtype)},t.prototype.neg=function(n){return U(n,"neg"),this.multiply(Q(-1),n)},t.prototype.add=function(n,e){return n.dtype==="complex64"||e.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),e.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(n,e,Dn(n.dtype,e.dtype),function(o,a){return o+a})},t.prototype.addN=function(n){var e=this;U(n,"addN");for(var o=n.map(function(l){return e.readSync(l.dataId)}),a=nn(n[0].shape,n[0].dtype),i=a.values,s=0;s<n.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(n,e){var o=kn([e],n.shape),a=this.max(n,o),i=Pn(a.shape,o),s=this.subtract(n,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(n,e){return n.dtype==="complex64"||e.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),e.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(n,e,Dn(n.dtype,e.dtype),function(o,a){return o-a})},t.prototype.pow=function(n,e){return U([n,e],"pow"),this.broadcastedBinaryOp(n,e,n.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(n,e,o,a){U([n,e],"matMul");for(var i=o?n.shape[1]:n.shape[2],s=o?n.shape[2]:n.shape[1],u=a?e.shape[1]:e.shape[2],c=n.shape[0],l=this.readSync(n.dataId),h=this.readSync(e.dataId),f=o?[n.strides[0],1,n.strides[1]]:[n.strides[0],n.strides[1],1],p=f[0],d=f[1],m=f[2],v=a?[1,e.strides[1],e.strides[0]]:[e.strides[1],1,e.strides[0]],g=v[0],y=v[1],x=v[2],b=s*u,w=nn([c,s,u],n.dtype),R=w.values,A=this.blockSize,k=0;k<c;k++)for(var I=0;I<s;I+=A)for(var S=0;S<u;S+=A)for(var F=0;F<i;F+=A)for(var T=Math.min(I+A,s),W=Math.min(S+A,u),L=Math.min(F+A,i),B=I;B<T;B++)for(var z=S;z<W;z++){for(var V=0,P=F;P<L;P++)V+=l[k*p+B*d+P*m]*h[P*g+z*y+k*x];R[k*b+(B*u+z)]+=V}return w.toTensor()},t.prototype.fusedBatchMatMul=function(n){var e=n.a,o=n.b,a=n.transposeA,i=n.transposeB,s=n.bias,u=n.activation,c=n.preluActivationWeights,l=this.batchMatMul(e,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Nr(this,l,u,c)),l},t.prototype.multiply=function(n,e){return n.dtype==="complex64"||e.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),e.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(n,e,Dn(n.dtype,e.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(n,e){return U([n,e],"realDivide"),this.broadcastedBinaryOp(n,e,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(n,e){return U([n,e],"floorDiv"),this.broadcastedBinaryOp(n,e,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(n,e){U(n,"sum"),Un("sum",e,n.rank);for(var o=Nn(n.shape,e),a=o[0],i=o[1],s=wn(a,Dn(n.dtype,"int32")),u=j(i),c=this.readSync(s.dataId),l=this.readSync(n.dataId),h=0;h<c.length;++h){for(var f=h*u,p=0,d=0;d<u;++d)p+=l[f+d];c[h]=p}return s},t.prototype.prod=function(n,e){U(n,"sum");for(var o=Nn(n.shape,e),a=o[0],i=o[1],s=wn(a,Dn(n.dtype,"int32")),u=j(i),c=this.readSync(s.dataId),l=this.readSync(n.dataId),h=0;h<c.length;++h){for(var f=h*u,p=1,d=0;d<u;++d)p*=l[f+d];c[h]=p}return s},t.prototype.unsortedSegmentSum=function(n,e,o){U(n,"unsortedSegmentSum");for(var a=[],i=n.rank-e.rank,s=0;s<i;++s)e=e.expandDims(s+1);for(s=0;s<o;++s){var u=Q(s,"int32"),c=Ti(u,e).asType("float32").mul(n).sum(0);a.push(c)}return De(a)},t.prototype.argMin=function(n,e){U(n,"argMin");var o=[e];Un("argMin",o,n.rank);for(var a=Nn(n.shape,o),i=a[0],s=a[1],u=wn(i,"int32"),c=j(s),l=this.readSync(u.dataId),h=this.readSync(n.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g<d&&(d=g,m=v)}l[f]=m}return u},t.prototype.argMax=function(n,e){U(n,"argMax");var o=[e];Un("argMax",o,n.rank);for(var a=Nn(n.shape,o),i=a[0],s=a[1],u=wn(i,"int32"),c=j(s),l=this.readSync(u.dataId),h=this.readSync(n.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],m=0,v=0;v<c;++v){var g=h[p+v];g>d&&(d=g,m=v)}l[f]=m}return u},t.prototype.cumsum=function(n,e,o,a){if(U(n,"cumsum"),e!==n.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(n.rank-1)+" but got axis="+e);for(var i=Dn(n.dtype,"int32"),s=wn(n.shape,i),u=this.readSync(s.dataId),c=this.readSync(n.dataId),l=n.shape[n.rank-1],h=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},f=0;f<c.length;f+=l)for(var p=0;p<l;p++){var d=h(f,p);if(p===0)u[d]=o?0:c[d];else{var m=h(f,p-1);u[d]=o?c[m]+u[m]:c[d]+u[m]}}return s},t.prototype.equal=function(n,e){return U([n,e],"equal"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(n,e){return U([n,e],"notEqual"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(n,e){return U([n,e],"less"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(n,e){return U([n,e],"lessEqual"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(n,e){return U([n,e],"greater"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(n,e){return U([n,e],"greaterEqual"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(n){U(n,"logicalNot");for(var e=this.readSync(n.dataId),o=new Uint8Array(e.length),a=0;a<e.length;++a)o[a]=e[a]?0:1;return this.makeOutput(o,n.shape,"bool")},t.prototype.logicalAnd=function(n,e){return U([n,e],"logicalAnd"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(n,e){return U([n,e],"logicalOr"),this.broadcastedBinaryOp(n,e,"bool",function(o,a){return o||a})},t.prototype.select=function(n,e,o){U([n,e,o],"select");for(var a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=this.readSync(o.dataId),u=wn(e.shape,Dn(e.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=n.rank===0||n.rank>1||e.rank===1?1:j(e.shape.slice(1)),f=0;f<a.length;f++)for(var p=0;p<h;p++)a[f]===1?c[l++]=i[f]:c[l++]=s[f];return u},t.prototype.where=function(n){U([n],"where");var e=this.readSync(n.dataId);return mo(n.shape,e)},t.prototype.topk=function(n,e,o){return U(n,"topk"),ci(this.readSync(n.dataId),n.shape,n.dtype,e)},t.prototype.min=function(n,e){U(n,"min"),Un("min",e,n.rank);for(var o=Nn(n.shape,e),a=o[0],i=o[1],s=wn(a,n.dtype),u=j(i),c=this.readSync(s.dataId),l=this.readSync(n.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];m<p&&(p=m)}c[h]=p}return s},t.prototype.minimum=function(n,e){return U([n,e],"minimum"),this.broadcastedBinaryOp(n,e,n.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(n,e){return U([n,e],"mod"),this.broadcastedBinaryOp(n,e,n.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(n,e){U(n,"max"),Un("max",e,n.rank);for(var o=Nn(n.shape,e),a=o[0],i=o[1],s=wn(a,n.dtype),u=j(i),c=this.readSync(s.dataId),l=this.readSync(n.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];m>p&&(p=m)}c[h]=p}return s},t.prototype.maximum=function(n,e){return U([n,e],"maximum"),this.broadcastedBinaryOp(n,e,n.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(n,e){U(n,"all"),Un("all",e,n.rank);for(var o=Nn(n.shape,e),a=o[0],i=o[1],s=wn(a,n.dtype),u=j(i),c=this.readSync(s.dataId),l=this.readSync(n.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];p=p&&m}c[h]=p}return s},t.prototype.any=function(n,e){U(n,"any"),Un("any",e,n.rank);for(var o=Nn(n.shape,e),a=o[0],i=o[1],s=wn(a,n.dtype),u=j(i),c=this.readSync(s.dataId),l=this.readSync(n.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var m=l[f+d];p=p||m}c[h]=p}return s},t.prototype.squaredDifference=function(n,e){return U([n,e],"squaredDifference"),this.broadcastedBinaryOp(n,e,n.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(n){U(n,"ceil");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a)o[a]=Math.ceil(e[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.floor=function(n){U(n,"floor");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a)o[a]=Math.floor(e[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.sign=function(n){U(n,"x");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a)e[a]<0?o[a]=-1:e[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,n.shape,"float32")},t.prototype.isNaN=function(n){U(n,"x");for(var e=this.readSync(n.dataId),o=new Uint8Array(e.length),a=0;a<e.length;++a)Number.isNaN(e[a])&&(o[a]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.isInf=function(n){U(n,"x");for(var e=this.readSync(n.dataId),o=new Uint8Array(e.length),a=0;a<e.length;++a)Math.abs(e[a])===1/0&&(o[a]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.isFinite=function(n){U(n,"x");for(var e=this.readSync(n.dataId),o=new Uint8Array(e.length),a=0;a<e.length;++a)Number.isFinite(e[a])&&(o[a]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.round=function(n){U(n,"round");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a){var i=Math.floor(e[a]);e[a]-i<.5?o[a]=Math.floor(e[a]):e[a]-i>.5?o[a]=Math.ceil(e[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,n.shape,"float32")},t.prototype.exp=function(n){U(n,"exp");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a)o[a]=Math.exp(e[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.expm1=function(n){U(n,"expm1");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a)o[a]=Math.expm1(e[a]);return this.makeOutput(o,n.shape,"float32")},t.prototype.log=function(n){U(n,"log");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a){var i=e[a];o[a]=Math.log(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.log1p=function(n){U(n,"log1p");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a){var i=e[a];o[a]=Math.log1p(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.sqrt=function(n){U(n,"sqrt");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a){var i=e[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.rsqrt=function(n){U(n,"rsqrt");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a){var i=e[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,n.shape,"float32")},t.prototype.reciprocal=function(n){U(n,"reciprocal");for(var e=this.readSync(n.dataId),o=new Float32Array(e.length),a=0;a<e.length;++a)o[a]=1/e[a];return this.makeOutput(o,n.shape,"float32")},t.prototype.linear=function(n){return n},t.prototype.relu=function(n){U(n,"relu");for(var e=wn(n.shape,n.dtype),o=this.readSync(e.dataId),a=this.readSync(n.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return e},t.prototype.relu6=function(n){U(n,"relu");for(var e=wn(n.shape,n.dtype),o=this.readSync(e.dataId),a=this.readSync(n.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return e},t.prototype.prelu=function(n,e){return U([n,e],"prelu"),this.broadcastedBinaryOp(n,e,n.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(n){U(n,"elu");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a){var i=o[a];e[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(e,n.shape,"float32")},t.prototype.eluDer=function(n,e){U([n,e],"eluDer");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,e.shape,"float32")},t.prototype.selu=function(n){U(n,"selu");for(var e=yo,o=xo,a=new Float32Array(n.size),i=this.readSync(n.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:e*(Math.exp(u)-1)}return this.makeOutput(a,n.shape,"float32")},t.prototype.clip=function(n,e,o){U(n,"clip");for(var a=new Float32Array(n.size),i=this.readSync(n.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<e?e:u}return this.makeOutput(a,n.shape,"float32")},t.prototype.abs=function(n){for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.abs(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.complexAbs=function(n){for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<n.size;++a){var i=o[2*a],s=o[2*a+1];e[a]=Math.hypot(i,s)}return this.makeOutput(e,n.shape,"float32")},t.prototype.int=function(n){U(n,"int");for(var e=new Int32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=o[a];return this.makeOutput(e,n.shape,"int32")},t.prototype.sigmoid=function(n){U(n,"sigmoid");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(e,n.shape,"float32")},t.prototype.softplus=function(n){U(n,"softplus");for(var e=Math.log(11920928955078125e-23)+2,o=new Float32Array(n.size),a=this.readSync(n.dataId),i=0;i<a.length;++i){var s=a[i]>-e,u=a[i]<e,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,n.shape,"float32")},t.prototype.sin=function(n){U(n,"sin");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.sin(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.cos=function(n){U(n,"cos");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.cos(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.tan=function(n){U(n,"tan");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.tan(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.asin=function(n){U(n,"asin");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.asin(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.acos=function(n){U(n,"acos");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.acos(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.atan=function(n){U(n,"atan");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.atan(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.atan2=function(n,e){return U([n,e],"atan2"),this.broadcastedBinaryOp(n,e,n.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(n){U(n,"sinh");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.sinh(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.cosh=function(n){U(n,"cosh");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.cosh(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.tanh=function(n){U(n,"tanh");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=ds(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.asinh=function(n){U(n,"asinh");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.asinh(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.acosh=function(n){U(n,"acosh");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.acosh(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.atanh=function(n){U(n,"atanh");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a)e[a]=Math.atanh(o[a]);return this.makeOutput(e,n.shape,"float32")},t.prototype.erf=function(n){U(n,"erf");for(var e=new Float32Array(n.size),o=this.readSync(n.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);e[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(e,n.shape,"float32")},t.prototype.step=function(n,e){e===void 0&&(e=0),U(n,"step");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:e}return this.makeOutput(o,n.shape,"float32")},t.prototype.fusedConv2d=function(n){var e=n.input,o=n.filter,a=n.convInfo,i=n.bias,s=n.activation,u=n.preluActivationWeights,c=this.conv2d(e,o,a);return i&&(c=this.add(c,i)),s&&(c=Nr(this,c,s,u)),c},t.prototype.conv2d=function(n,e,o){U([n,e],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=nn(o.outShape,n.dtype),p=n.strides[0],d=h?n.strides[1]:n.strides[2],m=h?n.strides[2]:1,v=h?1:n.strides[1],g=f.strides[0],y=h?f.strides[1]:f.strides[2],x=h?f.strides[2]:1,b=h?1:f.strides[1],w=this.readSync(n.dataId),R=this.readSync(e.dataId),A=f.values,k=0;k<o.batchSize;++k)for(var I=k*p,S=k*g,F=0;F<o.outHeight;++F)for(var T=S+F*y,W=F*o.strideHeight-l,L=0;L<a;L++){var B=W+L*s;if(!(B<0||B>=o.inHeight))for(var z=L*e.strides[0],V=I+B*d,P=0;P<o.outWidth;++P)for(var G=T+P*x,H=P*o.strideWidth-c,q=0;q<i;q++){var $=H+q*u;if(!($<0||$>=o.inWidth))for(var J=V+$*m,tn=z+q*e.strides[1],rn=0;rn<o.inChannels;++rn){for(var on=w[J+rn*v],cn=0;cn<o.outChannels;++cn)A[G+cn*b]+=on*R[tn+cn];tn+=o.outChannels}}}return f.toTensor()},t.prototype.conv3d=function(n,e,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,p=o.padInfo.top,d=nn(o.outShape,n.dtype),m=this.readSync(n.dataId),v=this.readSync(e.dataId),g=d.values,y=0;y<o.batchSize;++y)for(var x=y*n.strides[0],b=y*d.strides[0],w=0;w<o.outDepth;++w)for(var R=b+w*d.strides[1],A=w*o.strideDepth-h,k=0;k<a;k++){var I=A+k*u;if(!(I<0||I>=o.inDepth))for(var S=k*e.strides[0],F=x+I*n.strides[1],T=0;T<o.outHeight;++T)for(var W=R+T*d.strides[2],L=T*o.strideHeight-p,B=0;B<i;B++){var z=L+B*c;if(!(z<0||z>=o.inHeight))for(var V=S+B*e.strides[1],P=F+z*n.strides[2],G=0;G<o.outWidth;++G)for(var H=W+G*o.outChannels,q=G*o.strideWidth-f,$=0;$<s;$++){var J=q+$*l;if(!(J<0||J>=o.inWidth))for(var tn=V+$*e.strides[2],rn=P+J*o.inChannels,on=tn,cn=0;cn<o.inChannels;++cn){for(var sn=m[rn+cn],ln=0;ln<o.outChannels;++ln)g[H+ln]+=sn*v[on+ln];on+=o.outChannels}}}}return d.toTensor()},t.prototype.conv2dDerInput=function(n,e,o){U([n,e],"conv2dDerInput");for(var a=nn(o.inShape,"float32"),i=a.values,s=this.readSync(n.dataId),u=this.readSync(e.dataId),c=e.strides,l=c[0],h=c[1],f=c[2],p=o.batchSize,d=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,y=o.inWidth,x=o.outChannels,b=o.outHeight,w=o.outWidth,R=o.strideHeight,A=o.strideWidth,k=o.dataFormat,I=d-1-o.padInfo.top,S=m-1-o.padInfo.left,F=k==="channelsLast",T=a.strides[0],W=F?a.strides[1]:a.strides[2],L=F?a.strides[2]:1,B=F?1:a.strides[1],z=n.strides[0],V=F?n.strides[1]:n.strides[2],P=F?n.strides[2]:1,G=F?1:n.strides[1],H=0;H<p;++H)for(var q=0;q<v;++q)for(var $=0;$<g;++$)for(var J=$-I,tn=Math.max(0,Math.ceil(J/R)),rn=Math.min(b,(d+J)/R),on=0;on<y;++on){for(var cn=on-S,sn=Math.max(0,Math.ceil(cn/A)),ln=Math.min(w,(m+cn)/A),En=0,un=tn;un<rn;++un)for(var dn=un*R-J,fn=sn;fn<ln;++fn)for(var xn=z*H+V*un+P*fn,mn=l*(d-1-dn)+h*(m-1-(fn*A-cn))+f*q,gn=0;gn<x;++gn)En+=s[xn+G*gn]*u[mn+gn];i[T*H+W*$+L*on+B*q]=En}return a.toTensor()},t.prototype.conv3dDerInput=function(n,e,o){for(var a=nn(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(n.dataId),p=n.strides,d=p[0],m=p[1],v=p[2],g=p[3],y=this.readSync(e.dataId),x=e.strides,b=x[0],w=x[1],R=x[2],A=x[3],k=o.batchSize,I=o.filterDepth,S=o.filterHeight,F=o.filterWidth,T=o.inChannels,W=o.inDepth,L=o.inHeight,B=o.inWidth,z=o.outChannels,V=o.outDepth,P=o.outHeight,G=o.outWidth,H=o.strideDepth,q=o.strideHeight,$=o.strideWidth,J=I-1-o.padInfo.front,tn=S-1-o.padInfo.top,rn=F-1-o.padInfo.left,on=0;on<k;++on)for(var cn=0;cn<T;++cn)for(var sn=0;sn<W;++sn)for(var ln=sn-J,En=Math.max(0,Math.ceil(ln/H)),un=Math.min(V,(I+ln)/H),dn=0;dn<L;++dn)for(var fn=dn-tn,xn=Math.max(0,Math.ceil(fn/q)),mn=Math.min(P,(S+fn)/q),gn=0;gn<B;++gn){for(var jn=gn-rn,Yn=Math.max(0,Math.ceil(jn/$)),Wn=Math.min(G,(F+jn)/$),Be=0,ie=En;ie<un;++ie)for(var de=ie*H-ln,se=xn;se<mn;++se)for(var Pe=se*q-fn,ue=Yn;ue<Wn;++ue)for(var ur=d*on+m*ie+v*se+g*ue,Le=b*(I-1-de)+w*(S-1-Pe)+R*(F-1-(ue*$-jn))+A*cn,$n=0;$n<z;++$n)Be+=f[ur+$n]*y[Le+$n];i[u*on+c*sn+l*dn+h*gn+cn]=Be}return a.toTensor()},t.prototype.conv2dDerFilter=function(n,e,o){U([n,e],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=nn(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,p=this.bufferSync(n),d=this.bufferSync(e),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((h-y)/i)),b=Math.min(o.outWidth,(o.inWidth+h-y)/i),w=0;w<o.inChannels;++w)for(var R=0;R<o.outChannels;++R){for(var A=0,k=0;k<o.batchSize;++k)for(var I=v;I<g;++I)for(var S=m+I*a-f,F=x;F<b;++F){var T=y+F*i-h;A+=c?p.get(k,S,T,w)*d.get(k,I,F,R):p.get(k,w,S,T)*d.get(k,R,I,F)}l.set(A,m,y,w,R)}return l.toTensor()},t.prototype.conv3dDerFilter=function(n,e,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=nn(o.filterShape,"float32"),f=h.values,p=h.strides,d=p[0],m=p[1],v=p[2],g=p[3],y=this.readSync(e.dataId),x=e.strides,b=x[0],w=x[1],R=x[2],A=x[3],k=this.readSync(n.dataId),I=n.strides,S=I[0],F=I[1],T=I[2],W=I[3],L=o.padInfo.front,B=o.padInfo.left,z=o.padInfo.top,V=0;V<u;++V)for(var P=Math.max(0,Math.ceil((L-V)/a)),G=Math.min(o.outDepth,(o.inDepth+L-V)/a),H=V*d,q=0;q<c;++q)for(var $=Math.max(0,Math.ceil((z-q)/i)),J=Math.min(o.outHeight,(o.inHeight+z-q)/i),tn=q*m+H,rn=0;rn<l;++rn)for(var on=Math.max(0,Math.ceil((B-rn)/s)),cn=Math.min(o.outWidth,(o.inWidth+B-rn)/s),sn=rn*v+tn,ln=0;ln<o.inChannels;++ln)for(var En=ln*g+sn,un=0;un<o.outChannels;++un){for(var dn=0,fn=0;fn<o.batchSize;++fn)for(var xn=fn*S,mn=fn*b,gn=P;gn<G;++gn)for(var jn=(V+gn*a-L)*F+xn,Yn=gn*w+mn,Wn=$;Wn<J;++Wn)for(var Be=(q+Wn*i-z)*T+jn,ie=Wn*R+Yn,de=on;de<cn;++de){var se=de*A+ie;dn+=k[(rn+de*s-B)*W+Be+ln]*y[se+un]}f[En+un]=dn}return h.toTensor()},t.prototype.fusedDepthwiseConv2D=function(n){var e=n.input,o=n.filter,a=n.convInfo,i=n.bias,s=n.activation,u=n.preluActivationWeights,c=this.depthwiseConv2D(e,o,a);return i&&(c=this.add(c,i)),s&&(c=Nr(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(n,e,o){U([n,e],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=nn(o.outShape,n.dtype),p=this.readSync(n.dataId),d=this.readSync(e.dataId),m=f.values,v=0;v<o.batchSize;++v)for(var g=v*n.strides[0],y=v*f.strides[0],x=0;x<o.outHeight;++x)for(var b=y+x*f.strides[1],w=x*o.strideHeight-c,R=0;R<a;++R){var A=w+R*s;if(!(A<0||A>=o.inHeight))for(var k=R*e.strides[0],I=g+A*n.strides[1],S=0;S<o.outWidth;++S)for(var F=b+S*f.strides[2],T=S*o.strideWidth-l,W=0;W<i;++W){var L=T+W*u;if(!(L<0||L>=o.inWidth))for(var B=k+W*e.strides[1],z=I+L*o.inChannels,V=F,P=B,G=0;G<o.inChannels;++G){for(var H=p[z+G],q=0;q<h;++q)m[V+q]+=H*d[P+q];V+=h,P+=h}}}return f.toTensor()},t.prototype.depthwiseConv2DDerInput=function(n,e,o){U([n,e],"depthwiseConv2DDerInput");for(var a=nn(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(n.dataId),f=n.strides,p=f[0],d=f[1],m=f[2],v=this.readSync(e.dataId),g=e.strides,y=g[0],x=g[1],b=g[2],w=o.batchSize,R=o.filterHeight,A=o.filterWidth,k=o.inChannels,I=o.inHeight,S=o.inWidth,F=o.outChannels,T=o.outHeight,W=o.outWidth,L=o.strideHeight,B=o.strideWidth,z=R-1-o.padInfo.top,V=A-1-o.padInfo.left,P=F/k,G=0;G<w;++G)for(var H=0;H<k;++H)for(var q=0;q<I;++q)for(var $=q-z,J=Math.max(0,Math.ceil($/L)),tn=Math.min(T,(R+$)/L),rn=0;rn<S;++rn){for(var on=rn-V,cn=Math.max(0,Math.ceil(on/B)),sn=Math.min(W,(A+on)/B),ln=0,En=J;En<tn;++En)for(var un=En*L-$,dn=cn;dn<sn;++dn)for(var fn=p*G+d*En+m*dn,xn=y*(R-1-un)+x*(A-1-(dn*B-on))+b*H,mn=0;mn<P;++mn)ln+=h[fn+(H*P+mn)]*v[xn+mn];i[u*G+c*q+l*rn+H]=ln}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(n,e,o){U([n,e],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=nn(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,p=this.bufferSync(n),d=this.bufferSync(e),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/a)),g=Math.min(o.outHeight,(o.inHeight+h-m)/a),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((l-y)/i)),b=Math.min(o.outWidth,(o.inWidth+l-y)/i),w=0;w<o.outChannels;++w){for(var R=Math.trunc(w/f),A=w%f,k=0,I=0;I<o.batchSize;++I)for(var S=v;S<g;++S)for(var F=m+S*a-h,T=x;T<b;++T){var W=y+T*i-l;k+=p.get(I,F,W,R)*d.get(I,S,T,w)}c.set(k,m,y,R,A)}return c.toTensor()},t.prototype.tile=function(n,e){return U(n,"tile"),ui(this.bufferSync(n),e)},t.prototype.pad=function(n,e,o){U(n,"pad");var a=e.map(function(f,p){return f[0]+n.shape[p]+f[1]}),i=e.map(function(f){return f[0]}),s=this.bufferSync(n),u=nn(a,n.dtype);o!==0&&u.values.fill(o);for(var c=0;c<n.size;c++){var l=s.indexToLoc(c),h=l.map(function(f,p){return f+i[p]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},t.prototype.transpose=function(n,e){U(n,"transpose");for(var o=new Array(n.rank),a=0;a<o.length;a++)o[a]=n.shape[e[a]];var i=this.readSync(n.dataId),s=nn(o,n.dtype),u=this.bufferSync(n);for(a=0;a<n.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[e[h]];var f=s.locToIndex(l);s.values[f]=i[a]}return s.toTensor()},t.prototype.gather=function(n,e,o){U([n,e],"gather");var a=n.shape.slice(),i=this.readSync(e.dataId);a[o]=i.length;for(var s=nn(a,n.dtype),u=this.bufferSync(n),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},t.prototype.batchToSpaceND=function(n,e,o){U([n],"batchToSpaceND");var a=e.reduce(function(h,f){return h*f}),i=Kt(n.shape,e,a),s=Xt(i.length,e.length),u=jt(n.shape,e,a),c=Ya(o,e.length),l=$a(u,o,e.length);return n.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(n,e,o){U([n],"spaceToBatchND");var a=e.reduce(function(f,p){return f*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+e.length;s<n.shape.length;++s)i.push([0,0]);var u=n.pad(i),c=Kt(u.shape,e,a,!1),l=Xt(c.length,e.length,!1),h=jt(u.shape,e,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.pool=function(n,e,o){U(n,"pool");for(var a=e.strideHeight,i=e.strideWidth,s=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,h=e.padInfo.top,f=e.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(n.dataId),m=nn(e.outShape,n.dtype),v=m.values,g=e.outShape[1]*e.outShape[2]*e.outShape[3],y=e.outShape[2]*e.outShape[3],x=e.outShape[3],b=0;b<e.batchSize;++b)for(var w=b*g,R=b*n.strides[0],A=0;A<e.inChannels;++A)for(var k=0;k<e.outHeight;++k)for(var I=k*a-h,S=Math.max(0,I),F=Math.min(e.inHeight,c+I),T=w+k*y,W=0;W<e.outWidth;++W){for(var L=W*i-f,B=Math.max(0,L),z=Math.min(e.inWidth,l+L),V=p,P=0,G=0,H=S;H<F;H+=s){for(var q=R+H*n.strides[1],$=B;$<z;$+=u){var J=d[q+$*n.strides[2]+A];o==="max"&&J>V?V=J:o==="avg"&&(P+=J,G++)}if(isNaN(V))break}v[T+W*x+A]=o==="avg"?P/G:V}return m.toTensor()},t.prototype.maxPool=function(n,e){return this.pool(n,e,"max")},t.prototype.maxPoolPositions=function(n,e){for(var o=nn(e.outShape,"int32"),a=e.strideHeight,i=e.strideWidth,s=e.dilationHeight,u=e.dilationWidth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,h=e.padInfo.top,f=e.padInfo.left,p=this.bufferSync(n),d=0;d<e.batchSize;++d)for(var m=0;m<e.inChannels;++m)for(var v=0;v<e.outHeight;++v){for(var g=v*a-h,y=g;y<0;)y+=s;for(var x=Math.min(e.inHeight,c+g),b=0;b<e.outWidth;++b){for(var w=b*i-f,R=w;R<0;)R+=u;for(var A=Math.min(e.inWidth,l+w),k=Number.NEGATIVE_INFINITY,I=-1,S=y;S<x;S+=s)for(var F=S-g,T=R;T<A;T+=u){var W=T-w,L=p.get(d,S,T,m);L>k&&(k=L,I=F*l+W)}o.set(I,d,v,b,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(n,e,o,a){U([e,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(e,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,f=a.effectiveFilterWidth,p=f-1-a.padInfo.left,d=h-1-a.padInfo.top,m=nn(e.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(n),y=0;y<a.batchSize;++y)for(var x=0;x<a.inChannels;++x)for(var b=0;b<a.inHeight;++b)for(var w=0;w<a.inWidth;++w){for(var R=b-d,A=w-p,k=0,I=0;I<h;I+=c){var S=(R+I)/s;if(!(S<0||S>=a.outHeight||Math.floor(S)!==S))for(var F=0;F<f;F+=l){var T=(A+F)/u;if(!(T<0||T>=a.outWidth||Math.floor(T)!==T)){var W=h*f-1-v.get(y,S,T,x)===I*f+F?1:0;W!==0&&(k+=g.get(y,S,T,x)*W)}}}m.set(k,y,b,w,x)}return m.toTensor()},t.prototype.avgPoolBackprop=function(n,e,o){U([n,e],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,p=f-1-o.padInfo.left,d=h-1-o.padInfo.top,m=nn(e.shape,"float32"),v=1/(s*u),g=this.bufferSync(n),y=0;y<o.batchSize;++y)for(var x=0;x<o.inChannels;++x)for(var b=0;b<o.inHeight;++b)for(var w=0;w<o.inWidth;++w){for(var R=b-d,A=w-p,k=0,I=0;I<h;I+=c){var S=(R+I)/a;if(!(S<0||S>=o.outHeight||Math.floor(S)!==S))for(var F=0;F<f;F+=l){var T=(A+F)/i;T<0||T>=o.outWidth||Math.floor(T)!==T||(k+=g.get(y,S,T,x))}}m.set(k*v,y,b,w,x)}return m.toTensor()},t.prototype.pool3d=function(n,e,o){U(n,"pool3d");for(var a=e.strideDepth,i=e.strideHeight,s=e.strideWidth,u=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,h=e.effectiveFilterDepth,f=e.effectiveFilterHeight,p=e.effectiveFilterWidth,d=e.padInfo.front,m=e.padInfo.top,v=e.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(n.dataId),x=nn(e.outShape,n.dtype),b=x.values,w=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],R=e.outShape[2]*e.outShape[3]*e.outShape[4],A=e.outShape[3]*e.outShape[4],k=e.outShape[4],I=0;I<e.batchSize;++I)for(var S=I*w,F=I*n.strides[0],T=0;T<e.inChannels;++T)for(var W=0;W<e.outDepth;++W){for(var L=W*a-d,B=L;B<0;)B+=u;for(var z=Math.min(e.inDepth,h+L),V=S+W*R,P=0;P<e.outHeight;++P){for(var G=P*i-m,H=G;H<0;)H+=c;for(var q=Math.min(e.inHeight,f+G),$=V+P*A,J=0;J<e.outWidth;++J){for(var tn=J*s-v,rn=tn;rn<0;)rn+=l;for(var on=Math.min(e.inWidth,p+tn),cn=$+J*k,sn=g,ln=0,En=0,un=B;un<z;un+=u){for(var dn=F+un*n.strides[1],fn=H;fn<q;fn+=c){for(var xn=dn+fn*n.strides[2],mn=rn;mn<on;mn+=l){var gn=y[xn+mn*n.strides[3]+T];if(o==="max"&&gn>sn?sn=gn:o==="avg"&&(ln+=gn,En++),isNaN(sn))break}if(isNaN(sn))break}if(isNaN(sn))break}b[cn+T]=o==="avg"?ln/En:sn}}}return x.toTensor()},t.prototype.avgPool3d=function(n,e){return U(n,"avgPool3d"),this.pool3d(n,e,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(n,e,o){U([n,e],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,p=o.dilationWidth,d=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=d-1-o.padInfo.front,y=v-1-o.padInfo.left,x=m-1-o.padInfo.top,b=nn(e.shape,"float32"),w=1/(u*c*l),R=this.bufferSync(n),A=0;A<o.batchSize;++A)for(var k=0;k<o.inChannels;++k)for(var I=0;I<o.inDepth;++I)for(var S=0;S<o.inHeight;++S)for(var F=0;F<o.inWidth;++F){for(var T=I-g,W=S-x,L=F-y,B=0,z=0;z<d;z+=h){var V=(T+z)/a;if(!(V<0||V>=o.outDepth||Math.floor(V)!==V))for(var P=0;P<m;P+=f){var G=(W+P)/i;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var H=0;H<v;H+=p){var q=(L+H)/s;q<0||q>=o.outWidth||Math.floor(q)!==q||(B+=R.get(A,V,G,q,k))}}}b.set(B*w,A,I,S,F,k)}return b.toTensor()},t.prototype.maxPool3d=function(n,e){return U(n,"maxPool3d"),this.pool3d(n,e,"max").toFloat()},t.prototype.maxPool3dPositions=function(n,e){for(var o=nn(e.outShape,"int32"),a=e.strideDepth,i=e.strideHeight,s=e.strideWidth,u=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,h=e.effectiveFilterDepth,f=e.effectiveFilterHeight,p=e.effectiveFilterWidth,d=e.padInfo.front,m=e.padInfo.top,v=e.padInfo.left,g=this.bufferSync(n),y=0;y<e.batchSize;++y)for(var x=0;x<e.inChannels;++x)for(var b=0;b<e.outDepth;++b){for(var w=b*a-d,R=w;R<0;)R+=u;for(var A=Math.min(e.inDepth,h+w),k=0;k<e.outHeight;++k){for(var I=k*i-m,S=I;S<0;)S+=c;for(var F=Math.min(e.inHeight,f+I),T=0;T<e.outWidth;++T){for(var W=T*s-v,L=W;L<0;)L+=l;for(var B=Math.min(e.inWidth,p+W),z=Number.NEGATIVE_INFINITY,V=-1,P=R;P<A;P+=u)for(var G=P-w,H=S;H<F;H+=c)for(var q=H-I,$=L;$<B;$+=l){var J=$-W,tn=g.get(y,P,H,$,x);tn>=z&&(z=tn,V=G*f*p+q*f+J)}o.set(V,y,b,k,T,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(n,e,o,a){U([e,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(e,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,f=a.dilationWidth,p=a.effectiveFilterDepth,d=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=p-1-a.padInfo.front,g=m-1-a.padInfo.left,y=d-1-a.padInfo.top,x=nn(e.shape,"float32"),b=this.bufferSync(i),w=this.bufferSync(n),R=0;R<a.batchSize;++R)for(var A=0;A<a.inChannels;++A)for(var k=0;k<a.inDepth;++k)for(var I=0;I<a.inHeight;++I)for(var S=0;S<a.inWidth;++S){for(var F=k-v,T=I-y,W=S-g,L=0,B=0;B<p;B+=l){var z=(F+B)/s;if(!(z<0||z>=a.outDepth||Math.floor(z)!==z))for(var V=0;V<d;V+=h){var P=(T+V)/u;if(!(P<0||P>=a.outHeight||Math.floor(P)!==P))for(var G=0;G<m;G+=f){var H=(W+G)/c;if(!(H<0||H>=a.outWidth||Math.floor(H)!==H)){var q=p*d*m-1-b.get(R,z,P,H,A)===B*d*m+V*m+G?1:0;q!==0&&(L+=w.get(R,z,P,H,A)*q)}}}}x.set(L,R,k,I,S,A)}return x.toTensor()},t.prototype.cast=function(n,e){return oi(n,e,this)},t.prototype.reshape=function(n,e){return Yr(n,e)},t.prototype.avgPool=function(n,e){return U(n,"avgPool"),this.pool(n,e,"avg").toFloat()},t.prototype.resizeBilinear=function(n,e,o,a){U(n,"resizeBilinear");for(var i=n.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(n.dataId),f=new Float32Array(j([s,e,o,l])),p=[a&&e>1?u-1:u,a&&o>1?c-1:c],d=[a&&e>1?e-1:e,a&&o>1?o-1:o],m=0,v=p[0]/d[0],g=p[1]/d[1],y=0;y<s;y++)for(var x=0;x<e;x++)for(var b=v*x,w=Math.floor(b),R=b-w,A=Math.min(u-1,Math.ceil(b)),k=y*n.strides[0]+w*n.strides[1],I=y*n.strides[0]+A*n.strides[1],S=0;S<o;S++)for(var F=g*S,T=Math.floor(F),W=F-T,L=Math.min(c-1,Math.ceil(F)),B=k+T*n.strides[2],z=I+T*n.strides[2],V=k+L*n.strides[2],P=I+L*n.strides[2],G=0;G<l;G++){var H=h[B+G],q=h[z+G],$=H+(h[V+G]-H)*W,J=$+(q+(h[P+G]-q)*W-$)*R;f[m++]=J}return Tn(f,[s,e,o,l])},t.prototype.resizeBilinearBackprop=function(n,e,o){U([n,e],"resizeBilinearBackprop");for(var a=e.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=n.shape,h=l[1],f=l[2],p=new Float32Array(i*s*u*c),d=[o&&h>1?s-1:s,o&&f>1?u-1:u],m=[o&&h>1?h-1:h,o&&f>1?f-1:f],v=d[0]/m[0],g=d[1]/m[1],y=this.readSync(n.dataId),x=0,b=0;b<i;b++)for(var w=b*e.strides[0],R=0;R<h;R++)for(var A=R*v,k=Math.floor(A),I=Math.min(Math.ceil(A),s-1),S=w+k*e.strides[1],F=w+I*e.strides[1],T=A-k,W=1-T,L=0;L<f;L++)for(var B=L*g,z=Math.floor(B),V=Math.min(Math.ceil(B),u-1),P=B-z,G=1-P,H=S+z*e.strides[2],q=S+V*e.strides[2],$=F+z*e.strides[2],J=F+V*e.strides[2],tn=W*G,rn=W*P,on=T*G,cn=T*P,sn=0;sn<c;sn++){var ln=y[x++];p[H+sn]+=ln*tn,p[q+sn]+=ln*rn,p[$+sn]+=ln*on,p[J+sn]+=ln*cn}return Re(p,[i,u,s,c],e.dtype)},t.prototype.resizeNearestNeighbor=function(n,e,o,a){U(n,"resizeNearestNeighbor");for(var i=n.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(n.dataId),f=new Float32Array(s*e*o*l),p=[a&&e>1?u-1:u,a&&o>1?c-1:c],d=[a&&e>1?e-1:e,a&&o>1?o-1:o],m=p[0]/d[0],v=p[1]/d[1],g=0,y=0;y<s;y++)for(var x=y*n.strides[0],b=0;b<e;b++)for(var w=m*b,R=x+Math.min(u-1,a?Math.round(w):Math.floor(w))*n.strides[1],A=0;A<o;A++)for(var k=v*A,I=R+Math.min(c-1,a?Math.round(k):Math.floor(k))*n.strides[2],S=0;S<l;S++){var F=h[I+S];f[g++]=F}return Tn(f,[s,e,o,l],n.dtype)},t.prototype.resizeNearestNeighborBackprop=function(n,e,o){U([n,e],"resizeNearestNeighborBackprop");for(var a=e.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=n.shape,h=l[1],f=l[2],p=new Float32Array(i*s*u*c),d=this.readSync(n.dataId),m=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],g=m[0]/v[0],y=m[1]/v[1],x=1/g,b=1/y,w=2*Math.ceil(x)+2,R=2*Math.ceil(b)+2,A=0;A<i;A++)for(var k=A*e.strides[0],I=0;I<s;I++)for(var S=k+I*e.strides[1],F=Math.floor(I*x),T=Math.floor(F-w/2),W=0;W<u;W++)for(var L=S+W*e.strides[2],B=Math.floor(W*b),z=Math.floor(B-R/2),V=0;V<c;V++){for(var P=0,G=0;G<w;G++){var H=G+T;if(!(H<0||H>=h)){var q=k+H*n.strides[1],$=H*g;if(I===Math.min(s-1,o?Math.round($):Math.floor($)))for(var J=0;J<R;J++){var tn=J+z;if(!(tn<0||tn>=f)){var rn=q+tn*n.strides[2],on=tn*y;W===Math.min(u-1,o?Math.round(on):Math.floor(on))&&(P+=d[rn+V])}}}}p[L+V]=P}return Re(p,e.shape,e.dtype)},t.prototype.batchNormalization=function(n,e,o,a,i,s){U([n,e,o,i,s],"batchNorm");for(var u=this.readSync(n.dataId),c=this.readSync(e.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),d=f.length,m=h.length,v=l.length,g=c.length,y=0,x=0,b=0,w=0,R=0;R<u.length;++R)p[R]=f[y++]+(u[R]-c[x++])*h[b++]/Math.sqrt(l[w++]+a),y>=d&&(y=0),x>=g&&(x=0),b>=m&&(b=0),w>=v&&(w=0);return Re(p,n.shape)},t.prototype.localResponseNormalization4D=function(n,e,o,a,i){U(n,"localResponseNormalization4D");var s=n.shape[3],u=s-1,c=this.readSync(n.dataId),l=n.size,h=new Float32Array(l);function f(v){for(var g=v%s,y=v-g+Math.max(0,g-e),x=v-g+Math.min(g+e,u),b=0;y<=x;y++){var w=c[y];b+=w*w}return b}for(var p=0;p<l;p++){var d=f(p),m=c[p]*Math.pow(o+a*d,-i);h[p]=m}return Re(h,n.shape)},t.prototype.LRNGrad=function(n,e,o,a,i,s,u){U(n,"LRNGrad");for(var c=n.shape[3],l=this.readSync(n.dataId),h=this.readSync(e.dataId),f=this.readSync(o.dataId),p=new Float32Array(n.size),d=n.size,m=0;m<d;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),y=m-v+Math.min(c,v+a+1),x=0,b=g;b<y;b++)x+=Math.pow(h[b],2);for(x=s*x+i,b=g;b<y;b++){var w=-2*s*u*h[b]*f[m]/x;m===b&&(w+=Math.pow(x,-u)),w*=l[m],p[b]+=w}}return Re(p,n.shape)},t.prototype.multinomial=function(n,e,o,a){U(n,"multinomial");for(var i=e?n:ho(n),s=i.shape[0],u=i.shape[1],c=wn([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),f=0;f<s;++f){var p=f*u,d=new Float32Array(u-1);d[0]=h[p];for(var m=1;m<d.length;++m)d[m]=d[m-1]+h[p+m];for(var v=rr(a.toString()),g=f*o,y=0;y<o;++y){var x=v();l[g+y]=d.length;for(var b=0;b<d.length;b++)if(x<d[b]){l[g+y]=b;break}}}return c},t.prototype.oneHot=function(n,e,o,a){U(n,"oneHot");var i=new Float32Array(n.size*e);i.fill(a);for(var s=this.readSync(n.dataId),u=0;u<n.size;++u)s[u]>=0&&s[u]<e&&(i[u*e+s[u]]=o);return je(i,[n.size,e],"int32")},t.prototype.nonMaxSuppression=function(n,e,o,a,i){return U(n,"nonMaxSuppression"),po(this.readSync(n.dataId),this.readSync(e.dataId),o,a,i)},t.prototype.fft=function(n){return this.fftBatch(n,!1)},t.prototype.ifft=function(n){return this.fftBatch(n,!0)},t.prototype.fftBatch=function(n,e){for(var o=n.shape[0],a=n.shape[1],i=nn(n.shape,"float32"),s=nn(n.shape,"float32"),u=Hn(n).as2D(o,a),c=Zn(n).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),f=c.slice([l,0],[1,a]),p=An(h,f),d=this.readSync(this.fftImpl(p,e).dataId),m=0;m<a;m++){var v=Ko(d,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return An(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(n,e){var o=n.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,e).as2D(n.shape[0],n.shape[1]);return e&&(i=An(Hn(i).div(Q(a)),Zn(i).div(Q(a)))),i}var s=this.readSync(n.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,a,e));return An(u.real,u.imag).as2D(n.shape[0],n.shape[1])},t.prototype.isExponentOf2=function(n){return(n&n-1)==0},t.prototype.fftRadix2=function(n,e,o){if(e===1)return n;var a=this.readSync(n.dataId),i=e/2,s=function(g){for(var y=Math.ceil(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=0;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}}(a),u=An(s.real,s.imag).as1D(),c=function(g){for(var y=Math.floor(g.length/4),x=new Float32Array(y),b=new Float32Array(y),w=2;w<g.length;w+=4)x[Math.floor(w/4)]=g[w],b[Math.floor(w/4)]=g[w+1];return{real:x,imag:b}}(a),l=An(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=function(g,y){for(var x=new Float32Array(g/2),b=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var R=(y?2:-2)*Math.PI*(w/g);x[w]=Math.cos(R),b[w]=Math.sin(R)}return{real:x,imag:b}}(e,o),f=An(h.real,h.imag).mul(l),p=u.add(f),d=u.sub(f),m=Hn(p).concat(Hn(d)),v=Zn(p).concat(Zn(d));return An(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(n,e,o){for(var a=new Float32Array(2*e),i=0;i<e;i++){for(var s=0,u=0,c=0;c<e;c++){var l=Xu(i*c,e,o),h=Ko(n,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=e,u/=e),Ku(a,s,u,i)}return a},t.prototype.depthToSpace=function(n,e,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(e>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+e});for(var a=n.shape[0],i=n.shape[1],s=n.shape[2],u=n.shape[3],c=i*e,l=s*e,h=u/(e*e),f=this.readSync(n.dataId),p=new Float32Array(a*c*l*h),d=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/e),y=v%e,x=0;x<l;++x)for(var b=Math.floor(x/e),w=(y*e+x%e)*h,R=0;R<h;++R){var A=R+w+u*(b+s*(g+i*m));p[d++]=f[A]}return Re(p,[a,c,l,h])},t.prototype.broadcastedBinaryOp=function(n,e,o,a){var i=an(n.shape,e.shape),s=nn(i,o),u=this.readSync(n.dataId),c=this.readSync(e.dataId),l=me(n.shape,i),h=me(e.shape,i),f=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;++p)f[p]=a(u[p%u.length],c[p%c.length]);else{var d=this.bufferSync(n),m=this.bufferSync(e),v=function(g){var y=s.indexToLoc(g),x=y.slice(-n.rank);l.forEach(function(A){return x[A]=0});var b=d.locToIndex(x),w=y.slice(-e.rank);h.forEach(function(A){return w[A]=0});var R=m.locToIndex(w);f[g]=a(u[b],c[R])};for(p=0;p<f.length;++p)v(p)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(n,e,o){var a=an(n.shape,e.shape),i=nn(a,"float32"),s=nn(a,"float32"),u=this.readSync(n.dataId),c=this.readSync(e.dataId),l=me(n.shape,a),h=me(e.shape,a),f=i.values,p=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;d++){var m=d%u.length,v=d%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);f[d]=g.real,p[d]=g.imag}else{var y=this.bufferSync(this.data.get(n.dataId).complexTensors.real),x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=function(w){var R=i.indexToLoc(w),A=R.slice(-n.rank);l.forEach(function(T){return A[T]=0});var k=y.locToIndex(A),I=R.slice(-e.rank);h.forEach(function(T){return I[T]=0});var S=x.locToIndex(I),F=o(u[2*k],u[2*k+1],c[2*S],c[2*S+1]);f[w]=F.real,p[w]=F.imag};for(d=0;d<f.length;d++)b(d)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(n,e,o){return si(n,e,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(n,e,o,a,i,s){for(var u=n.shape,c=u[0],l=u[1],h=u[2],f=u[3],p=e.shape[0],d=a[0],m=a[1],v=nn([p,d,m,f],"float32"),g=this.readSync(e.dataId),y=this.readSync(o.dataId),x=this.readSync(n.dataId),b=n.strides,w=v.strides,R=0;R<p;R++){var A=4*R,k=g[A],I=g[A+1],S=g[A+2],F=g[A+3],T=y[R];if(!(T>=c))for(var W=d>1?(S-k)*(l-1)/(d-1):0,L=m>1?(F-I)*(h-1)/(m-1):0,B=0;B<d;B++){var z=d>1?k*(l-1)+B*W:.5*(k+S)*(l-1);if(z<0||z>l-1)for(var V=0;V<m;V++)for(var P=0;P<f;P++){var G=P+V*w[2]+B*w[1]+R*w[0];v.values[G]=s}else if(i==="bilinear"){var H=Math.floor(z),q=Math.ceil(z),$=z-H;for(V=0;V<m;V++)if((un=m>1?I*(h-1)+V*L:.5*(I+F)*(h-1))<0||un>h-1)for(P=0;P<f;P++)G=P+V*w[2]+B*w[1]+R*w[0],v.values[G]=s;else{var J=Math.floor(un),tn=Math.ceil(un),rn=un-J;for(P=0;P<f;P++){var on=x[G=P+J*b[2]+H*b[1]+T*b[0]],cn=x[G=P+tn*b[2]+H*b[1]+T*b[0]],sn=x[G=P+J*b[2]+q*b[1]+T*b[0]],ln=on+(cn-on)*rn,En=sn+(x[G=P+tn*b[2]+q*b[1]+T*b[0]]-sn)*rn;G=P+V*w[2]+B*w[1]+R*w[0],v.values[G]=ln+(En-ln)*$}}}else for(V=0;V<m;++V){var un;if((un=m>1?I*(h-1)+V*L:.5*(I+F)*(h-1))<0||un>h-1)for(P=0;P<f;P++)G=P+V*w[2]+B*w[1]+R*w[0],v.values[G]=s;else{var dn=Math.round(un),fn=Math.round(z);for(P=0;P<f;P++){var xn=P+dn*b[2]+fn*b[1]+T*b[0],mn=P+V*w[2]+B*w[1]+R*w[0];v.values[mn]=x[xn]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(n,e,o,a){var i=Yt(0,n,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(n,e,o,h,c,u,s,l,a,!1)},t.prototype.gatherND=function(n,e){var o=e.shape,a=o[o.length-1],i=Qa(n,e),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Tn([],s,n.dtype);for(var h=new dt([u,c],n.dtype),f=this.readSync(e.dataId),p=this.readSync(n.dataId),d=0;d<u;d++){for(var m=[],v=0,g=0;g<a;g++){var y=f[d*a+g];v+=y*l[g],m.push(y)}if(v<0||v>=n.size/c)throw new Error("Invalid indices: "+m+" does not index into "+n.shape);for(var x=0;x<c;x++)h.values[d*c+x]=p[v*c+x]}return h.toTensor().reshape(s)},t.prototype.scatterND=function(n,e,o){var a=Yt(0,n,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=Q(0);return this.scatter(n,e,o,l,u,s,i,c,h,!0)},t.prototype.fill=function(n,e,o){var a=Lt(o=o||yt(e),j(n));return a.fill(e),N.makeTensor(a,n,o,this)},t.prototype.onesLike=function(n){if(n.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(n.shape,1,n.dtype)},t.prototype.zerosLike=function(n){var e=Lt(n.dtype,j(n.shape));return this.makeOutput(e,n.shape,n.dtype)},t.prototype.linspace=function(n,e,o){return ai(n,e,o)},t.prototype.scatter=function(n,e,o,a,i,s,u,c,l,h){var f=[a/i,i],p=this.readSync(n.dataId),d=this.readSync(e.dataId);if(a===0)return Tn([],o,e.dtype);var m=new dt(f,e.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],y=0,x=0;x<u;x++){var b=p[v*u+x];g.push(b),y+=b*c[x]}if(y<0||y>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)h?m.values[y*i+w]+=d[v*i+w]:m.values[y*i+w]=e.rank===0?d[0]:d[v*i+w]}return m.toTensor().reshape(o)},t}(ti);N.registerBackend("cpu",function(){return new Ip},1);for(var Tr=0,da=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,n=r.backend,e=r.attrs,o=t,a=o.boxes,i=o.scores,s=e,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=n;U(a,"NonMaxSuppressionWithScore");var p=vo(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,n=r.backend,e=t.x,o=n;U(e,"square");for(var a=o.data.get(e.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}},{kernelName:gt,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,n=r.backend,e=t,o=e.a,a=e.b,i=n;U([o,a],gt);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(f,p,d,m,v,g){var y=an(f,p),x=y.length,b=ee(y),w=pt(v,j(y)),R=f.length,A=p.length,k=ee(f),I=ee(p),S=me(f,y),F=me(p,y);if(S.length+F.length===0)for(var T=0;T<w.length;++T)w[T]=g(d[T%d.length],m[T%m.length]);else{var W=function(L){var B=Es(L,x,b),z=B.slice(-R);S.forEach(function(H){return z[H]=0});var V=Po(z,R,k),P=B.slice(-A);F.forEach(function(H){return P[H]=0});var G=Po(P,A,I);w[L]=g(d[V],m[G])};for(T=0;T<w.length;++T)W(T)}return[w,y]}(o.shape,a.shape,s,u,o.dtype,function(f,p){var d=f-p;return d*d}),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];Tr<da.length;Tr++)Da(da[Tr]);var Ue,kp=function(r){this.variableNames=["A"];var t=Fn(),n=r[0],e=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+e+".0, "+n+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},Sp=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Fn(),n=r[0],e=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+e+".0, "+n+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var Fr=0,va=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,n=r.backend,e=r.attrs,o=t.pixels,a=e.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,a];(s||i)&&(Ue==null&&(Ue=document.createElement("canvas").getContext("2d")),Ue.canvas.width=c,Ue.canvas.height=l,Ue.drawImage(o,0,0,c,l),o=Ue.canvas);var p=n.makeTensorInfo(h,"int32");n.texData.get(p.dataId).usage=zn.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(p.dataId),o);var d=M().getBool("WEBGL_PACK")?new Sp(f):new kp(f),m=n.runWebGLProgram(d,[p],"int32");return n.disposeData(p.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,n=r.backend,e=r.attrs;Gt("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=e,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=n,p=vo(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,n=r.backend,e=t.x,o=n,a=new en(e.shape,"return x * x;");return o.runWebGLProgram(a,[e],e.dtype)}},{kernelName:gt,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,n=r.backend,e=t,o=e.a,a=e.b,i=n,s=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new le("return (a - b) * (a - b);",o.shape,a.shape):new bn("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];Fr<va.length;Fr++)Da(va[Fr]);for(var _r=0,ma=[{kernelName:"Square",gradFunc:function(r,t){var n=t[0];return{x:function(){return r.mul(n.toFloat().mul(2))}}}},{kernelName:gt,gradFunc:function(r,t){var n=t[0],e=t[1],o=Q(2);return{a:function(){return Ke(r,Ke(o,Te(n,e)))},b:function(){return Ke(r,Ke(o,Te(e,n)))}}}}];_r<ma.length;_r++)fs(ma[_r]);var Ap=function(){function r(){}return r.prototype.fetch=function(t,n){return fetch(t,n)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+n);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,n){return new TextDecoder(n).decode(t)},r}();M().get("IS_BROWSER")&&M().setPlatform("browser",new Ap);var Or,Dp=function(){return require("node-fetch")},Np=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,n){return M().global.fetch!=null?M().global.fetch(t,n):(Or==null&&(Or=Dp()),Or(t,n))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+n);return this.textEncoder.encode(t)},r.prototype.decode=function(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)},r}();M().get("IS_NODE")&&M().setPlatform("node",new Np);var Qr={float32:4,int32:4,uint16:2,uint8:1,bool:1},er=4;function Zi(r,t){for(var n={},e=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=j(l),f=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=Qr[p.dtype],m=r.slice(e,e+h*d),v=p.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")f=Float32Array.from(v,function(R){return R*p.scale+p.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(v,function(R){return Math.round(R*p.scale+p.min)})}e+=h*d}else if(c==="string"){var g=j(s.shape);f=[];for(var y=0;y<g;y++){var x=new Uint32Array(r.slice(e,e+er))[0];e+=er;var b=new Uint8Array(r.slice(e,e+x));f.push(b),e+=x}}else{var w=Qr[c];if(m=r.slice(e,e+h*w),c==="float32")f=new Float32Array(m);else if(c==="int32")f=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(m)}e+=h*w}n[u]=Tn(f,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return n}function Tp(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,n=[];r.forEach(function(a){if(t+=a.byteLength,n.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var e=new Uint8Array(t),o=0;return n.forEach(function(a){e.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),e.buffer}var Jr=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ga(r){return Jr?Buffer.byteLength(r):new Blob([r]).size}function _o(r){var t=0;r.forEach(function(o){t+=o.byteLength});var n=new Uint8Array(t),e=0;return r.forEach(function(o){n.set(new Uint8Array(o),e),e+=o.byteLength}),n.buffer}function ya(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function kt(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:ga(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:ga(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var Gn=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,n){return r.getHandlers(t,"load",n)},r.getHandlers=function(t,n,e){var o=[];return(n==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,e);i!==null&&o.push(i)}),o},r}(),$e="://",ye=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,n){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith($e)&&(t=t.slice(0,t.indexOf($e))),E(t.length>0,function(){return"scheme must not be an empty string."});var e=r.getInstance();E(e.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),e.managers[t]=n},r.getManager=function(t){var n=this.getInstance().managers[t];if(n==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return n},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function Bt(r){if(r.indexOf($e)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+ye.getSchemes().join(","));return{scheme:r.split($e)[0],path:r.split($e)[1]}}function xa(r,t,n){return n===void 0&&(n=!1),K(this,void 0,void 0,function(){var e,o,a,i,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return E(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),E((e=Gn.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(e.length<2,function(){return"Copying failed because more than one ("+e.length+") load handlers for source URL "+r+"."}),o=e[0],E((a=Gn.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+e.length+") save handlers for destination URL "+t+"."}),i=a[0],s=Bt(r).scheme,u=Bt(r).path,c=s===Bt(r).scheme,[4,o.load()];case 1:return l=f.sent(),n&&c?[4,ye.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,i.save(l)];case 4:return h=f.sent(),!n||c?[3,6]:[4,ye.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var Ae="models_store",ge="model_info_store";function ns(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Zr(r){var t=r.result;t.createObjectStore(Ae,{keyPath:"modelPath"}),t.createObjectStore(ge,{keyPath:"modelPath"})}var Qe=function(){function r(t){if(this.indexedDB=ns(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,n){var e=this;return new Promise(function(o,a){var i=e.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Zr(i)},i.onsuccess=function(){var s=i.result;if(n==null){var u=s.transaction(Ae,"readonly"),c=u.objectStore(Ae).get(e.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+e.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=kt(n),f=s.transaction(ge,"readwrite"),p=f.objectStore(ge),d=p.put({modelPath:e.modelPath,modelArtifactsInfo:h});d.onsuccess=function(){var m=(l=s.transaction(Ae,"readwrite")).objectStore(Ae).put({modelPath:e.modelPath,modelArtifacts:n,modelArtifactsInfo:h});m.onsuccess=function(){return o({modelArtifactsInfo:h})},m.onerror=function(v){var g=(p=f.objectStore(ge)).delete(e.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(y){return s.close(),a(m.error)}}},d.onerror=function(m){return s.close(),a(d.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),ba=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Qe.URL_SCHEME)?(t=r.slice(Qe.URL_SCHEME.length),new Qe(t)):null;var t};Gn.registerSaveRouter(ba),Gn.registerLoadRouter(ba);var Fp=function(){function r(){this.indexedDB=ns()}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t=this;return X(this,function(n){return[2,new Promise(function(e,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Zr(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(ge,"readonly"),u=s.objectStore(ge).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}e(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var n=this;return X(this,function(e){var o;return t=(o=t).startsWith(Qe.URL_SCHEME)?o.slice(Qe.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=n.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Zr(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(ge,"readwrite"),h=l.objectStore(ge),f=h.get(t);f.onsuccess=function(){if(f.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var p=h.delete(t),d=function(){var m=(u=c.transaction(Ae,"readwrite")).objectStore(Ae).delete(t);m.onsuccess=function(){return a(f.result.modelArtifactsInfo)},m.onerror=function(v){return i(f.error)}};p.onsuccess=d,p.onerror=function(m){return d(),c.close(),i(f.error)}},f.onerror=function(p){return c.close(),i(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(M().getBool("IS_BROWSER"))try{ye.registerManager(Qe.URL_SCHEME,new Fp)}catch{}var he="/",qe="tensorflowjs_models",es="info",_p="model_topology",Op="weight_specs",Mp="weight_data",Bp="model_metadata";function ts(r){return{info:[qe,r,es].join(he),topology:[qe,r,_p].join(he),weightSpecs:[qe,r,Op].join(he),weightData:[qe,r,Mp].join(he),modelMetadata:[qe,r,Bp].join(he)}}function Pp(r){var t=r.split(he);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(he)}var Je=function(){function r(t){if(!M().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=ts(this.modelPath)}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var n,e,o;return X(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");n=JSON.stringify(t.modelTopology),e=JSON.stringify(t.weightSpecs),o=kt(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,e),this.LS.setItem(this.keys.weightData,function(i){if(Jr)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,n,e,o,a,i,s;return X(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(n={},(e=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(n.modelTopology=e,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(n.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,n.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return n.weightData=function(c){if(Jr){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),p=0;p<h.length;++p)f.set([h.charCodeAt(p)],p);return f.buffer}(s),[2,n]})})},r.URL_SCHEME="localstorage://",r}(),wa=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Je.URL_SCHEME)?(t=r.slice(Je.URL_SCHEME.length),new Je(t)):null;var t};Gn.registerSaveRouter(wa),Gn.registerLoadRouter(wa);var Lp=function(){function r(){E(M().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t,n,e,o,a,i;return X(this,function(s){for(t={},n=qe+he,e=he+es,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(n)&&a.endsWith(e)&&(i=Pp(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var n,e;return X(this,function(o){var a;if(t=(a=t).startsWith(Je.URL_SCHEME)?a.slice(Je.URL_SCHEME.length):a,n=ts(t),this.LS.getItem(n.info)==null)throw new Error("Cannot find model at path '"+t+"'");return e=JSON.parse(this.LS.getItem(n.info)),this.LS.removeItem(n.info),this.LS.removeItem(n.topology),this.LS.removeItem(n.weightSpecs),this.LS.removeItem(n.weightData),[2,e]})})},r}();if(M().getBool("IS_BROWSER"))try{ye.registerManager(Je.URL_SCHEME,new Lp)}catch{}var Wp="model",Up=".json",Vp=".weights.bin";function Ca(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var Mr=function(){function r(t){if(!M().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Wp),this.modelTopologyFileName=t+Up,this.weightDataFileName=t+Vp}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var n,e,o,a,i,s;return X(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return e=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Ca(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=n,[4,Ca(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:kt(t)}]}})})},r.URL_SCHEME="downloads://",r}(),zp=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,n,e=this;return X(this,function(o){return t=this.files[0],n=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){n.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=e.checkManifestAndWeightFiles(h,n)}catch(v){return void i(v)}var p=[],d=[],m=[];h.forEach(function(v){v.paths.forEach(function(g){d.push(g),m.push(null)}),p.push.apply(p,v.weights)}),h.forEach(function(v){v.paths.forEach(function(g){var y=new FileReader;y.onload=function(x){var b=x.target.result,w=d.indexOf(g);m[w]=b,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:p,weightData:_o(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(x){return i("Failed to weights data from file of path '"+g+"'.")},y.readAsArrayBuffer(f[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,n){for(var e=[],o=n.map(function(u){return ya(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=ya(u);if(e.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(e.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=n[o.indexOf(c)]});if(e.length!==n.length)throw new Error("Mismatch in the number of files in weights manifest ("+e.length+") and the number of weight files provided ("+n.length+").");return a},r}();function Ea(r,t,n,e){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(n=n??0,e=e??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=n+ ++o/r.length*(e-n);return t(s),i}),a}))}function rs(r,t){return K(this,void 0,void 0,function(){var n,e,o,a,i,s,u,c,l;return X(this,function(h){switch(h.label){case 0:return t==null&&(t={}),n=t.fetchFunc==null?M().platform.fetch:t.fetchFunc,e=r.map(function(f){return n(f,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(e)];case 1:return i=h.sent(),[3,4];case 2:return[4,Ea(e,t.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(f){return f.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,Ea(s,t.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function Ra(r){var t=this;return function(n,e,o){return e===void 0&&(e=""),K(t,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d;return X(this,function(m){switch(m.label){case 0:if(a=n.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],n.forEach(function(v,g){var y=0;v.weights.forEach(function(x){var b="quantization"in x?x.quantization.dtype:x.dtype,w=Qr[b]*j(x.shape),R=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:x,groupOffset:y,sizeBytes:w})};o!=null?o.forEach(function(A,k){A===x.name&&(R(),s[k]=!0)}):R(),u.push(x.name),y+=w})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,y){return g&&v.push(y),v},[]),h=[],l.forEach(function(v){n[v].paths.forEach(function(g){var y=e+(e.endsWith("/")?"":"/")+g;h.push(y)})}),[4,r(h)];case 1:return f=m.sent(),p={},d=0,l.forEach(function(v){for(var g=n[v].paths.length,y=0,x=0;x<g;x++)y+=f[d+x].byteLength;for(var b=new ArrayBuffer(y),w=new Uint8Array(b),R=0,A=0;A<g;A++){var k=new Uint8Array(f[d+A]);w.set(k,R),R+=k.byteLength}i[v].forEach(function(I){var S=Zi(b.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var F in S)p[F]=S[F]}),d+=g}),[2,p]}})})}}Gn.registerSaveRouter(function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Mr.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Mr(t)}(r.slice(Mr.URL_SCHEME.length)):null});var os=function(){function r(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,n.fetchFunc!=null?(E(typeof n.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=n.fetchFunc):this.fetch=M().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var n,e,o,a;return X(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,e=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:e},n.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,n)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:kt(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,n,e,o,a,i,s,u,c,l,h,f;return X(this,function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,t.json()];case 3:return n=p.sent(),[3,5];case 4:throw p.sent(),e="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",new Error(e);case 5:if(o=n.modelTopology,a=n.weightsManifest,i=n.generatedBy,s=n.convertedBy,u=n.format,c=n.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:f=p.sent(),l=f[0],h=f[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return K(this,void 0,void 0,function(){var n,e,o,a,i,s,u,c,l,h,f;return X(this,function(p){switch(p.label){case 0:for(n=Array.isArray(this.path)?this.path[1]:this.path,e=function(d){var m=d.lastIndexOf("/"),v=d.lastIndexOf("?"),g=d.substring(0,m),y=v>m?d.substring(v):"";return[g+"/",y]}(n),o=e[0],a=e[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach(function(d){d.paths.forEach(function(m){h.push(i+m+a)})}),[4,rs(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=p.sent(),[2,[s,_o(f)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function no(r){return r.match(os.URL_SCHEME_REGEX)!=null}var Ia=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(n){return no(n)}):no(r))?eo(r,{onProgress:t}):null};function eo(r,t){return new os(r,t)}Gn.registerSaveRouter(Ia),Gn.registerLoadRouter(Ia);var Br=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.modelArtifacts]})})},r}(),Gp=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(n){return[2,this.saveHandler(t)]})})},r}(),Zp=Object.freeze({browserFiles:function(r){return new zp(r)},browserHTTPRequest:function(r,t){return eo(r,t)},concatenateArrayBuffers:_o,decodeWeights:Zi,encodeWeights:function(r,t){return K(this,void 0,void 0,function(){var n,e,o,a,i,s=this;return X(this,function(u){switch(u.label){case 0:for(n=[],e=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var p=new Promise(function(d){return K(s,void 0,void 0,function(){var m,v,g,y,x,b,w;return X(this,function(R){switch(R.label){case 0:return[4,h.bytes()];case 1:for(m=R.sent(),v=m.reduce(function(A,k){return A+k.length},0)+er*m.length,g=new Uint8Array(v),y=0,x=0;x<m.length;x++)b=m[x],w=new Uint8Array(new Uint32Array([b.length]).buffer),g.set(w,y),y+=er,g.set(b,y),y+=b.length;return d(g),[2]}})})});e.push(p)}else e.push(h.data());t!=null&&(f.group=t),n.push(f)},i=0;i<o.length;++i)a(i);return[4,Promise.all(e)];case 1:return[2,{data:Tp(u.sent()),specs:n}]}})})},fromMemory:function(r,t,n,e){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Br(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Br({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Br({modelTopology:r,weightSpecs:t,weightData:n,trainingConfig:e}))},getLoadHandlers:function(r,t){return Gn.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:kt,getSaveHandlers:function(r){return Gn.getSaveHandlers(r)},http:eo,isHTTPScheme:no,loadWeights:function(r,t,n,e){return t===void 0&&(t=""),K(this,void 0,void 0,function(){return X(this,function(o){return[2,Ra(function(a){return rs(a,{requestInit:e})})(r,t,n)]})})},registerLoadRouter:function(r){return Gn.registerLoadRouter(r)},registerSaveRouter:function(r){return Gn.registerSaveRouter(r)},weightsLoaderFactory:Ra,withSaveHandler:function(r){return new Gp(r)},copyModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(n){return[2,xa(r,t,!1)]})})},listModels:function(){return K(this,void 0,void 0,function(){var r,t,n,e,o,a,i;return X(this,function(s){switch(s.label){case 0:r=ye.getSchemes(),t={},n=0,e=r,s.label=1;case 1:return n<e.length?(o=e[n],[4,ye.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+$e+i]=a[i];s.label=3;case 3:return n++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(n){return[2,xa(r,t,!0)]})})},removeModel:function(r){return K(this,void 0,void 0,function(){var t;return X(this,function(n){return t=Bt(r),[2,ye.getManager(t.scheme).removeModel(t.path)]})})}}),Ve;D({confusionMatrix_:function(r,t,n){var e=C(r,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");E(n==null||n>0&&Number.isInteger(n),function(){return"If provided, numClasses must be a positive integer, but got "+n}),E(e.rank===1,function(){return"Expected the rank of labels to be 1, but got "+e.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(e.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+e.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(n>0&&Number.isInteger(n),function(){return"numClasses is required to be a positive integer, but got "+n});var a=Xr(e.asType("int32"),n),i=Xr(o.asType("int32"),n);return a.transpose().matMul(i).asType("int32")}});var Hp=D({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n=!1,e=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)e=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Aa("FromPixels",N.backendName)!=null)return N.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:e||n?s=r.data:(a||o)&&(Ve==null&&(Ve=document.createElement("canvas").getContext("2d")),Ve.canvas.width=l,Ve.canvas.height=h,Ve.drawImage(r,0,0,l,h),s=Ve.getImageData(0,0,l,h).data),t===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*t);for(var p=0;p<f;p++)for(var d=0;d<t;++d)u[p*t+d]=s[4*p+d]}return za(u,[h,l,t],"int32")}}),nd=Object.freeze({toPixels:function(r,t){return K(this,void 0,void 0,function(){var n,e,o,a,i,s,u,c,l,h,f,p,d,m,v,g,y,x,b,w,R,A,k;return X(this,function(I){switch(I.label){case 0:if(n=C(r,"img","toPixels"),r instanceof On||(n=n.toInt()),n.rank!==2&&n.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+n.rank+".");if(e=n.shape.slice(0,2),o=e[0],a=e[1],(i=n.rank===2?1:n.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,n.data()];case 1:return s=I.sent(),u=n.min(),c=n.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),h=l[0],f=l[1],p=h[0],d=f[0],u.dispose(),c.dispose(),n.dtype==="float32"){if(p<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+d+"].")}else{if(n.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+n.dtype+". Please use float32 or int32 tensors.");if(p<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+d+"].")}for(m=n.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)y=void 0,x=void 0,b=void 0,w=void 0,i===1?(y=s[g]*m,x=s[g]*m,b=s[g]*m,w=255):i===3?(y=s[3*g]*m,x=s[3*g+1]*m,b=s[3*g+2]*m,w=255):i===4&&(y=s[4*g]*m,x=s[4*g+1]*m,b=s[4*g+2]*m,w=s[4*g+3]*m),v[(R=4*g)+0]=Math.round(y),v[R+1]=Math.round(x),v[R+2]=Math.round(b),v[R+3]=Math.round(w);return t!=null&&(t.width=a,t.height=o,A=t.getContext("2d"),k=new ImageData(v,a,o),A.putImageData(k,0,0)),n!==r&&n.dispose(),[2,v]}})})},fromPixels:Hp}),qp=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,n){return new t(n)},r}(),Kp=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function Oe(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Kp.register(r)}var Me=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return Kn(t,r),t.prototype.minimize=function(n,e,o){e===void 0&&(e=!1);var a=this.computeGradients(n,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Bn(s),e?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(n,e){return Hu(n,e)},t.prototype.dispose=function(){this.iterations_!=null&&Bn(this.iterations_)},t.prototype.saveIterations=function(){return K(this,void 0,void 0,function(){return X(this,function(n){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:Q(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(n){return K(this,void 0,void 0,function(){var e;return X(this,function(o){switch(o.label){case 0:return e=this,[4,n[0].tensor.data()];case 1:return e.iterations_=o.sent()[0],[2,n.slice(1)]}})})},t}(qp);Object.defineProperty(Me,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Xp=function(r){function t(n,e,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=n,a.rho=e,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=N.backend.epsilon()),a}return Kn(t,r),t.prototype.applyGradients=function(n){var e=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=N.registeredVariables[o];e.accumulatedGrads[a]==null&&(e.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:Rn(function(){return hn(i).variable(!1)})}),e.accumulatedUpdates[a]==null&&(e.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:Rn(function(){return hn(i).variable(!1)})});var s=Array.isArray(n)?n[a].tensor:n[o];if(s!=null){var u=e.accumulatedGrads[a].variable,c=e.accumulatedUpdates[a].variable;Rn(function(){var l=u.mul(e.rho).add(s.square().mul(1-e.rho)),h=c.add(e.epsilon).sqrt().div(u.add(e.epsilon).sqrt()).mul(s),f=c.mul(e.rho).add(h.square().mul(1-e.rho));u.assign(l),c.assign(f);var p=h.mul(-e.learningRate).add(i);i.assign(p)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Bn(this.accumulatedGrads.map(function(n){return n.variable})),Bn(this.accumulatedUpdates.map(function(n){return n.variable})))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var n;return X(this,function(e){switch(e.label){case 0:return n=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){var e;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(n)];case 1:return n=o.sent(),e=n.length/2,this.accumulatedGrads=n.slice(0,e).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=n.slice(e,2*e).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(n,e){return new n(e.learningRate,e.rho,e.epsilon)},t.className="Adadelta",t}(Me);Oe(Xp);var jp=function(r){function t(n,e){e===void 0&&(e=.1);var o=r.call(this)||this;return o.learningRate=n,o.initialAccumulatorValue=e,o.accumulatedGrads=[],o}return Kn(t,r),t.prototype.applyGradients=function(n){var e=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=N.registeredVariables[o];e.accumulatedGrads[a]==null&&(e.accumulatedGrads[a]={originalName:o+"/accumulator",variable:Rn(function(){return ao(i.shape,e.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(n)?n[a].tensor:n[o];if(s!=null){var u=e.accumulatedGrads[a].variable;Rn(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(N.backend.epsilon()).sqrt()).mul(-e.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Bn(this.accumulatedGrads.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(this.accumulatedGrads.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.extractIterations(n)];case 1:return n=e.sent(),this.accumulatedGrads=n.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(n,e){return new n(e.learningRate,e.initialAccumulatorValue)},t.className="Adagrad",t}(Me);Oe(jp);var Yp=function(r){function t(n,e,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=n,i.beta1=e,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],Rn(function(){i.accBeta1=Q(e).variable(),i.accBeta2=Q(o).variable()}),a==null&&(i.epsilon=N.backend.epsilon()),i}return Kn(t,r),t.prototype.applyGradients=function(n){var e=this,o=Array.isArray(n)?n.map(function(a){return a.name}):Object.keys(n);Rn(function(){var a=Te(1,e.accBeta1),i=Te(1,e.accBeta2);o.forEach(function(s,u){var c=N.registeredVariables[s];e.accumulatedFirstMoment[u]==null&&(e.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Rn(function(){return hn(c).variable(!1)})}),e.accumulatedSecondMoment[u]==null&&(e.accumulatedSecondMoment[u]={originalName:s+"/v",variable:Rn(function(){return hn(c).variable(!1)})});var l=Array.isArray(n)?n[u].tensor:n[s];if(l!=null){var h=e.accumulatedFirstMoment[u].variable,f=e.accumulatedSecondMoment[u].variable,p=h.mul(e.beta1).add(l.mul(1-e.beta1)),d=f.mul(e.beta2).add(l.square().mul(1-e.beta2)),m=p.div(a),v=d.div(i);h.assign(p),f.assign(d);var g=m.div(v.sqrt().add(e.epsilon)).mul(-e.learningRate).add(c);c.assign(g)}}),e.accBeta1.assign(e.accBeta1.mul(e.beta1)),e.accBeta2.assign(e.accBeta2.mul(e.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Bn(this.accumulatedFirstMoment.map(function(n){return n.variable})),this.accumulatedSecondMoment!=null&&Bn(this.accumulatedSecondMoment.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var n;return X(this,function(e){switch(e.label){case 0:return n=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){var e,o=this;return X(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(n)];case 1:return n=a.sent(),Rn(function(){o.accBeta1.assign(Zt(o.beta1,o.iterations_+1)),o.accBeta2.assign(Zt(o.beta2,o.iterations_+1))}),e=n.length/2,this.accumulatedFirstMoment=n.slice(0,e).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=n.slice(e,2*e).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(n,e){return new n(e.learningRate,e.beta1,e.beta2,e.epsilon)},t.className="Adam",t}(Me);Oe(Yp);var $p=function(r){function t(n,e,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=n,s.beta1=e,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],Rn(function(){s.iteration=Q(0).variable(),s.accBeta1=Q(e).variable()}),a==null&&(s.epsilon=N.backend.epsilon()),s}return Kn(t,r),t.prototype.applyGradients=function(n){var e=this,o=Array.isArray(n)?n.map(function(a){return a.name}):Object.keys(n);Rn(function(){var a=Te(1,e.accBeta1),i=bo(-e.learningRate,e.iteration.mul(e.decay).add(1));o.forEach(function(s,u){var c=N.registeredVariables[s];e.accumulatedFirstMoment[u]==null&&(e.accumulatedFirstMoment[u]={originalName:s+"/m",variable:hn(c).variable(!1)}),e.accumulatedWeightedInfNorm[u]==null&&(e.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:hn(c).variable(!1)});var l=Array.isArray(n)?n[u].tensor:n[s];if(l!=null){var h=e.accumulatedFirstMoment[u].variable,f=e.accumulatedWeightedInfNorm[u].variable,p=h.mul(e.beta1).add(l.mul(1-e.beta1)),d=f.mul(e.beta2),m=l.abs(),v=d.maximum(m);h.assign(p),f.assign(v);var g=i.div(a).mul(p.div(v.add(e.epsilon))).add(c);c.assign(g)}}),e.iteration.assign(e.iteration.add(1)),e.accBeta1.assign(e.accBeta1.mul(e.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Bn(this.accumulatedFirstMoment.map(function(n){return n.variable})),this.accumulatedWeightedInfNorm!=null&&Bn(this.accumulatedWeightedInfNorm.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(n,e){return new n(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)},t.className="Adamax",t}(Me);Oe($p);var as=function(r){function t(n){var e=r.call(this)||this;return e.learningRate=n,e.setLearningRate(n),e}return Kn(t,r),t.prototype.applyGradients=function(n){var e=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=Array.isArray(n)?n[a].tensor:n[o];if(i!=null){var s=N.registeredVariables[o];Rn(function(){var u=e.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(n){this.learningRate=n,this.c!=null&&this.c.dispose(),this.c=ou(Q(-n))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()]]}})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.extractIterations(n)];case 1:if((n=e.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(n,e){return new n(e.learningRate)},t.className="SGD",t}(Me);Oe(as);var Qp=function(r){function t(n,e,o){o===void 0&&(o=!1);var a=r.call(this,n)||this;return a.learningRate=n,a.momentum=e,a.useNesterov=o,a.accumulations=[],a.m=Q(a.momentum),a}return Kn(t,r),t.prototype.applyGradients=function(n){var e=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=N.registeredVariables[o];e.accumulations[a]==null&&(e.accumulations[a]={originalName:o+"/momentum",variable:Rn(function(){return hn(i).variable(!1)})});var s=e.accumulations[a].variable,u=Array.isArray(n)?n[a].tensor:n[o];u!=null&&Rn(function(){var c,l=e.m.mul(s).add(u);c=e.useNesterov?e.c.mul(u.add(l.mul(e.m))).add(i):e.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Bn(this.accumulations.map(function(n){return n.variable}))},t.prototype.setMomentum=function(n){this.momentum=n},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(this.accumulations.map(function(e){return{name:e.originalName,tensor:e.variable}}))]}})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.extractIterations(n)];case 1:return n=e.sent(),this.accumulations=n.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(n,e){return new n(e.learningRate,e.momentum,e.useNesterov)},t.className="Momentum",t}(as);Oe(Qp);var Jp=function(r){function t(n,e,o,a,i){e===void 0&&(e=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=n,s.decay=e,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=N.backend.epsilon()),n==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Kn(t,r),t.prototype.applyGradients=function(n){var e=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,a){var i=N.registeredVariables[o];e.accumulatedMeanSquares[a]==null&&(e.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:Rn(function(){return hn(i).variable(!1)})}),e.accumulatedMoments[a]==null&&(e.accumulatedMoments[a]={originalName:o+"/momentum",variable:Rn(function(){return hn(i).variable(!1)})}),e.accumulatedMeanGrads[a]==null&&e.centered&&(e.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:Rn(function(){return hn(i).variable(!1)})});var s=Array.isArray(n)?n[a].tensor:n[o];if(s!=null){var u=e.accumulatedMeanSquares[a].variable,c=e.accumulatedMoments[a].variable;Rn(function(){var l=u.mul(e.decay).add(s.square().mul(1-e.decay));if(e.centered){var h=e.accumulatedMeanGrads[a].variable,f=h.mul(e.decay).add(s.mul(1-e.decay)),p=c.mul(e.momentum).add(s.mul(e.learningRate).div(l.sub(f.square().add(e.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(p);var d=i.sub(p);i.assign(d)}else{var m=u.mul(e.decay).add(s.square().mul(1-e.decay));p=c.mul(e.momentum).add(s.mul(e.learningRate).div(m.add(e.epsilon).sqrt())),u.assign(m),c.assign(p),d=i.sub(p),i.assign(d)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Bn(this.accumulatedMeanSquares.map(function(n){return n.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Bn(this.accumulatedMeanGrads.map(function(n){return n.variable})),this.accumulatedMoments!=null&&Bn(this.accumulatedMoments.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var n;return X(this,function(e){switch(e.label){case 0:return n=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&n.push.apply(n,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return K(this,void 0,void 0,function(){var e;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(n)];case 1:return n=o.sent(),e=this.centered?n.length/3:n.length/2,this.accumulatedMeanSquares=n.slice(0,e).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=n.slice(e,2*e).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=n.slice(2*e,3*e).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(n,e){return new n(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)},t.className="RMSProp",t}(Me);Oe(Jp);On.prototype.squaredDifference=function(r){return wi(this,r)},O=Rp;export{Ki as B,Te as C,Tn as F,wn as G,ao as H,ph as I,uf as J,Re as L,et as M,xp as O,De as P,Ut as S,co as U,Lf as W,te as Y,Rn as Z,je as a,Q as b,Wi as c,Ke as d,Zp as e,yf as f,ho as g,gf as h,nd as i,za as j,eh as k,Ro as l,Dh as m,uo as n,ht as o,xe as p,Rt as q,rt as r,bo as s,wt as t,Ci as u,ah as v,On as w,Rf as x,ve as y,Tf as z};
