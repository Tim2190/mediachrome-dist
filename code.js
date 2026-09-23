// mediachrome 0.5.1 (388840a) — собрано автоматически, не править
const __mcFileUrl = require('node:url').pathToFileURL(process.execPath).href;
var Rl=Object.create;var er=Object.defineProperty;var _l=Object.getOwnPropertyDescriptor;var Cl=Object.getOwnPropertyNames;var Dl=Object.getPrototypeOf,El=Object.prototype.hasOwnProperty;var i=(e,t)=>er(e,"name",{value:t,configurable:!0});var ae=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var $n=(e,t)=>{for(var n in t)er(e,n,{get:t[n],enumerable:!0})},Pl=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Cl(t))!El.call(e,s)&&s!==n&&er(e,s,{get:()=>t[s],enumerable:!(r=_l(t,s))||r.enumerable});return e};var Qt=(e,t,n)=>(n=e!=null?Rl(Dl(e)):{},Pl(t||!e||!e.__esModule?er(n,"default",{value:e,enumerable:!0}):n,e));var da={};$n(da,{DATA_ROOT:()=>ge,USERDATA_CHROMIUM_DIR:()=>gs,USERDATA_DIR:()=>ms,migrateLegacyData:()=>bs});function Ll(){if(process.env.MEDIACHROME_DATA)return process.env.MEDIACHROME_DATA;let e=process.env.APPDATA||(fs.default.homedir?fs.default.homedir():ua);return process.env.APPDATA?(0,Et.join)(e,"mediachrome"):(0,Et.join)(e,".mediachrome")}function bs(e){try{let t=(0,Et.join)(ua,"data"),n=(0,Pt.existsSync)((0,Et.join)(ge,"projects"))||(0,Pt.existsSync)((0,Et.join)(ge,"site-memory.json"));if((0,Pt.existsSync)(t)&&!n&&(0,Pt.readdirSync)(t).length)return e(t,ge),!0}catch{}return!1}var fs,Et,Pt,ca,la,ua,ge,ms,gs,gt=ae(()=>{fs=Qt(require("node:os"),1),Et=require("node:path"),Pt=require("node:fs"),ca=require("node:url"),la=require("node:path"),ua=(0,la.dirname)((0,ca.fileURLToPath)(__mcFileUrl));i(Ll,"resolveRoot");ge=Ll(),ms=(0,Et.join)(ge,".userdata"),gs=(0,Et.join)(ge,".userdata-chromium");try{(0,Pt.mkdirSync)(ge,{recursive:!0})}catch{}i(bs,"migrateLegacyData")});function nr(e,t){let n=i(o=>String(o||"0").split(/[^\d]+/).filter(a=>a!=="").map(Number),"p"),r=n(e),s=n(t);for(let o=0;o<Math.max(r.length,s.length);o++){let a=(r[o]||0)-(s[o]||0);if(a)return a<0?-1:1}return 0}function Ol(e,t){if(!en)return{ok:!1,why:"подпись кода не настроена — лёгкие обновления выключены"};let n=(0,tn.createHash)("sha256").update(e).digest("hex");if(t&&t.sha256&&n!==t.sha256)return{ok:!1,why:"файл не совпал с отпечатком из витрины — возможно, скачался не целиком"};let r;try{r=(0,tn.createPublicKey)({key:Buffer.from(en,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ"}}let s=!1;try{let o=Buffer.from(String(t&&t.sig||"").replace(/-/g,"+").replace(/_/g,"/"),"base64");s=o.length>0&&(0,tn.verify)(null,e,r,o)}catch{s=!1}return s?{ok:!0,why:"",sha256:n}:{ok:!1,why:"подпись не сошлась — файл не от разработчика или повреждён"}}function ha(){if(!en)return null;let e=it(),t=e.active;if(!t||!t.version||!t.file)return null;if(e.pending&&e.pending.version===t.version){let r=e.bad||{};r[t.version]={at:Date.now(),why:"программа не дошла до запуска"};try{(0,Oe.renameSync)(t.file,t.file+".broken")}catch{try{(0,Oe.rmSync)(t.file,{force:!0})}catch{}}return et({...e,active:null,pending:null,bad:r,lastFail:{version:t.version,at:Date.now()}}),null}if((e.bad||{})[t.version])return null;if(!(0,Oe.existsSync)(t.file))return et({...e,active:null}),null;let n=ws();return n&&t.minExe&&nr(n,t.minExe)<0||n&&nr(t.version,n)<=0?null:(et({...e,pending:{version:t.version,at:Date.now()}}),{path:t.file,version:t.version})}function fa(){let e=it();if(!e.pending)return;let t=process.env.MC_CODE_RUNNING||"";if(e.pending.version!==t)return;let n=e.okVersions||{};n[e.pending.version]=Date.now(),et({...e,pending:null,okVersions:n})}function ma(e,t){let n=it(),r=n.bad||{};r[e]={at:Date.now(),why:String(t||"")};let s=n.active;if(s&&s.version===e&&s.file)try{(0,Oe.renameSync)(s.file,s.file+".broken")}catch{try{(0,Oe.rmSync)(s.file,{force:!0})}catch{}}et({...n,active:null,pending:null,bad:r,lastFail:{version:e,at:Date.now(),why:String(t||"")}})}function Je(){let e=it(),t=en?e.active:null;return{enabled:!!en,running:process.env.MC_CODE_RUNNING||"",exe:ws(),ready:!!(t&&t.version),readyVersion:t?t.version:"",notes:t&&t.notes||"",lastFail:e.lastFail||null,checkedAt:e.checkedAt||0,err:e.err||""}}async function Il(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{signal:t.signal,headers:{"Cache-Control":"no-cache"}});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json()}finally{clearTimeout(n)}}async function ys(e={}){if(!en)return Je();let t=it();if(!e.force&&t.checkedAt&&Date.now()-t.checkedAt<Nl)return Je();let n=null;try{n=await Il(zl)}catch(h){return et({...t,checkedAt:Date.now(),err:String(h&&h.message||h)}),Je()}if(et({...t,checkedAt:Date.now(),err:""}),!n||!n.version||!n.url)return Je();let r=ws(),s=t.active&&t.active.version||r;if(s&&nr(n.version,s)<=0||(t.bad||{})[n.version])return Je();if(r&&n.minExe&&nr(r,n.minExe)<0)return et({...it(),needFull:{version:n.version,minExe:n.minExe}}),Je();let o;try{let h=new AbortController,f=setTimeout(()=>h.abort(),6e4);try{let d=await fetch(n.url,{signal:h.signal});if(!d.ok)throw new Error("HTTP "+d.status);o=Buffer.from(await d.arrayBuffer())}finally{clearTimeout(f)}}catch(h){return et({...it(),err:String(h&&h.message||h)}),Je()}let a=Ol(o,n);if(!a.ok)return et({...it(),err:a.why}),Je();try{(0,Oe.mkdirSync)(tr,{recursive:!0})}catch{}let c=(0,rr.join)(tr,"code-"+String(n.version).replace(/[^\w.-]/g,"_")+".js"),u=c+".part";try{(0,Oe.writeFileSync)(u,o),(0,Oe.renameSync)(u,c)}catch(h){try{(0,Oe.rmSync)(u,{force:!0})}catch{}return et({...it(),err:"не удалось сохранить: "+String(h&&h.message||h)}),Je()}let l=it();if(l.active&&l.active.file&&l.active.file!==c)try{(0,Oe.rmSync)(l.active.file,{force:!0})}catch{}return et({...l,err:"",active:{version:n.version,file:c,minExe:n.minExe||"",notes:n.notes||"",at:Date.now()}}),Je()}function ga(){let e=it();if(e.active&&e.active.file)try{(0,Oe.rmSync)(e.active.file,{force:!0})}catch{}return et({...e,active:null,pending:null}),Je()}var rr,Oe,tn,zl,en,tr,pa,Nl,jl,et,it,ws,xs=ae(()=>{rr=require("node:path"),Oe=require("node:fs"),tn=require("node:crypto");gt();zl=process.env.MC_CODE_URL||"https://raw.githubusercontent.com/tim2190/mediachrome-dist/main/code.json",en="MCowBQYDK2VwAyEArb2DkMY1meiRt6JXIr0unrIjtj5ADfd+D/OVThCAoyg=",tr=(0,rr.join)(ge,"code"),pa=(0,rr.join)(tr,"state.json"),Nl=864e5,jl=i(e=>{try{return JSON.parse((0,Oe.readFileSync)(e,"utf8"))}catch{return null}},"readJson"),et=i(e=>{try{(0,Oe.mkdirSync)(tr,{recursive:!0})}catch{}try{(0,Oe.writeFileSync)(pa,JSON.stringify(e,null,2))}catch{}},"save"),it=i(()=>jl(pa)||{},"st0");i(nr,"cmpVer");ws=i(()=>process.env.MC_EXE_VERSION||"0.5.1","exeVersion");i(Ol,"verifyBundle");i(ha,"activeCode");i(fa,"markCodeOk");i(ma,"markCodeBad");i(Je,"codeState");i(Il,"getJson");i(ys,"checkCode");i(ga,"dropCode")});function ue(e){if(!e)return null;let t=String(e).trim();if(!t)return null;let n=t.match(/^(\d{1,2})[.\/](\d{1,2})[.\/](\d{2}|\d{4})(?!\d)/);if(n&&+n[1]<=31&&+n[2]<=12){let o=n[3].length===2?2e3+ +n[3]:+n[3],a=new Date(o,+n[2]-1,+n[1]);if(!isNaN(a.getTime()))return a}let r=new Date(t);if(!isNaN(r.getTime())&&/\d{4}/.test(t))return r;let s=Bl(t);return s||(isNaN(r.getTime())?null:r)}function vs(e,t){let n=e.match(/(\d{1,2}):(\d{2})/),r=new Date(t);return n?r.setHours(+n[1],+n[2],0,0):r.setHours(0,0,0,0),r}function Bl(e){let t=e.toLowerCase(),n=new Date;if(/только что|just now|moments? ago|сейчас/.test(t))return n;let r=t.match(/(\d+)\s*(секунд|минут|час|дн|день|сутк|недел|месяц|год|лет|сағат|мину?т|күн|тәулік|апта|ай|жыл|second|sec|minute|min|hour|day|week|month|year)[a-zа-яёәөұүқғңһі]*\s*(?:назад|бұрын|ago)/);if(r){let s=+r[1],o=r[2],a=new Date(n);return/секунд|second|sec/.test(o)?a.setSeconds(a.getSeconds()-s):/минут|мину?т|minute|min/.test(o)?a.setMinutes(a.getMinutes()-s):/час|сағат|hour/.test(o)?a.setHours(a.getHours()-s):/дн|день|сутк|күн|тәулік|day/.test(o)?a.setDate(a.getDate()-s):/недел|апта|week/.test(o)?a.setDate(a.getDate()-s*7):/месяц|month/.test(o)||o==="ай"?a.setMonth(a.getMonth()-s):/год|лет|жыл|year/.test(o)&&a.setFullYear(a.getFullYear()-s),a}if(/^вчера|^yesterday|^кеше/.test(t)){let s=new Date(n);return s.setDate(n.getDate()-1),vs(t,s)}if(/^сегодня|^today|^бүгін/.test(t))return vs(t,n);if(r=t.match(/(\d{1,2})\s+([а-яёәөұүқғңһіА-ЯЁӘӨҰҮҚҒҢҺІ]{3,})\.?\s*(\d{4})?/),r){let s=+r[1],o=r[2].toLowerCase(),a=Hl.findIndex(c=>o.startsWith(c)||c.startsWith(o));if(a<0&&(a=ql.findIndex(c=>o.startsWith(c)||c.startsWith(o))),a>=0){let c=r[3]?+r[3]:n.getFullYear(),u=new Date(c,a,s),l=vs(t,u);return isNaN(l.getTime())?null:l}}return null}function nn(e){if(!e)return null;let t=new Date(e+"T00:00:00");return isNaN(t.getTime())?null:t}function Ke(e){if(!(e instanceof Date)||isNaN(e.getTime()))return null;let t=i(n=>String(n).padStart(2,"0"),"p2");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function sr(e){if(!e)return"";let t=e instanceof Date?e:new Date(e);if(isNaN(t.getTime()))return String(e);let n=i(s=>String(s).padStart(2,"0"),"p2"),r=t.getHours()||t.getMinutes()?" "+n(t.getHours())+":"+n(t.getMinutes()):"";return Ke(t)+r}function An(e){if(!e)return null;let t=new Date(e+"T23:59:59.999");return isNaN(t.getTime())?null:t}function Be(e,t,n){let r=e instanceof Date?e:ue(e);return!(!r||t&&r<t||n&&r>n)}var ql,Hl,Ht=ae(()=>{i(ue,"parseDate");ql=["январ","феврал","март","апрел","ма","июн","июл","август","сентябр","октябр","ноябр","декабр"],Hl=["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"];i(vs,"timeFrom");i(Bl,"parseLoose");i(nn,"startOfDay");i(Ke,"ymd");i(sr,"localStamp");i(An,"endOfDay");i(Be,"inRange")});function va(e){return/\/wp-content\//.test(e||"")}function ks(e){let t=[],n=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,r;for(;r=n.exec(e);){let s;try{s=JSON.parse(r[1].trim())}catch{continue}let o=Array.isArray(s)?s:[s];for(let a of o)a&&a["@graph"]&&Array.isArray(a["@graph"])&&t.push(...a["@graph"]),a&&t.push(a)}return t}function Ss(e,t){return e?Array.isArray(e)?e.some(n=>String(n).toLowerCase().includes(t)):String(e).toLowerCase().includes(t):!1}function kt(e,t){let n=new RegExp(`<meta[^>]+(?:property|name|itemprop)=["']`+t+`["'][^>]*content=["']([^"']+)["']`,"i"),r=e.match(n);if(r)return r[1];let s=new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name|itemprop)=["']`+t+`["']`,"i"),o=e.match(s);return o?o[1]:null}function Xe(e){if(!e)return e;let t={"&amp;":"&","&quot;":'"',"&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"«","&raquo;":"»","&ndash;":"–","&mdash;":"—","&hellip;":"…","&laquo":"«","&raquo":"»","&rsquo;":"’","&lsquo;":"‘","&rdquo;":"”","&ldquo;":"“"};return e.replace(/&#x27;/gi,"'").replace(/&#0?39;/g,"'").replace(/&(?:amp|quot|apos|lt|gt|nbsp|laquo|raquo|ndash|mdash|hellip|rsquo|lsquo|rdquo|ldquo);/g,n=>t[n]||n).replace(/&#x([0-9a-f]+);/gi,(n,r)=>String.fromCodePoint(parseInt(r,16))).replace(/&#(\d+);/g,(n,r)=>String.fromCodePoint(parseInt(r,10)))}function Ts(e,t=12){let n=String(e||"").toLowerCase().trim();if(!n)return[];if(/^[a-z0-9-]+$/.test(n))return n.length>=4?[n]:[];let r=[""];for(let s of n){let o=Fl[s]||(/[a-z0-9]/.test(s)?[s]:null);if(!o)return[];let a=[];for(let c of r)for(let u of o)a.length<t&&a.push(c+u);r=a}return[...new Set(r)].filter(s=>s.length>=4)}function be(e){let t;try{t=new URL(String(e))}catch{return String(e||"").trim()}let n=t.host.toLowerCase().replace(/^www\./,""),r=t.pathname.replace(/\/+$/,"")||"/",s=[...t.searchParams.entries()].filter(([o])=>!Ul.test(o)).sort((o,a)=>o[0].localeCompare(a[0])).map(([o,a])=>o+"="+a).join("&");return n+r+(s?"?"+s:"")}function Sa(e){let t=String(e||"");return/новост[ией]+\s+(?:и\s+событи[йяе]+\s+)?по\s+теме|последние\s+новости\s+на\s+тему|все\s+(?:новости|материалы|публикации)\s+по\s+(?:теме|тегу)|материалы\s+по\s+тег|архив\s+(?:новостей|материалов|публикаций)|тақырып\s+бойынша\s+жаңалықтар/i.test(t)}function $s(e){let t;try{t=new URL(e).pathname}catch{return!1}let n=t.split("/").filter(Boolean).pop()||"";return n?/\d{4,}/.test(n)?!0:n.split(/[-_]/).filter(Boolean).length>=4:!1}function Mn(e,t,n){let r=new RegExp("<(\\/?)"+n+"\\b","gi");r.lastIndex=t;let s=1,o;for(;o=r.exec(e);)if(o[1]){if(--s===0)return o.index}else if(++s>400)return-1;return-1}function Gl(e){if(!e)return"";let t=String(e).replace(/<!--[\s\S]*?-->/g," ").replace(/<(script|style|noscript|svg|iframe|form|nav|aside|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi," ");{let p=/<(div|section|ul|ol)\b([^>]*)>/gi,m="",g=0,b;for(;b=p.exec(t);){let x=(b[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1]||"";if(!ba.test(x))continue;let w=Mn(t,p.lastIndex,b[1]);w<0||(m+=t.slice(g,b.index)+" ",g=w,p.lastIndex=w)}t=m+t.slice(g)}t=t.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(p,m)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(m)?" ":p);let n=i(p=>Xe(String(p).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"text"),r=t.match(/<([a-z]+)\b[^>]*itemprop\s*=\s*["']articleBody["'][^>]*>/i);if(r){let p=r.index+r[0].length,m=Mn(t,p,r[1]);if(m>0){let g=n(t.slice(p,m));if(g.length>200)return g.slice(0,4e4)}}let s=150,o=i(p=>String(p).split(/<[^>]+>/).reduce((m,g)=>{let b=g.replace(/\s+/g," ").trim();return m+(b.length>=s?b.length:0)},0),"longText"),a="",c=0,u=0,l=i((p,m)=>{(m>c||m===c&&(c>0?p.length<u:p.length>u))&&(a=p,c=m,u=p.length)},"offer"),h=i(p=>{let m=/<article\b[^>]*>/gi,g="",b=0,x;for(;x=m.exec(p);){let w=Mn(p,m.lastIndex,"article");w<0||(g+=p.slice(b,x.index)+" ",b=p.indexOf(">",w)+1||w,m.lastIndex=b)}return g+p.slice(b)},"dropCards");{let p=/<article\b[^>]*>/gi,m;for(;m=p.exec(t);){let g=Mn(t,p.lastIndex,"article");if(g<0)continue;let b=h(t.slice(p.lastIndex,g));l(n(b),o(b))}}if(a.length>200)return a.slice(0,4e4);let f=/(article|post|entry|news|material|publication|content|text|body)[-_]?(body|text|content|detail|full|inner)?/i;{let p=/<(div|section)\b([^>]*)>/gi,m;for(;m=p.exec(t);){let g=(m[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1];if(!g||!f.test(g)||ba.test(g))continue;let b=Mn(t,p.lastIndex,m[1]);if(b<0)continue;let x=h(t.slice(p.lastIndex,b));l(n(x),o(x))}}return a.length>200?a.slice(0,4e4):[...t.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(p=>n(p[1])).filter(p=>p.length>40).join(" ").slice(0,4e4)}function ct(e){let t=String(e||""),n;if(n=t.match(/(?:^|[\/\-_.])(20\d{2})[\/\-.](\d{1,2})[\/\-.](\d{1,2})(?:[\/\-_.]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}if(n=t.match(/(?:^|[\/\-_.])(\d{1,2})[\/\-.](\d{1,2})[\/\-.](20\d{2})(?:[\/\-_.]|$|\.html)/),n){let r=new Date(+n[3],+n[2]-1,+n[1]);if(!isNaN(r)&&+n[2]<=12&&+n[1]<=31)return r}if(n=t.match(/(?:^|[\/\-_])(20\d{2})(\d{2})(\d{2})(?:[\/\-_]|$)/),n){let r=new Date(+n[1],+n[2]-1,+n[3]);if(!isNaN(r)&&+n[2]<=12&&+n[3]<=31)return r}return null}function Wl(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i,n=/(date|time|pub|posted|created|published)/i,r=[...e.matchAll(/<article\b/gi)].map(f=>f.index),s=[...e.matchAll(/<\/article\s*>/gi)].map(f=>f.index),o=i(f=>r.filter(d=>d<f).length>s.filter(d=>d<f).length,"inArticle"),a=null,c=null,u=null,l=null;for(let f of e.matchAll(/<time\b([^>]*)>/gi)){let d=f[1]||"",p=(d.match(/\sdatetime=["']([^"']+)["']/i)||[])[1]||"";if(!p){let x=f.index+f[0].length,w=e.slice(x,x+200),M=w.search(/<\/time\s*>/i);if(M<0)continue;let v=Xe(w.slice(0,M).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!v||v.length>80)continue;p=v}l||(l=p);let m=(d.match(/class=["']([^"']*)["']/i)||[])[1]||"";if(t.test(m))continue;if(!a&&o(f.index)){a=p;break}if(!c&&n.test(m)){c=p;continue}let b=[...e.slice(Math.max(0,f.index-400),f.index).matchAll(/class=["']([^"']*)["']/gi)].pop();b&&t.test(b[1])||u||(u=p)}let h=a||c||u||l;return h?ue(h):null}function Kl(e){let t=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i;e=String(e).replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(n,r)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(r)?" ":n);for(let n of e.matchAll(/<(?:div|span|p|li|h[1-6])[^>]*class=["']([^"']*(?:date|time|pub|posted|created)[^"']*)["'][^>]*>([\s\S]{0,160}?)<\/(?:div|span|p|li|h[1-6])>/gi)){if(t.test(n[1]))continue;let r=Xe(n[2].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!r||r.length>80)continue;let s=ue(r);if(s)return s}return null}function Vl(e,t){let n=new Set,r=i(c=>Xe(String(c||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"norm"),s="";try{s=new URL(t,"https://x").pathname.replace(/\/+$/,"")}catch{}let o=i(c=>{if(!c)return!1;try{return new URL(String(c).replace(/\\\//g,"/"),"https://x").pathname.replace(/\/+$/,"")===s}catch{return!1}},"sameUrl"),a=i(c=>{if(!(!c||typeof c!="object")){if(Array.isArray(c)){for(let u of c)a(u);return}if(c.headline&&!o(c.url)){let u=r(c.headline);u.length>=20&&n.add(u)}for(let u of["itemListElement","item","@graph","mainEntity"])c[u]&&a(c[u])}},"eat");for(let c of ks(e))(Ss(c["@type"],"list")||c.itemListElement)&&a(c);for(let c of e.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)){if(o(c[1]))continue;let u=r(c[2]);u.length>=20&&u.length<=200&&n.add(u)}return[...n]}function wa(e,t){if(!t||!t.length)return e;let n=String(e).replace(/\s+$/,""),r=t.slice().sort((s,o)=>o.length-s.length);for(let s=0;s<12;s++){let o=n.replace(/\s+$/,""),a=r.find(c=>o.endsWith(c));if(!a)break;n=o.slice(0,o.length-a.length).replace(/[\s·|—–-]+$/,"")}return n}function $a(e){for(let n of ks(e))if(Ss(n["@type"],"article"))return!0;return(kt(e,"og:type")||"").toLowerCase().includes("article")?!0:!!kt(e,"article:published_time")}function As(e,t,n=""){let r=null,s=null,o=!1,a=null,c=null,u="",l=i(m=>m==null?"":typeof m=="string"?m:Array.isArray(m)?m.map(l).filter(Boolean).join(" "):typeof m=="object"?l(m["@value"]||m.text||m.name||""):String(m),"asText"),h=null;for(let m of ks(e))Ss(m["@type"],"article")&&(o=!0,m.datePublished&&!h&&(h=ue(m.datePublished)),m.headline&&!s&&(s=l(m.headline)),m.description&&!a&&(a=l(m.description)),m.articleBody&&!c&&(c=l(m.articleBody)));let f={jsonld:i(()=>h,"jsonld"),"meta-og":i(()=>{let m=kt(e,"article:published_time");return m?ue(m):null},"meta-og"),"meta-itemprop":i(()=>{let m=kt(e,"datePublished");return m?ue(m):null},"meta-itemprop"),time:i(()=>Wl(e),"time"),"text-block":i(()=>Kl(e),"text-block")};for(let m of Yl){let g=f[m]();if(g){r=g,u=m;break}}if(s||(s=kt(e,"og:title")),!s){let m=e.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);m&&(s=m[1].replace(/<[^>]+>/g,""))}a||(a=kt(e,"description")||kt(e,"og:description")),o||((kt(e,"og:type")||"").toLowerCase().includes("article")||kt(e,"article:published_time"))&&(o=!0);let d=Vl(e,t),p=wa(Gl(e),d);if(c&&(c=wa(c,d)),!c)c=p;else if(p){let m=i(x=>String(x).toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim(),"flat"),g=m(c),b=m(p);g&&b.includes(g)?c=p:g.includes(b)||(c=c+" "+p)}return!r&&t&&(r=ct(t),r&&(u="url")),r?{url:t,dateVia:u,title:Xe((s||"").trim())||t,date:r.toISOString(),isArticle:o,description:Xe((a||"").trim()),body:c?Xe(l(c)):""}:null}function Ma(e){let t;try{t=new URL(e).pathname.toLowerCase()}catch{return!1}return Aa.test(t)}function Rn(e,t){let n=new URL(t).host,r=new Set,s=i(u=>{let l;try{l=new URL(u.replace(/\\\//g,"/"),t).href}catch{return}let h;try{h=new URL(l)}catch{return}if(h.host!==n)return;let f=h.pathname.toLowerCase();f==="/"||f===""||Aa.test(f)||/\/(search|search_results|results|tag|tags|category|categories|author|rubric|page|feed|rss|login|register)\b/.test(f)||f.split("/").filter(Boolean).length<1||r.add(l.split("#")[0])},"add"),o,a=/href=["']([^"'#]+)["']/gi;for(;o=a.exec(e);)s(o[1]);if(/^\s*[\[{]/.test(e)||r.size===0){let u=/"[\w]*(?:url|link|uri)"\s*:\s*"((?:https?:)?\\?\/\\?\/?[^"]+)"/gi;for(;o=u.exec(e);)s(o[1]);let l=new RegExp("https?:\\\\?/\\\\?/(?:www\\.)?"+n.replace(/^www\./,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+`\\\\?/[^"'\\s<>]+`,"gi");for(;o=l.exec(e);)s(o[0])}return[...r]}function Ra(e){let t=[],n=/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi,r;for(;r=n.exec(e);){let s=(r[0].match(/href=["']([^"']+)["']/i)||[])[1];s&&t.push(s)}return t}function _a(e){let t=[],n=e.match(/<item[\s\S]*?<\/item>/gi)||[];for(let s of n){let o=rt((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=rt((s.match(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i)||[])[1])||"",c=rt((s.match(/<pubDate(?:\s[^>]*)?>([\s\S]*?)<\/pubDate>/i)||[])[1]||(s.match(/<dc:date(?:\s[^>]*)?>([\s\S]*?)<\/dc:date>/i)||[])[1]),u=ka((s.match(/<description(?:\s[^>]*)?>([\s\S]*?)<\/description>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:c||null,description:u?Xe(u.replace(/<[^>]+>/g,"").trim()):""})}if(t.length)return t;let r=e.match(/<entry[\s\S]*?<\/entry>/gi)||[];for(let s of r){let o=rt((s.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),a=((s.match(/<link[^>]+href=["']([^"']+)["']/i)||[])[1]||"").trim(),c=rt((s.match(/<(?:published|updated)(?:\s[^>]*)?>([\s\S]*?)<\/(?:published|updated)>/i)||[])[1]);a&&t.push({title:o||null,link:a,date:c||null})}return t}function Ca(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=rt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=rt((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]||(r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Da(e){let t=[],n=e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[];for(let r of n){let s=rt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!s)continue;let o=rt((r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1])||"";t.push({loc:s,lastmod:o})}return t}function Ea(e){let t=[],n=e.match(/<url>[\s\S]*?<\/url>/g)||[];for(let r of n){let s=rt((r.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]),o=rt((r.match(/<news:title(?:\s[^>]*)?>([\s\S]*?)<\/news:title>/)||[])[1]),a=rt((r.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1]||(r.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]);if(!s)continue;let c=ue(a);t.push({url:s,title:o||null,date:c?c.toISOString():null})}return t}function xa(e){if(!e)return"";let t=String(e).replace(/\s+/g,"").replace(/%3D/gi,"=").replace(/%2B/gi,"+").replace(/%2F/gi,"/"),n=ya(t);if(!n){let r=(4-t.length%4)%4;try{n=ya(t+"=".repeat(r))}catch{}}return n}function Pa(e,t){try{let n=String(e||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(!n)return null;let r=/(^|\.)(bing|microsoft|msn|bingapis|windows|office\.net|live\.com|outlook\.com|go\.microsoft)\./i,s=i(u=>{try{return decodeURIComponent(u)}catch{return String(u)}},"tryDec"),o=[];i(u=>{try{let l=/^https?:/i.test(u)||u.startsWith("http")?u:u.startsWith("/")?"https://www.bing.com"+u:"https://"+u,h=new URL(l);for(let[p,m]of h.searchParams.entries())m&&/^(u|uddg|url|to|dest|destination|target|redirect|page|link|ref)[\d]*$/i.test(p)&&o.push(String(m));let d=(h.search+"&").match(/[?&]u=([A-Za-z0-9_\-+/=%]{20,})/i);d&&o.push(decodeURIComponent(d[1]))}catch{}},"tryFromUrl")(n);let c=[];for(let u of o)c.push(u);c.push(n,s(n),s(s(n))),/^[A-Za-z0-9_\-+/=]{40,}$/.test(n)&&c.push(xa(n));for(let u=0;u<c.length;u++){let l=c[u];if(!l)continue;let h=String(l).match(/[A-Za-z0-9_\-+/]{40,}={0,3}/g)||[];for(let d of h){let p=xa(d);p&&/^https?:/i.test(p)&&c.push(p)}let f=String(l).match(/https?:\/\/[^\s"'&<>()\\]+/gi)||[];for(let d of f)try{let p=new URL(d.split("#")[0].replace(/\/+$/,"")),m=p.host.replace(/^www\./,"");if(r.test(m))continue;if(m===t||m.endsWith("."+t))return p.href.split("#")[0]}catch{}}return null}catch{return null}}var ka,rt,Fl,Ul,ba,Yl,Ta,Aa,ya,_n=ae(()=>{Ht();i(va,"isWordPress");i(ks,"jsonLdObjects");i(Ss,"typeIncludes");i(kt,"metaContent");ka=i(e=>e==null?e:String(e).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1"),"stripCdata"),rt=i(e=>{let t=ka(e);return t==null?t:Xe(t).trim()},"xmlText");i(Xe,"decodeEntities");Fl={а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["e","ye"],ё:["e","yo"],ж:["zh"],з:["z"],и:["i"],й:["i","y"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["h","kh"],ц:["c","ts"],ч:["ch"],ш:["sh"],щ:["sch"],ъ:[""],ы:["y"],ь:[""],э:["e"],ю:["yu","iu"],я:["ya","ia"],ә:["a","ae"],ғ:["g","gh"],қ:["k","q",""],ң:["n","ng"],ө:["o","oe"],ұ:["u"],ү:["u","ue"],һ:["h"],і:["i"]};i(Ts,"translitVariants");Ul=/^(utm_|yclid|gclid|fbclid|from|_openstat|ysclid)/i;i(be,"urlKey");i(Sa,"looksLikeListingTitle");i($s,"looksLikeArticleUrl");ba=/(sidebar|side-bar|aside|widget|banner|advert|reklam|menu|nav|breadcrumb|footer|header|subscribe|podpis|social|share|comment|komment|related|similar|also|recommend|read-?more|popular|latest|last-?news|news-?list|tags?|rubric|category)/i;i(Mn,"blockEnd");i(Gl,"extractBodyText");i(ct,"dateFromUrl");i(Wl,"pickTimeDate");i(Kl,"pickTextBlockDate");Yl=["jsonld","meta-og","meta-itemprop","time","text-block"],Ta={jsonld:"разметка JSON-LD","meta-og":"мета article:published_time","meta-itemprop":"микроразметка itemprop",time:"тег <time>","text-block":"текстом в блоке с датой",url:"дата в адресе"};i(Vl,"foreignTitles");i(wa,"trimForeignTail");i($a,"declaresArticle");i(As,"extractArticleMeta");Aa=/\.(xml|json|jsonld|js|mjs|map|css|txt|jpg|jpeg|png|webp|gif|svg|ico|avif|bmp|tiff?|woff2?|ttf|otf|eot|pdf|mp4|webm|mov|avi|mp3|ogg|wav|zip|rar|7z|gz|tar|docx?|xlsx?|pptx?|rtf|epub|apk|exe|dmg)$/;i(Ma,"isAssetUrl");i(Rn,"extractLinks");i(Ra,"extractFeedLinks");i(_a,"parseFeed");i(Ca,"parseUrlset");i(Da,"parseSitemapIndex");i(Ea,"parseNewsSitemap");ya=typeof Buffer<"u"&&Buffer.from?e=>{try{return Buffer.from(e,"base64").toString("utf8")}catch{return""}}:e=>{try{return atob(e.replace(/_/g,"/").replace(/-/g,"+"))}catch{return""}};i(xa,"_b64dec");i(Pa,"bingReal")});function Ms(e){let t;try{t=new URL(e).host.replace(/^www\./,"")}catch{return null}if(or[t])return or[t];for(let n of Object.keys(or))if(t===n||t.endsWith("."+n))return or[n];return null}var or,La=ae(()=>{or={"zakon.kz":{search:"https://www.zakon.kz/search/?handler=LoadMoreNews&qsearch={q}&author=0&category=0&tag=0&perioddate=&p={page}",selectors:{container:"div.news-item",link:"a.newscard_link",title:"div.newscard__title",date:"span.newscard__date"}},"tengrinews.kz":{search:"https://tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"}},"ulysmedia.kz":{search:"https://ulysmedia.kz/search/?search_text={q}&page={page}",selectors:{container:".col-xl-3.xl-mb-20",link:"a.category__title",title:"a.category__title",date:"span.date"},browserSearch:!0},"exclusive.kz":{search:"https://exclusive.kz/?s={q}",cms:"wordpress",browserSearch:!0,external:!1},"inform.kz":{search:null,render:"https://www.inform.kz/search_results/?q={q}",api:"https://search.inform.kz/search/ru?q={q}&per_page=20&page={page}",note:"HTTP-поиск — JS-оболочка (страница равна пустому запросу ±2 длины слова, ссылок на статьи ноль); браузером та же страница даёт 17 ссылок на статьи, но ищет сайт ТОЛЬКО по заголовку — ключ в тексте его выдача не находит"},"informburo.kz":{search:"https://informburo.kz/search?q={q}"},"liter.kz":{search:"https://liter.kz/search/?search_text={q}"},"newtimes.kz":{search:"https://newtimes.kz/search/?search_text={q}"},"vlast.kz":{search:"https://vlast.kz/search/?query={q}",browserSearch:!0,external:!1,note:"внешний забанен, но браузер-поиск работает"},"kapital.kz":{search:"https://kapital.kz/amp/search?s={q}"},"time.kz":{search:"https://time.kz/search?q={q}",browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку -> подстраховываемся браузером; внешний мёртв"},"forbes.kz":{search:"https://forbes.kz/search?q={q}&type=articles&s=data&page={page}"},"inbusiness.kz":{search:"https://inbusiness.kz/ru/search?q={q}",external:!1},"kazpravda.kz":{search:"https://kazpravda.kz/search?q={q}"},"nazarbayev.kz":{search:"https://nazarbayev.kz/ru/search?body_value={q}&title={q}&time=&created[min]=&created[max]=&field_news_type_value=All",cms:"drupal",note:"Drupal exposed filter на /ru/search (не /kk/ — тот даёт 500); есть created[min/max] для серверного фильтра дат"},"baq.kz":{search:"https://baq.kz/search/{bpage}?q={q}",browserSearch:!0,note:"server-rendered поиск, Bitrix-пагинация /search/pagenN/?q=; браузер-поиск подстрахован"},"kursiv.media":{search:"https://kz.kursiv.media/{wpage}?s={q}",cms:"wordpress",note:"WordPress-поиск /?s= (не /ru/!), пагинация /page/N/?s="},"lsm.kz":{search:"https://lsm.kz/search?q={q}",needs_js:!0,browserSearch:!0,external:!1},"sputnik.kz":{search:null,external:!1,note:"поиск = React + невидимая reCAPTCHA (getmore за g-recaptcha-response) -> из fetch не взять; RSS свежак + sitemap-глубина. Внешний тоже глух (Bing не индексирует статьи)."},"total.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиск = Google CSE в iframe -> невзят; браузер-поиск через форму сайта работает"},"interfax.kz":{search:null,external:!0,note:"на сайте поиска нет -> только RSS/sitemap (свежак) + внешний Google site: по периоду"},"press.kz":{search:null,render:"https://press.kz/search?title={q}",external:!1,note:"поиск сайта — /search?title= (адрес его собственной формы, дал пользователь). ПО HTTP он результатов не отдаёт: страница приходит одна и та же (30 ссылок) при любом слове, а от пустого запроса отличается ровно на удвоенную длину слова — то есть слово только эхом печатается в форме и в заголовке, а выдачу рисует JS. Поэтому HTTP-поиск выключен, а страница берётся РЕНДЕРОМ. ?s= — это вообще главная (37 ссылок, побайтово те же). Глубину даёт карта сайта (48 адресов); статьи размечены нормально — JSON-LD с datePublished читается"},"kaztag.kz":{search:null,render:"https://kaztag.kz/ru/search/?searchid=2383993&web=0&text={q}",feed:"https://kaztag.kz/ru/news/?PAGEN_1={page}",browserSearch:!0,external:!1,note:"статьи за Cloudflare (обычным запросом не открываются -> дочитываем браузером). Поиск по сайту — виджет Яндекса (searchid=2383993), выдачу рисует JS -> берём рендером. Лента PAGEN_1 — свежак"},"orda.kz":{search:null,render:"https://orda.kz/search-results.html?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (render всё же поднимает результаты); внешний бесполезен"},"nur.kz":{search:null,feed:"https://www.nur.kz/latest/",external:!1,note:"поиска нет, sitemap заморожены; лента /latest/ (свежак). Внешний не индексирует -> отключён"},"lenta.ru":{search:"https://lenta.ru/search/v2/process?query={q}&from={off10}&size=10&sort=2&title_only=0&domain=1",note:"JSON-API поиска /search/v2/process, пагинация from= (шаг 10); URL статей /YYYY/MM/DD/ -> предфильтр дат"},"rbc.ru":{search:null,external:!0,note:"fetch за WAF, render поиска редиректит на ленту -> отключён. news-sitemap = свежак + внешний Google site: (глубина по периоду), дата из URL /DD/MM/YYYY/"},"ria.ru":{search:"https://ria.ru/services/search/getmore/?query={q}&offset={off20}",external:!0,budgetMs:12e4,note:"AJAX-пагинация поиска getmore?offset= (шаг 20); дата в URL /YYYYMMDD/ -> предфильтр без открытия"},"bbc.com":{search:null,render:"https://www.bbc.com/search?q={q}",selectors:{container:'a[data-testid="internal-link"]',title:'[data-testid="card-headline"]',date:""},external:!1,note:"SPA-поиск; язык запроса = язык сайта (Tokayev для англ.). Замер 23 сентября 2026: формы поиска в разметке главной НЕТ вовсе (её рисует скрипт), поэтому HTTP-поиск выключен, а страница берётся рендером. Материал даёт sitemap-глубина — 14 за сутки по ключу «China»"},"theguardian.com":{search:null,external:!1,note:"HTTP-поиска нет (/search отдаёт 404, формы на главной нет); материал даёт карта новостей с заголовками"},"aljazeera.com":{search:null,external:!1,note:"поиск — оболочка (страница одна и та же на любое слово), WordPress-вход отвечает 404; материал дают rss и карта новостей"},"dw.com":{search:"https://www.dw.com/search/?languageCode=en&item={q}",external:!1,note:"поиск РАБОТАЕТ, параметр item (не q). Осторожно: /search/СЛОВО — это эхо, а не поиск. Пагинация pageIndex не двигается, поэтому страниц в шаблоне нет. languageCode задаёт язык выдачи"},"cnn.com":{search:null,external:!1,note:"форма ведёт на /search?q=, но страница по слову и по мусору побайтово одинакова — выдачу рисует скрипт"},"npr.org":{search:null,external:!1,note:"поиск — оболочка. Карта новостей лежит на другом хосте (googlecrawl.npr.org) и перечислена в robots — канал глубины её берёт"},"euronews.com":{search:"https://www.euronews.com/search?query={q}",external:!1,note:"поиск РАБОТАЕТ, параметр query (/?s= и ?text= отдают ленту). В прогоне 23 сентября 2026 сайт отвечал 406 и на поиск, и на 28 статей; причина не найдена, повторить не удалось — если 406 вернётся, смотреть здесь"},"cbsnews.com":{search:null,external:!1,note:"поиск — оболочка: страницы по слову и по мусору побайтово одинаковы. На быстрый повторный запрос сайт отвечает 406 — это не «ищет», это нас придержали"},"nbcnews.com":{search:null,external:!1,note:"форма ведёт на /search/, но страница в 19 КБ и ссылок на статьи не содержит вовсе. Материал: rss и карта сайта (без заголовков — дату и ключ узнаём только скачав)"},"independent.co.uk":{search:null,external:!1,note:"/search отдаёт 404, формы на главной нет. Материал дают rss (100 записей) и карта новостей с заголовками"},"straitstimes.com":{search:null,external:!1,note:"поиск — оболочка (восемь проб, страница одна и та же). Материал дают карта новостей с заголовками и rss"},"time.com":{search:null,external:!1,note:"поиск — оболочка. В robots.txt у секции «*» нет ни одного запрета. Материал дают карта новостей и rss"},"usatoday.com":{search:null,external:!1,note:"ЭХО, а не поиск: слово на странице есть, но ссылки на статьи у страницы по слову и по мусору ОДНИ И ТЕ ЖЕ. Судить надо по ссылкам, а не по числу вхождений"},"newsweek.com":{search:null,external:!1,note:"/search?q= отвечает 406, /?s= — это главная. Материал дают rss и карта сайта"},"abcnews.go.com":{search:null,external:!1,note:"формы поиска на главной нет. Карта новостей — 1000 адресов с заголовками, самая объёмная из проверенных"},"apnews.com":{search:null,external:!1,note:"из облака не открывается (403 на главную и карты), хотя robots.txt обход РАЗРЕШАЕТ — значит защита по адресу, как у Reuters. С домашнего компьютера, скорее всего, откроется"},"france24.com":{search:null,external:!1,note:"из облака 403, хотя robots.txt отдаётся и перечисляет карты новостей по языкам. Тот же класс, что apnews. Английская версия — на /en/"},"japantimes.co.jp":{search:null,external:!1,note:"форма ведёт на /search?query=, но из облака он отвечает 403 — проверить, ищет ли он на самом деле, отсюда нельзя. RSS работает (/feed)"},"reuters.com":{search:null,render:"https://www.reuters.com/site-search/?query={q}",external:!1,note:"поиск сайта — /site-search/?query= (адрес дал пользователь). По HTTP отдаёт 401 DataDome, выдачу рисует Arc-скрипт -> берём РЕНДЕРОМ, без пагинации (render рендерит один адрес). Из облака 401 и обычным запросом, и настоящим Chromium — это репутация дата-центра, у пользователя с домашнего адреса должно открыться. Карты сайта при этом ОТКРЫТЫ: news-sitemap отдаёт 50 записей с заголовком и точной датой, то есть материал с ключом В ЗАГОЛОВКЕ находится вообще без скачивания. Дата стоит в адресе (…-2026-09-22/) -> отсев вне периода бесплатный. В robots.txt сайт запрещает автоматический сбор (Disallow: / для всех) — решение владельца"},"khabar.kz":{search:null,browserSearch:!0,external:!1,note:"по уликам: /search/?q= отдаёт ту же страницу, что и на мусорный запрос (128 ссылок в обоих) — это лента, не результаты. Глубину даёт sitemap; браузер-поиск снимает 21 материал"},"nomad.su":{search:null,browserSearch:!0,external:!1,note:"по уликам: /?s= игнорирует запрос (та же страница на любое слово, ссылок-статей 0). HTTP-поиска нет; браузер-поиск работает; внешний мёртв"},"31.kz":{search:null,browserSearch:!0,noRender:!0,note:"render капчит (0 ссылок); браузер-поиск открывает форму; DDG изредка даёт (не гасим external)"},"ktk.kz":{search:null,browserSearch:!0,external:!1,feed:"/ru/News/AjaxPublications/",feedPost:"lastDate={date}",render:"https://www.ktk.kz/ru/Search/Index/?text={q}&searchid=2472426",note:"поиск сайта — виджет Яндекса (searchid=2472426, адрес дал пользователь 3 сентября 2026), выдачу рисует JS -> берём рендером. Даты виджет принимает, но НЕ применяет и сортирует по релевантности — старьё отсеиваем сами по дате в адресе, это бесплатно.главная и СТАТЬИ за WAF -> и то, и другое через браузер. Ключ у ktk обычно НЕ в заголовке (проверено пользователем 2 сентября 2026), поэтому статью надо именно прочитать, иначе материал не найти. Вход к нужным датам: кнопка «Ещё новости» дёргает POST /ru/News/AjaxPublications/ с телом lastDate=ДД.ММ.ГГГГ и отдаёт кусок ленты строго СТАРШЕ этой даты (проверено живьём: 01.09.2026 -> 18 ссылок за 31 августа). ?page= и ?PAGEN_1= лента игнорирует, sitemap.xml отдаёт 404"},"camonitor.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиска нет; браузер-поиск снимает выдачу; внешний глух. Главная за WAF -> идёт через браузер, но robots/карта отдаются обычным запросом: глубину даёт sitemap (300 кандидатов)"},"dialog.kz":{search:null,feed:"https://dialog.kz/?page={page}",browserSearch:!0,external:!1,note:"главная через браузер; пагинация ленты ?page=N (0,1,2…). Браузер-поиск отрабатывает; внешний мёртв"},"ratel.kz":{search:"https://ratel.kz/search?q={q}",external:!1,note:"РАБОЧИЙ поиск — /search?q= (проверено пользователем 2 сентября 2026). Прежняя разведка смотрела /?s=, а это ЛЕНТА: 78 ссылок и на слово, и на мусор. Дата лежит ТЕКСТОМ в div.post_news__date («Пятница, 04 Июл 2025, 12:00») — ни <time>, ни разметки"},"weproject.media":{browserSearch:!0,external:!1,note:"поиск по форме детектится; внешний мёртв, браузер-поиск подхватывает"},"esquire.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"sn.kz":{browserSearch:!0,note:"HTTP-поиск (native) слабый (24 ссылки); браузер-поиск усиливает"},"zonakz.net":{dead:!0,note:"издание закрыто в 2025 году: сайт открывается, новых материалов нет (проверено пользователем 2 сентября 2026)"},"diapazon.kz":{search:null,feed:"https://diapazon.kz/article/more-list?category=0&count=30&offset={off30}&viewType=main",feedFirst:"https://diapazon.kz/all-news",browserSearch:!0,external:!1,note:"по уликам: /?s= отдаёт ЛЕНТУ (90 ссылок и на слово, и на мусор, слова в выдаче нет). HTTP-поиска нет; браузер-поиск снимает настоящие статьи. Статьи без разметки (og:type=website) — берутся по виду адреса. Ни RSS, ни карты сайта нет: глубину даёт AJAX-лента article/more-list?offset={off30} (шаг 30, 20 страниц = 600 ссылок за прогон). feedFirst = статика /all-news как первая страница."},"arasha.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"democrat.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"malim.kz":{browserSearch:!0,note:"поиск по форме — лучший канал (32 совпадения); браузер-поиск как страховка"},"astanatv.kz":{search:null,browserSearch:!1,external:!1,note:"по уликам: /kz/search/?q= отдаёт ОБЫЧНУЮ ЛЕНТУ, а не результаты — страницы для «Тоқаев» и «Токаев» побайтово одинаковы, слова в выдаче нет ни разу. Рабочего HTTP-поиска нет; всё даёт sitemap-глубина (19-21 материал)"},"politico.kz":{search:["https://politico.kz/search?q_str={q}","https://politico.kz/ru/search?q_str={q}"],browserSearch:!0,note:"поиск ЕСТЬ: q_str, ДВЕ версии — казахская в корне и русская /ru/ (материалы разные). Браузер-поиск оставлен: он единственный тяжёлый канал, где тут что-то ловилось"},"aikyn.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск по форме даёт нули; браузер-поиск живой; внешний мёртв"},"astana-akshamy.kz":{browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку; браузер-поиск подхватывает"},"aqmeshit.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"yujanka.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"qazaqstan.tv":{search:"https://qazaqstan.tv/search?query={q}",external:!1,note:"поиск ЕСТЬ и фильтрует (проверено вручную: «Тоқаев бойынша іздеу нәтижелері», вкладка Жаңалықтар + даты в карточках). Автодетект раньше цеплял не ту форму и тянул всю ленту. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ), иначе нули"},"qmonitor.kz":{search:"https://qmonitor.kz/search/?query={q}",external:!1,note:"поиск найден вручную; автодетект форму не видел"},"the-steppe.com":{search:"https://the-steppe.com/search?s={q}",external:!1,note:"поиск найден вручную. Ноль по «Токаев» — норма: издание про него не пишет (проверено), это не поломка канала"},"dknews.kz":{search:null,render:"https://dknews.kz/ru/gsearch?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (/ru/gsearch + #gsc.*) — из HTTP не берётся, результаты рисует JS; поднимаем рендером, как orda.kz"},"spik.kz":{search:null,feed:"https://spik.kz/lastnews/page/{page}/",feedFirst:"https://spik.kz/lastnews/",browserSearch:!1,external:!1,note:"поиска на сайте НЕТ (проверено вручную) — только лента /lastnews/ с пагинацией /page/N/; sitemap мелкий (14 адресов), поэтому глубину даёт лента"},"factcheck.kz":{browserSearch:!1,external:!1,note:"WordPress-поиск детектится (82 ссылки), по слову нули; формы нет; внешний мёртв"},"petropavlovsk.news":{dead:!0,note:"сайт мёртв (проверено пользователем 2 сентября 2026)"},"atamekenbusiness.kz":{dead:!0,note:"сайт телеканала, новостной ценности для мониторинга нет"},"today.kz":{dead:!0,note:"сайт мёртв (не обновляется)"},"taraz24.kz":{dead:!0,note:"сайт мёртв"},"shymkenttv.kz":{dead:!0,note:"сайт мёртв"},"altaynews.kz":{dead:!0,note:"сайт мёртв"},"atyraupress.kz":{dead:!0,note:"сайт мёртв (главная отдаёт HTTP 403)"},"timekz.kz":{dead:!0,note:"сайт мёртв"},"kostanaynews.kz":{dead:!0,note:"сайт мёртв"},"ontustiknews.kz":{dead:!0,note:"сайт мёртв"},"aqzhayik.kz":{dead:!0,note:"сайт мёртв"},"alashainasy.kz":{dead:!0,note:"издание закрыто"},"masa.media":{dead:!0,note:"сайт нежизнеспособен: все каналы мертвы, обновлений нет"},"azattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"radioazattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"kokshetau.asia":{browserSearch:!1,external:!1,noRender:!0,note:"WordPress-поиск таймаутит; render = 0; браузер-поиск ничего не даёт; очень медленный (210-420 с за прогон, wp-api порой не успевает стартовать) — вне списка предустановленных"},"ekaraganda.kz":{external:!1,noRender:!0,note:"поиск по форме детектится (25 ссылок), по слову нули; render капчит; внешний мёртв"},"uralskweek.kz":{browserSearch:!1,external:!1,noRender:!0,note:"поиск `?s=` РАБОТАЕТ (проверено уликами: по мусорному слову ноль совпадений); статьи без разметки дат — день берётся текстом из блока и из адреса; сайт МЕДЛЕННЫЙ, бюджеты каналов упираются во время; render = 0; внешний мёртв"},"365info.kz":{external:!1,note:"видимый поиск — виджет Google (#gsc.q=), обычным запросом не берётся и в пресет не годится; материал даёт wp-api (16 за август). WordPress-поиск + render детектятся сами; внешний мёртв"},"almaty.tv":{external:!1,note:"HTTP-поиск (native) детектится сам; внешний мёртв"},"mgorod.kz":{external:!1,note:"HTTP-поиск (native) отрабатывает; внешний мёртв"},"aktobetimes.kz":{external:!1,note:"RSS + автопоиск; внешний мёртв"},"egemen.kz":{search:"https://egemen.kz/search?q={q}",external:!1,note:"РАБОЧИЙ поиск — /search?q= (нашёл пользователь 3 сентября 2026, проверено на слове «Бектенов»). Автодетект его не увидел, хотя /search?q= есть в списке проб: сайт казахоязычный, а проба идёт словом «президент». Прежняя заметка «HTTP-поиска нет» была выводом автодетекта, а не фактом. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"turkystan.kz":{note:"HTTP-поиск (native) отрабатывает; браузер-поиск память ещё не разобрала"}};i(Ms,"lookupKnown")});function Fa(e){typeof e=="function"&&(ir=e)}function Ua(e){e&&typeof e.get=="function"&&typeof e.set=="function"&&(St=e)}function Wa(e){typeof e=="function"&&(sn=e)}function Ka(e){typeof e=="function"&&(Ga=e)}async function Bt(e,{groups:t,exclude:n,fromD:r,toD:s,originHost:o,channelLabel:a,deadline:c,maxFetch:u=80,browserFallback:l=!1,browserBudget:h=null,diag:f=null,tally:d=null,pick:p=null,have:m=null}){let g=i(_=>{d&&(d[_]=(d[_]||0)+1)},"tick"),b=i(_=>{if(!d)return;let z=[];try{z=new URL(_).pathname.toLowerCase().split("/").filter(Boolean)}catch{return}let $=z.find(ie=>!/^[a-z]{2}$/.test(ie)&&!/^\d+$/.test(ie));$&&((d.noDateWhere||(d.noDateWhere={}))[$]=(d.noDateWhere[$]||0)+1)},"tickSection"),x=an(t),w=n||[],M=l?1:4,v=Symbol("добрать браузером"),T=i(()=>l||h&&h.left>0,"canBrowser"),k=3,S=typeof process<"u"&&process.env&&Number(process.env.MC_SLOW_GAP_MS)||400,R=25,E=d&&(d._slow||(d._slow={}))||{};E.resets===void 0&&Object.assign(E,{resets:0,on:!1,saved:0,tried:0,chain:null,why:{}});let W=i(_=>{let z=(E.chain||Promise.resolve()).then(()=>zs(S)).then(_);return E.chain=z.then(()=>{},()=>{}),z},"chained"),q=i(_=>E.on?W(_):_(),"paced"),P=i((_,z)=>{if(js(_))return g("listing"),z&&(z.verdict="раздел сайта, не статья (видно по адресу)",f.push(z)),!0;if(Ma(_))return g("listing"),z&&(z.verdict="это файл, а не страница (видно по адресу)",f.push(z)),!0;let $=ue(St.get(_));if($&&!Be($,r,s))return g("staleDate"),z&&(z.verdict="дата вне периода (из памяти дат)",z.date=St.get(_),z.parsed=Ke($),f.push(z)),!0;if(!$&&(r||s)){let ie=ct(_);if(ie&&(r&&+ie<+r-864e5||s&&+ie>+s+864e5))return g("urlDateOut"),z&&(z.verdict="дата вне периода (видно по адресу)",z.parsed=Ke(ie),f.push(z)),!0}return!1},"cheapSkip"),G=i(async(_,z)=>{let $=f?{url:_,channel:a}:null;if(c&&Date.now()>c)return g("late"),$&&($.verdict="не успели (бюджет времени)",f.push($)),null;let ie=[],ce=z?null:await q(()=>lr(_,ie)),ke=!ce&&!z?ru(ie[0]):null;if(ke&&(E.resets++,E.why[ke]=(E.why[ke]||0)+1,!E.on&&E.resets>=k&&(E.on=!0),E.tried<R&&(E.tried++,ie.length=0,ce=await W(()=>lr(_,ie)),ce&&E.saved++)),!ce&&z&&T()){h&&h.left--;let he=await sn(_);ce=he&&he.ok?he.html:null,ce&&g("viaBrowser")}if(!ce&&!z&&T())return v;if(!ce)return g("noOpen"),d&&ie[0]&&(d.noOpenWhy=d.noOpenWhy||{},d.noOpenWhy[ie[0]]=(d.noOpenWhy[ie[0]]||0)+1),$&&($.verdict="не открылась"+(ie[0]?" ("+ie[0]+")":" (WAF/таймаут/404)"),f.push($)),null;let Y=As(ce,_,p&&p.hint);if(!Y)return!$a(ce)&&!$s(_)?(g("notArticle"),$&&($.verdict="не статья (меню/категория/оболочка), даты на ней тоже нет",f.push($)),null):(g("noDate"),b(_),$&&($.verdict="дата не найдена на странице",f.push($)),null);if(p&&Y.dateVia&&(p.seen[Y.dateVia]=(p.seen[Y.dateVia]||0)+1),!Y.isArticle&&!$s(_))return g("notArticle"),$&&($.verdict="не статья (меню/категория/оболочка)",$.title=Y.title||"",f.push($)),null;if(Sa(Y.title))return g("notArticle"),$&&($.verdict="подборка по теме, а не материал",$.title=Y.title||"",f.push($)),null;if(Y.date&&St.set(_,Y.date),Y._hay=((Y.title||"")+" "+(Y.description||"")+" "+(Y.body||"")).toLowerCase(),$){let he=ue(Y.date);$.title=(Y.title||"").slice(0,80),$.date=Y.date||"",$.parsed=Ke(he),$.inRange=Be(Y.date,r,s),$.hasKw=Ge(Y._hay,t),$.hasExclude=w.length?Ge(Y._hay,w):!1,$.verdict=$.parsed?$.inRange?$.hasExclude?"минус-слово":$.hasKw?"ВЗЯТА":"ключа нет в тексте":"дата вне периода":"дата не распознана",f.push($)}return Y},"handle"),K=[],Q=[];for(let _ of e){let z=f?{url:_,channel:a}:null;if(m&&m.has(be(_))){g("dupe"),z&&(z.verdict="её уже принёс другой канал — второй раз не качаем",f.push(z)),Q.push(_);continue}P(_,z)||K.push(_)}if(K.length>u){for(let _=u;_<K.length;_++)g("overBudget"),f&&f.push({url:K[_],channel:a,verdict:"не влезла в бюджет канала"});e=K.slice(0,u)}else e=K;let ye=await dr(e,M,_=>G(_,!1)),xe=ye.filter(_=>_!==v),$e=e.filter((_,z)=>ye[z]===v);if($e.length)for(let _ of await dr($e,1,z=>G(z,!0)))_!==v&&xe.push(_);let C=null,B=[];for(let _ of xe){if(!_)continue;let z=ue(_.date);if(z&&(!C||z>C)&&(C=z),!Be(_.date,r,s)){g("outOfPeriod");continue}if(w.length&&Ge(_._hay,w)){g("excluded");continue}if(!Ge(_._hay,t)){g("noKw");continue}g("taken");let $=Ge((_.title||"").toLowerCase(),t)?"title":"body",ie=Ft((_.description||"")+" "+(_.body||"")+" "+(_.title||""),_.title,x);B.push({source:o,title:_.title,url:_.url,date:_.date,channel:a,match:$,snippet:ie})}for(let _ of Q)B.push({url:_,channel:a,_dupe:!0});return{rows:B,newest:C}}function ja(e){if(!e)return!1;let t=String(e).slice(0,4e3);return/<title[^>]*>\s*(just a moment|attention required|подожд|один момент)/i.test(t)||/id="(challenge-running|cf-challenge-running|cf-please-wait|challenge-form|turnstile-wrapper)"/i.test(t)||/cf-browser-verification|_cf_chl_opt|\/cdn-cgi\/challenge-platform/i.test(t)?!0:/just a moment|checking your browser|verifying you are human|проверка браузера/i.test(t)&&String(e).length<6e4}async function Xl(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),Va);try{let s=await fetch(e,{method:"POST",redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",...pr},body:t,signal:n.signal});return s.ok?await s.text():null}catch{return null}finally{clearTimeout(r)}}function Zl(e){let t=i(n=>String(n).padStart(2,"0"),"p");return t(e.getDate())+"."+t(e.getMonth()+1)+"."+e.getFullYear()}async function Ql(e,t=2){for(let n=0;;n++){let r=new AbortController,s=setTimeout(()=>r.abort(),Va);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...pr},signal:r.signal});if((o.status===429||o.status===503)&&n<t){clearTimeout(s),await zs(1e3*(n+1));continue}if(!o.ok)throw new Error("HTTP "+o.status);return await o.text()}finally{clearTimeout(s)}}}async function lt(e){try{return await Ql(e)}catch{return null}}async function lr(e,t){let n=await Es(e);return!n.ok&&t&&t.push(n.err?n.err:"HTTP "+n.status),n.ok?n.text:null}function eu(e,t){let n=ue(e),r=ue(t);return!n||!r?!1:Ke(n)===Ke(r)}function Ns(e){if(!e)return"неизвестная ошибка";if(e.name==="AbortError")return"таймаут";let t=e;for(let s=0;s<5&&t&&t.cause&&typeof t.cause=="object";s++)t=t.cause;let n=String(t&&t.code||e&&e.code||""),r=String(t&&t.message||e&&e.message||e);return Oa[n]?Oa[n]+" ("+n+")":n||(/certificat|ssl|tls/i.test(r)?"ошибка TLS: "+r.slice(0,80):r.slice(0,120))}function ru(e){return tu(e)?"рвал соединение":nu(e)?"отвечал «перегружен»":null}async function cr(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...pr},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Ns(r)}}finally{clearTimeout(n)}}async function Es(e){let t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{let r=await fetch(e,{redirect:"follow",credentials:"include",headers:{...pr},signal:t.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(r){return{ok:!1,status:0,err:Ns(r)}}finally{clearTimeout(n)}}async function ou(e,t){let n=new AbortController,r=setTimeout(()=>n.abort(),2e4),s={...su};t&&(s.Referer=t);try{let o=await fetch(e,{redirect:"follow",credentials:"include",headers:s,signal:n.signal});return{ok:o.ok,status:o.status,text:o.ok?await o.text():""}}catch(o){return{ok:!1,status:0,err:Ns(o)}}finally{clearTimeout(r)}}function Fe(e){try{return new URL(e).host.replace(/^www\./,"")}catch{return e}}function js(e){let t;try{t=new URL(e)}catch{return!1}if(/[?&]page=\d+/i.test(t.search))return!0;let n=t.pathname.toLowerCase().replace(/\/+$/,"").split("/").filter(Boolean);if(n.some(o=>/^(cat|cats|tag|tags|category|categories|rubric|rubrics|topic|topics|section|sections|archive|archives|author|authors|search|label|labels|feed|rss|page|person|persons|people|persona|personalii|theme|themes|tema|temy)$/.test(o))||(()=>{let o=n.findIndex(l=>/^(19|20)\d\d$/.test(l));if(o<0)return 0;let a=n.slice(o);if(a.length<2||a.length>3)return 0;let c=/^(0?[1-9]|1[0-2])$/.test(a[1]||""),u=a.length<3||/^(0?[1-9]|[12]\d|3[01])$/.test(a[2]);return c&&u?a.length:0})())return!0;let s=n[n.length-1]||"";return!!(n.length<=2&&s&&!/[-_]/.test(s)&&!/\d/.test(s)&&s.length<=16)}function ar(e){let t=String(e||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|sections?|pages?|weather|pogoda|search|ingredients?|images?|img|photos?|gallery|video|media|podcasts?)\b/i.test(t.replace(/[-_.]/g," "))}function au(e){let t=/(20\d{2})[^\d]?(0[1-9]|1[0-2])?/,n=String(e||"");try{n=new URL(n,"https://x").pathname}catch{}let s=n.slice(n.lastIndexOf("/")+1).match(t)||n.match(t);return s?{y:+s[1],mo:s[2]?+s[2]:0}:null}function iu(e,t){let n=e&&t?+t-+e:0,r=n>0?Math.max(1,Math.round(n/864e5)):0;return r?r<=2?{days:r,maxCands:300,budgetMs:9e4}:r<=6?{days:r,maxCands:600,budgetMs:18e4}:{days:r,maxCands:1e3,budgetMs:3e5}:{days:0,maxCands:300,budgetMs:9e4}}function En(e){try{let t=new URL(e),n=[];return t.searchParams.forEach((r,s)=>{/^(from|utm_|_openstat|ysclid|fbclid|gclid|yclid)/i.test(s)&&n.push(s)}),n.forEach(r=>t.searchParams.delete(r)),t.hash="",t.toString()}catch{return String(e||"").split("#")[0]}}function cu(e){return e.length>=2&&/[A-Za-zА-Яа-яЁё]/.test(e)&&e===e.toUpperCase()&&e!==e.toLowerCase()}function lu(e){let t=["а","я","и","ы","е","о","у","ю","й","ь"];for(let n of t)if(e.length-1>=4&&e.endsWith(n))return e.slice(0,-1);return e}function uu(e,t){let n=cu(e),r=e.toLowerCase();return t&&!n&&r.length>=5&&(r=lu(r)),{text:r,whole:n}}function Tt(e,t){return(e||"").split(/[,;\n]+/).map(n=>n.trim()).filter(Boolean).map(n=>{let r=n.match(/^["'«](.+)["'»]$/);return r?{words:[{text:r[1].toLowerCase().trim(),whole:!1}]}:{words:n.split(/\s+/).filter(Boolean).map(s=>uu(s,t))}})}function du(e,t){if(!t.text)return!1;if(!t.whole)return e.includes(t.text);if(t._re===void 0)try{t._re=new RegExp("(?<![\\p{L}\\p{N}])"+t.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}\\p{N}])","u")}catch{t._re=null}return t._re?t._re.test(e):(" "+e+" ").includes(" "+t.text+" ")}function Ge(e,t){return t.length?t.some(n=>n.words.every(r=>du(e,r))):!0}function an(e){return e.flatMap(t=>t.words.map(n=>n.text))}function on(e,t,n=150){let r=(e||"").replace(/\s+/g," ").trim();if(!r)return"";let s=r.toLowerCase(),o=-1;for(let u of t){let l=s.indexOf(u);l>=0&&(o<0||l<o)&&(o=l)}if(o<0)return r.slice(0,n);let a=Math.max(0,o-60),c=Math.min(r.length,o+90);return(a>0?"…":"")+r.slice(a,c).trim()+(c<r.length?"…":"")}function _s(e){let t=String(e&&e.snippet||"").trim(),n=String(e&&e.title||"").trim();return n?t?ur(t).includes(ur(n))?t:t+" "+n:n:t}function Ft(e,t,n,r=150){let s=on(e,n,r),o=ur(s),a=ur(t);return!o||o===a||a&&a.includes(o)||a&&o.startsWith(a)&&o.length-a.length<pu?"":s}function hu(e,t){let n=String(e||"");return n=n.split(/\s+https?:/i)[0],n=n.replace(/\s*[›»].*$/,""),n=n.replace(/\s*\|\s*[^|]*$/,""),t&&(n=n.replace(new RegExp("\\s*[-–—]\\s*"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*$","i"),"")),n.replace(/\s+/g," ").trim()}function Ia(e,t){let n=(e||"").toLowerCase().replace(/\s+/g," "),r=n.search(/\s[—–·]\s/);r>=0&&r<90&&(n=n.slice(r+3));let s=-1,o="";for(let c of t){if(!c)continue;let u=n.indexOf(c);u>=0&&(s<0||u<s)&&(s=u,o=c)}if(s<0)return{b:"",a:""};let a=i(c=>c.replace(/[^\p{L}\p{N} ]+/gu," ").replace(/\s+/g," ").trim(),"norm");return{b:a(n.slice(Math.max(0,s-40),s)),a:a(n.slice(s+o.length,s+o.length+40))}}function fu(e){let t=String(e).trim();/^https?:\/\//i.test(t)||(t="https://"+t);try{return new URL(t).origin}catch{return null}}function mu(e){try{let t=new URL(e);return t.host=t.host.startsWith("www.")?t.host.slice(4):"www."+t.host,t.origin}catch{return null}}function gu(e,t){let n=String(e||"");try{let r=new URL(n,"https://www.bing.com");if(/\/ck\/a/i.test(r.pathname)){let o=r.searchParams.get("u")||"";for(/^a1/i.test(o)&&(o=o.slice(2)),o=o.replace(/-/g,"+").replace(/_/g,"/");o.length%4;)o+="=";try{let a=typeof atob=="function"?atob(o):Buffer.from(o,"base64").toString("binary");/^https?:\/\//i.test(a)&&(n=a)}catch{}}let s=new URL(n).host.replace(/^www\./,"");if(s===t||s.endsWith("."+t))return n.split("#")[0]}catch{}return null}function Ja(){rn=0,Dn=0,Ps=!1}async function wu(e,t){if(Ps)return{ok:!1,status:0,err:"ddg: пропущен (частота ограничена)",gaveUp:!0};let n=Date.now();rn<n&&(rn=n);let r=rn;rn+=2500,r-n>0&&await bu(r-n);let s=await ou(e,t),o=s.text||"";return!s.ok||/anomaly|are you a robot|too many requests|captcha/i.test(o)||o.length<22*1024&&!/result__a/i.test(o)?(Dn++,rn=Date.now()+Math.min(Dn*4e3,2e4),Dn>=4&&(Ps=!0)):Dn=0,s}function yu(e){try{let t=String(e).replace(/&amp;/g,"&"),n=t.match(/[?&]uddg=([^&]+)/i);if(n)try{t=decodeURIComponent(n[1])}catch{}return t.startsWith("//")&&(t="https:"+t),t}catch{return e}}function xu(e,t){let n=String(e),r=[],s=new Set,o=i(u=>Xe(String(u).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()),"clean"),a=i((u,l,h)=>{let f=yu(u),d;try{d=new URL(f).host.replace(/^www\./,"")}catch{return}if(d!==t&&!d.endsWith("."+t))return;let p=f.split("#")[0];s.has(p)||(s.add(p),r.push({url:p,title:l||"",snippet:h||""}))},"push"),c=n.split(/class="result__a"/i).slice(1);for(let u of c){let l=u.match(/href="([^"]+)"/i);if(!l)continue;let h=u.match(/>([\s\S]*?)<\/a>/i);a(l[1],h?o(h[1]):"")}if(!r.length){for(let l of n.match(/uddg=[^"&\s]+/gi)||[])a("//x?"+l);let u=new RegExp("https?://(?:www\\.)?"+t.replace(/\./g,"\\.")+`/[^"'\\s<>]+`,"gi");for(let l of n.match(u)||[])a(l)}return r}async function dr(e,t,n){let r=[],s=0;async function o(){for(;s<e.length;){let a=s++;try{r[a]=await n(e[a])}catch{r[a]=null}}}return i(o,"worker"),await Promise.all(Array.from({length:Math.min(t,e.length||1)},o)),r}function Xa(e,t){let n=/^https:/i.test(String(t||"")),r=[];for(let s of String(e||"").split(`
`)){if(!/^\s*sitemap:/i.test(s))continue;let o=s.replace(/^\s*sitemap:/i,"").trim();o&&(n&&/^http:\/\//i.test(o)&&r.push(o.replace(/^http:/i,"https:")),r.push(o))}return[...new Set(r)]}function vu(e){let t=e.match(/<div[^>]+id=["']webkit-xml-viewer-source-xml["'][^>]*>([\s\S]*?)<\/div>/i);return t?t[1]:e}function ku(e){return async t=>{let n=await lt(t);if(n)return n;if(!e)return null;let r=await sn(t);return!r||!r.ok||!r.html?null:vu(r.html)}}async function Su(e,t,n=lt){let r=Xa(t,e),s=[...new Set([...r.filter(o=>/news|last-news|google|yandex|turbo/i.test(o)),e+"/news-sitemap.xml",e+"/google-news-sitemap.xml",e+"/sitemap-google.xml",e+"/sitemap-yandex.xml",e+"/sitemap-news.xml"])];for(let o of s){let a=await n(o);if(!a)continue;let c=await Za(a,0);if(c.length)return c}return[]}async function Tu(e,t,n,r,s){let{maxMaps:o=40,maxCands:a=300,maxCollect:c=Math.max(a*10,2e3),deadline:u,fetchText:l=lt,blindOk:h=!0,slugHints:f=[],collectStats:d={}}=s||{},p=n?+n:-1/0,m=r?+r:1/0,g=0,b=i(C=>{let B=ue(St.get(C));return!B||Be(B,n,r)?!1:(g++,!0)},"staleByMemory"),x=Number.isFinite(m)?m+21*864e5:1/0,w=Xa(t,e),M=[...new Set([...w,e+"/sitemap.xml",e+"/sitemap_index.xml",e+"/sitemap-index.xml",e+"/sitemapindex.xml",e+"/sitemap/sitemap.xml"])].sort((C,B)=>(ar(C)?1:0)-(ar(B)?1:0)),v=[],T=[],k=new Set,S=0,R=i(C=>{let B=C?ue(C):null,_=B?+B:NaN;return Number.isFinite(_)?_>=p&&_<=x:!0},"childInRange");async function E(C,B){if(S>=o||v.length>=c||u&&Date.now()>u||k.has(C))return;k.add(C);let _=await l(C);if(!_)return;if(S++,/<sitemapindex/i.test(_)&&B<3){let ce=i(Se=>au(Se.loc),"ymOf"),ke=i(Se=>{if(Se.lastmod)return String(Se.lastmod);let Ne=ce(Se);return Ne?Ne.y+"-"+String(Ne.mo).padStart(2,"0"):""},"keyOf"),Y=n?n.getFullYear():-1/0,he=r?r.getFullYear():1/0,Ce=i(Se=>{if(Se.lastmod)return R(Se.lastmod);let Ne=ce(Se);return Ne?Ne.y>=Y&&Ne.y<=he:!0},"kidOk"),Ae=Da(_).filter(Ce).sort((Se,Ne)=>ke(Ne).localeCompare(ke(Se))).sort((Se,Ne)=>(ar(Se.loc)?1:0)-(ar(Ne.loc)?1:0));if(Ae.length>1&&Ae.every(Se=>!ke(Se))){let Se=Rs(Ae);Ae.length=0,Ae.push(...Se)}for(let Se of Ae)if(await E(new URL(Se.loc,C).href,B+1),S>=o||v.length>=c||u&&Date.now()>u)break;return}let z=[],$=[],ie=0;for(let ce of Ca(_)){let ke;try{ke=new URL(ce.loc,C).href}catch{continue}if(js(ke)||b(En(ke)))continue;let Y=ce.lastmod?+ue(ce.lastmod):NaN;if(!Number.isFinite(Y))try{if(new URL(ke).pathname==="/")continue}catch{}if(Number.isFinite(Y)){if(Y<p||Y>m)continue;z.push({loc:En(ke),lm:ce.lastmod});continue}let he=ct(ke);if(he){ie++;let Ce=+he;if(Ce<p||Ce>m)continue}$.push({loc:En(ke),lm:""})}if(!z.length&&!ie&&$.length){for(let ce of Rs($)){if(T.length>=c)break;T.push(ce)}return}for(let ce of z)if(v.push(ce),v.length>=c)return;for(let ce of Rs($))if(v.push(ce),v.length>=c)return}i(E,"walk");for(let C of M)if(await E(C,0),v.length>=c||S>=o)break;if(h)for(let C of T){if(v.length>=c)break;v.push(C)}let W=new Map;for(let C of v)W.has(C.loc)||W.set(C.loc,C);let q=[...W.values()].sort((C,B)=>String(B.lm).localeCompare(String(C.lm)));g&&(d.stale=g),d.pool=q.length,d.capped=q.length>=c,d.roots=M.length,d.maps=S;let P=i(C=>{let B=C.lm&&ue(C.lm)||ct(C.loc);return B&&Ke(B)||""},"dayOf"),G=i(C=>f.length>0&&f.some(B=>C.loc.toLowerCase().includes(B)),"hinted"),K=i(C=>{d.nodate=C.filter(_=>!P(_)).length;let B=C.filter(G).length;return B?d.hinted=B:delete d.hinted,C},"finish");if(q.length<=a)return K(q);let Q=new Map;for(let C of q){let B=P(C);Q.has(B)||Q.set(B,[]),Q.get(B).push(C)}for(let C of Q.values())C.sort((B,_)=>(G(_)?1:0)-(G(B)?1:0));let ye=[...Q.keys()].filter(Boolean).sort().reverse(),xe=Q.get("")||[],$e=[];for(let C=0;$e.length<a;C++){let B=0;for(let _ of ye){let z=Q.get(_);if(C<z.length&&($e.push(z[C]),B++,$e.length>=a))break}if(!B)break}for(let C of xe){if($e.length>=a)break;$e.push(C)}return K($e)}async function Za(e,t){let n=Ea(e).filter(r=>r.title&&r.date);if(n.length)return n;if(t<1&&/<sitemapindex/i.test(e)){let r=(e.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[]).map(s=>({loc:(s.match(/<loc>([^<]+)<\/loc>/)||[])[1]?.trim(),lm:(s.match(/<lastmod>([^<]+)<\/lastmod>/)||[])[1]||""})).filter(s=>s.loc);r.sort((s,o)=>String(o.lm).localeCompare(String(s.lm)));for(let s of r.slice(0,5)){let o=await lt(s.loc);if(o&&(n.push(...await Za(o,t+1)),n.length>500))break}}return n}function Qa(e,t){let n=e.match(/<form\b[\s\S]*?<\/form>/gi)||[],r=null,s=0;for(let a of n){if(/method\s*=\s*["']post["']/i.test(a))continue;let c=(a.match(/\baction\s*=\s*["']([^"']*)["']/i)||[])[1]||"",u=(a.match(/class\s*=\s*["']([^"']*)["']/i)||[])[1]||"",l=a.match(/<input\b[^>]*>/gi)||[],h=null,f=-1,d=[];for(let m of l){let g=((m.match(/\btype\s*=\s*["']([^"']+)["']/i)||[])[1]||"text").toLowerCase(),b=(m.match(/\bname\s*=\s*["']([^"']+)["']/i)||[])[1];if(!b)continue;if(g==="hidden"){d.push([b,(m.match(/\bvalue\s*=\s*["']([^"']*)["']/i)||[])[1]||""]);continue}if(/submit|button|checkbox|radio|image|file/.test(g))continue;let x=0;g==="search"&&(x+=3),/^(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)$/i.test(b)?x+=2:/search|query|поиск|іздеу/i.test(b)&&(x+=1),x>f&&(f=x,h=b)}if(!h||f<=0)continue;let p=f;/role\s*=\s*["']search["']/i.test(a)&&(p+=2),/search|query|поиск|іздеу/i.test(c)&&(p+=2),/search|query|поиск/i.test(u)&&(p+=1),p>s&&(s=p,r={action:c,qname:h,hidden:d})}if(!r)return null;let o;try{o=new URL(r.action||"/",t)}catch{return null}for(let[a,c]of r.hidden)if(c&&a!==r.qname)try{o.searchParams.set(a,c)}catch{}return o.searchParams.set(r.qname,"__MCQ__"),o.toString().replace("__MCQ__","{q}")}function qa(e,t,n,r){if(!e)return{ok:!1,why:"нет ответа"};let s=new Set(Rn(e,n));if(s.size===0)return{ok:!1,realN:0,junkN:0,uniqueN:0,why:"ссылок-статей нет (оболочка/JS-выдача)"};let o=t?new Set(Rn(t,n)):new Set,a=0;for(let u of s)o.has(u)||a++;let c={realN:s.size,junkN:o.size,uniqueN:a};if(r){let u=String(r).toLowerCase().split(/\s+/).filter(Boolean)[0]||"",l=u.length>5?u.slice(0,Math.max(5,u.length-2)):u;if(l&&!e.toLowerCase().includes(l))return{...c,ok:!1,why:"искомого слова нет в выдаче (это лента, а не результаты)"}}return o.size===0?{...c,ok:!0,why:"мусорный запрос пуст"}:a>=2?{...c,ok:!0,why:"выдача отличается от мусорной"}:{...c,ok:!1,why:"та же страница, что и на мусорный запрос (параметр игнорируется)"}}async function Cs(e,t,n){let r=encodeURIComponent;if(n){let u=[].concat(n).filter(p=>typeof p=="string"&&p),l=i(p=>{let m=p.indexOf("#");return m>=0&&p.indexOf("{q}")>m},"hashOnly"),h=u.filter(l);if(u=u.filter(p=>!l(p)),!u.length)return h.length?{kind:"none",warn:"ключ в шаблоне стоит после «#» — такой адрес серверу не передаётся, выдачу рисует скрипт в браузере (нужен render)"}:null;let f=i(p=>(m,g)=>p.replace(/\{q\}/g,r(m)).replace(/\{page\}/g,g).replace(/\{off(\d+)\}/g,(b,x)=>(g-1)*+x).replace(/\{wpage\}/g,g<=1?"":`page/${g}/`).replace(/\{bpage\}/g,g<=1?"":`pagen${g}/`),"mk"),d=u.map(f);return{kind:"override",hasPage:u.some(p=>/\{page\}|\{off\d+\}|\{wpage\}|\{bpage\}/.test(p)),builds:d,build:d[0]}}let s=Qa(t,e);if(s){let u=await lt(s.replace("{q}",r("президент"))),l=await lt(s.replace("{q}",r("qwszxcvnonsense12345")));if(qa(u,l,e,"президент").ok){let h=s.includes("?")?"&":"?";return{kind:"form",hasPage:!0,build:i((f,d)=>d<=1?s.replace("{q}",r(f)):s.replace("{q}",r(f))+h+"page="+d,"build")}}}if(va(t))return{kind:"wordpress",hasPage:!0,build:i((u,l)=>l<=1?`${e}/?s=${r(u)}`:`${e}/page/${l}/?s=${r(u)}`,"build")};let o=["/search/?text=","/search/?q=","/search/?search_text=","/search/?query=","/search?text=","/search?q=","/search?search_text=","/search?query=","/search_results/?q=","/search_results/?text=","/results/?q=","/?s=","/?q=","/?query=","/?search_text=","/?searchword="],a=[];for(let u of String(t||"").matchAll(/href="\/(ru|kz|kk|en)\//g))a.includes("/"+u[1])||a.push("/"+u[1]);if(a.length)for(let u of a.slice(0,2))for(let l of["/search/?q=","/search/?text=","/search/?query=","/search?q="])o.push(u+l);let c=Date.now();for(let u of o){if(Date.now()-c>2e4)break;let l=await lt(e+u+r("президент")),h=await lt(e+u+r("qwszxcvnonsense12345"));if(qa(l,h,e,"президент").ok){let f=e+u,d=u.includes("?")?"&":"?";return{kind:"native",hasPage:!0,build:i((p,m)=>m<=1?f+r(p):`${f}${r(p)}${d}page=${m}`,"build")}}}return null}function $u(e){let t=String(e||"").trim();if(/^@[A-Za-z0-9_]{4,}$/.test(t))return t.slice(1);let n=t.match(/(?:t|telegram)\.me\/(?:s\/)?(@?[A-Za-z0-9_]{4,})/i);if(n){let r=n[1].replace(/^@/,"");if(!/^(s|joinchat|addstickers|addemoji|proxy|share|iv|setlanguage|bg)$/i.test(r))return r}return null}function Au(e,t){let n=[],r=/data-post="[^"/]+\/(\d+)"([\s\S]*?)(?=data-post="|$)/g,s;for(;s=r.exec(e);){let o=+s[1],a=s[2],c=a.match(/<time[^>]+datetime="([^"]+)"/),u=a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div class="tgme_widget_message_(?:footer|reply|info)|<\/div>)/)||a.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/),l=u?u[1]:"";l=l.replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,""),l=Xe(l).replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim(),o&&c&&n.push({id:o,url:"https://t.me/"+t+"/"+o,date:c[1],text:l})}return n}async function Ru(e,t){let n=t.morph!==!1,r=Tt(t.keyword,n),s=Tt(t.exclude||"",n),o=an(r),a=i(k=>Ge((k||"").toLowerCase(),r),"hasKw"),c=i(k=>s.length>0&&Ge((k||"").toLowerCase(),s),"hasExclude"),u=nn(t.from),l=An(t.to),h=Mu+e,f=[],d=[],p=new Set,m=45e3,g=80,b=null,x=!1,w=0,M=0,v=Date.now(),T="";for(;!x&&w<g&&Date.now()-v<m;){w++;let k=b?h+"?before="+b:h,S=await Es(k);if(!S.ok&&(S.status===429||S.status>=500)&&(await zs(1500),S=await Es(k)),!S.ok){let q=S.status?"HTTP "+S.status:S.err||"не ответил";T=w===1?"канал не открылся ("+q+") — частный/не существует?":"лента оборвалась на "+w+"-й странице ("+q+")";break}let R=Au(S.text,e);if(!R.length){T=w===1?"постов не видно (частный канал? нужен t.me/s/)":"лента кончилась";break}M+=R.length;let E=null,W=null;for(let q of R){let P=ue(q.date);if(P&&(!E||P<E)&&(E=P),(W===null||q.id<W)&&(W=q.id),p.has(q.id)||(p.add(q.id),!Be(q.date,u,l))||!q.text||!a(q.text)||c(q.text))continue;let G=P?P.toISOString():"",K=q.text.split(`
`)[0].slice(0,90)||"(без текста)";f.push({source:"t.me/"+e,title:K,url:q.url,date:G,channel:"telegram",match:"post",snippet:Ft(q.text,K,o)})}if(u&&E&&E<u&&(x=!0,T="дошли до начала периода"),!x&&(W===null||W===b)){T="лента не листается дальше";break}b=W}return T||(T=w>=g?"упёрлись в "+g+" страниц":"стоп по времени (45 с)"),d.push(`постов просмотрено ${M} (страниц ${w}, ${T}), совпало ${f.length}`),{rows:f,channel:"telegram",note:d.filter(Boolean).join("; ")}}function _u(e,t){let n=0,r=!1,s=!1;for(let o=t;o<e.length;o++){let a=e[o];if(r)s?s=!1:a==="\\"?s=!0:a==='"'&&(r=!1);else if(a==='"')r=!0;else if(a==="{")n++;else if(a==="}"&&--n===0)return e.slice(t,o+1)}return null}function Cu(e){let t=e.indexOf("ytInitialData");if(t<0)return null;let n=e.indexOf("=",t),r=e.indexOf("{",n);if(n<0||r<0)return null;let s=_u(e,r);try{return s?JSON.parse(s):null}catch{return null}}function Ls(e,t){if(!(!e||typeof e!="object"))if(e.videoRenderer&&e.videoRenderer.videoId&&t.push(e.videoRenderer),Array.isArray(e))for(let n of e)Ls(n,t);else for(let n in e)Ls(e[n],t)}function Pu(e){let t=String(e||"").toLowerCase();return/секунд|минут|час|sec|min|hour|сағат|мину?т|только что|сейчас|сегодня|today|бүгін/.test(t)?0:/недел|апта|week/.test(t)?7:/месяц|month|\bай\b/.test(t)?31:/год|лет|жыл|year/.test(t)?366:/дн|день|сутк|күн|тәулік|day|вчера|yesterday|кеше/.test(t)?1:31}function Lu(e){let t=String(e||""),n=/"uploadDate"\s*:\s*"([^"]{4,40})"/.exec(t);return n||(n=/itemprop="(?:datePublished|uploadDate)"[^>]*content="([^"]{4,40})"/.exec(t)),n||(n=/<meta[^>]+content="([^"]{4,40})"[^>]*itemprop="(?:datePublished|uploadDate)"/.exec(t)),n?ue(n[1]):null}function zu(e,t,n=new Date){let r=Ds.indexOf(e)>=0?e:"month";if(!(t?ue(t):null))return r;let o=(n.getTime()-nn(t).getTime())/864e5,a=o<=1?"today":o<=7?"week":o<=31?"month":"year";return Ds.indexOf(a)>Ds.indexOf(r)?a:r}async function ei(e,t){let n=t&&t.ytRange||"month",r=zu(n,t&&t.from),s=t.morph!==!1,o=Tt(e,s),a=Tt(t.exclude||"",s),c=an(o),u=Ha[r]||Ha.month,l=`${Ba}/results?search_query=${encodeURIComponent(e)}&sp=${u}`,h=await cr(l);if(!h.ok)return{rows:[],channel:"youtube",note:"YouTube не открылся"+(h.status?" (HTTP "+h.status+")":"")};let f=Cu(h.text);if(!f)return{rows:[],channel:"youtube",note:"не разобрал выдачу (согласие/капча?)"};let d=[];Ls(f,d);let p=[],m=new Set;for(let S of d){let R=S.videoId;if(!R||m.has(R))continue;m.add(R);let E=Cn(S.title),W=Cn(S.publishedTimeText),q=Cn(S.ownerText||S.longBylineText),P=S.detailedMetadataSnippets&&S.detailedMetadataSnippets[0]&&Cn(S.detailedMetadataSnippets[0].snippetText)||Cn(S.descriptionSnippet),G=(E+" "+P+" "+q).toLowerCase();if(o.length&&!Ge(G,o)||a.length&&Ge(G,a))continue;let K=W?ue(W):null;p.push({source:"youtube",title:E||R,url:`${Ba}/watch?v=`+R,date:K?K.toISOString():"",channel:"youtube",match:"video",snippet:(q?"["+q+"] ":"")+(on(P||E,c)||W),_fuzz:Pu(W)})}let g=nn(t.from),b=An(t.to),x=Date.now()+Du,w=0,M=0,v=0,T=[];await dr(p.slice(0,Eu),4,async S=>{let R=ue(St.get(S.url));if(!R&&Date.now()<x){let E=await lr(S.url);R=E?Lu(E):null,R&&St.set(S.url,R.toISOString())}R?(w++,S.date=R.toISOString()):M++,S._exact=!!R});for(let S of p){if(S._exact){if(!Be(S.date,g,b)){v++;continue}}else{let R=ue(S.date),E=(S._fuzz||0)*864e5;if(R&&(g&&+R+E<+g||b&&+R-E>+b)){v++;continue}}delete S._fuzz,delete S._exact,T.push(S)}let k=["фильтр YouTube: "+r+(r!==n?" (в настройке «"+n+"» — расширен, иначе окно не попадает в выдачу)":"")];return v&&k.push("вне периода отсеяно "+v),M&&k.push("дат со страницы не прочитали: "+M+" — у них дата приблизительная"),{rows:T,channel:"youtube",note:`видео: ${T.length} (${k.join("; ")})`}}async function hr(e,t){let n=$u(e);if(n)return Ru(n,t);let{keyword:r,from:s,to:o,maxPages:a=3,override:c,maxArticles:u=60}=t,l=fu(e);if(!l)return{rows:[],channel:"bad-url",note:"не разобрал адрес"};let h=Ms(l);if(h&&h.dead)return{rows:[],channel:"пропущен",note:"сайт пропущен: "+(h.note||"помечен нерабочим"),stats:{render:null,external:null,sitesearch:null}};let f=t.morph!==!1,d=Tt(r,f),p=Tt(t.exclude||"",f),m=an(d),g=i(y=>Ge((y||"").toLowerCase(),d),"hasKw"),b=i(y=>Ge((y||"").toLowerCase(),d),"kwInTitle"),x=i(y=>p.length>0&&Ge((y||"").toLowerCase(),p),"hasExclude"),w=nn(s),M=An(o),v=[],T=[],k=[],S=t.diag?[]:null,R=t.diag?{searchUrl:null,rawLinks:[],searchKind:null,renderUrl:null}:null,E=await cr(l+"/");if(!E.ok&&E.err){let y=mu(l);if(y&&y!==l){let A=await cr(y+"/");A.ok&&(l=y,E=A,k.push("главная: переключился на "+Fe(l)))}}let W=!1;if(E.ok&&ja(E.text)&&(E={ok:!1,status:E.status,err:"страница-заглушка защиты"},k.push("главная: за защитой (Cloudflare) — иду браузером")),!E.ok){let y=await sn(l+"/");y&&y.ok&&y.html&&y.html.length>500&&!ja(y.html)?(E={ok:!0,status:y.status||200,text:y.html},W=!0,k.push("главная: через браузер")):y&&y.err&&k.push("главная: браузером тоже не вышло — "+y.err)}E.ok||k.push("главная: "+(E.status?"HTTP "+E.status:E.err||"не открылась"));let q=E.text||"",P=ku(W),G=await P(l+"/robots.txt")||"";/<[a-z]/i.test(G)&&(G=Xe(G.replace(/<[^>]+>/g,`
`)));try{let y=[...new Set([...Ra(q).map(A=>{try{return new URL(A,l).href}catch{return null}}).filter(Boolean),l+"/rss",l+"/rss/",l+"/feed/",l+"/rss.xml"])];for(let A of y.slice(0,4)){let L=await lt(A);if(!L||!/<(item|entry)[\s>]/i.test(L))continue;let V=_a(L);if(V.length){T.push("rss");for(let O of V){let U=ue(O.date),J=U?U.toISOString():null;if(O.title&&g(O.title+" "+(O.description||""))&&!x(O.title+" "+(O.description||""))&&Be(J,w,M)){let ne;try{ne=new URL(O.link,l).href}catch{continue}v.push({source:Fe(l),title:O.title,url:ne,date:J||"",channel:"rss",match:b(O.title)?"title":"body",snippet:Ft((O.description||"")+" "+O.title,O.title,m)})}}break}}}catch(y){k.push("rss: "+y.message)}try{let y=await Su(l,G,P);if(y.length){T.push("news-sitemap");for(let A of y)g(A.title)&&!x(A.title)&&Be(A.date,w,M)&&v.push({source:Fe(l),title:A.title,url:A.url,date:A.date,channel:"news-sitemap",match:"title",snippet:Ft(A.title,A.title,m)})}}catch(y){k.push("sitemap: "+y.message)}let K=[],Q={},ye={hint:t.datePick||"",seen:{}},xe=i(()=>new Set(v.map(y=>be(y.url))),"haveKeys"),$e={left:16},C=0,B=!1,_="";try{if(/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(q)&&d.length){let y=Date.now()+25e3,A=i(F=>String(F).padStart(2,"0"),"p2"),L=i(F=>F.getFullYear()+"-"+A(F.getMonth()+1)+"-"+A(F.getDate())+"T"+A(F.getHours())+":"+A(F.getMinutes())+":"+A(F.getSeconds()),"wpDate"),V=new Set(v.map(F=>be(F.url))),O=new Set,U=[],J=[],ne=!1,I=0,re=0,X=0,Me=new Set,Te=!1,De=50,Z=6,je=/^(page|attachment|nav_menu_item|wp_|revision|customize_|oembed_|user_request|product_variation|acf-|elementor_|e-|jet-|tablepress)/,me=["posts"],se=!1;try{let F=await lt(l+"/wp-json/wp/v2/types"),H=F?JSON.parse(F):null;if(H&&typeof H=="object"&&!Array.isArray(H)){se=!0;for(let te of Object.keys(H)){let oe=H[te]||{},fe=oe.rest_base||te;!fe||je.test(te)||je.test(fe)||oe.rest_namespace&&oe.rest_namespace!=="wp/v2"||me.includes(fe)||me.push(fe)}}}catch{se=!1}let de=/news|articl|novost|material|publicat|zhana|habar|jańalyq/i,pe=[me[0],...me.slice(1).sort((F,H)=>(de.test(H)?1:0)-(de.test(F)?1:0))].slice(0,4);for(let F of pe)for(let H of d){let te=H.words.map(oe=>oe.text).join(" ");if(te)for(let oe=1;oe<=Z;oe++){if(Date.now()>y){Te=!0;break}let fe=l+"/wp-json/wp/v2/"+F+"?search="+encodeURIComponent(te)+"&after="+L(w)+"&before="+L(M)+"&per_page="+De+"&page="+oe+"&orderby=date&order=desc&_fields=date,link,title,excerpt";I++;let ot=await lt(fe);if(!ot){re++;break}let ve=null;try{ve=JSON.parse(ot.replace(/^\s*<pre[^>]*>/i,"").replace(/<\/pre>\s*$/i,""))}catch{X++;break}if(!Array.isArray(ve)){X++;break}ne=!0;for(let j of ve){let Ue=j&&j.link;if(!Ue)continue;let He=En(Ue),Re=be(He);if(Be(j.date,w,M)&&Me.add(Re),V.has(Re)||O.has(Re))continue;O.add(Re);let Qe=i(hs=>Xe(String(hs||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),"flat"),nt=Qe(j.title&&j.title.rendered),Ye=Qe(j.excerpt&&j.excerpt.rendered);Be(j.date,w,M)&&(x(nt)||x(Ye)||(Ge((nt+" "+Ye).toLowerCase(),d)?U.push({source:Fe(l),title:nt,url:He,date:j.date,channel:"wp-api",match:b(nt)?"title":"body",snippet:on(Ye||nt,m)}):J.push(He)))}if(ve.length<De)break;oe===Z&&(Te=!0)}}if(ne){T.push("wp-api"),U.forEach(fe=>v.push(fe)),C=U.length;let F=0;if(J.length&&Date.now()<y){let{rows:fe}=await Bt(J,{groups:d,exclude:p,fromD:w,toD:M,originHost:Fe(l),channelLabel:"wp-api",deadline:y+3e4,maxFetch:60,diag:S,tally:Q});fe.forEach(ot=>{v.push(ot),F++}),C+=F}let H=v.filter(fe=>(fe.channel==="rss"||fe.channel==="news-sitemap")&&Be(fe.date,w,M)).map(fe=>be(fe.url)),te=H.filter(fe=>!Me.has(fe)),oe=H.length>0;B=!Te&&te.length===0&&(oe||se&&U.length>0),_=Te?"ответ обрезан по бюджету":te.length?"вход не увидел "+te.length+" материал(ов), найденных лентой":oe?"сверено с лентой: "+H.length+" из "+H.length:se?"типов записей опрошено "+pe.length:"список типов записей недоступен",k.push("wp-api: сайт сам отобрал по слову и датам, взято "+C+(F?" (из них "+F+" проверены по тексту)":"")+(pe.length>1?"; типы записей: "+pe.join(", "):"")+"; полнота: "+(B?"подтверждена":"не подтверждена")+" ("+_+")")}else{let F=I?re?"вход не ответил (таймаут или бюджет канала 25 с), попыток "+I:X?"вход отдал не список записей — похоже, REST закрыт, попыток "+I:"вход промолчал, попыток "+I:"ни одного запроса не ушло (кончился бюджет канала ещё до старта)";k.push("wp-api: у сайта есть признаки WordPress, но "+F)}}}catch(y){k.push("wp-api: "+y.message)}let z=0;try{if(t.skip instanceof Set?t.skip.has("sitemap"):(t.skip||[]).includes("sitemap"))throw{skipped:!0};if(B)throw{wpCovered:!0};let y=Date.now(),A=iu(w,M),L=y+A.budgetMs,V=[...new Set(r.split(/[,;\n]+/).map(I=>I.trim()).filter(Boolean).flatMap(I=>I.split(/\s+/)).flatMap(I=>Ts(I)))],O={},U=await Tu(l,G,w,M,W?{maxMaps:10,maxCands:200,deadline:y+9e4,fetchText:P,blindOk:v.length===0,slugHints:V,collectStats:O}:{maxMaps:40,maxCands:A.maxCands,deadline:L,fetchText:P,blindOk:v.length===0,slugHints:V,collectStats:O}),J=new Set(v.map(I=>be(I.url))),ne=U.map(I=>I.loc).filter(I=>!J.has(be(I)));if(ne.length||k.push("sitemap-глубина: "+(O.stale?`новых статей нет — все ${O.stale} адресов уже читали, они вне периода`:O.maps?`карт прочитано ${O.maps}, статей за период в них нет`:`карты сайта не открылись (адресов карт в robots и по типовым путям: ${O.roots||0})`)),ne.length){T.push("sitemap-глубина");let I=W?{maxFetch:200,deadline:y+9e4}:{maxFetch:A.maxCands,deadline:L},{rows:re}=await Bt(ne,{groups:d,exclude:p,fromD:w,toD:M,originHost:Fe(l),channelLabel:"sitemap",deadline:I.deadline,maxFetch:I.maxFetch,diag:S,tally:Q,pick:ye});re.forEach(F=>v.push(F)),z=re.length;let X="";if(w&&M){let F=new Set;for(let te of U){let oe=te.lm&&ue(te.lm)||ct(te.loc);oe&&F.add(Ke(oe))}let H=Math.max(1,Math.round((+An(Ke(M))-+nn(Ke(w)))/864e5));F.size&&(X=`, дней периода охвачено ${F.size} из ${H}`)}let Me=O.hinted?`, с ключом в адресе ${O.hinted}`:"",Te=O.stale?`, старых по памяти дат пропущено ${O.stale}`:"",De=O.nodate?`, из них без даты в карте ${O.nodate} (день узнаём, только скачав)`:"",Z=O.pool||0,je=Z>0?Math.max(1,Math.round(U.length/Z*100)):0,me=Z>U.length?O.capped?`; взято ${U.length} из БОЛЕЕ ЧЕМ ${Z} статей сайта за период (не больше ${je}%, сколько их всего — не знаем: упёрлись в свой потолок сбора) — остальные не читали, бюджет канала`:`; взято ${U.length} из ${Z} статей сайта за период (${je}%) — остальные не читали, бюджет канала`:"",se=W?200:A.maxCands,de=W?"сайт за защитой, читает браузер":A.days?`окно ${A.days} сут.`:"период не задан",pe=`; бюджет ${se} статей (${de})`;k.push(`sitemap-глубина: карт пройдено, кандидатов ${ne.length}${X}${De}${Me}${Te}, совпало ${re.length}${me}${pe}`+(Date.now()>I.deadline?" (стоп по времени)":""))}}catch(y){y&&y.wpCovered?(k.push("sitemap-глубина: не понадобилась — wp-api накрыл весь период ("+_+")"),K.push("sitemap")):k.push(y&&y.skipped?"sitemap-глубина: пропущен (память: у сайта ничего не даёт; перепроверим позже)":"sitemap-глубина: "+y.message)}let $=Ms(l),ie=null,ce=0,ke=0,Y=t.skip instanceof Set?t.skip:new Set(t.skip||[]);$&&!t.reprobe&&($.external===!1&&Y.add("external"),$.browserSearch===!1&&Y.add("sitesearch"),$.noRender===!0&&Y.add("render"));let he={render:null,external:null,sitesearch:null};try{let y=null;if(c?y=await Cs(l,q,c):$&&$.search?y=await Cs(l,q,$.search):$&&$.search===null?k.push("адаптер: server-side поиска нет ("+($.note||"")+")"):y=await Cs(l,q,null),y&&y.kind==="none"&&(k.push("поиск: "+y.warn),y=null),y){T.push("search("+y.kind+")"),R&&(R.searchKind=y.kind);let A=v.length,L=new Set,V=$&&$.budgetMs||45e3,O=$&&$.budgetMs?1500:400,U=W?1:y.hasPage?80:1,J=r.split(/[,;\n]+/).map(Z=>Z.trim()).filter(Boolean);J.length||J.push(r);let ne=0,I="",re=!1,X=Date.now(),Me=y.builds||[y.build],Te=[];for(let Z of Me)for(let je of J)Te.push({build:Z,alt:je});e:for(let{build:Z,alt:je}of Te){let me=!1;for(let se=1;se<=U&&!me;se++){if(Date.now()-X>V){k.push(`поиск: стоп по времени (${Math.round(V/1e3)}c)`);break e}let de=Z(je,se);if(!de)break;R&&!R.searchUrl&&(R.searchUrl=de);let pe;if(W){let ve=await sn(de);pe={ok:!!(ve&&ve.ok&&ve.html),status:ve&&ve.status||0,text:ve&&ve.html||"",err:ve&&ve.err}}else pe=await cr(de);if(!pe.ok){se===1&&L.size===0&&(I=pe.status?"HTTP "+pe.status:pe.err||"ошибка");break}!re&&pe.text&&g(pe.text.toLowerCase())&&(re=!0);let F=Rn(pe.text,l).filter(ve=>!L.has(ve));if(R)for(let ve of F)R.rawLinks.length<25&&R.rawLinks.push(ve);if(F.forEach(ve=>L.add(ve)),!F.length){if(se>1)break;continue}let H=null,te=[];for(let ve of F){let j=ct(ve);j&&((!H||j>H)&&(H=j),!Be(j.toISOString(),w,M))||te.push(ve)}let{rows:oe,newest:fe}=await Bt(te,{groups:d,exclude:p,fromD:w,toD:M,originHost:Fe(l),channelLabel:"search",deadline:X+V,browserBudget:$e,diag:S,tally:Q,pick:ye,have:xe()});oe.forEach(ve=>v.push(ve)),ne+=F.length;let ot=fe&&H?fe>H?fe:H:fe||H;if(w&&ot&&ot<w&&(me=!0),ne>O)break e}}let De=v.length-A;ce=De,I?k.push("поиск: "+I):k.push(`поиск: ссылок ${L.size}, совпало ${De}`+(L.size===0?" (пусто/оболочка)":De===0?" (нет по слову/периоду)":"")),v.length===A&&(L.size<3||!re)&&(ie=y.build("MCQPLACEHOLDER",1).replace(/MCQPLACEHOLDER/g,"{q}"),L.size>=3&&k.push("поиск: ключа нет в самой выдаче -> похоже на оболочку, пробую браузером"))}else(!$||$.search)&&k.push("поиск не найден (нужен ручной шаблон site | url?...{q})")}catch(y){k.push("search: "+y.message)}try{let y=ie?ie.replace(/\{q\}/g,"{q}"):null;y||(y=Qa(q,l)||null);let A=y;if(Y.has("render"))k.push("render: пропущен (память: у сайта не работает; перепроверим позже)");else if($&&$.render||ce===0&&z===0&&A){let L=null,V=null;if($&&$.render?(L=$.render,V=$.selectors||null):L=A,L){T.push("render");let O=Fe(l),U=/\{q\}/.test(L)?r.split(/[,;\n]+/).map(Z=>Z.trim()).filter(Boolean).slice(0,3)||[r]:[null],J=new Set,ne=[],I=!1,re=!1;for(let Z of U.length?U:[null]){let je=Z==null?L:L.replace(/\{q\}/g,encodeURIComponent(Z));R&&!R.renderUrl&&(R.renderUrl=je);let me=await ir(je,{selectors:V,host:O});Na(me)&&(re=!0),me.cf&&(I=!0);for(let se of me.items||[]){let de;try{de=new URL(se.url).host.replace(/^www\./,"")}catch{continue}de===O&&(J.has(se.url)||(J.add(se.url),ne.push(se)))}}let X={items:ne,cf:I};he.render=re&&!ne.length?null:ne.length,re&&!ne.length&&k.push("render: браузера не было — канал не проверялся (память не трогаем)");let Me=ne.map(Z=>Z.url).filter(Boolean),Te=(await Bt(Me,{groups:d,exclude:p,fromD:w,toD:M,originHost:Fe(l),channelLabel:"render",deadline:Date.now()+45e3,browserBudget:$e,diag:S,tally:Q,pick:ye,have:xe()})).rows,De=!!($&&$.render&&/\{q\}/.test($.render));if(!Te.length&&ne.length)for(let Z of ne){let je=((Z.title||"")+" "+(Z.snippet||"")).toLowerCase();if(x(je)||!De&&!g(je))continue;let me=ue(Z.date)||ct(Z.url),se=me?me.toISOString():null;(w||M)&&!Be(se,w,M)||Te.push({source:Fe(l),title:Z.title||Z.url,url:Z.url,date:se||"",channel:"render*",match:b(Z.title)?"title":"body",snippet:Ft(_s(Z),Z.title,m)})}Te.forEach(Z=>v.push(Z)),ke=Te.length,Te.length?k.push(`render: совпало ${Te.length}`):k.push(X.cf?"render: Cloudflare не пройден за таймаут":!ne.length&&X.err?"render: "+X.err:`render: снято ${ne.length} ссылок, совпало 0`+(ne.length?" (нет по слову/периоду)":" (пусто/логин/капча?)"))}}}catch(y){k.push("render: "+y.message)}try{if($&&$.feed){T.push("feed");let y=/\{page\}|\{off\d+\}/.test($.feed),A=!!$.feedPost&&/\{date\}/.test($.feedPost),L=y||A?20:1,V=Date.now(),O=9e4,U=new Set,J=[],ne=0,I=!1,re=0,X=0,Me=null,Te=!1,De=M?new Date(+M+864e5):new Date;for(let me=1;me<=L&&!I&&!(Date.now()-V>O);me++){let se=[],de=/^\//.test($.feed)?l.replace(/\/$/,"")+$.feed:$.feed;if(A){let H=$.feedPost.replace(/\{date\}/g,Zl(De)),te=await Xl(de,H);if(!te&&W){let oe=await sn(de,{post:H,host:Fe(l)});oe&&oe.ok&&oe.posted?te=oe.html:oe&&oe.err&&(Me=oe.err)}if(!te)break;se=Rn(te,l).map(oe=>({url:oe,title:"",date:"",snippet:""}))}else{let H=me===1&&$.feedFirst?$.feedFirst:de.replace(/\{page\}/g,me);H=H.replace(/\{off(\d+)\}/g,(oe,fe)=>(me-1)*+fe),se=(await ir(H,{selectors:$.feedSelectors||null,host:Fe(l)})).items||[]}if(X++,se=se.filter(H=>H.url&&!U.has(H.url)),se.forEach(H=>U.add(H.url)),!se.length){X>1&&(Te=!0);break}re+=se.length;let pe=null,F=null;for(let H of se){let te=ue(H.date)||ct(H.url);te&&(!pe||te>pe)&&(pe=te),te&&(!F||te<F)&&(F=te);let oe=((H.title||"")+" "+(H.snippet||"")).toLowerCase();if(te&&g(oe)&&!x(oe)){if((w||M)&&!Be(te,w,M))continue;v.push({source:Fe(l),title:H.title||H.url,url:H.url,date:Ke(te),channel:"feed",match:b(H.title)?"title":"body",snippet:Ft(_s(H),H.title,m)}),ne++;continue}te&&(w&&+te<+w-864e5||M&&+te>+M+864e5)||J.push(H.url)}A&&(De=F&&+F<+De?F:new Date(+De-864e5),w&&+De<+w-864e5&&(I=!0)),w&&pe&&pe<w&&(I=!0)}if(J.length){let me=[...new Set(r.split(/[,;\n]+/).map(de=>de.trim()).filter(Boolean).flatMap(de=>de.split(/\s+/)).flatMap(de=>Ts(de)))];if(me.length){let de=i(pe=>me.some(F=>pe.toLowerCase().includes(F)),"hinted");J.sort((pe,F)=>(de(F)?1:0)-(de(pe)?1:0))}let{rows:se}=await Bt(J,{groups:d,exclude:p,fromD:w,toD:M,originHost:Fe(l),channelLabel:"feed",deadline:Date.now()+9e4,maxFetch:300,browserBudget:$e,diag:S,tally:Q,have:xe()});for(let de of se)v.push(de),ne++}let Z=` (страниц ${X}`+(Te?", дальше повтор — пагинация не двигается":"")+")",je=re?" (нет по слову/периоду)":Me?" (лента не ответила: "+Me+")":" (лента ничего не отдала)";ne?k.push(`feed: ссылок ${re}${Z}, совпало ${ne}`):k.push(`feed: ссылок ${re}${Z}, совпало 0`+je)}}catch(y){k.push("feed: "+y.message)}let Ce=0;try{let y=!!($&&$.browserSearch===!0&&ce===0);if(!Y.has("sitesearch")&&(v.length===0||y)){let A=r.split(/[,;\n]+/).map(re=>re.trim()).filter(Boolean);A.length||A.push(r);let L=Fe(l),V=new Set,O=[],U="",J=!1,ne=!1;{let re=await Ga(l,A.slice(0,3),{host:L});Na(re)&&(ne=!0),re.cf&&(J=!0),re.note&&(U=re.note);for(let X of re.items||[]){let Me;try{Me=new URL(X.url).host.replace(/^www\./,"")}catch{continue}Me!==L&&!Me.endsWith("."+L)||V.has(X.url)||(V.add(X.url),O.push(X))}}let I={items:O,cf:J,note:U};if(he.sitesearch=ne&&!O.length?null:O.length,O.length){T.push("браузер-поиск");let re=(await Bt(O.map(X=>X.url),{groups:d,exclude:p,fromD:w,toD:M,originHost:Fe(l),channelLabel:"браузер-поиск",deadline:Date.now()+9e4,browserFallback:W,browserBudget:$e,diag:S,tally:Q,pick:ye,have:xe()})).rows;if(!re.length)for(let X of O){let Me=((X.title||"")+" "+(X.snippet||"")).toLowerCase();if(!g(Me)||x(Me))continue;let Te=ue(X.date)||ct(X.url),De=Te?Te.toISOString():null;(w||M)&&!Be(De,w,M)||re.push({source:L,title:X.title||X.url,url:X.url,date:De||"",channel:"браузер-поиск*",match:b(X.title)?"title":"body",snippet:Ft(_s(X),X.title,m)})}re.forEach(X=>v.push(X)),Ce=re.length,k.push(re.length?`браузер-поиск: совпало ${re.length}`:`браузер-поиск: снято ${O.length}, совпало 0 (нет по слову/периоду)`)}else I.err?k.push("браузер-поиск: "+I.err):I.note&&k.push("браузер-поиск: "+I.note)}}catch(y){k.push("браузер-поиск: "+y.message)}try{let y=t.external===!1?!1:!!($&&$.external===!0)||t.external===!0;if(Y.has("external"))k.push("внешний: пропущен (память: у сайта не работает; перепроверим позже)");else if(!y)K.push("external");else if(($&&$.external||ce===0&&ke===0)&&z===0&&Ce===0){T.push("внешний");let A=Fe(l),L=r.split(/[,;\n]+/).map(j=>j.trim()).filter(Boolean).map(j=>/\s/.test(j)&&!/^["«]/.test(j)?"("+j+")":j).join(" OR "),V=(t.exclude||"").split(/[,;\n]+/).map(j=>j.trim()).filter(Boolean).map(j=>"-"+(/\s/.test(j)?'"'+j+'"':j)).join(" "),O=encodeURIComponent(["site:"+A,L,V].filter(Boolean).join(" ")),U=new Set,J=[],ne=Date.now(),I={},re=0,X="";{let j=new Set,Ue=Date.now(),He=[Re=>`https://html.duckduckgo.com/html/?q=${O}&kl=ru-ru&ia=web&p=-1${Re?"&s="+Re:""}`,Re=>`https://duckduckgo.com/html/?q=${O}&kl=ru-ru&ia=web&p=-1${Re?"&s="+Re:""}`];for(let Re=0;Re<He.length&&J.length<60&&Date.now()-Ue<12e3;Re++){let Qe=He[Re],nt="https://duckduckgo.com/";for(let Ye=0;Ye<=60&&Date.now()-Ue<12e3;Ye+=30){let hs=Qe(Ye),qt=await wu(hs,nt);if(Ye===0&&Re===0){let at=qt.text||"",ia=(at.match(/class="result__a"/g)||[]).length,$l=/anomaly|are you a robot|too many requests|captcha|privacy.*simplified/i.test(at),Al=at.length<22*1024&&ia===0,Ml=(((at.split(/class="result__a"/i)[1]||"").slice(0,400).match(/href="([^"]+)"/i)||[])[1]||"").replace(/&amp;/g,"&").slice(0,110);X=`${qt.status?"HTTP "+qt.status+" ":""}${qt.err?qt.err+" ":""}стр ${Math.round(at.length/1024)}КБ, result__a ${ia}${$l||Al?", заглушка/капча":""}; href1: ${Ml||"—"}`,I.ddg=X}if(!qt.ok)break;let aa=xu(qt.text,A).filter(at=>!j.has(at.url));if(!aa.length)break;aa.forEach(at=>{j.add(at.url),U.add(at.url),J.push(at)})}if(J.length>0)break}re=j.size}let Me=0,Te="",De=J.length<3||X&&/заглушка|капча|HTTP 40[33]|не открылся|таймаут/.test(X);if(De){let j=new Set,Ue=`https://www.bing.com/search?q=${O}&setlang=ru-RU&cc=KZ&ensearch=0`,He=await ir(Ue,{bing:!0,host:A}),Re=He.items||[];for(let nt of Re){let Ye=gu(nt.url,A)||Pa(nt.url,A);!Ye||j.has(Ye)||(j.add(Ye),U.has(Ye)||(U.add(Ye),J.push({url:Ye,title:nt.title||"",snippet:nt.snippet||""})))}Me=j.size;let Qe=Re.length?String(Re[0].url||"").replace(/&amp;/g,"&").slice(0,90):"";Te=He.cf?"капча/Cloudflare не пройден":`рендер: снято ${Re.length}, домена ${Me}${Me===0&&Qe?"; href1: "+Qe:""}`,I.bing=Te}he.external=J.length;let Z=(await Bt(J.map(j=>j.url),{groups:d,exclude:p,fromD:w,toD:M,originHost:A,channelLabel:"внешний",deadline:Date.now()+3e4,diag:S,tally:Q,pick:ye,have:xe()})).rows,je=new Set;for(let j of Z)v.push(j),je.add(j.url);let me=[],se=0,de=0;for(let j of J){if(je.has(j.url))continue;let Ue=(j.title||"").toLowerCase(),He=(j.snippet||"").toLowerCase(),Re=g(Ue);if(!Re||x(Ue+" "+He)){de++;continue}let Qe=ct(j.url)||ue(j.snippet+" "+j.title+" "+(j.date||""));if(!Qe){se++;continue}Be(Qe.toISOString(),w,M)&&me.push({it:j,iso:Qe.toISOString(),inTitle:Re})}let pe={},F={};for(let j of me){let{b:Ue,a:He}=Ia(j.it.snippet,m);Ue.length>=12&&(pe[Ue]=(pe[Ue]||0)+1),He.length>=12&&(F[He]=(F[He]||0)+1)}let H=0,te=0;for(let j of me){let{b:Ue,a:He}=Ia(j.it.snippet,m);if((Ue.length>=12&&pe[Ue]>1||He.length>=12&&F[He]>1)&&!j.inTitle){te++;continue}let Qe=hu(j.it.title,A);v.push({source:A,title:Qe,url:j.it.url,date:j.iso,channel:"внешний",match:j.inTitle?"title":"body",snippet:on(j.it.snippet||j.it.title||"",m)}),H++}let oe=Z.length+H,fe=[de?`не по ключу ${de}`:"",te?`боковой блок ${te}`:"",se?`без даты ${se}`:""].filter(Boolean).join(", "),ot=[];ot.push(`ddg:${re}${I.ddg?" ["+I.ddg+"]":""}`),De&&ot.push(`bing:${Me}${I.bing?" ["+I.bing+"]":""}`);let ve=J.length?fe?"отсеяно "+fe:"нет по слову/периоду":De?"оба движка 0: "+(I.ddg||"")+(I.bing?" | "+I.bing:""):I.ddg||"нет ответа";k.push(oe?`внешний: совпало ${oe} (из статьи ${Z.length}, из выдачи ${H}${fe?"; отсеяно "+fe:""}; ${ot.join(", ")})`:`внешний: 0 [ссылок ${J.length}; ${ve}]`)}}catch(y){k.push("внешний: "+y.message)}let Ae=v.filter(y=>y.channel==="rss"||y.channel==="news-sitemap");if(Ae.length){let y=0,A=0,L=0,V=new Map;await dr(Ae,4,async U=>{if(!U.url)return;let J=V.get(U.url)||St.get(U.url);if(!J){let ne=await lr(U.url);if(!ne){L++;return}let I=As(ne,U.url,ye&&ye.hint);if(!I||!I.date){L++;return}J=I.date,St.set(U.url,J),ye&&I.dateVia&&(ye.seen[I.dateVia]=(ye.seen[I.dateVia]||0)+1)}V.set(U.url,J),eu(U.date,J)||y++,U.date=J,Be(J,w,M)||(U._outOfPeriod=!0,A++)});let O=v.length;v=v.filter(U=>!U._outOfPeriod),(y||A||L)&&k.push("даты лент сверены по статьям: поправлено "+y+(A?", вне периода "+A+" (лента показывала их свежими)":"")+(L?", не открылись "+L+" — оставлены с датой ленты, ей верить нельзя":"")),O!==v.length&&v.length}let Se=new Set([Fe(l)]),Ne=i(y=>{for(let A of[].concat(y||[])){let L=A&&String(A).match(/^https?:\/\/([^/]+)/i);L&&Se.add(L[1].replace(/^www\./,""))}},"addHost");Ne(c),$&&(Ne($.search),Ne($.render),Ne($.feed));let Jt=new Map,vt=[],Xt=0,Zt=0;for(let y of v){if(!y.url)continue;y.url=En(y.url);let A=be(y.url),L=Jt.get(A);if(L){L._ch.includes(y.channel)||L._ch.push(y.channel);continue}if(y._dupe)continue;if(js(y.url)){Zt++;continue}let V;try{V=new URL(y.url).host.replace(/^www\./,"")}catch{continue}if(!Se.has(V)){Xt++;continue}y._ch=[y.channel],Jt.set(A,y),vt.push(y)}Xt&&k.push("отброшено "+Xt+" с другого домена/поддомена"),Zt&&k.push("отброшено "+Zt+" листингов/рубрик"),he.contrib={};for(let y of vt)he.contrib[y.channel]=(he.contrib[y.channel]||0)+1;he.total=vt.length,he.picks=ye.seen;let Le=Q,It=Object.values(Le).filter(y=>typeof y=="number").reduce((y,A)=>y+A,0),ps=i(()=>{let y=Le.noOpenWhy||{},A=Object.entries(y).sort((L,V)=>V[1]-L[1]).slice(0,3).map(([L,V])=>L+" — "+V).join(", ");return"не открылись "+Le.noOpen+(A?" ("+A+")":" (защита/таймаут)")},"noOpenBit"),D=i(()=>{let y=Object.entries(Le.noDateWhere||{}).sort((L,V)=>V[1]-L[1]),A=y.filter(([,L])=>L>=Math.max(3,Le.noDate*.15)).slice(0,3);return A.length?"без даты на странице — "+Le.noDate+" (в разделах: "+A.map(([L,V])=>"/"+L+"/ "+V).join(", ")+")":"без даты на странице — "+Le.noDate+(y.length>1?" (разделов "+y.length+", ни один не преобладает — размазано по сайту)":"")},"noDateBit");if(vt.length){let y=Le.noOpen||0,A=Le.noDate||0,L=Le.late||0,V=Le.overBudget||0,O=y+A+L+V;if(O>=10&&O>=It*.05){let U=[];y&&U.push(ps()),A&&U.push(D()),L&&U.push("не успели по времени — "+L),V&&U.push("не влезли в бюджет канала — "+V),k.push("потери: "+O+" страниц из "+It+" не проверены ["+U.join(", ")+"] — среди них мог быть материал")}}else{let y=[],A=i((V,O)=>{Le[V]&&y.push(O+" "+Le[V])},"add");A("noKw","прочитали, ключа в тексте нет —"),A("outOfPeriod","вне периода —"),A("staleDate","вне периода по памяти дат —"),A("urlDateOut","вне периода по дате в адресе —"),Le.noOpen&&y.push(ps()),Le.noDate&&y.push(D()),A("notArticle","не статьи (рубрики/меню) —"),A("listing","разделы сайта, отсеяны по адресу —"),A("excluded","отсеяно минус-словом —"),A("late","не успели по времени —"),A("overBudget","не влезли в бюджет канала —");let L;It?(Le.noOpen||0)>It/2?L="сайт не отдал статьи (защита/таймаут) — это не «не писали», а «не достучались»":(Le.noKw||0)>0?L="сайт доступен, статьи прочитаны — про ключ в этот период не писали":(Le.late||0)>It/2?L="упёрлись в бюджет времени — материал мог остаться непроверенным":L="кандидаты были, но ни один не подошёл":L="ни одной ссылки-кандидата: ни ленты, ни карты, ни рабочего поиска у сайта не нашлось",k.push("почему ноль: "+L+(y.length?" ["+y.join(", ")+"]":""))}let ee=Le._slow;if(ee&&ee.resets){let y=Object.entries(ee.why||{}).sort((A,L)=>L[1]-A[1]).map(([A,L])=>A+" — "+L).join(", ");k.push(ee.on?"сайт просил сбавить ход ("+(y||ee.resets+" раз")+") — перешли на одиночные запросы"+(ee.tried?ee.saved?", со второй попытки прочитано "+ee.saved+" из "+ee.tried:", повтор не помог ("+ee.tried+" попыток)":""):"сайт просил сбавить ход: "+(y||ee.resets)+" — единичные случаи, ход не сбавляли")}if($e.left<16){let y=16-$e.left,A=Q&&Q.viaBrowser||0;k.push(A?"статей дочитано браузером: "+A+" из "+y+" попыток (обычным запросом не открывались)":"браузер не дочитал ни одной статьи из "+y+" попыток")}K.length&&(he.notRun=K);let Ee={},We={};for(let y of vt){for(let A of y._ch)Ee[A]=(Ee[A]||0)+1;y._ch.length===1&&(We[y._ch[0]]=(We[y._ch[0]]||0)+1),y.channels=y._ch.map(za).join(" + "),delete y._ch}he.foundBy=Ee,he.onlyBy=We;let Dt=Object.keys(Ee).sort((y,A)=>Ee[A]-Ee[y]).map(y=>`${za(y)} ${Ee[y]}`+(We[y]?` (только он ${We[y]})`:" (все повтор)"));return Dt.length&&k.push("кто принёс: "+Dt.join(", ")),{rows:vt,channel:T.join(" + ")||"none",note:k.join("; "),stats:he,diag:t.diag?{meta:R,records:S}:void 0}}var Jl,za,Na,ir,St,sn,Ga,Ya,pr,zs,Va,Oa,tu,nu,su,Rs,ur,pu,rn,Dn,Ps,bu,Mu,Ha,Cn,Ba,Du,Eu,Ds,fr=ae(()=>{Ht();_n();La();Jl={sitemap:"sitemap-глубина",search:"поиск","render*":"render","браузер-поиск*":"браузер-поиск"},za=i(e=>Jl[e]||e,"chName"),Na=i(e=>/браузер не поднялся|браузер завис/.test(String(e&&(e.err||e.note)||"")),"browserDown"),ir=i(async()=>({items:[],cf:!1}),"renderScrape");i(Fa,"setRenderer");St={get:i(()=>null,"get"),set:i(()=>{},"set")};i(Ua,"setDateStore");sn=i(async()=>({ok:!1}),"renderFetch"),Ga=i(async()=>({items:[],cf:!1}),"renderSiteSearch");i(Wa,"setHtmlFetcher");i(Ka,"setSiteSearcher");i(Bt,"enrichUrls");i(ja,"isChallengePage");Ya="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",pr={"User-Agent":Ya,"Accept-Language":"ru,en;q=0.9","Accept-Encoding":"gzip, deflate"},zs=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),Va=typeof process<"u"&&process.env&&Number(process.env.MC_FETCH_TIMEOUT_MS)||3e4;i(Xl,"tryPostText");i(Zl,"dmy");i(Ql,"fetchText");i(lt,"tryText");i(lr,"tryPlain");Oa={ECONNRESET:"сайт оборвал соединение",ECONNREFUSED:"сайт не принял соединение",ECONNABORTED:"соединение прервано",ETIMEDOUT:"сайт не ответил",ENOTFOUND:"домен не найден (DNS)",EAI_AGAIN:"DNS не ответил",EHOSTUNREACH:"хост недостижим",ENETUNREACH:"сети нет",EPROTO:"не сошлись по TLS",UND_ERR_CONNECT_TIMEOUT:"не удалось соединиться",UND_ERR_HEADERS_TIMEOUT:"сайт не прислал заголовки",UND_ERR_BODY_TIMEOUT:"сайт замолчал на середине ответа",UND_ERR_SOCKET:"соединение оборвалось",CERT_HAS_EXPIRED:"у сайта просрочен сертификат",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"сертификат сайта не проверяется",DEPTH_ZERO_SELF_SIGNED_CERT:"самоподписанный сертификат"};i(eu,"sameDay");i(Ns,"netErr");tu=i(e=>/\b(ECONNRESET|ECONNABORTED|UND_ERR_SOCKET)\b/.test(String(e||"")),"isResetErr"),nu=i(e=>/\bHTTP (429|503)\b/.test(String(e||"")),"isBusyErr");i(ru,"backoffReason");i(cr,"fetchInfo");i(Es,"fetchPlain");su={"User-Agent":Ya,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8","Accept-Language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7","Accept-Encoding":"gzip, deflate",DNT:"1","Upgrade-Insecure-Requests":"1","Sec-Fetch-Dest":"document","Sec-Fetch-Mode":"navigate","Sec-Fetch-Site":"same-origin","Sec-Fetch-User":"?1",Pragma:"no-cache","Cache-Control":"no-cache"};i(ou,"fetchSearch");i(Fe,"host");i(js,"isListingUrl");i(ar,"isJunkMapUrl");i(au,"mapYearMonth");i(iu,"depthBudget");i(En,"canonUrl");i(cu,"isAbbr");i(lu,"stemRu");i(uu,"mkTerm");i(Tt,"parseQuery");i(du,"termHit");i(Ge,"matchGroups");i(an,"queryTerms");i(on,"makeSnippet");Rs=i(e=>{let t=[];for(let n=0,r=e.length-1;n<=r;n++,r--)t.push(e[n]),n!==r&&t.push(e[r]);return t},"bothEnds"),ur=i(e=>String(e||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),pu=24;i(_s,"cardText");i(Ft,"snippetFor");i(hu,"cleanGoogleTitle");i(Ia,"kwContext");i(fu,"normalizeOrigin");i(mu,"toggleWww");i(gu,"bingDecodeHref");rn=0,Dn=0,Ps=!1,bu=i(e=>new Promise(t=>setTimeout(t,e)),"_sleep");i(Ja,"resetDdgThrottle");i(wu,"ddgFetch");i(yu,"ddgReal");i(xu,"ddgResults");i(dr,"mapPool");i(Xa,"robotsSitemaps");i(vu,"unwrapBrowserXml");i(ku,"makeTextFetcher");i(Su,"getNewsSitemapEntries");i(Tu,"collectSitemapCandidates");i(Za,"entriesFromSitemap");i(Qa,"parseSearchForm");i(qa,"searchLooksReal");i(Cs,"detectSearch");i($u,"telegramChannel");i(Au,"parseTelegramPosts");Mu=typeof process<"u"&&process.env&&process.env.MC_TG_BASE||"https://t.me/s/";i(Ru,"searchTelegram");Ha={hour:"EgIIAQ%3D%3D",today:"EgIIAg%3D%3D",week:"EgIIAw%3D%3D",month:"EgIIBA%3D%3D",year:"EgIIBQ%3D%3D"};i(_u,"balancedJson");i(Cu,"extractYtInitialData");i(Ls,"collectVideoRenderers");Cn=i(e=>e&&e.runs?e.runs.map(t=>t.text).join(""):e&&e.simpleText||"","ytRuns"),Ba=typeof process<"u"&&process.env&&process.env.MC_YT_BASE||"https://www.youtube.com",Du=2e4,Eu=60;i(Pu,"ytFuzzDays");i(Lu,"ytExactDate");Ds=["hour","today","week","month","year"];i(zu,"ytRangeFor");i(ei,"searchYouTube");i(hr,"searchSite")});function st(e,t){wr((0,ze.dirname)(e));let n=e+".tmp";(0,we.writeFileSync)(n,JSON.stringify(t,null,2)),(0,we.renameSync)(n,e)}function Lt(e,t){try{return(0,we.existsSync)(e)?JSON.parse((0,we.readFileSync)(e,"utf8")):t}catch(n){return console.error("битый файл",e,n.message),t}}function Ou(){wr(gr),ln=Lt(qs,{})||{},le.clear();for(let e of(0,we.existsSync)(gr)?(0,we.readdirSync)(gr):[]){let t=Lt(un(e),null);t&&le.set(e,{meta:t,feed:Lt(dn(e),[])||[]})}}function Iu(){if(!(0,we.existsSync)(mr)||le.size>0)return;let e=Lt(mr,null);if(!(!e||!Array.isArray(e.projects))){e.settings&&(ln=e.settings,st(qs,ln));for(let t of e.projects){let n=t.id||ri("p"),r={id:n,name:t.name||"Проект",config:t.config||{},schedule:t.schedule||{mode:"off"},lastRun:t.lastRun||null,lastLog:t.log||[]};st(un(n),r),st(dn(n),t.items||[]),le.set(n,{meta:r,feed:t.items||[]})}try{(0,we.renameSync)(mr,mr+".bak")}catch{}console.log(`[store] мигрировал ${e.projects.length} проект(ов) из data.json в data/projects/`)}}function Ze(){return ln}function si(e){Object.assign(ln,e),st(qs,ln)}function yr(){return[...le.values()].map(e=>({id:e.meta.id,name:e.meta.name,schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,itemCount:(e.feed||[]).length,newCount:(e.feed||[]).filter(t=>t.isNew).length,runsCount:(e.meta.runs||[]).length,last:(e.meta.runs||[])[0]||null,config:e.meta.config||{}}))}function tt(e){let t=le.get(e);return t?Hs(t):null}function oi(e,t){let n=ri("p"),r={id:n,name:e||"Новый проект",config:t||{},schedule:{mode:"off"},lastRun:null,lastLog:[]};return wr(Pn(n)),st(un(n),r),st(dn(n),[]),le.set(n,{meta:r,feed:[]}),Hs(le.get(n))}function ai(e,t){let n=le.get(e);return n?(t.name!==void 0&&(n.meta.name=t.name),t.config&&(n.meta.config=t.config),t.schedule&&(n.meta.schedule=t.schedule),Gt(e),Hs(n)):null}function ii(e){if(!le.has(e))return!1;le.delete(e);try{(0,we.rmSync)(Pn(e),{recursive:!0,force:!0})}catch{}return!0}function ci(e){let t=le.get(e);t&&(t.feed.forEach(n=>n.isNew=!1),bt(e))}function xr(e,t,n){let r=le.get(e);return r?(r.meta.ai=r.meta.ai||{},r.meta.ai[t]=n,Gt(e),r.meta.ai):null}function li(e){let t=le.get(e);return t&&t.meta.ai||{}}function zt(e){let t=le.get(e);return t&&t.meta.tg||{}}function $t(e,t){let n=le.get(e);return n?(n.meta.tg=Object.assign({},n.meta.tg||{},t||{}),Gt(e),n.meta.tg):null}function Ln(e){let t=zt(e);return{enabled:!!t.enabled,hasToken:!!t.token,bot:t.bot||"",chats:(t.chats||[]).map(n=>({id:n.id,name:n.name||""})),sentTotal:t.sentTotal||0,err:t.err||""}}function ui(e,t){let n=le.get(e);return n?(n.feed||[]).filter(r=>!r.tgSent&&(!t||r.run===t)):[]}function di(e,t){let n=le.get(e);if(!n)return 0;let r=new Set((t||[]).map(be)),s=0;for(let o of n.feed)!o.tgSent&&r.has(be(o.url))&&(o.tgSent=!0,s++);return s&&bt(e),s}function pi(e){let t=le.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.tgSent||(r.tgSent=!0,n++);return n&&bt(e),n}function hi(e,t){let n=le.get(e);if(!n)return 0;let r=new Set((t||[]).filter(Boolean).map(be));if(!r.size)return 0;let s=0;for(let o of n.feed)o.tgSent&&r.has(be(o.url))&&(delete o.tgSent,s++);return s&&bt(e),s}function fi(e,t){let n=le.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(be(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(be(o.url));a&&(o.sent=a.mark,o.sentWhy=a.why||"",o.sentAt=Date.now(),o.sentModel=a.model||"",s++)}return s&&bt(e),s}function mi(e,t){let n=le.get(e);if(!n||!t||!t.length)return 0;let r=new Map;for(let o of t)o&&o.url&&o.mark&&r.set(be(o.url),o);if(!r.size)return 0;let s=0;for(let o of n.feed){let a=r.get(be(o.url));a&&(o.rel=a.mark,o.relWhy=a.why||"",o.relAt=Date.now(),o.relModel=a.model||"",s++)}return s&&bt(e),s}function gi(e){let t=le.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.rel&&(delete r.rel,delete r.relWhy,delete r.relAt,delete r.relModel,n++);return n&&bt(e),n}function bi(e){let t=le.get(e);if(!t)return 0;let n=0;for(let r of t.feed)r.sent&&(delete r.sent,delete r.sentWhy,delete r.sentAt,delete r.sentModel,n++);return n&&bt(e),n}function Os(e){let t=Ut(e);if(!(0,we.existsSync)(t))return[];let n=[];for(let r of(0,we.readdirSync)(t))if(r.endsWith(".json"))try{n.push({file:(0,ze.join)(t,r),ts:r.slice(0,-5),bytes:(0,we.statSync)((0,ze.join)(t,r)).size})}catch{}return n.sort((r,s)=>r.ts.localeCompare(s.ts))}function wi(e){let t=Os(e),n=t.reduce((o,a)=>o+a.bytes,0),r=br(dn(e)),s=br(un(e));return{bytes:n+r+s,runBytes:n,feedBytes:r,metaBytes:s,runCount:t.length,avgRunBytes:t.length?Math.round(n/t.length):0}}function qu(e,t,{keep:n=30}={}){let r=Math.max(0,+t||0)*1024*1024;if(!r)return{removed:0,freed:0};let s=Os(e),a=br(dn(e))+br(un(e))+s.reduce((h,f)=>h+f.bytes,0),c=0,u=0;for(let h of s){if(a<=r||s.length-c<=n)break;try{(0,we.rmSync)(h.file,{force:!0}),c++,u+=h.bytes,a-=h.bytes}catch{}}let l=a>r;if(c){let h=le.get(e);if(h&&Array.isArray(h.meta.runs)){let f=new Set(Os(e).map(p=>p.ts)),d=h.meta.runs.length;h.meta.runs=h.meta.runs.filter(p=>f.has(p.ts)),h.meta.runs.length!==d&&Gt(e)}}return{removed:c,freed:u,bytes:a,limit:r,capped:l}}function vr(e,t,n){let r=le.get(e);if(!r||!t||!n||!n.length)return!1;let s=(0,ze.join)(Ut(e),t+".json"),o=Lt(s,null);return o?(o.log=(o.log||[]).concat(n),st(s,o),Si(e,t,o),(r.meta.runs||[])[0]&&r.meta.runs[0].ts===t&&(r.meta.lastLog=(r.meta.lastLog||[]).concat(n),Gt(e)),!0):!1}function yi(e,t){let n=le.get(e);if(!n)return null;let r=new Set((t||[]).filter(Boolean).map(be));if(!r.size)return{removed:0,total:(n.feed||[]).length};let s=n.feed.length;n.feed=n.feed.filter(a=>!r.has(be(a.url)));let o=s-n.feed.length;n.meta.deleted=[...new Set((n.meta.deleted||[]).concat([...r]))],n.meta.deleted.length>2e4&&(n.meta.deleted=n.meta.deleted.slice(-2e4)),n.meta.editedAt=Date.now();for(let a of n.meta.runs||[]){let c=(0,ze.join)(Ut(e),a.ts+".json"),u=Lt(c,null);if(!u||!Array.isArray(u.rows))continue;let l=u.rows.length;u.rows=u.rows.filter(h=>!r.has(be(h.url))),u.rows.length!==l&&(u.found=u.rows.length,u.added=Math.max(0,(u.added||0)-(l-u.rows.length)),st(c,u),a.found=u.found,a.added=u.added)}return bt(e),Gt(e),{removed:o,total:n.feed.length,deletedTotal:n.meta.deleted.length}}function pn(e,t,n,r){let s=le.get(e);if(!s)return{added:0,total:0};s.meta.runs=s.meta.runs||[];let o=r?s.meta.runs.find(d=>d.ts===r):null,a=o?o.at:Date.now();r||(r=ju());let c=new Set(s.feed.map(d=>be(d.url))),u=new Set((s.meta.deleted||[]).map(be)),l=u.size?t.filter(d=>!u.has(be(d.url))):t;for(let d of l)!d.url||c.has(be(d.url))||(c.add(be(d.url)),s.feed.push({source:d.source,date:d.date,title:d.title,url:d.url,channel:d.channel,channels:d.channels||d.channel,match:d.match,snippet:d.snippet,author:d.author||"",kind:d.kind||"",via:d.via||"",matchIn:d.matchIn||"",firstSeenAt:Date.now(),isNew:!0,run:r}));s.feed.sort((d,p)=>String(p.date||"").localeCompare(String(d.date||""))),s.feed.length>5e3&&(s.feed=s.feed.slice(0,5e3));let h=s.feed.filter(d=>d.run===r).length,f=l.length;s.meta.lastRun=a,s.meta.lastLog=n||[],o?(o.added=h,o.found=f):(o={ts:r,at:a,added:h,found:f},s.meta.runs.unshift(o)),s.meta.runs.length>300&&(s.meta.runs=s.meta.runs.slice(0,300)),bt(e),Gt(e);try{st((0,ze.join)(Ut(e),r+".json"),{at:a,added:h,found:f,log:n||[],rows:l})}catch{}Si(e,r,{at:a,added:h,found:f,log:n||[]});try{let d=Bs(s.meta.config);d&&Date.now()-(ti.get(e)||0)>300*1e3&&(ti.set(e,Date.now()),qu(e,d))}catch{}return{added:h,total:s.feed.length,ts:r}}function ki(e,t,n){let r=le.get(e);if(!r||!n)return null;let s=i(c=>(n.log||[]).find(u=>u.site===c),"line"),o=s("(период)"),a=s("(время)");return{проект:r.meta.name||"",прогон:vi(t)||t,"id прогона":t,запрос:(r.meta.config||{}).keyword||"",период:o?o.note:"",время:a?a.note:"",найдено:n.found||0,новых:n.added||0,сайты:(n.log||[]).map(c=>{let u={сайт:c.site,найдено:c.found||0,каналы:c.channel||"",заметка:c.note||""};return c.ms&&(u.секунд=Math.round(c.ms/1e3)),u})}}function Si(e,t,n){let r=le.get(e);if(!r)return;let s=ki(e,t,n);if(s)try{wr(cn);let o=xi(r.meta.name);st((0,ze.join)(cn,Bu(r.meta.name,t)),s);let a=(0,we.readdirSync)(cn).filter(c=>c.endsWith(" — "+o+".json")).sort();for(let c of a.slice(0,Math.max(0,a.length-Hu)))try{(0,we.rmSync)((0,ze.join)(cn,c),{force:!0})}catch{}}catch{}}function Ti(e,t){let n=Lt((0,ze.join)(Ut(e),t+".json"),null);return n?ki(e,t,n):null}function zn(e){let t=le.get(e);if(t&&Array.isArray(t.meta.runs))return t.meta.runs;try{return(0,we.readdirSync)(Ut(e)).filter(n=>n.endsWith(".json")).sort().reverse().map(n=>({ts:n.replace(/\.json$/,"")}))}catch{return[]}}function hn(e,t){return Lt((0,ze.join)(Ut(e),t+".json"),null)}var we,ni,ze,Nu,Is,gr,qs,mr,ri,wr,Pn,un,dn,Ut,ju,ln,le,ti,Gt,bt,Hs,br,Bs,cn,Hu,xi,vi,Bu,Wt=ae(()=>{we=require("node:fs"),ni=require("node:url"),ze=require("node:path");gt();_n();Ht();Nu=(0,ze.dirname)((0,ni.fileURLToPath)(__mcFileUrl));bs((e,t)=>{try{(0,we.cpSync)(e,t,{recursive:!0})}catch{}});Is=ge,gr=(0,ze.join)(Is,"projects"),qs=(0,ze.join)(Is,"settings.json"),mr=(0,ze.join)(Nu,"data.json"),ri=i(e=>e+Date.now().toString(36)+Math.random().toString(36).slice(2,6),"uid"),wr=i(e=>{try{(0,we.mkdirSync)(e,{recursive:!0})}catch{}},"ensureDir");i(st,"writeJson");i(Lt,"readJson");Pn=i(e=>(0,ze.join)(gr,e),"projDir"),un=i(e=>(0,ze.join)(Pn(e),"project.json"),"metaFile"),dn=i(e=>(0,ze.join)(Pn(e),"feed.json"),"feedFile"),Ut=i(e=>(0,ze.join)(Pn(e),"runs"),"runsDir"),ju=i(()=>new Date().toISOString().replace(/[:.]/g,"-").slice(0,23),"tsName"),ln={},le=new Map;i(Ou,"loadAll");i(Iu,"migrateOldDb");Ou();Iu();ti=new Map,Gt=i(e=>{let t=le.get(e);t&&st(un(e),t.meta)},"persistMeta"),bt=i(e=>{let t=le.get(e);t&&st(dn(e),t.feed)},"persistFeed");i(Ze,"settings");i(si,"setSettings");Hs=i(e=>({id:e.meta.id,name:e.meta.name,config:e.meta.config||{},schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,log:e.meta.lastLog||[],runs:e.meta.runs||[],items:e.feed||[],ai:e.meta.ai||{},editedAt:e.meta.editedAt||0,tg:Ln(e.meta.id)}),"shape");i(yr,"listProjects");i(tt,"getProject");i(oi,"createProject");i(ai,"updateProject");i(ii,"deleteProject");i(ci,"markRead");i(xr,"setAiReport");i(li,"getAiReports");i(zt,"tgState");i($t,"setTgState");i(Ln,"tgPublic");i(ui,"unsentItems");i(di,"markTgSent");i(pi,"markAllTgSent");i(hi,"unmarkTgSent");i(fi,"setSentiment");i(mi,"setRelevance");i(gi,"clearRelevance");i(bi,"clearSentiment");i(Os,"runFiles");br=i(e=>{try{return(0,we.existsSync)(e)?(0,we.statSync)(e).size:0}catch{return 0}},"fileBytes");i(wi,"projectUsage");Bs=i(e=>Math.max(0,Math.min(1e5,+(e||{}).diskMb||0)),"diskLimitMb");i(qu,"enforceDiskLimit");i(vr,"appendRunLog");i(yi,"deleteItems");i(pn,"mergeRun");cn=(0,ze.join)(Is,"logs"),Hu=30,xi=i(e=>String(e||"проект").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"проект","safeName"),vi=i(e=>{let t=new Date(e.slice(0,23).replace(/-(\d\d)-(\d\d)-(\d\d\d)$/,":$1:$2.$3")+"Z");if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p2");return Ke(t)+" "+n(t.getHours())+":"+n(t.getMinutes())},"humanTs"),Bu=i((e,t)=>(vi(t)||t.slice(0,16)).replace(":","-")+" — "+xi(e)+".json","logFileName");i(ki,"buildRunLog");i(Si,"saveRunLogCopy");i(Ti,"runLogJson");i(zn,"listRuns");i(hn,"getRun")});function Ri(){try{ut=(0,wt.existsSync)(Sr)?JSON.parse((0,wt.readFileSync)(Sr,"utf8")):{}}catch{ut={}}(!ut||typeof ut!="object")&&(ut={})}function Wu(){try{(0,wt.mkdirSync)(Ai,{recursive:!0});let e=Sr+".tmp";(0,wt.writeFileSync)(e,JSON.stringify(ut,null,2)),(0,wt.renameSync)(e,Sr)}catch{}}function Nn(e){try{return new URL(/:\/\//.test(e)?e:"https://"+e).host.replace(/^www\./,"")}catch{return String(e||"").trim()}}function Ci(e){let t=ut[Nn(e)];return!t||!t.pick||!t.pick.date||t.runs%Tr===Tr-1?"":t.pick.date.via||""}function Di(e,t){if(!t)return"";let n=Object.entries(t).filter(([l,h])=>l&&h>0);if(!n.length||n.reduce((l,[,h])=>l+h,0)<Ku)return"";n.sort((l,h)=>h[1]-l[1]);let[s,o]=n[0],a=_i(Nn(e));a.pick=a.pick||{};let c=a.pick.date;if(!c||!c.via)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if(c.via===s)return a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,"";if((t[c.via]||0)>=o*Yu)return a.pick.pending=null,"";let u=a.pick.pending&&a.pick.pending.via===s?a.pick.pending:{via:s,runs:0};return u.runs++,a.pick.pending=u,u.runs<Vu?"":(a.pick.date={via:s,n:o,at:a.runs},a.pick.pending=null,c.via)}function Ei(e){let t=ut[Nn(e)];return t&&t.pick&&t.pick.date?Gs(t.pick.date.via):""}function Pi(e){let t=Nn(e),n=ut[t],r=new Set;if(!n)return{skip:r,host:t,reprobe:!1};if((n.zero||0)>=2&&n.everFound)return{skip:r,host:t,reprobe:!1};let s=n.runs%Tr===Tr-1;if(!s)for(let o of Fs){let a=n.ch[o];a&&a.dead>=Us&&r.add(o)}if(!s)for(let o of Mi){let a=n.ch[o];a&&a.idle>=Gu(o)&&r.add(o)}if(!s&&!n.everFound&&(n.zero||0)>=Us)for(let o of Fs)r.add(o);return{skip:r,host:t,reprobe:s}}function Li(e,t){if(!t)return;let n=Nn(e),r=_i(n);r.runs++;for(let a of Fs){let c=t[a];if(c==null)continue;let u=r.ch[a]=r.ch[a]||{dead:0,okEver:!1};c>0?(u.dead=0,u.okEver=!0):u.dead++}typeof t.total=="number"&&(r.zero=t.total>0?0:(r.zero||0)+1,t.total>0&&(r.everFound=!0));let s=t.contrib,o=new Set(t.notRun||[]);if(s&&t.total>0)for(let a of Mi){if(o.has(a)||a in t&&t[a]===null)continue;let c=r.ch[a]=r.ch[a]||{idle:0,okEver:!1};(Fu[a]||[a]).reduce((l,h)=>l+(s[h]||0),0)>0?(c.idle=0,c.okEver=!0):c.idle=(c.idle||0)+1}}function Ws(){Wu()}function zi(){Ri()}var wt,$i,Ai,Sr,Fs,Mi,Fu,Us,Uu,Gu,Tr,ut,_i,Ku,Yu,Vu,Gs,Ni=ae(()=>{wt=require("node:fs"),$i=require("node:path");gt();_n();Ai=ge,Sr=(0,$i.join)(Ai,"site-memory.json"),Fs=["render","external","sitesearch"],Mi=["sitemap","render","sitesearch"],Fu={sitemap:["sitemap"],render:["render","render*"],sitesearch:["браузер-поиск","браузер-поиск*"]},Us=4,Uu={sitesearch:2},Gu=i(e=>Uu[e]||Us,"idleLimit"),Tr=5,ut={};i(Ri,"load");i(Wu,"save");Ri();i(Nn,"hostOf");_i=i(e=>ut[e]=ut[e]||{runs:0,ch:{}},"rec"),Ku=3;i(Ci,"datePick");Yu=.25,Vu=2;i(Di,"recordPicks");Gs=i(e=>Ta[e]||e||"","pickRu");i(Ei,"datePickRu");i(Pi,"plan");i(Li,"record");i(Ws,"persist");i(zi,"reload")});var Zs={};$n(Zs,{get:()=>Qu,persist:()=>Dr,reload:()=>Js,set:()=>ed,size:()=>rd,summary:()=>Xs});function ji(e){if(!(0,Ve.existsSync)(e))return null;try{let t=JSON.parse((0,Ve.readFileSync)(e,"utf8"));return!t||!t.urls?{bad:"в файле нет записей"}:t}catch(t){return{bad:String(t&&t.message||t).slice(0,80)}}}function Oi(e){if(e.v!==qi){Vs=!0;return}for(let[t,n]of Object.entries(e.urls))n&&n.d&&dt.set(t,{d:n.d,t:n.t||_r()})}function Js(){dt=new Map,On=!1,Ar="",Mr=!1,Rr=!1,Ys=!1,Vs=!1,$r=0;let e=ji(jn);if(Bi=e!==null,e&&!e.bad){Oi(e);return}if(!e)return;Ar=e.bad,Mr=!0;let t=ji(Hi);t&&!t.bad&&(Oi(t),Ys=!0)}function Qu(e){let t=dt.get(e);return t?(t.t!==_r()&&(t.t=_r(),On=!0),t.d):null}function ed(e,t){if(!e||!t)return;let n=dt.get(e);n&&n.d===t||(dt.set(e,{d:String(t),t:_r()}),On=!0)}function td(){if(dt.size<=Xu)return;let e=[...dt.entries()].sort((t,n)=>n[1].t-t[1].t).slice(0,Zu);dt=new Map(e)}function Ii(e,t){try{return(0,Ve.existsSync)(e)?((0,Ve.renameSync)(e,t),!0):!1}catch{return!1}}function Dr(e=!1){if(!(!On||Rr)&&!(!e&&$r&&Date.now()-$r<nd)){if(Mr){try{(0,Ve.existsSync)(Ks)&&(0,Ve.unlinkSync)(Ks)}catch{}if(!Ii(jn,Ks)){Rr=!0;return}Mr=!1}try{td(),(0,Ve.mkdirSync)(ge,{recursive:!0});let t={};for(let[r,s]of dt)t[r]=s;let n=jn+".tmp";(0,Ve.writeFileSync)(n,JSON.stringify({v:qi,urls:t})),Ii(jn,Hi),(0,Ve.renameSync)(n,jn),On=!1,$r=Date.now()}catch{}}}function rd(){return dt.size}function Xs(){let e=dt.size;return Ar?"память дат: ОСНОВНОЙ ФАЙЛ НЕ ПРОЧИТАЛСЯ ("+Ar+") — "+(Ys?"взята запасная копия, потеряно только самое новое (в памяти "+e+")":"запасной копии тоже не было, память собирается заново (в памяти "+e+"); этот прогон и следующий будут дольше обычного")+(Rr?". Отложить нечитаемый файл не удалось, поэтому новые даты НЕ сохранены — старую память не трогаем":". Нечитаемый файл сохранён как date-cache.broken.json — не удаляйте его, по нему видно причину"):Vs?"память дат сброшена: поменялся разбор дат — собирается заново (в памяти "+e+")":e?"память дат: "+e+" статей — повторно их не качаем":Bi?"":"память дат пока пуста — первый прогон собирает её с нуля"}var Ve,Cr,jn,qi,Xu,Zu,Hi,Ks,dt,On,Ar,Mr,Rr,Ys,Vs,Bi,_r,nd,$r,Fi=ae(()=>{Ve=require("node:fs"),Cr=require("node:path");gt();jn=(0,Cr.join)(ge,"date-cache.json"),qi=3,Xu=2e5,Zu=15e4,Hi=(0,Cr.join)(ge,"date-cache.prev.json"),Ks=(0,Cr.join)(ge,"date-cache.broken.json"),dt=new Map,On=!1,Ar="",Mr=!1,Rr=!1,Ys=!1,Vs=!1,Bi=!1,_r=i(()=>Math.floor(Date.now()/864e5),"today");i(ji,"readFile");i(Oi,"load");i(Js,"reload");i(Qu,"get");i(ed,"set");i(td,"prune");i(Ii,"move");nd=typeof process<"u"&&process.env&&Number(process.env.MC_DC_SAVE_GAP_MS)||18e4,$r=0;i(Dr,"persist");i(rd,"size");i(Xs,"summary")});function Ui(e){let t=i(n=>String(n).padStart(2,"0"),"p");return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())}function sd(e,t){let n=new Date(e.getFullYear(),e.getMonth(),e.getDate());return n.setDate(n.getDate()+t),n}function fn(e,t=new Date){let n=e||{},r=Ui(t),s=n.periodMode||"fixed";if(s==="rolling"){let c=Number(n.periodDays),u=Number.isFinite(c)&&c>=Gi?Math.floor(c):Gi,l=Ui(sd(t,-(u-1)));return{from:l,to:r,why:`скользящее окно: последние ${u} дн. (${l} … ${r})`}}if(s==="since"){let c=n.from||r;return c>r?{from:r,to:r,why:`начало (${c}) ещё не наступило — беру только сегодня`}:{from:c,to:r,why:`от даты и до сегодня (${c} … ${r})`}}let o=n.from||"",a=n.to||"";return!o&&!a?{from:o,to:a,why:"период НЕ ЗАДАН — беру за всё время, в выдачу попадёт и старое"}:o?a?{from:o,to:a,why:`фиксированное окно (${o} … ${a})`}:{from:o,to:a,why:`с ${o} и без конца — беру всё, что новее`}:{from:o,to:a,why:`без начала — беру всё до ${a} включительно`}}var Gi,Er=ae(()=>{i(Ui,"ymdLocal");i(sd,"shiftDays");Gi=2;i(fn,"resolvePeriod")});var Ji={};$n(Ji,{facebookProfile:()=>Pr,fbRows:()=>so,fbWindow:()=>ro,feedChunks:()=>Yi,isFacebook:()=>od,oldestAt:()=>oo,parseFeed:()=>Bn,postFromEdge:()=>Vi});function Pr(e){let t=String(e||"").trim();if(!t)return null;let n;try{n=new URL(/^https?:\/\//i.test(t)?t:"https://"+t.replace(/^\/+/,""))}catch{return null}if(!/(^|\.)facebook\.com$|(^|\.)fb\.com$/i.test(n.hostname))return null;let r=n.searchParams.get("id"),s=n.pathname.split("/").filter(Boolean),o=/^profile\.php$/i.test(s[0]||"")?r?"profile.php?id="+r:"":s[0]||"";return!o||/^(groups|watch|marketplace|events|gaming|pages|stories|reel|photo|share|login|help|settings)$/i.test(o)?null:{name:o,url:"https://www.facebook.com/"+o,label:"facebook.com/"+o.replace(/^profile\.php\?id=/,"id")}}function ad(e){let t=[];for(let n of String(e||"").split(`
`)){let r=n.trim();if(!(!r||r[0]!=="{"))try{t.push(JSON.parse(r))}catch{}}return t}function Yi(e){let t=[],n={cursor:"",hasNext:!1,seenFeed:!1};for(let r of ad(e)){let s=r&&r.data&&r.data.node&&r.data.node.timeline_list_feed_units;if(s){n.seenFeed=!0,Array.isArray(s.edges)&&t.push(...s.edges),s.page_info&&(n.cursor=s.page_info.end_cursor||"",n.hasNext=!!s.page_info.has_next_page);continue}if(id(r&&r.path)&&r.data&&r.data.node){n.seenFeed=!0,t.push(r.data);continue}let o=r&&r.data&&r.data.page_info;o&&Array.isArray(r.path)&&r.path.includes("timeline_list_feed_units")&&(n.seenFeed=!0,n.cursor=o.end_cursor||n.cursor,n.hasNext=!!o.has_next_page)}return{edges:t,info:n}}function qn(e,t,{skip:n=["attached_story"],depth:r=9}={}){let s=new Set,o=i((a,c)=>{if(!a||typeof a!="object"||c>r||s.has(a))return;if(s.add(a),Array.isArray(a)){for(let l of a){let h=o(l,c+1);if(h!==void 0)return h}return}let u=t(a);if(u!==void 0)return u;for(let l of Object.keys(a)){if(n.includes(l))continue;let h=o(a[l],c+1);if(h!==void 0)return h}},"walk");return o(e,0)}function Qs(e){if(!e)return;let t=In(e,"comet_sections","context_layout","story","comet_sections","metadata"),n=Array.isArray(t)?t.map(r=>mn(In(r,"story","creation_time"))).find(r=>r!==void 0):void 0;return mn(e.creation_time)??mn(In(e,"comet_sections","timestamp","story","creation_time"))??n??qn(e,r=>mn(r.creation_time),{skip:Hn})}function eo(e){if(e)return pt(In(e,"message","text"))??pt(In(e,"comet_sections","message","story","message","text"))??qn(e,t=>t.message&&pt(t.message.text)||void 0,{skip:Hn})}function Vi(e){let t=e&&(e.node||e);if(!t||typeof t!="object")return null;let n=t.comet_sections&&t.comet_sections.content&&t.comet_sections.content.story||t,r=[n.attached_story,t.attached_story].filter(Boolean),s=i(l=>{for(let h of r){let f=l(h);if(f!==void 0&&f!=="")return f}},"pickAt"),o=Ki(n)??Ki(t),a=no(n)??no(t);if(!o&&!a)return null;let c=to(n)??to(t)??{name:"",url:""},u={id:o||a,url:a||"",at:Qs(t)??Qs(n)??0,author:c.name,authorUrl:c.url,text:eo(n)??eo(t)??"",repost:null};if(r.length){let l=s(to)||{name:"",url:""};u.repost={author:l.name,authorUrl:l.url,url:s(no)||"",text:s(eo)||"",at:s(Qs)||0}}return u}function Bn(e){let{edges:t,info:n}=Yi(e),r=[],s=new Set;for(let o of t){let a=Vi(o);a&&(s.has(a.id)||(s.add(a.id),r.push(a)))}return{posts:r,cursor:n.cursor,hasNext:n.hasNext,seenFeed:n.seenFeed}}function ro(e,t,n=Date.now()){let r=Math.max(1,Math.min(3,+t||1)),s=i((l,h)=>{if(!l)return NaN;let f=new Date(String(l)+h).getTime();return Number.isFinite(f)?f:NaN},"stamp"),o=s(e&&e.from,"T00:00:00"),a=s(e&&e.to,"T23:59:59"),c=Math.max(Number.isFinite(o)?o:-1/0,n-r*864e5),u=Math.min(Number.isFinite(a)?a:1/0,n);return{fromMs:c,toMs:u,days:r}}function so(e,{groups:t,exGroups:n=[],source:r,fromMs:s,toMs:o}){if(!Number.isFinite(s)||!Number.isFinite(o))throw new Error("окно времени не посчиталось ("+s+" … "+o+") — это ошибка в программе, а не в настройках");let a=an(t),c=[],u={всего:0,"вне периода":0,"без даты":0,"ключа нет":0,"минус-слово":0};for(let l of e){if(u.всего++,!l.at){u["без даты"]++;continue}let h=l.at*1e3;if(h<s||h>o){u["вне периода"]++;continue}let f=l.text||"",d=l.repost&&l.repost.text||"",p=!!f&&Ge(f.toLowerCase(),t),m=!!d&&Ge(d.toLowerCase(),t);if(!p&&!m){u["ключа нет"]++;continue}if(n.length&&Ge((f+" "+d).toLowerCase(),n)){u["минус-слово"]++;continue}let g=l.repost?"репост":"авторский",b=p&&m?"в подписи и в репосте":p?"в подписи":"в тексте репоста",x=p?f:d,w=x.split(`
`).map(M=>M.trim()).find(Boolean)||"(без текста)";c.push({source:r,date:new Date(h).toISOString(),title:w.slice(0,120),url:l.url,channel:"facebook",channels:"facebook",match:p?"подпись":"репост",snippet:on(x,a),author:l.author||"",kind:g,via:l.repost?(l.repost.author||"чужой пост")+(l.repost.url?" — "+l.repost.url:""):"",matchIn:b})}return{rows:c,tally:u}}var od,id,mn,pt,In,Hn,Wi,to,no,Ki,oo,Lr=ae(()=>{fr();i(Pr,"facebookProfile");od=i(e=>!!Pr(e),"isFacebook");i(ad,"jsonLines");id=i(e=>Array.isArray(e)&&e.length>=2&&e[e.length-2]==="edges"&&typeof e[e.length-1]=="number"&&e.includes("timeline_list_feed_units"),"isEdgeChunk");i(Yi,"feedChunks");i(qn,"deep");mn=i(e=>typeof e=="number"&&isFinite(e)&&e>0?e:void 0,"num"),pt=i(e=>typeof e=="string"&&e.trim()?e:void 0,"str"),In=i((e,...t)=>t.reduce((n,r)=>n==null?n:n[r],e),"get"),Hn=["attached_story","attachments","attachment","style_infos","media"];i(Qs,"timeOf");i(eo,"textOf");Wi=i(e=>{if(!e||!Array.isArray(e.actors)||!e.actors.length)return;let t=e.actors[0];return t&&pt(t.name)?{name:t.name,url:pt(t.url)||""}:void 0},"oneActor"),to=i(e=>e?Wi(e)??qn(e,Wi,{skip:Hn}):void 0,"actorOf"),no=i(e=>e?pt(e.wwwURL)??pt(e.permalink_url)??qn(e,t=>pt(t.wwwURL)||pt(t.permalink_url),{skip:Hn}):void 0,"urlOf"),Ki=i(e=>e?pt(e.post_id)??(mn(e.post_id)?String(e.post_id):void 0)??qn(e,t=>pt(t.post_id)||(mn(t.post_id)?String(t.post_id):void 0),{skip:Hn}):void 0,"idOf");i(Vi,"postFromEdge");i(Bn,"parseFeed");i(ro,"fbWindow");i(so,"fbRows");oo=i(e=>e.reduce((t,n)=>n.at&&(!t||n.at<t)?n.at:t,0),"oldestAt")});function Nt(e){let t=!!(e&&e.noExternal);return{ai:!t,bot:!t,extSearch:!t,locked:t}}var gn,Fn=ae(()=>{i(Nt,"outbound");gn="у проекта запрещена отправка данных во внешний контур (настройка проекта)"});var uo={};$n(uo,{DEFAULT_LIMIT:()=>Kt,_reset:()=>dd,canVisit:()=>Nr,nextAt:()=>cd,note:()=>lo,persist:()=>co,reload:()=>io,summary:()=>ud,visitsToday:()=>ld});function io(){At=new Map;try{let e=(0,yt.existsSync)(Un)?JSON.parse((0,yt.readFileSync)(Un,"utf8")):null;for(let[t,n]of Object.entries(e&&e.hosts||{}))Array.isArray(n)&&At.set(t,n.filter(r=>typeof r=="number"&&isFinite(r)))}catch{At=new Map}return Wn=!1,At.size}function co(){if(!Wn)return!1;try{(0,yt.mkdirSync)((0,zr.dirname)(Un),{recursive:!0});let e={};for(let[n,r]of At)r.length&&(e[n]=r);let t=Un+".tmp";return(0,yt.writeFileSync)(t,JSON.stringify({v:1,hosts:e},null,2)),(0,yt.renameSync)(t,Un),Wn=!1,!0}catch{return!1}}function Nr(e,{limit:t=Kt,now:n=Date.now()}={}){let r=Math.max(1,+t||Kt),s=Kn(e,n);if(s.length>=r){let c=Gn-(n-Math.min(...s));return{ok:!1,used:s.length,limit:r,why:"за сутки уже "+s.length+" захода из "+r+" — следующий через "+ao(c)}}let o=Math.floor(Gn/r),a=s.length?Math.max(...s):0;if(a&&n-a<o){let c=n-a;return{ok:!1,used:s.length,limit:r,why:(c<6e4?"заходили только что":"заходили "+ao(c)+" назад")+" — на профиль ходим не чаще раза в "+ao(o)}}return{ok:!0,used:s.length,limit:r,why:""}}function lo(e,t=Date.now()){let n=Kn(e,t);return n.push(t),At.set(e,n),Wn=!0,n.length}function cd(e,{limit:t=Kt,now:n=Date.now()}={}){if(Nr(e,{limit:t,now:n}).ok)return 0;let s=Kn(e,n),o=Math.max(1,+t||Kt);return s.length>=o?Math.min(...s)+Gn:Math.max(...s)+Math.floor(Gn/o)}function dd(){At=new Map,Wn=!1}var yt,zr,Un,Gn,Kt,At,Wn,Kn,ao,ld,ud,po=ae(()=>{yt=require("node:fs"),zr=require("node:path");gt();Un=(0,zr.join)(ge,"social-visits.json"),Gn=24*3600*1e3,Kt=3,At=new Map,Wn=!1;i(io,"reload");i(co,"persist");Kn=i((e,t)=>(At.get(e)||[]).filter(n=>t-n<Gn),"fresh"),ao=i(e=>{let t=Math.round(e/6e4);if(t<1)return"только что";if(t<60)return t+" мин";let n=Math.floor(t/60),r=t%60;return n+" ч"+(r?" "+r+" мин":"")},"hhmm");i(Nr,"canVisit");i(lo,"note");i(cd,"nextAt");ld=i((e,t=Date.now())=>Kn(e,t).length,"visitsToday"),ud=i((e=Date.now())=>{let t=[...At.keys()].filter(n=>Kn(n,e).length).length;return t?"профилей соцсетей посещено за сутки: "+t:""},"summary");i(dd,"_reset")});function Xi(e,t){typeof e=="function"&&(fo=e),typeof t=="function"&&(mo=t)}function Zi(e){typeof e=="function"&&(go=e)}function Qi(e){typeof e=="function"&&(bo=e)}async function jr(e,t,n={}){let r=typeof n.onStep=="function"?n.onStep:null,s=typeof n.stopping=="function"?n.stopping:()=>!1,o=!1,a=e.config||{};if(!String(a.keyword||"").trim())return{rows:[],log:[{site:"(проект)",channel:"—",found:0,note:"не задан запрос — прогон пропущен"}]};Ja(),zi(),Js(),Ua(Zs);let c=(a.sites||[]).map(P=>String(P).trim()).filter(Boolean),u=fn(a),l=Nt(a),h={keyword:a.keyword,exclude:a.exclude||"",morph:a.morph!==!1,from:u.from,to:u.to,...l.extSearch?{}:{external:!1}},f=[],d=[],p=new Map,m=Date.now(),g=c.length+(a.facebook||[]).filter(P=>String(P||"").trim()).length+(a.youtube&&a.youtube.enabled?1:0),b=0,x=i(P=>{if(r)try{r({done:b,total:g,found:f.length,site:P||""})}catch{}},"tick");x(""),mo&&mo();let w=0,M=0,v=i(()=>{if(t)try{t(f.slice(),d.slice())}catch{}},"checkpoint"),T=i(async()=>{for(;w<c.length;){if(s()){o=!0;break}let P=c[w++],G=Date.now();x(P);try{let{skip:K,reprobe:Q}=Pi(P),ye=Ci(P),xe=await hr(P,{...h,skip:K,reprobe:Q,datePick:ye});Li(P,xe.stats);let $e=Di(P,xe.stats&&xe.stats.picks),C=Ei(P);C&&(xe.note=(xe.note?xe.note+"; ":"")+($e?"дата теперь берётся иначе: было «"+Gs($e)+"», стало «"+C+"» — сайт сменил разметку":"дата: "+C));for(let B of xe.rows){if(!B.url)continue;let _=be(B.url),z=p.get(_);if(z){z.channels=[...new Set((z.channels+" + "+(B.channels||"")).split(" + ").filter(Boolean))].join(" + ");continue}p.set(_,B),f.push(B)}d.push({site:P,channel:xe.channel,found:xe.rows.length,note:xe.note,ms:Date.now()-G})}catch(K){d.push({site:P,channel:"error",found:0,note:String(K&&K.message||K),ms:Date.now()-G})}b++,x(""),++M%3===0&&(Ws(),Dr(),v())}},"worker");await Promise.all(Array.from({length:Math.min(4,c.length||1)},T)),Ws(),Dr(!0),v();let k=(a.facebook||[]).map(P=>Pr(P)).filter(Boolean);if(k.length){let P=Math.max(1,Math.min(6,+a.fbVisits||Kt)),G=Date.now(),{fromMs:K,toMs:Q,days:ye}=ro(u,a.fbDays,G),xe=Tt(a.keyword,a.morph!==!1),$e=Tt(a.exclude||"",a.morph!==!1);io(),d.push({site:"(фейсбук)",channel:"—",found:0,note:"профилей "+k.length+"; окно "+ye+" сут. ("+new Date(K).toLocaleString("ru-RU")+" … "+new Date(Q).toLocaleString("ru-RU")+"); на профиль не чаще "+P+" раз в сутки"});for(let C of k){if(s()){o=!0;break}let B=Date.now();x(C.label);let _=Nr(C.label,{limit:P});if(!_.ok){d.push({site:C.label,channel:"facebook",found:0,note:"пропущен: "+_.why});continue}if(!bo){d.push({site:C.label,channel:"facebook",found:0,note:"нет браузера — соцсети читаются только с Playwright (запусти setup-windows.bat)"});continue}try{lo(C.label);let z=await bo(C.url,{sinceMs:K,maxScrolls:ye<=1?3:6});if(!z||!z.ok){d.push({site:C.label,channel:"facebook",found:0,ms:Date.now()-B,note:z&&z.err||"лента не прочитана"});continue}let $=Bn(z.chunks.join(`
`)),{rows:ie,tally:ce}=so($.posts,{groups:xe,exGroups:$e,source:C.label,fromMs:K,toMs:Q});for(let Ce of ie){let Ae=be(Ce.url);p.has(Ae)||(p.set(Ae,Ce),f.push(Ce))}let ke=["постов просмотрено "+$.posts.length+" (прокруток "+(z.scrolls||0)+")","совпало "+ie.length],Y=$.posts.reduce((Ce,Ae)=>Ae.at&&(!Ce||Ae.at<Ce)?Ae.at:Ce,0);ke.push(Y&&Y*1e3<=K?"докрутились до начала окна":"до начала окна НЕ докрутились — в ленте могло остаться ещё"+(Y?" (дошли до "+new Date(Y*1e3).toLocaleString("ru-RU")+")":""));let he=Object.entries(ce).filter(([Ce,Ae])=>Ce!=="всего"&&Ae).map(([Ce,Ae])=>Ce+" — "+Ae);he.length&&ke.push("отсеяно: "+he.join(", ")),d.push({site:C.label,channel:"facebook",found:ie.length,ms:Date.now()-B,note:ke.join("; ")})}catch(z){d.push({site:C.label,channel:"facebook",found:0,ms:Date.now()-B,note:String(z&&z.message||z)})}b++,x(""),v()}co()}if(a.youtube&&a.youtube.enabled&&!s()){x("youtube");try{let P=await ei(a.keyword,{exclude:a.exclude||"",morph:a.morph!==!1,ytRange:a.youtube.range||"month",from:u.from,to:u.to});for(let G of P.rows)G.url&&!p.has(G.url)&&(p.set(G.url,G),f.push(G));d.push({site:"youtube",channel:P.channel,found:P.rows.length,note:P.note})}catch(P){d.push({site:"youtube",channel:"error",found:0,note:String(P)})}b++,x("")}o&&d.push({site:"(остановлен)",channel:"—",found:0,note:"сбор остановлен человеком: пройдено источников "+b+" из "+g+". Найденное сохранено, остальные источники не читались"}),d.push({site:"(период)",channel:"—",found:0,note:u.why,from:u.from||"",to:u.to||""});let S=Xs();if(S&&d.push({site:"(память дат)",channel:"—",found:0,note:S}),go)try{await go()}catch{}let R=Date.now()-m,E=fo?fo():null,W=d.filter(P=>P.ms).sort((P,G)=>G.ms-P.ms).slice(0,5).map(P=>String(P.site).replace(/^https?:\/\//,"").replace(/\/$/,"")+" "+Math.round(P.ms/1e3)+" с"),q=["прогон занял "+ho(R)+" (сайтов "+c.length+", по 4 разом)"];if(E&&E.ops){let P=Math.max(1,E.lanes||1),G=E.busyMs/P,K=Math.round(G/Math.max(1,R)*100);q.push("браузер ("+P+" "+(P===1?"окно":P<5?"окна":"окон")+"): "+ho(E.busyMs)+" за "+E.ops+" операций"+(P>1?", то есть "+ho(Math.round(G))+" в один поток":"")+" — это "+K+"% времени прогона и его нижняя граница")}if(W.length&&q.push("дольше всех (с ожиданием очереди): "+W.join(", ")),E&&E.byHost){let P=Object.entries(E.byHost).sort((G,K)=>K[1].ms-G[1].ms).slice(0,5).map(([G,K])=>G+" "+Math.round(K.ms/1e3)+" с/"+K.ops+" оп.");P.length&&q.push("браузер съели: "+P.join(", "))}return d.push({site:"(время)",channel:"—",found:0,note:q.join("; "),ms:R}),f.sort((P,G)=>String(G.date||"").localeCompare(String(P.date||""))),{rows:f,log:d}}var fo,mo,go,bo,ho,wo=ae(()=>{fr();Ni();Fi();Er();_n();Lr();Fn();po();fo=null,mo=null;i(Xi,"setBrowserStats");go=null;i(Zi,"setBrowserCloser");bo=null;i(Qi,"setFacebookReader");ho=i(e=>{let t=Math.round(e/1e3);return t>=60?Math.floor(t/60)+" мин "+t%60+" с":t+" с"},"mmss");i(jr,"runProject")});var xt,yo=ae(()=>{xt=new Set});function Or(e,{name:t="",total:n=0,by:r="ручной"}={}){bn.set(String(e),{id:String(e),name:String(t||""),by:r,startedAt:Date.now(),total:+n||0,done:0,found:0,site:"",stopping:!1})}function Ir(e,{done:t,total:n,found:r,site:s}={}){let o=bn.get(String(e));o&&(Number.isFinite(+t)&&(o.done=+t),Number.isFinite(+n)&&+n>0&&(o.total=+n),Number.isFinite(+r)&&(o.found=+r),s!=null&&(o.site=String(s)))}function ec(e){let t=bn.get(String(e));return t?(t.stopping=!0,!0):!1}function qr(e){let t=bn.get(String(e));return!!(t&&t.stopping)}function Hr(e){bn.delete(String(e))}function tc(){return Array.from(bn.values()).map(e=>({id:e.id,name:e.name,by:e.by,startedAt:e.startedAt,total:e.total,done:e.done,found:e.found,site:e.site,stopping:e.stopping,ms:Date.now()-e.startedAt}))}var bn,xo=ae(()=>{bn=new Map;i(Or,"begin");i(Ir,"step");i(ec,"askStop");i(qr,"stopping");i(Hr,"end");i(tc,"snapshot")});function Yn(e){return String(e||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^t\.me\/s\//,"t.me/").replace(/^@/,"t.me/").replace(/\/+$/,"")}var vo,rc,sc,ko=ae(()=>{vo=[{url:"kz.kursiv.media",name:"Курсив"},{url:"zakon.kz",name:"Zakon.kz"},{url:"kapital.kz",name:"Капитал"},{url:"informburo.kz",name:"Informburo"},{url:"tengrinews.kz",name:"Tengrinews"},{url:"kazpravda.kz",name:"Казахстанская правда"},{url:"baq.kz",name:"BAQ.kz"},{url:"khabar.kz",name:"Хабар"},{url:"turkystan.kz",name:"Túrkistan"},{url:"24.kz",name:"24.kz"},{url:"liter.kz",name:"Литер"},{url:"caravan.kz",name:"Караван"},{url:"newtimes.kz",name:"NewTimes"},{url:"stan.kz",name:"Stan.kz"},{url:"lada.kz",name:"Лада (Актау)"},{url:"sn.kz",name:"Столичная жизнь"},{url:"vechastana.kz",name:"Вечерняя Астана"},{url:"aikyn.kz",name:"Айқын"},{url:"ulysmedia.kz",name:"Ulys Media"},{url:"malim.kz",name:"Malim"},{url:"vlast.kz",name:"Власть"},{url:"astanatv.kz",name:"Астана ТВ"},{url:"exclusive.kz",name:"Exclusive"},{url:"forbes.kz",name:"Forbes Казахстан"},{url:"mgorod.kz",name:"Мой город (Уральск)"},{url:"politico.kz",name:"Politico.kz"},{url:"sputnik.kz",name:"Sputnik Казахстан"},{url:"almaty.tv",name:"Алматы ТВ"},{url:"qazaqstan.tv",name:"Qazaqstan"},{url:"democrat.kz",name:"Democrat"},{url:"arasha.kz",name:"Arasha"},{url:"press.kz",name:"Press.kz"},{url:"365info.kz",name:"365info"},{url:"lsm.kz",name:"LS (lsm.kz)"},{url:"inbusiness.kz",name:"InBusiness"},{url:"factcheck.kz",name:"Factcheck.kz"},{url:"egemen.kz",name:"Egemen Qazaqstan"},{url:"ratel.kz",name:"Ratel"},{url:"nur.kz",name:"NUR.KZ"},{url:"time.kz",name:"Время"},{url:"uralskweek.kz",name:"Уральская неделя"},{url:"yujanka.kz",name:"Южанка"}],rc=[{url:"bbc.com",name:"BBC"},{url:"theguardian.com",name:"The Guardian"},{url:"aljazeera.com",name:"Al Jazeera"},{url:"dw.com",name:"Deutsche Welle",note:"поиск сайта работает (параметр item)"},{url:"cnn.com",name:"CNN"},{url:"euronews.com",name:"Euronews",note:"поиск сайта работает"},{url:"npr.org",name:"NPR"},{url:"cbsnews.com",name:"CBS News"},{url:"nbcnews.com",name:"NBC News"},{url:"abcnews.go.com",name:"ABC News",note:"карта новостей на 1000 адресов с заголовками"},{url:"independent.co.uk",name:"The Independent"},{url:"straitstimes.com",name:"The Straits Times"},{url:"time.com",name:"TIME"},{url:"usatoday.com",name:"USA Today"},{url:"newsweek.com",name:"Newsweek"},{url:"japantimes.co.jp",name:"The Japan Times",note:"из облака отдавал 403; RSS живой"},{url:"france24.com",name:"France 24",note:"из облака отдавал 403 — проверить прогоном"},{url:"apnews.com",name:"Associated Press",note:"из облака отдавал 403 — проверить прогоном"},{url:"reuters.com",name:"Reuters",note:"статьи за DataDome; в robots.txt издание запрещает автоматический сбор — решение ваше"}],sc=[{url:"t.me/ktknews",name:"КТК",note:"вместо ktk.kz — сайт целиком за защитой"},{url:"t.me/kaztag_tg",name:"КазТАГ",note:"вместо kaztag.kz — статьи за Cloudflare"},{url:"t.me/dknews_kz",name:"ДК News",note:"вместо dknews.kz — поиск только через браузер"},{url:"t.me/tass_agency",name:"ТАСС"},{url:"t.me/negemedia",name:"negemedia"},{url:"t.me/syrymitkulov",name:"Сырым Иткулов"},{url:"t.me/qumash_kz",name:"qumash_kz"},{url:"t.me/myastanacity",name:"My Astana City"},{url:"t.me/azattyqasia",name:"Azattyq Asia"},{url:"t.me/azattyq_ruhy",name:"Azattyq Rýhy"},{url:"t.me/Zanamiviehali",name:"Zanamiviehali"},{url:"t.me/prokadrykz",name:"Про кадры KZ"},{url:"t.me/bessimptomno",name:"Бессимптомно"},{url:"t.me/ztb_qazaq",name:"ztb_qazaq"},{url:"t.me/ztb_qaz",name:"ztb_qaz"},{url:"t.me/egovpress",name:"eGov Press"},{url:"t.me/nehabar",name:"НеХабар"},{url:"t.me/kozachkow",name:"kozachkow"},{url:"t.me/gaziz1984",name:"gaziz1984"},{url:"t.me/adyrnaportal",name:"Adyrna"},{url:"t.me/yedilov_online",name:"Yedilov online"},{url:"t.me/basekz",name:"BASE KZ"},{url:"t.me/chinovnik_kz",name:"Чиновник KZ"},{url:"t.me/respublikaKZmediaNEWS",name:"Республика KZ"},{url:"t.me/dashimbayev",name:"dashimbayev"},{url:"t.me/KrivosheyevD",name:"Кривошеев"},{url:"t.me/nkorganbekova",name:"Н. Корганбекова"}];i(Yn,"normSource")});function Mt(e){if(!e)return"";let t=new Date(e);if(isNaN(t.getTime()))return"";let n=i(r=>String(r).padStart(2,"0"),"p");return t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+n(t.getDate())}function pd(e){let t=new Date(e);return isNaN(t.getTime())?-1:t.getHours()}function hd(e){let t=new Date(e);return isNaN(t.getTime())?-1:(t.getDay()+6)%7}function fd(e){let t=String(e||""),n=t.match(/прогон занял\s+(\d+)\s+мин\s+(\d+)\s+с/),r=t.match(/прогон занял\s+(\d+)\s+с/),s=n?+n[1]*60+ +n[2]:r?+r[1]:null,o=t.match(/браузер[^:]*:\s+(\d+)\s+мин\s+(\d+)\s+с/),a=t.match(/браузер[^:]*:\s+(\d+)\s+с/),c=o?+o[1]*60+ +o[2]:a?+a[1]:null;return{total:s,browser:c}}function md(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function Br(e,t=15){return[...e.entries()].map(([n,r])=>({key:n,count:r})).sort((n,r)=>r.count-n.count||n.key.localeCompare(r.key)).slice(0,t)}function Yt(e){let t=String(e||"").toLowerCase();return t.startsWith("t.me/")?"telegram":t==="youtube"?"youtube":t.startsWith("facebook.com/")?"facebook":"site"}function So(e,t={}){let n=tt(e);if(!n)return[];let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Mt(new Date(Date.now()-(r-1)*864e5).toISOString()):null;return(n.items||[]).filter(o=>o&&o.title&&o.date&&(!s||Mt(o.date)>=s)).map(o=>({title:o.title,url:o.url,source:o.source,date:o.date,snippet:o.snippet||"",sent:o.sent||"",sentWhy:o.sentWhy||"",rel:o.rel||"",relWhy:o.relWhy||""}))}function jt(e,t={}){let n=tt(e);if(!n)return null;let r=Number.isFinite(+t.days)&&+t.days>0?+t.days:null,s=r?Mt(new Date(Date.now()-(r-1)*864e5).toISOString()):null,o=i(D=>!s||D&&D>=s,"inWindow"),a=(n.items||[]).filter(D=>D.date&&o(Mt(D.date))),c=new Map;for(let D of a){let ee=Mt(D.date);ee&&c.set(ee,(c.get(ee)||0)+1)}let u=[...c.keys()].sort(),l=s,h=u[u.length-1]||Mt(new Date().toISOString());l||(l=u[0]||h);let f=[];for(let D=+new Date(l+"T00:00:00");D<=+new Date(h+"T00:00:00");D+=864e5){let ee=Mt(new Date(D).toISOString());f.push({day:ee,count:c.get(ee)||0})}let d=new Map,p=new Map,m={site:0,telegram:0,youtube:0,facebook:0},g=0,b=0,x=0,w=0,M=0,v=Array.from({length:7},()=>Array(24).fill(0));for(let D of a){d.set(D.source,(d.get(D.source)||0)+1);let ee=String(D.channel||"неизв.").replace(/\*$/,"");p.set(ee,(p.get(ee)||0)+1),m[Yt(D.source)]++,D.match==="title"?g++:D.match==="post"?x++:D.match==="body"?b++:D.match==="video"?w++:M++;let Ee=pd(D.date),We=hd(D.date);Ee>=0&&We>=0&&v[We][Ee]++}let T=i(D=>D.map(ee=>({...ee,kind:md(ee.key)})),"withKind"),k=T(Br(new Map([...d].filter(([D])=>Yt(D)==="site")),10)),S=T(Br(new Map([...d].filter(([D])=>Yt(D)!=="site")),10)),R=T(Br(d,20)),E=Br(p,12),W=a.slice(0,25).map(D=>({date:D.date,source:D.source,title:D.title,url:D.url,channel:D.channel,channels:D.channels,match:D.match,kind:Yt(D.source)})),q=zn(e),P=s?+new Date(s+"T00:00:00"):null,G=P?q.filter(D=>(D.at||0)>=P):q,K=[],Q=[],ye=[];for(let D of G.slice(0,50)){let Ee=((hn(e,D.ts)||{}).log||[]).find(y=>y&&y.site==="(время)"),{total:We,browser:Dt}=fd(Ee?Ee.note:"");We!=null&&(Q.push(We),Dt!=null&&We>0&&ye.push(Dt/We*100)),K.push({ts:D.ts,at:D.at,found:D.found||0,added:D.added||0,sec:We,browserSec:Dt})}K.reverse();let xe=d.size,$e=Mt(new Date(Date.now()-6*864e5).toISOString()),C=a.filter(D=>Mt(D.date)>=$e).length,B=i(D=>{if(!D.length)return null;let ee=[...D].sort((We,Dt)=>We-Dt),Ee=ee.length>>1;return ee.length%2?ee[Ee]:Math.round((ee[Ee-1]+ee[Ee])/2)},"median"),_=B(Q),z=ye.length?Math.round(B(ye)):null,$=_?Q.filter(D=>D>_*3&&D>_+60).length:0,ie=Q.length?Math.max(...Q):null,ce=m.telegram+m.youtube+m.facebook,ke=(n.config&&n.config.sites||[]).map(D=>String(D||"").trim()).filter(Boolean),Y=new Set([...d.keys()].map(Yn)),he=ke.filter(D=>!Y.has(Yn(D))),Ce={configured:ke.length,active:ke.length-he.length,list:he.slice(0,60).map(D=>Yn(D)),more:Math.max(0,he.length-60)},Ae=new Map,Se=0,Ne=0,Jt=0;for(let D of a){if(!D.sent)continue;D.sent==="+"?Se++:D.sent==="0"?Ne++:D.sent==="-"&&Jt++;let ee=Yn(D.source||""),Ee=Ae.get(ee)||{key:ee,pos:0,neu:0,neg:0};D.sent==="+"?Ee.pos++:D.sent==="0"?Ee.neu++:D.sent==="-"&&Ee.neg++,Ae.set(ee,Ee)}let vt=0,Xt=0,Zt=0;for(let D of a)D.rel&&(vt++,D.rel==="-"?Xt++:D.rel==="0"&&Zt++);let Le={checked:vt,off:Xt,dim:Zt},It={total:Se+Ne+Jt,pos:Se,neu:Ne,neg:Jt,bySource:[...Ae.values()].sort((D,ee)=>ee.neg-D.neg||ee.pos+ee.neu+ee.neg-(D.pos+D.neu+D.neg))};return{overview:{items:a.length,uniqueSources:xe,runs:G.length,itemsWeek:C,medRunSec:_,browserPct:z,slowRuns:$,maxRunSec:ie,matchTitle:g,matchBody:b,matchPost:x,matchVideo:w,matchOther:M,siteItems:m.site,telegramItems:m.telegram,youtubeItems:m.youtube,facebookItems:m.facebook,socialItems:ce,keyword:n.config.keyword||"",from:n.config.from||null,to:n.config.to||null,windowDays:r,windowFrom:l,windowTo:h},byDay:f,bySource:R,bySite:k,bySocial:S,byChannel:E,byHour:v,runs:K,feed:W,silent:Ce,tone:It,relevance:Le}}var Vn=ae(()=>{Wt();ko();i(Mt,"localDay");i(pd,"localHour");i(hd,"localDow");i(fd,"parseTime");i(md,"kindOf");i(Br,"top");i(Yt,"platformOf");i(So,"windowItems");i(jt,"buildAnalytics")});function bd(e){let t=String(e||"");return/high demand|overload|UNAVAILABLE|RESOURCE_EXHAUSTED|NOT_FOUND|not found|is not supported|HTTP 503|HTTP 429|\b503\b|\b429\b|\b404\b/i.test(t)}function $o(e){let t=String(e||"").trim(),n=[];for(let r of[t||Ur,...gd]){let s=String(r||"").trim();s&&!n.includes(s)&&n.push(s)}return n}function To(e,t){let n=[];if(!e||!e.overview)return"Проект по мониторингу СМИ Казахстана.";let r=e.overview;n.push("Мониторинг СМИ Казахстана. Объект наблюдения: «"+(r.keyword||"—")+"».");let s=r.windowFrom&&r.windowTo?r.windowFrom+"…"+r.windowTo:"вся история";if(n.push("Период: "+s+". Публикаций: "+r.items+", источников с материалом: "+r.uniqueSources+"."),(r.matchTitle||r.matchBody)&&n.push("Из них с объектом В ЗАГОЛОВКЕ: "+r.matchTitle+"; только В ТЕКСТЕ: "+r.matchBody+" (второе — упоминание вскользь, первое — материал про него)."),r.siteItems!=null){let o=[];r.siteItems&&o.push("сайты СМИ "+r.siteItems),r.telegramItems&&o.push("телеграм "+r.telegramItems),r.youtubeItems&&o.push("YouTube "+r.youtubeItems),r.facebookItems&&o.push("Фейсбук "+r.facebookItems),o.length>1&&n.push("Площадки: "+o.join(", ")+".")}return n.push(""),n.push("Кто пишет (публикаций за период):"),e.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+" — "+o.count)),e.silent&&e.silent.list&&e.silent.list.length&&(n.push(""),n.push("Молчали за период ("+e.silent.list.length+" из "+e.silent.configured+" отслеживаемых): "+e.silent.list.slice(0,15).join(", ")+(e.silent.more?" и ещё "+e.silent.more:"")+".")),n.push(""),n.push("Публикации по дням:"),e.byDay.slice(-21).forEach(o=>n.push("  "+o.day+" — "+o.count)),e.tone&&e.tone.total&&(n.push(""),n.push("Тональность (уже оценена ранее, всего размечено "+e.tone.total+"): выигрышных "+e.tone.pos+", нейтральных "+e.tone.neu+", невыгодных "+e.tone.neg+"."),e.tone.bySource&&e.tone.bySource.length&&(n.push("По источникам (источник: выигрышно/нейтрально/невыгодно):"),e.tone.bySource.slice(0,15).forEach(o=>n.push("  "+o.key+": "+o.pos+"/"+o.neu+"/"+o.neg)))),t&&t.length&&(n.push(""),n.push("Заголовки материалов:"),t.slice(0,60).forEach(o=>n.push("  • "+o))),n.join(`
`)}function ic(e){let t=String(e||""),n=t.search(/РАЗМЕТКА\s*:?/i),r=n>=0?t.slice(n):t,s={};for(let o of r.matchAll(/(?:^|\n)[ \t]*(\d{1,4})[ \t]*[:.\-–][ \t]*([+\-0])[ \t]*(?:[:;–—-][ \t]*([^\n]*))?(?=\n|$)/g)){let a=String(o[3]||"").trim();for(let c=0;c<4;c++){let u=a;if(a=a.replace(/^[«"'(\s]+/,"").replace(/[»"')\s]+$/,"").replace(/[.;,]+$/,"").trim(),a===u)break}a=a.slice(0,90),s[+o[1]]={mark:o[2],why:a}}return Object.keys(s).length?s:null}function cc(e){let t=String(e||""),n=t.search(/\n\s*РАЗМЕТКА\s*:?/i);return(n>=0?t.slice(0,n):t).trim()}async function yd({apiKey:e,model:t,text:n,maxOut:r,timeoutMs:s=6e4,temp:o=.2}){let a=String(t||Ur).trim(),c=i(f=>({contents:[{role:"user",parts:[{text:n}]}],generationConfig:{temperature:o,maxOutputTokens:r,...f?{thinkingConfig:{thinkingBudget:0}}:{}}}),"mkBody"),u=new AbortController,l=setTimeout(()=>u.abort(),s),h=i(async f=>{let d=await fetch(wd(a)+"?key="+encodeURIComponent(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c(f)),signal:u.signal}),p=await d.text(),m=null;try{m=JSON.parse(p)}catch{}return{httpOk:d.ok,status:d.status,raw:p,data:m}},"call");try{let f=await h(!0);if(!f.httpOk&&/thinking/i.test(f.raw||"")&&(f=await h(!1)),!f.httpOk)return{ok:!1,err:"Google API: "+(f.data&&f.data.error&&f.data.error.message?f.data.error.message:(f.raw||"HTTP "+f.status).slice(0,400))};let d=f.data&&f.data.candidates&&f.data.candidates[0],p=d&&d.content&&d.content.parts,m=Array.isArray(p)?p.map(b=>b.text||"").join("").trim():"",g=d&&d.finishReason;if(g==="MAX_TOKENS")return m?{ok:!0,text:m,truncated:!0}:{ok:!1,err:"модель израсходовала лимит на размышление и не успела ответить — попробуйте ещё раз или смените модель"};if(!m){let b=g?" (причина: "+g+")":"",x=f.data&&f.data.promptFeedback&&f.data.promptFeedback.blockReason;return{ok:!1,err:"модель ничего не ответила"+(x?" — запрос отклонён: "+x:b)}}return{ok:!0,text:m}}catch(f){return{ok:!1,err:f&&f.name==="AbortError"?"ответ не пришёл за "+Math.round(s/1e3)+" с":String(f&&f.message||f)}}finally{clearTimeout(l)}}async function lc(e){let t=$o(e.model),n=null,r=[];for(let o of t){let a=await yd({...e,model:o});if(a.ok)return{...a,model:o,...r.length?{fellBack:{from:t[0],to:o,tried:r.slice()}}:{}};if(n=a,r.push({model:o,err:a.err}),!bd(a.err))break}return{ok:!1,err:r.length>1?"перебрали модели ("+r.map(o=>o.model).join(", ")+"), последняя ошибка — "+(n&&n.err):n&&n.err,model:t[0],tried:r}}async function uc({apiKey:e,timeoutMs:t=15e3}={}){if(!e)return{ok:!1,err:"не задан ключ Google"};let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(ac.replace(/\/$/,"")+"?key="+encodeURIComponent(e)+"&pageSize=200",{signal:n.signal}),o=await s.text(),a=null;try{a=JSON.parse(o)}catch{}return s.ok?{ok:!0,models:(Array.isArray(a&&a.models)?a.models:[]).filter(l=>Array.isArray(l.supportedGenerationMethods)?l.supportedGenerationMethods.includes("generateContent"):!0).map(l=>String(l.name||"").replace(/^models\//,"")).filter(Boolean).filter(l=>!/embedding|aqa|image|imagen|veo|tts/i.test(l))}:{ok:!1,err:"Google API: "+(a&&a.error&&a.error.message||o.slice(0,300))}}catch(s){return{ok:!1,err:s&&s.name==="AbortError"?"Google не ответил вовремя":String(s&&s.message||s)}}finally{clearTimeout(r)}}async function Gr({apiKey:e,model:t,analytics:n,sampleTitles:r,kind:s="summary"}){if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};if(s==="verify")return{ok:!1,err:"проверка релевантности идёт другим путём (askVerifyAll)"};let o=String(t||Ur).trim(),a=Fr[s]||Fr.summary,c=r||[],u=s==="sentiment"?To(n,null)+`

Заголовки для оценки (`+c.length+` шт.):
`+c.map((f,d)=>d+1+". "+f).join(`
`):To(n,c),l=s==="sentiment"?dc(c.length):2e3,h=await lc({apiKey:e,model:o,text:a+u,maxOut:l,temp:s==="sentiment"?0:.2});return h.ok?{ok:!0,text:cc(h.text),model:h.model||o,marks:ic(h.text),...h.truncated?{truncated:!0}:{},...h.fellBack?{fellBack:h.fellBack}:{}}:h}function dc(e){return Math.max(2e3,Math.min(8e3,700+e*30))}function Sd(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","Знак ставится ПО ОТНОШЕНИЮ К НЕМУ, а не «хорошая или плохая новость вообще»:","  +  объект показан в выигрышном свете: достижение, награда, поддержка, похвала в его адрес;","  -  объект показан невыгодно: критика, обвинение, провал, скандал, недовольство им;","  0  протокольное сообщение, факт, объявление — без оценки объекта.","Беда, катастрофа, конфликт САМИ ПО СЕБЕ негативом не считаются: если объект помогает","пострадавшим, решает проблему или просто упомянут рядом — для него это 0 или +.","Если по показанному тексту тон не виден — ставь 0 и пиши причину «тон по фрагменту не виден».","Это лучше, чем угадать: угаданный знак от настоящего не отличить.",""].join(`
`)}function $d(e){return!e||typeof e!="object"?"":String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,Td)}function Ad(e){let t=e&&typeof e=="object"?e.title:e;return String(t??"").replace(/\s+/g," ").trim()}function Md(e){let t=e&&e.overview&&e.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(t?"«"+t+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","  +  материал действительно ПРО ЭТОТ объект: он действующее лицо, о нём говорят,","     его решение, его ведомство, его слова — даже если упомянут вскользь;","  -  слово совпало СЛУЧАЙНО: однофамилец или тёзка, другой человек с той же фамилией,","     улица/район/школа, названные этим именем, другая организация с похожим названием,","     другое значение слова;","  0  по показанному тексту понять нельзя.","Упоминание вскользь — это всё равно «+»: наша задача отсеять ЧУЖОЕ, а не короткое.","Если сомневаешься между «-» и «0» — ставь 0. Выброшенный по ошибке материал","дороже лишнего: пропускать важное нельзя.",""].join(`
`)}async function pc(e){return fc({...e,task:"sentiment"})}async function hc(e){return fc({...e,task:"verify"})}async function fc({apiKey:e,model:t,analytics:n,titles:r,batch:s=xd,maxCalls:o=kd,task:a="sentiment"}){let c=oc[a]||oc.sentiment;if(!e)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let u=String(t||Ur).trim(),l=(r||[]).map(R=>({title:Ad(R),snip:$d(R)}));if(!l.length)return{ok:!1,err:"нечего оценивать: в окне нет материалов"};let h=l.some(R=>R.snip),f={},d=0,p="",m="",g=u,b=null,x=i(async(R,E,W)=>{if(R>=E||d>=o)return;let q=l.slice(R,E),P=q.map((C,B)=>R+B+1+". "+C.title+(C.snip?`
   из текста: `+C.snip:"")).join(`
`),G=Fr[W?c.first:c.more]+c.subject(n)+(h?Fr.withSnippets:""),K=W?G+To(n,null)+`

Заголовки для оценки (`+q.length+` шт.):
`:G+"Заголовки ("+q.length+` шт.):
`;d++;let Q=await lc({apiKey:e,model:u,text:K+P,maxOut:dc(q.length),temp:0});if(!Q.ok){m||(m=Q.err);return}g=Q.model||g,Q.fellBack&&!b&&(b=Q.fellBack);let ye=ic(Q.text)||{},xe=Object.keys(ye).filter(C=>+C>R&&+C<=E);for(let C of xe)f[C]=ye[C];if(W&&!p&&(p=cc(Q.text)),q.length-xe.length>Math.max(1,Math.floor(q.length*.1))&&q.length>vd&&d<o){let C=R+Math.floor(q.length/2);await x(R,C,!1),await x(C,E,!1)}},"askChunk");await x(0,Math.min(s,l.length),!0);for(let R=s;R<l.length&&d<o;R+=s)await x(R,Math.min(R+s,l.length),!1);let w=Object.keys(f);if(!w.length)return{ok:!1,err:m||"модель не вернула разметку"};let M=0,v=0,T=0;for(let R of w){let E=f[R]&&f[R].mark;E==="+"?M++:E==="0"?v++:E==="-"&&T++}let k=M+v+T,S=c.counts(M,v,T);return p&&S.push(p),{ok:!0,model:g,marks:f,text:S.join(`
`).trim(),calls:d,covered:k,asked:l.length,...b?{fellBack:b}:{},...m&&k<l.length?{partialErr:m}:{}}}var Ur,gd,ac,wd,Fr,xd,vd,kd,Td,oc,Ao=ae(()=>{Ur="gemini-3.5-flash",gd=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.5-flash"];i(bd,"worthNextModel");i($o,"modelChain");ac=typeof process<"u"&&process.env&&process.env.MC_GEMINI_BASE||"https://generativelanguage.googleapis.com/v1beta/models/",wd=i(e=>`${ac}${encodeURIComponent(e)}:generateContent`,"ENDPOINT");i(To,"brief");Fr={summary:["Ты — редактор-аналитик службы медиамониторинга. Ниже — данные по теме за период.","Дай РОВНО 5 наблюдений на русском языке. Каждое — одна строка, начинается с «— »,","одно-два предложения, и каждое опирается на показанные данные.","","Смотри СОДЕРЖАТЕЛЬНО:","  • какие сюжеты идут по теме, что повторяется у разных изданий, а что прозвучало один раз;","  • кто рядом с объектом — люди, ведомства, компании, регионы — и в какой связи;","  • как подают тему РАЗНЫЕ источники: где совпадают, где расходятся, кто ведёт, а кто молчит;","  • если дана тональность — сопоставь её с источниками: у кого перекос и в чём он состоит;","  • как меняется картина по дням: всплеск, затухание, разовый повод или длящийся сюжет;","  • упоминания вскользь (объект только в тексте) против материалов ПРО него.","","ЗАПРЕЩЕНО: писать про саму программу и про то, как собраны данные;","пересказывать и перечислять заголовки, цитировать их, выводить списки материалов;","писать JSON, markdown-таблицы, заголовки разделов; давать советы («важно следить», «рекомендуется»).","Заголовки даны как материал для выводов — в ответе их быть не должно.","Числа бери из данных. Не выдумывай ни источников, ни событий, которых в них нет.","","Ответ — только пять строк, начинающихся с «— ». Ничего до и после.",""].join(`
`),sentiment:["Ты — редактор-аналитик службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Оцени тональность каждого материала по отношению к ОБЪЕКТУ МОНИТОРИНГА (см. ниже).","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: чем окрашена тема, есть ли перекос по конкретным СМИ>","","РАЗМЕТКА:","1:+:награда врачам, тон одобрительный","2:0:протокольное сообщение без оценки","3:-:критика в адрес ведомства","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ позитив, 0 нейтрально, - негатив), двоеточие и КОРОТКАЯ причина —","от двух до шести слов по-русски, строчными, без точки в конце. Причина объясняет","ИМЕННО ЭТОТ заголовок: что в нём делает его позитивным, нейтральным или негативным.","Не пересказывай заголовок и не повторяй слово «позитив»/«негатив» — это уже есть в знаке.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем оценку с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),withSnippets:["Под частью заголовков строкой «из текста:» дан фрагмент статьи вокруг ключевого слова.","Опирайся В ПЕРВУЮ ОЧЕРЕДЬ на него: заголовок часто протокольный («провёл совещание»),","а настоящий тон виден в тексте. Фрагмент — это НЕ отдельный материал и своего номера","не имеет: он относится к заголовку над собой.",""].join(`
`),sentimentMore:["Ты — редактор-аналитик службы медиамониторинга. Продолжаем оценку тональности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + позитив, 0 нейтрально, - негатив. Причина — от двух до шести слов","по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`),verify:["Ты — редактор службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Задача ровно одна: сказать, относится ли каждый материал К ОБЪЕКТУ МОНИТОРИНГА —","или слово совпало случайно (однофамилец, тёзка, другое значение слова, чужая организация).","Тональность, важность и качество материала тебя здесь НЕ интересуют.","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: много ли постороннего попало в выдачу и какого рода>","","РАЗМЕТКА:","1:+:премьер-министр, тот самый","2:-:однофамилец, сотрудник КНБ","3:0:по фрагменту не понять, кто это","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ это про объект, - это НЕ про объект, 0 по показанному не понять), двоеточие","и КОРОТКАЯ причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем вердикт с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),verifyMore:["Ты — редактор службы медиамониторинга. Продолжаем проверку релевантности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + это про объект, - это НЕ про объект (совпало слово), 0 по показанному не понять.","Причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`)};i(ic,"parseMarks");i(cc,"stripMarks");i(yd,"callOne");i(lc,"callModel");i(uc,"listModels");i(Gr,"askGemini");i(dc,"outCapFor");xd=120,vd=15,kd=12;i(Sd,"subjectBlock");Td=200;i($d,"snipOf");i(Ad,"titleOf");i(Md,"subjectBlockVerify");oc={sentiment:{first:"sentiment",more:"sentimentMore",subject:Sd,counts:i((e,t,n)=>["ПОЗИТИВНЫХ: "+e,"НЕЙТРАЛЬНЫХ: "+t,"НЕГАТИВНЫХ: "+n,""],"counts")},verify:{first:"verify",more:"verifyMore",subject:Md,counts:i((e,t,n)=>["ПРО ОБЪЕКТ: "+e,"НЕ ПОНЯТЬ: "+t,"НЕ ПРО ОБЪЕКТ: "+n,""],"counts")}};i(pc,"askSentimentAll");i(hc,"askVerifyAll");i(fc,"askMarksAll")});function mc(e){let t=e||{},n=String(t.mode||"off");return n==="daily"?1:n==="hours"?Math.max(1,Math.ceil(24/Math.max(1,+t.everyHours||6))):n==="minutes"?Math.max(1,Math.ceil(1440/Math.max(10,+t.everyMinutes||20))):0}function Wr(e){return mc(e)<=1}function Kr(e){return"прогоны идут чаще раза в сутки ("+mc(e)+" в сутки) — проверка релевантности смотрит каждый материал окна и на таком шаге сожгла бы квоту Google. Поставьте расписание «каждый день» или реже — или запускайте проверку вручную."}var Mo=ae(()=>{i(mc,"runsPerDay");i(Wr,"verifyAllowed");i(Kr,"verifyWhyNot")});function Rd(e,t=60){return(e.items||[]).filter(n=>n&&n.title&&n.rel!=="-").slice(0,t).map(n=>({title:n.title,url:n.url,source:n.source,date:n.date,sent:n.sent||""}))}function _o(e){return(e||[]).map(t=>{let n=typeof t=="string"?t:t.title||"",r=t&&t.source?" — "+t.source:"",s=t&&t.sent&&gc[t.sent]?" ["+gc[t.sent]+"]":"";return n+r+s})}function Co(e){return(e||{}).geminiSnippets!==!1}function Cd(e,t){return Co(t)?e.map(n=>({title:n.title,snippet:n.snippet||""})):e.map(n=>n.title)}function Vr(e,t){if(!t)return null;let n=[];return e.forEach((r,s)=>{let o=t[s+1];if(!o)return;let a=typeof o=="string"?o:o.mark,c=typeof o=="string"?"":o.why||"";(a==="+"||a==="0"||a==="-")&&n.push({...r,mark:a,why:c})}),n.length?n:null}async function Do(e,{kind:t="sentiment",days:n=null,analytics:r,settings:s,rescore:o=!1}={}){let a=bc[t]||bc.sentiment,c=s||Ze();if(!c.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};o&&a.clear(e);let u=So(e,{days:n});if(!u.length)return{ok:!1,err:a.empty};let l=u.filter(w=>!w[a.field]).slice(0,_d),h=u.filter(w=>w[a.field]).length,f=0,d=0,p="",m=c.geminiModel||"",b=((li(e)||{})[t]||{}).text||"";if(l.length){let w=await a.ask({apiKey:c.geminiKey,model:c.geminiModel,analytics:r,titles:Cd(l,c)});if(f=w.calls||0,!w.ok)return{ok:!1,err:w.err||"не получилось",calls:f,model:w.model||m};m=w.model||m,w.text&&(b=w.text);let M=(Vr(l,w.marks)||[]).map(v=>({...v,model:m}));d=a.set(e,M),p=""}let x=So(e,{days:n}).filter(w=>w[a.field]).map(w=>({title:w.title,url:w.url,source:w.source,date:w.date,mark:w[a.field],why:w[a.why]||""}));return{ok:!0,text:b,model:m,err:p,calls:f,fresh:d,stored:h,asked:l.length,covered:x.length,total:u.length,items:x.length?x:null}}function Eo(e){return!e||!e.ok?e&&e.err||"не получилось":e.asked?`оценено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее оценено ${e.stored} — не переспрашивали`:"")+`; всего в окне размечено ${e.covered} из ${e.total}`:`все ${e.covered} материалов окна уже оценены — к Google не ходили`}function Po(e){if(!e||!e.ok)return e&&e.err||"не получилось";let t=(e.items||[]).filter(s=>s.mark==="-").length,n=(e.items||[]).filter(s=>s.mark==="0").length,r=`; похоже, не про объект — ${t}`+(n?`, по фрагменту не понять — ${n}`:"")+"; ничего не удалено, решает человек";return e.asked?`проверено ${e.fresh} новых из ${e.asked} (запросов к Google: ${e.calls})`+(e.stored?`; ранее проверено ${e.stored} — не переспрашивали`:"")+`; всего в окне проверено ${e.covered} из ${e.total}`+r:`все ${e.covered} материалов окна уже проверены — к Google не ходили`+r}async function Jr(e,{foundNow:t=null,runTs:n=null}={}){let r=[],s=tt(e);if(!s)return r;let o=s.config||{};if(!o.aiAuto)return r;if(!Nt(o).ai)return r.push("ИИ-разбор пропущен: "+gn),r;let a=Ze();if(!a.geminiKey)return r.push("ИИ-разбор включён, но ключ Gemini не задан — пропускаю (задайте во вкладке «Аналитика»)"),r;if(t===0)return r.push("ИИ-разбор пропущен: в этом прогоне ноль материалов — квоту не тратим"),r;let c=Array.isArray(o.aiKinds)&&o.aiKinds.length?o.aiKinds.filter(h=>Ro.includes(h)):["summary"],u=o.periodMode==="rolling"?Math.max(2,+o.periodDays||2):null,l=jt(e,{days:u});if(!l)return r;for(let h of c)try{if(h==="verify"&&!Wr(s.schedule)){r.push(`ИИ-${Yr[h]} пропущена: `+Kr(s.schedule));continue}let f=h==="sentiment"||h==="verify",d=f?null:Rd(s),p=f?await Do(e,{kind:h,days:u,analytics:l,settings:a}):await Gr({apiKey:a.geminiKey,model:a.geminiModel,analytics:l,sampleTitles:_o(d),kind:h});xr(e,h,{at:Date.now(),runTs:n,window:l.overview.windowFrom+" … "+l.overview.windowTo,text:p.ok?p.text:"",model:p.model||a.geminiModel||"",err:p.ok?"":p.err||"не получилось",auto:!0,items:p.ok?f?p.items:Vr(d,p.marks):null});let m=h==="sentiment"?Eo(p):h==="verify"?Po(p):"готово";r.push(p.ok?`ИИ-${Yr[h]}: ${m}`:`ИИ-${Yr[h]}: ${p.err||"не получилось"}`)}catch(f){r.push(`ИИ-${Yr[h]}: сбой — ${String(f&&f.message||f)}`)}return r}var Ro,Yr,gc,_d,bc,Lo=ae(()=>{Wt();Vn();Ao();Fn();Mo();Ro=["summary","sentiment","verify"],Yr={summary:"разбор",sentiment:"тональность",verify:"проверка релевантности"};i(Rd,"sampleItems");gc={"+":"выигрышно",0:"нейтрально","-":"невыгодно"};i(_o,"summaryTitles");_d=600;i(Co,"sendSnippets");i(Cd,"sentimentTitles");i(Vr,"applyMarks");bc={sentiment:{field:"sent",why:"sentWhy",ask:pc,set:fi,clear:bi,empty:"нечего оценивать: в окне нет материалов"},verify:{field:"rel",why:"relWhy",ask:hc,set:mi,clear:gi,empty:"нечего проверять: в окне нет материалов"}};i(Do,"markRun");i(Eo,"sentimentNote");i(Po,"verifyNote");i(Jr,"runAiAfterRun")});async function Zr(e,t,n={},r=Pd){if(!e)return{ok:!1,err:"не задан токен бота"};let s=new AbortController,o=setTimeout(()=>s.abort(),r);try{let a=await fetch(`${Dd}/bot${e}/${t}`,{method:"POST",signal:s.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),c=await a.text(),u=null;try{u=JSON.parse(c)}catch{}return u?u.ok?{ok:!0,result:u.result}:{ok:!1,err:u.description||"телеграм отказал (HTTP "+a.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+a.status+")"}}catch(a){let c=String(a&&a.message||a);return{ok:!1,err:/abort/i.test(c)?"телеграм не ответил за "+Math.round(r/1e3)+" с":c}}finally{clearTimeout(o)}}async function yc(e){let t=await Zr(e,"getMe");if(!t.ok)return{ok:!1,err:t.err};let n=t.result&&t.result.username||"";return{ok:!0,bot:n?"@"+n:t.result&&t.result.first_name||"бот"}}async function No(e,t={}){let n=(t.chats||[]).slice(),r=new Map(n.map(u=>[String(u.id),u])),s=await Zr(e,"getUpdates",{offset:t.offset||0,timeout:0,limit:100});if(!s.ok)return{chats:n,offset:t.offset||0,err:s.err,added:0};let o=t.offset||0,a=0,c=0;for(let u of s.result||[]){u.update_id!=null&&(o=Math.max(o,u.update_id+1));let l=u.message||u.channel_post||u.my_chat_member,h=l&&l.chat;if(!h||h.id==null)continue;let f=String(l.text||"").trim().toLowerCase(),d=[h.title,h.first_name,h.username&&"@"+h.username].filter(Boolean)[0]||String(h.id);if(/^\/stop\b/.test(f)||u.my_chat_member&&/kicked|left/.test(String(u.my_chat_member.new_chat_member&&u.my_chat_member.new_chat_member.status))){r.delete(String(h.id))&&c++;continue}r.has(String(h.id))?r.get(String(h.id)).name=d:(r.set(String(h.id),{id:h.id,name:d}),a++)}return{chats:[...r.values()],offset:o,added:a,removed:c,err:""}}function zd(e,t){let n=sr(e.date)||"",r=[e.source,n].filter(Boolean).map(Xr).join(" · "),s=String(e.title||e.url||""),o=i(c=>String(c||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),"flat"),a=String(e.snippet||"").replace(/\s+/g," ").trim().slice(0,300);return a&&(o(a)===o(s)||o(s).includes(o(a)))&&(a=""),[r?"📰 <b>"+r+"</b>":"📰",Xr(s),a?"<i>"+Xr(a)+"</i>":"",e.url||"",t?"<i>"+Xr(t)+"</i>":""].filter(Boolean).join(`
`)}async function Vt(e,t={}){if(zo.has(e))return{sent:0,skipped:"уже идёт отправка"};let n=zt(e);if(!n.enabled||!n.token)return{sent:0,skipped:"бот выключен"};let r=tt(e);if(!r)return{sent:0,skipped:"проект не найден"};if(!Nt(r.config||{}).bot)return{sent:0,skipped:gn};zo.add(e);try{let s=await No(n.token,n);$t(e,{chats:s.chats,offset:s.offset,err:s.err||""});let o=s.chats;if(!o.length)return{sent:0,skipped:"никто не нажал Start"};let a=ui(e);if(!a.length)return{sent:0,skipped:"нового нет"};let c=a.slice(0,Ed),u=a.length-c.length,l=0,h=[];for(let d of c){let p=zd(d,t.withName===!1?"":r.name),m=!1;for(let g of o){let b=await Zr(n.token,"sendMessage",{chat_id:g.id,text:p,parse_mode:"HTML",disable_web_page_preview:!0});b.ok?m=!0:$t(e,{err:b.err})}m&&(h.push(d.url),l++),wc&&await Ld(wc)}if(h.length&&di(e,h),u>0)for(let d of o)await Zr(n.token,"sendMessage",{chat_id:d.id,text:"… и ещё "+u+": пришлю следующей порцией. Всё сразу — в кабинете."});let f=zt(e);return $t(e,{sentTotal:(f.sentTotal||0)+l,lastSentAt:Date.now(),err:l?"":f.err}),{sent:l,rest:u,chats:o.length}}catch(s){try{$t(e,{err:String(s&&s.message||s)})}catch{}return{sent:0,err:String(s&&s.message||s)}}finally{zo.delete(e)}}var Dd,Ed,wc,Pd,Ld,Xr,zo,jo=ae(()=>{Wt();Ht();Fn();Dd=typeof process<"u"&&process.env&&process.env.MC_TG_API_BASE||"https://api.telegram.org",Ed=30,wc=typeof process<"u"&&process.env&&process.env.MC_TG_PAUSE_MS!=null?Math.max(0,+process.env.MC_TG_PAUSE_MS):1200,Pd=15e3,Ld=i(e=>new Promise(t=>setTimeout(t,e)),"sleep"),Xr=i(e=>String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"esc");i(Zr,"tgApi");i(yc,"checkBot");i(No,"pullChats");i(zd,"formatItem");zo=new Set;i(Vt,"notifyNew")});function Tc(){let e="";try{e=(0,es.userInfo)().username||""}catch{}return(0,wn.createHash)("sha256").update((0,es.hostname)()+"|"+e).digest("hex").slice(0,16)}function Ho(){try{return(0,ht.existsSync)(Io)?JSON.parse((0,ht.readFileSync)(Io,"utf8")):null}catch{return null}}function qo(e){try{(0,ht.mkdirSync)(ge,{recursive:!0})}catch{}try{(0,ht.writeFileSync)(Io,JSON.stringify(e,null,2))}catch{}}function Nd(){let e=Ho();if(e&&e.installedAt)return e.installedAt>=Qr?e.installedAt:(qo({...e,installedAt:Qr}),Qr);let t=Date.now();try{(0,ht.existsSync)(ge)&&(t=Math.min(t,(0,ht.statSync)(ge).birthtimeMs||t))}catch{}return t=Math.max(t,Qr),qo({...e||{},installedAt:t}),t}function $c(e){let t=Ho()||{};return t.key=String(e||"").trim(),qo(t),ts()}function jd(e,t=Date.now()){let n=String(e||"").trim();if(!n)return{ok:!1,why:"ключ не введён"};if(!vc)return{ok:!1,why:"проверка ключей ещё не включена — программа работает в пробном режиме"};let r=n.split(".");if(r.length!==3||r[0]!=="MC1")return{ok:!1,why:"это не похоже на ключ mediachrome — скопируй строку целиком, она начинается с MC1."};let s;try{s=(0,wn.createPublicKey)({key:Buffer.from(vc,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ — нужна переустановка"}}let o=!1;try{o=(0,wn.verify)(null,Buffer.from(r[0]+"."+r[1],"utf8"),s,kc(r[2]))}catch{o=!1}if(!o)return{ok:!1,why:"подпись ключа не сошлась — ключ поддельный или повреждён при пересылке"};let a;try{a=JSON.parse(kc(r[1]).toString("utf8"))}catch{a=null}if(!a||typeof a!="object")return{ok:!1,why:"ключ подписан верно, но его содержимое не читается"};let c={to:String(a.to||""),until:a.until||null,id:String(a.id||""),hw:a.hw||null};if(c.hw&&c.hw!==Tc())return{ok:!1,why:"ключ выдан для другого компьютера",info:c};if(c.until){let u=Date.parse(c.until+"T23:59:59");if(!Number.isFinite(u))return{ok:!1,why:"в ключе неразборчивая дата окончания",info:c};if(t>u)return{ok:!1,why:"срок лицензии истёк "+c.until,info:c,expired:!0}}return{ok:!0,why:"",info:c}}function ts(e=Date.now()){let t=Ho()||{},n=Nd(),r=Math.floor((e-n)/864e5),s=Math.min(Oo,Math.max(0,Oo-r)),o=t.key?jd(t.key,e):{ok:!1,why:""},a={installedAt:n,hasKey:!!t.key,machine:Tc(),enforced:xc};if(o.ok)return{...a,ok:!0,mode:"licensed",daysLeft:null,why:"",to:o.info.to,until:o.info.until,keyId:o.info.id,locked:!!o.info.hw,keyWhy:""};let c=s<=0;return{...a,ok:!xc||!c,mode:c?"expired":"trial",daysLeft:s,why:c?"пробный период ("+Oo+" дней) закончился — нужен лицензионный ключ":"",keyWhy:t.key?o.why:""}}function ns(e=Date.now()){let t=ts(e);return t.ok?null:t.why}var Sc,ht,wn,es,xc,Oo,vc,Io,Qr,kc,Bo=ae(()=>{Sc=require("node:path"),ht=require("node:fs"),wn=require("node:crypto"),es=require("node:os");gt();xc=!0,Oo=7,vc="MCowBQYDK2VwAyEA/0CvjwtjJF+3fBS+0ewj3O9wtXQBpDiheHRzJV/PXPw=",Io=(0,Sc.join)(ge,"license.json");i(Tc,"machineId");i(Ho,"readState");i(qo,"writeState");Qr=Date.parse("2026-09-22T00:00:00Z");i(Nd,"installedAt");i($c,"setKey");kc=i(e=>Buffer.from(String(e).replace(/-/g,"+").replace(/_/g,"/"),"base64"),"b64urlToBuf");i(jd,"verifyKey");i(ts,"licenseState");i(ns,"blockedReason")});function Mc(){setInterval(Fd,60*1e3)}async function Od(e,t=Id){let n=[...new Set((e||[]).map(a=>String(a).trim()).filter(Boolean).map(a=>a.replace(/^https?:\/\//,"").replace(/\/.*$/,"")).filter(a=>a&&!a.startsWith("@")))],r=n.filter(a=>!/^t\.me$/i.test(a)),s=(r.length?r:n).slice(0,3);return s.length?(await Promise.all(s.map(a=>t(a)))).some(Boolean):!0}async function Id(e){let t=new AbortController,n=setTimeout(()=>t.abort(),6e3);try{return await fetch("https://"+e+"/",{method:"HEAD",redirect:"follow",signal:t.signal}),!0}catch{return!1}finally{clearTimeout(n)}}function Bd(e,t){let n=e.schedule||{mode:"off"},r=e.lastRun||0,s=(t.getTime()-r)/6e4;if(n.mode==="minutes")return s>=Hd(n)-.5;if(n.mode==="hours")return s>=(n.everyHours||6)*60-.5;if(n.mode==="daily"){let o=n.hour!=null?n.hour:9,a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),o,0,0,0);return t.getTime()>=a.getTime()&&r<a.getTime()}return!1}async function Fd(){if(ns()||xt.size)return;let e=new Date;for(let t of yr()){if(xt.has(t.id))continue;let n=tt(t.id);if(!n)continue;let r=Math.max(n.lastRun||0,Ac.get(n.id)||0);if(Bd({...n,lastRun:r},e)){if(!await Od((n.config||{}).sites)){console.log(`[расписание] «${n.name}»: сети нет — откладываю (проверю через минуту)`);continue}xt.add(n.id),Or(n.id,{name:n.name,by:"расписание"}),Ac.set(n.id,Date.now());try{let s=null,o=i((h,f)=>{try{let d=pn(n.id,h,f,s);s=d.ts,Vt(n.id,{ts:d.ts}).catch(()=>{})}catch{}},"onProgress"),{rows:a,log:c}=await jr(n,o,{onStep:i(h=>Ir(n.id,h),"onStep"),stopping:i(()=>qr(n.id),"stopping")}),u=pn(n.id,a,c,s);try{await Vt(n.id,{ts:u.ts})}catch{}let l=await Jr(n.id,{foundNow:a.length,runTs:u.ts});l.length&&(vr(n.id,u.ts,l.map(h=>({site:"(ИИ)",channel:"gemini",found:0,note:h}))),l.forEach(h=>console.log(`[расписание] «${n.name}»: ${h}`))),console.log(`[расписание] «${n.name}»: +${u.added} новых (всего ${u.total})`)}catch(s){console.error("[расписание] ошибка:",s&&s.message||s)}finally{xt.delete(n.id),Hr(n.id)}}}}var qd,Hd,Ac,Rc=ae(()=>{Wt();wo();yo();xo();Lo();jo();Bo();i(Mc,"startScheduler");i(Od,"netReady");i(Id,"probeHost");qd=10,Hd=i(e=>Math.max(qd,Math.min(720,+(e&&e.everyMinutes)||20)),"everyMinutes");i(Bd,"isDue");Ac=new Map;i(Fd,"tick")});function zc(){return"0.5.1"}function Nc(e,t){let n=String(e||"").split(/[.\-+]/),r=String(t||"").split(/[.\-+]/);for(let s=0;s<Math.max(n.length,r.length);s++){let o=parseInt(n[s],10),a=parseInt(r[s],10),c=Number.isFinite(o)?o:0,u=Number.isFinite(a)?a:0;if(c!==u)return c<u?-1:1}return 0}function ss(){try{return(0,_e.existsSync)(Fo)?JSON.parse((0,_e.readFileSync)(Fo,"utf8")):{}}catch{return{}}}function _c(e){try{(0,_e.mkdirSync)(ge,{recursive:!0}),(0,_e.writeFileSync)(Fo,JSON.stringify(e,null,2))}catch{}}async function Wd(e,t=15e3){let n=new AbortController,r=setTimeout(()=>n.abort(),t);try{let s=await fetch(e,{signal:n.signal,redirect:"follow",headers:{"Cache-Control":"no-cache"}});if(!s.ok)throw new Error("HTTP "+s.status);let o=await s.text();return JSON.parse(o)}finally{clearTimeout(r)}}async function Uo(e={}){let t=ss(),n=Date.now(),r=Number.isFinite(e.every)?e.every:Gd;if(!e.force&&t.checkedAt&&n-t.checkedAt<r)return Jn();Ie={...Ie,phase:Ie.phase==="downloading"?"downloading":"checking",err:""};try{let s=await Wd(Ud),o=String(s.version||"").trim();if(!o)throw new Error("в файле версии нет номера");_c({...t,checkedAt:n,err:"",latest:{version:o,notes:String(s.notes||""),url:String(s.setup||s.url||""),sha256:String(s.sha256||"").toLowerCase(),size:+s.size||0,at:String(s.at||"")}})}catch(s){_c({...t,checkedAt:n,err:String(s&&s.message||s).slice(0,200)})}return Ie.phase==="checking"&&(Ie={...Ie,phase:"idle"}),Jn()}function Go(e){let t=(0,Ot.join)(yn,"mediachrome-setup-"+e+".exe");try{return(0,_e.existsSync)(t)&&(0,_e.statSync)(t).size>0?t:""}catch{return""}}function Jn(){let e=ss(),t=zc(),n=e.latest||null,r=!!(n&&n.version&&Nc(t,n.version)<0);return{current:t,latest:n?n.version:"",newer:r,notes:n?n.notes:"",size:n?n.size:0,checkedAt:e.checkedAt||0,err:e.err||"",canInstall:process.platform==="win32"&&r&&!!(n&&n.url),ready:r?!!Go(n.version):!1,phase:Ie.phase,got:Ie.got,total:Ie.total,liveErr:Ie.err}}async function jc(){let t=ss().latest;if(!t||!t.url)return{ok:!1,err:"не знаю, что качать — сначала проверка"};if(Nc(zc(),t.version)>=0)return{ok:!1,err:"у вас и так последняя версия"};let n=Go(t.version);if(n)return{ok:!0,file:n,cached:!0};if(Ie.phase==="downloading")return{ok:!0,running:!0};Ie={phase:"downloading",got:0,total:t.size||0,err:""};let r=(0,Ot.join)(yn,"mediachrome-setup-"+t.version+".part");try{(0,_e.mkdirSync)(yn,{recursive:!0});for(let f of(0,_e.readdirSync)(yn))if(!f.includes(t.version))try{(0,_e.rmSync)((0,Ot.join)(yn,f),{force:!0})}catch{}let s=new AbortController,o=await fetch(t.url,{signal:s.signal,redirect:"follow"});if(!o.ok)throw new Error("HTTP "+o.status);let a=+o.headers.get("content-length")||t.size||0;Ie={...Ie,total:a};let c=(0,Ec.createHash)("sha256"),u=new rs.Transform({transform(f,d,p){c.update(f),Ie={...Ie,got:Ie.got+f.length},p(null,f)}});await(0,Lc.pipeline)(rs.Readable.fromWeb(o.body),u,(0,_e.createWriteStream)(r));let l=c.digest("hex");if(t.sha256&&l!==t.sha256){try{(0,_e.rmSync)(r,{force:!0})}catch{}throw new Error("файл скачался испорченным (отпечаток не сошёлся) — попробуйте ещё раз")}let h=(0,Ot.join)(yn,"mediachrome-setup-"+t.version+".exe");try{(0,_e.rmSync)(h,{force:!0})}catch{}return(0,_e.renameSync)(r,h),Ie={phase:"ready",got:Ie.got,total:a,err:""},{ok:!0,file:h}}catch(s){try{(0,_e.rmSync)(r,{force:!0})}catch{}let o=String(s&&s.message||s).slice(0,200);return Ie={phase:"error",got:0,total:0,err:o},{ok:!1,err:o}}}function Oc(e={}){if(e.busy)return{ok:!1,err:"сейчас идёт сбор — обновление подождёт до его конца"};let n=ss().latest,r=n&&Go(n.version);if(!r)return{ok:!1,err:"установщик ещё не скачан"};if(process.platform!=="win32")return{ok:!1,err:"установщик есть только для Windows"};try{(0,Pc.spawn)(r,["/SILENT","/NOCANCEL","/RESTARTAPPLICATIONS"],{detached:!0,stdio:"ignore"}).unref()}catch(s){return{ok:!1,err:String(s&&s.message||s).slice(0,200)}}return{ok:!0,version:n.version}}var Ot,_e,Cc,Dc,Ec,Pc,rs,Lc,Ud,Fo,yn,Gd,Ie,Ic=ae(()=>{Ot=require("node:path"),_e=require("node:fs"),Cc=require("node:url"),Dc=require("node:path"),Ec=require("node:crypto"),Pc=require("node:child_process"),rs=require("node:stream"),Lc=require("node:stream/promises");gt();Ud=process.env.MC_UPDATE_URL||"https://raw.githubusercontent.com/Tim2190/mediachrome-dist/main/update.json",Fo=(0,Ot.join)(ge,"update-state.json"),yn=(0,Ot.join)(ge,"update"),Gd=24*3600*1e3;i(zc,"currentVersion");i(Nc,"cmpVer");i(ss,"readState");i(_c,"writeState");Ie={phase:"idle",got:0,total:0,err:""};i(Wd,"getJson");i(Uo,"checkUpdate");i(Go,"readyFile");i(Jn,"updateState");i(jc,"downloadUpdate");i(Oc,"installUpdate")});function os(){return`<!doctype html>\r
<html lang="ru">\r
<head>\r
<meta charset="utf-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1">\r
<title>mediachrome — кабинет</title>\r
<!-- Значок вкладки — прямо в странице, без отдельного файла: у сервера такого\r
     маршрута нет, браузер получал 404 на каждой загрузке, а в файле для показа\r
     (он открывается вообще без сервера) запрос уходил бы в никуда. -->\r
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230f1216'/%3E%3Crect x='6' y='17' width='4' height='9' fill='%233b82f6'/%3E%3Crect x='12' y='11' width='4' height='15' fill='%2322c55e'/%3E%3Crect x='18' y='14' width='4' height='12' fill='%23f59e0b'/%3E%3Crect x='24' y='7' width='3' height='19' fill='%23e6e9ef'/%3E%3C/svg%3E">\r
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
</script>\r
</head>\r
<body>\r
<header>\r
  <!-- ЗНАК И НАЗВАНИЕ — ЭТО ССЫЛКА ДОМОЙ. Просьба пользователя 22 сентября\r
       2026: «кнопки навигации подсветить, чтобы пользователь понимал, как\r
       вернуться в кабинет». Логотип, ведущий на главную, — то, что человек\r
       пробует первым в любой программе; раньше он был просто надписью. -->\r
  <a class="brand" href="#/" title="В кабинет — ко всем проектам">\r
    <svg class="mark" viewBox="0 0 32 32" aria-hidden="true">\r
      <rect x="6" y="17" width="4" height="9" rx="1.5" fill="var(--acc)"/>\r
      <rect x="12" y="11" width="4" height="15" rx="1.5" fill="var(--ok)"/>\r
      <rect x="18" y="14" width="4" height="12" rx="1.5" fill="var(--new)"/>\r
      <rect x="24" y="7" width="3" height="19" rx="1.5" fill="var(--txt2)"/>\r
    </svg>\r
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
async function updateBox(app){\r
  if(SNAP) return;                       // в снимке дашборда сервера нет вовсе\r
  let s; try{ s = await (await api('/update')).json(); }catch(e){ return; }\r
  const box = el('<div></div>');\r
  // Новость — наверх, спокойное «всё свежее» — вниз: полоска про обновление не\r
  // должна каждый день отодвигать сами проекты.\r
  if(s.newer) app.insertBefore(box, app.firstChild); else app.appendChild(box);\r
\r
  const draw = (s, busyText)=>{\r
    if(!s.newer){\r
      box.innerHTML = \`<div class="tag" style="margin-top:14px">версия \${esc(s.current)} · обновлений нет\`\r
        + (s.err?\` · <span title="\${esc(s.err)}">проверить не вышло</span>\`:'')\r
        + \` · <a href="#" id="chk">проверить сейчас</a></div>\`;\r
    } else {\r
      const act = busyText ? \`<span class="tag">\${esc(busyText)}</span>\`\r
        : s.ready ? \`<button id="go">Поставить версию \${esc(s.latest)}</button>\`\r
        : s.canInstall ? \`<button id="go">Обновить\${s.size?' ('+fmtMb(s.size)+')':''}</button>\`\r
        : \`<span class="tag">скачать можно на том компьютере, где стоит программа</span>\`;\r
      box.innerHTML = \`<div class="card" style="border-color:var(--acc)">\r
        <div style="font-weight:600">Есть новая версия \${esc(s.latest)} <span class="tag">у вас \${esc(s.current)}</span></div>\r
        \${s.notes?\`<div class="hint" style="margin:6px 0 10px;white-space:pre-line">\${esc(s.notes)}</div>\`:'<div style="height:8px"></div>'}\r
        <div class="actions">\${act}<span class="tag" id="uerr"></span></div>\r
        <div class="hint" style="margin-top:8px">Проекты, лента и все собранные материалы останутся на месте — они лежат отдельно от программы.</div>\r
      </div>\`;\r
    }\r
    const chk = $('#chk', box);\r
    if(chk) chk.onclick = async (e)=>{ e.preventDefault(); draw({...s, newer:false}, ''); chk.textContent='смотрю…';\r
      try{ draw(await (await api('/update?check=1')).json()); }catch(err){ draw(s); } };\r
    const go = $('#go', box);\r
    if(go) go.onclick = ()=>run(s);\r
  };\r
\r
  // Скачивание и установка одним нажатием: человек уже решил, нажав «Обновить».\r
  // Прогресс спрашиваем у программы — сотни мегабайт без цифры на экране\r
  // выглядят как «зависло».\r
  const run = async (s)=>{\r
    if(!s.ready){\r
      draw(s, 'Скачиваю…');\r
      const poll = setInterval(async ()=>{\r
        try{ const p = await (await api('/update')).json();\r
          if(p.phase==='downloading') draw(s, 'Скачиваю… '+(p.total?Math.round(p.got/p.total*100)+'%':fmtMb(p.got)));\r
        }catch(e){}\r
      }, 1500);\r
      let r; try{ r = await (await api('/update/download',{method:'POST'})).json(); }\r
      catch(e){ r = { ok:false, err:e.message }; }\r
      clearInterval(poll);\r
      if(!r.ok){ draw(s); $('#uerr',box).textContent = 'не скачалось: '+(r.err||''); return; }\r
      s = r.state || { ...s, ready:true };\r
    }\r
    draw(s, 'Ставлю — программа перезапустится…');\r
    let r; try{ r = await (await api('/update/install',{method:'POST'})).json(); }\r
    catch(e){ r = { ok:false, error:e.message }; }\r
    if(!r.ok && (r.error||r.err)){ draw(s); $('#uerr',box).textContent = r.error||r.err; return; }\r
    // Программа сейчас выключится, установщик заменит файлы и поднимет её\r
    // обратно. Страница ждёт и перезагружается сама, когда кабинет ответит.\r
    box.innerHTML = \`<div class="card" style="border-color:var(--acc)"><b>Обновляю…</b>\r
      <div class="hint" style="margin-top:6px">Программа перезапустится сама. Эта страница обновится, как только она вернётся — обычно полминуты.</div></div>\`;\r
    const wait = setInterval(async ()=>{\r
      try{ const r2 = await fetch('/api/me', { cache:'no-store' }); if(r2.ok){ clearInterval(wait); location.reload(); } }catch(e){}\r
    }, 3000);\r
  };\r
  draw(s, '');\r
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
  const dd = n => n+' '+plural(n,'день','дня','дней');\r
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
    const form = \`<div class="hint" style="margin-top:10px"><b>Шаг 1.</b> Отправьте разработчику номер этого компьютера:</div>\r
      <div class="actions" style="margin-top:6px">\r
        <code id="lmid" style="font-size:15px;padding:6px 10px;border:1px solid var(--line);border-radius:6px;user-select:all">\${esc(s.machine||'')}</code>\r
        <button id="lcopy" class="ghost">Скопировать номер</button></div>\r
      <div class="hint" style="margin-top:4px">Ключ работает только на том компьютере, чей номер вы прислали.</div>\r
      <div class="hint" style="margin-top:10px"><b>Шаг 2.</b> Полученный ключ вставьте сюда — он начинается с MC1.</div>\r
      <div class="actions" style="margin-top:6px">\r
        <input id="lkey" style="flex:1;min-width:220px" placeholder="MC1.…">\r
        <button id="lsave">Сохранить ключ</button></div>\r
      \${msg?\`<div class="hint" style="margin-top:6px"><b>\${esc(msg)}</b></div>\`:''}\`;\r
\r
    if(s.mode==='licensed'){\r
      // Дату окончания показываем КАК ОНА ЗАПИСАНА В КЛЮЧЕ, без прогона через\r
      // Date. «2027-09-19» разбирается как ПОЛНОЧЬ UTC, а читается местным\r
      // календарём — и западнее Гринвича лицензия показывала бы день раньше,\r
      // чем написано в ключе. Та же мина, что уже съедала сутки в разборе дат,\r
      // в CSV и в аналитике; тут её не на что менять — в ключе лежит просто\r
      // календарный день, и переводить его некуда.\r
      box.innerHTML = \`<div class="tag" style="margin-top:10px">лицензия: \${esc(s.to||'—')}\`\r
        + (s.until?\` · до \${esc(s.until)}\`:' · бессрочная')\r
        + (s.locked?' · только для этого компьютера':'')\r
        + \` · <a href="#" id="lchg">изменить ключ</a></div>\`\r
        // Подтверждение обязано быть видно. Без него человек нажимает\r
        // «Сохранить ключ», карточка схлопывается в одну строку — и понять,\r
        // принят ключ или нет, можно только вчитавшись. Молчание после\r
        // действия читается как «не сработало».\r
        + (msg?\`<div class="tag" style="margin-top:4px"><b>\${esc(msg)}</b></div>\`:'')\r
        + \`<div id="lform"></div>\`;\r
    } else if(s.mode==='expired'){\r
      box.innerHTML = \`<div class="card" style="border-color:#c33">\r
        <div style="font-weight:600">Пробный период закончился</div>\r
        <div class="hint" style="margin:6px 0 0">\${s.enforced\r
          ? 'Сбор нового материала остановлен. Всё уже собранное — лента, выгрузки, отчёты, аналитика — открыто как обычно: эти данные твои.'\r
          : 'Проверка ключей пока не включена, поэтому программа продолжает собирать как раньше. Эта полоска — предупреждение, а не запрет.'}</div>\r
        \${s.keyWhy?\`<div class="hint" style="margin-top:6px">С введённым ключом беда: \${esc(s.keyWhy)}</div>\`:''}\r
        \${form}</div>\`;\r
    } else {\r
      const soon = s.daysLeft<=7;\r
      box.innerHTML = soon\r
        ? \`<div class="card" style="border-color:var(--acc)">\r
             <div style="font-weight:600">Пробный период: осталось \${esc(dd(s.daysLeft))}</div>\r
             <div class="hint" style="margin:6px 0 0">Когда он кончится, остановится только СБОР нового. Всё собранное останется открытым.</div>\r
             \${s.keyWhy?\`<div class="hint" style="margin-top:6px">С введённым ключом беда: \${esc(s.keyWhy)}</div>\`:''}\r
             \${form}</div>\`\r
        : \`<div class="tag" style="margin-top:10px">пробный период · осталось \${esc(dd(s.daysLeft))}\`\r
          + (s.keyWhy?\` · ключ не принят: \${esc(s.keyWhy)}\`:'')\r
          + \` · <a href="#" id="lchg">ввести ключ</a></div><div id="lform"></div>\`;\r
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
      box.innerHTML = \`<div class="tag" style="margin-top:6px">обновление механизмов \${esc(s.lastFail.version)}\r
        не заработало — программа вернулась к встроенному коду и больше его не пробует.\r
        Напиши разработчику: \${esc(s.lastFail.why||'')}</div>\`;\r
    } else if(s.ready){\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">обновление механизмов \${esc(s.readyVersion)} готово —\r
        применится, когда программа запустится в следующий раз\${s.notes?' · '+esc(s.notes):''}</div>\`;\r
    } else if(s.running){\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">механизмы обновлены до \${esc(s.running)}\r
        (программа \${esc(s.exe||'')}) · <a href="#" id="cchk">проверить механизмы</a></div>\`;\r
    } else {\r
      box.innerHTML = \`<div class="tag" style="margin-top:6px">механизмы: встроенные · <a href="#" id="cchk">проверить механизмы</a></div>\`;\r
    }\r
    const c = $('#cchk', box);\r
    if(c) c.onclick = async e=>{ e.preventDefault(); c.textContent='смотрю…';\r
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
`}var Wo=ae(()=>{i(os,"uiHtml")});function Vd(e){let t=e&&e.periodMode||"fixed";return t==="rolling"?`последние ${Math.max(2,+e.periodDays||2)} дн.`:t==="since"?`с ${e.from||"…"} и до сегодня`:fn(e).why}function Xd(e){let t=tt(e);if(!t)return null;let n=t.config||{},r={"/me":{hasPassword:!1,playwright:!1,hasGeminiKey:!1,geminiModel:""},["/projects/"+e]:{id:e,name:t.name,ai:Jd(t.ai)}};for(let a of Kd){let c=jt(e,{days:a});c&&(r["/projects/"+e+"/analytics"+(a?"?days="+a:"")]=c)}let s=new Date,o=i(a=>String(a).padStart(2,"0"),"p2");return{id:e,name:t.name||"Мониторинг",keyword:n.keyword||"",sources:(n.sites||[]).length,periodText:Vd(n),madeAt:`${o(s.getDate())}.${o(s.getMonth()+1)}.${s.getFullYear()} ${o(s.getHours())}:${o(s.getMinutes())}`,api:r}}function Bc(e){let t=Xd(e);if(!t)return null;let n=os(),r="<script>window.MC_SNAPSHOT = "+Yd(t)+`;</script>
`;return{html:n.replace("<body>",`<body>
`+r).replace("<title>mediachrome — кабинет</title>","<title>"+Zd(t.name)+" — дашборд</title>"),snap:t}}function Fc(e){let t=String(e.name||"dashboard").replace(/[^A-Za-zА-Яа-яЁё0-9 _-]+/g,"").trim().replace(/\s+/g,"-")||"dashboard",n=new Date,r=i(s=>String(s).padStart(2,"0"),"p");return`${t}-${n.getFullYear()}-${r(n.getMonth()+1)}-${r(n.getDate())}.html`}function Ko(e){return`attachment; filename="${e.replace(/[^\x20-\x7E]/g,"_").replace(/["\\]/g,"_")}"; filename*=UTF-8''${encodeURIComponent(e)}`}var qc,Hc,hf,Kd,Yd,Jd,Zd,Uc=ae(()=>{qc=require("node:url"),Hc=require("node:path");Wt();Vn();Er();Wo();hf=(0,Hc.dirname)((0,qc.fileURLToPath)(__mcFileUrl)),Kd=[null,30,7],Yd=i(e=>JSON.stringify(e).replace(/</g,"\\u003c"),"safeJson");i(Vd,"periodText");Jd=i(e=>{let t={};for(let[n,r]of Object.entries(e||{}))r&&(t[n]={at:r.at||null,text:r.text||"",err:r.err||"",model:r.model||"",window:r.window||"",auto:!!r.auto,items:Array.isArray(r.items)?r.items:null});return t},"cleanAi");i(Xd,"buildSnapshot");i(Bc,"buildShareHtml");Zd=i(e=>String(e??"").replace(/[<>&"]/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[t]),"esc");i(Fc,"shareFileName");i(Ko,"contentDisposition")});function Gc(e,t,n){let r=[];r.push("=== ДИАГНОСТИКА: "+e+" ==="),n&&r.push("период: "+(n.why||(n.from||"…")+" … "+(n.to||"…"))),r.push("каналы: "+(t.channel||"—")),r.push("итог движка: "+(t.note||"—")),r.push("найдено (взято): "+(t.rows?t.rows.length:0));let s=t.diag||{},o=s.meta||{},a=s.records||[];r.push(""),r.push("--- канал поиска ---"),r.push("вид поиска: "+(o.searchKind||"—")),r.push("URL поиска: "+(o.searchUrl||"(поиск не строился)")),o.renderUrl&&r.push("URL рендера: "+o.renderUrl),o.rawLinks&&o.rawLinks.length?(r.push("сырые ссылки со страницы поиска (образец "+o.rawLinks.length+"):"),o.rawLinks.slice(0,15).forEach(p=>r.push("   "+p))):r.push("сырых ссылок со страницы поиска: 0 (пусто/оболочка/JS-выдача)"),r.push(""),r.push("--- судьба открытых ссылок ("+a.length+") ---");let c={};for(let p of a)c[p.verdict]=(c[p.verdict]||0)+1;r.push("сводка вердиктов: "+(Object.entries(c).map(([p,m])=>p+"="+m).join(", ")||"—"));let u=/не открылась|дата не найдена|дата не распознана|не успели|не влезла/i,l=new Map;for(let p of a){let m=p.verdict||"—";l.has(m)||l.set(m,[]),l.get(m).push(p)}let h=i(p=>u.test(p)?0:p==="ВЗЯТА"?1:2,"rank"),f=[...l.keys()].sort((p,m)=>h(p)-h(m)||l.get(m).length-l.get(p).length),d=5;for(let p of f){let m=l.get(p);r.push("  • "+p+" — "+m.length+(u.test(p)?"  (ЭТО ПОТЕРЯ: страницу мы не проверили)":"")),m.slice(0,d).forEach(g=>{let b=[];g.date&&b.push('дата="'+g.date+'"->'+(g.parsed||"НЕ РАСПОЗНАНА")),g.hasKw!=null&&b.push("ключ:"+(g.hasKw?"да":"нет")),r.push("     "+(g.title?"«"+g.title+"»  ":"")+g.url+(b.length?"   ["+b.join(" | ")+"]":""))}),m.length>d&&r.push("     … ещё "+(m.length-d)+" с таким же вердиктом")}return r.join(`
`)}var Wc=ae(()=>{i(Gc,"diagReport")});function Yc(e,t,n,r){let s=Math.abs(e)%100,o=s%10;return s>10&&s<20?r:o>1&&o<5?n:o===1?t:r}function xn(e){let t=String(e||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return t?[+t[1],+t[2],+t[3]]:null}function Vc(e,t){let n=xn(e),r=xn(t);if(!n&&!r)return"";if(!n||!r){let s=n||r;return s[2]+" "+ft[s[1]-1]+" "+s[0]}return n[0]===r[0]&&n[1]===r[1]&&n[2]===r[2]?n[2]+" "+ft[n[1]-1]+" "+n[0]:n[0]===r[0]&&n[1]===r[1]?n[2]+"–"+r[2]+" "+ft[n[1]-1]+" "+n[0]:n[0]===r[0]?n[2]+" "+ft[n[1]-1]+" — "+r[2]+" "+ft[r[1]-1]+" "+n[0]:n[2]+" "+ft[n[1]-1]+" "+n[0]+" — "+r[2]+" "+ft[r[1]-1]+" "+r[0]}function Jc(e,t){let n=xn(e),r=xn(t);return!n||!r?0:Math.round((Date.UTC(r[0],r[1]-1,r[2])-Date.UTC(n[0],n[1]-1,n[2]))/864e5)+1}function Xc(e){let t=Math.max(0,Math.round((+e||0)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),s=t%60,o=[];return n&&o.push(qe(n,"час","часа","часов")),r&&o.push(qe(r,"минута","минуты","минут")),(s||!o.length)&&o.push(qe(s,"секунда","секунды","секунд")),o.join(" ")}function np(e){let t=new Map;for(let n of e)t.set(Yo(n.source),(t.get(Yo(n.source))||0)+1);return Zc([...t.entries()])}function Zc(e){let n=e.map(([s,o])=>[Yo(s),o]).sort((s,o)=>o[1]-s[1]||s[0].localeCompare(o[0])).filter(([,s])=>s>1).slice(0,12);if(!n.length)return"";let r=[];for(let s=0;s<n.length;){let o=n[s][1],a=[];for(;s<n.length&&n[s][1]===o;)a.push(n[s++][0]);r.push(a.join(" / ")+" — "+(a.length>1?"по ":"")+o)}return r.join(", ")}function Qc(e,t){let n=e||{},r=t||{},s=Array.isArray(r.rows)?r.rows:[],o=Array.isArray(r.log)?r.log:[],a=i(v=>o.find(T=>T.site===v)||null,"line"),c=a("(период)"),u=a("(время)"),l=[];if(l.push("ОТЧЁТ ПО МОНИТОРИНГУ"),l.push(""),l.push("Тема: "+(n.keyword||"—")),c&&c.from&&c.to?l.push("Период: "+Vc(c.from,c.to)+" ("+qe(Jc(c.from,c.to),"день","дня","дней")+")"):c&&c.note&&l.push("Период: "+c.note),r.at){let v=new Date(r.at);l.push("Дата мониторинга: "+v.getDate()+" "+ft[v.getMonth()]+" "+v.getFullYear())}let h=o.filter(v=>!tp(v.site));if(h.length){let v=new Map;for(let T of h){let k=Yt(T.site);v.set(k,(v.get(k)||0)+1)}l.push(""),l.push("ОХВАТ"),l.push("Просмотрено "+qe(h.length,"источник","источника","источников")+":");for(let T of Kc){let k=v.get(T);if(!k)continue;let S=ep[T];l.push("  — "+(T==="youtube"?"YouTube":qe(k,S[0],S[1],S[2])))}}u&&u.ms&&(l.push(""),l.push("ЗАТРАЧЕНО ВРЕМЕНИ"),l.push(Xc(u.ms)+" (автоматический сбор, 4 источника одновременно)")),l.push(""),l.push("РЕЗУЛЬТАТ");let f=new Set(s.map(v=>v.source));l.push(qe(s.length,"материал","материала","материалов")+" на "+qe(f.size,"источнике","источниках","источниках")+(h.length?" из "+h.length:""));let d=new Map;for(let v of s){let T=ue(v.date);if(!T)continue;let k=Ke(T);d.set(k,(d.get(k)||0)+1)}if(d.size){l.push(""),l.push("По дням:");for(let v of[...d.keys()].sort()){let T=xn(v);l.push("  "+T[2]+" "+ft[T[1]-1]+" — "+d.get(v))}}let p=new Map;for(let v of s){let T=Yt(v.source);p.set(T,(p.get(T)||0)+1)}if(p.size>1){l.push(""),l.push("По типу источника:");for(let v of Kc){let T=p.get(v);T&&l.push("  "+(v==="site"?"сайты СМИ":v==="telegram"?"телеграм":v==="youtube"?"YouTube":"Фейсбук")+" — "+T)}}let m=new Map;for(let v of s){let T=Qd[v.match]||String(v.match||"не указано");m.set(T,(m.get(T)||0)+1)}if(m.size){l.push(""),l.push("Где встречается упоминание:");for(let[v,T]of[...m.entries()].sort((k,S)=>S[1]-k[1]||k[0].localeCompare(S[0])))l.push("  "+v+" — "+T)}let g=np(s);g&&(l.push(""),l.push("Больше всего: "+g)),l.push(""),l.push("МЕТОДИКА");let b=String(n.exclude||"").trim();l.push(b?"  — Применялись минус-слова: "+b+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let x=o.filter(v=>v.site==="(ИИ)"),w=x.find(v=>/релевантност/i.test(String(v.note||"")));w?l.push("  — ИИ-проверка релевантности: "+String(w.note).replace(/^ИИ-[^:]*:\s*/,"")+"."):l.push(x.length?"  — Выполнен ИИ-разбор собранного ("+x.length+").":"  — ИИ не запускался: отбор полностью детерминированный — разбор разметки и текста страниц, без машинного обучения и без распознавания изображений."),l.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),l.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let M=h.filter(v=>!(v.found>0)).length;return M&&l.push("  — У "+qe(M,"источника","источников","источников")+" из "+h.length+" материалов по теме за этот период не нашлось."),l.join(`
`)+`
`}function el(e,t,n={}){let r=e||{},s=t&&t.overview||{},o=[],a=n.now instanceof Date?n.now:new Date;o.push("ОТЧЁТ ПО МОНИТОРИНГУ"),o.push(""),o.push("Тема: "+(r.keyword||"—")),s.windowFrom&&s.windowTo&&o.push("Период: "+Vc(s.windowFrom,s.windowTo)+" ("+qe(Jc(s.windowFrom,s.windowTo),"день","дня","дней")+")"),o.push("Дата отчёта: "+a.getDate()+" "+ft[a.getMonth()]+" "+a.getFullYear());let c=(r.sites||[]).map(S=>String(S||"").trim()).filter(Boolean),u=c.filter(S=>/(^@)|(^https?:\/\/)?(www\.)?t\.me\//i.test(S)).length,l=c.length-u,h=(r.facebook||[]).map(S=>String(S||"").trim()).filter(Boolean).length,f=!!(r.youtube&&r.youtube.enabled);if(c.length||h||f){o.push(""),o.push("ОХВАТ");let S=c.length+h+(f?1:0);o.push("Под наблюдением "+qe(S,"источник","источника","источников")+":"),l&&o.push("  — "+qe(l,"сайт СМИ","сайта СМИ","сайтов СМИ")),u&&o.push("  — "+qe(u,"телеграм-канал","телеграм-канала","телеграм-каналов")),f&&o.push("  — YouTube"),h&&o.push("  — "+qe(h,"профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"))}let d=Array.isArray(t&&t.runs)?t.runs:[],p=d.map(S=>+S.sec).filter(S=>Number.isFinite(S)&&S>0);if(p.length){let S=p.reduce((R,E)=>R+E,0);o.push(""),o.push("ЗАТРАЧЕНО ВРЕМЕНИ"),o.push(Xc(S*1e3)+" — "+qe(d.length,"автоматический сбор","автоматических сбора","автоматических сборов")+" за период")}o.push(""),o.push("РЕЗУЛЬТАТ");let m=t&&t.silent&&t.silent.configured||0;o.push(qe(s.items||0,"материал","материала","материалов")+" на "+qe(s.uniqueSources||0,"источнике","источниках","источниках")+(m?" из "+m+" отслеживаемых":""));let g=(t&&Array.isArray(t.byDay)?t.byDay:[]).filter(S=>S&&S.count>0);if(g.length){o.push(""),o.push("По дням:");for(let S of g){let R=xn(S.day);o.push("  "+(R?R[2]+" "+ft[R[1]-1]:S.day)+" — "+S.count)}}let b=[["site",s.siteItems],["telegram",s.telegramItems],["youtube",s.youtubeItems],["facebook",s.facebookItems]].filter(([,S])=>S>0);if(b.length>1){o.push(""),o.push("По типу источника:");for(let[S,R]of b)o.push("  "+(S==="site"?"сайты СМИ":S==="telegram"?"телеграм":S==="youtube"?"YouTube":"Фейсбук")+" — "+R)}let x=[["в заголовке",s.matchTitle],["в тексте материала",s.matchBody],["в посте",s.matchPost],["в видео",s.matchVideo],["без пометки",s.matchOther]].filter(([,S])=>S>0);if(x.length){o.push(""),o.push("Где встречается упоминание:");for(let[S,R]of x)o.push("  "+S+" — "+R)}let w=Zc((t&&t.bySource?t.bySource:[]).map(S=>[S.key,S.count]));w&&(o.push(""),o.push("Больше всего: "+w));let M=t&&t.tone||{total:0};if(M.total){o.push(""),o.push("ТОНАЛЬНОСТЬ (оценка ИИ по заголовку и фрагменту)"),o.push("  выигрышно для объекта — "+M.pos+", нейтрально — "+M.neu+", невыгодно — "+M.neg+" (оценено "+M.total+" из "+(s.items||0)+")");let S=(M.bySource||[]).filter(R=>R.neg>0).slice(0,5);S.length&&o.push("  больше всего невыгодных: "+S.map(R=>R.key+" — "+R.neg).join(", "))}o.push(""),o.push("МЕТОДИКА");let v=String(r.exclude||"").trim();o.push(v?"  — Применялись минус-слова: "+v+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let T=t&&t.relevance||{checked:0};T.checked?o.push("  — ИИ-проверка релевантности: проверено "+qe(T.checked,"материал","материала","материалов")+", из них "+T.off+" "+Yc(T.off,"похож","похожи","похожи")+" на случайное совпадение имени"+(T.dim?" и "+qe(T.dim,"спорный","спорных","спорных"):"")+". Из выдачи они не удалены — помечены."):o.push("  — ИИ-проверка релевантности не запускалась."),o.push("  — Отбор материалов детерминированный: разбор разметки и текста страниц, без машинного обучения."),o.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),o.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let k=t&&t.silent&&t.silent.list?t.silent.list.length+(t.silent.more||0):0;return k&&o.push("  — У "+qe(k,"источника","источников","источников")+" из "+m+" материалов по теме за этот период не нашлось."),o.join(`
`)+`
`}var qe,ft,Qd,ep,Kc,tp,Yo,tl=ae(()=>{Ht();Vn();i(Yc,"plural");qe=i((e,t,n,r)=>e+" "+Yc(e,t,n,r),"num"),ft=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];i(xn,"ymdParts");i(Vc,"ruRange");i(Jc,"daysInRange");i(Xc,"ruDuration");Qd={title:"в заголовке",body:"в тексте материала",post:"в посте",video:"в видео",подпись:"в подписи к посту",репост:"в тексте репоста"},ep={site:["сайт СМИ","сайта СМИ","сайтов СМИ"],telegram:["телеграм-канал","телеграм-канала","телеграм-каналов"],youtube:["YouTube","YouTube","YouTube"],facebook:["профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"]},Kc=["site","telegram","youtube","facebook"],tp=i(e=>/^\(/.test(String(e||"")),"isService"),Yo=i(e=>String(e)==="youtube"?"YouTube":String(e),"srcName");i(np,"topSources");i(Zc,"topFromPairs");i(Qc,"buildReport");i(el,"buildWindowReport")});var nl,as,rp,Vo,rl,kf,Sf,sl=ae(()=>{nl=require("node:module"),as=require("node:path");process.env.PLAYWRIGHT_BROWSERS_PATH||(process.env.PLAYWRIGHT_BROWSERS_PATH=(0,as.join)((0,as.dirname)(process.execPath),"browsers"));rp=(0,nl.createRequire)(process.execPath),Vo=rp("playwright"),rl=Vo.chromium,kf=Vo.firefox,Sf=Vo.webkit});function Pe(e,t,n){let r=null;return Promise.race([Promise.resolve(e).catch(()=>n),new Promise(s=>{r=setTimeout(()=>s(n),t)})]).then(s=>(r&&clearTimeout(r),s))}function Xn(e,t,n){let r=null,s=new Promise(o=>{r=setTimeout(()=>o(Rt),t)});return Promise.race([e,s]).then(o=>(clearTimeout(r),o===Rt&&n&&Promise.resolve(e).then(n,()=>{}),o),o=>{throw clearTimeout(r),o})}function ol(e,t=1){let r=Array.from({length:4},()=>Promise.resolve()),s=new Array(4).fill(0),o=Math.max(1,Math.min(4,t|0)),a={ops:0,busyMs:0,byHost:{},lanes:o},c=i(function(u,l,h,f,d){let p=0;for(let b=1;b<o;b++)s[b]<s[p]&&(p=b);s[p]++;let m=i(async()=>{let b=Date.now();try{return await Pe(u(p),l,Rt)}finally{let x=Math.min(Date.now()-b,l);if(a.ops++,a.busyMs+=x,d){let w=a.byHost[d]||(a.byHost[d]={ops:0,ms:0});w.ops++,w.ms+=x}s[p]--}},"run"),g=r[p].then(m,m);return r[p]=g.then(()=>{},()=>{}),g.then(b=>{if(b!==Rt)return b;try{e&&e(f,p)}catch{}return h},()=>h)},"queued");return c.stats=a,c.resetStats=()=>{a.ops=0,a.busyMs=0,a.byHost={},a.lanes=o},c.setLanes=u=>{let l=o;return o=Math.max(1,Math.min(4,u|0||1)),a.lanes=o,{was:l,now:o}},c.lanes=()=>o,c}var Rt,Jo=ae(()=>{Rt=Symbol("hung");i(Pe,"cap");i(Xn,"capOwn");i(ol,"makeQueue")});function al(){Zo.clear(),Xo.clear()}async function vn(e,t){let n=Sn(t);if(!n||!e)return 0;let r=await Pe(Promise.resolve().then(()=>e.cookies(t)),5e3,null);return!r||!r.length?0:(Zo.set(n,{at:Date.now(),cookies:r}),r.length)}async function is(e,t,n=0){let r=Sn(t);if(!r||!e)return 0;let s=Zo.get(r);if(!s||Date.now()-s.at>op)return 0;let o=n+"|"+r+"|"+s.at;if(Xo.has(o))return 0;Xo.add(o);let a=await Pe(Promise.resolve().then(()=>e.cookies(t)),5e3,null),c=new Set((a||[]).map(l=>l.name)),u=s.cookies.filter(l=>!c.has(l.name));return u.length?(await Pe(Promise.resolve().then(()=>e.addCookies(u)),5e3,null),u.length):0}async function kn(e,t=25e3,n=1500){let r=Date.now();for(;;){let s=await Pe(Promise.resolve().then(()=>e.evaluate(()=>({t:document.title||"",b:(document.body&&document.body.innerText||"").slice(0,400),c:!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait, #challenge-form, #turnstile-wrapper")}))),8e3,null);if(!s)return!1;if(!s.c&&!ap.test(s.t+" "+s.b))return!0;if(Date.now()-r>t)return!1;await sp(Math.min(n,Math.max(0,t-(Date.now()-r))+50))}}async function Qo(e,t,{gotoMs:n=2e4,challengeMs:r=25e3,deadline:s,lane:o=0,warmNeedMs:a=25e3,warmKeepMs:c=12e3,pollMs:u=1500}={}){let l=s||Date.now()+75e3,h=i(()=>l-Date.now(),"left"),f=(()=>{try{return e.context()}catch{return null}})();await is(f,t,o);let d=i((x,w)=>Promise.resolve().then(()=>e.goto(x,{waitUntil:"domcontentloaded",timeout:Math.max(3e3,Math.min(w,h()))})).catch(()=>null),"go"),p=i(x=>Promise.resolve().then(()=>e.waitForTimeout(x)).catch(()=>{}),"pause"),m=await d(t,n);if(await p(Math.min(700,Math.max(0,h()))),await kn(e,Math.min(r,h()),u))return await vn(f,t),{passed:!0,resp:m,warmed:!1};let g="";try{let x=new URL(t);(x.pathname!=="/"||x.search)&&(g=x.origin)}catch{}if(!g||h()<a)return{passed:!1,resp:m,warmed:!1};if(await d(g+"/",15e3),!await kn(e,Math.min(r,h()-c),u))return{passed:!1,resp:m,warmed:!0};await vn(f,g+"/"),m=await d(t,15e3);let b=await kn(e,Math.min(r,h()),u);return b&&await vn(f,t),{passed:b,resp:m,warmed:!0}}var sp,Sn,Zo,Xo,op,ap,il=ae(()=>{Jo();sp=i(e=>new Promise(t=>setTimeout(t,Math.max(0,e))),"sleep"),Sn=i(e=>{try{return new URL(String(e)).host.replace(/^www\./,"")}catch{return""}},"hostOf"),Zo=new Map,Xo=new Set,op=1200*1e3;i(al,"jarReset");i(vn,"jarPut");i(is,"jarPrime");ap=/just a moment|checking your browser|attention required|verifying you are human|подожд[иё]те|проверка браузера|один момент/i;i(kn,"waitOutChallenge");i(Qo,"gotoPast")});var hl={};$n(hl,{browserError:()=>Tn,browserStats:()=>up,browserWindows:()=>gp,closeBrowser:()=>ta,closeRunBrowsers:()=>lp,openSocialLogin:()=>Sp,renderFacebook:()=>$p,renderFetch:()=>wp,renderScrape:()=>bp,renderSiteSearch:()=>xp,resetBrowserStats:()=>dp,setBrowserWindows:()=>mp});async function cp(e,t){let n={headless:!1,viewport:null,args:["--disable-blink-features=AutomationControlled","--no-default-browser-check","--no-first-run"],ignoreDefaultArgs:["--enable-automation"]},r=ip(e,t),s=await Xn(rl.launchPersistentContext(r,e?{...n,channel:"chrome"}:n),cl,a=>a.close().catch(()=>{}));if(s===Rt)throw new Error("окно не поднялось за "+cl/1e3+" с");let o=await Xn(s.newPage(),3e4,a=>a.close().catch(()=>{}));if(o===Rt)throw await Pe(s.close(),1e4),new Error("браузер не открыл страницу за 30 с");return await Pe(o.close(),5e3),s}async function ul(e=0){if(Zn.get(e))try{await Zn.get(e)}catch{}if(mt.get(e))return mt.get(e);for(let t of[!0,!1])try{let n=await cp(t,e);return n.on("close",()=>{mt.get(e)===n&&mt.delete(e)}),mt.set(e,n),t||console.log("[render] окно "+(e+1)+": channel:chrome не ожил, работаю на встроенном Chromium"),n}catch(n){cs=(t?"Chrome: ":"Chromium: ")+String(n&&n.message||n).split(`
`)[0].slice(0,200)}throw new Error("браузер не запустился (ни Chrome, ни встроенный Chromium): "+cs)}function Qn(e,t=0){mt.get(t)===e&&mt.delete(t);let n=Pe(e.close(),15e3,null).then(()=>new Promise(r=>setTimeout(r,1500))).then(()=>{Zn.get(t)===n&&Zn.delete(t)});return Zn.set(t,n),n}async function ta(e=null){if(e!=null){let t=mt.get(e);t&&await Qn(t,e);return}await Promise.all([...mt].map(([t,n])=>Qn(n,t).catch(()=>{})))}async function lp(){await Promise.all([...mt].filter(([e])=>typeof e=="number").map(([e,t])=>Qn(t,e).catch(()=>{})))}function mp(e){let t=_t.setLanes(e);if(t.now<t.was)for(let[n]of mt)typeof n=="number"&&n>=t.now&&ta(n).catch(()=>{});return t.now}function bp(e,t={}){return _t(n=>Mp(e,t,n),hp,{items:[],cf:!1,err:"браузер завис — окно перезапущено"},"рендер",t.host||Sn(e))}async function na(e=0){let t=null;for(let n=0;n<2&&!t;n++){let r;try{r=await ul(e)}catch{return null}let s=null;try{s=await Xn(r.newPage(),3e4,o=>o.close().catch(()=>{}))}catch(o){cs="страница не открылась: "+String(o&&o.message||o).split(`
`)[0].slice(0,200)}if(!s||s===Rt){await Qn(r,e);continue}t=s}return t}function wp(e,t={}){return _t(n=>yp(e,t,n),pp,{ok:!1,err:"браузер завис — окно перезапущено"},"браузер-фетч",t.host||Sn(e))}async function yp(e,{timeoutMs:t=2e4,challengeMs:n=25e3,post:r=null}={},s=0){let o=await na(s);if(!o)return{ok:!1,err:"браузер не поднялся ("+Tn()+")"};try{if(r!=null){let l=new URL(e).origin,h=(()=>{try{return o.context()}catch{return null}})();if(await is(h,l+"/",s),await o.goto(l+"/",{waitUntil:"domcontentloaded",timeout:t}).catch(()=>null),!await kn(o,n))return{ok:!1,cf:!0,err:"защита сайта не пройдена"};await vn(h,l+"/");let f=new URL(e).pathname+new URL(e).search,d=await Pe(o.evaluate(async([m,g])=>{let b=location.origin+m;try{let x=await fetch(b,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:g});return x.ok?{html:await x.text(),url:b}:{err:"HTTP "+x.status+" на "+b}}catch(x){return{err:String(x&&x.message||x)+" ("+b+")"}}},[f,r]),2e4,{err:"браузер не ответил на POST в срок"}),p=d&&d.html||"";return{ok:!!p,html:p,posted:!!p,err:p?null:d&&d.err||"пустой ответ"}}let a=await Qo(o,e,{gotoMs:t,challengeMs:n,lane:s,deadline:Date.now()+75e3}),c=a.resp;if(!a.passed)return{ok:!1,cf:!0,err:"защита сайта не пройдена"+(a.warmed?" (пробовали и через главную)":"")};let u=await Pe(o.content(),15e3,"");return{ok:!!u,status:c?c.status():0,html:u||""}}catch(a){return{ok:!1,err:a.message}}finally{await us(o)}}function xp(e,t,n={}){return _t(r=>vp(e,t,n,r),fp,{items:[],cf:!1,note:"браузер завис — окно перезапущено"},"браузер-поиск",n.host||Sn(e))}async function vp(e,t,{host:n=""}={},r=0){let s=(Array.isArray(t)?t:[t]).map(f=>String(f||"").trim()).filter(Boolean);if(!s.length)return{items:[],cf:!1,note:"пустой запрос"};let o=await na(r);if(!o)return{items:[],cf:!1,note:"браузер не поднялся ("+Tn()+")"};let a=[],c=new Set,u=!1,l="",h=(()=>{try{return o.context()}catch{return null}})();try{for(let f=0;f<s.length;f++){if(f===0&&await is(h,e+"/",r),await o.goto(e+"/",{waitUntil:"domcontentloaded",timeout:2e4}).catch(()=>{}),!await kn(o,f===0?25e3:8e3)){u=!0,l="защита сайта не пройдена";break}f===0&&await vn(h,e+"/");let p=await Pe(o.evaluate(ll),8e3,null);if(p||(await Pe(o.evaluate(_p),8e3,null),await o.waitForTimeout(700).catch(()=>{}),p=await Pe(o.evaluate(ll),8e3,null)),!p){l="строка поиска не найдена";break}await o.fill(p,s[f]).catch(()=>{}),await o.press(p,"Enter").catch(()=>{}),await Pe(o.evaluate(Rp,p),8e3,null),await o.waitForLoadState("domcontentloaded",{timeout:15e3}).catch(()=>{}),await o.waitForTimeout(1800).catch(()=>{});let m=Date.now()+12e3,g=[],b=0;for(;Date.now()<m;){let{items:x,cf:w}=await pl(o,{selectors:null,hostHint:n,google:!1,bing:!1},m);if(w&&(u=!0),x.length>g.length)g=x,b=0;else if(g.length&&(b++,b>=2))break;await o.waitForTimeout(1200).catch(()=>{})}for(let x of g)x.url&&!c.has(x.url)&&(c.add(x.url),a.push(x))}return{items:a,cf:u,note:l}}catch(f){return{items:a,cf:u,note:f.message}}finally{await us(o)}}async function dl(){let e;try{e=await ul(ls)}catch{return null}let t=await Xn(e.newPage(),3e4,n=>n.close().catch(()=>{}));return!t||t===Rt?(await Qn(e,ls),null):t}async function Sp(e="https://www.facebook.com/"){let t=await dl();return t?(await t.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await Pe(t.bringToFront(),5e3,null),{ok:!0}):{ok:!1,err:"браузер не поднялся ("+Tn()+")"}}function Tp(){let e=i(t=>!!document.querySelector(t),"has");return e('input[name="pass"]')||e("#loginform")||e('[data-testid="royal_login_form"]')}function $p(e,t={}){return _t(()=>Ap(e,t),kp,{ok:!1,chunks:[],err:"браузер завис — окно перезапущено"},"фейсбук","facebook.com")}async function Ap(e,{sinceMs:t=0,maxScrolls:n=3,settleMs:r=3e3}={}){let s=await dl();if(!s)return{ok:!1,chunks:[],err:"браузер не поднялся ("+Tn()+")"};let o=[],a=[],c=i(l=>{try{if(!/facebook\.com\/api\/graphql/i.test(l.url()))return;a.push(Pe(l.text(),15e3,"").then(h=>{h&&o.push(h)}).catch(()=>{}))}catch{}},"onResp");s.on("response",c);let u=i(async()=>{let l=a.splice(0);l.length&&await Promise.all(l)},"drain");try{if(await s.goto(e,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await Pe(s.evaluate(Tp),8e3,!1))return{ok:!1,chunks:[],needLogin:!0,err:"Фейсбук просит войти — нажмите «Войти в соцсети» и залогиньтесь в открывшемся окне"};let l=0;for(let h=0;;h++){await s.waitForTimeout(r).catch(()=>{}),await u();let{posts:f}=Bn(o.join(`
`)),d=oo(f);if(d&&d*1e3<t||h>=n)break;await Pe(s.evaluate(()=>window.scrollBy(0,document.body.scrollHeight)),8e3,null),l++}return await u(),{ok:o.length>0,chunks:o,scrolls:l,err:o.length?"":"Фейсбук не отдал ленту (страница пустая или изменился её вид)"}}catch(l){return{ok:o.length>0,chunks:o,err:String(l&&l.message||l)}}finally{try{s.off("response",c)}catch{}await u().catch(()=>{}),await us(s)}}async function Mp(e,{selectors:t=null,host:n="",google:r=!1,bing:s=!1,loadTimeoutMs:o=2e4,contentTimeoutMs:a=2e4}={},c=0){let u=await na(c);if(!u)return{items:[],cf:!1,err:"браузер не поднялся ("+Tn()+")"};try{await Qo(u,e,{gotoMs:o,challengeMs:25e3,lane:c,deadline:Date.now()+7e4});let l=Date.now()+a,h=[],f=0,d=!1;for(;Date.now()<l;){let{items:p,cf:m}=await pl(u,{selectors:t,hostHint:n,google:r,bing:s},l);if(d=m,!m&&p.length>h.length)h=p,f=0;else if(h.length&&(f++,f>=2))break;await u.waitForTimeout(1300).catch(()=>{})}return{items:h,cf:d}}catch{return{items:[],cf:!1}}finally{await us(u)}}async function pl(e,t,n){let r=[],s=!1,o=[];try{o=e.frames()}catch{return{items:r,cf:s}}for(let c of o){if(Date.now()>n)break;let u=await Pe(c.evaluate(Cp,t),8e3,null);u&&(u.cf&&(s=!0),u.items&&(r=r.concat(u.items)))}let a=new Set;return{items:r.filter(c=>c.url&&!a.has(c.url)&&a.add(c.url)),cf:s}}function ll(){let e=[...document.querySelectorAll("input")],t=i(s=>{let o=(s.type||"").toLowerCase();if(o&&!["search","text",""].includes(o))return-1;let a=((s.name||"")+" "+(s.id||"")+" "+(s.placeholder||"")+" "+(s.className||"")+" "+(s.getAttribute("aria-label")||"")).toLowerCase();if(/e-?mail|mail|subscribe|подпис|рассыл|comment|коммент|phone|тел|promo|coupon|login|логин|город|city/.test(a))return-1;let c=0;o==="search"&&(c+=5),/(^|[^a-zа-я])(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)([^a-zа-я]|$)/.test(a)&&(c+=4),/поиск|search|найти|іздеу|искать|издеу/.test(a)&&(c+=3);let u=s.form;if(u){let h=((u.getAttribute("action")||"")+" "+(u.className||"")+" "+(u.getAttribute("role")||"")).toLowerCase();(/search|поиск|[?&](q|s|query)=/.test(h)||u.getAttribute("role")==="search")&&(c+=4)}let l=s.getBoundingClientRect();return l.width>40&&l.height>8&&(c+=2),c},"score"),n=null,r=0;for(let s of e){let o=t(s);o>r&&(r=o,n=s)}return!n||r<4?null:n.id?"#"+(window.CSS&&CSS.escape?CSS.escape(n.id):n.id):n.name?'input[name="'+String(n.name).replace(/"/g,'\\"')+'"]':null}function Rp(e){let t=document.querySelector(e);if(!t)return!1;let n=t.form||t.closest&&t.closest("form");if(n){let r=n.querySelector('button[type="submit"],input[type="submit"],button:not([type])');if(r)try{return r.click(),!0}catch{}try{return n.requestSubmit?n.requestSubmit():n.submit(),!0}catch{}}return!1}function _p(){let e=document.querySelector('[aria-label*="поиск" i],[aria-label*="search" i],[title*="поиск" i],[title*="search" i],button[class*="search" i],a[class*="search" i],[class*="search-toggle" i],[class*="header-search" i],[class*="search-btn" i]');if(e)try{return e.click(),!0}catch{}return!1}function Cp({selectors:e,hostHint:t,google:n,bing:r}){let s=(document.title||"").toLowerCase(),o=(document.body&&document.body.innerText||"").slice(0,3e3).toLowerCase(),a=/just a moment|checking your browser|attention required|verifying you are human|cloudflare/.test(s+" "+o)||!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait");try{window.scrollTo(0,document.body.scrollHeight)}catch{}let c=i(g=>{try{return new URL(g,location.href).href}catch{return null}},"abs"),u=/(^|\.)(google|gstatic|googleapis|googletagmanager|googlesyndication|doubleclick|facebook|twitter|x\.com|instagram|youtube|vk\.com|t\.me|mc\.yandex)\./i,l=i(g=>{let b=c(g);if(!b)return null;let x;try{x=new URL(b).host}catch{return null}if(!u.test(x))return b.split("#")[0];let M=decodeURIComponent(g).match(/https?:\/\/[^\s"'&<>]+/g)||[];for(let v of M)try{let T=new URL(v).host.replace(/^www\./,"");if(!u.test(T)&&(!t||T===t||T.endsWith("."+t)))return v.split("#")[0]}catch{}return null},"realUrl"),h=/(\d+\s*(?:second|sec|minute|min|hour|hr|day|week|month|year)s?\s*ago|\d+\s*(?:секунд|минут|час|дн|день|недел|месяц|год|лет)[а-я]*\s*назад|yesterday|today|вчера|сегодня|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{0,4}|\d{1,2}\s+(?:янв|фев|мар|апр|ма[йя]|июн|июл|авг|сен|окт|ноя|дек)[а-я]*\.?\s*\d{2,4}(?:\s*(?:года|г\.))?|\d{1,2}\.\d{1,2}\.\d{4})/i,f=i(g=>{let b=(g||"").match(h);return b?b[0]:""},"findDate"),d=i(g=>(g||"").replace(h,"").replace(/\s+/g," ").trim().slice(0,200),"cleanTitle"),p=[];if(r){document.querySelectorAll("li.b_algo").forEach(b=>{let x=b.querySelector("h2 a[href]")||b.querySelector("a[href]");if(!x||!x.href)return;let w=(x.textContent||"").replace(/\s+/g," ").trim(),M=b.querySelector(".b_caption p")||b.querySelector("p"),v=M?(M.textContent||"").replace(/\s+/g," ").trim():"";p.push({url:x.href,title:w,date:"",snippet:v.slice(0,400)})});let g=new Set;return{cf:a,items:p.filter(b=>b.url&&!g.has(b.url)&&g.add(b.url))}}if(n){document.querySelectorAll("a[href] h3, h3 a[href]").forEach(b=>{let x=b.tagName==="H3"?b:b.closest("h3"),w=x?x.closest("a[href]")||x.querySelector&&x.querySelector("a[href]"):null;if(!x||!w)return;let M=l(w.getAttribute("href"));if(!M)return;let v=(x.textContent||"").replace(/\s+/g," ").trim();if(v.length<8)return;let T=w.closest("div.g, div[data-hveid], div[data-rpos], div[jscontroller]")||w.parentElement,k=T&&T.innerText||"",S=k.replace(/\s+/g," ").trim(),R=S.indexOf(v);R>=0&&(S=(S.slice(0,R)+" "+S.slice(R+v.length)).trim()),p.push({url:M,title:v,date:f(k),snippet:S.slice(0,300)})});let g=new Set;return{cf:a,items:p.filter(b=>b.url&&!g.has(b.url)&&g.add(b.url))}}if(e&&e.container)document.querySelectorAll(e.container).forEach(g=>{let b=e.link&&g.querySelector(e.link)||(g.matches&&g.matches("a[href]")?g:g.querySelector("a[href]")),x=b&&b.getAttribute("href");if(!x)return;let w=l(x);if(!w)return;let M=e.title&&g.querySelector(e.title)||b,v=e.date?g.querySelector(e.date):g.querySelector("time"),T=v&&(v.getAttribute&&v.getAttribute("datetime")||v.textContent)||"";T||(T=f(g.innerText)),p.push({url:w,title:d(M&&M.textContent),date:(T||"").trim(),snippet:(g.innerText||"").slice(0,300)})});else{let g=[...document.querySelectorAll("a[href]")].filter(T=>(T.textContent||"").trim().length>20),b={};for(let T of g){let k=T;for(let S=0;S<6&&k.parentElement;S++){k=k.parentElement;let R=k.className&&typeof k.className=="string"?k.className.trim().split(/\s+/)[0]:"";R&&(b[R]=b[R]||new Set).add(k)}}let x=null,w=2;for(let T in b)b[T].size>w&&(w=b[T].size,x=T);let M=null;if(x)try{M=[...document.querySelectorAll("."+CSS.escape(x))]}catch{}let v=i((T,k)=>{let S=l(k.getAttribute("href"));if(!S)return;let R;try{R=new URL(S)}catch{return}if(R.protocol!=="http:"&&R.protocol!=="https:")return;let E=(k.textContent||"").trim();if(E.length<=20)return;let W=T||k.parentElement,q=W&&W.querySelector("time"),P=q&&(q.getAttribute("datetime")||q.textContent)||"";P||(P=f(W&&W.innerText)),p.push({url:S,title:d(E),date:(P||"").trim(),snippet:(W&&W.innerText||E).slice(0,300)})},"pushFrom");if(M&&M.length>=3)for(let T of M){let k=T.querySelector("a[href]");k&&v(T,k)}else document.querySelectorAll("a[href]").forEach(T=>{if((T.textContent||"").trim().length<=25)return;let k=T.closest('article, li, [class*="result"], [class*="card"], [class*="item"], .gsc-webResult, .b-serp-item')||T.parentElement;v(k,T)})}let m=new Set;return{cf:a,items:p.filter(g=>g.url&&!m.has(g.url)&&m.add(g.url))}}var mt,Zn,cs,cl,ip,Tn,up,dp,pp,hp,fp,ea,_t,gp,us,ls,kp,fl=ae(()=>{sl();gt();Jo();il();Lr();mt=new Map,Zn=new Map,cs="",cl=6e4,ip=i((e,t)=>{let n=e?ms:gs;return typeof t=="string"?n+"-"+t:t?n+"-"+(t+1):n},"profileDir");i(cp,"tryLaunch");i(ul,"context");i(Qn,"dropContext");i(ta,"closeBrowser");i(lp,"closeRunBrowsers");Tn=i(()=>cs||"причина неизвестна","browserError"),up=i(()=>({..._t.stats,byHost:{..._t.stats.byHost}}),"browserStats"),dp=i(()=>{al(),_t.resetStats()},"resetBrowserStats"),pp=9e4,hp=12e4,fp=12e4,ea=[],_t=ol((e,t=0)=>{let n=e==="фейсбук"?ls:t;console.log("[render] окно "+(n===ls?"соцсетей":n+1)+", "+e+": браузер не ответил в срок — перезапускаю"),ea[t]||(ea[t]=ta(n).catch(()=>{}).then(()=>{ea[t]=null}))},2);i(mp,"setBrowserWindows");gp=i(()=>_t.lanes(),"browserWindows");i(bp,"renderScrape");i(na,"openPage");us=i(e=>Pe(e.close().catch(()=>{}),5e3),"shut");i(wp,"renderFetch");i(yp,"_renderFetch");i(xp,"renderSiteSearch");i(vp,"_renderSiteSearch");ls="social",kp=18e4;i(dl,"socialPage");i(Sp,"openSocialLogin");i(Tp,"fbLoginProbe");i($p,"renderFacebook");i(Ap,"_facebook");i(Mp,"_render");i(pl,"scrapeFrames");i(ll,"findSearchSelector");i(Rp,"submitSearchForm");i(_p,"clickSearchToggle");i(Cp,"pageScrape")});var Lp={};async function Dp(){try{let e=await Promise.resolve().then(()=>(fl(),hl));Fa(e.renderScrape),Wa(e.renderFetch),Ka(e.renderSiteSearch),Xi(e.browserStats,e.resetBrowserStats),Zi(e.closeRunBrowsers),Qi(e.renderFacebook),oa=e.openSocialLogin,sa=e.setBrowserWindows,vl(),kl=!0,console.log("[Playwright: podklyuchyon — JS-sayty, brauzer-fetch i poisk sayta dostupny]")}catch{console.log("[Playwright: ne ustanovlen — tolko lyogkie kanaly. Zapusti setup-windows.bat]")}}function ml(e){let t=["source","date","title","url","channel","channels","match","snippet","author","kind","via"];return[t.join(",")].concat((e||[]).map(n=>t.map(r=>Ep(r==="date"?sr(n[r]):n[r])).join(","))).join(`\r
`)}var gl,bl,wl,yl,xl,im,ra,sa,vl,oa,kl,N,Ct,Ep,Pp,Sl=ae(()=>{gl=Qt(require("node:http"),1),bl=Qt(require("node:dns"),1),wl=Qt(require("node:os"),1),yl=require("node:url"),xl=require("node:path");fr();Wt();wo();Rc();yo();xo();Ht();ko();Vn();Ao();Fn();Lo();Mo();Ic();xs();Er();Uc();jo();Wc();tl();Bo();Wo();try{bl.default.setDefaultResultOrder("ipv4first")}catch{}im=(0,xl.dirname)((0,yl.fileURLToPath)(__mcFileUrl)),ra=process.env.PORT||8787,sa=null,vl=i(()=>{if(!sa)return;let e=Math.max(1,Math.min(4,+Ze().browserWindows||2));try{sa(e)}catch{}},"applyBrowserWindows"),oa=null,kl=!1;i(Dp,"initRenderer");N=i((e,t,n)=>{e.writeHead(t,{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),e.end(JSON.stringify(n))},"json"),Ct=i(e=>new Promise(t=>{let n="";e.on("data",r=>n+=r),e.on("end",()=>{try{t(JSON.parse(n||"{}"))}catch{t({})}})}),"readBody"),Ep=i(e=>{let t=String(e??"");return/[",\r\n]/.test(t)?'"'+t.replace(/"/g,'""')+'"':t},"csvCell");i(ml,"toCSV");Pp=gl.default.createServer(async(e,t)=>{let n=new URL(e.url,"http://x"),r=n.pathname;if(e.method==="GET"&&(r==="/"||r==="/index.html"))try{return t.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),t.end(os())}catch{return t.writeHead(500),t.end("ui.html не найден")}if(!r.startsWith("/api/"))return t.writeHead(404),t.end("not found");let s=Ze().password||"";if(r==="/api/me")return N(t,200,{hasPassword:!!s,playwright:kl,hasGeminiKey:!!Ze().geminiKey,geminiModel:Ze().geminiModel||"",geminiSnippets:Co(Ze()),browserWindows:Math.max(1,Math.min(4,+Ze().browserWindows||2))});if(r==="/api/quit"&&e.method==="POST"){let o=String(e.socket.remoteAddress||"");if(!(o==="127.0.0.1"||o==="::1"||o==="::ffff:127.0.0.1"))return N(t,403,{error:"выключить программу можно только с этого компьютера"});N(t,200,{ok:!0}),setTimeout(()=>process.exit(0),300);return}if(s&&e.headers["x-mc-key"]!==s)return N(t,401,{error:"нужен пароль"});if(r==="/api/presets")return N(t,200,{sites:vo,telegram:sc,world:rc});if(r==="/api/state")return N(t,200,{runs:tc()});try{if(r==="/api/projects"&&e.method==="GET")return N(t,200,{projects:yr()});if(r==="/api/projects"&&e.method==="POST"){let a=await Ct(e),c=a.config||{};return(!Array.isArray(c.sites)||!c.sites.length)&&(c.sites=vo.map(u=>u.url)),N(t,200,oi(a.name,c))}if(r==="/api/social/login"&&e.method==="POST"){if(!oa)return N(t,503,{error:"нет браузера: запусти setup-windows.bat"});let a=await oa();return N(t,a.ok?200:502,a)}if(r==="/api/social/visits"&&e.method==="GET"){let{facebookProfile:a}=await Promise.resolve().then(()=>(Lr(),Ji)),c=await Promise.resolve().then(()=>(po(),uo));c.reload();let u=(n.searchParams.get("profiles")||"").split(`
`).map(h=>a(h)).filter(Boolean),l=Math.max(1,Math.min(6,+n.searchParams.get("limit")||c.DEFAULT_LIMIT));return N(t,200,{visits:u.map(h=>{let f=c.canVisit(h.label,{limit:l});return{label:h.label,used:f.used,limit:f.limit,ok:f.ok,why:f.why,nextAt:c.nextAt(h.label,{limit:l})}})})}if(r==="/api/license"&&e.method==="GET")return N(t,200,ts());if(r==="/api/license"&&e.method==="POST"){let a=await Ct(e);return N(t,200,$c(a.key||""))}if(r==="/api/code"&&e.method==="GET")return n.searchParams.get("check")?N(t,200,await ys({force:!0})):N(t,200,Je());if(r==="/api/code/drop"&&e.method==="POST")return N(t,200,ga());if(r==="/api/update"&&e.method==="GET")return n.searchParams.get("check")?N(t,200,await Uo({force:!0})):N(t,200,Jn());if(r==="/api/update/download"&&e.method==="POST"){let a=await jc();return N(t,a.ok?200:502,{...a,state:Jn()})}if(r==="/api/update/install"&&e.method==="POST"){let a=String(e.socket.remoteAddress||"");if(!(a==="127.0.0.1"||a==="::1"||a==="::ffff:127.0.0.1"))return N(t,403,{error:"обновить можно только с этого компьютера"});let c=Oc({busy:xt.size>0});if(!c.ok)return N(t,409,c);N(t,200,c),setTimeout(()=>process.exit(0),1500);return}if(r==="/api/settings"&&e.method==="POST"){let a=await Ct(e);return si(a||{}),vl(),N(t,200,{ok:!0})}if(r==="/api/gemini/models"&&e.method==="GET"){let a=Ze().geminiKey||"",c=await uc({apiKey:a});return N(t,200,{...c,chain:$o(Ze().geminiModel||"")})}let o=r.match(/^\/api\/projects\/([^/]+)(?:\/(.+))?$/);if(o){let a=o[1],c=o[2]||"",u=tt(a);if(!u)return N(t,404,{error:"проект не найден"});if(c===""&&e.method==="GET")return N(t,200,u);if(c===""&&e.method==="PUT"){let d=await Ct(e);return N(t,200,ai(a,d))}if(c===""&&e.method==="DELETE")return ii(a),N(t,200,{ok:!0});if(c==="read"&&e.method==="POST")return ci(a),N(t,200,{ok:!0});if(c==="telegram"&&e.method==="POST"){let d=await Ct(e),p={};if(d.enabled!==void 0&&(p.enabled=!!d.enabled),d.clearToken)p.token="",p.bot="",p.chats=[],p.offset=0,p.err="";else if(d.token){let x=String(d.token).trim(),w=zt(a);p.token=x,x!==w.token&&(p.chats=[],p.offset=0,p.bot="",p.err="")}let m=zt(a),g=$t(a,p),b=0;return g.enabled&&!m.enabled&&(b=pi(a)),N(t,200,{ok:!0,tg:Ln(a),muted:b})}if(c==="telegram/resend"&&e.method==="POST"){let d=await Ct(e),p=zn(a),m=String(d.ts||p[0]&&p[0].ts||"");if(!m)return N(t,400,{error:"прогонов ещё не было — присылать нечего"});let g=hn(a,m);if(!g)return N(t,404,{error:"архив прогона не найден"});let b=(g.rows||[]).map(M=>M.url).filter(Boolean),x=hi(a,b),w=await Vt(a,{});return N(t,200,{ok:!0,ts:m,rows:b.length,freed:x,sent:w.sent||0,rest:w.rest||0,skipped:w.skipped||""})}if(c==="telegram/check"&&e.method==="POST"){let d=zt(a);if(!d.token)return N(t,400,{error:"сначала вставьте токен бота"});let p=await yc(d.token);if(!p.ok)return $t(a,{err:p.err}),N(t,200,{ok:!1,error:p.err,tg:Ln(a)});let m=await No(d.token,d);return $t(a,{bot:p.bot,chats:m.chats,offset:m.offset,err:m.err||""}),N(t,200,{ok:!0,tg:Ln(a)})}if(c==="export.csv"&&e.method==="GET")return t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}.csv"`}),t.end("\uFEFF"+ml(u.items));if(c==="run"&&e.method==="POST"){let d=ns();if(d)return N(t,402,{error:d});if(xt.has(a))return N(t,409,{error:"уже идёт"});xt.add(a),Or(a,{name:u.name,by:"ручной"});let p=null,m=i((g,b)=>{try{let x=pn(a,g,b,p);p=x.ts,Vt(a,{ts:x.ts}).catch(()=>{})}catch{}},"onProgress");try{let{rows:g,log:b}=await jr(u,m,{onStep:i(M=>Ir(a,M),"onStep"),stopping:i(()=>qr(a),"stopping")}),x=pn(a,g,b,p);try{await Vt(a,{ts:x.ts})}catch{}let w=await Jr(a,{foundNow:g.length,runTs:x.ts});return w.length&&vr(a,x.ts,w.map(M=>({site:"(ИИ)",channel:"gemini",found:0,note:M}))),N(t,200,{added:x.added,total:x.total,ts:x.ts,log:b})}finally{xt.delete(a),Hr(a)}}if(c==="stop"&&e.method==="POST"){let d=ec(a);return N(t,d?200:409,d?{ok:!0}:{error:"этот проект сейчас не собирает"})}if(c==="diagnose"&&e.method==="POST"){let d=await Ct(e),p=String(d.site||"").trim();if(!p)return N(t,400,{error:"не указан сайт"});let m=u.config||{};if(!String(m.keyword||"").trim())return N(t,400,{error:"у проекта не задан запрос"});let g=fn(m),b=await hr(p,{keyword:m.keyword,exclude:m.exclude||"",morph:m.morph!==!1,from:g.from,to:g.to,diag:!0});return N(t,200,{report:Gc(p,b,g),channel:b.channel,note:b.note,found:b.rows.length,diag:b.diag})}if(c==="items/delete"&&e.method==="POST"){let d=await Ct(e),p=Array.isArray(d.urls)?d.urls.map(g=>String(g||"").trim()).filter(Boolean):[];if(!p.length)return N(t,400,{error:"не выбрано ни одного материала"});let m=yi(a,p);return m?N(t,200,m):N(t,404,{error:"проект не найден"})}if(c==="share.html"&&e.method==="GET"){let d=Bc(a);return d?(t.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Content-Disposition":Ko(Fc(d.snap))}),t.end(d.html)):N(t,404,{error:"проект не найден"})}if(c==="analytics"&&e.method==="GET"){let d=n.searchParams.get("days"),p=jt(a,{days:d?+d:null});return p?N(t,200,p):N(t,404,{error:"проект не найден"})}if(c==="gemini"&&e.method==="POST"){let d=Ze();if(!Nt(u.config||{}).ai)return N(t,403,{error:gn});if(!d.geminiKey)return N(t,400,{error:"нет ключа Gemini (задайте в настройках)"});let p=await Ct(e),m=jt(a,{days:p.days?+p.days:null});if(!m)return N(t,404,{error:"проект не найден"});let g=Ro.includes(p.kind)?p.kind:"summary";if(g==="verify"&&!Wr(u.schedule))return N(t,403,{error:Kr(u.schedule)});let b=(u.items||[]).filter(T=>T&&T.title&&T.rel!=="-"),x=null,w,M=g==="sentiment"||g==="verify";if(M)w=await Do(a,{kind:g,days:p.days?+p.days:null,analytics:m,settings:d,rescore:!!p.rescore});else{x=[];let T=new Set;for(;x.length<Math.min(60,b.length);){let k=b[Math.floor(Math.random()*b.length)];T.has(k.url||k.title)||(T.add(k.url||k.title),x.push({title:k.title,url:k.url,source:k.source,date:k.date,sent:k.sent||""}))}w=await Gr({apiKey:d.geminiKey,model:d.geminiModel,analytics:m,sampleTitles:_o(x),kind:g})}let v=M?w.ok?w.items:null:w.ok?Vr(x,w.marks):null;return xr(a,g,{at:Date.now(),runTs:null,window:m.overview.windowFrom+" … "+m.overview.windowTo,text:w.ok?w.text:"",model:w.model||d.geminiModel||"",err:w.ok?"":w.err||"",auto:!1,items:v}),N(t,w.ok?200:502,w.ok?{...w,items:v,note:g==="sentiment"?Eo(w):g==="verify"?Po(w):""}:w)}if(c==="usage"&&e.method==="GET"){let d=wi(a),p=0;try{let{statSync:m,existsSync:g}=await import("node:fs"),{join:b}=await import("node:path"),{DATA_ROOT:x}=await Promise.resolve().then(()=>(gt(),da)),w=b(x,"date-cache.json");g(w)&&(p=m(w).size)}catch{}return N(t,200,{...d,limitMb:Bs(u.config),dateCacheBytes:p})}if(c==="report.txt"&&e.method==="GET"){let d=jt(a,{days:n.searchParams.get("days")?+n.searchParams.get("days"):null});return d?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(el(u.config||{},d))):N(t,404,{error:"проект не найден"})}if(c==="runs"&&e.method==="GET")return N(t,200,{runs:zn(a)});let l=c.match(/^runs\/([^/]+)\/log\.json$/);if(l&&e.method==="GET"){let d=Ti(a,l[1]);return d?(t.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Content-Disposition":Ko(`лог ${l[1].slice(0,10)} ${l[1].slice(11,16)} — ${d.проект||a}.json`)}),t.end(JSON.stringify(d,null,2))):N(t,404,{error:"прогон не найден"})}let h=c.match(/^runs\/([^/]+)\/report\.txt$/);if(h&&e.method==="GET"){let d=hn(a,h[1]);return d?(t.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),t.end(Qc(u.config||{},d))):N(t,404,{error:"прогон не найден"})}let f=c.match(/^runs\/([^/]+)(\/export\.csv)?$/);if(f&&e.method==="GET"){let d=hn(a,f[1]);return d?f[2]?(t.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${a}-${f[1]}.csv"`}),t.end("\uFEFF"+ml(d.rows))):N(t,200,{...d,logsDir:cn}):N(t,404,{error:"прогон не найден"})}}return N(t,404,{error:"нет такого метода"})}catch(o){return N(t,500,{error:String(o&&o.message||o)})}});Dp().then(()=>Pp.listen(ra,"0.0.0.0",()=>{let e=[].concat(...Object.values(wl.default.networkInterfaces())).filter(s=>s.family==="IPv4"&&!s.internal).map(s=>s.address),t="0.5.1",n="388840a";console.log(`
  mediachrome ${t?t+(n?" ("+n+")":""):"(iz ishodnikov)"}`),console.log(`  Kabinet:        http://localhost:${ra}`),e.forEach(s=>console.log(`  S telefona:     http://${s}:${ra}   (v toy zhe Wi-Fi seti)`)),console.log(`  (zakryt — zakroy eto okno)
`),Mc();let r=i(()=>{Ze().updateCheck!==!1&&(Uo().catch(()=>{}),ys().catch(()=>{}))},"look");setTimeout(r,2e4),setInterval(r,6*3600*1e3),fa()}))});var Tl=require("node:module");xs();var ds="__mcCodeLoaded";(async()=>{if(process.env.MC_EXE_VERSION||(process.env.MC_EXE_VERSION="0.5.1"),!globalThis[ds]){let e=null;try{e=ha()}catch{e=null}if(e){globalThis[ds]=e.version;try{(0,Tl.createRequire)(process.execPath)(e.path);return}catch(t){globalThis[ds]="";try{ma(e.version,String(t&&t.message||t))}catch{}console.log(`
  [obnovlenie mehanizmov `+e.version+" ne zagruzilos - rabotaem po vshitomu kodu]"),console.log("  "+String(t&&t.message||t)+`
`)}}}process.env.MC_CODE_RUNNING=globalThis[ds]||"",await Promise.resolve().then(()=>(Sl(),Lp))})();
