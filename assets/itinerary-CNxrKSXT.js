import{A as K,B as Q,D as q,E as k,G as L,N as M,H as W,J as R,l as P,K as C,u as i,L as O,o as d,c as y,M as V,O as X,Q as Y,z as Z,b,S as f,U as x,y as z,w as m,V as ee,h as v,t as p,a as u,F as te,f as se,W as ne,r as j,j as _}from"./index-CBLnuBGz.js";import{C as ae,H as oe,P as re,E as ie}from"./PlayCircleOutlined-ChwXex6E.js";const le=e=>e===void 0,ce=e=>typeof e=="number",ue=e=>K(e)?!Number.isNaN(Number(e)):!1;function de(e,s="px"){if(!e)return"";if(ce(e)||ue(e))return`${e}${s}`;if(K(e))return e}const D="__epPropKey",A=e=>e,me=e=>q(e)&&!!e[D],pe=(e,s)=>{if(!q(e)||me(e))return e;const{values:t,required:r,default:n,type:l,validator:$}=e,S={type:l,required:!!r,validator:t||$?w=>{let h=!1,N=[];if(t&&(N=Array.from(t),k(e,"default")&&N.push(n),h||(h=N.includes(w))),$&&(h||(h=$(w))),!h&&N.length>0){const E=[...new Set(N)].map(I=>JSON.stringify(I)).join(", ");L(`Invalid prop: validation failed${s?` for prop "${s}"`:""}. Expected one of [${E}], got value ${JSON.stringify(w)}.`)}return h}:void 0,[D]:!0};return k(e,"default")&&(S.default=n),S},F=e=>Q(Object.entries(e).map(([s,t])=>[s,pe(t,s)])),fe=A([String,Object,Function]),H=(e,s)=>{if(e.install=t=>{for(const r of[e,...Object.values(s??{})])t.component(r.name,r)},s)for(const[t,r]of Object.entries(s))e[t]=r;return e},ye=e=>(e.install=M,e),T="el",_e="is-",g=(e,s,t,r,n)=>{let l=`${e}-${s}`;return t&&(l+=`-${t}`),r&&(l+=`__${r}`),n&&(l+=`--${n}`),l},ve=Symbol("namespaceContextKey"),he=e=>{const s=W()?R(ve,P(T)):P(T);return C(()=>i(s)||T)},B=(e,s)=>{const t=he();return{namespace:t,b:(a="")=>g(t.value,e,a,"",""),e:a=>a?g(t.value,e,"",a,""):"",m:a=>a?g(t.value,e,"","",a):"",be:(a,o)=>a&&o?g(t.value,e,a,o,""):"",em:(a,o)=>a&&o?g(t.value,e,"",a,o):"",bm:(a,o)=>a&&o?g(t.value,e,a,"",o):"",bem:(a,o,c)=>a&&o&&c?g(t.value,e,a,o,c):"",is:(a,...o)=>{const c=o.length>=1?o[0]:!0;return a&&c?`${_e}${a}`:""},cssVar:a=>{const o={};for(const c in a)a[c]&&(o[`--${t.value}-${c}`]=a[c]);return o},cssVarName:a=>`--${t.value}-${a}`,cssVarBlock:a=>{const o={};for(const c in a)a[c]&&(o[`--${t.value}-${e}-${c}`]=a[c]);return o},cssVarBlockName:a=>`--${t.value}-${e}-${a}`}};var J=(e,s)=>{const t=e.__vccOpts||e;for(const[r,n]of s)t[r]=n;return t};const ge=F({size:{type:A([Number,String])},color:{type:String}}),$e=O({name:"ElIcon",inheritAttrs:!1}),Ne=O({...$e,props:ge,setup(e){const s=e,t=B("icon"),r=C(()=>{const{size:n,color:l}=s;return!n&&!l?{}:{fontSize:le(n)?void 0:de(n),"--color":l}});return(n,l)=>(d(),y("i",X({class:i(t).b(),style:i(r)},n.$attrs),[V(n.$slots,"default")],16))}});var be=J(Ne,[["__file","icon.vue"]]);const Oe=H(be),we=O({name:"ElTimeline",setup(e,{slots:s}){const t=B("timeline");return Y("timeline",s),()=>Z("ul",{class:[t.b()]},[V(s,"default")])}}),Pe=F({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:fe},hollow:{type:Boolean,default:!1}}),Ve=O({name:"ElTimelineItem"}),Se=O({...Ve,props:Pe,setup(e){const s=e,t=B("timeline-item"),r=C(()=>[t.e("node"),t.em("node",s.size||""),t.em("node",s.type||""),t.is("hollow",s.hollow)]);return(n,l)=>(d(),y("li",{class:f([i(t).b(),{[i(t).e("center")]:n.center}])},[b("div",{class:f(i(t).e("tail"))},null,2),n.$slots.dot?v("v-if",!0):(d(),y("div",{key:0,class:f(i(r)),style:x({backgroundColor:n.color})},[n.icon?(d(),z(i(Oe),{key:0,class:f(i(t).e("icon"))},{default:m(()=>[(d(),z(ee(n.icon)))]),_:1},8,["class"])):v("v-if",!0)],6)),n.$slots.dot?(d(),y("div",{key:1,class:f(i(t).e("dot"))},[V(n.$slots,"dot")],2)):v("v-if",!0),b("div",{class:f(i(t).e("wrapper"))},[!n.hideTimestamp&&n.placement==="top"?(d(),y("div",{key:0,class:f([i(t).e("timestamp"),i(t).is("top")])},p(n.timestamp),3)):v("v-if",!0),b("div",{class:f(i(t).e("content"))},[V(n.$slots,"default")],2),!n.hideTimestamp&&n.placement==="bottom"?(d(),y("div",{key:1,class:f([i(t).e("timestamp"),i(t).is("bottom")])},p(n.timestamp),3)):v("v-if",!0)],2)],2))}});var U=J(Se,[["__file","timeline-item.vue"]]);const Te=H(we,{TimelineItem:U}),Ce=ye(U),Be={class:"travels"},Ee=b("br",null,null,-1),Ie={key:0,style:{"justify-content":"center"}},ke={key:1},ze={props:{},data(){return{id:1,party:{start_time:"2006-01-02",end_time:"2006-01-03"},info:{id:2,title:"1",founder_id:6,action_type:2,rectangle:"1",route_json:"1",remark:"1",sequence:0,schedule_start_time:"2006-01-02 15:40",schedule_end_time:"2006-01-02 15:40",party_id:5,is_merged:1,partynull:0}}},methods:{init(){const e="/bocchi/party/itinerary/info?itinerary_id="+this.id,s={};se.get(e,s).then(t=>{console.log(t),this.info=t.data.itinerary,t.data.base.code===10007&&(this.partynull=1,console.log(this.partynull))}).catch(t=>{console.error(t)})}},mounted(){this.id=Number(this.$route.params.id),this.init()},computed:{getIcon(){return e=>{switch(e){case 1:return ie;case 2:return re;case 3:return oe;case 4:return ae;case 5:return ne}}},getType(){return e=>{switch(e){case 1:return"路线";case 2:return"活动";case 3:return"住宿";case 4:return"餐饮";case 5:return"其他";default:return"未知类型"}}}}},De=Object.assign(ze,{__name:"itinerary",setup(e){return P(!1),P(!1),(s,t)=>{const r=j("a-page-header"),n=Ce,l=Te,$=j("a-empty");return d(),y(te,null,[b("div",Be,[u(r,{style:{border:"1px solid rgb(235, 237, 240)"},title:"计划详情",onBack:t[0]||(t[0]=()=>s.$router.go(-1))})]),Ee,s.partynull?v("",!0):(d(),y("div",Ie,[u(l,{style:{"max-width":"600px","margin-left":"10%"}},{default:m(()=>[u(n,null,{default:m(()=>[_("计划名:"+p(s.info.title),1)]),_:1}),u(n,null,{default:m(()=>[_("序列:"+p(s.info.sequence),1)]),_:1}),u(n,null,{default:m(()=>[_(" 创建者:"+p(s.info.founder_id),1)]),_:1}),u(n,null,{default:m(()=>[_(" 类型："+p(s.getType(s.info.action_type)),1)]),_:1}),u(n,null,{default:m(()=>[_(" 备注："+p(s.info.remark),1)]),_:1}),u(n,null,{default:m(()=>[_(" 地点："+p(s.info.rectangle),1)]),_:1}),u(n,null,{default:m(()=>[_(" 开始时间："+p(s.info.schedule_start_time),1)]),_:1}),u(n,null,{default:m(()=>[_(" 结束时间: "+p(s.info.schedule_end_time),1)]),_:1})]),_:1})])),s.partynull?(d(),y("div",ke,[u($)])):v("",!0),v("",!0)],64)}}});export{De as default};
