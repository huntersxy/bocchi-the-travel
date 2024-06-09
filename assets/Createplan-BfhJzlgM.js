import{m as F,n as T,q as D,s as N,_ as O,x as S,l as y,c as L,b as i,a as g,w as I,d as P,v as C,h as z,F as J,f as j,g as H,r as Y,o as x,j as U,p as V,k as W}from"./index-BwwmACn5.js";var q={exports:{}};(function(_,m){(function(v,f){_.exports=f(F)})(T,function(v){function f(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var M=f(v),a={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(o,n){return n==="W"?o+"周":o+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(o,n){var p=100*o+n;return p<600?"凌晨":p<900?"早上":p<1100?"上午":p<1300?"中午":p<1800?"下午":"晚上"}};return M.default.locale(a,null,!0),a})})(q);const G={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"},Q={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]},$={lang:D({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},G),timePickerLocale:D({},Q)};$.lang.ok="确定";var E={exports:{}};(function(_,m){(function(v,f){_.exports=f()})(T,function(){function v(e){var r=[];return e.AMapUI&&r.push(f(e.AMapUI)),e.Loca&&r.push(M(e.Loca)),Promise.all(r)}function f(e){return new Promise(function(r,t){var s=[];if(e.plugins)for(var u=0;u<e.plugins.length;u+=1)o.AMapUI.plugins.indexOf(e.plugins[u])==-1&&s.push(e.plugins[u]);if(n.AMapUI===a.failed)t("前次请求 AMapUI 失败");else if(n.AMapUI===a.notload){n.AMapUI=a.loading,o.AMapUI.version=e.version||o.AMapUI.version,u=o.AMapUI.version;var h=document.body||document.head,l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/ui/"+u+"/main.js",l.onerror=function(c){n.AMapUI=a.failed,t("请求 AMapUI 失败")},l.onload=function(){if(n.AMapUI=a.loaded,s.length)window.AMapUI.loadUI(s,function(){for(var c=0,w=s.length;c<w;c++){var k=s[c].split("/").slice(-1)[0];window.AMapUI[k]=arguments[c]}for(r();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()});else for(r();p.AMapUI.length;)p.AMapUI.splice(0,1)[0]()},h.appendChild(l)}else n.AMapUI===a.loaded?e.version&&e.version!==o.AMapUI.version?t("不允许多个版本 AMapUI 混用"):s.length?window.AMapUI.loadUI(s,function(){for(var c=0,w=s.length;c<w;c++){var k=s[c].split("/").slice(-1)[0];window.AMapUI[k]=arguments[c]}r()}):r():e.version&&e.version!==o.AMapUI.version?t("不允许多个版本 AMapUI 混用"):p.AMapUI.push(function(c){c?t(c):s.length?window.AMapUI.loadUI(s,function(){for(var w=0,k=s.length;w<k;w++){var B=s[w].split("/").slice(-1)[0];window.AMapUI[B]=arguments[w]}r()}):r()})})}function M(e){return new Promise(function(r,t){if(n.Loca===a.failed)t("前次请求 Loca 失败");else if(n.Loca===a.notload){n.Loca=a.loading,o.Loca.version=e.version||o.Loca.version;var s=o.Loca.version,u=o.AMap.version.startsWith("2"),h=s.startsWith("2");if(u&&!h||!u&&h)t("JSAPI 与 Loca 版本不对应！！");else{u=o.key,h=document.body||document.head;var l=document.createElement("script");l.type="text/javascript",l.src="https://webapi.amap.com/loca?v="+s+"&key="+u,l.onerror=function(c){n.Loca=a.failed,t("请求 AMapUI 失败")},l.onload=function(){for(n.Loca=a.loaded,r();p.Loca.length;)p.Loca.splice(0,1)[0]()},h.appendChild(l)}}else n.Loca===a.loaded?e.version&&e.version!==o.Loca.version?t("不允许多个版本 Loca 混用"):r():e.version&&e.version!==o.Loca.version?t("不允许多个版本 Loca 混用"):p.Loca.push(function(c){c?t(c):t()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var a;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(a||(a={}));var o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]},A=[],d=function(e){typeof e=="function"&&(n.AMap===a.loaded?e(window.AMap):A.push(e))};return{load:function(e){return new Promise(function(r,t){if(n.AMap==a.failed)t("");else if(n.AMap==a.notload){var s=e.key,u=e.version,h=e.plugins;s?(window.AMap&&location.host!=="lbs.amap.com"&&t("禁止多种API加载方式混用"),o.key=s,o.AMap.version=u||o.AMap.version,o.AMap.plugins=h||o.AMap.plugins,n.AMap=a.loading,u=document.body||document.head,window.___onAPILoaded=function(c){if(delete window.___onAPILoaded,c)n.AMap=a.failed,t(c);else for(n.AMap=a.loaded,v(e).then(function(){r(window.AMap)}).catch(t);A.length;)A.splice(0,1)[0]()},h=document.createElement("script"),h.type="text/javascript",h.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+o.AMap.version+"&key="+s+"&plugin="+o.AMap.plugins.join(","),h.onerror=function(c){n.AMap=a.failed,t(c)},u.appendChild(h)):t("请填写key")}else if(n.AMap==a.loaded)if(e.key&&e.key!==o.key)t("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)t("不允许多个版本 JSAPI 混用");else{if(s=[],e.plugins)for(u=0;u<e.plugins.length;u+=1)o.AMap.plugins.indexOf(e.plugins[u])==-1&&s.push(e.plugins[u]);s.length?window.AMap.plugin(s,function(){v(e).then(function(){r(window.AMap)}).catch(t)}):v(e).then(function(){r(window.AMap)}).catch(t)}else if(e.key&&e.key!==o.key)t("多个不一致的 key");else if(e.version&&e.version!==o.AMap.version)t("不允许多个版本 JSAPI 混用");else{var l=[];if(e.plugins)for(u=0;u<e.plugins.length;u+=1)o.AMap.plugins.indexOf(e.plugins[u])==-1&&l.push(e.plugins[u]);d(function(){l.length?window.AMap.plugin(l,function(){v(e).then(function(){r(window.AMap)}).catch(t)}):v(e).then(function(){r(window.AMap)}).catch(t)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,o={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},n={AMap:a.notload,AMapUI:a.notload,Loca:a.notload},p={AMap:[],AMapUI:[],Loca:[]}}}})})(E);var K=E.exports;const R=N(K),b=_=>(V("data-v-0e0dbb57"),_=_(),W(),_),X={class:"create"},Z={class:"input-box"},ee={class:"input-box"},oe={key:0},ae={class:""},te={class:"input-box"},ne={class:"input-box"},le={key:1},se={class:"rectangle"},ie={class:"nb"},re=b(()=>i("p",null,"省份＋城市＋区县＋城镇＋乡村＋街道＋门牌号码",-1)),ue=["src"],de={class:"input-box"},pe={class:"input-box"},ce={class:"time-box"},ve=b(()=>i("br",null,null,-1)),fe=b(()=>i("br",null,null,-1)),_e={class:"start-button"},me=b(()=>i("span",{class:"shadow"},null,-1)),he=b(()=>i("span",{class:"edge"},null,-1)),ge=b(()=>i("span",{class:"front"}," 创建 ",-1)),Me=[me,he,ge],Ae=b(()=>i("br",null,null,-1)),be=b(()=>i("br",null,null,-1)),we=b(()=>i("br",null,null,-1)),ye=b(()=>i("br",null,null,-1)),Ie=b(()=>i("br",null,null,-1));S.locale("zh-cn");const Ye={setup(){return{value:S("2015-01-01","YYYY-MM-DD"),dayjs:S,locale:$}},data(){return{trnumber:10,access_token:"",refresh_token:"",partyid:Number(this.$route.params.id),data:[],road:[],routejson:null,map:null,map2:null,resultjson:{},datadata:"https://restapi.amap.com/v3/staticmap?zoom=15&size=250*250&key=eae4d0491385d75b43d247afaef4247d&location=119.203480,26.058382"}},methods:{reremap(_){},rero(){this.map=new AMap.Map("roadmap",{viewMode:"3D",zoom:11,center:[116.397428,39.90923]})},remap(){this.map=new AMap.Map("rectangletmap",{viewMode:"2D",zoom:6,center:[116.397428,39.90923],map:null})},savero(_,m){const v=[{keyword:_},{keyword:m}];window._AMapSecurityConfig={securityJsCode:""},R.load({key:"",version:"2.0",plugins:["AMap.Scale"]}).then(f=>{let M=new f.Map("roadmap",{viewMode:"2D",zoom:18,center:[118.397428,39.90923]});f.plugin(["AMap.ToolBar","AMap.Driving","AMap.Polyline","AMap.Marker"],function(){var a=new f.ToolBar;M.addControl(a);var o=new f.Driving({map:M,panel:"panel"});o.search(v,function(n,p){n==="complete"?(console.log(p),console.log(p.routes)):console.log("获取驾车数据失败："+p)})})}).catch(f=>{console.log(f)})},savemap(_){j.get("https://restapi.amap.com/v3/geocode/geo?address="+_+"&key=4a456acf68e96cfd42e35d8915c9cee0").then(m=>{console.log(m),this.data=m.data.geocodes[0].location.split(","),this.reremap(m.data.geocodes[0].location.split(","))}).catch(m=>{console.error(m)})},partycreate(_,m,v,f,M,a,o,n){const p=n[0],d=new Date(p).toISOString().slice(0,50),e=n[1],t=new Date(e).toISOString().slice(0,50);console.log(t),j.post("/bocchi/party/itinerary/create?title="+_+"&action_type="+m+"&party_id="+v+"&rectangle="+f+"&route_json="+M+","+a+"&remark="+o+"&schedule_start_time="+d+"&schedule_end_time="+t,{},{headers:{"access-token":this.access_token}}).then(s=>{console.log(s.data),s.data.base.code==1e4&&(console.log("创建成功"),this.$router.go(-1))}).catch(s=>{console.log(s),alert("创建失败，请检查你的输入！")})}},mounted(){this.partyid=Number(this.$route.params.id),this.access_token=H.get("access_token"),this.refresh_token=H.get("refresh_token")},computed:{getlocal(){return _=>{if(_==_)return"https://restapi.amap.com/v3/staticmap?zoom=17&size=250*250&key=eae4d0491385d75b43d247afaef4247d&location="+this.data}}},watch:{}},Ue=Object.assign(Ye,{__name:"Createplan",setup(_){const m=y(""),v=y("2"),f=y(""),M=y(""),a=y(""),o=y(),n=y(),p=y([{value:"1",label:"路线"},{value:"2",label:"活动"},{value:"3",label:"住处"},{value:"4",label:"吃喝"},{value:"5",label:"其他"}]);return(A,d)=>{const e=Y("a-page-header"),r=Y("a-divider"),t=Y("a-input"),s=Y("a-select"),u=Y("a-textarea"),h=Y("a-range-picker");return x(),L(J,null,[i("div",null,[g(e,{style:{border:"1px solid rgb(235, 237, 240)"},title:"创建计划",onBack:d[0]||(d[0]=()=>A.$router.go(-1))})]),i("div",X,[g(r,{orientation:"left",class:"separate"},{default:I(()=>[U("计划名")]),_:1}),i("div",Z,[g(t,{value:m.value,"onUpdate:value":d[1]||(d[1]=l=>m.value=l),bordered:!1,size:"large",placeholder:"标题"},null,8,["value"])]),g(r,{orientation:"left",class:"separate"},{default:I(()=>[U("活动类型")]),_:1}),i("div",ee,[g(s,{value:v.value,"onUpdate:value":d[2]||(d[2]=l=>v.value=l),size:"large",style:{width:"100%"},bordered:!1,placeholder:"请选择你的活动类型",options:p.value},null,8,["value","options"])]),P(g(r,{orientation:"left",class:"separate"},{default:I(()=>[U("路线")]),_:1},512),[[C,!(v.value-1)]]),v.value-1?z("",!0):(x(),L("div",oe,[i("div",ae,[i("div",te,[g(t,{value:M.value,"onUpdate:value":d[3]||(d[3]=l=>M.value=l),bordered:!1,size:"large",placeholder:"出发点(系统会提供路径地图)"},null,8,["value"])]),i("div",ne,[g(t,{value:a.value,"onUpdate:value":d[4]||(d[4]=l=>a.value=l),bordered:!1,size:"large",placeholder:"结束点"},null,8,["value"])])])])),P(g(r,{orientation:"left",class:"separate"},{default:I(()=>[U("地点")]),_:1},512),[[C,v.value-1]]),v.value-1?(x(),L("div",le,[i("div",se,[i("div",ie,[re,i("img",{src:A.getlocal()},null,8,ue),i("div",de,[g(t,{value:o.value,"onUpdate:value":d[5]||(d[5]=l=>o.value=l),bordered:!1,size:"large",placeholder:"输入地点保存后可获取参考地图(可选)"},null,8,["value"])]),i("button",{onClick:d[6]||(d[6]=l=>A.reremap())},"刷新地图"),i("button",{onClick:d[7]||(d[7]=l=>A.savemap(o.value))},"保存地点")])])])):z("",!0),g(r,{orientation:"left",class:"separate"},{default:I(()=>[U("备注")]),_:1}),i("div",pe,[g(u,{value:n.value,"onUpdate:value":d[8]||(d[8]=l=>n.value=l),placeholder:"备注",rows:4,size:"large",bordered:!1},null,8,["value"])]),g(r,{orientation:"left",class:"separate"},{default:I(()=>[U("起止时间")]),_:1}),i("div",ce,[g(h,{value:f.value,"onUpdate:value":d[9]||(d[9]=l=>f.value=l),size:"large",bordered:!1,"show-time":{format:"HH:mm"}},null,8,["value"])]),ve,fe,i("div",_e,[i("button",{class:"pushable",onClick:d[10]||(d[10]=l=>A.partycreate(m.value,v.value,A.partyid,this.data,M.value,a.value,n.value,f.value))},Me)])]),Ae,be,we,ye,Ie],64)}}}),Le=O(Ue,[["__scopeId","data-v-0e0dbb57"]]);export{Le as default};
