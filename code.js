// mediachrome 0.6.5 (b23afbb) — собрано автоматически, не править
const __mcFileUrl = require('node:url').pathToFileURL(process.execPath).href;
var Sh=Object.create;var ys=Object.defineProperty;var Th=Object.getOwnPropertyDescriptor;var Lh=Object.getOwnPropertyNames;var Ah=Object.getPrototypeOf,Mh=Object.prototype.hasOwnProperty;var i=(e,t)=>ys(e,"name",{value:t,configurable:!0});var J=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var Dr=(e,t)=>{for(var n in t)ys(e,n,{get:t[n],enumerable:!0})},Ch=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Lh(t))!Mh.call(e,s)&&s!==n&&ys(e,s,{get:()=>t[s],enumerable:!(r=Th(t,s))||r.enumerable});return e};var Hn=(e,t,n)=>(n=e!=null?Sh(Ah(e)):{},Ch(t||!e||!e.__esModule?ys(n,"default",{value:e,enumerable:!0}):n,e));var Lc={};Dr(Lc,{DATA_ROOT:()=>we,USERDATA_CHROMIUM_DIR:()=>_o,USERDATA_DIR:()=>Zo,migrateLegacyData:()=>ea});function Dh(){if(process.env.MEDIACHROME_DATA)return process.env.MEDIACHROME_DATA;let e=process.env.APPDATA||(Qo.default.homedir?Qo.default.homedir():Tc);return process.env.APPDATA?(0,nn.join)(e,"mediachrome"):(0,nn.join)(e,".mediachrome")}function ea(e){try{let t=(0,nn.join)(Tc,"data"),n=(0,rn.existsSync)((0,nn.join)(we,"projects"))||(0,rn.existsSync)((0,nn.join)(we,"site-memory.json"));if((0,rn.existsSync)(t)&&!n&&(0,rn.readdirSync)(t).length)return e(t,we),!0}catch{}return!1}var Qo,nn,rn,kc,Sc,Tc,we,Zo,_o,gt=J(()=>{Qo=Hn(require("node:os"),1),nn=require("node:path"),rn=require("node:fs"),kc=require("node:url"),Sc=require("node:path"),Tc=(0,Sc.dirname)((0,kc.fileURLToPath)(__mcFileUrl));i(Dh,"resolveRoot");we=Dh(),Zo=(0,nn.join)(we,".userdata"),_o=(0,nn.join)(we,".userdata-chromium");try{(0,rn.mkdirSync)(we,{recursive:!0})}catch{}i(ea,"migrateLegacyData")});function xs(e,t){let n=i(o=>String(o||"0").split(/[^\d]+/).filter(a=>a!=="").map(Number),"p"),r=n(e),s=n(t);for(let o=0;o<Math.max(r.length,s.length);o++){let a=(r[o]||0)-(s[o]||0);if(a)return a<0?-1:1}return 0}function Ph(e,t){if(!wn)return{ok:!1,why:"подпись кода не настроена — лёгкие обновления выключены"};let n=(0,qn.createHash)("sha256").update(e).digest("hex");if(t&&t.sha256&&n!==t.sha256)return{ok:!1,why:"файл не совпал с отпечатком из витрины — возможно, скачался не целиком"};let r;try{r=(0,qn.createPublicKey)({key:Buffer.from(wn,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ"}}let s=!1;try{let o=Buffer.from(String(t&&t.sig||"").replace(/-/g,"+").replace(/_/g,"/"),"base64");s=o.length>0&&(0,qn.verify)(null,e,r,o)}catch{s=!1}return s?{ok:!0,why:"",sha256:n}:{ok:!1,why:"подпись не сошлась — файл не от разработчика или повреждён"}}function Mc(e=wt()){let t=wn?e.active:null;if(!t||!t.version||!t.file)return{use:!1,why:"none",version:""};if((e.bad||{})[t.version])return{use:!1,why:"bad",version:t.version};if(!(0,Fe.existsSync)(t.file))return{use:!1,why:"gone",version:t.version};let n=ta();return n&&t.minExe&&xs(n,t.minExe)<0?{use:!1,why:"needExe",version:t.version,minExe:t.minExe,exe:n}:n&&xs(t.version,n)<=0?{use:!1,why:"stale",version:t.version,exe:n}:{use:!0,why:"",version:t.version,file:t.file,minExe:t.minExe||""}}function Cc(){if(!wn)return null;let e=wt(),t=e.active;if(!t||!t.version||!t.file)return null;if(e.pending&&e.pending.version===t.version){let r=e.bad||{};r[t.version]={at:Date.now(),why:"программа не дошла до запуска"};try{(0,Fe.renameSync)(t.file,t.file+".broken")}catch{try{(0,Fe.rmSync)(t.file,{force:!0})}catch{}}return ct({...e,active:null,pending:null,bad:r,lastFail:{version:t.version,at:Date.now()}}),null}let n=Mc(e);if(!n.use){if(n.why==="stale"){try{(0,Fe.rmSync)(t.file,{force:!0})}catch{}ct({...e,active:null,pending:null})}else n.why==="gone"&&ct({...e,active:null});return null}return ct({...e,pending:{version:t.version,at:Date.now()}}),{path:t.file,version:t.version}}function Dc(){let e=wt();if(!e.pending)return;let t=process.env.MC_CODE_RUNNING||"";if(e.pending.version!==t)return;let n=e.okVersions||{};n[e.pending.version]=Date.now(),ct({...e,pending:null,okVersions:n})}function Rc(e,t){let n=wt(),r=n.bad||{};r[e]={at:Date.now(),why:String(t||"")};let s=n.active;if(s&&s.version===e&&s.file)try{(0,Fe.renameSync)(s.file,s.file+".broken")}catch{try{(0,Fe.rmSync)(s.file,{force:!0})}catch{}}ct({...n,active:null,pending:null,bad:r,lastFail:{version:e,at:Date.now(),why:String(t||"")}})}function it(){let e=wt(),t=wn?e.active:null,n=Mc(e),r=process.env.MC_CODE_RUNNING||"";return{enabled:!!wn,running:r,exe:ta(),ready:!!(n.use&&n.version!==r),readyVersion:n.use?n.version:"",needExe:n.why==="needExe"?{version:n.version,minExe:n.minExe}:null,notes:t&&t.notes||"",lastFail:e.lastFail||null,checkedAt:e.checkedAt||0,err:e.err||""}}async function jh(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{signal:t.signal,headers:{"Cache-Control":"no-cache"}});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json()}finally{clearTimeout(n)}}async function na(e={}){if(!wn)return it();let t=wt();if(!e.force&&t.checkedAt&&Date.now()-t.checkedAt<Nh)return it();let n=null;try{n=await jh(Rh)}catch(p){return ct({...t,checkedAt:Date.now(),err:String(p&&p.message||p)}),it()}if(ct({...t,checkedAt:Date.now(),err:""}),!n||!n.version||!n.url)return it();let r=ta(),s=t.active&&t.active.version||r;if(s&&xs(n.version,s)<=0||(t.bad||{})[n.version])return it();if(r&&n.minExe&&xs(r,n.minExe)<0)return ct({...wt(),needFull:{version:n.version,minExe:n.minExe}}),it();let o;try{let p=new AbortController,f=setTimeout(()=>p.abort(),6e4);try{let u=await fetch(n.url,{signal:p.signal});if(!u.ok)throw new Error("HTTP "+u.status);o=Buffer.from(await u.arrayBuffer())}finally{clearTimeout(f)}}catch(p){return ct({...wt(),err:String(p&&p.message||p)}),it()}let a=Ph(o,n);if(!a.ok)return ct({...wt(),err:a.why}),it();try{(0,Fe.mkdirSync)(vs,{recursive:!0})}catch{}let c=(0,ks.join)(vs,"code-"+String(n.version).replace(/[^\w.-]/g,"_")+".js"),d=c+".part";try{(0,Fe.writeFileSync)(d,o),(0,Fe.renameSync)(d,c)}catch(p){try{(0,Fe.rmSync)(d,{force:!0})}catch{}return ct({...wt(),err:"не удалось сохранить: "+String(p&&p.message||p)}),it()}let l=wt();if(l.active&&l.active.file&&l.active.file!==c)try{(0,Fe.rmSync)(l.active.file,{force:!0})}catch{}return ct({...l,err:"",active:{version:n.version,file:c,minExe:n.minExe||"",notes:n.notes||"",at:Date.now()}}),it()}function Nc(){let e=wt();if(e.active&&e.active.file)try{(0,Fe.rmSync)(e.active.file,{force:!0})}catch{}return ct({...e,active:null,pending:null}),it()}var ks,Fe,qn,Rh,wn,vs,Ac,Nh,Eh,ct,wt,ta,ra=J(()=>{ks=require("node:path"),Fe=require("node:fs"),qn=require("node:crypto");gt();Rh=process.env.MC_CODE_URL||"https://raw.githubusercontent.com/tim2190/mediachrome-dist/main/code.json",wn="MCowBQYDK2VwAyEArb2DkMY1meiRt6JXIr0unrIjtj5ADfd+D/OVThCAoyg=",vs=(0,ks.join)(we,"code"),Ac=(0,ks.join)(vs,"state.json"),Nh=864e5,Eh=i(e=>{try{return JSON.parse((0,Fe.readFileSync)(e,"utf8"))}catch{return null}},"readJson"),ct=i(e=>{try{(0,Fe.mkdirSync)(vs,{recursive:!0})}catch{}try{(0,Fe.writeFileSync)(Ac,JSON.stringify(e,null,2))}catch{}},"save"),wt=i(()=>Eh(Ac)||{},"st0");i(xs,"cmpVer");ta=i(()=>process.env.MC_EXE_VERSION||"0.6.5","exeVersion");i(Ph,"verifyBundle");i(Mc,"codeVerdict");i(Cc,"activeCode");i(Dc,"markCodeOk");i(Rc,"markCodeBad");i(it,"codeState");i(jh,"getJson");i(na,"checkCode");i(Nc,"dropCode")});function ye(e){if(!e)return null;let t=String(e).trim();if(!t)return null;let n=t.match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{2}|\d{4})(?!\d)/);if(n&&+n[1]<=31&&+n[2]<=12){let o=n[3].length===2?2e3+ +n[3]:+n[3],a=new Date(o,+n[2]-1,+n[1]);if(!isNaN(a.getTime()))return a}let r=new Date(t);if(!isNaN(r.getTime())&&/\d{4}/.test(t))return r;let s=zh(t);return s||(isNaN(r.getTime())?null:r)}function sa(e,t){let n=e.match(/(\d{1,2}):(\d{2})/),r=new Date(t);return n?r.setHours(+n[1],+n[2],0,0):r.setHours(0,0,0,0),r}function zh(e){let t=e.toLowerCase(),n=new Date;if(/только что|just now|moments? ago|сейчас/.test(t))return n;let r=t.match(/(\d+)\s*(секунд|минут|час|дн|день|сутк|недел|месяц|год|лет|сағат|мину?т|күн|тәулік|апта|ай|жыл|second|sec|minute|min|hour|day|week|month|year)[a-zа-яёәөұүқғңһі]*\s*(?:назад|бұрын|ago)/);if(r){let s=+r[1],o=r[2],a=new Date(n);return/секунд|second|sec/.test(o)?a.setSeconds(a.getSeconds()-s):/минут|мину?т|minute|min/.test(o)?a.setMinutes(a.getMinutes()-s):/час|сағат|hour/.test(o)?a.setHours(a.getHours()-s):/дн|день|сутк|күн|тәулік|day/.test(o)?a.setDate(a.getDate()-s):/недел|апта|week/.test(o)?a.setDate(a.getDate()-s*7):/месяц|month/.test(o)||o==="ай"?a.setMonth(a.getMonth()-s):/год|лет|жыл|year/.test(o)&&a.setFullYear(a.getFullYear()-s),a}if(/^вчера|^yesterday|^кеше/.test(t)){let s=new Date(n);return s.setDate(n.getDate()-1),sa(t,s)}if(/^сегодня|^today|^бүгін/.test(t))return sa(t,n);if(r=t.match(/(\d{1,2})\s+([а-яёәөұүқғңһіА-ЯЁӘӨҰҮҚҒҢҺІ]{3,})\.?\s*(\d{4})?/),r){let s=+r[1],o=r[2].toLowerCase(),a=$h.findIndex(c=>o.startsWith(c)||c.startsWith(o));if(a<0&&(a=Oh.findIndex(c=>o.startsWith(c)||c.startsWith(o))),a>=0){let c=r[3]?+r[3]:n.getFullYear(),d=new Date(c,a,s),l=sa(t,d);return isNaN(l.getTime())?null:l}}return null}function Bn(e){if(!e)return null;let t=new Date(e+"T00:00:00");return isNaN(t.getTime())?null:t}function X(e){if(!(e instanceof Date)||isNaN(e.getTime()))return null;let t=i(n=>String(n).padStart(2,"0"),"p2");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function Ft(e){if(!e)return"";let t=e instanceof Date?e:new Date(e);if(isNaN(t.getTime()))return String(e);let n=i(s=>String(s).padStart(2,"0"),"p2"),r=t.getHours()||t.getMinutes()?" "+n(t.getHours())+":"+n(t.getMinutes()):"";return X(t)+r}function Rr(e){if(!e)return null;let t=new Date(e+"T23:59:59.999");return isNaN(t.getTime())?null:t}function Ve(e,t,n){let r=e instanceof Date?e:ye(e);return!(!r||t&&r<t||n&&r>n)}var Oh,$h,ht=J(()=>{i(ye,"parseDate");Oh=["январ","феврал","март","апрел","ма","июн","июл","август","сентябр","октябр","ноябр","декабр"],$h=["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"];i(sa,"timeFrom");i(zh,"parseLoose");i(Bn,"startOfDay");i(X,"ymd");i(Ft,"localStamp");i(Rr,"endOfDay");i(Ve,"inRange")});function zc(e){return/\/wp-content\//.test(e||"")}function aa(e){let t=[],n=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,r;for(;r=n.exec(e);){let s;try{s=JSON.parse(r[1].trim())}catch{continue}let o=Array.isArray(s)?s:[s];for(let a of o)a&&a["@graph"]&&Array.isArray(a["@graph"])&&t.push(...a["@graph"]),a&&t.push(a)}return t}function ia(e,t){return e?Array.isArray(e)?e.some(n=>String(n).toLowerCase().includes(t)):String(e).toLowerCase().includes(t):!1}function Vt(e,t){let n=new RegExp(`<meta[^>]+(?:property|name|itemprop)=["']`+Ec+t+`["'][^>]*content=["']([^"']+)["']`,"i"),r=e.match(n);if(r)return r[1];let s=new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name|itemprop)=["']`+Ec+t+`["']`,"i"),o=e.match(s);return o?o[1]:null}function Ct(e){if(!e)return e;let t={"&amp;":"&","&quot;":'"',"&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"«","&raquo;":"»","&ndash;":"–","&mdash;":"—","&hellip;":"…","&laquo":"«","&raquo":"»","&rsquo;":"’","&lsquo;":"‘","&rdquo;":"”","&ldquo;":"“"};return e.replace(/&#x27;/gi,"'").replace(/&#0?39;/g,"'").replace(/&(?:amp|quot|apos|lt|gt|nbsp|laquo|raquo|ndash|mdash|hellip|rsquo|lsquo|rdquo|ldquo);/g,n=>t[n]||n).replace(/&#x([0-9a-f]+);/gi,(n,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(n,r)=>String.fromCodePoint(parseInt(r,10)))}function Fc(e,t){let n="",r=!1;for(let s=t+1;s<e.length;s++){let o=e[s];if(n){o===n&&(n="");continue}if(o==='"'||o==="'"){r&&(n=o,r=!1);continue}if(o===">")return s;if(o==="="){r=!0;continue}/\s/.test(o)||(r=!1)}return-1}function oa(e,t=" "){let n=String(e??""),r="",s=0;for(;;){let o=n.indexOf("<",s);if(o<0){r+=n.slice(s);break}if(r+=n.slice(s,o),!/[a-zA-Z!/?]/.test(n[o+1]||"")){r+="<",s=o+1;continue}let a=Fc(n,o);if(a<0){r+=n.slice(o);break}r+=t,s=a+1}return r}function Fh(e,t){let n=String(e??""),r="",s=0,o=!1;for(;;){let a=n.indexOf("<",s);if(a<0){o||(r+=n.slice(s));break}if(o||(r+=n.slice(s,a)),!/[a-zA-Z!/?]/.test(n[a+1]||"")){o||(r+="<"),s=a+1;continue}let c=Fc(n,a);if(c<0){o||(r+=n.slice(a));break}let d=n.slice(a+1,c);/^\/a\s*$/i.test(d)?o=!1:/^a\b/i.test(d)&&!/\/\s*$/.test(d)&&/<\/a\s*>/i.test(n.slice(c))&&(o=!0),r+=Ih.test(d)?/^\/?(?:br|wbr)\b/i.test(d)?" ":"":t,s=c+1}return r}function Hc(e,t=" "){return Ct(oa(e,t)).replace(/\s+/g," ").trim()}function Ss(e){let t=Ct(String(e??"").trim());return/<[a-zA-Z!/?]/.test(t)?Hc(t):t}function ca(e,t=12){let n=String(e||"").toLowerCase().trim();if(!n)return[];if(/^[a-z0-9-]+$/.test(n))return n.length>=4?[n]:[];let r=[""];for(let s of n){let o=Hh[s]||(/[a-z0-9]/.test(s)?[s]:null);if(!o)return[];let a=[];for(let c of r)for(let d of o)a.length<t&&a.push(c+d);r=a}return[...new Set(r)].filter(s=>s.length>=4)}function Se(e){let t;try{t=new URL(String(e))}catch{return String(e||"").trim()}let n=t.host.toLowerCase().replace(/^www\./,""),r=t.pathname.replace(/\/+$/,"")||"/",s=[...t.searchParams.entries()].filter(([o])=>!qh.test(o)).sort((o,a)=>o[0].localeCompare(a[0])).map(([o,a])=>o+"="+a).join("&");return n+r+(s?"?"+s:"")}function qc(e){let t=String(e||"");return/новост[ией]+\s+(?:и\s+событи[йяе]+\s+)?по\s+теме|последние\s+новости\s+на\s+тему|все\s+(?:новости|материалы|публикации)\s+по\s+(?:теме|тегу)|материалы\s+по\s+тег|архив\s+(?:новостей|материалов|публикаций)|тақырып\s+бойынша\s+жаңалықтар/i.test(t)}function Ts(e){let t;try{t=new URL(e).pathname}catch{return!1}let n=t.split("/").filter(Boolean).pop()||"";return n?/\d{4,}/.test(n)?!0:n.split(/[-_]/).filter(Boolean).length>=4:!1}function bn(e,t,n){let r=new RegExp("<(\\/?)"+n+"\\b","gi");r.lastIndex=t;let s=1,o;for(;o=r.exec(e);)if(o[1]){if(--s===0)return o.index}else if(++s>400)return-1;return-1}function Bh(e){if(!e)return"";let t=String(e).replace(/<!--[\s\S]*?-->/g," ").replace(/<(script|style|noscript|svg|iframe|form|nav|aside|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi," ");{let h=/<(div|section|ul|ol)\b([^>]*)>/gi,m="",w=0,g;for(;g=h.exec(t);){let b=(g[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1]||"";if(!Pc.test(b))continue;let y=bn(t,h.lastIndex,g[1]);y<0||(m+=t.slice(w,g.index)+" ",w=y,h.lastIndex=y)}t=m+t.slice(w)}t=t.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(h,m)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(m)?" ":h);{let h=/<(div|p|li|h[1-6])\b[^>]*>/gi,m="",w=0,g;for(;g=h.exec(t);){if(g.index<w)continue;let b=bn(t,h.lastIndex,g[1]);if(b<0)continue;let y=t.slice(h.lastIndex,b).trim();if((y.match(/<a\b/gi)||[]).length!==1)continue;let L=y.search(/<a\b/i),v=y.lastIndexOf("</a>");if(v<L)continue;let T=oa(y.slice(0,L)).trim();oa(y.slice(v+4)).trim()||T&&!/:$/.test(T)||(m+=t.slice(w,g.index)+" ",w=t.indexOf(">",b)+1||b,h.lastIndex=w)}t=m+t.slice(w)}{let h=/<(div|section|article|span|li|button)\b([^>]*\brole\s*=\s*["'](?:button|link|tab|menuitem)["'][^>]*)>/gi,m="",w=0,g;for(;g=h.exec(t);){let b=bn(t,h.lastIndex,g[1]);b<0||(m+=t.slice(w,g.index)+" ",w=b,h.lastIndex=b)}t=m+t.slice(w)}let n=i(h=>Hc(h),"text"),r=t.match(/<([a-z]+)\b[^>]*itemprop\s*=\s*["']articleBody["'][^>]*>/i);if(r){let h=r.index+r[0].length,m=bn(t,h,r[1]);if(m>0){let w=n(t.slice(h,m));if(w.length>200)return w.slice(0,4e4)}}let s=150,o=i(h=>Fh(h,"\0").split("\0").reduce((m,w)=>{let g=w.replace(/\s+/g," ").trim();return m+(g.length>=s?g.length:0)},0),"longText"),a="",c=0,d=0,l=i((h,m)=>{(m>c||m===c&&(c>0?h.length<d:h.length>d))&&(a=h,c=m,d=h.length)},"offer"),p=i(h=>{let m=/<article\b[^>]*>/gi,w="",g=0,b;for(;b=m.exec(h);){let y=bn(h,m.lastIndex,"article");y<0||(w+=h.slice(g,b.index)+" ",g=h.indexOf(">",y)+1||y,m.lastIndex=g)}return w+h.slice(g)},"dropCards");{let h=/<article\b[^>]*>/gi,m;for(;m=h.exec(t);){let w=bn(t,h.lastIndex,"article");if(w<0)continue;let g=p(t.slice(h.lastIndex,w));l(n(g),o(g))}}if(a.length>200)return a.slice(0,4e4);let f=/(article|post|entry|news|material|publication|content|text|body)[-_]?(body|text|content|detail|full|inner)?/i;{let h=/<(div|section)\b([^>]*)>/gi,m;for(;m=h.exec(t);){let w=(m[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1];if(!w||!f.test(w)||Pc.test(w))continue;let g=bn(t,h.lastIndex,m[1]);if(g<0)continue;let b=p(t.slice(h.lastIndex,g));l(n(b),o(b))}}return a.length>200?a.slice(0,4e4):[...t.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(h=>n(h[1])).filter(h=>h.length>40).join(" ").slice(0,4e4)}function Dt(e){let t=String(e||""),n;if(n=t.match(/(?:^|[\/\-_.])(20\d{2})[\/\-.](\d{1,2})[\/\-.](\d{1,2})(?:[\/\-_.]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}if(n=t.match(/(?:^|[\/\-_.])(\d{1,2})[\/\-.](\d{1,2})[\/\-.](20\d{2})(?:[\/\-_.]|$|\.html)/),n){let r=new Date(+n[3],+n[2]-1,+n[1]);if(!isNaN(r)&&+n[2]<=12&&+n[1]<=31)return r}if(n=t.match(/(?:^|[\/\-_])(20\d{2})(\d{2})(\d{2})(?:[\/\-_]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}return null}function Uh(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i,n=/(date|time|pub|posted|created|published)/i,r=[...e.matchAll(/<article\b/gi)].map(f=>f.index),s=[...e.matchAll(/<\/article\s*>/gi)].map(f=>f.index),o=i(f=>r.filter(u=>u<f).length>s.filter(u=>u<f).length,"inArticle"),a=null,c=null,d=null,l=null;for(let f of e.matchAll(/<time\b([^>]*)>/gi)){let u=f[1]||"",h=(u.match(/\sdatetime=["']([^"']+)["']/i)||[])[1]||"";if(!h){let b=f.index+f[0].length,y=e.slice(b,b+200),L=y.search(/<\/time\s*>/i);if(L<0)continue;let v=Ct(y.slice(0,L).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!v||v.length>80)continue;h=v}l||(l=h);let m=(u.match(/class=["']([^"']*)["']/i)||[])[1]||"";if(t.test(m))continue;if(!a&&o(f.index)){a=h;break}if(!c&&n.test(m)){c=h;continue}let g=[...e.slice(Math.max(0,f.index-400),f.index).matchAll(/class=["']([^"']*)["']/gi)].pop();g&&t.test(g[1])||d||(d=h)}let p=a||c||d||l;return p?ye(p):null}function Gh(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i;e=String(e).replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(n,r)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(r)?" ":n);for(let n of e.matchAll(/<(?:div|span|p|li|h[1-6])[^>]*class=["']([^"']*(?:date|time|pub|posted|created)[^"']*)["'][^>]*>([\s\S]{0,160}?)<\/(?:div|span|p|li|h[1-6])>/gi)){if(t.test(n[1]))continue;let r=Ct(n[2].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!r||r.length>80)continue;let s=ye(r);if(s)return s}return null}function Kh(e,t){let n=new Set,r=i(c=>Ct(String(c||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"norm"),s="";try{s=new URL(t,"https://x").pathname.replace(/\/+$/,"")}catch{}let o=i(c=>{if(!c)return!1;try{return new URL(String(c).replace(/\\\//g,"/"),"https://x").pathname.replace(/\/+$/,"")===s}catch{return!1}},"sameUrl"),a=i(c=>{if(!(!c||typeof c!="object")){if(Array.isArray(c)){for(let d of c)a(d);return}if(c.headline&&!o(c.url)){let d=r(c.headline);d.length>=20&&n.add(d)}for(let d of["itemListElement","item","@graph","mainEntity"])c[d]&&a(c[d])}},"eat");for(let c of aa(e))(ia(c["@type"],"list")||c.itemListElement)&&a(c);for(let c of e.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)){if(o(c[1]))continue;let d=r(c[2]);d.length>=20&&d.length<=200&&n.add(d)}return[...n]}function jc(e,t){if(!t||!t.length)return e;let n=String(e).replace(/\s+$/,""),r=t.slice().sort((s,o)=>o.length-s.length);for(let s=0;s<12;s++){let o=n.replace(/\s+$/,""),a=r.find(c=>o.endsWith(c));if(!a)break;n=o.slice(0,o.length-a.length).replace(/[\s·|—–-]+$/,"")}return n}function Uc(e){for(let n of aa(e))if(ia(n["@type"],"article"))return!0;return(Vt(e,"og:type")||"").toLowerCase().includes("article")?!0:!!Vt(e,"article:published_time")}function la(e,t,n=""){let r=null,s=null,o=!1,a=null,c=null,d="",l=i(m=>m==null?"":typeof m=="string"?m:Array.isArray(m)?m.map(l).filter(Boolean).join(" "):typeof m=="object"?l(m["@value"]||m.text||m.name||""):String(m),"asText"),p=null;for(let m of aa(e))ia(m["@type"],"article")&&(o=!0,m.datePublished&&!p&&(p=ye(m.datePublished)),m.headline&&!s&&(s=l(m.headline)),m.description&&!a&&(a=l(m.description)),m.articleBody&&!c&&(c=l(m.articleBody)));let f={jsonld:i(()=>p,"jsonld"),"meta-og":i(()=>{let m=Vt(e,"article:published_time");return m?ye(m):null},"meta-og"),"meta-itemprop":i(()=>{let m=Vt(e,"datePublished");return m?ye(m):null},"meta-itemprop"),time:i(()=>Uh(e),"time"),"text-block":i(()=>Gh(e),"text-block")};for(let m of Wh){let w=f[m]();if(w){r=w,d=m;break}}if(s||(s=Vt(e,"og:title")),!s){let m=e.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);m&&(s=m[1].replace(/<[^>]+>/g,""))}a||(a=Vt(e,"description")||Vt(e,"og:description")),o||((Vt(e,"og:type")||"").toLowerCase().includes("article")||Vt(e,"article:published_time"))&&(o=!0);let u=Kh(e,t),h=jc(Bh(e),u);if(c&&(c=jc(c,u)),!c)c=h;else if(h){let m=i(b=>String(b).toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim(),"flat"),w=m(c),g=m(h);w&&g.includes(w)?c=h:w.includes(g)||(c=c+" "+h)}return!r&&t&&(r=Dt(t),r&&(d="url")),r?{url:t,dateVia:d,title:Ss(s)||t,date:r.toISOString(),isArticle:o,description:Ss(a),body:c?Ss(l(c)):""}:null}function Wc(e){let t;try{t=new URL(e).pathname.toLowerCase()}catch{return!1}return Gc.test(t)}function Un(e,t){let n=new URL(t).host,r=new Set,s=i(d=>{let l;try{l=new URL(d.replace(/\\\//g,"/"),t).href}catch{return}let p;try{p=new URL(l)}catch{return}if(p.host!==n)return;let f=p.pathname.toLowerCase();f==="/"||f===""||Gc.test(f)||/\/(search|search_results|results|tag|tags|category|categories|author|rubric|page|feed|rss|login|register)\b/.test(f)||f.split("/").filter(Boolean).length<1||r.add(l.split("#")[0])},"add"),o,a=/href=["']([^"'#]+)["']/gi;for(;o=a.exec(e);)s(o[1]);if(/^\s*[\[{]/.test(e)||r.size===0){let d=/"[\w]*(?:url|link|uri)"\s*:\s*"((?:https?:)?\\?\/\\?\/?[^"]+)"/gi;for(;o=d.exec(e);)s(o[1]);let l=new RegExp("https?:\\\\?/\\\\?/(?:www\\.)?"+n.replace(/^www\./,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+`\\\\?/[^"'\\s<>]+`,"gi");for(;o=l.exec(e);)s(o[0])}return[...r]}function Kc(e){let t=[],n=/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi,r;for(;r=n.exec(e);){let s=(r[0].match(/href=["']([^"']+)["']/i)||[])[1];s&&t.push(s)}return t}function Vc(e){let t=[],n=e.match(/<item[\s\S]*?<\/item>/gi)||[];for(let s of n){let o=bt((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=bt((s.match(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i)||[])[1])||"",c=bt((s.match(/<pubDate(?:\s[^>]*)?>([\s\S]*?)<\/pubDate>/i)||[])[1]||(s.match(/<dc:date(?:\s[^>]*)?>([\s\S]*?)<\/dc:date>/i)||[])[1]),d=Ic((s.match(/<description(?:\s[^>]*)?>([\s\S]*?)<\/description>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:c||null,description:d?Ss(d):""})}if(t.length)return t;let r=e.match(/<entry[\s\S]*?<\/entry>/gi)||[];for(let s of r){let o=bt((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=((s.match(/<link[^>]+href=["']([^"']+)["']/i)||[])[1]||"").trim(),c=bt((s.match(/<(?:published|updated)(?:\s[^>]*)?>([\s\S]*?)<\/(?:published|updated)>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:c||null})}return t}function Yc(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=bt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=bt((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]||(r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Jc(e){let t=[],n=e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[];for(let r of n){let s=bt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=bt((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Xc(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=bt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]),o=bt((r.match(/<news:title(?:\s[^>]*)?>([\s\S]*?)<\/news:title>/)||[])[1]),a=bt((r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1]||(r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]);if(!s)continue;let c=ye(a);t.push({url:s,title:o||null,date:c?c.toISOString():null})}return t}function $c(e){if(!e)return"";let t=String(e).replace(/\s+/g,"").replace(/%3D/gi,"=").replace(/%2B/gi,"+").replace(/%2F/gi,"/"),n=Oc(t);if(!n){let r=(4-t.length%4)%4;try{n=Oc(t+"=".repeat(r))}catch{}}return n}function Qc(e,t){try{let n=String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(!n)return null;let r=/(^|\.)(bing|microsoft|msn|bingapis|windows|office\.net|live\.com|outlook\.com|go\.microsoft)\./i,s=i(d=>{try{return decodeURIComponent(d)}catch{return String(d)}},"tryDec"),o=[];i(d=>{try{let l=/^https?:/i.test(d)||d.startsWith("http")?d:d.startsWith("/")?"https://www.bing.com"+d:"https://"+d,p=new URL(l);for(let[h,m]of p.searchParams.entries())m&&/^(u|uddg|url|to|dest|destination|target|redirect|page|link|ref)[\d]*$/i.test(h)&&o.push(String(m));let u=(p.search+"&").match(/[?&]u=([A-Za-z0-9_\-+/=%]{20,})/i);u&&o.push(decodeURIComponent(u[1]))}catch{}},"tryFromUrl")(n);let c=[];for(let d of o)c.push(d);c.push(n,s(n),s(s(n))),/^[A-Za-z0-9_\-+/=]{40,}$/.test(n)&&c.push($c(n));for(let d=0;d<c.length;d++){let l=c[d];if(!l)continue;let p=String(l).match(/[A-Za-z0-9_\-+/]{40,}={0,3}/g)||[];for(let u of p){let h=$c(u);h&&/^https?:/i.test(h)&&c.push(h)}let f=String(l).match(/https?:\/\/[^\s"'&<>()\\]+/gi)||[];for(let u of f)try{let h=new URL(u.split("#")[0].replace(/\/+$/,"")),m=h.host.replace(/^www\./,"");if(r.test(m))continue;if(m===t||m.endsWith("."+t))return h.href.split("#")[0]}catch{}}return null}catch{return null}}var Ec,Ic,bt,Ih,Hh,qh,Pc,Wh,Bc,Gc,Oc,Nr=J(()=>{ht();i(zc,"isWordPress");i(aa,"jsonLdObjects");i(ia,"typeIncludes");Ec="(?:og:)?";i(Vt,"metaContent");Ic=i(e=>e==null?e:String(e).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1"),"stripCdata"),bt=i(e=>{let t=Ic(e);return t==null?t:Ct(t).trim()},"xmlText");i(Ct,"decodeEntities");i(Fc,"tagEnd");i(oa,"stripTags");Ih=/^\/?(?:br|wbr|strong|b|em|i|u|s|span|sup|sub|mark|small|abbr|q|cite|font)\b/i;i(Fh,"stripLinksAndTags");i(Hc,"htmlToText");i(Ss,"unmarkup");Hh={а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["e","ye"],ё:["e","yo"],ж:["zh"],з:["z"],и:["i"],й:["i","y"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["h","kh"],ц:["c","ts"],ч:["ch"],ш:["sh"],щ:["sch"],ъ:[""],ы:["y"],ь:[""],э:["e"],ю:["yu","iu"],я:["ya","ia"],ә:["a","ae"],ғ:["g","gh"],қ:["k","q",""],ң:["n","ng"],ө:["o","oe"],ұ:["u"],ү:["u","ue"],һ:["h"],і:["i"]};i(ca,"translitVariants");qh=/^(utm_|yclid|gclid|fbclid|from|_openstat|ysclid)/i;i(Se,"urlKey");i(qc,"looksLikeListingTitle");i(Ts,"looksLikeArticleUrl");Pc=/(sidebar|side-bar|aside|widget|banner|advert|reklam|menu|nav|breadcrumb|footer|header|subscribe|podpis|social|share|comment|komment|related|similar|also|recommend|read-?more|popular|latest|last-?news|news-?list|tags?|rubric|category)/i;i(bn,"blockEnd");i(Bh,"extractBodyText");i(Dt,"dateFromUrl");i(Uh,"pickTimeDate");i(Gh,"pickTextBlockDate");Wh=["jsonld","meta-og","meta-itemprop","time","text-block"],Bc={jsonld:"разметка JSON-LD","meta-og":"мета article:published_time","meta-itemprop":"микроразметка itemprop",time:"тег <time>","text-block":"текстом в блоке с датой",url:"дата в адресе"};i(Kh,"foreignTitles");i(jc,"trimForeignTail");i(Uc,"declaresArticle");i(la,"extractArticleMeta");Gc=/\.(xml|json|jsonld|js|mjs|map|css|txt|jpg|jpeg|png|webp|gif|svg|ico|avif|bmp|tiff?|woff2?|ttf|otf|eot|pdf|mp4|webm|mov|avi|mp3|ogg|wav|zip|rar|7z|gz|tar|docx?|xlsx?|pptx?|rtf|epub|apk|exe|dmg)$/;i(Wc,"isAssetUrl");i(Un,"extractLinks");i(Kc,"extractFeedLinks");i(Vc,"parseFeed");i(Yc,"parseUrlset");i(Jc,"parseSitemapIndex");i(Xc,"parseNewsSitemap");Oc=typeof Buffer<"u"&&Buffer.from?e=>{try{return Buffer.from(e,"base64").toString("utf8")}catch{return""}}:e=>{try{return atob(e.replace(/_/g,"/").replace(/-/g,"+"))}catch{return""}};i($c,"_b64dec");i(Qc,"bingReal")});function da(e){let t;try{t=new URL(e).host.replace(/^www\./,"")}catch{return null}if(Ls[t])return Ls[t];for(let n of Object.keys(Ls))if(t===n||t.endsWith("."+n))return Ls[n];return null}var Ls,Zc=J(()=>{Ls={"zakon.kz":{search:"https://www.zakon.kz/search/?handler=LoadMoreNews&qsearch={q}&author=0&category=0&tag=0&perioddate=&p={page}",selectors:{container:"div.news-item",link:"a.newscard_link",title:"div.newscard__title",date:"span.newscard__date"}},"tengrinews.kz":{search:"https://tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"}},"ulysmedia.kz":{search:"https://ulysmedia.kz/search/?search_text={q}&page={page}",selectors:{container:".col-xl-3.xl-mb-20",link:"a.category__title",title:"a.category__title",date:"span.date"},browserSearch:!0},"exclusive.kz":{search:"https://exclusive.kz/?s={q}",cms:"wordpress",browserSearch:!0,external:!1},"inform.kz":{search:null,render:"https://www.inform.kz/search_results/?q={q}",api:"https://search.inform.kz/search/ru?q={q}&per_page=20&page={page}",note:"HTTP-поиск — JS-оболочка (страница равна пустому запросу ±2 длины слова, ссылок на статьи ноль); браузером та же страница даёт 17 ссылок на статьи, но ищет сайт ТОЛЬКО по заголовку — ключ в тексте его выдача не находит"},"informburo.kz":{search:null,render:"https://informburo.kz/search?q={q}",note:"HTTP-поиск — виджет Google (cse.google.com, cx=dcd9aa27056d92a81): по HTTP приходит одна и та же страница ±14 байт, ссылок на статьи ноль. Браузером та же страница даёт 11 своих результатов -> берём рендером. Материал сайту приносят карта новостей и глубина"},"liter.kz":{search:"https://liter.kz/search/?search_text={q}"},"newtimes.kz":{search:"https://newtimes.kz/search/?search_text={q}"},"vlast.kz":{search:"https://vlast.kz/search/?query={q}",browserSearch:!0,external:!1,note:"внешний забанен, но браузер-поиск работает"},"kapital.kz":{search:"https://kapital.kz/amp/search?s={q}"},"time.kz":{search:"https://time.kz/search?q={q}",browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку -> подстраховываемся браузером; внешний мёртв"},"forbes.kz":{search:"https://forbes.kz/search?q={q}&type=articles&s=data&page={page}"},"inbusiness.kz":{search:"https://inbusiness.kz/ru/search?q={q}",external:!1},"kazpravda.kz":{search:"https://kazpravda.kz/search?q={q}"},"nazarbayev.kz":{search:"https://nazarbayev.kz/ru/search?body_value={q}&title={q}&time=&created[min]=&created[max]=&field_news_type_value=All",cms:"drupal",note:"Drupal exposed filter на /ru/search (не /kk/ — тот даёт 500); есть created[min/max] для серверного фильтра дат"},"baq.kz":{search:"https://baq.kz/search/{bpage}?q={q}",browserSearch:!0,note:"server-rendered поиск, Bitrix-пагинация /search/pagenN/?q=; браузер-поиск подстрахован"},"kursiv.media":{search:"https://kz.kursiv.media/{wpage}?s={q}",cms:"wordpress",note:"WordPress-поиск /?s= (не /ru/!), пагинация /page/N/?s="},"lsm.kz":{search:null,render:"https://lsm.kz/search?q={q}",needs_js:!0,browserSearch:!0,external:!1,note:"HTTP-поиск — оболочка (±2 байта на любое слово, ссылок ноль): выдачу подгружает POST /processing с телом chapter=search&p={page}&q={q}&tag= — он отвечает и обычному запросу (18 ссылок против 6 на мусоре), но канал поиска умеет только GET, поэтому пока рендер. Дата статьи лежит в НЕСТАНДАРТНОЙ мете og:article:published_time и текстом («19 сентября 2026 года») — из-за приставки og: разбор не видел её вовсе, и сайт отдавал «без даты на странице — 48» при живых статьях (улики 24 сентября 2026, починено). Браузер-поиск строку поиска не находит"},"sputnik.kz":{search:null,external:!1,note:"поиск = React + невидимая reCAPTCHA (getmore за g-recaptcha-response) -> из fetch не взять; RSS свежак + sitemap-глубина. Внешний тоже глух (Bing не индексирует статьи)."},"total.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиск = Google CSE в iframe -> невзят; браузер-поиск через форму сайта работает"},"interfax.kz":{search:null,external:!0,note:"на сайте поиска нет -> только RSS/sitemap (свежак) + внешний Google site: по периоду"},"press.kz":{search:null,render:"https://press.kz/search?title={q}",external:!1,note:"поиск сайта — /search?title= (адрес его собственной формы, дал пользователь). ПО HTTP он результатов не отдаёт: страница приходит одна и та же (30 ссылок) при любом слове, а от пустого запроса отличается ровно на удвоенную длину слова — то есть слово только эхом печатается в форме и в заголовке, а выдачу рисует JS. Поэтому HTTP-поиск выключен, а страница берётся РЕНДЕРОМ. ?s= — это вообще главная (37 ссылок, побайтово те же). Глубину даёт карта сайта (48 адресов); статьи размечены нормально — JSON-LD с datePublished читается"},"kaztag.kz":{search:null,render:"https://kaztag.kz/ru/search/?searchid=2383993&web=0&text={q}",feed:"https://kaztag.kz/ru/news/?PAGEN_1={page}",browserSearch:!0,external:!1,note:"статьи за Cloudflare (обычным запросом не открываются -> дочитываем браузером). Поиск по сайту — виджет Яндекса (searchid=2383993), выдачу рисует JS -> берём рендером. Лента PAGEN_1 — свежак"},"orda.kz":{search:null,render:"https://orda.kz/search-results.html?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (render всё же поднимает результаты); внешний бесполезен"},"nur.kz":{search:null,feed:"https://www.nur.kz/latest/",external:!1,note:"поиска нет, sitemap заморожены; лента /latest/ (свежак). Внешний не индексирует -> отключён"},"lenta.ru":{search:"https://lenta.ru/search/v2/process?query={q}&from={off10}&size=10&sort=2&title_only=0&domain=1",external:!1,note:'служебный вход поиска отдаёт JSON (не HTML): {"matches":[{"url":…,"title":…}]}. Ссылки из него достаёт разбор JSON в extractLinks — проверено прогоном 26 сентября 2026: 118 материалов за двое суток, 112 из них не нашёл никто другой. Пагинация from= (шаг 10); дата в адресе /YYYY/MM/DD/ -> отсев без скачивания'},"rbc.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 212 117 байт по слову против 213 027 по мусору, уникальная ссылка ровно одна. Главная за антиботом (редирект на служебный путь с UUID). Материал дают карта новостей /google-news-sitemap.xml (429 записей, 315 свежих, с заголовком и датой) и глубина. Внешний поиск снят 26 сентября 2026: он отправляет наружу само ключевое слово и не дал ни строки ни в одном прогоне"},"ria.ru":{search:"https://ria.ru/services/search/getmore/?query={q}&offset={off20}",external:!1,budgetMs:12e4,note:"поиск честно ищет: 41 454 байта по слову против 179 по мусору, 20 своих ссылок против нуля. Пагинация getmore?offset= (шаг 20); дата в адресе /YYYYMMDD/ -> отсев без скачивания. В прогоне 26 сентября 2026 — 127 материалов, поиск принёс 120 (41 не нашёл никто другой). Внешний снят: он выдаёт наружу ключевое слово"},"mk.ru":{search:"https://www.mk.ru/search/?q={q}",external:!1,note:"шаблон вписан руками, потому что АВТОДЕТЕКТ ПРОМАХИВАЛСЯ: он брал оболочку («ссылок 6, совпало 0»), а /search/?q= ищет по-настоящему — на мусорное слово сайт отвечает HTTP 404, на живое 200 и 10 своих ссылок. Сайт режет частоту: в прогоне 26 сентября 2026 отдал 88 раз «перегружен» (HTTP 429), сбавленный ход отработал сам"},"kommersant.ru":{external:!1,note:"поиск сайта ищет по-настоящему: 226 795 байт по слову против 116 131 по мусору, 32 свои ссылки. Автодетект находит его сам (форма /search/results?search_query=), 34 материала за двое суток. ОГОВОРКА: выдача ссылается на статьи с хвостом ?query=…&sids=…, и тот же материал приезжает ВТОРОЙ строкой — `urlKey` служебные параметры не режет (улика 26 сентября 2026, 3 дубля из 452 строк)"},"aif.ru":{external:!1,note:"поиск сайта ищет: 139 586 байт по слову против 121 221 по мусору, 15 своих ссылок. Автодетект находит его сам (/search?text=), 26 материалов за двое суток. Плюс RSS /rss/news на 300 записей с датами"},"bfm.ru":{external:!1,note:"поиск сайта ищет: 61 613 байт по слову против 55 002 по мусору, 10 своих ссылок. Автодетект находит его сам (параметр SearchPageForm[query]). Карта новостей /sitemap_google_news.xml — 178 записей, 124 свежих, с заголовком и датой"},"vedomosti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 171 492 байта на ЛЮБОЕ слово, уникальных ссылок ноль. Материал даёт карта новостей /sitemap_google_news.xml (334 записи, 176 свежих, с заголовком и датой) и глубина — 25 материалов за двое суток"},"interfax.ru":{search:null,external:!1,note:"страница /search/?sTextShow= отдаёт ЛЕНТУ: 52 ссылки одинаковые по слову и по мусору, разница в один байт. Материал дают RSS и карты — 27 материалов за двое суток. Страницы /photo/ дат не несут (27 штук в потерях) — это фоторепортажи, а не пропуск"},"kp.ru":{search:null,external:!1,note:"/search/?q= и /search/?query= отдают HTTP 404 и одну и ту же страницу на любое слово. Материал даёт только глубина — 47 за двое суток"},"vesti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 645 679 байт на любое слово, уникальных ссылок ноль. Живой вход — карта новостей /sitemap-news.xml (919 записей, все свежие, с заголовком и датой)"},"ntv.ru":{search:null,external:!1,note:"и /finder/?keytext=, и /search/?q= отдают одну и ту же страницу в 32 056 байт на любое слово. Карта новостей — /exp/yandex/sitemap_last.jsp (2981 адрес), заголовков в ней нет, дата есть"},"1tv.ru":{external:!1,note:"типовые /search?q= — оболочка (198 989 байт на любое слово), но автодетект находит собственный поиск движка сайта и он работает: 19 материалов за двое суток. Шаблон намеренно НЕ вписан, чтобы не потерять его пагинацию"},"life.ru":{search:null,external:!1,note:"/search?q= — оболочка (184 788 байт на любое слово). Материал дают RSS (200 записей с датами) и глубина — 58 за двое суток"},"news.ru":{search:null,external:!1,note:"ПОИСК ЗАПРЕЩЁН САМИМ САЙТОМ: в robots.txt секция User-agent: * содержит Disallow: /*? и Disallow: /search/, то есть любые адреса с параметрами. Ленты и карты при этом открыты и дают материал — 50 за двое суток (RSS + карта новостей + глубина)"},"business-gazeta.ru":{search:null,external:!1,note:"/search?q= и /search?fullpage=1&q= отдают 25 690 байт на любое слово, ссылок на статьи ноль. Живой вход — RSS /rss.xml"},"fontanka.ru":{search:null,external:!1,note:"поиск по HTTP не ищет: 313 098 против 313 626 байт, слова на странице нет вовсе -> выдачу рисует скрипт. Материал даёт глубина, но за двое суток всего 2 — при 2990 статьях сайта за период мы читаем 300, то есть десятую часть"},"iz.ru":{external:!1,note:"ГЛАВНАЯ отдаёт HTTP 403 (антибот), а RSS и карты при этом открыты и работают: 59 материалов за двое суток. Поиск находит автодетект, шаблон не вписан намеренно"},"gazeta.ru":{search:null,external:!1,note:"страница поиска — заглушка на 3978 байт, ссылок ноль. Карта новостей /sitemap_news.xml — 56 адресов, все свежие. В прогоне 26 сентября 2026 сайт дал НОЛЬ при 77 честно прочитанных статьях: кандидатов нашлось всего 100, то есть вход узкий. Проверить прогоном на широком окне"},"tass.ru":{external:!1,note:"ИЗ ОБЛАЧНОЙ СЕССИИ НЕ ОТКРЫВАЕТСЯ ВОВСЕ: главная отдаёт обрубок в 1,8 КБ, robots.txt — fetch failed, карты сайта не открылись, в прогоне «каналы: none» и ноль. Это может быть репутация дата-центра, а не факт о сайте (случай Reuters) — проверить прогоном с домашней машины, прежде чем делать выводы"},"forbes.ru":{search:null,external:!1,note:"на ЛЮБОЙ адрес, включая robots.txt, отдаётся JS-заглушка антибота (13 602 байта, считает куку скриптом). В прогоне «каналы: none» и ноль. Обычным запросом сайт не взять; проверить прогоном с домашней машины"},"svpressa.ru":{external:!1,note:"форма поиска на главной ведёт на ВИДЖЕТ ЯНДЕКСА (yandex.ru/sitesearch), но автодетект находит рабочий вход сам — 6 материалов за двое суток. Своих карт новостей и RSS у сайта нет"},"ura.news":{external:!1,note:"сайт запрещает автоматический обход: robots.txt, секция User-agent: * -> Disallow: /. В предустановленный список не добавлен намеренно (решение то же, что по Reuters)"},"bbc.com":{search:null,render:"https://www.bbc.com/search?q={q}",selectors:{container:'a[data-testid="internal-link"]',title:'[data-testid="card-headline"]',date:""},external:!1,note:"SPA-поиск; язык запроса = язык сайта (Tokayev для англ.). Замер 23 сентября 2026: формы поиска в разметке главной НЕТ вовсе (её рисует скрипт), поэтому HTTP-поиск выключен, а страница берётся рендером. Материал даёт sitemap-глубина — 14 за сутки по ключу «China»"},"theguardian.com":{search:null,external:!1,note:"HTTP-поиска нет (/search отдаёт 404, формы на главной нет); материал даёт карта новостей с заголовками"},"aljazeera.com":{search:null,external:!1,note:"поиск — оболочка (страница одна и та же на любое слово), WordPress-вход отвечает 404; материал дают rss и карта новостей"},"dw.com":{search:"https://www.dw.com/search/?languageCode=en&item={q}",external:!1,note:"поиск РАБОТАЕТ, параметр item (не q). Осторожно: /search/СЛОВО — это эхо, а не поиск. Пагинация pageIndex не двигается, поэтому страниц в шаблоне нет. languageCode задаёт язык выдачи"},"cnn.com":{search:null,external:!1,note:"форма ведёт на /search?q=, но страница по слову и по мусору побайтово одинакова — выдачу рисует скрипт"},"npr.org":{search:null,external:!1,note:"поиск — оболочка. Карта новостей лежит на другом хосте (googlecrawl.npr.org) и перечислена в robots — канал глубины её берёт"},"euronews.com":{search:"https://www.euronews.com/search?query={q}",external:!1,note:"поиск РАБОТАЕТ, параметр query (/?s= и ?text= отдают ленту). В прогоне 23 сентября 2026 сайт отвечал 406 и на поиск, и на 28 статей; причина не найдена, повторить не удалось — если 406 вернётся, смотреть здесь"},"cbsnews.com":{search:null,external:!1,note:"поиск — оболочка: страницы по слову и по мусору побайтово одинаковы. На быстрый повторный запрос сайт отвечает 406 — это не «ищет», это нас придержали"},"nbcnews.com":{search:null,external:!1,note:"форма ведёт на /search/, но страница в 19 КБ и ссылок на статьи не содержит вовсе; ?s= отдаёт ЛЕНТУ (та же страница на любое слово, искомого слова на ней нет). Материал: rss и карта сайта (без заголовков — дату и ключ узнаём только скачав). Статьи читаются образцово: JSON-LD, дата и тело на месте (улики 24 сентября 2026) — прежний ноль в одном прогоне из двух был разовым отказом главной, а не поломкой"},"independent.co.uk":{search:null,external:!1,note:"/search отдаёт 404, формы на главной нет. Материал дают rss (100 записей) и карта новостей с заголовками"},"straitstimes.com":{search:null,external:!1,note:"поиск — оболочка (восемь проб, страница одна и та же). Материал дают карта новостей с заголовками и rss"},"time.com":{search:null,external:!1,note:"поиск — оболочка. В robots.txt у секции «*» нет ни одного запрета. Материал дают карта новостей и rss"},"usatoday.com":{search:null,external:!1,note:"ЭХО, а не поиск: слово на странице есть, но ссылки на статьи у страницы по слову и по мусору ОДНИ И ТЕ ЖЕ. Судить надо по ссылкам, а не по числу вхождений"},"newsweek.com":{search:null,external:!1,note:"/search?q= отвечает 406, /?s= — это главная. Материал дают rss и карта сайта"},"abcnews.com":{search:null,external:!1,note:"формы поиска на главной нет. Карта новостей — 1000 адресов с заголовками, самая объёмная из проверенных"},"abcnews.go.com":{search:null,external:!1,note:"издание переехало на abcnews.com — вписывайте новый адрес, на старом материала не будет"},"apnews.com":{search:null,external:!1,note:"403 на главную и карты — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026). Значит это НЕ репутация дата-центра, как я предполагал, а обычный отказ всем подряд; robots.txt при этом обход разрешает. Материал даёт только карта новостей — по заголовку, без скачивания"},"france24.com":{search:null,external:!1,note:"из облака 403, хотя robots.txt отдаётся и перечисляет карты новостей по языкам. Тот же класс, что apnews. Английская версия — на /en/"},"japantimes.co.jp":{search:null,external:!1,note:"403 на главную и поиск — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026), то есть отказ не по адресу обращающегося. Ищет ли /search?query= на самом деле — по-прежнему неизвестно: страницу не отдают никому. RSS работает (/feed)"},"reuters.com":{search:null,render:"https://www.reuters.com/site-search/?query={q}",external:!1,note:"поиск сайта — /site-search/?query= (адрес дал пользователь). По HTTP отдаёт 401 DataDome, выдачу рисует Arc-скрипт -> берём РЕНДЕРОМ, без пагинации (render рендерит один адрес). Из облака 401 и обычным запросом, и настоящим Chromium — это репутация дата-центра, у пользователя с домашнего адреса должно открыться. Карты сайта при этом ОТКРЫТЫ: news-sitemap отдаёт 50 записей с заголовком и точной датой, то есть материал с ключом В ЗАГОЛОВКЕ находится вообще без скачивания. Дата стоит в адресе (…-2026-09-22/) -> отсев вне периода бесплатный. В robots.txt сайт запрещает автоматический сбор (Disallow: / для всех) — решение владельца"},"khabar.kz":{search:["https://khabar.kz/ru/search/search?searchword={q}&limitstart={off20}","https://khabar.kz/kk/search/search?searchword={q}&limitstart={off20}"],browserSearch:!0,external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии, материалы у них разные). Прежняя запись «поиска нет» смотрела /search/?q= — это лента. Глубину даёт sitemap"},"nomad.su":{search:null,browserSearch:!0,external:!1,note:"по уликам: /?s= игнорирует запрос (та же страница на любое слово, ссылок-статей 0). HTTP-поиска нет; браузер-поиск работает; внешний мёртв"},"31.kz":{search:null,browserSearch:!0,noRender:!0,note:"render капчит (0 ссылок); браузер-поиск открывает форму; DDG изредка даёт (не гасим external)"},"ktk.kz":{search:null,browserSearch:!0,external:!1,feed:"/ru/News/AjaxPublications/",feedPost:"lastDate={date}",render:"https://www.ktk.kz/ru/Search/Index/?text={q}&searchid=2472426",note:"поиск сайта — виджет Яндекса (searchid=2472426, адрес дал пользователь 3 сентября 2026), выдачу рисует JS -> берём рендером. Даты виджет принимает, но НЕ применяет и сортирует по релевантности — старьё отсеиваем сами по дате в адресе, это бесплатно.главная и СТАТЬИ обычным запросом НЕ открываются вовсе -> и то, и другое через браузер. Причина названа уликой 24 сентября 2026 (архив с машины пользователя): «сертификат сайта не проверяется (UNABLE_TO_VERIFY_LEAF_SIGNATURE)», то есть цепочка сертификата не доходит до доверенного корня, а не WAF. Браузер такое лечит сам (дотягивает промежуточный сертификат), Node — нет. Ключ у ktk обычно НЕ в заголовке (проверено пользователем 2 сентября 2026), поэтому статью надо именно прочитать, иначе материал не найти. Вход к нужным датам: кнопка «Ещё новости» дёргает POST /ru/News/AjaxPublications/ с телом lastDate=ДД.ММ.ГГГГ и отдаёт кусок ленты строго СТАРШЕ этой даты (проверено живьём: 01.09.2026 -> 18 ссылок за 31 августа). ?page= и ?PAGEN_1= лента игнорирует, sitemap.xml отдаёт 404"},"camonitor.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиска нет; браузер-поиск снимает выдачу; внешний глух. Главная за WAF -> идёт через браузер (HTTP 403 подтверждён уликой 24 сентября 2026 с машины пользователя, то есть это не репутация облачного адреса), но robots/карта отдаются обычным запросом: глубину даёт sitemap (300 кандидатов)"},"dialog.kz":{search:null,feed:"https://dialog.kz/?page={page}",browserSearch:!0,external:!1,note:"главная через браузер — обычным запросом не открывается вовсе: «сертификат сайта не проверяется (UNABLE_TO_VERIFY_LEAF_SIGNATURE)», проверено уликой 24 сентября 2026 на машине пользователя (не WAF, а неполная цепочка сертификата). Пагинация ленты ?page=N (0,1,2…). Браузер-поиск отрабатывает; внешний мёртв"},"ratel.kz":{search:"https://ratel.kz/search?q={q}",external:!1,note:"РАБОЧИЙ поиск — /search?q= (проверено пользователем 2 сентября 2026). Прежняя разведка смотрела /?s=, а это ЛЕНТА: 78 ссылок и на слово, и на мусор. Дата лежит ТЕКСТОМ в div.post_news__date («Пятница, 04 Июл 2025, 12:00») — ни <time>, ни разметки"},"weproject.media":{browserSearch:!0,external:!1,note:"поиск по форме детектится; внешний мёртв, браузер-поиск подхватывает"},"esquire.kz":{browserSearch:!0,external:!1,note:"поиск по форме /search?query= отвечает обычному запросу (23 сентября 2026: 71 891 б и 6 своих ссылок против 68 561 б и нуля на мусорном слове) — прежняя заметка «HTTP-поиск таймаутит» была разовым отказом, а не фактом о сайте. Браузер-поиск живой; внешний мёртв"},"sn.kz":{browserSearch:!0,note:"HTTP-поиск (native) слабый (24 ссылки); браузер-поиск усиливает"},"zonakz.net":{dead:!0,note:"издание закрыто в 2025 году: сайт открывается, новых материалов нет (проверено пользователем 2 сентября 2026)"},"diapazon.kz":{search:"https://diapazon.kz/search?q={q}&page={page}",feed:"https://diapazon.kz/article/more-list?category=0&count=30&offset={off30}&viewType=main",feedFirst:"https://diapazon.kz/all-news",browserSearch:!0,external:!1,note:"поиск сайта — /search?q= (адрес его собственной формы), пагинация &page=N. Прежняя запись «HTTP-поиска нет» смотрела /?s= — это лента. Статьи без разметки (og:type=website) — берутся по виду адреса. Ни RSS, ни карты сайта нет: глубину даёт AJAX-лента article/more-list?offset={off30} (шаг 30, 20 страниц = 600 ссылок за прогон). feedFirst = статика /all-news как первая страница."},"arasha.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"adyrna.kz":{search:null,feed:"https://adyrna.kz/kk",render:"https://adyrna.kz/kk/search?q={q}",external:!1,note:"быстрый вход — лента на главной: 148 ссылок обычным запросом, покрывают последние 5-6 суток (пагинации нет, одной страницы хватает). Поиск сайта — виджет Google, по HTTP недоступен, поэтому запасным идёт рендер. Карта сайта свежесть НЕ показывает: lastmod у всех 65 398 адресов сегодняшний, а самые «свежие» по нему — материалы 2022-2024 годов. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"democrat.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"malim.kz":{browserSearch:!0,note:"поиск по форме — лучший канал (32 совпадения); браузер-поиск как страховка"},"astanatv.kz":{search:null,browserSearch:!1,external:!1,note:"по уликам: /kz/search/?q= отдаёт ОБЫЧНУЮ ЛЕНТУ, а не результаты — страницы для «Тоқаев» и «Токаев» побайтово одинаковы, слова в выдаче нет ни разу. Рабочего HTTP-поиска нет (23 сентября 2026 перепроверены десять типовых шаблонов, формы поиска в разметке главной тоже нет); всё даёт sitemap-глубина (19-21 материал)"},"24.kz":{search:["https://24.kz/ru/search/search?searchword={q}&limitstart={off20}","https://24.kz/kz/search/search?searchword={q}&limitstart={off20}"],external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии: издание выпускает каждое событие и по-русски, и по-казахски). Прежняя запись «поиска нет вовсе» проверяла ?q= и com_finder — не те адреса"},"politico.kz":{search:["https://politico.kz/search?q_str={q}","https://politico.kz/ru/search?q_str={q}"],browserSearch:!0,note:"поиск ЕСТЬ: q_str, ДВЕ версии — казахская в корне и русская /ru/ (материалы разные). Браузер-поиск оставлен: он единственный тяжёлый канал, где тут что-то ловилось"},"aikyn.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск по форме даёт нули; браузер-поиск живой; внешний мёртв"},"astana-akshamy.kz":{browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку; браузер-поиск подхватывает"},"aqmeshit.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"yujanka.kz":{browserSearch:!1,external:!1,note:"HTTP-поиск ?s= ищет (автодетект сам его находит — WordPress, с пагинацией); браузер-поиск строку поиска не находит вовсе — выключен; материал в основном даёт wp-api"},"qazaqstan.tv":{search:"https://qazaqstan.tv/search?query={q}",external:!1,note:"поиск ЕСТЬ и фильтрует (проверено вручную: «Тоқаев бойынша іздеу нәтижелері», вкладка Жаңалықтар + даты в карточках). Автодетект раньше цеплял не ту форму и тянул всю ленту. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ), иначе нули"},"qmonitor.kz":{dead:!0,search:"https://qmonitor.kz/search/?query={q}",external:!1,note:"сервер не принимает соединения: HTTPS не отвечает вовсе, по HTTP до него не достучаться (connection timeout), домен в DNS есть. Проверено 23 и 24 сентября 2026 с двух независимых адресов; в прогоне стоил 233 с за ноль. Поднимется — снять dead, поиск уже прописан"},"the-steppe.com":{search:"https://the-steppe.com/search?s={q}",external:!1,note:"поиск найден вручную. Ноль по «Токаев» — норма: издание про него не пишет (проверено), это не поломка канала"},"dknews.kz":{search:null,render:"https://dknews.kz/ru/gsearch?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (/ru/gsearch + #gsc.*) — из HTTP не берётся, результаты рисует JS; поднимаем рендером, как orda.kz"},"spik.kz":{search:null,feed:"https://spik.kz/{page}",browserSearch:!1,external:!1,note:"поиска на сайте НЕТ. Лента — три раздела /1, /2, /3 (по 40 статей); прежний адрес /lastnews/ отдаёт 404. Пагинации у разделов нет: /4 = 404, обход останавливается сам. Есть RSS (/rss.xml, 549 КБ) и карта новостей"},"factcheck.kz":{browserSearch:!1,external:!1,note:"WordPress-поиск детектится (82 ссылки), по слову нули; формы нет; внешний мёртв"},"petropavlovsk.news":{dead:!0,note:"домена нет в DNS (пользователь проверил 2 сентября 2026, перепроверено 23 сентября)"},"atamekenbusiness.kz":{dead:!0,note:"сайт телеканала, новостной ценности для мониторинга нет (сервер жив: 200, но ссылок-статей на главной ноль)"},"today.kz":{dead:!0,note:"сертификат сайта выписан на чужое имя (ERR_TLS_CERT_ALTNAME_INVALID) — открыть нельзя"},"taraz24.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"shymkenttv.kz":{dead:!0,note:"главная отдаёт HTTP 403 всему, включая robots.txt"},"altaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"atyraupress.kz":{dead:!0,note:"главная отдаёт HTTP 403 всему, включая robots.txt"},"timekz.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"kostanaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"ontustiknews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"aqzhayik.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"alashainasy.kz":{dead:!0,note:"издание переехало на on.kz (301 со старого домена) — вписывайте новый адрес, на старом материала не будет"},"on.kz":{external:!1,note:"бывший alashainasy.kz. Формы поиска на главной нет, типовые адреса поиска 404, карт сайта нет (любой адрес отдаёт одну и ту же страницу) — рабочего входа пока не найдено"},"masa.media":{search:"https://masa.media/ru/search?query={q}",external:!1,note:"сайт ЖИВОЙ и публикует ежедневно (проверено 23 сентября 2026) — прежняя пометка «мёртв» была неверной. Поиск /ru/search?query= отдаёт 497 своих ссылок против нуля на мусорном слове, но отдаёт их ВСЕ разом и без дат: в контрольном прогоне «ссылок 547, не влезли в бюджет канала — 430». Карт сайта и RSS у него нет: на любой адрес приходит одна и та же страница"},"azattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"radioazattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"kokshetau.asia":{browserSearch:!1,external:!1,noRender:!0,note:"WordPress-поиск таймаутит; render = 0; браузер-поиск ничего не даёт; очень медленный (210-420 с за прогон, wp-api порой не успевает стартовать) — вне списка предустановленных"},"ekaraganda.kz":{external:!1,noRender:!0,note:"поиск по форме детектится (25 ссылок), по слову нули; render капчит; внешний мёртв"},"uralskweek.kz":{browserSearch:!1,external:!1,noRender:!0,note:"поиск `?s=` РАБОТАЕТ (проверено уликами: по мусорному слову ноль совпадений); статьи без разметки дат — день берётся текстом из блока и из адреса; сайт МЕДЛЕННЫЙ, бюджеты каналов упираются во время; render = 0; внешний мёртв"},"365info.kz":{external:!1,note:"видимый поиск — виджет Google (#gsc.q=), обычным запросом не берётся и в пресет не годится; материал даёт wp-api (16 за август). WordPress-поиск + render детектятся сами; внешний мёртв"},"almaty.tv":{external:!1,note:"HTTP-поиск (native) детектится сам; внешний мёртв"},"mgorod.kz":{external:!1,note:"HTTP-поиск (native) отрабатывает; внешний мёртв"},"aktobetimes.kz":{external:!1,note:"RSS + автопоиск; внешний мёртв"},"egemen.kz":{search:null,render:"https://egemen.kz/search?q={q}",external:!1,note:"HTTP-поиск — оболочка (199 536 б на любой запрос, слова на странице нет вовсе); браузером тот же адрес даёт 10 своих результатов -> берём рендером. След на будущее: /api/search?q={q}&page={page}&limit=10 отвечает JSON, но ссылок в нём нет — только slug. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"turkystan.kz":{note:"HTTP-поиск (native) отрабатывает; браузер-поиск память ещё не разобрала"}};i(da,"lookupKnown")});function il(e){typeof e=="function"&&(Ms=e)}function cl(e){e&&typeof e.get=="function"&&typeof e.set=="function"&&(Yt=e)}function dl(e){typeof e=="function"&&(Wn=e)}function ul(e){typeof e=="function"&&(ll=e)}async function yn(e,{groups:t,exclude:n,fromD:r,toD:s,originHost:o,channelLabel:a,deadline:c,maxFetch:d=80,browserFallback:l=!1,browserBudget:p=null,diag:f=null,tally:u=null,pick:h=null,have:m=null}){let w=i(D=>{u&&(u[D]=(u[D]||0)+1)},"tick"),g=i(D=>{if(!u)return;let $=[];try{$=new URL(D).pathname.toLowerCase().split("/").filter(Boolean)}catch{return}let A=$.find(de=>!/^[a-z]{2}$/.test(de)&&!/^\d+$/.test(de));A&&((u.noDateWhere||(u.noDateWhere={}))[A]=(u.noDateWhere[A]||0)+1)},"tickSection"),b=Vn(t),y=n||[],L=l?1:4,v=Symbol("добрать браузером"),T=i(()=>l||p&&p.left>0,"canBrowser"),k=3,x=typeof process<"u"&&process.env&&Number(process.env.MC_SLOW_GAP_MS)||400,C=25,E=u&&(u._slow||(u._slow={}))||{};E.resets===void 0&&Object.assign(E,{resets:0,on:!1,saved:0,tried:0,chain:null,why:{}});let I=i(D=>{let $=(E.chain||Promise.resolve()).then(()=>ba(x)).then(D);return E.chain=$.then(()=>{},()=>{}),$},"chained"),N=i(D=>E.on?I(D):D(),"paced"),R=i((D,$)=>{if(ya(D))return w("listing"),$&&($.verdict="раздел сайта, не статья (видно по адресу)",f.push($)),!0;if(Wc(D))return w("listing"),$&&($.verdict="это файл, а не страница (видно по адресу)",f.push($)),!0;let A=ye(Yt.get(D));if(A&&!Ve(A,r,s))return w("staleDate"),$&&($.verdict="дата вне периода (из памяти дат)",$.date=Yt.get(D),$.parsed=X(A),f.push($)),!0;if(!A&&(r||s)){let de=Dt(D);if(de&&(r&&+de<+r-864e5||s&&+de>+s+864e5))return w("urlDateOut"),$&&($.verdict="дата вне периода (видно по адресу)",$.parsed=X(de),f.push($)),!0}return!1},"cheapSkip"),B=i(async(D,$)=>{let A=f?{url:D,channel:a}:null;if(c&&Date.now()>c)return w("late"),A&&(A.verdict="не успели (бюджет времени)",f.push(A)),null;let de=[],ae=$?null:await N(()=>Ds(D,de)),ie=!ae&&!$?ef(de[0]):null;if(ie&&(E.resets++,E.why[ie]=(E.why[ie]||0)+1,!E.on&&E.resets>=k&&(E.on=!0),E.tried<C&&(E.tried++,de.length=0,ae=await I(()=>Ds(D,de)),ae&&E.saved++)),!ae&&$&&T()){p&&p.left--;let be=await Wn(D);ae=be&&be.ok?be.html:null,ae&&w("viaBrowser")}if(!ae&&!$&&T())return v;if(!ae)return w("noOpen"),u&&de[0]&&(u.noOpenWhy=u.noOpenWhy||{},u.noOpenWhy[de[0]]=(u.noOpenWhy[de[0]]||0)+1),A&&(A.verdict="не открылась"+(de[0]?" ("+de[0]+")":" (WAF/таймаут/404)"),f.push(A)),null;let Q=la(ae,D,h&&h.hint);if(!Q)return!Uc(ae)&&!Ts(D)?(w("notArticle"),A&&(A.verdict="не статья (меню/категория/оболочка), даты на ней тоже нет",f.push(A)),null):(w("noDate"),g(D),A&&(A.verdict="дата не найдена на странице",f.push(A)),null);if(h&&Q.dateVia&&(h.seen[Q.dateVia]=(h.seen[Q.dateVia]||0)+1),!Q.isArticle&&!Ts(D))return w("notArticle"),A&&(A.verdict="не статья (меню/категория/оболочка)",A.title=Q.title||"",f.push(A)),null;if(qc(Q.title))return w("notArticle"),A&&(A.verdict="подборка по теме, а не материал",A.title=Q.title||"",f.push(A)),null;if(Q.date&&Yt.set(D,Q.date),Q._hay=((Q.title||"")+" "+(Q.description||"")+" "+(Q.body||"")).toLowerCase(),A){let be=ye(Q.date);A.title=(Q.title||"").slice(0,80),A.date=Q.date||"",A.parsed=X(be),A.inRange=Ve(Q.date,r,s),A.hasKw=Ze(Q._hay,t),A.hasExclude=y.length?Ze(Q._hay,y):!1,A.verdict=A.parsed?A.inRange?A.hasExclude?"минус-слово":A.hasKw?"ВЗЯТА":"ключа нет в тексте":"дата вне периода":"дата не распознана",f.push(A)}return Q},"handle"),U=[],Z=[];for(let D of e){let $=f?{url:D,channel:a}:null;if(m&&m.has(Se(D))){w("dupe"),$&&($.verdict="её уже принёс другой канал — второй раз не качаем",f.push($)),Z.push(D);continue}R(D,$)||U.push(D)}if(U.length>d){for(let D=d;D<U.length;D++)w("overBudget"),f&&f.push({url:U[D],channel:a,verdict:"не влезла в бюджет канала"});e=U.slice(0,d)}else e=U;let ve=await Ns(e,L,D=>B(D,!1)),Me=ve.filter(D=>D!==v),Ce=e.filter((D,$)=>ve[$]===v);if(Ce.length)for(let D of await Ns(Ce,1,$=>B($,!0)))D!==v&&Me.push(D);let P=null,G=[];for(let D of Me){if(!D)continue;let $=ye(D.date);if($&&(!P||$>P)&&(P=$),!Ve(D.date,r,s)){w("outOfPeriod");continue}if(y.length&&Ze(D._hay,y)){w("excluded");continue}if(!Ze(D._hay,t)){w("noKw");continue}w("taken");let A=Ze((D.title||"").toLowerCase(),t)?"title":"body",de=vn((D.description||"")+" "+(D.body||"")+" "+(D.title||""),D.title,b);G.push({source:o,title:D.title,url:D.url,date:D.date,channel:a,match:A,snippet:de})}for(let D of Z)G.push({url:D,channel:a,_dupe:!0});return{rows:G,newest:P}}function tl(e){if(!e)return!1;let t=String(e).slice(0,4e3);return/<title[^>]*>\s*(just a moment|attention required|подожд|один момент)/i.test(t)||/id="(challenge-running|cf-challenge-running|cf-please-wait|challenge-form|turnstile-wrapper)"/i.test(t)||/cf-browser-verification|_cf_chl_opt|\/cdn-cgi\/challenge-platform/i.test(t)?!0:/just a moment|checking your browser|verifying you are human|проверка браузера/i.test(t)&&String(e).length<6e4}async function Yh(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),hl);try{let s=await fetch(e,{method:"POST",redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",...Es},body:t,signal:n.signal});return s.ok?await s.text():null}catch{return null}finally{clearTimeout(r)}}function Jh(e){let t=i(n=>String(n).padStart(2,"0"),"p");return t(e.getDate())+"."+t(e.getMonth()+1)+"."+e.getFullYear()}async function Xh(e,t=2){for(let n=0;;n++){let r=new AbortController,s=setTimeout(()=>r.abort(),hl);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...Es},signal:r.signal});if((o.status===429||o.status===503)&&n<t){clearTimeout(s),await ba(1e3*(n+1));continue}if(!o.ok)throw new Error("HTTP "+o.status);return await o.text()}finally{clearTimeout(s)}}}async function yt(e){try{return await Xh(e)}catch{return null}}async function Ds(e,t){let n=await ma(e);return!n.ok&&t&&t.push(n.err?n.err:"HTTP "+n.status),n.ok?n.text:null}function Qh(e,t){let n=ye(e),r=ye(t);return!n||!r?!1:X(n)===X(r)}function Or(e){if(!e)return"неизвестная ошибка";if(e.name==="AbortError")return"таймаут";let t=e;for(let s=0;s<5&&t&&t.cause&&typeof t.cause=="object";s++)t=t.cause;let n=String(t&&t.code||e&&e.code||""),r=String(t&&t.message||e&&e.message||e);return nl[n]?nl[n]+" ("+n+")":n||(/certificat|ssl|tls/i.test(r)?"ошибка TLS: "+r.slice(0,80):r.slice(0,120))}function ef(e){return Zh(e)?"рвал соединение":_h(e)?"отвечал «перегружен»":null}async function Cs(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...Es},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Or(r)}}finally{clearTimeout(n)}}async function ma(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{...Es},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Or(r)}}finally{clearTimeout(n)}}async function nf(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),2e4),s={...tf};t&&(s.Referer=t);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:s,signal:n.signal});return{ok:o.ok,status:o.status,text:o.ok?await o.text():""}}catch(o){return{ok:!1,status:0,err:Or(o)}}finally{clearTimeout(r)}}function Ye(e){try{return new URL(e).host.replace(/^www\./,"")}catch{return e}}function ya(e){let t;try{t=new URL(e)}catch{return!1}if(/[?&]page=\d+/i.test(t.search))return!0;let n=t.pathname.toLowerCase().replace(/\/+$/,"").split("/").filter(Boolean);if(n.some(o=>/^(cat|cats|tag|tags|category|categories|rubric|rubrics|topic|topics|section|sections|archive|archives|author|authors|search|label|labels|feed|rss|page|person|persons|people|persona|personalii|theme|themes|tema|temy)$/.test(o))||(()=>{let o=n.findIndex(l=>/^(19|20)\d\d$/.test(l));if(o<0)return 0;let a=n.slice(o);if(a.length<2||a.length>3)return 0;let c=/^(0?[1-9]|1[0-2])$/.test(a[1]||""),d=a.length<3||/^(0?[1-9]|[12]\d|3[01])$/.test(a[2]);return c&&d?a.length:0})())return!0;let s=n[n.length-1]||"";return!!(n.length<=2&&s&&!/[-_]/.test(s)&&!/\d/.test(s)&&s.length<=16)}function As(e){let t=String(e||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|sections?|pages?|weather|pogoda|search|ingredients?|images?|img|photos?|gallery|video|media|podcasts?)\b/i.test(t.replace(/[-_.]/g," "))}function rf(e){let t=/(20\d{2})[^\d]?(0[1-9]|1[0-2])?/,n=String(e||"");try{n=new URL(n,"https://x").pathname}catch{}let s=n.slice(n.lastIndexOf("/")+1).match(t)||n.match(t);return s?{y:+s[1],mo:s[2]?+s[2]:0}:null}function sf(e,t){let n=e&&t?+t-+e:0,r=n>0?Math.max(1,Math.round(n/864e5)):0;return r?r<=2?{days:r,maxCands:300,budgetMs:9e4}:r<=6?{days:r,maxCands:600,budgetMs:18e4}:{days:r,maxCands:1e3,budgetMs:3e5}:{days:0,maxCands:300,budgetMs:9e4}}function jr(e){try{let t=new URL(e),n=[];return t.searchParams.forEach((r,s)=>{/^(from|utm_|_openstat|ysclid|fbclid|gclid|yclid)/i.test(s)&&n.push(s)}),n.forEach(r=>t.searchParams.delete(r)),t.hash="",t.toString()}catch{return String(e||"").split("#")[0]}}function of(e){return e.length>=2&&/[A-Za-zА-Яа-яЁё]/.test(e)&&e===e.toUpperCase()&&e!==e.toLowerCase()}function af(e){let t=["а","я","и","ы","е","о","у","ю","й","ь"];for(let n of t)if(e.length-1>=4&&e.endsWith(n))return e.slice(0,-1);return e}function cf(e,t){let n=of(e),r=e.toLowerCase();return t&&!n&&r.length>=5&&(r=af(r)),{text:r,whole:n}}function Jt(e,t){return(e||"").split(/[,;\n]+/).map(n=>n.trim()).filter(Boolean).map(n=>{let r=n.match(/^["'«](.+)["'»]$/);return r?{words:[{text:r[1].toLowerCase().trim(),whole:!1}]}:{words:n.split(/\s+/).filter(Boolean).map(s=>cf(s,t))}})}function lf(e,t){if(!t.text)return!1;if(!t.whole)return e.includes(t.text);if(t._re===void 0)try{t._re=new RegExp("(?<![\\p{L}\\p{N}])"+t.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}\\p{N}])","u")}catch{t._re=null}return t._re?t._re.test(e):(" "+e+" ").includes(" "+t.text+" ")}function Ze(e,t){return t.length?t.some(n=>n.words.every(r=>lf(e,r))):!0}function Vn(e){return e.flatMap(t=>t.words.map(n=>n.text))}function Kn(e,t,n=150){let r=(e||"").replace(/\s+/g," ").trim();if(!r)return"";let s=r.toLowerCase(),o=-1;for(let d of t){let l=s.indexOf(d);l>=0&&(o<0||l<o)&&(o=l)}if(o<0)return r.slice(0,n);let a=Math.max(0,o-60),c=Math.min(r.length,o+90);return(a>0?"…":"")+r.slice(a,c).trim()+(c<r.length?"…":"")}function pa(e){let t=String(e&&e.snippet||"").trim(),n=String(e&&e.title||"").trim();return n?t?Rs(t).includes(Rs(n))?t:t+" "+n:n:t}function vn(e,t,n,r=150){let s=Kn(e,n,r),o=Rs(s),a=Rs(t);return!o||o===a||a&&a.includes(o)||a&&o.startsWith(a)&&o.length-a.length<df?"":s}function uf(e,t){let n=String(e||"");return n=n.split(/\s+https?:/i)[0],n=n.replace(/\s*[›»].*$/,""),n=n.replace(/\s*\|\s*[^|]*$/,""),t&&(n=n.replace(new RegExp("\\s*[-–—]\\s*"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*$","i"),"")),n.replace(/\s+/g," ").trim()}function rl(e,t){let n=(e||"").toLowerCase().replace(/\s+/g," "),r=n.search(/\s[—–·]\s/);r>=0&&r<90&&(n=n.slice(r+3));let s=-1,o="";for(let c of t){if(!c)continue;let d=n.indexOf(c);d>=0&&(s<0||d<s)&&(s=d,o=c)}if(s<0)return{b:"",a:""};let a=i(c=>c.replace(/[^\p{L}\p{N} ]+/gu," ").replace(/\s+/g," ").trim(),"norm");return{b:a(n.slice(Math.max(0,s-40),s)),a:a(n.slice(s+o.length,s+o.length+40))}}function pf(e){let t=String(e).trim();/^https?:\/\//i.test(t)||(t="https://"+t);try{return new URL(t).origin}catch{return null}}function hf(e){try{let t=new URL(e);return t.host=t.host.startsWith("www.")?t.host.slice(4):"www."+t.host,t.origin}catch{return null}}function ff(e,t){let n=String(e||"");try{let r=new URL(n,"https://www.bing.com");if(/\/ck\/a/i.test(r.pathname)){let o=r.searchParams.get("u")||"";for(/^a1/i.test(o)&&(o=o.slice(2)),o=o.replace(/-/g,"+").replace(/_/g,"/");o.length%4;)o+="=";try{let a=typeof atob=="function"?atob(o):Buffer.from(o,"base64").toString("binary");/^https?:\/\//i.test(a)&&(n=a)}catch{}}let s=new URL(n).host.replace(/^www\./,"");if(s===t||s.endsWith("."+t))return n.split("#")[0]}catch{}return null}function fl(){Gn=0,Pr=0,ga=!1}async function gf(e,t){if(ga)return{ok:!1,status:0,err:"ddg: пропущен (частота ограничена)",gaveUp:!0};let n=Date.now();Gn<n&&(Gn=n);let r=Gn;Gn+=2500,r-n>0&&await mf(r-n);let s=await nf(e,t),o=s.text||"";return!s.ok||/anomaly|are you a robot|too many requests|captcha/i.test(o)||o.length<22*1024&&!/result__a/i.test(o)?(Pr++,Gn=Date.now()+Math.min(Pr*4e3,2e4),Pr>=4&&(ga=!0)):Pr=0,s}function wf(e){try{let t=String(e).replace(/&amp;/g,"&"),n=t.match(/[?&]uddg=([^&]+)/i);if(n)try{t=decodeURIComponent(n[1])}catch{}return t.startsWith("//")&&(t="https:"+t),t}catch{return e}}function bf(e,t){let n=String(e),r=[],s=new Set,o=i(d=>Ct(String(d).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()),"clean"),a=i((d,l,p)=>{let f=wf(d),u;try{u=new URL(f).host.replace(/^www\./,"")}catch{return}if(u!==t&&!u.endsWith("."+t))return;let h=f.split("#")[0];s.has(h)||(s.add(h),r.push({url:h,title:l||"",snippet:p||""}))},"push"),c=n.split(/class="result__a"/i).slice(1);for(let d of c){let l=d.match(/href="([^"]+)"/i);if(!l)continue;let p=d.match(/>([\s\S]*?)<\/a>/i);a(l[1],p?o(p[1]):"")}if(!r.length){for(let l of n.match(/uddg=[^"&\s]+/gi)||[])a("//x?"+l);let d=new RegExp("https?://(?:www\\.)?"+t.replace(/\./g,"\\.")+`/[^"'\\s<>]+`,"gi");for(let l of n.match(d)||[])a(l)}return r}async function Ns(e,t,n){let r=[],s=0;async function o(){for(;s<e.length;){let a=s++;try{r[a]=await n(e[a])}catch{r[a]=null}}}return i(o,"worker"),await Promise.all(Array.from({length:Math.min(t,e.length||1)},o)),r}function ml(e,t){let n=/^https:/i.test(String(t||"")),r=[];for(let s of String(e||"").split(`
`)){if(!/^\s*sitemap:/i.test(s))continue;let o=s.replace(/^\s*sitemap:/i,"").trim();o&&(n&&/^http:\/\//i.test(o)&&r.push(o.replace(/^http:/i,"https:")),r.push(o))}return[...new Set(r)]}function yf(e){let t=e.match(/<div[^>]+id=["']webkit-xml-viewer-source-xml["'][^>]*>([\s\S]*?)<\/div>/i);return t?t[1]:e}function vf(e){return async t=>{let n=await yt(t);if(n)return n;if(!e)return null;let r=await Wn(t);return!r||!r.ok||!r.html?null:yf(r.html)}}async function xf(e,t,n=yt){let r=ml(t,e),s=[...new Set([...r.filter(o=>/news|last-news|google|yandex|turbo/i.test(o)),e+"/news-sitemap.xml",e+"/google-news-sitemap.xml",e+"/sitemap-google.xml",e+"/sitemap-yandex.xml",e+"/sitemap-news.xml"])];for(let o of s){let a=await n(o);if(!a)continue;let c=await gl(a,0);if(c.length)return c}return[]}async function kf(e,t,n,r,s){let{maxMaps:o=40,maxCands:a=300,maxCollect:c=Math.max(a*10,2e3),deadline:d,fetchText:l=yt,blindOk:p=!0,slugHints:f=[],collectStats:u={}}=s||{},h=n?+n:-1/0,m=r?+r:1/0,w=0,g=i(P=>{let G=ye(Yt.get(P));return!G||Ve(G,n,r)?!1:(w++,!0)},"staleByMemory"),b=Number.isFinite(m)?m+21*864e5:1/0,y=ml(t,e),L=[...new Set([...y,e+"/sitemap.xml",e+"/sitemap_index.xml",e+"/sitemap-index.xml",e+"/sitemapindex.xml",e+"/sitemap/sitemap.xml"])].sort((P,G)=>(As(P)?1:0)-(As(G)?1:0)),v=[],T=[],k=new Set,x=0,C=i(P=>{let G=P?ye(P):null,D=G?+G:NaN;return Number.isFinite(D)?D>=h&&D<=b:!0},"childInRange");async function E(P,G){if(x>=o||v.length>=c||d&&Date.now()>d||k.has(P))return;k.add(P);let D=await l(P);if(!D)return;if(x++,/<sitemapindex/i.test(D)&&G<3){let ae=i(ke=>rf(ke.loc),"ymOf"),ie=i(ke=>{if(ke.lastmod)return String(ke.lastmod);let pe=ae(ke);return pe?pe.y+"-"+String(pe.mo).padStart(2,"0"):""},"keyOf"),Q=n?n.getFullYear():-1/0,be=r?r.getFullYear():1/0,at=i(ke=>{if(ke.lastmod)return C(ke.lastmod);let pe=ae(ke);return pe?pe.y>=Q&&pe.y<=be:!0},"kidOk"),nt=Jc(D).filter(at).sort((ke,pe)=>ie(pe).localeCompare(ie(ke))).sort((ke,pe)=>(As(ke.loc)?1:0)-(As(pe.loc)?1:0));if(nt.length>1&&nt.every(ke=>!ie(ke))){let ke=ua(nt);nt.length=0,nt.push(...ke)}for(let ke of nt)if(await E(new URL(ke.loc,P).href,G+1),x>=o||v.length>=c||d&&Date.now()>d)break;return}let $=[],A=[],de=0;for(let ae of Yc(D)){let ie;try{ie=new URL(ae.loc,P).href}catch{continue}if(ya(ie)||g(jr(ie)))continue;let Q=ae.lastmod?+ye(ae.lastmod):NaN;if(!Number.isFinite(Q))try{if(new URL(ie).pathname==="/")continue}catch{}if(Number.isFinite(Q)){if(Q<h||Q>m)continue;$.push({loc:jr(ie),lm:ae.lastmod});continue}let be=Dt(ie);if(be){de++;let at=+be;if(at<h||at>m)continue}A.push({loc:jr(ie),lm:""})}if(!$.length&&!de&&A.length){for(let ae of ua(A)){if(T.length>=c)break;T.push(ae)}return}for(let ae of $)if(v.push(ae),v.length>=c)return;for(let ae of ua(A))if(v.push(ae),v.length>=c)return}i(E,"walk");for(let P of L)if(await E(P,0),v.length>=c||x>=o)break;if(p)for(let P of T){if(v.length>=c)break;v.push(P)}let I=new Map;for(let P of v)I.has(P.loc)||I.set(P.loc,P);let N=[...I.values()].sort((P,G)=>String(G.lm).localeCompare(String(P.lm)));w&&(u.stale=w),u.pool=N.length,u.capped=N.length>=c,u.roots=L.length,u.maps=x;let R=i(P=>{let G=P.lm&&ye(P.lm)||Dt(P.loc);return G&&X(G)||""},"dayOf"),B=i(P=>f.length>0&&f.some(G=>P.loc.toLowerCase().includes(G)),"hinted"),U=i(P=>{u.nodate=P.filter(D=>!R(D)).length;let G=P.filter(B).length;return G?u.hinted=G:delete u.hinted,P},"finish");if(N.length<=a)return U(N);let Z=new Map;for(let P of N){let G=R(P);Z.has(G)||Z.set(G,[]),Z.get(G).push(P)}for(let P of Z.values())P.sort((G,D)=>(B(D)?1:0)-(B(G)?1:0));let ve=[...Z.keys()].filter(Boolean).sort().reverse(),Me=Z.get("")||[],Ce=[];for(let P=0;Ce.length<a;P++){let G=0;for(let D of ve){let $=Z.get(D);if(P<$.length&&(Ce.push($[P]),G++,Ce.length>=a))break}if(!G)break}for(let P of Me){if(Ce.length>=a)break;Ce.push(P)}return U(Ce)}async function gl(e,t){let n=Xc(e).filter(r=>r.title&&r.date);if(n.length)return n;if(t<1&&/<sitemapindex/i.test(e)){let r=(e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[]).map(s=>({loc:(s.match(/<loc>([^<]+)<\/loc>/)||[])[1]?.trim(),lm:(s.match(/<lastmod>([^<]+)<\/lastmod>/)||[])[1]||""})).filter(s=>s.loc);r.sort((s,o)=>String(o.lm).localeCompare(String(s.lm)));for(let s of r.slice(0,5)){let o=await yt(s.loc);if(o&&(n.push(...await gl(o,t+1)),n.length>500))break}}return n}function wl(e,t){let n=e.match(/<form\b[\s\S]*?<\/form>/gi)||[],r=null,s=0;for(let a of n){if(/method\s*=\s*["']post["']/i.test(a))continue;let c=(a.match(/\baction\s*=\s*["']([^"']*)["']/i)||[])[1]||"",d=(a.match(/class\s*=\s*["']([^"']*)["']/i)||[])[1]||"",l=a.match(/<input\b[^>]*>/gi)||[],p=null,f=-1,u=[];for(let m of l){let w=((m.match(/\btype\s*=\s*["']([^"']+)["']/i)||[])[1]||"text").toLowerCase(),g=(m.match(/\bname\s*=\s*["']([^"']+)["']/i)||[])[1];if(!g)continue;if(w==="hidden"){u.push([g,(m.match(/\bvalue\s*=\s*["']([^"']*)["']/i)||[])[1]||""]);continue}if(/submit|button|checkbox|radio|image|file/.test(w))continue;let b=0;w==="search"&&(b+=3),/^(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)$/i.test(g)?b+=2:/search|query|поиск|іздеу/i.test(g)&&(b+=1),b>f&&(f=b,p=g)}if(!p||f<=0)continue;let h=f;/role\s*=\s*["']search["']/i.test(a)&&(h+=2),/search|query|поиск|іздеу/i.test(c)&&(h+=2),/search|query|поиск/i.test(d)&&(h+=1),h>s&&(s=h,r={action:c,qname:p,hidden:u})}if(!r)return null;let o;try{o=new URL(r.action||"/",t)}catch{return null}for(let[a,c]of r.hidden)if(c&&a!==r.qname)try{o.searchParams.set(a,c)}catch{}return o.searchParams.set(r.qname,"__MCQ__"),o.toString().replace("__MCQ__","{q}")}function sl(e,t,n,r){if(!e)return{ok:!1,why:"нет ответа"};let s=new Set(Un(e,n));if(s.size===0)return{ok:!1,realN:0,junkN:0,uniqueN:0,why:"ссылок-статей нет (оболочка/JS-выдача)"};let o=t?new Set(Un(t,n)):new Set,a=0;for(let d of s)o.has(d)||a++;let c={realN:s.size,junkN:o.size,uniqueN:a};if(r){let d=String(r).toLowerCase().split(/\s+/).filter(Boolean)[0]||"",l=d.length>5?d.slice(0,Math.max(5,d.length-2)):d;if(l&&!e.toLowerCase().includes(l))return{...c,ok:!1,why:"искомого слова нет в выдаче (это лента, а не результаты)"}}return o.size===0?{...c,ok:!0,why:"мусорный запрос пуст"}:a>=2?{...c,ok:!0,why:"выдача отличается от мусорной"}:{...c,ok:!1,why:"та же страница, что и на мусорный запрос (параметр игнорируется)"}}async function ha(e,t,n){let r=encodeURIComponent;if(n){let d=[].concat(n).filter(h=>typeof h=="string"&&h),l=i(h=>{let m=h.indexOf("#");return m>=0&&h.indexOf("{q}")>m},"hashOnly"),p=d.filter(l);if(d=d.filter(h=>!l(h)),!d.length)return p.length?{kind:"none",warn:"ключ в шаблоне стоит после «#» — такой адрес серверу не передаётся, выдачу рисует скрипт в браузере (нужен render)"}:null;let f=i(h=>(m,w)=>h.replace(/\{q\}/g,r(m)).replace(/\{page\}/g,w).replace(/\{off(\d+)\}/g,(g,b)=>(w-1)*+b).replace(/\{wpage\}/g,w<=1?"":`page/${w}/`).replace(/\{bpage\}/g,w<=1?"":`pagen${w}/`),"mk"),u=d.map(f);return{kind:"override",hasPage:d.some(h=>/\{page\}|\{off\d+\}|\{wpage\}|\{bpage\}/.test(h)),builds:u,build:u[0]}}let s=wl(t,e);if(s){let d=await yt(s.replace("{q}",r("президент"))),l=await yt(s.replace("{q}",r("qwszxcvnonsense12345")));if(sl(d,l,e,"президент").ok){let p=s.includes("?")?"&":"?";return{kind:"form",hasPage:!0,build:i((f,u)=>u<=1?s.replace("{q}",r(f)):s.replace("{q}",r(f))+p+"page="+u,"build")}}}if(zc(t))return{kind:"wordpress",hasPage:!0,build:i((d,l)=>l<=1?`${e}/?s=${r(d)}`:`${e}/page/${l}/?s=${r(d)}`,"build")};let o=["/search/?text=","/search/?q=","/search/?search_text=","/search/?query=","/search?text=","/search?q=","/search?search_text=","/search?query=","/search_results/?q=","/search_results/?text=","/results/?q=","/?s=","/?q=","/?query=","/?search_text=","/?searchword="],a=[];for(let d of String(t||"").matchAll(/href="\/(ru|kz|kk|en)\//g))a.includes("/"+d[1])||a.push("/"+d[1]);if(a.length)for(let d of a.slice(0,2))for(let l of["/search/?q=","/search/?text=","/search/?query=","/search?q="])o.push(d+l);let c=Date.now();for(let d of o){if(Date.now()-c>2e4)break;let l=await yt(e+d+r("президент")),p=await yt(e+d+r("qwszxcvnonsense12345"));if(sl(l,p,e,"президент").ok){let f=e+d,u=d.includes("?")?"&":"?";return{kind:"native",hasPage:!0,build:i((h,m)=>m<=1?f+r(h):`${f}${r(h)}${u}page=${m}`,"build")}}}return null}function va(e){let t=String(e||"").trim();if(/^@[A-Za-z0-9_]{4,}$/.test(t))return t.slice(1);let n=t.match(/(?:t|telegram)\.me\/(?:s\/)?(@?[A-Za-z0-9_]{4,})/i);if(n){let r=n[1].replace(/^@/,"");if(!/^(s|joinchat|addstickers|addemoji|proxy|share|iv|setlanguage|bg)$/i.test(r))return r}return null}function Sf(e,t){let n=[],r=/data-post="[^"/]+\/(\d+)"([\s\S]*?)(?=data-post="|$)/g,s;for(;s=r.exec(e);){let o=+s[1],a=s[2],c=a.match(/<time[^>]+datetime="([^"]+)"/),d=a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div class="tgme_widget_message_(?:footer|reply|info)|<\/div>)/)||a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/),l=d?d[1]:"";l=l.replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,""),l=Ct(l).replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim(),o&&c&&n.push({id:o,url:"https://t.me/"+t+"/"+o,date:c[1],text:l})}return n}async function Lf(e,t){let n=t.morph!==!1,r=Jt(t.keyword,n),s=Jt(t.exclude||"",n),o=Vn(r),a=i(k=>Ze((k||"").toLowerCase(),r),"hasKw"),c=i(k=>s.length>0&&Ze((k||"").toLowerCase(),s),"hasExclude"),d=Bn(t.from),l=Rr(t.to),p=Tf+e,f=[],u=[],h=new Set,m=45e3,w=80,g=null,b=!1,y=0,L=0,v=Date.now(),T="";for(;!b&&y<w&&Date.now()-v<m;){y++;let k=g?p+"?before="+g:p,x=await ma(k);if(!x.ok&&(x.status===429||x.status>=500)&&(await ba(1500),x=await ma(k)),!x.ok){let N=x.status?"HTTP "+x.status:x.err||"не ответил";T=y===1?"канал не открылся ("+N+") — частный/не существует?":"лента оборвалась на "+y+"-й странице ("+N+")";break}let C=Sf(x.text,e);if(!C.length){T=y===1?"постов не видно (частный канал? нужен t.me/s/)":"лента кончилась";break}L+=C.length;let E=null,I=null;for(let N of C){let R=ye(N.date);if(R&&(!E||R<E)&&(E=R),(I===null||N.id<I)&&(I=N.id),h.has(N.id)||(h.add(N.id),!Ve(N.date,d,l))||!N.text||!a(N.text)||c(N.text))continue;let B=R?R.toISOString():"",U=N.text.split(`
`)[0].slice(0,90)||"(без текста)";f.push({source:"t.me/"+e,title:U,url:N.url,date:B,channel:"telegram",match:"post",snippet:vn(N.text,U,o)})}if(d&&E&&E<d&&(b=!0,T="дошли до начала периода"),!b&&(I===null||I===g)){T="лента не листается дальше";break}g=I}return T||(T=y>=w?"упёрлись в "+w+" страниц":"стоп по времени (45 с)"),u.push(`постов просмотрено ${L} (страниц ${y}, ${T}), совпало ${f.length}`),{rows:f,channel:"telegram",note:u.filter(Boolean).join("; ")}}function Af(e,t){let n=0,r=!1,s=!1;for(let o=t;o<e.length;o++){let a=e[o];if(r)s?s=!1:a==="\\"?s=!0:a==='"'&&(r=!1);else if(a==='"')r=!0;else if(a==="{")n++;else if(a==="}"&&--n===0)return e.slice(t,o+1)}return null}function Mf(e){let t=e.indexOf("ytInitialData");if(t<0)return null;let n=e.indexOf("=",t),r=e.indexOf("{",n);if(n<0||r<0)return null;let s=Af(e,r);try{return s?JSON.parse(s):null}catch{return null}}function wa(e,t){if(!(!e||typeof e!="object"))if(e.videoRenderer&&e.videoRenderer.videoId&&t.push(e.videoRenderer),Array.isArray(e))for(let n of e)wa(n,t);else for(let n in e)wa(e[n],t)}function Rf(e){let t=String(e||"").toLowerCase();return/секунд|минут|час|sec|min|hour|сағат|мину?т|только что|сейчас|сегодня|today|бүгін/.test(t)?0:/недел|апта|week/.test(t)?7:/месяц|month|\bай\b/.test(t)?31:/год|лет|жыл|year/.test(t)?366:/дн|день|сутк|күн|тәулік|day|вчера|yesterday|кеше/.test(t)?1:31}function Nf(e){let t=String(e||""),n=/"uploadDate"\s*:\s*"([^"]{4,40})"/.exec(t);return n||(n=/itemprop="(?:datePublished|uploadDate)"[^>]*content="([^"]{4,40})"/.exec(t)),n||(n=/<meta[^>]+content="([^"]{4,40})"[^>]*itemprop="(?:datePublished|uploadDate)"/.exec(t)),n?ye(n[1]):null}function Ef(e,t,n=new Date){let r=fa.indexOf(e)>=0?e:"month";if(!(t?ye(t):null))return r;let o=(n.getTime()-Bn(t).getTime())/864e5,a=o<=1?"today":o<=7?"week":o<=31?"month":"year";return fa.indexOf(a)>fa.indexOf(r)?a:r}async function bl(e,t){let n=t&&t.ytRange||"month",r=Ef(n,t&&t.from),s=t.morph!==!1,o=Jt(e,s),a=Jt(t.exclude||"",s),c=Vn(o),d=ol[r]||ol.month,l=`${al}/results?search_query=${encodeURIComponent(e)}&sp=${d}`,p=await Cs(l);if(!p.ok)return{rows:[],channel:"youtube",note:"YouTube не открылся"+(p.status?" (HTTP "+p.status+")":"")};let f=Mf(p.text);if(!f)return{rows:[],channel:"youtube",note:"не разобрал выдачу (согласие/капча?)"};let u=[];wa(f,u);let h=[],m=new Set;for(let x of u){let C=x.videoId;if(!C||m.has(C))continue;m.add(C);let E=Er(x.title),I=Er(x.publishedTimeText),N=Er(x.ownerText||x.longBylineText),R=x.detailedMetadataSnippets&&x.detailedMetadataSnippets[0]&&Er(x.detailedMetadataSnippets[0].snippetText)||Er(x.descriptionSnippet),B=(E+" "+R+" "+N).toLowerCase();if(o.length&&!Ze(B,o)||a.length&&Ze(B,a))continue;let U=I?ye(I):null;h.push({source:"youtube",title:E||C,url:`${al}/watch?v=`+C,date:U?U.toISOString():"",channel:"youtube",match:"video",snippet:(N?"["+N+"] ":"")+(Kn(R||E,c)||I),_fuzz:Rf(I)})}let w=Bn(t.from),g=Rr(t.to),b=Date.now()+Cf,y=0,L=0,v=0,T=[];await Ns(h.slice(0,Df),4,async x=>{let C=ye(Yt.get(x.url));if(!C&&Date.now()<b){let E=await Ds(x.url);C=E?Nf(E):null,C&&Yt.set(x.url,C.toISOString())}C?(y++,x.date=C.toISOString()):L++,x._exact=!!C});for(let x of h){if(x._exact){if(!Ve(x.date,w,g)){v++;continue}}else{let C=ye(x.date),E=(x._fuzz||0)*864e5;if(C&&(w&&+C+E<+w||g&&+C-E>+g)){v++;continue}}delete x._fuzz,delete x._exact,T.push(x)}let k=["фильтр YouTube: "+r+(r!==n?" (в настройке «"+n+"» — расширен, иначе окно не попадает в выдачу)":"")];return v&&k.push("вне периода отсеяно "+v),L&&k.push("дат со страницы не прочитали: "+L+" — у них дата приблизительная"),{rows:T,channel:"youtube",note:`видео: ${T.length} (${k.join("; ")})`}}async function Ps(e,t){let n=va(e);if(n)return Lf(n,t);let{keyword:r,from:s,to:o,maxPages:a=3,override:c,maxArticles:d=60}=t,l=pf(e);if(!l)return{rows:[],channel:"bad-url",note:"не разобрал адрес"};let p=da(l);if(p&&p.dead)return{rows:[],channel:"пропущен",note:"сайт пропущен: "+(p.note||"помечен нерабочим"),stats:{render:null,external:null,sitesearch:null}};let f=t.morph!==!1,u=Jt(r,f),h=Jt(t.exclude||"",f),m=Vn(u),w=i(S=>Ze((S||"").toLowerCase(),u),"hasKw"),g=i(S=>Ze((S||"").toLowerCase(),u),"kwInTitle"),b=i(S=>h.length>0&&Ze((S||"").toLowerCase(),h),"hasExclude"),y=Bn(s),L=Rr(o),v=[],T=[],k=[],x=t.diag?[]:null,C=t.diag?{searchUrl:null,rawLinks:[],searchKind:null,renderUrl:null}:null,E=await Cs(l+"/");if(!E.ok&&E.err){let S=hf(l);if(S&&S!==l){let M=await Cs(S+"/");M.ok&&(l=S,E=M,k.push("главная: переключился на "+Ye(l)))}}let I=!1;if(E.ok&&tl(E.text)&&(E={ok:!1,status:E.status,err:"страница-заглушка защиты"},k.push("главная: за защитой (Cloudflare) — иду браузером")),!E.ok){let S=await Wn(l+"/");S&&S.ok&&S.html&&S.html.length>500&&!tl(S.html)?(E={ok:!0,status:S.status||200,text:S.html},I=!0,k.push("главная: через браузер")):S&&S.err&&k.push("главная: браузером тоже не вышло — "+S.err)}E.ok||k.push("главная: "+(E.status?"HTTP "+E.status:E.err||"не открылась"));let N=E.text||"",R=vf(I),B=await R(l+"/robots.txt")||"";/<[a-z]/i.test(B)&&(B=Ct(B.replace(/<[^>]+>/g,`
`)));try{let S=[...new Set([...Kc(N).map(M=>{try{return new URL(M,l).href}catch{return null}}).filter(Boolean),l+"/rss",l+"/rss/",l+"/feed/",l+"/rss.xml"])];for(let M of S.slice(0,4)){let O=await yt(M);if(!O||!/<(item|entry)[\s>]/i.test(O))continue;let _=Vc(O);if(_.length){T.push("rss");for(let H of _){let V=ye(H.date),re=V?V.toISOString():null;if(H.title&&w(H.title+" "+(H.description||""))&&!b(H.title+" "+(H.description||""))&&Ve(re,y,L)){let ce;try{ce=new URL(H.link,l).href}catch{continue}v.push({source:Ye(l),title:H.title,url:ce,date:re||"",channel:"rss",match:g(H.title)?"title":"body",snippet:vn((H.description||"")+" "+H.title,H.title,m)})}}break}}}catch(S){k.push("rss: "+S.message)}try{let S=await xf(l,B,R);if(S.length){T.push("news-sitemap");for(let M of S)w(M.title)&&!b(M.title)&&Ve(M.date,y,L)&&v.push({source:Ye(l),title:M.title,url:M.url,date:M.date,channel:"news-sitemap",match:"title",snippet:vn(M.title,M.title,m)})}}catch(S){k.push("sitemap: "+S.message)}let U=[],Z={},ve={hint:t.datePick||"",seen:{}},Me=i(()=>new Set(v.map(S=>Se(S.url))),"haveKeys"),Ce={left:16},P=0,G=!1,D="";try{if(/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(N)&&u.length){let S=Date.now()+25e3,M=i(W=>String(W).padStart(2,"0"),"p2"),O=i(W=>W.getFullYear()+"-"+M(W.getMonth()+1)+"-"+M(W.getDate())+"T"+M(W.getHours())+":"+M(W.getMinutes())+":"+M(W.getSeconds()),"wpDate"),_=new Set(v.map(W=>Se(W.url))),H=new Set,V=[],re=[],ce=!1,q=0,le=0,se=0,Ne=new Set,Re=!1,qe=50,ee=6,Ie=/^(page|attachment|nav_menu_item|wp_|revision|customize_|oembed_|user_request|product_variation|acf-|elementor_|e-|jet-|tablepress)/,Oe=["posts"],me=!1;try{let W=await yt(l+"/wp-json/wp/v2/types"),oe=W?JSON.parse(W):null;if(oe&&typeof oe=="object"&&!Array.isArray(oe)){me=!0;for(let Y of Object.keys(oe)){let ne=oe[Y]||{},te=ne.rest_base||Y;!te||Ie.test(Y)||Ie.test(te)||ne.rest_namespace&&ne.rest_namespace!=="wp/v2"||Oe.includes(te)||Oe.push(te)}}}catch{me=!1}let Ae=/news|articl|novost|material|publicat|zhana|habar|jańalyq/i,ue=[Oe[0],...Oe.slice(1).sort((W,oe)=>(Ae.test(oe)?1:0)-(Ae.test(W)?1:0))].slice(0,4);for(let W of ue)for(let oe of u){let Y=oe.words.map(ne=>ne.text).join(" ");if(Y)for(let ne=1;ne<=ee;ne++){if(Date.now()>S){Re=!0;break}let te=l+"/wp-json/wp/v2/"+W+"?search="+encodeURIComponent(Y)+"&after="+O(y)+"&before="+O(L)+"&per_page="+qe+"&page="+ne+"&orderby=date&order=desc&_fields=date,link,title,excerpt";q++;let et=await yt(te);if(!et){le++;break}let ge=null;try{ge=JSON.parse(et.replace(/^\s*<pre[^>]*>/i,"").replace(/<\/pre>\s*$/i,""))}catch{se++;break}if(!Array.isArray(ge)){se++;break}ce=!0;for(let F of ge){let Qe=F&&F.link;if(!Qe)continue;let Ke=jr(Qe),Ee=Se(Ke);if(Ve(F.date,y,L)&&Ne.add(Ee),_.has(Ee)||H.has(Ee))continue;H.add(Ee);let pt=i(Xo=>Ct(String(Xo||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"flat"),mt=pt(F.title&&F.title.rendered),rt=pt(F.excerpt&&F.excerpt.rendered);Ve(F.date,y,L)&&(b(mt)||b(rt)||(Ze((mt+" "+rt).toLowerCase(),u)?V.push({source:Ye(l),title:mt,url:Ke,date:F.date,channel:"wp-api",match:g(mt)?"title":"body",snippet:Kn(rt||mt,m)}):re.push(Ke)))}if(ge.length<qe)break;ne===ee&&(Re=!0)}}if(ce){T.push("wp-api"),V.forEach(te=>v.push(te)),P=V.length;let W=0;if(re.length&&Date.now()<S){let{rows:te}=await yn(re,{groups:u,exclude:h,fromD:y,toD:L,originHost:Ye(l),channelLabel:"wp-api",deadline:S+3e4,maxFetch:60,diag:x,tally:Z});te.forEach(et=>{v.push(et),W++}),P+=W}let oe=v.filter(te=>(te.channel==="rss"||te.channel==="news-sitemap")&&Ve(te.date,y,L)).map(te=>Se(te.url)),Y=oe.filter(te=>!Ne.has(te)),ne=oe.length>0;G=!Re&&Y.length===0&&(ne||me&&V.length>0),D=Re?"ответ обрезан по бюджету":Y.length?"вход не увидел "+Y.length+" материал(ов), найденных лентой":ne?"сверено с лентой: "+oe.length+" из "+oe.length:me?"типов записей опрошено "+ue.length:"список типов записей недоступен",k.push("wp-api: сайт сам отобрал по слову и датам, взято "+P+(W?" (из них "+W+" проверены по тексту)":"")+(ue.length>1?"; типы записей: "+ue.join(", "):"")+"; полнота: "+(G?"подтверждена":"не подтверждена")+" ("+D+")")}else{let W=q?le?"вход не ответил (таймаут или бюджет канала 25 с), попыток "+q:se?"вход отдал не список записей — похоже, REST закрыт, попыток "+q:"вход промолчал, попыток "+q:"ни одного запроса не ушло (кончился бюджет канала ещё до старта)";k.push("wp-api: у сайта есть признаки WordPress, но "+W)}}}catch(S){k.push("wp-api: "+S.message)}let $=0;try{if(t.skip instanceof Set?t.skip.has("sitemap"):(t.skip||[]).includes("sitemap"))throw{skipped:!0};if(G)throw{wpCovered:!0};let S=Date.now(),M=sf(y,L),O=S+M.budgetMs,_=[...new Set(r.split(/[,;\n]+/).map(q=>q.trim()).filter(Boolean).flatMap(q=>q.split(/\s+/)).flatMap(q=>ca(q)))],H={},V=await kf(l,B,y,L,I?{maxMaps:10,maxCands:200,deadline:S+9e4,fetchText:R,blindOk:v.length===0,slugHints:_,collectStats:H}:{maxMaps:40,maxCands:M.maxCands,deadline:O,fetchText:R,blindOk:v.length===0,slugHints:_,collectStats:H}),re=new Set(v.map(q=>Se(q.url))),ce=V.map(q=>q.loc).filter(q=>!re.has(Se(q)));if(ce.length||k.push("sitemap-глубина: "+(H.stale?`новых статей нет — все ${H.stale} адресов уже читали, они вне периода`:H.maps?`карт прочитано ${H.maps}, статей за период в них нет`:`карты сайта не открылись (адресов карт в robots и по типовым путям: ${H.roots||0})`)),ce.length){T.push("sitemap-глубина");let q=I?{maxFetch:200,deadline:S+9e4}:{maxFetch:M.maxCands,deadline:O},{rows:le}=await yn(ce,{groups:u,exclude:h,fromD:y,toD:L,originHost:Ye(l),channelLabel:"sitemap",deadline:q.deadline,maxFetch:q.maxFetch,diag:x,tally:Z,pick:ve});le.forEach(W=>v.push(W)),$=le.length;let se="";if(y&&L){let W=new Set;for(let Y of V){let ne=Y.lm&&ye(Y.lm)||Dt(Y.loc);ne&&W.add(X(ne))}let oe=Math.max(1,Math.round((+Rr(X(L))-+Bn(X(y)))/864e5));W.size&&(se=`, дней периода охвачено ${W.size} из ${oe}`)}let Ne=H.hinted?`, с ключом в адресе ${H.hinted}`:"",Re=H.stale?`, старых по памяти дат пропущено ${H.stale}`:"",qe=H.nodate?`, из них без даты в карте ${H.nodate} (день узнаём, только скачав)`:"",ee=H.pool||0,Ie=ee>0?Math.max(1,Math.round(V.length/ee*100)):0,Oe=ee>V.length?H.capped?`; взято ${V.length} из БОЛЕЕ ЧЕМ ${ee} статей сайта за период (не больше ${Ie}%, сколько их всего — не знаем: упёрлись в свой потолок сбора) — остальные не читали, бюджет канала`:`; взято ${V.length} из ${ee} статей сайта за период (${Ie}%) — остальные не читали, бюджет канала`:"",me=I?200:M.maxCands,Ae=I?"сайт за защитой, читает браузер":M.days?`окно ${M.days} сут.`:"период не задан",ue=`; бюджет ${me} статей (${Ae})`;k.push(`sitemap-глубина: карт пройдено, кандидатов ${ce.length}${se}${qe}${Ne}${Re}, совпало ${le.length}${Oe}${ue}`+(Date.now()>q.deadline?" (стоп по времени)":""))}}catch(S){S&&S.wpCovered?(k.push("sitemap-глубина: не понадобилась — wp-api накрыл весь период ("+D+")"),U.push("sitemap")):k.push(S&&S.skipped?"sitemap-глубина: пропущен (память: у сайта ничего не даёт; перепроверим позже)":"sitemap-глубина: "+S.message)}let A=da(l),de=null,ae=0,ie=0,Q=t.skip instanceof Set?t.skip:new Set(t.skip||[]);A&&!t.reprobe&&(A.external===!1&&Q.add("external"),A.browserSearch===!1&&Q.add("sitesearch"),A.noRender===!0&&Q.add("render"));let be={render:null,external:null,sitesearch:null};try{let S=null;if(c?S=await ha(l,N,c):A&&A.search?S=await ha(l,N,A.search):A&&A.search===null?k.push("адаптер: server-side поиска нет ("+(A.note||"")+")"):S=await ha(l,N,null),S&&S.kind==="none"&&(k.push("поиск: "+S.warn),S=null),S){T.push("search("+S.kind+")"),C&&(C.searchKind=S.kind);let M=v.length,O=new Set,_=A&&A.budgetMs||45e3,H=A&&A.budgetMs?1500:400,V=I?1:S.hasPage?80:1,re=r.split(/[,;\n]+/).map(ee=>ee.trim()).filter(Boolean);re.length||re.push(r);let ce=0,q="",le=!1,se=Date.now(),Ne=S.builds||[S.build],Re=[];for(let ee of Ne)for(let Ie of re)Re.push({build:ee,alt:Ie});e:for(let{build:ee,alt:Ie}of Re){let Oe=!1;for(let me=1;me<=V&&!Oe;me++){if(Date.now()-se>_){k.push(`поиск: стоп по времени (${Math.round(_/1e3)}c)`);break e}let Ae=ee(Ie,me);if(!Ae)break;C&&!C.searchUrl&&(C.searchUrl=Ae);let ue;if(I){let ge=await Wn(Ae);ue={ok:!!(ge&&ge.ok&&ge.html),status:ge&&ge.status||0,text:ge&&ge.html||"",err:ge&&ge.err}}else ue=await Cs(Ae);if(!ue.ok){me===1&&O.size===0&&(q=ue.status?"HTTP "+ue.status:ue.err||"ошибка");break}!le&&ue.text&&w(ue.text.toLowerCase())&&(le=!0);let W=Un(ue.text,l).filter(ge=>!O.has(ge));if(C)for(let ge of W)C.rawLinks.length<25&&C.rawLinks.push(ge);if(W.forEach(ge=>O.add(ge)),!W.length){if(me>1)break;continue}let oe=null,Y=[];for(let ge of W){let F=Dt(ge);F&&((!oe||F>oe)&&(oe=F),!Ve(F.toISOString(),y,L))||Y.push(ge)}let{rows:ne,newest:te}=await yn(Y,{groups:u,exclude:h,fromD:y,toD:L,originHost:Ye(l),channelLabel:"search",deadline:se+_,browserBudget:Ce,diag:x,tally:Z,pick:ve,have:Me()});ne.forEach(ge=>v.push(ge)),ce+=W.length;let et=te&&oe?te>oe?te:oe:te||oe;if(y&&et&&et<y&&(Oe=!0),ce>H)break e}}let qe=v.length-M;ae=qe,q?k.push("поиск: "+q):k.push(`поиск: ссылок ${O.size}, совпало ${qe}`+(O.size===0?" (пусто/оболочка)":qe===0?" (нет по слову/периоду)":"")),v.length===M&&(O.size<3||!le)&&(de=S.build("MCQPLACEHOLDER",1).replace(/MCQPLACEHOLDER/g,"{q}"),O.size>=3&&k.push("поиск: ключа нет в самой выдаче -> похоже на оболочку, пробую браузером"))}else(!A||A.search)&&k.push("поиск не найден (нужен ручной шаблон site | url?...{q})")}catch(S){k.push("search: "+S.message)}try{let S=de?de.replace(/\{q\}/g,"{q}"):null;S||(S=wl(N,l)||null);let M=S;if(Q.has("render"))k.push("render: пропущен (память: у сайта не работает; перепроверим позже)");else if(A&&A.render||ae===0&&$===0&&M){let O=null,_=null;if(A&&A.render?(O=A.render,_=A.selectors||null):O=M,O){T.push("render");let H=Ye(l),V=/\{q\}/.test(O)?r.split(/[,;\n]+/).map(ee=>ee.trim()).filter(Boolean).slice(0,3)||[r]:[null],re=new Set,ce=[],q=!1,le=!1;for(let ee of V.length?V:[null]){let Ie=ee==null?O:O.replace(/\{q\}/g,encodeURIComponent(ee));C&&!C.renderUrl&&(C.renderUrl=Ie);let Oe=await Ms(Ie,{selectors:_,host:H});el(Oe)&&(le=!0),Oe.cf&&(q=!0);for(let me of Oe.items||[]){let Ae;try{Ae=new URL(me.url).host.replace(/^www\./,"")}catch{continue}Ae===H&&(re.has(me.url)||(re.add(me.url),ce.push(me)))}}let se={items:ce,cf:q};be.render=le&&!ce.length?null:ce.length,le&&!ce.length&&k.push("render: браузера не было — канал не проверялся (память не трогаем)");let Ne=ce.map(ee=>ee.url).filter(Boolean),Re=(await yn(Ne,{groups:u,exclude:h,fromD:y,toD:L,originHost:Ye(l),channelLabel:"render",deadline:Date.now()+45e3,browserBudget:Ce,diag:x,tally:Z,pick:ve,have:Me()})).rows,qe=!!(A&&A.render&&/\{q\}/.test(A.render));if(!Re.length&&ce.length)for(let ee of ce){let Ie=((ee.title||"")+" "+(ee.snippet||"")).toLowerCase();if(b(Ie)||!qe&&!w(Ie))continue;let Oe=ye(ee.date)||Dt(ee.url),me=Oe?Oe.toISOString():null;(y||L)&&!Ve(me,y,L)||Re.push({source:Ye(l),title:ee.title||ee.url,url:ee.url,date:me||"",channel:"render*",match:g(ee.title)?"title":"body",snippet:vn(pa(ee),ee.title,m)})}Re.forEach(ee=>v.push(ee)),ie=Re.length,Re.length?k.push(`render: совпало ${Re.length}`):k.push(se.cf?"render: Cloudflare не пройден за таймаут":!ce.length&&se.err?"render: "+se.err:`render: снято ${ce.length} ссылок, совпало 0`+(ce.length?" (нет по слову/периоду)":" (пусто/логин/капча?)"))}}}catch(S){k.push("render: "+S.message)}try{if(A&&A.feed){T.push("feed");let S=/\{page\}|\{off\d+\}/.test(A.feed),M=!!A.feedPost&&/\{date\}/.test(A.feedPost),O=S||M?20:1,_=Date.now(),H=9e4,V=new Set,re=[],ce=0,q=!1,le=0,se=0,Ne=null,Re=!1,qe=!1,ee=L?new Date(+L+864e5):new Date;for(let me=1;me<=O&&!q&&!(Date.now()-_>H);me++){let Ae=[],ue=/^\//.test(A.feed)?l.replace(/\/$/,"")+A.feed:A.feed;if(M){let Y=A.feedPost.replace(/\{date\}/g,Jh(ee)),ne=await Yh(ue,Y);if(!ne&&I){let te=await Wn(ue,{post:Y,host:Ye(l)});te&&te.ok&&te.posted?ne=te.html:te&&te.err&&(Ne=te.err)}if(!ne)break;Ae=Un(ne,l).map(te=>({url:te,title:"",date:"",snippet:""}))}else{let Y=me===1&&A.feedFirst?A.feedFirst:ue.replace(/\{page\}/g,me);Y=Y.replace(/\{off(\d+)\}/g,(et,ge)=>(me-1)*+ge);let ne=null,te=await yt(Y);if(te){let et=Un(te,l).filter(ge=>Ts(ge));et.length>=3&&(ne=et.map(ge=>({url:ge,title:"",date:"",snippet:""})))}ne?(Ae=ne,qe=!0):Ae=(await Ms(Y,{selectors:A.feedSelectors||null,host:Ye(l)})).items||[]}if(se++,Ae=Ae.filter(Y=>Y.url&&!V.has(Y.url)),Ae.forEach(Y=>V.add(Y.url)),!Ae.length){se>1&&(Re=!0);break}le+=Ae.length;let W=null,oe=null;for(let Y of Ae){let ne=ye(Y.date)||Dt(Y.url);ne&&(!W||ne>W)&&(W=ne),ne&&(!oe||ne<oe)&&(oe=ne);let te=((Y.title||"")+" "+(Y.snippet||"")).toLowerCase();if(ne&&w(te)&&!b(te)){if((y||L)&&!Ve(ne,y,L))continue;v.push({source:Ye(l),title:Y.title||Y.url,url:Y.url,date:X(ne),channel:"feed",match:g(Y.title)?"title":"body",snippet:vn(pa(Y),Y.title,m)}),ce++;continue}ne&&(y&&+ne<+y-864e5||L&&+ne>+L+864e5)||re.push(Y.url)}M&&(ee=oe&&+oe<+ee?oe:new Date(+ee-864e5),y&&+ee<+y-864e5&&(q=!0)),y&&W&&W<y&&(q=!0)}if(re.length){let me=[...new Set(r.split(/[,;\n]+/).map(ue=>ue.trim()).filter(Boolean).flatMap(ue=>ue.split(/\s+/)).flatMap(ue=>ca(ue)))];if(me.length){let ue=i(W=>me.some(oe=>W.toLowerCase().includes(oe)),"hinted");re.sort((W,oe)=>(ue(oe)?1:0)-(ue(W)?1:0))}let{rows:Ae}=await yn(re,{groups:u,exclude:h,fromD:y,toD:L,originHost:Ye(l),channelLabel:"feed",deadline:Date.now()+9e4,maxFetch:300,browserBudget:Ce,diag:x,tally:Z,have:Me()});for(let ue of Ae)v.push(ue),ce++}let Ie=` (страниц ${se}`+(qe?", обычным запросом":"")+(Re?", дальше повтор — пагинация не двигается":"")+")",Oe=le?" (нет по слову/периоду)":Ne?" (лента не ответила: "+Ne+")":" (лента ничего не отдала)";ce?k.push(`feed: ссылок ${le}${Ie}, совпало ${ce}`):k.push(`feed: ссылок ${le}${Ie}, совпало 0`+Oe)}}catch(S){k.push("feed: "+S.message)}let at=0;try{let S=!!(A&&A.browserSearch===!0&&ae===0);if(!Q.has("sitesearch")&&(v.length===0||S)){let M=r.split(/[,;\n]+/).map(le=>le.trim()).filter(Boolean);M.length||M.push(r);let O=Ye(l),_=new Set,H=[],V="",re=!1,ce=!1;{let le=await ll(l,M.slice(0,3),{host:O});el(le)&&(ce=!0),le.cf&&(re=!0),le.note&&(V=le.note);for(let se of le.items||[]){let Ne;try{Ne=new URL(se.url).host.replace(/^www\./,"")}catch{continue}Ne!==O&&!Ne.endsWith("."+O)||_.has(se.url)||(_.add(se.url),H.push(se))}}let q={items:H,cf:re,note:V};if(be.sitesearch=ce&&!H.length?null:H.length,H.length){T.push("браузер-поиск");let le=(await yn(H.map(se=>se.url),{groups:u,exclude:h,fromD:y,toD:L,originHost:Ye(l),channelLabel:"браузер-поиск",deadline:Date.now()+9e4,browserFallback:I,browserBudget:Ce,diag:x,tally:Z,pick:ve,have:Me()})).rows;if(!le.length)for(let se of H){let Ne=((se.title||"")+" "+(se.snippet||"")).toLowerCase();if(!w(Ne)||b(Ne))continue;let Re=ye(se.date)||Dt(se.url),qe=Re?Re.toISOString():null;(y||L)&&!Ve(qe,y,L)||le.push({source:O,title:se.title||se.url,url:se.url,date:qe||"",channel:"браузер-поиск*",match:g(se.title)?"title":"body",snippet:vn(pa(se),se.title,m)})}le.forEach(se=>v.push(se)),at=le.length,k.push(le.length?`браузер-поиск: совпало ${le.length}`:`браузер-поиск: снято ${H.length}, совпало 0 (нет по слову/периоду)`)}else q.err?k.push("браузер-поиск: "+q.err):q.note&&k.push("браузер-поиск: "+q.note)}}catch(S){k.push("браузер-поиск: "+S.message)}try{let S=t.external===!1?!1:!!(A&&A.external===!0)||t.external===!0;if(Q.has("external"))k.push("внешний: пропущен (память: у сайта не работает; перепроверим позже)");else if(!S)U.push("external");else if((A&&A.external||ae===0&&ie===0)&&$===0&&at===0){T.push("внешний");let M=Ye(l),O=r.split(/[,;\n]+/).map(F=>F.trim()).filter(Boolean).map(F=>/\s/.test(F)&&!/^["«]/.test(F)?"("+F+")":F).join(" OR "),_=(t.exclude||"").split(/[,;\n]+/).map(F=>F.trim()).filter(Boolean).map(F=>"-"+(/\s/.test(F)?'"'+F+'"':F)).join(" "),H=encodeURIComponent(["site:"+M,O,_].filter(Boolean).join(" ")),V=new Set,re=[],ce=Date.now(),q={},le=0,se="";{let F=new Set,Qe=Date.now(),Ke=[Ee=>`https://html.duckduckgo.com/html/?q=${H}&kl=ru-ru&ia=web&p=-1${Ee?"&s="+Ee:""}`,Ee=>`https://duckduckgo.com/html/?q=${H}&kl=ru-ru&ia=web&p=-1${Ee?"&s="+Ee:""}`];for(let Ee=0;Ee<Ke.length&&re.length<60&&Date.now()-Qe<12e3;Ee++){let pt=Ke[Ee],mt="https://duckduckgo.com/";for(let rt=0;rt<=60&&Date.now()-Qe<12e3;rt+=30){let Xo=pt(rt),gn=await gf(Xo,mt);if(rt===0&&Ee===0){let Mt=gn.text||"",xc=(Mt.match(/class="result__a"/g)||[]).length,vh=/anomaly|are you a robot|too many requests|captcha|privacy.*simplified/i.test(Mt),xh=Mt.length<22*1024&&xc===0,kh=(((Mt.split(/class="result__a"/i)[1]||"").slice(0,400).match(/href="([^"]+)"/i)||[])[1]||"").replace(/&amp;/g,"&").slice(0,110);se=`${gn.status?"HTTP "+gn.status+" ":""}${gn.err?gn.err+" ":""}стр ${Math.round(Mt.length/1024)}КБ, result__a ${xc}${vh||xh?", заглушка/капча":""}; href1: ${kh||"—"}`,q.ddg=se}if(!gn.ok)break;let vc=bf(gn.text,M).filter(Mt=>!F.has(Mt.url));if(!vc.length)break;vc.forEach(Mt=>{F.add(Mt.url),V.add(Mt.url),re.push(Mt)})}if(re.length>0)break}le=F.size}let Ne=0,Re="",qe=re.length<3||se&&/заглушка|капча|HTTP 40[33]|не открылся|таймаут/.test(se);if(qe){let F=new Set,Qe=`https://www.bing.com/search?q=${H}&setlang=ru-RU&cc=KZ&ensearch=0`,Ke=await Ms(Qe,{bing:!0,host:M}),Ee=Ke.items||[];for(let mt of Ee){let rt=ff(mt.url,M)||Qc(mt.url,M);!rt||F.has(rt)||(F.add(rt),V.has(rt)||(V.add(rt),re.push({url:rt,title:mt.title||"",snippet:mt.snippet||""})))}Ne=F.size;let pt=Ee.length?String(Ee[0].url||"").replace(/&amp;/g,"&").slice(0,90):"";Re=Ke.cf?"капча/Cloudflare не пройден":`рендер: снято ${Ee.length}, домена ${Ne}${Ne===0&&pt?"; href1: "+pt:""}`,q.bing=Re}be.external=re.length;let ee=(await yn(re.map(F=>F.url),{groups:u,exclude:h,fromD:y,toD:L,originHost:M,channelLabel:"внешний",deadline:Date.now()+3e4,diag:x,tally:Z,pick:ve,have:Me()})).rows,Ie=new Set;for(let F of ee)v.push(F),Ie.add(F.url);let Oe=[],me=0,Ae=0;for(let F of re){if(Ie.has(F.url))continue;let Qe=(F.title||"").toLowerCase(),Ke=(F.snippet||"").toLowerCase(),Ee=w(Qe);if(!Ee||b(Qe+" "+Ke)){Ae++;continue}let pt=Dt(F.url)||ye(F.snippet+" "+F.title+" "+(F.date||""));if(!pt){me++;continue}Ve(pt.toISOString(),y,L)&&Oe.push({it:F,iso:pt.toISOString(),inTitle:Ee})}let ue={},W={};for(let F of Oe){let{b:Qe,a:Ke}=rl(F.it.snippet,m);Qe.length>=12&&(ue[Qe]=(ue[Qe]||0)+1),Ke.length>=12&&(W[Ke]=(W[Ke]||0)+1)}let oe=0,Y=0;for(let F of Oe){let{b:Qe,a:Ke}=rl(F.it.snippet,m);if((Qe.length>=12&&ue[Qe]>1||Ke.length>=12&&W[Ke]>1)&&!F.inTitle){Y++;continue}let pt=uf(F.it.title,M);v.push({source:M,title:pt,url:F.it.url,date:F.iso,channel:"внешний",match:F.inTitle?"title":"body",snippet:Kn(F.it.snippet||F.it.title||"",m)}),oe++}let ne=ee.length+oe,te=[Ae?`не по ключу ${Ae}`:"",Y?`боковой блок ${Y}`:"",me?`без даты ${me}`:""].filter(Boolean).join(", "),et=[];et.push(`ddg:${le}${q.ddg?" ["+q.ddg+"]":""}`),qe&&et.push(`bing:${Ne}${q.bing?" ["+q.bing+"]":""}`);let ge=re.length?te?"отсеяно "+te:"нет по слову/периоду":qe?"оба движка 0: "+(q.ddg||"")+(q.bing?" | "+q.bing:""):q.ddg||"нет ответа";k.push(ne?`внешний: совпало ${ne} (из статьи ${ee.length}, из выдачи ${oe}${te?"; отсеяно "+te:""}; ${et.join(", ")})`:`внешний: 0 [ссылок ${re.length}; ${ge}]`)}}catch(S){k.push("внешний: "+S.message)}let nt=v.filter(S=>S.channel==="rss"||S.channel==="news-sitemap");if(nt.length){let S=0,M=0,O=0,_=new Map;await Ns(nt,4,async V=>{if(!V.url)return;let re=_.get(V.url)||Yt.get(V.url);if(!re){let ce=await Ds(V.url);if(!ce){O++;return}let q=la(ce,V.url,ve&&ve.hint);if(!q||!q.date){O++;return}re=q.date,Yt.set(V.url,re),ve&&q.dateVia&&(ve.seen[q.dateVia]=(ve.seen[q.dateVia]||0)+1)}_.set(V.url,re),Qh(V.date,re)||S++,V.date=re,Ve(re,y,L)||(V._outOfPeriod=!0,M++)});let H=v.length;v=v.filter(V=>!V._outOfPeriod),(S||M||O)&&k.push("даты лент сверены по статьям: поправлено "+S+(M?", вне периода "+M+" (лента показывала их свежими)":"")+(O?", не открылись "+O+" — оставлены с датой ленты, ей верить нельзя":"")),H!==v.length&&v.length}let ke=new Set([Ye(l)]),pe=i(S=>{for(let M of[].concat(S||[])){let O=M&&String(M).match(/^https?:\/\/([^/]+)/i);O&&ke.add(O[1].replace(/^www\./,""))}},"addHost");pe(c),A&&(pe(A.search),pe(A.render),pe(A.feed));let Xe=new Map,Kt=[],zn=0,In=0,Mr=new Map;for(let S of v){if(!S.url)continue;S.url=jr(S.url);let M=Se(S.url),O=Xe.get(M);if(O){O._ch.includes(S.channel)||O._ch.push(S.channel);continue}if(S._dupe)continue;if(ya(S.url)){In++;continue}let _;try{_=new URL(S.url).host.replace(/^www\./,"")}catch{continue}if(!ke.has(_)){zn++,Mr.set(_,(Mr.get(_)||0)+1);continue}S._ch=[S.channel],Xe.set(M,S),Kt.push(S)}if(zn){let S=[...Mr].sort((M,O)=>O[1]-M[1]).slice(0,3).map(([M,O])=>M+" — "+O).join(", ");k.push("отброшено "+zn+" с другого домена/поддомена"+(S?" ("+S+")":""))}In&&k.push("отброшено "+In+" листингов/рубрик"),be.contrib={};for(let S of Kt)be.contrib[S.channel]=(be.contrib[S.channel]||0)+1;be.total=Kt.length,be.picks=ve.seen;let ze=Z,Fn=Object.values(ze).filter(S=>typeof S=="number").reduce((S,M)=>S+M,0),j=i(()=>{let S=ze.noOpenWhy||{},M=Object.entries(S).sort((O,_)=>_[1]-O[1]).slice(0,3).map(([O,_])=>O+" — "+_).join(", ");return"не открылись "+ze.noOpen+(M?" ("+M+")":" (защита/таймаут)")},"noOpenBit"),xe=i(()=>{let S=Object.entries(ze.noDateWhere||{}).sort((O,_)=>_[1]-O[1]),M=S.filter(([,O])=>O>=Math.max(3,ze.noDate*.15)).slice(0,3);return M.length?"без даты на странице — "+ze.noDate+" (в разделах: "+M.map(([O,_])=>"/"+O+"/ "+_).join(", ")+")":"без даты на странице — "+ze.noDate+(S.length>1?" (разделов "+S.length+", ни один не преобладает — размазано по сайту)":"")},"noDateBit");if(Kt.length){let S=ze.noOpen||0,M=ze.noDate||0,O=ze.late||0,_=ze.overBudget||0,H=S+M+O+_;if(H>=10&&H>=Fn*.05){let V=[];S&&V.push(j()),M&&V.push(xe()),O&&V.push("не успели по времени — "+O),_&&V.push("не влезли в бюджет канала — "+_),k.push("потери: "+H+" страниц из "+Fn+" не проверены ["+V.join(", ")+"] — среди них мог быть материал")}}else{let S=[],M=i((_,H)=>{ze[_]&&S.push(H+" "+ze[_])},"add");M("noKw","прочитали, ключа в тексте нет —"),M("outOfPeriod","вне периода —"),M("staleDate","вне периода по памяти дат —"),M("urlDateOut","вне периода по дате в адресе —"),ze.noOpen&&S.push(j()),ze.noDate&&S.push(xe()),M("notArticle","не статьи (рубрики/меню) —"),M("listing","разделы сайта, отсеяны по адресу —"),M("excluded","отсеяно минус-словом —"),M("late","не успели по времени —"),M("overBudget","не влезли в бюджет канала —");let O;Fn?(ze.noOpen||0)>Fn/2?O="сайт не отдал статьи (защита/таймаут) — это не «не писали», а «не достучались»":(ze.noKw||0)>0?O="сайт доступен, статьи прочитаны — про ключ в этот период не писали":(ze.late||0)>Fn/2?O="упёрлись в бюджет времени — материал мог остаться непроверенным":O="кандидаты были, но ни один не подошёл":O="ни одной ссылки-кандидата: ни ленты, ни карты, ни рабочего поиска у сайта не нашлось",k.push("почему ноль: "+O+(S.length?" ["+S.join(", ")+"]":""))}let De=ze._slow;if(De&&De.resets){let S=Object.entries(De.why||{}).sort((M,O)=>O[1]-M[1]).map(([M,O])=>M+" — "+O).join(", ");k.push(De.on?"сайт просил сбавить ход ("+(S||De.resets+" раз")+") — перешли на одиночные запросы"+(De.tried?De.saved?", со второй попытки прочитано "+De.saved+" из "+De.tried:", повтор не помог ("+De.tried+" попыток)":""):"сайт просил сбавить ход: "+(S||De.resets)+" — единичные случаи, ход не сбавляли")}if(Ce.left<16){let S=16-Ce.left,M=Z&&Z.viaBrowser||0;k.push(M?"статей дочитано браузером: "+M+" из "+S+" попыток (обычным запросом не открывались)":"браузер не дочитал ни одной статьи из "+S+" попыток")}U.length&&(be.notRun=U);let We={},At={};for(let S of Kt){for(let M of S._ch)We[M]=(We[M]||0)+1;S._ch.length===1&&(At[S._ch[0]]=(At[S._ch[0]]||0)+1),S.channels=S._ch.map(_c).join(" + "),delete S._ch}be.foundBy=We,be.onlyBy=At;let Cr=Object.keys(We).sort((S,M)=>We[M]-We[S]).map(S=>`${_c(S)} ${We[S]}`+(At[S]?` (только он ${At[S]})`:" (все повтор)"));return Cr.length&&k.push("кто принёс: "+Cr.join(", ")),{rows:Kt,channel:T.join(" + ")||"none",note:k.join("; "),stats:be,diag:t.diag?{meta:C,records:x}:void 0}}var Vh,_c,el,Ms,Yt,Wn,ll,pl,Es,ba,hl,nl,Zh,_h,tf,ua,Rs,df,Gn,Pr,ga,mf,Tf,ol,Er,al,Cf,Df,fa,Yn=J(()=>{ht();Nr();Zc();Vh={sitemap:"sitemap-глубина",search:"поиск","render*":"render","браузер-поиск*":"браузер-поиск"},_c=i(e=>Vh[e]||e,"chName"),el=i(e=>/браузер не поднялся|браузер завис/.test(String(e&&(e.err||e.note)||"")),"browserDown"),Ms=i(async()=>({items:[],cf:!1}),"renderScrape");i(il,"setRenderer");Yt={get:i(()=>null,"get"),set:i(()=>{},"set")};i(cl,"setDateStore");Wn=i(async()=>({ok:!1}),"renderFetch"),ll=i(async()=>({items:[],cf:!1}),"renderSiteSearch");i(dl,"setHtmlFetcher");i(ul,"setSiteSearcher");i(yn,"enrichUrls");i(tl,"isChallengePage");pl="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",Es={"User-Agent":pl,"Accept-Language":"ru,en;q=0.9","Accept-Encoding":"gzip, deflate"},ba=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),hl=typeof process<"u"&&process.env&&Number(process.env.MC_FETCH_TIMEOUT_MS)||3e4;i(Yh,"tryPostText");i(Jh,"dmy");i(Xh,"fetchText");i(yt,"tryText");i(Ds,"tryPlain");nl={ECONNRESET:"сайт оборвал соединение",ECONNREFUSED:"сайт не принял соединение",ECONNABORTED:"соединение прервано",ETIMEDOUT:"сайт не ответил",ENOTFOUND:"домен не найден (DNS)",EAI_AGAIN:"DNS не ответил",EHOSTUNREACH:"хост недостижим",ENETUNREACH:"сети нет",EPROTO:"не сошлись по TLS",UND_ERR_CONNECT_TIMEOUT:"не удалось соединиться",UND_ERR_HEADERS_TIMEOUT:"сайт не прислал заголовки",UND_ERR_BODY_TIMEOUT:"сайт замолчал на середине ответа",UND_ERR_SOCKET:"соединение оборвалось",CERT_HAS_EXPIRED:"у сайта просрочен сертификат",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"сертификат сайта не проверяется",DEPTH_ZERO_SELF_SIGNED_CERT:"самоподписанный сертификат"};i(Qh,"sameDay");i(Or,"netErr");Zh=i(e=>/\b(ECONNRESET|ECONNABORTED|UND_ERR_SOCKET)\b/.test(String(e||"")),"isResetErr"),_h=i(e=>/\bHTTP (429|503)\b/.test(String(e||"")),"isBusyErr");i(ef,"backoffReason");i(Cs,"fetchInfo");i(ma,"fetchPlain");tf={"User-Agent":pl,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8","Accept-Language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7","Accept-Encoding":"gzip, deflate",DNT:"1","Upgrade-Insecure-Requests":"1","Sec-Fetch-Dest":"document","Sec-Fetch-Mode":"navigate","Sec-Fetch-Site":"same-origin","Sec-Fetch-User":"?1",Pragma:"no-cache","Cache-Control":"no-cache"};i(nf,"fetchSearch");i(Ye,"host");i(ya,"isListingUrl");i(As,"isJunkMapUrl");i(rf,"mapYearMonth");i(sf,"depthBudget");i(jr,"canonUrl");i(of,"isAbbr");i(af,"stemRu");i(cf,"mkTerm");i(Jt,"parseQuery");i(lf,"termHit");i(Ze,"matchGroups");i(Vn,"queryTerms");i(Kn,"makeSnippet");ua=i(e=>{let t=[];for(let n=0,r=e.length-1;n<=r;n++,r--)t.push(e[n]),n!==r&&t.push(e[r]);return t},"bothEnds"),Rs=i(e=>String(e||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),df=24;i(pa,"cardText");i(vn,"snippetFor");i(uf,"cleanGoogleTitle");i(rl,"kwContext");i(pf,"normalizeOrigin");i(hf,"toggleWww");i(ff,"bingDecodeHref");Gn=0,Pr=0,ga=!1,mf=i(e=>new Promise(t=>setTimeout(t,e)),"_sleep");i(fl,"resetDdgThrottle");i(gf,"ddgFetch");i(wf,"ddgReal");i(bf,"ddgResults");i(Ns,"mapPool");i(ml,"robotsSitemaps");i(yf,"unwrapBrowserXml");i(vf,"makeTextFetcher");i(xf,"getNewsSitemapEntries");i(kf,"collectSitemapCandidates");i(gl,"entriesFromSitemap");i(wl,"parseSearchForm");i(sl,"searchLooksReal");i(ha,"detectSearch");i(va,"telegramChannel");i(Sf,"parseTelegramPosts");Tf=typeof process<"u"&&process.env&&process.env.MC_TG_BASE||"https://t.me/s/";i(Lf,"searchTelegram");ol={hour:"EgIIAQ%3D%3D",today:"EgIIAg%3D%3D",week:"EgIIAw%3D%3D",month:"EgIIBA%3D%3D",year:"EgIIBQ%3D%3D"};i(Af,"balancedJson");i(Mf,"extractYtInitialData");i(wa,"collectVideoRenderers");Er=i(e=>e&&e.runs?e.runs.map(t=>t.text).join(""):e&&e.simpleText||"","ytRuns"),al=typeof process<"u"&&process.env&&process.env.MC_YT_BASE||"https://www.youtube.com",Cf=2e4,Df=60;i(Rf,"ytFuzzDays");i(Nf,"ytExactDate");fa=["hour","today","week","month","year"];i(Ef,"ytRangeFor");i(bl,"searchYouTube");i(Ps,"searchSite")});function vt(e,t){zs((0,He.dirname)(e));let n=e+".tmp";(0,Te.writeFileSync)(n,JSON.stringify(t,null,2)),(0,Te.renameSync)(n,e)}function sn(e,t){try{return(0,Te.existsSync)(e)?JSON.parse((0,Te.readFileSync)(e,"utf8")):t}catch(n){return console.error("битый файл",e,n.message),t}}function Of(){zs(Os),Xn=sn(Ta,{})||{},he.clear();for(let e of(0,Te.existsSync)(Os)?(0,Te.readdirSync)(Os):[]){let t=sn(Qn(e),null);t&&he.set(e,{meta:t,feed:sn(Zn(e),[])||[]})}}function $f(){if(!(0,Te.existsSync)(js)||he.size>0)return;let e=sn(js,null);if(!(!e||!Array.isArray(e.projects))){e.settings&&(Xn=e.settings,vt(Ta,Xn));for(let t of e.projects){let n=t.id||xl("p"),r={id:n,name:t.name||"Проект",config:t.config||{},schedule:t.schedule||{mode:"off"},lastRun:t.lastRun||null,lastLog:t.log||[]};vt(Qn(n),r),vt(Zn(n),t.items||[]),he.set(n,{meta:r,feed:t.items||[]})}try{(0,Te.renameSync)(js,js+".bak")}catch{}console.log(`[store] мигрировал ${e.projects.length} проект(ов) из data.json в data/projects/`)}}function Je(){return Xn}function kl(e){Object.assign(Xn,e),vt(Ta,Xn)}function an(){return[...he.values()].map(e=>({id:e.meta.id,name:e.meta.name,schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,itemCount:(e.feed||[]).length,newCount:(e.feed||[]).filter(t=>t.isNew).length,runsCount:(e.meta.runs||[]).length,last:(e.meta.runs||[])[0]||null,config:e.meta.config||{}}))}function Pe(e){let t=he.get(e);return t?La(t):null}function Sl(e,t){let n=xl("p"),r={id:n,name:e||"Новый проект",config:t||{},schedule:{mode:"off"},lastRun:null,lastLog:[]};return zs($r(n)),vt(Qn(n),r),vt(Zn(n),[]),he.set(n,{meta:r,feed:[]}),La(he.get(n))}function Tl(e,t){let n=he.get(e);return n?(t.name!==void 0&&(n.meta.name=t.name),t.config&&(n.meta.config=t.config),t.schedule&&(n.meta.schedule=t.schedule),on(e),La(n)):null}function Ll(e){if(!he.has(e))return!1;he.delete(e);try{(0,Te.rmSync)($r(e),{recursive:!0,force:!0})}catch{}return!0}function Al(e){let t=he.get(e);t&&(t.feed.forEach(n=>n.isNew=!1),Ht(e))}function Is(e,t,n){let r=he.get(e);return r?(r.meta.ai=r.meta.ai||{},r.meta.ai[t]=n,on(e),r.meta.ai):null}function Aa(e){let t=he.get(e);return t&&t.meta.ai||{}}function Ge(e){let t=he.get(e);return t&&t.meta.tg||{}}function lt(e,t){let n=he.get(e);return n?(n.meta.tg=Object.assign({},n.meta.tg||{},t||{}),n.meta.tg.token&&!n.meta.tg.ownerCode&&(n.meta.tg.ownerCode=String((0,ka.randomInt)(1e5,1e6))),on(e),n.meta.tg):null}function Ml(e){let t=he.get(e);return t?(t.meta.tg=Object.assign({},t.meta.tg||{},{ownerCode:String((0,ka.randomInt)(1e5,1e6))}),on(e),t.meta.tg.ownerCode):""}function zr(e){let t=Ge(e);return{enabled:!!t.enabled,hasToken:!!t.token,bot:t.bot||"",chats:(t.chats||[]).map(n=>({id:n.id,name:n.name||"",access:n.access||""})),sentTotal:t.sentTotal||0,err:t.err||"",ownerCode:t.ownerCode||"",owners:(t.owners||[]).map(n=>n.name||String(n.id))}}function Cl(e,t){let n=he.get(e);return n?(n.feed||[]).filter(r=>!r.tgSent&&(!t||r.run===t)):[]}function Dl(e,t){let n=he.get(e);if(!n)return 0;let r=new Set((t||[]).map(Se)),s=0;for(let o of n.feed)!o.tgSent&&r.has(Se(o.url))&&(o.tgSent=!0,s++);return s&&Ht(e),s}function Rl(e){let t=he.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.tgSent||(r.tgSent=!0,n++);return n&&Ht(e),n}function Nl(e,t){let n=he.get(e);if(!n)return 0;let r=new Set((t||[]).filter(Boolean).map(Se));if(!r.size)return 0;let s=0;for(let o of n.feed)o.tgSent&&r.has(Se(o.url))&&(delete o.tgSent,s++);return s&&Ht(e),s}function El(e,t){let n=he.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(Se(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(Se(o.url));a&&(o.sent=a.mark,o.sentWhy=a.why||"",o.sentAt=Date.now(),o.sentModel=a.model||"",s++)}return s&&Ht(e),s}function Pl(e,t){let n=he.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(Se(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(Se(o.url));a&&(o.rel=a.mark,o.relWhy=a.why||"",o.relAt=Date.now(),o.relModel=a.model||"",s++)}return s&&Ht(e),s}function jl(e){let t=he.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.rel&&(delete r.rel,delete r.relWhy,delete r.relAt,delete r.relModel,n++);return n&&Ht(e),n}function Ol(e){let t=he.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.sent&&(delete r.sent,delete r.sentWhy,delete r.sentAt,delete r.sentModel,n++);return n&&Ht(e),n}function xa(e){let t=xn(e);if(!(0,Te.existsSync)(t))return[];let n=[];for(let r of(0,Te.readdirSync)(t))if(r.endsWith(".json"))try{n.push({file:(0,He.join)(t,r),ts:r.slice(0,-5),bytes:(0,Te.statSync)((0,He.join)(t,r)).size})}catch{}return n.sort((r,s)=>r.ts.localeCompare(s.ts))}function $l(e){let t=xa(e),n=t.reduce((o,a)=>o+a.bytes,0),r=$s(Zn(e)),s=$s(Qn(e));return{bytes:n+r+s,runBytes:n,feedBytes:r,metaBytes:s,runCount:t.length,avgRunBytes:t.length?Math.round(n/t.length):0}}function zf(e,t,{keep:n=30}={}){let r=Math.max(0,+t||0)*1024*1024;if(!r)return{removed:0,freed:0};let s=xa(e),a=$s(Zn(e))+$s(Qn(e))+s.reduce((p,f)=>p+f.bytes,0),c=0,d=0;for(let p of s){if(a<=r||s.length-c<=n)break;try{(0,Te.rmSync)(p.file,{force:!0}),c++,d+=p.bytes,a-=p.bytes}catch{}}let l=a>r;if(c){let p=he.get(e);if(p&&Array.isArray(p.meta.runs)){let f=new Set(xa(e).map(h=>h.ts)),u=p.meta.runs.length;p.meta.runs=p.meta.runs.filter(h=>f.has(h.ts)),p.meta.runs.length!==u&&on(e)}}return{removed:c,freed:d,bytes:a,limit:r,capped:l}}function Fs(e,t,n){let r=he.get(e);if(!r||!t||!n||!n.length)return!1;let s=(0,He.join)(xn(e),t+".json"),o=sn(s,null);return o?(o.log=(o.log||[]).concat(n),vt(s,o),ql(e,t,o),(r.meta.runs||[])[0]&&r.meta.runs[0].ts===t&&(r.meta.lastLog=(r.meta.lastLog||[]).concat(n),on(e)),!0):!1}function zl(e,t){let n=he.get(e);if(!n)return null;let r=new Set((t||[]).filter(Boolean).map(Se));if(!r.size)return{removed:0,total:(n.feed||[]).length};let s=n.feed.length;n.feed=n.feed.filter(a=>!r.has(Se(a.url)));let o=s-n.feed.length;n.meta.deleted=[...new Set((n.meta.deleted||[]).concat([...r]))],n.meta.deleted.length>2e4&&(n.meta.deleted=n.meta.deleted.slice(-2e4)),n.meta.editedAt=Date.now();for(let a of n.meta.runs||[]){let c=(0,He.join)(xn(e),a.ts+".json"),d=sn(c,null);if(!d||!Array.isArray(d.rows))continue;let l=d.rows.length;d.rows=d.rows.filter(p=>!r.has(Se(p.url))),d.rows.length!==l&&(d.found=d.rows.length,d.added=Math.max(0,(d.added||0)-(l-d.rows.length)),vt(c,d),a.found=d.found,a.added=d.added)}return Ht(e),on(e),{removed:o,total:n.feed.length,deletedTotal:n.meta.deleted.length}}function _n(e,t,n,r){let s=he.get(e);if(!s)return{added:0,total:0};s.meta.runs=s.meta.runs||[];let o=r?s.meta.runs.find(u=>u.ts===r):null,a=o?o.at:Date.now();r||(r=jf());let c=new Set(s.feed.map(u=>Se(u.url))),d=new Set((s.meta.deleted||[]).map(Se)),l=d.size?t.filter(u=>!d.has(Se(u.url))):t;for(let u of l)!u.url||c.has(Se(u.url))||(c.add(Se(u.url)),s.feed.push({source:u.source,date:u.date,title:u.title,url:u.url,channel:u.channel,channels:u.channels||u.channel,match:u.match,snippet:u.snippet,author:u.author||"",kind:u.kind||"",via:u.via||"",matchIn:u.matchIn||"",comments:Number.isFinite(u.comments)?u.comments:null,firstSeenAt:Date.now(),isNew:!0,run:r}));s.feed.sort((u,h)=>String(h.date||"").localeCompare(String(u.date||""))),s.feed.length>5e3&&(s.feed=s.feed.slice(0,5e3));let p=s.feed.filter(u=>u.run===r).length,f=l.length;s.meta.lastRun=a,s.meta.lastLog=n||[],o?(o.added=p,o.found=f):(o={ts:r,at:a,added:p,found:f},s.meta.runs.unshift(o)),s.meta.runs.length>300&&(s.meta.runs=s.meta.runs.slice(0,300)),Ht(e),on(e);try{vt((0,He.join)(xn(e),r+".json"),{at:a,added:p,found:f,log:n||[],rows:l})}catch{}ql(e,r,{at:a,added:p,found:f,log:n||[]});try{let u=Ma(s.meta.config);u&&Date.now()-(yl.get(e)||0)>300*1e3&&(yl.set(e,Date.now()),zf(e,u))}catch{}return{added:p,total:s.feed.length,ts:r}}function Hl(e,t,n){let r=he.get(e);if(!r||!n)return null;let s=i(c=>(n.log||[]).find(d=>d.site===c),"line"),o=s("(период)"),a=s("(время)");return{проект:r.meta.name||"",прогон:Fl(t)||t,"id прогона":t,запрос:(r.meta.config||{}).keyword||"",период:o?o.note:"",время:a?a.note:"",найдено:n.found||0,новых:n.added||0,сайты:(n.log||[]).map(c=>{let d={сайт:c.site,найдено:c.found||0,каналы:c.channel||"",заметка:c.note||""};return c.ms&&(d.секунд=Math.round(c.ms/1e3)),d})}}function ql(e,t,n){let r=he.get(e);if(!r)return;let s=Hl(e,t,n);if(s)try{zs(Jn);let o=Il(r.meta.name);vt((0,He.join)(Jn,Ff(r.meta.name,t)),s);let a=(0,Te.readdirSync)(Jn).filter(c=>c.endsWith(" — "+o+".json")).sort();for(let c of a.slice(0,Math.max(0,a.length-If)))try{(0,Te.rmSync)((0,He.join)(Jn,c),{force:!0})}catch{}}catch{}}function Bl(e,t){let n=sn((0,He.join)(xn(e),t+".json"),null);return n?Hl(e,t,n):null}function Ir(e){let t=he.get(e);if(t&&Array.isArray(t.meta.runs))return t.meta.runs;try{return(0,Te.readdirSync)(xn(e)).filter(n=>n.endsWith(".json")).sort().reverse().map(n=>({ts:n.replace(/\.json$/,"")}))}catch{return[]}}function er(e,t){return sn((0,He.join)(xn(e),t+".json"),null)}var Te,vl,He,ka,Pf,Sa,Os,Ta,js,xl,zs,$r,Qn,Zn,xn,jf,Xn,he,yl,on,Ht,La,$s,Ma,Jn,If,Il,Fl,Ff,Rt=J(()=>{Te=require("node:fs"),vl=require("node:url"),He=require("node:path");gt();ka=require("node:crypto");Nr();ht();Pf=(0,He.dirname)((0,vl.fileURLToPath)(__mcFileUrl));ea((e,t)=>{try{(0,Te.cpSync)(e,t,{recursive:!0})}catch{}});Sa=we,Os=(0,He.join)(Sa,"projects"),Ta=(0,He.join)(Sa,"settings.json"),js=(0,He.join)(Pf,"data.json"),xl=i(e=>e+Date.now().toString(36)+Math.random().toString(36).slice(2,6),"uid"),zs=i(e=>{try{(0,Te.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(vt,"writeJson");i(sn,"readJson");$r=i(e=>(0,He.join)(Os,e),"projDir"),Qn=i(e=>(0,He.join)($r(e),"project.json"),"metaFile"),Zn=i(e=>(0,He.join)($r(e),"feed.json"),"feedFile"),xn=i(e=>(0,He.join)($r(e),"runs"),"runsDir"),jf=i(()=>new Date().toISOString().replace(/[:.]/g,"-").slice(0,23),"tsName"),Xn={},he=new Map;i(Of,"loadAll");i($f,"migrateOldDb");Of();$f();yl=new Map,on=i(e=>{let t=he.get(e);t&&vt(Qn(e),t.meta)},"persistMeta"),Ht=i(e=>{let t=he.get(e);t&&vt(Zn(e),t.feed)},"persistFeed");i(Je,"settings");i(kl,"setSettings");La=i(e=>({id:e.meta.id,name:e.meta.name,config:e.meta.config||{},schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,log:e.meta.lastLog||[],runs:e.meta.runs||[],items:e.feed||[],ai:e.meta.ai||{},editedAt:e.meta.editedAt||0,tg:zr(e.meta.id)}),"shape");i(an,"listProjects");i(Pe,"getProject");i(Sl,"createProject");i(Tl,"updateProject");i(Ll,"deleteProject");i(Al,"markRead");i(Is,"setAiReport");i(Aa,"getAiReports");i(Ge,"tgState");i(lt,"setTgState");i(Ml,"rotateOwnerCode");i(zr,"tgPublic");i(Cl,"unsentItems");i(Dl,"markTgSent");i(Rl,"markAllTgSent");i(Nl,"unmarkTgSent");i(El,"setSentiment");i(Pl,"setRelevance");i(jl,"clearRelevance");i(Ol,"clearSentiment");i(xa,"runFiles");$s=i(e=>{try{return(0,Te.existsSync)(e)?(0,Te.statSync)(e).size:0}catch{return 0}},"fileBytes");i($l,"projectUsage");Ma=i(e=>Math.max(0,Math.min(1e5,+(e||{}).diskMb||0)),"diskLimitMb");i(zf,"enforceDiskLimit");i(Fs,"appendRunLog");i(zl,"deleteItems");i(_n,"mergeRun");Jn=(0,He.join)(Sa,"logs"),If=30,Il=i(e=>String(e||"проект").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"проект","safeName"),Fl=i(e=>{let t=new Date(e.slice(0,23).replace(/-(\d\d)-(\d\d)-(\d\d\d)$/,":$1:$2.$3")+"Z");if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p2");return X(t)+" "+n(t.getHours())+":"+n(t.getMinutes())},"humanTs"),Ff=i((e,t)=>(Fl(t)||t.slice(0,16)).replace(":","-")+" — "+Il(e)+".json","logFileName");i(Hl,"buildRunLog");i(ql,"saveRunLogCopy");i(Bl,"runLogJson");i(Ir,"listRuns");i(er,"getRun")});function Kl(){try{Nt=(0,qt.existsSync)(Hs)?JSON.parse((0,qt.readFileSync)(Hs,"utf8")):{}}catch{Nt={}}(!Nt||typeof Nt!="object")&&(Nt={})}function Uf(){try{(0,qt.mkdirSync)(Gl,{recursive:!0});let e=Hs+".tmp";(0,qt.writeFileSync)(e,JSON.stringify(Nt,null,2)),(0,qt.renameSync)(e,Hs)}catch{}}function Fr(e){try{return new URL(/:\/\//.test(e)?e:"https://"+e).host.replace(/^www\./,"")}catch{return String(e||"").trim()}}function Yl(e){let t=Nt[Fr(e)];return!t||!t.pick||!t.pick.date||t.runs%qs===qs-1?"":t.pick.date.via||""}function Jl(e,t){if(!t)return"";let n=Object.entries(t).filter(([l,p])=>l&&p>0);if(!n.length||n.reduce((l,[,p])=>l+p,0)<Gf)return"";n.sort((l,p)=>p[1]-l[1]);let[s,o]=n[0],a=Vl(Fr(e));a.pick=a.pick||{};let c=a.pick.date;if(!c||!c.via)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if(c.via===s)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if((t[c.via]||0)>=o*Wf)return a.pick.pending=null,"";let d=a.pick.pending&&a.pick.pending.via===s?a.pick.pending:{via:s,runs:0};return d.runs++,a.pick.pending=d,d.runs<Kf?"":(a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,c.via)}function Xl(e){let t=Nt[Fr(e)];return t&&t.pick&&t.pick.date?Ra(t.pick.date.via):""}function Ql(e){let t=Fr(e),n=Nt[t],r=new Set;if(!n)return{skip:r,host:t,reprobe:!1};if((n.zero||0)>=2&&n.everFound)return{skip:r,host:t,reprobe:!1};let s=n.runs%qs===qs-1;if(!s)for(let o of Ca){let a=n.ch[o];a&&a.dead>=Da&&r.add(o)}if(!s)for(let o of Wl){let a=n.ch[o];a&&a.idle>=Bf(o)&&r.add(o)}if(!s&&!n.everFound&&(n.zero||0)>=Da)for(let o of Ca)r.add(o);return{skip:r,host:t,reprobe:s}}function Zl(e,t){if(!t)return;let n=Fr(e),r=Vl(n);r.runs++;for(let a of Ca){let c=t[a];if(c==null)continue;let d=r.ch[a]=r.ch[a]||{dead:0,okEver:!1};c>0?(d.dead=0,d.okEver=!0):d.dead++}typeof t.total=="number"&&(r.zero=t.total>0?0:(r.zero||0)+1,t.total>0&&(r.everFound=!0));let s=t.contrib,o=new Set(t.notRun||[]);if(s&&t.total>0)for(let a of Wl){if(o.has(a)||a in t&&t[a]===null)continue;let c=r.ch[a]=r.ch[a]||{idle:0,okEver:!1};(Hf[a]||[a]).reduce((l,p)=>l+(s[p]||0),0)>0?(c.idle=0,c.okEver=!0):c.idle=(c.idle||0)+1}}function Na(){Uf()}function _l(){Kl()}var qt,Ul,Gl,Hs,Ca,Wl,Hf,Da,qf,Bf,qs,Nt,Vl,Gf,Wf,Kf,Ra,ed=J(()=>{qt=require("node:fs"),Ul=require("node:path");gt();Nr();Gl=we,Hs=(0,Ul.join)(Gl,"site-memory.json"),Ca=["render","external","sitesearch"],Wl=["sitemap","render","sitesearch"],Hf={sitemap:["sitemap"],render:["render","render*"],sitesearch:["браузер-поиск","браузер-поиск*"]},Da=4,qf={sitesearch:2},Bf=i(e=>qf[e]||Da,"idleLimit"),qs=5,Nt={};i(Kl,"load");i(Uf,"save");Kl();i(Fr,"hostOf");Vl=i(e=>Nt[e]=Nt[e]||{runs:0,ch:{}},"rec"),Gf=3;i(Yl,"datePick");Wf=.25,Kf=2;i(Jl,"recordPicks");Ra=i(e=>Bc[e]||e||"","pickRu");i(Xl,"datePickRu");i(Ql,"plan");i(Zl,"record");i(Na,"persist");i(_l,"reload")});var za={};Dr(za,{get:()=>Xf,persist:()=>Ys,reload:()=>Oa,set:()=>Qf,size:()=>em,summary:()=>$a});function td(e){if(!(0,st.existsSync)(e))return null;try{let t=JSON.parse((0,st.readFileSync)(e,"utf8"));return!t||!t.urls?{bad:"в файле нет записей"}:t}catch(t){return{bad:String(t&&t.message||t).slice(0,80)}}}function nd(e){if(e.v!==sd){ja=!0;return}for(let[t,n]of Object.entries(e.urls))n&&n.d&&Et.set(t,{d:n.d,t:n.t||Ks()})}function Oa(){Et=new Map,qr=!1,Us="",Gs=!1,Ws=!1,Pa=!1,ja=!1,Bs=0;let e=td(Hr);if(ad=e!==null,e&&!e.bad){nd(e);return}if(!e)return;Us=e.bad,Gs=!0;let t=td(od);t&&!t.bad&&(nd(t),Pa=!0)}function Xf(e){let t=Et.get(e);return t?(t.t!==Ks()&&(t.t=Ks(),qr=!0),t.d):null}function Qf(e,t){if(!e||!t)return;let n=Et.get(e);n&&n.d===t||(Et.set(e,{d:String(t),t:Ks()}),qr=!0)}function Zf(){if(Et.size<=Yf)return;let e=[...Et.entries()].sort((t,n)=>n[1].t-t[1].t).slice(0,Jf);Et=new Map(e)}function rd(e,t){try{return(0,st.existsSync)(e)?((0,st.renameSync)(e,t),!0):!1}catch{return!1}}function Ys(e=!1){if(!(!qr||Ws)&&!(!e&&Bs&&Date.now()-Bs<_f)){if(Gs){try{(0,st.existsSync)(Ea)&&(0,st.unlinkSync)(Ea)}catch{}if(!rd(Hr,Ea)){Ws=!0;return}Gs=!1}try{Zf(),(0,st.mkdirSync)(we,{recursive:!0});let t={};for(let[r,s]of Et)t[r]=s;let n=Hr+".tmp";(0,st.writeFileSync)(n,JSON.stringify({v:sd,urls:t})),rd(Hr,od),(0,st.renameSync)(n,Hr),qr=!1,Bs=Date.now()}catch{}}}function em(){return Et.size}function $a(){let e=Et.size;return Us?"память дат: ОСНОВНОЙ ФАЙЛ НЕ ПРОЧИТАЛСЯ ("+Us+") — "+(Pa?"взята запасная копия, потеряно только самое новое (в памяти "+e+")":"запасной копии тоже не было, память собирается заново (в памяти "+e+"); этот прогон и следующий будут дольше обычного")+(Ws?". Отложить нечитаемый файл не удалось, поэтому новые даты НЕ сохранены — старую память не трогаем":". Нечитаемый файл сохранён как date-cache.broken.json — не удаляйте его, по нему видно причину"):ja?"память дат сброшена: поменялся разбор дат — собирается заново (в памяти "+e+")":e?"память дат: "+e+" статей — повторно их не качаем":ad?"":"память дат пока пуста — первый прогон собирает её с нуля"}var st,Vs,Hr,sd,Yf,Jf,od,Ea,Et,qr,Us,Gs,Ws,Pa,ja,ad,Ks,_f,Bs,id=J(()=>{st=require("node:fs"),Vs=require("node:path");gt();Hr=(0,Vs.join)(we,"date-cache.json"),sd=3,Yf=2e5,Jf=15e4,od=(0,Vs.join)(we,"date-cache.prev.json"),Ea=(0,Vs.join)(we,"date-cache.broken.json"),Et=new Map,qr=!1,Us="",Gs=!1,Ws=!1,Pa=!1,ja=!1,ad=!1,Ks=i(()=>Math.floor(Date.now()/864e5),"today");i(td,"readFile");i(nd,"load");i(Oa,"reload");i(Xf,"get");i(Qf,"set");i(Zf,"prune");i(rd,"move");_f=typeof process<"u"&&process.env&&Number(process.env.MC_DC_SAVE_GAP_MS)||18e4,Bs=0;i(Ys,"persist");i(em,"size");i($a,"summary")});function cd(e){let t=i(n=>String(n).padStart(2,"0"),"p");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function tm(e,t){let n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return n.setDate(n.getDate()+t),n}function tr(e,t=new Date){let n=e||{},r=cd(t),s=n.periodMode||"fixed";if(s==="rolling"){let c=Number(n.periodDays),d=Number.isFinite(c)&&c>=ld?Math.floor(c):ld,l=cd(tm(t,-(d-1)));return{from:l,to:r,why:`скользящее окно: последние ${d} дн. (${l} … ${r})`}}if(s==="since"){let c=n.from||r;return c>r?{from:r,to:r,why:`начало (${c}) ещё не наступило — беру только сегодня`}:{from:c,to:r,why:`от даты и до сегодня (${c} … ${r})`}}let o=n.from||"",a=n.to||"";return!o&&!a?{from:o,to:a,why:"период НЕ ЗАДАН — беру за всё время, в выдачу попадёт и старое"}:o?a?{from:o,to:a,why:`фиксированное окно (${o} … ${a})`}:{from:o,to:a,why:`с ${o} и без конца — беру всё, что новее`}:{from:o,to:a,why:`без начала — беру всё до ${a} включительно`}}var ld,Js=J(()=>{i(cd,"ymdLocal");i(tm,"shiftDays");ld=2;i(tr,"resolvePeriod")});var md={};Dr(md,{engagementProbe:()=>Ba,facebookProfile:()=>Sn,fbRows:()=>Ga,fbWindow:()=>Ua,feedChunks:()=>hd,isFacebook:()=>nm,oldestAt:()=>Wa,parseFeed:()=>Gr,postFromEdge:()=>fd});function Sn(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^https?:\/\//i.test(t)?t:"https://"+t.replace(/^\/+/,""))}catch{return null}if(!/(^|\.)facebook\.com$|(^|\.)fb\.com$/i.test(n.hostname))return null;let r=n.searchParams.get("id"),s=n.pathname.split("/").filter(Boolean),o=/^profile\.php$/i.test(s[0]||"")?r?"profile.php?id="+r:"":s[0]||"";return!o||/^(groups|watch|marketplace|events|gaming|pages|stories|reel|photo|share|login|help|settings)$/i.test(o)?null:{name:o,url:"https://www.facebook.com/"+o,label:"facebook.com/"+o.replace(/^profile\.php\?id=/,"id")}}function rm(e){let t=[];for(let n of String(e||"").split(`
`)){let r=n.trim();if(!(!r||r[0]!=="{"))try{t.push(JSON.parse(r))}catch{}}return t}function hd(e){let t=[],n={cursor:"",hasNext:!1,seenFeed:!1};for(let r of rm(e)){let s=r&&r.data&&r.data.node&&r.data.node.timeline_list_feed_units;if(s){n.seenFeed=!0,Array.isArray(s.edges)&&t.push(...s.edges),s.page_info&&(n.cursor=s.page_info.end_cursor||"",n.hasNext=!!s.page_info.has_next_page);continue}if(sm(r&&r.path)&&r.data&&r.data.node){n.seenFeed=!0,t.push(r.data);continue}let o=r&&r.data&&r.data.page_info;o&&Array.isArray(r.path)&&r.path.includes("timeline_list_feed_units")&&(n.seenFeed=!0,n.cursor=o.end_cursor||n.cursor,n.hasNext=!!o.has_next_page)}return{edges:t,info:n}}function Br(e,t,{skip:n=["attached_story"],depth:r=9}={}){let s=new Set,o=i((a,c)=>{if(!a||typeof a!="object"||c>r||s.has(a))return;if(s.add(a),Array.isArray(a)){for(let l of a){let p=o(l,c+1);if(p!==void 0)return p}return}let d=t(a);if(d!==void 0)return d;for(let l of Object.keys(a)){if(n.includes(l))continue;let p=o(a[l],c+1);if(p!==void 0)return p}},"walk");return o(e,0)}function Ia(e){if(!e)return;let t=kn(e,"comet_sections","context_layout","story","comet_sections","metadata"),n=Array.isArray(t)?t.map(r=>nr(kn(r,"story","creation_time"))).find(r=>r!==void 0):void 0;return nr(e.creation_time)??nr(kn(e,"comet_sections","timestamp","story","creation_time"))??n??Br(e,r=>nr(r.creation_time),{skip:Ur})}function Fa(e){if(e)return Pt(kn(e,"message","text"))??Pt(kn(e,"comet_sections","message","story","message","text"))??Br(e,t=>t.message&&Pt(t.message.text)||void 0,{skip:Ur})}function am(...e){for(let t of e){let n=om(t);if(!n)continue;let r=pd(kn(n,"comment_rendering_instance","comments","total_count"))??pd(n.total_comment_count);if(r!==void 0)return r}return null}function Ba(e){let t=String(e||""),n=i(r=>(t.match(r)||[]).length,"hits");return{reactions:n(/"(?:reaction_count|i18n_reaction_count|top_reactions|reaction_display_strategy|likers)"/g),shares:n(/"(?:share_count|share_count_reduced|reshare_count)"/g)}}function fd(e){let t=e&&(e.node||e);if(!t||typeof t!="object")return null;let n=t.comet_sections&&t.comet_sections.content&&t.comet_sections.content.story||t,r=[n.attached_story,t.attached_story].filter(Boolean),s=i(l=>{for(let p of r){let f=l(p);if(f!==void 0&&f!=="")return f}},"pickAt"),o=ud(n)??ud(t),a=qa(n)??qa(t);if(!o&&!a)return null;let c=Ha(n)??Ha(t)??{name:"",url:""},d={id:o||a,url:a||"",at:Ia(t)??Ia(n)??0,author:c.name,authorUrl:c.url,text:Fa(n)??Fa(t)??"",comments:am(t,n),repost:null};if(r.length){let l=s(Ha)||{name:"",url:""};d.repost={author:l.name,authorUrl:l.url,url:s(qa)||"",text:s(Fa)||"",at:s(Ia)||0}}return d}function Gr(e){let{edges:t,info:n}=hd(e),r=[],s=new Set;for(let o of t){let a=fd(o);a&&(s.has(a.id)||(s.add(a.id),r.push(a)))}return{posts:r,cursor:n.cursor,hasNext:n.hasNext,seenFeed:n.seenFeed}}function Ua(e,t,n=Date.now()){let r=Math.max(1,Math.min(3,+t||1)),s=i((l,p)=>{if(!l)return NaN;let f=new Date(String(l)+p).getTime();return Number.isFinite(f)?f:NaN},"stamp"),o=s(e&&e.from,"T00:00:00"),a=s(e&&e.to,"T23:59:59"),c=Math.max(Number.isFinite(o)?o:-1/0,n-r*864e5),d=Math.min(Number.isFinite(a)?a:1/0,n);return{fromMs:c,toMs:d,days:r}}function Ga(e,{groups:t,exGroups:n=[],source:r,fromMs:s,toMs:o}){if(!Number.isFinite(s)||!Number.isFinite(o))throw new Error("окно времени не посчиталось ("+s+" … "+o+") — это ошибка в программе, а не в настройках");let a=Vn(t),c=[],d={всего:0,"вне периода":0,"без даты":0,"ключа нет":0,"минус-слово":0};for(let l of e){if(d.всего++,!l.at){d["без даты"]++;continue}let p=l.at*1e3;if(p<s||p>o){d["вне периода"]++;continue}let f=l.text||"",u=l.repost&&l.repost.text||"",h=!!f&&Ze(f.toLowerCase(),t),m=!!u&&Ze(u.toLowerCase(),t);if(!h&&!m){d["ключа нет"]++;continue}if(n.length&&Ze((f+" "+u).toLowerCase(),n)){d["минус-слово"]++;continue}let w=l.repost?"репост":"авторский",g=h&&m?"в подписи и в репосте":h?"в подписи":"в тексте репоста",b=h?f:u,y=b.split(`
`).map(L=>L.trim()).find(Boolean)||"(без текста)";c.push({source:r,date:new Date(p).toISOString(),title:y.slice(0,120),url:l.url,channel:"facebook",channels:"facebook",match:h?"подпись":"репост",snippet:Kn(b,a),author:l.author||"",kind:w,via:l.repost?(l.repost.author||"чужой пост")+(l.repost.url?" — "+l.repost.url:""):"",matchIn:g,comments:Number.isFinite(l.comments)?l.comments:null})}return{rows:c,tally:d}}var nm,sm,nr,Pt,kn,Ur,dd,Ha,qa,ud,om,pd,Wa,Wr=J(()=>{Yn();i(Sn,"facebookProfile");nm=i(e=>!!Sn(e),"isFacebook");i(rm,"jsonLines");sm=i(e=>Array.isArray(e)&&e.length>=2&&e[e.length-2]==="edges"&&typeof e[e.length-1]=="number"&&e.includes("timeline_list_feed_units"),"isEdgeChunk");i(hd,"feedChunks");i(Br,"deep");nr=i(e=>typeof e=="number"&&isFinite(e)&&e>0?e:void 0,"num"),Pt=i(e=>typeof e=="string"&&e.trim()?e:void 0,"str"),kn=i((e,...t)=>t.reduce((n,r)=>n==null?n:n[r],e),"get"),Ur=["attached_story","attachments","attachment","style_infos","media"];i(Ia,"timeOf");i(Fa,"textOf");dd=i(e=>{if(!e||!Array.isArray(e.actors)||!e.actors.length)return;let t=e.actors[0];return t&&Pt(t.name)?{name:t.name,url:Pt(t.url)||""}:void 0},"oneActor"),Ha=i(e=>e?dd(e)??Br(e,dd,{skip:Ur}):void 0,"actorOf"),qa=i(e=>e?Pt(e.wwwURL)??Pt(e.permalink_url)??Br(e,t=>Pt(t.wwwURL)||Pt(t.permalink_url),{skip:Ur}):void 0,"urlOf"),ud=i(e=>e?Pt(e.post_id)??(nr(e.post_id)?String(e.post_id):void 0)??Br(e,t=>Pt(t.post_id)||(nr(t.post_id)?String(t.post_id):void 0),{skip:Ur}):void 0,"idOf"),om=i(e=>kn(e,"comet_sections","feedback","story","story_ufi_container","story","feedback_context","feedback_target_with_context"),"ufiOf"),pd=i(e=>typeof e=="number"&&Number.isFinite(e)&&e>=0?e:void 0,"count");i(am,"commentsOf");i(Ba,"engagementProbe");i(fd,"postFromEdge");i(Gr,"parseFeed");i(Ua,"fbWindow");i(Ga,"fbRows");Wa=i(e=>e.reduce((t,n)=>n.at&&(!t||n.at<t)?n.at:t,0),"oldestAt")});function jt(e){let t=!!(e&&e.noExternal);return{ai:!t,bot:!t,extSearch:!t,locked:t}}var rr,sr=J(()=>{i(jt,"outbound");rr="у проекта запрещена отправка данных во внешний контур (настройка проекта)"});var Xa={};Dr(Xa,{DEFAULT_LIMIT:()=>Tn,_reset:()=>dm,canVisit:()=>Qs,nextAt:()=>im,note:()=>Ja,persist:()=>Ya,reload:()=>Va,summary:()=>lm,visitsToday:()=>cm});function Va(){Xt=new Map;try{let e=(0,Bt.existsSync)(Kr)?JSON.parse((0,Bt.readFileSync)(Kr,"utf8")):null;for(let[t,n]of Object.entries(e&&e.hosts||{}))Array.isArray(n)&&Xt.set(t,n.filter(r=>typeof r=="number"&&isFinite(r)))}catch{Xt=new Map}return Yr=!1,Xt.size}function Ya(){if(!Yr)return!1;try{(0,Bt.mkdirSync)((0,Xs.dirname)(Kr),{recursive:!0});let e={};for(let[n,r]of Xt)r.length&&(e[n]=r);let t=Kr+".tmp";return(0,Bt.writeFileSync)(t,JSON.stringify({v:1,hosts:e},null,2)),(0,Bt.renameSync)(t,Kr),Yr=!1,!0}catch{return!1}}function Qs(e,{limit:t=Tn,now:n=Date.now()}={}){let r=Math.max(1,+t||Tn),s=Jr(e,n);if(s.length>=r){let c=Vr-(n-Math.min(...s));return{ok:!1,used:s.length,limit:r,why:"за сутки уже "+s.length+" захода из "+r+" — следующий через "+Ka(c)}}let o=Math.floor(Vr/r),a=s.length?Math.max(...s):0;if(a&&n-a<o){let c=n-a;return{ok:!1,used:s.length,limit:r,why:(c<6e4?"заходили только что":"заходили "+Ka(c)+" назад")+" — на профиль ходим не чаще раза в "+Ka(o)}}return{ok:!0,used:s.length,limit:r,why:""}}function Ja(e,t=Date.now()){let n=Jr(e,t);return n.push(t),Xt.set(e,n),Yr=!0,n.length}function im(e,{limit:t=Tn,now:n=Date.now()}={}){if(Qs(e,{limit:t,now:n}).ok)return 0;let s=Jr(e,n),o=Math.max(1,+t||Tn);return s.length>=o?Math.min(...s)+Vr:Math.max(...s)+Math.floor(Vr/o)}function dm(){Xt=new Map,Yr=!1}var Bt,Xs,Kr,Vr,Tn,Xt,Yr,Jr,Ka,cm,lm,Qa=J(()=>{Bt=require("node:fs"),Xs=require("node:path");gt();Kr=(0,Xs.join)(we,"social-visits.json"),Vr=24*3600*1e3,Tn=3,Xt=new Map,Yr=!1;i(Va,"reload");i(Ya,"persist");Jr=i((e,t)=>(Xt.get(e)||[]).filter(n=>t-n<Vr),"fresh"),Ka=i(e=>{let t=Math.round(e/6e4);if(t<1)return"только что";if(t<60)return t+" мин";let n=Math.floor(t/60),r=t%60;return n+" ч"+(r?" "+r+" мин":"")},"hhmm");i(Qs,"canVisit");i(Ja,"note");i(im,"nextAt");cm=i((e,t=Date.now())=>Jr(e,t).length,"visitsToday"),lm=i((e=Date.now())=>{let t=[...Xt.keys()].filter(n=>Jr(n,e).length).length;return t?"профилей соцсетей посещено за сутки: "+t:""},"summary");i(dm,"_reset")});function gd(e,t){typeof e=="function"&&(_a=e),typeof t=="function"&&(ei=t)}function wd(e){typeof e=="function"&&(ti=e)}function bd(e){typeof e=="function"&&(ni=e)}async function or(e,t,n={}){let r=typeof n.onStep=="function"?n.onStep:null,s=typeof n.stopping=="function"?n.stopping:()=>!1,o=!1,a=e.config||{};if(!String(a.keyword||"").trim())return{rows:[],log:[{site:"(проект)",channel:"—",found:0,note:"не задан запрос — прогон пропущен"}]};fl(),_l(),Oa(),cl(za);let c=(a.sites||[]).map(R=>String(R).trim()).filter(Boolean),d=tr(a),l=jt(a),p={keyword:a.keyword,exclude:a.exclude||"",morph:a.morph!==!1,from:d.from,to:d.to,...l.extSearch?{}:{external:!1}},f=[],u=[],h=new Map,m=Date.now(),w=c.length+(a.facebook||[]).filter(R=>String(R||"").trim()).length+(a.youtube&&a.youtube.enabled?1:0),g=0,b=i(R=>{if(r)try{r({done:g,total:w,found:f.length,site:R||""})}catch{}},"tick");b(""),ei&&ei();let y=0,L=0,v=i(()=>{if(t)try{t(f.slice(),u.slice())}catch{}},"checkpoint"),T=i(async()=>{for(;y<c.length;){if(s()){o=!0;break}let R=c[y++],B=Date.now();b(R);try{let{skip:U,reprobe:Z}=Ql(R),ve=Yl(R),Me=await Ps(R,{...p,skip:U,reprobe:Z,datePick:ve});Zl(R,Me.stats);let Ce=Jl(R,Me.stats&&Me.stats.picks),P=Xl(R);P&&(Me.note=(Me.note?Me.note+"; ":"")+(Ce?"дата теперь берётся иначе: было «"+Ra(Ce)+"», стало «"+P+"» — сайт сменил разметку":"дата: "+P));for(let G of Me.rows){if(!G.url)continue;let D=Se(G.url),$=h.get(D);if($){$.channels=[...new Set(($.channels+" + "+(G.channels||"")).split(" + ").filter(Boolean))].join(" + ");continue}h.set(D,G),f.push(G)}u.push({site:R,channel:Me.channel,found:Me.rows.length,note:Me.note,ms:Date.now()-B})}catch(U){u.push({site:R,channel:"error",found:0,note:String(U&&U.message||U),ms:Date.now()-B})}g++,b(""),++L%3===0&&(Na(),Ys(),v())}},"worker");await Promise.all(Array.from({length:Math.min(4,c.length||1)},T)),Na(),Ys(!0),v();let k=(a.facebook||[]).map(R=>Sn(R)).filter(Boolean);if(k.length){let R=Math.max(1,Math.min(6,+a.fbVisits||Tn)),B=Date.now(),{fromMs:U,toMs:Z,days:ve}=Ua(d,a.fbDays,B),Me=Jt(a.keyword,a.morph!==!1),Ce=Jt(a.exclude||"",a.morph!==!1);Va(),u.push({site:"(фейсбук)",channel:"—",found:0,note:"профилей "+k.length+"; окно "+ve+" сут. ("+new Date(U).toLocaleString("ru-RU")+" … "+new Date(Z).toLocaleString("ru-RU")+"); на профиль не чаще "+R+" раз в сутки"});for(let P of k){if(s()){o=!0;break}let G=Date.now();b(P.label);let D=Qs(P.label,{limit:R});if(!D.ok){u.push({site:P.label,channel:"facebook",found:0,note:"пропущен: "+D.why});continue}if(!ni){u.push({site:P.label,channel:"facebook",found:0,note:"нет браузера — соцсети читаются только с Playwright (запусти setup-windows.bat)"});continue}try{Ja(P.label);let $=await ni(P.url,{sinceMs:U,maxScrolls:ve<=1?3:6});if(!$||!$.ok){u.push({site:P.label,channel:"facebook",found:0,ms:Date.now()-G,note:$&&$.err||"лента не прочитана"});continue}let A=$.chunks.join(`
`),de=Gr(A),{rows:ae,tally:ie}=Ga(de.posts,{groups:Me,exGroups:Ce,source:P.label,fromMs:U,toMs:Z});for(let pe of ae){let Xe=Se(pe.url);h.has(Xe)||(h.set(Xe,pe),f.push(pe))}let Q=["постов просмотрено "+de.posts.length+" (прокруток "+($.scrolls||0)+")","совпало "+ae.length],be=de.posts.reduce((pe,Xe)=>Xe.at&&(!pe||Xe.at<pe)?Xe.at:pe,0);Q.push(be&&be*1e3<=U?"докрутились до начала окна":"до начала окна НЕ докрутились — в ленте могло остаться ещё"+(be?" (дошли до "+new Date(be*1e3).toLocaleString("ru-RU")+")":""));let at=Object.entries(ie).filter(([pe,Xe])=>pe!=="всего"&&Xe).map(([pe,Xe])=>pe+" — "+Xe);at.length&&Q.push("отсеяно: "+at.join(", "));let nt=de.posts.filter(pe=>Number.isFinite(pe.comments)).length;Q.push("счётчик комментариев приехал у "+nt+" постов из "+de.posts.length);let ke=Ba(A);Q.push(ke.reactions?"признаки реакций в ответах встретились "+ke.reactions+" раз — есть что разбирать":"реакций Фейсбук в этих ответах не прислал — показывать нечего"),u.push({site:P.label,channel:"facebook",found:ae.length,ms:Date.now()-G,note:Q.join("; ")})}catch($){u.push({site:P.label,channel:"facebook",found:0,ms:Date.now()-G,note:String($&&$.message||$)})}g++,b(""),v()}Ya()}if(a.youtube&&a.youtube.enabled&&!s()){b("youtube");try{let R=await bl(a.keyword,{exclude:a.exclude||"",morph:a.morph!==!1,ytRange:a.youtube.range||"month",from:d.from,to:d.to});for(let B of R.rows)B.url&&!h.has(B.url)&&(h.set(B.url,B),f.push(B));u.push({site:"youtube",channel:R.channel,found:R.rows.length,note:R.note})}catch(R){u.push({site:"youtube",channel:"error",found:0,note:String(R)})}g++,b("")}o&&u.push({site:"(остановлен)",channel:"—",found:0,note:"сбор остановлен человеком: пройдено источников "+g+" из "+w+". Найденное сохранено, остальные источники не читались"}),u.push({site:"(период)",channel:"—",found:0,note:d.why,from:d.from||"",to:d.to||""});let x=$a();if(x&&u.push({site:"(память дат)",channel:"—",found:0,note:x}),ti)try{await ti()}catch{}let C=Date.now()-m,E=_a?_a():null,I=u.filter(R=>R.ms).sort((R,B)=>B.ms-R.ms).slice(0,5).map(R=>String(R.site).replace(/^https?:\/\//,"").replace(/\/$/,"")+" "+Math.round(R.ms/1e3)+" с"),N=["прогон занял "+Za(C)+" (сайтов "+c.length+", по 4 разом)"];if(E&&E.ops){let R=Math.max(1,E.lanes||1),B=E.busyMs/R,U=Math.round(B/Math.max(1,C)*100);N.push("браузер ("+R+" "+(R===1?"окно":R<5?"окна":"окон")+"): "+Za(E.busyMs)+" за "+E.ops+" операций"+(R>1?", то есть "+Za(Math.round(B))+" в один поток":"")+" — это "+U+"% времени прогона и его нижняя граница")}if(I.length&&N.push("дольше всех (с ожиданием очереди): "+I.join(", ")),E&&E.byHost){let R=Object.entries(E.byHost).sort((B,U)=>U[1].ms-B[1].ms).slice(0,5).map(([B,U])=>B+" "+Math.round(U.ms/1e3)+" с/"+U.ops+" оп.");R.length&&N.push("браузер съели: "+R.join(", "))}return u.push({site:"(время)",channel:"—",found:0,note:N.join("; "),ms:C}),f.sort((R,B)=>String(B.date||"").localeCompare(String(R.date||""))),{rows:f,log:u}}var _a,ei,ti,ni,Za,Xr=J(()=>{Yn();ed();id();Js();Nr();Wr();sr();Qa();_a=null,ei=null;i(gd,"setBrowserStats");ti=null;i(wd,"setBrowserCloser");ni=null;i(bd,"setFacebookReader");Za=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"mmss");i(or,"runProject")});var tt,Qr=J(()=>{tt=new Set});function ar(e,{name:t="",total:n=0,by:r="ручной"}={}){Ln.set(String(e),{id:String(e),name:String(t||""),by:r,startedAt:Date.now(),total:+n||0,done:0,found:0,site:"",stopping:!1})}function ir(e,{done:t,total:n,found:r,site:s}={}){let o=Ln.get(String(e));o&&(Number.isFinite(+t)&&(o.done=+t),Number.isFinite(+n)&&+n>0&&(o.total=+n),Number.isFinite(+r)&&(o.found=+r),s!=null&&(o.site=String(s)))}function Zs(e){let t=Ln.get(String(e));return t?(t.stopping=!0,!0):!1}function cr(e){let t=Ln.get(String(e));return!!(t&&t.stopping)}function lr(e){Ln.delete(String(e))}function dr(){return Array.from(Ln.values()).map(e=>({id:e.id,name:e.name,by:e.by,startedAt:e.startedAt,total:e.total,done:e.done,found:e.found,site:e.site,stopping:e.stopping,ms:Date.now()-e.startedAt}))}function yd(e){return Ln.has(String(e))}var Ln,Zr=J(()=>{Ln=new Map;i(ar,"begin");i(ir,"step");i(Zs,"askStop");i(cr,"stopping");i(lr,"end");i(dr,"snapshot");i(yd,"active")});function _r(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^t\.me\/s\//,"t.me/").replace(/^@/,"t.me/").replace(/\/+$/,"")}var ri,vd,xd,kd,si=J(()=>{ri=[{url:"kz.kursiv.media",name:"Курсив"},{url:"zakon.kz",name:"Zakon.kz"},{url:"kapital.kz",name:"Капитал"},{url:"informburo.kz",name:"Informburo"},{url:"tengrinews.kz",name:"Tengrinews"},{url:"kazpravda.kz",name:"Казахстанская правда"},{url:"baq.kz",name:"BAQ.kz"},{url:"khabar.kz",name:"Хабар"},{url:"turkystan.kz",name:"Túrkistan"},{url:"24.kz",name:"24.kz"},{url:"liter.kz",name:"Литер"},{url:"caravan.kz",name:"Караван"},{url:"newtimes.kz",name:"NewTimes"},{url:"stan.kz",name:"Stan.kz"},{url:"lada.kz",name:"Лада (Актау)"},{url:"sn.kz",name:"Столичная жизнь"},{url:"vechastana.kz",name:"Вечерняя Астана"},{url:"aikyn.kz",name:"Айқын"},{url:"ulysmedia.kz",name:"Ulys Media"},{url:"malim.kz",name:"Malim"},{url:"vlast.kz",name:"Власть"},{url:"astanatv.kz",name:"Астана ТВ"},{url:"exclusive.kz",name:"Exclusive"},{url:"forbes.kz",name:"Forbes Казахстан"},{url:"mgorod.kz",name:"Мой город (Уральск)"},{url:"politico.kz",name:"Politico.kz"},{url:"sputnik.kz",name:"Sputnik Казахстан"},{url:"almaty.tv",name:"Алматы ТВ"},{url:"qazaqstan.tv",name:"Qazaqstan"},{url:"democrat.kz",name:"Democrat"},{url:"arasha.kz",name:"Arasha"},{url:"press.kz",name:"Press.kz"},{url:"365info.kz",name:"365info"},{url:"lsm.kz",name:"LS (lsm.kz)"},{url:"inbusiness.kz",name:"InBusiness"},{url:"factcheck.kz",name:"Factcheck.kz"},{url:"egemen.kz",name:"Egemen Qazaqstan"},{url:"ratel.kz",name:"Ratel"},{url:"nur.kz",name:"NUR.KZ"},{url:"time.kz",name:"Время"},{url:"uralskweek.kz",name:"Уральская неделя"},{url:"yujanka.kz",name:"Южанка"},{url:"adyrna.kz",name:"Адырна"},{url:"masa.media",name:"Masa Media"}],vd=[{url:"bbc.com",name:"BBC"},{url:"theguardian.com",name:"The Guardian"},{url:"aljazeera.com",name:"Al Jazeera"},{url:"dw.com",name:"Deutsche Welle",note:"поиск сайта работает (параметр item)"},{url:"cnn.com",name:"CNN"},{url:"euronews.com",name:"Euronews",note:"поиск сайта работает"},{url:"npr.org",name:"NPR"},{url:"cbsnews.com",name:"CBS News"},{url:"nbcnews.com",name:"NBC News"},{url:"abcnews.com",name:"ABC News",note:"карта новостей на 1000 адресов с заголовками"},{url:"independent.co.uk",name:"The Independent"},{url:"straitstimes.com",name:"The Straits Times"},{url:"time.com",name:"TIME"},{url:"usatoday.com",name:"USA Today"},{url:"newsweek.com",name:"Newsweek"},{url:"japantimes.co.jp",name:"The Japan Times",note:"из облака отдавал 403; RSS живой"},{url:"france24.com",name:"France 24",note:"из облака отдавал 403 — проверить прогоном"},{url:"apnews.com",name:"Associated Press",note:"из облака отдавал 403 — проверить прогоном"}],xd=[{url:"ria.ru",name:"РИА Новости",note:"поиск сайта работает"},{url:"lenta.ru",name:"Лента.ру",note:"поиск сайта работает (отдаёт JSON)"},{url:"rbc.ru",name:"РБК",note:"карта новостей на 429 адресов с заголовками"},{url:"kommersant.ru",name:"Коммерсантъ",note:"поиск сайта работает"},{url:"vedomosti.ru",name:"Ведомости",note:"карта новостей с заголовками"},{url:"interfax.ru",name:"Интерфакс"},{url:"iz.ru",name:"Известия",note:"главная отдаёт 403, а RSS и карты живые"},{url:"mk.ru",name:"Московский комсомолец",note:"поиск сайта работает; режет частоту"},{url:"aif.ru",name:"Аргументы и факты",note:"поиск сайта работает"},{url:"kp.ru",name:"Комсомольская правда"},{url:"news.ru",name:"NEWS.ru",note:"поиск запрещён robots сайта; ленты открыты"},{url:"life.ru",name:"Life"},{url:"vesti.ru",name:"Вести",note:"карта новостей на 919 свежих адресов"},{url:"1tv.ru",name:"Первый канал"},{url:"ntv.ru",name:"НТВ"},{url:"bfm.ru",name:"BFM.ru",note:"поиск сайта работает"},{url:"fontanka.ru",name:"Фонтанка"},{url:"business-gazeta.ru",name:"Бизнес Online"},{url:"svpressa.ru",name:"Свободная пресса"}],kd=[{url:"t.me/ktknews",name:"КТК",note:"вместо ktk.kz — сайт целиком за защитой"},{url:"t.me/kaztag_tg",name:"КазТАГ",note:"вместо kaztag.kz — статьи за Cloudflare"},{url:"t.me/dknews_kz",name:"ДК News",note:"вместо dknews.kz — поиск только через браузер"},{url:"t.me/tass_agency",name:"ТАСС"},{url:"t.me/negemedia",name:"negemedia"},{url:"t.me/syrymitkulov",name:"Сырым Иткулов"},{url:"t.me/qumash_kz",name:"qumash_kz"},{url:"t.me/myastanacity",name:"My Astana City"},{url:"t.me/azattyqasia",name:"Azattyq Asia"},{url:"t.me/azattyq_ruhy",name:"Azattyq Rýhy"},{url:"t.me/Zanamiviehali",name:"Zanamiviehali"},{url:"t.me/prokadrykz",name:"Про кадры KZ"},{url:"t.me/bessimptomno",name:"Бессимптомно"},{url:"t.me/ztb_qazaq",name:"ztb_qazaq"},{url:"t.me/ztb_qaz",name:"ztb_qaz"},{url:"t.me/egovpress",name:"eGov Press"},{url:"t.me/nehabar",name:"НеХабар"},{url:"t.me/kozachkow",name:"kozachkow"},{url:"t.me/gaziz1984",name:"gaziz1984"},{url:"t.me/adyrnaportal",name:"Adyrna"},{url:"t.me/yedilov_online",name:"Yedilov online"},{url:"t.me/basekz",name:"BASE KZ"},{url:"t.me/chinovnik_kz",name:"Чиновник KZ"},{url:"t.me/respublikaKZmediaNEWS",name:"Республика KZ"},{url:"t.me/dashimbayev",name:"dashimbayev"},{url:"t.me/KrivosheyevD",name:"Кривошеев"},{url:"t.me/nkorganbekova",name:"Н. Корганбекова"}];i(_r,"normSource")});function xt(e){if(!e)return"";let t=new Date(e);if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p");return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function um(e){let t=new Date(e);return isNaN(t.getTime())?-1:t.getHours()}function pm(e){let t=new Date(e);return isNaN(t.getTime())?-1:(t.getDay()+6)%7}function hm(e){let t=String(e||""),n=t.match(/прогон занял\s+(\d+)\s+мин\s+(\d+)\s+с/),r=t.match(/прогон занял\s+(\d+)\s+с/),s=n?+n[1]*60+ +n[2]:r?+r[1]:null,o=t.match(/браузер[^:]*:\s+(\d+)\s+мин\s+(\d+)\s+с/),a=t.match(/браузер[^:]*:\s+(\d+)\s+с/),c=o?+o[1]*60+ +o[2]:a?+a[1]:null;return{total:s,browser:c}}function fm(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function eo(e,t=15){return[...e.entries()].map(([n,r])=>({key:n,count:r})).sort((n,r)=>r.count-n.count||n.key.localeCompare(r.key)).slice(0,t)}function Qt(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function to(e,t={}){let n=Pe(e);if(!n)return[];let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?xt(new Date(Date.now()-(r-1)*864e5).toISOString()):null;return(n.items||[]).filter(o=>o&&o.title&&o.date&&(!s||xt(o.date)>=s)).map(o=>({title:o.title,url:o.url,source:o.source,date:o.date,snippet:o.snippet||"",sent:o.sent||"",sentWhy:o.sentWhy||"",rel:o.rel||"",relWhy:o.relWhy||"",match:o.match||"",kind:Qt(o.source),comments:Number.isFinite(o.comments)?o.comments:null}))}function no(e,t){let n=Pe(e);return n?/^\d{4}-\d{2}-\d{2}$/.test(String(t||""))?(n.items||[]).filter(r=>r&&r.date&&xt(r.date)===t).sort((r,s)=>+new Date(s.date)-+new Date(r.date)).map(r=>({title:r.title||"",url:r.url||"",source:r.source||"",date:r.date,kind:Qt(r.source),rel:r.rel||""})):[]:null}function ln(e,t={}){let n=Pe(e);if(!n)return null;let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?xt(new Date(Date.now()-(r-1)*864e5).toISOString()):null,o=i(j=>!s||j&&j>=s,"inWindow"),a=(n.items||[]).filter(j=>j.date&&o(xt(j.date))),c=new Map;for(let j of a){let xe=xt(j.date);xe&&c.set(xe,(c.get(xe)||0)+1)}let d=[...c.keys()].sort(),l=s,p=d[d.length-1]||xt(new Date().toISOString());l||(l=d[0]||p);let f=[];for(let j=+new Date(l+"T00:00:00");j<=+new Date(p+"T00:00:00");j+=864e5){let xe=xt(new Date(j).toISOString());f.push({day:xe,count:c.get(xe)||0})}let u=new Map,h=new Map,m={site:0,telegram:0,youtube:0,facebook:0},w=0,g=0,b=0,y=0,L=0,v=Array.from({length:7},()=>Array(24).fill(0));for(let j of a){u.set(j.source,(u.get(j.source)||0)+1);let xe=String(j.channel||"неизв.").replace(/\*$/,"");h.set(xe,(h.get(xe)||0)+1),m[Qt(j.source)]++,j.match==="title"?w++:j.match==="post"?b++:j.match==="body"?g++:j.match==="video"?y++:L++;let De=um(j.date),We=pm(j.date);De>=0&&We>=0&&v[We][De]++}let T=i(j=>j.map(xe=>({...xe,kind:fm(xe.key)})),"withKind"),k=T(eo(new Map([...u].filter(([j])=>Qt(j)==="site")),10)),x=T(eo(new Map([...u].filter(([j])=>Qt(j)!=="site")),10)),C=T(eo(u,20)),E=eo(h,12),I=a.slice(0,25).map(j=>({date:j.date,source:j.source,title:j.title,url:j.url,channel:j.channel,channels:j.channels,match:j.match,kind:Qt(j.source)})),N=Ir(e),R=s?+new Date(s+"T00:00:00"):null,B=R?N.filter(j=>(j.at||0)>=R):N,U=[],Z=[],ve=[];for(let j of B.slice(0,50)){let De=((er(e,j.ts)||{}).log||[]).find(Cr=>Cr&&Cr.site==="(время)"),{total:We,browser:At}=hm(De?De.note:"");We!=null&&(Z.push(We),At!=null&&We>0&&ve.push(At/We*100)),U.push({ts:j.ts,at:j.at,found:j.found||0,added:j.added||0,sec:We,browserSec:At})}U.reverse();let Me=u.size,Ce=xt(new Date(Date.now()-6*864e5).toISOString()),P=a.filter(j=>xt(j.date)>=Ce).length,G=i(j=>{if(!j.length)return null;let xe=[...j].sort((We,At)=>We-At),De=xe.length>>1;return xe.length%2?xe[De]:Math.round((xe[De-1]+xe[De])/2)},"median"),D=G(Z),$=ve.length?Math.round(G(ve)):null,A=D?Z.filter(j=>j>D*3&&j>D+60).length:0,de=Z.length?Math.max(...Z):null,ae=m.telegram+m.youtube+m.facebook,ie=(n.config&&n.config.sites||[]).map(j=>String(j||"").trim()).filter(Boolean),Q=new Set([...u.keys()].map(_r)),be=ie.filter(j=>!Q.has(_r(j))),at={configured:ie.length,active:ie.length-be.length,list:be.slice(0,60).map(j=>_r(j)),more:Math.max(0,be.length-60)},nt=new Map,ke=0,pe=0,Xe=0;for(let j of a){if(!j.sent)continue;j.sent==="+"?ke++:j.sent==="0"?pe++:j.sent==="-"&&Xe++;let xe=_r(j.source||""),De=nt.get(xe)||{key:xe,pos:0,neu:0,neg:0};j.sent==="+"?De.pos++:j.sent==="0"?De.neu++:j.sent==="-"&&De.neg++,nt.set(xe,De)}let Kt=0,zn=0,In=0;for(let j of a)j.rel&&(Kt++,j.rel==="-"?zn++:j.rel==="0"&&In++);let Mr={checked:Kt,off:zn,dim:In},ze={total:ke+pe+Xe,pos:ke,neu:pe,neg:Xe,bySource:[...nt.values()].sort((j,xe)=>xe.neg-j.neg||xe.pos+xe.neu+xe.neg-(j.pos+j.neu+j.neg))};return{overview:{items:a.length,uniqueSources:Me,runs:B.length,itemsWeek:P,medRunSec:D,browserPct:$,slowRuns:A,maxRunSec:de,matchTitle:w,matchBody:g,matchPost:b,matchVideo:y,matchOther:L,siteItems:m.site,telegramItems:m.telegram,youtubeItems:m.youtube,facebookItems:m.facebook,socialItems:ae,keyword:n.config.keyword||"",from:n.config.from||null,to:n.config.to||null,windowDays:r,windowFrom:l,windowTo:p},byDay:f,bySource:C,bySite:k,bySocial:x,byChannel:E,byHour:v,runs:U,feed:I,silent:at,tone:ze,relevance:Mr}}var es=J(()=>{Rt();si();i(xt,"localDay");i(um,"localHour");i(pm,"localDow");i(hm,"parseTime");i(fm,"kindOf");i(eo,"top");i(Qt,"platformOf");i(to,"windowItems");i(no,"dayItems");i(ln,"buildAnalytics")});function mm(e){return String(e||"").toLowerCase().replace(/ё/g,"е").replace(/[^\p{L}\p{N}]+/gu," ").replace(/\s+/g," ").trim()}function gm(e){let t=new Map,n=[];for(let r of e||[]){if(!r||!r.title)continue;let s=mm(r.title),o=s.length>=Sd?t.get(s):null;if(o){o.items.push(r);continue}let a={items:[r]};s.length>=Sd&&t.set(s,a),n.push(a)}for(let r of n)r.items.sort((s,o)=>(+new Date(s.date)||0)-(+new Date(o.date)||0)),r.first=r.items[0],r.date=r.first.date;return n}function oi(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^@/,"t.me/").replace(/\/+$/,"")}function wm(e){let t=new Map;for(let n of String(e||"").replace(/https?:\/\//gi,"").split(/\r?\n/)){let r=n.match(/^\s*(\S.*?)(?:\s*[—–:=]\s*|\s+-\s+)(.+?)\s*$/);if(!r)continue;let s=oi(r[1]),o=r[2].trim();s&&o&&t.set(s,o)}return t}function Td(e,t){if(!e||!e.size)return"";let n=oi(t);if(e.has(n))return e.get(n);for(let[r,s]of e)if(n.endsWith("."+r))return s;return""}function bm(e,t){let n=i(o=>{let a=String(o||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return a?{y:+a[1],m:+a[2],d:+a[3]}:null},"p"),r=n(e),s=n(t);if(!r&&!s)return"за всё время наблюдения";if(!r||!s){let o=r||s;return o.d+" "+An[o.m-1]+" "+o.y+" г."}return r.y===s.y&&r.m===s.m&&r.d===s.d?r.d+" "+An[r.m-1]+" "+r.y+" г.":r.y===s.y&&r.m===s.m?r.d+"–"+s.d+" "+An[r.m-1]+" "+r.y+" г.":r.y===s.y?r.d+" "+An[r.m-1]+" – "+s.d+" "+An[s.m-1]+" "+r.y+" г.":r.d+" "+An[r.m-1]+" "+r.y+" г. – "+s.d+" "+An[s.m-1]+" "+s.y+" г."}function ro({items:e,cfg:t={},from:n,to:r,withSnippets:s=!0,localDay:o}){let a=o||(T=>String(T||"").slice(0,10)),c=(e||[]).filter(T=>T&&T.title&&T.rel!=="-"),d=(e||[]).filter(T=>T&&T.title&&T.rel==="-").length,l=gm(c),p=l.slice().sort((T,k)=>(+new Date(k.date)||0)-(+new Date(T.date)||0)).slice(0,1500).sort((T,k)=>(+new Date(T.date)||0)-(+new Date(k.date)||0)),f=l.filter(T=>T.items.length>1),u=f.reduce((T,k)=>T+k.items.length-1,0),h=wm(t.aiSources),m={};for(let T of c){let k=T.kind||"site";m[k]=(m[k]||0)+1}let w=new Map,g=new Set;for(let T of c){let k=Td(h,T.source);k?w.set(k,(w.get(k)||0)+1):g.add(oi(T.source))}let b=c.filter(T=>T.kind==="facebook"&&Number.isFinite(T.comments)).length,y=String(t.keyword||"").split(",").map(T=>T.trim()).filter(Boolean),L=ur(t.aiSubject)||y[0]||"тема запроса",v=[];return v.push("ДАННЫЕ ДЛЯ СПРАВКИ"),v.push("Объект мониторинга: "+L),y.length&&v.push("Написания, по которым искали: "+y.join(", ")+" (это один объект)."),v.push("Круг связанных лиц и структур: "+(ur(t.aiPersons)||"не задан")),v.push("Период (в шапку справки — ровно так): "+bm(n,r)),v.push("Дополнительный контекст: "+(String(t.aiContext||"").trim()||"не задан")),v.push(""),v.push("ЧТО ПОСЧИТАЛА ПРОГРАММА (эти числа точные, бери их как есть):"),v.push("— материалов за период: "+c.length+(d?" (ещё "+d+" исключены: проверка показала, что они не про объект)":"")),v.push("— перепечаток (тот же заголовок дословно у другого источника): "+u+(f.length?"; перепечатанных материалов: "+f.length:"")),v.push("— по площадкам: "+Object.entries(m).map(([T,k])=>(Ld[T]||T)+" "+k).join(", ")),w.size?v.push("— по типам источников (разметка пользователя): "+[...w].map(([T,k])=>T+" "+k).join(", ")+(g.size?"; без разметки — "+g.size+" источн.":"")):v.push("— типы источников (критические, лояльные и т.п.) пользователь НЕ размечал: не приписывай их по названию издания."),v.push(""),v.push("ЧЕГО В ДАННЫХ НЕТ: охвата, просмотров, цитируемости и реакции аудитории программа не собирает"+(b?" — кроме числа комментариев у постов Фейсбука, где оно указано.":".")),v.push("Сюжетов программа не считала: сюжет — это одно событие или один повод, его выделяешь ты."),p.length<l.length&&v.push("Ниже показаны самые свежие "+p.length+" из "+l.length+" строк материалов: остальные не уместились."),v.push(""),v.push("МАТЕРИАЛЫ (от ранних к поздним; «то же у» — дословные перепечатки того же заголовка):"),p.forEach((T,k)=>{let x=T.first,C=Ld[x.kind||"site"]||"",E=Td(h,x.source),I=[];x.sent&&Ad[x.sent]&&I.push("тон: "+Ad[x.sent]),x.match==="body"&&I.push("объект только в тексте"),x.kind==="facebook"&&Number.isFinite(x.comments)&&I.push("комментариев: "+x.comments),v.push(k+1+". "+ym(a(x.date))+" · "+ur(x.source)+" ("+C+(E?", "+E:"")+") — "+ur(x.title)+(I.length?" ["+I.join("; ")+"]":""));let N=s?ur(x.snippet).slice(0,220):"";if(N&&v.push("   из текста: "+N),T.items.length>1){let R=T.items.slice(1).map(B=>ur(B.source));v.push("   то же у: "+R.join(", "))}}),{text:v.join(`
`),total:c.length,rows:l.length,shown:p.length,reprints:u,dropped:d}}var Sd,An,Ld,Ad,ym,ur,ai=J(()=>{i(mm,"normTitle");Sd=25;i(gm,"groupReprints");i(oi,"sourceKey");i(wm,"parseSourceTypes");i(Td,"typeOf");An=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];i(bm,"humanPeriod");Ld={site:"сайт СМИ",telegram:"Телеграм-канал",youtube:"YouTube",facebook:"Фейсбук"},Ad={"+":"выигрышно",0:"нейтрально","-":"невыгодно"},ym=i(e=>{let t=String(e||"").match(/^\d{4}-(\d{2})-(\d{2})/);return t?t[2]+"."+t[1]:""},"dm"),ur=i(e=>String(e||"").replace(/\s+/g," ").trim(),"one");i(ro,"reviewData")});function xm(e){let t=String(e||"");return/high demand|overload|UNAVAILABLE|RESOURCE_EXHAUSTED|NOT_FOUND|not found|is not supported|HTTP 503|HTTP 429|\b503\b|\b429\b|\b404\b|ответ не пришёл/i.test(t)}function km(e){let t=+((/^gemini-(\d+)/i.exec(String(e||"").trim())||[])[1]||0),n={thinkingLevel:"low"},r={thinkingBudget:0};return t>=3?[n,r,null]:[r,n,null]}function li(e){let t=String(e||"").trim(),n=[];for(let r of[t||oo,...vm]){let s=String(r||"").trim();s&&!n.includes(s)&&n.push(s)}return n}function Cd(e,t){let n=[];if(!e||!e.overview)return"Проект по мониторингу СМИ Казахстана.";let r=e.overview;n.push("Мониторинг СМИ Казахстана. Объект наблюдения: «"+(r.keyword||"—")+"».");let s=r.windowFrom&&r.windowTo?r.windowFrom+"…"+r.windowTo:"вся история";if(n.push("Период: "+s+". Публикаций: "+r.items+", источников с материалом: "+r.uniqueSources+"."),(r.matchTitle||r.matchBody)&&n.push("Из них с объектом В ЗАГОЛОВКЕ: "+r.matchTitle+"; только В ТЕКСТЕ: "+r.matchBody+" (второе — упоминание вскользь, первое — материал про него)."),r.siteItems!=null){let o=[];r.siteItems&&o.push("сайты СМИ "+r.siteItems),r.telegramItems&&o.push("телеграм "+r.telegramItems),r.youtubeItems&&o.push("YouTube "+r.youtubeItems),r.facebookItems&&o.push("Фейсбук "+r.facebookItems),o.length>1&&n.push("Площадки: "+o.join(", ")+".")}return n.push(""),n.push("Кто пишет (публикаций за период):"),e.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+" — "+o.count)),e.silent&&e.silent.list&&e.silent.list.length&&(n.push(""),n.push("Молчали за период ("+e.silent.list.length+" из "+e.silent.configured+" отслеживаемых): "+e.silent.list.slice(0,15).join(", ")+(e.silent.more?" и ещё "+e.silent.more:"")+".")),n.push(""),n.push("Публикации по дням:"),e.byDay.slice(-21).forEach(o=>n.push("  "+o.day+" — "+o.count)),e.tone&&e.tone.total&&(n.push(""),n.push("Тональность (уже оценена ранее, всего размечено "+e.tone.total+"): выигрышных "+e.tone.pos+", нейтральных "+e.tone.neu+", невыгодных "+e.tone.neg+"."),e.tone.bySource&&e.tone.bySource.length&&(n.push("По источникам (источник: выигрышно/нейтрально/невыгодно):"),e.tone.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+": "+o.pos+"/"+o.neu+"/"+o.neg)))),t&&t.length&&(n.push(""),n.push("Заголовки материалов:"),t.slice(0,60).forEach(o=>n.push("  • "+o))),n.join(`
`)}function Am(e){let t=String(e||""),n=t.search(/РАЗМЕТКА\s*:?/i),r=n>=0?t.slice(n):t,s={};for(let o of r.matchAll(/(?:^|\n)[ \t]*(\d{1,4})[ \t]*[:.\-–][ \t]*([+\-0])[ \t]*(?:[:;–—-][ \t]*([^\n]*))?(?=\n|$)/g)){let a=String(o[3]||"").trim();for(let c=0;c<4;c++){let d=a;if(a=a.replace(/^[«"'(\s]+/,"").replace(/[»"')\s]+$/,"").replace(/[.;,]+$/,"").trim(),a===d)break}a=a.slice(0,90),s[+o[1]]={mark:o[2],why:a}}return Object.keys(s).length?s:null}function Mm(e){let t=String(e||""),n=t.search(/\n\s*РАЗМЕТКА\s*:?/i);return(n>=0?t.slice(0,n):t).trim()}async function Cm({apiKey:e,model:t,text:n,maxOut:r,timeoutMs:s=Tm(),temp:o=.2}){let a=String(t||oo).trim(),c=i(h=>({contents:[{role:"user",parts:[{text:n}]}],generationConfig:{temperature:o,maxOutputTokens:r+(h&&h.thinkingBudget===0?0:Sm),...h?{thinkingConfig:h}:{}}}),"mkBody"),d=i(async h=>{let m=new AbortController,w=setTimeout(()=>m.abort(),s);try{let g=await fetch(Lm(a)+"?key="+encodeURIComponent(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c(h)),signal:m.signal}),b=await g.text(),y=null;try{y=JSON.parse(b)}catch{}return{httpOk:g.ok,status:g.status,raw:b,data:y}}finally{clearTimeout(w)}},"call"),l=Date.now(),p="",f=i(h=>{let m=h&&h.data&&h.data.usageMetadata||{},w=m.promptTokenCount||m.candidatesTokenCount||m.thoughtsTokenCount?{in:m.promptTokenCount||0,out:m.candidatesTokenCount||0,think:m.thoughtsTokenCount||0}:null;return{ms:Date.now()-l,think:p,...w?{usage:w}:{}}},"meta"),u=null;try{let h=km(a);for(let L=0;L<h.length&&(p=h[L]?h[L].thinkingLevel?"уровень "+h[L].thinkingLevel:"выключено":"без настройки",u=await d(h[L]),!(u.httpOk||!h[L]||!/thinking/i.test(u.raw||"")));L++);if(!u.httpOk)return{ok:!1,err:"Google API: "+(u.data&&u.data.error&&u.data.error.message?u.data.error.message:(u.raw||"HTTP "+u.status).slice(0,400)),...f(u)};let m=u.data&&u.data.candidates&&u.data.candidates[0],w=m&&m.content&&m.content.parts,g=Array.isArray(w)?w.filter(L=>!L.thought).map(L=>L.text||"").join("").trim():"",b=m&&m.finishReason,y=b?{finish:b}:{};if(b==="MAX_TOKENS")return g?{ok:!0,text:g,truncated:!0,...y,...f(u)}:{ok:!1,err:"модель израсходовала лимит на размышление и не успела ответить — попробуйте ещё раз или смените модель",...y,...f(u)};if(!g){let L=b?" (причина: "+b+")":"",v=u.data&&u.data.promptFeedback&&u.data.promptFeedback.blockReason;return{ok:!1,err:"модель ничего не ответила"+(v?" — запрос отклонён: "+v:L),...y,...f(u)}}return{ok:!0,text:g,...y,...f(u)}}catch(h){return{ok:!1,err:h&&h.name==="AbortError"?"ответ не пришёл за "+Math.round(s/1e3)+" с":String(h&&h.message||h),...f(u)}}}async function di(e){let t=li(e.model),n=null,r=[],s=[];for(let c of t){let d=await Cm({...e,model:c});if(s.push({model:c,ok:!!d.ok,...d.ok?{}:{err:d.err},ms:d.ms,...d.finish?{finish:d.finish}:{},...d.usage?{usage:d.usage}:{},...d.think?{think:d.think}:{},...d.truncated?{truncated:!0}:{}}),d.ok)return{...d,model:c,attempts:s,...r.length?{fellBack:{from:t[0],to:c,tried:r.slice()}}:{}};if(n=d,r.push({model:c,err:d.err}),!xm(d.err))break}let o=i(c=>{let d=String(c||"").replace(/\s+/g," ").trim();return d.length>160?d.slice(0,159)+"…":d},"short");return{ok:!1,err:r.length>1?"перебрали модели: "+r.map(c=>c.model+" — "+o(c.err)).join("; "):n&&n.err,model:t[0],tried:r,attempts:s}}function ci(e,t,n,r,s={}){return{n:e,from:t,to:n,size:n-t+1,ok:!!r.ok,model:r.ok?r.model:"",ms:(r.attempts||[]).reduce((o,a)=>o+(a.ms||0),0),attempts:r.attempts||[],...r.ok?{}:{err:r.err},...s}}async function Dd({apiKey:e,timeoutMs:t=15e3}={}){if(!e)return{ok:!1,err:"не задан ключ Google"};let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(Md.replace(/\/$/,"")+"?key="+encodeURIComponent(e)+"&pageSize=200",{signal:n.signal}),o=await s.text(),a=null;try{a=JSON.parse(o)}catch{}return s.ok?{ok:!0,models:(Array.isArray(a&&a.models)?a.models:[]).filter(l=>Array.isArray(l.supportedGenerationMethods)?l.supportedGenerationMethods.includes("generateContent"):!0).map(l=>String(l.name||"").replace(/^models\//,"")).filter(Boolean).filter(l=>!/embedding|aqa|image|imagen|veo|tts/i.test(l))}:{ok:!1,err:"Google API: "+(a&&a.error&&a.error.message||o.slice(0,300))}}catch(s){return{ok:!1,err:s&&s.name==="AbortError"?"Google не ответил вовремя":String(s&&s.message||s)}}finally{clearTimeout(r)}}async function Rd({apiKey:e,model:t,analytics:n,items:r,data:s,cfg:o,withSnippets:a=!0,localDay:c}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let d=String(t||oo).trim(),l=n&&n.overview||{},p=s||ro({items:r,cfg:o||{keyword:l.keyword||""},from:l.windowFrom,to:l.windowTo,withSnippets:a,localDay:c}),f=ii.review+`
`+p.text+`

ОБЩАЯ СВОДКА ПРОГРАММЫ:
`+Cd(n,null),u=await di({apiKey:e,model:d,text:f,maxOut:Dm,timeoutMs:Rm(),temp:.2}),h=[ci(1,1,p.shown,u)];return u.ok?{ok:!0,text:Nm(u.text),model:u.model||d,log:h,data:p,...u.truncated?{truncated:!0}:{},...u.fellBack?{fellBack:u.fellBack}:{}}:{...u,log:h,data:p}}function Nm(e){let t=String(e||"").trim(),n=t.match(/^```[a-zA-Z]*\s*\n([\s\S]*?)\n?```\s*$/);return n&&(t=n[1].trim()),t}function Em(e){return Math.max(2e3,Math.min(8e3,700+e*30))}function zm(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","Знак ставится ПО ОТНОШЕНИЮ К НЕМУ, а не «хорошая или плохая новость вообще»:","  +  объект показан в выигрышном свете: достижение, награда, поддержка, похвала в его адрес;","  -  объект показан невыгодно: критика, обвинение, провал, скандал, недовольство им;","  0  протокольное сообщение, факт, объявление — без оценки объекта.","Беда, катастрофа, конфликт САМИ ПО СЕБЕ негативом не считаются: если объект помогает","пострадавшим, решает проблему или просто упомянут рядом — для него это 0 или +.","Если по показанному тексту тон не виден — ставь 0 и пиши причину «тон по фрагменту не виден».","Это лучше, чем угадать: угаданный знак от настоящего не отличить.",""].join(`
`)}function Fm(e){return!e||typeof e!="object"?"":String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,Im)}function Hm(e){let t=e&&typeof e=="object"?e.title:e;return String(t??"").replace(/\s+/g," ").trim()}function qm(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","  +  материал действительно ПРО ЭТОТ объект: он действующее лицо, о нём говорят,","     его решение, его ведомство, его слова — даже если упомянут вскользь;","  -  слово совпало СЛУЧАЙНО: однофамилец или тёзка, другой человек с той же фамилией,","     улица/район/школа, названные этим именем, другая организация с похожим названием,","     другое значение слова;","  0  по показанному тексту понять нельзя.","Упоминание вскользь — это всё равно «+»: наша задача отсеять ЧУЖОЕ, а не короткое.","Если сомневаешься между «-» и «0» — ставь 0. Выброшенный по ошибке материал","дороже лишнего: пропускать важное нельзя.",""].join(`
`)}async function Nd(e){return Pd({...e,task:"sentiment"})}async function Ed(e){return Pd({...e,task:"verify"})}async function Pd({apiKey:e,model:t,analytics:n,titles:r,batch:s=Pm,maxCalls:o=Om,task:a="sentiment",onStep:c=null}){let d=so[a]||so.sentiment;if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let l=String(t||oo).trim(),p=(r||[]).map(N=>({title:Hm(N),snip:Fm(N)}));if(!p.length)return{ok:!1,err:"нечего оценивать: в окне нет материалов"};let f=p.some(N=>N.snip),u={},h=[],m=0,w="",g="",b=l,y=null,L=i(N=>{if(h.push(N),c)try{c(N,{calls:m,marked:Object.keys(u).length,asked:p.length})}catch{}},"step"),v=i(async(N,R,B)=>{if(N>=R||m>=o)return;let U=p.slice(N,R),Z=U.map((ie,Q)=>N+Q+1+". "+ie.title+(ie.snip?`
   из текста: `+ie.snip:"")).join(`
`),ve=ii[B?d.first:d.more]+d.subject(n)+(f?ii.withSnippets:""),Me=B?ve+Cd(n,null)+`

Заголовки для оценки (`+U.length+` шт.):
`:ve+"Заголовки ("+U.length+` шт.):
`;m++;let Ce=m,P=await di({apiKey:e,model:l,text:Me+Z,maxOut:Em(U.length),temp:0}),G=U.length>jm&&m<o,D=N+Math.floor(U.length/2);if(!P.ok){g||(g=P.err);let ie=$m(P.err)&&G;L(ci(Ce,N+1,R,P,{got:0,...ie?{action:"split"}:{}})),ie&&(await v(N,D,B&&!w),await v(D,R,!1));return}b=P.model||b,P.fellBack&&!y&&(y=P.fellBack);let $=Am(P.text)||{},A=Object.keys($).filter(ie=>+ie>N&&+ie<=R);for(let ie of A)u[ie]=$[ie];B&&!w&&(w=Mm(P.text));let ae=U.length-A.length>Math.max(1,Math.floor(U.length*.1))&&G;L(ci(Ce,N+1,R,P,{got:A.length,...P.truncated?{truncated:!0}:{},...ae?{action:"split"}:{}})),ae&&(await v(N,D,!1),await v(D,R,!1))},"askChunk");await v(0,Math.min(s,p.length),!0);for(let N=s;N<p.length&&m<o;N+=s)await v(N,Math.min(N+s,p.length),!1);let T=Object.keys(u);if(!T.length)return{ok:!1,err:g||"модель не вернула разметку",calls:m,log:h};let k=0,x=0,C=0;for(let N of T){let R=u[N]&&u[N].mark;R==="+"?k++:R==="0"?x++:R==="-"&&C++}let E=k+x+C,I=d.counts(k,x,C);return w&&I.push(w),{ok:!0,model:b,marks:u,text:I.join(`
`).trim(),prose:w,calls:m,covered:E,asked:p.length,log:h,...y?{fellBack:y}:{},...g&&E<p.length?{partialErr:g}:{}}}function jd(e){return String(e||"").replace(Bm,"").trim()}function Od(e,t,n=""){let r=so[e]||so.sentiment,s=0,o=0,a=0;for(let d of t||[])d==="+"?s++:d==="0"?o++:d==="-"&&a++;let c=r.counts(s,o,a);return n&&c.push(n),c.join(`
`).trim()}function Gm(e,t,n=new Date){let r=i(d=>{let l=new Date(d);return isNaN(l)?"":l.getFullYear()+"-"+String(l.getMonth()+1).padStart(2,"0")+"-"+String(l.getDate()).padStart(2,"0")},"ymdL"),s=(t||[]).filter(d=>d&&d.text).sort((d,l)=>String(l.created||"").localeCompare(String(d.created||""))),o=[],a=0;for(let d of s){let l="["+r(d.created)+" ★"+(d.rating||"?")+(d.rated===!1?" не учтён":"")+"] "+String(d.text).replace(/\s+/g," ").slice(0,700);if(a+l.length>Um)break;o.push(l),a+=l.length+1}return{text:["Ты аналитик репутации бизнеса. Ниже отзывы о фирме из 2ГИС: «"+(e.name||"")+"»"+(e.address?", "+e.address:"")+(e.category?" ("+e.category+")":"")+".",e.card?"Сейчас на карточке: рейтинг "+e.card.rating+", отзывов "+e.card.reviewsCount+", оценок "+e.card.ratingsCount+".":"","Отзывов в разборе: "+o.length+(o.length<s.length?" самых свежих из "+s.length+" (остальные не влезли)":"")+". Сегодня "+r(n)+".","Ответь по-русски, коротко и по делу, маркированными списками, разделами:","1) Общая картина: тон и что изменилось за последние 30 дней по сравнению с более ранними.","2) За что хвалят чаще всего (до 5 пунктов, примерная доля отзывов).","3) На что жалуются чаще всего (до 5 пунктов, примерная доля, короткая цитата-пример в кавычках).","4) Повторяющиеся конкретные проблемы: люди, смены, услуги, время суток — если видно.","5) Что сделать в первую очередь (3 пункта).","Опирайся ТОЛЬКО на эти отзывы, ничего не выдумывай. Имена сотрудников упоминай, только если их называют сами отзывы. Отзывы на казахском учитывай наравне с русскими.","","Отзывы (новые сверху):"].filter(d=>d!=="").join(`
`)+`
`+o.join(`
`),used:o.length,total:s.length}}async function $d({apiKey:e,model:t,firm:n,reviews:r}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в «Аналитике» любого проекта)"};let s=Gm(n||{},r||[]);return s.used?{...await di({apiKey:e,model:t,text:s.text,maxOut:4e3,timeoutMs:18e4,temp:.2}),used:s.used,total:s.total}:{ok:!1,err:"отзывов с текстом пока нет — разбирать нечего"}}var oo,vm,Sm,Tm,Md,Lm,ii,Dm,Rm,Pm,jm,Om,$m,Im,so,Bm,Um,ao=J(()=>{ai();oo="gemini-3.5-flash",vm=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.5-flash"];i(xm,"worthNextModel");i(km,"thinkingLadder");Sm=4096,Tm=i(()=>+(typeof process<"u"&&process.env&&process.env.MC_GEMINI_TIMEOUT_MS)||9e4,"callTimeout");i(li,"modelChain");Md=typeof process<"u"&&process.env&&process.env.MC_GEMINI_BASE||"https://generativelanguage.googleapis.com/v1beta/models/",Lm=i(e=>`${Md}${encodeURIComponent(e)}:generateContent`,"ENDPOINT");i(Cd,"brief");ii={review:["РОЛЬ","Ты — аналитик по медиамониторингу, готовящий информационно-аналитические справки (обзоры","информационного поля) для руководства. Пишешь в официально-деловом стиле, сжато, нейтрально","по форме, аналитично по содержанию.","","ЗАДАЧА","На основе материалов мониторинга (они ниже, в блоке «ДАННЫЕ ДЛЯ СПРАВКИ») подготовить обзор","информационного поля вокруг объекта мониторинга за указанный период строго по структуре и правилам.","","ЧТО ЕСТЬ В ДАННЫХ","- Объект, круг связанных лиц, период и дополнительный контекст — в начале блока данных.","- Точные числа, посчитанные программой: материалы, перепечатки, площадки, типы источников.","- Список материалов: дата, издание, площадка, заголовок; у части — фрагмент текста вокруг","  упоминания, тональность по отношению к объекту и пометка «объект только в тексте».","- Ссылок, полных текстов статей, охвата, просмотров и цитируемости в данных НЕТ.","","СТРУКТУРА СПРАВКИ","","0. Шапка","- Первая строка курсивом: период — ровно так, как он указан в данных.","- Следом заголовок ЗАГЛАВНЫМИ жирным: «ОБЗОР ИНФОРМАЦИОННОГО ПОЛЯ ВОКРУГ <ОБЪЕКТ>»","  (объект в родительном падеже).","","1. Вводный абзац (общая картина)","- Сколько ключевых сюжетов зафиксировано за период (жирным число). Сюжет — одно событие или","  один повод; несколько материалов об одном поводе — это один сюжет.","- Характер публикаций: оригинальные материалы или перепечатки — по числам программы.","- Где распространялись: площадки (сайты СМИ, Телеграм-каналы, YouTube, Фейсбук) и — ТОЛЬКО если","  пользователь разметил источники — их типы (критические, нейтральные, лояльные и т.п.), жирным.","","2. Абзац-рамка (тематика и вывод о резонансе)","- Одним предложением перечисли тематические направления.","- Укажи, за счёт кого формировалась повестка.","- Завершающий вывод жирным: получили ли сюжеты общественный резонанс. Резонанс суди по тому, что","  есть в данных: сколько изданий подхватило сюжет, были ли перепечатки, длился ли он несколько дней.","","3. Основная часть: сюжеты, сгруппированные по темам","- Тематические блоки определяй по данным. Если такие темы есть, ориентируйся на порядок:","  официальные и памятные события → внешний контур → правовые и имущественные вопросы → бизнес и","  активы → репутационные и личные сюжеты → историко-идеологические нарративы.","- Каждый сюжет — отдельный абзац: издание (всегда названо) → что сообщило → ключевой тезис","  жирным → контекст или опровержение/уточнение, если есть в данных.","- Между абзацами используй логические связки: «Так,», «В то же время», «Наряду с»,","  «Параллельно», «Помимо», «Тема получила продолжение в…».","- Самый широко подхваченный сюжет (больше всего изданий и перепечаток) отметь явно.","- Тональность в данных — это тон самих публикаций по отношению к объекту, а не реакция аудитории.","  Число комментариев есть только у постов Фейсбука, где оно указано; другой реакции аудитории в","  данных нет — не описывай её.","- Для спорных заявлений используй атрибуцию: «утверждается», «сообщается», «якобы»,","  «по мнению автора», «интерпретируется как».","- Если для сюжета есть контекст, снижающий остроту заявления, добавь его одним предложением.","","4. Заключение (аналитический вывод, один абзац)","- Главный тренд периода: как изменился характер информационного давления или поддержки","  (например, «от X к Y»); ключевая формулировка жирным.","- Оценка последствий: привели ли сюжеты к росту общественной активности, новым очагам","  напряжённости, изменению повестки или остались в плоскости виртуальных дискуссий.","","СТИЛЬ","- Официально-деловой, без эмоциональных эпитетов и разговорных оборотов.","- Аналитические маркеры («оппонирующие источники», «протестный сегмент», «заметного резонанса","  не получили») допустимы только если подкреплены данными мониторинга.","- Персоны: инициалы + фамилия без пробела («Н.Назарбаев»); при первом упоминании добавляй роль,","  если она есть в данных.","- Названия изданий пиши так, как они приняты (Tengrinews.kz, Радио Азаттык, «Проект»).","- Даты указывай точно («18 декабря»).","- Объём: 1,5–2 страницы, 8–15 абзацев. Если материалов мало — короче: каждый абзац несёт новую","  информацию, раздувать нельзя.","","ВЫДЕЛЕНИЕ ЖИРНЫМ","Жирным выделяй: количество сюжетов, тип источников, итоговый вывод о резонансе, главный тезис","каждого сюжета, ключевые цифры, имена и названия, на которых строится сюжет, ключевой вывод","заключения. Не выделяй более 1–2 фрагментов в предложении.","","ОГРАНИЧЕНИЯ ПО ДОСТОВЕРНОСТИ","- Используй только предоставленные материалы. Не добавляй факты, цитаты, цифры, издания и","  ссылки, которых нет в данных. Цитатой можно считать только слова из фрагмента текста.","- Метрик охвата, просмотров и цитируемости нет — не придумывай их и не пиши «данные уточняются»","  в тексте справки; об их отсутствии — одной строкой в примечаниях.","- Тип источника (критический, лояльный и т.п.) бери только из разметки в данных. Не приписывай","  его по названию издания.","- Не смешивай факт и утверждение источника: заявления СМИ и блогеров подавай с атрибуцией.","- Не высказывай личных оценок объекта и источников; оценка допустима только как аналитический","  вывод о характере и масштабе информационного повода.","- Если данных недостаточно для какого-то блока, пропусти его и сообщи об этом в примечании.","- ЗАПРЕЩЕНО писать про саму программу и про то, как собраны данные.","","ФОРМАТ ВЫВОДА","Готовый текст справки в формате Markdown (**жирный**, *курсив*), без вступлений и пояснений,","без таблиц и без блоков кода. После справки — строка «Примечания для редактора» и под ней не","более 3 пунктов, каждый с «- »: что требует проверки, где не хватило данных, что стоит добавить.","","САМОПРОВЕРКА ПЕРЕД ВЫДАЧЕЙ (молча, в ответ не пиши)","1. Есть шапка, вводный абзац, абзац-рамка, основная часть, заключение?","2. У каждого сюжета названо издание и выделен ключевой тезис?","3. Нет ли фактов, цифр и изданий, которых нет в данных?","4. Есть ли в заключении тренд и оценка последствий?","5. Соблюдены тон, объём и правила оформления имён?",""].join(`
`),sentiment:["Ты — редактор-аналитик службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Оцени тональность каждого материала по отношению к ОБЪЕКТУ МОНИТОРИНГА (см. ниже).","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: чем окрашена тема, есть ли перекос по конкретным СМИ>","","РАЗМЕТКА:","1:+:награда врачам, тон одобрительный","2:0:протокольное сообщение без оценки","3:-:критика в адрес ведомства","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ позитив, 0 нейтрально, - негатив), двоеточие и КОРОТКАЯ причина —","от двух до шести слов по-русски, строчными, без точки в конце. Причина объясняет","ИМЕННО ЭТОТ заголовок: что в нём делает его позитивным, нейтральным или негативным.","Не пересказывай заголовок и не повторяй слово «позитив»/«негатив» — это уже есть в знаке.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем оценку с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),withSnippets:["Под частью заголовков строкой «из текста:» дан фрагмент статьи вокруг ключевого слова.","Опирайся В ПЕРВУЮ ОЧЕРЕДЬ на него: заголовок часто протокольный («провёл совещание»),","а настоящий тон виден в тексте. Фрагмент — это НЕ отдельный материал и своего номера","не имеет: он относится к заголовку над собой.",""].join(`
`),sentimentMore:["Ты — редактор-аналитик службы медиамониторинга. Продолжаем оценку тональности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + позитив, 0 нейтрально, - негатив. Причина — от двух до шести слов","по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`),verify:["Ты — редактор службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Задача ровно одна: сказать, относится ли каждый материал К ОБЪЕКТУ МОНИТОРИНГА —","или слово совпало случайно (однофамилец, тёзка, другое значение слова, чужая организация).","Тональность, важность и качество материала тебя здесь НЕ интересуют.","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: много ли постороннего попало в выдачу и какого рода>","","РАЗМЕТКА:","1:+:премьер-министр, тот самый","2:-:однофамилец, сотрудник КНБ","3:0:по фрагменту не понять, кто это","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ это про объект, - это НЕ про объект, 0 по показанному не понять), двоеточие","и КОРОТКАЯ причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем вердикт с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),verifyMore:["Ты — редактор службы медиамониторинга. Продолжаем проверку релевантности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + это про объект, - это НЕ про объект (совпало слово), 0 по показанному не понять.","Причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`)};i(Am,"parseMarks");i(Mm,"stripMarks");i(Cm,"callOne");i(di,"callModel");i(ci,"logEntry");i(Dd,"listModels");Dm=8e3,Rm=i(()=>+(typeof process<"u"&&process.env&&process.env.MC_GEMINI_TIMEOUT_MS)||18e4,"reviewTimeout");i(Rd,"askReview");i(Nm,"cleanMarkdown");i(Em,"outCapFor");Pm=60,jm=15,Om=20,$m=i(e=>/ответ не пришёл|лимит на размышление|MAX_TOKENS/i.test(String(e||"")),"sizeErr");i(zm,"subjectBlock");Im=200;i(Fm,"snipOf");i(Hm,"titleOf");i(qm,"subjectBlockVerify");so={sentiment:{first:"sentiment",more:"sentimentMore",subject:zm,counts:i((e,t,n)=>["ПОЗИТИВНЫХ: "+e,"НЕЙТРАЛЬНЫХ: "+t,"НЕГАТИВНЫХ: "+n,""],"counts")},verify:{first:"verify",more:"verifyMore",subject:qm,counts:i((e,t,n)=>["ПРО ОБЪЕКТ: "+e,"НЕ ПОНЯТЬ: "+t,"НЕ ПРО ОБЪЕКТ: "+n,""],"counts")}};i(Nd,"askSentimentAll");i(Ed,"askVerifyAll");i(Pd,"askMarksAll");Bm=/^(?:ПОЗИТИВНЫХ|НЕЙТРАЛЬНЫХ|НЕГАТИВНЫХ|ПРО ОБЪЕКТ|НЕ ПОНЯТЬ|НЕ ПРО ОБЪЕКТ):\s*\d+\s*$/gm;i(jd,"stripCounts");i(Od,"countsText");Um=4e5;i(Gm,"reviewsPrompt");i($d,"askReviews")});function zd(e){let t=e||{},n=String(t.mode||"off");return n==="daily"?1:n==="hours"?Math.max(1,Math.ceil(24/Math.max(1,+t.everyHours||6))):n==="minutes"?Math.max(1,Math.ceil(1440/Math.max(10,+t.everyMinutes||20))):0}function io(e){return zd(e)<=1}function co(e){return"прогоны идут чаще раза в сутки ("+zd(e)+" в сутки) — проверка релевантности смотрит каждый материал окна и на таком шаге сожгла бы квоту Google. Поставьте расписание «каждый день» или реже — или запускайте проверку вручную."}var ui=J(()=>{i(zd,"runsPerDay");i(io,"verifyAllowed");i(co,"verifyWhyNot")});function Km(e){let t=[];for(let n of Array.isArray(e)?e:[]){let r=n==="summary"?"review":n;pi.includes(r)&&!t.includes(r)&&t.push(r)}return t}function Vm(e,{days:t=null,analytics:n,settings:r}={}){let s=Pe(e),o=n&&n.overview||{};return ro({items:to(e,{days:t}),cfg:s&&s.config||{},from:o.windowFrom,to:o.windowTo,withSnippets:ho(r||Je()),localDay:xt})}async function fi(e,{days:t=null,analytics:n,settings:r}={}){let s=r||Je();if(!s.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let o=Vm(e,{days:t,analytics:n,settings:s});if(!o.total)return{ok:!1,err:"в окне нет материалов — писать обзор не о чем",log:[]};let a=await Rd({apiKey:s.geminiKey,model:s.geminiModel,analytics:n,data:o});return{...a,note:Ym(o,a)}}function Ym(e,t){if(!e)return"";let n=["по "+e.total+" материалам окна"];return e.reprints&&n.push("перепечаток "+e.reprints),e.shown<e.rows&&n.push("модели показаны самые свежие "+e.shown+" из "+e.rows),e.dropped&&n.push(e.dropped+" помеченных «не про объект» не брали"),t&&t.truncated&&n.push("ответ обрезан по лимиту — конец справки не поместился"),n.join("; ")}function ho(e){return(e||{}).geminiSnippets!==!1}function Xm(e,t){return ho(t)?e.map(n=>({title:n.title,snippet:n.snippet||""})):e.map(n=>n.title)}function Qm(e,t){if(!t)return null;let n=[];return e.forEach((r,s)=>{let o=t[s+1];if(!o)return;let a=typeof o=="string"?o:o.mark,c=typeof o=="string"?"":o.why||"";(a==="+"||a==="0"||a==="-")&&n.push({...r,mark:a,why:c})}),n.length?n:null}async function mi(e,{kind:t="sentiment",days:n=null,analytics:r,settings:s,rescore:o=!1,onStep:a=null}={}){let c=Id[t]||Id.sentiment,d=s||Je();if(!d.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};o&&c.clear(e);let l=to(e,{days:n});if(!l.length)return{ok:!1,err:c.empty};let p=l.filter(k=>!k[c.field]).slice(0,Jm),f=l.filter(k=>k[c.field]).length,u=0,h=0,m="",w=d.geminiModel||"",g=[],b="",y=(Aa(e)||{})[t]||{},L=jd(y.text||"");if(p.length){let k=await c.ask({apiKey:d.geminiKey,model:d.geminiModel,analytics:r,titles:Xm(p,d),onStep:a});if(u=k.calls||0,g=k.log||[],!k.ok)return{ok:!1,err:k.err||"не получилось",calls:u,model:k.model||w,log:g,asked:p.length};w=k.model||w,k.prose&&(L=k.prose),b=k.partialErr||"";let x=(Qm(p,k.marks)||[]).map(C=>({...C,model:w}));h=c.set(e,x),m=""}let v=to(e,{days:n}).filter(k=>k[c.field]).map(k=>({title:k.title,url:k.url,source:k.source,date:k.date,mark:k[c.field],why:k[c.why]||""}));return{ok:!0,text:Od(t,v.map(k=>k.mark),L),model:w,err:m,calls:u,fresh:h,stored:f,asked:p.length,covered:v.length,total:l.length,items:v.length?v:null,log:g,...b?{partialErr:b}:{}}}function uo(e){return!e||!e.ok?e&&e.err||"не получилось":e.asked?`оценено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее оценено ${e.stored} — не переспрашивали`:"")+`; всего в окне размечено ${e.covered} из ${e.total}`+Fd(e,"оценки"):`все ${e.covered} материалов окна уже оценены — к Google не ходили`}function Fd(e,t){let n=(e.total||0)-(e.covered||0);return n<=0?"":`; без ${t} осталось ${n}`+(e.partialErr?` (последний отказ: ${e.partialErr})`:"")+" — повторный запрос спросит только про них"}function po(e){if(!e||!e.ok)return e&&e.err||"не получилось";let t=(e.items||[]).filter(s=>s.mark==="-").length,n=(e.items||[]).filter(s=>s.mark==="0").length,r=`; похоже, не про объект — ${t}`+(n?`, по фрагменту не понять — ${n}`:"")+"; ничего не удалено, решает человек";return e.asked?`проверено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее проверено ${e.stored} — не переспрашивали`:"")+`; всего в окне проверено ${e.covered} из ${e.total}`+r+Fd(e,"проверки"):`все ${e.covered} материалов окна уже проверены — к Google не ходили`+r}async function fo(e,{foundNow:t=null,runTs:n=null}={}){let r=[],s=Pe(e);if(!s)return r;let o=s.config||{};if(!o.aiAuto)return r;if(!jt(o).ai)return r.push("ИИ-разбор пропущен: "+rr),r;let a=Je();if(!a.geminiKey)return r.push("ИИ-разбор включён, но ключ Gemini не задан — пропускаю (задайте во вкладке «Аналитика»)"),r;if(t===0)return r.push("ИИ-разбор пропущен: в этом прогоне ноль материалов — квоту не тратим"),r;let c=Array.isArray(o.aiKinds)&&o.aiKinds.length?Km(o.aiKinds):["review"],d=o.periodMode==="rolling"?Math.max(2,+o.periodDays||2):null,l=ln(e,{days:d});if(!l)return r;for(let p of c)try{if(p==="verify"&&!io(s.schedule)){r.push(`ИИ-${lo[p]} пропущена: `+co(s.schedule));continue}if(p==="review"){let m=((Aa(e)||{}).review||{}).at||0;if(m&&Date.now()-m<72e6){r.push("ИИ-расширенный обзор пропущен: пишется автоматически не чаще раза в сутки (последний — "+Ft(m)+"); вручную — кнопкой во вкладке «Аналитика»");continue}}let f=p==="sentiment"||p==="verify",u=f?await mi(e,{kind:p,days:d,analytics:l,settings:a}):await fi(e,{days:d,analytics:l,settings:a});Is(e,p,{at:Date.now(),runTs:n,window:l.overview.windowFrom+" … "+l.overview.windowTo,text:u.ok?u.text:"",model:u.model||a.geminiModel||"",err:u.ok?"":u.err||"не получилось",auto:!0,items:u.ok&&f?u.items:null,log:u.log||[],...u.ok?{note:p==="sentiment"?uo(u):p==="verify"?po(u):u.note||""}:{}});let h=p==="sentiment"?uo(u):p==="verify"?po(u):"готово, "+(u.note||"");r.push(u.ok?`ИИ-${lo[p]}: ${h}`:`ИИ-${lo[p]}: ${u.err||"не получилось"}`)}catch(f){r.push(`ИИ-${lo[p]}: сбой — ${String(f&&f.message||f)}`)}return r}var pi,lo,hi,Jm,Id,mo=J(()=>{Rt();es();ao();ai();ht();sr();ui();pi=["review","sentiment","verify"],lo={review:"расширенный обзор",sentiment:"тональность",verify:"проверка релевантности"};i(Km,"normKinds");hi=i(e=>e==="summary"?"review":e,"normKind");i(Vm,"reviewInput");i(fi,"reviewRun");i(Ym,"reviewNote");Jm=600;i(ho,"sendSnippets");i(Xm,"sentimentTitles");i(Qm,"applyMarks");Id={sentiment:{field:"sent",why:"sentWhy",ask:Nd,set:El,clear:Ol,empty:"нечего оценивать: в окне нет материалов"},verify:{field:"rel",why:"relWhy",ask:Ed,set:Pl,clear:jl,empty:"нечего проверять: в окне нет материалов"}};i(mi,"markRun");i(uo,"sentimentNote");i(Fd,"gapNote");i(po,"verifyNote");i(fo,"runAiAfterRun")});async function kt(e,t,n={},r=_m){if(!e)return{ok:!1,err:"не задан токен бота"};let s=new AbortController,o=setTimeout(()=>s.abort(),r);try{let a=await fetch(`${Bd}/bot${e}/${t}`,{method:"POST",signal:s.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),c=await a.text(),d=null;try{d=JSON.parse(c)}catch{}return d?d.ok?{ok:!0,result:d.result}:{ok:!1,err:d.description||"телеграм отказал (HTTP "+a.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+a.status+")"}}catch(a){let c=String(a&&a.message||a);return{ok:!1,err:/abort/i.test(c)?"телеграм не ответил за "+Math.round(r/1e3)+" с":c}}finally{clearTimeout(o)}}async function pr(e){let t=await kt(e,"getMe");if(!t.ok)return{ok:!1,err:t.err};let n=t.result&&t.result.username||"";return{ok:!0,bot:n?"@"+n:t.result&&t.result.first_name||"бот"}}async function wo(e,t={}){let n=(t.chats||[]).slice(),r=new Map(n.map(l=>[String(l.id),l])),s=await kt(e,"getUpdates",{offset:t.offset||0,timeout:0,limit:100});if(!s.ok)return{chats:n,offset:t.offset||0,err:s.err,added:0,events:[]};let o=t.offset||0,a=0,c=0,d=[];for(let l of s.result||[]){if(l.update_id!=null&&(o=Math.max(o,l.update_id+1)),l.callback_query){let m=l.callback_query,w=m.message||{};w.chat&&w.chat.id!=null&&d.push({kind:"cb",id:m.id,chat:w.chat,from:m.from||{},data:String(m.data||""),messageId:w.message_id,date:w.date||0});continue}let p=l.message||l.channel_post||l.my_chat_member,f=p&&p.chat;if(!f||f.id==null)continue;if(l.message&&typeof l.message.text=="string"){let m=l.message;d.push({kind:"msg",chat:f,from:m.from||{},text:m.text,date:m.date||0,messageId:m.message_id,replyTo:m.reply_to_message?m.reply_to_message.message_id:null})}let u=String(p.text||"").trim().toLowerCase(),h=[f.title,f.first_name,f.username&&"@"+f.username].filter(Boolean)[0]||String(f.id);if(/^\/stop\b/.test(u)||l.my_chat_member&&/kicked|left/.test(String(l.my_chat_member.new_chat_member&&l.my_chat_member.new_chat_member.status))){r.delete(String(f.id))&&c++;continue}if(!r.has(String(f.id)))r.set(String(f.id),{id:f.id,name:h,type:f.type||""}),a++;else{let m=r.get(String(f.id));m.name=h,f.type&&(m.type=f.type)}}return{chats:[...r.values()],offset:o,added:a,removed:c,err:"",events:d}}function Ud(e){wi=typeof e=="function"?e:null}function Mn(e){if(go.has(e))return go.get(e);let t=(async()=>{let n=Ge(e),r=await wo(n.token,n);if(lt(e,{chats:r.chats,offset:r.offset,err:r.err||""}),wi&&r.events&&r.events.length){let o=(Hd.get(e)||Promise.resolve()).then(()=>wi(e,r.events)).catch(()=>{});Hd.set(e,o)}return r})().finally(()=>go.delete(e));return go.set(e,t),t}async function bi(e,t,n,r=Date.now()){let s=e+"|"+t+"|"+n,o=qd.get(s);if(o&&r-o.at<tg)return o.status;let a=await kt(e,"getChatMember",{chat_id:t,user_id:n}),c=a.ok&&a.result?String(a.result.status||""):"";return a.ok&&qd.set(s,{status:c,at:r}),c}async function hr(e,t,n=Date.now()){let r=e&&e.owners||[];if(!t||t.id==null)return{ok:!1,why:"no-chat"};if(!r.length)return{ok:!1,why:"no-owner"};if(t.type==="private"||!t.type&&Number(t.id)>0)return r.some(s=>String(s.id)===String(t.id))?{ok:!0}:{ok:!1,why:"stranger"};for(let s of r)if(ng.includes(await bi(e.token,t.id,s.id,n)))return{ok:!0};return{ok:!1,why:"no-owner-here"}}async function yi(e,t,n,r,s="",o=3e4){if(!e)return{ok:!1,err:"не задан токен бота"};let a=new AbortController,c=setTimeout(()=>a.abort(),o);try{let d=new FormData;d.append("chat_id",String(t)),s&&d.append("caption",s),d.append("document",new Blob([r],{type:"text/csv"}),n);let l=await fetch(`${Bd}/bot${e}/sendDocument`,{method:"POST",body:d,signal:a.signal}),p=await l.text(),f=null;try{f=JSON.parse(p)}catch{}return f?f.ok?{ok:!0,result:f.result}:{ok:!1,err:f.description||"телеграм отказал (HTTP "+l.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+l.status+")"}}catch(d){let l=String(d&&d.message||d);return{ok:!1,err:/abort/i.test(l)?"телеграм не принял файл за "+Math.round(o/1e3)+" с":l}}finally{clearTimeout(c)}}function rg(e,t){let n=Ft(e.date)||"",r=[e.source,n].filter(Boolean).map(K).join(" · "),s=String(e.title||e.url||""),o=i(c=>String(c||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),a=String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,300);return a&&(o(a)===o(s)||o(s).includes(o(a)))&&(a=""),[r?"📰 <b>"+r+"</b>":"📰",K(s),a?"<i>"+K(a)+"</i>":"",e.url||"",t?"<i>"+K(t)+"</i>":""].filter(Boolean).join(`
`)}async function dn(e,t={}){if(gi.has(e))return{sent:0,skipped:"уже идёт отправка"};let n=Ge(e);if(!n.enabled||!n.token)return{sent:0,skipped:"бот выключен"};let r=Pe(e);if(!r)return{sent:0,skipped:"проект не найден"};if(!jt(r.config||{}).bot)return{sent:0,skipped:rr};gi.add(e);try{let s=await Mn(e);if(!s.chats.length)return{sent:0,skipped:"никто не нажал Start"};let o=Ge(e),a=[];for(let m of s.chats)a.push({...m,access:(await hr(o,m)).ok?"ok":"no"});lt(e,{chats:a});let c=a.filter(m=>m.access==="ok");if(!c.length)return{sent:0,skipped:(o.owners||[]).length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let d=Cl(e);if(!d.length)return{sent:0,skipped:"нового нет"};let l=d.slice(0,Zm),p=d.length-l.length,f=0,u=[];for(let m of l){let w=rg(m,t.withName===!1?"":r.name),g=!1;for(let b of c){let y=await kt(n.token,"sendMessage",{chat_id:b.id,text:w,parse_mode:"HTML",disable_web_page_preview:!0});y.ok?g=!0:lt(e,{err:y.err})}g&&(u.push(m.url),f++),ts&&await eg(ts)}if(u.length&&Dl(e,u),p>0)for(let m of c)await kt(n.token,"sendMessage",{chat_id:m.id,text:"… и ещё "+p+": пришлю следующей порцией. Всё сразу — в кабинете."});let h=Ge(e);return lt(e,{sentTotal:(h.sentTotal||0)+f,lastSentAt:Date.now(),err:f?"":h.err}),{sent:f,rest:p,chats:c.length}}catch(s){try{lt(e,{err:String(s&&s.message||s)})}catch{}return{sent:0,err:String(s&&s.message||s)}}finally{gi.delete(e)}}var Bd,Zm,ts,_m,eg,K,wi,go,Hd,tg,qd,ng,gi,fr=J(()=>{Rt();ht();sr();Bd=typeof process<"u"&&process.env&&process.env.MC_TG_API_BASE||"https://api.telegram.org",Zm=30,ts=typeof process<"u"&&process.env&&process.env.MC_TG_PAUSE_MS!=null?Math.max(0,+process.env.MC_TG_PAUSE_MS):1200,_m=15e3,eg=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),K=i(e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"esc");i(kt,"tgApi");i(pr,"checkBot");i(wo,"pullChats");wi=null;i(Ud,"setUpdateSink");go=new Map,Hd=new Map;i(Mn,"pullFor");tg=600*1e3,qd=new Map;i(bi,"memberStatus");ng=["creator","administrator","member","restricted"];i(hr,"chatAccess");i(yi,"sendDocument");i(rg,"formatItem");gi=new Set;i(dn,"notifyNew")});function Yd(){let e="";try{e=(0,yo.userInfo)().username||""}catch{}return(0,mr.createHash)("sha256").update((0,yo.hostname)()+"|"+e).digest("hex").slice(0,16)}function Si(){try{return(0,Ot.existsSync)(xi)?JSON.parse((0,Ot.readFileSync)(xi,"utf8")):null}catch{return null}}function ki(e){try{(0,Ot.mkdirSync)(we,{recursive:!0})}catch{}try{(0,Ot.writeFileSync)(xi,JSON.stringify(e,null,2))}catch{}}function sg(){let e=Si();if(e&&e.installedAt)return e.installedAt>=bo?e.installedAt:(ki({...e,installedAt:bo}),bo);let t=Date.now();try{(0,Ot.existsSync)(we)&&(t=Math.min(t,(0,Ot.statSync)(we).birthtimeMs||t))}catch{}return t=Math.max(t,bo),ki({...e||{},installedAt:t}),t}function Jd(e){let t=Si()||{};return t.key=String(e||"").trim(),ki(t),vo()}function og(e,t=Date.now()){let n=String(e||"").trim();if(!n)return{ok:!1,why:"ключ не введён"};if(!Wd)return{ok:!1,why:"проверка ключей ещё не включена — программа работает в пробном режиме"};let r=n.split(".");if(r.length!==3||r[0]!=="MC1")return{ok:!1,why:"это не похоже на ключ mediachrome — скопируй строку целиком, она начинается с MC1."};let s;try{s=(0,mr.createPublicKey)({key:Buffer.from(Wd,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ — нужна переустановка"}}let o=!1;try{o=(0,mr.verify)(null,Buffer.from(r[0]+"."+r[1],"utf8"),s,Kd(r[2]))}catch{o=!1}if(!o)return{ok:!1,why:"подпись ключа не сошлась — ключ поддельный или повреждён при пересылке"};let a;try{a=JSON.parse(Kd(r[1]).toString("utf8"))}catch{a=null}if(!a||typeof a!="object")return{ok:!1,why:"ключ подписан верно, но его содержимое не читается"};let c={to:String(a.to||""),until:a.until||null,id:String(a.id||""),hw:a.hw||null};if(c.hw&&c.hw!==Yd())return{ok:!1,why:"ключ выдан для другого компьютера",info:c};if(c.until){let d=Date.parse(c.until+"T23:59:59");if(!Number.isFinite(d))return{ok:!1,why:"в ключе неразборчивая дата окончания",info:c};if(t>d)return{ok:!1,why:"срок лицензии истёк "+c.until,info:c,expired:!0}}return{ok:!0,why:"",info:c}}function vo(e=Date.now()){let t=Si()||{},n=sg(),r=Math.floor((e-n)/864e5),s=Math.min(vi,Math.max(0,vi-r)),o=t.key?og(t.key,e):{ok:!1,why:""},a={installedAt:n,hasKey:!!t.key,machine:Yd(),enforced:Gd};if(o.ok)return{...a,ok:!0,mode:"licensed",daysLeft:null,why:"",to:o.info.to,until:o.info.until,keyId:o.info.id,locked:!!o.info.hw,keyWhy:""};let c=s<=0;return{...a,ok:!Gd||!c,mode:c?"expired":"trial",daysLeft:s,why:c?"пробный период ("+vi+" дней) закончился — нужен лицензионный ключ":"",keyWhy:t.key?o.why:""}}function gr(e=Date.now()){let t=vo(e);return t.ok?null:t.why}var Vd,Ot,mr,yo,Gd,vi,Wd,xi,bo,Kd,ns=J(()=>{Vd=require("node:path"),Ot=require("node:fs"),mr=require("node:crypto"),yo=require("node:os");gt();Gd=!0,vi=7,Wd="MCowBQYDK2VwAyEA/0CvjwtjJF+3fBS+0ewj3O9wtXQBpDiheHRzJV/PXPw=",xi=(0,Vd.join)(we,"license.json");i(Yd,"machineId");i(Si,"readState");i(ki,"writeState");bo=Date.parse("2026-09-22T00:00:00Z");i(sg,"installedAt");i(Jd,"setKey");Kd=i(e=>Buffer.from(String(e).replace(/-/g,"+").replace(/_/g,"/"),"base64"),"b64urlToBuf");i(og,"verifyKey");i(vo,"licenseState");i(gr,"blockedReason")});function Qd(){setInterval(ug,60*1e3)}async function ag(e,t=ig){let n=[...new Set((e||[]).map(a=>String(a).trim()).filter(Boolean).map(a=>a.replace(/^https?:\/\//,"").replace(/\/.*$/,"")).filter(a=>a&&!a.startsWith("@")))],r=n.filter(a=>!/^t\.me$/i.test(a)),s=(r.length?r:n).slice(0,3);return s.length?(await Promise.all(s.map(a=>t(a)))).some(Boolean):!0}async function ig(e){let t=new AbortController,n=setTimeout(()=>t.abort(),6e3);try{return await fetch("https://"+e+"/",{method:"HEAD",redirect:"follow",signal:t.signal}),!0}catch{return!1}finally{clearTimeout(n)}}function dg(e,t){let n=e.schedule||{mode:"off"},r=e.lastRun||0,s=(t.getTime()-r)/6e4;if(n.mode==="minutes")return s>=lg(n)-.5;if(n.mode==="hours")return s>=(n.everyHours||6)*60-.5;if(n.mode==="daily"){let o=n.hour!=null?n.hour:9,a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),o,0,0,0);return t.getTime()>=a.getTime()&&r<a.getTime()}return!1}async function ug(){if(gr()||tt.size)return;let e=new Date;for(let t of an()){if(tt.has(t.id))continue;let n=Pe(t.id);if(!n)continue;let r=Math.max(n.lastRun||0,Xd.get(n.id)||0);if(dg({...n,lastRun:r},e)){if(!await ag((n.config||{}).sites)){console.log(`[расписание] «${n.name}»: сети нет — откладываю (проверю через минуту)`);continue}tt.add(n.id),ar(n.id,{name:n.name,by:"расписание"}),Xd.set(n.id,Date.now());try{let s=null,o=i((p,f)=>{try{let u=_n(n.id,p,f,s);s=u.ts,dn(n.id,{ts:u.ts}).catch(()=>{})}catch{}},"onProgress"),{rows:a,log:c}=await or(n,o,{onStep:i(p=>ir(n.id,p),"onStep"),stopping:i(()=>cr(n.id),"stopping")}),d=_n(n.id,a,c,s);try{await dn(n.id,{ts:d.ts})}catch{}let l=await fo(n.id,{foundNow:a.length,runTs:d.ts});l.length&&(Fs(n.id,d.ts,l.map(p=>({site:"(ИИ)",channel:"gemini",found:0,note:p}))),l.forEach(p=>console.log(`[расписание] «${n.name}»: ${p}`))),console.log(`[расписание] «${n.name}»: +${d.added} новых (всего ${d.total})`)}catch(s){console.error("[расписание] ошибка:",s&&s.message||s)}finally{tt.delete(n.id),lr(n.id)}}}}var cg,lg,Xd,Zd=J(()=>{Rt();Xr();Qr();Zr();mo();fr();ns();i(Qd,"startScheduler");i(ag,"netReady");i(ig,"probeHost");cg=10,lg=i(e=>Math.max(cg,Math.min(720,+(e&&e.everyMinutes)||20)),"everyMinutes");i(dg,"isDue");Xd=new Map;i(ug,"tick")});function ou(){return"0.6.5"}function au(e,t){let n=String(e||"").split(/[.\-+]/),r=String(t||"").split(/[.\-+]/);for(let s=0;s<Math.max(n.length,r.length);s++){let o=parseInt(n[s],10),a=parseInt(r[s],10),c=Number.isFinite(o)?o:0,d=Number.isFinite(a)?a:0;if(c!==d)return c<d?-1:1}return 0}function ko(){try{return(0,je.existsSync)(Ti)?JSON.parse((0,je.readFileSync)(Ti,"utf8")):{}}catch{return{}}}function _d(e){try{(0,je.mkdirSync)(we,{recursive:!0}),(0,je.writeFileSync)(Ti,JSON.stringify(e,null,2))}catch{}}async function fg(e,t=15e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(e,{signal:n.signal,redirect:"follow",headers:{"Cache-Control":"no-cache"}});if(!s.ok)throw new Error("HTTP "+s.status);let o=await s.text();return JSON.parse(o)}finally{clearTimeout(r)}}async function Li(e={}){let t=ko(),n=Date.now(),r=Number.isFinite(e.every)?e.every:hg;if(!e.force&&t.checkedAt&&n-t.checkedAt<r)return rs();Be={...Be,phase:Be.phase==="downloading"?"downloading":"checking",err:""};try{let s=await fg(pg),o=String(s.version||"").trim();if(!o)throw new Error("в файле версии нет номера");_d({...t,checkedAt:n,err:"",latest:{version:o,notes:String(s.notes||""),url:String(s.setup||s.url||""),sha256:String(s.sha256||"").toLowerCase(),size:+s.size||0,at:String(s.at||"")}})}catch(s){_d({...t,checkedAt:n,err:String(s&&s.message||s).slice(0,200)})}return Be.phase==="checking"&&(Be={...Be,phase:"idle"}),rs()}function Ai(e){let t=(0,un.join)(wr,"mediachrome-setup-"+e+".exe");try{return(0,je.existsSync)(t)&&(0,je.statSync)(t).size>0?t:""}catch{return""}}function rs(){let e=ko(),t=ou(),n=e.latest||null,r=!!(n&&n.version&&au(t,n.version)<0);return{current:t,latest:n?n.version:"",newer:r,notes:n?n.notes:"",size:n?n.size:0,checkedAt:e.checkedAt||0,err:e.err||"",canInstall:process.platform==="win32"&&r&&!!(n&&n.url),ready:r?!!Ai(n.version):!1,phase:Be.phase,got:Be.got,total:Be.total,liveErr:Be.err}}async function iu(){let t=ko().latest;if(!t||!t.url)return{ok:!1,err:"не знаю, что качать — сначала проверка"};if(au(ou(),t.version)>=0)return{ok:!1,err:"у вас и так последняя версия"};let n=Ai(t.version);if(n)return{ok:!0,file:n,cached:!0};if(Be.phase==="downloading")return{ok:!0,running:!0};Be={phase:"downloading",got:0,total:t.size||0,err:""};let r=(0,un.join)(wr,"mediachrome-setup-"+t.version+".part");try{(0,je.mkdirSync)(wr,{recursive:!0});for(let f of(0,je.readdirSync)(wr))if(!f.includes(t.version))try{(0,je.rmSync)((0,un.join)(wr,f),{force:!0})}catch{}let s=new AbortController,o=await fetch(t.url,{signal:s.signal,redirect:"follow"});if(!o.ok)throw new Error("HTTP "+o.status);let a=+o.headers.get("content-length")||t.size||0;Be={...Be,total:a};let c=(0,nu.createHash)("sha256"),d=new xo.Transform({transform(f,u,h){c.update(f),Be={...Be,got:Be.got+f.length},h(null,f)}});await(0,su.pipeline)(xo.Readable.fromWeb(o.body),d,(0,je.createWriteStream)(r));let l=c.digest("hex");if(t.sha256&&l!==t.sha256){try{(0,je.rmSync)(r,{force:!0})}catch{}throw new Error("файл скачался испорченным (отпечаток не сошёлся) — попробуйте ещё раз")}let p=(0,un.join)(wr,"mediachrome-setup-"+t.version+".exe");try{(0,je.rmSync)(p,{force:!0})}catch{}return(0,je.renameSync)(r,p),Be={phase:"ready",got:Be.got,total:a,err:""},{ok:!0,file:p}}catch(s){try{(0,je.rmSync)(r,{force:!0})}catch{}let o=String(s&&s.message||s).slice(0,200);return Be={phase:"error",got:0,total:0,err:o},{ok:!1,err:o}}}function cu(e={}){if(e.busy)return{ok:!1,err:"сейчас идёт сбор — обновление подождёт до его конца"};let n=ko().latest,r=n&&Ai(n.version);if(!r)return{ok:!1,err:"установщик ещё не скачан"};if(process.platform!=="win32")return{ok:!1,err:"установщик есть только для Windows"};try{(0,ru.spawn)(r,["/SILENT","/NOCANCEL","/RESTARTAPPLICATIONS"],{detached:!0,stdio:"ignore"}).unref()}catch(s){return{ok:!1,err:String(s&&s.message||s).slice(0,200)}}return{ok:!0,version:n.version}}var un,je,eu,tu,nu,ru,xo,su,pg,Ti,wr,hg,Be,lu=J(()=>{un=require("node:path"),je=require("node:fs"),eu=require("node:url"),tu=require("node:path"),nu=require("node:crypto"),ru=require("node:child_process"),xo=require("node:stream"),su=require("node:stream/promises");gt();pg=process.env.MC_UPDATE_URL||"https://raw.githubusercontent.com/Tim2190/mediachrome-dist/main/update.json",Ti=(0,un.join)(we,"update-state.json"),wr=(0,un.join)(we,"update"),hg=24*3600*1e3;i(ou,"currentVersion");i(au,"cmpVer");i(ko,"readState");i(_d,"writeState");Be={phase:"idle",got:0,total:0,err:""};i(fg,"getJson");i(Li,"checkUpdate");i(Ai,"readyFile");i(rs,"updateState");i(iu,"downloadUpdate");i(cu,"installUpdate")});function So(){return`<!doctype html>\r
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
  </div>\`);\r
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
      <input id="repq" placeholder="\${L('слово в тексте','word in text')}" style="max-width:220px"><span class="tag" id="reptotal"></span></div>\r
    <div id="replist" class="feed-list" style="max-height:none"></div>\r
    <div class="actions"><button id="repmore" class="sec" hidden>\${L('Ещё','More')}</button></div></div>\`);\r
  app.appendChild(rv);\r
  let off=0;\r
  const loadRev = async (reset)=>{ if(reset){ off=0; $('#replist',rv).innerHTML=''; }\r
    const q = '?offset='+off+'&limit=30&stars='+encodeURIComponent($('#repstars',rv).value)+'&q='+encodeURIComponent($('#repq',rv).value.trim())+($('#repver',rv).checked?'&ver=1':'')+($('#repansf',rv).value?'&ans='+$('#repansf',rv).value:'');\r
    const r = await (await api('/places/objects/'+id+'/reviews'+q)).json();\r
    $('#reptotal',rv).textContent = L('найдено','found')+': '+fmtN(r.total);\r
    for(const x of r.reviews){ $('#replist',rv).appendChild(el(\`<div class="feed-item"><div class="d">\${esc(repDay(x.created))}\${x.edited?'<br>✏️ '+esc(repDay(x.edited)):''}</div>\r
      <div class="t"><span class="repstar \${x.rating>=4?'pos':x.rating===3?'mid':'neg'}">\${starsTxt(x.rating)}</span> <b>\${esc(x.author||'')}</b>\${x.verified===true?' <span class="tag repok" title="'+esc(L('2ГИС знает, что автор был на месте','2GIS knows the author visited'))+'">✅ '+L('подтверждён','confirmed')+(x.trust?' · '+esc(x.trust):'')+'</span>':''}\${x.rated===false?' <span class="tag" title="'+esc(x.hideReason||'')+'">🚫 '+L('не учтён в рейтинге','not counted')+'</span>':''}\r
        <div style="margin-top:4px;white-space:pre-wrap">\${esc(x.text||L('(без текста)','(no text)'))}</div>\r
        \${x.answer?\`<button class="repansb" type="button" aria-expanded="false">↩️ \${L('есть ответ фирмы','business replied')}\${repAge(x)} <span class="caret">▸</span></button>\r
          <div class="repans" hidden><div class="repansh">↩️ \${L('Ответ фирмы','Business reply')}\${x.answer.date?' · '+esc(repDay(x.answer.date)):''}\${repAge(x)}</div><div style="white-space:pre-wrap">\${esc(x.answer.text)}</div></div>\`\r
          : \`<div class="tag" style="margin-top:6px">\${L('без ответа фирмы','no business reply')}</div>\`}</div></div>\`)); }\r
    $('#replist',rv).querySelectorAll('.repansb:not([data-on])').forEach(b=>{ b.dataset.on='1'; b.onclick=()=>{ const box=b.nextElementSibling; box.hidden=!box.hidden; b.setAttribute('aria-expanded', String(!box.hidden)); b.querySelector('.caret').textContent = box.hidden?'▸':'▾'; }; });\r
    off += r.reviews.length; $('#repmore',rv).hidden = off >= r.total; };\r
  $('#repstars',rv).onchange=()=>loadRev(true);\r
  $('#repver',rv).onchange=()=>loadRev(true);\r
  $('#repansf',rv).onchange=()=>loadRev(true);\r
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
  });\r
  window.addEventListener('afterprint', () => { if (oldTitle != null) { document.title = oldTitle; oldTitle = null; } });\r
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
`}var Mi=J(()=>{i(So,"uiHtml")});function wg(e){let t=e&&e.periodMode||"fixed";return t==="rolling"?`последние ${Math.max(2,+e.periodDays||2)} дн.`:t==="since"?`с ${e.from||"…"} и до сегодня`:tr(e).why}function yg(e){let t=Pe(e);if(!t)return null;let n=t.config||{},r={"/me":{hasPassword:!1,playwright:!1,hasGeminiKey:!1,geminiModel:""},["/projects/"+e]:{id:e,name:t.name,ai:bg(t.ai)}};for(let a of mg){let c=ln(e,{days:a});if(c){r["/projects/"+e+"/analytics"+(a?"?days="+a:"")]=c;for(let d of c.byDay||[]){let l="/projects/"+e+"/day?d="+d.day;d.count&&r[l]===void 0&&(r[l]={day:d.day,items:no(e,d.day)})}}}let s=new Date,o=i(a=>String(a).padStart(2,"0"),"p2");return{id:e,name:t.name||"Мониторинг",keyword:n.keyword||"",sources:(n.sites||[]).length,periodText:wg(n),madeAt:`${o(s.getDate())}.${o(s.getMonth()+1)}.${s.getFullYear()} ${o(s.getHours())}:${o(s.getMinutes())}`,api:r}}function pu(e){let t=yg(e);if(!t)return null;let n=So(),r="<script>window.MC_SNAPSHOT = "+gg(t)+`;</script>
`;return{html:n.replace("<body>",`<body>
`+r).replace("<title>mediachrome — кабинет</title>","<title>"+vg(t.name)+" — дашборд</title>"),snap:t}}function hu(e){let t=String(e.name||"dashboard").replace(/[^A-Za-zА-Яа-яЁё0-9 _-]+/g,"").trim().replace(/\s+/g,"-")||"dashboard",n=new Date,r=i(s=>String(s).padStart(2,"0"),"p");return`${t}-${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}.html`}function Ci(e){return`attachment; filename="${e.replace(/[^\x20-\x7E]/g,"_").replace(/["\\]/g,"_")}"; filename*=UTF-8''${encodeURIComponent(e)}`}var du,uu,Qb,mg,gg,bg,vg,fu=J(()=>{du=require("node:url"),uu=require("node:path");Rt();es();Js();Mi();Qb=(0,uu.dirname)((0,du.fileURLToPath)(__mcFileUrl)),mg=[null,30,7],gg=i(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJson");i(wg,"periodText");bg=i(e=>{let t={};for(let[n,r]of Object.entries(e||{}))r&&(t[n]={at:r.at||null,text:r.text||"",err:r.err||"",model:r.model||"",window:r.window||"",auto:!!r.auto,items:Array.isArray(r.items)?r.items:null});return t},"cleanAi");i(yg,"buildSnapshot");i(pu,"buildShareHtml");vg=i(e=>String(e??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),"esc");i(hu,"shareFileName");i(Ci,"contentDisposition")});function mu(e,t,n){let r=[];r.push("=== ДИАГНОСТИКА: "+e+" ==="),n&&r.push("период: "+(n.why||(n.from||"…")+" … "+(n.to||"…"))),r.push("каналы: "+(t.channel||"—")),r.push("итог движка: "+(t.note||"—")),r.push("найдено (взято): "+(t.rows?t.rows.length:0));let s=t.diag||{},o=s.meta||{},a=s.records||[];r.push(""),r.push("--- канал поиска ---"),r.push("вид поиска: "+(o.searchKind||"—")),r.push("URL поиска: "+(o.searchUrl||"(поиск не строился)")),o.renderUrl&&r.push("URL рендера: "+o.renderUrl),o.rawLinks&&o.rawLinks.length?(r.push("сырые ссылки со страницы поиска (образец "+o.rawLinks.length+"):"),o.rawLinks.slice(0,15).forEach(h=>r.push("   "+h))):r.push("сырых ссылок со страницы поиска: 0 (пусто/оболочка/JS-выдача)"),r.push(""),r.push("--- судьба открытых ссылок ("+a.length+") ---");let c={};for(let h of a)c[h.verdict]=(c[h.verdict]||0)+1;r.push("сводка вердиктов: "+(Object.entries(c).map(([h,m])=>h+"="+m).join(", ")||"—"));let d=/не открылась|дата не найдена|дата не распознана|не успели|не влезла/i,l=new Map;for(let h of a){let m=h.verdict||"—";l.has(m)||l.set(m,[]),l.get(m).push(h)}let p=i(h=>d.test(h)?0:h==="ВЗЯТА"?1:2,"rank"),f=[...l.keys()].sort((h,m)=>p(h)-p(m)||l.get(m).length-l.get(h).length),u=5;for(let h of f){let m=l.get(h);r.push("  • "+h+" — "+m.length+(d.test(h)?"  (ЭТО ПОТЕРЯ: страницу мы не проверили)":"")),m.slice(0,u).forEach(w=>{let g=[];w.date&&g.push('дата="'+w.date+'"->'+(w.parsed||"НЕ РАСПОЗНАНА")),w.hasKw!=null&&g.push("ключ:"+(w.hasKw?"да":"нет")),r.push("     "+(w.title?"«"+w.title+"»  ":"")+w.url+(g.length?"   ["+g.join(" | ")+"]":""))}),m.length>u&&r.push("     … ещё "+(m.length-u)+" с таким же вердиктом")}return r.join(`
`)}var gu=J(()=>{i(mu,"diagReport")});function bu(e,t,n,r){let s=Math.abs(e)%100,o=s%10;return s>10&&s<20?r:o>1&&o<5?n:o===1?t:r}function br(e){let t=String(e||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return t?[+t[1],+t[2],+t[3]]:null}function yu(e,t){let n=br(e),r=br(t);if(!n&&!r)return"";if(!n||!r){let s=n||r;return s[2]+" "+$t[s[1]-1]+" "+s[0]}return n[0]===r[0]&&n[1]===r[1]&&n[2]===r[2]?n[2]+" "+$t[n[1]-1]+" "+n[0]:n[0]===r[0]&&n[1]===r[1]?n[2]+"–"+r[2]+" "+$t[n[1]-1]+" "+n[0]:n[0]===r[0]?n[2]+" "+$t[n[1]-1]+" — "+r[2]+" "+$t[r[1]-1]+" "+n[0]:n[2]+" "+$t[n[1]-1]+" "+n[0]+" — "+r[2]+" "+$t[r[1]-1]+" "+r[0]}function vu(e,t){let n=br(e),r=br(t);return!n||!r?0:Math.round((Date.UTC(r[0],r[1]-1,r[2])-Date.UTC(n[0],n[1]-1,n[2]))/864e5)+1}function xu(e){let t=Math.max(0,Math.round((+e||0)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),s=t%60,o=[];return n&&o.push(Ue(n,"час","часа","часов")),r&&o.push(Ue(r,"минута","минуты","минут")),(s||!o.length)&&o.push(Ue(s,"секунда","секунды","секунд")),o.join(" ")}function Tg(e){let t=new Map;for(let n of e)t.set(Di(n.source),(t.get(Di(n.source))||0)+1);return ku([...t.entries()])}function ku(e){let n=e.map(([s,o])=>[Di(s),o]).sort((s,o)=>o[1]-s[1]||s[0].localeCompare(o[0])).filter(([,s])=>s>1).slice(0,12);if(!n.length)return"";let r=[];for(let s=0;s<n.length;){let o=n[s][1],a=[];for(;s<n.length&&n[s][1]===o;)a.push(n[s++][0]);r.push(a.join(" / ")+" — "+(a.length>1?"по ":"")+o)}return r.join(", ")}function Su(e,t){let n=e||{},r=t||{},s=Array.isArray(r.rows)?r.rows:[],o=Array.isArray(r.log)?r.log:[],a=i(v=>o.find(T=>T.site===v)||null,"line"),c=a("(период)"),d=a("(время)"),l=[];if(l.push("ОТЧЁТ ПО МОНИТОРИНГУ"),l.push(""),l.push("Тема: "+(n.keyword||"—")),c&&c.from&&c.to?l.push("Период: "+yu(c.from,c.to)+" ("+Ue(vu(c.from,c.to),"день","дня","дней")+")"):c&&c.note&&l.push("Период: "+c.note),r.at){let v=new Date(r.at);l.push("Дата мониторинга: "+v.getDate()+" "+$t[v.getMonth()]+" "+v.getFullYear())}let p=o.filter(v=>!Sg(v.site));if(p.length){let v=new Map;for(let T of p){let k=Qt(T.site);v.set(k,(v.get(k)||0)+1)}l.push(""),l.push("ОХВАТ"),l.push("Просмотрено "+Ue(p.length,"источник","источника","источников")+":");for(let T of wu){let k=v.get(T);if(!k)continue;let x=kg[T];l.push("  — "+(T==="youtube"?"YouTube":Ue(k,x[0],x[1],x[2])))}}d&&d.ms&&(l.push(""),l.push("ЗАТРАЧЕНО ВРЕМЕНИ"),l.push(xu(d.ms)+" (автоматический сбор, 4 источника одновременно)")),l.push(""),l.push("РЕЗУЛЬТАТ");let f=new Set(s.map(v=>v.source));l.push(Ue(s.length,"материал","материала","материалов")+" на "+Ue(f.size,"источнике","источниках","источниках")+(p.length?" из "+p.length:""));let u=new Map;for(let v of s){let T=ye(v.date);if(!T)continue;let k=X(T);u.set(k,(u.get(k)||0)+1)}if(u.size){l.push(""),l.push("По дням:");for(let v of[...u.keys()].sort()){let T=br(v);l.push("  "+T[2]+" "+$t[T[1]-1]+" — "+u.get(v))}}let h=new Map;for(let v of s){let T=Qt(v.source);h.set(T,(h.get(T)||0)+1)}if(h.size>1){l.push(""),l.push("По типу источника:");for(let v of wu){let T=h.get(v);T&&l.push("  "+(v==="site"?"сайты СМИ":v==="telegram"?"телеграм":v==="youtube"?"YouTube":"Фейсбук")+" — "+T)}}let m=new Map;for(let v of s){let T=xg[v.match]||String(v.match||"не указано");m.set(T,(m.get(T)||0)+1)}if(m.size){l.push(""),l.push("Где встречается упоминание:");for(let[v,T]of[...m.entries()].sort((k,x)=>x[1]-k[1]||k[0].localeCompare(x[0])))l.push("  "+v+" — "+T)}let w=Tg(s);w&&(l.push(""),l.push("Больше всего: "+w)),l.push(""),l.push("МЕТОДИКА");let g=String(n.exclude||"").trim();l.push(g?"  — Применялись минус-слова: "+g+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let b=o.filter(v=>v.site==="(ИИ)"),y=b.find(v=>/релевантност/i.test(String(v.note||"")));y?l.push("  — ИИ-проверка релевантности: "+String(y.note).replace(/^ИИ-[^:]*:\s*/,"")+"."):l.push(b.length?"  — Выполнен ИИ-разбор собранного ("+b.length+").":"  — ИИ не запускался: отбор полностью детерминированный — разбор разметки и текста страниц, без машинного обучения и без распознавания изображений."),l.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),l.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let L=p.filter(v=>!(v.found>0)).length;return L&&l.push("  — У "+Ue(L,"источника","источников","источников")+" из "+p.length+" материалов по теме за этот период не нашлось."),l.join(`
`)+`
`}function Tu(e,t,n={}){let r=e||{},s=t&&t.overview||{},o=[],a=n.now instanceof Date?n.now:new Date;o.push("ОТЧЁТ ПО МОНИТОРИНГУ"),o.push(""),o.push("Тема: "+(r.keyword||"—")),s.windowFrom&&s.windowTo&&o.push("Период: "+yu(s.windowFrom,s.windowTo)+" ("+Ue(vu(s.windowFrom,s.windowTo),"день","дня","дней")+")"),o.push("Дата отчёта: "+a.getDate()+" "+$t[a.getMonth()]+" "+a.getFullYear());let c=(r.sites||[]).map(x=>String(x||"").trim()).filter(Boolean),d=c.filter(x=>/(^@)|(^https?:\/\/)?(www\.)?t\.me\//i.test(x)).length,l=c.length-d,p=(r.facebook||[]).map(x=>String(x||"").trim()).filter(Boolean).length,f=!!(r.youtube&&r.youtube.enabled);if(c.length||p||f){o.push(""),o.push("ОХВАТ");let x=c.length+p+(f?1:0);o.push("Под наблюдением "+Ue(x,"источник","источника","источников")+":"),l&&o.push("  — "+Ue(l,"сайт СМИ","сайта СМИ","сайтов СМИ")),d&&o.push("  — "+Ue(d,"телеграм-канал","телеграм-канала","телеграм-каналов")),f&&o.push("  — YouTube"),p&&o.push("  — "+Ue(p,"профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"))}let u=Array.isArray(t&&t.runs)?t.runs:[],h=u.map(x=>+x.sec).filter(x=>Number.isFinite(x)&&x>0);if(h.length){let x=h.reduce((C,E)=>C+E,0);o.push(""),o.push("ЗАТРАЧЕНО ВРЕМЕНИ"),o.push(xu(x*1e3)+" — "+Ue(u.length,"автоматический сбор","автоматических сбора","автоматических сборов")+" за период")}o.push(""),o.push("РЕЗУЛЬТАТ");let m=t&&t.silent&&t.silent.configured||0;o.push(Ue(s.items||0,"материал","материала","материалов")+" на "+Ue(s.uniqueSources||0,"источнике","источниках","источниках")+(m?" из "+m+" отслеживаемых":""));let w=(t&&Array.isArray(t.byDay)?t.byDay:[]).filter(x=>x&&x.count>0);if(w.length){o.push(""),o.push("По дням:");for(let x of w){let C=br(x.day);o.push("  "+(C?C[2]+" "+$t[C[1]-1]:x.day)+" — "+x.count)}}let g=[["site",s.siteItems],["telegram",s.telegramItems],["youtube",s.youtubeItems],["facebook",s.facebookItems]].filter(([,x])=>x>0);if(g.length>1){o.push(""),o.push("По типу источника:");for(let[x,C]of g)o.push("  "+(x==="site"?"сайты СМИ":x==="telegram"?"телеграм":x==="youtube"?"YouTube":"Фейсбук")+" — "+C)}let b=[["в заголовке",s.matchTitle],["в тексте материала",s.matchBody],["в посте",s.matchPost],["в видео",s.matchVideo],["без пометки",s.matchOther]].filter(([,x])=>x>0);if(b.length){o.push(""),o.push("Где встречается упоминание:");for(let[x,C]of b)o.push("  "+x+" — "+C)}let y=ku((t&&t.bySource?t.bySource:[]).map(x=>[x.key,x.count]));y&&(o.push(""),o.push("Больше всего: "+y));let L=t&&t.tone||{total:0};if(L.total){o.push(""),o.push("ТОНАЛЬНОСТЬ (оценка ИИ по заголовку и фрагменту)"),o.push("  выигрышно для объекта — "+L.pos+", нейтрально — "+L.neu+", невыгодно — "+L.neg+" (оценено "+L.total+" из "+(s.items||0)+")");let x=(L.bySource||[]).filter(C=>C.neg>0).slice(0,5);x.length&&o.push("  больше всего невыгодных: "+x.map(C=>C.key+" — "+C.neg).join(", "))}o.push(""),o.push("МЕТОДИКА");let v=String(r.exclude||"").trim();o.push(v?"  — Применялись минус-слова: "+v+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let T=t&&t.relevance||{checked:0};T.checked?o.push("  — ИИ-проверка релевантности: проверено "+Ue(T.checked,"материал","материала","материалов")+", из них "+T.off+" "+bu(T.off,"похож","похожи","похожи")+" на случайное совпадение имени"+(T.dim?" и "+Ue(T.dim,"спорный","спорных","спорных"):"")+". Из выдачи они не удалены — помечены."):o.push("  — ИИ-проверка релевантности не запускалась."),o.push("  — Отбор материалов детерминированный: разбор разметки и текста страниц, без машинного обучения."),o.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),o.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let k=t&&t.silent&&t.silent.list?t.silent.list.length+(t.silent.more||0):0;return k&&o.push("  — У "+Ue(k,"источника","источников","источников")+" из "+m+" материалов по теме за этот период не нашлось."),o.join(`
`)+`
`}var Ue,$t,xg,kg,wu,Sg,Di,Lu=J(()=>{ht();es();i(bu,"plural");Ue=i((e,t,n,r)=>e+" "+bu(e,t,n,r),"num"),$t=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];i(br,"ymdParts");i(yu,"ruRange");i(vu,"daysInRange");i(xu,"ruDuration");xg={title:"в заголовке",body:"в тексте материала",post:"в посте",video:"в видео",подпись:"в подписи к посту",репост:"в тексте репоста"},kg={site:["сайт СМИ","сайта СМИ","сайтов СМИ"],telegram:["телеграм-канал","телеграм-канала","телеграм-каналов"],youtube:["YouTube","YouTube","YouTube"],facebook:["профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"]},wu=["site","telegram","youtube","facebook"],Sg=i(e=>/^\(/.test(String(e||"")),"isService"),Di=i(e=>String(e)==="youtube"?"YouTube":String(e),"srcName");i(Tg,"topSources");i(ku,"topFromPairs");i(Su,"buildReport");i(Tu,"buildWindowReport")});function Cn(e){let t=["source","date","title","url","channel","channels","match","snippet","author","kind","via","comments"];return[t.join(",")].concat((e||[]).map(n=>t.map(r=>Lg(r==="date"?Ft(n[r]):n[r])).join(","))).join(`\r
`)}var Lg,Ri=J(()=>{ht();Lg=i(e=>{let t=String(e??"");return/[",\r\n]/.test(t)?'"'+t.replace(/"/g,'""')+'"':t},"csvCell");i(Cn,"toCSV")});async function To(e,t="ручной"){let n=Pe(e);if(!n)return{code:404,error:"проект не найден"};let r=gr();if(r)return{code:402,error:r};if(tt.has(e))return{code:409,error:"уже идёт"};tt.add(e),ar(e,{name:n.name,by:t});let s=null,o=i((a,c)=>{try{let d=_n(e,a,c,s);s=d.ts,dn(e,{ts:d.ts}).catch(()=>{})}catch{}},"onProgress");try{let{rows:a,log:c}=await or(n,o,{onStep:i(p=>ir(e,p),"onStep"),stopping:i(()=>cr(e),"stopping")}),d=_n(e,a,c,s);try{await dn(e,{ts:d.ts})}catch{}let l=await fo(e,{foundNow:a.length,runTs:d.ts});return l.length&&Fs(e,d.ts,l.map(p=>({site:"(ИИ)",channel:"gemini",found:0,note:p}))),{code:200,added:d.added,total:d.total,ts:d.ts,found:a.length,log:c}}catch(a){return{code:500,error:String(a&&a.message||a)}}finally{tt.delete(e),lr(e)}}var Ni=J(()=>{Rt();Xr();Qr();Zr();mo();fr();ns();i(To,"runNow")});function Ng(e,t=""){let n=String(e||"").trim().match(/^\/([A-Za-z_]+)(?:@([A-Za-z0-9_]+))?(?:\s+([\s\S]*))?$/);if(!n)return null;let r=(n[2]||"").toLowerCase(),s=String(t||"").replace(/^@/,"").toLowerCase();return r&&s&&r!==s?null:{cmd:n[1].toLowerCase(),args:(n[3]||"").trim()}}function Eg(e){let t=String(e||"").trim().replace(/^\+\s*/,""),n=[],r=[],s=[];for(let o of t.split(/[\s,;]+/)){let a=o.trim().replace(/^[<"'«]+|[>"'»]+$/g,"").replace(/^\++/,"");if(!a)continue;if(Sn(a)){r.push(Sn(a).url);continue}let c=va(a);if(c){n.push("t.me/"+c);continue}let d=a.replace(/^https?:\/\//i,"").replace(/\/.*$/,"");if(/(^|\.)(facebook|fb)\.com$/i.test(d)){s.push(a);continue}if(/^[^\s./]+(\.[^\s./]+)*\.[^\s./\d][^\s./]+$/u.test(d)&&!/^\d+\.\d+/.test(d)){n.push(a.replace(/^https?:\/\//i,"").replace(/\/+$/,""));continue}s.push(a)}return{sites:n,facebook:r,bad:s}}function Eu(e){let t=String(e||"").trim().match(/^(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(!t)return null;let n=+t[1];return n>=1&&n<=is?n:null}function Pg(e){let t=String(e||"").trim();if(!t)return{kw:"",days:null};let n=t.match(/^([\s\S]*?)\s+(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(n&&n[1].trim()){let r=+n[2];if(r>=1&&r<=is)return{kw:n[1].trim(),days:r}}return{kw:t,days:null}}function Pu(e,t,n,r={},s=new Date){let o=e||{},a=Math.max(1,Math.min(is,Math.floor(+n)||1)),c=a===1?{periodMode:"fixed",from:X(s),to:X(s),periodDays:void 0}:{periodMode:"rolling",periodDays:a,from:"",to:""},d=i(l=>[...new Set(l.map(p=>String(p).trim()).filter(Boolean))],"uniq");return{...o,keyword:t,exclude:"",...c,sites:d([...o.sites||[],...r.sites||[]]),facebook:d([...o.facebook||[],...r.facebook||[]])}}async function Og(e,t){let n=t.from&&t.from.id,r=e.owners||[];if(n!=null&&r.some(o=>String(o.id)===String(n)))return{ok:!0};if(!r.length)return{ok:!1,why:"Владелец бота ещё не привязан. В кабинете, в настройках бота, есть команда вида /iam 123456 — владелец отправляет её мне в личные сообщения. После этого запускать сбор смогут он и администраторы его чатов."};if(!jg(t.chat))return{ok:!1,why:"Запускать сбор могут владелец бота и администраторы чата, где он состоит."};let s=await Cu(e.token,t.chat.id,n);if(s!=="creator"&&s!=="administrator")return{ok:!1,why:"Запускать сбор в этом чате могут владелец бота и администраторы чата."};for(let o of r){let a=await Cu(e.token,t.chat.id,o.id);if(["creator","administrator","member","restricted"].includes(a))return{ok:!0}}return{ok:!1,why:"Владельца бота нет в этом чате — запускать сбор отсюда нельзя."}}async function fe(e,t,n,r={}){let s=await kt(e.token,"sendMessage",{chat_id:t,text:n,parse_mode:"HTML",disable_web_page_preview:!0,...r});return s.ok&&s.result?s.result.message_id:null}function $i(e,t=0){return e.map((n,r)=>t+r+1+". <b>"+K(zg(n.title||n.url,160))+`</b>
`+K([n.source,Ft(n.date)].filter(Boolean).join(" · "))+`
`+K(n.url||"")).join(`

`)}function ju(e,t=5){let n=new Map;for(let r of e)n.set(r.source||"—",(n.get(r.source||"—")||0)+1);return[...n.entries()].sort((r,s)=>s[1]-r[1]).slice(0,t).map(([r,s])=>r+" — "+s).join(", ")}function Ig(e){return e=e||{},e.mode==="daily"?"каждый день в "+(e.hour!=null?e.hour:9)+":00":e.mode==="hours"?"каждые "+(e.everyHours||6)+" ч":e.mode==="minutes"?"каждые "+(e.everyMinutes||20)+" мин":"вручную, по кнопке"}async function Ou(e,t,n){let r=await fe(e,t.chat.id,"🔎 <b>Разовый поиск.</b> Что ищем? Ответьте на это сообщение словом или фразой. Варианты написания — через запятую: <i>Тоқаев, Токаев</i>",{reply_to_message_id:t.messageId,reply_markup:{force_reply:!0,selective:!0}});r&&n.prompts.add(r)}async function $u(e,t,n){let r=await fe(e,t.chat.id,"За сколько последних дней ищем «"+K(n.kw)+"»? Нажмите кнопку или ответьте на это сообщение числом от 1 до "+is+".",{reply_markup:{inline_keyboard:[Ag.map(s=>({text:String(s),callback_data:"sd:"+s}))]}});r&&n.prompts.add(r)}async function Ao(e,t,n,r,s=""){let o=Pu(r.config,n.kw,n.days,n.adds),a=[...n.adds.sites,...n.adds.facebook],c=[s,"Ищу «<b>"+K(n.kw)+"</b>» за последние "+as(n.days)+" по "+zi(o)+" источникам проекта «"+K(r.name)+"»"+(a.length?", включая добавленные для этого поиска: "+K(a.join(", ")):"")+".","","Добавить источник только для этого поиска — ответьте на это сообщение: <code>+ адрес</code> (сайт, t.me/канал или facebook.com/профиль; можно несколько через пробел). Или запускайте."].filter((l,p)=>l||p>0),d=await fe(e,t.chat.id,c.join(`
`),{reply_markup:{inline_keyboard:[[{text:"▶ Запустить",callback_data:"sr"},{text:"✖ Отмена",callback_data:"sx"}]]}});d&&n.prompts.add(d)}function Hg(e,t,n,r,s){try{(0,zt.mkdirSync)(ss,{recursive:!0});let o=(0,os.join)(ss,Hi(e)+" — "+Fi(t));(0,zt.writeFileSync)(o+".csv","\uFEFF"+Cn(n)),(0,zt.writeFileSync)(o+".json",JSON.stringify({...s,keyword:t,found:n.length,log:r},null,2));let a=(0,zt.readdirSync)(ss).map(c=>({f:c,at:(0,zt.statSync)((0,os.join)(ss,c)).mtimeMs})).sort((c,d)=>d.at-c.at);for(let c of a.slice(Rg*2))try{(0,zt.rmSync)((0,os.join)(ss,c.f),{force:!0})}catch{}}catch{}}async function qg(e,t,n,r,s){let o=Lo(e),a=_e.now(),c=Pu(s.config,r.kw,r.days,r.adds,new Date(a)),d=zi(c);tt.add(o),ar(o,{name:"Разовый поиск «"+r.kw+"»",by:"телеграм: "+r.user,total:d}),await fe(t,n,"🔎 Ищу «<b>"+K(r.kw)+"</b>» за "+as(r.days)+" по "+d+" источникам. Это займёт несколько минут — итог пришлю сюда. Остановить: /cancel");let l;try{l=await _e.runSearch({id:o,name:"Разовый поиск «"+r.kw+"»",config:c},{onStep:i(w=>ir(o,w),"onStep"),stopping:i(()=>cr(o),"stopping")})}catch(w){await fe(t,n,"⚠️ Поиск «"+K(r.kw)+"» сорвался: "+K(String(w&&w.message||w)));return}finally{tt.delete(o),lr(o)}let p=l&&l.rows||[],f=l&&l.log||[],u=f.find(w=>w.site==="(остановлен)");Hg(a,r.kw,p,f,{days:r.days,by:r.user,project:s.name,added:r.adds});let m=(u?"⏹ Поиск «"+K(r.kw)+"» остановлен: "+K(u.note.replace(/^сбор остановлен человеком: /,""))+`.

`:"")+(p.length?"✅ «<b>"+K(r.kw)+"</b>» за "+as(r.days)+": найдено <b>"+p.length+"</b> (источников "+d+", "+Oi(_e.now()-a)+`).
Больше всех: `+K(ju(p)):"«<b>"+K(r.kw)+"</b>» за "+as(r.days)+": ничего не нашлось (источников "+d+", "+Oi(_e.now()-a)+").");p.length&&(m+=`

`+$i(p.slice(0,Zt)),p.length>Zt&&(m+=`

…и ещё `+(p.length-Zt)+" — в файле ниже.")),m.length>4e3&&(m=m.slice(0,3990)+"…"),await fe(t,n,m),p.length&&await yi(t.token,n,"поиск "+Fi(r.kw)+" "+Hi(a)+".csv","\uFEFF"+Cn(p),"Все "+p.length+" — таблицей")}async function Bg(e,t,n,r){let s=await _e.runNow(e,"телеграм: "+r);s.code===200?await fe(t,n,"✅ Сбор закончен: найдено "+(s.found!=null?s.found:"—")+", из них новых "+(s.added||0)+". Новое ушло сюда по ходу сбора."):await fe(t,n,"⚠️ Сбор не состоялся: "+K(s.error||"причина не названа"))}function zu(){let e=dr()[0];return e?"Сейчас идёт сбор «"+K(e.name)+"»"+(e.total?" ("+e.done+" из "+e.total+")":"")+". Дождитесь конца — ход видно в /status.":"Сейчас уже идёт сбор."}async function Ru(e,t,n,r,s,o){let a=r.chat.id;switch(s){case"start":case"help":return fe(t,a,Fg);case"iam":{if(r.chat.type!=="private")return Ml(e),fe(t,a,"Код владельца отправляют мне в <b>личные сообщения</b>, а не в общий чат. Этот код я уже заменил — новый смотрите в кабинете.");let c=String(r.from.id),d=ji.get(c)||{n:0,at:_e.now()};if(_e.now()-d.at>3600*1e3&&(d.n=0,d.at=_e.now()),d.n>=Dg)return fe(t,a,"Слишком много неверных кодов. Попробуйте через час.");if(!o||o!==String(t.ownerCode||""))return d.n++,ji.set(c,d),fe(t,a,"Код не подошёл. Он в кабинете, в настройках телеграм-бота проекта.");let l=(t.owners||[]).filter(p=>String(p.id)!==c).concat([{id:r.from.id,name:Ei(r.from)}]);return lt(e,{owners:l}),ji.delete(c),fe(t,a,"Готово: вы владелец бота проекта «"+K(n.name)+"». Вам доступны /search, /run и /cancel — здесь и в общих чатах, где вы состоите. Администраторы этих чатов тоже смогут запускать сбор.")}case"status":{let c=dr().filter(f=>f.id===String(e)||f.id===Lo(e)),d=dr().filter(f=>f.id!==String(e)&&f.id!==Lo(e)),l=[];for(let f of c)l.push("⏳ Идёт: «"+K(f.name)+"»"+(f.total?", "+f.done+" из "+f.total:"")+", найдено "+f.found+", "+Oi(f.ms)+(f.stopping?" — останавливаю":"")+".");for(let f of d)l.push("Программа занята другим проектом: «"+K(f.name)+"».");l.length||l.push("Сейчас сбор не идёт.");let p=(n.runs||[])[0];return p&&l.push("Последний сбор: "+K(new Date(p.at).toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}))+", найдено "+(p.found||0)+", новых "+(p.added||0)+"."),l.push("Расписание: "+Ig(n.schedule)+"."),fe(t,a,l.join(`
`))}case"today":{let c=X(new Date(_e.now())),d=(n.items||[]).filter(u=>u.date&&X(new Date(u.date))===c).sort((u,h)=>String(h.date).localeCompare(String(u.date))),l=Math.max(1,parseInt(o,10)||1),p=(l-1)*Zt;if(!d.length)return fe(t,a,"Сегодня в ленте проекта «"+K(n.name)+"» материалов пока нет.");let f="Сегодня — <b>"+d.length+"</b>. Больше всех: "+K(ju(d))+`

`+$i(d.slice(p,p+Zt),p);return d.length>p+Zt&&(f+=`

Дальше: /today `+(l+1)),fe(t,a,f.length>4e3?f.slice(0,3990)+"…":f)}case"find":{let c=o.split(",").map(p=>p.trim().toLowerCase()).filter(Boolean);if(!c.length)return fe(t,a,"Напишите слово после команды: <code>/find КТЖ</code>. Ищу по уже собранной ленте, новый обход не делаю.");let d=(n.items||[]).filter(p=>{let f=(String(p.title||"")+" "+String(p.snippet||"")).toLowerCase();return c.some(u=>f.includes(u))}).sort((p,f)=>String(f.date||"").localeCompare(String(p.date||"")));if(!d.length)return fe(t,a,"В собранной ленте «"+K(o)+"» не встречается. Поискать заново по сайтам — /search.");let l="В собранной ленте — <b>"+d.length+`</b> (новый обход не делал):

`+$i(d.slice(0,Zt));return d.length>Zt&&(l+=`

…и ещё `+(d.length-Zt)+". Все — /csv"),fe(t,a,l.length>4e3?l.slice(0,3990)+"…":l)}case"csv":{let c=n.items||[];if(!c.length)return fe(t,a,"Лента проекта пока пуста.");let d=await yi(t.token,a,Fi(n.name)+" "+Hi(_e.now())+".csv","\uFEFF"+Cn(c),"Лента «"+n.name+"»: "+c.length);return d.ok?null:fe(t,a,"Файл не отправился: "+K(d.err))}case"search":case"run":case"cancel":{let c=await Og(t,r);if(!c.ok)return fe(t,a,c.why);if(s==="cancel"){let p=[String(e),Lo(e)].filter(f=>Zs(f));return fe(t,a,p.length?"⏹ Останавливаю: дочитаю текущий источник и остановлюсь. Найденное сохранится.":"Сейчас по этому проекту ничего не собирается.")}if(s==="run"){let p=_e.blocked();if(p)return fe(t,a,K(p));if(tt.size)return fe(t,a,zu());let f=n.config||{};return String(f.keyword||"").trim()?(await fe(t,a,"▶ Запускаю сбор «"+K(n.name)+"»: "+zi(f)+" источников. Находки пойдут сюда по ходу, итог пришлю в конце. Остановить: /cancel"),Nu(Bg(e,t,a,Ei(r.from)).catch(()=>{})),null):fe(t,a,"У проекта не задан запрос — настройте его в кабинете.")}let d={step:"kw",kw:"",days:null,adds:{sites:[],facebook:[]},prompts:new Set,at:_e.now(),user:Ei(r.from)};pn.set(Ii(e,a,r.from.id),d);let l=Pg(o);return l.kw&&(d.kw=l.kw.slice(0,200)),l.days&&(d.days=l.days),d.kw?d.days?(d.step="ready",Ao(t,r,d,n)):(d.step="days",$u(t,r,d)):Ou(t,r,d)}default:return null}}async function Ug(e,t,n,r,s){let o=String(r.text||"").trim();if(s.at=_e.now(),s.step==="kw")return o?(s.kw=o.slice(0,200),s.step="days",$u(t,r,s)):Ou(t,r,s);if(s.step==="days"){let a=Eu(o);return a?(s.days=a,s.step="ready",Ao(t,r,s,n)):fe(t,r.chat.id,"Нужно число от 1 до "+is+". Или нажмите кнопку.")}if(s.step==="ready"){if(!/^\+/.test(o))return fe(t,r.chat.id,"Чтобы добавить источник, начните ответ с «+», например: <code>+ t.me/kanal</code>. Или нажмите «▶ Запустить».");let a=Eg(o),c=Au-s.adds.sites.length-s.adds.facebook.length,d=[...a.sites.map(f=>["sites",f]),...a.facebook.map(f=>["facebook",f])].filter(([f,u])=>!s.adds[f].includes(u)),l=d.slice(0,Math.max(0,c));for(let[f,u]of l)s.adds[f].push(u);let p=[];return l.length&&p.push("Добавил: "+K(l.map(f=>f[1]).join(", "))+"."),a.bad.length&&p.push("Не понял, что это за источник: "+K(a.bad.join(", "))+". Нужен адрес сайта, t.me/канал или facebook.com/профиль."),d.length>l.length&&p.push("Больше "+Au+" источников к разовому поиску не добавляю — для такого лучше завести проект в кабинете."),!l.length&&!a.bad.length&&d.length===l.length&&p.push("Эти источники уже есть."),Ao(t,r,s,n,p.join(`
`))}return null}async function Gg(e,t,n,r){let s=Ii(e,r.chat.id,r.from.id),o=pn.get(s);if(!o||!o.prompts.has(r.messageId)){let a=[...pn.values()].some(c=>c.prompts.has(r.messageId));await Ut(t,r.id,a?"Это поиск другого участника. Начните свой: /search":"Этот поиск уже неактуален. Начните заново: /search");return}if(o.at=_e.now(),r.data.startsWith("sd:")){let a=Eu(r.data.slice(3));if(!a||o.step!=="days"){await Ut(t,r.id);return}return o.days=a,o.step="ready",await Ut(t,r.id,as(a)),await Pi(t,r.chat.id,r.messageId),Ao(t,r,o,n)}if(r.data==="sx")return pn.delete(s),await Ut(t,r.id,"Отменено"),await Pi(t,r.chat.id,r.messageId),fe(t,r.chat.id,"Поиск отменён.");if(r.data==="sr"){if(o.step!=="ready"){await Ut(t,r.id);return}let a=_e.blocked();return a?(await Ut(t,r.id,"Не могу"),fe(t,r.chat.id,K(a))):tt.size?(await Ut(t,r.id,"Занято"),fe(t,r.chat.id,zu()+" Потом нажмите «▶ Запустить» ещё раз.")):(pn.delete(s),await Ut(t,r.id,"Запускаю"),await Pi(t,r.chat.id,r.messageId),Nu(qg(e,t,r.chat.id,o,n).catch(()=>{})),null)}await Ut(t,r.id)}async function Wg(e,t){let n=Ge(e),r=Pe(e);if(!r||!n.token||!n.enabled||!jt(r.config||{}).bot)return;let s=_e.now();for(let[l,p]of pn)s-p.at>Cg&&pn.delete(l);let o=n.bot||"";if(!o){let l=await pr(n.token);l.ok&&(o=l.bot,lt(e,{bot:l.bot}))}let a=new Map,c=i(async l=>{let p=String(l.id);return a.has(p)||a.set(p,await hr(Ge(e),l,s)),a.get(p)},"gate"),d=new Map;for(let l of t)try{if(l.kind==="cb"){if(!(await c(l.chat)).ok){await Ut(n,l.id,"Закрытый бот");continue}await Gg(e,Ge(e),Pe(e),l);continue}let p=Ge(e),f=Pe(e),u=Ng(l.text,o);if(u){if(u.cmd==="iam"){await Ru(e,p,f,l,u.cmd,u.args),a.delete(String(l.chat.id));continue}let m=await c(l.chat);if(!m.ok){u.cmd!=="stop"&&await fe(p,l.chat.id,Du[m.why]||Du.stranger);continue}if(l.date&&s-l.date*1e3>Mg&&u.cmd!=="start"&&u.cmd!=="help"){(!d.has(l.chat.id)||l.date<d.get(l.chat.id))&&d.set(l.chat.id,l.date);continue}await Ru(e,p,f,l,u.cmd,u.args);continue}let h=l.from&&pn.get(Ii(e,l.chat.id,l.from.id));h&&(l.replyTo&&h.prompts.has(l.replyTo)||l.chat.type==="private")&&(await c(l.chat)).ok&&await Ug(e,p,f,l,h)}catch{}for(let[l,p]of d)await fe(n,l,"Видел команду от "+$g(p)+", но программа в это время не работала (компьютер был выключен или спал). Повторите, если ещё нужно.")}function Iu(){Ud(Wg),setInterval(()=>{for(let e of an()){let t=Ge(e.id);if(!t.enabled||!t.token)continue;let n=Pe(e.id);!n||!jt(n.config||{}).bot||Mn(e.id).catch(()=>{})}},Kg)}var zt,os,is,Ag,Zt,Au,Mg,Cg,Dg,ss,Rg,_e,Mu,Nu,zi,Ei,jg,Cu,Ut,Pi,$g,Oi,as,zg,Du,Fg,pn,Ii,ji,Lo,Fi,Hi,Kg,Fu=J(()=>{zt=require("node:fs"),os=require("node:path");Rt();fr();Xr();Qr();Zr();ns();sr();Ri();Ni();Wr();Yn();ht();gt();is=30,Ag=[1,3,7,14,30],Zt=10,Au=10,Mg=300*1e3,Cg=900*1e3,Dg=5,ss=(0,os.join)(we,"searches"),Rg=30,_e={runSearch:i((e,t)=>or(e,null,t),"runSearch"),runNow:To,blocked:i(()=>gr(),"blocked"),now:i(()=>Date.now(),"now")},Mu=new Set,Nu=i(e=>(Mu.add(e),e.finally(()=>Mu.delete(e)),e),"track");i(Ng,"parseCommand");i(Eg,"parseAdds");i(Eu,"parseDays");i(Pg,"parseSearchArgs");i(Pu,"searchConfig");zi=i(e=>(e.sites||[]).length+(e.facebook||[]).length+(e.youtube&&e.youtube.enabled?1:0),"sourceCount"),Ei=i(e=>[e.first_name,e.last_name].filter(Boolean).join(" ")||(e.username?"@"+e.username:String(e.id||"кто-то")),"who"),jg=i(e=>e&&(e.type==="group"||e.type==="supergroup"),"isGroup"),Cu=i((e,t,n)=>bi(e,t,n,_e.now()),"memberStatus");i(Og,"mayControl");i(fe,"say");Ut=i((e,t,n="")=>kt(e.token,"answerCallbackQuery",{callback_query_id:t,text:n}),"answerCb"),Pi=i((e,t,n)=>kt(e.token,"editMessageReplyMarkup",{chat_id:t,message_id:n,reply_markup:{inline_keyboard:[]}}),"dropButtons"),$g=i(e=>new Date(e*1e3).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),"hhmm"),Oi=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"dur"),as=i(e=>e+" "+(e%10===1&&e%100!==11?"день":e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?"дня":"дней"),"daysWord"),zg=i((e,t)=>(e=String(e||"").replace(/\s+/g," ").trim(),e.length>t?e.slice(0,t-1)+"…":e),"cut");i($i,"itemLines");i(ju,"topSources");i(Ig,"scheduleText");Du={"no-owner":"Это закрытый бот мониторинга. Владелец ещё не привязан, поэтому я пока никому не отвечаю и ничего не присылаю. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета.",stranger:"Это закрытый бот мониторинга. Я отвечаю только владельцу и в общих чатах, где он состоит.","no-owner-here":"В этом чате нет владельца бота — здесь я не отвечаю и ничего не присылаю."},Fg=["<b>Что я умею</b>","","/status — идёт ли сейчас сбор и когда был последний","/today — что нашлось сегодня","/find слово — поиск по уже собранному (без нового обхода)","/csv — вся лента проекта файлом","","<b>Для владельца и администраторов чата</b>","/search — разовый поиск: слово → за сколько дней (до 30) → можно добавить источник через «+» → запуск","/run — собрать по проекту прямо сейчас","/cancel — остановить сбор (найденное сохранится)","","Отписаться от рассылки — /stop."].join(`
`),pn=new Map,Ii=i((e,t,n)=>e+"|"+t+"|"+n,"dKey"),ji=new Map;i(Ou,"askKw");i($u,"askDays");i(Ao,"askReady");Lo=i(e=>"tgsearch-"+e,"searchKey"),Fi=i(e=>String(e||"").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"поиск","fileSafe"),Hi=i(e=>{let t=new Date(e),n=i(r=>String(r).padStart(2,"0"),"p2");return X(t)+" "+n(t.getHours())+"-"+n(t.getMinutes())},"stamp");i(Hg,"saveSearch");i(qg,"searchJob");i(Bg,"runJob");i(zu,"busyText");i(Ru,"onCommand");i(Ug,"onDialogText");i(Gg,"onButton");i(Wg,"handleEvents");Kg=4e3;i(Iu,"startBotLoop")});function Do(e,t){Qg((0,Tt.dirname)(e));let n=e+".tmp";(0,St.writeFileSync)(n,JSON.stringify(t)),(0,St.renameSync)(n,e)}function Ro(e,t){try{return(0,St.existsSync)(e)?JSON.parse((0,St.readFileSync)(e,"utf8")):t}catch{return t}}function Le(){return qi||(qi=Object.assign(Zg(),Ro(Bu(),{})||{})),qi}function Gt(){Do(Bu(),Le())}function Uu(){Gt()}function Gu(e){return String(e||"").trim()!==Vg?{ok:!1,error:"код не подошёл"}:(Le().unlocked=!0,Gt(),{ok:!0})}function Wu(){return Le().unlocked=!1,Gt(),{ok:!0}}function Ku(e){let t=e&&e.mode==="minutes"?"minutes":"off",n=Math.max(Co,Math.min(1440,+(e&&e.everyMinutes)||30));return Le().schedule={mode:t,everyMinutes:n},Gt(),Le().schedule}function Vu(e){return Le().notify=Object.assign({},Le().notify,e||{}),Gt(),Le().notify}function Yu(e){let t=Le();if(!e||!e.id)return{ok:!1,error:"это не ссылка на карточку фирмы в 2ГИС"};if(t.objects.some(r=>r.id===e.id))return{ok:!1,error:"эта фирма уже отслеживается"};if(t.objects.length>=Bi)return{ok:!1,error:"больше "+Bi+" объектов модуль не ведёт"};let n={id:e.id,link:e,name:"",address:"",category:"",addedAt:Date.now(),watchFrom:Date.now(),harvest:{done:!1,offset:0,total:null},trustVer:Mo,card:null,lastCheck:0,lastOk:0,err:""};return t.objects.push(n),Gt(),{ok:!0,object:n}}function fn(e,t){let n=yr(e);return n?(Object.assign(n,t||{}),Gt(),n):null}function Ju(e){let t=Le(),n=t.objects.length;t.objects=t.objects.filter(r=>r.id!==String(e)),t.ai&&delete t.ai[e],Gt();try{(0,St.rmSync)(Dn(e),{recursive:!0,force:!0})}catch{}return t.objects.length<n}function Zu(e,t,n=Date.now()){if(!t)return!1;let r=Eo(e),s=r[r.length-1];return s&&s.rating===t.rating&&s.reviewsCount===t.reviewsCount&&s.ratingsCount===t.ratingsCount&&n-s.at<6*3600*1e3?!1:(r.push({at:n,rating:t.rating,reviewsCount:t.reviewsCount,ratingsCount:t.ratingsCount}),Do((0,Tt.join)(Dn(e),"history.json"),r.slice(-Xg)),!0)}function _u(e,t){if(!t||!t.length)return 0;let n=Rn(e),r=new Set(n.map(o=>o.key)),s=0;for(let o of t)r.has(o.key)||(n.push(o),r.add(o.key),s++);return Qu(e,n),s}function ds(e,t){let n=new Set(t);if(!n.size)return 0;let r=Rn(e),s=0;for(let o of r)n.has(o.key)&&!o.sent&&(o.sent=Date.now(),s++);return Qu(e,r),s}function us(e,t,{watchFrom:n=0,now:r=Date.now()}={}){let s=Object.assign({},e||{}),o=[];for(let a of t||[]){if(!a||!a.id)continue;let c=s[a.id];if(!c){s[a.id]={...a,seenAt:r};let l=_g(a.created);l!=null&&l>=n&&o.push(cs("new",a,r));continue}let d={...c,...a,seenAt:c.seenAt||r};c.rating!=null&&a.rating!=null&&c.rating!==a.rating?o.push(cs("rating",a,r,{from:c.rating})):a.text!==c.text&&(a.edited||"")!==(c.edited||"")&&o.push(cs("edited",a,r,{prevText:c.text})),!c.answer&&a.answer&&o.push(cs("answer",a,r)),c.rated!==!1&&a.rated===!1&&o.push(cs("unrated",a,r)),s[a.id]=d}return{merged:s,events:o}}function cs(e,t,n,r={}){let s=e==="rating"?t.rating:e==="edited"?t.edited||"":e==="answer"&&t.answer&&t.answer.date||"";return{key:e+":"+t.id+":"+s,kind:e,at:n,review:{id:t.id,rating:t.rating,text:t.text,author:t.author,created:t.created,edited:t.edited,answer:t.answer,rated:t.rated,hideReason:t.hideReason,verified:t.verified,trust:t.trust},...r}}function ep(e,t,n=Date.now()){if(!e||!t)return[];let r=[],s=(t.reviewsCount??0)-(e.reviewsCount??0),o=(t.ratingsCount??0)-(e.ratingsCount??0),a=e.rating!=null&&t.rating!=null&&e.rating!==t.rating,c=o-Math.max(0,s);return(a||c>0||s<0)&&r.push({key:"card:"+n,kind:"card",at:n,from:{rating:e.rating,reviewsCount:e.reviewsCount,ratingsCount:e.ratingsCount},to:{rating:t.rating,reviewsCount:t.reviewsCount,ratingsCount:t.ratingsCount},silentVotes:c>0?c:0,lostReviews:s<0?-s:0}),r}function dt(e){let t=Le();return t.tg=Object.assign({},t.tg||{},e||{}),t.tg.token&&!t.tg.ownerCode&&(t.tg.ownerCode=String((0,Hu.randomInt)(1e5,1e6))),Gt(),t.tg}function Po(){let e=ot();return{enabled:!!e.enabled,hasToken:!!e.token,bot:e.bot||"",borrowed:e.borrowed||"",chats:(e.chats||[]).map(t=>({id:t.id,name:t.name||"",access:t.access||""})),ownerCode:e.ownerCode||"",owners:(e.owners||[]).map(t=>t.name||String(t.id)),err:e.err||"",sentTotal:e.sentTotal||0}}function tp(e,t){let n=Le();return n.ai=n.ai||{},n.ai[e]=t,Gt(),t}function rp(){let e=Le();return{unlocked:!!e.unlocked,schedule:e.schedule,notify:e.notify,max:Bi,minEvery:Co,everyChoices:Yg,objects:e.objects.map(t=>({id:t.id,url:t.link&&t.link.url,name:t.name,address:t.address,category:t.category,card:t.card,lastCheck:t.lastCheck,lastOk:t.lastOk,err:t.err,harvest:t.harvest,addedAt:t.addedAt,unsent:ls(t.id).length,notify:t.notify||null})),tg:Po()}}var St,Tt,Hu,Bi,Vg,Mo,Co,Yg,Jg,Xg,qu,Bu,Dn,Qg,qi,Zg,No,hn,yr,Lt,Xu,Eo,Rn,Qu,ls,_g,ot,np,ps=J(()=>{St=require("node:fs"),Tt=require("node:path"),Hu=require("node:crypto");gt();Bi=10,Vg="1979",Mo=1,Co=20,Yg=[20,30,60,120,360,720],Jg=1e3,Xg=5e3,qu=i(()=>(0,Tt.join)(we,"places"),"ROOT"),Bu=i(()=>(0,Tt.join)(qu(),"places.json"),"MAIN"),Dn=i(e=>(0,Tt.join)(qu(),String(e).replace(/[^0-9A-Za-z_-]/g,"")),"objDir"),Qg=i(e=>{try{(0,St.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(Do,"writeJson");i(Ro,"readJson");qi=null,Zg=i(()=>({unlocked:!1,schedule:{mode:"off",everyMinutes:30},objects:[],tg:{},ai:{},notify:{answers:!0}}),"blank");i(Le,"state");i(Gt,"save");i(Uu,"saveState");i(Gu,"unlock");i(Wu,"lock");No=i(()=>!!Le().unlocked,"isUnlocked");i(Ku,"setSchedule");i(Vu,"setNotify");hn=i(()=>Le().objects.slice(),"listObjects"),yr=i(e=>Le().objects.find(t=>t.id===String(e))||null,"getObject");i(Yu,"addObject");i(fn,"updateObject");i(Ju,"removeObject");Lt=i(e=>Ro((0,Tt.join)(Dn(e),"reviews.json"),{})||{},"reviewsOf"),Xu=i((e,t)=>Do((0,Tt.join)(Dn(e),"reviews.json"),t),"saveReviews"),Eo=i(e=>Ro((0,Tt.join)(Dn(e),"history.json"),[])||[],"historyOf"),Rn=i(e=>Ro((0,Tt.join)(Dn(e),"events.json"),[])||[],"eventsOf"),Qu=i((e,t)=>Do((0,Tt.join)(Dn(e),"events.json"),t.slice(-Jg)),"saveEvents");i(Zu,"addHistory");i(_u,"addEvents");ls=i(e=>Rn(e).filter(t=>!t.sent),"unsentEvents");i(ds,"markSent");_g=i(e=>{let t=Date.parse(e||"");return Number.isFinite(t)?t:null},"ms");i(us,"diffReviews");i(cs,"ev");i(ep,"diffCard");ot=i(()=>Le().tg||{},"tgState");i(dt,"setTgState");i(Po,"tgPublic");i(tp,"setAiReport");np=i(e=>(Le().ai||{})[e]||null,"aiReport");i(rp,"publicState")});function jo(e){let t=String(e||"").trim();if(!t)return null;let n=t.match(/(?:https?:\/\/)?(go\.2gis\.com\/[A-Za-z0-9_-]+)/i);if(n)return{short:"https://"+n[1]};let r=t.match(/(?:https?:\/\/)?((?:[a-z]+\.)?2gis\.([a-z]{2,3}))((?:\/[a-z0-9_-]+)*?)\/firm\/(\d{6,20})/i);if(!r)return null;let s=r[1].toLowerCase().replace(/^www\./,""),o=r[2].toLowerCase(),a=(r[3]||"").split("/").filter(d=>d&&!/^(search|geo|tab|branches)$/i.test(d)).pop()||"",c=r[4];return{id:c,host:s,city:a,locale:e0(o),url:"https://"+s+(a?"/"+a:"")+"/firm/"+c}}function e0(e){return{kz:"ru_KZ",ru:"ru_RU",kg:"ru_KG",uz:"ru_UZ",by:"ru_BY",am:"ru_AM",az:"ru_AZ",ge:"ru_GE"}[e]||"ru_KZ"}function t0(e){let t="";for(let n=0;n<e.length;n++){let r=e[n];if(r!=="\\"){t+=r;continue}let s=e[++n];if(s===void 0)break;s==="n"?t+=`
`:s==="r"?t+="\r":s==="t"?t+="	":s==="b"?t+="\b":s==="f"?t+="\f":s==="v"?t+="\v":s==="0"&&!/[0-9]/.test(e[n+1]||"")?t+="\0":s==="x"&&/^[0-9a-fA-F]{2}$/.test(e.slice(n+1,n+3))?(t+=String.fromCharCode(parseInt(e.slice(n+1,n+3),16)),n+=2):s==="u"&&/^[0-9a-fA-F]{4}$/.test(e.slice(n+1,n+5))?(t+=String.fromCharCode(parseInt(e.slice(n+1,n+5),16)),n+=4):s==="\r"&&e[n+1]===`
`?n++:s===`
`||s==="\r"||(t+=s)}return t}function sp(e,t){let n=String(e||""),s=new RegExp("var\\s+"+t.replace(/[$]/g,"\\$")+"\\s*=\\s*JSON\\.parse\\('").exec(n);if(!s)return null;let o=s.index+s[0].length,a=o;for(;a<n.length;){if(n[a]==="\\"){a+=2;continue}if(n[a]==="'")break;a++}if(a>=n.length)return null;try{return JSON.parse(t0(n.slice(o,a)))}catch{return null}}function n0(e,t){let n=e&&e.data&&e.data.entity&&e.data.entity.profile&&e.data.entity.profile[t]&&e.data.entity.profile[t].data;if(n&&String(n.id||"").split("_")[0]===t)return n;let r=null,s=i((o,a)=>{if(!(r||!o||typeof o!="object"||a>25)){if(String(o.id||"").split("_")[0]===t&&o.reviews&&typeof o.reviews=="object"&&"general_rating"in o.reviews){r=o;return}for(let c in o)s(o[c],a+1)}},"walk");return s(e,0),r}function r0(e,t){let n=String(e||"");if(/captcha\.2gis/i.test(n))return"капча 2ГИС (проверка «вы не робот»)";if(/\/museum\b/i.test(n))return"2ГИС посчитал браузер устаревшим (страница «музей»)";let r=String(t||"").slice(0,2e4);return/captcha/i.test(r)&&!/initialState/.test(r)?"капча 2ГИС (проверка «вы не робот»)":""}function op(e,t,n=""){let r=r0(n,e);if(r)return{ok:!1,why:r};let s=sp(e,"__customcfg"),o=sp(e,"initialState");if(!o)return{ok:!1,why:"на странице нет данных карточки — 2ГИС поменял устройство страницы или не отдал её целиком"};let a=n0(o,String(t));if(!a)return{ok:!1,why:"на странице нет карточки с номером "+t+" — возможно, фирма закрыта или ссылка ведёт на другую"};let c=a.reviews||{},d=(String(e).match(/<title>([^<]*)<\/title>/)||[])[1]||"",l=(a.rubrics||[]).find(p=>p&&p.kind==="primary")||(a.rubrics||[])[0];return{ok:!0,id:String(t),name:String(a.name||a.name_ex&&a.name_ex.primary||"").trim(),address:String(a.address_name||"").trim(),category:String(l&&l.name||"").trim(),title:d.replace(/\s+—\s*2ГИС\s*$/,"").trim(),rating:ft(c.general_rating),reviewsCount:ft(c.general_review_count),ratingsCount:ft(c.general_review_count_with_stars),orgId:a.org?String(a.org.id||""):"",orgName:a.org?String(a.org.name||""):"",branchCount:a.org?ft(a.org.branch_count):null,orgRating:ft(c.org_rating),reviewKey:s&&s.reviewApiKey?String(s.reviewApiKey):"",reviewApi:s&&s.reviewApi3Url?String(s.reviewApi3Url):"https://public-api.reviews.2gis.com/3.0/"}}function ap({api:e,id:t,key:n,locale:r="ru_KZ",offset:s=0,limit:o=ut}){let a=String(e||"https://public-api.reviews.2gis.com/3.0/").replace(/\/?$/,"/"),c=new URLSearchParams({limit:String(Math.min(ut,Math.max(1,o))),offset:String(Math.max(0,s)),is_advertiser:"false",fields:"meta.branch_rating,meta.branch_reviews_count,meta.total_count,reviews.hiding_reason,reviews.trust_factors",sort_by:"date_edited",key:String(n||""),locale:r});return a+"branches/"+encodeURIComponent(String(t))+"/reviews?"+c.toString()}function s0(e){if(!e||e.id==null)return null;let t=e.official_answer&&e.official_answer.text?{text:String(e.official_answer.text),date:Gi(e.official_answer.date_created)}:null,n=e.user||{};return{id:String(e.id),created:Gi(e.date_created),edited:Gi(e.date_edited),rating:ft(e.rating),text:String(e.text||"").trim(),author:String(n.name||[n.first_name,n.last_name].filter(Boolean).join(" ")||"").trim(),authorReviews:ft(n.reviews_count),answer:t,rated:e.is_rated!==!1,hidden:!!e.is_hidden,hideReason:e.is_rated===!1||e.is_hidden?String(e.hiding_reason||"").trim():"",likes:ft(e.likes_count)||0,comments:ft(e.comments_count)||0,photos:Array.isArray(e.media)?e.media.length:0,provider:String(e.provider||"2gis"),...o0(e)}}function o0(e){let t=e&&e.trust_factors,n=t&&Array.isArray(t.factors)?t.factors:[];if(!!!(n.length||t&&t.trust_info&&t.trust_info.confirmed_caption))return{verified:!1};let s=n.map(o=>ft(o&&o.visits_count)).filter(Number.isFinite);return{verified:!0,trust:String(t.trust_info&&t.trust_info.caption||n[0]&&n[0].caption||"").trim(),visits:s.length?Math.max(...s):null}}function ip(e){let t=e;if(typeof e=="string")try{t=JSON.parse(e)}catch{return{ok:!1,why:"2ГИС ответил не данными"}}if(!t||typeof t!="object")return{ok:!1,why:"2ГИС ответил пустотой"};if(t.error_code||t.code&&t.code>=400)return{ok:!1,why:t.error_code==="FORBIDDEN"?"ключ к отзывам не подошёл (2ГИС его сменил)":"2ГИС отказал: "+(t.message||t.error_code||t.code),forbidden:t.error_code==="FORBIDDEN"||t.code===403};let n=t.meta||{};return{ok:!0,meta:{rating:ft(n.branch_rating),count:ft(n.branch_reviews_count),total:ft(n.total_count),next:!!n.next_link},reviews:(Array.isArray(t.reviews)?t.reviews:[]).map(s0).filter(Boolean)}}var hs,ft,ut,Gi,Oo=J(()=>{i(jo,"parseFirmLink");i(e0,"localeOf");hs=i(e=>e&&e.url?e.url+"/tab/reviews":"","reviewsPageUrl");i(t0,"unescapeJs");i(sp,"jsonVar");ft=i(e=>typeof e=="number"&&Number.isFinite(e)?e:e!=null&&e!==""&&Number.isFinite(+e)?+e:null,"num");i(n0,"findProfile");i(r0,"blockedPage");i(op,"parseFirmPage");ut=50;i(ap,"reviewsUrl");Gi=i(e=>{let t=Date.parse(e);return Number.isFinite(t)?new Date(t).toISOString():null},"iso");i(s0,"normReview");i(o0,"trustOf");i(ip,"parseReviews")});function pp(e){if(!e||!e.answer||!e.answer.date||!e.created)return null;let t=Date.parse(e.answer.date)-Date.parse(e.created);return Number.isFinite(t)?Math.max(0,t)/Ki:null}function a0(e){let t=e.filter(Number.isFinite).sort((r,s)=>r-s);if(!t.length)return null;let n=t.length>>1;return t.length%2?t[n]:(t[n-1]+t[n])/2}function _t(e){let t=e.filter(r=>r.answer),n=t.map(pp).filter(Number.isFinite);return{count:e.length,answered:t.length,share:e.length?Math.round(t.length/e.length*100):null,medianH:a0(n),in24:n.filter(r=>r<=24).length,in72:n.filter(r=>r<=72).length}}function Nn(e,{now:t=Date.now(),first:n=null}={}){e=Math.max(0,Math.floor(+e||0));let r=new Date(t);r.setHours(12,0,0,0);let s=X(r),o=s.slice(0,7),a=[],c;if(e&&e<=31){c="day";for(let l=e-1;l>=0;l--){let p=new Date(r);p.setDate(r.getDate()-l);let f=X(p);a.push({from:f,to:f})}}else if(e&&e<=120){c="week";let l=Math.ceil(e/7);for(let p=l-1;p>=0;p--){let f=new Date(r);f.setDate(r.getDate()-p*7);let u=new Date(f);u.setDate(f.getDate()-6),a.push({from:X(u),to:X(f)})}}else if(e){c="month";let l=Math.max(1,Math.round(e/30.4));for(let p=Wi(o,-(l-1));p<=o;p=Wi(p,1))a.push({from:p+"-01",to:cp(p)})}else{let l=n!=null&&Number.isFinite(+n)?X(new Date(+n)).slice(0,7):o;if((+o.slice(0,4)-+l.slice(0,4))*12+(+o.slice(5,7)-+l.slice(5,7))+1>24){c="year";for(let f=+l.slice(0,4);f<=+o.slice(0,4);f++)a.push({from:f+"-01-01",to:f+"-12-31"})}else{c="month";for(let f=l;f<=o;f=Wi(f,1))a.push({from:f+"-01",to:cp(f)})}}let d=e?(()=>{let l=c0(a[0].from);return l.setHours(0,0,0,0),l.getTime()})():-1/0;return{kind:c,since:d,list:a}}function hp(e,t){let n=e.map(r=>({...r,items:[]}));for(let r of t){if(!r.created)continue;let s=X(new Date(r.created));for(let o=n.length-1;o>=0;o--)if(n[o].from<=s&&s<=n[o].to){n[o].items.push(r);break}}return n}function l0(e,t){return hp(t,e).map(n=>{let r=_t(n.items);return{from:n.from,to:n.to,neg:r.count,answered:r.answered,medianH:r.medianH}})}function mp(e,{now:t=Date.now(),days:n=0}={}){let r=(e||[]).filter(c=>c&&c.rated!==!1&&c.rating>=1&&c.rating<=5),s=Nn(n,{now:t,first:fp(r)}),o=r.filter(c=>Date.parse(c.created||"")>=s.since),a=hp(s.list,o).map(c=>({from:c.from,to:c.to,count:c.items.length,good:c.items.filter(d=>d.rating>=4).length,mid:c.items.filter(d=>d.rating===3).length,bad:c.items.filter(d=>d.rating<=2).length,sum:c.items.reduce((d,l)=>d+l.rating,0)}));return{days:Math.max(0,Math.floor(+n||0)),kind:s.kind,points:a}}function fs(e,{now:t=Date.now(),days:n=0,negMax:r=3}={}){r=[2,3,4].includes(+r)?+r:3,n=Math.max(0,Math.floor(+n||0));let s=(e||[]).filter(u=>u&&u.rating>=1&&u.rating<=5),o=Nn(n,{now:t,first:fp(s)}),a=s.filter(u=>Date.parse(u.created||"")>=o.since),c=a.filter(u=>u.rating<=r),d=[{key:"5",..._t(a.filter(u=>u.rating===5))},{key:"4",..._t(a.filter(u=>u.rating===4))},{key:"3",..._t(a.filter(u=>u.rating===3))},{key:"1–2",..._t(a.filter(u=>u.rating<=2))}],l={yes:_t(c.filter(u=>u.verified===!0)),no:_t(c.filter(u=>u.verified===!1)),unknown:c.filter(u=>typeof u.verified!="boolean").length},p=c.filter(u=>!u.answer).sort((u,h)=>String(h.created||"").localeCompare(String(u.created||""))),f=c.filter(u=>u.answer&&u.answer.date).sort((u,h)=>String(h.answer.date).localeCompare(String(u.answer.date)));return{days:n,negMax:r,kind:o.kind,total:{..._t(a)},neg:{..._t(c),waiting:p.length,waitingOld:p.filter(u=>t-Date.parse(u.created||"")>72*Ki).length},byStars:d,verified:l,points:l0(c,o.list),recent:f.slice(0,d0).map(u=>up(u,t)),recentTotal:f.length,waitingList:p.slice(0,lp).map(u=>up(u,t)),waitingCut:p.length>lp}}var Ki,i0,Wi,c0,cp,fp,lp,d0,dp,up,Vi=J(()=>{ht();Ki=36e5;i(pp,"replyHours");i(a0,"median");i(_t,"sum");i0=i(e=>X(e).slice(0,7),"monthKey"),Wi=i((e,t)=>{let[n,r]=e.split("-").map(Number),s=new Date(n,r-1+t,15,12);return i0(s)},"addMonth"),c0=i(e=>{let[t,n,r]=e.split("-").map(Number);return new Date(t,n-1,r,12)},"ld"),cp=i(e=>X(new Date(+e.slice(0,4),+e.slice(5,7),0,12)),"lastDay");i(Nn,"periodBuckets");i(hp,"bucketize");i(l0,"points");fp=i(e=>{let t=1/0;for(let n of e){let r=Date.parse(n.created||"");r<t&&(t=r)}return Number.isFinite(t)?t:null},"firstMs");i(mp,"timeline");lp=300,d0=8,dp=i((e,t)=>(e=String(e||"").trim(),e.length>t?e.slice(0,t-1).trimEnd()+"…":e),"short"),up=i((e,t)=>({id:e.id,rating:e.rating,author:e.author||"",created:e.created,verified:e.verified,text:dp(e.text,400),answer:e.answer?{text:dp(e.answer.text,700),date:e.answer.date}:null,replyH:pp(e),ageH:e.created?Math.max(0,t-Date.parse(e.created))/Ki:null}),"view");i(fs,"reaction")});function jn(e,t={}){let n=e&&e.notify||{},r=yp.includes(+n.remindDays)?+n.remindDays:3;return{all:n.all!==!1,answers:n.answers!==void 0?n.answers!==!1:t.answers!==!1,spikes:n.spikes!==!1,remind:n.remind===!0,remindDays:r,remindNeg:+n.remindNeg==2?2:3,remindSince:+n.remindSince||0}}function vp(e,t,n=Date.now()){let r=Object.assign({},e||{}),s=t||{};for(let o of["all","answers","spikes"])s[o]!==void 0&&(r[o]=!!s[o]);return s.remindDays!==void 0&&yp.includes(+s.remindDays)&&(r.remindDays=+s.remindDays),s.remindNeg!==void 0&&(r.remindNeg=+s.remindNeg==2?2:3),s.remind!==void 0&&(s.remind&&r.remind!==!0&&(r.remindSince=n),r.remind=!!s.remind),r}function xp(e,{now:t=Date.now(),days:n=3,negMax:r=3,since:s=0}={}){if(!s)return[];let o=[];for(let a of $o(e)){if(a.rating>r||a.answer)continue;let c=Date.parse(a.created||"");if(!Number.isFinite(c))continue;let d=c+n*wp;d<=t&&d>=s&&o.push(a)}return o.sort((a,c)=>String(a.created).localeCompare(String(c.created)))}function kp(e,{now:t=Date.now(),ready:n=!0,watchFrom:r=0}={}){if(!n)return[];let s=X(new Date(t)),o=Pn(s,-1),a=r?X(new Date(r)):"";return zo(e,{now:t,days:7,ready:n}).episodes.filter(c=>c.to>=o&&(!a||c.to>=a)).map(c=>({key:"spike:"+c.from,kind:"spike",at:t,episode:c}))}function Lp(e,t){if(e<=0)return 1;if(!(t>0))return 0;let n=-t+e*Math.log(t)-h0(e),r=0;for(let s=e;s<e+1e3;s++){let o=Math.exp(n);if(r+=o,s>t&&o<r*1e-12)break;n+=Math.log(t)-Math.log(s+1)}return Math.min(1,r)}function h0(e){let t=0;for(let n=2;n<=e;n++)t+=Math.log(n);return t}function f0(e){let t=new Map;for(let n of $o(e)){let r=Ji(n);r&&t.set(r,(t.get(r)||0)+1)}return t}function zo(e,{now:t=Date.now(),days:n=365,ready:r=!0}={}){let s=$o(e);if(!r||!s.length)return{ready:!!r&&s.length>0,episodes:[]};let o=f0(s),a=[...o.keys()].sort(),c=a[0],d=X(new Date(t)),l=n>0?Pn(d,-(n-1)):c,p=[];for(let m of a){if(m<l||m>d)continue;let w=o.get(m);if(w<Xi)continue;let g=Math.min(Tp,u0(c,m));if(g<p0)continue;let b=Pn(m,-g),y=0;for(let T of a){if(T>=m)break;T>=b&&(y+=o.get(T))}let L=(y+.5)/g,v=Lp(w,L);v<Sp&&p.push({day:m,count:w,usual:L,p:v})}let f=[];for(let m of p){let w=f[f.length-1];w&&Pn(w.to,1)===m.day?(w.to=m.day,w.days.push(m)):f.push({from:m.day,to:m.day,days:[m]})}let u=i((m,w)=>s.filter(g=>{let b=Ji(g);return b<m&&(!w||b>=w)}),"before");return{ready:!0,episodes:f.map(m=>{let w=s.filter(v=>{let T=Ji(v);return T>=m.from&&T<=m.to}),g=u(m.from,Pn(m.from,-365));g.length<20&&(g=u(m.from));let b=g.length>=Xi?gp(g):null,y=gp(w),L=y.good*2>y.count?"pos":y.bad*2>y.count?"neg":"mixed";return{from:m.from,to:m.to,count:w.length,usualPerDay:+m.days[0].usual.toFixed(2),peak:Math.max(...m.days.map(v=>v.count)),kind:L,...y,usualShares:b}}).reverse()}}function gp(e){let t=e.filter(o=>typeof o.verified=="boolean"),n=e.filter(o=>Number.isFinite(+o.authorReviews)&&+o.authorReviews>0),r=e.filter(o=>o.rating>=4).length,s=e.filter(o=>o.rating<=2).length;return{count:e.length,good:r,mid:e.length-r-s,bad:s,avg:vr(e),goodShare:En(r,e.length),badShare:En(s,e.length),verified:t.filter(o=>o.verified).length,verifiedKnown:t.length,verifiedShare:En(t.filter(o=>o.verified).length,t.length),firstTime:n.filter(o=>+o.authorReviews==1).length,authorsKnown:n.length,firstTimeShare:En(n.filter(o=>+o.authorReviews==1).length,n.length),unrated:e.filter(o=>o.rated===!1).length}}function m0(e){let t=new Map;for(let s of e||[])!s||!Number.isFinite(+s.ratingsCount)||!Number.isFinite(+s.reviewsCount)||t.set(X(new Date(s.at)),+s.ratingsCount-+s.reviewsCount);let n=[...t.keys()].sort(),r=[];for(let s=1;s<n.length;s++)Pn(n[s-1],1)===n[s]&&r.push({day:n[s],delta:t.get(n[s])-t.get(n[s-1])});return r}function Ap(e,{now:t=Date.now()}={}){let n=m0(e);if(n.length<Yi)return{ready:!1,observedDays:n.length,need:Yi};let r=X(new Date(t)),s=Pn(r,-6),o=n.filter(d=>d.day>=s).reduce((d,l)=>d+Math.max(0,l.delta),0),a=[];for(let d=Yi;d<n.length;d++){let l=n.slice(Math.max(0,d-Tp),d),p=(l.reduce((u,h)=>u+Math.max(0,h.delta),0)+.5)/l.length,f=n[d].delta;f>=Xi&&Lp(f,p)<Sp&&a.push({day:n[d].day,count:f,usualPerDay:+p.toFixed(2)})}let c=n.reduce((d,l)=>d+Math.max(0,l.delta),0)/n.length;return{ready:!0,observedDays:n.length,last7:o,usualPerWeek:+(c*7).toFixed(1),spikes:a.reverse()}}function Mp(e,t,{now:n=Date.now()}={}){let r=bp(t),s=r.filter(f=>f.verified===!0),o=Nn(30,{now:n}).since,a=r.filter(f=>Date.parse(f.created||"")>=o),c=e||{},d=Number.isFinite(+c.ratingsCount)&&Number.isFinite(+c.reviewsCount)?Math.max(0,+c.ratingsCount-+c.reviewsCount):null,l=vr(r),p=c.rating!=null&&l!=null?+(c.rating-l).toFixed(2):null;return{rating:c.rating??null,ratingsCount:c.ratingsCount??null,reviewsCount:c.reviewsCount??null,silent:d,silentShare:d!=null&&c.ratingsCount?En(d,+c.ratingsCount):null,avgText:l,textCount:r.length,avgConfirmed:vr(s),confirmedCount:s.length,avg30:vr(a),count30:a.length,diff:p,verdict:p==null?"":Math.abs(p)<.1?"same":p>0?"higher":"lower"}}function Cp(e,t,{now:n=Date.now(),days:r=30,negMax:s=3}={}){let o=$o(t),a=bp(t),c=Nn(r,{now:n}),d=a.filter(m=>Date.parse(m.created||"")>=c.since),l=fs(o,{now:n,days:r,negMax:s}),p=a.filter(m=>typeof m.verified=="boolean"),f=!!(e&&e.harvest&&e.harvest.done),u=zo(o,{now:n,days:r||0,ready:f}),h=e&&e.card||{};return{id:e&&e.id,name:e&&(e.name||e.title)||"",ready:f,err:e&&e.err||"",rating:h.rating??null,reviewsCount:h.reviewsCount??null,ratingsCount:h.ratingsCount??null,avgText:vr(a),count:d.length,avg:vr(d),negShare:En(d.filter(m=>m.rating<=s).length,d.length),replyShare:l.neg.count?l.neg.share:null,replyMedianH:l.neg.medianH,negCount:l.neg.count,confirmedShare:En(p.filter(m=>m.verified).length,p.length),spikes:u.episodes.length,spikesReady:u.ready}}var wp,vr,En,bp,$o,Ji,Pn,u0,yp,Sp,Xi,Tp,p0,Yi,Io=J(()=>{ht();Vi();wp=864e5,vr=i(e=>e.length?+(e.reduce((t,n)=>t+n.rating,0)/e.length).toFixed(2):null,"avg"),En=i((e,t)=>t?Math.round(e/t*100):null,"share"),bp=i(e=>(e||[]).filter(t=>t&&t.rated!==!1&&t.rating>=1&&t.rating<=5),"rated"),$o=i(e=>(e||[]).filter(t=>t&&t.rating>=1&&t.rating<=5),"scored"),Ji=i(e=>e&&e.created&&Number.isFinite(Date.parse(e.created))?X(new Date(e.created)):"","dayOf"),Pn=i((e,t)=>{let[n,r,s]=e.split("-").map(Number);return X(new Date(n,r-1,s+t,12))},"shiftDay"),u0=i((e,t)=>{let[n,r,s]=e.split("-").map(Number),[o,a,c]=t.split("-").map(Number);return Math.round((Date.UTC(o,a-1,c)-Date.UTC(n,r-1,s))/wp)},"daysBetween"),yp=[1,2,3,5,7];i(jn,"objNotify");i(vp,"patchNotify");i(xp,"remindCandidates");i(kp,"spikeEvents");Sp=1e-4,Xi=5,Tp=90,p0=30;i(Lp,"poissonTail");i(h0,"logFact");i(f0,"dailyCounts");i(zo,"spikes");i(gp,"signalsOf");Yi=14;i(m0,"silentDaily");i(Ap,"silentSummary");i(Mp,"ratingSummary");i(Cp,"compareRow")});function v0(e=Date.now()){return"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/"+(140+Math.max(0,Math.floor((e-Date.UTC(2025,8,2))/24192e5)))+".0.0.0 Safari/537.36"}async function Qi(e,{tries:t=3}={}){if(Np)return Np(e);let n="";for(let r=0;r<t;r++){let s=new AbortController,o=setTimeout(()=>s.abort(),Rp);try{let a=await fetch(e,{signal:s.signal,redirect:"follow",headers:{"User-Agent":v0(),"Accept-Language":"ru-RU,ru;q=0.9",Accept:"text/html,application/json;q=0.9,*/*;q=0.8"}}),c=await a.text();return{ok:a.ok,status:a.status,text:c,url:a.url||e}}catch(a){if(n=a&&a.name==="AbortError"?"2ГИС не ответил за "+Math.round(Rp/1e3)+" с":Or(a),!x0(n+" "+String(a&&a.cause&&a.cause.code)))break;await _i(2e3*(r+1))}finally{clearTimeout(o)}}return{ok:!1,status:0,text:"",url:e,err:n}}async function Pp(e){let t=jo(e);if(!t)return null;if(!t.short)return t;let n=await Qi(t.short);return jo(n.url||"")||jo(n.text||"")}async function ec(e,{now:t=Date.now()}={}){let n=yr(e);if(!n)return{ok:!1,why:"объект не найден"};let r=n.link;fn(e,{lastCheck:t});let s=await Qi(r.url);if(!s.ok&&!s.text)return Fo(e,"карточка не открылась: "+(s.err||"HTTP "+s.status));let o=op(s.text,r.id,s.url);if(!o.ok){let x=/капча|музей|устаревш/.test(o.why);return Fo(e,o.why,x)}let a={rating:o.rating,reviewsCount:o.reviewsCount,ratingsCount:o.ratingsCount,at:t},c=ep(n.card,a,t);if(fn(e,{name:o.name,address:o.address,category:o.category,title:o.title}),!o.reviewKey)return Fo(e,"на странице не нашёлся ключ к отзывам — 2ГИС поменял устройство страницы");let d=Lt(e),l=i(async x=>{ms&&await _i(Ep());let C=await Qi(ap({api:o.reviewApi,id:r.id,key:o.reviewKey,locale:r.locale,offset:x}));return!C.ok&&!C.text?{ok:!1,why:"отзывы не открылись: "+(C.err||"HTTP "+C.status)}:ip(C.text)},"pull"),p=await l(0);if(!p.ok)return Fo(e,p.why);let f=us(d,p.reviews,{watchFrom:n.watchFrom||0,now:t});d=f.merged,c.push(...f.events);let u={...n.harvest||{done:!1,offset:0}};if(!u.done){let x=Math.max(ut,u.offset||0),C=0,E=p.reviews.length,I=p.meta.next;for(u.total=p.meta.total??u.total??null;I&&E>=ut&&C<Dp;){let N=await l(x);if(!N.ok){u.err=N.why;break}f=us(d,N.reviews,{watchFrom:n.watchFrom||0,now:t}),d=f.merged,c.push(...f.events),C++,x+=ut,E=N.reviews.length,I=N.meta.next}u.offset=x,(!I||E<ut)&&(u.done=!0,u.doneAt=t,delete u.err)}let h=n.fill?{...n.fill}:null,m=n.trustVer||0,w=Mo;if(u.done&&m<w){h=h&&h.ver===w?h:{ver:w,offset:ut};let x=0,C=p.reviews.length,E=p.meta.next;for(;E&&C>=ut&&x<Dp;){let I=await l(h.offset);if(!I.ok){h.err=I.why;break}d=us(d,I.reviews,{watchFrom:n.watchFrom||0,now:t}).merged,x++,h.offset+=ut,C=I.reviews.length,E=I.meta.next}!h.err&&(!E||C<ut)&&(fn(e,{trustVer:w}),h=null)}let g=jn(n,Le().notify),b=new Set(Rn(e).filter(x=>x.kind==="remind").map(x=>x.review&&x.review.id)),y=i(()=>g.remind?xp(Object.values(d),{now:t,days:g.remindDays,negMax:g.remindNeg,since:g.remindSince}).filter(x=>!b.has(x.id)):[],"dueNow"),L=u.done&&y().length>0,v=n.answersAt||0;if(u.done&&!(n.harvest&&n.harvest.done)||m<w&&!h&&u.done)v=t;else if(u.done&&!h&&(L||t-v>=g0)){let x=t-w0*864e5,C=i(Z=>Math.min(...Z.map(ve=>Date.parse(ve.edited||ve.created||"")).filter(Number.isFinite)),"oldest"),E=ut,I=0,N=p.reviews.length,R=p.meta.next,B="",U=p.reviews.length?C(p.reviews):-1/0;for(;R&&N>=ut&&U>=x&&I<b0;){let Z=await l(E);if(!Z.ok){B=Z.why;break}f=us(d,Z.reviews,{watchFrom:n.watchFrom||0,now:t}),d=f.merged,c.push(...f.events),I++,E+=ut,N=Z.reviews.length,R=Z.meta.next,U=Z.reviews.length?C(Z.reviews):-1/0}B||(v=t)}if(g.remind&&u.done&&(!L||v===t))for(let x of y())c.push({key:"remind:"+x.id,kind:"remind",at:t,days:g.remindDays,review:{id:x.id,rating:x.rating,text:x.text,author:x.author,created:x.created,verified:x.verified,trust:x.trust}});c.push(...kp(Object.values(d),{now:t,ready:u.done,watchFrom:n.watchFrom||0})),Xu(e,d),Zu(e,a,t);let k=_u(e,c);return fn(e,{card:a,lastOk:t,err:"",blockedUntil:0,harvest:u,fill:h,answersAt:v,stored:Object.keys(d).length}),{ok:!0,events:k,stored:Object.keys(d).length}}function Fo(e,t,n=!1){return fn(e,{err:t,...n?{blockedUntil:Date.now()+y0}:{}}),{ok:!1,why:t,blocked:n}}function jp(e){Zi=typeof e=="function"?e:null}function nc({reason:e="расписание",now:t=i(()=>Date.now(),"now")}={}){return xr||(xr=(async()=>{let n=Le(),r=t();n.round={running:!0,startedAt:r,reason:e,done:0,total:n.objects.length};let s=[];for(let o of hn()){if(o.blockedUntil&&o.blockedUntil>t()){s.push({id:o.id,ok:!1,why:"пауза после отказа 2ГИС до "+new Date(o.blockedUntil).toLocaleTimeString("ru-RU")});continue}let a;try{a=await ec(o.id,{now:t()})}catch(c){a={ok:!1,why:String(c&&c.message||c)}}if(s.push({id:o.id,...a}),n.round.done++,a.blocked)break;ms&&await _i(Ep())}n.lastRound={at:r,ms:t()-r,reason:e,results:s.map(o=>({id:o.id,ok:o.ok,why:o.why||"",events:o.events||0}))},n.round=null,Uu();try{Zi&&await Zi()}catch{}return n.lastRound})().finally(()=>{xr=null;try{let n=Le();n.round=null}catch{}}),xr)}function k0(e,t=Date.now()){if(!e||!e.unlocked||!e.schedule||e.schedule.mode!=="minutes"||!e.objects||!e.objects.length)return!1;let n=Math.max(Co,+e.schedule.everyMinutes||30)*60*1e3,r=e.lastRound&&e.lastRound.at||0;return t-r>=n}function Op(){setInterval(()=>{try{k0(Le())&&nc()}catch{}},60*1e3)}var Dp,g0,w0,b0,Rp,ms,y0,_i,Ep,Np,x0,xr,Zi,tc,rc=J(()=>{ps();Oo();Yn();Io();ps();Dp=30,g0=6*36e5,w0=45,b0=6,Rp=2e4,ms=typeof process<"u"&&process.env&&process.env.MC_GIS_PAUSE_MS!=null?Math.max(0,+process.env.MC_GIS_PAUSE_MS):1800,y0=3600*1e3,_i=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),Ep=i(()=>ms?ms+Math.floor(Math.random()*ms*.6):0,"jitter");i(v0,"userAgent");Np=null,x0=i(e=>/ECONNRESET|ECONNABORTED|UND_ERR_SOCKET|UND_ERR_CONNECT_TIMEOUT|ETIMEDOUT|socket hang up|other side closed|не удалось соединиться|оборвал/i.test(String(e)),"isReset");i(Qi,"get");i(Pp,"resolveLink");i(ec,"checkObject");i(Fo,"fail");xr=null,Zi=null;i(jp,"setNotifier");tc=i(()=>!!xr,"roundRunning");i(nc,"runRound");i(k0,"isDue");i(Op,"startPlacesScheduler")});function qo(e){if(!e)return"";for(let t of an())if(Ge(t.id).token===e)return t.id;return""}async function Fp(){let e=ot();if(!e.token)return null;let t=qo(e.token);if(t!==(e.borrowed||"")&&dt({borrowed:t}),t){try{await Mn(t)}catch{}let s=Ge(t);return{token:e.token,chats:s.chats||[],owners:s.owners||[],pid:t}}let n=await wo(e.token,e);dt({chats:n.chats,offset:n.offset,err:n.err||""}),n.events&&n.events.length&&await qp(n.events);let r=ot();return{token:r.token,chats:r.chats||[],owners:r.owners||[],pid:""}}function L0(e,t){let n="<b>"+K(t.name||t.title||"Фирма")+"</b>"+(t.address?" · "+K(t.address):""),r=e.review||{},s=r.verified===!0?"✅ отзыв подтверждён"+(r.trust?" ("+r.trust+")":""):"",o=[r.author,Ft(r.edited||r.created),s].filter(Boolean).map(K).join(" · "),a=hs(t.link),c="",d="";if(e.kind==="new")c=(r.rating<=2?"🔴":r.rating===3?"🟡":"🟢")+" Новый отзыв "+On(r.rating),d=r.text?"<i>"+K(mn(r.text,900))+"</i>":"<i>(без текста)</i>";else if(e.kind==="rating")c="✏️ Автор изменил оценку: "+On(e.from)+" → "+On(r.rating),d=r.text?"<i>"+K(mn(r.text,700))+"</i>":"";else if(e.kind==="edited")c="✏️ Автор исправил отзыв "+On(r.rating),d="<i>"+K(mn(r.text,700))+"</i>";else if(e.kind==="answer")c="💬 Фирма ответила на отзыв "+On(r.rating),d=(r.text?"Отзыв: <i>"+K(mn(r.text,300))+`</i>
`:"")+"Ответ: <i>"+K(mn(r.answer&&r.answer.text,500))+"</i>";else if(e.kind==="unrated")c="🚫 2ГИС не учитывает отзыв в рейтинге "+On(r.rating),d=(r.text?"<i>"+K(mn(r.text,300))+`</i>
`:"")+(r.hideReason?"Причина: "+K(mn(r.hideReason,400)):"");else if(e.kind==="remind")c="⏰ Плохой отзыв без ответа уже "+e.days+" "+Hp(e.days)+" "+On(r.rating),d=r.text?"<i>"+K(mn(r.text,700))+"</i>":"<i>(без текста)</i>";else{if(e.kind==="spike")return A0(e,n,hs(t.link));if(e.kind==="card"){let l=e.from||{},p=e.to||{},f=[];l.rating!==p.rating&&f.push("рейтинг "+l.rating+" → <b>"+p.rating+"</b>"),l.reviewsCount!==p.reviewsCount&&f.push("отзывов "+l.reviewsCount+" → "+p.reviewsCount),l.ratingsCount!==p.ratingsCount&&f.push("оценок "+l.ratingsCount+" → "+p.ratingsCount),c="📊 Изменилась карточка: "+f.join(" · ");let u=[];e.silentVotes&&u.push("оценок без текста: +"+e.silentVotes),e.lostReviews&&u.push("отзывов стало меньше на "+e.lostReviews+" — похоже, часть удалили или скрыли"),d=u.join(`
`)}}return[c,n,e.kind==="card"?"":o,d,a,"<i>"+Ho+"</i>"].filter(Boolean).join(`
`)}function A0(e,t,n){let r=e.episode||{},s=r.usualShares||{},o=r.from===r.to?"за день":"за "+Ip(r.from,r.to)+" "+Hp(Ip(r.from,r.to)),a=r.kind==="pos"?"хороших":r.kind==="neg"?"плохих":"",c="⚠️ Всплеск "+(a?a+" ":"")+"отзывов: "+r.count+" "+o+" (обычно ~"+$p(r.usualPerDay)+" в день)",d=["Оценки: хороших "+r.good+", средних "+r.mid+", плохих "+r.bad+(r.avg!=null?" · средняя ★"+$p(r.avg):""),r.verifiedKnown?"Подтверждено: "+zp(r.verified,r.verifiedKnown,r.verifiedShare,s.verifiedShare):"",r.authorsKnown?"Пишут впервые: "+zp(r.firstTime,r.authorsKnown,r.firstTimeShare,s.firstTimeShare):"",r.unrated?"2ГИС не учёл в рейтинге: "+r.unrated:"","<i>Всплеск — не обязательно накрутка: бывают акции, праздники, скандалы. Признаки выше — для сравнения с обычным.</i>"];return[c,t,d.filter(Boolean).join(`
`),n,"<i>"+Ho+"</i>"].filter(Boolean).join(`
`)}async function Bo(){if(sc)return{sent:0,skipped:"уже идёт отправка"};let e=ot();if(!e.enabled||!e.token)return{sent:0,skipped:"бот выключен"};sc=!0;try{let t=await Fp();if(!t)return{sent:0,skipped:"нет токена"};let n=[];for(let c of t.chats)n.push({...c,access:(await hr({token:t.token,owners:t.owners},c)).ok?"ok":"no"});t.pid||dt({chats:n});let r=n.filter(c=>c.access==="ok");if(!r.length)return{sent:0,skipped:t.owners.length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let s=0,o=S0;for(let c of hn()){let d=ls(c.id),l=jn(c,Le().notify),p=i(m=>!l.all||m.kind==="answer"&&!l.answers||m.kind==="spike"&&!l.spikes||m.kind==="remind"&&!l.remind,"off"),f=d.filter(p).map(m=>m.key);f.length&&ds(c.id,f);let u=d.filter(m=>!p(m)).slice(0,o),h=[];for(let m of u){let w=L0(m,c),g=!1;for(let b of r){let y=await kt(t.token,"sendMessage",{chat_id:b.id,text:w,parse_mode:"HTML",disable_web_page_preview:!0});y.ok?g=!0:dt({err:y.err})}g&&(h.push(m.key),s++),ts&&await T0(ts)}if(ds(c.id,h),o-=u.length,o<=0)break}let a=ot();return dt({sentTotal:(a.sentTotal||0)+s,lastSentAt:Date.now(),...s?{err:""}:{}}),{sent:s,chats:r.length}}catch(t){return dt({err:String(t&&t.message||t)}),{sent:0,err:String(t&&t.message||t)}}finally{sc=!1}}async function $n(e,t){let n=ot();return kt(n.token,"sendMessage",{chat_id:e,text:t,parse_mode:"HTML",disable_web_page_preview:!0})}async function qp(e,t=Date.now()){for(let n of e||[])try{if(n.kind!=="msg")continue;let r=String(n.text||"").trim().match(/^\/([a-z]+)(?:@\S+)?\s*(.*)$/i);if(!r)continue;let s=r[1].toLowerCase(),o=r[2].trim(),a=ot();if(s==="iam"){if(n.chat.type!=="private"){dt({ownerCode:String(Math.floor(1e5+Math.random()*9e5))}),await $n(n.chat.id,"Код отправляют в <b>личные сообщения</b>. Этот код я уже заменил — новый в кабинете.");continue}let d=String(n.from.id),l=oc.get(d)||{n:0,at:t};if(t-l.at>3600*1e3&&(l.n=0,l.at=t),l.n>=5){await $n(n.chat.id,"Слишком много неверных кодов. Попробуйте через час.");continue}if(!o||o!==String(a.ownerCode||"")){l.n++,oc.set(d,l),await $n(n.chat.id,"Код не подошёл. Он в кабинете, в разделе «Мониторинг репутации».");continue}let p=[n.from.first_name,n.from.last_name].filter(Boolean).join(" ")||(n.from.username?"@"+n.from.username:d);dt({owners:(a.owners||[]).filter(f=>String(f.id)!==d).concat([{id:n.from.id,name:p}])}),oc.delete(d),await $n(n.chat.id,"Готово: вы владелец бота модуля «"+Ho+"». Новые отзывы и изменения рейтинга будут приходить сюда и в общие чаты, где вы состоите.");continue}if(s==="stop")continue;if(!(await hr(ot(),n.chat,t)).ok){await $n(n.chat.id,C0);continue}if(s==="start"||s==="help"){await $n(n.chat.id,M0);continue}if(s==="status"){let d=hn().map(l=>"• <b>"+K(l.name||l.id)+"</b>: "+(l.card?"★ "+l.card.rating+", отзывов "+l.card.reviewsCount+", оценок "+l.card.ratingsCount:"ещё не проверяли")+(l.err?" — ⚠️ "+K(l.err):""));await $n(n.chat.id,d.length?d.join(`
`):"Объектов пока нет — добавьте их в кабинете.")}}catch{}}function Bp(){setInterval(async()=>{try{let e=ot();if(!No()||!e.enabled||!e.token||qo(e.token))return;let t=await wo(e.token,e);dt({chats:t.chats,offset:t.offset,err:t.err||""}),t.events&&t.events.length&&await qp(t.events)}catch{}},5e3)}async function Up(){let e=ot();if(!e.token)return{ok:!1,error:"сначала вставьте токен бота"};let t=await pr(e.token);return t.ok?(dt({bot:t.bot,err:""}),await Fp(),{ok:!0}):(dt({err:t.err}),{ok:!1,error:t.err})}var Ho,S0,T0,On,mn,Hp,$p,zp,Ip,sc,oc,M0,C0,ac=J(()=>{ps();Rt();fr();ht();Oo();Io();Ho="Мониторинг репутации",S0=30,T0=i(e=>new Promise(t=>setTimeout(t,e)),"sleep");i(qo,"borrowedFrom");i(Fp,"source");On=i(e=>e>=1&&e<=5?"★".repeat(e)+"☆".repeat(5-e):"","stars"),mn=i((e,t)=>(e=String(e||"").replace(/\s+/g," ").trim(),e.length>t?e.slice(0,t-1)+"…":e),"clip");i(L0,"formatEvent");Hp=i(e=>{e=Math.abs(e)%100;let t=e%10;return e>10&&e<20?"дней":t===1?"день":t>=2&&t<=4?"дня":"дней"},"dn"),$p=i(e=>String(e).replace(".",","),"num"),zp=i((e,t,n,r)=>e+" из "+t+(n!=null?" ("+n+"%"+(r!=null?"; обычно "+r+"%":"")+")":""),"ofUsual");i(A0,"formatSpike");Ip=i((e,t)=>Math.round((Date.parse(t+"T12:00:00Z")-Date.parse(e+"T12:00:00Z"))/864e5)+1,"daysSpan"),sc=!1;i(Bo,"notifyPlaces");oc=new Map,M0="Я бот модуля «"+Ho+`»: присылаю новые отзывы 2ГИС, изменённые оценки, ответы фирм и изменения рейтинга.
/status — рейтинг и отзывы по всем объектам.`,C0="Это закрытый бот. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета (раздел «Мониторинг репутации»).";i($n,"say");i(qp,"handleEvents");i(Bp,"startPlacesBotLoop");i(Up,"checkPlacesBot")});function Gp(e){if(e.length<5||P0.has(e)||/(ние|тие|вие|сие|ьие)$/.test(e))return null;for(let t of R0){if(!e.endsWith(t))continue;let n=e.slice(0,-t.length);return n.length<3||E0.has(n)?null:{stem:n,sure:Wp.includes(t)}}return null}function Uo(e,{top:t=60,minReviews:n=2}={}){let r=(e||[]).filter(m=>m&&m.text),s=new Map,o=[],a=[],c=new Map,d=i((m,w,g,b=1)=>{let y=s.get(m)||{forms:new Map,docs:new Set};y.forms.set(w,(y.forms.get(w)||0)+b),y.docs.add(g),s.set(m,y)},"add");r.forEach((m,w)=>{let g=$0(m.text);g.forEach((b,y)=>{if(j0.has(b)){(c.get(b)||c.set(b,new Set).get(b)).add(w);return}if(ic.has(g[y+1]||"")||ic.has(g[y+2]||"")||ic.has(g[y-1]||""))return;let L=Gp(b);L&&L.sure?d(L.stem,b,w):L?o.push([w,b,L.stem]):b.length>=5&&a.push([w,b])})});let l=new Map;for(let[m,,w]of o)(l.get(w)||l.set(w,new Set).get(w)).add(m);let p=i(m=>{let w=s.get(m);if(!w)return!1;let g=w.docs.size;return g>=2&&g*10>=(l.get(m)||new Set).size},"confirmed");for(let m of s.values())m.sure=m.docs.size;let f=new Map;for(let m of l.keys())f.set(m,p(m));for(let[m,w,g]of o)f.get(g)&&d(g,w,m);for(let[m,w]of a)for(let g of N0){if(!w.endsWith(g))continue;let b=w.slice(0,-g.length),y=s.get(b);if(y&&y.sure>=2){d(b,w,m,.5);break}}let u=[],h=i((m,w)=>{if(w.size<n)return;let g=0,b=0;for(let y of w){let L=r[y].rating;L>=4?g++:L!=null&&L<=3&&b++}u.push({word:m,reviews:w.size,pos:g,neg:b,tone:g+b?+((g-b)/(g+b)).toFixed(2):0})},"push");for(let[,m]of s){let w=[...m.forms.entries()].filter(([g])=>{let b=Gp(g);return b&&b.sure}).sort((g,b)=>b[1]-g[1]||g[0].localeCompare(b[0]))[0];h(w?w[0]:[...m.forms.keys()][0],m.docs)}for(let[m,w]of c)h(m,w);return u.sort((m,w)=>w.reviews-m.reviews||m.word.localeCompare(w.word)).slice(0,t)}function Go(e,t="neg",{top:n=60,minHits:r=3,lift:s=1.5}={}){let o=(e||[]).filter(l=>l&&l.text&&l.rating),a=o.filter(l=>l.rating<=3).length,c=o.length-a;if(!a||!c)return Uo(o.filter(l=>t==="neg"?l.rating<=3:l.rating>=4),{top:n});let d=t==="neg"?a/o.length:c/o.length;return Uo(o,{top:1e3,minReviews:r}).map(l=>({...l,hits:t==="neg"?l.neg:l.pos})).filter(l=>l.hits>=r&&l.hits/(l.pos+l.neg)>=Math.min(.95,d*s)).sort((l,p)=>p.hits-l.hits||l.word.localeCompare(p.word)).slice(0,n).map(l=>({...l,reviews:l.hits}))}function Kp(e,{top:t=30}={}){let n=(e||[]).filter(a=>a&&a.rating),r=n.filter(a=>a.rating>=4).length,s=n.length-r,o=n.filter(a=>a.text);return{reviews:n.length,pos:r,neg:s,withText:o.length,praise:Go(o,"pos",{top:t}),blame:Go(o,"neg",{top:t})}}var Wp,D0,R0,N0,E0,P0,j0,ic,O0,$0,Vp=J(()=>{Wp=["ыми","ого","ому","ый","ий","ая","яя","ое","ые","ие","ых"],D0=["ими","его","ему","ой","ом","ем","ее","ую","юю","их","им","ым"],R0=[...Wp,...D0].sort((e,t)=>t.length-e.length),N0=["о","а","ы","е"],E0=new Set("котор так эт сво мо тво наш ваш как кажд друг сам всяк некотор люб ин перв втор трет четверт пят последн следующ прошл мног цел дан одн никак нек чь должн данн".split(" ")),P0=new Set("почему потому поэтому никого никому ничего ничему впервые вообщем всего его ему ней ним ими кого кому чего чему того тому этого этому самого время более менее уже еще также тоже очень стоимость".split(" ")),j0=new Set("жақсы жаман тамаша керемет әдемі дәмді дәмсіз таза лас жылы суық ыстық салқын сапалы сапасыз қымбат арзан жылдам баяу ыңғайлы ыңғайсыз сыпайы дөрекі мейірімді кішіпейіл білікті жайлы жайсыз ұнамды нашар үздік мықты күшті тәтті ащы жұмсақ кең тар жарық қараңғы тыныш шулы көңілді қолайлы сенімді адал жауапты тиімді пайдалы зиянды керексіз ұқыпты ұқыпсыз жедел".split(" ")),ic=new Set(["спасибо","благодарность","благодарю","рахмет","алғыс"]),O0=i(e=>e.toLowerCase().replace(/ё/g,"е"),"norm"),$0=i(e=>O0(String(e||"")).match(/[a-zа-яәғқңөұүһі]+/g)||[],"words");i(Gp,"ruAdj");i(Uo,"wordCloud");i(Go,"distinctive");i(Kp,"reputationPicture")});function z0(e){let t=Object.values(Lt(e)),n=t.filter(g=>g.rated!==!1&&g.rating),r=[0,0,0,0,0];for(let g of n)r[g.rating-1]++;let s=i(g=>g.length?+(g.reduce((b,y)=>b+y.rating,0)/g.length).toFixed(2):null,"avg"),o=new Map;for(let g of n){let b=g.created?X(new Date(g.created)).slice(0,7):"";if(!b)continue;let y=o.get(b)||{month:b,count:0,sum:0,neg:0};y.count++,y.sum+=g.rating,g.rating<=2&&y.neg++,o.set(b,y)}let a=[...o.values()].sort((g,b)=>g.month.localeCompare(b.month)).slice(-24).map(g=>({month:g.month,count:g.count,avg:+(g.sum/g.count).toFixed(2),neg:g.neg})),c=Nn(30).since,d=n.filter(g=>Date.parse(g.created||"")>=c),l=X(new Date(Date.now()-186*864e5)),p=new Map;for(let g of n){let b=g.created?X(new Date(g.created)):"";if(!b||b<l)continue;let y=p.get(b)||{day:b,count:0,sum:0,neg:0};y.count++,y.sum+=g.rating,g.rating<=2&&y.neg++,p.set(b,y)}let f=[...p.values()].sort((g,b)=>g.day.localeCompare(b.day)),u=n.filter(g=>typeof g.verified=="boolean"),h=u.filter(g=>g.verified),m=u.filter(g=>!g.verified),w={known:u.length,of:n.length,yes:h.length,avgYes:s(h),avgNo:s(m),negYes:h.filter(g=>g.rating<=2).length,negNo:m.filter(g=>g.rating<=2).length};return{daily:f,verified:w,stored:t.length,rated:n.length,unrated:t.length-n.length,answered:t.filter(g=>g.answer).length,negReply:(({count:g,answered:b,share:y})=>({count:g,answered:b,share:y,negMax:3}))(fs(t,{negMax:3}).neg),dist:r,avgAll:s(n),avg30:s(d),count30:d.length,neg30:d.filter(g=>g.rating<=2).length,months:a}}async function Jp(e,t,n,r,{json:s,readBody:o}){if(n==="/api/places"&&e.method==="GET"){let c=Le();return c.unlocked?s(t,200,{...rp(),round:c.round||null,lastRound:c.lastRound||null,roundRunning:tc()}):s(t,200,{unlocked:!1})}if(n==="/api/places/unlock"&&e.method==="POST"){let c=await o(e);return s(t,200,Gu(c.code))}if(!No())return s(t,403,{error:"модуль закрыт — откройте его кодом администратора"});if(n==="/api/places/lock"&&e.method==="POST")return s(t,200,Wu());if(n==="/api/places/objects"&&e.method==="POST"){let c=await o(e),d=await Pp(c.url||"");if(!d||!d.id)return s(t,400,{error:"не похоже на ссылку на карточку фирмы в 2ГИС. Нужна ссылка вида https://2gis.kz/astana/firm/70000001027712418"});let l=Yu(d);return l.ok?(ec(d.id).catch(()=>{}),s(t,200,{ok:!0,object:Yp(l.object)})):s(t,400,l)}if(n==="/api/places/check"&&e.method==="POST")return tc()?s(t,409,{error:"проверка уже идёт"}):(nc({reason:"вручную"}).catch(()=>{}),s(t,200,{ok:!0}));if(n==="/api/places/compare"&&e.method==="GET"){let c=Math.max(0,+r.searchParams.get("days")||0),d=+r.searchParams.get("neg")||3;return s(t,200,{days:c,negMax:[2,3,4].includes(d)?d:3,rows:hn().map(l=>Cp(l,Object.values(Lt(l.id)),{days:c,negMax:d}))})}if(n==="/api/places/schedule"&&e.method==="POST"){let c=await o(e);return s(t,200,{schedule:Ku(c)})}if(n==="/api/places/notify"&&e.method==="POST"){let c=await o(e);return s(t,200,{notify:Vu({answers:c.answers!==!1})})}if(n==="/api/places/telegram"&&e.method==="POST"){let c=await o(e),d={};if(c.enabled!==void 0&&(d.enabled=!!c.enabled),c.clearToken)Object.assign(d,{token:"",bot:"",chats:[],offset:0,owners:[],err:"",borrowed:""});else if(c.token){let f=String(c.token).trim(),u=ot();d.token=f,f!==u.token&&Object.assign(d,{chats:[],offset:0,bot:"",owners:[],err:"",borrowed:qo(f)})}let l=ot();if(dt(d).enabled&&!l.enabled)for(let f of hn())ds(f.id,ls(f.id).map(u=>u.key));return s(t,200,{ok:!0,tg:Po()})}if(n==="/api/places/telegram/check"&&e.method==="POST"){let c=await Up();return s(t,200,{...c,tg:Po(),borrowedName:(()=>{let d=ot().borrowed,l=d&&Pe(d);return l?l.name:""})()})}if(n==="/api/places/telegram/send"&&e.method==="POST")return s(t,200,await Bo());let a=n.match(/^\/api\/places\/objects\/(\d{6,20})(?:\/([a-z.]+))?$/);if(a){let c=a[1],d=a[2]||"",l=yr(c);if(!l)return s(t,404,{error:"объект не найден"});if(d===""&&e.method==="DELETE")return Ju(c),s(t,200,{ok:!0});if(d===""&&e.method==="GET")return s(t,200,{object:Yp(l),stats:z0(c),history:Eo(c).slice(-500),events:Rn(c).slice(-200).reverse(),ai:np(c)});if(d==="reviews"&&e.method==="GET"){let p=(r.searchParams.get("stars")||"").split(",").map(Number).filter(g=>g>=1&&g<=5),f=String(r.searchParams.get("q")||"").trim().toLowerCase(),u=Object.values(Lt(c));p.length&&(u=u.filter(g=>p.includes(g.rating))),f&&(u=u.filter(g=>String(g.text||"").toLowerCase().includes(f))),r.searchParams.get("ver")==="1"&&(u=u.filter(g=>g.verified===!0));let h=r.searchParams.get("ans");h==="1"&&(u=u.filter(g=>g.answer)),h==="0"&&(u=u.filter(g=>!g.answer)),u.sort((g,b)=>String(b.edited||b.created||"").localeCompare(String(g.edited||g.created||"")));let m=Math.max(0,+r.searchParams.get("offset")||0),w=Math.max(1,Math.min(100,+r.searchParams.get("limit")||30));return s(t,200,{total:u.length,reviews:u.slice(m,m+w)})}if(d==="reaction"&&e.method==="GET")return s(t,200,fs(Object.values(Lt(c)),{days:+r.searchParams.get("days")||0,negMax:+r.searchParams.get("neg")||3}));if(d==="signals"&&e.method==="GET"){let p=Object.values(Lt(c)),f=r.searchParams.has("days")?Math.max(0,+r.searchParams.get("days")||0):365;return s(t,200,{rating:Mp(l.card,p),spikes:zo(p,{days:f,ready:!!(l.harvest&&l.harvest.done)}),silent:Ap(Eo(c)),days:f})}if(d==="notify"&&e.method==="POST"){let p=await o(e);return fn(c,{notify:vp(l.notify,p)}),s(t,200,{notify:jn(yr(c),Le().notify)})}if(d==="timeline"&&e.method==="GET")return s(t,200,mp(Object.values(Lt(c)),{days:+r.searchParams.get("days")||0}));if(d==="cloud"&&e.method==="GET"){let p=r.searchParams.get("g")||"all",f=Object.values(Lt(c)),u=+r.searchParams.get("days")||0;if(u>0){let h=Date.now()-u*864e5;f=f.filter(m=>Date.parse(m.created||"")>=h)}if(p==="picture")return s(t,200,{mode:"picture",...Kp(f,{top:30})});if(p==="pos"||p==="neg"){let h=f.filter(m=>m.rating&&(p==="pos"?m.rating>=4:m.rating<=3));return s(t,200,{reviews:h.length,words:Go(f,p,{top:60}),mode:"distinctive"})}return s(t,200,{reviews:f.length,words:Uo(f,{top:60})})}if(d==="ai"&&e.method==="POST"){let p=Je(),f=await $d({apiKey:p.geminiKey,model:p.geminiModel,firm:{...l,card:l.card},reviews:Object.values(Lt(c))}),u={at:Date.now(),ok:!!f.ok,text:f.ok?f.text:"",err:f.ok?"":f.err||"",model:f.model||p.geminiModel||"",used:f.used||0,total:f.total||0,truncated:!!f.truncated};return tp(c,u),s(t,f.ok?200:502,u)}if(d==="export.csv"&&e.method==="GET"){let p=Object.values(Lt(c)).sort((h,m)=>String(m.created||"").localeCompare(String(h.created||""))),f=i(h=>'"'+String(h??"").replace(/"/g,'""')+'"',"q"),u=[["дата","изменён","оценка","учтён в рейтинге","подтверждён","автор","текст","ответ фирмы","дата ответа","номер отзыва"].map(f).join(",")].concat(p.map(h=>[h.created?X(new Date(h.created)):"",h.edited?X(new Date(h.edited)):"",h.rating,h.rated===!1?"нет":"да",h.verified===!0?"да"+(h.trust?" ("+h.trust+")":""):h.verified===!1?"нет":"не знаем",h.author,h.text,h.answer?h.answer.text:"",h.answer&&h.answer.date?X(new Date(h.answer.date)):"",h.id].map(f).join(",")));return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":'attachment; filename="2gis-'+c+'.csv"'}),t.end("\uFEFF"+u.join(`
`))}}return s(t,404,{error:"нет такого метода"})}var Yp,Xp=J(()=>{ps();Rt();rc();ac();Vp();ao();ht();Oo();Vi();Io();i(z0,"objectStats");Yp=i(e=>e&&{notify:jn(e,Le().notify),id:e.id,url:e.link&&e.link.url,reviewsUrl:hs(e.link),name:e.name,address:e.address,category:e.category,card:e.card,fill:e.fill||null,trustVer:e.trustVer||0,answersAt:e.answersAt||0,lastCheck:e.lastCheck,lastOk:e.lastOk,err:e.err,harvest:e.harvest,stored:e.stored||0,addedAt:e.addedAt,blockedUntil:e.blockedUntil||0},"publicObject");i(Jp,"handlePlaces")});var Qp,Wo,I0,cc,Zp,dv,uv,_p=J(()=>{Qp=require("node:module"),Wo=require("node:path");process.env.PLAYWRIGHT_BROWSERS_PATH||(process.env.PLAYWRIGHT_BROWSERS_PATH=(0,Wo.join)((0,Wo.dirname)(process.execPath),"browsers"));I0=(0,Qp.createRequire)(process.execPath),cc=I0("playwright"),Zp=cc.chromium,dv=cc.firefox,uv=cc.webkit});function $e(e,t,n){let r=null;return Promise.race([Promise.resolve(e).catch(()=>n),new Promise(s=>{r=setTimeout(()=>s(n),t)})]).then(s=>(r&&clearTimeout(r),s))}function gs(e,t,n){let r=null,s=new Promise(o=>{r=setTimeout(()=>o(en),t)});return Promise.race([e,s]).then(o=>(clearTimeout(r),o===en&&n&&Promise.resolve(e).then(n,()=>{}),o),o=>{throw clearTimeout(r),o})}function eh(e,t=1){let r=Array.from({length:4},()=>Promise.resolve()),s=new Array(4).fill(0),o=Math.max(1,Math.min(4,t|0)),a={ops:0,busyMs:0,byHost:{},lanes:o},c=i(function(d,l,p,f,u){let h=0;for(let g=1;g<o;g++)s[g]<s[h]&&(h=g);s[h]++;let m=i(async()=>{let g=Date.now();try{return await $e(d(h),l,en)}finally{let b=Math.min(Date.now()-g,l);if(a.ops++,a.busyMs+=b,u){let y=a.byHost[u]||(a.byHost[u]={ops:0,ms:0});y.ops++,y.ms+=b}s[h]--}},"run"),w=r[h].then(m,m);return r[h]=w.then(()=>{},()=>{}),w.then(g=>{if(g!==en)return g;try{e&&e(f,h)}catch{}return p},()=>p)},"queued");return c.stats=a,c.resetStats=()=>{a.ops=0,a.busyMs=0,a.byHost={},a.lanes=o},c.setLanes=d=>{let l=o;return o=Math.max(1,Math.min(4,d|0||1)),a.lanes=o,{was:l,now:o}},c.lanes=()=>o,c}var en,lc=J(()=>{en=Symbol("hung");i($e,"cap");i(gs,"capOwn");i(eh,"makeQueue")});function th(){uc.clear(),dc.clear()}async function kr(e,t){let n=Tr(t);if(!n||!e)return 0;let r=await $e(Promise.resolve().then(()=>e.cookies(t)),5e3,null);return!r||!r.length?0:(uc.set(n,{at:Date.now(),cookies:r}),r.length)}async function Ko(e,t,n=0){let r=Tr(t);if(!r||!e)return 0;let s=uc.get(r);if(!s||Date.now()-s.at>H0)return 0;let o=n+"|"+r+"|"+s.at;if(dc.has(o))return 0;dc.add(o);let a=await $e(Promise.resolve().then(()=>e.cookies(t)),5e3,null),c=new Set((a||[]).map(l=>l.name)),d=s.cookies.filter(l=>!c.has(l.name));return d.length?(await $e(Promise.resolve().then(()=>e.addCookies(d)),5e3,null),d.length):0}async function Sr(e,t=25e3,n=1500){let r=Date.now();for(;;){let s=await $e(Promise.resolve().then(()=>e.evaluate(()=>({t:document.title||"",b:(document.body&&document.body.innerText||"").slice(0,400),c:!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait, #challenge-form, #turnstile-wrapper")}))),8e3,null);if(!s)return!1;if(!s.c&&!q0.test(s.t+" "+s.b))return!0;if(Date.now()-r>t)return!1;await F0(Math.min(n,Math.max(0,t-(Date.now()-r))+50))}}async function pc(e,t,{gotoMs:n=2e4,challengeMs:r=25e3,deadline:s,lane:o=0,warmNeedMs:a=25e3,warmKeepMs:c=12e3,pollMs:d=1500}={}){let l=s||Date.now()+75e3,p=i(()=>l-Date.now(),"left"),f=(()=>{try{return e.context()}catch{return null}})();await Ko(f,t,o);let u=i((b,y)=>Promise.resolve().then(()=>e.goto(b,{waitUntil:"domcontentloaded",timeout:Math.max(3e3,Math.min(y,p()))})).catch(()=>null),"go"),h=i(b=>Promise.resolve().then(()=>e.waitForTimeout(b)).catch(()=>{}),"pause"),m=await u(t,n);if(await h(Math.min(700,Math.max(0,p()))),await Sr(e,Math.min(r,p()),d))return await kr(f,t),{passed:!0,resp:m,warmed:!1};let w="";try{let b=new URL(t);(b.pathname!=="/"||b.search)&&(w=b.origin)}catch{}if(!w||p()<a)return{passed:!1,resp:m,warmed:!1};if(await u(w+"/",15e3),!await Sr(e,Math.min(r,p()-c),d))return{passed:!1,resp:m,warmed:!0};await kr(f,w+"/"),m=await u(t,15e3);let g=await Sr(e,Math.min(r,p()),d);return g&&await kr(f,t),{passed:g,resp:m,warmed:!0}}var F0,Tr,uc,dc,H0,q0,nh=J(()=>{lc();F0=i(e=>new Promise(t=>setTimeout(t,Math.max(0,e))),"sleep"),Tr=i(e=>{try{return new URL(String(e)).host.replace(/^www\./,"")}catch{return""}},"hostOf"),uc=new Map,dc=new Set,H0=1200*1e3;i(th,"jarReset");i(kr,"jarPut");i(Ko,"jarPrime");q0=/just a moment|checking your browser|attention required|verifying you are human|подожд[иё]те|проверка браузера|один момент/i;i(Sr,"waitOutChallenge");i(pc,"gotoPast")});var ch={};Dr(ch,{browserError:()=>Ar,browserStats:()=>W0,browserWindows:()=>Q0,closeBrowser:()=>fc,closeRunBrowsers:()=>G0,openSocialLogin:()=>sw,renderFacebook:()=>aw,renderFetch:()=>_0,renderScrape:()=>Z0,renderSiteSearch:()=>tw,resetBrowserStats:()=>K0,setBrowserWindows:()=>X0});async function U0(e,t){let n={headless:!1,viewport:null,args:["--disable-blink-features=AutomationControlled","--no-default-browser-check","--no-first-run"],ignoreDefaultArgs:["--enable-automation"]},r=B0(e,t),s=await gs(Zp.launchPersistentContext(r,e?{...n,channel:"chrome"}:n),rh,a=>a.close().catch(()=>{}));if(s===en)throw new Error("окно не поднялось за "+rh/1e3+" с");let o=await gs(s.newPage(),3e4,a=>a.close().catch(()=>{}));if(o===en)throw await $e(s.close(),1e4),new Error("браузер не открыл страницу за 30 с");return await $e(o.close(),5e3),s}async function oh(e=0){if(ws.get(e))try{await ws.get(e)}catch{}if(It.get(e))return It.get(e);for(let t of[!0,!1])try{let n=await U0(t,e);return n.on("close",()=>{It.get(e)===n&&It.delete(e)}),e===Lr&&(gc=!1),It.set(e,n),t||console.log("[render] окно "+(e+1)+": channel:chrome не ожил, работаю на встроенном Chromium"),n}catch(n){Vo=(t?"Chrome: ":"Chromium: ")+String(n&&n.message||n).split(`
`)[0].slice(0,200)}throw new Error("браузер не запустился (ни Chrome, ни встроенный Chromium): "+Vo)}function bs(e,t=0){It.get(t)===e&&It.delete(t);let n=$e(e.close(),15e3,null).then(()=>new Promise(r=>setTimeout(r,1500))).then(()=>{ws.get(t)===n&&ws.delete(t)});return ws.set(t,n),n}async function fc(e=null){if(e!=null){let t=It.get(e);t&&await bs(t,e);return}await Promise.all([...It].map(([t,n])=>bs(n,t).catch(()=>{})))}async function G0(){await Promise.all([...It].filter(([e])=>typeof e=="number"||e===Lr&&!gc).map(([e,t])=>bs(t,e).catch(()=>{})))}function X0(e){let t=tn.setLanes(e);if(t.now<t.was)for(let[n]of It)typeof n=="number"&&n>=t.now&&fc(n).catch(()=>{});return t.now}function Z0(e,t={}){return tn(n=>cw(e,t,n),Y0,{items:[],cf:!1,err:"браузер завис — окно перезапущено"},"рендер",t.host||Tr(e))}async function mc(e=0){let t=null;for(let n=0;n<2&&!t;n++){let r;try{r=await oh(e)}catch{return null}let s=null;try{s=await gs(r.newPage(),3e4,o=>o.close().catch(()=>{}))}catch(o){Vo="страница не открылась: "+String(o&&o.message||o).split(`
`)[0].slice(0,200)}if(!s||s===en){await bs(r,e);continue}t=s}return t}function _0(e,t={}){return tn(n=>ew(e,t,n),V0,{ok:!1,err:"браузер завис — окно перезапущено"},"браузер-фетч",t.host||Tr(e))}async function ew(e,{timeoutMs:t=2e4,challengeMs:n=25e3,post:r=null}={},s=0){let o=await mc(s);if(!o)return{ok:!1,err:"браузер не поднялся ("+Ar()+")"};try{if(r!=null){let l=new URL(e).origin,p=(()=>{try{return o.context()}catch{return null}})();if(await Ko(p,l+"/",s),await o.goto(l+"/",{waitUntil:"domcontentloaded",timeout:t}).catch(()=>null),!await Sr(o,n))return{ok:!1,cf:!0,err:"защита сайта не пройдена"};await kr(p,l+"/");let f=new URL(e).pathname+new URL(e).search,u=await $e(o.evaluate(async([m,w])=>{let g=location.origin+m;try{let b=await fetch(g,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:w});return b.ok?{html:await b.text(),url:g}:{err:"HTTP "+b.status+" на "+g}}catch(b){return{err:String(b&&b.message||b)+" ("+g+")"}}},[f,r]),2e4,{err:"браузер не ответил на POST в срок"}),h=u&&u.html||"";return{ok:!!h,html:h,posted:!!h,err:h?null:u&&u.err||"пустой ответ"}}let a=await pc(o,e,{gotoMs:t,challengeMs:n,lane:s,deadline:Date.now()+75e3}),c=a.resp;if(!a.passed)return{ok:!1,cf:!0,err:"защита сайта не пройдена"+(a.warmed?" (пробовали и через главную)":"")};let d=await $e(o.content(),15e3,"");return{ok:!!d,status:c?c.status():0,html:d||""}}catch(a){return{ok:!1,err:a.message}}finally{await Yo(o)}}function tw(e,t,n={}){return tn(r=>nw(e,t,n,r),J0,{items:[],cf:!1,note:"браузер завис — окно перезапущено"},"браузер-поиск",n.host||Tr(e))}async function nw(e,t,{host:n=""}={},r=0){let s=(Array.isArray(t)?t:[t]).map(f=>String(f||"").trim()).filter(Boolean);if(!s.length)return{items:[],cf:!1,note:"пустой запрос"};let o=await mc(r);if(!o)return{items:[],cf:!1,note:"браузер не поднялся ("+Ar()+")"};let a=[],c=new Set,d=!1,l="",p=(()=>{try{return o.context()}catch{return null}})();try{for(let f=0;f<s.length;f++){if(f===0&&await Ko(p,e+"/",r),await o.goto(e+"/",{waitUntil:"domcontentloaded",timeout:2e4}).catch(()=>{}),!await Sr(o,f===0?25e3:8e3)){d=!0,l="защита сайта не пройдена";break}f===0&&await kr(p,e+"/");let h=await $e(o.evaluate(sh),8e3,null);if(h||(await $e(o.evaluate(dw),8e3,null),await o.waitForTimeout(700).catch(()=>{}),h=await $e(o.evaluate(sh),8e3,null)),!h){l="строка поиска не найдена";break}await o.fill(h,s[f]).catch(()=>{}),await o.press(h,"Enter").catch(()=>{}),await $e(o.evaluate(lw,h),8e3,null),await o.waitForLoadState("domcontentloaded",{timeout:15e3}).catch(()=>{}),await o.waitForTimeout(1800).catch(()=>{});let m=Date.now()+12e3,w=[],g=0;for(;Date.now()<m;){let{items:b,cf:y}=await ih(o,{selectors:null,hostHint:n,google:!1,bing:!1},m);if(y&&(d=!0),b.length>w.length)w=b,g=0;else if(w.length&&(g++,g>=2))break;await o.waitForTimeout(1200).catch(()=>{})}for(let b of w)b.url&&!c.has(b.url)&&(c.add(b.url),a.push(b))}return{items:a,cf:d,note:l}}catch(f){return{items:a,cf:d,note:f.message}}finally{await Yo(o)}}async function ah(){let e;try{e=await oh(Lr)}catch{return null}let t=await gs(e.newPage(),3e4,n=>n.close().catch(()=>{}));return!t||t===en?(await bs(e,Lr),null):t}async function sw(e="https://www.facebook.com/"){let t=await ah();return t?(gc=!0,await t.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await $e(t.bringToFront(),5e3,null),{ok:!0}):{ok:!1,err:"браузер не поднялся ("+Ar()+")"}}function ow(){let e=i(t=>!!document.querySelector(t),"has");return e('input[name="pass"]')||e("#loginform")||e('[data-testid="royal_login_form"]')}function aw(e,t={}){return tn(()=>iw(e,t),rw,{ok:!1,chunks:[],err:"браузер завис — окно перезапущено"},"фейсбук","facebook.com")}async function iw(e,{sinceMs:t=0,maxScrolls:n=3,settleMs:r=3e3}={}){let s=await ah();if(!s)return{ok:!1,chunks:[],err:"браузер не поднялся ("+Ar()+")"};let o=[],a=[],c=i(l=>{try{if(!/facebook\.com\/api\/graphql/i.test(l.url()))return;a.push($e(l.text(),15e3,"").then(p=>{p&&o.push(p)}).catch(()=>{}))}catch{}},"onResp");s.on("response",c);let d=i(async()=>{let l=a.splice(0);l.length&&await Promise.all(l)},"drain");try{if(await s.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await $e(s.evaluate(ow),8e3,!1))return{ok:!1,chunks:[],needLogin:!0,err:"Фейсбук просит войти — нажмите «Войти в соцсети» и залогиньтесь в открывшемся окне"};let l=0;for(let p=0;;p++){await s.waitForTimeout(r).catch(()=>{}),await d();let{posts:f}=Gr(o.join(`
`)),u=Wa(f);if(u&&u*1e3<t||p>=n)break;await $e(s.evaluate(()=>window.scrollBy(0,document.body.scrollHeight)),8e3,null),l++}return await d(),{ok:o.length>0,chunks:o,scrolls:l,err:o.length?"":"Фейсбук не отдал ленту (страница пустая или изменился её вид)"}}catch(l){return{ok:o.length>0,chunks:o,err:String(l&&l.message||l)}}finally{try{s.off("response",c)}catch{}await d().catch(()=>{}),await Yo(s)}}async function cw(e,{selectors:t=null,host:n="",google:r=!1,bing:s=!1,loadTimeoutMs:o=2e4,contentTimeoutMs:a=2e4}={},c=0){let d=await mc(c);if(!d)return{items:[],cf:!1,err:"браузер не поднялся ("+Ar()+")"};try{await pc(d,e,{gotoMs:o,challengeMs:25e3,lane:c,deadline:Date.now()+7e4});let l=Date.now()+a,p=[],f=0,u=!1;for(;Date.now()<l;){let{items:h,cf:m}=await ih(d,{selectors:t,hostHint:n,google:r,bing:s},l);if(u=m,!m&&h.length>p.length)p=h,f=0;else if(p.length&&(f++,f>=2))break;await d.waitForTimeout(1300).catch(()=>{})}return{items:p,cf:u}}catch{return{items:[],cf:!1}}finally{await Yo(d)}}async function ih(e,t,n){let r=[],s=!1,o=[];try{o=e.frames()}catch{return{items:r,cf:s}}for(let c of o){if(Date.now()>n)break;let d=await $e(c.evaluate(uw,t),8e3,null);d&&(d.cf&&(s=!0),d.items&&(r=r.concat(d.items)))}let a=new Set;return{items:r.filter(c=>c.url&&!a.has(c.url)&&a.add(c.url)),cf:s}}function sh(){let e=[...document.querySelectorAll("input")],t=i(s=>{let o=(s.type||"").toLowerCase();if(o&&!["search","text",""].includes(o))return-1;let a=((s.name||"")+" "+(s.id||"")+" "+(s.placeholder||"")+" "+(s.className||"")+" "+(s.getAttribute("aria-label")||"")).toLowerCase();if(/e-?mail|mail|subscribe|подпис|рассыл|comment|коммент|phone|тел|promo|coupon|login|логин|город|city/.test(a))return-1;let c=0;o==="search"&&(c+=5),/(^|[^a-zа-я])(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)([^a-zа-я]|$)/.test(a)&&(c+=4),/поиск|search|найти|іздеу|искать|издеу/.test(a)&&(c+=3);let d=s.form;if(d){let p=((d.getAttribute("action")||"")+" "+(d.className||"")+" "+(d.getAttribute("role")||"")).toLowerCase();(/search|поиск|[?&](q|s|query)=/.test(p)||d.getAttribute("role")==="search")&&(c+=4)}let l=s.getBoundingClientRect();return l.width>40&&l.height>8&&(c+=2),c},"score"),n=null,r=0;for(let s of e){let o=t(s);o>r&&(r=o,n=s)}return!n||r<4?null:n.id?"#"+(window.CSS&&CSS.escape?CSS.escape(n.id):n.id):n.name?'input[name="'+String(n.name).replace(/"/g,'\\"')+'"]':null}function lw(e){let t=document.querySelector(e);if(!t)return!1;let n=t.form||t.closest&&t.closest("form");if(n){let r=n.querySelector('button[type="submit"],input[type="submit"],button:not([type])');if(r)try{return r.click(),!0}catch{}try{return n.requestSubmit?n.requestSubmit():n.submit(),!0}catch{}}return!1}function dw(){let e=document.querySelector('[aria-label*="поиск" i],[aria-label*="search" i],[title*="поиск" i],[title*="search" i],button[class*="search" i],a[class*="search" i],[class*="search-toggle" i],[class*="header-search" i],[class*="search-btn" i]');if(e)try{return e.click(),!0}catch{}return!1}function uw({selectors:e,hostHint:t,google:n,bing:r}){let s=(document.title||"").toLowerCase(),o=(document.body&&document.body.innerText||"").slice(0,3e3).toLowerCase(),a=/just a moment|checking your browser|attention required|verifying you are human|cloudflare/.test(s+" "+o)||!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait");try{window.scrollTo(0,document.body.scrollHeight)}catch{}let c=i(w=>{try{return new URL(w,location.href).href}catch{return null}},"abs"),d=/(^|\.)(google|gstatic|googleapis|googletagmanager|googlesyndication|doubleclick|facebook|twitter|x\.com|instagram|youtube|vk\.com|t\.me|mc\.yandex)\./i,l=i(w=>{let g=c(w);if(!g)return null;let b;try{b=new URL(g).host}catch{return null}if(!d.test(b))return g.split("#")[0];let L=decodeURIComponent(w).match(/https?:\/\/[^\s"'&<>]+/g)||[];for(let v of L)try{let T=new URL(v).host.replace(/^www\./,"");if(!d.test(T)&&(!t||T===t||T.endsWith("."+t)))return v.split("#")[0]}catch{}return null},"realUrl"),p=/(\d+\s*(?:second|sec|minute|min|hour|hr|day|week|month|year)s?\s*ago|\d+\s*(?:секунд|минут|час|дн|день|недел|месяц|год|лет)[а-я]*\s*назад|yesterday|today|вчера|сегодня|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{0,4}|\d{1,2}\s+(?:янв|фев|мар|апр|ма[йя]|июн|июл|авг|сен|окт|ноя|дек)[а-я]*\.?\s*\d{2,4}(?:\s*(?:года|г\.))?|\d{1,2}\.\d{1,2}\.\d{4})/i,f=i(w=>{let g=(w||"").match(p);return g?g[0]:""},"findDate"),u=i(w=>(w||"").replace(p,"").replace(/\s+/g," ").trim().slice(0,200),"cleanTitle"),h=[];if(r){document.querySelectorAll("li.b_algo").forEach(g=>{let b=g.querySelector("h2 a[href]")||g.querySelector("a[href]");if(!b||!b.href)return;let y=(b.textContent||"").replace(/\s+/g," ").trim(),L=g.querySelector(".b_caption p")||g.querySelector("p"),v=L?(L.textContent||"").replace(/\s+/g," ").trim():"";h.push({url:b.href,title:y,date:"",snippet:v.slice(0,400)})});let w=new Set;return{cf:a,items:h.filter(g=>g.url&&!w.has(g.url)&&w.add(g.url))}}if(n){document.querySelectorAll("a[href] h3, h3 a[href]").forEach(g=>{let b=g.tagName==="H3"?g:g.closest("h3"),y=b?b.closest("a[href]")||b.querySelector&&b.querySelector("a[href]"):null;if(!b||!y)return;let L=l(y.getAttribute("href"));if(!L)return;let v=(b.textContent||"").replace(/\s+/g," ").trim();if(v.length<8)return;let T=y.closest("div.g, div[data-hveid], div[data-rpos], div[jscontroller]")||y.parentElement,k=T&&T.innerText||"",x=k.replace(/\s+/g," ").trim(),C=x.indexOf(v);C>=0&&(x=(x.slice(0,C)+" "+x.slice(C+v.length)).trim()),h.push({url:L,title:v,date:f(k),snippet:x.slice(0,300)})});let w=new Set;return{cf:a,items:h.filter(g=>g.url&&!w.has(g.url)&&w.add(g.url))}}if(e&&e.container)document.querySelectorAll(e.container).forEach(w=>{let g=e.link&&w.querySelector(e.link)||(w.matches&&w.matches("a[href]")?w:w.querySelector("a[href]")),b=g&&g.getAttribute("href");if(!b)return;let y=l(b);if(!y)return;let L=e.title&&w.querySelector(e.title)||g,v=e.date?w.querySelector(e.date):w.querySelector("time"),T=v&&(v.getAttribute&&v.getAttribute("datetime")||v.textContent)||"";T||(T=f(w.innerText)),h.push({url:y,title:u(L&&L.textContent),date:(T||"").trim(),snippet:(w.innerText||"").slice(0,300)})});else{let w=[...document.querySelectorAll("a[href]")].filter(T=>(T.textContent||"").trim().length>20),g={};for(let T of w){let k=T;for(let x=0;x<6&&k.parentElement;x++){k=k.parentElement;let C=k.className&&typeof k.className=="string"?k.className.trim().split(/\s+/)[0]:"";C&&(g[C]=g[C]||new Set).add(k)}}let b=null,y=2;for(let T in g)g[T].size>y&&(y=g[T].size,b=T);let L=null;if(b)try{L=[...document.querySelectorAll("."+CSS.escape(b))]}catch{}let v=i((T,k)=>{let x=l(k.getAttribute("href"));if(!x)return;let C;try{C=new URL(x)}catch{return}if(C.protocol!=="http:"&&C.protocol!=="https:")return;let E=(k.textContent||"").trim();if(E.length<=20)return;let I=T||k.parentElement,N=I&&I.querySelector("time"),R=N&&(N.getAttribute("datetime")||N.textContent)||"";R||(R=f(I&&I.innerText)),h.push({url:x,title:u(E),date:(R||"").trim(),snippet:(I&&I.innerText||E).slice(0,300)})},"pushFrom");if(L&&L.length>=3)for(let T of L){let k=T.querySelector("a[href]");k&&v(T,k)}document.querySelectorAll("a[href]").forEach(T=>{if((T.textContent||"").trim().length<=25)return;let k=T.closest('article, li, [class*="result"], [class*="card"], [class*="item"], .gsc-webResult, .b-serp-item')||T.parentElement;v(k,T)})}let m=new Set;return{cf:a,items:h.filter(w=>w.url&&!m.has(w.url)&&m.add(w.url))}}var It,ws,Vo,rh,B0,Ar,W0,K0,V0,Y0,J0,hc,tn,Q0,Yo,Lr,rw,gc,lh=J(()=>{_p();gt();lc();nh();Wr();It=new Map,ws=new Map,Vo="",rh=6e4,B0=i((e,t)=>{let n=e?Zo:_o;return typeof t=="string"?n+"-"+t:t?n+"-"+(t+1):n},"profileDir");i(U0,"tryLaunch");i(oh,"context");i(bs,"dropContext");i(fc,"closeBrowser");i(G0,"closeRunBrowsers");Ar=i(()=>Vo||"причина неизвестна","browserError"),W0=i(()=>({...tn.stats,byHost:{...tn.stats.byHost}}),"browserStats"),K0=i(()=>{th(),tn.resetStats()},"resetBrowserStats"),V0=9e4,Y0=12e4,J0=12e4,hc=[],tn=eh((e,t=0)=>{let n=e==="фейсбук"?Lr:t;console.log("[render] окно "+(n===Lr?"соцсетей":n+1)+", "+e+": браузер не ответил в срок — перезапускаю"),hc[t]||(hc[t]=fc(n).catch(()=>{}).then(()=>{hc[t]=null}))},2);i(X0,"setBrowserWindows");Q0=i(()=>tn.lanes(),"browserWindows");i(Z0,"renderScrape");i(mc,"openPage");Yo=i(e=>$e(e.close().catch(()=>{}),5e3),"shut");i(_0,"renderFetch");i(ew,"_renderFetch");i(tw,"renderSiteSearch");i(nw,"_renderSiteSearch");Lr="social",rw=18e4,gc=!1;i(ah,"socialPage");i(sw,"openSocialLogin");i(ow,"fbLoginProbe");i(aw,"renderFacebook");i(iw,"_facebook");i(cw,"_render");i(ih,"scrapeFrames");i(sh,"findSearchSelector");i(lw,"submitSearchForm");i(dw,"clickSearchToggle");i(uw,"pageScrape")});var fw={};async function pw(){try{let e=await Promise.resolve().then(()=>(lh(),ch));il(e.renderScrape),dl(e.renderFetch),ul(e.renderSiteSearch),gd(e.browserStats,e.resetBrowserStats),wd(e.closeRunBrowsers),bd(e.renderFacebook),yc=e.openSocialLogin,bc=e.setBrowserWindows,gh(),wh=!0,console.log("[Playwright: podklyuchyon — JS-sayty, brauzer-fetch i poisk sayta dostupny]")}catch{console.log("[Playwright: ne ustanovlen — tolko lyogkie kanaly. Zapusti setup-windows.bat]")}}var uh,ph,hh,fh,mh,ox,wc,bc,gh,yc,wh,dh,z,Wt,hw,bh=J(()=>{uh=Hn(require("node:http"),1),ph=Hn(require("node:dns"),1),hh=Hn(require("node:os"),1),fh=require("node:url"),mh=require("node:path");Yn();Rt();Xr();Zd();Qr();Zr();si();es();ao();sr();mo();ui();lu();ra();Js();fu();fr();gu();Lu();ns();Mi();Ri();Ni();Fu();Xp();rc();ac();try{ph.default.setDefaultResultOrder("ipv4first")}catch{}ox=(0,mh.dirname)((0,fh.fileURLToPath)(__mcFileUrl)),wc=process.env.PORT||8787,bc=null,gh=i(()=>{if(!bc)return;let e=Math.max(1,Math.min(4,+Je().browserWindows||2));try{bc(e)}catch{}},"applyBrowserWindows"),yc=null,wh=!1;i(pw,"initRenderer");dh=new Map,z=i((e,t,n)=>{e.writeHead(t,{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),e.end(JSON.stringify(n))},"json"),Wt=i(e=>new Promise(t=>{let n="";e.on("data",r=>n+=r),e.on("end",()=>{try{t(JSON.parse(n||"{}"))}catch{t({})}})}),"readBody"),hw=uh.default.createServer(async(e,t)=>{let n=new URL(e.url,"http://x"),r=n.pathname;if(e.method==="GET"&&(r==="/"||r==="/index.html"))try{return t.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),t.end(So())}catch{return t.writeHead(500),t.end("ui.html не найден")}if(!r.startsWith("/api/"))return t.writeHead(404),t.end("not found");let s=Je().password||"";if(r==="/api/me")return z(t,200,{hasPassword:!!s,playwright:wh,hasGeminiKey:!!Je().geminiKey,geminiModel:Je().geminiModel||"",geminiSnippets:ho(Je()),browserWindows:Math.max(1,Math.min(4,+Je().browserWindows||2))});if(r==="/api/quit"&&e.method==="POST"){let o=String(e.socket.remoteAddress||"");if(!(o==="127.0.0.1"||o==="::1"||o==="::ffff:127.0.0.1"))return z(t,403,{error:"выключить программу можно только с этого компьютера"});z(t,200,{ok:!0}),setTimeout(()=>process.exit(0),300);return}if(s&&e.headers["x-mc-key"]!==s)return z(t,401,{error:"нужен пароль"});if(r==="/api/presets")return z(t,200,{sites:ri,telegram:kd,world:vd,ru:xd});if(r==="/api/state")return z(t,200,{runs:dr()});try{if(r==="/api/places"||r.startsWith("/api/places/"))return await Jp(e,t,r,n,{json:z,readBody:Wt});if(r==="/api/projects"&&e.method==="GET")return z(t,200,{projects:an()});if(r==="/api/projects"&&e.method==="POST"){let a=await Wt(e),c=a.config||{};return(!Array.isArray(c.sites)||!c.sites.length)&&(c.sites=ri.map(d=>d.url)),z(t,200,Sl(a.name,c))}if(r==="/api/social/login"&&e.method==="POST"){if(!yc)return z(t,503,{error:"нет браузера: запусти setup-windows.bat"});let a=await yc();return z(t,a.ok?200:502,a)}if(r==="/api/social/visits"&&e.method==="GET"){let{facebookProfile:a}=await Promise.resolve().then(()=>(Wr(),md)),c=await Promise.resolve().then(()=>(Qa(),Xa));c.reload();let d=(n.searchParams.get("profiles")||"").split(`
`).map(p=>a(p)).filter(Boolean),l=Math.max(1,Math.min(6,+n.searchParams.get("limit")||c.DEFAULT_LIMIT));return z(t,200,{visits:d.map(p=>{let f=c.canVisit(p.label,{limit:l});return{label:p.label,used:f.used,limit:f.limit,ok:f.ok,why:f.why,nextAt:c.nextAt(p.label,{limit:l})}})})}if(r==="/api/license"&&e.method==="GET")return z(t,200,vo());if(r==="/api/license"&&e.method==="POST"){let a=await Wt(e);return z(t,200,Jd(a.key||""))}if(r==="/api/code"&&e.method==="GET")return n.searchParams.get("check")?z(t,200,await na({force:!0})):z(t,200,it());if(r==="/api/code/drop"&&e.method==="POST")return z(t,200,Nc());if(r==="/api/update"&&e.method==="GET")return n.searchParams.get("check")?z(t,200,await Li({force:!0})):z(t,200,rs());if(r==="/api/update/download"&&e.method==="POST"){let a=await iu();return z(t,a.ok?200:502,{...a,state:rs()})}if(r==="/api/update/install"&&e.method==="POST"){let a=String(e.socket.remoteAddress||"");if(!(a==="127.0.0.1"||a==="::1"||a==="::ffff:127.0.0.1"))return z(t,403,{error:"обновить можно только с этого компьютера"});let c=cu({busy:tt.size>0});if(!c.ok)return z(t,409,c);z(t,200,c),setTimeout(()=>process.exit(0),1500);return}if(r==="/api/settings"&&e.method==="POST"){let a=await Wt(e);return kl(a||{}),gh(),z(t,200,{ok:!0})}if(r==="/api/gemini/models"&&e.method==="GET"){let a=Je().geminiKey||"",c=await Dd({apiKey:a});return z(t,200,{...c,chain:li(Je().geminiModel||"")})}let o=r.match(/^\/api\/projects\/([^/]+)(?:\/(.+))?$/);if(o){let a=o[1],c=o[2]||"",d=Pe(a);if(!d&&!(c==="stop"&&e.method==="POST"&&yd(a)))return z(t,404,{error:"проект не найден"});if(c===""&&e.method==="GET")return z(t,200,d);if(c===""&&e.method==="PUT"){let u=await Wt(e);return z(t,200,Tl(a,u))}if(c===""&&e.method==="DELETE")return Ll(a),z(t,200,{ok:!0});if(c==="read"&&e.method==="POST")return Al(a),z(t,200,{ok:!0});if(c==="telegram"&&e.method==="POST"){let u=await Wt(e),h={};if(u.enabled!==void 0&&(h.enabled=!!u.enabled),u.clearToken)h.token="",h.bot="",h.chats=[],h.offset=0,h.err="";else if(u.token){let b=String(u.token).trim(),y=Ge(a);h.token=b,b!==y.token&&(h.chats=[],h.offset=0,h.bot="",h.err="")}let m=Ge(a),w=lt(a,h),g=0;return w.enabled&&!m.enabled&&(g=Rl(a)),z(t,200,{ok:!0,tg:zr(a),muted:g})}if(c==="telegram/resend"&&e.method==="POST"){let u=await Wt(e),h=Ir(a),m=String(u.ts||h[0]&&h[0].ts||"");if(!m)return z(t,400,{error:"прогонов ещё не было — присылать нечего"});let w=er(a,m);if(!w)return z(t,404,{error:"архив прогона не найден"});let g=(w.rows||[]).map(L=>L.url).filter(Boolean),b=Nl(a,g),y=await dn(a,{});return z(t,200,{ok:!0,ts:m,rows:g.length,freed:b,sent:y.sent||0,rest:y.rest||0,skipped:y.skipped||""})}if(c==="telegram/check"&&e.method==="POST"){let u=Ge(a);if(!u.token)return z(t,400,{error:"сначала вставьте токен бота"});let h=await pr(u.token);if(!h.ok)return lt(a,{err:h.err}),z(t,200,{ok:!1,error:h.err,tg:zr(a)});lt(a,{bot:h.bot});let m=await Mn(a);return lt(a,{err:m.err||""}),z(t,200,{ok:!0,tg:zr(a)})}if(c==="export.csv"&&e.method==="GET")return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}.csv"`}),t.end("\uFEFF"+Cn(d.items));if(c==="run"&&e.method==="POST"){let u=await To(a,"ручной");return u.code!==200?z(t,u.code,{error:u.error}):z(t,200,{added:u.added,total:u.total,ts:u.ts,log:u.log})}if(c==="stop"&&e.method==="POST"){let u=Zs(a);return z(t,u?200:409,u?{ok:!0}:{error:"этот проект сейчас не собирает"})}if(c==="diagnose"&&e.method==="POST"){let u=await Wt(e),h=String(u.site||"").trim();if(!h)return z(t,400,{error:"не указан сайт"});let m=d.config||{};if(!String(m.keyword||"").trim())return z(t,400,{error:"у проекта не задан запрос"});let w=tr(m),g=await Ps(h,{keyword:m.keyword,exclude:m.exclude||"",morph:m.morph!==!1,from:w.from,to:w.to,diag:!0});return z(t,200,{report:mu(h,g,w),channel:g.channel,note:g.note,found:g.rows.length,diag:g.diag})}if(c==="items/delete"&&e.method==="POST"){let u=await Wt(e),h=Array.isArray(u.urls)?u.urls.map(w=>String(w||"").trim()).filter(Boolean):[];if(!h.length)return z(t,400,{error:"не выбрано ни одного материала"});let m=zl(a,h);return m?z(t,200,m):z(t,404,{error:"проект не найден"})}if(c==="share.html"&&e.method==="GET"){let u=pu(a);return u?(t.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Content-Disposition":Ci(hu(u.snap))}),t.end(u.html)):z(t,404,{error:"проект не найден"})}if(c==="analytics"&&e.method==="GET"){let u=n.searchParams.get("days"),h=ln(a,{days:u?+u:null});return h?z(t,200,h):z(t,404,{error:"проект не найден"})}if(c==="day"&&e.method==="GET"){let u=n.searchParams.get("d")||"";if(!/^\d{4}-\d{2}-\d{2}$/.test(u))return z(t,400,{error:"день задаётся как ГГГГ-ММ-ДД"});let h=no(a,u);return h?z(t,200,{day:u,items:h}):z(t,404,{error:"проект не найден"})}if(c==="gemini"&&e.method==="POST"){let u=Je();if(!jt(d.config||{}).ai)return z(t,403,{error:rr});if(!u.geminiKey)return z(t,400,{error:"нет ключа Gemini (задайте в настройках)"});let h=await Wt(e),m=ln(a,{days:h.days?+h.days:null});if(!m)return z(t,404,{error:"проект не найден"});let w=pi.includes(hi(h.kind))?hi(h.kind):"review";if(w==="verify"&&!io(d.schedule))return z(t,403,{error:co(d.schedule)});let g,b=w==="sentiment"||w==="verify",y={kind:w,at:Date.now(),done:!1,log:[],marked:0,asked:0};dh.set(a,y),b?g=await mi(a,{kind:w,days:h.days?+h.days:null,analytics:m,settings:u,rescore:!!h.rescore,onStep:i((x,C)=>{y.log.push(x),y.marked=C.marked,y.asked=C.asked},"onStep")}):(g=await fi(a,{days:h.days?+h.days:null,analytics:m,settings:u}),g.log&&(y.log=g.log)),y.done=!0,y.log=g.log||y.log;let L=b&&g.ok?g.items:null,v=g.ok?w==="sentiment"?uo(g):w==="verify"?po(g):g.note||"":"";Is(a,w,{at:Date.now(),runTs:null,window:m.overview.windowFrom+" … "+m.overview.windowTo,text:g.ok?g.text:"",model:g.model||u.geminiModel||"",err:g.ok?"":g.err||"",auto:!1,items:L,log:g.log||[],...v?{note:v}:{}});let{data:T,...k}=g;return z(t,g.ok?200:502,g.ok?{...k,items:L,note:v}:k)}if(c==="ai-progress"&&e.method==="GET")return z(t,200,dh.get(a)||{done:!0,log:[]});if(c==="usage"&&e.method==="GET"){let u=$l(a),h=0;try{let{statSync:m,existsSync:w}=await import("node:fs"),{join:g}=await import("node:path"),{DATA_ROOT:b}=await Promise.resolve().then(()=>(gt(),Lc)),y=g(b,"date-cache.json");w(y)&&(h=m(y).size)}catch{}return z(t,200,{...u,limitMb:Ma(d.config),dateCacheBytes:h})}if(c==="report.txt"&&e.method==="GET"){let u=ln(a,{days:n.searchParams.get("days")?+n.searchParams.get("days"):null});return u?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(Tu(d.config||{},u))):z(t,404,{error:"проект не найден"})}if(c==="runs"&&e.method==="GET")return z(t,200,{runs:Ir(a)});let l=c.match(/^runs\/([^/]+)\/log\.json$/);if(l&&e.method==="GET"){let u=Bl(a,l[1]);return u?(t.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Content-Disposition":Ci(`лог ${l[1].slice(0,10)} ${l[1].slice(11,16)} — ${u.проект||a}.json`)}),t.end(JSON.stringify(u,null,2))):z(t,404,{error:"прогон не найден"})}let p=c.match(/^runs\/([^/]+)\/report\.txt$/);if(p&&e.method==="GET"){let u=er(a,p[1]);return u?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(Su(d.config||{},u))):z(t,404,{error:"прогон не найден"})}let f=c.match(/^runs\/([^/]+)(\/export\.csv)?$/);if(f&&e.method==="GET"){let u=er(a,f[1]);return u?f[2]?(t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}-${f[1]}.csv"`}),t.end("\uFEFF"+Cn(u.rows))):z(t,200,{...u,logsDir:Jn}):z(t,404,{error:"прогон не найден"})}}return z(t,404,{error:"нет такого метода"})}catch(o){return z(t,500,{error:String(o&&o.message||o)})}});pw().then(()=>hw.listen(wc,"0.0.0.0",()=>{let e=[].concat(...Object.values(hh.default.networkInterfaces())).filter(s=>s.family==="IPv4"&&!s.internal).map(s=>s.address),t="0.6.5",n="b23afbb";console.log(`
  mediachrome ${t?t+(n?" ("+n+")":""):"(iz ishodnikov)"}`),console.log(`  Kabinet:        http://localhost:${wc}`),e.forEach(s=>console.log(`  S telefona:     http://${s}:${wc}   (v toy zhe Wi-Fi seti)`)),console.log(`  (zakryt — zakroy eto okno)
`),Qd(),Iu(),jp(Bo),Op(),Bp();let r=i(()=>{Je().updateCheck!==!1&&(Li().catch(()=>{}),na().catch(()=>{}))},"look");setTimeout(r,2e4),setInterval(r,6*3600*1e3),Dc()}))});var yh=require("node:module");ra();var Jo="__mcCodeLoaded";(async()=>{if(process.env.MC_EXE_VERSION||(process.env.MC_EXE_VERSION="0.6.5"),!globalThis[Jo]){let e=null;try{e=Cc()}catch{e=null}if(e){globalThis[Jo]=e.version;try{(0,yh.createRequire)(process.execPath)(e.path);return}catch(t){globalThis[Jo]="";try{Rc(e.version,String(t&&t.message||t))}catch{}console.log(`
  [obnovlenie mehanizmov `+e.version+" ne zagruzilos - rabotaem po vshitomu kodu]"),console.log("  "+String(t&&t.message||t)+`
`)}}}process.env.MC_CODE_RUNNING=globalThis[Jo]||"",await Promise.resolve().then(()=>(bh(),fw))})();
