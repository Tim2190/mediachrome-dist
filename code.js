// mediachrome 0.7.1 (9c23a4b) — собрано автоматически, не править
const __mcFileUrl = require('node:url').pathToFileURL(process.execPath).href;
var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __esm=(fn,res,err)=>function(){if(err)throw err[0];try{return fn&&(res=(0,fn[__getOwnPropNames(fn)[0]])(fn=0)),res}catch(e){throw err=[e],e}};var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));var paths_exports={};__export(paths_exports,{DATA_ROOT:()=>DATA_ROOT,USERDATA_CHROMIUM_DIR:()=>USERDATA_CHROMIUM_DIR,USERDATA_DIR:()=>USERDATA_DIR,migrateLegacyData:()=>migrateLegacyData});function resolveRoot(){if(process.env.MEDIACHROME_DATA)return process.env.MEDIACHROME_DATA;let base=process.env.APPDATA||(import_node_os.default.homedir?import_node_os.default.homedir():__dir);return process.env.APPDATA?(0,import_node_path.join)(base,"mediachrome"):(0,import_node_path.join)(base,".mediachrome")}function migrateLegacyData(copyDirFn){try{let legacy=(0,import_node_path.join)(__dir,"data"),hasNew=(0,import_node_fs.existsSync)((0,import_node_path.join)(DATA_ROOT,"projects"))||(0,import_node_fs.existsSync)((0,import_node_path.join)(DATA_ROOT,"site-memory.json"));if((0,import_node_fs.existsSync)(legacy)&&!hasNew&&(0,import_node_fs.readdirSync)(legacy).length)return copyDirFn(legacy,DATA_ROOT),!0}catch{}return!1}var import_node_os,import_node_path,import_node_fs,import_node_url,import_node_path2,__dir,DATA_ROOT,USERDATA_DIR,USERDATA_CHROMIUM_DIR,init_paths=__esm({"desktop/paths.js"(){import_node_os=__toESM(require("node:os"),1),import_node_path=require("node:path"),import_node_fs=require("node:fs"),import_node_url=require("node:url"),import_node_path2=require("node:path"),__dir=(0,import_node_path2.dirname)((0,import_node_url.fileURLToPath)(__mcFileUrl));DATA_ROOT=resolveRoot(),USERDATA_DIR=(0,import_node_path.join)(DATA_ROOT,".userdata"),USERDATA_CHROMIUM_DIR=(0,import_node_path.join)(DATA_ROOT,".userdata-chromium");try{(0,import_node_fs.mkdirSync)(DATA_ROOT,{recursive:!0})}catch{}}});function cmpVer(a,b){let p=s=>String(s||"0").split(/[^\d]+/).filter(x=>x!=="").map(Number),A=p(a),B=p(b);for(let i=0;i<Math.max(A.length,B.length);i++){let d=(A[i]||0)-(B[i]||0);if(d)return d<0?-1:1}return 0}function verifyBundle(buf,meta){if(!CODE_PUBLIC_KEY)return{ok:!1,why:"подпись кода не настроена — лёгкие обновления выключены"};let sum2=(0,import_node_crypto.createHash)("sha256").update(buf).digest("hex");if(meta&&meta.sha256&&sum2!==meta.sha256)return{ok:!1,why:"файл не совпал с отпечатком из витрины — возможно, скачался не целиком"};let pub;try{pub=(0,import_node_crypto.createPublicKey)({key:Buffer.from(CODE_PUBLIC_KEY,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ"}}let good=!1;try{let sig=Buffer.from(String(meta&&meta.sig||"").replace(/-/g,"+").replace(/_/g,"/"),"base64");good=sig.length>0&&(0,import_node_crypto.verify)(null,buf,pub,sig)}catch{good=!1}return good?{ok:!0,why:"",sha256:sum2}:{ok:!1,why:"подпись не сошлась — файл не от разработчика или повреждён"}}function codeVerdict(st=st0()){let a=CODE_PUBLIC_KEY?st.active:null;if(!a||!a.version||!a.file)return{use:!1,why:"none",version:""};if((st.bad||{})[a.version])return{use:!1,why:"bad",version:a.version};if(!(0,import_node_fs2.existsSync)(a.file))return{use:!1,why:"gone",version:a.version};let exe=exeVersion();return exe&&a.minExe&&cmpVer(exe,a.minExe)<0?{use:!1,why:"needExe",version:a.version,minExe:a.minExe,exe}:exe&&cmpVer(a.version,exe)<=0?{use:!1,why:"stale",version:a.version,exe}:{use:!0,why:"",version:a.version,file:a.file,minExe:a.minExe||""}}function activeCode(){if(!CODE_PUBLIC_KEY)return null;let st=st0(),a=st.active;if(!a||!a.version||!a.file)return null;if(st.pending&&st.pending.version===a.version){let bad=st.bad||{};bad[a.version]={at:Date.now(),why:"программа не дошла до запуска"};try{(0,import_node_fs2.renameSync)(a.file,a.file+".broken")}catch{try{(0,import_node_fs2.rmSync)(a.file,{force:!0})}catch{}}return save({...st,active:null,pending:null,bad,lastFail:{version:a.version,at:Date.now()}}),null}let v=codeVerdict(st);if(!v.use){if(v.why==="stale"){try{(0,import_node_fs2.rmSync)(a.file,{force:!0})}catch{}save({...st,active:null,pending:null})}else v.why==="gone"&&save({...st,active:null});return null}return save({...st,pending:{version:a.version,at:Date.now()}}),{path:a.file,version:a.version}}function markCodeOk(){let st=st0();if(!st.pending)return;let running2=process.env.MC_CODE_RUNNING||"";if(st.pending.version!==running2)return;let ok=st.okVersions||{};ok[st.pending.version]=Date.now(),save({...st,pending:null,okVersions:ok})}function markCodeBad(version,why){let st=st0(),bad=st.bad||{};bad[version]={at:Date.now(),why:String(why||"")};let a=st.active;if(a&&a.version===version&&a.file)try{(0,import_node_fs2.renameSync)(a.file,a.file+".broken")}catch{try{(0,import_node_fs2.rmSync)(a.file,{force:!0})}catch{}}save({...st,active:null,pending:null,bad,lastFail:{version,at:Date.now(),why:String(why||"")}})}function codeState(){let st=st0(),a=CODE_PUBLIC_KEY?st.active:null,v=codeVerdict(st),running2=process.env.MC_CODE_RUNNING||"";return{enabled:!!CODE_PUBLIC_KEY,running:running2,exe:exeVersion(),ready:!!(v.use&&v.version!==running2),readyVersion:v.use?v.version:"",needExe:v.why==="needExe"?{version:v.version,minExe:v.minExe}:null,notes:a&&a.notes||"",lastFail:st.lastFail||null,checkedAt:st.checkedAt||0,err:st.err||""}}async function getJson(url){let c=new AbortController,t=setTimeout(()=>c.abort(),15e3);try{let r=await fetch(url,{signal:c.signal,headers:{"Cache-Control":"no-cache"}});if(!r.ok)throw new Error("HTTP "+r.status);return await r.json()}finally{clearTimeout(t)}}async function checkCode(opts={}){if(!CODE_PUBLIC_KEY)return codeState();let st=st0();if(!opts.force&&st.checkedAt&&Date.now()-st.checkedAt<DAY)return codeState();let man=null;try{man=await getJson(MANIFEST_URL)}catch(e){return save({...st,checkedAt:Date.now(),err:String(e&&e.message||e)}),codeState()}if(save({...st,checkedAt:Date.now(),err:""}),!man||!man.version||!man.url)return codeState();let exe=exeVersion(),have=st.active&&st.active.version||exe;if(have&&cmpVer(man.version,have)<=0||(st.bad||{})[man.version])return codeState();if(exe&&man.minExe&&cmpVer(exe,man.minExe)<0)return save({...st0(),needFull:{version:man.version,minExe:man.minExe}}),codeState();let buf;try{let c=new AbortController,t=setTimeout(()=>c.abort(),6e4);try{let r=await fetch(man.url,{signal:c.signal});if(!r.ok)throw new Error("HTTP "+r.status);buf=Buffer.from(await r.arrayBuffer())}finally{clearTimeout(t)}}catch(e){return save({...st0(),err:String(e&&e.message||e)}),codeState()}let v=verifyBundle(buf,man);if(!v.ok)return save({...st0(),err:v.why}),codeState();try{(0,import_node_fs2.mkdirSync)(DIR,{recursive:!0})}catch{}let file=(0,import_node_path3.join)(DIR,"code-"+String(man.version).replace(/[^\w.-]/g,"_")+".js"),tmp=file+".part";try{(0,import_node_fs2.writeFileSync)(tmp,buf),(0,import_node_fs2.renameSync)(tmp,file)}catch(e){try{(0,import_node_fs2.rmSync)(tmp,{force:!0})}catch{}return save({...st0(),err:"не удалось сохранить: "+String(e&&e.message||e)}),codeState()}let cur=st0();if(cur.active&&cur.active.file&&cur.active.file!==file)try{(0,import_node_fs2.rmSync)(cur.active.file,{force:!0})}catch{}return save({...cur,err:"",active:{version:man.version,file,minExe:man.minExe||"",notes:man.notes||"",at:Date.now()}}),codeState()}function dropCode(){let st=st0();if(st.active&&st.active.file)try{(0,import_node_fs2.rmSync)(st.active.file,{force:!0})}catch{}return save({...st,active:null,pending:null}),codeState()}var import_node_path3,import_node_fs2,import_node_crypto,MANIFEST_URL,CODE_PUBLIC_KEY,DIR,STATE,DAY,readJson,save,st0,exeVersion,init_code_update=__esm({"desktop/code-update.js"(){import_node_path3=require("node:path"),import_node_fs2=require("node:fs"),import_node_crypto=require("node:crypto");init_paths();MANIFEST_URL=process.env.MC_CODE_URL||"https://raw.githubusercontent.com/tim2190/mediachrome-dist/main/code.json",CODE_PUBLIC_KEY="MCowBQYDK2VwAyEArb2DkMY1meiRt6JXIr0unrIjtj5ADfd+D/OVThCAoyg=",DIR=(0,import_node_path3.join)(DATA_ROOT,"code"),STATE=(0,import_node_path3.join)(DIR,"state.json"),DAY=864e5,readJson=f=>{try{return JSON.parse((0,import_node_fs2.readFileSync)(f,"utf8"))}catch{return null}},save=st=>{try{(0,import_node_fs2.mkdirSync)(DIR,{recursive:!0})}catch{}try{(0,import_node_fs2.writeFileSync)(STATE,JSON.stringify(st,null,2))}catch{}},st0=()=>readJson(STATE)||{};exeVersion=()=>process.env.MC_EXE_VERSION||"0.7.1"}});function chainErrCode(e){let seen=new Set;for(let c=e;c&&typeof c=="object"&&!seen.has(c);c=c.cause)if(seen.add(c),c.code&&CHAIN_ERRS.has(c.code))return c.code;return null}function peerCert(host2,port,ms2){return new Promise(resolve=>{let done=!1,fin=v=>{done||(done=!0,resolve(v))},t=setTimeout(()=>fin(null),ms2),go=socket=>{let s=import_node_tls.default.connect({host:host2,port,servername:host2,socket,rejectUnauthorized:!1},()=>{let raw=null;try{raw=s.getPeerCertificate(!1).raw}catch{}s.destroy(),clearTimeout(t),fin(raw||null)});s.on("error",()=>{clearTimeout(t),fin(null)})},px=process.env.NODE_USE_ENV_PROXY&&(process.env.HTTPS_PROXY||process.env.https_proxy);if(!px)return go(void 0);let pu;try{pu=new URL(px)}catch{return go(void 0)}let req2=import_node_http.default.request({host:pu.hostname,port:pu.port||80,method:"CONNECT",path:host2+":"+port});req2.on("connect",(res,socket)=>{res.statusCode===200?go(socket):(socket.destroy(),clearTimeout(t),fin(null))}),req2.on("error",()=>{clearTimeout(t),fin(null)}),req2.end()})}function aiaUrl(leaf){let m=String(leaf.infoAccess||"").match(/CA Issuers - URI:(\S+)/);return m?m[1]:null}async function defaultFetchIssuer(url,fetchFn,ms2){if(!/^https?:\/\//i.test(url))return null;let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),ms2);try{let r=await fetchFn(url,{signal:ctrl.signal});return r.ok?Buffer.from(await r.arrayBuffer()):null}catch{return null}finally{clearTimeout(t)}}function issuerFits(leafDer,issuerBuf){try{let leaf=new import_node_crypto2.X509Certificate(leafDer),iss=new import_node_crypto2.X509Certificate(issuerBuf);return leaf.checkIssued(iss)&&leaf.verify(iss.publicKey)?iss:null}catch{return null}}async function healHost(host2,port=443,{fetchIssuer,fetchFn=globalThis.fetch,ms:ms2=1e4}={}){let key=host2+":"+port;if(healed.has(key))return healed.get(key);let p=(async()=>{let raw=await peerCert(host2,port,ms2);if(!raw)return tlsHealStats.failed.push(host2+" (сертификат не прочитан)"),!1;let leaf;try{leaf=new import_node_crypto2.X509Certificate(raw)}catch{return!1}let add=[],cur=leaf,curRaw=raw;for(let step2=0;step2<3;step2++){let url=aiaUrl(cur);if(!url)break;let buf=fetchIssuer?await fetchIssuer(url):await defaultFetchIssuer(url,fetchFn,ms2),iss=buf&&issuerFits(curRaw,buf);if(!iss||iss.checkIssued(iss))break;add.push(iss.toString()),cur=iss,curRaw=iss.raw}if(!add.length)return tlsHealStats.failed.push(host2+" (промежуточный не скачался или не подходит)"),!1;let have=import_node_tls.default.getCACertificates("default"),fresh2=add.filter(p2=>!have.includes(p2));return fresh2.length&&import_node_tls.default.setDefaultCACertificates([...have,...fresh2]),tlsHealStats.healed.push(host2),!0})();return healed.set(key,p),p}function installTlsHeal(opts={}){if(installed||typeof import_node_tls.default.setDefaultCACertificates!="function"||typeof globalThis.fetch!="function")return!1;installed=!0;let orig=globalThis.fetch;return globalThis.fetch=async function(input,init){try{return await orig(input,init)}catch(e){if(!chainErrCode(e))throw e;let u;try{u=new URL(typeof input=="string"?input:input&&input.url||String(input))}catch{throw e}if(u.protocol!=="https:"||!await healHost(u.hostname,+u.port||443,{fetchFn:orig,...opts}))throw e;return orig(input,init)}},!0}var import_node_tls,import_node_http,import_node_crypto2,CHAIN_ERRS,healed,tlsHealStats,installed,init_tls_heal=__esm({"desktop/tls-heal.js"(){import_node_tls=__toESM(require("node:tls"),1),import_node_http=__toESM(require("node:http"),1),import_node_crypto2=require("node:crypto"),CHAIN_ERRS=new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE","UNABLE_TO_GET_ISSUER_CERT_LOCALLY","UNABLE_TO_GET_ISSUER_CERT"]);healed=new Map,tlsHealStats={healed:[],failed:[]};installed=!1}});function urlOf(input){return typeof input=="string"?input:input&&input.url||String(input)}function remember(jar,res){let list=typeof res.headers.getSetCookie=="function"?res.headers.getSetCookie():[];for(let c of list){let kv=String(c).split(";")[0],i=kv.indexOf("=");i>0&&jar.set(kv.slice(0,i).trim(),kv.slice(i+1).trim())}}async function followWithCookies(orig,input,init={}){let url=urlOf(input),method=(init.method||"GET").toUpperCase(),body=init.body;for(let hop=0;hop<10;hop++){let host2=new URL(url).hostname,jar=jars.get(host2)||new Map,headers=new Headers(init.headers||{});jar.size&&headers.set("Cookie",[...jar].map(([k,v])=>k+"="+v).join("; "));let r=await orig(url,{...init,method,body,headers,redirect:"manual"});remember(jar,r),jar.size&&jars.set(host2,jar);let loc=r.status>=300&&r.status<400&&r.headers.get("location");if(!loc)return r;try{await r.arrayBuffer()}catch{}url=new URL(loc,url).href,(r.status===303||(r.status===301||r.status===302)&&method==="POST")&&(method="GET",body=void 0)}throw new Error("redirect count exceeded (и с возвратом куки)")}function installCookieHeal(){if(installed2||typeof globalThis.fetch!="function")return!1;installed2=!0;let orig=globalThis.fetch;return globalThis.fetch=async function(input,init){let manual=init&&init.redirect&&init.redirect!=="follow",host2="";try{host2=new URL(urlOf(input)).hostname}catch{}if(!manual&&host2&&jars.has(host2))return followWithCookies(orig,input,init);try{return await orig(input,init)}catch(e){if(manual||!isLoop(e))throw e;return followWithCookies(orig,input,init)}},!0}var jars,installed2,LOOP,isLoop,init_cookie_heal=__esm({"desktop/cookie-heal.js"(){jars=new Map,installed2=!1,LOOP=/redirect count exceeded/i,isLoop=e=>LOOP.test(String(e&&e.message||""))||LOOP.test(String(e&&e.cause&&e.cause.message||""))}});function parseDate(s){if(!s)return null;let str2=String(s).trim();if(!str2)return null;let dm2=str2.match(/(?:^|[^\d.\/])(\d{1,2})[.\/](\d{1,2})[.\/](\d{2}|\d{4})(?![\d.\/])(?:\s*,?\s*(?:в\s+)?(\d{1,2}):(\d{2})(?::(\d{2}))?(?!\d))?/);if(dm2&&+dm2[1]<=31&&+dm2[2]<=12){let y=dm2[3].length===2?2e3+ +dm2[3]:+dm2[3],d=dm2[4]!=null&&+dm2[4]<=23&&+dm2[5]<=59?new Date(y,+dm2[2]-1,+dm2[1],+dm2[4],+dm2[5],+(dm2[6]||0)):new Date(y,+dm2[2]-1,+dm2[1]);if(!isNaN(d.getTime()))return d}let zn=str2.match(/^(\d{4}-\d{2}-\d{2})([A-Z]{3,4})(\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)(.*)$/);if(zn){let ZONES={MSK:"+03:00",UTC:"Z",GMT:"Z"},rest=zn[4].trim(),off=/^(Z|[+-]\d{2}:?\d{2})$/.test(rest)?rest:!rest&&ZONES[zn[2]]||"",d=new Date(zn[1]+"T"+zn[3]+off);if(!isNaN(d.getTime()))return d}let native=new Date(str2);if(!isNaN(native.getTime())&&/\d{4}/.test(str2))return native;let loose=parseLoose(str2);return loose||(isNaN(native.getTime())?null:native)}function timeFrom(str2,base){let t=str2.match(/(\d{1,2}):(\d{2})/),d=new Date(base);return t?d.setHours(+t[1],+t[2],0,0):d.setHours(0,0,0,0),d}function parseLoose(raw){let s=raw.toLowerCase(),now=new Date;if(/только что|just now|moments? ago|сейчас/.test(s))return now;let m=s.match(/(\d+)\s*(секунд|минут|час|дн|день|сутк|недел|месяц|год|лет|сағат|мину?т|күн|тәулік|апта|ай|жыл|second|sec|minute|min|hour|day|week|month|year)[a-zа-яёәөұүқғңһі]*\s*(?:назад|бұрын|ago)/);if(m){let n=+m[1],u=m[2],d=new Date(now);return/секунд|second|sec/.test(u)?d.setSeconds(d.getSeconds()-n):/минут|мину?т|minute|min/.test(u)?d.setMinutes(d.getMinutes()-n):/час|сағат|hour/.test(u)?d.setHours(d.getHours()-n):/дн|день|сутк|күн|тәулік|day/.test(u)?d.setDate(d.getDate()-n):/недел|апта|week/.test(u)?d.setDate(d.getDate()-n*7):/месяц|month/.test(u)||u==="ай"?d.setMonth(d.getMonth()-n):/год|лет|жыл|year/.test(u)&&d.setFullYear(d.getFullYear()-n),d}if(/^вчера|^yesterday|^кеше/.test(s)){let y=new Date(now);return y.setDate(now.getDate()-1),timeFrom(s,y)}if(/^сегодня|^today|^бүгін/.test(s))return timeFrom(s,now);if(m=s.match(/(\d{1,2})\s+([а-яёәөұүқғңһіА-ЯЁӘӨҰҮҚҒҢҺІ]{3,})\.?\s*(\d{4})?/),m){let day=+m[1],ml=m[2].toLowerCase(),mi=KZ_MONTHS.findIndex(mm=>ml.startsWith(mm)||mm.startsWith(ml));if(mi<0&&(mi=RU_MONTHS.findIndex(mm=>ml.startsWith(mm)||mm.startsWith(ml))),mi>=0){let year=m[3]?+m[3]:now.getFullYear(),d=new Date(year,mi,day),withT=timeFrom(s,d);return isNaN(withT.getTime())?null:withT}}return null}function startOfDay(s){if(!s)return null;let d=new Date(s+"T00:00:00");return isNaN(d.getTime())?null:d}function ymd(d){if(!(d instanceof Date)||isNaN(d.getTime()))return null;let p2=n=>String(n).padStart(2,"0");return d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate())}function localStamp(v){if(!v)return"";let d=v instanceof Date?v:new Date(v);if(isNaN(d.getTime()))return String(v);let p2=n=>String(n).padStart(2,"0"),hm=d.getHours()||d.getMinutes()?" "+p2(d.getHours())+":"+p2(d.getMinutes()):"";return ymd(d)+hm}function endOfDay(s){if(!s)return null;let d=new Date(s+"T23:59:59.999");return isNaN(d.getTime())?null:d}function inRange(dateVal,from,to){let d=dateVal instanceof Date?dateVal:parseDate(dateVal);return!(!d||from&&d<from||to&&d>to)}var RU_MONTHS,KZ_MONTHS,init_dates=__esm({"extension/lib/dates.js"(){RU_MONTHS=["январ","феврал","март","апрел","ма","июн","июл","август","сентябр","октябр","ноябр","декабр"],KZ_MONTHS=["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]}});function isWordPress(html){return/\/wp-content\//.test(html||"")}function jsonLdObjects(html){let out=[],re=/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,m;for(;m=re.exec(html);){let data;try{data=JSON.parse(m[1].trim())}catch{continue}let arr=Array.isArray(data)?data:[data];for(let o of arr)o&&o["@graph"]&&Array.isArray(o["@graph"])&&out.push(...o["@graph"]),o&&out.push(o)}return out}function typeIncludes(t,name){return t?Array.isArray(t)?t.some(x=>String(x).toLowerCase().includes(name)):String(t).toLowerCase().includes(name):!1}function metaContent(html,prop){let re=new RegExp(`<meta[^>]+(?:property|name|itemprop)=["']`+PREF+prop+`["'][^>]*content=["']([^"']+)["']`,"i"),m=html.match(re);if(m)return m[1];let re2=new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]*(?:property|name|itemprop)=["']`+PREF+prop+`["']`,"i"),m2=html.match(re2);return m2?m2[1]:null}function decodeEntities(s){if(!s)return s;let named={"&amp;":"&","&quot;":'"',"&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"«","&raquo;":"»","&ndash;":"–","&mdash;":"—","&hellip;":"…","&laquo":"«","&raquo":"»","&rsquo;":"’","&lsquo;":"‘","&rdquo;":"”","&ldquo;":"“"};return s.replace(/&#x27;/gi,"'").replace(/&#0?39;/g,"'").replace(/&(?:amp|quot|apos|lt|gt|nbsp|laquo|raquo|ndash|mdash|hellip|rsquo|lsquo|rdquo|ldquo);/g,m=>named[m]||m).replace(/&#x([0-9a-f]+);/gi,(_,h)=>String.fromCodePoint(parseInt(h,16))).replace(/&#(\d+);/g,(_,d)=>String.fromCodePoint(parseInt(d,10)))}function tagEnd(s,lt){let q="",eq=!1;for(let j=lt+1;j<s.length;j++){let c=s[j];if(q){c===q&&(q="");continue}if(c==='"'||c==="'"){eq&&(q=c,eq=!1);continue}if(c===">")return j;if(c==="="){eq=!0;continue}/\s/.test(c)||(eq=!1)}return-1}function stripTags(html,sep=" "){let s=String(html??""),out="",i=0;for(;;){let lt=s.indexOf("<",i);if(lt<0){out+=s.slice(i);break}if(out+=s.slice(i,lt),!/[a-zA-Z!/?]/.test(s[lt+1]||"")){out+="<",i=lt+1;continue}let end2=tagEnd(s,lt);if(end2<0){out+=s.slice(lt);break}out+=sep,i=end2+1}return out}function stripLinksAndTags(html,sep){let s=String(html??""),out="",i=0,inA=!1;for(;;){let lt=s.indexOf("<",i);if(lt<0){inA||(out+=s.slice(i));break}if(inA||(out+=s.slice(i,lt)),!/[a-zA-Z!/?]/.test(s[lt+1]||"")){inA||(out+="<"),i=lt+1;continue}let end2=tagEnd(s,lt);if(end2<0){inA||(out+=s.slice(lt));break}let tag=s.slice(lt+1,end2);/^\/a\s*$/i.test(tag)?inA=!1:/^a\b/i.test(tag)&&!/\/\s*$/.test(tag)&&/<\/a\s*>/i.test(s.slice(end2))&&(inA=!0),out+=INLINE_TAG.test(tag)?/^\/?(?:br|wbr)\b/i.test(tag)?" ":"":sep,i=end2+1}return out}function htmlToText(html,sep=" "){return decodeEntities(stripTags(html,sep)).replace(/\s+/g," ").trim()}function unmarkup(s){let t=decodeEntities(String(s??"").trim());return/<[a-zA-Z!/?]/.test(t)?htmlToText(t):t}function translitVariants(word,cap2=12){let w=String(word||"").toLowerCase().trim();if(!w)return[];if(/^[a-z0-9-]+$/.test(w))return w.length>=4?[w]:[];let out=[""];for(let ch of w){let opts=TRANSLIT[ch]||(/[a-z0-9]/.test(ch)?[ch]:null);if(!opts)return[];let next=[];for(let pre of out)for(let o of opts)next.length<cap2&&next.push(pre+o);out=next}return[...new Set(out)].filter(v=>v.length>=4)}function urlKey(u){let x;try{x=new URL(String(u))}catch{return String(u||"").trim()}let host2=x.host.toLowerCase().replace(/^www\./,""),path=x.pathname.replace(/\/+$/,"")||"/",qs=[...x.searchParams.entries()].filter(([k])=>!TRACKING.test(k)).sort((a,b)=>a[0].localeCompare(b[0])).map(([k,v])=>k+"="+v).join("&");return host2+path+(qs?"?"+qs:"")}function looksLikeListingTitle(title){let t=String(title||"");return/новост[ией]+\s+(?:и\s+событи[йяе]+\s+)?по\s+теме|последние\s+новости\s+на\s+тему|все\s+(?:новости|материалы|публикации)\s+по\s+(?:теме|тегу)|материалы\s+по\s+тег|архив\s+(?:новостей|материалов|публикаций)|тақырып\s+бойынша\s+жаңалықтар/i.test(t)}function looksLikeArticleUrl(url){let p;try{p=new URL(url).pathname}catch{return!1}let seg=p.split("/").filter(Boolean).pop()||"";return seg?/\d{4,}/.test(seg)?!0:seg.split(/[-_]/).filter(Boolean).length>=4:!1}function blockEnd(h,from,tag){let re=new RegExp("<(\\/?)"+tag+"\\b","gi");re.lastIndex=from;let depth=1,m;for(;m=re.exec(h);)if(m[1]){if(--depth===0)return m.index}else if(++depth>400)return-1;return-1}function dropBlocks(html,names){let want=new Set((names||[]).map(x=>String(x).trim().toLowerCase()).filter(Boolean)),cut2={};if(!want.size||!html)return{html:String(html||""),cut:cut2};let h=String(html),OPEN=/<([a-z][a-z0-9]*)\b([^>]*)>/gi,out="",last=0,m;for(;m=OPEN.exec(h);){if(VOID_TAG.test(m[1])||/\/\s*$/.test(m[2]))continue;let cls=((m[2].match(/\bclass\s*=\s*["']([^"']*)["']/i)||[])[1]||"").toLowerCase().split(/\s+/).filter(Boolean),id=((m[2].match(/\bid\s*=\s*["']([^"']*)["']/i)||[])[1]||"").toLowerCase(),hit=cls.find(c=>want.has(c))||(id&&want.has(id)?id:null);if(!hit)continue;let end2=blockEnd(h,OPEN.lastIndex,m[1]);if(end2<0)continue;let close=h.indexOf(">",end2);close<0||(out+=h.slice(last,m.index)+" ",last=close+1,OPEN.lastIndex=last,cut2[hit]=(cut2[hit]||0)+1)}return{html:out+h.slice(last),cut:cut2}}function isBodyBlock(cls){return String(cls).split(/\s+/).some(c=>c&&BODY_TOKEN.test(c)&&!LAYOUT_TOKEN.test(c)&&!FURNITURE.test(c))}function extractBodyText(html,info=null){let via=(t,s)=>(info&&(info.via=t?s:"none"),t);if(!html)return via("","none");let h=String(html).replace(/<!--[\s\S]*?-->/g," ").replace(/<(script|style|noscript|svg|iframe|form|nav|aside|header|footer)\b[^>]*>[\s\S]*?<\/\1>/gi," ");{let OPEN=/<(div|section|ul|ol)\b([^>]*)>/gi,out="",last=0,m;for(;m=OPEN.exec(h);){let cls=(m[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1]||"";if(!FURNITURE.test(cls)||isBodyBlock(cls))continue;let end2=blockEnd(h,OPEN.lastIndex,m[1]);end2<0||(out+=h.slice(last,m.index)+" ",last=end2,OPEN.lastIndex=end2)}h=out+h.slice(last)}h=h.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(m,inner)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(inner)?" ":m);{let OPEN=/<(div|p|li|h[1-6])\b[^>]*>/gi,out="",last=0,m;for(;m=OPEN.exec(h);){if(m.index<last)continue;let end2=blockEnd(h,OPEN.lastIndex,m[1]);if(end2<0)continue;let inner=h.slice(OPEN.lastIndex,end2).trim();if((inner.match(/<a\b/gi)||[]).length!==1)continue;let iA=inner.search(/<a\b/i),iEnd=inner.lastIndexOf("</a>");if(iEnd<iA)continue;let before=stripTags(inner.slice(0,iA)).trim();stripTags(inner.slice(iEnd+4)).trim()||before&&!/:$/.test(before)||(out+=h.slice(last,m.index)+" ",last=h.indexOf(">",end2)+1||end2,OPEN.lastIndex=last)}h=out+h.slice(last)}{let OPEN=/<(div|section|article|span|li|button)\b([^>]*\brole\s*=\s*["'](?:button|link|tab|menuitem)["'][^>]*)>/gi,out="",last=0,m;for(;m=OPEN.exec(h);){let end2=blockEnd(h,OPEN.lastIndex,m[1]);end2<0||(out+=h.slice(last,m.index)+" ",last=end2,OPEN.lastIndex=end2)}h=out+h.slice(last)}let text=frag=>htmlToText(frag),marked=h.match(/<([a-z]+)\b[^>]*itemprop\s*=\s*["']articleBody["'][^>]*>/i);if(marked){let from=marked.index+marked[0].length,end2=blockEnd(h,from,marked[1]);if(end2>0){let t=text(h.slice(from,end2));if(t.length>200)return via(t.slice(0,4e4),"itemprop")}}let LONG_NODE=150,longText=frag=>stripLinksAndTags(frag,"\0").split("\0").reduce((sum2,x)=>{let s=x.replace(/\s+/g," ").trim();return sum2+(s.length>=LONG_NODE?s.length:0)},0),best="",bestLong=0,bestLen=0,offer=(t,ln)=>{(ln>bestLong||ln===bestLong&&(bestLong>0?t.length<bestLen:t.length>bestLen))&&(best=t,bestLong=ln,bestLen=t.length)},dropCards=frag=>{let OPEN=/<article\b[^>]*>/gi,out="",last=0,m;for(;m=OPEN.exec(frag);){let end2=blockEnd(frag,OPEN.lastIndex,"article");end2<0||(out+=frag.slice(last,m.index)+" ",last=frag.indexOf(">",end2)+1||end2,OPEN.lastIndex=last)}return out+frag.slice(last)};{let OPEN=/<article\b[^>]*>/gi,m;for(;m=OPEN.exec(h);){let end2=blockEnd(h,OPEN.lastIndex,"article");if(end2<0)continue;let frag=dropCards(h.slice(OPEN.lastIndex,end2));offer(text(frag),longText(frag))}}if(best.length>200)return via(best.slice(0,4e4),"article");let BODY_CLS=/(article|post|entry|news|material|publication|content|text|body)[-_]?(body|text|content|detail|full|inner)?/i;{let OPEN=/<(div|section)\b([^>]*)>/gi,m;for(;m=OPEN.exec(h);){let cls=(m[2].match(/(?:class|id)\s*=\s*["']([^"']*)["']/i)||[])[1];if(!cls||!BODY_CLS.test(cls)||FURNITURE.test(cls))continue;let end2=blockEnd(h,OPEN.lastIndex,m[1]);if(end2<0)continue;let frag=dropCards(h.slice(OPEN.lastIndex,end2));offer(text(frag),longText(frag))}}if(best.length>200)return via(best.slice(0,4e4),"class");let ps=[...h.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(m=>text(m[1])).filter(x=>x.length>40);return via(ps.join(" ").slice(0,4e4),"p")}function dateFromUrl(u){let s=String(u||""),m;if(m=s.match(/(?:^|[\/\-_.])(20\d{2})[\/\-._](\d{1,2})[\/\-._](\d{1,2})(?:[\/\-_.]|$)/),m){let dt=new Date(+m[1],+m[2]-1,+m[3]);if(!isNaN(dt)&&+m[2]<=12&&+m[3]<=31)return dt}if(m=s.match(/(?:^|[\/\-_.])(\d{1,2})[\/\-.](\d{1,2})[\/\-.](20\d{2})(?:[\/\-_.]|$|\.html)/),m){let dt=new Date(+m[3],+m[2]-1,+m[1]);if(!isNaN(dt)&&+m[2]<=12&&+m[1]<=31)return dt}if(m=s.match(/(?:^|[\/\-_])(20\d{2})(\d{2})(\d{2})(?:[\/\-_]|$)/),m){let dt=new Date(+m[1],+m[2]-1,+m[3]);if(!isNaN(dt)&&+m[2]<=12&&+m[3]<=31)return dt}return null}function dropBanner(html){let h=String(html),OPEN=/<([a-z][a-z0-9]*)\b[^>]*\brole\s*=\s*["']banner["'][^>]*>/gi,out="",last=0,m;for(;m=OPEN.exec(h);){let end2=blockEnd(h,OPEN.lastIndex,m[1]);end2<0||(out+=h.slice(last,m.index)+" ",last=h.indexOf(">",end2)+1||end2,OPEN.lastIndex=last)}return out+h.slice(last)}function pickTimeDate(html){html=dropBanner(dropCardLinks(html));let SIDE=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i,DATEISH=/(date|time|pub|posted|created|published)/i,artOpen=[...html.matchAll(/<article\b/gi)].map(x=>x.index),artClose=[...html.matchAll(/<\/article\s*>/gi)].map(x=>x.index),inArticle=i=>artOpen.filter(x=>x<i).length>artClose.filter(x=>x<i).length,best=null,byClass=null,byCtx=null,first=null;for(let m of html.matchAll(/<time\b([^>]*)>/gi)){let attrs=m[1]||"",val=(attrs.match(/\sdatetime=["']([^"']+)["']/i)||[])[1]||"";if(!val){let from=m.index+m[0].length,rest=html.slice(from,from+200),close=rest.search(/<\/time\s*>/i);if(close<0)continue;let inner=decodeEntities(rest.slice(0,close).replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!inner||inner.length>80)continue;val=inner}first||(first=val);let cls=(attrs.match(/class=["']([^"']*)["']/i)||[])[1]||"";if(SIDE.test(cls))continue;if(!best&&inArticle(m.index)){best=val;break}if(!byClass&&DATEISH.test(cls)){byClass=val;continue}let lastCls=[...html.slice(Math.max(0,m.index-400),m.index).matchAll(/class=["']([^"']*)["']/gi)].pop();lastCls&&SIDE.test(lastCls[1])||byCtx||(byCtx=val)}let t=best||byClass||byCtx||first;return t?parseDate(t):null}function pickTextBlockDate(html){let SIDE=/(last|latest|popular|recent|related|recommend|also|read-?more|similar|widget|sidebar|aside|banner|footer|nav|menu|comment)/i;html=dropBanner(dropCardLinks(html));for(let m of html.matchAll(/<(?:div|span|p|li|h[1-6])[^>]*class=["']([^"']*(?:date|time|pub|posted|created)[^"']*)["'][^>]*>([\s\S]{0,160}?)<\/(?:div|span|p|li|h[1-6])>/gi)){if(SIDE.test(m[1]))continue;let txt=decodeEntities(m[2].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!txt||txt.length>80)continue;let d=parseDate(txt);if(d)return d}let noLinks=html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi," ");for(let m of noLinks.matchAll(/<(div|span|p|li|small|time)\b([^>]*)>\s*<(?:i|span|svg|em)\b[^>]*class=["'][^"']*calendar[^"']*["'][^>]*>(?:\s*<\/(?:i|span|em)>|[\s\S]{0,400}?<\/svg>)([\s\S]{0,120}?)<\/\1>/gi)){let cls=(m[2].match(/class=["']([^"']*)["']/i)||[])[1]||"";if(SIDE.test(cls))continue;let txt=decodeEntities(m[3].replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim();if(!txt||txt.length>80)continue;let d=parseDate(txt);if(d)return d}return null}function foreignTitles(html,url){let out=new Set,norm3=s=>decodeEntities(String(s||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),selfPath="";try{selfPath=new URL(url,"https://x").pathname.replace(/\/+$/,"")}catch{}let sameUrl=u=>{if(!u)return!1;try{return new URL(String(u).replace(/\\\//g,"/"),"https://x").pathname.replace(/\/+$/,"")===selfPath}catch{return!1}},eat=x=>{if(!(!x||typeof x!="object")){if(Array.isArray(x)){for(let y of x)eat(y);return}if(x.headline&&!sameUrl(x.url)){let t=norm3(x.headline);t.length>=20&&out.add(t)}for(let k of["itemListElement","item","@graph","mainEntity"])x[k]&&eat(x[k])}};for(let o of jsonLdObjects(html))(typeIncludes(o["@type"],"list")||o.itemListElement)&&eat(o);for(let m of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)){if(sameUrl(m[1]))continue;let t=norm3(m[2]);t.length>=20&&t.length<=200&&out.add(t)}return[...out]}function trimForeignTail(body,titles){if(!titles||!titles.length)return body;let s=String(body).replace(/\s+$/,""),byLen=titles.slice().sort((a,b)=>b.length-a.length);for(let step2=0;step2<12;step2++){let tail=s.replace(/\s+$/,""),hit=byLen.find(t=>tail.endsWith(t));if(!hit)break;s=tail.slice(0,tail.length-hit.length).replace(/[\s·|—–-]+$/,"")}return s}function declaresArticle(html){for(let o of jsonLdObjects(html))if(typeIncludes(o["@type"],"article"))return!0;return(metaContent(html,"og:type")||"").toLowerCase().includes("article")?!0:!!metaContent(html,"article:published_time")}function extractArticleMeta(html,url,hint=""){let date=null,title=null,isArticle=!1,desc=null,body=null,dateVia="",asText=v=>v==null?"":typeof v=="string"?v:Array.isArray(v)?v.map(asText).filter(Boolean).join(" "):typeof v=="object"?asText(v["@value"]||v.text||v.name||""):String(v),jsonldDate=null;for(let o of jsonLdObjects(html))typeIncludes(o["@type"],"article")&&(isArticle=!0,o.datePublished&&!jsonldDate&&(jsonldDate=parseDate(o.datePublished)),o.headline&&!title&&(title=asText(o.headline)),o.description&&!desc&&(desc=asText(o.description)),o.articleBody&&!body&&(body=asText(o.articleBody)));let probe={jsonld:()=>jsonldDate,"meta-og":()=>{let v=metaContent(html,"article:published_time");return v?parseDate(v):null},"meta-itemprop":()=>{let v=metaContent(html,"datePublished");return v?parseDate(v):null},time:()=>pickTimeDate(html),"text-block":()=>pickTextBlockDate(html)};for(let p of DATE_PICKS){let d=probe[p]();if(d){date=d,dateVia=p;break}}if(title||(title=metaContent(html,"og:title")),!title){let h1=html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);h1&&(title=h1[1].replace(/<[^>]+>/g,""))}desc||(desc=metaContent(html,"description")||metaContent(html,"og:description")),isArticle||((metaContent(html,"og:type")||"").toLowerCase().includes("article")||metaContent(html,"article:published_time"))&&(isArticle=!0);let foreign=foreignTitles(html,url),pageBody=trimForeignTail(extractBodyText(html),foreign);if(body&&(body=trimForeignTail(body,foreign)),!body)body=pageBody;else if(pageBody){let flat2=s=>String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim(),a=flat2(body),b=flat2(pageBody);a&&b.includes(a)?body=pageBody:a.includes(b)||(body=body+" "+pageBody)}return!date&&url&&(date=dateFromUrl(url),date&&(dateVia="url")),date?{url,dateVia,title:unmarkup(title)||url,date:date.toISOString(),isArticle,description:unmarkup(desc),body:body?unmarkup(asText(body)):""}:null}function isAssetUrl(u){let p;try{p=new URL(u).pathname.toLowerCase()}catch{return!1}return ASSET_EXT.test(p)}function extractLinks(html,origin){let bare=h=>h.toLowerCase().replace(/^www\./,""),host2=bare(new URL(origin).host),out=new Set,add=href=>{let abs;try{abs=new URL(href.replace(/\\\//g,"/"),origin).href}catch{return}let u;try{u=new URL(abs)}catch{return}if(bare(u.host)!==host2)return;let p=u.pathname.toLowerCase();p==="/"||p===""||ASSET_EXT.test(p)||/\/(search|search_results|results|tag|tags|category|categories|author|rubric|page|feed|rss|login|register)\b/.test(p)||p.split("/").filter(Boolean).length<1||out.add(abs.split("#")[0])},m,reHref=/href=["']([^"'#]+)["']/gi;for(;m=reHref.exec(html);)add(m[1]);if(/^\s*[\[{]/.test(html)||out.size===0){let reJson=/"[\w]*(?:url|link|uri)"\s*:\s*"((?:https?:)?\\?\/\\?\/?[^"]+)"/gi;for(;m=reJson.exec(html);)add(m[1]);let reAbs=new RegExp("https?:\\\\?/\\\\?/(?:www\\.)?"+host2.replace(/^www\./,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+`\\\\?/[^"'\\s<>]+`,"gi");for(;m=reAbs.exec(html);)add(m[0])}return[...out]}function extractFeedLinks(html){let out=[],re=/<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi,m;for(;m=re.exec(html);){let h=(m[0].match(/href=["']([^"']+)["']/i)||[])[1];h&&out.push(h)}return out}function parseFeed(xml){let items=[],rss=xml.match(/<item[\s\S]*?<\/item>/gi)||[];for(let b of rss){let title=xmlText((b.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),link=xmlText((b.match(/<link(?:\s[^>]*)?>([\s\S]*?)<\/link>/i)||[])[1])||"",date=xmlText((b.match(/<pubDate(?:\s[^>]*)?>([\s\S]*?)<\/pubDate>/i)||[])[1]||(b.match(/<dc:date(?:\s[^>]*)?>([\s\S]*?)<\/dc:date>/i)||[])[1]),desc=stripCdata((b.match(/<description(?:\s[^>]*)?>([\s\S]*?)<\/description>/i)||[])[1]),fullRaw=(b.match(/<(yandex:full-text|content:encoded|turbo:content)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/i)||[])[2],full=fullRaw?unmarkup(stripCdata(fullRaw)):"";link&&items.push({title:title||null,link,date:date||null,description:desc?unmarkup(desc):"",...full?{full}:{}})}if(items.length)return items;let atom=xml.match(/<entry[\s\S]*?<\/entry>/gi)||[];for(let b of atom){let title=xmlText((b.match(/<title(?:\s[^>]*)?>([\s\S]*?)<\/title>/i)||[])[1]),link=((b.match(/<link[^>]+href=["']([^"']+)["']/i)||[])[1]||"").trim(),date=xmlText((b.match(/<(?:published|updated)(?:\s[^>]*)?>([\s\S]*?)<\/(?:published|updated)>/i)||[])[1]);link&&items.push({title:title||null,link,date:date||null})}return items}function parseUrlset(xml){let out=[],blocks=xml.match(/<url>[\s\S]*?<\/url>/g)||[];for(let b of blocks){let loc=xmlText((b.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!loc)continue;let lm=xmlText((b.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]||(b.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1])||"";out.push({loc,lastmod:lm})}return out}function parseSitemapIndex(xml){let out=[],blocks=xml.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[];for(let b of blocks){let loc=xmlText((b.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]);if(!loc)continue;let lm=xmlText((b.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1])||"";out.push({loc,lastmod:lm})}return out}function parseNewsSitemap(xml){let items=[],blocks=xml.match(/<url>[\s\S]*?<\/url>/g)||[];for(let b of blocks){let loc=xmlText((b.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/)||[])[1]),title=xmlText((b.match(/<news:title(?:\s[^>]*)?>([\s\S]*?)<\/news:title>/)||[])[1]),date=xmlText((b.match(/<news:publication_date(?:\s[^>]*)?>([\s\S]*?)<\/news:publication_date>/)||[])[1]||(b.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/)||[])[1]);if(!loc)continue;let d=parseDate(date);items.push({url:loc,title:title||null,date:d?d.toISOString():null})}return items}function _b64dec(s){if(!s)return"";let t=String(s).replace(/\s+/g,"").replace(/%3D/gi,"=").replace(/%2B/gi,"+").replace(/%2F/gi,"/"),out=_b64ToBuf(t);if(!out){let pad3=(4-t.length%4)%4;try{out=_b64ToBuf(t+"=".repeat(pad3))}catch{}}return out}function bingReal(href,dom){try{let raw=String(href||"").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">");if(!raw)return null;let JUNK=/(^|\.)(bing|microsoft|msn|bingapis|windows|office\.net|live\.com|outlook\.com|go\.microsoft)\./i,tryDec=s=>{try{return decodeURIComponent(s)}catch{return String(s)}},qvs=[];(anyUrl=>{try{let candUrl=/^https?:/i.test(anyUrl)||anyUrl.startsWith("http")?anyUrl:anyUrl.startsWith("/")?"https://www.bing.com"+anyUrl:"https://"+anyUrl,u=new URL(candUrl);for(let[k,v]of u.searchParams.entries())v&&/^(u|uddg|url|to|dest|destination|target|redirect|page|link|ref)[\d]*$/i.test(k)&&qvs.push(String(v));let mU=(u.search+"&").match(/[?&]u=([A-Za-z0-9_\-+/=%]{20,})/i);mU&&qvs.push(decodeURIComponent(mU[1]))}catch{}})(raw);let allCandidates=[];for(let v of qvs)allCandidates.push(v);allCandidates.push(raw,tryDec(raw),tryDec(tryDec(raw))),/^[A-Za-z0-9_\-+/=]{40,}$/.test(raw)&&allCandidates.push(_b64dec(raw));for(let iter=0;iter<allCandidates.length;iter++){let chunk=allCandidates[iter];if(!chunk)continue;let b64Matches=String(chunk).match(/[A-Za-z0-9_\-+/]{40,}={0,3}/g)||[];for(let b64tok of b64Matches){let decodedBase64=_b64dec(b64tok);decodedBase64&&/^https?:/i.test(decodedBase64)&&allCandidates.push(decodedBase64)}let found=String(chunk).match(/https?:\/\/[^\s"'&<>()\\]+/gi)||[];for(let u of found)try{let url=new URL(u.split("#")[0].replace(/\/+$/,"")),dh=url.host.replace(/^www\./,"");if(JUNK.test(dh))continue;if(dh===dom||dh.endsWith("."+dom))return url.href.split("#")[0]}catch{}}return null}catch{return null}}var PREF,stripCdata,xmlText,INLINE_TAG,TRANSLIT,TRACKING,FURNITURE,VOID_TAG,BODY_TOKEN,LAYOUT_TOKEN,dropCardLinks,DATE_PICKS,DATE_PICK_RU,ASSET_EXT,_b64ToBuf,init_parse=__esm({"extension/lib/parse.js"(){init_dates();PREF="(?:og:)?";stripCdata=s=>s==null?s:String(s).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"$1"),xmlText=s=>{let t=stripCdata(s);return t==null?t:decodeEntities(t).trim()};INLINE_TAG=/^\/?(?:br|wbr|strong|b|em|i|u|s|span|sup|sub|mark|small|abbr|q|cite|font)\b/i;TRANSLIT={а:["a"],б:["b"],в:["v"],г:["g"],д:["d"],е:["e","ye"],ё:["e","yo"],ж:["zh"],з:["z"],и:["i"],й:["i","y"],к:["k"],л:["l"],м:["m"],н:["n"],о:["o"],п:["p"],р:["r"],с:["s"],т:["t"],у:["u"],ф:["f"],х:["h","kh"],ц:["c","ts"],ч:["ch"],ш:["sh"],щ:["sch"],ъ:[""],ы:["y"],ь:[""],э:["e"],ю:["yu","iu"],я:["ya","ia"],ә:["a","ae"],ғ:["g","gh"],қ:["k","q",""],ң:["n","ng"],ө:["o","oe"],ұ:["u"],ү:["u","ue"],һ:["h"],і:["i"]};TRACKING=/^(utm_|yclid|gclid|fbclid|from|_openstat|ysclid)/i;FURNITURE=/(sidebar|side-bar|aside|widget|banner|advert|reklam|menu|nav|breadcrumb|footer|header|subscribe|podpis|social|share|comment|komment|related|similar|also|recommend|read-?more|popular|discuss|latest|last-?news|news-?list|tags?|rubric|category)/i;VOID_TAG=/^(br|img|meta|link|input|hr|source|wbr|area|base|col|embed|param|track)$/i;BODY_TOKEN=/(^|[-_])(content|text|entry|article|post|body|story)([-_]|$)/i,LAYOUT_TOKEN=/^(justify|align|place)-(content|items|self)|^text-(left|right|center|justify|start|end|muted|primary|secondary|white|black|dark|light|nowrap|truncate|wrap|break|uppercase|lowercase|capitalize|xs|sm|md|lg|xl|\d)/i;dropCardLinks=html=>String(html).replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi,(m,inner)=>/<(div|section|article|figure|picture|img|h[1-6])\b/i.test(inner)?" ":m);DATE_PICKS=["jsonld","meta-og","meta-itemprop","time","text-block"],DATE_PICK_RU={jsonld:"разметка JSON-LD","meta-og":"мета article:published_time","meta-itemprop":"микроразметка itemprop",time:"тег <time>","text-block":"текстом в блоке с датой",url:"дата в адресе"};ASSET_EXT=/\.(xml|json|jsonld|js|mjs|map|css|txt|jpg|jpeg|png|webp|gif|svg|ico|avif|bmp|tiff?|woff2?|ttf|otf|eot|pdf|mp4|webm|mov|avi|mp3|ogg|wav|zip|rar|7z|gz|tar|docx?|xlsx?|pptx?|rtf|epub|apk|exe|dmg)$/;_b64ToBuf=typeof Buffer<"u"&&Buffer.from?s=>{try{return Buffer.from(s,"base64").toString("utf8")}catch{return""}}:s=>{try{return atob(s.replace(/_/g,"/").replace(/-/g,"+"))}catch{return""}}}});function lookupKnown(origin){let host2;try{host2=new URL(origin).host.replace(/^www\./,"")}catch{return null}if(KNOWN[host2])return KNOWN[host2];for(let key of Object.keys(KNOWN))if(host2===key||host2.endsWith("."+key))return KNOWN[key];return null}var KNOWN,init_known_sites=__esm({"extension/lib/known-sites.js"(){KNOWN={"zakon.kz":{search:"https://www.zakon.kz/search/?handler=LoadMoreNews&qsearch={q}&author=0&category=0&tag=0&perioddate=&p={page}",selectors:{container:"div.news-item",link:"a.newscard_link",title:"div.newscard__title",date:"span.newscard__date"}},"tengrinews.kz":{search:"https://tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"}},"kaz.tengrinews.kz":{search:"https://kaz.tengrinews.kz/search/?text={q}&page={page}",selectors:{container:"div.content_main_item",link:"span.content_main_item_title a",title:"span.content_main_item_title a",date:"div.content_main_item_meta span"},external:!1,note:"казахская версия Tengrinews; поиск сайта /search/?text= (форма на главной)"},"rus.baq.kz":{search:null,browserSearch:!1,external:!1,feed:"https://rus.baq.kz/news/pagen{page}/",feedFirst:"https://rus.baq.kz/news/",feedPages:60,feedCard:'class="finded__content__item"',feedAll:!0,note:"русская версия BAQ.kz (Laravel, страницы собирает сервер, служебного JSON-входа нет). Лента /news/pagenN/ — все статьи сайта по порядку публикации, 20 на страницу, ~5 страниц в сутки, дата на каждой карточке (data-time) — по ней лента встаёт на начале периода: это и есть список статей периода. Поиск сайта бесполезен: на «Токаев» 9 карточек 2019–2025 годов, на «Казахстан» ноль (22 ноября 2026) — выключен"},"kaz.zakon.kz":{search:null,external:!1,note:"казахская версия Zakon.kz; формы поиска на главной нет, /search/?q= отдаёт одну и ту же страницу на любое слово"},"ulysmedia.kz":{search:"https://ulysmedia.kz/search/?search_text={q}&page={page}",selectors:{container:".col-xl-3.xl-mb-20",link:"a.category__title",title:"a.category__title",date:"span.date"},browserSearch:!0},"exclusive.kz":{search:"https://exclusive.kz/?s={q}",cms:"wordpress",browserSearch:!0,external:!1},"inform.kz":{search:null,render:"https://www.inform.kz/search_results/?q={q}",api:{url:"https://search.inform.kz/search/ru?q=&per_page=20&page={page}&start_date={from}&end_date={to}",list:"results",slug:"alias",link:"https://www.inform.kz/ru/{slug}",title:"title",date:"published_date",dateZone:"+05:00",text:["description","content"],perPage:20},note:"HTTP-поиск — JS-оболочка (страница равна пустому запросу ±2 длины слова, ссылок на статьи ноль); браузером та же страница даёт 17 ссылок на статьи, но ищет сайт ТОЛЬКО по заголовку — ключ в тексте его выдача не находит"},"informburo.kz":{search:null,render:"https://informburo.kz/search?q={q}",note:"HTTP-поиск — виджет Google (cse.google.com, cx=dcd9aa27056d92a81): по HTTP приходит одна и та же страница ±14 байт, ссылок на статьи ноль. Браузером та же страница даёт 11 своих результатов -> берём рендером. Материал сайту приносят карта новостей и глубина"},"liter.kz":{search:"https://liter.kz/search/?search_text={q}"},"newtimes.kz":{search:"https://newtimes.kz/search/?search_text={q}"},"vlast.kz":{search:"https://vlast.kz/search/?query={q}",browserSearch:!0,external:!1,note:"внешний забанен, но браузер-поиск работает"},"kapital.kz":{search:"https://kapital.kz/amp/search?s={q}",api:{url:"https://api.kapital.kz/articles?limit=50&offset={off50}",list:"data.rows",slug:"slug",link:"https://kapital.kz/{category.slug}/{id}/{slug}.html",title:"title",date:"published_at",text:["subtitle"],perPage:50,where:{"locale.code":"ru"},textFull:!1}},"time.kz":{search:"https://time.kz/search?q={q}",browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку -> подстраховываемся браузером; внешний мёртв"},"forbes.kz":{search:"https://forbes.kz/search?q={q}&type=articles&s=data&page={page}",skipPaths:["/ranking/"],note:"в robots.txt объявлены карты рейтингов (sitemap-ranking, sitemap-ranking-object): страницы рейтингов без даты, в прозвоне 18–19 ноября 2026 их было 57 из 300 мест глубины — не качаем"},"inbusiness.kz":{search:"https://inbusiness.kz/ru/search?q={q}",external:!1},"kazpravda.kz":{search:"https://kazpravda.kz/search?q={q}"},"nazarbayev.kz":{search:"https://nazarbayev.kz/ru/search?body_value={q}&title={q}&time=&created[min]=&created[max]=&field_news_type_value=All",cms:"drupal",note:"Drupal exposed filter на /ru/search (не /kk/ — тот даёт 500); есть created[min/max] для серверного фильтра дат"},"baq.kz":{search:null,browserSearch:!1,feed:"https://baq.kz/news/pagen{page}/",feedFirst:"https://baq.kz/news/",feedPages:60,feedCard:'class="finded__content__item"',feedAll:!0,note:"Laravel, страницы собирает сервер, служебного JSON-входа нет. Лента /news/pagenN/ — все статьи сайта по порядку публикации, 20 на страницу, ~5 страниц в сутки, дата на каждой карточке (data-time) — по ней лента встаёт на начале периода: это и есть список статей периода. Поиск сайта бесполезен: на «Тоқаев» одна статья 2019 года (22 ноября 2026) — выключен вместе с браузер-поиском"},"kursiv.media":{search:"https://kz.kursiv.media/{wpage}?s={q}",cms:"wordpress",note:"WordPress-поиск /?s= (не /ru/!), пагинация /page/N/?s="},"lsm.kz":{search:null,render:"https://lsm.kz/search?q={q}",needs_js:!0,browserSearch:!0,external:!1,note:"HTTP-поиск — оболочка (±2 байта на любое слово, ссылок ноль): выдачу подгружает POST /processing с телом chapter=search&p={page}&q={q}&tag= — он отвечает и обычному запросу (18 ссылок против 6 на мусоре), но канал поиска умеет только GET, поэтому пока рендер. Дата статьи лежит в НЕСТАНДАРТНОЙ мете og:article:published_time и текстом («19 сентября 2026 года») — из-за приставки og: разбор не видел её вовсе, и сайт отдавал «без даты на странице — 48» при живых статьях (улики 24 сентября 2026, починено). Браузер-поиск строку поиска не находит"},"sputnik.kz":{search:null,external:!1,note:"поиск = React + невидимая reCAPTCHA (getmore за g-recaptcha-response) -> из fetch не взять; RSS свежак + sitemap-глубина. Внешний тоже глух (Bing не индексирует статьи)."},"total.kz":{search:null,browserSearch:!0,external:!1,note:"HTTP-поиск = Google CSE в iframe -> невзят; браузер-поиск через форму сайта работает"},"interfax.kz":{search:null,external:!0,note:"на сайте поиска нет -> только RSS/sitemap (свежак) + внешний Google site: по периоду"},"press.kz":{search:null,render:"https://press.kz/search?title={q}",external:!1,note:"поиск сайта — /search?title= (адрес его собственной формы, дал пользователь). ПО HTTP он результатов не отдаёт: страница приходит одна и та же (30 ссылок) при любом слове, а от пустого запроса отличается ровно на удвоенную длину слова — то есть слово только эхом печатается в форме и в заголовке, а выдачу рисует JS. Поэтому HTTP-поиск выключен, а страница берётся РЕНДЕРОМ. ?s= — это вообще главная (37 ссылок, побайтово те же). Глубину даёт карта сайта (48 адресов); статьи размечены нормально — JSON-LD с datePublished читается"},"kaztag.kz":{search:null,render:"https://kaztag.kz/ru/search/?searchid=2383993&web=0&text={q}",feed:"https://kaztag.kz/ru/news/?PAGEN_1={page}",browserSearch:!0,external:!1,note:"статьи за Cloudflare (обычным запросом не открываются -> дочитываем браузером). Поиск по сайту — виджет Яндекса (searchid=2383993), выдачу рисует JS -> берём рендером. Лента PAGEN_1 — свежак"},"orda.kz":{search:null,render:"https://orda.kz/search-results.html?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (render всё же поднимает результаты); внешний бесполезен"},"nur.kz":{search:null,feed:"https://www.nur.kz/latest/",external:!1,note:"поиска нет, sitemap заморожены; лента /latest/ (свежак). Внешний не индексирует -> отключён"},"lenta.ru":{search:"https://lenta.ru/search/v2/process?query={q}&from={off10}&size=10&sort=2&title_only=0&domain=1",external:!1,note:'служебный вход поиска отдаёт JSON (не HTML): {"matches":[{"url":…,"title":…}]}. Ссылки из него достаёт разбор JSON в extractLinks — проверено прогоном 26 сентября 2026: 118 материалов за двое суток, 112 из них не нашёл никто другой. Пагинация from= (шаг 10); дата в адресе /YYYY/MM/DD/ -> отсев без скачивания'},"rbc.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 212 117 байт по слову против 213 027 по мусору, уникальная ссылка ровно одна. Главная за антиботом (редирект на служебный путь с UUID). Материал дают карта новостей /google-news-sitemap.xml (429 записей, 315 свежих, с заголовком и датой) и глубина. Внешний поиск снят 26 сентября 2026: он отправляет наружу само ключевое слово и не дал ни строки ни в одном прогоне"},"ria.ru":{search:"https://ria.ru/services/search/getmore/?query={q}&offset={off20}",external:!1,budgetMs:12e4,note:"поиск честно ищет: 41 454 байта по слову против 179 по мусору, 20 своих ссылок против нуля. Пагинация getmore?offset= (шаг 20); дата в адресе /YYYYMMDD/ -> отсев без скачивания. В прогоне 26 сентября 2026 — 127 материалов, поиск принёс 120 (41 не нашёл никто другой). Внешний снят: он выдаёт наружу ключевое слово"},"mk.ru":{search:"https://www.mk.ru/search/?q={q}",external:!1,note:"шаблон вписан руками, потому что АВТОДЕТЕКТ ПРОМАХИВАЛСЯ: он брал оболочку («ссылок 6, совпало 0»), а /search/?q= ищет по-настоящему — на мусорное слово сайт отвечает HTTP 404, на живое 200 и 10 своих ссылок. Сайт режет частоту: в прогоне 26 сентября 2026 отдал 88 раз «перегружен» (HTTP 429), сбавленный ход отработал сам"},"kommersant.ru":{external:!1,note:"поиск сайта ищет по-настоящему: 226 795 байт по слову против 116 131 по мусору, 32 свои ссылки. Автодетект находит его сам (форма /search/results?search_query=), 34 материала за двое суток. ОГОВОРКА: выдача ссылается на статьи с хвостом ?query=…&sids=…, и тот же материал приезжает ВТОРОЙ строкой — `urlKey` служебные параметры не режет (улика 26 сентября 2026, 3 дубля из 452 строк)"},"aif.ru":{external:!1,rss:"https://aif.ru/rss/all.php",note:"лента /rss/all.php несёт ПОЛНЫЙ ТЕКСТ статей (232 записи, полтора дня на 21 ноября 2026), на главной объявлена другая, без текста — поэтому вписана. поиск сайта ищет: 139 586 байт по слову против 121 221 по мусору, 15 своих ссылок. Автодетект находит его сам (/search?text=), 26 материалов за двое суток. Плюс RSS /rss/news на 300 записей с датами"},"bfm.ru":{external:!1,note:"поиск сайта ищет: 61 613 байт по слову против 55 002 по мусору, 10 своих ссылок. Автодетект находит его сам (параметр SearchPageForm[query]). Карта новостей /sitemap_google_news.xml — 178 записей, 124 свежих, с заголовком и датой"},"vedomosti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 171 492 байта на ЛЮБОЕ слово, уникальных ссылок ноль. Материал даёт карта новостей /sitemap_google_news.xml (334 записи, 176 свежих, с заголовком и датой) и глубина — 25 материалов за двое суток"},"interfax.ru":{search:"https://www.interfax.ru/search/news/?phrase={q}&p={page}",external:!1,note:"поиск ЕСТЬ: /search/news/?phrase= (параметр нашёл агент плагина, 21 ноября 2026). По «Токаев» 48 своих ссылок, по бессмыслице 8 (меню); выдача строго по дате, 40 на страницу, листается &p=. Раздел /news/ — без фото и цитат. Прежний /search/?sTextShow= отдавал ленту. Страницы /photo/ дат не несут — это фоторепортажи"},"kp.ru":{search:null,external:!1,api:{url:"https://s02.api.yc.kpcdn.net/content/api/1/pages/get.json?pages.spot=0&pages.target.class=100&pages.target.id=0&pages.age.year={year}&pages.age.month={month}&pages.direction=page&pages.number={page}",monthPages:{last:"https://s02.api.yc.kpcdn.net/content/api/1/pages/get.json?pages.spot=0&pages.target.class=100&pages.target.id=0&pages.age.year={year}&pages.age.month={month}&pages.direction=last",total:"meta:pages"},list:"childs",slug:"@id",link:"https://www.kp.ru/online/news/{slug}/",title:"ru.title",text:["ru.description"],date:"meta:published",dateZone:"+03:00",textFull:!1,perPage:20,maxPages:250,budgetMs:12e4},note:"служебный вход ленты (s02.api.yc.kpcdn.net, найден 21 ноября 2026 в коде страницы /online/) отдаёт ВСЕ новости с заголовком, анонсом и точным временем — то есть заголовки всего периода проверяются без браузера; текста статьи вход не отдаёт, его читает глубина. Страницы нумеруются внутри месяца с начала, свежее — на последней (direction=last); время московское. Поиска по HTTP нет: /search/ — 404, поиск в шапке — виджет Яндекса по релевантности. Карты новостей /sitemap/news_01-02.xml отстают на сутки"},"vesti.ru":{search:null,external:!1,note:"HTTP-поиск — оболочка: 645 679 байт на любое слово, уникальных ссылок ноль. Живой вход — карта новостей /sitemap-news.xml (919 записей, все свежие, с заголовком и датой)"},"ntv.ru":{search:null,external:!1,feed:"https://www.ntv.ru/",note:"и /finder/?keytext=, и /search/?q= отдают одну и ту же страницу на любое слово; карта — только видео, новости берутся с главной"},"1tv.ru":{external:!1,rss:"https://www.1tv.ru/news/index_for_ya.rss",skipPaths:["/shows/"],note:"лента для Яндекса /news/index_for_ya.rss отдаёт новости С ПОЛНЫМ ТЕКСТОМ (539 записей, трое с половиной суток на 21 ноября 2026) — ключ в тексте находится без скачивания; на главной она не объявлена, поэтому вписана. Страницы /shows/ — выпуски передач без даты (90-153 штуки «без даты» в двух прогонах, и на них уходило время) — не качаем. типовые /search?q= — оболочка (198 989 байт на любое слово), но автодетект находит собственный поиск движка сайта и он работает: 19 материалов за двое суток. Шаблон намеренно НЕ вписан, чтобы не потерять его пагинацию"},"life.ru":{search:null,external:!1,api:{url:"https://api.corr.life/public/posts/search?limit=50&term={q}&offset={off50}&sort=publication_date&direction=desc",list:"hits.hits",slug:"_id",link:"https://life.ru/p/{slug}",resolve:!0,title:"_source.title",date:"_source.publication_date",dateUnix:!0,text:["_source.subtitle","_source.content"],perPage:50},note:"страница поиска /search?query= пустая и по HTTP, и в браузере — выдачу берёт скрипт из служебного входа api.corr.life/public/posts/search (найден 21 ноября 2026 в коде страницы). Он ищет по заголовку и тексту, отдаёт полный текст и идёт по дате — канал api с запросом, без браузера. Адрес /p/<номер> уводит на адрес со слагом — разворачивается. Ищет не всё: на «Путин» за 20–21 ноября вход дал 75, а 6 материалов (упоминания в тексте) нашла только глубина, — поэтому полноту не засчитывает и глубина идёт как обычно"},"news.ru":{search:null,external:!1,note:"ПОИСК ЗАПРЕЩЁН САМИМ САЙТОМ: в robots.txt секция User-agent: * содержит Disallow: /*? и Disallow: /search/, то есть любые адреса с параметрами. Ленты и карты при этом открыты и дают материал — 50 за двое суток (RSS + карта новостей + глубина)"},"business-gazeta.ru":{search:null,external:!1,note:"/search?q= и /search?fullpage=1&q= отдают 25 690 байт на любое слово, ссылок на статьи ноль. Живой вход — RSS /rss.xml"},"fontanka.ru":{search:"https://www.fontanka.ru/search/{dpage}?keywords={q}",external:!1,note:"поиск ЕСТЬ и без браузера: параметр keywords (а не query — по нему приходит оболочка), выдача по дате, 40 на страницу, листается /search/page-N/. Замер 21 ноября 2026: «Токаев» — 303 совпадения, бессмыслица — ни одного. Лента /rss-feeds/rss.xml держит последние сутки (100 записей)"},"iz.ru":{external:!1,note:"ГЛАВНАЯ отдаёт HTTP 403 (антибот), а RSS и карты при этом открыты и работают: 59 материалов за двое суток. Поиск находит автодетект, шаблон не вписан намеренно"},"gazeta.ru":{search:null,external:!1,note:"страница поиска — заглушка на 3978 байт, ссылок ноль. Карта новостей /sitemap_news.xml — 56 адресов, все свежие. В прогоне 26 сентября 2026 сайт дал НОЛЬ при 77 честно прочитанных статьях: кандидатов нашлось всего 100, то есть вход узкий. Проверить прогоном на широком окне"},"tass.ru":{external:!1,note:"ИЗ ОБЛАЧНОЙ СЕССИИ НЕ ОТКРЫВАЕТСЯ ВОВСЕ: главная отдаёт обрубок в 1,8 КБ, robots.txt — fetch failed, карты сайта не открылись, в прогоне «каналы: none» и ноль. Это может быть репутация дата-центра, а не факт о сайте (случай Reuters) — проверить прогоном с домашней машины, прежде чем делать выводы"},"forbes.ru":{search:null,external:!1,note:"на ЛЮБОЙ адрес, включая robots.txt, отдаётся JS-заглушка антибота (13 602 байта, считает куку скриптом). В прогоне «каналы: none» и ноль. Обычным запросом сайт не взять; проверить прогоном с домашней машины"},"svpressa.ru":{external:!1,note:"форма поиска на главной ведёт на ВИДЖЕТ ЯНДЕКСА (yandex.ru/sitesearch), но автодетект находит рабочий вход сам — 6 материалов за двое суток. Своих карт новостей и RSS у сайта нет"},"ura.news":{external:!1,note:"сайт запрещает автоматический обход: robots.txt, секция User-agent: * -> Disallow: /. В предустановленный список не добавлен намеренно (решение то же, что по Reuters)"},"bbc.com":{search:null,render:"https://www.bbc.com/search?q={q}",selectors:{container:'a[data-testid="internal-link"]',title:'[data-testid="card-headline"]',date:""},external:!1,note:"SPA-поиск; язык запроса = язык сайта (Tokayev для англ.). Замер 23 сентября 2026: формы поиска в разметке главной НЕТ вовсе (её рисует скрипт), поэтому HTTP-поиск выключен, а страница берётся рендером. Материал даёт sitemap-глубина — 14 за сутки по ключу «China»"},"theguardian.com":{search:null,external:!1,note:"HTTP-поиска нет (/search отдаёт 404, формы на главной нет); материал даёт карта новостей с заголовками"},"aljazeera.com":{search:null,external:!1,note:"поиск — оболочка (страница одна и та же на любое слово), WordPress-вход отвечает 404; материал дают rss и карта новостей"},"dw.com":{search:"https://www.dw.com/search/?languageCode=en&item={q}",external:!1,note:"поиск РАБОТАЕТ, параметр item (не q). Осторожно: /search/СЛОВО — это эхо, а не поиск. Пагинация pageIndex не двигается, поэтому страниц в шаблоне нет. languageCode задаёт язык выдачи"},"cnn.com":{search:null,external:!1,note:"форма ведёт на /search?q=, но страница по слову и по мусору побайтово одинакова — выдачу рисует скрипт"},"npr.org":{search:null,external:!1,note:"поиск — оболочка. Карта новостей лежит на другом хосте (googlecrawl.npr.org) и перечислена в robots — канал глубины её берёт"},"euronews.com":{search:"https://www.euronews.com/search?query={q}",external:!1,note:"поиск РАБОТАЕТ, параметр query (/?s= и ?text= отдают ленту). В прогоне 23 сентября 2026 сайт отвечал 406 и на поиск, и на 28 статей; причина не найдена, повторить не удалось — если 406 вернётся, смотреть здесь"},"cbsnews.com":{search:null,external:!1,note:"поиск — оболочка: страницы по слову и по мусору побайтово одинаковы. На быстрый повторный запрос сайт отвечает 406 — это не «ищет», это нас придержали"},"nbcnews.com":{search:null,external:!1,note:"форма ведёт на /search/, но страница в 19 КБ и ссылок на статьи не содержит вовсе; ?s= отдаёт ЛЕНТУ (та же страница на любое слово, искомого слова на ней нет). Материал: rss и карта сайта (без заголовков — дату и ключ узнаём только скачав). Статьи читаются образцово: JSON-LD, дата и тело на месте (улики 24 сентября 2026) — прежний ноль в одном прогоне из двух был разовым отказом главной, а не поломкой"},"independent.co.uk":{search:null,external:!1,note:"/search отдаёт 404, формы на главной нет. Материал дают rss (100 записей) и карта новостей с заголовками"},"straitstimes.com":{search:null,external:!1,note:"поиск — оболочка (восемь проб, страница одна и та же). Материал дают карта новостей с заголовками и rss"},"time.com":{search:null,external:!1,note:"поиск — оболочка. В robots.txt у секции «*» нет ни одного запрета. Материал дают карта новостей и rss"},"usatoday.com":{search:null,external:!1,note:"ЭХО, а не поиск: слово на странице есть, но ссылки на статьи у страницы по слову и по мусору ОДНИ И ТЕ ЖЕ. Судить надо по ссылкам, а не по числу вхождений"},"newsweek.com":{search:null,external:!1,note:"/search?q= отвечает 406, /?s= — это главная. Материал дают rss и карта сайта"},"abcnews.com":{search:null,external:!1,note:"формы поиска на главной нет. Карта новостей — 1000 адресов с заголовками, самая объёмная из проверенных"},"abcnews.go.com":{search:null,external:!1,note:"издание переехало на abcnews.com — вписывайте новый адрес, на старом материала не будет"},"apnews.com":{search:null,external:!1,note:"403 на главную и карты — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026). Значит это НЕ репутация дата-центра, как я предполагал, а обычный отказ всем подряд; robots.txt при этом обход разрешает. Материал даёт только карта новостей — по заголовку, без скачивания"},"france24.com":{search:null,external:!1,note:"из облака 403, хотя robots.txt отдаётся и перечисляет карты новостей по языкам. Тот же класс, что apnews. Английская версия — на /en/"},"japantimes.co.jp":{search:null,external:!1,note:"403 на главную и поиск — И ИЗ ОБЛАКА, И С МАШИНЫ ПОЛЬЗОВАТЕЛЯ (улики 24 сентября 2026), то есть отказ не по адресу обращающегося. Ищет ли /search?query= на самом деле — по-прежнему неизвестно: страницу не отдают никому. RSS работает (/feed)"},"reuters.com":{search:null,render:"https://www.reuters.com/site-search/?query={q}",external:!1,note:"поиск сайта — /site-search/?query= (адрес дал пользователь). По HTTP отдаёт 401 DataDome, выдачу рисует Arc-скрипт -> берём РЕНДЕРОМ, без пагинации (render рендерит один адрес). Из облака 401 и обычным запросом, и настоящим Chromium — это репутация дата-центра, у пользователя с домашнего адреса должно открыться. Карты сайта при этом ОТКРЫТЫ: news-sitemap отдаёт 50 записей с заголовком и точной датой, то есть материал с ключом В ЗАГОЛОВКЕ находится вообще без скачивания. Дата стоит в адресе (…-2026-09-22/) -> отсев вне периода бесплатный. В robots.txt сайт запрещает автоматический сбор (Disallow: / для всех) — решение владельца"},"khabar.kz":{search:["https://khabar.kz/ru/search/search?searchword={q}&limitstart={off20}","https://khabar.kz/kk/search/search?searchword={q}&limitstart={off20}"],browserSearch:!0,external:!1,skipPaths:["/agency/"],note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии, материалы у них разные). /agency/ — страницы «О компании» из меню, без дат: отсеиваются до скачивания. Прежняя запись «поиска нет» смотрела /search/?q= — это лента. Глубину даёт sitemap"},"nomad.su":{search:null,browserSearch:!0,external:!1,note:"по уликам: /?s= игнорирует запрос (та же страница на любое слово, ссылок-статей 0). HTTP-поиска нет; браузер-поиск работает; внешний мёртв"},"31.kz":{dead:!0,search:null,browserSearch:!0,noRender:!0,note:"на сайте нет текста материалов: только видео полных выпусков («Полный выпуск Информбюро от 16.11.2026», текста на странице 0 знаков, проверено 20 ноября 2026). Искать ключ не в чем, а общая карта ставит сегодняшнюю дату 600 видео разом. Новости телеканала — YouTube"},"ktk.kz":{search:null,skipPaths:["/important_information/","/for_partners/","/about/"],browserSearch:!0,external:!1,feed:"/ru/News/AjaxPublications/",feedPost:"lastDate={date}",render:"https://www.ktk.kz/ru/Search/Index/?text={q}&searchid=2472426",note:"служебные разделы /important_information/, /for_partners/, /about/ лежат в карте сайта без дат (прозвон 18–19 ноября 2026: 32 «без даты на странице») — не качаем. сертификат сайта без промежуточного звена (UNABLE_TO_VERIFY_LEAF_SIGNATURE) — дотягиваем сами, браузер не нужен; с 21 ноября 2026 каждый ответ — переадресация с кукой __hash_, привязанной к адресу клиента: куку храним сами (desktop/cookie-heal.js), браузер не нужен; лента по датам — POST /ru/News/AjaxPublications/; поиск — виджет Яндекса (рендером)"},"camonitor.kz":{dead:!0,note:"издание переехало на camonitor.net (сказал пользователь 20 ноября 2026) — вписывайте новый адрес. Старый адрес закрыт Cloudflare целиком (HTTP 403 на всё)"},"camonitor.net":{dead:!0,note:"архив: новых материалов нет (свежее — начало 2021 года), дат на страницах и карты сайта нет — проверено 20 ноября 2026"},"dialog.kz":{search:null,feed:"https://dialog.kz/?page={page}",browserSearch:!0,external:!1,note:"сертификат сайта без промежуточного звена (UNABLE_TO_VERIFY_LEAF_SIGNATURE) — дотягиваем сами (цепочка через Root YR -> ISRG Root X1), браузер не нужен. Пагинация ленты ?page=N (0,1,2…)"},"ratel.kz":{search:"https://ratel.kz/search?q={q}",external:!1,note:"РАБОЧИЙ поиск — /search?q= (проверено пользователем 2 сентября 2026). Прежняя разведка смотрела /?s=, а это ЛЕНТА: 78 ссылок и на слово, и на мусор. Дата лежит ТЕКСТОМ в div.post_news__date («Пятница, 04 Июл 2025, 12:00») — ни <time>, ни разметки"},"weproject.media":{browserSearch:!0,external:!1,note:"поиск по форме детектится; внешний мёртв, браузер-поиск подхватывает"},"esquire.kz":{browserSearch:!0,external:!1,note:"поиск по форме /search?query= отвечает обычному запросу (23 сентября 2026: 71 891 б и 6 своих ссылок против 68 561 б и нуля на мусорном слове) — прежняя заметка «HTTP-поиск таймаутит» была разовым отказом, а не фактом о сайте. Браузер-поиск живой; внешний мёртв"},"sn.kz":{browserSearch:!0,note:"HTTP-поиск (native) слабый (24 ссылки); браузер-поиск усиливает"},"zonakz.net":{dead:!0,note:"издание закрыто в 2025 году: сайт открывается, новых материалов нет (проверено пользователем 2 сентября 2026)"},"diapazon.kz":{search:"https://diapazon.kz/search?q={q}&page={page}",feed:"https://diapazon.kz/article/more-list?category=0&count=30&offset={off30}&viewType=main",feedFirst:"https://diapazon.kz/all-news",browserSearch:!0,external:!1,note:"поиск сайта — /search?q= (адрес его собственной формы), пагинация &page=N. Прежняя запись «HTTP-поиска нет» смотрела /?s= — это лента. Статьи без разметки (og:type=website) — берутся по виду адреса. Ни RSS, ни карты сайта нет: глубину даёт AJAX-лента article/more-list?offset={off30} (шаг 30, 20 страниц = 600 ссылок за прогон). feedFirst = статика /all-news как первая страница."},"arasha.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"adyrna.kz":{search:null,feed:"https://adyrna.kz/kk",render:"https://adyrna.kz/kk/search?q={q}",external:!1,note:"быстрый вход — лента на главной: 148 ссылок обычным запросом, покрывают последние 5-6 суток (пагинации нет, одной страницы хватает). Поиск сайта — виджет Google, по HTTP недоступен, поэтому запасным идёт рендер. Карта сайта свежесть НЕ показывает: lastmod у всех 65 398 адресов сегодняшний, а самые «свежие» по нему — материалы 2022-2024 годов. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"democrat.kz":{browserSearch:!0,note:"поиск по форме работает; браузер-поиск как страховка"},"malim.kz":{browserSearch:!0,note:"поиск по форме — лучший канал (32 совпадения); браузер-поиск как страховка"},"astanatv.kz":{search:null,skipPaths:["/video/"],browserSearch:!1,external:!1,note:"/video/ — нарезки телепередач (YouTube-плеер, текста нет, даты на странице нет вовсе; проверено 22 ноября 2026 на /ru/video/12073/) — проверить их нечем, не качаем; новости канала лежат в /news/. по уликам: /kz/search/?q= отдаёт ОБЫЧНУЮ ЛЕНТУ, а не результаты — страницы для «Тоқаев» и «Токаев» побайтово одинаковы, слова в выдаче нет ни разу. Рабочего HTTP-поиска нет (23 сентября 2026 перепроверены десять типовых шаблонов, формы поиска в разметке главной тоже нет); всё даёт sitemap-глубина (19-21 материал)"},"24.kz":{search:["https://24.kz/ru/search/search?searchword={q}&limitstart={off20}","https://24.kz/kz/search/search?searchword={q}&limitstart={off20}"],external:!1,note:"поиск сайта — Joomla /<язык>/search/search?searchword= (обе версии: издание выпускает каждое событие и по-русски, и по-казахски). Прежняя запись «поиска нет вовсе» проверяла ?q= и com_finder — не те адреса"},"politico.kz":{search:["https://politico.kz/search?q_str={q}","https://politico.kz/ru/search?q_str={q}"],browserSearch:!0,note:"поиск ЕСТЬ: q_str, ДВЕ версии — казахская в корне и русская /ru/ (материалы разные). Браузер-поиск оставлен: он единственный тяжёлый канал, где тут что-то ловилось"},"aikyn.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск по форме даёт нули; браузер-поиск живой; внешний мёртв"},"astana-akshamy.kz":{browserSearch:!0,note:"HTTP-поиск отдаёт пустую оболочку; браузер-поиск подхватывает"},"aqmeshit.kz":{browserSearch:!0,external:!1,note:"HTTP-поиск таймаутит; браузер-поиск живой; внешний мёртв"},"yujanka.kz":{browserSearch:!1,external:!1,note:"HTTP-поиск ?s= ищет (автодетект сам его находит — WordPress, с пагинацией); браузер-поиск строку поиска не находит вовсе — выключен; материал в основном даёт wp-api"},"qazaqstan.tv":{search:"https://qazaqstan.tv/search?query={q}",external:!1,note:"поиск ЕСТЬ и фильтрует (проверено вручную: «Тоқаев бойынша іздеу нәтижелері», вкладка Жаңалықтар + даты в карточках). Автодетект раньше цеплял не ту форму и тянул всю ленту. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ), иначе нули"},"qmonitor.kz":{dead:!0,search:"https://qmonitor.kz/search/?query={q}",external:!1,note:"сервер не принимает соединения: HTTPS не отвечает вовсе, по HTTP до него не достучаться (connection timeout), домен в DNS есть. Проверено 23 и 24 сентября 2026 с двух независимых адресов; в прогоне стоил 233 с за ноль. Поднимется — снять dead, поиск уже прописан"},"the-steppe.com":{search:"https://the-steppe.com/search?s={q}",external:!1,note:"поиск найден вручную. Ноль по «Токаев» — норма: издание про него не пишет (проверено), это не поломка канала"},"dknews.kz":{search:null,render:"https://dknews.kz/ru/gsearch?q={q}#gsc.tab=0&gsc.q={q}",selectors:{container:".gsc-webResult.gsc-result",link:"a.gs-title",title:"a.gs-title",date:""},external:!1,note:"поиск = Google CSE (/ru/gsearch + #gsc.*) — из HTTP не берётся, результаты рисует JS; поднимаем рендером, как orda.kz"},"spik.kz":{search:null,feed:"https://spik.kz/{page}",browserSearch:!1,external:!1,note:"поиска на сайте НЕТ. Лента — три раздела /1, /2, /3 (по 40 статей); прежний адрес /lastnews/ отдаёт 404. Пагинации у разделов нет: /4 = 404, обход останавливается сам. Есть RSS (/rss.xml, 549 КБ) и карта новостей"},"factcheck.kz":{browserSearch:!1,external:!1,noWp:!0,skipPaths:["/publichnaya-oferta","/soglashenie-ob-ispolzovanii","/platezhi-oplata"],note:"с ноября 2026 сайт на Next.js: /wp-json/ отвечает 404, признаки WordPress остались только в адресах картинок — служебный вход выключен (noWp). Оферта, согласие на обработку данных и условия оплаты лежат в карте без дат («без даты — 12» в каждом прогоне) — не качаем. Поиск по форме слабый; внешний мёртв"},"petropavlovsk.news":{dead:!0,note:"домена нет в DNS (пользователь проверил 2 сентября 2026, перепроверено 23 сентября)"},"atamekenbusiness.kz":{dead:!0,note:"сайт телеканала, новостной ценности для мониторинга нет (сервер жив: 200, но ссылок-статей на главной ноль)"},"atpress.kz":{external:!1,note:"Cloudflare-проверка на всём сайте (карта и RSS тоже за ней) — читается только браузером; дешёвый запасной вход — телеграм-канал издания t.me/atpresskz"},"ontustiktv.kz":{search:["https://ontustiktv.kz/kz/search?q={q}&page={page}","https://ontustiktv.kz/ru/search?q={q}&page={page}"],external:!1,note:"поиск сайта ищет (обе версии языка, материалы у них разные), но сортирует по релевантности — свежее даёт карта сайта; телеграм издания t.me/Ontustik_tv"},"today.kz":{dead:!0,note:"сайт выключен — подтвердил пользователь 20 ноября 2026 (у него не открывается; из облака сервер рвёт соединение). Раньше: сертификат на чужое имя"},"taraz24.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"shymkenttv.kz":{dead:!0,note:"канал переехал на ontustiktv.kz — вписывайте новый адрес (подтвердил пользователь 20 ноября 2026). Старый адрес отдаёт HTTP 403 всему (Cloudflare)"},"altaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"atyraupress.kz":{dead:!0,note:"издание переехало на atpress.kz — вписывайте новый адрес (подтвердил пользователь 20 ноября 2026). Старый адрес отдаёт HTTP 403 всему"},"timekz.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"kostanaynews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"ontustiknews.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"aqzhayik.kz":{dead:!0,note:"домена нет в DNS (проверено 23 сентября 2026)"},"alashainasy.kz":{dead:!0,note:"издание переехало на on.kz (301 со старого домена) — вписывайте новый адрес, на старом материала не будет"},"on.kz":{external:!1,note:"бывший alashainasy.kz. Формы поиска на главной нет, типовые адреса поиска 404, карт сайта нет (любой адрес отдаёт одну и ту же страницу) — рабочего входа пока не найдено"},"masa.media":{search:"https://masa.media/ru/search?query={q}",searchCard:'class="search-post',external:!1,note:"выдача поиска — все совпадения разом и в СЛУЧАЙНОМ порядке (2253 по «Казахстан», первая карточка — 2023 год), но у каждой карточки дата в разметке (<!-- 2026-11-19T08:01:00Z -->): поле searchCard отсеивает чужие даты до скачивания (улика агента плагина, 21 ноября 2026: «не влезли в бюджет канала — 1874»). Параметров сортировки и дат у поиска нет; _token формы не нужен. сайт ЖИВОЙ и публикует ежедневно (проверено 23 сентября 2026) — прежняя пометка «мёртв» была неверной. Поиск /ru/search?query= отдаёт 497 своих ссылок против нуля на мусорном слове, но отдаёт их ВСЕ разом и без дат: в контрольном прогоне «ссылок 547, не влезли в бюджет канала — 430». Карт сайта и RSS у него нет: на любой адрес приходит одна и та же страница"},"azattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"radioazattyq.org":{dead:!0,note:"заблокирован в Казахстане — с местного IP недостижим"},"kokshetau.asia":{browserSearch:!1,external:!1,noRender:!0,note:"WordPress-поиск таймаутит; render = 0; браузер-поиск ничего не даёт; очень медленный (210-420 с за прогон, wp-api порой не успевает стартовать) — вне списка предустановленных"},"ekaraganda.kz":{external:!1,noRender:!0,note:"поиск по форме детектится (25 ссылок), по слову нули; render капчит; внешний мёртв"},"uralskweek.kz":{browserSearch:!1,external:!1,noRender:!0,note:"поиск `?s=` РАБОТАЕТ (проверено уликами: по мусорному слову ноль совпадений); статьи без разметки дат — день берётся текстом из блока и из адреса; сайт МЕДЛЕННЫЙ, бюджеты каналов упираются во время; render = 0; внешний мёртв"},"365info.kz":{external:!1,note:"видимый поиск — виджет Google (#gsc.q=), обычным запросом не берётся и в пресет не годится; материал даёт wp-api (16 за август). WordPress-поиск + render детектятся сами; внешний мёртв"},"almaty.tv":{external:!1,note:"HTTP-поиск (native) детектится сам; внешний мёртв"},"mgorod.kz":{external:!1,note:"HTTP-поиск (native) отрабатывает; внешний мёртв"},"aktobetimes.kz":{external:!1,note:"RSS + автопоиск; внешний мёртв"},"egemen.kz":{search:null,api:{url:"https://egemen.kz/api/news?published=true&limit=1000&skip={off1000}",list:"data",where:{status:"PUBLISHED"},slug:"slug",link:"https://egemen.kz/news/{slug}",title:["titleKk","titleRu"],date:"publishedAt",text:["contentKk","contentRu","excerptKk","excerptRu"],perPage:1e3},render:"https://egemen.kz/search?q={q}",external:!1,note:"служебный вход сайта (Next.js) — /api/news: все опубликованные новости, свежие первыми, с ПОЛНЫМ текстом и точной датой (сверено со страницей до миллисекунды), листается параметром skip (курсором — 36 с на запрос, skip — 2 с); 1000 новостей — 16 суток, 1,6 МБ, 2,6 секунды (22 ноября 2026). Вход отдаёт и ЧЕРНОВИКИ — поэтому published=true и отбор по status: PUBLISHED. HTTP-поиск — оболочка (199 536 б на любой запрос, слова на странице нет вовсе); браузером тот же адрес даёт 10 своих результатов -> берём рендером. След на будущее: /api/search?q={q}&page={page}&limit=10 отвечает JSON, но ссылок в нём нет — только slug. Сайт казахоязычный -> ключ писать через «Тоқаев» (қ)"},"turkystan.kz":{note:"HTTP-поиск (native) отрабатывает; браузер-поиск память ещё не разобрала"},"elordainfo.kz":{external:!1,note:"Elorda Info (Астана, на казахском); rss + карта новостей + глубина + поиск формы. Замер 20.11.2026: 49 материалов за двое суток. Одна статья приходит с хвостом ?id= и без него — склеивается по canonical"},"azattyq-ruhy.kz":{external:!1,cutText:["фундаментальный политический принцип президента"],note:"Azattyq Rýhy (казахская версия); карта новостей + глубина + поиск формы. Замер 20.11.2026: 25 материалов"},"rus.azattyq-ruhy.kz":{external:!1,cutText:["фундаментальный политический принцип президента"],note:"Azattyq Rýhy (русская версия); rss + карта новостей + глубина + поиск формы. В конец каждой статьи рубрики «Закон и порядок» издание дописывает абзац «Концепция «Закон и порядок» — фундаментальный политический принцип президента… Токаева»: по ключу «Токаев» это 15 ложных строк из 44 (замер 20.11.2026), поэтому предложение вырезается (cutText)"},"qazaqtoday.info":{external:!1,note:"QazaqToday (на казахском, WordPress); rss + карта новостей + wp-api. Замер 20.11.2026: 29 материалов за 20 с"},"bes.media":{external:!1,note:"Bes.media; карта новостей + глубина + поиск формы. Замер 20.11.2026: 15 материалов"},"dalanews.kz":{external:!1,note:"Dalanews (на казахском); rss + карта новостей + глубина + поиск формы. Замер 20.11.2026: 14 материалов, сайт медленный (81 с)"},"ult.kz":{external:!1,note:"Ult.kz (на казахском); rss + карта новостей + глубина + поиск формы. Замер 20.11.2026: 13 материалов"},"kt.kz":{external:!1,drop:["share"],note:"Kazakhstan Today; rss + поиск формы. Замер 20.11.2026: 8 материалов за 28 с"},"ozgeris.info":{external:!1,note:"Өзгеріс (на казахском); материал даёт только поиск формы. Замер 20.11.2026: 9 материалов за 19 с"},"qaz-media.kz":{external:!1,note:"Qaz-media (Петропавловск, WordPress); rss + wp-api + поиск формы. Замер 20.11.2026: 6 материалов"},"kstnews.kz":{external:!1,note:"Костанайские новости (первое место zero.kz по посещаемости в разделе СМИ); rss + wp-api + поиск формы. Замер 20.11.2026: 2 материала за 57 с — региональный, про Токаева пишет мало"},"memleket.kz":{external:!1,note:"НЕ издание, а портал госорганов: одну новость перепубликуют десятки акиматов («Аппарат акима Каракудыкского сельского округа…»). Замер 20.11.2026: 93 строки, из них 37 копий одной статьи под разными номерами. В список не взят"},"tiek.kz":{external:!1,note:"проверено 20.11.2026: поиск отвечает, материала за двое суток по «Тоқаев» ноль. В список не взят"},"ekonomist.kz":{external:!1,note:"проверено 20.11.2026: rss + wp-api + поиск, ноль по «Тоқаев» за 66 с. В список не взят"},"bnews.kz":{external:!1,note:"проверено 20.11.2026: каналы none — ни ленты, ни карты, ни поиска не нашлось"},"centralasia.media":{external:!1,note:"проверено 20.11.2026: 2 материала за 97 с — в список не взят по цене"}}}});function setRenderer(fn){typeof fn=="function"&&(renderScrape=fn)}function setDateStore(st){st&&typeof st.get=="function"&&typeof st.set=="function"&&(dateStore=st)}function setGoldenSink(fn){goldenSink=typeof fn=="function"?fn:null}function setHtmlFetcher(fn){typeof fn=="function"&&(renderFetch=fn)}function setSiteSearcher(fn){typeof fn=="function"&&(renderSiteSearch=fn)}function unreadOnly(fates){let judged=new Set;for(let f of fates||[])f&&f.url&&!/^не открылась|^не успели/.test(f.verdict||"")&&judged.add(f.url);return it=>it&&it.url&&!judged.has(it.url)}async function enrichUrls(urls,{groups,exclude,fromD,toD,originHost,channelLabel,deadline,maxFetch=80,browserFallback=!1,browserBudget=null,browserIf=null,diag=null,tally=null,pick=null,have=null}){let tick2=k=>{tally&&(tally[k]=(tally[k]||0)+1)},skipPaths=[],cutText=[];try{let kp=originHost?lookupKnown("https://"+originHost):null;skipPaths=kp&&kp.skipPaths||[],cutText=(kp&&kp.cutText||[]).map(x=>String(x).toLowerCase())}catch{}let tickSection=u=>{if(!tally)return;let segs=[];try{segs=new URL(u).pathname.toLowerCase().split("/").filter(Boolean)}catch{return}let s=segs.find(x=>!/^[a-z]{2}$/.test(x)&&!/^\d+$/.test(x));s&&((tally.noDateWhere||(tally.noDateWhere={}))[s]=(tally.noDateWhere[s]||0)+1)},terms=queryTerms(groups),exGroups=exclude||[],conc=browserFallback?1:4,RETRY=Symbol("добрать браузером"),canBrowser=u=>(browserFallback||browserBudget&&browserBudget.left>0)&&(!browserIf||browserIf(u)),RESET_TRIP=3,SLOW_GAP_MS=typeof process<"u"&&process.env&&Number(process.env.MC_SLOW_GAP_MS)||400,MAX_RETRY=25,gov=tally&&(tally._slow||(tally._slow={}))||{};gov.resets===void 0&&Object.assign(gov,{resets:0,on:!1,saved:0,tried:0,chain:null,why:{}});let chained=fn=>{let turn=(gov.chain||Promise.resolve()).then(()=>sleep(SLOW_GAP_MS)).then(fn);return gov.chain=turn.then(()=>{},()=>{}),turn},paced=fn=>gov.on?chained(fn):fn(),cheapSkip=(u,rec2)=>{if(isListingUrl(u))return tick2("listing"),rec2&&(rec2.verdict="раздел сайта, не статья (видно по адресу)",diag.push(rec2)),!0;if(skipPaths.length){let pth="";try{pth=new URL(u).pathname}catch{}if(skipPaths.some(sp=>pth.includes(sp)))return tick2("listing"),rec2&&(rec2.verdict="служебная страница сайта (пресет: "+skipPaths.find(sp=>pth.includes(sp))+")",diag.push(rec2)),!0}if(isAssetUrl(u))return tick2("listing"),rec2&&(rec2.verdict="это файл, а не страница (видно по адресу)",diag.push(rec2)),!0;let knownDate=parseDate(dateStore.get(u));if(knownDate&&!inRange(knownDate,fromD,toD))return tick2("staleDate"),rec2&&(rec2.verdict="дата вне периода (из памяти дат)",rec2.date=dateStore.get(u),rec2.parsed=ymd(knownDate),diag.push(rec2)),!0;if(!knownDate&&(fromD||toD)){let ud=dateFromUrl(u);if(ud&&(fromD&&+ud<+fromD-864e5||toD&&+ud>+toD+864e5))return tick2("urlDateOut"),rec2&&(rec2.verdict="дата вне периода (видно по адресу)",rec2.parsed=ymd(ud),diag.push(rec2)),!0}return!1},handle=async(u,allowBrowser)=>{let rec2=diag?{url:u,channel:channelLabel}:null;if(deadline&&Date.now()>deadline)return tick2("late"),rec2&&(rec2.verdict="не успели (бюджет времени)",diag.push(rec2)),null;let why=[],html=allowBrowser?null:await paced(()=>tryPlain(u,why)),backoff=!html&&!allowBrowser?backoffReason(why[0]):null;backoff&&(gov.resets++,gov.why[backoff]=(gov.why[backoff]||0)+1,!gov.on&&gov.resets>=RESET_TRIP&&(gov.on=!0),gov.tried<MAX_RETRY&&(gov.tried++,why.length=0,html=await chained(()=>tryPlain(u,why)),html&&gov.saved++));let viaBrowser=!1;if(!html&&allowBrowser&&canBrowser(u)){browserBudget&&browserBudget.left--;let b=await renderFetch(u);html=b&&b.ok?b.html:null,html&&(tick2("viaBrowser"),viaBrowser=!0)}if(!html&&!allowBrowser&&canBrowser(u))return RETRY;if(!html)return tick2("noOpen"),tally&&why[0]&&(tally.noOpenWhy=tally.noOpenWhy||{},tally.noOpenWhy[why[0]]=(tally.noOpenWhy[why[0]]||0)+1),rec2&&(rec2.verdict="не открылась"+(why[0]?" ("+why[0]+")":" (WAF/таймаут/404)"),diag.push(rec2)),null;let m=extractArticleMeta(siteDrop(html,u),u,pick&&pick.hint);if(!m)return!declaresArticle(html)&&!looksLikeArticleUrl(u)?(tick2("notArticle"),rec2&&(rec2.verdict="не статья (меню/категория/оболочка), даты на ней тоже нет",diag.push(rec2)),null):(tick2("noDate"),tickSection(u),rec2&&(rec2.verdict="дата не найдена на странице",diag.push(rec2)),null);if(pick&&m.dateVia&&(pick.seen[m.dateVia]=(pick.seen[m.dateVia]||0)+1),!m.isArticle&&!looksLikeArticleUrl(u))return tick2("notArticle"),rec2&&(rec2.verdict="не статья (меню/категория/оболочка)",rec2.title=m.title||"",diag.push(rec2)),null;try{let tag=(html.match(/<link\b[^>]*\brel\s*=\s*["']?canonical\b[^>]*>/i)||[])[0],href=tag&&(tag.match(/\bhref\s*=\s*["']([^"']+)["']/i)||[])[1];if(href){let c=new URL(decodeEntities(href),u),o=new URL(u),bare=h=>h.toLowerCase().replace(/^www\./,"");!c.search&&o.search&&bare(c.host)===bare(o.host)&&c.pathname.replace(/\/+$/,"")===o.pathname.replace(/\/+$/,"")&&(m.url=c.href)}}catch{}if(looksLikeListingTitle(m.title))return tick2("notArticle"),rec2&&(rec2.verdict="подборка по теме, а не материал",rec2.title=m.title||"",diag.push(rec2)),null;if(m.date&&dateStore.set(u,m.date),tally&&m.date){let pd=parseDate(m.date);if(pd){let day=ymd(pd);(tally._pageDays||(tally._pageDays={}))[day]=(tally._pageDays[day]||0)+1;let ud=dateFromUrl(u);ud&&(tally.urlDateN=(tally.urlDateN||0)+1,Math.abs(+startOfDay(day)-+startOfDay(ymd(ud)))>2*864e5&&(tally.urlDateOff=(tally.urlDateOff||0)+1))}}if(cutText.length){let cut2=t=>String(t||"").split(/(?<=[.!?…])\s+/).filter(x=>!cutText.some(c=>x.toLowerCase().includes(c))).join(" ");m.body=cut2(m.body),m.description=cut2(m.description)}m._hay=((m.title||"")+" "+(m.description||"")+" "+(m.body||"")).toLowerCase();let bodyLen=(m.body||"").length;if(tally&&(tally._bodies||(tally._bodies=[])).push(bodyLen),tally&&parseDate(m.date)){let rd=tally._read||(tally._read=new Set);rd.add(urlKey(u)),m.url&&rd.add(urlKey(m.url))}if(goldenSink)try{goldenSink({url:u,date:m.date,dateVia:m.dateVia,bodyLen,title:m.title,viaBrowser})}catch{}if(rec2){let parsed=parseDate(m.date);rec2.title=(m.title||"").slice(0,80),rec2.date=m.date||"",rec2.parsed=ymd(parsed),rec2.inRange=inRange(m.date,fromD,toD),rec2.hasKw=matchGroups(m._hay,groups),rec2.hasExclude=exGroups.length?matchGroups(m._hay,exGroups):!1,rec2.verdict=rec2.parsed?rec2.inRange?rec2.hasExclude?"минус-слово":rec2.hasKw?"ВЗЯТА":"ключа нет в тексте":"дата вне периода":"дата не распознана",diag.push(rec2)}return m},kept=[],dupes=[];for(let u of urls){let rec2=diag?{url:u,channel:channelLabel}:null;if(have&&have.has(urlKey(u))){tick2("dupe"),rec2&&(rec2.verdict="её уже принёс другой канал — второй раз не качаем",diag.push(rec2)),dupes.push(u);continue}if(tally&&tally._read&&tally._read.has(urlKey(u))){tick2("reread"),rec2&&(rec2.verdict="её уже прочитал другой канал (ключа нет или дата вне периода) — второй раз не качаем",diag.push(rec2));continue}cheapSkip(u,rec2)||kept.push(u)}if(kept.length>maxFetch){for(let i=maxFetch;i<kept.length;i++)tick2("overBudget"),diag&&diag.push({url:kept[i],channel:channelLabel,verdict:"не влезла в бюджет канала"});urls=kept.slice(0,maxFetch)}else urls=kept;let first=await mapPool(urls,conc,u=>handle(u,!1)),metas=first.filter(x=>x!==RETRY),retry=urls.filter((_,i)=>first[i]===RETRY);if(retry.length)for(let m of await mapPool(retry,1,u=>handle(u,!0)))m!==RETRY&&metas.push(m);let newest=null,rows=[];for(let m of metas){if(!m)continue;let d=parseDate(m.date);if(d&&(!newest||d>newest)&&(newest=d),!inRange(m.date,fromD,toD)){tick2("outOfPeriod");continue}if(exGroups.length&&matchGroups(m._hay,exGroups)){tick2("excluded");continue}if(!matchGroups(m._hay,groups)){tick2("noKw");continue}tick2("taken");let match=matchGroups((m.title||"").toLowerCase(),groups)?"title":"body",snippet=snippetFor((m.description||"")+" "+(m.body||"")+" "+(m.title||""),m.title,terms);rows.push({source:originHost,title:m.title,url:m.url,date:m.date,dateSource:"page",channel:channelLabel,match,snippet})}for(let u of dupes)rows.push({url:u,channel:channelLabel,_dupe:!0});return{rows,newest}}function isChallengePage(html){if(!html)return!1;let head=String(html).slice(0,4e3);return/<title[^>]*>\s*(just a moment|attention required|подожд|один момент)/i.test(head)||/id="(challenge-running|cf-challenge-running|cf-please-wait|challenge-form|turnstile-wrapper)"/i.test(head)||/cf-browser-verification|_cf_chl_opt|\/cdn-cgi\/challenge-platform/i.test(head)?!0:/just a moment|checking your browser|verifying you are human|проверка браузера/i.test(head)&&String(html).length<6e4}function cardDatesOf(html,marker,origin){let m=new Map;for(let part of String(html||"").split(marker).slice(1)){let ds=part.match(/\b(20\d\d-\d\d-\d\d(?:[T ]\d\d:\d\d(?::\d\d)?(?:\.\d+)?(?:Z|[+-]\d\d:?\d\d)?)?|\d{1,2}\.\d{2}\.20\d\d(?:[ ,]+\d{1,2}:\d{2}(?::\d{2})?)?)(?!\d)/),d=ds?parseDate(ds[1]):null;if(d){d.timed=/\d:\d\d/.test(ds[1]);for(let u of extractLinks(part,origin))m.has(u)||m.set(u,d)}}return m}async function resolveRedirect(u){let ac=new AbortController,t=setTimeout(()=>ac.abort(),8e3);try{let r=await fetch(u,{method:"HEAD",redirect:"manual",headers:BROWSER_HDRS,signal:ac.signal}),loc=r.status>=300&&r.status<400&&r.headers.get("location");return loc?new URL(loc,u).href:u}catch{return u}finally{clearTimeout(t)}}async function tryPostText(url,body){let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),FETCH_MS);try{let r=await fetch(url,{method:"POST",redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",...BROWSER_HDRS},body,signal:ctrl.signal});return r.ok?await r.text():null}catch{return null}finally{clearTimeout(t)}}function dmy(d){let p=n=>String(n).padStart(2,"0");return p(d.getDate())+"."+p(d.getMonth()+1)+"."+d.getFullYear()}async function fetchText(url,retries=2){for(let attempt=0;;attempt++){let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),FETCH_MS);try{let r=await fetch(url,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...BROWSER_HDRS},signal:ctrl.signal});if((r.status===429||r.status===503)&&attempt<retries){clearTimeout(t),await sleep(1e3*(attempt+1));continue}if(!r.ok)throw new Error("HTTP "+r.status);return await r.text()}finally{clearTimeout(t)}}}async function tryText(url){try{return await fetchText(url)}catch{return null}}function siteDrop(html,url){let k=null;try{k=lookupKnown(new URL(url).origin)}catch{}return k&&Array.isArray(k.drop)&&k.drop.length?dropBlocks(html,k.drop).html:html}async function reparseArticle(url){let r=await fetchPlain(url);if(!r.ok)return{ok:!1,err:r.err||"HTTP "+r.status};if(isChallengePage(r.text))return{ok:!0,challenge:!0};let m=extractArticleMeta(siteDrop(r.text,url),url);if(!m)return{ok:!0,date:null};let cutText=[];try{let kp=lookupKnown(new URL(url).origin);cutText=(kp&&kp.cutText||[]).map(x=>String(x).toLowerCase())}catch{}let body=m.body||"";return cutText.length&&(body=body.split(/(?<=[.!?…])\s+/).filter(x=>!cutText.some(c=>x.toLowerCase().includes(c))).join(" ")),{ok:!0,date:m.date,dateVia:m.dateVia||"",bodyLen:body.length,title:m.title||""}}async function tryPlain(url,why){let r=await fetchPlain(url);return!r.ok&&why&&why.push(r.err?r.err:"HTTP "+r.status),r.ok?r.text:null}function sameDay(a,b){let da=parseDate(a),db4=parseDate(b);return!da||!db4?!1:ymd(da)===ymd(db4)}function netErr(e){if(!e)return"неизвестная ошибка";if(e.name==="AbortError")return"таймаут";let c=e;for(let i=0;i<5&&c&&c.cause&&typeof c.cause=="object";i++)c=c.cause;let code=String(c&&c.code||e&&e.code||""),msg=String(c&&c.message||e&&e.message||e);return NET_RU[code]?NET_RU[code]+" ("+code+")":code||(/certificat|ssl|tls/i.test(msg)?"ошибка TLS: "+msg.slice(0,80):msg.slice(0,120))}function backoffReason(why){return isResetErr(why)?"рвал соединение":isBusyErr(why)?"отвечал «перегружен»":null}async function fetchInfo(url){let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),15e3);try{let r=await fetch(url,{redirect:"follow",credentials:"include",headers:{"X-Requested-With":"XMLHttpRequest",...BROWSER_HDRS},signal:ctrl.signal});return{ok:r.ok,status:r.status,url:r.url||url,text:r.ok?await r.text():""}}catch(e){return{ok:!1,status:0,err:netErr(e)}}finally{clearTimeout(t)}}async function fetchPlain(url){let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),15e3);try{let r=await fetch(url,{redirect:"follow",credentials:"include",headers:{...BROWSER_HDRS},signal:ctrl.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(e){return{ok:!1,status:0,err:netErr(e)}}finally{clearTimeout(t)}}async function fetchSearch(url,referer){let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),2e4),hdrs={...SEARCH_HDRS};referer&&(hdrs.Referer=referer);try{let r=await fetch(url,{redirect:"follow",credentials:"include",headers:hdrs,signal:ctrl.signal});return{ok:r.ok,status:r.status,text:r.ok?await r.text():""}}catch(e){return{ok:!1,status:0,err:netErr(e)}}finally{clearTimeout(t)}}function host(origin){try{return new URL(origin).host.replace(/^www\./,"")}catch{return origin}}function isListingUrl(u){let url;try{url=new URL(u)}catch{return!1}if(/[?&]page=\d+/i.test(url.search))return!0;let segs=url.pathname.toLowerCase().replace(/\/+$/,"").split("/").filter(Boolean);if(segs.some(s=>/^(cat|cats|tag|tags|category|categories|rubric|rubrics|topic|topics|section|sections|archive|archives|author|authors|search|label|labels|feed|rss|page|person|persons|people|persona|personalii|theme|themes|tema|temy)$/.test(s))||(()=>{let i=segs.findIndex(s=>/^(19|20)\d\d$/.test(s));if(i<0)return 0;let tail=segs.slice(i);if(tail.length<2||tail.length>3)return 0;let okMonth=/^(0?[1-9]|1[0-2])$/.test(tail[1]||""),okDay=tail.length<3||/^(0?[1-9]|[12]\d|3[01])$/.test(tail[2]);return okMonth&&okDay?tail.length:0})())return!0;let last=segs[segs.length-1]||"";return!!(/^(19|20)\d\d-(0?[1-9]|1[0-2])(-(0?[1-9]|[12]\d|3[01]))?$/.test(last)||segs.length<=2&&last&&!/[-_]/.test(last)&&!/\d/.test(last)&&last.length<=16)}function isTaxonomyMap(loc){let name=String(loc||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|weather|pogoda|ingredients?|statics?)\b/i.test(name.replace(/[-_.]/g," "))}function isJunkMapUrl(loc){let name=String(loc||"").split("?")[0].split("/").filter(Boolean).pop()||"";return/\b(tags?|categor(y|ies)|rubrics?|authors?|users?|topics?|sections?|pages?|weather|pogoda|search|ingredients?|images?|img|photos?|gallery|video|media|podcasts?)\b/i.test(name.replace(/[-_.]/g," "))}function mapYearMonth(loc){let RE=/(20\d{2})[^\d]?(0[1-9]|1[0-2])?/,path=String(loc||"");try{path=new URL(path,"https://x").pathname}catch{}let m=path.slice(path.lastIndexOf("/")+1).match(RE)||path.match(RE);return m?{y:+m[1],mo:m[2]?+m[2]:0}:null}function depthBudget(fromD,toD){let ms2=fromD&&toD?+toD-+fromD:0,days=ms2>0?Math.max(1,Math.round(ms2/864e5)):0;return days?days<=2?{days,maxCands:300,budgetMs:9e4}:days<=6?{days,maxCands:600,budgetMs:18e4}:{days,maxCands:1e3,budgetMs:3e5}:{days:0,maxCands:300,budgetMs:9e4}}function searchBudgetMs(known,fromD,toD){return known&&known.budgetMs?known.budgetMs:Math.max(45e3,depthBudget(fromD,toD).budgetMs)}function canonUrl(u){try{let url=new URL(u),drop=[];return url.searchParams.forEach((_,k)=>{/^(from|utm_|_openstat|ysclid|fbclid|gclid|yclid)/i.test(k)&&drop.push(k)}),drop.forEach(k=>url.searchParams.delete(k)),url.hash="",url.toString()}catch{return String(u||"").split("#")[0]}}function isAbbr(w){return w.length>=2&&/[A-Za-zА-Яа-яЁё]/.test(w)&&w===w.toUpperCase()&&w!==w.toLowerCase()}function stemRu(w){let e1=["а","я","и","ы","е","о","у","ю","й","ь"];for(let e of e1)if(w.length-1>=4&&w.endsWith(e))return w.slice(0,-1);return w}function mkTerm(word,morph){let whole=isAbbr(word),text=word.toLowerCase();return morph&&!whole&&text.length>=5&&(text=stemRu(text)),{text,whole}}function parseQuery(keyword,morph,near){let N=Number(near)>0?Math.floor(Number(near)):0;return(keyword||"").split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean).map(alt=>{let m=alt.match(/^["'«](.+)["'»]$/);if(m)return{words:[{text:m[1].toLowerCase().trim(),whole:!1}]};let words2=alt.split(/\s+/).filter(Boolean).map(w=>mkTerm(w,morph));return N&&words2.length>1?{words:words2,near:N}:{words:words2}})}function nearHit(lowerText,g){let toks=lowerText.split(/[^\p{L}\p{N}-]+/u).filter(Boolean),pos=g.words.map(t=>{let ps=[];for(let i=0;i<toks.length;i++)(t.whole?toks[i]===t.text:toks[i].includes(t.text))&&ps.push(i);return ps});if(pos.some(ps=>!ps.length))return g.words.every(t=>termHit(lowerText,t))?g.words.every(t=>/\s/.test(t.text))?!0:charNear(lowerText,g):!1;for(let start of pos.flat())if(pos.every(ps=>ps.some(p=>p>=start&&p-start<=g.near)))return!0;return!1}function charNear(lowerText,g){let W=g.near*8,at=g.words.map(t=>{let r=[],i=-1;for(;(i=lowerText.indexOf(t.text,i+1))>=0&&r.length<500;)r.push(i);return r});for(let s of at.flat())if(at.every(r=>r.some(p=>p>=s&&p-s<=W)))return!0;return!1}function termHit(lowerText,term){if(!term.text)return!1;if(!term.whole){if(term._pre===void 0)try{term._pre=new RegExp("(?<![\\p{L}\\p{N}])"+term.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"u")}catch{term._pre=null}return term._pre?term._pre.test(lowerText):lowerText.includes(term.text)}if(term._re===void 0)try{term._re=new RegExp("(?<![\\p{L}\\p{N}])"+term.text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}\\p{N}])","u")}catch{term._re=null}return term._re?term._re.test(lowerText):(" "+lowerText+" ").includes(" "+term.text+" ")}function matchGroups(lowerText,groups){return groups.length?groups.some(g=>g.words.every(t=>termHit(lowerText,t))&&(!g.near||nearHit(lowerText,g))):!0}function queryTerms(groups){return groups.flatMap(g=>g.words.map(t=>t.text))}function makeSnippet(text,kwList,len=150){let t=(text||"").replace(/\s+/g," ").trim();if(!t)return"";let low=t.toLowerCase(),idx=-1;for(let k of kwList){let i=low.indexOf(k);i>=0&&(idx<0||i<idx)&&(idx=i)}if(idx<0)return t.slice(0,len);let start=Math.max(0,idx-60),end2=Math.min(t.length,idx+90);return(start>0?"…":"")+t.slice(start,end2).trim()+(end2<t.length?"…":"")}function cardText(it){let sn=String(it&&it.snippet||"").trim(),ti=String(it&&it.title||"").trim();return ti?sn?flat(sn).includes(flat(ti))?sn:sn+" "+ti:ti:sn}function snippetFor(text,title,kwList,len=150){let s=makeSnippet(text,kwList,len),a=flat(s),b=flat(title);return!a||a===b||b&&b.includes(a)||b&&a.startsWith(b)&&a.length-b.length<TAIL_MIN?"":s}function cleanGoogleTitle(t,dom){let s=String(t||"");return s=s.split(/\s+https?:/i)[0],s=s.replace(/\s*[›»].*$/,""),s=s.replace(/\s*\|\s*[^|]*$/,""),dom&&(s=s.replace(new RegExp("\\s*[-–—]\\s*"+dom.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\s*$","i"),"")),s.replace(/\s+/g," ").trim()}function kwContext(text,terms){let low=(text||"").toLowerCase().replace(/\s+/g," "),dash=low.search(/\s[—–·]\s/);dash>=0&&dash<90&&(low=low.slice(dash+3));let idx=-1,kw="";for(let t of terms){if(!t)continue;let i=low.indexOf(t);i>=0&&(idx<0||i<idx)&&(idx=i,kw=t)}if(idx<0)return{b:"",a:""};let norm3=s=>s.replace(/[^\p{L}\p{N} ]+/gu," ").replace(/\s+/g," ").trim();return{b:norm3(low.slice(Math.max(0,idx-40),idx)),a:norm3(low.slice(idx+kw.length,idx+kw.length+40))}}function normalizeOrigin(input){let s=String(input).trim();/^https?:\/\//i.test(s)||(s="https://"+s);try{return new URL(s).origin}catch{return null}}function toggleWww(origin){try{let u=new URL(origin);return u.host=u.host.startsWith("www.")?u.host.slice(4):"www."+u.host,u.origin}catch{return null}}function bingDecodeHref(href,dom){let url=String(href||"");try{let u=new URL(url,"https://www.bing.com");if(/\/ck\/a/i.test(u.pathname)){let p=u.searchParams.get("u")||"";for(/^a1/i.test(p)&&(p=p.slice(2)),p=p.replace(/-/g,"+").replace(/_/g,"/");p.length%4;)p+="=";try{let dec=typeof atob=="function"?atob(p):Buffer.from(p,"base64").toString("binary");/^https?:\/\//i.test(dec)&&(url=dec)}catch{}}let h=new URL(url).host.replace(/^www\./,"");if(h===dom||h.endsWith("."+dom))return url.split("#")[0]}catch{}return null}function resetDdgThrottle(){_ddgNextAt=0,_ddgBlocks=0,_ddgGiveUp=!1}async function ddgFetch(url,referer){if(_ddgGiveUp)return{ok:!1,status:0,err:"ddg: пропущен (частота ограничена)",gaveUp:!0};let now=Date.now();_ddgNextAt<now&&(_ddgNextAt=now);let at=_ddgNextAt;_ddgNextAt+=2500,at-now>0&&await _sleep(at-now);let info=await fetchSearch(url,referer),t=info.text||"";return!info.ok||/anomaly|are you a robot|too many requests|captcha/i.test(t)||t.length<22*1024&&!/result__a/i.test(t)?(_ddgBlocks++,_ddgNextAt=Date.now()+Math.min(_ddgBlocks*4e3,2e4),_ddgBlocks>=4&&(_ddgGiveUp=!0)):_ddgBlocks=0,info}function ddgReal(href){try{let url=String(href).replace(/&amp;/g,"&"),m=url.match(/[?&]uddg=([^&]+)/i);if(m)try{url=decodeURIComponent(m[1])}catch{}return url.startsWith("//")&&(url="https:"+url),url}catch{return href}}function ddgResults(html,dom){let s=String(html),out=[],seen=new Set,clean=t=>decodeEntities(String(t).replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim()),push=(href,title,snippet)=>{let url=ddgReal(href),dh;try{dh=new URL(url).host.replace(/^www\./,"")}catch{return}if(dh!==dom&&!dh.endsWith("."+dom))return;let key=url.split("#")[0];seen.has(key)||(seen.add(key),out.push({url:key,title:title||"",snippet:snippet||""}))},blocks=s.split(/class="result__a"/i).slice(1);for(let block of blocks){let hm=block.match(/href="([^"]+)"/i);if(!hm)continue;let tm=block.match(/>([\s\S]*?)<\/a>/i);push(hm[1],tm?clean(tm[1]):"")}if(!out.length){for(let m of s.match(/uddg=[^"&\s]+/gi)||[])push("//x?"+m);let re=new RegExp("https?://(?:www\\.)?"+dom.replace(/\./g,"\\.")+`/[^"'\\s<>]+`,"gi");for(let u of s.match(re)||[])push(u)}return out}async function mapPool(items,limit,fn){let out=[],i=0;async function worker(){for(;i<items.length;){let idx=i++;try{out[idx]=await fn(items[idx])}catch{out[idx]=null}}}return await Promise.all(Array.from({length:Math.min(limit,items.length||1)},worker)),out}function robotsSitemaps(robots,origin){let https=/^https:/i.test(String(origin||"")),out=[];for(let line of String(robots||"").split(`
`)){if(!/^\s*sitemap:/i.test(line))continue;let u=line.replace(/^\s*sitemap:/i,"").trim();u&&(https&&/^http:\/\//i.test(u)&&out.push(u.replace(/^http:/i,"https:")),out.push(u))}return[...new Set(out)]}function unwrapBrowserXml(html){let m=html.match(/<div[^>]+id=["']webkit-xml-viewer-source-xml["'][^>]*>([\s\S]*?)<\/div>/i);return m?m[1]:html}function httpsTwin(url,origin){if(!/^https:/i.test(String(origin||""))||!/^http:\/\//i.test(String(url||"")))return"";try{let a=new URL(url).host.replace(/^www\./,""),b=new URL(origin).host.replace(/^www\./,"");return a===b?url.replace(/^http:/i,"https:"):""}catch{return""}}function makeTextFetcher(browserMode,origin=""){return async url=>{let twin=httpsTwin(url,origin);if(twin){let t=await tryText(twin);if(t)return t}let plain=await tryText(url);if(plain)return plain;if(!browserMode)return null;let b=await renderFetch(url);return!b||!b.ok||!b.html?null:unwrapBrowserXml(b.html)}}async function getNewsSitemapEntries(origin,robots,fetchText2=tryText){let fromRobots=robotsSitemaps(robots,origin),cands=[...new Set([...fromRobots.filter(s=>/news|last-news|google|yandex|turbo/i.test(s)),origin+"/news-sitemap.xml",origin+"/google-news-sitemap.xml",origin+"/sitemap-google.xml",origin+"/sitemap-yandex.xml",origin+"/sitemap-news.xml"])];for(let url of cands){let xml=await fetchText2(url);if(!xml)continue;let items=await entriesFromSitemap(xml,0);if(items.length)return items}let idx=fromRobots.filter(u=>/\/sitemap(?:[-_.]?index)?\.xml(?:$|\?)/i.test(u)).slice(0,2),roots=idx.length?idx:fromRobots.length?[]:[origin+"/sitemap.xml"];for(let root of roots){let xml=await fetchText2(root);if(!xml||!/<sitemapindex/i.test(xml))continue;let kids=parseSitemapIndex(xml).map(k=>k.loc).filter(u=>/google|yandex|turbo/i.test(u)&&!cands.includes(u));for(let url of kids.slice(0,3)){let kx=await fetchText2(url);if(!kx)continue;let items=await entriesFromSitemap(kx,0);if(items.length)return items}}return[]}async function collectSitemapCandidates(origin,robots,fromD,toD,budget){let{maxMaps=40,maxCands=300,maxCollect=Math.max(maxCands*10,2e3),deadline,fetchText:fetchText2=tryText,blindOk=!0,slugHints=[],collectStats={}}=budget||{},skipPaths=[];try{let kp=lookupKnown(origin);skipPaths=kp&&kp.skipPaths||[]}catch{}let presetSkip=u=>{if(!skipPaths.length)return!1;try{let p=new URL(u).pathname;return skipPaths.some(sp=>p.includes(sp))}catch{return!1}},fromMs=fromD?+fromD:-1/0,toMs=toD?+toD:1/0,staleN=0,staleByMemory=u=>{let d=parseDate(dateStore.get(u));return!d||inRange(d,fromD,toD)?!1:(staleN++,!0)},childTopMs=Number.isFinite(toMs)?toMs+21*864e5:1/0,fromRobots=robotsSitemaps(robots,origin),roots=[...new Set([...fromRobots,origin+"/sitemap.xml",origin+"/sitemap_index.xml",origin+"/sitemap-index.xml",origin+"/sitemapindex.xml",origin+"/sitemap/sitemap.xml"])].sort((a,b)=>(isJunkMapUrl(a)?1:0)-(isJunkMapUrl(b)?1:0)),cands=[],blind=[],seenMap=new Set,taxoSkipped=0,mapsFetched=0,mapsFailed=0,childInRange=lm=>{let d=lm?parseDate(lm):null,t=d?+d:NaN;return Number.isFinite(t)?t>=fromMs&&t<=childTopMs:!0};async function walk(url,depth){if(mapsFetched>=maxMaps||cands.length>=maxCollect||deadline&&Date.now()>deadline||seenMap.has(url))return;if(seenMap.add(url),isTaxonomyMap(url)){taxoSkipped++;return}let xml=await fetchText2(url);if(!xml||!/<(urlset|sitemapindex)\b/i.test(xml)){depth>0&&mapsFailed++;return}if(mapsFetched++,/<sitemapindex/i.test(xml)&&depth<3){let ymOf=k=>mapYearMonth(k.loc),keyOf=k=>{if(k.lastmod)return String(k.lastmod);let v=ymOf(k);return v?v.y+"-"+String(v.mo).padStart(2,"0"):""},fromY=fromD?fromD.getFullYear():-1/0,toY=toD?toD.getFullYear():1/0,kidOk=k=>{if(k.lastmod)return childInRange(k.lastmod);let v=ymOf(k);return v?v.y>=fromY&&v.y<=toY:!0},kids=parseSitemapIndex(xml).filter(kidOk).sort((a,b)=>keyOf(b).localeCompare(keyOf(a))).sort((a,b)=>(isJunkMapUrl(a.loc)?1:0)-(isJunkMapUrl(b.loc)?1:0)),keySet=new Set(kids.map(keyOf));if(kids.length>1&&(kids.every(k=>!keyOf(k))||keySet.size===1)){let both=bothEnds(kids);kids.length=0,kids.push(...both)}for(let k of kids)if(await walk(new URL(k.loc,url).href,depth+1),mapsFetched>=maxMaps||cands.length>=maxCollect||deadline&&Date.now()>deadline)break;return}let dated=[],undated=[],urlDated=0;for(let e of parseUrlset(xml)){let abs;try{abs=new URL(e.loc,url).href}catch{continue}if(isListingUrl(abs)||presetSkip(abs)||staleByMemory(canonUrl(abs)))continue;let t=e.lastmod?+parseDate(e.lastmod):NaN;if(!Number.isFinite(t))try{if(new URL(abs).pathname==="/")continue}catch{}if(Number.isFinite(t)){if(t<fromMs||t>toMs)continue;dated.push({loc:canonUrl(abs),lm:e.lastmod});continue}let du=dateFromUrl(abs);if(du){urlDated++;let dt=+du;if(dt<fromMs||dt>toMs)continue}undated.push({loc:canonUrl(abs),lm:""})}if(!dated.length&&!urlDated&&undated.length){for(let c of bothEnds(undated)){if(blind.length>=maxCollect)break;blind.push(c)}return}for(let c of dated)if(cands.push(c),cands.length>=maxCollect)return;for(let c of bothEnds(undated))if(cands.push(c),cands.length>=maxCollect)return}for(let r of roots)if(await walk(r,0),cands.length>=maxCollect||mapsFetched>=maxMaps)break;if(blindOk)for(let c of blind){if(cands.length>=maxCollect)break;cands.push(c)}let uniq=new Map;for(let c of cands)uniq.has(c.loc)||uniq.set(c.loc,c);let all=[...uniq.values()].sort((a,b)=>String(b.lm).localeCompare(String(a.lm)));staleN&&(collectStats.stale=staleN),collectStats.pool=all.length,collectStats.poolKeys=new Set(all.map(c=>urlKey(c.loc))),collectStats.capped=all.length>=maxCollect,collectStats.roots=roots.length,collectStats.maps=mapsFetched,collectStats.mapsFailed=mapsFailed,taxoSkipped?collectStats.taxo=taxoSkipped:delete collectStats.taxo;let dayOf3=c=>{let d=c.lm&&parseDate(c.lm)||dateFromUrl(c.loc);return d&&ymd(d)||""},hinted=c=>slugHints.length>0&&slugHints.some(h=>c.loc.toLowerCase().includes(h)),finish=list=>{collectStats.nodate=list.filter(c=>!dayOf3(c)).length;let h=list.filter(hinted).length;return h?collectStats.hinted=h:delete collectStats.hinted,list};if(all.length<=maxCands)return finish(all);let byDay=new Map;for(let c of all){let k=dayOf3(c);byDay.has(k)||byDay.set(k,[]),byDay.get(k).push(c)}for(let arr of byDay.values())arr.sort((a,b)=>(hinted(b)?1:0)-(hinted(a)?1:0));let days=[...byDay.keys()].filter(Boolean).sort().reverse(),noDay=byDay.get("")||[],out=[];for(let i=0;out.length<maxCands;i++){let added=0;for(let d of days){let arr=byDay.get(d);if(i<arr.length&&(out.push(arr[i]),added++,out.length>=maxCands))break}if(!added)break}for(let c of noDay){if(out.length>=maxCands)break;out.push(c)}return finish(out)}async function entriesFromSitemap(xml,depth){let items=parseNewsSitemap(xml).filter(x=>x.title&&x.date);if(items.length)return items;if(depth<1&&/<sitemapindex/i.test(xml)){let children=(xml.match(/<sitemap>[\s\S]*?<\/sitemap>/g)||[]).map(b=>({loc:(b.match(/<loc>([^<]+)<\/loc>/)||[])[1]?.trim(),lm:(b.match(/<lastmod>([^<]+)<\/lastmod>/)||[])[1]||""})).filter(c=>c.loc);children.sort((a,b)=>String(b.lm).localeCompare(String(a.lm)));for(let c of children.slice(0,5)){let cx=await tryText(c.loc);if(cx&&(items.push(...await entriesFromSitemap(cx,depth+1)),items.length>500))break}}return items}function parseSearchForm(html,origin){let forms=html.match(/<form\b[\s\S]*?<\/form>/gi)||[],best=null,bestScore=0;for(let f of forms){if(/method\s*=\s*["']post["']/i.test(f))continue;let action=(f.match(/\baction\s*=\s*["']([^"']*)["']/i)||[])[1]||"",cls=(f.match(/class\s*=\s*["']([^"']*)["']/i)||[])[1]||"",inputs=f.match(/<input\b[^>]*>/gi)||[],qname=null,qscore=-1,hidden=[];for(let inp of inputs){let type=((inp.match(/\btype\s*=\s*["']([^"']+)["']/i)||[])[1]||"text").toLowerCase(),name=(inp.match(/\bname\s*=\s*["']([^"']+)["']/i)||[])[1];if(!name)continue;if(type==="hidden"){hidden.push([name,(inp.match(/\bvalue\s*=\s*["']([^"']*)["']/i)||[])[1]||""]);continue}if(/submit|button|checkbox|radio|image|file/.test(type))continue;let s=0;type==="search"&&(s+=3),/^(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)$/i.test(name)?s+=2:/search|query|поиск|іздеу/i.test(name)&&(s+=1),s>qscore&&(qscore=s,qname=name)}if(!qname||qscore<=0)continue;let formScore=qscore;/role\s*=\s*["']search["']/i.test(f)&&(formScore+=2),/search|query|поиск|іздеу/i.test(action)&&(formScore+=2),/search|query|поиск/i.test(cls)&&(formScore+=1),formScore>bestScore&&(bestScore=formScore,best={action,qname,hidden})}if(!best)return null;let url;try{url=new URL(best.action||"/",origin)}catch{return null}for(let[k,v]of best.hidden)if(v&&k!==best.qname)try{url.searchParams.set(k,v)}catch{}return url.searchParams.set(best.qname,"__MCQ__"),url.toString().replace("__MCQ__","{q}")}function searchLooksReal(realHtml,junkHtml,origin,probeWord){if(!realHtml)return{ok:!1,why:"нет ответа"};let real=new Set(extractLinks(realHtml,origin));if(real.size===0)return{ok:!1,realN:0,junkN:0,uniqueN:0,why:"ссылок-статей нет (оболочка/JS-выдача)"};let junk=junkHtml?new Set(extractLinks(junkHtml,origin)):new Set,uniqueN=0;for(let u of real)junk.has(u)||uniqueN++;let stat={realN:real.size,junkN:junk.size,uniqueN};if(probeWord){let w=String(probeWord).toLowerCase().split(/\s+/).filter(Boolean)[0]||"",stem=w.length>5?w.slice(0,Math.max(5,w.length-2)):w;if(stem&&!realHtml.toLowerCase().includes(stem))return{...stat,ok:!1,why:"искомого слова нет в выдаче (это лента, а не результаты)"}}return junk.size===0?{...stat,ok:!0,why:"мусорный запрос пуст"}:uniqueN>=2?{...stat,ok:!0,why:"выдача отличается от мусорной"}:{...stat,ok:!1,why:"та же страница, что и на мусорный запрос (параметр игнорируется)"}}async function detectSearch(origin,homeHtml,override){let enc=encodeURIComponent;if(override){let tpls=[].concat(override).filter(t=>typeof t=="string"&&t),hashOnly=t=>{let i=t.indexOf("#");return i>=0&&t.indexOf("{q}")>i},dropped=tpls.filter(hashOnly);if(tpls=tpls.filter(t=>!hashOnly(t)),!tpls.length)return dropped.length?{kind:"none",warn:"ключ в шаблоне стоит после «#» — такой адрес серверу не передаётся, выдачу рисует скрипт в браузере (нужен render)"}:null;let mk2=tpl=>(q,n)=>tpl.replace(/\{q\}/g,enc(q)).replace(/\{page\}/g,n).replace(/\{off(\d+)\}/g,(_,step2)=>(n-1)*+step2).replace(/\{wpage\}/g,n<=1?"":`page/${n}/`).replace(/\{bpage\}/g,n<=1?"":`pagen${n}/`).replace(/\{dpage\}/g,n<=1?"":`page-${n}/`),builds=tpls.map(mk2);return{kind:"override",hasPage:tpls.some(t=>/\{page\}|\{off\d+\}|\{wpage\}|\{bpage\}|\{dpage\}/.test(t)),builds,build:builds[0]}}let formTpl=parseSearchForm(homeHtml,origin);if(formTpl){let real=await tryText(formTpl.replace("{q}",enc("президент"))),junk=await tryText(formTpl.replace("{q}",enc("qwszxcvnonsense12345")));if(searchLooksReal(real,junk,origin,"президент").ok){let sep=formTpl.includes("?")?"&":"?";return{kind:"form",hasPage:!0,build:(q,n)=>n<=1?formTpl.replace("{q}",enc(q)):formTpl.replace("{q}",enc(q))+sep+"page="+n}}}if(isWordPress(homeHtml))return{kind:"wordpress",hasPage:!0,build:(q,n)=>n<=1?`${origin}/?s=${enc(q)}`:`${origin}/page/${n}/?s=${enc(q)}`};let cands=["/search/?text=","/search/?q=","/search/?search_text=","/search/?query=","/search?text=","/search?q=","/search?search_text=","/search?query=","/search_results/?q=","/search_results/?text=","/results/?q=","/?s=","/?q=","/?query=","/?search_text=","/?searchword="],pres=[];for(let m of String(homeHtml||"").matchAll(/href="\/(ru|kz|kk|en)\//g))pres.includes("/"+m[1])||pres.push("/"+m[1]);if(pres.length)for(let pre of pres.slice(0,2))for(let c of["/search/?q=","/search/?text=","/search/?query=","/search?q="])cands.push(pre+c);let t0=Date.now();for(let path of cands){if(Date.now()-t0>2e4)break;let a=await tryText(origin+path+enc("президент")),b=await tryText(origin+path+enc("qwszxcvnonsense12345"));if(searchLooksReal(a,b,origin,"президент").ok){let base=origin+path,sep=path.includes("?")?"&":"?";return{kind:"native",hasPage:!0,build:(q,n)=>n<=1?base+enc(q):`${base}${enc(q)}${sep}page=${n}`}}}return null}function telegramChannel(input){let s=String(input||"").trim();if(/^@[A-Za-z0-9_]{4,}$/.test(s))return s.slice(1);let m=s.match(/(?:t|telegram)\.me\/(?:s\/)?(@?[A-Za-z0-9_]{4,})/i);if(m){let n=m[1].replace(/^@/,"");if(!/^(s|joinchat|addstickers|addemoji|proxy|share|iv|setlanguage|bg)$/i.test(n))return n}return null}function parseTelegramPosts(html,channel){let out=[],re=/data-post="[^"/]+\/(\d+)"([\s\S]*?)(?=data-post="|$)/g,m;for(;m=re.exec(html);){let id=+m[1],chunk=m[2],dm2=chunk.match(/<time[^>]+datetime="([^"]+)"/),tm=chunk.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div class="tgme_widget_message_(?:footer|reply|info)|<\/div>)/)||chunk.match(/<div class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/),text=tm?tm[1]:"";text=text.replace(/<br\s*\/?>/gi,`
`).replace(/<[^>]+>/g,""),text=decodeEntities(text).replace(/[ \t]+/g," ").replace(/\n{2,}/g,`
`).trim(),id&&dm2&&out.push({id,url:"https://t.me/"+channel+"/"+id,date:dm2[1],text})}return out}async function searchTelegram(channel,opts){let morph=opts.morph!==!1,groups=parseQuery(opts.keyword,morph,opts.near),exGroups=parseQuery(opts.exclude||"",morph),terms=queryTerms(groups),hasKw=t=>matchGroups((t||"").toLowerCase(),groups),hasExclude=t=>exGroups.length>0&&matchGroups((t||"").toLowerCase(),exGroups),fromD=startOfDay(opts.from),toD=endOfDay(opts.to),base=TG_BASE+channel,rows=[],notes=[],seen=new Set,MS=45e3,MAXP=80,before=null,stop=!1,pages=0,got=0,t0=Date.now(),stopWhy="";for(;!stop&&pages<MAXP&&Date.now()-t0<MS;){pages++;let url=before?base+"?before="+before:base,info=await fetchPlain(url);if(!info.ok&&(info.status===429||info.status>=500)&&(await sleep(1500),info=await fetchPlain(url)),!info.ok){let why=info.status?"HTTP "+info.status:info.err||"не ответил";stopWhy=pages===1?"канал не открылся ("+why+") — частный/не существует?":"лента оборвалась на "+pages+"-й странице ("+why+")";break}let posts=parseTelegramPosts(info.text,channel);if(!posts.length){stopWhy=pages===1?"постов не видно (частный канал? нужен t.me/s/)":"лента кончилась";break}got+=posts.length;let oldest=null,minId=null;for(let p of posts){let d=parseDate(p.date);if(d&&(!oldest||d<oldest)&&(oldest=d),(minId===null||p.id<minId)&&(minId=p.id),seen.has(p.id)||(seen.add(p.id),!inRange(p.date,fromD,toD))||!p.text||!hasKw(p.text)||hasExclude(p.text))continue;let iso2=d?d.toISOString():"",title=p.text.split(`
`)[0].slice(0,90)||"(без текста)";rows.push({source:"t.me/"+channel,title,url:p.url,date:iso2,dateSource:"post",channel:"telegram",match:"post",snippet:snippetFor(p.text,title,terms)})}if(fromD&&oldest&&oldest<fromD&&(stop=!0,stopWhy="дошли до начала периода"),!stop&&(minId===null||minId===before)){stopWhy="лента не листается дальше";break}before=minId}return stopWhy||(stopWhy=pages>=MAXP?"упёрлись в "+MAXP+" страниц":"стоп по времени (45 с)"),notes.push(`постов просмотрено ${got} (страниц ${pages}, ${stopWhy}), совпало ${rows.length}`),{rows,channel:"telegram",note:notes.filter(Boolean).join("; ")}}function balancedJson(str2,start){let depth=0,inStr=!1,esc3=!1;for(let i=start;i<str2.length;i++){let c=str2[i];if(inStr)esc3?esc3=!1:c==="\\"?esc3=!0:c==='"'&&(inStr=!1);else if(c==='"')inStr=!0;else if(c==="{")depth++;else if(c==="}"&&--depth===0)return str2.slice(start,i+1)}return null}function extractYtInitialData(html){let mk2=html.indexOf("ytInitialData");if(mk2<0)return null;let eq=html.indexOf("=",mk2),br=html.indexOf("{",eq);if(eq<0||br<0)return null;let raw=balancedJson(html,br);try{return raw?JSON.parse(raw):null}catch{return null}}function collectVideoRenderers(obj,out){if(!(!obj||typeof obj!="object"))if(obj.videoRenderer&&obj.videoRenderer.videoId&&out.push(obj.videoRenderer),Array.isArray(obj))for(let v of obj)collectVideoRenderers(v,out);else for(let k in obj)collectVideoRenderers(obj[k],out)}function ytFuzzDays(text){let s=String(text||"").toLowerCase();return/секунд|минут|час|sec|min|hour|сағат|мину?т|только что|сейчас|сегодня|today|бүгін/.test(s)?0:/недел|апта|week/.test(s)?7:/месяц|month|\bай\b/.test(s)?31:/год|лет|жыл|year/.test(s)?366:/дн|день|сутк|күн|тәулік|day|вчера|yesterday|кеше/.test(s)?1:31}function ytExactDate(html){let h=String(html||""),m=/"uploadDate"\s*:\s*"([^"]{4,40})"/.exec(h);return m||(m=/itemprop="(?:datePublished|uploadDate)"[^>]*content="([^"]{4,40})"/.exec(h)),m||(m=/<meta[^>]+content="([^"]{4,40})"[^>]*itemprop="(?:datePublished|uploadDate)"/.exec(h)),m?parseDate(m[1]):null}function ytRangeFor(range,from,now=new Date){let want=YT_ORDER.indexOf(range)>=0?range:"month";if(!(from?parseDate(from):null))return want;let days=(now.getTime()-startOfDay(from).getTime())/864e5,need=days<=1?"today":days<=7?"week":days<=31?"month":"year";return YT_ORDER.indexOf(need)>YT_ORDER.indexOf(want)?need:want}async function searchYouTube(keyword,opts){let asked=opts&&opts.ytRange||"month",range=ytRangeFor(asked,opts&&opts.from),morph=opts.morph!==!1,groups=parseQuery(keyword,morph,opts.near),exGroups=parseQuery(opts.exclude||"",morph),terms=queryTerms(groups),sp=YT_SP[range]||YT_SP.month,url=`${YT_BASE}/results?search_query=${encodeURIComponent(keyword)}&sp=${sp}`,info=await fetchInfo(url);if(!info.ok)return{rows:[],channel:"youtube",note:"YouTube не открылся"+(info.status?" (HTTP "+info.status+")":"")};let data=extractYtInitialData(info.text);if(!data)return{rows:[],channel:"youtube",note:"не разобрал выдачу (согласие/капча?)"};let vrs=[];collectVideoRenderers(data,vrs);let rows=[],seen=new Set;for(let vr of vrs){let id=vr.videoId;if(!id||seen.has(id))continue;seen.add(id);let title=ytRuns(vr.title),pub=ytRuns(vr.publishedTimeText),ch=ytRuns(vr.ownerText||vr.longBylineText),snip=vr.detailedMetadataSnippets&&vr.detailedMetadataSnippets[0]&&ytRuns(vr.detailedMetadataSnippets[0].snippetText)||ytRuns(vr.descriptionSnippet),hay=(title+" "+snip+" "+ch).toLowerCase();if(groups.length&&!matchGroups(hay,groups)||exGroups.length&&matchGroups(hay,exGroups))continue;let d=pub?parseDate(pub):null;rows.push({source:"youtube",title:title||id,url:`${YT_BASE}/watch?v=`+id,date:d?d.toISOString():"",channel:"youtube",match:"video",snippet:(ch?"["+ch+"] ":"")+(makeSnippet(snip||title,terms)||pub),_fuzz:ytFuzzDays(pub)})}let fromD=startOfDay(opts.from),toD=endOfDay(opts.to),deadline=Date.now()+YT_DATE_MS,exact=0,guessed=0,cut2=0,kept=[];await mapPool(rows.slice(0,YT_MAX_DATES),4,async r=>{let d=parseDate(dateStore.get(r.url));if(!d&&Date.now()<deadline){let html=await tryPlain(r.url);d=html?ytExactDate(html):null,d&&dateStore.set(r.url,d.toISOString())}d?(exact++,r.date=d.toISOString()):guessed++,r._exact=!!d});for(let r of rows){if(r._exact){if(!inRange(r.date,fromD,toD)){cut2++;continue}}else{let d=parseDate(r.date),tol=(r._fuzz||0)*864e5;if(d&&(fromD&&+d+tol<+fromD||toD&&+d-tol>+toD)){cut2++;continue}}delete r._fuzz,delete r._exact,kept.push(r)}let bits=["фильтр YouTube: "+range+(range!==asked?" (в настройке «"+asked+"» — расширен, иначе окно не попадает в выдачу)":"")];return cut2&&bits.push("вне периода отсеяно "+cut2),guessed&&bits.push("дат со страницы не прочитали: "+guessed+" — у них дата приблизительная"),{rows:kept,channel:"youtube",note:`видео: ${kept.length} (${bits.join("; ")})`}}async function searchSite(siteInput,opts){let tgName=telegramChannel(siteInput);if(tgName)return searchTelegram(tgName,opts);let{keyword,from,to,maxPages=3,override,maxArticles=60}=opts,origin=normalizeOrigin(siteInput);if(!origin)return{rows:[],channel:"bad-url",note:"не разобрал адрес"};let preset=lookupKnown(origin);if(preset&&preset.dead)return{rows:[],channel:"пропущен",note:"сайт пропущен: "+(preset.note||"помечен нерабочим"),stats:{render:null,external:null,sitesearch:null}};let morph=opts.morph!==!1,groups=parseQuery(keyword,morph,opts.near),seekKw=opts.seek&&String(opts.seek).trim()||keyword,seekGroups=opts.seek?parseQuery(seekKw,morph):groups,exGroups=parseQuery(opts.exclude||"",morph),terms=queryTerms(groups),hasKw=t=>matchGroups((t||"").toLowerCase(),groups),kwInTitle=t=>matchGroups((t||"").toLowerCase(),groups),hasExclude=t=>exGroups.length>0&&matchGroups((t||"").toLowerCase(),exGroups),fromD=startOfDay(from),toD=endOfDay(to),rows=[],channels=[],notes=[],brokenEntries=[],entryErr=(channel,status,url)=>{brokenEntries.some(x=>x.channel===channel)||brokenEntries.push({channel,status,url:String(url||"")})},diagRec=opts.diag?[]:null,diagMeta=opts.diag?{searchUrl:null,rawLinks:[],searchKind:null,renderUrl:null}:null,svcDates=new Map,homeInfo=await fetchInfo(origin+"/"),homePlainErr="",siteCollect=null;if((h=>!h.ok&&(h.err||[401,403,429,503].includes(h.status))||h.ok&&isChallengePage(h.text))(homeInfo)){let alt=toggleWww(origin);if(alt&&alt!==origin){let a=await fetchInfo(alt+"/");if(a.ok&&!isChallengePage(a.text)){let was=homeInfo.err?homeInfo.err:homeInfo.ok?"заглушка защиты":"HTTP "+homeInfo.status,hn=o=>{try{return new URL(o).host}catch{return o}};notes.push("главная: переключился на "+hn(alt)+" (на "+hn(origin)+" — "+was+")"),origin=alt,homeInfo=a}}}let answeredOrigin=origin;try{let fu=homeInfo.ok&&homeInfo.url?new URL(homeInfo.url):null;fu&&fu.hostname.replace(/^www\./,"")===host(origin).replace(/^www\./,"")&&(answeredOrigin=fu.origin)}catch{}let browserMode=!1;if(homeInfo.ok&&isChallengePage(homeInfo.text)&&(homeInfo={ok:!1,status:homeInfo.status,err:"страница-заглушка защиты"},notes.push("главная: за защитой (Cloudflare) — иду браузером")),!homeInfo.ok){homePlainErr=homeInfo.err||(homeInfo.status?"HTTP "+homeInfo.status:"не открылась");let b=await renderFetch(origin+"/");b&&b.ok&&b.html&&b.html.length>500&&!isChallengePage(b.html)?(homeInfo={ok:!0,status:b.status||200,text:b.html},browserMode=!0,notes.push("главная: через браузер (обычным запросом — "+homePlainErr+")")):b&&b.err&&notes.push("главная: браузером тоже не вышло — "+b.err)}if(homeInfo.ok||notes.push("главная: "+(homeInfo.status?"HTTP "+homeInfo.status:homeInfo.err||"не открылась")),!homeInfo.ok&&!homeInfo.status&&UNREACH.test(String(homeInfo.err||"")))return{rows:[],channel:"недоступен",note:notes.join("; ")+"; сайт недоступен с этого компьютера — каналы не запускались",stats:{render:null,external:null,sitesearch:null,unreachable:String(homeInfo.err)}};let homeHtml=homeInfo.text||"",fetchText2=makeTextFetcher(browserMode,origin),robots=await fetchText2(origin+"/robots.txt")||"";/<[a-z]/i.test(robots)&&(robots=decodeEntities(robots.replace(/<[^>]+>/g,`
`)));let listedInWindow=new Set,rssListed=new Set,rssFull=0,rssCover=null,siteNewest=null,newsList=null;try{let feeds=[...new Set([...[].concat((lookupKnown(origin)||{}).rss||[]).map(h=>{try{return new URL(h,origin).href}catch{return null}}).filter(Boolean),...extractFeedLinks(homeHtml).map(h=>{try{return new URL(h,origin).href}catch{return null}}).filter(Boolean),origin+"/rss",origin+"/rss/",origin+"/feed/",origin+"/rss.xml"])];for(let fu of feeds.slice(0,4)){let xml=await tryText(fu);if(!xml||!/<(item|entry)[\s>]/i.test(xml))continue;let its=parseFeed(xml);if(its.length){channels.push("rss"),rssCover={oldest:null,undated:0,untitled:its.filter(x=>!x.title).length,n:its.length};for(let it of its){let d=parseDate(it.date);d&&(!siteNewest||+d>+siteNewest)&&(siteNewest=d),d?(!rssCover.oldest||+d<+rssCover.oldest)&&(rssCover.oldest=d):rssCover.undated++;let iso2=d?d.toISOString():null;if(iso2&&it.link&&inRange(iso2,fromD,toD))try{let k=urlKey(new URL(it.link,origin).href);listedInWindow.add(k),rssListed.add(k)}catch{}let hay=it.title+" "+(it.description||"")+" "+(it.full||"");if(it.full&&rssFull++,it.title&&hasKw(hay)&&!hasExclude(hay)&&inRange(iso2,fromD,toD)){let u;try{u=new URL(it.link,origin).href}catch{continue}rows.push({source:host(origin),title:it.title,url:u,date:iso2||"",dateSource:"feed",channel:"rss",match:kwInTitle(it.title)?"title":"body",snippet:snippetFor((it.description||"")+" "+(it.full||"")+" "+it.title,it.title,terms)})}}rssFull&&notes.push(`rss: в ленте полный текст статей (${rssFull} из ${its.length}) — ключ ищется и в тексте, без скачивания`);break}}}catch(e){notes.push("rss: "+e.message)}try{let entries=await getNewsSitemapEntries(origin,robots,fetchText2);if(entries.length){channels.push("news-sitemap");for(let e of entries)e.url&&e.date&&inRange(e.date,fromD,toD)&&listedInWindow.add(urlKey(e.url)),hasKw(e.title)&&!hasExclude(e.title)&&inRange(e.date,fromD,toD)&&rows.push({source:host(origin),title:e.title,url:e.url,date:e.date,dateSource:"feed",channel:"news-sitemap",match:"title",snippet:snippetFor(e.title,e.title,terms)});if(fromD){let oldest=null,undated=0,inWin=[];for(let e of entries){let d=e.date?parseDate(e.date):null;if(!d){undated++;continue}(!oldest||+d<+oldest)&&(oldest=d),e.url&&inRange(e.date,fromD,toD)&&inWin.push({loc:e.url,lm:e.date})}newsList={oldest,undated,inWin,total:entries.length,untitled:entries.filter(e=>!e.title).length}}}}catch(e){notes.push("sitemap: "+e.message)}let notRun=[],tally={},pick={hint:opts.datePick||"",seen:{}},haveKeys=()=>new Set(rows.map(r=>urlKey(r.url))),browserBudget={left:16},wpAdded=0,wpProven=!1,wpWhy="";try{let wpOff=!!(lookupKnown(origin)||{}).noWp;if(wpOff&&groups.length&&/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(homeHtml)&&notes.push("wp-api: выключен пресетом (вход сайта не работает)"),!wpOff&&/wp-json|\/wp-content\/|\/wp-includes\/|api\.w\.org/.test(homeHtml)&&groups.length){let wpDeadline=Date.now()+25e3,p2=n=>String(n).padStart(2,"0"),wpDate=d=>d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate())+"T"+p2(d.getHours())+":"+p2(d.getMinutes())+":"+p2(d.getSeconds()),have=new Set(rows.map(r=>urlKey(r.url))),seen=new Set,wpRows=[],needCheck=[],alive=!1,wpTried=0,wpNoAnswer=0,wpBadJson=0,wpAll=new Set,truncated=!1,PER=50,MAXPAGE=6,JUNK_TYPE=/^(page|attachment|nav_menu_item|wp_|revision|customize_|oembed_|user_request|product_variation|acf-|elementor_|e-|jet-|tablepress)/,bases=["posts"],typesKnown=!1;try{let rawT=await tryText(origin+"/wp-json/wp/v2/types"),types=rawT?JSON.parse(rawT):null;if(types&&typeof types=="object"&&!Array.isArray(types)){typesKnown=!0;for(let k of Object.keys(types)){let t=types[k]||{},base=t.rest_base||k;!base||JUNK_TYPE.test(k)||JUNK_TYPE.test(base)||t.rest_namespace&&t.rest_namespace!=="wp/v2"||bases.includes(base)||bases.push(base)}}}catch{typesKnown=!1}let NEWSY=/news|articl|novost|material|publicat|zhana|habar|jańalyq/i,useBases=[bases[0],...bases.slice(1).sort((a,b)=>(NEWSY.test(b)?1:0)-(NEWSY.test(a)?1:0))].slice(0,4);for(let base of useBases)for(let g of seekGroups){let phrase=g.words.map(w=>w.text).join(" ");if(phrase)for(let page=1;page<=MAXPAGE;page++){if(Date.now()>wpDeadline){truncated=!0;break}let url=origin+"/wp-json/wp/v2/"+base+"?search="+encodeURIComponent(phrase)+"&after="+wpDate(fromD)+"&before="+wpDate(toD)+"&per_page="+PER+"&page="+page+"&orderby=date&order=desc&_fields=date,date_gmt,link,title,excerpt";wpTried++;let raw=await tryText(url);if(!raw){wpNoAnswer++;break}let list=null;try{list=JSON.parse(raw.replace(/^\s*<pre[^>]*>/i,"").replace(/<\/pre>\s*$/i,""))}catch{wpBadJson++;break}if(!Array.isArray(list)){wpBadJson++;break}alive=!0;for(let it of list){let link=it&&it.link;if(!link)continue;let u=canonUrl(link),uk=urlKey(u),wpWhen=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(String(it.date_gmt||""))&&!/^0000/.test(it.date_gmt)?String(it.date_gmt).replace(/Z?$/,"Z"):it.date;if(inRange(wpWhen,fromD,toD)){wpAll.add(uk);let wd=parseDate(wpWhen);wd&&svcDates.set(uk,wd.toISOString())}if(have.has(uk)||seen.has(uk))continue;seen.add(uk);let flat2=h=>decodeEntities(String(h||"").replace(/<[^>]+>/g," ")).replace(/\s+/g," ").trim(),title=flat2(it.title&&it.title.rendered),excerpt=flat2(it.excerpt&&it.excerpt.rendered);inRange(wpWhen,fromD,toD)&&(hasExclude(title)||hasExclude(excerpt)||(matchGroups((title+" "+excerpt).toLowerCase(),groups)?wpRows.push({source:host(origin),title,url:u,date:wpWhen,dateSource:"api",channel:"wp-api",match:kwInTitle(title)?"title":"body",snippet:makeSnippet(excerpt||title,terms)}):needCheck.push(u)))}if(list.length<PER)break;page===MAXPAGE&&(truncated=!0)}}if(alive){channels.push("wp-api"),wpRows.forEach(r=>rows.push(r)),wpAdded=wpRows.length;let checked=0;if(needCheck.length&&Date.now()<wpDeadline){let{rows:pr}=await enrichUrls(needCheck,{groups,exclude:exGroups,fromD,toD,originHost:host(origin),channelLabel:"wp-api",deadline:wpDeadline+3e4,maxFetch:60,diag:diagRec,tally});pr.forEach(r=>{rows.push(r),checked++}),wpAdded+=checked}let priorInWindow=rows.filter(r=>(r.channel==="rss"||r.channel==="news-sitemap")&&inRange(r.date,fromD,toD)).map(r=>urlKey(r.url)),missed=priorInWindow.filter(u=>!wpAll.has(u)),crossChecked=priorInWindow.length>0;wpProven=!truncated&&missed.length===0&&(crossChecked||typesKnown&&wpRows.length>0),wpWhy=truncated?"ответ обрезан по бюджету":missed.length?"вход не увидел "+missed.length+" материал(ов), найденных лентой":crossChecked?"сверено с лентой: "+priorInWindow.length+" из "+priorInWindow.length:typesKnown?"типов записей опрошено "+useBases.length:"список типов записей недоступен",notes.push("wp-api: сайт сам отобрал по слову и датам, взято "+wpAdded+(checked?" (из них "+checked+" проверены по тексту)":"")+(useBases.length>1?"; типы записей: "+useBases.join(", "):"")+"; полнота: "+(wpProven?"подтверждена":"не подтверждена")+" ("+wpWhy+")")}else{let why=wpTried?wpNoAnswer?"вход не ответил (таймаут или бюджет канала 25 с), попыток "+wpTried:wpBadJson?"вход отдал не список записей — похоже, REST закрыт, попыток "+wpTried:"вход промолчал, попыток "+wpTried:"ни одного запроса не ушло (кончился бюджет канала ещё до старта)";notes.push("wp-api: у сайта есть признаки WordPress, но "+why)}}}catch(e){notes.push("wp-api: "+e.message)}let apiProven=!1,apiWhy="",apiSeen=0,apiTitles=!1,depthProven=!1,depthWhy="",depthLeft=0,depthLeftCapped=!1;try{let kApi=lookupKnown(origin),A=kApi&&kApi.api&&typeof kApi.api=="object"?kApi.api:null;if(A&&A.url&&A.link&&fromD&&toD&&groups.length){channels.push("api");let pick2=(o,path)=>String(path||"").split(".").reduce((x,k)=>{if(x==null)return x;let i=k.indexOf(":");if(i>0){let arr=x[k.slice(0,i)],hit=Array.isArray(arr)&&arr.find(e=>e&&e.name===k.slice(i+1));return hit?hit.value:void 0}return x[k]},o),dayShift=(d,k)=>{let x=new Date(d);return x.setDate(x.getDate()+k),ymd(x)},deadline=Date.now()+(A.budgetMs||9e4),maxPages2=A.maxPages||60,perPage=A.perPage||20,pages=0,seenN=0,inWinN=0,added=0,done=!1,why="",future=0,have=new Set(rows.map(r=>urlKey(r.url))),dateOf=it=>{let raw=pick2(it,A.date);if(raw==null||raw==="")return null;if(A.dateUnix)return Number.isFinite(+raw)&&+raw>0?new Date(+raw*1e3):null;let s=A.dateZone?String(raw).trim().replace(/(Z|[+-]\d\d:?\d\d)$/i,"")+A.dateZone:raw;return parseDate(s)},qMode=/\{q\}/.test(A.url),alts=qMode?seekKw.split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean):[null],allDone=!0,MP=A.monthPages||null,mp=MP?{y:toD.getFullYear(),m:toD.getMonth()+1,page:null}:null,mpFill=t=>t.replace(/\{year\}/g,mp.y).replace(/\{month\}/g,mp.m).replace(/\{page\}/g,mp.page);for(let alt of alts){done=!1;for(let n=1;n<=maxPages2;n++){if(Date.now()>deadline){why="стоп по времени";break}let url=mp?mpFill(mp.page==null?MP.last:A.url):A.url.replace(/\{q\}/g,alt==null?"":encodeURIComponent(alt)).replace(/\{page\}/g,n).replace(/\{off(\d+)\}/g,(_,st)=>(n-1)*+st).replace(/\{from\}/g,dayShift(fromD,-1)).replace(/\{to\}/g,dayShift(toD,1)),txt=await tryText(url);if(!txt){why="вход не ответил на "+n+"-й странице";break}let json2=null,list=null;try{json2=JSON.parse(txt),list=pick2(json2,A.list)}catch{}if(!Array.isArray(list)){why="вход отдал не список";break}if(pages++,mp){if(mp.page==null){let total=+pick2(json2,MP.total);mp.page=Number.isFinite(total)?total-1:0}else mp.page--;mp.page<1&&(mp.m--,mp.m<1&&(mp.m=12,mp.y--),mp.page=null)}if(!list.length){if(mp)continue;done=!0;break}let older=!1;for(let it of list){seenN++;let d=dateOf(it);if(!d)continue;if(+d>Date.now()+15*6e4&&future++,d<fromD){older=!0;continue}if(!inRange(d,fromD,toD)||(inWinN++,A.where&&Object.keys(A.where).some(k=>String(pick2(it,k))!==String(A.where[k]))))continue;let slug=pick2(it,A.slug||"alias");if(!slug)continue;let miss=!1,link=A.link.replace(/\{([\w.]+)\}/g,(_,k)=>{let v=k==="slug"?slug:pick2(it,k);return(v==null||v==="")&&(miss=!0),String(v)});if(miss)continue;let title=unmarkup([].concat(A.title||"title").map(f=>pick2(it,f)).find(v=>v)||""),body=[].concat(A.text||[]).map(f=>unmarkup(pick2(it,f)||"")).join(" "),hay=(title+" "+body).toLowerCase();if(A.resolve||svcDates.set(urlKey(link),d.toISOString()),!(!matchGroups(hay,groups)||hasExclude(hay))){if(A.resolve&&(link=await resolveRedirect(link),svcDates.set(urlKey(link),d.toISOString())),have.has(urlKey(link))){rows.push({url:link,channel:"api",_dupe:!0});continue}have.add(urlKey(link)),rows.push({source:host(origin),title,url:link,date:d.toISOString(),dateSource:"api",channel:"api",match:kwInTitle(title)?"title":"body",snippet:snippetFor(body,title,terms)}),added++}}if(older||!mp&&list.length<perPage){done=!0;break}n===maxPages2&&(why="упёрлись в потолок страниц ("+maxPages2+")")}if(done||(allDone=!1),why)break}done=allDone,qMode&&!why&&(why="вход ищет сам, по своему правилу — полноту не засчитываем"),apiTitles=done&&!why,A.textFull===!1&&!why&&(why="вход отдаёт только заголовок и анонс — ключ в тексте статьи им не найти"),apiProven=done&&!why,apiSeen=inWinN,apiWhy=apiProven?"прочитано "+inWinN+" статей сайта за период, страниц "+pages:why,qMode&&(apiSeen=0),notes.push("api: служебный вход издания, совпало "+added+"; полнота: "+(apiProven?"подтверждена":"не подтверждена")+" ("+apiWhy+")"+(future?"; ВНИМАНИЕ: "+future+" дат позже текущего момента — похоже, вход указывает пояс неверно (поле dateZone в пресете)":""))}}catch(e){notes.push("api: "+e.message)}let sitemapDepthAdded=0;try{if(opts.skip instanceof Set?opts.skip.has("sitemap"):(opts.skip||[]).includes("sitemap"))throw{skipped:!0};if(wpProven)throw{wpCovered:!0};if(apiProven)throw{apiCovered:!0};let t0=Date.now(),db4=depthBudget(fromD,toD),deadline=t0+db4.budgetMs,slugHints=[...new Set(keyword.split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean).flatMap(x=>x.split(/\s+/)).flatMap(x=>translitVariants(x)))],collectStats={};siteCollect=collectStats;let newsPoolNote="",rssMissing=newsList?[...rssListed].filter(k=>!newsList.inWin.some(c=>urlKey(c.loc)===k)):[],newsFull=!!(newsList&&fromD&&newsList.inWin.length&&!newsList.undated&&newsList.oldest&&+newsList.oldest<+startOfDay(ymd(fromD))&&!rssMissing.length),cands=newsFull?(()=>{let seen=new Set,list=[];for(let c of newsList.inWin){let k=urlKey(c.loc);seen.has(k)||(seen.add(k),list.push(c))}let hinted=c=>slugHints.some(h=>c.loc.toLowerCase().includes(h)),ordered=[...list.filter(hinted),...list.filter(c=>!hinted(c))],max=browserMode?200:db4.maxCands,take=ordered.slice(0,max);return collectStats.pool=list.length,collectStats.poolKeys=seen,collectStats.maps=1,collectStats.hinted=take.filter(hinted).length,newsPoolNote=`список статей периода — из карты новостей (${list.length}, она доходит до ${ymd(newsList.oldest)}`+(rssListed.size?`, сверена с лентой: ${rssListed.size} из ${rssListed.size}`:", ленты для сверки нет")+"), общую карту сайта не читали; ",take})():await collectSitemapCandidates(origin,robots,fromD,toD,browserMode?{maxMaps:10,maxCands:200,deadline:t0+9e4,fetchText:fetchText2,blindOk:rows.length===0,slugHints,collectStats}:{maxMaps:40,maxCands:db4.maxCands,deadline,fetchText:fetchText2,blindOk:rows.length===0,slugHints,collectStats}),have=new Set(rows.map(r=>urlKey(r.url))),fresh2=cands.map(c=>c.loc).filter(u=>!have.has(urlKey(u)));if(fresh2.length||notes.push("sitemap-глубина: "+(newsFull?`все ${cands.length} статей периода из карты новостей уже взяты лентой и картой новостей`:collectStats.stale?`новых статей нет — все ${collectStats.stale} адресов уже читали, они вне периода`:collectStats.maps?`карт прочитано ${collectStats.maps}, статей за период в них нет`:`карты сайта не открылись (адресов карт в robots и по типовым путям: ${collectStats.roots||0})`)+(collectStats.mapsFailed?`; ещё ${collectStats.mapsFailed} карт не открылись — сайт отвечал ошибками, это не «статей нет»`:"")),fresh2.length){channels.push("sitemap-глубина");let cap2=browserMode?{maxFetch:200,deadline:t0+9e4}:{maxFetch:db4.maxCands,deadline},mapLied=null,depthB=browserMode&&slugHints.length?{left:Math.min(8,browserBudget.left)}:null,depthStart=depthB?depthB.left:0,viaBefore=tally&&tally.viaBrowser||0,hintedUrl=u=>slugHints.some(h=>u.toLowerCase().includes(h)),lossBefore=tally?(tally.noOpen||0)+(tally.noDate||0)+(tally.late||0)+(tally.overBudget||0):0,PROBE=40,LIE_MIN=30,inP=t=>t?(t.taken||0)+(t.noKw||0)+(t.excluded||0):0,outP=t=>t&&t.outOfPeriod||0,dOpts={groups,exclude:exGroups,fromD,toD,originHost:host(origin),channelLabel:"sitemap",deadline:cap2.deadline,browserBudget:depthB,browserIf:depthB?hintedUrl:null,diag:diagRec,tally,pick},pr=[];if(fromD&&fresh2.length>PROBE&&cap2.maxFetch>PROBE){let in0=inP(tally),out0=outP(tally);pr=(await enrichUrls(fresh2.slice(0,PROBE),{...dOpts,maxFetch:PROBE})).rows;let gotIn=inP(tally)-in0,gotOut=outP(tally)-out0;!gotIn&&gotOut>=LIE_MIN?(mapLied={read:gotOut,left:fresh2.length-PROBE},tally&&(tally.mapLied=mapLied.left)):pr=pr.concat((await enrichUrls(fresh2.slice(PROBE),{...dOpts,maxFetch:cap2.maxFetch-PROBE})).rows)}else pr=(await enrichUrls(fresh2,{...dOpts,maxFetch:cap2.maxFetch})).rows;{let lost=(t=>t?(t.noOpen||0)+(t.noDate||0)+(t.late||0)+(t.overBudget||0):0)(tally)-lossBefore,pk=collectStats.poolKeys||new Set,listed=newsFull?[...rssListed]:[...listedInWindow],missed=listed.filter(k=>!pk.has(k)),whole=!collectStats.capped&&(collectStats.pool||0)<=cands.length;depthWhy=browserMode?"сайт за защитой":mapLied?"карта не показывает даты публикации":whole?Date.now()>cap2.deadline?"стоп по времени":lost?"не проверено страниц: "+lost:listed.length?missed.length?"в карте нет "+missed.length+" из "+listed.length+" статей ленты":"":"сверять не с чем: лента ничего не перечислила за период":"карта отдала больше, чем влезло в бюджет",depthProven=!depthWhy,depthProven&&(depthWhy=(newsFull?"в карте новостей ":"в карте ")+cands.length+" статей периода, все проверены; сверено с лентой: "+listed.length+" из "+listed.length)}let depthUsed=depthB?depthStart-depthB.left:0;depthUsed&&(browserBudget.left-=depthUsed);let depthGot=(tally&&tally.viaBrowser||0)-viaBefore;pr.forEach(x=>rows.push(x)),sitemapDepthAdded=pr.length;let cover="";if(fromD&&toD){let days=new Set;for(let c of cands){let d=c.lm&&parseDate(c.lm)||dateFromUrl(c.loc);d&&days.add(ymd(d))}let span=Math.max(1,Math.round((+endOfDay(ymd(toD))-+startOfDay(ymd(fromD)))/864e5));days.size&&(cover=`, дней периода охвачено ${days.size} из ${span}`)}let hint=collectStats.hinted?`, с ключом в адресе ${collectStats.hinted}`:"",old=collectStats.stale?`, старых по памяти дат пропущено ${collectStats.stale}`:"",lot=collectStats.nodate?`, из них без даты в карте ${collectStats.nodate} (день узнаём, только скачав)`:"",pool=collectStats.pool||0;pool>cands.length&&!mapLied&&(depthLeft=pool-cands.length,depthLeftCapped=!!collectStats.capped);let share2=pool>0?Math.max(1,Math.round(cands.length/pool*100)):0,part=mapLied?`; карта сайта не показывает даты публикации (lastmod — время правки): из ${mapLied.read} прочитанных по ней статей ни одной за период, остальные ${mapLied.left} не качали — там тот же архив`:pool>cands.length?collectStats.capped?`; взято ${cands.length} из БОЛЕЕ ЧЕМ ${pool} статей сайта за период (не больше ${share2}%, сколько их всего — не знаем: упёрлись в свой потолок сбора) — остальные не читали, бюджет канала`:`; взято ${cands.length} из ${pool} статей сайта за период (${share2}%) — остальные не читали, бюджет канала`:"",cur=browserMode?200:db4.maxCands,why=browserMode?"сайт за защитой, читает браузер":db4.days?`окно ${db4.days} сут.`:"период не задан",budg=`; бюджет ${cur} статей (${why})`,brw=depthUsed?`; браузером прочитано ${depthGot} из ${depthUsed} адресов с ключом в слаге`:"",prove=depthProven?"; полнота: подтверждена ("+depthWhy+")":"",taxo=collectStats.taxo?`; карт-справочников не открывали: ${collectStats.taxo} (теги, рубрики, авторы — статей в них нет)`:"";notes.push(`sitemap-глубина: ${newsPoolNote}${newsFull?"":"карт пройдено, "}кандидатов ${fresh2.length}${cover}${lot}${hint}${old}, совпало ${pr.length}${part}${budg}${brw}${prove}${taxo}`+(Date.now()>cap2.deadline?" (стоп по времени)":""))}}catch(e){e&&e.apiCovered?(notes.push("sitemap-глубина: не понадобилась — служебный вход издания отдал весь период ("+apiWhy+")"),notRun.push("sitemap")):e&&e.wpCovered?(notes.push("sitemap-глубина: не понадобилась — wp-api накрыл весь период ("+wpWhy+")"),notRun.push("sitemap")):notes.push(e&&e.skipped?"sitemap-глубина: пропущен (память: у сайта ничего не даёт; перепроверим позже)":"sitemap-глубина: "+e.message)}let known=lookupKnown(origin),spaCandidateUrl=null,searchAdded=0,renderAdded=0,searchWorked=!1,renderWorked=!1,skip=opts.skip instanceof Set?opts.skip:new Set(opts.skip||[]);known&&!opts.reprobe&&(known.external===!1&&skip.add("external"),known.browserSearch===!1&&skip.add("sitesearch"),known.noRender===!0&&skip.add("render"));let stats={render:null,external:null,sitesearch:null};try{let tpl=null;if(override?tpl=await detectSearch(origin,homeHtml,override):known&&known.search?tpl=await detectSearch(origin,homeHtml,known.search):known&&known.search===null?notes.push("адаптер: server-side поиска нет ("+(known.note||"")+")"):tpl=await detectSearch(origin,homeHtml,null),tpl&&tpl.kind==="none"&&(notes.push("поиск: "+tpl.warn),tpl=null),tpl){channels.push("search("+tpl.kind+")"),diagMeta&&(diagMeta.searchKind=tpl.kind);let before=rows.length,seenU=new Set,searchBudget=searchBudgetMs(known,fromD,toD),maxProc=known&&known.budgetMs?1500:400,hardCap=browserMode?1:tpl.hasPage?80:1,searchAlts=seekKw.split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean);searchAlts.length||searchAlts.push(seekKw);let processed=0,httpErr="",searchPageHadKw=!1,t0=Date.now(),tplBuilds=tpl.builds||[tpl.build],probes=[];for(let b of tplBuilds)for(let alt of searchAlts)probes.push({build:b,alt});outer:for(let{build,alt}of probes){let stopAlt=!1;for(let n=1;n<=hardCap&&!stopAlt;n++){if(Date.now()-t0>searchBudget){notes.push(`поиск: стоп по времени (${Math.round(searchBudget/1e3)}c)`);break outer}let url=build(alt,n);if(!url)break;diagMeta&&!diagMeta.searchUrl&&(diagMeta.searchUrl=url);let info;if(browserMode){let b=await renderFetch(url);info={ok:!!(b&&b.ok&&b.html),status:b&&b.status||0,text:b&&b.html||"",err:b&&b.err}}else info=await fetchInfo(url);if(!info.ok){n===1&&seenU.size===0&&(httpErr=info.status?"HTTP "+info.status:info.err||"ошибка"),n===1&&info.status>=400&&entryErr("search",info.status,url);break}!searchPageHadKw&&info.text&&hasKw(info.text.toLowerCase())&&(searchPageHadKw=!0);let links=extractLinks(info.text,origin).filter(u=>!seenU.has(u));if(diagMeta)for(let u of links)diagMeta.rawLinks.length<25&&diagMeta.rawLinks.push(u);if(links.forEach(u=>seenU.add(u)),!links.length){if(n>1)break;continue}let urlNewest=null,toEnrich=[],cardD=known&&known.searchCard&&fromD?cardDatesOf(info.text,known.searchCard,origin):null,DAY4=864e5;for(let u of links){let du=dateFromUrl(u);if(du&&((!urlNewest||du>urlNewest)&&(urlNewest=du),!inRange(du.toISOString(),fromD,toD)))continue;let dc=!du&&cardD&&cardD.get(u);if(dc&&(+dc<+fromD-DAY4||toD&&+dc>+toD+DAY4)){tally.cardDateOut=(tally.cardDateOut||0)+1;continue}toEnrich.push(u)}let{rows:pr,newest}=await enrichUrls(toEnrich,{groups,exclude:exGroups,fromD,toD,originHost:host(origin),channelLabel:"search",deadline:t0+searchBudget,browserBudget,diag:diagRec,tally,pick,have:haveKeys()});pr.forEach(x=>rows.push(x)),processed+=links.length;let effNewest=newest&&urlNewest?newest>urlNewest?newest:urlNewest:newest||urlNewest;if(fromD&&effNewest&&effNewest<fromD&&(stopAlt=!0),processed>maxProc)break outer}}let added=rows.length-before;searchAdded=added,httpErr?notes.push("поиск: "+httpErr):notes.push(`поиск: ссылок ${seenU.size}, совпало ${added}`+(seenU.size===0?" (пусто/оболочка)":added===0?" (нет по слову/периоду)":"")),rows.length===before&&(seenU.size<3||!searchPageHadKw)&&(spaCandidateUrl=tpl.build("MCQPLACEHOLDER",1).replace(/MCQPLACEHOLDER/g,"{q}"),seenU.size>=3&&notes.push("поиск: ключа нет в самой выдаче -> похоже на оболочку, пробую браузером")),searchWorked=!httpErr&&seenU.size>=3&&!spaCandidateUrl}else(!known||known.search)&&notes.push("поиск не найден (нужен ручной шаблон site | url?...{q})")}catch(e){notes.push("search: "+e.message)}try{let renderTpl=spaCandidateUrl?spaCandidateUrl.replace(/\{q\}/g,"{q}"):null;renderTpl||(renderTpl=parseSearchForm(homeHtml,origin)||null);let renderSearchUrl=renderTpl;if(skip.has("render"))notes.push("render: пропущен (память: у сайта не работает; перепроверим позже)");else if(apiProven)notes.push("render: не понадобился — служебный вход издания отдал весь период"),notRun.push("render");else if(depthProven)notes.push("render: не понадобился — карта сайта отдала весь период, все статьи прочитаны"),notRun.push("render");else if(!(known&&known.render)&&searchAdded===0&&sitemapDepthAdded===0&&renderSearchUrl&&searchWorked)notes.push("render: не нужен — поиск сайта уже ответил, а это тот же поисковик");else if(known&&known.render||searchAdded===0&&sitemapDepthAdded===0&&renderSearchUrl){let renderTplUrl=null,selectors=null;if(known&&known.render?(renderTplUrl=known.render,selectors=known.selectors||null):renderTplUrl=renderSearchUrl,renderTplUrl){channels.push("render");let oh=host(origin),rAlts=/\{q\}/.test(renderTplUrl)?seekKw.split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean).slice(0,3)||[seekKw]:[null],seenR=new Set,items=[],anyCf=!1,noBrowser=!1,renderHttp="",downErr="";for(let alt of rAlts.length?rAlts:[null]){let renderUrl=alt==null?renderTplUrl:renderTplUrl.replace(/\{q\}/g,encodeURIComponent(alt));diagMeta&&!diagMeta.renderUrl&&(diagMeta.renderUrl=renderUrl);let sc=await renderScrape(renderUrl,{selectors,host:oh});browserDown(sc)&&(noBrowser=!0,downErr||(downErr=sc.err||sc.note||"")),sc.cf&&(anyCf=!0),sc.status>=400&&!renderHttp&&(renderHttp=sc.err||"HTTP "+sc.status+" на "+renderUrl,entryErr("render",sc.status,renderTplUrl));for(let it of sc.items||[]){let hh;try{hh=new URL(it.url).host.replace(/^www\./,"")}catch{continue}hh===oh&&(seenR.has(it.url)||(seenR.add(it.url),items.push(it)))}}let scraped={items,cf:anyCf,err:renderHttp};renderWorked=!anyCf&&!renderHttp&&items.length>=3,stats.render=noBrowser&&!items.length?null:items.length,noBrowser&&!items.length&&notes.push("render: канал не проверялся — "+(downErr||"браузер не сработал")+" (память не трогаем)");let urls=items.map(s=>s.url).filter(Boolean),rFates=[],r=(await enrichUrls(urls,{groups,exclude:exGroups,fromD,toD,originHost:host(origin),channelLabel:"render",deadline:Date.now()+45e3,browserBudget,diag:rFates,tally,pick,have:haveKeys()})).rows;diagRec&&diagRec.push(...rFates);let rUnread=unreadOnly(rFates),renderIsSearch=!!(known&&known.render&&/\{q\}/.test(known.render));if(!r.length&&items.length)for(let it of items.filter(rUnread)){let hay=((it.title||"")+" "+(it.snippet||"")).toLowerCase();if(hasExclude(hay)||!renderIsSearch&&!hasKw(hay))continue;let d=parseDate(it.date)||dateFromUrl(it.url),iso2=d?d.toISOString():null;(fromD||toD)&&!inRange(iso2,fromD,toD)||r.push({source:host(origin),title:it.title||it.url,url:it.url,date:iso2||"",dateSource:"card",channel:"render*",match:kwInTitle(it.title)?"title":"body",snippet:snippetFor(cardText(it),it.title,terms)})}r.forEach(x=>rows.push(x)),renderAdded=r.length,!r.length&&noBrowser&&!items.length||(r.length?notes.push(`render: совпало ${r.length}`):notes.push(scraped.cf?"render: Cloudflare не пройден за таймаут":!items.length&&scraped.err?"render: "+scraped.err:`render: снято ${items.length} ссылок, совпало 0`+(items.length?" (нет по слову/периоду)":" (пусто/логин/капча?)")))}}}catch(e){notes.push("render: "+e.message)}try{if(known&&known.feed){channels.push("feed");let hasPage=/\{page\}|\{off\d+\}/.test(known.feed),byDate=!!known.feedPost&&/\{date\}/.test(known.feedPost),cap2=hasPage||byDate?known.feedPages||20:1,fdb=depthBudget(fromD,toD),feedLossBefore=tally?(tally.noOpen||0)+(tally.noDate||0)+(tally.late||0)+(tally.overBudget||0):0,t0=Date.now(),FEED_MS=9e4,seenU=new Set,cands=[],added=0,stop=!1,links=0,feedPages=0,feedErr=null,repeated=!1,feedPlain=!1,cursor=toD?new Date(+toD+864e5):new Date;for(let n=1;n<=cap2&&!stop&&!(Date.now()-t0>FEED_MS);n++){let items=[],feedBase=/^\//.test(known.feed)?answeredOrigin.replace(/\/$/,"")+known.feed:known.feed;if(byDate){let body=known.feedPost.replace(/\{date\}/g,dmy(cursor)),html=await tryPostText(feedBase,body);if(!html&&browserMode){let b=await renderFetch(feedBase,{post:body,host:host(origin)});b&&b.ok&&b.posted?html=b.html:b&&b.err&&(feedErr=b.err)}if(!html)break;items=extractLinks(html,origin).map(u=>({url:u,title:"",date:"",snippet:""}))}else{let feedUrl=n===1&&known.feedFirst?known.feedFirst:feedBase.replace(/\{page\}/g,n);feedUrl=feedUrl.replace(/\{off(\d+)\}/g,(_,step2)=>(n-1)*+step2);let cheap=null,plain=await tryText(feedUrl);if(plain){let arts=extractLinks(plain,origin).filter(u=>looksLikeArticleUrl(u)),cd=known.feedCard?cardDatesOf(plain,known.feedCard,origin):null;arts.length>=3&&(cheap=arts.map(u=>({url:u,title:"",date:cd&&cd.get(u)?cd.get(u).toISOString():"",timed:!!(cd&&cd.get(u)&&cd.get(u).timed),snippet:""})))}if(cheap)items=cheap,feedPlain=!0;else{let scraped=await renderScrape(feedUrl,{selectors:known.feedSelectors||null,host:host(origin)});items=scraped.items||[],n===1&&scraped.status>=400&&(feedErr=scraped.err||"HTTP "+scraped.status,entryErr("feed",scraped.status,feedUrl))}}if(feedPages++,items=items.filter(it=>it.url&&!seenU.has(it.url)),items.forEach(it=>seenU.add(it.url)),!items.length){feedPages>1&&(repeated=!0);break}links+=items.length;let newest=null,oldest=null;for(let it of items){let d=parseDate(it.date)||dateFromUrl(it.url);d&&(!newest||d>newest)&&(newest=d),d&&(!siteNewest||+d>+siteNewest)&&(siteNewest=d),d&&(!oldest||d<oldest)&&(oldest=d);let hay=((it.title||"")+" "+(it.snippet||"")).toLowerCase();if(d&&hasKw(hay)&&!hasExclude(hay)){if((fromD||toD)&&!inRange(d,fromD,toD))continue;rows.push({source:host(origin),title:it.title||it.url,url:it.url,date:ymd(d),dateSource:parseDate(it.date)?"card":"url",channel:"feed",match:kwInTitle(it.title)?"title":"body",snippet:snippetFor(cardText(it),it.title,terms)}),added++;continue}let slack=it.timed?6*36e5:864e5;d&&(fromD&&+d<+fromD-slack||toD&&+d>+toD+slack)||cands.push(it.url)}byDate&&(cursor=oldest&&+oldest<+cursor?oldest:new Date(+cursor-864e5),fromD&&+cursor<+fromD-864e5&&(stop=!0)),fromD&&newest&&newest<fromD&&(stop=!0)}if(cands.length){let hints=[...new Set(keyword.split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean).flatMap(x=>x.split(/\s+/)).flatMap(x=>translitVariants(x)))];if(hints.length){let hinted=u=>hints.some(h=>u.toLowerCase().includes(h));cands.sort((a,b)=>(hinted(b)?1:0)-(hinted(a)?1:0))}let{rows:pr}=await enrichUrls(cands,{groups,exclude:exGroups,fromD,toD,originHost:host(origin),channelLabel:"feed",deadline:Date.now()+Math.max(9e4,fdb.budgetMs),maxFetch:Math.max(300,fdb.maxCands),browserBudget,diag:diagRec,tally,have:haveKeys()});for(let r of pr)rows.push(r),added++}let pgN=` (страниц ${feedPages}`+(feedPlain?", обычным запросом":"")+(repeated?", дальше повтор — пагинация не двигается":"")+")",why=links?" (нет по слову/периоду)":feedErr?" (лента не ответила: "+feedErr+")":" (лента ничего не отдала)",lossNow=tally?(tally.noOpen||0)+(tally.noDate||0)+(tally.late||0)+(tally.overBudget||0):0,feedFull=!!(known.feedAll&&fromD&&stop&&feedPlain&&lossNow===feedLossBefore);added?notes.push(`feed: ссылок ${links}${pgN}, совпало ${added}`):notes.push(`feed: ссылок ${links}${pgN}, совпало 0`+why),feedFull&&(depthLeft=0,depthLeftCapped=!1,notes.push("полнота: подтверждена (лента сайта дошла до начала периода, все статьи периода прочитаны)"))}}catch(e){notes.push("feed: "+e.message)}let siteSearchAdded=0;try{let browserSearchIsMain=!!(known&&known.browserSearch===!0&&searchAdded===0),sameEngineDone=searchWorked||renderWorked;if(!skip.has("sitesearch")&&apiProven)notes.push("браузер-поиск: не понадобился — служебный вход издания отдал весь период"),notRun.push("sitesearch");else if(!skip.has("sitesearch")&&depthProven)notes.push("браузер-поиск: не понадобился — карта сайта отдала весь период, все статьи прочитаны"),notRun.push("sitesearch");else if(!skip.has("sitesearch")&&rows.length===0&&!browserSearchIsMain&&sameEngineDone)notes.push("браузер-поиск: не нужен — "+(searchWorked?"поиск сайта":"страница поиска в браузере")+" уже ответил(а), а это тот же поисковик");else if(!skip.has("sitesearch")&&(rows.length===0||browserSearchIsMain)){let alts=seekKw.split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean);alts.length||alts.push(seekKw);let oh=host(origin),seenS=new Set,items=[],lastNote="",anyCf=!1,noBrowserS=!1;{let scraped2=await renderSiteSearch(origin,alts.slice(0,3),{host:oh});browserDown(scraped2)&&(noBrowserS=!0),scraped2.cf&&(anyCf=!0),scraped2.note&&(lastNote=scraped2.note);for(let it of scraped2.items||[]){let h;try{h=new URL(it.url).host.replace(/^www\./,"")}catch{continue}h!==oh&&!h.endsWith("."+oh)||seenS.has(it.url)||(seenS.add(it.url),items.push(it))}}let scraped={items,cf:anyCf,note:lastNote};if(stats.sitesearch=noBrowserS&&!items.length?null:items.length,items.length){channels.push("браузер-поиск");let sFates=[],r=(await enrichUrls(items.map(s=>s.url),{groups,exclude:exGroups,fromD,toD,originHost:host(origin),channelLabel:"браузер-поиск",deadline:Date.now()+9e4,browserFallback:browserMode,browserBudget,diag:sFates,tally,pick,have:haveKeys()})).rows;if(diagRec&&diagRec.push(...sFates),!r.length)for(let it of items.filter(unreadOnly(sFates))){let hay=((it.title||"")+" "+(it.snippet||"")).toLowerCase();if(!hasKw(hay)||hasExclude(hay))continue;let d=parseDate(it.date)||dateFromUrl(it.url),iso2=d?d.toISOString():null;(fromD||toD)&&!inRange(iso2,fromD,toD)||r.push({source:oh,title:it.title||it.url,url:it.url,date:iso2||"",dateSource:"card",channel:"браузер-поиск*",match:kwInTitle(it.title)?"title":"body",snippet:snippetFor(cardText(it),it.title,terms)})}r.forEach(x=>rows.push(x)),siteSearchAdded=r.length,notes.push(r.length?`браузер-поиск: совпало ${r.length}`:`браузер-поиск: снято ${items.length}, совпало 0 (нет по слову/периоду)`)}else scraped.err?notes.push("браузер-поиск: "+scraped.err):scraped.note&&notes.push("браузер-поиск: "+scraped.note)}}catch(e){notes.push("браузер-поиск: "+e.message)}try{let externalOn=opts.external===!1?!1:!!(known&&known.external===!0)||opts.external===!0;if(skip.has("external"))notes.push("внешний: пропущен (память: у сайта не работает; перепроверим позже)");else if(!externalOn)notRun.push("external");else if((known&&known.external||searchAdded===0&&renderAdded===0)&&sitemapDepthAdded===0&&siteSearchAdded===0){channels.push("внешний");let dom=host(origin),alt=seekKw.split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean).map(s=>/\s/.test(s)&&!/^["«]/.test(s)?"("+s+")":s).join(" OR "),ex=(opts.exclude||"").split(/[,;\n]+/).map(s=>s.trim()).filter(Boolean).map(s=>"-"+(/\s/.test(s)?'"'+s+'"':s)).join(" "),qEnc=encodeURIComponent(["site:"+dom,alt,ex].filter(Boolean).join(" ")),seenU=new Set,gItems=[],t0=Date.now(),engineDiag={},ddgItems=0,ddgDiag="";{let seenDDG=new Set,t0D=Date.now(),ddgUrls=[s=>`https://html.duckduckgo.com/html/?q=${qEnc}&kl=ru-ru&ia=web&p=-1${s?"&s="+s:""}`,s=>`https://duckduckgo.com/html/?q=${qEnc}&kl=ru-ru&ia=web&p=-1${s?"&s="+s:""}`];for(let urlV=0;urlV<ddgUrls.length&&gItems.length<60&&Date.now()-t0D<12e3;urlV++){let makeUrl=ddgUrls[urlV],ref="https://duckduckgo.com/";for(let s=0;s<=60&&Date.now()-t0D<12e3;s+=30){let durl=makeUrl(s),info=await ddgFetch(durl,ref);if(s===0&&urlV===0){let t=info.text||"",res=(t.match(/class="result__a"/g)||[]).length,challenge=/anomaly|are you a robot|too many requests|captcha|privacy.*simplified/i.test(t),smallPage=t.length<22*1024&&res===0,href1=(((t.split(/class="result__a"/i)[1]||"").slice(0,400).match(/href="([^"]+)"/i)||[])[1]||"").replace(/&amp;/g,"&").slice(0,110);ddgDiag=`${info.status?"HTTP "+info.status+" ":""}${info.err?info.err+" ":""}стр ${Math.round(t.length/1024)}КБ, result__a ${res}${challenge||smallPage?", заглушка/капча":""}; href1: ${href1||"—"}`,engineDiag.ddg=ddgDiag}if(!info.ok)break;let items=ddgResults(info.text,dom).filter(it=>!seenDDG.has(it.url));if(!items.length)break;items.forEach(it=>{seenDDG.add(it.url),seenU.add(it.url),gItems.push(it)})}if(gItems.length>0)break}ddgItems=seenDDG.size}let bingItems=0,bingDiag="",needBing=gItems.length<3||ddgDiag&&/заглушка|капча|HTTP 40[33]|не открылся|таймаут/.test(ddgDiag);if(needBing){let seenB=new Set,burl=`https://www.bing.com/search?q=${qEnc}&setlang=ru-RU&cc=KZ&ensearch=0`,scraped=await renderScrape(burl,{bing:!0,host:dom}),raw=scraped.items||[];for(let it of raw){let real=bingDecodeHref(it.url,dom)||bingReal(it.url,dom);!real||seenB.has(real)||(seenB.add(real),seenU.has(real)||(seenU.add(real),gItems.push({url:real,title:it.title||"",snippet:it.snippet||""})))}bingItems=seenB.size;let sample=raw.length?String(raw[0].url||"").replace(/&amp;/g,"&").slice(0,90):"";bingDiag=scraped.cf?"капча/Cloudflare не пройден":`рендер: снято ${raw.length}, домена ${bingItems}${bingItems===0&&sample?"; href1: "+sample:""}`,engineDiag.bing=bingDiag}stats.external=gItems.length;let enr=(await enrichUrls(gItems.map(it=>it.url),{groups,exclude:exGroups,fromD,toD,originHost:dom,channelLabel:"внешний",deadline:Date.now()+3e4,diag:diagRec,tally,pick,have:haveKeys()})).rows,done=new Set;for(let r of enr)rows.push(r),done.add(r.url);let cand=[],noDate=0,offKw=0;for(let it of gItems){if(done.has(it.url))continue;let titleL=(it.title||"").toLowerCase(),snipL=(it.snippet||"").toLowerCase(),inTitle=hasKw(titleL);if(!inTitle||hasExclude(titleL+" "+snipL)){offKw++;continue}let d=dateFromUrl(it.url)||parseDate(it.snippet+" "+it.title+" "+(it.date||""));if(!d){noDate++;continue}inRange(d.toISOString(),fromD,toD)&&cand.push({it,iso:d.toISOString(),inTitle})}let bCount={},aCount={};for(let c of cand){let{b,a}=kwContext(c.it.snippet,terms);b.length>=12&&(bCount[b]=(bCount[b]||0)+1),a.length>=12&&(aCount[a]=(aCount[a]||0)+1)}let fb=0,boiler=0;for(let c of cand){let{b,a}=kwContext(c.it.snippet,terms);if((b.length>=12&&bCount[b]>1||a.length>=12&&aCount[a]>1)&&!c.inTitle){boiler++;continue}let title=cleanGoogleTitle(c.it.title,dom);rows.push({source:dom,title,url:c.it.url,date:c.iso,dateSource:"card",channel:"внешний",match:c.inTitle?"title":"body",snippet:makeSnippet(c.it.snippet||c.it.title||"",terms)}),fb++}let added=enr.length+fb,extra=[offKw?`не по ключу ${offKw}`:"",boiler?`боковой блок ${boiler}`:"",noDate?`без даты ${noDate}`:""].filter(Boolean).join(", "),parts=[];parts.push(`ddg:${ddgItems}${engineDiag.ddg?" ["+engineDiag.ddg+"]":""}`),needBing&&parts.push(`bing:${bingItems}${engineDiag.bing?" ["+engineDiag.bing+"]":""}`);let zeroWhy=gItems.length?extra?"отсеяно "+extra:"нет по слову/периоду":needBing?"оба движка 0: "+(engineDiag.ddg||"")+(engineDiag.bing?" | "+engineDiag.bing:""):engineDiag.ddg||"нет ответа";notes.push(added?`внешний: совпало ${added} (из статьи ${enr.length}, из выдачи ${fb}${extra?"; отсеяно "+extra:""}; ${parts.join(", ")})`:`внешний: 0 [ссылок ${gItems.length}; ${zeroWhy}]`)}}catch(e){notes.push("внешний: "+e.message)}let feedRows=rows.filter(r=>r.channel==="rss"||r.channel==="news-sitemap");if(feedRows.length){let fixed=0,dropped2=0,kept=0,seenDate=new Map;await mapPool(feedRows,4,async r=>{if(!r.url)return;let svc=svcDates.get(urlKey(r.url));if(svc){sameDay(r.date,svc)||fixed++,r.date=svc,r.dateSource="api",inRange(svc,fromD,toD)||(r._outOfPeriod=!0,dropped2++);return}let iso2=seenDate.get(r.url)||dateStore.get(r.url);if(!iso2){let html=await tryPlain(r.url);if(!html){kept++;return}let m=extractArticleMeta(siteDrop(html,r.url),r.url,pick&&pick.hint);if(!m||!m.date){kept++;return}iso2=m.date,dateStore.set(r.url,iso2),pick&&m.dateVia&&(pick.seen[m.dateVia]=(pick.seen[m.dateVia]||0)+1)}seenDate.set(r.url,iso2),sameDay(r.date,iso2)||fixed++,r.date=iso2,r.dateSource="page",inRange(iso2,fromD,toD)||(r._outOfPeriod=!0,dropped2++)});let before=rows.length;rows=rows.filter(r=>!r._outOfPeriod),(fixed||dropped2||kept)&&notes.push("даты лент сверены по статьям: поправлено "+fixed+(dropped2?", вне периода "+dropped2+" (лента показывала их свежими)":"")+(kept?", не открылись "+kept+" — оставлены с датой ленты, ей верить нельзя":"")),before!==rows.length&&rows.length}let allowed=new Set([host(origin)]),addHost=u=>{for(let one2 of[].concat(u||[])){let m=one2&&String(one2).match(/^https?:\/\/([^/]+)/i);m&&allowed.add(m[1].replace(/^www\./,""))}};addHost(override),known&&(addHost(known.search),addHost(known.render),addHost(known.feed));let byUrl=new Map,out=[],dropped=0,listings=0,foreign=new Map;for(let r of rows){if(!r.url)continue;r.url=canonUrl(r.url);let k=urlKey(r.url),prev=byUrl.get(k);if(prev){prev._ch.includes(r.channel)||prev._ch.push(r.channel);continue}if(r._dupe)continue;if(isListingUrl(r.url)){listings++;continue}let hh;try{hh=new URL(r.url).host.replace(/^www\./,"")}catch{continue}if(!allowed.has(hh)){dropped++,foreign.set(hh,(foreign.get(hh)||0)+1);continue}r._ch=[r.channel],byUrl.set(k,r),out.push(r)}if(dropped){let top2=[...foreign].sort((a,b)=>b[1]-a[1]).slice(0,3).map(([h,n])=>h+" — "+n).join(", ");notes.push("отброшено "+dropped+" с другого домена/поддомена"+(top2?" ("+top2+")":""))}listings&&notes.push("отброшено "+listings+" листингов/рубрик"),stats.contrib={};for(let r of out)stats.contrib[r.channel]=(stats.contrib[r.channel]||0)+1;stats.total=out.length,stats.picks=pick.seen;let T=tally,seenLinks=Object.values(T).filter(v=>typeof v=="number").reduce((a,b)=>a+b,0),quietPeriod=!!(siteNewest&&fromD&&+siteNewest<+startOfDay(ymd(fromD))&&siteCollect&&siteCollect.maps>0&&!siteCollect.pool&&!siteCollect.mapsFailed&&!T.noKw&&!T.taken);brokenEntries.length&&(stats.brokenEntries=brokenEntries),stats.tally={};for(let[k,v]of Object.entries(T))typeof v=="number"&&(stats.tally[k]=v);if(stats.tally.seen=seenLinks,siteNewest&&(stats.newestPub=siteNewest.toISOString(),quietPeriod&&(stats.tally.quietPeriod=1)),homePlainErr&&(stats.homeErr=homePlainErr),siteCollect&&siteCollect.mapsFailed&&(stats.tally.mapsFailed=siteCollect.mapsFailed),depthLeft&&(stats.tally.notTaken=depthLeft,stats.tally.notTakenCapped=depthLeftCapped?1:0),(apiProven||wpProven)&&(stats.tally.svcProven=1,apiSeen&&(stats.tally.svcRead=apiSeen)),fromD){let start=+startOfDay(ymd(fromD)),covers=c=>c&&!c.undated&&!c.untitled&&c.oldest&&+c.oldest<start,from2=covers(newsList)?"news-sitemap":covers(rssCover)?"rss":apiTitles?"api":null;stats.tally.titlesAll=from2?1:0,from2&&(stats.titlesFrom=from2)}if(T.noOpenWhy&&(stats.tally.noOpenWhy={...T.noOpenWhy}),T._bodies&&T._bodies.length){let b=[...T._bodies].sort((x,y)=>x-y);stats.tally.bodyN=b.length,stats.tally.bodyMed=b[b.length>>1]}if(T._pageDays){let days=Object.keys(T._pageDays);stats.tally.pageDated=Object.values(T._pageDays).reduce((a,b)=>a+b,0),stats.tally.pageDayKinds=days.length,days.length===1&&days[0]===ymd(new Date)&&(stats.tally.pageDayIsRunDay=1),fromD&&toD&&(stats.tally.windowDays=Math.round((+startOfDay(ymd(toD))-+startOfDay(ymd(fromD)))/864e5)+1)}let noOpenBit=()=>{let w=T.noOpenWhy||{},top2=Object.entries(w).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k,v])=>k+" — "+v).join(", ");return"не открылись "+T.noOpen+(top2?" ("+top2+")":" (защита/таймаут)")},noDateBit=()=>{let w=Object.entries(T.noDateWhere||{}).sort((a,b)=>b[1]-a[1]),top2=w.filter(([,n])=>n>=Math.max(3,T.noDate*.15)).slice(0,3);return top2.length?"без даты на странице — "+T.noDate+" (в разделах: "+top2.map(([s,n])=>"/"+s+"/ "+n).join(", ")+")":"без даты на странице — "+T.noDate+(w.length>1?" (разделов "+w.length+", ни один не преобладает — размазано по сайту)":"")};if(out.length){let noOpen=T.noOpen||0,noDate=T.noDate||0,late=T.late||0,over=T.overBudget||0,lost=noOpen+noDate+late+over;if(lost>=10&&lost>=seenLinks*.05){let bits=[];noOpen&&bits.push(noOpenBit()),noDate&&bits.push(noDateBit()),late&&bits.push("не успели по времени — "+late),over&&bits.push("не влезли в бюджет канала — "+over),notes.push("потери: "+lost+" страниц из "+seenLinks+" не проверены ["+bits.join(", ")+"] — среди них мог быть материал")}}else{let bits=[],add=(k,w)=>{T[k]&&bits.push(w+" "+T[k])};add("noKw","прочитали, ключа в тексте нет —"),add("outOfPeriod","вне периода —"),add("staleDate","вне периода по памяти дат —"),add("urlDateOut","вне периода по дате в адресе —"),add("cardDateOut","вне периода по дате в карточке поиска —"),T.noOpen&&bits.push(noOpenBit()),T.noDate&&bits.push(noDateBit()),add("notArticle","не статьи (рубрики/меню) —"),add("listing","разделы сайта, отсеяны по адресу —"),add("excluded","отсеяно минус-словом —"),add("late","не успели по времени —"),add("overBudget","не влезли в бюджет канала —");let more=depthLeftCapped?"больше ":"";depthLeft&&bits.push("не взяли за бюджетом канала глубины — "+more+depthLeft);let unchecked=(T.noOpen||0)+(T.noDate||0)+(T.late||0)+(T.overBudget||0)+depthLeft,pool=seenLinks+depthLeft,head;(apiProven||wpProven)&&unchecked<10?head="сайт доступен, служебный вход отдал весь период"+(apiSeen?" ("+apiSeen+" статей с текстом)":"")+" — про ключ в этот период не писали":quietPeriod?head="сайт доступен, но за период, похоже, ничего не публиковал: самая свежая запись его ленты — "+localStamp(siteNewest)+", и в карте сайта статей периода нет":!pool&&(homePlainErr||siteCollect&&siteCollect.mapsFailed)?head="ни одной ссылки-кандидата, и сайт в это время отвечал ошибками ("+[homePlainErr&&"главная обычным запросом — "+homePlainErr,siteCollect&&siteCollect.mapsFailed&&"не открылось карт — "+siteCollect.mapsFailed].filter(Boolean).join(", ")+") — похоже на сбой сайта, а не на смену входа: повторить позже":pool?(T.noOpen||0)>seenLinks/2?head="сайт не отдал статьи (защита/таймаут) — это не «не писали», а «не достучались»":(T.late||0)>seenLinks/2?head="упёрлись в бюджет времени — материал мог остаться непроверенным":unchecked>=10&&unchecked>=pool*.05?head="прочитали не всё — ноль не доказывает, что не писали (не проверено "+more+unchecked+" из "+more+pool+" страниц)":(T.noKw||0)>0?head="сайт доступен, статьи прочитаны — про ключ в этот период не писали":head="кандидаты были, но за период не прочитано ни одной статьи — проверить было нечего":head="ни одной ссылки-кандидата: ни ленты, ни карты, ни рабочего поиска у сайта не нашлось",notes.push("почему ноль: "+head+(bits.length?" ["+bits.join(", ")+"]":""))}let SL=T._slow;if(SL&&SL.resets){let why=Object.entries(SL.why||{}).sort((a,b)=>b[1]-a[1]).map(([k,v])=>k+" — "+v).join(", ");notes.push(SL.on?"сайт просил сбавить ход ("+(why||SL.resets+" раз")+") — перешли на одиночные запросы"+(SL.tried?SL.saved?", со второй попытки прочитано "+SL.saved+" из "+SL.tried:", повтор не помог ("+SL.tried+" попыток)":""):"сайт просил сбавить ход: "+(why||SL.resets)+" — единичные случаи, ход не сбавляли")}if(browserBudget.left<16){let tries=16-browserBudget.left,got=tally&&tally.viaBrowser||0;notes.push(got?"статей дочитано браузером: "+got+" из "+tries+" попыток (обычным запросом не открывались)":"браузер не дочитал ни одной статьи из "+tries+" попыток")}notRun.length&&(stats.notRun=notRun);let foundBy={},onlyBy={};for(let r of out){for(let c of r._ch)foundBy[c]=(foundBy[c]||0)+1;r._ch.length===1&&(onlyBy[r._ch[0]]=(onlyBy[r._ch[0]]||0)+1),r.channels=r._ch.map(chName).join(" + "),delete r._ch}stats.foundBy=foundBy,stats.onlyBy=onlyBy;let who2=Object.keys(foundBy).sort((a,b)=>foundBy[b]-foundBy[a]).map(c=>`${chName(c)} ${foundBy[c]}`+(onlyBy[c]?` (только он ${onlyBy[c]})`:" (все повтор)"));return who2.length&&notes.push("кто принёс: "+who2.join(", ")),{rows:out,channel:channels.join(" + ")||"none",note:notes.join("; "),stats,diag:opts.diag?{meta:diagMeta,records:diagRec}:void 0}}var CH_RU,chName,browserDown,renderScrape,dateStore,goldenSink,renderFetch,renderSiteSearch,UA,BROWSER_HDRS,sleep,FETCH_MS,NET_RU,UNREACH,isResetErr,isBusyErr,SEARCH_HDRS,bothEnds,flat,TAIL_MIN,_ddgNextAt,_ddgBlocks,_ddgGiveUp,_sleep,TG_BASE,YT_SP,ytRuns,YT_BASE,YT_DATE_MS,YT_MAX_DATES,YT_ORDER,init_channels=__esm({"extension/lib/channels.js"(){init_dates();init_parse();init_known_sites();CH_RU={sitemap:"sitemap-глубина",search:"поиск","render*":"render","браузер-поиск*":"браузер-поиск"},chName=c=>CH_RU[c]||c,browserDown=x=>/браузер не поднялся|браузер завис|наш код не выполнился/.test(String(x&&(x.err||x.note)||"")),renderScrape=async()=>({items:[],cf:!1});dateStore={get:()=>null,set:()=>{}};goldenSink=null;renderFetch=async()=>({ok:!1}),renderSiteSearch=async()=>({items:[],cf:!1});UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",BROWSER_HDRS={"User-Agent":UA,"Accept-Language":"ru,en;q=0.9","Accept-Encoding":"gzip, deflate"},sleep=ms2=>new Promise(r=>setTimeout(r,ms2));FETCH_MS=typeof process<"u"&&process.env&&Number(process.env.MC_FETCH_TIMEOUT_MS)||3e4;NET_RU={ECONNRESET:"сайт оборвал соединение",ECONNREFUSED:"сайт не принял соединение",ECONNABORTED:"соединение прервано",ETIMEDOUT:"сайт не ответил",ENOTFOUND:"домен не найден (DNS)",EAI_AGAIN:"DNS не ответил",EHOSTUNREACH:"хост недостижим",ENETUNREACH:"сети нет",EPROTO:"не сошлись по TLS",UND_ERR_CONNECT_TIMEOUT:"не удалось соединиться",UND_ERR_HEADERS_TIMEOUT:"сайт не прислал заголовки",UND_ERR_BODY_TIMEOUT:"сайт замолчал на середине ответа",UND_ERR_SOCKET:"соединение оборвалось",CERT_HAS_EXPIRED:"у сайта просрочен сертификат",UNABLE_TO_VERIFY_LEAF_SIGNATURE:"сертификат сайта не проверяется",DEPTH_ZERO_SELF_SIGNED_CERT:"самоподписанный сертификат"};UNREACH=/(UND_ERR_CONNECT_TIMEOUT|ENOTFOUND|ECONNREFUSED|EAI_AGAIN|EHOSTUNREACH|ENETUNREACH)/;isResetErr=why=>/\b(ECONNRESET|ECONNABORTED|UND_ERR_SOCKET)\b/.test(String(why||"")),isBusyErr=why=>/\bHTTP (429|503)\b/.test(String(why||""));SEARCH_HDRS={"User-Agent":UA,Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8","Accept-Language":"ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7","Accept-Encoding":"gzip, deflate",DNT:"1","Upgrade-Insecure-Requests":"1","Sec-Fetch-Dest":"document","Sec-Fetch-Mode":"navigate","Sec-Fetch-Site":"same-origin","Sec-Fetch-User":"?1",Pragma:"no-cache","Cache-Control":"no-cache"};bothEnds=arr=>{let out=[];for(let i=0,j=arr.length-1;i<=j;i++,j--)out.push(arr[i]),i!==j&&out.push(arr[j]);return out},flat=x=>String(x||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),TAIL_MIN=24;_ddgNextAt=0,_ddgBlocks=0,_ddgGiveUp=!1,_sleep=ms2=>new Promise(r=>setTimeout(r,ms2));TG_BASE=typeof process<"u"&&process.env&&process.env.MC_TG_BASE||"https://t.me/s/";YT_SP={hour:"EgIIAQ%3D%3D",today:"EgIIAg%3D%3D",week:"EgIIAw%3D%3D",month:"EgIIBA%3D%3D",year:"EgIIBQ%3D%3D"};ytRuns=r=>r&&r.runs?r.runs.map(x=>x.text).join(""):r&&r.simpleText||"",YT_BASE=typeof process<"u"&&process.env&&process.env.MC_YT_BASE||"https://www.youtube.com",YT_DATE_MS=2e4,YT_MAX_DATES=60;YT_ORDER=["hour","today","week","month","year"]}});function writeJson(file,obj){ensureDir((0,import_node_path4.dirname)(file));let tmp=file+".tmp";(0,import_node_fs3.writeFileSync)(tmp,JSON.stringify(obj,null,2)),(0,import_node_fs3.renameSync)(tmp,file)}function readJson2(file,fallback){try{return(0,import_node_fs3.existsSync)(file)?JSON.parse((0,import_node_fs3.readFileSync)(file,"utf8")):fallback}catch(e){return console.error("битый файл",file,e.message),fallback}}function loadAll(){ensureDir(PROJ),settingsCache=readJson2(SETTINGS,{})||{},mem.clear();for(let id of(0,import_node_fs3.existsSync)(PROJ)?(0,import_node_fs3.readdirSync)(PROJ):[]){let meta=readJson2(metaFile(id),null);meta&&mem.set(id,{meta,feed:readJson2(feedFile(id),[])||[]})}}function migrateOldDb(){if(!(0,import_node_fs3.existsSync)(OLD_DB)||mem.size>0)return;let old=readJson2(OLD_DB,null);if(!(!old||!Array.isArray(old.projects))){old.settings&&(settingsCache=old.settings,writeJson(SETTINGS,settingsCache));for(let p of old.projects){let id=p.id||uid("p"),meta={id,name:p.name||"Проект",config:p.config||{},schedule:p.schedule||{mode:"off"},lastRun:p.lastRun||null,lastLog:p.log||[]};writeJson(metaFile(id),meta),writeJson(feedFile(id),p.items||[]),mem.set(id,{meta,feed:p.items||[]})}try{(0,import_node_fs3.renameSync)(OLD_DB,OLD_DB+".bak")}catch{}console.log(`[store] мигрировал ${old.projects.length} проект(ов) из data.json в data/projects/`)}}function settings(){return settingsCache}function setSettings(patch){Object.assign(settingsCache,patch),writeJson(SETTINGS,settingsCache)}function listProjects(){return[...mem.values()].map(e=>({id:e.meta.id,name:e.meta.name,schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,itemCount:(e.feed||[]).length,newCount:(e.feed||[]).filter(i=>i.isNew).length,runsCount:(e.meta.runs||[]).length,last:(e.meta.runs||[])[0]||null,config:e.meta.config||{}}))}function getProject(id){let e=mem.get(id);return e?shape(e):null}function createProject(name,config){let id=uid("p"),meta={id,name:name||"Новый проект",config:config||{},schedule:{mode:"off"},lastRun:null,lastLog:[]};return ensureDir(projDir(id)),writeJson(metaFile(id),meta),writeJson(feedFile(id),[]),mem.set(id,{meta,feed:[]}),shape(mem.get(id))}function updateProject(id,patch){let e=mem.get(id);return e?(patch.name!==void 0&&(e.meta.name=patch.name),patch.config&&(e.meta.config=patch.config),patch.schedule&&(e.meta.schedule=patch.schedule),persistMeta(id),shape(e)):null}function deleteProject(id){if(!mem.has(id))return!1;mem.delete(id);try{(0,import_node_fs3.rmSync)(projDir(id),{recursive:!0,force:!0})}catch{}return!0}function markRead(id){let e=mem.get(id);e&&(e.feed.forEach(i=>i.isNew=!1),persistFeed(id))}function setAiReport(id,kind,report){let e=mem.get(id);return e?(e.meta.ai=e.meta.ai||{},e.meta.ai[kind]=report,persistMeta(id),e.meta.ai):null}function getAiReports(id){let e=mem.get(id);return e&&e.meta.ai||{}}function tgState(id){let e=mem.get(id);return e&&e.meta.tg||{}}function setTgState(id,patch){let e=mem.get(id);return e?(e.meta.tg=Object.assign({},e.meta.tg||{},patch||{}),e.meta.tg.token&&!e.meta.tg.ownerCode&&(e.meta.tg.ownerCode=String((0,import_node_crypto3.randomInt)(1e5,1e6))),persistMeta(id),e.meta.tg):null}function rotateOwnerCode(id){let e=mem.get(id);return e?(e.meta.tg=Object.assign({},e.meta.tg||{},{ownerCode:String((0,import_node_crypto3.randomInt)(1e5,1e6))}),persistMeta(id),e.meta.tg.ownerCode):""}function tgPublic(id){let t=tgState(id);return{enabled:!!t.enabled,hasToken:!!t.token,bot:t.bot||"",chats:(t.chats||[]).map(c=>({id:c.id,name:c.name||"",access:c.access||""})),sentTotal:t.sentTotal||0,err:t.err||"",ownerCode:t.ownerCode||"",owners:(t.owners||[]).map(o=>o.name||String(o.id))}}function unsentItems(id,ts){let e=mem.get(id);return e?(e.feed||[]).filter(i=>!i.tgSent&&(!ts||i.run===ts)):[]}function markTgSent(id,urls){let e=mem.get(id);if(!e)return 0;let set2=new Set((urls||[]).map(urlKey)),n=0;for(let i of e.feed)!i.tgSent&&set2.has(urlKey(i.url))&&(i.tgSent=!0,n++);return n&&persistFeed(id),n}function markAllTgSent(id){let e=mem.get(id);if(!e)return 0;let n=0;for(let i of e.feed)i.tgSent||(i.tgSent=!0,n++);return n&&persistFeed(id),n}function unmarkTgSent(id,urls){let e=mem.get(id);if(!e)return 0;let set2=new Set((urls||[]).filter(Boolean).map(urlKey));if(!set2.size)return 0;let n=0;for(let i of e.feed)i.tgSent&&set2.has(urlKey(i.url))&&(delete i.tgSent,n++);return n&&persistFeed(id),n}function setSentiment(id,list){let e=mem.get(id);if(!e||!list||!list.length)return 0;let by=new Map;for(let x of list)x&&x.url&&x.mark&&by.set(urlKey(x.url),x);if(!by.size)return 0;let n=0;for(let i of e.feed){let m=by.get(urlKey(i.url));m&&(i.sent=m.mark,i.sentWhy=m.why||"",i.sentAt=Date.now(),i.sentModel=m.model||"",n++)}return n&&persistFeed(id),n}function setRelevance(id,list){let e=mem.get(id);if(!e||!list||!list.length)return 0;let by=new Map;for(let x of list)x&&x.url&&x.mark&&by.set(urlKey(x.url),x);if(!by.size)return 0;let n=0;for(let i of e.feed){let m=by.get(urlKey(i.url));m&&(i.rel=m.mark,i.relWhy=m.why||"",i.relAt=Date.now(),i.relModel=m.model||"",n++)}return n&&persistFeed(id),n}function clearRelevance(id){let e=mem.get(id);if(!e)return 0;let n=0;for(let i of e.feed)i.rel&&(delete i.rel,delete i.relWhy,delete i.relAt,delete i.relModel,n++);return n&&persistFeed(id),n}function clearSentiment(id){let e=mem.get(id);if(!e)return 0;let n=0;for(let i of e.feed)i.sent&&(delete i.sent,delete i.sentWhy,delete i.sentAt,delete i.sentModel,n++);return n&&persistFeed(id),n}function runFiles(id){let dir=runsDir(id);if(!(0,import_node_fs3.existsSync)(dir))return[];let out=[];for(let f of(0,import_node_fs3.readdirSync)(dir))if(f.endsWith(".json"))try{out.push({file:(0,import_node_path4.join)(dir,f),ts:f.slice(0,-5),bytes:(0,import_node_fs3.statSync)((0,import_node_path4.join)(dir,f)).size})}catch{}return out.sort((a,b)=>a.ts.localeCompare(b.ts))}function projectUsage(id){let runs2=runFiles(id),runBytes=runs2.reduce((s,x)=>s+x.bytes,0),feedBytes=fileBytes(feedFile(id)),metaBytes=fileBytes(metaFile(id));return{bytes:runBytes+feedBytes+metaBytes,runBytes,feedBytes,metaBytes,runCount:runs2.length,avgRunBytes:runs2.length?Math.round(runBytes/runs2.length):0}}function enforceDiskLimit(id,mb,{keep=30}={}){let limit=Math.max(0,+mb||0)*1024*1024;if(!limit)return{removed:0,freed:0};let runs2=runFiles(id),total=fileBytes(feedFile(id))+fileBytes(metaFile(id))+runs2.reduce((s,x)=>s+x.bytes,0),removed=0,freed=0;for(let r of runs2){if(total<=limit||runs2.length-removed<=keep)break;try{(0,import_node_fs3.rmSync)(r.file,{force:!0}),removed++,freed+=r.bytes,total-=r.bytes}catch{}}let capped=total>limit;if(removed){let e=mem.get(id);if(e&&Array.isArray(e.meta.runs)){let alive=new Set(runFiles(id).map(x=>x.ts)),before=e.meta.runs.length;e.meta.runs=e.meta.runs.filter(r=>alive.has(r.ts)),e.meta.runs.length!==before&&persistMeta(id)}}return{removed,freed,bytes:total,limit,capped}}function appendRunLog(id,ts,notes){let e=mem.get(id);if(!e||!ts||!notes||!notes.length)return!1;let file=(0,import_node_path4.join)(runsDir(id),ts+".json"),run=readJson2(file,null);return run?(run.log=(run.log||[]).concat(notes),writeJson(file,run),saveRunLogCopy(id,ts,run),(e.meta.runs||[])[0]&&e.meta.runs[0].ts===ts&&(e.meta.lastLog=(e.meta.lastLog||[]).concat(notes),persistMeta(id)),!0):!1}function deleteItems(id,urls){let e=mem.get(id);if(!e)return null;let kill=new Set((urls||[]).filter(Boolean).map(urlKey));if(!kill.size)return{removed:0,total:(e.feed||[]).length};let before=e.feed.length;e.feed=e.feed.filter(i=>!kill.has(urlKey(i.url)));let removed=before-e.feed.length;e.meta.deleted=[...new Set((e.meta.deleted||[]).concat([...kill]))],e.meta.deleted.length>2e4&&(e.meta.deleted=e.meta.deleted.slice(-2e4)),e.meta.editedAt=Date.now();for(let r of e.meta.runs||[]){let file=(0,import_node_path4.join)(runsDir(id),r.ts+".json"),run=readJson2(file,null);if(!run||!Array.isArray(run.rows))continue;let n=run.rows.length;run.rows=run.rows.filter(x=>!kill.has(urlKey(x.url))),run.rows.length!==n&&(run.found=run.rows.length,run.added=Math.max(0,(run.added||0)-(n-run.rows.length)),writeJson(file,run),r.found=run.found,r.added=run.added)}return persistFeed(id),persistMeta(id),{removed,total:e.feed.length,deletedTotal:e.meta.deleted.length}}function mergeRun(id,rows,log,ts){let e=mem.get(id);if(!e)return{added:0,total:0};e.meta.runs=e.meta.runs||[];let entry=ts?e.meta.runs.find(r=>r.ts===ts):null,at=entry?entry.at:Date.now();ts||(ts=tsName());let seen=new Set(e.feed.map(i=>urlKey(i.url))),killed=new Set((e.meta.deleted||[]).map(urlKey)),rowsIn=killed.size?rows.filter(r=>!killed.has(urlKey(r.url))):rows;for(let r of rowsIn)!r.url||seen.has(urlKey(r.url))||(seen.add(urlKey(r.url)),e.feed.push({source:r.source,date:r.date,title:r.title,url:r.url,channel:r.channel,channels:r.channels||r.channel,match:r.match,snippet:r.snippet,author:r.author||"",kind:r.kind||"",via:r.via||"",matchIn:r.matchIn||"",comments:Number.isFinite(r.comments)?r.comments:null,firstSeenAt:Date.now(),isNew:!0,run:ts}));e.feed.sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))),e.feed.length>5e3&&(e.feed=e.feed.slice(0,5e3));let added=e.feed.filter(i=>i.run===ts).length,found=rowsIn.length;e.meta.lastRun=at,e.meta.lastLog=log||[],entry?(entry.added=added,entry.found=found):(entry={ts,at,added,found},e.meta.runs.unshift(entry)),e.meta.runs.length>300&&(e.meta.runs=e.meta.runs.slice(0,300)),persistFeed(id),persistMeta(id);try{writeJson((0,import_node_path4.join)(runsDir(id),ts+".json"),{at,added,found,log:log||[],rows:rowsIn})}catch{}saveRunLogCopy(id,ts,{at,added,found,log:log||[]});try{let mb=diskLimitMb(e.meta.config);mb&&Date.now()-(lastSweep.get(id)||0)>300*1e3&&(lastSweep.set(id,Date.now()),enforceDiskLimit(id,mb))}catch{}return{added,total:e.feed.length,ts}}function buildRunLog(id,ts,run){let e=mem.get(id);if(!e||!run)return null;let line=s=>(run.log||[]).find(x=>x.site===s),per=line("(период)"),tm=line("(время)");return{проект:e.meta.name||"",прогон:humanTs(ts)||ts,"id прогона":ts,запрос:(e.meta.config||{}).keyword||"",период:per?per.note:"",время:tm?tm.note:"",найдено:run.found||0,новых:run.added||0,сайты:(run.log||[]).map(l=>{let o={сайт:l.site,найдено:l.found||0,каналы:l.channel||"",заметка:l.note||""};return l.ms&&(o.секунд=Math.round(l.ms/1e3)),o})}}function saveRunLogCopy(id,ts,run){let e=mem.get(id);if(!e)return;let data=buildRunLog(id,ts,run);if(data)try{ensureDir(LOGS_DIR);let name=safeName(e.meta.name);writeJson((0,import_node_path4.join)(LOGS_DIR,logFileName(e.meta.name,ts)),data);let mine=(0,import_node_fs3.readdirSync)(LOGS_DIR).filter(f=>f.endsWith(" — "+name+".json")).sort();for(let f of mine.slice(0,Math.max(0,mine.length-KEEP_LOGS)))try{(0,import_node_fs3.rmSync)((0,import_node_path4.join)(LOGS_DIR,f),{force:!0})}catch{}}catch{}}function runLogJson(id,ts){let run=readJson2((0,import_node_path4.join)(runsDir(id),ts+".json"),null);return run?buildRunLog(id,ts,run):null}function listRuns(id){let e=mem.get(id);if(e&&Array.isArray(e.meta.runs))return e.meta.runs;try{return(0,import_node_fs3.readdirSync)(runsDir(id)).filter(f=>f.endsWith(".json")).sort().reverse().map(f=>({ts:f.replace(/\.json$/,"")}))}catch{return[]}}function getRun(id,ts){return readJson2((0,import_node_path4.join)(runsDir(id),ts+".json"),null)}var import_node_fs3,import_node_url2,import_node_path4,import_node_crypto3,__dir2,DATA,PROJ,SETTINGS,OLD_DB,uid,ensureDir,projDir,metaFile,feedFile,runsDir,tsName,settingsCache,mem,lastSweep,persistMeta,persistFeed,shape,fileBytes,diskLimitMb,LOGS_DIR,KEEP_LOGS,safeName,humanTs,logFileName,init_store=__esm({"desktop/store.js"(){import_node_fs3=require("node:fs"),import_node_url2=require("node:url"),import_node_path4=require("node:path");init_paths();import_node_crypto3=require("node:crypto");init_parse();init_dates();__dir2=(0,import_node_path4.dirname)((0,import_node_url2.fileURLToPath)(__mcFileUrl));migrateLegacyData((from,to)=>{try{(0,import_node_fs3.cpSync)(from,to,{recursive:!0})}catch{}});DATA=DATA_ROOT,PROJ=(0,import_node_path4.join)(DATA,"projects"),SETTINGS=(0,import_node_path4.join)(DATA,"settings.json"),OLD_DB=(0,import_node_path4.join)(__dir2,"data.json"),uid=p=>p+Date.now().toString(36)+Math.random().toString(36).slice(2,6),ensureDir=d=>{try{(0,import_node_fs3.mkdirSync)(d,{recursive:!0})}catch{}};projDir=id=>(0,import_node_path4.join)(PROJ,id),metaFile=id=>(0,import_node_path4.join)(projDir(id),"project.json"),feedFile=id=>(0,import_node_path4.join)(projDir(id),"feed.json"),runsDir=id=>(0,import_node_path4.join)(projDir(id),"runs"),tsName=()=>new Date().toISOString().replace(/[:.]/g,"-").slice(0,23),settingsCache={},mem=new Map;loadAll();migrateOldDb();lastSweep=new Map,persistMeta=id=>{let e=mem.get(id);e&&writeJson(metaFile(id),e.meta)},persistFeed=id=>{let e=mem.get(id);e&&writeJson(feedFile(id),e.feed)};shape=e=>({id:e.meta.id,name:e.meta.name,config:e.meta.config||{},schedule:e.meta.schedule||{mode:"off"},lastRun:e.meta.lastRun||null,log:e.meta.lastLog||[],runs:e.meta.runs||[],items:e.feed||[],ai:e.meta.ai||{},editedAt:e.meta.editedAt||0,tg:tgPublic(e.meta.id)});fileBytes=f=>{try{return(0,import_node_fs3.existsSync)(f)?(0,import_node_fs3.statSync)(f).size:0}catch{return 0}};diskLimitMb=cfg=>Math.max(0,Math.min(1e5,+(cfg||{}).diskMb||0));LOGS_DIR=(0,import_node_path4.join)(DATA,"logs"),KEEP_LOGS=30,safeName=s=>String(s||"проект").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"проект",humanTs=ts=>{let d=new Date(ts.slice(0,23).replace(/-(\d\d)-(\d\d)-(\d\d\d)$/,":$1:$2.$3")+"Z");if(isNaN(d.getTime()))return"";let p2=n=>String(n).padStart(2,"0");return ymd(d)+" "+p2(d.getHours())+":"+p2(d.getMinutes())},logFileName=(name,ts)=>(humanTs(ts)||ts.slice(0,16)).replace(":","-")+" — "+safeName(name)+".json"}});function attention(r,{wasFinding=!1}={}){let note2=String(r&&r.note||""),rows=r&&r.rows||[],ch=String(r&&r.channel||"");if(ch==="error")return{state:"error",reason:"exception",hint:note2};if(ch==="bad-url")return{state:"error",reason:"bad_url",hint:"адрес источника не разобран"};if(ch==="пропущен")return{state:"skipped",reason:"preset_dead",hint:note2};let D2=r&&r.stats&&r.stats.tally;if(D2&&(D2.urlDateN||0)>=3&&(D2.urlDateOff||0)*2>=D2.urlDateN)return{state:"needs_review",reason:"date_suspect",hint:"у "+D2.urlDateOff+" из "+D2.urlDateN+" статей дата со страницы расходится с датой в адресе больше чем на двое суток — похоже, разбор берёт чужую дату (часы в шапке сайта, блок «последние новости»). Даты найденных строк под сомнением; разобрать страницу `inspect`"};if(D2&&D2.pageDayIsRunDay&&(D2.pageDated||0)>=10&&(D2.windowDays||0)>=3)return{state:"needs_review",reason:"date_same",hint:"у всех "+D2.pageDated+" прочитанных статей одна и та же дата — день прогона, хотя окно "+D2.windowDays+" сут. Почерк часов в шапке сайта: разбор берёт не дату статьи. Даты найденных строк под сомнением; разобрать страницу `inspect`"};if(D2&&(D2.bodyN||0)>=8&&D2.bodyMed===0)return{state:"needs_review",reason:"no_body",hint:"текст статей не читается (у большинства из "+D2.bodyN+" пусто) — ключ ищется только по заголовку и описанию; материал с ключом в тексте не найдётся. Если сайт не видео, разбор тела сломан: `inspect` и пресет `drop`"};if(rows.length)return/(^|; )потери: /.test(note2)?{state:"ok_losses",reason:"unchecked_pages",hint:"часть страниц не проверена (см. note: «потери») — среди них мог быть материал"}:{state:"ok",reason:"found",hint:""};if(ch==="telegram")return/оборвалась/.test(note2)?{state:"needs_review",reason:"feed_cut",hint:"лента канала оборвалась посреди обхода (часто HTTP 429) — повторить позже"}:{state:"legit_zero",reason:"no_posts",hint:""};let moved=note2.match(/отброшено \d+ с другого домена\/поддомена \(([^\s)]+) — (\d+)/);if(moved&&/совпало [1-9]/.test(note2))return{state:"needs_review",reason:"moved",hint:"материал нашёлся, но на другом домене ("+moved[1]+") — похоже, издание переехало; проверить адрес"};if(r&&r.stats&&r.stats.unreachable)return{state:"needs_review",reason:"unreachable",hint:"сайт не ответил ни обычным запросом, ни браузером ("+r.stats.unreachable+") — с этого компьютера/сети он недоступен; это «не достучались», а не «не писали». Повторить позже или открыть сайт в браузере руками"};let BE=r&&r.stats&&r.stats.brokenEntries;if(BE&&BE.length&&!(r.rows||[]).length)return{state:"needs_review",reason:"entry_broken",hint:"вход сайта ответил ошибкой: "+BE.map(b=>b.channel+" HTTP "+b.status+" "+b.url).join("; ")+" — адрес в пресете устарел. Найди рабочий: `probe`, затем `preset add`"};let T=r&&r.stats&&r.stats.tally||null;if(!T)return{state:"needs_review",reason:"no_stats",hint:note2||"движок не вернул разбора"};let seen=T.seen||0;if(T.svcProven&&!rows.length)return{state:"legit_zero",reason:"read_no_key",hint:T.svcRead?"служебный вход сайта отдал весь период ("+T.svcRead+" статей с текстом), ключа нет":"сайт сам искал по всему периоду (wp-api) — ключа нет"};if(T.quietPeriod)return{state:"legit_zero",reason:"no_publications",hint:"за период сайт, похоже, ничего не публиковал: самая свежая запись его ленты — "+String(r.stats&&r.stats.newestPub||"").slice(0,10)+", и в карте сайта статей периода нет (лента бывает не по всем разделам и языкам — при сомнении открыть сайт)"};let errs=[r.stats&&r.stats.homeErr&&"главная обычным запросом — "+r.stats.homeErr,T.mapsFailed&&"не открылось карт сайта — "+T.mapsFailed].filter(Boolean);if(!seen&&errs.length)return{state:"needs_review",reason:"site_errors",hint:"сайт в это время отвечал ошибками ("+errs.join(", ")+") — похоже на сбой сайта, а не на смену входа. Повторить прогон по сайту позже; если ошибки повторятся — разбирать вход (`check`, `probe`)"};if(!seen)return{state:"needs_review",reason:"no_candidates",hint:(wasFinding?"сайт РАНЬШЕ давал материал, а сейчас ни одной ссылки-кандидата — ":"ни одной ссылки-кандидата — ")+"похоже, сменился вход (поиск, карта, лента). Запустить `check`"};if((T.noOpen||0)>seen/2)return{state:"needs_review",reason:"not_reachable",hint:"сайт не отдал больше половины статей (защита/таймаут) — это «не достучались», а не «не писали»"};if((T.late||0)>seen/2)return{state:"partial",reason:"time_budget",hint:"упёрлись в бюджет времени — материал мог остаться непроверенным"};if((T.noDate||0)>seen/2)return{state:"needs_review",reason:"no_dates",hint:"больше половины страниц без даты — похоже, сменилась разметка дат (или это не новости). Запустить `check`"};let left=T.notTaken||0,more=T.notTakenCapped?"больше ":"",lost=(T.noOpen||0)+(T.noDate||0)+(T.late||0)+(T.overBudget||0)+left,pool=seen+left;if(lost>=10&&lost>=pool*.05){let bits=[["не открылись",T.noOpen],["без даты",T.noDate],["не успели по времени",T.late],["не влезли в бюджет",T.overBudget],["не взяли за бюджетом канала глубины",left?more+left:0]].filter(x=>x[1]).map(x=>x[0]+" "+x[1]),cap2=left&&left>=lost/2,titles=!cap2||T.titlesAll==null?"":T.titlesAll?" Заголовки всех статей периода проверены ("+({rss:"лента",api:"служебный вход сайта"}[r.stats.titlesFrom]||"карта новостей")+") — непроверенным остался только текст.":" Заголовки непрочитанных статей тоже НЕ проверены: ни карта новостей, ни лента сайта не покрывают весь период.";return{state:"partial",reason:cap2?"budget_cap":"unchecked_pages",titlesChecked:cap2&&T.titlesAll!=null?!!T.titlesAll:null,hint:"не проверено "+more+lost+" страниц из "+more+pool+" ("+bits.join(", ")+") — ноль ничего не доказывает: среди непрочитанного мог быть материал."+titles}}return(T.noKw||0)>0?{state:"legit_zero",reason:"read_no_key",hint:""}:{state:"partial",reason:"none_in_period",hint:"за период не прочитано ни одной статьи сайта: кандидаты были, но все вне периода или не статьи — ноль ничего не доказывает."+(T&&T.mapLied?" Карта сайта не показывает даты публикации (lastmod — время правки): по ней читать нечего.":"")+" Поищи вход к свежему (лента, карта новостей, `probe`)"}}var init_attention=__esm({"extension/lib/attention.js"(){}});function goldenSample({url,date,dateVia,bodyLen,title,viaBrowser}){if(viaBrowser||!url||!date||!title)return null;let d=parseDate(date);return!d||!(bodyLen>=MIN_BODY)?null:{url,host:hostOf(url),day:ymd(d),dateVia:dateVia||"",bodyLen,title:String(title).slice(0,160)}}function addGolden(store,sample,now=Date.now()){if(!sample||!sample.host)return!1;let H2=store.hosts||(store.hosts={}),list=H2[sample.host]||(H2[sample.host]=[]);if(list.some(e2=>e2.url===sample.url))return!1;let dead=list.findIndex(e2=>(e2.missed||0)>=2);if(dead<0&&(list.length>=GOLDEN_PER_HOST||list.some(e2=>e2.day===sample.day)&&now-Math.min(...list.map(e2=>e2.at||now))<14*864e5))return!1;let e={...sample,at:now};return dead>=0?list[dead]=e:list.push(e),!0}function compareGolden(e,parsed){if(!parsed||!parsed.ok)return{state:"no_open",why:"не открылась"+(parsed&&parsed.err?" ("+parsed.err+")":"")};if(parsed.challenge)return{state:"no_open",why:"вместо статьи — заглушка защиты"};if(!parsed.date)return{state:"broken",kind:"date_lost",why:"дата больше не читается (была "+e.day+", «"+(e.dateVia||"?")+"»)"};let d=parseDate(parsed.date),day=d?ymd(d):"";if(day&&day!==e.day)return{state:"broken",kind:"date_changed",why:"дата читается другая: была "+e.day+", стала "+day+" (разметка дат сменилась — берём чужую?)"};let was=e.bodyLen,now=parsed.bodyLen||0;return now?now*BODY_FACTOR<was?{state:"broken",kind:"body_shrunk",why:"текст статьи читается хуже: было "+was+" знаков, стало "+now+" — ключ в тексте может не находиться"}:now>was*BODY_FACTOR?{state:"broken",kind:"body_grew",why:"в текст статьи попало лишнее: было "+was+" знаков, стало "+now+" — чужие заголовки могут давать ложные находки"}:{state:"ok",why:""}:{state:"broken",kind:"body_lost",why:"текст статьи больше не читается (было "+was+" знаков)"}}function goldenVerdict(results){let read=results.filter(r=>r.state!=="no_open"),bad=read.filter(r=>r.state==="broken");return results.length?read.length?bad.length>=2&&bad.length*2>read.length?{state:"broken",why:bad[0].why+(bad.length>1?" (так у "+bad.length+" из "+read.length+" эталонов)":"")}:bad.length?{state:"watch",why:"у одного эталона: "+bad[0].why+" — одной статьи мало, чтобы говорить о поломке"}:{state:"ok",why:""}:{state:"no_open",why:"ни один эталон не открылся обычным запросом"}:{state:"unknown",why:"эталонов ещё нет"}}function noteChecked(list,results,now=Date.now()){list.forEach((e,i)=>{let r=results[i];r&&(e.checked=now,e.last=r.state,e.lastWhy=r.why||"",e.missed=r.state==="no_open"?(e.missed||0)+1:0)})}var GOLDEN_PER_HOST,MIN_BODY,BODY_FACTOR,hostOf,init_golden=__esm({"extension/lib/golden.js"(){init_dates();GOLDEN_PER_HOST=3,MIN_BODY=400,BODY_FACTOR=2,hostOf=u=>{try{return new URL(u).host.toLowerCase().replace(/^www\./,"")}catch{return""}}}});function load(){if(cache)return cache;try{cache=JSON.parse((0,import_node_fs4.readFileSync)(FILE(),"utf8"))}catch{cache=null}return(!cache||typeof cache!="object")&&(cache={}),cache.hosts=cache.hosts||{},cache.verdicts=cache.verdicts||{},cache}function persistGolden(){if(!dirty)return;let f=FILE(),tmp=f+".tmp";try{(0,import_node_fs4.writeFileSync)(tmp,JSON.stringify(cache)),(0,import_node_fs4.renameSync)(tmp,f),dirty=!1}catch{}}function goldenSink2(info){let s=goldenSample(info);s&&addGolden(load(),s)&&(dirty=!0)}function goldenInfo(){let c=load();return{at:c.at||null,hosts:Object.keys(c.hosts).length,busy:!!busy,verdicts:c.verdicts}}function checkGoldenNow({hosts=null,reparse=reparseArticle,budgetMs=600*1e3,now=()=>Date.now()}={}){return busy||(busy=(async()=>{try{let c=load(),deadline=now()+budgetMs,want=hosts?hosts.map(h=>String(h).toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0]):Object.keys(c.hosts),checked=0,left=0;for(let h of want){let list=c.hosts[h];if(!list||!list.length)continue;if(now()>deadline){left++;continue}let res=[];for(let e of list)res.push(compareGolden(e,await reparse(e.url)));noteChecked(list,res,now()),c.verdicts[h]={...goldenVerdict(res),at:now(),n:list.length},checked++}return hosts||(c.at=now()),dirty=!0,persistGolden(),{ok:!0,checked,left}}catch(e){return{ok:!1,err:String(e&&e.message||e)}}finally{busy=null}})(),busy)}function goldenStale(t=Date.now()){let c=load();return Object.keys(c.hosts).length>0&&(!c.at||t-c.at>WEEK)}var import_node_fs4,import_node_path5,FILE,WEEK,cache,dirty,busy,init_golden_store=__esm({"desktop/golden-store.js"(){import_node_fs4=require("node:fs"),import_node_path5=require("node:path");init_paths();init_golden();init_channels();FILE=()=>(0,import_node_path5.join)(process.env.MEDIACHROME_DATA||DATA_ROOT,"golden.json"),WEEK=7*864e5,cache=null,dirty=!1,busy=null}});function migrate(){if((db.__v||1)>=MEM_V)return!1;if(!Object.keys(db).length)return db.__v=MEM_V,!1;for(let[h,m]of Object.entries(db))if(!(h==="__v"||!m||!m.ch))for(let c of BROWSER_CH)m.ch[c]&&(m.ch[c].dead=0,m.ch[c].idle=0);return db.__v=MEM_V,!0}function load2(){try{db=(0,import_node_fs5.existsSync)(FILE2)?JSON.parse((0,import_node_fs5.readFileSync)(FILE2,"utf8")):{}}catch{db={}}(!db||typeof db!="object")&&(db={}),migrate()&&save2()}function save2(){try{(0,import_node_fs5.mkdirSync)(DIR2,{recursive:!0});let tmp=FILE2+".tmp";(0,import_node_fs5.writeFileSync)(tmp,JSON.stringify(db,null,2)),(0,import_node_fs5.renameSync)(tmp,FILE2)}catch{}}function hostOf2(site){try{return new URL(/:\/\//.test(site)?site:"https://"+site).host.replace(/^www\./,"")}catch{return String(site||"").trim()}}function datePick(site){let m=db[hostOf2(site)];return!m||!m.pick||!m.pick.date||m.runs%REPROBE_EVERY===REPROBE_EVERY-1?"":m.pick.date.via||""}function recordPicks(site,viaCounts){if(!viaCounts)return"";let pairs=Object.entries(viaCounts).filter(([k,v])=>k&&v>0);if(!pairs.length||pairs.reduce((s,[,v])=>s+v,0)<PICK_MIN)return"";pairs.sort((a,b)=>b[1]-a[1]);let[via,n]=pairs[0],m=rec(hostOf2(site));m.pick=m.pick||{};let cur=m.pick.date;if(!cur||!cur.via)return m.pick.date={via,n,at:m.runs},m.pick.pending=null,"";if(cur.via===via)return m.pick.date={via,n,at:m.runs},m.pick.pending=null,"";if((viaCounts[cur.via]||0)>=n*PICK_MIX)return m.pick.pending=null,"";let p=m.pick.pending&&m.pick.pending.via===via?m.pick.pending:{via,runs:0};return p.runs++,m.pick.pending=p,p.runs<PICK_CONFIRM?"":(m.pick.date={via,n,at:m.runs},m.pick.pending=null,cur.via)}function datePickRu(site){let m=db[hostOf2(site)];return m&&m.pick&&m.pick.date?pickRu(m.pick.date.via):""}function plan(site){let h=hostOf2(site),m=db[h],skip=new Set;if(!m)return{skip,host:h,reprobe:!1};if((m.zero||0)>=2&&m.everFound)return{skip,host:h,reprobe:!1};let reprobe=m.runs%REPROBE_EVERY===REPROBE_EVERY-1;if(!reprobe)for(let c of SKIPPABLE){let s=m.ch[c];s&&s.dead>=DEAD_AT&&skip.add(c)}if(!reprobe)for(let c of BY_CONTRIB){let s=m.ch[c];s&&s.idle>=idleLimit(c)&&skip.add(c)}if(!reprobe&&!m.everFound&&(m.zero||0)>=DEAD_AT)for(let c of SKIPPABLE)skip.add(c);return{skip,host:h,reprobe}}function record(site,stats){if(!stats)return;let h=hostOf2(site),m=rec(h);m.runs++;for(let c of SKIPPABLE){let links=stats[c];if(links==null)continue;let s=m.ch[c]=m.ch[c]||{dead:0,okEver:!1};links>0?(s.dead=0,s.okEver=!0):s.dead++}typeof stats.total=="number"&&(m.zero=stats.total>0?0:(m.zero||0)+1,stats.total>0&&(m.everFound=!0));let contrib=stats.contrib,notRun=new Set(stats.notRun||[]);if(contrib&&stats.total>0)for(let c of BY_CONTRIB){if(notRun.has(c)||c in stats&&stats[c]===null)continue;let s=m.ch[c]=m.ch[c]||{idle:0,okEver:!1};(CONTRIB_KEYS[c]||[c]).reduce((n,k)=>n+(contrib[k]||0),0)>0?(s.idle=0,s.okEver=!0):s.idle=(s.idle||0)+1}}function persist(){save2()}function reload(){load2()}var import_node_fs5,import_node_path6,DIR2,FILE2,SKIPPABLE,BY_CONTRIB,CONTRIB_KEYS,DEAD_AT,IDLE_AT,idleLimit,REPROBE_EVERY,db,MEM_V,BROWSER_CH,rec,PICK_MIN,PICK_MIX,PICK_CONFIRM,pickRu,init_site_memory=__esm({"desktop/site-memory.js"(){import_node_fs5=require("node:fs"),import_node_path6=require("node:path");init_paths();init_parse();DIR2=DATA_ROOT,FILE2=(0,import_node_path6.join)(DIR2,"site-memory.json"),SKIPPABLE=["render","external","sitesearch"],BY_CONTRIB=["sitemap","render","sitesearch"],CONTRIB_KEYS={sitemap:["sitemap"],render:["render","render*"],sitesearch:["браузер-поиск","браузер-поиск*"]},DEAD_AT=4,IDLE_AT={sitesearch:2},idleLimit=c=>IDLE_AT[c]||DEAD_AT,REPROBE_EVERY=5,db={},MEM_V=2,BROWSER_CH=["render","sitesearch"];load2();rec=h=>db[h]=db[h]||{runs:0,ch:{}},PICK_MIN=3;PICK_MIX=.25,PICK_CONFIRM=2;pickRu=via=>DATE_PICK_RU[via]||via||""}});var date_cache_exports={};__export(date_cache_exports,{get:()=>get,persist:()=>persist2,reload:()=>reload2,set:()=>set,size:()=>size,summary:()=>summary});function readFile(f){if(!(0,import_node_fs6.existsSync)(f))return null;try{let raw=JSON.parse((0,import_node_fs6.readFileSync)(f,"utf8"));return!raw||!raw.urls?{bad:"в файле нет записей"}:raw}catch(e){return{bad:String(e&&e.message||e).slice(0,80)}}}function load3(raw){if(raw.v!==V){wasReset=!0;return}for(let[u,rec2]of Object.entries(raw.urls))rec2&&rec2.d&&db2.set(u,{d:rec2.d,t:rec2.t||today()})}function reload2(){db2=new Map,dirty2=!1,brokenWhy="",needArchive=!1,saveBlocked=!1,usedPrev=!1,wasReset=!1,lastSave=0;let main=readFile(FILE3);if(hadFile=main!==null,main&&!main.bad){load3(main);return}if(!main)return;brokenWhy=main.bad,needArchive=!0;let prev=readFile(PREV);prev&&!prev.bad&&(load3(prev),usedPrev=!0)}function get(url){let rec2=db2.get(url);return rec2?(rec2.t!==today()&&(rec2.t=today(),dirty2=!0),rec2.d):null}function set(url,date){if(!url||!date)return;let prev=db2.get(url);prev&&prev.d===date||(db2.set(url,{d:String(date),t:today()}),dirty2=!0)}function prune(){if(db2.size<=MAX)return;let all=[...db2.entries()].sort((a,b)=>b[1].t-a[1].t).slice(0,KEEP);db2=new Map(all)}function move(from,to){try{return(0,import_node_fs6.existsSync)(from)?((0,import_node_fs6.renameSync)(from,to),!0):!1}catch{return!1}}function persist2(force=!1){if(!(!dirty2||saveBlocked)&&!(!force&&lastSave&&Date.now()-lastSave<SAVE_GAP_MS)){if(needArchive){try{(0,import_node_fs6.existsSync)(BROKEN)&&(0,import_node_fs6.unlinkSync)(BROKEN)}catch{}if(!move(FILE3,BROKEN)){saveBlocked=!0;return}needArchive=!1}try{prune(),(0,import_node_fs6.mkdirSync)(DATA_ROOT,{recursive:!0});let urls={};for(let[u,rec2]of db2)urls[u]=rec2;let tmp=FILE3+".tmp";(0,import_node_fs6.writeFileSync)(tmp,JSON.stringify({v:V,urls})),move(FILE3,PREV),(0,import_node_fs6.renameSync)(tmp,FILE3),dirty2=!1,lastSave=Date.now()}catch{}}}function size(){return db2.size}function summary(){let n=db2.size;return brokenWhy?"память дат: ОСНОВНОЙ ФАЙЛ НЕ ПРОЧИТАЛСЯ ("+brokenWhy+") — "+(usedPrev?"взята запасная копия, потеряно только самое новое (в памяти "+n+")":"запасной копии тоже не было, память собирается заново (в памяти "+n+"); этот прогон и следующий будут дольше обычного")+(saveBlocked?". Отложить нечитаемый файл не удалось, поэтому новые даты НЕ сохранены — старую память не трогаем":". Нечитаемый файл сохранён как date-cache.broken.json — не удаляйте его, по нему видно причину"):wasReset?"память дат сброшена: поменялся разбор дат — собирается заново (в памяти "+n+")":n?"память дат: "+n+" статей — повторно их не качаем":hadFile?"":"память дат пока пуста — первый прогон собирает её с нуля"}var import_node_fs6,import_node_path7,FILE3,V,MAX,KEEP,PREV,BROKEN,db2,dirty2,brokenWhy,needArchive,saveBlocked,usedPrev,wasReset,hadFile,today,SAVE_GAP_MS,lastSave,init_date_cache=__esm({"desktop/date-cache.js"(){import_node_fs6=require("node:fs"),import_node_path7=require("node:path");init_paths();FILE3=(0,import_node_path7.join)(DATA_ROOT,"date-cache.json"),V=5,MAX=2e5,KEEP=15e4,PREV=(0,import_node_path7.join)(DATA_ROOT,"date-cache.prev.json"),BROKEN=(0,import_node_path7.join)(DATA_ROOT,"date-cache.broken.json"),db2=new Map,dirty2=!1,brokenWhy="",needArchive=!1,saveBlocked=!1,usedPrev=!1,wasReset=!1,hadFile=!1,today=()=>Math.floor(Date.now()/864e5);SAVE_GAP_MS=typeof process<"u"&&process.env&&Number(process.env.MC_DC_SAVE_GAP_MS)||18e4,lastSave=0}});function ymdLocal(d){let p=n=>String(n).padStart(2,"0");return d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate())}function shiftDays(d,days){let x=new Date(d.getFullYear(),d.getMonth(),d.getDate());return x.setDate(x.getDate()+days),x}function resolvePeriod(config,now=new Date){let c=config||{},today2=ymdLocal(now),mode=c.periodMode||"fixed";if(mode==="rolling"){let asked=Number(c.periodDays),days=Number.isFinite(asked)&&asked>=MIN_ROLLING_DAYS?Math.floor(asked):MIN_ROLLING_DAYS,from2=ymdLocal(shiftDays(now,-(days-1)));return{from:from2,to:today2,why:`скользящее окно: последние ${days} дн. (${from2} … ${today2})`}}if(mode==="since"){let from2=c.from||today2;return from2>today2?{from:today2,to:today2,why:`начало (${from2}) ещё не наступило — беру только сегодня`}:{from:from2,to:today2,why:`от даты и до сегодня (${from2} … ${today2})`}}let from=c.from||"",to=c.to||"";return!from&&!to?{from,to,why:"период НЕ ЗАДАН — беру за всё время, в выдачу попадёт и старое"}:from?to?{from,to,why:`фиксированное окно (${from} … ${to})`}:{from,to,why:`с ${from} и без конца — беру всё, что новее`}:{from,to,why:`без начала — беру всё до ${to} включительно`}}var MIN_ROLLING_DAYS,init_period=__esm({"desktop/period.js"(){MIN_ROLLING_DAYS=2}});var fb_parse_exports={};__export(fb_parse_exports,{engagementProbe:()=>engagementProbe,facebookProfile:()=>facebookProfile,fbRows:()=>fbRows,fbWindow:()=>fbWindow,feedChunks:()=>feedChunks,isFacebook:()=>isFacebook,oldestAt:()=>oldestAt,parseFeed:()=>parseFeed2,postFromEdge:()=>postFromEdge});function facebookProfile(input){let s=String(input||"").trim();if(!s)return null;let u;try{u=new URL(/^https?:\/\//i.test(s)?s:"https://"+s.replace(/^\/+/,""))}catch{return null}if(!/(^|\.)facebook\.com$|(^|\.)fb\.com$/i.test(u.hostname))return null;let byId=u.searchParams.get("id"),seg=u.pathname.split("/").filter(Boolean),name=/^profile\.php$/i.test(seg[0]||"")?byId?"profile.php?id="+byId:"":seg[0]||"";return!name||/^(groups|watch|marketplace|events|gaming|pages|stories|reel|photo|share|login|help|settings)$/i.test(name)?null:{name,url:"https://www.facebook.com/"+name,label:"facebook.com/"+name.replace(/^profile\.php\?id=/,"id")}}function jsonLines(text){let out=[];for(let line of String(text||"").split(`
`)){let s=line.trim();if(!(!s||s[0]!=="{"))try{out.push(JSON.parse(s))}catch{}}return out}function feedChunks(text){let edges=[],info={cursor:"",hasNext:!1,seenFeed:!1};for(let j of jsonLines(text)){let u=j&&j.data&&j.data.node&&j.data.node.timeline_list_feed_units;if(u){info.seenFeed=!0,Array.isArray(u.edges)&&edges.push(...u.edges),u.page_info&&(info.cursor=u.page_info.end_cursor||"",info.hasNext=!!u.page_info.has_next_page);continue}if(isEdgeChunk(j&&j.path)&&j.data&&j.data.node){info.seenFeed=!0,edges.push(j.data);continue}let pi=j&&j.data&&j.data.page_info;pi&&Array.isArray(j.path)&&j.path.includes("timeline_list_feed_units")&&(info.seenFeed=!0,info.cursor=pi.end_cursor||info.cursor,info.hasNext=!!pi.has_next_page)}return{edges,info}}function deep(node,want,{skip=["attached_story"],depth=9}={}){let seen=new Set,walk=(o,d)=>{if(!o||typeof o!="object"||d>depth||seen.has(o))return;if(seen.add(o),Array.isArray(o)){for(let x of o){let r=walk(x,d+1);if(r!==void 0)return r}return}let direct=want(o);if(direct!==void 0)return direct;for(let k of Object.keys(o)){if(skip.includes(k))continue;let r=walk(o[k],d+1);if(r!==void 0)return r}};return walk(node,0)}function timeOf(node){if(!node)return;let meta=get2(node,"comet_sections","context_layout","story","comet_sections","metadata"),fromMeta=Array.isArray(meta)?meta.map(m=>num(get2(m,"story","creation_time"))).find(x=>x!==void 0):void 0;return num(node.creation_time)??num(get2(node,"comet_sections","timestamp","story","creation_time"))??fromMeta??deep(node,o=>num(o.creation_time),{skip:SKIP_ALL})}function textOf(node){if(node)return str(get2(node,"message","text"))??str(get2(node,"comet_sections","message","story","message","text"))??deep(node,o=>o.message&&str(o.message.text)||void 0,{skip:SKIP_ALL})}function commentsOf(...nodes){for(let n of nodes){let u=ufiOf(n);if(!u)continue;let c=count(get2(u,"comment_rendering_instance","comments","total_count"))??count(u.total_comment_count);if(c!==void 0)return c}return null}function engagementProbe(text){let s=String(text||""),hits=re=>(s.match(re)||[]).length;return{reactions:hits(/"(?:reaction_count|i18n_reaction_count|top_reactions|reaction_display_strategy|likers)"/g),shares:hits(/"(?:share_count|share_count_reduced|reshare_count)"/g)}}function postFromEdge(edge){let node=edge&&(edge.node||edge);if(!node||typeof node!="object")return null;let st=node.comet_sections&&node.comet_sections.content&&node.comet_sections.content.story||node,ats=[st.attached_story,node.attached_story].filter(Boolean),pickAt=fn=>{for(let a of ats){let v=fn(a);if(v!==void 0&&v!=="")return v}},id=idOf(st)??idOf(node),url=urlOf2(st)??urlOf2(node);if(!id&&!url)return null;let author=actorOf(st)??actorOf(node)??{name:"",url:""},post={id:id||url,url:url||"",at:timeOf(node)??timeOf(st)??0,author:author.name,authorUrl:author.url,text:textOf(st)??textOf(node)??"",comments:commentsOf(node,st),repost:null};if(ats.length){let ra=pickAt(actorOf)||{name:"",url:""};post.repost={author:ra.name,authorUrl:ra.url,url:pickAt(urlOf2)||"",text:pickAt(textOf)||"",at:pickAt(timeOf)||0}}return post}function parseFeed2(text){let{edges,info}=feedChunks(text),posts=[],seen=new Set;for(let e of edges){let p=postFromEdge(e);p&&(seen.has(p.id)||(seen.add(p.id),posts.push(p)))}return{posts,cursor:info.cursor,hasNext:info.hasNext,seenFeed:info.seenFeed}}function fbWindow(period,days,now=Date.now()){let d=Math.max(1,Math.min(3,+days||1)),stamp2=(s,tail)=>{if(!s)return NaN;let t=new Date(String(s)+tail).getTime();return Number.isFinite(t)?t:NaN},pFrom=stamp2(period&&period.from,"T00:00:00"),pTo=stamp2(period&&period.to,"T23:59:59"),fromMs=Math.max(Number.isFinite(pFrom)?pFrom:-1/0,now-d*864e5),toMs=Math.min(Number.isFinite(pTo)?pTo:1/0,now);return{fromMs,toMs,days:d}}function fbRows(posts,{groups,exGroups=[],source:source2,fromMs,toMs}){if(!Number.isFinite(fromMs)||!Number.isFinite(toMs))throw new Error("окно времени не посчиталось ("+fromMs+" … "+toMs+") — это ошибка в программе, а не в настройках");let terms=queryTerms(groups),rows=[],tally={всего:0,"вне периода":0,"без даты":0,"ключа нет":0,"минус-слово":0};for(let p of posts){if(tally.всего++,!p.at){tally["без даты"]++;continue}let ms2=p.at*1e3;if(ms2<fromMs||ms2>toMs){tally["вне периода"]++;continue}let own=p.text||"",shared=p.repost&&p.repost.text||"",inOwn=!!own&&matchGroups(own.toLowerCase(),groups),inShared=!!shared&&matchGroups(shared.toLowerCase(),groups);if(!inOwn&&!inShared){tally["ключа нет"]++;continue}if(exGroups.length&&matchGroups((own+" "+shared).toLowerCase(),exGroups)){tally["минус-слово"]++;continue}let kind=p.repost?"репост":"авторский",where=inOwn&&inShared?"в подписи и в репосте":inOwn?"в подписи":"в тексте репоста",src=inOwn?own:shared,title=src.split(`
`).map(x=>x.trim()).find(Boolean)||"(без текста)";rows.push({source:source2,date:new Date(ms2).toISOString(),title:title.slice(0,120),url:p.url,channel:"facebook",channels:"facebook",match:inOwn?"подпись":"репост",snippet:makeSnippet(src,terms),author:p.author||"",kind,via:p.repost?(p.repost.author||"чужой пост")+(p.repost.url?" — "+p.repost.url:""):"",matchIn:where,comments:Number.isFinite(p.comments)?p.comments:null})}return{rows,tally}}var isFacebook,isEdgeChunk,num,str,get2,SKIP_ALL,oneActor,actorOf,urlOf2,idOf,ufiOf,count,oldestAt,init_fb_parse=__esm({"desktop/fb-parse.js"(){init_channels();isFacebook=input=>!!facebookProfile(input);isEdgeChunk=p=>Array.isArray(p)&&p.length>=2&&p[p.length-2]==="edges"&&typeof p[p.length-1]=="number"&&p.includes("timeline_list_feed_units");num=v=>typeof v=="number"&&isFinite(v)&&v>0?v:void 0,str=v=>typeof v=="string"&&v.trim()?v:void 0,get2=(o,...path)=>path.reduce((x,k)=>x==null?x:x[k],o),SKIP_ALL=["attached_story","attachments","attachment","style_infos","media"];oneActor=o=>{if(!o||!Array.isArray(o.actors)||!o.actors.length)return;let a=o.actors[0];return a&&str(a.name)?{name:a.name,url:str(a.url)||""}:void 0},actorOf=node=>node?oneActor(node)??deep(node,oneActor,{skip:SKIP_ALL}):void 0,urlOf2=node=>node?str(node.wwwURL)??str(node.permalink_url)??deep(node,o=>str(o.wwwURL)||str(o.permalink_url),{skip:SKIP_ALL}):void 0,idOf=node=>node?str(node.post_id)??(num(node.post_id)?String(node.post_id):void 0)??deep(node,o=>str(o.post_id)||(num(o.post_id)?String(o.post_id):void 0),{skip:SKIP_ALL}):void 0,ufiOf=node=>get2(node,"comet_sections","feedback","story","story_ufi_container","story","feedback_context","feedback_target_with_context"),count=v=>typeof v=="number"&&Number.isFinite(v)&&v>=0?v:void 0;oldestAt=posts=>posts.reduce((m,p)=>p.at&&(!m||p.at<m)?p.at:m,0)}});function outbound(config){let off=!!(config&&config.noExternal);return{ai:!off,bot:!off,extSearch:!off,locked:off}}var OUT_OFF,init_outbound=__esm({"desktop/outbound.js"(){OUT_OFF="у проекта запрещена отправка данных во внешний контур (настройка проекта)"}});var social_visits_exports={};__export(social_visits_exports,{DEFAULT_LIMIT:()=>DEFAULT_LIMIT,_reset:()=>_reset,canVisit:()=>canVisit,nextAt:()=>nextAt,note:()=>note,persist:()=>persist3,reload:()=>reload3,summary:()=>summary2,visitsToday:()=>visitsToday});function reload3(){db3=new Map;try{let raw=(0,import_node_fs7.existsSync)(FILE4)?JSON.parse((0,import_node_fs7.readFileSync)(FILE4,"utf8")):null;for(let[k,v]of Object.entries(raw&&raw.hosts||{}))Array.isArray(v)&&db3.set(k,v.filter(x=>typeof x=="number"&&isFinite(x)))}catch{db3=new Map}return dirty3=!1,db3.size}function persist3(){if(!dirty3)return!1;try{(0,import_node_fs7.mkdirSync)((0,import_node_path8.dirname)(FILE4),{recursive:!0});let hosts={};for(let[k,v]of db3)v.length&&(hosts[k]=v);let tmp=FILE4+".tmp";return(0,import_node_fs7.writeFileSync)(tmp,JSON.stringify({v:1,hosts},null,2)),(0,import_node_fs7.renameSync)(tmp,FILE4),dirty3=!1,!0}catch{return!1}}function canVisit(key,{limit=DEFAULT_LIMIT,now=Date.now()}={}){let lim=Math.max(1,+limit||DEFAULT_LIMIT),list=fresh(key,now);if(list.length>=lim){let wait=DAY2-(now-Math.min(...list));return{ok:!1,used:list.length,limit:lim,why:"за сутки уже "+list.length+" захода из "+lim+" — следующий через "+hhmm(wait)}}let gap=Math.floor(DAY2/lim),last=list.length?Math.max(...list):0;if(last&&now-last<gap){let ago=now-last;return{ok:!1,used:list.length,limit:lim,why:(ago<6e4?"заходили только что":"заходили "+hhmm(ago)+" назад")+" — на профиль ходим не чаще раза в "+hhmm(gap)}}return{ok:!0,used:list.length,limit:lim,why:""}}function note(key,now=Date.now()){let list=fresh(key,now);return list.push(now),db3.set(key,list),dirty3=!0,list.length}function nextAt(key,{limit=DEFAULT_LIMIT,now=Date.now()}={}){if(canVisit(key,{limit,now}).ok)return 0;let list=fresh(key,now),lim=Math.max(1,+limit||DEFAULT_LIMIT);return list.length>=lim?Math.min(...list)+DAY2:Math.max(...list)+Math.floor(DAY2/lim)}function _reset(){db3=new Map,dirty3=!1}var import_node_fs7,import_node_path8,FILE4,DAY2,DEFAULT_LIMIT,db3,dirty3,fresh,hhmm,visitsToday,summary2,init_social_visits=__esm({"desktop/social-visits.js"(){import_node_fs7=require("node:fs"),import_node_path8=require("node:path");init_paths();FILE4=(0,import_node_path8.join)(DATA_ROOT,"social-visits.json"),DAY2=24*3600*1e3,DEFAULT_LIMIT=3,db3=new Map,dirty3=!1;fresh=(key,now)=>(db3.get(key)||[]).filter(x=>now-x<DAY2),hhmm=ms2=>{let m=Math.round(ms2/6e4);if(m<1)return"только что";if(m<60)return m+" мин";let h=Math.floor(m/60),r=m%60;return h+" ч"+(r?" "+r+" мин":"")};visitsToday=(key,now=Date.now())=>fresh(key,now).length,summary2=(now=Date.now())=>{let n=[...db3.keys()].filter(k=>fresh(k,now).length).length;return n?"профилей соцсетей посещено за сутки: "+n:""}}});function setBrowserStats(fn,reset){typeof fn=="function"&&(browserStats=fn),typeof reset=="function"&&(resetBrowserStats=reset)}function setBrowserCloser(fn){typeof fn=="function"&&(closeRunBrowsers=fn)}function setFacebookReader(fn){typeof fn=="function"&&(readFacebook=fn)}async function runProject(project,onProgress,opts={}){let onStep=typeof opts.onStep=="function"?opts.onStep:null,stopping2=typeof opts.stopping=="function"?opts.stopping:()=>!1,stopped=!1,c=project.config||{};if(!String(c.keyword||"").trim())return{rows:[],log:[{site:"(проект)",channel:"—",found:0,note:"не задан запрос — прогон пропущен"}]};resetDdgThrottle(),reload(),reload2(),setDateStore(date_cache_exports),setGoldenSink(goldenSink2);let sites=(c.sites||[]).map(s=>String(s).trim()).filter(Boolean),per=resolvePeriod(c),out=outbound(c),base={keyword:c.keyword,exclude:c.exclude||"",morph:c.morph!==!1,from:per.from,to:per.to,...out.extSearch?{}:{external:!1}},rows=[],log=[],seen=new Map,tRun=Date.now(),totalSrc=sites.length+(c.facebook||[]).filter(x=>String(x||"").trim()).length+(c.youtube&&c.youtube.enabled?1:0),stepDone=0,tick2=site=>{if(onStep)try{onStep({done:stepDone,total:totalSrc,found:rows.length,site:site||""})}catch{}};tick2(""),resetBrowserStats&&resetBrowserStats();let idx=0,doneCount=0,checkpoint=()=>{if(onProgress)try{onProgress(rows.slice(),log.slice())}catch{}},worker=async()=>{for(;idx<sites.length;){if(stopping2()){stopped=!0;break}let site=sites[idx++],tSite=Date.now();tick2(site);try{let{skip,reprobe}=plan(site),datePick2=datePick(site),r=await searchSite(site,{...base,skip,reprobe,datePick:datePick2});record(site,r.stats);let wasPick=recordPicks(site,r.stats&&r.stats.picks),nowPick=datePickRu(site);nowPick&&(r.note=(r.note?r.note+"; ":"")+(wasPick?"дата теперь берётся иначе: было «"+pickRu(wasPick)+"», стало «"+nowPick+"» — сайт сменил разметку":"дата: "+nowPick));for(let row of r.rows){if(!row.url)continue;let key=urlKey(row.url),prev=seen.get(key);if(prev){prev.channels=[...new Set((prev.channels+" + "+(row.channels||"")).split(" + ").filter(Boolean))].join(" + ");continue}seen.set(key,row),rows.push(row)}let A=attention(r),T=r.stats&&r.stats.tally||{},h={st:A.state,why:A.reason};T.bodyN&&(h.bodyN=T.bodyN,h.bodyMed=T.bodyMed),log.push({site,channel:r.channel,found:r.rows.length,note:r.note,ms:Date.now()-tSite,health:h})}catch(e){log.push({site,channel:"error",found:0,note:String(e&&e.message||e),ms:Date.now()-tSite})}stepDone++,tick2(""),++doneCount%3===0&&(persist(),persist2(),persistGolden(),checkpoint())}};await Promise.all(Array.from({length:Math.min(4,sites.length||1)},worker)),persist(),persist2(!0),persistGolden(),checkpoint();let fbList=(c.facebook||[]).map(x=>facebookProfile(x)).filter(Boolean);if(fbList.length){let limit=Math.max(1,Math.min(6,+c.fbVisits||DEFAULT_LIMIT)),now=Date.now(),{fromMs,toMs,days}=fbWindow(per,c.fbDays,now),groups=parseQuery(c.keyword,c.morph!==!1),exGroups=parseQuery(c.exclude||"",c.morph!==!1);reload3(),log.push({site:"(фейсбук)",channel:"—",found:0,note:"профилей "+fbList.length+"; окно "+days+" сут. ("+new Date(fromMs).toLocaleString("ru-RU")+" … "+new Date(toMs).toLocaleString("ru-RU")+"); на профиль не чаще "+limit+" раз в сутки"});for(let p of fbList){if(stopping2()){stopped=!0;break}let tP=Date.now();tick2(p.label);let can=canVisit(p.label,{limit});if(!can.ok){log.push({site:p.label,channel:"facebook",found:0,note:"пропущен: "+can.why});continue}if(!readFacebook){log.push({site:p.label,channel:"facebook",found:0,note:"нет браузера — соцсети читаются только с Playwright (запусти setup-windows.bat)"});continue}try{note(p.label);let r=await readFacebook(p.url,{sinceMs:fromMs,maxScrolls:days<=1?3:6});if(!r||!r.ok){log.push({site:p.label,channel:"facebook",found:0,ms:Date.now()-tP,note:r&&r.err||"лента не прочитана"});continue}let body=r.chunks.join(`
`),feed=parseFeed2(body),{rows:fRows,tally}=fbRows(feed.posts,{groups,exGroups,source:p.label,fromMs,toMs});for(let row of fRows){let key=urlKey(row.url);seen.has(key)||(seen.set(key,row),rows.push(row))}let parts2=["постов просмотрено "+feed.posts.length+" (прокруток "+(r.scrolls||0)+")","совпало "+fRows.length],oldest=feed.posts.reduce((m,x)=>x.at&&(!m||x.at<m)?x.at:m,0);parts2.push(oldest&&oldest*1e3<=fromMs?"докрутились до начала окна":"до начала окна НЕ докрутились — в ленте могло остаться ещё"+(oldest?" (дошли до "+new Date(oldest*1e3).toLocaleString("ru-RU")+")":""));let skipped=Object.entries(tally).filter(([k,n])=>k!=="всего"&&n).map(([k,n])=>k+" — "+n);skipped.length&&parts2.push("отсеяно: "+skipped.join(", "));let withC=feed.posts.filter(x=>Number.isFinite(x.comments)).length;parts2.push("счётчик комментариев приехал у "+withC+" постов из "+feed.posts.length);let probe=engagementProbe(body);parts2.push(probe.reactions?"признаки реакций в ответах встретились "+probe.reactions+" раз — есть что разбирать":"реакций Фейсбук в этих ответах не прислал — показывать нечего"),log.push({site:p.label,channel:"facebook",found:fRows.length,ms:Date.now()-tP,note:parts2.join("; ")})}catch(e){log.push({site:p.label,channel:"facebook",found:0,ms:Date.now()-tP,note:String(e&&e.message||e)})}stepDone++,tick2(""),checkpoint()}persist3()}if(c.youtube&&c.youtube.enabled&&!stopping2()){tick2("youtube");try{let r=await searchYouTube(c.keyword,{exclude:c.exclude||"",morph:c.morph!==!1,ytRange:c.youtube.range||"month",from:per.from,to:per.to});for(let row of r.rows)row.url&&!seen.has(row.url)&&(seen.set(row.url,row),rows.push(row));log.push({site:"youtube",channel:r.channel,found:r.rows.length,note:r.note})}catch(e){log.push({site:"youtube",channel:"error",found:0,note:String(e)})}stepDone++,tick2("")}stopped&&log.push({site:"(остановлен)",channel:"—",found:0,note:"сбор остановлен человеком: пройдено источников "+stepDone+" из "+totalSrc+". Найденное сохранено, остальные источники не читались"}),log.push({site:"(период)",channel:"—",found:0,note:per.why,from:per.from||"",to:per.to||""});let dcNote=summary();if(dcNote&&log.push({site:"(память дат)",channel:"—",found:0,note:dcNote}),closeRunBrowsers)try{await closeRunBrowsers()}catch{}let totalMs=Date.now()-tRun,bs=browserStats?browserStats():null,slow=log.filter(l=>l.ms).sort((a,b)=>b.ms-a.ms).slice(0,5).map(l=>String(l.site).replace(/^https?:\/\//,"").replace(/\/$/,"")+" "+Math.round(l.ms/1e3)+" с"),parts=["прогон занял "+mmss(totalMs)+" (сайтов "+sites.length+", по 4 разом)"];if(bs&&bs.ops){let lanes=Math.max(1,bs.lanes||1),floorMs=bs.busyMs/lanes,share2=Math.round(floorMs/Math.max(1,totalMs)*100);parts.push("браузер ("+lanes+" "+(lanes===1?"окно":lanes<5?"окна":"окон")+"): "+mmss(bs.busyMs)+" за "+bs.ops+" операций"+(lanes>1?", то есть "+mmss(Math.round(floorMs))+" в один поток":"")+" — это "+share2+"% времени прогона и его нижняя граница")}if(slow.length&&parts.push("дольше всех (с ожиданием очереди): "+slow.join(", ")),bs&&bs.byHost){let top2=Object.entries(bs.byHost).sort((a,b)=>b[1].ms-a[1].ms).slice(0,5).map(([h,v])=>h+" "+Math.round(v.ms/1e3)+" с/"+v.ops+" оп.");top2.length&&parts.push("браузер съели: "+top2.join(", "))}return log.push({site:"(время)",channel:"—",found:0,note:parts.join("; "),ms:totalMs}),rows.sort((a,b)=>String(b.date||"").localeCompare(String(a.date||""))),{rows,log}}var browserStats,resetBrowserStats,closeRunBrowsers,readFacebook,mmss,init_runner=__esm({"desktop/runner.js"(){init_channels();init_attention();init_golden_store();init_site_memory();init_date_cache();init_period();init_parse();init_fb_parse();init_outbound();init_social_visits();browserStats=null,resetBrowserStats=null;closeRunBrowsers=null;readFacebook=null;mmss=ms2=>{let s=Math.round(ms2/1e3);return s>=60?Math.floor(s/60)+" мин "+s%60+" с":s+" с"}}});var running,init_locks=__esm({"desktop/locks.js"(){running=new Set}});function begin(id,{name="",total=0,by="ручной"}={}){runs.set(String(id),{id:String(id),name:String(name||""),by,startedAt:Date.now(),total:+total||0,done:0,found:0,site:"",stopping:!1})}function step(id,{done,total,found,site}={}){let r=runs.get(String(id));r&&(Number.isFinite(+done)&&(r.done=+done),Number.isFinite(+total)&&+total>0&&(r.total=+total),Number.isFinite(+found)&&(r.found=+found),site!=null&&(r.site=String(site)))}function askStop(id){let r=runs.get(String(id));return r?(r.stopping=!0,!0):!1}function stopping(id){let r=runs.get(String(id));return!!(r&&r.stopping)}function end(id){runs.delete(String(id))}function snapshot(){return Array.from(runs.values()).map(r=>({id:r.id,name:r.name,by:r.by,startedAt:r.startedAt,total:r.total,done:r.done,found:r.found,site:r.site,stopping:r.stopping,ms:Date.now()-r.startedAt}))}function active(id){return runs.has(String(id))}var runs,init_run_state=__esm({"desktop/run-state.js"(){runs=new Map}});function normSource(s){return String(s||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^t\.me\/s\//,"t.me/").replace(/^@/,"t.me/").replace(/\/+$/,"")}var SITE_PRESETS,WORLD_PRESETS,RU_PRESETS,TELEGRAM_PRESETS,PRESETS_LATEST,init_source_presets=__esm({"extension/lib/source-presets.js"(){SITE_PRESETS=[{url:"kz.kursiv.media",name:"Курсив"},{url:"zakon.kz",name:"Zakon.kz"},{url:"kapital.kz",name:"Капитал"},{url:"informburo.kz",name:"Informburo"},{url:"tengrinews.kz",name:"Tengrinews"},{url:"kazpravda.kz",name:"Казахстанская правда"},{url:"baq.kz",name:"BAQ.kz"},{url:"khabar.kz",name:"Хабар"},{url:"turkystan.kz",name:"Túrkistan"},{url:"24.kz",name:"24.kz"},{url:"liter.kz",name:"Литер"},{url:"caravan.kz",name:"Караван"},{url:"newtimes.kz",name:"NewTimes"},{url:"stan.kz",name:"Stan.kz"},{url:"lada.kz",name:"Лада (Актау)"},{url:"sn.kz",name:"Столичная жизнь"},{url:"vechastana.kz",name:"Вечерняя Астана"},{url:"aikyn.kz",name:"Айқын"},{url:"ulysmedia.kz",name:"Ulys Media"},{url:"malim.kz",name:"Malim"},{url:"vlast.kz",name:"Власть"},{url:"astanatv.kz",name:"Астана ТВ"},{url:"exclusive.kz",name:"Exclusive"},{url:"forbes.kz",name:"Forbes Казахстан"},{url:"mgorod.kz",name:"Мой город (Уральск)"},{url:"politico.kz",name:"Politico.kz"},{url:"sputnik.kz",name:"Sputnik Казахстан"},{url:"almaty.tv",name:"Алматы ТВ"},{url:"qazaqstan.tv",name:"Qazaqstan"},{url:"democrat.kz",name:"Democrat"},{url:"arasha.kz",name:"Arasha"},{url:"press.kz",name:"Press.kz"},{url:"365info.kz",name:"365info"},{url:"lsm.kz",name:"LS (lsm.kz)"},{url:"inbusiness.kz",name:"InBusiness"},{url:"factcheck.kz",name:"Factcheck.kz"},{url:"egemen.kz",name:"Egemen Qazaqstan"},{url:"ratel.kz",name:"Ratel"},{url:"nur.kz",name:"NUR.KZ"},{url:"time.kz",name:"Время"},{url:"uralskweek.kz",name:"Уральская неделя"},{url:"yujanka.kz",name:"Южанка"},{url:"adyrna.kz",name:"Адырна"},{url:"masa.media",name:"Masa Media"},{url:"inform.kz",name:"Казинформ",added:"2026-11-20"},{url:"kaz.tengrinews.kz",name:"Tengrinews (на казахском)",added:"2026-11-20"},{url:"rus.baq.kz",name:"BAQ.kz (на русском)",added:"2026-11-20"},{url:"kaz.zakon.kz",name:"Zakon.kz (на казахском)",added:"2026-11-20"},{url:"azattyq-ruhy.kz",name:"Azattyq Rýhy",added:"2026-11-20"},{url:"rus.azattyq-ruhy.kz",name:"Azattyq Rýhy (на русском)",added:"2026-11-20"},{url:"elordainfo.kz",name:"Elorda Info",added:"2026-11-20"},{url:"qazaqtoday.info",name:"QazaqToday",added:"2026-11-20"},{url:"bes.media",name:"Bes.media",added:"2026-11-20"},{url:"dalanews.kz",name:"Dalanews",added:"2026-11-20"},{url:"ult.kz",name:"Ult.kz",added:"2026-11-20"},{url:"ozgeris.info",name:"Өзгеріс",added:"2026-11-20"},{url:"kt.kz",name:"Kazakhstan Today",added:"2026-11-20"},{url:"total.kz",name:"Total.kz",added:"2026-11-20"},{url:"qaz-media.kz",name:"Qaz-media (Петропавловск)",added:"2026-11-20"},{url:"kstnews.kz",name:"Костанайские новости",added:"2026-11-20"},{url:"ktk.kz",name:"КТК",added:"2026-11-20"},{url:"kaztag.kz",name:"КазТАГ",added:"2026-11-20"}],WORLD_PRESETS=[{url:"bbc.com",name:"BBC"},{url:"theguardian.com",name:"The Guardian"},{url:"aljazeera.com",name:"Al Jazeera"},{url:"dw.com",name:"Deutsche Welle",note:"поиск сайта работает (параметр item)"},{url:"cnn.com",name:"CNN"},{url:"euronews.com",name:"Euronews",note:"поиск сайта работает"},{url:"npr.org",name:"NPR"},{url:"cbsnews.com",name:"CBS News"},{url:"nbcnews.com",name:"NBC News"},{url:"abcnews.com",name:"ABC News",note:"карта новостей на 1000 адресов с заголовками"},{url:"independent.co.uk",name:"The Independent"},{url:"straitstimes.com",name:"The Straits Times"},{url:"time.com",name:"TIME"},{url:"usatoday.com",name:"USA Today"},{url:"newsweek.com",name:"Newsweek"},{url:"japantimes.co.jp",name:"The Japan Times",note:"из облака отдавал 403; RSS живой"},{url:"france24.com",name:"France 24",note:"из облака отдавал 403 — проверить прогоном"},{url:"apnews.com",name:"Associated Press",note:"из облака отдавал 403 — проверить прогоном"}],RU_PRESETS=[{url:"ria.ru",name:"РИА Новости",note:"поиск сайта работает"},{url:"lenta.ru",name:"Лента.ру",note:"поиск сайта работает (отдаёт JSON)"},{url:"rbc.ru",name:"РБК",note:"карта новостей на 429 адресов с заголовками"},{url:"vedomosti.ru",name:"Ведомости",note:"карта новостей с заголовками"},{url:"interfax.ru",name:"Интерфакс"},{url:"iz.ru",name:"Известия",note:"главная отдаёт 403, а RSS и карты живые"},{url:"aif.ru",name:"Аргументы и факты",note:"поиск сайта работает"},{url:"kp.ru",name:"Комсомольская правда"},{url:"news.ru",name:"NEWS.ru",note:"поиск запрещён robots сайта; ленты открыты"},{url:"life.ru",name:"Life"},{url:"vesti.ru",name:"Вести",note:"карта новостей на 919 свежих адресов"},{url:"ntv.ru",name:"НТВ"},{url:"bfm.ru",name:"BFM.ru",note:"поиск сайта работает"},{url:"fontanka.ru",name:"Фонтанка"},{url:"business-gazeta.ru",name:"Бизнес Online"},{url:"t.me/kommersant",name:"Коммерсантъ (телеграм)",replaces:"kommersant.ru",added:"2026-11-21",note:"сайт из Казахстана не открывается; канал — 52 поста в сутки"},{url:"t.me/mk_ru",name:"Московский комсомолец (телеграм)",replaces:"mk.ru",added:"2026-11-21",note:"сайт из Казахстана режет запросы (HTTP 429); канал — 56 постов в сутки"},{url:"t.me/svpressaru",name:"Свободная пресса (телеграм)",replaces:"svpressa.ru",added:"2026-11-21",note:"сайт из Казахстана не открывается; канал — 46 постов в сутки, но просмотров мало"},{url:"t.me/channelone_official",name:"Первый канал (телеграм)",replaces:"1tv.ru",added:"2026-11-21",note:"сайт из Казахстана не открывается; канал — 14 постов в сутки"}],TELEGRAM_PRESETS=[{url:"t.me/ktknews",name:"КТК",note:"канал издания; сайт ktk.kz тоже в списке сайтов"},{url:"t.me/kaztag_tg",name:"КазТАГ",note:"канал издания; сайт kaztag.kz тоже в списке сайтов"},{url:"t.me/dknews_kz",name:"ДК News",note:"вместо dknews.kz — поиск только через браузер"},{url:"t.me/tass_agency",name:"ТАСС"},{url:"t.me/negemedia",name:"negemedia"},{url:"t.me/syrymitkulov",name:"Сырым Иткулов"},{url:"t.me/qumash_kz",name:"qumash_kz"},{url:"t.me/myastanacity",name:"My Astana City"},{url:"t.me/azattyqasia",name:"Azattyq Asia"},{url:"t.me/azattyq_ruhy",name:"Azattyq Rýhy"},{url:"t.me/Zanamiviehali",name:"Zanamiviehali"},{url:"t.me/prokadrykz",name:"Про кадры KZ"},{url:"t.me/bessimptomno",name:"Бессимптомно"},{url:"t.me/ztb_qazaq",name:"ztb_qazaq"},{url:"t.me/ztb_qaz",name:"ztb_qaz"},{url:"t.me/egovpress",name:"eGov Press"},{url:"t.me/nehabar",name:"НеХабар"},{url:"t.me/kozachkow",name:"kozachkow"},{url:"t.me/gaziz1984",name:"gaziz1984"},{url:"t.me/adyrnaportal",name:"Adyrna"},{url:"t.me/yedilov_online",name:"Yedilov online"},{url:"t.me/basekz",name:"BASE KZ"},{url:"t.me/chinovnik_kz",name:"Чиновник KZ"},{url:"t.me/respublikaKZmediaNEWS",name:"Республика KZ"},{url:"t.me/dashimbayev",name:"dashimbayev"},{url:"t.me/KrivosheyevD",name:"Кривошеев"},{url:"t.me/nkorganbekova",name:"Н. Корганбекова"}];PRESETS_LATEST=[SITE_PRESETS,WORLD_PRESETS,RU_PRESETS,TELEGRAM_PRESETS].flat().map(x=>x.added||"").sort().pop()||""}});var TG_RATING_AT,TG_RATING_KZ,TG_RU,init_tg_rating=__esm({"extension/lib/tg-rating.js"(){TG_RATING_AT="2026-11-21",TG_RATING_KZ=[{url:"t.me/aqorda_resmi",name:"Aqorda",cat:"politics",ci:776,subs:84727,postViews:8800},{url:"t.me/kozachkow",name:"Kozachkov offside",cat:"politics",ci:462,subs:122846,postViews:41800},{url:"t.me/ztb_qaz",name:"ZTB NEWS",cat:"news",ci:380,subs:171828,postViews:17200},{url:"t.me/geo_2019",name:"Казахстан и все-все-все",cat:"news",ci:358,subs:12056,postViews:1600},{url:"t.me/nehabar",name:"НЕХабар",cat:"news",ci:357,subs:68582,postViews:6600},{url:"t.me/qumash_kz",name:"Qumash",cat:"news",ci:346,subs:122073,postViews:20900},{url:"t.me/atamekenbusiness",name:"Atameken Business",cat:"news",ci:341,subs:74541,postViews:6800},{url:"t.me/KZgovernment",name:"UKIMET",cat:"politics",ci:308,subs:21389,postViews:1700},{url:"t.me/Zanamiviehali",name:"За нами уже выехали",cat:"news",ci:294,subs:63686,postViews:10400},{url:"t.me/yedilov_online",name:"YEDILOV online",cat:"politics",ci:287,subs:88210,postViews:28700},{url:"t.me/eurobri",name:"Евразийский брифинг",cat:"politics",ci:248,subs:35404,postViews:3800},{url:"t.me/chinovnik_kz",name:"Чиновник",cat:"politics",ci:227,subs:31778,postViews:7400},{url:"t.me/baraeva_vidit",name:"Бараева",cat:"politics",ci:201,subs:4865,postViews:2800},{url:"t.me/grpatKZ",name:"Буданбай — Казахстан и Центральная Азия",cat:"politics",ci:199,subs:29522,postViews:4900},{url:"t.me/egovpress",name:"EGOV.PRESS",cat:"politics",ci:197,subs:67194,postViews:10600},{url:"t.me/protenge_kz",name:"PROTENGE",cat:"politics",ci:193,subs:20875,postViews:5800},{url:"t.me/mediastan",name:"MediaStan",cat:"news",ci:183,subs:1959,postViews:290},{url:"t.me/halyqstan",name:"HALYQSTAN",cat:"news",ci:182,subs:31069,postViews:8100},{url:"t.me/azattyqasia",name:"Азаттык Азия",cat:"news",ci:173,subs:12870,postViews:1800},{url:"t.me/CMN_KZ",name:"CMN.KZ",cat:"news",ci:172,subs:28012,postViews:4e3},{url:"t.me/astanovka98",name:"Astanovka98",cat:"news",ci:167,subs:58639,postViews:15300},{url:"t.me/elinfo_kz",name:"Солай де",cat:"news",ci:159,subs:30539,postViews:1500},{url:"t.me/jexenews",name:"JexeNews",cat:"news",ci:157,subs:9555,postViews:1300},{url:"t.me/prokadrykz",name:"PRO КАДРЫ KZ",cat:"politics",ci:156,subs:80892,postViews:15800},{url:"t.me/fund_anticorr",name:"Фонд-бюро расследования коррупции",cat:"news",ci:147,subs:84601,postViews:10100},{url:"t.me/pressmfakz",name:"MFA Qazaqstan",cat:"politics",ci:147,subs:8140,postViews:966},{url:"t.me/ptrkkz",name:"ТРК Президента",cat:"politics",ci:145,subs:27825,postViews:1900},{url:"t.me/nordkazakh89",name:"Общественная безопасность Казахстан",cat:"news",ci:144,subs:10699,postViews:504},{url:"t.me/kaliyevchannel",name:"Kaliyev channel",cat:"politics",ci:144,subs:5954,postViews:1200},{url:"t.me/holanewskz",name:"Hola News",cat:"news",ci:141,subs:14749,postViews:1800},{url:"t.me/antikornews",name:"ҰҚК Сыбайлас жемқорлыққа қарсы қызметі",cat:"politics",ci:138,subs:14087,postViews:4600},{url:"t.me/quryltairesmi",name:"QURYLTAI",cat:"politics",ci:137,subs:9205,postViews:745},{url:"t.me/house_of_cards_qr",name:"ARSEN SARSEKOV",cat:"politics",ci:136,subs:8059,postViews:2300},{url:"t.me/truestorykz",name:"TRUE STORY KZ",cat:"news",ci:131,subs:14571,postViews:1700},{url:"t.me/nur_kz_7",name:"Сегодня.KZ",cat:"politics",ci:131,subs:2806,postViews:508},{url:"t.me/centralasianow",name:"ЦА | Новости Центральной Азии",cat:"news",ci:130,subs:7987,postViews:1600},{url:"t.me/basekz",name:"БАСЕ",cat:"news",ci:130,subs:47451,postViews:10600},{url:"t.me/akhmetovkz",name:"АХМЕТОВ",cat:"politics",ci:126,subs:4775,postViews:3e3},{url:"t.me/shishkin_like",name:"Shishkin_like",cat:"news",ci:122,subs:31131,postViews:2900},{url:"t.me/nationalbusiness_kz",name:"National Business Kazakhstan",cat:"news",ci:121,subs:3117,postViews:228},{url:"t.me/baidildinovoil",name:"Байдильдинов. Нефть",cat:"news",ci:116,subs:5359,postViews:1700},{url:"t.me/zapiskikitaeveda",name:"Записки казахского китаеведа",cat:"news",ci:111,subs:4949,postViews:869},{url:"t.me/qogamnews",name:"QOGAM by SATZHANGRAM",cat:"news",ci:109,subs:22258,postViews:751},{url:"t.me/villagekazakhstan",name:"Village",cat:"news",ci:108,subs:13538,postViews:1300},{url:"t.me/kazchuvash",name:"Казахский чуваш",cat:"news",ci:97.5,subs:23796,postViews:3400},{url:"t.me/gosrating",name:"ПИСЬМА ПРЕЗИДЕНТУ",cat:"politics",ci:96.4,subs:21790,postViews:14900},{url:"t.me/ca_cronos",name:"Cronos Asia",cat:"politics",ci:96,subs:1604,postViews:127},{url:"t.me/negemedia",name:"Nege.kz",cat:"news",ci:95.7,subs:5249,postViews:1e3},{url:"t.me/aimagambetov",name:"AIMAGAMBETOV",cat:"politics",ci:90.4,subs:12257,postViews:1300},{url:"t.me/myastanacity",name:"Астана - Что? Где? Когда?",cat:"news",ci:82.1,subs:19253,postViews:4e3},{url:"t.me/otyrarkz",name:"OTYRAR",cat:"news",ci:81.1,subs:4509,postViews:409},{url:"t.me/off_shores",name:"Выход к морю",cat:"politics",ci:80.3,subs:12261,postViews:13400},{url:"t.me/kzkelin",name:"Келин услышала",cat:"politics",ci:80.1,subs:5694,postViews:2400},{url:"t.me/kriminal_kazakhstan",name:"Криминальный Казахстан",cat:"news",ci:80,subs:22712,postViews:7900},{url:"t.me/almatytoday",name:"Almaty Today",cat:"news",ci:79.7,subs:58632,postViews:11700},{url:"t.me/respublikaKZmediaNEWS",name:"РЕСПУБЛИКА.KZ.media",cat:"news",ci:78.3,subs:16561,postViews:3100},{url:"t.me/NashaGazetaKst",name:"Наша Газета (Костанай)",cat:"news",ci:73.9,subs:15334,postViews:2300},{url:"t.me/erlankarin",name:"ERLAN KARIN",cat:"politics",ci:73.7,subs:4944,postViews:3e3},{url:"t.me/zhest_kz_official",name:"ZHEST_KZ",cat:"news",ci:73.5,subs:36801,postViews:2600},{url:"t.me/shatalkanal",name:"Шаталканал",cat:"politics",ci:73.1,subs:2596,postViews:583},{url:"t.me/AQOSlive",name:"QOS live",cat:"news",ci:71.1,subs:1681,postViews:282},{url:"t.me/atamekenbusiness_qaz",name:"Atameken Business (қаз.)",cat:"news",ci:70.8,subs:18960,postViews:1600},{url:"t.me/nkorganbekova",name:"Korganbekova VIBE",cat:"news",ci:70.7,subs:4875,postViews:1100},{url:"t.me/Jogargy_sot",name:"ҚР ЖОҒАРҒЫ СОТЫ",cat:"news",ci:68.7,subs:21136,postViews:1600},{url:"t.me/toughbuthones",name:"Обо всём, жёстко, но честно.",cat:"politics",ci:68.4,subs:23966,postViews:2200},{url:"t.me/ortcom_kz",name:"ORTCOM.KZ",cat:"news",ci:68,subs:3449,postViews:171},{url:"t.me/azattyq",name:"Azattyq - Азаттық",cat:"news",ci:67.7,subs:10692,postViews:1300},{url:"t.me/peruash",name:"Азат Перуашев",cat:"politics",ci:63.6,subs:2322,postViews:153},{url:"t.me/redyurt",name:"Красная Юрта",cat:"politics",ci:63.2,subs:6837,postViews:3400},{url:"t.me/qonandoylex",name:"QonanDoyle",cat:"news",ci:62.4,subs:3280,postViews:854},{url:"t.me/union_unbreakable",name:"НЕРУШИМЫЕ — новости ЦА",cat:"news",ci:59.6,subs:2629,postViews:573},{url:"t.me/gazizaraimbeknews",name:"SHYNDYK.KZ",cat:"news",ci:54.5,subs:7505,postViews:371},{url:"t.me/kzpublic",name:"Мой Казахстан",cat:"news",ci:54.2,subs:3432,postViews:76},{url:"t.me/egovnewss",name:"Egov_news",cat:"news",ci:52.5,subs:2840,postViews:77},{url:"t.me/qaz365kz",name:"Qaz365.kz",cat:"news",ci:51.9,subs:72461,postViews:3e3},{url:"t.me/KrivosheyevD",name:"krivosheev.wtf",cat:"news",ci:50.8,subs:7583,postViews:2200},{url:"t.me/abainewskz",name:"ABAI NEWS",cat:"news",ci:48.3,subs:13870,postViews:2400},{url:"t.me/CentralMedia24kz",name:"Central Media24.kz",cat:"news",ci:45.4,subs:33074,postViews:11200},{url:"t.me/kazakh_inform",name:"KAZAKH_INFORM",cat:"news",ci:43.5,subs:42403,postViews:3400},{url:"t.me/adilet_partiyasy",name:"«Әділет» партиясы",cat:"politics",ci:42.9,subs:48518,postViews:4700},{url:"t.me/diapazonnews",name:"Диапазон - новости Актобе",cat:"news",ci:42.2,subs:6339,postViews:809},{url:"t.me/knbgov_kz",name:"ҚР ҰҚК / КНБ РК",cat:"news",ci:42,subs:5736,postViews:1600},{url:"t.me/diplomat_zhk",name:"ЖК Дипломат",cat:"politics",ci:41.8,subs:1778,postViews:216},{url:"t.me/almatynews_kaz",name:"Almaty News",cat:"news",ci:40.6,subs:5802,postViews:797},{url:"t.me/qara_aqqu",name:"Чёрный лебедь, рак и щука",cat:"news",ci:39.1,subs:7014,postViews:1300},{url:"t.me/ZhanaAdamdarNews",name:"Жаңа адамдар",cat:"politics",ci:38.4,subs:1568,postViews:198},{url:"t.me/digitalbussinesskz",name:"DigitalBusiness.kz",cat:"news",ci:37.9,subs:10809,postViews:1500},{url:"t.me/politprosvet_kz",name:"Политпросвет.kz",cat:"politics",ci:35.1,subs:6231,postViews:714},{url:"t.me/socioexpert_01",name:"SocioExpert",cat:"politics",ci:33.9,subs:2031,postViews:297},{url:"t.me/privetkzhstn",name:"Тура Айту",cat:"politics",ci:32.8,subs:75524,postViews:15600},{url:"t.me/politus2022",name:"Политес.КЗ",cat:"politics",ci:32.7,subs:1042,postViews:144},{url:"t.me/der_kzlg",name:"kzlg",cat:"politics",ci:32.3,subs:1967,postViews:2100},{url:"t.me/khudaibergenkz",name:"OK Channel",cat:"politics",ci:32.3,subs:3628,postViews:1200},{url:"t.me/kazgoodgovernance",name:"Сабина Садиева",cat:"politics",ci:28.1,subs:2208,postViews:997},{url:"t.me/baktygaliyev",name:"BAKTYGALIYEV BLOG",cat:"politics",ci:27.9,subs:1252,postViews:398},{url:"t.me/informatorKZ",name:"ИНФОРМАТОР KZ",cat:"politics",ci:26.8,subs:13412,postViews:8300},{url:"t.me/shezire",name:"Всемирное шежіре",cat:"politics",ci:24.3,subs:17667,postViews:1700},{url:"t.me/ongar_online",name:"Ongar_online",cat:"politics",ci:23.5,subs:4994,postViews:1700},{url:"t.me/adil_sf",name:"Адиль Сейфуллин | политолог",cat:"politics",ci:22.8,subs:1964,postViews:1300},{url:"t.me/myviewkz",name:"Взгляд KZ",cat:"politics",ci:21.8,subs:13310,postViews:3500},{url:"t.me/nightingale_int",name:"Nightingale Int.",cat:"politics",ci:21.4,subs:1201,postViews:306},{url:"t.me/ZhangazinovaN",name:"Nazym Zhangazy Channel",cat:"politics",ci:21.3,subs:1256,postViews:503},{url:"t.me/electionelection",name:"ЦИК РК",cat:"politics",ci:19.8,subs:7993,postViews:2100},{url:"t.me/Danilov_line",name:"Линия Данилова",cat:"politics",ci:18.9,subs:1061,postViews:125},{url:"t.me/kisi_kz",name:"КИСИ inform",cat:"politics",ci:16.6,subs:1253,postViews:100},{url:"t.me/aidossarym",name:"Сарымсақ",cat:"politics",ci:16.1,subs:1372,postViews:180},{url:"t.me/bolottemirov",name:"Болот Темиров",cat:"politics",ci:16.1,subs:4169,postViews:2500},{url:"t.me/scientiapotentiaest_kz",name:"Aubekerov. Realpolitik",cat:"politics",ci:12.1,subs:3031,postViews:545},{url:"t.me/essizdick",name:"Essizdik is the New Black!",cat:"politics",ci:7.4,subs:1172,postViews:396},{url:"t.me/qazpresskz",name:"Qazpress.kz",cat:"politics",ci:.9,subs:3547,postViews:217},{url:"t.me/tbk_kz",name:"ТГБ_KZ",cat:"politics",ci:.5,subs:3219,postViews:344},{url:"t.me/saualnama1",name:"SARAP",cat:"politics",ci:0,subs:2065,postViews:55}],TG_RU=[{url:"t.me/kommersant",name:"Коммерсантъ",subs:296e3,postViews:13e3,kzShare:.005},{url:"t.me/mk_ru",name:"Московский комсомолец",subs:62100,postViews:1560,kzShare:.023},{url:"t.me/svpressaru",name:"Свободная пресса",subs:14200,postViews:160,kzShare:.02},{url:"t.me/channelone_official",name:"Первый канал",subs:27400,postViews:546,kzShare:.02}]}});function sourceKey(source2){let s=String(source2||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/+$/,""),tg=s.match(/^(?:t\.me\/(?:s\/)?|@)([a-z0-9_]+)/);return tg?"t.me/"+tg[1]:(s=s.split("/")[0],s)}function audienceOf(source2,extra={}){let key=sourceKey(source2);if(key.startsWith("t.me/")){let ch=key.slice(5),man=extra.tgManual&&extra.tgManual[ch],rated2=!TG_AUDIENCE[ch]&&TG_RATED.get(ch),got=man||extra.tg&&extra.tg[ch]||TG_AUDIENCE[ch]||rated2;return!got||!got.subs?null:{key,kind:"telegram",subs:got.subs,postViews:got.postViews||null,kzShare:Number.isFinite(got.kzShare)?got.kzShare:null,src:man?"вписано вручную":extra.tg&&extra.tg[ch]?"Телеграм, обновлено "+(got.at||""):got===rated2?(rated2.kzShare!=null?"Телеграм, замер ":"TGStat, рейтинг ")+TG_RATING_AT:"Телеграм, справочник "+AUDIENCE_AT}}let k=key,seen=0,pick=h=>{if(extra.manual&&extra.manual[h])return extra.manual[h];let base=AUDIENCE[h],fresh3=extra.sites&&extra.sites[h];if(!fresh3||base&&base.same)return base;let m={...base||{},...fresh3};return base&&Number.isFinite(base.kzShare)&&!Number.isFinite(fresh3.kzShare)&&(m.kzShare=base.kzShare),Number.isFinite(fresh3.kzM)&&!Number.isFinite(fresh3.allM)&&(m.allM=Number.isFinite(m.kzShare)&&m.kzShare>0?Math.round(fresh3.kzM/m.kzShare):void 0),Number.isFinite(fresh3.allM)&&!Number.isFinite(fresh3.kzM)&&delete m.kzM,m},a=pick(k);for(;a&&a.same&&seen++<3;)k=a.same,a=pick(k);if(a&&!Number.isFinite(a.kzM)&&Number.isFinite(a.allM)){let sh=Number.isFinite(a.kzShare)?a.kzShare:/\.kz$/.test(k)?.9:.02;a={...a,kzShare:sh,kzM:Math.round(a.allM*sh)}}if(!a||!Number.isFinite(a.kzM))return null;let manual=!!(extra.manual&&extra.manual[k]),fresh2=!manual&&!!(extra.sites&&extra.sites[k]);return{key:k,kind:"site",kzM:a.kzM,allM:Number.isFinite(a.allM)?a.allM:null,kzShare:Number.isFinite(a.kzShare)?a.kzShare:null,src:manual?"вписано вручную":(a.src||"")+(fresh2?", обновлено "+(a.at||""):", справочник "+AUDIENCE_AT)}}function dayOf(iso2){let d=new Date(iso2);return isNaN(d.getTime())?"":d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()}function dedup(parts,M){let rest=1;for(let r of parts)rest*=1-Math.min(Math.max(r,0),M)/M;return M*(1-rest)}function estimateReach(items,opts={}){let P={...REACH_DEFAULTS,...opts.params||{}},extra=opts.extra||{},D30=Math.pow(30,P.beta),groups=new Map;for(let it of items||[]){if(!it||!it.source)continue;let a=audienceOf(it.source,extra),key=a?a.key:sourceKey(it.source),g=groups.get(key)||{key,a,days:new Set,items:0,names:new Set};g.items++,g.names.add(String(it.source));let d=dayOf(it.date);d&&g.days.add(d),groups.set(key,g)}let sources=[],unknown=[];for(let g of groups.values()){let n=Math.max(1,g.days.size),acc=Math.pow(n,P.beta);if(!g.a){unknown.push({source:g.key,items:g.items});continue}let a=g.a,kz,abroad,readKz,readMid,readLo,readHi;if(a.kind==="telegram"){let share2=a.kzShare!=null?a.kzShare:P.tgKzShare;kz=a.subs*share2,abroad=a.subs*(1-share2);let v=a.postViews?Math.min(a.postViews*acc,a.subs):null;readMid=readLo=readHi=v!=null?v*share2:kz*P.readMid,v==null&&(readLo=kz*P.readLo,readHi=kz*P.readHi),readKz=readMid}else{let capKz=a.kzM*Math.max(1,Math.pow(n/30,P.beta));kz=Math.min(a.kzM/D30*acc,capKz)/P.devices;let allM=a.allM!=null?a.allM:a.kzShare?a.kzM/a.kzShare:a.kzM,capAll=allM*Math.max(1,Math.pow(n/30,P.beta));abroad=Math.max(0,Math.min(allM/D30*acc,capAll)/P.devices-kz),readMid=kz*P.readMid,readLo=kz*P.readLo,readHi=kz*P.readHi}sources.push({source:g.key,kind:a.kind,items:g.items,days:n,kz:Math.round(kz),abroad:Math.round(abroad),read:Math.round(readMid),readLo:Math.round(readLo),readHi:Math.round(readHi),src:a.src,measuredRead:a.kind==="telegram"&&!!a.postViews})}sources.sort((x,y)=>y.kz-x.kz||x.source.localeCompare(y.source)),unknown.sort((x,y)=>y.items-x.items||x.source.localeCompare(y.source));let M=P.poolShare*P.kzInternet,sum2=f=>sources.reduce((s,x)=>s+x[f],0),r=v=>Math.round(v),covItems=sources.reduce((s,x)=>s+x.items,0),allItems=covItems+unknown.reduce((s,x)=>s+x.items,0);return{kz:{unique:r(dedup(sources.map(x=>x.kz),M)),contacts:r(sum2("kz")),read:r(dedup(sources.map(x=>x.read),M)),readLo:r(dedup(sources.map(x=>x.readLo),M)),readHi:r(dedup(sources.map(x=>x.readHi),M))},abroad:{unique:r(dedup(sources.map(x=>x.abroad),P.abroadPool)),contacts:r(sum2("abroad"))},pool:r(M),sources,unknown,covered:{items:covItems,total:allItems,sources:sources.length,unknownSources:unknown.length},params:P,at:AUDIENCE_AT}}function roundReach(n){if(!Number.isFinite(n)||n<=0)return 0;if(n<100)return Math.round(n);let k=Math.pow(10,Math.floor(Math.log10(n))-1);return Math.round(n/k)*k}function fmtReach(n){let v=roundReach(n);return v>=1e6?(v/1e6).toLocaleString("ru-RU",{maximumFractionDigits:1})+" млн":v>=1e3?Math.round(v/1e3)+" тыс.":String(v)}function reachLines(r){if(!r||!r.covered||!r.covered.items)return[];let L=[];return L.push("ОХВАТ АУДИТОРИИ (оценка)"),L.push("Могли увидеть в Казахстане: около "+fmtReach(r.kz.unique)+" человек (без повторов между изданиями)"),L.push("Вероятно прочитали в Казахстане: около "+fmtReach(r.kz.read)+" (от "+fmtReach(r.kz.readLo)+" до "+fmtReach(r.kz.readHi)+")"),r.abroad.unique&&L.push("Могли увидеть за рубежом: около "+fmtReach(r.abroad.unique)),r.covered.items<r.covered.total&&L.push("Посчитано материалов: "+r.covered.items+" из "+r.covered.total+" — у остальных источников аудитория неизвестна, в оценку они не вошли"),L.push("Методика: аудитория изданий из открытых счётчиков (LiveInternet, zero.kz) и медиакитов за дни публикаций; повторы между изданиями убраны; итог не превышает числа жителей Казахстана, читающих новости в интернете."),L}function parseManual(text){let manual={},tgManual={},bad=[];for(let raw of String(text||"").split(`
`)){let line=raw.trim();if(!line||line.startsWith("#"))continue;let parts=line.split(/\s+/),src=parts.shift(),toks=parts.filter(Boolean),mult=1,share2=null,unit=toks.findIndex(x=>/^(млн|тыс|k|m)\.?$/i.test(x));if(unit>=0){let u=toks[unit].toLowerCase();mult=/^(млн|m)/.test(u)?1e6:1e3,toks.splice(unit,1)}let last=toks[toks.length-1]||"";(/^\d{1,3}(?:[.,]\d+)?%$/.test(last)||toks.length===2&&toks[0].replace(/[.,]/g,"").length>3&&/^\d{1,3}(?:[.,]\d+)?$/.test(last)&&parseFloat(last)<=100)&&(share2=parseFloat(last.replace(",","."))/100,toks.pop());let numStr=toks.join("");if(!src||!/^\d+(?:[.,]\d+)?$/.test(numStr)){bad.push(line);continue}let n=Math.round(parseFloat(numStr.replace(",","."))*mult);if(!Number.isFinite(n)||n<=0||share2!=null&&!(share2>0&&share2<=1)){bad.push(line);continue}let key=sourceKey(src);key.startsWith("t.me/")?tgManual[key.slice(5)]={subs:n,kzShare:share2}:manual[key]={kzM:n,kzShare:share2??void 0,allM:share2?Math.round(n/share2):void 0,src:"вписано вручную"}}return{manual,tgManual,bad}}var REACH_DEFAULTS,AUDIENCE_AT,AUDIENCE,TG_RATED,TG_AUDIENCE,init_audience=__esm({"extension/lib/audience.js"(){init_tg_rating();REACH_DEFAULTS=Object.freeze({beta:.87,devices:1.4,poolShare:.75,kzInternet:197e5,abroadPool:1e8,readLo:.015,readMid:.035,readHi:.07,tgKzShare:.9}),AUDIENCE_AT="2026-11-21",AUDIENCE={"24.kz":{kzM:488054,allM:610068,kzShare:.8,src:"LiveInternet, рейтинг Казахстана"},"365info.kz":{kzM:81892,allM:95668,kzShare:.856,src:"LiveInternet, открытая статистика"},"adyrna.kz":{kzM:16367,allM:18186,kzShare:.9,src:"zero.kz"},"aif.ru":{kzM:156669,allM:13055765,kzShare:.012,src:"LiveInternet, открытая статистика"},"aikyn.kz":{kzM:119296,allM:132551,kzShare:.9,src:"zero.kz"},"almaty.tv":{kzM:241183,allM:401972,kzShare:.6,src:"LiveInternet, рейтинг Казахстана"},"arasha.kz":{kzM:181698,allM:199668,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"astanatv.kz":{kzM:618297,allM:782654,kzShare:.79,src:"LiveInternet, рейтинг Казахстана"},"baq.kz":{kzM:323304,allM:371614,kzShare:.87,src:"LiveInternet, рейтинг Казахстана"},"bes.media":{kzM:1164903,allM:1456129,kzShare:.8,src:"LiveInternet, рейтинг Казахстана"},"bfm.ru":{kzM:48983,allM:2449169,kzShare:.02,src:"LiveInternet, рейтинг России"},"business-gazeta.ru":{kzM:65901,allM:1882888,kzShare:.035,src:"LiveInternet, открытая статистика"},"dalanews.kz":{kzM:244389,allM:262784,kzShare:.93,src:"LiveInternet, рейтинг Казахстана"},"democrat.kz":{kzM:63728,allM:67796,kzShare:.94,src:"LiveInternet, рейтинг Казахстана"},"egemen.kz":{kzM:122608,allM:133270,kzShare:.92,src:"LiveInternet, рейтинг Казахстана"},"elordainfo.kz":{kzM:27586,allM:32454,kzShare:.85,src:"LiveInternet, рейтинг Казахстана"},"exclusive.kz":{kzM:110948,allM:138685,kzShare:.8,src:"LiveInternet, рейтинг Казахстана"},"inbusiness.kz":{kzM:997004,allM:1365759,kzShare:.73,src:"LiveInternet, рейтинг Казахстана"},"inform.kz":{kzM:1638261,allM:2374291,kzShare:.69,src:"LiveInternet, рейтинг Казахстана"},"informburo.kz":{kzM:793199,allM:933175,kzShare:.85,src:"LiveInternet, рейтинг Казахстана"},"kapital.kz":{kzM:301724,allM:350842,kzShare:.86,src:"LiveInternet, рейтинг Казахстана"},"kaz.tengrinews.kz":{same:"tengrinews.kz",src:"общий счётчик с tengrinews.kz"},"kaztag.kz":{kzM:317079,allM:356269,kzShare:.89,src:"LiveInternet, рейтинг Казахстана"},"khabar.kz":{kzM:156292,allM:171749,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"kommersant.ru":{kzM:53570,allM:10714061,kzShare:.005,src:"LiveInternet, открытая статистика"},"kp.ru":{kzM:549633,allM:27481672,kzShare:.02,src:"LiveInternet, рейтинг России"},"kstnews.kz":{kzM:56749,allM:63054,kzShare:.9,src:"zero.kz"},"ktk.kz":{kzM:45043,allM:50048,kzShare:.9,src:"zero.kz"},"kz.kursiv.media":{kzM:1441731,allM:2443612,kzShare:.59,src:"LiveInternet, рейтинг Казахстана"},"lada.kz":{kzM:638820,allM:734276,kzShare:.87,src:"LiveInternet, рейтинг Казахстана"},"lenta.ru":{kzM:460396,allM:23019800,kzShare:.02,src:"LiveInternet, рейтинг России"},"life.ru":{kzM:86914,allM:4345719,kzShare:.02,src:"LiveInternet, рейтинг России"},"liter.kz":{kzM:260234,allM:351668,kzShare:.74,src:"LiveInternet, рейтинг Казахстана"},"malim.kz":{kzM:252160,allM:274087,kzShare:.92,src:"LiveInternet, рейтинг Казахстана"},"mgorod.kz":{kzM:237294,allM:300372,kzShare:.79,src:"LiveInternet, рейтинг Казахстана"},"mk.ru":{kzM:280726,allM:12205487,kzShare:.023,src:"LiveInternet, открытая статистика"},"news.ru":{kzM:136225,allM:6811232,kzShare:.02,src:"LiveInternet, рейтинг России"},"newtimes.kz":{kzM:891245,allM:979390,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"ntv.ru":{kzM:206929,allM:9853748,kzShare:.021,src:"LiveInternet, открытая статистика"},"nur.kz":{kzM:5881396,allM:6534885,kzShare:.9,src:"оценка: рейтинг просмотров 2024 (Tengrinews, Казинформ, Informburo как мерка)"},"ozgeris.info":{kzM:291556,allM:300573,kzShare:.97,src:"LiveInternet, рейтинг Казахстана"},"politico.kz":{kzM:141725,allM:155742,kzShare:.91,src:"LiveInternet, рейтинг Казахстана"},"press.kz":{kzM:3640,allM:5871,kzShare:.62,src:"LiveInternet, рейтинг Казахстана"},"qaz-media.kz":{kzM:19358,allM:22509,kzShare:.86,src:"LiveInternet, рейтинг Казахстана"},"qazaqtoday.info":{kzM:479588,allM:504829,kzShare:.95,src:"LiveInternet, рейтинг Казахстана"},"sn.kz":{kzM:1033761,allM:1188231,kzShare:.87,src:"LiveInternet, рейтинг Казахстана"},"svpressa.ru":{kzM:33589,allM:1679447,kzShare:.02,src:"LiveInternet, открытая статистика"},"tengrinews.kz":{kzM:7619967,allM:9180683,kzShare:.83,src:"LiveInternet, рейтинг Казахстана"},"turkystan.kz":{kzM:53458,allM:58107,kzShare:.92,src:"LiveInternet, рейтинг Казахстана"},"ult.kz":{kzM:226511,allM:243560,kzShare:.93,src:"LiveInternet, рейтинг Казахстана"},"ulysmedia.kz":{kzM:1144930,allM:1506487,kzShare:.76,src:"LiveInternet, рейтинг Казахстана"},"uralskweek.kz":{kzM:193046,allM:214496,kzShare:.9,src:"LiveInternet, рейтинг Казахстана"},"vechastana.kz":{kzM:20728,allM:23290,kzShare:.89,src:"LiveInternet, рейтинг Казахстана"},"vedomosti.ru":{kzM:175803,allM:8790129,kzShare:.02,src:"LiveInternet, рейтинг России"},"vesti.ru":{kzM:83156,allM:4157780,kzShare:.02,src:"LiveInternet, рейтинг России"},"zakon.kz":{kzM:4567731,allM:5075257,kzShare:.9,src:"оценка: рейтинг просмотров 2024 (Tengrinews, Казинформ, Informburo как мерка)"}};AUDIENCE["ria.ru"]={kzM:Math.round(1169800*19.2*.016),allM:Math.round(1169800*19.2),kzShare:.016,src:"LiveInternet: суточная аудитория, месяц пересчитан"};AUDIENCE["rus.baq.kz"]={same:"baq.kz",src:"общий счётчик с baq.kz"};AUDIENCE["kaz.zakon.kz"]={same:"zakon.kz",src:"тот же сайт, другая языковая версия"};TG_RATED=new Map([...TG_RATING_KZ,...TG_RU].map(x=>[x.url.replace(/^t\.me\//,"").toLowerCase(),x])),TG_AUDIENCE={ktknews:{subs:11700,postViews:390},kaztag_tg:{subs:12e4,postViews:5135},dknews_kz:{subs:7380,postViews:3795},tass_agency:{subs:57e4,postViews:9465,kzShare:.02},negemedia:{subs:5250,postViews:716},syrymitkulov:{subs:41100,postViews:3970},qumash_kz:{subs:122e3,postViews:13e3},myastanacity:{subs:19300,postViews:2470},azattyqasia:{subs:12900,postViews:1470},azattyq_ruhy:{subs:1840,postViews:86},zanamiviehali:{subs:63700,postViews:7765},prokadrykz:{subs:80900,postViews:13500},bessimptomno:{subs:21300,postViews:843},ztb_qazaq:{subs:13600,postViews:906},ztb_qaz:{subs:172e3,postViews:13600},egovpress:{subs:67200,postViews:7815},nehabar:{subs:68600,postViews:4780},kozachkow:{subs:123e3,postViews:39350},gaziz1984:{subs:9970,postViews:3845},adyrnaportal:{subs:14400,postViews:866},yedilov_online:{subs:88200,postViews:26750},basekz:{subs:47500,postViews:9530},chinovnik_kz:{subs:31800,postViews:7920},respublikakzmedianews:{subs:16600,postViews:2060},dashimbayev:{subs:11700,postViews:2240},krivosheyevd:{subs:7590,postViews:2065},nkorganbekova:{subs:4880,postViews:1250}}}});function itemWeight(it,extra={},params={}){let P={...REACH_DEFAULTS,...params},a=audienceOf(it.source,extra);if(!a)return null;if(a.kind==="telegram"){let share2=a.kzShare!=null?a.kzShare:P.tgKzShare;return Math.round((a.postViews?Math.min(a.postViews,a.subs):a.subs*P.readMid)*share2)}let day=a.kzM/Math.pow(30,P.beta)/P.devices;return Math.round(it.match==="body"?day*P.readMid:day)}function mediaIndex(items,{extra={},params={},top:top2=10}={}){let list=(items||[]).filter(it=>it&&it.source&&it.rel!=="-"),bySrc=new Map,tone={pos:0,neu:0,neg:0,none:0},total=0,title=0,body=0,counted=0,toneN=0,weighed=[];for(let it of list){let w=itemWeight(it,extra,params);if(w==null)continue;counted++,total+=w,it.match==="body"?body+=w:title+=w;let t=it.sent==="+"?"pos":it.sent==="-"?"neg":it.sent==="0"?"neu":"none";tone[t]+=w,t!=="none"&&toneN++;let k=String(it.source),s=bySrc.get(k)||{source:k,items:0,index:0};s.items++,s.index+=w,bySrc.set(k,s),weighed.push({w,it})}return weighed.sort((x,y)=>y.w-x.w),{total,title,body,tone,counted,of:list.length,bySource:[...bySrc.values()].sort((x,y)=>y.index-x.index),top:weighed.slice(0,top2).map(({w,it})=>({weight:w,title:it.title||"",url:it.url||"",source:it.source,date:it.date,match:it.match||"",sent:it.sent||""})),toneScored:tone.pos+tone.neu+tone.neg,toneItems:toneN}}function reachByDays(items,{extra={},params={},maxDays=120}={}){let list=(items||[]).filter(it=>it&&it.source&&it.rel!=="-"&&localYmd(it.date)),days=[...new Set(list.map(it=>localYmd(it.date)))].sort().slice(-maxDays);if(!days.length)return[];let first=days[0],out=[];for(let d of days){let upTo=list.filter(it=>{let x=localYmd(it.date);return x>=first&&x<=d}),r=estimateReach(upTo,{extra,params}),neg=upTo.filter(it=>it.sent==="-"),rn=neg.length?estimateReach(neg,{extra,params}):null;out.push({day:d,items:list.filter(it=>localYmd(it.date)===d).length,unique:r.kz.unique,read:r.kz.read,neg:rn?rn.kz.unique:0})}return out}function reachByTone(items,{extra={},params={}}={}){let list=(items||[]).filter(it=>it&&it.source&&it.rel!=="-"),f=s=>{let x=list.filter(it=>it.sent===s);return x.length?estimateReach(x,{extra,params}).kz.unique:0};return{pos:f("+"),neu:f("0"),neg:f("-"),scored:list.filter(it=>it.sent).length,of:list.length}}function mediaLines({index,days,tone},fmt){let L=[];if(!index||!index.counted)return L;if(L.push("Медиаиндекс: около "+fmt(index.total)+" контактов с упоминанием"+(index.total?" (в заголовках — "+Math.round(100*index.title/index.total)+"%)":"")+". Заголовок у крупного издания весит больше, чем строка в тексте у районного."),index.toneScored){let part=index.toneItems!=null&&index.toneItems<index.counted?" — из "+index.toneItems+" размеченных по тону материалов (всего посчитано "+index.counted+")":"";L.push("Негатив: "+Math.round(100*index.tone.neg/index.toneScored)+"% медиаиндекса (по весу материалов, а не по их числу)"+part+(tone&&tone.neg?"; его могли увидеть около "+fmt(tone.neg)+" человек в Казахстане":"")+".")}if(days&&days.length>1){let best=null;days.forEach((d,i)=>{let inc=d.unique-(i?days[i-1].unique:0);(!best||inc>best.inc)&&(best={day:d.day,inc})}),best&&best.inc>0&&L.push("Больше всего охват прибавил "+best.day+": +"+fmt(best.inc)+" человек.")}return L}var pad,localYmd,init_media_index=__esm({"extension/lib/media-index.js"(){init_audience();pad=n=>String(n).padStart(2,"0"),localYmd=iso2=>{let d=new Date(iso2);return isNaN(d)?"":d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())}}});function wordKey(w){if(CONCEPT_EXACT.has(w))return CONCEPT_EXACT.get(w);for(let[p,id]of CONCEPT_PREFIX)if(w.startsWith(p))return id;return w.slice(0,STEM)}function titleStems(title,drop=new Set){let out=new Set;for(let w of norm(title).match(/[\p{L}\p{N}]+/gu)||[]){if(w.length<3&&!/^(укк|кнб|оон|снг|буу|тмд|сша|акш)$/.test(w)||STOP.has(w)||/^\d+$/.test(w))continue;let st=wordKey(w);drop.has(st)||out.add(st)}return out}function namedKeys(title,drop=new Set){let out=new Set,re=/[\p{L}\p{N}]+/gu,m,prev="",t=String(title||"");for(;m=re.exec(t);){let w=m[0],before=t.slice(0,m.index),start=!prev||/[:.!?«"“„(—–]\s*$/.test(before)||/^\s*$/.test(before);if(prev=w,start||w.length<2)continue;let up=w[0]!==w[0].toLowerCase(),caps=w.length>=2&&w===w.toUpperCase()&&new RegExp("\\p{L}","u").test(w);if(!up&&!caps)continue;let k=wordKey(norm(w));!drop.has(k)&&!STOP.has(norm(w))&&out.add(k)}return out}function queryStems(keyword){return new Set((norm(keyword).match(/[\p{L}\p{N}]+/gu)||[]).filter(w=>w.length>=3).map(wordKey))}function buildStories(items,{keyword="",maxItems=3e3}={}){let list=(items||[]).filter(it=>it&&it.title&&it.date&&it.rel!=="-"&&!isNaN(new Date(it.date))).sort((a,b)=>new Date(a.date)-new Date(b.date)).slice(-maxItems),q=queryStems(keyword),raw=list.map(it=>titleStems(it.title,q)),df=new Map;for(let S of raw)for(let w of S)df.set(w,(df.get(w)||0)+1);let localName=list.map(()=>new Set);if(q.size){let adj=new Map;for(let it of list){let orig=String(it.title).match(/[\p{L}\p{N}]+/gu)||[],ws=orig.map(w=>wordKey(norm(w))),seen=new Set,i0=list.indexOf(it);ws.forEach((w,k)=>{if(q.has(w))for(let j=k-1;j>=Math.max(0,k-2);j--){let o=orig[j];if(!o||o[0]===o[0].toLowerCase()||q.has(ws[j]))break;raw[i0].delete(ws[j]),localName[i0].add(ws[j])}}),ws.forEach((w,k)=>{if(q.has(w))for(let p of ws.slice(Math.max(0,k-2),k))q.has(p)||seen.add(p)});for(let p of seen)adj.set(p,(adj.get(p)||0)+1)}for(let[p,n]of adj)if(n>=2&&n>=NAME_SHARE*(df.get(p)||n)){for(let S of raw)S.delete(p);df.delete(p),q.add(p)}}let names=list.map((it,i)=>{let x=namedKeys(it.title,q);for(let w of localName[i])x.delete(w);for(let w of[...x])!df.has(w)&&!raw[i].has(w)&&x.delete(w);return x}),N=Math.max(list.length,NBASE),vec=raw.map(S=>new Map([...S].map(w=>[w,Math.log(1+N/df.get(w))]))),T=list.map(it=>+new Date(it.date)),len=m=>Math.sqrt([...m.values()].reduce((a,v)=>a+v*v,0))||1,cos=(a,b)=>{let d=0;for(let[w,v]of a){let x=b.get(w);x&&(d+=v*x)}return d/(len(a)*len(b))},cl=[],of=[],open=i=>{cl.push({first:T[i],last:T[i],nm:new Set(names[i]),v:new Map(vec[i]),n:new Map([...vec[i].keys()].map(w=>[w,1])),m:[i],solo:raw[i].size<MIN_SHARED}),of[i]=cl.length-1};list.forEach((_,i)=>{if(raw[i].size<MIN_SHARED)return open(i);let wi=0;for(let v of vec[i].values())wi+=v;let best=-1,bs=0;for(let k=cl.length-1;k>=0;k--){let c2=cl[k];if(c2.solo||T[i]-c2.last>WINDOW_H*36e5||disjointNames(names[i],c2.nm))continue;let sim=cos(vec[i],c2.v),inCore=0,nCore=0;for(let[w,v]of vec[i])(c2.n.get(w)||0)>=Math.max(1,CORE_SHARE*c2.m.length)&&(inCore+=v,nCore++);nCore>=MIN_SHARED&&inCore/wi>=CORE_THR&&(sim=Math.max(sim,COS)),sim>bs&&(bs=sim,best=k)}if(best<0||bs<COS)return open(i);let c=cl[best];for(let[w,v]of vec[i])c.v.set(w,(c.v.get(w)||0)+v),c.n.set(w,(c.n.get(w)||0)+1);for(let w of names[i])c.nm.add(w);c.last=Math.max(c.last,T[i]),c.m.push(i),of[i]=best});for(let changed=!0;changed;){changed=!1;for(let a=0;a<cl.length&&!changed;a++){let A=cl[a];if(!(!A||A.solo))for(let b=a+1;b<cl.length;b++){let B=cl[b];if(!(!B||B.solo||Math.abs(A.first-B.first)>MERGE_H*36e5)&&!(disjointNames(A.nm,B.nm)||cos(A.v,B.v)<MERGE_COS)){for(let w of B.nm)A.nm.add(w);for(let[w,v]of B.v)A.v.set(w,(A.v.get(w)||0)+v);for(let[w,v]of B.n)A.n.set(w,(A.n.get(w)||0)+v);A.m.push(...B.m),A.first=Math.min(A.first,B.first),A.last=Math.max(A.last,B.last),B.m.forEach(i=>{of[i]=a}),cl[b]=null,changed=!0}}}}let groups=new Map;list.forEach((it,i)=>{let r=of[i];groups.has(r)||groups.set(r,[]),groups.get(r).push(it)});let stories=[];for(let g of groups.values()){let first=g.filter(x=>hasTime(x.date))[0]||g[0],early=g.find(x=>!hasTime(x.date)&&dayKey(x.date)<dayKey(first.date));early&&(first=early);let srcs=[...new Set(g.map(x=>hostOf3(x.source)))];g.sort((x,y)=>new Date(x.date)-new Date(y.date)),stories.push({title:first.title,first:{source:first.source,date:first.date,url:first.url||"",title:first.title},items:g.map(x=>({source:x.source,date:x.date,url:x.url||"",title:x.title})),count:g.length,sources:srcs.length,pickedUp:srcs.filter(s=>s!==hostOf3(first.source)).length,from:first.date,to:g[g.length-1].date})}return stories.sort((a,b)=>b.sources-a.sources||b.count-a.count||new Date(b.from)-new Date(a.from)),stories}function firstMovers(stories){let by=new Map;for(let s of stories){if(s.sources<2)continue;let k=hostOf3(s.first.source),r=by.get(k)||{source:k,first:0,pickedUpBy:0};r.first++,r.pickedUpBy+=s.pickedUp,by.set(k,r)}return[...by.values()].sort((a,b)=>b.first-a.first||b.pickedUpBy-a.pickedUpBy)}function storySummary(items,{keyword="",top:top2=15,perStory=12}={}){let st=buildStories(items,{keyword}),multi=st.filter(s=>s.sources>=2);return{items:st.reduce((n,s)=>n+s.count,0),stories:st.length,spread:multi.length,top:multi.slice(0,top2).map(s=>({...s,items:s.items.slice(0,perStory),more:Math.max(0,s.items.length-perStory)})),firstMovers:firstMovers(st).slice(0,10)}}function storyLines(sum2,{top:top2=5}={}){let L=[];if(!sum2||!sum2.items)return L;L.push("СЮЖЕТЫ (по совпадению заголовков, без ИИ)"),L.push("Материалов "+sum2.items+" — это около "+sum2.stories+" отдельных сюжетов; "+sum2.spread+" из них подхватили два издания и больше."),sum2.top.slice(0,top2).forEach((s,i)=>L.push(i+1+". «"+s.first.title+"» — "+s.sources+" изд., "+s.count+" мат.; первым "+s.first.source+(hasTime(s.first.date)?" в "+hhmm2(s.first.date):", "+dayKey(s.first.date))));let fm=sum2.firstMovers.slice(0,3).filter(x=>x.first>=2);return fm.length&&L.push("Чаще других писали первыми: "+fm.map(x=>x.source+" ("+x.first+")").join(", ")+"."),L}var STOP,STEM,MIN_SHARED,WINDOW_H,COS,CORE_SHARE,CORE_THR,MERGE_COS,MERGE_H,NAME_SHARE,NBASE,KK,norm,CONCEPTS,CONCEPT_EXACT,CONCEPT_PREFIX,nk,disjointNames,pad2,dayKey,hasTime,hostOf3,hhmm2,init_stories=__esm({"extension/lib/stories.js"(){STOP=new Set("и в во на с со по о об обо за из к ко для не ни что как это же у от до при про над под без а но или ли бы то так уже ещё еще его ее её их им ним она они он мы вы я все всё весь был была были будет мен және бен пен үшін да де та те туралы деп бұл осы сол ол олар біз сіз бойынша кезінде жылы the a an of to in on for and or with at by from as is are was be ряд дал дала дали заявил заявила рассказал рассказала назвал назвала сказал отметил отметила призвал сообщил считает может могут должен должны будут будет стало стал стала прокомментировал высказался айтты атады деді мәлімдеді ұсынды тапсырма береді керек қажет емес кто где когда почему зачем сколько толық қандай қалай неге кім не".split(/\s+/)),STEM=6,MIN_SHARED=2,WINDOW_H=72,COS=.4,CORE_SHARE=.4,CORE_THR=.6,MERGE_COS=.35,MERGE_H=12,NAME_SHARE=.6,NBASE=300,KK={ә:"а",ғ:"г",қ:"к",ң:"н",ө:"о",ұ:"у",ү:"у",һ:"х",і:"и",ё:"е",э:"е"},norm=s=>String(s||"").toLowerCase().replace(/[әғқңөұүһіёэ]/g,c=>KK[c]);for(let w of[...STOP])STOP.add(norm(w));CONCEPTS=[["межд",["халыкаралык"],["междунар"]],["народ",["халык"],["народ"]],["нац",["улттык"],["национ"]],["статус",["мартебе"],["статус"]],["строй",["курылыс"],["строит","стройк"]],["госуд",["мемлекет"],["государ"]],["глава",["басшы"],["глава","главы","главе","руковод"]],["агро",["ауыл","шаруа","аграр","агро","дикан","диkан"],["сельск","села","село","агро","аграр","фермер","механизатор"]],["хоз",["шаруашылы"],["хозяйств"]],["поруч",["тапсыр"],["поруч"]],["иностр",["шетел"],["иностран","зарубеж"]],["прогр",["багдарлам"],["програм"]],["парл",["парламент","мажилис","сенат"],["парламент","мажилис","сенат"]],["совет",["кенес"],["совет"]],["служб",["кызмет"],["служб"]],["развит",["дамыт","даму"],["развит","развив"]],["коррупц",["жемкор","сыбайлас"],["корруп"]],["безоп",["кауипсиз"],["безопас"]],["закон",["=зан","занды","заннам","зансыз"],["закон"]],["наука",["гылым"],["наук","научн"]],["образ",["билим"],["образов"]],["юг",["онтустик"],["южн","юко","юку"]],["поздр",["куттыкта"],["поздрав"]],["встреч",["кездес"],["встреч","встрет"]],["принял",["кабылда"],["принял","приня","прием"]],["наград",["марапат","наград","орден","медал"],["наград","орден","медал"]],["указ",["жарлык"],["=указ","=указа","=указом","=указу","=указе"]],["правит",["укимет"],["правительств"]],["аким",["аким"],["аким"]],["цифр",["цифрлы"],["цифров"]],["искусств",["жасанды"],["искусствен"]],["профсоюз",["касиподак","профсоюз"],["профсоюз"]],["предприн",["касипкер"],["предприним","бизнес"]],["продов",["азык"],["продовол"]],["налог",["салык"],["налог"]],["кнб",["укк"],["кнб"]],["председ",["торага"],["председат","глава"]],["назнач",["тагайында"],["назнач"]],["освоб",["босатыл"],["освобож"]],["гражд",["азамат"],["граждан"]],["выборы",["сайлау"],["=выборы","=выборов","=выборах","=выборам","выборн"]],["курултай",["курылтай"],["курултай"]],["оон",["буу"],["оон"]],["снг",["тмд"],["снг"]],["узбек",["озбекстан"],["узбекистан","узбекск"]],["росс",["ресей"],["росси"]],["китай",["кытай"],["китай","кнр"]],["сша",["акш"],["сша","америк"]],["япон",["жапон"],["япони","японск"]],["турц",["туркия","турик"],["турци","турецк"]],["послан",["жолдау"],["послани"]],["экспорт",["экспорт"],["экспорт"]],["миллиард",["млрд","миллиард"],["млрд","миллиард"]],["иннов",["инновац"],["инновац"]],["решен",["шешим"],["решени","решил"]],["визит",["сапар"],["визит"]],["переговор",["келиссоз"],["переговор"]],["межпарл",["парламентарал"],["межпарламент"]],["снисх",["аяушылы","ракымшылы"],["снисхожд"]],["казна",["казына"],["=казна","=казну","=казны","=казне","госказн"]],["посяг",["ауыз салу","кол сугу","сугу"],["посяга"]],["партнер",["сериктес"],["партнер"]],["урожай",["астык","егин"],["урожа","зерн"]],["сми",["=бак"],["=сми","медиа"]],["интерес",["мудде"],["интерес"]],["инициат",["бастама"],["инициатив"]],["кредит",["несие","кредит"],["кредит"]],["банк",["банк"],["банк"]],["животн",["мал шаруа","малшаруа"],["животновод","скотовод"]],["мясо",[],["мяс"]],["пастб",["жайылым"],["пастбищ"]],["барьер",["кедерги"],["барьер"]],["вуз",["жогары оку"],["вуз"]],["центр",["орталык"],["централ","центр"]],["азия",["азия"],["азия","азии","азию","азиат"]],["реформ",["реформа"],["реформ"]],["союз",["одак"],["союз"]],["армия",["арми","карулы"],["арми","вооружен"]]],CONCEPT_EXACT=new Map(CONCEPTS.flatMap(([id,kk,ru])=>[...kk,...ru].filter(p=>p[0]==="=").map(p=>[p.slice(1),"#"+id]))),CONCEPT_PREFIX=CONCEPTS.flatMap(([id,kk,ru])=>[...kk,...ru].filter(p=>p[0]!=="=").map(p=>[p,"#"+id])).sort((a,b)=>b[0].length-a[0].length);nk=w=>w[0]==="#"?w:w.slice(0,5),disjointNames=(a,b)=>{if(!a.size||!b.size)return!1;let B=new Set([...b].map(nk));for(let w of a)if(B.has(nk(w)))return!1;return!0};pad2=n=>String(n).padStart(2,"0"),dayKey=v=>{let d=new Date(v);return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate())},hasTime=v=>{let d=new Date(v);return d.getHours()||d.getMinutes()||d.getSeconds()||d.getMilliseconds()},hostOf3=s=>String(s||"").toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0];hhmm2=v=>{let d=new Date(v);return isNaN(d)?"":d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate())+" "+pad2(d.getHours())+":"+pad2(d.getMinutes())}}});async function plainFetchText(url,ms2=2e4){let c=new AbortController,t=setTimeout(()=>c.abort(),ms2);try{let r=await fetch(url,{headers:{"user-agent":UA2,"accept-language":"ru"},signal:c.signal}),text=await r.text();return{ok:r.ok,status:r.status,text}}catch(e){return{ok:!1,err:String(e&&e.cause&&e.cause.code||e&&e.message||e)}}finally{clearTimeout(t)}}function tgNum(s){let m=String(s||"").trim().replace(/,/g,".").match(/^([\d.]+)\s*([KM])?$/i);return m?Math.round(parseFloat(m[1])*(m[2]?m[2].toUpperCase()==="K"?1e3:1e6:1)):null}function parseLiRating(tsv){let out={};for(let line of String(tsv||"").split(`
`)){let p=line.split("	");if(p.length<5||p[0]==="всего")continue;let n=+p[3],share2=+p[4];!Number.isFinite(n)||n<=0||(out[p[0].toLowerCase()]={visitors:n,share:Number.isFinite(share2)?share2/100:null})}return out}function parseTgPage(html){let sub=String(html||"").match(/counter_value">([\d.,]+[KM]?)<\/span>\s*<span class="counter_type">subscribers/i),views=[...String(html||"").matchAll(/tgme_widget_message_views">([\d.,]+[KM]?)</g)].map(m=>tgNum(m[1])).filter(Boolean).sort((a,b)=>a-b),median2=views.length?views[views.length>>1]:null;return{subs:sub?tgNum(sub[1]):null,postViews:median2}}async function refreshAudience({sites=[],telegram=[],fetchText:fetchText2=plainFetchText,budgetMs=12e4,today:today2}={}){let deadline=Date.now()+budgetMs,at=today2||localYmd2(new Date),want=new Set(sites.map(hostOf4).filter(Boolean)),out={at,sites:{},tg:{},notes:[]},left=()=>deadline-Date.now(),kzRating={};for(let p=1;p<=12&&left()>0;p++){let r=await fetchText2(`https://www.liveinternet.ru/rating/kz/month.tsv?page=${p}`);if(!r.ok){out.notes.push("рейтинг LiveInternet по Казахстану: "+(r.status?"HTTP "+r.status:r.err));break}let rows=parseLiRating(r.text);if(!Object.keys(rows).length)break;Object.assign(kzRating,rows)}for(let[id,v]of Object.entries(kzRating)){let h=hostOf4(id);!want.has(h)||out.sites[h]||v.visitors<3e3||(out.sites[h]={kzM:v.visitors,kzShare:v.share,allM:v.share?Math.round(v.visitors/v.share):null,src:"LiveInternet, рейтинг Казахстана",at})}if([...want].some(h=>!out.sites[h]&&/\.ru$/.test(h))){let ru={};for(let p=1;p<=5&&left()>0;p++){let r=await fetchText2(`https://www.liveinternet.ru/rating/ru/media/month.tsv?page=${p}`);if(!r.ok){out.notes.push("рейтинг LiveInternet по России: "+(r.status?"HTTP "+r.status:r.err));break}let rows=parseLiRating(r.text);if(!Object.keys(rows).length)break;Object.assign(ru,rows)}for(let[id,v]of Object.entries(ru)){let h=/\./.test(id)?hostOf4(id):id+".ru";!want.has(h)||out.sites[h]||!v.share||v.visitors<3e3||(out.sites[h]={allM:Math.round(v.visitors/v.share),ruM:v.visitors,src:"LiveInternet, рейтинг России",at})}}if([...want].some(h=>!out.sites[h]&&/\.kz$/.test(h))&&left()>0){let q=o=>"https://api.zero.kz/v2.0/"+o.p+"/?data="+encodeURIComponent(JSON.stringify(o.d)),rr=await fetchText2(q({p:"report",d:{report:"rating",subReport:"kz",period:604800,catId:11,limit:400,not0:"ratPlace"}})),rows=[];try{rows=JSON.parse(rr.text||"[]")}catch{}if(rr.ok&&rows.length&&left()>0){let sr=await fetchText2(q({p:"site",d:{siteIds:rows.map(x=>x.siteId),limit:500}})),map=[];try{map=JSON.parse(sr.text||"[]")}catch{}let urlOf3=new Map(map.map(x=>[x.id,hostOf4(x.url)]));for(let x of rows){let h=urlOf3.get(x.siteId);if(!h||!want.has(h)||out.sites[h]||x.clients<1e3)continue;let sus=x.clients>2*x.hosts,wk=sus?x.hosts:x.clients;out.sites[h]={kzM:Math.round(wk*Math.pow(30/7,.87)*.9),kzShare:.9,src:"zero.kz"+(sus?" (взято число адресов: посетителей подозрительно много)":""),at}}}else out.notes.push("zero.kz: "+(rr.status?"HTTP "+rr.status:rr.err||"пустой ответ"))}for(let ch of telegram){if(left()<=0){out.notes.push("не успели обновить телеграм-каналы: кончился срок");break}let name=String(ch).toLowerCase().replace(/^.*t\.me\/(s\/)?/,"").replace(/^@/,""),r=await fetchText2("https://t.me/s/"+name);if(!r.ok)continue;let v=parseTgPage(r.text);v.subs&&(out.tg[name]={subs:v.subs,postViews:v.postViews,at})}return out}var UA2,localYmd2,hostOf4,init_audience_refresh=__esm({"extension/lib/audience-refresh.js"(){UA2="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",localYmd2=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");hostOf4=s=>String(s||"").toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0]}});function load4(){if(cache2)return cache2;try{cache2=JSON.parse((0,import_node_fs8.readFileSync)(FILE5(),"utf8"))}catch{cache2=null}return(!cache2||typeof cache2!="object")&&(cache2={at:0,sites:{},tg:{},notes:[]}),cache2.sites=cache2.sites||{},cache2.tg=cache2.tg||{},cache2.tried=cache2.tried||{},cache2}function save3(){let f=FILE5(),tmp=f+".tmp";try{(0,import_node_fs8.writeFileSync)(tmp,JSON.stringify(cache2)),(0,import_node_fs8.renameSync)(tmp,f)}catch{}}function audienceExtra(){let c=load4(),{manual,tgManual}=parseManual(settings().audienceManual||"");return{sites:c.sites,tg:c.tg,manual,tgManual}}function audienceInfo(){let c=load4(),p=parseManual(settings().audienceManual||"");return{at:c.at||null,notes:c.notes||[],sites:Object.keys(c.sites).length,channels:Object.keys(c.tg).length,manual:settings().audienceManual||"",bad:p.bad,busy:!!busy2}}function setAudienceManual(text){return setSettings({audienceManual:String(text||"").slice(0,2e4)}),audienceInfo()}function refreshAudienceNow(sources,opts={}){if(busy2)return busy2;let sites=[],telegram=[];for(let s of sources||[]){let k=sourceKey(s);k&&(k.startsWith("t.me/")?telegram.push(k):k.includes(".")&&sites.push(k))}return busy2=(async()=>{try{let r=await refreshAudience({sites:[...new Set(sites)],telegram:[...new Set(telegram)],fetchText:opts.fetchText,budgetMs:opts.budgetMs}),c=load4();Object.assign(c.sites,r.sites),Object.assign(c.tg,r.tg);for(let t of telegram)c.tried[t.slice(5)]=Date.now();return c.at=Date.now(),c.notes=r.notes,save3(),{ok:!0,sites:Object.keys(r.sites).length,channels:Object.keys(r.tg).length,notes:r.notes}}catch(e){return{ok:!1,err:String(e&&e.message||e)}}finally{busy2=null}})(),busy2}function audienceStale(sources,now=Date.now()){let c=load4();return!c.at||now-c.at>WEEK2?!0:(sources||[]).some(s=>{let k=sourceKey(s);if(!k.startsWith("t.me/"))return!1;let ch=k.slice(5);return!c.tg[ch]&&!(c.tried[ch]&&now-c.tried[ch]<WEEK2)})}var import_node_fs8,import_node_path9,FILE5,WEEK2,cache2,busy2,init_audience_store=__esm({"desktop/audience-store.js"(){import_node_fs8=require("node:fs"),import_node_path9=require("node:path");init_paths();init_store();init_audience_refresh();init_audience();FILE5=()=>(0,import_node_path9.join)(process.env.MEDIACHROME_DATA||DATA_ROOT,"audience.json"),WEEK2=7*864e5,cache2=null,busy2=null}});function localDay(iso2){if(!iso2)return"";let d=new Date(iso2);if(isNaN(d.getTime()))return"";let p=n=>String(n).padStart(2,"0");return d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate())}function localHour(iso2){let d=new Date(iso2);return isNaN(d.getTime())?-1:d.getHours()}function localDow(iso2){let d=new Date(iso2);return isNaN(d.getTime())?-1:(d.getDay()+6)%7}function parseTime(note2){let s=String(note2||""),min=s.match(/прогон занял\s+(\d+)\s+мин\s+(\d+)\s+с/),sec=s.match(/прогон занял\s+(\d+)\s+с/),total=min?+min[1]*60+ +min[2]:sec?+sec[1]:null,bmin=s.match(/браузер[^:]*:\s+(\d+)\s+мин\s+(\d+)\s+с/),bsec=s.match(/браузер[^:]*:\s+(\d+)\s+с/),browser=bmin?+bmin[1]*60+ +bmin[2]:bsec?+bsec[1]:null;return{total,browser}}function kindOf(source2){let s=String(source2||"").toLowerCase();return s.startsWith("t.me/")?"telegram":s==="youtube"?"youtube":s.startsWith("facebook.com/")?"facebook":"site"}function top(map,n=15){return[...map.entries()].map(([k,v])=>({key:k,count:v})).sort((a,b)=>b.count-a.count||a.key.localeCompare(b.key)).slice(0,n)}function platformOf(source2){let s=String(source2||"").toLowerCase();return s.startsWith("t.me/")?"telegram":s==="youtube"?"youtube":s.startsWith("facebook.com/")?"facebook":"site"}function windowItems(projectId,opts={}){let p=getProject(projectId);if(!p)return[];let days=Number.isFinite(+opts.days)&&+opts.days>0?+opts.days:null,fromDay=days?localDay(new Date(Date.now()-(days-1)*864e5).toISOString()):null;return(p.items||[]).filter(it=>it&&it.title&&it.date&&(!fromDay||localDay(it.date)>=fromDay)).map(x=>({title:x.title,url:x.url,source:x.source,date:x.date,snippet:x.snippet||"",sent:x.sent||"",sentWhy:x.sentWhy||"",rel:x.rel||"",relWhy:x.relWhy||"",match:x.match||"",kind:platformOf(x.source),comments:Number.isFinite(x.comments)?x.comments:null}))}function dayItems(projectId,day){let p=getProject(projectId);return p?/^\d{4}-\d{2}-\d{2}$/.test(String(day||""))?(p.items||[]).filter(it=>it&&it.date&&localDay(it.date)===day).sort((a,b)=>+new Date(b.date)-+new Date(a.date)).map(x=>({title:x.title||"",url:x.url||"",source:x.source||"",date:x.date,kind:platformOf(x.source),rel:x.rel||""})):[]:null}function buildAnalytics(projectId,opts={}){let p=getProject(projectId);if(!p)return null;let days=Number.isFinite(+opts.days)&&+opts.days>0?+opts.days:null,fromDay=days?localDay(new Date(Date.now()-(days-1)*864e5).toISOString()):null,inWindow=day=>!fromDay||day&&day>=fromDay,items=(p.items||[]).filter(it=>it.date&&inWindow(localDay(it.date))),byDayMap=new Map;for(let it of items){let d=localDay(it.date);d&&byDayMap.set(d,(byDayMap.get(d)||0)+1)}let daysList=[...byDayMap.keys()].sort(),start=fromDay,end2=daysList[daysList.length-1]||localDay(new Date().toISOString());start||(start=daysList[0]||end2);let byDay=[];for(let t=+new Date(start+"T00:00:00");t<=+new Date(end2+"T00:00:00");t+=864e5){let d=localDay(new Date(t).toISOString());byDay.push({day:d,count:byDayMap.get(d)||0})}let bySrcMap=new Map,byChMap=new Map,platform={site:0,telegram:0,youtube:0,facebook:0},matchTitle=0,matchBody=0,matchPost=0,matchVideo=0,matchOther=0,byHour=Array.from({length:7},()=>Array(24).fill(0));for(let it of items){bySrcMap.set(it.source,(bySrcMap.get(it.source)||0)+1);let ch=String(it.channel||"неизв.").replace(/\*$/,"");byChMap.set(ch,(byChMap.get(ch)||0)+1),platform[platformOf(it.source)]++,it.match==="title"?matchTitle++:it.match==="post"?matchPost++:it.match==="body"?matchBody++:it.match==="video"?matchVideo++:matchOther++;let h=localHour(it.date),dow=localDow(it.date);h>=0&&dow>=0&&byHour[dow][h]++}let withKind=arr=>arr.map(x=>({...x,kind:kindOf(x.key)})),bySite=withKind(top(new Map([...bySrcMap].filter(([k])=>platformOf(k)==="site")),10)),bySocial=withKind(top(new Map([...bySrcMap].filter(([k])=>platformOf(k)!=="site")),10)),bySource=withKind(top(bySrcMap,20)),byChannel=top(byChMap,12),feed=items.slice(0,25).map(it=>({date:it.date,source:it.source,title:it.title,url:it.url,channel:it.channel,channels:it.channels,match:it.match,kind:platformOf(it.source)})),runsRaw=listRuns(projectId),cutoff=fromDay?+new Date(fromDay+"T00:00:00"):null,runsIn=cutoff?runsRaw.filter(r=>(r.at||0)>=cutoff):runsRaw,runs2=[],secs=[],shares=[];for(let r of runsIn.slice(0,50)){let timeLog=((getRun(projectId,r.ts)||{}).log||[]).find(x=>x&&x.site==="(время)"),{total,browser}=parseTime(timeLog?timeLog.note:"");total!=null&&(secs.push(total),browser!=null&&total>0&&shares.push(browser/total*100)),runs2.push({ts:r.ts,at:r.at,found:r.found||0,added:r.added||0,sec:total,browserSec:browser})}runs2.reverse();let uniqueSources=bySrcMap.size,weekAgo=localDay(new Date(Date.now()-6*864e5).toISOString()),itemsWeek=items.filter(it=>localDay(it.date)>=weekAgo).length,median2=arr=>{if(!arr.length)return null;let a=[...arr].sort((x,y)=>x-y),m=a.length>>1;return a.length%2?a[m]:Math.round((a[m-1]+a[m])/2)},medRunSec=median2(secs),browserPct=shares.length?Math.round(median2(shares)):null,slowRuns=medRunSec?secs.filter(s=>s>medRunSec*3&&s>medRunSec+60).length:0,maxRunSec=secs.length?Math.max(...secs):null,socialItems=platform.telegram+platform.youtube+platform.facebook,configured=(p.config&&p.config.sites||[]).map(s=>String(s||"").trim()).filter(Boolean),activeNorm=new Set([...bySrcMap.keys()].map(normSource)),silentList=configured.filter(s=>!activeNorm.has(normSource(s))),silent={configured:configured.length,active:configured.length-silentList.length,list:silentList.slice(0,60).map(s=>normSource(s)),more:Math.max(0,silentList.length-60)},toneBy=new Map,tPos=0,tNeu=0,tNeg=0;for(let it of items){if(!it.sent)continue;it.sent==="+"?tPos++:it.sent==="0"?tNeu++:it.sent==="-"&&tNeg++;let k=normSource(it.source||""),c=toneBy.get(k)||{key:k,pos:0,neu:0,neg:0};it.sent==="+"?c.pos++:it.sent==="0"?c.neu++:it.sent==="-"&&c.neg++,toneBy.set(k,c)}let rChecked=0,rOff=0,rDim=0;for(let it of items)it.rel&&(rChecked++,it.rel==="-"?rOff++:it.rel==="0"&&rDim++);let relevance={checked:rChecked,off:rOff,dim:rDim},tone={total:tPos+tNeu+tNeg,pos:tPos,neu:tNeu,neg:tNeg,bySource:[...toneBy.values()].sort((x,y)=>y.neg-x.neg||y.pos+y.neu+y.neg-(x.pos+x.neu+x.neg))},overview={items:items.length,uniqueSources,runs:runsIn.length,itemsWeek,medRunSec,browserPct,slowRuns,maxRunSec,matchTitle,matchBody,matchPost,matchVideo,matchOther,siteItems:platform.site,telegramItems:platform.telegram,youtubeItems:platform.youtube,facebookItems:platform.facebook,socialItems,keyword:p.config.keyword||"",from:p.config.from||null,to:p.config.to||null,windowDays:days,windowFrom:start,windowTo:end2},reach=null,media=null;try{let extra=audienceExtra();reach=estimateReach(items.filter(it=>it.rel!=="-"),{extra}),media={index:mediaIndex(items,{extra}),days:reachByDays(items,{extra}),tone:reachByTone(items,{extra})}}catch{reach=reach||null,media=null}let stories=null;try{stories=storySummary(items.filter(it=>it.rel!=="-"),{keyword:p.config&&p.config.keyword||""})}catch{stories=null}return{overview,byDay,bySource,bySite,bySocial,byChannel,byHour,runs:runs2,feed,silent,tone,relevance,reach,media,stories}}var init_analytics=__esm({"desktop/analytics.js"(){init_store();init_source_presets();init_audience();init_media_index();init_stories();init_audience_store()}});function normTitle(t){return String(t||"").toLowerCase().replace(/ё/g,"е").replace(/[^\p{L}\p{N}]+/gu," ").replace(/\s+/g," ").trim()}function groupReprints(items){let by=new Map,out=[];for(let it of items||[]){if(!it||!it.title)continue;let k=normTitle(it.title),g=k.length>=GROUP_MIN?by.get(k):null;if(g){g.items.push(it);continue}let ng={items:[it]};k.length>=GROUP_MIN&&by.set(k,ng),out.push(ng)}for(let g of out)g.items.sort((a,b)=>(+new Date(a.date)||0)-(+new Date(b.date)||0)),g.first=g.items[0],g.date=g.first.date;return out}function sourceKey2(s){return String(s||"").trim().toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/^@/,"t.me/").replace(/\/+$/,"")}function parseSourceTypes(text){let m=new Map;for(let line of String(text||"").replace(/https?:\/\//gi,"").split(/\r?\n/)){let mm=line.match(/^\s*(\S.*?)(?:\s*[—–:=]\s*|\s+-\s+)(.+?)\s*$/);if(!mm)continue;let k=sourceKey2(mm[1]),v=mm[2].trim();k&&v&&m.set(k,v)}return m}function typeOf(types,source2){if(!types||!types.size)return"";let k=sourceKey2(source2);if(types.has(k))return types.get(k);for(let[tk,tv]of types)if(k.endsWith("."+tk))return tv;return""}function humanPeriod(from,to){let p=s=>{let m=String(s||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return m?{y:+m[1],m:+m[2],d:+m[3]}:null},a=p(from),b=p(to);if(!a&&!b)return"за всё время наблюдения";if(!a||!b){let x=a||b;return x.d+" "+MON[x.m-1]+" "+x.y+" г."}return a.y===b.y&&a.m===b.m&&a.d===b.d?a.d+" "+MON[a.m-1]+" "+a.y+" г.":a.y===b.y&&a.m===b.m?a.d+"–"+b.d+" "+MON[a.m-1]+" "+a.y+" г.":a.y===b.y?a.d+" "+MON[a.m-1]+" – "+b.d+" "+MON[b.m-1]+" "+a.y+" г.":a.d+" "+MON[a.m-1]+" "+a.y+" г. – "+b.d+" "+MON[b.m-1]+" "+b.y+" г."}function reviewData({items,cfg={},from,to,withSnippets=!0,localDay:localDay2}){let day=localDay2||(d=>String(d||"").slice(0,10)),pool=(items||[]).filter(x=>x&&x.title&&x.rel!=="-"),dropped=(items||[]).filter(x=>x&&x.title&&x.rel==="-").length,groups=groupReprints(pool),shown=groups.slice().sort((a,b)=>(+new Date(b.date)||0)-(+new Date(a.date)||0)).slice(0,1500).sort((a,b)=>(+new Date(a.date)||0)-(+new Date(b.date)||0)),reprinted=groups.filter(g=>g.items.length>1),reprints=reprinted.reduce((s,g)=>s+g.items.length-1,0),types=parseSourceTypes(cfg.aiSources),plat={};for(let x of pool){let k=x.kind||"site";plat[k]=(plat[k]||0)+1}let typeCount=new Map,untyped=new Set;for(let x of pool){let t=typeOf(types,x.source);t?typeCount.set(t,(typeCount.get(t)||0)+1):untyped.add(sourceKey2(x.source))}let fbComments=pool.filter(x=>x.kind==="facebook"&&Number.isFinite(x.comments)).length,kw=String(cfg.keyword||"").split(",").map(s=>s.trim()).filter(Boolean),subject=one(cfg.aiSubject)||kw[0]||"тема запроса",L=[];return L.push("ДАННЫЕ ДЛЯ СПРАВКИ"),L.push("Объект мониторинга: "+subject),kw.length&&L.push("Написания, по которым искали: "+kw.join(", ")+" (это один объект)."),L.push("Круг связанных лиц и структур: "+(one(cfg.aiPersons)||"не задан")),L.push("Период (в шапку справки — ровно так): "+humanPeriod(from,to)),L.push("Дополнительный контекст: "+(String(cfg.aiContext||"").trim()||"не задан")),L.push(""),L.push("ЧТО ПОСЧИТАЛА ПРОГРАММА (эти числа точные, бери их как есть):"),L.push("— материалов за период: "+pool.length+(dropped?" (ещё "+dropped+" исключены: проверка показала, что они не про объект)":"")),L.push("— перепечаток (тот же заголовок дословно у другого источника): "+reprints+(reprinted.length?"; перепечатанных материалов: "+reprinted.length:"")),L.push("— по площадкам: "+Object.entries(plat).map(([k,v])=>(PLAT[k]||k)+" "+v).join(", ")),typeCount.size?L.push("— по типам источников (разметка пользователя): "+[...typeCount].map(([k,v])=>k+" "+v).join(", ")+(untyped.size?"; без разметки — "+untyped.size+" источн.":"")):L.push("— типы источников (критические, лояльные и т.п.) пользователь НЕ размечал: не приписывай их по названию издания."),L.push(""),L.push("ЧЕГО В ДАННЫХ НЕТ: охвата, просмотров, цитируемости и реакции аудитории программа не собирает"+(fbComments?" — кроме числа комментариев у постов Фейсбука, где оно указано.":".")),L.push("Сюжетов программа не считала: сюжет — это одно событие или один повод, его выделяешь ты."),shown.length<groups.length&&L.push("Ниже показаны самые свежие "+shown.length+" из "+groups.length+" строк материалов: остальные не уместились."),L.push(""),L.push("МАТЕРИАЛЫ (от ранних к поздним; «то же у» — дословные перепечатки того же заголовка):"),shown.forEach((g,i)=>{let x=g.first,kind=PLAT[x.kind||"site"]||"",tp=typeOf(types,x.source),bits=[];x.sent&&TONE[x.sent]&&bits.push("тон: "+TONE[x.sent]),x.match==="body"&&bits.push("объект только в тексте"),x.kind==="facebook"&&Number.isFinite(x.comments)&&bits.push("комментариев: "+x.comments),L.push(i+1+". "+dm(day(x.date))+" · "+one(x.source)+" ("+kind+(tp?", "+tp:"")+") — "+one(x.title)+(bits.length?" ["+bits.join("; ")+"]":""));let sn=withSnippets?one(x.snippet).slice(0,220):"";if(sn&&L.push("   из текста: "+sn),g.items.length>1){let others=g.items.slice(1).map(y=>one(y.source));L.push("   то же у: "+others.join(", "))}}),{text:L.join(`
`),total:pool.length,rows:groups.length,shown:shown.length,reprints,dropped}}var GROUP_MIN,MON,PLAT,TONE,dm,one,init_review=__esm({"desktop/review.js"(){GROUP_MIN=25;MON=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];PLAT={site:"сайт СМИ",telegram:"Телеграм-канал",youtube:"YouTube",facebook:"Фейсбук"},TONE={"+":"выигрышно",0:"нейтрально","-":"невыгодно"},dm=d=>{let m=String(d||"").match(/^\d{4}-(\d{2})-(\d{2})/);return m?m[2]+"."+m[1]:""},one=s=>String(s||"").replace(/\s+/g," ").trim()}});function worthNextModel(err){let s=String(err||"");return/high demand|overload|UNAVAILABLE|RESOURCE_EXHAUSTED|NOT_FOUND|not found|is not supported|HTTP 503|HTTP 429|\b503\b|\b429\b|\b404\b|ответ не пришёл/i.test(s)}function thinkingLadder(model){let major=+((/^gemini-(\d+)/i.exec(String(model||"").trim())||[])[1]||0),level={thinkingLevel:"low"},budget={thinkingBudget:0};return major>=3?[level,budget,null]:[budget,level,null]}function modelChain(model){let first=String(model||"").trim(),out=[];for(let m of[first||DEFAULT_MODEL,...FALLBACK_MODELS]){let v=String(m||"").trim();v&&!out.includes(v)&&out.push(v)}return out}function brief(a,sampleTitles){let L=[];if(!a||!a.overview)return"Проект по мониторингу СМИ Казахстана.";let o=a.overview;L.push("Мониторинг СМИ Казахстана. Объект наблюдения: «"+(o.keyword||"—")+"».");let w=o.windowFrom&&o.windowTo?o.windowFrom+"…"+o.windowTo:"вся история";if(L.push("Период: "+w+". Публикаций: "+o.items+", источников с материалом: "+o.uniqueSources+"."),(o.matchTitle||o.matchBody)&&L.push("Из них с объектом В ЗАГОЛОВКЕ: "+o.matchTitle+"; только В ТЕКСТЕ: "+o.matchBody+" (второе — упоминание вскользь, первое — материал про него)."),o.siteItems!=null){let bits=[];o.siteItems&&bits.push("сайты СМИ "+o.siteItems),o.telegramItems&&bits.push("телеграм "+o.telegramItems),o.youtubeItems&&bits.push("YouTube "+o.youtubeItems),o.facebookItems&&bits.push("Фейсбук "+o.facebookItems),bits.length>1&&L.push("Площадки: "+bits.join(", ")+".")}return L.push(""),L.push("Кто пишет (публикаций за период):"),a.bySource.slice(0,15).forEach(x=>L.push("  "+x.key+" — "+x.count)),a.silent&&a.silent.list&&a.silent.list.length&&(L.push(""),L.push("Молчали за период ("+a.silent.list.length+" из "+a.silent.configured+" отслеживаемых): "+a.silent.list.slice(0,15).join(", ")+(a.silent.more?" и ещё "+a.silent.more:"")+".")),L.push(""),L.push("Публикации по дням:"),a.byDay.slice(-21).forEach(x=>L.push("  "+x.day+" — "+x.count)),a.tone&&a.tone.total&&(L.push(""),L.push("Тональность (уже оценена ранее, всего размечено "+a.tone.total+"): выигрышных "+a.tone.pos+", нейтральных "+a.tone.neu+", невыгодных "+a.tone.neg+"."),a.tone.bySource&&a.tone.bySource.length&&(L.push("По источникам (источник: выигрышно/нейтрально/невыгодно):"),a.tone.bySource.slice(0,15).forEach(x=>L.push("  "+x.key+": "+x.pos+"/"+x.neu+"/"+x.neg)))),sampleTitles&&sampleTitles.length&&(L.push(""),L.push("Заголовки материалов:"),sampleTitles.slice(0,60).forEach(t=>L.push("  • "+t))),L.join(`
`)}function parseMarks(text){let s=String(text||""),i=s.search(/РАЗМЕТКА\s*:?/i),body=i>=0?s.slice(i):s,out={};for(let m of body.matchAll(/(?:^|\n)[ \t]*(\d{1,4})[ \t]*[:.\-–][ \t]*([+\-0])[ \t]*(?:[:;–—-][ \t]*([^\n]*))?(?=\n|$)/g)){let why=String(m[3]||"").trim();for(let k=0;k<4;k++){let was=why;if(why=why.replace(/^[«"'(\s]+/,"").replace(/[»"')\s]+$/,"").replace(/[.;,]+$/,"").trim(),why===was)break}why=why.slice(0,90),out[+m[1]]={mark:m[2],why}}return Object.keys(out).length?out:null}function stripMarks(text){let s=String(text||""),i=s.search(/\n\s*РАЗМЕТКА\s*:?/i);return(i>=0?s.slice(0,i):s).trim()}async function callOne({apiKey,model,text,maxOut,timeoutMs=callTimeout(),temp=.2}){let m=String(model||DEFAULT_MODEL).trim(),mkBody=thinking=>({contents:[{role:"user",parts:[{text}]}],generationConfig:{temperature:temp,maxOutputTokens:maxOut+(thinking&&thinking.thinkingBudget===0?0:THINK_ROOM),...thinking?{thinkingConfig:thinking}:{}}}),call=async thinking=>{let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),timeoutMs);try{let r=await fetch(ENDPOINT(m)+"?key="+encodeURIComponent(apiKey),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(mkBody(thinking)),signal:ctrl.signal}),raw=await r.text(),data=null;try{data=JSON.parse(raw)}catch{}return{httpOk:r.ok,status:r.status,raw,data}}finally{clearTimeout(t)}},t0=Date.now(),think="",meta=res2=>{let u=res2&&res2.data&&res2.data.usageMetadata||{},usage=u.promptTokenCount||u.candidatesTokenCount||u.thoughtsTokenCount?{in:u.promptTokenCount||0,out:u.candidatesTokenCount||0,think:u.thoughtsTokenCount||0}:null;return{ms:Date.now()-t0,think,...usage?{usage}:{}}},res=null;try{let ladder=thinkingLadder(m);for(let i=0;i<ladder.length&&(think=ladder[i]?ladder[i].thinkingLevel?"уровень "+ladder[i].thinkingLevel:"выключено":"без настройки",res=await call(ladder[i]),!(res.httpOk||!ladder[i]||!/thinking/i.test(res.raw||"")));i++);if(!res.httpOk)return{ok:!1,err:"Google API: "+(res.data&&res.data.error&&res.data.error.message?res.data.error.message:(res.raw||"HTTP "+res.status).slice(0,400)),...meta(res)};let cand=res.data&&res.data.candidates&&res.data.candidates[0],parts=cand&&cand.content&&cand.content.parts,out=Array.isArray(parts)?parts.filter(p=>!p.thought).map(p=>p.text||"").join("").trim():"",why=cand&&cand.finishReason,fin=why?{finish:why}:{};if(why==="MAX_TOKENS")return out?{ok:!0,text:out,truncated:!0,...fin,...meta(res)}:{ok:!1,err:"модель израсходовала лимит на размышление и не успела ответить — попробуйте ещё раз или смените модель",...fin,...meta(res)};if(!out){let extra=why?" (причина: "+why+")":"",block=res.data&&res.data.promptFeedback&&res.data.promptFeedback.blockReason;return{ok:!1,err:"модель ничего не ответила"+(block?" — запрос отклонён: "+block:extra),...fin,...meta(res)}}return{ok:!0,text:out,...fin,...meta(res)}}catch(e){return{ok:!1,err:e&&e.name==="AbortError"?"ответ не пришёл за "+Math.round(timeoutMs/1e3)+" с":String(e&&e.message||e),...meta(res)}}}async function callModel(opts){let chain2=modelChain(opts.model),last=null,tried=[],attempts2=[];for(let m of chain2){let r=await callOne({...opts,model:m});if(attempts2.push({model:m,ok:!!r.ok,...r.ok?{}:{err:r.err},ms:r.ms,...r.finish?{finish:r.finish}:{},...r.usage?{usage:r.usage}:{},...r.think?{think:r.think}:{},...r.truncated?{truncated:!0}:{}}),r.ok)return{...r,model:m,attempts:attempts2,...tried.length?{fellBack:{from:chain2[0],to:m,tried:tried.slice()}}:{}};if(last=r,tried.push({model:m,err:r.err}),!worthNextModel(r.err))break}let short2=e=>{let v=String(e||"").replace(/\s+/g," ").trim();return v.length>160?v.slice(0,159)+"…":v};return{ok:!1,err:tried.length>1?"перебрали модели: "+tried.map(x=>x.model+" — "+short2(x.err)).join("; "):last&&last.err,model:chain2[0],tried,attempts:attempts2}}function logEntry(n,from,to,r,extra={}){return{n,from,to,size:to-from+1,ok:!!r.ok,model:r.ok?r.model:"",ms:(r.attempts||[]).reduce((s,a)=>s+(a.ms||0),0),attempts:r.attempts||[],...r.ok?{}:{err:r.err},...extra}}async function listModels({apiKey,timeoutMs=15e3}={}){if(!apiKey)return{ok:!1,err:"не задан ключ Google"};let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),timeoutMs);try{let r=await fetch(BASE.replace(/\/$/,"")+"?key="+encodeURIComponent(apiKey)+"&pageSize=200",{signal:ctrl.signal}),raw=await r.text(),data=null;try{data=JSON.parse(raw)}catch{}return r.ok?{ok:!0,models:(Array.isArray(data&&data.models)?data.models:[]).filter(m=>Array.isArray(m.supportedGenerationMethods)?m.supportedGenerationMethods.includes("generateContent"):!0).map(m=>String(m.name||"").replace(/^models\//,"")).filter(Boolean).filter(n=>!/embedding|aqa|image|imagen|veo|tts/i.test(n))}:{ok:!1,err:"Google API: "+(data&&data.error&&data.error.message||raw.slice(0,300))}}catch(e){return{ok:!1,err:e&&e.name==="AbortError"?"Google не ответил вовремя":String(e&&e.message||e)}}finally{clearTimeout(t)}}async function askReview({apiKey,model,analytics,items,data,cfg,withSnippets=!0,localDay:localDay2}){if(!apiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let m=String(model||DEFAULT_MODEL).trim(),o=analytics&&analytics.overview||{},d=data||reviewData({items,cfg:cfg||{keyword:o.keyword||""},from:o.windowFrom,to:o.windowTo,withSnippets,localDay:localDay2}),text=PROMPTS.review+`
`+d.text+`

ОБЩАЯ СВОДКА ПРОГРАММЫ:
`+brief(analytics,null),r=await callModel({apiKey,model:m,text,maxOut:REVIEW_OUT,timeoutMs:reviewTimeout(),temp:.2}),log=[logEntry(1,1,d.shown,r)];return r.ok?{ok:!0,text:cleanMarkdown(r.text),model:r.model||m,log,data:d,...r.truncated?{truncated:!0}:{},...r.fellBack?{fellBack:r.fellBack}:{}}:{...r,log,data:d}}function cleanMarkdown(t){let s=String(t||"").trim(),m=s.match(/^```[a-zA-Z]*\s*\n([\s\S]*?)\n?```\s*$/);return m&&(s=m[1].trim()),s}function outCapFor(n){return Math.max(2e3,Math.min(8e3,700+n*30))}function subjectBlock(analytics){let k=analytics&&analytics.overview&&analytics.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(k?"«"+k+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","Знак ставится ПО ОТНОШЕНИЮ К НЕМУ, а не «хорошая или плохая новость вообще»:","  +  объект показан в выигрышном свете: достижение, награда, поддержка, похвала в его адрес;","  -  объект показан невыгодно: критика, обвинение, провал, скандал, недовольство им;","  0  протокольное сообщение, факт, объявление — без оценки объекта.","Беда, катастрофа, конфликт САМИ ПО СЕБЕ негативом не считаются: если объект помогает","пострадавшим, решает проблему или просто упомянут рядом — для него это 0 или +.","Если по показанному тексту тон не виден — ставь 0 и пиши причину «тон по фрагменту не виден».","Это лучше, чем угадать: угаданный знак от настоящего не отличить.",""].join(`
`)}function snipOf(x){return!x||typeof x!="object"?"":String(x.snippet||"").replace(/\s+/g," ").trim().slice(0,SNIP_MAX)}function titleOf(x){let s=x&&typeof x=="object"?x.title:x;return String(s??"").replace(/\s+/g," ").trim()}function subjectBlockVerify(analytics){let k=analytics&&analytics.overview&&analytics.overview.keyword||"";return["ОБЪЕКТ МОНИТОРИНГА: "+(k?"«"+k+"»":"тема запроса")+".","(Через запятую могут стоять написания одного и того же — это один объект, а не разные.)","  +  материал действительно ПРО ЭТОТ объект: он действующее лицо, о нём говорят,","     его решение, его ведомство, его слова — даже если упомянут вскользь;","  -  слово совпало СЛУЧАЙНО: однофамилец или тёзка, другой человек с той же фамилией,","     улица/район/школа, названные этим именем, другая организация с похожим названием,","     другое значение слова;","  0  по показанному тексту понять нельзя.","Упоминание вскользь — это всё равно «+»: наша задача отсеять ЧУЖОЕ, а не короткое.","Если сомневаешься между «-» и «0» — ставь 0. Выброшенный по ошибке материал","дороже лишнего: пропускать важное нельзя.",""].join(`
`)}async function askSentimentAll(opts){return askMarksAll({...opts,task:"sentiment"})}async function askVerifyAll(opts){return askMarksAll({...opts,task:"verify"})}async function askMarksAll({apiKey,model,analytics,titles,batch=BATCH,maxCalls=MAX_CALLS,task="sentiment",onStep=null}){let T=TASKS[task]||TASKS.sentiment;if(!apiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let m=String(model||DEFAULT_MODEL).trim(),list=(titles||[]).map(x=>({title:titleOf(x),snip:snipOf(x)}));if(!list.length)return{ok:!1,err:"нечего оценивать: в окне нет материалов"};let withSnips=list.some(x=>x.snip),marks={},log=[],calls=0,prose="",firstErr="",usedModel=m,fellBack=null,step2=e=>{if(log.push(e),onStep)try{onStep(e,{calls,marked:Object.keys(marks).length,asked:list.length})}catch{}},askChunk=async(from,to,withProse)=>{if(from>=to||calls>=maxCalls)return;let part=list.slice(from,to),numbered=part.map((x,i)=>from+i+1+". "+x.title+(x.snip?`
   из текста: `+x.snip:"")).join(`
`),rules=PROMPTS[withProse?T.first:T.more]+T.subject(analytics)+(withSnips?PROMPTS.withSnippets:""),head=withProse?rules+brief(analytics,null)+`

Заголовки для оценки (`+part.length+` шт.):
`:rules+"Заголовки ("+part.length+` шт.):
`;calls++;let n=calls,r=await callModel({apiKey,model:m,text:head+numbered,maxOut:outCapFor(part.length),temp:0}),canSplit=part.length>MIN_BATCH&&calls<maxCalls,mid=from+Math.floor(part.length/2);if(!r.ok){firstErr||(firstErr=r.err);let split2=sizeErr(r.err)&&canSplit;step2(logEntry(n,from+1,to,r,{got:0,...split2?{action:"split"}:{}})),split2&&(await askChunk(from,mid,withProse&&!prose),await askChunk(mid,to,!1));return}usedModel=r.model||usedModel,r.fellBack&&!fellBack&&(fellBack=r.fellBack);let got=parseMarks(r.text)||{},inRange2=Object.keys(got).filter(k=>+k>from&&+k<=to);for(let k of inRange2)marks[k]=got[k];withProse&&!prose&&(prose=stripMarks(r.text));let split=part.length-inRange2.length>Math.max(1,Math.floor(part.length*.1))&&canSplit;step2(logEntry(n,from+1,to,r,{got:inRange2.length,...r.truncated?{truncated:!0}:{},...split?{action:"split"}:{}})),split&&(await askChunk(from,mid,!1),await askChunk(mid,to,!1))};await askChunk(0,Math.min(batch,list.length),!0);for(let i=batch;i<list.length&&calls<maxCalls;i+=batch)await askChunk(i,Math.min(i+batch,list.length),!1);let nums=Object.keys(marks);if(!nums.length)return{ok:!1,err:firstErr||"модель не вернула разметку",calls,log};let pos=0,neu=0,neg=0;for(let k of nums){let s=marks[k]&&marks[k].mark;s==="+"?pos++:s==="0"?neu++:s==="-"&&neg++}let covered=pos+neu+neg,lines=T.counts(pos,neu,neg);return prose&&lines.push(prose),{ok:!0,model:usedModel,marks,text:lines.join(`
`).trim(),prose,calls,covered,asked:list.length,log,...fellBack?{fellBack}:{},...firstErr&&covered<list.length?{partialErr:firstErr}:{}}}function stripCounts(text){return String(text||"").replace(COUNT_LINE,"").trim()}function countsText(task,marks,prose=""){let T=TASKS[task]||TASKS.sentiment,pos=0,neu=0,neg=0;for(let s of marks||[])s==="+"?pos++:s==="0"?neu++:s==="-"&&neg++;let lines=T.counts(pos,neu,neg);return prose&&lines.push(prose),lines.join(`
`).trim()}function reviewsPrompt(firm,reviews,now=new Date){let ymdL=t=>{let d=new Date(t);return isNaN(d)?"":d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")},list=(reviews||[]).filter(r=>r&&r.text).sort((a,b)=>String(b.created||"").localeCompare(String(a.created||""))),lines=[],size2=0;for(let r of list){let line="["+ymdL(r.created)+" ★"+(r.rating||"?")+(r.rated===!1?" не учтён":"")+"] "+String(r.text).replace(/\s+/g," ").slice(0,700);if(size2+line.length>REVIEWS_CHARS)break;lines.push(line),size2+=line.length+1}return{text:["Ты аналитик репутации бизнеса. Ниже отзывы о фирме из 2ГИС: «"+(firm.name||"")+"»"+(firm.address?", "+firm.address:"")+(firm.category?" ("+firm.category+")":"")+".",firm.card?"Сейчас на карточке: рейтинг "+firm.card.rating+", отзывов "+firm.card.reviewsCount+", оценок "+firm.card.ratingsCount+".":"","Отзывов в разборе: "+lines.length+(lines.length<list.length?" самых свежих из "+list.length+" (остальные не влезли)":"")+". Сегодня "+ymdL(now)+".","Ответь по-русски, коротко и по делу, маркированными списками, разделами:","1) Общая картина: тон и что изменилось за последние 30 дней по сравнению с более ранними.","2) За что хвалят чаще всего (до 5 пунктов, примерная доля отзывов).","3) На что жалуются чаще всего (до 5 пунктов, примерная доля, короткая цитата-пример в кавычках).","4) Повторяющиеся конкретные проблемы: люди, смены, услуги, время суток — если видно.","5) Что сделать в первую очередь (3 пункта).","Опирайся ТОЛЬКО на эти отзывы, ничего не выдумывай. Имена сотрудников упоминай, только если их называют сами отзывы. Отзывы на казахском учитывай наравне с русскими.","","Отзывы (новые сверху):"].filter(x=>x!=="").join(`
`)+`
`+lines.join(`
`),used:lines.length,total:list.length}}async function askReviews({apiKey,model,firm,reviews}){if(!apiKey)return{ok:!1,err:"нет ключа Gemini (задайте в «Аналитике» любого проекта)"};let p=reviewsPrompt(firm||{},reviews||[]);return p.used?{...await callModel({apiKey,model,text:p.text,maxOut:4e3,timeoutMs:18e4,temp:.2}),used:p.used,total:p.total}:{ok:!1,err:"отзывов с текстом пока нет — разбирать нечего"}}var DEFAULT_MODEL,FALLBACK_MODELS,THINK_ROOM,callTimeout,BASE,ENDPOINT,PROMPTS,REVIEW_OUT,reviewTimeout,BATCH,MIN_BATCH,MAX_CALLS,sizeErr,SNIP_MAX,TASKS,COUNT_LINE,REVIEWS_CHARS,init_gemini=__esm({"desktop/gemini.js"(){init_review();DEFAULT_MODEL="gemini-3.5-flash",FALLBACK_MODELS=["gemini-3.8-flash","gemini-3.6-flash","gemini-3.5-flash"];THINK_ROOM=4096,callTimeout=()=>+(typeof process<"u"&&process.env&&process.env.MC_GEMINI_TIMEOUT_MS)||9e4;BASE=typeof process<"u"&&process.env&&process.env.MC_GEMINI_BASE||"https://generativelanguage.googleapis.com/v1beta/models/",ENDPOINT=m=>`${BASE}${encodeURIComponent(m)}:generateContent`;PROMPTS={review:["РОЛЬ","Ты — аналитик по медиамониторингу, готовящий информационно-аналитические справки (обзоры","информационного поля) для руководства. Пишешь в официально-деловом стиле, сжато, нейтрально","по форме, аналитично по содержанию.","","ЗАДАЧА","На основе материалов мониторинга (они ниже, в блоке «ДАННЫЕ ДЛЯ СПРАВКИ») подготовить обзор","информационного поля вокруг объекта мониторинга за указанный период строго по структуре и правилам.","","ЧТО ЕСТЬ В ДАННЫХ","- Объект, круг связанных лиц, период и дополнительный контекст — в начале блока данных.","- Точные числа, посчитанные программой: материалы, перепечатки, площадки, типы источников.","- Список материалов: дата, издание, площадка, заголовок; у части — фрагмент текста вокруг","  упоминания, тональность по отношению к объекту и пометка «объект только в тексте».","- Ссылок, полных текстов статей, охвата, просмотров и цитируемости в данных НЕТ.","","СТРУКТУРА СПРАВКИ","","0. Шапка","- Первая строка курсивом: период — ровно так, как он указан в данных.","- Следом заголовок ЗАГЛАВНЫМИ жирным: «ОБЗОР ИНФОРМАЦИОННОГО ПОЛЯ ВОКРУГ <ОБЪЕКТ>»","  (объект в родительном падеже).","","1. Вводный абзац (общая картина)","- Сколько ключевых сюжетов зафиксировано за период (жирным число). Сюжет — одно событие или","  один повод; несколько материалов об одном поводе — это один сюжет.","- Характер публикаций: оригинальные материалы или перепечатки — по числам программы.","- Где распространялись: площадки (сайты СМИ, Телеграм-каналы, YouTube, Фейсбук) и — ТОЛЬКО если","  пользователь разметил источники — их типы (критические, нейтральные, лояльные и т.п.), жирным.","","2. Абзац-рамка (тематика и вывод о резонансе)","- Одним предложением перечисли тематические направления.","- Укажи, за счёт кого формировалась повестка.","- Завершающий вывод жирным: получили ли сюжеты общественный резонанс. Резонанс суди по тому, что","  есть в данных: сколько изданий подхватило сюжет, были ли перепечатки, длился ли он несколько дней.","","3. Основная часть: сюжеты, сгруппированные по темам","- Тематические блоки определяй по данным. Если такие темы есть, ориентируйся на порядок:","  официальные и памятные события → внешний контур → правовые и имущественные вопросы → бизнес и","  активы → репутационные и личные сюжеты → историко-идеологические нарративы.","- Каждый сюжет — отдельный абзац: издание (всегда названо) → что сообщило → ключевой тезис","  жирным → контекст или опровержение/уточнение, если есть в данных.","- Между абзацами используй логические связки: «Так,», «В то же время», «Наряду с»,","  «Параллельно», «Помимо», «Тема получила продолжение в…».","- Самый широко подхваченный сюжет (больше всего изданий и перепечаток) отметь явно.","- Тональность в данных — это тон самих публикаций по отношению к объекту, а не реакция аудитории.","  Число комментариев есть только у постов Фейсбука, где оно указано; другой реакции аудитории в","  данных нет — не описывай её.","- Для спорных заявлений используй атрибуцию: «утверждается», «сообщается», «якобы»,","  «по мнению автора», «интерпретируется как».","- Если для сюжета есть контекст, снижающий остроту заявления, добавь его одним предложением.","","4. Заключение (аналитический вывод, один абзац)","- Главный тренд периода: как изменился характер информационного давления или поддержки","  (например, «от X к Y»); ключевая формулировка жирным.","- Оценка последствий: привели ли сюжеты к росту общественной активности, новым очагам","  напряжённости, изменению повестки или остались в плоскости виртуальных дискуссий.","","СТИЛЬ","- Официально-деловой, без эмоциональных эпитетов и разговорных оборотов.","- Аналитические маркеры («оппонирующие источники», «протестный сегмент», «заметного резонанса","  не получили») допустимы только если подкреплены данными мониторинга.","- Персоны: инициалы + фамилия без пробела («Н.Назарбаев»); при первом упоминании добавляй роль,","  если она есть в данных.","- Названия изданий пиши так, как они приняты (Tengrinews.kz, Радио Азаттык, «Проект»).","- Даты указывай точно («18 декабря»).","- Объём: 1,5–2 страницы, 8–15 абзацев. Если материалов мало — короче: каждый абзац несёт новую","  информацию, раздувать нельзя.","","ВЫДЕЛЕНИЕ ЖИРНЫМ","Жирным выделяй: количество сюжетов, тип источников, итоговый вывод о резонансе, главный тезис","каждого сюжета, ключевые цифры, имена и названия, на которых строится сюжет, ключевой вывод","заключения. Не выделяй более 1–2 фрагментов в предложении.","","ОГРАНИЧЕНИЯ ПО ДОСТОВЕРНОСТИ","- Используй только предоставленные материалы. Не добавляй факты, цитаты, цифры, издания и","  ссылки, которых нет в данных. Цитатой можно считать только слова из фрагмента текста.","- Метрик охвата, просмотров и цитируемости нет — не придумывай их и не пиши «данные уточняются»","  в тексте справки; об их отсутствии — одной строкой в примечаниях.","- Тип источника (критический, лояльный и т.п.) бери только из разметки в данных. Не приписывай","  его по названию издания.","- Не смешивай факт и утверждение источника: заявления СМИ и блогеров подавай с атрибуцией.","- Не высказывай личных оценок объекта и источников; оценка допустима только как аналитический","  вывод о характере и масштабе информационного повода.","- Если данных недостаточно для какого-то блока, пропусти его и сообщи об этом в примечании.","- ЗАПРЕЩЕНО писать про саму программу и про то, как собраны данные.","","ФОРМАТ ВЫВОДА","Готовый текст справки в формате Markdown (**жирный**, *курсив*), без вступлений и пояснений,","без таблиц и без блоков кода. После справки — строка «Примечания для редактора» и под ней не","более 3 пунктов, каждый с «- »: что требует проверки, где не хватило данных, что стоит добавить.","","САМОПРОВЕРКА ПЕРЕД ВЫДАЧЕЙ (молча, в ответ не пиши)","1. Есть шапка, вводный абзац, абзац-рамка, основная часть, заключение?","2. У каждого сюжета названо издание и выделен ключевой тезис?","3. Нет ли фактов, цифр и изданий, которых нет в данных?","4. Есть ли в заключении тренд и оценка последствий?","5. Соблюдены тон, объём и правила оформления имён?",""].join(`
`),sentiment:["Ты — редактор-аналитик службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Оцени тональность каждого материала по отношению к ОБЪЕКТУ МОНИТОРИНГА (см. ниже).","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: чем окрашена тема, есть ли перекос по конкретным СМИ>","","РАЗМЕТКА:","1:+:награда врачам, тон одобрительный","2:0:протокольное сообщение без оценки","3:-:критика в адрес ведомства","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ позитив, 0 нейтрально, - негатив), двоеточие и КОРОТКАЯ причина —","от двух до шести слов по-русски, строчными, без точки в конце. Причина объясняет","ИМЕННО ЭТОТ заголовок: что в нём делает его позитивным, нейтральным или негативным.","Не пересказывай заголовок и не повторяй слово «позитив»/«негатив» — это уже есть в знаке.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем оценку с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),withSnippets:["Под частью заголовков строкой «из текста:» дан фрагмент статьи вокруг ключевого слова.","Опирайся В ПЕРВУЮ ОЧЕРЕДЬ на него: заголовок часто протокольный («провёл совещание»),","а настоящий тон виден в тексте. Фрагмент — это НЕ отдельный материал и своего номера","не имеет: он относится к заголовку над собой.",""].join(`
`),sentimentMore:["Ты — редактор-аналитик службы медиамониторинга. Продолжаем оценку тональности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + позитив, 0 нейтрально, - негатив. Причина — от двух до шести слов","по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`),verify:["Ты — редактор службы медиамониторинга. Ниже — сводка и ПРОНУМЕРОВАННЫЕ заголовки.","Задача ровно одна: сказать, относится ли каждый материал К ОБЪЕКТУ МОНИТОРИНГА —","или слово совпало случайно (однофамилец, тёзка, другое значение слова, чужая организация).","Тональность, важность и качество материала тебя здесь НЕ интересуют.","","Ответ строго в таком виде и ни в каком другом:","","<2–3 предложения по-русски: много ли постороннего попало в выдачу и какого рода>","","РАЗМЕТКА:","1:+:премьер-министр, тот самый","2:-:однофамилец, сотрудник КНБ","3:0:по фрагменту не понять, кто это","","В блоке РАЗМЕТКА — по строке на КАЖДЫЙ показанный заголовок: его номер, двоеточие,","знак (+ это про объект, - это НЕ про объект, 0 по показанному не понять), двоеточие","и КОРОТКАЯ причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков: по ним мы сопоставляем вердикт с материалом.","Пропускать заголовки нельзя — строка нужна на каждый.",""].join(`
`),verifyMore:["Ты — редактор службы медиамониторинга. Продолжаем проверку релевантности.","Ниже — ОЧЕРЕДНАЯ порция пронумерованных заголовков по той же теме.","","Ответ — ТОЛЬКО блок разметки, без единого слова до и после:","","РАЗМЕТКА:","<номер>:<знак>:<короткая причина>","","Знак: + это про объект, - это НЕ про объект (совпало слово), 0 по показанному не понять.","Причина — от двух до шести слов по-русски, строчными, без точки в конце.","Номера бери ТЕ ЖЕ, что стоят у заголовков (они продолжают общую нумерацию).","Строка нужна на КАЖДЫЙ заголовок, пропускать нельзя.",""].join(`
`)};REVIEW_OUT=8e3,reviewTimeout=()=>+(typeof process<"u"&&process.env&&process.env.MC_GEMINI_TIMEOUT_MS)||18e4;BATCH=60,MIN_BATCH=15,MAX_CALLS=20,sizeErr=err=>/ответ не пришёл|лимит на размышление|MAX_TOKENS/i.test(String(err||""));SNIP_MAX=200;TASKS={sentiment:{first:"sentiment",more:"sentimentMore",subject:subjectBlock,counts:(pos,neu,neg)=>["ПОЗИТИВНЫХ: "+pos,"НЕЙТРАЛЬНЫХ: "+neu,"НЕГАТИВНЫХ: "+neg,""]},verify:{first:"verify",more:"verifyMore",subject:subjectBlockVerify,counts:(pos,neu,neg)=>["ПРО ОБЪЕКТ: "+pos,"НЕ ПОНЯТЬ: "+neu,"НЕ ПРО ОБЪЕКТ: "+neg,""]}};COUNT_LINE=/^(?:ПОЗИТИВНЫХ|НЕЙТРАЛЬНЫХ|НЕГАТИВНЫХ|ПРО ОБЪЕКТ|НЕ ПОНЯТЬ|НЕ ПРО ОБЪЕКТ):\s*\d+\s*$/gm;REVIEWS_CHARS=4e5}});function runsPerDay(schedule){let s=schedule||{},mode=String(s.mode||"off");return mode==="daily"?1:mode==="hours"?Math.max(1,Math.ceil(24/Math.max(1,+s.everyHours||6))):mode==="minutes"?Math.max(1,Math.ceil(1440/Math.max(10,+s.everyMinutes||20))):0}function verifyAllowed(schedule){return runsPerDay(schedule)<=1}function verifyWhyNot(schedule){return"прогоны идут чаще раза в сутки ("+runsPerDay(schedule)+" в сутки) — проверка релевантности смотрит каждый материал окна и на таком шаге сожгла бы квоту Google. Поставьте расписание «каждый день» или реже — или запускайте проверку вручную."}var init_run_rate=__esm({"desktop/run-rate.js"(){}});function normKinds(kinds){let out=[];for(let k of Array.isArray(kinds)?kinds:[]){let v=k==="summary"?"review":k;AI_KINDS.includes(v)&&!out.includes(v)&&out.push(v)}return out}function reviewInput(projectId,{days=null,analytics,settings:settings2}={}){let p=getProject(projectId),o=analytics&&analytics.overview||{};return reviewData({items:windowItems(projectId,{days}),cfg:p&&p.config||{},from:o.windowFrom,to:o.windowTo,withSnippets:sendSnippets(settings2||settings()),localDay})}async function reviewRun(projectId,{days=null,analytics,settings:settings2}={}){let st=settings2||settings();if(!st.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};let data=reviewInput(projectId,{days,analytics,settings:st});if(!data.total)return{ok:!1,err:"в окне нет материалов — писать обзор не о чем",log:[]};let r=await askReview({apiKey:st.geminiKey,model:st.geminiModel,analytics,data});return{...r,note:reviewNote(data,r)}}function reviewNote(data,r){if(!data)return"";let bits=["по "+data.total+" материалам окна"];return data.reprints&&bits.push("перепечаток "+data.reprints),data.shown<data.rows&&bits.push("модели показаны самые свежие "+data.shown+" из "+data.rows),data.dropped&&bits.push(data.dropped+" помеченных «не про объект» не брали"),r&&r.truncated&&bits.push("ответ обрезан по лимиту — конец справки не поместился"),bits.join("; ")}function sendSnippets(settings2){return(settings2||{}).geminiSnippets!==!1}function sentimentTitles(items,settings2){return sendSnippets(settings2)?items.map(x=>({title:x.title,snippet:x.snippet||""})):items.map(x=>x.title)}function applyMarks(items,marks){if(!marks)return null;let out=[];return items.forEach((it,i)=>{let m=marks[i+1];if(!m)return;let mark=typeof m=="string"?m:m.mark,why=typeof m=="string"?"":m.why||"";(mark==="+"||mark==="0"||mark==="-")&&out.push({...it,mark,why})}),out.length?out:null}async function markRun(projectId,{kind="sentiment",days=null,analytics,settings:settings2,rescore=!1,onStep=null}={}){let T=MARK_TASKS[kind]||MARK_TASKS.sentiment,st=settings2||settings();if(!st.geminiKey)return{ok:!1,err:"нет ключа Gemini (задайте в настройках)"};rescore&&T.clear(projectId);let before=windowItems(projectId,{days});if(!before.length)return{ok:!1,err:T.empty};let todo=before.filter(x=>!x[T.field]).slice(0,SENTIMENT_NEW_MAX),had=before.filter(x=>x[T.field]).length,calls=0,fresh2=0,err="",model=st.geminiModel||"",log=[],partialErr="",prev=(getAiReports(projectId)||{})[kind]||{},prose=stripCounts(prev.text||"");if(todo.length){let r=await T.ask({apiKey:st.geminiKey,model:st.geminiModel,analytics,titles:sentimentTitles(todo,st),onStep});if(calls=r.calls||0,log=r.log||[],!r.ok)return{ok:!1,err:r.err||"не получилось",calls,model:r.model||model,log,asked:todo.length};model=r.model||model,r.prose&&(prose=r.prose),partialErr=r.partialErr||"";let marked=(applyMarks(todo,r.marks)||[]).map(x=>({...x,model}));fresh2=T.set(projectId,marked),err=""}let items=windowItems(projectId,{days}).filter(x=>x[T.field]).map(x=>({title:x.title,url:x.url,source:x.source,date:x.date,mark:x[T.field],why:x[T.why]||""}));return{ok:!0,text:countsText(kind,items.map(x=>x.mark),prose),model,err,calls,fresh:fresh2,stored:had,asked:todo.length,covered:items.length,total:before.length,items:items.length?items:null,log,...partialErr?{partialErr}:{}}}function sentimentNote(r){return!r||!r.ok?r&&r.err||"не получилось":r.asked?`оценено ${r.fresh} новых из ${r.asked} (запросов к Google: ${r.calls})`+(r.stored?`; ранее оценено ${r.stored} — не переспрашивали`:"")+`; всего в окне размечено ${r.covered} из ${r.total}`+gapNote(r,"оценки"):`все ${r.covered} материалов окна уже оценены — к Google не ходили`}function gapNote(r,what){let left=(r.total||0)-(r.covered||0);return left<=0?"":`; без ${what} осталось ${left}`+(r.partialErr?` (последний отказ: ${r.partialErr})`:"")+" — повторный запрос спросит только про них"}function verifyNote(r){if(!r||!r.ok)return r&&r.err||"не получилось";let off=(r.items||[]).filter(x=>x.mark==="-").length,dim=(r.items||[]).filter(x=>x.mark==="0").length,tail=`; похоже, не про объект — ${off}`+(dim?`, по фрагменту не понять — ${dim}`:"")+"; ничего не удалено, решает человек";return r.asked?`проверено ${r.fresh} новых из ${r.asked} (запросов к Google: ${r.calls})`+(r.stored?`; ранее проверено ${r.stored} — не переспрашивали`:"")+`; всего в окне проверено ${r.covered} из ${r.total}`+tail+gapNote(r,"проверки"):`все ${r.covered} материалов окна уже проверены — к Google не ходили`+tail}async function runAiAfterRun(projectId,{foundNow=null,runTs=null}={}){let notes=[],p=getProject(projectId);if(!p)return notes;let c=p.config||{};if(!c.aiAuto)return notes;if(!outbound(c).ai)return notes.push("ИИ-разбор пропущен: "+OUT_OFF),notes;let st=settings();if(!st.geminiKey)return notes.push("ИИ-разбор включён, но ключ Gemini не задан — пропускаю (задайте во вкладке «Аналитика»)"),notes;if(foundNow===0)return notes.push("ИИ-разбор пропущен: в этом прогоне ноль материалов — квоту не тратим"),notes;let want=Array.isArray(c.aiKinds)&&c.aiKinds.length?normKinds(c.aiKinds):["review"],days=c.periodMode==="rolling"?Math.max(2,+c.periodDays||2):null,a=buildAnalytics(projectId,{days});if(!a)return notes;for(let kind of want)try{if(kind==="verify"&&!verifyAllowed(p.schedule)){notes.push(`ИИ-${RU[kind]} пропущена: `+verifyWhyNot(p.schedule));continue}if(kind==="review"){let last=((getAiReports(projectId)||{}).review||{}).at||0;if(last&&Date.now()-last<72e6){notes.push("ИИ-расширенный обзор пропущен: пишется автоматически не чаще раза в сутки (последний — "+localStamp(last)+"); вручную — кнопкой во вкладке «Аналитика»");continue}}let byItem=kind==="sentiment"||kind==="verify",r=byItem?await markRun(projectId,{kind,days,analytics:a,settings:st}):await reviewRun(projectId,{days,analytics:a,settings:st});setAiReport(projectId,kind,{at:Date.now(),runTs,window:a.overview.windowFrom+" … "+a.overview.windowTo,text:r.ok?r.text:"",model:r.model||st.geminiModel||"",err:r.ok?"":r.err||"не получилось",auto:!0,items:r.ok&&byItem?r.items:null,log:r.log||[],...r.ok?{note:kind==="sentiment"?sentimentNote(r):kind==="verify"?verifyNote(r):r.note||""}:{}});let done=kind==="sentiment"?sentimentNote(r):kind==="verify"?verifyNote(r):"готово, "+(r.note||"");notes.push(r.ok?`ИИ-${RU[kind]}: ${done}`:`ИИ-${RU[kind]}: ${r.err||"не получилось"}`)}catch(e){notes.push(`ИИ-${RU[kind]}: сбой — ${String(e&&e.message||e)}`)}return notes}var AI_KINDS,RU,normKind,SENTIMENT_NEW_MAX,MARK_TASKS,init_ai_runner=__esm({"desktop/ai-runner.js"(){init_store();init_analytics();init_gemini();init_review();init_dates();init_outbound();init_run_rate();AI_KINDS=["review","sentiment","verify"],RU={review:"расширенный обзор",sentiment:"тональность",verify:"проверка релевантности"};normKind=k=>k==="summary"?"review":k;SENTIMENT_NEW_MAX=600;MARK_TASKS={sentiment:{field:"sent",why:"sentWhy",ask:askSentimentAll,set:setSentiment,clear:clearSentiment,empty:"нечего оценивать: в окне нет материалов"},verify:{field:"rel",why:"relWhy",ask:askVerifyAll,set:setRelevance,clear:clearRelevance,empty:"нечего проверять: в окне нет материалов"}}}});async function tgApi(token,method,body={},ms2=TIMEOUT_MS){if(!token)return{ok:!1,err:"не задан токен бота"};let ctrl=new AbortController,timer=setTimeout(()=>ctrl.abort(),ms2);try{let r=await fetch(`${BASE2}/bot${token}/${method}`,{method:"POST",signal:ctrl.signal,headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}),text=await r.text(),j=null;try{j=JSON.parse(text)}catch{}return j?j.ok?{ok:!0,result:j.result}:{ok:!1,err:j.description||"телеграм отказал (HTTP "+r.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+r.status+")"}}catch(e){let msg=String(e&&e.message||e);return{ok:!1,err:/abort/i.test(msg)?"телеграм не ответил за "+Math.round(ms2/1e3)+" с":msg}}finally{clearTimeout(timer)}}async function checkBot(token){let r=await tgApi(token,"getMe");if(!r.ok)return{ok:!1,err:r.err};let u=r.result&&r.result.username||"";return{ok:!0,bot:u?"@"+u:r.result&&r.result.first_name||"бот"}}async function pullChats(token,state2={}){let chats=(state2.chats||[]).slice(),byId=new Map(chats.map(c=>[String(c.id),c])),r=await tgApi(token,"getUpdates",{offset:state2.offset||0,timeout:0,limit:100});if(!r.ok)return{chats,offset:state2.offset||0,err:r.err,added:0,events:[]};let offset=state2.offset||0,added=0,removed=0,events=[];for(let up of r.result||[]){if(up.update_id!=null&&(offset=Math.max(offset,up.update_id+1)),up.callback_query){let q=up.callback_query,qm=q.message||{};qm.chat&&qm.chat.id!=null&&events.push({kind:"cb",id:q.id,chat:qm.chat,from:q.from||{},data:String(q.data||""),messageId:qm.message_id,date:qm.date||0});continue}let msg=up.message||up.channel_post||up.my_chat_member,chat=msg&&msg.chat;if(!chat||chat.id==null)continue;if(up.message&&typeof up.message.text=="string"){let m=up.message;events.push({kind:"msg",chat,from:m.from||{},text:m.text,date:m.date||0,messageId:m.message_id,replyTo:m.reply_to_message?m.reply_to_message.message_id:null})}let text=String(msg.text||"").trim().toLowerCase(),name=[chat.title,chat.first_name,chat.username&&"@"+chat.username].filter(Boolean)[0]||String(chat.id);if(/^\/stop\b/.test(text)||up.my_chat_member&&/kicked|left/.test(String(up.my_chat_member.new_chat_member&&up.my_chat_member.new_chat_member.status))){byId.delete(String(chat.id))&&removed++;continue}if(!byId.has(String(chat.id)))byId.set(String(chat.id),{id:chat.id,name,type:chat.type||""}),added++;else{let c=byId.get(String(chat.id));c.name=name,chat.type&&(c.type=chat.type)}}return{chats:[...byId.values()],offset,added,removed,err:"",events}}function setUpdateSink(fn){sink=typeof fn=="function"?fn:null}function pullFor(id){if(pulling.has(id))return pulling.get(id);let job=(async()=>{let st=tgState(id),r=await pullChats(st.token,st);if(setTgState(id,{chats:r.chats,offset:r.offset,err:r.err||""}),sink&&r.events&&r.events.length){let next=(chain.get(id)||Promise.resolve()).then(()=>sink(id,r.events)).catch(()=>{});chain.set(id,next)}return r})().finally(()=>pulling.delete(id));return pulling.set(id,job),job}async function memberStatus(token,chatId,userId,now=Date.now()){let k=token+"|"+chatId+"|"+userId,c=memberCache.get(k);if(c&&now-c.at<MEMBER_TTL)return c.status;let r=await tgApi(token,"getChatMember",{chat_id:chatId,user_id:userId}),status=r.ok&&r.result?String(r.result.status||""):"";return r.ok&&memberCache.set(k,{status,at:now}),status}async function chatAccess(st,chat,now=Date.now()){let owners=st&&st.owners||[];if(!chat||chat.id==null)return{ok:!1,why:"no-chat"};if(!owners.length)return{ok:!1,why:"no-owner"};if(chat.type==="private"||!chat.type&&Number(chat.id)>0)return owners.some(o=>String(o.id)===String(chat.id))?{ok:!0}:{ok:!1,why:"stranger"};for(let o of owners)if(IN_CHAT.includes(await memberStatus(st.token,chat.id,o.id,now)))return{ok:!0};return{ok:!1,why:"no-owner-here"}}async function sendDocument(token,chatId,filename,content,caption="",ms2=3e4){if(!token)return{ok:!1,err:"не задан токен бота"};let ctrl=new AbortController,timer=setTimeout(()=>ctrl.abort(),ms2);try{let fd=new FormData;fd.append("chat_id",String(chatId)),caption&&fd.append("caption",caption),fd.append("document",new Blob([content],{type:"text/csv"}),filename);let r=await fetch(`${BASE2}/bot${token}/sendDocument`,{method:"POST",body:fd,signal:ctrl.signal}),text=await r.text(),j=null;try{j=JSON.parse(text)}catch{}return j?j.ok?{ok:!0,result:j.result}:{ok:!1,err:j.description||"телеграм отказал (HTTP "+r.status+")"}:{ok:!1,err:"телеграм ответил не по-человечески (HTTP "+r.status+")"}}catch(e){let msg=String(e&&e.message||e);return{ok:!1,err:/abort/i.test(msg)?"телеграм не принял файл за "+Math.round(ms2/1e3)+" с":msg}}finally{clearTimeout(timer)}}function formatItem(item,projectName){let when=localStamp(item.date)||"",head=[item.source,when].filter(Boolean).map(esc).join(" · "),title=String(item.title||item.url||""),flat2=x=>String(x||"").replace(/\s+/g," ").replace(/…/g,"").trim().toLowerCase(),snip=String(item.snippet||"").replace(/\s+/g," ").trim().slice(0,300);return snip&&(flat2(snip)===flat2(title)||flat2(title).includes(flat2(snip)))&&(snip=""),[head?"📰 <b>"+head+"</b>":"📰",esc(title),snip?"<i>"+esc(snip)+"</i>":"",item.url||"",projectName?"<i>"+esc(projectName)+"</i>":""].filter(Boolean).join(`
`)}async function notifyNew(id,opts={}){if(sending.has(id))return{sent:0,skipped:"уже идёт отправка"};let st=tgState(id);if(!st.enabled||!st.token)return{sent:0,skipped:"бот выключен"};let proj=getProject(id);if(!proj)return{sent:0,skipped:"проект не найден"};if(!outbound(proj.config||{}).bot)return{sent:0,skipped:OUT_OFF};sending.add(id);try{let pulled=await pullFor(id);if(!pulled.chats.length)return{sent:0,skipped:"никто не нажал Start"};let st2=tgState(id),marked=[];for(let c of pulled.chats)marked.push({...c,access:(await chatAccess(st2,c)).ok?"ok":"no"});setTgState(id,{chats:marked});let chats=marked.filter(c=>c.access==="ok");if(!chats.length)return{sent:0,skipped:(st2.owners||[]).length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let all=unsentItems(id);if(!all.length)return{sent:0,skipped:"нового нет"};let batch=all.slice(0,MAX_PER_RUN),rest=all.length-batch.length,sent=0,done=[];for(let item of batch){let text=formatItem(item,opts.withName===!1?"":proj.name),okAny=!1;for(let c of chats){let r=await tgApi(st.token,"sendMessage",{chat_id:c.id,text,parse_mode:"HTML",disable_web_page_preview:!0});r.ok?okAny=!0:setTgState(id,{err:r.err})}okAny&&(done.push(item.url),sent++),PAUSE_MS&&await sleep2(PAUSE_MS)}if(done.length&&markTgSent(id,done),rest>0)for(let c of chats)await tgApi(st.token,"sendMessage",{chat_id:c.id,text:"… и ещё "+rest+": пришлю следующей порцией. Всё сразу — в кабинете."});let t2=tgState(id);return setTgState(id,{sentTotal:(t2.sentTotal||0)+sent,lastSentAt:Date.now(),err:sent?"":t2.err}),{sent,rest,chats:chats.length}}catch(e){try{setTgState(id,{err:String(e&&e.message||e)})}catch{}return{sent:0,err:String(e&&e.message||e)}}finally{sending.delete(id)}}var BASE2,MAX_PER_RUN,PAUSE_MS,TIMEOUT_MS,sleep2,esc,sink,pulling,chain,MEMBER_TTL,memberCache,IN_CHAT,sending,init_telegram_bot=__esm({"desktop/telegram-bot.js"(){init_store();init_dates();init_outbound();BASE2=typeof process<"u"&&process.env&&process.env.MC_TG_API_BASE||"https://api.telegram.org",MAX_PER_RUN=30,PAUSE_MS=typeof process<"u"&&process.env&&process.env.MC_TG_PAUSE_MS!=null?Math.max(0,+process.env.MC_TG_PAUSE_MS):1200,TIMEOUT_MS=15e3,sleep2=ms2=>new Promise(r=>setTimeout(r,ms2)),esc=s=>String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");sink=null;pulling=new Map,chain=new Map;MEMBER_TTL=600*1e3,memberCache=new Map;IN_CHAT=["creator","administrator","member","restricted"];sending=new Set}});function machineId(){let u="";try{u=(0,import_node_os2.userInfo)().username||""}catch{}return(0,import_node_crypto4.createHash)("sha256").update((0,import_node_os2.hostname)()+"|"+u).digest("hex").slice(0,16)}function readState(){try{return(0,import_node_fs9.existsSync)(FILE6)?JSON.parse((0,import_node_fs9.readFileSync)(FILE6,"utf8")):null}catch{return null}}function writeState(st){try{(0,import_node_fs9.mkdirSync)(DATA_ROOT,{recursive:!0})}catch{}try{(0,import_node_fs9.writeFileSync)(FILE6,JSON.stringify(st,null,2))}catch{}}function installedAt(){let st=readState();if(st&&st.installedAt)return st.installedAt>=TRIAL_SINCE?st.installedAt:(writeState({...st,installedAt:TRIAL_SINCE}),TRIAL_SINCE);let at=Date.now();try{(0,import_node_fs9.existsSync)(DATA_ROOT)&&(at=Math.min(at,(0,import_node_fs9.statSync)(DATA_ROOT).birthtimeMs||at))}catch{}return at=Math.max(at,TRIAL_SINCE),writeState({...st||{},installedAt:at}),at}function setKey(key){let st=readState()||{};return st.key=String(key||"").trim(),writeState(st),licenseState()}function verifyKey(key,now=Date.now()){let k=String(key||"").trim();if(!k)return{ok:!1,why:"ключ не введён"};if(!PUBLIC_KEY)return{ok:!1,why:"проверка ключей ещё не включена — программа работает в пробном режиме"};let parts=k.split(".");if(parts.length!==3||parts[0]!=="MC1")return{ok:!1,why:"это не похоже на ключ mediachrome — скопируй строку целиком, она начинается с MC1."};let pub;try{pub=(0,import_node_crypto4.createPublicKey)({key:Buffer.from(PUBLIC_KEY,"base64"),format:"der",type:"spki"})}catch{return{ok:!1,why:"в программе испорчен проверочный ключ — нужна переустановка"}}let good=!1;try{good=(0,import_node_crypto4.verify)(null,Buffer.from(parts[0]+"."+parts[1],"utf8"),pub,b64urlToBuf(parts[2]))}catch{good=!1}if(!good)return{ok:!1,why:"подпись ключа не сошлась — ключ поддельный или повреждён при пересылке"};let p;try{p=JSON.parse(b64urlToBuf(parts[1]).toString("utf8"))}catch{p=null}if(!p||typeof p!="object")return{ok:!1,why:"ключ подписан верно, но его содержимое не читается"};let info={to:String(p.to||""),until:p.until||null,id:String(p.id||""),hw:p.hw||null};if(info.hw&&info.hw!==machineId())return{ok:!1,why:"ключ выдан для другого компьютера",info};if(info.until){let end2=Date.parse(info.until+"T23:59:59");if(!Number.isFinite(end2))return{ok:!1,why:"в ключе неразборчивая дата окончания",info};if(now>end2)return{ok:!1,why:"срок лицензии истёк "+info.until,info,expired:!0}}return{ok:!0,why:"",info}}function licenseState(now=Date.now()){let st=readState()||{},at=installedAt(),daysUsed=Math.floor((now-at)/864e5),daysLeft=Math.min(TRIAL_DAYS,Math.max(0,TRIAL_DAYS-daysUsed)),v=st.key?verifyKey(st.key,now):{ok:!1,why:""},base={installedAt:at,hasKey:!!st.key,machine:machineId(),enforced:ENFORCE};if(v.ok)return{...base,ok:!0,mode:"licensed",daysLeft:null,why:"",to:v.info.to,until:v.info.until,keyId:v.info.id,locked:!!v.info.hw,keyWhy:""};let expired=daysLeft<=0;return{...base,ok:!ENFORCE||!expired,mode:expired?"expired":"trial",daysLeft,why:expired?"пробный период ("+TRIAL_DAYS+" дней) закончился — нужен лицензионный ключ":"",keyWhy:st.key?v.why:""}}function blockedReason(now=Date.now()){let s=licenseState(now);return s.ok?null:s.why}var import_node_path10,import_node_fs9,import_node_crypto4,import_node_os2,ENFORCE,TRIAL_DAYS,PUBLIC_KEY,FILE6,TRIAL_SINCE,b64urlToBuf,init_license=__esm({"desktop/license.js"(){import_node_path10=require("node:path"),import_node_fs9=require("node:fs"),import_node_crypto4=require("node:crypto"),import_node_os2=require("node:os");init_paths();ENFORCE=!0,TRIAL_DAYS=7,PUBLIC_KEY="MCowBQYDK2VwAyEA/0CvjwtjJF+3fBS+0ewj3O9wtXQBpDiheHRzJV/PXPw=",FILE6=(0,import_node_path10.join)(DATA_ROOT,"license.json");TRIAL_SINCE=Date.parse("2026-09-22T00:00:00Z");b64urlToBuf=s=>Buffer.from(String(s).replace(/-/g,"+").replace(/_/g,"/"),"base64")}});function startScheduler(){setInterval(tick,60*1e3)}async function netReady(sites,probe=probeHost){let all=[...new Set((sites||[]).map(s=>String(s).trim()).filter(Boolean).map(s=>s.replace(/^https?:\/\//,"").replace(/\/.*$/,"")).filter(h=>h&&!h.startsWith("@")))],web=all.filter(h=>!/^t\.me$/i.test(h)),hosts=(web.length?web:all).slice(0,3);return hosts.length?(await Promise.all(hosts.map(h=>probe(h)))).some(Boolean):!0}async function probeHost(host2){let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),6e3);try{return await fetch("https://"+host2+"/",{method:"HEAD",redirect:"follow",signal:ctrl.signal}),!0}catch{return!1}finally{clearTimeout(t)}}function isDue(p,now){let s=p.schedule||{mode:"off"},last=p.lastRun||0,mins=(now.getTime()-last)/6e4;if(s.mode==="minutes")return mins>=everyMinutes(s)-.5;if(s.mode==="hours")return mins>=(s.everyHours||6)*60-.5;if(s.mode==="daily"){let h=s.hour!=null?s.hour:9,dueAt=new Date(now.getFullYear(),now.getMonth(),now.getDate(),h,0,0,0);return now.getTime()>=dueAt.getTime()&&last<dueAt.getTime()}return!1}async function tick(){if(blockedReason()||running.size)return;let now=new Date;for(let meta of listProjects()){if(running.has(meta.id))continue;let p=getProject(meta.id);if(!p)continue;let eff=Math.max(p.lastRun||0,attempts.get(p.id)||0);if(isDue({...p,lastRun:eff},now)){if(!await netReady((p.config||{}).sites)){console.log(`[расписание] «${p.name}»: сети нет — откладываю (проверю через минуту)`);continue}running.add(p.id),begin(p.id,{name:p.name,by:"расписание"}),attempts.set(p.id,Date.now());try{let runTs=null,onProgress=(rows2,log2)=>{try{let r=mergeRun(p.id,rows2,log2,runTs);runTs=r.ts,notifyNew(p.id,{ts:r.ts}).catch(()=>{})}catch{}},{rows,log}=await runProject(p,onProgress,{onStep:st=>step(p.id,st),stopping:()=>stopping(p.id)}),res=mergeRun(p.id,rows,log,runTs);try{await notifyNew(p.id,{ts:res.ts})}catch{}let aiNotes=await runAiAfterRun(p.id,{foundNow:rows.length,runTs:res.ts});aiNotes.length&&(appendRunLog(p.id,res.ts,aiNotes.map(note2=>({site:"(ИИ)",channel:"gemini",found:0,note:note2}))),aiNotes.forEach(n=>console.log(`[расписание] «${p.name}»: ${n}`))),console.log(`[расписание] «${p.name}»: +${res.added} новых (всего ${res.total})`)}catch(e){console.error("[расписание] ошибка:",e&&e.message||e)}finally{running.delete(p.id),end(p.id)}}}}var MIN_EVERY_MIN,everyMinutes,attempts,init_scheduler=__esm({"desktop/scheduler.js"(){init_store();init_runner();init_locks();init_run_state();init_ai_runner();init_telegram_bot();init_license();MIN_EVERY_MIN=10,everyMinutes=s=>Math.max(MIN_EVERY_MIN,Math.min(720,+(s&&s.everyMinutes)||20));attempts=new Map}});function currentVersion(){return"0.7.1"}function cmpVer2(a,b){let pa=String(a||"").split(/[.\-+]/),pb=String(b||"").split(/[.\-+]/);for(let i=0;i<Math.max(pa.length,pb.length);i++){let x=parseInt(pa[i],10),y=parseInt(pb[i],10),nx=Number.isFinite(x)?x:0,ny=Number.isFinite(y)?y:0;if(nx!==ny)return nx<ny?-1:1}return 0}function readState2(){try{return(0,import_node_fs10.existsSync)(STATE2)?JSON.parse((0,import_node_fs10.readFileSync)(STATE2,"utf8")):{}}catch{return{}}}function writeState2(st){try{(0,import_node_fs10.mkdirSync)(DATA_ROOT,{recursive:!0}),(0,import_node_fs10.writeFileSync)(STATE2,JSON.stringify(st,null,2))}catch{}}async function getJson2(url,ms2=15e3){let ctrl=new AbortController,t=setTimeout(()=>ctrl.abort(),ms2);try{let r=await fetch(url,{signal:ctrl.signal,redirect:"follow",headers:{"Cache-Control":"no-cache"}});if(!r.ok)throw new Error("HTTP "+r.status);let txt=await r.text();return JSON.parse(txt)}finally{clearTimeout(t)}}async function checkUpdate(opts={}){let st=readState2(),now=Date.now(),every=Number.isFinite(opts.every)?opts.every:DAY3;if(!opts.force&&st.checkedAt&&now-st.checkedAt<every)return updateState();live={...live,phase:live.phase==="downloading"?"downloading":"checking",err:""};try{let m=await getJson2(MANIFEST_URL2),ver=String(m.version||"").trim();if(!ver)throw new Error("в файле версии нет номера");writeState2({...st,checkedAt:now,err:"",latest:{version:ver,notes:String(m.notes||""),url:String(m.setup||m.url||""),sha256:String(m.sha256||"").toLowerCase(),size:+m.size||0,at:String(m.at||"")}})}catch(e){writeState2({...st,checkedAt:now,err:String(e&&e.message||e).slice(0,200)})}return live.phase==="checking"&&(live={...live,phase:"idle"}),updateState()}function readyFile(ver){let f=(0,import_node_path11.join)(DIR3,"mediachrome-setup-"+ver+".exe");try{return(0,import_node_fs10.existsSync)(f)&&(0,import_node_fs10.statSync)(f).size>0?f:""}catch{return""}}function updateState(){let st=readState2(),cur=currentVersion(),l=st.latest||null,newer=!!(l&&l.version&&cmpVer2(cur,l.version)<0);return{current:cur,latest:l?l.version:"",newer,notes:l?l.notes:"",size:l?l.size:0,checkedAt:st.checkedAt||0,err:st.err||"",canInstall:process.platform==="win32"&&newer&&!!(l&&l.url),ready:newer?!!readyFile(l.version):!1,phase:live.phase,got:live.got,total:live.total,liveErr:live.err,installFailed:installFailed(st,cur)}}async function downloadUpdate(){let l=readState2().latest;if(!l||!l.url)return{ok:!1,err:"не знаю, что качать — сначала проверка"};if(cmpVer2(currentVersion(),l.version)>=0)return{ok:!1,err:"у вас и так последняя версия"};let have=readyFile(l.version);if(have)return{ok:!0,file:have,cached:!0};if(live.phase==="downloading")return{ok:!0,running:!0};live={phase:"downloading",got:0,total:l.size||0,err:""};let tmp=(0,import_node_path11.join)(DIR3,"mediachrome-setup-"+l.version+".part");try{(0,import_node_fs10.mkdirSync)(DIR3,{recursive:!0});for(let f of(0,import_node_fs10.readdirSync)(DIR3))if(!f.includes(l.version))try{(0,import_node_fs10.rmSync)((0,import_node_path11.join)(DIR3,f),{force:!0})}catch{}let ctrl=new AbortController,r=await fetch(l.url,{signal:ctrl.signal,redirect:"follow"});if(!r.ok)throw new Error("HTTP "+r.status);let total=+r.headers.get("content-length")||l.size||0;live={...live,total};let hash=(0,import_node_crypto5.createHash)("sha256"),meter=new import_node_stream.Transform({transform(c,_enc,cb){hash.update(c),live={...live,got:live.got+c.length},cb(null,c)}});await(0,import_promises.pipeline)(import_node_stream.Readable.fromWeb(r.body),meter,(0,import_node_fs10.createWriteStream)(tmp));let sum2=hash.digest("hex");if(l.sha256&&sum2!==l.sha256){try{(0,import_node_fs10.rmSync)(tmp,{force:!0})}catch{}throw new Error("файл скачался испорченным (отпечаток не сошёлся) — попробуйте ещё раз")}let out=(0,import_node_path11.join)(DIR3,"mediachrome-setup-"+l.version+".exe");try{(0,import_node_fs10.rmSync)(out,{force:!0})}catch{}return(0,import_node_fs10.renameSync)(tmp,out),live={phase:"ready",got:live.got,total,err:""},{ok:!0,file:out}}catch(e){try{(0,import_node_fs10.rmSync)(tmp,{force:!0})}catch{}let err=String(e&&e.message||e).slice(0,200);return live={phase:"error",got:0,total:0,err},{ok:!1,err}}}function installPrecheck(opts={}){if(opts.busy)return{ok:!1,err:"сейчас идёт сбор — обновление подождёт до его конца"};let l=readState2().latest,file=l&&readyFile(l.version);return file?process.platform!=="win32"&&!opts.spawnFn?{ok:!1,err:"установщик есть только для Windows"}:{ok:!0,file,version:l.version}:{ok:!1,err:"установщик ещё не скачан"}}function installUpdate(opts={}){let c=installPrecheck(opts);if(!c.ok)return c;let log=(0,import_node_path11.join)(DIR3,"setup-"+c.version+".log");try{(0,import_node_fs10.rmSync)(log,{force:!0})}catch{}writeState2({...readState2(),tried:{version:c.version,from:currentVersion(),at:Date.now(),log}});try{let ch=(opts.spawnFn||import_node_child_process.spawn)(c.file,["/SILENT","/NOCANCEL","/RESTARTAPPLICATIONS","/LOG="+log],{detached:!0,stdio:"ignore"});ch&&ch.unref&&ch.unref()}catch(e){return{ok:!1,err:String(e&&e.message||e).slice(0,200)}}return{ok:!0,version:c.version}}function installFailed(st,cur){let tr=st.tried;if(!tr||!tr.version||cmpVer2(cur,tr.version)>=0||!(Date.now()-(tr.at||0)<TRIED_FRESH))return null;let lines=[],hasLog=!1;try{if(tr.log&&(0,import_node_fs10.existsSync)(tr.log)){hasLog=!0;let all=(0,import_node_fs10.readFileSync)(tr.log,"utf8").replace(/^\uFEFF/,"").split(/\r?\n/).map(x=>x.trim()).filter(Boolean),bad=all.filter(x=>/error|fail|abort|denied|in use|cannot|unable|exception|ошибк|не удалось|отказ|занят/i.test(x));lines=(bad.length?bad:all).slice(-8).map(x=>x.slice(0,300))}}catch{}return{version:tr.version,from:tr.from||"",at:tr.at,hasLog,lines,file:readyFile(tr.version)||""}}var import_node_path11,import_node_fs10,import_node_url3,import_node_path12,import_node_crypto5,import_node_child_process,import_node_stream,import_promises,MANIFEST_URL2,STATE2,DIR3,DAY3,live,TRIED_FRESH,init_update=__esm({"desktop/update.js"(){import_node_path11=require("node:path"),import_node_fs10=require("node:fs"),import_node_url3=require("node:url"),import_node_path12=require("node:path"),import_node_crypto5=require("node:crypto"),import_node_child_process=require("node:child_process"),import_node_stream=require("node:stream"),import_promises=require("node:stream/promises");init_paths();MANIFEST_URL2=process.env.MC_UPDATE_URL||"https://raw.githubusercontent.com/Tim2190/mediachrome-dist/main/update.json",STATE2=(0,import_node_path11.join)(DATA_ROOT,"update-state.json"),DIR3=(0,import_node_path11.join)(DATA_ROOT,"update"),DAY3=24*3600*1e3;live={phase:"idle",got:0,total:0,err:""};TRIED_FRESH=7*DAY3}});function uiHtml(){return`<!doctype html>\r
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
<link rel="icon" id="favicon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABCGlDQ1BJQ0MgUHJvZmlsZQAAeJxjYGA8wQAELAYMDLl5JUVB7k4KEZFRCuwPGBiBEAwSk4sLGHADoKpv1yBqL+viUYcLcKakFicD6Q9ArFIEtBxopAiQLZIOYWuA2EkQtg2IXV5SUAJkB4DYRSFBzkB2CpCtkY7ETkJiJxcUgdT3ANk2uTmlyQh3M/Ck5oUGA2kOIJZhKGYIYnBncAL5H6IkfxEDg8VXBgbmCQixpJkMDNtbGRgkbiHEVBYwMPC3MDBsO48QQ4RJQWJRIliIBYiZ0tIYGD4tZ2DgjWRgEL7AwMAVDQsIHG5TALvNnSEfCNMZchhSgSKeDHkMyQx6QJYRgwGDIYMZAKbWPz9HbOBQAAAdyklEQVR42oWbeZxdVZXvv3ufc6eaq1KVoTIPkErIQDAQQLAEwqCRIEOpaCPdSre2/R603Xbbomjb2g7dT/uptAMq+mxEJqPMcyBACAlIAkmKVJJKKpWqVFKp1Hznc/bqP865555zK/SrfOqTW/fec87ea6/ht35rLUXFT0dHh/Xggw+6ANNWtLctOfvsGxYtW3F5S+u8ZVWp6qa4bVsigAhKgaAQAFW6g8J7F0QApVDeW+D/p0LPk9O8Cu6kQjcWmXJt6Rpd+rICxxg3k00Pn+zve6d7z65nd+/Y8dDk/m37KvcWXu2Uza++8qMLqqfP+srKtes+MmfRmbUDfcc5+PZOjh06yPjwMPlcHscpYFxTXpgoUOItROQ0yyw/zBOMgChfiN7WPDlFr/XeLX+iQncUFEoptNZYtk2iqpr6xkZaFy5g0cqzaZk1i8Gj3RN7//T6AyePdH+za8vDPZVCCATQ3v41e8uWrzurNtz4sblLV/z44is3Nvbu28/TDz3gHn6nUxmnoCzbVpZlo7SN0qriNKZuNKQQoReV/4MnO/8qJSFlUBWaEf5O6R7KE40RjDG4bhG3WBClbZm3tE2u7PiYtWTVSrY9+/hIz75dn9v5yD33lfYa3LG9vd3esmWLs+qDf3brmede+IPl51zAo7/4qbPz5RctO5FSyVQKhULEeMuRqOKqKQLwFy4Ve1BTtJySMkz9TEC093/YhCrsR1VIWynvVxDy2SzFbFZWX9zu3vDZz9p7d71B5/aXbnv7sXt+WNqz1dHRYT3xxBPuyg03dbSde8HdS1etc+/66hfp3r3Lqm2cpmxtY4wBMd6a/PWgxLN0iZq/Cqn36XdWqcjl91SlQJV4mwk9Q3mKX5ZnIByhtEAjnmlasRip6hrVe2Cf3r1tm7n0ho8bHY9/kGRd5xvPP7ano6PDsjr37mXJ9rfnLF668ulzL14f++nXbldDx/p1bcM0jOOEDk5FFTGktipileVvRVSb8lF7G/MdpL/1klBVSDhqirtUgYtVCKKUd8sKk1OqLH9jXFJV1UyMnlJ7d7zGVTd+UrKT41dJsv6eVx5/aFyjlDQ1tH7jwvUb6jb9/C5zvOeIrq5twC04U/yyqJAYwptXpZMpL7XkGEVJSI1V2WHK1MWLlFydRDavKAsrIhbhND5CTRGZ4zikauo5NTCgH77rZ+b8S6+qa57V+g2UEqtu+ZolF1zyof8cGxqzn7jn17q2qUm5juOfUKX/USH1LO3J9+ZTVF0FC68MfCqySAltzD9hFd18+RkyxTGWPlfo4F6B9YUeL8YlWVXN0QP71YKly5g2Y0bbsYHR+/WStrUfn7lwaer5Pz5k7GRCucb1FEyFVCpwSqXTDDsDfxvKPztVcQYS3jiBCUT/lQJFSBxK/L+JRIXSc6IH7mta6HRK3xIpWZ7CiCGejKvND28yLfMWp+af1fZxvbBtxRWjgyel7+B+lUxWeXFdSfTMVPhpKggC4r9QvjMMPlcq2LKosm2LqgxnoEpHpATxpad8wSlRIaUOb7x8r7D/8zaugudVRicRQzyVoq97vxo6flzmnLHsCt08Y1bb0QNdyriuUip0r8hS/QX5Jx1WLeXbrWfWofP0T0SH/ARiPLGIVFiWCbvOwJOVhCeq7CS9HxNdZXA23nNLQci7jZSF6i/cLRZVb9c7qrFlRpuOp6oaB3qPoO2YMsHuJTjd0nuCwSCI/3AJ3peygxcJ/Zasxvj38m1feTauVAgVEgVBJnRN6YRFRfdLhWl4axIfmXqvRUrXqyBkizFo21bHj/ZSVVXXqEXZenx4CG1ZvuwlCtwJQd3AHsInXeEfIrmBRPFQyV5L14vxTjMsMEVU4UV5pxjauQnrp/jZiAkvW4KnlA6vZLcigrZsJoZHiFkxbRsjZNNptKUDsKOCYOoBEW9hJvDUpc2L0kHcRaYELn/9BuVrUhDFI8mRIrxlJVEEoHQ4opQ01Ar+FhGMKYMzpGSfYZgtgeCVKCxtk0uncVyDbVxDsVjwD0ymAHspLbjSEQEYg1vM+6fgOcfSA8XHqXYyVVZn8W0S7b9WkbAW/quELfKZNGJMGQQpUCWIrBWxRAqUZ5iVIZSw5gagzIPKxWIex3GxjTEY407F6IHDmZLLBamutuPUzVuCtmPlaKBAaS9Dc/IFhg93oi3bd0z+vTx1iKDH8hmVIYzrOMxbtRY7VeV95iM7ZVy01hQKBQYPH8QUCl5yJqri/EKZqa8Z4putuC7GGGxjBDGhU1YRSy6juooM3LgFkk3TWbLxz0lPTHqnqQSNQmuFcR3qmqbR/9KjdL/8FMnaesR1/VCnAOMLRU3JJrVlkRkfZ82G6zjzokvp39dJ3hXiiQSpumno6loEaGlp5Ln/+DqjA8ewrFgoLEsEpUZBWBh/KGw3ktmVt2oiqDwMLMvwVinIjI3Ss2sXSvvOSQQlBuM62IkEa9qvYmzgKKd6DhJPphDXqUCTXpgrnZTWmlwmzawzz6Ltkg/y8LduR2VGWLP6LLqP9DEwPEnNqvfjaIsL33dhJEyfLoEOdEG078fKJgbiG2NlzA9l2hHFV2Fk6LNCAnbMxrJtYv6vHU+QqKrBdQyHOvex5oZPEa+uxTgOSquQJ/FBk5QBjus6xJNJzrvxFl5/6VUyQyeZ27aST9z6eX7ww+8yq7keXZgklUr5Ebd8GKoyNZBQcu4743ByJ8agpeQ4Qr9lcygln8q3SRfXKauxIBhxMeIG8V78UCPGEE8mGervZ/DUGKs33kgxlw6eIZHw6bl7rSzy2QxrO/6C/hNjHDt8iFR9HX05i8/96GF6TqaZ0dLAWO8BLCBZVYcdS1AoGsRoUDqUW4T9mIpg59I3RATt5fp+vCwBiXJq7YMvz6annf0+Zl/+UZRlg7h+nJUQpA0BG6UwrksiGefgrjexWuax+H1XkZucQGt7SiaotUU2PcmKyzZS03omXW+8QUxc3HyWZG0NceXSOzjCdRuupDo3zsntz9H1wmP0H+2nZXozSoPrGpTWU/gHz3h1IADty96IoEUqiAo/TY3Cds+u43X1VDfP9MKO43rprmM8r24Ao8rhtJQBG4OtLbp2bGfBxRtoWdRGMZtGaSt4nlaaQmaS5oVLOOOSq9m5bRs6liBJASseI280iZjN0zsP4bYs4Cc//R6f2NjO0BsvcdN1l/OzO7/D39/6aT8kGx/DRM9dIr4sFMkQU8bJYS+gQlBUgbI0g9ue5NDvf0IsniDV2OJ50VQ12k6g7Bg6FkMpDcZgnKIXvwW0bVHM5zi4Zw9nbbwJHU/guk5AX7nGxYonWHXNJ3nr9dfJTU5gcpOsXb2UZE0t02fPo6a2jiMDQ/zzr5/kW3/czvKLLuXuX/2Qxesu4gu/fAbTOIu/u/UWMukMWusSVRxwZlEytWx+2kiUaAry57DsjI/6DOQnRpm2ZAVNC9sopMeZPN6DM3aS4sgJnOFj6GIWRKitq/f9iSdeO5HgZG8PQ2NpVl9zE8VcDqU0SiuKuQznXHczI+kcg4e7sTTE0ydYvfosisUiFyyfz/UfuISO66/mPavO4mDvCf71d5v56gPb+M69mxkcmeDffvsss5et5PprP0h6YhJb2SGuSUW4kpLfNQg2QeIRyVJ9tt2DdtpSgWRSdY2c2Ps6SkBrRd8z93kgRCly2SyOtqhvW0fTOedRk5mkf8/b2IkEYlwSqSqO7NnNmksuY9GFl9Gz7TkEWHj+paTmnknnC8+TrG8iO3KS6XFDY8sM8ukMD/3w37GTKRavWkP71dexavUKHn30CXr6T1BflSRfLNLUUEtV3KJ/4CTajmMimCYUIBWeE/edoB0ULyqCoVKQLzgsXjifDR+6wuMHjVDb3MLSs88lXyhSKLkVpdEItTVxfvz9H/DSI0+QX7SI6UvPZuxYP5MjQ9iJJCIKSyv2vvoSK9atZ/DAHpTWLGy/mre2voQSA8rCLRZJJGPEbBslDoW80NQ8jRMH9nLnP27mik/czLXXX8MfN/2RguviiOJvPnwxO7Zs4bVX36CmoR5jiiF+wpRT+DDaNwZbSglPBWISUdi2zbGB49x//x98pyFoO0Y8+aCH6pRCxRLgFnGLReYvXsg/feNfmNY8nT/84icMn30ecy//GEcP7KeYHveKGJaFk8lw5MBBVnd8Bjse40j3IYq5PLYdQxkHd2wQnaghrhVKx2hoqOKrX/48jzz6NI///o88efePuSSTY+M1G3ng/k2kkgla61Pcs/V1rEQMETfi/ErgzXN6IeQpgl2ikKM0VgnwKopFh8HBk2U3YlzECIiLrq6neuFKRjtfBRGO7Ovi8P4DfPeXdzOjtZWf3nEHKlVL3YJlHD96DG3ZXrzXNoMH36EmZaOUZmDvbuLJpFdtGu6ncHAXbvOFJFJVaCvG9773TWa3Tmd4eJivf+fr7Hh9F4//6i4WLFvBunVree6ZF9j8di9Xrn8/++/8OXZ1CscxwebDnj/sDl1jsDEhIsFHdmHvqZXCiifQWpEeH+cDGy5nfDzN7t2d3P7lLxCrqiU7tp4HH9zEvn0H6DvUw2evu57/+5tfM/3nv+Dfbv8S4wd3eigPC7TlpadKc7BnJ4JgWTFy2kLbNsXMJOdceimf/9pXeGd3J+Lk6D92jBkzW/jXb9zO3s4unnv+FeyGRjY/eC9Xffbv2V5bw7a3D3DL+hXY8Rhjp0awkgkSiUQIChPhBjxmWrBNwLyEyg1BCPTMwynkAEikUvzpjbcxSuM4Lr++5/fEp88jf7SLXKGIUyhyzrU3MfDOW3z22uv46o/u5OePPkp6bIJk3A4qNiJeruEar6RVSrhsrYlbirrGWu789+/x3H33QzLJl//hDj7w4av52/91C+Iabv+n2+jt6+fuH9/F2PF+5sxu5fD+/Yzmha986W/p6upmzzsHOHCw2wNGoipzxCC6+QIgmj1JCbFqitk0DQvOwI5XcergXk6NjFJMT4AYOicmSS6EXOebYNmgYf/WpyhmMhSyab7y6b+gdfESLx1GPHyA62dBpfCkfWrBoFwHK6bJO8JgTy83/NUtXLr+vWy6/3GevH8TC+bP5caOD/PY40/xu3t+h2gY7D1M8/RZ9HYf4r4X97B4TjML5y3j5vPX8e1vfZeJiSyWbZeJEiknQwLYBAyMlKkkHxAYp0jNrPmc8aGbccQmm7kb28mysuMm3HwOK5ZA100nf+7qwITELWBpCyseByCbK+CKR4QqJKCoA9PUoXqAGJSCnc8+wop15/B3//h5TvUd5tbb/po3X9/Byy9tZf36dmKJBFdfs4HHHnua9Pgo02afgdKaTD7P63sPs/XNLm677gIaausZHctgh+gxLxr4WW0QBk9Tm8cvhmo7xsjgMK7P5iglVNXW4yarPCIkkURX1/h5vVee0Fr5mFwRTxbxCR0f+UXrJKXyglbKY3hsG23FqG9qZnRsgmO9fTRNnxks2EOQGlPyW67rM1Hl8K0QnKLz/6lcC6YkAPGJZh3h6AxWLM5EXzfuy5vQ8WoyAz0Imsfv/I6HuZN1VM1bTmbfNk+VtSLV0EixUMBJT4LrEKttmFoaDVNhfsYl4hEhxXwOZRQfv+njFCZG6Bs4ya/veYhTR/v50Ib11CTijI0O8+hjT5GfmCBZW8/Y6Bi4LomYzZLWZuY019FQk2B8cgJtab+PoFxDED/h83GAR33okgRD1V1BsJMpcqeOebjZipFKJpDaavK5PI0zZlHVOpNJ5wxAMXTiBMvaNzDY3clA55us/9wdzG5bhZvz8LmI4EqUV9Q+CLNiCYb7D/Pw9/6ZG26+iXNWr2Dbi5v5zzt/xnDfMS668jIuef+FvPnmWyRTKa798Ie47ze/Y1rrPPYdOobrFPnAmvk06jyHeg7y+209TExmsbRGJASEQvUFETxKrCQaFVQ6VLkELKAtG6016clJ1q5dSS7vsq9rPx0br0DHk7hrF7J163aGTw6x++lNKNvi+tu/Tz6f4w/f/RKWpcuEu/Ikb4p5LMvydM11iSdrmRg9xZz58/j0LX9O78H9bHl5G2Mjo/zvL97GsmVLMQbGMjn+4wd3gevQuvQsqpumc/yVN5nePI3amOFHd95NLp1Fx+MkE/FoX0mEcfZIXFtO1y2jiKSTIi6uMSQTCd7801seiHAc7v7tJqpmtzG+fwfFYgFxHJINTdzwD99msOcAT9/1f7BjFkpb3ikojXFcUs0zaWi7gNFjvSgxNM2azan9b5I9Ncit3/4XJJ/mWH8/mzdvZd2F57Hm7BWcOjXKT37zW84771zOXbuGbZtf5twrruHw4SOMpzO8d+VCBvv6yecd6hobcIwBYyJoENFBCU75pI1drrpItJKrCLh/K1ZdZnAFLMvCNg7KiiHawq6qxTYutdNauPyWL7Dv1ed4bdN/UTOtBSkWyx5YCZYdozA6RDxmMf2sdR7ISg8xfqyPy6+7luUr2ujZ38lLL28nPZnmqisv4/s/+DmXXnIRVVU1/PJnvwIlvOfq61C1zex5bTON9TWcNaeWB+99EiuWwHFdH9T5vQglDVDlKCcqSIYk0oEVNCwphVt0qGmdw+y1l5HP5XFFaGxo4IwzF1Ms9Q9YMbTaiA1U1zey4/EHeOvx+1jQvpHMYD9j/d1YsYSvcn4oVHD01SdYtL4Dnc9yYPNDTJszh8/9zV8xcLibkdFxXnhhC1XVCbr2H6C3t48HHnoUZVysRJJzLt9A68rzeeXFF7GUSyHvcmx4kqVnLuRQTy+JeBUYN1SJitYdlZcrRqNA1AL8NNi2yQ4f5/ALv/c4P2Vx0o7RvVkjxiAYpFhAa43SmmKxQCaTpX71pSRaFjF5vNevJYYdj6AsC8TQt/0ZtFYUJsb41Be/QDGXxink2L5jJ6MjYySTcX77/+4lnqwiX3SYvvAMPvDhm3BiVWzd8jJOsUjM1hgxPL2ji46LltN2pJ/u7iPEYzYlBy9KiNCDodq/LcYEYSnC0JbgouNQLEwEZadsLkPrWedhxDB05ADNbeczMTSAiAMJoWH2NCRWgzEOaAuwAkwRcDF+VmlyGSYm06y7bD3nrzuXzt07iVkxnn/meeavPo8Fq9eRnxjDitkka+ohluRQ3wC9PX1o26KupprRiQwxS5HOFsjkXRrqqnDdIsTsgAhRSpUrUyIYBMvXdlvEDXXfqBAd5nPpiBdLRVAaUjW1jA4cQWtIVtdSP/cMijru59oeMHGKeR9PaD/VDvcWSEDOGBFqGur5zGc+Tf/hA9TX1PDkk88xMTxCdVsd/UPjKKVxM3myfQcZHxuj4LjMbGniwmWtzKqLc3Aoxxtd/Vy2agFDvQfYvmMnVVVVGD/NF8oJXql0VirdiRHscntLmRIzXtkt8lMsFlh/xWXMnTuXe397H9l8jqqGFpzMGKaQ9UjOUn1D6VC1uKL85TsfS1tMjo7yqb/+S+I2jI2MkKquZeurO5izfCVYNiePHvaq1kqDspjZ3MCKedNorrLo6nyLZzu7WLt2DTdetJL+I0d46pktJFMpDyWGC6RBC11FSd0ItuuaaGtLQBqU2qzK/uHU0DCWjiEovxQFSlllhCGlJgjQfmotoa6ukhQsrcmmM7StOIv29ovZtWsn8+fO5smnXmB8PMN7zp3Ngvmz2N03SveJMRIxm1y+wHmLZzN89CAPvPYmGROjYc4intuynV1vd5LO5LHsOOUe3Wj3lQr6Csvtfb4TdP0LDCK6TIlJuedHxBCLxdi58y3Pcdh24Ngi5GnQwOHgJQAmcD4SKlQaI2jL4pM3/xkDR3uxLc3wyBgvv/QKqaoEL7zwMmcunsc5F7XT2T9G0TgkYzGUW+TFl15D106naV4b0+csQsZOMjJ0AjuRRGsFYsphPSjHl0r8vvkF1WqDLoWmaIms3AajQw3L8XiMeDwWPAi/xK2VBX5BokSvCX69wD/9kkVZ2iI7McnVGzcwa0YTfUePMnf2HF59dQcTE2ksS5NMxOg7NoBVzLByfjMLWupZt2wBUsxjRFE9az6Copgdx3WLWDE76DkuJWUqaLFR4cpbqLbnCcAuw0O/LBbKmwnbjopaVFBKE8E1Tqgx0gSlZ6nI/JRSZLNZ5i6cz9UbrqBr3zvUN9QzPDrKq1t3kKyuwhiD1gqnWOTtt3YzZ/Ys6rVD+ugJ3jrQDXYciVVjXMdbr9ZIpLAr4UaWisK+358QVOmNhwM8aelQ5fd0FKp/6kqXPxODFbNpnD4r0j6hDCRr6hmN1Gr9QgTCRz56HUNDQ0xOplm2fDkPbnqEiclJqmtrvA50wLLjdL5zgD1793lqbMeprm9i5vJzScyY68HYmOURKZHmYalggKLdaR4K9PYgRrBLnRweOREWnZ8kiy6zZCUs5eWuOLksx/+0GXSokbVENgDFiRGvjmh8VRRDsqqKRx55nGw6gx2zefb5V+jrHyBZVYVxy213gvicnreRWKoaO5EiPXiU9ImeoLrr5HJo5YfpUqtduFsmrB0lHkbKpTHPBJRmatOtXxyJNE6E+/kUYhwyI8cr6IaQL9G2n2b7uqEtiq6hu7sHS3vRwxhDPB4LsbdEAFNpG/nJcXLjIxV5m0eze7SaBORKUP8XFWEBo45R+7kAXt0viFKRu4QgbGXbq3+vUnsMSlDGX4gi2l4fIj8UkEylAqfrN4v4sVvKgxcVcwXKsjwIXdl4K+HWGhVuTC3PrpR6CMRzjh7QsTwNAPFIQ2M8yrrSYfg3DtqUItFClctqUlatcFF1qnJ4thf0momKNENHmpymKkWom6zkoCXSZVT5QBXwOyrSWm/F4qAUGtcx8WS11ygVahQKWuX8cKJUZX9FRZ+2lJogQwsJh4FISCgtunJuINrIEG2ErGziUhVmq6Z8VSJqH/LlIiSqakFco10nN1LTNB0R330oFQE5ERVGQiYx9canX6y8C+kqU21+an8L/4MIfA5bBetSypQpvdCFEvpbeX5Haqa1IFIY0W5mfF/9jFZBaSlPZ1XOcknU9itb0CpVL9xhESZAlUR6gSN2fjonHMHzoWtPw2CXe8CmRP5A2OKTIqKUNMxsFSc9tk9nR44/U9PYqKobW8R1ikGhglBIY8pY3NThhEi/L6GRjUhbqzrN5MzpTIQKE5Boy9aUGYSw61ehUB4dtEGBKRapbpgm1fX1auxk3zN6or/nXmf8RLZ1+TnaKRbFw74qZD+VHpn/eRIqotkqCskqWmMj80bv+vMumz3N99SUPncVKot6kL1YLMicZWt0cXwoO9rfc6/u3rnl4OSJnvub585TDXMXuU4u7WH9ylkhUVN6BqeuRk5r2xEHpaJCrRSNOu0uJTodpkLbkhDbE+4xruhxVFpTzGdpbF3ktsxboCaOH76/b+eWgxpEZTKn7pjs6xxftLZdx6sbjCl46KpMl0d7/MPjjMFrITrNNWXuR0KyUUFcLs0hqEjP8NThyXCILQ9ShOfmytMnKkiBS6DHwhTyxKtqzZLzL9Hj/V3jueFTd4Aoq6Oj03rliUfGGmfO6Y4l4x9pWny2Ge3vpZidVFYsXjEwpUIbk8gWy4mWKneOh5yYCqZBosNPKoTXdTBopSKfS0DYSJiwjkSssMbqAGR5yZKbz2KnakzbJVeLzp2yJgYO33Tg1cde6+jotKzOzk5pb2+333jxqT31LTNHUtVVH2xZ+h6VHh9zsiODSmmtlLaCNDdiFqp8+kYRAh1e0TMYpQ1llKrSyYe6UyIlrIpBvaggVGhWKOqwSy07SoNxHZx8TmpnzHXPfO9Vlsqf0mN9Xbd1bfnDr9rb2+0nnnjCtQCOHDli2tvb7TdeeHJbbfPMLks7l81a9p7qWE2jyoyPusXMBOIWETGhaSCm0F5ER6DKgxCEOQe/UiyV3w//XR6rCJMzAb8URqOheyGul4oXC+K6jiRqGs2s1efreSvP0YVTh0fGj3d/av+Wh39Zmhp91+HppeuuXBBvmfGVRNPsj6hkQ+3EqWEmBo+RHRvByWcwruO1yZzGHYcHRwnmA9Tph0elItoxpVUpAjkiE6Vh9OX3MijLJp5MkayfRt2M2dQ2NSH50Yns0NEHJoaOfPPI9i3vPjx9uvH5My+4oi01o/WGWE3L5Speu0yUbjKutozxW+uUQp1m3ltC9UUlVLg3qRh5PW2L95Q5QyGKl0RF+T5BoZWgNa5WMizF7DvFsYFnsycPP7R/25Z3HZ//bwkO+yS8bF5KAAAAAElFTkSuQmCC">\r
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
  /* «Собрать сейчас» — зелёная: главная кнопка проекта, видна сразу. */\r
  button#run{background:var(--ok);} button#run:hover:not(:disabled){background:var(--ok);filter:brightness(.9);}\r
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
`}var init_mc_ui=__esm({"mc-ui:mc-ui"(){}});function periodText(c){let m=c&&c.periodMode||"fixed";return m==="rolling"?`последние ${Math.max(2,+c.periodDays||2)} дн.`:m==="since"?`с ${c.from||"…"} и до сегодня`:resolvePeriod(c).why}function buildSnapshot(projectId){let p=getProject(projectId);if(!p)return null;let c=p.config||{},api={"/me":{hasPassword:!1,playwright:!1,hasGeminiKey:!1,geminiModel:""},["/projects/"+projectId]:{id:projectId,name:p.name,ai:cleanAi(p.ai)}};for(let days of SHARE_WINDOWS){let a=buildAnalytics(projectId,{days});if(a){api["/projects/"+projectId+"/analytics"+(days?"?days="+days:"")]=a;for(let p3 of a.byDay||[]){let key="/projects/"+projectId+"/day?d="+p3.day;p3.count&&api[key]===void 0&&(api[key]={day:p3.day,items:dayItems(projectId,p3.day)})}}}let now=new Date,p2=n=>String(n).padStart(2,"0");return{id:projectId,name:p.name||"Мониторинг",keyword:c.keyword||"",sources:(c.sites||[]).length,periodText:periodText(c),madeAt:`${p2(now.getDate())}.${p2(now.getMonth()+1)}.${now.getFullYear()} ${p2(now.getHours())}:${p2(now.getMinutes())}`,api}}function buildShareHtml(projectId){let snap=buildSnapshot(projectId);if(!snap)return null;let ui=uiHtml(),inject="<script>window.MC_SNAPSHOT = "+safeJson(snap)+`;</script>
`;return{html:ui.replace("<body>",`<body>
`+inject).replace("<title>mediachrome — кабинет</title>","<title>"+esc2(snap.name)+" — дашборд</title>"),snap}}function shareFileName(snap){let base=String(snap.name||"dashboard").replace(/[^A-Za-zА-Яа-яЁё0-9 _-]+/g,"").trim().replace(/\s+/g,"-")||"dashboard",d=new Date,p=n=>String(n).padStart(2,"0");return`${base}-${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}.html`}function contentDisposition(fileName){return`attachment; filename="${fileName.replace(/[^\x20-\x7E]/g,"_").replace(/["\\]/g,"_")}"; filename*=UTF-8''${encodeURIComponent(fileName)}`}var import_node_url4,import_node_path13,__dir3,SHARE_WINDOWS,safeJson,cleanAi,esc2,init_share=__esm({"desktop/share.js"(){import_node_url4=require("node:url"),import_node_path13=require("node:path");init_store();init_analytics();init_period();init_mc_ui();__dir3=(0,import_node_path13.dirname)((0,import_node_url4.fileURLToPath)(__mcFileUrl)),SHARE_WINDOWS=[null,30,7],safeJson=obj=>JSON.stringify(obj).replace(/</g,"\\u003c");cleanAi=ai=>{let out={};for(let[kind,r]of Object.entries(ai||{}))r&&(out[kind]={at:r.at||null,text:r.text||"",err:r.err||"",model:r.model||"",window:r.window||"",auto:!!r.auto,items:Array.isArray(r.items)?r.items:null});return out};esc2=s=>String(s??"").replace(/[<>&"]/g,ch=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[ch])}});function diagReport(site,r,period){let L=[];L.push("=== ДИАГНОСТИКА: "+site+" ==="),period&&L.push("период: "+(period.why||(period.from||"…")+" … "+(period.to||"…"))),L.push("каналы: "+(r.channel||"—")),L.push("итог движка: "+(r.note||"—")),L.push("найдено (взято): "+(r.rows?r.rows.length:0));let d=r.diag||{},meta=d.meta||{},recs=d.records||[];L.push(""),L.push("--- канал поиска ---"),L.push("вид поиска: "+(meta.searchKind||"—")),L.push("URL поиска: "+(meta.searchUrl||"(поиск не строился)")),meta.renderUrl&&L.push("URL рендера: "+meta.renderUrl),meta.rawLinks&&meta.rawLinks.length?(L.push("сырые ссылки со страницы поиска (образец "+meta.rawLinks.length+"):"),meta.rawLinks.slice(0,15).forEach(u=>L.push("   "+u))):L.push("сырых ссылок со страницы поиска: 0 (пусто/оболочка/JS-выдача)"),L.push(""),L.push("--- судьба открытых ссылок ("+recs.length+") ---");let byV={};for(let x of recs)byV[x.verdict]=(byV[x.verdict]||0)+1;L.push("сводка вердиктов: "+(Object.entries(byV).map(([k,v])=>k+"="+v).join(", ")||"—"));let LOST=/не открылась|дата не найдена|дата не распознана|не успели|не влезла/i,groups=new Map;for(let x of recs){let k=x.verdict||"—";groups.has(k)||groups.set(k,[]),groups.get(k).push(x)}let rank=k=>LOST.test(k)?0:k==="ВЗЯТА"?1:2,order=[...groups.keys()].sort((a,b)=>rank(a)-rank(b)||groups.get(b).length-groups.get(a).length),PER=5;for(let k of order){let list=groups.get(k);L.push("  • "+k+" — "+list.length+(LOST.test(k)?"  (ЭТО ПОТЕРЯ: страницу мы не проверили)":"")),list.slice(0,PER).forEach(x=>{let bits=[];x.date&&bits.push('дата="'+x.date+'"->'+(x.parsed||"НЕ РАСПОЗНАНА")),x.hasKw!=null&&bits.push("ключ:"+(x.hasKw?"да":"нет")),L.push("     "+(x.title?"«"+x.title+"»  ":"")+x.url+(bits.length?"   ["+bits.join(" | ")+"]":""))}),list.length>PER&&L.push("     … ещё "+(list.length-PER)+" с таким же вердиктом")}return L.join(`
`)}var init_diag_report=__esm({"desktop/diag-report.js"(){}});function plural(n,one2,few,many){let a=Math.abs(n)%100,b=a%10;return a>10&&a<20?many:b>1&&b<5?few:b===1?one2:many}function ymdParts(s){let m=String(s||"").match(/^(\d{4})-(\d{2})-(\d{2})/);return m?[+m[1],+m[2],+m[3]]:null}function ruRange(from,to){let a=ymdParts(from),b=ymdParts(to);if(!a&&!b)return"";if(!a||!b){let one2=a||b;return one2[2]+" "+MONTHS[one2[1]-1]+" "+one2[0]}return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]?a[2]+" "+MONTHS[a[1]-1]+" "+a[0]:a[0]===b[0]&&a[1]===b[1]?a[2]+"–"+b[2]+" "+MONTHS[a[1]-1]+" "+a[0]:a[0]===b[0]?a[2]+" "+MONTHS[a[1]-1]+" — "+b[2]+" "+MONTHS[b[1]-1]+" "+a[0]:a[2]+" "+MONTHS[a[1]-1]+" "+a[0]+" — "+b[2]+" "+MONTHS[b[1]-1]+" "+b[0]}function daysInRange(from,to){let a=ymdParts(from),b=ymdParts(to);return!a||!b?0:Math.round((Date.UTC(b[0],b[1]-1,b[2])-Date.UTC(a[0],a[1]-1,a[2]))/864e5)+1}function ruDuration(ms2){let s=Math.max(0,Math.round((+ms2||0)/1e3)),h=Math.floor(s/3600),m=Math.floor(s%3600/60),sec=s%60,out=[];return h&&out.push(num2(h,"час","часа","часов")),m&&out.push(num2(m,"минута","минуты","минут")),(sec||!out.length)&&out.push(num2(sec,"секунда","секунды","секунд")),out.join(" ")}function topSources(rows){let by=new Map;for(let r of rows)by.set(srcName(r.source),(by.get(srcName(r.source))||0)+1);return topFromPairs([...by.entries()])}function topFromPairs(pairs){let many=pairs.map(([k,n])=>[srcName(k),n]).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).filter(([,n])=>n>1).slice(0,12);if(!many.length)return"";let out=[];for(let i=0;i<many.length;){let n=many[i][1],same=[];for(;i<many.length&&many[i][1]===n;)same.push(many[i++][0]);out.push(same.join(" / ")+" — "+(same.length>1?"по ":"")+n)}return out.join(", ")}function buildReport(cfg,run){let c=cfg||{},r=run||{},rows=Array.isArray(r.rows)?r.rows:[],log=Array.isArray(r.log)?r.log:[],line=s=>log.find(x=>x.site===s)||null,per=line("(период)"),tm=line("(время)"),L=[];if(L.push("ОТЧЁТ ПО МОНИТОРИНГУ"),L.push(""),L.push("Тема: "+(c.keyword||"—")),per&&per.from&&per.to?L.push("Период: "+ruRange(per.from,per.to)+" ("+num2(daysInRange(per.from,per.to),"день","дня","дней")+")"):per&&per.note&&L.push("Период: "+per.note),r.at){let d=new Date(r.at);L.push("Дата мониторинга: "+d.getDate()+" "+MONTHS[d.getMonth()]+" "+d.getFullYear())}let seen=log.filter(l=>!isService(l.site));if(seen.length){let byPlat=new Map;for(let l of seen){let p=platformOf(l.site);byPlat.set(p,(byPlat.get(p)||0)+1)}L.push(""),L.push("ОХВАТ"),L.push("Просмотрено "+num2(seen.length,"источник","источника","источников")+":");for(let p of PLATFORM_ORDER){let n=byPlat.get(p);if(!n)continue;let f=PLATFORM_RU[p];L.push("  — "+(p==="youtube"?"YouTube":num2(n,f[0],f[1],f[2])))}}tm&&tm.ms&&(L.push(""),L.push("ЗАТРАЧЕНО ВРЕМЕНИ"),L.push(ruDuration(tm.ms)+" (автоматический сбор, 4 источника одновременно)")),L.push(""),L.push("РЕЗУЛЬТАТ");let srcSet=new Set(rows.map(x=>x.source));L.push(num2(rows.length,"материал","материала","материалов")+" на "+num2(srcSet.size,"источнике","источниках","источниках")+(seen.length?" из "+seen.length:""));let byDay=new Map;for(let x of rows){let d=parseDate(x.date);if(!d)continue;let k=ymd(d);byDay.set(k,(byDay.get(k)||0)+1)}if(byDay.size){L.push(""),L.push("По дням:");for(let k of[...byDay.keys()].sort()){let p=ymdParts(k);L.push("  "+p[2]+" "+MONTHS[p[1]-1]+" — "+byDay.get(k))}}let byPlatRows=new Map;for(let x of rows){let p=platformOf(x.source);byPlatRows.set(p,(byPlatRows.get(p)||0)+1)}if(byPlatRows.size>1){L.push(""),L.push("По типу источника:");for(let p of PLATFORM_ORDER){let n=byPlatRows.get(p);n&&L.push("  "+(p==="site"?"сайты СМИ":p==="telegram"?"телеграм":p==="youtube"?"YouTube":"Фейсбук")+" — "+n)}}let byMatch=new Map;for(let x of rows){let k=MATCH_RU[x.match]||String(x.match||"не указано");byMatch.set(k,(byMatch.get(k)||0)+1)}if(byMatch.size){L.push(""),L.push("Где встречается упоминание:");for(let[k,v]of[...byMatch.entries()].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])))L.push("  "+k+" — "+v)}let top2=topSources(rows);top2&&(L.push(""),L.push("Больше всего: "+top2)),L.push(""),L.push("МЕТОДИКА");let ex=String(c.exclude||"").trim();L.push(ex?"  — Применялись минус-слова: "+ex+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let ai=log.filter(l=>l.site==="(ИИ)"),ver=ai.find(l=>/релевантност/i.test(String(l.note||"")));ver?L.push("  — ИИ-проверка релевантности: "+String(ver.note).replace(/^ИИ-[^:]*:\s*/,"")+"."):L.push(ai.length?"  — Выполнен ИИ-разбор собранного ("+ai.length+").":"  — ИИ не запускался: отбор полностью детерминированный — разбор разметки и текста страниц, без машинного обучения и без распознавания изображений."),L.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),L.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let zero=seen.filter(l=>!(l.found>0)).length;return zero&&L.push("  — У "+num2(zero,"источника","источников","источников")+" из "+seen.length+" материалов по теме за этот период не нашлось."),L.join(`
`)+`
`}function buildWindowReport(cfg,a,opts={}){let c=cfg||{},o=a&&a.overview||{},L=[],now=opts.now instanceof Date?opts.now:new Date;L.push("ОТЧЁТ ПО МОНИТОРИНГУ"),L.push(""),L.push("Тема: "+(c.keyword||"—")),o.windowFrom&&o.windowTo&&L.push("Период: "+ruRange(o.windowFrom,o.windowTo)+" ("+num2(daysInRange(o.windowFrom,o.windowTo),"день","дня","дней")+")"),L.push("Дата отчёта: "+now.getDate()+" "+MONTHS[now.getMonth()]+" "+now.getFullYear());let sites=(c.sites||[]).map(x=>String(x||"").trim()).filter(Boolean),tg=sites.filter(x=>/(^@)|(^https?:\/\/)?(www\.)?t\.me\//i.test(x)).length,web=sites.length-tg,fb=(c.facebook||[]).map(x=>String(x||"").trim()).filter(Boolean).length,yt=!!(c.youtube&&c.youtube.enabled);if(sites.length||fb||yt){L.push(""),L.push("ОХВАТ");let total=sites.length+fb+(yt?1:0);L.push("Под наблюдением "+num2(total,"источник","источника","источников")+":"),web&&L.push("  — "+num2(web,"сайт СМИ","сайта СМИ","сайтов СМИ")),tg&&L.push("  — "+num2(tg,"телеграм-канал","телеграм-канала","телеграм-каналов")),yt&&L.push("  — YouTube"),fb&&L.push("  — "+num2(fb,"профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"))}let runs2=Array.isArray(a&&a.runs)?a.runs:[],secs=runs2.map(r=>+r.sec).filter(x=>Number.isFinite(x)&&x>0);if(secs.length){let sum2=secs.reduce((s,x)=>s+x,0);L.push(""),L.push("ЗАТРАЧЕНО ВРЕМЕНИ"),L.push(ruDuration(sum2*1e3)+" — "+num2(runs2.length,"автоматический сбор","автоматических сбора","автоматических сборов")+" за период")}L.push(""),L.push("РЕЗУЛЬТАТ");let seen=a&&a.silent&&a.silent.configured||0;L.push(num2(o.items||0,"материал","материала","материалов")+" на "+num2(o.uniqueSources||0,"источнике","источниках","источниках")+(seen?" из "+seen+" отслеживаемых":""));let days=(a&&Array.isArray(a.byDay)?a.byDay:[]).filter(x=>x&&x.count>0);if(days.length){L.push(""),L.push("По дням:");for(let d of days){let p=ymdParts(d.day);L.push("  "+(p?p[2]+" "+MONTHS[p[1]-1]:d.day)+" — "+d.count)}}let plat=[["site",o.siteItems],["telegram",o.telegramItems],["youtube",o.youtubeItems],["facebook",o.facebookItems]].filter(([,n])=>n>0);if(plat.length>1){L.push(""),L.push("По типу источника:");for(let[k,n]of plat)L.push("  "+(k==="site"?"сайты СМИ":k==="telegram"?"телеграм":k==="youtube"?"YouTube":"Фейсбук")+" — "+n)}let match=[["в заголовке",o.matchTitle],["в тексте материала",o.matchBody],["в посте",o.matchPost],["в видео",o.matchVideo],["без пометки",o.matchOther]].filter(([,n])=>n>0);if(match.length){L.push(""),L.push("Где встречается упоминание:");for(let[k,n]of match)L.push("  "+k+" — "+n)}let top2=topFromPairs((a&&a.bySource?a.bySource:[]).map(x=>[x.key,x.count]));top2&&(L.push(""),L.push("Больше всего: "+top2));let rl=reachLines(a&&a.reach);if(rl.length){L.push("");for(let x of rl)L.push(x);for(let x of a&&a.media?mediaLines(a.media,fmtReach):[])L.push(x)}let sl=storyLines(a&&a.stories);if(sl.length){L.push("");for(let x of sl)L.push(x)}let tone=a&&a.tone||{total:0};if(tone.total){L.push(""),L.push("ТОНАЛЬНОСТЬ (оценка ИИ по заголовку и фрагменту)"),L.push("  выигрышно для объекта — "+tone.pos+", нейтрально — "+tone.neu+", невыгодно — "+tone.neg+" (оценено "+tone.total+" из "+(o.items||0)+")");let worst=(tone.bySource||[]).filter(x=>x.neg>0).slice(0,5);worst.length&&L.push("  больше всего невыгодных: "+worst.map(x=>x.key+" — "+x.neg).join(", "))}L.push(""),L.push("МЕТОДИКА");let ex=String(c.exclude||"").trim();L.push(ex?"  — Применялись минус-слова: "+ex+" — материалы с ними в выдачу не попали.":"  — Минус-слова не применялись: из выдачи ничего не исключалось.");let rel=a&&a.relevance||{checked:0};rel.checked?L.push("  — ИИ-проверка релевантности: проверено "+num2(rel.checked,"материал","материала","материалов")+", из них "+rel.off+" "+plural(rel.off,"похож","похожи","похожи")+" на случайное совпадение имени"+(rel.dim?" и "+num2(rel.dim,"спорный","спорных","спорных"):"")+". Из выдачи они не удалены — помечены."):L.push("  — ИИ-проверка релевантности не запускалась."),L.push("  — Отбор материалов детерминированный: разбор разметки и текста страниц, без машинного обучения."),L.push("  — Даты публикации взяты со страниц самих материалов, а не из лент и агрегаторов."),L.push("  — Дубли сведены по адресу: один материал — одна строка, даже если найден несколькими путями.");let silentN=a&&a.silent&&a.silent.list?a.silent.list.length+(a.silent.more||0):0;return silentN&&L.push("  — У "+num2(silentN,"источника","источников","источников")+" из "+seen+" материалов по теме за этот период не нашлось."),L.join(`
`)+`
`}var num2,MONTHS,MATCH_RU,PLATFORM_RU,PLATFORM_ORDER,isService,srcName,init_report=__esm({"desktop/report.js"(){init_dates();init_analytics();init_audience();init_media_index();init_stories();num2=(n,one2,few,many)=>n+" "+plural(n,one2,few,many),MONTHS=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];MATCH_RU={title:"в заголовке",body:"в тексте материала",post:"в посте",video:"в видео",подпись:"в подписи к посту",репост:"в тексте репоста"},PLATFORM_RU={site:["сайт СМИ","сайта СМИ","сайтов СМИ"],telegram:["телеграм-канал","телеграм-канала","телеграм-каналов"],youtube:["YouTube","YouTube","YouTube"],facebook:["профиль в Фейсбуке","профиля в Фейсбуке","профилей в Фейсбуке"]},PLATFORM_ORDER=["site","telegram","youtube","facebook"],isService=site=>/^\(/.test(String(site||"")),srcName=s=>String(s)==="youtube"?"YouTube":String(s)}});function toCSV(items){let head=["source","date","title","url","channel","channels","match","snippet","author","kind","via","comments"];return[head.join(",")].concat((items||[]).map(r=>head.map(h=>csvCell(h==="date"?localStamp(r[h]):r[h])).join(","))).join(`\r
`)}var csvCell,init_csv=__esm({"desktop/csv.js"(){init_dates();csvCell=v=>{let s=String(v??"");return/[",\r\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s}}});async function runNow(id,by="ручной"){let p=getProject(id);if(!p)return{code:404,error:"проект не найден"};let stop=blockedReason();if(stop)return{code:402,error:stop};if(running.has(id))return{code:409,error:"уже идёт"};running.add(id),begin(id,{name:p.name,by});let runTs=null,onProgress=(rows,log)=>{try{let r=mergeRun(id,rows,log,runTs);runTs=r.ts,notifyNew(id,{ts:r.ts}).catch(()=>{})}catch{}};try{let{rows,log}=await runProject(p,onProgress,{onStep:st=>step(id,st),stopping:()=>stopping(id)}),r=mergeRun(id,rows,log,runTs);try{await notifyNew(id,{ts:r.ts})}catch{}let aiNotes=await runAiAfterRun(id,{foundNow:rows.length,runTs:r.ts});return aiNotes.length&&appendRunLog(id,r.ts,aiNotes.map(note2=>({site:"(ИИ)",channel:"gemini",found:0,note:note2}))),{code:200,added:r.added,total:r.total,ts:r.ts,found:rows.length,log}}catch(e){return{code:500,error:String(e&&e.message||e)}}finally{running.delete(id),end(id)}}var init_run_now=__esm({"desktop/run-now.js"(){init_store();init_runner();init_locks();init_run_state();init_ai_runner();init_telegram_bot();init_license()}});function parseCommand(text,botName=""){let m=String(text||"").trim().match(/^\/([A-Za-z_]+)(?:@([A-Za-z0-9_]+))?(?:\s+([\s\S]*))?$/);if(!m)return null;let to=(m[2]||"").toLowerCase(),me=String(botName||"").replace(/^@/,"").toLowerCase();return to&&me&&to!==me?null:{cmd:m[1].toLowerCase(),args:(m[3]||"").trim()}}function parseAdds(text){let body=String(text||"").trim().replace(/^\+\s*/,""),sites=[],facebook=[],bad=[];for(let raw of body.split(/[\s,;]+/)){let x=raw.trim().replace(/^[<"'«]+|[>"'»]+$/g,"").replace(/^\++/,"");if(!x)continue;if(facebookProfile(x)){facebook.push(facebookProfile(x).url);continue}let tg=telegramChannel(x);if(tg){sites.push("t.me/"+tg);continue}let host2=x.replace(/^https?:\/\//i,"").replace(/\/.*$/,"");if(/(^|\.)(facebook|fb)\.com$/i.test(host2)){bad.push(x);continue}if(/^[^\s./]+(\.[^\s./]+)*\.[^\s./\d][^\s./]+$/u.test(host2)&&!/^\d+\.\d+/.test(host2)){sites.push(x.replace(/^https?:\/\//i,"").replace(/\/+$/,""));continue}bad.push(x)}return{sites,facebook,bad}}function parseDays(text){let m=String(text||"").trim().match(/^(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(!m)return null;let n=+m[1];return n>=1&&n<=MAX_DAYS?n:null}function parseSearchArgs(args){let s=String(args||"").trim();if(!s)return{kw:"",days:null};let m=s.match(/^([\s\S]*?)\s+(\d{1,3})\s*(?:д|дн|дня|дней|day|days|d)?\.?$/i);if(m&&m[1].trim()){let n=+m[2];if(n>=1&&n<=MAX_DAYS)return{kw:m[1].trim(),days:n}}return{kw:s,days:null}}function searchConfig(parent,kw,days,adds={},now=new Date){let p=parent||{},d=Math.max(1,Math.min(MAX_DAYS,Math.floor(+days)||1)),per=d===1?{periodMode:"fixed",from:ymd(now),to:ymd(now),periodDays:void 0}:{periodMode:"rolling",periodDays:d,from:"",to:""},uniq=a=>[...new Set(a.map(x=>String(x).trim()).filter(Boolean))];return{...p,keyword:kw,exclude:"",...per,sites:uniq([...p.sites||[],...adds.sites||[]]),facebook:uniq([...p.facebook||[],...adds.facebook||[]])}}async function mayControl(st,ev2){let uid2=ev2.from&&ev2.from.id,owners=st.owners||[];if(uid2!=null&&owners.some(o=>String(o.id)===String(uid2)))return{ok:!0};if(!owners.length)return{ok:!1,why:"Владелец бота ещё не привязан. В кабинете, в настройках бота, есть команда вида /iam 123456 — владелец отправляет её мне в личные сообщения. После этого запускать сбор смогут он и администраторы его чатов."};if(!isGroup(ev2.chat))return{ok:!1,why:"Запускать сбор могут владелец бота и администраторы чата, где он состоит."};let st1=await memberStatus2(st.token,ev2.chat.id,uid2);if(st1!=="creator"&&st1!=="administrator")return{ok:!1,why:"Запускать сбор в этом чате могут владелец бота и администраторы чата."};for(let o of owners){let s=await memberStatus2(st.token,ev2.chat.id,o.id);if(["creator","administrator","member","restricted"].includes(s))return{ok:!0}}return{ok:!1,why:"Владельца бота нет в этом чате — запускать сбор отсюда нельзя."}}async function say(st,chatId,text,extra={}){let r=await tgApi(st.token,"sendMessage",{chat_id:chatId,text,parse_mode:"HTML",disable_web_page_preview:!0,...extra});return r.ok&&r.result?r.result.message_id:null}function itemLines(items,start=0){return items.map((it,i)=>start+i+1+". <b>"+esc(cut(it.title||it.url,160))+`</b>
`+esc([it.source,localStamp(it.date)].filter(Boolean).join(" · "))+`
`+esc(it.url||"")).join(`

`)}function topSources2(items,n=5){let m=new Map;for(let it of items)m.set(it.source||"—",(m.get(it.source||"—")||0)+1);return[...m.entries()].sort((a,b)=>b[1]-a[1]).slice(0,n).map(([s,k])=>s+" — "+k).join(", ")}function scheduleText(s){return s=s||{},s.mode==="daily"?"каждый день в "+(s.hour!=null?s.hour:9)+":00":s.mode==="hours"?"каждые "+(s.everyHours||6)+" ч":s.mode==="minutes"?"каждые "+(s.everyMinutes||20)+" мин":"вручную, по кнопке"}async function askKw(st,ev2,d){let mid=await say(st,ev2.chat.id,"🔎 <b>Разовый поиск.</b> Что ищем? Ответьте на это сообщение словом или фразой. Варианты написания — через запятую: <i>Тоқаев, Токаев</i>",{reply_to_message_id:ev2.messageId,reply_markup:{force_reply:!0,selective:!0}});mid&&d.prompts.add(mid)}async function askDays(st,ev2,d){let mid=await say(st,ev2.chat.id,"За сколько последних дней ищем «"+esc(d.kw)+"»? Нажмите кнопку или ответьте на это сообщение числом от 1 до "+MAX_DAYS+".",{reply_markup:{inline_keyboard:[DAY_BUTTONS.map(n=>({text:String(n),callback_data:"sd:"+n}))]}});mid&&d.prompts.add(mid)}async function askReady(st,ev2,d,proj,lead=""){let cfg=searchConfig(proj.config,d.kw,d.days,d.adds),extra=[...d.adds.sites,...d.adds.facebook],lines=[lead,"Ищу «<b>"+esc(d.kw)+"</b>» за последние "+daysWord(d.days)+" по "+sourceCount(cfg)+" источникам проекта «"+esc(proj.name)+"»"+(extra.length?", включая добавленные для этого поиска: "+esc(extra.join(", ")):"")+".","","Добавить источник только для этого поиска — ответьте на это сообщение: <code>+ адрес</code> (сайт, t.me/канал или facebook.com/профиль; можно несколько через пробел). Или запускайте."].filter((x,i)=>x||i>0),mid=await say(st,ev2.chat.id,lines.join(`
`),{reply_markup:{inline_keyboard:[[{text:"▶ Запустить",callback_data:"sr"},{text:"✖ Отмена",callback_data:"sx"}]]}});mid&&d.prompts.add(mid)}function saveSearch(t,kw,rows,log,meta){try{(0,import_node_fs11.mkdirSync)(SEARCHES_DIR,{recursive:!0});let base=(0,import_node_path14.join)(SEARCHES_DIR,stamp(t)+" — "+fileSafe(kw));(0,import_node_fs11.writeFileSync)(base+".csv","\uFEFF"+toCSV(rows)),(0,import_node_fs11.writeFileSync)(base+".json",JSON.stringify({...meta,keyword:kw,found:rows.length,log},null,2));let files=(0,import_node_fs11.readdirSync)(SEARCHES_DIR).map(f=>({f,at:(0,import_node_fs11.statSync)((0,import_node_path14.join)(SEARCHES_DIR,f)).mtimeMs})).sort((a,b)=>b.at-a.at);for(let x of files.slice(KEEP_SEARCHES*2))try{(0,import_node_fs11.rmSync)((0,import_node_path14.join)(SEARCHES_DIR,x.f),{force:!0})}catch{}}catch{}}async function searchJob(id,st,chatId,d,proj){let key=searchKey(id),t0=deps.now(),cfg=searchConfig(proj.config,d.kw,d.days,d.adds,new Date(t0)),total=sourceCount(cfg);running.add(key),begin(key,{name:"Разовый поиск «"+d.kw+"»",by:"телеграм: "+d.user,total}),await say(st,chatId,"🔎 Ищу «<b>"+esc(d.kw)+"</b>» за "+daysWord(d.days)+" по "+total+" источникам. Это займёт несколько минут — итог пришлю сюда. Остановить: /cancel");let res;try{res=await deps.runSearch({id:key,name:"Разовый поиск «"+d.kw+"»",config:cfg},{onStep:s=>step(key,s),stopping:()=>stopping(key)})}catch(e){await say(st,chatId,"⚠️ Поиск «"+esc(d.kw)+"» сорвался: "+esc(String(e&&e.message||e)));return}finally{running.delete(key),end(key)}let rows=res&&res.rows||[],log=res&&res.log||[],stopLine=log.find(l=>l.site==="(остановлен)");saveSearch(t0,d.kw,rows,log,{days:d.days,by:d.user,project:proj.name,added:d.adds});let text=(stopLine?"⏹ Поиск «"+esc(d.kw)+"» остановлен: "+esc(stopLine.note.replace(/^сбор остановлен человеком: /,""))+`.

`:"")+(rows.length?"✅ «<b>"+esc(d.kw)+"</b>» за "+daysWord(d.days)+": найдено <b>"+rows.length+"</b> (источников "+total+", "+dur(deps.now()-t0)+`).
Больше всех: `+esc(topSources2(rows)):"«<b>"+esc(d.kw)+"</b>» за "+daysWord(d.days)+": ничего не нашлось (источников "+total+", "+dur(deps.now()-t0)+").");rows.length&&(text+=`

`+itemLines(rows.slice(0,TOP)),rows.length>TOP&&(text+=`

…и ещё `+(rows.length-TOP)+" — в файле ниже.")),text.length>4e3&&(text=text.slice(0,3990)+"…"),await say(st,chatId,text),rows.length&&await sendDocument(st.token,chatId,"поиск "+fileSafe(d.kw)+" "+stamp(t0)+".csv","\uFEFF"+toCSV(rows),"Все "+rows.length+" — таблицей")}async function runJob(id,st,chatId,user){let r=await deps.runNow(id,"телеграм: "+user);r.code===200?await say(st,chatId,"✅ Сбор закончен: найдено "+(r.found!=null?r.found:"—")+", из них новых "+(r.added||0)+". Новое ушло сюда по ходу сбора."):await say(st,chatId,"⚠️ Сбор не состоялся: "+esc(r.error||"причина не названа"))}function busyText(){let r=snapshot()[0];return r?"Сейчас идёт сбор «"+esc(r.name)+"»"+(r.total?" ("+r.done+" из "+r.total+")":"")+". Дождитесь конца — ход видно в /status.":"Сейчас уже идёт сбор."}async function onCommand(id,st,proj,ev2,cmd,args){let chatId=ev2.chat.id;switch(cmd){case"start":case"help":return say(st,chatId,HELP);case"iam":{if(ev2.chat.type!=="private")return rotateOwnerCode(id),say(st,chatId,"Код владельца отправляют мне в <b>личные сообщения</b>, а не в общий чат. Этот код я уже заменил — новый смотрите в кабинете.");let uid2=String(ev2.from.id),f=iamFails.get(uid2)||{n:0,at:deps.now()};if(deps.now()-f.at>3600*1e3&&(f.n=0,f.at=deps.now()),f.n>=IAM_TRIES)return say(st,chatId,"Слишком много неверных кодов. Попробуйте через час.");if(!args||args!==String(st.ownerCode||""))return f.n++,iamFails.set(uid2,f),say(st,chatId,"Код не подошёл. Он в кабинете, в настройках телеграм-бота проекта.");let owners=(st.owners||[]).filter(o=>String(o.id)!==uid2).concat([{id:ev2.from.id,name:who(ev2.from)}]);return setTgState(id,{owners}),iamFails.delete(uid2),say(st,chatId,"Готово: вы владелец бота проекта «"+esc(proj.name)+"». Вам доступны /search, /run и /cancel — здесь и в общих чатах, где вы состоите. Администраторы этих чатов тоже смогут запускать сбор.")}case"status":{let mine=snapshot().filter(r=>r.id===String(id)||r.id===searchKey(id)),other=snapshot().filter(r=>r.id!==String(id)&&r.id!==searchKey(id)),L=[];for(let r of mine)L.push("⏳ Идёт: «"+esc(r.name)+"»"+(r.total?", "+r.done+" из "+r.total:"")+", найдено "+r.found+", "+dur(r.ms)+(r.stopping?" — останавливаю":"")+".");for(let r of other)L.push("Программа занята другим проектом: «"+esc(r.name)+"».");L.length||L.push("Сейчас сбор не идёт.");let last=(proj.runs||[])[0];return last&&L.push("Последний сбор: "+esc(new Date(last.at).toLocaleString("ru-RU",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}))+", найдено "+(last.found||0)+", новых "+(last.added||0)+"."),L.push("Расписание: "+scheduleText(proj.schedule)+"."),say(st,chatId,L.join(`
`))}case"today":{let today2=ymd(new Date(deps.now())),items=(proj.items||[]).filter(it=>it.date&&ymd(new Date(it.date))===today2).sort((a,b)=>String(b.date).localeCompare(String(a.date))),page=Math.max(1,parseInt(args,10)||1),from=(page-1)*TOP;if(!items.length)return say(st,chatId,"Сегодня в ленте проекта «"+esc(proj.name)+"» материалов пока нет.");let text="Сегодня — <b>"+items.length+"</b>. Больше всех: "+esc(topSources2(items))+`

`+itemLines(items.slice(from,from+TOP),from);return items.length>from+TOP&&(text+=`

Дальше: /today `+(page+1)),say(st,chatId,text.length>4e3?text.slice(0,3990)+"…":text)}case"find":{let terms=args.split(",").map(x=>x.trim().toLowerCase()).filter(Boolean);if(!terms.length)return say(st,chatId,"Напишите слово после команды: <code>/find КТЖ</code>. Ищу по уже собранной ленте, новый обход не делаю.");let items=(proj.items||[]).filter(it=>{let hay=(String(it.title||"")+" "+String(it.snippet||"")).toLowerCase();return terms.some(w=>hay.includes(w))}).sort((a,b)=>String(b.date||"").localeCompare(String(a.date||"")));if(!items.length)return say(st,chatId,"В собранной ленте «"+esc(args)+"» не встречается. Поискать заново по сайтам — /search.");let text="В собранной ленте — <b>"+items.length+`</b> (новый обход не делал):

`+itemLines(items.slice(0,TOP));return items.length>TOP&&(text+=`

…и ещё `+(items.length-TOP)+". Все — /csv"),say(st,chatId,text.length>4e3?text.slice(0,3990)+"…":text)}case"csv":{let items=proj.items||[];if(!items.length)return say(st,chatId,"Лента проекта пока пуста.");let r=await sendDocument(st.token,chatId,fileSafe(proj.name)+" "+stamp(deps.now())+".csv","\uFEFF"+toCSV(items),"Лента «"+proj.name+"»: "+items.length);return r.ok?null:say(st,chatId,"Файл не отправился: "+esc(r.err))}case"search":case"run":case"cancel":{let perm=await mayControl(st,ev2);if(!perm.ok)return say(st,chatId,perm.why);if(cmd==="cancel"){let asked=[String(id),searchKey(id)].filter(k=>askStop(k));return say(st,chatId,asked.length?"⏹ Останавливаю: дочитаю текущий источник и остановлюсь. Найденное сохранится.":"Сейчас по этому проекту ничего не собирается.")}if(cmd==="run"){let stop=deps.blocked();if(stop)return say(st,chatId,esc(stop));if(running.size)return say(st,chatId,busyText());let c=proj.config||{};return String(c.keyword||"").trim()?(await say(st,chatId,"▶ Запускаю сбор «"+esc(proj.name)+"»: "+sourceCount(c)+" источников. Находки пойдут сюда по ходу, итог пришлю в конце. Остановить: /cancel"),track(runJob(id,st,chatId,who(ev2.from)).catch(()=>{})),null):say(st,chatId,"У проекта не задан запрос — настройте его в кабинете.")}let d={step:"kw",kw:"",days:null,adds:{sites:[],facebook:[]},prompts:new Set,at:deps.now(),user:who(ev2.from)};dialogs.set(dKey(id,chatId,ev2.from.id),d);let a=parseSearchArgs(args);return a.kw&&(d.kw=a.kw.slice(0,200)),a.days&&(d.days=a.days),d.kw?d.days?(d.step="ready",askReady(st,ev2,d,proj)):(d.step="days",askDays(st,ev2,d)):askKw(st,ev2,d)}default:return null}}async function onDialogText(id,st,proj,ev2,d){let text=String(ev2.text||"").trim();if(d.at=deps.now(),d.step==="kw")return text?(d.kw=text.slice(0,200),d.step="days",askDays(st,ev2,d)):askKw(st,ev2,d);if(d.step==="days"){let n=parseDays(text);return n?(d.days=n,d.step="ready",askReady(st,ev2,d,proj)):say(st,ev2.chat.id,"Нужно число от 1 до "+MAX_DAYS+". Или нажмите кнопку.")}if(d.step==="ready"){if(!/^\+/.test(text))return say(st,ev2.chat.id,"Чтобы добавить источник, начните ответ с «+», например: <code>+ t.me/kanal</code>. Или нажмите «▶ Запустить».");let a=parseAdds(text),room=MAX_ADDS-d.adds.sites.length-d.adds.facebook.length,fresh2=[...a.sites.map(x=>["sites",x]),...a.facebook.map(x=>["facebook",x])].filter(([k,x])=>!d.adds[k].includes(x)),took=fresh2.slice(0,Math.max(0,room));for(let[k,x]of took)d.adds[k].push(x);let notes=[];return took.length&&notes.push("Добавил: "+esc(took.map(x=>x[1]).join(", "))+"."),a.bad.length&&notes.push("Не понял, что это за источник: "+esc(a.bad.join(", "))+". Нужен адрес сайта, t.me/канал или facebook.com/профиль."),fresh2.length>took.length&&notes.push("Больше "+MAX_ADDS+" источников к разовому поиску не добавляю — для такого лучше завести проект в кабинете."),!took.length&&!a.bad.length&&fresh2.length===took.length&&notes.push("Эти источники уже есть."),askReady(st,ev2,d,proj,notes.join(`
`))}return null}async function onButton(id,st,proj,ev2){let k=dKey(id,ev2.chat.id,ev2.from.id),d=dialogs.get(k);if(!d||!d.prompts.has(ev2.messageId)){let foreign=[...dialogs.values()].some(x=>x.prompts.has(ev2.messageId));await answerCb(st,ev2.id,foreign?"Это поиск другого участника. Начните свой: /search":"Этот поиск уже неактуален. Начните заново: /search");return}if(d.at=deps.now(),ev2.data.startsWith("sd:")){let n=parseDays(ev2.data.slice(3));if(!n||d.step!=="days"){await answerCb(st,ev2.id);return}return d.days=n,d.step="ready",await answerCb(st,ev2.id,daysWord(n)),await dropButtons(st,ev2.chat.id,ev2.messageId),askReady(st,ev2,d,proj)}if(ev2.data==="sx")return dialogs.delete(k),await answerCb(st,ev2.id,"Отменено"),await dropButtons(st,ev2.chat.id,ev2.messageId),say(st,ev2.chat.id,"Поиск отменён.");if(ev2.data==="sr"){if(d.step!=="ready"){await answerCb(st,ev2.id);return}let stop=deps.blocked();return stop?(await answerCb(st,ev2.id,"Не могу"),say(st,ev2.chat.id,esc(stop))):running.size?(await answerCb(st,ev2.id,"Занято"),say(st,ev2.chat.id,busyText()+" Потом нажмите «▶ Запустить» ещё раз.")):(dialogs.delete(k),await answerCb(st,ev2.id,"Запускаю"),await dropButtons(st,ev2.chat.id,ev2.messageId),track(searchJob(id,st,ev2.chat.id,d,proj).catch(()=>{})),null)}await answerCb(st,ev2.id)}async function handleEvents(id,events){let st=tgState(id),proj=getProject(id);if(!proj||!st.token||!st.enabled||!outbound(proj.config||{}).bot)return;let now=deps.now();for(let[k,d]of dialogs)now-d.at>DIALOG_TTL&&dialogs.delete(k);let botName=st.bot||"";if(!botName){let b=await checkBot(st.token);b.ok&&(botName=b.bot,setTgState(id,{bot:b.bot}))}let access=new Map,gate=async chat=>{let k=String(chat.id);return access.has(k)||access.set(k,await chatAccess(tgState(id),chat,now)),access.get(k)},stale=new Map;for(let ev2 of events)try{if(ev2.kind==="cb"){if(!(await gate(ev2.chat)).ok){await answerCb(st,ev2.id,"Закрытый бот");continue}await onButton(id,tgState(id),getProject(id),ev2);continue}let st1=tgState(id),p1=getProject(id),c=parseCommand(ev2.text,botName);if(c){if(c.cmd==="iam"){await onCommand(id,st1,p1,ev2,c.cmd,c.args),access.delete(String(ev2.chat.id));continue}let a=await gate(ev2.chat);if(!a.ok){c.cmd!=="stop"&&await say(st1,ev2.chat.id,CLOSED[a.why]||CLOSED.stranger);continue}if(ev2.date&&now-ev2.date*1e3>STALE_MS&&c.cmd!=="start"&&c.cmd!=="help"){(!stale.has(ev2.chat.id)||ev2.date<stale.get(ev2.chat.id))&&stale.set(ev2.chat.id,ev2.date);continue}await onCommand(id,st1,p1,ev2,c.cmd,c.args);continue}let d=ev2.from&&dialogs.get(dKey(id,ev2.chat.id,ev2.from.id));d&&(ev2.replyTo&&d.prompts.has(ev2.replyTo)||ev2.chat.type==="private")&&(await gate(ev2.chat)).ok&&await onDialogText(id,st1,p1,ev2,d)}catch{}for(let[chatId,date]of stale)await say(st,chatId,"Видел команду от "+hhmm3(date)+", но программа в это время не работала (компьютер был выключен или спал). Повторите, если ещё нужно.")}function startBotLoop(){setUpdateSink(handleEvents),setInterval(()=>{for(let meta of listProjects()){let st=tgState(meta.id);if(!st.enabled||!st.token)continue;let p=getProject(meta.id);!p||!outbound(p.config||{}).bot||pullFor(meta.id).catch(()=>{})}},POLL_MS)}var import_node_fs11,import_node_path14,MAX_DAYS,DAY_BUTTONS,TOP,MAX_ADDS,STALE_MS,DIALOG_TTL,IAM_TRIES,SEARCHES_DIR,KEEP_SEARCHES,deps,jobs,track,sourceCount,who,isGroup,memberStatus2,answerCb,dropButtons,hhmm3,dur,daysWord,cut,CLOSED,HELP,dialogs,dKey,iamFails,searchKey,fileSafe,stamp,POLL_MS,init_tg_commands=__esm({"desktop/tg-commands.js"(){import_node_fs11=require("node:fs"),import_node_path14=require("node:path");init_store();init_telegram_bot();init_runner();init_locks();init_run_state();init_license();init_outbound();init_csv();init_run_now();init_fb_parse();init_channels();init_dates();init_paths();MAX_DAYS=30,DAY_BUTTONS=[1,3,7,14,30],TOP=10,MAX_ADDS=10,STALE_MS=300*1e3,DIALOG_TTL=900*1e3,IAM_TRIES=5,SEARCHES_DIR=(0,import_node_path14.join)(DATA_ROOT,"searches"),KEEP_SEARCHES=30,deps={runSearch:(project,hooks)=>runProject(project,null,hooks),runNow,blocked:()=>blockedReason(),now:()=>Date.now()},jobs=new Set,track=p=>(jobs.add(p),p.finally(()=>jobs.delete(p)),p);sourceCount=c=>(c.sites||[]).length+(c.facebook||[]).length+(c.youtube&&c.youtube.enabled?1:0),who=from=>[from.first_name,from.last_name].filter(Boolean).join(" ")||(from.username?"@"+from.username:String(from.id||"кто-то")),isGroup=chat=>chat&&(chat.type==="group"||chat.type==="supergroup"),memberStatus2=(token,chatId,userId)=>memberStatus(token,chatId,userId,deps.now());answerCb=(st,id,text="")=>tgApi(st.token,"answerCallbackQuery",{callback_query_id:id,text}),dropButtons=(st,chatId,messageId)=>tgApi(st.token,"editMessageReplyMarkup",{chat_id:chatId,message_id:messageId,reply_markup:{inline_keyboard:[]}}),hhmm3=sec=>new Date(sec*1e3).toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"}),dur=ms2=>{let s=Math.round(ms2/1e3);return s>=60?Math.floor(s/60)+" мин "+s%60+" с":s+" с"},daysWord=n=>n+" "+(n%10===1&&n%100!==11?"день":n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?"дня":"дней"),cut=(s,n)=>(s=String(s||"").replace(/\s+/g," ").trim(),s.length>n?s.slice(0,n-1)+"…":s);CLOSED={"no-owner":"Это закрытый бот мониторинга. Владелец ещё не привязан, поэтому я пока никому не отвечаю и ничего не присылаю. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета.",stranger:"Это закрытый бот мониторинга. Я отвечаю только владельцу и в общих чатах, где он состоит.","no-owner-here":"В этом чате нет владельца бота — здесь я не отвечаю и ничего не присылаю."},HELP=["<b>Что я умею</b>","","/status — идёт ли сейчас сбор и когда был последний","/today — что нашлось сегодня","/find слово — поиск по уже собранному (без нового обхода)","/csv — вся лента проекта файлом","","<b>Для владельца и администраторов чата</b>","/search — разовый поиск: слово → за сколько дней (до 30) → можно добавить источник через «+» → запуск","/run — собрать по проекту прямо сейчас","/cancel — остановить сбор (найденное сохранится)","","Отписаться от рассылки — /stop."].join(`
`),dialogs=new Map,dKey=(id,chatId,userId)=>id+"|"+chatId+"|"+userId,iamFails=new Map;searchKey=id=>"tgsearch-"+id,fileSafe=s=>String(s||"").replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g," ").trim().slice(0,40)||"поиск",stamp=t=>{let d=new Date(t),p2=n=>String(n).padStart(2,"0");return ymd(d)+" "+p2(d.getHours())+"-"+p2(d.getMinutes())};POLL_MS=4e3}});function writeJson2(file,obj){ensureDir2((0,import_node_path15.dirname)(file));let tmp=file+".tmp";(0,import_node_fs12.writeFileSync)(tmp,JSON.stringify(obj)),(0,import_node_fs12.renameSync)(tmp,file)}function readJson3(file,fallback){try{return(0,import_node_fs12.existsSync)(file)?JSON.parse((0,import_node_fs12.readFileSync)(file,"utf8")):fallback}catch{return fallback}}function state(){return cache3||(cache3=Object.assign(blank(),readJson3(MAIN(),{})||{})),cache3}function save4(){writeJson2(MAIN(),state())}function saveState(){save4()}function unlock(code){return String(code||"").trim()!==UNLOCK_CODE?{ok:!1,error:"код не подошёл"}:(state().unlocked=!0,save4(),{ok:!0})}function lock(){return state().unlocked=!1,save4(),{ok:!0}}function setSchedule(s){let mode=s&&s.mode==="minutes"?"minutes":"off",every=Math.max(MIN_EVERY_MIN2,Math.min(1440,+(s&&s.everyMinutes)||30));return state().schedule={mode,everyMinutes:every},save4(),state().schedule}function setNotify(n){return state().notify=Object.assign({},state().notify,n||{}),save4(),state().notify}function addObject(link){let st=state();if(!link||!link.id)return{ok:!1,error:"это не ссылка на карточку фирмы в 2ГИС"};if(st.objects.some(o2=>o2.id===link.id))return{ok:!1,error:"эта фирма уже отслеживается"};if(st.objects.length>=MAX_OBJECTS)return{ok:!1,error:"больше "+MAX_OBJECTS+" объектов модуль не ведёт"};let o={id:link.id,link,name:"",address:"",category:"",addedAt:Date.now(),watchFrom:Date.now(),harvest:{done:!1,offset:0,total:null},trustVer:TRUST_VER,card:null,lastCheck:0,lastOk:0,err:""};return st.objects.push(o),save4(),{ok:!0,object:o}}function updateObject(id,patch){let o=getObject(id);return o?(Object.assign(o,patch||{}),save4(),o):null}function removeObject(id){let st=state(),n=st.objects.length;st.objects=st.objects.filter(o=>o.id!==String(id)),st.ai&&delete st.ai[id],save4();try{(0,import_node_fs12.rmSync)(objDir(id),{recursive:!0,force:!0})}catch{}return st.objects.length<n}function addHistory(id,card,now=Date.now()){if(!card)return!1;let h=historyOf(id),last=h[h.length-1];return last&&last.rating===card.rating&&last.reviewsCount===card.reviewsCount&&last.ratingsCount===card.ratingsCount&&now-last.at<6*3600*1e3?!1:(h.push({at:now,rating:card.rating,reviewsCount:card.reviewsCount,ratingsCount:card.ratingsCount}),writeJson2((0,import_node_path15.join)(objDir(id),"history.json"),h.slice(-MAX_HISTORY)),!0)}function addEvents(id,list){if(!list||!list.length)return 0;let ev2=eventsOf(id),have=new Set(ev2.map(e=>e.key)),n=0;for(let e of list)have.has(e.key)||(ev2.push(e),have.add(e.key),n++);return saveEvents(id,ev2),n}function markSent(id,keys){let set2=new Set(keys);if(!set2.size)return 0;let ev2=eventsOf(id),n=0;for(let e of ev2)set2.has(e.key)&&!e.sent&&(e.sent=Date.now(),n++);return saveEvents(id,ev2),n}function diffReviews(known,fresh2,{watchFrom=0,now=Date.now(),seenMark=0}={}){let merged=Object.assign({},known||{}),events=[];for(let r of fresh2||[]){if(!r||!r.id)continue;let old=merged[r.id];if(!old){merged[r.id]={...r,seenAt:now,...seenMark?{seenIn:seenMark}:{}};let c=ms(r.created);c!=null&&c>=watchFrom&&events.push(ev("new",r,now));continue}let next={...old,...r,seenAt:old.seenAt||now,...seenMark?{seenIn:seenMark}:{}};delete next.gone,old.rating!=null&&r.rating!=null&&old.rating!==r.rating?events.push(ev("rating",r,now,{from:old.rating})):r.text!==old.text&&(r.edited||"")!==(old.edited||"")&&events.push(ev("edited",r,now,{prevText:old.text})),!old.answer&&r.answer&&events.push(ev("answer",r,now)),old.rated!==!1&&r.rated===!1&&events.push(ev("unrated",r,now)),merged[r.id]=next}return{merged,events}}function ev(kind,r,now,extra={}){let ver=kind==="rating"?r.rating:kind==="edited"?r.edited||"":kind==="answer"&&r.answer&&r.answer.date||"";return{key:kind+":"+r.id+":"+ver,kind,at:now,review:{id:r.id,rating:r.rating,text:r.text,author:r.author,created:r.created,edited:r.edited,answer:r.answer,rated:r.rated,hideReason:r.hideReason,verified:r.verified,trust:r.trust},...extra}}function diffCard(prev,card,now=Date.now()){if(!prev||!card)return[];let out=[],dRev=(card.reviewsCount??0)-(prev.reviewsCount??0),dRat=(card.ratingsCount??0)-(prev.ratingsCount??0),ratingMoved=prev.rating!=null&&card.rating!=null&&prev.rating!==card.rating,silent=dRat-Math.max(0,dRev);return(ratingMoved||silent>0||dRev<0)&&out.push({key:"card:"+now,kind:"card",at:now,from:{rating:prev.rating,reviewsCount:prev.reviewsCount,ratingsCount:prev.ratingsCount},to:{rating:card.rating,reviewsCount:card.reviewsCount,ratingsCount:card.ratingsCount},silentVotes:silent>0?silent:0,lostReviews:dRev<0?-dRev:0}),out}function setTgState2(patch){let st=state();return st.tg=Object.assign({},st.tg||{},patch||{}),st.tg.token&&!st.tg.ownerCode&&(st.tg.ownerCode=String((0,import_node_crypto6.randomInt)(1e5,1e6))),save4(),st.tg}function tgPublic2(){let t=tgState2();return{enabled:!!t.enabled,hasToken:!!t.token,bot:t.bot||"",borrowed:t.borrowed||"",chats:(t.chats||[]).map(c=>({id:c.id,name:c.name||"",access:c.access||""})),ownerCode:t.ownerCode||"",owners:(t.owners||[]).map(o=>o.name||String(o.id)),err:t.err||"",sentTotal:t.sentTotal||0}}function setAiReport2(id,report){let st=state();return st.ai=st.ai||{},st.ai[id]=report,save4(),report}function publicState(){let st=state();return{unlocked:!!st.unlocked,schedule:st.schedule,notify:st.notify,max:MAX_OBJECTS,minEvery:MIN_EVERY_MIN2,everyChoices:EVERY_CHOICES,objects:st.objects.map(o=>({id:o.id,url:o.link&&o.link.url,name:o.name,address:o.address,category:o.category,card:o.card,lastCheck:o.lastCheck,lastOk:o.lastOk,err:o.err,harvest:o.harvest,addedAt:o.addedAt,unsent:unsentEvents(o.id).length,notify:o.notify||null})),tg:tgPublic2()}}var import_node_fs12,import_node_path15,import_node_crypto6,MAX_OBJECTS,UNLOCK_CODE,TRUST_VER,MIN_EVERY_MIN2,EVERY_CHOICES,MAX_EVENTS,MAX_HISTORY,ROOT,MAIN,objDir,ensureDir2,cache3,blank,isUnlocked,listObjects,getObject,reviewsOf,liveReviews,saveReviews,historyOf,eventsOf,saveEvents,unsentEvents,ms,tgState2,aiReport,init_places=__esm({"desktop/places.js"(){import_node_fs12=require("node:fs"),import_node_path15=require("node:path"),import_node_crypto6=require("node:crypto");init_paths();MAX_OBJECTS=10,UNLOCK_CODE="1979",TRUST_VER=1,MIN_EVERY_MIN2=20,EVERY_CHOICES=[20,30,60,120,360,720],MAX_EVENTS=1e3,MAX_HISTORY=5e3,ROOT=()=>(0,import_node_path15.join)(DATA_ROOT,"places"),MAIN=()=>(0,import_node_path15.join)(ROOT(),"places.json"),objDir=id=>(0,import_node_path15.join)(ROOT(),String(id).replace(/[^0-9A-Za-z_-]/g,"")),ensureDir2=d=>{try{(0,import_node_fs12.mkdirSync)(d,{recursive:!0})}catch{}};cache3=null,blank=()=>({unlocked:!1,schedule:{mode:"off",everyMinutes:30},objects:[],tg:{},ai:{},notify:{answers:!0}});isUnlocked=()=>!!state().unlocked;listObjects=()=>state().objects.slice(),getObject=id=>state().objects.find(o=>o.id===String(id))||null;reviewsOf=id=>readJson3((0,import_node_path15.join)(objDir(id),"reviews.json"),{})||{},liveReviews=id=>Object.values(reviewsOf(id)).filter(r=>r&&!r.gone),saveReviews=(id,map)=>writeJson2((0,import_node_path15.join)(objDir(id),"reviews.json"),map),historyOf=id=>readJson3((0,import_node_path15.join)(objDir(id),"history.json"),[])||[],eventsOf=id=>readJson3((0,import_node_path15.join)(objDir(id),"events.json"),[])||[],saveEvents=(id,list)=>writeJson2((0,import_node_path15.join)(objDir(id),"events.json"),list.slice(-MAX_EVENTS));unsentEvents=id=>eventsOf(id).filter(e=>!e.sent);ms=v=>{let t=Date.parse(v||"");return Number.isFinite(t)?t:null};tgState2=()=>state().tg||{};aiReport=id=>(state().ai||{})[id]||null}});function parseFirmLink(text){let s=String(text||"").trim();if(!s)return null;let short2=s.match(/(?:https?:\/\/)?(go\.2gis\.com\/[A-Za-z0-9_-]+)/i);if(short2)return{short:"https://"+short2[1]};let m=s.match(/(?:https?:\/\/)?((?:[a-z]+\.)?2gis\.([a-z]{2,3}))((?:\/[a-z0-9_-]+)*?)\/firm\/(\d{6,20})/i);if(!m)return null;let host2=m[1].toLowerCase().replace(/^www\./,""),tld=m[2].toLowerCase(),city=(m[3]||"").split("/").filter(x=>x&&!/^(search|geo|tab|branches)$/i.test(x)).pop()||"",id=m[4];return{id,host:host2,city,locale:localeOf(tld),url:"https://"+host2+(city?"/"+city:"")+"/firm/"+id}}function localeOf(tld){return{kz:"ru_KZ",ru:"ru_RU",kg:"ru_KG",uz:"ru_UZ",by:"ru_BY",am:"ru_AM",az:"ru_AZ",ge:"ru_GE"}[tld]||"ru_KZ"}function unescapeJs(s){let out="";for(let i=0;i<s.length;i++){let c=s[i];if(c!=="\\"){out+=c;continue}let n=s[++i];if(n===void 0)break;n==="n"?out+=`
`:n==="r"?out+="\r":n==="t"?out+="	":n==="b"?out+="\b":n==="f"?out+="\f":n==="v"?out+="\v":n==="0"&&!/[0-9]/.test(s[i+1]||"")?out+="\0":n==="x"&&/^[0-9a-fA-F]{2}$/.test(s.slice(i+1,i+3))?(out+=String.fromCharCode(parseInt(s.slice(i+1,i+3),16)),i+=2):n==="u"&&/^[0-9a-fA-F]{4}$/.test(s.slice(i+1,i+5))?(out+=String.fromCharCode(parseInt(s.slice(i+1,i+5),16)),i+=4):n==="\r"&&s[i+1]===`
`?i++:n===`
`||n==="\r"||(out+=n)}return out}function jsonVar(html,name){let h=String(html||""),m=new RegExp("var\\s+"+name.replace(/[$]/g,"\\$")+"\\s*=\\s*JSON\\.parse\\('").exec(h);if(!m)return null;let start=m.index+m[0].length,k=start;for(;k<h.length;){if(h[k]==="\\"){k+=2;continue}if(h[k]==="'")break;k++}if(k>=h.length)return null;try{return JSON.parse(unescapeJs(h.slice(start,k)))}catch{return null}}function findProfile(state2,id){let direct=state2&&state2.data&&state2.data.entity&&state2.data.entity.profile&&state2.data.entity.profile[id]&&state2.data.entity.profile[id].data;if(direct&&String(direct.id||"").split("_")[0]===id)return direct;let hit=null,walk=(o,d)=>{if(!(hit||!o||typeof o!="object"||d>25)){if(String(o.id||"").split("_")[0]===id&&o.reviews&&typeof o.reviews=="object"&&"general_rating"in o.reviews){hit=o;return}for(let k in o)walk(o[k],d+1)}};return walk(state2,0),hit}function blockedPage(finalUrl,html){let u=String(finalUrl||"");if(/captcha\.2gis/i.test(u))return"капча 2ГИС (проверка «вы не робот»)";if(/\/museum\b/i.test(u))return"2ГИС посчитал браузер устаревшим (страница «музей»)";let h=String(html||"").slice(0,2e4);return/captcha/i.test(h)&&!/initialState/.test(h)?"капча 2ГИС (проверка «вы не робот»)":""}function parseFirmPage(html,id,finalUrl=""){let block=blockedPage(finalUrl,html);if(block)return{ok:!1,why:block};let cfg=jsonVar(html,"__customcfg"),st=jsonVar(html,"initialState");if(!st)return{ok:!1,why:"на странице нет данных карточки — 2ГИС поменял устройство страницы или не отдал её целиком"};let p=findProfile(st,String(id));if(!p)return{ok:!1,why:"на странице нет карточки с номером "+id+" — возможно, фирма закрыта или ссылка ведёт на другую"};let r=p.reviews||{},title=(String(html).match(/<title>([^<]*)<\/title>/)||[])[1]||"",rubric=(p.rubrics||[]).find(x=>x&&x.kind==="primary")||(p.rubrics||[])[0];return{ok:!0,id:String(id),name:String(p.name||p.name_ex&&p.name_ex.primary||"").trim(),address:String(p.address_name||"").trim(),category:String(rubric&&rubric.name||"").trim(),title:title.replace(/\s+—\s*2ГИС\s*$/,"").trim(),rating:num3(r.general_rating),reviewsCount:num3(r.general_review_count),ratingsCount:num3(r.general_review_count_with_stars),orgId:p.org?String(p.org.id||""):"",orgName:p.org?String(p.org.name||""):"",branchCount:p.org?num3(p.org.branch_count):null,orgRating:num3(r.org_rating),reviewKey:cfg&&cfg.reviewApiKey?String(cfg.reviewApiKey):"",reviewApi:cfg&&cfg.reviewApi3Url?String(cfg.reviewApi3Url):"https://public-api.reviews.2gis.com/3.0/"}}function reviewsUrl({api,id,key,locale="ru_KZ",offset=0,limit=PAGE}){let base=String(api||"https://public-api.reviews.2gis.com/3.0/").replace(/\/?$/,"/"),q=new URLSearchParams({limit:String(Math.min(PAGE,Math.max(1,limit))),offset:String(Math.max(0,offset)),is_advertiser:"false",fields:"meta.branch_rating,meta.branch_reviews_count,meta.total_count,reviews.hiding_reason,reviews.trust_factors",sort_by:"date_edited",key:String(key||""),locale});return base+"branches/"+encodeURIComponent(String(id))+"/reviews?"+q.toString()}function reviewUrl({api,key,locale="ru_KZ",reviewId}){let base=String(api||"https://public-api.reviews.2gis.com/3.0/").replace(/\/?$/,"/"),q=new URLSearchParams({fields:"reviews.hiding_reason,reviews.trust_factors",key:String(key||""),locale});return base+"reviews/"+encodeURIComponent(String(reviewId))+"?"+q.toString()}function parseOneReview(body,status=200){let j=body;if(typeof body=="string")try{j=JSON.parse(body)}catch{return{ok:!1,why:"2ГИС ответил не данными"}}if(!j||typeof j!="object")return{ok:!1,why:"2ГИС ответил пустотой"};if(j.error_code==="REVIEW_NOT_FOUND")return{ok:!0,notFound:!0};if(j.error_code||j.code&&j.code>=400||status>=400)return{ok:!1,why:"2ГИС отказал: "+(j.message||j.error_code||j.code||"HTTP "+status)};let r=normReview(j.review);return r?{ok:!0,review:r,branch:j.review&&j.review.object?String(j.review.object.id||""):""}:{ok:!1,why:"2ГИС ответил без отзыва"}}function normReview(r){if(!r||r.id==null)return null;let ans=r.official_answer&&r.official_answer.text?{text:String(r.official_answer.text),date:iso(r.official_answer.date_created)}:null,u=r.user||{};return{id:String(r.id),created:iso(r.date_created),edited:iso(r.date_edited),rating:num3(r.rating),text:String(r.text||"").trim(),author:String(u.name||[u.first_name,u.last_name].filter(Boolean).join(" ")||"").trim(),authorReviews:num3(u.reviews_count),answer:ans,rated:r.is_rated!==!1,hidden:!!r.is_hidden,hideReason:r.is_rated===!1||r.is_hidden?String(r.hiding_reason||"").trim():"",likes:num3(r.likes_count)||0,comments:num3(r.comments_count)||0,photos:Array.isArray(r.media)?r.media.length:0,provider:String(r.provider||"2gis"),...trustOf(r)}}function trustOf(r){let t=r&&r.trust_factors,f=t&&Array.isArray(t.factors)?t.factors:[];if(!!!(f.length||t&&t.trust_info&&t.trust_info.confirmed_caption))return{verified:!1};let visits=f.map(x=>num3(x&&x.visits_count)).filter(Number.isFinite);return{verified:!0,trust:String(t.trust_info&&t.trust_info.caption||f[0]&&f[0].caption||"").trim(),visits:visits.length?Math.max(...visits):null}}function parseReviews(body){let j=body;if(typeof body=="string")try{j=JSON.parse(body)}catch{return{ok:!1,why:"2ГИС ответил не данными"}}if(!j||typeof j!="object")return{ok:!1,why:"2ГИС ответил пустотой"};if(j.error_code||j.code&&j.code>=400)return{ok:!1,why:j.error_code==="FORBIDDEN"?"ключ к отзывам не подошёл (2ГИС его сменил)":"2ГИС отказал: "+(j.message||j.error_code||j.code),forbidden:j.error_code==="FORBIDDEN"||j.code===403};let m=j.meta||{};return{ok:!0,meta:{rating:num3(m.branch_rating),count:num3(m.branch_reviews_count),total:num3(m.total_count),next:!!m.next_link},reviews:(Array.isArray(j.reviews)?j.reviews:[]).map(normReview).filter(Boolean)}}var reviewsPageUrl,num3,PAGE,iso,init_gis_parse=__esm({"desktop/gis-parse.js"(){reviewsPageUrl=link=>link&&link.url?link.url+"/tab/reviews":"";num3=v=>typeof v=="number"&&Number.isFinite(v)?v:v!=null&&v!==""&&Number.isFinite(+v)?+v:null;PAGE=50;iso=v=>{let t=Date.parse(v);return Number.isFinite(t)?new Date(t).toISOString():null}}});function replyHours(r){if(!r||!r.answer||!r.answer.date||!r.created)return null;let d=Date.parse(r.answer.date)-Date.parse(r.created);return Number.isFinite(d)?Math.max(0,d)/H:null}function median(xs){let a=xs.filter(Number.isFinite).sort((x,y)=>x-y);if(!a.length)return null;let m=a.length>>1;return a.length%2?a[m]:(a[m-1]+a[m])/2}function sum(list){let ans=list.filter(r=>r.answer),hrs=ans.map(replyHours).filter(Number.isFinite);return{count:list.length,answered:ans.length,share:list.length?Math.round(ans.length/list.length*100):null,medianH:median(hrs),in24:hrs.filter(h=>h<=24).length,in72:hrs.filter(h=>h<=72).length}}function periodBuckets(days,{now=Date.now(),first=null}={}){days=Math.max(0,Math.floor(+days||0));let today2=new Date(now);today2.setHours(12,0,0,0);let tk=ymd(today2),mk2=tk.slice(0,7),list=[],kind;if(days&&days<=31){kind="day";for(let i=days-1;i>=0;i--){let t=new Date(today2);t.setDate(today2.getDate()-i);let k=ymd(t);list.push({from:k,to:k})}}else if(days&&days<=120){kind="week";let n=Math.ceil(days/7);for(let i=n-1;i>=0;i--){let e=new Date(today2);e.setDate(today2.getDate()-i*7);let b=new Date(e);b.setDate(e.getDate()-6),list.push({from:ymd(b),to:ymd(e)})}}else if(days){kind="month";let n=Math.max(1,Math.round(days/30.4));for(let k=addMonth(mk2,-(n-1));k<=mk2;k=addMonth(k,1))list.push({from:k+"-01",to:lastDay(k)})}else{let f=first!=null&&Number.isFinite(+first)?ymd(new Date(+first)).slice(0,7):mk2;if((+mk2.slice(0,4)-+f.slice(0,4))*12+(+mk2.slice(5,7)-+f.slice(5,7))+1>24){kind="year";for(let y=+f.slice(0,4);y<=+mk2.slice(0,4);y++)list.push({from:y+"-01-01",to:y+"-12-31"})}else{kind="month";for(let k=f;k<=mk2;k=addMonth(k,1))list.push({from:k+"-01",to:lastDay(k)})}}let since=days?(()=>{let t=ld(list[0].from);return t.setHours(0,0,0,0),t.getTime()})():-1/0;return{kind,since,list}}function bucketize(list,reviews){let out=list.map(b=>({...b,items:[]}));for(let r of reviews){if(!r.created)continue;let d=ymd(new Date(r.created));for(let i=out.length-1;i>=0;i--)if(out[i].from<=d&&d<=out[i].to){out[i].items.push(r);break}}return out}function points(neg,list){return bucketize(list,neg).map(b=>{let s=sum(b.items);return{from:b.from,to:b.to,neg:s.count,answered:s.answered,medianH:s.medianH}})}function timeline(reviews,{now=Date.now(),days=0}={}){let rated2=(reviews||[]).filter(r=>r&&r.rated!==!1&&r.rating>=1&&r.rating<=5),pb=periodBuckets(days,{now,first:firstMs(rated2)}),inP=rated2.filter(r=>Date.parse(r.created||"")>=pb.since),pts=bucketize(pb.list,inP).map(b=>({from:b.from,to:b.to,count:b.items.length,good:b.items.filter(r=>r.rating>=4).length,mid:b.items.filter(r=>r.rating===3).length,bad:b.items.filter(r=>r.rating<=2).length,sum:b.items.reduce((a,r)=>a+r.rating,0)}));return{days:Math.max(0,Math.floor(+days||0)),kind:pb.kind,points:pts}}function reaction(reviews,{now=Date.now(),days=0,negMax=3}={}){negMax=[2,3,4].includes(+negMax)?+negMax:3,days=Math.max(0,Math.floor(+days||0));let rated2=(reviews||[]).filter(r=>r&&r.rating>=1&&r.rating<=5),pb=periodBuckets(days,{now,first:firstMs(rated2)}),all=rated2.filter(r=>Date.parse(r.created||"")>=pb.since),neg=all.filter(r=>r.rating<=negMax),byStars=[{key:"5",...sum(all.filter(r=>r.rating===5))},{key:"4",...sum(all.filter(r=>r.rating===4))},{key:"3",...sum(all.filter(r=>r.rating===3))},{key:"1–2",...sum(all.filter(r=>r.rating<=2))}],verified={yes:sum(neg.filter(r=>r.verified===!0)),no:sum(neg.filter(r=>r.verified===!1)),unknown:neg.filter(r=>typeof r.verified!="boolean").length},waiting=neg.filter(r=>!r.answer).sort((a,b)=>String(b.created||"").localeCompare(String(a.created||""))),answered=neg.filter(r=>r.answer&&r.answer.date).sort((a,b)=>String(b.answer.date).localeCompare(String(a.answer.date)));return{days,negMax,kind:pb.kind,total:{...sum(all)},neg:{...sum(neg),waiting:waiting.length,waitingOld:waiting.filter(r=>now-Date.parse(r.created||"")>72*H).length},byStars,verified,points:points(neg,pb.list),recent:answered.slice(0,RECENT_MAX).map(r=>view(r,now)),recentTotal:answered.length,waitingList:waiting.slice(0,WAIT_MAX).map(r=>view(r,now)),waitingCut:waiting.length>WAIT_MAX}}var H,monthKey,addMonth,ld,lastDay,firstMs,WAIT_MAX,RECENT_MAX,short,view,init_places_reaction=__esm({"desktop/places-reaction.js"(){init_dates();H=36e5;monthKey=d=>ymd(d).slice(0,7),addMonth=(k,n)=>{let[y,m]=k.split("-").map(Number),t=new Date(y,m-1+n,15,12);return monthKey(t)},ld=s=>{let[y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d,12)},lastDay=mk2=>ymd(new Date(+mk2.slice(0,4),+mk2.slice(5,7),0,12));firstMs=list=>{let m=1/0;for(let r of list){let t=Date.parse(r.created||"");t<m&&(m=t)}return Number.isFinite(m)?m:null};WAIT_MAX=300,RECENT_MAX=8,short=(t,n)=>(t=String(t||"").trim(),t.length>n?t.slice(0,n-1).trimEnd()+"…":t),view=(r,now)=>({id:r.id,rating:r.rating,author:r.author||"",created:r.created,verified:r.verified,text:short(r.text,400),answer:r.answer?{text:short(r.answer.text,700),date:r.answer.date}:null,replyH:replyHours(r),ageH:r.created?Math.max(0,now-Date.parse(r.created))/H:null})}});function objNotify(o,moduleNotify={}){let n=o&&o.notify||{},days=REMIND_DAYS.includes(+n.remindDays)?+n.remindDays:3;return{all:n.all!==!1,answers:n.answers!==void 0?n.answers!==!1:moduleNotify.answers!==!1,spikes:n.spikes!==!1,remind:n.remind===!0,remindDays:days,remindNeg:+n.remindNeg==2?2:3,remindSince:+n.remindSince||0}}function patchNotify(prev,patch,now=Date.now()){let cur=Object.assign({},prev||{}),p=patch||{};for(let k of["all","answers","spikes"])p[k]!==void 0&&(cur[k]=!!p[k]);return p.remindDays!==void 0&&REMIND_DAYS.includes(+p.remindDays)&&(cur.remindDays=+p.remindDays),p.remindNeg!==void 0&&(cur.remindNeg=+p.remindNeg==2?2:3),p.remind!==void 0&&(p.remind&&cur.remind!==!0&&(cur.remindSince=now),cur.remind=!!p.remind),cur}function remindCandidates(reviews,{now=Date.now(),days=3,negMax=3,since=0}={}){if(!since)return[];let out=[];for(let r of scored(reviews)){if(r.rating>negMax||r.answer)continue;let c=Date.parse(r.created||"");if(!Number.isFinite(c))continue;let mark=c+days*D;mark<=now&&mark>=since&&out.push(r)}return out.sort((a,b)=>String(a.created).localeCompare(String(b.created)))}function spikeEvents(reviews,{now=Date.now(),ready=!0,watchFrom=0}={}){if(!ready)return[];let today2=ymd(new Date(now)),edge=shiftDay(today2,-1),wf=watchFrom?ymd(new Date(watchFrom)):"";return spikes(reviews,{now,days:7,ready}).episodes.filter(e=>e.to>=edge&&(!wf||e.to>=wf)).map(e=>({key:"spike:"+e.from,kind:"spike",at:now,episode:e}))}function poissonTail(k,lambda){if(k<=0)return 1;if(!(lambda>0))return 0;let logTerm=-lambda+k*Math.log(lambda)-logFact(k),sum2=0;for(let i=k;i<k+1e3;i++){let t=Math.exp(logTerm);if(sum2+=t,i>lambda&&t<sum2*1e-12)break;logTerm+=Math.log(lambda)-Math.log(i+1)}return Math.min(1,sum2)}function logFact(n){let s=0;for(let i=2;i<=n;i++)s+=Math.log(i);return s}function dailyCounts(reviews){let by=new Map;for(let r of scored(reviews)){let d=dayOf2(r);d&&by.set(d,(by.get(d)||0)+1)}return by}function spikes(reviews,{now=Date.now(),days=365,ready=!0}={}){let list=scored(reviews);if(!ready||!list.length)return{ready:!!ready&&list.length>0,episodes:[]};let by=dailyCounts(list),daysSorted=[...by.keys()].sort(),first=daysSorted[0],today2=ymd(new Date(now)),from=days>0?shiftDay(today2,-(days-1)):first,flagged=[];for(let d of daysSorted){if(d<from||d>today2)continue;let k=by.get(d);if(k<SPIKE_MIN)continue;let hist=Math.min(SPIKE_BASE_DAYS,daysBetween(first,d));if(hist<SPIKE_MIN_HISTORY)continue;let lo=shiftDay(d,-hist),n=0;for(let x of daysSorted){if(x>=d)break;x>=lo&&(n+=by.get(x))}let lambda=(n+.5)/hist,p=poissonTail(k,lambda);p<SPIKE_P&&flagged.push({day:d,count:k,usual:lambda,p})}let eps=[];for(let f of flagged){let last=eps[eps.length-1];last&&shiftDay(last.to,1)===f.day?(last.to=f.day,last.days.push(f)):eps.push({from:f.day,to:f.day,days:[f]})}let before=(to,from2)=>list.filter(r=>{let d=dayOf2(r);return d<to&&(!from2||d>=from2)});return{ready:!0,episodes:eps.map(e=>{let inEp=list.filter(r=>{let d=dayOf2(r);return d>=e.from&&d<=e.to}),base=before(e.from,shiftDay(e.from,-365));base.length<20&&(base=before(e.from));let usual=base.length>=SPIKE_MIN?signalsOf(base):null,s=signalsOf(inEp),kind=s.good*2>s.count?"pos":s.bad*2>s.count?"neg":"mixed";return{from:e.from,to:e.to,count:inEp.length,usualPerDay:+e.days[0].usual.toFixed(2),peak:Math.max(...e.days.map(x=>x.count)),kind,...s,usualShares:usual}}).reverse()}}function signalsOf(list){let knownV=list.filter(r=>typeof r.verified=="boolean"),knownA=list.filter(r=>Number.isFinite(+r.authorReviews)&&+r.authorReviews>0),good=list.filter(r=>r.rating>=4).length,bad=list.filter(r=>r.rating<=2).length;return{count:list.length,good,mid:list.length-good-bad,bad,avg:avg(list),goodShare:share(good,list.length),badShare:share(bad,list.length),verified:knownV.filter(r=>r.verified).length,verifiedKnown:knownV.length,verifiedShare:share(knownV.filter(r=>r.verified).length,knownV.length),firstTime:knownA.filter(r=>+r.authorReviews==1).length,authorsKnown:knownA.length,firstTimeShare:share(knownA.filter(r=>+r.authorReviews==1).length,knownA.length),unrated:list.filter(r=>r.rated===!1).length}}function silentDaily(history){let lastOfDay=new Map;for(let h of history||[])!h||!Number.isFinite(+h.ratingsCount)||!Number.isFinite(+h.reviewsCount)||lastOfDay.set(ymd(new Date(h.at)),+h.ratingsCount-+h.reviewsCount);let keys=[...lastOfDay.keys()].sort(),out=[];for(let i=1;i<keys.length;i++)shiftDay(keys[i-1],1)===keys[i]&&out.push({day:keys[i],delta:lastOfDay.get(keys[i])-lastOfDay.get(keys[i-1])});return out}function silentSummary(history,{now=Date.now()}={}){let daily=silentDaily(history);if(daily.length<SILENT_MIN_DAYS)return{ready:!1,observedDays:daily.length,need:SILENT_MIN_DAYS};let today2=ymd(new Date(now)),wk=shiftDay(today2,-6),last7=daily.filter(x=>x.day>=wk).reduce((s,x)=>s+Math.max(0,x.delta),0),spikesOut=[];for(let i=SILENT_MIN_DAYS;i<daily.length;i++){let base=daily.slice(Math.max(0,i-SPIKE_BASE_DAYS),i),lambda=(base.reduce((s,x)=>s+Math.max(0,x.delta),0)+.5)/base.length,k=daily[i].delta;k>=SPIKE_MIN&&poissonTail(k,lambda)<SPIKE_P&&spikesOut.push({day:daily[i].day,count:k,usualPerDay:+lambda.toFixed(2)})}let perDay=daily.reduce((s,x)=>s+Math.max(0,x.delta),0)/daily.length;return{ready:!0,observedDays:daily.length,last7,usualPerWeek:+(perDay*7).toFixed(1),spikes:spikesOut.reverse()}}function ratingSummary(card,reviews,{now=Date.now()}={}){let list=rated(reviews),ver=list.filter(r=>r.verified===!0),since30=periodBuckets(30,{now}).since,last30=list.filter(r=>Date.parse(r.created||"")>=since30),c=card||{},silent=Number.isFinite(+c.ratingsCount)&&Number.isFinite(+c.reviewsCount)?Math.max(0,+c.ratingsCount-+c.reviewsCount):null,avgText=avg(list),diff=c.rating!=null&&avgText!=null?+(c.rating-avgText).toFixed(2):null;return{rating:c.rating??null,ratingsCount:c.ratingsCount??null,reviewsCount:c.reviewsCount??null,silent,silentShare:silent!=null&&c.ratingsCount?share(silent,+c.ratingsCount):null,avgText,textCount:list.length,avgConfirmed:avg(ver),confirmedCount:ver.length,avg30:avg(last30),count30:last30.length,diff,verdict:diff==null?"":Math.abs(diff)<.1?"same":diff>0?"higher":"lower"}}function compareRow(o,reviews,{now=Date.now(),days=30,negMax=3}={}){let all=scored(reviews),ok=rated(reviews),pb=periodBuckets(days,{now}),inP=ok.filter(r=>Date.parse(r.created||"")>=pb.since),re=reaction(all,{now,days,negMax}),knownV=ok.filter(r=>typeof r.verified=="boolean"),ready=!!(o&&o.harvest&&o.harvest.done),sp=spikes(all,{now,days:days||0,ready}),card=o&&o.card||{};return{id:o&&o.id,name:o&&(o.name||o.title)||"",ready,err:o&&o.err||"",rating:card.rating??null,reviewsCount:card.reviewsCount??null,ratingsCount:card.ratingsCount??null,avgText:avg(ok),count:inP.length,avg:avg(inP),negShare:share(inP.filter(r=>r.rating<=negMax).length,inP.length),replyShare:re.neg.count?re.neg.share:null,replyMedianH:re.neg.medianH,negCount:re.neg.count,confirmedShare:share(knownV.filter(r=>r.verified).length,knownV.length),spikes:sp.episodes.length,spikesReady:sp.ready}}var D,avg,share,rated,scored,dayOf2,shiftDay,daysBetween,REMIND_DAYS,SPIKE_P,SPIKE_MIN,SPIKE_BASE_DAYS,SPIKE_MIN_HISTORY,SILENT_MIN_DAYS,init_places_signals=__esm({"desktop/places-signals.js"(){init_dates();init_places_reaction();D=864e5,avg=list=>list.length?+(list.reduce((s,r)=>s+r.rating,0)/list.length).toFixed(2):null,share=(a,b)=>b?Math.round(a/b*100):null,rated=reviews=>(reviews||[]).filter(r=>r&&r.rated!==!1&&r.rating>=1&&r.rating<=5),scored=reviews=>(reviews||[]).filter(r=>r&&r.rating>=1&&r.rating<=5),dayOf2=r=>r&&r.created&&Number.isFinite(Date.parse(r.created))?ymd(new Date(r.created)):"",shiftDay=(k,n)=>{let[y,m,d]=k.split("-").map(Number);return ymd(new Date(y,m-1,d+n,12))},daysBetween=(a,b)=>{let[y1,m1,d1]=a.split("-").map(Number),[y2,m2,d2]=b.split("-").map(Number);return Math.round((Date.UTC(y2,m2-1,d2)-Date.UTC(y1,m1-1,d1))/D)},REMIND_DAYS=[1,2,3,5,7];SPIKE_P=1e-4,SPIKE_MIN=5,SPIKE_BASE_DAYS=90,SPIKE_MIN_HISTORY=30;SILENT_MIN_DAYS=14}});function userAgent(now=Date.now()){return"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/"+(140+Math.max(0,Math.floor((now-Date.UTC(2025,8,2))/24192e5)))+".0.0.0 Safari/537.36"}async function get3(url,{tries=3}={}){if(fetcher)return fetcher(url);let last="";for(let i=0;i<tries;i++){let ctrl=new AbortController,timer=setTimeout(()=>ctrl.abort(),TIMEOUT_MS2);try{let r=await fetch(url,{signal:ctrl.signal,redirect:"follow",headers:{"User-Agent":userAgent(),"Accept-Language":"ru-RU,ru;q=0.9",Accept:"text/html,application/json;q=0.9,*/*;q=0.8"}}),text=await r.text();return{ok:r.ok,status:r.status,text,url:r.url||url}}catch(e){if(last=e&&e.name==="AbortError"?"2ГИС не ответил за "+Math.round(TIMEOUT_MS2/1e3)+" с":netErr(e),!isReset(last+" "+String(e&&e.cause&&e.cause.code)))break;await sleep3(2e3*(i+1))}finally{clearTimeout(timer)}}return{ok:!1,status:0,text:"",url,err:last}}async function resolveLink(text){let p=parseFirmLink(text);if(!p)return null;if(!p.short)return p;let r=await get3(p.short);return parseFirmLink(r.url||"")||parseFirmLink(r.text||"")}async function checkObject(id,{now=Date.now()}={}){let o=getObject(id);if(!o)return{ok:!1,why:"объект не найден"};let link=o.link;updateObject(id,{lastCheck:now});let page=await get3(link.url);if(!page.ok&&!page.text)return fail(id,"карточка не открылась: "+(page.err||"HTTP "+page.status));let card=parseFirmPage(page.text,link.id,page.url);if(!card.ok){let blocked=/капча|музей|устаревш/.test(card.why);return fail(id,card.why,blocked)}let snap={rating:card.rating,reviewsCount:card.reviewsCount,ratingsCount:card.ratingsCount,at:now},events=diffCard(o.card,snap,now);if(updateObject(id,{name:card.name,address:card.address,category:card.category,title:card.title}),!card.reviewKey)return fail(id,"на странице не нашёлся ключ к отзывам — 2ГИС поменял устройство страницы");let known=reviewsOf(id),pull=async offset=>{PAUSE_MS2&&await sleep3(jitter());let r=await get3(reviewsUrl({api:card.reviewApi,id:link.id,key:card.reviewKey,locale:link.locale,offset}));return!r.ok&&!r.text?{ok:!1,why:"отзывы не открылись: "+(r.err||"HTTP "+r.status)}:parseReviews(r.text)},first=await pull(0);if(!first.ok)return fail(id,first.why);let d=diffReviews(known,first.reviews,{watchFrom:o.watchFrom||0,now});known=d.merged,events.push(...d.events);let harvest={...o.harvest||{done:!1,offset:0}};if(!harvest.done){let offset=Math.max(PAGE,harvest.offset||0),pages=0,lastLen=first.reviews.length,more=first.meta.next;for(harvest.total=first.meta.total??harvest.total??null;more&&lastLen>=PAGE&&pages<HARVEST_PAGES;){let p=await pull(offset);if(!p.ok){harvest.err=p.why;break}d=diffReviews(known,p.reviews,{watchFrom:o.watchFrom||0,now}),known=d.merged,events.push(...d.events),pages++,offset+=PAGE,lastLen=p.reviews.length,more=p.meta.next}harvest.offset=offset,(!more||lastLen<PAGE)&&(harvest.done=!0,harvest.doneAt=now,delete harvest.err)}let fill=o.fill?{...o.fill}:null,trustVer=o.trustVer||0,TRUST_VER2=TRUST_VER;if(harvest.done&&trustVer<TRUST_VER2){fill=fill&&fill.ver===TRUST_VER2?fill:{ver:TRUST_VER2,offset:PAGE};let pages=0,lastLen=first.reviews.length,more=first.meta.next;for(;more&&lastLen>=PAGE&&pages<HARVEST_PAGES;){let p=await pull(fill.offset);if(!p.ok){fill.err=p.why;break}known=diffReviews(known,p.reviews,{watchFrom:o.watchFrom||0,now}).merged,pages++,fill.offset+=PAGE,lastLen=p.reviews.length,more=p.meta.next}!fill.err&&(!more||lastLen<PAGE)&&(updateObject(id,{trustVer:TRUST_VER2}),fill=null)}let reread=o.reread?{...o.reread}:null,rereadDone=null;if(reread&&harvest.done&&!fill){let mark=reread.startedAt;if(known=diffReviews(known,first.reviews,{watchFrom:o.watchFrom||0,now,seenMark:mark}).merged,reread.phase!=="verify"){let pages=0,lastLen=first.reviews.length,more=first.meta.next;for(reread.total=first.meta.total??reread.total??null;more&&lastLen>=PAGE&&pages<HARVEST_PAGES;){let p=await pull(reread.offset);if(!p.ok){reread.err=p.why;break}known=diffReviews(known,p.reviews,{watchFrom:o.watchFrom||0,now,seenMark:mark}).merged,pages++,reread.offset+=PAGE,lastLen=p.reviews.length,more=p.meta.next,reread.pages=(reread.pages||0)+1}!reread.err&&(!more||lastLen<PAGE)&&(reread.verify=Object.values(known).filter(r=>!r.gone&&r.seenIn!==mark&&!(Date.parse(r.created||"")>=mark)).map(r=>r.id),reread.phase="verify",reread.gone=0,reread.alive=0)}if(reread.phase==="verify"){delete reread.err;let n=0;for(;reread.verify.length&&n<VERIFY_MAX;){let rid=reread.verify[0];PAUSE_MS2&&await sleep3(jitter());let x=await get3(reviewUrl({api:card.reviewApi,key:card.reviewKey,locale:link.locale,reviewId:rid})),one2=parseOneReview(x.text||"",x.status||0);if(!one2.ok){reread.err=one2.why||(x.err?"отзыв не открылся: "+x.err:"отзыв не открылся");break}one2.notFound?(known[rid]={...known[rid],gone:now},reread.gone++):one2.branch&&one2.branch!==String(link.id)?(known[rid]={...known[rid],gone:now},reread.gone++):(known=diffReviews(known,[one2.review],{watchFrom:o.watchFrom||0,now,seenMark:mark}).merged,reread.alive++),reread.verify.shift(),n++}!reread.err&&!reread.verify.length&&(rereadDone={at:now,startedAt:mark,pages:reread.pages||0,gone:reread.gone||0,alive:reread.alive||0},reread=null)}}let nset=objNotify(o,state().notify),reminded=new Set(eventsOf(id).filter(e=>e.kind==="remind").map(e=>e.review&&e.review.id)),live2=()=>Object.values(known).filter(r=>!r.gone),dueNow=()=>nset.remind?remindCandidates(live2(),{now,days:nset.remindDays,negMax:nset.remindNeg,since:nset.remindSince}).filter(r=>!reminded.has(r.id)):[],forceAnswers=harvest.done&&dueNow().length>0,answersAt=o.answersAt||0;if(harvest.done&&!(o.harvest&&o.harvest.done)||trustVer<TRUST_VER2&&!fill&&harvest.done||rereadDone)answersAt=now;else if(harvest.done&&!fill&&(forceAnswers||now-answersAt>=ANSWERS_EVERY_MS)){let edge=now-ANSWERS_DAYS*864e5,oldest=list=>Math.min(...list.map(r=>Date.parse(r.edited||r.created||"")).filter(Number.isFinite)),offset=PAGE,pages=0,lastLen=first.reviews.length,more=first.meta.next,err="",reach=first.reviews.length?oldest(first.reviews):-1/0;for(;more&&lastLen>=PAGE&&reach>=edge&&pages<ANSWERS_PAGES;){let p=await pull(offset);if(!p.ok){err=p.why;break}d=diffReviews(known,p.reviews,{watchFrom:o.watchFrom||0,now}),known=d.merged,events.push(...d.events),pages++,offset+=PAGE,lastLen=p.reviews.length,more=p.meta.next,reach=p.reviews.length?oldest(p.reviews):-1/0}err||(answersAt=now)}if(nset.remind&&harvest.done&&(!forceAnswers||answersAt===now))for(let r of dueNow())events.push({key:"remind:"+r.id,kind:"remind",at:now,days:nset.remindDays,review:{id:r.id,rating:r.rating,text:r.text,author:r.author,created:r.created,verified:r.verified,trust:r.trust}});events.push(...spikeEvents(live2(),{now,ready:harvest.done,watchFrom:o.watchFrom||0})),saveReviews(id,known),addHistory(id,snap,now);let added=addEvents(id,events),stored=live2().length;return updateObject(id,{card:snap,lastOk:now,err:"",blockedUntil:0,harvest,fill,answersAt,stored,reread,...rereadDone?{rereadDone}:{}}),{ok:!0,events:added,stored,...rereadDone?{rereadDone}:{}}}function fail(id,why,blocked=!1){return updateObject(id,{err:why,...blocked?{blockedUntil:Date.now()+BACKOFF_MS}:{}}),{ok:!1,why,blocked}}function setNotifier(fn){notifier=typeof fn=="function"?fn:null}function runOne(id){if(roundJob)return{ok:!1,busy:!0,why:"идёт общая проверка всех объектов — этот объект она тоже обновит"};if(oneJob)return{ok:!1,busy:!0,why:"уже обновляю "+(oneId===String(id)?"этот объект":"другой объект")+" — подождите минуту"};let o=getObject(id);return o?o.blockedUntil&&o.blockedUntil>Date.now()?{ok:!1,why:"2ГИС не пустил нас на прошлой проверке — пауза до "+new Date(o.blockedUntil).toLocaleTimeString("ru-RU")+", ломиться раньше значит продлить блокировку"}:(oneId=String(id),oneJob=(async()=>{let r;try{r=await checkObject(id)}catch(e){r={ok:!1,why:String(e&&e.message||e)}}try{notifier&&await notifier()}catch{}return r})().finally(()=>{oneJob=null,oneId=null}),{ok:!0,job:oneJob}):{ok:!1,why:"объект не найден"}}function runRound({reason="расписание",now=()=>Date.now()}={}){return roundJob||(roundJob=(async()=>{if(oneJob)try{await oneJob}catch{}let st=state(),started=now();st.round={running:!0,startedAt:started,reason,done:0,total:st.objects.length};let results=[];for(let o of listObjects()){if(o.blockedUntil&&o.blockedUntil>now()){results.push({id:o.id,ok:!1,why:"пауза после отказа 2ГИС до "+new Date(o.blockedUntil).toLocaleTimeString("ru-RU")});continue}st.round.current=o.id;let r;try{r=await checkObject(o.id,{now:now()})}catch(e){r={ok:!1,why:String(e&&e.message||e)}}if(results.push({id:o.id,...r}),st.round.done++,r.blocked)break;PAUSE_MS2&&await sleep3(jitter())}st.lastRound={at:started,ms:now()-started,reason,results:results.map(x=>({id:x.id,ok:x.ok,why:x.why||"",events:x.events||0}))},st.round=null,saveState();try{notifier&&await notifier()}catch{}return st.lastRound})().finally(()=>{roundJob=null;try{let s=state();s.round=null}catch{}}),roundJob)}function isDue2(st,now=Date.now()){if(!st||!st.unlocked||!st.schedule||st.schedule.mode!=="minutes"||!st.objects||!st.objects.length)return!1;let every=Math.max(MIN_EVERY_MIN2,+st.schedule.everyMinutes||30)*60*1e3,last=st.lastRound&&st.lastRound.at||0;return now-last>=every}function startPlacesScheduler(){setInterval(()=>{try{isDue2(state())&&runRound()}catch{}},60*1e3)}var HARVEST_PAGES,ANSWERS_EVERY_MS,ANSWERS_DAYS,ANSWERS_PAGES,VERIFY_MAX,TIMEOUT_MS2,PAUSE_MS2,BACKOFF_MS,sleep3,jitter,fetcher,isReset,roundJob,notifier,roundRunning,oneJob,oneId,busyId,init_places_runner=__esm({"desktop/places-runner.js"(){init_places();init_gis_parse();init_channels();init_places_signals();init_places();HARVEST_PAGES=30,ANSWERS_EVERY_MS=6*36e5,ANSWERS_DAYS=45,ANSWERS_PAGES=6,VERIFY_MAX=60,TIMEOUT_MS2=2e4,PAUSE_MS2=typeof process<"u"&&process.env&&process.env.MC_GIS_PAUSE_MS!=null?Math.max(0,+process.env.MC_GIS_PAUSE_MS):1800,BACKOFF_MS=3600*1e3,sleep3=ms2=>new Promise(r=>setTimeout(r,ms2)),jitter=()=>PAUSE_MS2?PAUSE_MS2+Math.floor(Math.random()*PAUSE_MS2*.6):0;fetcher=null,isReset=e=>/ECONNRESET|ECONNABORTED|UND_ERR_SOCKET|UND_ERR_CONNECT_TIMEOUT|ETIMEDOUT|socket hang up|other side closed|не удалось соединиться|оборвал/i.test(String(e));roundJob=null,notifier=null;roundRunning=()=>!!roundJob,oneJob=null,oneId=null,busyId=()=>oneJob?oneId:state().round&&state().round.current||null}});function borrowedFrom(token){if(!token)return"";for(let p of listProjects())if(tgState(p.id).token===token)return p.id;return""}async function source(){let t=tgState2();if(!t.token)return null;let pid=borrowedFrom(t.token);if(pid!==(t.borrowed||"")&&setTgState2({borrowed:pid}),pid){try{await pullFor(pid)}catch{}let ps=tgState(pid);return{token:t.token,chats:ps.chats||[],owners:ps.owners||[],pid}}let r=await pullChats(t.token,t);setTgState2({chats:r.chats,offset:r.offset,err:r.err||""}),r.events&&r.events.length&&await handleEvents2(r.events);let t2=tgState2();return{token:t2.token,chats:t2.chats||[],owners:t2.owners||[],pid:""}}function formatEvent(e,o){let head="<b>"+esc(o.name||o.title||"Фирма")+"</b>"+(o.address?" · "+esc(o.address):""),r=e.review||{},ok=r.verified===!0?"✅ отзыв подтверждён"+(r.trust?" ("+r.trust+")":""):"",who2=[r.author,localStamp(r.edited||r.created),ok].filter(Boolean).map(esc).join(" · "),link=reviewsPageUrl(o.link),top2="",body="";if(e.kind==="new")top2=(r.rating<=2?"🔴":r.rating===3?"🟡":"🟢")+" Новый отзыв "+stars(r.rating),body=r.text?"<i>"+esc(clip(r.text,900))+"</i>":"<i>(без текста)</i>";else if(e.kind==="rating")top2="✏️ Автор изменил оценку: "+stars(e.from)+" → "+stars(r.rating),body=r.text?"<i>"+esc(clip(r.text,700))+"</i>":"";else if(e.kind==="edited")top2="✏️ Автор исправил отзыв "+stars(r.rating),body="<i>"+esc(clip(r.text,700))+"</i>";else if(e.kind==="answer")top2="💬 Фирма ответила на отзыв "+stars(r.rating),body=(r.text?"Отзыв: <i>"+esc(clip(r.text,300))+`</i>
`:"")+"Ответ: <i>"+esc(clip(r.answer&&r.answer.text,500))+"</i>";else if(e.kind==="unrated")top2="🚫 2ГИС не учитывает отзыв в рейтинге "+stars(r.rating),body=(r.text?"<i>"+esc(clip(r.text,300))+`</i>
`:"")+(r.hideReason?"Причина: "+esc(clip(r.hideReason,400)):"");else if(e.kind==="remind")top2="⏰ Плохой отзыв без ответа уже "+e.days+" "+dn(e.days)+" "+stars(r.rating),body=r.text?"<i>"+esc(clip(r.text,700))+"</i>":"<i>(без текста)</i>";else{if(e.kind==="spike")return formatSpike(e,head,reviewsPageUrl(o.link));if(e.kind==="card"){let f=e.from||{},t=e.to||{},parts=[];f.rating!==t.rating&&parts.push("рейтинг "+f.rating+" → <b>"+t.rating+"</b>"),f.reviewsCount!==t.reviewsCount&&parts.push("отзывов "+f.reviewsCount+" → "+t.reviewsCount),f.ratingsCount!==t.ratingsCount&&parts.push("оценок "+f.ratingsCount+" → "+t.ratingsCount),top2="📊 Изменилась карточка: "+parts.join(" · ");let notes=[];e.silentVotes&&notes.push("оценок без текста: +"+e.silentVotes),e.lostReviews&&notes.push("отзывов стало меньше на "+e.lostReviews+" — похоже, часть удалили или скрыли"),body=notes.join(`
`)}}return[top2,head,e.kind==="card"?"":who2,body,link,"<i>"+SIGN+"</i>"].filter(Boolean).join(`
`)}function formatSpike(e,head,link){let x=e.episode||{},u=x.usualShares||{},span=x.from===x.to?"за день":"за "+daysSpan(x.from,x.to)+" "+dn(daysSpan(x.from,x.to)),what=x.kind==="pos"?"хороших":x.kind==="neg"?"плохих":"",top2="⚠️ Всплеск "+(what?what+" ":"")+"отзывов: "+x.count+" "+span+" (обычно ~"+num4(x.usualPerDay)+" в день)",lines=["Оценки: хороших "+x.good+", средних "+x.mid+", плохих "+x.bad+(x.avg!=null?" · средняя ★"+num4(x.avg):""),x.verifiedKnown?"Подтверждено: "+ofUsual(x.verified,x.verifiedKnown,x.verifiedShare,u.verifiedShare):"",x.authorsKnown?"Пишут впервые: "+ofUsual(x.firstTime,x.authorsKnown,x.firstTimeShare,u.firstTimeShare):"",x.unrated?"2ГИС не учёл в рейтинге: "+x.unrated:"","<i>Всплеск — не обязательно накрутка: бывают акции, праздники, скандалы. Признаки выше — для сравнения с обычным.</i>"];return[top2,head,lines.filter(Boolean).join(`
`),link,"<i>"+SIGN+"</i>"].filter(Boolean).join(`
`)}async function notifyPlaces(){if(sending2)return{sent:0,skipped:"уже идёт отправка"};let t=tgState2();if(!t.enabled||!t.token)return{sent:0,skipped:"бот выключен"};sending2=!0;try{let src=await source();if(!src)return{sent:0,skipped:"нет токена"};let marked=[];for(let c of src.chats)marked.push({...c,access:(await chatAccess({token:src.token,owners:src.owners},c)).ok?"ok":"no"});src.pid||setTgState2({chats:marked});let chats=marked.filter(c=>c.access==="ok");if(!chats.length)return{sent:0,skipped:src.owners.length?"ни в одном чате нет владельца бота":"владелец бота не привязан (/iam)"};let sent=0,left=MAX_PER_CALL;for(let o of listObjects()){let all=unsentEvents(o.id),n=objNotify(o,state().notify),off=e=>!n.all||e.kind==="answer"&&!n.answers||e.kind==="spike"&&!n.spikes||e.kind==="remind"&&!n.remind,skip=all.filter(off).map(e=>e.key);skip.length&&markSent(o.id,skip);let todo=all.filter(e=>!off(e)).slice(0,left),done=[];for(let e of todo){let text=formatEvent(e,o),okAny=!1;for(let c of chats){let r=await tgApi(src.token,"sendMessage",{chat_id:c.id,text,parse_mode:"HTML",disable_web_page_preview:!0});r.ok?okAny=!0:setTgState2({err:r.err})}okAny&&(done.push(e.key),sent++),PAUSE_MS&&await sleep4(PAUSE_MS)}if(markSent(o.id,done),left-=todo.length,left<=0)break}let t2=tgState2();return setTgState2({sentTotal:(t2.sentTotal||0)+sent,lastSentAt:Date.now(),...sent?{err:""}:{}}),{sent,chats:chats.length}}catch(e){return setTgState2({err:String(e&&e.message||e)}),{sent:0,err:String(e&&e.message||e)}}finally{sending2=!1}}async function say2(chatId,text){let t=tgState2();return tgApi(t.token,"sendMessage",{chat_id:chatId,text,parse_mode:"HTML",disable_web_page_preview:!0})}async function handleEvents2(events,now=Date.now()){for(let ev2 of events||[])try{if(ev2.kind!=="msg")continue;let m=String(ev2.text||"").trim().match(/^\/([a-z]+)(?:@\S+)?\s*(.*)$/i);if(!m)continue;let cmd=m[1].toLowerCase(),args=m[2].trim(),t=tgState2();if(cmd==="iam"){if(ev2.chat.type!=="private"){setTgState2({ownerCode:String(Math.floor(1e5+Math.random()*9e5))}),await say2(ev2.chat.id,"Код отправляют в <b>личные сообщения</b>. Этот код я уже заменил — новый в кабинете.");continue}let uid2=String(ev2.from.id),f=iamFails2.get(uid2)||{n:0,at:now};if(now-f.at>3600*1e3&&(f.n=0,f.at=now),f.n>=5){await say2(ev2.chat.id,"Слишком много неверных кодов. Попробуйте через час.");continue}if(!args||args!==String(t.ownerCode||"")){f.n++,iamFails2.set(uid2,f),await say2(ev2.chat.id,"Код не подошёл. Он в кабинете, в разделе «Мониторинг репутации».");continue}let name=[ev2.from.first_name,ev2.from.last_name].filter(Boolean).join(" ")||(ev2.from.username?"@"+ev2.from.username:uid2);setTgState2({owners:(t.owners||[]).filter(o=>String(o.id)!==uid2).concat([{id:ev2.from.id,name}])}),iamFails2.delete(uid2),await say2(ev2.chat.id,"Готово: вы владелец бота модуля «"+SIGN+"». Новые отзывы и изменения рейтинга будут приходить сюда и в общие чаты, где вы состоите.");continue}if(cmd==="stop")continue;if(!(await chatAccess(tgState2(),ev2.chat,now)).ok){await say2(ev2.chat.id,CLOSED2);continue}if(cmd==="start"||cmd==="help"){await say2(ev2.chat.id,HELP2);continue}if(cmd==="status"){let L=listObjects().map(o=>"• <b>"+esc(o.name||o.id)+"</b>: "+(o.card?"★ "+o.card.rating+", отзывов "+o.card.reviewsCount+", оценок "+o.card.ratingsCount:"ещё не проверяли")+(o.err?" — ⚠️ "+esc(o.err):""));await say2(ev2.chat.id,L.length?L.join(`
`):"Объектов пока нет — добавьте их в кабинете.")}}catch{}}function startPlacesBotLoop(){setInterval(async()=>{try{let t=tgState2();if(!isUnlocked()||!t.enabled||!t.token||borrowedFrom(t.token))return;let r=await pullChats(t.token,t);setTgState2({chats:r.chats,offset:r.offset,err:r.err||""}),r.events&&r.events.length&&await handleEvents2(r.events)}catch{}},5e3)}async function checkPlacesBot(){let t=tgState2();if(!t.token)return{ok:!1,error:"сначала вставьте токен бота"};let who2=await checkBot(t.token);return who2.ok?(setTgState2({bot:who2.bot,err:""}),await source(),{ok:!0}):(setTgState2({err:who2.err}),{ok:!1,error:who2.err})}var SIGN,MAX_PER_CALL,sleep4,stars,clip,dn,num4,ofUsual,daysSpan,sending2,iamFails2,HELP2,CLOSED2,init_places_bot=__esm({"desktop/places-bot.js"(){init_places();init_store();init_telegram_bot();init_dates();init_gis_parse();init_places_signals();SIGN="Мониторинг репутации",MAX_PER_CALL=30,sleep4=ms2=>new Promise(r=>setTimeout(r,ms2));stars=n=>n>=1&&n<=5?"★".repeat(n)+"☆".repeat(5-n):"",clip=(s,n)=>(s=String(s||"").replace(/\s+/g," ").trim(),s.length>n?s.slice(0,n-1)+"…":s);dn=n=>{n=Math.abs(n)%100;let k=n%10;return n>10&&n<20?"дней":k===1?"день":k>=2&&k<=4?"дня":"дней"},num4=x=>String(x).replace(".",","),ofUsual=(n,of,sh,us)=>n+" из "+of+(sh!=null?" ("+sh+"%"+(us!=null?"; обычно "+us+"%":"")+")":"");daysSpan=(a,b)=>Math.round((Date.parse(b+"T12:00:00Z")-Date.parse(a+"T12:00:00Z"))/864e5)+1,sending2=!1;iamFails2=new Map,HELP2="Я бот модуля «"+SIGN+`»: присылаю новые отзывы 2ГИС, изменённые оценки, ответы фирм и изменения рейтинга.
/status — рейтинг и отзывы по всем объектам.`,CLOSED2="Это закрытый бот. Владельцу: отправьте мне в личные сообщения /iam и код из кабинета (раздел «Мониторинг репутации»)."}});function ruAdj(w){if(w.length<5||NOT_ADJ.has(w)||/(ние|тие|вие|сие|ьие)$/.test(w))return null;for(let e of RU_END){if(!w.endsWith(e))continue;let stem=w.slice(0,-e.length);return stem.length<3||STOP_STEMS.has(stem)?null:{stem,sure:SURE_END.includes(e)}}return null}function wordCloud(reviews,{top:top2=60,minReviews=2}={}){let list=(reviews||[]).filter(r=>r&&r.text),full=new Map,vague=[],shortCand=[],kk=new Map,add=(stem,w,i,wt=1)=>{let e=full.get(stem)||{forms:new Map,docs:new Set};e.forms.set(w,(e.forms.get(w)||0)+wt),e.docs.add(i),full.set(stem,e)};list.forEach((r,i)=>{let ws=words(r.text);ws.forEach((w,k)=>{if(KK2.has(w)){(kk.get(w)||kk.set(w,new Set).get(w)).add(i);return}if(THANKS.has(ws[k+1]||"")||THANKS.has(ws[k+2]||"")||THANKS.has(ws[k-1]||""))return;let a=ruAdj(w);a&&a.sure?add(a.stem,w,i):a?vague.push([i,w,a.stem]):w.length>=5&&shortCand.push([i,w])})});let vagueDocs=new Map;for(let[i,,stem]of vague)(vagueDocs.get(stem)||vagueDocs.set(stem,new Set).get(stem)).add(i);let confirmed=stem=>{let e=full.get(stem);if(!e)return!1;let sure=e.docs.size;return sure>=2&&sure*10>=(vagueDocs.get(stem)||new Set).size};for(let e of full.values())e.sure=e.docs.size;let okStem=new Map;for(let stem of vagueDocs.keys())okStem.set(stem,confirmed(stem));for(let[i,w,stem]of vague)okStem.get(stem)&&add(stem,w,i);for(let[i,w]of shortCand)for(let e of SHORT_END){if(!w.endsWith(e))continue;let st=w.slice(0,-e.length),f=full.get(st);if(f&&f.sure>=2){add(st,w,i,.5);break}}let out=[],push=(word,docs)=>{if(docs.size<minReviews)return;let pos=0,neg=0;for(let i of docs){let g=list[i].rating;g>=4?pos++:g!=null&&g<=3&&neg++}out.push({word,reviews:docs.size,pos,neg,tone:pos+neg?+((pos-neg)/(pos+neg)).toFixed(2):0})};for(let[,e]of full){let word=[...e.forms.entries()].filter(([f])=>{let a=ruAdj(f);return a&&a.sure}).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0];push(word?word[0]:[...e.forms.keys()][0],e.docs)}for(let[w,docs]of kk)push(w,docs);return out.sort((a,b)=>b.reviews-a.reviews||a.word.localeCompare(b.word)).slice(0,top2)}function distinctive(reviews,group="neg",{top:top2=60,minHits=3,lift=1.5}={}){let list=(reviews||[]).filter(r=>r&&r.text&&r.rating),nNeg=list.filter(r=>r.rating<=3).length,nPos=list.length-nNeg;if(!nNeg||!nPos)return wordCloud(list.filter(r=>group==="neg"?r.rating<=3:r.rating>=4),{top:top2});let base=group==="neg"?nNeg/list.length:nPos/list.length;return wordCloud(list,{top:1e3,minReviews:minHits}).map(w=>({...w,hits:group==="neg"?w.neg:w.pos})).filter(w=>w.hits>=minHits&&w.hits/(w.pos+w.neg)>=Math.min(.95,base*lift)).sort((a,b)=>b.hits-a.hits||a.word.localeCompare(b.word)).slice(0,top2).map(w=>({...w,reviews:w.hits}))}function reputationPicture(reviews,{top:top2=30}={}){let list=(reviews||[]).filter(r=>r&&r.rating),nPos=list.filter(r=>r.rating>=4).length,nNeg=list.length-nPos,withText=list.filter(r=>r.text);return{reviews:list.length,pos:nPos,neg:nNeg,withText:withText.length,praise:distinctive(withText,"pos",{top:top2}),blame:distinctive(withText,"neg",{top:top2})}}var SURE_END,VAGUE_END,RU_END,SHORT_END,STOP_STEMS,NOT_ADJ,KK2,THANKS,norm2,words,init_word_cloud=__esm({"desktop/word-cloud.js"(){SURE_END=["ыми","ого","ому","ый","ий","ая","яя","ое","ые","ие","ых"],VAGUE_END=["ими","его","ему","ой","ом","ем","ее","ую","юю","их","им","ым"],RU_END=[...SURE_END,...VAGUE_END].sort((a,b)=>b.length-a.length),SHORT_END=["о","а","ы","е"],STOP_STEMS=new Set("котор так эт сво мо тво наш ваш как кажд друг сам всяк некотор люб ин перв втор трет четверт пят последн следующ прошл мног цел дан одн никак нек чь должн данн".split(" ")),NOT_ADJ=new Set("почему потому поэтому никого никому ничего ничему впервые вообщем всего его ему ней ним ими кого кому чего чему того тому этого этому самого время более менее уже еще также тоже очень стоимость".split(" ")),KK2=new Set("жақсы жаман тамаша керемет әдемі дәмді дәмсіз таза лас жылы суық ыстық салқын сапалы сапасыз қымбат арзан жылдам баяу ыңғайлы ыңғайсыз сыпайы дөрекі мейірімді кішіпейіл білікті жайлы жайсыз ұнамды нашар үздік мықты күшті тәтті ащы жұмсақ кең тар жарық қараңғы тыныш шулы көңілді қолайлы сенімді адал жауапты тиімді пайдалы зиянды керексіз ұқыпты ұқыпсыз жедел".split(" ")),THANKS=new Set(["спасибо","благодарность","благодарю","рахмет","алғыс"]),norm2=w=>w.toLowerCase().replace(/ё/g,"е"),words=text=>norm2(String(text||"")).match(/[a-zа-яәғқңөұүһі]+/g)||[]}});function objectStats(id){let everything=Object.values(reviewsOf(id)),all=everything.filter(r=>!r.gone),rated2=all.filter(r=>r.rated!==!1&&r.rating),dist=[0,0,0,0,0];for(let r of rated2)dist[r.rating-1]++;let avg2=list=>list.length?+(list.reduce((s,r)=>s+r.rating,0)/list.length).toFixed(2):null,byMonth=new Map;for(let r of rated2){let m=r.created?ymd(new Date(r.created)).slice(0,7):"";if(!m)continue;let e=byMonth.get(m)||{month:m,count:0,sum:0,neg:0};e.count++,e.sum+=r.rating,r.rating<=2&&e.neg++,byMonth.set(m,e)}let months=[...byMonth.values()].sort((a,b)=>a.month.localeCompare(b.month)).slice(-24).map(e=>({month:e.month,count:e.count,avg:+(e.sum/e.count).toFixed(2),neg:e.neg})),since=periodBuckets(30).since,last30=rated2.filter(r=>Date.parse(r.created||"")>=since),sinceDay=ymd(new Date(Date.now()-186*864e5)),byDay=new Map;for(let r of rated2){let d=r.created?ymd(new Date(r.created)):"";if(!d||d<sinceDay)continue;let e=byDay.get(d)||{day:d,count:0,sum:0,neg:0};e.count++,e.sum+=r.rating,r.rating<=2&&e.neg++,byDay.set(d,e)}let daily=[...byDay.values()].sort((a,b)=>a.day.localeCompare(b.day)),knownV=rated2.filter(r=>typeof r.verified=="boolean"),vy=knownV.filter(r=>r.verified),vn=knownV.filter(r=>!r.verified),verified={known:knownV.length,of:rated2.length,yes:vy.length,avgYes:avg2(vy),avgNo:avg2(vn),negYes:vy.filter(r=>r.rating<=2).length,negNo:vn.filter(r=>r.rating<=2).length};return{daily,verified,stored:all.length,gone:everything.length-all.length,rated:rated2.length,unrated:all.length-rated2.length,answered:all.filter(r=>r.answer).length,negReply:(({count:count2,answered,share:share2})=>({count:count2,answered,share:share2,negMax:3}))(reaction(all,{negMax:3}).neg),dist,avgAll:avg2(rated2),avg30:avg2(last30),count30:last30.length,neg30:last30.filter(r=>r.rating<=2).length,months}}async function handlePlaces(req2,res,path,u,{json:json2,readBody:readBody2}){if(path==="/api/places"&&req2.method==="GET"){let st=state();return st.unlocked?json2(res,200,{...publicState(),round:st.round||null,lastRound:st.lastRound||null,roundRunning:roundRunning()}):json2(res,200,{unlocked:!1})}if(path==="/api/places/unlock"&&req2.method==="POST"){let b=await readBody2(req2);return json2(res,200,unlock(b.code))}if(!isUnlocked())return json2(res,403,{error:"модуль закрыт — откройте его кодом администратора"});if(path==="/api/places/lock"&&req2.method==="POST")return json2(res,200,lock());if(path==="/api/places/objects"&&req2.method==="POST"){let b=await readBody2(req2),link=await resolveLink(b.url||"");if(!link||!link.id)return json2(res,400,{error:"не похоже на ссылку на карточку фирмы в 2ГИС. Нужна ссылка вида https://2gis.kz/astana/firm/70000001027712418"});let r=addObject(link);return r.ok?(checkObject(link.id).catch(()=>{}),json2(res,200,{ok:!0,object:publicObject(r.object)})):json2(res,400,r)}if(path==="/api/places/check"&&req2.method==="POST")return roundRunning()?json2(res,409,{error:"проверка уже идёт"}):(runRound({reason:"вручную"}).catch(()=>{}),json2(res,200,{ok:!0}));if(path==="/api/places/compare"&&req2.method==="GET"){let days=Math.max(0,+u.searchParams.get("days")||0),neg=+u.searchParams.get("neg")||3;return json2(res,200,{days,negMax:[2,3,4].includes(neg)?neg:3,rows:listObjects().map(o=>compareRow(o,liveReviews(o.id),{days,negMax:neg}))})}if(path==="/api/places/schedule"&&req2.method==="POST"){let b=await readBody2(req2);return json2(res,200,{schedule:setSchedule(b)})}if(path==="/api/places/notify"&&req2.method==="POST"){let b=await readBody2(req2);return json2(res,200,{notify:setNotify({answers:b.answers!==!1})})}if(path==="/api/places/telegram"&&req2.method==="POST"){let b=await readBody2(req2),patch={};if(b.enabled!==void 0&&(patch.enabled=!!b.enabled),b.clearToken)Object.assign(patch,{token:"",bot:"",chats:[],offset:0,owners:[],err:"",borrowed:""});else if(b.token){let tok=String(b.token).trim(),prev=tgState2();patch.token=tok,tok!==prev.token&&Object.assign(patch,{chats:[],offset:0,bot:"",owners:[],err:"",borrowed:borrowedFrom(tok)})}let was=tgState2();if(setTgState2(patch).enabled&&!was.enabled)for(let o of listObjects())markSent(o.id,unsentEvents(o.id).map(e=>e.key));return json2(res,200,{ok:!0,tg:tgPublic2()})}if(path==="/api/places/telegram/check"&&req2.method==="POST"){let r=await checkPlacesBot();return json2(res,200,{...r,tg:tgPublic2(),borrowedName:(()=>{let id=tgState2().borrowed,p=id&&getProject(id);return p?p.name:""})()})}if(path==="/api/places/telegram/send"&&req2.method==="POST")return json2(res,200,await notifyPlaces());let m=path.match(/^\/api\/places\/objects\/(\d{6,20})(?:\/([a-z.]+))?$/);if(m){let id=m[1],sub=m[2]||"",o=getObject(id);if(!o)return json2(res,404,{error:"объект не найден"});if(sub===""&&req2.method==="DELETE")return removeObject(id),json2(res,200,{ok:!0});if(sub==="check"&&req2.method==="POST"){let r=runOne(id);return json2(res,r.ok?200:409,r.ok?{ok:!0}:{error:r.why})}if(sub==="reread"&&req2.method==="POST"){if(!(o.harvest&&o.harvest.done))return json2(res,409,{error:"первый сбор ещё идёт — он и так читает все отзывы"});o.reread||updateObject(id,{reread:{startedAt:Date.now(),offset:50,phase:"read",pages:0}});let r=runOne(id);return json2(res,200,{ok:!0,started:!!r.ok,note:r.ok?"":r.why})}if(sub===""&&req2.method==="GET")return json2(res,200,{object:publicObject(o),stats:objectStats(id),history:historyOf(id).slice(-500),events:eventsOf(id).slice(-200).reverse(),ai:aiReport(id)});if(sub==="reviews"&&req2.method==="GET"){let stars2=(u.searchParams.get("stars")||"").split(",").map(Number).filter(n=>n>=1&&n<=5),q=String(u.searchParams.get("q")||"").trim().toLowerCase(),list=Object.values(reviewsOf(id)).filter(r=>u.searchParams.get("gone")==="1"?!!r.gone:!r.gone);stars2.length&&(list=list.filter(r=>stars2.includes(r.rating))),q&&(list=list.filter(r=>String(r.text||"").toLowerCase().includes(q))),u.searchParams.get("ver")==="1"&&(list=list.filter(r=>r.verified===!0));let ans=u.searchParams.get("ans");ans==="1"&&(list=list.filter(r=>r.answer)),ans==="0"&&(list=list.filter(r=>!r.answer)),list.sort((a,b)=>String(b.edited||b.created||"").localeCompare(String(a.edited||a.created||"")));let off=Math.max(0,+u.searchParams.get("offset")||0),lim=Math.max(1,Math.min(100,+u.searchParams.get("limit")||30));return json2(res,200,{total:list.length,reviews:list.slice(off,off+lim)})}if(sub==="reaction"&&req2.method==="GET")return json2(res,200,reaction(liveReviews(id),{days:+u.searchParams.get("days")||0,negMax:+u.searchParams.get("neg")||3}));if(sub==="signals"&&req2.method==="GET"){let list=liveReviews(id),days=u.searchParams.has("days")?Math.max(0,+u.searchParams.get("days")||0):365;return json2(res,200,{rating:ratingSummary(o.card,list),spikes:spikes(list,{days,ready:!!(o.harvest&&o.harvest.done)}),silent:silentSummary(historyOf(id)),days})}if(sub==="notify"&&req2.method==="POST"){let b=await readBody2(req2);return updateObject(id,{notify:patchNotify(o.notify,b)}),json2(res,200,{notify:objNotify(getObject(id),state().notify)})}if(sub==="timeline"&&req2.method==="GET")return json2(res,200,timeline(liveReviews(id),{days:+u.searchParams.get("days")||0}));if(sub==="cloud"&&req2.method==="GET"){let g=u.searchParams.get("g")||"all",list=liveReviews(id),days=+u.searchParams.get("days")||0;if(days>0){let since=Date.now()-days*864e5;list=list.filter(r=>Date.parse(r.created||"")>=since)}if(g==="picture")return json2(res,200,{mode:"picture",...reputationPicture(list,{top:30})});if(g==="pos"||g==="neg"){let part=list.filter(r=>r.rating&&(g==="pos"?r.rating>=4:r.rating<=3));return json2(res,200,{reviews:part.length,words:distinctive(list,g,{top:60}),mode:"distinctive"})}return json2(res,200,{reviews:list.length,words:wordCloud(list,{top:60})})}if(sub==="ai"&&req2.method==="POST"){let s=settings(),r=await askReviews({apiKey:s.geminiKey,model:s.geminiModel,firm:{...o,card:o.card},reviews:liveReviews(id)}),rep={at:Date.now(),ok:!!r.ok,text:r.ok?r.text:"",err:r.ok?"":r.err||"",model:r.model||s.geminiModel||"",used:r.used||0,total:r.total||0,truncated:!!r.truncated};return setAiReport2(id,rep),json2(res,r.ok?200:502,rep)}if(sub==="export.csv"&&req2.method==="GET"){let list=Object.values(reviewsOf(id)).sort((a,b)=>String(b.created||"").localeCompare(String(a.created||""))),q=v=>'"'+String(v??"").replace(/"/g,'""')+'"',rows=[["дата","изменён","оценка","учтён в рейтинге","подтверждён","автор","текст","ответ фирмы","дата ответа","номер отзыва","удалён в 2ГИС"].map(q).join(",")].concat(list.map(r=>[r.created?ymd(new Date(r.created)):"",r.edited?ymd(new Date(r.edited)):"",r.rating,r.rated===!1?"нет":"да",r.verified===!0?"да"+(r.trust?" ("+r.trust+")":""):r.verified===!1?"нет":"не знаем",r.author,r.text,r.answer?r.answer.text:"",r.answer&&r.answer.date?ymd(new Date(r.answer.date)):"",r.id,r.gone?ymd(new Date(r.gone)):""].map(q).join(",")));return res.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":'attachment; filename="2gis-'+id+'.csv"'}),res.end("\uFEFF"+rows.join(`
`))}}return json2(res,404,{error:"нет такого метода"})}var publicObject,init_places_api=__esm({"desktop/places-api.js"(){init_places();init_store();init_places_runner();init_places_bot();init_word_cloud();init_gemini();init_dates();init_gis_parse();init_places_reaction();init_places_signals();publicObject=o=>o&&{notify:objNotify(o,state().notify),id:o.id,url:o.link&&o.link.url,reviewsUrl:reviewsPageUrl(o.link),name:o.name,address:o.address,category:o.category,card:o.card,fill:o.fill||null,trustVer:o.trustVer||0,answersAt:o.answersAt||0,lastCheck:o.lastCheck,lastOk:o.lastOk,err:o.err,harvest:o.harvest,stored:o.stored||0,addedAt:o.addedAt,blockedUntil:o.blockedUntil||0,reread:o.reread?{startedAt:o.reread.startedAt,phase:o.reread.phase||"read",offset:o.reread.offset||0,total:o.reread.total??null,left:(o.reread.verify||[]).length,err:o.reread.err||""}:null,rereadDone:o.rereadDone||null,busy:busyId()===o.id}}});function siteHealth(entries,golden=null){let E=(entries||[]).filter(e=>e&&e.health),last=E[0];if(!last)return golden&&golden.state==="broken"?mk("broken","эталонные статьи: "+golden.why):mk("unknown","данных ещё нет — появятся после следующего прогона");let h=last.health;if(h.st==="skipped")return mk("skipped","помечен нерабочим в пресете");if(golden&&golden.state==="broken")return mk("broken","эталонные статьи: "+golden.why);if(h.st==="error")return mk("broken",REASON_RU[h.why]||"ошибка");if(DOWN.has(h.why))return mk("down",REASON_RU[h.why]);if(h.st==="needs_review")return mk("broken",REASON_RU[h.why]||h.why);let N=8;if((h.bodyN||0)>=N&&!(golden&&golden.state==="ok")){let prev=E.slice(1).map(e=>e.health).filter(x=>(x.bodyN||0)>=N).map(x=>x.bodyMed);if(prev.length>=2){let lo=Math.min(...prev),hi=Math.max(...prev),now=h.bodyMed;if(now*BODY_FACTOR<lo)return mk("broken","текст статей читается хуже обычного: обычно от "+lo+" знаков, в последнем прогоне "+now+" — ключ в тексте может не находиться");if(now>hi*BODY_FACTOR)return mk("broken","в текст статей попало лишнее: обычно до "+hi+" знаков, в последнем прогоне "+now+" — чужие заголовки могут давать ложные находки")}}if(h.st==="partial"||h.st==="ok_losses")return mk("partial",REASON_RU[h.why]||"часть страниц не проверена");let zeros=E.slice(0,3);return zeros.length===3&&zeros.every(e=>!e.found)&&E.slice(3).some(e=>e.found>0)?mk("quiet","раньше давал материал, а три прогона подряд — ноль; бывает и тихая неделя, но стоит открыть сайт и проверить"):golden&&golden.state==="watch"?mk("ok",golden.why):mk("ok","")}function mk(state2,why){return{state:state2,label:HEALTH_LABELS[state2],why:why||""}}function healthTable(runs2,golden={}){let bySite=new Map;for(let run of runs2||[])for(let l of run.log||[])!l||!l.site||/^\(.*\)$/.test(l.site)||l.channel==="facebook"||l.site==="youtube"||(bySite.has(l.site)||bySite.set(l.site,[]),bySite.get(l.site).push(l));let key=s=>String(s).toLowerCase().replace(/^https?:\/\//,"").replace(/^www\./,"").split("/")[0],rows=[...bySite].map(([site,entries])=>({site,...siteHealth(entries,golden[key(site)]||null),found:entries[0].found||0}));rows.sort((a,b)=>HEALTH_ORDER.indexOf(a.state)-HEALTH_ORDER.indexOf(b.state)||a.site.localeCompare(b.site));let counts={};for(let r of rows)counts[r.state]=(counts[r.state]||0)+1;return{rows,counts,runs:(runs2||[]).length}}var HEALTH_LABELS,HEALTH_ORDER,DOWN,REASON_RU,init_health=__esm({"extension/lib/health.js"(){init_golden();HEALTH_LABELS={ok:"здоров",partial:"прочитан не целиком",broken:"сломан",down:"недоступен",quiet:"замолчал",skipped:"пропущен",unknown:"нет данных"},HEALTH_ORDER=["broken","down","partial","quiet","unknown","ok","skipped"],DOWN=new Set(["unreachable","not_reachable","site_errors"]),REASON_RU={no_candidates:"ни одной ссылки-кандидата — похоже, сменился вход (поиск, карта, лента)",no_dates:"больше половины страниц без даты — похоже, сменилась разметка дат",entry_broken:"вход сайта (поиск, лента) ответил ошибкой — адрес устарел",moved:"материал нашёлся на другом домене — похоже, издание переехало",feed_cut:"лента канала оборвалась посреди обхода",no_stats:"движок не дошёл до разбора",site_errors:"сайт отвечал ошибками во время прогона — похоже на сбой сайта, а не на смену входа",none_in_period:"за период не прочитано ни одной статьи — входы дотягиваются только до старого",date_suspect:"дата со страницы расходится с датой в адресе — разбор берёт чужую дату",date_same:"у всех статей одна дата, день прогона — похоже, берём часы из шапки сайта",no_body:"текст статей не читается — ключ ищется только по заголовку",exception:"ошибка при обходе сайта",bad_url:"адрес источника не разобран",unreachable:"сайт не ответил ни обычным запросом, ни браузером",not_reachable:"больше половины статей не открылось (защита или таймаут)",time_budget:"упёрлись в бюджет времени",unchecked_pages:"часть страниц не проверена",budget_cap:"прочитана только часть статей периода (бюджет канала)"}}});function projectHealth(id){let runs2=[];for(let r of listRuns(id).slice(0,HEALTH_RUNS)){let full=getRun(id,r.ts);full&&Array.isArray(full.log)&&runs2.push({ts:r.ts,log:full.log})}let g=goldenInfo();return{...healthTable(runs2,g.verdicts||{}),golden:{at:g.at,hosts:g.hosts,busy:g.busy}}}var HEALTH_RUNS,init_health_view=__esm({"desktop/health-view.js"(){init_store();init_health();init_golden_store();HEALTH_RUNS=6}});var import_node_module,import_node_path16,req,pw,chromium,firefox,webkit,init_mc_pw=__esm({"mc-pw:mc-pw"(){import_node_module=require("node:module"),import_node_path16=require("node:path");process.env.PLAYWRIGHT_BROWSERS_PATH||(process.env.PLAYWRIGHT_BROWSERS_PATH=(0,import_node_path16.join)((0,import_node_path16.dirname)(process.execPath),"browsers"));req=(0,import_node_module.createRequire)(process.execPath),pw=req("playwright"),chromium=pw.chromium,firefox=pw.firefox,webkit=pw.webkit}});function cap(p,ms2,fallback){let tid=null;return Promise.race([Promise.resolve(p).catch(()=>fallback),new Promise(res=>{tid=setTimeout(()=>res(fallback),ms2)})]).then(v=>(tid&&clearTimeout(tid),v))}function capOwn(p,ms2,onLate){let tid=null,timer=new Promise(res=>{tid=setTimeout(()=>res(HUNG),ms2)});return Promise.race([p,timer]).then(v=>(clearTimeout(tid),v===HUNG&&onLate&&Promise.resolve(p).then(onLate,()=>{}),v),e=>{throw clearTimeout(tid),e})}function makeQueue(onHang,lanes=1){let chains=Array.from({length:4},()=>Promise.resolve()),waiting=new Array(4).fill(0),active2=Math.max(1,Math.min(4,lanes|0)),stats={ops:0,busyMs:0,byHost:{},lanes:active2},queued2=function(job,hardMs,fallback,where,host2){let lane=0;for(let i=1;i<active2;i++)waiting[i]<waiting[lane]&&(lane=i);waiting[lane]++;let run=async()=>{let t0=Date.now();try{return await cap(job(lane),hardMs,HUNG)}finally{let spent=Math.min(Date.now()-t0,hardMs);if(stats.ops++,stats.busyMs+=spent,host2){let h=stats.byHost[host2]||(stats.byHost[host2]={ops:0,ms:0});h.ops++,h.ms+=spent}waiting[lane]--}},p=chains[lane].then(run,run);return chains[lane]=p.then(()=>{},()=>{}),p.then(v=>{if(v!==HUNG)return v;try{onHang&&onHang(where,lane)}catch{}return fallback},()=>fallback)};return queued2.stats=stats,queued2.resetStats=()=>{stats.ops=0,stats.busyMs=0,stats.byHost={},stats.lanes=active2},queued2.setLanes=n=>{let was=active2;return active2=Math.max(1,Math.min(4,n|0||1)),stats.lanes=active2,{was,now:active2}},queued2.lanes=()=>active2,queued2}var HUNG,init_browser_guard=__esm({"desktop/browser-guard.js"(){HUNG=Symbol("hung")}});function jarReset(){JAR.clear(),primed.clear()}async function jarPut(ctx,url){let host2=hostOf5(url);if(!host2||!ctx)return 0;let cs=await cap(Promise.resolve().then(()=>ctx.cookies(url)),5e3,null);return!cs||!cs.length?0:(JAR.set(host2,{at:Date.now(),cookies:cs}),cs.length)}async function jarPrime(ctx,url,lane=0){let host2=hostOf5(url);if(!host2||!ctx)return 0;let e=JAR.get(host2);if(!e||Date.now()-e.at>JAR_TTL)return 0;let key=lane+"|"+host2+"|"+e.at;if(primed.has(key))return 0;primed.add(key);let have=await cap(Promise.resolve().then(()=>ctx.cookies(url)),5e3,null),mine=new Set((have||[]).map(c=>c.name)),add=e.cookies.filter(c=>!mine.has(c.name));return add.length?(await cap(Promise.resolve().then(()=>ctx.addCookies(add)),5e3,null),add.length):0}async function waitOutChallenge(page,maxMs=25e3,pollMs=1500){let t0=Date.now();for(;;){let st=await cap(Promise.resolve().then(()=>page.evaluate(()=>({t:document.title||"",b:(document.body&&document.body.innerText||"").slice(0,400),c:!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait, #challenge-form, #turnstile-wrapper")}))),8e3,null);if(!st)return!1;if(!st.c&&!CHALLENGE_RE.test(st.t+" "+st.b))return!0;if(Date.now()-t0>maxMs)return!1;await sleep5(Math.min(pollMs,Math.max(0,maxMs-(Date.now()-t0))+50))}}async function gotoPast(page,url,{gotoMs=2e4,challengeMs=25e3,deadline,lane=0,warmNeedMs=25e3,warmKeepMs=12e3,pollMs=1500}={}){let end2=deadline||Date.now()+75e3,left=()=>end2-Date.now(),ctx=(()=>{try{return page.context()}catch{return null}})();await jarPrime(ctx,url,lane);let go=(u,ms2)=>Promise.resolve().then(()=>page.goto(u,{waitUntil:"domcontentloaded",timeout:Math.max(3e3,Math.min(ms2,left()))})).catch(()=>null),pause=ms2=>Promise.resolve().then(()=>page.waitForTimeout(ms2)).catch(()=>{}),resp=await go(url,gotoMs);if(await pause(Math.min(700,Math.max(0,left()))),await waitOutChallenge(page,Math.min(challengeMs,left()),pollMs))return await jarPut(ctx,url),{passed:!0,resp,warmed:!1};let origin="";try{let u=new URL(url);(u.pathname!=="/"||u.search)&&(origin=u.origin)}catch{}if(!origin||left()<warmNeedMs)return{passed:!1,resp,warmed:!1};if(await go(origin+"/",15e3),!await waitOutChallenge(page,Math.min(challengeMs,left()-warmKeepMs),pollMs))return{passed:!1,resp,warmed:!0};await jarPut(ctx,origin+"/"),resp=await go(url,15e3);let passed=await waitOutChallenge(page,Math.min(challengeMs,left()),pollMs);return passed&&await jarPut(ctx,url),{passed,resp,warmed:!0}}var sleep5,hostOf5,JAR,primed,JAR_TTL,CHALLENGE_RE,init_browser_pass=__esm({"desktop/browser-pass.js"(){init_browser_guard();sleep5=ms2=>new Promise(r=>setTimeout(r,Math.max(0,ms2))),hostOf5=u=>{try{return new URL(String(u)).host.replace(/^www\./,"")}catch{return""}},JAR=new Map,primed=new Set,JAR_TTL=1200*1e3;CHALLENGE_RE=/just a moment|checking your browser|attention required|verifying you are human|подожд[иё]те|проверка браузера|один момент/i}});var render_exports={};__export(render_exports,{browserError:()=>browserError,browserStats:()=>browserStats2,browserWindows:()=>browserWindows,closeBrowser:()=>closeBrowser,closeRunBrowsers:()=>closeRunBrowsers2,openSocialLogin:()=>openSocialLogin,renderFacebook:()=>renderFacebook,renderFetch:()=>renderFetch2,renderScrape:()=>renderScrape2,renderSiteSearch:()=>renderSiteSearch2,resetBrowserStats:()=>resetBrowserStats2,setBrowserWindows:()=>setBrowserWindows});async function tryLaunch(useChrome,lane){let opts={headless:!1,viewport:null,args:["--disable-blink-features=AutomationControlled","--no-default-browser-check","--no-first-run"],ignoreDefaultArgs:["--enable-automation"]},dir=profileDir(useChrome,lane),c=await capOwn(chromium.launchPersistentContext(dir,useChrome?{...opts,channel:"chrome"}:opts),LAUNCH_MS,late=>late.close().catch(()=>{}));if(c===HUNG)throw new Error("окно не поднялось за "+LAUNCH_MS/1e3+" с");let pg=await capOwn(c.newPage(),3e4,late=>late.close().catch(()=>{}));if(pg===HUNG)throw await cap(c.close(),1e4),new Error("браузер не открыл страницу за 30 с");return await cap(pg.close(),5e3),c}async function context(lane=0){if(closings.get(lane))try{await closings.get(lane)}catch{}if(ctxs.get(lane))return ctxs.get(lane);for(let useChrome of[!0,!1])try{let c=await tryLaunch(useChrome,lane);return c.on("close",()=>{ctxs.get(lane)===c&&ctxs.delete(lane)}),lane===SOCIAL&&(socialByHand=!1),ctxs.set(lane,c),useChrome||console.log("[render] окно "+(lane+1)+": channel:chrome не ожил, работаю на встроенном Chromium"),c}catch(e){lastLaunchErr=(useChrome?"Chrome: ":"Chromium: ")+String(e&&e.message||e).split(`
`)[0].slice(0,200)}throw new Error("браузер не запустился (ни Chrome, ни встроенный Chromium): "+lastLaunchErr)}function dropContext(c,lane=0){ctxs.get(lane)===c&&ctxs.delete(lane);let p=cap(c.close(),15e3,null).then(()=>new Promise(r=>setTimeout(r,1500))).then(()=>{closings.get(lane)===p&&closings.delete(lane)});return closings.set(lane,p),p}async function closeBrowser(lane=null){if(lane!=null){let c=ctxs.get(lane);c&&await dropContext(c,lane);return}await Promise.all([...ctxs].map(([i,c])=>dropContext(c,i).catch(()=>{})))}async function closeRunBrowsers2(){await Promise.all([...ctxs].filter(([i])=>typeof i=="number"||i===SOCIAL&&!socialByHand).map(([i,c])=>dropContext(c,i).catch(()=>{})))}function setBrowserWindows(n){let r=queued.setLanes(n);if(r.now<r.was)for(let[i]of ctxs)typeof i=="number"&&i>=r.now&&closeBrowser(i).catch(()=>{});return r.now}function renderScrape2(url,opts={}){return queued(lane=>_render(url,opts,lane),HARD_RENDER,{items:[],cf:!1,err:"браузер завис — окно перезапущено"},"рендер",opts.host||hostOf5(url))}async function openPage(lane=0){let page=null;for(let a=0;a<2&&!page;a++){let c;try{c=await context(lane)}catch{return null}let pg=null;try{pg=await capOwn(c.newPage(),3e4,late=>late.close().catch(()=>{}))}catch(e){lastLaunchErr="страница не открылась: "+String(e&&e.message||e).split(`
`)[0].slice(0,200)}if(!pg||pg===HUNG){await dropContext(c,lane);continue}page=pg}return page}function renderFetch2(url,opts={}){return queued(lane=>_renderFetch(url,opts,lane),HARD_FETCH,{ok:!1,err:"браузер завис — окно перезапущено"},"браузер-фетч",opts.host||hostOf5(url))}async function _renderFetch(url,{timeoutMs=2e4,challengeMs=25e3,post=null}={},lane=0){let page=await openPage(lane);if(!page)return{ok:!1,err:"браузер не поднялся ("+browserError()+")"};try{if(post!=null){let origin=new URL(url).origin,pctx=(()=>{try{return page.context()}catch{return null}})();if(await jarPrime(pctx,origin+"/",lane),await page.goto(origin+"/",{waitUntil:"domcontentloaded",timeout:timeoutMs}).catch(()=>null),!await waitOutChallenge(page,challengeMs))return{ok:!1,cf:!0,err:"защита сайта не пройдена"};await jarPut(pctx,origin+"/");let path=new URL(url).pathname+new URL(url).search,out=await cap(page.evaluate(async([p,b])=>{let u=location.origin+p;try{let r=await fetch(u,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-Requested-With":"XMLHttpRequest"},body:b});return r.ok?{html:await r.text(),url:u}:{err:"HTTP "+r.status+" на "+u}}catch(e){return{err:String(e&&e.message||e)+" ("+u+")"}}},[path,post]),2e4,{err:"браузер не ответил на POST в срок"}),html2=out&&out.html||"";return{ok:!!html2,html:html2,posted:!!html2,err:html2?null:out&&out.err||"пустой ответ"}}let g=await gotoPast(page,url,{gotoMs:timeoutMs,challengeMs,lane,deadline:Date.now()+75e3}),resp=g.resp;if(!g.passed)return{ok:!1,cf:!0,err:"защита сайта не пройдена"+(g.warmed?" (пробовали и через главную)":"")};let html=await cap(page.content(),15e3,"");return{ok:!!html,status:resp?resp.status():0,html:html||""}}catch(e){return{ok:!1,err:e.message}}finally{await shut(page)}}function renderSiteSearch2(origin,keyword,opts={}){return queued(lane=>_renderSiteSearch(origin,keyword,opts,lane),HARD_SEARCH,{items:[],cf:!1,note:"браузер завис — окно перезапущено"},"браузер-поиск",opts.host||hostOf5(origin))}async function _renderSiteSearch(origin,keyword,{host:host2=""}={},lane=0){let words2=(Array.isArray(keyword)?keyword:[keyword]).map(w=>String(w||"").trim()).filter(Boolean);if(!words2.length)return{items:[],cf:!1,note:"пустой запрос"};let page=await openPage(lane);if(!page)return{items:[],cf:!1,note:"браузер не поднялся ("+browserError()+")"};let all=[],seen=new Set,anyCf=!1,note2="",sctx=(()=>{try{return page.context()}catch{return null}})();try{for(let i=0;i<words2.length;i++){if(i===0&&await jarPrime(sctx,origin+"/",lane),await page.goto(origin+"/",{waitUntil:"domcontentloaded",timeout:2e4}).catch(()=>{}),!await waitOutChallenge(page,i===0?25e3:8e3)){anyCf=!0,note2="защита сайта не пройдена";break}i===0&&await jarPut(sctx,origin+"/");let sel=await cap(inPage(page,findSearchSelector),8e3,null);if(sel&&sel.codeErr){note2=codeBroken(sel.codeErr);break}if(!sel&&(await cap(inPage(page,clickSearchToggle),8e3,null),await page.waitForTimeout(700).catch(()=>{}),sel=await cap(inPage(page,findSearchSelector),8e3,null),sel&&sel.codeErr)){note2=codeBroken(sel.codeErr);break}if(!sel){note2="строка поиска не найдена";break}await page.fill(sel,words2[i]).catch(()=>{}),await page.press(sel,"Enter").catch(()=>{}),await cap(page.evaluate(submitSearchForm,sel),8e3,null),await page.waitForLoadState("domcontentloaded",{timeout:15e3}).catch(()=>{}),await page.waitForTimeout(1800).catch(()=>{});let deadline=Date.now()+12e3,best=[],stable=0;for(;Date.now()<deadline;){let{items,cf,codeErr}=await scrapeFrames(page,{selectors:null,hostHint:host2,google:!1,bing:!1},deadline);if(codeErr&&!best.length){note2=codeBroken(codeErr);break}if(cf&&(anyCf=!0),items.length>best.length)best=items,stable=0;else if(best.length&&(stable++,stable>=2))break;await page.waitForTimeout(1200).catch(()=>{})}for(let it of best)it.url&&!seen.has(it.url)&&(seen.add(it.url),all.push(it))}return{items:all,cf:anyCf,note:note2}}catch(e){return{items:all,cf:anyCf,note:e.message}}finally{await shut(page)}}async function socialPage(){let c;try{c=await context(SOCIAL)}catch{return null}let pg=await capOwn(c.newPage(),3e4,late=>late.close().catch(()=>{}));return!pg||pg===HUNG?(await dropContext(c,SOCIAL),null):pg}async function openSocialLogin(url="https://www.facebook.com/"){let page=await socialPage();return page?(socialByHand=!0,await page.goto(url,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await cap(page.bringToFront(),5e3,null),{ok:!0}):{ok:!1,err:"браузер не поднялся ("+browserError()+")"}}function fbLoginProbe(){let has=s=>!!document.querySelector(s);return has('input[name="pass"]')||has("#loginform")||has('[data-testid="royal_login_form"]')}function renderFacebook(url,opts={}){return queued(()=>_facebook(url,opts),HARD_FB,{ok:!1,chunks:[],err:"браузер завис — окно перезапущено"},"фейсбук","facebook.com")}async function _facebook(url,{sinceMs=0,maxScrolls=3,settleMs=3e3}={}){let page=await socialPage();if(!page)return{ok:!1,chunks:[],err:"браузер не поднялся ("+browserError()+")"};let chunks=[],pending=[],onResp=resp=>{try{if(!/facebook\.com\/api\/graphql/i.test(resp.url()))return;pending.push(cap(resp.text(),15e3,"").then(x=>{x&&chunks.push(x)}).catch(()=>{}))}catch{}};page.on("response",onResp);let drain=async()=>{let p=pending.splice(0);p.length&&await Promise.all(p)};try{if(await page.goto(url,{waitUntil:"domcontentloaded",timeout:3e4}).catch(()=>{}),await cap(page.evaluate(fbLoginProbe),8e3,!1))return{ok:!1,chunks:[],needLogin:!0,err:"Фейсбук просит войти — нажмите «Войти в соцсети» и залогиньтесь в открывшемся окне"};let scrolls=0;for(let i=0;;i++){await page.waitForTimeout(settleMs).catch(()=>{}),await drain();let{posts}=parseFeed2(chunks.join(`
`)),oldest=oldestAt(posts);if(oldest&&oldest*1e3<sinceMs||i>=maxScrolls)break;await cap(page.evaluate(()=>window.scrollBy(0,document.body.scrollHeight)),8e3,null),scrolls++}return await drain(),{ok:chunks.length>0,chunks,scrolls,err:chunks.length?"":"Фейсбук не отдал ленту (страница пустая или изменился её вид)"}}catch(e){return{ok:chunks.length>0,chunks,err:String(e&&e.message||e)}}finally{try{page.off("response",onResp)}catch{}await drain().catch(()=>{}),await shut(page)}}async function _render(url,{selectors=null,host:host2="",google=!1,bing=!1,loadTimeoutMs=2e4,contentTimeoutMs=2e4}={},lane=0){let page=await openPage(lane);if(!page)return{items:[],cf:!1,err:"браузер не поднялся ("+browserError()+")"};try{let pass=await gotoPast(page,url,{gotoMs:loadTimeoutMs,challengeMs:25e3,lane,deadline:Date.now()+7e4}),status=0;try{status=pass&&pass.resp&&typeof pass.resp.status=="function"?pass.resp.status():0}catch{}if(status>=400)return{items:[],cf:!1,status,err:"HTTP "+status+" на "+url};let deadline=Date.now()+contentTimeoutMs,best=[],stable=0,lastCf=!1;for(;Date.now()<deadline;){let{items,cf,codeErr}=await scrapeFrames(page,{selectors,hostHint:host2,google,bing},deadline);if(codeErr&&!best.length)return{items:[],cf:!1,err:codeBroken(codeErr)};if(lastCf=cf,!cf&&items.length>best.length)best=items,stable=0;else if(best.length&&(stable++,stable>=2))break;await page.waitForTimeout(1300).catch(()=>{})}return{items:best,cf:lastCf}}catch{return{items:[],cf:!1}}finally{await shut(page)}}async function scrapeFrames(page,arg,deadline){let items=[],cf=!1,codeErr="",frames=[];try{frames=page.frames()}catch{return{items,cf}}let main=null;try{main=page.mainFrame()}catch{}for(let fr of frames){if(Date.now()>deadline)break;let r=await cap(inPage(fr,pageScrape,arg),8e3,null);if(r&&r.codeErr){fr===main&&(codeErr=r.codeErr);continue}r&&(r.cf&&(cf=!0),r.items&&(items=items.concat(r.items)))}let seen=new Set;return{items:items.filter(x=>x.url&&!seen.has(x.url)&&seen.add(x.url)),cf,codeErr}}async function inPage(frame,fn,arg){try{return await frame.evaluate(fn,arg)}catch(e){let m=String(e&&e.message||e).split(`
`)[0];return NAV_ERR.test(m)?null:{codeErr:m.replace(/^\w+\.evaluate: /,"").slice(0,160)}}}function findSearchSelector(){let inputs=[...document.querySelectorAll("input")],score=i=>{let t=(i.type||"").toLowerCase();if(t&&!["search","text",""].includes(t))return-1;let n=((i.name||"")+" "+(i.id||"")+" "+(i.placeholder||"")+" "+(i.className||"")+" "+(i.getAttribute("aria-label")||"")).toLowerCase();if(/e-?mail|mail|subscribe|подпис|рассыл|comment|коммент|phone|тел|promo|coupon|login|логин|город|city/.test(n))return-1;let s=0;t==="search"&&(s+=5),/(^|[^a-zа-я])(q|s|query|search|search_text|qsearch|searchword|keyword|text|k|wd)([^a-zа-я]|$)/.test(n)&&(s+=4),/поиск|search|найти|іздеу|искать|издеу/.test(n)&&(s+=3);let f=i.form;if(f){let fa=((f.getAttribute("action")||"")+" "+(f.className||"")+" "+(f.getAttribute("role")||"")).toLowerCase();(/search|поиск|[?&](q|s|query)=/.test(fa)||f.getAttribute("role")==="search")&&(s+=4)}let r=i.getBoundingClientRect();return r.width>40&&r.height>8&&(s+=2),s},best=null,bestS=0;for(let i of inputs){let s=score(i);s>bestS&&(bestS=s,best=i)}return!best||bestS<4?null:best.id?"#"+(window.CSS&&CSS.escape?CSS.escape(best.id):best.id):best.name?'input[name="'+String(best.name).replace(/"/g,'\\"')+'"]':null}function submitSearchForm(sel){let i=document.querySelector(sel);if(!i)return!1;let f=i.form||i.closest&&i.closest("form");if(f){let btn=f.querySelector('button[type="submit"],input[type="submit"],button:not([type])');if(btn)try{return btn.click(),!0}catch{}try{return f.requestSubmit?f.requestSubmit():f.submit(),!0}catch{}}return!1}function clickSearchToggle(){let b=document.querySelector('[aria-label*="поиск" i],[aria-label*="search" i],[title*="поиск" i],[title*="search" i],button[class*="search" i],a[class*="search" i],[class*="search-toggle" i],[class*="header-search" i],[class*="search-btn" i]');if(b)try{return b.click(),!0}catch{}return!1}function pageScrape({selectors,hostHint,google,bing}){let title=(document.title||"").toLowerCase(),bodyTxt=(document.body&&document.body.innerText||"").slice(0,3e3).toLowerCase(),cf=/just a moment|checking your browser|attention required|verifying you are human|cloudflare/.test(title+" "+bodyTxt)||!!document.querySelector("#challenge-running, #cf-challenge-running, #cf-please-wait");try{window.scrollTo(0,document.body.scrollHeight)}catch{}let abs=h=>{try{return new URL(h,location.href).href}catch{return null}},JUNK=/(^|\.)(google|gstatic|googleapis|googletagmanager|googlesyndication|doubleclick|facebook|twitter|x\.com|instagram|youtube|vk\.com|t\.me|mc\.yandex)\./i,realUrl=href=>{let u=abs(href);if(!u)return null;let host2;try{host2=new URL(u).host}catch{return null}if(!JUNK.test(host2))return u.split("#")[0];let found=decodeURIComponent(href).match(/https?:\/\/[^\s"'&<>]+/g)||[];for(let cand of found)try{let ch=new URL(cand).host.replace(/^www\./,"");if(!JUNK.test(ch)&&(!hostHint||ch===hostHint||ch.endsWith("."+hostHint)))return cand.split("#")[0]}catch{}return null},DATE_RE=/(\d+\s*(?:second|sec|minute|min|hour|hr|day|week|month|year)s?\s*ago|\d+\s*(?:секунд|минут|час|дн|день|недел|месяц|год|лет)[а-я]*\s*назад|yesterday|today|вчера|сегодня|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s*\d{0,4}|\d{1,2}\s+(?:янв|фев|мар|апр|ма[йя]|июн|июл|авг|сен|окт|ноя|дек)[а-я]*\.?\s*\d{2,4}(?:\s*(?:года|г\.))?|\d{1,2}\.\d{1,2}\.\d{4})/i,findDate=txt=>{let m=(txt||"").match(DATE_RE);return m?m[0]:""},cleanTitle=t=>(t||"").replace(DATE_RE,"").replace(/\s+/g," ").trim().slice(0,200),out=[];if(bing){document.querySelectorAll("li.b_algo").forEach(li=>{let a=li.querySelector("h2 a[href]")||li.querySelector("a[href]");if(!a||!a.href)return;let t=(a.textContent||"").replace(/\s+/g," ").trim(),capEl=li.querySelector(".b_caption p")||li.querySelector("p"),snip=capEl?(capEl.textContent||"").replace(/\s+/g," ").trim():"";out.push({url:a.href,title:t,date:"",snippet:snip.slice(0,400)})});let seenB=new Set;return{cf,items:out.filter(r=>r.url&&!seenB.has(r.url)&&seenB.add(r.url))}}if(google){document.querySelectorAll("a[href] h3, h3 a[href]").forEach(h3raw=>{let h3=h3raw.tagName==="H3"?h3raw:h3raw.closest("h3"),a=h3?h3.closest("a[href]")||h3.querySelector&&h3.querySelector("a[href]"):null;if(!h3||!a)return;let url=realUrl(a.getAttribute("href"));if(!url)return;let t=(h3.textContent||"").replace(/\s+/g," ").trim();if(t.length<8)return;let block=a.closest("div.g, div[data-hveid], div[data-rpos], div[jscontroller]")||a.parentElement,blockTxt=block&&block.innerText||"",snip=blockTxt.replace(/\s+/g," ").trim(),ti=snip.indexOf(t);ti>=0&&(snip=(snip.slice(0,ti)+" "+snip.slice(ti+t.length)).trim()),out.push({url,title:t,date:findDate(blockTxt),snippet:snip.slice(0,300)})});let seenG=new Set;return{cf,items:out.filter(r=>r.url&&!seenG.has(r.url)&&seenG.add(r.url))}}if(selectors&&selectors.container)document.querySelectorAll(selectors.container).forEach(c=>{let a=selectors.link&&c.querySelector(selectors.link)||(c.matches&&c.matches("a[href]")?c:c.querySelector("a[href]")),href=a&&a.getAttribute("href");if(!href)return;let url=realUrl(href);if(!url)return;let tEl=selectors.title&&c.querySelector(selectors.title)||a,dEl=selectors.date?c.querySelector(selectors.date):c.querySelector("time"),date=dEl&&(dEl.getAttribute&&dEl.getAttribute("datetime")||dEl.textContent)||"";date||(date=findDate(c.innerText)),out.push({url,title:cleanTitle(tEl&&tEl.textContent),date:(date||"").trim(),snippet:(c.innerText||"").slice(0,300)})});else{let linkEls=[...document.querySelectorAll("a[href]")].filter(a=>(a.textContent||"").trim().length>20),byClass={};for(let a of linkEls){let el=a;for(let up=0;up<6&&el.parentElement;up++){el=el.parentElement;let cn=el.className&&typeof el.className=="string"?el.className.trim().split(/\s+/)[0]:"";cn&&(byClass[cn]=byClass[cn]||new Set).add(el)}}let cardCls=null,bestN=2;for(let cn in byClass)byClass[cn].size>bestN&&(bestN=byClass[cn].size,cardCls=cn);let cards=null;if(cardCls)try{cards=[...document.querySelectorAll("."+CSS.escape(cardCls))]}catch{}let pushFrom=(cont,a)=>{let url=realUrl(a.getAttribute("href"));if(!url)return;let h;try{h=new URL(url)}catch{return}if(h.protocol!=="http:"&&h.protocol!=="https:")return;let txt=(a.textContent||"").trim();if(txt.length<=20)return;let box=cont||a.parentElement,dEl=box&&box.querySelector("time"),date=dEl&&(dEl.getAttribute("datetime")||dEl.textContent)||"";date||(date=findDate(box&&box.innerText)),out.push({url,title:cleanTitle(txt),date:(date||"").trim(),snippet:(box&&box.innerText||txt).slice(0,300)})};if(cards&&cards.length>=3)for(let c of cards){let a=c.querySelector("a[href]");a&&pushFrom(c,a)}document.querySelectorAll("a[href]").forEach(a=>{if((a.textContent||"").trim().length<=25)return;let cont=a.closest('article, li, [class*="result"], [class*="card"], [class*="item"], .gsc-webResult, .b-serp-item')||a.parentElement;pushFrom(cont,a)})}let seen=new Set;return{cf,items:out.filter(r=>r.url&&!seen.has(r.url)&&seen.add(r.url))}}var ctxs,closings,lastLaunchErr,LAUNCH_MS,profileDir,browserError,browserStats2,resetBrowserStats2,HARD_FETCH,HARD_RENDER,HARD_SEARCH,reviving,queued,browserWindows,shut,SOCIAL,HARD_FB,socialByHand,NAV_ERR,codeBroken,init_render=__esm({"desktop/render.js"(){init_mc_pw();init_paths();init_browser_guard();init_browser_pass();init_fb_parse();ctxs=new Map,closings=new Map,lastLaunchErr="",LAUNCH_MS=6e4,profileDir=(useChrome,lane)=>{let base=useChrome?USERDATA_DIR:USERDATA_CHROMIUM_DIR;return typeof lane=="string"?base+"-"+lane:lane?base+"-"+(lane+1):base};browserError=()=>lastLaunchErr||"причина неизвестна",browserStats2=()=>({...queued.stats,byHost:{...queued.stats.byHost}}),resetBrowserStats2=()=>{jarReset(),queued.resetStats()},HARD_FETCH=9e4,HARD_RENDER=12e4,HARD_SEARCH=12e4,reviving=[],queued=makeQueue((where,lane=0)=>{let key=where==="фейсбук"?SOCIAL:lane;console.log("[render] окно "+(key===SOCIAL?"соцсетей":key+1)+", "+where+": браузер не ответил в срок — перезапускаю"),reviving[lane]||(reviving[lane]=closeBrowser(key).catch(()=>{}).then(()=>{reviving[lane]=null}))},2);browserWindows=()=>queued.lanes();shut=page=>cap(page.close().catch(()=>{}),5e3);SOCIAL="social",HARD_FB=18e4,socialByHand=!1;NAV_ERR=/context was destroyed|detached|navigat|Target (page, context or browser )?(has been )?closed|Frame was|has been closed/i;codeBroken=m=>"браузер: наш код не выполнился в странице ("+m+")"}});var server_exports={};async function initRenderer(){try{let r=await Promise.resolve().then(()=>(init_render(),render_exports));setRenderer(r.renderScrape),setHtmlFetcher(r.renderFetch),setSiteSearcher(r.renderSiteSearch),setBrowserStats(r.browserStats,r.resetBrowserStats),setBrowserCloser(r.closeRunBrowsers),closeAllBrowsers=()=>r.closeBrowser(),setFacebookReader(r.renderFacebook),socialLogin=r.openSocialLogin,setBrowserWindows2=r.setBrowserWindows,applyBrowserWindows(),hasRenderer=!0,console.log("[Playwright: podklyuchyon — JS-sayty, brauzer-fetch i poisk sayta dostupny]")}catch{console.log("[Playwright: ne ustanovlen — tolko lyogkie kanaly. Zapusti setup-windows.bat]")}}function audienceSources(){let out=new Set;for(let p of listProjects()){for(let s of p.config&&p.config.sites||[])out.add(String(s));let full=getProject(p.id);for(let it of(full&&full.items||[]).slice(0,3e3))it&&it.source&&out.add(String(it.source))}return[...out]}var import_node_http2,import_node_dns,import_node_os3,import_node_url5,import_node_path17,__dir4,PORT,setBrowserWindows2,applyBrowserWindows,socialLogin,hasRenderer,closeAllBrowsers,aiProgress,json,readBody,server,init_server=__esm({"desktop/server.js"(){init_tls_heal();init_cookie_heal();import_node_http2=__toESM(require("node:http"),1),import_node_dns=__toESM(require("node:dns"),1),import_node_os3=__toESM(require("node:os"),1),import_node_url5=require("node:url"),import_node_path17=require("node:path");init_channels();init_store();init_runner();init_scheduler();init_locks();init_run_state();init_source_presets();init_known_sites();init_analytics();init_gemini();init_outbound();init_ai_runner();init_run_rate();init_update();init_code_update();init_period();init_share();init_telegram_bot();init_diag_report();init_report();init_license();init_mc_ui();init_csv();init_run_now();init_tg_commands();init_places_api();init_audience_store();init_health_view();init_golden_store();init_places_runner();init_places_bot();try{import_node_dns.default.setDefaultResultOrder("ipv4first")}catch{}__dir4=(0,import_node_path17.dirname)((0,import_node_url5.fileURLToPath)(__mcFileUrl)),PORT=process.env.PORT||8787,setBrowserWindows2=null,applyBrowserWindows=()=>{if(!setBrowserWindows2)return;let n=Math.max(1,Math.min(4,+settings().browserWindows||2));try{setBrowserWindows2(n)}catch{}},socialLogin=null;installTlsHeal();installCookieHeal();hasRenderer=!1,closeAllBrowsers=null;aiProgress=new Map,json=(res,code,obj)=>{res.writeHead(code,{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"}),res.end(JSON.stringify(obj))},readBody=req2=>new Promise(r=>{let b="";req2.on("data",c=>b+=c),req2.on("end",()=>{try{r(JSON.parse(b||"{}"))}catch{r({})}})});server=import_node_http2.default.createServer(async(req2,res)=>{let u=new URL(req2.url,"http://x"),path=u.pathname;if(req2.method==="GET"&&(path==="/"||path==="/index.html"))try{return res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"}),res.end(uiHtml())}catch{return res.writeHead(500),res.end("ui.html не найден")}if(!path.startsWith("/api/"))return res.writeHead(404),res.end("not found");let pass=settings().password||"";if(path==="/api/me")return json(res,200,{hasPassword:!!pass,playwright:hasRenderer,hasGeminiKey:!!settings().geminiKey,geminiModel:settings().geminiModel||"",geminiSnippets:sendSnippets(settings()),browserWindows:Math.max(1,Math.min(4,+settings().browserWindows||2))});if(path==="/api/quit"&&req2.method==="POST"){let ip=String(req2.socket.remoteAddress||"");if(!(ip==="127.0.0.1"||ip==="::1"||ip==="::ffff:127.0.0.1"))return json(res,403,{error:"выключить программу можно только с этого компьютера"});json(res,200,{ok:!0}),setTimeout(()=>process.exit(0),300);return}if(pass&&req2.headers["x-mc-key"]!==pass)return json(res,401,{error:"нужен пароль"});if(path==="/api/presets")return json(res,200,{sites:SITE_PRESETS,telegram:TELEGRAM_PRESETS,world:WORLD_PRESETS,ru:RU_PRESETS,latest:PRESETS_LATEST,dead:Object.entries(KNOWN).filter(([,v])=>v&&v.dead).map(([host2,v])=>({host:host2,note:String(v.note||"")}))});if(path==="/api/state")return json(res,200,{runs:snapshot()});try{if(path==="/api/places"||path.startsWith("/api/places/"))return await handlePlaces(req2,res,path,u,{json,readBody});if(path==="/api/audience"&&req2.method==="GET")return json(res,200,audienceInfo());if(path==="/api/audience"&&req2.method==="PUT"){let b=await readBody(req2);return json(res,200,setAudienceManual(b.manual))}if(path==="/api/audience/refresh"&&req2.method==="POST"){let r=await refreshAudienceNow(audienceSources());return json(res,r.ok?200:502,{...r,info:audienceInfo()})}if(path==="/api/projects"&&req2.method==="GET")return json(res,200,{projects:listProjects()});if(path==="/api/projects"&&req2.method==="POST"){let b=await readBody(req2),cfg=b.config||{};return(!Array.isArray(cfg.sites)||!cfg.sites.length)&&(cfg.sites=SITE_PRESETS.map(x=>x.url)),cfg.presetsAck||(cfg.presetsAck=PRESETS_LATEST),json(res,200,createProject(b.name,cfg))}if(path==="/api/social/login"&&req2.method==="POST"){if(!socialLogin)return json(res,503,{error:"нет браузера: запусти setup-windows.bat"});let r=await socialLogin();return json(res,r.ok?200:502,r)}if(path==="/api/social/visits"&&req2.method==="GET"){let{facebookProfile:facebookProfile2}=await Promise.resolve().then(()=>(init_fb_parse(),fb_parse_exports)),v=await Promise.resolve().then(()=>(init_social_visits(),social_visits_exports));v.reload();let list=(u.searchParams.get("profiles")||"").split(`
`).map(x=>facebookProfile2(x)).filter(Boolean),limit=Math.max(1,Math.min(6,+u.searchParams.get("limit")||v.DEFAULT_LIMIT));return json(res,200,{visits:list.map(p=>{let c=v.canVisit(p.label,{limit});return{label:p.label,used:c.used,limit:c.limit,ok:c.ok,why:c.why,nextAt:v.nextAt(p.label,{limit})}})})}if(path==="/api/license"&&req2.method==="GET")return json(res,200,licenseState());if(path==="/api/license"&&req2.method==="POST"){let b=await readBody(req2);return json(res,200,setKey(b.key||""))}if(path==="/api/code"&&req2.method==="GET")return u.searchParams.get("check")?json(res,200,await checkCode({force:!0})):json(res,200,codeState());if(path==="/api/code/drop"&&req2.method==="POST")return json(res,200,dropCode());if(path==="/api/update"&&req2.method==="GET")return u.searchParams.get("check")?json(res,200,await checkUpdate({force:!0})):json(res,200,updateState());if(path==="/api/update/download"&&req2.method==="POST"){let r=await downloadUpdate();return json(res,r.ok?200:502,{...r,state:updateState()})}if(path==="/api/update/install"&&req2.method==="POST"){let ip=String(req2.socket.remoteAddress||"");if(!(ip==="127.0.0.1"||ip==="::1"||ip==="::ffff:127.0.0.1"))return json(res,403,{error:"обновить можно только с этого компьютера"});let pre=installPrecheck({busy:running.size>0});if(!pre.ok)return json(res,409,pre);json(res,200,{ok:!0,version:pre.version}),closeAllBrowsers&&await Promise.race([closeAllBrowsers().catch(()=>{}),new Promise(r2=>setTimeout(r2,8e3))]);let r=installUpdate({busy:running.size>0});r.ok||console.log("[obnovlenie: ustanovshik ne zapustilsya — "+r.err+"]"),setTimeout(()=>process.exit(0),1500);return}if(path==="/api/settings"&&req2.method==="POST"){let b=await readBody(req2);return setSettings(b||{}),applyBrowserWindows(),json(res,200,{ok:!0})}if(path==="/api/gemini/models"&&req2.method==="GET"){let key=settings().geminiKey||"",r=await listModels({apiKey:key});return json(res,200,{...r,chain:modelChain(settings().geminiModel||"")})}let m=path.match(/^\/api\/projects\/([^/]+)(?:\/(.+))?$/);if(m){let id=m[1],sub=m[2]||"",p=getProject(id);if(!p&&!(sub==="stop"&&req2.method==="POST"&&active(id)))return json(res,404,{error:"проект не найден"});if(sub===""&&req2.method==="GET")return json(res,200,p);if(sub===""&&req2.method==="PUT"){let b=await readBody(req2);return json(res,200,updateProject(id,b))}if(sub===""&&req2.method==="DELETE")return deleteProject(id),json(res,200,{ok:!0});if(sub==="read"&&req2.method==="POST")return markRead(id),json(res,200,{ok:!0});if(sub==="telegram"&&req2.method==="POST"){let b=await readBody(req2),patch={};if(b.enabled!==void 0&&(patch.enabled=!!b.enabled),b.clearToken)patch.token="",patch.bot="",patch.chats=[],patch.offset=0,patch.err="";else if(b.token){let tok=String(b.token).trim(),prev=tgState(id);patch.token=tok,tok!==prev.token&&(patch.chats=[],patch.offset=0,patch.bot="",patch.err="")}let was=tgState(id),st=setTgState(id,patch),muted=0;return st.enabled&&!was.enabled&&(muted=markAllTgSent(id)),json(res,200,{ok:!0,tg:tgPublic(id),muted})}if(sub==="telegram/resend"&&req2.method==="POST"){let b=await readBody(req2),runs2=listRuns(id),ts=String(b.ts||runs2[0]&&runs2[0].ts||"");if(!ts)return json(res,400,{error:"прогонов ещё не было — присылать нечего"});let run=getRun(id,ts);if(!run)return json(res,404,{error:"архив прогона не найден"});let urls=(run.rows||[]).map(r2=>r2.url).filter(Boolean),freed=unmarkTgSent(id,urls),r=await notifyNew(id,{});return json(res,200,{ok:!0,ts,rows:urls.length,freed,sent:r.sent||0,rest:r.rest||0,skipped:r.skipped||""})}if(sub==="telegram/check"&&req2.method==="POST"){let st=tgState(id);if(!st.token)return json(res,400,{error:"сначала вставьте токен бота"});let who2=await checkBot(st.token);if(!who2.ok)return setTgState(id,{err:who2.err}),json(res,200,{ok:!1,error:who2.err,tg:tgPublic(id)});setTgState(id,{bot:who2.bot});let pulled=await pullFor(id);return setTgState(id,{err:pulled.err||""}),json(res,200,{ok:!0,tg:tgPublic(id)})}if(sub==="export.csv"&&req2.method==="GET")return res.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${id}.csv"`}),res.end("\uFEFF"+toCSV(p.items));if(sub==="run"&&req2.method==="POST"){let r=await runNow(id,"ручной");return r.code!==200?json(res,r.code,{error:r.error}):json(res,200,{added:r.added,total:r.total,ts:r.ts,log:r.log})}if(sub==="stop"&&req2.method==="POST"){let ok=askStop(id);return json(res,ok?200:409,ok?{ok:!0}:{error:"этот проект сейчас не собирает"})}if(sub==="diagnose"&&req2.method==="POST"){let b=await readBody(req2),site=String(b.site||"").trim();if(!site)return json(res,400,{error:"не указан сайт"});let c=p.config||{};if(!String(c.keyword||"").trim())return json(res,400,{error:"у проекта не задан запрос"});let per=resolvePeriod(c),r=await searchSite(site,{keyword:c.keyword,exclude:c.exclude||"",morph:c.morph!==!1,from:per.from,to:per.to,diag:!0});return json(res,200,{report:diagReport(site,r,per),channel:r.channel,note:r.note,found:r.rows.length,diag:r.diag})}if(sub==="items/delete"&&req2.method==="POST"){let b=await readBody(req2),urls=Array.isArray(b.urls)?b.urls.map(x=>String(x||"").trim()).filter(Boolean):[];if(!urls.length)return json(res,400,{error:"не выбрано ни одного материала"});let r=deleteItems(id,urls);return r?json(res,200,r):json(res,404,{error:"проект не найден"})}if(sub==="share.html"&&req2.method==="GET"){let out=buildShareHtml(id);return out?(res.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Content-Disposition":contentDisposition(shareFileName(out.snap))}),res.end(out.html)):json(res,404,{error:"проект не найден"})}if(sub==="analytics"&&req2.method==="GET"){let days=u.searchParams.get("days"),a=buildAnalytics(id,{days:days?+days:null});return a?json(res,200,a):json(res,404,{error:"проект не найден"})}if(sub==="day"&&req2.method==="GET"){let d=u.searchParams.get("d")||"";if(!/^\d{4}-\d{2}-\d{2}$/.test(d))return json(res,400,{error:"день задаётся как ГГГГ-ММ-ДД"});let items=dayItems(id,d);return items?json(res,200,{day:d,items}):json(res,404,{error:"проект не найден"})}if(sub==="gemini"&&req2.method==="POST"){let st=settings();if(!outbound(p.config||{}).ai)return json(res,403,{error:OUT_OFF});if(!st.geminiKey)return json(res,400,{error:"нет ключа Gemini (задайте в настройках)"});let b=await readBody(req2),a=buildAnalytics(id,{days:b.days?+b.days:null});if(!a)return json(res,404,{error:"проект не найден"});let kind=AI_KINDS.includes(normKind(b.kind))?normKind(b.kind):"review";if(kind==="verify"&&!verifyAllowed(p.schedule))return json(res,403,{error:verifyWhyNot(p.schedule)});let r,byItem=kind==="sentiment"||kind==="verify",prog={kind,at:Date.now(),done:!1,log:[],marked:0,asked:0};aiProgress.set(id,prog),byItem?r=await markRun(id,{kind,days:b.days?+b.days:null,analytics:a,settings:st,rescore:!!b.rescore,onStep:(e,s)=>{prog.log.push(e),prog.marked=s.marked,prog.asked=s.asked}}):(r=await reviewRun(id,{days:b.days?+b.days:null,analytics:a,settings:st}),r.log&&(prog.log=r.log)),prog.done=!0,prog.log=r.log||prog.log;let marked=byItem&&r.ok?r.items:null,note2=r.ok?kind==="sentiment"?sentimentNote(r):kind==="verify"?verifyNote(r):r.note||"":"";setAiReport(id,kind,{at:Date.now(),runTs:null,window:a.overview.windowFrom+" … "+a.overview.windowTo,text:r.ok?r.text:"",model:r.model||st.geminiModel||"",err:r.ok?"":r.err||"",auto:!1,items:marked,log:r.log||[],...note2?{note:note2}:{}});let{data:_sent,...out}=r;return json(res,r.ok?200:502,r.ok?{...out,items:marked,note:note2}:out)}if(sub==="ai-progress"&&req2.method==="GET")return json(res,200,aiProgress.get(id)||{done:!0,log:[]});if(sub==="usage"&&req2.method==="GET"){let u2=projectUsage(id),dateCacheBytes=0;try{let{statSync:statSync5,existsSync:existsSync10}=await import("node:fs"),{join:j}=await import("node:path"),{DATA_ROOT:DATA_ROOT2}=await Promise.resolve().then(()=>(init_paths(),paths_exports)),f=j(DATA_ROOT2,"date-cache.json");existsSync10(f)&&(dateCacheBytes=statSync5(f).size)}catch{}return json(res,200,{...u2,limitMb:diskLimitMb(p.config),dateCacheBytes})}if(sub==="report.txt"&&req2.method==="GET"){let a=buildAnalytics(id,{days:u.searchParams.get("days")?+u.searchParams.get("days"):null});return a?(res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),res.end(buildWindowReport(p.config||{},a))):json(res,404,{error:"проект не найден"})}if(sub==="health"&&req2.method==="GET")return json(res,200,projectHealth(id));if(sub==="health"&&req2.method==="POST"){let hosts=(p.config&&p.config.sites||[]).filter(s=>!/t\.me\//i.test(s)),r=await checkGoldenNow({hosts});return json(res,200,{...r,...projectHealth(id)})}if(sub==="runs"&&req2.method==="GET")return json(res,200,{runs:listRuns(id)});let lm=sub.match(/^runs\/([^/]+)\/log\.json$/);if(lm&&req2.method==="GET"){let data=runLogJson(id,lm[1]);return data?(res.writeHead(200,{"Content-Type":"application/json; charset=utf-8","Content-Disposition":contentDisposition(`лог ${lm[1].slice(0,10)} ${lm[1].slice(11,16)} — ${data.проект||id}.json`)}),res.end(JSON.stringify(data,null,2))):json(res,404,{error:"прогон не найден"})}let pm=sub.match(/^runs\/([^/]+)\/report\.txt$/);if(pm&&req2.method==="GET"){let run=getRun(id,pm[1]);return run?(res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"}),res.end(buildReport(p.config||{},run))):json(res,404,{error:"прогон не найден"})}let rm=sub.match(/^runs\/([^/]+)(\/export\.csv)?$/);if(rm&&req2.method==="GET"){let run=getRun(id,rm[1]);return run?rm[2]?(res.writeHead(200,{"Content-Type":"text/csv; charset=utf-8","Content-Disposition":`attachment; filename="${id}-${rm[1]}.csv"`}),res.end("\uFEFF"+toCSV(run.rows))):json(res,200,{...run,logsDir:LOGS_DIR}):json(res,404,{error:"прогон не найден"})}}return json(res,404,{error:"нет такого метода"})}catch(e){return json(res,500,{error:String(e&&e.message||e)})}});initRenderer().then(()=>server.listen(PORT,"0.0.0.0",()=>{let ips=[].concat(...Object.values(import_node_os3.default.networkInterfaces())).filter(i=>i.family==="IPv4"&&!i.internal).map(i=>i.address),ver="0.7.1",commit="9c23a4b";console.log(`
  mediachrome ${ver?ver+(commit?" ("+commit+")":""):"(iz ishodnikov)"}`),console.log(`  Kabinet:        http://localhost:${PORT}`),ips.forEach(ip=>console.log(`  S telefona:     http://${ip}:${PORT}   (v toy zhe Wi-Fi seti)`)),console.log(`  (zakryt — zakroy eto okno)
`),startScheduler(),startBotLoop(),setNotifier(notifyPlaces),startPlacesScheduler(),startPlacesBotLoop();let look=()=>{settings().updateCheck!==!1&&(checkUpdate().catch(()=>{}),checkCode().catch(()=>{}))};setTimeout(look,2e4),setInterval(look,6*3600*1e3);let audienceTick=()=>{if(settings().audienceRefresh===!1)return;let src=audienceSources();src.length&&audienceStale(src)&&refreshAudienceNow(src).catch(()=>{})},goldenTick=()=>{!running.size&&goldenStale()&&checkGoldenNow().catch(()=>{})};setTimeout(goldenTick,600*1e3),setInterval(goldenTick,3600*1e3),setTimeout(audienceTick,300*1e3),setInterval(audienceTick,3600*1e3),markCodeOk()}))}});var import_node_module2=require("node:module");init_code_update();var FLAG="__mcCodeLoaded";(async()=>{if(process.env.MC_EXE_VERSION||(process.env.MC_EXE_VERSION="0.7.1"),!globalThis[FLAG]){let ext=null;try{ext=activeCode()}catch{ext=null}if(ext){globalThis[FLAG]=ext.version;try{(0,import_node_module2.createRequire)(process.execPath)(ext.path);return}catch(e){globalThis[FLAG]="";try{markCodeBad(ext.version,String(e&&e.message||e))}catch{}console.log(`
  [obnovlenie mehanizmov `+ext.version+" ne zagruzilos - rabotaem po vshitomu kodu]"),console.log("  "+String(e&&e.message||e)+`
`)}}}process.env.MC_CODE_RUNNING=globalThis[FLAG]||"",await Promise.resolve().then(()=>(init_server(),server_exports))})();
