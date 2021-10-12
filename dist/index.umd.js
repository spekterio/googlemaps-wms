!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("query-string")):"function"==typeof define&&define.amd?define(["exports","query-string"],n):n(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.ogc={}),t.queryString)}(this,(function(t,n){"use strict";var e=function(t){try{return!!t()}catch(t){return!0}},r=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},i=function(t){return Object(o(t))},u={}.hasOwnProperty,c=Object.hasOwn||function(t,n){return u.call(i(t),n)},a=Function.prototype,f=r&&Object.getOwnPropertyDescriptor,l=c(a,"name"),s={EXISTS:l,PROPER:l&&"something"===function(){}.name,CONFIGURABLE:l&&(!r||r&&f(a,"name").configurable)},p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(t,n){return t(n={exports:{}},n.exports),n.exports}var y,b,v=function(t){return t&&t.Math==Math&&t},m=v("object"==typeof globalThis&&globalThis)||v("object"==typeof window&&window)||v("object"==typeof self&&self)||v("object"==typeof p&&p)||function(){return this}()||Function("return this")(),h=function(t){return"function"==typeof t},d=function(t){return"object"==typeof t?null!==t:h(t)},S=m.document,j=d(S)&&d(S.createElement),O=!r&&!e((function(){return 7!=Object.defineProperty((t="div",j?S.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),w=function(t){if(d(t))return t;throw TypeError(String(t)+" is not an object")},T=function(t){return h(t)?t:void 0},E=function(t,n){return arguments.length<2?T(m[t]):m[t]&&m[t][n]},P=E("navigator","userAgent")||"",x=m.process,F=m.Deno,A=x&&x.versions||F&&F.version,M=A&&A.v8;M?b=(y=M.split("."))[0]<4?1:y[0]+y[1]:P&&(!(y=P.match(/Edge\/(\d+)/))||y[1]>=74)&&(y=P.match(/Chrome\/(\d+)/))&&(b=y[1]);var I=b&&+b,z=!!Object.getOwnPropertySymbols&&!e((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&I&&I<41})),k=z&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,G=k?function(t){return"symbol"==typeof t}:function(t){var n=E("Symbol");return h(n)&&Object(t)instanceof n},_=function(t){if(h(t))return t;throw TypeError(function(t){try{return String(t)}catch(t){return"Object"}}(t)+" is not a function")},q=function(t,n){try{Object.defineProperty(m,t,{value:n,configurable:!0,writable:!0})}catch(e){m[t]=n}return n},C="__core-js_shared__",L=m[C]||q(C,{}),N=g((function(t){(t.exports=function(t,n){return L[t]||(L[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.18.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),R=0,D=Math.random(),B=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++R+D).toString(36)},U=N("wks"),W=m.Symbol,Z=k?W:W&&W.withoutSetter||B,X=function(t){return c(U,t)&&(z||"string"==typeof U[t])||(z&&c(W,t)?U[t]=W[t]:U[t]=Z("Symbol."+t)),U[t]},K=X("toPrimitive"),V=function(t,n){if(!d(t)||G(t))return t;var e,r,o=null==(e=t[K])?void 0:_(e);if(o){if(void 0===n&&(n="default"),r=o.call(t,n),!d(r)||G(r))return r;throw TypeError("Can't convert object to primitive value")}return void 0===n&&(n="number"),function(t,n){var e,r;if("string"===n&&h(e=t.toString)&&!d(r=e.call(t)))return r;if(h(e=t.valueOf)&&!d(r=e.call(t)))return r;if("string"!==n&&h(e=t.toString)&&!d(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}(t,n)},Y=function(t){var n=V(t,"string");return G(n)?n:String(n)},$=Object.defineProperty,H={f:r?$:function(t,n,e){if(w(t),n=Y(n),w(e),O)try{return $(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},J=s.EXISTS,Q=H.f,tt=Function.prototype,nt=tt.toString,et=/^\s*function ([^ (]*)/;r&&!J&&Q(tt,"name",{configurable:!0,get:function(){try{return nt.call(this).match(et)[1]}catch(t){return""}}});var rt={}.propertyIsEnumerable,ot=Object.getOwnPropertyDescriptor,it={f:ot&&!rt.call({1:2},1)?function(t){var n=ot(this,t);return!!n&&n.enumerable}:rt},ut=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}},ct={}.toString,at=function(t){return ct.call(t).slice(8,-1)},ft="".split,lt=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==at(t)?ft.call(t,""):Object(t)}:Object,st=function(t){return lt(o(t))},pt=Object.getOwnPropertyDescriptor,gt={f:r?pt:function(t,n){if(t=st(t),n=Y(n),O)try{return pt(t,n)}catch(t){}if(c(t,n))return ut(!it.f.call(t,n),t[n])}},yt=r?function(t,n,e){return H.f(t,n,ut(1,e))}:function(t,n,e){return t[n]=e,t},bt=Function.toString;h(L.inspectSource)||(L.inspectSource=function(t){return bt.call(t)});var vt,mt,ht,dt,St=L.inspectSource,jt=m.WeakMap,Ot=h(jt)&&/native code/.test(St(jt)),wt=N("keys"),Tt={},Et="Object already initialized",Pt=m.WeakMap;if(Ot||L.state){var xt=L.state||(L.state=new Pt),Ft=xt.get,At=xt.has,Mt=xt.set;vt=function(t,n){if(At.call(xt,t))throw new TypeError(Et);return n.facade=t,Mt.call(xt,t,n),n},mt=function(t){return Ft.call(xt,t)||{}},ht=function(t){return At.call(xt,t)}}else{var It=wt[dt="state"]||(wt[dt]=B(dt));Tt[It]=!0,vt=function(t,n){if(c(t,It))throw new TypeError(Et);return n.facade=t,yt(t,It,n),n},mt=function(t){return c(t,It)?t[It]:{}},ht=function(t){return c(t,It)}}var zt={set:vt,get:mt,has:ht,enforce:function(t){return ht(t)?mt(t):vt(t,{})},getterFor:function(t){return function(n){var e;if(!d(n)||(e=mt(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},kt=g((function(t){var n=s.CONFIGURABLE,e=zt.get,r=zt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,u){var a,f=!!u&&!!u.unsafe,l=!!u&&!!u.enumerable,s=!!u&&!!u.noTargetGet,p=u&&void 0!==u.name?u.name:e;h(i)&&("Symbol("===String(p).slice(0,7)&&(p="["+String(p).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!c(i,"name")||n&&i.name!==p)&&yt(i,"name",p),(a=r(i)).source||(a.source=o.join("string"==typeof p?p:""))),t!==m?(f?!s&&t[e]&&(l=!0):delete t[e],l?t[e]=i:yt(t,e,i)):l?t[e]=i:q(e,i)})(Function.prototype,"toString",(function(){return h(this)&&e(this).source||St(this)}))})),Gt=Math.ceil,_t=Math.floor,qt=function(t){var n=+t;return n!=n||0===n?0:(n>0?_t:Gt)(n)},Ct=Math.max,Lt=Math.min,Nt=function(t,n){var e=qt(t);return e<0?Ct(e+n,0):Lt(e,n)},Rt=Math.min,Dt=function(t){return(n=t.length)>0?Rt(qt(n),9007199254740991):0;var n},Bt=function(t){return function(n,e,r){var o,i=st(n),u=Dt(i),c=Nt(r,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},Ut={includes:Bt(!0),indexOf:Bt(!1)}.indexOf,Wt=function(t,n){var e,r=st(t),o=0,i=[];for(e in r)!c(Tt,e)&&c(r,e)&&i.push(e);for(;n.length>o;)c(r,e=n[o++])&&(~Ut(i,e)||i.push(e));return i},Zt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Xt=Zt.concat("length","prototype"),Kt={f:Object.getOwnPropertyNames||function(t){return Wt(t,Xt)}},Vt={f:Object.getOwnPropertySymbols},Yt=E("Reflect","ownKeys")||function(t){var n=Kt.f(w(t)),e=Vt.f;return e?n.concat(e(t)):n},$t=function(t,n){for(var e=Yt(n),r=H.f,o=gt.f,i=0;i<e.length;i++){var u=e[i];c(t,u)||r(t,u,o(n,u))}},Ht=/#|\.prototype\./,Jt=function(t,n){var r=tn[Qt(t)];return r==en||r!=nn&&(h(n)?e(n):!!n)},Qt=Jt.normalize=function(t){return String(t).replace(Ht,".").toLowerCase()},tn=Jt.data={},nn=Jt.NATIVE="N",en=Jt.POLYFILL="P",rn=Jt,on=gt.f,un=function(t,n){var e,r,o,i,u,c=t.target,a=t.global,f=t.stat;if(e=a?m:f?m[c]||q(c,{}):(m[c]||{}).prototype)for(r in n){if(i=n[r],o=t.noTargetGet?(u=on(e,r))&&u.value:e[r],!rn(a?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;$t(i,o)}(t.sham||o&&o.sham)&&yt(i,"sham",!0),kt(e,r,i,t)}},cn=Object.keys||function(t){return Wt(t,Zt)},an=Object.assign,fn=Object.defineProperty,ln=!an||e((function(){if(r&&1!==an({b:1},an(fn({},"a",{enumerable:!0,get:function(){fn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach((function(t){n[t]=t})),7!=an({},t)[e]||cn(an({},n)).join("")!=o}))?function(t,n){for(var e=i(t),o=arguments.length,u=1,c=Vt.f,a=it.f;o>u;)for(var f,l=lt(arguments[u++]),s=c?cn(l).concat(c(l)):cn(l),p=s.length,g=0;p>g;)f=s[g++],r&&!a.call(l,f)||(e[f]=l[f]);return e}:an;un({target:"Object",stat:!0,forced:Object.assign!==ln},{assign:ln});var sn=Array.isArray||function(t){return"Array"==at(t)},pn={};pn[X("toStringTag")]="z";var gn,yn="[object z]"===String(pn),bn=X("toStringTag"),vn="Arguments"==at(function(){return arguments}()),mn=yn?at:function(t){var n,e,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),bn))?e:vn?at(n):"Object"==(r=at(n))&&h(n.callee)?"Arguments":r},hn=[],dn=E("Reflect","construct"),Sn=/^\s*(?:class|function)\b/,jn=Sn.exec,On=!Sn.exec((function(){})),wn=function(t){if(!h(t))return!1;try{return dn(Object,hn,t),!0}catch(t){return!1}},Tn=!dn||e((function(){var t;return wn(wn.call)||!wn(Object)||!wn((function(){t=!0}))||t}))?function(t){if(!h(t))return!1;switch(mn(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return On||!!jn.call(Sn,St(t))}:wn,En=function(t,n,e){var r=Y(n);r in t?H.f(t,r,ut(0,e)):t[r]=e},Pn=X("species"),xn=(gn="slice",I>=51||!e((function(){var t=[];return(t.constructor={})[Pn]=function(){return{foo:1}},1!==t[gn](Boolean).foo}))),Fn=X("species"),An=[].slice,Mn=Math.max;un({target:"Array",proto:!0,forced:!xn},{slice:function(t,n){var e,r,o,i=st(this),u=Dt(i),c=Nt(t,u),a=Nt(void 0===n?u:n,u);if(sn(i)&&(e=i.constructor,(Tn(e)&&(e===Array||sn(e.prototype))||d(e)&&null===(e=e[Fn]))&&(e=void 0),e===Array||void 0===e))return An.call(i,c,a);for(r=new(void 0===e?Array:e)(Mn(a-c,0)),o=0;c<a;c++,o++)c in i&&En(r,o,i[c]);return r.length=o,r}});var In=[].join,zn=lt!=Object,kn=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}("join",",");un({target:"Array",proto:!0,forced:zn||!kn},{join:function(t){return In.call(st(this),void 0===t?",":t)}});var Gn={request:"GetMap",service:"WMS",srs:"EPSG:3857"},_n=20037508.34789244,qn=-_n,Cn=_n;function Ln(t,n,e){var r=40075016.69578488/Math.pow(2,e);return[qn+t*r,Cn-(n+1)*r,qn+(t+1)*r,Cn-n*r]}t.WmsMapType=function(t){var e=t.url,r=t.layers,o=t.styles,i=void 0===o?"":o,u=t.bgcolor,c=void 0===u?"0xFFFFFF":u,a=t.version,f=void 0===a?"1.1.1":a,l=t.transparent,s=void 0===l||l,p=t.format,g=void 0===p?"image/png":p,y=t.outline,b=void 0!==y&&y,v=t.name,m=t.alt,h=t.maxZoom,d=t.minZoom,S=t.opacity,j=new google.maps.Size(256,256),O=Object.assign({layers:r,styles:i,version:f,transparent:s,bgcolor:c,format:g,outline:b,width:j.width,height:j.height},Gn);"?"!==e.slice(-1)&&(e+="?");return new google.maps.ImageMapType({getTileUrl:function(t,r){return e+n.stringify(Object.assign({bbox:Ln(t.x,t.y,r).join(",")},O))},name:v,alt:m,opacity:S,maxZoom:h,minZoom:d,tileSize:j})},t.xyzToBounds=Ln,Object.defineProperty(t,"__esModule",{value:!0})}));
