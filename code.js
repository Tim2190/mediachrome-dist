// mediachrome 0.5.8 (04a1719) — собрано автоматически, не править
const __mcFileUrl = require('node:url').pathToFileURL(process.execPath).href;
var Tp=Object.create;var is=Object.defineProperty;var Ap=Object.getOwnPropertyDescriptor;var Lp=Object.getOwnPropertyNames;var Cp=Object.getPrototypeOf,Mp=Object.prototype.hasOwnProperty;var i=(e,t)=>is(e,"name",{value:t,configurable:!0});var ee=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var br=(e,t)=>{for(var n in t)is(e,n,{get:t[n],enumerable:!0})},Rp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Lp(t))!Mp.call(e,s)&&s!==n&&is(e,s,{get:()=>t[s],enumerable:!(r=Ap(t,s))||r.enumerable});return e};var En=(e,t,n)=>(n=e!=null?Tp(Cp(e)):{},Rp(t||!e||!e.__esModule?is(n,"default",{value:e,enumerable:!0}):n,e));var nc={};br(nc,{DATA_ROOT:()=>me,USERDATA_CHROMIUM_DIR:()=>jo,USERDATA_DIR:()=>No,migrateLegacyData:()=>Oo});function Dp(){if(process.env.MEDIACHROME_DATA)return process.env.MEDIACHROME_DATA;let e=process.env.APPDATA||(Po.default.homedir?Po.default.homedir():tc);return process.env.APPDATA?(0,Qt.join)(e,"mediachrome"):(0,Qt.join)(e,".mediachrome")}function Oo(e){try{let t=(0,Qt.join)(tc,"data"),n=(0,Zt.existsSync)((0,Qt.join)(me,"projects"))||(0,Zt.existsSync)((0,Qt.join)(me,"site-memory.json"));if((0,Zt.existsSync)(t)&&!n&&(0,Zt.readdirSync)(t).length)return e(t,me),!0}catch{}return!1}var Po,Qt,Zt,_i,ec,tc,me,No,jo,ht=ee(()=>{Po=En(require("node:os"),1),Qt=require("node:path"),Zt=require("node:fs"),_i=require("node:url"),ec=require("node:path"),tc=(0,ec.dirname)((0,_i.fileURLToPath)(__mcFileUrl));i(Dp,"resolveRoot");me=Dp(),No=(0,Qt.join)(me,".userdata"),jo=(0,Qt.join)(me,".userdata-chromium");try{(0,Zt.mkdirSync)(me,{recursive:!0})}catch{}i(Oo,"migrateLegacyData")});function ls(e,t){let n=i(o=>String(o||"0").split(/[^\d]+/).filter(a=>a!=="").map(Number),"p"),r=n(e),s=n(t);for(let o=0;o<Math.max(r.length,s.length);o++){let a=(r[o]||0)-(s[o]||0);if(a)return a<0?-1:1}return 0}function jp(e,t){if(!pn)return{ok:!1,why:"подпись кода не настроена — лёгкие обновления выключены"};let n=(0,Pn.createHash)("sha256").update(e).digest("hex");if(t&&t.sha256&&n!==t.sha256)return{ok:!1,why:"файл не совпал с отпечатком из витрины — возможно, скачался не целиком"};let r;try{r=(0,Pn.createPublicKey)({key:Buffer.from(pn,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ"}}let s=!1;try{let o=Buffer.from(String(t&&t.sig||"").replace(/-/g,"+").replace(/_/g,"/"),"base64");s=o.length>0&&(0,Pn.verify)(null,e,r,o)}catch{s=!1}return s?{ok:!0,why:"",sha256:n}:{ok:!1,why:"подпись не сошлась — файл не от разработчика или повреждён"}}function sc(e=ft()){let t=pn?e.active:null;if(!t||!t.version||!t.file)return{use:!1,why:"none",version:""};if((e.bad||{})[t.version])return{use:!1,why:"bad",version:t.version};if(!(0,Be.existsSync)(t.file))return{use:!1,why:"gone",version:t.version};let n=zo();return n&&t.minExe&&ls(n,t.minExe)<0?{use:!1,why:"needExe",version:t.version,minExe:t.minExe,exe:n}:n&&ls(t.version,n)<=0?{use:!1,why:"stale",version:t.version,exe:n}:{use:!0,why:"",version:t.version,file:t.file,minExe:t.minExe||""}}function oc(){if(!pn)return null;let e=ft(),t=e.active;if(!t||!t.version||!t.file)return null;if(e.pending&&e.pending.version===t.version){let r=e.bad||{};r[t.version]={at:Date.now(),why:"программа не дошла до запуска"};try{(0,Be.renameSync)(t.file,t.file+".broken")}catch{try{(0,Be.rmSync)(t.file,{force:!0})}catch{}}return ct({...e,active:null,pending:null,bad:r,lastFail:{version:t.version,at:Date.now()}}),null}let n=sc(e);if(!n.use){if(n.why==="stale"){try{(0,Be.rmSync)(t.file,{force:!0})}catch{}ct({...e,active:null,pending:null})}else n.why==="gone"&&ct({...e,active:null});return null}return ct({...e,pending:{version:t.version,at:Date.now()}}),{path:t.file,version:t.version}}function ac(){let e=ft();if(!e.pending)return;let t=process.env.MC_CODE_RUNNING||"";if(e.pending.version!==t)return;let n=e.okVersions||{};n[e.pending.version]=Date.now(),ct({...e,pending:null,okVersions:n})}function ic(e,t){let n=ft(),r=n.bad||{};r[e]={at:Date.now(),why:String(t||"")};let s=n.active;if(s&&s.version===e&&s.file)try{(0,Be.renameSync)(s.file,s.file+".broken")}catch{try{(0,Be.rmSync)(s.file,{force:!0})}catch{}}ct({...n,active:null,pending:null,bad:r,lastFail:{version:e,at:Date.now(),why:String(t||"")}})}function it(){let e=ft(),t=pn?e.active:null,n=sc(e),r=process.env.MC_CODE_RUNNING||"";return{enabled:!!pn,running:r,exe:zo(),ready:!!(n.use&&n.version!==r),readyVersion:n.use?n.version:"",needExe:n.why==="needExe"?{version:n.version,minExe:n.minExe}:null,notes:t&&t.notes||"",lastFail:e.lastFail||null,checkedAt:e.checkedAt||0,err:e.err||""}}async function Op(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{signal:t.signal,headers:{"Cache-Control":"no-cache"}});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json()}finally{clearTimeout(n)}}async function Io(e={}){if(!pn)return it();let t=ft();if(!e.force&&t.checkedAt&&Date.now()-t.checkedAt<Pp)return it();let n=null;try{n=await Op(Ep)}catch(h){return ct({...t,checkedAt:Date.now(),err:String(h&&h.message||h)}),it()}if(ct({...t,checkedAt:Date.now(),err:""}),!n||!n.version||!n.url)return it();let r=zo(),s=t.active&&t.active.version||r;if(s&&ls(n.version,s)<=0||(t.bad||{})[n.version])return it();if(r&&n.minExe&&ls(r,n.minExe)<0)return ct({...ft(),needFull:{version:n.version,minExe:n.minExe}}),it();let o;try{let h=new AbortController,u=setTimeout(()=>h.abort(),6e4);try{let p=await fetch(n.url,{signal:h.signal});if(!p.ok)throw new Error("HTTP "+p.status);o=Buffer.from(await p.arrayBuffer())}finally{clearTimeout(u)}}catch(h){return ct({...ft(),err:String(h&&h.message||h)}),it()}let a=jp(o,n);if(!a.ok)return ct({...ft(),err:a.why}),it();try{(0,Be.mkdirSync)(cs,{recursive:!0})}catch{}let l=(0,ds.join)(cs,"code-"+String(n.version).replace(/[^\w.-]/g,"_")+".js"),d=l+".part";try{(0,Be.writeFileSync)(d,o),(0,Be.renameSync)(d,l)}catch(h){try{(0,Be.rmSync)(d,{force:!0})}catch{}return ct({...ft(),err:"не удалось сохранить: "+String(h&&h.message||h)}),it()}let c=ft();if(c.active&&c.active.file&&c.active.file!==l)try{(0,Be.rmSync)(c.active.file,{force:!0})}catch{}return ct({...c,err:"",active:{version:n.version,file:l,minExe:n.minExe||"",notes:n.notes||"",at:Date.now()}}),it()}function cc(){let e=ft();if(e.active&&e.active.file)try{(0,Be.rmSync)(e.active.file,{force:!0})}catch{}return ct({...e,active:null,pending:null}),it()}var ds,Be,Pn,Ep,pn,cs,rc,Pp,Np,ct,ft,zo,qo=ee(()=>{ds=require("node:path"),Be=require("node:fs"),Pn=require("node:crypto");ht();Ep=process.env.MC_CODE_URL||"https://raw.githubusercontent.com/tim2190/mediachrome-dist/main/code.json",pn="MCowBQYDK2VwAyEArb2DkMY1meiRt6JXIr0unrIjtj5ADfd+D/OVThCAoyg=",cs=(0,ds.join)(me,"code"),rc=(0,ds.join)(cs,"state.json"),Pp=864e5,Np=i(e=>{try{return JSON.parse((0,Be.readFileSync)(e,"utf8"))}catch{return null}},"readJson"),ct=i(e=>{try{(0,Be.mkdirSync)(cs,{recursive:!0})}catch{}try{(0,Be.writeFileSync)(rc,JSON.stringify(e,null,2))}catch{}},"save"),ft=i(()=>Np(rc)||{},"st0");i(ls,"cmpVer");zo=i(()=>process.env.MC_EXE_VERSION||"0.5.8","exeVersion");i(jp,"verifyBundle");i(sc,"codeVerdict");i(oc,"activeCode");i(ac,"markCodeOk");i(ic,"markCodeBad");i(it,"codeState");i(Op,"getJson");i(Io,"checkCode");i(cc,"dropCode")});function we(e){if(!e)return null;let t=String(e).trim();if(!t)return null;let n=t.match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{2}|\d{4})(?!\d)/);if(n&&+n[1]<=31&&+n[2]<=12){let o=n[3].length===2?2e3+ +n[3]:+n[3],a=new Date(o,+n[2]-1,+n[1]);if(!isNaN(a.getTime()))return a}let r=new Date(t);if(!isNaN(r.getTime())&&/\d{4}/.test(t))return r;let s=qp(t);return s||(isNaN(r.getTime())?null:r)}function Bo(e,t){let n=e.match(/(\d{1,2}):(\d{2})/),r=new Date(t);return n?r.setHours(+n[1],+n[2],0,0):r.setHours(0,0,0,0),r}function qp(e){let t=e.toLowerCase(),n=new Date;if(/только что|just now|moments? ago|сейчас/.test(t))return n;let r=t.match(/(\d+)\s*(секунд|минут|час|дн|день|сутк|недел|месяц|год|лет|сағат|мину?т|күн|тәулік|апта|ай|жыл|second|sec|minute|min|hour|day|week|month|year)[a-zа-яёәөұүқғңһі]*\s*(?:назад|бұрын|ago)/);if(r){let s=+r[1],o=r[2],a=new Date(n);return/секунд|second|sec/.test(o)?a.setSeconds(a.getSeconds()-s):/минут|мину?т|minute|min/.test(o)?a.setMinutes(a.getMinutes()-s):/час|сағат|hour/.test(o)?a.setHours(a.getHours()-s):/дн|день|сутк|күн|тәулік|day/.test(o)?a.setDate(a.getDate()-s):/недел|апта|week/.test(o)?a.setDate(a.getDate()-s*7):/месяц|month/.test(o)||o==="ай"?a.setMonth(a.getMonth()-s):/год|лет|жыл|year/.test(o)&&a.setFullYear(a.getFullYear()-s),a}if(/^вчера|^yesterday|^кеше/.test(t)){let s=new Date(n);return s.setDate(n.getDate()-1),Bo(t,s)}if(/^сегодня|^today|^бүгін/.test(t))return Bo(t,n);if(r=t.match(/(\d{1,2})\s+([а-яёәөұүқғңһіА-ЯЁӘӨҰҮҚҒҢҺІ]{3,})\.?\s*(\d{4})?/),r){let s=+r[1],o=r[2].toLowerCase(),a=Ip.findIndex(l=>o.startsWith(l)||l.startsWith(o));if(a<0&&(a=zp.findIndex(l=>o.startsWith(l)||l.startsWith(o))),a>=0){let l=r[3]?+r[3]:n.getFullYear(),d=new Date(l,a,s),c=Bo(t,d);return isNaN(c.getTime())?null:c}}return null}function Nn(e){if(!e)return null;let t=new Date(e+"T00:00:00");return isNaN(t.getTime())?null:t}function Me(e){if(!(e instanceof Date)||isNaN(e.getTime()))return null;let t=i(n=>String(n).padStart(2,"0"),"p2");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function _t(e){if(!e)return"";let t=e instanceof Date?e:new Date(e);if(isNaN(t.getTime()))return String(e);let n=i(s=>String(s).padStart(2,"0"),"p2"),r=t.getHours()||t.getMinutes()?" "+n(t.getHours())+":"+n(t.getMinutes()):"";return Me(t)+r}function yr(e){if(!e)return null;let t=new Date(e+"T23:59:59.999");return isNaN(t.getTime())?null:t}function Ve(e,t,n){let r=e instanceof Date?e:we(e);return!(!r||t&&r<t||n&&r>n)}var zp,Ip,Ot=ee(()=>{i(we,"parseDate");zp=["январ","феврал","март","апрел","ма","июн","июл","август","сентябр","октябр","ноябр","декабр"],Ip=["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"];i(Bo,"timeFrom");i(qp,"parseLoose");i(Nn,"startOfDay");i(Me,"ymd");i(_t,"localStamp");i(yr,"endOfDay");i(Ve,"inRange")});function fc(e){return/\/wp-content\//.test(e||"")}function Fo(e){let t=[],n=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,r;for(;r=n.exec(e);){let s;try{s=JSON.parse(r[1].trim())}catch{continue}let o=Array.isArray(s)?s:[s];for(let a of o)a&&a["@graph"]&&Array.isArray(a["@graph"])&&t.push(...a["@graph"]),a&&t.push(a)}return t}function Uo(e,t){return e?Array.isArray(e)?e.some(n=>String(n).toLowerCase().includes(t)):String(e).toLowerCase().includes(t):!1}function Kt(e,t){let n=new RegExp(`<meta[^>]+(?:property|name|itemprop)=["']`+lc+t+`["'][^>]*content=["']([^"']+)["']`,"i"),r=e.match(n);if(r)return r[1];let s=new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name|itemprop)=["']`+lc+t+`["']`,"i"),o=e.match(s);return o?o[1]:null}function Tt(e){if(!e)return e;let t={"&amp;":"&","&quot;":'"',"&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"«","&raquo;":"»","&ndash;":"–","&mdash;":"—","&hellip;":"…","&laquo":"«","&raquo":"»","&rsquo;":"’","&lsquo;":"‘","&rdquo;":"”","&ldquo;":"“"};return e.replace(/&#x27;/gi,"'").replace(/&#0?39;/g,"'").replace(/&(?:amp|quot|apos|lt|gt|nbsp|laquo|raquo|ndash|mdash|hellip|rsquo|lsquo|rdquo|ldquo);/g,n=>t[n]||n).replace(/&#x([0-9a-f]+);/gi,(n,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(n,r)=>String.fromCodePoint(parseInt(r,10)))}function gc(e,t){let n="",r=!1;for(let s=t+1;s<e.length;s++){let o=e[s];if(n){o===n&&(n="");continue}if(o==='"'||o==="'"){r&&(n=o,r=!1);continue}if(o===">")return s;if(o==="="){r=!0;continue}/\s/.test(o)||(r=!1)}return-1}function Ho(e,t=" "){let n=String(e??""),r="",s=0;for(;;){let o=n.indexOf("<",s);if(o<0){r+=n.slice(s);break}if(r+=n.slice(s,o),!/[a-zA-Z!/?]/.test(n[o+1]||"")){r+="<",s=o+1;continue}let a=gc(n,o);if(a<0){r+=n.slice(o);break}r+=t,s=a+1}return r}function Bp(e,t){let n=String(e??""),r="",s=0,o=!1;for(;;){let a=n.indexOf("<",s);if(a<0){o||(r+=n.slice(s));break}if(o||(r+=n.slice(s,a)),!/[a-zA-Z!/?]/.test(n[a+1]||"")){o||(r+="<"),s=a+1;continue}let l=gc(n,a);if(l<0){o||(r+=n.slice(a));break}let d=n.slice(a+1,l);/^\/a\s*$/i.test(d)?o=!1:/^a\b/i.test(d)&&!/\/\s*$/.test(d)&&/<\/a\s*>/i.test(n.slice(l))&&(o=!0),r+=t,s=l+1}return r}function wc(e,t=" "){return Tt(Ho(e,t)).replace(/\s+/g," ").trim()}function us(e){let t=Tt(String(e??"").trim());return/<[a-zA-Z!/?]/.test(t)?wc(t):t}function Go(e,t=12){let n=String(e||"").toLowerCase().trim();if(!n)return[];if(/^[a-z0-9-]+$/.test(n))return n.length>=4?[n]:[];let r=[""];for(let s of n){let o=Hp[s]||(/[a-z0-9]/.test(s)?[s]:null);if(!o)return[];let a=[];for(let l of r)for(let d of o)a.length<t&&a.push(l+d);r=a}return[...new Set(r)].filter(s=>s.length>=4)}function xe(e){let t;try{t=new URL(String(e))}catch{return String(e||"").trim()}let n=t.host.toLowerCase().replace(/^www\./,""),r=t.pathname.replace(/\/+$/,"")||"/",s=[...t.searchParams.entries()].filter(([o])=>!Fp.test(o)).sort((o,a)=>o[0].localeCompare(a[0])).map(([o,a])=>o+"="+a).join("&");return n+r+(s?"?"+s:"")}function bc(e){let t=String(e||"");return/новост[ией]+\s+(?:и\s+событи[йяе]+\s+)?по\s+теме|последние\s+новости\s+на\s+тему|все\s+(?:новости|материалы|публикации)\s+по\s+(?:теме|тегу)|материалы\s+по\s+тег|архив\s+(?:новостей|материалов|публикаций)|тақырып\s+бойынша\s+жаңалықтар/i.test(t)}function ps(e){let t;try{t=new URL(e).pathname}catch{return!1}let n=t.split("/").filter(Boolean).pop()||"";return n?/\d{4,}/.test(n)?!0:n.split(/[-_]/).filter(Boolean).length>=4:!1}function hn(e,t,n){let r=new RegExp("<(\\/?)"+n+"\\b","gi");r.lastIndex=t;let s=1,o;for(;o=r.exec(e);)if(o[1]){if(--s===0)return o.index}else if(++s>400)return-1;return-1}function Up(e){if(!e)return"";let t=String(e).replace(/<!--[\s\S]*?-->/g," ").replace(/<(script|style|noscript|svg|iframe|form|nav|aside|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi," ");{let f=/<(div|section|ul|ol)\b([^>]*)>/gi,m="",g=0,w;for(;w=f.exec(t);){let b=(w[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1]||"";if(!dc.test(b))continue;let y=hn(t,f.lastIndex,w[1]);y<0||(m+=t.slice(g,w.index)+" ",g=y,f.lastIndex=y)}t=m+t.slice(g)}t=t.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(f,m)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(m)?" ":f);{let f=/<(div|p|li|h[1-6])\b[^>]*>/gi,m="",g=0,w;for(;w=f.exec(t);){if(w.index<g)continue;let b=hn(t,f.lastIndex,w[1]);if(b<0)continue;let y=t.slice(f.lastIndex,b).trim();if((y.match(/<a\b/gi)||[]).length!==1)continue;let A=y.search(/<a\b/i),v=y.lastIndexOf("</a>");if(v<A)continue;let T=Ho(y.slice(0,A)).trim();Ho(y.slice(v+4)).trim()||T&&!/:$/.test(T)||(m+=t.slice(g,w.index)+" ",g=t.indexOf(">",b)+1||b,f.lastIndex=g)}t=m+t.slice(g)}{let f=/<(div|section|article|span|li|button)\b([^>]*\brole\s*=\s*["'](?:button|link|tab|menuitem)["'][^>]*)>/gi,m="",g=0,w;for(;w=f.exec(t);){let b=hn(t,f.lastIndex,w[1]);b<0||(m+=t.slice(g,w.index)+" ",g=b,f.lastIndex=b)}t=m+t.slice(g)}let n=i(f=>wc(f),"text"),r=t.match(/<([a-z]+)\b[^>]*itemprop\s*=\s*["']articleBody["'][^>]*>/i);if(r){let f=r.index+r[0].length,m=hn(t,f,r[1]);if(m>0){let g=n(t.slice(f,m));if(g.length>200)return g.slice(0,4e4)}}let s=150,o=i(f=>Bp(f,"\0").split("\0").reduce((m,g)=>{let w=g.replace(/\s+/g," ").trim();return m+(w.length>=s?w.length:0)},0),"longText"),a="",l=0,d=0,c=i((f,m)=>{(m>l||m===l&&(l>0?f.length<d:f.length>d))&&(a=f,l=m,d=f.length)},"offer"),h=i(f=>{let m=/<article\b[^>]*>/gi,g="",w=0,b;for(;b=m.exec(f);){let y=hn(f,m.lastIndex,"article");y<0||(g+=f.slice(w,b.index)+" ",w=f.indexOf(">",y)+1||y,m.lastIndex=w)}return g+f.slice(w)},"dropCards");{let f=/<article\b[^>]*>/gi,m;for(;m=f.exec(t);){let g=hn(t,f.lastIndex,"article");if(g<0)continue;let w=h(t.slice(f.lastIndex,g));c(n(w),o(w))}}if(a.length>200)return a.slice(0,4e4);let u=/(article|post|entry|news|material|publication|content|text|body)[-_]?(body|text|content|detail|full|inner)?/i;{let f=/<(div|section)\b([^>]*)>/gi,m;for(;m=f.exec(t);){let g=(m[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1];if(!g||!u.test(g)||dc.test(g))continue;let w=hn(t,f.lastIndex,m[1]);if(w<0)continue;let b=h(t.slice(f.lastIndex,w));c(n(b),o(b))}}return a.length>200?a.slice(0,4e4):[...t.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(f=>n(f[1])).filter(f=>f.length>40).join(" ").slice(0,4e4)}function At(e){let t=String(e||""),n;if(n=t.match(/(?:^|[\/\-_.])(20\d{2})[\/\-.](\d{1,2})[\/\-.](\d{1,2})(?:[\/\-_.]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}if(n=t.match(/(?:^|[\/\-_.])(\d{1,2})[\/\-.](\d{1,2})[\/\-.](20\d{2})(?:[\/\-_.]|$|\.html)/),n){let r=new Date(+n[3],+n[2]-1,+n[1]);if(!isNaN(r)&&+n[2]<=12&&+n[1]<=31)return r}if(n=t.match(/(?:^|[\/\-_])(20\d{2})(\d{2})(\d{2})(?:[\/\-_]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}return null}function Gp(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i,n=/(date|time|pub|posted|created|published)/i,r=[...e.matchAll(/<article\b/gi)].map(u=>u.index),s=[...e.matchAll(/<\/article\s*>/gi)].map(u=>u.index),o=i(u=>r.filter(p=>p<u).length>s.filter(p=>p<u).length,"inArticle"),a=null,l=null,d=null,c=null;for(let u of e.matchAll(/<time\b([^>]*)>/gi)){let p=u[1]||"",f=(p.match(/\sdatetime=["']([^"']+)["']/i)||[])[1]||"";if(!f){let b=u.index+u[0].length,y=e.slice(b,b+200),A=y.search(/<\/time\s*>/i);if(A<0)continue;let v=Tt(y.slice(0,A).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!v||v.length>80)continue;f=v}c||(c=f);let m=(p.match(/class=["']([^"']*)["']/i)||[])[1]||"";if(t.test(m))continue;if(!a&&o(u.index)){a=f;break}if(!l&&n.test(m)){l=f;continue}let w=[...e.slice(Math.max(0,u.index-400),u.index).matchAll(/class=["']([^"']*)["']/gi)].pop();w&&t.test(w[1])||d||(d=f)}let h=a||l||d||c;return h?we(h):null}function Kp(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i;e=String(e).replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(n,r)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(r)?" ":n);for(let n of e.matchAll(/<(?:div|span|p|li|h[1-6])[^>]*class=["']([^"']*(?:date|time|pub|posted|created)[^"']*)["'][^>]*>([\s\S]{0,160}?)<\/(?:div|span|p|li|h[1-6])>/gi)){if(t.test(n[1]))continue;let r=Tt(n[2].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!r||r.length>80)continue;let s=we(r);if(s)return s}return null}function Wp(e,t){let n=new Set,r=i(l=>Tt(String(l||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"norm"),s="";try{s=new URL(t,"https://x").pathname.replace(/\/+$/,"")}catch{}let o=i(l=>{if(!l)return!1;try{return new URL(String(l).replace(/\\\//g,"/"),"https://x").pathname.replace(/\/+$/,"")===s}catch{return!1}},"sameUrl"),a=i(l=>{if(!(!l||typeof l!="object")){if(Array.isArray(l)){for(let d of l)a(d);return}if(l.headline&&!o(l.url)){let d=r(l.headline);d.length>=20&&n.add(d)}for(let d of["itemListElement","item","@graph","mainEntity"])l[d]&&a(l[d])}},"eat");for(let l of Fo(e))(Uo(l["@type"],"list")||l.itemListElement)&&a(l);for(let l of e.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)){if(o(l[1]))continue;let d=r(l[2]);d.length>=20&&d.length<=200&&n.add(d)}return[...n]}function uc(e,t){if(!t||!t.length)return e;let n=String(e).replace(/\s+$/,""),r=t.slice().sort((s,o)=>o.length-s.length);for(let s=0;s<12;s++){let o=n.replace(/\s+$/,""),a=r.find(l=>o.endsWith(l));if(!a)break;n=o.slice(0,o.length-a.length).replace(/[\s·|—–-]+$/,"")}return n}function xc(e){for(let n of Fo(e))if(Uo(n["@type"],"article"))return!0;return(Kt(e,"og:type")||"").toLowerCase().includes("article")?!0:!!Kt(e,"article:published_time")}function Ko(e,t,n=""){let r=null,s=null,o=!1,a=null,l=null,d="",c=i(m=>m==null?"":typeof m=="string"?m:Array.isArray(m)?m.map(c).filter(Boolean).join(" "):typeof m=="object"?c(m["@value"]||m.text||m.name||""):String(m),"asText"),h=null;for(let m of Fo(e))Uo(m["@type"],"article")&&(o=!0,m.datePublished&&!h&&(h=we(m.datePublished)),m.headline&&!s&&(s=c(m.headline)),m.description&&!a&&(a=c(m.description)),m.articleBody&&!l&&(l=c(m.articleBody)));let u={jsonld:i(()=>h,"jsonld"),"meta-og":i(()=>{let m=Kt(e,"article:published_time");return m?we(m):null},"meta-og"),"meta-itemprop":i(()=>{let m=Kt(e,"datePublished");return m?we(m):null},"meta-itemprop"),time:i(()=>Gp(e),"time"),"text-block":i(()=>Kp(e),"text-block")};for(let m of $p){let g=u[m]();if(g){r=g,d=m;break}}if(s||(s=Kt(e,"og:title")),!s){let m=e.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);m&&(s=m[1].replace(/<[^>]+>/g,""))}a||(a=Kt(e,"description")||Kt(e,"og:description")),o||((Kt(e,"og:type")||"").toLowerCase().includes("article")||Kt(e,"article:published_time"))&&(o=!0);let p=Wp(e,t),f=uc(Up(e),p);if(l&&(l=uc(l,p)),!l)l=f;else if(f){let m=i(b=>String(b).toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim(),"flat"),g=m(l),w=m(f);g&&w.includes(g)?l=f:g.includes(w)||(l=l+" "+f)}return!r&&t&&(r=At(t),r&&(d="url")),r?{url:t,dateVia:d,title:us(s)||t,date:r.toISOString(),isArticle:o,description:us(a),body:l?us(c(l)):""}:null}function kc(e){let t;try{t=new URL(e).pathname.toLowerCase()}catch{return!1}return vc.test(t)}function jn(e,t){let n=new URL(t).host,r=new Set,s=i(d=>{let c;try{c=new URL(d.replace(/\\\//g,"/"),t).href}catch{return}let h;try{h=new URL(c)}catch{return}if(h.host!==n)return;let u=h.pathname.toLowerCase();u==="/"||u===""||vc.test(u)||/\/(search|search_results|results|tag|tags|category|categories|author|rubric|page|feed|rss|login|register)\b/.test(u)||u.split("/").filter(Boolean).length<1||r.add(c.split("#")[0])},"add"),o,a=/href=["']([^"'#]+)["']/gi;for(;o=a.exec(e);)s(o[1]);if(/^\s*[\[{]/.test(e)||r.size===0){let d=/"[\w]*(?:url|link|uri)"\s*:\s*"((?:https?:)?\\?\/\\?\/?[^"]+)"/gi;for(;o=d.exec(e);)s(o[1]);let c=new RegExp("https?:\\\\?/\\\\?/(?:www\\.)?"+n.replace(/^www\./,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+`\\\\?/[^"'\\s<>]+`,"gi");for(;o=c.exec(e);)s(o[0])}return[...r]}function Sc(e){let t=[],n=/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi,r;for(;r=n.exec(e);){let s=(r[0].match(/href=["']([^"']+)["']/i)||[])[1];s&&t.push(s)}return t}function Tc(e){let t=[],n=e.match(/<item[\s\S]*?<\/item>/gi)||[];for(let s of n){let o=mt((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=mt((s.match(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i)||[])[1])||"",l=mt((s.match(/<pubDate(?:\s[^>]*)?>([\s\S]*?)<\/pubDate>/i)||[])[1]||(s.match(/<dc:date(?:\s[^>]*)?>([\s\S]*?)<\/dc:date>/i)||[])[1]),d=mc((s.match(/<description(?:\s[^>]*)?>([\s\S]*?)<\/description>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:l||null,description:d?us(d):""})}if(t.length)return t;let r=e.match(/<entry[\s\S]*?<\/entry>/gi)||[];for(let s of r){let o=mt((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=((s.match(/<link[^>]+href=["']([^"']+)["']/i)||[])[1]||"").trim(),l=mt((s.match(/<(?:published|updated)(?:\s[^>]*)?>([\s\S]*?)<\/(?:published|updated)>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:l||null})}return t}function Ac(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=mt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=mt((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]||(r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Lc(e){let t=[],n=e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[];for(let r of n){let s=mt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=mt((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Cc(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=mt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]),o=mt((r.match(/<news:title(?:\s[^>]*)?>([\s\S]*?)<\/news:title>/)||[])[1]),a=mt((r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1]||(r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]);if(!s)continue;let l=we(a);t.push({url:s,title:o||null,date:l?l.toISOString():null})}return t}function hc(e){if(!e)return"";let t=String(e).replace(/\s+/g,"").replace(/%3D/gi,"=").replace(/%2B/gi,"+").replace(/%2F/gi,"/"),n=pc(t);if(!n){let r=(4-t.length%4)%4;try{n=pc(t+"=".repeat(r))}catch{}}return n}function Mc(e,t){try{let n=String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(!n)return null;let r=/(^|\.)(bing|microsoft|msn|bingapis|windows|office\.net|live\.com|outlook\.com|go\.microsoft)\./i,s=i(d=>{try{return decodeURIComponent(d)}catch{return String(d)}},"tryDec"),o=[];i(d=>{try{let c=/^https?:/i.test(d)||d.startsWith("http")?d:d.startsWith("/")?"https://www.bing.com"+d:"https://"+d,h=new URL(c);for(let[f,m]of h.searchParams.entries())m&&/^(u|uddg|url|to|dest|destination|target|redirect|page|link|ref)[\d]*$/i.test(f)&&o.push(String(m));let p=(h.search+"&").match(/[?&]u=([A-Za-z0-9_\-+/=%]{20,})/i);p&&o.push(decodeURIComponent(p[1]))}catch{}},"tryFromUrl")(n);let l=[];for(let d of o)l.push(d);l.push(n,s(n),s(s(n))),/^[A-Za-z0-9_\-+/=]{40,}$/.test(n)&&l.push(hc(n));for(let d=0;d<l.length;d++){let c=l[d];if(!c)continue;let h=String(c).match(/[A-Za-z0-9_\-+/]{40,}={0,3}/g)||[];for(let p of h){let f=hc(p);f&&/^https?:/i.test(f)&&l.push(f)}let u=String(c).match(/https?:\/\/[^\s"'&<>()\\]+/gi)||[];for(let p of u)try{let f=new URL(p.split("#")[0].replace(/\/+$/,"")),m=f.host.replace(/^www\./,"");if(r.test(m))continue;if(m===t||m.endsWith("."+t))return f.href.split("#")[0]}catch{}}return null}catch{return null}}var lc,mc,mt,Hp,Fp,dc,$p,yc,vc,pc,xr=ee(()=>{Ot();i(fc,"isWordPress");i(Fo,"jsonLdObjects");i(Uo,"typeIncludes");lc="(?:og:)?";i(Kt,"metaContent");mc=i(e=>e==null?e:String(e).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1"),"stripCdata"),mt=i(e=>{let t=mc(e);return t==null?t:Tt(t).trim()},"xmlText");i(Tt,"decodeEntities");i(gc,"tagEnd");i(Ho,"stripTags");i(Bp,"stripLinksAndTags");i(wc,"htmlToText");i(us,"unmarkup");Hp={а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["e","ye"],ё:["e","yo"],ж:["zh"],з:["z"],и:["i"],й:["i","y"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["h","kh"],ц:["c","ts"],ч:["ch"],ш:["sh"],щ:["sch"],ъ:[""],ы:["y"],ь:[""],э:["e"],ю:["yu","iu"],я:["ya","ia"],ә:["a","ae"],ғ:["g","gh"],қ:["k","q",""],ң:["n","ng"],ө:["o","oe"],ұ:["u"],ү:["u","ue"],һ:["h"],і:["i"]};i(Go,"translitVariants");Fp=/^(utm_|yclid|gclid|fbclid|from|_openstat|ysclid)/i;i(xe,"urlKey");i(bc,"looksLikeListingTitle");i(ps,"looksLikeArticleUrl");dc=/(sidebar|side-bar|aside|widget|banner|advert|reklam|menu|nav|breadcrumb|footer|header|subscribe|podpis|social|share|comment|komment|related|similar|also|recommend|read-?more|popular|latest|last-?news|news-?list|tags?|rubric|category)/i;i(hn,"blockEnd");i(Up,"extractBodyText");i(At,"dateFromUrl");i(Gp,"pickTimeDate");i(Kp,"pickTextBlockDate");$p=["jsonld","meta-og","meta-itemprop","time","text-block"],yc={jsonld:"разметка JSON-LD","meta-og":"мета article:published_time","meta-itemprop":"микроразметка itemprop",time:"тег <time>","text-block":"текстом в блоке с датой",url:"дата в адресе"};i(Wp,"foreignTitles");i(uc,"trimForeignTail");i(xc,"declaresArticle");i(Ko,"extractArticleMeta");vc=/\.(xml|json|jsonld|js|mjs|map|css|txt|jpg|jpeg|png|webp|gif|svg|ico|avif|bmp|tiff?|woff2?|ttf|otf|eot|pdf|mp4|webm|mov|avi|mp3|ogg|wav|zip|rar|7z|gz|tar|docx?|xlsx?|pptx?|rtf|epub|apk|exe|dmg)$/;i(kc,"isAssetUrl");i(jn,"extractLinks");i(Sc,"extractFeedLinks");i(Tc,"parseFeed");i(Ac,"parseUrlset");i(Lc,"parseSitemapIndex");i(Cc,"parseNewsSitemap");pc=typeof Buffer<"u"&&Buffer.from?e=>{try{return Buffer.from(e,"base64").toString("utf8")}catch{return""}}:e=>{try{return atob(e.replace(/_/g,"/").replace(/-/g,"+"))}catch{return""}};i(hc,"_b64dec");i(Mc,"bingReal")});function $o(e){let t;try{t=new URL(e).host.replace(/^www\./,"")}catch{return null}if(hs[t])return hs[t];for(let n of Object.keys(hs))if(t===n||t.endsWith("."+n))return hs[n];return null}var hs,Rc=ee(()=>{hs={"zakon.kz":{search:"https://www.zakon.kz/search/?handler=LoadMoreNews&qsearch={q}&author=0&category=0&tag=0&perioddate=&p={page}",selectors:{container:"div.news-item",link:"a.newscard_link",title:"div.newscard__title",date:"span.newscard__date"}},"tengrinews.kz":{search:"https://tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"}},"ulysmedia.kz":{search:"https://ulysmedia.kz/search/?search_text={q}&page={page}",selectors:{container:".col-xl-3.xl-mb-20",link:"a.category__title",title:"a.category__title",date:"span.date"},browserSearch:!0},"exclusive.kz":{search:"https://exclusive.kz/?s={q}",cms:"wordpress",browserSearch:!0,external:!1},"inform.kz":{search:null,render:"https://www.inform.kz/search_results/?q={q}",api:"https://search.inform.kz/search/ru?q={q}&per_page=20&page={page}",note:"HTTP-поиск — JS-оболочка (страница равна пустому запросу ±2 длины слова, ссылок на статьи ноль); браузером та же страница даёт 17 ссылок на статьи, но ищет сайт ТОЛЬКО по заголовку — ключ в тексте его выдача не находит"},"informburo.kz":{search:null,render:"https://informburo.kz/search?q={q}",note:"HTTP-поиск — виджет Google (cse.google.com, cx=dcd9aa27056d92a81): по HTTP приходит одна и та же страница ±14 байт, ссылок на статьи ноль. Браузером та же страница даёт 11 своих результатов -> берём рендером. Материал сайту приносят карта новостей и глубина"},"liter.kz":{search:"https://liter.kz/search/?search_text={q}"},"newtimes.kz":{search:"https://newtimes.kz/search/?search_text={q}"},"vlast.kz":{search:"https://vlast.kz/search/?query={q}",browserSearch:!0,external:!1,note:"внешний забанен, но браузер-поиск работает"},"kapital.kz":{search:"https://kapital.kz/amp/search?s={q}"},"time.kz":{search:"https://time.kz/search?q={q}",browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку -> подстраховываемся браузером; внешний мёртв"},"forbes.kz":{search:"https://forbes.kz/search?q={q}&type=articles&s=data&page={page}"},"inbusiness.kz":{search:"https://inbusiness.kz/ru/search?q={q}",external:!1},"kazpravda.kz":{search:"https://kazpravda.kz/search?q={q}"},"nazarbayev.kz":{search:"https://nazarbayev.kz/ru/search?body_value={q}&title={q}&time=&created[min]=&created[max]=&field_news_type_value=All",cms:"drupal",note:"Drupal exposed filter на /ru/search (не /kk/ — тот даёт 500); есть created[min/max] для серверного фильтра дат"},"baq.kz":{search:"https://baq.kz/search/{bpage}?q={q}",browserSearch:!0,note:"server-rendered поиск, Bitrix-пагинация /search/pagenN/?q=; браузер-поиск подстрахован"},"kursiv.media":{search:"https://kz.kursiv.media/{wpage}?s={q}",cms:"wordpress",note:"WordPress-поиск /?s= (не /ru/!), пагинация /page/N/?s="},"lsm.kz":{search:null,render:"https://lsm.kz/search?q={q}",needs_js:!0,browserSearch:!0,external:!1,note:"HTTP-поиск — оболочка (±2 байта на любое слово, ссылок ноль): выдачу подгружает POST /processing с телом chapter=search&p={page}&q={q}&tag= — он отвечает и обычному запросу (18 ссылок против 6 на мусоре), но канал поиска умеет только GET, поэтому пока рендер. Дата статьи лежит в НЕСТАНДАРТНОЙ мете og:article:published_time и текстом («19 сентября 2026 года») — из-за приставки og: разбор не видел её вовсе, и сайт отдавал «без даты на странице — 48» при живых статьях (улики 24 сентября 2026, починено). Браузер-поиск строку поиска не находит"},"sputnik.kz":{search:null,external:!1,note:"поиск = React + невидимая reCAPTCHA (getmore за g-recaptcha-response) -> из fetch не взять; RSS свежак + sitemap-глубина. Внешний тоже глух (Bing не индексирует статьи)."},"total.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиск = Google CSE в iframe -> невзят; браузер-поиск через форму сайта работает"},"interfax.kz":{search:null,external:!0,note:"на сайте поиска нет -> только RSS/sitemap (свежак) + внешний Google site: по периоду"},"press.kz":{search:null,render:"https://press.kz/search?title={q}",external:!1,note:"поиск сайта — /search?title= (адрес его собственной формы, дал пользователь). ПО HTTP он результатов не отдаёт: страница приходит одна и та же (30 ссылок) при любом слове, а от пустого запроса отличается ровно на удвоенную длину слова — то есть слово только эхом печатается в форме и в заголовке, а выдачу рисует JS. Поэтому HTTP-поиск выключен, а страница берётся РЕНДЕРОМ. ?s= — это вообще главная (37 ссылок, побайтово те же). Глубину даёт карта сайта (48 адресов); статьи размечены нормально — JSON-LD с datePublished читается"},"kaztag.kz":{search:null,render:"https://kaztag.kz/ru/search/?searchid=2383993&web=0&text={q}",feed:"https://kaztag.kz/ru/news/?PAGEN_1={page}",browserSearch:!0,external:!1,note:"статьи за Cloudflare (обычным запросом не открываются -> дочитываем браузером). Поиск по сайту — виджет Яндекса (searchid=2383993), выдачу рисует JS -> берём рендером. Лента PAGEN_1 — свежак"},"orda.kz":{search:null,render:"https://orda.kz/search-results.html?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (render всё же поднимает результаты); внешний бесполезен"},"nur.kz":{search:null,feed:"https://www.nur.kz/latest/",external:!1,note:"поиска нет, sitemap заморожены; лента /latest/ (свежак). Внешний не индексирует -> отключён"},"lenta.ru":{search:"https://lenta.ru/search/v2/process?query={q}&from={off10}&size=10&sort=2&title_only=0&domain=1",external:!1,note:'служебный вход поиска отдаёт JSON (не HTML): {"matches":[{"url":…,"title":…}]}. Ссылки из него достаёт разбор JSON в extractLinks — проверено прогоном 26 сентября 2026: 118 материалов за двое суток, 112 из них не нашёл никто другой. Пагинация from= (шаг 10); дата в адресе /YYYY/MM/DD/ -> отсев без скачивания'},"rbc.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 212 117 байт по слову против 213 027 по мусору, уникальная ссылка ровно одна. Главная за антиботом (редирект на служебный путь с UUID). Материал дают карта новостей /google-news-sitemap.xml (429 записей, 315 свежих, с заголовком и датой) и глубина. Внешний поиск снят 26 сентября 2026: он отправляет наружу само ключевое слово и не дал ни строки ни в одном прогоне"},"ria.ru":{search:"https://ria.ru/services/search/getmore/?query={q}&offset={off20}",external:!1,budgetMs:12e4,note:"поиск честно ищет: 41 454 байта по слову против 179 по мусору, 20 своих ссылок против нуля. Пагинация getmore?offset= (шаг 20); дата в адресе /YYYYMMDD/ -> отсев без скачивания. В прогоне 26 сентября 2026 — 127 материалов, поиск принёс 120 (41 не нашёл никто другой). Внешний снят: он выдаёт наружу ключевое слово"},"mk.ru":{search:"https://www.mk.ru/search/?q={q}",external:!1,note:"шаблон вписан руками, потому что АВТОДЕТЕКТ ПРОМАХИВАЛСЯ: он брал оболочку («ссылок 6, совпало 0»), а /search/?q= ищет по-настоящему — на мусорное слово сайт отвечает HTTP 404, на живое 200 и 10 своих ссылок. Сайт режет частоту: в прогоне 26 сентября 2026 отдал 88 раз «перегружен» (HTTP 429), сбавленный ход отработал сам"},"kommersant.ru":{external:!1,note:"поиск сайта ищет по-настоящему: 226 795 байт по слову против 116 131 по мусору, 32 свои ссылки. Автодетект находит его сам (форма /search/results?search_query=), 34 материала за двое суток. ОГОВОРКА: выдача ссылается на статьи с хвостом ?query=…&sids=…, и тот же материал приезжает ВТОРОЙ строкой — `urlKey` служебные параметры не режет (улика 26 сентября 2026, 3 дубля из 452 строк)"},"aif.ru":{external:!1,note:"поиск сайта ищет: 139 586 байт по слову против 121 221 по мусору, 15 своих ссылок. Автодетект находит его сам (/search?text=), 26 материалов за двое суток. Плюс RSS /rss/news на 300 записей с датами"},"bfm.ru":{external:!1,note:"поиск сайта ищет: 61 613 байт по слову против 55 002 по мусору, 10 своих ссылок. Автодетект находит его сам (параметр SearchPageForm[query]). Карта новостей /sitemap_google_news.xml — 178 записей, 124 свежих, с заголовком и датой"},"vedomosti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 171 492 байта на ЛЮБОЕ слово, уникальных ссылок ноль. Материал даёт карта новостей /sitemap_google_news.xml (334 записи, 176 свежих, с заголовком и датой) и глубина — 25 материалов за двое суток"},"interfax.ru":{search:null,external:!1,note:"страница /search/?sTextShow= отдаёт ЛЕНТУ: 52 ссылки одинаковые по слову и по мусору, разница в один байт. Материал дают RSS и карты — 27 материалов за двое суток. Страницы /photo/ дат не несут (27 штук в потерях) — это фоторепортажи, а не пропуск"},"kp.ru":{search:null,external:!1,note:"/search/?q= и /search/?query= отдают HTTP 404 и одну и ту же страницу на любое слово. Материал даёт только глубина — 47 за двое суток"},"vesti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 645 679 байт на любое слово, уникальных ссылок ноль. Живой вход — карта новостей /sitemap-news.xml (919 записей, все свежие, с заголовком и датой)"},"ntv.ru":{search:null,external:!1,note:"и /finder/?keytext=, и /search/?q= отдают одну и ту же страницу в 32 056 байт на любое слово. Карта новостей — /exp/yandex/sitemap_last.jsp (2981 адрес), заголовков в ней нет, дата есть"},"1tv.ru":{external:!1,note:"типовые /search?q= — оболочка (198 989 байт на любое слово), но автодетект находит собственный поиск движка сайта и он работает: 19 материалов за двое суток. Шаблон намеренно НЕ вписан, чтобы не потерять его пагинацию"},"life.ru":{search:null,external:!1,note:"/search?q= — оболочка (184 788 байт на любое слово). Материал дают RSS (200 записей с датами) и глубина — 58 за двое суток"},"news.ru":{search:null,external:!1,note:"ПОИСК ЗАПРЕЩЁН САМИМ САЙТОМ: в robots.txt секция User-agent: * содержит Disallow: /*? и Disallow: /search/, то есть любые адреса с параметрами. Ленты и карты при этом открыты и дают материал — 50 за двое суток (RSS + карта новостей + глубина)"},"business-gazeta.ru":{search:null,external:!1,note:"/search?q= и /search?fullpage=1&q= отдают 25 690 байт на любое слово, ссылок на статьи ноль. Живой вход — RSS /rss.xml"},"fontanka.ru":{search:null,external:!1,note:"поиск по HTTP не ищет: 313 098 против 313 626 байт, слова на странице нет вовсе -> выдачу рисует скрипт. Материал даёт глубина, но за двое суток всего 2 — при 2990 статьях сайта за период мы читаем 300, то есть десятую часть"},"iz.ru":{external:!1,note:"ГЛАВНАЯ отдаёт HTTP 403 (антибот), а RSS и карты при этом открыты и работают: 59 материалов за двое суток. Поиск находит автодетект, шаблон не вписан намеренно"},"gazeta.ru":{search:null,external:!1,note:"страница поиска — заглушка на 3978 байт, ссылок ноль. Карта новостей /sitemap_news.xml — 56 адресов, все свежие. В прогоне 26 сентября 2026 сайт дал НОЛЬ при 77 честно прочитанных статьях: кандидатов нашлось всего 100, то есть вход узкий. Проверить прогоном на широком окне"},"tass.ru":{external:!1,note:"ИЗ ОБЛАЧНОЙ СЕССИИ НЕ ОТКРЫВАЕТСЯ ВОВСЕ: главная отдаёт обрубок в 1,8 КБ, robots.txt — fetch failed, карты сайта не открылись, в прогоне «каналы: none» и ноль. Это может быть репутация дата-центра, а не факт о сайте (случай Reuters) — проверить прогоном с домашней машины, прежде чем делать выводы"},"forbes.ru":{search:null,external:!1,note:"на ЛЮБОЙ адрес, включая robots.txt, отдаётся JS-заглушка антибота (13 602 байта, считает куку скриптом). В прогоне «каналы: none» и ноль. Обычным запросом сайт не взять; проверить прогоном с домашней машины"},"svpressa.ru":{external:!1,note:"форма поиска на главной ведёт на ВИДЖЕТ ЯНДЕКСА (yandex.ru/sitesearch), но автодетект находит рабочий вход сам — 6 материалов за двое суток. Своих карт новостей и RSS у сайта нет"},"ura.news":{external:!1,note:"сайт запрещает автоматический обход: robots.txt, секция User-agent: * -> Disallow: /. В предустановленный список не добавлен намеренно (решение то же, что по Reuters)"},"bbc.com":{search:null,render:"https://www.bbc.com/search?q={q}",selectors:{container:'a[data-testid="internal-link"]',title:'[data-testid="card-headline"]',date:""},external:!1,note:"SPA-поиск; язык запроса = язык сайта (Tokayev для англ.). Замер 23 сентября 2026: формы поиска в разметке главной НЕТ вовсе (её рисует скрипт), поэтому HTTP-поиск выключен, а страница берётся рендером. Материал даёт sitemap-глубина — 14 за сутки по ключу «China»"},"theguardian.com":{search:null,external:!1,note:"HTTP-поиска нет (/search отдаёт 404, формы на главной нет); материал даёт карта новостей с заголовками"},"aljazeera.com":{search:null,external:!1,note:"поиск — оболочка (страница одна и та же на любое слово), WordPress-вход отвечает 404; материал дают rss и карта новостей"},"dw.com":{search:"https://www.dw.com/search/?languageCode=en&item={q}",external:!1,note:"поиск РАБОТАЕТ, параметр item (не q). Осторожно: /search/СЛОВО — это эхо, а не поиск. Пагинация pageIndex не двигается, поэтому страниц в шаблоне нет. languageCode задаёт язык выдачи"},"cnn.com":{search:null,external:!1,note:"форма ведёт на /search?q=, но страница по слову и по мусору побайтово одинакова — выдачу рисует скрипт"},"npr.org":{search:null,external:!1,note:"поиск — оболочка. Карта новостей лежит на другом хосте (googlecrawl.npr.org) и перечислена в robots — канал глубины её берёт"},"euronews.com":{search:"https://www.euronews.com/search?query={q}",external:!1,note:"поиск РАБОТАЕТ, параметр query (/?s= и ?text= отдают ленту). В прогоне 23 сентября 2026 сайт отвечал 406 и на поиск, и на 28 статей; причина не найдена, повторить не удалось — если 406 вернётся, смотреть здесь"},"cbsnews.com":{search:null,external:!1,note:"поиск — оболочка: страницы по слову и по мусору побайтово одинаковы. На быстрый повторный запрос сайт отвечает 406 — это не «ищет», это нас придержали"},"nbcnews.com":{search:null,external:!1,note:"форма ведёт на /search/, но страница в 19 КБ и ссылок на статьи не содержит вовсе; ?s= отдаёт ЛЕНТУ (та же страница на любое слово, искомого слова на ней нет). Материал: rss и карта сайта (без заголовков — дату и ключ узнаём только скачав). Статьи читаются образцово: JSON-LD, дата и тело на месте (улики 24 сентября 2026) — прежний ноль в одном прогоне из двух был разовым отказом главной, а не поломкой"},"independent.co.uk":{search:null,external:!1,note:"/search отдаёт 404, формы на главной нет. Материал дают rss (100 записей) и карта новостей с заголовками"},"straitstimes.com":{search:null,external:!1,note:"поиск — оболочка (восемь проб, страница одна и та же). Материал дают карта новостей с заголовками и rss"},"time.com":{search:null,external:!1,note:"поиск — оболочка. В robots.txt у секции «*» нет ни одного запрета. Материал дают карта новостей и rss"},"usatoday.com":{search:null,external:!1,note:"ЭХО, а не поиск: слово на странице есть, но ссылки на статьи у страницы по слову и по мусору ОДНИ И ТЕ ЖЕ. Судить надо по ссылкам, а не по числу вхождений"},"newsweek.com":{search:null,external:!1,note:"/search?q= отвечает 406, /?s= — это главная. Материал дают rss и карта сайта"},"abcnews.com":{search:null,external:!1,note:"формы поиска на главной нет. Карта новостей — 1000 адресов с заголовками, самая объёмная из проверенных"},"abcnews.go.com":{search:null,external:!1,note:"издание переехало на abcnews.com — вписывайте новый адрес, на старом материала не будет"},"apnews.com":{search:null,external:!1,note:"403 на главную и карты — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026). Значит это НЕ репутация дата-центра, как я предполагал, а обычный отказ всем подряд; robots.txt при этом обход разрешает. Материал даёт только карта новостей — по заголовку, без скачивания"},"france24.com":{search:null,external:!1,note:"из облака 403, хотя robots.txt отдаётся и перечисляет карты новостей по языкам. Тот же класс, что apnews. Английская версия — на /en/"},"japantimes.co.jp":{search:null,external:!1,note:"403 на главную и поиск — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026), то есть отказ не по адресу обращающегося. Ищет ли /search?query= на самом деле — по-прежнему неизвестно: страницу не отдают никому. RSS работает (/feed)"},"reuters.com":{search:null,render:"https://www.reuters.com/site-search/?query={q}",external:!1,note:"поиск сайта — /site-search/?query= (адрес дал пользователь). По HTTP отдаёт 401 DataDome, выдачу рисует Arc-скрипт -> берём РЕНДЕРОМ, без пагинации (render рендерит один адрес). Из облака 401 и обычным запросом, и настоящим Chromium — это репутация дата-центра, у пользователя с домашнего адреса должно открыться. Карты сайта при этом ОТКРЫТЫ: news-sitemap отдаёт 50 записей с заголовком и точной датой, то есть материал с ключом В ЗАГОЛОВКЕ находится вообще без скачивания. Дата стоит в адресе (…-2026-09-22/) -> отсев вне периода бесплатный. В robots.txt сайт запрещает автоматический сбор (Disallow: / для всех) — решение владельца"},"khabar.kz":{search:["https://khabar.kz/ru/search/search?searchword={q}&limitstart={off20}","https://khabar.kz/kk/search/search?searchword={q}&limitstart={off20}"],browserSearch:!0,external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии, материалы у них разные). Прежняя запись «поиска нет» смотрела /search/?q= — это лента. Глубину даёт sitemap"},"nomad.su":{search:null,browserSearch:!0,external:!1,note:"по уликам: /?s= игнорирует запрос (та же страница на любое слово, ссылок-статей 0). HTTP-поиска нет; браузер-поиск работает; внешний мёртв"},"31.kz":{search:null,browserSearch:!0,noRender:!0,note:"render капчит (0 ссылок); браузер-поиск открывает форму; DDG изредка даёт (не гасим external)"},"ktk.kz":{search:null,browserSearch:!0,external:!1,feed:"/ru/News/AjaxPublications/",feedPost:"lastDate={date}",render:"https://www.ktk.kz/ru/Search/Index/?text={q}&searchid=2472426",note:"поиск сайта — виджет Яндекса (searchid=2472426, адрес дал пользователь 3 сентября 2026), выдачу рисует JS -> берём рендером. Даты виджет принимает, но НЕ применяет и сортирует по релевантности — старьё отсеиваем сами по дате в адресе, это бесплатно.главная и СТАТЬИ обычным запросом НЕ открываются вовсе -> и то, и другое через браузер. Причина названа уликой 24 сентября 2026 (архив с машины пользователя): «сертификат сайта не проверяется (UNABLE_TO_VERIFY_LEAF_SIGNATURE)», то есть цепочка сертификата не доходит до доверенного корня, а не WAF. Браузер такое лечит сам (дотягивает промежуточный сертификат), Node — нет. Ключ у ktk обычно НЕ в заголовке (проверено пользователем 2 сентября 2026), поэтому статью надо именно прочитать, иначе материал не найти. Вход к нужным датам: кнопка «Ещё новости» дёргает POST /ru/News/AjaxPublications/ с телом lastDate=ДД.ММ.ГГГГ и отдаёт кусок ленты строго СТАРШЕ этой даты (проверено живьём: 01.09.2026 -> 18 ссылок за 31 августа). ?page= и ?PAGEN_1= лента игнорирует, sitemap.xml отдаёт 404"},"camonitor.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиска нет; браузер-поиск снимает выдачу; внешний глух. Главная за WAF -> идёт через браузер (HTTP 403 подтверждён уликой 24 сентября 2026 с машины пользователя, то есть это не репутация облачного адреса), но robots/карта отдаются обычным запросом: глубину даёт sitemap (300 кандидатов)"},"dialog.kz":{search:null,feed:"https://dialog.kz/?page={page}",browserSearch:!0,external:!1,note:"главная через браузер — обычным запросом не открывается вовсе: «сертификат сайта не проверяется (UNABLE_TO_VERIFY_LEAF_SIGNATURE)», проверено уликой 24 сентября 2026 на машине пользователя (не WAF, а неполная цепочка сертификата). Пагинация ленты ?page=N (0,1,2…). Браузер-поиск отрабатывает; внешний мёртв"},"ratel.kz":{search:"https://ratel.kz/search?q={q}",external:!1,note:"РАБОЧИЙ поиск — /search?q= (проверено пользователем 2 сентября 2026). Прежняя разведка смотрела /?s=, а это ЛЕНТА: 78 ссылок и на слово, и на мусор. Дата лежит ТЕКСТОМ в div.post_news__date («Пятница, 04 Июл 2025, 12:00») — ни <time>, ни разметки"},"weproject.media":{browserSearch:!0,external:!1,note:"поиск по форме детектится; внешний мёртв, браузер-поиск подхватывает"},"esquire.kz":{browserSearch:!0,external:!1,note:"поиск по форме /search?query= отвечает обычному запросу (23 сентября 2026: 71 891 б и 6 своих ссылок против 68 561 б и нуля на мусорном слове) — прежняя заметка «HTTP-поиск таймаутит» была разовым отказом, а не фактом о сайте. Браузер-поиск живой; внешний мёртв"},"sn.kz":{browserSearch:!0,note:"HTTP-поиск (native) слабый (24 ссылки); браузер-поиск усиливает"},"zonakz.net":{dead:!0,note:"издание закрыто в 2025 году: сайт открывается, новых материалов нет (проверено пользователем 2 сентября 2026)"},"diapazon.kz":{search:"https://diapazon.kz/search?q={q}&page={page}",feed:"https://diapazon.kz/article/more-list?category=0&count=30&offset={off30}&viewType=main",feedFirst:"https://diapazon.kz/all-news",browserSearch:!0,external:!1,note:"поиск сайта — /search?q= (адрес его собственной формы), пагинация &page=N. Прежняя запись «HTTP-поиска нет» смотрела /?s= — это лента. Статьи без разметки (og:type=website) — берутся по виду адреса. Ни RSS, ни карты сайта нет: глубину даёт AJAX-лента article/more-list?offset={off30} (шаг 30, 20 страниц = 600 ссылок за прогон). feedFirst = статика /all-news как первая страница."},"arasha.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"adyrna.kz":{search:null,feed:"https://adyrna.kz/kk",render:"https://adyrna.kz/kk/search?q={q}",external:!1,note:"быстрый вход — лента на главной: 148 ссылок обычным запросом, покрывают последние 5-6 суток (пагинации нет, одной страницы хватает). Поиск сайта — виджет Google, по HTTP недоступен, поэтому запасным идёт рендер. Карта сайта свежесть НЕ показывает: lastmod у всех 65 398 адресов сегодняшний, а самые «свежие» по нему — материалы 2022-2024 годов. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"democrat.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"malim.kz":{browserSearch:!0,note:"поиск по форме — лучший канал (32 совпадения); браузер-поиск как страховка"},"astanatv.kz":{search:null,browserSearch:!1,external:!1,note:"по уликам: /kz/search/?q= отдаёт ОБЫЧНУЮ ЛЕНТУ, а не результаты — страницы для «Тоқаев» и «Токаев» побайтово одинаковы, слова в выдаче нет ни разу. Рабочего HTTP-поиска нет (23 сентября 2026 перепроверены десять типовых шаблонов, формы поиска в разметке главной тоже нет); всё даёт sitemap-глубина (19-21 материал)"},"24.kz":{search:["https://24.kz/ru/search/search?searchword={q}&limitstart={off20}","https://24.kz/kz/search/search?searchword={q}&limitstart={off20}"],external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии: издание выпускает каждое событие и по-русски, и по-казахски). Прежняя запись «поиска нет вовсе» проверяла ?q= и com_finder — не те адреса"},"politico.kz":{search:["https://politico.kz/search?q_str={q}","https://politico.kz/ru/search?q_str={q}"],browserSearch:!0,note:"поиск ЕСТЬ: q_str, ДВЕ версии — казахская в корне и русская /ru/ (материалы разные). Браузер-поиск оставлен: он единственный тяжёлый канал, где тут что-то ловилось"},"aikyn.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск по форме даёт нули; браузер-поиск живой; внешний мёртв"},"astana-akshamy.kz":{browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку; браузер-поиск подхватывает"},"aqmeshit.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"yujanka.kz":{browserSearch:!1,external:!1,note:"HTTP-поиск ?s= ищет (автодетект сам его находит — WordPress, с пагинацией); браузер-поиск строку поиска не находит вовсе — выключен; материал в основном даёт wp-api"},"qazaqstan.tv":{search:"https://qazaqstan.tv/search?query={q}",external:!1,note:"поиск ЕСТЬ и фильтрует (проверено вручную: «Тоқаев бойынша іздеу нәтижелері», вкладка Жаңалықтар + даты в карточках). Автодетект раньше цеплял не ту форму и тянул всю ленту. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ), иначе нули"},"qmonitor.kz":{dead:!0,search:"https://qmonitor.kz/search/?query={q}",external:!1,note:"сервер не принимает соединения: HTTPS не отвечает вовсе, по HTTP до него не достучаться (connection timeout), домен в DNS есть. Проверено 23 и 24 сентября 2026 с двух независимых адресов; в прогоне стоил 233 с за ноль. Поднимется — снять dead, поиск уже прописан"},"the-steppe.com":{search:"https://the-steppe.com/search?s={q}",external:!1,note:"поиск найден вручную. Ноль по «Токаев» — норма: издание про него не пишет (проверено), это не поломка канала"},"dknews.kz":{search:null,render:"https://dknews.kz/ru/gsearch?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (/ru/gsearch + #gsc.*) — из HTTP не берётся, результаты рисует JS; поднимаем рендером, как orda.kz"},"spik.kz":{search:null,feed:"https://spik.kz/{page}",browserSearch:!1,external:!1,note:"поиска на сайте НЕТ. Лента — три раздела /1, /2, /3 (по 40 статей); прежний адрес /lastnews/ отдаёт 404. Пагинации у разделов нет: /4 = 404, обход останавливается сам. Есть RSS (/rss.xml, 549 КБ) и карта новостей"},"factcheck.kz":{browserSearch:!1,external:!1,note:"WordPress-поиск детектится (82 ссылки), по слову нули; формы нет; внешний мёртв"},"petropavlovsk.news":{dead:!0,note:"домена нет в DNS (пользователь проверил 2 сентября 2026, перепроверено 23 сентября)"},"atamekenbusiness.kz":{dead:!0,note:"сайт телеканала, новостной ценности для мониторинга нет (сервер жив: 200, но ссылок-статей на главной ноль)"},"today.kz":{dead:!0,note:"сертификат сайта выписан на чужое имя (ERR_TLS_CERT_ALTNAME_INVALID) — открыть нельзя"},"taraz24.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"shymkenttv.kz":{dead:!0,note:"главная отдаёт HTTP 403 всему, включая robots.txt"},"altaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"atyraupress.kz":{dead:!0,note:"главная отдаёт HTTP 403 всему, включая robots.txt"},"timekz.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"kostanaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"ontustiknews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"aqzhayik.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"alashainasy.kz":{dead:!0,note:"издание переехало на on.kz (301 со старого домена) — вписывайте новый адрес, на старом материала не будет"},"on.kz":{external:!1,note:"бывший alashainasy.kz. Формы поиска на главной нет, типовые адреса поиска 404, карт сайта нет (любой адрес отдаёт одну и ту же страницу) — рабочего входа пока не найдено"},"masa.media":{search:"https://masa.media/ru/search?query={q}",external:!1,note:"сайт ЖИВОЙ и публикует ежедневно (проверено 23 сентября 2026) — прежняя пометка «мёртв» была неверной. Поиск /ru/search?query= отдаёт 497 своих ссылок против нуля на мусорном слове, но отдаёт их ВСЕ разом и без дат: в контрольном прогоне «ссылок 547, не влезли в бюджет канала — 430». Карт сайта и RSS у него нет: на любой адрес приходит одна и та же страница"},"azattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"radioazattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"kokshetau.asia":{browserSearch:!1,external:!1,noRender:!0,note:"WordPress-поиск таймаутит; render = 0; браузер-поиск ничего не даёт; очень медленный (210-420 с за прогон, wp-api порой не успевает стартовать) — вне списка предустановленных"},"ekaraganda.kz":{external:!1,noRender:!0,note:"поиск по форме детектится (25 ссылок), по слову нули; render капчит; внешний мёртв"},"uralskweek.kz":{browserSearch:!1,external:!1,noRender:!0,note:"поиск `?s=` РАБОТАЕТ (проверено уликами: по мусорному слову ноль совпадений); статьи без разметки дат — день берётся текстом из блока и из адреса; сайт МЕДЛЕННЫЙ, бюджеты каналов упираются во время; render = 0; внешний мёртв"},"365info.kz":{external:!1,note:"видимый поиск — виджет Google (#gsc.q=), обычным запросом не берётся и в пресет не годится; материал даёт wp-api (16 за август). WordPress-поиск + render детектятся сами; внешний мёртв"},"almaty.tv":{external:!1,note:"HTTP-поиск (native) детектится сам; внешний мёртв"},"mgorod.kz":{external:!1,note:"HTTP-поиск (native) отрабатывает; внешний мёртв"},"aktobetimes.kz":{external:!1,note:"RSS + автопоиск; внешний мёртв"},"egemen.kz":{search:null,render:"https://egemen.kz/search?q={q}",external:!1,note:"HTTP-поиск — оболочка (199 536 б на любой запрос, слова на странице нет вовсе); браузером тот же адрес даёт 10 своих результатов -> берём рендером. След на будущее: /api/search?q={q}&page={page}&limit=10 отвечает JSON, но ссылок в нём нет — только slug. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"turkystan.kz":{note:"HTTP-поиск (native) отрабатывает; браузер-поиск память ещё не разобрала"}};i($o,"lookupKnown")});function qc(e){typeof e=="function"&&(ms=e)}function Bc(e){e&&typeof e.get=="function"&&typeof e.set=="function"&&($t=e)}function Fc(e){typeof e=="function"&&(zn=e)}function Uc(e){typeof e=="function"&&(Hc=e)}async function fn(e,{groups:t,exclude:n,fromD:r,toD:s,originHost:o,channelLabel:a,deadline:l,maxFetch:d=80,browserFallback:c=!1,browserBudget:h=null,diag:u=null,tally:p=null,pick:f=null,have:m=null}){let g=i(R=>{p&&(p[R]=(p[R]||0)+1)},"tick"),w=i(R=>{if(!p)return;let O=[];try{O=new URL(R).pathname.toLowerCase().split("/").filter(Boolean)}catch{return}let L=O.find(ce=>!/^[a-z]{2}$/.test(ce)&&!/^\d+$/.test(ce));L&&((p.noDateWhere||(p.noDateWhere={}))[L]=(p.noDateWhere[L]||0)+1)},"tickSection"),b=qn(t),y=n||[],A=c?1:4,v=Symbol("добрать браузером"),T=i(()=>c||h&&h.left>0,"canBrowser"),k=3,S=typeof process<"u"&&process.env&&Number(process.env.MC_SLOW_GAP_MS)||400,M=25,N=p&&(p._slow||(p._slow={}))||{};N.resets===void 0&&Object.assign(N,{resets:0,on:!1,saved:0,tried:0,chain:null,why:{}});let V=i(R=>{let O=(N.chain||Promise.resolve()).then(()=>_o(S)).then(R);return N.chain=O.then(()=>{},()=>{}),O},"chained"),H=i(R=>N.on?V(R):R(),"paced"),j=i((R,O)=>{if(ea(R))return g("listing"),O&&(O.verdict="раздел сайта, не статья (видно по адресу)",u.push(O)),!0;if(kc(R))return g("listing"),O&&(O.verdict="это файл, а не страница (видно по адресу)",u.push(O)),!0;let L=we($t.get(R));if(L&&!Ve(L,r,s))return g("staleDate"),O&&(O.verdict="дата вне периода (из памяти дат)",O.date=$t.get(R),O.parsed=Me(L),u.push(O)),!0;if(!L&&(r||s)){let ce=At(R);if(ce&&(r&&+ce<+r-864e5||s&&+ce>+s+864e5))return g("urlDateOut"),O&&(O.verdict="дата вне периода (видно по адресу)",O.parsed=Me(ce),u.push(O)),!0}return!1},"cheapSkip"),$=i(async(R,O)=>{let L=u?{url:R,channel:a}:null;if(l&&Date.now()>l)return g("late"),L&&(L.verdict="не успели (бюджет времени)",u.push(L)),null;let ce=[],le=O?null:await H(()=>ws(R,ce)),De=!le&&!O?eh(ce[0]):null;if(De&&(N.resets++,N.why[De]=(N.why[De]||0)+1,!N.on&&N.resets>=k&&(N.on=!0),N.tried<M&&(N.tried++,ce.length=0,le=await V(()=>ws(R,ce)),le&&N.saved++)),!le&&O&&T()){h&&h.left--;let ge=await zn(R);le=ge&&ge.ok?ge.html:null,le&&g("viaBrowser")}if(!le&&!O&&T())return v;if(!le)return g("noOpen"),p&&ce[0]&&(p.noOpenWhy=p.noOpenWhy||{},p.noOpenWhy[ce[0]]=(p.noOpenWhy[ce[0]]||0)+1),L&&(L.verdict="не открылась"+(ce[0]?" ("+ce[0]+")":" (WAF/таймаут/404)"),u.push(L)),null;let Z=Ko(le,R,f&&f.hint);if(!Z)return!xc(le)&&!ps(R)?(g("notArticle"),L&&(L.verdict="не статья (меню/категория/оболочка), даты на ней тоже нет",u.push(L)),null):(g("noDate"),w(R),L&&(L.verdict="дата не найдена на странице",u.push(L)),null);if(f&&Z.dateVia&&(f.seen[Z.dateVia]=(f.seen[Z.dateVia]||0)+1),!Z.isArticle&&!ps(R))return g("notArticle"),L&&(L.verdict="не статья (меню/категория/оболочка)",L.title=Z.title||"",u.push(L)),null;if(bc(Z.title))return g("notArticle"),L&&(L.verdict="подборка по теме, а не материал",L.title=Z.title||"",u.push(L)),null;if(Z.date&&$t.set(R,Z.date),Z._hay=((Z.title||"")+" "+(Z.description||"")+" "+(Z.body||"")).toLowerCase(),L){let ge=we(Z.date);L.title=(Z.title||"").slice(0,80),L.date=Z.date||"",L.parsed=Me(ge),L.inRange=Ve(Z.date,r,s),L.hasKw=Qe(Z._hay,t),L.hasExclude=y.length?Qe(Z._hay,y):!1,L.verdict=L.parsed?L.inRange?L.hasExclude?"минус-слово":L.hasKw?"ВЗЯТА":"ключа нет в тексте":"дата вне периода":"дата не распознана",u.push(L)}return Z},"handle"),Y=[],re=[];for(let R of e){let O=u?{url:R,channel:a}:null;if(m&&m.has(xe(R))){g("dupe"),O&&(O.verdict="её уже принёс другой канал — второй раз не качаем",u.push(O)),re.push(R);continue}j(R,O)||Y.push(R)}if(Y.length>d){for(let R=d;R<Y.length;R++)g("overBudget"),u&&u.push({url:Y[R],channel:a,verdict:"не влезла в бюджет канала"});e=Y.slice(0,d)}else e=Y;let ke=await ys(e,A,R=>$(R,!1)),Se=ke.filter(R=>R!==v),Re=e.filter((R,O)=>ke[O]===v);if(Re.length)for(let R of await ys(Re,1,O=>$(O,!0)))R!==v&&Se.push(R);let D=null,F=[];for(let R of Se){if(!R)continue;let O=we(R.date);if(O&&(!D||O>D)&&(D=O),!Ve(R.date,r,s)){g("outOfPeriod");continue}if(y.length&&Qe(R._hay,y)){g("excluded");continue}if(!Qe(R._hay,t)){g("noKw");continue}g("taken");let L=Qe((R.title||"").toLowerCase(),t)?"title":"body",ce=mn((R.description||"")+" "+(R.body||"")+" "+(R.title||""),R.title,b);F.push({source:o,title:R.title,url:R.url,date:R.date,channel:a,match:L,snippet:ce})}for(let R of re)F.push({url:R,channel:a,_dupe:!0});return{rows:F,newest:D}}function Pc(e){if(!e)return!1;let t=String(e).slice(0,4e3);return/<title[^>]*>\s*(just a moment|attention required|подожд|один момент)/i.test(t)||/id="(challenge-running|cf-challenge-running|cf-please-wait|challenge-form|turnstile-wrapper)"/i.test(t)||/cf-browser-verification|_cf_chl_opt|\/cdn-cgi\/challenge-platform/i.test(t)?!0:/just a moment|checking your browser|verifying you are human|проверка браузера/i.test(t)&&String(e).length<6e4}async function Yp(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),Kc);try{let s=await fetch(e,{method:"POST",redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",...xs},body:t,signal:n.signal});return s.ok?await s.text():null}catch{return null}finally{clearTimeout(r)}}function Jp(e){let t=i(n=>String(n).padStart(2,"0"),"p");return t(e.getDate())+"."+t(e.getMonth()+1)+"."+e.getFullYear()}async function Xp(e,t=2){for(let n=0;;n++){let r=new AbortController,s=setTimeout(()=>r.abort(),Kc);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...xs},signal:r.signal});if((o.status===429||o.status===503)&&n<t){clearTimeout(s),await _o(1e3*(n+1));continue}if(!o.ok)throw new Error("HTTP "+o.status);return await o.text()}finally{clearTimeout(s)}}}async function gt(e){try{return await Xp(e)}catch{return null}}async function ws(e,t){let n=await Xo(e);return!n.ok&&t&&t.push(n.err?n.err:"HTTP "+n.status),n.ok?n.text:null}function Qp(e,t){let n=we(e),r=we(t);return!n||!r?!1:Me(n)===Me(r)}function Tr(e){if(!e)return"неизвестная ошибка";if(e.name==="AbortError")return"таймаут";let t=e;for(let s=0;s<5&&t&&t.cause&&typeof t.cause=="object";s++)t=t.cause;let n=String(t&&t.code||e&&e.code||""),r=String(t&&t.message||e&&e.message||e);return Nc[n]?Nc[n]+" ("+n+")":n||(/certificat|ssl|tls/i.test(r)?"ошибка TLS: "+r.slice(0,80):r.slice(0,120))}function eh(e){return Zp(e)?"рвал соединение":_p(e)?"отвечал «перегружен»":null}async function gs(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...xs},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Tr(r)}}finally{clearTimeout(n)}}async function Xo(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{...xs},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Tr(r)}}finally{clearTimeout(n)}}async function nh(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),2e4),s={...th};t&&(s.Referer=t);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:s,signal:n.signal});return{ok:o.ok,status:o.status,text:o.ok?await o.text():""}}catch(o){return{ok:!1,status:0,err:Tr(o)}}finally{clearTimeout(r)}}function Ye(e){try{return new URL(e).host.replace(/^www\./,"")}catch{return e}}function ea(e){let t;try{t=new URL(e)}catch{return!1}if(/[?&]page=\d+/i.test(t.search))return!0;let n=t.pathname.toLowerCase().replace(/\/+$/,"").split("/").filter(Boolean);if(n.some(o=>/^(cat|cats|tag|tags|category|categories|rubric|rubrics|topic|topics|section|sections|archive|archives|author|authors|search|label|labels|feed|rss|page|person|persons|people|persona|personalii|theme|themes|tema|temy)$/.test(o))||(()=>{let o=n.findIndex(c=>/^(19|20)\d\d$/.test(c));if(o<0)return 0;let a=n.slice(o);if(a.length<2||a.length>3)return 0;let l=/^(0?[1-9]|1[0-2])$/.test(a[1]||""),d=a.length<3||/^(0?[1-9]|[12]\d|3[01])$/.test(a[2]);return l&&d?a.length:0})())return!0;let s=n[n.length-1]||"";return!!(n.length<=2&&s&&!/[-_]/.test(s)&&!/\d/.test(s)&&s.length<=16)}function fs(e){let t=String(e||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|sections?|pages?|weather|pogoda|search|ingredients?|images?|img|photos?|gallery|video|media|podcasts?)\b/i.test(t.replace(/[-_.]/g," "))}function rh(e){let t=/(20\d{2})[^\d]?(0[1-9]|1[0-2])?/,n=String(e||"");try{n=new URL(n,"https://x").pathname}catch{}let s=n.slice(n.lastIndexOf("/")+1).match(t)||n.match(t);return s?{y:+s[1],mo:s[2]?+s[2]:0}:null}function sh(e,t){let n=e&&t?+t-+e:0,r=n>0?Math.max(1,Math.round(n/864e5)):0;return r?r<=2?{days:r,maxCands:300,budgetMs:9e4}:r<=6?{days:r,maxCands:600,budgetMs:18e4}:{days:r,maxCands:1e3,budgetMs:3e5}:{days:0,maxCands:300,budgetMs:9e4}}function Sr(e){try{let t=new URL(e),n=[];return t.searchParams.forEach((r,s)=>{/^(from|utm_|_openstat|ysclid|fbclid|gclid|yclid)/i.test(s)&&n.push(s)}),n.forEach(r=>t.searchParams.delete(r)),t.hash="",t.toString()}catch{return String(e||"").split("#")[0]}}function oh(e){return e.length>=2&&/[A-Za-zА-Яа-яЁё]/.test(e)&&e===e.toUpperCase()&&e!==e.toLowerCase()}function ah(e){let t=["а","я","и","ы","е","о","у","ю","й","ь"];for(let n of t)if(e.length-1>=4&&e.endsWith(n))return e.slice(0,-1);return e}function ih(e,t){let n=oh(e),r=e.toLowerCase();return t&&!n&&r.length>=5&&(r=ah(r)),{text:r,whole:n}}function Wt(e,t){return(e||"").split(/[,;\n]+/).map(n=>n.trim()).filter(Boolean).map(n=>{let r=n.match(/^["'«](.+)["'»]$/);return r?{words:[{text:r[1].toLowerCase().trim(),whole:!1}]}:{words:n.split(/\s+/).filter(Boolean).map(s=>ih(s,t))}})}function ch(e,t){if(!t.text)return!1;if(!t.whole)return e.includes(t.text);if(t._re===void 0)try{t._re=new RegExp("(?<![\\p{L}\\p{N}])"+t.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}\\p{N}])","u")}catch{t._re=null}return t._re?t._re.test(e):(" "+e+" ").includes(" "+t.text+" ")}function Qe(e,t){return t.length?t.some(n=>n.words.every(r=>ch(e,r))):!0}function qn(e){return e.flatMap(t=>t.words.map(n=>n.text))}function In(e,t,n=150){let r=(e||"").replace(/\s+/g," ").trim();if(!r)return"";let s=r.toLowerCase(),o=-1;for(let d of t){let c=s.indexOf(d);c>=0&&(o<0||c<o)&&(o=c)}if(o<0)return r.slice(0,n);let a=Math.max(0,o-60),l=Math.min(r.length,o+90);return(a>0?"…":"")+r.slice(a,l).trim()+(l<r.length?"…":"")}function Vo(e){let t=String(e&&e.snippet||"").trim(),n=String(e&&e.title||"").trim();return n?t?bs(t).includes(bs(n))?t:t+" "+n:n:t}function mn(e,t,n,r=150){let s=In(e,n,r),o=bs(s),a=bs(t);return!o||o===a||a&&a.includes(o)||a&&o.startsWith(a)&&o.length-a.length<lh?"":s}function dh(e,t){let n=String(e||"");return n=n.split(/\s+https?:/i)[0],n=n.replace(/\s*[›»].*$/,""),n=n.replace(/\s*\|\s*[^|]*$/,""),t&&(n=n.replace(new RegExp("\\s*[-–—]\\s*"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*$","i"),"")),n.replace(/\s+/g," ").trim()}function jc(e,t){let n=(e||"").toLowerCase().replace(/\s+/g," "),r=n.search(/\s[—–·]\s/);r>=0&&r<90&&(n=n.slice(r+3));let s=-1,o="";for(let l of t){if(!l)continue;let d=n.indexOf(l);d>=0&&(s<0||d<s)&&(s=d,o=l)}if(s<0)return{b:"",a:""};let a=i(l=>l.replace(/[^\p{L}\p{N} ]+/gu," ").replace(/\s+/g," ").trim(),"norm");return{b:a(n.slice(Math.max(0,s-40),s)),a:a(n.slice(s+o.length,s+o.length+40))}}function uh(e){let t=String(e).trim();/^https?:\/\//i.test(t)||(t="https://"+t);try{return new URL(t).origin}catch{return null}}function ph(e){try{let t=new URL(e);return t.host=t.host.startsWith("www.")?t.host.slice(4):"www."+t.host,t.origin}catch{return null}}function hh(e,t){let n=String(e||"");try{let r=new URL(n,"https://www.bing.com");if(/\/ck\/a/i.test(r.pathname)){let o=r.searchParams.get("u")||"";for(/^a1/i.test(o)&&(o=o.slice(2)),o=o.replace(/-/g,"+").replace(/_/g,"/");o.length%4;)o+="=";try{let a=typeof atob=="function"?atob(o):Buffer.from(o,"base64").toString("binary");/^https?:\/\//i.test(a)&&(n=a)}catch{}}let s=new URL(n).host.replace(/^www\./,"");if(s===t||s.endsWith("."+t))return n.split("#")[0]}catch{}return null}function $c(){On=0,kr=0,Qo=!1}async function mh(e,t){if(Qo)return{ok:!1,status:0,err:"ddg: пропущен (частота ограничена)",gaveUp:!0};let n=Date.now();On<n&&(On=n);let r=On;On+=2500,r-n>0&&await fh(r-n);let s=await nh(e,t),o=s.text||"";return!s.ok||/anomaly|are you a robot|too many requests|captcha/i.test(o)||o.length<22*1024&&!/result__a/i.test(o)?(kr++,On=Date.now()+Math.min(kr*4e3,2e4),kr>=4&&(Qo=!0)):kr=0,s}function gh(e){try{let t=String(e).replace(/&amp;/g,"&"),n=t.match(/[?&]uddg=([^&]+)/i);if(n)try{t=decodeURIComponent(n[1])}catch{}return t.startsWith("//")&&(t="https:"+t),t}catch{return e}}function wh(e,t){let n=String(e),r=[],s=new Set,o=i(d=>Tt(String(d).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()),"clean"),a=i((d,c,h)=>{let u=gh(d),p;try{p=new URL(u).host.replace(/^www\./,"")}catch{return}if(p!==t&&!p.endsWith("."+t))return;let f=u.split("#")[0];s.has(f)||(s.add(f),r.push({url:f,title:c||"",snippet:h||""}))},"push"),l=n.split(/class="result__a"/i).slice(1);for(let d of l){let c=d.match(/href="([^"]+)"/i);if(!c)continue;let h=d.match(/>([\s\S]*?)<\/a>/i);a(c[1],h?o(h[1]):"")}if(!r.length){for(let c of n.match(/uddg=[^"&\s]+/gi)||[])a("//x?"+c);let d=new RegExp("https?://(?:www\\.)?"+t.replace(/\./g,"\\.")+`/[^"'\\s<>]+`,"gi");for(let c of n.match(d)||[])a(c)}return r}async function ys(e,t,n){let r=[],s=0;async function o(){for(;s<e.length;){let a=s++;try{r[a]=await n(e[a])}catch{r[a]=null}}}return i(o,"worker"),await Promise.all(Array.from({length:Math.min(t,e.length||1)},o)),r}function Wc(e,t){let n=/^https:/i.test(String(t||"")),r=[];for(let s of String(e||"").split(`
`)){if(!/^\s*sitemap:/i.test(s))continue;let o=s.replace(/^\s*sitemap:/i,"").trim();o&&(n&&/^http:\/\//i.test(o)&&r.push(o.replace(/^http:/i,"https:")),r.push(o))}return[...new Set(r)]}function bh(e){let t=e.match(/<div[^>]+id=["']webkit-xml-viewer-source-xml["'][^>]*>([\s\S]*?)<\/div>/i);return t?t[1]:e}function yh(e){return async t=>{let n=await gt(t);if(n)return n;if(!e)return null;let r=await zn(t);return!r||!r.ok||!r.html?null:bh(r.html)}}async function xh(e,t,n=gt){let r=Wc(t,e),s=[...new Set([...r.filter(o=>/news|last-news|google|yandex|turbo/i.test(o)),e+"/news-sitemap.xml",e+"/google-news-sitemap.xml",e+"/sitemap-google.xml",e+"/sitemap-yandex.xml",e+"/sitemap-news.xml"])];for(let o of s){let a=await n(o);if(!a)continue;let l=await Vc(a,0);if(l.length)return l}return[]}async function vh(e,t,n,r,s){let{maxMaps:o=40,maxCands:a=300,maxCollect:l=Math.max(a*10,2e3),deadline:d,fetchText:c=gt,blindOk:h=!0,slugHints:u=[],collectStats:p={}}=s||{},f=n?+n:-1/0,m=r?+r:1/0,g=0,w=i(D=>{let F=we($t.get(D));return!F||Ve(F,n,r)?!1:(g++,!0)},"staleByMemory"),b=Number.isFinite(m)?m+21*864e5:1/0,y=Wc(t,e),A=[...new Set([...y,e+"/sitemap.xml",e+"/sitemap_index.xml",e+"/sitemap-index.xml",e+"/sitemapindex.xml",e+"/sitemap/sitemap.xml"])].sort((D,F)=>(fs(D)?1:0)-(fs(F)?1:0)),v=[],T=[],k=new Set,S=0,M=i(D=>{let F=D?we(D):null,R=F?+F:NaN;return Number.isFinite(R)?R>=f&&R<=b:!0},"childInRange");async function N(D,F){if(S>=o||v.length>=l||d&&Date.now()>d||k.has(D))return;k.add(D);let R=await c(D);if(!R)return;if(S++,/<sitemapindex/i.test(R)&&F<3){let le=i(ye=>rh(ye.loc),"ymOf"),De=i(ye=>{if(ye.lastmod)return String(ye.lastmod);let de=le(ye);return de?de.y+"-"+String(de.mo).padStart(2,"0"):""},"keyOf"),Z=n?n.getFullYear():-1/0,ge=r?r.getFullYear():1/0,at=i(ye=>{if(ye.lastmod)return M(ye.lastmod);let de=le(ye);return de?de.y>=Z&&de.y<=ge:!0},"kidOk"),nt=Lc(R).filter(at).sort((ye,de)=>De(de).localeCompare(De(ye))).sort((ye,de)=>(fs(ye.loc)?1:0)-(fs(de.loc)?1:0));if(nt.length>1&&nt.every(ye=>!De(ye))){let ye=Wo(nt);nt.length=0,nt.push(...ye)}for(let ye of nt)if(await N(new URL(ye.loc,D).href,F+1),S>=o||v.length>=l||d&&Date.now()>d)break;return}let O=[],L=[],ce=0;for(let le of Ac(R)){let De;try{De=new URL(le.loc,D).href}catch{continue}if(ea(De)||w(Sr(De)))continue;let Z=le.lastmod?+we(le.lastmod):NaN;if(!Number.isFinite(Z))try{if(new URL(De).pathname==="/")continue}catch{}if(Number.isFinite(Z)){if(Z<f||Z>m)continue;O.push({loc:Sr(De),lm:le.lastmod});continue}let ge=At(De);if(ge){ce++;let at=+ge;if(at<f||at>m)continue}L.push({loc:Sr(De),lm:""})}if(!O.length&&!ce&&L.length){for(let le of Wo(L)){if(T.length>=l)break;T.push(le)}return}for(let le of O)if(v.push(le),v.length>=l)return;for(let le of Wo(L))if(v.push(le),v.length>=l)return}i(N,"walk");for(let D of A)if(await N(D,0),v.length>=l||S>=o)break;if(h)for(let D of T){if(v.length>=l)break;v.push(D)}let V=new Map;for(let D of v)V.has(D.loc)||V.set(D.loc,D);let H=[...V.values()].sort((D,F)=>String(F.lm).localeCompare(String(D.lm)));g&&(p.stale=g),p.pool=H.length,p.capped=H.length>=l,p.roots=A.length,p.maps=S;let j=i(D=>{let F=D.lm&&we(D.lm)||At(D.loc);return F&&Me(F)||""},"dayOf"),$=i(D=>u.length>0&&u.some(F=>D.loc.toLowerCase().includes(F)),"hinted"),Y=i(D=>{p.nodate=D.filter(R=>!j(R)).length;let F=D.filter($).length;return F?p.hinted=F:delete p.hinted,D},"finish");if(H.length<=a)return Y(H);let re=new Map;for(let D of H){let F=j(D);re.has(F)||re.set(F,[]),re.get(F).push(D)}for(let D of re.values())D.sort((F,R)=>($(R)?1:0)-($(F)?1:0));let ke=[...re.keys()].filter(Boolean).sort().reverse(),Se=re.get("")||[],Re=[];for(let D=0;Re.length<a;D++){let F=0;for(let R of ke){let O=re.get(R);if(D<O.length&&(Re.push(O[D]),F++,Re.length>=a))break}if(!F)break}for(let D of Se){if(Re.length>=a)break;Re.push(D)}return Y(Re)}async function Vc(e,t){let n=Cc(e).filter(r=>r.title&&r.date);if(n.length)return n;if(t<1&&/<sitemapindex/i.test(e)){let r=(e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[]).map(s=>({loc:(s.match(/<loc>([^<]+)<\/loc>/)||[])[1]?.trim(),lm:(s.match(/<lastmod>([^<]+)<\/lastmod>/)||[])[1]||""})).filter(s=>s.loc);r.sort((s,o)=>String(o.lm).localeCompare(String(s.lm)));for(let s of r.slice(0,5)){let o=await gt(s.loc);if(o&&(n.push(...await Vc(o,t+1)),n.length>500))break}}return n}function Yc(e,t){let n=e.match(/<form\b[\s\S]*?<\/form>/gi)||[],r=null,s=0;for(let a of n){if(/method\s*=\s*["']post["']/i.test(a))continue;let l=(a.match(/\baction\s*=\s*["']([^"']*)["']/i)||[])[1]||"",d=(a.match(/class\s*=\s*["']([^"']*)["']/i)||[])[1]||"",c=a.match(/<input\b[^>]*>/gi)||[],h=null,u=-1,p=[];for(let m of c){let g=((m.match(/\btype\s*=\s*["']([^"']+)["']/i)||[])[1]||"text").toLowerCase(),w=(m.match(/\bname\s*=\s*["']([^"']+)["']/i)||[])[1];if(!w)continue;if(g==="hidden"){p.push([w,(m.match(/\bvalue\s*=\s*["']([^"']*)["']/i)||[])[1]||""]);continue}if(/submit|button|checkbox|radio|image|file/.test(g))continue;let b=0;g==="search"&&(b+=3),/^(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)$/i.test(w)?b+=2:/search|query|поиск|іздеу/i.test(w)&&(b+=1),b>u&&(u=b,h=w)}if(!h||u<=0)continue;let f=u;/role\s*=\s*["']search["']/i.test(a)&&(f+=2),/search|query|поиск|іздеу/i.test(l)&&(f+=2),/search|query|поиск/i.test(d)&&(f+=1),f>s&&(s=f,r={action:l,qname:h,hidden:p})}if(!r)return null;let o;try{o=new URL(r.action||"/",t)}catch{return null}for(let[a,l]of r.hidden)if(l&&a!==r.qname)try{o.searchParams.set(a,l)}catch{}return o.searchParams.set(r.qname,"__MCQ__"),o.toString().replace("__MCQ__","{q}")}function Oc(e,t,n,r){if(!e)return{ok:!1,why:"нет ответа"};let s=new Set(jn(e,n));if(s.size===0)return{ok:!1,realN:0,junkN:0,uniqueN:0,why:"ссылок-статей нет (оболочка/JS-выдача)"};let o=t?new Set(jn(t,n)):new Set,a=0;for(let d of s)o.has(d)||a++;let l={realN:s.size,junkN:o.size,uniqueN:a};if(r){let d=String(r).toLowerCase().split(/\s+/).filter(Boolean)[0]||"",c=d.length>5?d.slice(0,Math.max(5,d.length-2)):d;if(c&&!e.toLowerCase().includes(c))return{...l,ok:!1,why:"искомого слова нет в выдаче (это лента, а не результаты)"}}return o.size===0?{...l,ok:!0,why:"мусорный запрос пуст"}:a>=2?{...l,ok:!0,why:"выдача отличается от мусорной"}:{...l,ok:!1,why:"та же страница, что и на мусорный запрос (параметр игнорируется)"}}async function Yo(e,t,n){let r=encodeURIComponent;if(n){let d=[].concat(n).filter(f=>typeof f=="string"&&f),c=i(f=>{let m=f.indexOf("#");return m>=0&&f.indexOf("{q}")>m},"hashOnly"),h=d.filter(c);if(d=d.filter(f=>!c(f)),!d.length)return h.length?{kind:"none",warn:"ключ в шаблоне стоит после «#» — такой адрес серверу не передаётся, выдачу рисует скрипт в браузере (нужен render)"}:null;let u=i(f=>(m,g)=>f.replace(/\{q\}/g,r(m)).replace(/\{page\}/g,g).replace(/\{off(\d+)\}/g,(w,b)=>(g-1)*+b).replace(/\{wpage\}/g,g<=1?"":`page/${g}/`).replace(/\{bpage\}/g,g<=1?"":`pagen${g}/`),"mk"),p=d.map(u);return{kind:"override",hasPage:d.some(f=>/\{page\}|\{off\d+\}|\{wpage\}|\{bpage\}/.test(f)),builds:p,build:p[0]}}let s=Yc(t,e);if(s){let d=await gt(s.replace("{q}",r("президент"))),c=await gt(s.replace("{q}",r("qwszxcvnonsense12345")));if(Oc(d,c,e,"президент").ok){let h=s.includes("?")?"&":"?";return{kind:"form",hasPage:!0,build:i((u,p)=>p<=1?s.replace("{q}",r(u)):s.replace("{q}",r(u))+h+"page="+p,"build")}}}if(fc(t))return{kind:"wordpress",hasPage:!0,build:i((d,c)=>c<=1?`${e}/?s=${r(d)}`:`${e}/page/${c}/?s=${r(d)}`,"build")};let o=["/search/?text=","/search/?q=","/search/?search_text=","/search/?query=","/search?text=","/search?q=","/search?search_text=","/search?query=","/search_results/?q=","/search_results/?text=","/results/?q=","/?s=","/?q=","/?query=","/?search_text=","/?searchword="],a=[];for(let d of String(t||"").matchAll(/href="\/(ru|kz|kk|en)\//g))a.includes("/"+d[1])||a.push("/"+d[1]);if(a.length)for(let d of a.slice(0,2))for(let c of["/search/?q=","/search/?text=","/search/?query=","/search?q="])o.push(d+c);let l=Date.now();for(let d of o){if(Date.now()-l>2e4)break;let c=await gt(e+d+r("президент")),h=await gt(e+d+r("qwszxcvnonsense12345"));if(Oc(c,h,e,"президент").ok){let u=e+d,p=d.includes("?")?"&":"?";return{kind:"native",hasPage:!0,build:i((f,m)=>m<=1?u+r(f):`${u}${r(f)}${p}page=${m}`,"build")}}}return null}function ta(e){let t=String(e||"").trim();if(/^@[A-Za-z0-9_]{4,}$/.test(t))return t.slice(1);let n=t.match(/(?:t|telegram)\.me\/(?:s\/)?(@?[A-Za-z0-9_]{4,})/i);if(n){let r=n[1].replace(/^@/,"");if(!/^(s|joinchat|addstickers|addemoji|proxy|share|iv|setlanguage|bg)$/i.test(r))return r}return null}function kh(e,t){let n=[],r=/data-post="[^"/]+\/(\d+)"([\s\S]*?)(?=data-post="|$)/g,s;for(;s=r.exec(e);){let o=+s[1],a=s[2],l=a.match(/<time[^>]+datetime="([^"]+)"/),d=a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div class="tgme_widget_message_(?:footer|reply|info)|<\/div>)/)||a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/),c=d?d[1]:"";c=c.replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,""),c=Tt(c).replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim(),o&&l&&n.push({id:o,url:"https://t.me/"+t+"/"+o,date:l[1],text:c})}return n}async function Th(e,t){let n=t.morph!==!1,r=Wt(t.keyword,n),s=Wt(t.exclude||"",n),o=qn(r),a=i(k=>Qe((k||"").toLowerCase(),r),"hasKw"),l=i(k=>s.length>0&&Qe((k||"").toLowerCase(),s),"hasExclude"),d=Nn(t.from),c=yr(t.to),h=Sh+e,u=[],p=[],f=new Set,m=45e3,g=80,w=null,b=!1,y=0,A=0,v=Date.now(),T="";for(;!b&&y<g&&Date.now()-v<m;){y++;let k=w?h+"?before="+w:h,S=await Xo(k);if(!S.ok&&(S.status===429||S.status>=500)&&(await _o(1500),S=await Xo(k)),!S.ok){let H=S.status?"HTTP "+S.status:S.err||"не ответил";T=y===1?"канал не открылся ("+H+") — частный/не существует?":"лента оборвалась на "+y+"-й странице ("+H+")";break}let M=kh(S.text,e);if(!M.length){T=y===1?"постов не видно (частный канал? нужен t.me/s/)":"лента кончилась";break}A+=M.length;let N=null,V=null;for(let H of M){let j=we(H.date);if(j&&(!N||j<N)&&(N=j),(V===null||H.id<V)&&(V=H.id),f.has(H.id)||(f.add(H.id),!Ve(H.date,d,c))||!H.text||!a(H.text)||l(H.text))continue;let $=j?j.toISOString():"",Y=H.text.split(`
`)[0].slice(0,90)||"(без текста)";u.push({source:"t.me/"+e,title:Y,url:H.url,date:$,channel:"telegram",match:"post",snippet:mn(H.text,Y,o)})}if(d&&N&&N<d&&(b=!0,T="дошли до начала периода"),!b&&(V===null||V===w)){T="лента не листается дальше";break}w=V}return T||(T=y>=g?"упёрлись в "+g+" страниц":"стоп по времени (45 с)"),p.push(`постов просмотрено ${A} (страниц ${y}, ${T}), совпало ${u.length}`),{rows:u,channel:"telegram",note:p.filter(Boolean).join("; ")}}function Ah(e,t){let n=0,r=!1,s=!1;for(let o=t;o<e.length;o++){let a=e[o];if(r)s?s=!1:a==="\\"?s=!0:a==='"'&&(r=!1);else if(a==='"')r=!0;else if(a==="{")n++;else if(a==="}"&&--n===0)return e.slice(t,o+1)}return null}function Lh(e){let t=e.indexOf("ytInitialData");if(t<0)return null;let n=e.indexOf("=",t),r=e.indexOf("{",n);if(n<0||r<0)return null;let s=Ah(e,r);try{return s?JSON.parse(s):null}catch{return null}}function Zo(e,t){if(!(!e||typeof e!="object"))if(e.videoRenderer&&e.videoRenderer.videoId&&t.push(e.videoRenderer),Array.isArray(e))for(let n of e)Zo(n,t);else for(let n in e)Zo(e[n],t)}function Rh(e){let t=String(e||"").toLowerCase();return/секунд|минут|час|sec|min|hour|сағат|мину?т|только что|сейчас|сегодня|today|бүгін/.test(t)?0:/недел|апта|week/.test(t)?7:/месяц|month|\bай\b/.test(t)?31:/год|лет|жыл|year/.test(t)?366:/дн|день|сутк|күн|тәулік|day|вчера|yesterday|кеше/.test(t)?1:31}function Dh(e){let t=String(e||""),n=/"uploadDate"\s*:\s*"([^"]{4,40})"/.exec(t);return n||(n=/itemprop="(?:datePublished|uploadDate)"[^>]*content="([^"]{4,40})"/.exec(t)),n||(n=/<meta[^>]+content="([^"]{4,40})"[^>]*itemprop="(?:datePublished|uploadDate)"/.exec(t)),n?we(n[1]):null}function Eh(e,t,n=new Date){let r=Jo.indexOf(e)>=0?e:"month";if(!(t?we(t):null))return r;let o=(n.getTime()-Nn(t).getTime())/864e5,a=o<=1?"today":o<=7?"week":o<=31?"month":"year";return Jo.indexOf(a)>Jo.indexOf(r)?a:r}async function Jc(e,t){let n=t&&t.ytRange||"month",r=Eh(n,t&&t.from),s=t.morph!==!1,o=Wt(e,s),a=Wt(t.exclude||"",s),l=qn(o),d=zc[r]||zc.month,c=`${Ic}/results?search_query=${encodeURIComponent(e)}&sp=${d}`,h=await gs(c);if(!h.ok)return{rows:[],channel:"youtube",note:"YouTube не открылся"+(h.status?" (HTTP "+h.status+")":"")};let u=Lh(h.text);if(!u)return{rows:[],channel:"youtube",note:"не разобрал выдачу (согласие/капча?)"};let p=[];Zo(u,p);let f=[],m=new Set;for(let S of p){let M=S.videoId;if(!M||m.has(M))continue;m.add(M);let N=vr(S.title),V=vr(S.publishedTimeText),H=vr(S.ownerText||S.longBylineText),j=S.detailedMetadataSnippets&&S.detailedMetadataSnippets[0]&&vr(S.detailedMetadataSnippets[0].snippetText)||vr(S.descriptionSnippet),$=(N+" "+j+" "+H).toLowerCase();if(o.length&&!Qe($,o)||a.length&&Qe($,a))continue;let Y=V?we(V):null;f.push({source:"youtube",title:N||M,url:`${Ic}/watch?v=`+M,date:Y?Y.toISOString():"",channel:"youtube",match:"video",snippet:(H?"["+H+"] ":"")+(In(j||N,l)||V),_fuzz:Rh(V)})}let g=Nn(t.from),w=yr(t.to),b=Date.now()+Ch,y=0,A=0,v=0,T=[];await ys(f.slice(0,Mh),4,async S=>{let M=we($t.get(S.url));if(!M&&Date.now()<b){let N=await ws(S.url);M=N?Dh(N):null,M&&$t.set(S.url,M.toISOString())}M?(y++,S.date=M.toISOString()):A++,S._exact=!!M});for(let S of f){if(S._exact){if(!Ve(S.date,g,w)){v++;continue}}else{let M=we(S.date),N=(S._fuzz||0)*864e5;if(M&&(g&&+M+N<+g||w&&+M-N>+w)){v++;continue}}delete S._fuzz,delete S._exact,T.push(S)}let k=["фильтр YouTube: "+r+(r!==n?" (в настройке «"+n+"» — расширен, иначе окно не попадает в выдачу)":"")];return v&&k.push("вне периода отсеяно "+v),A&&k.push("дат со страницы не прочитали: "+A+" — у них дата приблизительная"),{rows:T,channel:"youtube",note:`видео: ${T.length} (${k.join("; ")})`}}async function vs(e,t){let n=ta(e);if(n)return Th(n,t);let{keyword:r,from:s,to:o,maxPages:a=3,override:l,maxArticles:d=60}=t,c=uh(e);if(!c)return{rows:[],channel:"bad-url",note:"не разобрал адрес"};let h=$o(c);if(h&&h.dead)return{rows:[],channel:"пропущен",note:"сайт пропущен: "+(h.note||"помечен нерабочим"),stats:{render:null,external:null,sitesearch:null}};let u=t.morph!==!1,p=Wt(r,u),f=Wt(t.exclude||"",u),m=qn(p),g=i(x=>Qe((x||"").toLowerCase(),p),"hasKw"),w=i(x=>Qe((x||"").toLowerCase(),p),"kwInTitle"),b=i(x=>f.length>0&&Qe((x||"").toLowerCase(),f),"hasExclude"),y=Nn(s),A=yr(o),v=[],T=[],k=[],S=t.diag?[]:null,M=t.diag?{searchUrl:null,rawLinks:[],searchKind:null,renderUrl:null}:null,N=await gs(c+"/");if(!N.ok&&N.err){let x=ph(c);if(x&&x!==c){let C=await gs(x+"/");C.ok&&(c=x,N=C,k.push("главная: переключился на "+Ye(c)))}}let V=!1;if(N.ok&&Pc(N.text)&&(N={ok:!1,status:N.status,err:"страница-заглушка защиты"},k.push("главная: за защитой (Cloudflare) — иду браузером")),!N.ok){let x=await zn(c+"/");x&&x.ok&&x.html&&x.html.length>500&&!Pc(x.html)?(N={ok:!0,status:x.status||200,text:x.html},V=!0,k.push("главная: через браузер")):x&&x.err&&k.push("главная: браузером тоже не вышло — "+x.err)}N.ok||k.push("главная: "+(N.status?"HTTP "+N.status:N.err||"не открылась"));let H=N.text||"",j=yh(V),$=await j(c+"/robots.txt")||"";/<[a-z]/i.test($)&&($=Tt($.replace(/<[^>]+>/g,`
`)));try{let x=[...new Set([...Sc(H).map(C=>{try{return new URL(C,c).href}catch{return null}}).filter(Boolean),c+"/rss",c+"/rss/",c+"/feed/",c+"/rss.xml"])];for(let C of x.slice(0,4)){let P=await gt(C);if(!P||!/<(item|entry)[\s>]/i.test(P))continue;let J=Tc(P);if(J.length){T.push("rss");for(let q of J){let G=we(q.date),te=G?G.toISOString():null;if(q.title&&g(q.title+" "+(q.description||""))&&!b(q.title+" "+(q.description||""))&&Ve(te,y,A)){let oe;try{oe=new URL(q.link,c).href}catch{continue}v.push({source:Ye(c),title:q.title,url:oe,date:te||"",channel:"rss",match:w(q.title)?"title":"body",snippet:mn((q.description||"")+" "+q.title,q.title,m)})}}break}}}catch(x){k.push("rss: "+x.message)}try{let x=await xh(c,$,j);if(x.length){T.push("news-sitemap");for(let C of x)g(C.title)&&!b(C.title)&&Ve(C.date,y,A)&&v.push({source:Ye(c),title:C.title,url:C.url,date:C.date,channel:"news-sitemap",match:"title",snippet:mn(C.title,C.title,m)})}}catch(x){k.push("sitemap: "+x.message)}let Y=[],re={},ke={hint:t.datePick||"",seen:{}},Se=i(()=>new Set(v.map(x=>xe(x.url))),"haveKeys"),Re={left:16},D=0,F=!1,R="";try{if(/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(H)&&p.length){let x=Date.now()+25e3,C=i(U=>String(U).padStart(2,"0"),"p2"),P=i(U=>U.getFullYear()+"-"+C(U.getMonth()+1)+"-"+C(U.getDate())+"T"+C(U.getHours())+":"+C(U.getMinutes())+":"+C(U.getSeconds()),"wpDate"),J=new Set(v.map(U=>xe(U.url))),q=new Set,G=[],te=[],oe=!1,B=0,ae=0,ne=0,Ee=new Set,Ce=!1,Fe=50,X=6,qe=/^(page|attachment|nav_menu_item|wp_|revision|customize_|oembed_|user_request|product_variation|acf-|elementor_|e-|jet-|tablepress)/,Oe=["posts"],he=!1;try{let U=await gt(c+"/wp-json/wp/v2/types"),se=U?JSON.parse(U):null;if(se&&typeof se=="object"&&!Array.isArray(se)){he=!0;for(let W of Object.keys(se)){let _=se[W]||{},Q=_.rest_base||W;!Q||qe.test(W)||qe.test(Q)||_.rest_namespace&&_.rest_namespace!=="wp/v2"||Oe.includes(Q)||Oe.push(Q)}}}catch{he=!1}let Te=/news|articl|novost|material|publicat|zhana|habar|jańalyq/i,ie=[Oe[0],...Oe.slice(1).sort((U,se)=>(Te.test(se)?1:0)-(Te.test(U)?1:0))].slice(0,4);for(let U of ie)for(let se of p){let W=se.words.map(_=>_.text).join(" ");if(W)for(let _=1;_<=X;_++){if(Date.now()>x){Ce=!0;break}let Q=c+"/wp-json/wp/v2/"+U+"?search="+encodeURIComponent(W)+"&after="+P(y)+"&before="+P(A)+"&per_page="+Fe+"&page="+_+"&orderby=date&order=desc&_fields=date,link,title,excerpt";B++;let _e=await gt(Q);if(!_e){ae++;break}let fe=null;try{fe=JSON.parse(_e.replace(/^\s*<pre[^>]*>/i,"").replace(/<\/pre>\s*$/i,""))}catch{ne++;break}if(!Array.isArray(fe)){ne++;break}oe=!0;for(let I of fe){let Xe=I&&I.link;if(!Xe)continue;let We=Sr(Xe),Pe=xe(We);if(Ve(I.date,y,A)&&Ee.add(Pe),J.has(Pe)||q.has(Pe))continue;q.add(Pe);let ut=i(Eo=>Tt(String(Eo||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"flat"),pt=ut(I.title&&I.title.rendered),rt=ut(I.excerpt&&I.excerpt.rendered);Ve(I.date,y,A)&&(b(pt)||b(rt)||(Qe((pt+" "+rt).toLowerCase(),p)?G.push({source:Ye(c),title:pt,url:We,date:I.date,channel:"wp-api",match:w(pt)?"title":"body",snippet:In(rt||pt,m)}):te.push(We)))}if(fe.length<Fe)break;_===X&&(Ce=!0)}}if(oe){T.push("wp-api"),G.forEach(Q=>v.push(Q)),D=G.length;let U=0;if(te.length&&Date.now()<x){let{rows:Q}=await fn(te,{groups:p,exclude:f,fromD:y,toD:A,originHost:Ye(c),channelLabel:"wp-api",deadline:x+3e4,maxFetch:60,diag:S,tally:re});Q.forEach(_e=>{v.push(_e),U++}),D+=U}let se=v.filter(Q=>(Q.channel==="rss"||Q.channel==="news-sitemap")&&Ve(Q.date,y,A)).map(Q=>xe(Q.url)),W=se.filter(Q=>!Ee.has(Q)),_=se.length>0;F=!Ce&&W.length===0&&(_||he&&G.length>0),R=Ce?"ответ обрезан по бюджету":W.length?"вход не увидел "+W.length+" материал(ов), найденных лентой":_?"сверено с лентой: "+se.length+" из "+se.length:he?"типов записей опрошено "+ie.length:"список типов записей недоступен",k.push("wp-api: сайт сам отобрал по слову и датам, взято "+D+(U?" (из них "+U+" проверены по тексту)":"")+(ie.length>1?"; типы записей: "+ie.join(", "):"")+"; полнота: "+(F?"подтверждена":"не подтверждена")+" ("+R+")")}else{let U=B?ae?"вход не ответил (таймаут или бюджет канала 25 с), попыток "+B:ne?"вход отдал не список записей — похоже, REST закрыт, попыток "+B:"вход промолчал, попыток "+B:"ни одного запроса не ушло (кончился бюджет канала ещё до старта)";k.push("wp-api: у сайта есть признаки WordPress, но "+U)}}}catch(x){k.push("wp-api: "+x.message)}let O=0;try{if(t.skip instanceof Set?t.skip.has("sitemap"):(t.skip||[]).includes("sitemap"))throw{skipped:!0};if(F)throw{wpCovered:!0};let x=Date.now(),C=sh(y,A),P=x+C.budgetMs,J=[...new Set(r.split(/[,;\n]+/).map(B=>B.trim()).filter(Boolean).flatMap(B=>B.split(/\s+/)).flatMap(B=>Go(B)))],q={},G=await vh(c,$,y,A,V?{maxMaps:10,maxCands:200,deadline:x+9e4,fetchText:j,blindOk:v.length===0,slugHints:J,collectStats:q}:{maxMaps:40,maxCands:C.maxCands,deadline:P,fetchText:j,blindOk:v.length===0,slugHints:J,collectStats:q}),te=new Set(v.map(B=>xe(B.url))),oe=G.map(B=>B.loc).filter(B=>!te.has(xe(B)));if(oe.length||k.push("sitemap-глубина: "+(q.stale?`новых статей нет — все ${q.stale} адресов уже читали, они вне периода`:q.maps?`карт прочитано ${q.maps}, статей за период в них нет`:`карты сайта не открылись (адресов карт в robots и по типовым путям: ${q.roots||0})`)),oe.length){T.push("sitemap-глубина");let B=V?{maxFetch:200,deadline:x+9e4}:{maxFetch:C.maxCands,deadline:P},{rows:ae}=await fn(oe,{groups:p,exclude:f,fromD:y,toD:A,originHost:Ye(c),channelLabel:"sitemap",deadline:B.deadline,maxFetch:B.maxFetch,diag:S,tally:re,pick:ke});ae.forEach(U=>v.push(U)),O=ae.length;let ne="";if(y&&A){let U=new Set;for(let W of G){let _=W.lm&&we(W.lm)||At(W.loc);_&&U.add(Me(_))}let se=Math.max(1,Math.round((+yr(Me(A))-+Nn(Me(y)))/864e5));U.size&&(ne=`, дней периода охвачено ${U.size} из ${se}`)}let Ee=q.hinted?`, с ключом в адресе ${q.hinted}`:"",Ce=q.stale?`, старых по памяти дат пропущено ${q.stale}`:"",Fe=q.nodate?`, из них без даты в карте ${q.nodate} (день узнаём, только скачав)`:"",X=q.pool||0,qe=X>0?Math.max(1,Math.round(G.length/X*100)):0,Oe=X>G.length?q.capped?`; взято ${G.length} из БОЛЕЕ ЧЕМ ${X} статей сайта за период (не больше ${qe}%, сколько их всего — не знаем: упёрлись в свой потолок сбора) — остальные не читали, бюджет канала`:`; взято ${G.length} из ${X} статей сайта за период (${qe}%) — остальные не читали, бюджет канала`:"",he=V?200:C.maxCands,Te=V?"сайт за защитой, читает браузер":C.days?`окно ${C.days} сут.`:"период не задан",ie=`; бюджет ${he} статей (${Te})`;k.push(`sitemap-глубина: карт пройдено, кандидатов ${oe.length}${ne}${Fe}${Ee}${Ce}, совпало ${ae.length}${Oe}${ie}`+(Date.now()>B.deadline?" (стоп по времени)":""))}}catch(x){x&&x.wpCovered?(k.push("sitemap-глубина: не понадобилась — wp-api накрыл весь период ("+R+")"),Y.push("sitemap")):k.push(x&&x.skipped?"sitemap-глубина: пропущен (память: у сайта ничего не даёт; перепроверим позже)":"sitemap-глубина: "+x.message)}let L=$o(c),ce=null,le=0,De=0,Z=t.skip instanceof Set?t.skip:new Set(t.skip||[]);L&&!t.reprobe&&(L.external===!1&&Z.add("external"),L.browserSearch===!1&&Z.add("sitesearch"),L.noRender===!0&&Z.add("render"));let ge={render:null,external:null,sitesearch:null};try{let x=null;if(l?x=await Yo(c,H,l):L&&L.search?x=await Yo(c,H,L.search):L&&L.search===null?k.push("адаптер: server-side поиска нет ("+(L.note||"")+")"):x=await Yo(c,H,null),x&&x.kind==="none"&&(k.push("поиск: "+x.warn),x=null),x){T.push("search("+x.kind+")"),M&&(M.searchKind=x.kind);let C=v.length,P=new Set,J=L&&L.budgetMs||45e3,q=L&&L.budgetMs?1500:400,G=V?1:x.hasPage?80:1,te=r.split(/[,;\n]+/).map(X=>X.trim()).filter(Boolean);te.length||te.push(r);let oe=0,B="",ae=!1,ne=Date.now(),Ee=x.builds||[x.build],Ce=[];for(let X of Ee)for(let qe of te)Ce.push({build:X,alt:qe});e:for(let{build:X,alt:qe}of Ce){let Oe=!1;for(let he=1;he<=G&&!Oe;he++){if(Date.now()-ne>J){k.push(`поиск: стоп по времени (${Math.round(J/1e3)}c)`);break e}let Te=X(qe,he);if(!Te)break;M&&!M.searchUrl&&(M.searchUrl=Te);let ie;if(V){let fe=await zn(Te);ie={ok:!!(fe&&fe.ok&&fe.html),status:fe&&fe.status||0,text:fe&&fe.html||"",err:fe&&fe.err}}else ie=await gs(Te);if(!ie.ok){he===1&&P.size===0&&(B=ie.status?"HTTP "+ie.status:ie.err||"ошибка");break}!ae&&ie.text&&g(ie.text.toLowerCase())&&(ae=!0);let U=jn(ie.text,c).filter(fe=>!P.has(fe));if(M)for(let fe of U)M.rawLinks.length<25&&M.rawLinks.push(fe);if(U.forEach(fe=>P.add(fe)),!U.length){if(he>1)break;continue}let se=null,W=[];for(let fe of U){let I=At(fe);I&&((!se||I>se)&&(se=I),!Ve(I.toISOString(),y,A))||W.push(fe)}let{rows:_,newest:Q}=await fn(W,{groups:p,exclude:f,fromD:y,toD:A,originHost:Ye(c),channelLabel:"search",deadline:ne+J,browserBudget:Re,diag:S,tally:re,pick:ke,have:Se()});_.forEach(fe=>v.push(fe)),oe+=U.length;let _e=Q&&se?Q>se?Q:se:Q||se;if(y&&_e&&_e<y&&(Oe=!0),oe>q)break e}}let Fe=v.length-C;le=Fe,B?k.push("поиск: "+B):k.push(`поиск: ссылок ${P.size}, совпало ${Fe}`+(P.size===0?" (пусто/оболочка)":Fe===0?" (нет по слову/периоду)":"")),v.length===C&&(P.size<3||!ae)&&(ce=x.build("MCQPLACEHOLDER",1).replace(/MCQPLACEHOLDER/g,"{q}"),P.size>=3&&k.push("поиск: ключа нет в самой выдаче -> похоже на оболочку, пробую браузером"))}else(!L||L.search)&&k.push("поиск не найден (нужен ручной шаблон site | url?...{q})")}catch(x){k.push("search: "+x.message)}try{let x=ce?ce.replace(/\{q\}/g,"{q}"):null;x||(x=Yc(H,c)||null);let C=x;if(Z.has("render"))k.push("render: пропущен (память: у сайта не работает; перепроверим позже)");else if(L&&L.render||le===0&&O===0&&C){let P=null,J=null;if(L&&L.render?(P=L.render,J=L.selectors||null):P=C,P){T.push("render");let q=Ye(c),G=/\{q\}/.test(P)?r.split(/[,;\n]+/).map(X=>X.trim()).filter(Boolean).slice(0,3)||[r]:[null],te=new Set,oe=[],B=!1,ae=!1;for(let X of G.length?G:[null]){let qe=X==null?P:P.replace(/\{q\}/g,encodeURIComponent(X));M&&!M.renderUrl&&(M.renderUrl=qe);let Oe=await ms(qe,{selectors:J,host:q});Ec(Oe)&&(ae=!0),Oe.cf&&(B=!0);for(let he of Oe.items||[]){let Te;try{Te=new URL(he.url).host.replace(/^www\./,"")}catch{continue}Te===q&&(te.has(he.url)||(te.add(he.url),oe.push(he)))}}let ne={items:oe,cf:B};ge.render=ae&&!oe.length?null:oe.length,ae&&!oe.length&&k.push("render: браузера не было — канал не проверялся (память не трогаем)");let Ee=oe.map(X=>X.url).filter(Boolean),Ce=(await fn(Ee,{groups:p,exclude:f,fromD:y,toD:A,originHost:Ye(c),channelLabel:"render",deadline:Date.now()+45e3,browserBudget:Re,diag:S,tally:re,pick:ke,have:Se()})).rows,Fe=!!(L&&L.render&&/\{q\}/.test(L.render));if(!Ce.length&&oe.length)for(let X of oe){let qe=((X.title||"")+" "+(X.snippet||"")).toLowerCase();if(b(qe)||!Fe&&!g(qe))continue;let Oe=we(X.date)||At(X.url),he=Oe?Oe.toISOString():null;(y||A)&&!Ve(he,y,A)||Ce.push({source:Ye(c),title:X.title||X.url,url:X.url,date:he||"",channel:"render*",match:w(X.title)?"title":"body",snippet:mn(Vo(X),X.title,m)})}Ce.forEach(X=>v.push(X)),De=Ce.length,Ce.length?k.push(`render: совпало ${Ce.length}`):k.push(ne.cf?"render: Cloudflare не пройден за таймаут":!oe.length&&ne.err?"render: "+ne.err:`render: снято ${oe.length} ссылок, совпало 0`+(oe.length?" (нет по слову/периоду)":" (пусто/логин/капча?)"))}}}catch(x){k.push("render: "+x.message)}try{if(L&&L.feed){T.push("feed");let x=/\{page\}|\{off\d+\}/.test(L.feed),C=!!L.feedPost&&/\{date\}/.test(L.feedPost),P=x||C?20:1,J=Date.now(),q=9e4,G=new Set,te=[],oe=0,B=!1,ae=0,ne=0,Ee=null,Ce=!1,Fe=!1,X=A?new Date(+A+864e5):new Date;for(let he=1;he<=P&&!B&&!(Date.now()-J>q);he++){let Te=[],ie=/^\//.test(L.feed)?c.replace(/\/$/,"")+L.feed:L.feed;if(C){let W=L.feedPost.replace(/\{date\}/g,Jp(X)),_=await Yp(ie,W);if(!_&&V){let Q=await zn(ie,{post:W,host:Ye(c)});Q&&Q.ok&&Q.posted?_=Q.html:Q&&Q.err&&(Ee=Q.err)}if(!_)break;Te=jn(_,c).map(Q=>({url:Q,title:"",date:"",snippet:""}))}else{let W=he===1&&L.feedFirst?L.feedFirst:ie.replace(/\{page\}/g,he);W=W.replace(/\{off(\d+)\}/g,(_e,fe)=>(he-1)*+fe);let _=null,Q=await gt(W);if(Q){let _e=jn(Q,c).filter(fe=>ps(fe));_e.length>=3&&(_=_e.map(fe=>({url:fe,title:"",date:"",snippet:""})))}_?(Te=_,Fe=!0):Te=(await ms(W,{selectors:L.feedSelectors||null,host:Ye(c)})).items||[]}if(ne++,Te=Te.filter(W=>W.url&&!G.has(W.url)),Te.forEach(W=>G.add(W.url)),!Te.length){ne>1&&(Ce=!0);break}ae+=Te.length;let U=null,se=null;for(let W of Te){let _=we(W.date)||At(W.url);_&&(!U||_>U)&&(U=_),_&&(!se||_<se)&&(se=_);let Q=((W.title||"")+" "+(W.snippet||"")).toLowerCase();if(_&&g(Q)&&!b(Q)){if((y||A)&&!Ve(_,y,A))continue;v.push({source:Ye(c),title:W.title||W.url,url:W.url,date:Me(_),channel:"feed",match:w(W.title)?"title":"body",snippet:mn(Vo(W),W.title,m)}),oe++;continue}_&&(y&&+_<+y-864e5||A&&+_>+A+864e5)||te.push(W.url)}C&&(X=se&&+se<+X?se:new Date(+X-864e5),y&&+X<+y-864e5&&(B=!0)),y&&U&&U<y&&(B=!0)}if(te.length){let he=[...new Set(r.split(/[,;\n]+/).map(ie=>ie.trim()).filter(Boolean).flatMap(ie=>ie.split(/\s+/)).flatMap(ie=>Go(ie)))];if(he.length){let ie=i(U=>he.some(se=>U.toLowerCase().includes(se)),"hinted");te.sort((U,se)=>(ie(se)?1:0)-(ie(U)?1:0))}let{rows:Te}=await fn(te,{groups:p,exclude:f,fromD:y,toD:A,originHost:Ye(c),channelLabel:"feed",deadline:Date.now()+9e4,maxFetch:300,browserBudget:Re,diag:S,tally:re,have:Se()});for(let ie of Te)v.push(ie),oe++}let qe=` (страниц ${ne}`+(Fe?", обычным запросом":"")+(Ce?", дальше повтор — пагинация не двигается":"")+")",Oe=ae?" (нет по слову/периоду)":Ee?" (лента не ответила: "+Ee+")":" (лента ничего не отдала)";oe?k.push(`feed: ссылок ${ae}${qe}, совпало ${oe}`):k.push(`feed: ссылок ${ae}${qe}, совпало 0`+Oe)}}catch(x){k.push("feed: "+x.message)}let at=0;try{let x=!!(L&&L.browserSearch===!0&&le===0);if(!Z.has("sitesearch")&&(v.length===0||x)){let C=r.split(/[,;\n]+/).map(ae=>ae.trim()).filter(Boolean);C.length||C.push(r);let P=Ye(c),J=new Set,q=[],G="",te=!1,oe=!1;{let ae=await Hc(c,C.slice(0,3),{host:P});Ec(ae)&&(oe=!0),ae.cf&&(te=!0),ae.note&&(G=ae.note);for(let ne of ae.items||[]){let Ee;try{Ee=new URL(ne.url).host.replace(/^www\./,"")}catch{continue}Ee!==P&&!Ee.endsWith("."+P)||J.has(ne.url)||(J.add(ne.url),q.push(ne))}}let B={items:q,cf:te,note:G};if(ge.sitesearch=oe&&!q.length?null:q.length,q.length){T.push("браузер-поиск");let ae=(await fn(q.map(ne=>ne.url),{groups:p,exclude:f,fromD:y,toD:A,originHost:Ye(c),channelLabel:"браузер-поиск",deadline:Date.now()+9e4,browserFallback:V,browserBudget:Re,diag:S,tally:re,pick:ke,have:Se()})).rows;if(!ae.length)for(let ne of q){let Ee=((ne.title||"")+" "+(ne.snippet||"")).toLowerCase();if(!g(Ee)||b(Ee))continue;let Ce=we(ne.date)||At(ne.url),Fe=Ce?Ce.toISOString():null;(y||A)&&!Ve(Fe,y,A)||ae.push({source:P,title:ne.title||ne.url,url:ne.url,date:Fe||"",channel:"браузер-поиск*",match:w(ne.title)?"title":"body",snippet:mn(Vo(ne),ne.title,m)})}ae.forEach(ne=>v.push(ne)),at=ae.length,k.push(ae.length?`браузер-поиск: совпало ${ae.length}`:`браузер-поиск: снято ${q.length}, совпало 0 (нет по слову/периоду)`)}else B.err?k.push("браузер-поиск: "+B.err):B.note&&k.push("браузер-поиск: "+B.note)}}catch(x){k.push("браузер-поиск: "+x.message)}try{let x=t.external===!1?!1:!!(L&&L.external===!0)||t.external===!0;if(Z.has("external"))k.push("внешний: пропущен (память: у сайта не работает; перепроверим позже)");else if(!x)Y.push("external");else if((L&&L.external||le===0&&De===0)&&O===0&&at===0){T.push("внешний");let C=Ye(c),P=r.split(/[,;\n]+/).map(I=>I.trim()).filter(Boolean).map(I=>/\s/.test(I)&&!/^["«]/.test(I)?"("+I+")":I).join(" OR "),J=(t.exclude||"").split(/[,;\n]+/).map(I=>I.trim()).filter(Boolean).map(I=>"-"+(/\s/.test(I)?'"'+I+'"':I)).join(" "),q=encodeURIComponent(["site:"+C,P,J].filter(Boolean).join(" ")),G=new Set,te=[],oe=Date.now(),B={},ae=0,ne="";{let I=new Set,Xe=Date.now(),We=[Pe=>`https://html.duckduckgo.com/html/?q=${q}&kl=ru-ru&ia=web&p=-1${Pe?"&s="+Pe:""}`,Pe=>`https://duckduckgo.com/html/?q=${q}&kl=ru-ru&ia=web&p=-1${Pe?"&s="+Pe:""}`];for(let Pe=0;Pe<We.length&&te.length<60&&Date.now()-Xe<12e3;Pe++){let ut=We[Pe],pt="https://duckduckgo.com/";for(let rt=0;rt<=60&&Date.now()-Xe<12e3;rt+=30){let Eo=ut(rt),un=await mh(Eo,pt);if(rt===0&&Pe===0){let St=un.text||"",Zi=(St.match(/class="result__a"/g)||[]).length,vp=/anomaly|are you a robot|too many requests|captcha|privacy.*simplified/i.test(St),kp=St.length<22*1024&&Zi===0,Sp=(((St.split(/class="result__a"/i)[1]||"").slice(0,400).match(/href="([^"]+)"/i)||[])[1]||"").replace(/&amp;/g,"&").slice(0,110);ne=`${un.status?"HTTP "+un.status+" ":""}${un.err?un.err+" ":""}стр ${Math.round(St.length/1024)}КБ, result__a ${Zi}${vp||kp?", заглушка/капча":""}; href1: ${Sp||"—"}`,B.ddg=ne}if(!un.ok)break;let Qi=wh(un.text,C).filter(St=>!I.has(St.url));if(!Qi.length)break;Qi.forEach(St=>{I.add(St.url),G.add(St.url),te.push(St)})}if(te.length>0)break}ae=I.size}let Ee=0,Ce="",Fe=te.length<3||ne&&/заглушка|капча|HTTP 40[33]|не открылся|таймаут/.test(ne);if(Fe){let I=new Set,Xe=`https://www.bing.com/search?q=${q}&setlang=ru-RU&cc=KZ&ensearch=0`,We=await ms(Xe,{bing:!0,host:C}),Pe=We.items||[];for(let pt of Pe){let rt=hh(pt.url,C)||Mc(pt.url,C);!rt||I.has(rt)||(I.add(rt),G.has(rt)||(G.add(rt),te.push({url:rt,title:pt.title||"",snippet:pt.snippet||""})))}Ee=I.size;let ut=Pe.length?String(Pe[0].url||"").replace(/&amp;/g,"&").slice(0,90):"";Ce=We.cf?"капча/Cloudflare не пройден":`рендер: снято ${Pe.length}, домена ${Ee}${Ee===0&&ut?"; href1: "+ut:""}`,B.bing=Ce}ge.external=te.length;let X=(await fn(te.map(I=>I.url),{groups:p,exclude:f,fromD:y,toD:A,originHost:C,channelLabel:"внешний",deadline:Date.now()+3e4,diag:S,tally:re,pick:ke,have:Se()})).rows,qe=new Set;for(let I of X)v.push(I),qe.add(I.url);let Oe=[],he=0,Te=0;for(let I of te){if(qe.has(I.url))continue;let Xe=(I.title||"").toLowerCase(),We=(I.snippet||"").toLowerCase(),Pe=g(Xe);if(!Pe||b(Xe+" "+We)){Te++;continue}let ut=At(I.url)||we(I.snippet+" "+I.title+" "+(I.date||""));if(!ut){he++;continue}Ve(ut.toISOString(),y,A)&&Oe.push({it:I,iso:ut.toISOString(),inTitle:Pe})}let ie={},U={};for(let I of Oe){let{b:Xe,a:We}=jc(I.it.snippet,m);Xe.length>=12&&(ie[Xe]=(ie[Xe]||0)+1),We.length>=12&&(U[We]=(U[We]||0)+1)}let se=0,W=0;for(let I of Oe){let{b:Xe,a:We}=jc(I.it.snippet,m);if((Xe.length>=12&&ie[Xe]>1||We.length>=12&&U[We]>1)&&!I.inTitle){W++;continue}let ut=dh(I.it.title,C);v.push({source:C,title:ut,url:I.it.url,date:I.iso,channel:"внешний",match:I.inTitle?"title":"body",snippet:In(I.it.snippet||I.it.title||"",m)}),se++}let _=X.length+se,Q=[Te?`не по ключу ${Te}`:"",W?`боковой блок ${W}`:"",he?`без даты ${he}`:""].filter(Boolean).join(", "),_e=[];_e.push(`ddg:${ae}${B.ddg?" ["+B.ddg+"]":""}`),Fe&&_e.push(`bing:${Ee}${B.bing?" ["+B.bing+"]":""}`);let fe=te.length?Q?"отсеяно "+Q:"нет по слову/периоду":Fe?"оба движка 0: "+(B.ddg||"")+(B.bing?" | "+B.bing:""):B.ddg||"нет ответа";k.push(_?`внешний: совпало ${_} (из статьи ${X.length}, из выдачи ${se}${Q?"; отсеяно "+Q:""}; ${_e.join(", ")})`:`внешний: 0 [ссылок ${te.length}; ${fe}]`)}}catch(x){k.push("внешний: "+x.message)}let nt=v.filter(x=>x.channel==="rss"||x.channel==="news-sitemap");if(nt.length){let x=0,C=0,P=0,J=new Map;await ys(nt,4,async G=>{if(!G.url)return;let te=J.get(G.url)||$t.get(G.url);if(!te){let oe=await ws(G.url);if(!oe){P++;return}let B=Ko(oe,G.url,ke&&ke.hint);if(!B||!B.date){P++;return}te=B.date,$t.set(G.url,te),ke&&B.dateVia&&(ke.seen[B.dateVia]=(ke.seen[B.dateVia]||0)+1)}J.set(G.url,te),Qp(G.date,te)||x++,G.date=te,Ve(te,y,A)||(G._outOfPeriod=!0,C++)});let q=v.length;v=v.filter(G=>!G._outOfPeriod),(x||C||P)&&k.push("даты лент сверены по статьям: поправлено "+x+(C?", вне периода "+C+" (лента показывала их свежими)":"")+(P?", не открылись "+P+" — оставлены с датой ленты, ей верить нельзя":"")),q!==v.length&&v.length}let ye=new Set([Ye(c)]),de=i(x=>{for(let C of[].concat(x||[])){let P=C&&String(C).match(/^https?:\/\/([^/]+)/i);P&&ye.add(P[1].replace(/^www\./,""))}},"addHost");de(l),L&&(de(L.search),de(L.render),de(L.feed));let Je=new Map,Gt=[],Mn=0,Rn=0,gr=new Map;for(let x of v){if(!x.url)continue;x.url=Sr(x.url);let C=xe(x.url),P=Je.get(C);if(P){P._ch.includes(x.channel)||P._ch.push(x.channel);continue}if(x._dupe)continue;if(ea(x.url)){Rn++;continue}let J;try{J=new URL(x.url).host.replace(/^www\./,"")}catch{continue}if(!ye.has(J)){Mn++,gr.set(J,(gr.get(J)||0)+1);continue}x._ch=[x.channel],Je.set(C,x),Gt.push(x)}if(Mn){let x=[...gr].sort((C,P)=>P[1]-C[1]).slice(0,3).map(([C,P])=>C+" — "+P).join(", ");k.push("отброшено "+Mn+" с другого домена/поддомена"+(x?" ("+x+")":""))}Rn&&k.push("отброшено "+Rn+" листингов/рубрик"),ge.contrib={};for(let x of Gt)ge.contrib[x.channel]=(ge.contrib[x.channel]||0)+1;ge.total=Gt.length,ge.picks=ke.seen;let Ie=re,Dn=Object.values(Ie).filter(x=>typeof x=="number").reduce((x,C)=>x+C,0),E=i(()=>{let x=Ie.noOpenWhy||{},C=Object.entries(x).sort((P,J)=>J[1]-P[1]).slice(0,3).map(([P,J])=>P+" — "+J).join(", ");return"не открылись "+Ie.noOpen+(C?" ("+C+")":" (защита/таймаут)")},"noOpenBit"),be=i(()=>{let x=Object.entries(Ie.noDateWhere||{}).sort((P,J)=>J[1]-P[1]),C=x.filter(([,P])=>P>=Math.max(3,Ie.noDate*.15)).slice(0,3);return C.length?"без даты на странице — "+Ie.noDate+" (в разделах: "+C.map(([P,J])=>"/"+P+"/ "+J).join(", ")+")":"без даты на странице — "+Ie.noDate+(x.length>1?" (разделов "+x.length+", ни один не преобладает — размазано по сайту)":"")},"noDateBit");if(Gt.length){let x=Ie.noOpen||0,C=Ie.noDate||0,P=Ie.late||0,J=Ie.overBudget||0,q=x+C+P+J;if(q>=10&&q>=Dn*.05){let G=[];x&&G.push(E()),C&&G.push(be()),P&&G.push("не успели по времени — "+P),J&&G.push("не влезли в бюджет канала — "+J),k.push("потери: "+q+" страниц из "+Dn+" не проверены ["+G.join(", ")+"] — среди них мог быть материал")}}else{let x=[],C=i((J,q)=>{Ie[J]&&x.push(q+" "+Ie[J])},"add");C("noKw","прочитали, ключа в тексте нет —"),C("outOfPeriod","вне периода —"),C("staleDate","вне периода по памяти дат —"),C("urlDateOut","вне периода по дате в адресе —"),Ie.noOpen&&x.push(E()),Ie.noDate&&x.push(be()),C("notArticle","не статьи (рубрики/меню) —"),C("listing","разделы сайта, отсеяны по адресу —"),C("excluded","отсеяно минус-словом —"),C("late","не успели по времени —"),C("overBudget","не влезли в бюджет канала —");let P;Dn?(Ie.noOpen||0)>Dn/2?P="сайт не отдал статьи (защита/таймаут) — это не «не писали», а «не достучались»":(Ie.noKw||0)>0?P="сайт доступен, статьи прочитаны — про ключ в этот период не писали":(Ie.late||0)>Dn/2?P="упёрлись в бюджет времени — материал мог остаться непроверенным":P="кандидаты были, но ни один не подошёл":P="ни одной ссылки-кандидата: ни ленты, ни карты, ни рабочего поиска у сайта не нашлось",k.push("почему ноль: "+P+(x.length?" ["+x.join(", ")+"]":""))}let Le=Ie._slow;if(Le&&Le.resets){let x=Object.entries(Le.why||{}).sort((C,P)=>P[1]-C[1]).map(([C,P])=>C+" — "+P).join(", ");k.push(Le.on?"сайт просил сбавить ход ("+(x||Le.resets+" раз")+") — перешли на одиночные запросы"+(Le.tried?Le.saved?", со второй попытки прочитано "+Le.saved+" из "+Le.tried:", повтор не помог ("+Le.tried+" попыток)":""):"сайт просил сбавить ход: "+(x||Le.resets)+" — единичные случаи, ход не сбавляли")}if(Re.left<16){let x=16-Re.left,C=re&&re.viaBrowser||0;k.push(C?"статей дочитано браузером: "+C+" из "+x+" попыток (обычным запросом не открывались)":"браузер не дочитал ни одной статьи из "+x+" попыток")}Y.length&&(ge.notRun=Y);let $e={},kt={};for(let x of Gt){for(let C of x._ch)$e[C]=($e[C]||0)+1;x._ch.length===1&&(kt[x._ch[0]]=(kt[x._ch[0]]||0)+1),x.channels=x._ch.map(Dc).join(" + "),delete x._ch}ge.foundBy=$e,ge.onlyBy=kt;let wr=Object.keys($e).sort((x,C)=>$e[C]-$e[x]).map(x=>`${Dc(x)} ${$e[x]}`+(kt[x]?` (только он ${kt[x]})`:" (все повтор)"));return wr.length&&k.push("кто принёс: "+wr.join(", ")),{rows:Gt,channel:T.join(" + ")||"none",note:k.join("; "),stats:ge,diag:t.diag?{meta:M,records:S}:void 0}}var Vp,Dc,Ec,ms,$t,zn,Hc,Gc,xs,_o,Kc,Nc,Zp,_p,th,Wo,bs,lh,On,kr,Qo,fh,Sh,zc,vr,Ic,Ch,Mh,Jo,Bn=ee(()=>{Ot();xr();Rc();Vp={sitemap:"sitemap-глубина",search:"поиск","render*":"render","браузер-поиск*":"браузер-поиск"},Dc=i(e=>Vp[e]||e,"chName"),Ec=i(e=>/браузер не поднялся|браузер завис/.test(String(e&&(e.err||e.note)||"")),"browserDown"),ms=i(async()=>({items:[],cf:!1}),"renderScrape");i(qc,"setRenderer");$t={get:i(()=>null,"get"),set:i(()=>{},"set")};i(Bc,"setDateStore");zn=i(async()=>({ok:!1}),"renderFetch"),Hc=i(async()=>({items:[],cf:!1}),"renderSiteSearch");i(Fc,"setHtmlFetcher");i(Uc,"setSiteSearcher");i(fn,"enrichUrls");i(Pc,"isChallengePage");Gc="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",xs={"User-Agent":Gc,"Accept-Language":"ru,en;q=0.9","Accept-Encoding":"gzip, deflate"},_o=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),Kc=typeof process<"u"&&process.env&&Number(process.env.MC_FETCH_TIMEOUT_MS)||3e4;i(Yp,"tryPostText");i(Jp,"dmy");i(Xp,"fetchText");i(gt,"tryText");i(ws,"tryPlain");Nc={ECONNRESET:"сайт оборвал соединение",ECONNREFUSED:"сайт не принял соединение",ECONNABORTED:"соединение прервано",ETIMEDOUT:"сайт не ответил",ENOTFOUND:"домен не найден (DNS)",EAI_AGAIN:"DNS не ответил",EHOSTUNREACH:"хост недостижим",ENETUNREACH:"сети нет",EPROTO:"не сошлись по TLS",UND_ERR_CONNECT_TIMEOUT:"не удалось соединиться",UND_ERR_HEADERS_TIMEOUT:"сайт не прислал заголовки",UND_ERR_BODY_TIMEOUT:"сайт замолчал на середине ответа",UND_ERR_SOCKET:"соединение оборвалось",CERT_HAS_EXPIRED:"у сайта просрочен сертификат",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"сертификат сайта не проверяется",DEPTH_ZERO_SELF_SIGNED_CERT:"самоподписанный сертификат"};i(Qp,"sameDay");i(Tr,"netErr");Zp=i(e=>/\b(ECONNRESET|ECONNABORTED|UND_ERR_SOCKET)\b/.test(String(e||"")),"isResetErr"),_p=i(e=>/\bHTTP (429|503)\b/.test(String(e||"")),"isBusyErr");i(eh,"backoffReason");i(gs,"fetchInfo");i(Xo,"fetchPlain");th={"User-Agent":Gc,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8","Accept-Language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7","Accept-Encoding":"gzip, deflate",DNT:"1","Upgrade-Insecure-Requests":"1","Sec-Fetch-Dest":"document","Sec-Fetch-Mode":"navigate","Sec-Fetch-Site":"same-origin","Sec-Fetch-User":"?1",Pragma:"no-cache","Cache-Control":"no-cache"};i(nh,"fetchSearch");i(Ye,"host");i(ea,"isListingUrl");i(fs,"isJunkMapUrl");i(rh,"mapYearMonth");i(sh,"depthBudget");i(Sr,"canonUrl");i(oh,"isAbbr");i(ah,"stemRu");i(ih,"mkTerm");i(Wt,"parseQuery");i(ch,"termHit");i(Qe,"matchGroups");i(qn,"queryTerms");i(In,"makeSnippet");Wo=i(e=>{let t=[];for(let n=0,r=e.length-1;n<=r;n++,r--)t.push(e[n]),n!==r&&t.push(e[r]);return t},"bothEnds"),bs=i(e=>String(e||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),lh=24;i(Vo,"cardText");i(mn,"snippetFor");i(dh,"cleanGoogleTitle");i(jc,"kwContext");i(uh,"normalizeOrigin");i(ph,"toggleWww");i(hh,"bingDecodeHref");On=0,kr=0,Qo=!1,fh=i(e=>new Promise(t=>setTimeout(t,e)),"_sleep");i($c,"resetDdgThrottle");i(mh,"ddgFetch");i(gh,"ddgReal");i(wh,"ddgResults");i(ys,"mapPool");i(Wc,"robotsSitemaps");i(bh,"unwrapBrowserXml");i(yh,"makeTextFetcher");i(xh,"getNewsSitemapEntries");i(vh,"collectSitemapCandidates");i(Vc,"entriesFromSitemap");i(Yc,"parseSearchForm");i(Oc,"searchLooksReal");i(Yo,"detectSearch");i(ta,"telegramChannel");i(kh,"parseTelegramPosts");Sh=typeof process<"u"&&process.env&&process.env.MC_TG_BASE||"https://t.me/s/";i(Th,"searchTelegram");zc={hour:"EgIIAQ%3D%3D",today:"EgIIAg%3D%3D",week:"EgIIAw%3D%3D",month:"EgIIBA%3D%3D",year:"EgIIBQ%3D%3D"};i(Ah,"balancedJson");i(Lh,"extractYtInitialData");i(Zo,"collectVideoRenderers");vr=i(e=>e&&e.runs?e.runs.map(t=>t.text).join(""):e&&e.simpleText||"","ytRuns"),Ic=typeof process<"u"&&process.env&&process.env.MC_YT_BASE||"https://www.youtube.com",Ch=2e4,Mh=60;i(Rh,"ytFuzzDays");i(Dh,"ytExactDate");Jo=["hour","today","week","month","year"];i(Eh,"ytRangeFor");i(Jc,"searchYouTube");i(vs,"searchSite")});function wt(e,t){As((0,He.dirname)(e));let n=e+".tmp";(0,ve.writeFileSync)(n,JSON.stringify(t,null,2)),(0,ve.renameSync)(n,e)}function en(e,t){try{return(0,ve.existsSync)(e)?JSON.parse((0,ve.readFileSync)(e,"utf8")):t}catch(n){return console.error("битый файл",e,n.message),t}}function jh(){As(Ss),Fn=en(oa,{})||{},ue.clear();for(let e of(0,ve.existsSync)(Ss)?(0,ve.readdirSync)(Ss):[]){let t=en(Un(e),null);t&&ue.set(e,{meta:t,feed:en(Gn(e),[])||[]})}}function Oh(){if(!(0,ve.existsSync)(ks)||ue.size>0)return;let e=en(ks,null);if(!(!e||!Array.isArray(e.projects))){e.settings&&(Fn=e.settings,wt(oa,Fn));for(let t of e.projects){let n=t.id||Zc("p"),r={id:n,name:t.name||"Проект",config:t.config||{},schedule:t.schedule||{mode:"off"},lastRun:t.lastRun||null,lastLog:t.log||[]};wt(Un(n),r),wt(Gn(n),t.items||[]),ue.set(n,{meta:r,feed:t.items||[]})}try{(0,ve.renameSync)(ks,ks+".bak")}catch{}console.log(`[store] мигрировал ${e.projects.length} проект(ов) из data.json в data/projects/`)}}function et(){return Fn}function _c(e){Object.assign(Fn,e),wt(oa,Fn)}function nn(){return[...ue.values()].map(e=>({id:e.meta.id,name:e.meta.name,schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,itemCount:(e.feed||[]).length,newCount:(e.feed||[]).filter(t=>t.isNew).length,runsCount:(e.meta.runs||[]).length,last:(e.meta.runs||[])[0]||null,config:e.meta.config||{}}))}function je(e){let t=ue.get(e);return t?aa(t):null}function el(e,t){let n=Zc("p"),r={id:n,name:e||"Новый проект",config:t||{},schedule:{mode:"off"},lastRun:null,lastLog:[]};return As(Ar(n)),wt(Un(n),r),wt(Gn(n),[]),ue.set(n,{meta:r,feed:[]}),aa(ue.get(n))}function tl(e,t){let n=ue.get(e);return n?(t.name!==void 0&&(n.meta.name=t.name),t.config&&(n.meta.config=t.config),t.schedule&&(n.meta.schedule=t.schedule),tn(e),aa(n)):null}function nl(e){if(!ue.has(e))return!1;ue.delete(e);try{(0,ve.rmSync)(Ar(e),{recursive:!0,force:!0})}catch{}return!0}function rl(e){let t=ue.get(e);t&&(t.feed.forEach(n=>n.isNew=!1),zt(e))}function Ls(e,t,n){let r=ue.get(e);return r?(r.meta.ai=r.meta.ai||{},r.meta.ai[t]=n,tn(e),r.meta.ai):null}function sl(e){let t=ue.get(e);return t&&t.meta.ai||{}}function Ke(e){let t=ue.get(e);return t&&t.meta.tg||{}}function lt(e,t){let n=ue.get(e);return n?(n.meta.tg=Object.assign({},n.meta.tg||{},t||{}),n.meta.tg.token&&!n.meta.tg.ownerCode&&(n.meta.tg.ownerCode=String((0,ra.randomInt)(1e5,1e6))),tn(e),n.meta.tg):null}function ol(e){let t=ue.get(e);return t?(t.meta.tg=Object.assign({},t.meta.tg||{},{ownerCode:String((0,ra.randomInt)(1e5,1e6))}),tn(e),t.meta.tg.ownerCode):""}function Lr(e){let t=Ke(e);return{enabled:!!t.enabled,hasToken:!!t.token,bot:t.bot||"",chats:(t.chats||[]).map(n=>({id:n.id,name:n.name||"",access:n.access||""})),sentTotal:t.sentTotal||0,err:t.err||"",ownerCode:t.ownerCode||"",owners:(t.owners||[]).map(n=>n.name||String(n.id))}}function al(e,t){let n=ue.get(e);return n?(n.feed||[]).filter(r=>!r.tgSent&&(!t||r.run===t)):[]}function il(e,t){let n=ue.get(e);if(!n)return 0;let r=new Set((t||[]).map(xe)),s=0;for(let o of n.feed)!o.tgSent&&r.has(xe(o.url))&&(o.tgSent=!0,s++);return s&&zt(e),s}function cl(e){let t=ue.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.tgSent||(r.tgSent=!0,n++);return n&&zt(e),n}function ll(e,t){let n=ue.get(e);if(!n)return 0;let r=new Set((t||[]).filter(Boolean).map(xe));if(!r.size)return 0;let s=0;for(let o of n.feed)o.tgSent&&r.has(xe(o.url))&&(delete o.tgSent,s++);return s&&zt(e),s}function dl(e,t){let n=ue.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(xe(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(xe(o.url));a&&(o.sent=a.mark,o.sentWhy=a.why||"",o.sentAt=Date.now(),o.sentModel=a.model||"",s++)}return s&&zt(e),s}function ul(e,t){let n=ue.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(xe(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(xe(o.url));a&&(o.rel=a.mark,o.relWhy=a.why||"",o.relAt=Date.now(),o.relModel=a.model||"",s++)}return s&&zt(e),s}function pl(e){let t=ue.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.rel&&(delete r.rel,delete r.relWhy,delete r.relAt,delete r.relModel,n++);return n&&zt(e),n}function hl(e){let t=ue.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.sent&&(delete r.sent,delete r.sentWhy,delete r.sentAt,delete r.sentModel,n++);return n&&zt(e),n}function na(e){let t=gn(e);if(!(0,ve.existsSync)(t))return[];let n=[];for(let r of(0,ve.readdirSync)(t))if(r.endsWith(".json"))try{n.push({file:(0,He.join)(t,r),ts:r.slice(0,-5),bytes:(0,ve.statSync)((0,He.join)(t,r)).size})}catch{}return n.sort((r,s)=>r.ts.localeCompare(s.ts))}function fl(e){let t=na(e),n=t.reduce((o,a)=>o+a.bytes,0),r=Ts(Gn(e)),s=Ts(Un(e));return{bytes:n+r+s,runBytes:n,feedBytes:r,metaBytes:s,runCount:t.length,avgRunBytes:t.length?Math.round(n/t.length):0}}function zh(e,t,{keep:n=30}={}){let r=Math.max(0,+t||0)*1024*1024;if(!r)return{removed:0,freed:0};let s=na(e),a=Ts(Gn(e))+Ts(Un(e))+s.reduce((h,u)=>h+u.bytes,0),l=0,d=0;for(let h of s){if(a<=r||s.length-l<=n)break;try{(0,ve.rmSync)(h.file,{force:!0}),l++,d+=h.bytes,a-=h.bytes}catch{}}let c=a>r;if(l){let h=ue.get(e);if(h&&Array.isArray(h.meta.runs)){let u=new Set(na(e).map(f=>f.ts)),p=h.meta.runs.length;h.meta.runs=h.meta.runs.filter(f=>u.has(f.ts)),h.meta.runs.length!==p&&tn(e)}}return{removed:l,freed:d,bytes:a,limit:r,capped:c}}function Cs(e,t,n){let r=ue.get(e);if(!r||!t||!n||!n.length)return!1;let s=(0,He.join)(gn(e),t+".json"),o=en(s,null);return o?(o.log=(o.log||[]).concat(n),wt(s,o),yl(e,t,o),(r.meta.runs||[])[0]&&r.meta.runs[0].ts===t&&(r.meta.lastLog=(r.meta.lastLog||[]).concat(n),tn(e)),!0):!1}function ml(e,t){let n=ue.get(e);if(!n)return null;let r=new Set((t||[]).filter(Boolean).map(xe));if(!r.size)return{removed:0,total:(n.feed||[]).length};let s=n.feed.length;n.feed=n.feed.filter(a=>!r.has(xe(a.url)));let o=s-n.feed.length;n.meta.deleted=[...new Set((n.meta.deleted||[]).concat([...r]))],n.meta.deleted.length>2e4&&(n.meta.deleted=n.meta.deleted.slice(-2e4)),n.meta.editedAt=Date.now();for(let a of n.meta.runs||[]){let l=(0,He.join)(gn(e),a.ts+".json"),d=en(l,null);if(!d||!Array.isArray(d.rows))continue;let c=d.rows.length;d.rows=d.rows.filter(h=>!r.has(xe(h.url))),d.rows.length!==c&&(d.found=d.rows.length,d.added=Math.max(0,(d.added||0)-(c-d.rows.length)),wt(l,d),a.found=d.found,a.added=d.added)}return zt(e),tn(e),{removed:o,total:n.feed.length,deletedTotal:n.meta.deleted.length}}function Kn(e,t,n,r){let s=ue.get(e);if(!s)return{added:0,total:0};s.meta.runs=s.meta.runs||[];let o=r?s.meta.runs.find(p=>p.ts===r):null,a=o?o.at:Date.now();r||(r=Nh());let l=new Set(s.feed.map(p=>xe(p.url))),d=new Set((s.meta.deleted||[]).map(xe)),c=d.size?t.filter(p=>!d.has(xe(p.url))):t;for(let p of c)!p.url||l.has(xe(p.url))||(l.add(xe(p.url)),s.feed.push({source:p.source,date:p.date,title:p.title,url:p.url,channel:p.channel,channels:p.channels||p.channel,match:p.match,snippet:p.snippet,author:p.author||"",kind:p.kind||"",via:p.via||"",matchIn:p.matchIn||"",comments:Number.isFinite(p.comments)?p.comments:null,firstSeenAt:Date.now(),isNew:!0,run:r}));s.feed.sort((p,f)=>String(f.date||"").localeCompare(String(p.date||""))),s.feed.length>5e3&&(s.feed=s.feed.slice(0,5e3));let h=s.feed.filter(p=>p.run===r).length,u=c.length;s.meta.lastRun=a,s.meta.lastLog=n||[],o?(o.added=h,o.found=u):(o={ts:r,at:a,added:h,found:u},s.meta.runs.unshift(o)),s.meta.runs.length>300&&(s.meta.runs=s.meta.runs.slice(0,300)),zt(e),tn(e);try{wt((0,He.join)(gn(e),r+".json"),{at:a,added:h,found:u,log:n||[],rows:c})}catch{}yl(e,r,{at:a,added:h,found:u,log:n||[]});try{let p=ia(s.meta.config);p&&Date.now()-(Xc.get(e)||0)>300*1e3&&(Xc.set(e,Date.now()),zh(e,p))}catch{}return{added:h,total:s.feed.length,ts:r}}function bl(e,t,n){let r=ue.get(e);if(!r||!n)return null;let s=i(l=>(n.log||[]).find(d=>d.site===l),"line"),o=s("(период)"),a=s("(время)");return{проект:r.meta.name||"",прогон:wl(t)||t,"id прогона":t,запрос:(r.meta.config||{}).keyword||"",период:o?o.note:"",время:a?a.note:"",найдено:n.found||0,новых:n.added||0,сайты:(n.log||[]).map(l=>{let d={сайт:l.site,найдено:l.found||0,каналы:l.channel||"",заметка:l.note||""};return l.ms&&(d.секунд=Math.round(l.ms/1e3)),d})}}function yl(e,t,n){let r=ue.get(e);if(!r)return;let s=bl(e,t,n);if(s)try{As(Hn);let o=gl(r.meta.name);wt((0,He.join)(Hn,qh(r.meta.name,t)),s);let a=(0,ve.readdirSync)(Hn).filter(l=>l.endsWith(" — "+o+".json")).sort();for(let l of a.slice(0,Math.max(0,a.length-Ih)))try{(0,ve.rmSync)((0,He.join)(Hn,l),{force:!0})}catch{}}catch{}}function xl(e,t){let n=en((0,He.join)(gn(e),t+".json"),null);return n?bl(e,t,n):null}function Cr(e){let t=ue.get(e);if(t&&Array.isArray(t.meta.runs))return t.meta.runs;try{return(0,ve.readdirSync)(gn(e)).filter(n=>n.endsWith(".json")).sort().reverse().map(n=>({ts:n.replace(/\.json$/,"")}))}catch{return[]}}function $n(e,t){return en((0,He.join)(gn(e),t+".json"),null)}var ve,Qc,He,ra,Ph,sa,Ss,oa,ks,Zc,As,Ar,Un,Gn,gn,Nh,Fn,ue,Xc,tn,zt,aa,Ts,ia,Hn,Ih,gl,wl,qh,Lt=ee(()=>{ve=require("node:fs"),Qc=require("node:url"),He=require("node:path");ht();ra=require("node:crypto");xr();Ot();Ph=(0,He.dirname)((0,Qc.fileURLToPath)(__mcFileUrl));Oo((e,t)=>{try{(0,ve.cpSync)(e,t,{recursive:!0})}catch{}});sa=me,Ss=(0,He.join)(sa,"projects"),oa=(0,He.join)(sa,"settings.json"),ks=(0,He.join)(Ph,"data.json"),Zc=i(e=>e+Date.now().toString(36)+Math.random().toString(36).slice(2,6),"uid"),As=i(e=>{try{(0,ve.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(wt,"writeJson");i(en,"readJson");Ar=i(e=>(0,He.join)(Ss,e),"projDir"),Un=i(e=>(0,He.join)(Ar(e),"project.json"),"metaFile"),Gn=i(e=>(0,He.join)(Ar(e),"feed.json"),"feedFile"),gn=i(e=>(0,He.join)(Ar(e),"runs"),"runsDir"),Nh=i(()=>new Date().toISOString().replace(/[:.]/g,"-").slice(0,23),"tsName"),Fn={},ue=new Map;i(jh,"loadAll");i(Oh,"migrateOldDb");jh();Oh();Xc=new Map,tn=i(e=>{let t=ue.get(e);t&&wt(Un(e),t.meta)},"persistMeta"),zt=i(e=>{let t=ue.get(e);t&&wt(Gn(e),t.feed)},"persistFeed");i(et,"settings");i(_c,"setSettings");aa=i(e=>({id:e.meta.id,name:e.meta.name,config:e.meta.config||{},schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,log:e.meta.lastLog||[],runs:e.meta.runs||[],items:e.feed||[],ai:e.meta.ai||{},editedAt:e.meta.editedAt||0,tg:Lr(e.meta.id)}),"shape");i(nn,"listProjects");i(je,"getProject");i(el,"createProject");i(tl,"updateProject");i(nl,"deleteProject");i(rl,"markRead");i(Ls,"setAiReport");i(sl,"getAiReports");i(Ke,"tgState");i(lt,"setTgState");i(ol,"rotateOwnerCode");i(Lr,"tgPublic");i(al,"unsentItems");i(il,"markTgSent");i(cl,"markAllTgSent");i(ll,"unmarkTgSent");i(dl,"setSentiment");i(ul,"setRelevance");i(pl,"clearRelevance");i(hl,"clearSentiment");i(na,"runFiles");Ts=i(e=>{try{return(0,ve.existsSync)(e)?(0,ve.statSync)(e).size:0}catch{return 0}},"fileBytes");i(fl,"projectUsage");ia=i(e=>Math.max(0,Math.min(1e5,+(e||{}).diskMb||0)),"diskLimitMb");i(zh,"enforceDiskLimit");i(Cs,"appendRunLog");i(ml,"deleteItems");i(Kn,"mergeRun");Hn=(0,He.join)(sa,"logs"),Ih=30,gl=i(e=>String(e||"проект").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"проект","safeName"),wl=i(e=>{let t=new Date(e.slice(0,23).replace(/-(\d\d)-(\d\d)-(\d\d\d)$/,":$1:$2.$3")+"Z");if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p2");return Me(t)+" "+n(t.getHours())+":"+n(t.getMinutes())},"humanTs"),qh=i((e,t)=>(wl(t)||t.slice(0,16)).replace(":","-")+" — "+gl(e)+".json","logFileName");i(bl,"buildRunLog");i(yl,"saveRunLogCopy");i(xl,"runLogJson");i(Cr,"listRuns");i($n,"getRun")});function Tl(){try{Ct=(0,It.existsSync)(Ms)?JSON.parse((0,It.readFileSync)(Ms,"utf8")):{}}catch{Ct={}}(!Ct||typeof Ct!="object")&&(Ct={})}function Uh(){try{(0,It.mkdirSync)(kl,{recursive:!0});let e=Ms+".tmp";(0,It.writeFileSync)(e,JSON.stringify(Ct,null,2)),(0,It.renameSync)(e,Ms)}catch{}}function Mr(e){try{return new URL(/:\/\//.test(e)?e:"https://"+e).host.replace(/^www\./,"")}catch{return String(e||"").trim()}}function Ll(e){let t=Ct[Mr(e)];return!t||!t.pick||!t.pick.date||t.runs%Rs===Rs-1?"":t.pick.date.via||""}function Cl(e,t){if(!t)return"";let n=Object.entries(t).filter(([c,h])=>c&&h>0);if(!n.length||n.reduce((c,[,h])=>c+h,0)<Gh)return"";n.sort((c,h)=>h[1]-c[1]);let[s,o]=n[0],a=Al(Mr(e));a.pick=a.pick||{};let l=a.pick.date;if(!l||!l.via)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if(l.via===s)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if((t[l.via]||0)>=o*Kh)return a.pick.pending=null,"";let d=a.pick.pending&&a.pick.pending.via===s?a.pick.pending:{via:s,runs:0};return d.runs++,a.pick.pending=d,d.runs<$h?"":(a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,l.via)}function Ml(e){let t=Ct[Mr(e)];return t&&t.pick&&t.pick.date?da(t.pick.date.via):""}function Rl(e){let t=Mr(e),n=Ct[t],r=new Set;if(!n)return{skip:r,host:t,reprobe:!1};if((n.zero||0)>=2&&n.everFound)return{skip:r,host:t,reprobe:!1};let s=n.runs%Rs===Rs-1;if(!s)for(let o of ca){let a=n.ch[o];a&&a.dead>=la&&r.add(o)}if(!s)for(let o of Sl){let a=n.ch[o];a&&a.idle>=Fh(o)&&r.add(o)}if(!s&&!n.everFound&&(n.zero||0)>=la)for(let o of ca)r.add(o);return{skip:r,host:t,reprobe:s}}function Dl(e,t){if(!t)return;let n=Mr(e),r=Al(n);r.runs++;for(let a of ca){let l=t[a];if(l==null)continue;let d=r.ch[a]=r.ch[a]||{dead:0,okEver:!1};l>0?(d.dead=0,d.okEver=!0):d.dead++}typeof t.total=="number"&&(r.zero=t.total>0?0:(r.zero||0)+1,t.total>0&&(r.everFound=!0));let s=t.contrib,o=new Set(t.notRun||[]);if(s&&t.total>0)for(let a of Sl){if(o.has(a)||a in t&&t[a]===null)continue;let l=r.ch[a]=r.ch[a]||{idle:0,okEver:!1};(Bh[a]||[a]).reduce((c,h)=>c+(s[h]||0),0)>0?(l.idle=0,l.okEver=!0):l.idle=(l.idle||0)+1}}function ua(){Uh()}function El(){Tl()}var It,vl,kl,Ms,ca,Sl,Bh,la,Hh,Fh,Rs,Ct,Al,Gh,Kh,$h,da,Pl=ee(()=>{It=require("node:fs"),vl=require("node:path");ht();xr();kl=me,Ms=(0,vl.join)(kl,"site-memory.json"),ca=["render","external","sitesearch"],Sl=["sitemap","render","sitesearch"],Bh={sitemap:["sitemap"],render:["render","render*"],sitesearch:["браузер-поиск","браузер-поиск*"]},la=4,Hh={sitesearch:2},Fh=i(e=>Hh[e]||la,"idleLimit"),Rs=5,Ct={};i(Tl,"load");i(Uh,"save");Tl();i(Mr,"hostOf");Al=i(e=>Ct[e]=Ct[e]||{runs:0,ch:{}},"rec"),Gh=3;i(Ll,"datePick");Kh=.25,$h=2;i(Cl,"recordPicks");da=i(e=>yc[e]||e||"","pickRu");i(Ml,"datePickRu");i(Rl,"plan");i(Dl,"record");i(ua,"persist");i(El,"reload")});var wa={};br(wa,{get:()=>Jh,persist:()=>zs,reload:()=>ma,set:()=>Xh,size:()=>_h,summary:()=>ga});function Nl(e){if(!(0,st.existsSync)(e))return null;try{let t=JSON.parse((0,st.readFileSync)(e,"utf8"));return!t||!t.urls?{bad:"в файле нет записей"}:t}catch(t){return{bad:String(t&&t.message||t).slice(0,80)}}}function jl(e){if(e.v!==zl){fa=!0;return}for(let[t,n]of Object.entries(e.urls))n&&n.d&&Mt.set(t,{d:n.d,t:n.t||js()})}function ma(){Mt=new Map,Dr=!1,Es="",Ps=!1,Ns=!1,ha=!1,fa=!1,Ds=0;let e=Nl(Rr);if(ql=e!==null,e&&!e.bad){jl(e);return}if(!e)return;Es=e.bad,Ps=!0;let t=Nl(Il);t&&!t.bad&&(jl(t),ha=!0)}function Jh(e){let t=Mt.get(e);return t?(t.t!==js()&&(t.t=js(),Dr=!0),t.d):null}function Xh(e,t){if(!e||!t)return;let n=Mt.get(e);n&&n.d===t||(Mt.set(e,{d:String(t),t:js()}),Dr=!0)}function Qh(){if(Mt.size<=Vh)return;let e=[...Mt.entries()].sort((t,n)=>n[1].t-t[1].t).slice(0,Yh);Mt=new Map(e)}function Ol(e,t){try{return(0,st.existsSync)(e)?((0,st.renameSync)(e,t),!0):!1}catch{return!1}}function zs(e=!1){if(!(!Dr||Ns)&&!(!e&&Ds&&Date.now()-Ds<Zh)){if(Ps){try{(0,st.existsSync)(pa)&&(0,st.unlinkSync)(pa)}catch{}if(!Ol(Rr,pa)){Ns=!0;return}Ps=!1}try{Qh(),(0,st.mkdirSync)(me,{recursive:!0});let t={};for(let[r,s]of Mt)t[r]=s;let n=Rr+".tmp";(0,st.writeFileSync)(n,JSON.stringify({v:zl,urls:t})),Ol(Rr,Il),(0,st.renameSync)(n,Rr),Dr=!1,Ds=Date.now()}catch{}}}function _h(){return Mt.size}function ga(){let e=Mt.size;return Es?"память дат: ОСНОВНОЙ ФАЙЛ НЕ ПРОЧИТАЛСЯ ("+Es+") — "+(ha?"взята запасная копия, потеряно только самое новое (в памяти "+e+")":"запасной копии тоже не было, память собирается заново (в памяти "+e+"); этот прогон и следующий будут дольше обычного")+(Ns?". Отложить нечитаемый файл не удалось, поэтому новые даты НЕ сохранены — старую память не трогаем":". Нечитаемый файл сохранён как date-cache.broken.json — не удаляйте его, по нему видно причину"):fa?"память дат сброшена: поменялся разбор дат — собирается заново (в памяти "+e+")":e?"память дат: "+e+" статей — повторно их не качаем":ql?"":"память дат пока пуста — первый прогон собирает её с нуля"}var st,Os,Rr,zl,Vh,Yh,Il,pa,Mt,Dr,Es,Ps,Ns,ha,fa,ql,js,Zh,Ds,Bl=ee(()=>{st=require("node:fs"),Os=require("node:path");ht();Rr=(0,Os.join)(me,"date-cache.json"),zl=3,Vh=2e5,Yh=15e4,Il=(0,Os.join)(me,"date-cache.prev.json"),pa=(0,Os.join)(me,"date-cache.broken.json"),Mt=new Map,Dr=!1,Es="",Ps=!1,Ns=!1,ha=!1,fa=!1,ql=!1,js=i(()=>Math.floor(Date.now()/864e5),"today");i(Nl,"readFile");i(jl,"load");i(ma,"reload");i(Jh,"get");i(Xh,"set");i(Qh,"prune");i(Ol,"move");Zh=typeof process<"u"&&process.env&&Number(process.env.MC_DC_SAVE_GAP_MS)||18e4,Ds=0;i(zs,"persist");i(_h,"size");i(ga,"summary")});function Hl(e){let t=i(n=>String(n).padStart(2,"0"),"p");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function ef(e,t){let n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return n.setDate(n.getDate()+t),n}function Wn(e,t=new Date){let n=e||{},r=Hl(t),s=n.periodMode||"fixed";if(s==="rolling"){let l=Number(n.periodDays),d=Number.isFinite(l)&&l>=Fl?Math.floor(l):Fl,c=Hl(ef(t,-(d-1)));return{from:c,to:r,why:`скользящее окно: последние ${d} дн. (${c} … ${r})`}}if(s==="since"){let l=n.from||r;return l>r?{from:r,to:r,why:`начало (${l}) ещё не наступило — беру только сегодня`}:{from:l,to:r,why:`от даты и до сегодня (${l} … ${r})`}}let o=n.from||"",a=n.to||"";return!o&&!a?{from:o,to:a,why:"период НЕ ЗАДАН — беру за всё время, в выдачу попадёт и старое"}:o?a?{from:o,to:a,why:`фиксированное окно (${o} … ${a})`}:{from:o,to:a,why:`с ${o} и без конца — беру всё, что новее`}:{from:o,to:a,why:`без начала — беру всё до ${a} включительно`}}var Fl,Is=ee(()=>{i(Hl,"ymdLocal");i(ef,"shiftDays");Fl=2;i(Wn,"resolvePeriod")});var Vl={};br(Vl,{engagementProbe:()=>ka,facebookProfile:()=>bn,fbRows:()=>Ta,fbWindow:()=>Sa,feedChunks:()=>$l,isFacebook:()=>tf,oldestAt:()=>Aa,parseFeed:()=>Nr,postFromEdge:()=>Wl});function bn(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^https?:\/\//i.test(t)?t:"https://"+t.replace(/^\/+/,""))}catch{return null}if(!/(^|\.)facebook\.com$|(^|\.)fb\.com$/i.test(n.hostname))return null;let r=n.searchParams.get("id"),s=n.pathname.split("/").filter(Boolean),o=/^profile\.php$/i.test(s[0]||"")?r?"profile.php?id="+r:"":s[0]||"";return!o||/^(groups|watch|marketplace|events|gaming|pages|stories|reel|photo|share|login|help|settings)$/i.test(o)?null:{name:o,url:"https://www.facebook.com/"+o,label:"facebook.com/"+o.replace(/^profile\.php\?id=/,"id")}}function nf(e){let t=[];for(let n of String(e||"").split(`
`)){let r=n.trim();if(!(!r||r[0]!=="{"))try{t.push(JSON.parse(r))}catch{}}return t}function $l(e){let t=[],n={cursor:"",hasNext:!1,seenFeed:!1};for(let r of nf(e)){let s=r&&r.data&&r.data.node&&r.data.node.timeline_list_feed_units;if(s){n.seenFeed=!0,Array.isArray(s.edges)&&t.push(...s.edges),s.page_info&&(n.cursor=s.page_info.end_cursor||"",n.hasNext=!!s.page_info.has_next_page);continue}if(rf(r&&r.path)&&r.data&&r.data.node){n.seenFeed=!0,t.push(r.data);continue}let o=r&&r.data&&r.data.page_info;o&&Array.isArray(r.path)&&r.path.includes("timeline_list_feed_units")&&(n.seenFeed=!0,n.cursor=o.end_cursor||n.cursor,n.hasNext=!!o.has_next_page)}return{edges:t,info:n}}function Er(e,t,{skip:n=["attached_story"],depth:r=9}={}){let s=new Set,o=i((a,l)=>{if(!a||typeof a!="object"||l>r||s.has(a))return;if(s.add(a),Array.isArray(a)){for(let c of a){let h=o(c,l+1);if(h!==void 0)return h}return}let d=t(a);if(d!==void 0)return d;for(let c of Object.keys(a)){if(n.includes(c))continue;let h=o(a[c],l+1);if(h!==void 0)return h}},"walk");return o(e,0)}function ba(e){if(!e)return;let t=wn(e,"comet_sections","context_layout","story","comet_sections","metadata"),n=Array.isArray(t)?t.map(r=>Vn(wn(r,"story","creation_time"))).find(r=>r!==void 0):void 0;return Vn(e.creation_time)??Vn(wn(e,"comet_sections","timestamp","story","creation_time"))??n??Er(e,r=>Vn(r.creation_time),{skip:Pr})}function ya(e){if(e)return Rt(wn(e,"message","text"))??Rt(wn(e,"comet_sections","message","story","message","text"))??Er(e,t=>t.message&&Rt(t.message.text)||void 0,{skip:Pr})}function of(...e){for(let t of e){let n=sf(t);if(!n)continue;let r=Kl(wn(n,"comment_rendering_instance","comments","total_count"))??Kl(n.total_comment_count);if(r!==void 0)return r}return null}function ka(e){let t=String(e||""),n=i(r=>(t.match(r)||[]).length,"hits");return{reactions:n(/"(?:reaction_count|i18n_reaction_count|top_reactions|reaction_display_strategy|likers)"/g),shares:n(/"(?:share_count|share_count_reduced|reshare_count)"/g)}}function Wl(e){let t=e&&(e.node||e);if(!t||typeof t!="object")return null;let n=t.comet_sections&&t.comet_sections.content&&t.comet_sections.content.story||t,r=[n.attached_story,t.attached_story].filter(Boolean),s=i(c=>{for(let h of r){let u=c(h);if(u!==void 0&&u!=="")return u}},"pickAt"),o=Gl(n)??Gl(t),a=va(n)??va(t);if(!o&&!a)return null;let l=xa(n)??xa(t)??{name:"",url:""},d={id:o||a,url:a||"",at:ba(t)??ba(n)??0,author:l.name,authorUrl:l.url,text:ya(n)??ya(t)??"",comments:of(t,n),repost:null};if(r.length){let c=s(xa)||{name:"",url:""};d.repost={author:c.name,authorUrl:c.url,url:s(va)||"",text:s(ya)||"",at:s(ba)||0}}return d}function Nr(e){let{edges:t,info:n}=$l(e),r=[],s=new Set;for(let o of t){let a=Wl(o);a&&(s.has(a.id)||(s.add(a.id),r.push(a)))}return{posts:r,cursor:n.cursor,hasNext:n.hasNext,seenFeed:n.seenFeed}}function Sa(e,t,n=Date.now()){let r=Math.max(1,Math.min(3,+t||1)),s=i((c,h)=>{if(!c)return NaN;let u=new Date(String(c)+h).getTime();return Number.isFinite(u)?u:NaN},"stamp"),o=s(e&&e.from,"T00:00:00"),a=s(e&&e.to,"T23:59:59"),l=Math.max(Number.isFinite(o)?o:-1/0,n-r*864e5),d=Math.min(Number.isFinite(a)?a:1/0,n);return{fromMs:l,toMs:d,days:r}}function Ta(e,{groups:t,exGroups:n=[],source:r,fromMs:s,toMs:o}){if(!Number.isFinite(s)||!Number.isFinite(o))throw new Error("окно времени не посчиталось ("+s+" … "+o+") — это ошибка в программе, а не в настройках");let a=qn(t),l=[],d={всего:0,"вне периода":0,"без даты":0,"ключа нет":0,"минус-слово":0};for(let c of e){if(d.всего++,!c.at){d["без даты"]++;continue}let h=c.at*1e3;if(h<s||h>o){d["вне периода"]++;continue}let u=c.text||"",p=c.repost&&c.repost.text||"",f=!!u&&Qe(u.toLowerCase(),t),m=!!p&&Qe(p.toLowerCase(),t);if(!f&&!m){d["ключа нет"]++;continue}if(n.length&&Qe((u+" "+p).toLowerCase(),n)){d["минус-слово"]++;continue}let g=c.repost?"репост":"авторский",w=f&&m?"в подписи и в репосте":f?"в подписи":"в тексте репоста",b=f?u:p,y=b.split(`
`).map(A=>A.trim()).find(Boolean)||"(без текста)";l.push({source:r,date:new Date(h).toISOString(),title:y.slice(0,120),url:c.url,channel:"facebook",channels:"facebook",match:f?"подпись":"репост",snippet:In(b,a),author:c.author||"",kind:g,via:c.repost?(c.repost.author||"чужой пост")+(c.repost.url?" — "+c.repost.url:""):"",matchIn:w,comments:Number.isFinite(c.comments)?c.comments:null})}return{rows:l,tally:d}}var tf,rf,Vn,Rt,wn,Pr,Ul,xa,va,Gl,sf,Kl,Aa,jr=ee(()=>{Bn();i(bn,"facebookProfile");tf=i(e=>!!bn(e),"isFacebook");i(nf,"jsonLines");rf=i(e=>Array.isArray(e)&&e.length>=2&&e[e.length-2]==="edges"&&typeof e[e.length-1]=="number"&&e.includes("timeline_list_feed_units"),"isEdgeChunk");i($l,"feedChunks");i(Er,"deep");Vn=i(e=>typeof e=="number"&&isFinite(e)&&e>0?e:void 0,"num"),Rt=i(e=>typeof e=="string"&&e.trim()?e:void 0,"str"),wn=i((e,...t)=>t.reduce((n,r)=>n==null?n:n[r],e),"get"),Pr=["attached_story","attachments","attachment","style_infos","media"];i(ba,"timeOf");i(ya,"textOf");Ul=i(e=>{if(!e||!Array.isArray(e.actors)||!e.actors.length)return;let t=e.actors[0];return t&&Rt(t.name)?{name:t.name,url:Rt(t.url)||""}:void 0},"oneActor"),xa=i(e=>e?Ul(e)??Er(e,Ul,{skip:Pr}):void 0,"actorOf"),va=i(e=>e?Rt(e.wwwURL)??Rt(e.permalink_url)??Er(e,t=>Rt(t.wwwURL)||Rt(t.permalink_url),{skip:Pr}):void 0,"urlOf"),Gl=i(e=>e?Rt(e.post_id)??(Vn(e.post_id)?String(e.post_id):void 0)??Er(e,t=>Rt(t.post_id)||(Vn(t.post_id)?String(t.post_id):void 0),{skip:Pr}):void 0,"idOf"),sf=i(e=>wn(e,"comet_sections","feedback","story","story_ufi_container","story","feedback_context","feedback_target_with_context"),"ufiOf"),Kl=i(e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:void 0,"count");i(of,"commentsOf");i(ka,"engagementProbe");i(Wl,"postFromEdge");i(Nr,"parseFeed");i(Sa,"fbWindow");i(Ta,"fbRows");Aa=i(e=>e.reduce((t,n)=>n.at&&(!t||n.at<t)?n.at:t,0),"oldestAt")});function Dt(e){let t=!!(e&&e.noExternal);return{ai:!t,bot:!t,extSearch:!t,locked:t}}var Yn,Jn=ee(()=>{i(Dt,"outbound");Yn="у проекта запрещена отправка данных во внешний контур (настройка проекта)"});var Da={};br(Da,{DEFAULT_LIMIT:()=>yn,_reset:()=>df,canVisit:()=>Bs,nextAt:()=>af,note:()=>Ra,persist:()=>Ma,reload:()=>Ca,summary:()=>lf,visitsToday:()=>cf});function Ca(){Vt=new Map;try{let e=(0,qt.existsSync)(Or)?JSON.parse((0,qt.readFileSync)(Or,"utf8")):null;for(let[t,n]of Object.entries(e&&e.hosts||{}))Array.isArray(n)&&Vt.set(t,n.filter(r=>typeof r=="number"&&isFinite(r)))}catch{Vt=new Map}return Ir=!1,Vt.size}function Ma(){if(!Ir)return!1;try{(0,qt.mkdirSync)((0,qs.dirname)(Or),{recursive:!0});let e={};for(let[n,r]of Vt)r.length&&(e[n]=r);let t=Or+".tmp";return(0,qt.writeFileSync)(t,JSON.stringify({v:1,hosts:e},null,2)),(0,qt.renameSync)(t,Or),Ir=!1,!0}catch{return!1}}function Bs(e,{limit:t=yn,now:n=Date.now()}={}){let r=Math.max(1,+t||yn),s=qr(e,n);if(s.length>=r){let l=zr-(n-Math.min(...s));return{ok:!1,used:s.length,limit:r,why:"за сутки уже "+s.length+" захода из "+r+" — следующий через "+La(l)}}let o=Math.floor(zr/r),a=s.length?Math.max(...s):0;if(a&&n-a<o){let l=n-a;return{ok:!1,used:s.length,limit:r,why:(l<6e4?"заходили только что":"заходили "+La(l)+" назад")+" — на профиль ходим не чаще раза в "+La(o)}}return{ok:!0,used:s.length,limit:r,why:""}}function Ra(e,t=Date.now()){let n=qr(e,t);return n.push(t),Vt.set(e,n),Ir=!0,n.length}function af(e,{limit:t=yn,now:n=Date.now()}={}){if(Bs(e,{limit:t,now:n}).ok)return 0;let s=qr(e,n),o=Math.max(1,+t||yn);return s.length>=o?Math.min(...s)+zr:Math.max(...s)+Math.floor(zr/o)}function df(){Vt=new Map,Ir=!1}var qt,qs,Or,zr,yn,Vt,Ir,qr,La,cf,lf,Ea=ee(()=>{qt=require("node:fs"),qs=require("node:path");ht();Or=(0,qs.join)(me,"social-visits.json"),zr=24*3600*1e3,yn=3,Vt=new Map,Ir=!1;i(Ca,"reload");i(Ma,"persist");qr=i((e,t)=>(Vt.get(e)||[]).filter(n=>t-n<zr),"fresh"),La=i(e=>{let t=Math.round(e/6e4);if(t<1)return"только что";if(t<60)return t+" мин";let n=Math.floor(t/60),r=t%60;return n+" ч"+(r?" "+r+" мин":"")},"hhmm");i(Bs,"canVisit");i(Ra,"note");i(af,"nextAt");cf=i((e,t=Date.now())=>qr(e,t).length,"visitsToday"),lf=i((e=Date.now())=>{let t=[...Vt.keys()].filter(n=>qr(n,e).length).length;return t?"профилей соцсетей посещено за сутки: "+t:""},"summary");i(df,"_reset")});function Yl(e,t){typeof e=="function"&&(Na=e),typeof t=="function"&&(ja=t)}function Jl(e){typeof e=="function"&&(Oa=e)}function Xl(e){typeof e=="function"&&(za=e)}async function Xn(e,t,n={}){let r=typeof n.onStep=="function"?n.onStep:null,s=typeof n.stopping=="function"?n.stopping:()=>!1,o=!1,a=e.config||{};if(!String(a.keyword||"").trim())return{rows:[],log:[{site:"(проект)",channel:"—",found:0,note:"не задан запрос — прогон пропущен"}]};$c(),El(),ma(),Bc(wa);let l=(a.sites||[]).map(j=>String(j).trim()).filter(Boolean),d=Wn(a),c=Dt(a),h={keyword:a.keyword,exclude:a.exclude||"",morph:a.morph!==!1,from:d.from,to:d.to,...c.extSearch?{}:{external:!1}},u=[],p=[],f=new Map,m=Date.now(),g=l.length+(a.facebook||[]).filter(j=>String(j||"").trim()).length+(a.youtube&&a.youtube.enabled?1:0),w=0,b=i(j=>{if(r)try{r({done:w,total:g,found:u.length,site:j||""})}catch{}},"tick");b(""),ja&&ja();let y=0,A=0,v=i(()=>{if(t)try{t(u.slice(),p.slice())}catch{}},"checkpoint"),T=i(async()=>{for(;y<l.length;){if(s()){o=!0;break}let j=l[y++],$=Date.now();b(j);try{let{skip:Y,reprobe:re}=Rl(j),ke=Ll(j),Se=await vs(j,{...h,skip:Y,reprobe:re,datePick:ke});Dl(j,Se.stats);let Re=Cl(j,Se.stats&&Se.stats.picks),D=Ml(j);D&&(Se.note=(Se.note?Se.note+"; ":"")+(Re?"дата теперь берётся иначе: было «"+da(Re)+"», стало «"+D+"» — сайт сменил разметку":"дата: "+D));for(let F of Se.rows){if(!F.url)continue;let R=xe(F.url),O=f.get(R);if(O){O.channels=[...new Set((O.channels+" + "+(F.channels||"")).split(" + ").filter(Boolean))].join(" + ");continue}f.set(R,F),u.push(F)}p.push({site:j,channel:Se.channel,found:Se.rows.length,note:Se.note,ms:Date.now()-$})}catch(Y){p.push({site:j,channel:"error",found:0,note:String(Y&&Y.message||Y),ms:Date.now()-$})}w++,b(""),++A%3===0&&(ua(),zs(),v())}},"worker");await Promise.all(Array.from({length:Math.min(4,l.length||1)},T)),ua(),zs(!0),v();let k=(a.facebook||[]).map(j=>bn(j)).filter(Boolean);if(k.length){let j=Math.max(1,Math.min(6,+a.fbVisits||yn)),$=Date.now(),{fromMs:Y,toMs:re,days:ke}=Sa(d,a.fbDays,$),Se=Wt(a.keyword,a.morph!==!1),Re=Wt(a.exclude||"",a.morph!==!1);Ca(),p.push({site:"(фейсбук)",channel:"—",found:0,note:"профилей "+k.length+"; окно "+ke+" сут. ("+new Date(Y).toLocaleString("ru-RU")+" … "+new Date(re).toLocaleString("ru-RU")+"); на профиль не чаще "+j+" раз в сутки"});for(let D of k){if(s()){o=!0;break}let F=Date.now();b(D.label);let R=Bs(D.label,{limit:j});if(!R.ok){p.push({site:D.label,channel:"facebook",found:0,note:"пропущен: "+R.why});continue}if(!za){p.push({site:D.label,channel:"facebook",found:0,note:"нет браузера — соцсети читаются только с Playwright (запусти setup-windows.bat)"});continue}try{Ra(D.label);let O=await za(D.url,{sinceMs:Y,maxScrolls:ke<=1?3:6});if(!O||!O.ok){p.push({site:D.label,channel:"facebook",found:0,ms:Date.now()-F,note:O&&O.err||"лента не прочитана"});continue}let L=O.chunks.join(`
`),ce=Nr(L),{rows:le,tally:De}=Ta(ce.posts,{groups:Se,exGroups:Re,source:D.label,fromMs:Y,toMs:re});for(let de of le){let Je=xe(de.url);f.has(Je)||(f.set(Je,de),u.push(de))}let Z=["постов просмотрено "+ce.posts.length+" (прокруток "+(O.scrolls||0)+")","совпало "+le.length],ge=ce.posts.reduce((de,Je)=>Je.at&&(!de||Je.at<de)?Je.at:de,0);Z.push(ge&&ge*1e3<=Y?"докрутились до начала окна":"до начала окна НЕ докрутились — в ленте могло остаться ещё"+(ge?" (дошли до "+new Date(ge*1e3).toLocaleString("ru-RU")+")":""));let at=Object.entries(De).filter(([de,Je])=>de!=="всего"&&Je).map(([de,Je])=>de+" — "+Je);at.length&&Z.push("отсеяно: "+at.join(", "));let nt=ce.posts.filter(de=>Number.isFinite(de.comments)).length;Z.push("счётчик комментариев приехал у "+nt+" постов из "+ce.posts.length);let ye=ka(L);Z.push(ye.reactions?"признаки реакций в ответах встретились "+ye.reactions+" раз — есть что разбирать":"реакций Фейсбук в этих ответах не прислал — показывать нечего"),p.push({site:D.label,channel:"facebook",found:le.length,ms:Date.now()-F,note:Z.join("; ")})}catch(O){p.push({site:D.label,channel:"facebook",found:0,ms:Date.now()-F,note:String(O&&O.message||O)})}w++,b(""),v()}Ma()}if(a.youtube&&a.youtube.enabled&&!s()){b("youtube");try{let j=await Jc(a.keyword,{exclude:a.exclude||"",morph:a.morph!==!1,ytRange:a.youtube.range||"month",from:d.from,to:d.to});for(let $ of j.rows)$.url&&!f.has($.url)&&(f.set($.url,$),u.push($));p.push({site:"youtube",channel:j.channel,found:j.rows.length,note:j.note})}catch(j){p.push({site:"youtube",channel:"error",found:0,note:String(j)})}w++,b("")}o&&p.push({site:"(остановлен)",channel:"—",found:0,note:"сбор остановлен человеком: пройдено источников "+w+" из "+g+". Найденное сохранено, остальные источники не читались"}),p.push({site:"(период)",channel:"—",found:0,note:d.why,from:d.from||"",to:d.to||""});let S=ga();if(S&&p.push({site:"(память дат)",channel:"—",found:0,note:S}),Oa)try{await Oa()}catch{}let M=Date.now()-m,N=Na?Na():null,V=p.filter(j=>j.ms).sort((j,$)=>$.ms-j.ms).slice(0,5).map(j=>String(j.site).replace(/^https?:\/\//,"").replace(/\/$/,"")+" "+Math.round(j.ms/1e3)+" с"),H=["прогон занял "+Pa(M)+" (сайтов "+l.length+", по 4 разом)"];if(N&&N.ops){let j=Math.max(1,N.lanes||1),$=N.busyMs/j,Y=Math.round($/Math.max(1,M)*100);H.push("браузер ("+j+" "+(j===1?"окно":j<5?"окна":"окон")+"): "+Pa(N.busyMs)+" за "+N.ops+" операций"+(j>1?", то есть "+Pa(Math.round($))+" в один поток":"")+" — это "+Y+"% времени прогона и его нижняя граница")}if(V.length&&H.push("дольше всех (с ожиданием очереди): "+V.join(", ")),N&&N.byHost){let j=Object.entries(N.byHost).sort(($,Y)=>Y[1].ms-$[1].ms).slice(0,5).map(([$,Y])=>$+" "+Math.round(Y.ms/1e3)+" с/"+Y.ops+" оп.");j.length&&H.push("браузер съели: "+j.join(", "))}return p.push({site:"(время)",channel:"—",found:0,note:H.join("; "),ms:M}),u.sort((j,$)=>String($.date||"").localeCompare(String(j.date||""))),{rows:u,log:p}}var Na,ja,Oa,za,Pa,Br=ee(()=>{Bn();Pl();Bl();Is();xr();jr();Jn();Ea();Na=null,ja=null;i(Yl,"setBrowserStats");Oa=null;i(Jl,"setBrowserCloser");za=null;i(Xl,"setFacebookReader");Pa=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"mmss");i(Xn,"runProject")});var tt,Hr=ee(()=>{tt=new Set});function Qn(e,{name:t="",total:n=0,by:r="ручной"}={}){xn.set(String(e),{id:String(e),name:String(t||""),by:r,startedAt:Date.now(),total:+n||0,done:0,found:0,site:"",stopping:!1})}function Zn(e,{done:t,total:n,found:r,site:s}={}){let o=xn.get(String(e));o&&(Number.isFinite(+t)&&(o.done=+t),Number.isFinite(+n)&&+n>0&&(o.total=+n),Number.isFinite(+r)&&(o.found=+r),s!=null&&(o.site=String(s)))}function Hs(e){let t=xn.get(String(e));return t?(t.stopping=!0,!0):!1}function _n(e){let t=xn.get(String(e));return!!(t&&t.stopping)}function er(e){xn.delete(String(e))}function tr(){return Array.from(xn.values()).map(e=>({id:e.id,name:e.name,by:e.by,startedAt:e.startedAt,total:e.total,done:e.done,found:e.found,site:e.site,stopping:e.stopping,ms:Date.now()-e.startedAt}))}function Ql(e){return xn.has(String(e))}var xn,Fr=ee(()=>{xn=new Map;i(Qn,"begin");i(Zn,"step");i(Hs,"askStop");i(_n,"stopping");i(er,"end");i(tr,"snapshot");i(Ql,"active")});function Ur(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^t\.me\/s\//,"t.me/").replace(/^@/,"t.me/").replace(/\/+$/,"")}var Ia,Zl,_l,ed,qa=ee(()=>{Ia=[{url:"kz.kursiv.media",name:"Курсив"},{url:"zakon.kz",name:"Zakon.kz"},{url:"kapital.kz",name:"Капитал"},{url:"informburo.kz",name:"Informburo"},{url:"tengrinews.kz",name:"Tengrinews"},{url:"kazpravda.kz",name:"Казахстанская правда"},{url:"baq.kz",name:"BAQ.kz"},{url:"khabar.kz",name:"Хабар"},{url:"turkystan.kz",name:"Túrkistan"},{url:"24.kz",name:"24.kz"},{url:"liter.kz",name:"Литер"},{url:"caravan.kz",name:"Караван"},{url:"newtimes.kz",name:"NewTimes"},{url:"stan.kz",name:"Stan.kz"},{url:"lada.kz",name:"Лада (Актау)"},{url:"sn.kz",name:"Столичная жизнь"},{url:"vechastana.kz",name:"Вечерняя Астана"},{url:"aikyn.kz",name:"Айқын"},{url:"ulysmedia.kz",name:"Ulys Media"},{url:"malim.kz",name:"Malim"},{url:"vlast.kz",name:"Власть"},{url:"astanatv.kz",name:"Астана ТВ"},{url:"exclusive.kz",name:"Exclusive"},{url:"forbes.kz",name:"Forbes Казахстан"},{url:"mgorod.kz",name:"Мой город (Уральск)"},{url:"politico.kz",name:"Politico.kz"},{url:"sputnik.kz",name:"Sputnik Казахстан"},{url:"almaty.tv",name:"Алматы ТВ"},{url:"qazaqstan.tv",name:"Qazaqstan"},{url:"democrat.kz",name:"Democrat"},{url:"arasha.kz",name:"Arasha"},{url:"press.kz",name:"Press.kz"},{url:"365info.kz",name:"365info"},{url:"lsm.kz",name:"LS (lsm.kz)"},{url:"inbusiness.kz",name:"InBusiness"},{url:"factcheck.kz",name:"Factcheck.kz"},{url:"egemen.kz",name:"Egemen Qazaqstan"},{url:"ratel.kz",name:"Ratel"},{url:"nur.kz",name:"NUR.KZ"},{url:"time.kz",name:"Время"},{url:"uralskweek.kz",name:"Уральская неделя"},{url:"yujanka.kz",name:"Южанка"},{url:"adyrna.kz",name:"Адырна"},{url:"masa.media",name:"Masa Media"}],Zl=[{url:"bbc.com",name:"BBC"},{url:"theguardian.com",name:"The Guardian"},{url:"aljazeera.com",name:"Al Jazeera"},{url:"dw.com",name:"Deutsche Welle",note:"поиск сайта работает (параметр item)"},{url:"cnn.com",name:"CNN"},{url:"euronews.com",name:"Euronews",note:"поиск сайта работает"},{url:"npr.org",name:"NPR"},{url:"cbsnews.com",name:"CBS News"},{url:"nbcnews.com",name:"NBC News"},{url:"abcnews.com",name:"ABC News",note:"карта новостей на 1000 адресов с заголовками"},{url:"independent.co.uk",name:"The Independent"},{url:"straitstimes.com",name:"The Straits Times"},{url:"time.com",name:"TIME"},{url:"usatoday.com",name:"USA Today"},{url:"newsweek.com",name:"Newsweek"},{url:"japantimes.co.jp",name:"The Japan Times",note:"из облака отдавал 403; RSS живой"},{url:"france24.com",name:"France 24",note:"из облака отдавал 403 — проверить прогоном"},{url:"apnews.com",name:"Associated Press",note:"из облака отдавал 403 — проверить прогоном"}],_l=[{url:"ria.ru",name:"РИА Новости",note:"поиск сайта работает"},{url:"lenta.ru",name:"Лента.ру",note:"поиск сайта работает (отдаёт JSON)"},{url:"rbc.ru",name:"РБК",note:"карта новостей на 429 адресов с заголовками"},{url:"kommersant.ru",name:"Коммерсантъ",note:"поиск сайта работает"},{url:"vedomosti.ru",name:"Ведомости",note:"карта новостей с заголовками"},{url:"interfax.ru",name:"Интерфакс"},{url:"iz.ru",name:"Известия",note:"главная отдаёт 403, а RSS и карты живые"},{url:"mk.ru",name:"Московский комсомолец",note:"поиск сайта работает; режет частоту"},{url:"aif.ru",name:"Аргументы и факты",note:"поиск сайта работает"},{url:"kp.ru",name:"Комсомольская правда"},{url:"news.ru",name:"NEWS.ru",note:"поиск запрещён robots сайта; ленты открыты"},{url:"life.ru",name:"Life"},{url:"vesti.ru",name:"Вести",note:"карта новостей на 919 свежих адресов"},{url:"1tv.ru",name:"Первый канал"},{url:"ntv.ru",name:"НТВ"},{url:"bfm.ru",name:"BFM.ru",note:"поиск сайта работает"},{url:"fontanka.ru",name:"Фонтанка"},{url:"business-gazeta.ru",name:"Бизнес Online"},{url:"svpressa.ru",name:"Свободная пресса"}],ed=[{url:"t.me/ktknews",name:"КТК",note:"вместо ktk.kz — сайт целиком за защитой"},{url:"t.me/kaztag_tg",name:"КазТАГ",note:"вместо kaztag.kz — статьи за Cloudflare"},{url:"t.me/dknews_kz",name:"ДК News",note:"вместо dknews.kz — поиск только через браузер"},{url:"t.me/tass_agency",name:"ТАСС"},{url:"t.me/negemedia",name:"negemedia"},{url:"t.me/syrymitkulov",name:"Сырым Иткулов"},{url:"t.me/qumash_kz",name:"qumash_kz"},{url:"t.me/myastanacity",name:"My Astana City"},{url:"t.me/azattyqasia",name:"Azattyq Asia"},{url:"t.me/azattyq_ruhy",name:"Azattyq Rýhy"},{url:"t.me/Zanamiviehali",name:"Zanamiviehali"},{url:"t.me/prokadrykz",name:"Про кадры KZ"},{url:"t.me/bessimptomno",name:"Бессимптомно"},{url:"t.me/ztb_qazaq",name:"ztb_qazaq"},{url:"t.me/ztb_qaz",name:"ztb_qaz"},{url:"t.me/egovpress",name:"eGov Press"},{url:"t.me/nehabar",name:"НеХабар"},{url:"t.me/kozachkow",name:"kozachkow"},{url:"t.me/gaziz1984",name:"gaziz1984"},{url:"t.me/adyrnaportal",name:"Adyrna"},{url:"t.me/yedilov_online",name:"Yedilov online"},{url:"t.me/basekz",name:"BASE KZ"},{url:"t.me/chinovnik_kz",name:"Чиновник KZ"},{url:"t.me/respublikaKZmediaNEWS",name:"Республика KZ"},{url:"t.me/dashimbayev",name:"dashimbayev"},{url:"t.me/KrivosheyevD",name:"Кривошеев"},{url:"t.me/nkorganbekova",name:"Н. Корганбекова"}];i(Ur,"normSource")});function Bt(e){if(!e)return"";let t=new Date(e);if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p");return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function uf(e){let t=new Date(e);return isNaN(t.getTime())?-1:t.getHours()}function pf(e){let t=new Date(e);return isNaN(t.getTime())?-1:(t.getDay()+6)%7}function hf(e){let t=String(e||""),n=t.match(/прогон занял\s+(\d+)\s+мин\s+(\d+)\s+с/),r=t.match(/прогон занял\s+(\d+)\s+с/),s=n?+n[1]*60+ +n[2]:r?+r[1]:null,o=t.match(/браузер[^:]*:\s+(\d+)\s+мин\s+(\d+)\s+с/),a=t.match(/браузер[^:]*:\s+(\d+)\s+с/),l=o?+o[1]*60+ +o[2]:a?+a[1]:null;return{total:s,browser:l}}function ff(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function Us(e,t=15){return[...e.entries()].map(([n,r])=>({key:n,count:r})).sort((n,r)=>r.count-n.count||n.key.localeCompare(r.key)).slice(0,t)}function sn(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function Ba(e,t={}){let n=je(e);if(!n)return[];let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Bt(new Date(Date.now()-(r-1)*864e5).toISOString()):null;return(n.items||[]).filter(o=>o&&o.title&&o.date&&(!s||Bt(o.date)>=s)).map(o=>({title:o.title,url:o.url,source:o.source,date:o.date,snippet:o.snippet||"",sent:o.sent||"",sentWhy:o.sentWhy||"",rel:o.rel||"",relWhy:o.relWhy||""}))}function Gs(e,t){let n=je(e);return n?/^\d{4}-\d{2}-\d{2}$/.test(String(t||""))?(n.items||[]).filter(r=>r&&r.date&&Bt(r.date)===t).sort((r,s)=>+new Date(s.date)-+new Date(r.date)).map(r=>({title:r.title||"",url:r.url||"",source:r.source||"",date:r.date,kind:sn(r.source),rel:r.rel||""})):[]:null}function on(e,t={}){let n=je(e);if(!n)return null;let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Bt(new Date(Date.now()-(r-1)*864e5).toISOString()):null,o=i(E=>!s||E&&E>=s,"inWindow"),a=(n.items||[]).filter(E=>E.date&&o(Bt(E.date))),l=new Map;for(let E of a){let be=Bt(E.date);be&&l.set(be,(l.get(be)||0)+1)}let d=[...l.keys()].sort(),c=s,h=d[d.length-1]||Bt(new Date().toISOString());c||(c=d[0]||h);let u=[];for(let E=+new Date(c+"T00:00:00");E<=+new Date(h+"T00:00:00");E+=864e5){let be=Bt(new Date(E).toISOString());u.push({day:be,count:l.get(be)||0})}let p=new Map,f=new Map,m={site:0,telegram:0,youtube:0,facebook:0},g=0,w=0,b=0,y=0,A=0,v=Array.from({length:7},()=>Array(24).fill(0));for(let E of a){p.set(E.source,(p.get(E.source)||0)+1);let be=String(E.channel||"неизв.").replace(/\*$/,"");f.set(be,(f.get(be)||0)+1),m[sn(E.source)]++,E.match==="title"?g++:E.match==="post"?b++:E.match==="body"?w++:E.match==="video"?y++:A++;let Le=uf(E.date),$e=pf(E.date);Le>=0&&$e>=0&&v[$e][Le]++}let T=i(E=>E.map(be=>({...be,kind:ff(be.key)})),"withKind"),k=T(Us(new Map([...p].filter(([E])=>sn(E)==="site")),10)),S=T(Us(new Map([...p].filter(([E])=>sn(E)!=="site")),10)),M=T(Us(p,20)),N=Us(f,12),V=a.slice(0,25).map(E=>({date:E.date,source:E.source,title:E.title,url:E.url,channel:E.channel,channels:E.channels,match:E.match,kind:sn(E.source)})),H=Cr(e),j=s?+new Date(s+"T00:00:00"):null,$=j?H.filter(E=>(E.at||0)>=j):H,Y=[],re=[],ke=[];for(let E of $.slice(0,50)){let Le=(($n(e,E.ts)||{}).log||[]).find(wr=>wr&&wr.site==="(время)"),{total:$e,browser:kt}=hf(Le?Le.note:"");$e!=null&&(re.push($e),kt!=null&&$e>0&&ke.push(kt/$e*100)),Y.push({ts:E.ts,at:E.at,found:E.found||0,added:E.added||0,sec:$e,browserSec:kt})}Y.reverse();let Se=p.size,Re=Bt(new Date(Date.now()-6*864e5).toISOString()),D=a.filter(E=>Bt(E.date)>=Re).length,F=i(E=>{if(!E.length)return null;let be=[...E].sort(($e,kt)=>$e-kt),Le=be.length>>1;return be.length%2?be[Le]:Math.round((be[Le-1]+be[Le])/2)},"median"),R=F(re),O=ke.length?Math.round(F(ke)):null,L=R?re.filter(E=>E>R*3&&E>R+60).length:0,ce=re.length?Math.max(...re):null,le=m.telegram+m.youtube+m.facebook,De=(n.config&&n.config.sites||[]).map(E=>String(E||"").trim()).filter(Boolean),Z=new Set([...p.keys()].map(Ur)),ge=De.filter(E=>!Z.has(Ur(E))),at={configured:De.length,active:De.length-ge.length,list:ge.slice(0,60).map(E=>Ur(E)),more:Math.max(0,ge.length-60)},nt=new Map,ye=0,de=0,Je=0;for(let E of a){if(!E.sent)continue;E.sent==="+"?ye++:E.sent==="0"?de++:E.sent==="-"&&Je++;let be=Ur(E.source||""),Le=nt.get(be)||{key:be,pos:0,neu:0,neg:0};E.sent==="+"?Le.pos++:E.sent==="0"?Le.neu++:E.sent==="-"&&Le.neg++,nt.set(be,Le)}let Gt=0,Mn=0,Rn=0;for(let E of a)E.rel&&(Gt++,E.rel==="-"?Mn++:E.rel==="0"&&Rn++);let gr={checked:Gt,off:Mn,dim:Rn},Ie={total:ye+de+Je,pos:ye,neu:de,neg:Je,bySource:[...nt.values()].sort((E,be)=>be.neg-E.neg||be.pos+be.neu+be.neg-(E.pos+E.neu+E.neg))};return{overview:{items:a.length,uniqueSources:Se,runs:$.length,itemsWeek:D,medRunSec:R,browserPct:O,slowRuns:L,maxRunSec:ce,matchTitle:g,matchBody:w,matchPost:b,matchVideo:y,matchOther:A,siteItems:m.site,telegramItems:m.telegram,youtubeItems:m.youtube,facebookItems:m.facebook,socialItems:le,keyword:n.config.keyword||"",from:n.config.from||null,to:n.config.to||null,windowDays:r,windowFrom:c,windowTo:h},byDay:u,bySource:M,bySite:k,bySocial:S,byChannel:N,byHour:v,runs:Y,feed:V,silent:at,tone:Ie,relevance:gr}}var Gr=ee(()=>{Lt();qa();i(Bt,"localDay");i(uf,"localHour");i(pf,"localDow");i(hf,"parseTime");i(ff,"kindOf");i(Us,"top");i(sn,"platformOf");i(Ba,"windowItems");i(Gs,"dayItems");i(on,"buildAnalytics")});function gf(e){let t=String(e||"");return/high demand|overload|UNAVAILABLE|RESOURCE_EXHAUSTED|NOT_FOUND|not found|is not supported|HTTP 503|HTTP 429|\b503\b|\b429\b|\b404\b/i.test(t)}function Fa(e){let t=String(e||"").trim(),n=[];for(let r of[t||$s,...mf]){let s=String(r||"").trim();s&&!n.includes(s)&&n.push(s)}return n}function Ha(e,t){let n=[];if(!e||!e.overview)return"Проект по мониторингу СМИ Казахстана.";let r=e.overview;n.push("Мониторинг СМИ Казахстана. Объект наблюдения: «"+(r.keyword||"—")+"».");let s=r.windowFrom&&r.windowTo?r.windowFrom+"…"+r.windowTo:"вся история";if(n.push("Период: "+s+". Публикаций: "+r.items+", источников с материалом: "+r.uniqueSources+"."),(r.matchTitle||r.matchBody)&&n.push("Из них с объектом В ЗАГОЛОВКЕ: "+r.matchTitle+"; только В ТЕКСТЕ: "+r.matchBody+" (второе — упоминание вскользь, первое — материал про него)."),r.siteItems!=null){let o=[];r.siteItems&&o.push("сайты СМИ "+r.siteItems),r.telegramItems&&o.push("телеграм "+r.telegramItems),r.youtubeItems&&o.push("YouTube "+r.youtubeItems),r.facebookItems&&o.push("Фейсбук "+r.facebookItems),o.length>1&&n.push("Площадки: "+o.join(", ")+".")}return n.push(""),n.push("Кто пишет (публикаций за период):"),e.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+" — "+o.count)),e.silent&&e.silent.list&&e.silent.list.length&&(n.push(""),n.push("Молчали за период ("+e.silent.list.length+" из "+e.silent.configured+" отслеживаемых): "+e.silent.list.slice(0,15).join(", ")+(e.silent.more?" и ещё "+e.silent.more:"")+".")),n.push(""),n.push("Публикации по дням:"),e.byDay.slice(-21).forEach(o=>n.push("  "+o.day+" — "+o.count)),e.tone&&e.tone.total&&(n.push(""),n.push("Тональность (уже оценена ранее, всего размечено "+e.tone.total+"): выигрышных "+e.tone.pos+", нейтральных "+e.tone.neu+", невыгодных "+e.tone.neg+"."),e.tone.bySource&&e.tone.bySource.length&&(n.push("По источникам (источник: выигрышно/нейтрально/невыгодно):"),e.tone.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+": "+o.pos+"/"+o.neu+"/"+o.neg)))),t&&t.length&&(n.push(""),n.push("Заголовки материалов:"),t.slice(0,60).forEach(o=>n.push("  • "+o))),n.join(`
`)}function rd(e){let t=String(e||""),n=t.search(/РАЗМЕТКА\s*:?/i),r=n>=0?t.slice(n):t,s={};for(let o of r.matchAll(/(?:^|\n)[ \t]*(\d{1,4})[ \t]*[:.\-–][ \t]*([+\-0])[ \t]*(?:[:;–—-][ \t]*([^\n]*))?(?=\n|$)/g)){let a=String(o[3]||"").trim();for(let l=0;l<4;l++){let d=a;if(a=a.replace(/^[«"'(\s]+/,"").replace(/[»"')\s]+$/,"").replace(/[.;,]+$/,"").trim(),a===d)break}a=a.slice(0,90),s[+o[1]]={mark:o[2],why:a}}return Object.keys(s).length?s:null}function sd(e){let t=String(e||""),n=t.search(/\n\s*РАЗМЕТКА\s*:?/i);return(n>=0?t.slice(0,n):t).trim()}async function bf({apiKey:e,model:t,text:n,maxOut:r,timeoutMs:s=6e4,temp:o=.2}){let a=String(t||$s).trim(),l=i(u=>({contents:[{role:"user",parts:[{text:n}]}],generationConfig:{temperature:o,maxOutputTokens:r,...u?{thinkingConfig:{thinkingBudget:0}}:{}}}),"mkBody"),d=new AbortController,c=setTimeout(()=>d.abort(),s),h=i(async u=>{let p=await fetch(wf(a)+"?key="+encodeURIComponent(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l(u)),signal:d.signal}),f=await p.text(),m=null;try{m=JSON.parse(f)}catch{}return{httpOk:p.ok,status:p.status,raw:f,data:m}},"call");try{let u=await h(!0);if(!u.httpOk&&/thinking/i.test(u.raw||"")&&(u=await h(!1)),!u.httpOk)return{ok:!1,err:"Google API: "+(u.data&&u.data.error&&u.data.error.message?u.data.error.message:(u.raw||"HTTP "+u.status).slice(0,400))};let p=u.data&&u.data.candidates&&u.data.candidates[0],f=p&&p.content&&p.content.parts,m=Array.isArray(f)?f.map(w=>w.text||"").join("").trim():"",g=p&&p.finishReason;if(g==="MAX_TOKENS")return m?{ok:!0,text:m,truncated:!0}:{ok:!1,err:"модель израсходовала лимит на размышление и не успела ответить — попробуйте ещё раз или смените модель"};if(!m){let w=g?" (причина: "+g+")":"",b=u.data&&u.data.promptFeedback&&u.data.promptFeedback.blockReason;return{ok:!1,err:"модель ничего не ответила"+(b?" — запрос отклонён: "+b:w)}}return{ok:!0,text:m}}catch(u){return{ok:!1,err:u&&u.name==="AbortError"?"ответ не пришёл за "+Math.round(s/1e3)+" с":String(u&&u.message||u)}}finally{clearTimeout(c)}}async function Ua(e){let t=Fa(e.model),n=null,r=[];for(let o of t){let a=await bf({...e,model:o});if(a.ok)return{...a,model:o,...r.length?{fellBack:{from:t[0],to:o,tried:r.slice()}}:{}};if(n=a,r.push({model:o,err:a.err}),!gf(a.err))break}return{ok:!1,err:r.length>1?"перебрали модели ("+r.map(o=>o.model).join(", ")+"), последняя ошибка — "+(n&&n.err):n&&n.err,model:t[0],tried:r}}async function od({apiKey:e,timeoutMs:t=15e3}={}){if(!e)return{ok:!1,err:"не задан ключ Google"};let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(nd.replace(/\/$/,"")+"?key="+encodeURIComponent(e)+"&pageSize=200",{signal:n.signal}),o=await s.text(),a=null;try{a=JSON.parse(o)}catch{}return s.ok?{ok:!0,models:(Array.isArray(a&&a.models)?a.models:[]).filter(c=>Array.isArray(c.supportedGenerationMethods)?c.supportedGenerationMethods.includes("generateContent"):!0).map(c=>String(c.name||"").replace(/^models\//,"")).filter(Boolean).filter(c=>!/embedding|aqa|image|imagen|veo|tts/i.test(c))}:{ok:!1,err:"Google API: "+(a&&a.error&&a.error.message||o.slice(0,300))}}catch(s){return{ok:!1,err:s&&s.name==="AbortError"?"Google не ответил вовремя":String(s&&s.message||s)}}finally{clearTimeout(r)}}async function Ws({apiKey:e,model:t,analytics:n,sampleTitles:r,kind:s="summary"}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};if(s==="verify")return{ok:!1,err:"проверка релевантности идёт другим путём (askVerifyAll)"};let o=String(t||$s).trim(),a=Ks[s]||Ks.summary,l=r||[],d=s==="sentiment"?Ha(n,null)+`

Заголовки для оценки (`+l.length+` шт.):
`+l.map((u,p)=>p+1+". "+u).join(`
`):Ha(n,l),c=s==="sentiment"?ad(l.length):2e3,h=await Ua({apiKey:e,model:o,text:a+d,maxOut:c,temp:s==="sentiment"?0:.2});return h.ok?{ok:!0,text:sd(h.text),model:h.model||o,marks:rd(h.text),...h.truncated?{truncated:!0}:{},...h.fellBack?{fellBack:h.fellBack}:{}}:h}function ad(e){return Math.max(2e3,Math.min(8e3,700+e*30))}function kf(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","Знак ставится ПО ОТНОШЕНИЮ К НЕМУ, а не «хорошая или плохая новость вообще»:","  +  объект показан в выигрышном свете: достижение, награда, поддержка, похвала в его адрес;","  -  объект показан невыгодно: критика, обвинение, провал, скандал, недовольство им;","  0  протокольное сообщение, факт, объявление — без оценки объекта.","Беда, катастрофа, конфликт САМИ ПО СЕБЕ негативом не считаются: если объект помогает","пострадавшим, решает проблему или просто упомянут рядом — для него это 0 или +.","Если по показанному тексту тон не виден — ставь 0 и пиши причину «тон по фрагменту не виден».","Это лучше, чем угадать: угаданный знак от настоящего не отличить.",""].join(`
`)}function Tf(e){return!e||typeof e!="object"?"":String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,Sf)}function Af(e){let t=e&&typeof e=="object"?e.title:e;return String(t??"").replace(/\s+/g," ").trim()}function Lf(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","  +  материал действительно ПРО ЭТОТ объект: он действующее лицо, о нём говорят,","     его решение, его ведомство, его слова — даже если упомянут вскользь;","  -  слово совпало СЛУЧАЙНО: однофамилец или тёзка, другой человек с той же фамилией,","     улица/район/школа, названные этим именем, другая организация с похожим названием,","     другое значение слова;","  0  по показанному тексту понять нельзя.","Упоминание вскользь — это всё равно «+»: наша задача отсеять ЧУЖОЕ, а не короткое.","Если сомневаешься между «-» и «0» — ставь 0. Выброшенный по ошибке материал","дороже лишнего: пропускать важное нельзя.",""].join(`
`)}async function id(e){return ld({...e,task:"sentiment"})}async function cd(e){return ld({...e,task:"verify"})}async function ld({apiKey:e,model:t,analytics:n,titles:r,batch:s=yf,maxCalls:o=vf,task:a="sentiment"}){let l=td[a]||td.sentiment;if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let d=String(t||$s).trim(),c=(r||[]).map(M=>({title:Af(M),snip:Tf(M)}));if(!c.length)return{ok:!1,err:"нечего оценивать: в окне нет материалов"};let h=c.some(M=>M.snip),u={},p=0,f="",m="",g=d,w=null,b=i(async(M,N,V)=>{if(M>=N||p>=o)return;let H=c.slice(M,N),j=H.map((D,F)=>M+F+1+". "+D.title+(D.snip?`
   из текста: `+D.snip:"")).join(`
`),$=Ks[V?l.first:l.more]+l.subject(n)+(h?Ks.withSnippets:""),Y=V?$+Ha(n,null)+`

Заголовки для оценки (`+H.length+` шт.):
`:$+"Заголовки ("+H.length+` шт.):
`;p++;let re=await Ua({apiKey:e,model:d,text:Y+j,maxOut:ad(H.length),temp:0});if(!re.ok){m||(m=re.err);return}g=re.model||g,re.fellBack&&!w&&(w=re.fellBack);let ke=rd(re.text)||{},Se=Object.keys(ke).filter(D=>+D>M&&+D<=N);for(let D of Se)u[D]=ke[D];if(V&&!f&&(f=sd(re.text)),H.length-Se.length>Math.max(1,Math.floor(H.length*.1))&&H.length>xf&&p<o){let D=M+Math.floor(H.length/2);await b(M,D,!1),await b(D,N,!1)}},"askChunk");await b(0,Math.min(s,c.length),!0);for(let M=s;M<c.length&&p<o;M+=s)await b(M,Math.min(M+s,c.length),!1);let y=Object.keys(u);if(!y.length)return{ok:!1,err:m||"модель не вернула разметку"};let A=0,v=0,T=0;for(let M of y){let N=u[M]&&u[M].mark;N==="+"?A++:N==="0"?v++:N==="-"&&T++}let k=A+v+T,S=l.counts(A,v,T);return f&&S.push(f),{ok:!0,model:g,marks:u,text:S.join(`
`).trim(),calls:p,covered:k,asked:c.length,...w?{fellBack:w}:{},...m&&k<c.length?{partialErr:m}:{}}}function Mf(e,t,n=new Date){let r=i(d=>{let c=new Date(d);return isNaN(c)?"":c.getFullYear()+"-"+String(c.getMonth()+1).padStart(2,"0")+"-"+String(c.getDate()).padStart(2,"0")},"ymdL"),s=(t||[]).filter(d=>d&&d.text).sort((d,c)=>String(c.created||"").localeCompare(String(d.created||""))),o=[],a=0;for(let d of s){let c="["+r(d.created)+" ★"+(d.rating||"?")+(d.rated===!1?" не учтён":"")+"] "+String(d.text).replace(/\s+/g," ").slice(0,700);if(a+c.length>Cf)break;o.push(c),a+=c.length+1}return{text:["Ты аналитик репутации бизнеса. Ниже отзывы о фирме из 2ГИС: «"+(e.name||"")+"»"+(e.address?", "+e.address:"")+(e.category?" ("+e.category+")":"")+".",e.card?"Сейчас на карточке: рейтинг "+e.card.rating+", отзывов "+e.card.reviewsCount+", оценок "+e.card.ratingsCount+".":"","Отзывов в разборе: "+o.length+(o.length<s.length?" самых свежих из "+s.length+" (остальные не влезли)":"")+". Сегодня "+r(n)+".","Ответь по-русски, коротко и по делу, маркированными списками, разделами:","1) Общая картина: тон и что изменилось за последние 30 дней по сравнению с более ранними.","2) За что хвалят чаще всего (до 5 пунктов, примерная доля отзывов).","3) На что жалуются чаще всего (до 5 пунктов, примерная доля, короткая цитата-пример в кавычках).","4) Повторяющиеся конкретные проблемы: люди, смены, услуги, время суток — если видно.","5) Что сделать в первую очередь (3 пункта).","Опирайся ТОЛЬКО на эти отзывы, ничего не выдумывай. Имена сотрудников упоминай, только если их называют сами отзывы. Отзывы на казахском учитывай наравне с русскими.","","Отзывы (новые сверху):"].filter(d=>d!=="").join(`
`)+`
`+o.join(`
`),used:o.length,total:s.length}}async function dd({apiKey:e,model:t,firm:n,reviews:r}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в «Аналитике» любого проекта)"};let s=Mf(n||{},r||[]);return s.used?{...await Ua({apiKey:e,model:t,text:s.text,maxOut:4e3,timeoutMs:18e4,temp:.2}),used:s.used,total:s.total}:{ok:!1,err:"отзывов с текстом пока нет — разбирать нечего"}}var $s,mf,nd,wf,Ks,yf,xf,vf,Sf,td,Cf,Vs=ee(()=>{$s="gemini-3.5-flash",mf=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.5-flash"];i(gf,"worthNextModel");i(Fa,"modelChain");nd=typeof process<"u"&&process.env&&process.env.MC_GEMINI_BASE||"https://generativelanguage.googleapis.com/v1beta/models/",wf=i(e=>`${nd}${encodeURIComponent(e)}:generateContent`,"ENDPOINT");i(Ha,"brief");Ks={summary:["Ты — редактор-аналитик службы медиамониторинга. Ниже — данные по теме за период.","Дай РОВНО 5 наблюдений на русском языке. Каждое — одна строка, начинается с «— »,","одно-два предложения, и каждое опирается на показанные данные.","","Смотри СОДЕРЖАТЕЛЬНО:","  • какие сюжеты идут по теме, что повторяется у разных изданий, а что прозвучало один раз;","  • кто рядом с объектом — люди, ведомства, компании, регионы — и в какой связи;","  • как подают тему РАЗНЫЕ источники: где совпадают, где расходятся, кто ведёт, а кто молчит;","  • если дана тональность — сопоставь её с источниками: у кого перекос и в чём он состоит;","  • как меняется картина по дням: всплеск, затухание, разовый повод или длящийся сюжет;","  • упоминания вскользь (объект только в тексте) против материалов ПРО него.","","ЗАПРЕЩЕНО: писать про саму программу и про то, как собраны данные;","пересказывать и перечислять заголовки, цитировать их, выводить списки материалов;","писать JSON, markdown-таблицы, заголовки разделов; давать советы («важно следить», «рекомендуется»).","Заголовки даны как материал для выводов — в ответе их быть не должно.","Числа бери из данных. Не выдумывай ни источников, ни событий, которых в них нет.","","Ответ — только пять строк, начинающихся с «— ». Ничего до и после.",""].join(`
`),sentiment:["Ты — редактор-аналитик службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Оцени тональность каждого материала по отношению к ОБЪЕКТУ МОНИТОРИНГА (см. ниже).","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: чем окрашена тема, есть ли перекос по конкретным СМИ>","","РАЗМЕТКА:","1:+:награда врачам, тон одобрительный","2:0:протокольное сообщение без оценки","3:-:критика в адрес ведомства","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ позитив, 0 нейтрально, - негатив), двоеточие и КОРОТКАЯ причина —","от двух до шести слов по-русски, строчными, без точки в конце. Причина объясняет","ИМЕННО ЭТОТ заголовок: что в нём делает его позитивным, нейтральным или негативным.","Не пересказывай заголовок и не повторяй слово «позитив»/«негатив» — это уже есть в знаке.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем оценку с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),withSnippets:["Под частью заголовков строкой «из текста:» дан фрагмент статьи вокруг ключевого слова.","Опирайся В ПЕРВУЮ ОЧЕРЕДЬ на него: заголовок часто протокольный («провёл совещание»),","а настоящий тон виден в тексте. Фрагмент — это НЕ отдельный материал и своего номера","не имеет: он относится к заголовку над собой.",""].join(`
`),sentimentMore:["Ты — редактор-аналитик службы медиамониторинга. Продолжаем оценку тональности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + позитив, 0 нейтрально, - негатив. Причина — от двух до шести слов","по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`),verify:["Ты — редактор службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Задача ровно одна: сказать, относится ли каждый материал К ОБЪЕКТУ МОНИТОРИНГА —","или слово совпало случайно (однофамилец, тёзка, другое значение слова, чужая организация).","Тональность, важность и качество материала тебя здесь НЕ интересуют.","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: много ли постороннего попало в выдачу и какого рода>","","РАЗМЕТКА:","1:+:премьер-министр, тот самый","2:-:однофамилец, сотрудник КНБ","3:0:по фрагменту не понять, кто это","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ это про объект, - это НЕ про объект, 0 по показанному не понять), двоеточие","и КОРОТКАЯ причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем вердикт с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),verifyMore:["Ты — редактор службы медиамониторинга. Продолжаем проверку релевантности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + это про объект, - это НЕ про объект (совпало слово), 0 по показанному не понять.","Причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`)};i(rd,"parseMarks");i(sd,"stripMarks");i(bf,"callOne");i(Ua,"callModel");i(od,"listModels");i(Ws,"askGemini");i(ad,"outCapFor");yf=120,xf=15,vf=12;i(kf,"subjectBlock");Sf=200;i(Tf,"snipOf");i(Af,"titleOf");i(Lf,"subjectBlockVerify");td={sentiment:{first:"sentiment",more:"sentimentMore",subject:kf,counts:i((e,t,n)=>["ПОЗИТИВНЫХ: "+e,"НЕЙТРАЛЬНЫХ: "+t,"НЕГАТИВНЫХ: "+n,""],"counts")},verify:{first:"verify",more:"verifyMore",subject:Lf,counts:i((e,t,n)=>["ПРО ОБЪЕКТ: "+e,"НЕ ПОНЯТЬ: "+t,"НЕ ПРО ОБЪЕКТ: "+n,""],"counts")}};i(id,"askSentimentAll");i(cd,"askVerifyAll");i(ld,"askMarksAll");Cf=4e5;i(Mf,"reviewsPrompt");i(dd,"askReviews")});function ud(e){let t=e||{},n=String(t.mode||"off");return n==="daily"?1:n==="hours"?Math.max(1,Math.ceil(24/Math.max(1,+t.everyHours||6))):n==="minutes"?Math.max(1,Math.ceil(1440/Math.max(10,+t.everyMinutes||20))):0}function Ys(e){return ud(e)<=1}function Js(e){return"прогоны идут чаще раза в сутки ("+ud(e)+" в сутки) — проверка релевантности смотрит каждый материал окна и на таком шаге сожгла бы квоту Google. Поставьте расписание «каждый день» или реже — или запускайте проверку вручную."}var Ga=ee(()=>{i(ud,"runsPerDay");i(Ys,"verifyAllowed");i(Js,"verifyWhyNot")});function Rf(e,t=60){return(e.items||[]).filter(n=>n&&n.title&&n.rel!=="-").slice(0,t).map(n=>({title:n.title,url:n.url,source:n.source,date:n.date,sent:n.sent||""}))}function $a(e){return(e||[]).map(t=>{let n=typeof t=="string"?t:t.title||"",r=t&&t.source?" — "+t.source:"",s=t&&t.sent&&pd[t.sent]?" ["+pd[t.sent]+"]":"";return n+r+s})}function Wa(e){return(e||{}).geminiSnippets!==!1}function Ef(e,t){return Wa(t)?e.map(n=>({title:n.title,snippet:n.snippet||""})):e.map(n=>n.title)}function Qs(e,t){if(!t)return null;let n=[];return e.forEach((r,s)=>{let o=t[s+1];if(!o)return;let a=typeof o=="string"?o:o.mark,l=typeof o=="string"?"":o.why||"";(a==="+"||a==="0"||a==="-")&&n.push({...r,mark:a,why:l})}),n.length?n:null}async function Va(e,{kind:t="sentiment",days:n=null,analytics:r,settings:s,rescore:o=!1}={}){let a=hd[t]||hd.sentiment,l=s||et();if(!l.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};o&&a.clear(e);let d=Ba(e,{days:n});if(!d.length)return{ok:!1,err:a.empty};let c=d.filter(y=>!y[a.field]).slice(0,Df),h=d.filter(y=>y[a.field]).length,u=0,p=0,f="",m=l.geminiModel||"",w=((sl(e)||{})[t]||{}).text||"";if(c.length){let y=await a.ask({apiKey:l.geminiKey,model:l.geminiModel,analytics:r,titles:Ef(c,l)});if(u=y.calls||0,!y.ok)return{ok:!1,err:y.err||"не получилось",calls:u,model:y.model||m};m=y.model||m,y.text&&(w=y.text);let A=(Qs(c,y.marks)||[]).map(v=>({...v,model:m}));p=a.set(e,A),f=""}let b=Ba(e,{days:n}).filter(y=>y[a.field]).map(y=>({title:y.title,url:y.url,source:y.source,date:y.date,mark:y[a.field],why:y[a.why]||""}));return{ok:!0,text:w,model:m,err:f,calls:u,fresh:p,stored:h,asked:c.length,covered:b.length,total:d.length,items:b.length?b:null}}function Ya(e){return!e||!e.ok?e&&e.err||"не получилось":e.asked?`оценено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее оценено ${e.stored} — не переспрашивали`:"")+`; всего в окне размечено ${e.covered} из ${e.total}`:`все ${e.covered} материалов окна уже оценены — к Google не ходили`}function Ja(e){if(!e||!e.ok)return e&&e.err||"не получилось";let t=(e.items||[]).filter(s=>s.mark==="-").length,n=(e.items||[]).filter(s=>s.mark==="0").length,r=`; похоже, не про объект — ${t}`+(n?`, по фрагменту не понять — ${n}`:"")+"; ничего не удалено, решает человек";return e.asked?`проверено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее проверено ${e.stored} — не переспрашивали`:"")+`; всего в окне проверено ${e.covered} из ${e.total}`+r:`все ${e.covered} материалов окна уже проверены — к Google не ходили`+r}async function Zs(e,{foundNow:t=null,runTs:n=null}={}){let r=[],s=je(e);if(!s)return r;let o=s.config||{};if(!o.aiAuto)return r;if(!Dt(o).ai)return r.push("ИИ-разбор пропущен: "+Yn),r;let a=et();if(!a.geminiKey)return r.push("ИИ-разбор включён, но ключ Gemini не задан — пропускаю (задайте во вкладке «Аналитика»)"),r;if(t===0)return r.push("ИИ-разбор пропущен: в этом прогоне ноль материалов — квоту не тратим"),r;let l=Array.isArray(o.aiKinds)&&o.aiKinds.length?o.aiKinds.filter(h=>Ka.includes(h)):["summary"],d=o.periodMode==="rolling"?Math.max(2,+o.periodDays||2):null,c=on(e,{days:d});if(!c)return r;for(let h of l)try{if(h==="verify"&&!Ys(s.schedule)){r.push(`ИИ-${Xs[h]} пропущена: `+Js(s.schedule));continue}let u=h==="sentiment"||h==="verify",p=u?null:Rf(s),f=u?await Va(e,{kind:h,days:d,analytics:c,settings:a}):await Ws({apiKey:a.geminiKey,model:a.geminiModel,analytics:c,sampleTitles:$a(p),kind:h});Ls(e,h,{at:Date.now(),runTs:n,window:c.overview.windowFrom+" … "+c.overview.windowTo,text:f.ok?f.text:"",model:f.model||a.geminiModel||"",err:f.ok?"":f.err||"не получилось",auto:!0,items:f.ok?u?f.items:Qs(p,f.marks):null});let m=h==="sentiment"?Ya(f):h==="verify"?Ja(f):"готово";r.push(f.ok?`ИИ-${Xs[h]}: ${m}`:`ИИ-${Xs[h]}: ${f.err||"не получилось"}`)}catch(u){r.push(`ИИ-${Xs[h]}: сбой — ${String(u&&u.message||u)}`)}return r}var Ka,Xs,pd,Df,hd,_s=ee(()=>{Lt();Gr();Vs();Jn();Ga();Ka=["summary","sentiment","verify"],Xs={summary:"разбор",sentiment:"тональность",verify:"проверка релевантности"};i(Rf,"sampleItems");pd={"+":"выигрышно",0:"нейтрально","-":"невыгодно"};i($a,"summaryTitles");Df=600;i(Wa,"sendSnippets");i(Ef,"sentimentTitles");i(Qs,"applyMarks");hd={sentiment:{field:"sent",why:"sentWhy",ask:id,set:dl,clear:hl,empty:"нечего оценивать: в окне нет материалов"},verify:{field:"rel",why:"relWhy",ask:cd,set:ul,clear:pl,empty:"нечего проверять: в окне нет материалов"}};i(Va,"markRun");i(Ya,"sentimentNote");i(Ja,"verifyNote");i(Zs,"runAiAfterRun")});async function bt(e,t,n={},r=Nf){if(!e)return{ok:!1,err:"не задан токен бота"};let s=new AbortController,o=setTimeout(()=>s.abort(),r);try{let a=await fetch(`${gd}/bot${e}/${t}`,{method:"POST",signal:s.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),l=await a.text(),d=null;try{d=JSON.parse(l)}catch{}return d?d.ok?{ok:!0,result:d.result}:{ok:!1,err:d.description||"телеграм отказал (HTTP "+a.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+a.status+")"}}catch(a){let l=String(a&&a.message||a);return{ok:!1,err:/abort/i.test(l)?"телеграм не ответил за "+Math.round(r/1e3)+" с":l}}finally{clearTimeout(o)}}async function nr(e){let t=await bt(e,"getMe");if(!t.ok)return{ok:!1,err:t.err};let n=t.result&&t.result.username||"";return{ok:!0,bot:n?"@"+n:t.result&&t.result.first_name||"бот"}}async function to(e,t={}){let n=(t.chats||[]).slice(),r=new Map(n.map(c=>[String(c.id),c])),s=await bt(e,"getUpdates",{offset:t.offset||0,timeout:0,limit:100});if(!s.ok)return{chats:n,offset:t.offset||0,err:s.err,added:0,events:[]};let o=t.offset||0,a=0,l=0,d=[];for(let c of s.result||[]){if(c.update_id!=null&&(o=Math.max(o,c.update_id+1)),c.callback_query){let m=c.callback_query,g=m.message||{};g.chat&&g.chat.id!=null&&d.push({kind:"cb",id:m.id,chat:g.chat,from:m.from||{},data:String(m.data||""),messageId:g.message_id,date:g.date||0});continue}let h=c.message||c.channel_post||c.my_chat_member,u=h&&h.chat;if(!u||u.id==null)continue;if(c.message&&typeof c.message.text=="string"){let m=c.message;d.push({kind:"msg",chat:u,from:m.from||{},text:m.text,date:m.date||0,messageId:m.message_id,replyTo:m.reply_to_message?m.reply_to_message.message_id:null})}let p=String(h.text||"").trim().toLowerCase(),f=[u.title,u.first_name,u.username&&"@"+u.username].filter(Boolean)[0]||String(u.id);if(/^\/stop\b/.test(p)||c.my_chat_member&&/kicked|left/.test(String(c.my_chat_member.new_chat_member&&c.my_chat_member.new_chat_member.status))){r.delete(String(u.id))&&l++;continue}if(!r.has(String(u.id)))r.set(String(u.id),{id:u.id,name:f,type:u.type||""}),a++;else{let m=r.get(String(u.id));m.name=f,u.type&&(m.type=u.type)}}return{chats:[...r.values()],offset:o,added:a,removed:l,err:"",events:d}}function wd(e){Qa=typeof e=="function"?e:null}function vn(e){if(eo.has(e))return eo.get(e);let t=(async()=>{let n=Ke(e),r=await to(n.token,n);if(lt(e,{chats:r.chats,offset:r.offset,err:r.err||""}),Qa&&r.events&&r.events.length){let o=(fd.get(e)||Promise.resolve()).then(()=>Qa(e,r.events)).catch(()=>{});fd.set(e,o)}return r})().finally(()=>eo.delete(e));return eo.set(e,t),t}async function Za(e,t,n,r=Date.now()){let s=e+"|"+t+"|"+n,o=md.get(s);if(o&&r-o.at<Of)return o.status;let a=await bt(e,"getChatMember",{chat_id:t,user_id:n}),l=a.ok&&a.result?String(a.result.status||""):"";return a.ok&&md.set(s,{status:l,at:r}),l}async function rr(e,t,n=Date.now()){let r=e&&e.owners||[];if(!t||t.id==null)return{ok:!1,why:"no-chat"};if(!r.length)return{ok:!1,why:"no-owner"};if(t.type==="private"||!t.type&&Number(t.id)>0)return r.some(s=>String(s.id)===String(t.id))?{ok:!0}:{ok:!1,why:"stranger"};for(let s of r)if(zf.includes(await Za(e.token,t.id,s.id,n)))return{ok:!0};return{ok:!1,why:"no-owner-here"}}async function _a(e,t,n,r,s="",o=3e4){if(!e)return{ok:!1,err:"не задан токен бота"};let a=new AbortController,l=setTimeout(()=>a.abort(),o);try{let d=new FormData;d.append("chat_id",String(t)),s&&d.append("caption",s),d.append("document",new Blob([r],{type:"text/csv"}),n);let c=await fetch(`${gd}/bot${e}/sendDocument`,{method:"POST",body:d,signal:a.signal}),h=await c.text(),u=null;try{u=JSON.parse(h)}catch{}return u?u.ok?{ok:!0,result:u.result}:{ok:!1,err:u.description||"телеграм отказал (HTTP "+c.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+c.status+")"}}catch(d){let c=String(d&&d.message||d);return{ok:!1,err:/abort/i.test(c)?"телеграм не принял файл за "+Math.round(o/1e3)+" с":c}}finally{clearTimeout(l)}}function If(e,t){let n=_t(e.date)||"",r=[e.source,n].filter(Boolean).map(K).join(" · "),s=String(e.title||e.url||""),o=i(l=>String(l||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),a=String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,300);return a&&(o(a)===o(s)||o(s).includes(o(a)))&&(a=""),[r?"📰 <b>"+r+"</b>":"📰",K(s),a?"<i>"+K(a)+"</i>":"",e.url||"",t?"<i>"+K(t)+"</i>":""].filter(Boolean).join(`
`)}async function an(e,t={}){if(Xa.has(e))return{sent:0,skipped:"уже идёт отправка"};let n=Ke(e);if(!n.enabled||!n.token)return{sent:0,skipped:"бот выключен"};let r=je(e);if(!r)return{sent:0,skipped:"проект не найден"};if(!Dt(r.config||{}).bot)return{sent:0,skipped:Yn};Xa.add(e);try{let s=await vn(e);if(!s.chats.length)return{sent:0,skipped:"никто не нажал Start"};let o=Ke(e),a=[];for(let m of s.chats)a.push({...m,access:(await rr(o,m)).ok?"ok":"no"});lt(e,{chats:a});let l=a.filter(m=>m.access==="ok");if(!l.length)return{sent:0,skipped:(o.owners||[]).length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let d=al(e);if(!d.length)return{sent:0,skipped:"нового нет"};let c=d.slice(0,Pf),h=d.length-c.length,u=0,p=[];for(let m of c){let g=If(m,t.withName===!1?"":r.name),w=!1;for(let b of l){let y=await bt(n.token,"sendMessage",{chat_id:b.id,text:g,parse_mode:"HTML",disable_web_page_preview:!0});y.ok?w=!0:lt(e,{err:y.err})}w&&(p.push(m.url),u++),Kr&&await jf(Kr)}if(p.length&&il(e,p),h>0)for(let m of l)await bt(n.token,"sendMessage",{chat_id:m.id,text:"… и ещё "+h+": пришлю следующей порцией. Всё сразу — в кабинете."});let f=Ke(e);return lt(e,{sentTotal:(f.sentTotal||0)+u,lastSentAt:Date.now(),err:u?"":f.err}),{sent:u,rest:h,chats:l.length}}catch(s){try{lt(e,{err:String(s&&s.message||s)})}catch{}return{sent:0,err:String(s&&s.message||s)}}finally{Xa.delete(e)}}var gd,Pf,Kr,Nf,jf,K,Qa,eo,fd,Of,md,zf,Xa,sr=ee(()=>{Lt();Ot();Jn();gd=typeof process<"u"&&process.env&&process.env.MC_TG_API_BASE||"https://api.telegram.org",Pf=30,Kr=typeof process<"u"&&process.env&&process.env.MC_TG_PAUSE_MS!=null?Math.max(0,+process.env.MC_TG_PAUSE_MS):1200,Nf=15e3,jf=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),K=i(e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"esc");i(bt,"tgApi");i(nr,"checkBot");i(to,"pullChats");Qa=null;i(wd,"setUpdateSink");eo=new Map,fd=new Map;i(vn,"pullFor");Of=600*1e3,md=new Map;i(Za,"memberStatus");zf=["creator","administrator","member","restricted"];i(rr,"chatAccess");i(_a,"sendDocument");i(If,"formatItem");Xa=new Set;i(an,"notifyNew")});function kd(){let e="";try{e=(0,ro.userInfo)().username||""}catch{}return(0,or.createHash)("sha256").update((0,ro.hostname)()+"|"+e).digest("hex").slice(0,16)}function ri(){try{return(0,Et.existsSync)(ti)?JSON.parse((0,Et.readFileSync)(ti,"utf8")):null}catch{return null}}function ni(e){try{(0,Et.mkdirSync)(me,{recursive:!0})}catch{}try{(0,Et.writeFileSync)(ti,JSON.stringify(e,null,2))}catch{}}function qf(){let e=ri();if(e&&e.installedAt)return e.installedAt>=no?e.installedAt:(ni({...e,installedAt:no}),no);let t=Date.now();try{(0,Et.existsSync)(me)&&(t=Math.min(t,(0,Et.statSync)(me).birthtimeMs||t))}catch{}return t=Math.max(t,no),ni({...e||{},installedAt:t}),t}function Sd(e){let t=ri()||{};return t.key=String(e||"").trim(),ni(t),so()}function Bf(e,t=Date.now()){let n=String(e||"").trim();if(!n)return{ok:!1,why:"ключ не введён"};if(!yd)return{ok:!1,why:"проверка ключей ещё не включена — программа работает в пробном режиме"};let r=n.split(".");if(r.length!==3||r[0]!=="MC1")return{ok:!1,why:"это не похоже на ключ mediachrome — скопируй строку целиком, она начинается с MC1."};let s;try{s=(0,or.createPublicKey)({key:Buffer.from(yd,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ — нужна переустановка"}}let o=!1;try{o=(0,or.verify)(null,Buffer.from(r[0]+"."+r[1],"utf8"),s,xd(r[2]))}catch{o=!1}if(!o)return{ok:!1,why:"подпись ключа не сошлась — ключ поддельный или повреждён при пересылке"};let a;try{a=JSON.parse(xd(r[1]).toString("utf8"))}catch{a=null}if(!a||typeof a!="object")return{ok:!1,why:"ключ подписан верно, но его содержимое не читается"};let l={to:String(a.to||""),until:a.until||null,id:String(a.id||""),hw:a.hw||null};if(l.hw&&l.hw!==kd())return{ok:!1,why:"ключ выдан для другого компьютера",info:l};if(l.until){let d=Date.parse(l.until+"T23:59:59");if(!Number.isFinite(d))return{ok:!1,why:"в ключе неразборчивая дата окончания",info:l};if(t>d)return{ok:!1,why:"срок лицензии истёк "+l.until,info:l,expired:!0}}return{ok:!0,why:"",info:l}}function so(e=Date.now()){let t=ri()||{},n=qf(),r=Math.floor((e-n)/864e5),s=Math.min(ei,Math.max(0,ei-r)),o=t.key?Bf(t.key,e):{ok:!1,why:""},a={installedAt:n,hasKey:!!t.key,machine:kd(),enforced:bd};if(o.ok)return{...a,ok:!0,mode:"licensed",daysLeft:null,why:"",to:o.info.to,until:o.info.until,keyId:o.info.id,locked:!!o.info.hw,keyWhy:""};let l=s<=0;return{...a,ok:!bd||!l,mode:l?"expired":"trial",daysLeft:s,why:l?"пробный период ("+ei+" дней) закончился — нужен лицензионный ключ":"",keyWhy:t.key?o.why:""}}function ar(e=Date.now()){let t=so(e);return t.ok?null:t.why}var vd,Et,or,ro,bd,ei,yd,ti,no,xd,$r=ee(()=>{vd=require("node:path"),Et=require("node:fs"),or=require("node:crypto"),ro=require("node:os");ht();bd=!0,ei=7,yd="MCowBQYDK2VwAyEA/0CvjwtjJF+3fBS+0ewj3O9wtXQBpDiheHRzJV/PXPw=",ti=(0,vd.join)(me,"license.json");i(kd,"machineId");i(ri,"readState");i(ni,"writeState");no=Date.parse("2026-09-22T00:00:00Z");i(qf,"installedAt");i(Sd,"setKey");xd=i(e=>Buffer.from(String(e).replace(/-/g,"+").replace(/_/g,"/"),"base64"),"b64urlToBuf");i(Bf,"verifyKey");i(so,"licenseState");i(ar,"blockedReason")});function Ad(){setInterval($f,60*1e3)}async function Hf(e,t=Ff){let n=[...new Set((e||[]).map(a=>String(a).trim()).filter(Boolean).map(a=>a.replace(/^https?:\/\//,"").replace(/\/.*$/,"")).filter(a=>a&&!a.startsWith("@")))],r=n.filter(a=>!/^t\.me$/i.test(a)),s=(r.length?r:n).slice(0,3);return s.length?(await Promise.all(s.map(a=>t(a)))).some(Boolean):!0}async function Ff(e){let t=new AbortController,n=setTimeout(()=>t.abort(),6e3);try{return await fetch("https://"+e+"/",{method:"HEAD",redirect:"follow",signal:t.signal}),!0}catch{return!1}finally{clearTimeout(n)}}function Kf(e,t){let n=e.schedule||{mode:"off"},r=e.lastRun||0,s=(t.getTime()-r)/6e4;if(n.mode==="minutes")return s>=Gf(n)-.5;if(n.mode==="hours")return s>=(n.everyHours||6)*60-.5;if(n.mode==="daily"){let o=n.hour!=null?n.hour:9,a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),o,0,0,0);return t.getTime()>=a.getTime()&&r<a.getTime()}return!1}async function $f(){if(ar()||tt.size)return;let e=new Date;for(let t of nn()){if(tt.has(t.id))continue;let n=je(t.id);if(!n)continue;let r=Math.max(n.lastRun||0,Td.get(n.id)||0);if(Kf({...n,lastRun:r},e)){if(!await Hf((n.config||{}).sites)){console.log(`[расписание] «${n.name}»: сети нет — откладываю (проверю через минуту)`);continue}tt.add(n.id),Qn(n.id,{name:n.name,by:"расписание"}),Td.set(n.id,Date.now());try{let s=null,o=i((h,u)=>{try{let p=Kn(n.id,h,u,s);s=p.ts,an(n.id,{ts:p.ts}).catch(()=>{})}catch{}},"onProgress"),{rows:a,log:l}=await Xn(n,o,{onStep:i(h=>Zn(n.id,h),"onStep"),stopping:i(()=>_n(n.id),"stopping")}),d=Kn(n.id,a,l,s);try{await an(n.id,{ts:d.ts})}catch{}let c=await Zs(n.id,{foundNow:a.length,runTs:d.ts});c.length&&(Cs(n.id,d.ts,c.map(h=>({site:"(ИИ)",channel:"gemini",found:0,note:h}))),c.forEach(h=>console.log(`[расписание] «${n.name}»: ${h}`))),console.log(`[расписание] «${n.name}»: +${d.added} новых (всего ${d.total})`)}catch(s){console.error("[расписание] ошибка:",s&&s.message||s)}finally{tt.delete(n.id),er(n.id)}}}}var Uf,Gf,Td,Ld=ee(()=>{Lt();Br();Hr();Fr();_s();sr();$r();i(Ad,"startScheduler");i(Hf,"netReady");i(Ff,"probeHost");Uf=10,Gf=i(e=>Math.max(Uf,Math.min(720,+(e&&e.everyMinutes)||20)),"everyMinutes");i(Kf,"isDue");Td=new Map;i($f,"tick")});function Nd(){return"0.5.8"}function jd(e,t){let n=String(e||"").split(/[.\-+]/),r=String(t||"").split(/[.\-+]/);for(let s=0;s<Math.max(n.length,r.length);s++){let o=parseInt(n[s],10),a=parseInt(r[s],10),l=Number.isFinite(o)?o:0,d=Number.isFinite(a)?a:0;if(l!==d)return l<d?-1:1}return 0}function ao(){try{return(0,Ne.existsSync)(si)?JSON.parse((0,Ne.readFileSync)(si,"utf8")):{}}catch{return{}}}function Cd(e){try{(0,Ne.mkdirSync)(me,{recursive:!0}),(0,Ne.writeFileSync)(si,JSON.stringify(e,null,2))}catch{}}async function Yf(e,t=15e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(e,{signal:n.signal,redirect:"follow",headers:{"Cache-Control":"no-cache"}});if(!s.ok)throw new Error("HTTP "+s.status);let o=await s.text();return JSON.parse(o)}finally{clearTimeout(r)}}async function oi(e={}){let t=ao(),n=Date.now(),r=Number.isFinite(e.every)?e.every:Vf;if(!e.force&&t.checkedAt&&n-t.checkedAt<r)return Wr();Ue={...Ue,phase:Ue.phase==="downloading"?"downloading":"checking",err:""};try{let s=await Yf(Wf),o=String(s.version||"").trim();if(!o)throw new Error("в файле версии нет номера");Cd({...t,checkedAt:n,err:"",latest:{version:o,notes:String(s.notes||""),url:String(s.setup||s.url||""),sha256:String(s.sha256||"").toLowerCase(),size:+s.size||0,at:String(s.at||"")}})}catch(s){Cd({...t,checkedAt:n,err:String(s&&s.message||s).slice(0,200)})}return Ue.phase==="checking"&&(Ue={...Ue,phase:"idle"}),Wr()}function ai(e){let t=(0,cn.join)(ir,"mediachrome-setup-"+e+".exe");try{return(0,Ne.existsSync)(t)&&(0,Ne.statSync)(t).size>0?t:""}catch{return""}}function Wr(){let e=ao(),t=Nd(),n=e.latest||null,r=!!(n&&n.version&&jd(t,n.version)<0);return{current:t,latest:n?n.version:"",newer:r,notes:n?n.notes:"",size:n?n.size:0,checkedAt:e.checkedAt||0,err:e.err||"",canInstall:process.platform==="win32"&&r&&!!(n&&n.url),ready:r?!!ai(n.version):!1,phase:Ue.phase,got:Ue.got,total:Ue.total,liveErr:Ue.err}}async function Od(){let t=ao().latest;if(!t||!t.url)return{ok:!1,err:"не знаю, что качать — сначала проверка"};if(jd(Nd(),t.version)>=0)return{ok:!1,err:"у вас и так последняя версия"};let n=ai(t.version);if(n)return{ok:!0,file:n,cached:!0};if(Ue.phase==="downloading")return{ok:!0,running:!0};Ue={phase:"downloading",got:0,total:t.size||0,err:""};let r=(0,cn.join)(ir,"mediachrome-setup-"+t.version+".part");try{(0,Ne.mkdirSync)(ir,{recursive:!0});for(let u of(0,Ne.readdirSync)(ir))if(!u.includes(t.version))try{(0,Ne.rmSync)((0,cn.join)(ir,u),{force:!0})}catch{}let s=new AbortController,o=await fetch(t.url,{signal:s.signal,redirect:"follow"});if(!o.ok)throw new Error("HTTP "+o.status);let a=+o.headers.get("content-length")||t.size||0;Ue={...Ue,total:a};let l=(0,Dd.createHash)("sha256"),d=new oo.Transform({transform(u,p,f){l.update(u),Ue={...Ue,got:Ue.got+u.length},f(null,u)}});await(0,Pd.pipeline)(oo.Readable.fromWeb(o.body),d,(0,Ne.createWriteStream)(r));let c=l.digest("hex");if(t.sha256&&c!==t.sha256){try{(0,Ne.rmSync)(r,{force:!0})}catch{}throw new Error("файл скачался испорченным (отпечаток не сошёлся) — попробуйте ещё раз")}let h=(0,cn.join)(ir,"mediachrome-setup-"+t.version+".exe");try{(0,Ne.rmSync)(h,{force:!0})}catch{}return(0,Ne.renameSync)(r,h),Ue={phase:"ready",got:Ue.got,total:a,err:""},{ok:!0,file:h}}catch(s){try{(0,Ne.rmSync)(r,{force:!0})}catch{}let o=String(s&&s.message||s).slice(0,200);return Ue={phase:"error",got:0,total:0,err:o},{ok:!1,err:o}}}function zd(e={}){if(e.busy)return{ok:!1,err:"сейчас идёт сбор — обновление подождёт до его конца"};let n=ao().latest,r=n&&ai(n.version);if(!r)return{ok:!1,err:"установщик ещё не скачан"};if(process.platform!=="win32")return{ok:!1,err:"установщик есть только для Windows"};try{(0,Ed.spawn)(r,["/SILENT","/NOCANCEL","/RESTARTAPPLICATIONS"],{detached:!0,stdio:"ignore"}).unref()}catch(s){return{ok:!1,err:String(s&&s.message||s).slice(0,200)}}return{ok:!0,version:n.version}}var cn,Ne,Md,Rd,Dd,Ed,oo,Pd,Wf,si,ir,Vf,Ue,Id=ee(()=>{cn=require("node:path"),Ne=require("node:fs"),Md=require("node:url"),Rd=require("node:path"),Dd=require("node:crypto"),Ed=require("node:child_process"),oo=require("node:stream"),Pd=require("node:stream/promises");ht();Wf=process.env.MC_UPDATE_URL||"https://raw.githubusercontent.com/Tim2190/mediachrome-dist/main/update.json",si=(0,cn.join)(me,"update-state.json"),ir=(0,cn.join)(me,"update"),Vf=24*3600*1e3;i(Nd,"currentVersion");i(jd,"cmpVer");i(ao,"readState");i(Cd,"writeState");Ue={phase:"idle",got:0,total:0,err:""};i(Yf,"getJson");i(oi,"checkUpdate");i(ai,"readyFile");i(Wr,"updateState");i(Od,"downloadUpdate");i(zd,"installUpdate")});function io(){return`<!doctype html>\r
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
  .pgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;align-items:stretch;}\r
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
  .repstar{letter-spacing:1px;} .repstar.pos{color:var(--ok);} .repstar.mid{color:var(--warn);} .repstar.neg{color:var(--neg);}\r
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
  .charts{display:grid;grid-template-columns:1fr 1fr;gap:14px;}\r
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
  .chart.wide{grid-column:1/-1;}\r
  /* Раскладка без дыр. Пустая ячейка в конце ряда — то, на что пожаловался\r
     пользователь. Карточки, которые могут занять две колонки, помечаются:\r
     .w2 — всегда (при двух и трёх колонках), .w2mid — только когда колонок\r
     ровно две, иначе при трёх она снова оставляла бы дыру. */\r
  @media(min-width:900px){ .chart.w2{grid-column:span 2;} }\r
  @media(min-width:900px) and (max-width:1499px){ .chart.w2mid{grid-column:span 2;} }\r
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
  @media (max-width:640px){ .gemini .krow{flex-direction:column;align-items:stretch;} .gemini .krow input,.gemini .krow button{width:100%;} }\r
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
  .gemini .out .sent .tail{white-space:pre-wrap;}\r
  .gemini .warn{color:var(--warn);font-size:11px;margin-top:8px;}\r
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
  <button class="iconbtn" id="hints" title="Подсказки под полями" aria-label="Подсказки">💡</button>\r
  <a class="iconbtn" id="help" href="#/help" title="Инструкция" aria-label="Инструкция">?</a>\r
  <!-- ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА. Рядом с темой и по тому же правилу: на кнопке\r
       написан язык, НА КОТОРЫЙ переключит нажатие. -->\r
  <button class="iconbtn lang" id="lang" title="Switch to English" aria-label="Язык / Language">EN</button>\r
  <button class="iconbtn" id="theme" title="Сменить тему" aria-label="Сменить тему"></button>\r
</header>\r
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
      <div class="hint" style="margin:4px 0 0">\${L('Вставьте ссылку на карточку фирмы в 2ГИС. Сперва программа соберёт все отзывы и оценки, потом по расписанию будет смотреть, что изменилось, и сразу присылать в телеграм.','Paste a link to a business card on 2GIS. The program first collects all reviews and scores, then checks for changes on schedule and sends them to Telegram.')}</div></div></div>\r
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
      <div class="pfoot"><span>\${o.err?('⚠️ '+esc(o.err)):harvesting?(L('собираю отзывы','collecting')+(h.total?(': '+fmtN(Math.min(h.offset||0,h.total))+' / '+fmtN(h.total)):'…')):(L('проверено','checked')+' '+esc(repWhen(o.lastOk)))}</span></div>\r
    </div>\`);\r
    c.onclick=()=>location.hash='/rep/'+o.id;\r
    grid.appendChild(c);\r
  }\r
  if(st.objects.length) app.appendChild(grid);\r
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
    <label class="check"><input id="repans" type="checkbox" \${st.notify&&st.notify.answers===false?'':'checked'}> \${L('присылать и ответы фирмы на отзывы','also send business replies to reviews')}</label>\r
  </div>\`);\r
  $('#repevery',sch).value = st.schedule && st.schedule.mode==='minutes' ? String(st.schedule.everyMinutes) : 'off';\r
  $('#repevery',sch).onchange = async e=>{ const v=e.target.value; await api('/places/schedule',{method:'POST',body:JSON.stringify(v==='off'?{mode:'off'}:{mode:'minutes',everyMinutes:+v})}); };\r
  $('#repans',sch).onchange = async e=>{ await api('/places/notify',{method:'POST',body:JSON.stringify({answers:e.target.checked})}); };\r
  $('#repcheck',sch).onclick = async ()=>{ await api('/places/check',{method:'POST'}); $('#repcheck',sch).textContent=L('Проверяю…','Checking…'); setTimeout(viewRep, 3000); };\r
  app.appendChild(sch);\r
\r
  // Бот\r
  const tg = st.tg || {};\r
  const okC = (tg.chats||[]).filter(c=>c.access==='ok'), noC = (tg.chats||[]).filter(c=>c.access==='no');\r
  const bot = el(\`<div class="card"><h3 style="margin:0 0 8px">\${L('Телеграм-бот модуля','Module Telegram bot')}</h3>\r
    <div class="hint">\${L('Можно вставить токен нового бота (@BotFather → /newbot) или тот же токен, что у бота проекта — тогда подписчики и владелец берутся у проекта. Сообщения подписаны «Мониторинг репутации».','Paste a new bot token (@BotFather → /newbot) or the same token as a project bot — then subscribers and owner come from that project. Messages are signed “Reputation monitoring”.')}</div>\r
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
  if(!words.length) return '<div class="hint">'+L('Пока мало отзывов для облака.','Not enough reviews yet.')+'</div>';\r
  const max = maxAll || Math.max(...words.map(w=>w.reviews));\r
  return '<div class="repcloud">'+words.slice().sort((a,b)=>a.word.localeCompare(b.word)).map(w=>{\r
    const size = 12 + Math.round(22*Math.sqrt(w.reviews/max));\r
    const cls = force || (w.tone>=0.5 ? 'pos' : w.tone<=-0.3 ? 'neg' : 'mid');\r
    const tip = L('в '+w.reviews+' отзывах: хороших '+w.pos+', плохих '+w.neg, 'in '+w.reviews+' reviews: positive '+w.pos+', negative '+w.neg);\r
    return \`<span class="\${cls}" style="font-size:\${size}px" title="\${esc(tip)}">\${esc(w.word)}</span>\`;\r
  }).join(' ')+'</div>';\r
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
      <div class="kpi big"><span class="em">⭐</span><div class="n">\${card.rating??'—'}</div><div class="l">\${L('рейтинг в 2ГИС','rating on 2GIS')}</div></div>\r
      <div class="kpi"><span class="em">💬</span><div class="n">\${fmtN(card.reviewsCount)}</div><div class="l">\${L('отзывов','reviews')}</div></div>\r
      <div class="kpi"><span class="em">🌟</span><div class="n">\${fmtN(card.ratingsCount)}</div><div class="l">\${L('оценок (со звёздами)','scores (with stars)')}</div></div>\r
      <div class="kpi"><span class="em">📅</span><div class="n">\${s.avg30??'—'}</div><div class="l">\${L('средняя за 30 дней','30-day average')} · \${s.count30} \${L('отз.','rev.')}\${s.neg30?' · '+s.neg30+' '+L('плохих','negative'):''}</div></div>\r
      <div class="kpi"><span class="em">↩️</span><div class="n">\${s.stored?Math.round(s.answered/s.stored*100)+'%':'—'}</div><div class="l">\${L('с ответом фирмы','with a business reply')}</div></div>\r
    </div>\r
    <div class="hint">\${L('собрано отзывов','reviews collected')}: \${fmtN(s.stored)}\${o.harvest&&!o.harvest.done?(' · '+L('первый сбор ещё идёт','first collection still running')):''}\${s.unrated?(' · '+L('не учтено в рейтинге','not counted in rating')+': '+s.unrated):''} · \${L('проверено','checked')} \${esc(repWhen(o.lastOk))}\r
      · <a href="/api/places/objects/\${esc(id)}/export.csv">\${L('скачать все отзывы (CSV)','download all reviews (CSV)')}</a>\r
      · <a href="#" id="repdel">\${L('убрать объект','remove object')}</a></div>\r
  </div>\`);\r
  $('#repdel',top).onclick = async e=>{ e.preventDefault(); if(!confirm(L('Перестать отслеживать и удалить собранное?','Stop tracking and delete collected data?')))return; await api('/places/objects/'+id,{method:'DELETE'}); location.hash='/rep'; };\r
  app.appendChild(top);\r
\r
  // Распределение оценок и месяцы\r
  const tot = s.dist.reduce((a,b)=>a+b,0)||1;\r
  const distHtml = [5,4,3,2,1].map(n=>{ const v=s.dist[n-1]; const p=Math.round(v/tot*100);\r
    return \`<div class="repdist"><span>\${'★'.repeat(n)}</span><div class="bar"><i style="width:\${p}%;background:\${n>=4?'var(--ok)':n===3?'var(--warn)':'var(--neg)'}"></i></div><span class="tag">\${fmtN(v)} · \${p}%</span></div>\`; }).join('');\r
  const charts = el(\`<div class="charts">\r
    <div class="chart"><h4>\${L('⭐ Распределение оценок','⭐ Score distribution')}</h4><div class="hint">\${L('по собранным отзывам, учтённым в рейтинге','collected reviews counted in the rating')}</div>\${distHtml}</div>\r
    <div class="chart"><h4>\${L('📅 Отзывов по месяцам','📅 Reviews per month')}</h4><div class="hint">\${L('и средняя оценка месяца','and average score of the month')}</div><div id="repmonths"></div><div class="tag" id="repavg"></div></div>\r
    \${d.history.length>1?\`<div class="chart wide"><h4>\${L('📈 Рейтинг в 2ГИС по проверкам','📈 2GIS rating by checks')}</h4><div id="rephist"></div></div>\`:''}\r
  </div>\`);\r
  app.appendChild(charts);\r
  barsV($('#repmonths',charts), s.months.map(m=>({day:m.month, count:m.count})), { color: CSSVAR('--acc','#6366f1') });\r
  $('#repavg',charts).textContent = s.months.slice(-6).map(m=>m.month.slice(5)+'.'+m.month.slice(2,4)+': ★'+m.avg).join(' · ');\r
  if(d.history.length>1) area($('#rephist',charts), d.history.map(h=>({day:new Date(h.at).toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}), count:h.rating})));\r
\r
  // События\r
  const evIcon = {new:'🆕',rating:'✏️',edited:'✏️',answer:'💬',unrated:'🚫',card:'📊'};\r
  const evText = e=>{ const r=e.review||{};\r
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
    <div class="hint">\${L('Прилагательные из отзывов — без ИИ, по счёту. «Общая картина»: слева слова, которые заметно чаще встречаются в хороших отзывах (4–5★), справа — в плохих (1–3★). Размер — в скольких отзывах слово есть. Наведите на слово — покажу цифры.','Adjectives from reviews — counted, no AI. “Overall picture”: left — words noticeably more frequent in positive reviews (4–5★), right — in negative (1–3★). Size = number of reviews. Hover for numbers.')}</div>\r
    <div class="win"><button data-g="picture" class="on">\${L('общая картина','overall picture')}</button><button data-g="picture30">\${L('картина за 30 дней','last 30 days')}</button><button data-g="all">\${L('все слова подряд','all words')}</button></div>\r
    <div id="repcl"><div class="muted">\${L('считаю…','counting…')}</div></div></div>\`);\r
  app.appendChild(cl);\r
  const loadCloud = async g=>{ cl.querySelectorAll('[data-g]').forEach(b=>b.classList.toggle('on', b.dataset.g===g));\r
    const q = g==='picture30' ? 'g=picture&days=30' : 'g='+g;\r
    const r = await (await api('/places/objects/'+id+'/cloud?'+q)).json();\r
    if(r.mode==='picture'){\r
      const pp = r.reviews ? Math.round(100*r.pos/r.reviews) : 0;\r
      const bar = r.reviews ? \`<div class="repbal"><div class="p" style="width:\${pp}%"></div><div class="n" style="width:\${100-pp}%"></div></div>\r
        <div class="tag" style="margin:4px 0 10px">\${L('хороших (4–5★)','positive (4–5★)')}: \${fmtN(r.pos)} (\${pp}%) · \${L('плохих (1–3★)','negative (1–3★)')}: \${fmtN(r.neg)} (\${100-pp}%)</div>\` : '';\r
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
      <input id="repq" placeholder="\${L('слово в тексте','word in text')}" style="max-width:220px"><span class="tag" id="reptotal"></span></div>\r
    <div id="replist" class="feed-list" style="max-height:none"></div>\r
    <div class="actions"><button id="repmore" class="sec" hidden>\${L('Ещё','More')}</button></div></div>\`);\r
  app.appendChild(rv);\r
  let off=0;\r
  const loadRev = async (reset)=>{ if(reset){ off=0; $('#replist',rv).innerHTML=''; }\r
    const q = '?offset='+off+'&limit=30&stars='+encodeURIComponent($('#repstars',rv).value)+'&q='+encodeURIComponent($('#repq',rv).value.trim());\r
    const r = await (await api('/places/objects/'+id+'/reviews'+q)).json();\r
    $('#reptotal',rv).textContent = L('найдено','found')+': '+fmtN(r.total);\r
    for(const x of r.reviews){ $('#replist',rv).appendChild(el(\`<div class="feed-item"><div class="d">\${esc(repDay(x.created))}\${x.edited?'<br>✏️ '+esc(repDay(x.edited)):''}</div>\r
      <div class="t"><span class="repstar \${x.rating>=4?'pos':x.rating===3?'mid':'neg'}">\${starsTxt(x.rating)}</span> <b>\${esc(x.author||'')}</b>\${x.rated===false?' <span class="tag" title="'+esc(x.hideReason||'')+'">🚫 '+L('не учтён в рейтинге','not counted')+'</span>':''}\r
        <div style="margin-top:4px;white-space:pre-wrap">\${esc(x.text||L('(без текста)','(no text)'))}</div>\r
        \${x.answer?\`<div class="s" style="margin-top:6px">↩️ \${esc(x.answer.text)}</div>\`:''}</div></div>\`)); }\r
    off += r.reviews.length; $('#repmore',rv).hidden = off >= r.total; };\r
  $('#repstars',rv).onchange=()=>loadRev(true);\r
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
  ta.oninput=()=>syncPicks(head);\r
  syncPicks(head);\r
}\r
// Поле -> галочки (и счётчик «выбрано N из M» в заголовке группы).\r
function syncPicks(head){\r
  const have = new Set($('#sites',head).value.split('\\n').map(normSrc).filter(Boolean));\r
  $('#picks',head).querySelectorAll('details').forEach(d=>{\r
    const all=[...d.querySelectorAll('input[data-src]')];\r
    all.forEach(i=>i.checked = have.has(normSrc(i.dataset.src)));\r
    const cnt=d.querySelector('[data-cnt]');\r
    if(cnt) cnt.textContent = '· выбрано '+all.filter(i=>i.checked).length+' из '+all.length;\r
  });\r
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
  // Какие виды разбора отмечены. Умолчание — только «разбор»: каждый вид это\r
  // отдельный запрос к Google на КАЖДОМ прогоне. Старое значение 'entities'\r
  // (вид убран 18 сентября 2026) среди галочек просто не встречается и молча\r
  // отпадает — старый проект от этого не ломается.\r
  const aiOn = k => ((Array.isArray(c.aiKinds) ? c.aiKinds.includes(k) : k==='summary') ? 'checked' : '');\r
  app.innerHTML='';\r
\r
  // Шапка проекта: действия + сворачиваемые настройки.\r
  const head = el(\`<div class="card">\r
    <div class="actions" style="margin-top:0">\r
      <div style="flex:1"><div style="font-weight:600;font-size:16px">\${esc(p.name)}</div>\r
        <div class="tag">\${T('запрос:')} «\${esc(c.keyword||'—')}» · \${schedText(s)} · \${periodText(c)}</div>\r
        \${(s.mode!=='off' && (c.periodMode||'fixed')==='fixed') ? '<div class="tag" style="color:var(--warn);margin-top:2px">⚠️ расписание включено, а период фиксированный: каждый прогон будет искать в одном и том же окне. Для мониторинга выберите «Ежедневный».</div>' : ''}</div>\r
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
                <label class="check" style="margin:0;align-items:flex-start"><input type="checkbox" class="aiKind" value="summary" \${aiOn('summary')}>\r
                  <span><b>📝 Разбор</b><span class="tag" style="display:block">5 наблюдений по цифрам сводки: кто ведёт тему, где всплеск, что повторяется.</span></span></label>\r
                <label class="check" style="margin:0;align-items:flex-start"><input type="checkbox" class="aiKind" value="sentiment" \${aiOn('sentiment')}>\r
                  <span><b>😊 Тональность</b><span class="tag" style="display:block">Знак по каждому материалу окна: выигрышно, нейтрально или невыгодно для объекта.</span></span></label>\r
                <label class="check" style="margin:0;align-items:flex-start"><input type="checkbox" class="aiKind" value="verify" id="aiVerify" \${aiOn('verify')}>\r
                  <span><b>🎯 Проверка релевантности</b><span class="tag" style="display:block">Отсекает однофамильцев и случайные совпадения слова: по каждому материалу —\r
                    «про объект» / «не про объект» / «не понять». <b>Ничего не удаляет</b> — только помечает, решаете вы.</span></span></label>\r
              </div>\r
              <div class="tag" id="aiVerifyNote" style="margin-top:6px" hidden></div>\r
              <div class="tag" id="aiCost" style="margin-top:8px"></div>\r
            </div>\r
            <label class="check" style="margin-top:12px"><input id="noext" type="checkbox" \${c.noExternal?'checked':''}> 🔒 не отправлять данные проекта во внешний контур</label>\r
            <div class="tag" style="margin-top:2px">Для заказов, где собранное нельзя показывать никому. Запрет стоит на сервере, а не в кабинете.</div>\r
            <div class="tag" id="noextOn" \${c.noExternal?'':'hidden'} style="color:var(--warn);margin-top:4px">\r
              Закрыто: Gemini (разбор, тональность, проверка релевантности), телеграм-бот проекта, внешний поиск DuckDuckGo/Bing.\r
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
    const sm = $('#smode',head).value;\r
    // Частый мониторинг умножает расход на ИИ в десятки раз: каждые 20 минут —\r
    // это 72 прогона в сутки. Считаем честно и показываем ДО включения, иначе\r
    // человек узнает цифру из счёта Google.\r
    const perDay = runsPerDayUi({ mode: sm, everyHours: +$('#severy',head).value,\r
      everyMinutes: +$('#severymin',head).value });\r
    const cost = $('#aiCost',head);\r
    // Тональность теперь идёт по ВСЕМУ окну и уходит пачками, поэтому она одна\r
    // стоит не «одного запроса», а одного на каждые ~120 материалов. Молчать об\r
    // этом нельзя: человек видит рядом цифру расхода и планирует по ней квоту.\r
    const sent = [...head.querySelectorAll('.aiKind')].some(x=>x.checked && (x.value==='sentiment'||x.value==='verify'));\r
    const tail = sent ? ' Тональность и проверка релевантности считаются по всей ленте окна и уходят пачками: на каждые ~120 материалов — ещё один запрос. Про уже разобранное второй раз не спрашиваем.' : '';\r
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
    else if(perDay) cost.innerHTML = \`Расход: <b style="color:var(--txt)">от \${kinds*perDay} запрос(ов) в сутки</b> (~\${kinds*perDay*30} в месяц). Пустой прогон не спрашиваем — квота не тратится.\${tail}\`;\r
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
    </div>\r
    <div id="viewrunsw"><div id="tabs" class="tabs"></div><div id="runbox"></div></div>\r
    <div id="viewanaw" hidden></div>\r
  </div>\`);\r
  app.appendChild(panel);\r
  const tabsEl=$('#tabs',panel), box=$('#runbox',panel);\r
  const runsWrap=$('#viewrunsw',panel), anaWrap=$('#viewanaw',panel);\r
  const setView=v=>{\r
    panel.querySelectorAll('.viewtab').forEach(b=>b.classList.toggle('active', b.dataset.v===v));\r
    runsWrap.hidden = v!=='runs'; anaWrap.hidden = v!=='ana';\r
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
// poolTotal — сколько материалов в окне ВСЕГО. Пользователь справедливо\r
// заметил расхождение: «оценено 40», а найдено 386, — и был прав, что это\r
// читается как поломка. Тогда это была выборка; теперь тональность идёт по\r
// ВСЕМУ окну (заголовки уходят в Google пачками), и в норме два числа сходятся.\r
// Расхождение осталось возможным по двум причинам: модель молча пропустила\r
// часть строк разметки, либо в окне больше материалов, чем верхний предел в\r
// ai-runner.js. Обе — редкие, и обе честно объясняются подписью под полоской:\r
// молчать нельзя, иначе человек снова решит, что цифры врут.\r
function paintAnswer(out, kind, text, items, poolTotal){\r
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
    + (partial ? \`<div class="muted" style="font-size:11px;margin-top:12px">⚖️ Оценено \${total} материалов из \${pool} за окно: на остальные модель не вернула строку разметки. Проценты выше — доли среди оценённых. Нажмите «Спросить» ещё раз: обычно со второй попытки размечается всё.</div>\` : '')\r
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
        <button data-kind="summary"><span class="em">📝</span>Разбор</button>\r
        <button data-kind="sentiment" class="sec"><span class="em">😊</span>Тональность</button>\r
        <button data-kind="verify" class="sec"><span class="em">🎯</span>Релевантность</button>\r
      </div>\` : \`\r
      <div class="hint">По кнопке в Google уходят цифры сводки и заголовки — <b>без ссылок</b>. Разбор смотрит до 40 случайных заголовков; тональность и проверка релевантности — все материалы окна, но только те, про которые ещё не спрашивали. Ключ хранится в файле настроек кабинета и наружу не отдаётся.</div>\r
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
        <button data-kind="summary"><span class="em">📝</span>Разбор</button>\r
        <button data-kind="sentiment" class="sec"><span class="em">😊</span>Тональность</button>\r
        <button data-kind="verify" class="sec" id="gverify"><span class="em">🎯</span>Релевантность</button>\r
        <button id="gask" style="margin-left:auto">✨ Спросить Gemini</button>\r
      </div>\r
      <div class="hint" id="gaskhint" style="margin:6px 0 0"></div>\`}\r
      <div id="gout" class="out muted">\${SNAP?'Разбор за это окно не сохранён.':'Нажмите одну из кнопок выше. Ответ модели появится здесь.'}</div>\r
      <div class="warn" id="gwarn" hidden></div>\`}\r
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
    const kinds = Object.keys(saved).filter(k=>saved[k] && saved[k].at);\r
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
  let curKind = 'summary';\r
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
    const labels = { summary:'Спрашиваю разбор', sentiment:'Считаю тональность', verify:'Проверяю релевантность' };\r
    // У тональности и проверки ожидание другое: они идут по всему окну и уходят\r
    // пачками по 120 материалов — на большой ленте это несколько запросов\r
    // подряд. Обещать «10–30 сек» там значит заставить человека решить, что\r
    // программа зависла.\r
    const wait = (kind==='sentiment'||kind==='verify')\r
      ? (o.items>120 ? '… (по всей ленте, пачками — до пары минут)' : '… (10–30 сек)')\r
      : '… (10–30 сек)';\r
    out.textContent=labels[kind]+wait; out.classList.add('muted'); showWarn('');\r
    host.querySelectorAll('.gaskbar button').forEach(b=>b.disabled=true);\r
    try{\r
      const r = await (await api('/projects/'+id+'/gemini',{method:'POST',body:JSON.stringify({ days: win==='all'? null : +win, kind })})).json();\r
      if(r.ok){\r
        paintAnswer(out, kind, r.text, r.items, o.items); out.classList.remove('muted');\r
        showWarn((r.model?('модель: '+r.model):'') + (r.truncated?' · ответ обрезан по лимиту — часть текста не поместилась':''));\r
        // Кладём ответ в ТУ ЖЕ корзину, откуда читает showSaved: иначе\r
        // переключение на соседний вид и обратно снова показало бы «ещё не\r
        // запрашивали», хотя на сервере ответ уже сохранён.\r
        saved[kind] = { at: Date.now(), text: r.text, items: r.items, model: r.model||'', err: '', auto: false,\r
          window: (a.overview.windowFrom||'') + ' … ' + (a.overview.windowTo||'') };\r
        askBtn.textContent = '✨ Спросить заново';\r
        askHint.textContent = 'Ответ сохранён в проекте: переключитесь на другой вид и вернитесь — он останется здесь.';\r
      }\r
      else { out.textContent=r.err||r.error||'не получилось'; out.classList.add('muted'); }\r
    }catch(e){ out.textContent='Ошибка запроса: '+(e&&e.message||e); }\r
    finally{\r
      host.querySelectorAll('.gaskbar button').forEach(b=>{ b.disabled=false; });\r
      if(curKind==='verify' && verifyBlocked) askBtn.disabled = true;\r
    }\r
  };\r
  host.querySelectorAll('.gaskbar button[data-kind]').forEach(b=>{ b.onclick=()=>pickKind(b.dataset.kind); });\r
  askBtn.onclick = ask;\r
  // Открываем на самом свежем из сохранённых — или на «разборе», если разборов\r
  // ещё не было вовсе.\r
  {\r
    const kinds = Object.keys(saved).filter(k=>saved[k] && saved[k].at);\r
    pickKind(kinds.length ? kinds.sort((x,y)=>saved[y].at-saved[x].at)[0] : 'summary');\r
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
  "📝 Разбор": "📝 Summary",\r
  "😊 Тональность": "😊 Sentiment",\r
  "🎯 Проверка релевантности": "🎯 Relevance check",\r
  "Разбор": "Summary",\r
  "Тональность": "Sentiment",\r
  "Релевантность": "Relevance",\r
  "5 наблюдений по цифрам сводки: кто ведёт тему, где всплеск, что повторяется.": "5 observations from the summary figures: who leads the topic, where the spike is, what repeats.",\r
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
  "Закрыто: Gemini (разбор, тональность, проверка релевантности), телеграм-бот проекта, внешний поиск DuckDuckGo/Bing.": "Blocked: Gemini (summary, sentiment, relevance check), the project's Telegram bot, external search via DuckDuckGo/Bing.",\r
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
  "По кнопке в Google уходят цифры сводки и заголовки —": "When you press the button, summary figures and headlines go to Google —",\r
  "без ссылок": "without links",\r
  ". Разбор смотрит до 40 случайных заголовков; тональность и проверка релевантности — все материалы окна, но только те, про которые ещё не спрашивали. Ключ хранится в файле настроек кабинета и наружу не отдаётся.": ". The summary looks at up to 40 random headlines; sentiment and the relevance check look at every item in the window, but only those not asked about before. The key is stored in the interface settings file and is never handed out.",\r
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
  "Показать подсказки под полями": "Show the hints under the fields"\r
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
    <li><b>Разбор</b> — несколько наблюдений по цифрам: кто ведёт тему, где всплеск.</li>\r
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
    <li><b>Summary</b> — a few observations from the figures: who leads the topic, where the\r
      spike is.</li>\r
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
startRunPoll();\r
route();\r
applyLang(document.body);\r
</script>\r
</body>\r
</html>\r
`}var ii=ee(()=>{i(io,"uiHtml")});function Qf(e){let t=e&&e.periodMode||"fixed";return t==="rolling"?`последние ${Math.max(2,+e.periodDays||2)} дн.`:t==="since"?`с ${e.from||"…"} и до сегодня`:Wn(e).why}function _f(e){let t=je(e);if(!t)return null;let n=t.config||{},r={"/me":{hasPassword:!1,playwright:!1,hasGeminiKey:!1,geminiModel:""},["/projects/"+e]:{id:e,name:t.name,ai:Zf(t.ai)}};for(let a of Jf){let l=on(e,{days:a});if(l){r["/projects/"+e+"/analytics"+(a?"?days="+a:"")]=l;for(let d of l.byDay||[]){let c="/projects/"+e+"/day?d="+d.day;d.count&&r[c]===void 0&&(r[c]={day:d.day,items:Gs(e,d.day)})}}}let s=new Date,o=i(a=>String(a).padStart(2,"0"),"p2");return{id:e,name:t.name||"Мониторинг",keyword:n.keyword||"",sources:(n.sites||[]).length,periodText:Qf(n),madeAt:`${o(s.getDate())}.${o(s.getMonth()+1)}.${s.getFullYear()} ${o(s.getHours())}:${o(s.getMinutes())}`,api:r}}function Hd(e){let t=_f(e);if(!t)return null;let n=io(),r="<script>window.MC_SNAPSHOT = "+Xf(t)+`;</script>
`;return{html:n.replace("<body>",`<body>
`+r).replace("<title>mediachrome — кабинет</title>","<title>"+em(t.name)+" — дашборд</title>"),snap:t}}function Fd(e){let t=String(e.name||"dashboard").replace(/[^A-Za-zА-Яа-яЁё0-9 _-]+/g,"").trim().replace(/\s+/g,"-")||"dashboard",n=new Date,r=i(s=>String(s).padStart(2,"0"),"p");return`${t}-${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}.html`}function ci(e){return`attachment; filename="${e.replace(/[^\x20-\x7E]/g,"_").replace(/["\\]/g,"_")}"; filename*=UTF-8''${encodeURIComponent(e)}`}var qd,Bd,pw,Jf,Xf,Zf,em,Ud=ee(()=>{qd=require("node:url"),Bd=require("node:path");Lt();Gr();Is();ii();pw=(0,Bd.dirname)((0,qd.fileURLToPath)(__mcFileUrl)),Jf=[null,30,7],Xf=i(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJson");i(Qf,"periodText");Zf=i(e=>{let t={};for(let[n,r]of Object.entries(e||{}))r&&(t[n]={at:r.at||null,text:r.text||"",err:r.err||"",model:r.model||"",window:r.window||"",auto:!!r.auto,items:Array.isArray(r.items)?r.items:null});return t},"cleanAi");i(_f,"buildSnapshot");i(Hd,"buildShareHtml");em=i(e=>String(e??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),"esc");i(Fd,"shareFileName");i(ci,"contentDisposition")});function Gd(e,t,n){let r=[];r.push("=== ДИАГНОСТИКА: "+e+" ==="),n&&r.push("период: "+(n.why||(n.from||"…")+" … "+(n.to||"…"))),r.push("каналы: "+(t.channel||"—")),r.push("итог движка: "+(t.note||"—")),r.push("найдено (взято): "+(t.rows?t.rows.length:0));let s=t.diag||{},o=s.meta||{},a=s.records||[];r.push(""),r.push("--- канал поиска ---"),r.push("вид поиска: "+(o.searchKind||"—")),r.push("URL поиска: "+(o.searchUrl||"(поиск не строился)")),o.renderUrl&&r.push("URL рендера: "+o.renderUrl),o.rawLinks&&o.rawLinks.length?(r.push("сырые ссылки со страницы поиска (образец "+o.rawLinks.length+"):"),o.rawLinks.slice(0,15).forEach(f=>r.push("   "+f))):r.push("сырых ссылок со страницы поиска: 0 (пусто/оболочка/JS-выдача)"),r.push(""),r.push("--- судьба открытых ссылок ("+a.length+") ---");let l={};for(let f of a)l[f.verdict]=(l[f.verdict]||0)+1;r.push("сводка вердиктов: "+(Object.entries(l).map(([f,m])=>f+"="+m).join(", ")||"—"));let d=/не открылась|дата не найдена|дата не распознана|не успели|не влезла/i,c=new Map;for(let f of a){let m=f.verdict||"—";c.has(m)||c.set(m,[]),c.get(m).push(f)}let h=i(f=>d.test(f)?0:f==="ВЗЯТА"?1:2,"rank"),u=[...c.keys()].sort((f,m)=>h(f)-h(m)||c.get(m).length-c.get(f).length),p=5;for(let f of u){let m=c.get(f);r.push("  • "+f+" — "+m.length+(d.test(f)?"  (ЭТО ПОТЕРЯ: страницу мы не проверили)":"")),m.slice(0,p).forEach(g=>{let w=[];g.date&&w.push('дата="'+g.date+'"->'+(g.parsed||"НЕ РАСПОЗНАНА")),g.hasKw!=null&&w.push("ключ:"+(g.hasKw?"да":"нет")),r.push("     "+(g.title?"«"+g.title+"»  ":"")+g.url+(w.length?"   ["+w.join(" | ")+"]":""))}),m.length>p&&r.push("     … ещё "+(m.length-p)+" с таким же вердиктом")}return r.join(`
`)}var Kd=ee(()=>{i(Gd,"diagReport")});function Wd(e,t,n,r){let s=Math.abs(e)%100,o=s%10;return s>10&&s<20?r:o>1&&o<5?n:o===1?t:r}function cr(e){let t=String(e||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return t?[+t[1],+t[2],+t[3]]:null}function Vd(e,t){let n=cr(e),r=cr(t);if(!n&&!r)return"";if(!n||!r){let s=n||r;return s[2]+" "+Pt[s[1]-1]+" "+s[0]}return n[0]===r[0]&&n[1]===r[1]&&n[2]===r[2]?n[2]+" "+Pt[n[1]-1]+" "+n[0]:n[0]===r[0]&&n[1]===r[1]?n[2]+"–"+r[2]+" "+Pt[n[1]-1]+" "+n[0]:n[0]===r[0]?n[2]+" "+Pt[n[1]-1]+" — "+r[2]+" "+Pt[r[1]-1]+" "+n[0]:n[2]+" "+Pt[n[1]-1]+" "+n[0]+" — "+r[2]+" "+Pt[r[1]-1]+" "+r[0]}function Yd(e,t){let n=cr(e),r=cr(t);return!n||!r?0:Math.round((Date.UTC(r[0],r[1]-1,r[2])-Date.UTC(n[0],n[1]-1,n[2]))/864e5)+1}function Jd(e){let t=Math.max(0,Math.round((+e||0)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),s=t%60,o=[];return n&&o.push(Ge(n,"час","часа","часов")),r&&o.push(Ge(r,"минута","минуты","минут")),(s||!o.length)&&o.push(Ge(s,"секунда","секунды","секунд")),o.join(" ")}function sm(e){let t=new Map;for(let n of e)t.set(li(n.source),(t.get(li(n.source))||0)+1);return Xd([...t.entries()])}function Xd(e){let n=e.map(([s,o])=>[li(s),o]).sort((s,o)=>o[1]-s[1]||s[0].localeCompare(o[0])).filter(([,s])=>s>1).slice(0,12);if(!n.length)return"";let r=[];for(let s=0;s<n.length;){let o=n[s][1],a=[];for(;s<n.length&&n[s][1]===o;)a.push(n[s++][0]);r.push(a.join(" / ")+" — "+(a.length>1?"по ":"")+o)}return r.join(", ")}function Qd(e,t){let n=e||{},r=t||{},s=Array.isArray(r.rows)?r.rows:[],o=Array.isArray(r.log)?r.log:[],a=i(v=>o.find(T=>T.site===v)||null,"line"),l=a("(период)"),d=a("(время)"),c=[];if(c.push("ОТЧЁТ ПО МОНИТОРИНГУ"),c.push(""),c.push("Тема: "+(n.keyword||"—")),l&&l.from&&l.to?c.push("Период: "+Vd(l.from,l.to)+" ("+Ge(Yd(l.from,l.to),"день","дня","дней")+")"):l&&l.note&&c.push("Период: "+l.note),r.at){let v=new Date(r.at);c.push("Дата мониторинга: "+v.getDate()+" "+Pt[v.getMonth()]+" "+v.getFullYear())}let h=o.filter(v=>!rm(v.site));if(h.length){let v=new Map;for(let T of h){let k=sn(T.site);v.set(k,(v.get(k)||0)+1)}c.push(""),c.push("ОХВАТ"),c.push("Просмотрено "+Ge(h.length,"источник","источника","источников")+":");for(let T of $d){let k=v.get(T);if(!k)continue;let S=nm[T];c.push("  — "+(T==="youtube"?"YouTube":Ge(k,S[0],S[1],S[2])))}}d&&d.ms&&(c.push(""),c.push("ЗАТРАЧЕНО ВРЕМЕНИ"),c.push(Jd(d.ms)+" (автоматический сбор, 4 источника одновременно)")),c.push(""),c.push("РЕЗУЛЬТАТ");let u=new Set(s.map(v=>v.source));c.push(Ge(s.length,"материал","материала","материалов")+" на "+Ge(u.size,"источнике","источниках","источниках")+(h.length?" из "+h.length:""));let p=new Map;for(let v of s){let T=we(v.date);if(!T)continue;let k=Me(T);p.set(k,(p.get(k)||0)+1)}if(p.size){c.push(""),c.push("По дням:");for(let v of[...p.keys()].sort()){let T=cr(v);c.push("  "+T[2]+" "+Pt[T[1]-1]+" — "+p.get(v))}}let f=new Map;for(let v of s){let T=sn(v.source);f.set(T,(f.get(T)||0)+1)}if(f.size>1){c.push(""),c.push("По типу источника:");for(let v of $d){let T=f.get(v);T&&c.push("  "+(v==="site"?"сайты СМИ":v==="telegram"?"телеграм":v==="youtube"?"YouTube":"Фейсбук")+" — "+T)}}let m=new Map;for(let v of s){let T=tm[v.match]||String(v.match||"не указано");m.set(T,(m.get(T)||0)+1)}if(m.size){c.push(""),c.push("Где встречается упоминание:");for(let[v,T]of[...m.entries()].sort((k,S)=>S[1]-k[1]||k[0].localeCompare(S[0])))c.push("  "+v+" — "+T)}let g=sm(s);g&&(c.push(""),c.push("Больше всего: "+g)),c.push(""),c.push("МЕТОДИКА");let w=String(n.exclude||"").trim();c.push(w?"  — Применялись минус-слова: "+w+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let b=o.filter(v=>v.site==="(ИИ)"),y=b.find(v=>/релевантност/i.test(String(v.note||"")));y?c.push("  — ИИ-проверка релевантности: "+String(y.note).replace(/^ИИ-[^:]*:\s*/,"")+"."):c.push(b.length?"  — Выполнен ИИ-разбор собранного ("+b.length+").":"  — ИИ не запускался: отбор полностью детерминированный — разбор разметки и текста страниц, без машинного обучения и без распознавания изображений."),c.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),c.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let A=h.filter(v=>!(v.found>0)).length;return A&&c.push("  — У "+Ge(A,"источника","источников","источников")+" из "+h.length+" материалов по теме за этот период не нашлось."),c.join(`
`)+`
`}function Zd(e,t,n={}){let r=e||{},s=t&&t.overview||{},o=[],a=n.now instanceof Date?n.now:new Date;o.push("ОТЧЁТ ПО МОНИТОРИНГУ"),o.push(""),o.push("Тема: "+(r.keyword||"—")),s.windowFrom&&s.windowTo&&o.push("Период: "+Vd(s.windowFrom,s.windowTo)+" ("+Ge(Yd(s.windowFrom,s.windowTo),"день","дня","дней")+")"),o.push("Дата отчёта: "+a.getDate()+" "+Pt[a.getMonth()]+" "+a.getFullYear());let l=(r.sites||[]).map(S=>String(S||"").trim()).filter(Boolean),d=l.filter(S=>/(^@)|(^https?:\/\/)?(www\.)?t\.me\//i.test(S)).length,c=l.length-d,h=(r.facebook||[]).map(S=>String(S||"").trim()).filter(Boolean).length,u=!!(r.youtube&&r.youtube.enabled);if(l.length||h||u){o.push(""),o.push("ОХВАТ");let S=l.length+h+(u?1:0);o.push("Под наблюдением "+Ge(S,"источник","источника","источников")+":"),c&&o.push("  — "+Ge(c,"сайт СМИ","сайта СМИ","сайтов СМИ")),d&&o.push("  — "+Ge(d,"телеграм-канал","телеграм-канала","телеграм-каналов")),u&&o.push("  — YouTube"),h&&o.push("  — "+Ge(h,"профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"))}let p=Array.isArray(t&&t.runs)?t.runs:[],f=p.map(S=>+S.sec).filter(S=>Number.isFinite(S)&&S>0);if(f.length){let S=f.reduce((M,N)=>M+N,0);o.push(""),o.push("ЗАТРАЧЕНО ВРЕМЕНИ"),o.push(Jd(S*1e3)+" — "+Ge(p.length,"автоматический сбор","автоматических сбора","автоматических сборов")+" за период")}o.push(""),o.push("РЕЗУЛЬТАТ");let m=t&&t.silent&&t.silent.configured||0;o.push(Ge(s.items||0,"материал","материала","материалов")+" на "+Ge(s.uniqueSources||0,"источнике","источниках","источниках")+(m?" из "+m+" отслеживаемых":""));let g=(t&&Array.isArray(t.byDay)?t.byDay:[]).filter(S=>S&&S.count>0);if(g.length){o.push(""),o.push("По дням:");for(let S of g){let M=cr(S.day);o.push("  "+(M?M[2]+" "+Pt[M[1]-1]:S.day)+" — "+S.count)}}let w=[["site",s.siteItems],["telegram",s.telegramItems],["youtube",s.youtubeItems],["facebook",s.facebookItems]].filter(([,S])=>S>0);if(w.length>1){o.push(""),o.push("По типу источника:");for(let[S,M]of w)o.push("  "+(S==="site"?"сайты СМИ":S==="telegram"?"телеграм":S==="youtube"?"YouTube":"Фейсбук")+" — "+M)}let b=[["в заголовке",s.matchTitle],["в тексте материала",s.matchBody],["в посте",s.matchPost],["в видео",s.matchVideo],["без пометки",s.matchOther]].filter(([,S])=>S>0);if(b.length){o.push(""),o.push("Где встречается упоминание:");for(let[S,M]of b)o.push("  "+S+" — "+M)}let y=Xd((t&&t.bySource?t.bySource:[]).map(S=>[S.key,S.count]));y&&(o.push(""),o.push("Больше всего: "+y));let A=t&&t.tone||{total:0};if(A.total){o.push(""),o.push("ТОНАЛЬНОСТЬ (оценка ИИ по заголовку и фрагменту)"),o.push("  выигрышно для объекта — "+A.pos+", нейтрально — "+A.neu+", невыгодно — "+A.neg+" (оценено "+A.total+" из "+(s.items||0)+")");let S=(A.bySource||[]).filter(M=>M.neg>0).slice(0,5);S.length&&o.push("  больше всего невыгодных: "+S.map(M=>M.key+" — "+M.neg).join(", "))}o.push(""),o.push("МЕТОДИКА");let v=String(r.exclude||"").trim();o.push(v?"  — Применялись минус-слова: "+v+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let T=t&&t.relevance||{checked:0};T.checked?o.push("  — ИИ-проверка релевантности: проверено "+Ge(T.checked,"материал","материала","материалов")+", из них "+T.off+" "+Wd(T.off,"похож","похожи","похожи")+" на случайное совпадение имени"+(T.dim?" и "+Ge(T.dim,"спорный","спорных","спорных"):"")+". Из выдачи они не удалены — помечены."):o.push("  — ИИ-проверка релевантности не запускалась."),o.push("  — Отбор материалов детерминированный: разбор разметки и текста страниц, без машинного обучения."),o.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),o.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let k=t&&t.silent&&t.silent.list?t.silent.list.length+(t.silent.more||0):0;return k&&o.push("  — У "+Ge(k,"источника","источников","источников")+" из "+m+" материалов по теме за этот период не нашлось."),o.join(`
`)+`
`}var Ge,Pt,tm,nm,$d,rm,li,_d=ee(()=>{Ot();Gr();i(Wd,"plural");Ge=i((e,t,n,r)=>e+" "+Wd(e,t,n,r),"num"),Pt=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];i(cr,"ymdParts");i(Vd,"ruRange");i(Yd,"daysInRange");i(Jd,"ruDuration");tm={title:"в заголовке",body:"в тексте материала",post:"в посте",video:"в видео",подпись:"в подписи к посту",репост:"в тексте репоста"},nm={site:["сайт СМИ","сайта СМИ","сайтов СМИ"],telegram:["телеграм-канал","телеграм-канала","телеграм-каналов"],youtube:["YouTube","YouTube","YouTube"],facebook:["профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"]},$d=["site","telegram","youtube","facebook"],rm=i(e=>/^\(/.test(String(e||"")),"isService"),li=i(e=>String(e)==="youtube"?"YouTube":String(e),"srcName");i(sm,"topSources");i(Xd,"topFromPairs");i(Qd,"buildReport");i(Zd,"buildWindowReport")});function kn(e){let t=["source","date","title","url","channel","channels","match","snippet","author","kind","via","comments"];return[t.join(",")].concat((e||[]).map(n=>t.map(r=>om(r==="date"?_t(n[r]):n[r])).join(","))).join(`\r
`)}var om,di=ee(()=>{Ot();om=i(e=>{let t=String(e??"");return/[",\r\n]/.test(t)?'"'+t.replace(/"/g,'""')+'"':t},"csvCell");i(kn,"toCSV")});async function co(e,t="ручной"){let n=je(e);if(!n)return{code:404,error:"проект не найден"};let r=ar();if(r)return{code:402,error:r};if(tt.has(e))return{code:409,error:"уже идёт"};tt.add(e),Qn(e,{name:n.name,by:t});let s=null,o=i((a,l)=>{try{let d=Kn(e,a,l,s);s=d.ts,an(e,{ts:d.ts}).catch(()=>{})}catch{}},"onProgress");try{let{rows:a,log:l}=await Xn(n,o,{onStep:i(h=>Zn(e,h),"onStep"),stopping:i(()=>_n(e),"stopping")}),d=Kn(e,a,l,s);try{await an(e,{ts:d.ts})}catch{}let c=await Zs(e,{foundNow:a.length,runTs:d.ts});return c.length&&Cs(e,d.ts,c.map(h=>({site:"(ИИ)",channel:"gemini",found:0,note:h}))),{code:200,added:d.added,total:d.total,ts:d.ts,found:a.length,log:l}}catch(a){return{code:500,error:String(a&&a.message||a)}}finally{tt.delete(e),er(e)}}var ui=ee(()=>{Lt();Br();Hr();Fr();_s();sr();$r();i(co,"runNow")});function um(e,t=""){let n=String(e||"").trim().match(/^\/([A-Za-z_]+)(?:@([A-Za-z0-9_]+))?(?:\s+([\s\S]*))?$/);if(!n)return null;let r=(n[2]||"").toLowerCase(),s=String(t||"").replace(/^@/,"").toLowerCase();return r&&s&&r!==s?null:{cmd:n[1].toLowerCase(),args:(n[3]||"").trim()}}function pm(e){let t=String(e||"").trim().replace(/^\+\s*/,""),n=[],r=[],s=[];for(let o of t.split(/[\s,;]+/)){let a=o.trim().replace(/^[<"'«]+|[>"'»]+$/g,"").replace(/^\++/,"");if(!a)continue;if(bn(a)){r.push(bn(a).url);continue}let l=ta(a);if(l){n.push("t.me/"+l);continue}let d=a.replace(/^https?:\/\//i,"").replace(/\/.*$/,"");if(/(^|\.)(facebook|fb)\.com$/i.test(d)){s.push(a);continue}if(/^[^\s./]+(\.[^\s./]+)*\.[^\s./\d][^\s./]+$/u.test(d)&&!/^\d+\.\d+/.test(d)){n.push(a.replace(/^https?:\/\//i,"").replace(/\/+$/,""));continue}s.push(a)}return{sites:n,facebook:r,bad:s}}function au(e){let t=String(e||"").trim().match(/^(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(!t)return null;let n=+t[1];return n>=1&&n<=Xr?n:null}function hm(e){let t=String(e||"").trim();if(!t)return{kw:"",days:null};let n=t.match(/^([\s\S]*?)\s+(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(n&&n[1].trim()){let r=+n[2];if(r>=1&&r<=Xr)return{kw:n[1].trim(),days:r}}return{kw:t,days:null}}function iu(e,t,n,r={},s=new Date){let o=e||{},a=Math.max(1,Math.min(Xr,Math.floor(+n)||1)),l=a===1?{periodMode:"fixed",from:Me(s),to:Me(s),periodDays:void 0}:{periodMode:"rolling",periodDays:a,from:"",to:""},d=i(c=>[...new Set(c.map(h=>String(h).trim()).filter(Boolean))],"uniq");return{...o,keyword:t,exclude:"",...l,sites:d([...o.sites||[],...r.sites||[]]),facebook:d([...o.facebook||[],...r.facebook||[]])}}async function mm(e,t){let n=t.from&&t.from.id,r=e.owners||[];if(n!=null&&r.some(o=>String(o.id)===String(n)))return{ok:!0};if(!r.length)return{ok:!1,why:"Владелец бота ещё не привязан. В кабинете, в настройках бота, есть команда вида /iam 123456 — владелец отправляет её мне в личные сообщения. После этого запускать сбор смогут он и администраторы его чатов."};if(!fm(t.chat))return{ok:!1,why:"Запускать сбор могут владелец бота и администраторы чата, где он состоит."};let s=await nu(e.token,t.chat.id,n);if(s!=="creator"&&s!=="administrator")return{ok:!1,why:"Запускать сбор в этом чате могут владелец бота и администраторы чата."};for(let o of r){let a=await nu(e.token,t.chat.id,o.id);if(["creator","administrator","member","restricted"].includes(a))return{ok:!0}}return{ok:!1,why:"Владельца бота нет в этом чате — запускать сбор отсюда нельзя."}}async function pe(e,t,n,r={}){let s=await bt(e.token,"sendMessage",{chat_id:t,text:n,parse_mode:"HTML",disable_web_page_preview:!0,...r});return s.ok&&s.result?s.result.message_id:null}function gi(e,t=0){return e.map((n,r)=>t+r+1+". <b>"+K(wm(n.title||n.url,160))+`</b>
`+K([n.source,_t(n.date)].filter(Boolean).join(" · "))+`
`+K(n.url||"")).join(`

`)}function cu(e,t=5){let n=new Map;for(let r of e)n.set(r.source||"—",(n.get(r.source||"—")||0)+1);return[...n.entries()].sort((r,s)=>s[1]-r[1]).slice(0,t).map(([r,s])=>r+" — "+s).join(", ")}function bm(e){return e=e||{},e.mode==="daily"?"каждый день в "+(e.hour!=null?e.hour:9)+":00":e.mode==="hours"?"каждые "+(e.everyHours||6)+" ч":e.mode==="minutes"?"каждые "+(e.everyMinutes||20)+" мин":"вручную, по кнопке"}async function lu(e,t,n){let r=await pe(e,t.chat.id,"🔎 <b>Разовый поиск.</b> Что ищем? Ответьте на это сообщение словом или фразой. Варианты написания — через запятую: <i>Тоқаев, Токаев</i>",{reply_to_message_id:t.messageId,reply_markup:{force_reply:!0,selective:!0}});r&&n.prompts.add(r)}async function du(e,t,n){let r=await pe(e,t.chat.id,"За сколько последних дней ищем «"+K(n.kw)+"»? Нажмите кнопку или ответьте на это сообщение числом от 1 до "+Xr+".",{reply_markup:{inline_keyboard:[am.map(s=>({text:String(s),callback_data:"sd:"+s}))]}});r&&n.prompts.add(r)}async function uo(e,t,n,r,s=""){let o=iu(r.config,n.kw,n.days,n.adds),a=[...n.adds.sites,...n.adds.facebook],l=[s,"Ищу «<b>"+K(n.kw)+"</b>» за последние "+Jr(n.days)+" по "+wi(o)+" источникам проекта «"+K(r.name)+"»"+(a.length?", включая добавленные для этого поиска: "+K(a.join(", ")):"")+".","","Добавить источник только для этого поиска — ответьте на это сообщение: <code>+ адрес</code> (сайт, t.me/канал или facebook.com/профиль; можно несколько через пробел). Или запускайте."].filter((c,h)=>c||h>0),d=await pe(e,t.chat.id,l.join(`
`),{reply_markup:{inline_keyboard:[[{text:"▶ Запустить",callback_data:"sr"},{text:"✖ Отмена",callback_data:"sx"}]]}});d&&n.prompts.add(d)}function xm(e,t,n,r,s){try{(0,Nt.mkdirSync)(Vr,{recursive:!0});let o=(0,Yr.join)(Vr,xi(e)+" — "+yi(t));(0,Nt.writeFileSync)(o+".csv","\uFEFF"+kn(n)),(0,Nt.writeFileSync)(o+".json",JSON.stringify({...s,keyword:t,found:n.length,log:r},null,2));let a=(0,Nt.readdirSync)(Vr).map(l=>({f:l,at:(0,Nt.statSync)((0,Yr.join)(Vr,l)).mtimeMs})).sort((l,d)=>d.at-l.at);for(let l of a.slice(dm*2))try{(0,Nt.rmSync)((0,Yr.join)(Vr,l.f),{force:!0})}catch{}}catch{}}async function vm(e,t,n,r,s){let o=lo(e),a=Ze.now(),l=iu(s.config,r.kw,r.days,r.adds,new Date(a)),d=wi(l);tt.add(o),Qn(o,{name:"Разовый поиск «"+r.kw+"»",by:"телеграм: "+r.user,total:d}),await pe(t,n,"🔎 Ищу «<b>"+K(r.kw)+"</b>» за "+Jr(r.days)+" по "+d+" источникам. Это займёт несколько минут — итог пришлю сюда. Остановить: /cancel");let c;try{c=await Ze.runSearch({id:o,name:"Разовый поиск «"+r.kw+"»",config:l},{onStep:i(g=>Zn(o,g),"onStep"),stopping:i(()=>_n(o),"stopping")})}catch(g){await pe(t,n,"⚠️ Поиск «"+K(r.kw)+"» сорвался: "+K(String(g&&g.message||g)));return}finally{tt.delete(o),er(o)}let h=c&&c.rows||[],u=c&&c.log||[],p=u.find(g=>g.site==="(остановлен)");xm(a,r.kw,h,u,{days:r.days,by:r.user,project:s.name,added:r.adds});let m=(p?"⏹ Поиск «"+K(r.kw)+"» остановлен: "+K(p.note.replace(/^сбор остановлен человеком: /,""))+`.

`:"")+(h.length?"✅ «<b>"+K(r.kw)+"</b>» за "+Jr(r.days)+": найдено <b>"+h.length+"</b> (источников "+d+", "+mi(Ze.now()-a)+`).
Больше всех: `+K(cu(h)):"«<b>"+K(r.kw)+"</b>» за "+Jr(r.days)+": ничего не нашлось (источников "+d+", "+mi(Ze.now()-a)+").");h.length&&(m+=`

`+gi(h.slice(0,Yt)),h.length>Yt&&(m+=`

…и ещё `+(h.length-Yt)+" — в файле ниже.")),m.length>4e3&&(m=m.slice(0,3990)+"…"),await pe(t,n,m),h.length&&await _a(t.token,n,"поиск "+yi(r.kw)+" "+xi(a)+".csv","\uFEFF"+kn(h),"Все "+h.length+" — таблицей")}async function km(e,t,n,r){let s=await Ze.runNow(e,"телеграм: "+r);s.code===200?await pe(t,n,"✅ Сбор закончен: найдено "+(s.found!=null?s.found:"—")+", из них новых "+(s.added||0)+". Новое ушло сюда по ходу сбора."):await pe(t,n,"⚠️ Сбор не состоялся: "+K(s.error||"причина не названа"))}function uu(){let e=tr()[0];return e?"Сейчас идёт сбор «"+K(e.name)+"»"+(e.total?" ("+e.done+" из "+e.total+")":"")+". Дождитесь конца — ход видно в /status.":"Сейчас уже идёт сбор."}async function su(e,t,n,r,s,o){let a=r.chat.id;switch(s){case"start":case"help":return pe(t,a,ym);case"iam":{if(r.chat.type!=="private")return ol(e),pe(t,a,"Код владельца отправляют мне в <b>личные сообщения</b>, а не в общий чат. Этот код я уже заменил — новый смотрите в кабинете.");let l=String(r.from.id),d=fi.get(l)||{n:0,at:Ze.now()};if(Ze.now()-d.at>3600*1e3&&(d.n=0,d.at=Ze.now()),d.n>=lm)return pe(t,a,"Слишком много неверных кодов. Попробуйте через час.");if(!o||o!==String(t.ownerCode||""))return d.n++,fi.set(l,d),pe(t,a,"Код не подошёл. Он в кабинете, в настройках телеграм-бота проекта.");let c=(t.owners||[]).filter(h=>String(h.id)!==l).concat([{id:r.from.id,name:pi(r.from)}]);return lt(e,{owners:c}),fi.delete(l),pe(t,a,"Готово: вы владелец бота проекта «"+K(n.name)+"». Вам доступны /search, /run и /cancel — здесь и в общих чатах, где вы состоите. Администраторы этих чатов тоже смогут запускать сбор.")}case"status":{let l=tr().filter(u=>u.id===String(e)||u.id===lo(e)),d=tr().filter(u=>u.id!==String(e)&&u.id!==lo(e)),c=[];for(let u of l)c.push("⏳ Идёт: «"+K(u.name)+"»"+(u.total?", "+u.done+" из "+u.total:"")+", найдено "+u.found+", "+mi(u.ms)+(u.stopping?" — останавливаю":"")+".");for(let u of d)c.push("Программа занята другим проектом: «"+K(u.name)+"».");c.length||c.push("Сейчас сбор не идёт.");let h=(n.runs||[])[0];return h&&c.push("Последний сбор: "+K(new Date(h.at).toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}))+", найдено "+(h.found||0)+", новых "+(h.added||0)+"."),c.push("Расписание: "+bm(n.schedule)+"."),pe(t,a,c.join(`
`))}case"today":{let l=Me(new Date(Ze.now())),d=(n.items||[]).filter(p=>p.date&&Me(new Date(p.date))===l).sort((p,f)=>String(f.date).localeCompare(String(p.date))),c=Math.max(1,parseInt(o,10)||1),h=(c-1)*Yt;if(!d.length)return pe(t,a,"Сегодня в ленте проекта «"+K(n.name)+"» материалов пока нет.");let u="Сегодня — <b>"+d.length+"</b>. Больше всех: "+K(cu(d))+`

`+gi(d.slice(h,h+Yt),h);return d.length>h+Yt&&(u+=`

Дальше: /today `+(c+1)),pe(t,a,u.length>4e3?u.slice(0,3990)+"…":u)}case"find":{let l=o.split(",").map(h=>h.trim().toLowerCase()).filter(Boolean);if(!l.length)return pe(t,a,"Напишите слово после команды: <code>/find КТЖ</code>. Ищу по уже собранной ленте, новый обход не делаю.");let d=(n.items||[]).filter(h=>{let u=(String(h.title||"")+" "+String(h.snippet||"")).toLowerCase();return l.some(p=>u.includes(p))}).sort((h,u)=>String(u.date||"").localeCompare(String(h.date||"")));if(!d.length)return pe(t,a,"В собранной ленте «"+K(o)+"» не встречается. Поискать заново по сайтам — /search.");let c="В собранной ленте — <b>"+d.length+`</b> (новый обход не делал):

`+gi(d.slice(0,Yt));return d.length>Yt&&(c+=`

…и ещё `+(d.length-Yt)+". Все — /csv"),pe(t,a,c.length>4e3?c.slice(0,3990)+"…":c)}case"csv":{let l=n.items||[];if(!l.length)return pe(t,a,"Лента проекта пока пуста.");let d=await _a(t.token,a,yi(n.name)+" "+xi(Ze.now())+".csv","\uFEFF"+kn(l),"Лента «"+n.name+"»: "+l.length);return d.ok?null:pe(t,a,"Файл не отправился: "+K(d.err))}case"search":case"run":case"cancel":{let l=await mm(t,r);if(!l.ok)return pe(t,a,l.why);if(s==="cancel"){let h=[String(e),lo(e)].filter(u=>Hs(u));return pe(t,a,h.length?"⏹ Останавливаю: дочитаю текущий источник и остановлюсь. Найденное сохранится.":"Сейчас по этому проекту ничего не собирается.")}if(s==="run"){let h=Ze.blocked();if(h)return pe(t,a,K(h));if(tt.size)return pe(t,a,uu());let u=n.config||{};return String(u.keyword||"").trim()?(await pe(t,a,"▶ Запускаю сбор «"+K(n.name)+"»: "+wi(u)+" источников. Находки пойдут сюда по ходу, итог пришлю в конце. Остановить: /cancel"),ou(km(e,t,a,pi(r.from)).catch(()=>{})),null):pe(t,a,"У проекта не задан запрос — настройте его в кабинете.")}let d={step:"kw",kw:"",days:null,adds:{sites:[],facebook:[]},prompts:new Set,at:Ze.now(),user:pi(r.from)};ln.set(bi(e,a,r.from.id),d);let c=hm(o);return c.kw&&(d.kw=c.kw.slice(0,200)),c.days&&(d.days=c.days),d.kw?d.days?(d.step="ready",uo(t,r,d,n)):(d.step="days",du(t,r,d)):lu(t,r,d)}default:return null}}async function Sm(e,t,n,r,s){let o=String(r.text||"").trim();if(s.at=Ze.now(),s.step==="kw")return o?(s.kw=o.slice(0,200),s.step="days",du(t,r,s)):lu(t,r,s);if(s.step==="days"){let a=au(o);return a?(s.days=a,s.step="ready",uo(t,r,s,n)):pe(t,r.chat.id,"Нужно число от 1 до "+Xr+". Или нажмите кнопку.")}if(s.step==="ready"){if(!/^\+/.test(o))return pe(t,r.chat.id,"Чтобы добавить источник, начните ответ с «+», например: <code>+ t.me/kanal</code>. Или нажмите «▶ Запустить».");let a=pm(o),l=eu-s.adds.sites.length-s.adds.facebook.length,d=[...a.sites.map(u=>["sites",u]),...a.facebook.map(u=>["facebook",u])].filter(([u,p])=>!s.adds[u].includes(p)),c=d.slice(0,Math.max(0,l));for(let[u,p]of c)s.adds[u].push(p);let h=[];return c.length&&h.push("Добавил: "+K(c.map(u=>u[1]).join(", "))+"."),a.bad.length&&h.push("Не понял, что это за источник: "+K(a.bad.join(", "))+". Нужен адрес сайта, t.me/канал или facebook.com/профиль."),d.length>c.length&&h.push("Больше "+eu+" источников к разовому поиску не добавляю — для такого лучше завести проект в кабинете."),!c.length&&!a.bad.length&&d.length===c.length&&h.push("Эти источники уже есть."),uo(t,r,s,n,h.join(`
`))}return null}async function Tm(e,t,n,r){let s=bi(e,r.chat.id,r.from.id),o=ln.get(s);if(!o||!o.prompts.has(r.messageId)){let a=[...ln.values()].some(l=>l.prompts.has(r.messageId));await Ht(t,r.id,a?"Это поиск другого участника. Начните свой: /search":"Этот поиск уже неактуален. Начните заново: /search");return}if(o.at=Ze.now(),r.data.startsWith("sd:")){let a=au(r.data.slice(3));if(!a||o.step!=="days"){await Ht(t,r.id);return}return o.days=a,o.step="ready",await Ht(t,r.id,Jr(a)),await hi(t,r.chat.id,r.messageId),uo(t,r,o,n)}if(r.data==="sx")return ln.delete(s),await Ht(t,r.id,"Отменено"),await hi(t,r.chat.id,r.messageId),pe(t,r.chat.id,"Поиск отменён.");if(r.data==="sr"){if(o.step!=="ready"){await Ht(t,r.id);return}let a=Ze.blocked();return a?(await Ht(t,r.id,"Не могу"),pe(t,r.chat.id,K(a))):tt.size?(await Ht(t,r.id,"Занято"),pe(t,r.chat.id,uu()+" Потом нажмите «▶ Запустить» ещё раз.")):(ln.delete(s),await Ht(t,r.id,"Запускаю"),await hi(t,r.chat.id,r.messageId),ou(vm(e,t,r.chat.id,o,n).catch(()=>{})),null)}await Ht(t,r.id)}async function Am(e,t){let n=Ke(e),r=je(e);if(!r||!n.token||!n.enabled||!Dt(r.config||{}).bot)return;let s=Ze.now();for(let[c,h]of ln)s-h.at>cm&&ln.delete(c);let o=n.bot||"";if(!o){let c=await nr(n.token);c.ok&&(o=c.bot,lt(e,{bot:c.bot}))}let a=new Map,l=i(async c=>{let h=String(c.id);return a.has(h)||a.set(h,await rr(Ke(e),c,s)),a.get(h)},"gate"),d=new Map;for(let c of t)try{if(c.kind==="cb"){if(!(await l(c.chat)).ok){await Ht(n,c.id,"Закрытый бот");continue}await Tm(e,Ke(e),je(e),c);continue}let h=Ke(e),u=je(e),p=um(c.text,o);if(p){if(p.cmd==="iam"){await su(e,h,u,c,p.cmd,p.args),a.delete(String(c.chat.id));continue}let m=await l(c.chat);if(!m.ok){p.cmd!=="stop"&&await pe(h,c.chat.id,ru[m.why]||ru.stranger);continue}if(c.date&&s-c.date*1e3>im&&p.cmd!=="start"&&p.cmd!=="help"){(!d.has(c.chat.id)||c.date<d.get(c.chat.id))&&d.set(c.chat.id,c.date);continue}await su(e,h,u,c,p.cmd,p.args);continue}let f=c.from&&ln.get(bi(e,c.chat.id,c.from.id));f&&(c.replyTo&&f.prompts.has(c.replyTo)||c.chat.type==="private")&&(await l(c.chat)).ok&&await Sm(e,h,u,c,f)}catch{}for(let[c,h]of d)await pe(n,c,"Видел команду от "+gm(h)+", но программа в это время не работала (компьютер был выключен или спал). Повторите, если ещё нужно.")}function pu(){wd(Am),setInterval(()=>{for(let e of nn()){let t=Ke(e.id);if(!t.enabled||!t.token)continue;let n=je(e.id);!n||!Dt(n.config||{}).bot||vn(e.id).catch(()=>{})}},Lm)}var Nt,Yr,Xr,am,Yt,eu,im,cm,lm,Vr,dm,Ze,tu,ou,wi,pi,fm,nu,Ht,hi,gm,mi,Jr,wm,ru,ym,ln,bi,fi,lo,yi,xi,Lm,hu=ee(()=>{Nt=require("node:fs"),Yr=require("node:path");Lt();sr();Br();Hr();Fr();$r();Jn();di();ui();jr();Bn();Ot();ht();Xr=30,am=[1,3,7,14,30],Yt=10,eu=10,im=300*1e3,cm=900*1e3,lm=5,Vr=(0,Yr.join)(me,"searches"),dm=30,Ze={runSearch:i((e,t)=>Xn(e,null,t),"runSearch"),runNow:co,blocked:i(()=>ar(),"blocked"),now:i(()=>Date.now(),"now")},tu=new Set,ou=i(e=>(tu.add(e),e.finally(()=>tu.delete(e)),e),"track");i(um,"parseCommand");i(pm,"parseAdds");i(au,"parseDays");i(hm,"parseSearchArgs");i(iu,"searchConfig");wi=i(e=>(e.sites||[]).length+(e.facebook||[]).length+(e.youtube&&e.youtube.enabled?1:0),"sourceCount"),pi=i(e=>[e.first_name,e.last_name].filter(Boolean).join(" ")||(e.username?"@"+e.username:String(e.id||"кто-то")),"who"),fm=i(e=>e&&(e.type==="group"||e.type==="supergroup"),"isGroup"),nu=i((e,t,n)=>Za(e,t,n,Ze.now()),"memberStatus");i(mm,"mayControl");i(pe,"say");Ht=i((e,t,n="")=>bt(e.token,"answerCallbackQuery",{callback_query_id:t,text:n}),"answerCb"),hi=i((e,t,n)=>bt(e.token,"editMessageReplyMarkup",{chat_id:t,message_id:n,reply_markup:{inline_keyboard:[]}}),"dropButtons"),gm=i(e=>new Date(e*1e3).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),"hhmm"),mi=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"dur"),Jr=i(e=>e+" "+(e%10===1&&e%100!==11?"день":e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?"дня":"дней"),"daysWord"),wm=i((e,t)=>(e=String(e||"").replace(/\s+/g," ").trim(),e.length>t?e.slice(0,t-1)+"…":e),"cut");i(gi,"itemLines");i(cu,"topSources");i(bm,"scheduleText");ru={"no-owner":"Это закрытый бот мониторинга. Владелец ещё не привязан, поэтому я пока никому не отвечаю и ничего не присылаю. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета.",stranger:"Это закрытый бот мониторинга. Я отвечаю только владельцу и в общих чатах, где он состоит.","no-owner-here":"В этом чате нет владельца бота — здесь я не отвечаю и ничего не присылаю."},ym=["<b>Что я умею</b>","","/status — идёт ли сейчас сбор и когда был последний","/today — что нашлось сегодня","/find слово — поиск по уже собранному (без нового обхода)","/csv — вся лента проекта файлом","","<b>Для владельца и администраторов чата</b>","/search — разовый поиск: слово → за сколько дней (до 30) → можно добавить источник через «+» → запуск","/run — собрать по проекту прямо сейчас","/cancel — остановить сбор (найденное сохранится)","","Отписаться от рассылки — /stop."].join(`
`),ln=new Map,bi=i((e,t,n)=>e+"|"+t+"|"+n,"dKey"),fi=new Map;i(lu,"askKw");i(du,"askDays");i(uo,"askReady");lo=i(e=>"tgsearch-"+e,"searchKey"),yi=i(e=>String(e||"").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"поиск","fileSafe"),xi=i(e=>{let t=new Date(e),n=i(r=>String(r).padStart(2,"0"),"p2");return Me(t)+" "+n(t.getHours())+"-"+n(t.getMinutes())},"stamp");i(xm,"saveSearch");i(vm,"searchJob");i(km,"runJob");i(uu,"busyText");i(su,"onCommand");i(Sm,"onDialogText");i(Tm,"onButton");i(Am,"handleEvents");Lm=4e3;i(pu,"startBotLoop")});function ho(e,t){Em((0,xt.dirname)(e));let n=e+".tmp";(0,yt.writeFileSync)(n,JSON.stringify(t)),(0,yt.renameSync)(n,e)}function fo(e,t){try{return(0,yt.existsSync)(e)?JSON.parse((0,yt.readFileSync)(e,"utf8")):t}catch{return t}}function Ae(){return vi||(vi=Object.assign(Pm(),fo(gu(),{})||{})),vi}function Ft(){ho(gu(),Ae())}function wu(){Ft()}function bu(e){return String(e||"").trim()!==Cm?{ok:!1,error:"код не подошёл"}:(Ae().unlocked=!0,Ft(),{ok:!0})}function yu(){return Ae().unlocked=!1,Ft(),{ok:!0}}function xu(e){let t=e&&e.mode==="minutes"?"minutes":"off",n=Math.max(po,Math.min(1440,+(e&&e.everyMinutes)||30));return Ae().schedule={mode:t,everyMinutes:n},Ft(),Ae().schedule}function vu(e){return Ae().notify=Object.assign({},Ae().notify,e||{}),Ft(),Ae().notify}function ku(e){let t=Ae();if(!e||!e.id)return{ok:!1,error:"это не ссылка на карточку фирмы в 2ГИС"};if(t.objects.some(r=>r.id===e.id))return{ok:!1,error:"эта фирма уже отслеживается"};if(t.objects.length>=ki)return{ok:!1,error:"больше "+ki+" объектов модуль не ведёт"};let n={id:e.id,link:e,name:"",address:"",category:"",addedAt:Date.now(),watchFrom:Date.now(),harvest:{done:!1,offset:0,total:null},card:null,lastCheck:0,lastOk:0,err:""};return t.objects.push(n),Ft(),{ok:!0,object:n}}function _r(e,t){let n=Zr(e);return n?(Object.assign(n,t||{}),Ft(),n):null}function Su(e){let t=Ae(),n=t.objects.length;t.objects=t.objects.filter(r=>r.id!==String(e)),t.ai&&delete t.ai[e],Ft();try{(0,yt.rmSync)(Sn(e),{recursive:!0,force:!0})}catch{}return t.objects.length<n}function Lu(e,t,n=Date.now()){if(!t)return!1;let r=Si(e),s=r[r.length-1];return s&&s.rating===t.rating&&s.reviewsCount===t.reviewsCount&&s.ratingsCount===t.ratingsCount&&n-s.at<6*3600*1e3?!1:(r.push({at:n,rating:t.rating,reviewsCount:t.reviewsCount,ratingsCount:t.ratingsCount}),ho((0,xt.join)(Sn(e),"history.json"),r.slice(-Dm)),!0)}function Cu(e,t){if(!t||!t.length)return 0;let n=es(e),r=new Set(n.map(o=>o.key)),s=0;for(let o of t)r.has(o.key)||(n.push(o),r.add(o.key),s++);return Au(e,n),s}function ns(e,t){let n=new Set(t);if(!n.size)return 0;let r=es(e),s=0;for(let o of r)n.has(o.key)&&!o.sent&&(o.sent=Date.now(),s++);return Au(e,r),s}function Ti(e,t,{watchFrom:n=0,now:r=Date.now()}={}){let s=Object.assign({},e||{}),o=[];for(let a of t||[]){if(!a||!a.id)continue;let l=s[a.id];if(!l){s[a.id]={...a,seenAt:r};let c=Nm(a.created);c!=null&&c>=n&&o.push(Qr("new",a,r));continue}let d={...l,...a,seenAt:l.seenAt||r};l.rating!=null&&a.rating!=null&&l.rating!==a.rating?o.push(Qr("rating",a,r,{from:l.rating})):a.text!==l.text&&(a.edited||"")!==(l.edited||"")&&o.push(Qr("edited",a,r,{prevText:l.text})),!l.answer&&a.answer&&o.push(Qr("answer",a,r)),l.rated!==!1&&a.rated===!1&&o.push(Qr("unrated",a,r)),s[a.id]=d}return{merged:s,events:o}}function Qr(e,t,n,r={}){let s=e==="rating"?t.rating:e==="edited"?t.edited||"":e==="answer"&&t.answer&&t.answer.date||"";return{key:e+":"+t.id+":"+s,kind:e,at:n,review:{id:t.id,rating:t.rating,text:t.text,author:t.author,created:t.created,edited:t.edited,answer:t.answer,rated:t.rated,hideReason:t.hideReason},...r}}function Mu(e,t,n=Date.now()){if(!e||!t)return[];let r=[],s=(t.reviewsCount??0)-(e.reviewsCount??0),o=(t.ratingsCount??0)-(e.ratingsCount??0),a=e.rating!=null&&t.rating!=null&&e.rating!==t.rating,l=o-Math.max(0,s);return(a||l>0||s<0)&&r.push({key:"card:"+n,kind:"card",at:n,from:{rating:e.rating,reviewsCount:e.reviewsCount,ratingsCount:e.ratingsCount},to:{rating:t.rating,reviewsCount:t.reviewsCount,ratingsCount:t.ratingsCount},silentVotes:l>0?l:0,lostReviews:s<0?-s:0}),r}function dt(e){let t=Ae();return t.tg=Object.assign({},t.tg||{},e||{}),t.tg.token&&!t.tg.ownerCode&&(t.tg.ownerCode=String((0,fu.randomInt)(1e5,1e6))),Ft(),t.tg}function go(){let e=ot();return{enabled:!!e.enabled,hasToken:!!e.token,bot:e.bot||"",borrowed:e.borrowed||"",chats:(e.chats||[]).map(t=>({id:t.id,name:t.name||"",access:t.access||""})),ownerCode:e.ownerCode||"",owners:(e.owners||[]).map(t=>t.name||String(t.id)),err:e.err||"",sentTotal:e.sentTotal||0}}function Ru(e,t){let n=Ae();return n.ai=n.ai||{},n.ai[e]=t,Ft(),t}function Eu(){let e=Ae();return{unlocked:!!e.unlocked,schedule:e.schedule,notify:e.notify,max:ki,minEvery:po,everyChoices:Mm,objects:e.objects.map(t=>({id:t.id,url:t.link&&t.link.url,name:t.name,address:t.address,category:t.category,card:t.card,lastCheck:t.lastCheck,lastOk:t.lastOk,err:t.err,harvest:t.harvest,addedAt:t.addedAt,unsent:ts(t.id).length})),tg:go()}}var yt,xt,fu,ki,Cm,po,Mm,Rm,Dm,mu,gu,Sn,Em,vi,Pm,mo,Tn,Zr,dn,Tu,Si,es,Au,ts,Nm,ot,Du,wo=ee(()=>{yt=require("node:fs"),xt=require("node:path"),fu=require("node:crypto");ht();ki=10,Cm="1979",po=20,Mm=[20,30,60,120,360,720],Rm=1e3,Dm=5e3,mu=i(()=>(0,xt.join)(me,"places"),"ROOT"),gu=i(()=>(0,xt.join)(mu(),"places.json"),"MAIN"),Sn=i(e=>(0,xt.join)(mu(),String(e).replace(/[^0-9A-Za-z_-]/g,"")),"objDir"),Em=i(e=>{try{(0,yt.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(ho,"writeJson");i(fo,"readJson");vi=null,Pm=i(()=>({unlocked:!1,schedule:{mode:"off",everyMinutes:30},objects:[],tg:{},ai:{},notify:{answers:!0}}),"blank");i(Ae,"state");i(Ft,"save");i(wu,"saveState");i(bu,"unlock");i(yu,"lock");mo=i(()=>!!Ae().unlocked,"isUnlocked");i(xu,"setSchedule");i(vu,"setNotify");Tn=i(()=>Ae().objects.slice(),"listObjects"),Zr=i(e=>Ae().objects.find(t=>t.id===String(e))||null,"getObject");i(ku,"addObject");i(_r,"updateObject");i(Su,"removeObject");dn=i(e=>fo((0,xt.join)(Sn(e),"reviews.json"),{})||{},"reviewsOf"),Tu=i((e,t)=>ho((0,xt.join)(Sn(e),"reviews.json"),t),"saveReviews"),Si=i(e=>fo((0,xt.join)(Sn(e),"history.json"),[])||[],"historyOf"),es=i(e=>fo((0,xt.join)(Sn(e),"events.json"),[])||[],"eventsOf"),Au=i((e,t)=>ho((0,xt.join)(Sn(e),"events.json"),t.slice(-Rm)),"saveEvents");i(Lu,"addHistory");i(Cu,"addEvents");ts=i(e=>es(e).filter(t=>!t.sent),"unsentEvents");i(ns,"markSent");Nm=i(e=>{let t=Date.parse(e||"");return Number.isFinite(t)?t:null},"ms");i(Ti,"diffReviews");i(Qr,"ev");i(Mu,"diffCard");ot=i(()=>Ae().tg||{},"tgState");i(dt,"setTgState");i(go,"tgPublic");i(Ru,"setAiReport");Du=i(e=>(Ae().ai||{})[e]||null,"aiReport");i(Eu,"publicState")});function bo(e){let t=String(e||"").trim();if(!t)return null;let n=t.match(/(?:https?:\/\/)?(go\.2gis\.com\/[A-Za-z0-9_-]+)/i);if(n)return{short:"https://"+n[1]};let r=t.match(/(?:https?:\/\/)?((?:[a-z]+\.)?2gis\.([a-z]{2,3}))((?:\/[a-z0-9_-]+)*?)\/firm\/(\d{6,20})/i);if(!r)return null;let s=r[1].toLowerCase().replace(/^www\./,""),o=r[2].toLowerCase(),a=(r[3]||"").split("/").filter(d=>d&&!/^(search|geo|tab|branches)$/i.test(d)).pop()||"",l=r[4];return{id:l,host:s,city:a,locale:jm(o),url:"https://"+s+(a?"/"+a:"")+"/firm/"+l}}function jm(e){return{kz:"ru_KZ",ru:"ru_RU",kg:"ru_KG",uz:"ru_UZ",by:"ru_BY",am:"ru_AM",az:"ru_AZ",ge:"ru_GE"}[e]||"ru_KZ"}function Om(e){let t="";for(let n=0;n<e.length;n++){let r=e[n];if(r!=="\\"){t+=r;continue}let s=e[++n];if(s===void 0)break;s==="n"?t+=`
`:s==="r"?t+="\r":s==="t"?t+="	":s==="b"?t+="\b":s==="f"?t+="\f":s==="v"?t+="\v":s==="0"&&!/[0-9]/.test(e[n+1]||"")?t+="\0":s==="x"&&/^[0-9a-fA-F]{2}$/.test(e.slice(n+1,n+3))?(t+=String.fromCharCode(parseInt(e.slice(n+1,n+3),16)),n+=2):s==="u"&&/^[0-9a-fA-F]{4}$/.test(e.slice(n+1,n+5))?(t+=String.fromCharCode(parseInt(e.slice(n+1,n+5),16)),n+=4):s==="\r"&&e[n+1]===`
`?n++:s===`
`||s==="\r"||(t+=s)}return t}function Pu(e,t){let n=String(e||""),s=new RegExp("var\\s+"+t.replace(/[$]/g,"\\$")+"\\s*=\\s*JSON\\.parse\\('").exec(n);if(!s)return null;let o=s.index+s[0].length,a=o;for(;a<n.length;){if(n[a]==="\\"){a+=2;continue}if(n[a]==="'")break;a++}if(a>=n.length)return null;try{return JSON.parse(Om(n.slice(o,a)))}catch{return null}}function zm(e,t){let n=e&&e.data&&e.data.entity&&e.data.entity.profile&&e.data.entity.profile[t]&&e.data.entity.profile[t].data;if(n&&String(n.id||"").split("_")[0]===t)return n;let r=null,s=i((o,a)=>{if(!(r||!o||typeof o!="object"||a>25)){if(String(o.id||"").split("_")[0]===t&&o.reviews&&typeof o.reviews=="object"&&"general_rating"in o.reviews){r=o;return}for(let l in o)s(o[l],a+1)}},"walk");return s(e,0),r}function Im(e,t){let n=String(e||"");if(/captcha\.2gis/i.test(n))return"капча 2ГИС (проверка «вы не робот»)";if(/\/museum\b/i.test(n))return"2ГИС посчитал браузер устаревшим (страница «музей»)";let r=String(t||"").slice(0,2e4);return/captcha/i.test(r)&&!/initialState/.test(r)?"капча 2ГИС (проверка «вы не робот»)":""}function Nu(e,t,n=""){let r=Im(n,e);if(r)return{ok:!1,why:r};let s=Pu(e,"__customcfg"),o=Pu(e,"initialState");if(!o)return{ok:!1,why:"на странице нет данных карточки — 2ГИС поменял устройство страницы или не отдал её целиком"};let a=zm(o,String(t));if(!a)return{ok:!1,why:"на странице нет карточки с номером "+t+" — возможно, фирма закрыта или ссылка ведёт на другую"};let l=a.reviews||{},d=(String(e).match(/<title>([^<]*)<\/title>/)||[])[1]||"",c=(a.rubrics||[]).find(h=>h&&h.kind==="primary")||(a.rubrics||[])[0];return{ok:!0,id:String(t),name:String(a.name||a.name_ex&&a.name_ex.primary||"").trim(),address:String(a.address_name||"").trim(),category:String(c&&c.name||"").trim(),title:d.replace(/\s+—\s*2ГИС\s*$/,"").trim(),rating:vt(l.general_rating),reviewsCount:vt(l.general_review_count),ratingsCount:vt(l.general_review_count_with_stars),orgId:a.org?String(a.org.id||""):"",orgName:a.org?String(a.org.name||""):"",branchCount:a.org?vt(a.org.branch_count):null,orgRating:vt(l.org_rating),reviewKey:s&&s.reviewApiKey?String(s.reviewApiKey):"",reviewApi:s&&s.reviewApi3Url?String(s.reviewApi3Url):"https://public-api.reviews.2gis.com/3.0/"}}function ju({api:e,id:t,key:n,locale:r="ru_KZ",offset:s=0,limit:o=An}){let a=String(e||"https://public-api.reviews.2gis.com/3.0/").replace(/\/?$/,"/"),l=new URLSearchParams({limit:String(Math.min(An,Math.max(1,o))),offset:String(Math.max(0,s)),is_advertiser:"false",fields:"meta.branch_rating,meta.branch_reviews_count,meta.total_count,reviews.hiding_reason",sort_by:"date_edited",key:String(n||""),locale:r});return a+"branches/"+encodeURIComponent(String(t))+"/reviews?"+l.toString()}function qm(e){if(!e||e.id==null)return null;let t=e.official_answer&&e.official_answer.text?{text:String(e.official_answer.text),date:Li(e.official_answer.date_created)}:null,n=e.user||{};return{id:String(e.id),created:Li(e.date_created),edited:Li(e.date_edited),rating:vt(e.rating),text:String(e.text||"").trim(),author:String(n.name||[n.first_name,n.last_name].filter(Boolean).join(" ")||"").trim(),authorReviews:vt(n.reviews_count),answer:t,rated:e.is_rated!==!1,hidden:!!e.is_hidden,hideReason:e.is_rated===!1||e.is_hidden?String(e.hiding_reason||"").trim():"",likes:vt(e.likes_count)||0,comments:vt(e.comments_count)||0,photos:Array.isArray(e.media)?e.media.length:0,provider:String(e.provider||"2gis")}}function Ou(e){let t=e;if(typeof e=="string")try{t=JSON.parse(e)}catch{return{ok:!1,why:"2ГИС ответил не данными"}}if(!t||typeof t!="object")return{ok:!1,why:"2ГИС ответил пустотой"};if(t.error_code||t.code&&t.code>=400)return{ok:!1,why:t.error_code==="FORBIDDEN"?"ключ к отзывам не подошёл (2ГИС его сменил)":"2ГИС отказал: "+(t.message||t.error_code||t.code),forbidden:t.error_code==="FORBIDDEN"||t.code===403};let n=t.meta||{};return{ok:!0,meta:{rating:vt(n.branch_rating),count:vt(n.branch_reviews_count),total:vt(n.total_count),next:!!n.next_link},reviews:(Array.isArray(t.reviews)?t.reviews:[]).map(qm).filter(Boolean)}}var yo,vt,An,Li,xo=ee(()=>{i(bo,"parseFirmLink");i(jm,"localeOf");yo=i(e=>e&&e.url?e.url+"/tab/reviews":"","reviewsPageUrl");i(Om,"unescapeJs");i(Pu,"jsonVar");vt=i(e=>typeof e=="number"&&Number.isFinite(e)?e:e!=null&&e!==""&&Number.isFinite(+e)?+e:null,"num");i(zm,"findProfile");i(Im,"blockedPage");i(Nu,"parseFirmPage");An=50;i(ju,"reviewsUrl");Li=i(e=>{let t=Date.parse(e);return Number.isFinite(t)?new Date(t).toISOString():null},"iso");i(qm,"normReview");i(Ou,"parseReviews")});function Fm(e=Date.now()){return"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/"+(140+Math.max(0,Math.floor((e-Date.UTC(2025,8,2))/24192e5)))+".0.0.0 Safari/537.36"}async function Ci(e,{tries:t=3}={}){if(Iu)return Iu(e);let n="";for(let r=0;r<t;r++){let s=new AbortController,o=setTimeout(()=>s.abort(),zu);try{let a=await fetch(e,{signal:s.signal,redirect:"follow",headers:{"User-Agent":Fm(),"Accept-Language":"ru-RU,ru;q=0.9",Accept:"text/html,application/json;q=0.9,*/*;q=0.8"}}),l=await a.text();return{ok:a.ok,status:a.status,text:l,url:a.url||e}}catch(a){if(n=a&&a.name==="AbortError"?"2ГИС не ответил за "+Math.round(zu/1e3)+" с":Tr(a),!Um(n+" "+String(a&&a.cause&&a.cause.code)))break;await Ri(2e3*(r+1))}finally{clearTimeout(o)}}return{ok:!1,status:0,text:"",url:e,err:n}}async function Bu(e){let t=bo(e);if(!t)return null;if(!t.short)return t;let n=await Ci(t.short);return bo(n.url||"")||bo(n.text||"")}async function Di(e,{now:t=Date.now()}={}){let n=Zr(e);if(!n)return{ok:!1,why:"объект не найден"};let r=n.link;_r(e,{lastCheck:t});let s=await Ci(r.url);if(!s.ok&&!s.text)return vo(e,"карточка не открылась: "+(s.err||"HTTP "+s.status));let o=Nu(s.text,r.id,s.url);if(!o.ok){let m=/капча|музей|устаревш/.test(o.why);return vo(e,o.why,m)}let a={rating:o.rating,reviewsCount:o.reviewsCount,ratingsCount:o.ratingsCount,at:t},l=Mu(n.card,a,t);if(_r(e,{name:o.name,address:o.address,category:o.category,title:o.title}),!o.reviewKey)return vo(e,"на странице не нашёлся ключ к отзывам — 2ГИС поменял устройство страницы");let d=dn(e),c=i(async m=>{rs&&await Ri(qu());let g=await Ci(ju({api:o.reviewApi,id:r.id,key:o.reviewKey,locale:r.locale,offset:m}));return!g.ok&&!g.text?{ok:!1,why:"отзывы не открылись: "+(g.err||"HTTP "+g.status)}:Ou(g.text)},"pull"),h=await c(0);if(!h.ok)return vo(e,h.why);let u=Ti(d,h.reviews,{watchFrom:n.watchFrom||0,now:t});d=u.merged,l.push(...u.events);let p={...n.harvest||{done:!1,offset:0}};if(!p.done){let m=Math.max(An,p.offset||0),g=0,w=h.reviews.length,b=h.meta.next;for(p.total=h.meta.total??p.total??null;b&&w>=An&&g<Bm;){let y=await c(m);if(!y.ok){p.err=y.why;break}u=Ti(d,y.reviews,{watchFrom:n.watchFrom||0,now:t}),d=u.merged,l.push(...u.events),g++,m+=An,w=y.reviews.length,b=y.meta.next}p.offset=m,(!b||w<An)&&(p.done=!0,p.doneAt=t,delete p.err)}Tu(e,d),Lu(e,a,t);let f=Cu(e,l);return _r(e,{card:a,lastOk:t,err:"",blockedUntil:0,harvest:p,stored:Object.keys(d).length}),{ok:!0,events:f,stored:Object.keys(d).length}}function vo(e,t,n=!1){return _r(e,{err:t,...n?{blockedUntil:Date.now()+Hm}:{}}),{ok:!1,why:t,blocked:n}}function Hu(e){Mi=typeof e=="function"?e:null}function Pi({reason:e="расписание",now:t=i(()=>Date.now(),"now")}={}){return lr||(lr=(async()=>{let n=Ae(),r=t();n.round={running:!0,startedAt:r,reason:e,done:0,total:n.objects.length};let s=[];for(let o of Tn()){if(o.blockedUntil&&o.blockedUntil>t()){s.push({id:o.id,ok:!1,why:"пауза после отказа 2ГИС до "+new Date(o.blockedUntil).toLocaleTimeString("ru-RU")});continue}let a;try{a=await Di(o.id,{now:t()})}catch(l){a={ok:!1,why:String(l&&l.message||l)}}if(s.push({id:o.id,...a}),n.round.done++,a.blocked)break;rs&&await Ri(qu())}n.lastRound={at:r,ms:t()-r,reason:e,results:s.map(o=>({id:o.id,ok:o.ok,why:o.why||"",events:o.events||0}))},n.round=null,wu();try{Mi&&await Mi()}catch{}return n.lastRound})().finally(()=>{lr=null;try{let n=Ae();n.round=null}catch{}}),lr)}function Gm(e,t=Date.now()){if(!e||!e.unlocked||!e.schedule||e.schedule.mode!=="minutes"||!e.objects||!e.objects.length)return!1;let n=Math.max(po,+e.schedule.everyMinutes||30)*60*1e3,r=e.lastRound&&e.lastRound.at||0;return t-r>=n}function Fu(){setInterval(()=>{try{Gm(Ae())&&Pi()}catch{}},60*1e3)}var Bm,zu,rs,Hm,Ri,qu,Iu,Um,lr,Mi,Ei,Ni=ee(()=>{wo();xo();Bn();Bm=30,zu=2e4,rs=typeof process<"u"&&process.env&&process.env.MC_GIS_PAUSE_MS!=null?Math.max(0,+process.env.MC_GIS_PAUSE_MS):1800,Hm=3600*1e3,Ri=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),qu=i(()=>rs?rs+Math.floor(Math.random()*rs*.6):0,"jitter");i(Fm,"userAgent");Iu=null,Um=i(e=>/ECONNRESET|ECONNABORTED|UND_ERR_SOCKET|UND_ERR_CONNECT_TIMEOUT|ETIMEDOUT|socket hang up|other side closed|не удалось соединиться|оборвал/i.test(String(e)),"isReset");i(Ci,"get");i(Bu,"resolveLink");i(Di,"checkObject");i(vo,"fail");lr=null,Mi=null;i(Hu,"setNotifier");Ei=i(()=>!!lr,"roundRunning");i(Pi,"runRound");i(Gm,"isDue");i(Fu,"startPlacesScheduler")});function ko(e){if(!e)return"";for(let t of nn())if(Ke(t.id).token===e)return t.id;return""}async function Uu(){let e=ot();if(!e.token)return null;let t=ko(e.token);if(t!==(e.borrowed||"")&&dt({borrowed:t}),t){try{await vn(t)}catch{}let s=Ke(t);return{token:e.token,chats:s.chats||[],owners:s.owners||[],pid:t}}let n=await to(e.token,e);dt({chats:n.chats,offset:n.offset,err:n.err||""}),n.events&&n.events.length&&await Gu(n.events);let r=ot();return{token:r.token,chats:r.chats||[],owners:r.owners||[],pid:""}}function Wm(e,t){let n="<b>"+K(t.name||t.title||"Фирма")+"</b>"+(t.address?" · "+K(t.address):""),r=e.review||{},s=[r.author,_t(r.edited||r.created)].filter(Boolean).map(K).join(" · "),o=yo(t.link),a="",l="";if(e.kind==="new")a=(r.rating<=2?"🔴":r.rating===3?"🟡":"🟢")+" Новый отзыв "+dr(r.rating),l=r.text?"<i>"+K(Ln(r.text,900))+"</i>":"<i>(без текста)</i>";else if(e.kind==="rating")a="✏️ Автор изменил оценку: "+dr(e.from)+" → "+dr(r.rating),l=r.text?"<i>"+K(Ln(r.text,700))+"</i>":"";else if(e.kind==="edited")a="✏️ Автор исправил отзыв "+dr(r.rating),l="<i>"+K(Ln(r.text,700))+"</i>";else if(e.kind==="answer")a="💬 Фирма ответила на отзыв "+dr(r.rating),l=(r.text?"Отзыв: <i>"+K(Ln(r.text,300))+`</i>
`:"")+"Ответ: <i>"+K(Ln(r.answer&&r.answer.text,500))+"</i>";else if(e.kind==="unrated")a="🚫 2ГИС не учитывает отзыв в рейтинге "+dr(r.rating),l=(r.text?"<i>"+K(Ln(r.text,300))+`</i>
`:"")+(r.hideReason?"Причина: "+K(Ln(r.hideReason,400)):"");else if(e.kind==="card"){let d=e.from||{},c=e.to||{},h=[];d.rating!==c.rating&&h.push("рейтинг "+d.rating+" → <b>"+c.rating+"</b>"),d.reviewsCount!==c.reviewsCount&&h.push("отзывов "+d.reviewsCount+" → "+c.reviewsCount),d.ratingsCount!==c.ratingsCount&&h.push("оценок "+d.ratingsCount+" → "+c.ratingsCount),a="📊 Изменилась карточка: "+h.join(" · ");let u=[];e.silentVotes&&u.push("оценок без текста: +"+e.silentVotes),e.lostReviews&&u.push("отзывов стало меньше на "+e.lostReviews+" — похоже, часть удалили или скрыли"),l=u.join(`
`)}return[a,n,e.kind==="card"?"":s,l,o,"<i>"+zi+"</i>"].filter(Boolean).join(`
`)}async function So(){if(ji)return{sent:0,skipped:"уже идёт отправка"};let e=ot();if(!e.enabled||!e.token)return{sent:0,skipped:"бот выключен"};ji=!0;try{let t=await Uu();if(!t)return{sent:0,skipped:"нет токена"};let n=[];for(let d of t.chats)n.push({...d,access:(await rr({token:t.token,owners:t.owners},d)).ok?"ok":"no"});t.pid||dt({chats:n});let r=n.filter(d=>d.access==="ok");if(!r.length)return{sent:0,skipped:t.owners.length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let s=Ae().notify&&Ae().notify.answers!==!1,o=0,a=Km;for(let d of Tn()){let c=ts(d.id),h=c.filter(f=>f.kind==="answer"&&!s).map(f=>f.key);h.length&&ns(d.id,h);let u=c.filter(f=>!(f.kind==="answer"&&!s)).slice(0,a),p=[];for(let f of u){let m=Wm(f,d),g=!1;for(let w of r){let b=await bt(t.token,"sendMessage",{chat_id:w.id,text:m,parse_mode:"HTML",disable_web_page_preview:!0});b.ok?g=!0:dt({err:b.err})}g&&(p.push(f.key),o++),Kr&&await $m(Kr)}if(ns(d.id,p),a-=u.length,a<=0)break}let l=ot();return dt({sentTotal:(l.sentTotal||0)+o,lastSentAt:Date.now(),...o?{err:""}:{}}),{sent:o,chats:r.length}}catch(t){return dt({err:String(t&&t.message||t)}),{sent:0,err:String(t&&t.message||t)}}finally{ji=!1}}async function Cn(e,t){let n=ot();return bt(n.token,"sendMessage",{chat_id:e,text:t,parse_mode:"HTML",disable_web_page_preview:!0})}async function Gu(e,t=Date.now()){for(let n of e||[])try{if(n.kind!=="msg")continue;let r=String(n.text||"").trim().match(/^\/([a-z]+)(?:@\S+)?\s*(.*)$/i);if(!r)continue;let s=r[1].toLowerCase(),o=r[2].trim(),a=ot();if(s==="iam"){if(n.chat.type!=="private"){dt({ownerCode:String(Math.floor(1e5+Math.random()*9e5))}),await Cn(n.chat.id,"Код отправляют в <b>личные сообщения</b>. Этот код я уже заменил — новый в кабинете.");continue}let d=String(n.from.id),c=Oi.get(d)||{n:0,at:t};if(t-c.at>3600*1e3&&(c.n=0,c.at=t),c.n>=5){await Cn(n.chat.id,"Слишком много неверных кодов. Попробуйте через час.");continue}if(!o||o!==String(a.ownerCode||"")){c.n++,Oi.set(d,c),await Cn(n.chat.id,"Код не подошёл. Он в кабинете, в разделе «Мониторинг репутации».");continue}let h=[n.from.first_name,n.from.last_name].filter(Boolean).join(" ")||(n.from.username?"@"+n.from.username:d);dt({owners:(a.owners||[]).filter(u=>String(u.id)!==d).concat([{id:n.from.id,name:h}])}),Oi.delete(d),await Cn(n.chat.id,"Готово: вы владелец бота модуля «"+zi+"». Новые отзывы и изменения рейтинга будут приходить сюда и в общие чаты, где вы состоите.");continue}if(s==="stop")continue;if(!(await rr(ot(),n.chat,t)).ok){await Cn(n.chat.id,Ym);continue}if(s==="start"||s==="help"){await Cn(n.chat.id,Vm);continue}if(s==="status"){let d=Tn().map(c=>"• <b>"+K(c.name||c.id)+"</b>: "+(c.card?"★ "+c.card.rating+", отзывов "+c.card.reviewsCount+", оценок "+c.card.ratingsCount:"ещё не проверяли")+(c.err?" — ⚠️ "+K(c.err):""));await Cn(n.chat.id,d.length?d.join(`
`):"Объектов пока нет — добавьте их в кабинете.")}}catch{}}function Ku(){setInterval(async()=>{try{let e=ot();if(!mo()||!e.enabled||!e.token||ko(e.token))return;let t=await to(e.token,e);dt({chats:t.chats,offset:t.offset,err:t.err||""}),t.events&&t.events.length&&await Gu(t.events)}catch{}},5e3)}async function $u(){let e=ot();if(!e.token)return{ok:!1,error:"сначала вставьте токен бота"};let t=await nr(e.token);return t.ok?(dt({bot:t.bot,err:""}),await Uu(),{ok:!0}):(dt({err:t.err}),{ok:!1,error:t.err})}var zi,Km,$m,dr,Ln,ji,Oi,Vm,Ym,Ii=ee(()=>{wo();Lt();sr();Ot();xo();zi="Мониторинг репутации",Km=30,$m=i(e=>new Promise(t=>setTimeout(t,e)),"sleep");i(ko,"borrowedFrom");i(Uu,"source");dr=i(e=>e>=1&&e<=5?"★".repeat(e)+"☆".repeat(5-e):"","stars"),Ln=i((e,t)=>(e=String(e||"").replace(/\s+/g," ").trim(),e.length>t?e.slice(0,t-1)+"…":e),"clip");i(Wm,"formatEvent");ji=!1;i(So,"notifyPlaces");Oi=new Map,Vm="Я бот модуля «"+zi+`»: присылаю новые отзывы 2ГИС, изменённые оценки, ответы фирм и изменения рейтинга.
/status — рейтинг и отзывы по всем объектам.`,Ym="Это закрытый бот. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета (раздел «Мониторинг репутации»).";i(Cn,"say");i(Gu,"handleEvents");i(Ku,"startPlacesBotLoop");i($u,"checkPlacesBot")});function Wu(e){if(e.length<5||_m.has(e)||/(ние|тие|вие|сие|ьие)$/.test(e))return null;for(let t of Xm){if(!e.endsWith(t))continue;let n=e.slice(0,-t.length);return n.length<3||Zm.has(n)?null:{stem:n,sure:Vu.includes(t)}}return null}function To(e,{top:t=60,minReviews:n=2}={}){let r=(e||[]).filter(m=>m&&m.text),s=new Map,o=[],a=[],l=new Map,d=i((m,g,w,b=1)=>{let y=s.get(m)||{forms:new Map,docs:new Set};y.forms.set(g,(y.forms.get(g)||0)+b),y.docs.add(w),s.set(m,y)},"add");r.forEach((m,g)=>{let w=ng(m.text);w.forEach((b,y)=>{if(eg.has(b)){(l.get(b)||l.set(b,new Set).get(b)).add(g);return}if(qi.has(w[y+1]||"")||qi.has(w[y+2]||"")||qi.has(w[y-1]||""))return;let A=Wu(b);A&&A.sure?d(A.stem,b,g):A?o.push([g,b,A.stem]):b.length>=5&&a.push([g,b])})});let c=new Map;for(let[m,,g]of o)(c.get(g)||c.set(g,new Set).get(g)).add(m);let h=i(m=>{let g=s.get(m);if(!g)return!1;let w=g.docs.size;return w>=2&&w*10>=(c.get(m)||new Set).size},"confirmed");for(let m of s.values())m.sure=m.docs.size;let u=new Map;for(let m of c.keys())u.set(m,h(m));for(let[m,g,w]of o)u.get(w)&&d(w,g,m);for(let[m,g]of a)for(let w of Qm){if(!g.endsWith(w))continue;let b=g.slice(0,-w.length),y=s.get(b);if(y&&y.sure>=2){d(b,g,m,.5);break}}let p=[],f=i((m,g)=>{if(g.size<n)return;let w=0,b=0;for(let y of g){let A=r[y].rating;A>=4?w++:A!=null&&A<=3&&b++}p.push({word:m,reviews:g.size,pos:w,neg:b,tone:w+b?+((w-b)/(w+b)).toFixed(2):0})},"push");for(let[,m]of s){let g=[...m.forms.entries()].filter(([w])=>{let b=Wu(w);return b&&b.sure}).sort((w,b)=>b[1]-w[1]||w[0].localeCompare(b[0]))[0];f(g?g[0]:[...m.forms.keys()][0],m.docs)}for(let[m,g]of l)f(m,g);return p.sort((m,g)=>g.reviews-m.reviews||m.word.localeCompare(g.word)).slice(0,t)}function Ao(e,t="neg",{top:n=60,minHits:r=3,lift:s=1.5}={}){let o=(e||[]).filter(c=>c&&c.text&&c.rating),a=o.filter(c=>c.rating<=3).length,l=o.length-a;if(!a||!l)return To(o.filter(c=>t==="neg"?c.rating<=3:c.rating>=4),{top:n});let d=t==="neg"?a/o.length:l/o.length;return To(o,{top:1e3,minReviews:r}).map(c=>({...c,hits:t==="neg"?c.neg:c.pos})).filter(c=>c.hits>=r&&c.hits/(c.pos+c.neg)>=Math.min(.95,d*s)).sort((c,h)=>h.hits-c.hits||c.word.localeCompare(h.word)).slice(0,n).map(c=>({...c,reviews:c.hits}))}function Yu(e,{top:t=30}={}){let n=(e||[]).filter(a=>a&&a.rating),r=n.filter(a=>a.rating>=4).length,s=n.length-r,o=n.filter(a=>a.text);return{reviews:n.length,pos:r,neg:s,withText:o.length,praise:Ao(o,"pos",{top:t}),blame:Ao(o,"neg",{top:t})}}var Vu,Jm,Xm,Qm,Zm,_m,eg,qi,tg,ng,Ju=ee(()=>{Vu=["ыми","ого","ому","ый","ий","ая","яя","ое","ые","ие","ых"],Jm=["ими","его","ему","ой","ом","ем","ее","ую","юю","их","им","ым"],Xm=[...Vu,...Jm].sort((e,t)=>t.length-e.length),Qm=["о","а","ы","е"],Zm=new Set("котор так эт сво мо тво наш ваш как кажд друг сам всяк некотор люб ин перв втор трет четверт пят последн следующ прошл мног цел дан одн никак нек чь должн данн".split(" ")),_m=new Set("почему потому поэтому никого никому ничего ничему впервые вообщем всего его ему ней ним ими кого кому чего чему того тому этого этому самого время более менее уже еще также тоже очень стоимость".split(" ")),eg=new Set("жақсы жаман тамаша керемет әдемі дәмді дәмсіз таза лас жылы суық ыстық салқын сапалы сапасыз қымбат арзан жылдам баяу ыңғайлы ыңғайсыз сыпайы дөрекі мейірімді кішіпейіл білікті жайлы жайсыз ұнамды нашар үздік мықты күшті тәтті ащы жұмсақ кең тар жарық қараңғы тыныш шулы көңілді қолайлы сенімді адал жауапты тиімді пайдалы зиянды керексіз ұқыпты ұқыпсыз жедел".split(" ")),qi=new Set(["спасибо","благодарность","благодарю","рахмет","алғыс"]),tg=i(e=>e.toLowerCase().replace(/ё/g,"е"),"norm"),ng=i(e=>tg(String(e||"")).match(/[a-zа-яәғқңөұүһі]+/g)||[],"words");i(Wu,"ruAdj");i(To,"wordCloud");i(Ao,"distinctive");i(Yu,"reputationPicture")});function rg(e){let t=Object.values(dn(e)),n=t.filter(c=>c.rated!==!1&&c.rating),r=[0,0,0,0,0];for(let c of n)r[c.rating-1]++;let s=i(c=>c.length?+(c.reduce((h,u)=>h+u.rating,0)/c.length).toFixed(2):null,"avg"),o=new Map;for(let c of n){let h=c.created?Me(new Date(c.created)).slice(0,7):"";if(!h)continue;let u=o.get(h)||{month:h,count:0,sum:0,neg:0};u.count++,u.sum+=c.rating,c.rating<=2&&u.neg++,o.set(h,u)}let a=[...o.values()].sort((c,h)=>c.month.localeCompare(h.month)).slice(-24).map(c=>({month:c.month,count:c.count,avg:+(c.sum/c.count).toFixed(2),neg:c.neg})),l=Date.now()-30*864e5,d=n.filter(c=>Date.parse(c.created||"")>=l);return{stored:t.length,rated:n.length,unrated:t.length-n.length,answered:t.filter(c=>c.answer).length,dist:r,avgAll:s(n),avg30:s(d),count30:d.length,neg30:d.filter(c=>c.rating<=2).length,months:a}}async function Qu(e,t,n,r,{json:s,readBody:o}){if(n==="/api/places"&&e.method==="GET"){let l=Ae();return l.unlocked?s(t,200,{...Eu(),round:l.round||null,lastRound:l.lastRound||null,roundRunning:Ei()}):s(t,200,{unlocked:!1})}if(n==="/api/places/unlock"&&e.method==="POST"){let l=await o(e);return s(t,200,bu(l.code))}if(!mo())return s(t,403,{error:"модуль закрыт — откройте его кодом администратора"});if(n==="/api/places/lock"&&e.method==="POST")return s(t,200,yu());if(n==="/api/places/objects"&&e.method==="POST"){let l=await o(e),d=await Bu(l.url||"");if(!d||!d.id)return s(t,400,{error:"не похоже на ссылку на карточку фирмы в 2ГИС. Нужна ссылка вида https://2gis.kz/astana/firm/70000001027712418"});let c=ku(d);return c.ok?(Di(d.id).catch(()=>{}),s(t,200,{ok:!0,object:Xu(c.object)})):s(t,400,c)}if(n==="/api/places/check"&&e.method==="POST")return Ei()?s(t,409,{error:"проверка уже идёт"}):(Pi({reason:"вручную"}).catch(()=>{}),s(t,200,{ok:!0}));if(n==="/api/places/schedule"&&e.method==="POST"){let l=await o(e);return s(t,200,{schedule:xu(l)})}if(n==="/api/places/notify"&&e.method==="POST"){let l=await o(e);return s(t,200,{notify:vu({answers:l.answers!==!1})})}if(n==="/api/places/telegram"&&e.method==="POST"){let l=await o(e),d={};if(l.enabled!==void 0&&(d.enabled=!!l.enabled),l.clearToken)Object.assign(d,{token:"",bot:"",chats:[],offset:0,owners:[],err:"",borrowed:""});else if(l.token){let u=String(l.token).trim(),p=ot();d.token=u,u!==p.token&&Object.assign(d,{chats:[],offset:0,bot:"",owners:[],err:"",borrowed:ko(u)})}let c=ot();if(dt(d).enabled&&!c.enabled)for(let u of Tn())ns(u.id,ts(u.id).map(p=>p.key));return s(t,200,{ok:!0,tg:go()})}if(n==="/api/places/telegram/check"&&e.method==="POST"){let l=await $u();return s(t,200,{...l,tg:go(),borrowedName:(()=>{let d=ot().borrowed,c=d&&je(d);return c?c.name:""})()})}if(n==="/api/places/telegram/send"&&e.method==="POST")return s(t,200,await So());let a=n.match(/^\/api\/places\/objects\/(\d{6,20})(?:\/([a-z.]+))?$/);if(a){let l=a[1],d=a[2]||"",c=Zr(l);if(!c)return s(t,404,{error:"объект не найден"});if(d===""&&e.method==="DELETE")return Su(l),s(t,200,{ok:!0});if(d===""&&e.method==="GET")return s(t,200,{object:Xu(c),stats:rg(l),history:Si(l).slice(-500),events:es(l).slice(-200).reverse(),ai:Du(l)});if(d==="reviews"&&e.method==="GET"){let h=(r.searchParams.get("stars")||"").split(",").map(Number).filter(g=>g>=1&&g<=5),u=String(r.searchParams.get("q")||"").trim().toLowerCase(),p=Object.values(dn(l));h.length&&(p=p.filter(g=>h.includes(g.rating))),u&&(p=p.filter(g=>String(g.text||"").toLowerCase().includes(u))),p.sort((g,w)=>String(w.edited||w.created||"").localeCompare(String(g.edited||g.created||"")));let f=Math.max(0,+r.searchParams.get("offset")||0),m=Math.max(1,Math.min(100,+r.searchParams.get("limit")||30));return s(t,200,{total:p.length,reviews:p.slice(f,f+m)})}if(d==="cloud"&&e.method==="GET"){let h=r.searchParams.get("g")||"all",u=Object.values(dn(l)),p=+r.searchParams.get("days")||0;if(p>0){let f=Date.now()-p*864e5;u=u.filter(m=>Date.parse(m.created||"")>=f)}if(h==="picture")return s(t,200,{mode:"picture",...Yu(u,{top:30})});if(h==="pos"||h==="neg"){let f=u.filter(m=>m.rating&&(h==="pos"?m.rating>=4:m.rating<=3));return s(t,200,{reviews:f.length,words:Ao(u,h,{top:60}),mode:"distinctive"})}return s(t,200,{reviews:u.length,words:To(u,{top:60})})}if(d==="ai"&&e.method==="POST"){let h=et(),u=await dd({apiKey:h.geminiKey,model:h.geminiModel,firm:{...c,card:c.card},reviews:Object.values(dn(l))}),p={at:Date.now(),ok:!!u.ok,text:u.ok?u.text:"",err:u.ok?"":u.err||"",model:u.model||h.geminiModel||"",used:u.used||0,total:u.total||0,truncated:!!u.truncated};return Ru(l,p),s(t,u.ok?200:502,p)}if(d==="export.csv"&&e.method==="GET"){let h=Object.values(dn(l)).sort((f,m)=>String(m.created||"").localeCompare(String(f.created||""))),u=i(f=>'"'+String(f??"").replace(/"/g,'""')+'"',"q"),p=[["дата","изменён","оценка","учтён в рейтинге","автор","текст","ответ фирмы","номер отзыва"].map(u).join(",")].concat(h.map(f=>[f.created?Me(new Date(f.created)):"",f.edited?Me(new Date(f.edited)):"",f.rating,f.rated===!1?"нет":"да",f.author,f.text,f.answer?f.answer.text:"",f.id].map(u).join(",")));return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":'attachment; filename="2gis-'+l+'.csv"'}),t.end("\uFEFF"+p.join(`
`))}}return s(t,404,{error:"нет такого метода"})}var Xu,Zu=ee(()=>{wo();Lt();Ni();Ii();Ju();Vs();Ot();xo();i(rg,"objectStats");Xu=i(e=>e&&{id:e.id,url:e.link&&e.link.url,reviewsUrl:yo(e.link),name:e.name,address:e.address,category:e.category,card:e.card,lastCheck:e.lastCheck,lastOk:e.lastOk,err:e.err,harvest:e.harvest,stored:e.stored||0,addedAt:e.addedAt,blockedUntil:e.blockedUntil||0},"publicObject");i(Qu,"handlePlaces")});var _u,Lo,sg,Bi,ep,hb,fb,tp=ee(()=>{_u=require("node:module"),Lo=require("node:path");process.env.PLAYWRIGHT_BROWSERS_PATH||(process.env.PLAYWRIGHT_BROWSERS_PATH=(0,Lo.join)((0,Lo.dirname)(process.execPath),"browsers"));sg=(0,_u.createRequire)(process.execPath),Bi=sg("playwright"),ep=Bi.chromium,hb=Bi.firefox,fb=Bi.webkit});function ze(e,t,n){let r=null;return Promise.race([Promise.resolve(e).catch(()=>n),new Promise(s=>{r=setTimeout(()=>s(n),t)})]).then(s=>(r&&clearTimeout(r),s))}function ss(e,t,n){let r=null,s=new Promise(o=>{r=setTimeout(()=>o(Jt),t)});return Promise.race([e,s]).then(o=>(clearTimeout(r),o===Jt&&n&&Promise.resolve(e).then(n,()=>{}),o),o=>{throw clearTimeout(r),o})}function np(e,t=1){let r=Array.from({length:4},()=>Promise.resolve()),s=new Array(4).fill(0),o=Math.max(1,Math.min(4,t|0)),a={ops:0,busyMs:0,byHost:{},lanes:o},l=i(function(d,c,h,u,p){let f=0;for(let w=1;w<o;w++)s[w]<s[f]&&(f=w);s[f]++;let m=i(async()=>{let w=Date.now();try{return await ze(d(f),c,Jt)}finally{let b=Math.min(Date.now()-w,c);if(a.ops++,a.busyMs+=b,p){let y=a.byHost[p]||(a.byHost[p]={ops:0,ms:0});y.ops++,y.ms+=b}s[f]--}},"run"),g=r[f].then(m,m);return r[f]=g.then(()=>{},()=>{}),g.then(w=>{if(w!==Jt)return w;try{e&&e(u,f)}catch{}return h},()=>h)},"queued");return l.stats=a,l.resetStats=()=>{a.ops=0,a.busyMs=0,a.byHost={},a.lanes=o},l.setLanes=d=>{let c=o;return o=Math.max(1,Math.min(4,d|0||1)),a.lanes=o,{was:c,now:o}},l.lanes=()=>o,l}var Jt,Hi=ee(()=>{Jt=Symbol("hung");i(ze,"cap");i(ss,"capOwn");i(np,"makeQueue")});function rp(){Ui.clear(),Fi.clear()}async function ur(e,t){let n=hr(t);if(!n||!e)return 0;let r=await ze(Promise.resolve().then(()=>e.cookies(t)),5e3,null);return!r||!r.length?0:(Ui.set(n,{at:Date.now(),cookies:r}),r.length)}async function Co(e,t,n=0){let r=hr(t);if(!r||!e)return 0;let s=Ui.get(r);if(!s||Date.now()-s.at>ag)return 0;let o=n+"|"+r+"|"+s.at;if(Fi.has(o))return 0;Fi.add(o);let a=await ze(Promise.resolve().then(()=>e.cookies(t)),5e3,null),l=new Set((a||[]).map(c=>c.name)),d=s.cookies.filter(c=>!l.has(c.name));return d.length?(await ze(Promise.resolve().then(()=>e.addCookies(d)),5e3,null),d.length):0}async function pr(e,t=25e3,n=1500){let r=Date.now();for(;;){let s=await ze(Promise.resolve().then(()=>e.evaluate(()=>({t:document.title||"",b:(document.body&&document.body.innerText||"").slice(0,400),c:!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait, #challenge-form, #turnstile-wrapper")}))),8e3,null);if(!s)return!1;if(!s.c&&!ig.test(s.t+" "+s.b))return!0;if(Date.now()-r>t)return!1;await og(Math.min(n,Math.max(0,t-(Date.now()-r))+50))}}async function Gi(e,t,{gotoMs:n=2e4,challengeMs:r=25e3,deadline:s,lane:o=0,warmNeedMs:a=25e3,warmKeepMs:l=12e3,pollMs:d=1500}={}){let c=s||Date.now()+75e3,h=i(()=>c-Date.now(),"left"),u=(()=>{try{return e.context()}catch{return null}})();await Co(u,t,o);let p=i((b,y)=>Promise.resolve().then(()=>e.goto(b,{waitUntil:"domcontentloaded",timeout:Math.max(3e3,Math.min(y,h()))})).catch(()=>null),"go"),f=i(b=>Promise.resolve().then(()=>e.waitForTimeout(b)).catch(()=>{}),"pause"),m=await p(t,n);if(await f(Math.min(700,Math.max(0,h()))),await pr(e,Math.min(r,h()),d))return await ur(u,t),{passed:!0,resp:m,warmed:!1};let g="";try{let b=new URL(t);(b.pathname!=="/"||b.search)&&(g=b.origin)}catch{}if(!g||h()<a)return{passed:!1,resp:m,warmed:!1};if(await p(g+"/",15e3),!await pr(e,Math.min(r,h()-l),d))return{passed:!1,resp:m,warmed:!0};await ur(u,g+"/"),m=await p(t,15e3);let w=await pr(e,Math.min(r,h()),d);return w&&await ur(u,t),{passed:w,resp:m,warmed:!0}}var og,hr,Ui,Fi,ag,ig,sp=ee(()=>{Hi();og=i(e=>new Promise(t=>setTimeout(t,Math.max(0,e))),"sleep"),hr=i(e=>{try{return new URL(String(e)).host.replace(/^www\./,"")}catch{return""}},"hostOf"),Ui=new Map,Fi=new Set,ag=1200*1e3;i(rp,"jarReset");i(ur,"jarPut");i(Co,"jarPrime");ig=/just a moment|checking your browser|attention required|verifying you are human|подожд[иё]те|проверка браузера|один момент/i;i(pr,"waitOutChallenge");i(Gi,"gotoPast")});var dp={};br(dp,{browserError:()=>mr,browserStats:()=>ug,browserWindows:()=>wg,closeBrowser:()=>$i,closeRunBrowsers:()=>dg,openSocialLogin:()=>Tg,renderFacebook:()=>Lg,renderFetch:()=>yg,renderScrape:()=>bg,renderSiteSearch:()=>vg,resetBrowserStats:()=>pg,setBrowserWindows:()=>gg});async function lg(e,t){let n={headless:!1,viewport:null,args:["--disable-blink-features=AutomationControlled","--no-default-browser-check","--no-first-run"],ignoreDefaultArgs:["--enable-automation"]},r=cg(e,t),s=await ss(ep.launchPersistentContext(r,e?{...n,channel:"chrome"}:n),op,a=>a.close().catch(()=>{}));if(s===Jt)throw new Error("окно не поднялось за "+op/1e3+" с");let o=await ss(s.newPage(),3e4,a=>a.close().catch(()=>{}));if(o===Jt)throw await ze(s.close(),1e4),new Error("браузер не открыл страницу за 30 с");return await ze(o.close(),5e3),s}async function ip(e=0){if(os.get(e))try{await os.get(e)}catch{}if(jt.get(e))return jt.get(e);for(let t of[!0,!1])try{let n=await lg(t,e);return n.on("close",()=>{jt.get(e)===n&&jt.delete(e)}),e===fr&&(Vi=!1),jt.set(e,n),t||console.log("[render] окно "+(e+1)+": channel:chrome не ожил, работаю на встроенном Chromium"),n}catch(n){Mo=(t?"Chrome: ":"Chromium: ")+String(n&&n.message||n).split(`
`)[0].slice(0,200)}throw new Error("браузер не запустился (ни Chrome, ни встроенный Chromium): "+Mo)}function as(e,t=0){jt.get(t)===e&&jt.delete(t);let n=ze(e.close(),15e3,null).then(()=>new Promise(r=>setTimeout(r,1500))).then(()=>{os.get(t)===n&&os.delete(t)});return os.set(t,n),n}async function $i(e=null){if(e!=null){let t=jt.get(e);t&&await as(t,e);return}await Promise.all([...jt].map(([t,n])=>as(n,t).catch(()=>{})))}async function dg(){await Promise.all([...jt].filter(([e])=>typeof e=="number"||e===fr&&!Vi).map(([e,t])=>as(t,e).catch(()=>{})))}function gg(e){let t=Xt.setLanes(e);if(t.now<t.was)for(let[n]of jt)typeof n=="number"&&n>=t.now&&$i(n).catch(()=>{});return t.now}function bg(e,t={}){return Xt(n=>Mg(e,t,n),fg,{items:[],cf:!1,err:"браузер завис — окно перезапущено"},"рендер",t.host||hr(e))}async function Wi(e=0){let t=null;for(let n=0;n<2&&!t;n++){let r;try{r=await ip(e)}catch{return null}let s=null;try{s=await ss(r.newPage(),3e4,o=>o.close().catch(()=>{}))}catch(o){Mo="страница не открылась: "+String(o&&o.message||o).split(`
`)[0].slice(0,200)}if(!s||s===Jt){await as(r,e);continue}t=s}return t}function yg(e,t={}){return Xt(n=>xg(e,t,n),hg,{ok:!1,err:"браузер завис — окно перезапущено"},"браузер-фетч",t.host||hr(e))}async function xg(e,{timeoutMs:t=2e4,challengeMs:n=25e3,post:r=null}={},s=0){let o=await Wi(s);if(!o)return{ok:!1,err:"браузер не поднялся ("+mr()+")"};try{if(r!=null){let c=new URL(e).origin,h=(()=>{try{return o.context()}catch{return null}})();if(await Co(h,c+"/",s),await o.goto(c+"/",{waitUntil:"domcontentloaded",timeout:t}).catch(()=>null),!await pr(o,n))return{ok:!1,cf:!0,err:"защита сайта не пройдена"};await ur(h,c+"/");let u=new URL(e).pathname+new URL(e).search,p=await ze(o.evaluate(async([m,g])=>{let w=location.origin+m;try{let b=await fetch(w,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:g});return b.ok?{html:await b.text(),url:w}:{err:"HTTP "+b.status+" на "+w}}catch(b){return{err:String(b&&b.message||b)+" ("+w+")"}}},[u,r]),2e4,{err:"браузер не ответил на POST в срок"}),f=p&&p.html||"";return{ok:!!f,html:f,posted:!!f,err:f?null:p&&p.err||"пустой ответ"}}let a=await Gi(o,e,{gotoMs:t,challengeMs:n,lane:s,deadline:Date.now()+75e3}),l=a.resp;if(!a.passed)return{ok:!1,cf:!0,err:"защита сайта не пройдена"+(a.warmed?" (пробовали и через главную)":"")};let d=await ze(o.content(),15e3,"");return{ok:!!d,status:l?l.status():0,html:d||""}}catch(a){return{ok:!1,err:a.message}}finally{await Ro(o)}}function vg(e,t,n={}){return Xt(r=>kg(e,t,n,r),mg,{items:[],cf:!1,note:"браузер завис — окно перезапущено"},"браузер-поиск",n.host||hr(e))}async function kg(e,t,{host:n=""}={},r=0){let s=(Array.isArray(t)?t:[t]).map(u=>String(u||"").trim()).filter(Boolean);if(!s.length)return{items:[],cf:!1,note:"пустой запрос"};let o=await Wi(r);if(!o)return{items:[],cf:!1,note:"браузер не поднялся ("+mr()+")"};let a=[],l=new Set,d=!1,c="",h=(()=>{try{return o.context()}catch{return null}})();try{for(let u=0;u<s.length;u++){if(u===0&&await Co(h,e+"/",r),await o.goto(e+"/",{waitUntil:"domcontentloaded",timeout:2e4}).catch(()=>{}),!await pr(o,u===0?25e3:8e3)){d=!0,c="защита сайта не пройдена";break}u===0&&await ur(h,e+"/");let f=await ze(o.evaluate(ap),8e3,null);if(f||(await ze(o.evaluate(Dg),8e3,null),await o.waitForTimeout(700).catch(()=>{}),f=await ze(o.evaluate(ap),8e3,null)),!f){c="строка поиска не найдена";break}await o.fill(f,s[u]).catch(()=>{}),await o.press(f,"Enter").catch(()=>{}),await ze(o.evaluate(Rg,f),8e3,null),await o.waitForLoadState("domcontentloaded",{timeout:15e3}).catch(()=>{}),await o.waitForTimeout(1800).catch(()=>{});let m=Date.now()+12e3,g=[],w=0;for(;Date.now()<m;){let{items:b,cf:y}=await lp(o,{selectors:null,hostHint:n,google:!1,bing:!1},m);if(y&&(d=!0),b.length>g.length)g=b,w=0;else if(g.length&&(w++,w>=2))break;await o.waitForTimeout(1200).catch(()=>{})}for(let b of g)b.url&&!l.has(b.url)&&(l.add(b.url),a.push(b))}return{items:a,cf:d,note:c}}catch(u){return{items:a,cf:d,note:u.message}}finally{await Ro(o)}}async function cp(){let e;try{e=await ip(fr)}catch{return null}let t=await ss(e.newPage(),3e4,n=>n.close().catch(()=>{}));return!t||t===Jt?(await as(e,fr),null):t}async function Tg(e="https://www.facebook.com/"){let t=await cp();return t?(Vi=!0,await t.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await ze(t.bringToFront(),5e3,null),{ok:!0}):{ok:!1,err:"браузер не поднялся ("+mr()+")"}}function Ag(){let e=i(t=>!!document.querySelector(t),"has");return e('input[name="pass"]')||e("#loginform")||e('[data-testid="royal_login_form"]')}function Lg(e,t={}){return Xt(()=>Cg(e,t),Sg,{ok:!1,chunks:[],err:"браузер завис — окно перезапущено"},"фейсбук","facebook.com")}async function Cg(e,{sinceMs:t=0,maxScrolls:n=3,settleMs:r=3e3}={}){let s=await cp();if(!s)return{ok:!1,chunks:[],err:"браузер не поднялся ("+mr()+")"};let o=[],a=[],l=i(c=>{try{if(!/facebook\.com\/api\/graphql/i.test(c.url()))return;a.push(ze(c.text(),15e3,"").then(h=>{h&&o.push(h)}).catch(()=>{}))}catch{}},"onResp");s.on("response",l);let d=i(async()=>{let c=a.splice(0);c.length&&await Promise.all(c)},"drain");try{if(await s.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await ze(s.evaluate(Ag),8e3,!1))return{ok:!1,chunks:[],needLogin:!0,err:"Фейсбук просит войти — нажмите «Войти в соцсети» и залогиньтесь в открывшемся окне"};let c=0;for(let h=0;;h++){await s.waitForTimeout(r).catch(()=>{}),await d();let{posts:u}=Nr(o.join(`
`)),p=Aa(u);if(p&&p*1e3<t||h>=n)break;await ze(s.evaluate(()=>window.scrollBy(0,document.body.scrollHeight)),8e3,null),c++}return await d(),{ok:o.length>0,chunks:o,scrolls:c,err:o.length?"":"Фейсбук не отдал ленту (страница пустая или изменился её вид)"}}catch(c){return{ok:o.length>0,chunks:o,err:String(c&&c.message||c)}}finally{try{s.off("response",l)}catch{}await d().catch(()=>{}),await Ro(s)}}async function Mg(e,{selectors:t=null,host:n="",google:r=!1,bing:s=!1,loadTimeoutMs:o=2e4,contentTimeoutMs:a=2e4}={},l=0){let d=await Wi(l);if(!d)return{items:[],cf:!1,err:"браузер не поднялся ("+mr()+")"};try{await Gi(d,e,{gotoMs:o,challengeMs:25e3,lane:l,deadline:Date.now()+7e4});let c=Date.now()+a,h=[],u=0,p=!1;for(;Date.now()<c;){let{items:f,cf:m}=await lp(d,{selectors:t,hostHint:n,google:r,bing:s},c);if(p=m,!m&&f.length>h.length)h=f,u=0;else if(h.length&&(u++,u>=2))break;await d.waitForTimeout(1300).catch(()=>{})}return{items:h,cf:p}}catch{return{items:[],cf:!1}}finally{await Ro(d)}}async function lp(e,t,n){let r=[],s=!1,o=[];try{o=e.frames()}catch{return{items:r,cf:s}}for(let l of o){if(Date.now()>n)break;let d=await ze(l.evaluate(Eg,t),8e3,null);d&&(d.cf&&(s=!0),d.items&&(r=r.concat(d.items)))}let a=new Set;return{items:r.filter(l=>l.url&&!a.has(l.url)&&a.add(l.url)),cf:s}}function ap(){let e=[...document.querySelectorAll("input")],t=i(s=>{let o=(s.type||"").toLowerCase();if(o&&!["search","text",""].includes(o))return-1;let a=((s.name||"")+" "+(s.id||"")+" "+(s.placeholder||"")+" "+(s.className||"")+" "+(s.getAttribute("aria-label")||"")).toLowerCase();if(/e-?mail|mail|subscribe|подпис|рассыл|comment|коммент|phone|тел|promo|coupon|login|логин|город|city/.test(a))return-1;let l=0;o==="search"&&(l+=5),/(^|[^a-zа-я])(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)([^a-zа-я]|$)/.test(a)&&(l+=4),/поиск|search|найти|іздеу|искать|издеу/.test(a)&&(l+=3);let d=s.form;if(d){let h=((d.getAttribute("action")||"")+" "+(d.className||"")+" "+(d.getAttribute("role")||"")).toLowerCase();(/search|поиск|[?&](q|s|query)=/.test(h)||d.getAttribute("role")==="search")&&(l+=4)}let c=s.getBoundingClientRect();return c.width>40&&c.height>8&&(l+=2),l},"score"),n=null,r=0;for(let s of e){let o=t(s);o>r&&(r=o,n=s)}return!n||r<4?null:n.id?"#"+(window.CSS&&CSS.escape?CSS.escape(n.id):n.id):n.name?'input[name="'+String(n.name).replace(/"/g,'\\"')+'"]':null}function Rg(e){let t=document.querySelector(e);if(!t)return!1;let n=t.form||t.closest&&t.closest("form");if(n){let r=n.querySelector('button[type="submit"],input[type="submit"],button:not([type])');if(r)try{return r.click(),!0}catch{}try{return n.requestSubmit?n.requestSubmit():n.submit(),!0}catch{}}return!1}function Dg(){let e=document.querySelector('[aria-label*="поиск" i],[aria-label*="search" i],[title*="поиск" i],[title*="search" i],button[class*="search" i],a[class*="search" i],[class*="search-toggle" i],[class*="header-search" i],[class*="search-btn" i]');if(e)try{return e.click(),!0}catch{}return!1}function Eg({selectors:e,hostHint:t,google:n,bing:r}){let s=(document.title||"").toLowerCase(),o=(document.body&&document.body.innerText||"").slice(0,3e3).toLowerCase(),a=/just a moment|checking your browser|attention required|verifying you are human|cloudflare/.test(s+" "+o)||!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait");try{window.scrollTo(0,document.body.scrollHeight)}catch{}let l=i(g=>{try{return new URL(g,location.href).href}catch{return null}},"abs"),d=/(^|\.)(google|gstatic|googleapis|googletagmanager|googlesyndication|doubleclick|facebook|twitter|x\.com|instagram|youtube|vk\.com|t\.me|mc\.yandex)\./i,c=i(g=>{let w=l(g);if(!w)return null;let b;try{b=new URL(w).host}catch{return null}if(!d.test(b))return w.split("#")[0];let A=decodeURIComponent(g).match(/https?:\/\/[^\s"'&<>]+/g)||[];for(let v of A)try{let T=new URL(v).host.replace(/^www\./,"");if(!d.test(T)&&(!t||T===t||T.endsWith("."+t)))return v.split("#")[0]}catch{}return null},"realUrl"),h=/(\d+\s*(?:second|sec|minute|min|hour|hr|day|week|month|year)s?\s*ago|\d+\s*(?:секунд|минут|час|дн|день|недел|месяц|год|лет)[а-я]*\s*назад|yesterday|today|вчера|сегодня|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{0,4}|\d{1,2}\s+(?:янв|фев|мар|апр|ма[йя]|июн|июл|авг|сен|окт|ноя|дек)[а-я]*\.?\s*\d{2,4}(?:\s*(?:года|г\.))?|\d{1,2}\.\d{1,2}\.\d{4})/i,u=i(g=>{let w=(g||"").match(h);return w?w[0]:""},"findDate"),p=i(g=>(g||"").replace(h,"").replace(/\s+/g," ").trim().slice(0,200),"cleanTitle"),f=[];if(r){document.querySelectorAll("li.b_algo").forEach(w=>{let b=w.querySelector("h2 a[href]")||w.querySelector("a[href]");if(!b||!b.href)return;let y=(b.textContent||"").replace(/\s+/g," ").trim(),A=w.querySelector(".b_caption p")||w.querySelector("p"),v=A?(A.textContent||"").replace(/\s+/g," ").trim():"";f.push({url:b.href,title:y,date:"",snippet:v.slice(0,400)})});let g=new Set;return{cf:a,items:f.filter(w=>w.url&&!g.has(w.url)&&g.add(w.url))}}if(n){document.querySelectorAll("a[href] h3, h3 a[href]").forEach(w=>{let b=w.tagName==="H3"?w:w.closest("h3"),y=b?b.closest("a[href]")||b.querySelector&&b.querySelector("a[href]"):null;if(!b||!y)return;let A=c(y.getAttribute("href"));if(!A)return;let v=(b.textContent||"").replace(/\s+/g," ").trim();if(v.length<8)return;let T=y.closest("div.g, div[data-hveid], div[data-rpos], div[jscontroller]")||y.parentElement,k=T&&T.innerText||"",S=k.replace(/\s+/g," ").trim(),M=S.indexOf(v);M>=0&&(S=(S.slice(0,M)+" "+S.slice(M+v.length)).trim()),f.push({url:A,title:v,date:u(k),snippet:S.slice(0,300)})});let g=new Set;return{cf:a,items:f.filter(w=>w.url&&!g.has(w.url)&&g.add(w.url))}}if(e&&e.container)document.querySelectorAll(e.container).forEach(g=>{let w=e.link&&g.querySelector(e.link)||(g.matches&&g.matches("a[href]")?g:g.querySelector("a[href]")),b=w&&w.getAttribute("href");if(!b)return;let y=c(b);if(!y)return;let A=e.title&&g.querySelector(e.title)||w,v=e.date?g.querySelector(e.date):g.querySelector("time"),T=v&&(v.getAttribute&&v.getAttribute("datetime")||v.textContent)||"";T||(T=u(g.innerText)),f.push({url:y,title:p(A&&A.textContent),date:(T||"").trim(),snippet:(g.innerText||"").slice(0,300)})});else{let g=[...document.querySelectorAll("a[href]")].filter(T=>(T.textContent||"").trim().length>20),w={};for(let T of g){let k=T;for(let S=0;S<6&&k.parentElement;S++){k=k.parentElement;let M=k.className&&typeof k.className=="string"?k.className.trim().split(/\s+/)[0]:"";M&&(w[M]=w[M]||new Set).add(k)}}let b=null,y=2;for(let T in w)w[T].size>y&&(y=w[T].size,b=T);let A=null;if(b)try{A=[...document.querySelectorAll("."+CSS.escape(b))]}catch{}let v=i((T,k)=>{let S=c(k.getAttribute("href"));if(!S)return;let M;try{M=new URL(S)}catch{return}if(M.protocol!=="http:"&&M.protocol!=="https:")return;let N=(k.textContent||"").trim();if(N.length<=20)return;let V=T||k.parentElement,H=V&&V.querySelector("time"),j=H&&(H.getAttribute("datetime")||H.textContent)||"";j||(j=u(V&&V.innerText)),f.push({url:S,title:p(N),date:(j||"").trim(),snippet:(V&&V.innerText||N).slice(0,300)})},"pushFrom");if(A&&A.length>=3)for(let T of A){let k=T.querySelector("a[href]");k&&v(T,k)}document.querySelectorAll("a[href]").forEach(T=>{if((T.textContent||"").trim().length<=25)return;let k=T.closest('article, li, [class*="result"], [class*="card"], [class*="item"], .gsc-webResult, .b-serp-item')||T.parentElement;v(k,T)})}let m=new Set;return{cf:a,items:f.filter(g=>g.url&&!m.has(g.url)&&m.add(g.url))}}var jt,os,Mo,op,cg,mr,ug,pg,hg,fg,mg,Ki,Xt,wg,Ro,fr,Sg,Vi,up=ee(()=>{tp();ht();Hi();sp();jr();jt=new Map,os=new Map,Mo="",op=6e4,cg=i((e,t)=>{let n=e?No:jo;return typeof t=="string"?n+"-"+t:t?n+"-"+(t+1):n},"profileDir");i(lg,"tryLaunch");i(ip,"context");i(as,"dropContext");i($i,"closeBrowser");i(dg,"closeRunBrowsers");mr=i(()=>Mo||"причина неизвестна","browserError"),ug=i(()=>({...Xt.stats,byHost:{...Xt.stats.byHost}}),"browserStats"),pg=i(()=>{rp(),Xt.resetStats()},"resetBrowserStats"),hg=9e4,fg=12e4,mg=12e4,Ki=[],Xt=np((e,t=0)=>{let n=e==="фейсбук"?fr:t;console.log("[render] окно "+(n===fr?"соцсетей":n+1)+", "+e+": браузер не ответил в срок — перезапускаю"),Ki[t]||(Ki[t]=$i(n).catch(()=>{}).then(()=>{Ki[t]=null}))},2);i(gg,"setBrowserWindows");wg=i(()=>Xt.lanes(),"browserWindows");i(bg,"renderScrape");i(Wi,"openPage");Ro=i(e=>ze(e.close().catch(()=>{}),5e3),"shut");i(yg,"renderFetch");i(xg,"_renderFetch");i(vg,"renderSiteSearch");i(kg,"_renderSiteSearch");fr="social",Sg=18e4,Vi=!1;i(cp,"socialPage");i(Tg,"openSocialLogin");i(Ag,"fbLoginProbe");i(Lg,"renderFacebook");i(Cg,"_facebook");i(Mg,"_render");i(lp,"scrapeFrames");i(ap,"findSearchSelector");i(Rg,"submitSearchForm");i(Dg,"clickSearchToggle");i(Eg,"pageScrape")});var jg={};async function Pg(){try{let e=await Promise.resolve().then(()=>(up(),dp));qc(e.renderScrape),Fc(e.renderFetch),Uc(e.renderSiteSearch),Yl(e.browserStats,e.resetBrowserStats),Jl(e.closeRunBrowsers),Xl(e.renderFacebook),Xi=e.openSocialLogin,Ji=e.setBrowserWindows,wp(),bp=!0,console.log("[Playwright: podklyuchyon — JS-sayty, brauzer-fetch i poisk sayta dostupny]")}catch{console.log("[Playwright: ne ustanovlen — tolko lyogkie kanaly. Zapusti setup-windows.bat]")}}var pp,hp,fp,mp,gp,ay,Yi,Ji,wp,Xi,bp,z,Ut,Ng,yp=ee(()=>{pp=En(require("node:http"),1),hp=En(require("node:dns"),1),fp=En(require("node:os"),1),mp=require("node:url"),gp=require("node:path");Bn();Lt();Br();Ld();Hr();Fr();qa();Gr();Vs();Jn();_s();Ga();Id();qo();Is();Ud();sr();Kd();_d();$r();ii();di();ui();hu();Zu();Ni();Ii();try{hp.default.setDefaultResultOrder("ipv4first")}catch{}ay=(0,gp.dirname)((0,mp.fileURLToPath)(__mcFileUrl)),Yi=process.env.PORT||8787,Ji=null,wp=i(()=>{if(!Ji)return;let e=Math.max(1,Math.min(4,+et().browserWindows||2));try{Ji(e)}catch{}},"applyBrowserWindows"),Xi=null,bp=!1;i(Pg,"initRenderer");z=i((e,t,n)=>{e.writeHead(t,{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),e.end(JSON.stringify(n))},"json"),Ut=i(e=>new Promise(t=>{let n="";e.on("data",r=>n+=r),e.on("end",()=>{try{t(JSON.parse(n||"{}"))}catch{t({})}})}),"readBody"),Ng=pp.default.createServer(async(e,t)=>{let n=new URL(e.url,"http://x"),r=n.pathname;if(e.method==="GET"&&(r==="/"||r==="/index.html"))try{return t.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),t.end(io())}catch{return t.writeHead(500),t.end("ui.html не найден")}if(!r.startsWith("/api/"))return t.writeHead(404),t.end("not found");let s=et().password||"";if(r==="/api/me")return z(t,200,{hasPassword:!!s,playwright:bp,hasGeminiKey:!!et().geminiKey,geminiModel:et().geminiModel||"",geminiSnippets:Wa(et()),browserWindows:Math.max(1,Math.min(4,+et().browserWindows||2))});if(r==="/api/quit"&&e.method==="POST"){let o=String(e.socket.remoteAddress||"");if(!(o==="127.0.0.1"||o==="::1"||o==="::ffff:127.0.0.1"))return z(t,403,{error:"выключить программу можно только с этого компьютера"});z(t,200,{ok:!0}),setTimeout(()=>process.exit(0),300);return}if(s&&e.headers["x-mc-key"]!==s)return z(t,401,{error:"нужен пароль"});if(r==="/api/presets")return z(t,200,{sites:Ia,telegram:ed,world:Zl,ru:_l});if(r==="/api/state")return z(t,200,{runs:tr()});try{if(r==="/api/places"||r.startsWith("/api/places/"))return await Qu(e,t,r,n,{json:z,readBody:Ut});if(r==="/api/projects"&&e.method==="GET")return z(t,200,{projects:nn()});if(r==="/api/projects"&&e.method==="POST"){let a=await Ut(e),l=a.config||{};return(!Array.isArray(l.sites)||!l.sites.length)&&(l.sites=Ia.map(d=>d.url)),z(t,200,el(a.name,l))}if(r==="/api/social/login"&&e.method==="POST"){if(!Xi)return z(t,503,{error:"нет браузера: запусти setup-windows.bat"});let a=await Xi();return z(t,a.ok?200:502,a)}if(r==="/api/social/visits"&&e.method==="GET"){let{facebookProfile:a}=await Promise.resolve().then(()=>(jr(),Vl)),l=await Promise.resolve().then(()=>(Ea(),Da));l.reload();let d=(n.searchParams.get("profiles")||"").split(`
`).map(h=>a(h)).filter(Boolean),c=Math.max(1,Math.min(6,+n.searchParams.get("limit")||l.DEFAULT_LIMIT));return z(t,200,{visits:d.map(h=>{let u=l.canVisit(h.label,{limit:c});return{label:h.label,used:u.used,limit:u.limit,ok:u.ok,why:u.why,nextAt:l.nextAt(h.label,{limit:c})}})})}if(r==="/api/license"&&e.method==="GET")return z(t,200,so());if(r==="/api/license"&&e.method==="POST"){let a=await Ut(e);return z(t,200,Sd(a.key||""))}if(r==="/api/code"&&e.method==="GET")return n.searchParams.get("check")?z(t,200,await Io({force:!0})):z(t,200,it());if(r==="/api/code/drop"&&e.method==="POST")return z(t,200,cc());if(r==="/api/update"&&e.method==="GET")return n.searchParams.get("check")?z(t,200,await oi({force:!0})):z(t,200,Wr());if(r==="/api/update/download"&&e.method==="POST"){let a=await Od();return z(t,a.ok?200:502,{...a,state:Wr()})}if(r==="/api/update/install"&&e.method==="POST"){let a=String(e.socket.remoteAddress||"");if(!(a==="127.0.0.1"||a==="::1"||a==="::ffff:127.0.0.1"))return z(t,403,{error:"обновить можно только с этого компьютера"});let l=zd({busy:tt.size>0});if(!l.ok)return z(t,409,l);z(t,200,l),setTimeout(()=>process.exit(0),1500);return}if(r==="/api/settings"&&e.method==="POST"){let a=await Ut(e);return _c(a||{}),wp(),z(t,200,{ok:!0})}if(r==="/api/gemini/models"&&e.method==="GET"){let a=et().geminiKey||"",l=await od({apiKey:a});return z(t,200,{...l,chain:Fa(et().geminiModel||"")})}let o=r.match(/^\/api\/projects\/([^/]+)(?:\/(.+))?$/);if(o){let a=o[1],l=o[2]||"",d=je(a);if(!d&&!(l==="stop"&&e.method==="POST"&&Ql(a)))return z(t,404,{error:"проект не найден"});if(l===""&&e.method==="GET")return z(t,200,d);if(l===""&&e.method==="PUT"){let p=await Ut(e);return z(t,200,tl(a,p))}if(l===""&&e.method==="DELETE")return nl(a),z(t,200,{ok:!0});if(l==="read"&&e.method==="POST")return rl(a),z(t,200,{ok:!0});if(l==="telegram"&&e.method==="POST"){let p=await Ut(e),f={};if(p.enabled!==void 0&&(f.enabled=!!p.enabled),p.clearToken)f.token="",f.bot="",f.chats=[],f.offset=0,f.err="";else if(p.token){let b=String(p.token).trim(),y=Ke(a);f.token=b,b!==y.token&&(f.chats=[],f.offset=0,f.bot="",f.err="")}let m=Ke(a),g=lt(a,f),w=0;return g.enabled&&!m.enabled&&(w=cl(a)),z(t,200,{ok:!0,tg:Lr(a),muted:w})}if(l==="telegram/resend"&&e.method==="POST"){let p=await Ut(e),f=Cr(a),m=String(p.ts||f[0]&&f[0].ts||"");if(!m)return z(t,400,{error:"прогонов ещё не было — присылать нечего"});let g=$n(a,m);if(!g)return z(t,404,{error:"архив прогона не найден"});let w=(g.rows||[]).map(A=>A.url).filter(Boolean),b=ll(a,w),y=await an(a,{});return z(t,200,{ok:!0,ts:m,rows:w.length,freed:b,sent:y.sent||0,rest:y.rest||0,skipped:y.skipped||""})}if(l==="telegram/check"&&e.method==="POST"){let p=Ke(a);if(!p.token)return z(t,400,{error:"сначала вставьте токен бота"});let f=await nr(p.token);if(!f.ok)return lt(a,{err:f.err}),z(t,200,{ok:!1,error:f.err,tg:Lr(a)});lt(a,{bot:f.bot});let m=await vn(a);return lt(a,{err:m.err||""}),z(t,200,{ok:!0,tg:Lr(a)})}if(l==="export.csv"&&e.method==="GET")return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}.csv"`}),t.end("\uFEFF"+kn(d.items));if(l==="run"&&e.method==="POST"){let p=await co(a,"ручной");return p.code!==200?z(t,p.code,{error:p.error}):z(t,200,{added:p.added,total:p.total,ts:p.ts,log:p.log})}if(l==="stop"&&e.method==="POST"){let p=Hs(a);return z(t,p?200:409,p?{ok:!0}:{error:"этот проект сейчас не собирает"})}if(l==="diagnose"&&e.method==="POST"){let p=await Ut(e),f=String(p.site||"").trim();if(!f)return z(t,400,{error:"не указан сайт"});let m=d.config||{};if(!String(m.keyword||"").trim())return z(t,400,{error:"у проекта не задан запрос"});let g=Wn(m),w=await vs(f,{keyword:m.keyword,exclude:m.exclude||"",morph:m.morph!==!1,from:g.from,to:g.to,diag:!0});return z(t,200,{report:Gd(f,w,g),channel:w.channel,note:w.note,found:w.rows.length,diag:w.diag})}if(l==="items/delete"&&e.method==="POST"){let p=await Ut(e),f=Array.isArray(p.urls)?p.urls.map(g=>String(g||"").trim()).filter(Boolean):[];if(!f.length)return z(t,400,{error:"не выбрано ни одного материала"});let m=ml(a,f);return m?z(t,200,m):z(t,404,{error:"проект не найден"})}if(l==="share.html"&&e.method==="GET"){let p=Hd(a);return p?(t.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Content-Disposition":ci(Fd(p.snap))}),t.end(p.html)):z(t,404,{error:"проект не найден"})}if(l==="analytics"&&e.method==="GET"){let p=n.searchParams.get("days"),f=on(a,{days:p?+p:null});return f?z(t,200,f):z(t,404,{error:"проект не найден"})}if(l==="day"&&e.method==="GET"){let p=n.searchParams.get("d")||"";if(!/^\d{4}-\d{2}-\d{2}$/.test(p))return z(t,400,{error:"день задаётся как ГГГГ-ММ-ДД"});let f=Gs(a,p);return f?z(t,200,{day:p,items:f}):z(t,404,{error:"проект не найден"})}if(l==="gemini"&&e.method==="POST"){let p=et();if(!Dt(d.config||{}).ai)return z(t,403,{error:Yn});if(!p.geminiKey)return z(t,400,{error:"нет ключа Gemini (задайте в настройках)"});let f=await Ut(e),m=on(a,{days:f.days?+f.days:null});if(!m)return z(t,404,{error:"проект не найден"});let g=Ka.includes(f.kind)?f.kind:"summary";if(g==="verify"&&!Ys(d.schedule))return z(t,403,{error:Js(d.schedule)});let w=(d.items||[]).filter(T=>T&&T.title&&T.rel!=="-"),b=null,y,A=g==="sentiment"||g==="verify";if(A)y=await Va(a,{kind:g,days:f.days?+f.days:null,analytics:m,settings:p,rescore:!!f.rescore});else{b=[];let T=new Set;for(;b.length<Math.min(60,w.length);){let k=w[Math.floor(Math.random()*w.length)];T.has(k.url||k.title)||(T.add(k.url||k.title),b.push({title:k.title,url:k.url,source:k.source,date:k.date,sent:k.sent||""}))}y=await Ws({apiKey:p.geminiKey,model:p.geminiModel,analytics:m,sampleTitles:$a(b),kind:g})}let v=A?y.ok?y.items:null:y.ok?Qs(b,y.marks):null;return Ls(a,g,{at:Date.now(),runTs:null,window:m.overview.windowFrom+" … "+m.overview.windowTo,text:y.ok?y.text:"",model:y.model||p.geminiModel||"",err:y.ok?"":y.err||"",auto:!1,items:v}),z(t,y.ok?200:502,y.ok?{...y,items:v,note:g==="sentiment"?Ya(y):g==="verify"?Ja(y):""}:y)}if(l==="usage"&&e.method==="GET"){let p=fl(a),f=0;try{let{statSync:m,existsSync:g}=await import("node:fs"),{join:w}=await import("node:path"),{DATA_ROOT:b}=await Promise.resolve().then(()=>(ht(),nc)),y=w(b,"date-cache.json");g(y)&&(f=m(y).size)}catch{}return z(t,200,{...p,limitMb:ia(d.config),dateCacheBytes:f})}if(l==="report.txt"&&e.method==="GET"){let p=on(a,{days:n.searchParams.get("days")?+n.searchParams.get("days"):null});return p?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(Zd(d.config||{},p))):z(t,404,{error:"проект не найден"})}if(l==="runs"&&e.method==="GET")return z(t,200,{runs:Cr(a)});let c=l.match(/^runs\/([^/]+)\/log\.json$/);if(c&&e.method==="GET"){let p=xl(a,c[1]);return p?(t.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Content-Disposition":ci(`лог ${c[1].slice(0,10)} ${c[1].slice(11,16)} — ${p.проект||a}.json`)}),t.end(JSON.stringify(p,null,2))):z(t,404,{error:"прогон не найден"})}let h=l.match(/^runs\/([^/]+)\/report\.txt$/);if(h&&e.method==="GET"){let p=$n(a,h[1]);return p?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(Qd(d.config||{},p))):z(t,404,{error:"прогон не найден"})}let u=l.match(/^runs\/([^/]+)(\/export\.csv)?$/);if(u&&e.method==="GET"){let p=$n(a,u[1]);return p?u[2]?(t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}-${u[1]}.csv"`}),t.end("\uFEFF"+kn(p.rows))):z(t,200,{...p,logsDir:Hn}):z(t,404,{error:"прогон не найден"})}}return z(t,404,{error:"нет такого метода"})}catch(o){return z(t,500,{error:String(o&&o.message||o)})}});Pg().then(()=>Ng.listen(Yi,"0.0.0.0",()=>{let e=[].concat(...Object.values(fp.default.networkInterfaces())).filter(s=>s.family==="IPv4"&&!s.internal).map(s=>s.address),t="0.5.8",n="04a1719";console.log(`
  mediachrome ${t?t+(n?" ("+n+")":""):"(iz ishodnikov)"}`),console.log(`  Kabinet:        http://localhost:${Yi}`),e.forEach(s=>console.log(`  S telefona:     http://${s}:${Yi}   (v toy zhe Wi-Fi seti)`)),console.log(`  (zakryt — zakroy eto okno)
`),Ad(),pu(),Hu(So),Fu(),Ku();let r=i(()=>{et().updateCheck!==!1&&(oi().catch(()=>{}),Io().catch(()=>{}))},"look");setTimeout(r,2e4),setInterval(r,6*3600*1e3),ac()}))});var xp=require("node:module");qo();var Do="__mcCodeLoaded";(async()=>{if(process.env.MC_EXE_VERSION||(process.env.MC_EXE_VERSION="0.5.8"),!globalThis[Do]){let e=null;try{e=oc()}catch{e=null}if(e){globalThis[Do]=e.version;try{(0,xp.createRequire)(process.execPath)(e.path);return}catch(t){globalThis[Do]="";try{ic(e.version,String(t&&t.message||t))}catch{}console.log(`
  [obnovlenie mehanizmov `+e.version+" ne zagruzilos - rabotaem po vshitomu kodu]"),console.log("  "+String(t&&t.message||t)+`
`)}}}process.env.MC_CODE_RUNNING=globalThis[Do]||"",await Promise.resolve().then(()=>(yp(),jg))})();
