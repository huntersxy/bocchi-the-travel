import{_ as g,c as _,b as t,a as d,j as a,t as o,w as r,d as k,v as C,F as p,a0 as w,f as m,$ as x,r as c,o as u,m as O,u as $,E as S,p as I,k as N}from"./index-k0GuFXI5.js";import{C as j,H as B,P as E,E as V}from"./PlayCircleOutlined-CD1-JtWI.js";const e=s=>(I("data-v-182d3858"),s=s(),N(),s),T={class:"travels"},q={class:"info"},D={class:"card"},F=w('<div class="tools" data-v-182d3858><div class="circle" data-v-182d3858><span class="red box" data-v-182d3858></span></div><div class="circle" data-v-182d3858><span class="yellow box" data-v-182d3858></span></div><div class="circle" data-v-182d3858><span class="green box" data-v-182d3858></span></div></div>',1),H={class:"card__content"},P={class:"party_info"},z={class:"title"},L=e(()=>t("text",{class:"info_name"},"活动名:",-1)),Q=e(()=>t("br",null,null,-1)),A={class:"title"},G=e(()=>t("text",{class:"info_name"},"创建者:",-1)),J=e(()=>t("br",null,null,-1)),K={class:"title"},M=e(()=>t("text",{class:"info_name"},"成员数:",-1)),R=e(()=>t("br",null,null,-1)),U={class:"content"},W=e(()=>t("text",{class:"content_text"},"介绍:",-1)),X=e(()=>t("br",null,null,-1)),Y=e(()=>t("br",null,null,-1)),Z={style:{"text-align":"center","margin-top":"10px","margin-bottom":"10px"}},tt=e(()=>t("div",{class:"center"},[t("text",null,"所有计划")],-1)),et={class:"sty"},st=e(()=>t("br",null,null,-1)),nt=e(()=>t("br",null,null,-1)),ot=e(()=>t("br",null,null,-1)),at=e(()=>t("br",null,null,-1)),it={style:{"border-radius":"12px",border:"3px solid #f5f5f5",width:"fit-content","margin-top":"5px"}},lt={class:"foot"},dt={class:"create"},rt=e(()=>t("br",null,null,-1)),ct=e(()=>t("br",null,null,-1)),_t=e(()=>t("br",null,null,-1)),ut=e(()=>t("br",null,null,-1)),ht=e(()=>t("br",null,null,-1)),pt=e(()=>t("br",null,null,-1)),mt={data(){return{partynull:0,id:1,infodata:{id:5,founder_id:6,title:"1",content:"1",type:"",province:"1",city:"1",start_time:"2006-01-02",end_time:"2006-01-02",member_count:0,status:0,rectangle:""},items:[{id:5,title:"第一个",founder_id:6,action_type:2,rectangle:"1",route_json:"1",remark:"1hhhhhhhhhhhhhhhhhhhhhhhhhh",sequence:0,schedule_start_time:"2006-01-02 15:40",schedule_end_time:"2006-01-02 15:40",party_id:5,is_merged:1},{id:6,title:"吃饭",founder_id:6,action_type:2,rectangle:"1",route_json:"1",remark:"1",sequence:0,schedule_start_time:"2006-01-02 15:40",schedule_end_time:"2006-01-02 15:40",party_id:5,is_merged:1}]}},methods:{getin(){m.get("/bocchi/party/itinerary/show?party_id="+this.id).then(s=>{console.log(s),this.items=s.data.itineraries,console.log(s.data.itineraries),s.data.itineraries===void 0&&(this.partynull=1)}).catch(s=>{console.error(s)})},partyinit(){const s="/bocchi/party/info?party_id="+this.id,n={};m.get(s,n).then(i=>{console.log(i),this.infodata=i.data.party}).catch(i=>{console.error(i)})}},mounted(){this.id=Number(this.$route.params.id),this.partyinit(),this.getin()},computed:{getIcon(){return s=>{switch(s){case 1:return V;case 2:return E;case 3:return B;case 4:return j;case 5:return x}}},getType(){return s=>{switch(s){case 1:return"路线";case 2:return"活动";case 3:return"住宿";case 4:return"餐饮";case 5:return"其他";default:return"未知类型"}}}}},vt=Object.assign(mt,{__name:"party",setup(s){return(n,i)=>{const v=c("a-page-header"),h=c("a-timeline-item"),f=c("a-button"),y=c("a-timeline"),b=c("a-empty");return u(),_(p,null,[t("div",T,[d(v,{style:{border:"1px solid rgb(235, 237, 240)"},title:"活动详情",onBack:i[0]||(i[0]=()=>n.$router.go(-1))})]),t("div",q,[t("div",D,[F,t("div",H,[t("div",P,[t("div",z,[L,Q,a(o(n.infodata.title),1)]),t("div",A,[G,J,a(o(n.infodata.founder_id),1)]),t("div",K,[M,R,a(o(n.infodata.member_count),1)])]),t("div",U,[W,X,a('[本活动于"'+o(n.infodata.province)+","+o(n.infodata.city)+'"处进行] ',1),Y,a(o(n.infodata.content),1)]),t("div",Z," 起止时间:"+o(n.infodata.start_time)+" - "+o(n.infodata.end_time),1)])]),tt,t("div",et,[d(y,null,{default:r(()=>[(u(!0),_(p,null,O(n.items,l=>(u(),_("div",{key:l.id},[d(h,null,{default:r(()=>[a(" 计划: "+o(l.title)+" ",1),st,a(" 类型："+o(n.getType(l.action_type))+" ",1),nt,a(" 备注："+o(l.remark)+" ",1),ot,a(" 地点："+o(l.rectangle)+" ",1),at,a(" 时间："+o(l.schedule_start_time),1)]),_:2},1024),d(h,null,{dot:r(()=>[d($(S),{style:{"font-size":"16px"}})]),default:r(()=>[a(" 结束时间: "+o(l.schedule_end_time)+" ",1),t("div",it,[d(f,{type:"link",onClick:ft=>n.$router.push("/itinerarys/"+l.id)},{default:r(()=>[a(" 查看详细 ")]),_:2},1032,["onClick"])])]),_:2},1024)]))),128))]),_:1})]),k(t("div",null,[d(b)],512),[[C,n.partynull]])]),t("div",lt,[t("div",dt,[t("button",{class:"btn",onClick:i[1]||(i[1]=l=>n.$router.push("/Createplan/"+this.id))},"创建计划")])]),rt,ct,_t,ut,ht,pt],64)}}}),gt=g(vt,[["__scopeId","data-v-182d3858"]]);export{gt as default};