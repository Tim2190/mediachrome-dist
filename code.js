// mediachrome 0.5.5 (84d665c) — собрано автоматически, не править
const __mcFileUrl = require('node:url').pathToFileURL(process.execPath).href;
var Il=Object.create;var rr=Object.defineProperty;var Bl=Object.getOwnPropertyDescriptor;var Hl=Object.getOwnPropertyNames;var Fl=Object.getPrototypeOf,Ul=Object.prototype.hasOwnProperty;var i=(e,t)=>rr(e,"name",{value:t,configurable:!0});var le=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var En=(e,t)=>{for(var n in t)rr(e,n,{get:t[n],enumerable:!0})},Gl=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Hl(t))!Ul.call(e,s)&&s!==n&&rr(e,s,{get:()=>t[s],enumerable:!(r=Bl(t,s))||r.enumerable});return e};var nn=(e,t,n)=>(n=e!=null?Il(Fl(e)):{},Gl(t||!e||!e.__esModule?rr(n,"default",{value:e,enumerable:!0}):n,e));var ga={};En(ga,{DATA_ROOT:()=>be,USERDATA_CHROMIUM_DIR:()=>xs,USERDATA_DIR:()=>ys,migrateLegacyData:()=>ks});function Kl(){if(process.env.MEDIACHROME_DATA)return process.env.MEDIACHROME_DATA;let e=process.env.APPDATA||(ws.default.homedir?ws.default.homedir():ma);return process.env.APPDATA?(0,Nt.join)(e,"mediachrome"):(0,Nt.join)(e,".mediachrome")}function ks(e){try{let t=(0,Nt.join)(ma,"data"),n=(0,Pt.existsSync)((0,Nt.join)(be,"projects"))||(0,Pt.existsSync)((0,Nt.join)(be,"site-memory.json"));if((0,Pt.existsSync)(t)&&!n&&(0,Pt.readdirSync)(t).length)return e(t,be),!0}catch{}return!1}var ws,Nt,Pt,ha,fa,ma,be,ys,xs,wt=le(()=>{ws=nn(require("node:os"),1),Nt=require("node:path"),Pt=require("node:fs"),ha=require("node:url"),fa=require("node:path"),ma=(0,fa.dirname)((0,ha.fileURLToPath)(__mcFileUrl));i(Kl,"resolveRoot");be=Kl(),ys=(0,Nt.join)(be,".userdata"),xs=(0,Nt.join)(be,".userdata-chromium");try{(0,Pt.mkdirSync)(be,{recursive:!0})}catch{}i(ks,"migrateLegacyData")});function or(e,t){let n=i(o=>String(o||"0").split(/[^\d]+/).filter(a=>a!=="").map(Number),"p"),r=n(e),s=n(t);for(let o=0;o<Math.max(r.length,s.length);o++){let a=(r[o]||0)-(s[o]||0);if(a)return a<0?-1:1}return 0}function Xl(e,t){if(!Ft)return{ok:!1,why:"подпись кода не настроена — лёгкие обновления выключены"};let n=(0,rn.createHash)("sha256").update(e).digest("hex");if(t&&t.sha256&&n!==t.sha256)return{ok:!1,why:"файл не совпал с отпечатком из витрины — возможно, скачался не целиком"};let r;try{r=(0,rn.createPublicKey)({key:Buffer.from(Ft,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ"}}let s=!1;try{let o=Buffer.from(String(t&&t.sig||"").replace(/-/g,"+").replace(/_/g,"/"),"base64");s=o.length>0&&(0,rn.verify)(null,e,r,o)}catch{s=!1}return s?{ok:!0,why:"",sha256:n}:{ok:!1,why:"подпись не сошлась — файл не от разработчика или повреждён"}}function wa(e=st()){let t=Ft?e.active:null;if(!t||!t.version||!t.file)return{use:!1,why:"none",version:""};if((e.bad||{})[t.version])return{use:!1,why:"bad",version:t.version};if(!(0,Pe.existsSync)(t.file))return{use:!1,why:"gone",version:t.version};let n=vs();return n&&t.minExe&&or(n,t.minExe)<0?{use:!1,why:"needExe",version:t.version,minExe:t.minExe,exe:n}:n&&or(t.version,n)<=0?{use:!1,why:"stale",version:t.version,exe:n}:{use:!0,why:"",version:t.version,file:t.file,minExe:t.minExe||""}}function ya(){if(!Ft)return null;let e=st(),t=e.active;if(!t||!t.version||!t.file)return null;if(e.pending&&e.pending.version===t.version){let r=e.bad||{};r[t.version]={at:Date.now(),why:"программа не дошла до запуска"};try{(0,Pe.renameSync)(t.file,t.file+".broken")}catch{try{(0,Pe.rmSync)(t.file,{force:!0})}catch{}}return _e({...e,active:null,pending:null,bad:r,lastFail:{version:t.version,at:Date.now()}}),null}let n=wa(e);if(!n.use){if(n.why==="stale"){try{(0,Pe.rmSync)(t.file,{force:!0})}catch{}_e({...e,active:null,pending:null})}else n.why==="gone"&&_e({...e,active:null});return null}return _e({...e,pending:{version:t.version,at:Date.now()}}),{path:t.file,version:t.version}}function xa(){let e=st();if(!e.pending)return;let t=process.env.MC_CODE_RUNNING||"";if(e.pending.version!==t)return;let n=e.okVersions||{};n[e.pending.version]=Date.now(),_e({...e,pending:null,okVersions:n})}function ka(e,t){let n=st(),r=n.bad||{};r[e]={at:Date.now(),why:String(t||"")};let s=n.active;if(s&&s.version===e&&s.file)try{(0,Pe.renameSync)(s.file,s.file+".broken")}catch{try{(0,Pe.rmSync)(s.file,{force:!0})}catch{}}_e({...n,active:null,pending:null,bad:r,lastFail:{version:e,at:Date.now(),why:String(t||"")}})}function $e(){let e=st(),t=Ft?e.active:null,n=wa(e),r=process.env.MC_CODE_RUNNING||"";return{enabled:!!Ft,running:r,exe:vs(),ready:!!(n.use&&n.version!==r),readyVersion:n.use?n.version:"",needExe:n.why==="needExe"?{version:n.version,minExe:n.minExe}:null,notes:t&&t.notes||"",lastFail:e.lastFail||null,checkedAt:e.checkedAt||0,err:e.err||""}}async function Jl(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{signal:t.signal,headers:{"Cache-Control":"no-cache"}});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json()}finally{clearTimeout(n)}}async function Ss(e={}){if(!Ft)return $e();let t=st();if(!e.force&&t.checkedAt&&Date.now()-t.checkedAt<Yl)return $e();let n=null;try{n=await Jl(Wl)}catch(h){return _e({...t,checkedAt:Date.now(),err:String(h&&h.message||h)}),$e()}if(_e({...t,checkedAt:Date.now(),err:""}),!n||!n.version||!n.url)return $e();let r=vs(),s=t.active&&t.active.version||r;if(s&&or(n.version,s)<=0||(t.bad||{})[n.version])return $e();if(r&&n.minExe&&or(r,n.minExe)<0)return _e({...st(),needFull:{version:n.version,minExe:n.minExe}}),$e();let o;try{let h=new AbortController,m=setTimeout(()=>h.abort(),6e4);try{let p=await fetch(n.url,{signal:h.signal});if(!p.ok)throw new Error("HTTP "+p.status);o=Buffer.from(await p.arrayBuffer())}finally{clearTimeout(m)}}catch(h){return _e({...st(),err:String(h&&h.message||h)}),$e()}let a=Xl(o,n);if(!a.ok)return _e({...st(),err:a.why}),$e();try{(0,Pe.mkdirSync)(sr,{recursive:!0})}catch{}let c=(0,ar.join)(sr,"code-"+String(n.version).replace(/[^\w.-]/g,"_")+".js"),u=c+".part";try{(0,Pe.writeFileSync)(u,o),(0,Pe.renameSync)(u,c)}catch(h){try{(0,Pe.rmSync)(u,{force:!0})}catch{}return _e({...st(),err:"не удалось сохранить: "+String(h&&h.message||h)}),$e()}let l=st();if(l.active&&l.active.file&&l.active.file!==c)try{(0,Pe.rmSync)(l.active.file,{force:!0})}catch{}return _e({...l,err:"",active:{version:n.version,file:c,minExe:n.minExe||"",notes:n.notes||"",at:Date.now()}}),$e()}function va(){let e=st();if(e.active&&e.active.file)try{(0,Pe.rmSync)(e.active.file,{force:!0})}catch{}return _e({...e,active:null,pending:null}),$e()}var ar,Pe,rn,Wl,Ft,sr,ba,Yl,Vl,_e,st,vs,Ts=le(()=>{ar=require("node:path"),Pe=require("node:fs"),rn=require("node:crypto");wt();Wl=process.env.MC_CODE_URL||"https://raw.githubusercontent.com/tim2190/mediachrome-dist/main/code.json",Ft="MCowBQYDK2VwAyEArb2DkMY1meiRt6JXIr0unrIjtj5ADfd+D/OVThCAoyg=",sr=(0,ar.join)(be,"code"),ba=(0,ar.join)(sr,"state.json"),Yl=864e5,Vl=i(e=>{try{return JSON.parse((0,Pe.readFileSync)(e,"utf8"))}catch{return null}},"readJson"),_e=i(e=>{try{(0,Pe.mkdirSync)(sr,{recursive:!0})}catch{}try{(0,Pe.writeFileSync)(ba,JSON.stringify(e,null,2))}catch{}},"save"),st=i(()=>Vl(ba)||{},"st0");i(or,"cmpVer");vs=i(()=>process.env.MC_EXE_VERSION||"0.5.5","exeVersion");i(Xl,"verifyBundle");i(wa,"codeVerdict");i(ya,"activeCode");i(xa,"markCodeOk");i(ka,"markCodeBad");i($e,"codeState");i(Jl,"getJson");i(Ss,"checkCode");i(va,"dropCode")});function fe(e){if(!e)return null;let t=String(e).trim();if(!t)return null;let n=t.match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{2}|\d{4})(?!\d)/);if(n&&+n[1]<=31&&+n[2]<=12){let o=n[3].length===2?2e3+ +n[3]:+n[3],a=new Date(o,+n[2]-1,+n[1]);if(!isNaN(a.getTime()))return a}let r=new Date(t);if(!isNaN(r.getTime())&&/\d{4}/.test(t))return r;let s=$l(t);return s||(isNaN(r.getTime())?null:r)}function As(e,t){let n=e.match(/(\d{1,2}):(\d{2})/),r=new Date(t);return n?r.setHours(+n[1],+n[2],0,0):r.setHours(0,0,0,0),r}function $l(e){let t=e.toLowerCase(),n=new Date;if(/только что|just now|moments? ago|сейчас/.test(t))return n;let r=t.match(/(\d+)\s*(секунд|минут|час|дн|день|сутк|недел|месяц|год|лет|сағат|мину?т|күн|тәулік|апта|ай|жыл|second|sec|minute|min|hour|day|week|month|year)[a-zа-яёәөұүқғңһі]*\s*(?:назад|бұрын|ago)/);if(r){let s=+r[1],o=r[2],a=new Date(n);return/секунд|second|sec/.test(o)?a.setSeconds(a.getSeconds()-s):/минут|мину?т|minute|min/.test(o)?a.setMinutes(a.getMinutes()-s):/час|сағат|hour/.test(o)?a.setHours(a.getHours()-s):/дн|день|сутк|күн|тәулік|day/.test(o)?a.setDate(a.getDate()-s):/недел|апта|week/.test(o)?a.setDate(a.getDate()-s*7):/месяц|month/.test(o)||o==="ай"?a.setMonth(a.getMonth()-s):/год|лет|жыл|year/.test(o)&&a.setFullYear(a.getFullYear()-s),a}if(/^вчера|^yesterday|^кеше/.test(t)){let s=new Date(n);return s.setDate(n.getDate()-1),As(t,s)}if(/^сегодня|^today|^бүгін/.test(t))return As(t,n);if(r=t.match(/(\d{1,2})\s+([а-яёәөұүқғңһіА-ЯЁӘӨҰҮҚҒҢҺІ]{3,})\.?\s*(\d{4})?/),r){let s=+r[1],o=r[2].toLowerCase(),a=Zl.findIndex(c=>o.startsWith(c)||c.startsWith(o));if(a<0&&(a=Ql.findIndex(c=>o.startsWith(c)||c.startsWith(o))),a>=0){let c=r[3]?+r[3]:n.getFullYear(),u=new Date(c,a,s),l=As(t,u);return isNaN(l.getTime())?null:l}}return null}function sn(e){if(!e)return null;let t=new Date(e+"T00:00:00");return isNaN(t.getTime())?null:t}function Ve(e){if(!(e instanceof Date)||isNaN(e.getTime()))return null;let t=i(n=>String(n).padStart(2,"0"),"p2");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function ir(e){if(!e)return"";let t=e instanceof Date?e:new Date(e);if(isNaN(t.getTime()))return String(e);let n=i(s=>String(s).padStart(2,"0"),"p2"),r=t.getHours()||t.getMinutes()?" "+n(t.getHours())+":"+n(t.getMinutes()):"";return Ve(t)+r}function zn(e){if(!e)return null;let t=new Date(e+"T23:59:59.999");return isNaN(t.getTime())?null:t}function Fe(e,t,n){let r=e instanceof Date?e:fe(e);return!(!r||t&&r<t||n&&r>n)}var Ql,Zl,Ut=le(()=>{i(fe,"parseDate");Ql=["январ","феврал","март","апрел","ма","июн","июл","август","сентябр","октябр","ноябр","декабр"],Zl=["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"];i(As,"timeFrom");i($l,"parseLoose");i(sn,"startOfDay");i(Ve,"ymd");i(ir,"localStamp");i(zn,"endOfDay");i(Fe,"inRange")});function Ma(e){return/\/wp-content\//.test(e||"")}function Ls(e){let t=[],n=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,r;for(;r=n.exec(e);){let s;try{s=JSON.parse(r[1].trim())}catch{continue}let o=Array.isArray(s)?s:[s];for(let a of o)a&&a["@graph"]&&Array.isArray(a["@graph"])&&t.push(...a["@graph"]),a&&t.push(a)}return t}function Rs(e,t){return e?Array.isArray(e)?e.some(n=>String(n).toLowerCase().includes(t)):String(e).toLowerCase().includes(t):!1}function Tt(e,t){let n=new RegExp(`<meta[^>]+(?:property|name|itemprop)=["']`+Sa+t+`["'][^>]*content=["']([^"']+)["']`,"i"),r=e.match(n);if(r)return r[1];let s=new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name|itemprop)=["']`+Sa+t+`["']`,"i"),o=e.match(s);return o?o[1]:null}function ut(e){if(!e)return e;let t={"&amp;":"&","&quot;":'"',"&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"«","&raquo;":"»","&ndash;":"–","&mdash;":"—","&hellip;":"…","&laquo":"«","&raquo":"»","&rsquo;":"’","&lsquo;":"‘","&rdquo;":"”","&ldquo;":"“"};return e.replace(/&#x27;/gi,"'").replace(/&#0?39;/g,"'").replace(/&(?:amp|quot|apos|lt|gt|nbsp|laquo|raquo|ndash|mdash|hellip|rsquo|lsquo|rdquo|ldquo);/g,n=>t[n]||n).replace(/&#x([0-9a-f]+);/gi,(n,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(n,r)=>String.fromCodePoint(parseInt(r,10)))}function cr(e,t=" "){let n=String(e??""),r="",s=0;for(;;){let o=n.indexOf("<",s);if(o<0){r+=n.slice(s);break}if(r+=n.slice(s,o),!/[a-zA-Z!/?]/.test(n[o+1]||"")){r+="<",s=o+1;continue}let a="",c=!1,u=-1;for(let l=o+1;l<n.length;l++){let h=n[l];if(a){h===a&&(a="");continue}if(h==='"'||h==="'"){c&&(a=h,c=!1);continue}if(h===">"){u=l;break}if(h==="="){c=!0;continue}/\s/.test(h)||(c=!1)}if(u<0){r+=n.slice(o);break}r+=t,s=u+1}return r}function Ca(e,t=" "){return ut(cr(e,t)).replace(/\s+/g," ").trim()}function lr(e){let t=ut(String(e??"").trim());return/<[a-zA-Z!/?]/.test(t)?Ca(t):t}function Ms(e,t=12){let n=String(e||"").toLowerCase().trim();if(!n)return[];if(/^[a-z0-9-]+$/.test(n))return n.length>=4?[n]:[];let r=[""];for(let s of n){let o=_l[s]||(/[a-z0-9]/.test(s)?[s]:null);if(!o)return[];let a=[];for(let c of r)for(let u of o)a.length<t&&a.push(c+u);r=a}return[...new Set(r)].filter(s=>s.length>=4)}function we(e){let t;try{t=new URL(String(e))}catch{return String(e||"").trim()}let n=t.host.toLowerCase().replace(/^www\./,""),r=t.pathname.replace(/\/+$/,"")||"/",s=[...t.searchParams.entries()].filter(([o])=>!eu.test(o)).sort((o,a)=>o[0].localeCompare(a[0])).map(([o,a])=>o+"="+a).join("&");return n+r+(s?"?"+s:"")}function Ea(e){let t=String(e||"");return/новост[ией]+\s+(?:и\s+событи[йяе]+\s+)?по\s+теме|последние\s+новости\s+на\s+тему|все\s+(?:новости|материалы|публикации)\s+по\s+(?:теме|тегу)|материалы\s+по\s+тег|архив\s+(?:новостей|материалов|публикаций)|тақырып\s+бойынша\s+жаңалықтар/i.test(t)}function ur(e){let t;try{t=new URL(e).pathname}catch{return!1}let n=t.split("/").filter(Boolean).pop()||"";return n?/\d{4,}/.test(n)?!0:n.split(/[-_]/).filter(Boolean).length>=4:!1}function Gt(e,t,n){let r=new RegExp("<(\\/?)"+n+"\\b","gi");r.lastIndex=t;let s=1,o;for(;o=r.exec(e);)if(o[1]){if(--s===0)return o.index}else if(++s>400)return-1;return-1}function tu(e){if(!e)return"";let t=String(e).replace(/<!--[\s\S]*?-->/g," ").replace(/<(script|style|noscript|svg|iframe|form|nav|aside|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi," ");{let d=/<(div|section|ul|ol)\b([^>]*)>/gi,f="",g=0,b;for(;b=d.exec(t);){let y=(b[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1]||"";if(!Ta.test(y))continue;let w=Gt(t,d.lastIndex,b[1]);w<0||(f+=t.slice(g,b.index)+" ",g=w,d.lastIndex=w)}t=f+t.slice(g)}t=t.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(d,f)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(f)?" ":d);{let d=/<(div|p|li|h[1-6])\b[^>]*>/gi,f="",g=0,b;for(;b=d.exec(t);){if(b.index<g)continue;let y=Gt(t,d.lastIndex,b[1]);if(y<0)continue;let w=t.slice(d.lastIndex,y).trim();if((w.match(/<a\b/gi)||[]).length!==1)continue;let R=w.search(/<a\b/i),k=w.lastIndexOf("</a>");if(k<R)continue;let T=cr(w.slice(0,R)).trim();cr(w.slice(k+4)).trim()||T&&!/:$/.test(T)||(f+=t.slice(g,b.index)+" ",g=t.indexOf(">",y)+1||y,d.lastIndex=g)}t=f+t.slice(g)}{let d=/<(div|section|article|span|li|button)\b([^>]*\brole\s*=\s*["'](?:button|link|tab|menuitem)["'][^>]*)>/gi,f="",g=0,b;for(;b=d.exec(t);){let y=Gt(t,d.lastIndex,b[1]);y<0||(f+=t.slice(g,b.index)+" ",g=y,d.lastIndex=y)}t=f+t.slice(g)}let n=i(d=>Ca(d),"text"),r=t.match(/<([a-z]+)\b[^>]*itemprop\s*=\s*["']articleBody["'][^>]*>/i);if(r){let d=r.index+r[0].length,f=Gt(t,d,r[1]);if(f>0){let g=n(t.slice(d,f));if(g.length>200)return g.slice(0,4e4)}}let s=150,o=i(d=>cr(d,"\0").split("\0").reduce((f,g)=>{let b=g.replace(/\s+/g," ").trim();return f+(b.length>=s?b.length:0)},0),"longText"),a="",c=0,u=0,l=i((d,f)=>{(f>c||f===c&&(c>0?d.length<u:d.length>u))&&(a=d,c=f,u=d.length)},"offer"),h=i(d=>{let f=/<article\b[^>]*>/gi,g="",b=0,y;for(;y=f.exec(d);){let w=Gt(d,f.lastIndex,"article");w<0||(g+=d.slice(b,y.index)+" ",b=d.indexOf(">",w)+1||w,f.lastIndex=b)}return g+d.slice(b)},"dropCards");{let d=/<article\b[^>]*>/gi,f;for(;f=d.exec(t);){let g=Gt(t,d.lastIndex,"article");if(g<0)continue;let b=h(t.slice(d.lastIndex,g));l(n(b),o(b))}}if(a.length>200)return a.slice(0,4e4);let m=/(article|post|entry|news|material|publication|content|text|body)[-_]?(body|text|content|detail|full|inner)?/i;{let d=/<(div|section)\b([^>]*)>/gi,f;for(;f=d.exec(t);){let g=(f[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1];if(!g||!m.test(g)||Ta.test(g))continue;let b=Gt(t,d.lastIndex,f[1]);if(b<0)continue;let y=h(t.slice(d.lastIndex,b));l(n(y),o(y))}}return a.length>200?a.slice(0,4e4):[...t.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(d=>n(d[1])).filter(d=>d.length>40).join(" ").slice(0,4e4)}function dt(e){let t=String(e||""),n;if(n=t.match(/(?:^|[\/\-_.])(20\d{2})[\/\-.](\d{1,2})[\/\-.](\d{1,2})(?:[\/\-_.]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}if(n=t.match(/(?:^|[\/\-_.])(\d{1,2})[\/\-.](\d{1,2})[\/\-.](20\d{2})(?:[\/\-_.]|$|\.html)/),n){let r=new Date(+n[3],+n[2]-1,+n[1]);if(!isNaN(r)&&+n[2]<=12&&+n[1]<=31)return r}if(n=t.match(/(?:^|[\/\-_])(20\d{2})(\d{2})(\d{2})(?:[\/\-_]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}return null}function nu(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i,n=/(date|time|pub|posted|created|published)/i,r=[...e.matchAll(/<article\b/gi)].map(m=>m.index),s=[...e.matchAll(/<\/article\s*>/gi)].map(m=>m.index),o=i(m=>r.filter(p=>p<m).length>s.filter(p=>p<m).length,"inArticle"),a=null,c=null,u=null,l=null;for(let m of e.matchAll(/<time\b([^>]*)>/gi)){let p=m[1]||"",d=(p.match(/\sdatetime=["']([^"']+)["']/i)||[])[1]||"";if(!d){let y=m.index+m[0].length,w=e.slice(y,y+200),R=w.search(/<\/time\s*>/i);if(R<0)continue;let k=ut(w.slice(0,R).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!k||k.length>80)continue;d=k}l||(l=d);let f=(p.match(/class=["']([^"']*)["']/i)||[])[1]||"";if(t.test(f))continue;if(!a&&o(m.index)){a=d;break}if(!c&&n.test(f)){c=d;continue}let b=[...e.slice(Math.max(0,m.index-400),m.index).matchAll(/class=["']([^"']*)["']/gi)].pop();b&&t.test(b[1])||u||(u=d)}let h=a||c||u||l;return h?fe(h):null}function ru(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i;e=String(e).replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(n,r)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(r)?" ":n);for(let n of e.matchAll(/<(?:div|span|p|li|h[1-6])[^>]*class=["']([^"']*(?:date|time|pub|posted|created)[^"']*)["'][^>]*>([\s\S]{0,160}?)<\/(?:div|span|p|li|h[1-6])>/gi)){if(t.test(n[1]))continue;let r=ut(n[2].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!r||r.length>80)continue;let s=fe(r);if(s)return s}return null}function ou(e,t){let n=new Set,r=i(c=>ut(String(c||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"norm"),s="";try{s=new URL(t,"https://x").pathname.replace(/\/+$/,"")}catch{}let o=i(c=>{if(!c)return!1;try{return new URL(String(c).replace(/\\\//g,"/"),"https://x").pathname.replace(/\/+$/,"")===s}catch{return!1}},"sameUrl"),a=i(c=>{if(!(!c||typeof c!="object")){if(Array.isArray(c)){for(let u of c)a(u);return}if(c.headline&&!o(c.url)){let u=r(c.headline);u.length>=20&&n.add(u)}for(let u of["itemListElement","item","@graph","mainEntity"])c[u]&&a(c[u])}},"eat");for(let c of Ls(e))(Rs(c["@type"],"list")||c.itemListElement)&&a(c);for(let c of e.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)){if(o(c[1]))continue;let u=r(c[2]);u.length>=20&&u.length<=200&&n.add(u)}return[...n]}function Aa(e,t){if(!t||!t.length)return e;let n=String(e).replace(/\s+$/,""),r=t.slice().sort((s,o)=>o.length-s.length);for(let s=0;s<12;s++){let o=n.replace(/\s+$/,""),a=r.find(c=>o.endsWith(c));if(!a)break;n=o.slice(0,o.length-a.length).replace(/[\s·|—–-]+$/,"")}return n}function Na(e){for(let n of Ls(e))if(Rs(n["@type"],"article"))return!0;return(Tt(e,"og:type")||"").toLowerCase().includes("article")?!0:!!Tt(e,"article:published_time")}function Ds(e,t,n=""){let r=null,s=null,o=!1,a=null,c=null,u="",l=i(f=>f==null?"":typeof f=="string"?f:Array.isArray(f)?f.map(l).filter(Boolean).join(" "):typeof f=="object"?l(f["@value"]||f.text||f.name||""):String(f),"asText"),h=null;for(let f of Ls(e))Rs(f["@type"],"article")&&(o=!0,f.datePublished&&!h&&(h=fe(f.datePublished)),f.headline&&!s&&(s=l(f.headline)),f.description&&!a&&(a=l(f.description)),f.articleBody&&!c&&(c=l(f.articleBody)));let m={jsonld:i(()=>h,"jsonld"),"meta-og":i(()=>{let f=Tt(e,"article:published_time");return f?fe(f):null},"meta-og"),"meta-itemprop":i(()=>{let f=Tt(e,"datePublished");return f?fe(f):null},"meta-itemprop"),time:i(()=>nu(e),"time"),"text-block":i(()=>ru(e),"text-block")};for(let f of su){let g=m[f]();if(g){r=g,u=f;break}}if(s||(s=Tt(e,"og:title")),!s){let f=e.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);f&&(s=f[1].replace(/<[^>]+>/g,""))}a||(a=Tt(e,"description")||Tt(e,"og:description")),o||((Tt(e,"og:type")||"").toLowerCase().includes("article")||Tt(e,"article:published_time"))&&(o=!0);let p=ou(e,t),d=Aa(tu(e),p);if(c&&(c=Aa(c,p)),!c)c=d;else if(d){let f=i(y=>String(y).toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim(),"flat"),g=f(c),b=f(d);g&&b.includes(g)?c=d:g.includes(b)||(c=c+" "+d)}return!r&&t&&(r=dt(t),r&&(u="url")),r?{url:t,dateVia:u,title:lr(s)||t,date:r.toISOString(),isArticle:o,description:lr(a),body:c?lr(l(c)):""}:null}function ja(e){let t;try{t=new URL(e).pathname.toLowerCase()}catch{return!1}return Pa.test(t)}function on(e,t){let n=new URL(t).host,r=new Set,s=i(u=>{let l;try{l=new URL(u.replace(/\\\//g,"/"),t).href}catch{return}let h;try{h=new URL(l)}catch{return}if(h.host!==n)return;let m=h.pathname.toLowerCase();m==="/"||m===""||Pa.test(m)||/\/(search|search_results|results|tag|tags|category|categories|author|rubric|page|feed|rss|login|register)\b/.test(m)||m.split("/").filter(Boolean).length<1||r.add(l.split("#")[0])},"add"),o,a=/href=["']([^"'#]+)["']/gi;for(;o=a.exec(e);)s(o[1]);if(/^\s*[\[{]/.test(e)||r.size===0){let u=/"[\w]*(?:url|link|uri)"\s*:\s*"((?:https?:)?\\?\/\\?\/?[^"]+)"/gi;for(;o=u.exec(e);)s(o[1]);let l=new RegExp("https?:\\\\?/\\\\?/(?:www\\.)?"+n.replace(/^www\./,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+`\\\\?/[^"'\\s<>]+`,"gi");for(;o=l.exec(e);)s(o[0])}return[...r]}function Oa(e){let t=[],n=/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi,r;for(;r=n.exec(e);){let s=(r[0].match(/href=["']([^"']+)["']/i)||[])[1];s&&t.push(s)}return t}function qa(e){let t=[],n=e.match(/<item[\s\S]*?<\/item>/gi)||[];for(let s of n){let o=ot((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=ot((s.match(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i)||[])[1])||"",c=ot((s.match(/<pubDate(?:\s[^>]*)?>([\s\S]*?)<\/pubDate>/i)||[])[1]||(s.match(/<dc:date(?:\s[^>]*)?>([\s\S]*?)<\/dc:date>/i)||[])[1]),u=Da((s.match(/<description(?:\s[^>]*)?>([\s\S]*?)<\/description>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:c||null,description:u?lr(u):""})}if(t.length)return t;let r=e.match(/<entry[\s\S]*?<\/entry>/gi)||[];for(let s of r){let o=ot((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=((s.match(/<link[^>]+href=["']([^"']+)["']/i)||[])[1]||"").trim(),c=ot((s.match(/<(?:published|updated)(?:\s[^>]*)?>([\s\S]*?)<\/(?:published|updated)>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:c||null})}return t}function Ia(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=ot((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=ot((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]||(r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Ba(e){let t=[],n=e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[];for(let r of n){let s=ot((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=ot((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Ha(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=ot((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]),o=ot((r.match(/<news:title(?:\s[^>]*)?>([\s\S]*?)<\/news:title>/)||[])[1]),a=ot((r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1]||(r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]);if(!s)continue;let c=fe(a);t.push({url:s,title:o||null,date:c?c.toISOString():null})}return t}function Ra(e){if(!e)return"";let t=String(e).replace(/\s+/g,"").replace(/%3D/gi,"=").replace(/%2B/gi,"+").replace(/%2F/gi,"/"),n=La(t);if(!n){let r=(4-t.length%4)%4;try{n=La(t+"=".repeat(r))}catch{}}return n}function Fa(e,t){try{let n=String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(!n)return null;let r=/(^|\.)(bing|microsoft|msn|bingapis|windows|office\.net|live\.com|outlook\.com|go\.microsoft)\./i,s=i(u=>{try{return decodeURIComponent(u)}catch{return String(u)}},"tryDec"),o=[];i(u=>{try{let l=/^https?:/i.test(u)||u.startsWith("http")?u:u.startsWith("/")?"https://www.bing.com"+u:"https://"+u,h=new URL(l);for(let[d,f]of h.searchParams.entries())f&&/^(u|uddg|url|to|dest|destination|target|redirect|page|link|ref)[\d]*$/i.test(d)&&o.push(String(f));let p=(h.search+"&").match(/[?&]u=([A-Za-z0-9_\-+/=%]{20,})/i);p&&o.push(decodeURIComponent(p[1]))}catch{}},"tryFromUrl")(n);let c=[];for(let u of o)c.push(u);c.push(n,s(n),s(s(n))),/^[A-Za-z0-9_\-+/=]{40,}$/.test(n)&&c.push(Ra(n));for(let u=0;u<c.length;u++){let l=c[u];if(!l)continue;let h=String(l).match(/[A-Za-z0-9_\-+/]{40,}={0,3}/g)||[];for(let p of h){let d=Ra(p);d&&/^https?:/i.test(d)&&c.push(d)}let m=String(l).match(/https?:\/\/[^\s"'&<>()\\]+/gi)||[];for(let p of m)try{let d=new URL(p.split("#")[0].replace(/\/+$/,"")),f=d.host.replace(/^www\./,"");if(r.test(f))continue;if(f===t||f.endsWith("."+t))return d.href.split("#")[0]}catch{}}return null}catch{return null}}var Sa,Da,ot,_l,eu,Ta,su,za,Pa,La,Nn=le(()=>{Ut();i(Ma,"isWordPress");i(Ls,"jsonLdObjects");i(Rs,"typeIncludes");Sa="(?:og:)?";i(Tt,"metaContent");Da=i(e=>e==null?e:String(e).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1"),"stripCdata"),ot=i(e=>{let t=Da(e);return t==null?t:ut(t).trim()},"xmlText");i(ut,"decodeEntities");i(cr,"stripTags");i(Ca,"htmlToText");i(lr,"unmarkup");_l={а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["e","ye"],ё:["e","yo"],ж:["zh"],з:["z"],и:["i"],й:["i","y"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["h","kh"],ц:["c","ts"],ч:["ch"],ш:["sh"],щ:["sch"],ъ:[""],ы:["y"],ь:[""],э:["e"],ю:["yu","iu"],я:["ya","ia"],ә:["a","ae"],ғ:["g","gh"],қ:["k","q",""],ң:["n","ng"],ө:["o","oe"],ұ:["u"],ү:["u","ue"],һ:["h"],і:["i"]};i(Ms,"translitVariants");eu=/^(utm_|yclid|gclid|fbclid|from|_openstat|ysclid)/i;i(we,"urlKey");i(Ea,"looksLikeListingTitle");i(ur,"looksLikeArticleUrl");Ta=/(sidebar|side-bar|aside|widget|banner|advert|reklam|menu|nav|breadcrumb|footer|header|subscribe|podpis|social|share|comment|komment|related|similar|also|recommend|read-?more|popular|latest|last-?news|news-?list|tags?|rubric|category)/i;i(Gt,"blockEnd");i(tu,"extractBodyText");i(dt,"dateFromUrl");i(nu,"pickTimeDate");i(ru,"pickTextBlockDate");su=["jsonld","meta-og","meta-itemprop","time","text-block"],za={jsonld:"разметка JSON-LD","meta-og":"мета article:published_time","meta-itemprop":"микроразметка itemprop",time:"тег <time>","text-block":"текстом в блоке с датой",url:"дата в адресе"};i(ou,"foreignTitles");i(Aa,"trimForeignTail");i(Na,"declaresArticle");i(Ds,"extractArticleMeta");Pa=/\.(xml|json|jsonld|js|mjs|map|css|txt|jpg|jpeg|png|webp|gif|svg|ico|avif|bmp|tiff?|woff2?|ttf|otf|eot|pdf|mp4|webm|mov|avi|mp3|ogg|wav|zip|rar|7z|gz|tar|docx?|xlsx?|pptx?|rtf|epub|apk|exe|dmg)$/;i(ja,"isAssetUrl");i(on,"extractLinks");i(Oa,"extractFeedLinks");i(qa,"parseFeed");i(Ia,"parseUrlset");i(Ba,"parseSitemapIndex");i(Ha,"parseNewsSitemap");La=typeof Buffer<"u"&&Buffer.from?e=>{try{return Buffer.from(e,"base64").toString("utf8")}catch{return""}}:e=>{try{return atob(e.replace(/_/g,"/").replace(/-/g,"+"))}catch{return""}};i(Ra,"_b64dec");i(Fa,"bingReal")});function Cs(e){let t;try{t=new URL(e).host.replace(/^www\./,"")}catch{return null}if(dr[t])return dr[t];for(let n of Object.keys(dr))if(t===n||t.endsWith("."+n))return dr[n];return null}var dr,Ua=le(()=>{dr={"zakon.kz":{search:"https://www.zakon.kz/search/?handler=LoadMoreNews&qsearch={q}&author=0&category=0&tag=0&perioddate=&p={page}",selectors:{container:"div.news-item",link:"a.newscard_link",title:"div.newscard__title",date:"span.newscard__date"}},"tengrinews.kz":{search:"https://tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"}},"ulysmedia.kz":{search:"https://ulysmedia.kz/search/?search_text={q}&page={page}",selectors:{container:".col-xl-3.xl-mb-20",link:"a.category__title",title:"a.category__title",date:"span.date"},browserSearch:!0},"exclusive.kz":{search:"https://exclusive.kz/?s={q}",cms:"wordpress",browserSearch:!0,external:!1},"inform.kz":{search:null,render:"https://www.inform.kz/search_results/?q={q}",api:"https://search.inform.kz/search/ru?q={q}&per_page=20&page={page}",note:"HTTP-поиск — JS-оболочка (страница равна пустому запросу ±2 длины слова, ссылок на статьи ноль); браузером та же страница даёт 17 ссылок на статьи, но ищет сайт ТОЛЬКО по заголовку — ключ в тексте его выдача не находит"},"informburo.kz":{search:null,render:"https://informburo.kz/search?q={q}",note:"HTTP-поиск — виджет Google (cse.google.com, cx=dcd9aa27056d92a81): по HTTP приходит одна и та же страница ±14 байт, ссылок на статьи ноль. Браузером та же страница даёт 11 своих результатов -> берём рендером. Материал сайту приносят карта новостей и глубина"},"liter.kz":{search:"https://liter.kz/search/?search_text={q}"},"newtimes.kz":{search:"https://newtimes.kz/search/?search_text={q}"},"vlast.kz":{search:"https://vlast.kz/search/?query={q}",browserSearch:!0,external:!1,note:"внешний забанен, но браузер-поиск работает"},"kapital.kz":{search:"https://kapital.kz/amp/search?s={q}"},"time.kz":{search:"https://time.kz/search?q={q}",browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку -> подстраховываемся браузером; внешний мёртв"},"forbes.kz":{search:"https://forbes.kz/search?q={q}&type=articles&s=data&page={page}"},"inbusiness.kz":{search:"https://inbusiness.kz/ru/search?q={q}",external:!1},"kazpravda.kz":{search:"https://kazpravda.kz/search?q={q}"},"nazarbayev.kz":{search:"https://nazarbayev.kz/ru/search?body_value={q}&title={q}&time=&created[min]=&created[max]=&field_news_type_value=All",cms:"drupal",note:"Drupal exposed filter на /ru/search (не /kk/ — тот даёт 500); есть created[min/max] для серверного фильтра дат"},"baq.kz":{search:"https://baq.kz/search/{bpage}?q={q}",browserSearch:!0,note:"server-rendered поиск, Bitrix-пагинация /search/pagenN/?q=; браузер-поиск подстрахован"},"kursiv.media":{search:"https://kz.kursiv.media/{wpage}?s={q}",cms:"wordpress",note:"WordPress-поиск /?s= (не /ru/!), пагинация /page/N/?s="},"lsm.kz":{search:null,render:"https://lsm.kz/search?q={q}",needs_js:!0,browserSearch:!0,external:!1,note:"HTTP-поиск — оболочка (±2 байта на любое слово, ссылок ноль): выдачу подгружает POST /processing с телом chapter=search&p={page}&q={q}&tag= — он отвечает и обычному запросу (18 ссылок против 6 на мусоре), но канал поиска умеет только GET, поэтому пока рендер. Дата статьи лежит в НЕСТАНДАРТНОЙ мете og:article:published_time и текстом («19 сентября 2026 года») — из-за приставки og: разбор не видел её вовсе, и сайт отдавал «без даты на странице — 48» при живых статьях (улики 24 сентября 2026, починено). Браузер-поиск строку поиска не находит"},"sputnik.kz":{search:null,external:!1,note:"поиск = React + невидимая reCAPTCHA (getmore за g-recaptcha-response) -> из fetch не взять; RSS свежак + sitemap-глубина. Внешний тоже глух (Bing не индексирует статьи)."},"total.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиск = Google CSE в iframe -> невзят; браузер-поиск через форму сайта работает"},"interfax.kz":{search:null,external:!0,note:"на сайте поиска нет -> только RSS/sitemap (свежак) + внешний Google site: по периоду"},"press.kz":{search:null,render:"https://press.kz/search?title={q}",external:!1,note:"поиск сайта — /search?title= (адрес его собственной формы, дал пользователь). ПО HTTP он результатов не отдаёт: страница приходит одна и та же (30 ссылок) при любом слове, а от пустого запроса отличается ровно на удвоенную длину слова — то есть слово только эхом печатается в форме и в заголовке, а выдачу рисует JS. Поэтому HTTP-поиск выключен, а страница берётся РЕНДЕРОМ. ?s= — это вообще главная (37 ссылок, побайтово те же). Глубину даёт карта сайта (48 адресов); статьи размечены нормально — JSON-LD с datePublished читается"},"kaztag.kz":{search:null,render:"https://kaztag.kz/ru/search/?searchid=2383993&web=0&text={q}",feed:"https://kaztag.kz/ru/news/?PAGEN_1={page}",browserSearch:!0,external:!1,note:"статьи за Cloudflare (обычным запросом не открываются -> дочитываем браузером). Поиск по сайту — виджет Яндекса (searchid=2383993), выдачу рисует JS -> берём рендером. Лента PAGEN_1 — свежак"},"orda.kz":{search:null,render:"https://orda.kz/search-results.html?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (render всё же поднимает результаты); внешний бесполезен"},"nur.kz":{search:null,feed:"https://www.nur.kz/latest/",external:!1,note:"поиска нет, sitemap заморожены; лента /latest/ (свежак). Внешний не индексирует -> отключён"},"lenta.ru":{search:"https://lenta.ru/search/v2/process?query={q}&from={off10}&size=10&sort=2&title_only=0&domain=1",external:!1,note:'служебный вход поиска отдаёт JSON (не HTML): {"matches":[{"url":…,"title":…}]}. Ссылки из него достаёт разбор JSON в extractLinks — проверено прогоном 26 сентября 2026: 118 материалов за двое суток, 112 из них не нашёл никто другой. Пагинация from= (шаг 10); дата в адресе /YYYY/MM/DD/ -> отсев без скачивания'},"rbc.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 212 117 байт по слову против 213 027 по мусору, уникальная ссылка ровно одна. Главная за антиботом (редирект на служебный путь с UUID). Материал дают карта новостей /google-news-sitemap.xml (429 записей, 315 свежих, с заголовком и датой) и глубина. Внешний поиск снят 26 сентября 2026: он отправляет наружу само ключевое слово и не дал ни строки ни в одном прогоне"},"ria.ru":{search:"https://ria.ru/services/search/getmore/?query={q}&offset={off20}",external:!1,budgetMs:12e4,note:"поиск честно ищет: 41 454 байта по слову против 179 по мусору, 20 своих ссылок против нуля. Пагинация getmore?offset= (шаг 20); дата в адресе /YYYYMMDD/ -> отсев без скачивания. В прогоне 26 сентября 2026 — 127 материалов, поиск принёс 120 (41 не нашёл никто другой). Внешний снят: он выдаёт наружу ключевое слово"},"mk.ru":{search:"https://www.mk.ru/search/?q={q}",external:!1,note:"шаблон вписан руками, потому что АВТОДЕТЕКТ ПРОМАХИВАЛСЯ: он брал оболочку («ссылок 6, совпало 0»), а /search/?q= ищет по-настоящему — на мусорное слово сайт отвечает HTTP 404, на живое 200 и 10 своих ссылок. Сайт режет частоту: в прогоне 26 сентября 2026 отдал 88 раз «перегружен» (HTTP 429), сбавленный ход отработал сам"},"kommersant.ru":{external:!1,note:"поиск сайта ищет по-настоящему: 226 795 байт по слову против 116 131 по мусору, 32 свои ссылки. Автодетект находит его сам (форма /search/results?search_query=), 34 материала за двое суток. ОГОВОРКА: выдача ссылается на статьи с хвостом ?query=…&sids=…, и тот же материал приезжает ВТОРОЙ строкой — `urlKey` служебные параметры не режет (улика 26 сентября 2026, 3 дубля из 452 строк)"},"aif.ru":{external:!1,note:"поиск сайта ищет: 139 586 байт по слову против 121 221 по мусору, 15 своих ссылок. Автодетект находит его сам (/search?text=), 26 материалов за двое суток. Плюс RSS /rss/news на 300 записей с датами"},"bfm.ru":{external:!1,note:"поиск сайта ищет: 61 613 байт по слову против 55 002 по мусору, 10 своих ссылок. Автодетект находит его сам (параметр SearchPageForm[query]). Карта новостей /sitemap_google_news.xml — 178 записей, 124 свежих, с заголовком и датой"},"vedomosti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 171 492 байта на ЛЮБОЕ слово, уникальных ссылок ноль. Материал даёт карта новостей /sitemap_google_news.xml (334 записи, 176 свежих, с заголовком и датой) и глубина — 25 материалов за двое суток"},"interfax.ru":{search:null,external:!1,note:"страница /search/?sTextShow= отдаёт ЛЕНТУ: 52 ссылки одинаковые по слову и по мусору, разница в один байт. Материал дают RSS и карты — 27 материалов за двое суток. Страницы /photo/ дат не несут (27 штук в потерях) — это фоторепортажи, а не пропуск"},"kp.ru":{search:null,external:!1,note:"/search/?q= и /search/?query= отдают HTTP 404 и одну и ту же страницу на любое слово. Материал даёт только глубина — 47 за двое суток"},"vesti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 645 679 байт на любое слово, уникальных ссылок ноль. Живой вход — карта новостей /sitemap-news.xml (919 записей, все свежие, с заголовком и датой)"},"ntv.ru":{search:null,external:!1,note:"и /finder/?keytext=, и /search/?q= отдают одну и ту же страницу в 32 056 байт на любое слово. Карта новостей — /exp/yandex/sitemap_last.jsp (2981 адрес), заголовков в ней нет, дата есть"},"1tv.ru":{external:!1,note:"типовые /search?q= — оболочка (198 989 байт на любое слово), но автодетект находит собственный поиск движка сайта и он работает: 19 материалов за двое суток. Шаблон намеренно НЕ вписан, чтобы не потерять его пагинацию"},"life.ru":{search:null,external:!1,note:"/search?q= — оболочка (184 788 байт на любое слово). Материал дают RSS (200 записей с датами) и глубина — 58 за двое суток"},"news.ru":{search:null,external:!1,note:"ПОИСК ЗАПРЕЩЁН САМИМ САЙТОМ: в robots.txt секция User-agent: * содержит Disallow: /*? и Disallow: /search/, то есть любые адреса с параметрами. Ленты и карты при этом открыты и дают материал — 50 за двое суток (RSS + карта новостей + глубина)"},"business-gazeta.ru":{search:null,external:!1,note:"/search?q= и /search?fullpage=1&q= отдают 25 690 байт на любое слово, ссылок на статьи ноль. Живой вход — RSS /rss.xml"},"fontanka.ru":{search:null,external:!1,note:"поиск по HTTP не ищет: 313 098 против 313 626 байт, слова на странице нет вовсе -> выдачу рисует скрипт. Материал даёт глубина, но за двое суток всего 2 — при 2990 статьях сайта за период мы читаем 300, то есть десятую часть"},"iz.ru":{external:!1,note:"ГЛАВНАЯ отдаёт HTTP 403 (антибот), а RSS и карты при этом открыты и работают: 59 материалов за двое суток. Поиск находит автодетект, шаблон не вписан намеренно"},"gazeta.ru":{search:null,external:!1,note:"страница поиска — заглушка на 3978 байт, ссылок ноль. Карта новостей /sitemap_news.xml — 56 адресов, все свежие. В прогоне 26 сентября 2026 сайт дал НОЛЬ при 77 честно прочитанных статьях: кандидатов нашлось всего 100, то есть вход узкий. Проверить прогоном на широком окне"},"tass.ru":{external:!1,note:"ИЗ ОБЛАЧНОЙ СЕССИИ НЕ ОТКРЫВАЕТСЯ ВОВСЕ: главная отдаёт обрубок в 1,8 КБ, robots.txt — fetch failed, карты сайта не открылись, в прогоне «каналы: none» и ноль. Это может быть репутация дата-центра, а не факт о сайте (случай Reuters) — проверить прогоном с домашней машины, прежде чем делать выводы"},"forbes.ru":{search:null,external:!1,note:"на ЛЮБОЙ адрес, включая robots.txt, отдаётся JS-заглушка антибота (13 602 байта, считает куку скриптом). В прогоне «каналы: none» и ноль. Обычным запросом сайт не взять; проверить прогоном с домашней машины"},"svpressa.ru":{external:!1,note:"форма поиска на главной ведёт на ВИДЖЕТ ЯНДЕКСА (yandex.ru/sitesearch), но автодетект находит рабочий вход сам — 6 материалов за двое суток. Своих карт новостей и RSS у сайта нет"},"ura.news":{external:!1,note:"сайт запрещает автоматический обход: robots.txt, секция User-agent: * -> Disallow: /. В предустановленный список не добавлен намеренно (решение то же, что по Reuters)"},"bbc.com":{search:null,render:"https://www.bbc.com/search?q={q}",selectors:{container:'a[data-testid="internal-link"]',title:'[data-testid="card-headline"]',date:""},external:!1,note:"SPA-поиск; язык запроса = язык сайта (Tokayev для англ.). Замер 23 сентября 2026: формы поиска в разметке главной НЕТ вовсе (её рисует скрипт), поэтому HTTP-поиск выключен, а страница берётся рендером. Материал даёт sitemap-глубина — 14 за сутки по ключу «China»"},"theguardian.com":{search:null,external:!1,note:"HTTP-поиска нет (/search отдаёт 404, формы на главной нет); материал даёт карта новостей с заголовками"},"aljazeera.com":{search:null,external:!1,note:"поиск — оболочка (страница одна и та же на любое слово), WordPress-вход отвечает 404; материал дают rss и карта новостей"},"dw.com":{search:"https://www.dw.com/search/?languageCode=en&item={q}",external:!1,note:"поиск РАБОТАЕТ, параметр item (не q). Осторожно: /search/СЛОВО — это эхо, а не поиск. Пагинация pageIndex не двигается, поэтому страниц в шаблоне нет. languageCode задаёт язык выдачи"},"cnn.com":{search:null,external:!1,note:"форма ведёт на /search?q=, но страница по слову и по мусору побайтово одинакова — выдачу рисует скрипт"},"npr.org":{search:null,external:!1,note:"поиск — оболочка. Карта новостей лежит на другом хосте (googlecrawl.npr.org) и перечислена в robots — канал глубины её берёт"},"euronews.com":{search:"https://www.euronews.com/search?query={q}",external:!1,note:"поиск РАБОТАЕТ, параметр query (/?s= и ?text= отдают ленту). В прогоне 23 сентября 2026 сайт отвечал 406 и на поиск, и на 28 статей; причина не найдена, повторить не удалось — если 406 вернётся, смотреть здесь"},"cbsnews.com":{search:null,external:!1,note:"поиск — оболочка: страницы по слову и по мусору побайтово одинаковы. На быстрый повторный запрос сайт отвечает 406 — это не «ищет», это нас придержали"},"nbcnews.com":{search:null,external:!1,note:"форма ведёт на /search/, но страница в 19 КБ и ссылок на статьи не содержит вовсе; ?s= отдаёт ЛЕНТУ (та же страница на любое слово, искомого слова на ней нет). Материал: rss и карта сайта (без заголовков — дату и ключ узнаём только скачав). Статьи читаются образцово: JSON-LD, дата и тело на месте (улики 24 сентября 2026) — прежний ноль в одном прогоне из двух был разовым отказом главной, а не поломкой"},"independent.co.uk":{search:null,external:!1,note:"/search отдаёт 404, формы на главной нет. Материал дают rss (100 записей) и карта новостей с заголовками"},"straitstimes.com":{search:null,external:!1,note:"поиск — оболочка (восемь проб, страница одна и та же). Материал дают карта новостей с заголовками и rss"},"time.com":{search:null,external:!1,note:"поиск — оболочка. В robots.txt у секции «*» нет ни одного запрета. Материал дают карта новостей и rss"},"usatoday.com":{search:null,external:!1,note:"ЭХО, а не поиск: слово на странице есть, но ссылки на статьи у страницы по слову и по мусору ОДНИ И ТЕ ЖЕ. Судить надо по ссылкам, а не по числу вхождений"},"newsweek.com":{search:null,external:!1,note:"/search?q= отвечает 406, /?s= — это главная. Материал дают rss и карта сайта"},"abcnews.com":{search:null,external:!1,note:"формы поиска на главной нет. Карта новостей — 1000 адресов с заголовками, самая объёмная из проверенных"},"abcnews.go.com":{search:null,external:!1,note:"издание переехало на abcnews.com — вписывайте новый адрес, на старом материала не будет"},"apnews.com":{search:null,external:!1,note:"403 на главную и карты — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026). Значит это НЕ репутация дата-центра, как я предполагал, а обычный отказ всем подряд; robots.txt при этом обход разрешает. Материал даёт только карта новостей — по заголовку, без скачивания"},"france24.com":{search:null,external:!1,note:"из облака 403, хотя robots.txt отдаётся и перечисляет карты новостей по языкам. Тот же класс, что apnews. Английская версия — на /en/"},"japantimes.co.jp":{search:null,external:!1,note:"403 на главную и поиск — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026), то есть отказ не по адресу обращающегося. Ищет ли /search?query= на самом деле — по-прежнему неизвестно: страницу не отдают никому. RSS работает (/feed)"},"reuters.com":{search:null,render:"https://www.reuters.com/site-search/?query={q}",external:!1,note:"поиск сайта — /site-search/?query= (адрес дал пользователь). По HTTP отдаёт 401 DataDome, выдачу рисует Arc-скрипт -> берём РЕНДЕРОМ, без пагинации (render рендерит один адрес). Из облака 401 и обычным запросом, и настоящим Chromium — это репутация дата-центра, у пользователя с домашнего адреса должно открыться. Карты сайта при этом ОТКРЫТЫ: news-sitemap отдаёт 50 записей с заголовком и точной датой, то есть материал с ключом В ЗАГОЛОВКЕ находится вообще без скачивания. Дата стоит в адресе (…-2026-09-22/) -> отсев вне периода бесплатный. В robots.txt сайт запрещает автоматический сбор (Disallow: / для всех) — решение владельца"},"khabar.kz":{search:["https://khabar.kz/ru/search/search?searchword={q}&limitstart={off20}","https://khabar.kz/kk/search/search?searchword={q}&limitstart={off20}"],browserSearch:!0,external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии, материалы у них разные). Прежняя запись «поиска нет» смотрела /search/?q= — это лента. Глубину даёт sitemap"},"nomad.su":{search:null,browserSearch:!0,external:!1,note:"по уликам: /?s= игнорирует запрос (та же страница на любое слово, ссылок-статей 0). HTTP-поиска нет; браузер-поиск работает; внешний мёртв"},"31.kz":{search:null,browserSearch:!0,noRender:!0,note:"render капчит (0 ссылок); браузер-поиск открывает форму; DDG изредка даёт (не гасим external)"},"ktk.kz":{search:null,browserSearch:!0,external:!1,feed:"/ru/News/AjaxPublications/",feedPost:"lastDate={date}",render:"https://www.ktk.kz/ru/Search/Index/?text={q}&searchid=2472426",note:"поиск сайта — виджет Яндекса (searchid=2472426, адрес дал пользователь 3 сентября 2026), выдачу рисует JS -> берём рендером. Даты виджет принимает, но НЕ применяет и сортирует по релевантности — старьё отсеиваем сами по дате в адресе, это бесплатно.главная и СТАТЬИ обычным запросом НЕ открываются вовсе -> и то, и другое через браузер. Причина названа уликой 24 сентября 2026 (архив с машины пользователя): «сертификат сайта не проверяется (UNABLE_TO_VERIFY_LEAF_SIGNATURE)», то есть цепочка сертификата не доходит до доверенного корня, а не WAF. Браузер такое лечит сам (дотягивает промежуточный сертификат), Node — нет. Ключ у ktk обычно НЕ в заголовке (проверено пользователем 2 сентября 2026), поэтому статью надо именно прочитать, иначе материал не найти. Вход к нужным датам: кнопка «Ещё новости» дёргает POST /ru/News/AjaxPublications/ с телом lastDate=ДД.ММ.ГГГГ и отдаёт кусок ленты строго СТАРШЕ этой даты (проверено живьём: 01.09.2026 -> 18 ссылок за 31 августа). ?page= и ?PAGEN_1= лента игнорирует, sitemap.xml отдаёт 404"},"camonitor.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиска нет; браузер-поиск снимает выдачу; внешний глух. Главная за WAF -> идёт через браузер (HTTP 403 подтверждён уликой 24 сентября 2026 с машины пользователя, то есть это не репутация облачного адреса), но robots/карта отдаются обычным запросом: глубину даёт sitemap (300 кандидатов)"},"dialog.kz":{search:null,feed:"https://dialog.kz/?page={page}",browserSearch:!0,external:!1,note:"главная через браузер — обычным запросом не открывается вовсе: «сертификат сайта не проверяется (UNABLE_TO_VERIFY_LEAF_SIGNATURE)», проверено уликой 24 сентября 2026 на машине пользователя (не WAF, а неполная цепочка сертификата). Пагинация ленты ?page=N (0,1,2…). Браузер-поиск отрабатывает; внешний мёртв"},"ratel.kz":{search:"https://ratel.kz/search?q={q}",external:!1,note:"РАБОЧИЙ поиск — /search?q= (проверено пользователем 2 сентября 2026). Прежняя разведка смотрела /?s=, а это ЛЕНТА: 78 ссылок и на слово, и на мусор. Дата лежит ТЕКСТОМ в div.post_news__date («Пятница, 04 Июл 2025, 12:00») — ни <time>, ни разметки"},"weproject.media":{browserSearch:!0,external:!1,note:"поиск по форме детектится; внешний мёртв, браузер-поиск подхватывает"},"esquire.kz":{browserSearch:!0,external:!1,note:"поиск по форме /search?query= отвечает обычному запросу (23 сентября 2026: 71 891 б и 6 своих ссылок против 68 561 б и нуля на мусорном слове) — прежняя заметка «HTTP-поиск таймаутит» была разовым отказом, а не фактом о сайте. Браузер-поиск живой; внешний мёртв"},"sn.kz":{browserSearch:!0,note:"HTTP-поиск (native) слабый (24 ссылки); браузер-поиск усиливает"},"zonakz.net":{dead:!0,note:"издание закрыто в 2025 году: сайт открывается, новых материалов нет (проверено пользователем 2 сентября 2026)"},"diapazon.kz":{search:"https://diapazon.kz/search?q={q}&page={page}",feed:"https://diapazon.kz/article/more-list?category=0&count=30&offset={off30}&viewType=main",feedFirst:"https://diapazon.kz/all-news",browserSearch:!0,external:!1,note:"поиск сайта — /search?q= (адрес его собственной формы), пагинация &page=N. Прежняя запись «HTTP-поиска нет» смотрела /?s= — это лента. Статьи без разметки (og:type=website) — берутся по виду адреса. Ни RSS, ни карты сайта нет: глубину даёт AJAX-лента article/more-list?offset={off30} (шаг 30, 20 страниц = 600 ссылок за прогон). feedFirst = статика /all-news как первая страница."},"arasha.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"adyrna.kz":{search:null,feed:"https://adyrna.kz/kk",render:"https://adyrna.kz/kk/search?q={q}",external:!1,note:"быстрый вход — лента на главной: 148 ссылок обычным запросом, покрывают последние 5-6 суток (пагинации нет, одной страницы хватает). Поиск сайта — виджет Google, по HTTP недоступен, поэтому запасным идёт рендер. Карта сайта свежесть НЕ показывает: lastmod у всех 65 398 адресов сегодняшний, а самые «свежие» по нему — материалы 2022-2024 годов. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"democrat.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"malim.kz":{browserSearch:!0,note:"поиск по форме — лучший канал (32 совпадения); браузер-поиск как страховка"},"astanatv.kz":{search:null,browserSearch:!1,external:!1,note:"по уликам: /kz/search/?q= отдаёт ОБЫЧНУЮ ЛЕНТУ, а не результаты — страницы для «Тоқаев» и «Токаев» побайтово одинаковы, слова в выдаче нет ни разу. Рабочего HTTP-поиска нет (23 сентября 2026 перепроверены десять типовых шаблонов, формы поиска в разметке главной тоже нет); всё даёт sitemap-глубина (19-21 материал)"},"24.kz":{search:["https://24.kz/ru/search/search?searchword={q}&limitstart={off20}","https://24.kz/kz/search/search?searchword={q}&limitstart={off20}"],external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии: издание выпускает каждое событие и по-русски, и по-казахски). Прежняя запись «поиска нет вовсе» проверяла ?q= и com_finder — не те адреса"},"politico.kz":{search:["https://politico.kz/search?q_str={q}","https://politico.kz/ru/search?q_str={q}"],browserSearch:!0,note:"поиск ЕСТЬ: q_str, ДВЕ версии — казахская в корне и русская /ru/ (материалы разные). Браузер-поиск оставлен: он единственный тяжёлый канал, где тут что-то ловилось"},"aikyn.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск по форме даёт нули; браузер-поиск живой; внешний мёртв"},"astana-akshamy.kz":{browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку; браузер-поиск подхватывает"},"aqmeshit.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"yujanka.kz":{browserSearch:!1,external:!1,note:"HTTP-поиск ?s= ищет (автодетект сам его находит — WordPress, с пагинацией); браузер-поиск строку поиска не находит вовсе — выключен; материал в основном даёт wp-api"},"qazaqstan.tv":{search:"https://qazaqstan.tv/search?query={q}",external:!1,note:"поиск ЕСТЬ и фильтрует (проверено вручную: «Тоқаев бойынша іздеу нәтижелері», вкладка Жаңалықтар + даты в карточках). Автодетект раньше цеплял не ту форму и тянул всю ленту. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ), иначе нули"},"qmonitor.kz":{dead:!0,search:"https://qmonitor.kz/search/?query={q}",external:!1,note:"сервер не принимает соединения: HTTPS не отвечает вовсе, по HTTP до него не достучаться (connection timeout), домен в DNS есть. Проверено 23 и 24 сентября 2026 с двух независимых адресов; в прогоне стоил 233 с за ноль. Поднимется — снять dead, поиск уже прописан"},"the-steppe.com":{search:"https://the-steppe.com/search?s={q}",external:!1,note:"поиск найден вручную. Ноль по «Токаев» — норма: издание про него не пишет (проверено), это не поломка канала"},"dknews.kz":{search:null,render:"https://dknews.kz/ru/gsearch?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (/ru/gsearch + #gsc.*) — из HTTP не берётся, результаты рисует JS; поднимаем рендером, как orda.kz"},"spik.kz":{search:null,feed:"https://spik.kz/{page}",browserSearch:!1,external:!1,note:"поиска на сайте НЕТ. Лента — три раздела /1, /2, /3 (по 40 статей); прежний адрес /lastnews/ отдаёт 404. Пагинации у разделов нет: /4 = 404, обход останавливается сам. Есть RSS (/rss.xml, 549 КБ) и карта новостей"},"factcheck.kz":{browserSearch:!1,external:!1,note:"WordPress-поиск детектится (82 ссылки), по слову нули; формы нет; внешний мёртв"},"petropavlovsk.news":{dead:!0,note:"домена нет в DNS (пользователь проверил 2 сентября 2026, перепроверено 23 сентября)"},"atamekenbusiness.kz":{dead:!0,note:"сайт телеканала, новостной ценности для мониторинга нет (сервер жив: 200, но ссылок-статей на главной ноль)"},"today.kz":{dead:!0,note:"сертификат сайта выписан на чужое имя (ERR_TLS_CERT_ALTNAME_INVALID) — открыть нельзя"},"taraz24.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"shymkenttv.kz":{dead:!0,note:"главная отдаёт HTTP 403 всему, включая robots.txt"},"altaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"atyraupress.kz":{dead:!0,note:"главная отдаёт HTTP 403 всему, включая robots.txt"},"timekz.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"kostanaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"ontustiknews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"aqzhayik.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"alashainasy.kz":{dead:!0,note:"издание переехало на on.kz (301 со старого домена) — вписывайте новый адрес, на старом материала не будет"},"on.kz":{external:!1,note:"бывший alashainasy.kz. Формы поиска на главной нет, типовые адреса поиска 404, карт сайта нет (любой адрес отдаёт одну и ту же страницу) — рабочего входа пока не найдено"},"masa.media":{search:"https://masa.media/ru/search?query={q}",external:!1,note:"сайт ЖИВОЙ и публикует ежедневно (проверено 23 сентября 2026) — прежняя пометка «мёртв» была неверной. Поиск /ru/search?query= отдаёт 497 своих ссылок против нуля на мусорном слове, но отдаёт их ВСЕ разом и без дат: в контрольном прогоне «ссылок 547, не влезли в бюджет канала — 430». Карт сайта и RSS у него нет: на любой адрес приходит одна и та же страница"},"azattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"radioazattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"kokshetau.asia":{browserSearch:!1,external:!1,noRender:!0,note:"WordPress-поиск таймаутит; render = 0; браузер-поиск ничего не даёт; очень медленный (210-420 с за прогон, wp-api порой не успевает стартовать) — вне списка предустановленных"},"ekaraganda.kz":{external:!1,noRender:!0,note:"поиск по форме детектится (25 ссылок), по слову нули; render капчит; внешний мёртв"},"uralskweek.kz":{browserSearch:!1,external:!1,noRender:!0,note:"поиск `?s=` РАБОТАЕТ (проверено уликами: по мусорному слову ноль совпадений); статьи без разметки дат — день берётся текстом из блока и из адреса; сайт МЕДЛЕННЫЙ, бюджеты каналов упираются во время; render = 0; внешний мёртв"},"365info.kz":{external:!1,note:"видимый поиск — виджет Google (#gsc.q=), обычным запросом не берётся и в пресет не годится; материал даёт wp-api (16 за август). WordPress-поиск + render детектятся сами; внешний мёртв"},"almaty.tv":{external:!1,note:"HTTP-поиск (native) детектится сам; внешний мёртв"},"mgorod.kz":{external:!1,note:"HTTP-поиск (native) отрабатывает; внешний мёртв"},"aktobetimes.kz":{external:!1,note:"RSS + автопоиск; внешний мёртв"},"egemen.kz":{search:null,render:"https://egemen.kz/search?q={q}",external:!1,note:"HTTP-поиск — оболочка (199 536 б на любой запрос, слова на странице нет вовсе); браузером тот же адрес даёт 10 своих результатов -> берём рендером. След на будущее: /api/search?q={q}&page={page}&limit=10 отвечает JSON, но ссылок в нём нет — только slug. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"turkystan.kz":{note:"HTTP-поиск (native) отрабатывает; браузер-поиск память ещё не разобрала"}};i(Cs,"lookupKnown")});function Za(e){typeof e=="function"&&(hr=e)}function $a(e){e&&typeof e.get=="function"&&typeof e.set=="function"&&(At=e)}function ei(e){typeof e=="function"&&(cn=e)}function ti(e){typeof e=="function"&&(_a=e)}async function Kt(e,{groups:t,exclude:n,fromD:r,toD:s,originHost:o,channelLabel:a,deadline:c,maxFetch:u=80,browserFallback:l=!1,browserBudget:h=null,diag:m=null,tally:p=null,pick:d=null,have:f=null}){let g=i(D=>{p&&(p[D]=(p[D]||0)+1)},"tick"),b=i(D=>{if(!p)return;let j=[];try{j=new URL(D).pathname.toLowerCase().split("/").filter(Boolean)}catch{return}let A=j.find(ae=>!/^[a-z]{2}$/.test(ae)&&!/^\d+$/.test(ae));A&&((p.noDateWhere||(p.noDateWhere={}))[A]=(p.noDateWhere[A]||0)+1)},"tickSection"),y=un(t),w=n||[],R=l?1:4,k=Symbol("добрать браузером"),T=i(()=>l||h&&h.left>0,"canBrowser"),v=3,S=typeof process<"u"&&process.env&&Number(process.env.MC_SLOW_GAP_MS)||400,M=25,N=p&&(p._slow||(p._slow={}))||{};N.resets===void 0&&Object.assign(N,{resets:0,on:!1,saved:0,tried:0,chain:null,why:{}});let Y=i(D=>{let j=(N.chain||Promise.resolve()).then(()=>Is(S)).then(D);return N.chain=j.then(()=>{},()=>{}),j},"chained"),H=i(D=>N.on?Y(D):D(),"paced"),P=i((D,j)=>{if(Hs(D))return g("listing"),j&&(j.verdict="раздел сайта, не статья (видно по адресу)",m.push(j)),!0;if(ja(D))return g("listing"),j&&(j.verdict="это файл, а не страница (видно по адресу)",m.push(j)),!0;let A=fe(At.get(D));if(A&&!Fe(A,r,s))return g("staleDate"),j&&(j.verdict="дата вне периода (из памяти дат)",j.date=At.get(D),j.parsed=Ve(A),m.push(j)),!0;if(!A&&(r||s)){let ae=dt(D);if(ae&&(r&&+ae<+r-864e5||s&&+ae>+s+864e5))return g("urlDateOut"),j&&(j.verdict="дата вне периода (видно по адресу)",j.parsed=Ve(ae),m.push(j)),!0}return!1},"cheapSkip"),K=i(async(D,j)=>{let A=m?{url:D,channel:a}:null;if(c&&Date.now()>c)return g("late"),A&&(A.verdict="не успели (бюджет времени)",m.push(A)),null;let ae=[],ie=j?null:await H(()=>mr(D,ae)),Le=!ie&&!j?hu(ae[0]):null;if(Le&&(N.resets++,N.why[Le]=(N.why[Le]||0)+1,!N.on&&N.resets>=v&&(N.on=!0),N.tried<M&&(N.tried++,ae.length=0,ie=await Y(()=>mr(D,ae)),ie&&N.saved++)),!ie&&j&&T()){h&&h.left--;let he=await cn(D);ie=he&&he.ok?he.html:null,ie&&g("viaBrowser")}if(!ie&&!j&&T())return k;if(!ie)return g("noOpen"),p&&ae[0]&&(p.noOpenWhy=p.noOpenWhy||{},p.noOpenWhy[ae[0]]=(p.noOpenWhy[ae[0]]||0)+1),A&&(A.verdict="не открылась"+(ae[0]?" ("+ae[0]+")":" (WAF/таймаут/404)"),m.push(A)),null;let Z=Ds(ie,D,d&&d.hint);if(!Z)return!Na(ie)&&!ur(D)?(g("notArticle"),A&&(A.verdict="не статья (меню/категория/оболочка), даты на ней тоже нет",m.push(A)),null):(g("noDate"),b(D),A&&(A.verdict="дата не найдена на странице",m.push(A)),null);if(d&&Z.dateVia&&(d.seen[Z.dateVia]=(d.seen[Z.dateVia]||0)+1),!Z.isArticle&&!ur(D))return g("notArticle"),A&&(A.verdict="не статья (меню/категория/оболочка)",A.title=Z.title||"",m.push(A)),null;if(Ea(Z.title))return g("notArticle"),A&&(A.verdict="подборка по теме, а не материал",A.title=Z.title||"",m.push(A)),null;if(Z.date&&At.set(D,Z.date),Z._hay=((Z.title||"")+" "+(Z.description||"")+" "+(Z.body||"")).toLowerCase(),A){let he=fe(Z.date);A.title=(Z.title||"").slice(0,80),A.date=Z.date||"",A.parsed=Ve(he),A.inRange=Fe(Z.date,r,s),A.hasKw=We(Z._hay,t),A.hasExclude=w.length?We(Z._hay,w):!1,A.verdict=A.parsed?A.inRange?A.hasExclude?"минус-слово":A.hasKw?"ВЗЯТА":"ключа нет в тексте":"дата вне периода":"дата не распознана",m.push(A)}return Z},"handle"),V=[],te=[];for(let D of e){let j=m?{url:D,channel:a}:null;if(f&&f.has(we(D))){g("dupe"),j&&(j.verdict="её уже принёс другой канал — второй раз не качаем",m.push(j)),te.push(D);continue}P(D,j)||V.push(D)}if(V.length>u){for(let D=u;D<V.length;D++)g("overBudget"),m&&m.push({url:V[D],channel:a,verdict:"не влезла в бюджет канала"});e=V.slice(0,u)}else e=V;let xe=await br(e,R,D=>K(D,!1)),ke=xe.filter(D=>D!==k),Ae=e.filter((D,j)=>xe[j]===k);if(Ae.length)for(let D of await br(Ae,1,j=>K(j,!0)))D!==k&&ke.push(D);let C=null,F=[];for(let D of ke){if(!D)continue;let j=fe(D.date);if(j&&(!C||j>C)&&(C=j),!Fe(D.date,r,s)){g("outOfPeriod");continue}if(w.length&&We(D._hay,w)){g("excluded");continue}if(!We(D._hay,t)){g("noKw");continue}g("taken");let A=We((D.title||"").toLowerCase(),t)?"title":"body",ae=Wt((D.description||"")+" "+(D.body||"")+" "+(D.title||""),D.title,y);F.push({source:o,title:D.title,url:D.url,date:D.date,channel:a,match:A,snippet:ae})}for(let D of te)F.push({url:D,channel:a,_dupe:!0});return{rows:F,newest:C}}function Wa(e){if(!e)return!1;let t=String(e).slice(0,4e3);return/<title[^>]*>\s*(just a moment|attention required|подожд|один момент)/i.test(t)||/id="(challenge-running|cf-challenge-running|cf-please-wait|challenge-form|turnstile-wrapper)"/i.test(t)||/cf-browser-verification|_cf_chl_opt|\/cdn-cgi\/challenge-platform/i.test(t)?!0:/just a moment|checking your browser|verifying you are human|проверка браузера/i.test(t)&&String(e).length<6e4}async function iu(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),ri);try{let s=await fetch(e,{method:"POST",redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",...wr},body:t,signal:n.signal});return s.ok?await s.text():null}catch{return null}finally{clearTimeout(r)}}function cu(e){let t=i(n=>String(n).padStart(2,"0"),"p");return t(e.getDate())+"."+t(e.getMonth()+1)+"."+e.getFullYear()}async function lu(e,t=2){for(let n=0;;n++){let r=new AbortController,s=setTimeout(()=>r.abort(),ri);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...wr},signal:r.signal});if((o.status===429||o.status===503)&&n<t){clearTimeout(s),await Is(1e3*(n+1));continue}if(!o.ok)throw new Error("HTTP "+o.status);return await o.text()}finally{clearTimeout(s)}}}async function at(e){try{return await lu(e)}catch{return null}}async function mr(e,t){let n=await js(e);return!n.ok&&t&&t.push(n.err?n.err:"HTTP "+n.status),n.ok?n.text:null}function uu(e,t){let n=fe(e),r=fe(t);return!n||!r?!1:Ve(n)===Ve(r)}function Bs(e){if(!e)return"неизвестная ошибка";if(e.name==="AbortError")return"таймаут";let t=e;for(let s=0;s<5&&t&&t.cause&&typeof t.cause=="object";s++)t=t.cause;let n=String(t&&t.code||e&&e.code||""),r=String(t&&t.message||e&&e.message||e);return Ya[n]?Ya[n]+" ("+n+")":n||(/certificat|ssl|tls/i.test(r)?"ошибка TLS: "+r.slice(0,80):r.slice(0,120))}function hu(e){return du(e)?"рвал соединение":pu(e)?"отвечал «перегружен»":null}async function fr(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...wr},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Bs(r)}}finally{clearTimeout(n)}}async function js(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{...wr},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Bs(r)}}finally{clearTimeout(n)}}async function mu(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),2e4),s={...fu};t&&(s.Referer=t);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:s,signal:n.signal});return{ok:o.ok,status:o.status,text:o.ok?await o.text():""}}catch(o){return{ok:!1,status:0,err:Bs(o)}}finally{clearTimeout(r)}}function Ue(e){try{return new URL(e).host.replace(/^www\./,"")}catch{return e}}function Hs(e){let t;try{t=new URL(e)}catch{return!1}if(/[?&]page=\d+/i.test(t.search))return!0;let n=t.pathname.toLowerCase().replace(/\/+$/,"").split("/").filter(Boolean);if(n.some(o=>/^(cat|cats|tag|tags|category|categories|rubric|rubrics|topic|topics|section|sections|archive|archives|author|authors|search|label|labels|feed|rss|page|person|persons|people|persona|personalii|theme|themes|tema|temy)$/.test(o))||(()=>{let o=n.findIndex(l=>/^(19|20)\d\d$/.test(l));if(o<0)return 0;let a=n.slice(o);if(a.length<2||a.length>3)return 0;let c=/^(0?[1-9]|1[0-2])$/.test(a[1]||""),u=a.length<3||/^(0?[1-9]|[12]\d|3[01])$/.test(a[2]);return c&&u?a.length:0})())return!0;let s=n[n.length-1]||"";return!!(n.length<=2&&s&&!/[-_]/.test(s)&&!/\d/.test(s)&&s.length<=16)}function pr(e){let t=String(e||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|sections?|pages?|weather|pogoda|search|ingredients?|images?|img|photos?|gallery|video|media|podcasts?)\b/i.test(t.replace(/[-_.]/g," "))}function gu(e){let t=/(20\d{2})[^\d]?(0[1-9]|1[0-2])?/,n=String(e||"");try{n=new URL(n,"https://x").pathname}catch{}let s=n.slice(n.lastIndexOf("/")+1).match(t)||n.match(t);return s?{y:+s[1],mo:s[2]?+s[2]:0}:null}function bu(e,t){let n=e&&t?+t-+e:0,r=n>0?Math.max(1,Math.round(n/864e5)):0;return r?r<=2?{days:r,maxCands:300,budgetMs:9e4}:r<=6?{days:r,maxCands:600,budgetMs:18e4}:{days:r,maxCands:1e3,budgetMs:3e5}:{days:0,maxCands:300,budgetMs:9e4}}function On(e){try{let t=new URL(e),n=[];return t.searchParams.forEach((r,s)=>{/^(from|utm_|_openstat|ysclid|fbclid|gclid|yclid)/i.test(s)&&n.push(s)}),n.forEach(r=>t.searchParams.delete(r)),t.hash="",t.toString()}catch{return String(e||"").split("#")[0]}}function wu(e){return e.length>=2&&/[A-Za-zА-Яа-яЁё]/.test(e)&&e===e.toUpperCase()&&e!==e.toLowerCase()}function yu(e){let t=["а","я","и","ы","е","о","у","ю","й","ь"];for(let n of t)if(e.length-1>=4&&e.endsWith(n))return e.slice(0,-1);return e}function xu(e,t){let n=wu(e),r=e.toLowerCase();return t&&!n&&r.length>=5&&(r=yu(r)),{text:r,whole:n}}function Lt(e,t){return(e||"").split(/[,;\n]+/).map(n=>n.trim()).filter(Boolean).map(n=>{let r=n.match(/^["'«](.+)["'»]$/);return r?{words:[{text:r[1].toLowerCase().trim(),whole:!1}]}:{words:n.split(/\s+/).filter(Boolean).map(s=>xu(s,t))}})}function ku(e,t){if(!t.text)return!1;if(!t.whole)return e.includes(t.text);if(t._re===void 0)try{t._re=new RegExp("(?<![\\p{L}\\p{N}])"+t.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}\\p{N}])","u")}catch{t._re=null}return t._re?t._re.test(e):(" "+e+" ").includes(" "+t.text+" ")}function We(e,t){return t.length?t.some(n=>n.words.every(r=>ku(e,r))):!0}function un(e){return e.flatMap(t=>t.words.map(n=>n.text))}function ln(e,t,n=150){let r=(e||"").replace(/\s+/g," ").trim();if(!r)return"";let s=r.toLowerCase(),o=-1;for(let u of t){let l=s.indexOf(u);l>=0&&(o<0||l<o)&&(o=l)}if(o<0)return r.slice(0,n);let a=Math.max(0,o-60),c=Math.min(r.length,o+90);return(a>0?"…":"")+r.slice(a,c).trim()+(c<r.length?"…":"")}function zs(e){let t=String(e&&e.snippet||"").trim(),n=String(e&&e.title||"").trim();return n?t?gr(t).includes(gr(n))?t:t+" "+n:n:t}function Wt(e,t,n,r=150){let s=ln(e,n,r),o=gr(s),a=gr(t);return!o||o===a||a&&a.includes(o)||a&&o.startsWith(a)&&o.length-a.length<vu?"":s}function Su(e,t){let n=String(e||"");return n=n.split(/\s+https?:/i)[0],n=n.replace(/\s*[›»].*$/,""),n=n.replace(/\s*\|\s*[^|]*$/,""),t&&(n=n.replace(new RegExp("\\s*[-–—]\\s*"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*$","i"),"")),n.replace(/\s+/g," ").trim()}function Va(e,t){let n=(e||"").toLowerCase().replace(/\s+/g," "),r=n.search(/\s[—–·]\s/);r>=0&&r<90&&(n=n.slice(r+3));let s=-1,o="";for(let c of t){if(!c)continue;let u=n.indexOf(c);u>=0&&(s<0||u<s)&&(s=u,o=c)}if(s<0)return{b:"",a:""};let a=i(c=>c.replace(/[^\p{L}\p{N} ]+/gu," ").replace(/\s+/g," ").trim(),"norm");return{b:a(n.slice(Math.max(0,s-40),s)),a:a(n.slice(s+o.length,s+o.length+40))}}function Tu(e){let t=String(e).trim();/^https?:\/\//i.test(t)||(t="https://"+t);try{return new URL(t).origin}catch{return null}}function Au(e){try{let t=new URL(e);return t.host=t.host.startsWith("www.")?t.host.slice(4):"www."+t.host,t.origin}catch{return null}}function Lu(e,t){let n=String(e||"");try{let r=new URL(n,"https://www.bing.com");if(/\/ck\/a/i.test(r.pathname)){let o=r.searchParams.get("u")||"";for(/^a1/i.test(o)&&(o=o.slice(2)),o=o.replace(/-/g,"+").replace(/_/g,"/");o.length%4;)o+="=";try{let a=typeof atob=="function"?atob(o):Buffer.from(o,"base64").toString("binary");/^https?:\/\//i.test(a)&&(n=a)}catch{}}let s=new URL(n).host.replace(/^www\./,"");if(s===t||s.endsWith("."+t))return n.split("#")[0]}catch{}return null}function si(){an=0,jn=0,Os=!1}async function Mu(e,t){if(Os)return{ok:!1,status:0,err:"ddg: пропущен (частота ограничена)",gaveUp:!0};let n=Date.now();an<n&&(an=n);let r=an;an+=2500,r-n>0&&await Ru(r-n);let s=await mu(e,t),o=s.text||"";return!s.ok||/anomaly|are you a robot|too many requests|captcha/i.test(o)||o.length<22*1024&&!/result__a/i.test(o)?(jn++,an=Date.now()+Math.min(jn*4e3,2e4),jn>=4&&(Os=!0)):jn=0,s}function Du(e){try{let t=String(e).replace(/&amp;/g,"&"),n=t.match(/[?&]uddg=([^&]+)/i);if(n)try{t=decodeURIComponent(n[1])}catch{}return t.startsWith("//")&&(t="https:"+t),t}catch{return e}}function Cu(e,t){let n=String(e),r=[],s=new Set,o=i(u=>ut(String(u).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()),"clean"),a=i((u,l,h)=>{let m=Du(u),p;try{p=new URL(m).host.replace(/^www\./,"")}catch{return}if(p!==t&&!p.endsWith("."+t))return;let d=m.split("#")[0];s.has(d)||(s.add(d),r.push({url:d,title:l||"",snippet:h||""}))},"push"),c=n.split(/class="result__a"/i).slice(1);for(let u of c){let l=u.match(/href="([^"]+)"/i);if(!l)continue;let h=u.match(/>([\s\S]*?)<\/a>/i);a(l[1],h?o(h[1]):"")}if(!r.length){for(let l of n.match(/uddg=[^"&\s]+/gi)||[])a("//x?"+l);let u=new RegExp("https?://(?:www\\.)?"+t.replace(/\./g,"\\.")+`/[^"'\\s<>]+`,"gi");for(let l of n.match(u)||[])a(l)}return r}async function br(e,t,n){let r=[],s=0;async function o(){for(;s<e.length;){let a=s++;try{r[a]=await n(e[a])}catch{r[a]=null}}}return i(o,"worker"),await Promise.all(Array.from({length:Math.min(t,e.length||1)},o)),r}function oi(e,t){let n=/^https:/i.test(String(t||"")),r=[];for(let s of String(e||"").split(`
`)){if(!/^\s*sitemap:/i.test(s))continue;let o=s.replace(/^\s*sitemap:/i,"").trim();o&&(n&&/^http:\/\//i.test(o)&&r.push(o.replace(/^http:/i,"https:")),r.push(o))}return[...new Set(r)]}function Eu(e){let t=e.match(/<div[^>]+id=["']webkit-xml-viewer-source-xml["'][^>]*>([\s\S]*?)<\/div>/i);return t?t[1]:e}function zu(e){return async t=>{let n=await at(t);if(n)return n;if(!e)return null;let r=await cn(t);return!r||!r.ok||!r.html?null:Eu(r.html)}}async function Nu(e,t,n=at){let r=oi(t,e),s=[...new Set([...r.filter(o=>/news|last-news|google|yandex|turbo/i.test(o)),e+"/news-sitemap.xml",e+"/google-news-sitemap.xml",e+"/sitemap-google.xml",e+"/sitemap-yandex.xml",e+"/sitemap-news.xml"])];for(let o of s){let a=await n(o);if(!a)continue;let c=await ai(a,0);if(c.length)return c}return[]}async function Pu(e,t,n,r,s){let{maxMaps:o=40,maxCands:a=300,maxCollect:c=Math.max(a*10,2e3),deadline:u,fetchText:l=at,blindOk:h=!0,slugHints:m=[],collectStats:p={}}=s||{},d=n?+n:-1/0,f=r?+r:1/0,g=0,b=i(C=>{let F=fe(At.get(C));return!F||Fe(F,n,r)?!1:(g++,!0)},"staleByMemory"),y=Number.isFinite(f)?f+21*864e5:1/0,w=oi(t,e),R=[...new Set([...w,e+"/sitemap.xml",e+"/sitemap_index.xml",e+"/sitemap-index.xml",e+"/sitemapindex.xml",e+"/sitemap/sitemap.xml"])].sort((C,F)=>(pr(C)?1:0)-(pr(F)?1:0)),k=[],T=[],v=new Set,S=0,M=i(C=>{let F=C?fe(C):null,D=F?+F:NaN;return Number.isFinite(D)?D>=d&&D<=y:!0},"childInRange");async function N(C,F){if(S>=o||k.length>=c||u&&Date.now()>u||v.has(C))return;v.add(C);let D=await l(C);if(!D)return;if(S++,/<sitemapindex/i.test(D)&&F<3){let ie=i(ge=>gu(ge.loc),"ymOf"),Le=i(ge=>{if(ge.lastmod)return String(ge.lastmod);let ce=ie(ge);return ce?ce.y+"-"+String(ce.mo).padStart(2,"0"):""},"keyOf"),Z=n?n.getFullYear():-1/0,he=r?r.getFullYear():1/0,Ze=i(ge=>{if(ge.lastmod)return M(ge.lastmod);let ce=ie(ge);return ce?ce.y>=Z&&ce.y<=he:!0},"kidOk"),Xe=Ba(D).filter(Ze).sort((ge,ce)=>Le(ce).localeCompare(Le(ge))).sort((ge,ce)=>(pr(ge.loc)?1:0)-(pr(ce.loc)?1:0));if(Xe.length>1&&Xe.every(ge=>!Le(ge))){let ge=Es(Xe);Xe.length=0,Xe.push(...ge)}for(let ge of Xe)if(await N(new URL(ge.loc,C).href,F+1),S>=o||k.length>=c||u&&Date.now()>u)break;return}let j=[],A=[],ae=0;for(let ie of Ia(D)){let Le;try{Le=new URL(ie.loc,C).href}catch{continue}if(Hs(Le)||b(On(Le)))continue;let Z=ie.lastmod?+fe(ie.lastmod):NaN;if(!Number.isFinite(Z))try{if(new URL(Le).pathname==="/")continue}catch{}if(Number.isFinite(Z)){if(Z<d||Z>f)continue;j.push({loc:On(Le),lm:ie.lastmod});continue}let he=dt(Le);if(he){ae++;let Ze=+he;if(Ze<d||Ze>f)continue}A.push({loc:On(Le),lm:""})}if(!j.length&&!ae&&A.length){for(let ie of Es(A)){if(T.length>=c)break;T.push(ie)}return}for(let ie of j)if(k.push(ie),k.length>=c)return;for(let ie of Es(A))if(k.push(ie),k.length>=c)return}i(N,"walk");for(let C of R)if(await N(C,0),k.length>=c||S>=o)break;if(h)for(let C of T){if(k.length>=c)break;k.push(C)}let Y=new Map;for(let C of k)Y.has(C.loc)||Y.set(C.loc,C);let H=[...Y.values()].sort((C,F)=>String(F.lm).localeCompare(String(C.lm)));g&&(p.stale=g),p.pool=H.length,p.capped=H.length>=c,p.roots=R.length,p.maps=S;let P=i(C=>{let F=C.lm&&fe(C.lm)||dt(C.loc);return F&&Ve(F)||""},"dayOf"),K=i(C=>m.length>0&&m.some(F=>C.loc.toLowerCase().includes(F)),"hinted"),V=i(C=>{p.nodate=C.filter(D=>!P(D)).length;let F=C.filter(K).length;return F?p.hinted=F:delete p.hinted,C},"finish");if(H.length<=a)return V(H);let te=new Map;for(let C of H){let F=P(C);te.has(F)||te.set(F,[]),te.get(F).push(C)}for(let C of te.values())C.sort((F,D)=>(K(D)?1:0)-(K(F)?1:0));let xe=[...te.keys()].filter(Boolean).sort().reverse(),ke=te.get("")||[],Ae=[];for(let C=0;Ae.length<a;C++){let F=0;for(let D of xe){let j=te.get(D);if(C<j.length&&(Ae.push(j[C]),F++,Ae.length>=a))break}if(!F)break}for(let C of ke){if(Ae.length>=a)break;Ae.push(C)}return V(Ae)}async function ai(e,t){let n=Ha(e).filter(r=>r.title&&r.date);if(n.length)return n;if(t<1&&/<sitemapindex/i.test(e)){let r=(e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[]).map(s=>({loc:(s.match(/<loc>([^<]+)<\/loc>/)||[])[1]?.trim(),lm:(s.match(/<lastmod>([^<]+)<\/lastmod>/)||[])[1]||""})).filter(s=>s.loc);r.sort((s,o)=>String(o.lm).localeCompare(String(s.lm)));for(let s of r.slice(0,5)){let o=await at(s.loc);if(o&&(n.push(...await ai(o,t+1)),n.length>500))break}}return n}function ii(e,t){let n=e.match(/<form\b[\s\S]*?<\/form>/gi)||[],r=null,s=0;for(let a of n){if(/method\s*=\s*["']post["']/i.test(a))continue;let c=(a.match(/\baction\s*=\s*["']([^"']*)["']/i)||[])[1]||"",u=(a.match(/class\s*=\s*["']([^"']*)["']/i)||[])[1]||"",l=a.match(/<input\b[^>]*>/gi)||[],h=null,m=-1,p=[];for(let f of l){let g=((f.match(/\btype\s*=\s*["']([^"']+)["']/i)||[])[1]||"text").toLowerCase(),b=(f.match(/\bname\s*=\s*["']([^"']+)["']/i)||[])[1];if(!b)continue;if(g==="hidden"){p.push([b,(f.match(/\bvalue\s*=\s*["']([^"']*)["']/i)||[])[1]||""]);continue}if(/submit|button|checkbox|radio|image|file/.test(g))continue;let y=0;g==="search"&&(y+=3),/^(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)$/i.test(b)?y+=2:/search|query|поиск|іздеу/i.test(b)&&(y+=1),y>m&&(m=y,h=b)}if(!h||m<=0)continue;let d=m;/role\s*=\s*["']search["']/i.test(a)&&(d+=2),/search|query|поиск|іздеу/i.test(c)&&(d+=2),/search|query|поиск/i.test(u)&&(d+=1),d>s&&(s=d,r={action:c,qname:h,hidden:p})}if(!r)return null;let o;try{o=new URL(r.action||"/",t)}catch{return null}for(let[a,c]of r.hidden)if(c&&a!==r.qname)try{o.searchParams.set(a,c)}catch{}return o.searchParams.set(r.qname,"__MCQ__"),o.toString().replace("__MCQ__","{q}")}function Xa(e,t,n,r){if(!e)return{ok:!1,why:"нет ответа"};let s=new Set(on(e,n));if(s.size===0)return{ok:!1,realN:0,junkN:0,uniqueN:0,why:"ссылок-статей нет (оболочка/JS-выдача)"};let o=t?new Set(on(t,n)):new Set,a=0;for(let u of s)o.has(u)||a++;let c={realN:s.size,junkN:o.size,uniqueN:a};if(r){let u=String(r).toLowerCase().split(/\s+/).filter(Boolean)[0]||"",l=u.length>5?u.slice(0,Math.max(5,u.length-2)):u;if(l&&!e.toLowerCase().includes(l))return{...c,ok:!1,why:"искомого слова нет в выдаче (это лента, а не результаты)"}}return o.size===0?{...c,ok:!0,why:"мусорный запрос пуст"}:a>=2?{...c,ok:!0,why:"выдача отличается от мусорной"}:{...c,ok:!1,why:"та же страница, что и на мусорный запрос (параметр игнорируется)"}}async function Ns(e,t,n){let r=encodeURIComponent;if(n){let u=[].concat(n).filter(d=>typeof d=="string"&&d),l=i(d=>{let f=d.indexOf("#");return f>=0&&d.indexOf("{q}")>f},"hashOnly"),h=u.filter(l);if(u=u.filter(d=>!l(d)),!u.length)return h.length?{kind:"none",warn:"ключ в шаблоне стоит после «#» — такой адрес серверу не передаётся, выдачу рисует скрипт в браузере (нужен render)"}:null;let m=i(d=>(f,g)=>d.replace(/\{q\}/g,r(f)).replace(/\{page\}/g,g).replace(/\{off(\d+)\}/g,(b,y)=>(g-1)*+y).replace(/\{wpage\}/g,g<=1?"":`page/${g}/`).replace(/\{bpage\}/g,g<=1?"":`pagen${g}/`),"mk"),p=u.map(m);return{kind:"override",hasPage:u.some(d=>/\{page\}|\{off\d+\}|\{wpage\}|\{bpage\}/.test(d)),builds:p,build:p[0]}}let s=ii(t,e);if(s){let u=await at(s.replace("{q}",r("президент"))),l=await at(s.replace("{q}",r("qwszxcvnonsense12345")));if(Xa(u,l,e,"президент").ok){let h=s.includes("?")?"&":"?";return{kind:"form",hasPage:!0,build:i((m,p)=>p<=1?s.replace("{q}",r(m)):s.replace("{q}",r(m))+h+"page="+p,"build")}}}if(Ma(t))return{kind:"wordpress",hasPage:!0,build:i((u,l)=>l<=1?`${e}/?s=${r(u)}`:`${e}/page/${l}/?s=${r(u)}`,"build")};let o=["/search/?text=","/search/?q=","/search/?search_text=","/search/?query=","/search?text=","/search?q=","/search?search_text=","/search?query=","/search_results/?q=","/search_results/?text=","/results/?q=","/?s=","/?q=","/?query=","/?search_text=","/?searchword="],a=[];for(let u of String(t||"").matchAll(/href="\/(ru|kz|kk|en)\//g))a.includes("/"+u[1])||a.push("/"+u[1]);if(a.length)for(let u of a.slice(0,2))for(let l of["/search/?q=","/search/?text=","/search/?query=","/search?q="])o.push(u+l);let c=Date.now();for(let u of o){if(Date.now()-c>2e4)break;let l=await at(e+u+r("президент")),h=await at(e+u+r("qwszxcvnonsense12345"));if(Xa(l,h,e,"президент").ok){let m=e+u,p=u.includes("?")?"&":"?";return{kind:"native",hasPage:!0,build:i((d,f)=>f<=1?m+r(d):`${m}${r(d)}${p}page=${f}`,"build")}}}return null}function ju(e){let t=String(e||"").trim();if(/^@[A-Za-z0-9_]{4,}$/.test(t))return t.slice(1);let n=t.match(/(?:t|telegram)\.me\/(?:s\/)?(@?[A-Za-z0-9_]{4,})/i);if(n){let r=n[1].replace(/^@/,"");if(!/^(s|joinchat|addstickers|addemoji|proxy|share|iv|setlanguage|bg)$/i.test(r))return r}return null}function Ou(e,t){let n=[],r=/data-post="[^"/]+\/(\d+)"([\s\S]*?)(?=data-post="|$)/g,s;for(;s=r.exec(e);){let o=+s[1],a=s[2],c=a.match(/<time[^>]+datetime="([^"]+)"/),u=a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div class="tgme_widget_message_(?:footer|reply|info)|<\/div>)/)||a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/),l=u?u[1]:"";l=l.replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,""),l=ut(l).replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim(),o&&c&&n.push({id:o,url:"https://t.me/"+t+"/"+o,date:c[1],text:l})}return n}async function Iu(e,t){let n=t.morph!==!1,r=Lt(t.keyword,n),s=Lt(t.exclude||"",n),o=un(r),a=i(v=>We((v||"").toLowerCase(),r),"hasKw"),c=i(v=>s.length>0&&We((v||"").toLowerCase(),s),"hasExclude"),u=sn(t.from),l=zn(t.to),h=qu+e,m=[],p=[],d=new Set,f=45e3,g=80,b=null,y=!1,w=0,R=0,k=Date.now(),T="";for(;!y&&w<g&&Date.now()-k<f;){w++;let v=b?h+"?before="+b:h,S=await js(v);if(!S.ok&&(S.status===429||S.status>=500)&&(await Is(1500),S=await js(v)),!S.ok){let H=S.status?"HTTP "+S.status:S.err||"не ответил";T=w===1?"канал не открылся ("+H+") — частный/не существует?":"лента оборвалась на "+w+"-й странице ("+H+")";break}let M=Ou(S.text,e);if(!M.length){T=w===1?"постов не видно (частный канал? нужен t.me/s/)":"лента кончилась";break}R+=M.length;let N=null,Y=null;for(let H of M){let P=fe(H.date);if(P&&(!N||P<N)&&(N=P),(Y===null||H.id<Y)&&(Y=H.id),d.has(H.id)||(d.add(H.id),!Fe(H.date,u,l))||!H.text||!a(H.text)||c(H.text))continue;let K=P?P.toISOString():"",V=H.text.split(`
`)[0].slice(0,90)||"(без текста)";m.push({source:"t.me/"+e,title:V,url:H.url,date:K,channel:"telegram",match:"post",snippet:Wt(H.text,V,o)})}if(u&&N&&N<u&&(y=!0,T="дошли до начала периода"),!y&&(Y===null||Y===b)){T="лента не листается дальше";break}b=Y}return T||(T=w>=g?"упёрлись в "+g+" страниц":"стоп по времени (45 с)"),p.push(`постов просмотрено ${R} (страниц ${w}, ${T}), совпало ${m.length}`),{rows:m,channel:"telegram",note:p.filter(Boolean).join("; ")}}function Bu(e,t){let n=0,r=!1,s=!1;for(let o=t;o<e.length;o++){let a=e[o];if(r)s?s=!1:a==="\\"?s=!0:a==='"'&&(r=!1);else if(a==='"')r=!0;else if(a==="{")n++;else if(a==="}"&&--n===0)return e.slice(t,o+1)}return null}function Hu(e){let t=e.indexOf("ytInitialData");if(t<0)return null;let n=e.indexOf("=",t),r=e.indexOf("{",n);if(n<0||r<0)return null;let s=Bu(e,r);try{return s?JSON.parse(s):null}catch{return null}}function qs(e,t){if(!(!e||typeof e!="object"))if(e.videoRenderer&&e.videoRenderer.videoId&&t.push(e.videoRenderer),Array.isArray(e))for(let n of e)qs(n,t);else for(let n in e)qs(e[n],t)}function Gu(e){let t=String(e||"").toLowerCase();return/секунд|минут|час|sec|min|hour|сағат|мину?т|только что|сейчас|сегодня|today|бүгін/.test(t)?0:/недел|апта|week/.test(t)?7:/месяц|month|\bай\b/.test(t)?31:/год|лет|жыл|year/.test(t)?366:/дн|день|сутк|күн|тәулік|day|вчера|yesterday|кеше/.test(t)?1:31}function Ku(e){let t=String(e||""),n=/"uploadDate"\s*:\s*"([^"]{4,40})"/.exec(t);return n||(n=/itemprop="(?:datePublished|uploadDate)"[^>]*content="([^"]{4,40})"/.exec(t)),n||(n=/<meta[^>]+content="([^"]{4,40})"[^>]*itemprop="(?:datePublished|uploadDate)"/.exec(t)),n?fe(n[1]):null}function Wu(e,t,n=new Date){let r=Ps.indexOf(e)>=0?e:"month";if(!(t?fe(t):null))return r;let o=(n.getTime()-sn(t).getTime())/864e5,a=o<=1?"today":o<=7?"week":o<=31?"month":"year";return Ps.indexOf(a)>Ps.indexOf(r)?a:r}async function ci(e,t){let n=t&&t.ytRange||"month",r=Wu(n,t&&t.from),s=t.morph!==!1,o=Lt(e,s),a=Lt(t.exclude||"",s),c=un(o),u=Ja[r]||Ja.month,l=`${Qa}/results?search_query=${encodeURIComponent(e)}&sp=${u}`,h=await fr(l);if(!h.ok)return{rows:[],channel:"youtube",note:"YouTube не открылся"+(h.status?" (HTTP "+h.status+")":"")};let m=Hu(h.text);if(!m)return{rows:[],channel:"youtube",note:"не разобрал выдачу (согласие/капча?)"};let p=[];qs(m,p);let d=[],f=new Set;for(let S of p){let M=S.videoId;if(!M||f.has(M))continue;f.add(M);let N=Pn(S.title),Y=Pn(S.publishedTimeText),H=Pn(S.ownerText||S.longBylineText),P=S.detailedMetadataSnippets&&S.detailedMetadataSnippets[0]&&Pn(S.detailedMetadataSnippets[0].snippetText)||Pn(S.descriptionSnippet),K=(N+" "+P+" "+H).toLowerCase();if(o.length&&!We(K,o)||a.length&&We(K,a))continue;let V=Y?fe(Y):null;d.push({source:"youtube",title:N||M,url:`${Qa}/watch?v=`+M,date:V?V.toISOString():"",channel:"youtube",match:"video",snippet:(H?"["+H+"] ":"")+(ln(P||N,c)||Y),_fuzz:Gu(Y)})}let g=sn(t.from),b=zn(t.to),y=Date.now()+Fu,w=0,R=0,k=0,T=[];await br(d.slice(0,Uu),4,async S=>{let M=fe(At.get(S.url));if(!M&&Date.now()<y){let N=await mr(S.url);M=N?Ku(N):null,M&&At.set(S.url,M.toISOString())}M?(w++,S.date=M.toISOString()):R++,S._exact=!!M});for(let S of d){if(S._exact){if(!Fe(S.date,g,b)){k++;continue}}else{let M=fe(S.date),N=(S._fuzz||0)*864e5;if(M&&(g&&+M+N<+g||b&&+M-N>+b)){k++;continue}}delete S._fuzz,delete S._exact,T.push(S)}let v=["фильтр YouTube: "+r+(r!==n?" (в настройке «"+n+"» — расширен, иначе окно не попадает в выдачу)":"")];return k&&v.push("вне периода отсеяно "+k),R&&v.push("дат со страницы не прочитали: "+R+" — у них дата приблизительная"),{rows:T,channel:"youtube",note:`видео: ${T.length} (${v.join("; ")})`}}async function yr(e,t){let n=ju(e);if(n)return Iu(n,t);let{keyword:r,from:s,to:o,maxPages:a=3,override:c,maxArticles:u=60}=t,l=Tu(e);if(!l)return{rows:[],channel:"bad-url",note:"не разобрал адрес"};let h=Cs(l);if(h&&h.dead)return{rows:[],channel:"пропущен",note:"сайт пропущен: "+(h.note||"помечен нерабочим"),stats:{render:null,external:null,sitesearch:null}};let m=t.morph!==!1,p=Lt(r,m),d=Lt(t.exclude||"",m),f=un(p),g=i(x=>We((x||"").toLowerCase(),p),"hasKw"),b=i(x=>We((x||"").toLowerCase(),p),"kwInTitle"),y=i(x=>d.length>0&&We((x||"").toLowerCase(),d),"hasExclude"),w=sn(s),R=zn(o),k=[],T=[],v=[],S=t.diag?[]:null,M=t.diag?{searchUrl:null,rawLinks:[],searchKind:null,renderUrl:null}:null,N=await fr(l+"/");if(!N.ok&&N.err){let x=Au(l);if(x&&x!==l){let L=await fr(x+"/");L.ok&&(l=x,N=L,v.push("главная: переключился на "+Ue(l)))}}let Y=!1;if(N.ok&&Wa(N.text)&&(N={ok:!1,status:N.status,err:"страница-заглушка защиты"},v.push("главная: за защитой (Cloudflare) — иду браузером")),!N.ok){let x=await cn(l+"/");x&&x.ok&&x.html&&x.html.length>500&&!Wa(x.html)?(N={ok:!0,status:x.status||200,text:x.html},Y=!0,v.push("главная: через браузер")):x&&x.err&&v.push("главная: браузером тоже не вышло — "+x.err)}N.ok||v.push("главная: "+(N.status?"HTTP "+N.status:N.err||"не открылась"));let H=N.text||"",P=zu(Y),K=await P(l+"/robots.txt")||"";/<[a-z]/i.test(K)&&(K=ut(K.replace(/<[^>]+>/g,`
`)));try{let x=[...new Set([...Oa(H).map(L=>{try{return new URL(L,l).href}catch{return null}}).filter(Boolean),l+"/rss",l+"/rss/",l+"/feed/",l+"/rss.xml"])];for(let L of x.slice(0,4)){let z=await at(L);if(!z||!/<(item|entry)[\s>]/i.test(z))continue;let X=qa(z);if(X.length){T.push("rss");for(let I of X){let G=fe(I.date),_=G?G.toISOString():null;if(I.title&&g(I.title+" "+(I.description||""))&&!y(I.title+" "+(I.description||""))&&Fe(_,w,R)){let re;try{re=new URL(I.link,l).href}catch{continue}k.push({source:Ue(l),title:I.title,url:re,date:_||"",channel:"rss",match:b(I.title)?"title":"body",snippet:Wt((I.description||"")+" "+I.title,I.title,f)})}}break}}}catch(x){v.push("rss: "+x.message)}try{let x=await Nu(l,K,P);if(x.length){T.push("news-sitemap");for(let L of x)g(L.title)&&!y(L.title)&&Fe(L.date,w,R)&&k.push({source:Ue(l),title:L.title,url:L.url,date:L.date,channel:"news-sitemap",match:"title",snippet:Wt(L.title,L.title,f)})}}catch(x){v.push("sitemap: "+x.message)}let V=[],te={},xe={hint:t.datePick||"",seen:{}},ke=i(()=>new Set(k.map(x=>we(x.url))),"haveKeys"),Ae={left:16},C=0,F=!1,D="";try{if(/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(H)&&p.length){let x=Date.now()+25e3,L=i(U=>String(U).padStart(2,"0"),"p2"),z=i(U=>U.getFullYear()+"-"+L(U.getMonth()+1)+"-"+L(U.getDate())+"T"+L(U.getHours())+":"+L(U.getMinutes())+":"+L(U.getSeconds()),"wpDate"),X=new Set(k.map(U=>we(U.url))),I=new Set,G=[],_=[],re=!1,B=0,se=0,ee=0,Re=new Set,Te=!1,Oe=50,J=6,Ne=/^(page|attachment|nav_menu_item|wp_|revision|customize_|oembed_|user_request|product_variation|acf-|elementor_|e-|jet-|tablepress)/,Ce=["posts"],ue=!1;try{let U=await at(l+"/wp-json/wp/v2/types"),ne=U?JSON.parse(U):null;if(ne&&typeof ne=="object"&&!Array.isArray(ne)){ue=!0;for(let W of Object.keys(ne)){let $=ne[W]||{},Q=$.rest_base||W;!Q||Ne.test(W)||Ne.test(Q)||$.rest_namespace&&$.rest_namespace!=="wp/v2"||Ce.includes(Q)||Ce.push(Q)}}}catch{ue=!1}let ve=/news|articl|novost|material|publicat|zhana|habar|jańalyq/i,oe=[Ce[0],...Ce.slice(1).sort((U,ne)=>(ve.test(ne)?1:0)-(ve.test(U)?1:0))].slice(0,4);for(let U of oe)for(let ne of p){let W=ne.words.map($=>$.text).join(" ");if(W)for(let $=1;$<=J;$++){if(Date.now()>x){Te=!0;break}let Q=l+"/wp-json/wp/v2/"+U+"?search="+encodeURIComponent(W)+"&after="+z(w)+"&before="+z(R)+"&per_page="+Oe+"&page="+$+"&orderby=date&order=desc&_fields=date,link,title,excerpt";B++;let Ye=await at(Q);if(!Ye){se++;break}let de=null;try{de=JSON.parse(Ye.replace(/^\s*<pre[^>]*>/i,"").replace(/<\/pre>\s*$/i,""))}catch{ee++;break}if(!Array.isArray(de)){ee++;break}re=!0;for(let q of de){let Ke=q&&q.link;if(!Ke)continue;let He=On(Ke),Me=we(He);if(Fe(q.date,w,R)&&Re.add(Me),X.has(Me)||I.has(Me))continue;I.add(Me);let tt=i(bs=>ut(String(bs||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"flat"),rt=tt(q.title&&q.title.rendered),Je=tt(q.excerpt&&q.excerpt.rendered);Fe(q.date,w,R)&&(y(rt)||y(Je)||(We((rt+" "+Je).toLowerCase(),p)?G.push({source:Ue(l),title:rt,url:He,date:q.date,channel:"wp-api",match:b(rt)?"title":"body",snippet:ln(Je||rt,f)}):_.push(He)))}if(de.length<Oe)break;$===J&&(Te=!0)}}if(re){T.push("wp-api"),G.forEach(Q=>k.push(Q)),C=G.length;let U=0;if(_.length&&Date.now()<x){let{rows:Q}=await Kt(_,{groups:p,exclude:d,fromD:w,toD:R,originHost:Ue(l),channelLabel:"wp-api",deadline:x+3e4,maxFetch:60,diag:S,tally:te});Q.forEach(Ye=>{k.push(Ye),U++}),C+=U}let ne=k.filter(Q=>(Q.channel==="rss"||Q.channel==="news-sitemap")&&Fe(Q.date,w,R)).map(Q=>we(Q.url)),W=ne.filter(Q=>!Re.has(Q)),$=ne.length>0;F=!Te&&W.length===0&&($||ue&&G.length>0),D=Te?"ответ обрезан по бюджету":W.length?"вход не увидел "+W.length+" материал(ов), найденных лентой":$?"сверено с лентой: "+ne.length+" из "+ne.length:ue?"типов записей опрошено "+oe.length:"список типов записей недоступен",v.push("wp-api: сайт сам отобрал по слову и датам, взято "+C+(U?" (из них "+U+" проверены по тексту)":"")+(oe.length>1?"; типы записей: "+oe.join(", "):"")+"; полнота: "+(F?"подтверждена":"не подтверждена")+" ("+D+")")}else{let U=B?se?"вход не ответил (таймаут или бюджет канала 25 с), попыток "+B:ee?"вход отдал не список записей — похоже, REST закрыт, попыток "+B:"вход промолчал, попыток "+B:"ни одного запроса не ушло (кончился бюджет канала ещё до старта)";v.push("wp-api: у сайта есть признаки WordPress, но "+U)}}}catch(x){v.push("wp-api: "+x.message)}let j=0;try{if(t.skip instanceof Set?t.skip.has("sitemap"):(t.skip||[]).includes("sitemap"))throw{skipped:!0};if(F)throw{wpCovered:!0};let x=Date.now(),L=bu(w,R),z=x+L.budgetMs,X=[...new Set(r.split(/[,;\n]+/).map(B=>B.trim()).filter(Boolean).flatMap(B=>B.split(/\s+/)).flatMap(B=>Ms(B)))],I={},G=await Pu(l,K,w,R,Y?{maxMaps:10,maxCands:200,deadline:x+9e4,fetchText:P,blindOk:k.length===0,slugHints:X,collectStats:I}:{maxMaps:40,maxCands:L.maxCands,deadline:z,fetchText:P,blindOk:k.length===0,slugHints:X,collectStats:I}),_=new Set(k.map(B=>we(B.url))),re=G.map(B=>B.loc).filter(B=>!_.has(we(B)));if(re.length||v.push("sitemap-глубина: "+(I.stale?`новых статей нет — все ${I.stale} адресов уже читали, они вне периода`:I.maps?`карт прочитано ${I.maps}, статей за период в них нет`:`карты сайта не открылись (адресов карт в robots и по типовым путям: ${I.roots||0})`)),re.length){T.push("sitemap-глубина");let B=Y?{maxFetch:200,deadline:x+9e4}:{maxFetch:L.maxCands,deadline:z},{rows:se}=await Kt(re,{groups:p,exclude:d,fromD:w,toD:R,originHost:Ue(l),channelLabel:"sitemap",deadline:B.deadline,maxFetch:B.maxFetch,diag:S,tally:te,pick:xe});se.forEach(U=>k.push(U)),j=se.length;let ee="";if(w&&R){let U=new Set;for(let W of G){let $=W.lm&&fe(W.lm)||dt(W.loc);$&&U.add(Ve($))}let ne=Math.max(1,Math.round((+zn(Ve(R))-+sn(Ve(w)))/864e5));U.size&&(ee=`, дней периода охвачено ${U.size} из ${ne}`)}let Re=I.hinted?`, с ключом в адресе ${I.hinted}`:"",Te=I.stale?`, старых по памяти дат пропущено ${I.stale}`:"",Oe=I.nodate?`, из них без даты в карте ${I.nodate} (день узнаём, только скачав)`:"",J=I.pool||0,Ne=J>0?Math.max(1,Math.round(G.length/J*100)):0,Ce=J>G.length?I.capped?`; взято ${G.length} из БОЛЕЕ ЧЕМ ${J} статей сайта за период (не больше ${Ne}%, сколько их всего — не знаем: упёрлись в свой потолок сбора) — остальные не читали, бюджет канала`:`; взято ${G.length} из ${J} статей сайта за период (${Ne}%) — остальные не читали, бюджет канала`:"",ue=Y?200:L.maxCands,ve=Y?"сайт за защитой, читает браузер":L.days?`окно ${L.days} сут.`:"период не задан",oe=`; бюджет ${ue} статей (${ve})`;v.push(`sitemap-глубина: карт пройдено, кандидатов ${re.length}${ee}${Oe}${Re}${Te}, совпало ${se.length}${Ce}${oe}`+(Date.now()>B.deadline?" (стоп по времени)":""))}}catch(x){x&&x.wpCovered?(v.push("sitemap-глубина: не понадобилась — wp-api накрыл весь период ("+D+")"),V.push("sitemap")):v.push(x&&x.skipped?"sitemap-глубина: пропущен (память: у сайта ничего не даёт; перепроверим позже)":"sitemap-глубина: "+x.message)}let A=Cs(l),ae=null,ie=0,Le=0,Z=t.skip instanceof Set?t.skip:new Set(t.skip||[]);A&&!t.reprobe&&(A.external===!1&&Z.add("external"),A.browserSearch===!1&&Z.add("sitesearch"),A.noRender===!0&&Z.add("render"));let he={render:null,external:null,sitesearch:null};try{let x=null;if(c?x=await Ns(l,H,c):A&&A.search?x=await Ns(l,H,A.search):A&&A.search===null?v.push("адаптер: server-side поиска нет ("+(A.note||"")+")"):x=await Ns(l,H,null),x&&x.kind==="none"&&(v.push("поиск: "+x.warn),x=null),x){T.push("search("+x.kind+")"),M&&(M.searchKind=x.kind);let L=k.length,z=new Set,X=A&&A.budgetMs||45e3,I=A&&A.budgetMs?1500:400,G=Y?1:x.hasPage?80:1,_=r.split(/[,;\n]+/).map(J=>J.trim()).filter(Boolean);_.length||_.push(r);let re=0,B="",se=!1,ee=Date.now(),Re=x.builds||[x.build],Te=[];for(let J of Re)for(let Ne of _)Te.push({build:J,alt:Ne});e:for(let{build:J,alt:Ne}of Te){let Ce=!1;for(let ue=1;ue<=G&&!Ce;ue++){if(Date.now()-ee>X){v.push(`поиск: стоп по времени (${Math.round(X/1e3)}c)`);break e}let ve=J(Ne,ue);if(!ve)break;M&&!M.searchUrl&&(M.searchUrl=ve);let oe;if(Y){let de=await cn(ve);oe={ok:!!(de&&de.ok&&de.html),status:de&&de.status||0,text:de&&de.html||"",err:de&&de.err}}else oe=await fr(ve);if(!oe.ok){ue===1&&z.size===0&&(B=oe.status?"HTTP "+oe.status:oe.err||"ошибка");break}!se&&oe.text&&g(oe.text.toLowerCase())&&(se=!0);let U=on(oe.text,l).filter(de=>!z.has(de));if(M)for(let de of U)M.rawLinks.length<25&&M.rawLinks.push(de);if(U.forEach(de=>z.add(de)),!U.length){if(ue>1)break;continue}let ne=null,W=[];for(let de of U){let q=dt(de);q&&((!ne||q>ne)&&(ne=q),!Fe(q.toISOString(),w,R))||W.push(de)}let{rows:$,newest:Q}=await Kt(W,{groups:p,exclude:d,fromD:w,toD:R,originHost:Ue(l),channelLabel:"search",deadline:ee+X,browserBudget:Ae,diag:S,tally:te,pick:xe,have:ke()});$.forEach(de=>k.push(de)),re+=U.length;let Ye=Q&&ne?Q>ne?Q:ne:Q||ne;if(w&&Ye&&Ye<w&&(Ce=!0),re>I)break e}}let Oe=k.length-L;ie=Oe,B?v.push("поиск: "+B):v.push(`поиск: ссылок ${z.size}, совпало ${Oe}`+(z.size===0?" (пусто/оболочка)":Oe===0?" (нет по слову/периоду)":"")),k.length===L&&(z.size<3||!se)&&(ae=x.build("MCQPLACEHOLDER",1).replace(/MCQPLACEHOLDER/g,"{q}"),z.size>=3&&v.push("поиск: ключа нет в самой выдаче -> похоже на оболочку, пробую браузером"))}else(!A||A.search)&&v.push("поиск не найден (нужен ручной шаблон site | url?...{q})")}catch(x){v.push("search: "+x.message)}try{let x=ae?ae.replace(/\{q\}/g,"{q}"):null;x||(x=ii(H,l)||null);let L=x;if(Z.has("render"))v.push("render: пропущен (память: у сайта не работает; перепроверим позже)");else if(A&&A.render||ie===0&&j===0&&L){let z=null,X=null;if(A&&A.render?(z=A.render,X=A.selectors||null):z=L,z){T.push("render");let I=Ue(l),G=/\{q\}/.test(z)?r.split(/[,;\n]+/).map(J=>J.trim()).filter(Boolean).slice(0,3)||[r]:[null],_=new Set,re=[],B=!1,se=!1;for(let J of G.length?G:[null]){let Ne=J==null?z:z.replace(/\{q\}/g,encodeURIComponent(J));M&&!M.renderUrl&&(M.renderUrl=Ne);let Ce=await hr(Ne,{selectors:X,host:I});Ka(Ce)&&(se=!0),Ce.cf&&(B=!0);for(let ue of Ce.items||[]){let ve;try{ve=new URL(ue.url).host.replace(/^www\./,"")}catch{continue}ve===I&&(_.has(ue.url)||(_.add(ue.url),re.push(ue)))}}let ee={items:re,cf:B};he.render=se&&!re.length?null:re.length,se&&!re.length&&v.push("render: браузера не было — канал не проверялся (память не трогаем)");let Re=re.map(J=>J.url).filter(Boolean),Te=(await Kt(Re,{groups:p,exclude:d,fromD:w,toD:R,originHost:Ue(l),channelLabel:"render",deadline:Date.now()+45e3,browserBudget:Ae,diag:S,tally:te,pick:xe,have:ke()})).rows,Oe=!!(A&&A.render&&/\{q\}/.test(A.render));if(!Te.length&&re.length)for(let J of re){let Ne=((J.title||"")+" "+(J.snippet||"")).toLowerCase();if(y(Ne)||!Oe&&!g(Ne))continue;let Ce=fe(J.date)||dt(J.url),ue=Ce?Ce.toISOString():null;(w||R)&&!Fe(ue,w,R)||Te.push({source:Ue(l),title:J.title||J.url,url:J.url,date:ue||"",channel:"render*",match:b(J.title)?"title":"body",snippet:Wt(zs(J),J.title,f)})}Te.forEach(J=>k.push(J)),Le=Te.length,Te.length?v.push(`render: совпало ${Te.length}`):v.push(ee.cf?"render: Cloudflare не пройден за таймаут":!re.length&&ee.err?"render: "+ee.err:`render: снято ${re.length} ссылок, совпало 0`+(re.length?" (нет по слову/периоду)":" (пусто/логин/капча?)"))}}}catch(x){v.push("render: "+x.message)}try{if(A&&A.feed){T.push("feed");let x=/\{page\}|\{off\d+\}/.test(A.feed),L=!!A.feedPost&&/\{date\}/.test(A.feedPost),z=x||L?20:1,X=Date.now(),I=9e4,G=new Set,_=[],re=0,B=!1,se=0,ee=0,Re=null,Te=!1,Oe=!1,J=R?new Date(+R+864e5):new Date;for(let ue=1;ue<=z&&!B&&!(Date.now()-X>I);ue++){let ve=[],oe=/^\//.test(A.feed)?l.replace(/\/$/,"")+A.feed:A.feed;if(L){let W=A.feedPost.replace(/\{date\}/g,cu(J)),$=await iu(oe,W);if(!$&&Y){let Q=await cn(oe,{post:W,host:Ue(l)});Q&&Q.ok&&Q.posted?$=Q.html:Q&&Q.err&&(Re=Q.err)}if(!$)break;ve=on($,l).map(Q=>({url:Q,title:"",date:"",snippet:""}))}else{let W=ue===1&&A.feedFirst?A.feedFirst:oe.replace(/\{page\}/g,ue);W=W.replace(/\{off(\d+)\}/g,(Ye,de)=>(ue-1)*+de);let $=null,Q=await at(W);if(Q){let Ye=on(Q,l).filter(de=>ur(de));Ye.length>=3&&($=Ye.map(de=>({url:de,title:"",date:"",snippet:""})))}$?(ve=$,Oe=!0):ve=(await hr(W,{selectors:A.feedSelectors||null,host:Ue(l)})).items||[]}if(ee++,ve=ve.filter(W=>W.url&&!G.has(W.url)),ve.forEach(W=>G.add(W.url)),!ve.length){ee>1&&(Te=!0);break}se+=ve.length;let U=null,ne=null;for(let W of ve){let $=fe(W.date)||dt(W.url);$&&(!U||$>U)&&(U=$),$&&(!ne||$<ne)&&(ne=$);let Q=((W.title||"")+" "+(W.snippet||"")).toLowerCase();if($&&g(Q)&&!y(Q)){if((w||R)&&!Fe($,w,R))continue;k.push({source:Ue(l),title:W.title||W.url,url:W.url,date:Ve($),channel:"feed",match:b(W.title)?"title":"body",snippet:Wt(zs(W),W.title,f)}),re++;continue}$&&(w&&+$<+w-864e5||R&&+$>+R+864e5)||_.push(W.url)}L&&(J=ne&&+ne<+J?ne:new Date(+J-864e5),w&&+J<+w-864e5&&(B=!0)),w&&U&&U<w&&(B=!0)}if(_.length){let ue=[...new Set(r.split(/[,;\n]+/).map(oe=>oe.trim()).filter(Boolean).flatMap(oe=>oe.split(/\s+/)).flatMap(oe=>Ms(oe)))];if(ue.length){let oe=i(U=>ue.some(ne=>U.toLowerCase().includes(ne)),"hinted");_.sort((U,ne)=>(oe(ne)?1:0)-(oe(U)?1:0))}let{rows:ve}=await Kt(_,{groups:p,exclude:d,fromD:w,toD:R,originHost:Ue(l),channelLabel:"feed",deadline:Date.now()+9e4,maxFetch:300,browserBudget:Ae,diag:S,tally:te,have:ke()});for(let oe of ve)k.push(oe),re++}let Ne=` (страниц ${ee}`+(Oe?", обычным запросом":"")+(Te?", дальше повтор — пагинация не двигается":"")+")",Ce=se?" (нет по слову/периоду)":Re?" (лента не ответила: "+Re+")":" (лента ничего не отдала)";re?v.push(`feed: ссылок ${se}${Ne}, совпало ${re}`):v.push(`feed: ссылок ${se}${Ne}, совпало 0`+Ce)}}catch(x){v.push("feed: "+x.message)}let Ze=0;try{let x=!!(A&&A.browserSearch===!0&&ie===0);if(!Z.has("sitesearch")&&(k.length===0||x)){let L=r.split(/[,;\n]+/).map(se=>se.trim()).filter(Boolean);L.length||L.push(r);let z=Ue(l),X=new Set,I=[],G="",_=!1,re=!1;{let se=await _a(l,L.slice(0,3),{host:z});Ka(se)&&(re=!0),se.cf&&(_=!0),se.note&&(G=se.note);for(let ee of se.items||[]){let Re;try{Re=new URL(ee.url).host.replace(/^www\./,"")}catch{continue}Re!==z&&!Re.endsWith("."+z)||X.has(ee.url)||(X.add(ee.url),I.push(ee))}}let B={items:I,cf:_,note:G};if(he.sitesearch=re&&!I.length?null:I.length,I.length){T.push("браузер-поиск");let se=(await Kt(I.map(ee=>ee.url),{groups:p,exclude:d,fromD:w,toD:R,originHost:Ue(l),channelLabel:"браузер-поиск",deadline:Date.now()+9e4,browserFallback:Y,browserBudget:Ae,diag:S,tally:te,pick:xe,have:ke()})).rows;if(!se.length)for(let ee of I){let Re=((ee.title||"")+" "+(ee.snippet||"")).toLowerCase();if(!g(Re)||y(Re))continue;let Te=fe(ee.date)||dt(ee.url),Oe=Te?Te.toISOString():null;(w||R)&&!Fe(Oe,w,R)||se.push({source:z,title:ee.title||ee.url,url:ee.url,date:Oe||"",channel:"браузер-поиск*",match:b(ee.title)?"title":"body",snippet:Wt(zs(ee),ee.title,f)})}se.forEach(ee=>k.push(ee)),Ze=se.length,v.push(se.length?`браузер-поиск: совпало ${se.length}`:`браузер-поиск: снято ${I.length}, совпало 0 (нет по слову/периоду)`)}else B.err?v.push("браузер-поиск: "+B.err):B.note&&v.push("браузер-поиск: "+B.note)}}catch(x){v.push("браузер-поиск: "+x.message)}try{let x=t.external===!1?!1:!!(A&&A.external===!0)||t.external===!0;if(Z.has("external"))v.push("внешний: пропущен (память: у сайта не работает; перепроверим позже)");else if(!x)V.push("external");else if((A&&A.external||ie===0&&Le===0)&&j===0&&Ze===0){T.push("внешний");let L=Ue(l),z=r.split(/[,;\n]+/).map(q=>q.trim()).filter(Boolean).map(q=>/\s/.test(q)&&!/^["«]/.test(q)?"("+q+")":q).join(" OR "),X=(t.exclude||"").split(/[,;\n]+/).map(q=>q.trim()).filter(Boolean).map(q=>"-"+(/\s/.test(q)?'"'+q+'"':q)).join(" "),I=encodeURIComponent(["site:"+L,z,X].filter(Boolean).join(" ")),G=new Set,_=[],re=Date.now(),B={},se=0,ee="";{let q=new Set,Ke=Date.now(),He=[Me=>`https://html.duckduckgo.com/html/?q=${I}&kl=ru-ru&ia=web&p=-1${Me?"&s="+Me:""}`,Me=>`https://duckduckgo.com/html/?q=${I}&kl=ru-ru&ia=web&p=-1${Me?"&s="+Me:""}`];for(let Me=0;Me<He.length&&_.length<60&&Date.now()-Ke<12e3;Me++){let tt=He[Me],rt="https://duckduckgo.com/";for(let Je=0;Je<=60&&Date.now()-Ke<12e3;Je+=30){let bs=tt(Je),Ht=await Mu(bs,rt);if(Je===0&&Me===0){let lt=Ht.text||"",pa=(lt.match(/class="result__a"/g)||[]).length,jl=/anomaly|are you a robot|too many requests|captcha|privacy.*simplified/i.test(lt),Ol=lt.length<22*1024&&pa===0,ql=(((lt.split(/class="result__a"/i)[1]||"").slice(0,400).match(/href="([^"]+)"/i)||[])[1]||"").replace(/&amp;/g,"&").slice(0,110);ee=`${Ht.status?"HTTP "+Ht.status+" ":""}${Ht.err?Ht.err+" ":""}стр ${Math.round(lt.length/1024)}КБ, result__a ${pa}${jl||Ol?", заглушка/капча":""}; href1: ${ql||"—"}`,B.ddg=ee}if(!Ht.ok)break;let da=Cu(Ht.text,L).filter(lt=>!q.has(lt.url));if(!da.length)break;da.forEach(lt=>{q.add(lt.url),G.add(lt.url),_.push(lt)})}if(_.length>0)break}se=q.size}let Re=0,Te="",Oe=_.length<3||ee&&/заглушка|капча|HTTP 40[33]|не открылся|таймаут/.test(ee);if(Oe){let q=new Set,Ke=`https://www.bing.com/search?q=${I}&setlang=ru-RU&cc=KZ&ensearch=0`,He=await hr(Ke,{bing:!0,host:L}),Me=He.items||[];for(let rt of Me){let Je=Lu(rt.url,L)||Fa(rt.url,L);!Je||q.has(Je)||(q.add(Je),G.has(Je)||(G.add(Je),_.push({url:Je,title:rt.title||"",snippet:rt.snippet||""})))}Re=q.size;let tt=Me.length?String(Me[0].url||"").replace(/&amp;/g,"&").slice(0,90):"";Te=He.cf?"капча/Cloudflare не пройден":`рендер: снято ${Me.length}, домена ${Re}${Re===0&&tt?"; href1: "+tt:""}`,B.bing=Te}he.external=_.length;let J=(await Kt(_.map(q=>q.url),{groups:p,exclude:d,fromD:w,toD:R,originHost:L,channelLabel:"внешний",deadline:Date.now()+3e4,diag:S,tally:te,pick:xe,have:ke()})).rows,Ne=new Set;for(let q of J)k.push(q),Ne.add(q.url);let Ce=[],ue=0,ve=0;for(let q of _){if(Ne.has(q.url))continue;let Ke=(q.title||"").toLowerCase(),He=(q.snippet||"").toLowerCase(),Me=g(Ke);if(!Me||y(Ke+" "+He)){ve++;continue}let tt=dt(q.url)||fe(q.snippet+" "+q.title+" "+(q.date||""));if(!tt){ue++;continue}Fe(tt.toISOString(),w,R)&&Ce.push({it:q,iso:tt.toISOString(),inTitle:Me})}let oe={},U={};for(let q of Ce){let{b:Ke,a:He}=Va(q.it.snippet,f);Ke.length>=12&&(oe[Ke]=(oe[Ke]||0)+1),He.length>=12&&(U[He]=(U[He]||0)+1)}let ne=0,W=0;for(let q of Ce){let{b:Ke,a:He}=Va(q.it.snippet,f);if((Ke.length>=12&&oe[Ke]>1||He.length>=12&&U[He]>1)&&!q.inTitle){W++;continue}let tt=Su(q.it.title,L);k.push({source:L,title:tt,url:q.it.url,date:q.iso,channel:"внешний",match:q.inTitle?"title":"body",snippet:ln(q.it.snippet||q.it.title||"",f)}),ne++}let $=J.length+ne,Q=[ve?`не по ключу ${ve}`:"",W?`боковой блок ${W}`:"",ue?`без даты ${ue}`:""].filter(Boolean).join(", "),Ye=[];Ye.push(`ddg:${se}${B.ddg?" ["+B.ddg+"]":""}`),Oe&&Ye.push(`bing:${Re}${B.bing?" ["+B.bing+"]":""}`);let de=_.length?Q?"отсеяно "+Q:"нет по слову/периоду":Oe?"оба движка 0: "+(B.ddg||"")+(B.bing?" | "+B.bing:""):B.ddg||"нет ответа";v.push($?`внешний: совпало ${$} (из статьи ${J.length}, из выдачи ${ne}${Q?"; отсеяно "+Q:""}; ${Ye.join(", ")})`:`внешний: 0 [ссылок ${_.length}; ${de}]`)}}catch(x){v.push("внешний: "+x.message)}let Xe=k.filter(x=>x.channel==="rss"||x.channel==="news-sitemap");if(Xe.length){let x=0,L=0,z=0,X=new Map;await br(Xe,4,async G=>{if(!G.url)return;let _=X.get(G.url)||At.get(G.url);if(!_){let re=await mr(G.url);if(!re){z++;return}let B=Ds(re,G.url,xe&&xe.hint);if(!B||!B.date){z++;return}_=B.date,At.set(G.url,_),xe&&B.dateVia&&(xe.seen[B.dateVia]=(xe.seen[B.dateVia]||0)+1)}X.set(G.url,_),uu(G.date,_)||x++,G.date=_,Fe(_,w,R)||(G._outOfPeriod=!0,L++)});let I=k.length;k=k.filter(G=>!G._outOfPeriod),(x||L||z)&&v.push("даты лент сверены по статьям: поправлено "+x+(L?", вне периода "+L+" (лента показывала их свежими)":"")+(z?", не открылись "+z+" — оставлены с датой ленты, ей верить нельзя":"")),I!==k.length&&k.length}let ge=new Set([Ue(l)]),ce=i(x=>{for(let L of[].concat(x||[])){let z=L&&String(L).match(/^https?:\/\/([^/]+)/i);z&&ge.add(z[1].replace(/^www\./,""))}},"addHost");ce(c),A&&(ce(A.search),ce(A.render),ce(A.feed));let Ge=new Map,St=[],_t=0,en=0,Dn=new Map;for(let x of k){if(!x.url)continue;x.url=On(x.url);let L=we(x.url),z=Ge.get(L);if(z){z._ch.includes(x.channel)||z._ch.push(x.channel);continue}if(x._dupe)continue;if(Hs(x.url)){en++;continue}let X;try{X=new URL(x.url).host.replace(/^www\./,"")}catch{continue}if(!ge.has(X)){_t++,Dn.set(X,(Dn.get(X)||0)+1);continue}x._ch=[x.channel],Ge.set(L,x),St.push(x)}if(_t){let x=[...Dn].sort((L,z)=>z[1]-L[1]).slice(0,3).map(([L,z])=>L+" — "+z).join(", ");v.push("отброшено "+_t+" с другого домена/поддомена"+(x?" ("+x+")":""))}en&&v.push("отброшено "+en+" листингов/рубрик"),he.contrib={};for(let x of St)he.contrib[x.channel]=(he.contrib[x.channel]||0)+1;he.total=St.length,he.picks=xe.seen;let ze=te,tn=Object.values(ze).filter(x=>typeof x=="number").reduce((x,L)=>x+L,0),E=i(()=>{let x=ze.noOpenWhy||{},L=Object.entries(x).sort((z,X)=>X[1]-z[1]).slice(0,3).map(([z,X])=>z+" — "+X).join(", ");return"не открылись "+ze.noOpen+(L?" ("+L+")":" (защита/таймаут)")},"noOpenBit"),me=i(()=>{let x=Object.entries(ze.noDateWhere||{}).sort((z,X)=>X[1]-z[1]),L=x.filter(([,z])=>z>=Math.max(3,ze.noDate*.15)).slice(0,3);return L.length?"без даты на странице — "+ze.noDate+" (в разделах: "+L.map(([z,X])=>"/"+z+"/ "+X).join(", ")+")":"без даты на странице — "+ze.noDate+(x.length>1?" (разделов "+x.length+", ни один не преобладает — размазано по сайту)":"")},"noDateBit");if(St.length){let x=ze.noOpen||0,L=ze.noDate||0,z=ze.late||0,X=ze.overBudget||0,I=x+L+z+X;if(I>=10&&I>=tn*.05){let G=[];x&&G.push(E()),L&&G.push(me()),z&&G.push("не успели по времени — "+z),X&&G.push("не влезли в бюджет канала — "+X),v.push("потери: "+I+" страниц из "+tn+" не проверены ["+G.join(", ")+"] — среди них мог быть материал")}}else{let x=[],L=i((X,I)=>{ze[X]&&x.push(I+" "+ze[X])},"add");L("noKw","прочитали, ключа в тексте нет —"),L("outOfPeriod","вне периода —"),L("staleDate","вне периода по памяти дат —"),L("urlDateOut","вне периода по дате в адресе —"),ze.noOpen&&x.push(E()),ze.noDate&&x.push(me()),L("notArticle","не статьи (рубрики/меню) —"),L("listing","разделы сайта, отсеяны по адресу —"),L("excluded","отсеяно минус-словом —"),L("late","не успели по времени —"),L("overBudget","не влезли в бюджет канала —");let z;tn?(ze.noOpen||0)>tn/2?z="сайт не отдал статьи (защита/таймаут) — это не «не писали», а «не достучались»":(ze.noKw||0)>0?z="сайт доступен, статьи прочитаны — про ключ в этот период не писали":(ze.late||0)>tn/2?z="упёрлись в бюджет времени — материал мог остаться непроверенным":z="кандидаты были, но ни один не подошёл":z="ни одной ссылки-кандидата: ни ленты, ни карты, ни рабочего поиска у сайта не нашлось",v.push("почему ноль: "+z+(x.length?" ["+x.join(", ")+"]":""))}let Se=ze._slow;if(Se&&Se.resets){let x=Object.entries(Se.why||{}).sort((L,z)=>z[1]-L[1]).map(([L,z])=>L+" — "+z).join(", ");v.push(Se.on?"сайт просил сбавить ход ("+(x||Se.resets+" раз")+") — перешли на одиночные запросы"+(Se.tried?Se.saved?", со второй попытки прочитано "+Se.saved+" из "+Se.tried:", повтор не помог ("+Se.tried+" попыток)":""):"сайт просил сбавить ход: "+(x||Se.resets)+" — единичные случаи, ход не сбавляли")}if(Ae.left<16){let x=16-Ae.left,L=te&&te.viaBrowser||0;v.push(L?"статей дочитано браузером: "+L+" из "+x+" попыток (обычным запросом не открывались)":"браузер не дочитал ни одной статьи из "+x+" попыток")}V.length&&(he.notRun=V);let Be={},ct={};for(let x of St){for(let L of x._ch)Be[L]=(Be[L]||0)+1;x._ch.length===1&&(ct[x._ch[0]]=(ct[x._ch[0]]||0)+1),x.channels=x._ch.map(Ga).join(" + "),delete x._ch}he.foundBy=Be,he.onlyBy=ct;let Cn=Object.keys(Be).sort((x,L)=>Be[L]-Be[x]).map(x=>`${Ga(x)} ${Be[x]}`+(ct[x]?` (только он ${ct[x]})`:" (все повтор)"));return Cn.length&&v.push("кто принёс: "+Cn.join(", ")),{rows:St,channel:T.join(" + ")||"none",note:v.join("; "),stats:he,diag:t.diag?{meta:M,records:S}:void 0}}var au,Ga,Ka,hr,At,cn,_a,ni,wr,Is,ri,Ya,du,pu,fu,Es,gr,vu,an,jn,Os,Ru,qu,Ja,Pn,Qa,Fu,Uu,Ps,xr=le(()=>{Ut();Nn();Ua();au={sitemap:"sitemap-глубина",search:"поиск","render*":"render","браузер-поиск*":"браузер-поиск"},Ga=i(e=>au[e]||e,"chName"),Ka=i(e=>/браузер не поднялся|браузер завис/.test(String(e&&(e.err||e.note)||"")),"browserDown"),hr=i(async()=>({items:[],cf:!1}),"renderScrape");i(Za,"setRenderer");At={get:i(()=>null,"get"),set:i(()=>{},"set")};i($a,"setDateStore");cn=i(async()=>({ok:!1}),"renderFetch"),_a=i(async()=>({items:[],cf:!1}),"renderSiteSearch");i(ei,"setHtmlFetcher");i(ti,"setSiteSearcher");i(Kt,"enrichUrls");i(Wa,"isChallengePage");ni="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",wr={"User-Agent":ni,"Accept-Language":"ru,en;q=0.9","Accept-Encoding":"gzip, deflate"},Is=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),ri=typeof process<"u"&&process.env&&Number(process.env.MC_FETCH_TIMEOUT_MS)||3e4;i(iu,"tryPostText");i(cu,"dmy");i(lu,"fetchText");i(at,"tryText");i(mr,"tryPlain");Ya={ECONNRESET:"сайт оборвал соединение",ECONNREFUSED:"сайт не принял соединение",ECONNABORTED:"соединение прервано",ETIMEDOUT:"сайт не ответил",ENOTFOUND:"домен не найден (DNS)",EAI_AGAIN:"DNS не ответил",EHOSTUNREACH:"хост недостижим",ENETUNREACH:"сети нет",EPROTO:"не сошлись по TLS",UND_ERR_CONNECT_TIMEOUT:"не удалось соединиться",UND_ERR_HEADERS_TIMEOUT:"сайт не прислал заголовки",UND_ERR_BODY_TIMEOUT:"сайт замолчал на середине ответа",UND_ERR_SOCKET:"соединение оборвалось",CERT_HAS_EXPIRED:"у сайта просрочен сертификат",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"сертификат сайта не проверяется",DEPTH_ZERO_SELF_SIGNED_CERT:"самоподписанный сертификат"};i(uu,"sameDay");i(Bs,"netErr");du=i(e=>/\b(ECONNRESET|ECONNABORTED|UND_ERR_SOCKET)\b/.test(String(e||"")),"isResetErr"),pu=i(e=>/\bHTTP (429|503)\b/.test(String(e||"")),"isBusyErr");i(hu,"backoffReason");i(fr,"fetchInfo");i(js,"fetchPlain");fu={"User-Agent":ni,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8","Accept-Language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7","Accept-Encoding":"gzip, deflate",DNT:"1","Upgrade-Insecure-Requests":"1","Sec-Fetch-Dest":"document","Sec-Fetch-Mode":"navigate","Sec-Fetch-Site":"same-origin","Sec-Fetch-User":"?1",Pragma:"no-cache","Cache-Control":"no-cache"};i(mu,"fetchSearch");i(Ue,"host");i(Hs,"isListingUrl");i(pr,"isJunkMapUrl");i(gu,"mapYearMonth");i(bu,"depthBudget");i(On,"canonUrl");i(wu,"isAbbr");i(yu,"stemRu");i(xu,"mkTerm");i(Lt,"parseQuery");i(ku,"termHit");i(We,"matchGroups");i(un,"queryTerms");i(ln,"makeSnippet");Es=i(e=>{let t=[];for(let n=0,r=e.length-1;n<=r;n++,r--)t.push(e[n]),n!==r&&t.push(e[r]);return t},"bothEnds"),gr=i(e=>String(e||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),vu=24;i(zs,"cardText");i(Wt,"snippetFor");i(Su,"cleanGoogleTitle");i(Va,"kwContext");i(Tu,"normalizeOrigin");i(Au,"toggleWww");i(Lu,"bingDecodeHref");an=0,jn=0,Os=!1,Ru=i(e=>new Promise(t=>setTimeout(t,e)),"_sleep");i(si,"resetDdgThrottle");i(Mu,"ddgFetch");i(Du,"ddgReal");i(Cu,"ddgResults");i(br,"mapPool");i(oi,"robotsSitemaps");i(Eu,"unwrapBrowserXml");i(zu,"makeTextFetcher");i(Nu,"getNewsSitemapEntries");i(Pu,"collectSitemapCandidates");i(ai,"entriesFromSitemap");i(ii,"parseSearchForm");i(Xa,"searchLooksReal");i(Ns,"detectSearch");i(ju,"telegramChannel");i(Ou,"parseTelegramPosts");qu=typeof process<"u"&&process.env&&process.env.MC_TG_BASE||"https://t.me/s/";i(Iu,"searchTelegram");Ja={hour:"EgIIAQ%3D%3D",today:"EgIIAg%3D%3D",week:"EgIIAw%3D%3D",month:"EgIIBA%3D%3D",year:"EgIIBQ%3D%3D"};i(Bu,"balancedJson");i(Hu,"extractYtInitialData");i(qs,"collectVideoRenderers");Pn=i(e=>e&&e.runs?e.runs.map(t=>t.text).join(""):e&&e.simpleText||"","ytRuns"),Qa=typeof process<"u"&&process.env&&process.env.MC_YT_BASE||"https://www.youtube.com",Fu=2e4,Uu=60;i(Gu,"ytFuzzDays");i(Ku,"ytExactDate");Ps=["hour","today","week","month","year"];i(Wu,"ytRangeFor");i(ci,"searchYouTube");i(yr,"searchSite")});function it(e,t){Tr((0,je.dirname)(e));let n=e+".tmp";(0,ye.writeFileSync)(n,JSON.stringify(t,null,2)),(0,ye.renameSync)(n,e)}function jt(e,t){try{return(0,ye.existsSync)(e)?JSON.parse((0,ye.readFileSync)(e,"utf8")):t}catch(n){return console.error("битый файл",e,n.message),t}}function Xu(){Tr(vr),pn=jt(Gs,{})||{},pe.clear();for(let e of(0,ye.existsSync)(vr)?(0,ye.readdirSync)(vr):[]){let t=jt(hn(e),null);t&&pe.set(e,{meta:t,feed:jt(fn(e),[])||[]})}}function Ju(){if(!(0,ye.existsSync)(kr)||pe.size>0)return;let e=jt(kr,null);if(!(!e||!Array.isArray(e.projects))){e.settings&&(pn=e.settings,it(Gs,pn));for(let t of e.projects){let n=t.id||di("p"),r={id:n,name:t.name||"Проект",config:t.config||{},schedule:t.schedule||{mode:"off"},lastRun:t.lastRun||null,lastLog:t.log||[]};it(hn(n),r),it(fn(n),t.items||[]),pe.set(n,{meta:r,feed:t.items||[]})}try{(0,ye.renameSync)(kr,kr+".bak")}catch{}console.log(`[store] мигрировал ${e.projects.length} проект(ов) из data.json в data/projects/`)}}function et(){return pn}function pi(e){Object.assign(pn,e),it(Gs,pn)}function Ar(){return[...pe.values()].map(e=>({id:e.meta.id,name:e.meta.name,schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,itemCount:(e.feed||[]).length,newCount:(e.feed||[]).filter(t=>t.isNew).length,runsCount:(e.meta.runs||[]).length,last:(e.meta.runs||[])[0]||null,config:e.meta.config||{}}))}function nt(e){let t=pe.get(e);return t?Ks(t):null}function hi(e,t){let n=di("p"),r={id:n,name:e||"Новый проект",config:t||{},schedule:{mode:"off"},lastRun:null,lastLog:[]};return Tr(qn(n)),it(hn(n),r),it(fn(n),[]),pe.set(n,{meta:r,feed:[]}),Ks(pe.get(n))}function fi(e,t){let n=pe.get(e);return n?(t.name!==void 0&&(n.meta.name=t.name),t.config&&(n.meta.config=t.config),t.schedule&&(n.meta.schedule=t.schedule),Vt(e),Ks(n)):null}function mi(e){if(!pe.has(e))return!1;pe.delete(e);try{(0,ye.rmSync)(qn(e),{recursive:!0,force:!0})}catch{}return!0}function gi(e){let t=pe.get(e);t&&(t.feed.forEach(n=>n.isNew=!1),yt(e))}function Lr(e,t,n){let r=pe.get(e);return r?(r.meta.ai=r.meta.ai||{},r.meta.ai[t]=n,Vt(e),r.meta.ai):null}function bi(e){let t=pe.get(e);return t&&t.meta.ai||{}}function Ot(e){let t=pe.get(e);return t&&t.meta.tg||{}}function Rt(e,t){let n=pe.get(e);return n?(n.meta.tg=Object.assign({},n.meta.tg||{},t||{}),Vt(e),n.meta.tg):null}function In(e){let t=Ot(e);return{enabled:!!t.enabled,hasToken:!!t.token,bot:t.bot||"",chats:(t.chats||[]).map(n=>({id:n.id,name:n.name||""})),sentTotal:t.sentTotal||0,err:t.err||""}}function wi(e,t){let n=pe.get(e);return n?(n.feed||[]).filter(r=>!r.tgSent&&(!t||r.run===t)):[]}function yi(e,t){let n=pe.get(e);if(!n)return 0;let r=new Set((t||[]).map(we)),s=0;for(let o of n.feed)!o.tgSent&&r.has(we(o.url))&&(o.tgSent=!0,s++);return s&&yt(e),s}function xi(e){let t=pe.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.tgSent||(r.tgSent=!0,n++);return n&&yt(e),n}function ki(e,t){let n=pe.get(e);if(!n)return 0;let r=new Set((t||[]).filter(Boolean).map(we));if(!r.size)return 0;let s=0;for(let o of n.feed)o.tgSent&&r.has(we(o.url))&&(delete o.tgSent,s++);return s&&yt(e),s}function vi(e,t){let n=pe.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(we(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(we(o.url));a&&(o.sent=a.mark,o.sentWhy=a.why||"",o.sentAt=Date.now(),o.sentModel=a.model||"",s++)}return s&&yt(e),s}function Si(e,t){let n=pe.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(we(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(we(o.url));a&&(o.rel=a.mark,o.relWhy=a.why||"",o.relAt=Date.now(),o.relModel=a.model||"",s++)}return s&&yt(e),s}function Ti(e){let t=pe.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.rel&&(delete r.rel,delete r.relWhy,delete r.relAt,delete r.relModel,n++);return n&&yt(e),n}function Ai(e){let t=pe.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.sent&&(delete r.sent,delete r.sentWhy,delete r.sentAt,delete r.sentModel,n++);return n&&yt(e),n}function Fs(e){let t=Yt(e);if(!(0,ye.existsSync)(t))return[];let n=[];for(let r of(0,ye.readdirSync)(t))if(r.endsWith(".json"))try{n.push({file:(0,je.join)(t,r),ts:r.slice(0,-5),bytes:(0,ye.statSync)((0,je.join)(t,r)).size})}catch{}return n.sort((r,s)=>r.ts.localeCompare(s.ts))}function Li(e){let t=Fs(e),n=t.reduce((o,a)=>o+a.bytes,0),r=Sr(fn(e)),s=Sr(hn(e));return{bytes:n+r+s,runBytes:n,feedBytes:r,metaBytes:s,runCount:t.length,avgRunBytes:t.length?Math.round(n/t.length):0}}function Qu(e,t,{keep:n=30}={}){let r=Math.max(0,+t||0)*1024*1024;if(!r)return{removed:0,freed:0};let s=Fs(e),a=Sr(fn(e))+Sr(hn(e))+s.reduce((h,m)=>h+m.bytes,0),c=0,u=0;for(let h of s){if(a<=r||s.length-c<=n)break;try{(0,ye.rmSync)(h.file,{force:!0}),c++,u+=h.bytes,a-=h.bytes}catch{}}let l=a>r;if(c){let h=pe.get(e);if(h&&Array.isArray(h.meta.runs)){let m=new Set(Fs(e).map(d=>d.ts)),p=h.meta.runs.length;h.meta.runs=h.meta.runs.filter(d=>m.has(d.ts)),h.meta.runs.length!==p&&Vt(e)}}return{removed:c,freed:u,bytes:a,limit:r,capped:l}}function Rr(e,t,n){let r=pe.get(e);if(!r||!t||!n||!n.length)return!1;let s=(0,je.join)(Yt(e),t+".json"),o=jt(s,null);return o?(o.log=(o.log||[]).concat(n),it(s,o),Ei(e,t,o),(r.meta.runs||[])[0]&&r.meta.runs[0].ts===t&&(r.meta.lastLog=(r.meta.lastLog||[]).concat(n),Vt(e)),!0):!1}function Ri(e,t){let n=pe.get(e);if(!n)return null;let r=new Set((t||[]).filter(Boolean).map(we));if(!r.size)return{removed:0,total:(n.feed||[]).length};let s=n.feed.length;n.feed=n.feed.filter(a=>!r.has(we(a.url)));let o=s-n.feed.length;n.meta.deleted=[...new Set((n.meta.deleted||[]).concat([...r]))],n.meta.deleted.length>2e4&&(n.meta.deleted=n.meta.deleted.slice(-2e4)),n.meta.editedAt=Date.now();for(let a of n.meta.runs||[]){let c=(0,je.join)(Yt(e),a.ts+".json"),u=jt(c,null);if(!u||!Array.isArray(u.rows))continue;let l=u.rows.length;u.rows=u.rows.filter(h=>!r.has(we(h.url))),u.rows.length!==l&&(u.found=u.rows.length,u.added=Math.max(0,(u.added||0)-(l-u.rows.length)),it(c,u),a.found=u.found,a.added=u.added)}return yt(e),Vt(e),{removed:o,total:n.feed.length,deletedTotal:n.meta.deleted.length}}function mn(e,t,n,r){let s=pe.get(e);if(!s)return{added:0,total:0};s.meta.runs=s.meta.runs||[];let o=r?s.meta.runs.find(p=>p.ts===r):null,a=o?o.at:Date.now();r||(r=Vu());let c=new Set(s.feed.map(p=>we(p.url))),u=new Set((s.meta.deleted||[]).map(we)),l=u.size?t.filter(p=>!u.has(we(p.url))):t;for(let p of l)!p.url||c.has(we(p.url))||(c.add(we(p.url)),s.feed.push({source:p.source,date:p.date,title:p.title,url:p.url,channel:p.channel,channels:p.channels||p.channel,match:p.match,snippet:p.snippet,author:p.author||"",kind:p.kind||"",via:p.via||"",matchIn:p.matchIn||"",comments:Number.isFinite(p.comments)?p.comments:null,firstSeenAt:Date.now(),isNew:!0,run:r}));s.feed.sort((p,d)=>String(d.date||"").localeCompare(String(p.date||""))),s.feed.length>5e3&&(s.feed=s.feed.slice(0,5e3));let h=s.feed.filter(p=>p.run===r).length,m=l.length;s.meta.lastRun=a,s.meta.lastLog=n||[],o?(o.added=h,o.found=m):(o={ts:r,at:a,added:h,found:m},s.meta.runs.unshift(o)),s.meta.runs.length>300&&(s.meta.runs=s.meta.runs.slice(0,300)),yt(e),Vt(e);try{it((0,je.join)(Yt(e),r+".json"),{at:a,added:h,found:m,log:n||[],rows:l})}catch{}Ei(e,r,{at:a,added:h,found:m,log:n||[]});try{let p=Ws(s.meta.config);p&&Date.now()-(li.get(e)||0)>300*1e3&&(li.set(e,Date.now()),Qu(e,p))}catch{}return{added:h,total:s.feed.length,ts:r}}function Ci(e,t,n){let r=pe.get(e);if(!r||!n)return null;let s=i(c=>(n.log||[]).find(u=>u.site===c),"line"),o=s("(период)"),a=s("(время)");return{проект:r.meta.name||"",прогон:Di(t)||t,"id прогона":t,запрос:(r.meta.config||{}).keyword||"",период:o?o.note:"",время:a?a.note:"",найдено:n.found||0,новых:n.added||0,сайты:(n.log||[]).map(c=>{let u={сайт:c.site,найдено:c.found||0,каналы:c.channel||"",заметка:c.note||""};return c.ms&&(u.секунд=Math.round(c.ms/1e3)),u})}}function Ei(e,t,n){let r=pe.get(e);if(!r)return;let s=Ci(e,t,n);if(s)try{Tr(dn);let o=Mi(r.meta.name);it((0,je.join)(dn,$u(r.meta.name,t)),s);let a=(0,ye.readdirSync)(dn).filter(c=>c.endsWith(" — "+o+".json")).sort();for(let c of a.slice(0,Math.max(0,a.length-Zu)))try{(0,ye.rmSync)((0,je.join)(dn,c),{force:!0})}catch{}}catch{}}function zi(e,t){let n=jt((0,je.join)(Yt(e),t+".json"),null);return n?Ci(e,t,n):null}function Bn(e){let t=pe.get(e);if(t&&Array.isArray(t.meta.runs))return t.meta.runs;try{return(0,ye.readdirSync)(Yt(e)).filter(n=>n.endsWith(".json")).sort().reverse().map(n=>({ts:n.replace(/\.json$/,"")}))}catch{return[]}}function gn(e,t){return jt((0,je.join)(Yt(e),t+".json"),null)}var ye,ui,je,Yu,Us,vr,Gs,kr,di,Tr,qn,hn,fn,Yt,Vu,pn,pe,li,Vt,yt,Ks,Sr,Ws,dn,Zu,Mi,Di,$u,Xt=le(()=>{ye=require("node:fs"),ui=require("node:url"),je=require("node:path");wt();Nn();Ut();Yu=(0,je.dirname)((0,ui.fileURLToPath)(__mcFileUrl));ks((e,t)=>{try{(0,ye.cpSync)(e,t,{recursive:!0})}catch{}});Us=be,vr=(0,je.join)(Us,"projects"),Gs=(0,je.join)(Us,"settings.json"),kr=(0,je.join)(Yu,"data.json"),di=i(e=>e+Date.now().toString(36)+Math.random().toString(36).slice(2,6),"uid"),Tr=i(e=>{try{(0,ye.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(it,"writeJson");i(jt,"readJson");qn=i(e=>(0,je.join)(vr,e),"projDir"),hn=i(e=>(0,je.join)(qn(e),"project.json"),"metaFile"),fn=i(e=>(0,je.join)(qn(e),"feed.json"),"feedFile"),Yt=i(e=>(0,je.join)(qn(e),"runs"),"runsDir"),Vu=i(()=>new Date().toISOString().replace(/[:.]/g,"-").slice(0,23),"tsName"),pn={},pe=new Map;i(Xu,"loadAll");i(Ju,"migrateOldDb");Xu();Ju();li=new Map,Vt=i(e=>{let t=pe.get(e);t&&it(hn(e),t.meta)},"persistMeta"),yt=i(e=>{let t=pe.get(e);t&&it(fn(e),t.feed)},"persistFeed");i(et,"settings");i(pi,"setSettings");Ks=i(e=>({id:e.meta.id,name:e.meta.name,config:e.meta.config||{},schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,log:e.meta.lastLog||[],runs:e.meta.runs||[],items:e.feed||[],ai:e.meta.ai||{},editedAt:e.meta.editedAt||0,tg:In(e.meta.id)}),"shape");i(Ar,"listProjects");i(nt,"getProject");i(hi,"createProject");i(fi,"updateProject");i(mi,"deleteProject");i(gi,"markRead");i(Lr,"setAiReport");i(bi,"getAiReports");i(Ot,"tgState");i(Rt,"setTgState");i(In,"tgPublic");i(wi,"unsentItems");i(yi,"markTgSent");i(xi,"markAllTgSent");i(ki,"unmarkTgSent");i(vi,"setSentiment");i(Si,"setRelevance");i(Ti,"clearRelevance");i(Ai,"clearSentiment");i(Fs,"runFiles");Sr=i(e=>{try{return(0,ye.existsSync)(e)?(0,ye.statSync)(e).size:0}catch{return 0}},"fileBytes");i(Li,"projectUsage");Ws=i(e=>Math.max(0,Math.min(1e5,+(e||{}).diskMb||0)),"diskLimitMb");i(Qu,"enforceDiskLimit");i(Rr,"appendRunLog");i(Ri,"deleteItems");i(mn,"mergeRun");dn=(0,je.join)(Us,"logs"),Zu=30,Mi=i(e=>String(e||"проект").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"проект","safeName"),Di=i(e=>{let t=new Date(e.slice(0,23).replace(/-(\d\d)-(\d\d)-(\d\d\d)$/,":$1:$2.$3")+"Z");if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p2");return Ve(t)+" "+n(t.getHours())+":"+n(t.getMinutes())},"humanTs"),$u=i((e,t)=>(Di(t)||t.slice(0,16)).replace(":","-")+" — "+Mi(e)+".json","logFileName");i(Ci,"buildRunLog");i(Ei,"saveRunLogCopy");i(zi,"runLogJson");i(Bn,"listRuns");i(gn,"getRun")});function Oi(){try{pt=(0,xt.existsSync)(Dr)?JSON.parse((0,xt.readFileSync)(Dr,"utf8")):{}}catch{pt={}}(!pt||typeof pt!="object")&&(pt={})}function nd(){try{(0,xt.mkdirSync)(Pi,{recursive:!0});let e=Dr+".tmp";(0,xt.writeFileSync)(e,JSON.stringify(pt,null,2)),(0,xt.renameSync)(e,Dr)}catch{}}function Hn(e){try{return new URL(/:\/\//.test(e)?e:"https://"+e).host.replace(/^www\./,"")}catch{return String(e||"").trim()}}function Ii(e){let t=pt[Hn(e)];return!t||!t.pick||!t.pick.date||t.runs%Cr===Cr-1?"":t.pick.date.via||""}function Bi(e,t){if(!t)return"";let n=Object.entries(t).filter(([l,h])=>l&&h>0);if(!n.length||n.reduce((l,[,h])=>l+h,0)<rd)return"";n.sort((l,h)=>h[1]-l[1]);let[s,o]=n[0],a=qi(Hn(e));a.pick=a.pick||{};let c=a.pick.date;if(!c||!c.via)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if(c.via===s)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if((t[c.via]||0)>=o*sd)return a.pick.pending=null,"";let u=a.pick.pending&&a.pick.pending.via===s?a.pick.pending:{via:s,runs:0};return u.runs++,a.pick.pending=u,u.runs<od?"":(a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,c.via)}function Hi(e){let t=pt[Hn(e)];return t&&t.pick&&t.pick.date?Xs(t.pick.date.via):""}function Fi(e){let t=Hn(e),n=pt[t],r=new Set;if(!n)return{skip:r,host:t,reprobe:!1};if((n.zero||0)>=2&&n.everFound)return{skip:r,host:t,reprobe:!1};let s=n.runs%Cr===Cr-1;if(!s)for(let o of Ys){let a=n.ch[o];a&&a.dead>=Vs&&r.add(o)}if(!s)for(let o of ji){let a=n.ch[o];a&&a.idle>=td(o)&&r.add(o)}if(!s&&!n.everFound&&(n.zero||0)>=Vs)for(let o of Ys)r.add(o);return{skip:r,host:t,reprobe:s}}function Ui(e,t){if(!t)return;let n=Hn(e),r=qi(n);r.runs++;for(let a of Ys){let c=t[a];if(c==null)continue;let u=r.ch[a]=r.ch[a]||{dead:0,okEver:!1};c>0?(u.dead=0,u.okEver=!0):u.dead++}typeof t.total=="number"&&(r.zero=t.total>0?0:(r.zero||0)+1,t.total>0&&(r.everFound=!0));let s=t.contrib,o=new Set(t.notRun||[]);if(s&&t.total>0)for(let a of ji){if(o.has(a)||a in t&&t[a]===null)continue;let c=r.ch[a]=r.ch[a]||{idle:0,okEver:!1};(_u[a]||[a]).reduce((l,h)=>l+(s[h]||0),0)>0?(c.idle=0,c.okEver=!0):c.idle=(c.idle||0)+1}}function Js(){nd()}function Gi(){Oi()}var xt,Ni,Pi,Dr,Ys,ji,_u,Vs,ed,td,Cr,pt,qi,rd,sd,od,Xs,Ki=le(()=>{xt=require("node:fs"),Ni=require("node:path");wt();Nn();Pi=be,Dr=(0,Ni.join)(Pi,"site-memory.json"),Ys=["render","external","sitesearch"],ji=["sitemap","render","sitesearch"],_u={sitemap:["sitemap"],render:["render","render*"],sitesearch:["браузер-поиск","браузер-поиск*"]},Vs=4,ed={sitesearch:2},td=i(e=>ed[e]||Vs,"idleLimit"),Cr=5,pt={};i(Oi,"load");i(nd,"save");Oi();i(Hn,"hostOf");qi=i(e=>pt[e]=pt[e]||{runs:0,ch:{}},"rec"),rd=3;i(Ii,"datePick");sd=.25,od=2;i(Bi,"recordPicks");Xs=i(e=>za[e]||e||"","pickRu");i(Hi,"datePickRu");i(Fi,"plan");i(Ui,"record");i(Js,"persist");i(Gi,"reload")});var to={};En(to,{get:()=>ld,persist:()=>qr,reload:()=>_s,set:()=>ud,size:()=>hd,summary:()=>eo});function Wi(e){if(!(0,Qe.existsSync)(e))return null;try{let t=JSON.parse((0,Qe.readFileSync)(e,"utf8"));return!t||!t.urls?{bad:"в файле нет записей"}:t}catch(t){return{bad:String(t&&t.message||t).slice(0,80)}}}function Yi(e){if(e.v!==Xi){$s=!0;return}for(let[t,n]of Object.entries(e.urls))n&&n.d&&ht.set(t,{d:n.d,t:n.t||jr()})}function _s(){ht=new Map,Un=!1,zr="",Nr=!1,Pr=!1,Zs=!1,$s=!1,Er=0;let e=Wi(Fn);if(Qi=e!==null,e&&!e.bad){Yi(e);return}if(!e)return;zr=e.bad,Nr=!0;let t=Wi(Ji);t&&!t.bad&&(Yi(t),Zs=!0)}function ld(e){let t=ht.get(e);return t?(t.t!==jr()&&(t.t=jr(),Un=!0),t.d):null}function ud(e,t){if(!e||!t)return;let n=ht.get(e);n&&n.d===t||(ht.set(e,{d:String(t),t:jr()}),Un=!0)}function dd(){if(ht.size<=id)return;let e=[...ht.entries()].sort((t,n)=>n[1].t-t[1].t).slice(0,cd);ht=new Map(e)}function Vi(e,t){try{return(0,Qe.existsSync)(e)?((0,Qe.renameSync)(e,t),!0):!1}catch{return!1}}function qr(e=!1){if(!(!Un||Pr)&&!(!e&&Er&&Date.now()-Er<pd)){if(Nr){try{(0,Qe.existsSync)(Qs)&&(0,Qe.unlinkSync)(Qs)}catch{}if(!Vi(Fn,Qs)){Pr=!0;return}Nr=!1}try{dd(),(0,Qe.mkdirSync)(be,{recursive:!0});let t={};for(let[r,s]of ht)t[r]=s;let n=Fn+".tmp";(0,Qe.writeFileSync)(n,JSON.stringify({v:Xi,urls:t})),Vi(Fn,Ji),(0,Qe.renameSync)(n,Fn),Un=!1,Er=Date.now()}catch{}}}function hd(){return ht.size}function eo(){let e=ht.size;return zr?"память дат: ОСНОВНОЙ ФАЙЛ НЕ ПРОЧИТАЛСЯ ("+zr+") — "+(Zs?"взята запасная копия, потеряно только самое новое (в памяти "+e+")":"запасной копии тоже не было, память собирается заново (в памяти "+e+"); этот прогон и следующий будут дольше обычного")+(Pr?". Отложить нечитаемый файл не удалось, поэтому новые даты НЕ сохранены — старую память не трогаем":". Нечитаемый файл сохранён как date-cache.broken.json — не удаляйте его, по нему видно причину"):$s?"память дат сброшена: поменялся разбор дат — собирается заново (в памяти "+e+")":e?"память дат: "+e+" статей — повторно их не качаем":Qi?"":"память дат пока пуста — первый прогон собирает её с нуля"}var Qe,Or,Fn,Xi,id,cd,Ji,Qs,ht,Un,zr,Nr,Pr,Zs,$s,Qi,jr,pd,Er,Zi=le(()=>{Qe=require("node:fs"),Or=require("node:path");wt();Fn=(0,Or.join)(be,"date-cache.json"),Xi=3,id=2e5,cd=15e4,Ji=(0,Or.join)(be,"date-cache.prev.json"),Qs=(0,Or.join)(be,"date-cache.broken.json"),ht=new Map,Un=!1,zr="",Nr=!1,Pr=!1,Zs=!1,$s=!1,Qi=!1,jr=i(()=>Math.floor(Date.now()/864e5),"today");i(Wi,"readFile");i(Yi,"load");i(_s,"reload");i(ld,"get");i(ud,"set");i(dd,"prune");i(Vi,"move");pd=typeof process<"u"&&process.env&&Number(process.env.MC_DC_SAVE_GAP_MS)||18e4,Er=0;i(qr,"persist");i(hd,"size");i(eo,"summary")});function $i(e){let t=i(n=>String(n).padStart(2,"0"),"p");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function fd(e,t){let n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return n.setDate(n.getDate()+t),n}function bn(e,t=new Date){let n=e||{},r=$i(t),s=n.periodMode||"fixed";if(s==="rolling"){let c=Number(n.periodDays),u=Number.isFinite(c)&&c>=_i?Math.floor(c):_i,l=$i(fd(t,-(u-1)));return{from:l,to:r,why:`скользящее окно: последние ${u} дн. (${l} … ${r})`}}if(s==="since"){let c=n.from||r;return c>r?{from:r,to:r,why:`начало (${c}) ещё не наступило — беру только сегодня`}:{from:c,to:r,why:`от даты и до сегодня (${c} … ${r})`}}let o=n.from||"",a=n.to||"";return!o&&!a?{from:o,to:a,why:"период НЕ ЗАДАН — беру за всё время, в выдачу попадёт и старое"}:o?a?{from:o,to:a,why:`фиксированное окно (${o} … ${a})`}:{from:o,to:a,why:`с ${o} и без конца — беру всё, что новее`}:{from:o,to:a,why:`без начала — беру всё до ${a} включительно`}}var _i,Ir=le(()=>{i($i,"ymdLocal");i(fd,"shiftDays");_i=2;i(bn,"resolvePeriod")});var oc={};En(oc,{engagementProbe:()=>ao,facebookProfile:()=>Br,fbRows:()=>co,fbWindow:()=>io,feedChunks:()=>rc,isFacebook:()=>md,oldestAt:()=>lo,parseFeed:()=>Wn,postFromEdge:()=>sc});function Br(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^https?:\/\//i.test(t)?t:"https://"+t.replace(/^\/+/,""))}catch{return null}if(!/(^|\.)facebook\.com$|(^|\.)fb\.com$/i.test(n.hostname))return null;let r=n.searchParams.get("id"),s=n.pathname.split("/").filter(Boolean),o=/^profile\.php$/i.test(s[0]||"")?r?"profile.php?id="+r:"":s[0]||"";return!o||/^(groups|watch|marketplace|events|gaming|pages|stories|reel|photo|share|login|help|settings)$/i.test(o)?null:{name:o,url:"https://www.facebook.com/"+o,label:"facebook.com/"+o.replace(/^profile\.php\?id=/,"id")}}function gd(e){let t=[];for(let n of String(e||"").split(`
`)){let r=n.trim();if(!(!r||r[0]!=="{"))try{t.push(JSON.parse(r))}catch{}}return t}function rc(e){let t=[],n={cursor:"",hasNext:!1,seenFeed:!1};for(let r of gd(e)){let s=r&&r.data&&r.data.node&&r.data.node.timeline_list_feed_units;if(s){n.seenFeed=!0,Array.isArray(s.edges)&&t.push(...s.edges),s.page_info&&(n.cursor=s.page_info.end_cursor||"",n.hasNext=!!s.page_info.has_next_page);continue}if(bd(r&&r.path)&&r.data&&r.data.node){n.seenFeed=!0,t.push(r.data);continue}let o=r&&r.data&&r.data.page_info;o&&Array.isArray(r.path)&&r.path.includes("timeline_list_feed_units")&&(n.seenFeed=!0,n.cursor=o.end_cursor||n.cursor,n.hasNext=!!o.has_next_page)}return{edges:t,info:n}}function Gn(e,t,{skip:n=["attached_story"],depth:r=9}={}){let s=new Set,o=i((a,c)=>{if(!a||typeof a!="object"||c>r||s.has(a))return;if(s.add(a),Array.isArray(a)){for(let l of a){let h=o(l,c+1);if(h!==void 0)return h}return}let u=t(a);if(u!==void 0)return u;for(let l of Object.keys(a)){if(n.includes(l))continue;let h=o(a[l],c+1);if(h!==void 0)return h}},"walk");return o(e,0)}function no(e){if(!e)return;let t=Jt(e,"comet_sections","context_layout","story","comet_sections","metadata"),n=Array.isArray(t)?t.map(r=>wn(Jt(r,"story","creation_time"))).find(r=>r!==void 0):void 0;return wn(e.creation_time)??wn(Jt(e,"comet_sections","timestamp","story","creation_time"))??n??Gn(e,r=>wn(r.creation_time),{skip:Kn})}function ro(e){if(e)return ft(Jt(e,"message","text"))??ft(Jt(e,"comet_sections","message","story","message","text"))??Gn(e,t=>t.message&&ft(t.message.text)||void 0,{skip:Kn})}function yd(...e){for(let t of e){let n=wd(t);if(!n)continue;let r=nc(Jt(n,"comment_rendering_instance","comments","total_count"))??nc(n.total_comment_count);if(r!==void 0)return r}return null}function ao(e){let t=String(e||""),n=i(r=>(t.match(r)||[]).length,"hits");return{reactions:n(/"(?:reaction_count|i18n_reaction_count|top_reactions|reaction_display_strategy|likers)"/g),shares:n(/"(?:share_count|share_count_reduced|reshare_count)"/g)}}function sc(e){let t=e&&(e.node||e);if(!t||typeof t!="object")return null;let n=t.comet_sections&&t.comet_sections.content&&t.comet_sections.content.story||t,r=[n.attached_story,t.attached_story].filter(Boolean),s=i(l=>{for(let h of r){let m=l(h);if(m!==void 0&&m!=="")return m}},"pickAt"),o=tc(n)??tc(t),a=oo(n)??oo(t);if(!o&&!a)return null;let c=so(n)??so(t)??{name:"",url:""},u={id:o||a,url:a||"",at:no(t)??no(n)??0,author:c.name,authorUrl:c.url,text:ro(n)??ro(t)??"",comments:yd(t,n),repost:null};if(r.length){let l=s(so)||{name:"",url:""};u.repost={author:l.name,authorUrl:l.url,url:s(oo)||"",text:s(ro)||"",at:s(no)||0}}return u}function Wn(e){let{edges:t,info:n}=rc(e),r=[],s=new Set;for(let o of t){let a=sc(o);a&&(s.has(a.id)||(s.add(a.id),r.push(a)))}return{posts:r,cursor:n.cursor,hasNext:n.hasNext,seenFeed:n.seenFeed}}function io(e,t,n=Date.now()){let r=Math.max(1,Math.min(3,+t||1)),s=i((l,h)=>{if(!l)return NaN;let m=new Date(String(l)+h).getTime();return Number.isFinite(m)?m:NaN},"stamp"),o=s(e&&e.from,"T00:00:00"),a=s(e&&e.to,"T23:59:59"),c=Math.max(Number.isFinite(o)?o:-1/0,n-r*864e5),u=Math.min(Number.isFinite(a)?a:1/0,n);return{fromMs:c,toMs:u,days:r}}function co(e,{groups:t,exGroups:n=[],source:r,fromMs:s,toMs:o}){if(!Number.isFinite(s)||!Number.isFinite(o))throw new Error("окно времени не посчиталось ("+s+" … "+o+") — это ошибка в программе, а не в настройках");let a=un(t),c=[],u={всего:0,"вне периода":0,"без даты":0,"ключа нет":0,"минус-слово":0};for(let l of e){if(u.всего++,!l.at){u["без даты"]++;continue}let h=l.at*1e3;if(h<s||h>o){u["вне периода"]++;continue}let m=l.text||"",p=l.repost&&l.repost.text||"",d=!!m&&We(m.toLowerCase(),t),f=!!p&&We(p.toLowerCase(),t);if(!d&&!f){u["ключа нет"]++;continue}if(n.length&&We((m+" "+p).toLowerCase(),n)){u["минус-слово"]++;continue}let g=l.repost?"репост":"авторский",b=d&&f?"в подписи и в репосте":d?"в подписи":"в тексте репоста",y=d?m:p,w=y.split(`
`).map(R=>R.trim()).find(Boolean)||"(без текста)";c.push({source:r,date:new Date(h).toISOString(),title:w.slice(0,120),url:l.url,channel:"facebook",channels:"facebook",match:d?"подпись":"репост",snippet:ln(y,a),author:l.author||"",kind:g,via:l.repost?(l.repost.author||"чужой пост")+(l.repost.url?" — "+l.repost.url:""):"",matchIn:b,comments:Number.isFinite(l.comments)?l.comments:null})}return{rows:c,tally:u}}var md,bd,wn,ft,Jt,Kn,ec,so,oo,tc,wd,nc,lo,Hr=le(()=>{xr();i(Br,"facebookProfile");md=i(e=>!!Br(e),"isFacebook");i(gd,"jsonLines");bd=i(e=>Array.isArray(e)&&e.length>=2&&e[e.length-2]==="edges"&&typeof e[e.length-1]=="number"&&e.includes("timeline_list_feed_units"),"isEdgeChunk");i(rc,"feedChunks");i(Gn,"deep");wn=i(e=>typeof e=="number"&&isFinite(e)&&e>0?e:void 0,"num"),ft=i(e=>typeof e=="string"&&e.trim()?e:void 0,"str"),Jt=i((e,...t)=>t.reduce((n,r)=>n==null?n:n[r],e),"get"),Kn=["attached_story","attachments","attachment","style_infos","media"];i(no,"timeOf");i(ro,"textOf");ec=i(e=>{if(!e||!Array.isArray(e.actors)||!e.actors.length)return;let t=e.actors[0];return t&&ft(t.name)?{name:t.name,url:ft(t.url)||""}:void 0},"oneActor"),so=i(e=>e?ec(e)??Gn(e,ec,{skip:Kn}):void 0,"actorOf"),oo=i(e=>e?ft(e.wwwURL)??ft(e.permalink_url)??Gn(e,t=>ft(t.wwwURL)||ft(t.permalink_url),{skip:Kn}):void 0,"urlOf"),tc=i(e=>e?ft(e.post_id)??(wn(e.post_id)?String(e.post_id):void 0)??Gn(e,t=>ft(t.post_id)||(wn(t.post_id)?String(t.post_id):void 0),{skip:Kn}):void 0,"idOf"),wd=i(e=>Jt(e,"comet_sections","feedback","story","story_ufi_container","story","feedback_context","feedback_target_with_context"),"ufiOf"),nc=i(e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:void 0,"count");i(yd,"commentsOf");i(ao,"engagementProbe");i(sc,"postFromEdge");i(Wn,"parseFeed");i(io,"fbWindow");i(co,"fbRows");lo=i(e=>e.reduce((t,n)=>n.at&&(!t||n.at<t)?n.at:t,0),"oldestAt")});function qt(e){let t=!!(e&&e.noExternal);return{ai:!t,bot:!t,extSearch:!t,locked:t}}var yn,Yn=le(()=>{i(qt,"outbound");yn="у проекта запрещена отправка данных во внешний контур (настройка проекта)"});var mo={};En(mo,{DEFAULT_LIMIT:()=>Qt,_reset:()=>Sd,canVisit:()=>Ur,nextAt:()=>xd,note:()=>fo,persist:()=>ho,reload:()=>po,summary:()=>vd,visitsToday:()=>kd});function po(){Mt=new Map;try{let e=(0,kt.existsSync)(Vn)?JSON.parse((0,kt.readFileSync)(Vn,"utf8")):null;for(let[t,n]of Object.entries(e&&e.hosts||{}))Array.isArray(n)&&Mt.set(t,n.filter(r=>typeof r=="number"&&isFinite(r)))}catch{Mt=new Map}return Jn=!1,Mt.size}function ho(){if(!Jn)return!1;try{(0,kt.mkdirSync)((0,Fr.dirname)(Vn),{recursive:!0});let e={};for(let[n,r]of Mt)r.length&&(e[n]=r);let t=Vn+".tmp";return(0,kt.writeFileSync)(t,JSON.stringify({v:1,hosts:e},null,2)),(0,kt.renameSync)(t,Vn),Jn=!1,!0}catch{return!1}}function Ur(e,{limit:t=Qt,now:n=Date.now()}={}){let r=Math.max(1,+t||Qt),s=Qn(e,n);if(s.length>=r){let c=Xn-(n-Math.min(...s));return{ok:!1,used:s.length,limit:r,why:"за сутки уже "+s.length+" захода из "+r+" — следующий через "+uo(c)}}let o=Math.floor(Xn/r),a=s.length?Math.max(...s):0;if(a&&n-a<o){let c=n-a;return{ok:!1,used:s.length,limit:r,why:(c<6e4?"заходили только что":"заходили "+uo(c)+" назад")+" — на профиль ходим не чаще раза в "+uo(o)}}return{ok:!0,used:s.length,limit:r,why:""}}function fo(e,t=Date.now()){let n=Qn(e,t);return n.push(t),Mt.set(e,n),Jn=!0,n.length}function xd(e,{limit:t=Qt,now:n=Date.now()}={}){if(Ur(e,{limit:t,now:n}).ok)return 0;let s=Qn(e,n),o=Math.max(1,+t||Qt);return s.length>=o?Math.min(...s)+Xn:Math.max(...s)+Math.floor(Xn/o)}function Sd(){Mt=new Map,Jn=!1}var kt,Fr,Vn,Xn,Qt,Mt,Jn,Qn,uo,kd,vd,go=le(()=>{kt=require("node:fs"),Fr=require("node:path");wt();Vn=(0,Fr.join)(be,"social-visits.json"),Xn=24*3600*1e3,Qt=3,Mt=new Map,Jn=!1;i(po,"reload");i(ho,"persist");Qn=i((e,t)=>(Mt.get(e)||[]).filter(n=>t-n<Xn),"fresh"),uo=i(e=>{let t=Math.round(e/6e4);if(t<1)return"только что";if(t<60)return t+" мин";let n=Math.floor(t/60),r=t%60;return n+" ч"+(r?" "+r+" мин":"")},"hhmm");i(Ur,"canVisit");i(fo,"note");i(xd,"nextAt");kd=i((e,t=Date.now())=>Qn(e,t).length,"visitsToday"),vd=i((e=Date.now())=>{let t=[...Mt.keys()].filter(n=>Qn(n,e).length).length;return t?"профилей соцсетей посещено за сутки: "+t:""},"summary");i(Sd,"_reset")});function ac(e,t){typeof e=="function"&&(wo=e),typeof t=="function"&&(yo=t)}function ic(e){typeof e=="function"&&(xo=e)}function cc(e){typeof e=="function"&&(ko=e)}async function Gr(e,t,n={}){let r=typeof n.onStep=="function"?n.onStep:null,s=typeof n.stopping=="function"?n.stopping:()=>!1,o=!1,a=e.config||{};if(!String(a.keyword||"").trim())return{rows:[],log:[{site:"(проект)",channel:"—",found:0,note:"не задан запрос — прогон пропущен"}]};si(),Gi(),_s(),$a(to);let c=(a.sites||[]).map(P=>String(P).trim()).filter(Boolean),u=bn(a),l=qt(a),h={keyword:a.keyword,exclude:a.exclude||"",morph:a.morph!==!1,from:u.from,to:u.to,...l.extSearch?{}:{external:!1}},m=[],p=[],d=new Map,f=Date.now(),g=c.length+(a.facebook||[]).filter(P=>String(P||"").trim()).length+(a.youtube&&a.youtube.enabled?1:0),b=0,y=i(P=>{if(r)try{r({done:b,total:g,found:m.length,site:P||""})}catch{}},"tick");y(""),yo&&yo();let w=0,R=0,k=i(()=>{if(t)try{t(m.slice(),p.slice())}catch{}},"checkpoint"),T=i(async()=>{for(;w<c.length;){if(s()){o=!0;break}let P=c[w++],K=Date.now();y(P);try{let{skip:V,reprobe:te}=Fi(P),xe=Ii(P),ke=await yr(P,{...h,skip:V,reprobe:te,datePick:xe});Ui(P,ke.stats);let Ae=Bi(P,ke.stats&&ke.stats.picks),C=Hi(P);C&&(ke.note=(ke.note?ke.note+"; ":"")+(Ae?"дата теперь берётся иначе: было «"+Xs(Ae)+"», стало «"+C+"» — сайт сменил разметку":"дата: "+C));for(let F of ke.rows){if(!F.url)continue;let D=we(F.url),j=d.get(D);if(j){j.channels=[...new Set((j.channels+" + "+(F.channels||"")).split(" + ").filter(Boolean))].join(" + ");continue}d.set(D,F),m.push(F)}p.push({site:P,channel:ke.channel,found:ke.rows.length,note:ke.note,ms:Date.now()-K})}catch(V){p.push({site:P,channel:"error",found:0,note:String(V&&V.message||V),ms:Date.now()-K})}b++,y(""),++R%3===0&&(Js(),qr(),k())}},"worker");await Promise.all(Array.from({length:Math.min(4,c.length||1)},T)),Js(),qr(!0),k();let v=(a.facebook||[]).map(P=>Br(P)).filter(Boolean);if(v.length){let P=Math.max(1,Math.min(6,+a.fbVisits||Qt)),K=Date.now(),{fromMs:V,toMs:te,days:xe}=io(u,a.fbDays,K),ke=Lt(a.keyword,a.morph!==!1),Ae=Lt(a.exclude||"",a.morph!==!1);po(),p.push({site:"(фейсбук)",channel:"—",found:0,note:"профилей "+v.length+"; окно "+xe+" сут. ("+new Date(V).toLocaleString("ru-RU")+" … "+new Date(te).toLocaleString("ru-RU")+"); на профиль не чаще "+P+" раз в сутки"});for(let C of v){if(s()){o=!0;break}let F=Date.now();y(C.label);let D=Ur(C.label,{limit:P});if(!D.ok){p.push({site:C.label,channel:"facebook",found:0,note:"пропущен: "+D.why});continue}if(!ko){p.push({site:C.label,channel:"facebook",found:0,note:"нет браузера — соцсети читаются только с Playwright (запусти setup-windows.bat)"});continue}try{fo(C.label);let j=await ko(C.url,{sinceMs:V,maxScrolls:xe<=1?3:6});if(!j||!j.ok){p.push({site:C.label,channel:"facebook",found:0,ms:Date.now()-F,note:j&&j.err||"лента не прочитана"});continue}let A=j.chunks.join(`
`),ae=Wn(A),{rows:ie,tally:Le}=co(ae.posts,{groups:ke,exGroups:Ae,source:C.label,fromMs:V,toMs:te});for(let ce of ie){let Ge=we(ce.url);d.has(Ge)||(d.set(Ge,ce),m.push(ce))}let Z=["постов просмотрено "+ae.posts.length+" (прокруток "+(j.scrolls||0)+")","совпало "+ie.length],he=ae.posts.reduce((ce,Ge)=>Ge.at&&(!ce||Ge.at<ce)?Ge.at:ce,0);Z.push(he&&he*1e3<=V?"докрутились до начала окна":"до начала окна НЕ докрутились — в ленте могло остаться ещё"+(he?" (дошли до "+new Date(he*1e3).toLocaleString("ru-RU")+")":""));let Ze=Object.entries(Le).filter(([ce,Ge])=>ce!=="всего"&&Ge).map(([ce,Ge])=>ce+" — "+Ge);Ze.length&&Z.push("отсеяно: "+Ze.join(", "));let Xe=ae.posts.filter(ce=>Number.isFinite(ce.comments)).length;Z.push("счётчик комментариев приехал у "+Xe+" постов из "+ae.posts.length);let ge=ao(A);Z.push(ge.reactions?"признаки реакций в ответах встретились "+ge.reactions+" раз — есть что разбирать":"реакций Фейсбук в этих ответах не прислал — показывать нечего"),p.push({site:C.label,channel:"facebook",found:ie.length,ms:Date.now()-F,note:Z.join("; ")})}catch(j){p.push({site:C.label,channel:"facebook",found:0,ms:Date.now()-F,note:String(j&&j.message||j)})}b++,y(""),k()}ho()}if(a.youtube&&a.youtube.enabled&&!s()){y("youtube");try{let P=await ci(a.keyword,{exclude:a.exclude||"",morph:a.morph!==!1,ytRange:a.youtube.range||"month",from:u.from,to:u.to});for(let K of P.rows)K.url&&!d.has(K.url)&&(d.set(K.url,K),m.push(K));p.push({site:"youtube",channel:P.channel,found:P.rows.length,note:P.note})}catch(P){p.push({site:"youtube",channel:"error",found:0,note:String(P)})}b++,y("")}o&&p.push({site:"(остановлен)",channel:"—",found:0,note:"сбор остановлен человеком: пройдено источников "+b+" из "+g+". Найденное сохранено, остальные источники не читались"}),p.push({site:"(период)",channel:"—",found:0,note:u.why,from:u.from||"",to:u.to||""});let S=eo();if(S&&p.push({site:"(память дат)",channel:"—",found:0,note:S}),xo)try{await xo()}catch{}let M=Date.now()-f,N=wo?wo():null,Y=p.filter(P=>P.ms).sort((P,K)=>K.ms-P.ms).slice(0,5).map(P=>String(P.site).replace(/^https?:\/\//,"").replace(/\/$/,"")+" "+Math.round(P.ms/1e3)+" с"),H=["прогон занял "+bo(M)+" (сайтов "+c.length+", по 4 разом)"];if(N&&N.ops){let P=Math.max(1,N.lanes||1),K=N.busyMs/P,V=Math.round(K/Math.max(1,M)*100);H.push("браузер ("+P+" "+(P===1?"окно":P<5?"окна":"окон")+"): "+bo(N.busyMs)+" за "+N.ops+" операций"+(P>1?", то есть "+bo(Math.round(K))+" в один поток":"")+" — это "+V+"% времени прогона и его нижняя граница")}if(Y.length&&H.push("дольше всех (с ожиданием очереди): "+Y.join(", ")),N&&N.byHost){let P=Object.entries(N.byHost).sort((K,V)=>V[1].ms-K[1].ms).slice(0,5).map(([K,V])=>K+" "+Math.round(V.ms/1e3)+" с/"+V.ops+" оп.");P.length&&H.push("браузер съели: "+P.join(", "))}return p.push({site:"(время)",channel:"—",found:0,note:H.join("; "),ms:M}),m.sort((P,K)=>String(K.date||"").localeCompare(String(P.date||""))),{rows:m,log:p}}var wo,yo,xo,ko,bo,vo=le(()=>{xr();Ki();Zi();Ir();Nn();Hr();Yn();go();wo=null,yo=null;i(ac,"setBrowserStats");xo=null;i(ic,"setBrowserCloser");ko=null;i(cc,"setFacebookReader");bo=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"mmss");i(Gr,"runProject")});var vt,So=le(()=>{vt=new Set});function Kr(e,{name:t="",total:n=0,by:r="ручной"}={}){xn.set(String(e),{id:String(e),name:String(t||""),by:r,startedAt:Date.now(),total:+n||0,done:0,found:0,site:"",stopping:!1})}function Wr(e,{done:t,total:n,found:r,site:s}={}){let o=xn.get(String(e));o&&(Number.isFinite(+t)&&(o.done=+t),Number.isFinite(+n)&&+n>0&&(o.total=+n),Number.isFinite(+r)&&(o.found=+r),s!=null&&(o.site=String(s)))}function lc(e){let t=xn.get(String(e));return t?(t.stopping=!0,!0):!1}function Yr(e){let t=xn.get(String(e));return!!(t&&t.stopping)}function Vr(e){xn.delete(String(e))}function uc(){return Array.from(xn.values()).map(e=>({id:e.id,name:e.name,by:e.by,startedAt:e.startedAt,total:e.total,done:e.done,found:e.found,site:e.site,stopping:e.stopping,ms:Date.now()-e.startedAt}))}var xn,To=le(()=>{xn=new Map;i(Kr,"begin");i(Wr,"step");i(lc,"askStop");i(Yr,"stopping");i(Vr,"end");i(uc,"snapshot")});function Zn(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^t\.me\/s\//,"t.me/").replace(/^@/,"t.me/").replace(/\/+$/,"")}var Ao,pc,hc,fc,Lo=le(()=>{Ao=[{url:"kz.kursiv.media",name:"Курсив"},{url:"zakon.kz",name:"Zakon.kz"},{url:"kapital.kz",name:"Капитал"},{url:"informburo.kz",name:"Informburo"},{url:"tengrinews.kz",name:"Tengrinews"},{url:"kazpravda.kz",name:"Казахстанская правда"},{url:"baq.kz",name:"BAQ.kz"},{url:"khabar.kz",name:"Хабар"},{url:"turkystan.kz",name:"Túrkistan"},{url:"24.kz",name:"24.kz"},{url:"liter.kz",name:"Литер"},{url:"caravan.kz",name:"Караван"},{url:"newtimes.kz",name:"NewTimes"},{url:"stan.kz",name:"Stan.kz"},{url:"lada.kz",name:"Лада (Актау)"},{url:"sn.kz",name:"Столичная жизнь"},{url:"vechastana.kz",name:"Вечерняя Астана"},{url:"aikyn.kz",name:"Айқын"},{url:"ulysmedia.kz",name:"Ulys Media"},{url:"malim.kz",name:"Malim"},{url:"vlast.kz",name:"Власть"},{url:"astanatv.kz",name:"Астана ТВ"},{url:"exclusive.kz",name:"Exclusive"},{url:"forbes.kz",name:"Forbes Казахстан"},{url:"mgorod.kz",name:"Мой город (Уральск)"},{url:"politico.kz",name:"Politico.kz"},{url:"sputnik.kz",name:"Sputnik Казахстан"},{url:"almaty.tv",name:"Алматы ТВ"},{url:"qazaqstan.tv",name:"Qazaqstan"},{url:"democrat.kz",name:"Democrat"},{url:"arasha.kz",name:"Arasha"},{url:"press.kz",name:"Press.kz"},{url:"365info.kz",name:"365info"},{url:"lsm.kz",name:"LS (lsm.kz)"},{url:"inbusiness.kz",name:"InBusiness"},{url:"factcheck.kz",name:"Factcheck.kz"},{url:"egemen.kz",name:"Egemen Qazaqstan"},{url:"ratel.kz",name:"Ratel"},{url:"nur.kz",name:"NUR.KZ"},{url:"time.kz",name:"Время"},{url:"uralskweek.kz",name:"Уральская неделя"},{url:"yujanka.kz",name:"Южанка"},{url:"adyrna.kz",name:"Адырна"},{url:"masa.media",name:"Masa Media"}],pc=[{url:"bbc.com",name:"BBC"},{url:"theguardian.com",name:"The Guardian"},{url:"aljazeera.com",name:"Al Jazeera"},{url:"dw.com",name:"Deutsche Welle",note:"поиск сайта работает (параметр item)"},{url:"cnn.com",name:"CNN"},{url:"euronews.com",name:"Euronews",note:"поиск сайта работает"},{url:"npr.org",name:"NPR"},{url:"cbsnews.com",name:"CBS News"},{url:"nbcnews.com",name:"NBC News"},{url:"abcnews.com",name:"ABC News",note:"карта новостей на 1000 адресов с заголовками"},{url:"independent.co.uk",name:"The Independent"},{url:"straitstimes.com",name:"The Straits Times"},{url:"time.com",name:"TIME"},{url:"usatoday.com",name:"USA Today"},{url:"newsweek.com",name:"Newsweek"},{url:"japantimes.co.jp",name:"The Japan Times",note:"из облака отдавал 403; RSS живой"},{url:"france24.com",name:"France 24",note:"из облака отдавал 403 — проверить прогоном"},{url:"apnews.com",name:"Associated Press",note:"из облака отдавал 403 — проверить прогоном"}],hc=[{url:"ria.ru",name:"РИА Новости",note:"поиск сайта работает"},{url:"lenta.ru",name:"Лента.ру",note:"поиск сайта работает (отдаёт JSON)"},{url:"rbc.ru",name:"РБК",note:"карта новостей на 429 адресов с заголовками"},{url:"kommersant.ru",name:"Коммерсантъ",note:"поиск сайта работает"},{url:"vedomosti.ru",name:"Ведомости",note:"карта новостей с заголовками"},{url:"interfax.ru",name:"Интерфакс"},{url:"iz.ru",name:"Известия",note:"главная отдаёт 403, а RSS и карты живые"},{url:"mk.ru",name:"Московский комсомолец",note:"поиск сайта работает; режет частоту"},{url:"aif.ru",name:"Аргументы и факты",note:"поиск сайта работает"},{url:"kp.ru",name:"Комсомольская правда"},{url:"news.ru",name:"NEWS.ru",note:"поиск запрещён robots сайта; ленты открыты"},{url:"life.ru",name:"Life"},{url:"vesti.ru",name:"Вести",note:"карта новостей на 919 свежих адресов"},{url:"1tv.ru",name:"Первый канал"},{url:"ntv.ru",name:"НТВ"},{url:"bfm.ru",name:"BFM.ru",note:"поиск сайта работает"},{url:"fontanka.ru",name:"Фонтанка"},{url:"business-gazeta.ru",name:"Бизнес Online"},{url:"svpressa.ru",name:"Свободная пресса"}],fc=[{url:"t.me/ktknews",name:"КТК",note:"вместо ktk.kz — сайт целиком за защитой"},{url:"t.me/kaztag_tg",name:"КазТАГ",note:"вместо kaztag.kz — статьи за Cloudflare"},{url:"t.me/dknews_kz",name:"ДК News",note:"вместо dknews.kz — поиск только через браузер"},{url:"t.me/tass_agency",name:"ТАСС"},{url:"t.me/negemedia",name:"negemedia"},{url:"t.me/syrymitkulov",name:"Сырым Иткулов"},{url:"t.me/qumash_kz",name:"qumash_kz"},{url:"t.me/myastanacity",name:"My Astana City"},{url:"t.me/azattyqasia",name:"Azattyq Asia"},{url:"t.me/azattyq_ruhy",name:"Azattyq Rýhy"},{url:"t.me/Zanamiviehali",name:"Zanamiviehali"},{url:"t.me/prokadrykz",name:"Про кадры KZ"},{url:"t.me/bessimptomno",name:"Бессимптомно"},{url:"t.me/ztb_qazaq",name:"ztb_qazaq"},{url:"t.me/ztb_qaz",name:"ztb_qaz"},{url:"t.me/egovpress",name:"eGov Press"},{url:"t.me/nehabar",name:"НеХабар"},{url:"t.me/kozachkow",name:"kozachkow"},{url:"t.me/gaziz1984",name:"gaziz1984"},{url:"t.me/adyrnaportal",name:"Adyrna"},{url:"t.me/yedilov_online",name:"Yedilov online"},{url:"t.me/basekz",name:"BASE KZ"},{url:"t.me/chinovnik_kz",name:"Чиновник KZ"},{url:"t.me/respublikaKZmediaNEWS",name:"Республика KZ"},{url:"t.me/dashimbayev",name:"dashimbayev"},{url:"t.me/KrivosheyevD",name:"Кривошеев"},{url:"t.me/nkorganbekova",name:"Н. Корганбекова"}];i(Zn,"normSource")});function Dt(e){if(!e)return"";let t=new Date(e);if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p");return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function Td(e){let t=new Date(e);return isNaN(t.getTime())?-1:t.getHours()}function Ad(e){let t=new Date(e);return isNaN(t.getTime())?-1:(t.getDay()+6)%7}function Ld(e){let t=String(e||""),n=t.match(/прогон занял\s+(\d+)\s+мин\s+(\d+)\s+с/),r=t.match(/прогон занял\s+(\d+)\s+с/),s=n?+n[1]*60+ +n[2]:r?+r[1]:null,o=t.match(/браузер[^:]*:\s+(\d+)\s+мин\s+(\d+)\s+с/),a=t.match(/браузер[^:]*:\s+(\d+)\s+с/),c=o?+o[1]*60+ +o[2]:a?+a[1]:null;return{total:s,browser:c}}function Rd(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function Xr(e,t=15){return[...e.entries()].map(([n,r])=>({key:n,count:r})).sort((n,r)=>r.count-n.count||n.key.localeCompare(r.key)).slice(0,t)}function Zt(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function Ro(e,t={}){let n=nt(e);if(!n)return[];let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Dt(new Date(Date.now()-(r-1)*864e5).toISOString()):null;return(n.items||[]).filter(o=>o&&o.title&&o.date&&(!s||Dt(o.date)>=s)).map(o=>({title:o.title,url:o.url,source:o.source,date:o.date,snippet:o.snippet||"",sent:o.sent||"",sentWhy:o.sentWhy||"",rel:o.rel||"",relWhy:o.relWhy||""}))}function It(e,t={}){let n=nt(e);if(!n)return null;let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Dt(new Date(Date.now()-(r-1)*864e5).toISOString()):null,o=i(E=>!s||E&&E>=s,"inWindow"),a=(n.items||[]).filter(E=>E.date&&o(Dt(E.date))),c=new Map;for(let E of a){let me=Dt(E.date);me&&c.set(me,(c.get(me)||0)+1)}let u=[...c.keys()].sort(),l=s,h=u[u.length-1]||Dt(new Date().toISOString());l||(l=u[0]||h);let m=[];for(let E=+new Date(l+"T00:00:00");E<=+new Date(h+"T00:00:00");E+=864e5){let me=Dt(new Date(E).toISOString());m.push({day:me,count:c.get(me)||0})}let p=new Map,d=new Map,f={site:0,telegram:0,youtube:0,facebook:0},g=0,b=0,y=0,w=0,R=0,k=Array.from({length:7},()=>Array(24).fill(0));for(let E of a){p.set(E.source,(p.get(E.source)||0)+1);let me=String(E.channel||"неизв.").replace(/\*$/,"");d.set(me,(d.get(me)||0)+1),f[Zt(E.source)]++,E.match==="title"?g++:E.match==="post"?y++:E.match==="body"?b++:E.match==="video"?w++:R++;let Se=Td(E.date),Be=Ad(E.date);Se>=0&&Be>=0&&k[Be][Se]++}let T=i(E=>E.map(me=>({...me,kind:Rd(me.key)})),"withKind"),v=T(Xr(new Map([...p].filter(([E])=>Zt(E)==="site")),10)),S=T(Xr(new Map([...p].filter(([E])=>Zt(E)!=="site")),10)),M=T(Xr(p,20)),N=Xr(d,12),Y=a.slice(0,25).map(E=>({date:E.date,source:E.source,title:E.title,url:E.url,channel:E.channel,channels:E.channels,match:E.match,kind:Zt(E.source)})),H=Bn(e),P=s?+new Date(s+"T00:00:00"):null,K=P?H.filter(E=>(E.at||0)>=P):H,V=[],te=[],xe=[];for(let E of K.slice(0,50)){let Se=((gn(e,E.ts)||{}).log||[]).find(Cn=>Cn&&Cn.site==="(время)"),{total:Be,browser:ct}=Ld(Se?Se.note:"");Be!=null&&(te.push(Be),ct!=null&&Be>0&&xe.push(ct/Be*100)),V.push({ts:E.ts,at:E.at,found:E.found||0,added:E.added||0,sec:Be,browserSec:ct})}V.reverse();let ke=p.size,Ae=Dt(new Date(Date.now()-6*864e5).toISOString()),C=a.filter(E=>Dt(E.date)>=Ae).length,F=i(E=>{if(!E.length)return null;let me=[...E].sort((Be,ct)=>Be-ct),Se=me.length>>1;return me.length%2?me[Se]:Math.round((me[Se-1]+me[Se])/2)},"median"),D=F(te),j=xe.length?Math.round(F(xe)):null,A=D?te.filter(E=>E>D*3&&E>D+60).length:0,ae=te.length?Math.max(...te):null,ie=f.telegram+f.youtube+f.facebook,Le=(n.config&&n.config.sites||[]).map(E=>String(E||"").trim()).filter(Boolean),Z=new Set([...p.keys()].map(Zn)),he=Le.filter(E=>!Z.has(Zn(E))),Ze={configured:Le.length,active:Le.length-he.length,list:he.slice(0,60).map(E=>Zn(E)),more:Math.max(0,he.length-60)},Xe=new Map,ge=0,ce=0,Ge=0;for(let E of a){if(!E.sent)continue;E.sent==="+"?ge++:E.sent==="0"?ce++:E.sent==="-"&&Ge++;let me=Zn(E.source||""),Se=Xe.get(me)||{key:me,pos:0,neu:0,neg:0};E.sent==="+"?Se.pos++:E.sent==="0"?Se.neu++:E.sent==="-"&&Se.neg++,Xe.set(me,Se)}let St=0,_t=0,en=0;for(let E of a)E.rel&&(St++,E.rel==="-"?_t++:E.rel==="0"&&en++);let Dn={checked:St,off:_t,dim:en},ze={total:ge+ce+Ge,pos:ge,neu:ce,neg:Ge,bySource:[...Xe.values()].sort((E,me)=>me.neg-E.neg||me.pos+me.neu+me.neg-(E.pos+E.neu+E.neg))};return{overview:{items:a.length,uniqueSources:ke,runs:K.length,itemsWeek:C,medRunSec:D,browserPct:j,slowRuns:A,maxRunSec:ae,matchTitle:g,matchBody:b,matchPost:y,matchVideo:w,matchOther:R,siteItems:f.site,telegramItems:f.telegram,youtubeItems:f.youtube,facebookItems:f.facebook,socialItems:ie,keyword:n.config.keyword||"",from:n.config.from||null,to:n.config.to||null,windowDays:r,windowFrom:l,windowTo:h},byDay:m,bySource:M,bySite:v,bySocial:S,byChannel:N,byHour:k,runs:V,feed:Y,silent:Ze,tone:ze,relevance:Dn}}var $n=le(()=>{Xt();Lo();i(Dt,"localDay");i(Td,"localHour");i(Ad,"localDow");i(Ld,"parseTime");i(Rd,"kindOf");i(Xr,"top");i(Zt,"platformOf");i(Ro,"windowItems");i(It,"buildAnalytics")});function Dd(e){let t=String(e||"");return/high demand|overload|UNAVAILABLE|RESOURCE_EXHAUSTED|NOT_FOUND|not found|is not supported|HTTP 503|HTTP 429|\b503\b|\b429\b|\b404\b/i.test(t)}function Do(e){let t=String(e||"").trim(),n=[];for(let r of[t||Qr,...Md]){let s=String(r||"").trim();s&&!n.includes(s)&&n.push(s)}return n}function Mo(e,t){let n=[];if(!e||!e.overview)return"Проект по мониторингу СМИ Казахстана.";let r=e.overview;n.push("Мониторинг СМИ Казахстана. Объект наблюдения: «"+(r.keyword||"—")+"».");let s=r.windowFrom&&r.windowTo?r.windowFrom+"…"+r.windowTo:"вся история";if(n.push("Период: "+s+". Публикаций: "+r.items+", источников с материалом: "+r.uniqueSources+"."),(r.matchTitle||r.matchBody)&&n.push("Из них с объектом В ЗАГОЛОВКЕ: "+r.matchTitle+"; только В ТЕКСТЕ: "+r.matchBody+" (второе — упоминание вскользь, первое — материал про него)."),r.siteItems!=null){let o=[];r.siteItems&&o.push("сайты СМИ "+r.siteItems),r.telegramItems&&o.push("телеграм "+r.telegramItems),r.youtubeItems&&o.push("YouTube "+r.youtubeItems),r.facebookItems&&o.push("Фейсбук "+r.facebookItems),o.length>1&&n.push("Площадки: "+o.join(", ")+".")}return n.push(""),n.push("Кто пишет (публикаций за период):"),e.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+" — "+o.count)),e.silent&&e.silent.list&&e.silent.list.length&&(n.push(""),n.push("Молчали за период ("+e.silent.list.length+" из "+e.silent.configured+" отслеживаемых): "+e.silent.list.slice(0,15).join(", ")+(e.silent.more?" и ещё "+e.silent.more:"")+".")),n.push(""),n.push("Публикации по дням:"),e.byDay.slice(-21).forEach(o=>n.push("  "+o.day+" — "+o.count)),e.tone&&e.tone.total&&(n.push(""),n.push("Тональность (уже оценена ранее, всего размечено "+e.tone.total+"): выигрышных "+e.tone.pos+", нейтральных "+e.tone.neu+", невыгодных "+e.tone.neg+"."),e.tone.bySource&&e.tone.bySource.length&&(n.push("По источникам (источник: выигрышно/нейтрально/невыгодно):"),e.tone.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+": "+o.pos+"/"+o.neu+"/"+o.neg)))),t&&t.length&&(n.push(""),n.push("Заголовки материалов:"),t.slice(0,60).forEach(o=>n.push("  • "+o))),n.join(`
`)}function bc(e){let t=String(e||""),n=t.search(/РАЗМЕТКА\s*:?/i),r=n>=0?t.slice(n):t,s={};for(let o of r.matchAll(/(?:^|\n)[ \t]*(\d{1,4})[ \t]*[:.\-–][ \t]*([+\-0])[ \t]*(?:[:;–—-][ \t]*([^\n]*))?(?=\n|$)/g)){let a=String(o[3]||"").trim();for(let c=0;c<4;c++){let u=a;if(a=a.replace(/^[«"'(\s]+/,"").replace(/[»"')\s]+$/,"").replace(/[.;,]+$/,"").trim(),a===u)break}a=a.slice(0,90),s[+o[1]]={mark:o[2],why:a}}return Object.keys(s).length?s:null}function wc(e){let t=String(e||""),n=t.search(/\n\s*РАЗМЕТКА\s*:?/i);return(n>=0?t.slice(0,n):t).trim()}async function Ed({apiKey:e,model:t,text:n,maxOut:r,timeoutMs:s=6e4,temp:o=.2}){let a=String(t||Qr).trim(),c=i(m=>({contents:[{role:"user",parts:[{text:n}]}],generationConfig:{temperature:o,maxOutputTokens:r,...m?{thinkingConfig:{thinkingBudget:0}}:{}}}),"mkBody"),u=new AbortController,l=setTimeout(()=>u.abort(),s),h=i(async m=>{let p=await fetch(Cd(a)+"?key="+encodeURIComponent(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c(m)),signal:u.signal}),d=await p.text(),f=null;try{f=JSON.parse(d)}catch{}return{httpOk:p.ok,status:p.status,raw:d,data:f}},"call");try{let m=await h(!0);if(!m.httpOk&&/thinking/i.test(m.raw||"")&&(m=await h(!1)),!m.httpOk)return{ok:!1,err:"Google API: "+(m.data&&m.data.error&&m.data.error.message?m.data.error.message:(m.raw||"HTTP "+m.status).slice(0,400))};let p=m.data&&m.data.candidates&&m.data.candidates[0],d=p&&p.content&&p.content.parts,f=Array.isArray(d)?d.map(b=>b.text||"").join("").trim():"",g=p&&p.finishReason;if(g==="MAX_TOKENS")return f?{ok:!0,text:f,truncated:!0}:{ok:!1,err:"модель израсходовала лимит на размышление и не успела ответить — попробуйте ещё раз или смените модель"};if(!f){let b=g?" (причина: "+g+")":"",y=m.data&&m.data.promptFeedback&&m.data.promptFeedback.blockReason;return{ok:!1,err:"модель ничего не ответила"+(y?" — запрос отклонён: "+y:b)}}return{ok:!0,text:f}}catch(m){return{ok:!1,err:m&&m.name==="AbortError"?"ответ не пришёл за "+Math.round(s/1e3)+" с":String(m&&m.message||m)}}finally{clearTimeout(l)}}async function yc(e){let t=Do(e.model),n=null,r=[];for(let o of t){let a=await Ed({...e,model:o});if(a.ok)return{...a,model:o,...r.length?{fellBack:{from:t[0],to:o,tried:r.slice()}}:{}};if(n=a,r.push({model:o,err:a.err}),!Dd(a.err))break}return{ok:!1,err:r.length>1?"перебрали модели ("+r.map(o=>o.model).join(", ")+"), последняя ошибка — "+(n&&n.err):n&&n.err,model:t[0],tried:r}}async function xc({apiKey:e,timeoutMs:t=15e3}={}){if(!e)return{ok:!1,err:"не задан ключ Google"};let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(gc.replace(/\/$/,"")+"?key="+encodeURIComponent(e)+"&pageSize=200",{signal:n.signal}),o=await s.text(),a=null;try{a=JSON.parse(o)}catch{}return s.ok?{ok:!0,models:(Array.isArray(a&&a.models)?a.models:[]).filter(l=>Array.isArray(l.supportedGenerationMethods)?l.supportedGenerationMethods.includes("generateContent"):!0).map(l=>String(l.name||"").replace(/^models\//,"")).filter(Boolean).filter(l=>!/embedding|aqa|image|imagen|veo|tts/i.test(l))}:{ok:!1,err:"Google API: "+(a&&a.error&&a.error.message||o.slice(0,300))}}catch(s){return{ok:!1,err:s&&s.name==="AbortError"?"Google не ответил вовремя":String(s&&s.message||s)}}finally{clearTimeout(r)}}async function Zr({apiKey:e,model:t,analytics:n,sampleTitles:r,kind:s="summary"}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};if(s==="verify")return{ok:!1,err:"проверка релевантности идёт другим путём (askVerifyAll)"};let o=String(t||Qr).trim(),a=Jr[s]||Jr.summary,c=r||[],u=s==="sentiment"?Mo(n,null)+`

Заголовки для оценки (`+c.length+` шт.):
`+c.map((m,p)=>p+1+". "+m).join(`
`):Mo(n,c),l=s==="sentiment"?kc(c.length):2e3,h=await yc({apiKey:e,model:o,text:a+u,maxOut:l,temp:s==="sentiment"?0:.2});return h.ok?{ok:!0,text:wc(h.text),model:h.model||o,marks:bc(h.text),...h.truncated?{truncated:!0}:{},...h.fellBack?{fellBack:h.fellBack}:{}}:h}function kc(e){return Math.max(2e3,Math.min(8e3,700+e*30))}function jd(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","Знак ставится ПО ОТНОШЕНИЮ К НЕМУ, а не «хорошая или плохая новость вообще»:","  +  объект показан в выигрышном свете: достижение, награда, поддержка, похвала в его адрес;","  -  объект показан невыгодно: критика, обвинение, провал, скандал, недовольство им;","  0  протокольное сообщение, факт, объявление — без оценки объекта.","Беда, катастрофа, конфликт САМИ ПО СЕБЕ негативом не считаются: если объект помогает","пострадавшим, решает проблему или просто упомянут рядом — для него это 0 или +.","Если по показанному тексту тон не виден — ставь 0 и пиши причину «тон по фрагменту не виден».","Это лучше, чем угадать: угаданный знак от настоящего не отличить.",""].join(`
`)}function qd(e){return!e||typeof e!="object"?"":String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,Od)}function Id(e){let t=e&&typeof e=="object"?e.title:e;return String(t??"").replace(/\s+/g," ").trim()}function Bd(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","  +  материал действительно ПРО ЭТОТ объект: он действующее лицо, о нём говорят,","     его решение, его ведомство, его слова — даже если упомянут вскользь;","  -  слово совпало СЛУЧАЙНО: однофамилец или тёзка, другой человек с той же фамилией,","     улица/район/школа, названные этим именем, другая организация с похожим названием,","     другое значение слова;","  0  по показанному тексту понять нельзя.","Упоминание вскользь — это всё равно «+»: наша задача отсеять ЧУЖОЕ, а не короткое.","Если сомневаешься между «-» и «0» — ставь 0. Выброшенный по ошибке материал","дороже лишнего: пропускать важное нельзя.",""].join(`
`)}async function vc(e){return Tc({...e,task:"sentiment"})}async function Sc(e){return Tc({...e,task:"verify"})}async function Tc({apiKey:e,model:t,analytics:n,titles:r,batch:s=zd,maxCalls:o=Pd,task:a="sentiment"}){let c=mc[a]||mc.sentiment;if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let u=String(t||Qr).trim(),l=(r||[]).map(M=>({title:Id(M),snip:qd(M)}));if(!l.length)return{ok:!1,err:"нечего оценивать: в окне нет материалов"};let h=l.some(M=>M.snip),m={},p=0,d="",f="",g=u,b=null,y=i(async(M,N,Y)=>{if(M>=N||p>=o)return;let H=l.slice(M,N),P=H.map((C,F)=>M+F+1+". "+C.title+(C.snip?`
   из текста: `+C.snip:"")).join(`
`),K=Jr[Y?c.first:c.more]+c.subject(n)+(h?Jr.withSnippets:""),V=Y?K+Mo(n,null)+`

Заголовки для оценки (`+H.length+` шт.):
`:K+"Заголовки ("+H.length+` шт.):
`;p++;let te=await yc({apiKey:e,model:u,text:V+P,maxOut:kc(H.length),temp:0});if(!te.ok){f||(f=te.err);return}g=te.model||g,te.fellBack&&!b&&(b=te.fellBack);let xe=bc(te.text)||{},ke=Object.keys(xe).filter(C=>+C>M&&+C<=N);for(let C of ke)m[C]=xe[C];if(Y&&!d&&(d=wc(te.text)),H.length-ke.length>Math.max(1,Math.floor(H.length*.1))&&H.length>Nd&&p<o){let C=M+Math.floor(H.length/2);await y(M,C,!1),await y(C,N,!1)}},"askChunk");await y(0,Math.min(s,l.length),!0);for(let M=s;M<l.length&&p<o;M+=s)await y(M,Math.min(M+s,l.length),!1);let w=Object.keys(m);if(!w.length)return{ok:!1,err:f||"модель не вернула разметку"};let R=0,k=0,T=0;for(let M of w){let N=m[M]&&m[M].mark;N==="+"?R++:N==="0"?k++:N==="-"&&T++}let v=R+k+T,S=c.counts(R,k,T);return d&&S.push(d),{ok:!0,model:g,marks:m,text:S.join(`
`).trim(),calls:p,covered:v,asked:l.length,...b?{fellBack:b}:{},...f&&v<l.length?{partialErr:f}:{}}}var Qr,Md,gc,Cd,Jr,zd,Nd,Pd,Od,mc,Co=le(()=>{Qr="gemini-3.5-flash",Md=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.5-flash"];i(Dd,"worthNextModel");i(Do,"modelChain");gc=typeof process<"u"&&process.env&&process.env.MC_GEMINI_BASE||"https://generativelanguage.googleapis.com/v1beta/models/",Cd=i(e=>`${gc}${encodeURIComponent(e)}:generateContent`,"ENDPOINT");i(Mo,"brief");Jr={summary:["Ты — редактор-аналитик службы медиамониторинга. Ниже — данные по теме за период.","Дай РОВНО 5 наблюдений на русском языке. Каждое — одна строка, начинается с «— »,","одно-два предложения, и каждое опирается на показанные данные.","","Смотри СОДЕРЖАТЕЛЬНО:","  • какие сюжеты идут по теме, что повторяется у разных изданий, а что прозвучало один раз;","  • кто рядом с объектом — люди, ведомства, компании, регионы — и в какой связи;","  • как подают тему РАЗНЫЕ источники: где совпадают, где расходятся, кто ведёт, а кто молчит;","  • если дана тональность — сопоставь её с источниками: у кого перекос и в чём он состоит;","  • как меняется картина по дням: всплеск, затухание, разовый повод или длящийся сюжет;","  • упоминания вскользь (объект только в тексте) против материалов ПРО него.","","ЗАПРЕЩЕНО: писать про саму программу и про то, как собраны данные;","пересказывать и перечислять заголовки, цитировать их, выводить списки материалов;","писать JSON, markdown-таблицы, заголовки разделов; давать советы («важно следить», «рекомендуется»).","Заголовки даны как материал для выводов — в ответе их быть не должно.","Числа бери из данных. Не выдумывай ни источников, ни событий, которых в них нет.","","Ответ — только пять строк, начинающихся с «— ». Ничего до и после.",""].join(`
`),sentiment:["Ты — редактор-аналитик службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Оцени тональность каждого материала по отношению к ОБЪЕКТУ МОНИТОРИНГА (см. ниже).","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: чем окрашена тема, есть ли перекос по конкретным СМИ>","","РАЗМЕТКА:","1:+:награда врачам, тон одобрительный","2:0:протокольное сообщение без оценки","3:-:критика в адрес ведомства","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ позитив, 0 нейтрально, - негатив), двоеточие и КОРОТКАЯ причина —","от двух до шести слов по-русски, строчными, без точки в конце. Причина объясняет","ИМЕННО ЭТОТ заголовок: что в нём делает его позитивным, нейтральным или негативным.","Не пересказывай заголовок и не повторяй слово «позитив»/«негатив» — это уже есть в знаке.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем оценку с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),withSnippets:["Под частью заголовков строкой «из текста:» дан фрагмент статьи вокруг ключевого слова.","Опирайся В ПЕРВУЮ ОЧЕРЕДЬ на него: заголовок часто протокольный («провёл совещание»),","а настоящий тон виден в тексте. Фрагмент — это НЕ отдельный материал и своего номера","не имеет: он относится к заголовку над собой.",""].join(`
`),sentimentMore:["Ты — редактор-аналитик службы медиамониторинга. Продолжаем оценку тональности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + позитив, 0 нейтрально, - негатив. Причина — от двух до шести слов","по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`),verify:["Ты — редактор службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Задача ровно одна: сказать, относится ли каждый материал К ОБЪЕКТУ МОНИТОРИНГА —","или слово совпало случайно (однофамилец, тёзка, другое значение слова, чужая организация).","Тональность, важность и качество материала тебя здесь НЕ интересуют.","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: много ли постороннего попало в выдачу и какого рода>","","РАЗМЕТКА:","1:+:премьер-министр, тот самый","2:-:однофамилец, сотрудник КНБ","3:0:по фрагменту не понять, кто это","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ это про объект, - это НЕ про объект, 0 по показанному не понять), двоеточие","и КОРОТКАЯ причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем вердикт с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),verifyMore:["Ты — редактор службы медиамониторинга. Продолжаем проверку релевантности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + это про объект, - это НЕ про объект (совпало слово), 0 по показанному не понять.","Причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`)};i(bc,"parseMarks");i(wc,"stripMarks");i(Ed,"callOne");i(yc,"callModel");i(xc,"listModels");i(Zr,"askGemini");i(kc,"outCapFor");zd=120,Nd=15,Pd=12;i(jd,"subjectBlock");Od=200;i(qd,"snipOf");i(Id,"titleOf");i(Bd,"subjectBlockVerify");mc={sentiment:{first:"sentiment",more:"sentimentMore",subject:jd,counts:i((e,t,n)=>["ПОЗИТИВНЫХ: "+e,"НЕЙТРАЛЬНЫХ: "+t,"НЕГАТИВНЫХ: "+n,""],"counts")},verify:{first:"verify",more:"verifyMore",subject:Bd,counts:i((e,t,n)=>["ПРО ОБЪЕКТ: "+e,"НЕ ПОНЯТЬ: "+t,"НЕ ПРО ОБЪЕКТ: "+n,""],"counts")}};i(vc,"askSentimentAll");i(Sc,"askVerifyAll");i(Tc,"askMarksAll")});function Ac(e){let t=e||{},n=String(t.mode||"off");return n==="daily"?1:n==="hours"?Math.max(1,Math.ceil(24/Math.max(1,+t.everyHours||6))):n==="minutes"?Math.max(1,Math.ceil(1440/Math.max(10,+t.everyMinutes||20))):0}function $r(e){return Ac(e)<=1}function _r(e){return"прогоны идут чаще раза в сутки ("+Ac(e)+" в сутки) — проверка релевантности смотрит каждый материал окна и на таком шаге сожгла бы квоту Google. Поставьте расписание «каждый день» или реже — или запускайте проверку вручную."}var Eo=le(()=>{i(Ac,"runsPerDay");i($r,"verifyAllowed");i(_r,"verifyWhyNot")});function Hd(e,t=60){return(e.items||[]).filter(n=>n&&n.title&&n.rel!=="-").slice(0,t).map(n=>({title:n.title,url:n.url,source:n.source,date:n.date,sent:n.sent||""}))}function No(e){return(e||[]).map(t=>{let n=typeof t=="string"?t:t.title||"",r=t&&t.source?" — "+t.source:"",s=t&&t.sent&&Lc[t.sent]?" ["+Lc[t.sent]+"]":"";return n+r+s})}function Po(e){return(e||{}).geminiSnippets!==!1}function Ud(e,t){return Po(t)?e.map(n=>({title:n.title,snippet:n.snippet||""})):e.map(n=>n.title)}function ts(e,t){if(!t)return null;let n=[];return e.forEach((r,s)=>{let o=t[s+1];if(!o)return;let a=typeof o=="string"?o:o.mark,c=typeof o=="string"?"":o.why||"";(a==="+"||a==="0"||a==="-")&&n.push({...r,mark:a,why:c})}),n.length?n:null}async function jo(e,{kind:t="sentiment",days:n=null,analytics:r,settings:s,rescore:o=!1}={}){let a=Rc[t]||Rc.sentiment,c=s||et();if(!c.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};o&&a.clear(e);let u=Ro(e,{days:n});if(!u.length)return{ok:!1,err:a.empty};let l=u.filter(w=>!w[a.field]).slice(0,Fd),h=u.filter(w=>w[a.field]).length,m=0,p=0,d="",f=c.geminiModel||"",b=((bi(e)||{})[t]||{}).text||"";if(l.length){let w=await a.ask({apiKey:c.geminiKey,model:c.geminiModel,analytics:r,titles:Ud(l,c)});if(m=w.calls||0,!w.ok)return{ok:!1,err:w.err||"не получилось",calls:m,model:w.model||f};f=w.model||f,w.text&&(b=w.text);let R=(ts(l,w.marks)||[]).map(k=>({...k,model:f}));p=a.set(e,R),d=""}let y=Ro(e,{days:n}).filter(w=>w[a.field]).map(w=>({title:w.title,url:w.url,source:w.source,date:w.date,mark:w[a.field],why:w[a.why]||""}));return{ok:!0,text:b,model:f,err:d,calls:m,fresh:p,stored:h,asked:l.length,covered:y.length,total:u.length,items:y.length?y:null}}function Oo(e){return!e||!e.ok?e&&e.err||"не получилось":e.asked?`оценено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее оценено ${e.stored} — не переспрашивали`:"")+`; всего в окне размечено ${e.covered} из ${e.total}`:`все ${e.covered} материалов окна уже оценены — к Google не ходили`}function qo(e){if(!e||!e.ok)return e&&e.err||"не получилось";let t=(e.items||[]).filter(s=>s.mark==="-").length,n=(e.items||[]).filter(s=>s.mark==="0").length,r=`; похоже, не про объект — ${t}`+(n?`, по фрагменту не понять — ${n}`:"")+"; ничего не удалено, решает человек";return e.asked?`проверено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее проверено ${e.stored} — не переспрашивали`:"")+`; всего в окне проверено ${e.covered} из ${e.total}`+r:`все ${e.covered} материалов окна уже проверены — к Google не ходили`+r}async function ns(e,{foundNow:t=null,runTs:n=null}={}){let r=[],s=nt(e);if(!s)return r;let o=s.config||{};if(!o.aiAuto)return r;if(!qt(o).ai)return r.push("ИИ-разбор пропущен: "+yn),r;let a=et();if(!a.geminiKey)return r.push("ИИ-разбор включён, но ключ Gemini не задан — пропускаю (задайте во вкладке «Аналитика»)"),r;if(t===0)return r.push("ИИ-разбор пропущен: в этом прогоне ноль материалов — квоту не тратим"),r;let c=Array.isArray(o.aiKinds)&&o.aiKinds.length?o.aiKinds.filter(h=>zo.includes(h)):["summary"],u=o.periodMode==="rolling"?Math.max(2,+o.periodDays||2):null,l=It(e,{days:u});if(!l)return r;for(let h of c)try{if(h==="verify"&&!$r(s.schedule)){r.push(`ИИ-${es[h]} пропущена: `+_r(s.schedule));continue}let m=h==="sentiment"||h==="verify",p=m?null:Hd(s),d=m?await jo(e,{kind:h,days:u,analytics:l,settings:a}):await Zr({apiKey:a.geminiKey,model:a.geminiModel,analytics:l,sampleTitles:No(p),kind:h});Lr(e,h,{at:Date.now(),runTs:n,window:l.overview.windowFrom+" … "+l.overview.windowTo,text:d.ok?d.text:"",model:d.model||a.geminiModel||"",err:d.ok?"":d.err||"не получилось",auto:!0,items:d.ok?m?d.items:ts(p,d.marks):null});let f=h==="sentiment"?Oo(d):h==="verify"?qo(d):"готово";r.push(d.ok?`ИИ-${es[h]}: ${f}`:`ИИ-${es[h]}: ${d.err||"не получилось"}`)}catch(m){r.push(`ИИ-${es[h]}: сбой — ${String(m&&m.message||m)}`)}return r}var zo,es,Lc,Fd,Rc,Io=le(()=>{Xt();$n();Co();Yn();Eo();zo=["summary","sentiment","verify"],es={summary:"разбор",sentiment:"тональность",verify:"проверка релевантности"};i(Hd,"sampleItems");Lc={"+":"выигрышно",0:"нейтрально","-":"невыгодно"};i(No,"summaryTitles");Fd=600;i(Po,"sendSnippets");i(Ud,"sentimentTitles");i(ts,"applyMarks");Rc={sentiment:{field:"sent",why:"sentWhy",ask:vc,set:vi,clear:Ai,empty:"нечего оценивать: в окне нет материалов"},verify:{field:"rel",why:"relWhy",ask:Sc,set:Si,clear:Ti,empty:"нечего проверять: в окне нет материалов"}};i(jo,"markRun");i(Oo,"sentimentNote");i(qo,"verifyNote");i(ns,"runAiAfterRun")});async function ss(e,t,n={},r=Wd){if(!e)return{ok:!1,err:"не задан токен бота"};let s=new AbortController,o=setTimeout(()=>s.abort(),r);try{let a=await fetch(`${Gd}/bot${e}/${t}`,{method:"POST",signal:s.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),c=await a.text(),u=null;try{u=JSON.parse(c)}catch{}return u?u.ok?{ok:!0,result:u.result}:{ok:!1,err:u.description||"телеграм отказал (HTTP "+a.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+a.status+")"}}catch(a){let c=String(a&&a.message||a);return{ok:!1,err:/abort/i.test(c)?"телеграм не ответил за "+Math.round(r/1e3)+" с":c}}finally{clearTimeout(o)}}async function Dc(e){let t=await ss(e,"getMe");if(!t.ok)return{ok:!1,err:t.err};let n=t.result&&t.result.username||"";return{ok:!0,bot:n?"@"+n:t.result&&t.result.first_name||"бот"}}async function Ho(e,t={}){let n=(t.chats||[]).slice(),r=new Map(n.map(u=>[String(u.id),u])),s=await ss(e,"getUpdates",{offset:t.offset||0,timeout:0,limit:100});if(!s.ok)return{chats:n,offset:t.offset||0,err:s.err,added:0};let o=t.offset||0,a=0,c=0;for(let u of s.result||[]){u.update_id!=null&&(o=Math.max(o,u.update_id+1));let l=u.message||u.channel_post||u.my_chat_member,h=l&&l.chat;if(!h||h.id==null)continue;let m=String(l.text||"").trim().toLowerCase(),p=[h.title,h.first_name,h.username&&"@"+h.username].filter(Boolean)[0]||String(h.id);if(/^\/stop\b/.test(m)||u.my_chat_member&&/kicked|left/.test(String(u.my_chat_member.new_chat_member&&u.my_chat_member.new_chat_member.status))){r.delete(String(h.id))&&c++;continue}r.has(String(h.id))?r.get(String(h.id)).name=p:(r.set(String(h.id),{id:h.id,name:p}),a++)}return{chats:[...r.values()],offset:o,added:a,removed:c,err:""}}function Vd(e,t){let n=ir(e.date)||"",r=[e.source,n].filter(Boolean).map(rs).join(" · "),s=String(e.title||e.url||""),o=i(c=>String(c||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),a=String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,300);return a&&(o(a)===o(s)||o(s).includes(o(a)))&&(a=""),[r?"📰 <b>"+r+"</b>":"📰",rs(s),a?"<i>"+rs(a)+"</i>":"",e.url||"",t?"<i>"+rs(t)+"</i>":""].filter(Boolean).join(`
`)}async function $t(e,t={}){if(Bo.has(e))return{sent:0,skipped:"уже идёт отправка"};let n=Ot(e);if(!n.enabled||!n.token)return{sent:0,skipped:"бот выключен"};let r=nt(e);if(!r)return{sent:0,skipped:"проект не найден"};if(!qt(r.config||{}).bot)return{sent:0,skipped:yn};Bo.add(e);try{let s=await Ho(n.token,n);Rt(e,{chats:s.chats,offset:s.offset,err:s.err||""});let o=s.chats;if(!o.length)return{sent:0,skipped:"никто не нажал Start"};let a=wi(e);if(!a.length)return{sent:0,skipped:"нового нет"};let c=a.slice(0,Kd),u=a.length-c.length,l=0,h=[];for(let p of c){let d=Vd(p,t.withName===!1?"":r.name),f=!1;for(let g of o){let b=await ss(n.token,"sendMessage",{chat_id:g.id,text:d,parse_mode:"HTML",disable_web_page_preview:!0});b.ok?f=!0:Rt(e,{err:b.err})}f&&(h.push(p.url),l++),Mc&&await Yd(Mc)}if(h.length&&yi(e,h),u>0)for(let p of o)await ss(n.token,"sendMessage",{chat_id:p.id,text:"… и ещё "+u+": пришлю следующей порцией. Всё сразу — в кабинете."});let m=Ot(e);return Rt(e,{sentTotal:(m.sentTotal||0)+l,lastSentAt:Date.now(),err:l?"":m.err}),{sent:l,rest:u,chats:o.length}}catch(s){try{Rt(e,{err:String(s&&s.message||s)})}catch{}return{sent:0,err:String(s&&s.message||s)}}finally{Bo.delete(e)}}var Gd,Kd,Mc,Wd,Yd,rs,Bo,Fo=le(()=>{Xt();Ut();Yn();Gd=typeof process<"u"&&process.env&&process.env.MC_TG_API_BASE||"https://api.telegram.org",Kd=30,Mc=typeof process<"u"&&process.env&&process.env.MC_TG_PAUSE_MS!=null?Math.max(0,+process.env.MC_TG_PAUSE_MS):1200,Wd=15e3,Yd=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),rs=i(e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"esc");i(ss,"tgApi");i(Dc,"checkBot");i(Ho,"pullChats");i(Vd,"formatItem");Bo=new Set;i($t,"notifyNew")});function Pc(){let e="";try{e=(0,as.userInfo)().username||""}catch{}return(0,kn.createHash)("sha256").update((0,as.hostname)()+"|"+e).digest("hex").slice(0,16)}function Wo(){try{return(0,mt.existsSync)(Go)?JSON.parse((0,mt.readFileSync)(Go,"utf8")):null}catch{return null}}function Ko(e){try{(0,mt.mkdirSync)(be,{recursive:!0})}catch{}try{(0,mt.writeFileSync)(Go,JSON.stringify(e,null,2))}catch{}}function Xd(){let e=Wo();if(e&&e.installedAt)return e.installedAt>=os?e.installedAt:(Ko({...e,installedAt:os}),os);let t=Date.now();try{(0,mt.existsSync)(be)&&(t=Math.min(t,(0,mt.statSync)(be).birthtimeMs||t))}catch{}return t=Math.max(t,os),Ko({...e||{},installedAt:t}),t}function jc(e){let t=Wo()||{};return t.key=String(e||"").trim(),Ko(t),is()}function Jd(e,t=Date.now()){let n=String(e||"").trim();if(!n)return{ok:!1,why:"ключ не введён"};if(!Ec)return{ok:!1,why:"проверка ключей ещё не включена — программа работает в пробном режиме"};let r=n.split(".");if(r.length!==3||r[0]!=="MC1")return{ok:!1,why:"это не похоже на ключ mediachrome — скопируй строку целиком, она начинается с MC1."};let s;try{s=(0,kn.createPublicKey)({key:Buffer.from(Ec,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ — нужна переустановка"}}let o=!1;try{o=(0,kn.verify)(null,Buffer.from(r[0]+"."+r[1],"utf8"),s,zc(r[2]))}catch{o=!1}if(!o)return{ok:!1,why:"подпись ключа не сошлась — ключ поддельный или повреждён при пересылке"};let a;try{a=JSON.parse(zc(r[1]).toString("utf8"))}catch{a=null}if(!a||typeof a!="object")return{ok:!1,why:"ключ подписан верно, но его содержимое не читается"};let c={to:String(a.to||""),until:a.until||null,id:String(a.id||""),hw:a.hw||null};if(c.hw&&c.hw!==Pc())return{ok:!1,why:"ключ выдан для другого компьютера",info:c};if(c.until){let u=Date.parse(c.until+"T23:59:59");if(!Number.isFinite(u))return{ok:!1,why:"в ключе неразборчивая дата окончания",info:c};if(t>u)return{ok:!1,why:"срок лицензии истёк "+c.until,info:c,expired:!0}}return{ok:!0,why:"",info:c}}function is(e=Date.now()){let t=Wo()||{},n=Xd(),r=Math.floor((e-n)/864e5),s=Math.min(Uo,Math.max(0,Uo-r)),o=t.key?Jd(t.key,e):{ok:!1,why:""},a={installedAt:n,hasKey:!!t.key,machine:Pc(),enforced:Cc};if(o.ok)return{...a,ok:!0,mode:"licensed",daysLeft:null,why:"",to:o.info.to,until:o.info.until,keyId:o.info.id,locked:!!o.info.hw,keyWhy:""};let c=s<=0;return{...a,ok:!Cc||!c,mode:c?"expired":"trial",daysLeft:s,why:c?"пробный период ("+Uo+" дней) закончился — нужен лицензионный ключ":"",keyWhy:t.key?o.why:""}}function cs(e=Date.now()){let t=is(e);return t.ok?null:t.why}var Nc,mt,kn,as,Cc,Uo,Ec,Go,os,zc,Yo=le(()=>{Nc=require("node:path"),mt=require("node:fs"),kn=require("node:crypto"),as=require("node:os");wt();Cc=!0,Uo=7,Ec="MCowBQYDK2VwAyEA/0CvjwtjJF+3fBS+0ewj3O9wtXQBpDiheHRzJV/PXPw=",Go=(0,Nc.join)(be,"license.json");i(Pc,"machineId");i(Wo,"readState");i(Ko,"writeState");os=Date.parse("2026-09-22T00:00:00Z");i(Xd,"installedAt");i(jc,"setKey");zc=i(e=>Buffer.from(String(e).replace(/-/g,"+").replace(/_/g,"/"),"base64"),"b64urlToBuf");i(Jd,"verifyKey");i(is,"licenseState");i(cs,"blockedReason")});function qc(){setInterval(tp,60*1e3)}async function Qd(e,t=Zd){let n=[...new Set((e||[]).map(a=>String(a).trim()).filter(Boolean).map(a=>a.replace(/^https?:\/\//,"").replace(/\/.*$/,"")).filter(a=>a&&!a.startsWith("@")))],r=n.filter(a=>!/^t\.me$/i.test(a)),s=(r.length?r:n).slice(0,3);return s.length?(await Promise.all(s.map(a=>t(a)))).some(Boolean):!0}async function Zd(e){let t=new AbortController,n=setTimeout(()=>t.abort(),6e3);try{return await fetch("https://"+e+"/",{method:"HEAD",redirect:"follow",signal:t.signal}),!0}catch{return!1}finally{clearTimeout(n)}}function ep(e,t){let n=e.schedule||{mode:"off"},r=e.lastRun||0,s=(t.getTime()-r)/6e4;if(n.mode==="minutes")return s>=_d(n)-.5;if(n.mode==="hours")return s>=(n.everyHours||6)*60-.5;if(n.mode==="daily"){let o=n.hour!=null?n.hour:9,a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),o,0,0,0);return t.getTime()>=a.getTime()&&r<a.getTime()}return!1}async function tp(){if(cs()||vt.size)return;let e=new Date;for(let t of Ar()){if(vt.has(t.id))continue;let n=nt(t.id);if(!n)continue;let r=Math.max(n.lastRun||0,Oc.get(n.id)||0);if(ep({...n,lastRun:r},e)){if(!await Qd((n.config||{}).sites)){console.log(`[расписание] «${n.name}»: сети нет — откладываю (проверю через минуту)`);continue}vt.add(n.id),Kr(n.id,{name:n.name,by:"расписание"}),Oc.set(n.id,Date.now());try{let s=null,o=i((h,m)=>{try{let p=mn(n.id,h,m,s);s=p.ts,$t(n.id,{ts:p.ts}).catch(()=>{})}catch{}},"onProgress"),{rows:a,log:c}=await Gr(n,o,{onStep:i(h=>Wr(n.id,h),"onStep"),stopping:i(()=>Yr(n.id),"stopping")}),u=mn(n.id,a,c,s);try{await $t(n.id,{ts:u.ts})}catch{}let l=await ns(n.id,{foundNow:a.length,runTs:u.ts});l.length&&(Rr(n.id,u.ts,l.map(h=>({site:"(ИИ)",channel:"gemini",found:0,note:h}))),l.forEach(h=>console.log(`[расписание] «${n.name}»: ${h}`))),console.log(`[расписание] «${n.name}»: +${u.added} новых (всего ${u.total})`)}catch(s){console.error("[расписание] ошибка:",s&&s.message||s)}finally{vt.delete(n.id),Vr(n.id)}}}}var $d,_d,Oc,Ic=le(()=>{Xt();vo();So();To();Io();Fo();Yo();i(qc,"startScheduler");i(Qd,"netReady");i(Zd,"probeHost");$d=10,_d=i(e=>Math.max($d,Math.min(720,+(e&&e.everyMinutes)||20)),"everyMinutes");i(ep,"isDue");Oc=new Map;i(tp,"tick")});function Wc(){return"0.5.5"}function Yc(e,t){let n=String(e||"").split(/[.\-+]/),r=String(t||"").split(/[.\-+]/);for(let s=0;s<Math.max(n.length,r.length);s++){let o=parseInt(n[s],10),a=parseInt(r[s],10),c=Number.isFinite(o)?o:0,u=Number.isFinite(a)?a:0;if(c!==u)return c<u?-1:1}return 0}function us(){try{return(0,De.existsSync)(Vo)?JSON.parse((0,De.readFileSync)(Vo,"utf8")):{}}catch{return{}}}function Bc(e){try{(0,De.mkdirSync)(be,{recursive:!0}),(0,De.writeFileSync)(Vo,JSON.stringify(e,null,2))}catch{}}async function sp(e,t=15e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(e,{signal:n.signal,redirect:"follow",headers:{"Cache-Control":"no-cache"}});if(!s.ok)throw new Error("HTTP "+s.status);let o=await s.text();return JSON.parse(o)}finally{clearTimeout(r)}}async function Xo(e={}){let t=us(),n=Date.now(),r=Number.isFinite(e.every)?e.every:rp;if(!e.force&&t.checkedAt&&n-t.checkedAt<r)return _n();qe={...qe,phase:qe.phase==="downloading"?"downloading":"checking",err:""};try{let s=await sp(np),o=String(s.version||"").trim();if(!o)throw new Error("в файле версии нет номера");Bc({...t,checkedAt:n,err:"",latest:{version:o,notes:String(s.notes||""),url:String(s.setup||s.url||""),sha256:String(s.sha256||"").toLowerCase(),size:+s.size||0,at:String(s.at||"")}})}catch(s){Bc({...t,checkedAt:n,err:String(s&&s.message||s).slice(0,200)})}return qe.phase==="checking"&&(qe={...qe,phase:"idle"}),_n()}function Jo(e){let t=(0,Bt.join)(vn,"mediachrome-setup-"+e+".exe");try{return(0,De.existsSync)(t)&&(0,De.statSync)(t).size>0?t:""}catch{return""}}function _n(){let e=us(),t=Wc(),n=e.latest||null,r=!!(n&&n.version&&Yc(t,n.version)<0);return{current:t,latest:n?n.version:"",newer:r,notes:n?n.notes:"",size:n?n.size:0,checkedAt:e.checkedAt||0,err:e.err||"",canInstall:process.platform==="win32"&&r&&!!(n&&n.url),ready:r?!!Jo(n.version):!1,phase:qe.phase,got:qe.got,total:qe.total,liveErr:qe.err}}async function Vc(){let t=us().latest;if(!t||!t.url)return{ok:!1,err:"не знаю, что качать — сначала проверка"};if(Yc(Wc(),t.version)>=0)return{ok:!1,err:"у вас и так последняя версия"};let n=Jo(t.version);if(n)return{ok:!0,file:n,cached:!0};if(qe.phase==="downloading")return{ok:!0,running:!0};qe={phase:"downloading",got:0,total:t.size||0,err:""};let r=(0,Bt.join)(vn,"mediachrome-setup-"+t.version+".part");try{(0,De.mkdirSync)(vn,{recursive:!0});for(let m of(0,De.readdirSync)(vn))if(!m.includes(t.version))try{(0,De.rmSync)((0,Bt.join)(vn,m),{force:!0})}catch{}let s=new AbortController,o=await fetch(t.url,{signal:s.signal,redirect:"follow"});if(!o.ok)throw new Error("HTTP "+o.status);let a=+o.headers.get("content-length")||t.size||0;qe={...qe,total:a};let c=(0,Uc.createHash)("sha256"),u=new ls.Transform({transform(m,p,d){c.update(m),qe={...qe,got:qe.got+m.length},d(null,m)}});await(0,Kc.pipeline)(ls.Readable.fromWeb(o.body),u,(0,De.createWriteStream)(r));let l=c.digest("hex");if(t.sha256&&l!==t.sha256){try{(0,De.rmSync)(r,{force:!0})}catch{}throw new Error("файл скачался испорченным (отпечаток не сошёлся) — попробуйте ещё раз")}let h=(0,Bt.join)(vn,"mediachrome-setup-"+t.version+".exe");try{(0,De.rmSync)(h,{force:!0})}catch{}return(0,De.renameSync)(r,h),qe={phase:"ready",got:qe.got,total:a,err:""},{ok:!0,file:h}}catch(s){try{(0,De.rmSync)(r,{force:!0})}catch{}let o=String(s&&s.message||s).slice(0,200);return qe={phase:"error",got:0,total:0,err:o},{ok:!1,err:o}}}function Xc(e={}){if(e.busy)return{ok:!1,err:"сейчас идёт сбор — обновление подождёт до его конца"};let n=us().latest,r=n&&Jo(n.version);if(!r)return{ok:!1,err:"установщик ещё не скачан"};if(process.platform!=="win32")return{ok:!1,err:"установщик есть только для Windows"};try{(0,Gc.spawn)(r,["/SILENT","/NOCANCEL","/RESTARTAPPLICATIONS"],{detached:!0,stdio:"ignore"}).unref()}catch(s){return{ok:!1,err:String(s&&s.message||s).slice(0,200)}}return{ok:!0,version:n.version}}var Bt,De,Hc,Fc,Uc,Gc,ls,Kc,np,Vo,vn,rp,qe,Jc=le(()=>{Bt=require("node:path"),De=require("node:fs"),Hc=require("node:url"),Fc=require("node:path"),Uc=require("node:crypto"),Gc=require("node:child_process"),ls=require("node:stream"),Kc=require("node:stream/promises");wt();np=process.env.MC_UPDATE_URL||"https://raw.githubusercontent.com/Tim2190/mediachrome-dist/main/update.json",Vo=(0,Bt.join)(be,"update-state.json"),vn=(0,Bt.join)(be,"update"),rp=24*3600*1e3;i(Wc,"currentVersion");i(Yc,"cmpVer");i(us,"readState");i(Bc,"writeState");qe={phase:"idle",got:0,total:0,err:""};i(sp,"getJson");i(Xo,"checkUpdate");i(Jo,"readyFile");i(_n,"updateState");i(Vc,"downloadUpdate");i(Xc,"installUpdate")});function ds(){return`<!doctype html>\r
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
    background:url(data:image/webp;base64,UklGRryNAABXRUJQVlA4ILCNAACQKQadASp4Bb8DPrVWo00nMi8uJ3MKukAWiWlukgynL8N7DO9eJYu53VLP8rYe7/tyxv2YEob6zoBsbH3H/p89Lzf/Z7dAf0Lnt0Xbn/oF//3Fa/2Qu/5/f73+N/8b9oP3/+InrTmu8T/5Om3c4f593//l+0z7//J369////i9Wn9//9n25/9PDPv54cPIc/19ePvx5/nrv6aX9voWv/z03fkv/pKa+W3gOWRtslsvt4ABc40yzSOqv4dtTsGmqZfad8BekMkxuWHn1HIro+/sJ9De5fNL91yyofc2giORcwDql7pePXf04KrvgkgjSl+C3NPG+GE8nNjvpK7maOlhQTvd4Nsi8IieHxfg0+AeZsdQAsmPu0gYrHXyb8i2fcp2p0x9r8EHlDv61TIsqznW4hyrX1iT1D2aDMtRHNUclSoySZOAoRbDjMqoYnpV2zMEPh5Uq4o+QC+LImTa6MBLowEujAS6MBLowEoqImNS3w74pYh/2+HCBU6UOGQ1baVV8j2KIassRCTB8vUYmca1z71yCndsOSTHpkQkiq9QE8r/o+s5ezGJfqu6dXH9ox/EGuNLv6TV7Kl1ZVfy4+sqSxQLKJcdW2fSAYsZcCNlLs3+tVpXnrLsECU5swPJlKIqhARD+NVYFzeAK7edL8t2U8YqqNXrZxlrORUR/9wKnztr0lpPdnx9KWqBZHPWzXa4Mn+uCvVzFXRgJdGAl0YCb0hoQdhwt9V5GpJLAwXrQ2UI/fzZMuyfhQTKg9it5+FIlmkyN+8pDUKG05k4Fb3pdg7m5H1bGzaC52Btj+ksgnnPqx1DbI0vqPi4F7ZM/KUrvNMDXo6Mm7aVpr3DhQGzmbTPYGjRuqCWw1CMO2AiLaoIHDRS/MMLcHxIvUTHeHBSTUniB3Ukxt+sSMrdiaCgeSHaLxnpUNAfWDYr6kXjOCt5qPX58BcJJFa4iW1+5dN7RgJdGAl0YCYyzS5folfJdIvqx5nyQ8hN8eh3wSscaf7b69q2DAi6sGJV9IQ65o0eifKIULJGAXtYHllYGqZmfc95M6iXBUZiRKyUA1Ix+F3G6siZbwshJ48GAR2KOiXwgN8DUn6elNFyDluuqlCzM5PZduIfVwoacfUfjY+64GBKilz99JT+rulWt9SLRWLJjNtRdsXcVaL2/EL4PyDdhBTKaky3GM5axrfNV0eZ+qmj7QrdIM9bYvo0v21hUp77gee4kPrmqxljTe0YCXRgJd8YkwEGfmFJ0agUEsZsTIL7/ZpBypKrcHvF2oMq4bIu2d9r+EzCw1X3t1KEYNjV6Q7pIAX+xbU0g0Ly62DraS0Z4KqUJnR0Lqhufn+ywgC1zMKKYJ8Z093NOZBOqygRjYUkAP5qYCAhkNK6lrBIBzNk+cGx47inDy5x1cNFH9S/kjpBHy005XMMFka5jiRYgJeh3Vc0x9CtCNBl40RMONmy1zcXO84xvlUJtO+DUozJFfyCItseisn3+DKDXVuPiNxXYKc3133pMA6R0vK6bF5DgBK/bNILbVtOlrClWSPUpccXHJF2I03DQqwlPJw7abZrR7l3/UDuFsltdGAt0DeBzscpLgJnF06kWl10G0Fd1aCktTG8rPkW0DCKpwxQiK0s1vue2IlWo8/5mHsOOOoCacqH/q0H3OGHIOaONmJZxrbejevcUlhvxFZgDWScFhOte1u7rtwfS8fr6Q1cKlbFo1CohxBh44Ma8N0cnNR4Z49gEHvyR/xJqkyPm/2XsaX44oSkd5+MhGItut8L/Zr6KkR5TTo4f58kkVTZUItM/DcVYLP1deMhpD8P4RPlcW6F6OP9DMXIS7P7epshHsk8c+EVzZp5+0IFV4tRM1z2elYZHxQOa5TUwvbUyqM80Pu1sBRWCAOmBjM5rO+OB8Bkyr4cSKIBS/8BSkS6MBLoxDQheJn8Dt511efyWkPwZYZyKaVvWtUbX1rc10VjOY/GEstIOcJW0HbanG3kKs1fvM1oc+aCfO8MkPCCB7z2Yi5kCUDLLIX/BMQNPckFmYdzPnPP/j7+bTJp74DFLozWTSwK8IziYosFRX9Z8e8HFudF8JCyOa5hQ2nOmGB6PzwevLWbDIB85LS7Wo5J91qs7DZXJQ7ZoClhwQx9Rs5QWNuJebytwUHvKV5Bc8MPcUMiAWjTzgzgUrYgKfD7Ft3YRKQuCL7tFcexmC9Ijsj3KinEGUFzbllxkcLK1w1bggEqn1Y1B7IJvQ37wRrUo0VfU+B5W3t2CQWvalIOA1Z/tPSkACaSoRTedGBOklC8Vhex0Zad+QwO9KQ75nM9rymDZHfeIUQ7B5u0cJNEE5uEYlvNV0ZUPEO5tjxvriiSaTS8Ib7cp5J7F3OwfTW4c1j/vV5rbE6EuuvH3xOYpICuZXASlvIwNoIStdshufM6cCHLl3K7J/jNZhtPKanRm9WFZ8IfdgzGdoIq8u0NBw3Tuetsdv540jxOq112j6EpHhWAmUg0kY2KHN8BgSDSeZ6YxS1xMBJIMpLUkEblMZ66+On+1lgiT8vvvJV0YLVIFjQF3mNZR+2rv9fmcyoEElUlDOrlyZL1oTCWZPKdrAQZkYpjWSoj/xFDtrWoBckk4kLAWNoSBmJNqD/AgIRreLxbpeC3+TIZW0ULcHTs9Trn53Fq6Zx7soOXWFe38KI/BA4pdD0OxdEgp0MbO3oQ+RIaiqPnukKWE5UrasQocuFCPUS60JrROYsxYXKz56xDK3h3RiSW6sqEtgfqqfrOOWRiRL/21y7M6iad7Swh60LpuVb4CxTpXIfZztMqKusixneaH6BXwr1A/UR8Yzs0vAiNEpzJbXRgJdTk5oINB1nAXIMD500OeCxczzi4AO2dbyW8/uIlmHT8f0aKiZ8Ls9dCyRQK96tGBtcO5lhGWotQbnDv9V4q1i/jm1T5168gHteqOhAt8AQsVSCI3kdAY5xvnCa+OKUOCUWymjnnChIt8FakW9s6mIEwokd3+hkt/SPWZW1m9/8lZ9kwX6Gv8qd6EBkYc20XtuCZEaQlHfoK2vm5E1gu0LsJKQ/bkLiM6+E5ghZp8B/oGLCZdHI3aswQaxpeG/saJTdX0MyuLO82Q0XQ99xWUsaMS2Pc/K2xjNEsRIq+AE+tE72Ha1zpTFFbkTtaH623Mfav1tq85mAyOMP3lDS3ZEomXoArZS45XXtCCoPPEdyt4DQRbEsBxSs5nVUcv9aOIcmglOO9E9OJ5kj9ZSrAlR1j1wMXn8/pYWyh0D0AXWSAGbbhiwjlhAuR8NHUtg4sor7Ojd+R4l9xV2/Vh/hWECLLFT1XSWBiXkgR9cMvlDU/7lzt3UA5iuCSBjW9w19pLzdGuw6NvqZ2J6dhtm/p4uuEohUw9X57+W5mvi2COClK4XtgHL5M+KBUlvNOO56cbbXwAYnlbXRjfM7xNvvLRTr9LrctDn9MjzskKi1xD6OtdVuQPo4gMgLBwGkBFZTxGFAZLmh/ZZ64Qm3xkT92+/4xOg3o2wuuBis48XbVgz6SvMzHe4cwGSDKmh2wSAhElSxnX0dfSLTOskB2Gcq6wXokzdF9TU0v/uT7mzi3pj5W+ThkRD0kI2PNr9KT1qACcsZIjt+mff0o0F2fbyIZFHqjxarqZufhKxBtlfQCp1t3sYY3ITiGeAd5j8CJvITLJezG4wPfx777oqOqqqtuEnpxzyVgVIia5pqpn351+TsTD++LeoXlUTrdQ/yvaaka11E8ra6L4BgAxFOPFPd9Uq5sBDJoIRTY5hKyVZwPBBdaKVBhn6TrUSSYPf/Sh8ZDfNqMye3Id1XSA9+pEDs3AUNH/vKPHkCyggyXuJad7CrxlhpsrW0T1N+dw6p7Ds2ogTvQBHfFpAEzEBpZlfvHXpxRmLWhLnq05ljhs46/fXmAjI+/pXBqg+Ma/B3nIsxZYKfpdMgwYeQ7Op8lgCTmgUMUzXjEFNmw/Uv49YB8jH8KznTc4BpRhtBPi5VpwJA7dGArnUAH+w5M9/akKFwXkifyhQW28uZ5JuuU84/QJzVIbCLahmxMc+qz3iLKtZi0c7ujJOFmByLEvWA2wcCjd9OuEfGWNKWy28ByyPhPujAVtNKZJGKlz0EujdiWz08bUIKQwMrKr1N/A/68HSWsDT044sPkWr7FaF8HMwGCIdKI9SH3TV1dOr7Vqi6RbNz/H7lBf8qZy/Llsbsrl6IE/X2VZWqwa1/CXRgJSlccJctkOHBq4Ksx3HZQblquLhp2oF3Uq+QgCPxBzwtH7+sg5STeKrw5eGywpw6V/+Gt28v9kcIsdrFgK0uq9iualTcsjbZLa6MBL9y6Utl0aB2/ZPMnPNtLEGT4ywhjH/qlQ8g97PAzKPHNuiBVBWUl3kPsxgO/LtVIdrGqPd22zXX4P6Ud0KlY/vZosHXWTHX5F7OmURSaVHClZsrBCwz5fNoP+9BvL8P/TTlGuonlbUbwWQ3DGlRCqHZCgPd90ce2wEfkwWw4/wG5jYe3GxUkw2HOOt5I6gy8yqg6nMYK2MBfVXVCTDKtiNiiTjZ73X/TPZ1OhD16rgzOxka86p+JuszZwZW10YCYXwEujEPyUNyCPVvkQXcoGjXmbj/JMKLOTuPhFxDGKhfg8dAb6vawal3sjwYFgS/ztPFYvBMos1TfAn1i5hY18N65ZkU8cQqY5GySuk8k4RGdQMkflDnWnu0QVSSvZ3KRLozKqHy2nzuAIbSi49LWW23mJDgTaczQY6mr7tUKLtDw9PFxJ5vgdFEJtXwDGe2oGpJk7IS31o89PKPICHrNT3UJLUYe8Hv/2Sf5IE9Kg5zkIgh8IR3XGXIqtiP6GcyimHP7R1RHhLowEujAS6MBSke+j8rR+vUMrS8hnz3LRyY2yRAabR76kcG7QLau3aIaZH01HOt8HaSmTUJHYQxo5MfC49FCxb9UAlygPjdwZIZGYsv+okoOFlBVTD+8mwZxhNLbJ7X1NEDleBZrArkccZb1Fg9b+sjGtHc3buVV+BZwQTcX6Ihhp5WNSoKptSaq8FPxBCqYAVqIm1Y6D8ifnSSxn5rtkA94ukweeR7BEpQG422S2ujALQCxoHSz8szs695Wvm6lozE1IHOtU12/+cjppV3/CdHEdWpn+UotfDtgY6RFnFFeZNetMIx2N23pvO/+4weRvJ7cxOrlDTwQSof/lL+kV3/VdJsZ4P4mBsbKMDUqb2jA4zcTuKhNLExkexX20Duk2jULipwlugapN/LhuqOoU4WY9wlvTzdN3F2GKvtA0ip0o6r4jpi9ERhk8DH45e1cGgBBfLbwHLI22S/8Dlo8Uj8yvsxgqy5BS5O1FEeaQ7gjn+1MFvCCmzcSnLTKDs4IA8fFplWHxx4xOYTmJ9RlKJ3TF1XCtzjWFysjYTwULSzIMbzNFBrITEE/5wPKGV7ytywoHbQbp5RhvoX+YN9qW9j43UlnGezCRrpzl86NSUMGAPijDdXKFTdd2kJ90cIZlDougbERtWFYo5PgVHt0YM/3S8Utox5tkIHFp3ZpTWDrJETiJZbeA5ZG2yW10YCXRmVDAsZxuW82q6uipixWUCqoWcOmJJhL8faPbRID7Xg9OwR94GmSLoMRtwBBygLZvQIqrhU6XWa0L3tsuQPYtJp5awln2sk48qAMIQf//9GUKooB+pB+F8N0csj4/gQOa3TEq7t9ejurQGJfpH3cpz746NlqkJRk4sugqrxBOw5LMlupUwz3GTDUdL+T33YqOzdhGOVtoFjK4j9npGNKro7zU80OcGEuheRa41l8RzSNlTD0+t5wmoKQ7rhyLF2fO4qWguLycDKU2VDBEXdkb8xzjrn6yT6IPxuv4VrY1LoSziBLg3ZDq1of7n3MeO+EGiFDCUirfEwLqFvvgVDb6x+HbGV8dgZNqr/H4wYZbwM8kQZ6C3Ui7mlAY8IIHq3yo55cucAXRUk/MFRs0bF4eIkMm9A1KCV9VYnVnWe5FxGAIgvFxNiS78yrbNqgrn9YFikOt7qatsoe3nUOQToJPM5IbeiDpEDeA5XdtNEnmJVpdAHO7oUxotOZLcJvdbs1KJ/hGANx/ERMSrDIOtlCzaRtTZBcBk+TKlo8IGARU+y6oMgFN8xBxwPcP7gk3kBiI8OmV3bUScOvkv85RQgw07KXhSJYtEPhgKLJenIFX0LKwn6FSBTxxlfIqwugwKHOZAlWHzC+RCTi+fPGYpu3yzHk3hhFXbgzclP1PvnQ6AUYBTGFUV2HaIvmkDrwNcGa5vxASPS9Dflo6qfi0r1pBWKwf9Fuu6v/Vka2FbUfJpdW5FM3N+UCCQ4cbsI31o5ZG2wPkiST1hTdDZfHCFtTGj5JzUrUAY2Gj+EHirJjYCxbYPGESEHbJsybUCjFXf81czDB6hvZd7zT0ainYDxjdiNiMC8xE+CVlJwQeDGOWVqqt5STtJdb2iyTJC4Onv7unm9pdWtU9+GxVMqbpJgKdENMhVOMKtpfhZlPbYCZf8EhptFrRlQ1tBLRkq5xY9l0GxYK9MnslUb+GDEo2ZpJqjBzi7OZWqTSAcZNQ5aIas7DlUWf6qLUzoOilkeEhNVxNMASizXQJYZqDCSBpmKdavErSQfabPgMeVqP9aMrqQKxWF7p7D5yZ84sqwbmBaMc4J8Wz/fLdRn24jOetU2hiqL+6JkZsGjJu+wGcKvBoq5VfJnWOlB8w+3aR9MEAjTNMj8qQuGceMVyBZBI8i8m1d9qY6xkH/Rh0WW8ltwIbAEKLYIy5AWoqzP13Sax6VQytqPxeM/ihC7/nmqwNHgqMvf5hk3M2QQbJYcely+QBPsApyldzvvZ/uyhb40VRaGBm2J0QXJdVkV9obnAYd5GBY7Nw3M6y+Av1dtnR8ODVzAnSH2bskEd964p7oC70C9d4LHmNEUxLJh0McuIny0F9nQpCaXBGzD+kqWPpE+p3DAQeEItad2NcFUt9kV39UyuEXEIlTyhQVnK/R4J2DTztduQ7xG0FyAIAzelLvfZNofkVYbHbM7myZSWmjRL7NoWSAg0Fc18ayYewFDzC89m9J46UBXY/TaETRMmgVhZp/yJC8B9tBuJuBf2CGYchSJrF553ZHPq+2tCyDCMtpLSbCSXAg2ZQ+e/ro4l+1ud+JwVCUzPMPCU0MiwiX0lF8EKlVXbRmIdvERQwLMq01/oPyaIeuRhXrkn2Umxvr3miG7oac937HML3QnqAsNE9mZOR8UzytCywBLDaOMpzF9V4n1SSqc1UJARY50rYkk+gGMi8Z4pbUSu2uhqDZamrV1neYkhIDx9u3ycnBQPCgDn0PvCP7P+2SK2rYcH80GGWFsjcpKq+x848cGSbli/I1fGmr+MupfAbCxuVjjNV5oHu7BeMgPeRoNu2q6sIcUfOiPWSkxZ7WiuCkMfCOkvmaIYP0ONI2ZbRh29lYVS7YU+zLqpreW8vex3BqLDYQvnOsb5h3QuXx6d3D+9PjmEA6TOujVsoGjIksdo1edv1YZZW99wTaWBgur6/CRgyjwzQsjMTEReWKsMf9DKUrS/zG79pOUARsBwbILQSwHTFDe6YN6y0FeQ41fohbxKE9iJJ9YPO0OQgJZRQFFQ7A7J2iAn9jCXpc78sigVTOcnPfL9zDZM1gBdq4LMQrUY72G+CLBKNuyR2jg1cCu8onQ9zQZTmlZu/8esGzfJmcaD5wllMfnSA844ihveGT5poiMHgQODbuiqOoJgaG6/RwHkEqxeLDhhFNA/+9UgOeTm2YscA0OU2gkH8xX5s17K0NckBmfhQoD3Ske2GUhMwOxOseH/Ck4i9BUfWP9FzwDqw8/ckegasgLbrnjK4qaC6AbCg5daaVkcSa+Wo64ZCEb1fwz7XLsTZewdPFFfQ7ob0vki9wznRNaZ0JUmuATIkFCNY1RmBz5kPp6YE0yjLfJUHskJ59H6H4QKTirrbqzNsvcCYiraG3+J3BfoasraJzLhU+SExOD0hc9Nl+7w5l8tKPKBCiL7JcVzOYRlsbt0rxeS3BzrYG0ILD3XfJecfvfdxs32bbBehBDik1ZiC5eNr/lw633cS5XkLh6aq2P+luB+HEoL3AilR3YhT1uX5kRjsbwGQJCEm6bHxb7DzUlXpVaw55bQZHeVN993S8afAbnvVagxiGq+B5qilFojT9djXdBTYmu6hlss3M0rQQo/Ysgrr6nacXOwhgKNNgSQ3lBL12n5TJ0Gkpb1hIVedSUjMp0VOcgY4Jrk0vgAowlSTdBrW8xxgT4NrlL0279NDuVITuvBIRc8y47o8uQvplbo3xaBkjhPdUQA1r4YXBx+p4Qmm+/XstKxeNPNpuIioGLoE71pgSpB5q6R5ToURUjXE4n3SM7ZYOREAcI6FgIjmC6ljv/1NdZIf7gAaxfEWy3CZ4NvbJ26Jmvo3vzeRod2sC070TrdHrNQ+75qeLMeg7QL7TrGYx8Pn0L82G3TnAYZBhWZ2Fh2nmPCIsuPX+TacV6+LVTfDzUis5p5ZHaJGSyycbMCKfF6GsznYXn/gKRoAoYO7zQI+WBJXOQb1oo/goLFw6YKKk1ISp2TeXEiEm8oFB8zPYb1iZPjH8qSlxrV+UnVQ/KldmgysuFdNd4MyHuMtKa+QIGJuAzBA6dsVJKIRLQe9zzRfp57OxZYiYjyq45UrNoVewQ7cvFiJIbPp3su+zGxSBRFp6WqxRsH8Uhu+fqlYxF4xhSK1fTcEslC+6F4KrA73W2GT+QVwsZTSPYXNGYvleAA667+ToX67OCtIYSuCL/+ophYjUdteJGzcRLDgkTvk+nVei7IL109zGzNKQcBe5HJRdGu9BclYIhukW8cBdAjvU6vHrAHwDxWu6WMncaHbXB+0TtP/HYiDygzqgBzUfomNPAxvrr6adYLlM34cvbX/qcep9wB6DNE5FE1+R2YKnSdIFHEUbdKGL+vDew8tsnzQVwGbk5ha4ie3IeAbzaWotbEdGCk/ytcVmTddXtP1G7gjDdQvrBKQRidnTMaW2UqeyfP6fnmncnbajXQ7B0gfTNbHG9B6tZCgHh09U/h1T7m2I66n9XtdCZNweKIY+iCTvaLGP30gvjirVyndOgUyvIG6RRuRBnBmmuoCrKQ0082pC1VX2SGi385R6oKBNPDpHXMGQyGe0f7fy/o64MCJq3yjOL/+hgyxj0VFCpsB0DkrAOW/BOOj6Gt4GA1AwfSEUybnXKRh6aj+O+taB4SjK/IrTEPd9c5Ov0TrUnCHSuHDTVhldhH/JzsEtyj28Nz5FId85cirqaw3iFOB9uhwjLGeV7nMYDDtdkcuQOtm+59yJ7s8aHridcnReEiRtnz8xfJiKDg4A0ZtEFu9oXiA2oWVDpWrc4+kU12ak4hef+vOU+QHzztLty8ihel2HJuMs+tfcXUHZrCBgp9ZirF/t2ond/b3QHIDkjGI8Xrfgio00YU1ca0kb/M7bOwS/pOgs1H0zWhTPMBMgF2gvIVE8JZn5MjgOqf1GtpmTOrtF8wUCRec/x2gkuvQ+/eA19TK5VaF35gb2t2QAhLmiZJSa6/MnQPebpso3YDvMsyvc3XIire4Y9BwZqZLKM63ZlXXOVhXJOxqnYoL5xXqyxLZxdxaD0gQ7qrGzFfrwQOCMa5gNYJXaEHDkaiyhFYD/S22oQIIACq0x8TVh3t7lqrHUEGY1ylbsxrB99OMmR8o86pOm0XGeFt3GGBvH1LdgBdpomMVQIYHH1yFiEpQiO0VPF9aUw1aaeL/GsOSNrUeCzSL96dxo0UTT+6j3XSks7pfIv33R8UWhL2F49C8E1OPlCe8hPY9cWSxPX+gG+VR0nDncnHrheHk6zBX2Dn0fdN0rdDgimJN/hSD0FgmDR6Yl0j71hUUjjUX+Z1ewlrBvm3Crhowh+ZEwoumnPhFD4oEmzqiDLGeZOUzkQiegxD9M1YyWTh9zk8Ee8YkhxomC9Cxh19aUqAPVGNhAIS4m70xXTlcWdrFVQaHeFlwoPqeeBHCgtkKTKI+c5/LKohuzWe6cNEzNKCYOnEMyhLd2xb86xQtMCz6aQuM1LSkoPdEct4ythsB/8NMAdnBHVbaWkQni+gmZvsPcuqyvpSJuzy/B6Z2M2bFsOY3OVelEaswxUJPCap4u+geO3143be1XtCoO8O0iXDHnUneqslDW4LBfEBSj+iIIcFjRRkhHihyXKkylRWv3m9zr4KWaaCfh8nxFpXIbde8ta9QK+8vgrDoVwXTy/JyfX1hlgwoWHOxEJWkKBXo+guhH6NCfFJT1EcaS9gbu9Wa1lF7Zk/WNiF9A2N65h88/QVi3S11lw2El7yq03kkOE092ihx8Vfd3Ov/jnMTj2GxA2V4AL/cGjYUc2+sA7ijMVe2l5QAmXC+BLgPpE0d5aznTSC8ETWGREYkUxKwbapK9M/vYV+oDddfRaqk/MpnJ/nCgntCZpYrp0q34MDs3R1T7xuDaXNO/tMRXymxw3ufpUDi5Z4S18e2aTNzN35adDdP5Tft4CGB3o5zqVs9WPQQ4Rgt/Hmh20dw9qTfN5lAIz6eguN2JXe6Wn8IPiDuQEkgw0X5iVZDLFXhYHYC/QyPggAb+gl9j+vHJvQ8YFuGMTTS6XabnoRSxbui8sbbK/20lv7ujp9yeffeJmV1ftbgHwcBOk2ufj05gg2l5v2DNHwxwrvwgMERy/KIIZ7O7eBHzaIz/EzqsgR3rcBA9Dn1s0A+r/mh7Dwk5wGI4kRLKXgOMCbePxSL1r/bBgR9CqdvWQYZ/bEiiTVmu088or+jJW3ntvcKtiTaCVYTmaLzKFvjcnc4NY6KjMZqC0ujB56lgnFp1nYK8GDuN3u773n9c4lgIRIkjH31toqhDldK+vNqqd3/FEXEsv5qgf7WH3MjVY8j3c8OY4mkWbQR9IFQ4BOmwoFS43SY3KqxtdYn6Aqrx/WzkE7qjmI3omNePjGxsFsJZAtaozI7BxIVVI1Y4QaaNEmEzXQPGaZSpC51x4KYkrWIBaBRWZo7xNEOdhvQOWXznZPWaDyOL1XD6zeEVaWRZmKQfGoHLI/ex6TWK1hEQAh514WapwsWnKiuaaL6Cykd7gdo8wFi5ZxVg8eUzc2egsUphO4bVwIbEjRHJtPv3NU6eyuf6TCh6KbWxc4d/se5duIvi6BqoIY9w00LioKtKIKtWc/P8A0bwQuG0CNA2SSp8eG4V77tTdRbt4vufs6ysdpAN1nFru8XxgJ1heRX0h6V3VoReIYHx72TIJLV7P2Z89v5rHIdUHJoKx7pxqmQ00tlzPghtjLowCU5aFury5JGm3SekD4DoDZX4VyzyUxOFEsFHfXlTFiQHc0ILZEcoyyNtkdCMAlxjJhYV5cEb71R6RZwHua3WssppEfKsodezzsy/4+Ontar7ocTVQPL57mW1wlE1+8/9KDt2qPSu+aqmr4LYZfD3CIyAsZYjKEbbURWvASpWUIn4YbWSw4N+hoptkuYUkjJWSbGgbn+yxKLvvgmEn6H8py2AbNHA/lLhbrbjrln2B8/uUa+rLDi1xjlGs5+kiiAH7A/I7wnhneEMBGrWIVkRiIRDGYfZRfth7wFFhRehMOC7ckmsTuPjRywlfcqFu9YmAVFDWwKohbaHD9LwYEWmcpUQWOzNicbYr1jNYuqJMtHvFEX6Rrc0hrmW1JX31r/UlYZ9NmGKzem404y48YYcUij2hy2GAMFuwZ5HT5lLsDLJpzrGkWf5Chlnp6yA6PFZ+lFvZWusD4CDpLI5mwgiICjZSbG0DCeOPSx+kP6wBnG9v5LoGtLYReYD4rvPU1szmD2lHitYk71QJD0O5Kwn6/tNBOUtvfSXQZLbGOVIF08s48+NdC7Q5hyuqSNdUQqIYUGeey2WY+VO9AOMoPuw7jb1a3QpjxeElog783r5sl2ajuoO8GAzmIKPSiKpSkQsabI+OrGAI/xK/N5Tbu880lOJIiS62O17nruUfNF8SgHSsdgeiPwoozw2G7bMd7iz7C2HCRXahgWBdoTA0y+wcfNZtsXxtOHTKxJN4ysaMB76PkaH4Dlkaq1jUIyxrCO7cYGTxAdry8383ktZoXwblUcg9eJzh7kZQyzlr7tUcLP5esveloki0bPNXV9QU3sA3TLm8wLgvezw/KzjJ5+BKqi9CuvDuVaJ5WlRtswxaroPTujcPhkqC8ix00xXKBi75ZxszaxP8ijCNtU/utSxFHh+OUHEXdGCb4jgS1L1PBxtCIiPUDta3jwAzMpfpgl04a1J0LBaxl92VSXdC/t5ODCXRgJjQI7dYt1cwMVmOvL9ETRxHJOOqASyg6enTaQcKI5VIJGnaeZ4UjVob1w15Zc0YON+pjsGcXY5PiYIRobrBwHUNhcXsDmP1FOmbJwSYnaiH9N2OQH+4qpmQZAJA813tRZ14VTk060d0VKlUgdzAhIlD2zx8VnzKHCr6/yW5d1+WdBGr+gfxhjjUpebSaDws3hlaSywzSBC5QC+kCPiQQlLGjcjujAS6MD6fF8tvMgvKvBSrOB1krcUxixdxMYeUFq3BXFTFRstNCYe1+AOdoE1c46Wv3zIR73iQMS97uh+3guTXOjGZFkL7+vSNXQtZQwLGgVR6hfoVDsGlbtLcGPkO4LzED7N87b4JtF5xHmFFsO+XgmSwfzngjVDQKhAVUIFfP1qvvimid5VVeI0ZbmKP8gg1gXXb2o8SjesXNLBfoGZVFlz+QsZAd+YMnxjpbfndPjgy9r6P6Fl2GifJhaFlsJK5kdcs2O/EBzng/+ujiLREpR8InVWPmBo2WlkV8pqBECHJUJLKvnaAny3h5D03h5YpYB5+7OPo1nALUEYx9IpWboUWW4jhhLRRdfId9BpO6CkIFDwEujBQRav0ZCGzyTO77l1TiowV+nNi6HazRqkFYLUKxAMeh/1Fe0FQAELbsuf6y3JZ7Angrm6Nz4ZsNogglCRcaef6h/Zn1ZedZfc1Hze3SMHWU3G8LcZ+Ub0RSGA8E0NlqEVK4iKQWSBMsbylLKFw558prberNXejxq72nhos0HfrGr26xauk12ydhMAumIVcjofK2FZ7ybO7QqZREe7v3t4qxMsg1J+XBx91YWo3CckBiKR6HE1TqImMOka5hkFRDe4JwzNAgF2/BIE13tw9wP3hrMyG34/RoRJ8D00ik379pLDtJOjil76HhrJKMJPu8CFEtxYu6hqA+Rvvqm61rSlIpytkK9pOE3TfNBc/jHVEwBS2ujAMRX3Eo63dNfQXkb7ozALVV9mRrfcE3rcc3W3PND1H8romu+AfOjK3mCdsQy88T1Up8KvDLbtBrnzeywVmJ2fVDICZQ/XCa4wNEteKhbf6O+pjMy5qfxlGBvgJRVogV1plAjpVUPNcgG/g1qTJgc2LvejIEHH2TMRJJI/vYLmOwhbArzGilMT+CQbsuNUOg43vX/1T4+m2QO/al7kRuCtmcF6sAFFUhLVTk6d04ffAHUnlOllXcnJ6Og7Zs4N7EaN8K9kK+QENc61+sN112IKYGtpC8nF4UUyASDlohgwNHL7ixUAiVkPvSlwdtzb3algEmsKzr0vcVq5boMhlv1uWjJLeBeMkQOM8BHtzbdxiCw68UrO42X6fOqn7ULBL1wZW16KNf9jW7waHHYkxoyKoFQdqsx5snRv7i2yNPDPnVnc4iKQPCuDY2D9qjR1wTIxSw1k63KUV4st00+Gt9NON9yrFaUdxb07KU7VagfWJ9AVq8JJNQWvukOIoLcqt/53n41lwQCZ0GC+HI6y/fhFu9MLKrYwsiGR3KkL9fXU2OujZPnlhvbJic1aTiq2Pn+ZpKecdtVTiCvpBaosBzCvMNA+fHUIwhHlTuW0rbnNDNjqFg2wPK47BIMvGm0MeGttqEA3uJSJ3nO+9VWtnMKOOj4pk3ToS/mqOLNRt3IePwj61E5BrK/mmSxrhQaGAUh55RtpSX+2wHB4vtXbR8aTFMkRBgAtVk4j0LqlzE09HyjhB1ZSMhX88wAgsrKhUpOFVFORMSgIQLIAy0z/RCmwLdj34Mtokj7bjlbgR1mnU9BYtUVt57iIACApGfScgyyjPEYyamwHWJBdtmaiUnJic7PUfAtySI3o7WUO7qhgMQwKiii5N2S8RWctwXb08Bs4PphJe8fN1/4J/Qzqcz8V6ybeMFM2bKzNX6ZyWPFhVcDsVlfNWoNZzf65PR700FJXhFp8TW26K7Hqxi4zEiUCo5INfBvgLc8rnUbmKu/Tq/UM2+bnHTw0CGLITmLG9zBjHiEqbknhgX9gfY5sSy1bWkGYQ80vpOX7WigFFY8m4JXpnj6wQiFHONIpysFdMdLQusoLVIlr9tZhI2cUoqroY5bk+SQnsRC7z41RShmo6RX9+WcN+bL3ezdlNkqF8aGhgTgwtGR4eirXiPCMReCcPCfh6faTYAoO+M7gG+yJwmd3dnOIgi/khczFPTO8QaMfp3jzuuGvo3tObM01GXZe81Hb/ko2Zh0OyxGeO2GzDOng3Vo3ChIe5ruWwPuiH2eyhZxho7aMII4BC2F7kcH8aNcGVZklqVH3r1fjB9bR+9WvBswtgb0Xg4gWv4M8k/3VMPs9R89yA9N8jgjVwV9NbYXbg2eMZm3VBBekIzAQi9cZdx3LDstq8vPLXdqUgNU3yzpOBYG9NRdWzJ61fIJow8juz2zdwfe4t16gR9fzhmsg2Zc7krGKjEV2ZQD6PcJ86ArtndADeavBZ29UOs3NabAL8GW5sqlo+yX2ESICSyMMLKPfSDFXdKv4aT/AQuMYHtcujsjiPdDjUxljxek3BSiXioe00OBI3okoBByyz6c8+Cf7z4Cu9BkUHTe0iWRuE1wGDjFqi3YGcpAzphGWA8NrbcrawvdDmWQcD4KvA9L026FMYPXp1c+bQBJX8P8DhhpfmPeXc2TYu4B8sQvb7eTws5xBps7422rf6rgjTtIgxJLAGOEE5J5ryaWA5JOAx5J4vahaH7OUnSnEJ8EaaFXM4n2GI4bJEbuk44JctZdi3Lq0oJz69SOD+9k4IDSjdapqsvctCZG9zHmDJ8kM+PuFrCHw4Lk3FrNa1ur+sgSz1IgnEQwgs0jCdCVC/NXp48DGLGC+RKMNu0AxxFBjlOTKQoMpprdvi4vM7bMA9Hfa8FlIy4uByyNscxoDAWe9ONfIExSHeL7ospjoHsTu0RBlJf8q5iKpWBEJcWR937m1DCyZEGXLAdkDy51XsXGXcnZdaDFdGVXjZSetVVU2Rlf5ruz8zKxxihbh+Z7l/dwqh2nC3HeQ/BrVhiYVG6sKSG5+Rnsxftz8g/mY3VKPppI+wyl6ZqKj7VQ/2RX11JsopC/Hq00I54D1KsBhTLu8V+zqQKndfeeXmAQ6zAX5YfuXMYaI9hXmxB3IcfsV15UN7BVycPWq+GGMiXiiyZjQYbHKGm3iVOPgyU1quItTplIVd4bkUtT57yWDPavKB75sXGKeaF936McYn4CXSltLBqmnr5vzQSJKmbcsmwPXVK8pCc4x5wV6XnEs9Gxj2YSuFbwg2elMyC/FOn60n8GCgZBw1GQFaUdF3+I36aGcY8+fmXoe1U8mwfa+4b5jcyuNTrzFB1rx8z9Eeq+Iq/TVuwI2MB5bXd3poNi+6d5gTrRyY5fkD/v/I2D47HGjUZ0Px+Hske+z9qF11RXwN5SVDnYOMzw+43CVfVyMpbKR/YbFEaltViQ6xnAuRVv3MxHwtsNh967InO1vIENH6+8oUyMwL/7tWT1XJ8Lo9GEas62IktrvnyjbZgBwZW11N4Ju3CFLLpRo96J6P77r6AXB4LIya+IBvFEnxnG/L/pSdv8XWzLsP9waUNG2fViEA9ATY8fTLqwVsUx48vvfOrJ5N8ksRKTpox1wUJBUxyVlIz7Sg109tM4j3DnOCvxHTgSGFT3Bjil2u2OQlrPOGXAuBTLBG/73SmCOOyQyoRug8Z8SspmBvGw9VQTyOnSCVUiPllCBdPbcKpkt6wq6lI5lsFVlER3ZPeS2OC0189ZfuXRjejenAcsjbZLa6b38Tx+8tbTdMd4rYXvrWQzEutkDesCEuLMCYEpJ3D1r45b9lqvFRV89ywVtoRGVtVF2Qd9dpomZ+BrdTvvUiwm6Ig31cF1vV8WIS6NLqQVbYeaqC7+9zKmwxpIS0NCCPFau8mOqvQ3Xvhf8zVxr7162lEjDBn1y0MGC7a2cWvkBplnF2so1MFi3aVSO3gtH6aLqxNBw8YAOp8g40OhmFLFopJcYMk3NqBsc4v/gJdGAl0YCufK2u+ff82ROs31VzSvTElu/vkvKWKYEY6UfwyTbfSecLXdBFNi/sARVQ87EO3JghkYgDZbA7v/zFcjQDJOYX9qDo022hyCEOc4aDfMRPdQNhmh7XL9bx/EiWSXnw31yjBXv1dbbv/0vedc/M9ZbKrFraO1LBQ9Kz7tsxUnkadFoxLNs9XAyRHQ+Fgd6qK3RwYZbwHLI22S5vrXt4kZ5veLwpO9X5C1uRPF+04K+lNWdSqx8MOLrsXVi+LNGHSYOFu9+N6bUWX5YQ6ltQBgwFclPhj1td+v/noGQVfVeRrPffz3SQw64gXMXXPHU6pv7+I1r/EMUAxEW+8Qk8954IkvMo4RLs4PiHIKNITfjLXwcyfSxEn9qoh/X+cLEAo3PVZLPehzRGbei4dJZSnjkbg8p4g2YgSFxWMuJHvo/KNtk9sGv5Ru1fqyPVpV3fa+8lx+P7YPNVG8oDFZ8rI4p4/smbZSww1Edz9kAgjlVqJhg1VSRq1YKUQBqT6NZSdIOe5vKtiECNfpAZDHNOLoR8LnPOUjO163KsGkBJfwpX81yGJVx2OReDgU18qg3sMeqt8cLAl6vzOl2/U50E5+NQkpQ1z4ImiYHOds8ZOgYMRJ9SwwAD++tT8WbyknoJjQUG3j1gMNpmfNwXQkof/ujRFCdCy0Bn2TWHpZduH6o6AD/GUDbtpDbV77Y5txYdz/U37zqChwo8EseTSNwxInE3frSV8M1DFJ45hLlMxrRKQNlmJe1wxq6x6HbcBdS6nhFYmP59IGaJI5FVkON+jmgbqdi4SCCinjAw0YfHmvuxtVxv+hsWe2nOqFw6mYO8pQbjASqbtR2+4bWpEZNDU7DwFE14urnF2XqaR7Q3ipt+wh1DH+cv1TmZamVLmMOO9COrSUdVRV4RODMwrpp6Y7yJrvbn0twRdiTcZkfwS9OEBpUue5tw/DgKFrM144Y6xA2zu7imBHF2wBB3979iZcZ+ZXMt+49ZPPRFwdx3P7fFXlxmfRrpYUkNddn+yRkvrL+nn0C/p0IxnabUfu+nXaLpx31CkiM/efpTccqUz3tnFBaOc2Tyyy+VUInVwPeg1r3JRdbscH/px1K4MMYXNst2c6sZSoLckwlQt0NFVaFwwVaiYqwNy4leV5DELUEA7yMJ1KEOQm+WC8UwVfAR355Bew/XEUOxFFZfEQAYTs4M0Spcn6/Iu58YouPHcGI2Fl+dIbIWxhWEea8Jn+WSSFgK//gNNVV6zs6SOVLbmfkvDHyRsLjScG83Xod7011ji0djYGqx1fQTd11J781GCKVW/YR6jBgDIxfWXFBZ/xG1u7l8Y1IzdN56ijLK5gFQ4/2kz/3FmvPdLOaKSzkS/gqGqoLrjBYXNimd8fsl9hFrqe68cs2nSAM5ri6f2SfAYPcmohtQ7qFPS2HseLFFhWwPwCoj1GKvN6lyrgxJskDbw7iMQw19zgRqpr3LyTwuM7n7XGI1m7C5yiAeVg4pZ5tk7pArX5CLAM600+5DXj1R5wK6eyufhkOWHQPwMJbFxSRvlS8zYlCYWXluRRBuQhf5Bc+c8AO7V/4kd+n4sadM6CIR3wcCq5TnKIva+whlm2WnGEa3077TsgiKYiUIolVs8DXdKhOzzOY/p3jlj5XTG7o/j4LxBYM6fFy3lCUdRjNykKQ6FTxrNaAAajLcFgyf1fR6z7hsJy5Acyfx2IZ1pX0QNxrZWZJ9pIFT63rwjDNml2YJaeANTjKJxENTc/K9luUJor9a4i4IBEG/bwZ3WUKBYIVYe1abT9Ri8HkSOouSot5dTYnEX+5rePtmwOQtneK34I2j8YcUHxgWXzEC1sjXYNCwqn1QTkwFIRE1vmt+3PSr/BYqSZtbWtDhakTI7c0R3pdEenxOxupj1m66P5DonTmWRWqBoD5Obv0L3g7DcCTy8VRi//F/kFC7XL5iTlfLIMWt9BzoH5Yo+iTh3uu6jjDYevPiujPfUjgjSPSI9B6nJqSN5StSTgEWqgFWY7FkE0vBnEqw/KxAd2OX7rmo9KPfopwpxb12DwMnzkz3rXP9a8NdrHO5/YtFbJAWHq8Q3hbB+h/vfT5aW6PF0rKiowf6qqI3JwEjJJkH0AI5B8j1DxgAAZq4h9eGKN1dkNiGCnBNEHb0w2O8ti0Z/xqvMcHH2rc3lBvBwt82tCLL4XVniRPd9/Me5kGR0diTvGHDtyhfKD4RhHM0e2YevzrFwL5BWf1z2HAVnp1ueGm5pQtQDH8yDNKgTQxwP4ntDOreyYV4bM1RU1hFdjLdh0oXIjXejFanA0C0TlRG1EWq7MFPZtWO1B3nq53kl5/DJKo72gSobFL9TdKlgcsYQ9epS6Qnp+UU/r6I+G+qeWwb9fO6FmhEleTB4uS0PL1bgyn4amEcu4D8VDEE5/tKD7wzdcjCNkAoMMKaj0fveS6iHYrdex30lOU7aI1LevK0Dml7AjNFRO7GJdAoXfa3hO/5RFZMpDSS0Nt0fUiLbSaQg27c8mgzZfcUIXaJjbpE1e3PWZwrWDFdcaZLpP36PXPwb1LkN7ilwIANEzRccgl1uJ6AoqO7PNDlhbI/05KRhZQm5+pP5W2wkZ1rDf7NQUfzrRYYmNl1AujDy3lC2cdnjEgrllhU+jQZB4IE/V+gXieBB0EgvouDD04lN1x8b+vwxjEay47u4IPB7az95/O+9vIYJnAnauA7iwMOBFzkFG4/uGuRfMRJdTN4t1fr4A32zmn619F2g0QpmnxAi6r72cIrEX+B9mdnaq97a2QRq0ylGonNnh00XMI/rgAqQ87V5Jq/qoeUikr0QnCgCI3U6u43t8+2RSt3Vht/ceFJvYpEG6EYXCt00wwDiprgrIVGXG2bX1zXtqxxUnM/wcbxMthmG2jqD5VybEd9IqjxOW2QzEQC2K8/xoJLaHM6RQ6ggm6V42wC3Ehe03Lv8s5YjoqSAsLP8qax1rvIifvaBtnhRWQQuYYHrFqfB+5/KkLE7rll03zCjYQ7NjH3F/Nb/PZ4Dvq95bGsidpTsQzVJi23CcKk4yV8r8Oz2OVOW3+03gBFjxVfdEat/5kSPr4N+AUjTmPbClocigwvwD7yQEl4HiNgZPWAM7+DHEazlVFWDoyQTPYNLen23xpxv40zW0yNHc1M9rqgaPWcQYOYRtCPEGVPfdwfzbPDmzzLDGXKc4BLSpfYX+MPJprjVApySdrVLTmSI6mn+oINCv8NZSfEhC7/BnsLrwOqq+ejy9RzE0FeZr++mrRumiVTDx/3ARCr35bM4RQ9+nUGIkfvOfJRpHVVsYnJaXLCTV2jlgxvXqZH5QTG+zUg9s8M+MyrWOV8DsRzJZlBI70vHEOKlnkTaAAOKi+VfekeNztyqMjeH1Zp6e4tQSIaj6v4X+TeWLqQSfaetOd4wLuHSmGErMrk5QeF4PeD9sSdiCn8IjcFNC7YM1IN0P114F4vKStH3s7854xHVQEIXSYkbvZ09GJFEU1XciwFRZSnaz6vhD0F3a2jV73i7z3dVUAcMCMlnNUcwifTRsmTkeyGL2gsGiwmSTUggotNgvnc58q89octooADsFEfzW3OO2uLik45BuzkRX+/e8DrytU/njU/Y51kJpy9sWsLbVJg2gVOWjxush8CrvH4zGL94tIRgRMlya/1YhxCYq9rEkYR4k26L0IwULBEOXNHxGw4Vmd4zDL43fzycPzJO2Nz/T70xNoBDWQUSkf3Y0CZIUExjCTOEfD/CDd1cSMqJwE+UE0sR5Z/oDLsCHJLD4K3jTFbOJij1jaXxNAKYwmHSAwRrZvPBJh1OM8bH1ULJuOw6DMiEGOiJMcjUEZMnUTb1crqYZKYEO35B0O/2Ppt68aIeQhYKNjXi8t2mO3/rXkE9XbnqUjjwu5x/NHmGJDBDbjXXZQ6KwNmNPjzPF4JsS8uSXfLti8gRseBfiyP/9mSNvmHEIsB4ReZVDytmt/Rx1FZ2EYhKqSEKB+3/RcLaMWRPGgR3ZF7WFjYpuPgE4EBITSz0yecu/OcTjNUy4k6EBpLPpKSgyFdmOZO+sPUHyeIUVzsG5apS6FBpQGSwkn3E5yonP+aMc4wVZGb6ogpzSyyQNHvonVgeEJQrofSQsXYQD1OIfwq7cpjCC0BxoMkqgoZz6MrZfqoNQHJ+khWmcmBVZBXeP4BhqLamoufrAEJHfhQwED+qGQYmvIvbGaqg0yFBj+YWDGZO6p/tR7g1pz456jntLY0S9HtyQ/fxkxUdOiMu8xq/NujxLIpgghyGVGrvkSrbPGvO7VULNCnimPiI+7EpqFpKizDahr4ghn6yaZrf+BW1LH4DBk5x6V8SyVZZVFNGFb0r06Fisz5pXLKyl1DcJUyCq65xex+nz/G9MNnRWhDp0gIoIVzsgUDEp7yp1DNCBI/gkEuUnsxywkGP0N3zwR1OGXeZ7JZCqyGFle2kFp4TEQUNk64gnOHPwAxXBGTEb+3LLXrpkYrcOw0yL/fjB0a5w+mmbwPvdD1wBABu4CNOGMDDFFD1alAQRpN9QF4T8DKl6n+yR/qIQ0WDuK6T78fjJjiMjugHf1hQCh9WmMwqP4WW4vXM98hU/fAR5Ky+qeFq1vqWPUNmPY/m0rGHpSvBE0l9ICrBJiWDD/u6o1oJnJ0nK23trLXgBX+cmf0FK6GB3wNg2C9ocjkvLQ658+3JaL44jp/ao5PXXiGNf8OMi2flISAWKjJojG+5ZG4Om1EPGJKgNIST6Gc7+FCVvOmjhdko220aToidBVgaeWJ0gos8ooVYGn3MJRGTGAJW8oIHHDGTgd5G9RJgfOUzEScSPKzPsv7/gVc1SidhzDu+ybWnZs+0RORHQxUkbn9nZ8oSDXkXUcjMejSCJJcjo47UOrqhKM1unu8pbL7zXO1X4zdL8HLV9UyBVdSOo3mXOZPbnEcu+oyvfHWkUi8la0S8tuPJ62TO3gt9kHxtsHSDq+O1N0D1U7Z7ody+IuZwE93Fj0Ml/dcEaQksx9QeyBsmIXdVV/60h3kn+ObL4r8zO/G+rRvjn/aBQ4rbimSLnzR4bmAArELweqsGnhz0D6eqWH7s7zlUDhPlscRWRaOOC148cTIk9fSyxlvyj9OTM3f/IeBtMxZwA5o1OPRCHkSe1FZI/WS6bxMwQTZJOl7IKvoJmhTv/a2Td7FLeNiCIMnfBm+tRbunyyWVp1IhUd7W99EOZkSSxdpiqNNd7b0noOgkOZpcKkRhszzAy/uMvg/yKQvw13sGOBFmsBZGsJFcrGP2SEesBj3p789xzjvXxCOQteqXAj93dXsVIzB2MLv7NlniX3bZdOw++hG/3GzwcrlBRFJ0ywySd5vTEFw6wTo44xIiZFF0E/qXDfAhK2PXQsU+oYfq2aMZz+73MIgGqTqdTbdY975slN+n/yyFabIxOQ1YT9XNVA8LYOlplmMyNi6igr8He5FmZbzsyjPgrwJCMyw23y+Lg9k7DyCulytjrKTyn++6KbyO2xo5Y6pW+s34osWxv4XctKkMkW39S8CMbnnrFMwtgZwZ0acL3ZTXgnPgQS+UQuLCgIDbs8UYwgNPyGBuc7DQsz9/8ohvs/AyUdy21/l3hajLoJnVRfv0tPBj+NUJRjvwa/hSSsy1M4COWfoacE8H0rpLCNyco60rplbfoXjb6EPHc98NW76N2I3egl98ipRfuB4DKZkNwYFWoj+CFfBBrTE5rMcwMxQ8DcEkoTmM65xPrxvTEMjyMLxkTcqIpLcdIXA0AbSKoLwOnf2MVawCmfejkq8/ZUmFdzTdp/HdQRHlnW4vifdztE7gmQd6we7//g0MQYzizN87zbhhS2NdRFmo27s2DRTcNXdosW+oDZjWZbfAN5PKChMkzmh5xOkWrzK4S6rkKKM+aNstG4gt1cx0voE9N24JKOFp+M92e23NN9P1PaNN44QOCxK4fsllYetAh6AiygbP2g9Ay8/7RCrQWNrQLMDeTNMahGbPkGfr+udtthwXmvSbxYRlQLRkOJdZnwhl/fKS2H4Q4/BHObw4fqFvcGhPPTxHr9bBLwO0Ng9CQDnnVH98w4EXcHU9I3s3JGlEA61zOtK++t7pnkByGGjmst1kBbyAB57M+32gZBbC1SFNq6qCD6SmBYl7VJ+gRn4bj4a3Owy1nlgGtM4omUCoC2VIYMz7jipe2fJVAVbzqPvY7ppW2NQfEJ142B+RtnBKR1CB8PSlOUGl93eWIG46e9+91phQ+3+i61/x9iMBInnush+apoEcM2YdFhmCRwoshUz6Y+ukD/gyliyLCckl71BgtYlJzCUH/4yJhmv73JVYLPLLCyb3vlqFlA4JKW33Y4H5AiYQRyJB6XewTq1ig7b2rCkLwNxG8w3pk/nXRz6XSxI7qGaPamYm4oB3NWXESchmERJ/2xj6oALKLY558ouJUThtMjmrR7CMfbT+3DTK3BR2pEegSkEBgwAYFHttuCDQfCT5ZbqChm1hz+JqkpJKcYk1mSRHR78IvSlQw5xiUc7cM1eNo9slS1PdPRlPH1XaWolV/9ohFJeFmulHnR4s11eLD0sB2RtJZdSRqF1L/52a9AHBb7Y/zYg7fCkN42h7N02i/FYBFW248R4Y1mP90CM0AkWfr4XywLMYhpzjskTSnieIPI6j4quTh5uMrH9tjR7zECbwCNmcRNp4RpnJxZRsTZwjSGdw7TA6SMOi4E2f1H0RczVo8iZwtIRAAD5nxzlXS3kTJgNbS6JrKFF1ejQrMC762zDJ/3Cbp74Zmj4vIzpPpJiaigRzGeSwa4xll14GNa2l5pPOi5nRyjAlzTu3auEKxExGUNHn4Iuw8L8KmEQ4P38P2Kn8DPjEnX/nm9MsfM7thReKzCOeusgT9/y+M/qcl29a1LF5lzUxAPfYJ+iefi9jGkHdlBwHEamEuusR7RVw5YX3RYIZl6bl0xhb+bypSX+gL0KRV0fSXGkprrOE9lU1A7jNPj/APxcetLK6ijssu5kQCh8Eg5P1JnhbZSGLJETLWzH40wnffj/0zQ3QZOamseOjqTtmGDHYhUcTiFr9BlA5TC0ZdounPXdqFqWDBYqGlqJsn19RZ9RUc/oKaxBBXMJnlWF899ZVVA5VGFuZPRf0RnZRMVGyQ8CuRIjsk/XbVyl/9xhBA5wF4M62qKTiJo0sczqTFpdOQy5VeOS411yrxRFbPqeuF5p143AfKwBbMP7n/rcI2ZRQHbPAzN4THX3KqYPwLnUqrLIiCpkpOwlR+gYWZGyKYox/0TxG7kpGKIgp9cQB8JznPsbOVwO4nIk31GgMVWndp9Cl3ip/hg2XZbGX7Q+SJZv5PwOAZ0iib9kEhopAUvqbMVIuX1y0sG6zWHSvI7I58kBvzAp63G6edZ89iGSqKVMPPwAIamryq5blsiIfnhdJDee2M6qCqbn3j+gpN2tC5U1eoktDrH7uXaj1HnVl3BDcs8cvuJ8z4jhd8UIRrAPTQzehdu+8uEHwGaPwGqdNikpam+iPjF3TdJYozad/PIdIKeaUd4IIFBN3658IJWtTW7W5h/0JJ4TAx7UxsU7WBHLv8if5Gs5r3R+nUvpw9CszZxBIhEskPi+9oIdik4Vr1y6oxZ6YJcB9cmvQszt/RhkYQxubqfzf2TV/4d2YKCthd0pKaSQWozkdA56DEReknxvcOZtZe0h5/cu9TMi76e9RZhVEBa1oM6x9vYEqTsfaVX6ByEeh695wzWINM5yiZSqY7Z97X5UcTccSaAIUSRqGaZjhJYQA/6K4hBy9MqD54yigy2uHQ2oFH0oIe7z/Gg5AoapgNlwaYgWzqwhdO2XWQWijJVtuHjQRjbtOmzyUresFB5tXS65TTWiOsKcVqJfEAOP6BAb20AYN4ap+s/59TZjgPJ/6OlULEXJUr1Uo9y50i39kaB6fQuNrs2O+9DQ5HVh0oXm/kbY2sbHsBbFlEkbxFhfy3N6t1jxjlOqp43w9wZuMgLzI4FkDqYylF05WpRcgUuM5gEXeWOfHQVEY8dh0aljRE//FWVNzPz6mRwjs1Hi2cYOBjq1F10X/I4GhfAu51iL8D2wSCuyJdYEeedP/Dq5kkes8yUj6cz6pq9UVGWxiejC0quKAnROOAT3oElM2bK5H0lg9Aq/d5k/QmuLxeI73TmFCIOwE/vW1DWRjsMDtnywVmds6HLOZvoE1R7swEDlrSqRZN52ikySNhjKXmX/47pI1LOgx+U81ecF0d4wwofGQoaHawxNugiEQ0OprcgcJHHs4z5bIBtNbRS4ydaV0mG7L/9cLXMcLlT3gATfrmbl0oC0gY5aiCBdfdqnzTjg3pAyCw2GOk8wUMBEUhif/7kzGIyjOesZsLwNccRxyh1eNiADpkJYA7xYSf+/9NAfpdnzqGg89y8ncPebqKP6cllByVZ6JuCJQgEiLQYferi1xM0eGys+yTxwDdAeAj1oJ1uove7Nex/rZN0+YLwOMnfgylZi943ShEhnFDV1H/LzUxoej0BBzwINgjXRCKyqeFd54cKFTT+B/Q3qKungUgweDSLflJKvqJgj4ts7TNoWt2BSB5CdokzJg5r6Cz6yxPzGHDFkka9eCP5mUeja7Xuhdj5JMUTWRbmeOiSWW0UN471BKt1N4UBFUwnazAG2JmQKrOQQLoFsN1symwQZ4HDRynNufCM7likoWup5g37r0xr40pfNiEW9EbVEYXRU/5P1tFAPKd5VejMqVMYqQfOhgjVdmivzfMMljwN7ssFRytSu0MwZ3UyATfObFraY/HH1MN2V3NaxWDaRuC5BlZ+FvIG2MpOUXeLXbC4sb8G73i4jcCACTQ9/sv4Wb5iZkUoa+g7NAXDMWosYu4sQmIZX5McIZ2XHvoTydC7Jjr2q2oKWmGzTEPjGRyJQz//im3mSgORz1d8ERi0Sbk9tl5bXfwkLKedJwBSmzYdLFD39vFjD/Wbz4vUCATuLcq0giuWZXMBWP7FXJUBkDjWuK1nEqMQjunGTLjjudg6UBBixKPfibuGRdYddMFklKV21+7ixvS1fcPDD8vNY3NjuCmqmY03SNRwrE1WCp+8HWUwXhtJPMWKYDVewrHlZ3U+UXV5REr0PoUJznSSaH5UeOQjh3qQVgteMjxuKIEJZfp7J4nGNwc8eX+3AezyDbqstbUCPRXwcO42wZEKJ+YzlZYKPGh3vS7ostSrUBJ1d50YlyPkdR1bde2HkPFs9qnIrHVQCynQMaeGGUO+Vqc+SdCsBNDtMGkqa7XaxXvadhx/6JO3UvB35wQT+ZasKydkO2bSyTtqcS2UQhlUNjPQJsk0kaaXg5uDIzcCCYoFYNHQqYIUsNqrW3f2J1opjh7OM4fnoB5TfJgWewlkgQaTHCrSwyxRSC5NW/YDi+MJ0ZE5stGFBth2h2G0MabVFRqu2zrgRKJ3NauYc/v8Nx4JuzD6Sk04aZdn4S081vKLwVG41MRb8lmyKX01Y7iMFigQ/txWdt1yw8vSizrjnVNr8x2gNeJwSHteunJAYrrN19n9zPP3FSI+aTd2jdvYAblU6xmy6mz0cs/f1R90ONTPtN56ML75DEwBOKsfsFiJFAbZ8Q2ATHektb/ZQ/DuJdKczs5Voye/oW0JhVEqBetF/5dkX54WkeQX2IV4tdbyOX9+oTur+oiJm3A7c4Pyd2mE/8UqvxX7d4WS0kx9dgc1aCeGHtYKyrD6Cs9W7OePoSG4IvLuJKQ2MnAncZh8ZYjBiBakZ2B9TfWTsGqKbXjuY/yms6nuafQL708Cru6sR2DdI+BRGrZq8GkXdKsphOTJdvx4RLp2OtBgkppwJzwM4GEodvMLEsVcRXElTgpznOSLtfuavSNJbEUhZWyxO1mWLBk9vpq4EuyWIqE/W6BB/bavCebAu5iXRMHyzbf/VJBpYk4/EeRPWfmWmiiCKcAG+Ap/HMwD5M2enBezRakBsYgGqrXE/cpXrWsiy45VrQnW93psWW+XoW1OZY/zmpepoYN9EL/K5fyqwNcTHcfuFxqXyEEJx4y6o5ipxZDaOamfOm1pevDQFRswOMwmIj70ZmC1zEwqQySzPu+UaQMNjcp+m21kYC++umoVJlugLIQqlygeb6cJ0SWxTnlYmdCzpzQHd305OaspdrSoh0FiZ9eM0mbj4VQ/RFI0vxmDCoy5PfwNnXyRDlfWrS+4TLO6/y1Uuv8tU5WjrJcqLx1KLlL3JHigmIF1aQMHVsYaJQpy+dyR+ASASbEQAAAUkrTAcdVn8HhXzimKkE3vrBq0kmlFjEE0+mKoI0EQy68H1gEO0NVcHV1K62FMP5CGbzTMtXs4hl42Q4Q1gUiDaQa3nkj41jNI50zS/QBXru3HgFUa52p71AU5mya5DV5QF1QvgMQmxzbdBoXnMxB9yksMhLvvkjr/geuO5LR0uBdBO2D3lNqiNAjgkE02WyaR66JaW2qvUvkAUAatFpPUHds+Yfbt5B2HkopNUWDgRFRzlfDx6Iz3xZR5RBn7y3AVL9hgty4fFhPWf+ZMcxaLKEWjy4bGoPcMkDzm10KU3WqTCk9uPmAj1sHc2cV97zYk5Nv/sWj6KYWYVzhRWuHgHnKCRLPNZTpEGKK8P6eZVrwL+730sFjCUbBAxLl/nnwGHgslCB1+5/3cwASYupLAc4kOu7bK45MLibnQ5aYkZAgx2swf/1SnSVtQQeGHblBcKi18Bbfc2qPdKwa++4AAHHjVK88FrQRXxLV4ne58Kmnd0kepduHQSOn1sSdiDjIh138qPaKJpHNRlLzz5XMKriZKXzh4K+l3gBLdS+QggmQgsWrYDpXpsKFQ2mcs+v0rLczEIgU/q2FnumTSOR2b67GqqAkhuMkwUr27AygYTxJ+3H0AS9p3s2OrdhbrX2Uv+4FoFmsQxeDiMtxxLst1HR/PHaUD+VKU5899iYq0Lz/qunPhwvHZT/ibJb0WIrao2XJS80bz5q3ZoRiGhjJe75YGGmqJsx3Ng/VjMHfxhhwF7ue+0+G6lRPHMUVjlS9ImGghrmOxvXQDlIk2lvNd7eQ7xSX1daGpotdlSaj2lEsCkDV6fq+d3wdCoJcCWzmTCCuSeCf4cIhVOF56XIxXXW9wE56cOWoGxSBCzl4vqI5+SUJ90ikhbhsoY2jZo5pB89h3xmml4l2MVxdzZ9l4SiB6NAobee4SWPuQZqc1rrsGRY6siw6mSC8Jsp1oAD4C93+titAJmvAh+HmGZErPaKBkwG1SvXYDI3QH6P+gq3t72nVVndKAx+V47BNmdN3hnVqiVNAMbpmYkx4SjguBPBhoOmXf/MeM7ZglrhjwIw1mI/FFHTn/sOHQbWKm11GzbahZDT99Hr5h0GbykVtqoIqYJueZP8DScOMsS2H3eXQF3cwDT2Uyj2jZ7wf1F9dmfgFJWiEmdtVMytMonbf7E8Clu0Aq1yB2kaECxpJ6W4ULEhlplBUY5UDo8MzIundSy3IhiPUTa1di/J2D6uFCtch0mCVEt254zWZH4ulKM0Q4z+7kEYVJqynEOrp7Y8wSTjraF0eDZcc18O1klLQgShGK0aF2OgfrQB7uoGbW5E9L6VhAJUKAMdbDkR50wT8g5aB4+4rM+gXFcIluES2/m6mr83rGD5P8kH5JbhwLrXNyXYcbU6/nJGwnwI82eooMP4Kb3nrvWc671iuKD9SpffjRoWTXCzfKyzhQjKeZ19pDKlVIeWBAqmaojCHJfGVYY7l149p53fQXHtIrzSISdkfzDTa0l6SvxLB55a/BvTKG9xgnv/bdKaF6DZAK1vDEB/Oaz1RHkwjUY1RDfjI8tEPQbDCvKYaLvGPM8ZC8uAf1km+wIVUv+mGwswB31dTe2VITJSXN514XCFFJ7VYt+ATq1QInymOH4nMY8hmOBYtUb1ayyhaF4yiGc7gZscE/n6kP1TAfIcuaCg3YQR1BUW3cTRleRxrmp525U9l2Ntc5taVisGKLhh+wQ/HLtLCaCILge9KypDwLrjwMg3IuQbqsWBYQz+AVURrl8Jrre9WHKiBccxaPAO4e4TNqydGdZL2bA3vnNtLngnvC9UV9aEXPyYTpecB+NOGXWI8yozq8iYzA21NecSI1kzxLLJlEH4ti8tkzDL3Onvar+uUlPSK4i9dIFhr89m6bTtcSgzdi4+AKtJifboZ5K5O5nQImXn1IuyXzTQAxEzLHfKz79uQI2v80+Dw+wd3jpapxAjfpzlQqEOdLgzenj6D2nsaIM5Vg8dt1iGKPg3yHx5Totk7Y/k1rY3pvWI42KfrkHV09OlGB3ZUI52WFavOP0kDDD/5buPe3uo2V64aJYunphEqWZy8E9104GMF+zQfFJH/Axea7QvYtvqFmt6Pkj9NWQv5wG9699EIFkFQobBWBcbWnAuPpF7ng53fov2edLdTCaXeSPuICECfR+pR/d30WEip8QsAoWnsRO86nBjB7kNvokpH49EyafUFukmOGK+UbuEJI3D5YKj7tDrsVKlKPTOlAf/nohWLrwwpxvAKx9n9h9D4uEkKkj/mnPOBtaXYdFJvAxpW10wqbp1raDXR7QGOosPGCYLWNza4BPNVhizrbGNCn3O8LNbE6XjXznfcL0GudwDgLoiA96afOa/50U8PtXxcWMHXRluq/Az//m/S6yoWNC/rkujhJohgSJ9aHzUB/LLcEwO2mxz0c/cxuLQixercgMWQdHHmBsf4SrsByZZmrqF3hm9FjW4+ci7MVzCqnJ/HcNAqi77QF6Q8SqXOOHZOVYIRxawVN38XXGrNwtNFQMIubpZHJXZPmTFexIB79NXaRgM71TY7kDhrLiFNqpDdRlHG1t/SENll1R+Hul9DUyr4fegZQtmMFBWJu6GMt4E0vbCyQvJVU5tMMCykdEkxvxOkWDeGKrMsJCHydRum2XcNufE/ANOwrtbyqvPyGqB18gZUqB45gNSuJ4u9jSsFp9avEHC0IUXP4hrNlCyjqLaZ+BRU6WOq1MhODnbXeHWWTtol0ew7O3B3G2SnRA/pJzD4l7zRyW0+eDDu1cdjmGRHlRB/zm5TnXTJ6oolJ05lw7L8aViJpZT+ATYhq+kjpZavT9W+q/rUotVIsqKr4qFQBvpZ6zJxXMGZ5OeOrFOok7YPp88G1taB8BILeRj1OVOQ+B6vAC3U8nWGib84DFPTzNrx37oHqLZ3iGx/f00SvvX6jzlIAnOdwTCdbeJu8ko2nPDaA3X5qQz8s3nL6ifl7VS3RjQBP1S23gx0Vsr/swvOquDUjcNrt8Tt8x1M0j4e11HY/qsoG06HLFWsBJ26oqqVCc/pqlRNsVlUnfxo5sFEflGNw3u1VNld9c0d0S+NTDq6+1N856KdPGqgnCXLVg9usmb4674o2EpYyBJ7QJsVXrdqq0K/4VD7UZ//wiKFsts0EoPZcyNyV7DAXVsk+l/3v8gO9Dw38ruzMeMvaWATApaVf2qq97FM6yz9xiq2Ya6odTREkbWdfVTDdanJ/aEZeDQb0JOprl4rfZr3oy89+79p02pkZzGi64rdNR6QIexELmEK9bbd28uyyhJMcrM2wGKCrvAZ8rvzG7+8ArwBSyd/phYtMK7V/BFbo/LXmeYjlGk5JApYZ3NYvXAJftdeSPK4OijqOXcgaxcIB5Ih5xkd4wA+ATIyY06XbPiUI6epzb83cHRhlb3RnR7eJ+PXJQpkZGTkHWgnkBGdNXX6yhweGRqcE6EywBzoaib8DiNMNVuwmKCNfmtA11JoQFtQWU+tPl72Y5f6wuUbYP9YLscWaXLreyX1ty/dEAawj2X86Vg4c52hgIjkxuCj3eCbt1+aYIhXBWSWWB7dISk1seI/gCvx2wxj8MQ2xHIgEt22scXfzPUCaY9tXNrnR78iPejR0bkyOJZrg75nl+YIaB56jZDroPxtsEJxLZCyzL8XufcQNOvxvt0CF4JD6s1PcmZdP/eLTkqcMlcRdiMD36hJYYcBJ4ksuHSjoEiZ/qJGYNKXCmQTfSdJuoEWJR4MnKIousnlZ6eIXMRLcVtoQvcnTd3sVBuT8Ucp4bHoYK8Ze4yQSjHxzAX4kxwcRTo06R/6/Um9ujk2QC1wxYRcjuryosb8vMPNUwvqp9VG4+IOi1I0FO91pMmX4UtJqgNLCRUF6yFaog6bhpFf9RS6rLcqVfHdXq1sRzrPtXV+c5Olx28xDs4j8vPYicwQZlqogs/h/uMA2kIFCDtTBGhnBGSRUGb4361XmKJ3Om+73DXkIKhqEG+YDR77sWizQXPAoXWPabOWUpdcnHr4Ba1s0PymUQ/tBi7wCKbaLhsCm0b2mh+M/WTbZUs8Ez0kCbvEYRcZ/DQntETFRIeT06w9CSM/F750ysNIjWBv5g4O+rnkR13bz7xoHrD5Bkcao9f2VtRBofBTVSPXskS4xJbizQClf8fZDLQpftU201ObzeuhPMlZCT+otzUH3KuGlgJbQ4XCmtwGYF1N/7dDYKUQJ9VTk0wTpYD5D4WzRR+ZwrBZCBscvBYrooeUlXo0Bt9ztEndnCVujnvxKRGflqOtg33i45wpR2rBrxejAlXWnERtILARgRoJYPDB3z914P7af93DrsMT91DCVYdNRWsl4dX3SAWB+vjG/ppY54b/hpmTbwlJEHyBhr0KQcd/JB1ySLrk0oC3k8ZkiGY3v40EYTweQzvzj0Yqsi2PWqt2KC2FLNo64fDC3jPp3LqlP8Xmk4KYKMgwIMsZrnKidvcq/umKqgjtqVXBM3DvrFdQgTiE4Kew5enaNIY+dJXkMOorDdjfBzUsi07y0OqIgFHOLFn4xb4vg3TjrkhCJCw0/R1rR9XdoYO8C02/o0CuznlsoVLHT6zBChaIf0RcjjoIPF4diAvwUJLbWSVnTxXpw70HmHXZSss3iaUOpZdcEM1XKMWJtqtgk55DNBlJJTpkqLcCECd+PcWXmknGMdHC4+oz/zvLKxpL76D9aXvsyXyAj3juDsBuFvd3IKf2rdXogBB14dvx8bASCdmgonGtoUkX0JYvuRJZ6Des2u8Y8DGvls/d2XC50M7b/ZyLTDsf0helHi8SUo/Z3+nF2ObnjyjzllsVT2LcLWR3DfslXujShcUagy8CRjWXi4kxsZdXbXSfuoDA+pk7mSQBv+GBI8uK37bWLslZNG1R57bt2J2fxhsjp2ksGxzliQVpm+9txHpl1BHs4NpGxQYB60dcIm8eNr47mnLnhiyVXvKxWuZQINOqF+z0kmICHMZCi1Nv48W7jQbb99gYQVnIn3y4ykyZxNI6Eg1iJkG8YeKCcrhmcOW1hPmjyTT0SoqD+0mJbCmLbs0QWy7gouz4b+0sIvEqdmyGemCuKTkK8y++yacNYlFcjccW7Pu6L98oMhr42+q65MH66p7hNyGpWidzwupQ+MhvtAoqbKbvnVOqTUJYhvE7mS4De7tGToDsWoGAKI0NgNlgxblkpbiAkxkSHg/ZgD+gugMxX4xuiGHRMnDobwjtbs2z+4KgxpBy2UT/BShVaQ6MYqfvHTaV4PvoFu6oe6BdQA5HAX2FTxNYdk/Pqv662+A6qIS2L3AHwiwvnF3Kn1QM7AbgHvkJGQvSsmpc8f7NcQvUkAdtHkvDbUG0LdwnFRZM0n5EQKqb5+HWGWUh18jg9e2awAmJ94Grl9t+IZSk8emnPL2dFOZyRbMvf2sP4DaZFdCOAAjV/qeSL2/69l4k+tU1rTObFRkFCslzcdYMKy6i6xRU1KZlmJsSZ2xUlLkq36yjtktobEfcEj+nsHdscoyQobTNd8K93WRrkpWtnRLHZIUKzJEevB/mWr8crVekAIhkbcdCsecEi5jlk14CqITXuHJF3l0V7R5TzTx9YiygBmGnzyouBcS7rPpz/tNqlkGs+b1q2RnrRiJ/TVw3DIPOolv9F1EThVpX9uQCiS1g8jVdMlwC47Ejlq/Z7jjYZfEoYLM463oo/SvAd04uHQnl/oONT4agwpWvDjPCXF3bhzhIBHtBxNAte75AUxLueYv4SDevNQo7liM2Eg9Y9NjOthSQ4Cfw2VlaT1paakJGeYgo+dlxkQzg9Mpuo4UqKB7wAHo7zGAuNFks2jbdhM/yFJLYIpQqtHBS22H+KXe7mWfS6dQXl05FEygEdMulaqRim8E7o3o+H77mDb3zyguMJJYDtTlIXghTdiUtlQgAksAVbP0+sY3PZLjYEg3Mje3qvN+BGOf7K90jgBNsBpw0XrTEXjhDzFXklw1DIc9WXdCBNNKFB0NK18yQs0DgGrZZPea1sKrvjQwsm9vFbj8wzBDAhNUU0YSR5fI+Gd6t3EH3dPBVDDIzoLETpiDf7exlAgjxKzoZ+lVqo6LkElgrWSI/ATud/ufnixEtXZrYhNT1/fLVCEqA8gNeUuGsqqz55hXaKid1P5vxQ09K3WWrXVwKrIWsENjtGFSYIA+vIU/HtMQxkwd6WbRiNqavj72ESPyinz/TZpLkjXQrvxk2F976OTiQLIFcWqL32Nw1kytl/oXMJkEMO10v8KsVBbxDR9hXY7ip8pjMAib3e2AFnfKhidKJdZmvh3vCzbD9MtTgqyu/OhcuXqDqhQGXKyNLg+O0A/ltlYGZXgSduWFRnttGUrUOsV07+Nua3FxBplO5Wp1X5gLJlx60zv77VkwCRMi+dfWceniLe4Xm4RBkbBNiRcx7Y47OReTaLE2LvDRVOxjWwn2K9WNOk7sUuQyn6Oqe3c57ekSQzYZVIMaziBFkg2CRe/go10QmumYrcdFcHlyQ3yJ9v0sT4h0PyV/dWKBFHSj9H++oci6tgJ8OO5C+u7lEqOTDXtHSGdqnO2xU+eg+H7fhmwXVh7KeDa1EwwLNeuvunuRb0MvGf1qb+Zv0R2m8+pKwLq8bgAMXLVoIKqFe85ai9XUB4sRjz9rHocPeBvG+C5TLDvNTl6KbyoSVPyxPhfJL9TjVuV+jIHPu3tZDILKN4ni9Pa8Xo7Pvv8sA++AJLoFsuJtIl9IcKq9ZXV6ymMa6sPODSr2kd1sExqB/dCHuVPVIU8lKPhkUznYkktK8VHtDsp3Y0WDhUAexZeGqcmworK9Iis0X7QAzhrYUJvEDRsEz7L2Ogr13N+q+uHEa3yEhzbnK+czYzLpi4VD4oK9+iLjyOazuUloO97jFoxPBwMQYfnrGIu47UnKqNVcFpDCLODv8FRYv4DrWGeGh3VW/txIukYKqpJPKNGaFRP0DSDawukNWCgmYsJc4wE9dR718fqTP/vQn+2H+R9tC9WZuq13Bw+e86au4kQcGsXVWgWAh62Z8cLM06P9JLKFgSDI+Qo5qOu62S8qZWIGxMiTO0Q/pQFQmyOwpYGmOwfqsjUbgJXB/QgtM8N/wzZ9z2TUFcHnICkSCCZ4GS+J8WZRY0Wnc9Ut+w03BsCPJe5w3QHVfKclJWe4stoEWhBn6NHGKJtrjx78E3SpeIBbVhcbgVqZjTjUU7QkC624P9p1T7I+yXCC/lN1tfSrMPkAyG32wCJdbMgS2ylne66YWK5qEkW4h7HeTLUVVe5h2/8cmYoHwd2eLx5txU02lwLUz8ZuMaC+SiXiLLVOdpYno8UIpuSAXEjlczkPP2ZXA1KP5g6EuwuLFqnXPSjhLrYnGzGMTXGh/ujVdaZZluSu8Ym+3cEcjnxL0V4uWJrMgx8IAPtULE51fOKkEjXQ7KaOU2+LKLsmjF2xp4/LEEZ1nriPYKV3o43XRTFy6+GEa6QWPLDZilvz/UNlUzZPUOYijJeg9qELwTNTxhmm1HEeTaTH/jryHElDpnU2BAm9MmBSegorKHQATyITcTruKuQ2T3SkehXpYfI5doDX+BotUa94ti5l2PY++Na1O4X62D2D+DwVxXbpVFlHn3hkF/cq8UZ7/BHK40s+IofMLG+gYQw1yBqMfjuhBWCEcZyUvgGsuRfK2RNrGwjbGjCq9hifsZu8qFLslXtO6s2wV2dx29lLzdNeb8cqO8gZgO8t8aHFmxnsTTbys875s6JXdR+watCit/+FA8qW8GR0+ta74ZSdpSdeHe6eESFcVVFV5yDlpFzoGQBZhva4eaA1mgj92v7xlF4D1yp5GZ4dJejgzRpKDi36+4LstZLQiMnLqcH4iBVVDGyYMm4lb9Kyk/vUkdO4yCEFlQG0BoImHVgkhVdnFC6FeFLKhYuX3XjSK7IFvzXVfGmThsvnTbWg7rnBuiIGNoYRjVw5B0FLiewDrMewdnHxASqSyQJRV0XeAk/91yOGKhjIku5CK8gzJZnnC0mXp+BjihLY2bGgkDBK8tWOkHZx1h7IcGftbNl3h9sWZQNIMT1wfRWCO4MaT97N4jJlOYfqkMXG6Nssau1B4ixi8auub77nEitAe6foW2Pk0MorP7T0uJayuW0k+nV6P9b6HeZbt7A2fdmMcStg/DyPSTVpsaZQQMmj1FORxCm/lP3X8J6AvdpeI0YP1CUugS4i8yFbIU6vhHipPBSdAGp3ot5t/37JoQ6pNYp6N8aP28WwfZ504+bxUlyXg72KMPjyel6iLNvhmxcC5vSKnsZwydujFFj72Q/gpwZzPc12TLXjPrdiy4wngmbCHu4yZi4kt0pEEOj05j5DLUMiMtIgxWaEaRNsQnPx2ca6ZU2JAUZFwgL64ooTVfe4I0xqwGvow3DFNGV8zon7FMHSDVwuErIWimIK7krKH74wHQ7VHB7zax6TSz74AFW/c18Sqmp5qsfI7GDB8gaIN/DTOBO/BdJFLGkiMA7nHglRMmBRba6WI8jqA5OHuTO3S7Na223rqOG9SHqHnfSmCau/gvh7sj/BabeyZSOsCgyEw86aq62KrH23CmTIdBSVMUPiPB/uDNYM9kjmao0ybprUUlLJ+U9QMb/Iurf60tDIoisOGoj7BlEwE9X2EKWr2Uax6KqlBtESSrG/2aXuNUb9ZRE4O7W61m2rfIULG7hTZ3D1Viob1Z/ugx0CLrJaCiEuGba6PVHSswIj3yR/CfQnXsFS3b5e+ACn4h5Jcig65DiKYQxruQSJwGGtaSKBEajkSJQDYXCOaVoYnZsmcRGi1NVgCi9vuhX31AZBRGWUsHx1/pywfAhXADg7wC4Pj2Mi0xolLFSLIPvZs88bBod2uMyqe0fGCaRtGyZUQr0wMmsGRCtV8UXEzKvxo0Bd2JvCrrAn1JtLZ/wPuUpORV71SaTwyq25sPJIL1MFkS/sXMlbtIAab2CCZV5C2WKA445DV0dmL1dlF8ll3EN6x6NdpJxtx0CF+YXvCUKrR1Abn6JURLkBivimT4m5hpXa9AeUR0SCjPpjmA1O9sj1nxa/I3Vu2NtwSwcA8+3KRJ8gBsvZ38D0hvSQQ7fGrkuoGJ1UvPJzNxnfGwPqz1xU2EDIHZa1ZwN/ZMZYkUH/C8iXiWqdd9gAN1ezH9sGGIV0sOzYN1ZCAX5DAArr/X+AY6KOL9vAQtix/tIqB/6UhRobpy8pjizEAw4Tnd84FBhKMxKMI4QZ6BmmjFPTC/bpI+M4IvQjKUtTdcsORF64MkE0BQhYQSPk0adbrm3YAxMWXAX9i+xPhf5VtPbdc9i5Bg4pFEEgUPc0kgoPZsq+OTwuM14NGGKiEsxVOS8kis8FQExQgwMLo0xYAlZ49EkNm0E1Z143iXpsKy1m/fWd2gHio9S560T1OXWcCjdMPpQixf1ATKNUaVKhHQyXGrRolHuaq8ewaUPZqmqSMwVFCkK6IuuStQ5hODG/SRIJi5skkgerQKMik90V/QMhtkXAVY9Qnm1zpufCRfcmKkUVXYNSaMN6IHfOIQvjwTgq/7wwuYCfui920N0SW0hoAnH1SydnFHGbcSx4ea4Hes2kJe1rnfnY5Iz5UtlCTTVFHuX2fi1uIjYyWmkeq7HNHA4sCY7bIiHoNqIZqfSlY/Yf1p5YUjNnjfiLpJfZApoVlqaKat3aSlX1Vivw9VdZoS0TgNbnAYdvnlxjtEPiuJqu6nKF3Ef7YLZy1q1AtI7FxlmiLxO6ifQTKl9XUh/CYw3yRLO4rYKdn8++zKokeMKLfMb/8bvAWrjOZgtRJEgHnP+pfyuOUbJwfvLmsIkyaSWVqK1NGt6nzHJUFS0oy5UozVQDGYz4/2e1Qhb4ibyfr2P5Yoiq7w9xnx6gz+TWlChNG1xbN9il5yhRJC3r+uV59eO3L0PqIdsPHVTmvp3KL1Oc9EdGzj+jh5V8uXZZ753FrlkCU8L6jqlQY1QloWIU02vY3VQHF2WYBgTvYoirXQWWvmk+HuIC1dQdAurScBm4ndozzyAd9nLy38gPHrThBBRoizJtTeHLjhO37vKjY4QRxNPedvH0T9EP8npTbVblrgn2t5yIhA6niHUkDQfTwIDxYhcUgGOmwhvcieuNCUcjt/EmUkhmWbvFfKDxi1eqcPz0W/OvNbmP/QIxbFoiqJ1s1iKLWIR0v/tE52reRo0YHb4TebnwvDQNhliYidvtTebFtPpN70kkfJlU5c9mn5DdDlyn3kNvIGmBi/B2uCs53pHtqw4yH/hrMf9lNRijXQsozPzWW+rKOzAvQ2GX94SIeELErDYBJ7bljrMD9cO25v/vWgclyEFBzZKrVo6AutinfKSKpt2L4ENnl73BkSBHLEYWS6GHqhO76CvOJBq3hvMEO0RvUUsRfWgQWAn5PynlJS/hZyq+ba4F8/s5DCbm3gEOx1P2gLQKtNbPfyPHz4m5pjkxVKfCSYeNLlz+I5W8EKpXNb+faVYcvNbduZqy235V7vGM65KiHxdejjqiV/dbnUyzefbsXYmDvgs4k749/HhISs929iPTx15XPAsEn4JY+CU+WoX4CI3MrVkbbVq4nFChxvVQiJSetZAkrtWZXcuEVxZf0JXao+zPHiG14dNK6M2mgDg7rTJD1MSrB3w6qg6fKFCuD2NTNkGdtHHsY3lPdegBUWdF7ZftOdQFetwhYXZ9Jri5vqwOoGb+awBztq8+BHqMcERFu8sQLho9KZpIoS76TA/XxQ7MYi3WqUYsdjtbdQKU1NXpVNAr7mTSL2WLudnMGzUpxd7M6ERm3djV295LaYrBqv8lZaoA305hUbNeSexyQYUt0wFVdA8FNy/PrDy/9B0wzvNlGVyzeGT2Fe49g9N7n6QGGhCeilDxLKHl6n931cgmTQ645f4ZEnFwQoUI0BMiFOxtHetFr8znESdAgmQkv/qi2bDvkoAyYPsbancpEFlkunc35W0gdHMMpZW8qKN1FwKrBhm+xR8QJlHxlSCwpjF/DAiUKF0yMZ0sjUJTtFV3uVMuYdH12OBCCzGLWvF7sdguIwKE4uGk5ginQuVfruZZybHCCSGnTgJSOb6qEukAkaceYyTGdi+v5sr9N5RBBFfVdA5aVApIWf/TFM7Woiq4BVu874om3qpBCJ2TaSD1LXXF8wEGGH2Q85TBjZfq0vPkJ2RAdnmGl1IAffuwYfRtwoPqByFNDQ9U9fDqq6S7ij3JCH2E3NXo0DbHeeh3IUZxVcniia0475DZ2BRLGoV+3WCstzr0oT8p7w5L1+EpdMTwZbr8c1jMwcnLp1CqjZAQzYyJ8dxQQs74czO/f6mdwjFDUcFdTbnpi5CriE+n6MsiIuyPyhC3l4kycRYKh+hvSKCvEt+yQNxSNv2NhMWXDXZaWXRFUAQ870AUdiW7muMuq3N06sBLpA8VDVWlydZGy76wir0oLWnCQFiyav9UZl8TZJlzHNZniv3J/bz25jAutW/i4yiMXLqMgO5gSa4ccNlI50eRYkGsBqiy9i3Dd98CjnwKsPArLOQY2n8uORkIMAmqilo35N0qyK1cdhIuXqFjVRpv/m6yHVrGD2+2sDt8baF+8y9fZaUpAzSje2qWh46E8DIZa0ASUytbCIIgQwTGNcX3JGD6BI0smn+ydHdwHXE+Z2Ts7wRGjPEwBXkyTImqrVJKkReTBNVwOz8MMxFEpniY/5g5KUeurI/UzW4JoApM8Zvh9JoYp82xH/IdHVH4L2jeIoQoWXz/ntdhtDUJwynBfNh7ZxKUg02oYfWOvjscdk2tAqdsXBWV9zDGgW23L+S8TWLFRsL6g3rgUodUvsfS+Vp8C65mPKeSaWIuhZ01YDsmQoK8L1P/3pUpU6cIHLD+913/WN5Gsbv3rAHnGzsMA+xYtEV021JvhiTJW4adqkmp0X6Py5fMvLpW7tEY/6gzSb2HZt0Xb1Ys+efNV9XOE6byHKQ/bDlDeuwFrX0d9IUqO4h3ZJKam2feWiQzo659k9yoXrfuAI5VZHKJhlUlGLN4Ex4KuIavnZxZyDfSbVUoHuWsn0UAyN0Ed6PKAjghfj0DfYwlAzeladK0WpKm/ZHXPxmz+wK232oiWEAvM8TfxEIYRP+wKK0oxSswx5Q5HdMRqff7STeubYyT9TieX9imWp9xdd74q7NeXAY1NQ7b/hlaF2JE+quTZX9IgMD1AuqO8yInt4A1TiqmnDowW+dk/LND9sPHYoY+d1uO5zHCLr2zcixXYHF4nqkiuU0anbWxEjS1gTVE+G7lKisK0Z5ywXd/EQs3w82vmMnMtsnw5M1d3JaW96+pUhA3qhKDcpL+TNyhgNgJDmAsze67GqK31aKefXM916RavV6b3tw3Rs2HkDpQ3H1dqpalDJgZ0TO/sQLaz6oMXQLH5B3pXN520onfOGdNXg91FL+xg6LQ69ZynMSTtLV3xDRHE9QVWiSjosYBCs7dRiBiKwHVt2cVAdAvv+rG6xLpD12yAOI2UNAKriBe4w+MRPaPvfJvT30radeSy9WgYKQKOxdqRsGBHpVD0z3+0iTd2HrKmB/OJUEBaLd2GCbTsU1kvt4lOfWKKrEnGsZFjT+NEq6ZyU11ZWs+qL5tm7Vg5rHqmqHX6pW8oWEm/qaHUOn1Kqa9MisY1WwYKKCRl49cXjOe+jm2ONEcvSQjw78jS/T9uAjMez+/Ecoqnd7mpZgAv0xLult449FyPFZfFdLUx7HVlTiaOKQfXtbNpgdQh0p9gXfBy455pEXVFEpl0muDIWhUSEWVbh+XqeuOSQd3CFLW60J4NK2UfKC/NGQicvWOe+l3pn9wE9si+W74x/WFb4Lv7VMpo8W2wo0Y5ywtFE8lRYWn7W4r1qEmZR4S0P/9fPXovIldy5ccZgFVocXYW+3QUf0usN0vtAD9Ur3lUoA4OAMUDZXMhTaDaFrLwZHajBK9Rje1pdwvC+g+zLwr9csl5XgAFvkBZqrAPy2dM3Lvfp9R/N4vUezoQqOeOsHvfQ9f1KB/6SehvOdd6gvJsjqW9gdGfgFdLqQqNUdR7ZpYbYG+njvKiga+ttdR4C2cwPqeJEeSrpD4hYgo2+Qmpt9ANf3MpIEV7dmeFrsKBpkOTL4I9DpK/JYrLyGAS5Q+eTijQrdxLhwWUj0DXu31MfCsOgme3gXYRsCat1IfLIEsgIAe0AAbBAcJudcC8RE+oQXWR0azw7t3gkxtrWpWFpRFC2fQxqYgK6TGiKEiNdnalCnu2Rhgsrr3ekZsVUryR2ovS51TZ36jnwJqIbe2eXNoljNidgb+Nd23AbzcS3O0qBqwynj4W9th7Z+7qLCHn1JohbAUMtxwJvpLqhXZ++WLHIqHEMi88t3H6T4q+g7smodIFYJrZek1YF5knymKgkzzRTGn+edyQu33u7JdHhhtLfsGP3rfsy2AGx9OLf037HMri3xFAcJEe7Bmp5OpNNqkPpZHSquECCEY6pILfOcpWJemf5Ra804X0bbQ/UGr+YL2xC18zsojNS1wyjNPIfdze4zKiJUSsNOla9pvcaDsJAK8haMWlxwOVshpvnJvhgAAABYTt5UJ8bK2hX5wtcM6r11UUV2Z8XUXTv/S+0wF8bdvo5oanqQXAuiE9pSAbFA7Z1dCHD/prSxml5yVcKSf3uq4Rf0hH/ymTciRMt5lI36A49VeESMjLCx07Ru/5KoyeUJgAjCSDMcuD0DNGM9pJ+EblNmNuSYsIxTYEJG69k0T6X9h5wPTDZilv0wmMe7vxEMVhfKr+jryg7Q7qhHmHkEVzEDeRbVxM+6gcM0yUfApoodfHYhAxf5xK0geToCbKX/QqL9g0DhVnTNVlT484yWa07g0FpDFnfBDjfx4XleAdhbp+nvJH+Tkn1R6UqKAYzW2MtWRsWhp+9uTYSx19uXb0mnbGpqszBsiqpOh1AzUaKgyuJ3YKmoKqjkh1nYnXCc3sd8noUkBUwc8uCi2cTannZb0pDUcpEIlxWmDmaZOzf/CSRv8C8xtPjgSBt1ILJW8HMJ70d6y/usCsFz2zfF24+tEhK1Yk8/Erg5bcPk+4/M6Ndgo2YjgiRKCzbsYsegmwtEWqyRblHNB3C+3G5oJzbnWs1z07sHIuQ5d6SmcBLx2LITp4pVcSVFXoJ6XPMkJTobBxwEP1Ku91z8aue9gFyhqROuaoUxsd+t7Nq2JhffIcjQBMo6AnGk7IUIEletoZ6DKIqYSthcF0hm+is6HjhKHmbfunF2LUi/a9/NExr60DCoAVVh7bZE93VbMtAT27ihR1UyaFsNXIaKOMh7+C9/OarZsrE+GTqIOL/JbjOnR0+BdvF756kQilAwtoe/w9OyaB0qJ5Z0+gB9aqbT4zWbiIXKvNXyK2zNjo9u3AVPGUaZ3TJPjXODzacuJrO+9c9W8OW5Pl6H3l3JFvrvxn8ydagJki7EuGe+Q05JRBFqI1+Ug/5JuL0tgkfYHXohu6+AqLeD60U5PlYqQwjA6RIWHA0zp7HOtBbkFNF2NFaysoD/4ppJbFQqapiJwHZcPCXt1hb9cakGxSK28c5Bf63l8IxGPkSiSq2U+gxkJ4Yc+dhsuVyysPlgBc09tA0qZQtRMi8upV8zKok0E2N/lwPc8XD6z/0xtIw/TVsNigFVnDW+gjRxCgb83SeBu2UNgc88twxwyi8cHhKzHuCBMtbpDI2i1xs/xmf+mYeXQQ3Sy2JfxvedjiI+KkqE4rEgqBEQOAWupMFQr6xmch2tA7lgjZ8ZkDlLQlPwk74f+p8MzaAJgWOnE/RAAWEAPYyQuRsCYN3uoLTejYZggxwBXrOCYRuZjifGwkatrgid3xRTCz6sWnOjzXYnDPEugr2D9qtoRsJxba/8OhQK7syXKZzyeauFeyGgrHlBNZvCRTllhHL4SGlhui8q8Vj4iRHGiD0eKSBtsKOyVchdI9CjkXN0dYqNBAJh445PRqik3fgzyx05hMWb8t2qDvy8pWF9O/Wv/rKYY+t8K9szVrmjte0wdeakUEzW4Uaag7zT75anSOcovk1dAafL1zAGiOxMy7q6PukmOkwvn2brcSjH0daJDcPSsKdMZrF3y6ukYtwoev6+oohZIQodNA5LNZ8lSn59qN5esMQIpE6fg2B5FAgjYkkiTzGINnAvzeAuNU71+AQQuPC2K0WDDkSpxHN6eXrxmZwHrTX/JU85ViaGHZMAaIry8QAbhaI99DuQdQDPxfZWsij/JAGp9FV35i5gbotOS4qT1bkMbI/PL+JHxQ3/BF74riIN+85YiyCvAqvjLiyCaw3+eBoD79VeTbF5Sl/aQlhTsHDRC/8GjoWIXrT3vGj7In/fUBY1bFiHSCqrA6hXAmILBfrCUeO57GdsQZoEED/SBrbIBMjTiaKN4XuRs3Q5y62iHhNLygnSBHLEm+AV9+ByGAqLKruTYpnhVGJ8S7A3TykAwZX7OzuKD49DhnA/SDGvFk2oy0cT3OCsC5BBWcmiYv5i/6bSyRLMEVK3BwywgdaAaQ4kFPHj/i/eqZlEAw9+IXHm/pGOHQVeh4dD+UJu+2ZllunsviH7lGziJ2mA/sz9FeWova7YNBwE8+hvy4nahLV7Mth8TOELkNENB/PbLrdllds90cImKZnlDHwnaL3J0SX2TLHZ/75HOQZA0dluGXoPd+Kx2/IaPnJ8cdZA85u1SKARYnscKWIeuYOxWSWIETy9TaRDzZrgz0YYqFNsQklbIbN4DbYTo4vXFPt5m7qWBZmJhFTeDuigLo3BqFcHKkhfzoFsDiNqyH23AepYWp5V1GqQ05wZNmMC3a3ddG5LJ7C/4HP6gXDzClbWNfG6F7jM5BoLKi7gLjbaywUbNTdfWsCoEloa9pO6xcinRsvQVAwe4gl1D35/kD3wMlDO7OZ/Vg/p/8X42dFS+T0SCRvlmUhOZydqbWzbtptQu1GdbjARakpABGtGKrZIFcDIlhvgJs2xjG7UiB9yNSCPWb4BYWADbV4CQiTO0liAmXLLSfhLpVQfmeOlzPp8VrB0KB5Gn/nHVqodCXiT6JAHwhkkB36qpGYbzgRktDLFCRSKPXcocMOvvNm5zkXzCWzcpISDl43zS9BwUextZgT+TkAwGH0J6XHiTVVyOXppJggLhhs0vnB/oACStIG4TMucSuE/z80pRbYrOxH5Ukqa4q7yPQBu6CfxZENhrUDPq0De8Z2IP0w/yR4Nv3ZNNvvy4J4WF0nVv7CwoOxOEDn7mOKR+mngu7YznW7uz1cXOi55okbipIa0AhXYtk407E0hFVa5ENMG7I8nHXqQGFylJwTGxm4w/vQvm61TT1bZ5zZ50eS5ynIr0mFpxLfMpIEZVNU3lDkvcdj1bIpscPOsNyIAk2oE2FdO13mjlYwAygeEz+/905n4mQpVBPVnMg8apaQ/UPB7jPaK+hInmri+l9njM06npLISohdXj2J/o4KPVAmMby0WY6CkH/ejBT1KhPWjwHlPEaRpEMFezv6hGSYipvDJt+pIBvj/PAQeMNdUsYLwJWD5e2oZSX4BSRnBKArHvkXaBs8u5T/EugFbQ5+O7VzexmW1tSGQ5YBYObGroYnDofUeRJqXy1rmqIg9b0n/jJ9a5mmfBri3kv8JQYOgjjcpVD+DSGJo4P4qQgKljR5nbPNyQIf3TzJM2ddIRWBG5JRZDAr9VRBewDM1EvUH3giEnU35KDQCUdWjyOaVhLbpTdXbLt6h3moTvYqJd5iXt706UERvJG7ABfB6W95jQIrMfQkAAWcGe5qTFesaKUuqhDOkR7iK1IZWHh2zkQYuKx3EJNI01DkDyi57+Dqd+EC9UAk11L0SQkhEECRfhX3r697OSo2ZEjV5l/7GY2RTDKttI3JMyTAwGS59PSXR8UrkDlIY0w/jvPgKecDmY6h4J6cdh4gKhju6jAbLjzv7ROlxJPTvaClViVeetEZ1tu6uEqBTX/l7uf2Z/OQoioyAqHcaTzbOnHfvZZ3SVonq5eO1QZ4U87uudT0K4nuFmPJQBFkgbjB4cU9Ho3RZUz1qW3Q7O6CsM3SmTxbOi2aG/uVQzld5bJdeCcKLD7qiBjXrhXK+tnIC+njjT0prRZhjHlhAoJM/GH8URvAmPWJ6cA4HcJHUBg0Zdwc8KOAlElwIo01GS3yRPhPDLXlVzLgsAQUtHCBizBg96g7ay83jD/0UUacOCDT0ExpB7FXgyQluueAvM9jrU3gE5M6LqIHQyQEBlhSsr+d1yes/Dm4rpOc2HDV1ZNdWvg6++8MxwKk8yMi8t4mmYHHlOSQTJKWt66Z3U36VJ4Pc9bYrOv4D7Pm/iSc9FxIJDDpa3N9XuVGI1+LBikaqLQ5Q8y/ezRkuZ0SLca0gaGzKrIrQ0Siozf2cUYHgUl4BrXg3FO8qT8DqHkVIk3N/2WU8NovRfp9lUlaVHxrRiKui+jO8evneyGQyLfZeyeuOSSAgcs7aDvTNeiBl9JR499zT6udZ7Ti8zq/HUMmEDSAsXOpf6cmZGthoJAKjaFWx0hXCmsByA7rZ/9mLhnMOopeJ33LckhAAWAPfHpUk7SI9yC7L9BWlNcxdbxLPoG6cE67JnUlRo+SfzV75Nd9PzkKA13Or7hJ6vnSqmikR3hqIIoVUvWif6THn9Kfxastnx6na8etHJL/GDehzCVZsuNM35tQFeEY1nly557cbQqExlx5mlxNUYTPQ0d+Bn+QHf0SS3mq1OyJmJw9t1ag18/ymDC4KvOyp3aLbvFgMilPVF6ao227Y6kil5SaoJltn5XDenf0qE+h+aLQgE7Pg3jVYrychCt0PYXaJqsTlwjxS4IkSCIUJEB/lpcqlDMjSCT8K5GHMb5ALGNe8t3rV4zzjH1SiUgRe99Z370oq3XOzusPNGhUVx+s2XAAiYAQ8YzFCFz43mpfGWeHMXz5ANGGKHiRkDpoTCkOA/pcdiLuk1/cixfwOcqFMxyRuOde4NmaAxtF18XBr9jIi2HehOoexZIKVvEAjp2VA7uLihAyBDhGbYKiqFpNLyAoYz+2SbYG5YEWwXqJnHWD/LzdsK/z4qBhYFHR2bhfdhoj1eYonoSBvrl7CKYrDe9R07ojrJg9nHxgVENMNoIPNcoSkfwM+4KT1Y9bxvbDwjVkQ57GzD0XwgRcHf5Imgb2yXxzblKDorFCmFYcdFwRCXu+Sr0d4b5w8r6LhYws2SufOWMBWCRot7GhiznGSq3qAtZgXOjt2n7CcxT/psbaROxTB5/3CFD38qSntFaoaeqkZuWeRXYZPESnBioLYMhi9B1rrTjL1dXe4D2K9oO21hHTmQWZTIWtDIaeKkBmsEHSOkkpCH/ys8O+Mtgb9XYLeWtmvMAYvytcn2S94eWmsCzic80CyJ9lINvBeJGU/u85oiNxE76Q1n7RfowfzeHk/v2kitsMmTqDFdYb7AxD7+cOV73J/FPxGivjwNPbe8jpyzroGwtiq/5+K7TS/QxIHeJKrIIYWWTH289fPx1jMdtAZtWv/nf7OCp0DMA1polzh7sQhiqznba4g7MRObS25/JZuq5PFskrN8PuiUX9yC9RMNotR4/2Bl3a+SyfkQH/EFOxqaXN66SS+bCm1Fhai2w7cUYcqL0qqWQ8JrJaj4X89OuRS4IetuzWEEniUS3T1bi9ovmmWWj3sVWtN+zmHdHaBUb73nKM6ARkp7umnpPwCCgk4Euv6ohzVlskPw1Oak06I687Y/AYOTRdJCSFEY0t4g+ELvGLO/+OTHNod/Ss/ZJ9zaq46DEcTl+/q5VBXHkOU3sszy6DjlecuyFyuLwpzLv8MWFiaX+1ldRfXFA86UdJUsgier1qjWkQHwCby3uO3zjJFVZFUg7bYBuNs92WYEdJ2/5hbjtF3tzlq6b0uHW2oTBVDKVejQ65S9s/1vHlgjiyih917oqSeIfWYmuPJ2MFlDxhOURgpXHctAnJBmdIxg4ZXdGFNVDFQweFI7iupB9QDJHQ1BACr2vkh69CQ0mQ/zB0uh69ubdeTsBG4zm5+bCFZsJLaHkXcSv1KjAv+AADcWBNFrdkbEWtjeXKldde1S/GbJqBKoSHFx3DgsZ2HCwzy0PiFtcftGGZL4kAz2Jj5jXM7y/jM4cLS3X3N5AN+WSJrhz3HUvNxwSyy7gIwGA3XRkOqYXVyMOVYVJaQxF/QYiGFIA/WCakjDHFaeA1yrrwx88LkdO0KqTUPIuLw3YLXYZllmeMT0C6ZHF4Xz67qId/o7jN4Q8uyPqnr2WRKtpEFjukuJkAnWLZ3m6uUK1lwKYOSsKynmwndYEMWTRtZOuWbINFTrvZmBG2pljoIRM/yPk3VXhIFGVbZhx+pc4o3Difu1iNl2d9JYXdtE1gKdPRhi/x5alH1OxfzJIJj/MQ9GEh8CQfiDNDfFuzXHevmJHK061MtHc61LVrl5F6JeHRULP8OstiLB+40kPAcPqvg/6ubNxLV28bQZ4RHl6QgtLe7XibpgJxnHwATB+hl8HzcQFjq2dpo6JB690ttptIJ5bPaySj6CcH1Cl0amR2QZCaotUJoHU+NQ3Zc38PzINCGeDAagwIemk4QRRqqKL3jNj5VYoa+VwfZesOIKdrAHHCk2bSBKZII87Tkv5qVql29tShaW6Xu9eh7scseMlcKZhEh6PWid4UEbC3R7zSYlHT7b4yv8FoxI2gMYPTcx8A+0+COjr3THOom4lHbObKskLjHdQcuw2i3rb7S0ykke4zXOhKEf61XNnprchaYylqeErctCcyou/N7GarVYLvrdva7bR+AAkKfXgw7EQcXt68tDLE2Xc5ykXEN06wXCKHrBAQ9PPNuwH8VUlFW9Die701MUkg4W/hBIRuAnv5BbAARZ1LMs7fdMOAudSf76jwxUYx5nJME+ivYQKXwd9xQDCuON/Rl7IakpHufg1fQxtIev6Mtx06QYghj5zZPW8LmtzHx5IixLLoBzt8iq7StbIguobNVYsuoyM1yYjJg7msfQBEsZRgqzyvCM4rfoJ6q3UQhtCcJ6pC79juvIbJHqzYmhEte56hUPkmaSmvkZHGWSDePaxvtOADdn7IzS3EOVIPDuQAAZ90TX2Z8jaOfP5CI7K2kWmVhEVLLLA0SHGKF/VEhcxUbI2W/J8edt3KBhZXUEBbd8lP91jC7s6V+rdl+ykuChc+yGX+AesYzQEtLVrHZ3GZLZu1KY96FGURdazPa8KtX5SGhNZ1XK7ptbrMUeMXrOEvZARhNLxfcc8vDWo01+j6WvuhkwN/u0ov8kl0GmG0g+4wAl0RyEoZ1BzwgWKrb9YKn/+LmaUpuhKbPp8+rwo/7+1y9vqyppzHSEvVpVqb96CaXNlo08qrRWtDCX3aKu269FgtpFOId+b4HNoCMk141BIQQWWXv6FC9jy9O4CtH/0P1n1BpP1H2YtwAEoqdLgIWdAu4ovQpt0GDLdRkYGYlJPGK5l+JzHhbf7euQxvV2wIop/D9yjRvx/f06W8aNvYL/wGKtYOLzz0qwQ2MCac+4UZl1lHRwW5cie4RlQXVgD4HRvGFehD8K7v4MRRrCaXxPGvJdmA4QVx0Lvvx/Qg8spqBznxccMdHlV2tdfVEAk6XXRuqJCOfWiBm+wWMJucmHSHtxr+bPZ7K4ZTjNfGGNmI5nmX93AlQlMrOD7ZZH+ac05rgFUjlEL+a5ewWCZwKNhUX2LP4DEzFGYUWyarEs2scKwJ6SXZcYE2+om/Os4zm4nOugEsfDOhQrb81cjnBHrVzb/LodB9LJwEhp1xshN1vFNRZWi6U9y9gci1kvz3wl54tpM4OFRLVO947PmzHc1Fc93i7sv5AcQhsWMaPwbkHU9RsqIKqY4kCvkjufltx2uehp4VHdrIhOOYBjVZe4MDoEfUf2ODgiTwrOAm1un7rBAIrzs753NfrQHp0i+LCS5ZhMRNE8cNbHa3KApt73oL6WkL5AEQ575PsDKRCjkbre8j8CDg0QMw9Lje92BeHyv0Z2GCDohlFU/aqRHgEo9MlwJHqBgIeFvDWH2Pfxo0snkv+Do2qA8rI9GsCqGLvV8eEbg/oMLtTDvpsnl4r5ruW/Xnz+4WyrbH/+V/2iYGZZwsbPQR4Owil11TykAfDMutMZahpFItpwt29N4eouC5JzhTKWhHcduBKuUnaF8ci0xZbWhAz5qi5v/E0g6SGtBk9TqUVS11nMtRwlpeeTc9aU6Qi2WFbeEajPBNV968iICsNeFj6RfOWLjhPf8dHLvKS7DWYHWGugJMKBh6dzWULoUjzPPt/crYjO7+ZFqnLXhD0iPQljhbaTsNFxM5nzcRkgqiRMfbfmgtAhz7tfyhi6ECHqBUuzT4fqbj9FccO+sMdqngEAgkS+7Kxd+Oq/jj3pxLgxPRGNHNwNUah2TriRiiLf1s42VqS9LajFM2VpRtOTk5jK93Fhmae3RIPnV9knQdP3jSnRI4mL821+TFD1Z/PLCyrbslFC90zisQjsUSPYQQOHmzjhz/nRy/zrKIrKZABLOag/VkN3KpQICZyUKrTz+ub8iahCpTSeYVHyRpX3/tCEpRP87aGoxqY0HObYYrRPVfJFdqYyWGa2JvphsVLt998WIMhc8icwg/sYcfVskluAYrdaQic57qbP54JNwXpYNHwyhq/coGgOrBhNjMiNvzyX2yVo9SZn2cHLsBejO/YKE1aSCBCUtAIG/2B5HyDCscvDf/AESM6vq7s66IJnjliLiYJT7ZR/+cpzx/kR6ewI9K5VN5exncW6uTGQw9N3qh9ugbwkh7lk9mpo+dHlYYmiyj+SAnswF5MSI/fXe7uPmibYX7C618vPOGwfnK8YzLVNa75lqDvDNVia1tMnAXsu1bOO2QTwcLBuU1T3YmCW9mnaGoxpyxhgD0pSpHGywHA2HUHvPu1MNyCtJaAK/DPFYUhGdispFswJfLWQJRvZFYlDCYGmlksQpkN0ijzri2sXuev+FukF3DkVBxB0Ndm1SOXrn5Zl+RROagoAUwXAAAAAAA==) center/cover no-repeat;\r
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
    </div>\`)); $('#add2',app).onclick=$('#add',bar).onclick; updateBox(app); codeBox(app); licenseBox(app); return; }\r
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
  updateBox(app);\r
  codeBox(app);\r
  licenseBox(app);\r
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
              <b>3)</b> откройте своего бота и нажмите <b>Start</b> — этим вы подписываетесь.\r
              Подписаться может каждый, кому вы дадите бота; отписка — команда <b>/stop</b>.\r
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
      bits.push(tg.chats&&tg.chats.length ? ('подписчиков: '+tg.chats.length+' ('+tg.chats.map(c=>c.name||c.id).join(', ')+')')\r
        : 'подписчиков нет — откройте бота и нажмите Start, иначе ему некому писать');\r
      if(tg.sentTotal) bits.push('отправлено материалов: '+tg.sentTotal);\r
      if(tg.enabled===false) bits.push('отправка выключена галочкой');\r
      if(tg.err) bits.push('последняя ошибка: '+tg.err); }\r
    st.textContent = (extra?extra+' · ':'') + bits.join(' · ');\r
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
  container.querySelectorAll('.aband').forEach(r=>{\r
    const i = +r.dataset.i;\r
    r.addEventListener('mouseenter', ()=>show(i));\r
    r.addEventListener('click', ()=>show(i));      // на телефоне наведения нет — работает тап\r
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
        <div class="hint">по календарному дню публикации; пики — инфоповоды. Наведите курсор (или нажмите) на день — покажу число.</div>\r
        <div id="cDay"></div>\r
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
  const drawCharts = () => {\r
  // «Динамика упоминаний» — непрерывный ряд по дням: площадь с градиентом\r
  // показывает тренд, а частокол столбцов заставлял сравнивать соседние палки.\r
  area(host.querySelector('#cDay'), a.byDay);\r
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
  "откройте своего бота и нажмите": "open your bot and press",\r
  "— этим вы подписываетесь.\\n              Подписаться может каждый, кому вы дадите бота; отписка — команда": "— that subscribes you.\\n              Anyone you give the bot to can subscribe; to unsubscribe, use the command",\r
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
  "по календарному дню публикации; пики — инфоповоды. Наведите курсор (или нажмите) на день — покажу число.": "by calendar day of publication; peaks are news events. Hover over (or tap) a day to see the number.",\r
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
    остановится <b>только сбор нового</b> — кнопка «Собрать сейчас» и расписание.</p>\r
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
    <b>new collection</b> stops — the “Collect now” button and the schedule.</p>\r
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
`}var Qo=le(()=>{i(ds,"uiHtml")});function ip(e){let t=e&&e.periodMode||"fixed";return t==="rolling"?`последние ${Math.max(2,+e.periodDays||2)} дн.`:t==="since"?`с ${e.from||"…"} и до сегодня`:bn(e).why}function lp(e){let t=nt(e);if(!t)return null;let n=t.config||{},r={"/me":{hasPassword:!1,playwright:!1,hasGeminiKey:!1,geminiModel:""},["/projects/"+e]:{id:e,name:t.name,ai:cp(t.ai)}};for(let a of op){let c=It(e,{days:a});c&&(r["/projects/"+e+"/analytics"+(a?"?days="+a:"")]=c)}let s=new Date,o=i(a=>String(a).padStart(2,"0"),"p2");return{id:e,name:t.name||"Мониторинг",keyword:n.keyword||"",sources:(n.sites||[]).length,periodText:ip(n),madeAt:`${o(s.getDate())}.${o(s.getMonth()+1)}.${s.getFullYear()} ${o(s.getHours())}:${o(s.getMinutes())}`,api:r}}function $c(e){let t=lp(e);if(!t)return null;let n=ds(),r="<script>window.MC_SNAPSHOT = "+ap(t)+`;</script>
`;return{html:n.replace("<body>",`<body>
`+r).replace("<title>mediachrome — кабинет</title>","<title>"+up(t.name)+" — дашборд</title>"),snap:t}}function _c(e){let t=String(e.name||"dashboard").replace(/[^A-Za-zА-Яа-яЁё0-9 _-]+/g,"").trim().replace(/\s+/g,"-")||"dashboard",n=new Date,r=i(s=>String(s).padStart(2,"0"),"p");return`${t}-${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}.html`}function Zo(e){return`attachment; filename="${e.replace(/[^\x20-\x7E]/g,"_").replace(/["\\]/g,"_")}"; filename*=UTF-8''${encodeURIComponent(e)}`}var Qc,Zc,Af,op,ap,cp,up,el=le(()=>{Qc=require("node:url"),Zc=require("node:path");Xt();$n();Ir();Qo();Af=(0,Zc.dirname)((0,Qc.fileURLToPath)(__mcFileUrl)),op=[null,30,7],ap=i(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJson");i(ip,"periodText");cp=i(e=>{let t={};for(let[n,r]of Object.entries(e||{}))r&&(t[n]={at:r.at||null,text:r.text||"",err:r.err||"",model:r.model||"",window:r.window||"",auto:!!r.auto,items:Array.isArray(r.items)?r.items:null});return t},"cleanAi");i(lp,"buildSnapshot");i($c,"buildShareHtml");up=i(e=>String(e??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),"esc");i(_c,"shareFileName");i(Zo,"contentDisposition")});function tl(e,t,n){let r=[];r.push("=== ДИАГНОСТИКА: "+e+" ==="),n&&r.push("период: "+(n.why||(n.from||"…")+" … "+(n.to||"…"))),r.push("каналы: "+(t.channel||"—")),r.push("итог движка: "+(t.note||"—")),r.push("найдено (взято): "+(t.rows?t.rows.length:0));let s=t.diag||{},o=s.meta||{},a=s.records||[];r.push(""),r.push("--- канал поиска ---"),r.push("вид поиска: "+(o.searchKind||"—")),r.push("URL поиска: "+(o.searchUrl||"(поиск не строился)")),o.renderUrl&&r.push("URL рендера: "+o.renderUrl),o.rawLinks&&o.rawLinks.length?(r.push("сырые ссылки со страницы поиска (образец "+o.rawLinks.length+"):"),o.rawLinks.slice(0,15).forEach(d=>r.push("   "+d))):r.push("сырых ссылок со страницы поиска: 0 (пусто/оболочка/JS-выдача)"),r.push(""),r.push("--- судьба открытых ссылок ("+a.length+") ---");let c={};for(let d of a)c[d.verdict]=(c[d.verdict]||0)+1;r.push("сводка вердиктов: "+(Object.entries(c).map(([d,f])=>d+"="+f).join(", ")||"—"));let u=/не открылась|дата не найдена|дата не распознана|не успели|не влезла/i,l=new Map;for(let d of a){let f=d.verdict||"—";l.has(f)||l.set(f,[]),l.get(f).push(d)}let h=i(d=>u.test(d)?0:d==="ВЗЯТА"?1:2,"rank"),m=[...l.keys()].sort((d,f)=>h(d)-h(f)||l.get(f).length-l.get(d).length),p=5;for(let d of m){let f=l.get(d);r.push("  • "+d+" — "+f.length+(u.test(d)?"  (ЭТО ПОТЕРЯ: страницу мы не проверили)":"")),f.slice(0,p).forEach(g=>{let b=[];g.date&&b.push('дата="'+g.date+'"->'+(g.parsed||"НЕ РАСПОЗНАНА")),g.hasKw!=null&&b.push("ключ:"+(g.hasKw?"да":"нет")),r.push("     "+(g.title?"«"+g.title+"»  ":"")+g.url+(b.length?"   ["+b.join(" | ")+"]":""))}),f.length>p&&r.push("     … ещё "+(f.length-p)+" с таким же вердиктом")}return r.join(`
`)}var nl=le(()=>{i(tl,"diagReport")});function sl(e,t,n,r){let s=Math.abs(e)%100,o=s%10;return s>10&&s<20?r:o>1&&o<5?n:o===1?t:r}function Sn(e){let t=String(e||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return t?[+t[1],+t[2],+t[3]]:null}function ol(e,t){let n=Sn(e),r=Sn(t);if(!n&&!r)return"";if(!n||!r){let s=n||r;return s[2]+" "+gt[s[1]-1]+" "+s[0]}return n[0]===r[0]&&n[1]===r[1]&&n[2]===r[2]?n[2]+" "+gt[n[1]-1]+" "+n[0]:n[0]===r[0]&&n[1]===r[1]?n[2]+"–"+r[2]+" "+gt[n[1]-1]+" "+n[0]:n[0]===r[0]?n[2]+" "+gt[n[1]-1]+" — "+r[2]+" "+gt[r[1]-1]+" "+n[0]:n[2]+" "+gt[n[1]-1]+" "+n[0]+" — "+r[2]+" "+gt[r[1]-1]+" "+r[0]}function al(e,t){let n=Sn(e),r=Sn(t);return!n||!r?0:Math.round((Date.UTC(r[0],r[1]-1,r[2])-Date.UTC(n[0],n[1]-1,n[2]))/864e5)+1}function il(e){let t=Math.max(0,Math.round((+e||0)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),s=t%60,o=[];return n&&o.push(Ie(n,"час","часа","часов")),r&&o.push(Ie(r,"минута","минуты","минут")),(s||!o.length)&&o.push(Ie(s,"секунда","секунды","секунд")),o.join(" ")}function fp(e){let t=new Map;for(let n of e)t.set($o(n.source),(t.get($o(n.source))||0)+1);return cl([...t.entries()])}function cl(e){let n=e.map(([s,o])=>[$o(s),o]).sort((s,o)=>o[1]-s[1]||s[0].localeCompare(o[0])).filter(([,s])=>s>1).slice(0,12);if(!n.length)return"";let r=[];for(let s=0;s<n.length;){let o=n[s][1],a=[];for(;s<n.length&&n[s][1]===o;)a.push(n[s++][0]);r.push(a.join(" / ")+" — "+(a.length>1?"по ":"")+o)}return r.join(", ")}function ll(e,t){let n=e||{},r=t||{},s=Array.isArray(r.rows)?r.rows:[],o=Array.isArray(r.log)?r.log:[],a=i(k=>o.find(T=>T.site===k)||null,"line"),c=a("(период)"),u=a("(время)"),l=[];if(l.push("ОТЧЁТ ПО МОНИТОРИНГУ"),l.push(""),l.push("Тема: "+(n.keyword||"—")),c&&c.from&&c.to?l.push("Период: "+ol(c.from,c.to)+" ("+Ie(al(c.from,c.to),"день","дня","дней")+")"):c&&c.note&&l.push("Период: "+c.note),r.at){let k=new Date(r.at);l.push("Дата мониторинга: "+k.getDate()+" "+gt[k.getMonth()]+" "+k.getFullYear())}let h=o.filter(k=>!hp(k.site));if(h.length){let k=new Map;for(let T of h){let v=Zt(T.site);k.set(v,(k.get(v)||0)+1)}l.push(""),l.push("ОХВАТ"),l.push("Просмотрено "+Ie(h.length,"источник","источника","источников")+":");for(let T of rl){let v=k.get(T);if(!v)continue;let S=pp[T];l.push("  — "+(T==="youtube"?"YouTube":Ie(v,S[0],S[1],S[2])))}}u&&u.ms&&(l.push(""),l.push("ЗАТРАЧЕНО ВРЕМЕНИ"),l.push(il(u.ms)+" (автоматический сбор, 4 источника одновременно)")),l.push(""),l.push("РЕЗУЛЬТАТ");let m=new Set(s.map(k=>k.source));l.push(Ie(s.length,"материал","материала","материалов")+" на "+Ie(m.size,"источнике","источниках","источниках")+(h.length?" из "+h.length:""));let p=new Map;for(let k of s){let T=fe(k.date);if(!T)continue;let v=Ve(T);p.set(v,(p.get(v)||0)+1)}if(p.size){l.push(""),l.push("По дням:");for(let k of[...p.keys()].sort()){let T=Sn(k);l.push("  "+T[2]+" "+gt[T[1]-1]+" — "+p.get(k))}}let d=new Map;for(let k of s){let T=Zt(k.source);d.set(T,(d.get(T)||0)+1)}if(d.size>1){l.push(""),l.push("По типу источника:");for(let k of rl){let T=d.get(k);T&&l.push("  "+(k==="site"?"сайты СМИ":k==="telegram"?"телеграм":k==="youtube"?"YouTube":"Фейсбук")+" — "+T)}}let f=new Map;for(let k of s){let T=dp[k.match]||String(k.match||"не указано");f.set(T,(f.get(T)||0)+1)}if(f.size){l.push(""),l.push("Где встречается упоминание:");for(let[k,T]of[...f.entries()].sort((v,S)=>S[1]-v[1]||v[0].localeCompare(S[0])))l.push("  "+k+" — "+T)}let g=fp(s);g&&(l.push(""),l.push("Больше всего: "+g)),l.push(""),l.push("МЕТОДИКА");let b=String(n.exclude||"").trim();l.push(b?"  — Применялись минус-слова: "+b+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let y=o.filter(k=>k.site==="(ИИ)"),w=y.find(k=>/релевантност/i.test(String(k.note||"")));w?l.push("  — ИИ-проверка релевантности: "+String(w.note).replace(/^ИИ-[^:]*:\s*/,"")+"."):l.push(y.length?"  — Выполнен ИИ-разбор собранного ("+y.length+").":"  — ИИ не запускался: отбор полностью детерминированный — разбор разметки и текста страниц, без машинного обучения и без распознавания изображений."),l.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),l.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let R=h.filter(k=>!(k.found>0)).length;return R&&l.push("  — У "+Ie(R,"источника","источников","источников")+" из "+h.length+" материалов по теме за этот период не нашлось."),l.join(`
`)+`
`}function ul(e,t,n={}){let r=e||{},s=t&&t.overview||{},o=[],a=n.now instanceof Date?n.now:new Date;o.push("ОТЧЁТ ПО МОНИТОРИНГУ"),o.push(""),o.push("Тема: "+(r.keyword||"—")),s.windowFrom&&s.windowTo&&o.push("Период: "+ol(s.windowFrom,s.windowTo)+" ("+Ie(al(s.windowFrom,s.windowTo),"день","дня","дней")+")"),o.push("Дата отчёта: "+a.getDate()+" "+gt[a.getMonth()]+" "+a.getFullYear());let c=(r.sites||[]).map(S=>String(S||"").trim()).filter(Boolean),u=c.filter(S=>/(^@)|(^https?:\/\/)?(www\.)?t\.me\//i.test(S)).length,l=c.length-u,h=(r.facebook||[]).map(S=>String(S||"").trim()).filter(Boolean).length,m=!!(r.youtube&&r.youtube.enabled);if(c.length||h||m){o.push(""),o.push("ОХВАТ");let S=c.length+h+(m?1:0);o.push("Под наблюдением "+Ie(S,"источник","источника","источников")+":"),l&&o.push("  — "+Ie(l,"сайт СМИ","сайта СМИ","сайтов СМИ")),u&&o.push("  — "+Ie(u,"телеграм-канал","телеграм-канала","телеграм-каналов")),m&&o.push("  — YouTube"),h&&o.push("  — "+Ie(h,"профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"))}let p=Array.isArray(t&&t.runs)?t.runs:[],d=p.map(S=>+S.sec).filter(S=>Number.isFinite(S)&&S>0);if(d.length){let S=d.reduce((M,N)=>M+N,0);o.push(""),o.push("ЗАТРАЧЕНО ВРЕМЕНИ"),o.push(il(S*1e3)+" — "+Ie(p.length,"автоматический сбор","автоматических сбора","автоматических сборов")+" за период")}o.push(""),o.push("РЕЗУЛЬТАТ");let f=t&&t.silent&&t.silent.configured||0;o.push(Ie(s.items||0,"материал","материала","материалов")+" на "+Ie(s.uniqueSources||0,"источнике","источниках","источниках")+(f?" из "+f+" отслеживаемых":""));let g=(t&&Array.isArray(t.byDay)?t.byDay:[]).filter(S=>S&&S.count>0);if(g.length){o.push(""),o.push("По дням:");for(let S of g){let M=Sn(S.day);o.push("  "+(M?M[2]+" "+gt[M[1]-1]:S.day)+" — "+S.count)}}let b=[["site",s.siteItems],["telegram",s.telegramItems],["youtube",s.youtubeItems],["facebook",s.facebookItems]].filter(([,S])=>S>0);if(b.length>1){o.push(""),o.push("По типу источника:");for(let[S,M]of b)o.push("  "+(S==="site"?"сайты СМИ":S==="telegram"?"телеграм":S==="youtube"?"YouTube":"Фейсбук")+" — "+M)}let y=[["в заголовке",s.matchTitle],["в тексте материала",s.matchBody],["в посте",s.matchPost],["в видео",s.matchVideo],["без пометки",s.matchOther]].filter(([,S])=>S>0);if(y.length){o.push(""),o.push("Где встречается упоминание:");for(let[S,M]of y)o.push("  "+S+" — "+M)}let w=cl((t&&t.bySource?t.bySource:[]).map(S=>[S.key,S.count]));w&&(o.push(""),o.push("Больше всего: "+w));let R=t&&t.tone||{total:0};if(R.total){o.push(""),o.push("ТОНАЛЬНОСТЬ (оценка ИИ по заголовку и фрагменту)"),o.push("  выигрышно для объекта — "+R.pos+", нейтрально — "+R.neu+", невыгодно — "+R.neg+" (оценено "+R.total+" из "+(s.items||0)+")");let S=(R.bySource||[]).filter(M=>M.neg>0).slice(0,5);S.length&&o.push("  больше всего невыгодных: "+S.map(M=>M.key+" — "+M.neg).join(", "))}o.push(""),o.push("МЕТОДИКА");let k=String(r.exclude||"").trim();o.push(k?"  — Применялись минус-слова: "+k+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let T=t&&t.relevance||{checked:0};T.checked?o.push("  — ИИ-проверка релевантности: проверено "+Ie(T.checked,"материал","материала","материалов")+", из них "+T.off+" "+sl(T.off,"похож","похожи","похожи")+" на случайное совпадение имени"+(T.dim?" и "+Ie(T.dim,"спорный","спорных","спорных"):"")+". Из выдачи они не удалены — помечены."):o.push("  — ИИ-проверка релевантности не запускалась."),o.push("  — Отбор материалов детерминированный: разбор разметки и текста страниц, без машинного обучения."),o.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),o.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let v=t&&t.silent&&t.silent.list?t.silent.list.length+(t.silent.more||0):0;return v&&o.push("  — У "+Ie(v,"источника","источников","источников")+" из "+f+" материалов по теме за этот период не нашлось."),o.join(`
`)+`
`}var Ie,gt,dp,pp,rl,hp,$o,dl=le(()=>{Ut();$n();i(sl,"plural");Ie=i((e,t,n,r)=>e+" "+sl(e,t,n,r),"num"),gt=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];i(Sn,"ymdParts");i(ol,"ruRange");i(al,"daysInRange");i(il,"ruDuration");dp={title:"в заголовке",body:"в тексте материала",post:"в посте",video:"в видео",подпись:"в подписи к посту",репост:"в тексте репоста"},pp={site:["сайт СМИ","сайта СМИ","сайтов СМИ"],telegram:["телеграм-канал","телеграм-канала","телеграм-каналов"],youtube:["YouTube","YouTube","YouTube"],facebook:["профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"]},rl=["site","telegram","youtube","facebook"],hp=i(e=>/^\(/.test(String(e||"")),"isService"),$o=i(e=>String(e)==="youtube"?"YouTube":String(e),"srcName");i(fp,"topSources");i(cl,"topFromPairs");i(ll,"buildReport");i(ul,"buildWindowReport")});var pl,ps,mp,_o,hl,Pf,jf,fl=le(()=>{pl=require("node:module"),ps=require("node:path");process.env.PLAYWRIGHT_BROWSERS_PATH||(process.env.PLAYWRIGHT_BROWSERS_PATH=(0,ps.join)((0,ps.dirname)(process.execPath),"browsers"));mp=(0,pl.createRequire)(process.execPath),_o=mp("playwright"),hl=_o.chromium,Pf=_o.firefox,jf=_o.webkit});function Ee(e,t,n){let r=null;return Promise.race([Promise.resolve(e).catch(()=>n),new Promise(s=>{r=setTimeout(()=>s(n),t)})]).then(s=>(r&&clearTimeout(r),s))}function er(e,t,n){let r=null,s=new Promise(o=>{r=setTimeout(()=>o(Ct),t)});return Promise.race([e,s]).then(o=>(clearTimeout(r),o===Ct&&n&&Promise.resolve(e).then(n,()=>{}),o),o=>{throw clearTimeout(r),o})}function ml(e,t=1){let r=Array.from({length:4},()=>Promise.resolve()),s=new Array(4).fill(0),o=Math.max(1,Math.min(4,t|0)),a={ops:0,busyMs:0,byHost:{},lanes:o},c=i(function(u,l,h,m,p){let d=0;for(let b=1;b<o;b++)s[b]<s[d]&&(d=b);s[d]++;let f=i(async()=>{let b=Date.now();try{return await Ee(u(d),l,Ct)}finally{let y=Math.min(Date.now()-b,l);if(a.ops++,a.busyMs+=y,p){let w=a.byHost[p]||(a.byHost[p]={ops:0,ms:0});w.ops++,w.ms+=y}s[d]--}},"run"),g=r[d].then(f,f);return r[d]=g.then(()=>{},()=>{}),g.then(b=>{if(b!==Ct)return b;try{e&&e(m,d)}catch{}return h},()=>h)},"queued");return c.stats=a,c.resetStats=()=>{a.ops=0,a.busyMs=0,a.byHost={},a.lanes=o},c.setLanes=u=>{let l=o;return o=Math.max(1,Math.min(4,u|0||1)),a.lanes=o,{was:l,now:o}},c.lanes=()=>o,c}var Ct,ea=le(()=>{Ct=Symbol("hung");i(Ee,"cap");i(er,"capOwn");i(ml,"makeQueue")});function gl(){na.clear(),ta.clear()}async function Tn(e,t){let n=Ln(t);if(!n||!e)return 0;let r=await Ee(Promise.resolve().then(()=>e.cookies(t)),5e3,null);return!r||!r.length?0:(na.set(n,{at:Date.now(),cookies:r}),r.length)}async function hs(e,t,n=0){let r=Ln(t);if(!r||!e)return 0;let s=na.get(r);if(!s||Date.now()-s.at>bp)return 0;let o=n+"|"+r+"|"+s.at;if(ta.has(o))return 0;ta.add(o);let a=await Ee(Promise.resolve().then(()=>e.cookies(t)),5e3,null),c=new Set((a||[]).map(l=>l.name)),u=s.cookies.filter(l=>!c.has(l.name));return u.length?(await Ee(Promise.resolve().then(()=>e.addCookies(u)),5e3,null),u.length):0}async function An(e,t=25e3,n=1500){let r=Date.now();for(;;){let s=await Ee(Promise.resolve().then(()=>e.evaluate(()=>({t:document.title||"",b:(document.body&&document.body.innerText||"").slice(0,400),c:!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait, #challenge-form, #turnstile-wrapper")}))),8e3,null);if(!s)return!1;if(!s.c&&!wp.test(s.t+" "+s.b))return!0;if(Date.now()-r>t)return!1;await gp(Math.min(n,Math.max(0,t-(Date.now()-r))+50))}}async function ra(e,t,{gotoMs:n=2e4,challengeMs:r=25e3,deadline:s,lane:o=0,warmNeedMs:a=25e3,warmKeepMs:c=12e3,pollMs:u=1500}={}){let l=s||Date.now()+75e3,h=i(()=>l-Date.now(),"left"),m=(()=>{try{return e.context()}catch{return null}})();await hs(m,t,o);let p=i((y,w)=>Promise.resolve().then(()=>e.goto(y,{waitUntil:"domcontentloaded",timeout:Math.max(3e3,Math.min(w,h()))})).catch(()=>null),"go"),d=i(y=>Promise.resolve().then(()=>e.waitForTimeout(y)).catch(()=>{}),"pause"),f=await p(t,n);if(await d(Math.min(700,Math.max(0,h()))),await An(e,Math.min(r,h()),u))return await Tn(m,t),{passed:!0,resp:f,warmed:!1};let g="";try{let y=new URL(t);(y.pathname!=="/"||y.search)&&(g=y.origin)}catch{}if(!g||h()<a)return{passed:!1,resp:f,warmed:!1};if(await p(g+"/",15e3),!await An(e,Math.min(r,h()-c),u))return{passed:!1,resp:f,warmed:!0};await Tn(m,g+"/"),f=await p(t,15e3);let b=await An(e,Math.min(r,h()),u);return b&&await Tn(m,t),{passed:b,resp:f,warmed:!0}}var gp,Ln,na,ta,bp,wp,bl=le(()=>{ea();gp=i(e=>new Promise(t=>setTimeout(t,Math.max(0,e))),"sleep"),Ln=i(e=>{try{return new URL(String(e)).host.replace(/^www\./,"")}catch{return""}},"hostOf"),na=new Map,ta=new Set,bp=1200*1e3;i(gl,"jarReset");i(Tn,"jarPut");i(hs,"jarPrime");wp=/just a moment|checking your browser|attention required|verifying you are human|подожд[иё]те|проверка браузера|один момент/i;i(An,"waitOutChallenge");i(ra,"gotoPast")});var Sl={};En(Sl,{browserError:()=>Mn,browserStats:()=>vp,browserWindows:()=>Mp,closeBrowser:()=>oa,closeRunBrowsers:()=>kp,openSocialLogin:()=>jp,renderFacebook:()=>qp,renderFetch:()=>Cp,renderScrape:()=>Dp,renderSiteSearch:()=>zp,resetBrowserStats:()=>Sp,setBrowserWindows:()=>Rp});async function xp(e,t){let n={headless:!1,viewport:null,args:["--disable-blink-features=AutomationControlled","--no-default-browser-check","--no-first-run"],ignoreDefaultArgs:["--enable-automation"]},r=yp(e,t),s=await er(hl.launchPersistentContext(r,e?{...n,channel:"chrome"}:n),wl,a=>a.close().catch(()=>{}));if(s===Ct)throw new Error("окно не поднялось за "+wl/1e3+" с");let o=await er(s.newPage(),3e4,a=>a.close().catch(()=>{}));if(o===Ct)throw await Ee(s.close(),1e4),new Error("браузер не открыл страницу за 30 с");return await Ee(o.close(),5e3),s}async function xl(e=0){if(tr.get(e))try{await tr.get(e)}catch{}if(bt.get(e))return bt.get(e);for(let t of[!0,!1])try{let n=await xp(t,e);return n.on("close",()=>{bt.get(e)===n&&bt.delete(e)}),e===Rn&&(ia=!1),bt.set(e,n),t||console.log("[render] окно "+(e+1)+": channel:chrome не ожил, работаю на встроенном Chromium"),n}catch(n){fs=(t?"Chrome: ":"Chromium: ")+String(n&&n.message||n).split(`
`)[0].slice(0,200)}throw new Error("браузер не запустился (ни Chrome, ни встроенный Chromium): "+fs)}function nr(e,t=0){bt.get(t)===e&&bt.delete(t);let n=Ee(e.close(),15e3,null).then(()=>new Promise(r=>setTimeout(r,1500))).then(()=>{tr.get(t)===n&&tr.delete(t)});return tr.set(t,n),n}async function oa(e=null){if(e!=null){let t=bt.get(e);t&&await nr(t,e);return}await Promise.all([...bt].map(([t,n])=>nr(n,t).catch(()=>{})))}async function kp(){await Promise.all([...bt].filter(([e])=>typeof e=="number"||e===Rn&&!ia).map(([e,t])=>nr(t,e).catch(()=>{})))}function Rp(e){let t=Et.setLanes(e);if(t.now<t.was)for(let[n]of bt)typeof n=="number"&&n>=t.now&&oa(n).catch(()=>{});return t.now}function Dp(e,t={}){return Et(n=>Bp(e,t,n),Ap,{items:[],cf:!1,err:"браузер завис — окно перезапущено"},"рендер",t.host||Ln(e))}async function aa(e=0){let t=null;for(let n=0;n<2&&!t;n++){let r;try{r=await xl(e)}catch{return null}let s=null;try{s=await er(r.newPage(),3e4,o=>o.close().catch(()=>{}))}catch(o){fs="страница не открылась: "+String(o&&o.message||o).split(`
`)[0].slice(0,200)}if(!s||s===Ct){await nr(r,e);continue}t=s}return t}function Cp(e,t={}){return Et(n=>Ep(e,t,n),Tp,{ok:!1,err:"браузер завис — окно перезапущено"},"браузер-фетч",t.host||Ln(e))}async function Ep(e,{timeoutMs:t=2e4,challengeMs:n=25e3,post:r=null}={},s=0){let o=await aa(s);if(!o)return{ok:!1,err:"браузер не поднялся ("+Mn()+")"};try{if(r!=null){let l=new URL(e).origin,h=(()=>{try{return o.context()}catch{return null}})();if(await hs(h,l+"/",s),await o.goto(l+"/",{waitUntil:"domcontentloaded",timeout:t}).catch(()=>null),!await An(o,n))return{ok:!1,cf:!0,err:"защита сайта не пройдена"};await Tn(h,l+"/");let m=new URL(e).pathname+new URL(e).search,p=await Ee(o.evaluate(async([f,g])=>{let b=location.origin+f;try{let y=await fetch(b,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:g});return y.ok?{html:await y.text(),url:b}:{err:"HTTP "+y.status+" на "+b}}catch(y){return{err:String(y&&y.message||y)+" ("+b+")"}}},[m,r]),2e4,{err:"браузер не ответил на POST в срок"}),d=p&&p.html||"";return{ok:!!d,html:d,posted:!!d,err:d?null:p&&p.err||"пустой ответ"}}let a=await ra(o,e,{gotoMs:t,challengeMs:n,lane:s,deadline:Date.now()+75e3}),c=a.resp;if(!a.passed)return{ok:!1,cf:!0,err:"защита сайта не пройдена"+(a.warmed?" (пробовали и через главную)":"")};let u=await Ee(o.content(),15e3,"");return{ok:!!u,status:c?c.status():0,html:u||""}}catch(a){return{ok:!1,err:a.message}}finally{await ms(o)}}function zp(e,t,n={}){return Et(r=>Np(e,t,n,r),Lp,{items:[],cf:!1,note:"браузер завис — окно перезапущено"},"браузер-поиск",n.host||Ln(e))}async function Np(e,t,{host:n=""}={},r=0){let s=(Array.isArray(t)?t:[t]).map(m=>String(m||"").trim()).filter(Boolean);if(!s.length)return{items:[],cf:!1,note:"пустой запрос"};let o=await aa(r);if(!o)return{items:[],cf:!1,note:"браузер не поднялся ("+Mn()+")"};let a=[],c=new Set,u=!1,l="",h=(()=>{try{return o.context()}catch{return null}})();try{for(let m=0;m<s.length;m++){if(m===0&&await hs(h,e+"/",r),await o.goto(e+"/",{waitUntil:"domcontentloaded",timeout:2e4}).catch(()=>{}),!await An(o,m===0?25e3:8e3)){u=!0,l="защита сайта не пройдена";break}m===0&&await Tn(h,e+"/");let d=await Ee(o.evaluate(yl),8e3,null);if(d||(await Ee(o.evaluate(Fp),8e3,null),await o.waitForTimeout(700).catch(()=>{}),d=await Ee(o.evaluate(yl),8e3,null)),!d){l="строка поиска не найдена";break}await o.fill(d,s[m]).catch(()=>{}),await o.press(d,"Enter").catch(()=>{}),await Ee(o.evaluate(Hp,d),8e3,null),await o.waitForLoadState("domcontentloaded",{timeout:15e3}).catch(()=>{}),await o.waitForTimeout(1800).catch(()=>{});let f=Date.now()+12e3,g=[],b=0;for(;Date.now()<f;){let{items:y,cf:w}=await vl(o,{selectors:null,hostHint:n,google:!1,bing:!1},f);if(w&&(u=!0),y.length>g.length)g=y,b=0;else if(g.length&&(b++,b>=2))break;await o.waitForTimeout(1200).catch(()=>{})}for(let y of g)y.url&&!c.has(y.url)&&(c.add(y.url),a.push(y))}return{items:a,cf:u,note:l}}catch(m){return{items:a,cf:u,note:m.message}}finally{await ms(o)}}async function kl(){let e;try{e=await xl(Rn)}catch{return null}let t=await er(e.newPage(),3e4,n=>n.close().catch(()=>{}));return!t||t===Ct?(await nr(e,Rn),null):t}async function jp(e="https://www.facebook.com/"){let t=await kl();return t?(ia=!0,await t.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await Ee(t.bringToFront(),5e3,null),{ok:!0}):{ok:!1,err:"браузер не поднялся ("+Mn()+")"}}function Op(){let e=i(t=>!!document.querySelector(t),"has");return e('input[name="pass"]')||e("#loginform")||e('[data-testid="royal_login_form"]')}function qp(e,t={}){return Et(()=>Ip(e,t),Pp,{ok:!1,chunks:[],err:"браузер завис — окно перезапущено"},"фейсбук","facebook.com")}async function Ip(e,{sinceMs:t=0,maxScrolls:n=3,settleMs:r=3e3}={}){let s=await kl();if(!s)return{ok:!1,chunks:[],err:"браузер не поднялся ("+Mn()+")"};let o=[],a=[],c=i(l=>{try{if(!/facebook\.com\/api\/graphql/i.test(l.url()))return;a.push(Ee(l.text(),15e3,"").then(h=>{h&&o.push(h)}).catch(()=>{}))}catch{}},"onResp");s.on("response",c);let u=i(async()=>{let l=a.splice(0);l.length&&await Promise.all(l)},"drain");try{if(await s.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await Ee(s.evaluate(Op),8e3,!1))return{ok:!1,chunks:[],needLogin:!0,err:"Фейсбук просит войти — нажмите «Войти в соцсети» и залогиньтесь в открывшемся окне"};let l=0;for(let h=0;;h++){await s.waitForTimeout(r).catch(()=>{}),await u();let{posts:m}=Wn(o.join(`
`)),p=lo(m);if(p&&p*1e3<t||h>=n)break;await Ee(s.evaluate(()=>window.scrollBy(0,document.body.scrollHeight)),8e3,null),l++}return await u(),{ok:o.length>0,chunks:o,scrolls:l,err:o.length?"":"Фейсбук не отдал ленту (страница пустая или изменился её вид)"}}catch(l){return{ok:o.length>0,chunks:o,err:String(l&&l.message||l)}}finally{try{s.off("response",c)}catch{}await u().catch(()=>{}),await ms(s)}}async function Bp(e,{selectors:t=null,host:n="",google:r=!1,bing:s=!1,loadTimeoutMs:o=2e4,contentTimeoutMs:a=2e4}={},c=0){let u=await aa(c);if(!u)return{items:[],cf:!1,err:"браузер не поднялся ("+Mn()+")"};try{await ra(u,e,{gotoMs:o,challengeMs:25e3,lane:c,deadline:Date.now()+7e4});let l=Date.now()+a,h=[],m=0,p=!1;for(;Date.now()<l;){let{items:d,cf:f}=await vl(u,{selectors:t,hostHint:n,google:r,bing:s},l);if(p=f,!f&&d.length>h.length)h=d,m=0;else if(h.length&&(m++,m>=2))break;await u.waitForTimeout(1300).catch(()=>{})}return{items:h,cf:p}}catch{return{items:[],cf:!1}}finally{await ms(u)}}async function vl(e,t,n){let r=[],s=!1,o=[];try{o=e.frames()}catch{return{items:r,cf:s}}for(let c of o){if(Date.now()>n)break;let u=await Ee(c.evaluate(Up,t),8e3,null);u&&(u.cf&&(s=!0),u.items&&(r=r.concat(u.items)))}let a=new Set;return{items:r.filter(c=>c.url&&!a.has(c.url)&&a.add(c.url)),cf:s}}function yl(){let e=[...document.querySelectorAll("input")],t=i(s=>{let o=(s.type||"").toLowerCase();if(o&&!["search","text",""].includes(o))return-1;let a=((s.name||"")+" "+(s.id||"")+" "+(s.placeholder||"")+" "+(s.className||"")+" "+(s.getAttribute("aria-label")||"")).toLowerCase();if(/e-?mail|mail|subscribe|подпис|рассыл|comment|коммент|phone|тел|promo|coupon|login|логин|город|city/.test(a))return-1;let c=0;o==="search"&&(c+=5),/(^|[^a-zа-я])(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)([^a-zа-я]|$)/.test(a)&&(c+=4),/поиск|search|найти|іздеу|искать|издеу/.test(a)&&(c+=3);let u=s.form;if(u){let h=((u.getAttribute("action")||"")+" "+(u.className||"")+" "+(u.getAttribute("role")||"")).toLowerCase();(/search|поиск|[?&](q|s|query)=/.test(h)||u.getAttribute("role")==="search")&&(c+=4)}let l=s.getBoundingClientRect();return l.width>40&&l.height>8&&(c+=2),c},"score"),n=null,r=0;for(let s of e){let o=t(s);o>r&&(r=o,n=s)}return!n||r<4?null:n.id?"#"+(window.CSS&&CSS.escape?CSS.escape(n.id):n.id):n.name?'input[name="'+String(n.name).replace(/"/g,'\\"')+'"]':null}function Hp(e){let t=document.querySelector(e);if(!t)return!1;let n=t.form||t.closest&&t.closest("form");if(n){let r=n.querySelector('button[type="submit"],input[type="submit"],button:not([type])');if(r)try{return r.click(),!0}catch{}try{return n.requestSubmit?n.requestSubmit():n.submit(),!0}catch{}}return!1}function Fp(){let e=document.querySelector('[aria-label*="поиск" i],[aria-label*="search" i],[title*="поиск" i],[title*="search" i],button[class*="search" i],a[class*="search" i],[class*="search-toggle" i],[class*="header-search" i],[class*="search-btn" i]');if(e)try{return e.click(),!0}catch{}return!1}function Up({selectors:e,hostHint:t,google:n,bing:r}){let s=(document.title||"").toLowerCase(),o=(document.body&&document.body.innerText||"").slice(0,3e3).toLowerCase(),a=/just a moment|checking your browser|attention required|verifying you are human|cloudflare/.test(s+" "+o)||!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait");try{window.scrollTo(0,document.body.scrollHeight)}catch{}let c=i(g=>{try{return new URL(g,location.href).href}catch{return null}},"abs"),u=/(^|\.)(google|gstatic|googleapis|googletagmanager|googlesyndication|doubleclick|facebook|twitter|x\.com|instagram|youtube|vk\.com|t\.me|mc\.yandex)\./i,l=i(g=>{let b=c(g);if(!b)return null;let y;try{y=new URL(b).host}catch{return null}if(!u.test(y))return b.split("#")[0];let R=decodeURIComponent(g).match(/https?:\/\/[^\s"'&<>]+/g)||[];for(let k of R)try{let T=new URL(k).host.replace(/^www\./,"");if(!u.test(T)&&(!t||T===t||T.endsWith("."+t)))return k.split("#")[0]}catch{}return null},"realUrl"),h=/(\d+\s*(?:second|sec|minute|min|hour|hr|day|week|month|year)s?\s*ago|\d+\s*(?:секунд|минут|час|дн|день|недел|месяц|год|лет)[а-я]*\s*назад|yesterday|today|вчера|сегодня|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{0,4}|\d{1,2}\s+(?:янв|фев|мар|апр|ма[йя]|июн|июл|авг|сен|окт|ноя|дек)[а-я]*\.?\s*\d{2,4}(?:\s*(?:года|г\.))?|\d{1,2}\.\d{1,2}\.\d{4})/i,m=i(g=>{let b=(g||"").match(h);return b?b[0]:""},"findDate"),p=i(g=>(g||"").replace(h,"").replace(/\s+/g," ").trim().slice(0,200),"cleanTitle"),d=[];if(r){document.querySelectorAll("li.b_algo").forEach(b=>{let y=b.querySelector("h2 a[href]")||b.querySelector("a[href]");if(!y||!y.href)return;let w=(y.textContent||"").replace(/\s+/g," ").trim(),R=b.querySelector(".b_caption p")||b.querySelector("p"),k=R?(R.textContent||"").replace(/\s+/g," ").trim():"";d.push({url:y.href,title:w,date:"",snippet:k.slice(0,400)})});let g=new Set;return{cf:a,items:d.filter(b=>b.url&&!g.has(b.url)&&g.add(b.url))}}if(n){document.querySelectorAll("a[href] h3, h3 a[href]").forEach(b=>{let y=b.tagName==="H3"?b:b.closest("h3"),w=y?y.closest("a[href]")||y.querySelector&&y.querySelector("a[href]"):null;if(!y||!w)return;let R=l(w.getAttribute("href"));if(!R)return;let k=(y.textContent||"").replace(/\s+/g," ").trim();if(k.length<8)return;let T=w.closest("div.g, div[data-hveid], div[data-rpos], div[jscontroller]")||w.parentElement,v=T&&T.innerText||"",S=v.replace(/\s+/g," ").trim(),M=S.indexOf(k);M>=0&&(S=(S.slice(0,M)+" "+S.slice(M+k.length)).trim()),d.push({url:R,title:k,date:m(v),snippet:S.slice(0,300)})});let g=new Set;return{cf:a,items:d.filter(b=>b.url&&!g.has(b.url)&&g.add(b.url))}}if(e&&e.container)document.querySelectorAll(e.container).forEach(g=>{let b=e.link&&g.querySelector(e.link)||(g.matches&&g.matches("a[href]")?g:g.querySelector("a[href]")),y=b&&b.getAttribute("href");if(!y)return;let w=l(y);if(!w)return;let R=e.title&&g.querySelector(e.title)||b,k=e.date?g.querySelector(e.date):g.querySelector("time"),T=k&&(k.getAttribute&&k.getAttribute("datetime")||k.textContent)||"";T||(T=m(g.innerText)),d.push({url:w,title:p(R&&R.textContent),date:(T||"").trim(),snippet:(g.innerText||"").slice(0,300)})});else{let g=[...document.querySelectorAll("a[href]")].filter(T=>(T.textContent||"").trim().length>20),b={};for(let T of g){let v=T;for(let S=0;S<6&&v.parentElement;S++){v=v.parentElement;let M=v.className&&typeof v.className=="string"?v.className.trim().split(/\s+/)[0]:"";M&&(b[M]=b[M]||new Set).add(v)}}let y=null,w=2;for(let T in b)b[T].size>w&&(w=b[T].size,y=T);let R=null;if(y)try{R=[...document.querySelectorAll("."+CSS.escape(y))]}catch{}let k=i((T,v)=>{let S=l(v.getAttribute("href"));if(!S)return;let M;try{M=new URL(S)}catch{return}if(M.protocol!=="http:"&&M.protocol!=="https:")return;let N=(v.textContent||"").trim();if(N.length<=20)return;let Y=T||v.parentElement,H=Y&&Y.querySelector("time"),P=H&&(H.getAttribute("datetime")||H.textContent)||"";P||(P=m(Y&&Y.innerText)),d.push({url:S,title:p(N),date:(P||"").trim(),snippet:(Y&&Y.innerText||N).slice(0,300)})},"pushFrom");if(R&&R.length>=3)for(let T of R){let v=T.querySelector("a[href]");v&&k(T,v)}document.querySelectorAll("a[href]").forEach(T=>{if((T.textContent||"").trim().length<=25)return;let v=T.closest('article, li, [class*="result"], [class*="card"], [class*="item"], .gsc-webResult, .b-serp-item')||T.parentElement;k(v,T)})}let f=new Set;return{cf:a,items:d.filter(g=>g.url&&!f.has(g.url)&&f.add(g.url))}}var bt,tr,fs,wl,yp,Mn,vp,Sp,Tp,Ap,Lp,sa,Et,Mp,ms,Rn,Pp,ia,Tl=le(()=>{fl();wt();ea();bl();Hr();bt=new Map,tr=new Map,fs="",wl=6e4,yp=i((e,t)=>{let n=e?ys:xs;return typeof t=="string"?n+"-"+t:t?n+"-"+(t+1):n},"profileDir");i(xp,"tryLaunch");i(xl,"context");i(nr,"dropContext");i(oa,"closeBrowser");i(kp,"closeRunBrowsers");Mn=i(()=>fs||"причина неизвестна","browserError"),vp=i(()=>({...Et.stats,byHost:{...Et.stats.byHost}}),"browserStats"),Sp=i(()=>{gl(),Et.resetStats()},"resetBrowserStats"),Tp=9e4,Ap=12e4,Lp=12e4,sa=[],Et=ml((e,t=0)=>{let n=e==="фейсбук"?Rn:t;console.log("[render] окно "+(n===Rn?"соцсетей":n+1)+", "+e+": браузер не ответил в срок — перезапускаю"),sa[t]||(sa[t]=oa(n).catch(()=>{}).then(()=>{sa[t]=null}))},2);i(Rp,"setBrowserWindows");Mp=i(()=>Et.lanes(),"browserWindows");i(Dp,"renderScrape");i(aa,"openPage");ms=i(e=>Ee(e.close().catch(()=>{}),5e3),"shut");i(Cp,"renderFetch");i(Ep,"_renderFetch");i(zp,"renderSiteSearch");i(Np,"_renderSiteSearch");Rn="social",Pp=18e4,ia=!1;i(kl,"socialPage");i(jp,"openSocialLogin");i(Op,"fbLoginProbe");i(qp,"renderFacebook");i(Ip,"_facebook");i(Bp,"_render");i(vl,"scrapeFrames");i(yl,"findSearchSelector");i(Hp,"submitSearchForm");i(Fp,"clickSearchToggle");i(Up,"pageScrape")});var Yp={};async function Gp(){try{let e=await Promise.resolve().then(()=>(Tl(),Sl));Za(e.renderScrape),ei(e.renderFetch),ti(e.renderSiteSearch),ac(e.browserStats,e.resetBrowserStats),ic(e.closeRunBrowsers),cc(e.renderFacebook),ua=e.openSocialLogin,la=e.setBrowserWindows,El(),zl=!0,console.log("[Playwright: podklyuchyon — JS-sayty, brauzer-fetch i poisk sayta dostupny]")}catch{console.log("[Playwright: ne ustanovlen — tolko lyogkie kanaly. Zapusti setup-windows.bat]")}}function Al(e){let t=["source","date","title","url","channel","channels","match","snippet","author","kind","via","comments"];return[t.join(",")].concat((e||[]).map(n=>t.map(r=>Kp(r==="date"?ir(n[r]):n[r])).join(","))).join(`\r
`)}var Ll,Rl,Ml,Dl,Cl,ym,ca,la,El,ua,zl,O,zt,Kp,Wp,Nl=le(()=>{Ll=nn(require("node:http"),1),Rl=nn(require("node:dns"),1),Ml=nn(require("node:os"),1),Dl=require("node:url"),Cl=require("node:path");xr();Xt();vo();Ic();So();To();Ut();Lo();$n();Co();Yn();Io();Eo();Jc();Ts();Ir();el();Fo();nl();dl();Yo();Qo();try{Rl.default.setDefaultResultOrder("ipv4first")}catch{}ym=(0,Cl.dirname)((0,Dl.fileURLToPath)(__mcFileUrl)),ca=process.env.PORT||8787,la=null,El=i(()=>{if(!la)return;let e=Math.max(1,Math.min(4,+et().browserWindows||2));try{la(e)}catch{}},"applyBrowserWindows"),ua=null,zl=!1;i(Gp,"initRenderer");O=i((e,t,n)=>{e.writeHead(t,{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),e.end(JSON.stringify(n))},"json"),zt=i(e=>new Promise(t=>{let n="";e.on("data",r=>n+=r),e.on("end",()=>{try{t(JSON.parse(n||"{}"))}catch{t({})}})}),"readBody"),Kp=i(e=>{let t=String(e??"");return/[",\r\n]/.test(t)?'"'+t.replace(/"/g,'""')+'"':t},"csvCell");i(Al,"toCSV");Wp=Ll.default.createServer(async(e,t)=>{let n=new URL(e.url,"http://x"),r=n.pathname;if(e.method==="GET"&&(r==="/"||r==="/index.html"))try{return t.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),t.end(ds())}catch{return t.writeHead(500),t.end("ui.html не найден")}if(!r.startsWith("/api/"))return t.writeHead(404),t.end("not found");let s=et().password||"";if(r==="/api/me")return O(t,200,{hasPassword:!!s,playwright:zl,hasGeminiKey:!!et().geminiKey,geminiModel:et().geminiModel||"",geminiSnippets:Po(et()),browserWindows:Math.max(1,Math.min(4,+et().browserWindows||2))});if(r==="/api/quit"&&e.method==="POST"){let o=String(e.socket.remoteAddress||"");if(!(o==="127.0.0.1"||o==="::1"||o==="::ffff:127.0.0.1"))return O(t,403,{error:"выключить программу можно только с этого компьютера"});O(t,200,{ok:!0}),setTimeout(()=>process.exit(0),300);return}if(s&&e.headers["x-mc-key"]!==s)return O(t,401,{error:"нужен пароль"});if(r==="/api/presets")return O(t,200,{sites:Ao,telegram:fc,world:pc,ru:hc});if(r==="/api/state")return O(t,200,{runs:uc()});try{if(r==="/api/projects"&&e.method==="GET")return O(t,200,{projects:Ar()});if(r==="/api/projects"&&e.method==="POST"){let a=await zt(e),c=a.config||{};return(!Array.isArray(c.sites)||!c.sites.length)&&(c.sites=Ao.map(u=>u.url)),O(t,200,hi(a.name,c))}if(r==="/api/social/login"&&e.method==="POST"){if(!ua)return O(t,503,{error:"нет браузера: запусти setup-windows.bat"});let a=await ua();return O(t,a.ok?200:502,a)}if(r==="/api/social/visits"&&e.method==="GET"){let{facebookProfile:a}=await Promise.resolve().then(()=>(Hr(),oc)),c=await Promise.resolve().then(()=>(go(),mo));c.reload();let u=(n.searchParams.get("profiles")||"").split(`
`).map(h=>a(h)).filter(Boolean),l=Math.max(1,Math.min(6,+n.searchParams.get("limit")||c.DEFAULT_LIMIT));return O(t,200,{visits:u.map(h=>{let m=c.canVisit(h.label,{limit:l});return{label:h.label,used:m.used,limit:m.limit,ok:m.ok,why:m.why,nextAt:c.nextAt(h.label,{limit:l})}})})}if(r==="/api/license"&&e.method==="GET")return O(t,200,is());if(r==="/api/license"&&e.method==="POST"){let a=await zt(e);return O(t,200,jc(a.key||""))}if(r==="/api/code"&&e.method==="GET")return n.searchParams.get("check")?O(t,200,await Ss({force:!0})):O(t,200,$e());if(r==="/api/code/drop"&&e.method==="POST")return O(t,200,va());if(r==="/api/update"&&e.method==="GET")return n.searchParams.get("check")?O(t,200,await Xo({force:!0})):O(t,200,_n());if(r==="/api/update/download"&&e.method==="POST"){let a=await Vc();return O(t,a.ok?200:502,{...a,state:_n()})}if(r==="/api/update/install"&&e.method==="POST"){let a=String(e.socket.remoteAddress||"");if(!(a==="127.0.0.1"||a==="::1"||a==="::ffff:127.0.0.1"))return O(t,403,{error:"обновить можно только с этого компьютера"});let c=Xc({busy:vt.size>0});if(!c.ok)return O(t,409,c);O(t,200,c),setTimeout(()=>process.exit(0),1500);return}if(r==="/api/settings"&&e.method==="POST"){let a=await zt(e);return pi(a||{}),El(),O(t,200,{ok:!0})}if(r==="/api/gemini/models"&&e.method==="GET"){let a=et().geminiKey||"",c=await xc({apiKey:a});return O(t,200,{...c,chain:Do(et().geminiModel||"")})}let o=r.match(/^\/api\/projects\/([^/]+)(?:\/(.+))?$/);if(o){let a=o[1],c=o[2]||"",u=nt(a);if(!u)return O(t,404,{error:"проект не найден"});if(c===""&&e.method==="GET")return O(t,200,u);if(c===""&&e.method==="PUT"){let p=await zt(e);return O(t,200,fi(a,p))}if(c===""&&e.method==="DELETE")return mi(a),O(t,200,{ok:!0});if(c==="read"&&e.method==="POST")return gi(a),O(t,200,{ok:!0});if(c==="telegram"&&e.method==="POST"){let p=await zt(e),d={};if(p.enabled!==void 0&&(d.enabled=!!p.enabled),p.clearToken)d.token="",d.bot="",d.chats=[],d.offset=0,d.err="";else if(p.token){let y=String(p.token).trim(),w=Ot(a);d.token=y,y!==w.token&&(d.chats=[],d.offset=0,d.bot="",d.err="")}let f=Ot(a),g=Rt(a,d),b=0;return g.enabled&&!f.enabled&&(b=xi(a)),O(t,200,{ok:!0,tg:In(a),muted:b})}if(c==="telegram/resend"&&e.method==="POST"){let p=await zt(e),d=Bn(a),f=String(p.ts||d[0]&&d[0].ts||"");if(!f)return O(t,400,{error:"прогонов ещё не было — присылать нечего"});let g=gn(a,f);if(!g)return O(t,404,{error:"архив прогона не найден"});let b=(g.rows||[]).map(R=>R.url).filter(Boolean),y=ki(a,b),w=await $t(a,{});return O(t,200,{ok:!0,ts:f,rows:b.length,freed:y,sent:w.sent||0,rest:w.rest||0,skipped:w.skipped||""})}if(c==="telegram/check"&&e.method==="POST"){let p=Ot(a);if(!p.token)return O(t,400,{error:"сначала вставьте токен бота"});let d=await Dc(p.token);if(!d.ok)return Rt(a,{err:d.err}),O(t,200,{ok:!1,error:d.err,tg:In(a)});let f=await Ho(p.token,p);return Rt(a,{bot:d.bot,chats:f.chats,offset:f.offset,err:f.err||""}),O(t,200,{ok:!0,tg:In(a)})}if(c==="export.csv"&&e.method==="GET")return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}.csv"`}),t.end("\uFEFF"+Al(u.items));if(c==="run"&&e.method==="POST"){let p=cs();if(p)return O(t,402,{error:p});if(vt.has(a))return O(t,409,{error:"уже идёт"});vt.add(a),Kr(a,{name:u.name,by:"ручной"});let d=null,f=i((g,b)=>{try{let y=mn(a,g,b,d);d=y.ts,$t(a,{ts:y.ts}).catch(()=>{})}catch{}},"onProgress");try{let{rows:g,log:b}=await Gr(u,f,{onStep:i(R=>Wr(a,R),"onStep"),stopping:i(()=>Yr(a),"stopping")}),y=mn(a,g,b,d);try{await $t(a,{ts:y.ts})}catch{}let w=await ns(a,{foundNow:g.length,runTs:y.ts});return w.length&&Rr(a,y.ts,w.map(R=>({site:"(ИИ)",channel:"gemini",found:0,note:R}))),O(t,200,{added:y.added,total:y.total,ts:y.ts,log:b})}finally{vt.delete(a),Vr(a)}}if(c==="stop"&&e.method==="POST"){let p=lc(a);return O(t,p?200:409,p?{ok:!0}:{error:"этот проект сейчас не собирает"})}if(c==="diagnose"&&e.method==="POST"){let p=await zt(e),d=String(p.site||"").trim();if(!d)return O(t,400,{error:"не указан сайт"});let f=u.config||{};if(!String(f.keyword||"").trim())return O(t,400,{error:"у проекта не задан запрос"});let g=bn(f),b=await yr(d,{keyword:f.keyword,exclude:f.exclude||"",morph:f.morph!==!1,from:g.from,to:g.to,diag:!0});return O(t,200,{report:tl(d,b,g),channel:b.channel,note:b.note,found:b.rows.length,diag:b.diag})}if(c==="items/delete"&&e.method==="POST"){let p=await zt(e),d=Array.isArray(p.urls)?p.urls.map(g=>String(g||"").trim()).filter(Boolean):[];if(!d.length)return O(t,400,{error:"не выбрано ни одного материала"});let f=Ri(a,d);return f?O(t,200,f):O(t,404,{error:"проект не найден"})}if(c==="share.html"&&e.method==="GET"){let p=$c(a);return p?(t.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Content-Disposition":Zo(_c(p.snap))}),t.end(p.html)):O(t,404,{error:"проект не найден"})}if(c==="analytics"&&e.method==="GET"){let p=n.searchParams.get("days"),d=It(a,{days:p?+p:null});return d?O(t,200,d):O(t,404,{error:"проект не найден"})}if(c==="gemini"&&e.method==="POST"){let p=et();if(!qt(u.config||{}).ai)return O(t,403,{error:yn});if(!p.geminiKey)return O(t,400,{error:"нет ключа Gemini (задайте в настройках)"});let d=await zt(e),f=It(a,{days:d.days?+d.days:null});if(!f)return O(t,404,{error:"проект не найден"});let g=zo.includes(d.kind)?d.kind:"summary";if(g==="verify"&&!$r(u.schedule))return O(t,403,{error:_r(u.schedule)});let b=(u.items||[]).filter(T=>T&&T.title&&T.rel!=="-"),y=null,w,R=g==="sentiment"||g==="verify";if(R)w=await jo(a,{kind:g,days:d.days?+d.days:null,analytics:f,settings:p,rescore:!!d.rescore});else{y=[];let T=new Set;for(;y.length<Math.min(60,b.length);){let v=b[Math.floor(Math.random()*b.length)];T.has(v.url||v.title)||(T.add(v.url||v.title),y.push({title:v.title,url:v.url,source:v.source,date:v.date,sent:v.sent||""}))}w=await Zr({apiKey:p.geminiKey,model:p.geminiModel,analytics:f,sampleTitles:No(y),kind:g})}let k=R?w.ok?w.items:null:w.ok?ts(y,w.marks):null;return Lr(a,g,{at:Date.now(),runTs:null,window:f.overview.windowFrom+" … "+f.overview.windowTo,text:w.ok?w.text:"",model:w.model||p.geminiModel||"",err:w.ok?"":w.err||"",auto:!1,items:k}),O(t,w.ok?200:502,w.ok?{...w,items:k,note:g==="sentiment"?Oo(w):g==="verify"?qo(w):""}:w)}if(c==="usage"&&e.method==="GET"){let p=Li(a),d=0;try{let{statSync:f,existsSync:g}=await import("node:fs"),{join:b}=await import("node:path"),{DATA_ROOT:y}=await Promise.resolve().then(()=>(wt(),ga)),w=b(y,"date-cache.json");g(w)&&(d=f(w).size)}catch{}return O(t,200,{...p,limitMb:Ws(u.config),dateCacheBytes:d})}if(c==="report.txt"&&e.method==="GET"){let p=It(a,{days:n.searchParams.get("days")?+n.searchParams.get("days"):null});return p?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(ul(u.config||{},p))):O(t,404,{error:"проект не найден"})}if(c==="runs"&&e.method==="GET")return O(t,200,{runs:Bn(a)});let l=c.match(/^runs\/([^/]+)\/log\.json$/);if(l&&e.method==="GET"){let p=zi(a,l[1]);return p?(t.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Content-Disposition":Zo(`лог ${l[1].slice(0,10)} ${l[1].slice(11,16)} — ${p.проект||a}.json`)}),t.end(JSON.stringify(p,null,2))):O(t,404,{error:"прогон не найден"})}let h=c.match(/^runs\/([^/]+)\/report\.txt$/);if(h&&e.method==="GET"){let p=gn(a,h[1]);return p?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(ll(u.config||{},p))):O(t,404,{error:"прогон не найден"})}let m=c.match(/^runs\/([^/]+)(\/export\.csv)?$/);if(m&&e.method==="GET"){let p=gn(a,m[1]);return p?m[2]?(t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}-${m[1]}.csv"`}),t.end("\uFEFF"+Al(p.rows))):O(t,200,{...p,logsDir:dn}):O(t,404,{error:"прогон не найден"})}}return O(t,404,{error:"нет такого метода"})}catch(o){return O(t,500,{error:String(o&&o.message||o)})}});Gp().then(()=>Wp.listen(ca,"0.0.0.0",()=>{let e=[].concat(...Object.values(Ml.default.networkInterfaces())).filter(s=>s.family==="IPv4"&&!s.internal).map(s=>s.address),t="0.5.5",n="84d665c";console.log(`
  mediachrome ${t?t+(n?" ("+n+")":""):"(iz ishodnikov)"}`),console.log(`  Kabinet:        http://localhost:${ca}`),e.forEach(s=>console.log(`  S telefona:     http://${s}:${ca}   (v toy zhe Wi-Fi seti)`)),console.log(`  (zakryt — zakroy eto okno)
`),qc();let r=i(()=>{et().updateCheck!==!1&&(Xo().catch(()=>{}),Ss().catch(()=>{}))},"look");setTimeout(r,2e4),setInterval(r,6*3600*1e3),xa()}))});var Pl=require("node:module");Ts();var gs="__mcCodeLoaded";(async()=>{if(process.env.MC_EXE_VERSION||(process.env.MC_EXE_VERSION="0.5.5"),!globalThis[gs]){let e=null;try{e=ya()}catch{e=null}if(e){globalThis[gs]=e.version;try{(0,Pl.createRequire)(process.execPath)(e.path);return}catch(t){globalThis[gs]="";try{ka(e.version,String(t&&t.message||t))}catch{}console.log(`
  [obnovlenie mehanizmov `+e.version+" ne zagruzilos - rabotaem po vshitomu kodu]"),console.log("  "+String(t&&t.message||t)+`
`)}}}process.env.MC_CODE_RUNNING=globalThis[gs]||"",await Promise.resolve().then(()=>(Nl(),Yp))})();
