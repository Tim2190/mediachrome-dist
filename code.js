// mediachrome 0.6.9 (2de9d62) — собрано автоматически, не править
const __mcFileUrl = require('node:url').pathToFileURL(process.execPath).href;
var yg=Object.create;var ho=Object.defineProperty;var vg=Object.getOwnPropertyDescriptor;var kg=Object.getOwnPropertyNames;var xg=Object.getPrototypeOf,Sg=Object.prototype.hasOwnProperty;var i=(e,t)=>ho(e,"name",{value:t,configurable:!0});var ee=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var ms=(e,t)=>{for(var n in t)ho(e,n,{get:t[n],enumerable:!0})},Lg=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of kg(t))!Sg.call(e,s)&&s!==n&&ho(e,s,{get:()=>t[s],enumerable:!(r=vg(t,s))||r.enumerable});return e};var Cn=(e,t,n)=>(n=e!=null?yg(xg(e)):{},Lg(t||!e||!e.__esModule?ho(n,"default",{value:e,enumerable:!0}):n,e));var kd={};ms(kd,{DATA_ROOT:()=>Te,USERDATA_CHROMIUM_DIR:()=>pi,USERDATA_DIR:()=>ui,migrateLegacyData:()=>hi});function Tg(){if(process.env.MEDIACHROME_DATA)return process.env.MEDIACHROME_DATA;let e=process.env.APPDATA||(di.default.homedir?di.default.homedir():vd);return process.env.APPDATA?(0,Rn.join)(e,"mediachrome"):(0,Rn.join)(e,".mediachrome")}function hi(e){try{let t=(0,Rn.join)(vd,"data"),n=(0,Nn.existsSync)((0,Rn.join)(Te,"projects"))||(0,Nn.existsSync)((0,Rn.join)(Te,"site-memory.json"));if((0,Nn.existsSync)(t)&&!n&&(0,Nn.readdirSync)(t).length)return e(t,Te),!0}catch{}return!1}var di,Rn,Nn,bd,yd,vd,Te,ui,pi,vt=ee(()=>{di=Cn(require("node:os"),1),Rn=require("node:path"),Nn=require("node:fs"),bd=require("node:url"),yd=require("node:path"),vd=(0,yd.dirname)((0,bd.fileURLToPath)(__mcFileUrl));i(Tg,"resolveRoot");Te=Tg(),ui=(0,Rn.join)(Te,".userdata"),pi=(0,Rn.join)(Te,".userdata-chromium");try{(0,Nn.mkdirSync)(Te,{recursive:!0})}catch{}i(hi,"migrateLegacyData")});function mo(e,t){let n=i(o=>String(o||"0").split(/[^\d]+/).filter(a=>a!=="").map(Number),"p"),r=n(e),s=n(t);for(let o=0;o<Math.max(r.length,s.length);o++){let a=(r[o]||0)-(s[o]||0);if(a)return a<0?-1:1}return 0}function Dg(e,t){if(!Jn)return{ok:!1,why:"подпись кода не настроена — лёгкие обновления выключены"};let n=(0,Tr.createHash)("sha256").update(e).digest("hex");if(t&&t.sha256&&n!==t.sha256)return{ok:!1,why:"файл не совпал с отпечатком из витрины — возможно, скачался не целиком"};let r;try{r=(0,Tr.createPublicKey)({key:Buffer.from(Jn,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ"}}let s=!1;try{let o=Buffer.from(String(t&&t.sig||"").replace(/-/g,"+").replace(/_/g,"/"),"base64");s=o.length>0&&(0,Tr.verify)(null,e,r,o)}catch{s=!1}return s?{ok:!0,why:"",sha256:n}:{ok:!1,why:"подпись не сошлась — файл не от разработчика или повреждён"}}function Sd(e=$t()){let t=Jn?e.active:null;if(!t||!t.version||!t.file)return{use:!1,why:"none",version:""};if((e.bad||{})[t.version])return{use:!1,why:"bad",version:t.version};if(!(0,tt.existsSync)(t.file))return{use:!1,why:"gone",version:t.version};let n=fi();return n&&t.minExe&&mo(n,t.minExe)<0?{use:!1,why:"needExe",version:t.version,minExe:t.minExe,exe:n}:n&&mo(t.version,n)<=0?{use:!1,why:"stale",version:t.version,exe:n}:{use:!0,why:"",version:t.version,file:t.file,minExe:t.minExe||""}}function Ld(){if(!Jn)return null;let e=$t(),t=e.active;if(!t||!t.version||!t.file)return null;if(e.pending&&e.pending.version===t.version){let r=e.bad||{};r[t.version]={at:Date.now(),why:"программа не дошла до запуска"};try{(0,tt.renameSync)(t.file,t.file+".broken")}catch{try{(0,tt.rmSync)(t.file,{force:!0})}catch{}}return xt({...e,active:null,pending:null,bad:r,lastFail:{version:t.version,at:Date.now()}}),null}let n=Sd(e);if(!n.use){if(n.why==="stale"){try{(0,tt.rmSync)(t.file,{force:!0})}catch{}xt({...e,active:null,pending:null})}else n.why==="gone"&&xt({...e,active:null});return null}return xt({...e,pending:{version:t.version,at:Date.now()}}),{path:t.file,version:t.version}}function Td(){let e=$t();if(!e.pending)return;let t=process.env.MC_CODE_RUNNING||"";if(e.pending.version!==t)return;let n=e.okVersions||{};n[e.pending.version]=Date.now(),xt({...e,pending:null,okVersions:n})}function Md(e,t){let n=$t(),r=n.bad||{};r[e]={at:Date.now(),why:String(t||"")};let s=n.active;if(s&&s.version===e&&s.file)try{(0,tt.renameSync)(s.file,s.file+".broken")}catch{try{(0,tt.rmSync)(s.file,{force:!0})}catch{}}xt({...n,active:null,pending:null,bad:r,lastFail:{version:e,at:Date.now(),why:String(t||"")}})}function kt(){let e=$t(),t=Jn?e.active:null,n=Sd(e),r=process.env.MC_CODE_RUNNING||"";return{enabled:!!Jn,running:r,exe:fi(),ready:!!(n.use&&n.version!==r),readyVersion:n.use?n.version:"",needExe:n.why==="needExe"?{version:n.version,minExe:n.minExe}:null,notes:t&&t.notes||"",lastFail:e.lastFail||null,checkedAt:e.checkedAt||0,err:e.err||""}}async function Cg(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{signal:t.signal,headers:{"Cache-Control":"no-cache"}});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json()}finally{clearTimeout(n)}}async function mi(e={}){if(!Jn)return kt();let t=$t();if(!e.force&&t.checkedAt&&Date.now()-t.checkedAt<Ag)return kt();let n=null;try{n=await Cg(Mg)}catch(p){return xt({...t,checkedAt:Date.now(),err:String(p&&p.message||p)}),kt()}if(xt({...t,checkedAt:Date.now(),err:""}),!n||!n.version||!n.url)return kt();let r=fi(),s=t.active&&t.active.version||r;if(s&&mo(n.version,s)<=0||(t.bad||{})[n.version])return kt();if(r&&n.minExe&&mo(r,n.minExe)<0)return xt({...$t(),needFull:{version:n.version,minExe:n.minExe}}),kt();let o;try{let p=new AbortController,f=setTimeout(()=>p.abort(),6e4);try{let u=await fetch(n.url,{signal:p.signal});if(!u.ok)throw new Error("HTTP "+u.status);o=Buffer.from(await u.arrayBuffer())}finally{clearTimeout(f)}}catch(p){return xt({...$t(),err:String(p&&p.message||p)}),kt()}let a=Dg(o,n);if(!a.ok)return xt({...$t(),err:a.why}),kt();try{(0,tt.mkdirSync)(fo,{recursive:!0})}catch{}let c=(0,go.join)(fo,"code-"+String(n.version).replace(/[^\w.-]/g,"_")+".js"),l=c+".part";try{(0,tt.writeFileSync)(l,o),(0,tt.renameSync)(l,c)}catch(p){try{(0,tt.rmSync)(l,{force:!0})}catch{}return xt({...$t(),err:"не удалось сохранить: "+String(p&&p.message||p)}),kt()}let d=$t();if(d.active&&d.active.file&&d.active.file!==c)try{(0,tt.rmSync)(d.active.file,{force:!0})}catch{}return xt({...d,err:"",active:{version:n.version,file:c,minExe:n.minExe||"",notes:n.notes||"",at:Date.now()}}),kt()}function Ad(){let e=$t();if(e.active&&e.active.file)try{(0,tt.rmSync)(e.active.file,{force:!0})}catch{}return xt({...e,active:null,pending:null}),kt()}var go,tt,Tr,Mg,Jn,fo,xd,Ag,zg,xt,$t,fi,gi=ee(()=>{go=require("node:path"),tt=require("node:fs"),Tr=require("node:crypto");vt();Mg=process.env.MC_CODE_URL||"https://raw.githubusercontent.com/tim2190/mediachrome-dist/main/code.json",Jn="MCowBQYDK2VwAyEArb2DkMY1meiRt6JXIr0unrIjtj5ADfd+D/OVThCAoyg=",fo=(0,go.join)(Te,"code"),xd=(0,go.join)(fo,"state.json"),Ag=864e5,zg=i(e=>{try{return JSON.parse((0,tt.readFileSync)(e,"utf8"))}catch{return null}},"readJson"),xt=i(e=>{try{(0,tt.mkdirSync)(fo,{recursive:!0})}catch{}try{(0,tt.writeFileSync)(xd,JSON.stringify(e,null,2))}catch{}},"save"),$t=i(()=>zg(xd)||{},"st0");i(mo,"cmpVer");fi=i(()=>process.env.MC_EXE_VERSION||"0.6.9","exeVersion");i(Dg,"verifyBundle");i(Sd,"codeVerdict");i(Ld,"activeCode");i(Td,"markCodeOk");i(Md,"markCodeBad");i(kt,"codeState");i(Cg,"getJson");i(mi,"checkCode");i(Ad,"dropCode")});function Ng(e){let t=new Set;for(let n=e;n&&typeof n=="object"&&!t.has(n);n=n.cause)if(t.add(n),n.code&&Rg.has(n.code))return n.code;return null}function Eg(e,t,n){return new Promise(r=>{let s=!1,o=i(f=>{s||(s=!0,r(f))},"fin"),a=setTimeout(()=>o(null),n),c=i(f=>{let u=gs.default.connect({host:e,port:t,servername:e,socket:f,rejectUnauthorized:!1},()=>{let h=null;try{h=u.getPeerCertificate(!1).raw}catch{}u.destroy(),clearTimeout(a),o(h||null)});u.on("error",()=>{clearTimeout(a),o(null)})},"go"),l=process.env.NODE_USE_ENV_PROXY&&(process.env.HTTPS_PROXY||process.env.https_proxy);if(!l)return c(void 0);let d;try{d=new URL(l)}catch{return c(void 0)}let p=Dd.default.request({host:d.hostname,port:d.port||80,method:"CONNECT",path:e+":"+t});p.on("connect",(f,u)=>{f.statusCode===200?c(u):(u.destroy(),clearTimeout(a),o(null))}),p.on("error",()=>{clearTimeout(a),o(null)}),p.end()})}function $g(e){let n=String(e.infoAccess||"").match(/CA Issuers - URI:(\S+)/);return n?n[1]:null}async function Pg(e,t,n){if(!/^https?:\/\//i.test(e))return null;let r=new AbortController,s=setTimeout(()=>r.abort(),n);try{let o=await t(e,{signal:r.signal});return o.ok?Buffer.from(await o.arrayBuffer()):null}catch{return null}finally{clearTimeout(s)}}function Og(e,t){try{let n=new wo.X509Certificate(e),r=new wo.X509Certificate(t);return n.checkIssued(r)&&n.verify(r.publicKey)?r:null}catch{return null}}async function jg(e,t=443,{fetchIssuer:n,fetchFn:r=globalThis.fetch,ms:s=1e4}={}){let o=e+":"+t;if(wi.has(o))return wi.get(o);let a=(async()=>{let c=await Eg(e,t,s);if(!c)return bi.failed.push(e+" (сертификат не прочитан)"),!1;let l;try{l=new wo.X509Certificate(c)}catch{return!1}let d=[],p=l,f=c;for(let m=0;m<3;m++){let w=$g(p);if(!w)break;let g=n?await n(w):await Pg(w,r,s),b=g&&Og(f,g);if(!b||b.checkIssued(b))break;d.push(b.toString()),p=b,f=b.raw}if(!d.length)return bi.failed.push(e+" (промежуточный не скачался или не подходит)"),!1;let u=gs.default.getCACertificates("default"),h=d.filter(m=>!u.includes(m));return h.length&&gs.default.setDefaultCACertificates([...u,...h]),bi.healed.push(e),!0})();return wi.set(o,a),a}function Cd(e={}){if(zd||typeof gs.default.setDefaultCACertificates!="function"||typeof globalThis.fetch!="function")return!1;zd=!0;let t=globalThis.fetch;return globalThis.fetch=i(async function(r,s){try{return await t(r,s)}catch(o){if(!Ng(o))throw o;let a;try{a=new URL(typeof r=="string"?r:r&&r.url||String(r))}catch{throw o}if(a.protocol!=="https:"||!await jg(a.hostname,+a.port||443,{fetchFn:t,...e}))throw o;return t(r,s)}},"healingFetch"),!0}var gs,Dd,wo,Rg,wi,bi,zd,Rd=ee(()=>{gs=Cn(require("node:tls"),1),Dd=Cn(require("node:http"),1),wo=require("node:crypto"),Rg=new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_GET_ISSUER_CERT"]);i(Ng,"chainErrCode");i(Eg,"peerCert");i($g,"aiaUrl");i(Pg,"defaultFetchIssuer");i(Og,"issuerFits");wi=new Map,bi={healed:[],failed:[]};i(jg,"healHost");zd=!1;i(Cd,"installTlsHeal")});function Pd(e){return typeof e=="string"?e:e&&e.url||String(e)}function Fg(e,t){let n=typeof t.headers.getSetCookie=="function"?t.headers.getSetCookie():[];for(let r of n){let s=String(r).split(";")[0],o=s.indexOf("=");o>0&&e.set(s.slice(0,o).trim(),s.slice(o+1).trim())}}async function $d(e,t,n={}){let r=Pd(t),s=(n.method||"GET").toUpperCase(),o=n.body;for(let a=0;a<10;a++){let c=new URL(r).hostname,l=yi.get(c)||new Map,d=new Headers(n.headers||{});l.size&&d.set("Cookie",[...l].map(([u,h])=>u+"="+h).join("; "));let p=await e(r,{...n,method:s,body:o,headers:d,redirect:"manual"});Fg(l,p),l.size&&yi.set(c,l);let f=p.status>=300&&p.status<400&&p.headers.get("location");if(!f)return p;try{await p.arrayBuffer()}catch{}r=new URL(f,r).href,(p.status===303||(p.status===301||p.status===302)&&s==="POST")&&(s="GET",o=void 0)}throw new Error("redirect count exceeded (и с возвратом куки)")}function Od(){if(Nd||typeof globalThis.fetch!="function")return!1;Nd=!0;let e=globalThis.fetch;return globalThis.fetch=i(async function(n,r){let s=r&&r.redirect&&r.redirect!=="follow",o="";try{o=new URL(Pd(n)).hostname}catch{}if(!s&&o&&yi.has(o))return $d(e,n,r);try{return await e(n,r)}catch(a){if(s||!Ig(a))throw a;return $d(e,n,r)}},"cookieHealingFetch"),!0}var yi,Nd,Ed,Ig,jd=ee(()=>{yi=new Map,Nd=!1,Ed=/redirect count exceeded/i,Ig=i(e=>Ed.test(String(e&&e.message||""))||Ed.test(String(e&&e.cause&&e.cause.message||"")),"isLoop");i(Pd,"urlOf");i(Fg,"remember");i($d,"followWithCookies");i(Od,"installCookieHeal")});function ye(e){if(!e)return null;let t=String(e).trim();if(!t)return null;let n=t.match(/(?:^|[^\d.\/])(\d{1,2})[.\/](\d{1,2})[.\/](\d{2}|\d{4})(?![\d.\/])(?:\s*,?\s*(?:в\s+)?(\d{1,2}):(\d{2})(?::(\d{2}))?(?!\d))?/);if(n&&+n[1]<=31&&+n[2]<=12){let a=n[3].length===2?2e3+ +n[3]:+n[3],l=n[4]!=null&&+n[4]<=23&&+n[5]<=59?new Date(a,+n[2]-1,+n[1],+n[4],+n[5],+(n[6]||0)):new Date(a,+n[2]-1,+n[1]);if(!isNaN(l.getTime()))return l}let r=t.match(/^(\d{4}-\d{2}-\d{2})([A-Z]{3,4})(\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)(.*)$/);if(r){let a={MSK:"+03:00",UTC:"Z",GMT:"Z"},c=r[4].trim(),l=/^(Z|[+-]\d{2}:?\d{2})$/.test(c)?c:!c&&a[r[2]]||"",d=new Date(r[1]+"T"+r[3]+l);if(!isNaN(d.getTime()))return d}let s=new Date(t);if(!isNaN(s.getTime())&&/\d{4}/.test(t))return s;let o=Bg(t);return o||(isNaN(s.getTime())?null:s)}function vi(e,t){let n=e.match(/(\d{1,2}):(\d{2})/),r=new Date(t);return n?r.setHours(+n[1],+n[2],0,0):r.setHours(0,0,0,0),r}function Bg(e){let t=e.toLowerCase(),n=new Date;if(/только что|just now|moments? ago|сейчас/.test(t))return n;let r=t.match(/(\d+)\s*(секунд|минут|час|дн|день|сутк|недел|месяц|год|лет|сағат|мину?т|күн|тәулік|апта|ай|жыл|second|sec|minute|min|hour|day|week|month|year)[a-zа-яёәөұүқғңһі]*\s*(?:назад|бұрын|ago)/);if(r){let s=+r[1],o=r[2],a=new Date(n);return/секунд|second|sec/.test(o)?a.setSeconds(a.getSeconds()-s):/минут|мину?т|minute|min/.test(o)?a.setMinutes(a.getMinutes()-s):/час|сағат|hour/.test(o)?a.setHours(a.getHours()-s):/дн|день|сутк|күн|тәулік|day/.test(o)?a.setDate(a.getDate()-s):/недел|апта|week/.test(o)?a.setDate(a.getDate()-s*7):/месяц|month/.test(o)||o==="ай"?a.setMonth(a.getMonth()-s):/год|лет|жыл|year/.test(o)&&a.setFullYear(a.getFullYear()-s),a}if(/^вчера|^yesterday|^кеше/.test(t)){let s=new Date(n);return s.setDate(n.getDate()-1),vi(t,s)}if(/^сегодня|^today|^бүгін/.test(t))return vi(t,n);if(r=t.match(/(\d{1,2})\s+([а-яёәөұүқғңһіА-ЯЁӘӨҰҮҚҒҢҺІ]{3,})\.?\s*(\d{4})?/),r){let s=+r[1],o=r[2].toLowerCase(),a=qg.findIndex(c=>o.startsWith(c)||c.startsWith(o));if(a<0&&(a=Hg.findIndex(c=>o.startsWith(c)||c.startsWith(o))),a>=0){let c=r[3]?+r[3]:n.getFullYear(),l=new Date(c,a,s),d=vi(t,l);return isNaN(d.getTime())?null:d}}return null}function Mt(e){if(!e)return null;let t=new Date(e+"T00:00:00");return isNaN(t.getTime())?null:t}function Z(e){if(!(e instanceof Date)||isNaN(e.getTime()))return null;let t=i(n=>String(n).padStart(2,"0"),"p2");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function Pt(e){if(!e)return"";let t=e instanceof Date?e:new Date(e);if(isNaN(t.getTime()))return String(e);let n=i(s=>String(s).padStart(2,"0"),"p2"),r=t.getHours()||t.getMinutes()?" "+n(t.getHours())+":"+n(t.getMinutes()):"";return Z(t)+r}function ws(e){if(!e)return null;let t=new Date(e+"T23:59:59.999");return isNaN(t.getTime())?null:t}function Xe(e,t,n){let r=e instanceof Date?e:ye(e);return!(!r||t&&r<t||n&&r>n)}var Hg,qg,St=ee(()=>{i(ye,"parseDate");Hg=["январ","феврал","март","апрел","ма","июн","июл","август","сентябр","октябр","ноябр","декабр"],qg=["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"];i(vi,"timeFrom");i(Bg,"parseLoose");i(Mt,"startOfDay");i(Z,"ymd");i(Pt,"localStamp");i(ws,"endOfDay");i(Xe,"inRange")});function Bd(e){return/\/wp-content\//.test(e||"")}function Li(e){let t=[],n=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,r;for(;r=n.exec(e);){let s;try{s=JSON.parse(r[1].trim())}catch{continue}let o=Array.isArray(s)?s:[s];for(let a of o)a&&a["@graph"]&&Array.isArray(a["@graph"])&&t.push(...a["@graph"]),a&&t.push(a)}return t}function Ti(e,t){return e?Array.isArray(e)?e.some(n=>String(n).toLowerCase().includes(t)):String(e).toLowerCase().includes(t):!1}function hn(e,t){let n=new RegExp(`<meta[^>]+(?:property|name|itemprop)=["']`+Id+t+`["'][^>]*content=["']([^"']+)["']`,"i"),r=e.match(n);if(r)return r[1];let s=new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name|itemprop)=["']`+Id+t+`["']`,"i"),o=e.match(s);return o?o[1]:null}function At(e){if(!e)return e;let t={"&amp;":"&","&quot;":'"',"&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"«","&raquo;":"»","&ndash;":"–","&mdash;":"—","&hellip;":"…","&laquo":"«","&raquo":"»","&rsquo;":"’","&lsquo;":"‘","&rdquo;":"”","&ldquo;":"“"};return e.replace(/&#x27;/gi,"'").replace(/&#0?39;/g,"'").replace(/&(?:amp|quot|apos|lt|gt|nbsp|laquo|raquo|ndash|mdash|hellip|rsquo|lsquo|rdquo|ldquo);/g,n=>t[n]||n).replace(/&#x([0-9a-f]+);/gi,(n,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(n,r)=>String.fromCodePoint(parseInt(r,10)))}function Ud(e,t){let n="",r=!1;for(let s=t+1;s<e.length;s++){let o=e[s];if(n){o===n&&(n="");continue}if(o==='"'||o==="'"){r&&(n=o,r=!1);continue}if(o===">")return s;if(o==="="){r=!0;continue}/\s/.test(o)||(r=!1)}return-1}function xi(e,t=" "){let n=String(e??""),r="",s=0;for(;;){let o=n.indexOf("<",s);if(o<0){r+=n.slice(s);break}if(r+=n.slice(s,o),!/[a-zA-Z!/?]/.test(n[o+1]||"")){r+="<",s=o+1;continue}let a=Ud(n,o);if(a<0){r+=n.slice(o);break}r+=t,s=a+1}return r}function Vg(e,t){let n=String(e??""),r="",s=0,o=!1;for(;;){let a=n.indexOf("<",s);if(a<0){o||(r+=n.slice(s));break}if(o||(r+=n.slice(s,a)),!/[a-zA-Z!/?]/.test(n[a+1]||"")){o||(r+="<"),s=a+1;continue}let c=Ud(n,a);if(c<0){o||(r+=n.slice(a));break}let l=n.slice(a+1,c);/^\/a\s*$/i.test(l)?o=!1:/^a\b/i.test(l)&&!/\/\s*$/.test(l)&&/<\/a\s*>/i.test(n.slice(c))&&(o=!0),r+=Ug.test(l)?/^\/?(?:br|wbr)\b/i.test(l)?" ":"":t,s=c+1}return r}function Vd(e,t=" "){return At(xi(e,t)).replace(/\s+/g," ").trim()}function En(e){let t=At(String(e??"").trim());return/<[a-zA-Z!/?]/.test(t)?Vd(t):t}function Mi(e,t=12){let n=String(e||"").toLowerCase().trim();if(!n)return[];if(/^[a-z0-9-]+$/.test(n))return n.length>=4?[n]:[];let r=[""];for(let s of n){let o=Gg[s]||(/[a-z0-9]/.test(s)?[s]:null);if(!o)return[];let a=[];for(let c of r)for(let l of o)a.length<t&&a.push(c+l);r=a}return[...new Set(r)].filter(s=>s.length>=4)}function ve(e){let t;try{t=new URL(String(e))}catch{return String(e||"").trim()}let n=t.host.toLowerCase().replace(/^www\./,""),r=t.pathname.replace(/\/+$/,"")||"/",s=[...t.searchParams.entries()].filter(([o])=>!Kg.test(o)).sort((o,a)=>o[0].localeCompare(a[0])).map(([o,a])=>o+"="+a).join("&");return n+r+(s?"?"+s:"")}function Gd(e){let t=String(e||"");return/новост[ией]+\s+(?:и\s+событи[йяе]+\s+)?по\s+теме|последние\s+новости\s+на\s+тему|все\s+(?:новости|материалы|публикации)\s+по\s+(?:теме|тегу)|материалы\s+по\s+тег|архив\s+(?:новостей|материалов|публикаций)|тақырып\s+бойынша\s+жаңалықтар/i.test(t)}function bo(e){let t;try{t=new URL(e).pathname}catch{return!1}let n=t.split("/").filter(Boolean).pop()||"";return n?/\d{4,}/.test(n)?!0:n.split(/[-_]/).filter(Boolean).length>=4:!1}function fn(e,t,n){let r=new RegExp("<(\\/?)"+n+"\\b","gi");r.lastIndex=t;let s=1,o;for(;o=r.exec(e);)if(o[1]){if(--s===0)return o.index}else if(++s>400)return-1;return-1}function Kd(e,t){let n=new Set((t||[]).map(d=>String(d).trim().toLowerCase()).filter(Boolean)),r={};if(!n.size||!e)return{html:String(e||""),cut:r};let s=String(e),o=/<([a-z][a-z0-9]*)\b([^>]*)>/gi,a="",c=0,l;for(;l=o.exec(s);){if(Wg.test(l[1])||/\/\s*$/.test(l[2]))continue;let d=((l[2].match(/\bclass\s*=\s*["']([^"']*)["']/i)||[])[1]||"").toLowerCase().split(/\s+/).filter(Boolean),p=((l[2].match(/\bid\s*=\s*["']([^"']*)["']/i)||[])[1]||"").toLowerCase(),f=d.find(m=>n.has(m))||(p&&n.has(p)?p:null);if(!f)continue;let u=fn(s,o.lastIndex,l[1]);if(u<0)continue;let h=s.indexOf(">",u);h<0||(a+=s.slice(c,l.index)+" ",c=h+1,o.lastIndex=c,r[f]=(r[f]||0)+1)}return{html:a+s.slice(c),cut:r}}function Jg(e){return String(e).split(/\s+/).some(t=>t&&_g.test(t)&&!Yg.test(t)&&!Si.test(t))}function Xg(e,t=null){let n=i((w,g)=>(t&&(t.via=w?g:"none"),w),"via");if(!e)return n("","none");let r=String(e).replace(/<!--[\s\S]*?-->/g," ").replace(/<(script|style|noscript|svg|iframe|form|nav|aside|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi," ");{let w=/<(div|section|ul|ol)\b([^>]*)>/gi,g="",b=0,x;for(;x=w.exec(r);){let k=(x[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1]||"";if(!Si.test(k)||Jg(k))continue;let y=fn(r,w.lastIndex,x[1]);y<0||(g+=r.slice(b,x.index)+" ",b=y,w.lastIndex=y)}r=g+r.slice(b)}r=r.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(w,g)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(g)?" ":w);{let w=/<(div|p|li|h[1-6])\b[^>]*>/gi,g="",b=0,x;for(;x=w.exec(r);){if(x.index<b)continue;let k=fn(r,w.lastIndex,x[1]);if(k<0)continue;let y=r.slice(w.lastIndex,k).trim();if((y.match(/<a\b/gi)||[]).length!==1)continue;let v=y.search(/<a\b/i),L=y.lastIndexOf("</a>");if(L<v)continue;let A=xi(y.slice(0,v)).trim();xi(y.slice(L+4)).trim()||A&&!/:$/.test(A)||(g+=r.slice(b,x.index)+" ",b=r.indexOf(">",k)+1||k,w.lastIndex=b)}r=g+r.slice(b)}{let w=/<(div|section|article|span|li|button)\b([^>]*\brole\s*=\s*["'](?:button|link|tab|menuitem)["'][^>]*)>/gi,g="",b=0,x;for(;x=w.exec(r);){let k=fn(r,w.lastIndex,x[1]);k<0||(g+=r.slice(b,x.index)+" ",b=k,w.lastIndex=k)}r=g+r.slice(b)}let s=i(w=>Vd(w),"text"),o=r.match(/<([a-z]+)\b[^>]*itemprop\s*=\s*["']articleBody["'][^>]*>/i);if(o){let w=o.index+o[0].length,g=fn(r,w,o[1]);if(g>0){let b=s(r.slice(w,g));if(b.length>200)return n(b.slice(0,4e4),"itemprop")}}let a=150,c=i(w=>Vg(w,"\0").split("\0").reduce((g,b)=>{let x=b.replace(/\s+/g," ").trim();return g+(x.length>=a?x.length:0)},0),"longText"),l="",d=0,p=0,f=i((w,g)=>{(g>d||g===d&&(d>0?w.length<p:w.length>p))&&(l=w,d=g,p=w.length)},"offer"),u=i(w=>{let g=/<article\b[^>]*>/gi,b="",x=0,k;for(;k=g.exec(w);){let y=fn(w,g.lastIndex,"article");y<0||(b+=w.slice(x,k.index)+" ",x=w.indexOf(">",y)+1||y,g.lastIndex=x)}return b+w.slice(x)},"dropCards");{let w=/<article\b[^>]*>/gi,g;for(;g=w.exec(r);){let b=fn(r,w.lastIndex,"article");if(b<0)continue;let x=u(r.slice(w.lastIndex,b));f(s(x),c(x))}}if(l.length>200)return n(l.slice(0,4e4),"article");let h=/(article|post|entry|news|material|publication|content|text|body)[-_]?(body|text|content|detail|full|inner)?/i;{let w=/<(div|section)\b([^>]*)>/gi,g;for(;g=w.exec(r);){let b=(g[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1];if(!b||!h.test(b)||Si.test(b))continue;let x=fn(r,w.lastIndex,g[1]);if(x<0)continue;let k=u(r.slice(w.lastIndex,x));f(s(k),c(k))}}if(l.length>200)return n(l.slice(0,4e4),"class");let m=[...r.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(w=>s(w[1])).filter(w=>w.length>40);return n(m.join(" ").slice(0,4e4),"p")}function jt(e){let t=String(e||""),n;if(n=t.match(/(?:^|[\/\-_.])(20\d{2})[\/\-.](\d{1,2})[\/\-.](\d{1,2})(?:[\/\-_.]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}if(n=t.match(/(?:^|[\/\-_.])(\d{1,2})[\/\-.](\d{1,2})[\/\-.](20\d{2})(?:[\/\-_.]|$|\.html)/),n){let r=new Date(+n[3],+n[2]-1,+n[1]);if(!isNaN(r)&&+n[2]<=12&&+n[1]<=31)return r}if(n=t.match(/(?:^|[\/\-_])(20\d{2})(\d{2})(\d{2})(?:[\/\-_]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}return null}function _d(e){let t=String(e),n=/<([a-z][a-z0-9]*)\b[^>]*\brole\s*=\s*["']banner["'][^>]*>/gi,r="",s=0,o;for(;o=n.exec(t);){let a=fn(t,n.lastIndex,o[1]);a<0||(r+=t.slice(s,o.index)+" ",s=t.indexOf(">",a)+1||a,n.lastIndex=s)}return r+t.slice(s)}function Zg(e){e=_d(Wd(e));let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i,n=/(date|time|pub|posted|created|published)/i,r=[...e.matchAll(/<article\b/gi)].map(f=>f.index),s=[...e.matchAll(/<\/article\s*>/gi)].map(f=>f.index),o=i(f=>r.filter(u=>u<f).length>s.filter(u=>u<f).length,"inArticle"),a=null,c=null,l=null,d=null;for(let f of e.matchAll(/<time\b([^>]*)>/gi)){let u=f[1]||"",h=(u.match(/\sdatetime=["']([^"']+)["']/i)||[])[1]||"";if(!h){let b=f.index+f[0].length,x=e.slice(b,b+200),k=x.search(/<\/time\s*>/i);if(k<0)continue;let y=At(x.slice(0,k).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!y||y.length>80)continue;h=y}d||(d=h);let m=(u.match(/class=["']([^"']*)["']/i)||[])[1]||"";if(t.test(m))continue;if(!a&&o(f.index)){a=h;break}if(!c&&n.test(m)){c=h;continue}let g=[...e.slice(Math.max(0,f.index-400),f.index).matchAll(/class=["']([^"']*)["']/gi)].pop();g&&t.test(g[1])||l||(l=h)}let p=a||c||l||d;return p?ye(p):null}function Qg(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i;e=_d(Wd(e));for(let r of e.matchAll(/<(?:div|span|p|li|h[1-6])[^>]*class=["']([^"']*(?:date|time|pub|posted|created)[^"']*)["'][^>]*>([\s\S]{0,160}?)<\/(?:div|span|p|li|h[1-6])>/gi)){if(t.test(r[1]))continue;let s=At(r[2].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!s||s.length>80)continue;let o=ye(s);if(o)return o}let n=e.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi," ");for(let r of n.matchAll(/<(div|span|p|li|small|time)\b([^>]*)>\s*<(?:i|span|svg|em)\b[^>]*class=["'][^"']*calendar[^"']*["'][^>]*>(?:\s*<\/(?:i|span|em)>|[\s\S]{0,400}?<\/svg>)([\s\S]{0,120}?)<\/\1>/gi)){let s=(r[2].match(/class=["']([^"']*)["']/i)||[])[1]||"";if(t.test(s))continue;let o=At(r[3].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!o||o.length>80)continue;let a=ye(o);if(a)return a}return null}function t0(e,t){let n=new Set,r=i(c=>At(String(c||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"norm"),s="";try{s=new URL(t,"https://x").pathname.replace(/\/+$/,"")}catch{}let o=i(c=>{if(!c)return!1;try{return new URL(String(c).replace(/\\\//g,"/"),"https://x").pathname.replace(/\/+$/,"")===s}catch{return!1}},"sameUrl"),a=i(c=>{if(!(!c||typeof c!="object")){if(Array.isArray(c)){for(let l of c)a(l);return}if(c.headline&&!o(c.url)){let l=r(c.headline);l.length>=20&&n.add(l)}for(let l of["itemListElement","item","@graph","mainEntity"])c[l]&&a(c[l])}},"eat");for(let c of Li(e))(Ti(c["@type"],"list")||c.itemListElement)&&a(c);for(let c of e.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)){if(o(c[1]))continue;let l=r(c[2]);l.length>=20&&l.length<=200&&n.add(l)}return[...n]}function Fd(e,t){if(!t||!t.length)return e;let n=String(e).replace(/\s+$/,""),r=t.slice().sort((s,o)=>o.length-s.length);for(let s=0;s<12;s++){let o=n.replace(/\s+$/,""),a=r.find(c=>o.endsWith(c));if(!a)break;n=o.slice(0,o.length-a.length).replace(/[\s·|—–-]+$/,"")}return n}function Jd(e){for(let n of Li(e))if(Ti(n["@type"],"article"))return!0;return(hn(e,"og:type")||"").toLowerCase().includes("article")?!0:!!hn(e,"article:published_time")}function yo(e,t,n=""){let r=null,s=null,o=!1,a=null,c=null,l="",d=i(m=>m==null?"":typeof m=="string"?m:Array.isArray(m)?m.map(d).filter(Boolean).join(" "):typeof m=="object"?d(m["@value"]||m.text||m.name||""):String(m),"asText"),p=null;for(let m of Li(e))Ti(m["@type"],"article")&&(o=!0,m.datePublished&&!p&&(p=ye(m.datePublished)),m.headline&&!s&&(s=d(m.headline)),m.description&&!a&&(a=d(m.description)),m.articleBody&&!c&&(c=d(m.articleBody)));let f={jsonld:i(()=>p,"jsonld"),"meta-og":i(()=>{let m=hn(e,"article:published_time");return m?ye(m):null},"meta-og"),"meta-itemprop":i(()=>{let m=hn(e,"datePublished");return m?ye(m):null},"meta-itemprop"),time:i(()=>Zg(e),"time"),"text-block":i(()=>Qg(e),"text-block")};for(let m of e0){let w=f[m]();if(w){r=w,l=m;break}}if(s||(s=hn(e,"og:title")),!s){let m=e.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);m&&(s=m[1].replace(/<[^>]+>/g,""))}a||(a=hn(e,"description")||hn(e,"og:description")),o||((hn(e,"og:type")||"").toLowerCase().includes("article")||hn(e,"article:published_time"))&&(o=!0);let u=t0(e,t),h=Fd(Xg(e),u);if(c&&(c=Fd(c,u)),!c)c=h;else if(h){let m=i(b=>String(b).toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim(),"flat"),w=m(c),g=m(h);w&&g.includes(w)?c=h:w.includes(g)||(c=c+" "+h)}return!r&&t&&(r=jt(t),r&&(l="url")),r?{url:t,dateVia:l,title:En(s)||t,date:r.toISOString(),isArticle:o,description:En(a),body:c?En(d(c)):""}:null}function Zd(e){let t;try{t=new URL(e).pathname.toLowerCase()}catch{return!1}return Xd.test(t)}function Xn(e,t){let n=i(d=>d.toLowerCase().replace(/^www\./,""),"bare"),r=n(new URL(t).host),s=new Set,o=i(d=>{let p;try{p=new URL(d.replace(/\\\//g,"/"),t).href}catch{return}let f;try{f=new URL(p)}catch{return}if(n(f.host)!==r)return;let u=f.pathname.toLowerCase();u==="/"||u===""||Xd.test(u)||/\/(search|search_results|results|tag|tags|category|categories|author|rubric|page|feed|rss|login|register)\b/.test(u)||u.split("/").filter(Boolean).length<1||s.add(p.split("#")[0])},"add"),a,c=/href=["']([^"'#]+)["']/gi;for(;a=c.exec(e);)o(a[1]);if(/^\s*[\[{]/.test(e)||s.size===0){let d=/"[\w]*(?:url|link|uri)"\s*:\s*"((?:https?:)?\\?\/\\?\/?[^"]+)"/gi;for(;a=d.exec(e);)o(a[1]);let p=new RegExp("https?:\\\\?/\\\\?/(?:www\\.)?"+r.replace(/^www\./,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+`\\\\?/[^"'\\s<>]+`,"gi");for(;a=p.exec(e);)o(a[0])}return[...s]}function Qd(e){let t=[],n=/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi,r;for(;r=n.exec(e);){let s=(r[0].match(/href=["']([^"']+)["']/i)||[])[1];s&&t.push(s)}return t}function eu(e){let t=[],n=e.match(/<item[\s\S]*?<\/item>/gi)||[];for(let s of n){let o=Ot((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=Ot((s.match(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i)||[])[1])||"",c=Ot((s.match(/<pubDate(?:\s[^>]*)?>([\s\S]*?)<\/pubDate>/i)||[])[1]||(s.match(/<dc:date(?:\s[^>]*)?>([\s\S]*?)<\/dc:date>/i)||[])[1]),l=ki((s.match(/<description(?:\s[^>]*)?>([\s\S]*?)<\/description>/i)||[])[1]),d=(s.match(/<(yandex:full-text|content:encoded|turbo:content)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/i)||[])[2],p=d?En(ki(d)):"";a&&t.push({title:o||null,link:a,date:c||null,description:l?En(l):"",...p?{full:p}:{}})}if(t.length)return t;let r=e.match(/<entry[\s\S]*?<\/entry>/gi)||[];for(let s of r){let o=Ot((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=((s.match(/<link[^>]+href=["']([^"']+)["']/i)||[])[1]||"").trim(),c=Ot((s.match(/<(?:published|updated)(?:\s[^>]*)?>([\s\S]*?)<\/(?:published|updated)>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:c||null})}return t}function tu(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=Ot((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=Ot((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]||(r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Ai(e){let t=[],n=e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[];for(let r of n){let s=Ot((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=Ot((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function nu(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=Ot((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]),o=Ot((r.match(/<news:title(?:\s[^>]*)?>([\s\S]*?)<\/news:title>/)||[])[1]),a=Ot((r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1]||(r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]);if(!s)continue;let c=ye(a);t.push({url:s,title:o||null,date:c?c.toISOString():null})}return t}function qd(e){if(!e)return"";let t=String(e).replace(/\s+/g,"").replace(/%3D/gi,"=").replace(/%2B/gi,"+").replace(/%2F/gi,"/"),n=Hd(t);if(!n){let r=(4-t.length%4)%4;try{n=Hd(t+"=".repeat(r))}catch{}}return n}function ru(e,t){try{let n=String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(!n)return null;let r=/(^|\.)(bing|microsoft|msn|bingapis|windows|office\.net|live\.com|outlook\.com|go\.microsoft)\./i,s=i(l=>{try{return decodeURIComponent(l)}catch{return String(l)}},"tryDec"),o=[];i(l=>{try{let d=/^https?:/i.test(l)||l.startsWith("http")?l:l.startsWith("/")?"https://www.bing.com"+l:"https://"+l,p=new URL(d);for(let[h,m]of p.searchParams.entries())m&&/^(u|uddg|url|to|dest|destination|target|redirect|page|link|ref)[\d]*$/i.test(h)&&o.push(String(m));let u=(p.search+"&").match(/[?&]u=([A-Za-z0-9_\-+/=%]{20,})/i);u&&o.push(decodeURIComponent(u[1]))}catch{}},"tryFromUrl")(n);let c=[];for(let l of o)c.push(l);c.push(n,s(n),s(s(n))),/^[A-Za-z0-9_\-+/=]{40,}$/.test(n)&&c.push(qd(n));for(let l=0;l<c.length;l++){let d=c[l];if(!d)continue;let p=String(d).match(/[A-Za-z0-9_\-+/]{40,}={0,3}/g)||[];for(let u of p){let h=qd(u);h&&/^https?:/i.test(h)&&c.push(h)}let f=String(d).match(/https?:\/\/[^\s"'&<>()\\]+/gi)||[];for(let u of f)try{let h=new URL(u.split("#")[0].replace(/\/+$/,"")),m=h.host.replace(/^www\./,"");if(r.test(m))continue;if(m===t||m.endsWith("."+t))return h.href.split("#")[0]}catch{}}return null}catch{return null}}var Id,ki,Ot,Ug,Gg,Kg,Si,Wg,_g,Yg,Wd,e0,Yd,Xd,Hd,bs=ee(()=>{St();i(Bd,"isWordPress");i(Li,"jsonLdObjects");i(Ti,"typeIncludes");Id="(?:og:)?";i(hn,"metaContent");ki=i(e=>e==null?e:String(e).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1"),"stripCdata"),Ot=i(e=>{let t=ki(e);return t==null?t:At(t).trim()},"xmlText");i(At,"decodeEntities");i(Ud,"tagEnd");i(xi,"stripTags");Ug=/^\/?(?:br|wbr|strong|b|em|i|u|s|span|sup|sub|mark|small|abbr|q|cite|font)\b/i;i(Vg,"stripLinksAndTags");i(Vd,"htmlToText");i(En,"unmarkup");Gg={а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["e","ye"],ё:["e","yo"],ж:["zh"],з:["z"],и:["i"],й:["i","y"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["h","kh"],ц:["c","ts"],ч:["ch"],ш:["sh"],щ:["sch"],ъ:[""],ы:["y"],ь:[""],э:["e"],ю:["yu","iu"],я:["ya","ia"],ә:["a","ae"],ғ:["g","gh"],қ:["k","q",""],ң:["n","ng"],ө:["o","oe"],ұ:["u"],ү:["u","ue"],һ:["h"],і:["i"]};i(Mi,"translitVariants");Kg=/^(utm_|yclid|gclid|fbclid|from|_openstat|ysclid)/i;i(ve,"urlKey");i(Gd,"looksLikeListingTitle");i(bo,"looksLikeArticleUrl");Si=/(sidebar|side-bar|aside|widget|banner|advert|reklam|menu|nav|breadcrumb|footer|header|subscribe|podpis|social|share|comment|komment|related|similar|also|recommend|read-?more|popular|discuss|latest|last-?news|news-?list|tags?|rubric|category)/i;i(fn,"blockEnd");Wg=/^(br|img|meta|link|input|hr|source|wbr|area|base|col|embed|param|track)$/i;i(Kd,"dropBlocks");_g=/(^|[-_])(content|text|entry|article|post|body|story)([-_]|$)/i,Yg=/^(justify|align|place)-(content|items|self)|^text-(left|right|center|justify|start|end|muted|primary|secondary|white|black|dark|light|nowrap|truncate|wrap|break|uppercase|lowercase|capitalize|xs|sm|md|lg|xl|\d)/i;i(Jg,"isBodyBlock");i(Xg,"extractBodyText");i(jt,"dateFromUrl");Wd=i(e=>String(e).replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(t,n)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(n)?" ":t),"dropCardLinks");i(_d,"dropBanner");i(Zg,"pickTimeDate");i(Qg,"pickTextBlockDate");e0=["jsonld","meta-og","meta-itemprop","time","text-block"],Yd={jsonld:"разметка JSON-LD","meta-og":"мета article:published_time","meta-itemprop":"микроразметка itemprop",time:"тег <time>","text-block":"текстом в блоке с датой",url:"дата в адресе"};i(t0,"foreignTitles");i(Fd,"trimForeignTail");i(Jd,"declaresArticle");i(yo,"extractArticleMeta");Xd=/\.(xml|json|jsonld|js|mjs|map|css|txt|jpg|jpeg|png|webp|gif|svg|ico|avif|bmp|tiff?|woff2?|ttf|otf|eot|pdf|mp4|webm|mov|avi|mp3|ogg|wav|zip|rar|7z|gz|tar|docx?|xlsx?|pptx?|rtf|epub|apk|exe|dmg)$/;i(Zd,"isAssetUrl");i(Xn,"extractLinks");i(Qd,"extractFeedLinks");i(eu,"parseFeed");i(tu,"parseUrlset");i(Ai,"parseSitemapIndex");i(nu,"parseNewsSitemap");Hd=typeof Buffer<"u"&&Buffer.from?e=>{try{return Buffer.from(e,"base64").toString("utf8")}catch{return""}}:e=>{try{return atob(e.replace(/_/g,"/").replace(/-/g,"+"))}catch{return""}};i(qd,"_b64dec");i(ru,"bingReal")});function tn(e){let t;try{t=new URL(e).host.replace(/^www\./,"")}catch{return null}if(Mr[t])return Mr[t];for(let n of Object.keys(Mr))if(t===n||t.endsWith("."+n))return Mr[n];return null}var Mr,zi=ee(()=>{Mr={"zakon.kz":{search:"https://www.zakon.kz/search/?handler=LoadMoreNews&qsearch={q}&author=0&category=0&tag=0&perioddate=&p={page}",selectors:{container:"div.news-item",link:"a.newscard_link",title:"div.newscard__title",date:"span.newscard__date"}},"tengrinews.kz":{search:"https://tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"}},"kaz.tengrinews.kz":{search:"https://kaz.tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"},external:!1,note:"казахская версия Tengrinews; поиск сайта /search/?text= (форма на главной)"},"rus.baq.kz":{search:null,browserSearch:!1,external:!1,feed:"https://rus.baq.kz/news/pagen{page}/",feedFirst:"https://rus.baq.kz/news/",feedPages:60,feedCard:'class="finded__content__item"',feedAll:!0,note:"русская версия BAQ.kz (Laravel, страницы собирает сервер, служебного JSON-входа нет). Лента /news/pagenN/ — все статьи сайта по порядку публикации, 20 на страницу, ~5 страниц в сутки, дата на каждой карточке (data-time) — по ней лента встаёт на начале периода: это и есть список статей периода. Поиск сайта бесполезен: на «Токаев» 9 карточек 2019–2025 годов, на «Казахстан» ноль (22 ноября 2026) — выключен"},"kaz.zakon.kz":{search:null,external:!1,note:"казахская версия Zakon.kz; формы поиска на главной нет, /search/?q= отдаёт одну и ту же страницу на любое слово"},"ulysmedia.kz":{search:"https://ulysmedia.kz/search/?search_text={q}&page={page}",selectors:{container:".col-xl-3.xl-mb-20",link:"a.category__title",title:"a.category__title",date:"span.date"},browserSearch:!0},"exclusive.kz":{search:"https://exclusive.kz/?s={q}",cms:"wordpress",browserSearch:!0,external:!1},"inform.kz":{search:null,render:"https://www.inform.kz/search_results/?q={q}",api:{url:"https://search.inform.kz/search/ru?q=&per_page=20&page={page}&start_date={from}&end_date={to}",list:"results",slug:"alias",link:"https://www.inform.kz/ru/{slug}",title:"title",date:"published_date",dateZone:"+05:00",text:["description","content"],perPage:20},note:"HTTP-поиск — JS-оболочка (страница равна пустому запросу ±2 длины слова, ссылок на статьи ноль); браузером та же страница даёт 17 ссылок на статьи, но ищет сайт ТОЛЬКО по заголовку — ключ в тексте его выдача не находит"},"informburo.kz":{search:null,render:"https://informburo.kz/search?q={q}",note:"HTTP-поиск — виджет Google (cse.google.com, cx=dcd9aa27056d92a81): по HTTP приходит одна и та же страница ±14 байт, ссылок на статьи ноль. Браузером та же страница даёт 11 своих результатов -> берём рендером. Материал сайту приносят карта новостей и глубина"},"liter.kz":{search:"https://liter.kz/search/?search_text={q}"},"newtimes.kz":{search:"https://newtimes.kz/search/?search_text={q}"},"vlast.kz":{search:"https://vlast.kz/search/?query={q}",browserSearch:!0,external:!1,note:"внешний забанен, но браузер-поиск работает"},"kapital.kz":{search:"https://kapital.kz/amp/search?s={q}",api:{url:"https://api.kapital.kz/articles?limit=50&offset={off50}",list:"data.rows",slug:"slug",link:"https://kapital.kz/{category.slug}/{id}/{slug}.html",title:"title",date:"published_at",text:["subtitle"],perPage:50,where:{"locale.code":"ru"},textFull:!1}},"time.kz":{search:"https://time.kz/search?q={q}",browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку -> подстраховываемся браузером; внешний мёртв"},"forbes.kz":{search:"https://forbes.kz/search?q={q}&type=articles&s=data&page={page}",skipPaths:["/ranking/"],note:"в robots.txt объявлены карты рейтингов (sitemap-ranking, sitemap-ranking-object): страницы рейтингов без даты, в прозвоне 18–19 ноября 2026 их было 57 из 300 мест глубины — не качаем"},"inbusiness.kz":{search:"https://inbusiness.kz/ru/search?q={q}",external:!1},"kazpravda.kz":{search:"https://kazpravda.kz/search?q={q}"},"nazarbayev.kz":{search:"https://nazarbayev.kz/ru/search?body_value={q}&title={q}&time=&created[min]=&created[max]=&field_news_type_value=All",cms:"drupal",note:"Drupal exposed filter на /ru/search (не /kk/ — тот даёт 500); есть created[min/max] для серверного фильтра дат"},"baq.kz":{search:null,browserSearch:!1,feed:"https://baq.kz/news/pagen{page}/",feedFirst:"https://baq.kz/news/",feedPages:60,feedCard:'class="finded__content__item"',feedAll:!0,note:"Laravel, страницы собирает сервер, служебного JSON-входа нет. Лента /news/pagenN/ — все статьи сайта по порядку публикации, 20 на страницу, ~5 страниц в сутки, дата на каждой карточке (data-time) — по ней лента встаёт на начале периода: это и есть список статей периода. Поиск сайта бесполезен: на «Тоқаев» одна статья 2019 года (22 ноября 2026) — выключен вместе с браузер-поиском"},"kursiv.media":{search:"https://kz.kursiv.media/{wpage}?s={q}",cms:"wordpress",note:"WordPress-поиск /?s= (не /ru/!), пагинация /page/N/?s="},"lsm.kz":{search:null,render:"https://lsm.kz/search?q={q}",needs_js:!0,browserSearch:!0,external:!1,note:"HTTP-поиск — оболочка (±2 байта на любое слово, ссылок ноль): выдачу подгружает POST /processing с телом chapter=search&p={page}&q={q}&tag= — он отвечает и обычному запросу (18 ссылок против 6 на мусоре), но канал поиска умеет только GET, поэтому пока рендер. Дата статьи лежит в НЕСТАНДАРТНОЙ мете og:article:published_time и текстом («19 сентября 2026 года») — из-за приставки og: разбор не видел её вовсе, и сайт отдавал «без даты на странице — 48» при живых статьях (улики 24 сентября 2026, починено). Браузер-поиск строку поиска не находит"},"sputnik.kz":{search:null,external:!1,note:"поиск = React + невидимая reCAPTCHA (getmore за g-recaptcha-response) -> из fetch не взять; RSS свежак + sitemap-глубина. Внешний тоже глух (Bing не индексирует статьи)."},"total.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиск = Google CSE в iframe -> невзят; браузер-поиск через форму сайта работает"},"interfax.kz":{search:null,external:!0,note:"на сайте поиска нет -> только RSS/sitemap (свежак) + внешний Google site: по периоду"},"press.kz":{search:null,render:"https://press.kz/search?title={q}",external:!1,note:"поиск сайта — /search?title= (адрес его собственной формы, дал пользователь). ПО HTTP он результатов не отдаёт: страница приходит одна и та же (30 ссылок) при любом слове, а от пустого запроса отличается ровно на удвоенную длину слова — то есть слово только эхом печатается в форме и в заголовке, а выдачу рисует JS. Поэтому HTTP-поиск выключен, а страница берётся РЕНДЕРОМ. ?s= — это вообще главная (37 ссылок, побайтово те же). Глубину даёт карта сайта (48 адресов); статьи размечены нормально — JSON-LD с datePublished читается"},"kaztag.kz":{search:null,render:"https://kaztag.kz/ru/search/?searchid=2383993&web=0&text={q}",feed:"https://kaztag.kz/ru/news/?PAGEN_1={page}",browserSearch:!0,external:!1,note:"статьи за Cloudflare (обычным запросом не открываются -> дочитываем браузером). Поиск по сайту — виджет Яндекса (searchid=2383993), выдачу рисует JS -> берём рендером. Лента PAGEN_1 — свежак"},"orda.kz":{search:null,render:"https://orda.kz/search-results.html?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (render всё же поднимает результаты); внешний бесполезен"},"nur.kz":{search:null,feed:"https://www.nur.kz/latest/",external:!1,note:"поиска нет, sitemap заморожены; лента /latest/ (свежак). Внешний не индексирует -> отключён"},"lenta.ru":{search:"https://lenta.ru/search/v2/process?query={q}&from={off10}&size=10&sort=2&title_only=0&domain=1",external:!1,note:'служебный вход поиска отдаёт JSON (не HTML): {"matches":[{"url":…,"title":…}]}. Ссылки из него достаёт разбор JSON в extractLinks — проверено прогоном 26 сентября 2026: 118 материалов за двое суток, 112 из них не нашёл никто другой. Пагинация from= (шаг 10); дата в адресе /YYYY/MM/DD/ -> отсев без скачивания'},"rbc.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 212 117 байт по слову против 213 027 по мусору, уникальная ссылка ровно одна. Главная за антиботом (редирект на служебный путь с UUID). Материал дают карта новостей /google-news-sitemap.xml (429 записей, 315 свежих, с заголовком и датой) и глубина. Внешний поиск снят 26 сентября 2026: он отправляет наружу само ключевое слово и не дал ни строки ни в одном прогоне"},"ria.ru":{search:"https://ria.ru/services/search/getmore/?query={q}&offset={off20}",external:!1,budgetMs:12e4,note:"поиск честно ищет: 41 454 байта по слову против 179 по мусору, 20 своих ссылок против нуля. Пагинация getmore?offset= (шаг 20); дата в адресе /YYYYMMDD/ -> отсев без скачивания. В прогоне 26 сентября 2026 — 127 материалов, поиск принёс 120 (41 не нашёл никто другой). Внешний снят: он выдаёт наружу ключевое слово"},"mk.ru":{search:"https://www.mk.ru/search/?q={q}",external:!1,note:"шаблон вписан руками, потому что АВТОДЕТЕКТ ПРОМАХИВАЛСЯ: он брал оболочку («ссылок 6, совпало 0»), а /search/?q= ищет по-настоящему — на мусорное слово сайт отвечает HTTP 404, на живое 200 и 10 своих ссылок. Сайт режет частоту: в прогоне 26 сентября 2026 отдал 88 раз «перегружен» (HTTP 429), сбавленный ход отработал сам"},"kommersant.ru":{external:!1,note:"поиск сайта ищет по-настоящему: 226 795 байт по слову против 116 131 по мусору, 32 свои ссылки. Автодетект находит его сам (форма /search/results?search_query=), 34 материала за двое суток. ОГОВОРКА: выдача ссылается на статьи с хвостом ?query=…&sids=…, и тот же материал приезжает ВТОРОЙ строкой — `urlKey` служебные параметры не режет (улика 26 сентября 2026, 3 дубля из 452 строк)"},"aif.ru":{external:!1,rss:"https://aif.ru/rss/all.php",note:"лента /rss/all.php несёт ПОЛНЫЙ ТЕКСТ статей (232 записи, полтора дня на 21 ноября 2026), на главной объявлена другая, без текста — поэтому вписана. поиск сайта ищет: 139 586 байт по слову против 121 221 по мусору, 15 своих ссылок. Автодетект находит его сам (/search?text=), 26 материалов за двое суток. Плюс RSS /rss/news на 300 записей с датами"},"bfm.ru":{external:!1,note:"поиск сайта ищет: 61 613 байт по слову против 55 002 по мусору, 10 своих ссылок. Автодетект находит его сам (параметр SearchPageForm[query]). Карта новостей /sitemap_google_news.xml — 178 записей, 124 свежих, с заголовком и датой"},"vedomosti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 171 492 байта на ЛЮБОЕ слово, уникальных ссылок ноль. Материал даёт карта новостей /sitemap_google_news.xml (334 записи, 176 свежих, с заголовком и датой) и глубина — 25 материалов за двое суток"},"interfax.ru":{search:"https://www.interfax.ru/search/news/?phrase={q}&p={page}",external:!1,note:"поиск ЕСТЬ: /search/news/?phrase= (параметр нашёл агент плагина, 21 ноября 2026). По «Токаев» 48 своих ссылок, по бессмыслице 8 (меню); выдача строго по дате, 40 на страницу, листается &p=. Раздел /news/ — без фото и цитат. Прежний /search/?sTextShow= отдавал ленту. Страницы /photo/ дат не несут — это фоторепортажи"},"kp.ru":{search:null,external:!1,api:{url:"https://s02.api.yc.kpcdn.net/content/api/1/pages/get.json?pages.spot=0&pages.target.class=100&pages.target.id=0&pages.age.year={year}&pages.age.month={month}&pages.direction=page&pages.number={page}",monthPages:{last:"https://s02.api.yc.kpcdn.net/content/api/1/pages/get.json?pages.spot=0&pages.target.class=100&pages.target.id=0&pages.age.year={year}&pages.age.month={month}&pages.direction=last",total:"meta:pages"},list:"childs",slug:"@id",link:"https://www.kp.ru/online/news/{slug}/",title:"ru.title",text:["ru.description"],date:"meta:published",dateZone:"+03:00",textFull:!1,perPage:20,maxPages:250,budgetMs:12e4},note:"служебный вход ленты (s02.api.yc.kpcdn.net, найден 21 ноября 2026 в коде страницы /online/) отдаёт ВСЕ новости с заголовком, анонсом и точным временем — то есть заголовки всего периода проверяются без браузера; текста статьи вход не отдаёт, его читает глубина. Страницы нумеруются внутри месяца с начала, свежее — на последней (direction=last); время московское. Поиска по HTTP нет: /search/ — 404, поиск в шапке — виджет Яндекса по релевантности. Карты новостей /sitemap/news_01-02.xml отстают на сутки"},"vesti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 645 679 байт на любое слово, уникальных ссылок ноль. Живой вход — карта новостей /sitemap-news.xml (919 записей, все свежие, с заголовком и датой)"},"ntv.ru":{search:null,external:!1,feed:"https://www.ntv.ru/",note:"и /finder/?keytext=, и /search/?q= отдают одну и ту же страницу на любое слово; карта — только видео, новости берутся с главной"},"1tv.ru":{external:!1,rss:"https://www.1tv.ru/news/index_for_ya.rss",skipPaths:["/shows/"],note:"лента для Яндекса /news/index_for_ya.rss отдаёт новости С ПОЛНЫМ ТЕКСТОМ (539 записей, трое с половиной суток на 21 ноября 2026) — ключ в тексте находится без скачивания; на главной она не объявлена, поэтому вписана. Страницы /shows/ — выпуски передач без даты (90-153 штуки «без даты» в двух прогонах, и на них уходило время) — не качаем. типовые /search?q= — оболочка (198 989 байт на любое слово), но автодетект находит собственный поиск движка сайта и он работает: 19 материалов за двое суток. Шаблон намеренно НЕ вписан, чтобы не потерять его пагинацию"},"life.ru":{search:null,external:!1,api:{url:"https://api.corr.life/public/posts/search?limit=50&term={q}&offset={off50}&sort=publication_date&direction=desc",list:"hits.hits",slug:"_id",link:"https://life.ru/p/{slug}",resolve:!0,title:"_source.title",date:"_source.publication_date",dateUnix:!0,text:["_source.subtitle","_source.content"],perPage:50},note:"страница поиска /search?query= пустая и по HTTP, и в браузере — выдачу берёт скрипт из служебного входа api.corr.life/public/posts/search (найден 21 ноября 2026 в коде страницы). Он ищет по заголовку и тексту, отдаёт полный текст и идёт по дате — канал api с запросом, без браузера. Адрес /p/<номер> уводит на адрес со слагом — разворачивается. Ищет не всё: на «Путин» за 20–21 ноября вход дал 75, а 6 материалов (упоминания в тексте) нашла только глубина, — поэтому полноту не засчитывает и глубина идёт как обычно"},"news.ru":{search:null,external:!1,note:"ПОИСК ЗАПРЕЩЁН САМИМ САЙТОМ: в robots.txt секция User-agent: * содержит Disallow: /*? и Disallow: /search/, то есть любые адреса с параметрами. Ленты и карты при этом открыты и дают материал — 50 за двое суток (RSS + карта новостей + глубина)"},"business-gazeta.ru":{search:null,external:!1,note:"/search?q= и /search?fullpage=1&q= отдают 25 690 байт на любое слово, ссылок на статьи ноль. Живой вход — RSS /rss.xml"},"fontanka.ru":{search:"https://www.fontanka.ru/search/{dpage}?keywords={q}",external:!1,note:"поиск ЕСТЬ и без браузера: параметр keywords (а не query — по нему приходит оболочка), выдача по дате, 40 на страницу, листается /search/page-N/. Замер 21 ноября 2026: «Токаев» — 303 совпадения, бессмыслица — ни одного. Лента /rss-feeds/rss.xml держит последние сутки (100 записей)"},"iz.ru":{external:!1,note:"ГЛАВНАЯ отдаёт HTTP 403 (антибот), а RSS и карты при этом открыты и работают: 59 материалов за двое суток. Поиск находит автодетект, шаблон не вписан намеренно"},"gazeta.ru":{search:null,external:!1,note:"страница поиска — заглушка на 3978 байт, ссылок ноль. Карта новостей /sitemap_news.xml — 56 адресов, все свежие. В прогоне 26 сентября 2026 сайт дал НОЛЬ при 77 честно прочитанных статьях: кандидатов нашлось всего 100, то есть вход узкий. Проверить прогоном на широком окне"},"tass.ru":{external:!1,note:"ИЗ ОБЛАЧНОЙ СЕССИИ НЕ ОТКРЫВАЕТСЯ ВОВСЕ: главная отдаёт обрубок в 1,8 КБ, robots.txt — fetch failed, карты сайта не открылись, в прогоне «каналы: none» и ноль. Это может быть репутация дата-центра, а не факт о сайте (случай Reuters) — проверить прогоном с домашней машины, прежде чем делать выводы"},"forbes.ru":{search:null,external:!1,note:"на ЛЮБОЙ адрес, включая robots.txt, отдаётся JS-заглушка антибота (13 602 байта, считает куку скриптом). В прогоне «каналы: none» и ноль. Обычным запросом сайт не взять; проверить прогоном с домашней машины"},"svpressa.ru":{external:!1,note:"форма поиска на главной ведёт на ВИДЖЕТ ЯНДЕКСА (yandex.ru/sitesearch), но автодетект находит рабочий вход сам — 6 материалов за двое суток. Своих карт новостей и RSS у сайта нет"},"ura.news":{external:!1,note:"сайт запрещает автоматический обход: robots.txt, секция User-agent: * -> Disallow: /. В предустановленный список не добавлен намеренно (решение то же, что по Reuters)"},"bbc.com":{search:null,render:"https://www.bbc.com/search?q={q}",selectors:{container:'a[data-testid="internal-link"]',title:'[data-testid="card-headline"]',date:""},external:!1,note:"SPA-поиск; язык запроса = язык сайта (Tokayev для англ.). Замер 23 сентября 2026: формы поиска в разметке главной НЕТ вовсе (её рисует скрипт), поэтому HTTP-поиск выключен, а страница берётся рендером. Материал даёт sitemap-глубина — 14 за сутки по ключу «China»"},"theguardian.com":{search:null,external:!1,note:"HTTP-поиска нет (/search отдаёт 404, формы на главной нет); материал даёт карта новостей с заголовками"},"aljazeera.com":{search:null,external:!1,note:"поиск — оболочка (страница одна и та же на любое слово), WordPress-вход отвечает 404; материал дают rss и карта новостей"},"dw.com":{search:"https://www.dw.com/search/?languageCode=en&item={q}",external:!1,note:"поиск РАБОТАЕТ, параметр item (не q). Осторожно: /search/СЛОВО — это эхо, а не поиск. Пагинация pageIndex не двигается, поэтому страниц в шаблоне нет. languageCode задаёт язык выдачи"},"cnn.com":{search:null,external:!1,note:"форма ведёт на /search?q=, но страница по слову и по мусору побайтово одинакова — выдачу рисует скрипт"},"npr.org":{search:null,external:!1,note:"поиск — оболочка. Карта новостей лежит на другом хосте (googlecrawl.npr.org) и перечислена в robots — канал глубины её берёт"},"euronews.com":{search:"https://www.euronews.com/search?query={q}",external:!1,note:"поиск РАБОТАЕТ, параметр query (/?s= и ?text= отдают ленту). В прогоне 23 сентября 2026 сайт отвечал 406 и на поиск, и на 28 статей; причина не найдена, повторить не удалось — если 406 вернётся, смотреть здесь"},"cbsnews.com":{search:null,external:!1,note:"поиск — оболочка: страницы по слову и по мусору побайтово одинаковы. На быстрый повторный запрос сайт отвечает 406 — это не «ищет», это нас придержали"},"nbcnews.com":{search:null,external:!1,note:"форма ведёт на /search/, но страница в 19 КБ и ссылок на статьи не содержит вовсе; ?s= отдаёт ЛЕНТУ (та же страница на любое слово, искомого слова на ней нет). Материал: rss и карта сайта (без заголовков — дату и ключ узнаём только скачав). Статьи читаются образцово: JSON-LD, дата и тело на месте (улики 24 сентября 2026) — прежний ноль в одном прогоне из двух был разовым отказом главной, а не поломкой"},"independent.co.uk":{search:null,external:!1,note:"/search отдаёт 404, формы на главной нет. Материал дают rss (100 записей) и карта новостей с заголовками"},"straitstimes.com":{search:null,external:!1,note:"поиск — оболочка (восемь проб, страница одна и та же). Материал дают карта новостей с заголовками и rss"},"time.com":{search:null,external:!1,note:"поиск — оболочка. В robots.txt у секции «*» нет ни одного запрета. Материал дают карта новостей и rss"},"usatoday.com":{search:null,external:!1,note:"ЭХО, а не поиск: слово на странице есть, но ссылки на статьи у страницы по слову и по мусору ОДНИ И ТЕ ЖЕ. Судить надо по ссылкам, а не по числу вхождений"},"newsweek.com":{search:null,external:!1,note:"/search?q= отвечает 406, /?s= — это главная. Материал дают rss и карта сайта"},"abcnews.com":{search:null,external:!1,note:"формы поиска на главной нет. Карта новостей — 1000 адресов с заголовками, самая объёмная из проверенных"},"abcnews.go.com":{search:null,external:!1,note:"издание переехало на abcnews.com — вписывайте новый адрес, на старом материала не будет"},"apnews.com":{search:null,external:!1,note:"403 на главную и карты — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026). Значит это НЕ репутация дата-центра, как я предполагал, а обычный отказ всем подряд; robots.txt при этом обход разрешает. Материал даёт только карта новостей — по заголовку, без скачивания"},"france24.com":{search:null,external:!1,note:"из облака 403, хотя robots.txt отдаётся и перечисляет карты новостей по языкам. Тот же класс, что apnews. Английская версия — на /en/"},"japantimes.co.jp":{search:null,external:!1,note:"403 на главную и поиск — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026), то есть отказ не по адресу обращающегося. Ищет ли /search?query= на самом деле — по-прежнему неизвестно: страницу не отдают никому. RSS работает (/feed)"},"reuters.com":{search:null,render:"https://www.reuters.com/site-search/?query={q}",external:!1,note:"поиск сайта — /site-search/?query= (адрес дал пользователь). По HTTP отдаёт 401 DataDome, выдачу рисует Arc-скрипт -> берём РЕНДЕРОМ, без пагинации (render рендерит один адрес). Из облака 401 и обычным запросом, и настоящим Chromium — это репутация дата-центра, у пользователя с домашнего адреса должно открыться. Карты сайта при этом ОТКРЫТЫ: news-sitemap отдаёт 50 записей с заголовком и точной датой, то есть материал с ключом В ЗАГОЛОВКЕ находится вообще без скачивания. Дата стоит в адресе (…-2026-09-22/) -> отсев вне периода бесплатный. В robots.txt сайт запрещает автоматический сбор (Disallow: / для всех) — решение владельца"},"khabar.kz":{search:["https://khabar.kz/ru/search/search?searchword={q}&limitstart={off20}","https://khabar.kz/kk/search/search?searchword={q}&limitstart={off20}"],browserSearch:!0,external:!1,skipPaths:["/agency/"],note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии, материалы у них разные). /agency/ — страницы «О компании» из меню, без дат: отсеиваются до скачивания. Прежняя запись «поиска нет» смотрела /search/?q= — это лента. Глубину даёт sitemap"},"nomad.su":{search:null,browserSearch:!0,external:!1,note:"по уликам: /?s= игнорирует запрос (та же страница на любое слово, ссылок-статей 0). HTTP-поиска нет; браузер-поиск работает; внешний мёртв"},"31.kz":{dead:!0,search:null,browserSearch:!0,noRender:!0,note:"на сайте нет текста материалов: только видео полных выпусков («Полный выпуск Информбюро от 16.11.2026», текста на странице 0 знаков, проверено 20 ноября 2026). Искать ключ не в чем, а общая карта ставит сегодняшнюю дату 600 видео разом. Новости телеканала — YouTube"},"ktk.kz":{search:null,skipPaths:["/important_information/","/for_partners/","/about/"],browserSearch:!0,external:!1,feed:"/ru/News/AjaxPublications/",feedPost:"lastDate={date}",render:"https://www.ktk.kz/ru/Search/Index/?text={q}&searchid=2472426",note:"служебные разделы /important_information/, /for_partners/, /about/ лежат в карте сайта без дат (прозвон 18–19 ноября 2026: 32 «без даты на странице») — не качаем. сертификат сайта без промежуточного звена (UNABLE_TO_VERIFY_LEAF_SIGNATURE) — дотягиваем сами, браузер не нужен; с 21 ноября 2026 каждый ответ — переадресация с кукой __hash_, привязанной к адресу клиента: куку храним сами (desktop/cookie-heal.js), браузер не нужен; лента по датам — POST /ru/News/AjaxPublications/; поиск — виджет Яндекса (рендером)"},"camonitor.kz":{dead:!0,note:"издание переехало на camonitor.net (сказал пользователь 20 ноября 2026) — вписывайте новый адрес. Старый адрес закрыт Cloudflare целиком (HTTP 403 на всё)"},"camonitor.net":{dead:!0,note:"архив: новых материалов нет (свежее — начало 2021 года), дат на страницах и карты сайта нет — проверено 20 ноября 2026"},"dialog.kz":{search:null,feed:"https://dialog.kz/?page={page}",browserSearch:!0,external:!1,note:"сертификат сайта без промежуточного звена (UNABLE_TO_VERIFY_LEAF_SIGNATURE) — дотягиваем сами (цепочка через Root YR -> ISRG Root X1), браузер не нужен. Пагинация ленты ?page=N (0,1,2…)"},"ratel.kz":{search:"https://ratel.kz/search?q={q}",external:!1,note:"РАБОЧИЙ поиск — /search?q= (проверено пользователем 2 сентября 2026). Прежняя разведка смотрела /?s=, а это ЛЕНТА: 78 ссылок и на слово, и на мусор. Дата лежит ТЕКСТОМ в div.post_news__date («Пятница, 04 Июл 2025, 12:00») — ни <time>, ни разметки"},"weproject.media":{browserSearch:!0,external:!1,note:"поиск по форме детектится; внешний мёртв, браузер-поиск подхватывает"},"esquire.kz":{browserSearch:!0,external:!1,note:"поиск по форме /search?query= отвечает обычному запросу (23 сентября 2026: 71 891 б и 6 своих ссылок против 68 561 б и нуля на мусорном слове) — прежняя заметка «HTTP-поиск таймаутит» была разовым отказом, а не фактом о сайте. Браузер-поиск живой; внешний мёртв"},"sn.kz":{browserSearch:!0,note:"HTTP-поиск (native) слабый (24 ссылки); браузер-поиск усиливает"},"zonakz.net":{dead:!0,note:"издание закрыто в 2025 году: сайт открывается, новых материалов нет (проверено пользователем 2 сентября 2026)"},"diapazon.kz":{search:"https://diapazon.kz/search?q={q}&page={page}",feed:"https://diapazon.kz/article/more-list?category=0&count=30&offset={off30}&viewType=main",feedFirst:"https://diapazon.kz/all-news",browserSearch:!0,external:!1,note:"поиск сайта — /search?q= (адрес его собственной формы), пагинация &page=N. Прежняя запись «HTTP-поиска нет» смотрела /?s= — это лента. Статьи без разметки (og:type=website) — берутся по виду адреса. Ни RSS, ни карты сайта нет: глубину даёт AJAX-лента article/more-list?offset={off30} (шаг 30, 20 страниц = 600 ссылок за прогон). feedFirst = статика /all-news как первая страница."},"arasha.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"adyrna.kz":{search:null,feed:"https://adyrna.kz/kk",render:"https://adyrna.kz/kk/search?q={q}",external:!1,note:"быстрый вход — лента на главной: 148 ссылок обычным запросом, покрывают последние 5-6 суток (пагинации нет, одной страницы хватает). Поиск сайта — виджет Google, по HTTP недоступен, поэтому запасным идёт рендер. Карта сайта свежесть НЕ показывает: lastmod у всех 65 398 адресов сегодняшний, а самые «свежие» по нему — материалы 2022-2024 годов. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"democrat.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"malim.kz":{browserSearch:!0,note:"поиск по форме — лучший канал (32 совпадения); браузер-поиск как страховка"},"astanatv.kz":{search:null,skipPaths:["/video/"],browserSearch:!1,external:!1,note:"/video/ — нарезки телепередач (YouTube-плеер, текста нет, даты на странице нет вовсе; проверено 22 ноября 2026 на /ru/video/12073/) — проверить их нечем, не качаем; новости канала лежат в /news/. по уликам: /kz/search/?q= отдаёт ОБЫЧНУЮ ЛЕНТУ, а не результаты — страницы для «Тоқаев» и «Токаев» побайтово одинаковы, слова в выдаче нет ни разу. Рабочего HTTP-поиска нет (23 сентября 2026 перепроверены десять типовых шаблонов, формы поиска в разметке главной тоже нет); всё даёт sitemap-глубина (19-21 материал)"},"24.kz":{search:["https://24.kz/ru/search/search?searchword={q}&limitstart={off20}","https://24.kz/kz/search/search?searchword={q}&limitstart={off20}"],external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии: издание выпускает каждое событие и по-русски, и по-казахски). Прежняя запись «поиска нет вовсе» проверяла ?q= и com_finder — не те адреса"},"politico.kz":{search:["https://politico.kz/search?q_str={q}","https://politico.kz/ru/search?q_str={q}"],browserSearch:!0,note:"поиск ЕСТЬ: q_str, ДВЕ версии — казахская в корне и русская /ru/ (материалы разные). Браузер-поиск оставлен: он единственный тяжёлый канал, где тут что-то ловилось"},"aikyn.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск по форме даёт нули; браузер-поиск живой; внешний мёртв"},"astana-akshamy.kz":{browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку; браузер-поиск подхватывает"},"aqmeshit.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"yujanka.kz":{browserSearch:!1,external:!1,note:"HTTP-поиск ?s= ищет (автодетект сам его находит — WordPress, с пагинацией); браузер-поиск строку поиска не находит вовсе — выключен; материал в основном даёт wp-api"},"qazaqstan.tv":{search:"https://qazaqstan.tv/search?query={q}",external:!1,note:"поиск ЕСТЬ и фильтрует (проверено вручную: «Тоқаев бойынша іздеу нәтижелері», вкладка Жаңалықтар + даты в карточках). Автодетект раньше цеплял не ту форму и тянул всю ленту. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ), иначе нули"},"qmonitor.kz":{dead:!0,search:"https://qmonitor.kz/search/?query={q}",external:!1,note:"сервер не принимает соединения: HTTPS не отвечает вовсе, по HTTP до него не достучаться (connection timeout), домен в DNS есть. Проверено 23 и 24 сентября 2026 с двух независимых адресов; в прогоне стоил 233 с за ноль. Поднимется — снять dead, поиск уже прописан"},"the-steppe.com":{search:"https://the-steppe.com/search?s={q}",external:!1,note:"поиск найден вручную. Ноль по «Токаев» — норма: издание про него не пишет (проверено), это не поломка канала"},"dknews.kz":{search:null,render:"https://dknews.kz/ru/gsearch?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (/ru/gsearch + #gsc.*) — из HTTP не берётся, результаты рисует JS; поднимаем рендером, как orda.kz"},"spik.kz":{search:null,feed:"https://spik.kz/{page}",browserSearch:!1,external:!1,note:"поиска на сайте НЕТ. Лента — три раздела /1, /2, /3 (по 40 статей); прежний адрес /lastnews/ отдаёт 404. Пагинации у разделов нет: /4 = 404, обход останавливается сам. Есть RSS (/rss.xml, 549 КБ) и карта новостей"},"factcheck.kz":{browserSearch:!1,external:!1,noWp:!0,skipPaths:["/publichnaya-oferta","/soglashenie-ob-ispolzovanii","/platezhi-oplata"],note:"с ноября 2026 сайт на Next.js: /wp-json/ отвечает 404, признаки WordPress остались только в адресах картинок — служебный вход выключен (noWp). Оферта, согласие на обработку данных и условия оплаты лежат в карте без дат («без даты — 12» в каждом прогоне) — не качаем. Поиск по форме слабый; внешний мёртв"},"petropavlovsk.news":{dead:!0,note:"домена нет в DNS (пользователь проверил 2 сентября 2026, перепроверено 23 сентября)"},"atamekenbusiness.kz":{dead:!0,note:"сайт телеканала, новостной ценности для мониторинга нет (сервер жив: 200, но ссылок-статей на главной ноль)"},"atpress.kz":{external:!1,note:"Cloudflare-проверка на всём сайте (карта и RSS тоже за ней) — читается только браузером; дешёвый запасной вход — телеграм-канал издания t.me/atpresskz"},"ontustiktv.kz":{search:["https://ontustiktv.kz/kz/search?q={q}&page={page}","https://ontustiktv.kz/ru/search?q={q}&page={page}"],external:!1,note:"поиск сайта ищет (обе версии языка, материалы у них разные), но сортирует по релевантности — свежее даёт карта сайта; телеграм издания t.me/Ontustik_tv"},"today.kz":{dead:!0,note:"сайт выключен — подтвердил пользователь 20 ноября 2026 (у него не открывается; из облака сервер рвёт соединение). Раньше: сертификат на чужое имя"},"taraz24.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"shymkenttv.kz":{dead:!0,note:"канал переехал на ontustiktv.kz — вписывайте новый адрес (подтвердил пользователь 20 ноября 2026). Старый адрес отдаёт HTTP 403 всему (Cloudflare)"},"altaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"atyraupress.kz":{dead:!0,note:"издание переехало на atpress.kz — вписывайте новый адрес (подтвердил пользователь 20 ноября 2026). Старый адрес отдаёт HTTP 403 всему"},"timekz.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"kostanaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"ontustiknews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"aqzhayik.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"alashainasy.kz":{dead:!0,note:"издание переехало на on.kz (301 со старого домена) — вписывайте новый адрес, на старом материала не будет"},"on.kz":{external:!1,note:"бывший alashainasy.kz. Формы поиска на главной нет, типовые адреса поиска 404, карт сайта нет (любой адрес отдаёт одну и ту же страницу) — рабочего входа пока не найдено"},"masa.media":{search:"https://masa.media/ru/search?query={q}",searchCard:'class="search-post',external:!1,note:"выдача поиска — все совпадения разом и в СЛУЧАЙНОМ порядке (2253 по «Казахстан», первая карточка — 2023 год), но у каждой карточки дата в разметке (<!-- 2026-11-19T08:01:00Z -->): поле searchCard отсеивает чужие даты до скачивания (улика агента плагина, 21 ноября 2026: «не влезли в бюджет канала — 1874»). Параметров сортировки и дат у поиска нет; _token формы не нужен. сайт ЖИВОЙ и публикует ежедневно (проверено 23 сентября 2026) — прежняя пометка «мёртв» была неверной. Поиск /ru/search?query= отдаёт 497 своих ссылок против нуля на мусорном слове, но отдаёт их ВСЕ разом и без дат: в контрольном прогоне «ссылок 547, не влезли в бюджет канала — 430». Карт сайта и RSS у него нет: на любой адрес приходит одна и та же страница"},"azattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"radioazattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"kokshetau.asia":{browserSearch:!1,external:!1,noRender:!0,note:"WordPress-поиск таймаутит; render = 0; браузер-поиск ничего не даёт; очень медленный (210-420 с за прогон, wp-api порой не успевает стартовать) — вне списка предустановленных"},"ekaraganda.kz":{external:!1,noRender:!0,note:"поиск по форме детектится (25 ссылок), по слову нули; render капчит; внешний мёртв"},"uralskweek.kz":{browserSearch:!1,external:!1,noRender:!0,note:"поиск `?s=` РАБОТАЕТ (проверено уликами: по мусорному слову ноль совпадений); статьи без разметки дат — день берётся текстом из блока и из адреса; сайт МЕДЛЕННЫЙ, бюджеты каналов упираются во время; render = 0; внешний мёртв"},"365info.kz":{external:!1,note:"видимый поиск — виджет Google (#gsc.q=), обычным запросом не берётся и в пресет не годится; материал даёт wp-api (16 за август). WordPress-поиск + render детектятся сами; внешний мёртв"},"almaty.tv":{external:!1,note:"HTTP-поиск (native) детектится сам; внешний мёртв"},"mgorod.kz":{external:!1,note:"HTTP-поиск (native) отрабатывает; внешний мёртв"},"aktobetimes.kz":{external:!1,note:"RSS + автопоиск; внешний мёртв"},"egemen.kz":{search:null,api:{url:"https://egemen.kz/api/news?published=true&limit=1000&skip={off1000}",list:"data",where:{status:"PUBLISHED"},slug:"slug",link:"https://egemen.kz/news/{slug}",title:["titleKk","titleRu"],date:"publishedAt",text:["contentKk","contentRu","excerptKk","excerptRu"],perPage:1e3},render:"https://egemen.kz/search?q={q}",external:!1,note:"служебный вход сайта (Next.js) — /api/news: все опубликованные новости, свежие первыми, с ПОЛНЫМ текстом и точной датой (сверено со страницей до миллисекунды), листается параметром skip (курсором — 36 с на запрос, skip — 2 с); 1000 новостей — 16 суток, 1,6 МБ, 2,6 секунды (22 ноября 2026). Вход отдаёт и ЧЕРНОВИКИ — поэтому published=true и отбор по status: PUBLISHED. HTTP-поиск — оболочка (199 536 б на любой запрос, слова на странице нет вовсе); браузером тот же адрес даёт 10 своих результатов -> берём рендером. След на будущее: /api/search?q={q}&page={page}&limit=10 отвечает JSON, но ссылок в нём нет — только slug. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"turkystan.kz":{note:"HTTP-поиск (native) отрабатывает; браузер-поиск память ещё не разобрала"},"elordainfo.kz":{external:!1,note:"Elorda Info (Астана, на казахском); rss + карта новостей + глубина + поиск формы. Замер 20.11.2026: 49 материалов за двое суток. Одна статья приходит с хвостом ?id= и без него — склеивается по canonical"},"azattyq-ruhy.kz":{external:!1,cutText:["фундаментальный политический принцип президента"],note:"Azattyq Rýhy (казахская версия); карта новостей + глубина + поиск формы. Замер 20.11.2026: 25 материалов"},"rus.azattyq-ruhy.kz":{external:!1,cutText:["фундаментальный политический принцип президента"],note:"Azattyq Rýhy (русская версия); rss + карта новостей + глубина + поиск формы. В конец каждой статьи рубрики «Закон и порядок» издание дописывает абзац «Концепция «Закон и порядок» — фундаментальный политический принцип президента… Токаева»: по ключу «Токаев» это 15 ложных строк из 44 (замер 20.11.2026), поэтому предложение вырезается (cutText)"},"qazaqtoday.info":{external:!1,note:"QazaqToday (на казахском, WordPress); rss + карта новостей + wp-api. Замер 20.11.2026: 29 материалов за 20 с"},"bes.media":{external:!1,note:"Bes.media; карта новостей + глубина + поиск формы. Замер 20.11.2026: 15 материалов"},"dalanews.kz":{external:!1,note:"Dalanews (на казахском); rss + карта новостей + глубина + поиск формы. Замер 20.11.2026: 14 материалов, сайт медленный (81 с)"},"ult.kz":{external:!1,note:"Ult.kz (на казахском); rss + карта новостей + глубина + поиск формы. Замер 20.11.2026: 13 материалов"},"kt.kz":{external:!1,drop:["share"],note:"Kazakhstan Today; rss + поиск формы. Замер 20.11.2026: 8 материалов за 28 с"},"ozgeris.info":{external:!1,note:"Өзгеріс (на казахском); материал даёт только поиск формы. Замер 20.11.2026: 9 материалов за 19 с"},"qaz-media.kz":{external:!1,note:"Qaz-media (Петропавловск, WordPress); rss + wp-api + поиск формы. Замер 20.11.2026: 6 материалов"},"kstnews.kz":{external:!1,note:"Костанайские новости (первое место zero.kz по посещаемости в разделе СМИ); rss + wp-api + поиск формы. Замер 20.11.2026: 2 материала за 57 с — региональный, про Токаева пишет мало"},"memleket.kz":{external:!1,note:"НЕ издание, а портал госорганов: одну новость перепубликуют десятки акиматов («Аппарат акима Каракудыкского сельского округа…»). Замер 20.11.2026: 93 строки, из них 37 копий одной статьи под разными номерами. В список не взят"},"tiek.kz":{external:!1,note:"проверено 20.11.2026: поиск отвечает, материала за двое суток по «Тоқаев» ноль. В список не взят"},"ekonomist.kz":{external:!1,note:"проверено 20.11.2026: rss + wp-api + поиск, ноль по «Тоқаев» за 66 с. В список не взят"},"bnews.kz":{external:!1,note:"проверено 20.11.2026: каналы none — ни ленты, ни карты, ни поиска не нашлось"},"centralasia.media":{external:!1,note:"проверено 20.11.2026: 2 материала за 97 с — в список не взят по цене"}};i(tn,"lookupKnown")});function mu(e){typeof e=="function"&&(ko=e)}function gu(e){e&&typeof e.get=="function"&&typeof e.set=="function"&&(gn=e)}function wu(e){Ei=typeof e=="function"?e:null}function yu(e){typeof e=="function"&&(zr=e)}function vu(e){typeof e=="function"&&(bu=e)}function au(e){let t=new Set;for(let n of e||[])n&&n.url&&!/^не открылась|^не успели/.test(n.verdict||"")&&t.add(n.url);return n=>n&&n.url&&!t.has(n.url)}async function mn(e,{groups:t,exclude:n,fromD:r,toD:s,originHost:o,channelLabel:a,deadline:c,maxFetch:l=80,browserFallback:d=!1,browserBudget:p=null,browserIf:f=null,diag:u=null,tally:h=null,pick:m=null,have:w=null}){let g=i(C=>{h&&(h[C]=(h[C]||0)+1)},"tick"),b=[],x=[];try{let C=o?tn("https://"+o):null;b=C&&C.skipPaths||[],x=(C&&C.cutText||[]).map(j=>String(j).toLowerCase())}catch{}let k=i(C=>{if(!h)return;let j=[];try{j=new URL(C).pathname.toLowerCase().split("/").filter(Boolean)}catch{return}let H=j.find(ie=>!/^[a-z]{2}$/.test(ie)&&!/^\d+$/.test(ie));H&&((h.noDateWhere||(h.noDateWhere={}))[H]=(h.noDateWhere[H]||0)+1)},"tickSection"),y=Cr(t),v=n||[],L=d?1:4,A=Symbol("добрать браузером"),T=i(C=>(d||p&&p.left>0)&&(!f||f(C)),"canBrowser"),R=3,F=typeof process<"u"&&process.env&&Number(process.env.MC_SLOW_GAP_MS)||400,D=25,z=h&&(h._slow||(h._slow={}))||{};z.resets===void 0&&Object.assign(z,{resets:0,on:!1,saved:0,tried:0,chain:null,why:{}});let B=i(C=>{let j=(z.chain||Promise.resolve()).then(()=>ji(F)).then(C);return z.chain=j.then(()=>{},()=>{}),j},"chained"),$=i(C=>z.on?B(C):C(),"paced"),Q=i((C,j)=>{if(Fi(C))return g("listing"),j&&(j.verdict="раздел сайта, не статья (видно по адресу)",u.push(j)),!0;if(b.length){let ie="";try{ie=new URL(C).pathname}catch{}if(b.some(ke=>ie.includes(ke)))return g("listing"),j&&(j.verdict="служебная страница сайта (пресет: "+b.find(ke=>ie.includes(ke))+")",u.push(j)),!0}if(Zd(C))return g("listing"),j&&(j.verdict="это файл, а не страница (видно по адресу)",u.push(j)),!0;let H=ye(gn.get(C));if(H&&!Xe(H,r,s))return g("staleDate"),j&&(j.verdict="дата вне периода (из памяти дат)",j.date=gn.get(C),j.parsed=Z(H),u.push(j)),!0;if(!H&&(r||s)){let ie=jt(C);if(ie&&(r&&+ie<+r-864e5||s&&+ie>+s+864e5))return g("urlDateOut"),j&&(j.verdict="дата вне периода (видно по адресу)",j.parsed=Z(ie),u.push(j)),!0}return!1},"cheapSkip"),ze=i(async(C,j)=>{let H=u?{url:C,channel:a}:null;if(c&&Date.now()>c)return g("late"),H&&(H.verdict="не успели (бюджет времени)",u.push(H)),null;let ie=[],ke=j?null:await $(()=>So(C,ie)),Oe=!ke&&!j?d0(ie[0]):null;Oe&&(z.resets++,z.why[Oe]=(z.why[Oe]||0)+1,!z.on&&z.resets>=R&&(z.on=!0),z.tried<D&&(z.tried++,ie.length=0,ke=await B(()=>So(C,ie)),ke&&z.saved++));let J=!1;if(!ke&&j&&T(C)){p&&p.left--;let ce=await zr(C);ke=ce&&ce.ok?ce.html:null,ke&&(g("viaBrowser"),J=!0)}if(!ke&&!j&&T(C))return A;if(!ke)return g("noOpen"),h&&ie[0]&&(h.noOpenWhy=h.noOpenWhy||{},h.noOpenWhy[ie[0]]=(h.noOpenWhy[ie[0]]||0)+1),H&&(H.verdict="не открылась"+(ie[0]?" ("+ie[0]+")":" (WAF/таймаут/404)"),u.push(H)),null;let X=yo(Ii(ke,C),C,m&&m.hint);if(!X)return!Jd(ke)&&!bo(C)?(g("notArticle"),H&&(H.verdict="не статья (меню/категория/оболочка), даты на ней тоже нет",u.push(H)),null):(g("noDate"),k(C),H&&(H.verdict="дата не найдена на странице",u.push(H)),null);if(m&&X.dateVia&&(m.seen[X.dateVia]=(m.seen[X.dateVia]||0)+1),!X.isArticle&&!bo(C))return g("notArticle"),H&&(H.verdict="не статья (меню/категория/оболочка)",H.title=X.title||"",u.push(H)),null;try{let ce=(ke.match(/<link\b[^>]*\brel\s*=\s*["']?canonical\b[^>]*>/i)||[])[0],Ye=ce&&(ce.match(/\bhref\s*=\s*["']([^"']+)["']/i)||[])[1];if(Ye){let rt=new URL(At(Ye),C),je=new URL(C),Ge=i(Vn=>Vn.toLowerCase().replace(/^www\./,""),"bare");!rt.search&&je.search&&Ge(rt.host)===Ge(je.host)&&rt.pathname.replace(/\/+$/,"")===je.pathname.replace(/\/+$/,"")&&(X.url=rt.href)}}catch{}if(Gd(X.title))return g("notArticle"),H&&(H.verdict="подборка по теме, а не материал",H.title=X.title||"",u.push(H)),null;if(X.date&&gn.set(C,X.date),h&&X.date){let ce=ye(X.date);if(ce){let Ye=Z(ce);(h._pageDays||(h._pageDays={}))[Ye]=(h._pageDays[Ye]||0)+1;let rt=jt(C);rt&&(h.urlDateN=(h.urlDateN||0)+1,Math.abs(+Mt(Ye)-+Mt(Z(rt)))>2*864e5&&(h.urlDateOff=(h.urlDateOff||0)+1))}}if(x.length){let ce=i(Ye=>String(Ye||"").split(/(?<=[.!?…])\s+/).filter(rt=>!x.some(je=>rt.toLowerCase().includes(je))).join(" "),"cut");X.body=ce(X.body),X.description=ce(X.description)}X._hay=((X.title||"")+" "+(X.description||"")+" "+(X.body||"")).toLowerCase();let Ie=(X.body||"").length;if(h&&(h._bodies||(h._bodies=[])).push(Ie),h&&ye(X.date)){let ce=h._read||(h._read=new Set);ce.add(ve(C)),X.url&&ce.add(ve(X.url))}if(Ei)try{Ei({url:C,date:X.date,dateVia:X.dateVia,bodyLen:Ie,title:X.title,viaBrowser:J})}catch{}if(H){let ce=ye(X.date);H.title=(X.title||"").slice(0,80),H.date=X.date||"",H.parsed=Z(ce),H.inRange=Xe(X.date,r,s),H.hasKw=dt(X._hay,t),H.hasExclude=v.length?dt(X._hay,v):!1,H.verdict=H.parsed?H.inRange?H.hasExclude?"минус-слово":H.hasKw?"ВЗЯТА":"ключа нет в тексте":"дата вне периода":"дата не распознана",u.push(H)}return X},"handle"),De=[],et=[];for(let C of e){let j=u?{url:C,channel:a}:null;if(w&&w.has(ve(C))){g("dupe"),j&&(j.verdict="её уже принёс другой канал — второй раз не качаем",u.push(j)),et.push(C);continue}if(h&&h._read&&h._read.has(ve(C))){g("reread"),j&&(j.verdict="её уже прочитал другой канал (ключа нет или дата вне периода) — второй раз не качаем",u.push(j));continue}Q(C,j)||De.push(C)}if(De.length>l){for(let C=l;C<De.length;C++)g("overBudget"),u&&u.push({url:De[C],channel:a,verdict:"не влезла в бюджет канала"});e=De.slice(0,l)}else e=De;let _=await Mo(e,L,C=>ze(C,!1)),qe=_.filter(C=>C!==A),Ue=e.filter((C,j)=>_[j]===A);if(Ue.length)for(let C of await Mo(Ue,1,j=>ze(j,!0)))C!==A&&qe.push(C);let Se=null,q=[];for(let C of qe){if(!C)continue;let j=ye(C.date);if(j&&(!Se||j>Se)&&(Se=j),!Xe(C.date,r,s)){g("outOfPeriod");continue}if(v.length&&dt(C._hay,v)){g("excluded");continue}if(!dt(C._hay,t)){g("noKw");continue}g("taken");let H=dt((C.title||"").toLowerCase(),t)?"title":"body",ie=$n((C.description||"")+" "+(C.body||"")+" "+(C.title||""),C.title,y);q.push({source:o,title:C.title,url:C.url,date:C.date,dateSource:"page",channel:a,match:H,snippet:ie})}for(let C of et)q.push({url:C,channel:a,_dupe:!0});return{rows:q,newest:Se}}function vs(e){if(!e)return!1;let t=String(e).slice(0,4e3);return/<title[^>]*>\s*(just a moment|attention required|подожд|один момент)/i.test(t)||/id="(challenge-running|cf-challenge-running|cf-please-wait|challenge-form|turnstile-wrapper)"/i.test(t)||/cf-browser-verification|_cf_chl_opt|\/cdn-cgi\/challenge-platform/i.test(t)?!0:/just a moment|checking your browser|verifying you are human|проверка браузера/i.test(t)&&String(e).length<6e4}function iu(e,t,n){let r=new Map;for(let s of String(e||"").split(t).slice(1)){let o=s.match(/\b(20\d\d-\d\d-\d\d(?:[T ]\d\d:\d\d(?::\d\d)?(?:\.\d+)?(?:Z|[+-]\d\d:?\d\d)?)?|\d{1,2}\.\d{2}\.20\d\d(?:[ ,]+\d{1,2}:\d{2}(?::\d{2})?)?)(?!\d)/),a=o?ye(o[1]):null;if(a){a.timed=/\d:\d\d/.test(o[1]);for(let c of Xn(s,n))r.has(c)||r.set(c,a)}}return r}async function r0(e){let t=new AbortController,n=setTimeout(()=>t.abort(),8e3);try{let r=await fetch(e,{method:"HEAD",redirect:"manual",headers:Ss,signal:t.signal}),s=r.status>=300&&r.status<400&&r.headers.get("location");return s?new URL(s,e).href:e}catch{return e}finally{clearTimeout(n)}}async function s0(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),xu);try{let s=await fetch(e,{method:"POST",redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",...Ss},body:t,signal:n.signal});return s.ok?await s.text():null}catch{return null}finally{clearTimeout(r)}}function o0(e){let t=i(n=>String(n).padStart(2,"0"),"p");return t(e.getDate())+"."+t(e.getMonth()+1)+"."+e.getFullYear()}async function a0(e,t=2){for(let n=0;;n++){let r=new AbortController,s=setTimeout(()=>r.abort(),xu);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...Ss},signal:r.signal});if((o.status===429||o.status===503)&&n<t){clearTimeout(s),await ji(1e3*(n+1));continue}if(!o.ok)throw new Error("HTTP "+o.status);return await o.text()}finally{clearTimeout(s)}}}async function zt(e){try{return await a0(e)}catch{return null}}function Ii(e,t){let n=null;try{n=tn(new URL(t).origin)}catch{}return n&&Array.isArray(n.drop)&&n.drop.length?Kd(e,n.drop).html:e}async function Su(e){let t=await Lo(e);if(!t.ok)return{ok:!1,err:t.err||"HTTP "+t.status};if(vs(t.text))return{ok:!0,challenge:!0};let n=yo(Ii(t.text,e),e);if(!n)return{ok:!0,date:null};let r=[];try{let o=tn(new URL(e).origin);r=(o&&o.cutText||[]).map(a=>String(a).toLowerCase())}catch{}let s=n.body||"";return r.length&&(s=s.split(/(?<=[.!?…])\s+/).filter(o=>!r.some(a=>o.toLowerCase().includes(a))).join(" ")),{ok:!0,date:n.date,dateVia:n.dateVia||"",bodyLen:s.length,title:n.title||""}}async function So(e,t){let n=await Lo(e);return!n.ok&&t&&t.push(n.err?n.err:"HTTP "+n.status),n.ok?n.text:null}function lu(e,t){let n=ye(e),r=ye(t);return!n||!r?!1:Z(n)===Z(r)}function Ls(e){if(!e)return"неизвестная ошибка";if(e.name==="AbortError")return"таймаут";let t=e;for(let s=0;s<5&&t&&t.cause&&typeof t.cause=="object";s++)t=t.cause;let n=String(t&&t.code||e&&e.code||""),r=String(t&&t.message||e&&e.message||e);return cu[n]?cu[n]+" ("+n+")":n||(/certificat|ssl|tls/i.test(r)?"ошибка TLS: "+r.slice(0,80):r.slice(0,120))}function d0(e){return c0(e)?"рвал соединение":l0(e)?"отвечал «перегружен»":null}async function xo(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...Ss},signal:t.signal});return{ok:r.ok,status:r.status,url:r.url||e,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Ls(r)}}finally{clearTimeout(n)}}async function Lo(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{...Ss},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Ls(r)}}finally{clearTimeout(n)}}async function p0(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),2e4),s={...u0};t&&(s.Referer=t);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:s,signal:n.signal});return{ok:o.ok,status:o.status,text:o.ok?await o.text():""}}catch(o){return{ok:!1,status:0,err:Ls(o)}}finally{clearTimeout(r)}}function ct(e){try{return new URL(e).host.replace(/^www\./,"")}catch{return e}}function Fi(e){let t;try{t=new URL(e)}catch{return!1}if(/[?&]page=\d+/i.test(t.search))return!0;let n=t.pathname.toLowerCase().replace(/\/+$/,"").split("/").filter(Boolean);if(n.some(o=>/^(cat|cats|tag|tags|category|categories|rubric|rubrics|topic|topics|section|sections|archive|archives|author|authors|search|label|labels|feed|rss|page|person|persons|people|persona|personalii|theme|themes|tema|temy)$/.test(o))||(()=>{let o=n.findIndex(d=>/^(19|20)\d\d$/.test(d));if(o<0)return 0;let a=n.slice(o);if(a.length<2||a.length>3)return 0;let c=/^(0?[1-9]|1[0-2])$/.test(a[1]||""),l=a.length<3||/^(0?[1-9]|[12]\d|3[01])$/.test(a[2]);return c&&l?a.length:0})())return!0;let s=n[n.length-1]||"";return!!(/^(19|20)\d\d-(0?[1-9]|1[0-2])(-(0?[1-9]|[12]\d|3[01]))?$/.test(s)||n.length<=2&&s&&!/[-_]/.test(s)&&!/\d/.test(s)&&s.length<=16)}function h0(e){let t=String(e||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|weather|pogoda|ingredients?|statics?)\b/i.test(t.replace(/[-_.]/g," "))}function vo(e){let t=String(e||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|sections?|pages?|weather|pogoda|search|ingredients?|images?|img|photos?|gallery|video|media|podcasts?)\b/i.test(t.replace(/[-_.]/g," "))}function f0(e){let t=/(20\d{2})[^\d]?(0[1-9]|1[0-2])?/,n=String(e||"");try{n=new URL(n,"https://x").pathname}catch{}let s=n.slice(n.lastIndexOf("/")+1).match(t)||n.match(t);return s?{y:+s[1],mo:s[2]?+s[2]:0}:null}function du(e,t){let n=e&&t?+t-+e:0,r=n>0?Math.max(1,Math.round(n/864e5)):0;return r?r<=2?{days:r,maxCands:300,budgetMs:9e4}:r<=6?{days:r,maxCands:600,budgetMs:18e4}:{days:r,maxCands:1e3,budgetMs:3e5}:{days:0,maxCands:300,budgetMs:9e4}}function xs(e){try{let t=new URL(e),n=[];return t.searchParams.forEach((r,s)=>{/^(from|utm_|_openstat|ysclid|fbclid|gclid|yclid)/i.test(s)&&n.push(s)}),n.forEach(r=>t.searchParams.delete(r)),t.hash="",t.toString()}catch{return String(e||"").split("#")[0]}}function m0(e){return e.length>=2&&/[A-Za-zА-Яа-яЁё]/.test(e)&&e===e.toUpperCase()&&e!==e.toLowerCase()}function g0(e){let t=["а","я","и","ы","е","о","у","ю","й","ь"];for(let n of t)if(e.length-1>=4&&e.endsWith(n))return e.slice(0,-1);return e}function w0(e,t){let n=m0(e),r=e.toLowerCase();return t&&!n&&r.length>=5&&(r=g0(r)),{text:r,whole:n}}function nn(e,t,n){let r=Number(n)>0?Math.floor(Number(n)):0;return(e||"").split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean).map(s=>{let o=s.match(/^["'«](.+)["'»]$/);if(o)return{words:[{text:o[1].toLowerCase().trim(),whole:!1}]};let a=s.split(/\s+/).filter(Boolean).map(c=>w0(c,t));return r&&a.length>1?{words:a,near:r}:{words:a}})}function b0(e,t){let n=e.split(/[^\p{L}\p{N}-]+/u).filter(Boolean),r=t.words.map(s=>{let o=[];for(let a=0;a<n.length;a++)(s.whole?n[a]===s.text:n[a].includes(s.text))&&o.push(a);return o});if(r.some(s=>!s.length))return t.words.every(s=>Lu(e,s))?t.words.every(s=>/\s/.test(s.text))?!0:y0(e,t):!1;for(let s of r.flat())if(r.every(o=>o.some(a=>a>=s&&a-s<=t.near)))return!0;return!1}function y0(e,t){let n=t.near*8,r=t.words.map(s=>{let o=[],a=-1;for(;(a=e.indexOf(s.text,a+1))>=0&&o.length<500;)o.push(a);return o});for(let s of r.flat())if(r.every(o=>o.some(a=>a>=s&&a-s<=n)))return!0;return!1}function Lu(e,t){if(!t.text)return!1;if(!t.whole){if(t._pre===void 0)try{t._pre=new RegExp("(?<![\\p{L}\\p{N}])"+t.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"u")}catch{t._pre=null}return t._pre?t._pre.test(e):e.includes(t.text)}if(t._re===void 0)try{t._re=new RegExp("(?<![\\p{L}\\p{N}])"+t.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}\\p{N}])","u")}catch{t._re=null}return t._re?t._re.test(e):(" "+e+" ").includes(" "+t.text+" ")}function dt(e,t){return t.length?t.some(n=>n.words.every(r=>Lu(e,r))&&(!n.near||b0(e,n))):!0}function Cr(e){return e.flatMap(t=>t.words.map(n=>n.text))}function Dr(e,t,n=150){let r=(e||"").replace(/\s+/g," ").trim();if(!r)return"";let s=r.toLowerCase(),o=-1;for(let l of t){let d=s.indexOf(l);d>=0&&(o<0||d<o)&&(o=d)}if(o<0)return r.slice(0,n);let a=Math.max(0,o-60),c=Math.min(r.length,o+90);return(a>0?"…":"")+r.slice(a,c).trim()+(c<r.length?"…":"")}function Ci(e){let t=String(e&&e.snippet||"").trim(),n=String(e&&e.title||"").trim();return n?t?To(t).includes(To(n))?t:t+" "+n:n:t}function $n(e,t,n,r=150){let s=Dr(e,n,r),o=To(s),a=To(t);return!o||o===a||a&&a.includes(o)||a&&o.startsWith(a)&&o.length-a.length<v0?"":s}function k0(e,t){let n=String(e||"");return n=n.split(/\s+https?:/i)[0],n=n.replace(/\s*[›»].*$/,""),n=n.replace(/\s*\|\s*[^|]*$/,""),t&&(n=n.replace(new RegExp("\\s*[-–—]\\s*"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*$","i"),"")),n.replace(/\s+/g," ").trim()}function uu(e,t){let n=(e||"").toLowerCase().replace(/\s+/g," "),r=n.search(/\s[—–·]\s/);r>=0&&r<90&&(n=n.slice(r+3));let s=-1,o="";for(let c of t){if(!c)continue;let l=n.indexOf(c);l>=0&&(s<0||l<s)&&(s=l,o=c)}if(s<0)return{b:"",a:""};let a=i(c=>c.replace(/[^\p{L}\p{N} ]+/gu," ").replace(/\s+/g," ").trim(),"norm");return{b:a(n.slice(Math.max(0,s-40),s)),a:a(n.slice(s+o.length,s+o.length+40))}}function x0(e){let t=String(e).trim();/^https?:\/\//i.test(t)||(t="https://"+t);try{return new URL(t).origin}catch{return null}}function S0(e){try{let t=new URL(e);return t.host=t.host.startsWith("www.")?t.host.slice(4):"www."+t.host,t.origin}catch{return null}}function L0(e,t){let n=String(e||"");try{let r=new URL(n,"https://www.bing.com");if(/\/ck\/a/i.test(r.pathname)){let o=r.searchParams.get("u")||"";for(/^a1/i.test(o)&&(o=o.slice(2)),o=o.replace(/-/g,"+").replace(/_/g,"/");o.length%4;)o+="=";try{let a=typeof atob=="function"?atob(o):Buffer.from(o,"base64").toString("binary");/^https?:\/\//i.test(a)&&(n=a)}catch{}}let s=new URL(n).host.replace(/^www\./,"");if(s===t||s.endsWith("."+t))return n.split("#")[0]}catch{}return null}function Tu(){Ar=0,ks=0,$i=!1}async function M0(e,t){if($i)return{ok:!1,status:0,err:"ddg: пропущен (частота ограничена)",gaveUp:!0};let n=Date.now();Ar<n&&(Ar=n);let r=Ar;Ar+=2500,r-n>0&&await T0(r-n);let s=await p0(e,t),o=s.text||"";return!s.ok||/anomaly|are you a robot|too many requests|captcha/i.test(o)||o.length<22*1024&&!/result__a/i.test(o)?(ks++,Ar=Date.now()+Math.min(ks*4e3,2e4),ks>=4&&($i=!0)):ks=0,s}function A0(e){try{let t=String(e).replace(/&amp;/g,"&"),n=t.match(/[?&]uddg=([^&]+)/i);if(n)try{t=decodeURIComponent(n[1])}catch{}return t.startsWith("//")&&(t="https:"+t),t}catch{return e}}function z0(e,t){let n=String(e),r=[],s=new Set,o=i(l=>At(String(l).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()),"clean"),a=i((l,d,p)=>{let f=A0(l),u;try{u=new URL(f).host.replace(/^www\./,"")}catch{return}if(u!==t&&!u.endsWith("."+t))return;let h=f.split("#")[0];s.has(h)||(s.add(h),r.push({url:h,title:d||"",snippet:p||""}))},"push"),c=n.split(/class="result__a"/i).slice(1);for(let l of c){let d=l.match(/href="([^"]+)"/i);if(!d)continue;let p=l.match(/>([\s\S]*?)<\/a>/i);a(d[1],p?o(p[1]):"")}if(!r.length){for(let d of n.match(/uddg=[^"&\s]+/gi)||[])a("//x?"+d);let l=new RegExp("https?://(?:www\\.)?"+t.replace(/\./g,"\\.")+`/[^"'\\s<>]+`,"gi");for(let d of n.match(l)||[])a(d)}return r}async function Mo(e,t,n){let r=[],s=0;async function o(){for(;s<e.length;){let a=s++;try{r[a]=await n(e[a])}catch{r[a]=null}}}return i(o,"worker"),await Promise.all(Array.from({length:Math.min(t,e.length||1)},o)),r}function Mu(e,t){let n=/^https:/i.test(String(t||"")),r=[];for(let s of String(e||"").split(`
`)){if(!/^\s*sitemap:/i.test(s))continue;let o=s.replace(/^\s*sitemap:/i,"").trim();o&&(n&&/^http:\/\//i.test(o)&&r.push(o.replace(/^http:/i,"https:")),r.push(o))}return[...new Set(r)]}function D0(e){let t=e.match(/<div[^>]+id=["']webkit-xml-viewer-source-xml["'][^>]*>([\s\S]*?)<\/div>/i);return t?t[1]:e}function C0(e){return async t=>{let n=await zt(t);if(n)return n;if(!e)return null;let r=await zr(t);return!r||!r.ok||!r.html?null:D0(r.html)}}async function R0(e,t,n=zt){let r=Mu(t,e),s=[...new Set([...r.filter(c=>/news|last-news|google|yandex|turbo/i.test(c)),e+"/news-sitemap.xml",e+"/google-news-sitemap.xml",e+"/sitemap-google.xml",e+"/sitemap-yandex.xml",e+"/sitemap-news.xml"])];for(let c of s){let l=await n(c);if(!l)continue;let d=await Pi(l,0);if(d.length)return d}let o=r.filter(c=>/\/sitemap(?:[-_.]?index)?\.xml(?:$|\?)/i.test(c)).slice(0,2),a=o.length?o:r.length?[]:[e+"/sitemap.xml"];for(let c of a){let l=await n(c);if(!l||!/<sitemapindex/i.test(l))continue;let d=Ai(l).map(p=>p.loc).filter(p=>/google|yandex|turbo/i.test(p)&&!s.includes(p));for(let p of d.slice(0,3)){let f=await n(p);if(!f)continue;let u=await Pi(f,0);if(u.length)return u}}return[]}async function N0(e,t,n,r,s){let{maxMaps:o=40,maxCands:a=300,maxCollect:c=Math.max(a*10,2e3),deadline:l,fetchText:d=zt,blindOk:p=!0,slugHints:f=[],collectStats:u={}}=s||{},h=[];try{let q=tn(e);h=q&&q.skipPaths||[]}catch{}let m=i(q=>{if(!h.length)return!1;try{let C=new URL(q).pathname;return h.some(j=>C.includes(j))}catch{return!1}},"presetSkip"),w=n?+n:-1/0,g=r?+r:1/0,b=0,x=i(q=>{let C=ye(gn.get(q));return!C||Xe(C,n,r)?!1:(b++,!0)},"staleByMemory"),k=Number.isFinite(g)?g+21*864e5:1/0,y=Mu(t,e),v=[...new Set([...y,e+"/sitemap.xml",e+"/sitemap_index.xml",e+"/sitemap-index.xml",e+"/sitemapindex.xml",e+"/sitemap/sitemap.xml"])].sort((q,C)=>(vo(q)?1:0)-(vo(C)?1:0)),L=[],A=[],T=new Set,R=0,F=0,D=0,z=i(q=>{let C=q?ye(q):null,j=C?+C:NaN;return Number.isFinite(j)?j>=w&&j<=k:!0},"childInRange");async function B(q,C){if(F>=o||L.length>=c||l&&Date.now()>l||T.has(q))return;if(T.add(q),h0(q)){R++;return}let j=await d(q);if(!j||!/<(urlset|sitemapindex)\b/i.test(j)){C>0&&D++;return}if(F++,/<sitemapindex/i.test(j)&&C<3){let Oe=i(je=>f0(je.loc),"ymOf"),J=i(je=>{if(je.lastmod)return String(je.lastmod);let Ge=Oe(je);return Ge?Ge.y+"-"+String(Ge.mo).padStart(2,"0"):""},"keyOf"),X=n?n.getFullYear():-1/0,Ie=r?r.getFullYear():1/0,ce=i(je=>{if(je.lastmod)return z(je.lastmod);let Ge=Oe(je);return Ge?Ge.y>=X&&Ge.y<=Ie:!0},"kidOk"),Ye=Ai(j).filter(ce).sort((je,Ge)=>J(Ge).localeCompare(J(je))).sort((je,Ge)=>(vo(je.loc)?1:0)-(vo(Ge.loc)?1:0)),rt=new Set(Ye.map(J));if(Ye.length>1&&(Ye.every(je=>!J(je))||rt.size===1)){let je=Di(Ye);Ye.length=0,Ye.push(...je)}for(let je of Ye)if(await B(new URL(je.loc,q).href,C+1),F>=o||L.length>=c||l&&Date.now()>l)break;return}let H=[],ie=[],ke=0;for(let Oe of tu(j)){let J;try{J=new URL(Oe.loc,q).href}catch{continue}if(Fi(J)||m(J)||x(xs(J)))continue;let X=Oe.lastmod?+ye(Oe.lastmod):NaN;if(!Number.isFinite(X))try{if(new URL(J).pathname==="/")continue}catch{}if(Number.isFinite(X)){if(X<w||X>g)continue;H.push({loc:xs(J),lm:Oe.lastmod});continue}let Ie=jt(J);if(Ie){ke++;let ce=+Ie;if(ce<w||ce>g)continue}ie.push({loc:xs(J),lm:""})}if(!H.length&&!ke&&ie.length){for(let Oe of Di(ie)){if(A.length>=c)break;A.push(Oe)}return}for(let Oe of H)if(L.push(Oe),L.length>=c)return;for(let Oe of Di(ie))if(L.push(Oe),L.length>=c)return}i(B,"walk");for(let q of v)if(await B(q,0),L.length>=c||F>=o)break;if(p)for(let q of A){if(L.length>=c)break;L.push(q)}let $=new Map;for(let q of L)$.has(q.loc)||$.set(q.loc,q);let Q=[...$.values()].sort((q,C)=>String(C.lm).localeCompare(String(q.lm)));b&&(u.stale=b),u.pool=Q.length,u.poolKeys=new Set(Q.map(q=>ve(q.loc))),u.capped=Q.length>=c,u.roots=v.length,u.maps=F,u.mapsFailed=D,R?u.taxo=R:delete u.taxo;let ze=i(q=>{let C=q.lm&&ye(q.lm)||jt(q.loc);return C&&Z(C)||""},"dayOf"),De=i(q=>f.length>0&&f.some(C=>q.loc.toLowerCase().includes(C)),"hinted"),et=i(q=>{u.nodate=q.filter(j=>!ze(j)).length;let C=q.filter(De).length;return C?u.hinted=C:delete u.hinted,q},"finish");if(Q.length<=a)return et(Q);let _=new Map;for(let q of Q){let C=ze(q);_.has(C)||_.set(C,[]),_.get(C).push(q)}for(let q of _.values())q.sort((C,j)=>(De(j)?1:0)-(De(C)?1:0));let qe=[..._.keys()].filter(Boolean).sort().reverse(),Ue=_.get("")||[],Se=[];for(let q=0;Se.length<a;q++){let C=0;for(let j of qe){let H=_.get(j);if(q<H.length&&(Se.push(H[q]),C++,Se.length>=a))break}if(!C)break}for(let q of Ue){if(Se.length>=a)break;Se.push(q)}return et(Se)}async function Pi(e,t){let n=nu(e).filter(r=>r.title&&r.date);if(n.length)return n;if(t<1&&/<sitemapindex/i.test(e)){let r=(e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[]).map(s=>({loc:(s.match(/<loc>([^<]+)<\/loc>/)||[])[1]?.trim(),lm:(s.match(/<lastmod>([^<]+)<\/lastmod>/)||[])[1]||""})).filter(s=>s.loc);r.sort((s,o)=>String(o.lm).localeCompare(String(s.lm)));for(let s of r.slice(0,5)){let o=await zt(s.loc);if(o&&(n.push(...await Pi(o,t+1)),n.length>500))break}}return n}function Au(e,t){let n=e.match(/<form\b[\s\S]*?<\/form>/gi)||[],r=null,s=0;for(let a of n){if(/method\s*=\s*["']post["']/i.test(a))continue;let c=(a.match(/\baction\s*=\s*["']([^"']*)["']/i)||[])[1]||"",l=(a.match(/class\s*=\s*["']([^"']*)["']/i)||[])[1]||"",d=a.match(/<input\b[^>]*>/gi)||[],p=null,f=-1,u=[];for(let m of d){let w=((m.match(/\btype\s*=\s*["']([^"']+)["']/i)||[])[1]||"text").toLowerCase(),g=(m.match(/\bname\s*=\s*["']([^"']+)["']/i)||[])[1];if(!g)continue;if(w==="hidden"){u.push([g,(m.match(/\bvalue\s*=\s*["']([^"']*)["']/i)||[])[1]||""]);continue}if(/submit|button|checkbox|radio|image|file/.test(w))continue;let b=0;w==="search"&&(b+=3),/^(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)$/i.test(g)?b+=2:/search|query|поиск|іздеу/i.test(g)&&(b+=1),b>f&&(f=b,p=g)}if(!p||f<=0)continue;let h=f;/role\s*=\s*["']search["']/i.test(a)&&(h+=2),/search|query|поиск|іздеу/i.test(c)&&(h+=2),/search|query|поиск/i.test(l)&&(h+=1),h>s&&(s=h,r={action:c,qname:p,hidden:u})}if(!r)return null;let o;try{o=new URL(r.action||"/",t)}catch{return null}for(let[a,c]of r.hidden)if(c&&a!==r.qname)try{o.searchParams.set(a,c)}catch{}return o.searchParams.set(r.qname,"__MCQ__"),o.toString().replace("__MCQ__","{q}")}function pu(e,t,n,r){if(!e)return{ok:!1,why:"нет ответа"};let s=new Set(Xn(e,n));if(s.size===0)return{ok:!1,realN:0,junkN:0,uniqueN:0,why:"ссылок-статей нет (оболочка/JS-выдача)"};let o=t?new Set(Xn(t,n)):new Set,a=0;for(let l of s)o.has(l)||a++;let c={realN:s.size,junkN:o.size,uniqueN:a};if(r){let l=String(r).toLowerCase().split(/\s+/).filter(Boolean)[0]||"",d=l.length>5?l.slice(0,Math.max(5,l.length-2)):l;if(d&&!e.toLowerCase().includes(d))return{...c,ok:!1,why:"искомого слова нет в выдаче (это лента, а не результаты)"}}return o.size===0?{...c,ok:!0,why:"мусорный запрос пуст"}:a>=2?{...c,ok:!0,why:"выдача отличается от мусорной"}:{...c,ok:!1,why:"та же страница, что и на мусорный запрос (параметр игнорируется)"}}async function Ri(e,t,n){let r=encodeURIComponent;if(n){let l=[].concat(n).filter(h=>typeof h=="string"&&h),d=i(h=>{let m=h.indexOf("#");return m>=0&&h.indexOf("{q}")>m},"hashOnly"),p=l.filter(d);if(l=l.filter(h=>!d(h)),!l.length)return p.length?{kind:"none",warn:"ключ в шаблоне стоит после «#» — такой адрес серверу не передаётся, выдачу рисует скрипт в браузере (нужен render)"}:null;let f=i(h=>(m,w)=>h.replace(/\{q\}/g,r(m)).replace(/\{page\}/g,w).replace(/\{off(\d+)\}/g,(g,b)=>(w-1)*+b).replace(/\{wpage\}/g,w<=1?"":`page/${w}/`).replace(/\{bpage\}/g,w<=1?"":`pagen${w}/`).replace(/\{dpage\}/g,w<=1?"":`page-${w}/`),"mk"),u=l.map(f);return{kind:"override",hasPage:l.some(h=>/\{page\}|\{off\d+\}|\{wpage\}|\{bpage\}|\{dpage\}/.test(h)),builds:u,build:u[0]}}let s=Au(t,e);if(s){let l=await zt(s.replace("{q}",r("президент"))),d=await zt(s.replace("{q}",r("qwszxcvnonsense12345")));if(pu(l,d,e,"президент").ok){let p=s.includes("?")?"&":"?";return{kind:"form",hasPage:!0,build:i((f,u)=>u<=1?s.replace("{q}",r(f)):s.replace("{q}",r(f))+p+"page="+u,"build")}}}if(Bd(t))return{kind:"wordpress",hasPage:!0,build:i((l,d)=>d<=1?`${e}/?s=${r(l)}`:`${e}/page/${d}/?s=${r(l)}`,"build")};let o=["/search/?text=","/search/?q=","/search/?search_text=","/search/?query=","/search?text=","/search?q=","/search?search_text=","/search?query=","/search_results/?q=","/search_results/?text=","/results/?q=","/?s=","/?q=","/?query=","/?search_text=","/?searchword="],a=[];for(let l of String(t||"").matchAll(/href="\/(ru|kz|kk|en)\//g))a.includes("/"+l[1])||a.push("/"+l[1]);if(a.length)for(let l of a.slice(0,2))for(let d of["/search/?q=","/search/?text=","/search/?query=","/search?q="])o.push(l+d);let c=Date.now();for(let l of o){if(Date.now()-c>2e4)break;let d=await zt(e+l+r("президент")),p=await zt(e+l+r("qwszxcvnonsense12345"));if(pu(d,p,e,"президент").ok){let f=e+l,u=l.includes("?")?"&":"?";return{kind:"native",hasPage:!0,build:i((h,m)=>m<=1?f+r(h):`${f}${r(h)}${u}page=${m}`,"build")}}}return null}function Hi(e){let t=String(e||"").trim();if(/^@[A-Za-z0-9_]{4,}$/.test(t))return t.slice(1);let n=t.match(/(?:t|telegram)\.me\/(?:s\/)?(@?[A-Za-z0-9_]{4,})/i);if(n){let r=n[1].replace(/^@/,"");if(!/^(s|joinchat|addstickers|addemoji|proxy|share|iv|setlanguage|bg)$/i.test(r))return r}return null}function E0(e,t){let n=[],r=/data-post="[^"/]+\/(\d+)"([\s\S]*?)(?=data-post="|$)/g,s;for(;s=r.exec(e);){let o=+s[1],a=s[2],c=a.match(/<time[^>]+datetime="([^"]+)"/),l=a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div class="tgme_widget_message_(?:footer|reply|info)|<\/div>)/)||a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/),d=l?l[1]:"";d=d.replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,""),d=At(d).replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim(),o&&c&&n.push({id:o,url:"https://t.me/"+t+"/"+o,date:c[1],text:d})}return n}async function P0(e,t){let n=t.morph!==!1,r=nn(t.keyword,n,t.near),s=nn(t.exclude||"",n),o=Cr(r),a=i(L=>dt((L||"").toLowerCase(),r),"hasKw"),c=i(L=>s.length>0&&dt((L||"").toLowerCase(),s),"hasExclude"),l=Mt(t.from),d=ws(t.to),p=$0+e,f=[],u=[],h=new Set,m=45e3,w=80,g=null,b=!1,x=0,k=0,y=Date.now(),v="";for(;!b&&x<w&&Date.now()-y<m;){x++;let L=g?p+"?before="+g:p,A=await Lo(L);if(!A.ok&&(A.status===429||A.status>=500)&&(await ji(1500),A=await Lo(L)),!A.ok){let D=A.status?"HTTP "+A.status:A.err||"не ответил";v=x===1?"канал не открылся ("+D+") — частный/не существует?":"лента оборвалась на "+x+"-й странице ("+D+")";break}let T=E0(A.text,e);if(!T.length){v=x===1?"постов не видно (частный канал? нужен t.me/s/)":"лента кончилась";break}k+=T.length;let R=null,F=null;for(let D of T){let z=ye(D.date);if(z&&(!R||z<R)&&(R=z),(F===null||D.id<F)&&(F=D.id),h.has(D.id)||(h.add(D.id),!Xe(D.date,l,d))||!D.text||!a(D.text)||c(D.text))continue;let B=z?z.toISOString():"",$=D.text.split(`
`)[0].slice(0,90)||"(без текста)";f.push({source:"t.me/"+e,title:$,url:D.url,date:B,dateSource:"post",channel:"telegram",match:"post",snippet:$n(D.text,$,o)})}if(l&&R&&R<l&&(b=!0,v="дошли до начала периода"),!b&&(F===null||F===g)){v="лента не листается дальше";break}g=F}return v||(v=x>=w?"упёрлись в "+w+" страниц":"стоп по времени (45 с)"),u.push(`постов просмотрено ${k} (страниц ${x}, ${v}), совпало ${f.length}`),{rows:f,channel:"telegram",note:u.filter(Boolean).join("; ")}}function O0(e,t){let n=0,r=!1,s=!1;for(let o=t;o<e.length;o++){let a=e[o];if(r)s?s=!1:a==="\\"?s=!0:a==='"'&&(r=!1);else if(a==='"')r=!0;else if(a==="{")n++;else if(a==="}"&&--n===0)return e.slice(t,o+1)}return null}function j0(e){let t=e.indexOf("ytInitialData");if(t<0)return null;let n=e.indexOf("=",t),r=e.indexOf("{",n);if(n<0||r<0)return null;let s=O0(e,r);try{return s?JSON.parse(s):null}catch{return null}}function Oi(e,t){if(!(!e||typeof e!="object"))if(e.videoRenderer&&e.videoRenderer.videoId&&t.push(e.videoRenderer),Array.isArray(e))for(let n of e)Oi(n,t);else for(let n in e)Oi(e[n],t)}function H0(e){let t=String(e||"").toLowerCase();return/секунд|минут|час|sec|min|hour|сағат|мину?т|только что|сейчас|сегодня|today|бүгін/.test(t)?0:/недел|апта|week/.test(t)?7:/месяц|month|\bай\b/.test(t)?31:/год|лет|жыл|year/.test(t)?366:/дн|день|сутк|күн|тәулік|day|вчера|yesterday|кеше/.test(t)?1:31}function q0(e){let t=String(e||""),n=/"uploadDate"\s*:\s*"([^"]{4,40})"/.exec(t);return n||(n=/itemprop="(?:datePublished|uploadDate)"[^>]*content="([^"]{4,40})"/.exec(t)),n||(n=/<meta[^>]+content="([^"]{4,40})"[^>]*itemprop="(?:datePublished|uploadDate)"/.exec(t)),n?ye(n[1]):null}function B0(e,t,n=new Date){let r=Ni.indexOf(e)>=0?e:"month";if(!(t?ye(t):null))return r;let o=(n.getTime()-Mt(t).getTime())/864e5,a=o<=1?"today":o<=7?"week":o<=31?"month":"year";return Ni.indexOf(a)>Ni.indexOf(r)?a:r}async function zu(e,t){let n=t&&t.ytRange||"month",r=B0(n,t&&t.from),s=t.morph!==!1,o=nn(e,s,t.near),a=nn(t.exclude||"",s),c=Cr(o),l=hu[r]||hu.month,d=`${fu}/results?search_query=${encodeURIComponent(e)}&sp=${l}`,p=await xo(d);if(!p.ok)return{rows:[],channel:"youtube",note:"YouTube не открылся"+(p.status?" (HTTP "+p.status+")":"")};let f=j0(p.text);if(!f)return{rows:[],channel:"youtube",note:"не разобрал выдачу (согласие/капча?)"};let u=[];Oi(f,u);let h=[],m=new Set;for(let A of u){let T=A.videoId;if(!T||m.has(T))continue;m.add(T);let R=ys(A.title),F=ys(A.publishedTimeText),D=ys(A.ownerText||A.longBylineText),z=A.detailedMetadataSnippets&&A.detailedMetadataSnippets[0]&&ys(A.detailedMetadataSnippets[0].snippetText)||ys(A.descriptionSnippet),B=(R+" "+z+" "+D).toLowerCase();if(o.length&&!dt(B,o)||a.length&&dt(B,a))continue;let $=F?ye(F):null;h.push({source:"youtube",title:R||T,url:`${fu}/watch?v=`+T,date:$?$.toISOString():"",channel:"youtube",match:"video",snippet:(D?"["+D+"] ":"")+(Dr(z||R,c)||F),_fuzz:H0(F)})}let w=Mt(t.from),g=ws(t.to),b=Date.now()+I0,x=0,k=0,y=0,v=[];await Mo(h.slice(0,F0),4,async A=>{let T=ye(gn.get(A.url));if(!T&&Date.now()<b){let R=await So(A.url);T=R?q0(R):null,T&&gn.set(A.url,T.toISOString())}T?(x++,A.date=T.toISOString()):k++,A._exact=!!T});for(let A of h){if(A._exact){if(!Xe(A.date,w,g)){y++;continue}}else{let T=ye(A.date),R=(A._fuzz||0)*864e5;if(T&&(w&&+T+R<+w||g&&+T-R>+g)){y++;continue}}delete A._fuzz,delete A._exact,v.push(A)}let L=["фильтр YouTube: "+r+(r!==n?" (в настройке «"+n+"» — расширен, иначе окно не попадает в выдачу)":"")];return y&&L.push("вне периода отсеяно "+y),k&&L.push("дат со страницы не прочитали: "+k+" — у них дата приблизительная"),{rows:v,channel:"youtube",note:`видео: ${v.length} (${L.join("; ")})`}}async function Ao(e,t){let n=Hi(e);if(n)return P0(n,t);let{keyword:r,from:s,to:o,maxPages:a=3,override:c,maxArticles:l=60}=t,d=x0(e);if(!d)return{rows:[],channel:"bad-url",note:"не разобрал адрес"};let p=tn(d);if(p&&p.dead)return{rows:[],channel:"пропущен",note:"сайт пропущен: "+(p.note||"помечен нерабочим"),stats:{render:null,external:null,sitesearch:null}};let f=t.morph!==!1,u=nn(r,f,t.near),h=t.seek&&String(t.seek).trim()||r,m=t.seek?nn(h,f):u,w=nn(t.exclude||"",f),g=Cr(u),b=i(S=>dt((S||"").toLowerCase(),u),"hasKw"),x=i(S=>dt((S||"").toLowerCase(),u),"kwInTitle"),k=i(S=>w.length>0&&dt((S||"").toLowerCase(),w),"hasExclude"),y=Mt(s),v=ws(o),L=[],A=[],T=[],R=[],F=i((S,M,N)=>{R.some(U=>U.channel===S)||R.push({channel:S,status:M,url:String(N||"")})},"entryErr"),D=t.diag?[]:null,z=t.diag?{searchUrl:null,rawLinks:[],searchKind:null,renderUrl:null}:null,B=new Map,$=await xo(d+"/"),Q="",ze=null;if(i(S=>!S.ok&&(S.err||[401,403,429,503].includes(S.status))||S.ok&&vs(S.text),"homeBlocked")($)){let S=S0(d);if(S&&S!==d){let M=await xo(S+"/");if(M.ok&&!vs(M.text)){let N=$.err?$.err:$.ok?"заглушка защиты":"HTTP "+$.status,U=i(O=>{try{return new URL(O).host}catch{return O}},"hn");T.push("главная: переключился на "+U(S)+" (на "+U(d)+" — "+N+")"),d=S,$=M}}}let et=d;try{let S=$.ok&&$.url?new URL($.url):null;S&&S.hostname.replace(/^www\./,"")===ct(d).replace(/^www\./,"")&&(et=S.origin)}catch{}let _=!1;if($.ok&&vs($.text)&&($={ok:!1,status:$.status,err:"страница-заглушка защиты"},T.push("главная: за защитой (Cloudflare) — иду браузером")),!$.ok){Q=$.err||($.status?"HTTP "+$.status:"не открылась");let S=await zr(d+"/");S&&S.ok&&S.html&&S.html.length>500&&!vs(S.html)?($={ok:!0,status:S.status||200,text:S.html},_=!0,T.push("главная: через браузер (обычным запросом — "+Q+")")):S&&S.err&&T.push("главная: браузером тоже не вышло — "+S.err)}if($.ok||T.push("главная: "+($.status?"HTTP "+$.status:$.err||"не открылась")),!$.ok&&!$.status&&i0.test(String($.err||"")))return{rows:[],channel:"недоступен",note:T.join("; ")+"; сайт недоступен с этого компьютера — каналы не запускались",stats:{render:null,external:null,sitesearch:null,unreachable:String($.err)}};let qe=$.text||"",Ue=C0(_),Se=await Ue(d+"/robots.txt")||"";/<[a-z]/i.test(Se)&&(Se=At(Se.replace(/<[^>]+>/g,`
`)));let q=new Set,C=new Set,j=0,H=null,ie=null,ke=null;try{let S=[...new Set([...[].concat((tn(d)||{}).rss||[]).map(M=>{try{return new URL(M,d).href}catch{return null}}).filter(Boolean),...Qd(qe).map(M=>{try{return new URL(M,d).href}catch{return null}}).filter(Boolean),d+"/rss",d+"/rss/",d+"/feed/",d+"/rss.xml"])];for(let M of S.slice(0,4)){let N=await zt(M);if(!N||!/<(item|entry)[\s>]/i.test(N))continue;let U=eu(N);if(U.length){A.push("rss"),H={oldest:null,undated:0,untitled:U.filter(O=>!O.title).length,n:U.length};for(let O of U){let I=ye(O.date);I&&(!ie||+I>+ie)&&(ie=I),I?(!H.oldest||+I<+H.oldest)&&(H.oldest=I):H.undated++;let me=I?I.toISOString():null;if(me&&O.link&&Xe(me,y,v))try{let ne=ve(new URL(O.link,d).href);q.add(ne),C.add(ne)}catch{}let pe=O.title+" "+(O.description||"")+" "+(O.full||"");if(O.full&&j++,O.title&&b(pe)&&!k(pe)&&Xe(me,y,v)){let ne;try{ne=new URL(O.link,d).href}catch{continue}L.push({source:ct(d),title:O.title,url:ne,date:me||"",dateSource:"feed",channel:"rss",match:x(O.title)?"title":"body",snippet:$n((O.description||"")+" "+(O.full||"")+" "+O.title,O.title,g)})}}j&&T.push(`rss: в ленте полный текст статей (${j} из ${U.length}) — ключ ищется и в тексте, без скачивания`);break}}}catch(S){T.push("rss: "+S.message)}try{let S=await R0(d,Se,Ue);if(S.length){A.push("news-sitemap");for(let M of S)M.url&&M.date&&Xe(M.date,y,v)&&q.add(ve(M.url)),b(M.title)&&!k(M.title)&&Xe(M.date,y,v)&&L.push({source:ct(d),title:M.title,url:M.url,date:M.date,dateSource:"feed",channel:"news-sitemap",match:"title",snippet:$n(M.title,M.title,g)});if(y){let M=null,N=0,U=[];for(let O of S){let I=O.date?ye(O.date):null;if(!I){N++;continue}(!M||+I<+M)&&(M=I),O.url&&Xe(O.date,y,v)&&U.push({loc:O.url,lm:O.date})}ke={oldest:M,undated:N,inWin:U,total:S.length,untitled:S.filter(O=>!O.title).length}}}}catch(S){T.push("sitemap: "+S.message)}let Oe=[],J={},X={hint:t.datePick||"",seen:{}},Ie=i(()=>new Set(L.map(S=>ve(S.url))),"haveKeys"),ce={left:16},Ye=0,rt=!1,je="";try{let S=!!(tn(d)||{}).noWp;if(S&&u.length&&/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(qe)&&T.push("wp-api: выключен пресетом (вход сайта не работает)"),!S&&/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(qe)&&u.length){let M=Date.now()+25e3,N=i(te=>String(te).padStart(2,"0"),"p2"),U=i(te=>te.getFullYear()+"-"+N(te.getMonth()+1)+"-"+N(te.getDate())+"T"+N(te.getHours())+":"+N(te.getMinutes())+":"+N(te.getSeconds()),"wpDate"),O=new Set(L.map(te=>ve(te.url))),I=new Set,me=[],pe=[],ne=!1,xe=0,ge=0,W=0,Y=new Set,Re=!1,Le=50,_e=6,Ve=/^(page|attachment|nav_menu_item|wp_|revision|customize_|oembed_|user_request|product_variation|acf-|elementor_|e-|jet-|tablepress)/,de=["posts"],Pe=!1;try{let te=await zt(d+"/wp-json/wp/v2/types"),oe=te?JSON.parse(te):null;if(oe&&typeof oe=="object"&&!Array.isArray(oe)){Pe=!0;for(let re of Object.keys(oe)){let ae=oe[re]||{},he=ae.rest_base||re;!he||Ve.test(re)||Ve.test(he)||ae.rest_namespace&&ae.rest_namespace!=="wp/v2"||de.includes(he)||de.push(he)}}}catch{Pe=!1}let we=/news|articl|novost|material|publicat|zhana|habar|jańalyq/i,be=[de[0],...de.slice(1).sort((te,oe)=>(we.test(oe)?1:0)-(we.test(te)?1:0))].slice(0,4);for(let te of be)for(let oe of m){let re=oe.words.map(ae=>ae.text).join(" ");if(re)for(let ae=1;ae<=_e;ae++){if(Date.now()>M){Re=!0;break}let he=d+"/wp-json/wp/v2/"+te+"?search="+encodeURIComponent(re)+"&after="+U(y)+"&before="+U(v)+"&per_page="+Le+"&page="+ae+"&orderby=date&order=desc&_fields=date,date_gmt,link,title,excerpt";xe++;let le=await zt(he);if(!le){ge++;break}let P=null;try{P=JSON.parse(le.replace(/^\s*<pre[^>]*>/i,"").replace(/<\/pre>\s*$/i,""))}catch{W++;break}if(!Array.isArray(P)){W++;break}ne=!0;for(let V of P){let se=V&&V.link;if(!se)continue;let fe=xs(se),Ae=ve(fe),pt=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(String(V.date_gmt||""))&&!/^0000/.test(V.date_gmt)?String(V.date_gmt).replace(/Z?$/,"Z"):V.date;if(Xe(pt,y,v)){Y.add(Ae);let Et=ye(pt);Et&&B.set(Ae,Et.toISOString())}if(O.has(Ae)||I.has(Ae))continue;I.add(Ae);let Ke=i(Et=>At(String(Et||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"flat"),yt=Ke(V.title&&V.title.rendered),mt=Ke(V.excerpt&&V.excerpt.rendered);Xe(pt,y,v)&&(k(yt)||k(mt)||(dt((yt+" "+mt).toLowerCase(),u)?me.push({source:ct(d),title:yt,url:fe,date:pt,dateSource:"api",channel:"wp-api",match:x(yt)?"title":"body",snippet:Dr(mt||yt,g)}):pe.push(fe)))}if(P.length<Le)break;ae===_e&&(Re=!0)}}if(ne){A.push("wp-api"),me.forEach(he=>L.push(he)),Ye=me.length;let te=0;if(pe.length&&Date.now()<M){let{rows:he}=await mn(pe,{groups:u,exclude:w,fromD:y,toD:v,originHost:ct(d),channelLabel:"wp-api",deadline:M+3e4,maxFetch:60,diag:D,tally:J});he.forEach(le=>{L.push(le),te++}),Ye+=te}let oe=L.filter(he=>(he.channel==="rss"||he.channel==="news-sitemap")&&Xe(he.date,y,v)).map(he=>ve(he.url)),re=oe.filter(he=>!Y.has(he)),ae=oe.length>0;rt=!Re&&re.length===0&&(ae||Pe&&me.length>0),je=Re?"ответ обрезан по бюджету":re.length?"вход не увидел "+re.length+" материал(ов), найденных лентой":ae?"сверено с лентой: "+oe.length+" из "+oe.length:Pe?"типов записей опрошено "+be.length:"список типов записей недоступен",T.push("wp-api: сайт сам отобрал по слову и датам, взято "+Ye+(te?" (из них "+te+" проверены по тексту)":"")+(be.length>1?"; типы записей: "+be.join(", "):"")+"; полнота: "+(rt?"подтверждена":"не подтверждена")+" ("+je+")")}else{let te=xe?ge?"вход не ответил (таймаут или бюджет канала 25 с), попыток "+xe:W?"вход отдал не список записей — похоже, REST закрыт, попыток "+xe:"вход промолчал, попыток "+xe:"ни одного запроса не ушло (кончился бюджет канала ещё до старта)";T.push("wp-api: у сайта есть признаки WordPress, но "+te)}}}catch(S){T.push("wp-api: "+S.message)}let Ge=!1,Vn="",An=0,Gn=!1,ln=!1,zn="",E=0,Me=!1;try{let S=tn(d),M=S&&S.api&&typeof S.api=="object"?S.api:null;if(M&&M.url&&M.link&&y&&v&&u.length){A.push("api");let N=i((oe,re)=>String(re||"").split(".").reduce((ae,he)=>{if(ae==null)return ae;let le=he.indexOf(":");if(le>0){let P=ae[he.slice(0,le)],V=Array.isArray(P)&&P.find(se=>se&&se.name===he.slice(le+1));return V?V.value:void 0}return ae[he]},oe),"pick"),U=i((oe,re)=>{let ae=new Date(oe);return ae.setDate(ae.getDate()+re),Z(ae)},"dayShift"),O=Date.now()+(M.budgetMs||9e4),I=M.maxPages||60,me=M.perPage||20,pe=0,ne=0,xe=0,ge=0,W=!1,Y="",Re=0,Le=new Set(L.map(oe=>ve(oe.url))),_e=i(oe=>{let re=N(oe,M.date);if(re==null||re==="")return null;if(M.dateUnix)return Number.isFinite(+re)&&+re>0?new Date(+re*1e3):null;let ae=M.dateZone?String(re).trim().replace(/(Z|[+-]\d\d:?\d\d)$/i,"")+M.dateZone:re;return ye(ae)},"dateOf"),Ve=/\{q\}/.test(M.url),de=Ve?h.split(/[,;\n]+/).map(oe=>oe.trim()).filter(Boolean):[null],Pe=!0,we=M.monthPages||null,be=we?{y:v.getFullYear(),m:v.getMonth()+1,page:null}:null,te=i(oe=>oe.replace(/\{year\}/g,be.y).replace(/\{month\}/g,be.m).replace(/\{page\}/g,be.page),"mpFill");for(let oe of de){W=!1;for(let re=1;re<=I;re++){if(Date.now()>O){Y="стоп по времени";break}let ae=be?te(be.page==null?we.last:M.url):M.url.replace(/\{q\}/g,oe==null?"":encodeURIComponent(oe)).replace(/\{page\}/g,re).replace(/\{off(\d+)\}/g,(se,fe)=>(re-1)*+fe).replace(/\{from\}/g,U(y,-1)).replace(/\{to\}/g,U(v,1)),he=await zt(ae);if(!he){Y="вход не ответил на "+re+"-й странице";break}let le=null,P=null;try{le=JSON.parse(he),P=N(le,M.list)}catch{}if(!Array.isArray(P)){Y="вход отдал не список";break}if(pe++,be){if(be.page==null){let se=+N(le,we.total);be.page=Number.isFinite(se)?se-1:0}else be.page--;be.page<1&&(be.m--,be.m<1&&(be.m=12,be.y--),be.page=null)}if(!P.length){if(be)continue;W=!0;break}let V=!1;for(let se of P){ne++;let fe=_e(se);if(!fe)continue;if(+fe>Date.now()+15*6e4&&Re++,fe<y){V=!0;continue}if(!Xe(fe,y,v)||(xe++,M.where&&Object.keys(M.where).some(Je=>String(N(se,Je))!==String(M.where[Je]))))continue;let Ae=N(se,M.slug||"alias");if(!Ae)continue;let pt=!1,Ke=M.link.replace(/\{([\w.]+)\}/g,(Je,Wn)=>{let _n=Wn==="slug"?Ae:N(se,Wn);return(_n==null||_n==="")&&(pt=!0),String(_n)});if(pt)continue;let yt=En([].concat(M.title||"title").map(Je=>N(se,Je)).find(Je=>Je)||""),mt=[].concat(M.text||[]).map(Je=>En(N(se,Je)||"")).join(" "),Et=(yt+" "+mt).toLowerCase();if(M.resolve||B.set(ve(Ke),fe.toISOString()),!(!dt(Et,u)||k(Et))){if(M.resolve&&(Ke=await r0(Ke),B.set(ve(Ke),fe.toISOString())),Le.has(ve(Ke))){L.push({url:Ke,channel:"api",_dupe:!0});continue}Le.add(ve(Ke)),L.push({source:ct(d),title:yt,url:Ke,date:fe.toISOString(),dateSource:"api",channel:"api",match:x(yt)?"title":"body",snippet:$n(mt,yt,g)}),ge++}}if(V||!be&&P.length<me){W=!0;break}re===I&&(Y="упёрлись в потолок страниц ("+I+")")}if(W||(Pe=!1),Y)break}W=Pe,Ve&&!Y&&(Y="вход ищет сам, по своему правилу — полноту не засчитываем"),Gn=W&&!Y,M.textFull===!1&&!Y&&(Y="вход отдаёт только заголовок и анонс — ключ в тексте статьи им не найти"),Ge=W&&!Y,An=xe,Vn=Ge?"прочитано "+xe+" статей сайта за период, страниц "+pe:Y,Ve&&(An=0),T.push("api: служебный вход издания, совпало "+ge+"; полнота: "+(Ge?"подтверждена":"не подтверждена")+" ("+Vn+")"+(Re?"; ВНИМАНИЕ: "+Re+" дат позже текущего момента — похоже, вход указывает пояс неверно (поле dateZone в пресете)":""))}}catch(S){T.push("api: "+S.message)}let it=0;try{if(t.skip instanceof Set?t.skip.has("sitemap"):(t.skip||[]).includes("sitemap"))throw{skipped:!0};if(rt)throw{wpCovered:!0};if(Ge)throw{apiCovered:!0};let S=Date.now(),M=du(y,v),N=S+M.budgetMs,U=[...new Set(r.split(/[,;\n]+/).map(W=>W.trim()).filter(Boolean).flatMap(W=>W.split(/\s+/)).flatMap(W=>Mi(W)))],O={};ze=O;let I="",me=ke?[...C].filter(W=>!ke.inWin.some(Y=>ve(Y.loc)===W)):[],pe=!!(ke&&y&&ke.inWin.length&&!ke.undated&&ke.oldest&&+ke.oldest<+Mt(Z(y))&&!me.length),ne=pe?(()=>{let W=new Set,Y=[];for(let de of ke.inWin){let Pe=ve(de.loc);W.has(Pe)||(W.add(Pe),Y.push(de))}let Re=i(de=>U.some(Pe=>de.loc.toLowerCase().includes(Pe)),"hinted"),Le=[...Y.filter(Re),...Y.filter(de=>!Re(de))],_e=_?200:M.maxCands,Ve=Le.slice(0,_e);return O.pool=Y.length,O.poolKeys=W,O.maps=1,O.hinted=Ve.filter(Re).length,I=`список статей периода — из карты новостей (${Y.length}, она доходит до ${Z(ke.oldest)}`+(C.size?`, сверена с лентой: ${C.size} из ${C.size}`:", ленты для сверки нет")+"), общую карту сайта не читали; ",Ve})():await N0(d,Se,y,v,_?{maxMaps:10,maxCands:200,deadline:S+9e4,fetchText:Ue,blindOk:L.length===0,slugHints:U,collectStats:O}:{maxMaps:40,maxCands:M.maxCands,deadline:N,fetchText:Ue,blindOk:L.length===0,slugHints:U,collectStats:O}),xe=new Set(L.map(W=>ve(W.url))),ge=ne.map(W=>W.loc).filter(W=>!xe.has(ve(W)));if(ge.length||T.push("sitemap-глубина: "+(pe?`все ${ne.length} статей периода из карты новостей уже взяты лентой и картой новостей`:O.stale?`новых статей нет — все ${O.stale} адресов уже читали, они вне периода`:O.maps?`карт прочитано ${O.maps}, статей за период в них нет`:`карты сайта не открылись (адресов карт в robots и по типовым путям: ${O.roots||0})`)+(O.mapsFailed?`; ещё ${O.mapsFailed} карт не открылись — сайт отвечал ошибками, это не «статей нет»`:"")),ge.length){A.push("sitemap-глубина");let W=_?{maxFetch:200,deadline:S+9e4}:{maxFetch:M.maxCands,deadline:N},Y=null,Le=_&&U.length?{left:Math.min(8,ce.left)}:null,_e=Le?Le.left:0,Ve=J&&J.viaBrowser||0,de=i(st=>U.some(un=>st.toLowerCase().includes(un)),"hintedUrl"),Pe=J?(J.noOpen||0)+(J.noDate||0)+(J.late||0)+(J.overBudget||0):0,we=40,be=30,te=i(st=>st?(st.taken||0)+(st.noKw||0)+(st.excluded||0):0,"inP"),oe=i(st=>st&&st.outOfPeriod||0,"outP"),re={groups:u,exclude:w,fromD:y,toD:v,originHost:ct(d),channelLabel:"sitemap",deadline:W.deadline,browserBudget:Le,browserIf:Le?de:null,diag:D,tally:J,pick:X},ae=[];if(y&&ge.length>we&&W.maxFetch>we){let st=te(J),un=oe(J);ae=(await mn(ge.slice(0,we),{...re,maxFetch:we})).rows;let pn=te(J)-st,Vt=oe(J)-un;!pn&&Vt>=be?(Y={read:Vt,left:ge.length-we},J&&(J.mapLied=Y.left)):ae=ae.concat((await mn(ge.slice(we),{...re,maxFetch:W.maxFetch-we})).rows)}else ae=(await mn(ge,{...re,maxFetch:W.maxFetch})).rows;{let un=i(Yn=>Yn?(Yn.noOpen||0)+(Yn.noDate||0)+(Yn.late||0)+(Yn.overBudget||0):0,"lossOf")(J)-Pe,pn=O.poolKeys||new Set,Vt=pe?[...C]:[...q],wd=Vt.filter(Yn=>!pn.has(Yn)),bg=!O.capped&&(O.pool||0)<=ne.length;zn=_?"сайт за защитой":Y?"карта не показывает даты публикации":bg?Date.now()>W.deadline?"стоп по времени":un?"не проверено страниц: "+un:Vt.length?wd.length?"в карте нет "+wd.length+" из "+Vt.length+" статей ленты":"":"сверять не с чем: лента ничего не перечислила за период":"карта отдала больше, чем влезло в бюджет",ln=!zn,ln&&(zn=(pe?"в карте новостей ":"в карте ")+ne.length+" статей периода, все проверены; сверено с лентой: "+Vt.length+" из "+Vt.length)}let he=Le?_e-Le.left:0;he&&(ce.left-=he);let le=(J&&J.viaBrowser||0)-Ve;ae.forEach(st=>L.push(st)),it=ae.length;let P="";if(y&&v){let st=new Set;for(let pn of ne){let Vt=pn.lm&&ye(pn.lm)||jt(pn.loc);Vt&&st.add(Z(Vt))}let un=Math.max(1,Math.round((+ws(Z(v))-+Mt(Z(y)))/864e5));st.size&&(P=`, дней периода охвачено ${st.size} из ${un}`)}let V=O.hinted?`, с ключом в адресе ${O.hinted}`:"",se=O.stale?`, старых по памяти дат пропущено ${O.stale}`:"",fe=O.nodate?`, из них без даты в карте ${O.nodate} (день узнаём, только скачав)`:"",Ae=O.pool||0;Ae>ne.length&&!Y&&(E=Ae-ne.length,Me=!!O.capped);let pt=Ae>0?Math.max(1,Math.round(ne.length/Ae*100)):0,Ke=Y?`; карта сайта не показывает даты публикации (lastmod — время правки): из ${Y.read} прочитанных по ней статей ни одной за период, остальные ${Y.left} не качали — там тот же архив`:Ae>ne.length?O.capped?`; взято ${ne.length} из БОЛЕЕ ЧЕМ ${Ae} статей сайта за период (не больше ${pt}%, сколько их всего — не знаем: упёрлись в свой потолок сбора) — остальные не читали, бюджет канала`:`; взято ${ne.length} из ${Ae} статей сайта за период (${pt}%) — остальные не читали, бюджет канала`:"",yt=_?200:M.maxCands,mt=_?"сайт за защитой, читает браузер":M.days?`окно ${M.days} сут.`:"период не задан",Et=`; бюджет ${yt} статей (${mt})`,Je=he?`; браузером прочитано ${le} из ${he} адресов с ключом в слаге`:"",Wn=ln?"; полнота: подтверждена ("+zn+")":"",_n=O.taxo?`; карт-справочников не открывали: ${O.taxo} (теги, рубрики, авторы — статей в них нет)`:"";T.push(`sitemap-глубина: ${I}${pe?"":"карт пройдено, "}кандидатов ${ge.length}${P}${fe}${V}${se}, совпало ${ae.length}${Ke}${Et}${Je}${Wn}${_n}`+(Date.now()>W.deadline?" (стоп по времени)":""))}}catch(S){S&&S.apiCovered?(T.push("sitemap-глубина: не понадобилась — служебный вход издания отдал весь период ("+Vn+")"),Oe.push("sitemap")):S&&S.wpCovered?(T.push("sitemap-глубина: не понадобилась — wp-api накрыл весь период ("+je+")"),Oe.push("sitemap")):T.push(S&&S.skipped?"sitemap-глубина: пропущен (память: у сайта ничего не даёт; перепроверим позже)":"sitemap-глубина: "+S.message)}let K=tn(d),en=null,Dn=0,id=0,uo=!1,cd=!1,dn=t.skip instanceof Set?t.skip:new Set(t.skip||[]);K&&!t.reprobe&&(K.external===!1&&dn.add("external"),K.browserSearch===!1&&dn.add("sitesearch"),K.noRender===!0&&dn.add("render"));let $e={render:null,external:null,sitesearch:null};try{let S=null;if(c?S=await Ri(d,qe,c):K&&K.search?S=await Ri(d,qe,K.search):K&&K.search===null?T.push("адаптер: server-side поиска нет ("+(K.note||"")+")"):S=await Ri(d,qe,null),S&&S.kind==="none"&&(T.push("поиск: "+S.warn),S=null),S){A.push("search("+S.kind+")"),z&&(z.searchKind=S.kind);let M=L.length,N=new Set,U=K&&K.budgetMs||45e3,O=K&&K.budgetMs?1500:400,I=_?1:S.hasPage?80:1,me=h.split(/[,;\n]+/).map(Le=>Le.trim()).filter(Boolean);me.length||me.push(h);let pe=0,ne="",xe=!1,ge=Date.now(),W=S.builds||[S.build],Y=[];for(let Le of W)for(let _e of me)Y.push({build:Le,alt:_e});e:for(let{build:Le,alt:_e}of Y){let Ve=!1;for(let de=1;de<=I&&!Ve;de++){if(Date.now()-ge>U){T.push(`поиск: стоп по времени (${Math.round(U/1e3)}c)`);break e}let Pe=Le(_e,de);if(!Pe)break;z&&!z.searchUrl&&(z.searchUrl=Pe);let we;if(_){let V=await zr(Pe);we={ok:!!(V&&V.ok&&V.html),status:V&&V.status||0,text:V&&V.html||"",err:V&&V.err}}else we=await xo(Pe);if(!we.ok){de===1&&N.size===0&&(ne=we.status?"HTTP "+we.status:we.err||"ошибка"),de===1&&we.status>=400&&F("search",we.status,Pe);break}!xe&&we.text&&b(we.text.toLowerCase())&&(xe=!0);let be=Xn(we.text,d).filter(V=>!N.has(V));if(z)for(let V of be)z.rawLinks.length<25&&z.rawLinks.push(V);if(be.forEach(V=>N.add(V)),!be.length){if(de>1)break;continue}let te=null,oe=[],re=K&&K.searchCard&&y?iu(we.text,K.searchCard,d):null,ae=864e5;for(let V of be){let se=jt(V);if(se&&((!te||se>te)&&(te=se),!Xe(se.toISOString(),y,v)))continue;let fe=!se&&re&&re.get(V);if(fe&&(+fe<+y-ae||v&&+fe>+v+ae)){J.cardDateOut=(J.cardDateOut||0)+1;continue}oe.push(V)}let{rows:he,newest:le}=await mn(oe,{groups:u,exclude:w,fromD:y,toD:v,originHost:ct(d),channelLabel:"search",deadline:ge+U,browserBudget:ce,diag:D,tally:J,pick:X,have:Ie()});he.forEach(V=>L.push(V)),pe+=be.length;let P=le&&te?le>te?le:te:le||te;if(y&&P&&P<y&&(Ve=!0),pe>O)break e}}let Re=L.length-M;Dn=Re,ne?T.push("поиск: "+ne):T.push(`поиск: ссылок ${N.size}, совпало ${Re}`+(N.size===0?" (пусто/оболочка)":Re===0?" (нет по слову/периоду)":"")),L.length===M&&(N.size<3||!xe)&&(en=S.build("MCQPLACEHOLDER",1).replace(/MCQPLACEHOLDER/g,"{q}"),N.size>=3&&T.push("поиск: ключа нет в самой выдаче -> похоже на оболочку, пробую браузером")),uo=!ne&&N.size>=3&&!en}else(!K||K.search)&&T.push("поиск не найден (нужен ручной шаблон site | url?...{q})")}catch(S){T.push("search: "+S.message)}try{let S=en?en.replace(/\{q\}/g,"{q}"):null;S||(S=Au(qe,d)||null);let M=S;if(dn.has("render"))T.push("render: пропущен (память: у сайта не работает; перепроверим позже)");else if(Ge)T.push("render: не понадобился — служебный вход издания отдал весь период"),Oe.push("render");else if(ln)T.push("render: не понадобился — карта сайта отдала весь период, все статьи прочитаны"),Oe.push("render");else if(!(K&&K.render)&&Dn===0&&it===0&&M&&uo)T.push("render: не нужен — поиск сайта уже ответил, а это тот же поисковик");else if(K&&K.render||Dn===0&&it===0&&M){let N=null,U=null;if(K&&K.render?(N=K.render,U=K.selectors||null):N=M,N){A.push("render");let O=ct(d),I=/\{q\}/.test(N)?h.split(/[,;\n]+/).map(de=>de.trim()).filter(Boolean).slice(0,3)||[h]:[null],me=new Set,pe=[],ne=!1,xe=!1,ge="";for(let de of I.length?I:[null]){let Pe=de==null?N:N.replace(/\{q\}/g,encodeURIComponent(de));z&&!z.renderUrl&&(z.renderUrl=Pe);let we=await ko(Pe,{selectors:U,host:O});ou(we)&&(xe=!0),we.cf&&(ne=!0),we.status>=400&&!ge&&(ge=we.err||"HTTP "+we.status+" на "+Pe,F("render",we.status,N));for(let be of we.items||[]){let te;try{te=new URL(be.url).host.replace(/^www\./,"")}catch{continue}te===O&&(me.has(be.url)||(me.add(be.url),pe.push(be)))}}let W={items:pe,cf:ne,err:ge};cd=!ne&&!ge&&pe.length>=3,$e.render=xe&&!pe.length?null:pe.length,xe&&!pe.length&&T.push("render: браузера не было — канал не проверялся (память не трогаем)");let Y=pe.map(de=>de.url).filter(Boolean),Re=[],Le=(await mn(Y,{groups:u,exclude:w,fromD:y,toD:v,originHost:ct(d),channelLabel:"render",deadline:Date.now()+45e3,browserBudget:ce,diag:Re,tally:J,pick:X,have:Ie()})).rows;D&&D.push(...Re);let _e=au(Re),Ve=!!(K&&K.render&&/\{q\}/.test(K.render));if(!Le.length&&pe.length)for(let de of pe.filter(_e)){let Pe=((de.title||"")+" "+(de.snippet||"")).toLowerCase();if(k(Pe)||!Ve&&!b(Pe))continue;let we=ye(de.date)||jt(de.url),be=we?we.toISOString():null;(y||v)&&!Xe(be,y,v)||Le.push({source:ct(d),title:de.title||de.url,url:de.url,date:be||"",dateSource:"card",channel:"render*",match:x(de.title)?"title":"body",snippet:$n(Ci(de),de.title,g)})}Le.forEach(de=>L.push(de)),id=Le.length,Le.length?T.push(`render: совпало ${Le.length}`):T.push(W.cf?"render: Cloudflare не пройден за таймаут":!pe.length&&W.err?"render: "+W.err:`render: снято ${pe.length} ссылок, совпало 0`+(pe.length?" (нет по слову/периоду)":" (пусто/логин/капча?)"))}}}catch(S){T.push("render: "+S.message)}try{if(K&&K.feed){A.push("feed");let S=/\{page\}|\{off\d+\}/.test(K.feed),M=!!K.feedPost&&/\{date\}/.test(K.feedPost),N=S||M?K.feedPages||20:1,U=du(y,v),O=J?(J.noOpen||0)+(J.noDate||0)+(J.late||0)+(J.overBudget||0):0,I=Date.now(),me=9e4,pe=new Set,ne=[],xe=0,ge=!1,W=0,Y=0,Re=null,Le=!1,_e=!1,Ve=v?new Date(+v+864e5):new Date;for(let te=1;te<=N&&!ge&&!(Date.now()-I>me);te++){let oe=[],re=/^\//.test(K.feed)?et.replace(/\/$/,"")+K.feed:K.feed;if(M){let le=K.feedPost.replace(/\{date\}/g,o0(Ve)),P=await s0(re,le);if(!P&&_){let V=await zr(re,{post:le,host:ct(d)});V&&V.ok&&V.posted?P=V.html:V&&V.err&&(Re=V.err)}if(!P)break;oe=Xn(P,d).map(V=>({url:V,title:"",date:"",snippet:""}))}else{let le=te===1&&K.feedFirst?K.feedFirst:re.replace(/\{page\}/g,te);le=le.replace(/\{off(\d+)\}/g,(se,fe)=>(te-1)*+fe);let P=null,V=await zt(le);if(V){let se=Xn(V,d).filter(Ae=>bo(Ae)),fe=K.feedCard?iu(V,K.feedCard,d):null;se.length>=3&&(P=se.map(Ae=>({url:Ae,title:"",date:fe&&fe.get(Ae)?fe.get(Ae).toISOString():"",timed:!!(fe&&fe.get(Ae)&&fe.get(Ae).timed),snippet:""})))}if(P)oe=P,_e=!0;else{let se=await ko(le,{selectors:K.feedSelectors||null,host:ct(d)});oe=se.items||[],te===1&&se.status>=400&&(Re=se.err||"HTTP "+se.status,F("feed",se.status,le))}}if(Y++,oe=oe.filter(le=>le.url&&!pe.has(le.url)),oe.forEach(le=>pe.add(le.url)),!oe.length){Y>1&&(Le=!0);break}W+=oe.length;let ae=null,he=null;for(let le of oe){let P=ye(le.date)||jt(le.url);P&&(!ae||P>ae)&&(ae=P),P&&(!ie||+P>+ie)&&(ie=P),P&&(!he||P<he)&&(he=P);let V=((le.title||"")+" "+(le.snippet||"")).toLowerCase();if(P&&b(V)&&!k(V)){if((y||v)&&!Xe(P,y,v))continue;L.push({source:ct(d),title:le.title||le.url,url:le.url,date:Z(P),dateSource:ye(le.date)?"card":"url",channel:"feed",match:x(le.title)?"title":"body",snippet:$n(Ci(le),le.title,g)}),xe++;continue}let se=le.timed?6*36e5:864e5;P&&(y&&+P<+y-se||v&&+P>+v+se)||ne.push(le.url)}M&&(Ve=he&&+he<+Ve?he:new Date(+Ve-864e5),y&&+Ve<+y-864e5&&(ge=!0)),y&&ae&&ae<y&&(ge=!0)}if(ne.length){let te=[...new Set(r.split(/[,;\n]+/).map(re=>re.trim()).filter(Boolean).flatMap(re=>re.split(/\s+/)).flatMap(re=>Mi(re)))];if(te.length){let re=i(ae=>te.some(he=>ae.toLowerCase().includes(he)),"hinted");ne.sort((ae,he)=>(re(he)?1:0)-(re(ae)?1:0))}let{rows:oe}=await mn(ne,{groups:u,exclude:w,fromD:y,toD:v,originHost:ct(d),channelLabel:"feed",deadline:Date.now()+Math.max(9e4,U.budgetMs),maxFetch:Math.max(300,U.maxCands),browserBudget:ce,diag:D,tally:J,have:Ie()});for(let re of oe)L.push(re),xe++}let de=` (страниц ${Y}`+(_e?", обычным запросом":"")+(Le?", дальше повтор — пагинация не двигается":"")+")",Pe=W?" (нет по слову/периоду)":Re?" (лента не ответила: "+Re+")":" (лента ничего не отдала)",we=J?(J.noOpen||0)+(J.noDate||0)+(J.late||0)+(J.overBudget||0):0,be=!!(K.feedAll&&y&&ge&&_e&&we===O);xe?T.push(`feed: ссылок ${W}${de}, совпало ${xe}`):T.push(`feed: ссылок ${W}${de}, совпало 0`+Pe),be&&(E=0,Me=!1,T.push("полнота: подтверждена (лента сайта дошла до начала периода, все статьи периода прочитаны)"))}}catch(S){T.push("feed: "+S.message)}let ld=0;try{let S=!!(K&&K.browserSearch===!0&&Dn===0),M=uo||cd;if(!dn.has("sitesearch")&&Ge)T.push("браузер-поиск: не понадобился — служебный вход издания отдал весь период"),Oe.push("sitesearch");else if(!dn.has("sitesearch")&&ln)T.push("браузер-поиск: не понадобился — карта сайта отдала весь период, все статьи прочитаны"),Oe.push("sitesearch");else if(!dn.has("sitesearch")&&L.length===0&&!S&&M)T.push("браузер-поиск: не нужен — "+(uo?"поиск сайта":"страница поиска в браузере")+" уже ответил(а), а это тот же поисковик");else if(!dn.has("sitesearch")&&(L.length===0||S)){let N=h.split(/[,;\n]+/).map(ge=>ge.trim()).filter(Boolean);N.length||N.push(h);let U=ct(d),O=new Set,I=[],me="",pe=!1,ne=!1;{let ge=await bu(d,N.slice(0,3),{host:U});ou(ge)&&(ne=!0),ge.cf&&(pe=!0),ge.note&&(me=ge.note);for(let W of ge.items||[]){let Y;try{Y=new URL(W.url).host.replace(/^www\./,"")}catch{continue}Y!==U&&!Y.endsWith("."+U)||O.has(W.url)||(O.add(W.url),I.push(W))}}let xe={items:I,cf:pe,note:me};if($e.sitesearch=ne&&!I.length?null:I.length,I.length){A.push("браузер-поиск");let ge=[],W=(await mn(I.map(Y=>Y.url),{groups:u,exclude:w,fromD:y,toD:v,originHost:ct(d),channelLabel:"браузер-поиск",deadline:Date.now()+9e4,browserFallback:_,browserBudget:ce,diag:ge,tally:J,pick:X,have:Ie()})).rows;if(D&&D.push(...ge),!W.length)for(let Y of I.filter(au(ge))){let Re=((Y.title||"")+" "+(Y.snippet||"")).toLowerCase();if(!b(Re)||k(Re))continue;let Le=ye(Y.date)||jt(Y.url),_e=Le?Le.toISOString():null;(y||v)&&!Xe(_e,y,v)||W.push({source:U,title:Y.title||Y.url,url:Y.url,date:_e||"",dateSource:"card",channel:"браузер-поиск*",match:x(Y.title)?"title":"body",snippet:$n(Ci(Y),Y.title,g)})}W.forEach(Y=>L.push(Y)),ld=W.length,T.push(W.length?`браузер-поиск: совпало ${W.length}`:`браузер-поиск: снято ${I.length}, совпало 0 (нет по слову/периоду)`)}else xe.err?T.push("браузер-поиск: "+xe.err):xe.note&&T.push("браузер-поиск: "+xe.note)}}catch(S){T.push("браузер-поиск: "+S.message)}try{let S=t.external===!1?!1:!!(K&&K.external===!0)||t.external===!0;if(dn.has("external"))T.push("внешний: пропущен (память: у сайта не работает; перепроверим позже)");else if(!S)Oe.push("external");else if((K&&K.external||Dn===0&&id===0)&&it===0&&ld===0){A.push("внешний");let M=ct(d),N=h.split(/[,;\n]+/).map(P=>P.trim()).filter(Boolean).map(P=>/\s/.test(P)&&!/^["«]/.test(P)?"("+P+")":P).join(" OR "),U=(t.exclude||"").split(/[,;\n]+/).map(P=>P.trim()).filter(Boolean).map(P=>"-"+(/\s/.test(P)?'"'+P+'"':P)).join(" "),O=encodeURIComponent(["site:"+M,N,U].filter(Boolean).join(" ")),I=new Set,me=[],pe=Date.now(),ne={},xe=0,ge="";{let P=new Set,V=Date.now(),se=[fe=>`https://html.duckduckgo.com/html/?q=${O}&kl=ru-ru&ia=web&p=-1${fe?"&s="+fe:""}`,fe=>`https://duckduckgo.com/html/?q=${O}&kl=ru-ru&ia=web&p=-1${fe?"&s="+fe:""}`];for(let fe=0;fe<se.length&&me.length<60&&Date.now()-V<12e3;fe++){let Ae=se[fe],pt="https://duckduckgo.com/";for(let Ke=0;Ke<=60&&Date.now()-V<12e3;Ke+=30){let yt=Ae(Ke),mt=await M0(yt,pt);if(Ke===0&&fe===0){let Je=mt.text||"",Wn=(Je.match(/class="result__a"/g)||[]).length,_n=/anomaly|are you a robot|too many requests|captcha|privacy.*simplified/i.test(Je),st=Je.length<22*1024&&Wn===0,pn=(((Je.split(/class="result__a"/i)[1]||"").slice(0,400).match(/href="([^"]+)"/i)||[])[1]||"").replace(/&amp;/g,"&").slice(0,110);ge=`${mt.status?"HTTP "+mt.status+" ":""}${mt.err?mt.err+" ":""}стр ${Math.round(Je.length/1024)}КБ, result__a ${Wn}${_n||st?", заглушка/капча":""}; href1: ${pn||"—"}`,ne.ddg=ge}if(!mt.ok)break;let Et=z0(mt.text,M).filter(Je=>!P.has(Je.url));if(!Et.length)break;Et.forEach(Je=>{P.add(Je.url),I.add(Je.url),me.push(Je)})}if(me.length>0)break}xe=P.size}let W=0,Y="",Re=me.length<3||ge&&/заглушка|капча|HTTP 40[33]|не открылся|таймаут/.test(ge);if(Re){let P=new Set,V=`https://www.bing.com/search?q=${O}&setlang=ru-RU&cc=KZ&ensearch=0`,se=await ko(V,{bing:!0,host:M}),fe=se.items||[];for(let pt of fe){let Ke=L0(pt.url,M)||ru(pt.url,M);!Ke||P.has(Ke)||(P.add(Ke),I.has(Ke)||(I.add(Ke),me.push({url:Ke,title:pt.title||"",snippet:pt.snippet||""})))}W=P.size;let Ae=fe.length?String(fe[0].url||"").replace(/&amp;/g,"&").slice(0,90):"";Y=se.cf?"капча/Cloudflare не пройден":`рендер: снято ${fe.length}, домена ${W}${W===0&&Ae?"; href1: "+Ae:""}`,ne.bing=Y}$e.external=me.length;let Le=(await mn(me.map(P=>P.url),{groups:u,exclude:w,fromD:y,toD:v,originHost:M,channelLabel:"внешний",deadline:Date.now()+3e4,diag:D,tally:J,pick:X,have:Ie()})).rows,_e=new Set;for(let P of Le)L.push(P),_e.add(P.url);let Ve=[],de=0,Pe=0;for(let P of me){if(_e.has(P.url))continue;let V=(P.title||"").toLowerCase(),se=(P.snippet||"").toLowerCase(),fe=b(V);if(!fe||k(V+" "+se)){Pe++;continue}let Ae=jt(P.url)||ye(P.snippet+" "+P.title+" "+(P.date||""));if(!Ae){de++;continue}Xe(Ae.toISOString(),y,v)&&Ve.push({it:P,iso:Ae.toISOString(),inTitle:fe})}let we={},be={};for(let P of Ve){let{b:V,a:se}=uu(P.it.snippet,g);V.length>=12&&(we[V]=(we[V]||0)+1),se.length>=12&&(be[se]=(be[se]||0)+1)}let te=0,oe=0;for(let P of Ve){let{b:V,a:se}=uu(P.it.snippet,g);if((V.length>=12&&we[V]>1||se.length>=12&&be[se]>1)&&!P.inTitle){oe++;continue}let Ae=k0(P.it.title,M);L.push({source:M,title:Ae,url:P.it.url,date:P.iso,dateSource:"card",channel:"внешний",match:P.inTitle?"title":"body",snippet:Dr(P.it.snippet||P.it.title||"",g)}),te++}let re=Le.length+te,ae=[Pe?`не по ключу ${Pe}`:"",oe?`боковой блок ${oe}`:"",de?`без даты ${de}`:""].filter(Boolean).join(", "),he=[];he.push(`ddg:${xe}${ne.ddg?" ["+ne.ddg+"]":""}`),Re&&he.push(`bing:${W}${ne.bing?" ["+ne.bing+"]":""}`);let le=me.length?ae?"отсеяно "+ae:"нет по слову/периоду":Re?"оба движка 0: "+(ne.ddg||"")+(ne.bing?" | "+ne.bing:""):ne.ddg||"нет ответа";T.push(re?`внешний: совпало ${re} (из статьи ${Le.length}, из выдачи ${te}${ae?"; отсеяно "+ae:""}; ${he.join(", ")})`:`внешний: 0 [ссылок ${me.length}; ${le}]`)}}catch(S){T.push("внешний: "+S.message)}let dd=L.filter(S=>S.channel==="rss"||S.channel==="news-sitemap");if(dd.length){let S=0,M=0,N=0,U=new Map;await Mo(dd,4,async I=>{if(!I.url)return;let me=B.get(ve(I.url));if(me){lu(I.date,me)||S++,I.date=me,I.dateSource="api",Xe(me,y,v)||(I._outOfPeriod=!0,M++);return}let pe=U.get(I.url)||gn.get(I.url);if(!pe){let ne=await So(I.url);if(!ne){N++;return}let xe=yo(Ii(ne,I.url),I.url,X&&X.hint);if(!xe||!xe.date){N++;return}pe=xe.date,gn.set(I.url,pe),X&&xe.dateVia&&(X.seen[xe.dateVia]=(X.seen[xe.dateVia]||0)+1)}U.set(I.url,pe),lu(I.date,pe)||S++,I.date=pe,I.dateSource="page",Xe(pe,y,v)||(I._outOfPeriod=!0,M++)});let O=L.length;L=L.filter(I=>!I._outOfPeriod),(S||M||N)&&T.push("даты лент сверены по статьям: поправлено "+S+(M?", вне периода "+M+" (лента показывала их свежими)":"")+(N?", не открылись "+N+" — оставлены с датой ленты, ей верить нельзя":"")),O!==L.length&&L.length}let ud=new Set([ct(d)]),po=i(S=>{for(let M of[].concat(S||[])){let N=M&&String(M).match(/^https?:\/\/([^/]+)/i);N&&ud.add(N[1].replace(/^www\./,""))}},"addHost");po(c),K&&(po(K.search),po(K.render),po(K.feed));let pd=new Map,Sr=[],ii=0,ci=0,li=new Map;for(let S of L){if(!S.url)continue;S.url=xs(S.url);let M=ve(S.url),N=pd.get(M);if(N){N._ch.includes(S.channel)||N._ch.push(S.channel);continue}if(S._dupe)continue;if(Fi(S.url)){ci++;continue}let U;try{U=new URL(S.url).host.replace(/^www\./,"")}catch{continue}if(!ud.has(U)){ii++,li.set(U,(li.get(U)||0)+1);continue}S._ch=[S.channel],pd.set(M,S),Sr.push(S)}if(ii){let S=[...li].sort((M,N)=>N[1]-M[1]).slice(0,3).map(([M,N])=>M+" — "+N).join(", ");T.push("отброшено "+ii+" с другого домена/поддомена"+(S?" ("+S+")":""))}ci&&T.push("отброшено "+ci+" листингов/рубрик"),$e.contrib={};for(let S of Sr)$e.contrib[S.channel]=($e.contrib[S.channel]||0)+1;$e.total=Sr.length,$e.picks=X.seen;let Ce=J,Lr=Object.values(Ce).filter(S=>typeof S=="number").reduce((S,M)=>S+M,0),hd=!!(ie&&y&&+ie<+Mt(Z(y))&&ze&&ze.maps>0&&!ze.pool&&!ze.mapsFailed&&!Ce.noKw&&!Ce.taken);R.length&&($e.brokenEntries=R),$e.tally={};for(let[S,M]of Object.entries(Ce))typeof M=="number"&&($e.tally[S]=M);if($e.tally.seen=Lr,ie&&($e.newestPub=ie.toISOString(),hd&&($e.tally.quietPeriod=1)),Q&&($e.homeErr=Q),ze&&ze.mapsFailed&&($e.tally.mapsFailed=ze.mapsFailed),E&&($e.tally.notTaken=E,$e.tally.notTakenCapped=Me?1:0),(Ge||rt)&&($e.tally.svcProven=1,An&&($e.tally.svcRead=An)),y){let S=+Mt(Z(y)),M=i(U=>U&&!U.undated&&!U.untitled&&U.oldest&&+U.oldest<S,"covers"),N=M(ke)?"news-sitemap":M(H)?"rss":Gn?"api":null;$e.tally.titlesAll=N?1:0,N&&($e.titlesFrom=N)}if(Ce.noOpenWhy&&($e.tally.noOpenWhy={...Ce.noOpenWhy}),Ce._bodies&&Ce._bodies.length){let S=[...Ce._bodies].sort((M,N)=>M-N);$e.tally.bodyN=S.length,$e.tally.bodyMed=S[S.length>>1]}if(Ce._pageDays){let S=Object.keys(Ce._pageDays);$e.tally.pageDated=Object.values(Ce._pageDays).reduce((M,N)=>M+N,0),$e.tally.pageDayKinds=S.length,S.length===1&&S[0]===Z(new Date)&&($e.tally.pageDayIsRunDay=1),y&&v&&($e.tally.windowDays=Math.round((+Mt(Z(v))-+Mt(Z(y)))/864e5)+1)}let fd=i(()=>{let S=Ce.noOpenWhy||{},M=Object.entries(S).sort((N,U)=>U[1]-N[1]).slice(0,3).map(([N,U])=>N+" — "+U).join(", ");return"не открылись "+Ce.noOpen+(M?" ("+M+")":" (защита/таймаут)")},"noOpenBit"),md=i(()=>{let S=Object.entries(Ce.noDateWhere||{}).sort((N,U)=>U[1]-N[1]),M=S.filter(([,N])=>N>=Math.max(3,Ce.noDate*.15)).slice(0,3);return M.length?"без даты на странице — "+Ce.noDate+" (в разделах: "+M.map(([N,U])=>"/"+N+"/ "+U).join(", ")+")":"без даты на странице — "+Ce.noDate+(S.length>1?" (разделов "+S.length+", ни один не преобладает — размазано по сайту)":"")},"noDateBit");if(Sr.length){let S=Ce.noOpen||0,M=Ce.noDate||0,N=Ce.late||0,U=Ce.overBudget||0,O=S+M+N+U;if(O>=10&&O>=Lr*.05){let I=[];S&&I.push(fd()),M&&I.push(md()),N&&I.push("не успели по времени — "+N),U&&I.push("не влезли в бюджет канала — "+U),T.push("потери: "+O+" страниц из "+Lr+" не проверены ["+I.join(", ")+"] — среди них мог быть материал")}}else{let S=[],M=i((me,pe)=>{Ce[me]&&S.push(pe+" "+Ce[me])},"add");M("noKw","прочитали, ключа в тексте нет —"),M("outOfPeriod","вне периода —"),M("staleDate","вне периода по памяти дат —"),M("urlDateOut","вне периода по дате в адресе —"),M("cardDateOut","вне периода по дате в карточке поиска —"),Ce.noOpen&&S.push(fd()),Ce.noDate&&S.push(md()),M("notArticle","не статьи (рубрики/меню) —"),M("listing","разделы сайта, отсеяны по адресу —"),M("excluded","отсеяно минус-словом —"),M("late","не успели по времени —"),M("overBudget","не влезли в бюджет канала —");let N=Me?"больше ":"";E&&S.push("не взяли за бюджетом канала глубины — "+N+E);let U=(Ce.noOpen||0)+(Ce.noDate||0)+(Ce.late||0)+(Ce.overBudget||0)+E,O=Lr+E,I;(Ge||rt)&&U<10?I="сайт доступен, служебный вход отдал весь период"+(An?" ("+An+" статей с текстом)":"")+" — про ключ в этот период не писали":hd?I="сайт доступен, но за период, похоже, ничего не публиковал: самая свежая запись его ленты — "+Pt(ie)+", и в карте сайта статей периода нет":!O&&(Q||ze&&ze.mapsFailed)?I="ни одной ссылки-кандидата, и сайт в это время отвечал ошибками ("+[Q&&"главная обычным запросом — "+Q,ze&&ze.mapsFailed&&"не открылось карт — "+ze.mapsFailed].filter(Boolean).join(", ")+") — похоже на сбой сайта, а не на смену входа: повторить позже":O?(Ce.noOpen||0)>Lr/2?I="сайт не отдал статьи (защита/таймаут) — это не «не писали», а «не достучались»":(Ce.late||0)>Lr/2?I="упёрлись в бюджет времени — материал мог остаться непроверенным":U>=10&&U>=O*.05?I="прочитали не всё — ноль не доказывает, что не писали (не проверено "+N+U+" из "+N+O+" страниц)":(Ce.noKw||0)>0?I="сайт доступен, статьи прочитаны — про ключ в этот период не писали":I="кандидаты были, но за период не прочитано ни одной статьи — проверить было нечего":I="ни одной ссылки-кандидата: ни ленты, ни карты, ни рабочего поиска у сайта не нашлось",T.push("почему ноль: "+I+(S.length?" ["+S.join(", ")+"]":""))}let Ut=Ce._slow;if(Ut&&Ut.resets){let S=Object.entries(Ut.why||{}).sort((M,N)=>N[1]-M[1]).map(([M,N])=>M+" — "+N).join(", ");T.push(Ut.on?"сайт просил сбавить ход ("+(S||Ut.resets+" раз")+") — перешли на одиночные запросы"+(Ut.tried?Ut.saved?", со второй попытки прочитано "+Ut.saved+" из "+Ut.tried:", повтор не помог ("+Ut.tried+" попыток)":""):"сайт просил сбавить ход: "+(S||Ut.resets)+" — единичные случаи, ход не сбавляли")}if(ce.left<16){let S=16-ce.left,M=J&&J.viaBrowser||0;T.push(M?"статей дочитано браузером: "+M+" из "+S+" попыток (обычным запросом не открывались)":"браузер не дочитал ни одной статьи из "+S+" попыток")}Oe.length&&($e.notRun=Oe);let Kn={},fs={};for(let S of Sr){for(let M of S._ch)Kn[M]=(Kn[M]||0)+1;S._ch.length===1&&(fs[S._ch[0]]=(fs[S._ch[0]]||0)+1),S.channels=S._ch.map(su).join(" + "),delete S._ch}$e.foundBy=Kn,$e.onlyBy=fs;let gd=Object.keys(Kn).sort((S,M)=>Kn[M]-Kn[S]).map(S=>`${su(S)} ${Kn[S]}`+(fs[S]?` (только он ${fs[S]})`:" (все повтор)"));return gd.length&&T.push("кто принёс: "+gd.join(", ")),{rows:Sr,channel:A.join(" + ")||"none",note:T.join("; "),stats:$e,diag:t.diag?{meta:z,records:D}:void 0}}var n0,su,ou,ko,gn,Ei,zr,bu,ku,Ss,ji,xu,cu,i0,c0,l0,u0,Di,To,v0,Ar,ks,$i,T0,$0,hu,ys,fu,I0,F0,Ni,Zn=ee(()=>{St();bs();zi();n0={sitemap:"sitemap-глубина",search:"поиск","render*":"render","браузер-поиск*":"браузер-поиск"},su=i(e=>n0[e]||e,"chName"),ou=i(e=>/браузер не поднялся|браузер завис/.test(String(e&&(e.err||e.note)||"")),"browserDown"),ko=i(async()=>({items:[],cf:!1}),"renderScrape");i(mu,"setRenderer");gn={get:i(()=>null,"get"),set:i(()=>{},"set")};i(gu,"setDateStore");Ei=null;i(wu,"setGoldenSink");zr=i(async()=>({ok:!1}),"renderFetch"),bu=i(async()=>({items:[],cf:!1}),"renderSiteSearch");i(yu,"setHtmlFetcher");i(vu,"setSiteSearcher");i(au,"unreadOnly");i(mn,"enrichUrls");i(vs,"isChallengePage");ku="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",Ss={"User-Agent":ku,"Accept-Language":"ru,en;q=0.9","Accept-Encoding":"gzip, deflate"},ji=i(e=>new Promise(t=>setTimeout(t,e)),"sleep");i(iu,"cardDatesOf");i(r0,"resolveRedirect");xu=typeof process<"u"&&process.env&&Number(process.env.MC_FETCH_TIMEOUT_MS)||3e4;i(s0,"tryPostText");i(o0,"dmy");i(a0,"fetchText");i(zt,"tryText");i(Ii,"siteDrop");i(Su,"reparseArticle");i(So,"tryPlain");cu={ECONNRESET:"сайт оборвал соединение",ECONNREFUSED:"сайт не принял соединение",ECONNABORTED:"соединение прервано",ETIMEDOUT:"сайт не ответил",ENOTFOUND:"домен не найден (DNS)",EAI_AGAIN:"DNS не ответил",EHOSTUNREACH:"хост недостижим",ENETUNREACH:"сети нет",EPROTO:"не сошлись по TLS",UND_ERR_CONNECT_TIMEOUT:"не удалось соединиться",UND_ERR_HEADERS_TIMEOUT:"сайт не прислал заголовки",UND_ERR_BODY_TIMEOUT:"сайт замолчал на середине ответа",UND_ERR_SOCKET:"соединение оборвалось",CERT_HAS_EXPIRED:"у сайта просрочен сертификат",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"сертификат сайта не проверяется",DEPTH_ZERO_SELF_SIGNED_CERT:"самоподписанный сертификат"};i(lu,"sameDay");i0=/(UND_ERR_CONNECT_TIMEOUT|ENOTFOUND|ECONNREFUSED|EAI_AGAIN|EHOSTUNREACH|ENETUNREACH)/;i(Ls,"netErr");c0=i(e=>/\b(ECONNRESET|ECONNABORTED|UND_ERR_SOCKET)\b/.test(String(e||"")),"isResetErr"),l0=i(e=>/\bHTTP (429|503)\b/.test(String(e||"")),"isBusyErr");i(d0,"backoffReason");i(xo,"fetchInfo");i(Lo,"fetchPlain");u0={"User-Agent":ku,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8","Accept-Language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7","Accept-Encoding":"gzip, deflate",DNT:"1","Upgrade-Insecure-Requests":"1","Sec-Fetch-Dest":"document","Sec-Fetch-Mode":"navigate","Sec-Fetch-Site":"same-origin","Sec-Fetch-User":"?1",Pragma:"no-cache","Cache-Control":"no-cache"};i(p0,"fetchSearch");i(ct,"host");i(Fi,"isListingUrl");i(h0,"isTaxonomyMap");i(vo,"isJunkMapUrl");i(f0,"mapYearMonth");i(du,"depthBudget");i(xs,"canonUrl");i(m0,"isAbbr");i(g0,"stemRu");i(w0,"mkTerm");i(nn,"parseQuery");i(b0,"nearHit");i(y0,"charNear");i(Lu,"termHit");i(dt,"matchGroups");i(Cr,"queryTerms");i(Dr,"makeSnippet");Di=i(e=>{let t=[];for(let n=0,r=e.length-1;n<=r;n++,r--)t.push(e[n]),n!==r&&t.push(e[r]);return t},"bothEnds"),To=i(e=>String(e||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),v0=24;i(Ci,"cardText");i($n,"snippetFor");i(k0,"cleanGoogleTitle");i(uu,"kwContext");i(x0,"normalizeOrigin");i(S0,"toggleWww");i(L0,"bingDecodeHref");Ar=0,ks=0,$i=!1,T0=i(e=>new Promise(t=>setTimeout(t,e)),"_sleep");i(Tu,"resetDdgThrottle");i(M0,"ddgFetch");i(A0,"ddgReal");i(z0,"ddgResults");i(Mo,"mapPool");i(Mu,"robotsSitemaps");i(D0,"unwrapBrowserXml");i(C0,"makeTextFetcher");i(R0,"getNewsSitemapEntries");i(N0,"collectSitemapCandidates");i(Pi,"entriesFromSitemap");i(Au,"parseSearchForm");i(pu,"searchLooksReal");i(Ri,"detectSearch");i(Hi,"telegramChannel");i(E0,"parseTelegramPosts");$0=typeof process<"u"&&process.env&&process.env.MC_TG_BASE||"https://t.me/s/";i(P0,"searchTelegram");hu={hour:"EgIIAQ%3D%3D",today:"EgIIAg%3D%3D",week:"EgIIAw%3D%3D",month:"EgIIBA%3D%3D",year:"EgIIBQ%3D%3D"};i(O0,"balancedJson");i(j0,"extractYtInitialData");i(Oi,"collectVideoRenderers");ys=i(e=>e&&e.runs?e.runs.map(t=>t.text).join(""):e&&e.simpleText||"","ytRuns"),fu=typeof process<"u"&&process.env&&process.env.MC_YT_BASE||"https://www.youtube.com",I0=2e4,F0=60;i(H0,"ytFuzzDays");i(q0,"ytExactDate");Ni=["hour","today","week","month","year"];i(B0,"ytRangeFor");i(zu,"searchYouTube");i(Ao,"searchSite")});function It(e,t){Ro((0,nt.dirname)(e));let n=e+".tmp";(0,He.writeFileSync)(n,JSON.stringify(t,null,2)),(0,He.renameSync)(n,e)}function Pn(e,t){try{return(0,He.existsSync)(e)?JSON.parse((0,He.readFileSync)(e,"utf8")):t}catch(n){return console.error("битый файл",e,n.message),t}}function G0(){Ro(Do),Nr=Pn(Vi,{})||{},Ne.clear();for(let e of(0,He.existsSync)(Do)?(0,He.readdirSync)(Do):[]){let t=Pn(Er(e),null);t&&Ne.set(e,{meta:t,feed:Pn($r(e),[])||[]})}}function K0(){if(!(0,He.existsSync)(zo)||Ne.size>0)return;let e=Pn(zo,null);if(!(!e||!Array.isArray(e.projects))){e.settings&&(Nr=e.settings,It(Vi,Nr));for(let t of e.projects){let n=t.id||Ru("p"),r={id:n,name:t.name||"Проект",config:t.config||{},schedule:t.schedule||{mode:"off"},lastRun:t.lastRun||null,lastLog:t.log||[]};It(Er(n),r),It($r(n),t.items||[]),Ne.set(n,{meta:r,feed:t.items||[]})}try{(0,He.renameSync)(zo,zo+".bak")}catch{}console.log(`[store] мигрировал ${e.projects.length} проект(ов) из data.json в data/projects/`)}}function Ze(){return Nr}function No(e){Object.assign(Nr,e),It(Vi,Nr)}function wn(){return[...Ne.values()].map(e=>({id:e.meta.id,name:e.meta.name,schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,itemCount:(e.feed||[]).length,newCount:(e.feed||[]).filter(t=>t.isNew).length,runsCount:(e.meta.runs||[]).length,last:(e.meta.runs||[])[0]||null,config:e.meta.config||{}}))}function We(e){let t=Ne.get(e);return t?Gi(t):null}function Nu(e,t){let n=Ru("p"),r={id:n,name:e||"Новый проект",config:t||{},schedule:{mode:"off"},lastRun:null,lastLog:[]};return Ro(Ts(n)),It(Er(n),r),It($r(n),[]),Ne.set(n,{meta:r,feed:[]}),Gi(Ne.get(n))}function Eu(e,t){let n=Ne.get(e);return n?(t.name!==void 0&&(n.meta.name=t.name),t.config&&(n.meta.config=t.config),t.schedule&&(n.meta.schedule=t.schedule),On(e),Gi(n)):null}function $u(e){if(!Ne.has(e))return!1;Ne.delete(e);try{(0,He.rmSync)(Ts(e),{recursive:!0,force:!0})}catch{}return!0}function Pu(e){let t=Ne.get(e);t&&(t.feed.forEach(n=>n.isNew=!1),rn(e))}function Eo(e,t,n){let r=Ne.get(e);return r?(r.meta.ai=r.meta.ai||{},r.meta.ai[t]=n,On(e),r.meta.ai):null}function Ki(e){let t=Ne.get(e);return t&&t.meta.ai||{}}function lt(e){let t=Ne.get(e);return t&&t.meta.tg||{}}function Lt(e,t){let n=Ne.get(e);return n?(n.meta.tg=Object.assign({},n.meta.tg||{},t||{}),n.meta.tg.token&&!n.meta.tg.ownerCode&&(n.meta.tg.ownerCode=String((0,Bi.randomInt)(1e5,1e6))),On(e),n.meta.tg):null}function Ou(e){let t=Ne.get(e);return t?(t.meta.tg=Object.assign({},t.meta.tg||{},{ownerCode:String((0,Bi.randomInt)(1e5,1e6))}),On(e),t.meta.tg.ownerCode):""}function Ms(e){let t=lt(e);return{enabled:!!t.enabled,hasToken:!!t.token,bot:t.bot||"",chats:(t.chats||[]).map(n=>({id:n.id,name:n.name||"",access:n.access||""})),sentTotal:t.sentTotal||0,err:t.err||"",ownerCode:t.ownerCode||"",owners:(t.owners||[]).map(n=>n.name||String(n.id))}}function ju(e,t){let n=Ne.get(e);return n?(n.feed||[]).filter(r=>!r.tgSent&&(!t||r.run===t)):[]}function Iu(e,t){let n=Ne.get(e);if(!n)return 0;let r=new Set((t||[]).map(ve)),s=0;for(let o of n.feed)!o.tgSent&&r.has(ve(o.url))&&(o.tgSent=!0,s++);return s&&rn(e),s}function Fu(e){let t=Ne.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.tgSent||(r.tgSent=!0,n++);return n&&rn(e),n}function Hu(e,t){let n=Ne.get(e);if(!n)return 0;let r=new Set((t||[]).filter(Boolean).map(ve));if(!r.size)return 0;let s=0;for(let o of n.feed)o.tgSent&&r.has(ve(o.url))&&(delete o.tgSent,s++);return s&&rn(e),s}function qu(e,t){let n=Ne.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(ve(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(ve(o.url));a&&(o.sent=a.mark,o.sentWhy=a.why||"",o.sentAt=Date.now(),o.sentModel=a.model||"",s++)}return s&&rn(e),s}function Bu(e,t){let n=Ne.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(ve(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(ve(o.url));a&&(o.rel=a.mark,o.relWhy=a.why||"",o.relAt=Date.now(),o.relModel=a.model||"",s++)}return s&&rn(e),s}function Uu(e){let t=Ne.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.rel&&(delete r.rel,delete r.relWhy,delete r.relAt,delete r.relModel,n++);return n&&rn(e),n}function Vu(e){let t=Ne.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.sent&&(delete r.sent,delete r.sentWhy,delete r.sentAt,delete r.sentModel,n++);return n&&rn(e),n}function qi(e){let t=Qn(e);if(!(0,He.existsSync)(t))return[];let n=[];for(let r of(0,He.readdirSync)(t))if(r.endsWith(".json"))try{n.push({file:(0,nt.join)(t,r),ts:r.slice(0,-5),bytes:(0,He.statSync)((0,nt.join)(t,r)).size})}catch{}return n.sort((r,s)=>r.ts.localeCompare(s.ts))}function Gu(e){let t=qi(e),n=t.reduce((o,a)=>o+a.bytes,0),r=Co($r(e)),s=Co(Er(e));return{bytes:n+r+s,runBytes:n,feedBytes:r,metaBytes:s,runCount:t.length,avgRunBytes:t.length?Math.round(n/t.length):0}}function W0(e,t,{keep:n=30}={}){let r=Math.max(0,+t||0)*1024*1024;if(!r)return{removed:0,freed:0};let s=qi(e),a=Co($r(e))+Co(Er(e))+s.reduce((p,f)=>p+f.bytes,0),c=0,l=0;for(let p of s){if(a<=r||s.length-c<=n)break;try{(0,He.rmSync)(p.file,{force:!0}),c++,l+=p.bytes,a-=p.bytes}catch{}}let d=a>r;if(c){let p=Ne.get(e);if(p&&Array.isArray(p.meta.runs)){let f=new Set(qi(e).map(h=>h.ts)),u=p.meta.runs.length;p.meta.runs=p.meta.runs.filter(h=>f.has(h.ts)),p.meta.runs.length!==u&&On(e)}}return{removed:c,freed:l,bytes:a,limit:r,capped:d}}function $o(e,t,n){let r=Ne.get(e);if(!r||!t||!n||!n.length)return!1;let s=(0,nt.join)(Qn(e),t+".json"),o=Pn(s,null);return o?(o.log=(o.log||[]).concat(n),It(s,o),Ju(e,t,o),(r.meta.runs||[])[0]&&r.meta.runs[0].ts===t&&(r.meta.lastLog=(r.meta.lastLog||[]).concat(n),On(e)),!0):!1}function Ku(e,t){let n=Ne.get(e);if(!n)return null;let r=new Set((t||[]).filter(Boolean).map(ve));if(!r.size)return{removed:0,total:(n.feed||[]).length};let s=n.feed.length;n.feed=n.feed.filter(a=>!r.has(ve(a.url)));let o=s-n.feed.length;n.meta.deleted=[...new Set((n.meta.deleted||[]).concat([...r]))],n.meta.deleted.length>2e4&&(n.meta.deleted=n.meta.deleted.slice(-2e4)),n.meta.editedAt=Date.now();for(let a of n.meta.runs||[]){let c=(0,nt.join)(Qn(e),a.ts+".json"),l=Pn(c,null);if(!l||!Array.isArray(l.rows))continue;let d=l.rows.length;l.rows=l.rows.filter(p=>!r.has(ve(p.url))),l.rows.length!==d&&(l.found=l.rows.length,l.added=Math.max(0,(l.added||0)-(d-l.rows.length)),It(c,l),a.found=l.found,a.added=l.added)}return rn(e),On(e),{removed:o,total:n.feed.length,deletedTotal:n.meta.deleted.length}}function Pr(e,t,n,r){let s=Ne.get(e);if(!s)return{added:0,total:0};s.meta.runs=s.meta.runs||[];let o=r?s.meta.runs.find(u=>u.ts===r):null,a=o?o.at:Date.now();r||(r=V0());let c=new Set(s.feed.map(u=>ve(u.url))),l=new Set((s.meta.deleted||[]).map(ve)),d=l.size?t.filter(u=>!l.has(ve(u.url))):t;for(let u of d)!u.url||c.has(ve(u.url))||(c.add(ve(u.url)),s.feed.push({source:u.source,date:u.date,title:u.title,url:u.url,channel:u.channel,channels:u.channels||u.channel,match:u.match,snippet:u.snippet,author:u.author||"",kind:u.kind||"",via:u.via||"",matchIn:u.matchIn||"",comments:Number.isFinite(u.comments)?u.comments:null,firstSeenAt:Date.now(),isNew:!0,run:r}));s.feed.sort((u,h)=>String(h.date||"").localeCompare(String(u.date||""))),s.feed.length>5e3&&(s.feed=s.feed.slice(0,5e3));let p=s.feed.filter(u=>u.run===r).length,f=d.length;s.meta.lastRun=a,s.meta.lastLog=n||[],o?(o.added=p,o.found=f):(o={ts:r,at:a,added:p,found:f},s.meta.runs.unshift(o)),s.meta.runs.length>300&&(s.meta.runs=s.meta.runs.slice(0,300)),rn(e),On(e);try{It((0,nt.join)(Qn(e),r+".json"),{at:a,added:p,found:f,log:n||[],rows:d})}catch{}Ju(e,r,{at:a,added:p,found:f,log:n||[]});try{let u=Wi(s.meta.config);u&&Date.now()-(Du.get(e)||0)>300*1e3&&(Du.set(e,Date.now()),W0(e,u))}catch{}return{added:p,total:s.feed.length,ts:r}}function Yu(e,t,n){let r=Ne.get(e);if(!r||!n)return null;let s=i(c=>(n.log||[]).find(l=>l.site===c),"line"),o=s("(период)"),a=s("(время)");return{проект:r.meta.name||"",прогон:_u(t)||t,"id прогона":t,запрос:(r.meta.config||{}).keyword||"",период:o?o.note:"",время:a?a.note:"",найдено:n.found||0,новых:n.added||0,сайты:(n.log||[]).map(c=>{let l={сайт:c.site,найдено:c.found||0,каналы:c.channel||"",заметка:c.note||""};return c.ms&&(l.секунд=Math.round(c.ms/1e3)),l})}}function Ju(e,t,n){let r=Ne.get(e);if(!r)return;let s=Yu(e,t,n);if(s)try{Ro(Rr);let o=Wu(r.meta.name);It((0,nt.join)(Rr,Y0(r.meta.name,t)),s);let a=(0,He.readdirSync)(Rr).filter(c=>c.endsWith(" — "+o+".json")).sort();for(let c of a.slice(0,Math.max(0,a.length-_0)))try{(0,He.rmSync)((0,nt.join)(Rr,c),{force:!0})}catch{}}catch{}}function Xu(e,t){let n=Pn((0,nt.join)(Qn(e),t+".json"),null);return n?Yu(e,t,n):null}function er(e){let t=Ne.get(e);if(t&&Array.isArray(t.meta.runs))return t.meta.runs;try{return(0,He.readdirSync)(Qn(e)).filter(n=>n.endsWith(".json")).sort().reverse().map(n=>({ts:n.replace(/\.json$/,"")}))}catch{return[]}}function jn(e,t){return Pn((0,nt.join)(Qn(e),t+".json"),null)}var He,Cu,nt,Bi,U0,Ui,Do,Vi,zo,Ru,Ro,Ts,Er,$r,Qn,V0,Nr,Ne,Du,On,rn,Gi,Co,Wi,Rr,_0,Wu,_u,Y0,Dt=ee(()=>{He=require("node:fs"),Cu=require("node:url"),nt=require("node:path");vt();Bi=require("node:crypto");bs();St();U0=(0,nt.dirname)((0,Cu.fileURLToPath)(__mcFileUrl));hi((e,t)=>{try{(0,He.cpSync)(e,t,{recursive:!0})}catch{}});Ui=Te,Do=(0,nt.join)(Ui,"projects"),Vi=(0,nt.join)(Ui,"settings.json"),zo=(0,nt.join)(U0,"data.json"),Ru=i(e=>e+Date.now().toString(36)+Math.random().toString(36).slice(2,6),"uid"),Ro=i(e=>{try{(0,He.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(It,"writeJson");i(Pn,"readJson");Ts=i(e=>(0,nt.join)(Do,e),"projDir"),Er=i(e=>(0,nt.join)(Ts(e),"project.json"),"metaFile"),$r=i(e=>(0,nt.join)(Ts(e),"feed.json"),"feedFile"),Qn=i(e=>(0,nt.join)(Ts(e),"runs"),"runsDir"),V0=i(()=>new Date().toISOString().replace(/[:.]/g,"-").slice(0,23),"tsName"),Nr={},Ne=new Map;i(G0,"loadAll");i(K0,"migrateOldDb");G0();K0();Du=new Map,On=i(e=>{let t=Ne.get(e);t&&It(Er(e),t.meta)},"persistMeta"),rn=i(e=>{let t=Ne.get(e);t&&It($r(e),t.feed)},"persistFeed");i(Ze,"settings");i(No,"setSettings");Gi=i(e=>({id:e.meta.id,name:e.meta.name,config:e.meta.config||{},schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,log:e.meta.lastLog||[],runs:e.meta.runs||[],items:e.feed||[],ai:e.meta.ai||{},editedAt:e.meta.editedAt||0,tg:Ms(e.meta.id)}),"shape");i(wn,"listProjects");i(We,"getProject");i(Nu,"createProject");i(Eu,"updateProject");i($u,"deleteProject");i(Pu,"markRead");i(Eo,"setAiReport");i(Ki,"getAiReports");i(lt,"tgState");i(Lt,"setTgState");i(Ou,"rotateOwnerCode");i(Ms,"tgPublic");i(ju,"unsentItems");i(Iu,"markTgSent");i(Fu,"markAllTgSent");i(Hu,"unmarkTgSent");i(qu,"setSentiment");i(Bu,"setRelevance");i(Uu,"clearRelevance");i(Vu,"clearSentiment");i(qi,"runFiles");Co=i(e=>{try{return(0,He.existsSync)(e)?(0,He.statSync)(e).size:0}catch{return 0}},"fileBytes");i(Gu,"projectUsage");Wi=i(e=>Math.max(0,Math.min(1e5,+(e||{}).diskMb||0)),"diskLimitMb");i(W0,"enforceDiskLimit");i($o,"appendRunLog");i(Ku,"deleteItems");i(Pr,"mergeRun");Rr=(0,nt.join)(Ui,"logs"),_0=30,Wu=i(e=>String(e||"проект").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"проект","safeName"),_u=i(e=>{let t=new Date(e.slice(0,23).replace(/-(\d\d)-(\d\d)-(\d\d\d)$/,":$1:$2.$3")+"Z");if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p2");return Z(t)+" "+n(t.getHours())+":"+n(t.getMinutes())},"humanTs"),Y0=i((e,t)=>(_u(t)||t.slice(0,16)).replace(":","-")+" — "+Wu(e)+".json","logFileName");i(Yu,"buildRunLog");i(Ju,"saveRunLogCopy");i(Xu,"runLogJson");i(er,"listRuns");i(jn,"getRun")});function Zu(e,{wasFinding:t=!1}={}){let n=String(e&&e.note||""),r=e&&e.rows||[],s=String(e&&e.channel||"");if(s==="error")return{state:"error",reason:"exception",hint:n};if(s==="bad-url")return{state:"error",reason:"bad_url",hint:"адрес источника не разобран"};if(s==="пропущен")return{state:"skipped",reason:"preset_dead",hint:n};let o=e&&e.stats&&e.stats.tally;if(o&&(o.urlDateN||0)>=3&&(o.urlDateOff||0)*2>=o.urlDateN)return{state:"needs_review",reason:"date_suspect",hint:"у "+o.urlDateOff+" из "+o.urlDateN+" статей дата со страницы расходится с датой в адресе больше чем на двое суток — похоже, разбор берёт чужую дату (часы в шапке сайта, блок «последние новости»). Даты найденных строк под сомнением; разобрать страницу `inspect`"};if(o&&o.pageDayIsRunDay&&(o.pageDated||0)>=10&&(o.windowDays||0)>=3)return{state:"needs_review",reason:"date_same",hint:"у всех "+o.pageDated+" прочитанных статей одна и та же дата — день прогона, хотя окно "+o.windowDays+" сут. Почерк часов в шапке сайта: разбор берёт не дату статьи. Даты найденных строк под сомнением; разобрать страницу `inspect`"};if(o&&(o.bodyN||0)>=8&&o.bodyMed===0)return{state:"needs_review",reason:"no_body",hint:"текст статей не читается (у большинства из "+o.bodyN+" пусто) — ключ ищется только по заголовку и описанию; материал с ключом в тексте не найдётся. Если сайт не видео, разбор тела сломан: `inspect` и пресет `drop`"};if(r.length)return/(^|; )потери: /.test(n)?{state:"ok_losses",reason:"unchecked_pages",hint:"часть страниц не проверена (см. note: «потери») — среди них мог быть материал"}:{state:"ok",reason:"found",hint:""};if(s==="telegram")return/оборвалась/.test(n)?{state:"needs_review",reason:"feed_cut",hint:"лента канала оборвалась посреди обхода (часто HTTP 429) — повторить позже"}:{state:"legit_zero",reason:"no_posts",hint:""};let a=n.match(/отброшено \d+ с другого домена\/поддомена \(([^\s)]+) — (\d+)/);if(a&&/совпало [1-9]/.test(n))return{state:"needs_review",reason:"moved",hint:"материал нашёлся, но на другом домене ("+a[1]+") — похоже, издание переехало; проверить адрес"};if(e&&e.stats&&e.stats.unreachable)return{state:"needs_review",reason:"unreachable",hint:"сайт не ответил ни обычным запросом, ни браузером ("+e.stats.unreachable+") — с этого компьютера/сети он недоступен; это «не достучались», а не «не писали». Повторить позже или открыть сайт в браузере руками"};let c=e&&e.stats&&e.stats.brokenEntries;if(c&&c.length&&!(e.rows||[]).length)return{state:"needs_review",reason:"entry_broken",hint:"вход сайта ответил ошибкой: "+c.map(g=>g.channel+" HTTP "+g.status+" "+g.url).join("; ")+" — адрес в пресете устарел. Найди рабочий: `probe`, затем `preset add`"};let l=e&&e.stats&&e.stats.tally||null;if(!l)return{state:"needs_review",reason:"no_stats",hint:n||"движок не вернул разбора"};let d=l.seen||0;if(l.svcProven&&!r.length)return{state:"legit_zero",reason:"read_no_key",hint:l.svcRead?"служебный вход сайта отдал весь период ("+l.svcRead+" статей с текстом), ключа нет":"сайт сам искал по всему периоду (wp-api) — ключа нет"};if(l.quietPeriod)return{state:"legit_zero",reason:"no_publications",hint:"за период сайт, похоже, ничего не публиковал: самая свежая запись его ленты — "+String(e.stats&&e.stats.newestPub||"").slice(0,10)+", и в карте сайта статей периода нет (лента бывает не по всем разделам и языкам — при сомнении открыть сайт)"};let p=[e.stats&&e.stats.homeErr&&"главная обычным запросом — "+e.stats.homeErr,l.mapsFailed&&"не открылось карт сайта — "+l.mapsFailed].filter(Boolean);if(!d&&p.length)return{state:"needs_review",reason:"site_errors",hint:"сайт в это время отвечал ошибками ("+p.join(", ")+") — похоже на сбой сайта, а не на смену входа. Повторить прогон по сайту позже; если ошибки повторятся — разбирать вход (`check`, `probe`)"};if(!d)return{state:"needs_review",reason:"no_candidates",hint:(t?"сайт РАНЬШЕ давал материал, а сейчас ни одной ссылки-кандидата — ":"ни одной ссылки-кандидата — ")+"похоже, сменился вход (поиск, карта, лента). Запустить `check`"};if((l.noOpen||0)>d/2)return{state:"needs_review",reason:"not_reachable",hint:"сайт не отдал больше половины статей (защита/таймаут) — это «не достучались», а не «не писали»"};if((l.late||0)>d/2)return{state:"partial",reason:"time_budget",hint:"упёрлись в бюджет времени — материал мог остаться непроверенным"};if((l.noDate||0)>d/2)return{state:"needs_review",reason:"no_dates",hint:"больше половины страниц без даты — похоже, сменилась разметка дат (или это не новости). Запустить `check`"};let f=l.notTaken||0,u=l.notTakenCapped?"больше ":"",h=(l.noOpen||0)+(l.noDate||0)+(l.late||0)+(l.overBudget||0)+f,m=d+f;if(h>=10&&h>=m*.05){let g=[["не открылись",l.noOpen],["без даты",l.noDate],["не успели по времени",l.late],["не влезли в бюджет",l.overBudget],["не взяли за бюджетом канала глубины",f?u+f:0]].filter(k=>k[1]).map(k=>k[0]+" "+k[1]),b=f&&f>=h/2,x=!b||l.titlesAll==null?"":l.titlesAll?" Заголовки всех статей периода проверены ("+({rss:"лента",api:"служебный вход сайта"}[e.stats.titlesFrom]||"карта новостей")+") — непроверенным остался только текст.":" Заголовки непрочитанных статей тоже НЕ проверены: ни карта новостей, ни лента сайта не покрывают весь период.";return{state:"partial",reason:b?"budget_cap":"unchecked_pages",titlesChecked:b&&l.titlesAll!=null?!!l.titlesAll:null,hint:"не проверено "+u+h+" страниц из "+u+m+" ("+g.join(", ")+") — ноль ничего не доказывает: среди непрочитанного мог быть материал."+x}}return(l.noKw||0)>0?{state:"legit_zero",reason:"read_no_key",hint:""}:{state:"partial",reason:"none_in_period",hint:"за период не прочитано ни одной статьи сайта: кандидаты были, но все вне периода или не статьи — ноль ничего не доказывает."+(l&&l.mapLied?" Карта сайта не показывает даты публикации (lastmod — время правки): по ней читать нечего.":"")+" Поищи вход к свежему (лента, карта новостей, `probe`)"}}var Qu=ee(()=>{i(Zu,"attention")});function ep({url:e,date:t,dateVia:n,bodyLen:r,title:s,viaBrowser:o}){if(o||!e||!t||!s)return null;let a=ye(t);return!a||!(r>=X0)?null:{url:e,host:Z0(e),day:Z(a),dateVia:n||"",bodyLen:r,title:String(s).slice(0,160)}}function tp(e,t,n=Date.now()){if(!t||!t.host)return!1;let r=e.hosts||(e.hosts={}),s=r[t.host]||(r[t.host]=[]);if(s.some(c=>c.url===t.url))return!1;let o=s.findIndex(c=>(c.missed||0)>=2);if(o<0&&(s.length>=J0||s.some(c=>c.day===t.day)&&n-Math.min(...s.map(c=>c.at||n))<14*864e5))return!1;let a={...t,at:n};return o>=0?s[o]=a:s.push(a),!0}function np(e,t){if(!t||!t.ok)return{state:"no_open",why:"не открылась"+(t&&t.err?" ("+t.err+")":"")};if(t.challenge)return{state:"no_open",why:"вместо статьи — заглушка защиты"};if(!t.date)return{state:"broken",kind:"date_lost",why:"дата больше не читается (была "+e.day+", «"+(e.dateVia||"?")+"»)"};let n=ye(t.date),r=n?Z(n):"";if(r&&r!==e.day)return{state:"broken",kind:"date_changed",why:"дата читается другая: была "+e.day+", стала "+r+" (разметка дат сменилась — берём чужую?)"};let s=e.bodyLen,o=t.bodyLen||0;return o?o*As<s?{state:"broken",kind:"body_shrunk",why:"текст статьи читается хуже: было "+s+" знаков, стало "+o+" — ключ в тексте может не находиться"}:o>s*As?{state:"broken",kind:"body_grew",why:"в текст статьи попало лишнее: было "+s+" знаков, стало "+o+" — чужие заголовки могут давать ложные находки"}:{state:"ok",why:""}:{state:"broken",kind:"body_lost",why:"текст статьи больше не читается (было "+s+" знаков)"}}function rp(e){let t=e.filter(r=>r.state!=="no_open"),n=t.filter(r=>r.state==="broken");return e.length?t.length?n.length>=2&&n.length*2>t.length?{state:"broken",why:n[0].why+(n.length>1?" (так у "+n.length+" из "+t.length+" эталонов)":"")}:n.length?{state:"watch",why:"у одного эталона: "+n[0].why+" — одной статьи мало, чтобы говорить о поломке"}:{state:"ok",why:""}:{state:"no_open",why:"ни один эталон не открылся обычным запросом"}:{state:"unknown",why:"эталонов ещё нет"}}function sp(e,t,n=Date.now()){e.forEach((r,s)=>{let o=t[s];o&&(r.checked=n,r.last=o.state,r.lastWhy=o.why||"",r.missed=o.state==="no_open"?(r.missed||0)+1:0)})}var J0,X0,As,Z0,_i=ee(()=>{St();J0=3,X0=400,As=2,Z0=i(e=>{try{return new URL(e).host.toLowerCase().replace(/^www\./,"")}catch{return""}},"hostOf");i(ep,"goldenSample");i(tp,"addGolden");i(np,"compareGolden");i(rp,"goldenVerdict");i(sp,"noteChecked")});function Oo(){if(Ct)return Ct;try{Ct=JSON.parse((0,jr.readFileSync)(ap(),"utf8"))}catch{Ct=null}return(!Ct||typeof Ct!="object")&&(Ct={}),Ct.hosts=Ct.hosts||{},Ct.verdicts=Ct.verdicts||{},Ct}function jo(){if(!Po)return;let e=ap(),t=e+".tmp";try{(0,jr.writeFileSync)(t,JSON.stringify(Ct)),(0,jr.renameSync)(t,e),Po=!1}catch{}}function ip(e){let t=ep(e);t&&tp(Oo(),t)&&(Po=!0)}function cp(){let e=Oo();return{at:e.at||null,hosts:Object.keys(e.hosts).length,busy:!!Or,verdicts:e.verdicts}}function Yi({hosts:e=null,reparse:t=Su,budgetMs:n=600*1e3,now:r=i(()=>Date.now(),"now")}={}){return Or||(Or=(async()=>{try{let s=Oo(),o=r()+n,a=e?e.map(d=>String(d).toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0]):Object.keys(s.hosts),c=0,l=0;for(let d of a){let p=s.hosts[d];if(!p||!p.length)continue;if(r()>o){l++;continue}let f=[];for(let u of p)f.push(np(u,await t(u.url)));sp(p,f,r()),s.verdicts[d]={...rp(f),at:r(),n:p.length},c++}return e||(s.at=r()),Po=!0,jo(),{ok:!0,checked:c,left:l}}catch(s){return{ok:!1,err:String(s&&s.message||s)}}finally{Or=null}})(),Or)}function lp(e=Date.now()){let t=Oo();return Object.keys(t.hosts).length>0&&(!t.at||e-t.at>Q0)}var jr,op,ap,Q0,Ct,Po,Or,Io=ee(()=>{jr=require("node:fs"),op=require("node:path");vt();_i();Zn();ap=i(()=>(0,op.join)(process.env.MEDIACHROME_DATA||Te,"golden.json"),"FILE"),Q0=7*864e5,Ct=null,Po=!1,Or=null;i(Oo,"load");i(jo,"persistGolden");i(ip,"goldenSink");i(cp,"goldenInfo");i(Yi,"checkGoldenNow");i(lp,"goldenStale")});function hp(){try{Gt=(0,sn.existsSync)(Fo)?JSON.parse((0,sn.readFileSync)(Fo,"utf8")):{}}catch{Gt={}}(!Gt||typeof Gt!="object")&&(Gt={})}function rw(){try{(0,sn.mkdirSync)(up,{recursive:!0});let e=Fo+".tmp";(0,sn.writeFileSync)(e,JSON.stringify(Gt,null,2)),(0,sn.renameSync)(e,Fo)}catch{}}function zs(e){try{return new URL(/:\/\//.test(e)?e:"https://"+e).host.replace(/^www\./,"")}catch{return String(e||"").trim()}}function mp(e){let t=Gt[zs(e)];return!t||!t.pick||!t.pick.date||t.runs%Ho===Ho-1?"":t.pick.date.via||""}function gp(e,t){if(!t)return"";let n=Object.entries(t).filter(([d,p])=>d&&p>0);if(!n.length||n.reduce((d,[,p])=>d+p,0)<sw)return"";n.sort((d,p)=>p[1]-d[1]);let[s,o]=n[0],a=fp(zs(e));a.pick=a.pick||{};let c=a.pick.date;if(!c||!c.via)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if(c.via===s)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if((t[c.via]||0)>=o*ow)return a.pick.pending=null,"";let l=a.pick.pending&&a.pick.pending.via===s?a.pick.pending:{via:s,runs:0};return l.runs++,a.pick.pending=l,l.runs<aw?"":(a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,c.via)}function wp(e){let t=Gt[zs(e)];return t&&t.pick&&t.pick.date?Zi(t.pick.date.via):""}function bp(e){let t=zs(e),n=Gt[t],r=new Set;if(!n)return{skip:r,host:t,reprobe:!1};if((n.zero||0)>=2&&n.everFound)return{skip:r,host:t,reprobe:!1};let s=n.runs%Ho===Ho-1;if(!s)for(let o of Ji){let a=n.ch[o];a&&a.dead>=Xi&&r.add(o)}if(!s)for(let o of pp){let a=n.ch[o];a&&a.idle>=nw(o)&&r.add(o)}if(!s&&!n.everFound&&(n.zero||0)>=Xi)for(let o of Ji)r.add(o);return{skip:r,host:t,reprobe:s}}function yp(e,t){if(!t)return;let n=zs(e),r=fp(n);r.runs++;for(let a of Ji){let c=t[a];if(c==null)continue;let l=r.ch[a]=r.ch[a]||{dead:0,okEver:!1};c>0?(l.dead=0,l.okEver=!0):l.dead++}typeof t.total=="number"&&(r.zero=t.total>0?0:(r.zero||0)+1,t.total>0&&(r.everFound=!0));let s=t.contrib,o=new Set(t.notRun||[]);if(s&&t.total>0)for(let a of pp){if(o.has(a)||a in t&&t[a]===null)continue;let c=r.ch[a]=r.ch[a]||{idle:0,okEver:!1};(ew[a]||[a]).reduce((d,p)=>d+(s[p]||0),0)>0?(c.idle=0,c.okEver=!0):c.idle=(c.idle||0)+1}}function Qi(){rw()}function vp(){hp()}var sn,dp,up,Fo,Ji,pp,ew,Xi,tw,nw,Ho,Gt,fp,sw,ow,aw,Zi,kp=ee(()=>{sn=require("node:fs"),dp=require("node:path");vt();bs();up=Te,Fo=(0,dp.join)(up,"site-memory.json"),Ji=["render","external","sitesearch"],pp=["sitemap","render","sitesearch"],ew={sitemap:["sitemap"],render:["render","render*"],sitesearch:["браузер-поиск","браузер-поиск*"]},Xi=4,tw={sitesearch:2},nw=i(e=>tw[e]||Xi,"idleLimit"),Ho=5,Gt={};i(hp,"load");i(rw,"save");hp();i(zs,"hostOf");fp=i(e=>Gt[e]=Gt[e]||{runs:0,ch:{}},"rec"),sw=3;i(mp,"datePick");ow=.25,aw=2;i(gp,"recordPicks");Zi=i(e=>Yd[e]||e||"","pickRu");i(wp,"datePickRu");i(bp,"plan");i(yp,"record");i(Qi,"persist");i(vp,"reload")});var oc={};ms(oc,{get:()=>dw,persist:()=>Wo,reload:()=>rc,set:()=>uw,size:()=>fw,summary:()=>sc});function xp(e){if(!(0,gt.existsSync)(e))return null;try{let t=JSON.parse((0,gt.readFileSync)(e,"utf8"));return!t||!t.urls?{bad:"в файле нет записей"}:t}catch(t){return{bad:String(t&&t.message||t).slice(0,80)}}}function Sp(e){if(e.v!==Tp){nc=!0;return}for(let[t,n]of Object.entries(e.urls))n&&n.d&&Kt.set(t,{d:n.d,t:n.t||Go()})}function rc(){Kt=new Map,Cs=!1,Bo="",Uo=!1,Vo=!1,tc=!1,nc=!1,qo=0;let e=xp(Ds);if(Ap=e!==null,e&&!e.bad){Sp(e);return}if(!e)return;Bo=e.bad,Uo=!0;let t=xp(Mp);t&&!t.bad&&(Sp(t),tc=!0)}function dw(e){let t=Kt.get(e);return t?(t.t!==Go()&&(t.t=Go(),Cs=!0),t.d):null}function uw(e,t){if(!e||!t)return;let n=Kt.get(e);n&&n.d===t||(Kt.set(e,{d:String(t),t:Go()}),Cs=!0)}function pw(){if(Kt.size<=cw)return;let e=[...Kt.entries()].sort((t,n)=>n[1].t-t[1].t).slice(0,lw);Kt=new Map(e)}function Lp(e,t){try{return(0,gt.existsSync)(e)?((0,gt.renameSync)(e,t),!0):!1}catch{return!1}}function Wo(e=!1){if(!(!Cs||Vo)&&!(!e&&qo&&Date.now()-qo<hw)){if(Uo){try{(0,gt.existsSync)(ec)&&(0,gt.unlinkSync)(ec)}catch{}if(!Lp(Ds,ec)){Vo=!0;return}Uo=!1}try{pw(),(0,gt.mkdirSync)(Te,{recursive:!0});let t={};for(let[r,s]of Kt)t[r]=s;let n=Ds+".tmp";(0,gt.writeFileSync)(n,JSON.stringify({v:Tp,urls:t})),Lp(Ds,Mp),(0,gt.renameSync)(n,Ds),Cs=!1,qo=Date.now()}catch{}}}function fw(){return Kt.size}function sc(){let e=Kt.size;return Bo?"память дат: ОСНОВНОЙ ФАЙЛ НЕ ПРОЧИТАЛСЯ ("+Bo+") — "+(tc?"взята запасная копия, потеряно только самое новое (в памяти "+e+")":"запасной копии тоже не было, память собирается заново (в памяти "+e+"); этот прогон и следующий будут дольше обычного")+(Vo?". Отложить нечитаемый файл не удалось, поэтому новые даты НЕ сохранены — старую память не трогаем":". Нечитаемый файл сохранён как date-cache.broken.json — не удаляйте его, по нему видно причину"):nc?"память дат сброшена: поменялся разбор дат — собирается заново (в памяти "+e+")":e?"память дат: "+e+" статей — повторно их не качаем":Ap?"":"память дат пока пуста — первый прогон собирает её с нуля"}var gt,Ko,Ds,Tp,cw,lw,Mp,ec,Kt,Cs,Bo,Uo,Vo,tc,nc,Ap,Go,hw,qo,zp=ee(()=>{gt=require("node:fs"),Ko=require("node:path");vt();Ds=(0,Ko.join)(Te,"date-cache.json"),Tp=5,cw=2e5,lw=15e4,Mp=(0,Ko.join)(Te,"date-cache.prev.json"),ec=(0,Ko.join)(Te,"date-cache.broken.json"),Kt=new Map,Cs=!1,Bo="",Uo=!1,Vo=!1,tc=!1,nc=!1,Ap=!1,Go=i(()=>Math.floor(Date.now()/864e5),"today");i(xp,"readFile");i(Sp,"load");i(rc,"reload");i(dw,"get");i(uw,"set");i(pw,"prune");i(Lp,"move");hw=typeof process<"u"&&process.env&&Number(process.env.MC_DC_SAVE_GAP_MS)||18e4,qo=0;i(Wo,"persist");i(fw,"size");i(sc,"summary")});function Dp(e){let t=i(n=>String(n).padStart(2,"0"),"p");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function mw(e,t){let n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return n.setDate(n.getDate()+t),n}function Ir(e,t=new Date){let n=e||{},r=Dp(t),s=n.periodMode||"fixed";if(s==="rolling"){let c=Number(n.periodDays),l=Number.isFinite(c)&&c>=Cp?Math.floor(c):Cp,d=Dp(mw(t,-(l-1)));return{from:d,to:r,why:`скользящее окно: последние ${l} дн. (${d} … ${r})`}}if(s==="since"){let c=n.from||r;return c>r?{from:r,to:r,why:`начало (${c}) ещё не наступило — беру только сегодня`}:{from:c,to:r,why:`от даты и до сегодня (${c} … ${r})`}}let o=n.from||"",a=n.to||"";return!o&&!a?{from:o,to:a,why:"период НЕ ЗАДАН — беру за всё время, в выдачу попадёт и старое"}:o?a?{from:o,to:a,why:`фиксированное окно (${o} … ${a})`}:{from:o,to:a,why:`с ${o} и без конца — беру всё, что новее`}:{from:o,to:a,why:`без начала — беру всё до ${a} включительно`}}var Cp,_o=ee(()=>{i(Dp,"ymdLocal");i(mw,"shiftDays");Cp=2;i(Ir,"resolvePeriod")});var Op={};ms(Op,{engagementProbe:()=>dc,facebookProfile:()=>nr,fbRows:()=>pc,fbWindow:()=>uc,feedChunks:()=>$p,isFacebook:()=>gw,oldestAt:()=>hc,parseFeed:()=>Es,postFromEdge:()=>Pp});function nr(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^https?:\/\//i.test(t)?t:"https://"+t.replace(/^\/+/,""))}catch{return null}if(!/(^|\.)facebook\.com$|(^|\.)fb\.com$/i.test(n.hostname))return null;let r=n.searchParams.get("id"),s=n.pathname.split("/").filter(Boolean),o=/^profile\.php$/i.test(s[0]||"")?r?"profile.php?id="+r:"":s[0]||"";return!o||/^(groups|watch|marketplace|events|gaming|pages|stories|reel|photo|share|login|help|settings)$/i.test(o)?null:{name:o,url:"https://www.facebook.com/"+o,label:"facebook.com/"+o.replace(/^profile\.php\?id=/,"id")}}function ww(e){let t=[];for(let n of String(e||"").split(`
`)){let r=n.trim();if(!(!r||r[0]!=="{"))try{t.push(JSON.parse(r))}catch{}}return t}function $p(e){let t=[],n={cursor:"",hasNext:!1,seenFeed:!1};for(let r of ww(e)){let s=r&&r.data&&r.data.node&&r.data.node.timeline_list_feed_units;if(s){n.seenFeed=!0,Array.isArray(s.edges)&&t.push(...s.edges),s.page_info&&(n.cursor=s.page_info.end_cursor||"",n.hasNext=!!s.page_info.has_next_page);continue}if(bw(r&&r.path)&&r.data&&r.data.node){n.seenFeed=!0,t.push(r.data);continue}let o=r&&r.data&&r.data.page_info;o&&Array.isArray(r.path)&&r.path.includes("timeline_list_feed_units")&&(n.seenFeed=!0,n.cursor=o.end_cursor||n.cursor,n.hasNext=!!o.has_next_page)}return{edges:t,info:n}}function Rs(e,t,{skip:n=["attached_story"],depth:r=9}={}){let s=new Set,o=i((a,c)=>{if(!a||typeof a!="object"||c>r||s.has(a))return;if(s.add(a),Array.isArray(a)){for(let d of a){let p=o(d,c+1);if(p!==void 0)return p}return}let l=t(a);if(l!==void 0)return l;for(let d of Object.keys(a)){if(n.includes(d))continue;let p=o(a[d],c+1);if(p!==void 0)return p}},"walk");return o(e,0)}function ac(e){if(!e)return;let t=tr(e,"comet_sections","context_layout","story","comet_sections","metadata"),n=Array.isArray(t)?t.map(r=>Fr(tr(r,"story","creation_time"))).find(r=>r!==void 0):void 0;return Fr(e.creation_time)??Fr(tr(e,"comet_sections","timestamp","story","creation_time"))??n??Rs(e,r=>Fr(r.creation_time),{skip:Ns})}function ic(e){if(e)return Wt(tr(e,"message","text"))??Wt(tr(e,"comet_sections","message","story","message","text"))??Rs(e,t=>t.message&&Wt(t.message.text)||void 0,{skip:Ns})}function vw(...e){for(let t of e){let n=yw(t);if(!n)continue;let r=Ep(tr(n,"comment_rendering_instance","comments","total_count"))??Ep(n.total_comment_count);if(r!==void 0)return r}return null}function dc(e){let t=String(e||""),n=i(r=>(t.match(r)||[]).length,"hits");return{reactions:n(/"(?:reaction_count|i18n_reaction_count|top_reactions|reaction_display_strategy|likers)"/g),shares:n(/"(?:share_count|share_count_reduced|reshare_count)"/g)}}function Pp(e){let t=e&&(e.node||e);if(!t||typeof t!="object")return null;let n=t.comet_sections&&t.comet_sections.content&&t.comet_sections.content.story||t,r=[n.attached_story,t.attached_story].filter(Boolean),s=i(d=>{for(let p of r){let f=d(p);if(f!==void 0&&f!=="")return f}},"pickAt"),o=Np(n)??Np(t),a=lc(n)??lc(t);if(!o&&!a)return null;let c=cc(n)??cc(t)??{name:"",url:""},l={id:o||a,url:a||"",at:ac(t)??ac(n)??0,author:c.name,authorUrl:c.url,text:ic(n)??ic(t)??"",comments:vw(t,n),repost:null};if(r.length){let d=s(cc)||{name:"",url:""};l.repost={author:d.name,authorUrl:d.url,url:s(lc)||"",text:s(ic)||"",at:s(ac)||0}}return l}function Es(e){let{edges:t,info:n}=$p(e),r=[],s=new Set;for(let o of t){let a=Pp(o);a&&(s.has(a.id)||(s.add(a.id),r.push(a)))}return{posts:r,cursor:n.cursor,hasNext:n.hasNext,seenFeed:n.seenFeed}}function uc(e,t,n=Date.now()){let r=Math.max(1,Math.min(3,+t||1)),s=i((d,p)=>{if(!d)return NaN;let f=new Date(String(d)+p).getTime();return Number.isFinite(f)?f:NaN},"stamp"),o=s(e&&e.from,"T00:00:00"),a=s(e&&e.to,"T23:59:59"),c=Math.max(Number.isFinite(o)?o:-1/0,n-r*864e5),l=Math.min(Number.isFinite(a)?a:1/0,n);return{fromMs:c,toMs:l,days:r}}function pc(e,{groups:t,exGroups:n=[],source:r,fromMs:s,toMs:o}){if(!Number.isFinite(s)||!Number.isFinite(o))throw new Error("окно времени не посчиталось ("+s+" … "+o+") — это ошибка в программе, а не в настройках");let a=Cr(t),c=[],l={всего:0,"вне периода":0,"без даты":0,"ключа нет":0,"минус-слово":0};for(let d of e){if(l.всего++,!d.at){l["без даты"]++;continue}let p=d.at*1e3;if(p<s||p>o){l["вне периода"]++;continue}let f=d.text||"",u=d.repost&&d.repost.text||"",h=!!f&&dt(f.toLowerCase(),t),m=!!u&&dt(u.toLowerCase(),t);if(!h&&!m){l["ключа нет"]++;continue}if(n.length&&dt((f+" "+u).toLowerCase(),n)){l["минус-слово"]++;continue}let w=d.repost?"репост":"авторский",g=h&&m?"в подписи и в репосте":h?"в подписи":"в тексте репоста",b=h?f:u,x=b.split(`
`).map(k=>k.trim()).find(Boolean)||"(без текста)";c.push({source:r,date:new Date(p).toISOString(),title:x.slice(0,120),url:d.url,channel:"facebook",channels:"facebook",match:h?"подпись":"репост",snippet:Dr(b,a),author:d.author||"",kind:w,via:d.repost?(d.repost.author||"чужой пост")+(d.repost.url?" — "+d.repost.url:""):"",matchIn:g,comments:Number.isFinite(d.comments)?d.comments:null})}return{rows:c,tally:l}}var gw,bw,Fr,Wt,tr,Ns,Rp,cc,lc,Np,yw,Ep,hc,$s=ee(()=>{Zn();i(nr,"facebookProfile");gw=i(e=>!!nr(e),"isFacebook");i(ww,"jsonLines");bw=i(e=>Array.isArray(e)&&e.length>=2&&e[e.length-2]==="edges"&&typeof e[e.length-1]=="number"&&e.includes("timeline_list_feed_units"),"isEdgeChunk");i($p,"feedChunks");i(Rs,"deep");Fr=i(e=>typeof e=="number"&&isFinite(e)&&e>0?e:void 0,"num"),Wt=i(e=>typeof e=="string"&&e.trim()?e:void 0,"str"),tr=i((e,...t)=>t.reduce((n,r)=>n==null?n:n[r],e),"get"),Ns=["attached_story","attachments","attachment","style_infos","media"];i(ac,"timeOf");i(ic,"textOf");Rp=i(e=>{if(!e||!Array.isArray(e.actors)||!e.actors.length)return;let t=e.actors[0];return t&&Wt(t.name)?{name:t.name,url:Wt(t.url)||""}:void 0},"oneActor"),cc=i(e=>e?Rp(e)??Rs(e,Rp,{skip:Ns}):void 0,"actorOf"),lc=i(e=>e?Wt(e.wwwURL)??Wt(e.permalink_url)??Rs(e,t=>Wt(t.wwwURL)||Wt(t.permalink_url),{skip:Ns}):void 0,"urlOf"),Np=i(e=>e?Wt(e.post_id)??(Fr(e.post_id)?String(e.post_id):void 0)??Rs(e,t=>Wt(t.post_id)||(Fr(t.post_id)?String(t.post_id):void 0),{skip:Ns}):void 0,"idOf"),yw=i(e=>tr(e,"comet_sections","feedback","story","story_ufi_container","story","feedback_context","feedback_target_with_context"),"ufiOf"),Ep=i(e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:void 0,"count");i(vw,"commentsOf");i(dc,"engagementProbe");i(Pp,"postFromEdge");i(Es,"parseFeed");i(uc,"fbWindow");i(pc,"fbRows");hc=i(e=>e.reduce((t,n)=>n.at&&(!t||n.at<t)?n.at:t,0),"oldestAt")});function _t(e){let t=!!(e&&e.noExternal);return{ai:!t,bot:!t,extSearch:!t,locked:t}}var Hr,qr=ee(()=>{i(_t,"outbound");Hr="у проекта запрещена отправка данных во внешний контур (настройка проекта)"});var bc={};ms(bc,{DEFAULT_LIMIT:()=>rr,_reset:()=>Lw,canVisit:()=>Jo,nextAt:()=>kw,note:()=>wc,persist:()=>gc,reload:()=>mc,summary:()=>Sw,visitsToday:()=>xw});function mc(){yn=new Map;try{let e=(0,on.existsSync)(Ps)?JSON.parse((0,on.readFileSync)(Ps,"utf8")):null;for(let[t,n]of Object.entries(e&&e.hosts||{}))Array.isArray(n)&&yn.set(t,n.filter(r=>typeof r=="number"&&isFinite(r)))}catch{yn=new Map}return js=!1,yn.size}function gc(){if(!js)return!1;try{(0,on.mkdirSync)((0,Yo.dirname)(Ps),{recursive:!0});let e={};for(let[n,r]of yn)r.length&&(e[n]=r);let t=Ps+".tmp";return(0,on.writeFileSync)(t,JSON.stringify({v:1,hosts:e},null,2)),(0,on.renameSync)(t,Ps),js=!1,!0}catch{return!1}}function Jo(e,{limit:t=rr,now:n=Date.now()}={}){let r=Math.max(1,+t||rr),s=Is(e,n);if(s.length>=r){let c=Os-(n-Math.min(...s));return{ok:!1,used:s.length,limit:r,why:"за сутки уже "+s.length+" захода из "+r+" — следующий через "+fc(c)}}let o=Math.floor(Os/r),a=s.length?Math.max(...s):0;if(a&&n-a<o){let c=n-a;return{ok:!1,used:s.length,limit:r,why:(c<6e4?"заходили только что":"заходили "+fc(c)+" назад")+" — на профиль ходим не чаще раза в "+fc(o)}}return{ok:!0,used:s.length,limit:r,why:""}}function wc(e,t=Date.now()){let n=Is(e,t);return n.push(t),yn.set(e,n),js=!0,n.length}function kw(e,{limit:t=rr,now:n=Date.now()}={}){if(Jo(e,{limit:t,now:n}).ok)return 0;let s=Is(e,n),o=Math.max(1,+t||rr);return s.length>=o?Math.min(...s)+Os:Math.max(...s)+Math.floor(Os/o)}function Lw(){yn=new Map,js=!1}var on,Yo,Ps,Os,rr,yn,js,Is,fc,xw,Sw,yc=ee(()=>{on=require("node:fs"),Yo=require("node:path");vt();Ps=(0,Yo.join)(Te,"social-visits.json"),Os=24*3600*1e3,rr=3,yn=new Map,js=!1;i(mc,"reload");i(gc,"persist");Is=i((e,t)=>(yn.get(e)||[]).filter(n=>t-n<Os),"fresh"),fc=i(e=>{let t=Math.round(e/6e4);if(t<1)return"только что";if(t<60)return t+" мин";let n=Math.floor(t/60),r=t%60;return n+" ч"+(r?" "+r+" мин":"")},"hhmm");i(Jo,"canVisit");i(wc,"note");i(kw,"nextAt");xw=i((e,t=Date.now())=>Is(e,t).length,"visitsToday"),Sw=i((e=Date.now())=>{let t=[...yn.keys()].filter(n=>Is(n,e).length).length;return t?"профилей соцсетей посещено за сутки: "+t:""},"summary");i(Lw,"_reset")});function jp(e,t){typeof e=="function"&&(kc=e),typeof t=="function"&&(xc=t)}function Ip(e){typeof e=="function"&&(Sc=e)}function Fp(e){typeof e=="function"&&(Lc=e)}async function Br(e,t,n={}){let r=typeof n.onStep=="function"?n.onStep:null,s=typeof n.stopping=="function"?n.stopping:()=>!1,o=!1,a=e.config||{};if(!String(a.keyword||"").trim())return{rows:[],log:[{site:"(проект)",channel:"—",found:0,note:"не задан запрос — прогон пропущен"}]};Tu(),vp(),rc(),gu(oc),wu(ip);let c=(a.sites||[]).map(z=>String(z).trim()).filter(Boolean),l=Ir(a),d=_t(a),p={keyword:a.keyword,exclude:a.exclude||"",morph:a.morph!==!1,from:l.from,to:l.to,...d.extSearch?{}:{external:!1}},f=[],u=[],h=new Map,m=Date.now(),w=c.length+(a.facebook||[]).filter(z=>String(z||"").trim()).length+(a.youtube&&a.youtube.enabled?1:0),g=0,b=i(z=>{if(r)try{r({done:g,total:w,found:f.length,site:z||""})}catch{}},"tick");b(""),xc&&xc();let x=0,k=0,y=i(()=>{if(t)try{t(f.slice(),u.slice())}catch{}},"checkpoint"),v=i(async()=>{for(;x<c.length;){if(s()){o=!0;break}let z=c[x++],B=Date.now();b(z);try{let{skip:$,reprobe:Q}=bp(z),ze=mp(z),De=await Ao(z,{...p,skip:$,reprobe:Q,datePick:ze});yp(z,De.stats);let et=gp(z,De.stats&&De.stats.picks),_=wp(z);_&&(De.note=(De.note?De.note+"; ":"")+(et?"дата теперь берётся иначе: было «"+Zi(et)+"», стало «"+_+"» — сайт сменил разметку":"дата: "+_));for(let q of De.rows){if(!q.url)continue;let C=ve(q.url),j=h.get(C);if(j){j.channels=[...new Set((j.channels+" + "+(q.channels||"")).split(" + ").filter(Boolean))].join(" + ");continue}h.set(C,q),f.push(q)}let qe=Zu(De),Ue=De.stats&&De.stats.tally||{},Se={st:qe.state,why:qe.reason};Ue.bodyN&&(Se.bodyN=Ue.bodyN,Se.bodyMed=Ue.bodyMed),u.push({site:z,channel:De.channel,found:De.rows.length,note:De.note,ms:Date.now()-B,health:Se})}catch($){u.push({site:z,channel:"error",found:0,note:String($&&$.message||$),ms:Date.now()-B})}g++,b(""),++k%3===0&&(Qi(),Wo(),jo(),y())}},"worker");await Promise.all(Array.from({length:Math.min(4,c.length||1)},v)),Qi(),Wo(!0),jo(),y();let L=(a.facebook||[]).map(z=>nr(z)).filter(Boolean);if(L.length){let z=Math.max(1,Math.min(6,+a.fbVisits||rr)),B=Date.now(),{fromMs:$,toMs:Q,days:ze}=uc(l,a.fbDays,B),De=nn(a.keyword,a.morph!==!1),et=nn(a.exclude||"",a.morph!==!1);mc(),u.push({site:"(фейсбук)",channel:"—",found:0,note:"профилей "+L.length+"; окно "+ze+" сут. ("+new Date($).toLocaleString("ru-RU")+" … "+new Date(Q).toLocaleString("ru-RU")+"); на профиль не чаще "+z+" раз в сутки"});for(let _ of L){if(s()){o=!0;break}let qe=Date.now();b(_.label);let Ue=Jo(_.label,{limit:z});if(!Ue.ok){u.push({site:_.label,channel:"facebook",found:0,note:"пропущен: "+Ue.why});continue}if(!Lc){u.push({site:_.label,channel:"facebook",found:0,note:"нет браузера — соцсети читаются только с Playwright (запусти setup-windows.bat)"});continue}try{wc(_.label);let Se=await Lc(_.url,{sinceMs:$,maxScrolls:ze<=1?3:6});if(!Se||!Se.ok){u.push({site:_.label,channel:"facebook",found:0,ms:Date.now()-qe,note:Se&&Se.err||"лента не прочитана"});continue}let q=Se.chunks.join(`
`),C=Es(q),{rows:j,tally:H}=pc(C.posts,{groups:De,exGroups:et,source:_.label,fromMs:$,toMs:Q});for(let Ie of j){let ce=ve(Ie.url);h.has(ce)||(h.set(ce,Ie),f.push(Ie))}let ie=["постов просмотрено "+C.posts.length+" (прокруток "+(Se.scrolls||0)+")","совпало "+j.length],ke=C.posts.reduce((Ie,ce)=>ce.at&&(!Ie||ce.at<Ie)?ce.at:Ie,0);ie.push(ke&&ke*1e3<=$?"докрутились до начала окна":"до начала окна НЕ докрутились — в ленте могло остаться ещё"+(ke?" (дошли до "+new Date(ke*1e3).toLocaleString("ru-RU")+")":""));let Oe=Object.entries(H).filter(([Ie,ce])=>Ie!=="всего"&&ce).map(([Ie,ce])=>Ie+" — "+ce);Oe.length&&ie.push("отсеяно: "+Oe.join(", "));let J=C.posts.filter(Ie=>Number.isFinite(Ie.comments)).length;ie.push("счётчик комментариев приехал у "+J+" постов из "+C.posts.length);let X=dc(q);ie.push(X.reactions?"признаки реакций в ответах встретились "+X.reactions+" раз — есть что разбирать":"реакций Фейсбук в этих ответах не прислал — показывать нечего"),u.push({site:_.label,channel:"facebook",found:j.length,ms:Date.now()-qe,note:ie.join("; ")})}catch(Se){u.push({site:_.label,channel:"facebook",found:0,ms:Date.now()-qe,note:String(Se&&Se.message||Se)})}g++,b(""),y()}gc()}if(a.youtube&&a.youtube.enabled&&!s()){b("youtube");try{let z=await zu(a.keyword,{exclude:a.exclude||"",morph:a.morph!==!1,ytRange:a.youtube.range||"month",from:l.from,to:l.to});for(let B of z.rows)B.url&&!h.has(B.url)&&(h.set(B.url,B),f.push(B));u.push({site:"youtube",channel:z.channel,found:z.rows.length,note:z.note})}catch(z){u.push({site:"youtube",channel:"error",found:0,note:String(z)})}g++,b("")}o&&u.push({site:"(остановлен)",channel:"—",found:0,note:"сбор остановлен человеком: пройдено источников "+g+" из "+w+". Найденное сохранено, остальные источники не читались"}),u.push({site:"(период)",channel:"—",found:0,note:l.why,from:l.from||"",to:l.to||""});let A=sc();if(A&&u.push({site:"(память дат)",channel:"—",found:0,note:A}),Sc)try{await Sc()}catch{}let T=Date.now()-m,R=kc?kc():null,F=u.filter(z=>z.ms).sort((z,B)=>B.ms-z.ms).slice(0,5).map(z=>String(z.site).replace(/^https?:\/\//,"").replace(/\/$/,"")+" "+Math.round(z.ms/1e3)+" с"),D=["прогон занял "+vc(T)+" (сайтов "+c.length+", по 4 разом)"];if(R&&R.ops){let z=Math.max(1,R.lanes||1),B=R.busyMs/z,$=Math.round(B/Math.max(1,T)*100);D.push("браузер ("+z+" "+(z===1?"окно":z<5?"окна":"окон")+"): "+vc(R.busyMs)+" за "+R.ops+" операций"+(z>1?", то есть "+vc(Math.round(B))+" в один поток":"")+" — это "+$+"% времени прогона и его нижняя граница")}if(F.length&&D.push("дольше всех (с ожиданием очереди): "+F.join(", ")),R&&R.byHost){let z=Object.entries(R.byHost).sort((B,$)=>$[1].ms-B[1].ms).slice(0,5).map(([B,$])=>B+" "+Math.round($.ms/1e3)+" с/"+$.ops+" оп.");z.length&&D.push("браузер съели: "+z.join(", "))}return u.push({site:"(время)",channel:"—",found:0,note:D.join("; "),ms:T}),f.sort((z,B)=>String(B.date||"").localeCompare(String(z.date||""))),{rows:f,log:u}}var kc,xc,Sc,Lc,vc,Fs=ee(()=>{Zn();Qu();Io();kp();zp();_o();bs();$s();qr();yc();kc=null,xc=null;i(jp,"setBrowserStats");Sc=null;i(Ip,"setBrowserCloser");Lc=null;i(Fp,"setFacebookReader");vc=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"mmss");i(Br,"runProject")});var ut,Hs=ee(()=>{ut=new Set});function Ur(e,{name:t="",total:n=0,by:r="ручной"}={}){sr.set(String(e),{id:String(e),name:String(t||""),by:r,startedAt:Date.now(),total:+n||0,done:0,found:0,site:"",stopping:!1})}function Vr(e,{done:t,total:n,found:r,site:s}={}){let o=sr.get(String(e));o&&(Number.isFinite(+t)&&(o.done=+t),Number.isFinite(+n)&&+n>0&&(o.total=+n),Number.isFinite(+r)&&(o.found=+r),s!=null&&(o.site=String(s)))}function Xo(e){let t=sr.get(String(e));return t?(t.stopping=!0,!0):!1}function Gr(e){let t=sr.get(String(e));return!!(t&&t.stopping)}function Kr(e){sr.delete(String(e))}function Wr(){return Array.from(sr.values()).map(e=>({id:e.id,name:e.name,by:e.by,startedAt:e.startedAt,total:e.total,done:e.done,found:e.found,site:e.site,stopping:e.stopping,ms:Date.now()-e.startedAt}))}function Hp(e){return sr.has(String(e))}var sr,qs=ee(()=>{sr=new Map;i(Ur,"begin");i(Vr,"step");i(Xo,"askStop");i(Gr,"stopping");i(Kr,"end");i(Wr,"snapshot");i(Hp,"active")});function Bs(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^t\.me\/s\//,"t.me/").replace(/^@/,"t.me/").replace(/\/+$/,"")}var Qo,Tc,Mc,Ac,zc,Dc=ee(()=>{Qo=[{url:"kz.kursiv.media",name:"Курсив"},{url:"zakon.kz",name:"Zakon.kz"},{url:"kapital.kz",name:"Капитал"},{url:"informburo.kz",name:"Informburo"},{url:"tengrinews.kz",name:"Tengrinews"},{url:"kazpravda.kz",name:"Казахстанская правда"},{url:"baq.kz",name:"BAQ.kz"},{url:"khabar.kz",name:"Хабар"},{url:"turkystan.kz",name:"Túrkistan"},{url:"24.kz",name:"24.kz"},{url:"liter.kz",name:"Литер"},{url:"caravan.kz",name:"Караван"},{url:"newtimes.kz",name:"NewTimes"},{url:"stan.kz",name:"Stan.kz"},{url:"lada.kz",name:"Лада (Актау)"},{url:"sn.kz",name:"Столичная жизнь"},{url:"vechastana.kz",name:"Вечерняя Астана"},{url:"aikyn.kz",name:"Айқын"},{url:"ulysmedia.kz",name:"Ulys Media"},{url:"malim.kz",name:"Malim"},{url:"vlast.kz",name:"Власть"},{url:"astanatv.kz",name:"Астана ТВ"},{url:"exclusive.kz",name:"Exclusive"},{url:"forbes.kz",name:"Forbes Казахстан"},{url:"mgorod.kz",name:"Мой город (Уральск)"},{url:"politico.kz",name:"Politico.kz"},{url:"sputnik.kz",name:"Sputnik Казахстан"},{url:"almaty.tv",name:"Алматы ТВ"},{url:"qazaqstan.tv",name:"Qazaqstan"},{url:"democrat.kz",name:"Democrat"},{url:"arasha.kz",name:"Arasha"},{url:"press.kz",name:"Press.kz"},{url:"365info.kz",name:"365info"},{url:"lsm.kz",name:"LS (lsm.kz)"},{url:"inbusiness.kz",name:"InBusiness"},{url:"factcheck.kz",name:"Factcheck.kz"},{url:"egemen.kz",name:"Egemen Qazaqstan"},{url:"ratel.kz",name:"Ratel"},{url:"nur.kz",name:"NUR.KZ"},{url:"time.kz",name:"Время"},{url:"uralskweek.kz",name:"Уральская неделя"},{url:"yujanka.kz",name:"Южанка"},{url:"adyrna.kz",name:"Адырна"},{url:"masa.media",name:"Masa Media"},{url:"inform.kz",name:"Казинформ",added:"2026-11-20"},{url:"kaz.tengrinews.kz",name:"Tengrinews (на казахском)",added:"2026-11-20"},{url:"rus.baq.kz",name:"BAQ.kz (на русском)",added:"2026-11-20"},{url:"kaz.zakon.kz",name:"Zakon.kz (на казахском)",added:"2026-11-20"},{url:"azattyq-ruhy.kz",name:"Azattyq Rýhy",added:"2026-11-20"},{url:"rus.azattyq-ruhy.kz",name:"Azattyq Rýhy (на русском)",added:"2026-11-20"},{url:"elordainfo.kz",name:"Elorda Info",added:"2026-11-20"},{url:"qazaqtoday.info",name:"QazaqToday",added:"2026-11-20"},{url:"bes.media",name:"Bes.media",added:"2026-11-20"},{url:"dalanews.kz",name:"Dalanews",added:"2026-11-20"},{url:"ult.kz",name:"Ult.kz",added:"2026-11-20"},{url:"ozgeris.info",name:"Өзгеріс",added:"2026-11-20"},{url:"kt.kz",name:"Kazakhstan Today",added:"2026-11-20"},{url:"total.kz",name:"Total.kz",added:"2026-11-20"},{url:"qaz-media.kz",name:"Qaz-media (Петропавловск)",added:"2026-11-20"},{url:"kstnews.kz",name:"Костанайские новости",added:"2026-11-20"},{url:"ktk.kz",name:"КТК",added:"2026-11-20"},{url:"kaztag.kz",name:"КазТАГ",added:"2026-11-20"}],Tc=[{url:"bbc.com",name:"BBC"},{url:"theguardian.com",name:"The Guardian"},{url:"aljazeera.com",name:"Al Jazeera"},{url:"dw.com",name:"Deutsche Welle",note:"поиск сайта работает (параметр item)"},{url:"cnn.com",name:"CNN"},{url:"euronews.com",name:"Euronews",note:"поиск сайта работает"},{url:"npr.org",name:"NPR"},{url:"cbsnews.com",name:"CBS News"},{url:"nbcnews.com",name:"NBC News"},{url:"abcnews.com",name:"ABC News",note:"карта новостей на 1000 адресов с заголовками"},{url:"independent.co.uk",name:"The Independent"},{url:"straitstimes.com",name:"The Straits Times"},{url:"time.com",name:"TIME"},{url:"usatoday.com",name:"USA Today"},{url:"newsweek.com",name:"Newsweek"},{url:"japantimes.co.jp",name:"The Japan Times",note:"из облака отдавал 403; RSS живой"},{url:"france24.com",name:"France 24",note:"из облака отдавал 403 — проверить прогоном"},{url:"apnews.com",name:"Associated Press",note:"из облака отдавал 403 — проверить прогоном"}],Mc=[{url:"ria.ru",name:"РИА Новости",note:"поиск сайта работает"},{url:"lenta.ru",name:"Лента.ру",note:"поиск сайта работает (отдаёт JSON)"},{url:"rbc.ru",name:"РБК",note:"карта новостей на 429 адресов с заголовками"},{url:"vedomosti.ru",name:"Ведомости",note:"карта новостей с заголовками"},{url:"interfax.ru",name:"Интерфакс"},{url:"iz.ru",name:"Известия",note:"главная отдаёт 403, а RSS и карты живые"},{url:"aif.ru",name:"Аргументы и факты",note:"поиск сайта работает"},{url:"kp.ru",name:"Комсомольская правда"},{url:"news.ru",name:"NEWS.ru",note:"поиск запрещён robots сайта; ленты открыты"},{url:"life.ru",name:"Life"},{url:"vesti.ru",name:"Вести",note:"карта новостей на 919 свежих адресов"},{url:"ntv.ru",name:"НТВ"},{url:"bfm.ru",name:"BFM.ru",note:"поиск сайта работает"},{url:"fontanka.ru",name:"Фонтанка"},{url:"business-gazeta.ru",name:"Бизнес Online"},{url:"t.me/kommersant",name:"Коммерсантъ (телеграм)",replaces:"kommersant.ru",added:"2026-11-21",note:"сайт из Казахстана не открывается; канал — 52 поста в сутки"},{url:"t.me/mk_ru",name:"Московский комсомолец (телеграм)",replaces:"mk.ru",added:"2026-11-21",note:"сайт из Казахстана режет запросы (HTTP 429); канал — 56 постов в сутки"},{url:"t.me/svpressaru",name:"Свободная пресса (телеграм)",replaces:"svpressa.ru",added:"2026-11-21",note:"сайт из Казахстана не открывается; канал — 46 постов в сутки, но просмотров мало"},{url:"t.me/channelone_official",name:"Первый канал (телеграм)",replaces:"1tv.ru",added:"2026-11-21",note:"сайт из Казахстана не открывается; канал — 14 постов в сутки"}],Ac=[{url:"t.me/ktknews",name:"КТК",note:"канал издания; сайт ktk.kz тоже в списке сайтов"},{url:"t.me/kaztag_tg",name:"КазТАГ",note:"канал издания; сайт kaztag.kz тоже в списке сайтов"},{url:"t.me/dknews_kz",name:"ДК News",note:"вместо dknews.kz — поиск только через браузер"},{url:"t.me/tass_agency",name:"ТАСС"},{url:"t.me/negemedia",name:"negemedia"},{url:"t.me/syrymitkulov",name:"Сырым Иткулов"},{url:"t.me/qumash_kz",name:"qumash_kz"},{url:"t.me/myastanacity",name:"My Astana City"},{url:"t.me/azattyqasia",name:"Azattyq Asia"},{url:"t.me/azattyq_ruhy",name:"Azattyq Rýhy"},{url:"t.me/Zanamiviehali",name:"Zanamiviehali"},{url:"t.me/prokadrykz",name:"Про кадры KZ"},{url:"t.me/bessimptomno",name:"Бессимптомно"},{url:"t.me/ztb_qazaq",name:"ztb_qazaq"},{url:"t.me/ztb_qaz",name:"ztb_qaz"},{url:"t.me/egovpress",name:"eGov Press"},{url:"t.me/nehabar",name:"НеХабар"},{url:"t.me/kozachkow",name:"kozachkow"},{url:"t.me/gaziz1984",name:"gaziz1984"},{url:"t.me/adyrnaportal",name:"Adyrna"},{url:"t.me/yedilov_online",name:"Yedilov online"},{url:"t.me/basekz",name:"BASE KZ"},{url:"t.me/chinovnik_kz",name:"Чиновник KZ"},{url:"t.me/respublikaKZmediaNEWS",name:"Республика KZ"},{url:"t.me/dashimbayev",name:"dashimbayev"},{url:"t.me/KrivosheyevD",name:"Кривошеев"},{url:"t.me/nkorganbekova",name:"Н. Корганбекова"}];i(Bs,"normSource");zc=[Qo,Tc,Mc,Ac].flat().map(e=>e.added||"").sort().pop()||""});var qp,Bp,Up,Vp=ee(()=>{qp="2026-11-21",Bp=[{url:"t.me/aqorda_resmi",name:"Aqorda",cat:"politics",ci:776,subs:84727,postViews:8800},{url:"t.me/kozachkow",name:"Kozachkov offside",cat:"politics",ci:462,subs:122846,postViews:41800},{url:"t.me/ztb_qaz",name:"ZTB NEWS",cat:"news",ci:380,subs:171828,postViews:17200},{url:"t.me/geo_2019",name:"Казахстан и все-все-все",cat:"news",ci:358,subs:12056,postViews:1600},{url:"t.me/nehabar",name:"НЕХабар",cat:"news",ci:357,subs:68582,postViews:6600},{url:"t.me/qumash_kz",name:"Qumash",cat:"news",ci:346,subs:122073,postViews:20900},{url:"t.me/atamekenbusiness",name:"Atameken Business",cat:"news",ci:341,subs:74541,postViews:6800},{url:"t.me/KZgovernment",name:"UKIMET",cat:"politics",ci:308,subs:21389,postViews:1700},{url:"t.me/Zanamiviehali",name:"За нами уже выехали",cat:"news",ci:294,subs:63686,postViews:10400},{url:"t.me/yedilov_online",name:"YEDILOV online",cat:"politics",ci:287,subs:88210,postViews:28700},{url:"t.me/eurobri",name:"Евразийский брифинг",cat:"politics",ci:248,subs:35404,postViews:3800},{url:"t.me/chinovnik_kz",name:"Чиновник",cat:"politics",ci:227,subs:31778,postViews:7400},{url:"t.me/baraeva_vidit",name:"Бараева",cat:"politics",ci:201,subs:4865,postViews:2800},{url:"t.me/grpatKZ",name:"Буданбай — Казахстан и Центральная Азия",cat:"politics",ci:199,subs:29522,postViews:4900},{url:"t.me/egovpress",name:"EGOV.PRESS",cat:"politics",ci:197,subs:67194,postViews:10600},{url:"t.me/protenge_kz",name:"PROTENGE",cat:"politics",ci:193,subs:20875,postViews:5800},{url:"t.me/mediastan",name:"MediaStan",cat:"news",ci:183,subs:1959,postViews:290},{url:"t.me/halyqstan",name:"HALYQSTAN",cat:"news",ci:182,subs:31069,postViews:8100},{url:"t.me/azattyqasia",name:"Азаттык Азия",cat:"news",ci:173,subs:12870,postViews:1800},{url:"t.me/CMN_KZ",name:"CMN.KZ",cat:"news",ci:172,subs:28012,postViews:4e3},{url:"t.me/astanovka98",name:"Astanovka98",cat:"news",ci:167,subs:58639,postViews:15300},{url:"t.me/elinfo_kz",name:"Солай де",cat:"news",ci:159,subs:30539,postViews:1500},{url:"t.me/jexenews",name:"JexeNews",cat:"news",ci:157,subs:9555,postViews:1300},{url:"t.me/prokadrykz",name:"PRO КАДРЫ KZ",cat:"politics",ci:156,subs:80892,postViews:15800},{url:"t.me/fund_anticorr",name:"Фонд-бюро расследования коррупции",cat:"news",ci:147,subs:84601,postViews:10100},{url:"t.me/pressmfakz",name:"MFA Qazaqstan",cat:"politics",ci:147,subs:8140,postViews:966},{url:"t.me/ptrkkz",name:"ТРК Президента",cat:"politics",ci:145,subs:27825,postViews:1900},{url:"t.me/nordkazakh89",name:"Общественная безопасность Казахстан",cat:"news",ci:144,subs:10699,postViews:504},{url:"t.me/kaliyevchannel",name:"Kaliyev channel",cat:"politics",ci:144,subs:5954,postViews:1200},{url:"t.me/holanewskz",name:"Hola News",cat:"news",ci:141,subs:14749,postViews:1800},{url:"t.me/antikornews",name:"ҰҚК Сыбайлас жемқорлыққа қарсы қызметі",cat:"politics",ci:138,subs:14087,postViews:4600},{url:"t.me/quryltairesmi",name:"QURYLTAI",cat:"politics",ci:137,subs:9205,postViews:745},{url:"t.me/house_of_cards_qr",name:"ARSEN SARSEKOV",cat:"politics",ci:136,subs:8059,postViews:2300},{url:"t.me/truestorykz",name:"TRUE STORY KZ",cat:"news",ci:131,subs:14571,postViews:1700},{url:"t.me/nur_kz_7",name:"Сегодня.KZ",cat:"politics",ci:131,subs:2806,postViews:508},{url:"t.me/centralasianow",name:"ЦА | Новости Центральной Азии",cat:"news",ci:130,subs:7987,postViews:1600},{url:"t.me/basekz",name:"БАСЕ",cat:"news",ci:130,subs:47451,postViews:10600},{url:"t.me/akhmetovkz",name:"АХМЕТОВ",cat:"politics",ci:126,subs:4775,postViews:3e3},{url:"t.me/shishkin_like",name:"Shishkin_like",cat:"news",ci:122,subs:31131,postViews:2900},{url:"t.me/nationalbusiness_kz",name:"National Business Kazakhstan",cat:"news",ci:121,subs:3117,postViews:228},{url:"t.me/baidildinovoil",name:"Байдильдинов. Нефть",cat:"news",ci:116,subs:5359,postViews:1700},{url:"t.me/zapiskikitaeveda",name:"Записки казахского китаеведа",cat:"news",ci:111,subs:4949,postViews:869},{url:"t.me/qogamnews",name:"QOGAM by SATZHANGRAM",cat:"news",ci:109,subs:22258,postViews:751},{url:"t.me/villagekazakhstan",name:"Village",cat:"news",ci:108,subs:13538,postViews:1300},{url:"t.me/kazchuvash",name:"Казахский чуваш",cat:"news",ci:97.5,subs:23796,postViews:3400},{url:"t.me/gosrating",name:"ПИСЬМА ПРЕЗИДЕНТУ",cat:"politics",ci:96.4,subs:21790,postViews:14900},{url:"t.me/ca_cronos",name:"Cronos Asia",cat:"politics",ci:96,subs:1604,postViews:127},{url:"t.me/negemedia",name:"Nege.kz",cat:"news",ci:95.7,subs:5249,postViews:1e3},{url:"t.me/aimagambetov",name:"AIMAGAMBETOV",cat:"politics",ci:90.4,subs:12257,postViews:1300},{url:"t.me/myastanacity",name:"Астана - Что? Где? Когда?",cat:"news",ci:82.1,subs:19253,postViews:4e3},{url:"t.me/otyrarkz",name:"OTYRAR",cat:"news",ci:81.1,subs:4509,postViews:409},{url:"t.me/off_shores",name:"Выход к морю",cat:"politics",ci:80.3,subs:12261,postViews:13400},{url:"t.me/kzkelin",name:"Келин услышала",cat:"politics",ci:80.1,subs:5694,postViews:2400},{url:"t.me/kriminal_kazakhstan",name:"Криминальный Казахстан",cat:"news",ci:80,subs:22712,postViews:7900},{url:"t.me/almatytoday",name:"Almaty Today",cat:"news",ci:79.7,subs:58632,postViews:11700},{url:"t.me/respublikaKZmediaNEWS",name:"РЕСПУБЛИКА.KZ.media",cat:"news",ci:78.3,subs:16561,postViews:3100},{url:"t.me/NashaGazetaKst",name:"Наша Газета (Костанай)",cat:"news",ci:73.9,subs:15334,postViews:2300},{url:"t.me/erlankarin",name:"ERLAN KARIN",cat:"politics",ci:73.7,subs:4944,postViews:3e3},{url:"t.me/zhest_kz_official",name:"ZHEST_KZ",cat:"news",ci:73.5,subs:36801,postViews:2600},{url:"t.me/shatalkanal",name:"Шаталканал",cat:"politics",ci:73.1,subs:2596,postViews:583},{url:"t.me/AQOSlive",name:"QOS live",cat:"news",ci:71.1,subs:1681,postViews:282},{url:"t.me/atamekenbusiness_qaz",name:"Atameken Business (қаз.)",cat:"news",ci:70.8,subs:18960,postViews:1600},{url:"t.me/nkorganbekova",name:"Korganbekova VIBE",cat:"news",ci:70.7,subs:4875,postViews:1100},{url:"t.me/Jogargy_sot",name:"ҚР ЖОҒАРҒЫ СОТЫ",cat:"news",ci:68.7,subs:21136,postViews:1600},{url:"t.me/toughbuthones",name:"Обо всём, жёстко, но честно.",cat:"politics",ci:68.4,subs:23966,postViews:2200},{url:"t.me/ortcom_kz",name:"ORTCOM.KZ",cat:"news",ci:68,subs:3449,postViews:171},{url:"t.me/azattyq",name:"Azattyq - Азаттық",cat:"news",ci:67.7,subs:10692,postViews:1300},{url:"t.me/peruash",name:"Азат Перуашев",cat:"politics",ci:63.6,subs:2322,postViews:153},{url:"t.me/redyurt",name:"Красная Юрта",cat:"politics",ci:63.2,subs:6837,postViews:3400},{url:"t.me/qonandoylex",name:"QonanDoyle",cat:"news",ci:62.4,subs:3280,postViews:854},{url:"t.me/union_unbreakable",name:"НЕРУШИМЫЕ — новости ЦА",cat:"news",ci:59.6,subs:2629,postViews:573},{url:"t.me/gazizaraimbeknews",name:"SHYNDYK.KZ",cat:"news",ci:54.5,subs:7505,postViews:371},{url:"t.me/kzpublic",name:"Мой Казахстан",cat:"news",ci:54.2,subs:3432,postViews:76},{url:"t.me/egovnewss",name:"Egov_news",cat:"news",ci:52.5,subs:2840,postViews:77},{url:"t.me/qaz365kz",name:"Qaz365.kz",cat:"news",ci:51.9,subs:72461,postViews:3e3},{url:"t.me/KrivosheyevD",name:"krivosheev.wtf",cat:"news",ci:50.8,subs:7583,postViews:2200},{url:"t.me/abainewskz",name:"ABAI NEWS",cat:"news",ci:48.3,subs:13870,postViews:2400},{url:"t.me/CentralMedia24kz",name:"Central Media24.kz",cat:"news",ci:45.4,subs:33074,postViews:11200},{url:"t.me/kazakh_inform",name:"KAZAKH_INFORM",cat:"news",ci:43.5,subs:42403,postViews:3400},{url:"t.me/adilet_partiyasy",name:"«Әділет» партиясы",cat:"politics",ci:42.9,subs:48518,postViews:4700},{url:"t.me/diapazonnews",name:"Диапазон - новости Актобе",cat:"news",ci:42.2,subs:6339,postViews:809},{url:"t.me/knbgov_kz",name:"ҚР ҰҚК / КНБ РК",cat:"news",ci:42,subs:5736,postViews:1600},{url:"t.me/diplomat_zhk",name:"ЖК Дипломат",cat:"politics",ci:41.8,subs:1778,postViews:216},{url:"t.me/almatynews_kaz",name:"Almaty News",cat:"news",ci:40.6,subs:5802,postViews:797},{url:"t.me/qara_aqqu",name:"Чёрный лебедь, рак и щука",cat:"news",ci:39.1,subs:7014,postViews:1300},{url:"t.me/ZhanaAdamdarNews",name:"Жаңа адамдар",cat:"politics",ci:38.4,subs:1568,postViews:198},{url:"t.me/digitalbussinesskz",name:"DigitalBusiness.kz",cat:"news",ci:37.9,subs:10809,postViews:1500},{url:"t.me/politprosvet_kz",name:"Политпросвет.kz",cat:"politics",ci:35.1,subs:6231,postViews:714},{url:"t.me/socioexpert_01",name:"SocioExpert",cat:"politics",ci:33.9,subs:2031,postViews:297},{url:"t.me/privetkzhstn",name:"Тура Айту",cat:"politics",ci:32.8,subs:75524,postViews:15600},{url:"t.me/politus2022",name:"Политес.КЗ",cat:"politics",ci:32.7,subs:1042,postViews:144},{url:"t.me/der_kzlg",name:"kzlg",cat:"politics",ci:32.3,subs:1967,postViews:2100},{url:"t.me/khudaibergenkz",name:"OK Channel",cat:"politics",ci:32.3,subs:3628,postViews:1200},{url:"t.me/kazgoodgovernance",name:"Сабина Садиева",cat:"politics",ci:28.1,subs:2208,postViews:997},{url:"t.me/baktygaliyev",name:"BAKTYGALIYEV BLOG",cat:"politics",ci:27.9,subs:1252,postViews:398},{url:"t.me/informatorKZ",name:"ИНФОРМАТОР KZ",cat:"politics",ci:26.8,subs:13412,postViews:8300},{url:"t.me/shezire",name:"Всемирное шежіре",cat:"politics",ci:24.3,subs:17667,postViews:1700},{url:"t.me/ongar_online",name:"Ongar_online",cat:"politics",ci:23.5,subs:4994,postViews:1700},{url:"t.me/adil_sf",name:"Адиль Сейфуллин | политолог",cat:"politics",ci:22.8,subs:1964,postViews:1300},{url:"t.me/myviewkz",name:"Взгляд KZ",cat:"politics",ci:21.8,subs:13310,postViews:3500},{url:"t.me/nightingale_int",name:"Nightingale Int.",cat:"politics",ci:21.4,subs:1201,postViews:306},{url:"t.me/ZhangazinovaN",name:"Nazym Zhangazy Channel",cat:"politics",ci:21.3,subs:1256,postViews:503},{url:"t.me/electionelection",name:"ЦИК РК",cat:"politics",ci:19.8,subs:7993,postViews:2100},{url:"t.me/Danilov_line",name:"Линия Данилова",cat:"politics",ci:18.9,subs:1061,postViews:125},{url:"t.me/kisi_kz",name:"КИСИ inform",cat:"politics",ci:16.6,subs:1253,postViews:100},{url:"t.me/aidossarym",name:"Сарымсақ",cat:"politics",ci:16.1,subs:1372,postViews:180},{url:"t.me/bolottemirov",name:"Болот Темиров",cat:"politics",ci:16.1,subs:4169,postViews:2500},{url:"t.me/scientiapotentiaest_kz",name:"Aubekerov. Realpolitik",cat:"politics",ci:12.1,subs:3031,postViews:545},{url:"t.me/essizdick",name:"Essizdik is the New Black!",cat:"politics",ci:7.4,subs:1172,postViews:396},{url:"t.me/qazpresskz",name:"Qazpress.kz",cat:"politics",ci:.9,subs:3547,postViews:217},{url:"t.me/tbk_kz",name:"ТГБ_KZ",cat:"politics",ci:.5,subs:3219,postViews:344},{url:"t.me/saualnama1",name:"SARAP",cat:"politics",ci:0,subs:2065,postViews:55}],Up=[{url:"t.me/kommersant",name:"Коммерсантъ",subs:296e3,postViews:13e3,kzShare:.005},{url:"t.me/mk_ru",name:"Московский комсомолец",subs:62100,postViews:1560,kzShare:.023},{url:"t.me/svpressaru",name:"Свободная пресса",subs:14200,postViews:160,kzShare:.02},{url:"t.me/channelone_official",name:"Первый канал",subs:27400,postViews:546,kzShare:.02}]});function _r(e){let t=String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/+$/,""),n=t.match(/^(?:t\.me\/(?:s\/)?|@)([a-z0-9_]+)/);return n?"t.me/"+n[1]:(t=t.split("/")[0],t)}function Nc(e,t={}){let n=_r(e);if(n.startsWith("t.me/")){let d=n.slice(5),p=t.tgManual&&t.tgManual[d],f=!Gp[d]&&Tw.get(d),u=p||t.tg&&t.tg[d]||Gp[d]||f;return!u||!u.subs?null:{key:n,kind:"telegram",subs:u.subs,postViews:u.postViews||null,kzShare:Number.isFinite(u.kzShare)?u.kzShare:null,src:p?"вписано вручную":t.tg&&t.tg[d]?"Телеграм, обновлено "+(u.at||""):u===f?(f.kzShare!=null?"Телеграм, замер ":"TGStat, рейтинг ")+qp:"Телеграм, справочник "+Cc}}let r=n,s=0,o=i(d=>{if(t.manual&&t.manual[d])return t.manual[d];let p=ea[d],f=t.sites&&t.sites[d];if(!f||p&&p.same)return p;let u={...p||{},...f};return p&&Number.isFinite(p.kzShare)&&!Number.isFinite(f.kzShare)&&(u.kzShare=p.kzShare),Number.isFinite(f.kzM)&&!Number.isFinite(f.allM)&&(u.allM=Number.isFinite(u.kzShare)&&u.kzShare>0?Math.round(f.kzM/u.kzShare):void 0),Number.isFinite(f.allM)&&!Number.isFinite(f.kzM)&&delete u.kzM,u},"pick"),a=o(r);for(;a&&a.same&&s++<3;)r=a.same,a=o(r);if(a&&!Number.isFinite(a.kzM)&&Number.isFinite(a.allM)){let d=Number.isFinite(a.kzShare)?a.kzShare:/\.kz$/.test(r)?.9:.02;a={...a,kzShare:d,kzM:Math.round(a.allM*d)}}if(!a||!Number.isFinite(a.kzM))return null;let c=!!(t.manual&&t.manual[r]),l=!c&&!!(t.sites&&t.sites[r]);return{key:r,kind:"site",kzM:a.kzM,allM:Number.isFinite(a.allM)?a.allM:null,kzShare:Number.isFinite(a.kzShare)?a.kzShare:null,src:c?"вписано вручную":(a.src||"")+(l?", обновлено "+(a.at||""):", справочник "+Cc)}}function Mw(e){let t=new Date(e);return isNaN(t.getTime())?"":t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}function Us(e,t){let n=1;for(let r of e)n*=1-Math.min(Math.max(r,0),t)/t;return t*(1-n)}function Yr(e,t={}){let n={...Rc,...t.params||{}},r=t.extra||{},s=Math.pow(30,n.beta),o=new Map;for(let h of e||[]){if(!h||!h.source)continue;let m=Nc(h.source,r),w=m?m.key:_r(h.source),g=o.get(w)||{key:w,a:m,days:new Set,items:0,names:new Set};g.items++,g.names.add(String(h.source));let b=Mw(h.date);b&&g.days.add(b),o.set(w,g)}let a=[],c=[];for(let h of o.values()){let m=Math.max(1,h.days.size),w=Math.pow(m,n.beta);if(!h.a){c.push({source:h.key,items:h.items});continue}let g=h.a,b,x,k,y,v,L;if(g.kind==="telegram"){let A=g.kzShare!=null?g.kzShare:n.tgKzShare;b=g.subs*A,x=g.subs*(1-A);let T=g.postViews?Math.min(g.postViews*w,g.subs):null;y=v=L=T!=null?T*A:b*n.readMid,T==null&&(v=b*n.readLo,L=b*n.readHi),k=y}else{let A=g.kzM*Math.max(1,Math.pow(m/30,n.beta));b=Math.min(g.kzM/s*w,A)/n.devices;let T=g.allM!=null?g.allM:g.kzShare?g.kzM/g.kzShare:g.kzM,R=T*Math.max(1,Math.pow(m/30,n.beta));x=Math.max(0,Math.min(T/s*w,R)/n.devices-b),y=b*n.readMid,v=b*n.readLo,L=b*n.readHi}a.push({source:h.key,kind:g.kind,items:h.items,days:m,kz:Math.round(b),abroad:Math.round(x),read:Math.round(y),readLo:Math.round(v),readHi:Math.round(L),src:g.src,measuredRead:g.kind==="telegram"&&!!g.postViews})}a.sort((h,m)=>m.kz-h.kz||h.source.localeCompare(m.source)),c.sort((h,m)=>m.items-h.items||h.source.localeCompare(m.source));let l=n.poolShare*n.kzInternet,d=i(h=>a.reduce((m,w)=>m+w[h],0),"sum"),p=i(h=>Math.round(h),"r"),f=a.reduce((h,m)=>h+m.items,0),u=f+c.reduce((h,m)=>h+m.items,0);return{kz:{unique:p(Us(a.map(h=>h.kz),l)),contacts:p(d("kz")),read:p(Us(a.map(h=>h.read),l)),readLo:p(Us(a.map(h=>h.readLo),l)),readHi:p(Us(a.map(h=>h.readHi),l))},abroad:{unique:p(Us(a.map(h=>h.abroad),n.abroadPool)),contacts:p(d("abroad"))},pool:p(l),sources:a,unknown:c,covered:{items:f,total:u,sources:a.length,unknownSources:c.length},params:n,at:Cc}}function Aw(e){if(!Number.isFinite(e)||e<=0)return 0;if(e<100)return Math.round(e);let t=Math.pow(10,Math.floor(Math.log10(e))-1);return Math.round(e/t)*t}function or(e){let t=Aw(e);return t>=1e6?(t/1e6).toLocaleString("ru-RU",{maximumFractionDigits:1})+" млн":t>=1e3?Math.round(t/1e3)+" тыс.":String(t)}function Kp(e){if(!e||!e.covered||!e.covered.items)return[];let t=[];return t.push("ОХВАТ АУДИТОРИИ (оценка)"),t.push("Могли увидеть в Казахстане: около "+or(e.kz.unique)+" человек (без повторов между изданиями)"),t.push("Вероятно прочитали в Казахстане: около "+or(e.kz.read)+" (от "+or(e.kz.readLo)+" до "+or(e.kz.readHi)+")"),e.abroad.unique&&t.push("Могли увидеть за рубежом: около "+or(e.abroad.unique)),e.covered.items<e.covered.total&&t.push("Посчитано материалов: "+e.covered.items+" из "+e.covered.total+" — у остальных источников аудитория неизвестна, в оценку они не вошли"),t.push("Методика: аудитория изданий из открытых счётчиков (LiveInternet, zero.kz) и медиакитов за дни публикаций; повторы между изданиями убраны; итог не превышает числа жителей Казахстана, читающих новости в интернете."),t}function Ec(e){let t={},n={},r=[];for(let s of String(e||"").split(`
`)){let o=s.trim();if(!o||o.startsWith("#"))continue;let a=o.split(/\s+/),c=a.shift(),l=a.filter(Boolean),d=1,p=null,f=l.findIndex(g=>/^(млн|тыс|k|m)\.?$/i.test(g));if(f>=0){let g=l[f].toLowerCase();d=/^(млн|m)/.test(g)?1e6:1e3,l.splice(f,1)}let u=l[l.length-1]||"";(/^\d{1,3}(?:[.,]\d+)?%$/.test(u)||l.length===2&&l[0].replace(/[.,]/g,"").length>3&&/^\d{1,3}(?:[.,]\d+)?$/.test(u)&&parseFloat(u)<=100)&&(p=parseFloat(u.replace(",","."))/100,l.pop());let h=l.join("");if(!c||!/^\d+(?:[.,]\d+)?$/.test(h)){r.push(o);continue}let m=Math.round(parseFloat(h.replace(",","."))*d);if(!Number.isFinite(m)||m<=0||p!=null&&!(p>0&&p<=1)){r.push(o);continue}let w=_r(c);w.startsWith("t.me/")?n[w.slice(5)]={subs:m,kzShare:p}:t[w]={kzM:m,kzShare:p??void 0,allM:p?Math.round(m/p):void 0,src:"вписано вручную"}}return{manual:t,tgManual:n,bad:r}}var Rc,Cc,ea,Tw,Gp,Vs=ee(()=>{Vp();Rc=Object.freeze({beta:.87,devices:1.4,poolShare:.75,kzInternet:197e5,abroadPool:1e8,readLo:.015,readMid:.035,readHi:.07,tgKzShare:.9}),Cc="2026-11-21",ea={"24.kz":{kzM:488054,allM:610068,kzShare:.8,src:"LiveInternet, рейтинг Казахстана"},"365info.kz":{kzM:81892,allM:95668,kzShare:.856,src:"LiveInternet, открытая статистика"},"adyrna.kz":{kzM:16367,allM:18186,kzShare:.9,src:"zero.kz"},"aif.ru":{kzM:156669,allM:13055765,kzShare:.012,src:"LiveInternet, открытая статистика"},"aikyn.kz":{kzM:119296,allM:132551,kzShare:.9,src:"zero.kz"},"almaty.tv":{kzM:241183,allM:401972,kzShare:.6,src:"LiveInternet, рейтинг Казахстана"},"arasha.kz":{kzM:181698,allM:199668,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"astanatv.kz":{kzM:618297,allM:782654,kzShare:.79,src:"LiveInternet, рейтинг Казахстана"},"baq.kz":{kzM:323304,allM:371614,kzShare:.87,src:"LiveInternet, рейтинг Казахстана"},"bes.media":{kzM:1164903,allM:1456129,kzShare:.8,src:"LiveInternet, рейтинг Казахстана"},"bfm.ru":{kzM:48983,allM:2449169,kzShare:.02,src:"LiveInternet, рейтинг России"},"business-gazeta.ru":{kzM:65901,allM:1882888,kzShare:.035,src:"LiveInternet, открытая статистика"},"dalanews.kz":{kzM:244389,allM:262784,kzShare:.93,src:"LiveInternet, рейтинг Казахстана"},"democrat.kz":{kzM:63728,allM:67796,kzShare:.94,src:"LiveInternet, рейтинг Казахстана"},"egemen.kz":{kzM:122608,allM:133270,kzShare:.92,src:"LiveInternet, рейтинг Казахстана"},"elordainfo.kz":{kzM:27586,allM:32454,kzShare:.85,src:"LiveInternet, рейтинг Казахстана"},"exclusive.kz":{kzM:110948,allM:138685,kzShare:.8,src:"LiveInternet, рейтинг Казахстана"},"inbusiness.kz":{kzM:997004,allM:1365759,kzShare:.73,src:"LiveInternet, рейтинг Казахстана"},"inform.kz":{kzM:1638261,allM:2374291,kzShare:.69,src:"LiveInternet, рейтинг Казахстана"},"informburo.kz":{kzM:793199,allM:933175,kzShare:.85,src:"LiveInternet, рейтинг Казахстана"},"kapital.kz":{kzM:301724,allM:350842,kzShare:.86,src:"LiveInternet, рейтинг Казахстана"},"kaz.tengrinews.kz":{same:"tengrinews.kz",src:"общий счётчик с tengrinews.kz"},"kaztag.kz":{kzM:317079,allM:356269,kzShare:.89,src:"LiveInternet, рейтинг Казахстана"},"khabar.kz":{kzM:156292,allM:171749,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"kommersant.ru":{kzM:53570,allM:10714061,kzShare:.005,src:"LiveInternet, открытая статистика"},"kp.ru":{kzM:549633,allM:27481672,kzShare:.02,src:"LiveInternet, рейтинг России"},"kstnews.kz":{kzM:56749,allM:63054,kzShare:.9,src:"zero.kz"},"ktk.kz":{kzM:45043,allM:50048,kzShare:.9,src:"zero.kz"},"kz.kursiv.media":{kzM:1441731,allM:2443612,kzShare:.59,src:"LiveInternet, рейтинг Казахстана"},"lada.kz":{kzM:638820,allM:734276,kzShare:.87,src:"LiveInternet, рейтинг Казахстана"},"lenta.ru":{kzM:460396,allM:23019800,kzShare:.02,src:"LiveInternet, рейтинг России"},"life.ru":{kzM:86914,allM:4345719,kzShare:.02,src:"LiveInternet, рейтинг России"},"liter.kz":{kzM:260234,allM:351668,kzShare:.74,src:"LiveInternet, рейтинг Казахстана"},"malim.kz":{kzM:252160,allM:274087,kzShare:.92,src:"LiveInternet, рейтинг Казахстана"},"mgorod.kz":{kzM:237294,allM:300372,kzShare:.79,src:"LiveInternet, рейтинг Казахстана"},"mk.ru":{kzM:280726,allM:12205487,kzShare:.023,src:"LiveInternet, открытая статистика"},"news.ru":{kzM:136225,allM:6811232,kzShare:.02,src:"LiveInternet, рейтинг России"},"newtimes.kz":{kzM:891245,allM:979390,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"ntv.ru":{kzM:206929,allM:9853748,kzShare:.021,src:"LiveInternet, открытая статистика"},"nur.kz":{kzM:5881396,allM:6534885,kzShare:.9,src:"оценка: рейтинг просмотров 2024 (Tengrinews, Казинформ, Informburo как мерка)"},"ozgeris.info":{kzM:291556,allM:300573,kzShare:.97,src:"LiveInternet, рейтинг Казахстана"},"politico.kz":{kzM:141725,allM:155742,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"press.kz":{kzM:3640,allM:5871,kzShare:.62,src:"LiveInternet, рейтинг Казахстана"},"qaz-media.kz":{kzM:19358,allM:22509,kzShare:.86,src:"LiveInternet, рейтинг Казахстана"},"qazaqtoday.info":{kzM:479588,allM:504829,kzShare:.95,src:"LiveInternet, рейтинг Казахстана"},"sn.kz":{kzM:1033761,allM:1188231,kzShare:.87,src:"LiveInternet, рейтинг Казахстана"},"svpressa.ru":{kzM:33589,allM:1679447,kzShare:.02,src:"LiveInternet, открытая статистика"},"tengrinews.kz":{kzM:7619967,allM:9180683,kzShare:.83,src:"LiveInternet, рейтинг Казахстана"},"turkystan.kz":{kzM:53458,allM:58107,kzShare:.92,src:"LiveInternet, рейтинг Казахстана"},"ult.kz":{kzM:226511,allM:243560,kzShare:.93,src:"LiveInternet, рейтинг Казахстана"},"ulysmedia.kz":{kzM:1144930,allM:1506487,kzShare:.76,src:"LiveInternet, рейтинг Казахстана"},"uralskweek.kz":{kzM:193046,allM:214496,kzShare:.9,src:"LiveInternet, рейтинг Казахстана"},"vechastana.kz":{kzM:20728,allM:23290,kzShare:.89,src:"LiveInternet, рейтинг Казахстана"},"vedomosti.ru":{kzM:175803,allM:8790129,kzShare:.02,src:"LiveInternet, рейтинг России"},"vesti.ru":{kzM:83156,allM:4157780,kzShare:.02,src:"LiveInternet, рейтинг России"},"zakon.kz":{kzM:4567731,allM:5075257,kzShare:.9,src:"оценка: рейтинг просмотров 2024 (Tengrinews, Казинформ, Informburo как мерка)"}};ea["ria.ru"]={kzM:Math.round(1169800*19.2*.016),allM:Math.round(1169800*19.2),kzShare:.016,src:"LiveInternet: суточная аудитория, месяц пересчитан"};ea["rus.baq.kz"]={same:"baq.kz",src:"общий счётчик с baq.kz"};ea["kaz.zakon.kz"]={same:"zakon.kz",src:"тот же сайт, другая языковая версия"};Tw=new Map([...Bp,...Up].map(e=>[e.url.replace(/^t\.me\//,"").toLowerCase(),e])),Gp={ktknews:{subs:11700,postViews:390},kaztag_tg:{subs:12e4,postViews:5135},dknews_kz:{subs:7380,postViews:3795},tass_agency:{subs:57e4,postViews:9465,kzShare:.02},negemedia:{subs:5250,postViews:716},syrymitkulov:{subs:41100,postViews:3970},qumash_kz:{subs:122e3,postViews:13e3},myastanacity:{subs:19300,postViews:2470},azattyqasia:{subs:12900,postViews:1470},azattyq_ruhy:{subs:1840,postViews:86},zanamiviehali:{subs:63700,postViews:7765},prokadrykz:{subs:80900,postViews:13500},bessimptomno:{subs:21300,postViews:843},ztb_qazaq:{subs:13600,postViews:906},ztb_qaz:{subs:172e3,postViews:13600},egovpress:{subs:67200,postViews:7815},nehabar:{subs:68600,postViews:4780},kozachkow:{subs:123e3,postViews:39350},gaziz1984:{subs:9970,postViews:3845},adyrnaportal:{subs:14400,postViews:866},yedilov_online:{subs:88200,postViews:26750},basekz:{subs:47500,postViews:9530},chinovnik_kz:{subs:31800,postViews:7920},respublikakzmedianews:{subs:16600,postViews:2060},dashimbayev:{subs:11700,postViews:2240},krivosheyevd:{subs:7590,postViews:2065},nkorganbekova:{subs:4880,postViews:1250}};i(_r,"sourceKey");i(Nc,"audienceOf");i(Mw,"dayOf");i(Us,"dedup");i(Yr,"estimateReach");i(Aw,"roundReach");i(or,"fmtReach");i(Kp,"reachLines");i(Ec,"parseManual")});function zw(e,t={},n={}){let r={...Rc,...n},s=Nc(e.source,t);if(!s)return null;if(s.kind==="telegram"){let a=s.kzShare!=null?s.kzShare:r.tgKzShare;return Math.round((s.postViews?Math.min(s.postViews,s.subs):s.subs*r.readMid)*a)}let o=s.kzM/Math.pow(30,r.beta)/r.devices;return Math.round(e.match==="body"?o*r.readMid:o)}function _p(e,{extra:t={},params:n={},top:r=10}={}){let s=(e||[]).filter(h=>h&&h.source&&h.rel!=="-"),o=new Map,a={pos:0,neu:0,neg:0,none:0},c=0,l=0,d=0,p=0,f=0,u=[];for(let h of s){let m=zw(h,t,n);if(m==null)continue;p++,c+=m,h.match==="body"?d+=m:l+=m;let w=h.sent==="+"?"pos":h.sent==="-"?"neg":h.sent==="0"?"neu":"none";a[w]+=m,w!=="none"&&f++;let g=String(h.source),b=o.get(g)||{source:g,items:0,index:0};b.items++,b.index+=m,o.set(g,b),u.push({w:m,it:h})}return u.sort((h,m)=>m.w-h.w),{total:c,title:l,body:d,tone:a,counted:p,of:s.length,bySource:[...o.values()].sort((h,m)=>m.index-h.index),top:u.slice(0,r).map(({w:h,it:m})=>({weight:h,title:m.title||"",url:m.url||"",source:m.source,date:m.date,match:m.match||"",sent:m.sent||""})),toneScored:a.pos+a.neu+a.neg,toneItems:f}}function Yp(e,{extra:t={},params:n={},maxDays:r=120}={}){let s=(e||[]).filter(l=>l&&l.source&&l.rel!=="-"&&ta(l.date)),o=[...new Set(s.map(l=>ta(l.date)))].sort().slice(-r);if(!o.length)return[];let a=o[0],c=[];for(let l of o){let d=s.filter(h=>{let m=ta(h.date);return m>=a&&m<=l}),p=Yr(d,{extra:t,params:n}),f=d.filter(h=>h.sent==="-"),u=f.length?Yr(f,{extra:t,params:n}):null;c.push({day:l,items:s.filter(h=>ta(h.date)===l).length,unique:p.kz.unique,read:p.kz.read,neg:u?u.kz.unique:0})}return c}function Jp(e,{extra:t={},params:n={}}={}){let r=(e||[]).filter(o=>o&&o.source&&o.rel!=="-"),s=i(o=>{let a=r.filter(c=>c.sent===o);return a.length?Yr(a,{extra:t,params:n}).kz.unique:0},"f");return{pos:s("+"),neu:s("0"),neg:s("-"),scored:r.filter(o=>o.sent).length,of:r.length}}function Xp({index:e,days:t,tone:n},r){let s=[];if(!e||!e.counted)return s;if(s.push("Медиаиндекс: около "+r(e.total)+" контактов с упоминанием"+(e.total?" (в заголовках — "+Math.round(100*e.title/e.total)+"%)":"")+". Заголовок у крупного издания весит больше, чем строка в тексте у районного."),e.toneScored){let o=e.toneItems!=null&&e.toneItems<e.counted?" — из "+e.toneItems+" размеченных по тону материалов (всего посчитано "+e.counted+")":"";s.push("Негатив: "+Math.round(100*e.tone.neg/e.toneScored)+"% медиаиндекса (по весу материалов, а не по их числу)"+o+(n&&n.neg?"; его могли увидеть около "+r(n.neg)+" человек в Казахстане":"")+".")}if(t&&t.length>1){let o=null;t.forEach((a,c)=>{let l=a.unique-(c?t[c-1].unique:0);(!o||l>o.inc)&&(o={day:a.day,inc:l})}),o&&o.inc>0&&s.push("Больше всего охват прибавил "+o.day+": +"+r(o.inc)+" человек.")}return s}var Wp,ta,$c=ee(()=>{Vs();Wp=i(e=>String(e).padStart(2,"0"),"pad"),ta=i(e=>{let t=new Date(e);return isNaN(t)?"":t.getFullYear()+"-"+Wp(t.getMonth()+1)+"-"+Wp(t.getDate())},"localYmd");i(zw,"itemWeight");i(_p,"mediaIndex");i(Yp,"reachByDays");i(Jp,"reachByTone");i(Xp,"mediaLines")});function ra(e){if(Qp.has(e))return Qp.get(e);for(let[t,n]of Iw)if(e.startsWith(t))return n;return e.slice(0,Dw)}function Fw(e,t=new Set){let n=new Set;for(let r of Xr(e).match(/[\p{L}\p{N}]+/gu)||[]){if(r.length<3&&!/^(укк|кнб|оон|снг|буу|тмд|сша|акш)$/.test(r)||na.has(r)||/^\d+$/.test(r))continue;let s=ra(r);t.has(s)||n.add(s)}return n}function Hw(e,t=new Set){let n=new Set,r=/[\p{L}\p{N}]+/gu,s,o="",a=String(e||"");for(;s=r.exec(a);){let c=s[0],l=a.slice(0,s.index),d=!o||/[:.!?«"“„(—–]\s*$/.test(l)||/^\s*$/.test(l);if(o=c,d||c.length<2)continue;let p=c[0]!==c[0].toLowerCase(),f=c.length>=2&&c===c.toUpperCase()&&new RegExp("\\p{L}","u").test(c);if(!p&&!f)continue;let u=ra(Xr(c));!t.has(u)&&!na.has(Xr(c))&&n.add(u)}return n}function qw(e){return new Set((Xr(e).match(/[\p{L}\p{N}]+/gu)||[]).filter(t=>t.length>=3).map(ra))}function Bw(e,{keyword:t="",maxItems:n=3e3}={}){let r=(e||[]).filter(k=>k&&k.title&&k.date&&k.rel!=="-"&&!isNaN(new Date(k.date))).sort((k,y)=>new Date(k.date)-new Date(y.date)).slice(-n),s=qw(t),o=r.map(k=>Fw(k.title,s)),a=new Map;for(let k of o)for(let y of k)a.set(y,(a.get(y)||0)+1);let c=r.map(()=>new Set);if(s.size){let k=new Map;for(let y of r){let v=String(y.title).match(/[\p{L}\p{N}]+/gu)||[],L=v.map(R=>ra(Xr(R))),A=new Set,T=r.indexOf(y);L.forEach((R,F)=>{if(s.has(R))for(let D=F-1;D>=Math.max(0,F-2);D--){let z=v[D];if(!z||z[0]===z[0].toLowerCase()||s.has(L[D]))break;o[T].delete(L[D]),c[T].add(L[D])}}),L.forEach((R,F)=>{if(s.has(R))for(let D of L.slice(Math.max(0,F-2),F))s.has(D)||A.add(D)});for(let R of A)k.set(R,(k.get(R)||0)+1)}for(let[y,v]of k)if(v>=2&&v>=Pw*(a.get(y)||v)){for(let L of o)L.delete(y);a.delete(y),s.add(y)}}let l=r.map((k,y)=>{let v=Hw(k.title,s);for(let L of c[y])v.delete(L);for(let L of[...v])!a.has(L)&&!o[y].has(L)&&v.delete(L);return v}),d=Math.max(r.length,Ow),p=o.map(k=>new Map([...k].map(y=>[y,Math.log(1+d/a.get(y))]))),f=r.map(k=>+new Date(k.date)),u=i(k=>Math.sqrt([...k.values()].reduce((y,v)=>y+v*v,0))||1,"len"),h=i((k,y)=>{let v=0;for(let[L,A]of k){let T=y.get(L);T&&(v+=A*T)}return v/(u(k)*u(y))},"cos"),m=[],w=[],g=i(k=>{m.push({first:f[k],last:f[k],nm:new Set(l[k]),v:new Map(p[k]),n:new Map([...p[k].keys()].map(y=>[y,1])),m:[k],solo:o[k].size<Pc}),w[k]=m.length-1},"open");r.forEach((k,y)=>{if(o[y].size<Pc)return g(y);let v=0;for(let R of p[y].values())v+=R;let L=-1,A=0;for(let R=m.length-1;R>=0;R--){let F=m[R];if(F.solo||f[y]-F.last>Cw*36e5||th(l[y],F.nm))continue;let D=h(p[y],F.v),z=0,B=0;for(let[$,Q]of p[y])(F.n.get($)||0)>=Math.max(1,Rw*F.m.length)&&(z+=Q,B++);B>=Pc&&z/v>=Nw&&(D=Math.max(D,Zp)),D>A&&(A=D,L=R)}if(L<0||A<Zp)return g(y);let T=m[L];for(let[R,F]of p[y])T.v.set(R,(T.v.get(R)||0)+F),T.n.set(R,(T.n.get(R)||0)+1);for(let R of l[y])T.nm.add(R);T.last=Math.max(T.last,f[y]),T.m.push(y),w[y]=L});for(let k=!0;k;){k=!1;for(let y=0;y<m.length&&!k;y++){let v=m[y];if(!(!v||v.solo))for(let L=y+1;L<m.length;L++){let A=m[L];if(!(!A||A.solo||Math.abs(v.first-A.first)>$w*36e5)&&!(th(v.nm,A.nm)||h(v.v,A.v)<Ew)){for(let T of A.nm)v.nm.add(T);for(let[T,R]of A.v)v.v.set(T,(v.v.get(T)||0)+R);for(let[T,R]of A.n)v.n.set(T,(v.n.get(T)||0)+R);v.m.push(...A.m),v.first=Math.min(v.first,A.first),v.last=Math.max(v.last,A.last),A.m.forEach(T=>{w[T]=y}),m[L]=null,k=!0}}}}let b=new Map;r.forEach((k,y)=>{let v=w[y];b.has(v)||b.set(v,[]),b.get(v).push(k)});let x=[];for(let k of b.values()){let v=k.filter(T=>jc(T.date))[0]||k[0],L=k.find(T=>!jc(T.date)&&Oc(T.date)<Oc(v.date));L&&(v=L);let A=[...new Set(k.map(T=>Ic(T.source)))];k.sort((T,R)=>new Date(T.date)-new Date(R.date)),x.push({title:v.title,first:{source:v.source,date:v.date,url:v.url||"",title:v.title},items:k.map(T=>({source:T.source,date:T.date,url:T.url||"",title:T.title})),count:k.length,sources:A.length,pickedUp:A.filter(T=>T!==Ic(v.source)).length,from:v.date,to:k[k.length-1].date})}return x.sort((k,y)=>y.sources-k.sources||y.count-k.count||new Date(y.from)-new Date(k.from)),x}function Uw(e){let t=new Map;for(let n of e){if(n.sources<2)continue;let r=Ic(n.first.source),s=t.get(r)||{source:r,first:0,pickedUpBy:0};s.first++,s.pickedUpBy+=n.pickedUp,t.set(r,s)}return[...t.values()].sort((n,r)=>r.first-n.first||r.pickedUpBy-n.pickedUpBy)}function rh(e,{keyword:t="",top:n=15,perStory:r=12}={}){let s=Bw(e,{keyword:t}),o=s.filter(a=>a.sources>=2);return{items:s.reduce((a,c)=>a+c.count,0),stories:s.length,spread:o.length,top:o.slice(0,n).map(a=>({...a,items:a.items.slice(0,r),more:Math.max(0,a.items.length-r)})),firstMovers:Uw(s).slice(0,10)}}function sh(e,{top:t=5}={}){let n=[];if(!e||!e.items)return n;n.push("СЮЖЕТЫ (по совпадению заголовков, без ИИ)"),n.push("Материалов "+e.items+" — это около "+e.stories+" отдельных сюжетов; "+e.spread+" из них подхватили два издания и больше."),e.top.slice(0,t).forEach((s,o)=>n.push(o+1+". «"+s.first.title+"» — "+s.sources+" изд., "+s.count+" мат.; первым "+s.first.source+(jc(s.first.date)?" в "+Vw(s.first.date):", "+Oc(s.first.date))));let r=e.firstMovers.slice(0,3).filter(s=>s.first>=2);return r.length&&n.push("Чаще других писали первыми: "+r.map(s=>s.source+" ("+s.first+")").join(", ")+"."),n}var na,Dw,Pc,Cw,Zp,Rw,Nw,Ew,$w,Pw,Ow,jw,Xr,nh,Qp,Iw,eh,th,Jr,Oc,jc,Ic,Vw,Fc=ee(()=>{na=new Set("и в во на с со по о об обо за из к ко для не ни что как это же у от до при про над под без а но или ли бы то так уже ещё еще его ее её их им ним она они он мы вы я все всё весь был была были будет мен және бен пен үшін да де та те туралы деп бұл осы сол ол олар біз сіз бойынша кезінде жылы the a an of to in on for and or with at by from as is are was be ряд дал дала дали заявил заявила рассказал рассказала назвал назвала сказал отметил отметила призвал сообщил считает может могут должен должны будут будет стало стал стала прокомментировал высказался айтты атады деді мәлімдеді ұсынды тапсырма береді керек қажет емес кто где когда почему зачем сколько толық қандай қалай неге кім не".split(/\s+/)),Dw=6,Pc=2,Cw=72,Zp=.4,Rw=.4,Nw=.6,Ew=.35,$w=12,Pw=.6,Ow=300,jw={ә:"а",ғ:"г",қ:"к",ң:"н",ө:"о",ұ:"у",ү:"у",һ:"х",і:"и",ё:"е",э:"е"},Xr=i(e=>String(e||"").toLowerCase().replace(/[әғқңөұүһіёэ]/g,t=>jw[t]),"norm");for(let e of[...na])na.add(Xr(e));nh=[["межд",["халыкаралык"],["междунар"]],["народ",["халык"],["народ"]],["нац",["улттык"],["национ"]],["статус",["мартебе"],["статус"]],["строй",["курылыс"],["строит","стройк"]],["госуд",["мемлекет"],["государ"]],["глава",["басшы"],["глава","главы","главе","руковод"]],["агро",["ауыл","шаруа","аграр","агро","дикан","диkан"],["сельск","села","село","агро","аграр","фермер","механизатор"]],["хоз",["шаруашылы"],["хозяйств"]],["поруч",["тапсыр"],["поруч"]],["иностр",["шетел"],["иностран","зарубеж"]],["прогр",["багдарлам"],["програм"]],["парл",["парламент","мажилис","сенат"],["парламент","мажилис","сенат"]],["совет",["кенес"],["совет"]],["служб",["кызмет"],["служб"]],["развит",["дамыт","даму"],["развит","развив"]],["коррупц",["жемкор","сыбайлас"],["корруп"]],["безоп",["кауипсиз"],["безопас"]],["закон",["=зан","занды","заннам","зансыз"],["закон"]],["наука",["гылым"],["наук","научн"]],["образ",["билим"],["образов"]],["юг",["онтустик"],["южн","юко","юку"]],["поздр",["куттыкта"],["поздрав"]],["встреч",["кездес"],["встреч","встрет"]],["принял",["кабылда"],["принял","приня","прием"]],["наград",["марапат","наград","орден","медал"],["наград","орден","медал"]],["указ",["жарлык"],["=указ","=указа","=указом","=указу","=указе"]],["правит",["укимет"],["правительств"]],["аким",["аким"],["аким"]],["цифр",["цифрлы"],["цифров"]],["искусств",["жасанды"],["искусствен"]],["профсоюз",["касиподак","профсоюз"],["профсоюз"]],["предприн",["касипкер"],["предприним","бизнес"]],["продов",["азык"],["продовол"]],["налог",["салык"],["налог"]],["кнб",["укк"],["кнб"]],["председ",["торага"],["председат","глава"]],["назнач",["тагайында"],["назнач"]],["освоб",["босатыл"],["освобож"]],["гражд",["азамат"],["граждан"]],["выборы",["сайлау"],["=выборы","=выборов","=выборах","=выборам","выборн"]],["курултай",["курылтай"],["курултай"]],["оон",["буу"],["оон"]],["снг",["тмд"],["снг"]],["узбек",["озбекстан"],["узбекистан","узбекск"]],["росс",["ресей"],["росси"]],["китай",["кытай"],["китай","кнр"]],["сша",["акш"],["сша","америк"]],["япон",["жапон"],["япони","японск"]],["турц",["туркия","турик"],["турци","турецк"]],["послан",["жолдау"],["послани"]],["экспорт",["экспорт"],["экспорт"]],["миллиард",["млрд","миллиард"],["млрд","миллиард"]],["иннов",["инновац"],["инновац"]],["решен",["шешим"],["решени","решил"]],["визит",["сапар"],["визит"]],["переговор",["келиссоз"],["переговор"]],["межпарл",["парламентарал"],["межпарламент"]],["снисх",["аяушылы","ракымшылы"],["снисхожд"]],["казна",["казына"],["=казна","=казну","=казны","=казне","госказн"]],["посяг",["ауыз салу","кол сугу","сугу"],["посяга"]],["партнер",["сериктес"],["партнер"]],["урожай",["астык","егин"],["урожа","зерн"]],["сми",["=бак"],["=сми","медиа"]],["интерес",["мудде"],["интерес"]],["инициат",["бастама"],["инициатив"]],["кредит",["несие","кредит"],["кредит"]],["банк",["банк"],["банк"]],["животн",["мал шаруа","малшаруа"],["животновод","скотовод"]],["мясо",[],["мяс"]],["пастб",["жайылым"],["пастбищ"]],["барьер",["кедерги"],["барьер"]],["вуз",["жогары оку"],["вуз"]],["центр",["орталык"],["централ","центр"]],["азия",["азия"],["азия","азии","азию","азиат"]],["реформ",["реформа"],["реформ"]],["союз",["одак"],["союз"]],["армия",["арми","карулы"],["арми","вооружен"]]],Qp=new Map(nh.flatMap(([e,t,n])=>[...t,...n].filter(r=>r[0]==="=").map(r=>[r.slice(1),"#"+e]))),Iw=nh.flatMap(([e,t,n])=>[...t,...n].filter(r=>r[0]!=="=").map(r=>[r,"#"+e])).sort((e,t)=>t[0].length-e[0].length);i(ra,"wordKey");i(Fw,"titleStems");i(Hw,"namedKeys");eh=i(e=>e[0]==="#"?e:e.slice(0,5),"nk"),th=i((e,t)=>{if(!e.size||!t.size)return!1;let n=new Set([...t].map(eh));for(let r of e)if(n.has(eh(r)))return!1;return!0},"disjointNames");i(qw,"queryStems");Jr=i(e=>String(e).padStart(2,"0"),"pad2"),Oc=i(e=>{let t=new Date(e);return t.getFullYear()+"-"+Jr(t.getMonth()+1)+"-"+Jr(t.getDate())},"dayKey"),jc=i(e=>{let t=new Date(e);return t.getHours()||t.getMinutes()||t.getSeconds()||t.getMilliseconds()},"hasTime"),Ic=i(e=>String(e||"").toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0],"hostOf");i(Bw,"buildStories");i(Uw,"firstMovers");i(rh,"storySummary");Vw=i(e=>{let t=new Date(e);return isNaN(t)?"":t.getFullYear()+"-"+Jr(t.getMonth()+1)+"-"+Jr(t.getDate())+" "+Jr(t.getHours())+":"+Jr(t.getMinutes())},"hhmm");i(sh,"storyLines")});async function Ww(e,t=2e4){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(e,{headers:{"user-agent":Gw,"accept-language":"ru"},signal:n.signal}),o=await s.text();return{ok:s.ok,status:s.status,text:o}}catch(s){return{ok:!1,err:String(s&&s.cause&&s.cause.code||s&&s.message||s)}}finally{clearTimeout(r)}}function oh(e){let t=String(e||"").trim().replace(/,/g,".").match(/^([\d.]+)\s*([KM])?$/i);return t?Math.round(parseFloat(t[1])*(t[2]?t[2].toUpperCase()==="K"?1e3:1e6:1)):null}function ah(e){let t={};for(let n of String(e||"").split(`
`)){let r=n.split("	");if(r.length<5||r[0]==="всего")continue;let s=+r[3],o=+r[4];!Number.isFinite(s)||s<=0||(t[r[0].toLowerCase()]={visitors:s,share:Number.isFinite(o)?o/100:null})}return t}function _w(e){let t=String(e||"").match(/counter_value">([\d.,]+[KM]?)<\/span>\s*<span class="counter_type">subscribers/i),n=[...String(e||"").matchAll(/tgme_widget_message_views">([\d.,]+[KM]?)</g)].map(s=>oh(s[1])).filter(Boolean).sort((s,o)=>s-o),r=n.length?n[n.length>>1]:null;return{subs:t?oh(t[1]):null,postViews:r}}async function ih({sites:e=[],telegram:t=[],fetchText:n=Ww,budgetMs:r=12e4,today:s}={}){let o=Date.now()+r,a=s||Kw(new Date),c=new Set(e.map(sa).filter(Boolean)),l={at:a,sites:{},tg:{},notes:[]},d=i(()=>o-Date.now(),"left"),p={};for(let f=1;f<=12&&d()>0;f++){let u=await n(`https://www.liveinternet.ru/rating/kz/month.tsv?page=${f}`);if(!u.ok){l.notes.push("рейтинг LiveInternet по Казахстану: "+(u.status?"HTTP "+u.status:u.err));break}let h=ah(u.text);if(!Object.keys(h).length)break;Object.assign(p,h)}for(let[f,u]of Object.entries(p)){let h=sa(f);!c.has(h)||l.sites[h]||u.visitors<3e3||(l.sites[h]={kzM:u.visitors,kzShare:u.share,allM:u.share?Math.round(u.visitors/u.share):null,src:"LiveInternet, рейтинг Казахстана",at:a})}if([...c].some(f=>!l.sites[f]&&/\.ru$/.test(f))){let f={};for(let u=1;u<=5&&d()>0;u++){let h=await n(`https://www.liveinternet.ru/rating/ru/media/month.tsv?page=${u}`);if(!h.ok){l.notes.push("рейтинг LiveInternet по России: "+(h.status?"HTTP "+h.status:h.err));break}let m=ah(h.text);if(!Object.keys(m).length)break;Object.assign(f,m)}for(let[u,h]of Object.entries(f)){let m=/\./.test(u)?sa(u):u+".ru";!c.has(m)||l.sites[m]||!h.share||h.visitors<3e3||(l.sites[m]={allM:Math.round(h.visitors/h.share),ruM:h.visitors,src:"LiveInternet, рейтинг России",at:a})}}if([...c].some(f=>!l.sites[f]&&/\.kz$/.test(f))&&d()>0){let f=i(m=>"https://api.zero.kz/v2.0/"+m.p+"/?data="+encodeURIComponent(JSON.stringify(m.d)),"q"),u=await n(f({p:"report",d:{report:"rating",subReport:"kz",period:604800,catId:11,limit:400,not0:"ratPlace"}})),h=[];try{h=JSON.parse(u.text||"[]")}catch{}if(u.ok&&h.length&&d()>0){let m=await n(f({p:"site",d:{siteIds:h.map(b=>b.siteId),limit:500}})),w=[];try{w=JSON.parse(m.text||"[]")}catch{}let g=new Map(w.map(b=>[b.id,sa(b.url)]));for(let b of h){let x=g.get(b.siteId);if(!x||!c.has(x)||l.sites[x]||b.clients<1e3)continue;let k=b.clients>2*b.hosts,y=k?b.hosts:b.clients;l.sites[x]={kzM:Math.round(y*Math.pow(30/7,.87)*.9),kzShare:.9,src:"zero.kz"+(k?" (взято число адресов: посетителей подозрительно много)":""),at:a}}}else l.notes.push("zero.kz: "+(u.status?"HTTP "+u.status:u.err||"пустой ответ"))}for(let f of t){if(d()<=0){l.notes.push("не успели обновить телеграм-каналы: кончился срок");break}let u=String(f).toLowerCase().replace(/^.*t\.me\/(s\/)?/,"").replace(/^@/,""),h=await n("https://t.me/s/"+u);if(!h.ok)continue;let m=_w(h.text);m.subs&&(l.tg[u]={subs:m.subs,postViews:m.postViews,at:a})}return l}var Gw,Kw,sa,ch=ee(()=>{Gw="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",Kw=i(e=>e.getFullYear()+"-"+String(e.getMonth()+1).padStart(2,"0")+"-"+String(e.getDate()).padStart(2,"0"),"localYmd");i(Ww,"plainFetchText");i(oh,"tgNum");i(ah,"parseLiRating");i(_w,"parseTgPage");sa=i(e=>String(e||"").toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0],"hostOf");i(ih,"refreshAudience")});function oa(){if(wt)return wt;try{wt=JSON.parse((0,Qr.readFileSync)(uh(),"utf8"))}catch{wt=null}return(!wt||typeof wt!="object")&&(wt={at:0,sites:{},tg:{},notes:[]}),wt.sites=wt.sites||{},wt.tg=wt.tg||{},wt.tried=wt.tried||{},wt}function Yw(){let e=uh(),t=e+".tmp";try{(0,Qr.writeFileSync)(t,JSON.stringify(wt)),(0,Qr.renameSync)(t,e)}catch{}}function ph(){let e=oa(),{manual:t,tgManual:n}=Ec(Ze().audienceManual||"");return{sites:e.sites,tg:e.tg,manual:t,tgManual:n}}function aa(){let e=oa(),t=Ec(Ze().audienceManual||"");return{at:e.at||null,notes:e.notes||[],sites:Object.keys(e.sites).length,channels:Object.keys(e.tg).length,manual:Ze().audienceManual||"",bad:t.bad,busy:!!Zr}}function hh(e){return No({audienceManual:String(e||"").slice(0,2e4)}),aa()}function Hc(e,t={}){if(Zr)return Zr;let n=[],r=[];for(let s of e||[]){let o=_r(s);o&&(o.startsWith("t.me/")?r.push(o):o.includes(".")&&n.push(o))}return Zr=(async()=>{try{let s=await ih({sites:[...new Set(n)],telegram:[...new Set(r)],fetchText:t.fetchText,budgetMs:t.budgetMs}),o=oa();Object.assign(o.sites,s.sites),Object.assign(o.tg,s.tg);for(let a of r)o.tried[a.slice(5)]=Date.now();return o.at=Date.now(),o.notes=s.notes,Yw(),{ok:!0,sites:Object.keys(s.sites).length,channels:Object.keys(s.tg).length,notes:s.notes}}catch(s){return{ok:!1,err:String(s&&s.message||s)}}finally{Zr=null}})(),Zr}function fh(e,t=Date.now()){let n=oa();return!n.at||t-n.at>lh?!0:(e||[]).some(r=>{let s=_r(r);if(!s.startsWith("t.me/"))return!1;let o=s.slice(5);return!n.tg[o]&&!(n.tried[o]&&t-n.tried[o]<lh)})}var Qr,dh,uh,lh,wt,Zr,qc=ee(()=>{Qr=require("node:fs"),dh=require("node:path");vt();Dt();ch();Vs();uh=i(()=>(0,dh.join)(process.env.MEDIACHROME_DATA||Te,"audience.json"),"FILE"),lh=7*864e5,wt=null,Zr=null;i(oa,"load");i(Yw,"save");i(ph,"audienceExtra");i(aa,"audienceInfo");i(hh,"setAudienceManual");i(Hc,"refreshAudienceNow");i(fh,"audienceStale")});function Ft(e){if(!e)return"";let t=new Date(e);if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p");return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function Jw(e){let t=new Date(e);return isNaN(t.getTime())?-1:t.getHours()}function Xw(e){let t=new Date(e);return isNaN(t.getTime())?-1:(t.getDay()+6)%7}function Zw(e){let t=String(e||""),n=t.match(/прогон занял\s+(\d+)\s+мин\s+(\d+)\s+с/),r=t.match(/прогон занял\s+(\d+)\s+с/),s=n?+n[1]*60+ +n[2]:r?+r[1]:null,o=t.match(/браузер[^:]*:\s+(\d+)\s+мин\s+(\d+)\s+с/),a=t.match(/браузер[^:]*:\s+(\d+)\s+с/),c=o?+o[1]*60+ +o[2]:a?+a[1]:null;return{total:s,browser:c}}function Qw(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function ia(e,t=15){return[...e.entries()].map(([n,r])=>({key:n,count:r})).sort((n,r)=>r.count-n.count||n.key.localeCompare(r.key)).slice(0,t)}function vn(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function ca(e,t={}){let n=We(e);if(!n)return[];let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Ft(new Date(Date.now()-(r-1)*864e5).toISOString()):null;return(n.items||[]).filter(o=>o&&o.title&&o.date&&(!s||Ft(o.date)>=s)).map(o=>({title:o.title,url:o.url,source:o.source,date:o.date,snippet:o.snippet||"",sent:o.sent||"",sentWhy:o.sentWhy||"",rel:o.rel||"",relWhy:o.relWhy||"",match:o.match||"",kind:vn(o.source),comments:Number.isFinite(o.comments)?o.comments:null}))}function la(e,t){let n=We(e);return n?/^\d{4}-\d{2}-\d{2}$/.test(String(t||""))?(n.items||[]).filter(r=>r&&r.date&&Ft(r.date)===t).sort((r,s)=>+new Date(s.date)-+new Date(r.date)).map(r=>({title:r.title||"",url:r.url||"",source:r.source||"",date:r.date,kind:vn(r.source),rel:r.rel||""})):[]:null}function In(e,t={}){let n=We(e);if(!n)return null;let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Ft(new Date(Date.now()-(r-1)*864e5).toISOString()):null,o=i(E=>!s||E&&E>=s,"inWindow"),a=(n.items||[]).filter(E=>E.date&&o(Ft(E.date))),c=new Map;for(let E of a){let Me=Ft(E.date);Me&&c.set(Me,(c.get(Me)||0)+1)}let l=[...c.keys()].sort(),d=s,p=l[l.length-1]||Ft(new Date().toISOString());d||(d=l[0]||p);let f=[];for(let E=+new Date(d+"T00:00:00");E<=+new Date(p+"T00:00:00");E+=864e5){let Me=Ft(new Date(E).toISOString());f.push({day:Me,count:c.get(Me)||0})}let u=new Map,h=new Map,m={site:0,telegram:0,youtube:0,facebook:0},w=0,g=0,b=0,x=0,k=0,y=Array.from({length:7},()=>Array(24).fill(0));for(let E of a){u.set(E.source,(u.get(E.source)||0)+1);let Me=String(E.channel||"неизв.").replace(/\*$/,"");h.set(Me,(h.get(Me)||0)+1),m[vn(E.source)]++,E.match==="title"?w++:E.match==="post"?b++:E.match==="body"?g++:E.match==="video"?x++:k++;let it=Jw(E.date),K=Xw(E.date);it>=0&&K>=0&&y[K][it]++}let v=i(E=>E.map(Me=>({...Me,kind:Qw(Me.key)})),"withKind"),L=v(ia(new Map([...u].filter(([E])=>vn(E)==="site")),10)),A=v(ia(new Map([...u].filter(([E])=>vn(E)!=="site")),10)),T=v(ia(u,20)),R=ia(h,12),F=a.slice(0,25).map(E=>({date:E.date,source:E.source,title:E.title,url:E.url,channel:E.channel,channels:E.channels,match:E.match,kind:vn(E.source)})),D=er(e),z=s?+new Date(s+"T00:00:00"):null,B=z?D.filter(E=>(E.at||0)>=z):D,$=[],Q=[],ze=[];for(let E of B.slice(0,50)){let it=((jn(e,E.ts)||{}).log||[]).find(Dn=>Dn&&Dn.site==="(время)"),{total:K,browser:en}=Zw(it?it.note:"");K!=null&&(Q.push(K),en!=null&&K>0&&ze.push(en/K*100)),$.push({ts:E.ts,at:E.at,found:E.found||0,added:E.added||0,sec:K,browserSec:en})}$.reverse();let De=u.size,et=Ft(new Date(Date.now()-6*864e5).toISOString()),_=a.filter(E=>Ft(E.date)>=et).length,qe=i(E=>{if(!E.length)return null;let Me=[...E].sort((K,en)=>K-en),it=Me.length>>1;return Me.length%2?Me[it]:Math.round((Me[it-1]+Me[it])/2)},"median"),Ue=qe(Q),Se=ze.length?Math.round(qe(ze)):null,q=Ue?Q.filter(E=>E>Ue*3&&E>Ue+60).length:0,C=Q.length?Math.max(...Q):null,j=m.telegram+m.youtube+m.facebook,H=(n.config&&n.config.sites||[]).map(E=>String(E||"").trim()).filter(Boolean),ie=new Set([...u.keys()].map(Bs)),ke=H.filter(E=>!ie.has(Bs(E))),Oe={configured:H.length,active:H.length-ke.length,list:ke.slice(0,60).map(E=>Bs(E)),more:Math.max(0,ke.length-60)},J=new Map,X=0,Ie=0,ce=0;for(let E of a){if(!E.sent)continue;E.sent==="+"?X++:E.sent==="0"?Ie++:E.sent==="-"&&ce++;let Me=Bs(E.source||""),it=J.get(Me)||{key:Me,pos:0,neu:0,neg:0};E.sent==="+"?it.pos++:E.sent==="0"?it.neu++:E.sent==="-"&&it.neg++,J.set(Me,it)}let Ye=0,rt=0,je=0;for(let E of a)E.rel&&(Ye++,E.rel==="-"?rt++:E.rel==="0"&&je++);let Ge={checked:Ye,off:rt,dim:je},Vn={total:X+Ie+ce,pos:X,neu:Ie,neg:ce,bySource:[...J.values()].sort((E,Me)=>Me.neg-E.neg||Me.pos+Me.neu+Me.neg-(E.pos+E.neu+E.neg))},An={items:a.length,uniqueSources:De,runs:B.length,itemsWeek:_,medRunSec:Ue,browserPct:Se,slowRuns:q,maxRunSec:C,matchTitle:w,matchBody:g,matchPost:b,matchVideo:x,matchOther:k,siteItems:m.site,telegramItems:m.telegram,youtubeItems:m.youtube,facebookItems:m.facebook,socialItems:j,keyword:n.config.keyword||"",from:n.config.from||null,to:n.config.to||null,windowDays:r,windowFrom:d,windowTo:p},Gn=null,ln=null;try{let E=ph();Gn=Yr(a.filter(Me=>Me.rel!=="-"),{extra:E}),ln={index:_p(a,{extra:E}),days:Yp(a,{extra:E}),tone:Jp(a,{extra:E})}}catch{Gn=Gn||null,ln=null}let zn=null;try{zn=rh(a.filter(E=>E.rel!=="-"),{keyword:n.config&&n.config.keyword||""})}catch{zn=null}return{overview:An,byDay:f,bySource:T,bySite:L,bySocial:A,byChannel:R,byHour:y,runs:$,feed:F,silent:Oe,tone:Vn,relevance:Ge,reach:Gn,media:ln,stories:zn}}var Gs=ee(()=>{Dt();Dc();Vs();$c();Fc();qc();i(Ft,"localDay");i(Jw,"localHour");i(Xw,"localDow");i(Zw,"parseTime");i(Qw,"kindOf");i(ia,"top");i(vn,"platformOf");i(ca,"windowItems");i(la,"dayItems");i(In,"buildAnalytics")});function eb(e){return String(e||"").toLowerCase().replace(/ё/g,"е").replace(/[^\p{L}\p{N}]+/gu," ").replace(/\s+/g," ").trim()}function tb(e){let t=new Map,n=[];for(let r of e||[]){if(!r||!r.title)continue;let s=eb(r.title),o=s.length>=mh?t.get(s):null;if(o){o.items.push(r);continue}let a={items:[r]};s.length>=mh&&t.set(s,a),n.push(a)}for(let r of n)r.items.sort((s,o)=>(+new Date(s.date)||0)-(+new Date(o.date)||0)),r.first=r.items[0],r.date=r.first.date;return n}function Bc(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^@/,"t.me/").replace(/\/+$/,"")}function nb(e){let t=new Map;for(let n of String(e||"").replace(/https?:\/\//gi,"").split(/\r?\n/)){let r=n.match(/^\s*(\S.*?)(?:\s*[—–:=]\s*|\s+-\s+)(.+?)\s*$/);if(!r)continue;let s=Bc(r[1]),o=r[2].trim();s&&o&&t.set(s,o)}return t}function gh(e,t){if(!e||!e.size)return"";let n=Bc(t);if(e.has(n))return e.get(n);for(let[r,s]of e)if(n.endsWith("."+r))return s;return""}function rb(e,t){let n=i(o=>{let a=String(o||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return a?{y:+a[1],m:+a[2],d:+a[3]}:null},"p"),r=n(e),s=n(t);if(!r&&!s)return"за всё время наблюдения";if(!r||!s){let o=r||s;return o.d+" "+ar[o.m-1]+" "+o.y+" г."}return r.y===s.y&&r.m===s.m&&r.d===s.d?r.d+" "+ar[r.m-1]+" "+r.y+" г.":r.y===s.y&&r.m===s.m?r.d+"–"+s.d+" "+ar[r.m-1]+" "+r.y+" г.":r.y===s.y?r.d+" "+ar[r.m-1]+" – "+s.d+" "+ar[s.m-1]+" "+r.y+" г.":r.d+" "+ar[r.m-1]+" "+r.y+" г. – "+s.d+" "+ar[s.m-1]+" "+s.y+" г."}function da({items:e,cfg:t={},from:n,to:r,withSnippets:s=!0,localDay:o}){let a=o||(v=>String(v||"").slice(0,10)),c=(e||[]).filter(v=>v&&v.title&&v.rel!=="-"),l=(e||[]).filter(v=>v&&v.title&&v.rel==="-").length,d=tb(c),p=d.slice().sort((v,L)=>(+new Date(L.date)||0)-(+new Date(v.date)||0)).slice(0,1500).sort((v,L)=>(+new Date(v.date)||0)-(+new Date(L.date)||0)),f=d.filter(v=>v.items.length>1),u=f.reduce((v,L)=>v+L.items.length-1,0),h=nb(t.aiSources),m={};for(let v of c){let L=v.kind||"site";m[L]=(m[L]||0)+1}let w=new Map,g=new Set;for(let v of c){let L=gh(h,v.source);L?w.set(L,(w.get(L)||0)+1):g.add(Bc(v.source))}let b=c.filter(v=>v.kind==="facebook"&&Number.isFinite(v.comments)).length,x=String(t.keyword||"").split(",").map(v=>v.trim()).filter(Boolean),k=es(t.aiSubject)||x[0]||"тема запроса",y=[];return y.push("ДАННЫЕ ДЛЯ СПРАВКИ"),y.push("Объект мониторинга: "+k),x.length&&y.push("Написания, по которым искали: "+x.join(", ")+" (это один объект)."),y.push("Круг связанных лиц и структур: "+(es(t.aiPersons)||"не задан")),y.push("Период (в шапку справки — ровно так): "+rb(n,r)),y.push("Дополнительный контекст: "+(String(t.aiContext||"").trim()||"не задан")),y.push(""),y.push("ЧТО ПОСЧИТАЛА ПРОГРАММА (эти числа точные, бери их как есть):"),y.push("— материалов за период: "+c.length+(l?" (ещё "+l+" исключены: проверка показала, что они не про объект)":"")),y.push("— перепечаток (тот же заголовок дословно у другого источника): "+u+(f.length?"; перепечатанных материалов: "+f.length:"")),y.push("— по площадкам: "+Object.entries(m).map(([v,L])=>(wh[v]||v)+" "+L).join(", ")),w.size?y.push("— по типам источников (разметка пользователя): "+[...w].map(([v,L])=>v+" "+L).join(", ")+(g.size?"; без разметки — "+g.size+" источн.":"")):y.push("— типы источников (критические, лояльные и т.п.) пользователь НЕ размечал: не приписывай их по названию издания."),y.push(""),y.push("ЧЕГО В ДАННЫХ НЕТ: охвата, просмотров, цитируемости и реакции аудитории программа не собирает"+(b?" — кроме числа комментариев у постов Фейсбука, где оно указано.":".")),y.push("Сюжетов программа не считала: сюжет — это одно событие или один повод, его выделяешь ты."),p.length<d.length&&y.push("Ниже показаны самые свежие "+p.length+" из "+d.length+" строк материалов: остальные не уместились."),y.push(""),y.push("МАТЕРИАЛЫ (от ранних к поздним; «то же у» — дословные перепечатки того же заголовка):"),p.forEach((v,L)=>{let A=v.first,T=wh[A.kind||"site"]||"",R=gh(h,A.source),F=[];A.sent&&bh[A.sent]&&F.push("тон: "+bh[A.sent]),A.match==="body"&&F.push("объект только в тексте"),A.kind==="facebook"&&Number.isFinite(A.comments)&&F.push("комментариев: "+A.comments),y.push(L+1+". "+sb(a(A.date))+" · "+es(A.source)+" ("+T+(R?", "+R:"")+") — "+es(A.title)+(F.length?" ["+F.join("; ")+"]":""));let D=s?es(A.snippet).slice(0,220):"";if(D&&y.push("   из текста: "+D),v.items.length>1){let z=v.items.slice(1).map(B=>es(B.source));y.push("   то же у: "+z.join(", "))}}),{text:y.join(`
`),total:c.length,rows:d.length,shown:p.length,reprints:u,dropped:l}}var mh,ar,wh,bh,sb,es,Uc=ee(()=>{i(eb,"normTitle");mh=25;i(tb,"groupReprints");i(Bc,"sourceKey");i(nb,"parseSourceTypes");i(gh,"typeOf");ar=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];i(rb,"humanPeriod");wh={site:"сайт СМИ",telegram:"Телеграм-канал",youtube:"YouTube",facebook:"Фейсбук"},bh={"+":"выигрышно",0:"нейтрально","-":"невыгодно"},sb=i(e=>{let t=String(e||"").match(/^\d{4}-(\d{2})-(\d{2})/);return t?t[2]+"."+t[1]:""},"dm"),es=i(e=>String(e||"").replace(/\s+/g," ").trim(),"one");i(da,"reviewData")});function ab(e){let t=String(e||"");return/high demand|overload|UNAVAILABLE|RESOURCE_EXHAUSTED|NOT_FOUND|not found|is not supported|HTTP 503|HTTP 429|\b503\b|\b429\b|\b404\b|ответ не пришёл/i.test(t)}function ib(e){let t=+((/^gemini-(\d+)/i.exec(String(e||"").trim())||[])[1]||0),n={thinkingLevel:"low"},r={thinkingBudget:0};return t>=3?[n,r,null]:[r,n,null]}function Kc(e){let t=String(e||"").trim(),n=[];for(let r of[t||pa,...ob]){let s=String(r||"").trim();s&&!n.includes(s)&&n.push(s)}return n}function vh(e,t){let n=[];if(!e||!e.overview)return"Проект по мониторингу СМИ Казахстана.";let r=e.overview;n.push("Мониторинг СМИ Казахстана. Объект наблюдения: «"+(r.keyword||"—")+"».");let s=r.windowFrom&&r.windowTo?r.windowFrom+"…"+r.windowTo:"вся история";if(n.push("Период: "+s+". Публикаций: "+r.items+", источников с материалом: "+r.uniqueSources+"."),(r.matchTitle||r.matchBody)&&n.push("Из них с объектом В ЗАГОЛОВКЕ: "+r.matchTitle+"; только В ТЕКСТЕ: "+r.matchBody+" (второе — упоминание вскользь, первое — материал про него)."),r.siteItems!=null){let o=[];r.siteItems&&o.push("сайты СМИ "+r.siteItems),r.telegramItems&&o.push("телеграм "+r.telegramItems),r.youtubeItems&&o.push("YouTube "+r.youtubeItems),r.facebookItems&&o.push("Фейсбук "+r.facebookItems),o.length>1&&n.push("Площадки: "+o.join(", ")+".")}return n.push(""),n.push("Кто пишет (публикаций за период):"),e.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+" — "+o.count)),e.silent&&e.silent.list&&e.silent.list.length&&(n.push(""),n.push("Молчали за период ("+e.silent.list.length+" из "+e.silent.configured+" отслеживаемых): "+e.silent.list.slice(0,15).join(", ")+(e.silent.more?" и ещё "+e.silent.more:"")+".")),n.push(""),n.push("Публикации по дням:"),e.byDay.slice(-21).forEach(o=>n.push("  "+o.day+" — "+o.count)),e.tone&&e.tone.total&&(n.push(""),n.push("Тональность (уже оценена ранее, всего размечено "+e.tone.total+"): выигрышных "+e.tone.pos+", нейтральных "+e.tone.neu+", невыгодных "+e.tone.neg+"."),e.tone.bySource&&e.tone.bySource.length&&(n.push("По источникам (источник: выигрышно/нейтрально/невыгодно):"),e.tone.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+": "+o.pos+"/"+o.neu+"/"+o.neg)))),t&&t.length&&(n.push(""),n.push("Заголовки материалов:"),t.slice(0,60).forEach(o=>n.push("  • "+o))),n.join(`
`)}function ub(e){let t=String(e||""),n=t.search(/РАЗМЕТКА\s*:?/i),r=n>=0?t.slice(n):t,s={};for(let o of r.matchAll(/(?:^|\n)[ \t]*(\d{1,4})[ \t]*[:.\-–][ \t]*([+\-0])[ \t]*(?:[:;–—-][ \t]*([^\n]*))?(?=\n|$)/g)){let a=String(o[3]||"").trim();for(let c=0;c<4;c++){let l=a;if(a=a.replace(/^[«"'(\s]+/,"").replace(/[»"')\s]+$/,"").replace(/[.;,]+$/,"").trim(),a===l)break}a=a.slice(0,90),s[+o[1]]={mark:o[2],why:a}}return Object.keys(s).length?s:null}function pb(e){let t=String(e||""),n=t.search(/\n\s*РАЗМЕТКА\s*:?/i);return(n>=0?t.slice(0,n):t).trim()}async function hb({apiKey:e,model:t,text:n,maxOut:r,timeoutMs:s=lb(),temp:o=.2}){let a=String(t||pa).trim(),c=i(h=>({contents:[{role:"user",parts:[{text:n}]}],generationConfig:{temperature:o,maxOutputTokens:r+(h&&h.thinkingBudget===0?0:cb),...h?{thinkingConfig:h}:{}}}),"mkBody"),l=i(async h=>{let m=new AbortController,w=setTimeout(()=>m.abort(),s);try{let g=await fetch(db(a)+"?key="+encodeURIComponent(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c(h)),signal:m.signal}),b=await g.text(),x=null;try{x=JSON.parse(b)}catch{}return{httpOk:g.ok,status:g.status,raw:b,data:x}}finally{clearTimeout(w)}},"call"),d=Date.now(),p="",f=i(h=>{let m=h&&h.data&&h.data.usageMetadata||{},w=m.promptTokenCount||m.candidatesTokenCount||m.thoughtsTokenCount?{in:m.promptTokenCount||0,out:m.candidatesTokenCount||0,think:m.thoughtsTokenCount||0}:null;return{ms:Date.now()-d,think:p,...w?{usage:w}:{}}},"meta"),u=null;try{let h=ib(a);for(let k=0;k<h.length&&(p=h[k]?h[k].thinkingLevel?"уровень "+h[k].thinkingLevel:"выключено":"без настройки",u=await l(h[k]),!(u.httpOk||!h[k]||!/thinking/i.test(u.raw||"")));k++);if(!u.httpOk)return{ok:!1,err:"Google API: "+(u.data&&u.data.error&&u.data.error.message?u.data.error.message:(u.raw||"HTTP "+u.status).slice(0,400)),...f(u)};let m=u.data&&u.data.candidates&&u.data.candidates[0],w=m&&m.content&&m.content.parts,g=Array.isArray(w)?w.filter(k=>!k.thought).map(k=>k.text||"").join("").trim():"",b=m&&m.finishReason,x=b?{finish:b}:{};if(b==="MAX_TOKENS")return g?{ok:!0,text:g,truncated:!0,...x,...f(u)}:{ok:!1,err:"модель израсходовала лимит на размышление и не успела ответить — попробуйте ещё раз или смените модель",...x,...f(u)};if(!g){let k=b?" (причина: "+b+")":"",y=u.data&&u.data.promptFeedback&&u.data.promptFeedback.blockReason;return{ok:!1,err:"модель ничего не ответила"+(y?" — запрос отклонён: "+y:k),...x,...f(u)}}return{ok:!0,text:g,...x,...f(u)}}catch(h){return{ok:!1,err:h&&h.name==="AbortError"?"ответ не пришёл за "+Math.round(s/1e3)+" с":String(h&&h.message||h),...f(u)}}}async function Wc(e){let t=Kc(e.model),n=null,r=[],s=[];for(let c of t){let l=await hb({...e,model:c});if(s.push({model:c,ok:!!l.ok,...l.ok?{}:{err:l.err},ms:l.ms,...l.finish?{finish:l.finish}:{},...l.usage?{usage:l.usage}:{},...l.think?{think:l.think}:{},...l.truncated?{truncated:!0}:{}}),l.ok)return{...l,model:c,attempts:s,...r.length?{fellBack:{from:t[0],to:c,tried:r.slice()}}:{}};if(n=l,r.push({model:c,err:l.err}),!ab(l.err))break}let o=i(c=>{let l=String(c||"").replace(/\s+/g," ").trim();return l.length>160?l.slice(0,159)+"…":l},"short");return{ok:!1,err:r.length>1?"перебрали модели: "+r.map(c=>c.model+" — "+o(c.err)).join("; "):n&&n.err,model:t[0],tried:r,attempts:s}}function Gc(e,t,n,r,s={}){return{n:e,from:t,to:n,size:n-t+1,ok:!!r.ok,model:r.ok?r.model:"",ms:(r.attempts||[]).reduce((o,a)=>o+(a.ms||0),0),attempts:r.attempts||[],...r.ok?{}:{err:r.err},...s}}async function kh({apiKey:e,timeoutMs:t=15e3}={}){if(!e)return{ok:!1,err:"не задан ключ Google"};let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(yh.replace(/\/$/,"")+"?key="+encodeURIComponent(e)+"&pageSize=200",{signal:n.signal}),o=await s.text(),a=null;try{a=JSON.parse(o)}catch{}return s.ok?{ok:!0,models:(Array.isArray(a&&a.models)?a.models:[]).filter(d=>Array.isArray(d.supportedGenerationMethods)?d.supportedGenerationMethods.includes("generateContent"):!0).map(d=>String(d.name||"").replace(/^models\//,"")).filter(Boolean).filter(d=>!/embedding|aqa|image|imagen|veo|tts/i.test(d))}:{ok:!1,err:"Google API: "+(a&&a.error&&a.error.message||o.slice(0,300))}}catch(s){return{ok:!1,err:s&&s.name==="AbortError"?"Google не ответил вовремя":String(s&&s.message||s)}}finally{clearTimeout(r)}}async function xh({apiKey:e,model:t,analytics:n,items:r,data:s,cfg:o,withSnippets:a=!0,localDay:c}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let l=String(t||pa).trim(),d=n&&n.overview||{},p=s||da({items:r,cfg:o||{keyword:d.keyword||""},from:d.windowFrom,to:d.windowTo,withSnippets:a,localDay:c}),f=Vc.review+`
`+p.text+`

ОБЩАЯ СВОДКА ПРОГРАММЫ:
`+vh(n,null),u=await Wc({apiKey:e,model:l,text:f,maxOut:fb,timeoutMs:mb(),temp:.2}),h=[Gc(1,1,p.shown,u)];return u.ok?{ok:!0,text:gb(u.text),model:u.model||l,log:h,data:p,...u.truncated?{truncated:!0}:{},...u.fellBack?{fellBack:u.fellBack}:{}}:{...u,log:h,data:p}}function gb(e){let t=String(e||"").trim(),n=t.match(/^```[a-zA-Z]*\s*\n([\s\S]*?)\n?```\s*$/);return n&&(t=n[1].trim()),t}function wb(e){return Math.max(2e3,Math.min(8e3,700+e*30))}function xb(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","Знак ставится ПО ОТНОШЕНИЮ К НЕМУ, а не «хорошая или плохая новость вообще»:","  +  объект показан в выигрышном свете: достижение, награда, поддержка, похвала в его адрес;","  -  объект показан невыгодно: критика, обвинение, провал, скандал, недовольство им;","  0  протокольное сообщение, факт, объявление — без оценки объекта.","Беда, катастрофа, конфликт САМИ ПО СЕБЕ негативом не считаются: если объект помогает","пострадавшим, решает проблему или просто упомянут рядом — для него это 0 или +.","Если по показанному тексту тон не виден — ставь 0 и пиши причину «тон по фрагменту не виден».","Это лучше, чем угадать: угаданный знак от настоящего не отличить.",""].join(`
`)}function Lb(e){return!e||typeof e!="object"?"":String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,Sb)}function Tb(e){let t=e&&typeof e=="object"?e.title:e;return String(t??"").replace(/\s+/g," ").trim()}function Mb(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","  +  материал действительно ПРО ЭТОТ объект: он действующее лицо, о нём говорят,","     его решение, его ведомство, его слова — даже если упомянут вскользь;","  -  слово совпало СЛУЧАЙНО: однофамилец или тёзка, другой человек с той же фамилией,","     улица/район/школа, названные этим именем, другая организация с похожим названием,","     другое значение слова;","  0  по показанному тексту понять нельзя.","Упоминание вскользь — это всё равно «+»: наша задача отсеять ЧУЖОЕ, а не короткое.","Если сомневаешься между «-» и «0» — ставь 0. Выброшенный по ошибке материал","дороже лишнего: пропускать важное нельзя.",""].join(`
`)}async function Sh(e){return Th({...e,task:"sentiment"})}async function Lh(e){return Th({...e,task:"verify"})}async function Th({apiKey:e,model:t,analytics:n,titles:r,batch:s=bb,maxCalls:o=vb,task:a="sentiment",onStep:c=null}){let l=ua[a]||ua.sentiment;if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let d=String(t||pa).trim(),p=(r||[]).map(D=>({title:Tb(D),snip:Lb(D)}));if(!p.length)return{ok:!1,err:"нечего оценивать: в окне нет материалов"};let f=p.some(D=>D.snip),u={},h=[],m=0,w="",g="",b=d,x=null,k=i(D=>{if(h.push(D),c)try{c(D,{calls:m,marked:Object.keys(u).length,asked:p.length})}catch{}},"step"),y=i(async(D,z,B)=>{if(D>=z||m>=o)return;let $=p.slice(D,z),Q=$.map((H,ie)=>D+ie+1+". "+H.title+(H.snip?`
   из текста: `+H.snip:"")).join(`
`),ze=Vc[B?l.first:l.more]+l.subject(n)+(f?Vc.withSnippets:""),De=B?ze+vh(n,null)+`

Заголовки для оценки (`+$.length+` шт.):
`:ze+"Заголовки ("+$.length+` шт.):
`;m++;let et=m,_=await Wc({apiKey:e,model:d,text:De+Q,maxOut:wb($.length),temp:0}),qe=$.length>yb&&m<o,Ue=D+Math.floor($.length/2);if(!_.ok){g||(g=_.err);let H=kb(_.err)&&qe;k(Gc(et,D+1,z,_,{got:0,...H?{action:"split"}:{}})),H&&(await y(D,Ue,B&&!w),await y(Ue,z,!1));return}b=_.model||b,_.fellBack&&!x&&(x=_.fellBack);let Se=ub(_.text)||{},q=Object.keys(Se).filter(H=>+H>D&&+H<=z);for(let H of q)u[H]=Se[H];B&&!w&&(w=pb(_.text));let j=$.length-q.length>Math.max(1,Math.floor($.length*.1))&&qe;k(Gc(et,D+1,z,_,{got:q.length,..._.truncated?{truncated:!0}:{},...j?{action:"split"}:{}})),j&&(await y(D,Ue,!1),await y(Ue,z,!1))},"askChunk");await y(0,Math.min(s,p.length),!0);for(let D=s;D<p.length&&m<o;D+=s)await y(D,Math.min(D+s,p.length),!1);let v=Object.keys(u);if(!v.length)return{ok:!1,err:g||"модель не вернула разметку",calls:m,log:h};let L=0,A=0,T=0;for(let D of v){let z=u[D]&&u[D].mark;z==="+"?L++:z==="0"?A++:z==="-"&&T++}let R=L+A+T,F=l.counts(L,A,T);return w&&F.push(w),{ok:!0,model:b,marks:u,text:F.join(`
`).trim(),prose:w,calls:m,covered:R,asked:p.length,log:h,...x?{fellBack:x}:{},...g&&R<p.length?{partialErr:g}:{}}}function Mh(e){return String(e||"").replace(Ab,"").trim()}function Ah(e,t,n=""){let r=ua[e]||ua.sentiment,s=0,o=0,a=0;for(let l of t||[])l==="+"?s++:l==="0"?o++:l==="-"&&a++;let c=r.counts(s,o,a);return n&&c.push(n),c.join(`
`).trim()}function Db(e,t,n=new Date){let r=i(l=>{let d=new Date(l);return isNaN(d)?"":d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")},"ymdL"),s=(t||[]).filter(l=>l&&l.text).sort((l,d)=>String(d.created||"").localeCompare(String(l.created||""))),o=[],a=0;for(let l of s){let d="["+r(l.created)+" ★"+(l.rating||"?")+(l.rated===!1?" не учтён":"")+"] "+String(l.text).replace(/\s+/g," ").slice(0,700);if(a+d.length>zb)break;o.push(d),a+=d.length+1}return{text:["Ты аналитик репутации бизнеса. Ниже отзывы о фирме из 2ГИС: «"+(e.name||"")+"»"+(e.address?", "+e.address:"")+(e.category?" ("+e.category+")":"")+".",e.card?"Сейчас на карточке: рейтинг "+e.card.rating+", отзывов "+e.card.reviewsCount+", оценок "+e.card.ratingsCount+".":"","Отзывов в разборе: "+o.length+(o.length<s.length?" самых свежих из "+s.length+" (остальные не влезли)":"")+". Сегодня "+r(n)+".","Ответь по-русски, коротко и по делу, маркированными списками, разделами:","1) Общая картина: тон и что изменилось за последние 30 дней по сравнению с более ранними.","2) За что хвалят чаще всего (до 5 пунктов, примерная доля отзывов).","3) На что жалуются чаще всего (до 5 пунктов, примерная доля, короткая цитата-пример в кавычках).","4) Повторяющиеся конкретные проблемы: люди, смены, услуги, время суток — если видно.","5) Что сделать в первую очередь (3 пункта).","Опирайся ТОЛЬКО на эти отзывы, ничего не выдумывай. Имена сотрудников упоминай, только если их называют сами отзывы. Отзывы на казахском учитывай наравне с русскими.","","Отзывы (новые сверху):"].filter(l=>l!=="").join(`
`)+`
`+o.join(`
`),used:o.length,total:s.length}}async function zh({apiKey:e,model:t,firm:n,reviews:r}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в «Аналитике» любого проекта)"};let s=Db(n||{},r||[]);return s.used?{...await Wc({apiKey:e,model:t,text:s.text,maxOut:4e3,timeoutMs:18e4,temp:.2}),used:s.used,total:s.total}:{ok:!1,err:"отзывов с текстом пока нет — разбирать нечего"}}var pa,ob,cb,lb,yh,db,Vc,fb,mb,bb,yb,vb,kb,Sb,ua,Ab,zb,ha=ee(()=>{Uc();pa="gemini-3.5-flash",ob=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.5-flash"];i(ab,"worthNextModel");i(ib,"thinkingLadder");cb=4096,lb=i(()=>+(typeof process<"u"&&process.env&&process.env.MC_GEMINI_TIMEOUT_MS)||9e4,"callTimeout");i(Kc,"modelChain");yh=typeof process<"u"&&process.env&&process.env.MC_GEMINI_BASE||"https://generativelanguage.googleapis.com/v1beta/models/",db=i(e=>`${yh}${encodeURIComponent(e)}:generateContent`,"ENDPOINT");i(vh,"brief");Vc={review:["РОЛЬ","Ты — аналитик по медиамониторингу, готовящий информационно-аналитические справки (обзоры","информационного поля) для руководства. Пишешь в официально-деловом стиле, сжато, нейтрально","по форме, аналитично по содержанию.","","ЗАДАЧА","На основе материалов мониторинга (они ниже, в блоке «ДАННЫЕ ДЛЯ СПРАВКИ») подготовить обзор","информационного поля вокруг объекта мониторинга за указанный период строго по структуре и правилам.","","ЧТО ЕСТЬ В ДАННЫХ","- Объект, круг связанных лиц, период и дополнительный контекст — в начале блока данных.","- Точные числа, посчитанные программой: материалы, перепечатки, площадки, типы источников.","- Список материалов: дата, издание, площадка, заголовок; у части — фрагмент текста вокруг","  упоминания, тональность по отношению к объекту и пометка «объект только в тексте».","- Ссылок, полных текстов статей, охвата, просмотров и цитируемости в данных НЕТ.","","СТРУКТУРА СПРАВКИ","","0. Шапка","- Первая строка курсивом: период — ровно так, как он указан в данных.","- Следом заголовок ЗАГЛАВНЫМИ жирным: «ОБЗОР ИНФОРМАЦИОННОГО ПОЛЯ ВОКРУГ <ОБЪЕКТ>»","  (объект в родительном падеже).","","1. Вводный абзац (общая картина)","- Сколько ключевых сюжетов зафиксировано за период (жирным число). Сюжет — одно событие или","  один повод; несколько материалов об одном поводе — это один сюжет.","- Характер публикаций: оригинальные материалы или перепечатки — по числам программы.","- Где распространялись: площадки (сайты СМИ, Телеграм-каналы, YouTube, Фейсбук) и — ТОЛЬКО если","  пользователь разметил источники — их типы (критические, нейтральные, лояльные и т.п.), жирным.","","2. Абзац-рамка (тематика и вывод о резонансе)","- Одним предложением перечисли тематические направления.","- Укажи, за счёт кого формировалась повестка.","- Завершающий вывод жирным: получили ли сюжеты общественный резонанс. Резонанс суди по тому, что","  есть в данных: сколько изданий подхватило сюжет, были ли перепечатки, длился ли он несколько дней.","","3. Основная часть: сюжеты, сгруппированные по темам","- Тематические блоки определяй по данным. Если такие темы есть, ориентируйся на порядок:","  официальные и памятные события → внешний контур → правовые и имущественные вопросы → бизнес и","  активы → репутационные и личные сюжеты → историко-идеологические нарративы.","- Каждый сюжет — отдельный абзац: издание (всегда названо) → что сообщило → ключевой тезис","  жирным → контекст или опровержение/уточнение, если есть в данных.","- Между абзацами используй логические связки: «Так,», «В то же время», «Наряду с»,","  «Параллельно», «Помимо», «Тема получила продолжение в…».","- Самый широко подхваченный сюжет (больше всего изданий и перепечаток) отметь явно.","- Тональность в данных — это тон самих публикаций по отношению к объекту, а не реакция аудитории.","  Число комментариев есть только у постов Фейсбука, где оно указано; другой реакции аудитории в","  данных нет — не описывай её.","- Для спорных заявлений используй атрибуцию: «утверждается», «сообщается», «якобы»,","  «по мнению автора», «интерпретируется как».","- Если для сюжета есть контекст, снижающий остроту заявления, добавь его одним предложением.","","4. Заключение (аналитический вывод, один абзац)","- Главный тренд периода: как изменился характер информационного давления или поддержки","  (например, «от X к Y»); ключевая формулировка жирным.","- Оценка последствий: привели ли сюжеты к росту общественной активности, новым очагам","  напряжённости, изменению повестки или остались в плоскости виртуальных дискуссий.","","СТИЛЬ","- Официально-деловой, без эмоциональных эпитетов и разговорных оборотов.","- Аналитические маркеры («оппонирующие источники», «протестный сегмент», «заметного резонанса","  не получили») допустимы только если подкреплены данными мониторинга.","- Персоны: инициалы + фамилия без пробела («Н.Назарбаев»); при первом упоминании добавляй роль,","  если она есть в данных.","- Названия изданий пиши так, как они приняты (Tengrinews.kz, Радио Азаттык, «Проект»).","- Даты указывай точно («18 декабря»).","- Объём: 1,5–2 страницы, 8–15 абзацев. Если материалов мало — короче: каждый абзац несёт новую","  информацию, раздувать нельзя.","","ВЫДЕЛЕНИЕ ЖИРНЫМ","Жирным выделяй: количество сюжетов, тип источников, итоговый вывод о резонансе, главный тезис","каждого сюжета, ключевые цифры, имена и названия, на которых строится сюжет, ключевой вывод","заключения. Не выделяй более 1–2 фрагментов в предложении.","","ОГРАНИЧЕНИЯ ПО ДОСТОВЕРНОСТИ","- Используй только предоставленные материалы. Не добавляй факты, цитаты, цифры, издания и","  ссылки, которых нет в данных. Цитатой можно считать только слова из фрагмента текста.","- Метрик охвата, просмотров и цитируемости нет — не придумывай их и не пиши «данные уточняются»","  в тексте справки; об их отсутствии — одной строкой в примечаниях.","- Тип источника (критический, лояльный и т.п.) бери только из разметки в данных. Не приписывай","  его по названию издания.","- Не смешивай факт и утверждение источника: заявления СМИ и блогеров подавай с атрибуцией.","- Не высказывай личных оценок объекта и источников; оценка допустима только как аналитический","  вывод о характере и масштабе информационного повода.","- Если данных недостаточно для какого-то блока, пропусти его и сообщи об этом в примечании.","- ЗАПРЕЩЕНО писать про саму программу и про то, как собраны данные.","","ФОРМАТ ВЫВОДА","Готовый текст справки в формате Markdown (**жирный**, *курсив*), без вступлений и пояснений,","без таблиц и без блоков кода. После справки — строка «Примечания для редактора» и под ней не","более 3 пунктов, каждый с «- »: что требует проверки, где не хватило данных, что стоит добавить.","","САМОПРОВЕРКА ПЕРЕД ВЫДАЧЕЙ (молча, в ответ не пиши)","1. Есть шапка, вводный абзац, абзац-рамка, основная часть, заключение?","2. У каждого сюжета названо издание и выделен ключевой тезис?","3. Нет ли фактов, цифр и изданий, которых нет в данных?","4. Есть ли в заключении тренд и оценка последствий?","5. Соблюдены тон, объём и правила оформления имён?",""].join(`
`),sentiment:["Ты — редактор-аналитик службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Оцени тональность каждого материала по отношению к ОБЪЕКТУ МОНИТОРИНГА (см. ниже).","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: чем окрашена тема, есть ли перекос по конкретным СМИ>","","РАЗМЕТКА:","1:+:награда врачам, тон одобрительный","2:0:протокольное сообщение без оценки","3:-:критика в адрес ведомства","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ позитив, 0 нейтрально, - негатив), двоеточие и КОРОТКАЯ причина —","от двух до шести слов по-русски, строчными, без точки в конце. Причина объясняет","ИМЕННО ЭТОТ заголовок: что в нём делает его позитивным, нейтральным или негативным.","Не пересказывай заголовок и не повторяй слово «позитив»/«негатив» — это уже есть в знаке.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем оценку с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),withSnippets:["Под частью заголовков строкой «из текста:» дан фрагмент статьи вокруг ключевого слова.","Опирайся В ПЕРВУЮ ОЧЕРЕДЬ на него: заголовок часто протокольный («провёл совещание»),","а настоящий тон виден в тексте. Фрагмент — это НЕ отдельный материал и своего номера","не имеет: он относится к заголовку над собой.",""].join(`
`),sentimentMore:["Ты — редактор-аналитик службы медиамониторинга. Продолжаем оценку тональности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + позитив, 0 нейтрально, - негатив. Причина — от двух до шести слов","по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`),verify:["Ты — редактор службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Задача ровно одна: сказать, относится ли каждый материал К ОБЪЕКТУ МОНИТОРИНГА —","или слово совпало случайно (однофамилец, тёзка, другое значение слова, чужая организация).","Тональность, важность и качество материала тебя здесь НЕ интересуют.","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: много ли постороннего попало в выдачу и какого рода>","","РАЗМЕТКА:","1:+:премьер-министр, тот самый","2:-:однофамилец, сотрудник КНБ","3:0:по фрагменту не понять, кто это","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ это про объект, - это НЕ про объект, 0 по показанному не понять), двоеточие","и КОРОТКАЯ причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем вердикт с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),verifyMore:["Ты — редактор службы медиамониторинга. Продолжаем проверку релевантности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + это про объект, - это НЕ про объект (совпало слово), 0 по показанному не понять.","Причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`)};i(ub,"parseMarks");i(pb,"stripMarks");i(hb,"callOne");i(Wc,"callModel");i(Gc,"logEntry");i(kh,"listModels");fb=8e3,mb=i(()=>+(typeof process<"u"&&process.env&&process.env.MC_GEMINI_TIMEOUT_MS)||18e4,"reviewTimeout");i(xh,"askReview");i(gb,"cleanMarkdown");i(wb,"outCapFor");bb=60,yb=15,vb=20,kb=i(e=>/ответ не пришёл|лимит на размышление|MAX_TOKENS/i.test(String(e||"")),"sizeErr");i(xb,"subjectBlock");Sb=200;i(Lb,"snipOf");i(Tb,"titleOf");i(Mb,"subjectBlockVerify");ua={sentiment:{first:"sentiment",more:"sentimentMore",subject:xb,counts:i((e,t,n)=>["ПОЗИТИВНЫХ: "+e,"НЕЙТРАЛЬНЫХ: "+t,"НЕГАТИВНЫХ: "+n,""],"counts")},verify:{first:"verify",more:"verifyMore",subject:Mb,counts:i((e,t,n)=>["ПРО ОБЪЕКТ: "+e,"НЕ ПОНЯТЬ: "+t,"НЕ ПРО ОБЪЕКТ: "+n,""],"counts")}};i(Sh,"askSentimentAll");i(Lh,"askVerifyAll");i(Th,"askMarksAll");Ab=/^(?:ПОЗИТИВНЫХ|НЕЙТРАЛЬНЫХ|НЕГАТИВНЫХ|ПРО ОБЪЕКТ|НЕ ПОНЯТЬ|НЕ ПРО ОБЪЕКТ):\s*\d+\s*$/gm;i(Mh,"stripCounts");i(Ah,"countsText");zb=4e5;i(Db,"reviewsPrompt");i(zh,"askReviews")});function Dh(e){let t=e||{},n=String(t.mode||"off");return n==="daily"?1:n==="hours"?Math.max(1,Math.ceil(24/Math.max(1,+t.everyHours||6))):n==="minutes"?Math.max(1,Math.ceil(1440/Math.max(10,+t.everyMinutes||20))):0}function fa(e){return Dh(e)<=1}function ma(e){return"прогоны идут чаще раза в сутки ("+Dh(e)+" в сутки) — проверка релевантности смотрит каждый материал окна и на таком шаге сожгла бы квоту Google. Поставьте расписание «каждый день» или реже — или запускайте проверку вручную."}var _c=ee(()=>{i(Dh,"runsPerDay");i(fa,"verifyAllowed");i(ma,"verifyWhyNot")});function Rb(e){let t=[];for(let n of Array.isArray(e)?e:[]){let r=n==="summary"?"review":n;Yc.includes(r)&&!t.includes(r)&&t.push(r)}return t}function Nb(e,{days:t=null,analytics:n,settings:r}={}){let s=We(e),o=n&&n.overview||{};return da({items:ca(e,{days:t}),cfg:s&&s.config||{},from:o.windowFrom,to:o.windowTo,withSnippets:ya(r||Ze()),localDay:Ft})}async function Xc(e,{days:t=null,analytics:n,settings:r}={}){let s=r||Ze();if(!s.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let o=Nb(e,{days:t,analytics:n,settings:s});if(!o.total)return{ok:!1,err:"в окне нет материалов — писать обзор не о чем",log:[]};let a=await xh({apiKey:s.geminiKey,model:s.geminiModel,analytics:n,data:o});return{...a,note:Eb(o,a)}}function Eb(e,t){if(!e)return"";let n=["по "+e.total+" материалам окна"];return e.reprints&&n.push("перепечаток "+e.reprints),e.shown<e.rows&&n.push("модели показаны самые свежие "+e.shown+" из "+e.rows),e.dropped&&n.push(e.dropped+" помеченных «не про объект» не брали"),t&&t.truncated&&n.push("ответ обрезан по лимиту — конец справки не поместился"),n.join("; ")}function ya(e){return(e||{}).geminiSnippets!==!1}function Pb(e,t){return ya(t)?e.map(n=>({title:n.title,snippet:n.snippet||""})):e.map(n=>n.title)}function Ob(e,t){if(!t)return null;let n=[];return e.forEach((r,s)=>{let o=t[s+1];if(!o)return;let a=typeof o=="string"?o:o.mark,c=typeof o=="string"?"":o.why||"";(a==="+"||a==="0"||a==="-")&&n.push({...r,mark:a,why:c})}),n.length?n:null}async function Zc(e,{kind:t="sentiment",days:n=null,analytics:r,settings:s,rescore:o=!1,onStep:a=null}={}){let c=Ch[t]||Ch.sentiment,l=s||Ze();if(!l.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};o&&c.clear(e);let d=ca(e,{days:n});if(!d.length)return{ok:!1,err:c.empty};let p=d.filter(L=>!L[c.field]).slice(0,$b),f=d.filter(L=>L[c.field]).length,u=0,h=0,m="",w=l.geminiModel||"",g=[],b="",x=(Ki(e)||{})[t]||{},k=Mh(x.text||"");if(p.length){let L=await c.ask({apiKey:l.geminiKey,model:l.geminiModel,analytics:r,titles:Pb(p,l),onStep:a});if(u=L.calls||0,g=L.log||[],!L.ok)return{ok:!1,err:L.err||"не получилось",calls:u,model:L.model||w,log:g,asked:p.length};w=L.model||w,L.prose&&(k=L.prose),b=L.partialErr||"";let A=(Ob(p,L.marks)||[]).map(T=>({...T,model:w}));h=c.set(e,A),m=""}let y=ca(e,{days:n}).filter(L=>L[c.field]).map(L=>({title:L.title,url:L.url,source:L.source,date:L.date,mark:L[c.field],why:L[c.why]||""}));return{ok:!0,text:Ah(t,y.map(L=>L.mark),k),model:w,err:m,calls:u,fresh:h,stored:f,asked:p.length,covered:y.length,total:d.length,items:y.length?y:null,log:g,...b?{partialErr:b}:{}}}function wa(e){return!e||!e.ok?e&&e.err||"не получилось":e.asked?`оценено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее оценено ${e.stored} — не переспрашивали`:"")+`; всего в окне размечено ${e.covered} из ${e.total}`+Rh(e,"оценки"):`все ${e.covered} материалов окна уже оценены — к Google не ходили`}function Rh(e,t){let n=(e.total||0)-(e.covered||0);return n<=0?"":`; без ${t} осталось ${n}`+(e.partialErr?` (последний отказ: ${e.partialErr})`:"")+" — повторный запрос спросит только про них"}function ba(e){if(!e||!e.ok)return e&&e.err||"не получилось";let t=(e.items||[]).filter(s=>s.mark==="-").length,n=(e.items||[]).filter(s=>s.mark==="0").length,r=`; похоже, не про объект — ${t}`+(n?`, по фрагменту не понять — ${n}`:"")+"; ничего не удалено, решает человек";return e.asked?`проверено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее проверено ${e.stored} — не переспрашивали`:"")+`; всего в окне проверено ${e.covered} из ${e.total}`+r+Rh(e,"проверки"):`все ${e.covered} материалов окна уже проверены — к Google не ходили`+r}async function va(e,{foundNow:t=null,runTs:n=null}={}){let r=[],s=We(e);if(!s)return r;let o=s.config||{};if(!o.aiAuto)return r;if(!_t(o).ai)return r.push("ИИ-разбор пропущен: "+Hr),r;let a=Ze();if(!a.geminiKey)return r.push("ИИ-разбор включён, но ключ Gemini не задан — пропускаю (задайте во вкладке «Аналитика»)"),r;if(t===0)return r.push("ИИ-разбор пропущен: в этом прогоне ноль материалов — квоту не тратим"),r;let c=Array.isArray(o.aiKinds)&&o.aiKinds.length?Rb(o.aiKinds):["review"],l=o.periodMode==="rolling"?Math.max(2,+o.periodDays||2):null,d=In(e,{days:l});if(!d)return r;for(let p of c)try{if(p==="verify"&&!fa(s.schedule)){r.push(`ИИ-${ga[p]} пропущена: `+ma(s.schedule));continue}if(p==="review"){let m=((Ki(e)||{}).review||{}).at||0;if(m&&Date.now()-m<72e6){r.push("ИИ-расширенный обзор пропущен: пишется автоматически не чаще раза в сутки (последний — "+Pt(m)+"); вручную — кнопкой во вкладке «Аналитика»");continue}}let f=p==="sentiment"||p==="verify",u=f?await Zc(e,{kind:p,days:l,analytics:d,settings:a}):await Xc(e,{days:l,analytics:d,settings:a});Eo(e,p,{at:Date.now(),runTs:n,window:d.overview.windowFrom+" … "+d.overview.windowTo,text:u.ok?u.text:"",model:u.model||a.geminiModel||"",err:u.ok?"":u.err||"не получилось",auto:!0,items:u.ok&&f?u.items:null,log:u.log||[],...u.ok?{note:p==="sentiment"?wa(u):p==="verify"?ba(u):u.note||""}:{}});let h=p==="sentiment"?wa(u):p==="verify"?ba(u):"готово, "+(u.note||"");r.push(u.ok?`ИИ-${ga[p]}: ${h}`:`ИИ-${ga[p]}: ${u.err||"не получилось"}`)}catch(f){r.push(`ИИ-${ga[p]}: сбой — ${String(f&&f.message||f)}`)}return r}var Yc,ga,Jc,$b,Ch,ka=ee(()=>{Dt();Gs();ha();Uc();St();qr();_c();Yc=["review","sentiment","verify"],ga={review:"расширенный обзор",sentiment:"тональность",verify:"проверка релевантности"};i(Rb,"normKinds");Jc=i(e=>e==="summary"?"review":e,"normKind");i(Nb,"reviewInput");i(Xc,"reviewRun");i(Eb,"reviewNote");$b=600;i(ya,"sendSnippets");i(Pb,"sentimentTitles");i(Ob,"applyMarks");Ch={sentiment:{field:"sent",why:"sentWhy",ask:Sh,set:qu,clear:Vu,empty:"нечего оценивать: в окне нет материалов"},verify:{field:"rel",why:"relWhy",ask:Lh,set:Bu,clear:Uu,empty:"нечего проверять: в окне нет материалов"}};i(Zc,"markRun");i(wa,"sentimentNote");i(Rh,"gapNote");i(ba,"verifyNote");i(va,"runAiAfterRun")});async function Ht(e,t,n={},r=Ib){if(!e)return{ok:!1,err:"не задан токен бота"};let s=new AbortController,o=setTimeout(()=>s.abort(),r);try{let a=await fetch(`${$h}/bot${e}/${t}`,{method:"POST",signal:s.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),c=await a.text(),l=null;try{l=JSON.parse(c)}catch{}return l?l.ok?{ok:!0,result:l.result}:{ok:!1,err:l.description||"телеграм отказал (HTTP "+a.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+a.status+")"}}catch(a){let c=String(a&&a.message||a);return{ok:!1,err:/abort/i.test(c)?"телеграм не ответил за "+Math.round(r/1e3)+" с":c}}finally{clearTimeout(o)}}async function ts(e){let t=await Ht(e,"getMe");if(!t.ok)return{ok:!1,err:t.err};let n=t.result&&t.result.username||"";return{ok:!0,bot:n?"@"+n:t.result&&t.result.first_name||"бот"}}async function Sa(e,t={}){let n=(t.chats||[]).slice(),r=new Map(n.map(d=>[String(d.id),d])),s=await Ht(e,"getUpdates",{offset:t.offset||0,timeout:0,limit:100});if(!s.ok)return{chats:n,offset:t.offset||0,err:s.err,added:0,events:[]};let o=t.offset||0,a=0,c=0,l=[];for(let d of s.result||[]){if(d.update_id!=null&&(o=Math.max(o,d.update_id+1)),d.callback_query){let m=d.callback_query,w=m.message||{};w.chat&&w.chat.id!=null&&l.push({kind:"cb",id:m.id,chat:w.chat,from:m.from||{},data:String(m.data||""),messageId:w.message_id,date:w.date||0});continue}let p=d.message||d.channel_post||d.my_chat_member,f=p&&p.chat;if(!f||f.id==null)continue;if(d.message&&typeof d.message.text=="string"){let m=d.message;l.push({kind:"msg",chat:f,from:m.from||{},text:m.text,date:m.date||0,messageId:m.message_id,replyTo:m.reply_to_message?m.reply_to_message.message_id:null})}let u=String(p.text||"").trim().toLowerCase(),h=[f.title,f.first_name,f.username&&"@"+f.username].filter(Boolean)[0]||String(f.id);if(/^\/stop\b/.test(u)||d.my_chat_member&&/kicked|left/.test(String(d.my_chat_member.new_chat_member&&d.my_chat_member.new_chat_member.status))){r.delete(String(f.id))&&c++;continue}if(!r.has(String(f.id)))r.set(String(f.id),{id:f.id,name:h,type:f.type||""}),a++;else{let m=r.get(String(f.id));m.name=h,f.type&&(m.type=f.type)}}return{chats:[...r.values()],offset:o,added:a,removed:c,err:"",events:l}}function Ph(e){el=typeof e=="function"?e:null}function ir(e){if(xa.has(e))return xa.get(e);let t=(async()=>{let n=lt(e),r=await Sa(n.token,n);if(Lt(e,{chats:r.chats,offset:r.offset,err:r.err||""}),el&&r.events&&r.events.length){let o=(Nh.get(e)||Promise.resolve()).then(()=>el(e,r.events)).catch(()=>{});Nh.set(e,o)}return r})().finally(()=>xa.delete(e));return xa.set(e,t),t}async function tl(e,t,n,r=Date.now()){let s=e+"|"+t+"|"+n,o=Eh.get(s);if(o&&r-o.at<Hb)return o.status;let a=await Ht(e,"getChatMember",{chat_id:t,user_id:n}),c=a.ok&&a.result?String(a.result.status||""):"";return a.ok&&Eh.set(s,{status:c,at:r}),c}async function ns(e,t,n=Date.now()){let r=e&&e.owners||[];if(!t||t.id==null)return{ok:!1,why:"no-chat"};if(!r.length)return{ok:!1,why:"no-owner"};if(t.type==="private"||!t.type&&Number(t.id)>0)return r.some(s=>String(s.id)===String(t.id))?{ok:!0}:{ok:!1,why:"stranger"};for(let s of r)if(qb.includes(await tl(e.token,t.id,s.id,n)))return{ok:!0};return{ok:!1,why:"no-owner-here"}}async function nl(e,t,n,r,s="",o=3e4){if(!e)return{ok:!1,err:"не задан токен бота"};let a=new AbortController,c=setTimeout(()=>a.abort(),o);try{let l=new FormData;l.append("chat_id",String(t)),s&&l.append("caption",s),l.append("document",new Blob([r],{type:"text/csv"}),n);let d=await fetch(`${$h}/bot${e}/sendDocument`,{method:"POST",body:l,signal:a.signal}),p=await d.text(),f=null;try{f=JSON.parse(p)}catch{}return f?f.ok?{ok:!0,result:f.result}:{ok:!1,err:f.description||"телеграм отказал (HTTP "+d.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+d.status+")"}}catch(l){let d=String(l&&l.message||l);return{ok:!1,err:/abort/i.test(d)?"телеграм не принял файл за "+Math.round(o/1e3)+" с":d}}finally{clearTimeout(c)}}function Bb(e,t){let n=Pt(e.date)||"",r=[e.source,n].filter(Boolean).map(ue).join(" · "),s=String(e.title||e.url||""),o=i(c=>String(c||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),a=String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,300);return a&&(o(a)===o(s)||o(s).includes(o(a)))&&(a=""),[r?"📰 <b>"+r+"</b>":"📰",ue(s),a?"<i>"+ue(a)+"</i>":"",e.url||"",t?"<i>"+ue(t)+"</i>":""].filter(Boolean).join(`
`)}async function Fn(e,t={}){if(Qc.has(e))return{sent:0,skipped:"уже идёт отправка"};let n=lt(e);if(!n.enabled||!n.token)return{sent:0,skipped:"бот выключен"};let r=We(e);if(!r)return{sent:0,skipped:"проект не найден"};if(!_t(r.config||{}).bot)return{sent:0,skipped:Hr};Qc.add(e);try{let s=await ir(e);if(!s.chats.length)return{sent:0,skipped:"никто не нажал Start"};let o=lt(e),a=[];for(let m of s.chats)a.push({...m,access:(await ns(o,m)).ok?"ok":"no"});Lt(e,{chats:a});let c=a.filter(m=>m.access==="ok");if(!c.length)return{sent:0,skipped:(o.owners||[]).length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let l=ju(e);if(!l.length)return{sent:0,skipped:"нового нет"};let d=l.slice(0,jb),p=l.length-d.length,f=0,u=[];for(let m of d){let w=Bb(m,t.withName===!1?"":r.name),g=!1;for(let b of c){let x=await Ht(n.token,"sendMessage",{chat_id:b.id,text:w,parse_mode:"HTML",disable_web_page_preview:!0});x.ok?g=!0:Lt(e,{err:x.err})}g&&(u.push(m.url),f++),Ks&&await Fb(Ks)}if(u.length&&Iu(e,u),p>0)for(let m of c)await Ht(n.token,"sendMessage",{chat_id:m.id,text:"… и ещё "+p+": пришлю следующей порцией. Всё сразу — в кабинете."});let h=lt(e);return Lt(e,{sentTotal:(h.sentTotal||0)+f,lastSentAt:Date.now(),err:f?"":h.err}),{sent:f,rest:p,chats:c.length}}catch(s){try{Lt(e,{err:String(s&&s.message||s)})}catch{}return{sent:0,err:String(s&&s.message||s)}}finally{Qc.delete(e)}}var $h,jb,Ks,Ib,Fb,ue,el,xa,Nh,Hb,Eh,qb,Qc,rs=ee(()=>{Dt();St();qr();$h=typeof process<"u"&&process.env&&process.env.MC_TG_API_BASE||"https://api.telegram.org",jb=30,Ks=typeof process<"u"&&process.env&&process.env.MC_TG_PAUSE_MS!=null?Math.max(0,+process.env.MC_TG_PAUSE_MS):1200,Ib=15e3,Fb=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),ue=i(e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"esc");i(Ht,"tgApi");i(ts,"checkBot");i(Sa,"pullChats");el=null;i(Ph,"setUpdateSink");xa=new Map,Nh=new Map;i(ir,"pullFor");Hb=600*1e3,Eh=new Map;i(tl,"memberStatus");qb=["creator","administrator","member","restricted"];i(ns,"chatAccess");i(nl,"sendDocument");i(Bb,"formatItem");Qc=new Set;i(Fn,"notifyNew")});function Hh(){let e="";try{e=(0,Ta.userInfo)().username||""}catch{}return(0,ss.createHash)("sha256").update((0,Ta.hostname)()+"|"+e).digest("hex").slice(0,16)}function al(){try{return(0,Yt.existsSync)(sl)?JSON.parse((0,Yt.readFileSync)(sl,"utf8")):null}catch{return null}}function ol(e){try{(0,Yt.mkdirSync)(Te,{recursive:!0})}catch{}try{(0,Yt.writeFileSync)(sl,JSON.stringify(e,null,2))}catch{}}function Ub(){let e=al();if(e&&e.installedAt)return e.installedAt>=La?e.installedAt:(ol({...e,installedAt:La}),La);let t=Date.now();try{(0,Yt.existsSync)(Te)&&(t=Math.min(t,(0,Yt.statSync)(Te).birthtimeMs||t))}catch{}return t=Math.max(t,La),ol({...e||{},installedAt:t}),t}function qh(e){let t=al()||{};return t.key=String(e||"").trim(),ol(t),Ma()}function Vb(e,t=Date.now()){let n=String(e||"").trim();if(!n)return{ok:!1,why:"ключ не введён"};if(!jh)return{ok:!1,why:"проверка ключей ещё не включена — программа работает в пробном режиме"};let r=n.split(".");if(r.length!==3||r[0]!=="MC1")return{ok:!1,why:"это не похоже на ключ mediachrome — скопируй строку целиком, она начинается с MC1."};let s;try{s=(0,ss.createPublicKey)({key:Buffer.from(jh,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ — нужна переустановка"}}let o=!1;try{o=(0,ss.verify)(null,Buffer.from(r[0]+"."+r[1],"utf8"),s,Ih(r[2]))}catch{o=!1}if(!o)return{ok:!1,why:"подпись ключа не сошлась — ключ поддельный или повреждён при пересылке"};let a;try{a=JSON.parse(Ih(r[1]).toString("utf8"))}catch{a=null}if(!a||typeof a!="object")return{ok:!1,why:"ключ подписан верно, но его содержимое не читается"};let c={to:String(a.to||""),until:a.until||null,id:String(a.id||""),hw:a.hw||null};if(c.hw&&c.hw!==Hh())return{ok:!1,why:"ключ выдан для другого компьютера",info:c};if(c.until){let l=Date.parse(c.until+"T23:59:59");if(!Number.isFinite(l))return{ok:!1,why:"в ключе неразборчивая дата окончания",info:c};if(t>l)return{ok:!1,why:"срок лицензии истёк "+c.until,info:c,expired:!0}}return{ok:!0,why:"",info:c}}function Ma(e=Date.now()){let t=al()||{},n=Ub(),r=Math.floor((e-n)/864e5),s=Math.min(rl,Math.max(0,rl-r)),o=t.key?Vb(t.key,e):{ok:!1,why:""},a={installedAt:n,hasKey:!!t.key,machine:Hh(),enforced:Oh};if(o.ok)return{...a,ok:!0,mode:"licensed",daysLeft:null,why:"",to:o.info.to,until:o.info.until,keyId:o.info.id,locked:!!o.info.hw,keyWhy:""};let c=s<=0;return{...a,ok:!Oh||!c,mode:c?"expired":"trial",daysLeft:s,why:c?"пробный период ("+rl+" дней) закончился — нужен лицензионный ключ":"",keyWhy:t.key?o.why:""}}function os(e=Date.now()){let t=Ma(e);return t.ok?null:t.why}var Fh,Yt,ss,Ta,Oh,rl,jh,sl,La,Ih,Ws=ee(()=>{Fh=require("node:path"),Yt=require("node:fs"),ss=require("node:crypto"),Ta=require("node:os");vt();Oh=!0,rl=7,jh="MCowBQYDK2VwAyEA/0CvjwtjJF+3fBS+0ewj3O9wtXQBpDiheHRzJV/PXPw=",sl=(0,Fh.join)(Te,"license.json");i(Hh,"machineId");i(al,"readState");i(ol,"writeState");La=Date.parse("2026-09-22T00:00:00Z");i(Ub,"installedAt");i(qh,"setKey");Ih=i(e=>Buffer.from(String(e).replace(/-/g,"+").replace(/_/g,"/"),"base64"),"b64urlToBuf");i(Vb,"verifyKey");i(Ma,"licenseState");i(os,"blockedReason")});function Uh(){setInterval(Jb,60*1e3)}async function Gb(e,t=Kb){let n=[...new Set((e||[]).map(a=>String(a).trim()).filter(Boolean).map(a=>a.replace(/^https?:\/\//,"").replace(/\/.*$/,"")).filter(a=>a&&!a.startsWith("@")))],r=n.filter(a=>!/^t\.me$/i.test(a)),s=(r.length?r:n).slice(0,3);return s.length?(await Promise.all(s.map(a=>t(a)))).some(Boolean):!0}async function Kb(e){let t=new AbortController,n=setTimeout(()=>t.abort(),6e3);try{return await fetch("https://"+e+"/",{method:"HEAD",redirect:"follow",signal:t.signal}),!0}catch{return!1}finally{clearTimeout(n)}}function Yb(e,t){let n=e.schedule||{mode:"off"},r=e.lastRun||0,s=(t.getTime()-r)/6e4;if(n.mode==="minutes")return s>=_b(n)-.5;if(n.mode==="hours")return s>=(n.everyHours||6)*60-.5;if(n.mode==="daily"){let o=n.hour!=null?n.hour:9,a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),o,0,0,0);return t.getTime()>=a.getTime()&&r<a.getTime()}return!1}async function Jb(){if(os()||ut.size)return;let e=new Date;for(let t of wn()){if(ut.has(t.id))continue;let n=We(t.id);if(!n)continue;let r=Math.max(n.lastRun||0,Bh.get(n.id)||0);if(Yb({...n,lastRun:r},e)){if(!await Gb((n.config||{}).sites)){console.log(`[расписание] «${n.name}»: сети нет — откладываю (проверю через минуту)`);continue}ut.add(n.id),Ur(n.id,{name:n.name,by:"расписание"}),Bh.set(n.id,Date.now());try{let s=null,o=i((p,f)=>{try{let u=Pr(n.id,p,f,s);s=u.ts,Fn(n.id,{ts:u.ts}).catch(()=>{})}catch{}},"onProgress"),{rows:a,log:c}=await Br(n,o,{onStep:i(p=>Vr(n.id,p),"onStep"),stopping:i(()=>Gr(n.id),"stopping")}),l=Pr(n.id,a,c,s);try{await Fn(n.id,{ts:l.ts})}catch{}let d=await va(n.id,{foundNow:a.length,runTs:l.ts});d.length&&($o(n.id,l.ts,d.map(p=>({site:"(ИИ)",channel:"gemini",found:0,note:p}))),d.forEach(p=>console.log(`[расписание] «${n.name}»: ${p}`))),console.log(`[расписание] «${n.name}»: +${l.added} новых (всего ${l.total})`)}catch(s){console.error("[расписание] ошибка:",s&&s.message||s)}finally{ut.delete(n.id),Kr(n.id)}}}}var Wb,_b,Bh,Vh=ee(()=>{Dt();Fs();Hs();qs();ka();rs();Ws();i(Uh,"startScheduler");i(Gb,"netReady");i(Kb,"probeHost");Wb=10,_b=i(e=>Math.max(Wb,Math.min(720,+(e&&e.everyMinutes)||20)),"everyMinutes");i(Yb,"isDue");Bh=new Map;i(Jb,"tick")});function ll(){return"0.6.9"}function dl(e,t){let n=String(e||"").split(/[.\-+]/),r=String(t||"").split(/[.\-+]/);for(let s=0;s<Math.max(n.length,r.length);s++){let o=parseInt(n[s],10),a=parseInt(r[s],10),c=Number.isFinite(o)?o:0,l=Number.isFinite(a)?a:0;if(c!==l)return c<l?-1:1}return 0}function Ys(){try{return(0,Be.existsSync)(il)?JSON.parse((0,Be.readFileSync)(il,"utf8")):{}}catch{return{}}}function cl(e){try{(0,Be.mkdirSync)(Te,{recursive:!0}),(0,Be.writeFileSync)(il,JSON.stringify(e,null,2))}catch{}}async function Zb(e,t=15e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(e,{signal:n.signal,redirect:"follow",headers:{"Cache-Control":"no-cache"}});if(!s.ok)throw new Error("HTTP "+s.status);let o=await s.text();return JSON.parse(o)}finally{clearTimeout(r)}}async function ul(e={}){let t=Ys(),n=Date.now(),r=Number.isFinite(e.every)?e.every:Jh;if(!e.force&&t.checkedAt&&n-t.checkedAt<r)return _s();ot={...ot,phase:ot.phase==="downloading"?"downloading":"checking",err:""};try{let s=await Zb(Xb),o=String(s.version||"").trim();if(!o)throw new Error("в файле версии нет номера");cl({...t,checkedAt:n,err:"",latest:{version:o,notes:String(s.notes||""),url:String(s.setup||s.url||""),sha256:String(s.sha256||"").toLowerCase(),size:+s.size||0,at:String(s.at||"")}})}catch(s){cl({...t,checkedAt:n,err:String(s&&s.message||s).slice(0,200)})}return ot.phase==="checking"&&(ot={...ot,phase:"idle"}),_s()}function za(e){let t=(0,kn.join)(cr,"mediachrome-setup-"+e+".exe");try{return(0,Be.existsSync)(t)&&(0,Be.statSync)(t).size>0?t:""}catch{return""}}function _s(){let e=Ys(),t=ll(),n=e.latest||null,r=!!(n&&n.version&&dl(t,n.version)<0);return{current:t,latest:n?n.version:"",newer:r,notes:n?n.notes:"",size:n?n.size:0,checkedAt:e.checkedAt||0,err:e.err||"",canInstall:process.platform==="win32"&&r&&!!(n&&n.url),ready:r?!!za(n.version):!1,phase:ot.phase,got:ot.got,total:ot.total,liveErr:ot.err,installFailed:ey(e,t)}}async function Xh(){let t=Ys().latest;if(!t||!t.url)return{ok:!1,err:"не знаю, что качать — сначала проверка"};if(dl(ll(),t.version)>=0)return{ok:!1,err:"у вас и так последняя версия"};let n=za(t.version);if(n)return{ok:!0,file:n,cached:!0};if(ot.phase==="downloading")return{ok:!0,running:!0};ot={phase:"downloading",got:0,total:t.size||0,err:""};let r=(0,kn.join)(cr,"mediachrome-setup-"+t.version+".part");try{(0,Be.mkdirSync)(cr,{recursive:!0});for(let f of(0,Be.readdirSync)(cr))if(!f.includes(t.version))try{(0,Be.rmSync)((0,kn.join)(cr,f),{force:!0})}catch{}let s=new AbortController,o=await fetch(t.url,{signal:s.signal,redirect:"follow"});if(!o.ok)throw new Error("HTTP "+o.status);let a=+o.headers.get("content-length")||t.size||0;ot={...ot,total:a};let c=(0,Wh.createHash)("sha256"),l=new Aa.Transform({transform(f,u,h){c.update(f),ot={...ot,got:ot.got+f.length},h(null,f)}});await(0,Yh.pipeline)(Aa.Readable.fromWeb(o.body),l,(0,Be.createWriteStream)(r));let d=c.digest("hex");if(t.sha256&&d!==t.sha256){try{(0,Be.rmSync)(r,{force:!0})}catch{}throw new Error("файл скачался испорченным (отпечаток не сошёлся) — попробуйте ещё раз")}let p=(0,kn.join)(cr,"mediachrome-setup-"+t.version+".exe");try{(0,Be.rmSync)(p,{force:!0})}catch{}return(0,Be.renameSync)(r,p),ot={phase:"ready",got:ot.got,total:a,err:""},{ok:!0,file:p}}catch(s){try{(0,Be.rmSync)(r,{force:!0})}catch{}let o=String(s&&s.message||s).slice(0,200);return ot={phase:"error",got:0,total:0,err:o},{ok:!1,err:o}}}function pl(e={}){if(e.busy)return{ok:!1,err:"сейчас идёт сбор — обновление подождёт до его конца"};let n=Ys().latest,r=n&&za(n.version);return r?process.platform!=="win32"&&!e.spawnFn?{ok:!1,err:"установщик есть только для Windows"}:{ok:!0,file:r,version:n.version}:{ok:!1,err:"установщик ещё не скачан"}}function Zh(e={}){let t=pl(e);if(!t.ok)return t;let n=(0,kn.join)(cr,"setup-"+t.version+".log");try{(0,Be.rmSync)(n,{force:!0})}catch{}cl({...Ys(),tried:{version:t.version,from:ll(),at:Date.now(),log:n}});try{let r=(e.spawnFn||_h.spawn)(t.file,["/SILENT","/NOCANCEL","/RESTARTAPPLICATIONS","/LOG="+n],{detached:!0,stdio:"ignore"});r&&r.unref&&r.unref()}catch(r){return{ok:!1,err:String(r&&r.message||r).slice(0,200)}}return{ok:!0,version:t.version}}function ey(e,t){let n=e.tried;if(!n||!n.version||dl(t,n.version)>=0||!(Date.now()-(n.at||0)<Qb))return null;let r=[],s=!1;try{if(n.log&&(0,Be.existsSync)(n.log)){s=!0;let o=(0,Be.readFileSync)(n.log,"utf8").replace(/^\uFEFF/,"").split(/\r?\n/).map(c=>c.trim()).filter(Boolean),a=o.filter(c=>/error|fail|abort|denied|in use|cannot|unable|exception|ошибк|не удалось|отказ|занят/i.test(c));r=(a.length?a:o).slice(-8).map(c=>c.slice(0,300))}}catch{}return{version:n.version,from:n.from||"",at:n.at,hasLog:s,lines:r,file:za(n.version)||""}}var kn,Be,Gh,Kh,Wh,_h,Aa,Yh,Xb,il,cr,Jh,ot,Qb,Qh=ee(()=>{kn=require("node:path"),Be=require("node:fs"),Gh=require("node:url"),Kh=require("node:path"),Wh=require("node:crypto"),_h=require("node:child_process"),Aa=require("node:stream"),Yh=require("node:stream/promises");vt();Xb=process.env.MC_UPDATE_URL||"https://raw.githubusercontent.com/Tim2190/mediachrome-dist/main/update.json",il=(0,kn.join)(Te,"update-state.json"),cr=(0,kn.join)(Te,"update"),Jh=24*3600*1e3;i(ll,"currentVersion");i(dl,"cmpVer");i(Ys,"readState");i(cl,"writeState");ot={phase:"idle",got:0,total:0,err:""};i(Zb,"getJson");i(ul,"checkUpdate");i(za,"readyFile");i(_s,"updateState");i(Xh,"downloadUpdate");i(pl,"installPrecheck");i(Zh,"installUpdate");Qb=7*Jh;i(ey,"installFailed")});function Da(){return`<!doctype html>\r
<html lang="ru">\r
<head>\r
<meta charset="utf-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1">\r
<title>mediachrome — кабинет</title>\r
<!-- ЗНАЧОК ВКЛАДКИ И ЗНАК В ШАПКЕ — ОДНА И ТА ЖЕ КАРТИНКА, вшитая прямо в\r
     страницу. Отдельным файлом её держать нельзя: у сервера такого маршрута\r
     нет (браузер получал бы 404 на каждой загрузке), а файл для показа\r
     открывается вообще без сервера — запрос ушёл бы в никуда.\r
     Строка ОДНА на оба места: разъедься они, вкладка и шапка показывали бы\r
     разные знаки, и заметил бы это человек. -->\r
<link rel="icon" id="favicon" href="data:image/png;base64,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">\r
<style>\r
  /* ПАЛИТРА. Была базовая «админка»: чистый синий #3b82f6, чистый зелёный\r
     #22c55e, чистый красный — на тёмном фоне такие цвета выглядят кислотно и\r
     дерутся друг с другом. Взяты приглушённые slate-тона: фон глубокий\r
     (#0f172a), карточка на ступень светлее (#1e293b), бордер мягкий (#334155),\r
     а акценты — индиго / изумруд / коралл. Все цвета живут ТОЛЬКО здесь:\r
     графики берут их через getComputedStyle, поэтому смена палитры — правка\r
     этих строк, а не поиск шестнадцатеричных кодов по всему файлу. */\r
  /* ДВЕ ТЕМЫ. Просьба пользователя 22 сентября 2026: «сделай тёмную (щас\r
     имеется) и светлую, тумблер в верхней строке».\r
     Тёмная осталась ТОЧНО ТОЙ ЖЕ и по-прежнему стоит по умолчанию: человек\r
     работает в ней каждый день, и менять её молча при обновлении нельзя.\r
     Светлая живёт в [data-theme="light"] и переопределяет ТОЛЬКО переменные —\r
     ни одно правило ниже не знает, какая тема включена. Это не аккуратность\r
     ради аккуратности: правило, где цвет вписан прямо, в одной из тем окажется\r
     нечитаемым, и заметит это человек, а не я.\r
     Системную тему НЕ подхватываем намеренно: у пользователя сейчас тёмная, и\r
     обновление, которое молча включит светлую, выглядит как поломка. */\r
  :root{\r
    --bg:#0f172a; --bg2:#0b1120; --card:#1e293b; --panel:#172033; --line:#334155; --line2:#293548;\r
    --txt:#f1f5f9; --txt2:#cbd5e1; --mut:#9ca3af; --dim:#64748b;\r
    --acc:#6366f1; --acc-hi:#4f46e5; --acc-soft:rgba(99,102,241,.16); --acc-line:rgba(99,102,241,.45);\r
    --ok:#10b981; --neg:#f43f5e; --new:#f59e0b; --violet:#8b5cf6; --cyan:#22d3ee;\r
    /* Текстовые оттенки акцентов: на тёмном фоне читается светлый тон, на\r
       светлом — тёмный. Одно имя, два значения — поэтому ссылки и «зелёные\r
       числа» остаются читаемыми в обеих темах. */\r
    --link:#a5b4fc; --link-hi:#c7d2fe; --ok-txt:#6ee7b7; --neg-txt:#fda4af; --warn:#fbbf24;\r
    --head-bg:rgba(15,23,42,.82); --tip-bg:#0b1120; --sec-hi:#1f2a3f;\r
    --row-hi:rgba(148,163,184,.045); --track:rgba(148,163,184,.10);\r
    --radius:14px; --radius-sm:10px;\r
    --shadow:0 1px 2px rgba(0,0,0,.28), 0 8px 24px -12px rgba(0,0,0,.55);\r
    --shadow-hi:0 1px 2px rgba(0,0,0,.2), 0 14px 28px -16px rgba(0,0,0,.6);\r
  }\r
  /* СВЕТЛАЯ. Фон не белый, а на тон холоднее (#f5f7fa): белые карточки на белом\r
     фоне не отделяются ничем, кроме рамки, и панель выглядит плоским листом.\r
     Акцент взят на ступень темнее тёмного варианта (#4f46e5 против #6366f1):\r
     индиго 500 на белом даёт мало контраста для текста и границ. */\r
  :root[data-theme="light"]{\r
    --bg:#f5f7fa; --bg2:#ffffff; --card:#ffffff; --panel:#f8fafc; --line:#d7dce5; --line2:#e6eaf0;\r
    --txt:#0f172a; --txt2:#334155; --mut:#5b6678; --dim:#8a94a6;\r
    --acc:#4f46e5; --acc-hi:#4338ca; --acc-soft:rgba(79,70,229,.10); --acc-line:rgba(79,70,229,.40);\r
    --ok:#059669; --neg:#e11d48; --new:#d97706; --violet:#7c3aed; --cyan:#0891b2;\r
    --link:#4338ca; --link-hi:#312e81; --ok-txt:#047857; --neg-txt:#be123c; --warn:#b45309;\r
    --head-bg:rgba(255,255,255,.86); --tip-bg:#ffffff; --sec-hi:#eef1f6;\r
    --row-hi:rgba(15,23,42,.035); --track:rgba(15,23,42,.07);\r
    --shadow:0 1px 2px rgba(15,23,42,.05), 0 8px 24px -14px rgba(15,23,42,.22);\r
    --shadow-hi:0 1px 2px rgba(15,23,42,.06), 0 14px 28px -14px rgba(15,23,42,.26);\r
  }\r
  /* РАЗМЕР ШРИФТА. Просьба пользователя 18 сентября 2026: «шрифты больше,\r
     подсказки яснее». Было 14px — размер, привычный разработчику в админке, а\r
     кабинет читает человек, который смотрит в него часами и не программист.\r
     Базовый поднят до 15.5px, подписи полей и подсказки — с 12 до 13: именно\r
     ими написано ВСЁ, что объясняет настройку, и мелкими их никто не читает. */\r
  *{box-sizing:border-box;} body{margin:0;background:var(--bg);color:var(--txt);font:15.5px/1.6 ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;-webkit-font-smoothing:antialiased;}\r
  /* СТАРЫЙ БАГ, найден 3 сентября 2026 при вёрстке переключателя периода:\r
     атрибут hidden браузер реализует правилом [hidden]{display:none}, а наши\r
     .row{display:flex} и .charts{display:grid} — это КЛАСС, он специфичнее и\r
     побеждает. Из-за этого «Период YouTube» показывался при снятой галочке, а\r
     скрытые строки настроек не прятались вовсе. Одно правило чинит все места. */\r
  [hidden]{display:none!important;}\r
  /* ССЫЛКИ. Правила на них не было вовсе — значит служебные ссылки («проверить\r
     механизмы», «ввести ключ») рисовались СИНИМ ПО УМОЛЧАНИЮ БРАУЗЕРА, то есть\r
     тёмно-синим на тёмном фоне: разглядеть их было почти нельзя. Вылезло это на\r
     снимке кабинета, а не в коде. */\r
  a{color:var(--link);text-decoration:none;} a:hover{color:var(--link-hi);text-decoration:underline;}\r
  header{padding:14px clamp(16px,2.2vw,40px);border-bottom:1px solid var(--line2);display:flex;align-items:center;gap:12px;position:sticky;top:0;background:var(--head-bg);backdrop-filter:blur(12px);z-index:5;}\r
  header b{font-size:16px;letter-spacing:-.01em;} .grow{flex:1;}\r
  .brand{display:flex;align-items:center;gap:9px;color:var(--txt);text-decoration:none;padding:4px 8px;margin-left:-8px;border-radius:var(--radius-sm);transition:background .15s;}\r
  .brand:hover{background:var(--acc-soft);}\r
  .brand .mark{width:22px;height:22px;flex:none;}\r
  /* ФОНОВАЯ ТЕКСТУРА — водяной знак программы (картинка прислана владельцем).\r
     Хранится БЕЗ альфа-канала намеренно: прозрачность в WebP стоит втрое\r
     дороже (замер: 288 КБ с альфой против 36 КБ без неё при той же ширине),\r
     а нужную «прозрачность» даёт РЕЖИМ НАЛОЖЕНИЯ, а не канал:\r
       тёмная тема  — screen:   тёмный фон картинки не добавляет ничего,\r
                                светлые дорожки чуть светлеют;\r
       светлая тема — invert + multiply: картинка становится светлой с тёмными\r
                                дорожками, белое не красит, дорожки темнят.\r
     Так один файл честно работает в ОБЕИХ темах — правило проекта «ни одно\r
     правило не знает, какая тема включена» тут соблюдено переменными. */\r
  #tex{position:fixed;inset:0;z-index:0;pointer-events:none;\r
    background:url(data:image/webp;base64,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) center/cover no-repeat;\r
    opacity:.20;mix-blend-mode:screen;}\r
  :root[data-theme="light"] #tex{filter:invert(1);opacity:.06;mix-blend-mode:multiply;}\r
  /* Содержимое — НАД текстурой. Без этого шапка и карточки оказались бы под\r
     ней, и текст поехал бы по яркости. */\r
  header, main, .pagefoot{position:relative;z-index:1;}\r
  /* ПОДВАЛ ВЫРАВНЕН ПО СОДЕРЖИМОМУ СТРАНИЦЫ, а не сам по себе. Было\r
     \`max-width:1100px;margin:auto\` при \`main\`, который тянется на всю ширину:\r
     на широком экране полоска подвала висела уже карточек и смещённая, а текст\r
     внутри был прижат влево — то есть не совпадал ни с краем страницы, ни с её\r
     серединой. Отступы по бокам те же, что у \`main\`, поэтому линия ложится\r
     ровно под карточки; содержимое центрируется явно. */\r
  .pagefoot{margin:34px clamp(14px,2.2vw,40px) 22px;padding:14px 0 0;border-top:1px solid var(--line2);color:var(--txt2);font-size:13px;display:flex;justify-content:center;gap:8px;flex-wrap:wrap;align-items:center;text-align:center;}\r
  .pagefoot a{color:var(--txt2);}  .pagefoot a:hover{color:var(--acc);}\r
  /* ХЛЕБНЫЕ КРОШКИ — рабочая навигация, а не подпись. Звено, на которое можно\r
     нажать, выглядит как ссылка и подсвечивается; текущее место — обычным\r
     текстом. До этой правки «кабинет · Мониторинг» был серой надписью, и\r
     догадаться, что первое слово нажимается, было неоткуда. */\r
  .crumbs{display:flex;align-items:center;gap:7px;font-size:13px;color:var(--mut);min-width:0;}\r
  .crumbs a{color:var(--link);text-decoration:none;border-radius:999px;padding:3px 10px;background:var(--acc-soft);white-space:nowrap;transition:background .15s,color .15s;}\r
  .crumbs a:hover{background:var(--acc-line);color:#fff;}\r
  .crumbs .sep{color:var(--dim);}\r
  .crumbs .here{color:var(--txt2);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
  @media (max-width:640px){ .crumbs .here{max-width:40vw;} }\r
  /* ИНДИКАТОР СБОРА в шапке. Зелёный, а не тревожный: идущий сбор — это\r
     нормальная работа, а не авария. Полоска прогресса под текстом вместо\r
     отдельного элемента — в шапке нет места на вторую строку. */\r
  /* flex:none — индикатор не ужимается. Он появился, потому что человек\r
     спросил «что происходит», и обрезанный до «0 из 40 · …» ответ на этот\r
     вопрос не отвечает. Ужиматься должна строка состояния рядом: она\r
     необязательная и живёт секунды. */\r
  .runbadge{display:flex;align-items:center;gap:10px;padding:5px 7px 5px 12px;border-radius:999px;flex:none;\r
    background:rgba(16,185,129,.10);border:1px solid rgba(16,185,129,.35);}\r
  .runbadge .rtxt{font-size:12.5px;color:var(--txt2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-variant-numeric:tabular-nums;}\r
  .runbadge .stopbtn{padding:4px 11px;font-size:12px;font-weight:600;background:var(--panel);color:var(--txt2);border:1px solid var(--line);border-radius:999px;}\r
  .runbadge .stopbtn:hover{background:rgba(244,63,94,.14);border-color:rgba(244,63,94,.45);color:var(--neg-txt);}\r
  /* Вертушка говорит «программа жива» даже когда счётчик стоит: медленный сайт\r
     держит один источник по полминуты, и без движения это выглядит как зависон. */\r
  .runbadge .spin{width:12px;height:12px;flex:none;border-radius:50%;\r
    border:2px solid rgba(16,185,129,.30);border-top-color:var(--ok);animation:mcspin .8s linear infinite;}\r
  @keyframes mcspin{to{transform:rotate(360deg)}}\r
  @media (max-width:640px){\r
    /* На телефоне индикатор снова ужимается: иначе шапка (знак + крошки +\r
       индикатор + тумблер) не влезает в 390px и страница едет вбок. Текст\r
       внутри обрезается многоточием, а вертушка и кнопка остаются целыми —\r
       это и есть самое важное. */\r
    .runbadge{padding:4px 5px 4px 9px;gap:7px;flex:0 1 auto;min-width:0;}\r
    /* Слово «mediachrome» на телефоне уступает место: знак остаётся и\r
       по-прежнему ведёт в кабинет. */\r
    .brand b{display:none;} .brand{margin-left:-4px;padding:4px;}\r
    /* На телефоне в шапке помещается либо название проекта, либо цифры.\r
       Цифры важнее: «идёт сбор» и так видно по вертушке. */\r
    .runbadge .rtxt{max-width:44vw;font-size:11.5px;}\r
    .runbadge .rname{display:none;}\r
    .runbadge .stopbtn{padding:4px 9px;font-size:11px;}\r
  }\r
  /* ВЫКЛЮЧАТЕЛЬ ПОДСКАЗОК. Прячем ровно те классы, чьё единственное назначение\r
     — объяснять (.why и .hint). Строки состояния (.tag) не трогаем: «запрос: …\r
     · вручную · период не задан» это не подсказка, а то, что сейчас настроено,\r
     и прятать его значит прятать факты о проекте. */\r
  :root[data-hints="off"] .why, :root[data-hints="off"] .hint{display:none!important;}\r
  :root[data-hints="off"] #hints{opacity:.45;}\r
  /* СТРАНИЦА ИНСТРУКЦИИ. Ширина ограничена — длинная строка через весь монитор\r
     нечитаема, а это единственное место в кабинете, где текст читают подряд. */\r
  .help{max-width:820px;margin:0 auto;padding:30px clamp(18px,3vw,44px) 40px;line-height:1.7;}\r
  .help h1{font-size:26px;margin:0 0 10px;letter-spacing:-.02em;}\r
  .help h2{font-size:17px;margin:30px 0 10px;padding-top:18px;border-top:1px solid var(--line2);letter-spacing:-.01em;}\r
  .help h2:first-of-type{border-top:0;padding-top:0;}\r
  .help p{margin:0 0 12px;color:var(--txt2);}\r
  .help .lead{font-size:16px;color:var(--txt);}\r
  .help ul,.help ol{margin:0 0 12px;padding-left:22px;color:var(--txt2);}\r
  .help li{margin:0 0 8px;}\r
  .help code{background:var(--panel);border:1px solid var(--line2);border-radius:6px;padding:1px 6px;font-size:13px;}\r
  .help b{color:var(--txt);}\r
  /* Оговорки — то, чего программа НЕ делает. Им отдельная рамка нарочно: это\r
     самое важное в инструкции и то, что чаще всего читают по диагонали. */\r
  .help .warn{border-left:3px solid var(--new);background:var(--panel);\r
    border-radius:0 var(--radius-sm) var(--radius-sm) 0;padding:12px 16px;margin:0 0 14px;}\r
  /* Квадратная кнопка со значком (тема). Своя, а не button.sec: у той есть\r
     горизонтальные поля под текст, и значок в ней висит не по центру. */\r
  .iconbtn{width:36px;height:36px;padding:0;display:flex;align-items:center;justify-content:center;font-size:16px;\r
    background:var(--panel);border:1px solid var(--line);color:var(--txt2);border-radius:var(--radius-sm);flex:none;}\r
  .iconbtn:hover{background:var(--sec-hi);border-color:var(--dim);color:var(--txt);}\r
  .iconbtn.lang{width:auto;min-width:42px;padding:0 10px;font-size:12px;font-weight:700;letter-spacing:.04em;}\r
  a.iconbtn{text-decoration:none;font-weight:700;}\r
  a.iconbtn:hover{text-decoration:none;}\r
  /* На телефоне в шапке место дорого: инструкция и подсказки уходят, тема и\r
     язык остаются. Инструкция при этом доступна по адресу #/help. */\r
  @media (max-width:640px){ #hints{display:none;} }\r
  /* Видимый фокус с клавиатуры. Обходиться без него — значит сделать кабинет\r
     непроходимым для того, кто работает табуляцией. */\r
  a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible,summary:focus-visible{\r
    outline:2px solid var(--acc);outline-offset:2px;}\r
  /* Анимации — вежливость, а не обязанность: кому они мешают, тот их выключил\r
     в системе, и наше дело это уважать. */\r
  @media (prefers-reduced-motion:reduce){ *{animation-duration:.01ms!important;transition-duration:.01ms!important;} }\r
  /* ШИРИНА. Пользователь просил «по ширине браузера, а то слева и справа пустые\r
     пространства»: раньше стояло max-width:1100px, и на широком мониторе треть\r
     экрана уходила в пустоту, а графики жались. Ограничения по ширине нет —\r
     есть только поля, которые растут вместе с окном. */\r
  main{width:100%;margin:0;padding:clamp(14px,2.2vw,40px);}\r
  /* На узком экране кабинет читается с телефона: пользователь заходит на\r
     127.0.0.1 из смартфона в той же сети — так и планировалось. Значит поля\r
     ввода не должны быть 16px (иначе iOS Safari зумит страницу при фокусе),\r
     а горизонтальные отступы уменьшаются, чтобы карточки не «дышали» пусто. */\r
  @media (max-width:640px){\r
    main{padding:10px;}\r
    .pagefoot{margin-left:10px;margin-right:10px;}   /* те же поля, что у main */\r
    .card{padding:12px;margin-bottom:10px;border-radius:8px;}\r
    header{padding:10px 12px;}\r
    header b{font-size:15px;}\r
    label{font-size:13px;}\r
    textarea,input,select{font-size:16px;padding:9px 11px;}\r
    button{padding:9px 13px;font-size:15px;}\r
    .blk{padding:13px 14px;}\r
    .actions{gap:6px;}\r
    .row{gap:8px;}\r
    .row>div{min-width:100%;}\r
  }\r
  /* «Интерфейс должен дышать»: отступы карточек подняты с 14 до 22, радиус с 10\r
     до 14, добавлена мягкая тень — на плоском тёмном фоне она и отделяет\r
     карточку от подложки, без резкой рамки. */\r
  .card{background:var(--card);border:1px solid var(--line2);border-radius:var(--radius);padding:22px;margin-bottom:16px;box-shadow:var(--shadow);}\r
  label{display:block;color:var(--txt2);font-size:13px;margin:12px 0 5px;font-weight:500;}\r
  textarea,input,select{width:100%;background:var(--bg2);color:var(--txt);border:1px solid var(--line);border-radius:var(--radius-sm);padding:10px 12px;font:inherit;transition:border-color .15s,box-shadow .15s;}\r
  textarea:focus,input:focus,select:focus{outline:0;border-color:var(--acc);box-shadow:0 0 0 3px var(--acc-soft);}\r
  textarea{resize:vertical;min-height:70px;} .row{display:flex;gap:14px;flex-wrap:wrap;} .row>div{flex:1;min-width:140px;}\r
  .check{display:flex;align-items:center;gap:8px;color:var(--txt2);} .check input{width:auto;}\r
  button{background:var(--acc);color:#fff;border:1px solid transparent;border-radius:var(--radius-sm);padding:9px 16px;font:inherit;font-weight:600;cursor:pointer;transition:background .15s,border-color .15s,opacity .15s;}\r
  button:hover{background:var(--acc-hi);}\r
  button.sec{background:var(--panel);color:var(--txt2);border-color:var(--line);} button.sec:hover{background:var(--sec-hi);border-color:var(--dim);}\r
  button.dng{background:rgba(244,63,94,.12);color:var(--neg-txt);border-color:rgba(244,63,94,.3);} button:disabled{opacity:.45;cursor:default;}\r
  .actions{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px;}\r
  /* ПРОЕКТЫ СЕТКОЙ (22 сентября 2026, просьба пользователя: «давай проекты\r
     сеткой класть, 3-4 в ряду, адаптивно»). Число колонок не задано числом:\r
     auto-fill с минимумом 300px сам берёт четыре на широком мониторе, три на\r
     ноутбуке, одну на телефоне. Зашей мы «четыре» — на 1000px карточки стали бы\r
     по 240px, и запрос с расписанием в них не поместился бы. */\r
  .pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;align-items:stretch;margin-bottom:16px;}\r
  .pgrid>*{min-width:0;}\r
  .pcard{display:flex;flex-direction:column;gap:10px;cursor:pointer;margin:0;height:100%;\r
    transition:border-color .15s,transform .15s,box-shadow .15s;position:relative;overflow:hidden;}\r
  /* Полоска акцента сверху появляется при наведении: карточка отзывается на\r
     курсор, но в покое сетка остаётся спокойной, без десятка цветных линий. */\r
  .pcard::before{content:'';position:absolute;inset:0 0 auto;height:3px;background:var(--acc);opacity:0;transition:opacity .15s;}\r
  .pcard:hover{border-color:var(--acc-line);transform:translateY(-2px);box-shadow:var(--shadow-hi);}\r
  .pcard:hover::before{opacity:1;}\r
  .pcard .ptitle{font-weight:600;font-size:16px;letter-spacing:-.01em;display:flex;align-items:center;gap:8px;flex-wrap:wrap;}\r
  .pcard .pq{color:var(--txt2);font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
  .pcard .pfoot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:10px;\r
    border-top:1px solid var(--line2);padding-top:10px;font-size:12px;color:var(--mut);}\r
  /* Числа проекта — сеткой «значение над подписью», а не строкой чипов: четыре\r
     чипа в узкой карточке переносились по одному на строку и занимали пол-карты. */\r
  .pnums{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}\r
  .pnums div{min-width:0;} .pnums .v{font-size:19px;font-weight:600;color:var(--txt);font-variant-numeric:tabular-nums;line-height:1.1;}\r
  .pnums .k{font-size:11px;color:var(--dim);margin-top:2px;}\r
  /* Расписание: точка «живой / вручную». Видно с одного взгляда по всей сетке,\r
     какой проект собирает сам, а какой ждёт нажатия. */\r
  .pdot{display:inline-flex;align-items:center;gap:6px;}\r
  .pdot::before{content:'';width:7px;height:7px;border-radius:999px;background:var(--dim);flex:none;}\r
  .pdot.on::before{background:var(--ok);box-shadow:0 0 0 3px rgba(16,185,129,.16);}\r
  /* Пустой кабинет — первое, что видит новый человек. Строчка серым текстом на\r
     этом месте читается как «тут ничего нет и непонятно что делать»; экран с\r
     объяснением и одной кнопкой отвечает на вопрос «а что дальше». */\r
  /* Модуль «Мониторинг репутации» (2ГИС) */\r
  .repplaque .reph,.card .reph{display:flex;gap:12px;align-items:flex-start;}\r
  .reph .em{font-size:24px;line-height:1;}\r
  .repminis{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:6px 16px;margin-top:10px;}\r
  .repmini{display:flex;justify-content:space-between;gap:10px;font-size:13px;border-bottom:1px solid var(--line2);padding:4px 0;min-width:0;}\r
  .repmini span:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
  .btnlink{display:inline-block;background:var(--acc);color:#fff;padding:8px 14px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px;}\r
  .repdist{display:grid;grid-template-columns:70px 1fr 90px;gap:10px;align-items:center;margin:6px 0;font-size:13px;color:var(--warn);}\r
  /* Строки «подтверждённые / без подтверждения»: подпись длинная, справа три\r
     числа — колонки шире, чем у звёзд, и подпись своим цветом, а не звёздным. */\r
  .repdist.v{grid-template-columns:minmax(130px,auto) 1fr minmax(200px,auto);color:var(--txt);}\r
  .repdist.v .tag{white-space:nowrap;}\r
  @media (max-width:640px){ .repdist.v{grid-template-columns:1fr;gap:4px;} }\r
  .repdist .bar{height:10px;background:var(--line2);border-radius:6px;overflow:hidden;}\r
  .repdist .bar i{display:block;height:100%;border-radius:6px;}\r
  .repcloud{line-height:1.5;text-align:center;padding:8px 0;}\r
  .repcloud span{display:inline-block;margin:2px 8px;font-weight:600;cursor:default;}\r
  .repcloud .pos{color:var(--ok);} .repcloud .neg{color:var(--neg);} .repcloud .mid{color:var(--txt2);}\r
  .reppic{display:grid;grid-template-columns:1fr 1fr;gap:14px;}\r
  @media (max-width:640px){ .reppic{grid-template-columns:1fr;} }\r
  .repcol{border:1px solid var(--line);border-radius:10px;padding:8px 10px;min-width:0;}\r
  .repcolh{font-weight:700;margin-bottom:2px;} .repcolh.pos{color:var(--ok);} .repcolh.neg{color:var(--neg);}\r
  .repbal{display:flex;height:10px;border-radius:5px;overflow:hidden;background:var(--line);}\r
  .repbal .p{background:var(--ok);} .repbal .n{background:var(--neg);}\r
  .repok{color:var(--ok);border-color:var(--ok);}\r
  /* Реакция на негатив и ответ фирмы под отзывом. */\r
  .repctl{display:flex;flex-wrap:wrap;gap:8px 18px;align-items:center;margin:8px 0 4px;}\r
  .repctl .win{margin:0;align-items:center;}\r
  .repneg{display:flex;flex-wrap:wrap;align-items:center;gap:6px 8px;}\r
  .repans{margin-top:8px;padding:8px 12px;border-left:3px solid var(--ok);background:var(--line2);border-radius:0 8px 8px 0;font-size:14px;}\r
  .repansh{font-size:12px;font-weight:600;color:var(--ok-txt);margin-bottom:4px;}\r
  .repwait{margin-top:8px;font-size:13px;color:var(--neg-txt);font-weight:600;}\r
  .repansb{margin-top:8px;background:transparent;color:var(--ok-txt);border:1px solid var(--ok);border-radius:14px;padding:3px 12px;font-size:13px;cursor:pointer;}\r
  .repansb:hover{background:var(--line2);}\r
  /* Графики «во времени»: строка «один столбик = …», легенда, выбранный столбик. */\r
  .tcap{font-size:13px;color:var(--txt2);line-height:1.5;margin:8px 0 10px;}\r
  .tcap .tag{font-size:12px;}\r
  .tlegend{display:flex;flex-wrap:wrap;gap:6px 16px;margin:6px 0 2px;font-size:12px;color:var(--txt2);}\r
  .tlegend i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-right:6px;vertical-align:-1px;}\r
  .tsel{font-size:13px;color:var(--txt);min-height:1.4em;margin:4px 0;}\r
  g.tb.on rect[fill="transparent"]{fill:rgba(148,163,184,.12);}\r
  .repstar{letter-spacing:1px;} .repstar.pos{color:var(--ok);} .repstar.mid{color:var(--warn);} .repstar.neg{color:var(--neg);}\r
  /* Сравнение объектов: лучшее и худшее в столбце — цветом текста, не заливкой. */\r
  .cmptbl{max-height:none;} .cmptbl td,.cmptbl th{white-space:nowrap;} .cmptbl td:first-child{white-space:normal;min-width:160px;}\r
  .cmptbl td.n{text-align:right;font-variant-numeric:tabular-nums;} .cmptbl th.n{text-align:right;}\r
  .cmptbl td.best{color:var(--ok-txt);font-weight:700;} .cmptbl td.worst{color:var(--neg-txt);font-weight:700;}\r
  .cmptbl a{color:inherit;}\r
  /* Всплески отзывов: эпизод — плашка с признаками «сейчас / обычно». */\r
  .spike{border:1px solid var(--line);border-left:4px solid var(--warn);border-radius:0 10px 10px 0;padding:10px 14px;margin:8px 0;}\r
  .spike.neg{border-left-color:var(--neg);} .spike.pos{border-left-color:var(--ok);}\r
  .spike h4{margin:0 0 6px;font-size:15px;} .spike .sig{display:flex;flex-wrap:wrap;gap:4px 18px;font-size:13px;color:var(--txt2);}\r
  .spike .sig b{color:var(--txt);font-variant-numeric:tabular-nums;}\r
  .repnote{font-size:14px;line-height:1.55;margin:10px 0 0;padding:10px 14px;background:var(--line2);border-radius:10px;}\r
  .ntfy{display:grid;gap:8px;margin-top:6px;} .ntfy .check{margin:0;flex-wrap:wrap;}\r
  .ntfy select{width:auto;max-width:150px;padding:4px 8px;}\r
  @media (max-width:640px){ .repdist{grid-template-columns:56px 1fr 70px;} }\r
  .empty{text-align:center;padding:46px 24px;}\r
  .empty .em{font-size:34px;line-height:1;margin-bottom:12px;}\r
  .empty h3{margin:0 0 8px;font-size:17px;font-weight:600;}\r
  .empty p{margin:0 auto 18px;max-width:520px;font-size:14px;line-height:1.6;}\r
  .badge{background:var(--new);color:#1a1206;border-radius:20px;padding:1px 9px;font-size:12px;font-weight:700;}\r
  .muted{color:var(--mut);} .tag{color:var(--mut);font-size:13px;line-height:1.5;}\r
  /* ДВЕ КОЛОНКИ НАСТРОЕК. Просьба пользователя: слева то, ГДЕ ищем (сайты,\r
     телеграм, фейсбук, YouTube), справа — КАК и что с этим делать (период,\r
     частота прогонов, ИИ, рассылка в бот). Одна длинная простыня из двух\r
     десятков полей заставляла листать туда-сюда и терять место.\r
     На узком экране колонка одна: на телефоне два столбца по 40% ширины\r
     нечитаемы, а кабинет открывают и с телефона. */\r
  .cols2{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start;margin-top:16px;}\r
  @media (max-width:1000px){ .cols2{grid-template-columns:1fr;gap:14px;} }\r
  .colstack{display:flex;flex-direction:column;gap:16px;min-width:0;}\r
  .blk{background:var(--panel);border:1px solid var(--line2);border-radius:var(--radius);padding:16px 18px;}\r
  .blk h4{margin:0;font-size:16px;font-weight:600;letter-spacing:-.01em;display:flex;align-items:center;gap:8px;}\r
  .blk .why{color:var(--mut);font-size:13px;line-height:1.5;margin:6px 0 2px;}\r
  .blk>label:first-of-type{margin-top:8px;}\r
  /* «Настройки проекта» — это дверь, за которой три десятка полей, а выглядела\r
     она серой строчкой текста. Теперь это кнопка со стрелкой, которая\r
     поворачивается: видно и что нажимается, и открыто оно сейчас или закрыто. */\r
  .setsum{cursor:pointer;margin-top:12px;font-size:14px;font-weight:600;color:var(--txt2);list-style:none;\r
    display:inline-flex;align-items:center;gap:9px;padding:8px 15px;border:1px solid var(--line);\r
    border-radius:999px;background:var(--panel);transition:background .15s,border-color .15s,color .15s;}\r
  .setsum::-webkit-details-marker{display:none;}\r
  .setsum::after{content:'⌄';font-size:15px;line-height:1;color:var(--dim);transform:translateY(-2px);transition:transform .18s;}\r
  details[open]>.setsum::after{transform:rotate(180deg) translateY(-1px);}\r
  .setsum:hover{background:var(--sec-hi);border-color:var(--dim);color:var(--txt);}\r
  /* Таблицы могут быть шире экрана (много колонок с длинными адресами и заметками):\r
     оборачиваем в .wrap с overflow-x auto, чтобы страница не расползалась горизонтально. */\r
  table{width:100%;border-collapse:collapse;font-size:13px;} th,td{text-align:left;padding:9px 10px;border-bottom:1px solid var(--line2);vertical-align:top;}\r
  tbody tr:last-child td{border-bottom:0;}\r
  tbody tr{transition:background .12s;} tbody tr:hover{background:var(--row-hi);}\r
  .wrap{overflow-x:auto;}\r
  th{color:var(--dim);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.06em;}\r
  td a{color:var(--link);text-decoration:none;} td a:hover{color:var(--link-hi);text-decoration:underline;}\r
  .wrap{max-height:52vh;overflow:auto;} .new td{background:rgba(245,158,11,.06);}\r
  .dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--new);margin-right:6px;}\r
  #status{color:var(--mut);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;} .hide{display:none;}\r
  /* На узком экране в шапке помещается что-то одно, и это индикатор:\r
     строка состояния живёт секунды, а сбор идёт минутами. */\r
  @media (max-width:900px){ #status{display:none;} }\r
  /* Полный список «висят без ответа»: на экране первые восемь, остальное под\r
     кнопкой «Показать все»; в PDF — все (правило печати ниже). */\r
  .feed-item.more{display:none;}\r
  .showall .feed-item.more{display:grid;}\r
  .morebtn{margin-top:8px;}\r
  #printhead{display:none;}\r
  /* ПЕЧАТЬ / PDF. Страница сохраняется такой, как на экране, — в той же теме\r
     и с теми же фильтрами; убирается только то, что на бумаге бессмысленно\r
     (кнопки шапки, фон-текстура), а то, что на экране спрятано ради места\r
     (прокрутка в списках, «показать все»), раскрывается: иначе PDF показал бы\r
     «без ответа — 14» над восемью отзывами, ровно ту нестыковку, из-за\r
     которой список и делался полным. */\r
  @media print{\r
    @page{margin:12mm;}\r
    html,body{-webkit-print-color-adjust:exact;print-color-adjust:exact;}\r
    #tex,header .iconbtn,header .runbadge,#status,.morebtn,.noprint{display:none!important;}\r
    header{position:static!important;}\r
    #printhead{display:block;margin:0 clamp(14px,2.2vw,40px) 10px;font-size:12px;color:var(--mut);}\r
    .feed-list{max-height:none!important;overflow:visible!important;}\r
    .feed-item.more{display:grid!important;}\r
    .wrap,.tblwrap{overflow:visible!important;max-height:none!important;}\r
    .kpi,.chart,.feed-item,.spike,tr{break-inside:avoid;}\r
    h1,h2,h3,h4{break-after:avoid;}\r
  }\r
  .stats{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;}\r
  .chip{background:var(--panel);border:1px solid var(--line);border-radius:999px;padding:4px 11px;font-size:12px;color:var(--mut);}\r
  .chip b{color:var(--txt);font-weight:600;}\r
  .tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;}\r
  /* Строка над плашками прогонов: что сейчас показано + календарь. */\r
  .runbar{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:8px;}\r
  .tab{background:var(--panel);border:1px solid var(--line);border-radius:999px;padding:6px 13px;cursor:pointer;font-size:13px;color:var(--txt2);display:flex;gap:7px;align-items:center;transition:border-color .15s,background .15s;}\r
  .tab:hover{border-color:var(--dim);} .tab.active{border-color:var(--acc-line);background:var(--acc-soft);color:var(--txt);}\r
  .tab .n{font-size:11px;color:var(--dim);} .tab.active .n{color:var(--link);}\r
  .cnt{display:inline-block;min-width:18px;text-align:center;border-radius:999px;padding:0 7px;font-size:11px;font-weight:600;}\r
  .cnt.z{background:rgba(148,163,184,.12);color:var(--dim);} .cnt.g{background:rgba(16,185,129,.14);color:var(--ok-txt);}\r
  .snip{color:var(--dim);font-size:12px;margin-top:3px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}\r
  .note{color:var(--mut);font-size:12px;white-space:normal;} td.found{font-weight:600;font-variant-numeric:tabular-nums;} td.found.g{color:var(--ok-txt);} td.found.z{color:var(--dim);}\r
  .sub{font-size:12px;color:var(--mut);margin:0 0 10px;}\r
  /* Панель выбора источников: галочки в несколько колонок, чтобы сорок сайтов\r
     помещались на экран и не приходилось листать. */\r
  /* Галочки-источники: тремя-четырьмя колонками на десктопе; на телефоне сетка\r
     сама схлопнется до одной колонки, потому что minmax(215px,1fr) не влезает. */\r
  .picks{display:grid;grid-template-columns:repeat(auto-fill,minmax(215px,1fr));gap:2px 12px;margin:6px 0 4px;}\r
  .picks label{display:flex;align-items:center;gap:7px;font-size:13px;padding:2px 0;cursor:pointer;}\r
  .picks input{width:auto;flex:none;}\r
  .picks .n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
  .picks .h{color:var(--mut);font-size:11px;}\r
  .pickbar{display:flex;gap:8px;align-items:center;margin:2px 0 8px;}\r
  .pickbar button{padding:3px 9px;font-size:12px;}\r
  /* --- Аналитика --- */\r
  /* ПЕРЕКЛЮЧАТЕЛЬ ВКЛАДОК. Была полоска-подчёркивание — на тёмном фоне разница\r
     между активной и спящей вкладкой сводилась к двум пикселям цвета внизу, и\r
     пользователь справедливо не понимал, где он и что нажимается. Теперь это\r
     сегментный переключатель: активная вкладка лежит на своей подложке, как\r
     нажатая клавиша, и это видно, не приглядываясь. */\r
  .viewtabs{display:inline-flex;gap:4px;margin:2px 0 18px;padding:4px;background:var(--panel);\r
    border:1px solid var(--line2);border-radius:999px;max-width:100%;flex-wrap:wrap;}\r
  .viewtab{padding:8px 18px;border:1px solid transparent;background:transparent;color:var(--mut);\r
    border-radius:999px;font-weight:600;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:7px;}\r
  .viewtab:hover{background:var(--sec-hi);color:var(--txt2);}\r
  .viewtab.active{color:#fff;background:var(--acc);border-color:var(--acc);box-shadow:0 2px 8px -3px var(--acc-line);}\r
  .viewtab.active:hover{background:var(--acc-hi);}\r
  .viewtab .em{font-size:14px;}\r
  /* Плашки KPI: 150px минимум на карточку — сама сетка сама решает, сколько\r
     колонок помещается. Пять-шесть чисел на широком экране в одну строку,\r
     на планшете — две строки, на телефоне — по одной. */\r
  /* 168px минимум — не круглое число: главная плашка занимает ДВЕ ячейки, и на\r
     1280px именно при таком минимуме шесть слотов (2+4) укладываются в одну\r
     строку. При 190px пятая плашка срывалась на вторую строку одна. */\r
  .kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(168px,1fr));gap:14px;margin-bottom:18px;}\r
  @media (max-width:640px){ .kpis{grid-template-columns:repeat(2,1fr);gap:10px;} }\r
  .kpi{background:var(--panel);border:1px solid var(--line2);border-radius:var(--radius);padding:18px 20px;position:relative;}\r
  /* Типографика: главная цифра — контрастная белая и крупная, подпись под ней\r
     приглушённая. Так с двух метров видно число, а не мешанину из числа и слов. */\r
  .kpi .n{font-size:28px;font-weight:600;color:var(--txt);line-height:1.05;letter-spacing:-.02em;font-variant-numeric:tabular-nums;}\r
  .kpi .l{font-size:11px;color:var(--mut);margin-top:7px;letter-spacing:.02em;}\r
  @media (max-width:640px){ .kpi{padding:14px;} .kpi .n{font-size:21px;} .kpi .l{font-size:10px;} }\r
  .kpi .s{font-size:11px;color:var(--ok-txt);margin-top:2px;}\r
  .charts{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;}\r
  @media(max-width:900px){.charts{grid-template-columns:1fr;}}\r
  /* На широком мониторе (панель теперь во всю ширину) две колонки растягиваются\r
     в длинные плоские прямоугольники — с 1500px пускаем три. */\r
  @media(min-width:1500px){.charts{grid-template-columns:repeat(3,1fr);} .chart.wide{grid-column:1/-1;}}\r
  /* min-width:0 обязателен: у ячейки грида минимальная ширина по умолчанию —\r
     min-content, поэтому широкая таблица или длинная подпись внутри РАСТЯГИВАЕТ\r
     колонку, и вся страница уезжает вбок. На телефоне карточка графика так\r
     разрослась до 453px при экране 390. */\r
  .charts>*{min-width:0;} .kpis>*{min-width:0;}\r
  .chart{background:var(--panel);border:1px solid var(--line2);border-radius:var(--radius);padding:18px 20px;min-width:0;}\r
  .chart h4{margin:0 0 4px;font-size:13px;color:var(--txt);font-weight:600;letter-spacing:-.01em;}\r
  .chart .hint{font-size:11px;color:var(--dim);margin:0 0 14px;}\r
  /* Методика охвата под крупными числами — мелко и приглушённо: она для тех,\r
     кто спросит «откуда цифра», а не главное на экране. */\r
  .reachnote{font-size:12px;line-height:1.5;color:var(--mut);}\r
  .chart.wide{grid-column:1/-1;}\r
  /* Раскладка без дыр. Пустая ячейка в конце ряда — то, на что пожаловался\r
     пользователь. Карточки, которые могут занять две колонки, помечаются:\r
     .w2 — всегда (при двух и трёх колонках), .w2mid — только когда колонок\r
     ровно две, иначе при трёх она снова оставляла бы дыру. */\r
  @media(min-width:900px){ .chart.w2{grid-column:span 2;} }\r
  @media(min-width:900px) and (max-width:1499px){ .chart.w2mid{grid-column:span 2;} }\r
  /* .w2big — наоборот, две колонки только при трёх: при двух она и так встаёт\r
     в ряд с соседкой, а при трёх иначе оставила бы дыру в конце ряда. */\r
  @media(min-width:1500px){ .chart.w2big{grid-column:span 2;} }\r
  /* Подсказка на графике динамики: день и число под курсором. */\r
  .atip{position:absolute;pointer-events:none;background:var(--tip-bg);border:1px solid var(--line);border-radius:8px;\r
    padding:6px 10px;font-size:11px;color:var(--txt);white-space:nowrap;box-shadow:0 6px 18px -6px rgba(0,0,0,.7);z-index:2;}\r
  .atip b{color:var(--mut);font-weight:500;margin-right:8px;}\r
  .atip span{font-weight:600;font-variant-numeric:tabular-nums;}\r
  /* Список молчащих источников: много коротких имён — раскладываем колонками. */\r
  .silent{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:4px 14px;font-size:12px;\r
    color:var(--mut);max-height:230px;overflow:auto;}\r
  .silent div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
  /* «Топ источников/каналов»: три колонки — имя, полоска, число. На телефоне\r
     имя занимает меньше места, чтобы полоска не сжималась в чёрточку. */\r
  /* Отступ между строками поднят с 8 до 12: «забор» из слипшихся полосок и был\r
     главной приметой топорной админки. Сами полоски — скруглённые пилюли. */\r
  .barlist{display:grid;grid-template-columns:170px 1fr 48px;gap:12px 14px;align-items:center;font-size:12px;}\r
  @media (max-width:640px){ .barlist{grid-template-columns:105px 1fr 36px;gap:10px;font-size:11px;} }\r
  .barlist .lbl{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--txt2);}\r
  .barlist .val{color:var(--txt);text-align:right;font-variant-numeric:tabular-nums;font-weight:600;}\r
  .barlist .bar{height:10px;background:var(--track);border-radius:999px;position:relative;overflow:hidden;}\r
  .barlist .bar>i{display:block;height:100%;background:var(--acc);border-radius:999px;}\r
  .barlist .kind{font-size:10px;color:var(--dim);margin-left:6px;}\r
  .barlist .kind.tg{color:var(--ok-txt);}\r
  /* Переключатель окна (вся история / 30 / 7): на телефоне метка «окно: …»\r
     уезжает под кнопки, а не сжимается до нечитаемого. */\r
  .win{display:flex;gap:6px;margin:0 0 4px;flex-wrap:wrap;align-items:center;}\r
  .win button{background:var(--panel);color:var(--mut);padding:6px 14px;font-size:12px;font-weight:500;border:1px solid var(--line);border-radius:999px;}\r
  @media (max-width:640px){ .win .tag{width:100%;text-align:left;order:99;margin-left:0!important;} }\r
  .win button.on{background:var(--acc-soft);color:var(--link-hi);border-color:var(--acc-line);}\r
  /* Три блока разделены заголовками с эмодзи-«опознавателями» — так глазом\r
     быстрее найти нужную секцию, когда цифр становится много. */\r
  .section{display:flex;align-items:baseline;gap:9px;margin:30px 2px 14px;}\r
  .section h3{margin:0;font-size:12px;color:var(--txt);font-weight:600;letter-spacing:.09em;text-transform:uppercase;}\r
  .section .em{font-size:15px;}\r
  .section .sub{color:var(--dim);font-size:11px;margin-left:6px;text-transform:none;letter-spacing:0;}\r
  .kpi.big .n{font-size:40px;}\r
  /* Главная плашка: индиговое свечение вместо сплошной заливки — заметно, но\r
     не кричит. Раньше был плоский синий блок, он перетягивал на себя всё. */\r
  .kpi.big{grid-column:span 2;background:radial-gradient(120% 140% at 0% 0%,rgba(99,102,241,.18) 0%,var(--panel) 60%);border-color:var(--acc-line);}\r
  @media (max-width:640px){ .kpi.big{grid-column:span 2;} .kpi.big .n{font-size:28px;} }\r
  .kpi .em{float:right;font-size:15px;opacity:.55;}\r
  .feed-list{max-height:340px;overflow:auto;font-size:13px;margin:0 -4px;}\r
  .feed-item{padding:10px 4px;border-bottom:1px solid var(--line2);display:grid;grid-template-columns:64px 1fr;gap:6px 12px;}\r
  .feed-item:last-child{border-bottom:0;}\r
  .feed-item .d{color:var(--dim);font-size:11px;font-variant-numeric:tabular-nums;}\r
  .feed-item .t a{color:var(--txt2);text-decoration:none;}\r
  .feed-item .t a:hover{color:var(--link);}\r
  .feed-item .s{color:var(--dim);font-size:11px;margin-top:3px;}\r
  .feed-item .s .em{font-size:12px;margin-right:4px;}\r
  /* Материалы дня под «Динамикой упоминаний»: отбиты линией от графика, свой\r
     заголовок с датой и числом, тот же вид строк, что у «Ленты свежих». */\r
  .daylist{margin-top:12px;padding-top:10px;border-top:1px solid var(--line2);}\r
  .daylist .dhead{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:4px;}\r
  .daylist .dhead b{color:var(--txt);font-variant-numeric:tabular-nums;}\r
  .daylist .dclose{margin-left:auto;padding:2px 10px;font-size:13px;flex:none;}\r
  .daylist .feed-item{grid-template-columns:48px 1fr;}\r
  details.story{border-bottom:1px solid var(--line2);padding:8px 2px}\r
  details.story>summary{cursor:pointer;line-height:1.45;font-size:14px}\r
  details.story>summary .s{color:var(--mut);font-size:12px;margin-top:2px}\r
  details.story .feed-item{grid-template-columns:72px 1fr}\r
  .pieblock{display:flex;gap:20px;align-items:center;flex-wrap:wrap;}\r
  .piefig{width:170px;height:170px;flex:none;}\r
  .pielegwrap{flex:1;min-width:170px;}\r
  /* На телефоне кольцо и легенда ложатся столбиком. min-width у легенды тут\r
     обязан обнулиться: 170px «пола» плюс кольцо 150px плюс отступы вылезали за\r
     390px экрана, и вся страница уезжала вбок. Длинную подпись обрезаем\r
     многоточием, а не растягиванием карточки. */\r
  @media (max-width:640px){\r
    .pieblock{flex-direction:column;align-items:center;gap:16px;}\r
    .piefig{width:150px;height:150px;}\r
    .pielegwrap{min-width:0;width:100%;}\r
  }\r
  .pielegend{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:9px 12px;font-size:12px;margin-top:0;}\r
  .pielegend .l{display:flex;align-items:center;gap:8px;color:var(--txt2);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}\r
  .pielegend .l::before{content:'';width:8px;height:8px;border-radius:999px;flex:none;background:var(--dot,var(--acc));}\r
  .pielegend .v{color:var(--mut);text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;}\r
  /* Кнопки Gemini: на широком — в ряд, на телефоне — на всю ширину, чтобы\r
     попадать пальцем без промаха. */\r
  .gaskbar{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;}\r
  @media (max-width:640px){ .gaskbar{flex-direction:column;} .gaskbar button{width:100%;} }\r
  .gemini .krow input{min-width:0;}\r
  /* Галочку правило «во всю ширину» не трогает: растянутый на всю строку\r
     квадратик выталкивал подпись за край экрана (телефон, русский кабинет). */\r
  @media (max-width:640px){ .gemini .krow{flex-direction:column;align-items:stretch;} .gemini .krow input:not([type=checkbox]),.gemini .krow button{width:100%;} }\r
  .gaskbar .em{margin-right:6px;}\r
  .gemini{background:var(--panel);border:1px solid var(--line2);border-radius:var(--radius);padding:20px;margin-top:14px;}\r
  .gemini h4{margin:0 0 4px;font-size:14px;color:var(--txt);}\r
  .gemini .hint{font-size:11px;color:var(--dim);margin:0 0 12px;}\r
  .gemini .krow{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px;}\r
  /* :not([type=checkbox]) — не придирка. Правило писалось под поле ключа, а\r
     селектор ловил ЛЮБОЙ input внутри строки, включая галочку «показывать\r
     модели фрагмент текста»: она получала flex-basis 260px и превращалась в\r
     квадратик посреди пустой полосы, а подпись рядом ломалась на три строки.\r
     Видно это было только на снимке кабинета, не в коде. */\r
  .gemini .krow input:not([type=checkbox]){flex:2 1 260px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12px;}\r
  .gemini .krow .check{flex:none;} .gemini .krow .check input{flex:none;}\r
  .gemini .krow input.model{flex:1 1 170px;}\r
  .gemini .out{white-space:pre-wrap;background:var(--bg2);border:1px solid var(--line);border-radius:var(--radius-sm);padding:16px 18px;font-size:13px;line-height:1.65;color:var(--txt2);min-height:60px;}\r
  /* pre-wrap нужен для СЫРОГО текста модели (она отвечает строками), но для\r
     нашей собственной вёрстки он ядовит: переносы и отступы в шаблоне\r
     становятся видимыми пробелами, а внутри flex — ещё и отдельными элементами.\r
     Из-за этого подписи тональности разъезжались, а числа висели над словами.\r
     Поэтому всё, что рисуем сами, идёт в .sent с обычными пробелами. */\r
  .gemini .out .sent{white-space:normal;}\r
  /* Справка расширенного обзора: обычный документ, а не моноширинный ответ. */\r
  .gemini .out .mdview{white-space:normal;color:var(--txt);font-size:14px;line-height:1.7;max-width:80ch;}\r
  .gemini .out .mdview p{margin:0 0 .8em;}\r
  .gemini .out .mdview h4{margin:1.1em 0 .5em;font-size:15px;}\r
  .gemini .out .mdview ul,.gemini .out .mdview ol{margin:0 0 .8em;padding-left:1.4em;}\r
  .gemini .out .mdview>:last-child{margin-bottom:0;}\r
  .gemini .out .mdview hr{border:0;border-top:1px solid var(--line);margin:1em 0;}\r
  .gemini .out .mdview b{color:var(--txt);}\r
  .gemini .out .mdbar{white-space:normal;display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:12px;}\r
  .revopts{margin-top:12px;}\r
  .revopts summary{cursor:pointer;font-weight:600;color:var(--txt2);}\r
  .revopts textarea,.revopts input{width:100%;}\r
  .gemini .out .sent .tail{white-space:pre-wrap;}\r
  .gemini .warn{color:var(--warn);font-size:11px;margin-top:8px;}\r
  /* Журнал запросов к ИИ (13 октября 2026): видно, сколько шёл каждый запрос,\r
     кто ответил, сколько разметил и почему отказал. */\r
  .ailog{margin-top:12px;font-size:12px;color:var(--mut);}\r
  .ailog summary{cursor:pointer;color:var(--txt2);font-weight:600;padding:4px 0;}\r
  .ailog .note{color:var(--txt2);margin:6px 0 8px;line-height:1.5;}\r
  .ailog ol{margin:6px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:6px;}\r
  .ailog li{line-height:1.5;}\r
  .ailog li.bad b{color:var(--warn);}\r
  .ailog .att{display:block;color:var(--mut);font-size:11.5px;}\r
  /* Таблица «покажи позитивные»: колонка «почему» — короткое пояснение модели\r
     по КАЖДОМУ материалу, его просил пользователь. Ширину держим, чтобы\r
     пояснение не растягивало таблицу и не давило заголовок. */\r
  .marktbl{width:100%;border-collapse:collapse;font-size:12px;}\r
  .marktbl th{padding:6px 10px;color:var(--dim);font-size:10px;}\r
  .marktbl td{padding:9px 10px;border-top:1px solid var(--line2);border-bottom:0;vertical-align:top;}\r
  .marktbl .dt{white-space:nowrap;color:var(--dim);font-variant-numeric:tabular-nums;}\r
  .marktbl .src{white-space:nowrap;color:var(--mut);}\r
  .marktbl .why{color:var(--mut);font-style:italic;max-width:280px;}\r
  @media (max-width:900px){ .marktbl .why{max-width:200px;} }\r
  @media(max-width:640px){ th.h,td.h{display:none;} }\r
</style>\r
<!-- ТЕМА ВЫБИРАЕТСЯ ДО ПЕРВОЙ ОТРИСОВКИ. Скрипт стоит в head и работает\r
     синхронно нарочно: поставь мы тему из основного кода внизу страницы — при\r
     каждой загрузке успевала бы мигнуть тёмная, и на светлой теме это видно\r
     как вспышку. Отдельного файла нет: разметка кабинета вшивается в exe одной\r
     строкой, и лишний запрос к серверу тут неоткуда взять.\r
     Ошибку глотаем: localStorage недоступен в приватном окне, и падать из-за\r
     оформления, теряя весь кабинет, — цена несоразмерная. -->\r
<script>\r
  try{ var t=localStorage.getItem('mc_theme'); if(t==='light'||t==='dark') document.documentElement.dataset.theme=t; }catch(e){}\r
  // Язык — тем же приёмом и по той же причине: иначе английский кабинет при\r
  // каждой загрузке мигал бы русским.\r
  try{ var l=localStorage.getItem('mc_lang'); if(l==='en'||l==='ru'){ document.documentElement.dataset.lang=l; document.documentElement.lang=l; } }catch(e){}\r
  // Подсказки — тоже до первой отрисовки: иначе выключенные подсказки успевали\r
  // бы мелькнуть, и страница прыгала бы на глазах.\r
  try{ if(localStorage.getItem('mc_hints')==='off') document.documentElement.dataset.hints='off'; }catch(e){}\r
  // Знак в шапке берёт картинку У ЗНАЧКА ВКЛАДКИ — чтобы источник был один.\r
  document.addEventListener('DOMContentLoaded', function(){\r
    var f=document.getElementById('favicon'), m=document.getElementById('mark');\r
    if(f&&m) m.src=f.getAttribute('href');\r
  });\r
</script>\r
</head>\r
<body>\r
<div id="tex" aria-hidden="true"></div>\r
<header>\r
  <!-- ЗНАК И НАЗВАНИЕ — ЭТО ССЫЛКА ДОМОЙ. Просьба пользователя 22 сентября\r
       2026: «кнопки навигации подсветить, чтобы пользователь понимал, как\r
       вернуться в кабинет». Логотип, ведущий на главную, — то, что человек\r
       пробует первым в любой программе; раньше он был просто надписью. -->\r
  <a class="brand" href="#/" title="В кабинет — ко всем проектам">\r
    <img class="mark" id="mark" alt="" src="">\r
    <b>mediachrome</b>\r
  </a>\r
  <nav class="crumbs" id="crumbs"><span class="here">кабинет</span></nav>\r
  <span class="grow"></span>\r
  <!-- ИНДИКАТОР СБОРА. Живёт в ШАПКЕ, то есть виден на любой странице и\r
       переживает перезагрузку: состояние спрашивается у программы, а не\r
       хранится во вкладке. До этого ход прогона жил только в той вкладке,\r
       которая его запустила, а прогон по расписанию не показывался вовсе. -->\r
  <div class="runbadge" id="runbadge" hidden>\r
    <span class="spin"></span>\r
    <span class="rtxt" id="runtxt"></span>\r
    <button class="stopbtn" id="runstop" title="Остановить сбор">Остановить</button>\r
  </div>\r
  <span id="status"></span>\r
  <!-- ТУМБЛЕР ТЕМЫ. Значок показывает, КУДА переключит нажатие (солнце на\r
       тёмной теме = «включить светлую»), а не текущее состояние: иначе человек\r
       гадает, кнопка это или лампочка. -->\r
  <!-- ИНСТРУКЦИЯ и ВЫКЛЮЧАТЕЛЬ ПОДСКАЗОК. Отвечают на РАЗНЫЕ вопросы:\r
       подсказка у поля — «что делает вот эта настройка», инструкция — «как\r
       этим вообще пользоваться». Поэтому и то, и другое, а не одно вместо\r
       другого. -->\r
  <!-- СОХРАНИТЬ СТРАНИЦУ В PDF. Просьба пользователя 11 октября 2026: «чтобы\r
       сама страница, как есть, сразу в PDF — и отправить кому-нибудь». Это\r
       печать браузера с правилами @media print: без сервера, без браузерной\r
       очереди и без лишнего браузера в пакете. Фильтры остаются такими, какие\r
       выбраны на экране, — страница сохраняется как есть. -->\r
  <button class="iconbtn" id="pdf" title="Сохранить страницу в PDF" aria-label="PDF">📄</button>\r
  <button class="iconbtn" id="hints" title="Подсказки под полями" aria-label="Подсказки">💡</button>\r
  <a class="iconbtn" id="help" href="#/help" title="Инструкция" aria-label="Инструкция">?</a>\r
  <!-- ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА. Рядом с темой и по тому же правилу: на кнопке\r
       написан язык, НА КОТОРЫЙ переключит нажатие. -->\r
  <button class="iconbtn lang" id="lang" title="Switch to English" aria-label="Язык / Language">EN</button>\r
  <button class="iconbtn" id="theme" title="Сменить тему" aria-label="Сменить тему"></button>\r
</header>\r
<div id="printhead" aria-hidden="true"></div>\r
<main id="app"></main>\r
<!-- ПОДВАЛ. Копирайт и адрес для связи стоят на КАЖДОЙ странице кабинета, а не\r
     только в инструкции: человеку, у которого что-то не работает, некуда\r
     написать, если адрес спрятан. Имя и почта — ДАННЫЕ, словарь их не трогает\r
     ни на каком языке. -->\r
<footer class="pagefoot">\r
  <span>© 2026 Timur Seidalin</span>\r
  <span aria-hidden="true">·</span>\r
  <a href="mailto:pingames.studio@gmail.com">pingames.studio@gmail.com</a>\r
</footer>\r
\r
<script>\r
const $ = (s,el=document)=>el.querySelector(s);\r
const el = (h)=>{const d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild;};\r
const esc = s=>String(s==null?'':s).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[c]));\r
// Дата — по МЕСТНОМУ времени. Через toISOString() ночной материал (01:00 по\r
// Астане) показывался вчерашним днём: перевод в UTC отнимает пять часов.\r
const fmtDate = d=>{ if(!d) return '—'; const t=new Date(d); if(isNaN(t)) return esc(d);\r
  const p=n=>String(n).padStart(2,'0'); return t.getFullYear()+'-'+p(t.getMonth()+1)+'-'+p(t.getDate()); };\r
const fmtWhen = ts=>{ if(!ts) return 'ещё не запускался'; const t=new Date(ts); return t.toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}); };\r
const setStatus = t=>{ $('#status').textContent=t||''; };\r
// Крошки собираются ОДНИМ местом: звено со ссылкой рисуется как кнопка, текущее\r
// место — обычным текстом. Раньше каждая страница писала их по-своему, и на\r
// одной «кабинет» был ссылкой, а на другой — серой надписью.\r
const setCrumbs = parts => {\r
  $('#crumbs').innerHTML = parts.map(x => x.href\r
    ? \`<a href="\${x.href}">\${esc(x.t)}</a>\`\r
    : \`<span class="here">\${esc(x.t)}</span>\`).join('<span class="sep">/</span>');\r
};\r
\r
// ---- РЕЖИМ ПОКАЗА (снимок дашборда одним файлом) ----\r
// Кабинет живёт на компьютере пользователя, а показать результаты работы надо\r
// людям в интернете. Открывать наружу сам кабинет нельзя: это его машина, его\r
// ключ от Gemini и кнопки, которые ЗАПИСЫВАЮТ (собрать, удалить, сохранить\r
// настройки). Поэтому «поделиться» — это не доступ к программе, а ОДИН\r
// САМОДОСТАТОЧНЫЙ HTML-ФАЙЛ со снимком данных: его можно послать письмом,\r
// положить на GitHub Pages, открыть с телефона без интернета.\r
//\r
// Тот же самый кабинет, тот же код графиков — просто вместо сервера отвечает\r
// вшитый в файл слепок. Читать нечего, кроме показанных цифр: сервера нет\r
// вовсе, значит и записать некуда. Ключи в слепок не кладутся (desktop/share.js).\r
const SNAP = (typeof window !== 'undefined' && window.MC_SNAPSHOT) || null;\r
\r
// ---- API с паролем ----\r
let KEY = localStorage.getItem('mc_key')||'';\r
async function api(path, opts={}){\r
  // В режиме показа сети нет: ответы берутся из слепка. Любой не-GET (а их в\r
  // снимке быть не должно) честно падает — лучше видимая ошибка, чем тихо\r
  // «сохранено», которое никуда не сохранилось.\r
  if(SNAP){\r
    if(opts.method && opts.method!=='GET') throw new Error('это снимок дашборда — изменения недоступны');\r
    const body = SNAP.api[path] !== undefined ? SNAP.api[path] : SNAP.api[path.split('?')[0]];\r
    if(body === undefined) throw new Error('в снимке нет данных для '+path);\r
    return { ok:true, status:200, json: async()=>body };\r
  }\r
  opts.headers = Object.assign({'Content-Type':'application/json'}, opts.headers||{}, KEY?{'x-mc-key':KEY}:{});\r
  const r = await fetch('/api'+path, opts);\r
  if(r.status===401){ const k=prompt('Введите пароль кабинета:'); if(k){ KEY=k; localStorage.setItem('mc_key',k); return api(path,opts);} throw new Error('нужен пароль'); }\r
  return r;\r
}\r
\r
// ---- роутер ----\r
window.addEventListener('hashchange', route);\r
function route(){\r
  if(SNAP) return viewSnapshot();\r
  const h=location.hash.slice(1);\r
  if(h.startsWith('/p/')) viewProject(h.slice(3));\r
  else if(h.startsWith('/rep/')) viewRepObject(h.slice(5));\r
  else if(h.startsWith('/rep')) viewRep();\r
  else if(h.startsWith('/help')) viewHelp();\r
  else viewList();\r
}\r
\r
// Инструкция — отдельная страница, а не окно поверх кабинета: её читают долго,\r
// в неё возвращаются, и адрес можно отправить коллеге.\r
function viewHelp(){\r
  setCrumbs([{t: LANG === 'en' ? '← Projects' : '← Кабинет', href:'#/'}, {t: LANG === 'en' ? 'Help' : 'Инструкция'}]);\r
  const app=$('#app'); app.innerHTML = helpHtml();\r
  window.scrollTo(0, 0);\r
}\r
\r
// Страница снимка: шапка проекта (что мониторили и за какое окно) плюс сама\r
// аналитика. Списка проектов, настроек, кнопок сбора и удаления тут нет — не\r
// «спрятаны стилями», а не создаются вовсе.\r
function viewSnapshot(){\r
  const app = $('#app'); app.innerHTML='';\r
  setCrumbs([{t:'показ'},{t:SNAP.name}]);\r
  const o = (SNAP.api['/projects/'+SNAP.id+'/analytics'] || {}).overview || {};\r
  app.appendChild(el(\`<div class="card">\r
    <h2 style="margin:0 0 6px">\${esc(SNAP.name)}</h2>\r
    <div class="tag">\${T('запрос:')} «\${esc(SNAP.keyword||'')}» · \${T('источников:')} \${SNAP.sources||0} · \${esc(SNAP.periodText||'')}</div>\r
    <div class="tag" style="margin-top:4px">снимок от \${esc(SNAP.madeAt||'')} · только просмотр, данные не обновляются</div>\r
  </div>\`));\r
  const panel = el('<div class="card"><div id="viewanaw"></div></div>');\r
  app.appendChild(panel);\r
  loadAnalytics(SNAP.id, $('#viewanaw', panel));\r
}\r
\r
const fmtRun = ts_or_at=>{ const t=new Date(ts_or_at); return isNaN(t)?'—':t.toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}); };\r
const fmtRunFull = at=>{ const t=new Date(at); return isNaN(t)?'—':t.toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}); };\r
// Строки расписания и периода собираются в коде вместе с числами — значит\r
// обход готовой страницы их не поймает, и переводит их T().\r
const schedText = s=> !s||s.mode==='off' ? T('вручную')\r
  : s.mode==='daily' ? T(\`каждый день \${String(s.hour??9).padStart(2,'0')}:00\`)\r
  : s.mode==='minutes' ? T(\`каждые \${Math.max(10,Math.min(720,+s.everyMinutes||20))} мин\`)\r
  : T(\`каждые \${s.everyHours||6} ч\`);\r
// Период в шапке проекта. У скользящего режима конкретные даты писать нельзя —\r
// они меняются каждый день; пишем правило, а точные числа показываем в настройках.\r
const periodText = c => {\r
  const m = (c && c.periodMode) || 'fixed';\r
  if (m === 'rolling') return T(\`🔄 последние \${Math.max(2, +(c.periodDays)||2)} дн.\`);\r
  if (m === 'since') return T('📈 с … и до сегодня').replace('…', esc(c.from||'…'));\r
  // Пустое окно — это «за всё время», а не «период ещё не вписан». Улика\r
  // 4 сентября 2026: ratel.kz принёс материал 2025 года, и понять почему было\r
  // нельзя — в шапке стояло «период …—…», набор многоточий.\r
  if (!c || (!c.from && !c.to)) return T('⚠️ период не задан — берётся ВСЁ ВРЕМЯ');\r
  if (!c.from) return T('📅 всё до …').replace('…', esc(c.to));\r
  if (!c.to) return T('📅 с … и всё, что новее').replace('…', esc(c.from));\r
  return T('📅 период …—…').replace('…—…', esc(c.from) + '—' + esc(c.to));\r
};\r
\r
// ---- главная: проекты + общая статистика ----\r
// ---- «Есть новая версия» ----\r
// До 19 сентября 2026 обновление выглядело так: человек идёт на GitHub под\r
// своим логином, ищет сборку, качает, ставит — а коллеги не могли и этого,\r
// репозиторий закрытый. Теперь программа сама смотрит на открытую витрину и\r
// показывает полоску с кнопкой.\r
//\r
// Ничего не качается и не ставится без нажатия: установщик весит сотни\r
// мегабайт, а установка гасит и перезапускает программу — такое не делают за\r
// человека молча.\r
const fmtMb = n => n ? Math.round(n/1048576)+' ' + (LANG === 'en' ? 'MB' : 'МБ') : '';\r
// ПОЛОСКА ОБНОВЛЕНИЯ ПЕРЕВОДИТСЯ КОДОМ, А НЕ СЛОВАРЁМ. Словарь сверяет строки\r
// ЦЕЛИКОМ, а тут в каждую вклеены номер версии и размер («Есть новая версия\r
// 0.5.1 у вас 0.5.0», «Обновить (265 МБ)») — ключ пришлось бы заводить на\r
// каждое возможное число, то есть не заводить вовсе. Улика 23 сентября 2026:\r
// у человека кабинет был английский, а полоска — русская.\r
const L = (ru, en) => LANG === 'en' ? en : ru;\r
async function updateBox(app){\r
  if(SNAP) return;                       // в снимке дашборда сервера нет вовсе\r
  let s; try{ s = await (await api('/update')).json(); }catch(e){ return; }\r
  const box = el('<div></div>');\r
  // Новость — наверх, спокойное «всё свежее» — вниз: полоска про обновление не\r
  // должна каждый день отодвигать сами проекты.\r
  if(s.newer) app.insertBefore(box, app.firstChild); else app.appendChild(box);\r
\r
  const pct = p => p.total ? Math.round(p.got/p.total*100)+'%' : fmtMb(p.got);\r
  // УСТАНОВКА НЕ ВСТАЛА — говорим вслух (20 ноября 2026). Тихий установщик\r
  // ошибок не показывает, и раньше программа просто возвращалась прежней.\r
  // Теперь программа помнит попытку и читает журнал установщика.\r
  const failBox = s => {\r
    const f = s.installFailed; if(!f) return '';\r
    const why = f.lines && f.lines.length\r
      ? \`<pre class="hint" style="white-space:pre-wrap;margin:6px 0;max-height:160px;overflow:auto">\${esc(f.lines.join('\\n'))}</pre>\`\r
      : \`<div class="hint">\${f.hasLog\r
          ? L('Журнал установщика пуст.','The installer log is empty.')\r
          : L('Установщик не оставил журнала — похоже, он не запустился вовсе (его мог остановить антивирус).','The installer left no log — it most likely did not start at all (an antivirus may have stopped it).')}</div>\`;\r
    return \`<div style="border-left:3px solid var(--neg);padding:6px 10px;margin:4px 0 10px">\r
      <b>\${L('Прошлая установка версии','The last install of version')} \${esc(f.version)} \${L('не встала','did not complete')}</b>\r
      — \${L('программа осталась на','the program stayed on')} \${esc(s.current)}.\r
      \${why}\r
      <div class="hint">\${L('Нажмите «Обновить» ещё раз: перед установкой программа теперь закрывает свои окна браузера. Не помогло — выключите программу ярлыком «Выключить mediachrome» и запустите установщик вручную:','Press “Update” again: the program now closes its browser windows before installing. If that does not help, turn the program off with the “Выключить mediachrome” shortcut and run the installer by hand:')}\r
        \${f.file?\`<code style="word-break:break-all">\${esc(f.file)}</code>\`:''}</div>\r
    </div>\`;\r
  };\r
  const draw = (s, busyText)=>{\r
    if(!s.newer){\r
      box.innerHTML = \`<div class="tag" style="margin-top:14px">\${L('версия','version')} \${esc(s.current)} · \${L('обновлений нет','no updates')}\`\r
        + (s.err?\` · <span title="\${esc(s.err)}">\${L('проверить не вышло','check failed')}</span>\`:'')\r
        + \` · <a href="#" id="chk">\${L('проверить сейчас','check now')}</a></div>\`;\r
    } else {\r
      const act = busyText ? \`<span class="tag">\${esc(busyText)}</span>\`\r
        : s.ready ? \`<button id="go">\${L('Поставить версию','Install version')} \${esc(s.latest)}</button>\`\r
        : s.canInstall ? \`<button id="go">\${L('Обновить','Update')}\${s.size?' ('+fmtMb(s.size)+')':''}</button>\`\r
        : \`<span class="tag">\${L('скачать можно на том компьютере, где стоит программа','download it on the computer where the program is installed')}</span>\`;\r
      box.innerHTML = \`<div class="card" style="border-color:var(--acc)">\r
        <div style="font-weight:600">\${L('Есть новая версия','New version available:')} \${esc(s.latest)} <span class="tag">\${L('у вас','you have')} \${esc(s.current)}</span></div>\r
        \${s.notes?\`<div class="hint" style="margin:6px 0 10px;white-space:pre-line">\${esc(s.notes)}</div>\`:'<div style="height:8px"></div>'}\r
        \${failBox(s)}\r
        <div class="actions">\${act}<span class="tag" id="uerr"></span></div>\r
        <div class="hint" style="margin-top:8px">\${L('Проекты, лента и все собранные материалы останутся на месте — они лежат отдельно от программы.','Your projects, feed and everything collected stay put — they are stored separately from the program.')}</div>\r
      </div>\`;\r
    }\r
    const chk = $('#chk', box);\r
    if(chk) chk.onclick = async (e)=>{ e.preventDefault(); draw({...s, newer:false}, ''); chk.textContent=L('смотрю…','checking…');\r
      try{ draw(await (await api('/update?check=1')).json()); }catch(err){ draw(s); } };\r
    const go = $('#go', box);\r
    if(go) go.onclick = ()=>run(s);\r
  };\r
\r
  // СКАЧИВАНИЕ ИДЁТ В ПРОГРАММЕ, А НЕ ВО ВКЛАДКЕ — и показывать его надо в\r
  // любой вкладке и после перезагрузки страницы. Улика 23 сентября 2026:\r
  // человек нажал «Обновить», перезагрузил страницу — и полоска нарисовала\r
  // кнопку заново, как будто ничего не качается. Двести шестьдесят пять\r
  // мегабайт при этом честно шли. Ровно та же беда, что была с индикатором\r
  // сбора 22 сентября, и лечение то же: состояние живёт в программе, кабинет\r
  // при отрисовке СПРАШИВАЕТ его, а не помнит своё.\r
  let poll = 0;\r
  const watch = (s)=>{\r
    if(poll) return;\r
    poll = setInterval(async ()=>{\r
      let p; try{ p = await (await api('/update')).json(); }catch(e){ return; }\r
      if(p.phase === 'downloading'){ draw(s, L('Скачиваю… ','Downloading… ')+pct(p)); return; }\r
      clearInterval(poll); poll = 0;\r
      draw(p, '');\r
      if(p.liveErr) { const u = $('#uerr', box); if(u) u.textContent = L('не скачалось: ','download failed: ')+p.liveErr; }\r
    }, 1500);\r
  };\r
\r
  // Скачивание и установка одним нажатием: человек уже решил, нажав «Обновить».\r
  const run = async (s)=>{\r
    if(!s.ready){\r
      draw(s, L('Скачиваю…','Downloading…'));\r
      watch(s);\r
      let r; try{ r = await (await api('/update/download',{method:'POST'})).json(); }\r
      catch(e){ r = { ok:false, err:e.message }; }\r
      // «Уже качается» — это НЕ «скачалось». Раньше этот ответ проваливался в\r
      // установку, и человек получал «установщик ещё не скачан» — отказ,\r
      // который выглядит как поломка, хотя закачка в этот момент шла.\r
      if(r.running) return;\r
      if(poll){ clearInterval(poll); poll = 0; }\r
      if(!r.ok){ draw(s); $('#uerr',box).textContent = L('не скачалось: ','download failed: ')+(r.err||''); return; }\r
      s = r.state || { ...s, ready:true };\r
    }\r
    draw(s, L('Ставлю — программа перезапустится…','Installing — the program will restart…'));\r
    let r; try{ r = await (await api('/update/install',{method:'POST'})).json(); }\r
    catch(e){ r = { ok:false, error:e.message }; }\r
    if(!r.ok && (r.error||r.err)){ draw(s); $('#uerr',box).textContent = r.error||r.err; return; }\r
    // Программа сейчас выключится, установщик заменит файлы и поднимет её\r
    // обратно. Страница ждёт и перезагружается сама, когда кабинет ответит.\r
    box.innerHTML = \`<div class="card" style="border-color:var(--acc)"><b>\${L('Обновляю…','Updating…')}</b>\r
      <div class="hint" style="margin-top:6px">\${L('Программа перезапустится сама. Эта страница обновится, как только она вернётся — обычно полминуты.','The program will restart itself. This page will reload as soon as it is back — usually half a minute.')}</div></div>\`;\r
    const wait = setInterval(async ()=>{\r
      try{ const r2 = await fetch('/api/me', { cache:'no-store' }); if(r2.ok){ clearInterval(wait); location.reload(); } }catch(e){}\r
    }, 3000);\r
  };\r
  // Первая отрисовка СМОТРИТ на состояние программы: качается прямо сейчас —\r
  // показываем ход, а не кнопку. Без этой строки все правки выше остались бы\r
  // только для той вкладки, где нажали кнопку.\r
  if(s.phase === 'downloading'){ draw(s, L('Скачиваю… ','Downloading… ')+pct(s)); watch(s); }\r
  else draw(s, '');\r
}\r
\r
// ЛИЦЕНЗИЯ В КАБИНЕТЕ. Три состояния и разный вес у каждого: спокойная строка\r
// внизу, пока всё в порядке, и карточка, когда пора что-то сделать. Полоска,\r
// которая кричит каждый день, перестаёт читаться через неделю.\r
//\r
// Поле для ключа доступно ВСЕГДА, а не только когда срок кончился: человек\r
// покупает заранее и вводит ключ тогда, когда ему удобно, а не когда программа\r
// его к этому принудила.\r
async function licenseBox(app){\r
  if(SNAP) return;                       // в снимке дашборда сервера нет вовсе\r
  let s; try{ s = await (await api('/license')).json(); }catch(e){ return; }\r
  const box = el('<div></div>');\r
  const loud = s.mode==='expired' || (s.mode==='trial' && s.daysLeft<=7);\r
  if(loud) app.insertBefore(box, app.firstChild); else app.appendChild(box);\r
\r
  // Склейка с числом: по-русски склоняется, по-английски множественное число.\r
  // Обёртка снаружи тут не спасает — «5 дней left» это не перевод.\r
  const dd = n => LANG === 'en' ? (n + (n === 1 ? ' day' : ' days')) : (n+' '+plural(n,'день','дня','дней'));\r
  const draw = (s, msg)=>{\r
    // Поле ключа раскрыто, когда пора действовать; иначе прячется за ссылкой,\r
    // чтобы не занимать место у того, у кого всё оформлено.\r
    // ЧЕЛОВЕК НЕ ДОЛЖЕН СПРАШИВАТЬ, ЧТО ОТПРАВЛЯТЬ. Просьба пользователя\r
    // 23 сентября 2026: «человек должен понимать, чтобы ему по десять раз не\r
    // объяснять — программа сама ему сказала: вот этот номер отправь, и в\r
    // ответ получишь ключ».\r
    //\r
    // Поэтому это не подсказка про «отпечаток», а два шага по порядку: что\r
    // отправить (с кнопкой «скопировать») и куда вставить ответ. Слово\r
    // «отпечаток» убрано совсем — оно техническое, и для непрограммиста\r
    // означает ровно ничего.\r
    //\r
    // Предложения стоят ОТДЕЛЬНЫМИ текстовыми узлами, а номер — своим: перевод\r
    // кабинета сверяет текст узла целиком, и вставь мы номер в середину фразы,\r
    // английская страница осталась бы с русской строкой.\r
    const form = \`<div class="hint" style="margin-top:10px"><b>\${L('Шаг 1.','Step 1.')}</b> \${L('Отправьте разработчику номер этого компьютера:','Send the developer this computer\\u2019s number:')}</div>\r
      <div class="actions" style="margin-top:6px">\r
        <code id="lmid" style="font-size:15px;padding:6px 10px;border:1px solid var(--line);border-radius:6px;user-select:all">\${esc(s.machine||'')}</code>\r
        <button id="lcopy" class="ghost">\${L('Скопировать номер','Copy the number')}</button></div>\r
      <div class="hint" style="margin-top:4px">\${L('Ключ работает только на том компьютере, чей номер вы прислали.','The key works only on the computer whose number you sent.')}</div>\r
      <div class="hint" style="margin-top:10px"><b>\${L('Шаг 2.','Step 2.')}</b> \${L('Полученный ключ вставьте сюда — он начинается с MC1.','Paste the key you get here — it starts with MC1.')}</div>\r
      <div class="actions" style="margin-top:6px">\r
        <input id="lkey" style="flex:1;min-width:220px" placeholder="MC1.…">\r
        <button id="lsave">\${L('Сохранить ключ','Save key')}</button></div>\r
      \${msg?\`<div class="hint" style="margin-top:6px"><b>\${esc(msg)}</b></div>\`:''}\`;\r
\r
    if(s.mode==='licensed'){\r
      // Дату окончания показываем КАК ОНА ЗАПИСАНА В КЛЮЧЕ, без прогона через\r
      // Date. «2027-09-19» разбирается как ПОЛНОЧЬ UTC, а читается местным\r
      // календарём — и западнее Гринвича лицензия показывала бы день раньше,\r
      // чем написано в ключе. Та же мина, что уже съедала сутки в разборе дат,\r
      // в CSV и в аналитике; тут её не на что менять — в ключе лежит просто\r
      // календарный день, и переводить его некуда.\r
      box.innerHTML = \`<div class="tag" style="margin-top:10px">\${L('лицензия','licence')}: \${esc(s.to||'—')}\`\r
        + (s.until?\` · \${L('до','until')} \${esc(s.until)}\`:' · '+L('бессрочная','perpetual'))\r
        + (s.locked?' · '+L('только для этого компьютера','this computer only'):'')\r
        + \` · <a href="#" id="lchg">\${L('изменить ключ','change key')}</a></div>\`\r
        // Подтверждение обязано быть видно. Без него человек нажимает\r
        // «Сохранить ключ», карточка схлопывается в одну строку — и понять,\r
        // принят ключ или нет, можно только вчитавшись. Молчание после\r
        // действия читается как «не сработало».\r
        + (msg?\`<div class="tag" style="margin-top:4px"><b>\${esc(msg)}</b></div>\`:'')\r
        + \`<div id="lform"></div>\`;\r
    } else if(s.mode==='expired'){\r
      box.innerHTML = \`<div class="card" style="border-color:#c33">\r
        <div style="font-weight:600">\${L('Пробный период закончился','The trial period is over')}</div>\r
        <div class="hint" style="margin:6px 0 0">\${s.enforced\r
          ? L('Сбор нового материала остановлен. Всё уже собранное — лента, выгрузки, отчёты, аналитика — открыто как обычно: эти данные твои.','Collecting new material has stopped. Everything already collected — the feed, exports, reports, analytics — is open as usual: that data is yours.')\r
          : L('Проверка ключей пока не включена, поэтому программа продолжает собирать как раньше. Эта полоска — предупреждение, а не запрет.','Key checking is not switched on yet, so the program keeps collecting as before. This banner is a warning, not a block.')}</div>\r
        \${s.keyWhy?\`<div class="hint" style="margin-top:6px">\${L('С введённым ключом беда:','Something is wrong with the key you entered:')} \${esc(s.keyWhy)}</div>\`:''}\r
        \${form}</div>\`;\r
    } else {\r
      const soon = s.daysLeft<=7;\r
      box.innerHTML = soon\r
        ? \`<div class="card" style="border-color:var(--acc)">\r
             <div style="font-weight:600">\${L('Пробный период: осталось','Trial period:')} \${esc(dd(s.daysLeft))}\${L('',' left')}</div>\r
             <div class="hint" style="margin:6px 0 0">\${L('Когда он кончится, остановится только СБОР нового. Всё собранное останется открытым.','When it ends, only COLLECTING new material stops. Everything already collected stays open.')}</div>\r
             \${s.keyWhy?\`<div class="hint" style="margin-top:6px">\${L('С введённым ключом беда:','Something is wrong with the key you entered:')} \${esc(s.keyWhy)}</div>\`:''}\r
             \${form}</div>\`\r
        : \`<div class="tag" style="margin-top:10px">\${L('пробный период · осталось','trial period ·')} \${esc(dd(s.daysLeft))}\${L('',' left')}\`\r
          + (s.keyWhy?\` · \${L('ключ не принят:','key rejected:')} \${esc(s.keyWhy)}\`:'')\r
          + \` · <a href="#" id="lchg">\${L('ввести ключ','enter key')}</a></div><div id="lform"></div>\`;\r
    }\r
\r
    const chg = $('#lchg', box);\r
    if(chg) chg.onclick = e=>{ e.preventDefault(); $('#lform',box).innerHTML = form; wire(s); };\r
    wire(s);\r
  };\r
  const wire = (s)=>{\r
    // КНОПКА «СКОПИРОВАТЬ НОМЕР». Кабинет открывают и с телефона, по адресу\r
    // вида http://192.168.x.x — а это НЕ защищённый контекст, и\r
    // navigator.clipboard там просто отсутствует. Молча ничего не сделать —\r
    // худший исход: человек жмёт и не понимает, скопировалось или нет.\r
    // Поэтому запасной путь — выделить номер и прямо сказать, что дальше.\r
    const cp = $('#lcopy', box);\r
    if(cp) cp.onclick = async ()=>{\r
      const txt = ($('#lmid',box)||{}).textContent || '';\r
      let done = false;\r
      try{ if(navigator.clipboard && window.isSecureContext){ await navigator.clipboard.writeText(txt); done = true; } }catch(e){}\r
      if(!done){\r
        try{ const r=document.createRange(); r.selectNodeContents($('#lmid',box));\r
             const sel=window.getSelection(); sel.removeAllRanges(); sel.addRange(r); }catch(e){}\r
      }\r
      cp.textContent = done ? T('Скопировано') : T('Выделено — нажмите Ctrl+C');\r
      setTimeout(()=>{ cp.textContent = T('Скопировать номер'); }, 2500);\r
    };\r
\r
    const b = $('#lsave', box); if(!b) return;\r
    b.onclick = async ()=>{\r
      const key = ($('#lkey',box).value||'').trim();\r
      b.disabled = true; b.textContent = 'Проверяю…';\r
      let r; try{ r = await (await api('/license',{method:'POST',body:JSON.stringify({key})})).json(); }\r
      catch(e){ r = null; }\r
      if(!r){ b.disabled=false; b.textContent='Сохранить ключ'; return; }\r
      // Ключ проверяется ОФЛАЙН и мгновенно, поэтому ответ показываем сразу и\r
      // прямо: «принят» или чем именно он плох. Молчаливое «сохранено» было бы\r
      // хуже отказа — человек решил бы, что лицензия оформлена.\r
      draw(r, r.mode==='licensed' ? 'Ключ принят.' : (r.keyWhy || 'Ключ не принят.'));\r
    };\r
  };\r
  draw(s, '');\r
}\r
\r
// ЛЁГКОЕ ОБНОВЛЕНИЕ (только код, ~320 КБ против ~277 МБ у установщика).\r
// Оно скачивается молча и применяется при следующем запуске, поэтому кнопок\r
// тут нет вовсе — есть строка состояния. Кричать ею каждый день не надо:\r
// человек ничего не должен делать.\r
async function codeBox(app){\r
  if(SNAP) return;\r
  let s; try{ s = await (await api('/code')).json(); }catch(e){ return; }\r
  if(!s.enabled) return;                 // подпись не настроена — молчим совсем\r
  const box = el('<div></div>');\r
  app.appendChild(box);\r
  const draw = s=>{\r
    if(s.lastFail){\r
      // Отказ обязан называть себя: молчаливый откат к старому коду — это\r
      // «почему-то не починилось», в котором человеку не разобраться.\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">\${L('обновление механизмов','engine update')} \${esc(s.lastFail.version)}\r
        \${L('не заработало — программа вернулась к встроенному коду и больше его не пробует. Напиши разработчику:','did not start — the program went back to its built-in code and will not retry it. Tell the developer:')}\r
        \${esc(s.lastFail.why||'')}</div>\`;\r
    } else if(s.ready){\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">\${L('обновление механизмов','engine update')} \${esc(s.readyVersion)}\r
        \${L('готово — применится, когда программа запустится в следующий раз','is ready — it will be applied the next time the program starts')}\${s.notes?' · '+esc(s.notes):''}</div>\`;\r
    } else if(s.needExe){\r
      // Код скачан, но ему нужна программа посвежее. Молчать тут нельзя: файл\r
      // лежит, обновление не применяется, и без строки это выглядит как «ничего\r
      // не происходит».\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">\${L('обновление механизмов','engine update')} \${esc(s.needExe.version)}\r
        \${L('скачано, но ему нужна программа не ниже','is downloaded, but it needs the program at version')} \${esc(s.needExe.minExe)}\r
        — \${L('поставьте полный установщик','install the full installer')}</div>\`;\r
    } else if(s.running){\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">\${L('механизмы обновлены до','engine updated to')} \${esc(s.running)}\r
        (\${L('программа','program')} \${esc(s.exe||'')}) · <a href="#" id="cchk">\${L('проверить механизмы','check engine')}</a></div>\`;\r
    } else {\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">\${L('механизмы: встроенные','engine: built-in')} · <a href="#" id="cchk">\${L('проверить механизмы','check engine')}</a></div>\`;\r
    }\r
    const c = $('#cchk', box);\r
    if(c) c.onclick = async e=>{ e.preventDefault(); c.textContent=L('смотрю…','checking…');\r
      try{ draw(await (await api('/code?check=1')).json()); }catch(err){ draw(s); } };\r
  };\r
  draw(s);\r
}\r
\r
async function viewList(){\r
  setCrumbs([{t:'Кабинет'}]);\r
  const app=$('#app'); app.innerHTML='<div class="muted">Загрузка…</div>';\r
  const {projects} = await (await api('/projects')).json();\r
  app.innerHTML='';\r
  const bar = el(\`<div class="actions" style="margin-bottom:12px"><button id="add">+ Новый проект</button></div>\`);\r
  $('#add',bar).onclick=async()=>{ const name=prompt('Название проекта:','Мониторинг'); if(!name)return; const p=await (await api('/projects',{method:'POST',body:JSON.stringify({name,config:{morph:true}})})).json(); location.hash='/p/'+p.id; };\r
  app.appendChild(bar);\r
  if(!projects.length){ app.appendChild(el(\`<div class="card empty">\r
      <div class="em">📡</div>\r
      <h3>Пока нет ни одного проекта</h3>\r
      <p class="muted">Проект — это один цикл мониторинга: свой список источников, своё слово,\r
        свой период и своё расписание. По разным темам заводят разные проекты, чтобы выдача не смешивалась.</p>\r
      <button id="add2">+ Создать первый проект</button>\r
      <!-- Новичок попадает СЮДА, а не в шапку: значок «?» он найдёт, только\r
           если станет его искать, а искать будет тот, кто уже понял, что\r
           непонятно. -->\r
      <div class="tag" style="margin-top:14px">Первый раз? <a href="#/help">Прочитайте короткую инструкцию</a> — три минуты.</div>\r
    </div>\`)); $('#add2',app).onclick=$('#add',bar).onclick; repBox(app); updateBox(app); codeBox(app); licenseBox(app); return; }\r
  const grid = el('<div class="pgrid"></div>');\r
  for(const p of projects){\r
    const last=p.last;\r
    const live = p.schedule && p.schedule.mode && p.schedule.mode!=='off';\r
    const c = el(\`<div class="card pcard">\r
      <div class="ptitle">\${esc(p.name)} \${p.newCount?\`<span class="badge">\${p.newCount} NEW</span>\`:''}</div>\r
      <div class="pq" title="\${esc(p.config.keyword||'')}">🔎 «\${esc(p.config.keyword||'—')}»</div>\r
      <div class="pnums">\r
        <div><div class="v">\${fmtN(p.itemCount||0)}</div><div class="k">материалов</div></div>\r
        <div><div class="v">\${fmtN(p.runsCount||0)}</div><div class="k">прогонов</div></div>\r
        <div><div class="v">\${last?fmtN(last.found||0):'—'}</div><div class="k">в последнем</div></div>\r
      </div>\r
      <div class="pfoot">\r
        <span class="pdot \${live?'on':''}">\${esc(schedText(p.schedule))}</span>\r
        <span>\${last?esc(fmtRun(last.at)):'не запускался'}</span>\r
      </div></div>\`);\r
    c.onclick=()=>location.hash='/p/'+p.id;\r
    grid.appendChild(c);\r
  }\r
  app.appendChild(grid);\r
  // Модуль отзывов — отдельной плашкой ПОД проектами: это другой инструмент,\r
  // и смешивать его карточки с проектами мониторинга СМИ было бы неверно.\r
  await repBox(app);\r
  updateBox(app);\r
  codeBox(app);\r
  licenseBox(app);\r
}\r
\r
// ---- МОНИТОРИНГ РЕПУТАЦИИ (2ГИС) — экспериментальный модуль ----\r
// Своя архитектура (объекты, снимки, события) — см. desktop/places*.js. В\r
// кабинете он живёт отдельным разделом #/rep, а на главной под проектами стоит\r
// плашка: закрыта — поле для кода, открыта — сводка по объектам.\r
// Строки тут собираются в коде вместе с числами, поэтому переводит их L(), а\r
// не словарь страницы.\r
const starsTxt = n => (n>=1&&n<=5) ? '★'.repeat(n)+'☆'.repeat(5-n) : '';\r
const repWhen = t => { const d=new Date(t); return isNaN(d)?'':d.toLocaleString(LANG==='en'?'en-GB':'ru-RU',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'}); };\r
// «через 2,3 дн.» у ответа фирмы: от написания отзыва до ответа.\r
const repAge = x => { if(!x||!x.answer||!x.answer.date||!x.created) return ''; const h=Math.max(0,(Date.parse(x.answer.date)-Date.parse(x.created))/36e5); if(!isFinite(h)) return '';\r
  return ' · '+L('через','after')+' '+(h<1?L('меньше часа','under an hour'):h<48?Math.round(h)+' '+L('ч','h'):(h/24).toFixed(1).replace('.',LANG==='en'?'.':',')+' '+L('дн.','days')); };\r
const repDay = t => { const d=new Date(t); return isNaN(d)?'':d.toLocaleDateString(LANG==='en'?'en-GB':'ru-RU',{day:'2-digit',month:'2-digit',year:'numeric'}); };\r
const repEvery = s => !s||s.mode!=='minutes' ? L('вручную','manual') : (s.everyMinutes>=60 ? L('каждые '+(s.everyMinutes/60)+' ч','every '+(s.everyMinutes/60)+' h') : L('каждые '+s.everyMinutes+' мин','every '+s.everyMinutes+' min'));\r
\r
async function repBox(app){\r
  let st; try{ st = await (await api('/places')).json(); }catch(e){ return; }\r
  const box = el('<div class="card repplaque"></div>');\r
  if(!st.unlocked){\r
    box.innerHTML = \`<div class="reph"><span class="em">🧪</span><div><b>\${L('Мониторинг репутации · 2ГИС','Reputation monitoring · 2GIS')}</b>\r
      <span class="badge" style="background:var(--warn)">\${L('экспериментальный модуль','experimental')}</span>\r
      <div class="hint" style="margin:4px 0 0">\${L('Новые отзывы, изменения оценок и рейтинга фирм в 2ГИС — с уведомлениями в телеграм. Доступ по коду администратора.','New reviews, rating changes and score updates of businesses on 2GIS, with Telegram alerts. Admin code required.')}</div></div></div>\r
      <div class="actions"><input id="repcode" type="password" inputmode="numeric" autocomplete="off" placeholder="\${L('код администратора','admin code')}" style="max-width:200px">\r
      <button id="repopen" class="sec">\${L('Открыть','Unlock')}</button><span class="tag" id="repmsg"></span></div>\`;\r
    const go = async ()=>{ const r = await (await api('/places/unlock',{method:'POST',body:JSON.stringify({code:$('#repcode',box).value})})).json();\r
      if(r.ok){ location.hash='/rep'; } else { $('#repmsg',box).textContent = L('Код не подошёл.','Wrong code.'); } };\r
    $('#repopen',box).onclick = go; $('#repcode',box).onkeydown = e=>{ if(e.key==='Enter') go(); };\r
  } else {\r
    const rows = st.objects.map(o=>\`<div class="repmini"><span>\${esc(o.name||L('загружаю…','loading…'))}</span>\r
      <span class="tag">\${o.card?('★ '+o.card.rating+' · '+fmtN(o.card.reviewsCount)+' '+L('отзывов','reviews')):(o.err?'⚠️':'…')}</span></div>\`).join('');\r
    box.innerHTML = \`<div class="reph"><span class="em">⭐</span><div><b>\${L('Мониторинг репутации · 2ГИС','Reputation monitoring · 2GIS')}</b>\r
      <span class="badge" style="background:var(--warn)">\${L('экспериментальный','experimental')}</span>\r
      <div class="hint" style="margin:4px 0 0">\${L('объектов','objects')}: \${st.objects.length} \${L('из','of')} \${st.max} · \${esc(repEvery(st.schedule))}</div></div></div>\r
      \${rows ? '<div class="repminis">'+rows+'</div>' : ''}\r
      <div class="actions"><a class="btnlink" href="#/rep">\${L('Открыть модуль →','Open module →')}</a></div>\`;\r
  }\r
  app.appendChild(box);\r
}\r
\r
// СРАВНЕНИЕ ОБЪЕКТОВ (11 октября 2026). Свои и чужие фирмы рядом, по уже\r
// собранному. У 2ГИС сравнение с конкурентами есть только у рекламодателей и\r
// без главного — как быстро фирма отвечает на плохое. Лучшее и худшее в\r
// столбце подсвечены; объект, у которого первый сбор ещё идёт, в этом не\r
// участвует — его числа неполные.\r
const fmtHrs = h=> h==null ? '—' : h<1 ? L('< 1 ч','< 1 h') : h<48 ? Math.round(h)+' '+L('ч','h') : (h/24).toFixed(1).replace('.',LANG==='en'?'.':',')+' '+L('дн.','d');\r
function repCompare(){\r
  const PERC = [['30',L('месяц','month')],['90',L('3 месяца','3 months')],['365',L('год','year')],['0',L('всё время','all time')]];\r
  const NEGC = [['2','1–2★'],['3','1–3★'],['4','1–4★']];\r
  const box = el(\`<div class="card"><h3 style="margin:0 0 4px">\${L('📊 Сравнение объектов','📊 Objects side by side')}</h3>\r
    <div class="hint">\${L('Все карточки рядом — свои и конкурентов. Считается по собранным отзывам, без запросов к 2ГИС. Зелёным — лучшее в столбце, красным — худшее. Щёлкните по заголовку, чтобы отсортировать.','All cards side by side — yours and competitors’. Counted from collected reviews, no requests to 2GIS. Green — best in the column, red — worst. Click a header to sort.')}</div>\r
    <div class="repctl"><div class="win">\${PERC.map(([k,t])=>\`<button data-cp="\${k}">\${t}</button>\`).join('')}</div>\r
      <div class="repneg"><span class="tag">\${L('считать отзывы с оценкой','count reviews scored')}:</span><div class="win">\${NEGC.map(([k,t])=>\`<button data-cn="\${k}">\${t}</button>\`).join('')}</div></div></div>\r
    <div id="cmp"><div class="muted">\${L('считаю…','counting…')}</div></div></div>\`);\r
  // Выбор переживает перерисовку: пока идёт сбор, страница модуля обновляется\r
  // каждые 5 секунд, и иначе период сбрасывался бы у человека из-под рук.\r
  const S = repCompare.s || (repCompare.s = {P:'30', N:'3', sortK:null, sortDir:-1});\r
  let P=S.P, N=S.N, sortK=S.sortK, sortDir=S.sortDir, rows=[];\r
  // [ключ, заголовок, как печатать, что лучше: 1 — больше, -1 — меньше, 0 — не сравниваем]\r
  const COLS = [\r
    ['rating', L('рейтинг на карточке 2ГИС','2GIS card rating'), x=>num2(x), 1],\r
    ['avgText', L('средняя оценка в отзывах с текстом','average score of text reviews'), x=>x!=null?num2(x.toFixed(2)):'—', 1],\r
    ['count', L('отзывов за период','reviews in period'), x=>fmtN(x), 0],\r
    ['avg', L('средняя оценка за период','average score in period'), x=>x!=null?num2(x.toFixed(2)):'—', 1],\r
    ['negShare', ()=>L('доля','share of')+' '+negWord(N), x=>x!=null?x+'%':'—', -1],\r
    ['replyShare', L('на них ответили','of them answered'), x=>x!=null?x+'%':'—', 1],\r
    ['replyMedianH', L('обычно отвечают через','usually reply after'), fmtHrs, -1],\r
    ['confirmedShare', L('подтверждённых отзывов','confirmed reviews'), x=>x!=null?x+'%':'—', 0],\r
    ['spikes', L('необычных всплесков','unusual spikes'), x=>x?'⚠️ '+x:'—', 0],\r
  ];\r
  const draw = ()=>{\r
    Object.assign(S, {P, N, sortK, sortDir});\r
    const host = $('#cmp',box);\r
    if(!rows.length){ host.innerHTML='<div class="hint">'+L('Объектов пока нет.','No objects yet.')+'</div>'; return; }\r
    const list = rows.slice();\r
    if(sortK) list.sort((a,b)=>{ const x=a[sortK], y=b[sortK]; if(x==null&&y==null) return 0; if(x==null) return 1; if(y==null) return -1; return (x>y?1:x<y?-1:0)*sortDir; });\r
    const mark = {};\r
    for(const [k,,,dir] of COLS){ if(!dir) continue;\r
      const vals = rows.filter(r=>r.ready&&r[k]!=null).map(r=>r[k]); if(vals.length<2) continue;\r
      const hi=Math.max(...vals), lo=Math.min(...vals); if(hi===lo) continue;\r
      mark[k] = { best: dir>0?hi:lo, worst: dir>0?lo:hi }; }\r
    host.innerHTML = \`<div class="wrap cmptbl"><table><thead><tr><th>\${L('объект','object')}</th>\${COLS.map(([k,t])=>\`<th class="n" data-k="\${k}" style="cursor:pointer">\${esc(typeof t==='function'?t():t)}\${sortK===k?(sortDir<0?' ▾':' ▴'):''}</th>\`).join('')}</tr></thead><tbody>\r
      \${list.map(r=>\`<tr><td><a href="#/rep/\${esc(r.id)}">\${esc(r.name||r.id)}</a>\${!r.ready?'<div class="tag">'+L('первый сбор ещё идёт — числа неполные','first collection still running — figures incomplete')+'</div>':''}\${r.err?'<div class="tag">⚠️ '+esc(r.err)+'</div>':''}</td>\r
        \${COLS.map(([k,,f])=>{ const m=mark[k], v=r[k]; const cls = r.ready&&m&&v!=null ? (v===m.best?' best':v===m.worst?' worst':'') : '';\r
          const tip = k==='replyShare'&&r.negCount ? ' title="'+esc(negWord(N)+' '+L('за период','in the period')+': '+r.negCount)+'"' : '';\r
          return \`<td class="n\${cls}"\${tip}>\${f(v)}</td>\`; }).join('')}</tr>\`).join('')}\r
      </tbody></table></div>\`;\r
    host.querySelectorAll('th[data-k]').forEach(th=>th.onclick=()=>{ const k=th.dataset.k; if(sortK===k) sortDir=-sortDir; else { sortK=k; const c=COLS.find(x=>x[0]===k); sortDir = c&&c[3]<0 ? 1 : -1; } draw(); });\r
  };\r
  const load = async ()=>{\r
    box.querySelectorAll('[data-cp]').forEach(b=>b.classList.toggle('on', b.dataset.cp===P));\r
    box.querySelectorAll('[data-cn]').forEach(b=>b.classList.toggle('on', b.dataset.cn===N));\r
    const r = await (await api('/places/compare?days='+P+'&neg='+N)).json().catch(e=>({error:e.message}));\r
    if(r.error){ $('#cmp',box).innerHTML='<div class="muted">'+esc(r.error)+'</div>'; return; }\r
    rows = r.rows||[]; draw();\r
  };\r
  box.querySelectorAll('[data-cp]').forEach(b=>b.onclick=()=>{ P=b.dataset.cp; load(); });\r
  box.querySelectorAll('[data-cn]').forEach(b=>b.onclick=()=>{ N=b.dataset.cn; load(); });\r
  load();\r
  return box;\r
}\r
\r
let repTimer = null;\r
async function viewRep(){\r
  clearTimeout(repTimer);\r
  setCrumbs([{t: L('← Кабинет','← Projects'), href:'#/'}, {t: L('Мониторинг репутации','Reputation monitoring')}]);\r
  const app=$('#app');\r
  let st; try{ st = await (await api('/places')).json(); }catch(e){ app.innerHTML='<div class="muted">'+esc(e.message)+'</div>'; return; }\r
  if(!st.unlocked){ app.innerHTML=''; await repBox(app); return; }\r
  const scrollY = window.scrollY;\r
  app.innerHTML='';\r
  const head = el(\`<div class="card">\r
    <div class="reph"><span class="em">⭐</span><div><h2 style="margin:0">\${L('Мониторинг репутации · 2ГИС','Reputation monitoring · 2GIS')}</h2>\r
      <div class="hint" style="margin:4px 0 0">\${L('Любые карточки 2ГИС — свои и чужие, владельцем быть не нужно. По своей фирме видно, что о ней пишут и как быстро вы отвечаете на плохое. По конкурентам — их рейтинг, отзывы, скорость ответов и всплески. Вставьте ссылку на карточку: сперва программа соберёт все отзывы и оценки, потом по расписанию будет смотреть, что изменилось, и присылать в телеграм.','Any 2GIS cards — yours and others’, no ownership needed. For your own business: what people write and how fast you answer the bad ones. For competitors: their rating, reviews, reply speed and spikes. Paste a card link: the program first collects all reviews and scores, then checks for changes on schedule and sends them to Telegram.')}</div></div></div>\r
    <div class="actions"><input id="repurl" placeholder="https://2gis.kz/astana/firm/70000001027712418" style="flex:1 1 320px">\r
      <button id="repadd">\${L('+ Добавить','+ Add')}</button><span class="tag">\${st.objects.length} \${L('из','of')} \${st.max}</span></div>\r
    <div class="tag" id="repaddmsg"></div>\r
  </div>\`);\r
  app.appendChild(head);\r
  $('#repadd',head).onclick = async ()=>{\r
    const b=$('#repadd',head); b.disabled=true; $('#repaddmsg',head).textContent=L('проверяю ссылку…','checking the link…');\r
    const r = await (await api('/places/objects',{method:'POST',body:JSON.stringify({url:$('#repurl',head).value})})).json().catch(e=>({error:e.message}));\r
    b.disabled=false;\r
    if(r.error){ $('#repaddmsg',head).textContent='⚠️ '+r.error; return; }\r
    $('#repaddmsg',head).textContent=L('Добавлено. Первый сбор идёт в фоне — большие карточки собираются за несколько обходов.','Added. The first collection runs in the background; large cards take several rounds.');\r
    setTimeout(viewRep, 1500);\r
  };\r
\r
  // Объекты\r
  const grid = el('<div class="pgrid"></div>');\r
  for(const o of st.objects){\r
    const h = o.harvest||{};\r
    const harvesting = !h.done;\r
    const c = el(\`<div class="card pcard">\r
      <div class="ptitle">\${esc(o.name||L('Загружаю карточку…','Loading card…'))} \${o.unsent?\`<span class="badge">\${o.unsent}</span>\`:''}</div>\r
      <div class="pq">\${esc(o.address||o.url||'')}</div>\r
      <div class="pnums">\r
        <div><div class="v">\${o.card?('★ '+o.card.rating):'—'}</div><div class="k">\${L('рейтинг','rating')}</div></div>\r
        <div><div class="v">\${o.card?fmtN(o.card.reviewsCount):'—'}</div><div class="k">\${L('отзывов','reviews')}</div></div>\r
        <div><div class="v">\${o.card?fmtN(o.card.ratingsCount):'—'}</div><div class="k">\${L('оценок','scores')}</div></div>\r
      </div>\r
      <div class="pfoot"><span>\${o.err?('⚠️ '+esc(o.err)):harvesting?(L('собираю отзывы','collecting')+(h.total?(': '+fmtN(Math.min(h.offset||0,h.total))+' / '+fmtN(h.total)):'…')):(L('проверено','checked')+' '+esc(repWhen(o.lastOk)))}</span>\r
        <span>\${o.notify&&o.notify.all===false?'<span title="'+esc(L('в бот по этому объекту ничего не шлём','nothing is sent to the bot for this object'))+'">🔕</span>':''}\${o.notify&&o.notify.remind?' <span title="'+esc(L('напоминаем о плохих отзывах без ответа','reminders about unanswered negative reviews'))+'">⏰</span>':''}</span></div>\r
    </div>\`);\r
    c.onclick=()=>location.hash='/rep/'+o.id;\r
    grid.appendChild(c);\r
  }\r
  if(st.objects.length) app.appendChild(grid);\r
  if(st.objects.length) app.appendChild(repCompare());\r
\r
  // Расписание и проверка\r
  const run = st.round;\r
  const sch = el(\`<div class="card"><h3 style="margin:0 0 8px">\${L('Как часто проверять','How often to check')}</h3>\r
    <div class="actions"><select id="repevery" style="max-width:240px">\r
      <option value="off">\${L('вручную','manual')}</option>\r
      \${st.everyChoices.map(m=>\`<option value="\${m}">\${m>=60?L('каждые '+(m/60)+' ч','every '+(m/60)+' h'):L('каждые '+m+' мин','every '+m+' min')}</option>\`).join('')}\r
    </select>\r
    <button id="repcheck" class="sec">\${run?L('Проверяю…','Checking…'):L('Проверить сейчас','Check now')}</button>\r
    <span class="tag">\${st.lastRound?(L('последняя проверка','last check')+': '+esc(repWhen(st.lastRound.at))+' · '+Math.round((st.lastRound.ms||0)/1000)+' '+L('с','s')):L('ещё не проверяли','not checked yet')}</span></div>\r
    <div class="hint">\${L('Браузер модулю не нужен: на объект уходит два запроса, поэтому он не мешает мониторингу СМИ. Чаще 20 минут не проверяем — 2ГИС начинает рвать соединение.','No browser needed: two requests per object, so it does not slow down media monitoring. Not more often than every 20 minutes — 2GIS starts dropping connections.')}</div>\r
  </div>\`);\r
  $('#repevery',sch).value = st.schedule && st.schedule.mode==='minutes' ? String(st.schedule.everyMinutes) : 'off';\r
  $('#repevery',sch).onchange = async e=>{ const v=e.target.value; await api('/places/schedule',{method:'POST',body:JSON.stringify(v==='off'?{mode:'off'}:{mode:'minutes',everyMinutes:+v})}); };\r
  $('#repcheck',sch).onclick = async ()=>{ await api('/places/check',{method:'POST'}); $('#repcheck',sch).textContent=L('Проверяю…','Checking…'); setTimeout(viewRep, 3000); };\r
  app.appendChild(sch);\r
\r
  // Бот\r
  const tg = st.tg || {};\r
  const okC = (tg.chats||[]).filter(c=>c.access==='ok'), noC = (tg.chats||[]).filter(c=>c.access==='no');\r
  const bot = el(\`<div class="card"><h3 style="margin:0 0 8px">\${L('Телеграм-бот модуля','Module Telegram bot')}</h3>\r
    <div class="hint">\${L('Бот один на весь модуль — это КУДА слать. ЧТО слать, решается у каждого объекта отдельно, на его странице: по своей фирме нужны напоминания об ответах, по конкуренту — обычно нет. Можно вставить токен нового бота (@BotFather → /newbot) или тот же токен, что у бота проекта — тогда подписчики и владелец берутся у проекта. Сообщения подписаны «Мониторинг репутации».','One bot for the whole module — that is WHERE to send. WHAT to send is set per object, on its page: for your own business you want reply reminders, for a competitor usually not. Paste a new bot token (@BotFather → /newbot) or the same token as a project bot — then subscribers and owner come from that project. Messages are signed “Reputation monitoring”.')}</div>\r
    <div class="actions"><input id="reptok" type="password" placeholder="\${tg.hasToken?'••••••••••••••••':L('токен бота','bot token')}" style="flex:1 1 280px">\r
      <button id="reptoksave" class="sec">\${L('Сохранить','Save')}</button><button id="reptokcheck" class="sec">\${L('Проверить','Check')}</button>\r
      <label class="check" style="margin:0"><input id="repon" type="checkbox" \${tg.enabled?'checked':''}> \${L('слать уведомления','send alerts')}</label></div>\r
    <div class="tag" id="reptg">\${tg.hasToken?(esc(tg.bot||L('бот','bot'))+(tg.borrowed?' · '+L('бот проекта — подписчики и владелец как в проекте','project bot — subscribers and owner as in the project'):'')\r
      +(okC.length?' · '+L('получают','receiving')+': '+esc(okC.map(c=>c.name).join(', ')):'')\r
      +(noC.length?' · '+L('без доступа, ничего не получают','no access, receive nothing')+': '+esc(noC.map(c=>c.name).join(', ')):'')\r
      +(tg.err?' · ⚠️ '+esc(tg.err):'')):L('бот не задан','no bot yet')}</div>\r
    \${tg.hasToken&&!tg.borrowed?\`<div class="hint" style="margin-top:6px">\${(tg.owners||[]).length?(L('Владелец','Owner')+': '+esc(tg.owners.join(', '))+'. '):('⚠️ '+L('Владелец не привязан — бот закрыт для всех. ','No owner yet — the bot is closed to everyone. '))}\${L('Откройте бота, нажмите Start и отправьте ему в личку','Open the bot, press Start and send it privately')}: <code>/iam \${esc(tg.ownerCode||'')}</code></div>\`:''}\r
  </div>\`);\r
  $('#reptoksave',bot).onclick = async ()=>{ const tok=$('#reptok',bot).value.trim(); await api('/places/telegram',{method:'POST',body:JSON.stringify(tok?{token:tok}:{})}); viewRep(); };\r
  $('#reptokcheck',bot).onclick = async ()=>{ $('#reptg',bot).textContent=L('проверяю…','checking…'); const r=await (await api('/places/telegram/check',{method:'POST'})).json(); if(!r.ok) $('#reptg',bot).textContent='⚠️ '+(r.error||''); else viewRep(); };\r
  $('#repon',bot).onchange = async e=>{ await api('/places/telegram',{method:'POST',body:JSON.stringify({enabled:e.target.checked})}); };\r
  app.appendChild(bot);\r
\r
  const foot = el(\`<div class="actions" style="justify-content:flex-end"><button id="replock" class="sec">\${L('Закрыть модуль кодом','Lock the module')}</button></div>\`);\r
  $('#replock',foot).onclick = async ()=>{ await api('/places/lock',{method:'POST'}); location.hash='/'; };\r
  app.appendChild(foot);\r
  window.scrollTo(0, scrollY);\r
  // Пока что-то собирается — перерисовываемся сами.\r
  if(run || st.objects.some(o=>!(o.harvest&&o.harvest.done)&&!o.err)) repTimer = setTimeout(()=>{ if(location.hash==='#/rep') viewRep(); }, 5000);\r
}\r
\r
function cloudHtml(words, force, maxAll){\r
  if(!words.length) return '<div class="muted">'+L('Пока мало отзывов для облака.','Not enough reviews yet.')+'</div>';\r
  const max = maxAll || Math.max(...words.map(w=>w.reviews));\r
  return '<div class="repcloud">'+words.slice().sort((a,b)=>a.word.localeCompare(b.word)).map(w=>{\r
    const size = 12 + Math.round(22*Math.sqrt(w.reviews/max));\r
    const cls = force || (w.tone>=0.5 ? 'pos' : w.tone<=-0.3 ? 'neg' : 'mid');\r
    const tip = L('встречается в '+w.reviews+' отзывах: хороших (4–5★) '+w.pos+', плохих и средних (1–3★) '+w.neg, 'in '+w.reviews+' reviews: positive (4–5★) '+w.pos+', negative and neutral (1–3★) '+w.neg);\r
    return \`<span class="\${cls}" style="font-size:\${size}px" title="\${esc(tip)}">\${esc(w.word)}</span>\`;\r
  }).join(' ')+'</div>';\r
}\r
\r
// РЕЙТИНГ: ЧТО СТОИТ ЗА ЦИФРОЙ, И ВСПЛЕСКИ (11 октября 2026). Факты рядом, без\r
// выводов: как 2ГИС считает рейтинг, он не раскрывает, а всплеск — не приговор\r
// (живые всплески оказались праздником и скандалом, а не накруткой). Считает\r
// сервер (places-signals.js), кабинет только рисует.\r
const num2 = x => x==null ? '—' : String(x).replace('.', LANG==='en'?'.':',');\r
// ОДНО НАЗВАНИЕ НА КАЖДЫЙ НАБОР ЗВЁЗД по всему модулю (11 октября 2026): в\r
// одном блоке 1–3★ звались «плохими», в облаке слов — «плохими и средними»,\r
// а 1–2★ тоже «плохими». Человек, отправивший страницу в PDF, видел «плохих\r
// 26%» и «плохих 34%» и не понимал, какое число верное. Теперь у каждого\r
// набора своё слово, и звёзды стоят рядом всегда.\r
const negWord = (m, form='gen') => {\r
  // gen — «77% плохих отзывов (1–2★)…», nom — заголовок, adj — рядом с «хороших (4–5★)».\r
  const T = {\r
    2: { gen:['плохих отзывов (1–2★)','negative reviews (1–2★)'], nom:['Плохие отзывы (1–2★)','Negative reviews (1–2★)'], adj:['плохих (1–2★)','negative (1–2★)'] },\r
    3: { gen:['плохих и средних отзывов (1–3★)','negative and neutral reviews (1–3★)'], nom:['Плохие и средние отзывы (1–3★)','Negative and neutral reviews (1–3★)'], adj:['плохих и средних (1–3★)','negative and neutral (1–3★)'] },\r
    4: { gen:['отзывов с оценкой 1–4★','reviews scored 1–4★'], nom:['Отзывы с оценкой 1–4★','Reviews scored 1–4★'], adj:['с оценкой 1–4★','scored 1–4★'] },\r
  }[+m];\r
  return T ? T[form][LANG==='en'?1:0] : '';\r
};\r
function repSignals(id){\r
  const box = el(\`<div class="card"><h3 style="margin:0 0 4px">\${L('🧮 Рейтинг на карточке и реальные оценки в отзывах','🧮 The card rating and the real scores in reviews')}</h3>\r
    <div class="hint">\${L('Рядом с рейтингом 2ГИС — средние оценки, посчитанные нами по самим отзывам. Ниже — дни, когда отзывов было в разы больше обычного.','Next to the 2GIS rating — average scores we computed from the reviews themselves. Below — days with many times more reviews than usual.')}</div>\r
    <div id="sigbody"><div class="muted">\${L('считаю…','counting…')}</div></div></div>\`);\r
  let days = '365';\r
  const load = async ()=>{\r
    const r = await (await api('/places/objects/'+id+'/signals?days='+days)).json().catch(e=>({error:e.message}));\r
    const host = $('#sigbody',box);\r
    if(r.error){ host.innerHTML='<div class="muted">'+esc(r.error)+'</div>'; return; }\r
    const g = r.rating, s = r.spikes, sl = r.silent;\r
    const diffTxt = g.verdict==='same'\r
      ? L('Рейтинг на карточке ('+num2(g.rating)+') совпадает со средней оценкой в отзывах с текстом ('+num2(g.avgText)+').','The card rating ('+g.rating+') matches the average score of text reviews ('+g.avgText+').')\r
      : g.verdict ? L('Рейтинг на карточке ('+num2(g.rating)+') '+(g.verdict==='higher'?'выше':'ниже')+', чем средняя оценка в отзывах с текстом ('+num2(g.avgText)+'), на '+num2(Math.abs(g.diff).toFixed(2))+'.','The card rating ('+g.rating+') is '+(g.verdict==='higher'?'higher':'lower')+' than the average score of text reviews ('+g.avgText+') by '+Math.abs(g.diff).toFixed(2)+'.') : '';\r
    const silentTxt = g.silent ? L(' Кроме отзывов, в рейтинг входят ещё ≈'+fmtN(g.silent)+' оценок без текста — это '+g.silentShare+'% всех оценок. Их 2ГИС не показывает, а как он считает рейтинг, не раскрывает, поэтому проверить, откуда взялась цифра на карточке, нельзя.',' Besides the reviews, the rating includes ≈'+fmtN(g.silent)+' scores without text — '+g.silentShare+'% of all scores. 2GIS does not show them and does not disclose how it computes the rating, so the card figure cannot be checked.') : '';\r
    const confTxt = g.confirmedCount ? L(' 2ГИС объявил, что с июля 2026 года считает рейтинг только по подтверждённым отзывам, но средняя по ним здесь — '+num2(g.avgConfirmed)+'.',' 2GIS announced that since July 2026 it counts confirmed reviews only, yet their average here is '+g.avgConfirmed+'.') : '';\r
    const sig = x=>{ const u = x.usualShares||{}; const vs = (v,usual)=> v!=null ? '<b>'+v+'%</b>'+(usual!=null?' ('+L('обычно','usually')+' '+usual+'%)':'') : '—';\r
      const span = x.from===x.to ? esc(repDay(x.from)) : esc(repDay(x.from))+' — '+esc(repDay(x.to));\r
      const what = x.kind==='pos'?L('в основном хорошие','mostly positive'):x.kind==='neg'?L('в основном плохие','mostly negative'):L('оценки вперемешку','mixed scores');\r
      // «Обычно» — округлённо: «~2,07 в день» читается как точность, которой нет.\r
      const usual = x.usualPerDay>=10 ? Math.round(x.usualPerDay) : num2(Math.round(x.usualPerDay*10)/10);\r
      return \`<div class="spike \${x.kind}"><h4>\${span}: \${revN(x.count)} — \${what} <span class="tag">\${L('обычно около','usually about')} \${usual} \${L('в день','a day')}</span></h4>\r
        <div class="sig"><span>\${L('хороших (4–5★)','positive (4–5★)')} <b>\${x.good}</b> · \${L('средних (3★)','neutral (3★)')} <b>\${x.mid}</b> · \${L('плохих (1–2★)','negative (1–2★)')} <b>\${x.bad}</b>\${x.avg!=null?' · '+L('средняя','average')+' '+num2(x.avg):''}</span>\r
          \${x.verifiedKnown?\`<span>\${L('подтверждённых (автор точно был на месте)','confirmed (the author really visited)')}: \${vs(x.verifiedShare,u.verifiedShare)}</span>\`:''}\r
          \${x.authorsKnown?\`<span>\${L('авторов, для которых это первый отзыв в 2ГИС','authors writing their first 2GIS review')}: \${vs(x.firstTimeShare,u.firstTimeShare)}</span>\`:''}\r
          \${x.unrated?\`<span>\${L('2ГИС не засчитал в рейтинг','not counted in the rating by 2GIS')}: <b>\${x.unrated}</b></span>\`:''}</div></div>\`; };\r
    host.innerHTML = \`<div class="kpis" style="margin-top:10px">\r
        <div class="kpi"><span class="em">⭐</span><div class="n">\${num2(g.rating)}</div><div class="l">\${L('рейтинг на карточке 2ГИС','rating on the 2GIS card')} · \${L('по','from')} \${fmtN(g.ratingsCount)} \${L('оценкам','scores')}</div></div>\r
        <div class="kpi"><span class="em">💬</span><div class="n">\${num2(g.avgText)}</div><div class="l">\${L('средняя оценка в','average score of')} \${fmtN(g.textCount)} \${L('отзывах с текстом','reviews with text')}</div></div>\r
        <div class="kpi"><span class="em">✅</span><div class="n">\${num2(g.avgConfirmed)}</div><div class="l">\${L('средняя оценка в','average score of')} \${fmtN(g.confirmedCount)} \${L('подтверждённых отзывах (автор точно был на месте)','confirmed reviews (the author really visited)')}</div></div>\r
        <div class="kpi"><span class="em">📅</span><div class="n">\${num2(g.avg30)}</div><div class="l">\${L('средняя оценка за последние 30 дней','average score, last 30 days')} · \${revN(g.count30)}</div></div>\r
        <div class="kpi"><span class="em">🤐</span><div class="n">\${g.silent!=null?'≈'+fmtN(g.silent):'—'}</div><div class="l">\${L('оценок без текста','scores without text')}\${g.silentShare!=null?' — '+g.silentShare+'% '+L('всех; 2ГИС их не показывает','of all; 2GIS does not show them'):''}</div></div>\r
      </div>\r
      \${diffTxt?\`<div class="repnote">\${diffTxt}\${silentTxt}\${confTxt}</div>\`:''}\r
      <div class="tag" style="margin-top:8px">\${sl.ready\r
        ? L('Оценок без текста за 7 дней: +'+fmtN(sl.last7)+' (обычно ~'+num2(sl.usualPerWeek)+' в неделю)','Scores without text in 7 days: +'+fmtN(sl.last7)+' (usually ~'+sl.usualPerWeek+' a week)')+(sl.spikes.length?' · ⚠️ '+L('всплески','spikes')+': '+sl.spikes.slice(0,5).map(x=>esc(repDay(x.day))+' +'+x.count).join(', '):'')\r
        : L('Сколько оценок без текста прибавляется за неделю, покажем через '+(sl.need-sl.observedDays)+' дн.: считаем по счётчикам карточки, нужно накопить наблюдения.','How many scores without text are added per week will show in '+(sl.need-sl.observedDays)+' days: we count from the card counters and need more observations.')}</div>\r
      <h4 style="margin:18px 0 4px">\${L('⚠️ Необычные всплески отзывов','⚠️ Unusual review spikes')}</h4>\r
      <div class="hint">\${L('Дни, когда фирме написали в разы больше отзывов, чем обычно (случайно так бывает реже раза в 10 000 дней). Причина может быть любой: акция, праздник, скандал, накрутка. Подсказка: при накрутке обычно меньше подтверждённых отзывов и больше авторов, которые пишут в 2ГИС впервые.','Days when the business got many times more reviews than usual (by chance this happens less than once in 10,000 days). The cause can be anything: a promotion, a holiday, a scandal, fake reviews. Hint: fake reviews are usually less often confirmed and more often written by first-time authors.')}</div>\r
      <div class="win" style="margin:8px 0"><button data-sd="365">\${L('за год','last year')}</button><button data-sd="0">\${L('за всё время','all time')}</button></div>\r
      \${!s.ready ? '<div class="muted">'+L('Посчитаем, когда соберём все старые отзывы: до этого неизвестно, сколько отзывов для фирмы обычно.','Will be counted once all old reviews are collected: until then the usual level is unknown.')+'</div>'\r
        : s.episodes.length ? s.episodes.slice(0,12).map(sig).join('')+(s.episodes.length>12?'<div class="tag">'+L('и ещё','and')+' '+(s.episodes.length-12)+'</div>':'')\r
        : '<div class="muted">'+L('Всплесков за этот период не было.','No spikes in this period.')+'</div>'}\`;\r
    box.querySelectorAll('[data-sd]').forEach(b=>{ b.classList.toggle('on', b.dataset.sd===days); b.onclick=()=>{ days=b.dataset.sd; load(); }; });\r
  };\r
  load();\r
  return box;\r
}\r
\r
// ЧТО ПРИСЫЛАТЬ В БОТ ПО ЭТОМУ ОБЪЕКТУ (11 октября 2026). Бот общий на модуль,\r
// а настройки — у каждой фирмы свои: по своей нужны напоминания об ответах, по\r
// конкуренту — обычно нет.\r
function repNotifyBox(id, n){\r
  const box = el(\`<div class="card noprint"><h3 style="margin:0 0 4px">\${L('🔔 Что присылать в бот по этому объекту','🔔 What to send to the bot for this object')}</h3>\r
    <div class="hint">\${L('Бот один на весь модуль, он задаётся','One bot for the whole module, set up')} <a href="#/rep">\${L('на странице модуля','on the module page')}</a>. \${L('Здесь — что слать именно по этой фирме.','Here — what to send for this business.')}</div>\r
    <div class="ntfy">\r
      <label class="check"><input type="checkbox" data-n="all"> \${L('присылать события этого объекта (новые отзывы, изменения оценок и рейтинга)','send this object’s events (new reviews, score and rating changes)')}</label>\r
      <label class="check" data-sub><input type="checkbox" data-n="answers"> \${L('и ответы фирмы на отзывы','and business replies to reviews')}</label>\r
      <label class="check" data-sub><input type="checkbox" data-n="spikes"> \${L('и всплески отзывов','and review spikes')}</label>\r
      <label class="check" data-sub><input type="checkbox" data-n="remind"> \${L('напоминать, если плохой отзыв','remind me when a negative review')}\r
        <select data-n="remindNeg"><option value="2">1–2★</option><option value="3">1–3★</option></select>\r
        \${L('висит без ответа дольше','stays unanswered for over')}\r
        <select data-n="remindDays">\${[1,2,3,5,7].map(d=>\`<option value="\${d}">\${d} \${L(d===1?'дня':'дней','day'+(d===1?'':'s'))}</option>\`).join('')}</select></label>\r
      <div class="hint" data-sub style="margin:0">\${L('Напоминаем один раз про каждый отзыв и только про те, что перешли этот срок ПОСЛЕ включения галочки: старый хвост без ответа в бот не вывалится. Перед напоминанием ответы сверяются с 2ГИС.','One reminder per review, and only for reviews that cross the limit AFTER you tick this box — the old unanswered backlog is not dumped into the bot. Replies are re-checked on 2GIS before each reminder.')}</div>\r
    </div><div class="tag" id="ntmsg"></div></div>\`);\r
  const fill = x=>{ n = x;\r
    box.querySelectorAll('input[data-n]').forEach(i=>i.checked=!!x[i.dataset.n]);\r
    box.querySelectorAll('select[data-n]').forEach(s=>s.value=String(x[s.dataset.n]));\r
    box.querySelectorAll('[data-sub]').forEach(e=>e.style.opacity = x.all?'':'.5');\r
    box.querySelectorAll('[data-sub] input, [data-sub] select').forEach(e=>e.disabled=!x.all); };\r
  fill(n);\r
  const save = async patch=>{ const r = await (await api('/places/objects/'+id+'/notify',{method:'POST',body:JSON.stringify(patch)})).json().catch(e=>({error:e.message}));\r
    if(r.error){ $('#ntmsg',box).textContent='⚠️ '+r.error; return; } fill(r.notify); $('#ntmsg',box).textContent=L('Сохранено.','Saved.'); };\r
  box.querySelectorAll('input[data-n]').forEach(i=>i.onchange=()=>save({[i.dataset.n]: i.checked}));\r
  box.querySelectorAll('select[data-n]').forEach(s=>s.onchange=()=>save({[s.dataset.n]: +s.value}));\r
  return box;\r
}\r
\r
async function viewRepObject(id){\r
  clearTimeout(repTimer);\r
  const app=$('#app'); app.innerHTML='<div class="muted">'+L('Загрузка…','Loading…')+'</div>';\r
  let d; try{ d = await (await api('/places/objects/'+id)).json(); }catch(e){ app.innerHTML='<div class="muted">'+esc(e.message)+'</div>'; return; }\r
  if(d.error){ app.innerHTML='<div class="muted">'+esc(d.error)+'</div>'; return; }\r
  const o=d.object, s=d.stats, card=o.card||{};\r
  setCrumbs([{t: L('← Кабинет','← Projects'), href:'#/'}, {t: L('Репутация','Reputation'), href:'#/rep'}, {t: o.name||id}]);\r
  app.innerHTML='';\r
  const top = el(\`<div class="card">\r
    <h2 style="margin:0 0 4px">\${esc(o.name||id)}</h2>\r
    <div class="tag">\${esc([o.address,o.category].filter(Boolean).join(' · '))} · <a href="\${esc(o.reviewsUrl)}" target="_blank" rel="noopener">\${L('отзывы в 2ГИС','reviews on 2GIS')}</a></div>\r
    \${o.err?\`<div class="warn" style="margin-top:8px">⚠️ \${esc(o.err)}</div>\`:''}\r
    <div class="kpis" style="margin-top:14px">\r
      <div class="kpi big"><span class="em">⭐</span><div class="n">\${num2(card.rating)}</div><div class="l">\${L('рейтинг на карточке 2ГИС — его видят клиенты','rating on the 2GIS card — what customers see')}</div></div>\r
      <div class="kpi"><span class="em">💬</span><div class="n">\${fmtN(card.reviewsCount)}</div><div class="l">\${L('отзывов с текстом','reviews with text')}</div></div>\r
      <div class="kpi"><span class="em">🌟</span><div class="n">\${fmtN(card.ratingsCount)}</div><div class="l">\${L('оценок всего — с текстом и без','scores in total — with and without text')}</div></div>\r
      <div class="kpi"><span class="em">📅</span><div class="n">\${num2(s.avg30)}</div><div class="l">\${L('средняя оценка за последние 30 дней','average score, last 30 days')} · \${revN(s.count30)}\${s.neg30?', '+L('из них плохих (1–2★)','of them negative (1–2★)')+' '+s.neg30:''}</div></div>\r
      <div class="kpi"><span class="em">↩️</span><div class="n">\${s.negReply&&s.negReply.count?s.negReply.share+'%':'—'}</div><div class="l">\${negWord(3)} \${L('получили ответ фирмы','got a business reply')}\${s.negReply&&s.negReply.count?' · '+fmtN(s.negReply.answered)+' '+L('из','of')+' '+fmtN(s.negReply.count):''}</div></div>\r
    </div>\r
    <div class="tag">\${L('собрано отзывов','reviews collected')}: \${fmtN(s.stored)}\${card.reviewsCount&&card.reviewsCount!==s.stored?' '+L('из','of')+' '+fmtN(card.reviewsCount)+' '+L('на карточке','on the card'):''}\${o.harvest&&!o.harvest.done?(' · '+L('первый сбор ещё идёт','first collection still running')):(o.trustVer<1?' · '+L('дочитываю признак «подтверждён»','filling in the “confirmed” flag'):'')}\${s.unrated?(' · '+L('2ГИС не засчитал в рейтинг','not counted in the rating by 2GIS')+': '+s.unrated):''} · \${L('данные на','data as of')} \${esc(repWhen(o.lastOk))}\r
      · <a href="/api/places/objects/\${esc(id)}/export.csv">\${L('скачать все отзывы (CSV)','download all reviews (CSV)')}</a>\r
      · <a href="#" id="repdel">\${L('убрать объект','remove object')}</a></div>\r
    <div class="actions" style="margin-top:10px">\r
      <button id="repone" class="sec">🔄 \${L('Обновить сейчас','Refresh now')}</button>\r
      <button id="repall" class="sec">📚 \${L('Перечитать все отзывы','Re-read all reviews')}</button>\r
    </div>\r
    <div class="hint">\${L('«Обновить сейчас» — обычная проверка только этого объекта: новые отзывы, правки, рейтинг. «Перечитать все отзывы» — полная перечитка архива без удаления объекта: история проверок, уведомления и напоминания остаются; отзывы, которых в 2ГИС больше нет, помечаются «удалён в 2ГИС», а не стираются. Перечитка идёт молча — в бот по ней ничего не уходит. Большой архив читается за несколько проверок, по 1500 отзывов за раз.','“Refresh now” is the usual check of this object only: new reviews, edits, rating. “Re-read all reviews” re-reads the whole archive without removing the object: check history, notifications and reminders stay; reviews no longer on 2GIS are marked “deleted on 2GIS”, not erased. The re-read is silent — nothing goes to the bot. A large archive takes several checks, 1,500 reviews at a time.')}</div>\r
    <div id="repprog" class="tag" style="margin-top:6px"></div>\r
  </div>\`);\r
  // Ход проверки и перечитки живёт В ПРОГРАММЕ, а не в этой вкладке: страницу\r
  // перезагрузили — строка всё равно покажет, что идёт (урок полоски обновления).\r
  const progText = ob => {\r
    const rr = ob.reread, dn = ob.rereadDone, out = [];\r
    if (ob.busy) out.push('⏳ '+L('проверяю этот объект…','checking this object…'));\r
    if (rr){\r
      if (rr.phase==='verify') out.push('📚 '+L('перечитка: архив прочитан, сверяю по номеру отзывы, которых 2ГИС не показал — осталось','re-read: archive read, checking by number the reviews 2GIS did not show — left')+' '+fmtN(rr.left));\r
      else out.push('📚 '+L('перечитка идёт: прочитано','re-read in progress: read')+' '+fmtN(Math.min(rr.offset, rr.total??rr.offset))+(rr.total!=null?' '+L('из','of')+' '+fmtN(rr.total):'')+' '+L('отзывов','reviews'));\r
      if(!ob.busy) out.push(L('продолжится со следующей проверкой','continues with the next check'));\r
      if (rr.err) out.push('⚠️ '+rr.err);\r
    } else if (dn) out.push('✅ '+L('перечитано','re-read')+' '+repWhen(dn.at)+': '+L('удалено в 2ГИС','deleted on 2GIS')+' '+fmtN(dn.gone)+', '+L('проверено по номеру и живы','checked by number and alive')+' '+fmtN(dn.alive));\r
    return out.join(' · ');\r
  };\r
  let progT=null;\r
  const showProg = ob => { $('#repprog',top).textContent = progText(ob);\r
    $('#repone',top).disabled = !!ob.busy; $('#repall',top).disabled = !!ob.busy;\r
    clearTimeout(progT);\r
    if (ob.busy) progT = setTimeout(async ()=>{ if(!document.body.contains(top)) return;\r
      try{ const x = await (await api('/places/objects/'+id)).json(); if(x.object){ if(!x.object.busy) viewRepObject(id); else showProg(x.object); } }catch(e){} }, 3000); };\r
  showProg(o);\r
  const press = async (sub, b) => { b.disabled=true;\r
    const r = await (await api('/places/objects/'+id+'/'+sub,{method:'POST'})).json().catch(e=>({error:e.message}));\r
    if (r.error){ b.disabled=false; $('#repprog',top).textContent='⚠️ '+r.error; return; }\r
    const x = await (await api('/places/objects/'+id)).json().catch(()=>null);\r
    if (x && x.object) showProg(x.object);\r
    if (r.note) $('#repprog',top).textContent += ' · '+r.note; };\r
  $('#repone',top).onclick = ()=>press('check', $('#repone',top));\r
  $('#repall',top).onclick = ()=>{ if(!o.reread && !confirm(L('Перечитать все отзывы объекта заново? Это займёт несколько минут, у большого архива — несколько проверок. Ничего не удаляется.','Re-read all reviews of this object? It takes a few minutes, several checks for a large archive. Nothing is deleted.'))) return; press('reread', $('#repall',top)); };\r
  $('#repdel',top).onclick = async e=>{ e.preventDefault(); if(!confirm(L('Перестать отслеживать и удалить собранное?','Stop tracking and delete collected data?')))return; await api('/places/objects/'+id,{method:'DELETE'}); location.hash='/rep'; };\r
  app.appendChild(top);\r
  app.appendChild(repSignals(id));\r
\r
  // Распределение оценок и месяцы\r
  const tot = s.dist.reduce((a,b)=>a+b,0)||1;\r
  const distHtml = [5,4,3,2,1].map(n=>{ const v=s.dist[n-1]; const p=Math.round(v/tot*100);\r
    return \`<div class="repdist"><span>\${'★'.repeat(n)}</span><div class="bar"><i style="width:\${p}%;background:\${n>=4?'var(--ok)':n===3?'var(--warn)':'var(--neg)'}"></i></div><span class="tag">\${fmtN(v)} · \${p}%</span></div>\`; }).join('');\r
  // Подтверждённые отзывы: 2ГИС знает, что автор был на месте. Считаем только\r
  // по отзывам, где признак ИЗВЕСТЕН — у собранных до 10 октября он дочитывается.\r
  const v = s.verified||{known:0,of:0,yes:0};\r
  const vNo = v.known - v.yes, vp = v.known ? Math.round(v.yes/v.known*100) : 0;\r
  const vRow = (lbl, n, av, neg, cls)=>\`<div class="repdist v"><span>\${lbl}</span><div class="bar"><i style="width:\${av?Math.round(av/5*100):0}%;background:var(--\${cls})"></i></div><span class="tag">\${av!=null?L('средняя','average')+' '+num2(av):'—'} · \${revN(n)}\${n?' · '+L('плохих (1–2★)','negative (1–2★)')+' '+Math.round(neg/n*100)+'%':''}</span></div>\`;\r
  const verHtml = !v.known ? \`<div class="muted">\${L('Признак ещё не собран — он дочитывается на ближайших проверках.','Not collected yet — it is filled in on the next checks.')}</div>\`\r
    : \`<div class="n" style="font-size:28px;font-weight:700;margin:2px 0 10px">\${vp}% <span class="tag" style="font-size:13px;font-weight:400">\${L('подтверждены','confirmed')} · \${fmtN(v.yes)} \${L('из','of')} \${fmtN(v.known)}</span></div>\r
      \${vRow('✅ '+L('подтверждённые','confirmed'), v.yes, v.avgYes, v.negYes, 'ok')}\r
      \${vRow(L('без подтверждения','not confirmed'), vNo, v.avgNo, v.negNo, 'mut')}\r
      \${v.known<v.of?\`<div class="tag" style="margin-top:6px">\${L('признак известен у','known for')} \${fmtN(v.known)} \${L('из','of')} \${fmtN(v.of)} — \${L('остальные дочитываются на следующих проверках','the rest is filled in on the next checks')}</div>\`:''}\`;\r
  // Периоды — один список на оба графика («Отзывы во времени» и «Плохие отзывы\r
  // во времени»). Столбики режет сервер одним правилом (periodBuckets в\r
  // places-reaction.js): каждый столбик — целый день, неделя, месяц или год,\r
  // и подписи с суммами у двух графиков не разъедутся.\r
  const PER = [['0',L('всё время','all time')],['365',L('год','year')],['180',L('полгода','6 months')],['90',L('3 месяца','3 months')],['30',L('месяц','month')],['7',L('неделя','week')]];\r
  const charts = el(\`<div class="charts">\r
    <div class="chart"><h4>\${L('⭐ Какие оценки ставят','⭐ Scores given')}</h4><div class="hint">\${L('сколько отзывов с каждой оценкой — среди тех, что 2ГИС засчитал в рейтинг','how many reviews have each score — among those 2GIS counts in the rating')}</div>\${distHtml}</div>\r
    <div class="chart w2big"><h4>\${L('✅ Подтверждённые отзывы','✅ Confirmed reviews')}</h4><div class="hint">\${L('«Подтверждён» — 2ГИС знает, что автор действительно был в этом месте. Если подтверждённые оценивают фирму заметно иначе, чем остальные, это повод присмотреться.','“Confirmed” means 2GIS knows the author really visited. If confirmed reviews score the business noticeably differently from the rest, take a closer look.')}</div>\${verHtml}</div>\r
    <div class="chart wide"><h4>\${L('📅 Сколько отзывов пишут','📅 How many reviews are written')}</h4>\r
      <div class="win">\${PER.map(([k,t])=>\`<button data-p="\${k}"\${k==='0'?' class="on"':''}>\${t}</button>\`).join('')}</div>\r
      <div class="tcap" id="tlcap"></div>\r
      <div id="repmonths"></div>\r
      <div class="tsel" id="tlsel"></div>\r
      <div class="tag" id="repavg"></div></div>\r
    \${d.history.length>1?\`<div class="chart wide"><h4>\${L('📈 Как менялся рейтинг на карточке (по нашим замерам)','📈 How the card rating changed (our measurements)')}</h4><div id="rephist"></div></div>\`:''}\r
  </div>\`);\r
  app.appendChild(charts);\r
  let tlP='0', tlSeq=0;\r
  const drawPer = async p=>{ tlP=p; const my=++tlSeq;\r
    charts.querySelectorAll('[data-p]').forEach(b=>b.classList.toggle('on', b.dataset.p===p));\r
    const r = await (await api('/places/objects/'+id+'/timeline?days='+p)).json().catch(e=>({error:e.message}));\r
    if(my!==tlSeq) return;   // пока ждали ответа, щёлкнули другой период\r
    if(r.error){ $('#repmonths',charts).innerHTML='<div class="muted">'+esc(r.error)+'</div>'; return; }\r
    const pts = r.points, kind = r.kind;\r
    $('#tlcap',charts).innerHTML = tlCaption(kind, pts, L('сколько отзывов написано','how many reviews were written'), L('Цвет — оценка.','Colour shows the score.'));\r
    const stack = [{key:'bad',color:CSSVAR('--neg','#f43f5e'),name:L('плохие 1–2★','negative 1–2★')},{key:'mid',color:CSSVAR('--warn','#fbbf24'),name:L('средние 3★','neutral 3★')},{key:'good',color:CSSVAR('--ok','#10b981'),name:L('хорошие 4–5★','positive 4–5★')}];\r
    barsTime($('#repmonths',charts), pts, { kind, stack, unit: L('отзывов','reviews'), sel: $('#tlsel',charts),\r
      title: (p,full)=> full+': '+revN(p.count)+(p.count?(' — '+L('хороших','positive')+' '+p.good+', '+L('средних','neutral')+' '+p.mid+', '+L('плохих','negative')+' '+p.bad+' · '+L('средняя','average')+' '+num2((p.sum/p.count).toFixed(2))):'') });\r
    const c = pts.reduce((a,x)=>a+x.count,0), sm = pts.reduce((a,x)=>a+x.sum,0), ng = pts.reduce((a,x)=>a+x.bad,0);\r
    $('#repavg',charts).textContent = c ? (L('Итого за показанный период','Total for the period shown')+': '+revN(c)+' · '+L('средняя оценка','average score')+' '+num2((sm/c).toFixed(2))+' · '+L('плохих (1–2★)','negative (1–2★)')+' '+ng+' ('+Math.round(ng/c*100)+'%)')\r
      : L('За этот период отзывов нет.','No reviews in this period.'); };\r
  charts.querySelectorAll('[data-p]').forEach(b=>b.onclick=()=>drawPer(b.dataset.p));\r
  drawPer('0');\r
  if(d.history.length>1) area($('#rephist',charts), d.history.map(h=>({day:new Date(h.at).toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}), count:h.rating})));\r
\r
  // РЕАКЦИЯ НА НЕГАТИВ (11 октября 2026). Одна общая доля «с ответом фирмы»\r
  // прятала главное: на 5★ фирмы отвечают охотно и быстро, а на плохие — реже\r
  // и за дни. Здесь всё отдельно: по звёздам, по подтверждённым, во времени, и\r
  // сами ответы — как фирма отреагировала. Период и порог негатива считает\r
  // сервер (places-reaction.js), кабинет только рисует.\r
  const NEG = [['2','1–2★'],['3','1–3★'],['4','1–4★']];\r
  const re = el(\`<div class="card"><h3 style="margin:0 0 4px">\${L('🛡️ Как фирма отвечает на плохие отзывы','🛡️ How the business answers negative reviews')}</h3>\r
    <div class="hint">\${L('Отвечает ли фирма недовольным клиентам и как быстро. «Обычно отвечают через» — типичный срок: половина ответов быстрее, половина медленнее, и один ответ через полгода его не искажает. Ответы на отзывы последних 45 дней перепроверяем в 2ГИС каждые 6 часов','Does the business answer unhappy customers, and how fast. “Usually replies after” is the typical time: half of the replies are faster, half slower, so one reply half a year late does not distort it. Replies to reviews from the last 45 days are re-checked on 2GIS every 6 hours')}\${o.answersAt?' · '+L('сверено','checked')+' '+esc(repWhen(o.answersAt)):''}.</div>\r
    <div class="repctl"><div class="win">\${PER.map(([k,t])=>\`<button data-rp="\${k}"\${k==='0'?' class="on"':''}>\${t}</button>\`).join('')}</div>\r
      <div class="repneg"><span class="tag">\${L('считать отзывы с оценкой','count reviews scored')}:</span><div class="win">\${NEG.map(([k,t])=>\`<button data-rn="\${k}"\${k==='3'?' class="on"':''}>\${t}</button>\`).join('')}</div></div></div>\r
    <div id="repre"><div class="muted">\${L('считаю…','counting…')}</div></div></div>\`);\r
  app.appendChild(re);\r
  let reP='0', reN='3';\r
  const fmtH = h=> h==null ? '—' : h<1 ? L('меньше часа','under an hour') : h<48 ? Math.round(h)+' '+L('ч','h') : (h/24).toFixed(1).replace('.',LANG==='en'?'.':',')+' '+L('дн.','days');\r
  const pc = (a,b)=> b ? Math.round(a/b*100)+'%' : '—';\r
  const shareRow = (lbl, g, cls)=>\`<div class="repdist v"><span>\${lbl}</span><div class="bar"><i style="width:\${g.share||0}%;background:var(--\${cls})"></i></div><span class="tag">\${g.count?(L('ответили на','replied to')+' '+g.share+'% · '+L('обычно за','usually within')+' '+fmtH(g.medianH)+' · '+revN(g.count)):L('нет отзывов','no reviews')}</span></div>\`;\r
  const reItem = (x, waiting)=>\`<div class="feed-item"><div class="d">\${esc(repDay(x.created))}</div><div class="t">\r
    <span class="repstar \${x.rating>=4?'pos':x.rating===3?'mid':'neg'}">\${starsTxt(x.rating)}</span> <b>\${esc(x.author)}</b>\${x.verified===true?' <span class="tag repok">✅ '+L('подтверждён','confirmed')+'</span>':''}\r
    <div style="margin-top:4px;white-space:pre-wrap">\${esc(x.text||L('(без текста)','(no text)'))}</div>\r
    \${waiting ? \`<div class="repwait">⏳ \${L('без ответа уже','unanswered for')} \${fmtH(x.ageH)}</div>\`\r
      : \`<div class="repans"><div class="repansh">↩️ \${L('Ответ фирмы','Business reply')} · \${esc(repDay(x.answer.date))} · \${L('через','after')} \${fmtH(x.replyH)}</div><div style="white-space:pre-wrap">\${esc(x.answer.text)}</div></div>\`}</div></div>\`;\r
  // СПИСОК ВИСЯЩИХ — ПОЛНЫЙ. Жалоба 11 октября 2026: над списком стояло «без\r
  // ответа — 14», а в списке восемь, и человек уже отправил отчёт с этой\r
  // нестыковкой. На экране видны первые восемь, остальные под кнопкой; при\r
  // сохранении в PDF печатаются ВСЕ (класс .more открывается правилом печати),\r
  // иначе в отчёте снова было бы «14» над восемью.\r
  const WAIT_SHOW = 8;\r
  const waitList = (list, total, cut)=>{\r
    const rest = list.length - WAIT_SHOW;\r
    return '<div class="feed-list">'+list.map((x,i)=>i<WAIT_SHOW?reItem(x,true):reItem(x,true).replace('class="feed-item"','class="feed-item more"')).join('')+'</div>'\r
      + (rest>0?\`<button class="morebtn" type="button" onclick="this.closest('div').classList.add('showall');this.remove()">\${L('Показать все','Show all')} \${fmtN(list.length)}</button>\`:'')\r
      + (cut?\`<div class="hint">\${L('Показаны самые свежие','Showing the newest')} \${fmtN(list.length)} \${L('из','of')} \${fmtN(total)}. \${L('Полный список — в выгрузке CSV с фильтром «без ответа».','The full list is in the CSV export with the “no reply” filter.')}</div>\`:'');\r
  };\r
  const loadRe = async ()=>{\r
    re.querySelectorAll('[data-rp]').forEach(b=>b.classList.toggle('on', b.dataset.rp===reP));\r
    re.querySelectorAll('[data-rn]').forEach(b=>b.classList.toggle('on', b.dataset.rn===reN));\r
    const r = await (await api('/places/objects/'+id+'/reaction?days='+reP+'&neg='+reN)).json().catch(e=>({error:e.message}));\r
    const box = $('#repre',re);\r
    if(r.error){ box.innerHTML='<div class="muted">'+esc(r.error)+'</div>'; return; }\r
    const n = r.neg, lbl = (NEG.find(x=>x[0]===String(r.negMax))||['','1–3★'])[1];\r
    if(!n.count){ box.innerHTML='<div class="muted">'+L('За этот период','In this period there are no')+' '+negWord(r.negMax)+L(' нет','')+'.</div>'; return; }\r
    box.innerHTML = \`<div class="kpis" style="margin-top:6px">\r
        <div class="kpi"><span class="em">↩️</span><div class="n">\${n.share}%</div><div class="l">\${negWord(r.negMax)} \${L('получили ответ фирмы','got a business reply')} · \${fmtN(n.answered)} \${L('из','of')} \${fmtN(n.count)}</div></div>\r
        <div class="kpi"><span class="em">⏱️</span><div class="n">\${fmtH(n.medianH)}</div><div class="l">\${L('обычно фирма отвечает через столько','the business usually replies after')}</div></div>\r
        <div class="kpi"><span class="em">⚡</span><div class="n">\${pc(n.in24,n.count)}</div><div class="l">\${L('ответили в течение суток','replied within 24 hours')}</div></div>\r
        <div class="kpi"><span class="em">⏳</span><div class="n">\${fmtN(n.waiting)}</div><div class="l">\${negWord(r.negMax)} \${L('до сих пор без ответа','still unanswered')}\${n.waitingOld&&n.waitingOld!==n.waiting?' · '+L('из них дольше 3 дней','over 3 days')+': '+fmtN(n.waitingOld):''}</div></div>\r
      </div>\r
      <div class="charts" style="margin-top:12px">\r
        <div class="chart"><h4>\${L('Как отвечают на отзывы с разной оценкой','Replies by score')}</h4><div class="hint">\${L('сравните: на хорошие отзывы фирмы обычно отвечают охотнее и быстрее','compare: businesses usually answer positive reviews more willingly and faster')}</div>\r
          \${r.byStars.map(g=>shareRow(g.key+'★', g, g.key==='5'||g.key==='4'?'ok':g.key==='3'?'warn':'neg')).join('')}</div>\r
        <div class="chart"><h4>\${L('Отвечают ли реальным посетителям','Are real visitors answered')}</h4><div class="hint">\${L('плохие отзывы от подтверждённых посетителей и от остальных','negative reviews from confirmed visitors and from the rest')}</div>\r
          \${shareRow('✅ '+L('подтверждённые','confirmed'), r.verified.yes, 'ok')}\${shareRow(L('без подтверждения','not confirmed'), r.verified.no, 'mut')}\r
          \${r.verified.unknown?\`<div class="tag" style="margin-top:6px">\${L('ещё не знаем, подтверждены ли','not yet known whether confirmed')}: \${fmtN(r.verified.unknown)}</div>\`:''}</div>\r
        <div class="chart wide"><h4>\${negWord(r.negMax,'nom')} \${L('и ответы фирмы','and business replies')}</h4><div class="tcap">\${tlCaption(r.kind, r.points, L('сколько','how many')+' '+negWord(r.negMax)+' '+L('написано','were written'), L('Зелёная часть — фирма на них ответила, красная — ответа нет до сих пор.','The green part got a business reply, the red part still has none.'))}</div><div id="repstack"></div><div class="tsel" id="restsel"></div></div>\r
      </div>\r
      <div class="cols2" style="margin-top:4px">\r
        <div><h4 style="margin:0 0 6px">\${L('↩️ Последние ответы фирмы','↩️ Latest business replies')}\${r.recentTotal>r.recent.length?' <span class="tag">'+fmtN(r.recent.length)+' '+L('из','of')+' '+fmtN(r.recentTotal)+'</span>':''}</h4>\${r.recent.length?'<div class="feed-list">'+r.recent.map(x=>reItem(x,false)).join('')+'</div>':'<div class="muted">'+L('Ответов за период нет.','No replies in this period.')+'</div>'}</div>\r
        <div><h4 style="margin:0 0 6px">\${L('⏳ Без ответа','⏳ Unanswered')} — \${fmtN(n.waiting)}</h4>\${r.waitingList.length?waitList(r.waitingList, n.waiting, r.waitingCut):'<div class="muted">'+L('Фирма ответила на все такие отзывы за период.','The business has replied to all such reviews in this period.')+'</div>'}</div>\r
      </div>\`;\r
    barsTime($('#repstack',box), r.points.map(p=>({...p, ans:p.answered, no:p.neg-p.answered})), { kind: r.kind, unit: L('отзывов','reviews'), sel: $('#restsel',box),\r
      stack: [{key:'ans',color:CSSVAR('--ok','#10b981'),name:L('фирма ответила','business replied')},{key:'no',color:CSSVAR('--neg','#f43f5e'),name:L('без ответа','no reply')}],\r
      title: (p,full)=> full+': '+L('плохих','negative')+' '+p.neg+(p.neg?(' — '+L('с ответом','replied')+' '+p.ans+', '+L('без ответа','no reply')+' '+p.no+(p.medianH!=null?' · '+L('обычно отвечали через','typical reply after')+' '+fmtH(p.medianH):'')):'') });\r
  };\r
  re.querySelectorAll('[data-rp]').forEach(b=>b.onclick=()=>{ reP=b.dataset.rp; loadRe(); });\r
  re.querySelectorAll('[data-rn]').forEach(b=>b.onclick=()=>{ reN=b.dataset.rn; loadRe(); });\r
  loadRe();\r
\r
  app.appendChild(repNotifyBox(id, o.notify||{}));\r
\r
  // События\r
  const evIcon = {new:'🆕',rating:'✏️',edited:'✏️',answer:'💬',unrated:'🚫',card:'📊',spike:'⚠️',remind:'⏰'};\r
  const evText = e=>{ const r=e.review||{};\r
    if(e.kind==='spike'){ const x=e.episode||{}; return L('всплеск отзывов','review spike')+': '+x.count+' '+(x.from===x.to?esc(repDay(x.from)):esc(repDay(x.from))+' — '+esc(repDay(x.to)))+' · '+L('хороших','positive')+' '+x.good+', '+L('плохих','negative')+' '+x.bad; }\r
    if(e.kind==='remind') return L('плохой отзыв без ответа уже','negative review unanswered for')+' '+e.days+' '+L('дн.','days')+' '+starsTxt(r.rating)+' · '+esc(r.author||'')+' — '+esc(String(r.text||'').slice(0,160));\r
    if(e.kind==='card'){ const f=e.from||{},t=e.to||{}; return L('карточка','card')+': ★'+f.rating+' → ★'+t.rating+', '+L('отзывов','reviews')+' '+f.reviewsCount+' → '+t.reviewsCount+', '+L('оценок','scores')+' '+f.ratingsCount+' → '+t.ratingsCount+(e.silentVotes?(' ('+L('без текста','no text')+' +'+e.silentVotes+')'):''); }\r
    const what = {new:L('новый отзыв','new review'),rating:L('оценка изменена','score changed')+' '+starsTxt(e.from)+' →',edited:L('отзыв исправлен','review edited'),answer:L('ответ фирмы','business reply'),unrated:L('не учтён в рейтинге','not counted')}[e.kind]||e.kind;\r
    return what+' '+starsTxt(r.rating)+' · '+esc(r.author||'')+' — '+esc(String(r.text||'').slice(0,160)); };\r
  const evs = el(\`<div class="card"><h3 style="margin:0 0 8px">\${L('Что изменилось','What changed')}</h3>\r
    \${d.events.length?'<div class="feed-list">'+d.events.slice(0,60).map(e=>\`<div class="feed-item"><div class="d">\${esc(repWhen(e.at))}</div><div class="t">\${evIcon[e.kind]||'•'} \${evText(e)}\${e.sent?'':' <span class="tag">'+L('ещё не отправлено','not sent yet')+'</span>'}</div></div>\`).join('')+'</div>'\r
      :'<div class="hint">'+L('Пока ничего: старые отзывы собраны молча, события пойдут с новых.','Nothing yet: existing reviews were collected silently; events start with new ones.')+'</div>'}\r
  </div>\`);\r
  app.appendChild(evs);\r
\r
  // Облако слов. По умолчанию — ОБЩАЯ КАРТИНА: за что хвалят и за что ругают\r
  // рядом, с соотношением. Одно облако «плохих» без «хороших» рисует фирму\r
  // хуже, чем она есть (и наоборот), — человеку нужна вся картина сразу.\r
  const cl = el(\`<div class="card"><h3 style="margin:0 0 4px">\${L('☁️ Облако слов','☁️ Word cloud')}</h3>\r
    <div class="hint">\${L('Какими словами клиенты описывают фирму. Слева — слова, которые чаще звучат в хороших отзывах (4–5★), справа — в плохих и средних (1–3★). Чем крупнее слово, тем в большем числе отзывов оно встречается. Считает программа, без ИИ; наведите на слово — покажет цифры.','The words customers use about the business. Left — words more frequent in positive reviews (4–5★), right — in negative and neutral ones (1–3★). The bigger the word, the more reviews mention it. Counted by the program, no AI; hover a word for numbers.')}</div>\r
    <div class="win"><button data-g="picture" class="on">\${L('общая картина','overall picture')}</button><button data-g="picture30">\${L('картина за 30 дней','last 30 days')}</button><button data-g="all">\${L('все слова подряд','all words')}</button></div>\r
    <div id="repcl"><div class="muted">\${L('считаю…','counting…')}</div></div></div>\`);\r
  app.appendChild(cl);\r
  const loadCloud = async g=>{ cl.querySelectorAll('[data-g]').forEach(b=>b.classList.toggle('on', b.dataset.g===g));\r
    const q = g==='picture30' ? 'g=picture&days=30' : 'g='+g;\r
    const r = await (await api('/places/objects/'+id+'/cloud?'+q)).json();\r
    if(r.mode==='picture'){\r
      const pp = r.reviews ? Math.round(100*r.pos/r.reviews) : 0;\r
      const bar = r.reviews ? \`<div class="repbal"><div class="p" style="width:\${pp}%"></div><div class="n" style="width:\${100-pp}%"></div></div>\r
        <div class="tag" style="margin:4px 0 10px">\${L('хороших (4–5★)','positive (4–5★)')}: \${fmtN(r.pos)} (\${pp}%) · \${negWord(3,'adj')}: \${fmtN(r.neg)} (\${100-pp}%)</div>\` : '';\r
      // Масштаб ОБЩИЙ на обе колонки: «отличный» в 117 отзывах и «ужасный» в 17\r
      // обязаны выглядеть разными — иначе картина врёт о соотношении.\r
      const maxAll = Math.max(1, ...(r.praise||[]).map(w=>w.reviews), ...(r.blame||[]).map(w=>w.reviews));\r
      const col = (title, words, cls) => \`<div class="repcol"><div class="repcolh \${cls}">\${title}</div>\${cloudHtml(words, cls, maxAll)}</div>\`;\r
      $('#repcl',cl).innerHTML = bar + '<div class="reppic">' + col('👍 '+L('За что хвалят','Praised for'), r.praise||[], 'pos') + col('👎 '+L('За что ругают','Criticised for'), r.blame||[], 'neg') + '</div>';\r
      return;\r
    }\r
    $('#repcl',cl).innerHTML = '<div class="tag" style="margin-bottom:8px">'+L('все отзывы','all reviews')+' · '+L('отзывов','reviews')+': '+fmtN(r.reviews)+'</div>'+cloudHtml(r.words||[]); };\r
  cl.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>loadCloud(b.dataset.g));\r
  loadCloud('picture');\r
\r
  // ИИ-анализ\r
  const me = await (await api('/me')).json().catch(()=>({}));\r
  const ai = d.ai;\r
  const aiBox = el(\`<div class="card gemini"><h3 style="margin:0 0 4px">\${L('✨ ИИ-анализ отзывов','✨ AI review analysis')}</h3>\r
    <div class="hint">\${me.hasGeminiKey?L('В Google уходят оценки, даты и тексты всех собранных отзывов (свежие первыми). Имена авторов не уходят. Платится квотой Google.','Scores, dates and texts of all collected reviews go to Google (newest first). Author names are not sent. Uses your Google quota.')\r
      :L('Нужен ключ Gemini — его задают во вкладке «Аналитика» любого проекта.','A Gemini key is needed — set it in the “Analytics” tab of any project.')}</div>\r
    <div class="actions"><button id="repai" \${me.hasGeminiKey?'':'disabled'}>\${ai?L('Спросить заново','Ask again'):L('✨ Разобрать отзывы','✨ Analyse reviews')}</button><span class="tag" id="repaimeta">\${ai?(esc(repWhen(ai.at))+' · '+esc(ai.model||'')+' · '+L('отзывов в разборе','reviews used')+': '+ai.used+(ai.total>ai.used?' '+L('из','of')+' '+ai.total:'')):''}</span></div>\r
    <div class="out \${ai&&ai.ok?'':'muted'}" id="repaiout">\${ai?(ai.ok?esc(ai.text):esc(ai.err)):L('Разбора ещё не было.','No analysis yet.')}</div></div>\`);\r
  $('#repai',aiBox).onclick = async ()=>{ const b=$('#repai',aiBox); b.disabled=true; $('#repaiout',aiBox).textContent=L('Модель читает отзывы — это может занять минуту-две…','The model is reading reviews — this may take a minute or two…');\r
    const r = await (await api('/places/objects/'+id+'/ai',{method:'POST'})).json().catch(e=>({err:e.message}));\r
    b.disabled=false; $('#repaiout',aiBox).textContent = r.ok ? r.text : ('⚠️ '+(r.err||r.error||''));\r
    $('#repaiout',aiBox).classList.toggle('muted', !r.ok);\r
    if(r.ok) $('#repaimeta',aiBox).textContent = repWhen(r.at)+' · '+(r.model||'')+' · '+L('отзывов в разборе','reviews used')+': '+r.used+(r.total>r.used?' '+L('из','of')+' '+r.total:''); };\r
  app.appendChild(aiBox);\r
\r
  // Отзывы\r
  const rv = el(\`<div class="card"><h3 style="margin:0 0 8px">\${L('Отзывы','Reviews')}</h3>\r
    <div class="actions"><select id="repstars" style="max-width:220px"><option value="">\${L('все оценки','all scores')}</option><option value="1,2">\${L('плохие 1–2★','negative 1–2★')}</option><option value="3">3★</option><option value="4,5">\${L('хорошие 4–5★','positive 4–5★')}</option></select>\r
      <select id="repansf" style="max-width:220px"><option value="">\${L('ответ фирмы: любой','business reply: any')}</option><option value="1">\${L('есть ответ фирмы','with a reply')}</option><option value="0">\${L('без ответа фирмы','without a reply')}</option></select>\r
      <label class="check" style="margin:0"><input id="repver" type="checkbox"> \${L('только подтверждённые','confirmed only')}</label>\r
      \${s.gone?\`<label class="check" style="margin:0"><input id="repgone" type="checkbox"> \${L('только удалённые в 2ГИС','deleted on 2GIS only')} (\${fmtN(s.gone)})</label>\`:''}\r
      <input id="repq" placeholder="\${L('слово в тексте','word in text')}" style="max-width:220px"><span class="tag" id="reptotal"></span></div>\r
    <div id="replist" class="feed-list" style="max-height:none"></div>\r
    <div class="actions"><button id="repmore" class="sec" hidden>\${L('Ещё','More')}</button></div></div>\`);\r
  app.appendChild(rv);\r
  let off=0;\r
  const loadRev = async (reset)=>{ if(reset){ off=0; $('#replist',rv).innerHTML=''; }\r
    const q = '?offset='+off+'&limit=30&stars='+encodeURIComponent($('#repstars',rv).value)+'&q='+encodeURIComponent($('#repq',rv).value.trim())+($('#repver',rv).checked?'&ver=1':'')+($('#repansf',rv).value?'&ans='+$('#repansf',rv).value:'')+($('#repgone',rv)&&$('#repgone',rv).checked?'&gone=1':'');\r
    const r = await (await api('/places/objects/'+id+'/reviews'+q)).json();\r
    $('#reptotal',rv).textContent = L('найдено','found')+': '+fmtN(r.total);\r
    for(const x of r.reviews){ $('#replist',rv).appendChild(el(\`<div class="feed-item"><div class="d">\${esc(repDay(x.created))}\${x.edited?'<br>✏️ '+esc(repDay(x.edited)):''}</div>\r
      <div class="t"><span class="repstar \${x.rating>=4?'pos':x.rating===3?'mid':'neg'}">\${starsTxt(x.rating)}</span> <b>\${esc(x.author||'')}</b>\${x.verified===true?' <span class="tag repok" title="'+esc(L('2ГИС знает, что автор был на месте','2GIS knows the author visited'))+'">✅ '+L('подтверждён','confirmed')+(x.trust?' · '+esc(x.trust):'')+'</span>':''}\${x.rated===false?' <span class="tag" title="'+esc(x.hideReason||'')+'">🚫 '+L('не учтён в рейтинге','not counted')+'</span>':''}\${x.gone?' <span class="tag" title="'+esc(L('при полной перечитке 2ГИС ответил, что такого отзыва больше нет','on a full re-read 2GIS said this review no longer exists'))+'">🗑️ '+L('удалён в 2ГИС','deleted on 2GIS')+' · '+esc(repDay(x.gone))+'</span>':''}\r
        <div style="margin-top:4px;white-space:pre-wrap">\${esc(x.text||L('(без текста)','(no text)'))}</div>\r
        \${x.answer?\`<button class="repansb" type="button" aria-expanded="false">↩️ \${L('есть ответ фирмы','business replied')}\${repAge(x)} <span class="caret">▸</span></button>\r
          <div class="repans" hidden><div class="repansh">↩️ \${L('Ответ фирмы','Business reply')}\${x.answer.date?' · '+esc(repDay(x.answer.date)):''}\${repAge(x)}</div><div style="white-space:pre-wrap">\${esc(x.answer.text)}</div></div>\`\r
          : \`<div class="tag" style="margin-top:6px">\${L('без ответа фирмы','no business reply')}</div>\`}</div></div>\`)); }\r
    $('#replist',rv).querySelectorAll('.repansb:not([data-on])').forEach(b=>{ b.dataset.on='1'; b.onclick=()=>{ const box=b.nextElementSibling; box.hidden=!box.hidden; b.setAttribute('aria-expanded', String(!box.hidden)); b.querySelector('.caret').textContent = box.hidden?'▸':'▾'; }; });\r
    off += r.reviews.length; $('#repmore',rv).hidden = off >= r.total; };\r
  $('#repstars',rv).onchange=()=>loadRev(true);\r
  $('#repver',rv).onchange=()=>loadRev(true);\r
  $('#repansf',rv).onchange=()=>loadRev(true);\r
  if($('#repgone',rv)) $('#repgone',rv).onchange=()=>loadRev(true);\r
  let qt=null; $('#repq',rv).oninput=()=>{ clearTimeout(qt); qt=setTimeout(()=>loadRev(true), 300); };\r
  $('#repmore',rv).onclick=()=>loadRev(false);\r
  loadRev(true);\r
  window.scrollTo(0,0);\r
}\r
\r
// ---- выбор источников галочками ----\r
// Предустановленные списки (сайты и телеграм-каналы) едут в репозитории и\r
// приходят из /api/presets. Галочка НЕ хранит состояние отдельно: она просто\r
// добавляет и убирает строку в том же поле «Источники». Так у списка остаётся\r
// один хозяин — поле, — и свои источники, вписанные руками, ничем не отличаются\r
// от предустановленных и никуда не пропадают.\r
const normSrc = s=>String(s||'').trim().toLowerCase()\r
  .replace(/^https?:\\/\\//,'').replace(/^www\\./,'')\r
  .replace(/^t\\.me\\/s\\//,'t.me/').replace(/^@/,'t.me/').replace(/\\/+$/,'');\r
// СКОЛЬКО ПРОГОНОВ В СУТКИ ДАЁТ ЭТО РАСПИСАНИЕ. Правило то же, что в\r
// desktop/run-rate.js, и продублировано оно НАМЕРЕННО: кабинету надо погасить\r
// галочку и кнопку ДО сохранения настроек, то есть до того, как сервер вообще\r
// узнает о новом расписании. Настоящий запрет при этом стоит на сервере —\r
// кабинет только показывает правило, а не обеспечивает его.\r
// 0 — расписания нет: прогон идёт, только когда человек нажал кнопку.\r
function runsPerDayUi(sch){\r
  const m = String((sch&&sch.mode)||'off');\r
  if(m==='daily') return 1;\r
  if(m==='hours') return Math.max(1, Math.ceil(24/Math.max(1, +(sch.everyHours)||6)));\r
  if(m==='minutes') return Math.max(1, Math.ceil(1440/Math.max(10, +(sch.everyMinutes)||20)));\r
  return 0;\r
}\r
let PRESETS = null;\r
async function buildPicks(head){\r
  const box = $('#picks',head), ta = $('#sites',head);\r
  if(!PRESETS){ try{ PRESETS = await (await api('/presets')).json(); }catch(e){ box.textContent='списки не загрузились — впишите источники руками'; return; } }\r
  // Мировые СМИ — ОТДЕЛЬНАЯ группа и по умолчанию не отмечена: новый проект\r
  // заводится под казахстанский мониторинг. И заголовок сразу говорит про язык:\r
  // «Тоқаев» на англоязычном сайте даст ноль, писать надо «Tokayev». Это первое,\r
  // обо что тут спотыкаются, и подсказка должна стоять до первой галочки, а не\r
  // в инструкции.\r
  const groups = [\r
    { key:'sites', title:'Сайты', items:PRESETS.sites||[] },\r
    { key:'world', title:'Мировые СМИ (запрос пишите по-английски: Tokayev)', items:PRESETS.world||[] },\r
    // Российские СМИ — тоже отдельной группой и тоже не отмечены по умолчанию.\r
    // Про язык тут предупреждать не надо: запрос тот же русский, что и в\r
    // казахстанском списке.\r
    { key:'ru', title:'Российские СМИ', items:PRESETS.ru||[] },\r
    { key:'telegram', title:'Телеграм-каналы (читаются без браузера)', items:PRESETS.telegram||[] },\r
  ];\r
  box.innerHTML='';\r
  for(const g of groups){\r
    // СПИСОК СВЁРНУТ, а в заголовке стоит «выбрано N из M». Разворачивать его по\r
    // умолчанию значило бы полсотни галочек на пол-экрана в колонке настроек —\r
    // а ответ на вопрос «что сейчас отмечено» даёт счётчик, не открывая список.\r
    const d = el(\`<details class="card" style="margin:6px 0;padding:10px">\r
      <summary style="cursor:pointer;font-weight:600">\${esc(g.title)} <span class="tag" data-cnt></span></summary>\r
      <div class="pickbar"><button class="sec" data-all>Выбрать все</button><button class="sec" data-none>Снять все</button></div>\r
      <div class="picks">\${g.items.map(it=>\`<label title="\${esc(it.url)}\${it.note?' — '+esc(it.note):''}">\r
        <input type="checkbox" data-src="\${esc(it.url)}">\r
        <span class="n">\${esc(it.name||it.url)}</span>\${it.note?'<span class="h">▸</span>':''}</label>\`).join('')}</div>\r
    </details>\`);\r
    d.querySelector('[data-all]').onclick=e=>{ e.preventDefault(); d.querySelectorAll('input[data-src]').forEach(i=>i.checked=true); applyPicks(head); };\r
    d.querySelector('[data-none]').onclick=e=>{ e.preventDefault(); d.querySelectorAll('input[data-src]').forEach(i=>i.checked=false); applyPicks(head); };\r
    d.querySelectorAll('input[data-src]').forEach(i=>i.onchange=()=>applyPicks(head));\r
    box.appendChild(d);\r
  }\r
  // НОВИНКИ СПИСКА у уже созданного проекта. Галочка живёт только в поле\r
  // «Источники», поэтому сайт, добавленный в список после создания проекта, у\r
  // него НЕ отмечен — и без подсказки человек не узнает, что он вообще есть.\r
  // Отмечать молча нельзя: поле принадлежит человеку, он мог снять галочки\r
  // нарочно. Поэтому спрашиваем одной строкой, и ответ запоминается (presetsAck).\r
  const ack = head.dataset.ack || '';\r
  const fresh = groups.flatMap(g=>g.items).filter(it=>it.added && it.added > ack);\r
  const have0 = new Set(ta.value.split('\\n').map(normSrc).filter(Boolean));\r
  const unseen = fresh.filter(it=>!have0.has(normSrc(it.url)));\r
  if(unseen.length){\r
    const day = fresh.map(x=>x.added).sort().pop().split('-').reverse().slice(0,2).join('.');\r
    // Телеграм ВМЕСТО сайта (поле replaces): сайт из Казахстана не открывается.\r
    // Отметив канал, заменённый сайт из поля убираем — иначе он и дальше\r
    // съедал бы время прогона ради нуля. Только по нажатию: поле — человека.\r
    const swaps = unseen.filter(it=>it.replaces && have0.has(normSrc(it.replaces)));\r
    const b = el(\`<div class="card" data-fresh style="margin:6px 0;padding:10px;border-color:var(--acc)">\r
      <div>🆕 \${L('В список добавлены новые сайты','New sites were added to the list')} (\${unseen.length}, \${day}): \${unseen.map(x=>esc(x.name||x.url)).join(', ')}.</div>\r
      \${swaps.length?\`<div class="tag" data-swaps>\${L('Вместо сайтов, которые из Казахстана не открываются, — их телеграм-каналы. «Отметить новые» уберёт из поля','Telegram channels replace sites that do not open from Kazakhstan. “Select the new ones” will remove from the field')}: \${swaps.map(x=>esc(x.replaces)).join(', ')}.</div>\`:''}\r
      <div class="pickbar" style="margin-top:6px"><button class="sec" data-take>\${L('Отметить новые','Select the new ones')}</button><button class="sec" data-skip>\${L('Не нужно','Not needed')}</button></div>\r
      <div class="tag">\${L('После выбора нажмите «Сохранить настройки».','Then press “Save settings”.')}</div></div>\`);\r
    const done = take=>{\r
      if(take) unseen.forEach(it=>{ const i=box.querySelector(\`input[data-src="\${CSS.escape(it.url)}"]\`); if(i) i.checked=true; });\r
      if(take && swaps.length){ const gone=new Set(swaps.map(x=>normSrc(x.replaces))); ta.value=ta.value.split('\\n').filter(x=>!gone.has(normSrc(x))).join('\\n'); }\r
      head.dataset.ack = PRESETS.latest || fresh.map(x=>x.added).sort().pop();\r
      b.remove(); if(take) applyPicks(head); else syncPicks(head);\r
    };\r
    b.querySelector('[data-take]').onclick=e=>{ e.preventDefault(); done(true); };\r
    b.querySelector('[data-skip]').onclick=e=>{ e.preventDefault(); done(false); };\r
    box.prepend(b);\r
  }\r
  // Предупреждение о нерабочих адресах, вписанных в поле (в самом списке\r
  // галочек их нет). Пересчитывается при каждой правке поля.\r
  box.prepend(el('<div data-dead class="card" style="margin:6px 0;padding:10px;border-color:var(--warn)" hidden></div>'));\r
  ta.oninput=()=>syncPicks(head);\r
  syncPicks(head);\r
}\r
// Строка поля -> запись о нерабочем сайте (тот же адрес или его www-двойник).\r
function deadOf(line){\r
  const h = normSrc(line).split('/')[0];\r
  return h && (PRESETS && PRESETS.dead || []).find(d=>normSrc(d.host)===h);\r
}\r
// Видимая строка в шапке проекта: настройки обычно свёрнуты, и подсказка внутри\r
// них сама по себе не видна. Щелчок открывает настройки на списке.\r
function srcNote(head){\r
  const n=$('#srcNote',head); if(!n) return;\r
  const parts=[];\r
  const fr=$('#picks',head).querySelector('[data-fresh]');\r
  if(fr) parts.push(L('🆕 в список сайтов добавлены новые — отметить их можно в настройках','🆕 new sites were added to the list — select them in the settings'));\r
  const dd=$('#picks',head).querySelector('[data-dead]');\r
  if(dd && !dd.hidden) parts.push(L('⚠️ в источниках есть сайты, которые программа пропускает','⚠️ some sources are skipped by the program'));\r
  n.hidden=!parts.length;\r
  n.innerHTML=parts.map(x=>'<a href="#" data-open>'+x+'</a>').join('<br>');\r
  n.querySelectorAll('[data-open]').forEach(a=>a.onclick=e=>{ e.preventDefault(); $('#setwrap',head).open=true; $('#picks',head).scrollIntoView({block:'center'}); });\r
}\r
// Поле -> галочки (и счётчик «выбрано N из M» в заголовке группы).\r
function syncPicks(head){\r
  const lines = $('#sites',head).value.split('\\n').map(x=>x.trim()).filter(Boolean);\r
  const have = new Set(lines.map(normSrc).filter(Boolean));\r
  const dw = $('#picks',head).querySelector('[data-dead]');\r
  if(dw){\r
    const dead = lines.map(x=>[x,deadOf(x)]).filter(([,d])=>d);\r
    dw.hidden = !dead.length;\r
    if(dead.length){\r
      dw.innerHTML = \`<div>⚠️ \${L('Эти сайты программа пропускает — они не работают:','The program skips these sites — they do not work:')}</div>\`\r
        + dead.map(([x,d])=>\`<div class="tag" title="\${esc(d.note)}"><b>\${esc(x)}</b> — \${esc(d.note.split(/[;(—]|\\.\\s/)[0].trim().slice(0,140))}</div>\`).join('')\r
        + \`<div class="pickbar" style="margin-top:6px"><button class="sec" data-drop>\${L('Убрать их из источников','Remove them from the sources')}</button></div>\`\r
        + \`<div class="tag">\${L('После этого нажмите «Сохранить настройки».','Then press “Save settings”.')}</div>\`;\r
      dw.querySelector('[data-drop]').onclick=e=>{ e.preventDefault(); const ta=$('#sites',head);\r
        ta.value = ta.value.split('\\n').filter(x=>!deadOf(x)).join('\\n'); syncPicks(head); ta.dispatchEvent(new Event('input')); };\r
    }\r
  }\r
  $('#picks',head).querySelectorAll('details').forEach(d=>{\r
    const all=[...d.querySelectorAll('input[data-src]')];\r
    all.forEach(i=>i.checked = have.has(normSrc(i.dataset.src)));\r
    const cnt=d.querySelector('[data-cnt]');\r
    if(cnt) cnt.textContent = '· выбрано '+all.filter(i=>i.checked).length+' из '+all.length;\r
  });\r
  srcNote(head);\r
}\r
// Галочки -> поле. Строки, вписанные руками, сохраняются как есть и уходят вниз.\r
function applyPicks(head){\r
  const ta=$('#sites',head);\r
  const boxes=[...$('#picks',head).querySelectorAll('input[data-src]')];\r
  const known=new Set(boxes.map(i=>normSrc(i.dataset.src)));\r
  const own=ta.value.split('\\n').map(x=>x.trim()).filter(x=>x && !known.has(normSrc(x)));\r
  ta.value=[...boxes.filter(i=>i.checked).map(i=>i.dataset.src), ...own].join('\\n');\r
  syncPicks(head);\r
}\r
\r
// ---- проект: настройки (сворачиваемо) + вкладки прогонов ----\r
async function viewProject(id){\r
  const app=$('#app'); app.innerHTML='<div class="muted">Загрузка…</div>';\r
  const p = await (await api('/projects/'+id)).json();\r
  if(p.error){ app.innerHTML='<div class="card">Проект не найден. <a href="#/">назад</a></div>'; return; }\r
  setCrumbs([{t:'← Кабинет', href:'#/'},{t:p.name}]);\r
  const c=p.config||{}, s=p.schedule||{mode:'off'}, yt=c.youtube||{}, runs=p.runs||[];\r
  // Какие виды разбора отмечены. Умолчание — только расширенный обзор: каждый\r
  // вид это отдельный запрос к Google. Старое значение 'entities' (вид убран\r
  // 18 сентября 2026) среди галочек просто не встречается и молча отпадает, а\r
  // 'summary' (снятый 15 октября «Разбор») переезжает на обзор — его наследника,\r
  // ровно как на сервере (normKinds в ai-runner.js).\r
  const aiOn = k => ((Array.isArray(c.aiKinds) ? (c.aiKinds.includes(k) || (k==='review' && c.aiKinds.includes('summary'))) : k==='review') ? 'checked' : '');\r
  app.innerHTML='';\r
\r
  // Шапка проекта: действия + сворачиваемые настройки.\r
  const head = el(\`<div class="card">\r
    <div class="actions" style="margin-top:0">\r
      <div style="flex:1"><div style="font-weight:600;font-size:16px">\${esc(p.name)}</div>\r
        <div class="tag">\${T('запрос:')} «\${esc(c.keyword||'—')}» · \${schedText(s)} · \${periodText(c)}</div>\r
        \${(s.mode!=='off' && (c.periodMode||'fixed')==='fixed') ? '<div class="tag" style="color:var(--warn);margin-top:2px">⚠️ расписание включено, а период фиксированный: каждый прогон будет искать в одном и том же окне. Для мониторинга выберите «Ежедневный».</div>' : ''}\r
        <div id="srcNote" class="tag" style="color:var(--warn);margin-top:2px" hidden></div></div>\r
      <button id="run">Собрать сейчас</button>\r
      <button id="del" class="dng">Удалить</button>\r
    </div>\r
    <details id="setwrap" \${runs.length?'':'open'}><summary class="setsum">⚙️ Настройки проекта</summary>\r
\r
      <!-- САМОЕ ГЛАВНОЕ — НАД КОЛОНКАМИ. Название, что ищем и чего не хотим\r
           видеть: это настройки, которые человек меняет чаще всего, и прятать\r
           их в столбец рядом с фейсбуком было бы неверно. -->\r
      <div class="row" style="margin-top:12px">\r
        <div><label>Название проекта</label><input id="name" value="\${esc(p.name)}"></div>\r
        <div><label>Что ищем — запрос</label><input id="q" value="\${esc(c.keyword||'')}"></div>\r
        <div><label>Минус-слова — с ними материал в выдачу не попадёт</label><input id="ex" value="\${esc(c.exclude||'')}"></div>\r
      </div>\r
      <div class="tag why">Запятая — это <b>ИЛИ</b>: «Тоқаев, Токаев» найдёт оба написания. Пробел — <b>И</b>: оба слова должны быть в материале.\r
        Кавычки — точная фраза. На казахоязычных сайтах пишут через «қ», поэтому оба написания стоит указывать всегда.</div>\r
      <label class="check" style="margin-top:10px"><input id="morph" type="checkbox" \${c.morph!==false?'checked':''}> учитывать окончания слов (Токаева, Токаеву…)</label>\r
\r
      <div class="cols2">\r
        <!-- ЛЕВАЯ КОЛОНКА: ГДЕ ИЩЕМ -->\r
        <div class="colstack">\r
          <section class="blk">\r
            <h4>📰 Ресурсы: сайты и телеграм-каналы</h4>\r
            <div class="why">Отметьте галочками готовый список или впишите свои строкой. Телеграм-каналы читаются\r
              <b>без браузера</b> — это самая быстрая часть прогона.</div>\r
            <div id="picks" class="tag">загружаю списки…</div>\r
            <label>Все источники проекта — по одному в строке: <code>сайт.kz</code>, <code>t.me/канал</code>, <code>@канал</code></label>\r
            <textarea id="sites">\${esc((c.sites||[]).join('\\n'))}</textarea>\r
          </section>\r
\r
          <section class="blk">\r
            <h4>👤 Фейсбук — профили людей</h4>\r
            <div class="why">Программа открывает профиль в <b>своём окне браузера</b>: нажмите «Войти в соцсети» один раз,\r
              и сессия сохранится. Смотрим только свежее и заходим на профиль несколько раз в сутки — иначе Фейсбук\r
              встретит проверкой личности. Репосты тоже берём и помечаем, откуда они.</div>\r
            <label>По ссылке в строке: facebook.com/имя или facebook.com/profile.php?id=…</label>\r
            <textarea id="fbsites" placeholder="https://www.facebook.com/ivan.ivanov">\${esc((c.facebook||[]).join('\\n'))}</textarea>\r
            <div class="row">\r
              <div><label>За сколько суток смотреть</label>\r
                <select id="fbdays">\${[1,2,3].map(d=>\`<option value="\${d}" \${(+c.fbDays||1)===d?'selected':''}>\${d} сут.</option>\`).join('')}</select></div>\r
              <div><label>Не чаще скольких заходов в сутки на профиль</label>\r
                <select id="fbvisits">\${[1,2,3,4,6].map(d=>\`<option value="\${d}" \${(+c.fbVisits||3)===d?'selected':''}>\${d}</option>\`).join('')}</select></div>\r
            </div>\r
            <div class="actions" style="margin-top:8px">\r
              <button id="fblogin" class="sec">Войти в соцсети</button>\r
              <button id="fbcheck" class="sec">Сколько заходов осталось</button>\r
            </div>\r
            <div class="tag" id="fbstate" style="margin-top:6px"></div>\r
          </section>\r
\r
          <section class="blk">\r
            <h4>▶️ Поиск в YouTube</h4>\r
            <div class="why">Ищет видео по тому же запросу. Дату публикации берём со страницы самого видео, а не со слов\r
              «2 недели назад» — иначе в выдачу попадает то, что вне периода.</div>\r
            <label class="check"><input id="yt" type="checkbox" \${yt.enabled?'checked':''}> искать в YouTube</label>\r
            <div class="row" id="ytRow" \${yt.enabled?'':'hidden'}><div><label>Грубое сито YouTube (точный отбор всё равно наш)</label>\r
              <select id="ytRange">\${['hour:за час','today:за сегодня','week:за неделю','month:за месяц','year:за год'].map(o=>{const[v,t]=o.split(':');return \`<option value="\${v}" \${yt.range===v?'selected':''}>\${t}</option>\`}).join('')}</select>\r
            </div></div>\r
          </section>\r
        </div>\r
\r
        <!-- ПРАВАЯ КОЛОНКА: КАК РАБОТАЕМ -->\r
        <div class="colstack">\r
          <section class="blk">\r
            <h4>📅 Период — за какие даты искать</h4>\r
            <div class="row" style="margin-top:8px">\r
              <div><select id="pmode">\r
                <option value="rolling" \${c.periodMode==='rolling'?'selected':''}>🔄 Ежедневный мониторинг (последние N дней)</option>\r
                <option value="fixed" \${(c.periodMode||'fixed')==='fixed'?'selected':''}>📅 Фиксированный (с … по …)</option>\r
                <option value="since" \${c.periodMode==='since'?'selected':''}>📈 От даты и до сегодня</option>\r
              </select></div>\r
              <div id="pdaysRow" \${c.periodMode==='rolling'?'':'hidden'}><label>сколько дней назад смотреть</label>\r
                <input id="pdays" type="number" min="2" max="60" value="\${c.periodDays||2}"></div>\r
            </div>\r
            <div class="row" id="pfromRow" \${c.periodMode==='rolling'?'hidden':''}>\r
              <div><label>С даты</label><input id="from" type="date" value="\${esc(c.from||'')}"></div>\r
              <div id="ptoRow" \${c.periodMode==='since'?'hidden':''}><label>По дату</label><input id="to" type="date" value="\${esc(c.to||'')}"></div>\r
            </div>\r
            <div class="tag" id="phint" style="margin:8px 0 2px"></div>\r
          </section>\r
\r
          <section class="blk">\r
            <h4>⏰ Частота прогонов</h4>\r
            <div class="why">Прогон идёт, только когда программа открыта. Спящий компьютер прогон не запустит —\r
              но пропущенный догонит, как только машину разбудят.</div>\r
            <div class="row">\r
              <div><select id="smode">\r
                <option value="off" \${s.mode==='off'?'selected':''}>вручную — по кнопке «Собрать сейчас»</option>\r
                <option value="daily" \${s.mode==='daily'?'selected':''}>каждый день</option>\r
                <option value="hours" \${s.mode==='hours'?'selected':''}>каждые N часов</option>\r
                <option value="minutes" \${s.mode==='minutes'?'selected':''}>каждые N минут (частый мониторинг)</option>\r
              </select></div>\r
              <div id="sdaily" \${s.mode==='daily'?'':'hidden'}><label>в котором часу (0–23)</label><input id="shour" type="number" min="0" max="23" value="\${s.hour??9}"></div>\r
              <div id="shours" \${s.mode==='hours'?'':'hidden'}><label>каждые N часов</label><input id="severy" type="number" min="1" max="24" value="\${s.everyHours||6}"></div>\r
              <div id="smins" \${s.mode==='minutes'?'':'hidden'}><label>каждые N минут (от 10)</label><input id="severymin" type="number" min="10" max="720" value="\${s.everyMinutes||20}"></div>\r
            </div>\r
            <div id="minsNote" class="tag" \${s.mode==='minutes'?'':'hidden'} style="color:var(--warn);margin-top:6px">\r
              Срок считается от НАЧАЛА прошлого прогона: уложился в интервал — следующий пойдёт по расписанию, не уложился —\r
              начнётся сразу, как закончится текущий. Двух прогонов разом не бывает. Но если прогон длиннее интервала,\r
              компьютер будет занят почти непрерывно.\r
            </div>\r
          </section>\r
\r
          <section class="blk">\r
            <h4>✨ Работа с ИИ</h4>\r
            <div class="why">ИИ помогает читать уже собранное: он <b>не ищет</b> материалы и <b>не решает</b>, какие даты верные, —\r
              это делает движок, детерминированно. Каждый вид разбора — отдельный запрос к Google и расход квоты.</div>\r
            <label class="check"><input id="aiAuto" type="checkbox" \${c.aiAuto?'checked':''}> спрашивать Gemini после каждого прогона</label>\r
            <div id="aiKindsRow" \${c.aiAuto?'':'hidden'} style="margin-top:8px">\r
              <div style="display:flex;flex-direction:column;gap:9px">\r
                <label class="check" style="margin:0;align-items:flex-start"><input type="checkbox" class="aiKind" value="review" \${aiOn('review')}>\r
                  <span><b>\${L('📰 Расширенный обзор','📰 Extended review')}</b><span class="tag" style="display:block">\${L('Справка для руководства «Обзор информационного поля» по всем материалам окна: сюжеты, кто формировал повестку, резонанс, вывод. Автоматически — не чаще раза в сутки: это длинный текст и самый дорогой запрос.','A briefing for management, “Review of the information field”, based on every item in the window: stories, who drove the agenda, resonance, conclusion. Automatically — no more than once a day: it is a long text and the most expensive request.')}</span></span></label>\r
                <label class="check" style="margin:0;align-items:flex-start"><input type="checkbox" class="aiKind" value="sentiment" \${aiOn('sentiment')}>\r
                  <span><b>😊 Тональность</b><span class="tag" style="display:block">Знак по каждому материалу окна: выигрышно, нейтрально или невыгодно для объекта.</span></span></label>\r
                <label class="check" style="margin:0;align-items:flex-start"><input type="checkbox" class="aiKind" value="verify" id="aiVerify" \${aiOn('verify')}>\r
                  <span><b>🎯 Проверка релевантности</b><span class="tag" style="display:block">Отсекает однофамильцев и случайные совпадения слова: по каждому материалу —\r
                    «про объект» / «не про объект» / «не понять». <b>Ничего не удаляет</b> — только помечает, решаете вы.</span></span></label>\r
              </div>\r
              <div class="tag" id="aiVerifyNote" style="margin-top:6px" hidden></div>\r
              <div class="tag" id="aiCost" style="margin-top:8px"></div>\r
            </div>\r
            <!-- ДАННЫЕ ДЛЯ РАСШИРЕННОГО ОБЗОРА. Все поля необязательные: пустое\r
                 поле — это «не задано», и справка пишется без этого блока. Тип\r
                 источника тут нарочно задаёт человек: модель угадывала бы его\r
                 по названию издания, а это оценка, которую справка выдала бы\r
                 за факт. -->\r
            <details class="revopts" \${(c.aiSubject||c.aiPersons||c.aiContext||c.aiSources)?'open':''}>\r
              <summary>\${L('📰 Для расширенного обзора (необязательно)','📰 For the extended review (optional)')}</summary>\r
              <div class="why" style="margin-top:6px">\${L('Чем точнее заполнено, тем точнее справка. Пустое поле — не беда: модель просто не будет об этом писать.','The more you fill in, the more accurate the briefing. An empty field is fine: the model simply will not write about it.')}</div>\r
              <label for="aisubj">\${L('Как называть объект в справке','How to name the subject in the briefing')}</label>\r
              <input id="aisubj" type="text" value="\${esc(c.aiSubject||'')}" placeholder="\${L('например: Н.Назарбаев, первый Президент','e.g. N. Nazarbayev, first President')}">\r
              <label for="aipers">\${L('Круг связанных лиц и структур','Related people and organisations')}</label>\r
              <input id="aipers" type="text" value="\${esc(c.aiPersons||'')}" placeholder="\${L('через запятую: Д.Назарбаева, Фонд Первого Президента…','comma-separated')}">\r
              <label for="aictx">\${L('Дополнительный контекст','Additional context')}</label>\r
              <textarea id="aictx" rows="3" placeholder="\${L('значимые даты, ранее замеченные тренды…','key dates, trends noticed earlier…')}">\${esc(c.aiContext||'')}</textarea>\r
              <label for="aisrc">\${L('Типы источников — по строке на источник','Source types — one line per source')}</label>\r
              <textarea id="aisrc" rows="4" placeholder="\${L('zakon.kz — нейтральный&#10;t.me/orda — критический&#10;kazpravda.kz — лояльный','zakon.kz — neutral&#10;t.me/orda — critical')}">\${esc(c.aiSources||'')}</textarea>\r
              <div class="tag" style="margin-top:4px">\${L('Источник без строки здесь пойдёт в справку без типа — модели запрещено угадывать его по названию.','A source without a line here goes into the briefing without a type — the model is not allowed to guess it from the name.')}</div>\r
            </details>\r
            <label class="check" style="margin-top:12px"><input id="noext" type="checkbox" \${c.noExternal?'checked':''}> 🔒 не отправлять данные проекта во внешний контур</label>\r
            <div class="tag" style="margin-top:2px">Для заказов, где собранное нельзя показывать никому. Запрет стоит на сервере, а не в кабинете.</div>\r
            <div class="tag" id="noextOn" \${c.noExternal?'':'hidden'} style="color:var(--warn);margin-top:4px">\r
              Закрыто: Gemini (расширенный обзор, тональность, проверка релевантности), телеграм-бот проекта, внешний поиск DuckDuckGo/Bing.\r
              <b>Уходит наружу всё равно:</b> <span id="stillList"></span>\r
            </div>\r
          </section>\r
\r
          <section class="blk">\r
            <h4>💾 Память и место на диске</h4>\r
            <div class="why">Всё хранится <b>только на этом компьютере</b>, в папке профиля — ни в каком облаке.\r
              Растут две вещи: лента материалов (её мы не трогаем — это результат) и архивы прогонов\r
              (по ним строятся CSV прогона и диагностика). Поставьте предел — программа сама удалит\r
              <b>самые старые архивы</b>, когда он будет превышен. Последние 30 прогонов не удаляются никогда.</div>\r
            <div class="row">\r
              <div><label>Предел места на проект</label>\r
                <select id="diskmb">\${[[0,'без ограничения'],[200,'200 МБ'],[500,'500 МБ'],[1000,'1 ГБ'],[2000,'2 ГБ'],[5000,'5 ГБ']].map(([v,l])=>\`<option value="\${v}" \${(+c.diskMb||0)===v?'selected':''}>\${l}</option>\`).join('')}</select></div>\r
            </div>\r
            <div class="tag" id="usage" style="margin-top:8px">считаю занятое место…</div>\r
          </section>\r
\r
          <section class="blk">\r
            <h4>🤖 Рассылка в телеграм-бот</h4>\r
            <div class="why">Бот присылает ссылки прямо во время прогона, по мере находок. Как завести:\r
              <b>1)</b> напишите <b>@BotFather</b> команду <b>/newbot</b> — он выдаст токен вида <code>123456789:AA…</code>;\r
              <b>2)</b> вставьте токен сюда и нажмите «Проверить»;\r
              <b>3)</b> откройте своего бота, нажмите <b>Start</b> и отправьте ему в личку команду <b>/iam</b> с кодом ниже — так вы станете владельцем.\r
              Бот закрытый: пишет и отвечает только владельцу и в общих чатах, где владелец состоит. Посторонний, нашедший бота, получит в ответ «бот закрыт». Отписка — команда <b>/stop</b>.\r
              Токен хранится только на этом компьютере и наружу не отдаётся.</div>\r
            <label>Токен бота</label>\r
            <input id="tgtok" type="password" autocomplete="off" placeholder="\${p.tg&&p.tg.hasToken?'токен сохранён — оставьте поле пустым':'123456789:AA…'}">\r
            <label class="check" style="margin-top:10px"><input id="tgon" type="checkbox" \${p.tg&&p.tg.enabled?'checked':''}> присылать новые материалы в бот</label>\r
            <div class="actions" style="margin-top:8px">\r
              <button id="tgsave" class="sec">Сохранить бота</button>\r
              <button id="tgcheck" class="sec">Проверить</button>\r
              <button id="tgresend" class="sec">Прислать последний прогон</button>\r
              <button id="tgoff" class="dng">Убрать бота</button>\r
            </div>\r
            <div class="tag" id="tgstate" style="margin-top:6px"></div>\r
            <div class="why" style="margin-top:8px">\${L(\r
              'Боту можно писать команды — в личку владельца и в общие чаты, где состоит владелец. Для всех в таких чатах: <b>/status</b>, <b>/today</b>, <b>/find слово</b>, <b>/csv</b>, <b>/help</b>. Для владельца и администраторов чата: <b>/search</b> — разовый поиск по источникам проекта (слово → за сколько дней, до 30 → можно добавить источник через «+»), <b>/run</b> — собрать сейчас, <b>/cancel</b> — остановить сбор. Постоянный список источников меняется только здесь, в кабинете.',\r
              'You can send the bot commands — in the owner’s private chat and in groups the owner belongs to. For everyone in those chats: <b>/status</b>, <b>/today</b>, <b>/find word</b>, <b>/csv</b>, <b>/help</b>. For the owner and chat admins: <b>/search</b> — a one-off search across the project’s sources (word → how many days, up to 30 → optionally add a source with “+”), <b>/run</b> — collect now, <b>/cancel</b> — stop collecting. The permanent source list is changed only here, in the dashboard.')}</div>\r
            <div class="tag" id="tgowner" style="margin-top:6px"></div>\r
          </section>\r
        </div>\r
      </div>\r
\r
      <div class="actions" style="margin-top:16px"><button id="save">Сохранить настройки</button></div>\r
    </details>\r
  </div>\`);\r
  // Какие новинки списка проект уже «видел» (день из поля added). Старый проект\r
  // поля не имеет — для него новым считается всё, у чего added стоит вообще.\r
  head.dataset.ack = c.presetsAck || '';\r
  app.appendChild(head);\r
  $('#yt',head).onchange=()=>$('#ytRow',head).hidden=!$('#yt',head).checked;\r
  buildPicks(head);\r
  $('#smode',head).onchange=()=>{ const v=$('#smode',head).value; $('#sdaily',head).hidden=v!=='daily'; $('#shours',head).hidden=v!=='hours'; $('#smins',head).hidden=v!=='minutes'; $('#minsNote',head).hidden=v!=='minutes'; };\r
  // Режим периода: показываем только то, что нужно этому режиму, и сразу пишем\r
  // словами, какое окно возьмёт СЛЕДУЮЩИЙ прогон. Без этой строки «ежедневно» и\r
  // «за 5-е сентября» выглядят одинаково безобидно — на этом и подорвались.\r
  const pd = { p:()=>$('#pmode',head).value, days:()=>+$('#pdays',head).value||2, from:()=>$('#from',head).value, to:()=>$('#to',head).value };\r
  const ymdL = d=>{const p=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate());};\r
  function syncPeriod(){\r
    const m = pd.p();\r
    $('#pdaysRow',head).hidden = m!=='rolling';\r
    $('#pfromRow',head).hidden = m==='rolling';\r
    $('#ptoRow',head).hidden = m==='since';\r
    const today = new Date();\r
    let txt;\r
    if(m==='rolling'){\r
      const n = Math.max(2, pd.days());\r
      const f = new Date(today.getFullYear(), today.getMonth(), today.getDate()-(n-1));\r
      txt = \`Следующий прогон возьмёт <b style="color:var(--txt)">\${ymdL(f)} … \${ymdL(today)}</b>. Завтра окно сдвинется само — это и есть ежедневный мониторинг. Повторы не задваиваются: материал остаётся одной строкой, новое помечается как NEW.\`;\r
    } else if(m==='since'){\r
      txt = \`Следующий прогон возьмёт <b style="color:var(--txt)">\${pd.from()||'…'} … \${ymdL(today)}</b>. Правый край едет за сегодняшним днём, окно растёт.\`;\r
    } else if(!pd.from() && !pd.to()){\r
      // Пустое окно = «за всё время». Молча подменять его последней неделей\r
      // нельзя (разовый сбор архива — законная задача), но и молчать нельзя:\r
      // именно так ratel.kz принёс материал 2025 года, и это выглядело поломкой.\r
      txt = \`⚠️ Даты не заполнены — прогон возьмёт <b style="color:var(--warn)">ВСЁ ВРЕМЯ</b>, включая материалы прошлых лет. Впишите даты или выберите «Ежедневный».\`;\r
    } else {\r
      txt = \`Следующий прогон возьмёт <b style="color:var(--txt)">\${pd.from()||'начало времён'} … \${pd.to()||'сегодня и дальше'}</b> — и так каждый раз. Для расписания это НЕ мониторинг: когда конец периода пройдёт, новое перестанет находиться.\`;\r
    }\r
    $('#phint',head).innerHTML = txt;\r
  }\r
  ['#pmode','#pdays','#from','#to'].forEach(sel=>{ const el2=$(sel,head); if(el2){ el2.onchange=syncPeriod; el2.oninput=syncPeriod; } });\r
  syncPeriod();\r
  // Автоматический ИИ-разбор: показываем ЦЕНУ прямо под галочками. Каждый вид —\r
  // отдельный запрос к Google на каждом прогоне; при ежедневном расписании это\r
  // легко превращается в сотню запросов в месяц, и человек должен видеть это\r
  // ДО того, как включит, а не из счёта.\r
  function syncAi(){\r
    const on = $('#aiAuto',head).checked;\r
    $('#aiKindsRow',head).hidden = !on;\r
    const kinds = [...head.querySelectorAll('.aiKind')].filter(x=>x.checked).length;\r
    // Обзор идёт автоматически не чаще раза в сутки, сколько бы прогонов ни\r
    // было: в расход он входит одним запросом в сутки, а не одним за прогон.\r
    const rev = [...head.querySelectorAll('.aiKind')].some(x=>x.checked && x.value==='review') ? 1 : 0;\r
    const sm = $('#smode',head).value;\r
    // Частый мониторинг умножает расход на ИИ в десятки раз: каждые 20 минут —\r
    // это 72 прогона в сутки. Считаем честно и показываем ДО включения, иначе\r
    // человек узнает цифру из счёта Google.\r
    const perDay = runsPerDayUi({ mode: sm, everyHours: +$('#severy',head).value,\r
      everyMinutes: +$('#severymin',head).value });\r
    const cost = $('#aiCost',head);\r
    // Тональность теперь идёт по ВСЕМУ окну и уходит пачками, поэтому она одна\r
    // стоит не «одного запроса», а одного на каждые ~60 материалов. Молчать об\r
    // этом нельзя: человек видит рядом цифру расхода и планирует по ней квоту.\r
    const sent = [...head.querySelectorAll('.aiKind')].some(x=>x.checked && (x.value==='sentiment'||x.value==='verify'));\r
    const tail = sent ? ' Тональность и проверка релевантности считаются по всей ленте окна и уходят пачками: на каждые ~60 материалов — ещё один запрос. Про уже разобранное второй раз не спрашиваем.' : '';\r
    // ПРОВЕРКА РЕЛЕВАНТНОСТИ — ТОЛЬКО ПРИ ПРОГОНАХ НЕ ЧАЩЕ РАЗА В СУТКИ.\r
    // Правило пользователя, и оно про квоту: проверка смотрит КАЖДЫЙ материал\r
    // окна, то есть стоит как тональность. На шаге «каждые 20 минут» это 72\r
    // прогона в сутки — ровно та утечка, которую разбирали 17 сентября.\r
    //\r
    // Галочка тут только показывает правило: настоящий запрет стоит на сервере\r
    // (run-rate.js), потому что расписание меняют уже ПОСЛЕ того, как галочку\r
    // поставили, а маршрут работает и без кабинета.\r
    const vb = $('#aiVerify',head), vn = $('#aiVerifyNote',head);\r
    const okVer = perDay <= 1;\r
    if(vb){ vb.disabled = !okVer; if(!okVer) vb.checked = false; }\r
    if(vn){\r
      vn.hidden = okVer;\r
      vn.innerHTML = '🎯 <b style="color:var(--warn)">Проверка релевантности недоступна</b> при таком расписании: прогонов '\r
        + perDay + ' в сутки, а она смотрит каждый материал окна — это прямой расход квоты Google. '\r
        + 'Выберите «каждый день» или реже. Вручную, кнопкой во вкладке «Аналитика», её тоже можно запустить — но только при том же условии.';\r
    }\r
    if(!kinds) cost.textContent = 'Ничего не выбрано — разбор не запросится.';\r
    else if(perDay){ const n = (kinds-rev)*perDay + rev*Math.min(1,perDay); cost.innerHTML = \`Расход: <b style="color:var(--txt)">от \${n} запрос(ов) в сутки</b> (~\${n*30} в месяц). Пустой прогон не спрашиваем — квота не тратится.\${rev?' Расширенный обзор — не чаще раза в сутки.':''}\${tail}\`; }\r
    else cost.innerHTML = \`Расход: <b style="color:var(--txt)">от \${kinds} запрос(ов) за прогон</b>. Расписание выключено, значит только при нажатии «Собрать сейчас».\${tail}\`;\r
  }\r
  // ЗАПРЕТ ВНЕШНЕГО КОНТУРА. Галочка гасит блок ИИ прямо на глазах — но это\r
  // только удобство: настоящий запрет стоит на сервере (outbound.js), потому\r
  // что маршрут /gemini работает и без кабинета. Рядом честно перечисляем, что\r
  // уходит наружу ВСЁ РАВНО: обещание «не отправляем ничего» было бы враньём,\r
  // обещание «не отправляем собранное» — правдой.\r
  function syncNoExt(){\r
    const off = $('#noext',head).checked;\r
    $('#noextOn',head).hidden = !off;\r
    const sites=$('#sites',head).value.split('\\n').map(x=>x.trim()).filter(Boolean);\r
    const still=[];\r
    if(sites.some(s=>!s.startsWith('@'))) still.push('ключевое слово — в поисковые формы самих отслеживаемых сайтов (без этого поиска по сайту не будет)');\r
    if(sites.some(s=>s.startsWith('@'))) still.push('телеграм-каналы читаются через t.me');\r
    if($('#yt',head) && $('#yt',head).checked) still.push('YouTube — это запрос к Google');\r
    if($('#fbsites',head) && $('#fbsites',head).value.trim()) still.push('Фейсбук — это запрос к Meta');\r
    const sl=$('#stillList',head); if(sl) sl.textContent = still.join('; ') || 'ничего';\r
    // Блок автоматического разбора при запрете смысла не имеет.\r
    const ai=$('#aiAuto',head); ai.disabled = off; if(off) ai.checked = false;\r
    syncAi();\r
  }\r
  $('#noext',head).onchange=syncNoExt;\r
  $('#sites',head).addEventListener('input',syncNoExt);\r
  $('#aiAuto',head).onchange=syncAi;\r
  head.querySelectorAll('.aiKind').forEach(x=>x.onchange=syncAi);\r
  $('#severy',head).oninput=syncAi;\r
  $('#severymin',head).oninput=syncAi;\r
  const smPrev = $('#smode',head).onchange;\r
  $('#smode',head).onchange=(e)=>{ if(smPrev) smPrev(e); syncAi(); };\r
  syncNoExt();\r
  const collect=()=>({\r
    name:$('#name',head).value.trim()||'Проект',\r
    config:{ sites:$('#sites',head).value.split('\\n').map(x=>x.trim()).filter(Boolean), keyword:$('#q',head).value.trim(), exclude:$('#ex',head).value.trim(),\r
      // periodMode/periodDays — режим окна. from/to сохраняем всегда: пользователь\r
      // переключает режимы туда-сюда, и терять уже вписанные даты нельзя.\r
      periodMode:$('#pmode',head).value, periodDays:Math.max(2,+$('#pdays',head).value||2),\r
      noExternal:$('#noext',head).checked,\r
      aiAuto:$('#aiAuto',head).checked && !$('#noext',head).checked, aiKinds:[...head.querySelectorAll('.aiKind')].filter(x=>x.checked).map(x=>x.value),\r
      aiSubject:$('#aisubj',head).value.trim(), aiPersons:$('#aipers',head).value.trim(),\r
      aiContext:$('#aictx',head).value.trim(), aiSources:$('#aisrc',head).value.trim(),\r
      presetsAck: head.dataset.ack || '',\r
      from:$('#from',head).value, to:$('#to',head).value, morph:$('#morph',head).checked, youtube:{enabled:$('#yt',head).checked, range:$('#ytRange',head).value},\r
      facebook:$('#fbsites',head).value.split('\\n').map(x=>x.trim()).filter(Boolean),\r
      fbDays:+$('#fbdays',head).value||1, fbVisits:+$('#fbvisits',head).value||3,\r
      diskMb:+$('#diskmb',head).value||0 },\r
    schedule:{ mode:$('#smode',head).value, hour:+$('#shour',head).value, everyHours:+$('#severy',head).value,\r
      everyMinutes:Math.max(10,Math.min(720,+$('#severymin',head).value||20)) }\r
  });\r
  // ЗАНЯТОЕ МЕСТО — НАСТОЯЩЕЕ, со стороны файловой системы. И «сколько прогонов\r
  // влезет» считаем по СРЕДНЕМУ размеру уже накопленных архивов: одно число «на\r
  // все случаи» врало бы и телеграм-проекту (килобайты на прогон), и полному\r
  // списку сайтов (сотня килобайт).\r
  (async ()=>{\r
    const el2 = $('#usage',head); if(!el2) return;\r
    const mb = n => (n/1048576);\r
    const U = LANG === 'en' ? { g:'GB', m:'MB', k:'KB' } : { g:'ГБ', m:'МБ', k:'КБ' };\r
    const fmtMb = n => mb(n) >= 1024 ? (mb(n)/1024).toFixed(1)+' '+U.g : mb(n) >= 1 ? mb(n).toFixed(1)+' '+U.m : Math.max(1,Math.round(n/1024))+' '+U.k;\r
    try{\r
      const u = await (await api('/projects/'+id+'/usage')).json();\r
      // Куски переводим ПО ОТДЕЛЬНОСТИ: склеенная строка «занято 189 КБ · лента\r
      // 99 КБ · …» под ключ не подходит ни при каком числе.\r
      const bits = [T('занято') + \` <b style="color:var(--txt)">\${fmtMb(u.bytes)}</b>\`,\r
        T('лента') + ' ' + fmtMb(u.feedBytes),\r
        T('архивы прогонов') + ' ' + fmtMb(u.runBytes) + ' (' + T(u.runCount + ' шт.') + ')'];\r
      let tail = '';\r
      if(u.limitMb && u.avgRunBytes){\r
        const fits = Math.floor(u.limitMb*1048576/u.avgRunBytes);\r
        tail = ' ' + T(\`Предел \${u.limitMb} МБ — это примерно \${fits} прогонов такого же размера\`)\r
          + ' (' + T('сейчас в среднем') + ' ' + fmtMb(u.avgRunBytes) + ' ' + T('на прогон') + ').';\r
      } else if(!u.limitMb){\r
        tail = ' ' + T('Предел не задан: архивы копятся, пока есть место на диске.');\r
      }\r
      // ПРЕДЕЛ МОЖЕТ БЫТЬ НЕДОСТИЖИМ, и сказать об этом надо прямо. Лента — это\r
      // результат, её мы не удаляем ни при каком лимите; если она сама больше\r
      // предела, программа ужмёт архивы до минимума и на этом остановится.\r
      if(u.limitMb && (u.feedBytes + u.metaBytes) > u.limitMb*1048576){\r
        tail += \` ⚠️ Сама лента материалов весит \${fmtMb(u.feedBytes)} — это больше предела, поэтому в него не уложиться: программа ужмёт архивы, но лента останется целой.\`;\r
      }\r
      const dc = u.dateCacheBytes ? \` Память дат (общая для всех проектов): \${fmtMb(u.dateCacheBytes)} — она ускоряет повторные прогоны и чистится сама при смене разбора дат.\` : '';\r
      el2.innerHTML = bits.join(' · ') + '.' + tail + dc;\r
    }catch(e){ el2.textContent = 'Не удалось посчитать занятое место: '+(e&&e.message||e); }\r
  })();\r
\r
  // --- СОЦСЕТИ --------------------------------------------------------------\r
  // Вход — отдельной кнопкой и один раз: программа открывает СВОЁ окно с\r
  // отдельным профилем, человек логинится в нём руками, и куки остаются в\r
  // папке профиля. Автоматически залогиниться мы не можем и не пытаемся.\r
  const fbSay = t => { const el=$('#fbstate',head); if(el) el.textContent=t; };\r
  $('#fblogin',head).onclick=async()=>{\r
    fbSay('Открываю окно браузера… залогиньтесь в нём в Фейсбук и просто оставьте окно открытым.');\r
    try{ const r=await (await api('/social/login',{method:'POST',body:'{}'})).json();\r
      fbSay(r.ok ? 'Окно открыто. Войдите в Фейсбук в нём — сессия сохранится и переживёт перезапуск программы.'\r
                 : ('Не вышло: '+(r.error||r.err||'неизвестно')));\r
    }catch(e){ fbSay('Ошибка: '+(e&&e.message||e)); }\r
  };\r
  // «Сколько заходов осталось» — чтобы молчание профиля не выглядело поломкой.\r
  $('#fbcheck',head).onclick=async()=>{\r
    const list=$('#fbsites',head).value, lim=$('#fbvisits',head).value;\r
    if(!list.trim()) return fbSay('Список профилей пуст.');\r
    fbSay('Смотрю…');\r
    try{\r
      const r=await (await api('/social/visits?limit='+encodeURIComponent(lim)+'&profiles='+encodeURIComponent(list))).json();\r
      if(!r.visits||!r.visits.length) return fbSay('Ни одной ссылки на профиль Фейсбука не разобрано.');\r
      fbSay(r.visits.map(v=>v.label+': '+(v.ok?'можно идти':'подождать — '+v.why)+' ('+v.used+' из '+v.limit+' за сутки)').join(' · '));\r
    }catch(e){ fbSay('Ошибка: '+(e&&e.message||e)); }\r
  };\r
\r
  // --- ТЕЛЕГРАМ-БОТ ---------------------------------------------------------\r
  // Отдельная кнопка, а не общее «Сохранить настройки»: токен идёт своим\r
  // маршрутом и в config не попадает вовсе (иначе он уезжал бы в браузер при\r
  // каждом открытии проекта). Поле токена ПУСТОЕ означает «не трогать»: так\r
  // сохранение галочки не стирает уже введённый токен.\r
  const tgShow = (tg, extra='')=>{\r
    const st=$('#tgstate',head); if(!st) return;\r
    const bits=[];\r
    if(!tg||!tg.hasToken) bits.push('токен не задан');\r
    else { bits.push('бот: '+(tg.bot||'токен сохранён, имя пока не спрашивали'));\r
      // Чат без доступа (посторонний нажал Start) виден с пометкой: человек\r
      // вправе знать, кто стучался в его бота, — и что тот ничего не получает.\r
      const okC=(tg.chats||[]).filter(c=>c.access!=='no'), noC=(tg.chats||[]).filter(c=>c.access==='no');\r
      bits.push(okC.length ? ('подписчиков: '+okC.length+' ('+okC.map(c=>c.name||c.id).join(', ')+')')\r
        : 'подписчиков нет — откройте бота и нажмите Start, иначе ему некому писать');\r
      if(noC.length) bits.push('без доступа, ничего не получают: '+noC.map(c=>c.name||c.id).join(', '));\r
      if(tg.sentTotal) bits.push('отправлено материалов: '+tg.sentTotal);\r
      if(tg.enabled===false) bits.push('отправка выключена галочкой');\r
      if(tg.err) bits.push('последняя ошибка: '+tg.err); }\r
    st.textContent = (extra?extra+' · ':'') + bits.join(' · ');\r
    // КТО ХОЗЯИН БОТА. Без владельца бот закрыт для всех: и рассылка, и\r
    // команды идут только владельцу и в чаты, где он состоит (9 октября 2026 —\r
    // посторонний читал ленту по /today). Код виден только здесь.\r
    const ow=$('#tgowner',head); if(!ow) return;\r
    if(!tg||!tg.hasToken){ ow.textContent=''; return; }\r
    if(tg.owners&&tg.owners.length) ow.innerHTML = L('Владелец бота: ','Bot owner: ') + esc(tg.owners.join(', '))\r
      + (tg.ownerCode ? L(' · добавить ещё одного — отправить боту в личку ',' · to add another, send the bot in a private chat ') + '<code>/iam '+esc(tg.ownerCode)+'</code>' : '');\r
    else ow.innerHTML = tg.ownerCode\r
      ? '⚠️ ' + L('<b>Владелец не привязан — бот закрыт для всех и ничего не присылает.</b> Отправьте боту в <b>личные сообщения</b>: ','<b>No owner yet — the bot is closed to everyone and sends nothing.</b> Send the bot in a <b>private chat</b>: ') + '<code>/iam '+esc(tg.ownerCode)+'</code>'\r
      : L('Код владельца появится после сохранения токена.','The owner code appears once the token is saved.');\r
  };\r
  tgShow(p.tg);\r
  const tgPost=async(body)=>{ const r=await (await api('/projects/'+id+'/telegram',{method:'POST',body:JSON.stringify(body)})).json(); return r; };\r
  $('#tgsave',head).onclick=async()=>{\r
    const tok=$('#tgtok',head).value.trim(), on=$('#tgon',head).checked;\r
    if(on && !tok && !(p.tg&&p.tg.hasToken)){ tgShow(p.tg,'Сначала вставьте токен — без него присылать некому'); return; }\r
    tgShow(p.tg,'Сохраняю…');\r
    const r=await tgPost({ enabled:on, token:tok||undefined });\r
    p.tg=r.tg; $('#tgtok',head).value='';\r
    // Включили на проекте с готовой лентой — говорим вслух, что архив не поедет.\r
    // Молчать про заглушенный архив нельзя: человек включает бота ПОСЛЕ прогона\r
    // (сперва проверить, что бот отвечает — самый естественный порядок), и его\r
    // свежайшие находки уходят под правило «архив не шлём». Сразу показываем\r
    // выход, а не оставляем гадать, почему бот молчит.\r
    tgShow(r.tg, r.muted\r
      ? ('Сохранено. Уже накопленные материалы (' + r.muted + ') слать не буду — только новые. Нужен последний прогон — нажмите «Прислать последний прогон»')\r
      : 'Сохранено');\r
  };\r
  $('#tgcheck',head).onclick=async()=>{\r
    const tok=$('#tgtok',head).value.trim();\r
    if(tok){ const s=await tgPost({ token:tok }); p.tg=s.tg; $('#tgtok',head).value=''; }\r
    tgShow(p.tg,'Спрашиваю Телеграм…');\r
    const r=await (await api('/projects/'+id+'/telegram/check',{method:'POST'})).json();\r
    if(r.error && !r.tg){ tgShow(p.tg,'Ошибка: '+r.error); return; }\r
    p.tg=r.tg; tgShow(r.tg, r.ok?'Бот отвечает':'Телеграм отказал: '+(r.error||''));\r
  };\r
  // Материал последнего прогона — заново. Нужна, когда бота включили ПОСЛЕ\r
  // прогона: правило «архив не шлём» тогда съедает свежайшие находки, а порядок\r
  // «сперва проверю бота, потом включу» — самый естественный.\r
  $('#tgresend',head).onclick=async()=>{\r
    if(!(p.tg&&p.tg.hasToken)){ tgShow(p.tg,'Сначала вставьте токен'); return; }\r
    if(!(p.tg&&p.tg.enabled)){ tgShow(p.tg,'Сначала включите галочку и сохраните — иначе слать некому'); return; }\r
    tgShow(p.tg,'Отправляю…');\r
    const r=await (await api('/projects/'+id+'/telegram/resend',{method:'POST'})).json();\r
    if(r.error){ tgShow(p.tg,'Ошибка: '+r.error); return; }\r
    const fresh=await (await api('/projects/'+id)).json(); p.tg=fresh.tg;\r
    tgShow(p.tg, r.sent ? ('Отправлено '+r.sent+(r.rest?(', осталось '+r.rest+' — уедут следующей порцией'):'')+' (в прогоне было '+r.rows+')')\r
      : ('Ничего не ушло: '+(r.skipped||'бот молчит')));\r
  };\r
  $('#tgoff',head).onclick=async()=>{\r
    if(!confirm('Убрать бота из проекта? Токен и список подписчиков будут стёрты.'))return;\r
    const r=await tgPost({ enabled:false, clearToken:true });\r
    p.tg=r.tg; $('#tgon',head).checked=false; $('#tgtok',head).value=''; tgShow(r.tg,'Бот убран');\r
  };\r
\r
  $('#save',head).onclick=async()=>{ setStatus('Сохраняю…'); await api('/projects/'+id,{method:'PUT',body:JSON.stringify(collect())}); setStatus('Сохранено.'); };\r
  $('#del',head).onclick=async()=>{ if(!confirm('Удалить проект целиком (все прогоны)?'))return; await api('/projects/'+id,{method:'DELETE'}); location.hash='/'; };\r
  $('#run',head).onclick=async()=>{ const d=collect(); if(!d.config.keyword){ setStatus('Впишите «Запрос» — без ключевого слова найдётся всё подряд.'); $('#setwrap',head).open=true; $('#q',head).focus(); return; }\r
    await api('/projects/'+id,{method:'PUT',body:JSON.stringify(d)});\r
    setStatus('Идёт сбор — ход виден в шапке.');\r
    $('#run',head).disabled=true;\r
    pollRuns();                 // показать индикатор сразу, не дожидаясь такта\r
    try{ const r=await (await api('/projects/'+id+'/run',{method:'POST'})).json();\r
      // СБОР МОГ И НЕ НАЧАТЬСЯ, а ответ при этом пришёл. Так отвечает дверь\r
      // лицензии (402 «нужен ключ») и замок «уже идёт» (409). Раньше и то и\r
      // другое молча превращалось в «Готово.» — человек видел успех там, где не\r
      // собрано ни строки. Худший вид ошибки в этой программе: тихий.\r
      if(r && r.error){ setStatus(T('Сбор не начался: ')+r.error); $('#run',head).disabled=false;\r
        // Карточку лицензии перерисовываем: в ней поле для ключа, то есть ровно\r
        // то место, куда человеку теперь идти.\r
        viewProject(id); return; }\r
      setStatus(\`Готово\${r.added!=null?': +'+r.added+' новых':''}.\`); viewProject(id); }\r
    catch(e){ setStatus('Ошибка: '+e.message); $('#run',head).disabled=false; } };\r
\r
  // Переключатель между «Прогонами» (журнал сборов) и «Аналитикой» (сводные\r
  // графики по всей истории проекта). Раньше была одна вкладка, разговор про\r
  // «как идёт мониторинг» вести было негде. Активную запоминаем в localStorage:\r
  // если пользователь вчера смотрел аналитику, сегодня она открывается сразу.\r
  const panel = el(\`<div class="card">\r
    <div class="viewtabs">\r
      <button class="viewtab" data-v="runs"><span class="em">🗂</span>Прогоны</button>\r
      <button class="viewtab" data-v="ana"><span class="em">📊</span>Аналитика</button>\r
      \${SNAP?"":\`<button class="viewtab" data-v="health"><span class="em">🩺</span>\${L("Здоровье","Health")}</button>\`}\r
    </div>\r
    <div id="viewrunsw"><div id="tabs" class="tabs"></div><div id="runbox"></div></div>\r
    <div id="viewanaw" hidden></div>\r
    <div id="viewhealthw" hidden></div>\r
  </div>\`);\r
  app.appendChild(panel);\r
  const tabsEl=$('#tabs',panel), box=$('#runbox',panel);\r
  const runsWrap=$('#viewrunsw',panel), anaWrap=$('#viewanaw',panel), healthWrap=$('#viewhealthw',panel);\r
  const setView=v=>{\r
    panel.querySelectorAll('.viewtab').forEach(b=>b.classList.toggle('active', b.dataset.v===v));\r
    runsWrap.hidden = v!=='runs'; anaWrap.hidden = v!=='ana'; healthWrap.hidden = v!=='health';\r
    if(v==='health') loadHealth(id, healthWrap);\r
    try{ localStorage.setItem('mc_view_'+id, v); }catch(e){}\r
    if(v==='ana' && !anaWrap.dataset.loaded) loadAnalytics(id, anaWrap);\r
  };\r
  panel.querySelectorAll('.viewtab').forEach(b=>b.onclick=()=>setView(b.dataset.v));\r
  const startView = (()=>{ try{ return localStorage.getItem('mc_view_'+id)||'runs'; }catch(e){ return 'runs'; }})();\r
\r
  if(!runs.length){ box.innerHTML='<div class="muted">Прогонов ещё нет. Нажми «Собрать сейчас».</div>'; setView(startView); return; }\r
  // ЛЕНТА ПРОГОНОВ — ОДНА СТРОКА, ОСТАЛЬНОЕ ЧЕРЕЗ КАЛЕНДАРЬ.\r
  //\r
  // Просьба пользователя 18 сентября 2026: «у нас слишком большое полотно\r
  // получается, может оставить лишь 1 линию (последние 10), а по мере\r
  // увеличения числа прятать их в календарь». При расписании «каждые 20 минут»\r
  // это 72 прогона в сутки — за неделю пять сотен плашек, и нужный вчерашний\r
  // прогон в них не найти ни глазами, ни прокруткой.\r
  //\r
  // Календарь показывает ровно то, что в проекте ЕСТЬ: \`min\`/\`max\` — дни\r
  // первого и последнего прогона, и пустой день выбрать нельзя. Иначе человек\r
  // тыкал бы в даты наугад и получал пустую строку без объяснения.\r
  const dayOf = r => { const d=new Date(r.at||0); const p2=n=>String(n).padStart(2,'0');\r
    return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate()); };\r
  const days = [...new Set(runs.map(dayOf))].sort();\r
  const bar = el(\`<div class="runbar">\r
    <span class="tag" id="runwhat"></span>\r
    <span style="flex:1"></span>\r
    <label class="tag" for="runday" style="margin:0">день:</label>\r
    <input type="date" id="runday" min="\${days[0]}" max="\${days[days.length-1]}" style="width:auto;flex:none">\r
    <button class="sec" id="runlast" style="padding:4px 10px;font-size:13px">Последние 10</button>\r
  </div>\`);\r
  tabsEl.parentNode.insertBefore(bar, tabsEl);\r
  const dayInput=$('#runday',bar), whatEl=$('#runwhat',bar);\r
  const LAST = 10;\r
  let pickedDay = '';\r
  const drawTabs = () => {\r
    const list = pickedDay ? runs.filter(r=>dayOf(r)===pickedDay) : runs.slice(0, LAST);\r
    tabsEl.innerHTML='';\r
    list.forEach(r=>{\r
      const t=el(\`<div class="tab" data-ts="\${esc(r.ts)}"><span>\${fmtRun(r.at||r.ts)}</span><span class="cnt \${r.found?'g':'z'}">\${r.found??'?'}</span></div>\`);\r
      t.onclick=()=>selectRun(r.ts, t);\r
      tabsEl.appendChild(t);\r
    });\r
    whatEl.textContent = pickedDay\r
      ? ('прогоны за ' + pickedDay + ': ' + list.length + ' (всего в проекте ' + runs.length + ')')\r
      : ('последние ' + list.length + ' из ' + runs.length + ' прогонов — остальные по календарю →');\r
    return list;\r
  };\r
  const showList = (list, keepTs) => {\r
    if(!list.length){ box.innerHTML='<div class="muted">В этот день прогонов не было.</div>'; return; }\r
    const want = keepTs && list.some(r=>r.ts===keepTs) ? keepTs : list[0].ts;\r
    const tab = [...tabsEl.children].find(x=>x.dataset.ts===want) || tabsEl.firstChild;\r
    selectRun(want, tab);\r
  };\r
  dayInput.onchange = ()=>{ pickedDay = dayInput.value || ''; showList(drawTabs()); };\r
  $('#runlast',bar).onclick = ()=>{ pickedDay=''; dayInput.value=''; showList(drawTabs()); };\r
  showList(drawTabs());\r
  setView(startView);\r
\r
  async function selectRun(ts, tabEl){\r
    [...tabsEl.children].forEach(x=>x.classList.remove('active')); if(tabEl) tabEl.classList.add('active');\r
    box.innerHTML='<div class="muted">Загрузка прогона…</div>';\r
    let run; try{ run=await (await api('/projects/'+id+'/runs/'+encodeURIComponent(ts))).json(); }catch(e){ box.innerHTML='<div class="muted">Не удалось загрузить прогон.</div>'; return; }\r
    if(run.error){ box.innerHTML='<div class="muted">Прогон не найден.</div>'; return; }\r
    const log=run.log||[], rows=run.rows||[];\r
    // Человеческая сводка вместо простыни. Просьба пользователя 18 сентября\r
    // 2026: «логи прогона для обычного юзера — это аналитика; зачем ему каждый\r
    // раз видеть столько технической писанины». Техника не убрана, а СВЁРНУТА:\r
    // прислать лог на разбор по-прежнему можно кнопкой, а открыть подробности —\r
    // одним щелчком.\r
    //\r
    // Служебные строки (\`(период)\`, \`(время)\`, \`(память дат)\`…) в счёт\r
    // источников НЕ идут, и узнаются они ПРИЗНАКОМ — именем в скобках, а не\r
    // списком: добавится седьмая, её забудут внести, и охват молча вырастет.\r
    // Ровно то же правило работает в отчёте для заказчика (report.js).\r
    const isSvcRow = l => /^\\(/.test(String(l.site||''));\r
    const srcRows = log.filter(l=>!isSvcRow(l));\r
    const gaveRows = srcRows.filter(l=>(l.found||0)>0).sort((a,b)=>(b.found||0)-(a.found||0));\r
    const srcAll = srcRows.length, srcGave = gaveRows.length, srcSilent = srcAll - srcGave;\r
    const msRow = log.find(l=>String(l.site)==='(время)');\r
    const runSecs = msRow && msRow.ms ? fmtSec(Math.round(msRow.ms/1000)) : '';\r
    const perRow = log.find(l=>String(l.site)==='(период)');\r
    const periodNote = perRow ? (perRow.note||'') : '';\r
    const topHtml = gaveRows.slice(0,10).map(l=>\`<span class="tag">\${esc(String(l.site||'').replace(/^https?:\\/\\//,'').replace(/\\/$/,''))} — \${l.found}</span>\`).join('');\r
    const logHtml=log.map(l=>{const s=(l.site||'').replace(/^https?:\\/\\//,'').replace(/\\/$/,'');return \`<tr><td class="tag"><a href="#" class="diag" data-site="\${esc(s)}" title="Диагностика: почему столько (или ноль)">🔍</a> \${esc(s)}</td><td class="found \${l.found?'g':'z'}">\${l.found??0}</td><td class="tag">\${l.ms?fmtSec(Math.round(l.ms/1000)):''}</td><td class="tag">\${esc(l.channel||'')}</td><td class="note">\${esc(l.note||'')}</td></tr>\`}).join('');\r
    // Колонка «Нашёл» — какой инструмент принёс материал. Если каналов несколько,\r
    // значит его нашли независимо оба: видно, кто на сайте кормит, а кто повторяет.\r
    // Галочка у каждого материала — ручная чистка. Мониторинг боевой, в выдачу\r
    // неизбежно попадает лишнее, и выбросить это должен человек: программа не\r
    // умеет отличать «не про то» от «про то, но неинтересно».\r
    // Пометка соцсетей — строкой под заголовком, а не тремя новыми колонками:\r
    // колонки пришлось бы прятать на телефоне, а тут всё видно на любой ширине.\r
    // Для материалов с сайтов строки нет вовсе — лог и таблица не засоряются.\r
    const fbMark=it=>{\r
      const bits=[];\r
      if(it.author) bits.push('✍️ '+esc(it.author));\r
      if(it.kind==='репост') bits.push('🔁 репост'+(it.via?': '+esc(it.via.split(' — ')[0]):''));\r
      else if(it.kind) bits.push('🖊 '+esc(it.kind));\r
      if(it.matchIn) bits.push('ключ '+esc(it.matchIn));\r
      // Комментарии — НА МОМЕНТ НАХОДКИ, а не сейчас: пост мы второй раз не\r
      // читаем. Отдельного слова не пишем, значка хватает на обоих языках;\r
      // а вот «0» показываем честно — это факт, в отличие от пустоты.\r
      if(Number.isFinite(it.comments)) bits.push('💬 '+it.comments);\r
      if(!bits.length) return '';\r
      const link = it.kind==='репост' && /https?:\\/\\//.test(it.via||'')\r
        ? \` <a href="\${esc((it.via.split(' — ')[1]||'').trim())}" target="_blank">оригинал ↗</a>\` : '';\r
      return \`<div class="snip" style="opacity:.85">\${bits.join(' · ')}\${link}</div>\`;\r
    };\r
    const resHtml=rows.map(it=>\`<tr><td><input type="checkbox" class="pick" data-url="\${esc(it.url)}"></td><td>\${fmtDate(it.date)}</td><td class="tag">\${esc(it.source)}</td><td class="tag">\${esc(it.channels||it.channel||'')}</td><td><a href="\${esc(it.url)}" target="_blank">\${esc(it.title||it.url)}</a>\${fbMark(it)}\${it.snippet?\`<div class="snip">\${esc(it.snippet)}</div>\`:''}</td></tr>\`).join('');\r
    box.innerHTML=\`\r
      <p class="sub">Прогон <b style="color:var(--txt)">\${fmtRunFull(run.at)}</b> · найдено \${run.found??rows.length} · новых \${run.added??0}\r
        &nbsp;<a href="/api/projects/\${id}/runs/\${encodeURIComponent(ts)}/export.csv"><button class="sec" style="padding:4px 10px">Скачать CSV прогона</button></a>\r
        &nbsp;<a href="/api/projects/\${id}/runs/\${encodeURIComponent(ts)}/log.json"><button class="sec" style="padding:4px 10px">Скачать лог прогона</button></a>\r
</p>\r
      <div class="hint" style="margin:2px 0 0">Отчёт для заказчика переехал во вкладку «Аналитика»: он считается по периоду, а не по одной ходке.</div>\r
      <div class="sub" style="margin-top:12px;color:var(--txt);font-weight:600">Как прошёл сбор</div>\r
      <div class="hint" style="margin:2px 0 6px">Просмотрено источников: <b style="color:var(--txt)">\${srcAll}</b> · дали материал: <b style="color:var(--txt)">\${srcGave}</b> · материалов по теме не нашлось у <b style="color:var(--txt)">\${srcSilent}</b>\${runSecs?\` · заняло <b style="color:var(--txt)">\${runSecs}</b>\`:''}\${periodNote?\`<br>Период: \${esc(periodNote)}\`:''}</div>\r
      \${topHtml?\`<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:4px">\${topHtml}</div>\`:''}\r
      <details style="margin-top:10px">\r
        <summary style="cursor:pointer;color:var(--mut);font-size:13px">⚙️ Подробности по каждому источнику — техническая часть</summary>\r
        <div class="hint" style="margin:6px 0">Это рабочая кухня движка: какими путями он шёл по каждому источнику и почему получилось столько. Читать её каждый раз не нужно — она пригодится, если что-то выглядит странно. Значок 🔍 у источника открывает разбор по каждой ссылке.</div>\r
        \${run.logsDir?\`<div class="hint" style="margin:2px 0 6px">Те же логи программа сама складывает в папку <b style="color:var(--txt)">\${esc(run.logsDir)}</b> — маленькие файлы, без результатов. Если что-то пошло не так, оттуда лог можно взять даже назавтра и прислать на разбор.</div>\`:''}\r
        <div class="wrap" style="max-height:34vh"><table><thead><tr><th>Источник</th><th>Найдено</th><th>Время</th><th class="h">Каналы</th><th>Заметки</th></tr></thead><tbody>\${logHtml||'<tr><td colspan="5" class="muted">—</td></tr>'}</tbody></table></div>\r
      </details>\r
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:14px">\r
        <div class="sub" style="color:var(--txt);font-weight:600">Результаты (\${rows.length})</div>\r
        <span class="tag" id="pickInfo" style="margin-left:auto">отмечено: 0</span>\r
        <button class="sec" id="pickAll" style="padding:3px 10px;font-size:12px">Отметить все</button>\r
        <button id="pickDel" style="padding:3px 10px;font-size:12px;background:#7f1d1d;border-color:#7f1d1d" disabled>🗑 Удалить отмеченные</button>\r
      </div>\r
      <div class="hint" style="margin:2px 0 8px">Удаление насовсем: материал исчезнет из ленты, из архивов прогонов и из выгрузок, а цифры дашборда пересчитаются. Следующий прогон его не вернёт.</div>\r
      <div class="wrap"><table><thead><tr><th style="width:28px"></th><th>Дата</th><th>Источник</th><th>Нашёл</th><th>Заголовок</th></tr></thead><tbody>\${resHtml||'<tr><td colspan="5" class="muted">Пусто.</td></tr>'}</tbody></table></div>\`;\r
    box.querySelectorAll('a.diag').forEach(a=>a.onclick=e=>{ e.preventDefault(); diagnose(id, a.dataset.site); });\r
\r
    const picks=()=>[...box.querySelectorAll('.pick:checked')].map(x=>x.dataset.url);\r
    const info=$('#pickInfo',box), delBtn=$('#pickDel',box), allBtn=$('#pickAll',box);\r
    const sync=()=>{ const n=picks().length; info.textContent='отмечено: '+n; delBtn.disabled=!n; };\r
    box.querySelectorAll('.pick').forEach(x=>x.onchange=sync);\r
    allBtn.onclick=()=>{ const on=picks().length!==rows.length; box.querySelectorAll('.pick').forEach(x=>x.checked=on); sync(); };\r
    delBtn.onclick=async()=>{\r
      const urls=picks(); if(!urls.length) return;\r
      // Спрашиваем один раз и по-человечески: удаление необратимо, а список\r
      // материалов у пользователя боевой.\r
      if(!confirm(\`Удалить \${urls.length} материал(ов) насовсем?\\n\\nОни исчезнут из ленты, из архивов прогонов и из выгрузок. Следующий прогон их не вернёт.\`)) return;\r
      delBtn.disabled=true; setStatus('Удаляю…');\r
      try{\r
        const r=await (await api('/projects/'+id+'/items/delete',{method:'POST',body:JSON.stringify({urls})})).json();\r
        if(r.error){ setStatus('Не вышло: '+r.error); delBtn.disabled=false; return; }\r
        setStatus(\`Удалено: \${r.removed}. Осталось в ленте: \${r.total}.\`);\r
        viewProject(id);   // перечитываем всё: и прогон, и ленту, и цифры\r
      }catch(e){ setStatus('Ошибка: '+(e&&e.message||e)); delBtn.disabled=false; }\r
    };\r
    sync();\r
  }\r
}\r
\r
// Диагностика одного сайта: показываем модалку с отчётом, который можно скопировать.\r
// Окно с текстом, который человек копирует и отправляет. Одно на два случая:\r
// диагностика сайта (мне) и отчёт по прогону (заказчику). Второе окно завели бы\r
// ради одной строки заголовка.\r
function textBox(title, hint){\r
  const ov=ensureDiagOv();\r
  ov.style.display='flex';\r
  ov.querySelector('#diagTitle').textContent=title;\r
  ov.querySelector('#diagHint').textContent=hint;\r
  return ov.querySelector('#diagOut');\r
}\r
function ensureDiagOv(){\r
  let ov=document.getElementById('diagOv');\r
  if(!ov){ ov=document.createElement('div'); ov.id='diagOv';\r
    ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;z-index:50;padding:20px';\r
    ov.innerHTML=\`<div style="background:var(--card,#1b1f2a);color:var(--txt,#e6e6e6);max-width:900px;width:100%;max-height:86vh;display:flex;flex-direction:column;border-radius:12px;padding:16px;box-shadow:0 10px 40px rgba(0,0,0,.5)">\r
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">\r
        <b id="diagTitle" style="flex:1">Диагностика</b>\r
        <button id="diagCopy" class="sec" style="padding:4px 10px">Копировать</button>\r
        <button id="diagClose" class="sec" style="padding:4px 10px">Закрыть</button>\r
      </div>\r
      <div id="diagHint" class="muted" style="font-size:12px;margin-bottom:6px">Скопируй отчёт и пришли его — по нему видно, почему сайт дал столько (или ноль).</div>\r
      <textarea id="diagOut" readonly style="flex:1;min-height:300px;width:100%;resize:vertical;font-family:monospace;font-size:12px;white-space:pre;background:var(--bg,#0f1218);color:var(--txt,#e6e6e6);border:1px solid var(--line);border-radius:8px;padding:10px"></textarea>\r
    </div>\`;\r
    document.body.appendChild(ov);\r
    ov.addEventListener('click',e=>{ if(e.target===ov) ov.style.display='none'; });\r
    ov.querySelector('#diagClose').onclick=()=>ov.style.display='none';\r
    ov.querySelector('#diagCopy').onclick=()=>{ const t=ov.querySelector('#diagOut'); t.select(); try{document.execCommand('copy');}catch(e){} navigator.clipboard&&navigator.clipboard.writeText(t.value).catch(()=>{}); };\r
  }\r
  return ov;\r
}\r
async function diagnose(id, site){\r
  const out=textBox('Диагностика: '+site, 'Скопируй отчёт и пришли его — по нему видно, почему сайт дал столько (или ноль).');\r
  out.value='Гоняю движок по сайту… (10–60 сек, идёт как настоящий заход — не закрывай окно)';\r
  try{ const r=await (await api('/projects/'+id+'/diagnose',{method:'POST',body:JSON.stringify({site})})).json();\r
    out.value = r.error ? ('Ошибка: '+r.error) : (r.report||'(пустой отчёт)');\r
  }catch(e){ out.value='Ошибка запроса: '+(e&&e.message||e); }\r
}\r
\r
// ---- аналитика: SVG-графики, никаких внешних библиотек ----\r
// Библиотеку графиков не тянем: страница едет с ZIP и работает офлайн; SVG\r
// собирается прямо из данных, без сборщиков и CDN. Для наших пяти-шести карточек\r
// это компактнее любой Chart.js и не тащит килобайты чужого кода.\r
\r
// Цвет из палитры. Графики — это SVG, а не CSS, поэтому цвет им нужен строкой;\r
// брать его из :root означает, что палитра описана в ОДНОМ месте, и смена\r
// оформления не превращается в поиск шестнадцатеричных кодов по всему файлу.\r
// Второй аргумент — на случай, если переменной нет (снимок дашборда открывают\r
// в чужом браузере, а getComputedStyle там может отдать пустую строку).\r
const CSSVAR = (name, fallback) => {\r
  try{ const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim(); return v || fallback; }\r
  catch(e){ return fallback; }\r
};\r
\r
// Формат крупных чисел: 1 234, 12 345, 1.2M — как в приличных дашбордах.\r
const fmtN = n => n == null ? '—' : (n >= 1e6 ? (n/1e6).toFixed(1)+'M' : n >= 1e4 ? (n/1e3).toFixed(1)+'k' : n.toLocaleString('ru-RU'));\r
// Часы нужны не для красоты: зависший прогон — это как раз часы, и «180 мин 0 с»\r
// человек читает медленнее, чем «3 ч». Нулевой хвост не печатаем вовсе.\r
const fmtSec = s => {\r
  if (s == null) return '—';\r
  // Единицы времени собираются в коде вместе с числом, поэтому словарём\r
  // готовой страницы их не поймать: «6 мин 4 с» — одна строка на каждое\r
  // возможное число. Берём их из языка напрямую.\r
  const U = LANG === 'en' ? { s:'s', m:'min', h:'h' } : { s:'с', m:'мин', h:'ч' };\r
  if (s < 60) return s + ' ' + U.s;\r
  const h = Math.floor(s/3600), m = Math.floor(s%3600/60), sec = s%60;\r
  if (h) return h + ' ' + U.h + (m ? ' ' + m + ' ' + U.m : '');\r
  return m + ' ' + U.m + (sec ? ' ' + sec + ' ' + U.s : '');\r
};\r
// Русское число словом: «1 прогон затянулся», «2 прогона затянулись».\r
const plural = (n, one, few, many) => {\r
  const a = Math.abs(n) % 100, b = a % 10;\r
  if (a > 10 && a < 20) return many;\r
  if (b > 1 && b < 5) return few;\r
  return b === 1 ? one : many;\r
};\r
\r
// Столбцы: горизонтальные (для источников и каналов). Строка на элемент,\r
// max — общий максимум для нормировки, kind — сайт/telegram/youtube для метки.\r
function barsH(container, items, opts={}){\r
  if(!items || !items.length){ container.innerHTML='<div class="hint">пусто</div>'; return; }\r
  const max = items.reduce((m,x)=>Math.max(m,x.count),0) || 1;\r
  const color = opts.color || '#3b82f6';\r
  const html = items.map(x=>{\r
    const pct = Math.round(x.count/max*100);\r
    const kindTag = x.kind==='telegram' ? '<span class="kind tg">TG</span>' : x.kind==='youtube' ? '<span class="kind">YT</span>' : '';\r
    return \`<div class="lbl" title="\${esc(x.key)}">\${esc(x.key)}\${kindTag}</div>\r
      <div class="bar"><i style="width:\${pct}%;background:\${color}"></i></div>\r
      <div class="val">\${fmtN(x.count)}</div>\`;\r
  }).join('');\r
  container.innerHTML = '<div class="barlist">'+html+'</div>';\r
}\r
\r
// Пирог/кольцо: SVG, конус на угол пропорционально частям. Легенда — в html\r
// рядом (см. .pielegend). Хочет донат — hollow=true; для «Каналов сбора» так\r
// нагляднее, для «Долей платформ» лучше цельный пирог.\r
function pie(container, parts, opts={}){\r
  const total = parts.reduce((s,x)=>s+x.value,0) || 1;\r
  // ВСЕГДА БУБЛИК. Раньше «Доли платформ» рисовались цельным пирогом, а кольцо\r
  // включалось только для каналов. Кольцо и выглядит дороже, и полезнее: в\r
  // дырке помещается главное число, ради которого на диаграмму и смотрят.\r
  // Толщина кольца задаётся не радиусом дырки, а шириной штриха — так сегменты\r
  // можно раздвинуть зазором (stroke-dasharray), и они перестают слипаться.\r
  const R = 66, cx = 84, cy = 84, TH = opts.thickness || 20;\r
  const C = 2*Math.PI*R;\r
  const shown = parts.filter(p=>p.value>0);\r
  const GAP = shown.length > 1 ? 3 : 0;             // зазор между долями, в единицах длины дуги\r
  let acc = 0, slices = '';\r
  shown.forEach(p=>{\r
    const len = p.value/total * C;\r
    const seg = Math.max(0.6, len - GAP);\r
    slices += \`<circle cx="\${cx}" cy="\${cy}" r="\${R}" fill="none" stroke="\${p.color}" stroke-width="\${TH}"\`\r
      + \` stroke-dasharray="\${seg.toFixed(2)} \${(C-seg).toFixed(2)}" stroke-dashoffset="\${(-acc).toFixed(2)}"\`\r
      + \` stroke-linecap="round" transform="rotate(-90 \${cx} \${cy})"><title>\${esc(p.label)}: \${p.value}</title></circle>\`;\r
    acc += len;\r
  });\r
  const track = \`<circle cx="\${cx}" cy="\${cy}" r="\${R}" fill="none" stroke="rgba(148,163,184,.09)" stroke-width="\${TH}"/>\`;\r
  const hollow = \`<text x="\${cx}" y="\${cy+2}" text-anchor="middle" font-size="26" font-weight="600" fill="#fff" style="letter-spacing:-.02em">\${fmtN(total)}</text>\r
    <text x="\${cx}" y="\${cy+20}" text-anchor="middle" font-size="10" fill="#64748b">\${esc(opts.centerLabel||'всего')}</text>\`;\r
  const legend = shown.map(p=>\`\r
    <div class="l" style="--dot:\${p.color}">\${esc(p.label)}</div>\r
    <div class="v">\${p.value} · \${Math.round(p.value/total*100)}%</div>\`).join('');\r
  // На узком экране пирог с легендой ложатся в столбик (класс .pieblock ловит\r
   // media-query из стилей): на десктопе — пирог слева, легенда справа; на\r
   // телефоне — пирог сверху по центру, легенда снизу.\r
  container.innerHTML = \`<div class="pieblock">\r
    <svg viewBox="0 0 168 168" class="piefig">\${track}\${slices}\${hollow}</svg>\r
    <div class="pielegwrap"><div class="pielegend">\${legend}</div></div>\r
  </div>\`;\r
}\r
\r
// Тройной сегмент: заголовок / тело статьи / пост ТГ. Одна широкая полоска,\r
// три части. Отличается от twoBar только числом сегментов.\r
function threeBar(container, segs){\r
  const total = segs.reduce((s,x)=>s+x.value,0) || 1;\r
  // Сегменты раздвинуты зазором в 3px и скруглены по отдельности: сплошная\r
  // трёхцветная колбаса читалась как один объект, а это три разные величины.\r
  const seg = segs.filter(s=>s.value>0).map(s=>{\r
    const w = Math.round(s.value/total*100);\r
    return \`<div style="width:\${w}%;background:\${s.color};border-radius:999px;display:flex;align-items:center;justify-content:center;overflow:hidden;color:#0b1120;font-weight:600;font-size:10px" title="\${esc(s.label)}: \${s.value}">\${w>7?w+'%':''}</div>\`;\r
  }).join('');\r
  // В легенде пустые корзины не показываем: с пятью видами «Без пометки — 0»\r
  // и «Видео — 0» только шумят. Если ВСЁ пусто — оставляем одну строку-прочерк.\r
  const shown = segs.filter(s=>s.value>0);\r
  const legend = (shown.length?shown:segs.slice(0,1)).map(s=>\`<span style="color:var(--mut)"><span style="display:inline-block;width:8px;height:8px;background:\${s.color};border-radius:999px;margin-right:6px"></span>\${esc(s.label)} <b style="color:var(--txt2);font-weight:600">\${s.value}</b></span>\`).join('&nbsp;&nbsp;&nbsp;');\r
  container.innerHTML = \`\r
    <div style="display:flex;gap:3px;height:12px">\${seg}</div>\r
    <div style="font-size:11px;margin-top:12px;display:flex;flex-wrap:wrap;gap:4px 0">\${legend}</div>\`;\r
}\r
\r
// Линия/столбцы по дням: SVG, ось X — дата, ось Y — количество. Ленивая, но\r
// читаемая: без сетки, без осей, с подписью первого/последнего дня и максимума.\r
// Первая ось X всегда показывает диапазон, чтобы «14 столбиков» не превращались\r
// в загадку «а это за какие числа?».\r
// Столбец со скруглённой ШАПКОЙ. Просто \`rx\` у <rect> скругляет и низ, а низ\r
// стоит на оси — округлый там выглядит как оторванный. Поэтому путь: прямые\r
// бока и низ, дуги только сверху. Радиус не больше половины ширины и половины\r
// высоты, иначе у низких столбцов шапка выворачивается наизнанку.\r
function topRoundedBar(x, y, w, h, r){\r
  const rr = Math.max(0, Math.min(r, w/2, h));\r
  return \`M \${x} \${(y+h).toFixed(1)} L \${x} \${(y+rr).toFixed(1)} Q \${x} \${y} \${(x+rr).toFixed(1)} \${y}\`\r
    + \` L \${(x+w-rr).toFixed(1)} \${y} Q \${(x+w).toFixed(1)} \${y} \${(x+w).toFixed(1)} \${(y+rr).toFixed(1)}\`\r
    + \` L \${(x+w).toFixed(1)} \${(y+h).toFixed(1)} Z\`;\r
}\r
\r
// Столбцы по дням. Раньше это был сплошной «забор»: зазор в 2 единицы при\r
// пятнадцати столбцах превращал график в залитый прямоугольник. Теперь зазор\r
// пропорционален шагу (28% места отдано воздуху), а шапки скруглены.\r
// Пустой день рисуется еле заметной подложкой — так видно, что день БЫЛ и в нём\r
// ноль, а не что его вырезали.\r
// Ширина холста берётся ПО МЕСТУ, а не фиксированным числом 640. Иначе SVG с\r
// viewBox 640 масштабируется целиком и на широкой карточке (панель теперь во всю\r
// ширину экрана) график стоит островком посреди пустоты — ровно то, на что\r
// пожаловался пользователь. Заодно исчезает размытие: единица viewBox\r
// становится настоящим пикселем.\r
const canvasW = (container, fallback=640) => {\r
  const w = container && container.clientWidth ? Math.round(container.clientWidth) : 0;\r
  return Math.max(320, w || fallback);\r
};\r
\r
function barsV(container, points, opts={}){\r
  if(!points.length){ container.innerHTML='<div class="hint">пусто</div>'; return; }\r
  const W = canvasW(container), H = 150, PAD_L = 34, PAD_R = 8, PAD_T = 14, PAD_B = 22;\r
  const iw = W-PAD_L-PAD_R, ih = H-PAD_T-PAD_B;\r
  const max = Math.max(1, ...points.map(p=>p.count));\r
  const step = iw / points.length;\r
  // 28% шага отдано воздуху, но ширина ограничена сверху: при шести прогонах на\r
  // широком экране столбец разъезжался на треть карточки и выглядел не графиком,\r
  // а заливкой.\r
  const bw = Math.min(56, Math.max(2, step * 0.72));\r
  const off = (step - bw) / 2;\r
  const color = opts.color || CSSVAR('--acc', '#6366f1');\r
  const bars = points.map((p,i)=>{\r
    const x = PAD_L + i*step + off;\r
    const h = Math.round(p.count / max * ih);\r
    if(p.count === 0){\r
      return \`<rect x="\${x.toFixed(1)}" y="\${PAD_T+ih-2}" width="\${bw.toFixed(1)}" height="2" fill="rgba(148,163,184,.16)" rx="1"><title>\${p.day}: 0</title></rect>\`;\r
    }\r
    const y = PAD_T + ih - h;\r
    return \`<path d="\${topRoundedBar(+x.toFixed(1), y, +bw.toFixed(1), Math.max(2,h), 6)}" fill="\${color}"><title>\${p.day}: \${p.count}</title></path>\`;\r
  }).join('');\r
  const first = points[0].day, last = points[points.length-1].day;\r
  const grid = \`<line x1="\${PAD_L}" y1="\${PAD_T+ih}" x2="\${W-PAD_R}" y2="\${PAD_T+ih}" stroke="rgba(148,163,184,.14)" stroke-width="1"/>\`;\r
  container.innerHTML = \`<svg viewBox="0 0 \${W} \${H}" style="width:100%;height:\${H}px;display:block">\r
    <text x="\${PAD_L-8}" y="\${PAD_T+8}" font-size="10" fill="#64748b" text-anchor="end">\${max}</text>\r
    <text x="\${PAD_L-8}" y="\${PAD_T+ih}" font-size="10" fill="#64748b" text-anchor="end">0</text>\r
    <text x="\${PAD_L}" y="\${H-5}" font-size="10" fill="#64748b">\${first}</text>\r
    <text x="\${W-PAD_R}" y="\${H-5}" font-size="10" fill="#64748b" text-anchor="end">\${last}</text>\r
    \${grid}\${bars}\r
  </svg>\`;\r
}\r
\r
// КАК КОПИЛСЯ ОХВАТ: две линии по дням — всё и негатив (люди, без повторов).\r
// Последняя точка равна охвату в карточке выше: та же формула (media-index.js).\r
function reachCurve(container, days, fmt){\r
  if(!container) return;\r
  if(!days || days.length < 2){ container.innerHTML='<div class="hint reachnote">'+L('Кривая появится, когда в окне будет больше одного дня с материалами.','The curve appears once the window has more than one day with items.')+'</div>'; return; }\r
  const W = canvasW(container), H = 170, PL = 56, PR = 10, PT = 12, PB = 22, iw = W-PL-PR, ih = H-PT-PB;\r
  const max = Math.max(1, ...days.map(d=>d.unique));\r
  const X = i => PL + (days.length===1 ? iw/2 : i*iw/(days.length-1)), Y = v => PT + ih - v/max*ih;\r
  const line = f => days.map((d,i)=>(i?'L':'M')+X(i).toFixed(1)+' '+Y(d[f]).toFixed(1)).join(' ');\r
  const acc = CSSVAR('--acc','#6366f1'), neg = CSSVAR('--neg','#f43f5e');\r
  const area = line('unique') + \` L\${X(days.length-1).toFixed(1)} \${PT+ih} L\${PL} \${PT+ih} Z\`;\r
  const hasNeg = days.some(d=>d.neg>0);\r
  const dots = days.map((d,i)=>\`<circle cx="\${X(i).toFixed(1)}" cy="\${Y(d.unique).toFixed(1)}" r="3" fill="\${acc}"><title>\${d.day}: \${fmt(d.unique)}\${hasNeg?' · '+L('негатив','negative')+' '+fmt(d.neg):''} · \${L('материалов за день','items that day')} \${d.items}</title></circle>\`).join('');\r
  container.innerHTML = \`<svg viewBox="0 0 \${W} \${H}" style="width:100%;height:\${H}px;display:block">\r
    <text x="\${PL-6}" y="\${PT+8}" font-size="10" fill="#64748b" text-anchor="end">\${fmt(max)}</text>\r
    <text x="\${PL-6}" y="\${PT+ih}" font-size="10" fill="#64748b" text-anchor="end">0</text>\r
    <text x="\${PL}" y="\${H-5}" font-size="10" fill="#64748b">\${days[0].day}</text>\r
    <text x="\${W-PR}" y="\${H-5}" font-size="10" fill="#64748b" text-anchor="end">\${days[days.length-1].day}</text>\r
    <line x1="\${PL}" y1="\${PT+ih}" x2="\${W-PR}" y2="\${PT+ih}" stroke="rgba(148,163,184,.14)"/>\r
    <path d="\${area}" fill="\${acc}" fill-opacity=".12"/>\r
    <path d="\${line('unique')}" fill="none" stroke="\${acc}" stroke-width="2"/>\r
    \${hasNeg?\`<path d="\${line('neg')}" fill="none" stroke="\${neg}" stroke-width="2" stroke-dasharray="4 3"/>\`:''}\r
    \${dots}\r
  </svg>\`;\r
}\r
\r
// ГРАФИКИ «ВО ВРЕМЕНИ» КАБИНЕТА «РЕПУТАЦИЯ» (11 октября 2026). Жалоба\r
// пользователя: «что за столбцы, что за показатели — сиди и гадай». Поэтому\r
// у графика есть всё, без чего его не прочитать: подпись под столбиками\r
// (день недели, число, месяц, год), шкала слева с делениями и словом «сколько\r
// чего», цифра над столбиком, легенда цветов и строка «один столбик — …».\r
// Отрезок у столбика всегда целый — его режет сервер (periodBuckets).\r
const MON_S = () => LANG==='en' ? ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] : ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];\r
const MON_F = () => LANG==='en' ? ['January','February','March','April','May','June','July','August','September','October','November','December'] : ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];\r
const MON_G = () => LANG==='en' ? MON_F() : ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];\r
const WD_S = () => LANG==='en' ? ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'] : ['вс','пн','вт','ср','чт','пт','сб'];\r
const WD_F = () => LANG==='en' ? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] : ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];\r
const revN = n => fmtN(n)+' '+(LANG==='en' ? (n===1?'review':'reviews') : plural(n,'отзыв','отзыва','отзывов'));\r
const ymdParts = k => { const [y,m,d] = String(k).split('-').map(Number); return {y, m, d, dt: new Date(y, m-1, d, 12)}; };\r
const dayFull = k => { const {y,m,d,dt} = ymdParts(k); return LANG==='en' ? \`\${WD_F()[dt.getDay()]}, \${MON_F()[m-1]} \${d}, \${y}\` : \`\${WD_F()[dt.getDay()]}, \${d} \${MON_G()[m-1]} \${y}\`; };\r
const dayMid = k => { const {m,d} = ymdParts(k); return LANG==='en' ? \`\${MON_S()[m-1]} \${d}\` : \`\${d} \${MON_G()[m-1]}\`; };\r
// Подпись столбика: короткая (под осью) и полная (в подсказке и строке выбора).\r
function bucketText(p, kind, i, n){\r
  const a = ymdParts(p.from);\r
  if(kind==='day'){\r
    const short = n<=7 ? \`\${WD_S()[a.dt.getDay()]} \${a.d}\` : \`\${a.d}.\${String(a.m).padStart(2,'0')}\`;\r
    return {short, full: dayFull(p.from)};\r
  }\r
  if(kind==='week'){\r
    const b = ymdParts(p.to);\r
    return {short: \`\${a.d}.\${String(a.m).padStart(2,'0')}\`, full: \`\${L('неделя','week')} \${dayMid(p.from)} – \${dayMid(p.to)} \${b.y}\`};\r
  }\r
  if(kind==='month'){\r
    const name = MON_S()[a.m-1] + ((i===0 || a.m===1) ? ' ' + (LANG==='en' ? '’' : '') + String(a.y).slice(2) : '');\r
    const f = MON_F()[a.m-1];\r
    return {short: name, full: (LANG==='en' ? f : f[0].toUpperCase()+f.slice(1)) + ' ' + a.y};\r
  }\r
  return {short: String(a.y), full: LANG==='en' ? 'Year '+a.y : a.y+' год'};\r
}\r
// Строка над графиком: что такое один столбик, что значит высота, какой отрезок показан.\r
function tlCaption(kind, pts, what, tail){\r
  const unit = {day: L('один день','one day'), week: L('одна неделя (7 дней; последняя кончается сегодня)','one week (7 days; the last one ends today)'), month: L('один календарный месяц','one calendar month'), year: L('один календарный год','one calendar year')}[kind] || '';\r
  const per = {day: L('за этот день','on that day'), week: L('за эту неделю','in that week'), month: L('за этот месяц','in that month'), year: L('за этот год','in that year')}[kind] || '';\r
  const n = pts.length, f = n ? bucketText(pts[0], kind, 0, n).full : '', l = n ? bucketText(pts[n-1], kind, n-1, n).full : '';\r
  return \`<b>\${L('Один столбик','One bar')} = \${unit}.</b> \${L('Высота столбика и цифра над ним','Bar height and the number on top')} — \${what} \${per}. \${tail}\`\r
    + (n ? \`<br><span class="tag">\${L('Показано','Shown')}: \${esc(f)}\${n>1?' — '+esc(l):''} · \${n} \${L('столб.','bars')} · \${L('нажмите на столбик, чтобы увидеть числа','click a bar to see the numbers')}</span>\` : '');\r
}\r
// «Круглый» шаг шкалы: 1, 2, 5 × 10^k — деления читаются без счёта в уме.\r
const niceStep = x => { if(!(x>0)) return 1; const p = Math.pow(10, Math.floor(Math.log10(x))), f = x/p; return (f<=1?1:f<=2?2:f<=5?5:10)*p; };\r
function barsTime(container, pts, opts={}){\r
  if(!pts.length){ container.innerHTML='<div class="hint">'+L('нет данных','no data')+'</div>'; return; }\r
  const n = pts.length, kind = opts.kind, stack = opts.stack || [];\r
  const W = canvasW(container), H = 236, PAD_L = 46, PAD_R = 10, PAD_T = 24, PAD_B = 30;\r
  const iw = W-PAD_L-PAD_R, ih = H-PAD_T-PAD_B;\r
  const tot = p => stack.reduce((a,st)=>a+(p[st.key]||0),0);\r
  const maxV = Math.max(0, ...pts.map(tot));\r
  const step = Math.max(1, niceStep(maxV/4)), top = Math.max(step, Math.ceil(maxV/step)*step);\r
  const sx = iw/n, bw = Math.min(56, Math.max(2, sx*0.72)), off = (sx-bw)/2;\r
  const mut = CSSVAR('--mut','#64748b'), txt = CSSVAR('--txt2','#cbd5e1');\r
  const Y = v => PAD_T + ih - v/top*ih;\r
  let grid = '';\r
  for(let v=0; v<=top+1e-9; v+=step){ const y = Y(v).toFixed(1);\r
    grid += \`<line x1="\${PAD_L}" y1="\${y}" x2="\${W-PAD_R}" y2="\${y}" stroke="rgba(148,163,184,\${v?'.13':'.3'})" stroke-width="1"/><text x="\${PAD_L-6}" y="\${(+y+3.5).toFixed(1)}" font-size="10" fill="\${mut}" text-anchor="end">\${fmtN(v)}</text>\`; }\r
  // Подписи под осью: сколько влезает, прореживаем; последняя (сегодня) всегда видна.\r
  const maxLab = Math.max(2, Math.floor(iw / (kind==='day' && n<=7 ? 64 : 48)));\r
  const every = Math.ceil(n / maxLab);\r
  const texts = pts.map((p,i)=>bucketText(p, kind, i, n));\r
  const bars = pts.map((p,i)=>{\r
    const x = PAD_L + i*sx + off, cx = PAD_L + i*sx + sx/2, t = tot(p);\r
    let y = PAD_T + ih, segs = '';\r
    const live = stack.filter(st=>(p[st.key]||0)>0);\r
    live.forEach((st,j)=>{ const h = (p[st.key]/top)*ih; y -= h;\r
      segs += j===live.length-1 ? \`<path d="\${topRoundedBar(+x.toFixed(1), +y.toFixed(1), +bw.toFixed(1), Math.max(2,h), 5)}" fill="\${st.color}"/>\`\r
                                : \`<rect x="\${x.toFixed(1)}" y="\${y.toFixed(1)}" width="\${bw.toFixed(1)}" height="\${h.toFixed(1)}" fill="\${st.color}"/>\`; });\r
    if(!t) segs = \`<rect x="\${x.toFixed(1)}" y="\${PAD_T+ih-2}" width="\${bw.toFixed(1)}" height="2" fill="rgba(148,163,184,.25)" rx="1"/>\`;\r
    const val = t && bw >= 16 ? \`<text x="\${cx.toFixed(1)}" y="\${(y-4).toFixed(1)}" font-size="10" fill="\${txt}" text-anchor="middle">\${fmtN(t)}</text>\` : '';\r
    const showLab = (n-1-i) % every === 0;\r
    const anchor = i===n-1 && sx<48 ? 'end' : 'middle', lx = anchor==='end' ? W-PAD_R : cx;\r
    const lab = showLab ? \`<text x="\${lx.toFixed(1)}" y="\${H-10}" font-size="10" fill="\${mut}" text-anchor="\${anchor}">\${esc(texts[i].short)}</text>\` : '';\r
    const tip = opts.title ? opts.title(p, texts[i].full) : texts[i].full;\r
    return \`<g class="tb" data-i="\${i}"><title>\${esc(tip)}</title><rect x="\${(PAD_L+i*sx).toFixed(1)}" y="\${PAD_T}" width="\${sx.toFixed(1)}" height="\${ih}" fill="transparent"/>\${segs}\${val}\${lab}</g>\`;\r
  }).join('');\r
  const legend = stack.length ? \`<div class="tlegend">\${stack.slice().reverse().map(st=>\`<span><i style="background:\${st.color}"></i>\${esc(st.name)}</span>\`).join('')}</div>\` : '';\r
  container.innerHTML = \`<svg viewBox="0 0 \${W} \${H}" style="width:100%;height:\${H}px;display:block;cursor:pointer">\r
    <text x="\${PAD_L-6}" y="12" font-size="10" fill="\${mut}" text-anchor="end">\${esc(opts.unit||'')}</text>\r
    \${grid}\${bars}</svg>\${legend}\`;\r
  // Щелчок по столбику — его числа строкой под графиком. На телефоне подсказки\r
  // при наведении нет вовсе, и без этого числа там было бы не увидеть.\r
  if(opts.sel){ opts.sel.textContent = '';\r
    container.querySelectorAll('g.tb').forEach(g=>g.onclick=()=>{ const i=+g.dataset.i;\r
      container.querySelectorAll('g.tb').forEach(o=>o.classList.toggle('on', o===g));\r
      opts.sel.textContent = '▸ ' + (opts.title ? opts.title(pts[i], texts[i].full) : texts[i].full); }); }\r
}\r
\r
// Динамика упоминаний — площадь с мягким градиентом вместо частокола столбцов.\r
// Это непрерывный ряд по дням: линия читается как тренд, а столбцы заставляли\r
// сравнивать соседние палки. Заливка уходит в прозрачность, поверх — линия и\r
// точки; в подсказке точки день и число.\r
function area(container, points, opts={}){\r
  if(!points.length){ container.innerHTML='<div class="hint">пусто</div>'; return; }\r
  const W = canvasW(container), H = 210, PAD_L = 34, PAD_R = 12, PAD_T = 16, PAD_B = 34;\r
  const iw = W-PAD_L-PAD_R, ih = H-PAD_T-PAD_B;\r
  const max = Math.max(1, ...points.map(p=>p.count));\r
  const color = opts.color || CSSVAR('--acc', '#6366f1');\r
  const gid = 'g'+Math.random().toString(36).slice(2,8);\r
  // Одна точка не образует линии — рисуем её кружком, иначе график пуст.\r
  const X = i => points.length === 1 ? PAD_L + iw/2 : PAD_L + i*(iw/(points.length-1));\r
  const Y = v => PAD_T + ih - (v/max*ih);\r
  const pts = points.map((p,i)=>[X(i), Y(p.count)]);\r
  const line = pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');\r
  const fill = pts.length > 1\r
    ? line + \` L \${pts[pts.length-1][0].toFixed(1)} \${PAD_T+ih} L \${pts[0][0].toFixed(1)} \${PAD_T+ih} Z\`\r
    : '';\r
  const dots = pts.map((p,i)=>\`<circle class="apt" data-i="\${i}" cx="\${p[0].toFixed(1)}" cy="\${p[1].toFixed(1)}" r="\${points.length>40?2:3}" fill="\${color}" stroke="\${CSSVAR('--panel','#0b1120')}" stroke-width="1.5"/>\`).join('');\r
  // Горизонтальные линии сетки — на четверть, половину и три четверти максимума.\r
  const grid = [0,.25,.5,.75,1].map(f=>\`<line x1="\${PAD_L}" y1="\${(PAD_T+ih-f*ih).toFixed(1)}" x2="\${W-PAD_R}" y2="\${(PAD_T+ih-f*ih).toFixed(1)}" stroke="rgba(148,163,184,\${f===0?'.16':'.07'})" stroke-width="1"/>\`).join('');\r
\r
  // ПОДПИСИ ВСЕХ ДАТ, А НЕ ТОЛЬКО КРАЁВ. Пользователь: «почему даты только\r
  // начало и конец, неудобно понимать». Пишем столько, сколько ВЛЕЗАЕТ без\r
  // наложения (на подпись «04.09» нужно ~42px), и всегда через равный шаг,\r
  // чтобы ось читалась. Если дней мало — подписан каждый.\r
  const dm = d => { const p = String(d||'').split('-'); return p.length===3 ? p[2]+'.'+p[1] : (d||''); };\r
  const fit = Math.max(2, Math.floor(iw / 44));\r
  const step = Math.max(1, Math.ceil(points.length / fit));\r
  const xLabels = points.map((p,i)=>{\r
    // Последнюю подпись показываем всегда, но не впритык к предыдущей.\r
    const isLast = i === points.length-1;\r
    if(!isLast && i % step !== 0) return '';\r
    if(isLast && (points.length-1) % step !== 0 && (points.length-1) % step < step*0.5 && points.length>1) return '';\r
    const anchor = i===0 ? 'start' : isLast ? 'end' : 'middle';\r
    return \`<text x="\${pts[i][0].toFixed(1)}" y="\${H-12}" font-size="10" fill="#64748b" text-anchor="\${anchor}">\${dm(p.day)}</text>\`;\r
  }).join('');\r
\r
  // ПОДСКАЗКА ПРИ НАВЕДЕНИИ. Числа за конкретный день было видно только по\r
  // наведению на саму точку — попасть в кружок радиусом 3px мышью почти\r
  // невозможно. Теперь на каждый день приходится невидимая полоса во всю\r
  // высоту: курсор где угодно над днём — и день показан.\r
  const bandW = points.length>1 ? iw/(points.length-1) : iw;\r
  const bands = points.map((p,i)=>\`<rect class="aband" data-i="\${i}" x="\${(pts[i][0]-bandW/2).toFixed(1)}" y="\${PAD_T}" width="\${bandW.toFixed(1)}" height="\${ih}" fill="transparent" style="cursor:crosshair"/>\`).join('');\r
\r
  container.innerHTML = \`<div class="areawrap" style="position:relative">\r
    <svg viewBox="0 0 \${W} \${H}" style="width:100%;height:\${H}px;display:block">\r
      <defs><linearGradient id="\${gid}" x1="0" y1="0" x2="0" y2="1">\r
        <stop offset="0%" stop-color="\${color}" stop-opacity="0.34"/>\r
        <stop offset="100%" stop-color="\${color}" stop-opacity="0"/>\r
      </linearGradient></defs>\r
      \${grid}\r
      \${fill?\`<path d="\${fill}" fill="url(#\${gid})"/>\`:''}\r
      \${pts.length>1?\`<path d="\${line}" fill="none" stroke="\${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>\`:''}\r
      <line class="aguide" x1="0" y1="\${PAD_T}" x2="0" y2="\${PAD_T+ih}" stroke="\${color}" stroke-width="1" stroke-dasharray="3 3" opacity="0"/>\r
      \${dots}\r
      <circle class="ahot" r="5" fill="\${color}" stroke="\${CSSVAR('--panel','#0b1120')}" stroke-width="2" opacity="0"/>\r
      <circle class="asel" r="8" fill="none" stroke="\${color}" stroke-width="2" opacity="0"/>\r
      <text x="\${PAD_L-8}" y="\${PAD_T+8}" font-size="10" fill="#64748b" text-anchor="end">\${max}</text>\r
      <text x="\${PAD_L-8}" y="\${PAD_T+ih}" font-size="10" fill="#64748b" text-anchor="end">0</text>\r
      \${xLabels}\r
      \${bands}\r
    </svg>\r
    <div class="atip" hidden></div>\r
  </div>\`;\r
\r
  const svg = container.querySelector('svg'), tip = container.querySelector('.atip');\r
  const guide = container.querySelector('.aguide'), hot = container.querySelector('.ahot');\r
  const show = i => {\r
    const p = points[i];\r
    guide.setAttribute('x1', pts[i][0]); guide.setAttribute('x2', pts[i][0]); guide.setAttribute('opacity','.55');\r
    hot.setAttribute('cx', pts[i][0]); hot.setAttribute('cy', pts[i][1]); hot.setAttribute('opacity','1');\r
    tip.innerHTML = \`<b>\${esc(p.day)}</b><span>\${p.count}</span>\`;\r
    tip.hidden = false;\r
    // Ставим подсказку по РЕАЛЬНЫМ пикселям: viewBox совпадает с шириной\r
    // карточки, но при сужении окна масштаб всё же может отличаться.\r
    const k = svg.getBoundingClientRect().width / W;\r
    const left = pts[i][0]*k, top = pts[i][1]*k;\r
    tip.style.left = Math.max(4, Math.min(left, svg.getBoundingClientRect().width - 4)) + 'px';\r
    tip.style.top = Math.max(0, top - 12) + 'px';\r
    tip.style.transform = left > svg.getBoundingClientRect().width - 90 ? 'translate(-100%,-100%)' : (left < 90 ? 'translate(0,-100%)' : 'translate(-50%,-100%)');\r
  };\r
  const hide = () => { tip.hidden = true; guide.setAttribute('opacity','0'); hot.setAttribute('opacity','0'); };\r
  // ВЫБРАННЫЙ ДЕНЬ — кольцо вокруг точки, которое остаётся и после того, как\r
  // курсор ушёл: список под графиком относится к нему, и глазу нужно видеть, к\r
  // какому именно. Выбор переживает перерисовку при смене ширины (opts.sel).\r
  const sel = container.querySelector('.asel');\r
  const mark = i => {\r
    if(i == null || !pts[i]){ sel.setAttribute('opacity','0'); return; }\r
    sel.setAttribute('cx', pts[i][0]); sel.setAttribute('cy', pts[i][1]); sel.setAttribute('opacity','1');\r
  };\r
  const selIdx = opts.sel ? points.findIndex(p=>p.day === opts.sel) : -1;\r
  mark(selIdx >= 0 ? selIdx : null);\r
  container.querySelectorAll('.aband').forEach(r=>{\r
    const i = +r.dataset.i;\r
    if(opts.onPick) r.style.cursor = 'pointer';\r
    r.addEventListener('mouseenter', ()=>show(i));\r
    // На телефоне наведения нет — работает тап. Он же выбирает день.\r
    r.addEventListener('click', ()=>{ show(i); if(opts.onPick){ mark(i); opts.onPick(points[i]); } });\r
  });\r
  svg.addEventListener('mouseleave', hide);\r
}\r
\r
// Тепловая карта день недели × час: 7 строк по 24 клетки. Цвет — от прозрачного\r
// до акцента. Полезно понять, когда СМИ реально пишут о твоей теме.\r
function heat(container, matrix){\r
  const max = Math.max(1, ...matrix.flat());\r
  const cell = 22, gap = 4, W = 24*cell + 32, H = 7*cell + 26;\r
  // Дни недели собираются в подписи и во всплывающие заметки прямо в коде —\r
  // обход готовой страницы тут не помог бы: «Пн 09:00 — 2» это одна строка,\r
  // склеенная с числами. Поэтому их переводит T().\r
  const rows = LANG === 'en' ? ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] : ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];\r
  const color = CSSVAR('--acc', '#6366f1');\r
  let cells = '';\r
  for(let d=0; d<7; d++) for(let h=0; h<24; h++){\r
    const v = matrix[d][h] || 0;\r
    // Пустая клетка почти не видна (3%), но всё же видна — иначе непонятно, где\r
    // вообще сетка. Заполненные идут от 18% к 100%, зазор поднят с 2 до 4:\r
    // клетки перестают сливаться в сплошное полотно.\r
    const a = v ? (0.18 + 0.82*v/max) : 0.03;\r
    const x = 32 + h*cell, y = d*cell + 4;\r
    cells += \`<rect x="\${x}" y="\${y}" width="\${cell-gap}" height="\${cell-gap}" fill="\${color}" fill-opacity="\${a.toFixed(2)}" rx="4"><title>\${rows[d]} \${String(h).padStart(2,'0')}:00 — \${v}</title></rect>\`;\r
  }\r
  const hLabels = [0,6,12,18,23].map(h=>\`<text x="\${32+h*cell+(cell-gap)/2}" y="\${7*cell+20}" font-size="10" fill="#64748b" text-anchor="middle">\${String(h).padStart(2,'0')}</text>\`).join('');\r
  const rLabels = rows.map((r,i)=>\`<text x="24" y="\${i*cell+17}" font-size="10" fill="#64748b" text-anchor="end">\${r}</text>\`).join('');\r
  container.innerHTML = \`<svg viewBox="0 0 \${W} \${H}" style="width:100%;max-width:\${W}px;display:block">\${rLabels}\${cells}\${hLabels}</svg>\`;\r
}\r
\r
// «Заголовок vs текст»: одна широкая полоска, две части. Понятная секундами.\r
function twoBar(container, aLbl, a, bLbl, b){\r
  const total = (a+b) || 1;\r
  const pa = Math.round(a/total*100);\r
  container.innerHTML = \`\r
    <div style="display:flex;gap:3px;height:12px;font-size:10px;color:#0b1120;font-weight:600">\r
      <div style="width:\${pa}%;background:\${CSSVAR('--acc','#6366f1')};border-radius:999px;display:flex;align-items:center;justify-content:center;overflow:hidden">\${pa>7?pa+'%':''}</div>\r
      <div style="flex:1;background:rgba(148,163,184,.14);border-radius:999px;display:flex;align-items:center;justify-content:center;color:var(--mut)">\${100-pa>7?(100-pa)+'%':''}</div>\r
    </div>\r
    <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--mut);margin-top:12px">\r
      <span>\${aLbl} <b style="color:var(--txt2);font-weight:600">\${a}</b></span><span>\${bLbl} <b style="color:var(--txt2);font-weight:600">\${b}</b></span>\r
    </div>\`;\r
}\r
\r
// Ответ тональности содержит три числа в первых строках. Рисуем их полоской\r
// (зелёный / серый / красный) — цифры в тексте человек всё равно пересчитывать\r
// не будет, а полоска читается за секунду. Если чисел нет (модель ответила\r
// иначе), просто показываем текст: угадывать не надо.\r
// ДВА ВИДА РАЗБОРА ПО МАТЕРИАЛАМ рисуются одной и той же полоской: у обоих\r
// вердикт на каждый материал и три корзины. Отличаются только слова — поэтому\r
// слова вынесены в таблицу, а рисование одно.\r
//\r
// ВНИМАНИЕ: \\w в JavaScript — это латиница, цифры и подчёркивание. Кириллицу он\r
// НЕ покрывает, поэтому «ПОЗИТИВ\\w*» не доедало окончание «НЫХ», и разбор молча\r
// возвращал null — в панели висел сырой текст вместо полоски.\r
//\r
// У проверки релевантности строки якорим НА НАЧАЛО: «НЕ ПРО ОБЪЕКТ» содержит в\r
// себе «ПРО ОБЪЕКТ», и без якоря первое же число забрало бы чужую строку.\r
const KINDS = {\r
  sentiment: {\r
    re: [/ПОЗИТИВ[А-ЯЁа-яё]*\\s*[:\\-–]\\s*(\\d+)/i, /НЕЙТРАЛ[А-ЯЁа-яё]*\\s*[:\\-–]\\s*(\\d+)/i, /НЕГАТИВ[А-ЯЁа-яё]*\\s*[:\\-–]\\s*(\\d+)/i],\r
    skip: /^\\s*(ПОЗИТИВ|НЕЙТРАЛ|НЕГАТИВ)/i,\r
    marks: { '+': { label:'Позитив', color:'#10b981', soft:'#6ee7b7', dot:'🟢' },\r
             '0': { label:'Нейтрал', color:'#64748b', soft:'#cbd5e1', dot:'⚪' },\r
             '-': { label:'Негатив', color:'#f43f5e', soft:'#fda4af', dot:'🔴' } },\r
    hint: 'Нажмите на полоску или на подпись — покажу материалы этой тональности и почему модель их так оценила.',\r
    why: 'Почему так оценено',\r
  },\r
  verify: {\r
    re: [/^\\s*ПРО ОБЪЕКТ\\s*[:\\-–]\\s*(\\d+)/im, /^\\s*НЕ ПОНЯТЬ\\s*[:\\-–]\\s*(\\d+)/im, /^\\s*НЕ ПРО ОБЪЕКТ\\s*[:\\-–]\\s*(\\d+)/im],\r
    skip: /^\\s*(ПРО ОБЪЕКТ|НЕ ПОНЯТЬ|НЕ ПРО ОБЪЕКТ)/i,\r
    marks: { '+': { label:'Про объект', color:'#10b981', soft:'#6ee7b7', dot:'🟢' },\r
             '0': { label:'Не понять', color:'#64748b', soft:'#cbd5e1', dot:'⚪' },\r
             '-': { label:'Не про объект', color:'#f43f5e', soft:'#fda4af', dot:'🔴' } },\r
    hint: 'Нажмите на полоску или на подпись — покажу эти материалы. Ничего не удалено: «не про объект» это пометка, решаете вы.',\r
    why: 'Почему так решено',\r
  },\r
};\r
function parseCounts(text, kind){\r
  const K = KINDS[kind]; if(!K) return null;\r
  const num = re => { const m = String(text||'').match(re); return m ? +m[1] : null; };\r
  const pos = num(K.re[0]), neu = num(K.re[1]), neg = num(K.re[2]);\r
  if(pos==null||neu==null||neg==null) return null;\r
  if(pos+neu+neg <= 0) return null;\r
  // Текст ниже чисел — это пояснение, оно нам тоже нужно.\r
  const tail = String(text).split('\\n').filter(l=>!K.skip.test(l)).join('\\n').trim();\r
  return { pos, neu, neg, tail };\r
}\r
\r
// Таблица материалов одной тональности. Пользователь спросил ровно это: «при\r
// клике на полоску, например позитив, увидеть таблицу с позитивными\r
// материалами». Ссылка ведёт на сам материал — иначе таблица бесполезна.\r
function markTable(host, items, mark, kind){\r
  if(!host) return;\r
  const K = KINDS[kind] || KINDS.sentiment;\r
  const M = K.marks[mark];\r
  const rows = (items||[]).filter(x=>x.mark===mark);\r
  if(!rows.length){ host.innerHTML = \`<div class="muted" style="font-size:12px">\${M.dot} \${M.label}: таких материалов в разметке нет.</div>\`; return; }\r
  // Колонка «почему» — короткое пояснение модели по КАЖДОМУ материалу. Его\r
  // просил пользователь: полоска отвечала «сколько», таблица «какие», а «почему\r
  // именно этот негативный» приходилось додумывать. Пояснение приезжает в том же\r
  // ответе, что и знак, — отдельного запроса к Google оно не стоит. Колонка\r
  // появляется, только если пояснения реально пришли: у старых сохранённых\r
  // отчётов их нет, и пустой столбец там был бы просто мусором.\r
  const hasWhy = rows.some(x => x.why);\r
  host.innerHTML = \`\r
    <div style="display:flex;align-items:center;gap:10px;margin:2px 0 10px">\r
      <b style="color:\${M.soft};font-weight:600">\${M.dot} \${M.label}</b>\r
      <span class="tag">\${rows.length}</span>\r
      <button class="sec mclose" style="margin-left:auto;padding:3px 10px;font-size:11px">Свернуть</button>\r
    </div>\r
    <div class="wrap"><table class="marktbl">\r
      <tr><th>Дата</th><th>Источник</th><th>Заголовок</th>\${hasWhy?'<th>'+K.why+'</th>':''}</tr>\r
      \${rows.map(x=>\`<tr>\r
        <td class="dt">\${fmtDate(x.date)}</td>\r
        <td class="src">\${esc(x.source||'')}</td>\r
        <td>\${x.url?\`<a href="\${esc(x.url)}" target="_blank" rel="noopener">\${esc(x.title||x.url)}</a>\`:esc(x.title||'')}</td>\r
        \${hasWhy?\`<td class="why">\${x.why?esc(x.why):'—'}</td>\`:''}\r
      </tr>\`).join('')}\r
    </table></div>\`;\r
  const cl = host.querySelector('.mclose');\r
  if(cl) cl.onclick = ()=>{ host.innerHTML=''; };\r
}\r
\r
// ЖУРНАЛ ЗАПРОСОВ К ИИ (13 октября 2026). Слова пользователя: «может мы лог\r
// ответа ИИ будем внизу писать, чтобы понимать, в чём проблема?». До этого\r
// «оценено 43 из 184» стояло без единого объяснения, хотя причина у программы\r
// была. Теперь под панелью — каждый запрос: какие материалы, кто ответил, за\r
// сколько, сколько разметил, сколько токенов ушло на размышление и ответ, и\r
// почему отказала каждая модель. live — пока ждём ответа: журнал открыт.\r
function aiLogHtml(log, { note = '', live = false } = {}){\r
  const L2 = (ru, en) => L(ru, en);\r
  const tok = n => fmtN(n);\r
  const sec = ms => fmtSec(Math.max(0, Math.round((ms||0)/1000)));\r
  const att = a => {\r
    const u = a.usage ? ' · ' + L2('токенов: вход ','tokens: in ') + tok(a.usage.in)\r
      + (a.usage.think ? L2(', размышление ',', thinking ') + tok(a.usage.think) : '')\r
      + L2(', ответ ',', answer ') + tok(a.usage.out) : '';\r
    const fin = a.finish && a.finish !== 'STOP' ? ' · ' + L2('конец ответа: ','finish: ') + a.finish : '';\r
    const th = a.think ? ' · ' + L2('размышление: ','thinking: ') + a.think : '';\r
    return \`<span class="att">\${a.ok?'✓':'✗'} \${esc(a.model)} · \${sec(a.ms)}\${th}\${u}\${fin}\${a.ok?'':' — '+esc(a.err||'')}</span>\`;\r
  };\r
  const items = (log||[]).map(e => {\r
    const what = e.size > 1 ? L2(\`материалы \${e.from}–\${e.to}\`, \`items \${e.from}–\${e.to}\`) : L2(\`материал \${e.from}\`, \`item \${e.from}\`);\r
    const res = e.ok\r
      ? (e.got != null ? L2(\`размечено \${e.got} из \${e.size}\`, \`marked \${e.got} of \${e.size}\`) : L2('ответ получен', 'answer received'))\r
        + (e.truncated ? L2(' · ответ обрезан по лимиту', ' · answer cut by the limit') : '')\r
      : L2('модели не ответили', 'no model answered');\r
    const act = e.action === 'split' ? L2(' → делим пополам и спрашиваем заново', ' → splitting in half and asking again') : '';\r
    const atts = (e.attempts||[]).length > 1 || !e.ok || (e.attempts||[]).some(a => a.usage) ? (e.attempts||[]).map(att).join('') : '';\r
    return \`<li class="\${e.ok && (e.got==null || e.got===e.size) ? '' : 'bad'}"><b>\${L2('Запрос','Request')} \${e.n}</b> · \${what} · \${e.ok?esc(e.model)+' · ':''}\${sec(e.ms)} · \${res}\${act}\${atts}</li>\`;\r
  }).join('');\r
  if(!items && !note && !live) return '';\r
  const total = (log||[]).reduce((s,e)=>s+(e.ms||0),0);\r
  const head = live ? L2('⏳ Идёт разбор — запросов: ','⏳ In progress — requests: ') + (log||[]).length\r
    : L2('🔎 Журнал запросов к ИИ','🔎 AI request log') + ((log||[]).length ? \` (\${(log||[]).length} · \${sec(total)})\` : '');\r
  return \`<details class="ailog"\${live?' open':''}><summary>\${head}</summary>\`\r
    + (note ? \`<div class="note">\${esc(note)}</div>\` : '')\r
    + (items ? \`<ol>\${items}</ol>\` : live ? \`<div class="note">\${L2('Ждём первый ответ модели…','Waiting for the first answer…')}</div>\` : '')\r
    + \`</details>\`;\r
}\r
\r
// poolTotal — сколько материалов в окне ВСЕГО. Пользователь справедливо\r
// заметил расхождение: «оценено 40», а найдено 386, — и был прав, что это\r
// читается как поломка. Тогда это была выборка; теперь тональность идёт по\r
// ВСЕМУ окну (заголовки уходят в Google пачками), и в норме два числа сходятся.\r
// Расхождение осталось возможным по двум причинам: модель молча пропустила\r
// часть строк разметки, либо в окне больше материалов, чем верхний предел в\r
// ai-runner.js. Обе — редкие, и обе честно объясняются подписью под полоской:\r
// молчать нельзя, иначе человек снова решит, что цифры врут.\r
// MARKDOWN РАСШИРЕННОГО ОБЗОРА — в разметку, а не звёздочками.\r
//\r
// Справка просит у модели **жирный** и *курсив* (так её оформлял сам\r
// пользователь), а панель раньше выводила ответ простым текстом: жирный был бы\r
// виден звёздочками и в кабинете, и в PDF. Здесь — самый малый Markdown, ровно\r
// тот, что нужен справке: заголовки, абзацы, списки, жирный, курсив, черта.\r
// Сперва ВСЁ экранируется, и только потом расставляются наши теги: текст\r
// модели не имеет права стать разметкой страницы.\r
function mdToHtml(md){\r
  const inline = t => esc(t)\r
    .replace(/\\*\\*(.+?)\\*\\*/g,'<b>$1</b>').replace(/__(.+?)__/g,'<b>$1</b>')\r
    .replace(/(^|[^*\\w])\\*(?!\\s)(.+?)\\*(?!\\w)/g,'$1<i>$2</i>');\r
  const out = []; let para = [], list = null;\r
  const flush = () => {\r
    if(para.length){ out.push('<p>'+para.map(inline).join('<br>')+'</p>'); para = []; }\r
    if(list){ out.push('<'+list.tag+'>'+list.items.map(x=>'<li>'+inline(x)+'</li>').join('')+'</'+list.tag+'>'); list = null; }\r
  };\r
  for(const raw of String(md||'').replace(/\\r/g,'').split('\\n')){\r
    const line = raw.trim();\r
    if(!line){ flush(); continue; }\r
    let m;\r
    if((m = line.match(/^(#{1,6})\\s+(.*)$/))){ flush(); out.push('<h4>'+inline(m[2].replace(/\\s*#+$/,''))+'</h4>'); continue; }\r
    if(/^(-{3,}|\\*{3,}|_{3,})$/.test(line)){ flush(); out.push('<hr>'); continue; }\r
    if((m = line.match(/^[-•]\\s+(.*)$/)) || (m = line.match(/^\\*\\s+(.*)$/))){\r
      if(para.length || (list && list.tag!=='ul')) flush();\r
      list = list || { tag:'ul', items:[] }; list.items.push(m[1]); continue;\r
    }\r
    if((m = line.match(/^\\d+[.)]\\s+(.*)$/))){\r
      if(para.length || (list && list.tag!=='ol')) flush();\r
      list = list || { tag:'ol', items:[] }; list.items.push(m[1]); continue;\r
    }\r
    if(list) flush();\r
    para.push(line);\r
  }\r
  flush();\r
  return out.join('');\r
}\r
// КОПИРОВАНИЕ СПРАВКИ — с оформлением, чтобы жирный доехал до Word и до\r
// письма. Буфер с разметкой работает только на защищённой странице (localhost);\r
// с телефона по адресу в сети его нет — тогда выделяем сам текст на странице и\r
// копируем его, как копирует человек мышкой, — оформление сохраняется и так.\r
async function copyRich(node, plain){\r
  try{\r
    if(window.ClipboardItem && navigator.clipboard && navigator.clipboard.write){\r
      await navigator.clipboard.write([new ClipboardItem({\r
        'text/html': new Blob([node.innerHTML], { type:'text/html' }),\r
        'text/plain': new Blob([plain], { type:'text/plain' }) })]);\r
      return true;\r
    }\r
  }catch(e){}\r
  try{\r
    const sel = window.getSelection(), r = document.createRange();\r
    r.selectNodeContents(node); sel.removeAllRanges(); sel.addRange(r);\r
    const ok = document.execCommand('copy'); sel.removeAllRanges(); return ok;\r
  }catch(e){ return false; }\r
}\r
function paintAnswer(out, kind, text, items, poolTotal){\r
  if(kind==='review'){\r
    // Без переносов строки между блоками: у панели white-space:pre-wrap, и\r
    // перенос в разметке рисовался бы пустой строкой над кнопкой.\r
    out.innerHTML = \`<div class="mdview">\${mdToHtml(text)}</div>\`\r
      + \`<div class="mdbar noprint"><button class="sec mdcopy">\${L('📋 Скопировать справку','📋 Copy the briefing')}</button>\`\r
      + \`<span class="tag mdcopied"></span></div>\`;\r
    const b = out.querySelector('.mdcopy'), st = out.querySelector('.mdcopied');\r
    b.onclick = async ()=>{\r
      const ok = await copyRich(out.querySelector('.mdview'), text);\r
      st.textContent = ok ? L('Скопировано — вставьте в Word или в письмо: жирный сохранится.','Copied — paste into Word or an email: bold is kept.')\r
        : L('Не вышло скопировать — выделите текст мышкой.','Could not copy — select the text with the mouse.');\r
    };\r
    return;\r
  }\r
  const K = KINDS[kind];\r
  const s = K ? parseCounts(text, kind) : null;\r
  if(!s){ out.textContent = text; return; }\r
  const MARKS = K.marks;\r
  const total = s.pos+s.neu+s.neg;\r
  const pool = +poolTotal || 0;\r
  const partial = pool > total;\r
  // Кликабельно только тогда, когда есть ЧТО показать: модель могла ответить\r
  // числами без разметки, а старые сохранённые отчёты её не содержат вовсе.\r
  // Мёртвая на клик полоска хуже некликабельной — человек решит, что сломалось.\r
  const marked = Array.isArray(items) && items.length ? items : null;\r
  const cur = ()=>\`cursor:\${marked?'pointer':'default'}\`;\r
  const seg = (v,mark)=> v>0\r
    ? \`<div class="sseg" data-mark="\${mark}" style="width:\${(v/total*100).toFixed(1)}%;background:\${MARKS[mark].color};border-radius:999px;display:flex;align-items:center;justify-content:center;color:#0b1120;font-weight:600;font-size:10px;\${cur()}" title="\${MARKS[mark].label}: \${v}\${marked?' — нажмите, чтобы увидеть материалы':''}">\${(v/total*100)>=8?Math.round(v/total*100)+'%':''}</div>\`\r
    : '';\r
  // Ни одного переноса строки внутри — см. комментарий про pre-wrap в стилях.\r
  const leg = (v,mark)=>\`<span class="sseg" data-mark="\${mark}" style="display:inline-flex;align-items:center;gap:7px;color:var(--mut);\${cur()}"><span style="width:8px;height:8px;border-radius:999px;background:\${MARKS[mark].color};display:inline-block;flex:none"></span><span>\${MARKS[mark].label}</span><b style="color:\${MARKS[mark].soft};font-weight:600">\${v}</b></span>\`;\r
  out.innerHTML = \`<div class="sent"><div style="display:flex;gap:3px;height:12px;margin-bottom:16px">\`\r
    + \`\${seg(s.pos,'+')}\${seg(s.neu,'0')}\${seg(s.neg,'-')}</div>\`\r
    + \`<div style="display:flex;gap:22px;flex-wrap:wrap;font-size:12px;margin-bottom:18px;align-items:center">\`\r
    + \`\${leg(s.pos,'+')}\${leg(s.neu,'0')}\${leg(s.neg,'-')}\`\r
    + \`<span class="tag" style="margin-left:auto">оценено \${total}\${partial?' из '+pool:''}</span></div>\`\r
    + \`<div class="tail" style="color:var(--txt2)">\${esc(s.tail)}</div>\`\r
    + (partial ? \`<div class="muted" style="font-size:11px;margin-top:12px">⚖️ Оценено \${total} материалов из \${pool} за окно, проценты выше — доли среди оценённых. Почему не остальные — в журнале запросов ниже. «Спросить заново» спросит только про неоценённые \${pool-total}: уже оценённые не переспрашиваем и квоту на них не тратим.</div>\` : '')\r
    + \`<div class="muted" style="font-size:12px;margin-top:14px">\${marked?K.hint:'Материалы покажу после нового запроса разбора: в этом отчёте разметки нет.'}</div>\`\r
    + \`<div class="smark" style="margin-top:16px"></div></div>\`;\r
  if(!marked) return;\r
  const box = out.querySelector('.smark');\r
  out.querySelectorAll('.sseg').forEach(el=>{\r
    el.onclick = ()=>{\r
      // Повторный клик по той же тональности сворачивает таблицу — иначе она\r
      // остаётся висеть и непонятно, как её убрать.\r
      if(box.dataset.mark === el.dataset.mark && box.innerHTML){ box.innerHTML=''; box.dataset.mark=''; return; }\r
      box.dataset.mark = el.dataset.mark;\r
      markTable(box, marked, el.dataset.mark, kind);\r
    };\r
  });\r
}\r
\r
// ЗДОРОВЬЕ ИСТОЧНИКОВ. Вопрос, на который лог прогона не отвечает: «у какого\r
// сайта что-то сломалось?». Ноль из-за поломки и ноль «не писали» в логе\r
// выглядят одинаково, а смена вёрстки вообще не видна — сайт «читается», только\r
// не тем текстом. Здесь — одно слово на сайт и причина, проблемные наверху.\r
async function loadHealth(id, host, post){\r
  host.innerHTML = '<div class="muted">'+(post?L('Перечитываю эталонные статьи — это займёт пару минут…','Re-reading the reference articles — this takes a couple of minutes…'):L('Смотрю последние прогоны…','Looking at the recent runs…'))+'</div>';\r
  let h; try{ h = await (await api('/projects/'+id+'/health', post?{method:'POST'}:{})).json(); }\r
  catch(e){ host.innerHTML='<div class="muted">'+esc(e.message)+'</div>'; return; }\r
  const LBL = { ok:L('здоров','healthy'), partial:L('прочитан не целиком','partly read'), broken:L('сломан','broken'), down:L('недоступен','unreachable'),\r
    quiet:L('замолчал','went quiet'), skipped:L('пропущен','skipped'), unknown:L('нет данных','no data') };\r
  const COL = { ok:'var(--ok-txt)', partial:'var(--warn)', broken:'var(--neg-txt)', down:'var(--neg-txt)', quiet:'var(--warn)', skipped:'var(--mut)', unknown:'var(--mut)' };\r
  const chip = st => \`<span style="display:inline-block;padding:1px 9px;border-radius:20px;font-size:12px;font-weight:700;border:1px solid \${COL[st]};color:\${COL[st]};white-space:nowrap">\${esc(LBL[st]||st)}</span>\`;\r
  const rows = h.rows || [], c = h.counts || {};\r
  const order = ['broken','down','partial','quiet','unknown','ok','skipped'];\r
  const sum = order.filter(k=>c[k]).map(k=>chip(k)+' <b>'+c[k]+'</b>').join(' &nbsp; ');\r
  const bad = rows.filter(r => r.state!=='ok' && r.state!=='skipped');\r
  const good = rows.filter(r => r.state==='ok');\r
  const g = h.golden || {};\r
  const gAt = g.at ? new Date(g.at).toLocaleString(LANG==='en'?'en-GB':'ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}) : '';\r
  const tbl = list => \`<div class="wrap"><table><tr><th>\${L('Источник','Source')}</th><th>\${L('Состояние','State')}</th><th>\${L('Почему','Why')}</th></tr>\`\r
    + list.map(r=>\`<tr><td>\${esc(r.site)}</td><td>\${chip(r.state)}</td><td class="muted">\${esc(r.why||'')}</td></tr>\`).join('') + '</table></div>';\r
  host.innerHTML = \`\r
    <div style="margin:4px 0 10px">\${sum || '<span class="muted">'+L('Прогонов ещё нет.','No runs yet.')+'</span>'}</div>\r
    <div class="hint reachnote" style="margin-bottom:10px">\${L('Смотрим последние прогоны проекта ('+(h.runs||0)+'). «Сломан» — сменился вход или вёрстка сайта: ноль у такого сайта не значит «не писали». «Прочитан не целиком» — часть страниц не проверена. «Замолчал» — раньше давал материал, а три прогона подряд ноль: бывает и тихая неделя, но стоит открыть сайт руками.',\r
      'Based on the project’s recent runs ('+(h.runs||0)+'). “Broken” means the site’s entry or layout changed: a zero from such a site does not mean “nothing was published”. “Partly read” means some pages were not checked. “Went quiet” means it used to bring items and has given zero three runs in a row: it may be a quiet week, but open the site and check.')}</div>\r
    \${bad.length ? tbl(bad) : '<div class="muted" style="margin:6px 0">'+L('Проблемных источников нет.','No problem sources.')+'</div>'}\r
    \${good.length ? \`<details style="margin-top:10px"><summary>\${L('Здоровые источники','Healthy sources')} — \${good.length}</summary>\${tbl(good)}</details>\` : ''}\r
    <div class="card" style="margin-top:14px">\r
      <b>🔬 \${L('Эталонные статьи','Reference articles')}</b>\r
      <div class="hint reachnote" style="margin:6px 0">\${L('У каждого сайта программа сама запоминает несколько прочитанных статей — дату и длину текста. Раз в неделю она перечитывает их тем же разбором: статья не меняется, значит другая дата или вдвое другой текст — это сменилась вёрстка сайта. Так поломка видна до того, как она съест материал.',\r
        'For each site the program remembers a few articles it has read — their date and text length. Once a week it re-reads them with the same parser: an article does not change, so a different date or text twice as long or short means the site’s layout changed. That way a breakage shows up before it eats items.')}</div>\r
      <div class="muted">\${g.hosts ? L('Эталоны есть у сайтов: ','Sites with references: ')+g.hosts+(gAt?' · '+L('последняя проверка ','last check ')+gAt:' · '+L('ещё не проверялись','not checked yet')) : L('Эталонов пока нет — они набираются по ходу прогонов.','No references yet — they are collected during runs.')}</div>\r
      \${g.hosts ? \`<button class="btn" id="goldenNow" style="margin-top:8px"\${g.busy?' disabled':''}>🔬 \${L('Проверить разбор сейчас','Check parsing now')}</button>\` : ''}\r
    </div>\`;\r
  const b = $('#goldenNow', host); if(b) b.onclick = () => loadHealth(id, host, true);\r
}\r
\r
async function loadAnalytics(id, host){\r
  host.dataset.loaded = '1';\r
  host.innerHTML = '<div class="muted">Считаю показатели…</div>';\r
  const winInit = (()=>{ try{ return localStorage.getItem('mc_win_'+id) || 'all'; }catch(e){ return 'all'; }})();\r
  await renderAnalytics(id, host, winInit);\r
}\r
\r
async function renderAnalytics(id, host, win){\r
  try{ localStorage.setItem('mc_win_'+id, win); }catch(e){}\r
  const q = win==='all' ? '' : ('?days='+encodeURIComponent(win));\r
  let a; try{ a = await (await api('/projects/'+id+'/analytics'+q)).json(); }\r
  catch(e){ host.innerHTML='<div class="muted">Не удалось загрузить аналитику: '+esc(e.message)+'</div>'; return; }\r
  if(a.error){ host.innerHTML='<div class="muted">'+esc(a.error)+'</div>'; return; }\r
  const me = await (await api('/me')).json().catch(()=>({}));\r
  // Сохранённые ИИ-отчёты лежат в проекте: их кладёт автоматический разбор после\r
  // прогона и ручное нажатие кнопки.\r
  const proj = await (await api('/projects/'+id)).json().catch(()=>({}));\r
\r
  const o = a.overview;\r
  // Снимок дашборда, снятый до появления «молчащих», этого поля не содержит —\r
  // подставляем пустое, чтобы старый файл не падал с ошибкой.\r
  const sil = a.silent || { configured: 0, active: 0, list: [], more: 0 };\r
  const winBtn = (v,l)=>\`<button class="\${v===win?'on':''}" data-w="\${v}">\${l}</button>\`;\r
  const runsChart = a.runs.slice(-30).map(r=>({ day: fmtRun(r.at), count: r.found||0 }));\r
  const runsTable = a.runs.slice().reverse().slice(0,20).map(r=>\`\r
    <tr><td class="tag">\${fmtRun(r.at)}</td>\r
      <td class="found \${r.found?'g':'z'}">\${r.found||0}</td>\r
      <td class="tag">\${r.added?('+'+r.added):'—'}</td>\r
      <td class="tag">\${fmtSec(r.sec)}</td>\r
      <td class="tag">\${r.browserSec!=null?fmtSec(r.browserSec)+(r.sec?' ('+Math.round(r.browserSec/r.sec*100)+'%)':''):'—'}</td></tr>\`).join('');\r
\r
  // Цвета для платформ — согласованы во всех графиках (пирог, лента, ключ):\r
  // человек видит один и тот же оттенок «сайт» / «телеграм» / «youtube» и не\r
  // теряется, переводя взгляд между секциями.\r
  // Приглушённые тона вместо чистых базовых: индиго / изумруд / коралл. Один и\r
  // тот же оттенок «сайт» / «телеграм» / «youtube» во всех графиках, чтобы\r
  // взгляд не переучивался при переходе от диаграммы к списку.\r
  const CLR = { site: CSSVAR('--acc','#6366f1'), telegram: CSSVAR('--ok','#10b981'), youtube: CSSVAR('--neg','#f43f5e'), facebook: '#3b82f6', neutral: '#64748b' };\r
  const emKind = k => k==='telegram' ? '💬' : k==='youtube' ? '▶️' : k==='facebook' ? '👤' : '🌐';\r
  const fmtDT = d => { const t=new Date(d); if(isNaN(t)) return ''; const p=n=>String(n).padStart(2,'0'); return p(t.getDate())+'.'+p(t.getMonth()+1)+' '+p(t.getHours())+':'+p(t.getMinutes()); };\r
  const platformParts = [\r
    { label: '🌐 Сайты СМИ', value: o.siteItems, color: CLR.site },\r
    { label: '💬 Telegram', value: o.telegramItems, color: CLR.telegram },\r
    { label: '▶️ YouTube', value: o.youtubeItems, color: CLR.youtube },\r
    { label: '👤 Фейсбук', value: o.facebookItems||0, color: CLR.facebook },\r
  ];\r
  const feedHtml = a.feed.map(x => \`\r
    <div class="feed-item">\r
      <div class="d">\${fmtDT(x.date)}</div>\r
      <div class="t"><a href="\${esc(x.url)}" target="_blank" rel="noopener">\${esc(x.title||x.url)}</a>\r
        <div class="s"><span class="em">\${emKind(x.kind)}</span>\${esc(x.source)}</div></div>\r
    </div>\`).join('') || '<div class="hint" style="padding:10px">пусто в этом окне.</div>';\r
\r
  // ОХВАТ (extension/lib/audience.js). Числа округляются до двух значащих\r
  // цифр: «474 912» выглядит точностью, которой у оценки нет.\r
  const R = a.reach, M = a.media;\r
  const big = n => { if(n==null||!isFinite(n)) return '—'; if(n<1000) return String(Math.round(n));\r
    const k = Math.pow(10, Math.floor(Math.log10(n)) - 1), v = Math.round(n / k) * k;\r
    return v >= 1e6 ? L((v/1e6).toLocaleString('ru-RU',{maximumFractionDigits:1})+' млн', (v/1e6).toLocaleString('en-US',{maximumFractionDigits:1})+'M')\r
      : L(Math.round(v/1e3)+' тыс.', Math.round(v/1e3)+'K'); };\r
  const reachHtml = !R ? '' : \`\r
    <div class="section"><span class="em">📣</span><h3>\${L('Охват','Reach')}</h3><span class="sub">\${L('сколько людей могли увидеть материалы этого окна — оценка по аудитории изданий','how many people could have seen the items in this window — an estimate from outlet audiences')}</span></div>\r
    <div class="kpis">\r
      <div class="kpi big"><span class="em">🇰🇿</span><div class="n">≈ \${big(R.kz.unique)}</div><div class="l">\${L('человек в Казахстане могли увидеть — без повторов между изданиями','people in Kazakhstan could have seen it — without double counting across outlets')}</div></div>\r
      <div class="kpi"><span class="em">👀</span><div class="n">≈ \${big(R.kz.read)}</div><div class="l">\${L('вероятно прочитали в Казахстане','likely read in Kazakhstan')} (\${big(R.kz.readLo)}–\${big(R.kz.readHi)})</div></div>\r
      <div class="kpi"><span class="em">🌍</span><div class="n">≈ \${big(R.abroad.unique)}</div><div class="l">\${L('могли увидеть за рубежом','could have seen it abroad')}</div></div>\r
      <div class="kpi"><span class="em">🧮</span><div class="n">\${fmtN(R.covered.items)} / \${fmtN(R.covered.total)}</div><div class="l">\${L('материалов посчитано: у их источников известна аудитория','items counted: their sources have a known audience')}</div></div>\r
    </div>\r
    <div class="hint reachnote" style="margin:-4px 0 12px">\${L(\r
      'Как считается: посетители издания из Казахстана (LiveInternet, zero.kz, медиакиты) за те дни, когда оно писало о событии; браузеры переведены в людей (1,4 браузера на человека); повторы между изданиями убраны формулой Сейнсбери, итог не может превысить ' + big(R.pool) + ' — столько людей в Казахстане читают новости в интернете (75% из 19,7 млн интернет-пользователей). «Вероятно прочитали» — у сайтов доля аудитории, которую обычно собирает одна статья (около 3,5%, разброс в скобках), у телеграм-каналов — настоящие просмотры постов. Это оценка, а не замер: в отчёте её так и называют.',\r
      'How it is computed: an outlet’s visitors from Kazakhstan (LiveInternet, zero.kz, media kits) over the days it covered the event; browsers converted to people (1.4 browsers per person); overlaps between outlets removed with the Sainsbury formula, so the total cannot exceed ' + big(R.pool) + ' — the number of people in Kazakhstan who read news online (75% of 19.7M internet users). “Likely read” uses the share of a site’s audience one article usually gets (about 3.5%, range in brackets) and real post views for Telegram channels. This is an estimate, not a measurement.')}</div>\r
    \${M ? \`<div class="kpis">\r
      <div class="kpi"><span class="em">⚖️</span><div class="n">≈ \${big(M.index.total)}</div><div class="l">\${L('медиаиндекс — контактов с упоминанием: заголовок у крупного издания весит больше строки в тексте у районного','media index — contacts with a mention: a headline at a large outlet outweighs a line in the text of a district paper')}</div></div>\r
      \${M.index.toneScored ? \`<div class="kpi"><span class="em">🔴</span><div class="n">\${Math.round(100*M.index.tone.neg/M.index.toneScored)}%</div><div class="l">\${L('медиаиндекса — у негативных материалов (по весу, а не по числу)','of the media index is negative items (by weight, not count)')}</div></div>\r
      <div class="kpi"><span class="em">👥</span><div class="n">≈ \${big(M.tone.neg)}</div><div class="l">\${L('человек в Казахстане могли увидеть негатив','people in Kazakhstan could have seen negative items')}</div></div>\` : \`<div class="kpi"><span class="em">🎭</span><div class="n">—</div><div class="l">\${L('тональность не размечена — доля негатива по весу появится после оценки тона','tone not scored — the negative share appears after tone scoring')}</div></div>\`}\r
    </div>\r
    <div class="charts">\r
      <div class="chart w2"><h4>📈 \${L('Как копился охват','How the reach built up')}</h4><div id="reachDays"></div>\r
        <div class="hint reachnote">\${L('Точка дня — сколько людей могли увидеть всё, что вышло по этот день включительно (без повторов). Пунктир — то же по негативу. Кривая выходит на плато, когда событие перестаёт расходиться.','Each point — how many people could have seen everything published up to that day (no double counting). Dashed — the same for negative items. The curve flattens when the story stops spreading.')}</div></div>\r
      <div class="chart w2"><h4>⚖️ \${L('Самые весомые материалы','Heaviest items')}</h4>\r
        <div class="hint reachnote">\${L('Вес — сколько людей видели упоминание: заголовок — дневная аудитория издания, только в тексте — те, кто открыл статью.','Weight — how many people saw the mention: a headline is the outlet’s daily audience; text only — those who opened the article.')}</div>\r
        \${M.index.top.slice(0,8).map(x=>\`<div class="feed-item"><div class="d">≈ \${big(x.weight)}\${x.sent==='-'?' 🔴':x.sent==='+'?' 🟢':''}</div><div class="t">\${x.url?\`<a href="\${esc(x.url)}" target="_blank" rel="noopener">\${esc(x.title||x.url)}</a>\`:esc(x.title)}<div class="s">\${esc(x.source)}\${x.match==='body'?' · '+L('в тексте','in text'):''}</div></div></div>\`).join('') || '<div class="muted">—</div>'}\r
      </div>\r
    </div>\` : ''}\r
    <div class="charts">\r
      <div class="chart w2"><h4>📊 \${L('Кто дал охват','Who brought the reach')}</h4>\r
        <div class="wrap" style="max-height:320px;overflow:auto"><table style="font-size:12px">\r
          <thead><tr><th>\${L('Источник','Source')}</th><th>\${L('Дней','Days')}</th><th>\${L('В Казахстане','In Kazakhstan')}</th><th>\${L('За рубежом','Abroad')}</th><th>\${L('Откуда цифра','Where the figure comes from')}</th></tr></thead>\r
          <tbody>\${R.sources.slice(0,60).map(x=>\`<tr><td>\${emKind(x.kind)} \${esc(x.source)}</td><td class="tag">\${x.days}</td><td>\${big(x.kz)}</td><td class="tag">\${big(x.abroad)}</td><td class="tag">\${esc(x.src)}</td></tr>\`).join('') || \`<tr><td colspan="5" class="muted">—</td></tr>\`}</tbody>\r
        </table></div>\r
      </div>\r
      <div class="chart"><h4>❔ \${L('Без данных об аудитории','No audience data')}</h4>\r
        <div class="hint">\${R.unknown.length ? L('Эти источники дали материал, но их аудитории мы не знаем — в охват они не вошли. Если знаете цифру (из медиакита издания), впишите её ниже.','These sources produced items, but their audience is unknown — they are not in the reach. If you know the figure (from the outlet’s media kit), enter it below.') : L('У всех источников окна аудитория известна.','Every source in this window has a known audience.')}</div>\r
        \${R.unknown.length?\`<div class="silent">\${R.unknown.slice(0,60).map(u=>\`<div title="\${esc(u.source)}">\${esc(u.source)} · \${u.items}</div>\`).join('')}</div>\`:''}\r
      </div>\r
    </div>\r
    \${SNAP?'':\`<details class="card" id="audEdit" style="margin:0 0 14px;padding:10px">\r
      <summary style="cursor:pointer;font-weight:600">✏️ \${L('Цифры аудитории: свои поправки и обновление','Audience figures: your corrections and refresh')}</summary>\r
      <div class="hint">\${L('По строке на источник: <code>сайт посетителей_из_Казахстана_в_месяц [доля_Казахстана_%]</code>, например <code>nur.kz 6000000 90%</code>. Для телеграм-канала — подписчики: <code>t.me/канал 50000</code>. Ваши цифры важнее всех остальных.','One line per source: <code>site monthly_visitors_from_Kazakhstan [Kazakhstan_share_%]</code>, e.g. <code>nur.kz 6000000 90%</code>. For a Telegram channel — subscribers: <code>t.me/channel 50000</code>. Your figures override everything else.')}</div>\r
      <textarea id="audManual" style="min-height:90px" placeholder="nur.kz 6000000 90%"></textarea>\r
      <div class="pickbar" style="margin-top:6px"><button class="sec" id="audSave">\${L('Сохранить','Save')}</button><button class="sec" id="audRefresh">🔄 \${L('Обновить цифры из LiveInternet и zero.kz','Refresh figures from LiveInternet and zero.kz')}</button></div>\r
      <div class="tag" id="audInfo"></div>\r
    </details>\`}\r
\`;\r
  // СЮЖЕТЫ (extension/lib/stories.js): о скольких СОБЫТИЯХ писали, кто\r
  // написал первым и кто подхватил. Без ИИ — по совпадению слов заголовка.\r
  const S = a.stories;\r
  const dOnly = d => { const t=new Date(d); return !(t.getHours()||t.getMinutes()||t.getSeconds()); };\r
  const whenFirst = d => { const t=new Date(d); if(isNaN(t)) return ''; const p=n=>String(n).padStart(2,'0'); return dOnly(d) ? p(t.getDate())+'.'+p(t.getMonth()+1) : fmtDT(d); };\r
  const storyHtml = !S || !S.items ? '' : \`\r
    <div class="section"><span class="em">🧵</span><h3>\${L('Сюжеты','Stories')}</h3><span class="sub">\${L('о скольких событиях писали, кто написал первым и кто подхватил','how many events were covered, who published first and who picked it up')}</span></div>\r
    <div class="kpis">\r
      <div class="kpi big"><span class="em">🧵</span><div class="n">≈ \${fmtN(S.stories)}</div><div class="l">\${L('отдельных сюжетов за '+fmtN(S.items)+' материалами','separate stories behind '+fmtN(S.items)+' items')}</div></div>\r
      <div class="kpi"><span class="em">📡</span><div class="n">\${fmtN(S.spread)}</div><div class="l">\${L('сюжетов подхватили два издания и больше','stories picked up by two or more outlets')}</div></div>\r
    </div>\r
    <div class="hint reachnote" style="margin:-4px 0 12px">\${L(\r
      'Как считается: материал идёт в сюжет, если похож на профиль слов всего сюжета. Сравниваются только слова заголовка, без ИИ; казахская и русская версии одного события сводятся вместе, а разные события с разными именами собственными — нет. Одно событие, пересказанное непривычными словами, может распасться на два сюжета — поэтому «≈». «Первым» — самый ранний материал с известным временем публикации; это «кто опубликовал первым», а не «кто добыл новость».',\r
      'How it is computed: an item joins a story if it resembles the word profile of the whole story. Only headline words are compared, no AI; the Kazakh and Russian versions of one event are merged, while different events with different proper names are not. One event retold in unusual words may split into two stories — hence “≈”. “First” is the earliest item with a known publication time; it means “who published first”, not “who broke the news”.')}</div>\r
    <div class="charts">\r
      <div class="chart w2"><h4>📡 \${L('Сюжеты, которые разошлись','Stories that spread')}</h4>\r
        \${S.top.length ? S.top.map(x=>\`<details class="story"><summary><b>\${x.sources}</b> \${L('изд.','outlets')} · \${x.count} \${L('мат.','items')} — \${esc(x.first.title)}\r
          <div class="s">\${L('первым','first')}: \${esc(x.first.source)} \${whenFirst(x.first.date)}</div></summary>\r
          \${x.items.map(i=>\`<div class="feed-item"><div class="d">\${whenFirst(i.date)}</div><div class="t">\${i.url?\`<a href="\${esc(i.url)}" target="_blank" rel="noopener">\${esc(i.title)}</a>\`:esc(i.title)}<div class="s">\${esc(i.source)}</div></div></div>\`).join('')}\r
          \${x.more?\`<div class="muted" style="padding:4px 0">\${L('и ещё '+x.more,'and '+x.more+' more')}</div>\`:''}\r
        </details>\`).join('') : \`<div class="muted">\${L('Ни один сюжет в этом окне не подхватило второе издание.','No story in this window was picked up by a second outlet.')}</div>\`}\r
      </div>\r
      <div class="chart"><h4>🥇 \${L('Кто пишет первым','Who publishes first')}</h4>\r
        <div class="hint reachnote">\${L('Сколько разошедшихся сюжетов издание опубликовало раньше всех и сколько изданий их потом подхватили.','How many spreading stories the outlet published before everyone else, and how many outlets picked them up afterwards.')}</div>\r
        \${S.firstMovers.length ? \`<table style="font-size:12px"><thead><tr><th>\${L('Источник','Source')}</th><th>\${L('Первым','First')}</th><th>\${L('Подхватили','Picked up')}</th></tr></thead><tbody>\r
          \${S.firstMovers.map(f=>\`<tr><td>\${esc(f.source)}</td><td>\${f.first}</td><td class="tag">\${f.pickedUpBy}</td></tr>\`).join('')}</tbody></table>\` : '<div class="muted">—</div>'}\r
      </div>\r
    </div>\r
\`;\r
  host.innerHTML = \`\r
    <div class="win">\r
      \${winBtn('all','вся история')}\${winBtn('30','30 дней')}\${winBtn('7','7 дней')}\r
      <span class="tag" style="margin-left:auto">окно: <b style="color:var(--txt)">\${o.windowFrom} … \${o.windowTo}</b></span>\r
      \${SNAP?'':\`<button class="sec" id="repBtn" style="padding:4px 10px;font-size:13px;flex:none"\r
        title="Готовый текст для заказчика: охват, период, результат и методика — по ЭТОМУ окну аналитики.">📋 Отчёт для заказчика</button>\`}\r
      \${SNAP?'':\`<a class="tag" id="shareBtn" href="/api/projects/\${esc(id)}/share.html"\r
        style="cursor:pointer;color:var(--acc);border:1px solid var(--line);border-radius:6px;padding:3px 8px;text-decoration:none"\r
        title="Один HTML-файл со снимком дашборда: можно послать людям или выложить в интернет. Ни ключей, ни кнопок изменения в нём нет.">📤 Файл для показа</a>\`}\r
    </div>\r
    \${SNAP?'':\`<div class="hint" style="margin:-4px 0 10px">«Файл для показа» — снимок этого дашборда одной страницей. Работает без программы и без интернета; смотреть можно, менять нечего.</div>\`}\r
\r
    <div class="section"><span class="em">📰</span><h3>Медиа-аналитика</h3><span class="sub">что и где написали за период</span></div>\r
    <div class="kpis">\r
      <div class="kpi big"><span class="em">🗞️</span><div class="n">\${fmtN(o.items)}</div><div class="l">публикаций всего\${o.itemsWeek?' · <b style="color:#6ee7a0">'+o.itemsWeek+'</b> за 7 дней':''}</div></div>\r
      <div class="kpi"><span class="em">🌐</span><div class="n">\${fmtN(o.siteItems)}</div><div class="l">на сайтах СМИ</div></div>\r
      <div class="kpi"><span class="em">💬</span><div class="n">\${fmtN(o.telegramItems)}</div><div class="l">в Telegram</div></div>\r
      <div class="kpi"><span class="em">▶️</span><div class="n">\${fmtN(o.youtubeItems)}</div><div class="l">в YouTube</div></div>\r
      \${o.facebookItems?\`<div class="kpi"><span class="em">👤</span><div class="n">\${fmtN(o.facebookItems)}</div><div class="l">в Фейсбуке</div></div>\`:''}\r
      <div class="kpi"><span class="em">📡</span><div class="n">\${fmtN(o.uniqueSources)}</div><div class="l">источников дали материал</div></div>\r
    </div>\r
\r
    <div class="charts">\r
      <div class="chart wide"><h4>📈 Динамика упоминаний</h4>\r
        <div class="hint">по календарному дню публикации; пики — инфоповоды. Наведите курсор на день — покажу число, щёлкните — покажу сами материалы.</div>\r
        <div id="cDay"></div>\r
        <div id="cDayList" class="daylist" hidden></div>\r
      </div>\r
      <div class="chart"><h4>🥧 Доля платформ</h4>\r
        <div class="hint">откуда прилетел материал: сайт СМИ, Телеграм или YouTube.</div>\r
        <div id="cPie"></div>\r
      </div>\r
      <div class="chart"><h4>🌐 Топ-10 сайтов СМИ</h4>\r
        <div class="hint">самые активные веб-издания.</div>\r
        <div id="cSite"></div>\r
      </div>\r
      <div class="chart"><h4>💬 Топ-10 каналов</h4>\r
        <div class="hint">телеграм-каналы и youtube-выдача.</div>\r
        <div id="cSocial"></div>\r
      </div>\r
      <div class="chart"><h4>🕐 Ритм публикаций</h4>\r
        <div class="hint">день недели × час, по местному времени.</div>\r
        <div id="cHeat"></div>\r
      </div>\r
      <div class="chart w2"><h4>📰 Лента свежих</h4>\r
        <div class="hint">последние \${a.feed.length} материалов в этом окне.</div>\r
        <div class="feed-list">\${feedHtml}</div>\r
      </div>\r
    </div>\r
\r
    \${reachHtml}\r
    \${storyHtml}\r
\r
    <div class="section"><span class="em">⚙️</span><h3>Техническое здоровье</h3><span class="sub">как работает движок и что кормит</span></div>\r
    <div class="kpis">\r
      <div class="kpi"><span class="em">▶️</span><div class="n">\${fmtN(o.runs)}</div><div class="l">прогонов</div></div>\r
      <div class="kpi"><span class="em">⏱️</span><div class="n">\${fmtSec(o.medRunSec)}</div><div class="l">обычный прогон</div></div>\r
      <div class="kpi"><span class="em">🖥️</span><div class="n">\${o.browserPct!=null?o.browserPct+'%':'—'}</div><div class="l">доля браузера\${o.browserPct!=null&&o.browserPct>=70?' — потолок близко':''}</div></div>\r
    </div>\r
    \${o.slowRuns?\`<div class="hint" style="margin:-4px 0 8px">Плашка показывает СЕРЕДИНУ: столько идёт обычный прогон. Среднее тут врало бы — из \${fmtN(o.runs)} \${plural(o.runs,'прогона','прогонов','прогонов')} \${o.slowRuns} \${plural(o.slowRuns,'затянулся','затянулись','затянулись')} втрое и дольше (самый долгий — \${fmtSec(o.maxRunSec)}), а одно такое зависание перекашивает среднее в разы.</div>\`:''}\r
    <div class="charts">\r
      <div class="chart"><h4>🎯 Эффективность каналов сбора</h4>\r
        <div class="hint">кто нашёл материал ПЕРВЫМ. По этому же полю учится память каналов.</div>\r
        <div id="cCh"></div>\r
      </div>\r
      <div class="chart"><h4>🔍 Глубина совпадения</h4>\r
        <div class="hint">где именно нашлось слово. Сумма равна числу публикаций: заголовок — целевое, тело — проходящее, пост и видео — соцсети.</div>\r
        <div id="cMatch"></div>\r
      </div>\r
      <div class="chart w2mid"><h4>🔇 Молчащие источники</h4>\r
        <div class="hint">\${sil.configured\r
          ? \`отмечено источников — \${sil.configured}, дали материал — <b style="color:var(--txt2)">\${sil.active}</b>, молчат — <b style="color:\${sil.list.length?CSSVAR('--warn','#fbbf24'):'var(--txt2)'}">\${sil.list.length + sil.more}</b>. Либо про тему там не писали, либо к источнику не достучались — смотрите 🔍 в логе прогона.\`\r
          : 'источники в проекте не заданы.'}</div>\r
        \${sil.list.length\r
          ? \`<div class="silent">\${sil.list.map(s=>\`<div title="\${esc(s)}">\${esc(s)}</div>\`).join('')}</div>\`\r
             + (sil.more?\`<div class="hint" style="margin:8px 0 0">…и ещё \${sil.more}</div>\`:'')\r
          : \`<div class="hint" style="margin:0">\${sil.configured?'все источники дали материал в этом окне.':'—'}</div>\`}\r
      </div>\r
      <div class="chart wide"><h4>📊 Динамика прогонов</h4>\r
        <div class="hint">объём каждого прогона (материалов).</div>\r
        <div id="cRuns"></div>\r
        <div style="max-height:180px;overflow:auto;margin-top:10px"><table style="font-size:12px">\r
          <thead><tr><th>Прогон</th><th>Найдено</th><th>Новых</th><th>Длит.</th><th>Браузер</th></tr></thead>\r
          <tbody>\${runsTable||'<tr><td colspan="5" class="muted">—</td></tr>'}</tbody></table></div>\r
      </div>\r
    </div>\r
\r
    <div class="section"><span class="em">✨</span><h3>ИИ-Аналитика</h3><span class="sub">\${SNAP?'разбор от Gemini':'разбор от Gemini — платится Google-квотой'}</span></div>\r
    <div class="gemini">\r
      \${(!SNAP && proj && proj.config && proj.config.noExternal) ? \`\r
      <div class="hint" style="color:var(--warn);margin:0">🔒 У проекта запрещена отправка данных во внешний контур, поэтому Gemini здесь недоступен.\r
        Снять запрет можно в настройках проекта. Запрет стоит на сервере: даже прямое обращение к кабинету получит отказ.</div>\` : \`\r
      \${SNAP ? \`\r
      <div class="hint">Готовый разбор, сделанный при сборе материалов. Переключайте вид кнопками.</div>\r
      <div class="gaskbar">\r
        <button data-kind="review"><span class="em">📰</span>\${L('Расширенный обзор','Extended review')}</button>\r
        <button data-kind="sentiment" class="sec"><span class="em">😊</span>Тональность</button>\r
        <button data-kind="verify" class="sec"><span class="em">🎯</span>Релевантность</button>\r
      </div>\` : \`\r
      <div class="hint">\${L('По кнопке в Google уходят цифры сводки, заголовки и (если разрешено галочкой ниже) фрагменты текста — <b>без ссылок</b>. Расширенный обзор смотрит все материалы окна разом; тональность и проверка релевантности — тоже все, но только те, про которые ещё не спрашивали. Ключ хранится в файле настроек кабинета и наружу не отдаётся.','When you press the button, summary figures, headlines and (if allowed by the checkbox below) text excerpts go to Google — <b>without links</b>. The extended review looks at every item in the window at once; sentiment and the relevance check also look at all of them, but only those not asked about before. The key is stored in the interface settings file and is never handed out.')}</div>\r
      <div class="krow">\r
        <input id="gkey" type="password" placeholder="🔑 Google AI Studio API-ключ (AIza...)" value="\${me.hasGeminiKey?'••••••••••••••••••••••••':''}">\r
        <input id="gmodel" class="model" type="text" list="gmodels" placeholder="gemini-3.5-flash" value="\${esc(me.geminiModel||'')}">\r
        <datalist id="gmodels"></datalist>\r
        <button id="gsave" class="sec">Сохранить</button>\r
      </div>\r
      <!-- КАКИЕ МОДЕЛИ ЕСТЬ НА САМОМ ДЕЛЕ. Имя модели устаревает за те месяцы,\r
           пока сборка стоит у человека, и тогда Google отвечает «модель не\r
           найдена» — по виду это поломка программы. Спрашиваем у Google, а не\r
           показываем свой список: свой был бы такой же устаревший. -->\r
      <div class="hint" style="margin:-4px 0 10px">\r
        Поле модели можно не трогать. <a href="#" id="gmlist">Какие модели доступны?</a>\r
        <span id="gmout"></span>\r
      </div>\r
      <div class="krow" style="align-items:flex-start;gap:10px">\r
        <label class="check" style="margin:0;flex:none"><input id="gsnip" type="checkbox" \${me.geminiSnippets===false?'':'checked'}> 📄 показывать модели фрагмент текста</label>\r
        <span class="hint" style="margin:0;flex:1 1 320px">Точнее оценка тона: по одному заголовку «провёл совещание» — всегда нейтрал,\r
          каким бы ни было совещание. Вместе с заголовком уедет фрагмент статьи (~150 знаков вокруг ключевого слова) — тот же,\r
          что в столбце CSV. Ссылки не уходят и здесь. Число запросов к Google не меняется.</span>\r
      </div>\r
      <div class="krow" style="align-items:center;gap:10px">\r
        <span class="tag" style="flex:none">🪟 Окон браузера:</span>\r
        <select id="bwin" style="flex:0 1 160px">\r
          \${[1,2,3,4].map(n=>\`<option value="\${n}"\${(+me.browserWindows||2)===n?' selected':''}>\${n}</option>\`).join('')}\r
        </select>\r
        <span class="hint" style="margin:0;flex:1 1 320px">Браузер — самая медленная часть прогона. Два окна делят это время примерно\r
          пополам, но и памяти просят вдвое. Если компьютер начнёт подтормаживать — верните одно.</span>\r
      </div>\r
      <!-- КНОПКИ ВИДА ТОЛЬКО ПЕРЕКЛЮЧАЮТ СОХРАНЁННОЕ. Спросить Google — отдельная\r
           кнопка справа. До 18 сентября 2026 каждый щелчок по виду ходил в\r
           Google заново: человек получал ответ, переключался на другой вид и\r
           терял первый, хотя тот был сохранён. Плюс каждое переключение стоило\r
           квоты. Теперь смотреть — бесплатно, платит только «Спросить». -->\r
      <div class="gaskbar">\r
        <button data-kind="review"><span class="em">📰</span>\${L('Расширенный обзор','Extended review')}</button>\r
        <button data-kind="sentiment" class="sec"><span class="em">😊</span>Тональность</button>\r
        <button data-kind="verify" class="sec" id="gverify"><span class="em">🎯</span>Релевантность</button>\r
        <button id="gask" style="margin-left:auto">✨ Спросить Gemini</button>\r
      </div>\r
      <div class="hint" id="gaskhint" style="margin:6px 0 0"></div>\`}\r
      <div id="gout" class="out muted">\${SNAP?'Разбор за это окно не сохранён.':'Нажмите одну из кнопок выше. Ответ модели появится здесь.'}</div>\r
      <div class="warn" id="gwarn" hidden></div>\r
      <div id="glog"></div>\`}\r
    </div>\`;\r
\r
  // СОХРАНЁННЫЙ РАЗБОР ПОКАЗЫВАЕМ СРАЗУ. Раньше ответ жил только в этой вкладке\r
  // до перезагрузки: после ночного прогона по расписанию человек утром открывал\r
  // панель и видел пустоту, хотя разбор уже был сделан.\r
  const saved = (proj && proj.ai) || {};\r
  const showSaved = kind => {\r
    const r = saved[kind]; if(!r) return false;\r
    const outEl = host.querySelector('#gout'), warnEl = host.querySelector('#gwarn');\r
    const when = r.at ? fmtRun(r.at) : '';\r
    if(r.err){ outEl.textContent = r.err; outEl.classList.add('muted'); }\r
    else { paintAnswer(outEl, kind, r.text || '', r.items, o.items); outEl.classList.remove('muted'); }\r
    const lg = host.querySelector('#glog'); if(lg) lg.innerHTML = aiLogHtml(r.log, { note: r.note || '' });\r
    warnEl.hidden = false;\r
    // РАЗБОР МОГ УСТАРЕТЬ. Пользователь чистит выдачу руками — а модель судила\r
    // по НАБОРУ ДАННЫХ ДО чистки: убрали десяток негативных материалов, и\r
    // «НЕГАТИВНЫХ: 12» превращается в неправду, которая выглядит как правда.\r
    // Молча пересчитать нельзя (каждый запрос стоит квоты Google), поэтому\r
    // честно говорим, что цифры разошлись, и зовём нажать кнопку.\r
    const stale = proj && proj.editedAt && r.at && r.at < proj.editedAt;\r
    warnEl.textContent = \`\${r.auto?'автоматически ':''}от \${when}\${r.window?(' · окно '+r.window):''}\${r.model?(' · '+r.model):''}\`\r
      + (stale && !SNAP ? ' · ⚠️ после этого разбора выдачу чистили — нажмите кнопку ещё раз, чтобы обновить' : '');\r
    warnEl.style.color = stale && !SNAP ? '#f87171' : '';\r
    return true;\r
  };\r
  // В СНИМКЕ показываем самый свежий из сохранённых сразу. В живом кабинете это\r
  // делает pickKind ниже — там же, где переключение видов и кнопка «Спросить».\r
  if(SNAP){\r
    const kinds = Object.keys(saved).filter(k=>saved[k] && saved[k].at && host.querySelector(\`.gaskbar button[data-kind="\${k}"]\`));\r
    if(kinds.length){\r
      const latest = kinds.sort((a,b)=>saved[b].at-saved[a].at)[0];\r
      showSaved(latest);\r
      const btn = host.querySelector(\`.gaskbar button[data-kind="\${latest}"]\`);\r
      if(btn){ btn.classList.remove('sec'); }\r
    }\r
  }\r
\r
  // ОТЧЁТ ДЛЯ ЗАКАЗЧИКА — по ТЕКУЩЕМУ окну аналитики. Не скачиваем файлом: его\r
  // вставляют в письмо или в сообщение, а скачанный пришлось бы сперва открыть.\r
  {\r
    const rb = host.querySelector('#repBtn');\r
    if(rb) rb.onclick = async ()=>{\r
      const out2 = textBox('Отчёт по мониторингу', 'Текст для заказчика по выбранному окну аналитики. Скопируйте и вставьте в письмо.');\r
      out2.value = 'Собираю отчёт…';\r
      try{\r
        const r = await api('/projects/'+id+'/report.txt' + (win==='all' ? '' : ('?days='+encodeURIComponent(win))));\r
        out2.value = r.ok ? await r.text() : ('Ошибка: HTTP '+r.status);\r
      }catch(e){ out2.value='Ошибка запроса: '+(e&&e.message||e); }\r
    };\r
  }\r
\r
  // Холст графиков считается по фактической ширине карточки, поэтому рисовать\r
  // их надо ОДНОЙ функцией, которую можно позвать заново при смене размера окна.\r
  // Иначе растянутое окно оставляло бы график нарисованным под старую ширину.\r
  // МАТЕРИАЛЫ ВЫБРАННОГО ДНЯ. Просьба пользователя 9 октября 2026: «цифра есть,\r
  // а почему там так много — пробежаться глазами по списку — возможности нет».\r
  // Список берётся с сервера по щелчку (в снимке — из слепка), а не возится в\r
  // сводке: вся лента на каждое открытие вкладки — лишний вес.\r
  let selDay = null, dayReq = 0;\r
  const dayBox = host.querySelector('#cDayList');\r
  const dmy = d => { const p = String(d||'').split('-'); return p.length===3 ? p[2]+'.'+p[1]+'.'+p[0] : d; };\r
  const hhmm = d => { const t=new Date(d); if(isNaN(t)) return ''; const p=n=>String(n).padStart(2,'0'); return p(t.getHours())+':'+p(t.getMinutes()); };\r
  const dayHead = (pt, n) => \`<div class="dhead"><b>📅 \${esc(dmy(pt.day))}</b>\r
      \${n===false ? '' : \`<span class="tag">\${n==null ? L('загружаю…','loading…') : L(n+' '+plural(n,'материал','материала','материалов'), n+' '+(n===1?'article':'articles'))}</span>\`}\r
      <button class="sec dclose" title="\${L('Закрыть список','Close the list')}">✕</button></div>\`;\r
  const closeDay = () => { selDay = null; dayReq++; dayBox.hidden = true; dayBox.innerHTML = ''; drawDay(); };\r
  const pickDay = async pt => {\r
    selDay = pt.day;\r
    const my = ++dayReq;          // щёлкнули другой день, пока ждали ответа, — старый ответ не рисуем\r
    dayBox.hidden = false;\r
    if(!pt.count){\r
      dayBox.innerHTML = dayHead(pt, 0) + \`<div class="hint" style="margin:6px 0 0">\${L('В этот день материалов нет.','No articles on this day.')}</div>\`;\r
    } else {\r
      dayBox.innerHTML = dayHead(pt, null);\r
      let r;\r
      try{ r = await (await api('/projects/'+id+'/day?d='+encodeURIComponent(pt.day))).json(); }\r
      catch(e){ r = { error: e.message }; }\r
      if(my !== dayReq) return;\r
      if(r.error){ dayBox.innerHTML = dayHead(pt, false) + \`<div class="hint" style="margin:6px 0 0">\${L('Не удалось загрузить список: ','Could not load the list: ')}\${esc(r.error)}</div>\`; }\r
      else {\r
        const its = r.items || [];\r
        dayBox.innerHTML = dayHead(pt, its.length) + \`<div class="feed-list">\${its.map(x=>\`\r
          <div class="feed-item">\r
            <div class="d">\${hhmm(x.date)}</div>\r
            <div class="t"><a href="\${esc(x.url)}" target="_blank" rel="noopener">\${esc(x.title||x.url)}</a>\r
              <div class="s"><span class="em">\${emKind(x.kind)}</span>\${esc(x.source)}\${x.rel==='-'?\` · <span style="color:var(--warn)">\${L('похоже, не про объект','probably not about the subject')}</span>\`:''}</div></div>\r
          </div>\`).join('')}</div>\`;\r
      }\r
    }\r
    const b = dayBox.querySelector('.dclose'); if(b) b.onclick = closeDay;\r
  };\r
  // «Динамика упоминаний» — непрерывный ряд по дням: площадь с градиентом\r
  // показывает тренд, а частокол столбцов заставлял сравнивать соседние палки.\r
  const drawDay = () => area(host.querySelector('#cDay'), a.byDay, { sel: selDay, onPick: pickDay });\r
  const drawCharts = () => {\r
  drawDay();\r
  pie(host.querySelector('#cPie'), platformParts, { centerLabel: 'материалов' });\r
  barsH(host.querySelector('#cSite'), a.bySite, { color: CLR.site });\r
  barsH(host.querySelector('#cSocial'), a.bySocial, { color: CLR.telegram });\r
  heat(host.querySelector('#cHeat'), a.byHour);\r
  // Каналы сбора: тот же донат, что и «доли платформ», но по механизмам движка.\r
  // Цвет одного оттенка (акцент) — не даём цветам таблицы платформ (сайт/TG/YT)\r
  // случайно совпасть с цветами каналов (sitemap/telegram/wp-api).\r
  const chColors = ['#6366f1','#10b981','#8b5cf6','#f59e0b','#f43f5e','#22d3ee','#a3e635','#ec4899','#14b8a6','#818cf8','#fb923c','#2dd4bf'];\r
  const chParts = a.byChannel.map((x,i)=>({ label: x.key, value: x.count, color: chColors[i%chColors.length] }));\r
  pie(host.querySelector('#cCh'), chParts, { centerLabel: 'находок' });\r
  // Пять корзин, а не три. YouTube (match='video') раньше не попадал ни в одну,\r
  // и сумма столбиков не сходилась с «публикаций всего» — заметил пользователь.\r
  threeBar(host.querySelector('#cMatch'), [\r
    { label: 'Заголовок статьи', value: o.matchTitle, color: CSSVAR('--acc','#6366f1') },\r
    { label: 'Тело статьи', value: o.matchBody, color: CSSVAR('--violet','#8b5cf6') },\r
    { label: 'Пост в ТГ', value: o.matchPost, color: CSSVAR('--ok','#10b981') },\r
    { label: 'Видео на YouTube', value: o.matchVideo || 0, color: CSSVAR('--neg','#f43f5e') },\r
    { label: 'Без пометки', value: o.matchOther || 0, color: '#64748b' },\r
  ]);\r
  barsV(host.querySelector('#cRuns'), runsChart, { color: CSSVAR('--ok','#10b981') });\r
  if(M) reachCurve(host.querySelector('#reachDays'), M.days, big);\r
  };\r
  drawCharts();\r
  // Перерисовка при смене ширины окна. Слушатель заменяется на каждом рендере —\r
  // иначе они копились бы и старые рисовали в выброшенные из DOM элементы.\r
  if(window._mcResize) window.removeEventListener('resize', window._mcResize);\r
  let rt = null, lastW = window.innerWidth;\r
  window._mcResize = ()=>{\r
    if(Math.abs(window.innerWidth - lastW) < 40) return;   // мелкое дрожание не трогаем\r
    lastW = window.innerWidth;\r
    clearTimeout(rt);\r
    rt = setTimeout(()=>{ if(host.isConnected) drawCharts(); }, 180);\r
  };\r
  window.addEventListener('resize', window._mcResize);\r
\r
  // ТОЛЬКО кнопки окна (\`data-w\`), а не «все кнопки в строке». Рядом с ними\r
  // теперь стоит «Отчёт для заказчика», и общий отбор навесил на него смену\r
  // окна: щелчок перерисовывал дашборд с \`win = undefined\` вместо отчёта.\r
  // Отбор по классу-контейнеру ломается ровно тогда, когда в контейнер кладут\r
  // вторую кнопку, — то есть при следующей же правке вёрстки.\r
  host.querySelectorAll('.win button[data-w]').forEach(b=>b.onclick=()=>renderAnalytics(id, host, b.dataset.w));\r
\r
  // СПРАВОЧНИК АУДИТОРИЙ: поправки человека и обновление цифр (audience-store.js).\r
  {\r
    const box = host.querySelector('#audEdit');\r
    if(box){\r
      const ta = box.querySelector('#audManual'), info = box.querySelector('#audInfo');\r
      const paint = r => {\r
        if(!r) return;\r
        const when = r.at ? fmtRun(r.at) : L('ещё не обновлялись — используется справочник программы','not refreshed yet — the built-in reference is used');\r
        info.innerHTML = L('цифры обновлены: ','figures refreshed: ') + esc(when)\r
          + (r.bad && r.bad.length ? '<br><span style="color:var(--warn)">' + L('не понял строки: ','could not read lines: ') + esc(r.bad.join('; ')) + '</span>' : '')\r
          + (r.notes && r.notes.length ? '<br>' + esc(r.notes.join('; ')) : '');\r
      };\r
      api('/audience').then(r=>r.json()).then(r=>{ ta.value = r.manual || ''; paint(r); }).catch(()=>{});\r
      box.querySelector('#audSave').onclick = async ()=>{\r
        const r = await (await api('/audience',{method:'PUT',body:JSON.stringify({manual: ta.value})})).json().catch(()=>null);\r
        paint(r);\r
        if(r && !(r.bad && r.bad.length)) renderAnalytics(id, host, win);\r
      };\r
      box.querySelector('#audRefresh').onclick = async e=>{\r
        const b = e.currentTarget; b.disabled = true; info.textContent = L('обновляю — обычно до минуты…','refreshing — usually under a minute…');\r
        const r = await (await api('/audience/refresh',{method:'POST'})).json().catch(()=>null);\r
        b.disabled = false;\r
        if(r && r.ok) renderAnalytics(id, host, win); else paint(r && r.info || { notes: [ (r && r.err) || L('не вышло','failed') ] });\r
      };\r
    }\r
  }\r
\r
  const key = host.querySelector('#gkey'), model = host.querySelector('#gmodel');\r
  // Список моделей спрашиваем ТОЛЬКО по нажатию: это запрос к Google, и делать\r
  // его при каждом открытии вкладки значило бы тратить чужую квоту на то, чего\r
  // человек не просил.\r
  {\r
    const link = host.querySelector('#gmlist'), outm = host.querySelector('#gmout'), dl = host.querySelector('#gmodels');\r
    if (link) link.onclick = async e => {\r
      e.preventDefault(); outm.textContent = ' — спрашиваю Google…';\r
      try {\r
        const r = await (await api('/gemini/models')).json();\r
        if (!r.ok) { outm.innerHTML = ' — <span style="color:var(--warn)">' + esc(r.err || 'не вышло') + '</span>'; return; }\r
        dl.innerHTML = (r.models || []).map(m => '<option value="' + esc(m) + '">').join('');\r
        outm.innerHTML = ' — доступно ' + (r.models || []).length\r
          + '; щёлкните по полю, чтобы выбрать. Если выбранная занята, спросим по очереди: '\r
          + esc((r.chain || []).join(' → '));\r
      } catch (err) { outm.textContent = ' — не вышло: ' + err.message; }\r
    };\r
  }\r
  const save = host.querySelector('#gsave'), out = host.querySelector('#gout'), warn = host.querySelector('#gwarn');\r
  const showWarn = t=>{ if(t){ warn.textContent=t; warn.hidden=false; } else warn.hidden=true; };\r
  // В снимке спрашивать некого: Google денег стоит, а ключа тут нет и быть не\r
  // должно. Кнопки только ПЕРЕКЛЮЧАЮТ уже сохранённые разборы.\r
  if(SNAP){\r
    host.querySelectorAll('.gaskbar button').forEach(b=>b.onclick=()=>{\r
      host.querySelectorAll('.gaskbar button').forEach(x=>x.classList.add('sec'));\r
      b.classList.remove('sec');\r
      if(!showSaved(b.dataset.kind)){\r
        out.textContent='Этот разбор не сохранён в снимке.'; out.classList.add('muted'); showWarn('');\r
      }\r
    });\r
    return;\r
  }\r
  // Скрытые точки — маркер «ключ уже задан». Пока пользователь их не тронул,\r
  // на сервер поле не отправляем: перезатирать сохранённый ключ пустотой нельзя.\r
  save.onclick = async ()=>{\r
    const patch = {};\r
    const k = key.value.trim();\r
    if (k && !/^•+$/.test(k)) patch.geminiKey = k;\r
    patch.geminiModel = model.value.trim();\r
    const bw = host.querySelector('#bwin');\r
    if (bw) patch.browserWindows = +bw.value || 2;\r
    // Галочка «показывать модели фрагмент текста». Отправляем ВСЕГДА, в том\r
    // числе снятую: это переключатель приватности, и «не трогали» здесь должно\r
    // означать «оставить как было», а не «включить обратно».\r
    const gs = host.querySelector('#gsnip');\r
    if (gs) patch.geminiSnippets = !!gs.checked;\r
    save.disabled=true;\r
    try{\r
      const r = await (await api('/settings',{method:'POST',body:JSON.stringify(patch)})).json();\r
      if(r.ok){ showWarn(''); setStatus('Настройки сохранены.'); if(patch.geminiKey) key.value='••••••••••••••••••••••••'; }\r
      else showWarn('Не удалось сохранить: '+(r.error||''));\r
    }catch(e){ showWarn('Ошибка: '+e.message); }\r
    finally{ save.disabled=false; }\r
  };\r
  // ВЫБРАННЫЙ ВИД И ЗАПРЕТ ПО ЧАСТОТЕ.\r
  //\r
  // Правило кабинета теперь такое: щелчок по виду ПОКАЗЫВАЕТ уже сохранённый\r
  // разбор (бесплатно), а «Спросить Gemini» — единственное, что тратит квоту.\r
  // До 18 сентября 2026 каждый щелчок по виду ходил в Google: пользователь\r
  // получал ответ, переключался на другой вид и терял первый — хотя тот лежал\r
  // сохранённым в проекте. Выглядело это как «данные не сохраняются».\r
  let curKind = 'review';\r
  const askBtn = host.querySelector('#gask'), askHint = host.querySelector('#gaskhint');\r
  // Проверка релевантности подчиняется суточному правилу. Гасим тут только\r
  // «Спросить»: СМОТРЕТЬ сохранённое можно всегда — это не стоит ничего.\r
  // Настоящий запрет стоит на сервере (run-rate.js), и это не то же самое.\r
  const perDay = runsPerDayUi((proj && proj.schedule) || {});\r
  const verifyBlocked = perDay > 1\r
    ? 'Прогоны идут ' + perDay + ' раз(а) в сутки. Проверка релевантности смотрит каждый материал окна — '\r
      + 'на таком шаге это прямой расход квоты Google. Поставьте расписание «каждый день» или реже.'\r
    : '';\r
  const pickKind = kind => {\r
    curKind = kind;\r
    host.querySelectorAll('.gaskbar button[data-kind]').forEach(x=>x.classList.toggle('sec', x.dataset.kind!==kind));\r
    const has = showSaved(kind);\r
    if(!has){\r
      out.textContent = 'Этот разбор ещё не запрашивали. Нажмите «Спросить Gemini» — ответ сохранится в проекте.';\r
      out.classList.add('muted'); showWarn('');\r
    }\r
    const off = kind==='verify' && verifyBlocked;\r
    askBtn.disabled = !!off;\r
    askBtn.textContent = has ? '✨ Спросить заново' : '✨ Спросить Gemini';\r
    askHint.textContent = off ? '🎯 ' + verifyBlocked\r
      : has ? 'Показан сохранённый ответ — это бесплатно. «Спросить заново» потратит квоту Google.'\r
      : '';\r
  };\r
  const ask = async ()=>{\r
    const kind = curKind;\r
    const labels = { review:L('Пишу расширенный обзор','Writing the extended review'), sentiment:'Считаю тональность', verify:'Проверяю релевантность' };\r
    // У тональности и проверки ожидание другое: они идут по всему окну и уходят\r
    // пачками по 60 материалов — на большой ленте это несколько запросов\r
    // подряд. Обещать «10–30 сек» там значит заставить человека решить, что\r
    // программа зависла.\r
    const wait = (kind==='sentiment'||kind==='verify')\r
      ? (o.items>60 ? '… (по всей ленте, пачками — ход виден в журнале ниже)' : '… (10–30 сек)')\r
      : kind==='review' ? L('… (обычно 1–3 минуты: это длинный текст)','… (usually 1–3 minutes: it is a long text)') : '… (10–30 сек)';\r
    out.textContent=labels[kind]+wait; out.classList.add('muted'); showWarn('');\r
    host.querySelectorAll('.gaskbar button').forEach(b=>b.disabled=true);\r
    const glog = host.querySelector('#glog');\r
    glog.innerHTML = aiLogHtml([], { live: true });\r
    // Пока ждём — спрашиваем программу о ходе разбора и рисуем журнал по мере\r
    // прихода ответов. Иначе минута ожидания выглядит как «ничего не\r
    // происходит» (жалоба 13 октября 2026).\r
    const t0 = Date.now();\r
    let polling = true;\r
    const poll = async ()=>{\r
      while(polling){\r
        await new Promise(res=>setTimeout(res, 1500));\r
        if(!polling || !host.isConnected) break;\r
        try{\r
          const pr = await (await api('/projects/'+id+'/ai-progress')).json();\r
          if(polling && pr && pr.kind===kind && pr.at >= t0 - 5000){\r
            glog.innerHTML = aiLogHtml(pr.log, { live: true,\r
              note: pr.asked ? L('Размечено пока '+pr.marked+' из '+pr.asked+' неоценённых.','Marked so far: '+pr.marked+' of '+pr.asked+' unrated.') : '' });\r
          }\r
        }catch(e){}\r
      }\r
    };\r
    poll();\r
    try{\r
      const r = await (await api('/projects/'+id+'/gemini',{method:'POST',body:JSON.stringify({ days: win==='all'? null : +win, kind })})).json();\r
      polling = false;\r
      glog.innerHTML = aiLogHtml(r.log, { note: r.ok ? (r.note||'') : (r.err||r.error||'') });\r
      if(r.ok){\r
        paintAnswer(out, kind, r.text, r.items, o.items); out.classList.remove('muted');\r
        showWarn((r.model?('модель: '+r.model):'') + (r.truncated?' · ответ обрезан по лимиту — часть текста не поместилась':''));\r
        // Кладём ответ в ТУ ЖЕ корзину, откуда читает showSaved: иначе\r
        // переключение на соседний вид и обратно снова показало бы «ещё не\r
        // запрашивали», хотя на сервере ответ уже сохранён.\r
        saved[kind] = { at: Date.now(), text: r.text, items: r.items, model: r.model||'', err: '', auto: false,\r
          log: r.log||[], note: r.note||'',\r
          window: (a.overview.windowFrom||'') + ' … ' + (a.overview.windowTo||'') };\r
        askBtn.textContent = '✨ Спросить заново';\r
        askHint.textContent = 'Ответ сохранён в проекте: переключитесь на другой вид и вернитесь — он останется здесь.';\r
      }\r
      else { out.textContent=r.err||r.error||'не получилось'; out.classList.add('muted'); }\r
    }catch(e){ out.textContent='Ошибка запроса: '+(e&&e.message||e); }\r
    finally{\r
      polling = false;\r
      host.querySelectorAll('.gaskbar button').forEach(b=>{ b.disabled=false; });\r
      if(curKind==='verify' && verifyBlocked) askBtn.disabled = true;\r
    }\r
  };\r
  host.querySelectorAll('.gaskbar button[data-kind]').forEach(b=>{ b.onclick=()=>pickKind(b.dataset.kind); });\r
  askBtn.onclick = ask;\r
  // Открываем на самом свежем из сохранённых — или на «разборе», если разборов\r
  // ещё не было вовсе.\r
  {\r
    // Только виды, у которых есть кнопка: в проекте может лежать отчёт снятого\r
    // «Разбора» (summary), и открыть панель на нём значило бы показать текст\r
    // без кнопки, на которую можно вернуться.\r
    const kinds = Object.keys(saved).filter(k=>saved[k] && saved[k].at && host.querySelector(\`.gaskbar button[data-kind="\${k}"]\`));\r
    pickKind(kinds.length ? kinds.sort((x,y)=>saved[y].at-saved[x].at)[0] : 'review');\r
  }\r
}\r
\r
let LANG = 'ru';\r
// ---- ЯЗЫК КАБИНЕТА (22 сентября 2026) ----\r
//\r
// Просьба пользователя: «сделай английскую версию кабинета (переключатель\r
// ru/en) — если вдруг буду кидать программу на международные площадки».\r
//\r
// КАК ЭТО УСТРОЕНО И ПОЧЕМУ ИМЕННО ТАК.\r
//\r
// Обычный путь — завести на каждую надпись ключ (\`t('settings.title')\`) и\r
// переписать под него все двести с лишним мест в разметке. Здесь это было бы\r
// правкой ради правки: ключи пришлось бы придумывать, расставлять и потом\r
// сверять с текстом, а любая опечатка давала бы пустое место в кабинете, и\r
// заметил бы её человек, а не я.\r
//\r
// Поэтому ключ — САМА РУССКАЯ СТРОКА, а перевод применяется к уже готовой\r
// странице: обходим текстовые узлы и подписи полей и подменяем те, что\r
// СОВПАДАЮТ С КЛЮЧОМ ЦЕЛИКОМ. Отсюда два следствия, и оба важны:\r
//\r
//   * русский кабинет работает ровно как раньше — при LANG='ru' не делается\r
//     вообще ничего, ни одной лишней операции;\r
//   * перевода нет — значит остаётся русский текст. Это честный запасной\r
//     вариант: пропущенную строку человек прочитает по-русски, а не увидит\r
//     пустоту или «settings.title».\r
//\r
// СОВПАДЕНИЕ ТОЛЬКО ЦЕЛИКОМ — это главный предохранитель, а не придирка.\r
// Подменяй мы куски текста, перевод залез бы в ДАННЫЕ: в заголовки статей, в\r
// имена изданий, в заметки движка. Материал «Токаев провёл совещание» — это\r
// результат работы, и трогать его нельзя ни на каком языке.\r
//\r
// ЧЕГО ЭТОТ ПЕРЕВОД НЕ ДЕЛАЕТ, и это сказано в самом кабинете: заметки движка\r
// в логе прогона («кандидатов 231, совпало 6») остаются русскими. Их пишет\r
// движок десятками мест с подстановками, и переводить их — отдельная работа\r
// такого же размера; выдавать её за сделанную было бы враньём.\r
const DICT = {\r
  "Кабинет": "Projects",\r
  "← Кабинет": "← Projects",\r
  "+ Новый проект": "+ New project",\r
  "+ Создать первый проект": "+ Create your first project",\r
  "Пока нет ни одного проекта": "No projects yet",\r
  "Проект — это один цикл мониторинга: свой список источников, своё слово, свой период и своё расписание. По разным темам заводят разные проекты, чтобы выдача не смешивалась.": "A project is one monitoring cycle: its own list of sources, its own search term, its own period and its own schedule. Use separate projects for separate topics so the results don't mix.",\r
  "материалов": "items",\r
  "прогонов": "runs",\r
  "в последнем": "in the last run",\r
  "вручную": "manual",\r
  "не запускался": "never run",\r
  "В кабинет — ко всем проектам": "Projects — all your monitoring",\r
  "Сменить тему": "Switch theme",\r
  "Включить светлую тему": "Switch to light theme",\r
  "Включить тёмную тему": "Switch to dark theme",\r
  "Собрать сейчас": "Collect now",\r
  "Удалить": "Delete",\r
  "Остановить": "Stop",\r
  "Останавливаю…": "Stopping…",\r
  "Остановить сбор": "Stop the collection",\r
  "⏹ останавливаю…": "⏹ stopping…",\r
  "по расписанию": "on schedule",\r
  "найдено \\u0001": "found \\u0001",\r
  "\\u0001 из \\u0001": "\\u0001 of \\u0001",\r
  "источников \\u0001": "\\u0001 sources",\r
  "Идёт сбор — ход виден в шапке.": "Collecting — progress is shown in the top bar.",\r
  "Сбор закончен.": "Collection finished.",\r
  "⚙️ Настройки проекта": "⚙️ Project settings",\r
  "Название проекта": "Project name",\r
  "Что ищем — запрос": "What to look for",\r
  "Минус-слова — с ними материал в выдачу не попадёт": "Exclude words — items containing them are dropped",\r
  "Запятая — это": "A comma means",\r
  "ИЛИ": "OR",\r
  "И": "AND",\r
  ": «Тоқаев, Токаев» найдёт оба написания. Пробел —": ": “Tokayev, Toqayev” finds both spellings. A space means",\r
  ": оба слова должны быть в материале.\\n        Кавычки — точная фраза. На казахоязычных сайтах пишут через «қ», поэтому оба написания стоит указывать всегда.": ": both words must appear in the item.\\n        Quotes mean an exact phrase. Kazakh-language outlets spell the name with “қ”, so it is worth listing both spellings every time.",\r
  "учитывать окончания слов (Токаева, Токаеву…)": "match word endings (Tokayev's, Tokayevu…)",\r
  "Сохранить настройки": "Save settings",\r
  "📰 Ресурсы: сайты и телеграм-каналы": "📰 Sources: news sites and Telegram channels",\r
  "Отметьте галочками готовый список или впишите свои строкой. Телеграм-каналы читаются": "Tick the ready-made list or type your own, one per line. Telegram channels are read",\r
  "без браузера": "without a browser",\r
  "— это самая быстрая часть прогона.": "— that is the fastest part of a run.",\r
  "Сайты": "Sites",\r
  "Мировые СМИ (запрос пишите по-английски: Tokayev)": "World media (write the query in English: Tokayev)",\r
  "Телеграм-каналы (читаются без браузера)": "Telegram channels (read without a browser)",\r
  "· выбрано \\u0001 из \\u0001": "· \\u0001 of \\u0001 selected",\r
  "Отметить все": "Select all",\r
  "Снять все": "Clear all",\r
  "Выбрать все": "Select all",\r
  "отмечено: \\u0001": "selected: \\u0001",\r
  "Все источники проекта — по одному в строке:": "All sources of the project, one per line:",\r
  "сайт.kz": "site.com",\r
  "@канал": "@channel",\r
  "👤 Фейсбук — профили людей": "👤 Facebook — people's profiles",\r
  "Программа открывает профиль в": "The program opens the profile in",\r
  "своём окне браузера": "its own browser window",\r
  ": нажмите «Войти в соцсети» один раз,\\n              и сессия сохранится. Смотрим только свежее и заходим на профиль несколько раз в сутки — иначе Фейсбук\\n              встретит проверкой личности. Репосты тоже берём и помечаем, откуда они.": ": click “Sign in to social networks” once and the session is kept. We only look at recent posts and visit a profile a few times a day — otherwise Facebook asks you to confirm your identity. Reposts are collected too, and marked with their origin.",\r
  "По ссылке в строке: facebook.com/имя или facebook.com/profile.php?id=…": "One link per line: facebook.com/name or facebook.com/profile.php?id=…",\r
  "Войти в соцсети": "Sign in to social networks",\r
  "Не чаще скольких заходов в сутки на профиль": "Visits per profile per day, at most",\r
  "За сколько суток смотреть": "How many days back to look",\r
  "Сколько заходов осталось": "Visits left today",\r
  "1 сут.": "1 day",\r
  "2 сут.": "2 days",\r
  "3 сут.": "3 days",\r
  "▶️ Поиск в YouTube": "▶️ YouTube search",\r
  "Ищет видео по тому же запросу. Дату публикации берём со страницы самого видео, а не со слов\\n              «2 недели назад» — иначе в выдачу попадает то, что вне периода.": "Searches videos for the same term. The publication date is read from the video's own page, not from the words “2 weeks ago” — otherwise items outside the period slip into the results.",\r
  "искать в YouTube": "search YouTube",\r
  "Грубое сито YouTube (точный отбор всё равно наш)": "YouTube's own coarse filter (the exact selection is still ours)",\r
  "за сегодня": "today",\r
  "за неделю": "this week",\r
  "за месяц": "this month",\r
  "за год": "this year",\r
  "за час": "this hour",\r
  "за 7 дней": "last 7 days",\r
  "📅 Период — за какие даты искать": "📅 Period — which dates to search",\r
  "📅 Фиксированный (с … по …)": "📅 Fixed (from … to …)",\r
  "🔄 Ежедневный мониторинг (последние N дней)": "🔄 Daily monitoring (last N days)",\r
  "📈 От даты и до сегодня": "📈 From a date up to today",\r
  "С даты": "From",\r
  "По дату": "To",\r
  "сколько дней назад смотреть": "how many days back",\r
  "⚠️ Даты не заполнены — прогон возьмёт": "⚠️ Dates are empty — the run will take",\r
  "ВСЁ ВРЕМЯ": "ALL TIME",\r
  ", включая материалы прошлых лет. Впишите даты или выберите «Ежедневный».": ", including items from past years. Fill in the dates or choose “Daily monitoring”.",\r
  "⏰ Частота прогонов": "⏰ How often to collect",\r
  "Прогон идёт, только когда программа открыта. Спящий компьютер прогон не запустит —\\n              но пропущенный догонит, как только машину разбудят.": "A run happens only while the program is running. A sleeping computer will not start one — but it catches up on the missed run as soon as the machine wakes.",\r
  "вручную — по кнопке «Собрать сейчас»": "manually — with the “Collect now” button",\r
  "каждый день": "every day",\r
  "каждые N часов": "every N hours",\r
  "каждые N минут (от 10)": "every N minutes (10 at least)",\r
  "каждые N минут (частый мониторинг)": "every N minutes (frequent monitoring)",\r
  "в котором часу (0–23)": "at what hour (0–23)",\r
  "Срок считается от НАЧАЛА прошлого прогона: уложился в интервал — следующий пойдёт по расписанию, не уложился —\\n              начнётся сразу, как закончится текущий. Двух прогонов разом не бывает. Но если прогон длиннее интервала,\\n              компьютер будет занят почти непрерывно.": "The interval counts from the START of the previous run: if it fits, the next run goes on schedule; if it does not, the next one starts as soon as the current finishes. Two runs never overlap. But if a run is longer than the interval, the computer stays busy almost all the time.",\r
  "✨ Работа с ИИ": "✨ AI assistance",\r
  "ИИ помогает читать уже собранное: он": "AI helps you read what has already been collected: it",\r
  "не ищет": "does not search",\r
  "материалы и": "for items and",\r
  "не решает": "does not decide",\r
  ", какие даты верные, —\\n              это делает движок, детерминированно. Каждый вид разбора — отдельный запрос к Google и расход квоты.": " which dates are right — the engine does that, deterministically. Each kind of analysis is a separate request to Google and spends your quota.",\r
  "спрашивать Gemini после каждого прогона": "ask Gemini after every run",\r
  "😊 Тональность": "😊 Sentiment",\r
  "🎯 Проверка релевантности": "🎯 Relevance check",\r
  "Тональность": "Sentiment",\r
  "Релевантность": "Relevance",\r
  "Знак по каждому материалу окна: выигрышно, нейтрально или невыгодно для объекта.": "A verdict for every item in the window: favourable, neutral or unfavourable for the subject.",\r
  "Отсекает однофамильцев и случайные совпадения слова: по каждому материалу —\\n                    «про объект» / «не про объект» / «не понять».": "Filters out namesakes and accidental word matches: for every item — “about the subject” / “not about the subject” / “cannot tell”.",\r
  "Ничего не удаляет": "Nothing is deleted",\r
  "— только помечает, решаете вы.": "— items are only marked; you decide.",\r
  "Расход:": "Cost:",\r
  "от \\u0001 запрос(ов) за прогон": "from \\u0001 request(s) per run",\r
  ". Расписание выключено, значит только при нажатии «Собрать сейчас».": ". The schedule is off, so this happens only when you press “Collect now”.",\r
  "Проверка релевантности недоступна": "The relevance check is not available",\r
  "при таком расписании: прогонов \\u0001 в сутки, а она смотрит каждый материал окна — это прямой расход квоты Google. Выберите «каждый день» или реже. Вручную, кнопкой во вкладке «Аналитика», её тоже можно запустить — но только при том же условии.": "with this schedule: \\u0001 runs a day, and it looks at every item in the window — that spends your Google quota directly. Choose “every day” or less often. You can also run it by hand from the Analytics tab, but only under the same condition.",\r
  "🔒 не отправлять данные проекта во внешний контур": "🔒 do not send this project's data outside",\r
  "Для заказов, где собранное нельзя показывать никому. Запрет стоит на сервере, а не в кабинете.": "For assignments where the collected material may not be shown to anyone. The restriction lives on the server, not in the interface.",\r
  "Закрыто: Gemini (расширенный обзор, тональность, проверка релевантности), телеграм-бот проекта, внешний поиск DuckDuckGo/Bing.": "Blocked: Gemini (extended review, sentiment, relevance check), the project's Telegram bot, external search via DuckDuckGo/Bing.",\r
  "Уходит наружу всё равно:": "Still leaves your computer:",\r
  "ключевое слово — в поисковые формы самих отслеживаемых сайтов (без этого поиска по сайту не будет); YouTube — это запрос к Google": "the search term goes into the search forms of the monitored sites themselves (without that there is no site search at all); YouTube is a request to Google",\r
  "🤖 Рассылка в телеграм-бот": "🤖 Telegram bot delivery",\r
  "Бот присылает ссылки прямо во время прогона, по мере находок. Как завести:": "The bot sends links during the run, as items are found. How to set it up:",\r
  "напишите": "message",\r
  "команду": "with the command",\r
  "— он выдаст токен вида": "— it will give you a token like",\r
  "вставьте токен сюда и нажмите «Проверить»;": "paste the token here and press “Check”;",\r
  "откройте своего бота, нажмите": "open your bot, press",\r
  "и отправьте ему в личку команду": "and send it, in a private chat, the command",\r
  "с кодом ниже — так вы станете владельцем.\\n              Бот закрытый: пишет и отвечает только владельцу и в общих чатах, где владелец состоит. Посторонний, нашедший бота, получит в ответ «бот закрыт». Отписка — команда": "with the code below — that makes you the owner.\\n              The bot is private: it writes and replies only to the owner and in groups the owner belongs to. A stranger who finds the bot gets “this bot is closed”. To unsubscribe, use the command",\r
  ".\\n              Токен хранится только на этом компьютере и наружу не отдаётся.": ".\\n              The token is kept on this computer only and is never handed out.",\r
  "Токен бота": "Bot token",\r
  "токен не задан": "no token set",\r
  "Проверить": "Check",\r
  "Сохранить бота": "Save bot",\r
  "Убрать бота": "Remove bot",\r
  "присылать новые материалы в бот": "send new items to the bot",\r
  "Прислать последний прогон": "Send the last run",\r
  "💾 Память и место на диске": "💾 Storage and disk space",\r
  "Всё хранится": "Everything is kept",\r
  "только на этом компьютере": "on this computer only",\r
  ", в папке профиля — ни в каком облаке.\\n              Растут две вещи: лента материалов (её мы не трогаем — это результат) и архивы прогонов\\n              (по ним строятся CSV прогона и диагностика). Поставьте предел — программа сама удалит": ", in your profile folder — not in any cloud.\\n              Two things grow: the feed of items (we never touch it — that is your result) and the run archives\\n              (the per-run CSV and diagnostics are built from them). Set a limit and the program will delete",\r
  "самые старые архивы": "the oldest archives",\r
  ", когда он будет превышен. Последние 30 прогонов не удаляются никогда.": " when it is exceeded. The last 30 runs are never deleted.",\r
  "Предел места на проект": "Disk limit per project",\r
  "без ограничения": "no limit",\r
  "200 МБ": "200 MB",\r
  "500 МБ": "500 MB",\r
  "1 ГБ": "1 GB",\r
  "2 ГБ": "2 GB",\r
  "5 ГБ": "5 GB",\r
  "занято": "used",\r
  "· лента \\u0001 КБ · архивы прогонов \\u0001 КБ (\\u0001 шт.). Предел не задан: архивы копятся, пока есть место на диске.": "· feed \\u0001 KB · run archives \\u0001 KB (\\u0001 files). No limit set: archives pile up while there is free disk space.",\r
  "🪟 Окон браузера:": "🪟 Browser windows:",\r
  "Браузер — самая медленная часть прогона. Два окна делят это время примерно\\n          пополам, но и памяти просят вдвое. Если компьютер начнёт подтормаживать — верните одно.": "The browser is the slowest part of a run. Two windows roughly halve that time, but use twice the memory. If the computer starts lagging, go back to one.",\r
  "Прогоны": "Runs",\r
  "Аналитика": "Analytics",\r
  "Как прошёл сбор": "How the collection went",\r
  "Просмотрено источников:": "Sources checked:",\r
  "· дали материал:": "· found something:",\r
  "· материалов по теме не нашлось у": "· nothing on the topic at",\r
  "· заняло": "· took",\r
  "Период: окно \\u0001 сут.": "Period: a \\u0001 day window",\r
  "окно \\u0001 сут.": "a \\u0001 day window",\r
  "Последние 10": "Last 10",\r
  "день:": "date:",\r
  "Прогон": "Run",\r
  "Найдено": "Found",\r
  "Новых": "New",\r
  "Длит.": "Time",\r
  "Браузер": "Browser",\r
  "Скачать CSV прогона": "Download run CSV",\r
  "Скачать лог прогона": "Download run log",\r
  "Те же логи программа сама складывает в папку": "The program also keeps these logs in the folder",\r
  "— маленькие файлы, без результатов. Если что-то пошло не так, оттуда лог можно взять даже назавтра и прислать на разбор.": "— small files, without results. If something went wrong, you can take the log from there even the next day and send it for analysis.",\r
  "⚙️ Подробности по каждому источнику — техническая часть": "⚙️ Per-source detail — the technical part",\r
  "Это рабочая кухня движка: какими путями он шёл по каждому источнику и почему получилось столько. Читать её каждый раз не нужно — она пригодится, если что-то выглядит странно. Значок 🔍 у источника открывает разбор по каждой ссылке.": "This is the engine's kitchen: which routes it took for each source and why the count came out as it did. You do not need to read it every time — it helps when something looks odd. The 🔍 icon next to a source opens a link-by-link breakdown.",\r
  "Источник": "Source",\r
  "Каналы": "Channels",\r
  "Заметки": "Notes",\r
  "Заголовок": "Title",\r
  "Дата": "Date",\r
  "Нашёл": "Found by",\r
  "Время": "Time",\r
  "Результаты (\\u0001)": "Results (\\u0001)",\r
  "Диагностика: почему столько (или ноль)": "Diagnostics: why this many (or none)",\r
  "Отчёт для заказчика переехал во вкладку «Аналитика»: он считается по периоду, а не по одной ходке.": "The client report has moved to the Analytics tab: it is built for the whole period, not for a single run.",\r
  "Удаление насовсем: материал исчезнет из ленты, из архивов прогонов и из выгрузок, а цифры дашборда пересчитаются. Следующий прогон его не вернёт.": "Permanent deletion: the item disappears from the feed, from the run archives and from exports, and the dashboard figures are recalculated. The next run will not bring it back.",\r
  "🗑 Удалить отмеченные": "🗑 Delete selected",\r
  "Медиа-аналитика": "Media analytics",\r
  "что и где написали за период": "what was published and where, over the period",\r
  "Техническое здоровье": "Technical health",\r
  "как работает движок и что кормит": "how the engine works and what feeds it",\r
  "ИИ-Аналитика": "AI analysis",\r
  "разбор от Gemini — платится Google-квотой": "analysis by Gemini — paid for with your Google quota",\r
  "вся история": "all time",\r
  "30 дней": "30 days",\r
  "7 дней": "7 days",\r
  "окно:": "window:",\r
  "📋 Отчёт для заказчика": "📋 Client report",\r
  "Готовый текст для заказчика: охват, период, результат и методика — по ЭТОМУ окну аналитики.": "Ready-made text for a client: coverage, period, result and method — for THIS analytics window.",\r
  "📤 Файл для показа": "📤 Shareable file",\r
  "Один HTML-файл со снимком дашборда: можно послать людям или выложить в интернет. Ни ключей, ни кнопок изменения в нём нет.": "A single HTML file with a snapshot of the dashboard: you can send it to people or publish it. It contains no keys and no buttons that change anything.",\r
  "«Файл для показа» — снимок этого дашборда одной страницей. Работает без программы и без интернета; смотреть можно, менять нечего.": "“Shareable file” is a one-page snapshot of this dashboard. It works without the program and without internet; it can be viewed, but nothing can be changed.",\r
  "публикаций всего ·": "items in total ·",\r
  "на сайтах СМИ": "on news sites",\r
  "в Telegram": "in Telegram",\r
  "в YouTube": "in YouTube",\r
  "источников дали материал": "sources produced items",\r
  "📈 Динамика упоминаний": "📈 Mentions over time",\r
  "по календарному дню публикации; пики — инфоповоды. Наведите курсор на день — покажу число, щёлкните — покажу сами материалы.": "by calendar day of publication; peaks are news events. Hover over a day to see the number, click it to see the articles.",\r
  "🥧 Доля платформ": "🥧 Share by platform",\r
  "откуда прилетел материал: сайт СМИ, Телеграм или YouTube.": "where the item came from: a news site, Telegram or YouTube.",\r
  "🌐 Топ-10 сайтов СМИ": "🌐 Top 10 news sites",\r
  "самые активные веб-издания.": "the most active web outlets.",\r
  "💬 Топ-10 каналов": "💬 Top 10 channels",\r
  "телеграм-каналы и youtube-выдача.": "Telegram channels and YouTube results.",\r
  "🕐 Ритм публикаций": "🕐 Publishing rhythm",\r
  "день недели × час, по местному времени.": "day of week × hour, in local time.",\r
  "📰 Лента свежих": "📰 Latest items",\r
  "последние 25 материалов в этом окне.": "the 25 most recent items in this window.",\r
  "🎯 Эффективность каналов сбора": "🎯 Collection channel efficiency",\r
  "кто нашёл материал ПЕРВЫМ. По этому же полю учится память каналов.": "which channel found the item FIRST. The channel memory learns from this same field.",\r
  "🔍 Глубина совпадения": "🔍 Depth of the match",\r
  "где именно нашлось слово. Сумма равна числу публикаций: заголовок — целевое, тело — проходящее, пост и видео — соцсети.": "where exactly the term was found. The total equals the number of items: title means the piece is about it, body means a passing mention, post and video are social media.",\r
  "Заголовок статьи": "Article title",\r
  "Тело статьи": "Article body",\r
  "🔇 Молчащие источники": "🔇 Silent sources",\r
  "отмечено источников — \\u0001, дали материал —": "\\u0001 sources are monitored, of which",\r
  ", молчат —": "produced items; silent —",\r
  ". Либо про тему там не писали, либо к источнику не достучались — смотрите 🔍 в логе прогона.": ". Either nothing was published on the topic, or we could not reach the source — check 🔍 in the run log.",\r
  "все источники дали материал в этом окне.": "every source produced something in this window.",\r
  "📊 Динамика прогонов": "📊 Runs over time",\r
  "объём каждого прогона (материалов).": "size of each run (items).",\r
  "обычный прогон": "typical run",\r
  "доля браузера": "browser share",\r
  "находок": "found",\r
  "без ссылок": "without links",\r
  "🔑 Google AI Studio API-ключ (AIza...)": "🔑 Google AI Studio API key (AIza...)",\r
  "Сохранить": "Save",\r
  "Поле модели можно не трогать.": "You can leave the model field alone.",\r
  "Какие модели доступны?": "Which models are available?",\r
  "📄 показывать модели фрагмент текста": "📄 show the model a text excerpt",\r
  "Точнее оценка тона: по одному заголовку «провёл совещание» — всегда нейтрал,\\n          каким бы ни было совещание. Вместе с заголовком уедет фрагмент статьи (~150 знаков вокруг ключевого слова) — тот же,\\n          что в столбце CSV. Ссылки не уходят и здесь. Число запросов к Google не меняется.": "This makes the tone reading more accurate: judged by the headline alone, “held a meeting” is always neutral, whatever the meeting was about. A ~150-character excerpt around the search term travels along with the headline — the same one as in the CSV column. Links are still not sent. The number of requests to Google does not change.",\r
  "✨ Спросить Gemini": "✨ Ask Gemini",\r
  "Спросить заново": "Ask again",\r
  "Этот разбор ещё не запрашивали. Нажмите «Спросить Gemini» — ответ сохранится в проекте.": "This analysis has not been requested yet. Press “Ask Gemini” — the answer will be saved in the project.",\r
  "Показан сохранённый ответ — это бесплатно. «Спросить заново» потратит квоту Google.": "Showing the saved answer — that is free. “Ask again” will spend your Google quota.",\r
  "версия \\u0001 · обновлений нет ·": "version \\u0001 · no updates ·",\r
  "проверить сейчас": "check now",\r
  "пробный период · осталось \\u0001 дней ·": "trial period · \\u0001 days left ·",\r
  "ввести ключ": "enter a key",\r
  "Отправьте разработчику номер этого компьютера:": "Send the developer this computer's number:",\r
  "Ключ работает только на том компьютере, чей номер вы прислали.": "The key works only on the computer whose number you sent.",\r
  "Полученный ключ вставьте сюда — он начинается с MC1.": "Paste the key you receive here — it starts with MC1.",\r
  "Скопировать номер": "Copy the number",\r
  "Скопировано": "Copied",\r
  "Выделено — нажмите Ctrl+C": "Selected — press Ctrl+C",\r
  "Сохранить ключ": "Save key",\r
  "Ключ принят.": "Key accepted.",\r
  "Ключ не принят.": "Key not accepted.",\r
  "Шаг 1.": "Step 1.",\r
  "Шаг 2.": "Step 2.",\r
  // Причину отказа пишет сервер и по-русски (как и заметки движка) — переводим\r
  // подводку, чтобы английский кабинет не начинал фразу русским словом.\r
  "Сбор не начался: ": "Collection did not start: ",\r
  "механизмы: встроенные ·": "engine: built in ·",\r
  "проверить механизмы": "check the engine",\r
  "Загрузка…": "Loading…",\r
  "почему ноль: сайт доступен, статьи прочитаны": "why zero: the site is reachable and its articles were read",\r
  "ключевое слово — в поисковые формы самих отслеживаемых сайтов (без этого поиска по сайту не будет)": "the search term goes into the search forms of the monitored sites themselves (without that there is no site search at all)",\r
  "; YouTube — это запрос к Google": "; YouTube is a request to Google",\r
  "· найдено \\u0001 · новых \\u0001": "· found \\u0001 · new \\u0001",\r
  "· найдено \\u0001": "· found \\u0001",\r
  "Результаты (\\u0001)": "Results (\\u0001)",\r
  "· выбрано \\u0001 из \\u0001": "· \\u0001 of \\u0001 selected",\r
  "sitemap-глубина": "sitemap depth",\r
  "поиск": "site search",\r
  "браузер-поиск": "browser search",\r
  "внешний": "external search",\r
  "лента": "feed",\r
  "телеграм": "telegram",\r
  "(период)": "(period)",\r
  "(время)": "(time)",\r
  "(память дат)": "(date memory)",\r
  "(ИИ)": "(AI)",\r
  "(фейсбук)": "(facebook)",\r
  "(проект)": "(project)",\r
  "(остановлен)": "(stopped)",\r
  "каждый день \\u0001:\\u0001": "every day at \\u0001:\\u0001",\r
  "каждые \\u0001 мин": "every \\u0001 min",\r
  "каждые \\u0001 ч": "every \\u0001 h",\r
  "🔄 последние \\u0001 дн.": "🔄 last \\u0001 days",\r
  "📈 с … и до сегодня": "📈 from … up to today",\r
  "⚠️ период не задан — берётся ВСЁ ВРЕМЯ": "⚠️ no period set — ALL TIME will be used",\r
  "📅 всё до …": "📅 everything up to …",\r
  "📅 с … и всё, что новее": "📅 from … onwards",\r
  "📅 период …—…": "📅 period …—…",\r
  "запрос:": "search:",\r
  "последние \\u0001 из \\u0001 прогонов — остальные по календарю →": "last \\u0001 of \\u0001 runs — the rest by date →",\r
  "занято": "used",\r
  "архивы прогонов": "run archives",\r
  "\\u0001 шт.": "\\u0001 files",\r
  "Предел \\u0001 МБ — это примерно \\u0001 прогонов такого же размера": "Limit \\u0001 MB — that is about \\u0001 runs of the same size",\r
  "сейчас в среднем": "currently averaging",\r
  "на прогон": "per run",\r
  "Предел не задан: архивы копятся, пока есть место на диске.": "No limit set: archives pile up while there is free disk space.",\r
  "источников:": "sources:",\r
  "t.me/канал": "t.me/channel",\r
  "сайт.kz": "site.com",\r
  "Первый раз?": "First time here?",\r
  "Прочитайте короткую инструкцию": "Read the short manual",\r
  "— три минуты.": "— three minutes.",\r
  "Инструкция": "Help",\r
  "Подсказки": "Hints",\r
  "Подсказки под полями": "Hints under the fields",\r
  "Скрыть подсказки под полями": "Hide the hints under the fields",\r
  "Показать подсказки под полями": "Show the hints under the fields",\r
  "Сохранить страницу в PDF": "Save this page as PDF",\r
  "Сохранить страницу в PDF (в окне печати выберите «Сохранить как PDF»)": "Save this page as PDF (in the print window choose “Save as PDF”)",\r
  "Сохранить страницу в PDF (в окне печати выберите «Сохранить как PDF»). Для короткого отчёта сперва выключите подсказки 💡": "Save this page as PDF (in the print window choose “Save as PDF”). For a short report, turn off the 💡 hints first"\r
};\r
\r
// Числа в строке заменяются на метку, чтобы «выбрано 2 из 42» и «выбрано 7 из\r
// 42» ловились ОДНИМ ключом. Без этого словарь пришлось бы писать под каждое\r
// возможное число, то есть не писать вовсе.\r
const NUMMARK = '\\u0001';\r
const numKey = s => s.replace(/\\d+/g, NUMMARK);\r
\r
function tr(s) {\r
  if (LANG === 'ru') return s;\r
  const raw = String(s);\r
  const key = raw.trim();\r
  if (!key) return s;\r
  const direct = DICT[key];\r
  if (direct != null) return raw.replace(key, direct);\r
  // Запасной ход: тот же ключ, но с числами-метками. Числа возвращаются на\r
  // места по порядку — в английской фразе они стоят там же по смыслу.\r
  const nk = numKey(key);\r
  const byNum = DICT[nk];\r
  if (byNum != null) {\r
    const nums = key.match(/\\d+/g) || [];\r
    let i = 0;\r
    return raw.replace(key, byNum.replace(new RegExp(NUMMARK, 'g'), () => nums[i++] ?? ''));\r
  }\r
  return s;\r
}\r
\r
// Перевод текста, который программа СОБИРАЕТ САМА (строка индикатора, дни\r
// недели на тепловой карте, сообщения о ходе). Там обход страницы не поможет:\r
// строка рождается в коде и склеивается с числами.\r
const T = s => tr(s);\r
\r
// Обход готовой страницы. Трогаем ТОЛЬКО текстовые узлы и подписи полей;\r
// значения полей ввода не трогаем никогда — это то, что человек набрал сам.\r
const TR_ATTRS = ['placeholder', 'title', 'aria-label'];\r
function applyLang(root) {\r
  if (LANG === 'ru' || !root) return;\r
  const nodes = [];\r
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {\r
    acceptNode: n => {\r
      const p = n.parentNode;\r
      // В теги скриптов и стилей лезть нельзя: там код, а не текст для\r
      // человека. Сами теги в комментарии не пишем: закрывающий тег скрипта\r
      // внутри кода оборвал бы страницу прямо здесь — мина дешёвая, но злая.\r
      if (p && (p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE')) return NodeFilter.FILTER_REJECT;\r
      return n.nodeValue && /\\S/.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;\r
    },\r
  });\r
  let n; while ((n = w.nextNode())) nodes.push(n);\r
  for (const t of nodes) { const v = tr(t.nodeValue); if (v !== t.nodeValue) t.nodeValue = v; }\r
  const els = root.nodeType === 1 ? [root, ...root.querySelectorAll('*')] : [...root.querySelectorAll('*')];\r
  for (const el of els) {\r
    for (const a of TR_ATTRS) {\r
      if (!el.getAttribute) continue;\r
      const v = el.getAttribute(a);\r
      if (v == null) continue;\r
      const nv = tr(v);\r
      if (nv !== v) el.setAttribute(a, nv);\r
    }\r
  }\r
}\r
\r
// Страница перерисовывается кусками (аналитика, вкладки, панель ИИ), и звать\r
// перевод из каждого места значит однажды забыть одно из них. Поэтому следим\r
// за появлением новых узлов. Наблюдаем childList: сам перевод меняет\r
// nodeValue, то есть characterData, — кольца не будет.\r
let langObs = null;\r
function startLangWatch() {\r
  if (langObs) langObs.disconnect();\r
  if (LANG === 'ru') { langObs = null; return; }\r
  langObs = new MutationObserver(ms => {\r
    for (const m of ms) for (const node of m.addedNodes) {\r
      if (node.nodeType === 1) applyLang(node);\r
      else if (node.nodeType === 3) { const v = tr(node.nodeValue); if (v !== node.nodeValue) node.nodeValue = v; }\r
    }\r
  });\r
  langObs.observe(document.body, { childList: true, subtree: true });\r
}\r
\r
function setLang(l, redraw) {\r
  LANG = (l === 'en') ? 'en' : 'ru';\r
  document.documentElement.lang = LANG;\r
  document.documentElement.dataset.lang = LANG;\r
  try { localStorage.setItem('mc_lang', LANG); } catch (e) {}\r
  const b = document.querySelector('#lang');\r
  // На кнопке — ЯЗЫК, НА КОТОРЫЙ переключит нажатие. Показывай она текущий,\r
  // человек гадал бы, это кнопка или надпись (тот же довод, что у тумблера темы).\r
  if (b) { b.textContent = LANG === 'en' ? 'RU' : 'EN'; b.title = LANG === 'en' ? 'Переключить на русский' : 'Switch to English'; }\r
  const pb = document.querySelector('#pdf');\r
  // Подсказки 💡 — это «как считается»; подписи у чисел понятны и без них.\r
  // Выключил подсказки — PDF выходит коротким отчётом для того, кто решает.\r
  if (pb) pb.title = LANG === 'en' ? 'Save this page as PDF (in the print window choose “Save as PDF”). For a short report, turn off the 💡 hints first' : 'Сохранить страницу в PDF (в окне печати выберите «Сохранить как PDF»). Для короткого отчёта сперва выключите подсказки 💡';\r
  startLangWatch();\r
  // Перерисовываем страницу целиком, как и при смене темы: половина надписей\r
  // живёт внутри уже нарисованных кусков, а возвращать русский текст обратным\r
  // словарём — значит завести второй словарь и вторую возможность ошибиться.\r
  if (redraw) route();\r
  applyLang(document.body);\r
}\r
\r
// ---- ИНСТРУКЦИЯ (22 сентября 2026) ----\r
//\r
// Просьба пользователя: «напиши инструкцию к пользованию (понятную, именно для\r
// юзера) на русском и английском. Полагаю, что инструкция должна висеть в самой\r
// программе. Подумай, как лучше её расположить, может, подсказки\r
// включенные/выключенные сделать?»\r
//\r
// РЕШЕНО ТАК: и то, и другое, потому что это РАЗНЫЕ вопросы.\r
//\r
//   * Подсказки в полях отвечают на вопрос «что делает ВОТ ЭТА настройка» —\r
//     их читают, когда уже что-то настраивают, и они обязаны стоять рядом с\r
//     полем, а не в отдельном документе. Выключатель для них нужен, потому что\r
//     человеку, который всё это уже знает, они мешают: кабинет из-за них вдвое\r
//     длиннее.\r
//   * Инструкция отвечает на вопрос «а как этим вообще пользоваться» — её\r
//     читают ОДИН раз, до первой настройки. В подсказках у поля такой ответ\r
//     не поместится.\r
//\r
// Текст НЕ переводится словарём, а написан ДВАЖДЫ. Словарь сверяет строки\r
// целиком, а тут абзацы: любая правка текста означала бы правку ключа, то есть\r
// перевод молча отваливался бы, и заметил бы это читатель, а не я.\r
//\r
// Инструкция — ОТДЕЛЬНАЯ СТРАНИЦА (#/help), а не окно поверх кабинета: её\r
// читают долго, в неё возвращаются, и адрес можно просто отправить коллеге.\r
function helpHtml() {\r
  return LANG === 'en' ? HELP_EN : HELP_RU;\r
}\r
\r
const HELP_RU = \`\r
<div class="card help">\r
  <h1>Как пользоваться mediachrome</h1>\r
  <p class="lead">Программа обходит новостные сайты, телеграм-каналы, YouTube и профили Фейсбука,\r
    ищет упоминания вашего слова за нужный период и отдаёт таблицу: дата, источник, заголовок,\r
    ссылка и кусочек текста вокруг слова. Всё работает на вашем компьютере.</p>\r
\r
  <h2>С чего начать</h2>\r
  <ol>\r
    <li><b>Создайте проект.</b> Проект — это одна тема наблюдения: свой список источников, своё\r
      слово, свой период. Для разных тем заводите разные проекты, иначе выдача смешается.</li>\r
    <li><b>Впишите, что ищем.</b> Поле «Что ищем — запрос». Например: <code>Тоқаев, Токаев</code>.</li>\r
    <li><b>Отметьте источники.</b> В новом проекте уже отмечен готовый список изданий — его\r
      достаточно для начала. Свои сайты и телеграм-каналы можно вписать строками ниже.</li>\r
    <li><b>Выберите период</b> и нажмите <b>«Собрать сейчас»</b>.</li>\r
  </ol>\r
  <p>Первый сбор самый долгий: программа впервые читает сайты. Дальше она помнит даты уже\r
    прочитанных статей и не качает их заново.</p>\r
\r
  <h2>Как писать запрос</h2>\r
  <ul>\r
    <li><b>Запятая — это ИЛИ.</b> <code>Тоқаев, Токаев</code> найдёт оба написания.\r
      На казахоязычных сайтах имя пишут через «қ», поэтому оба варианта стоит указывать всегда.</li>\r
    <li><b>Пробел — это И.</b> <code>Токаев визит</code> — оба слова должны быть в материале.</li>\r
    <li><b>Кавычки — точная фраза.</b> <code>"Казахстан темір жолы"</code>.</li>\r
    <li><b>Минус-слова</b> — материал с ними в выдачу не попадёт. Полезно, когда слово\r
      совпадает с чем-то посторонним.</li>\r
    <li><b>Окончания слов</b> — галочка «учитывать окончания»: «Токаева», «Токаеву» тоже найдутся.</li>\r
  </ul>\r
  <p class="warn">Однофамильцев программа не различает и не должна: она ищет слово, а не человека.\r
    Если в выдачу лезет чужой Бектенов — уточните запрос («Олжас Бектенов») либо включите\r
    ИИ-проверку релевантности, она такие материалы пометит.</p>\r
\r
  <h2>Период и расписание</h2>\r
  <ul>\r
    <li><b>Фиксированный</b> — «с 1 по 30 августа». Разовый сбор архива.</li>\r
    <li><b>Ежедневный мониторинг</b> — «последние N дней». Окно считается заново на каждый\r
      прогон. Это и есть настоящий мониторинг: поставьте его, если включаете расписание.</li>\r
    <li><b>От даты и до сегодня</b> — архив плюс всё новое.</li>\r
  </ul>\r
  <p>Расписание запускает сбор само. Важно знать: <b>спящий компьютер прогон не запустит</b> —\r
    но программа догонит пропущенное, как только машину разбудят.</p>\r
\r
  <h2>Пока идёт сбор</h2>\r
  <p>В верхней строке появляется зелёный индикатор: какой проект, сколько источников пройдено,\r
    сколько найдено и сколько это уже длится. Он виден <b>на любой странице и в любой вкладке</b> —\r
    можно закрыть окно, открыть кабинет с телефона, и сбор всё равно будет виден.</p>\r
  <p>Кнопка <b>«Остановить»</b> рядом: прогон дочитает текущий источник и остановится.\r
    Найденное к этому моменту <b>сохраняется</b> — ничего не пропадёт.</p>\r
\r
  <h2>Что делать с результатами</h2>\r
  <ul>\r
    <li><b>Скачать CSV прогона</b> — таблица для Excel по одному сбору.</li>\r
    <li><b>Отчёт для заказчика</b> (вкладка «Аналитика») — готовый текст словами: охват, период,\r
      результат и методика. По окну аналитики, а не по одному прогону.</li>\r
    <li><b>Файл для показа</b> — один HTML-файл со снимком дашборда. Его можно отправить кому\r
      угодно: он работает без программы и без интернета, и менять в нём нечего.</li>\r
    <li><b>Телеграм-бот</b> — присылает ссылки прямо по ходу сбора, по мере находок.</li>\r
  </ul>\r
\r
  <h2>Команды телеграм-боту</h2>\r
  <p>Бот проекта понимает команды — и в личных сообщениях, и в общем чате, куда вы его добавили.\r
    Читать может любой участник чата: <b>/status</b> — идёт ли сбор и когда был последний,\r
    <b>/today</b> — что нашлось сегодня, <b>/find слово</b> — поиск по уже собранному,\r
    <b>/csv</b> — вся лента файлом, <b>/help</b> — список команд.</p>\r
  <p>Запускать сбор могут только <b>владелец бота</b> и <b>администраторы чата</b>, где владелец\r
    состоит: <b>/search</b> — разовый поиск, <b>/run</b> — собрать по проекту сейчас,\r
    <b>/cancel</b> — остановить сбор (найденное сохранится).</p>\r
  <p><b>Как стать владельцем.</b> В настройках проекта, в блоке телеграм-бота, есть команда вида\r
    <code>/iam 123456</code>. Отправьте её боту <b>в личные сообщения</b>. В общий чат её не пишите:\r
    бот тогда сразу заменит код, чтобы им не воспользовался кто-то из читавших.</p>\r
  <p><b>Разовый поиск</b> идёт по источникам проекта: бот спросит слово, потом за сколько последних\r
    дней искать (не больше 30), потом предложит добавить источник через <code>+ адрес</code> — сайт,\r
    t.me/канал или facebook.com/профиль — <b>только для этого поиска</b>. Итог придёт в чат: число,\r
    первые десять ссылок и таблица файлом. В ленту проекта разовый поиск не попадает, а постоянный\r
    список источников меняется только в кабинете. Пока идёт другой сбор, поиск не запустится —\r
    программа собирает по одному, чтобы не морозить компьютер.</p>\r
  <p>Бот отвечает, только пока программа работает. Команды, присланные, когда компьютер спал,\r
    бот выполнять не станет, а попросит повторить — иначе утром он выполнил бы вчерашние пачкой.</p>\r
\r
  <h2>Про ИИ — что он делает и чего не делает</h2>\r
  <p>ИИ <b>не ищет</b> материалы и <b>не решает</b>, какие даты верные, — это делает движок,\r
    и делает одинаково каждый раз. ИИ помогает <b>читать уже собранное</b>:</p>\r
  <ul>\r
    <li><b>Расширенный обзор</b> — справка для руководства «Обзор информационного поля»: сюжеты по темам,\r
      кто формировал повестку, был ли резонанс, вывод. Пишется по всем материалам окна. Перед первым\r
      обзором загляните в настройки проекта, блок «Для расширенного обзора»: там задаются круг связанных лиц,\r
      контекст и типы источников (критический, лояльный…) — сама модель их не угадывает. Кнопка\r
      «Скопировать справку» переносит текст в Word вместе с жирным.</li>\r
    <li><b>Тональность</b> — выигрышно / нейтрально / невыгодно по каждому материалу.</li>\r
    <li><b>Проверка релевантности</b> — отсекает однофамильцев и случайные совпадения.\r
      <b>Ничего не удаляет</b>, только помечает: решаете вы.</li>\r
  </ul>\r
  <p>Каждый вид — отдельный запрос к Google и расход вашей квоты. Нужен ключ Google AI Studio;\r
    он хранится на вашем компьютере. Если выбранная модель занята, программа сама спросит\r
    запасную и напишет, какая ответила.</p>\r
\r
  <h2>Приватность</h2>\r
  <p>Всё собранное лежит <b>только на этом компьютере</b>, в вашей папке профиля. Никакого облака.</p>\r
  <p>Если по заказу показывать собранное нельзя — включите <b>«не отправлять данные проекта во\r
    внешний контур»</b>. Тогда закрыты Gemini, телеграм-бот и внешний поиск. Честно про остальное:\r
    ключевое слово всё равно уходит в поисковые формы самих отслеживаемых сайтов — иначе поиска по\r
    сайту не будет вовсе; это написано и в самой настройке.</p>\r
\r
  <h2>Пробный период и ключ</h2>\r
  <p>Первые <b>7 дней</b> программа работает целиком, без ограничений. Когда они кончатся,\r
    остановится <b>только сбор нового</b> — кнопка «Собрать сейчас», расписание и команды бота\r
    <b>/run</b> и <b>/search</b>.</p>\r
  <p>Всё, что уже собрано, остаётся открытым навсегда: лента, выгрузки CSV, отчёты, аналитика,\r
    логи прогонов. Эти данные ваши, и программа их не запирает.</p>\r
  <p>Чтобы продолжить сбор, нужен ключ от разработчика. Карточка на главной странице кабинета\r
    сама показывает, что делать: <b>шаг 1</b> — отправить разработчику номер этого компьютера\r
    (рядом кнопка «Скопировать номер»), <b>шаг 2</b> — вставить полученный ключ в поле под ним.\r
    Ключ начинается с <code>MC1.</code>, вставлять надо строку целиком.</p>\r
  <p>Ключ работает на том компьютере, чей номер вы прислали. Нужен второй компьютер — скажите\r
    об этом при покупке.</p>\r
\r
  <h2>Если что-то пошло не так</h2>\r
  <ul>\r
    <li><b>Источник дал ноль.</b> Откройте «Подробности по каждому источнику» — там для каждого\r
      написано, почему столько. Значок <b>🔍</b> покажет разбор по каждой ссылке.</li>\r
    <li><b>Ноль — не всегда поломка.</b> Часто про тему там просто не писали, и в логе так и\r
      сказано: «сайт доступен, статьи прочитаны».</li>\r
    <li><b>Прогон идёт слишком долго.</b> Самая медленная часть — браузер. В настройках есть\r
      «Окон браузера»: два окна делят это время примерно пополам, но и памяти просят вдвое.</li>\r
    <li><b>Нужно показать разработчику.</b> Кнопка «Скачать лог прогона» — маленький файл,\r
      его можно просто переслать.</li>\r
  </ul>\r
\r
  <h2>Мелочи, которые экономят время</h2>\r
  <ul>\r
    <li>Значок <b>☀️/🌙</b> в верхней строке — светлая и тёмная тема.</li>\r
    <li><b>EN/RU</b> — язык кабинета.</li>\r
    <li><b>💡</b> — выключить подсказки под полями, когда вы уже всё знаете. Эта инструкция\r
      останется на месте.</li>\r
    <li>Кабинет открывается и с телефона — по тому же адресу, из той же сети.</li>\r
  </ul>\r
\r
  <h2>Связь с разработчиком</h2>\r
  <p>Если что-то не работает или нужен ключ — пишите:\r
    <a href="mailto:pingames.studio@gmail.com">pingames.studio@gmail.com</a>.\r
    К письму лучше приложить <b>лог прогона</b> (кнопка «Скачать лог прогона» во вкладке\r
    «Прогоны») — по нему видно, что программа делала, и разбор занимает минуты, а не дни.</p>\r
  <p class="tag">© 2026 Timur Seidalin</p>\r
</div>\`;\r
\r
const HELP_EN = \`\r
<div class="card help">\r
  <h1>How to use mediachrome</h1>\r
  <p class="lead">The program goes through news sites, Telegram channels, YouTube and Facebook\r
    profiles, looks for mentions of your search term over a period you choose, and gives you a\r
    table: date, source, headline, link and an excerpt around the term. Everything runs on your\r
    own computer.</p>\r
\r
  <h2>Getting started</h2>\r
  <ol>\r
    <li><b>Create a project.</b> A project is one monitoring topic: its own list of sources, its\r
      own term, its own period. Use separate projects for separate topics, otherwise the results\r
      get mixed together.</li>\r
    <li><b>Type what to look for</b> in the “What to look for” field.</li>\r
    <li><b>Pick your sources.</b> A new project already has a ready-made list of outlets ticked —\r
      that is enough to start. You can add your own sites and Telegram channels below.</li>\r
    <li><b>Choose a period</b> and press <b>“Collect now”</b>.</li>\r
  </ol>\r
  <p>The first run is the slowest: the program reads the sites for the first time. After that it\r
    remembers the dates of articles it has already read and does not download them again.</p>\r
\r
  <h2>Writing a query</h2>\r
  <ul>\r
    <li><b>A comma means OR.</b> <code>Tokayev, Toqayev</code> finds both spellings.</li>\r
    <li><b>A space means AND.</b> <code>Tokayev visit</code> — both words must be in the item.</li>\r
    <li><b>Quotes mean an exact phrase.</b> <code>"Kazakhstan Temir Zholy"</code>.</li>\r
    <li><b>Exclude words</b> — items containing them are dropped. Useful when your term collides\r
      with something unrelated.</li>\r
    <li><b>Word endings</b> — the “match word endings” box also finds inflected forms. This\r
      matters most for Russian and Kazakh.</li>\r
  </ul>\r
  <p class="warn">The program does not tell namesakes apart, and it should not: it looks for a\r
    word, not a person. If the wrong person keeps showing up, make the query more specific, or\r
    turn on the AI relevance check — it will mark such items.</p>\r
\r
  <h2>Period and schedule</h2>\r
  <ul>\r
    <li><b>Fixed</b> — “from 1 to 30 August”. A one-off archive sweep.</li>\r
    <li><b>Daily monitoring</b> — “last N days”. The window is recalculated for every run.\r
      This is what real monitoring looks like; choose it if you turn the schedule on.</li>\r
    <li><b>From a date up to today</b> — the archive plus everything new.</li>\r
  </ul>\r
  <p>The schedule starts collection by itself. One thing to know: <b>a sleeping computer will not\r
    start a run</b> — but the program catches up on the missed one as soon as the machine wakes.</p>\r
\r
  <h2>While a collection is running</h2>\r
  <p>A green indicator appears in the top bar: which project, how many sources are done, how much\r
    has been found and how long it has been running. It is visible <b>on every page and in every\r
    tab</b> — you can close the window or open the interface from your phone, and the run is still\r
    there.</p>\r
  <p>The <b>“Stop”</b> button is next to it: the run finishes the current source and stops.\r
    Everything found up to that moment <b>is kept</b> — nothing is lost.</p>\r
\r
  <h2>What to do with the results</h2>\r
  <ul>\r
    <li><b>Download run CSV</b> — a spreadsheet for one collection.</li>\r
    <li><b>Client report</b> (Analytics tab) — ready-made prose: coverage, period, result and\r
      method. Built for the analytics window, not for a single run.</li>\r
    <li><b>Shareable file</b> — a single HTML file with a snapshot of the dashboard. You can send\r
      it to anyone: it works without the program and without internet, and nothing in it can be\r
      changed.</li>\r
    <li><b>Telegram bot</b> — sends links during the run, as items are found.</li>\r
  </ul>\r
\r
  <h2>Commands to the Telegram bot</h2>\r
  <p>The project's bot understands commands — in a private chat and in a group you added it to.\r
    Anyone in the chat can read: <b>/status</b> — whether a collection is running and when the last\r
    one was, <b>/today</b> — what was found today, <b>/find word</b> — search what has already been\r
    collected, <b>/csv</b> — the whole feed as a file, <b>/help</b> — the list of commands.</p>\r
  <p>Only the <b>bot owner</b> and <b>admins of a chat the owner is in</b> can start collecting:\r
    <b>/search</b> — a one-off search, <b>/run</b> — collect for the project now,\r
    <b>/cancel</b> — stop collecting (what was found is kept).</p>\r
  <p><b>How to become the owner.</b> In the project settings, in the Telegram bot block, there is a\r
    command like <code>/iam 123456</code>. Send it to the bot <b>in a private chat</b>. Do not post it\r
    in a group: the bot will replace the code at once so nobody who read it can use it.</p>\r
  <p>A <b>one-off search</b> runs across the project's sources: the bot asks for the word, then how\r
    many recent days to search (30 at most), then offers to add a source with <code>+ address</code> —\r
    a site, t.me/channel or facebook.com/profile — <b>for this search only</b>. The result comes to\r
    the chat: the count, the first ten links and the full table as a file. A one-off search does not\r
    go into the project feed, and the permanent source list is changed only in the dashboard. While\r
    another collection is running, the search will not start — the program collects one at a time so\r
    as not to freeze the computer.</p>\r
  <p>The bot answers only while the program is running. Commands sent while the computer was asleep\r
    are not carried out; the bot asks you to repeat them — otherwise in the morning it would run\r
    yesterday's commands in a batch.</p>\r
\r
  <h2>About the AI — what it does and does not do</h2>\r
  <p>The AI <b>does not search</b> for items and <b>does not decide</b> which dates are right —\r
    the engine does that, and does it the same way every time. The AI helps you\r
    <b>read what has already been collected</b>:</p>\r
  <ul>\r
    <li><b>Extended review</b> — a briefing for management, “Review of the information field”: stories by\r
      topic, who drove the agenda, whether there was resonance, a conclusion. Written from every item in the window.\r
      Before the first review, open the project settings, block “For the extended review”: that is where related\r
      people, context and source types (critical, loyal…) are set — the model does not guess them. “Copy the\r
      briefing” carries the text into Word with the bold intact.</li>\r
    <li><b>Sentiment</b> — favourable / neutral / unfavourable for each item.</li>\r
    <li><b>Relevance check</b> — filters out namesakes and accidental matches. It\r
      <b>deletes nothing</b>, only marks: you decide.</li>\r
  </ul>\r
  <p>Each kind is a separate request to Google and spends your quota. You need a Google AI Studio\r
    key; it is stored on your computer. If the chosen model is busy, the program asks a spare one\r
    and tells you which model answered.</p>\r
\r
  <h2>Privacy</h2>\r
  <p>Everything collected stays <b>on this computer only</b>, in your profile folder. No cloud.</p>\r
  <p>If an assignment forbids showing the collected material to anyone, turn on <b>“do not send\r
    this project's data outside”</b>. That blocks Gemini, the Telegram bot and external search.\r
    To be straight about the rest: the search term still goes into the search forms of the\r
    monitored sites themselves — without that there is no site search at all. The setting says so\r
    as well.</p>\r
\r
  <h2>Trial period and licence key</h2>\r
  <p>For the first <b>7 days</b> the program runs in full, with nothing held back. After that only\r
    <b>new collection</b> stops — the “Collect now” button, the schedule and the bot commands\r
    <b>/run</b> and <b>/search</b>.</p>\r
  <p>Everything already collected stays open for good: the feed, CSV exports, reports, analytics\r
    and run logs. That data is yours, and the program does not lock it away.</p>\r
  <p>To keep collecting you need a key from the developer. The card on the cabinet's main page\r
    tells you what to do: <b>step 1</b> — send the developer this computer's number (there's a\r
    “Copy the number” button next to it), <b>step 2</b> — paste the key you receive into the field\r
    below. A key starts with <code>MC1.</code> and must be pasted in full.</p>\r
  <p>The key works on the computer whose number you sent. If you need a second computer, say so\r
    when buying.</p>\r
\r
  <h2>If something goes wrong</h2>\r
  <ul>\r
    <li><b>A source returned nothing.</b> Open “Per-source detail” — for each source it says why\r
      the count came out as it did. The <b>🔍</b> icon shows a link-by-link breakdown.</li>\r
    <li><b>Zero is not always a fault.</b> Often nothing was published on the topic, and the log\r
      says exactly that: “the site is reachable and its articles were read”.</li>\r
    <li><b>A run takes too long.</b> The slowest part is the browser. In the settings there is\r
      “Browser windows”: two windows roughly halve that time but use twice the memory.</li>\r
    <li><b>You need to show it to the developer.</b> The “Download run log” button gives a small\r
      file you can simply forward.</li>\r
  </ul>\r
  <p class="warn">Note: the per-source notes in the run log are written in Russian — they come\r
    from the engine, not from this interface. Everything else is translated.</p>\r
\r
  <h2>Small things that save time</h2>\r
  <ul>\r
    <li><b>☀️/🌙</b> in the top bar — light and dark theme.</li>\r
    <li><b>EN/RU</b> — interface language.</li>\r
    <li><b>💡</b> — hide the hints under the fields once you know your way around. This manual\r
      stays where it is.</li>\r
    <li>The interface also opens from a phone — same address, same network.</li>\r
  </ul>\r
\r
  <h2>Contact the developer</h2>\r
  <p>If something does not work, or you need a licence key, write to\r
    <a href="mailto:pingames.studio@gmail.com">pingames.studio@gmail.com</a>.\r
    Please attach the <b>run log</b> (the “Download run log” button on the “Runs” tab) — it shows\r
    what the program actually did, and that turns days of guessing into minutes.</p>\r
  <p class="tag">© 2026 Timur Seidalin</p>\r
</div>\`;\r
\r
// ---- ИНДИКАТОР СБОРА ----\r
//\r
// Спрашиваем ПРОГРАММУ, а не помним у себя. В этом вся правка: состояние,\r
// которое живёт во вкладке, исчезает вместе с вкладкой — а сбор идёт минутами,\r
// вкладку за это время закрывают, перезагружают и открывают с телефона.\r
//\r
// Раз в 2 секунды, и только когда вкладка на экране: свёрнутое окно опрашивать\r
// незачем, а при расписании «каждые 20 минут» кабинет может висеть открытым\r
// сутками. Это не экономия ради экономии — требование №1 «не морозить\r
// компьютер» касается и нас самих.\r
const RUN_POLL_MS = 2000;\r
let runPollT = null, runSeen = false;\r
\r
function fmtDur(ms){\r
  const s = Math.max(0, Math.round(ms/1000));\r
  const U = LANG === 'en' ? { s:'s', m:'min', h:'h' } : { s:'с', m:'мин', h:'ч' };\r
  if (s < 60) return s + ' ' + U.s;\r
  const m = Math.floor(s/60);\r
  return m < 60 ? (m + ' ' + U.m + ' ' + (s%60) + ' ' + U.s) : (Math.floor(m/60) + ' ' + U.h + ' ' + (m%60) + ' ' + U.m);\r
}\r
\r
async function pollRuns(){\r
  if (SNAP) return;                       // в снимке дашборда сервера нет вовсе\r
  let runs = [];\r
  try { runs = (await (await api('/state')).json()).runs || []; }\r
  catch (e) { return; }                   // нет связи — не мигаем, просто ждём следующего раза\r
  const bar = $('#runbadge'), txt = $('#runtxt'), btn = $('#runstop');\r
  if (!bar) return;\r
  const r = runs[0];\r
  if (!r) {\r
    bar.hidden = true;\r
    // Прогон только что кончился, и кабинет об этом знает первым: обновляем\r
    // страницу сами. Иначе человек смотрел бы на вчерашние цифры и гадал,\r
    // собралось что-нибудь или нет.\r
    if (runSeen) { runSeen = false; setStatus(T('Сбор закончен.')); route(); }\r
    return;\r
  }\r
  runSeen = true;\r
  bar.hidden = false;\r
  const where = r.total ? T(r.done + ' из ' + r.total) : T('источников ' + r.done);\r
  const nums = [where, T('найдено ' + r.found), fmtDur(r.ms)];\r
  if (r.by === 'расписание') nums.push(T('по расписанию'));\r
  // Имя проекта и цифры — РАЗНЫМИ кусками, потому что на телефоне в шапке\r
  // помещается только один из них. Прячем имя: «идёт сбор» и так видно по\r
  // вертушке, а «12 из 70» не видно ниоткуда больше.\r
  txt.innerHTML = (r.stopping ? '<span class="rnum">' + esc(T('⏹ останавливаю…')) + ' </span>' : '')\r
    + '<span class="rname">' + esc(r.name || 'проект') + ' · </span>'\r
    + '<span class="rnum">' + esc(nums.join(' · ')) + '</span>';\r
  txt.title = r.site ? ('сейчас читается: ' + r.site) : '';\r
  btn.disabled = !!r.stopping;\r
  btn.textContent = T(r.stopping ? 'Останавливаю…' : 'Остановить');\r
  btn.onclick = async () => {\r
    // Спрашиваем ПРЕЖДЕ чем останавливать: кнопка стоит в шапке на всех\r
    // страницах, и случайное нажатие посреди сорокаминутного прогона стоило бы\r
    // дорого. Найденное при этом не пропадает, и об этом прямо сказано.\r
    if (!confirm(LANG === 'en'\r
      ? 'Stop the collection?\\n\\nWhat has been found so far will be kept; the remaining sources will not be read this time.'\r
      : 'Остановить сбор?\\n\\nНайденное к этому моменту сохранится, остальные источники в этот раз не прочитаются.')) return;\r
    btn.disabled = true; btn.textContent = 'Останавливаю…';\r
    try { await api('/projects/' + r.id + '/stop', { method: 'POST' }); }\r
    catch (e) { setStatus('Не вышло остановить: ' + e.message); btn.disabled = false; }\r
  };\r
}\r
\r
function startRunPoll(){\r
  if (SNAP) return;\r
  if (runPollT) clearInterval(runPollT);\r
  runPollT = setInterval(() => { if (!document.hidden) pollRuns(); }, RUN_POLL_MS);\r
  pollRuns();\r
  // Вернулись на вкладку — спрашиваем сразу, не дожидаясь такта: человек\r
  // переключился ИМЕННО чтобы посмотреть, как идут дела.\r
  document.addEventListener('visibilitychange', () => { if (!document.hidden) pollRuns(); });\r
}\r
\r
// ---- ТУМБЛЕР ТЕМЫ ----\r
// Переключение — это две строки: поставить признак на <html> и запомнить выбор.\r
// Третья строка, \`route()\`, нужна вот почему: ГРАФИКИ — это SVG, и цвет в них\r
// вписан строкой в момент отрисовки (CSSVAR читает переменную ОДИН раз). Сменив\r
// тему, старые графики остались бы с прежними цветами — на светлом фоне тёмная\r
// обводка точек, и человек решил бы, что тема «сломалась». Перерисовка страницы\r
// стоит одного запроса к своему же серверу и случается редко: человек выбирает\r
// тему раз и забывает.\r
function applyTheme(t, redraw){\r
  document.documentElement.dataset.theme = t;\r
  try{ localStorage.setItem('mc_theme', t); }catch(e){}\r
  const b = $('#theme');\r
  // Значок показывает, что СДЕЛАЕТ нажатие, а не что включено сейчас.\r
  if(b){ b.textContent = t==='light' ? '🌙' : '☀️';\r
         b.title = t==='light' ? 'Включить тёмную тему' : 'Включить светлую тему'; }\r
  if(redraw) route();\r
}\r
{\r
  let t = document.documentElement.dataset.theme;\r
  if(t!=='light' && t!=='dark') t='dark';   // умолчание — та тема, что была всегда\r
  applyTheme(t, false);\r
  $('#theme').onclick = ()=> applyTheme(document.documentElement.dataset.theme==='light'?'dark':'light', true);\r
}\r
\r
// Язык ставим ДО первой отрисовки страницы: наблюдатель должен уже работать,\r
// когда route() создаст первые узлы, иначе они останутся русскими до\r
// следующей перерисовки.\r
{\r
  let l = document.documentElement.dataset.lang;\r
  if (l !== 'en' && l !== 'ru') l = 'ru';   // умолчание — тот язык, что был всегда\r
  setLang(l, false);\r
  $('#lang').onclick = () => setLang(LANG === 'en' ? 'ru' : 'en', true);\r
}\r
// ВЫКЛЮЧАТЕЛЬ ПОДСКАЗОК. Помнится так же, как тема и язык. Перерисовки не\r
// требует вовсе — это правило CSS, а не другая разметка.\r
function setHints(on){\r
  document.documentElement.dataset.hints = on ? 'on' : 'off';\r
  try{ localStorage.setItem('mc_hints', on ? 'on' : 'off'); }catch(e){}\r
  const b = $('#hints');\r
  if (b) b.title = LANG === 'en'\r
    ? (on ? 'Hide the hints under the fields' : 'Show the hints under the fields')\r
    : (on ? 'Скрыть подсказки под полями' : 'Показать подсказки под полями');\r
}\r
{\r
  let h = 'on';\r
  try{ if (localStorage.getItem('mc_hints') === 'off') h = 'off'; }catch(e){}\r
  setHints(h === 'on');\r
  $('#hints').onclick = () => setHints(document.documentElement.dataset.hints === 'off');\r
}\r
// СОХРАНИТЬ В PDF. Имя файла браузер берёт из заголовка страницы — поэтому на\r
// время печати заголовок становится «Где мы · дата», а сверху страницы\r
// появляется строка, откуда и когда этот снимок: PDF уходит людям, которые\r
// кабинета не видели, и без даты они не поймут, на какой день эти числа.\r
{\r
  const b = $('#pdf');\r
  const where = () => [...document.querySelectorAll('#crumbs a, #crumbs .here')].map(x => x.textContent.replace(/^←\\s*/, '').trim()).filter(Boolean).slice(-2).join(' — ');\r
  const stamp = () => { const t = new Date(), p = n => String(n).padStart(2, '0');\r
    return { day: t.getFullYear()+'-'+p(t.getMonth()+1)+'-'+p(t.getDate()), time: p(t.getHours())+':'+p(t.getMinutes()) }; };\r
  let oldTitle = null;\r
  window.addEventListener('beforeprint', () => {\r
    const s = stamp(), w = where() || 'mediachrome';\r
    $('#printhead').textContent = w + ' · ' + (LANG === 'en' ? 'saved' : 'сохранено') + ' ' + s.day + ' ' + s.time + ' · mediachrome';\r
    if (oldTitle == null) oldTitle = document.title;\r
    document.title = (w + ' ' + s.day).replace(/[\\\\/:*?"<>|]+/g, ' ').trim();\r
    // Сюжеты в PDF раскрыты: тот, кто читает отчёт, не может щёлкнуть.\r
    document.querySelectorAll('details.story:not([open])').forEach(d => { d.open = true; d.dataset.printOpen = '1'; });\r
  });\r
  window.addEventListener('afterprint', () => { if (oldTitle != null) { document.title = oldTitle; oldTitle = null; }\r
    document.querySelectorAll('details.story[data-print-open]').forEach(d => { d.open = false; delete d.dataset.printOpen; }); });\r
  if (b) {\r
    b.onclick = () => window.print();\r
  }\r
}\r
startRunPoll();\r
route();\r
applyLang(document.body);\r
</script>\r
</body>\r
</html>\r
`}var hl=ee(()=>{i(Da,"uiHtml")});function ry(e){let t=e&&e.periodMode||"fixed";return t==="rolling"?`последние ${Math.max(2,+e.periodDays||2)} дн.`:t==="since"?`с ${e.from||"…"} и до сегодня`:Ir(e).why}function oy(e){let t=We(e);if(!t)return null;let n=t.config||{},r={"/me":{hasPassword:!1,playwright:!1,hasGeminiKey:!1,geminiModel:""},["/projects/"+e]:{id:e,name:t.name,ai:sy(t.ai)}};for(let a of ty){let c=In(e,{days:a});if(c){r["/projects/"+e+"/analytics"+(a?"?days="+a:"")]=c;for(let l of c.byDay||[]){let d="/projects/"+e+"/day?d="+l.day;l.count&&r[d]===void 0&&(r[d]={day:l.day,items:la(e,l.day)})}}}let s=new Date,o=i(a=>String(a).padStart(2,"0"),"p2");return{id:e,name:t.name||"Мониторинг",keyword:n.keyword||"",sources:(n.sites||[]).length,periodText:ry(n),madeAt:`${o(s.getDate())}.${o(s.getMonth()+1)}.${s.getFullYear()} ${o(s.getHours())}:${o(s.getMinutes())}`,api:r}}function nf(e){let t=oy(e);if(!t)return null;let n=Da(),r="<script>window.MC_SNAPSHOT = "+ny(t)+`;</script>
`;return{html:n.replace("<body>",`<body>
`+r).replace("<title>mediachrome — кабинет</title>","<title>"+ay(t.name)+" — дашборд</title>"),snap:t}}function rf(e){let t=String(e.name||"dashboard").replace(/[^A-Za-zА-Яа-яЁё0-9 _-]+/g,"").trim().replace(/\s+/g,"-")||"dashboard",n=new Date,r=i(s=>String(s).padStart(2,"0"),"p");return`${t}-${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}.html`}function fl(e){return`attachment; filename="${e.replace(/[^\x20-\x7E]/g,"_").replace(/["\\]/g,"_")}"; filename*=UTF-8''${encodeURIComponent(e)}`}var ef,tf,L1,ty,ny,sy,ay,sf=ee(()=>{ef=require("node:url"),tf=require("node:path");Dt();Gs();_o();hl();L1=(0,tf.dirname)((0,ef.fileURLToPath)(__mcFileUrl)),ty=[null,30,7],ny=i(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJson");i(ry,"periodText");sy=i(e=>{let t={};for(let[n,r]of Object.entries(e||{}))r&&(t[n]={at:r.at||null,text:r.text||"",err:r.err||"",model:r.model||"",window:r.window||"",auto:!!r.auto,items:Array.isArray(r.items)?r.items:null});return t},"cleanAi");i(oy,"buildSnapshot");i(nf,"buildShareHtml");ay=i(e=>String(e??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),"esc");i(rf,"shareFileName");i(fl,"contentDisposition")});function of(e,t,n){let r=[];r.push("=== ДИАГНОСТИКА: "+e+" ==="),n&&r.push("период: "+(n.why||(n.from||"…")+" … "+(n.to||"…"))),r.push("каналы: "+(t.channel||"—")),r.push("итог движка: "+(t.note||"—")),r.push("найдено (взято): "+(t.rows?t.rows.length:0));let s=t.diag||{},o=s.meta||{},a=s.records||[];r.push(""),r.push("--- канал поиска ---"),r.push("вид поиска: "+(o.searchKind||"—")),r.push("URL поиска: "+(o.searchUrl||"(поиск не строился)")),o.renderUrl&&r.push("URL рендера: "+o.renderUrl),o.rawLinks&&o.rawLinks.length?(r.push("сырые ссылки со страницы поиска (образец "+o.rawLinks.length+"):"),o.rawLinks.slice(0,15).forEach(h=>r.push("   "+h))):r.push("сырых ссылок со страницы поиска: 0 (пусто/оболочка/JS-выдача)"),r.push(""),r.push("--- судьба открытых ссылок ("+a.length+") ---");let c={};for(let h of a)c[h.verdict]=(c[h.verdict]||0)+1;r.push("сводка вердиктов: "+(Object.entries(c).map(([h,m])=>h+"="+m).join(", ")||"—"));let l=/не открылась|дата не найдена|дата не распознана|не успели|не влезла/i,d=new Map;for(let h of a){let m=h.verdict||"—";d.has(m)||d.set(m,[]),d.get(m).push(h)}let p=i(h=>l.test(h)?0:h==="ВЗЯТА"?1:2,"rank"),f=[...d.keys()].sort((h,m)=>p(h)-p(m)||d.get(m).length-d.get(h).length),u=5;for(let h of f){let m=d.get(h);r.push("  • "+h+" — "+m.length+(l.test(h)?"  (ЭТО ПОТЕРЯ: страницу мы не проверили)":"")),m.slice(0,u).forEach(w=>{let g=[];w.date&&g.push('дата="'+w.date+'"->'+(w.parsed||"НЕ РАСПОЗНАНА")),w.hasKw!=null&&g.push("ключ:"+(w.hasKw?"да":"нет")),r.push("     "+(w.title?"«"+w.title+"»  ":"")+w.url+(g.length?"   ["+g.join(" | ")+"]":""))}),m.length>u&&r.push("     … ещё "+(m.length-u)+" с таким же вердиктом")}return r.join(`
`)}var af=ee(()=>{i(of,"diagReport")});function lf(e,t,n,r){let s=Math.abs(e)%100,o=s%10;return s>10&&s<20?r:o>1&&o<5?n:o===1?t:r}function as(e){let t=String(e||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return t?[+t[1],+t[2],+t[3]]:null}function df(e,t){let n=as(e),r=as(t);if(!n&&!r)return"";if(!n||!r){let s=n||r;return s[2]+" "+Jt[s[1]-1]+" "+s[0]}return n[0]===r[0]&&n[1]===r[1]&&n[2]===r[2]?n[2]+" "+Jt[n[1]-1]+" "+n[0]:n[0]===r[0]&&n[1]===r[1]?n[2]+"–"+r[2]+" "+Jt[n[1]-1]+" "+n[0]:n[0]===r[0]?n[2]+" "+Jt[n[1]-1]+" — "+r[2]+" "+Jt[r[1]-1]+" "+n[0]:n[2]+" "+Jt[n[1]-1]+" "+n[0]+" — "+r[2]+" "+Jt[r[1]-1]+" "+r[0]}function uf(e,t){let n=as(e),r=as(t);return!n||!r?0:Math.round((Date.UTC(r[0],r[1]-1,r[2])-Date.UTC(n[0],n[1]-1,n[2]))/864e5)+1}function pf(e){let t=Math.max(0,Math.round((+e||0)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),s=t%60,o=[];return n&&o.push(at(n,"час","часа","часов")),r&&o.push(at(r,"минута","минуты","минут")),(s||!o.length)&&o.push(at(s,"секунда","секунды","секунд")),o.join(" ")}function dy(e){let t=new Map;for(let n of e)t.set(ml(n.source),(t.get(ml(n.source))||0)+1);return hf([...t.entries()])}function hf(e){let n=e.map(([s,o])=>[ml(s),o]).sort((s,o)=>o[1]-s[1]||s[0].localeCompare(o[0])).filter(([,s])=>s>1).slice(0,12);if(!n.length)return"";let r=[];for(let s=0;s<n.length;){let o=n[s][1],a=[];for(;s<n.length&&n[s][1]===o;)a.push(n[s++][0]);r.push(a.join(" / ")+" — "+(a.length>1?"по ":"")+o)}return r.join(", ")}function ff(e,t){let n=e||{},r=t||{},s=Array.isArray(r.rows)?r.rows:[],o=Array.isArray(r.log)?r.log:[],a=i(y=>o.find(v=>v.site===y)||null,"line"),c=a("(период)"),l=a("(время)"),d=[];if(d.push("ОТЧЁТ ПО МОНИТОРИНГУ"),d.push(""),d.push("Тема: "+(n.keyword||"—")),c&&c.from&&c.to?d.push("Период: "+df(c.from,c.to)+" ("+at(uf(c.from,c.to),"день","дня","дней")+")"):c&&c.note&&d.push("Период: "+c.note),r.at){let y=new Date(r.at);d.push("Дата мониторинга: "+y.getDate()+" "+Jt[y.getMonth()]+" "+y.getFullYear())}let p=o.filter(y=>!ly(y.site));if(p.length){let y=new Map;for(let v of p){let L=vn(v.site);y.set(L,(y.get(L)||0)+1)}d.push(""),d.push("ОХВАТ"),d.push("Просмотрено "+at(p.length,"источник","источника","источников")+":");for(let v of cf){let L=y.get(v);if(!L)continue;let A=cy[v];d.push("  — "+(v==="youtube"?"YouTube":at(L,A[0],A[1],A[2])))}}l&&l.ms&&(d.push(""),d.push("ЗАТРАЧЕНО ВРЕМЕНИ"),d.push(pf(l.ms)+" (автоматический сбор, 4 источника одновременно)")),d.push(""),d.push("РЕЗУЛЬТАТ");let f=new Set(s.map(y=>y.source));d.push(at(s.length,"материал","материала","материалов")+" на "+at(f.size,"источнике","источниках","источниках")+(p.length?" из "+p.length:""));let u=new Map;for(let y of s){let v=ye(y.date);if(!v)continue;let L=Z(v);u.set(L,(u.get(L)||0)+1)}if(u.size){d.push(""),d.push("По дням:");for(let y of[...u.keys()].sort()){let v=as(y);d.push("  "+v[2]+" "+Jt[v[1]-1]+" — "+u.get(y))}}let h=new Map;for(let y of s){let v=vn(y.source);h.set(v,(h.get(v)||0)+1)}if(h.size>1){d.push(""),d.push("По типу источника:");for(let y of cf){let v=h.get(y);v&&d.push("  "+(y==="site"?"сайты СМИ":y==="telegram"?"телеграм":y==="youtube"?"YouTube":"Фейсбук")+" — "+v)}}let m=new Map;for(let y of s){let v=iy[y.match]||String(y.match||"не указано");m.set(v,(m.get(v)||0)+1)}if(m.size){d.push(""),d.push("Где встречается упоминание:");for(let[y,v]of[...m.entries()].sort((L,A)=>A[1]-L[1]||L[0].localeCompare(A[0])))d.push("  "+y+" — "+v)}let w=dy(s);w&&(d.push(""),d.push("Больше всего: "+w)),d.push(""),d.push("МЕТОДИКА");let g=String(n.exclude||"").trim();d.push(g?"  — Применялись минус-слова: "+g+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let b=o.filter(y=>y.site==="(ИИ)"),x=b.find(y=>/релевантност/i.test(String(y.note||"")));x?d.push("  — ИИ-проверка релевантности: "+String(x.note).replace(/^ИИ-[^:]*:\s*/,"")+"."):d.push(b.length?"  — Выполнен ИИ-разбор собранного ("+b.length+").":"  — ИИ не запускался: отбор полностью детерминированный — разбор разметки и текста страниц, без машинного обучения и без распознавания изображений."),d.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),d.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let k=p.filter(y=>!(y.found>0)).length;return k&&d.push("  — У "+at(k,"источника","источников","источников")+" из "+p.length+" материалов по теме за этот период не нашлось."),d.join(`
`)+`
`}function mf(e,t,n={}){let r=e||{},s=t&&t.overview||{},o=[],a=n.now instanceof Date?n.now:new Date;o.push("ОТЧЁТ ПО МОНИТОРИНГУ"),o.push(""),o.push("Тема: "+(r.keyword||"—")),s.windowFrom&&s.windowTo&&o.push("Период: "+df(s.windowFrom,s.windowTo)+" ("+at(uf(s.windowFrom,s.windowTo),"день","дня","дней")+")"),o.push("Дата отчёта: "+a.getDate()+" "+Jt[a.getMonth()]+" "+a.getFullYear());let c=(r.sites||[]).map(R=>String(R||"").trim()).filter(Boolean),l=c.filter(R=>/(^@)|(^https?:\/\/)?(www\.)?t\.me\//i.test(R)).length,d=c.length-l,p=(r.facebook||[]).map(R=>String(R||"").trim()).filter(Boolean).length,f=!!(r.youtube&&r.youtube.enabled);if(c.length||p||f){o.push(""),o.push("ОХВАТ");let R=c.length+p+(f?1:0);o.push("Под наблюдением "+at(R,"источник","источника","источников")+":"),d&&o.push("  — "+at(d,"сайт СМИ","сайта СМИ","сайтов СМИ")),l&&o.push("  — "+at(l,"телеграм-канал","телеграм-канала","телеграм-каналов")),f&&o.push("  — YouTube"),p&&o.push("  — "+at(p,"профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"))}let u=Array.isArray(t&&t.runs)?t.runs:[],h=u.map(R=>+R.sec).filter(R=>Number.isFinite(R)&&R>0);if(h.length){let R=h.reduce((F,D)=>F+D,0);o.push(""),o.push("ЗАТРАЧЕНО ВРЕМЕНИ"),o.push(pf(R*1e3)+" — "+at(u.length,"автоматический сбор","автоматических сбора","автоматических сборов")+" за период")}o.push(""),o.push("РЕЗУЛЬТАТ");let m=t&&t.silent&&t.silent.configured||0;o.push(at(s.items||0,"материал","материала","материалов")+" на "+at(s.uniqueSources||0,"источнике","источниках","источниках")+(m?" из "+m+" отслеживаемых":""));let w=(t&&Array.isArray(t.byDay)?t.byDay:[]).filter(R=>R&&R.count>0);if(w.length){o.push(""),o.push("По дням:");for(let R of w){let F=as(R.day);o.push("  "+(F?F[2]+" "+Jt[F[1]-1]:R.day)+" — "+R.count)}}let g=[["site",s.siteItems],["telegram",s.telegramItems],["youtube",s.youtubeItems],["facebook",s.facebookItems]].filter(([,R])=>R>0);if(g.length>1){o.push(""),o.push("По типу источника:");for(let[R,F]of g)o.push("  "+(R==="site"?"сайты СМИ":R==="telegram"?"телеграм":R==="youtube"?"YouTube":"Фейсбук")+" — "+F)}let b=[["в заголовке",s.matchTitle],["в тексте материала",s.matchBody],["в посте",s.matchPost],["в видео",s.matchVideo],["без пометки",s.matchOther]].filter(([,R])=>R>0);if(b.length){o.push(""),o.push("Где встречается упоминание:");for(let[R,F]of b)o.push("  "+R+" — "+F)}let x=hf((t&&t.bySource?t.bySource:[]).map(R=>[R.key,R.count]));x&&(o.push(""),o.push("Больше всего: "+x));let k=Kp(t&&t.reach);if(k.length){o.push("");for(let R of k)o.push(R);for(let R of t&&t.media?Xp(t.media,or):[])o.push(R)}let y=sh(t&&t.stories);if(y.length){o.push("");for(let R of y)o.push(R)}let v=t&&t.tone||{total:0};if(v.total){o.push(""),o.push("ТОНАЛЬНОСТЬ (оценка ИИ по заголовку и фрагменту)"),o.push("  выигрышно для объекта — "+v.pos+", нейтрально — "+v.neu+", невыгодно — "+v.neg+" (оценено "+v.total+" из "+(s.items||0)+")");let R=(v.bySource||[]).filter(F=>F.neg>0).slice(0,5);R.length&&o.push("  больше всего невыгодных: "+R.map(F=>F.key+" — "+F.neg).join(", "))}o.push(""),o.push("МЕТОДИКА");let L=String(r.exclude||"").trim();o.push(L?"  — Применялись минус-слова: "+L+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let A=t&&t.relevance||{checked:0};A.checked?o.push("  — ИИ-проверка релевантности: проверено "+at(A.checked,"материал","материала","материалов")+", из них "+A.off+" "+lf(A.off,"похож","похожи","похожи")+" на случайное совпадение имени"+(A.dim?" и "+at(A.dim,"спорный","спорных","спорных"):"")+". Из выдачи они не удалены — помечены."):o.push("  — ИИ-проверка релевантности не запускалась."),o.push("  — Отбор материалов детерминированный: разбор разметки и текста страниц, без машинного обучения."),o.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),o.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let T=t&&t.silent&&t.silent.list?t.silent.list.length+(t.silent.more||0):0;return T&&o.push("  — У "+at(T,"источника","источников","источников")+" из "+m+" материалов по теме за этот период не нашлось."),o.join(`
`)+`
`}var at,Jt,iy,cy,cf,ly,ml,gf=ee(()=>{St();Gs();Vs();$c();Fc();i(lf,"plural");at=i((e,t,n,r)=>e+" "+lf(e,t,n,r),"num"),Jt=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];i(as,"ymdParts");i(df,"ruRange");i(uf,"daysInRange");i(pf,"ruDuration");iy={title:"в заголовке",body:"в тексте материала",post:"в посте",video:"в видео",подпись:"в подписи к посту",репост:"в тексте репоста"},cy={site:["сайт СМИ","сайта СМИ","сайтов СМИ"],telegram:["телеграм-канал","телеграм-канала","телеграм-каналов"],youtube:["YouTube","YouTube","YouTube"],facebook:["профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"]},cf=["site","telegram","youtube","facebook"],ly=i(e=>/^\(/.test(String(e||"")),"isService"),ml=i(e=>String(e)==="youtube"?"YouTube":String(e),"srcName");i(dy,"topSources");i(hf,"topFromPairs");i(ff,"buildReport");i(mf,"buildWindowReport")});function lr(e){let t=["source","date","title","url","channel","channels","match","snippet","author","kind","via","comments"];return[t.join(",")].concat((e||[]).map(n=>t.map(r=>uy(r==="date"?Pt(n[r]):n[r])).join(","))).join(`\r
`)}var uy,gl=ee(()=>{St();uy=i(e=>{let t=String(e??"");return/[",\r\n]/.test(t)?'"'+t.replace(/"/g,'""')+'"':t},"csvCell");i(lr,"toCSV")});async function Ca(e,t="ручной"){let n=We(e);if(!n)return{code:404,error:"проект не найден"};let r=os();if(r)return{code:402,error:r};if(ut.has(e))return{code:409,error:"уже идёт"};ut.add(e),Ur(e,{name:n.name,by:t});let s=null,o=i((a,c)=>{try{let l=Pr(e,a,c,s);s=l.ts,Fn(e,{ts:l.ts}).catch(()=>{})}catch{}},"onProgress");try{let{rows:a,log:c}=await Br(n,o,{onStep:i(p=>Vr(e,p),"onStep"),stopping:i(()=>Gr(e),"stopping")}),l=Pr(e,a,c,s);try{await Fn(e,{ts:l.ts})}catch{}let d=await va(e,{foundNow:a.length,runTs:l.ts});return d.length&&$o(e,l.ts,d.map(p=>({site:"(ИИ)",channel:"gemini",found:0,note:p}))),{code:200,added:l.added,total:l.total,ts:l.ts,found:a.length,log:c}}catch(a){return{code:500,error:String(a&&a.message||a)}}finally{ut.delete(e),Kr(e)}}var wl=ee(()=>{Dt();Fs();Hs();qs();ka();rs();Ws();i(Ca,"runNow")});function wy(e,t=""){let n=String(e||"").trim().match(/^\/([A-Za-z_]+)(?:@([A-Za-z0-9_]+))?(?:\s+([\s\S]*))?$/);if(!n)return null;let r=(n[2]||"").toLowerCase(),s=String(t||"").replace(/^@/,"").toLowerCase();return r&&s&&r!==s?null:{cmd:n[1].toLowerCase(),args:(n[3]||"").trim()}}function by(e){let t=String(e||"").trim().replace(/^\+\s*/,""),n=[],r=[],s=[];for(let o of t.split(/[\s,;]+/)){let a=o.trim().replace(/^[<"'«]+|[>"'»]+$/g,"").replace(/^\++/,"");if(!a)continue;if(nr(a)){r.push(nr(a).url);continue}let c=Hi(a);if(c){n.push("t.me/"+c);continue}let l=a.replace(/^https?:\/\//i,"").replace(/\/.*$/,"");if(/(^|\.)(facebook|fb)\.com$/i.test(l)){s.push(a);continue}if(/^[^\s./]+(\.[^\s./]+)*\.[^\s./\d][^\s./]+$/u.test(l)&&!/^\d+\.\d+/.test(l)){n.push(a.replace(/^https?:\/\//i,"").replace(/\/+$/,""));continue}s.push(a)}return{sites:n,facebook:r,bad:s}}function Sf(e){let t=String(e||"").trim().match(/^(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(!t)return null;let n=+t[1];return n>=1&&n<=Qs?n:null}function yy(e){let t=String(e||"").trim();if(!t)return{kw:"",days:null};let n=t.match(/^([\s\S]*?)\s+(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(n&&n[1].trim()){let r=+n[2];if(r>=1&&r<=Qs)return{kw:n[1].trim(),days:r}}return{kw:t,days:null}}function Lf(e,t,n,r={},s=new Date){let o=e||{},a=Math.max(1,Math.min(Qs,Math.floor(+n)||1)),c=a===1?{periodMode:"fixed",from:Z(s),to:Z(s),periodDays:void 0}:{periodMode:"rolling",periodDays:a,from:"",to:""},l=i(d=>[...new Set(d.map(p=>String(p).trim()).filter(Boolean))],"uniq");return{...o,keyword:t,exclude:"",...c,sites:l([...o.sites||[],...r.sites||[]]),facebook:l([...o.facebook||[],...r.facebook||[]])}}async function ky(e,t){let n=t.from&&t.from.id,r=e.owners||[];if(n!=null&&r.some(o=>String(o.id)===String(n)))return{ok:!0};if(!r.length)return{ok:!1,why:"Владелец бота ещё не привязан. В кабинете, в настройках бота, есть команда вида /iam 123456 — владелец отправляет её мне в личные сообщения. После этого запускать сбор смогут он и администраторы его чатов."};if(!vy(t.chat))return{ok:!1,why:"Запускать сбор могут владелец бота и администраторы чата, где он состоит."};let s=await yf(e.token,t.chat.id,n);if(s!=="creator"&&s!=="administrator")return{ok:!1,why:"Запускать сбор в этом чате могут владелец бота и администраторы чата."};for(let o of r){let a=await yf(e.token,t.chat.id,o.id);if(["creator","administrator","member","restricted"].includes(a))return{ok:!0}}return{ok:!1,why:"Владельца бота нет в этом чате — запускать сбор отсюда нельзя."}}async function Ee(e,t,n,r={}){let s=await Ht(e.token,"sendMessage",{chat_id:t,text:n,parse_mode:"HTML",disable_web_page_preview:!0,...r});return s.ok&&s.result?s.result.message_id:null}function xl(e,t=0){return e.map((n,r)=>t+r+1+". <b>"+ue(Sy(n.title||n.url,160))+`</b>
`+ue([n.source,Pt(n.date)].filter(Boolean).join(" · "))+`
`+ue(n.url||"")).join(`

`)}function Tf(e,t=5){let n=new Map;for(let r of e)n.set(r.source||"—",(n.get(r.source||"—")||0)+1);return[...n.entries()].sort((r,s)=>s[1]-r[1]).slice(0,t).map(([r,s])=>r+" — "+s).join(", ")}function Ly(e){return e=e||{},e.mode==="daily"?"каждый день в "+(e.hour!=null?e.hour:9)+":00":e.mode==="hours"?"каждые "+(e.everyHours||6)+" ч":e.mode==="minutes"?"каждые "+(e.everyMinutes||20)+" мин":"вручную, по кнопке"}async function Mf(e,t,n){let r=await Ee(e,t.chat.id,"🔎 <b>Разовый поиск.</b> Что ищем? Ответьте на это сообщение словом или фразой. Варианты написания — через запятую: <i>Тоқаев, Токаев</i>",{reply_to_message_id:t.messageId,reply_markup:{force_reply:!0,selective:!0}});r&&n.prompts.add(r)}async function Af(e,t,n){let r=await Ee(e,t.chat.id,"За сколько последних дней ищем «"+ue(n.kw)+"»? Нажмите кнопку или ответьте на это сообщение числом от 1 до "+Qs+".",{reply_markup:{inline_keyboard:[py.map(s=>({text:String(s),callback_data:"sd:"+s}))]}});r&&n.prompts.add(r)}async function Na(e,t,n,r,s=""){let o=Lf(r.config,n.kw,n.days,n.adds),a=[...n.adds.sites,...n.adds.facebook],c=[s,"Ищу «<b>"+ue(n.kw)+"</b>» за последние "+Zs(n.days)+" по "+Sl(o)+" источникам проекта «"+ue(r.name)+"»"+(a.length?", включая добавленные для этого поиска: "+ue(a.join(", ")):"")+".","","Добавить источник только для этого поиска — ответьте на это сообщение: <code>+ адрес</code> (сайт, t.me/канал или facebook.com/профиль; можно несколько через пробел). Или запускайте."].filter((d,p)=>d||p>0),l=await Ee(e,t.chat.id,c.join(`
`),{reply_markup:{inline_keyboard:[[{text:"▶ Запустить",callback_data:"sr"},{text:"✖ Отмена",callback_data:"sx"}]]}});l&&n.prompts.add(l)}function My(e,t,n,r,s){try{(0,Xt.mkdirSync)(Js,{recursive:!0});let o=(0,Xs.join)(Js,Ml(e)+" — "+Tl(t));(0,Xt.writeFileSync)(o+".csv","\uFEFF"+lr(n)),(0,Xt.writeFileSync)(o+".json",JSON.stringify({...s,keyword:t,found:n.length,log:r},null,2));let a=(0,Xt.readdirSync)(Js).map(c=>({f:c,at:(0,Xt.statSync)((0,Xs.join)(Js,c)).mtimeMs})).sort((c,l)=>l.at-c.at);for(let c of a.slice(gy*2))try{(0,Xt.rmSync)((0,Xs.join)(Js,c.f),{force:!0})}catch{}}catch{}}async function Ay(e,t,n,r,s){let o=Ra(e),a=ht.now(),c=Lf(s.config,r.kw,r.days,r.adds,new Date(a)),l=Sl(c);ut.add(o),Ur(o,{name:"Разовый поиск «"+r.kw+"»",by:"телеграм: "+r.user,total:l}),await Ee(t,n,"🔎 Ищу «<b>"+ue(r.kw)+"</b>» за "+Zs(r.days)+" по "+l+" источникам. Это займёт несколько минут — итог пришлю сюда. Остановить: /cancel");let d;try{d=await ht.runSearch({id:o,name:"Разовый поиск «"+r.kw+"»",config:c},{onStep:i(w=>Vr(o,w),"onStep"),stopping:i(()=>Gr(o),"stopping")})}catch(w){await Ee(t,n,"⚠️ Поиск «"+ue(r.kw)+"» сорвался: "+ue(String(w&&w.message||w)));return}finally{ut.delete(o),Kr(o)}let p=d&&d.rows||[],f=d&&d.log||[],u=f.find(w=>w.site==="(остановлен)");My(a,r.kw,p,f,{days:r.days,by:r.user,project:s.name,added:r.adds});let m=(u?"⏹ Поиск «"+ue(r.kw)+"» остановлен: "+ue(u.note.replace(/^сбор остановлен человеком: /,""))+`.

`:"")+(p.length?"✅ «<b>"+ue(r.kw)+"</b>» за "+Zs(r.days)+": найдено <b>"+p.length+"</b> (источников "+l+", "+kl(ht.now()-a)+`).
Больше всех: `+ue(Tf(p)):"«<b>"+ue(r.kw)+"</b>» за "+Zs(r.days)+": ничего не нашлось (источников "+l+", "+kl(ht.now()-a)+").");p.length&&(m+=`

`+xl(p.slice(0,xn)),p.length>xn&&(m+=`

…и ещё `+(p.length-xn)+" — в файле ниже.")),m.length>4e3&&(m=m.slice(0,3990)+"…"),await Ee(t,n,m),p.length&&await nl(t.token,n,"поиск "+Tl(r.kw)+" "+Ml(a)+".csv","\uFEFF"+lr(p),"Все "+p.length+" — таблицей")}async function zy(e,t,n,r){let s=await ht.runNow(e,"телеграм: "+r);s.code===200?await Ee(t,n,"✅ Сбор закончен: найдено "+(s.found!=null?s.found:"—")+", из них новых "+(s.added||0)+". Новое ушло сюда по ходу сбора."):await Ee(t,n,"⚠️ Сбор не состоялся: "+ue(s.error||"причина не названа"))}function zf(){let e=Wr()[0];return e?"Сейчас идёт сбор «"+ue(e.name)+"»"+(e.total?" ("+e.done+" из "+e.total+")":"")+". Дождитесь конца — ход видно в /status.":"Сейчас уже идёт сбор."}async function kf(e,t,n,r,s,o){let a=r.chat.id;switch(s){case"start":case"help":return Ee(t,a,Ty);case"iam":{if(r.chat.type!=="private")return Ou(e),Ee(t,a,"Код владельца отправляют мне в <b>личные сообщения</b>, а не в общий чат. Этот код я уже заменил — новый смотрите в кабинете.");let c=String(r.from.id),l=vl.get(c)||{n:0,at:ht.now()};if(ht.now()-l.at>3600*1e3&&(l.n=0,l.at=ht.now()),l.n>=my)return Ee(t,a,"Слишком много неверных кодов. Попробуйте через час.");if(!o||o!==String(t.ownerCode||""))return l.n++,vl.set(c,l),Ee(t,a,"Код не подошёл. Он в кабинете, в настройках телеграм-бота проекта.");let d=(t.owners||[]).filter(p=>String(p.id)!==c).concat([{id:r.from.id,name:bl(r.from)}]);return Lt(e,{owners:d}),vl.delete(c),Ee(t,a,"Готово: вы владелец бота проекта «"+ue(n.name)+"». Вам доступны /search, /run и /cancel — здесь и в общих чатах, где вы состоите. Администраторы этих чатов тоже смогут запускать сбор.")}case"status":{let c=Wr().filter(f=>f.id===String(e)||f.id===Ra(e)),l=Wr().filter(f=>f.id!==String(e)&&f.id!==Ra(e)),d=[];for(let f of c)d.push("⏳ Идёт: «"+ue(f.name)+"»"+(f.total?", "+f.done+" из "+f.total:"")+", найдено "+f.found+", "+kl(f.ms)+(f.stopping?" — останавливаю":"")+".");for(let f of l)d.push("Программа занята другим проектом: «"+ue(f.name)+"».");d.length||d.push("Сейчас сбор не идёт.");let p=(n.runs||[])[0];return p&&d.push("Последний сбор: "+ue(new Date(p.at).toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}))+", найдено "+(p.found||0)+", новых "+(p.added||0)+"."),d.push("Расписание: "+Ly(n.schedule)+"."),Ee(t,a,d.join(`
`))}case"today":{let c=Z(new Date(ht.now())),l=(n.items||[]).filter(u=>u.date&&Z(new Date(u.date))===c).sort((u,h)=>String(h.date).localeCompare(String(u.date))),d=Math.max(1,parseInt(o,10)||1),p=(d-1)*xn;if(!l.length)return Ee(t,a,"Сегодня в ленте проекта «"+ue(n.name)+"» материалов пока нет.");let f="Сегодня — <b>"+l.length+"</b>. Больше всех: "+ue(Tf(l))+`

`+xl(l.slice(p,p+xn),p);return l.length>p+xn&&(f+=`

Дальше: /today `+(d+1)),Ee(t,a,f.length>4e3?f.slice(0,3990)+"…":f)}case"find":{let c=o.split(",").map(p=>p.trim().toLowerCase()).filter(Boolean);if(!c.length)return Ee(t,a,"Напишите слово после команды: <code>/find КТЖ</code>. Ищу по уже собранной ленте, новый обход не делаю.");let l=(n.items||[]).filter(p=>{let f=(String(p.title||"")+" "+String(p.snippet||"")).toLowerCase();return c.some(u=>f.includes(u))}).sort((p,f)=>String(f.date||"").localeCompare(String(p.date||"")));if(!l.length)return Ee(t,a,"В собранной ленте «"+ue(o)+"» не встречается. Поискать заново по сайтам — /search.");let d="В собранной ленте — <b>"+l.length+`</b> (новый обход не делал):

`+xl(l.slice(0,xn));return l.length>xn&&(d+=`

…и ещё `+(l.length-xn)+". Все — /csv"),Ee(t,a,d.length>4e3?d.slice(0,3990)+"…":d)}case"csv":{let c=n.items||[];if(!c.length)return Ee(t,a,"Лента проекта пока пуста.");let l=await nl(t.token,a,Tl(n.name)+" "+Ml(ht.now())+".csv","\uFEFF"+lr(c),"Лента «"+n.name+"»: "+c.length);return l.ok?null:Ee(t,a,"Файл не отправился: "+ue(l.err))}case"search":case"run":case"cancel":{let c=await ky(t,r);if(!c.ok)return Ee(t,a,c.why);if(s==="cancel"){let p=[String(e),Ra(e)].filter(f=>Xo(f));return Ee(t,a,p.length?"⏹ Останавливаю: дочитаю текущий источник и остановлюсь. Найденное сохранится.":"Сейчас по этому проекту ничего не собирается.")}if(s==="run"){let p=ht.blocked();if(p)return Ee(t,a,ue(p));if(ut.size)return Ee(t,a,zf());let f=n.config||{};return String(f.keyword||"").trim()?(await Ee(t,a,"▶ Запускаю сбор «"+ue(n.name)+"»: "+Sl(f)+" источников. Находки пойдут сюда по ходу, итог пришлю в конце. Остановить: /cancel"),xf(zy(e,t,a,bl(r.from)).catch(()=>{})),null):Ee(t,a,"У проекта не задан запрос — настройте его в кабинете.")}let l={step:"kw",kw:"",days:null,adds:{sites:[],facebook:[]},prompts:new Set,at:ht.now(),user:bl(r.from)};Hn.set(Ll(e,a,r.from.id),l);let d=yy(o);return d.kw&&(l.kw=d.kw.slice(0,200)),d.days&&(l.days=d.days),l.kw?l.days?(l.step="ready",Na(t,r,l,n)):(l.step="days",Af(t,r,l)):Mf(t,r,l)}default:return null}}async function Dy(e,t,n,r,s){let o=String(r.text||"").trim();if(s.at=ht.now(),s.step==="kw")return o?(s.kw=o.slice(0,200),s.step="days",Af(t,r,s)):Mf(t,r,s);if(s.step==="days"){let a=Sf(o);return a?(s.days=a,s.step="ready",Na(t,r,s,n)):Ee(t,r.chat.id,"Нужно число от 1 до "+Qs+". Или нажмите кнопку.")}if(s.step==="ready"){if(!/^\+/.test(o))return Ee(t,r.chat.id,"Чтобы добавить источник, начните ответ с «+», например: <code>+ t.me/kanal</code>. Или нажмите «▶ Запустить».");let a=by(o),c=wf-s.adds.sites.length-s.adds.facebook.length,l=[...a.sites.map(f=>["sites",f]),...a.facebook.map(f=>["facebook",f])].filter(([f,u])=>!s.adds[f].includes(u)),d=l.slice(0,Math.max(0,c));for(let[f,u]of d)s.adds[f].push(u);let p=[];return d.length&&p.push("Добавил: "+ue(d.map(f=>f[1]).join(", "))+"."),a.bad.length&&p.push("Не понял, что это за источник: "+ue(a.bad.join(", "))+". Нужен адрес сайта, t.me/канал или facebook.com/профиль."),l.length>d.length&&p.push("Больше "+wf+" источников к разовому поиску не добавляю — для такого лучше завести проект в кабинете."),!d.length&&!a.bad.length&&l.length===d.length&&p.push("Эти источники уже есть."),Na(t,r,s,n,p.join(`
`))}return null}async function Cy(e,t,n,r){let s=Ll(e,r.chat.id,r.from.id),o=Hn.get(s);if(!o||!o.prompts.has(r.messageId)){let a=[...Hn.values()].some(c=>c.prompts.has(r.messageId));await an(t,r.id,a?"Это поиск другого участника. Начните свой: /search":"Этот поиск уже неактуален. Начните заново: /search");return}if(o.at=ht.now(),r.data.startsWith("sd:")){let a=Sf(r.data.slice(3));if(!a||o.step!=="days"){await an(t,r.id);return}return o.days=a,o.step="ready",await an(t,r.id,Zs(a)),await yl(t,r.chat.id,r.messageId),Na(t,r,o,n)}if(r.data==="sx")return Hn.delete(s),await an(t,r.id,"Отменено"),await yl(t,r.chat.id,r.messageId),Ee(t,r.chat.id,"Поиск отменён.");if(r.data==="sr"){if(o.step!=="ready"){await an(t,r.id);return}let a=ht.blocked();return a?(await an(t,r.id,"Не могу"),Ee(t,r.chat.id,ue(a))):ut.size?(await an(t,r.id,"Занято"),Ee(t,r.chat.id,zf()+" Потом нажмите «▶ Запустить» ещё раз.")):(Hn.delete(s),await an(t,r.id,"Запускаю"),await yl(t,r.chat.id,r.messageId),xf(Ay(e,t,r.chat.id,o,n).catch(()=>{})),null)}await an(t,r.id)}async function Ry(e,t){let n=lt(e),r=We(e);if(!r||!n.token||!n.enabled||!_t(r.config||{}).bot)return;let s=ht.now();for(let[d,p]of Hn)s-p.at>fy&&Hn.delete(d);let o=n.bot||"";if(!o){let d=await ts(n.token);d.ok&&(o=d.bot,Lt(e,{bot:d.bot}))}let a=new Map,c=i(async d=>{let p=String(d.id);return a.has(p)||a.set(p,await ns(lt(e),d,s)),a.get(p)},"gate"),l=new Map;for(let d of t)try{if(d.kind==="cb"){if(!(await c(d.chat)).ok){await an(n,d.id,"Закрытый бот");continue}await Cy(e,lt(e),We(e),d);continue}let p=lt(e),f=We(e),u=wy(d.text,o);if(u){if(u.cmd==="iam"){await kf(e,p,f,d,u.cmd,u.args),a.delete(String(d.chat.id));continue}let m=await c(d.chat);if(!m.ok){u.cmd!=="stop"&&await Ee(p,d.chat.id,vf[m.why]||vf.stranger);continue}if(d.date&&s-d.date*1e3>hy&&u.cmd!=="start"&&u.cmd!=="help"){(!l.has(d.chat.id)||d.date<l.get(d.chat.id))&&l.set(d.chat.id,d.date);continue}await kf(e,p,f,d,u.cmd,u.args);continue}let h=d.from&&Hn.get(Ll(e,d.chat.id,d.from.id));h&&(d.replyTo&&h.prompts.has(d.replyTo)||d.chat.type==="private")&&(await c(d.chat)).ok&&await Dy(e,p,f,d,h)}catch{}for(let[d,p]of l)await Ee(n,d,"Видел команду от "+xy(p)+", но программа в это время не работала (компьютер был выключен или спал). Повторите, если ещё нужно.")}function Df(){Ph(Ry),setInterval(()=>{for(let e of wn()){let t=lt(e.id);if(!t.enabled||!t.token)continue;let n=We(e.id);!n||!_t(n.config||{}).bot||ir(e.id).catch(()=>{})}},Ny)}var Xt,Xs,Qs,py,xn,wf,hy,fy,my,Js,gy,ht,bf,xf,Sl,bl,vy,yf,an,yl,xy,kl,Zs,Sy,vf,Ty,Hn,Ll,vl,Ra,Tl,Ml,Ny,Cf=ee(()=>{Xt=require("node:fs"),Xs=require("node:path");Dt();rs();Fs();Hs();qs();Ws();qr();gl();wl();$s();Zn();St();vt();Qs=30,py=[1,3,7,14,30],xn=10,wf=10,hy=300*1e3,fy=900*1e3,my=5,Js=(0,Xs.join)(Te,"searches"),gy=30,ht={runSearch:i((e,t)=>Br(e,null,t),"runSearch"),runNow:Ca,blocked:i(()=>os(),"blocked"),now:i(()=>Date.now(),"now")},bf=new Set,xf=i(e=>(bf.add(e),e.finally(()=>bf.delete(e)),e),"track");i(wy,"parseCommand");i(by,"parseAdds");i(Sf,"parseDays");i(yy,"parseSearchArgs");i(Lf,"searchConfig");Sl=i(e=>(e.sites||[]).length+(e.facebook||[]).length+(e.youtube&&e.youtube.enabled?1:0),"sourceCount"),bl=i(e=>[e.first_name,e.last_name].filter(Boolean).join(" ")||(e.username?"@"+e.username:String(e.id||"кто-то")),"who"),vy=i(e=>e&&(e.type==="group"||e.type==="supergroup"),"isGroup"),yf=i((e,t,n)=>tl(e,t,n,ht.now()),"memberStatus");i(ky,"mayControl");i(Ee,"say");an=i((e,t,n="")=>Ht(e.token,"answerCallbackQuery",{callback_query_id:t,text:n}),"answerCb"),yl=i((e,t,n)=>Ht(e.token,"editMessageReplyMarkup",{chat_id:t,message_id:n,reply_markup:{inline_keyboard:[]}}),"dropButtons"),xy=i(e=>new Date(e*1e3).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),"hhmm"),kl=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"dur"),Zs=i(e=>e+" "+(e%10===1&&e%100!==11?"день":e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?"дня":"дней"),"daysWord"),Sy=i((e,t)=>(e=String(e||"").replace(/\s+/g," ").trim(),e.length>t?e.slice(0,t-1)+"…":e),"cut");i(xl,"itemLines");i(Tf,"topSources");i(Ly,"scheduleText");vf={"no-owner":"Это закрытый бот мониторинга. Владелец ещё не привязан, поэтому я пока никому не отвечаю и ничего не присылаю. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета.",stranger:"Это закрытый бот мониторинга. Я отвечаю только владельцу и в общих чатах, где он состоит.","no-owner-here":"В этом чате нет владельца бота — здесь я не отвечаю и ничего не присылаю."},Ty=["<b>Что я умею</b>","","/status — идёт ли сейчас сбор и когда был последний","/today — что нашлось сегодня","/find слово — поиск по уже собранному (без нового обхода)","/csv — вся лента проекта файлом","","<b>Для владельца и администраторов чата</b>","/search — разовый поиск: слово → за сколько дней (до 30) → можно добавить источник через «+» → запуск","/run — собрать по проекту прямо сейчас","/cancel — остановить сбор (найденное сохранится)","","Отписаться от рассылки — /stop."].join(`
`),Hn=new Map,Ll=i((e,t,n)=>e+"|"+t+"|"+n,"dKey"),vl=new Map;i(Mf,"askKw");i(Af,"askDays");i(Na,"askReady");Ra=i(e=>"tgsearch-"+e,"searchKey"),Tl=i(e=>String(e||"").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"поиск","fileSafe"),Ml=i(e=>{let t=new Date(e),n=i(r=>String(r).padStart(2,"0"),"p2");return Z(t)+" "+n(t.getHours())+"-"+n(t.getMinutes())},"stamp");i(My,"saveSearch");i(Ay,"searchJob");i(zy,"runJob");i(zf,"busyText");i(kf,"onCommand");i(Dy,"onDialogText");i(Cy,"onButton");i(Ry,"handleEvents");Ny=4e3;i(Df,"startBotLoop")});function Pa(e,t){jy((0,Bt.dirname)(e));let n=e+".tmp";(0,qt.writeFileSync)(n,JSON.stringify(t)),(0,qt.renameSync)(n,e)}function Oa(e,t){try{return(0,qt.existsSync)(e)?JSON.parse((0,qt.readFileSync)(e,"utf8")):t}catch{return t}}function Fe(){return Al||(Al=Object.assign(Iy(),Oa(Ef(),{})||{})),Al}function cn(){Pa(Ef(),Fe())}function $f(){cn()}function Pf(e){return String(e||"").trim()!==Ey?{ok:!1,error:"код не подошёл"}:(Fe().unlocked=!0,cn(),{ok:!0})}function Of(){return Fe().unlocked=!1,cn(),{ok:!0}}function jf(e){let t=e&&e.mode==="minutes"?"minutes":"off",n=Math.max($a,Math.min(1440,+(e&&e.everyMinutes)||30));return Fe().schedule={mode:t,everyMinutes:n},cn(),Fe().schedule}function If(e){return Fe().notify=Object.assign({},Fe().notify,e||{}),cn(),Fe().notify}function Ff(e){let t=Fe();if(!e||!e.id)return{ok:!1,error:"это не ссылка на карточку фирмы в 2ГИС"};if(t.objects.some(r=>r.id===e.id))return{ok:!1,error:"эта фирма уже отслеживается"};if(t.objects.length>=zl)return{ok:!1,error:"больше "+zl+" объектов модуль не ведёт"};let n={id:e.id,link:e,name:"",address:"",category:"",addedAt:Date.now(),watchFrom:Date.now(),harvest:{done:!1,offset:0,total:null},trustVer:Ea,card:null,lastCheck:0,lastOk:0,err:""};return t.objects.push(n),cn(),{ok:!0,object:n}}function Sn(e,t){let n=ur(e);return n?(Object.assign(n,t||{}),cn(),n):null}function Hf(e){let t=Fe(),n=t.objects.length;t.objects=t.objects.filter(r=>r.id!==String(e)),t.ai&&delete t.ai[e],cn();try{(0,qt.rmSync)(dr(e),{recursive:!0,force:!0})}catch{}return t.objects.length<n}function Uf(e,t,n=Date.now()){if(!t)return!1;let r=Ia(e),s=r[r.length-1];return s&&s.rating===t.rating&&s.reviewsCount===t.reviewsCount&&s.ratingsCount===t.ratingsCount&&n-s.at<6*3600*1e3?!1:(r.push({at:n,rating:t.rating,reviewsCount:t.reviewsCount,ratingsCount:t.ratingsCount}),Pa((0,Bt.join)(dr(e),"history.json"),r.slice(-Oy)),!0)}function Vf(e,t){if(!t||!t.length)return 0;let n=fr(e),r=new Set(n.map(o=>o.key)),s=0;for(let o of t)r.has(o.key)||(n.push(o),r.add(o.key),s++);return Bf(e,n),s}function no(e,t){let n=new Set(t);if(!n.size)return 0;let r=fr(e),s=0;for(let o of r)n.has(o.key)&&!o.sent&&(o.sent=Date.now(),s++);return Bf(e,r),s}function Bn(e,t,{watchFrom:n=0,now:r=Date.now(),seenMark:s=0}={}){let o=Object.assign({},e||{}),a=[];for(let c of t||[]){if(!c||!c.id)continue;let l=o[c.id];if(!l){o[c.id]={...c,seenAt:r,...s?{seenIn:s}:{}};let p=Fy(c.created);p!=null&&p>=n&&a.push(eo("new",c,r));continue}let d={...l,...c,seenAt:l.seenAt||r,...s?{seenIn:s}:{}};delete d.gone,l.rating!=null&&c.rating!=null&&l.rating!==c.rating?a.push(eo("rating",c,r,{from:l.rating})):c.text!==l.text&&(c.edited||"")!==(l.edited||"")&&a.push(eo("edited",c,r,{prevText:l.text})),!l.answer&&c.answer&&a.push(eo("answer",c,r)),l.rated!==!1&&c.rated===!1&&a.push(eo("unrated",c,r)),o[c.id]=d}return{merged:o,events:a}}function eo(e,t,n,r={}){let s=e==="rating"?t.rating:e==="edited"?t.edited||"":e==="answer"&&t.answer&&t.answer.date||"";return{key:e+":"+t.id+":"+s,kind:e,at:n,review:{id:t.id,rating:t.rating,text:t.text,author:t.author,created:t.created,edited:t.edited,answer:t.answer,rated:t.rated,hideReason:t.hideReason,verified:t.verified,trust:t.trust},...r}}function Gf(e,t,n=Date.now()){if(!e||!t)return[];let r=[],s=(t.reviewsCount??0)-(e.reviewsCount??0),o=(t.ratingsCount??0)-(e.ratingsCount??0),a=e.rating!=null&&t.rating!=null&&e.rating!==t.rating,c=o-Math.max(0,s);return(a||c>0||s<0)&&r.push({key:"card:"+n,kind:"card",at:n,from:{rating:e.rating,reviewsCount:e.reviewsCount,ratingsCount:e.ratingsCount},to:{rating:t.rating,reviewsCount:t.reviewsCount,ratingsCount:t.ratingsCount},silentVotes:c>0?c:0,lostReviews:s<0?-s:0}),r}function Tt(e){let t=Fe();return t.tg=Object.assign({},t.tg||{},e||{}),t.tg.token&&!t.tg.ownerCode&&(t.tg.ownerCode=String((0,Rf.randomInt)(1e5,1e6))),cn(),t.tg}function Fa(){let e=bt();return{enabled:!!e.enabled,hasToken:!!e.token,bot:e.bot||"",borrowed:e.borrowed||"",chats:(e.chats||[]).map(t=>({id:t.id,name:t.name||"",access:t.access||""})),ownerCode:e.ownerCode||"",owners:(e.owners||[]).map(t=>t.name||String(t.id)),err:e.err||"",sentTotal:e.sentTotal||0}}function Kf(e,t){let n=Fe();return n.ai=n.ai||{},n.ai[e]=t,cn(),t}function _f(){let e=Fe();return{unlocked:!!e.unlocked,schedule:e.schedule,notify:e.notify,max:zl,minEvery:$a,everyChoices:$y,objects:e.objects.map(t=>({id:t.id,url:t.link&&t.link.url,name:t.name,address:t.address,category:t.category,card:t.card,lastCheck:t.lastCheck,lastOk:t.lastOk,err:t.err,harvest:t.harvest,addedAt:t.addedAt,unsent:to(t.id).length,notify:t.notify||null})),tg:Fa()}}var qt,Bt,Rf,zl,Ey,Ea,$a,$y,Py,Oy,Nf,Ef,dr,jy,Al,Iy,ja,qn,ur,pr,hr,qf,Ia,fr,Bf,to,Fy,bt,Wf,ro=ee(()=>{qt=require("node:fs"),Bt=require("node:path"),Rf=require("node:crypto");vt();zl=10,Ey="1979",Ea=1,$a=20,$y=[20,30,60,120,360,720],Py=1e3,Oy=5e3,Nf=i(()=>(0,Bt.join)(Te,"places"),"ROOT"),Ef=i(()=>(0,Bt.join)(Nf(),"places.json"),"MAIN"),dr=i(e=>(0,Bt.join)(Nf(),String(e).replace(/[^0-9A-Za-z_-]/g,"")),"objDir"),jy=i(e=>{try{(0,qt.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(Pa,"writeJson");i(Oa,"readJson");Al=null,Iy=i(()=>({unlocked:!1,schedule:{mode:"off",everyMinutes:30},objects:[],tg:{},ai:{},notify:{answers:!0}}),"blank");i(Fe,"state");i(cn,"save");i($f,"saveState");i(Pf,"unlock");i(Of,"lock");ja=i(()=>!!Fe().unlocked,"isUnlocked");i(jf,"setSchedule");i(If,"setNotify");qn=i(()=>Fe().objects.slice(),"listObjects"),ur=i(e=>Fe().objects.find(t=>t.id===String(e))||null,"getObject");i(Ff,"addObject");i(Sn,"updateObject");i(Hf,"removeObject");pr=i(e=>Oa((0,Bt.join)(dr(e),"reviews.json"),{})||{},"reviewsOf"),hr=i(e=>Object.values(pr(e)).filter(t=>t&&!t.gone),"liveReviews"),qf=i((e,t)=>Pa((0,Bt.join)(dr(e),"reviews.json"),t),"saveReviews"),Ia=i(e=>Oa((0,Bt.join)(dr(e),"history.json"),[])||[],"historyOf"),fr=i(e=>Oa((0,Bt.join)(dr(e),"events.json"),[])||[],"eventsOf"),Bf=i((e,t)=>Pa((0,Bt.join)(dr(e),"events.json"),t.slice(-Py)),"saveEvents");i(Uf,"addHistory");i(Vf,"addEvents");to=i(e=>fr(e).filter(t=>!t.sent),"unsentEvents");i(no,"markSent");Fy=i(e=>{let t=Date.parse(e||"");return Number.isFinite(t)?t:null},"ms");i(Bn,"diffReviews");i(eo,"ev");i(Gf,"diffCard");bt=i(()=>Fe().tg||{},"tgState");i(Tt,"setTgState");i(Fa,"tgPublic");i(Kf,"setAiReport");Wf=i(e=>(Fe().ai||{})[e]||null,"aiReport");i(_f,"publicState")});function Ha(e){let t=String(e||"").trim();if(!t)return null;let n=t.match(/(?:https?:\/\/)?(go\.2gis\.com\/[A-Za-z0-9_-]+)/i);if(n)return{short:"https://"+n[1]};let r=t.match(/(?:https?:\/\/)?((?:[a-z]+\.)?2gis\.([a-z]{2,3}))((?:\/[a-z0-9_-]+)*?)\/firm\/(\d{6,20})/i);if(!r)return null;let s=r[1].toLowerCase().replace(/^www\./,""),o=r[2].toLowerCase(),a=(r[3]||"").split("/").filter(l=>l&&!/^(search|geo|tab|branches)$/i.test(l)).pop()||"",c=r[4];return{id:c,host:s,city:a,locale:Hy(o),url:"https://"+s+(a?"/"+a:"")+"/firm/"+c}}function Hy(e){return{kz:"ru_KZ",ru:"ru_RU",kg:"ru_KG",uz:"ru_UZ",by:"ru_BY",am:"ru_AM",az:"ru_AZ",ge:"ru_GE"}[e]||"ru_KZ"}function qy(e){let t="";for(let n=0;n<e.length;n++){let r=e[n];if(r!=="\\"){t+=r;continue}let s=e[++n];if(s===void 0)break;s==="n"?t+=`
`:s==="r"?t+="\r":s==="t"?t+="	":s==="b"?t+="\b":s==="f"?t+="\f":s==="v"?t+="\v":s==="0"&&!/[0-9]/.test(e[n+1]||"")?t+="\0":s==="x"&&/^[0-9a-fA-F]{2}$/.test(e.slice(n+1,n+3))?(t+=String.fromCharCode(parseInt(e.slice(n+1,n+3),16)),n+=2):s==="u"&&/^[0-9a-fA-F]{4}$/.test(e.slice(n+1,n+5))?(t+=String.fromCharCode(parseInt(e.slice(n+1,n+5),16)),n+=4):s==="\r"&&e[n+1]===`
`?n++:s===`
`||s==="\r"||(t+=s)}return t}function Yf(e,t){let n=String(e||""),s=new RegExp("var\\s+"+t.replace(/[$]/g,"\\$")+"\\s*=\\s*JSON\\.parse\\('").exec(n);if(!s)return null;let o=s.index+s[0].length,a=o;for(;a<n.length;){if(n[a]==="\\"){a+=2;continue}if(n[a]==="'")break;a++}if(a>=n.length)return null;try{return JSON.parse(qy(n.slice(o,a)))}catch{return null}}function By(e,t){let n=e&&e.data&&e.data.entity&&e.data.entity.profile&&e.data.entity.profile[t]&&e.data.entity.profile[t].data;if(n&&String(n.id||"").split("_")[0]===t)return n;let r=null,s=i((o,a)=>{if(!(r||!o||typeof o!="object"||a>25)){if(String(o.id||"").split("_")[0]===t&&o.reviews&&typeof o.reviews=="object"&&"general_rating"in o.reviews){r=o;return}for(let c in o)s(o[c],a+1)}},"walk");return s(e,0),r}function Uy(e,t){let n=String(e||"");if(/captcha\.2gis/i.test(n))return"капча 2ГИС (проверка «вы не робот»)";if(/\/museum\b/i.test(n))return"2ГИС посчитал браузер устаревшим (страница «музей»)";let r=String(t||"").slice(0,2e4);return/captcha/i.test(r)&&!/initialState/.test(r)?"капча 2ГИС (проверка «вы не робот»)":""}function Jf(e,t,n=""){let r=Uy(n,e);if(r)return{ok:!1,why:r};let s=Yf(e,"__customcfg"),o=Yf(e,"initialState");if(!o)return{ok:!1,why:"на странице нет данных карточки — 2ГИС поменял устройство страницы или не отдал её целиком"};let a=By(o,String(t));if(!a)return{ok:!1,why:"на странице нет карточки с номером "+t+" — возможно, фирма закрыта или ссылка ведёт на другую"};let c=a.reviews||{},l=(String(e).match(/<title>([^<]*)<\/title>/)||[])[1]||"",d=(a.rubrics||[]).find(p=>p&&p.kind==="primary")||(a.rubrics||[])[0];return{ok:!0,id:String(t),name:String(a.name||a.name_ex&&a.name_ex.primary||"").trim(),address:String(a.address_name||"").trim(),category:String(d&&d.name||"").trim(),title:l.replace(/\s+—\s*2ГИС\s*$/,"").trim(),rating:Rt(c.general_rating),reviewsCount:Rt(c.general_review_count),ratingsCount:Rt(c.general_review_count_with_stars),orgId:a.org?String(a.org.id||""):"",orgName:a.org?String(a.org.name||""):"",branchCount:a.org?Rt(a.org.branch_count):null,orgRating:Rt(c.org_rating),reviewKey:s&&s.reviewApiKey?String(s.reviewApiKey):"",reviewApi:s&&s.reviewApi3Url?String(s.reviewApi3Url):"https://public-api.reviews.2gis.com/3.0/"}}function Xf({api:e,id:t,key:n,locale:r="ru_KZ",offset:s=0,limit:o=ft}){let a=String(e||"https://public-api.reviews.2gis.com/3.0/").replace(/\/?$/,"/"),c=new URLSearchParams({limit:String(Math.min(ft,Math.max(1,o))),offset:String(Math.max(0,s)),is_advertiser:"false",fields:"meta.branch_rating,meta.branch_reviews_count,meta.total_count,reviews.hiding_reason,reviews.trust_factors",sort_by:"date_edited",key:String(n||""),locale:r});return a+"branches/"+encodeURIComponent(String(t))+"/reviews?"+c.toString()}function Zf({api:e,key:t,locale:n="ru_KZ",reviewId:r}){let s=String(e||"https://public-api.reviews.2gis.com/3.0/").replace(/\/?$/,"/"),o=new URLSearchParams({fields:"reviews.hiding_reason,reviews.trust_factors",key:String(t||""),locale:n});return s+"reviews/"+encodeURIComponent(String(r))+"?"+o.toString()}function Qf(e,t=200){let n=e;if(typeof e=="string")try{n=JSON.parse(e)}catch{return{ok:!1,why:"2ГИС ответил не данными"}}if(!n||typeof n!="object")return{ok:!1,why:"2ГИС ответил пустотой"};if(n.error_code==="REVIEW_NOT_FOUND")return{ok:!0,notFound:!0};if(n.error_code||n.code&&n.code>=400||t>=400)return{ok:!1,why:"2ГИС отказал: "+(n.message||n.error_code||n.code||"HTTP "+t)};let r=em(n.review);return r?{ok:!0,review:r,branch:n.review&&n.review.object?String(n.review.object.id||""):""}:{ok:!1,why:"2ГИС ответил без отзыва"}}function em(e){if(!e||e.id==null)return null;let t=e.official_answer&&e.official_answer.text?{text:String(e.official_answer.text),date:Cl(e.official_answer.date_created)}:null,n=e.user||{};return{id:String(e.id),created:Cl(e.date_created),edited:Cl(e.date_edited),rating:Rt(e.rating),text:String(e.text||"").trim(),author:String(n.name||[n.first_name,n.last_name].filter(Boolean).join(" ")||"").trim(),authorReviews:Rt(n.reviews_count),answer:t,rated:e.is_rated!==!1,hidden:!!e.is_hidden,hideReason:e.is_rated===!1||e.is_hidden?String(e.hiding_reason||"").trim():"",likes:Rt(e.likes_count)||0,comments:Rt(e.comments_count)||0,photos:Array.isArray(e.media)?e.media.length:0,provider:String(e.provider||"2gis"),...Vy(e)}}function Vy(e){let t=e&&e.trust_factors,n=t&&Array.isArray(t.factors)?t.factors:[];if(!!!(n.length||t&&t.trust_info&&t.trust_info.confirmed_caption))return{verified:!1};let s=n.map(o=>Rt(o&&o.visits_count)).filter(Number.isFinite);return{verified:!0,trust:String(t.trust_info&&t.trust_info.caption||n[0]&&n[0].caption||"").trim(),visits:s.length?Math.max(...s):null}}function tm(e){let t=e;if(typeof e=="string")try{t=JSON.parse(e)}catch{return{ok:!1,why:"2ГИС ответил не данными"}}if(!t||typeof t!="object")return{ok:!1,why:"2ГИС ответил пустотой"};if(t.error_code||t.code&&t.code>=400)return{ok:!1,why:t.error_code==="FORBIDDEN"?"ключ к отзывам не подошёл (2ГИС его сменил)":"2ГИС отказал: "+(t.message||t.error_code||t.code),forbidden:t.error_code==="FORBIDDEN"||t.code===403};let n=t.meta||{};return{ok:!0,meta:{rating:Rt(n.branch_rating),count:Rt(n.branch_reviews_count),total:Rt(n.total_count),next:!!n.next_link},reviews:(Array.isArray(t.reviews)?t.reviews:[]).map(em).filter(Boolean)}}var so,Rt,ft,Cl,qa=ee(()=>{i(Ha,"parseFirmLink");i(Hy,"localeOf");so=i(e=>e&&e.url?e.url+"/tab/reviews":"","reviewsPageUrl");i(qy,"unescapeJs");i(Yf,"jsonVar");Rt=i(e=>typeof e=="number"&&Number.isFinite(e)?e:e!=null&&e!==""&&Number.isFinite(+e)?+e:null,"num");i(By,"findProfile");i(Uy,"blockedPage");i(Jf,"parseFirmPage");ft=50;i(Xf,"reviewsUrl");Cl=i(e=>{let t=Date.parse(e);return Number.isFinite(t)?new Date(t).toISOString():null},"iso");i(Zf,"reviewUrl");i(Qf,"parseOneReview");i(em,"normReview");i(Vy,"trustOf");i(tm,"parseReviews")});function am(e){if(!e||!e.answer||!e.answer.date||!e.created)return null;let t=Date.parse(e.answer.date)-Date.parse(e.created);return Number.isFinite(t)?Math.max(0,t)/Nl:null}function Gy(e){let t=e.filter(Number.isFinite).sort((r,s)=>r-s);if(!t.length)return null;let n=t.length>>1;return t.length%2?t[n]:(t[n-1]+t[n])/2}function Ln(e){let t=e.filter(r=>r.answer),n=t.map(am).filter(Number.isFinite);return{count:e.length,answered:t.length,share:e.length?Math.round(t.length/e.length*100):null,medianH:Gy(n),in24:n.filter(r=>r<=24).length,in72:n.filter(r=>r<=72).length}}function mr(e,{now:t=Date.now(),first:n=null}={}){e=Math.max(0,Math.floor(+e||0));let r=new Date(t);r.setHours(12,0,0,0);let s=Z(r),o=s.slice(0,7),a=[],c;if(e&&e<=31){c="day";for(let d=e-1;d>=0;d--){let p=new Date(r);p.setDate(r.getDate()-d);let f=Z(p);a.push({from:f,to:f})}}else if(e&&e<=120){c="week";let d=Math.ceil(e/7);for(let p=d-1;p>=0;p--){let f=new Date(r);f.setDate(r.getDate()-p*7);let u=new Date(f);u.setDate(f.getDate()-6),a.push({from:Z(u),to:Z(f)})}}else if(e){c="month";let d=Math.max(1,Math.round(e/30.4));for(let p=Rl(o,-(d-1));p<=o;p=Rl(p,1))a.push({from:p+"-01",to:nm(p)})}else{let d=n!=null&&Number.isFinite(+n)?Z(new Date(+n)).slice(0,7):o;if((+o.slice(0,4)-+d.slice(0,4))*12+(+o.slice(5,7)-+d.slice(5,7))+1>24){c="year";for(let f=+d.slice(0,4);f<=+o.slice(0,4);f++)a.push({from:f+"-01-01",to:f+"-12-31"})}else{c="month";for(let f=d;f<=o;f=Rl(f,1))a.push({from:f+"-01",to:nm(f)})}}let l=e?(()=>{let d=Wy(a[0].from);return d.setHours(0,0,0,0),d.getTime()})():-1/0;return{kind:c,since:l,list:a}}function im(e,t){let n=e.map(r=>({...r,items:[]}));for(let r of t){if(!r.created)continue;let s=Z(new Date(r.created));for(let o=n.length-1;o>=0;o--)if(n[o].from<=s&&s<=n[o].to){n[o].items.push(r);break}}return n}function _y(e,t){return im(t,e).map(n=>{let r=Ln(n.items);return{from:n.from,to:n.to,neg:r.count,answered:r.answered,medianH:r.medianH}})}function lm(e,{now:t=Date.now(),days:n=0}={}){let r=(e||[]).filter(c=>c&&c.rated!==!1&&c.rating>=1&&c.rating<=5),s=mr(n,{now:t,first:cm(r)}),o=r.filter(c=>Date.parse(c.created||"")>=s.since),a=im(s.list,o).map(c=>({from:c.from,to:c.to,count:c.items.length,good:c.items.filter(l=>l.rating>=4).length,mid:c.items.filter(l=>l.rating===3).length,bad:c.items.filter(l=>l.rating<=2).length,sum:c.items.reduce((l,d)=>l+d.rating,0)}));return{days:Math.max(0,Math.floor(+n||0)),kind:s.kind,points:a}}function oo(e,{now:t=Date.now(),days:n=0,negMax:r=3}={}){r=[2,3,4].includes(+r)?+r:3,n=Math.max(0,Math.floor(+n||0));let s=(e||[]).filter(u=>u&&u.rating>=1&&u.rating<=5),o=mr(n,{now:t,first:cm(s)}),a=s.filter(u=>Date.parse(u.created||"")>=o.since),c=a.filter(u=>u.rating<=r),l=[{key:"5",...Ln(a.filter(u=>u.rating===5))},{key:"4",...Ln(a.filter(u=>u.rating===4))},{key:"3",...Ln(a.filter(u=>u.rating===3))},{key:"1–2",...Ln(a.filter(u=>u.rating<=2))}],d={yes:Ln(c.filter(u=>u.verified===!0)),no:Ln(c.filter(u=>u.verified===!1)),unknown:c.filter(u=>typeof u.verified!="boolean").length},p=c.filter(u=>!u.answer).sort((u,h)=>String(h.created||"").localeCompare(String(u.created||""))),f=c.filter(u=>u.answer&&u.answer.date).sort((u,h)=>String(h.answer.date).localeCompare(String(u.answer.date)));return{days:n,negMax:r,kind:o.kind,total:{...Ln(a)},neg:{...Ln(c),waiting:p.length,waitingOld:p.filter(u=>t-Date.parse(u.created||"")>72*Nl).length},byStars:l,verified:d,points:_y(c,o.list),recent:f.slice(0,Yy).map(u=>om(u,t)),recentTotal:f.length,waitingList:p.slice(0,rm).map(u=>om(u,t)),waitingCut:p.length>rm}}var Nl,Ky,Rl,Wy,nm,cm,rm,Yy,sm,om,El=ee(()=>{St();Nl=36e5;i(am,"replyHours");i(Gy,"median");i(Ln,"sum");Ky=i(e=>Z(e).slice(0,7),"monthKey"),Rl=i((e,t)=>{let[n,r]=e.split("-").map(Number),s=new Date(n,r-1+t,15,12);return Ky(s)},"addMonth"),Wy=i(e=>{let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r,12)},"ld"),nm=i(e=>Z(new Date(+e.slice(0,4),+e.slice(5,7),0,12)),"lastDay");i(mr,"periodBuckets");i(im,"bucketize");i(_y,"points");cm=i(e=>{let t=1/0;for(let n of e){let r=Date.parse(n.created||"");r<t&&(t=r)}return Number.isFinite(t)?t:null},"firstMs");i(lm,"timeline");rm=300,Yy=8,sm=i((e,t)=>(e=String(e||"").trim(),e.length>t?e.slice(0,t-1).trimEnd()+"…":e),"short"),om=i((e,t)=>({id:e.id,rating:e.rating,author:e.author||"",created:e.created,verified:e.verified,text:sm(e.text,400),answer:e.answer?{text:sm(e.answer.text,700),date:e.answer.date}:null,replyH:am(e),ageH:e.created?Math.max(0,t-Date.parse(e.created))/Nl:null}),"view");i(oo,"reaction")});function br(e,t={}){let n=e&&e.notify||{},r=hm.includes(+n.remindDays)?+n.remindDays:3;return{all:n.all!==!1,answers:n.answers!==void 0?n.answers!==!1:t.answers!==!1,spikes:n.spikes!==!1,remind:n.remind===!0,remindDays:r,remindNeg:+n.remindNeg==2?2:3,remindSince:+n.remindSince||0}}function fm(e,t,n=Date.now()){let r=Object.assign({},e||{}),s=t||{};for(let o of["all","answers","spikes"])s[o]!==void 0&&(r[o]=!!s[o]);return s.remindDays!==void 0&&hm.includes(+s.remindDays)&&(r.remindDays=+s.remindDays),s.remindNeg!==void 0&&(r.remindNeg=+s.remindNeg==2?2:3),s.remind!==void 0&&(s.remind&&r.remind!==!0&&(r.remindSince=n),r.remind=!!s.remind),r}function mm(e,{now:t=Date.now(),days:n=3,negMax:r=3,since:s=0}={}){if(!s)return[];let o=[];for(let a of Ba(e)){if(a.rating>r||a.answer)continue;let c=Date.parse(a.created||"");if(!Number.isFinite(c))continue;let l=c+n*um;l<=t&&l>=s&&o.push(a)}return o.sort((a,c)=>String(a.created).localeCompare(String(c.created)))}function gm(e,{now:t=Date.now(),ready:n=!0,watchFrom:r=0}={}){if(!n)return[];let s=Z(new Date(t)),o=wr(s,-1),a=r?Z(new Date(r)):"";return Ua(e,{now:t,days:7,ready:n}).episodes.filter(c=>c.to>=o&&(!a||c.to>=a)).map(c=>({key:"spike:"+c.from,kind:"spike",at:t,episode:c}))}function ym(e,t){if(e<=0)return 1;if(!(t>0))return 0;let n=-t+e*Math.log(t)-Zy(e),r=0;for(let s=e;s<e+1e3;s++){let o=Math.exp(n);if(r+=o,s>t&&o<r*1e-12)break;n+=Math.log(t)-Math.log(s+1)}return Math.min(1,r)}function Zy(e){let t=0;for(let n=2;n<=e;n++)t+=Math.log(n);return t}function Qy(e){let t=new Map;for(let n of Ba(e)){let r=Pl(n);r&&t.set(r,(t.get(r)||0)+1)}return t}function Ua(e,{now:t=Date.now(),days:n=365,ready:r=!0}={}){let s=Ba(e);if(!r||!s.length)return{ready:!!r&&s.length>0,episodes:[]};let o=Qy(s),a=[...o.keys()].sort(),c=a[0],l=Z(new Date(t)),d=n>0?wr(l,-(n-1)):c,p=[];for(let m of a){if(m<d||m>l)continue;let w=o.get(m);if(w<Ol)continue;let g=Math.min(bm,Jy(c,m));if(g<Xy)continue;let b=wr(m,-g),x=0;for(let v of a){if(v>=m)break;v>=b&&(x+=o.get(v))}let k=(x+.5)/g,y=ym(w,k);y<wm&&p.push({day:m,count:w,usual:k,p:y})}let f=[];for(let m of p){let w=f[f.length-1];w&&wr(w.to,1)===m.day?(w.to=m.day,w.days.push(m)):f.push({from:m.day,to:m.day,days:[m]})}let u=i((m,w)=>s.filter(g=>{let b=Pl(g);return b<m&&(!w||b>=w)}),"before");return{ready:!0,episodes:f.map(m=>{let w=s.filter(y=>{let v=Pl(y);return v>=m.from&&v<=m.to}),g=u(m.from,wr(m.from,-365));g.length<20&&(g=u(m.from));let b=g.length>=Ol?dm(g):null,x=dm(w),k=x.good*2>x.count?"pos":x.bad*2>x.count?"neg":"mixed";return{from:m.from,to:m.to,count:w.length,usualPerDay:+m.days[0].usual.toFixed(2),peak:Math.max(...m.days.map(y=>y.count)),kind:k,...x,usualShares:b}}).reverse()}}function dm(e){let t=e.filter(o=>typeof o.verified=="boolean"),n=e.filter(o=>Number.isFinite(+o.authorReviews)&&+o.authorReviews>0),r=e.filter(o=>o.rating>=4).length,s=e.filter(o=>o.rating<=2).length;return{count:e.length,good:r,mid:e.length-r-s,bad:s,avg:is(e),goodShare:gr(r,e.length),badShare:gr(s,e.length),verified:t.filter(o=>o.verified).length,verifiedKnown:t.length,verifiedShare:gr(t.filter(o=>o.verified).length,t.length),firstTime:n.filter(o=>+o.authorReviews==1).length,authorsKnown:n.length,firstTimeShare:gr(n.filter(o=>+o.authorReviews==1).length,n.length),unrated:e.filter(o=>o.rated===!1).length}}function ev(e){let t=new Map;for(let s of e||[])!s||!Number.isFinite(+s.ratingsCount)||!Number.isFinite(+s.reviewsCount)||t.set(Z(new Date(s.at)),+s.ratingsCount-+s.reviewsCount);let n=[...t.keys()].sort(),r=[];for(let s=1;s<n.length;s++)wr(n[s-1],1)===n[s]&&r.push({day:n[s],delta:t.get(n[s])-t.get(n[s-1])});return r}function vm(e,{now:t=Date.now()}={}){let n=ev(e);if(n.length<$l)return{ready:!1,observedDays:n.length,need:$l};let r=Z(new Date(t)),s=wr(r,-6),o=n.filter(l=>l.day>=s).reduce((l,d)=>l+Math.max(0,d.delta),0),a=[];for(let l=$l;l<n.length;l++){let d=n.slice(Math.max(0,l-bm),l),p=(d.reduce((u,h)=>u+Math.max(0,h.delta),0)+.5)/d.length,f=n[l].delta;f>=Ol&&ym(f,p)<wm&&a.push({day:n[l].day,count:f,usualPerDay:+p.toFixed(2)})}let c=n.reduce((l,d)=>l+Math.max(0,d.delta),0)/n.length;return{ready:!0,observedDays:n.length,last7:o,usualPerWeek:+(c*7).toFixed(1),spikes:a.reverse()}}function km(e,t,{now:n=Date.now()}={}){let r=pm(t),s=r.filter(f=>f.verified===!0),o=mr(30,{now:n}).since,a=r.filter(f=>Date.parse(f.created||"")>=o),c=e||{},l=Number.isFinite(+c.ratingsCount)&&Number.isFinite(+c.reviewsCount)?Math.max(0,+c.ratingsCount-+c.reviewsCount):null,d=is(r),p=c.rating!=null&&d!=null?+(c.rating-d).toFixed(2):null;return{rating:c.rating??null,ratingsCount:c.ratingsCount??null,reviewsCount:c.reviewsCount??null,silent:l,silentShare:l!=null&&c.ratingsCount?gr(l,+c.ratingsCount):null,avgText:d,textCount:r.length,avgConfirmed:is(s),confirmedCount:s.length,avg30:is(a),count30:a.length,diff:p,verdict:p==null?"":Math.abs(p)<.1?"same":p>0?"higher":"lower"}}function xm(e,t,{now:n=Date.now(),days:r=30,negMax:s=3}={}){let o=Ba(t),a=pm(t),c=mr(r,{now:n}),l=a.filter(m=>Date.parse(m.created||"")>=c.since),d=oo(o,{now:n,days:r,negMax:s}),p=a.filter(m=>typeof m.verified=="boolean"),f=!!(e&&e.harvest&&e.harvest.done),u=Ua(o,{now:n,days:r||0,ready:f}),h=e&&e.card||{};return{id:e&&e.id,name:e&&(e.name||e.title)||"",ready:f,err:e&&e.err||"",rating:h.rating??null,reviewsCount:h.reviewsCount??null,ratingsCount:h.ratingsCount??null,avgText:is(a),count:l.length,avg:is(l),negShare:gr(l.filter(m=>m.rating<=s).length,l.length),replyShare:d.neg.count?d.neg.share:null,replyMedianH:d.neg.medianH,negCount:d.neg.count,confirmedShare:gr(p.filter(m=>m.verified).length,p.length),spikes:u.episodes.length,spikesReady:u.ready}}var um,is,gr,pm,Ba,Pl,wr,Jy,hm,wm,Ol,bm,Xy,$l,Va=ee(()=>{St();El();um=864e5,is=i(e=>e.length?+(e.reduce((t,n)=>t+n.rating,0)/e.length).toFixed(2):null,"avg"),gr=i((e,t)=>t?Math.round(e/t*100):null,"share"),pm=i(e=>(e||[]).filter(t=>t&&t.rated!==!1&&t.rating>=1&&t.rating<=5),"rated"),Ba=i(e=>(e||[]).filter(t=>t&&t.rating>=1&&t.rating<=5),"scored"),Pl=i(e=>e&&e.created&&Number.isFinite(Date.parse(e.created))?Z(new Date(e.created)):"","dayOf"),wr=i((e,t)=>{let[n,r,s]=e.split("-").map(Number);return Z(new Date(n,r-1,s+t,12))},"shiftDay"),Jy=i((e,t)=>{let[n,r,s]=e.split("-").map(Number),[o,a,c]=t.split("-").map(Number);return Math.round((Date.UTC(o,a-1,c)-Date.UTC(n,r-1,s))/um)},"daysBetween"),hm=[1,2,3,5,7];i(br,"objNotify");i(fm,"patchNotify");i(mm,"remindCandidates");i(gm,"spikeEvents");wm=1e-4,Ol=5,bm=90,Xy=30;i(ym,"poissonTail");i(Zy,"logFact");i(Qy,"dailyCounts");i(Ua,"spikes");i(dm,"signalsOf");$l=14;i(ev,"silentDaily");i(vm,"silentSummary");i(km,"ratingSummary");i(xm,"compareRow")});function av(e=Date.now()){return"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/"+(140+Math.max(0,Math.floor((e-Date.UTC(2025,8,2))/24192e5)))+".0.0.0 Safari/537.36"}async function Ka(e,{tries:t=3}={}){if(Lm)return Lm(e);let n="";for(let r=0;r<t;r++){let s=new AbortController,o=setTimeout(()=>s.abort(),Sm);try{let a=await fetch(e,{signal:s.signal,redirect:"follow",headers:{"User-Agent":av(),"Accept-Language":"ru-RU,ru;q=0.9",Accept:"text/html,application/json;q=0.9,*/*;q=0.8"}}),c=await a.text();return{ok:a.ok,status:a.status,text:c,url:a.url||e}}catch(a){if(n=a&&a.name==="AbortError"?"2ГИС не ответил за "+Math.round(Sm/1e3)+" с":Ls(a),!iv(n+" "+String(a&&a.cause&&a.cause.code)))break;await _a(2e3*(r+1))}finally{clearTimeout(o)}}return{ok:!1,status:0,text:"",url:e,err:n}}async function Tm(e){let t=Ha(e);if(!t)return null;if(!t.short)return t;let n=await Ka(t.short);return Ha(n.url||"")||Ha(n.text||"")}async function Ya(e,{now:t=Date.now()}={}){let n=ur(e);if(!n)return{ok:!1,why:"объект не найден"};let r=n.link;Sn(e,{lastCheck:t});let s=await Ka(r.url);if(!s.ok&&!s.text)return Ga(e,"карточка не открылась: "+(s.err||"HTTP "+s.status));let o=Jf(s.text,r.id,s.url);if(!o.ok){let D=/капча|музей|устаревш/.test(o.why);return Ga(e,o.why,D)}let a={rating:o.rating,reviewsCount:o.reviewsCount,ratingsCount:o.ratingsCount,at:t},c=Gf(n.card,a,t);if(Sn(e,{name:o.name,address:o.address,category:o.category,title:o.title}),!o.reviewKey)return Ga(e,"на странице не нашёлся ключ к отзывам — 2ГИС поменял устройство страницы");let l=pr(e),d=i(async D=>{cs&&await _a(Il());let z=await Ka(Xf({api:o.reviewApi,id:r.id,key:o.reviewKey,locale:r.locale,offset:D}));return!z.ok&&!z.text?{ok:!1,why:"отзывы не открылись: "+(z.err||"HTTP "+z.status)}:tm(z.text)},"pull"),p=await d(0);if(!p.ok)return Ga(e,p.why);let f=Bn(l,p.reviews,{watchFrom:n.watchFrom||0,now:t});l=f.merged,c.push(...f.events);let u={...n.harvest||{done:!1,offset:0}};if(!u.done){let D=Math.max(ft,u.offset||0),z=0,B=p.reviews.length,$=p.meta.next;for(u.total=p.meta.total??u.total??null;$&&B>=ft&&z<jl;){let Q=await d(D);if(!Q.ok){u.err=Q.why;break}f=Bn(l,Q.reviews,{watchFrom:n.watchFrom||0,now:t}),l=f.merged,c.push(...f.events),z++,D+=ft,B=Q.reviews.length,$=Q.meta.next}u.offset=D,(!$||B<ft)&&(u.done=!0,u.doneAt=t,delete u.err)}let h=n.fill?{...n.fill}:null,m=n.trustVer||0,w=Ea;if(u.done&&m<w){h=h&&h.ver===w?h:{ver:w,offset:ft};let D=0,z=p.reviews.length,B=p.meta.next;for(;B&&z>=ft&&D<jl;){let $=await d(h.offset);if(!$.ok){h.err=$.why;break}l=Bn(l,$.reviews,{watchFrom:n.watchFrom||0,now:t}).merged,D++,h.offset+=ft,z=$.reviews.length,B=$.meta.next}!h.err&&(!B||z<ft)&&(Sn(e,{trustVer:w}),h=null)}let g=n.reread?{...n.reread}:null,b=null;if(g&&u.done&&!h){let D=g.startedAt;if(l=Bn(l,p.reviews,{watchFrom:n.watchFrom||0,now:t,seenMark:D}).merged,g.phase!=="verify"){let z=0,B=p.reviews.length,$=p.meta.next;for(g.total=p.meta.total??g.total??null;$&&B>=ft&&z<jl;){let Q=await d(g.offset);if(!Q.ok){g.err=Q.why;break}l=Bn(l,Q.reviews,{watchFrom:n.watchFrom||0,now:t,seenMark:D}).merged,z++,g.offset+=ft,B=Q.reviews.length,$=Q.meta.next,g.pages=(g.pages||0)+1}!g.err&&(!$||B<ft)&&(g.verify=Object.values(l).filter(Q=>!Q.gone&&Q.seenIn!==D&&!(Date.parse(Q.created||"")>=D)).map(Q=>Q.id),g.phase="verify",g.gone=0,g.alive=0)}if(g.phase==="verify"){delete g.err;let z=0;for(;g.verify.length&&z<sv;){let B=g.verify[0];cs&&await _a(Il());let $=await Ka(Zf({api:o.reviewApi,key:o.reviewKey,locale:r.locale,reviewId:B})),Q=Qf($.text||"",$.status||0);if(!Q.ok){g.err=Q.why||($.err?"отзыв не открылся: "+$.err:"отзыв не открылся");break}Q.notFound?(l[B]={...l[B],gone:t},g.gone++):Q.branch&&Q.branch!==String(r.id)?(l[B]={...l[B],gone:t},g.gone++):(l=Bn(l,[Q.review],{watchFrom:n.watchFrom||0,now:t,seenMark:D}).merged,g.alive++),g.verify.shift(),z++}!g.err&&!g.verify.length&&(b={at:t,startedAt:D,pages:g.pages||0,gone:g.gone||0,alive:g.alive||0},g=null)}}let x=br(n,Fe().notify),k=new Set(fr(e).filter(D=>D.kind==="remind").map(D=>D.review&&D.review.id)),y=i(()=>Object.values(l).filter(D=>!D.gone),"live"),v=i(()=>x.remind?mm(y(),{now:t,days:x.remindDays,negMax:x.remindNeg,since:x.remindSince}).filter(D=>!k.has(D.id)):[],"dueNow"),L=u.done&&v().length>0,A=n.answersAt||0;if(u.done&&!(n.harvest&&n.harvest.done)||m<w&&!h&&u.done||b)A=t;else if(u.done&&!h&&(L||t-A>=tv)){let D=t-nv*864e5,z=i(_=>Math.min(..._.map(qe=>Date.parse(qe.edited||qe.created||"")).filter(Number.isFinite)),"oldest"),B=ft,$=0,Q=p.reviews.length,ze=p.meta.next,De="",et=p.reviews.length?z(p.reviews):-1/0;for(;ze&&Q>=ft&&et>=D&&$<rv;){let _=await d(B);if(!_.ok){De=_.why;break}f=Bn(l,_.reviews,{watchFrom:n.watchFrom||0,now:t}),l=f.merged,c.push(...f.events),$++,B+=ft,Q=_.reviews.length,ze=_.meta.next,et=_.reviews.length?z(_.reviews):-1/0}De||(A=t)}if(x.remind&&u.done&&(!L||A===t))for(let D of v())c.push({key:"remind:"+D.id,kind:"remind",at:t,days:x.remindDays,review:{id:D.id,rating:D.rating,text:D.text,author:D.author,created:D.created,verified:D.verified,trust:D.trust}});c.push(...gm(y(),{now:t,ready:u.done,watchFrom:n.watchFrom||0})),qf(e,l),Uf(e,a,t);let R=Vf(e,c),F=y().length;return Sn(e,{card:a,lastOk:t,err:"",blockedUntil:0,harvest:u,fill:h,answersAt:A,stored:F,reread:g,...b?{rereadDone:b}:{}}),{ok:!0,events:R,stored:F,...b?{rereadDone:b}:{}}}function Ga(e,t,n=!1){return Sn(e,{err:t,...n?{blockedUntil:Date.now()+ov}:{}}),{ok:!1,why:t,blocked:n}}function Mm(e){ao=typeof e=="function"?e:null}function Hl(e){if(yr)return{ok:!1,busy:!0,why:"идёт общая проверка всех объектов — этот объект она тоже обновит"};if(vr)return{ok:!1,busy:!0,why:"уже обновляю "+(Wa===String(e)?"этот объект":"другой объект")+" — подождите минуту"};let t=ur(e);return t?t.blockedUntil&&t.blockedUntil>Date.now()?{ok:!1,why:"2ГИС не пустил нас на прошлой проверке — пауза до "+new Date(t.blockedUntil).toLocaleTimeString("ru-RU")+", ломиться раньше значит продлить блокировку"}:(Wa=String(e),vr=(async()=>{let n;try{n=await Ya(e)}catch(r){n={ok:!1,why:String(r&&r.message||r)}}try{ao&&await ao()}catch{}return n})().finally(()=>{vr=null,Wa=null}),{ok:!0,job:vr}):{ok:!1,why:"объект не найден"}}function ql({reason:e="расписание",now:t=i(()=>Date.now(),"now")}={}){return yr||(yr=(async()=>{if(vr)try{await vr}catch{}let n=Fe(),r=t();n.round={running:!0,startedAt:r,reason:e,done:0,total:n.objects.length};let s=[];for(let o of qn()){if(o.blockedUntil&&o.blockedUntil>t()){s.push({id:o.id,ok:!1,why:"пауза после отказа 2ГИС до "+new Date(o.blockedUntil).toLocaleTimeString("ru-RU")});continue}n.round.current=o.id;let a;try{a=await Ya(o.id,{now:t()})}catch(c){a={ok:!1,why:String(c&&c.message||c)}}if(s.push({id:o.id,...a}),n.round.done++,a.blocked)break;cs&&await _a(Il())}n.lastRound={at:r,ms:t()-r,reason:e,results:s.map(o=>({id:o.id,ok:o.ok,why:o.why||"",events:o.events||0}))},n.round=null,$f();try{ao&&await ao()}catch{}return n.lastRound})().finally(()=>{yr=null;try{let n=Fe();n.round=null}catch{}}),yr)}function cv(e,t=Date.now()){if(!e||!e.unlocked||!e.schedule||e.schedule.mode!=="minutes"||!e.objects||!e.objects.length)return!1;let n=Math.max($a,+e.schedule.everyMinutes||30)*60*1e3,r=e.lastRound&&e.lastRound.at||0;return t-r>=n}function zm(){setInterval(()=>{try{cv(Fe())&&ql()}catch{}},60*1e3)}var jl,tv,nv,rv,sv,Sm,cs,ov,_a,Il,Lm,iv,yr,ao,Fl,vr,Wa,Am,Bl=ee(()=>{ro();qa();Zn();Va();ro();jl=30,tv=6*36e5,nv=45,rv=6,sv=60,Sm=2e4,cs=typeof process<"u"&&process.env&&process.env.MC_GIS_PAUSE_MS!=null?Math.max(0,+process.env.MC_GIS_PAUSE_MS):1800,ov=3600*1e3,_a=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),Il=i(()=>cs?cs+Math.floor(Math.random()*cs*.6):0,"jitter");i(av,"userAgent");Lm=null,iv=i(e=>/ECONNRESET|ECONNABORTED|UND_ERR_SOCKET|UND_ERR_CONNECT_TIMEOUT|ETIMEDOUT|socket hang up|other side closed|не удалось соединиться|оборвал/i.test(String(e)),"isReset");i(Ka,"get");i(Tm,"resolveLink");i(Ya,"checkObject");i(Ga,"fail");yr=null,ao=null;i(Mm,"setNotifier");Fl=i(()=>!!yr,"roundRunning"),vr=null,Wa=null,Am=i(()=>vr?Wa:Fe().round&&Fe().round.current||null,"busyId");i(Hl,"runOne");i(ql,"runRound");i(cv,"isDue");i(zm,"startPlacesScheduler")});function Xa(e){if(!e)return"";for(let t of wn())if(lt(t.id).token===e)return t.id;return""}async function Nm(){let e=bt();if(!e.token)return null;let t=Xa(e.token);if(t!==(e.borrowed||"")&&Tt({borrowed:t}),t){try{await ir(t)}catch{}let s=lt(t);return{token:e.token,chats:s.chats||[],owners:s.owners||[],pid:t}}let n=await Sa(e.token,e);Tt({chats:n.chats,offset:n.offset,err:n.err||""}),n.events&&n.events.length&&await $m(n.events);let r=bt();return{token:r.token,chats:r.chats||[],owners:r.owners||[],pid:""}}function uv(e,t){let n="<b>"+ue(t.name||t.title||"Фирма")+"</b>"+(t.address?" · "+ue(t.address):""),r=e.review||{},s=r.verified===!0?"✅ отзыв подтверждён"+(r.trust?" ("+r.trust+")":""):"",o=[r.author,Pt(r.edited||r.created),s].filter(Boolean).map(ue).join(" · "),a=so(t.link),c="",l="";if(e.kind==="new")c=(r.rating<=2?"🔴":r.rating===3?"🟡":"🟢")+" Новый отзыв "+kr(r.rating),l=r.text?"<i>"+ue(Un(r.text,900))+"</i>":"<i>(без текста)</i>";else if(e.kind==="rating")c="✏️ Автор изменил оценку: "+kr(e.from)+" → "+kr(r.rating),l=r.text?"<i>"+ue(Un(r.text,700))+"</i>":"";else if(e.kind==="edited")c="✏️ Автор исправил отзыв "+kr(r.rating),l="<i>"+ue(Un(r.text,700))+"</i>";else if(e.kind==="answer")c="💬 Фирма ответила на отзыв "+kr(r.rating),l=(r.text?"Отзыв: <i>"+ue(Un(r.text,300))+`</i>
`:"")+"Ответ: <i>"+ue(Un(r.answer&&r.answer.text,500))+"</i>";else if(e.kind==="unrated")c="🚫 2ГИС не учитывает отзыв в рейтинге "+kr(r.rating),l=(r.text?"<i>"+ue(Un(r.text,300))+`</i>
`:"")+(r.hideReason?"Причина: "+ue(Un(r.hideReason,400)):"");else if(e.kind==="remind")c="⏰ Плохой отзыв без ответа уже "+e.days+" "+Em(e.days)+" "+kr(r.rating),l=r.text?"<i>"+ue(Un(r.text,700))+"</i>":"<i>(без текста)</i>";else{if(e.kind==="spike")return pv(e,n,so(t.link));if(e.kind==="card"){let d=e.from||{},p=e.to||{},f=[];d.rating!==p.rating&&f.push("рейтинг "+d.rating+" → <b>"+p.rating+"</b>"),d.reviewsCount!==p.reviewsCount&&f.push("отзывов "+d.reviewsCount+" → "+p.reviewsCount),d.ratingsCount!==p.ratingsCount&&f.push("оценок "+d.ratingsCount+" → "+p.ratingsCount),c="📊 Изменилась карточка: "+f.join(" · ");let u=[];e.silentVotes&&u.push("оценок без текста: +"+e.silentVotes),e.lostReviews&&u.push("отзывов стало меньше на "+e.lostReviews+" — похоже, часть удалили или скрыли"),l=u.join(`
`)}}return[c,n,e.kind==="card"?"":o,l,a,"<i>"+Ja+"</i>"].filter(Boolean).join(`
`)}function pv(e,t,n){let r=e.episode||{},s=r.usualShares||{},o=r.from===r.to?"за день":"за "+Rm(r.from,r.to)+" "+Em(Rm(r.from,r.to)),a=r.kind==="pos"?"хороших":r.kind==="neg"?"плохих":"",c="⚠️ Всплеск "+(a?a+" ":"")+"отзывов: "+r.count+" "+o+" (обычно ~"+Dm(r.usualPerDay)+" в день)",l=["Оценки: хороших "+r.good+", средних "+r.mid+", плохих "+r.bad+(r.avg!=null?" · средняя ★"+Dm(r.avg):""),r.verifiedKnown?"Подтверждено: "+Cm(r.verified,r.verifiedKnown,r.verifiedShare,s.verifiedShare):"",r.authorsKnown?"Пишут впервые: "+Cm(r.firstTime,r.authorsKnown,r.firstTimeShare,s.firstTimeShare):"",r.unrated?"2ГИС не учёл в рейтинге: "+r.unrated:"","<i>Всплеск — не обязательно накрутка: бывают акции, праздники, скандалы. Признаки выше — для сравнения с обычным.</i>"];return[c,t,l.filter(Boolean).join(`
`),n,"<i>"+Ja+"</i>"].filter(Boolean).join(`
`)}async function Za(){if(Ul)return{sent:0,skipped:"уже идёт отправка"};let e=bt();if(!e.enabled||!e.token)return{sent:0,skipped:"бот выключен"};Ul=!0;try{let t=await Nm();if(!t)return{sent:0,skipped:"нет токена"};let n=[];for(let c of t.chats)n.push({...c,access:(await ns({token:t.token,owners:t.owners},c)).ok?"ok":"no"});t.pid||Tt({chats:n});let r=n.filter(c=>c.access==="ok");if(!r.length)return{sent:0,skipped:t.owners.length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let s=0,o=lv;for(let c of qn()){let l=to(c.id),d=br(c,Fe().notify),p=i(m=>!d.all||m.kind==="answer"&&!d.answers||m.kind==="spike"&&!d.spikes||m.kind==="remind"&&!d.remind,"off"),f=l.filter(p).map(m=>m.key);f.length&&no(c.id,f);let u=l.filter(m=>!p(m)).slice(0,o),h=[];for(let m of u){let w=uv(m,c),g=!1;for(let b of r){let x=await Ht(t.token,"sendMessage",{chat_id:b.id,text:w,parse_mode:"HTML",disable_web_page_preview:!0});x.ok?g=!0:Tt({err:x.err})}g&&(h.push(m.key),s++),Ks&&await dv(Ks)}if(no(c.id,h),o-=u.length,o<=0)break}let a=bt();return Tt({sentTotal:(a.sentTotal||0)+s,lastSentAt:Date.now(),...s?{err:""}:{}}),{sent:s,chats:r.length}}catch(t){return Tt({err:String(t&&t.message||t)}),{sent:0,err:String(t&&t.message||t)}}finally{Ul=!1}}async function xr(e,t){let n=bt();return Ht(n.token,"sendMessage",{chat_id:e,text:t,parse_mode:"HTML",disable_web_page_preview:!0})}async function $m(e,t=Date.now()){for(let n of e||[])try{if(n.kind!=="msg")continue;let r=String(n.text||"").trim().match(/^\/([a-z]+)(?:@\S+)?\s*(.*)$/i);if(!r)continue;let s=r[1].toLowerCase(),o=r[2].trim(),a=bt();if(s==="iam"){if(n.chat.type!=="private"){Tt({ownerCode:String(Math.floor(1e5+Math.random()*9e5))}),await xr(n.chat.id,"Код отправляют в <b>личные сообщения</b>. Этот код я уже заменил — новый в кабинете.");continue}let l=String(n.from.id),d=Vl.get(l)||{n:0,at:t};if(t-d.at>3600*1e3&&(d.n=0,d.at=t),d.n>=5){await xr(n.chat.id,"Слишком много неверных кодов. Попробуйте через час.");continue}if(!o||o!==String(a.ownerCode||"")){d.n++,Vl.set(l,d),await xr(n.chat.id,"Код не подошёл. Он в кабинете, в разделе «Мониторинг репутации».");continue}let p=[n.from.first_name,n.from.last_name].filter(Boolean).join(" ")||(n.from.username?"@"+n.from.username:l);Tt({owners:(a.owners||[]).filter(f=>String(f.id)!==l).concat([{id:n.from.id,name:p}])}),Vl.delete(l),await xr(n.chat.id,"Готово: вы владелец бота модуля «"+Ja+"». Новые отзывы и изменения рейтинга будут приходить сюда и в общие чаты, где вы состоите.");continue}if(s==="stop")continue;if(!(await ns(bt(),n.chat,t)).ok){await xr(n.chat.id,fv);continue}if(s==="start"||s==="help"){await xr(n.chat.id,hv);continue}if(s==="status"){let l=qn().map(d=>"• <b>"+ue(d.name||d.id)+"</b>: "+(d.card?"★ "+d.card.rating+", отзывов "+d.card.reviewsCount+", оценок "+d.card.ratingsCount:"ещё не проверяли")+(d.err?" — ⚠️ "+ue(d.err):""));await xr(n.chat.id,l.length?l.join(`
`):"Объектов пока нет — добавьте их в кабинете.")}}catch{}}function Pm(){setInterval(async()=>{try{let e=bt();if(!ja()||!e.enabled||!e.token||Xa(e.token))return;let t=await Sa(e.token,e);Tt({chats:t.chats,offset:t.offset,err:t.err||""}),t.events&&t.events.length&&await $m(t.events)}catch{}},5e3)}async function Om(){let e=bt();if(!e.token)return{ok:!1,error:"сначала вставьте токен бота"};let t=await ts(e.token);return t.ok?(Tt({bot:t.bot,err:""}),await Nm(),{ok:!0}):(Tt({err:t.err}),{ok:!1,error:t.err})}var Ja,lv,dv,kr,Un,Em,Dm,Cm,Rm,Ul,Vl,hv,fv,Gl=ee(()=>{ro();Dt();rs();St();qa();Va();Ja="Мониторинг репутации",lv=30,dv=i(e=>new Promise(t=>setTimeout(t,e)),"sleep");i(Xa,"borrowedFrom");i(Nm,"source");kr=i(e=>e>=1&&e<=5?"★".repeat(e)+"☆".repeat(5-e):"","stars"),Un=i((e,t)=>(e=String(e||"").replace(/\s+/g," ").trim(),e.length>t?e.slice(0,t-1)+"…":e),"clip");i(uv,"formatEvent");Em=i(e=>{e=Math.abs(e)%100;let t=e%10;return e>10&&e<20?"дней":t===1?"день":t>=2&&t<=4?"дня":"дней"},"dn"),Dm=i(e=>String(e).replace(".",","),"num"),Cm=i((e,t,n,r)=>e+" из "+t+(n!=null?" ("+n+"%"+(r!=null?"; обычно "+r+"%":"")+")":""),"ofUsual");i(pv,"formatSpike");Rm=i((e,t)=>Math.round((Date.parse(t+"T12:00:00Z")-Date.parse(e+"T12:00:00Z"))/864e5)+1,"daysSpan"),Ul=!1;i(Za,"notifyPlaces");Vl=new Map,hv="Я бот модуля «"+Ja+`»: присылаю новые отзывы 2ГИС, изменённые оценки, ответы фирм и изменения рейтинга.
/status — рейтинг и отзывы по всем объектам.`,fv="Это закрытый бот. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета (раздел «Мониторинг репутации»).";i(xr,"say");i($m,"handleEvents");i(Pm,"startPlacesBotLoop");i(Om,"checkPlacesBot")});function jm(e){if(e.length<5||yv.has(e)||/(ние|тие|вие|сие|ьие)$/.test(e))return null;for(let t of gv){if(!e.endsWith(t))continue;let n=e.slice(0,-t.length);return n.length<3||bv.has(n)?null:{stem:n,sure:Im.includes(t)}}return null}function Qa(e,{top:t=60,minReviews:n=2}={}){let r=(e||[]).filter(m=>m&&m.text),s=new Map,o=[],a=[],c=new Map,l=i((m,w,g,b=1)=>{let x=s.get(m)||{forms:new Map,docs:new Set};x.forms.set(w,(x.forms.get(w)||0)+b),x.docs.add(g),s.set(m,x)},"add");r.forEach((m,w)=>{let g=xv(m.text);g.forEach((b,x)=>{if(vv.has(b)){(c.get(b)||c.set(b,new Set).get(b)).add(w);return}if(Kl.has(g[x+1]||"")||Kl.has(g[x+2]||"")||Kl.has(g[x-1]||""))return;let k=jm(b);k&&k.sure?l(k.stem,b,w):k?o.push([w,b,k.stem]):b.length>=5&&a.push([w,b])})});let d=new Map;for(let[m,,w]of o)(d.get(w)||d.set(w,new Set).get(w)).add(m);let p=i(m=>{let w=s.get(m);if(!w)return!1;let g=w.docs.size;return g>=2&&g*10>=(d.get(m)||new Set).size},"confirmed");for(let m of s.values())m.sure=m.docs.size;let f=new Map;for(let m of d.keys())f.set(m,p(m));for(let[m,w,g]of o)f.get(g)&&l(g,w,m);for(let[m,w]of a)for(let g of wv){if(!w.endsWith(g))continue;let b=w.slice(0,-g.length),x=s.get(b);if(x&&x.sure>=2){l(b,w,m,.5);break}}let u=[],h=i((m,w)=>{if(w.size<n)return;let g=0,b=0;for(let x of w){let k=r[x].rating;k>=4?g++:k!=null&&k<=3&&b++}u.push({word:m,reviews:w.size,pos:g,neg:b,tone:g+b?+((g-b)/(g+b)).toFixed(2):0})},"push");for(let[,m]of s){let w=[...m.forms.entries()].filter(([g])=>{let b=jm(g);return b&&b.sure}).sort((g,b)=>b[1]-g[1]||g[0].localeCompare(b[0]))[0];h(w?w[0]:[...m.forms.keys()][0],m.docs)}for(let[m,w]of c)h(m,w);return u.sort((m,w)=>w.reviews-m.reviews||m.word.localeCompare(w.word)).slice(0,t)}function ei(e,t="neg",{top:n=60,minHits:r=3,lift:s=1.5}={}){let o=(e||[]).filter(d=>d&&d.text&&d.rating),a=o.filter(d=>d.rating<=3).length,c=o.length-a;if(!a||!c)return Qa(o.filter(d=>t==="neg"?d.rating<=3:d.rating>=4),{top:n});let l=t==="neg"?a/o.length:c/o.length;return Qa(o,{top:1e3,minReviews:r}).map(d=>({...d,hits:t==="neg"?d.neg:d.pos})).filter(d=>d.hits>=r&&d.hits/(d.pos+d.neg)>=Math.min(.95,l*s)).sort((d,p)=>p.hits-d.hits||d.word.localeCompare(p.word)).slice(0,n).map(d=>({...d,reviews:d.hits}))}function Fm(e,{top:t=30}={}){let n=(e||[]).filter(a=>a&&a.rating),r=n.filter(a=>a.rating>=4).length,s=n.length-r,o=n.filter(a=>a.text);return{reviews:n.length,pos:r,neg:s,withText:o.length,praise:ei(o,"pos",{top:t}),blame:ei(o,"neg",{top:t})}}var Im,mv,gv,wv,bv,yv,vv,Kl,kv,xv,Hm=ee(()=>{Im=["ыми","ого","ому","ый","ий","ая","яя","ое","ые","ие","ых"],mv=["ими","его","ему","ой","ом","ем","ее","ую","юю","их","им","ым"],gv=[...Im,...mv].sort((e,t)=>t.length-e.length),wv=["о","а","ы","е"],bv=new Set("котор так эт сво мо тво наш ваш как кажд друг сам всяк некотор люб ин перв втор трет четверт пят последн следующ прошл мног цел дан одн никак нек чь должн данн".split(" ")),yv=new Set("почему потому поэтому никого никому ничего ничему впервые вообщем всего его ему ней ним ими кого кому чего чему того тому этого этому самого время более менее уже еще также тоже очень стоимость".split(" ")),vv=new Set("жақсы жаман тамаша керемет әдемі дәмді дәмсіз таза лас жылы суық ыстық салқын сапалы сапасыз қымбат арзан жылдам баяу ыңғайлы ыңғайсыз сыпайы дөрекі мейірімді кішіпейіл білікті жайлы жайсыз ұнамды нашар үздік мықты күшті тәтті ащы жұмсақ кең тар жарық қараңғы тыныш шулы көңілді қолайлы сенімді адал жауапты тиімді пайдалы зиянды керексіз ұқыпты ұқыпсыз жедел".split(" ")),Kl=new Set(["спасибо","благодарность","благодарю","рахмет","алғыс"]),kv=i(e=>e.toLowerCase().replace(/ё/g,"е"),"norm"),xv=i(e=>kv(String(e||"")).match(/[a-zа-яәғқңөұүһі]+/g)||[],"words");i(jm,"ruAdj");i(Qa,"wordCloud");i(ei,"distinctive");i(Fm,"reputationPicture")});function Sv(e){let t=Object.values(pr(e)),n=t.filter(b=>!b.gone),r=n.filter(b=>b.rated!==!1&&b.rating),s=[0,0,0,0,0];for(let b of r)s[b.rating-1]++;let o=i(b=>b.length?+(b.reduce((x,k)=>x+k.rating,0)/b.length).toFixed(2):null,"avg"),a=new Map;for(let b of r){let x=b.created?Z(new Date(b.created)).slice(0,7):"";if(!x)continue;let k=a.get(x)||{month:x,count:0,sum:0,neg:0};k.count++,k.sum+=b.rating,b.rating<=2&&k.neg++,a.set(x,k)}let c=[...a.values()].sort((b,x)=>b.month.localeCompare(x.month)).slice(-24).map(b=>({month:b.month,count:b.count,avg:+(b.sum/b.count).toFixed(2),neg:b.neg})),l=mr(30).since,d=r.filter(b=>Date.parse(b.created||"")>=l),p=Z(new Date(Date.now()-186*864e5)),f=new Map;for(let b of r){let x=b.created?Z(new Date(b.created)):"";if(!x||x<p)continue;let k=f.get(x)||{day:x,count:0,sum:0,neg:0};k.count++,k.sum+=b.rating,b.rating<=2&&k.neg++,f.set(x,k)}let u=[...f.values()].sort((b,x)=>b.day.localeCompare(x.day)),h=r.filter(b=>typeof b.verified=="boolean"),m=h.filter(b=>b.verified),w=h.filter(b=>!b.verified),g={known:h.length,of:r.length,yes:m.length,avgYes:o(m),avgNo:o(w),negYes:m.filter(b=>b.rating<=2).length,negNo:w.filter(b=>b.rating<=2).length};return{daily:u,verified:g,stored:n.length,gone:t.length-n.length,rated:r.length,unrated:n.length-r.length,answered:n.filter(b=>b.answer).length,negReply:(({count:b,answered:x,share:k})=>({count:b,answered:x,share:k,negMax:3}))(oo(n,{negMax:3}).neg),dist:s,avgAll:o(r),avg30:o(d),count30:d.length,neg30:d.filter(b=>b.rating<=2).length,months:c}}async function Bm(e,t,n,r,{json:s,readBody:o}){if(n==="/api/places"&&e.method==="GET"){let c=Fe();return c.unlocked?s(t,200,{..._f(),round:c.round||null,lastRound:c.lastRound||null,roundRunning:Fl()}):s(t,200,{unlocked:!1})}if(n==="/api/places/unlock"&&e.method==="POST"){let c=await o(e);return s(t,200,Pf(c.code))}if(!ja())return s(t,403,{error:"модуль закрыт — откройте его кодом администратора"});if(n==="/api/places/lock"&&e.method==="POST")return s(t,200,Of());if(n==="/api/places/objects"&&e.method==="POST"){let c=await o(e),l=await Tm(c.url||"");if(!l||!l.id)return s(t,400,{error:"не похоже на ссылку на карточку фирмы в 2ГИС. Нужна ссылка вида https://2gis.kz/astana/firm/70000001027712418"});let d=Ff(l);return d.ok?(Ya(l.id).catch(()=>{}),s(t,200,{ok:!0,object:qm(d.object)})):s(t,400,d)}if(n==="/api/places/check"&&e.method==="POST")return Fl()?s(t,409,{error:"проверка уже идёт"}):(ql({reason:"вручную"}).catch(()=>{}),s(t,200,{ok:!0}));if(n==="/api/places/compare"&&e.method==="GET"){let c=Math.max(0,+r.searchParams.get("days")||0),l=+r.searchParams.get("neg")||3;return s(t,200,{days:c,negMax:[2,3,4].includes(l)?l:3,rows:qn().map(d=>xm(d,hr(d.id),{days:c,negMax:l}))})}if(n==="/api/places/schedule"&&e.method==="POST"){let c=await o(e);return s(t,200,{schedule:jf(c)})}if(n==="/api/places/notify"&&e.method==="POST"){let c=await o(e);return s(t,200,{notify:If({answers:c.answers!==!1})})}if(n==="/api/places/telegram"&&e.method==="POST"){let c=await o(e),l={};if(c.enabled!==void 0&&(l.enabled=!!c.enabled),c.clearToken)Object.assign(l,{token:"",bot:"",chats:[],offset:0,owners:[],err:"",borrowed:""});else if(c.token){let f=String(c.token).trim(),u=bt();l.token=f,f!==u.token&&Object.assign(l,{chats:[],offset:0,bot:"",owners:[],err:"",borrowed:Xa(f)})}let d=bt();if(Tt(l).enabled&&!d.enabled)for(let f of qn())no(f.id,to(f.id).map(u=>u.key));return s(t,200,{ok:!0,tg:Fa()})}if(n==="/api/places/telegram/check"&&e.method==="POST"){let c=await Om();return s(t,200,{...c,tg:Fa(),borrowedName:(()=>{let l=bt().borrowed,d=l&&We(l);return d?d.name:""})()})}if(n==="/api/places/telegram/send"&&e.method==="POST")return s(t,200,await Za());let a=n.match(/^\/api\/places\/objects\/(\d{6,20})(?:\/([a-z.]+))?$/);if(a){let c=a[1],l=a[2]||"",d=ur(c);if(!d)return s(t,404,{error:"объект не найден"});if(l===""&&e.method==="DELETE")return Hf(c),s(t,200,{ok:!0});if(l==="check"&&e.method==="POST"){let p=Hl(c);return s(t,p.ok?200:409,p.ok?{ok:!0}:{error:p.why})}if(l==="reread"&&e.method==="POST"){if(!(d.harvest&&d.harvest.done))return s(t,409,{error:"первый сбор ещё идёт — он и так читает все отзывы"});d.reread||Sn(c,{reread:{startedAt:Date.now(),offset:50,phase:"read",pages:0}});let p=Hl(c);return s(t,200,{ok:!0,started:!!p.ok,note:p.ok?"":p.why})}if(l===""&&e.method==="GET")return s(t,200,{object:qm(d),stats:Sv(c),history:Ia(c).slice(-500),events:fr(c).slice(-200).reverse(),ai:Wf(c)});if(l==="reviews"&&e.method==="GET"){let p=(r.searchParams.get("stars")||"").split(",").map(Number).filter(g=>g>=1&&g<=5),f=String(r.searchParams.get("q")||"").trim().toLowerCase(),u=Object.values(pr(c)).filter(g=>r.searchParams.get("gone")==="1"?!!g.gone:!g.gone);p.length&&(u=u.filter(g=>p.includes(g.rating))),f&&(u=u.filter(g=>String(g.text||"").toLowerCase().includes(f))),r.searchParams.get("ver")==="1"&&(u=u.filter(g=>g.verified===!0));let h=r.searchParams.get("ans");h==="1"&&(u=u.filter(g=>g.answer)),h==="0"&&(u=u.filter(g=>!g.answer)),u.sort((g,b)=>String(b.edited||b.created||"").localeCompare(String(g.edited||g.created||"")));let m=Math.max(0,+r.searchParams.get("offset")||0),w=Math.max(1,Math.min(100,+r.searchParams.get("limit")||30));return s(t,200,{total:u.length,reviews:u.slice(m,m+w)})}if(l==="reaction"&&e.method==="GET")return s(t,200,oo(hr(c),{days:+r.searchParams.get("days")||0,negMax:+r.searchParams.get("neg")||3}));if(l==="signals"&&e.method==="GET"){let p=hr(c),f=r.searchParams.has("days")?Math.max(0,+r.searchParams.get("days")||0):365;return s(t,200,{rating:km(d.card,p),spikes:Ua(p,{days:f,ready:!!(d.harvest&&d.harvest.done)}),silent:vm(Ia(c)),days:f})}if(l==="notify"&&e.method==="POST"){let p=await o(e);return Sn(c,{notify:fm(d.notify,p)}),s(t,200,{notify:br(ur(c),Fe().notify)})}if(l==="timeline"&&e.method==="GET")return s(t,200,lm(hr(c),{days:+r.searchParams.get("days")||0}));if(l==="cloud"&&e.method==="GET"){let p=r.searchParams.get("g")||"all",f=hr(c),u=+r.searchParams.get("days")||0;if(u>0){let h=Date.now()-u*864e5;f=f.filter(m=>Date.parse(m.created||"")>=h)}if(p==="picture")return s(t,200,{mode:"picture",...Fm(f,{top:30})});if(p==="pos"||p==="neg"){let h=f.filter(m=>m.rating&&(p==="pos"?m.rating>=4:m.rating<=3));return s(t,200,{reviews:h.length,words:ei(f,p,{top:60}),mode:"distinctive"})}return s(t,200,{reviews:f.length,words:Qa(f,{top:60})})}if(l==="ai"&&e.method==="POST"){let p=Ze(),f=await zh({apiKey:p.geminiKey,model:p.geminiModel,firm:{...d,card:d.card},reviews:hr(c)}),u={at:Date.now(),ok:!!f.ok,text:f.ok?f.text:"",err:f.ok?"":f.err||"",model:f.model||p.geminiModel||"",used:f.used||0,total:f.total||0,truncated:!!f.truncated};return Kf(c,u),s(t,f.ok?200:502,u)}if(l==="export.csv"&&e.method==="GET"){let p=Object.values(pr(c)).sort((h,m)=>String(m.created||"").localeCompare(String(h.created||""))),f=i(h=>'"'+String(h??"").replace(/"/g,'""')+'"',"q"),u=[["дата","изменён","оценка","учтён в рейтинге","подтверждён","автор","текст","ответ фирмы","дата ответа","номер отзыва","удалён в 2ГИС"].map(f).join(",")].concat(p.map(h=>[h.created?Z(new Date(h.created)):"",h.edited?Z(new Date(h.edited)):"",h.rating,h.rated===!1?"нет":"да",h.verified===!0?"да"+(h.trust?" ("+h.trust+")":""):h.verified===!1?"нет":"не знаем",h.author,h.text,h.answer?h.answer.text:"",h.answer&&h.answer.date?Z(new Date(h.answer.date)):"",h.id,h.gone?Z(new Date(h.gone)):""].map(f).join(",")));return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":'attachment; filename="2gis-'+c+'.csv"'}),t.end("\uFEFF"+u.join(`
`))}}return s(t,404,{error:"нет такого метода"})}var qm,Um=ee(()=>{ro();Dt();Bl();Gl();Hm();ha();St();qa();El();Va();i(Sv,"objectStats");qm=i(e=>e&&{notify:br(e,Fe().notify),id:e.id,url:e.link&&e.link.url,reviewsUrl:so(e.link),name:e.name,address:e.address,category:e.category,card:e.card,fill:e.fill||null,trustVer:e.trustVer||0,answersAt:e.answersAt||0,lastCheck:e.lastCheck,lastOk:e.lastOk,err:e.err,harvest:e.harvest,stored:e.stored||0,addedAt:e.addedAt,blockedUntil:e.blockedUntil||0,reread:e.reread?{startedAt:e.reread.startedAt,phase:e.reread.phase||"read",offset:e.reread.offset||0,total:e.reread.total??null,left:(e.reread.verify||[]).length,err:e.reread.err||""}:null,rereadDone:e.rereadDone||null,busy:Am()===e.id},"publicObject");i(Bm,"handlePlaces")});function Av(e,t=null){let n=(e||[]).filter(c=>c&&c.health),r=n[0];if(!r)return t&&t.state==="broken"?Nt("broken","эталонные статьи: "+t.why):Nt("unknown","данных ещё нет — появятся после следующего прогона");let s=r.health;if(s.st==="skipped")return Nt("skipped","помечен нерабочим в пресете");if(t&&t.state==="broken")return Nt("broken","эталонные статьи: "+t.why);if(s.st==="error")return Nt("broken",ti[s.why]||"ошибка");if(Tv.has(s.why))return Nt("down",ti[s.why]);if(s.st==="needs_review")return Nt("broken",ti[s.why]||s.why);let o=8;if((s.bodyN||0)>=o){let c=n.slice(1).map(l=>l.health).filter(l=>(l.bodyN||0)>=o).map(l=>l.bodyMed);if(c.length>=2){let l=Mv(c),d=s.bodyMed;if(d*As<l)return Nt("broken","текст статей читается хуже обычного: обычно "+l+" знаков, в последнем прогоне "+d+" — ключ в тексте может не находиться");if(d>l*As)return Nt("broken","в текст статей попало лишнее: обычно "+l+" знаков, в последнем прогоне "+d+" — чужие заголовки могут давать ложные находки")}}if(s.st==="partial"||s.st==="ok_losses")return Nt("partial",ti[s.why]||"часть страниц не проверена");let a=n.slice(0,3);return a.length===3&&a.every(c=>!c.found)&&n.slice(3).some(c=>c.found>0)?Nt("quiet","раньше давал материал, а три прогона подряд — ноль; бывает и тихая неделя, но стоит открыть сайт и проверить"):t&&t.state==="watch"?Nt("ok",t.why):Nt("ok","")}function Nt(e,t){return{state:e,label:Lv[e],why:t||""}}function Gm(e,t={}){let n=new Map;for(let a of e||[])for(let c of a.log||[])!c||!c.site||/^\(.*\)$/.test(c.site)||c.channel==="facebook"||c.site==="youtube"||(n.has(c.site)||n.set(c.site,[]),n.get(c.site).push(c));let r=i(a=>String(a).toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0],"key"),s=[...n].map(([a,c])=>({site:a,...Av(c,t[r(a)]||null),found:c[0].found||0}));s.sort((a,c)=>Vm.indexOf(a.state)-Vm.indexOf(c.state)||a.site.localeCompare(c.site));let o={};for(let a of s)o[a.state]=(o[a.state]||0)+1;return{rows:s,counts:o,runs:(e||[]).length}}var Lv,Vm,Tv,ti,Mv,Km=ee(()=>{_i();Lv={ok:"здоров",partial:"прочитан не целиком",broken:"сломан",down:"недоступен",quiet:"замолчал",skipped:"пропущен",unknown:"нет данных"},Vm=["broken","down","partial","quiet","unknown","ok","skipped"],Tv=new Set(["unreachable","not_reachable","site_errors"]),ti={no_candidates:"ни одной ссылки-кандидата — похоже, сменился вход (поиск, карта, лента)",no_dates:"больше половины страниц без даты — похоже, сменилась разметка дат",entry_broken:"вход сайта (поиск, лента) ответил ошибкой — адрес устарел",moved:"материал нашёлся на другом домене — похоже, издание переехало",feed_cut:"лента канала оборвалась посреди обхода",no_stats:"движок не дошёл до разбора",site_errors:"сайт отвечал ошибками во время прогона — похоже на сбой сайта, а не на смену входа",none_in_period:"за период не прочитано ни одной статьи — входы дотягиваются только до старого",date_suspect:"дата со страницы расходится с датой в адресе — разбор берёт чужую дату",date_same:"у всех статей одна дата, день прогона — похоже, берём часы из шапки сайта",no_body:"текст статей не читается — ключ ищется только по заголовку",exception:"ошибка при обходе сайта",bad_url:"адрес источника не разобран",unreachable:"сайт не ответил ни обычным запросом, ни браузером",not_reachable:"больше половины статей не открылось (защита или таймаут)",time_budget:"упёрлись в бюджет времени",unchecked_pages:"часть страниц не проверена",budget_cap:"прочитана только часть статей периода (бюджет канала)"},Mv=i(e=>{let t=[...e].sort((n,r)=>n-r);return t[t.length>>1]},"med");i(Av,"siteHealth");i(Nt,"mk");i(Gm,"healthTable")});function Wl(e){let t=[];for(let s of er(e).slice(0,zv)){let o=jn(e,s.ts);o&&Array.isArray(o.log)&&t.push({ts:s.ts,log:o.log})}let n=cp();return{...Gm(t,n.verdicts||{}),golden:{at:n.at,hosts:n.hosts,busy:n.busy}}}var zv,Wm=ee(()=>{Dt();Km();Io();zv=6;i(Wl,"projectHealth")});var _m,ni,Dv,_l,Ym,WS,_S,Jm=ee(()=>{_m=require("node:module"),ni=require("node:path");process.env.PLAYWRIGHT_BROWSERS_PATH||(process.env.PLAYWRIGHT_BROWSERS_PATH=(0,ni.join)((0,ni.dirname)(process.execPath),"browsers"));Dv=(0,_m.createRequire)(process.execPath),_l=Dv("playwright"),Ym=_l.chromium,WS=_l.firefox,_S=_l.webkit});function Qe(e,t,n){let r=null;return Promise.race([Promise.resolve(e).catch(()=>n),new Promise(s=>{r=setTimeout(()=>s(n),t)})]).then(s=>(r&&clearTimeout(r),s))}function io(e,t,n){let r=null,s=new Promise(o=>{r=setTimeout(()=>o(Tn),t)});return Promise.race([e,s]).then(o=>(clearTimeout(r),o===Tn&&n&&Promise.resolve(e).then(n,()=>{}),o),o=>{throw clearTimeout(r),o})}function Xm(e,t=1){let r=Array.from({length:4},()=>Promise.resolve()),s=new Array(4).fill(0),o=Math.max(1,Math.min(4,t|0)),a={ops:0,busyMs:0,byHost:{},lanes:o},c=i(function(l,d,p,f,u){let h=0;for(let g=1;g<o;g++)s[g]<s[h]&&(h=g);s[h]++;let m=i(async()=>{let g=Date.now();try{return await Qe(l(h),d,Tn)}finally{let b=Math.min(Date.now()-g,d);if(a.ops++,a.busyMs+=b,u){let x=a.byHost[u]||(a.byHost[u]={ops:0,ms:0});x.ops++,x.ms+=b}s[h]--}},"run"),w=r[h].then(m,m);return r[h]=w.then(()=>{},()=>{}),w.then(g=>{if(g!==Tn)return g;try{e&&e(f,h)}catch{}return p},()=>p)},"queued");return c.stats=a,c.resetStats=()=>{a.ops=0,a.busyMs=0,a.byHost={},a.lanes=o},c.setLanes=l=>{let d=o;return o=Math.max(1,Math.min(4,l|0||1)),a.lanes=o,{was:d,now:o}},c.lanes=()=>o,c}var Tn,Yl=ee(()=>{Tn=Symbol("hung");i(Qe,"cap");i(io,"capOwn");i(Xm,"makeQueue")});function Zm(){Xl.clear(),Jl.clear()}async function ls(e,t){let n=us(t);if(!n||!e)return 0;let r=await Qe(Promise.resolve().then(()=>e.cookies(t)),5e3,null);return!r||!r.length?0:(Xl.set(n,{at:Date.now(),cookies:r}),r.length)}async function ri(e,t,n=0){let r=us(t);if(!r||!e)return 0;let s=Xl.get(r);if(!s||Date.now()-s.at>Rv)return 0;let o=n+"|"+r+"|"+s.at;if(Jl.has(o))return 0;Jl.add(o);let a=await Qe(Promise.resolve().then(()=>e.cookies(t)),5e3,null),c=new Set((a||[]).map(d=>d.name)),l=s.cookies.filter(d=>!c.has(d.name));return l.length?(await Qe(Promise.resolve().then(()=>e.addCookies(l)),5e3,null),l.length):0}async function ds(e,t=25e3,n=1500){let r=Date.now();for(;;){let s=await Qe(Promise.resolve().then(()=>e.evaluate(()=>({t:document.title||"",b:(document.body&&document.body.innerText||"").slice(0,400),c:!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait, #challenge-form, #turnstile-wrapper")}))),8e3,null);if(!s)return!1;if(!s.c&&!Nv.test(s.t+" "+s.b))return!0;if(Date.now()-r>t)return!1;await Cv(Math.min(n,Math.max(0,t-(Date.now()-r))+50))}}async function Zl(e,t,{gotoMs:n=2e4,challengeMs:r=25e3,deadline:s,lane:o=0,warmNeedMs:a=25e3,warmKeepMs:c=12e3,pollMs:l=1500}={}){let d=s||Date.now()+75e3,p=i(()=>d-Date.now(),"left"),f=(()=>{try{return e.context()}catch{return null}})();await ri(f,t,o);let u=i((b,x)=>Promise.resolve().then(()=>e.goto(b,{waitUntil:"domcontentloaded",timeout:Math.max(3e3,Math.min(x,p()))})).catch(()=>null),"go"),h=i(b=>Promise.resolve().then(()=>e.waitForTimeout(b)).catch(()=>{}),"pause"),m=await u(t,n);if(await h(Math.min(700,Math.max(0,p()))),await ds(e,Math.min(r,p()),l))return await ls(f,t),{passed:!0,resp:m,warmed:!1};let w="";try{let b=new URL(t);(b.pathname!=="/"||b.search)&&(w=b.origin)}catch{}if(!w||p()<a)return{passed:!1,resp:m,warmed:!1};if(await u(w+"/",15e3),!await ds(e,Math.min(r,p()-c),l))return{passed:!1,resp:m,warmed:!0};await ls(f,w+"/"),m=await u(t,15e3);let g=await ds(e,Math.min(r,p()),l);return g&&await ls(f,t),{passed:g,resp:m,warmed:!0}}var Cv,us,Xl,Jl,Rv,Nv,Qm=ee(()=>{Yl();Cv=i(e=>new Promise(t=>setTimeout(t,Math.max(0,e))),"sleep"),us=i(e=>{try{return new URL(String(e)).host.replace(/^www\./,"")}catch{return""}},"hostOf"),Xl=new Map,Jl=new Set,Rv=1200*1e3;i(Zm,"jarReset");i(ls,"jarPut");i(ri,"jarPrime");Nv=/just a moment|checking your browser|attention required|verifying you are human|подожд[иё]те|проверка браузера|один момент/i;i(ds,"waitOutChallenge");i(Zl,"gotoPast")});var og={};ms(og,{browserError:()=>hs,browserStats:()=>Ov,browserWindows:()=>Bv,closeBrowser:()=>ed,closeRunBrowsers:()=>Pv,openSocialLogin:()=>Yv,renderFacebook:()=>Xv,renderFetch:()=>Vv,renderScrape:()=>Uv,renderSiteSearch:()=>Kv,resetBrowserStats:()=>jv,setBrowserWindows:()=>qv});async function $v(e,t){let n={headless:!1,viewport:null,args:["--disable-blink-features=AutomationControlled","--no-default-browser-check","--no-first-run"],ignoreDefaultArgs:["--enable-automation"]},r=Ev(e,t),s=await io(Ym.launchPersistentContext(r,e?{...n,channel:"chrome"}:n),eg,a=>a.close().catch(()=>{}));if(s===Tn)throw new Error("окно не поднялось за "+eg/1e3+" с");let o=await io(s.newPage(),3e4,a=>a.close().catch(()=>{}));if(o===Tn)throw await Qe(s.close(),1e4),new Error("браузер не открыл страницу за 30 с");return await Qe(o.close(),5e3),s}async function ng(e=0){if(co.get(e))try{await co.get(e)}catch{}if(Zt.get(e))return Zt.get(e);for(let t of[!0,!1])try{let n=await $v(t,e);return n.on("close",()=>{Zt.get(e)===n&&Zt.delete(e)}),e===ps&&(nd=!1),Zt.set(e,n),t||console.log("[render] окно "+(e+1)+": channel:chrome не ожил, работаю на встроенном Chromium"),n}catch(n){si=(t?"Chrome: ":"Chromium: ")+String(n&&n.message||n).split(`
`)[0].slice(0,200)}throw new Error("браузер не запустился (ни Chrome, ни встроенный Chromium): "+si)}function lo(e,t=0){Zt.get(t)===e&&Zt.delete(t);let n=Qe(e.close(),15e3,null).then(()=>new Promise(r=>setTimeout(r,1500))).then(()=>{co.get(t)===n&&co.delete(t)});return co.set(t,n),n}async function ed(e=null){if(e!=null){let t=Zt.get(e);t&&await lo(t,e);return}await Promise.all([...Zt].map(([t,n])=>lo(n,t).catch(()=>{})))}async function Pv(){await Promise.all([...Zt].filter(([e])=>typeof e=="number"||e===ps&&!nd).map(([e,t])=>lo(t,e).catch(()=>{})))}function qv(e){let t=Mn.setLanes(e);if(t.now<t.was)for(let[n]of Zt)typeof n=="number"&&n>=t.now&&ed(n).catch(()=>{});return t.now}function Uv(e,t={}){return Mn(n=>Qv(e,t,n),Fv,{items:[],cf:!1,err:"браузер завис — окно перезапущено"},"рендер",t.host||us(e))}async function td(e=0){let t=null;for(let n=0;n<2&&!t;n++){let r;try{r=await ng(e)}catch{return null}let s=null;try{s=await io(r.newPage(),3e4,o=>o.close().catch(()=>{}))}catch(o){si="страница не открылась: "+String(o&&o.message||o).split(`
`)[0].slice(0,200)}if(!s||s===Tn){await lo(r,e);continue}t=s}return t}function Vv(e,t={}){return Mn(n=>Gv(e,t,n),Iv,{ok:!1,err:"браузер завис — окно перезапущено"},"браузер-фетч",t.host||us(e))}async function Gv(e,{timeoutMs:t=2e4,challengeMs:n=25e3,post:r=null}={},s=0){let o=await td(s);if(!o)return{ok:!1,err:"браузер не поднялся ("+hs()+")"};try{if(r!=null){let d=new URL(e).origin,p=(()=>{try{return o.context()}catch{return null}})();if(await ri(p,d+"/",s),await o.goto(d+"/",{waitUntil:"domcontentloaded",timeout:t}).catch(()=>null),!await ds(o,n))return{ok:!1,cf:!0,err:"защита сайта не пройдена"};await ls(p,d+"/");let f=new URL(e).pathname+new URL(e).search,u=await Qe(o.evaluate(async([m,w])=>{let g=location.origin+m;try{let b=await fetch(g,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:w});return b.ok?{html:await b.text(),url:g}:{err:"HTTP "+b.status+" на "+g}}catch(b){return{err:String(b&&b.message||b)+" ("+g+")"}}},[f,r]),2e4,{err:"браузер не ответил на POST в срок"}),h=u&&u.html||"";return{ok:!!h,html:h,posted:!!h,err:h?null:u&&u.err||"пустой ответ"}}let a=await Zl(o,e,{gotoMs:t,challengeMs:n,lane:s,deadline:Date.now()+75e3}),c=a.resp;if(!a.passed)return{ok:!1,cf:!0,err:"защита сайта не пройдена"+(a.warmed?" (пробовали и через главную)":"")};let l=await Qe(o.content(),15e3,"");return{ok:!!l,status:c?c.status():0,html:l||""}}catch(a){return{ok:!1,err:a.message}}finally{await oi(o)}}function Kv(e,t,n={}){return Mn(r=>Wv(e,t,n,r),Hv,{items:[],cf:!1,note:"браузер завис — окно перезапущено"},"браузер-поиск",n.host||us(e))}async function Wv(e,t,{host:n=""}={},r=0){let s=(Array.isArray(t)?t:[t]).map(f=>String(f||"").trim()).filter(Boolean);if(!s.length)return{items:[],cf:!1,note:"пустой запрос"};let o=await td(r);if(!o)return{items:[],cf:!1,note:"браузер не поднялся ("+hs()+")"};let a=[],c=new Set,l=!1,d="",p=(()=>{try{return o.context()}catch{return null}})();try{for(let f=0;f<s.length;f++){if(f===0&&await ri(p,e+"/",r),await o.goto(e+"/",{waitUntil:"domcontentloaded",timeout:2e4}).catch(()=>{}),!await ds(o,f===0?25e3:8e3)){l=!0,d="защита сайта не пройдена";break}f===0&&await ls(p,e+"/");let h=await Qe(o.evaluate(tg),8e3,null);if(h||(await Qe(o.evaluate(tk),8e3,null),await o.waitForTimeout(700).catch(()=>{}),h=await Qe(o.evaluate(tg),8e3,null)),!h){d="строка поиска не найдена";break}await o.fill(h,s[f]).catch(()=>{}),await o.press(h,"Enter").catch(()=>{}),await Qe(o.evaluate(ek,h),8e3,null),await o.waitForLoadState("domcontentloaded",{timeout:15e3}).catch(()=>{}),await o.waitForTimeout(1800).catch(()=>{});let m=Date.now()+12e3,w=[],g=0;for(;Date.now()<m;){let{items:b,cf:x}=await sg(o,{selectors:null,hostHint:n,google:!1,bing:!1},m);if(x&&(l=!0),b.length>w.length)w=b,g=0;else if(w.length&&(g++,g>=2))break;await o.waitForTimeout(1200).catch(()=>{})}for(let b of w)b.url&&!c.has(b.url)&&(c.add(b.url),a.push(b))}return{items:a,cf:l,note:d}}catch(f){return{items:a,cf:l,note:f.message}}finally{await oi(o)}}async function rg(){let e;try{e=await ng(ps)}catch{return null}let t=await io(e.newPage(),3e4,n=>n.close().catch(()=>{}));return!t||t===Tn?(await lo(e,ps),null):t}async function Yv(e="https://www.facebook.com/"){let t=await rg();return t?(nd=!0,await t.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await Qe(t.bringToFront(),5e3,null),{ok:!0}):{ok:!1,err:"браузер не поднялся ("+hs()+")"}}function Jv(){let e=i(t=>!!document.querySelector(t),"has");return e('input[name="pass"]')||e("#loginform")||e('[data-testid="royal_login_form"]')}function Xv(e,t={}){return Mn(()=>Zv(e,t),_v,{ok:!1,chunks:[],err:"браузер завис — окно перезапущено"},"фейсбук","facebook.com")}async function Zv(e,{sinceMs:t=0,maxScrolls:n=3,settleMs:r=3e3}={}){let s=await rg();if(!s)return{ok:!1,chunks:[],err:"браузер не поднялся ("+hs()+")"};let o=[],a=[],c=i(d=>{try{if(!/facebook\.com\/api\/graphql/i.test(d.url()))return;a.push(Qe(d.text(),15e3,"").then(p=>{p&&o.push(p)}).catch(()=>{}))}catch{}},"onResp");s.on("response",c);let l=i(async()=>{let d=a.splice(0);d.length&&await Promise.all(d)},"drain");try{if(await s.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await Qe(s.evaluate(Jv),8e3,!1))return{ok:!1,chunks:[],needLogin:!0,err:"Фейсбук просит войти — нажмите «Войти в соцсети» и залогиньтесь в открывшемся окне"};let d=0;for(let p=0;;p++){await s.waitForTimeout(r).catch(()=>{}),await l();let{posts:f}=Es(o.join(`
`)),u=hc(f);if(u&&u*1e3<t||p>=n)break;await Qe(s.evaluate(()=>window.scrollBy(0,document.body.scrollHeight)),8e3,null),d++}return await l(),{ok:o.length>0,chunks:o,scrolls:d,err:o.length?"":"Фейсбук не отдал ленту (страница пустая или изменился её вид)"}}catch(d){return{ok:o.length>0,chunks:o,err:String(d&&d.message||d)}}finally{try{s.off("response",c)}catch{}await l().catch(()=>{}),await oi(s)}}async function Qv(e,{selectors:t=null,host:n="",google:r=!1,bing:s=!1,loadTimeoutMs:o=2e4,contentTimeoutMs:a=2e4}={},c=0){let l=await td(c);if(!l)return{items:[],cf:!1,err:"браузер не поднялся ("+hs()+")"};try{let d=await Zl(l,e,{gotoMs:o,challengeMs:25e3,lane:c,deadline:Date.now()+7e4}),p=0;try{p=d&&d.resp&&typeof d.resp.status=="function"?d.resp.status():0}catch{}if(p>=400)return{items:[],cf:!1,status:p,err:"HTTP "+p+" на "+e};let f=Date.now()+a,u=[],h=0,m=!1;for(;Date.now()<f;){let{items:w,cf:g}=await sg(l,{selectors:t,hostHint:n,google:r,bing:s},f);if(m=g,!g&&w.length>u.length)u=w,h=0;else if(u.length&&(h++,h>=2))break;await l.waitForTimeout(1300).catch(()=>{})}return{items:u,cf:m}}catch{return{items:[],cf:!1}}finally{await oi(l)}}async function sg(e,t,n){let r=[],s=!1,o=[];try{o=e.frames()}catch{return{items:r,cf:s}}for(let c of o){if(Date.now()>n)break;let l=await Qe(c.evaluate(nk,t),8e3,null);l&&(l.cf&&(s=!0),l.items&&(r=r.concat(l.items)))}let a=new Set;return{items:r.filter(c=>c.url&&!a.has(c.url)&&a.add(c.url)),cf:s}}function tg(){let e=[...document.querySelectorAll("input")],t=i(s=>{let o=(s.type||"").toLowerCase();if(o&&!["search","text",""].includes(o))return-1;let a=((s.name||"")+" "+(s.id||"")+" "+(s.placeholder||"")+" "+(s.className||"")+" "+(s.getAttribute("aria-label")||"")).toLowerCase();if(/e-?mail|mail|subscribe|подпис|рассыл|comment|коммент|phone|тел|promo|coupon|login|логин|город|city/.test(a))return-1;let c=0;o==="search"&&(c+=5),/(^|[^a-zа-я])(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)([^a-zа-я]|$)/.test(a)&&(c+=4),/поиск|search|найти|іздеу|искать|издеу/.test(a)&&(c+=3);let l=s.form;if(l){let p=((l.getAttribute("action")||"")+" "+(l.className||"")+" "+(l.getAttribute("role")||"")).toLowerCase();(/search|поиск|[?&](q|s|query)=/.test(p)||l.getAttribute("role")==="search")&&(c+=4)}let d=s.getBoundingClientRect();return d.width>40&&d.height>8&&(c+=2),c},"score"),n=null,r=0;for(let s of e){let o=t(s);o>r&&(r=o,n=s)}return!n||r<4?null:n.id?"#"+(window.CSS&&CSS.escape?CSS.escape(n.id):n.id):n.name?'input[name="'+String(n.name).replace(/"/g,'\\"')+'"]':null}function ek(e){let t=document.querySelector(e);if(!t)return!1;let n=t.form||t.closest&&t.closest("form");if(n){let r=n.querySelector('button[type="submit"],input[type="submit"],button:not([type])');if(r)try{return r.click(),!0}catch{}try{return n.requestSubmit?n.requestSubmit():n.submit(),!0}catch{}}return!1}function tk(){let e=document.querySelector('[aria-label*="поиск" i],[aria-label*="search" i],[title*="поиск" i],[title*="search" i],button[class*="search" i],a[class*="search" i],[class*="search-toggle" i],[class*="header-search" i],[class*="search-btn" i]');if(e)try{return e.click(),!0}catch{}return!1}function nk({selectors:e,hostHint:t,google:n,bing:r}){let s=(document.title||"").toLowerCase(),o=(document.body&&document.body.innerText||"").slice(0,3e3).toLowerCase(),a=/just a moment|checking your browser|attention required|verifying you are human|cloudflare/.test(s+" "+o)||!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait");try{window.scrollTo(0,document.body.scrollHeight)}catch{}let c=i(w=>{try{return new URL(w,location.href).href}catch{return null}},"abs"),l=/(^|\.)(google|gstatic|googleapis|googletagmanager|googlesyndication|doubleclick|facebook|twitter|x\.com|instagram|youtube|vk\.com|t\.me|mc\.yandex)\./i,d=i(w=>{let g=c(w);if(!g)return null;let b;try{b=new URL(g).host}catch{return null}if(!l.test(b))return g.split("#")[0];let k=decodeURIComponent(w).match(/https?:\/\/[^\s"'&<>]+/g)||[];for(let y of k)try{let v=new URL(y).host.replace(/^www\./,"");if(!l.test(v)&&(!t||v===t||v.endsWith("."+t)))return y.split("#")[0]}catch{}return null},"realUrl"),p=/(\d+\s*(?:second|sec|minute|min|hour|hr|day|week|month|year)s?\s*ago|\d+\s*(?:секунд|минут|час|дн|день|недел|месяц|год|лет)[а-я]*\s*назад|yesterday|today|вчера|сегодня|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{0,4}|\d{1,2}\s+(?:янв|фев|мар|апр|ма[йя]|июн|июл|авг|сен|окт|ноя|дек)[а-я]*\.?\s*\d{2,4}(?:\s*(?:года|г\.))?|\d{1,2}\.\d{1,2}\.\d{4})/i,f=i(w=>{let g=(w||"").match(p);return g?g[0]:""},"findDate"),u=i(w=>(w||"").replace(p,"").replace(/\s+/g," ").trim().slice(0,200),"cleanTitle"),h=[];if(r){document.querySelectorAll("li.b_algo").forEach(g=>{let b=g.querySelector("h2 a[href]")||g.querySelector("a[href]");if(!b||!b.href)return;let x=(b.textContent||"").replace(/\s+/g," ").trim(),k=g.querySelector(".b_caption p")||g.querySelector("p"),y=k?(k.textContent||"").replace(/\s+/g," ").trim():"";h.push({url:b.href,title:x,date:"",snippet:y.slice(0,400)})});let w=new Set;return{cf:a,items:h.filter(g=>g.url&&!w.has(g.url)&&w.add(g.url))}}if(n){document.querySelectorAll("a[href] h3, h3 a[href]").forEach(g=>{let b=g.tagName==="H3"?g:g.closest("h3"),x=b?b.closest("a[href]")||b.querySelector&&b.querySelector("a[href]"):null;if(!b||!x)return;let k=d(x.getAttribute("href"));if(!k)return;let y=(b.textContent||"").replace(/\s+/g," ").trim();if(y.length<8)return;let v=x.closest("div.g, div[data-hveid], div[data-rpos], div[jscontroller]")||x.parentElement,L=v&&v.innerText||"",A=L.replace(/\s+/g," ").trim(),T=A.indexOf(y);T>=0&&(A=(A.slice(0,T)+" "+A.slice(T+y.length)).trim()),h.push({url:k,title:y,date:f(L),snippet:A.slice(0,300)})});let w=new Set;return{cf:a,items:h.filter(g=>g.url&&!w.has(g.url)&&w.add(g.url))}}if(e&&e.container)document.querySelectorAll(e.container).forEach(w=>{let g=e.link&&w.querySelector(e.link)||(w.matches&&w.matches("a[href]")?w:w.querySelector("a[href]")),b=g&&g.getAttribute("href");if(!b)return;let x=d(b);if(!x)return;let k=e.title&&w.querySelector(e.title)||g,y=e.date?w.querySelector(e.date):w.querySelector("time"),v=y&&(y.getAttribute&&y.getAttribute("datetime")||y.textContent)||"";v||(v=f(w.innerText)),h.push({url:x,title:u(k&&k.textContent),date:(v||"").trim(),snippet:(w.innerText||"").slice(0,300)})});else{let w=[...document.querySelectorAll("a[href]")].filter(v=>(v.textContent||"").trim().length>20),g={};for(let v of w){let L=v;for(let A=0;A<6&&L.parentElement;A++){L=L.parentElement;let T=L.className&&typeof L.className=="string"?L.className.trim().split(/\s+/)[0]:"";T&&(g[T]=g[T]||new Set).add(L)}}let b=null,x=2;for(let v in g)g[v].size>x&&(x=g[v].size,b=v);let k=null;if(b)try{k=[...document.querySelectorAll("."+CSS.escape(b))]}catch{}let y=i((v,L)=>{let A=d(L.getAttribute("href"));if(!A)return;let T;try{T=new URL(A)}catch{return}if(T.protocol!=="http:"&&T.protocol!=="https:")return;let R=(L.textContent||"").trim();if(R.length<=20)return;let F=v||L.parentElement,D=F&&F.querySelector("time"),z=D&&(D.getAttribute("datetime")||D.textContent)||"";z||(z=f(F&&F.innerText)),h.push({url:A,title:u(R),date:(z||"").trim(),snippet:(F&&F.innerText||R).slice(0,300)})},"pushFrom");if(k&&k.length>=3)for(let v of k){let L=v.querySelector("a[href]");L&&y(v,L)}document.querySelectorAll("a[href]").forEach(v=>{if((v.textContent||"").trim().length<=25)return;let L=v.closest('article, li, [class*="result"], [class*="card"], [class*="item"], .gsc-webResult, .b-serp-item')||v.parentElement;y(L,v)})}let m=new Set;return{cf:a,items:h.filter(w=>w.url&&!m.has(w.url)&&m.add(w.url))}}var Zt,co,si,eg,Ev,hs,Ov,jv,Iv,Fv,Hv,Ql,Mn,Bv,oi,ps,_v,nd,ag=ee(()=>{Jm();vt();Yl();Qm();$s();Zt=new Map,co=new Map,si="",eg=6e4,Ev=i((e,t)=>{let n=e?ui:pi;return typeof t=="string"?n+"-"+t:t?n+"-"+(t+1):n},"profileDir");i($v,"tryLaunch");i(ng,"context");i(lo,"dropContext");i(ed,"closeBrowser");i(Pv,"closeRunBrowsers");hs=i(()=>si||"причина неизвестна","browserError"),Ov=i(()=>({...Mn.stats,byHost:{...Mn.stats.byHost}}),"browserStats"),jv=i(()=>{Zm(),Mn.resetStats()},"resetBrowserStats"),Iv=9e4,Fv=12e4,Hv=12e4,Ql=[],Mn=Xm((e,t=0)=>{let n=e==="фейсбук"?ps:t;console.log("[render] окно "+(n===ps?"соцсетей":n+1)+", "+e+": браузер не ответил в срок — перезапускаю"),Ql[t]||(Ql[t]=ed(n).catch(()=>{}).then(()=>{Ql[t]=null}))},2);i(qv,"setBrowserWindows");Bv=i(()=>Mn.lanes(),"browserWindows");i(Uv,"renderScrape");i(td,"openPage");oi=i(e=>Qe(e.close().catch(()=>{}),5e3),"shut");i(Vv,"renderFetch");i(Gv,"_renderFetch");i(Kv,"renderSiteSearch");i(Wv,"_renderSiteSearch");ps="social",_v=18e4,nd=!1;i(rg,"socialPage");i(Yv,"openSocialLogin");i(Jv,"fbLoginProbe");i(Xv,"renderFacebook");i(Zv,"_facebook");i(Qv,"_render");i(sg,"scrapeFrames");i(tg,"findSearchSelector");i(ek,"submitSearchForm");i(tk,"clickSearchToggle");i(nk,"pageScrape")});var ok={};async function rk(){try{let e=await Promise.resolve().then(()=>(ag(),og));mu(e.renderScrape),yu(e.renderFetch),vu(e.renderSiteSearch),jp(e.browserStats,e.resetBrowserStats),Ip(e.closeRunBrowsers),ad=i(()=>e.closeBrowser(),"closeAllBrowsers"),Fp(e.renderFacebook),od=e.openSocialLogin,sd=e.setBrowserWindows,hg(),fg=!0,console.log("[Playwright: podklyuchyon — JS-sayty, brauzer-fetch i poisk sayta dostupny]")}catch{console.log("[Playwright: ne ustanovlen — tolko lyogkie kanaly. Zapusti setup-windows.bat]")}}function mg(){let e=new Set;for(let t of wn()){for(let r of t.config&&t.config.sites||[])e.add(String(r));let n=We(t.id);for(let r of(n&&n.items||[]).slice(0,3e3))r&&r.source&&e.add(String(r.source))}return[...e]}var cg,lg,dg,ug,pg,_2,rd,sd,hg,od,fg,ad,ig,G,Qt,sk,gg=ee(()=>{Rd();jd();cg=Cn(require("node:http"),1),lg=Cn(require("node:dns"),1),dg=Cn(require("node:os"),1),ug=require("node:url"),pg=require("node:path");Zn();Dt();Fs();Vh();Hs();qs();Dc();zi();Gs();ha();qr();ka();_c();Qh();gi();_o();sf();rs();af();gf();Ws();hl();gl();wl();Cf();Um();qc();Wm();Io();Bl();Gl();try{lg.default.setDefaultResultOrder("ipv4first")}catch{}_2=(0,pg.dirname)((0,ug.fileURLToPath)(__mcFileUrl)),rd=process.env.PORT||8787,sd=null,hg=i(()=>{if(!sd)return;let e=Math.max(1,Math.min(4,+Ze().browserWindows||2));try{sd(e)}catch{}},"applyBrowserWindows"),od=null;Cd();Od();fg=!1,ad=null;i(rk,"initRenderer");ig=new Map,G=i((e,t,n)=>{e.writeHead(t,{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),e.end(JSON.stringify(n))},"json"),Qt=i(e=>new Promise(t=>{let n="";e.on("data",r=>n+=r),e.on("end",()=>{try{t(JSON.parse(n||"{}"))}catch{t({})}})}),"readBody");i(mg,"audienceSources");sk=cg.default.createServer(async(e,t)=>{let n=new URL(e.url,"http://x"),r=n.pathname;if(e.method==="GET"&&(r==="/"||r==="/index.html"))try{return t.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),t.end(Da())}catch{return t.writeHead(500),t.end("ui.html не найден")}if(!r.startsWith("/api/"))return t.writeHead(404),t.end("not found");let s=Ze().password||"";if(r==="/api/me")return G(t,200,{hasPassword:!!s,playwright:fg,hasGeminiKey:!!Ze().geminiKey,geminiModel:Ze().geminiModel||"",geminiSnippets:ya(Ze()),browserWindows:Math.max(1,Math.min(4,+Ze().browserWindows||2))});if(r==="/api/quit"&&e.method==="POST"){let o=String(e.socket.remoteAddress||"");if(!(o==="127.0.0.1"||o==="::1"||o==="::ffff:127.0.0.1"))return G(t,403,{error:"выключить программу можно только с этого компьютера"});G(t,200,{ok:!0}),setTimeout(()=>process.exit(0),300);return}if(s&&e.headers["x-mc-key"]!==s)return G(t,401,{error:"нужен пароль"});if(r==="/api/presets")return G(t,200,{sites:Qo,telegram:Ac,world:Tc,ru:Mc,latest:zc,dead:Object.entries(Mr).filter(([,o])=>o&&o.dead).map(([o,a])=>({host:o,note:String(a.note||"")}))});if(r==="/api/state")return G(t,200,{runs:Wr()});try{if(r==="/api/places"||r.startsWith("/api/places/"))return await Bm(e,t,r,n,{json:G,readBody:Qt});if(r==="/api/audience"&&e.method==="GET")return G(t,200,aa());if(r==="/api/audience"&&e.method==="PUT"){let a=await Qt(e);return G(t,200,hh(a.manual))}if(r==="/api/audience/refresh"&&e.method==="POST"){let a=await Hc(mg());return G(t,a.ok?200:502,{...a,info:aa()})}if(r==="/api/projects"&&e.method==="GET")return G(t,200,{projects:wn()});if(r==="/api/projects"&&e.method==="POST"){let a=await Qt(e),c=a.config||{};return(!Array.isArray(c.sites)||!c.sites.length)&&(c.sites=Qo.map(l=>l.url)),c.presetsAck||(c.presetsAck=zc),G(t,200,Nu(a.name,c))}if(r==="/api/social/login"&&e.method==="POST"){if(!od)return G(t,503,{error:"нет браузера: запусти setup-windows.bat"});let a=await od();return G(t,a.ok?200:502,a)}if(r==="/api/social/visits"&&e.method==="GET"){let{facebookProfile:a}=await Promise.resolve().then(()=>($s(),Op)),c=await Promise.resolve().then(()=>(yc(),bc));c.reload();let l=(n.searchParams.get("profiles")||"").split(`
`).map(p=>a(p)).filter(Boolean),d=Math.max(1,Math.min(6,+n.searchParams.get("limit")||c.DEFAULT_LIMIT));return G(t,200,{visits:l.map(p=>{let f=c.canVisit(p.label,{limit:d});return{label:p.label,used:f.used,limit:f.limit,ok:f.ok,why:f.why,nextAt:c.nextAt(p.label,{limit:d})}})})}if(r==="/api/license"&&e.method==="GET")return G(t,200,Ma());if(r==="/api/license"&&e.method==="POST"){let a=await Qt(e);return G(t,200,qh(a.key||""))}if(r==="/api/code"&&e.method==="GET")return n.searchParams.get("check")?G(t,200,await mi({force:!0})):G(t,200,kt());if(r==="/api/code/drop"&&e.method==="POST")return G(t,200,Ad());if(r==="/api/update"&&e.method==="GET")return n.searchParams.get("check")?G(t,200,await ul({force:!0})):G(t,200,_s());if(r==="/api/update/download"&&e.method==="POST"){let a=await Xh();return G(t,a.ok?200:502,{...a,state:_s()})}if(r==="/api/update/install"&&e.method==="POST"){let a=String(e.socket.remoteAddress||"");if(!(a==="127.0.0.1"||a==="::1"||a==="::ffff:127.0.0.1"))return G(t,403,{error:"обновить можно только с этого компьютера"});let c=pl({busy:ut.size>0});if(!c.ok)return G(t,409,c);G(t,200,{ok:!0,version:c.version}),ad&&await Promise.race([ad().catch(()=>{}),new Promise(d=>setTimeout(d,8e3))]);let l=Zh({busy:ut.size>0});l.ok||console.log("[obnovlenie: ustanovshik ne zapustilsya — "+l.err+"]"),setTimeout(()=>process.exit(0),1500);return}if(r==="/api/settings"&&e.method==="POST"){let a=await Qt(e);return No(a||{}),hg(),G(t,200,{ok:!0})}if(r==="/api/gemini/models"&&e.method==="GET"){let a=Ze().geminiKey||"",c=await kh({apiKey:a});return G(t,200,{...c,chain:Kc(Ze().geminiModel||"")})}let o=r.match(/^\/api\/projects\/([^/]+)(?:\/(.+))?$/);if(o){let a=o[1],c=o[2]||"",l=We(a);if(!l&&!(c==="stop"&&e.method==="POST"&&Hp(a)))return G(t,404,{error:"проект не найден"});if(c===""&&e.method==="GET")return G(t,200,l);if(c===""&&e.method==="PUT"){let u=await Qt(e);return G(t,200,Eu(a,u))}if(c===""&&e.method==="DELETE")return $u(a),G(t,200,{ok:!0});if(c==="read"&&e.method==="POST")return Pu(a),G(t,200,{ok:!0});if(c==="telegram"&&e.method==="POST"){let u=await Qt(e),h={};if(u.enabled!==void 0&&(h.enabled=!!u.enabled),u.clearToken)h.token="",h.bot="",h.chats=[],h.offset=0,h.err="";else if(u.token){let b=String(u.token).trim(),x=lt(a);h.token=b,b!==x.token&&(h.chats=[],h.offset=0,h.bot="",h.err="")}let m=lt(a),w=Lt(a,h),g=0;return w.enabled&&!m.enabled&&(g=Fu(a)),G(t,200,{ok:!0,tg:Ms(a),muted:g})}if(c==="telegram/resend"&&e.method==="POST"){let u=await Qt(e),h=er(a),m=String(u.ts||h[0]&&h[0].ts||"");if(!m)return G(t,400,{error:"прогонов ещё не было — присылать нечего"});let w=jn(a,m);if(!w)return G(t,404,{error:"архив прогона не найден"});let g=(w.rows||[]).map(k=>k.url).filter(Boolean),b=Hu(a,g),x=await Fn(a,{});return G(t,200,{ok:!0,ts:m,rows:g.length,freed:b,sent:x.sent||0,rest:x.rest||0,skipped:x.skipped||""})}if(c==="telegram/check"&&e.method==="POST"){let u=lt(a);if(!u.token)return G(t,400,{error:"сначала вставьте токен бота"});let h=await ts(u.token);if(!h.ok)return Lt(a,{err:h.err}),G(t,200,{ok:!1,error:h.err,tg:Ms(a)});Lt(a,{bot:h.bot});let m=await ir(a);return Lt(a,{err:m.err||""}),G(t,200,{ok:!0,tg:Ms(a)})}if(c==="export.csv"&&e.method==="GET")return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}.csv"`}),t.end("\uFEFF"+lr(l.items));if(c==="run"&&e.method==="POST"){let u=await Ca(a,"ручной");return u.code!==200?G(t,u.code,{error:u.error}):G(t,200,{added:u.added,total:u.total,ts:u.ts,log:u.log})}if(c==="stop"&&e.method==="POST"){let u=Xo(a);return G(t,u?200:409,u?{ok:!0}:{error:"этот проект сейчас не собирает"})}if(c==="diagnose"&&e.method==="POST"){let u=await Qt(e),h=String(u.site||"").trim();if(!h)return G(t,400,{error:"не указан сайт"});let m=l.config||{};if(!String(m.keyword||"").trim())return G(t,400,{error:"у проекта не задан запрос"});let w=Ir(m),g=await Ao(h,{keyword:m.keyword,exclude:m.exclude||"",morph:m.morph!==!1,from:w.from,to:w.to,diag:!0});return G(t,200,{report:of(h,g,w),channel:g.channel,note:g.note,found:g.rows.length,diag:g.diag})}if(c==="items/delete"&&e.method==="POST"){let u=await Qt(e),h=Array.isArray(u.urls)?u.urls.map(w=>String(w||"").trim()).filter(Boolean):[];if(!h.length)return G(t,400,{error:"не выбрано ни одного материала"});let m=Ku(a,h);return m?G(t,200,m):G(t,404,{error:"проект не найден"})}if(c==="share.html"&&e.method==="GET"){let u=nf(a);return u?(t.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Content-Disposition":fl(rf(u.snap))}),t.end(u.html)):G(t,404,{error:"проект не найден"})}if(c==="analytics"&&e.method==="GET"){let u=n.searchParams.get("days"),h=In(a,{days:u?+u:null});return h?G(t,200,h):G(t,404,{error:"проект не найден"})}if(c==="day"&&e.method==="GET"){let u=n.searchParams.get("d")||"";if(!/^\d{4}-\d{2}-\d{2}$/.test(u))return G(t,400,{error:"день задаётся как ГГГГ-ММ-ДД"});let h=la(a,u);return h?G(t,200,{day:u,items:h}):G(t,404,{error:"проект не найден"})}if(c==="gemini"&&e.method==="POST"){let u=Ze();if(!_t(l.config||{}).ai)return G(t,403,{error:Hr});if(!u.geminiKey)return G(t,400,{error:"нет ключа Gemini (задайте в настройках)"});let h=await Qt(e),m=In(a,{days:h.days?+h.days:null});if(!m)return G(t,404,{error:"проект не найден"});let w=Yc.includes(Jc(h.kind))?Jc(h.kind):"review";if(w==="verify"&&!fa(l.schedule))return G(t,403,{error:ma(l.schedule)});let g,b=w==="sentiment"||w==="verify",x={kind:w,at:Date.now(),done:!1,log:[],marked:0,asked:0};ig.set(a,x),b?g=await Zc(a,{kind:w,days:h.days?+h.days:null,analytics:m,settings:u,rescore:!!h.rescore,onStep:i((A,T)=>{x.log.push(A),x.marked=T.marked,x.asked=T.asked},"onStep")}):(g=await Xc(a,{days:h.days?+h.days:null,analytics:m,settings:u}),g.log&&(x.log=g.log)),x.done=!0,x.log=g.log||x.log;let k=b&&g.ok?g.items:null,y=g.ok?w==="sentiment"?wa(g):w==="verify"?ba(g):g.note||"":"";Eo(a,w,{at:Date.now(),runTs:null,window:m.overview.windowFrom+" … "+m.overview.windowTo,text:g.ok?g.text:"",model:g.model||u.geminiModel||"",err:g.ok?"":g.err||"",auto:!1,items:k,log:g.log||[],...y?{note:y}:{}});let{data:v,...L}=g;return G(t,g.ok?200:502,g.ok?{...L,items:k,note:y}:L)}if(c==="ai-progress"&&e.method==="GET")return G(t,200,ig.get(a)||{done:!0,log:[]});if(c==="usage"&&e.method==="GET"){let u=Gu(a),h=0;try{let{statSync:m,existsSync:w}=await import("node:fs"),{join:g}=await import("node:path"),{DATA_ROOT:b}=await Promise.resolve().then(()=>(vt(),kd)),x=g(b,"date-cache.json");w(x)&&(h=m(x).size)}catch{}return G(t,200,{...u,limitMb:Wi(l.config),dateCacheBytes:h})}if(c==="report.txt"&&e.method==="GET"){let u=In(a,{days:n.searchParams.get("days")?+n.searchParams.get("days"):null});return u?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(mf(l.config||{},u))):G(t,404,{error:"проект не найден"})}if(c==="health"&&e.method==="GET")return G(t,200,Wl(a));if(c==="health"&&e.method==="POST"){let u=(l.config&&l.config.sites||[]).filter(m=>!/t\.me\//i.test(m)),h=await Yi({hosts:u});return G(t,200,{...h,...Wl(a)})}if(c==="runs"&&e.method==="GET")return G(t,200,{runs:er(a)});let d=c.match(/^runs\/([^/]+)\/log\.json$/);if(d&&e.method==="GET"){let u=Xu(a,d[1]);return u?(t.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Content-Disposition":fl(`лог ${d[1].slice(0,10)} ${d[1].slice(11,16)} — ${u.проект||a}.json`)}),t.end(JSON.stringify(u,null,2))):G(t,404,{error:"прогон не найден"})}let p=c.match(/^runs\/([^/]+)\/report\.txt$/);if(p&&e.method==="GET"){let u=jn(a,p[1]);return u?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(ff(l.config||{},u))):G(t,404,{error:"прогон не найден"})}let f=c.match(/^runs\/([^/]+)(\/export\.csv)?$/);if(f&&e.method==="GET"){let u=jn(a,f[1]);return u?f[2]?(t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}-${f[1]}.csv"`}),t.end("\uFEFF"+lr(u.rows))):G(t,200,{...u,logsDir:Rr}):G(t,404,{error:"прогон не найден"})}}return G(t,404,{error:"нет такого метода"})}catch(o){return G(t,500,{error:String(o&&o.message||o)})}});rk().then(()=>sk.listen(rd,"0.0.0.0",()=>{let e=[].concat(...Object.values(dg.default.networkInterfaces())).filter(a=>a.family==="IPv4"&&!a.internal).map(a=>a.address),t="0.6.9",n="2de9d62";console.log(`
  mediachrome ${t?t+(n?" ("+n+")":""):"(iz ishodnikov)"}`),console.log(`  Kabinet:        http://localhost:${rd}`),e.forEach(a=>console.log(`  S telefona:     http://${a}:${rd}   (v toy zhe Wi-Fi seti)`)),console.log(`  (zakryt — zakroy eto okno)
`),Uh(),Df(),Mm(Za),zm(),Pm();let r=i(()=>{Ze().updateCheck!==!1&&(ul().catch(()=>{}),mi().catch(()=>{}))},"look");setTimeout(r,2e4),setInterval(r,6*3600*1e3);let s=i(()=>{if(Ze().audienceRefresh===!1)return;let a=mg();a.length&&fh(a)&&Hc(a).catch(()=>{})},"audienceTick"),o=i(()=>{!ut.size&&lp()&&Yi().catch(()=>{})},"goldenTick");setTimeout(o,600*1e3),setInterval(o,3600*1e3),setTimeout(s,300*1e3),setInterval(s,3600*1e3),Td()}))});var wg=require("node:module");gi();var ai="__mcCodeLoaded";(async()=>{if(process.env.MC_EXE_VERSION||(process.env.MC_EXE_VERSION="0.6.9"),!globalThis[ai]){let e=null;try{e=Ld()}catch{e=null}if(e){globalThis[ai]=e.version;try{(0,wg.createRequire)(process.execPath)(e.path);return}catch(t){globalThis[ai]="";try{Md(e.version,String(t&&t.message||t))}catch{}console.log(`
  [obnovlenie mehanizmov `+e.version+" ne zagruzilos - rabotaem po vshitomu kodu]"),console.log("  "+String(t&&t.message||t)+`
`)}}}process.env.MC_CODE_RUNNING=globalThis[ai]||"",await Promise.resolve().then(()=>(gg(),ok))})();
