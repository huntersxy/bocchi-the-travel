import{_ as g,c as p,b as t,a as r,j as a,t as l,w as d,d as k,v as C,F as y,a7 as $,f as u,g as w,a4 as O,r as c,o as h,z as T,A as x,W as I,u as S,C as B,p as E,k as j}from"./index-CfWM8HiQ.js";import{C as N,H as V,P as z,E as D}from"./PlayCircleOutlined-MTrzxLhx.js";const n=s=>(E("data-v-9b2f0001"),s=s(),j(),s),q={class:"travels"},F={class:"info"},H={class:"card"},P=$('<div class="tools" data-v-9b2f0001><div class="circle" data-v-9b2f0001><span class="red box" data-v-9b2f0001></span></div><div class="circle" data-v-9b2f0001><span class="yellow box" data-v-9b2f0001></span></div><div class="circle" data-v-9b2f0001><span class="green box" data-v-9b2f0001></span></div></div>',1),A={class:"card__content"},L={class:"party_info"},Q={class:"title"},W=n(()=>t("text",{class:"info_name"},"活动名:",-1)),G=n(()=>t("br",null,null,-1)),J={class:"title"},K=n(()=>t("text",{class:"info_name"},"创建者:",-1)),M=n(()=>t("br",null,null,-1)),R={class:"title"},U=n(()=>t("text",{class:"info_name"},"成员数:",-1)),X=n(()=>t("br",null,null,-1)),Y={class:"content"},Z=n(()=>t("text",{class:"content_text"},"介绍:",-1)),tt=n(()=>t("br",null,null,-1)),et=n(()=>t("br",null,null,-1)),st={style:{"text-align":"center","margin-top":"10px","margin-bottom":"10px"}},nt={style:{"text-align":"center","margin-top":"10px","margin-bottom":"10px"}},ot=n(()=>t("div",{class:"center"},[t("text",null,"所有计划")],-1)),it={class:"sty"},at=n(()=>t("br",null,null,-1)),lt=n(()=>t("br",null,null,-1)),rt=n(()=>t("br",null,null,-1)),dt={style:{"border-radius":"12px",border:"3px solid #f5f5f5",width:"fit-content","margin-top":"5px"}},ct={class:"foot"},_t={class:"create"},ut=n(()=>t("br",null,null,-1)),ht=n(()=>t("br",null,null,-1)),pt=n(()=>t("br",null,null,-1)),mt=n(()=>t("br",null,null,-1)),yt=n(()=>t("br",null,null,-1)),ft=n(()=>t("br",null,null,-1)),bt=n(()=>t("br",null,null,-1)),vt=n(()=>t("br",null,null,-1)),gt={data(){return{partynull:0,id:1,infodata:{id:5,founder_id:6,title:"1",content:"1",type:"",province:"1",city:"1",start_time:"2006-01-02",end_time:"2006-01-02",member_count:0,status:0,rectangle:""},items:[{id:5,title:"第一个",founder_id:6,action_type:2,rectangle:"1",route_json:"1",remark:"1hhhhhhhhhhhhhhhhhhhhhhhhhh",sequence:0,schedule_start_time:"2006-01-02 15:40",schedule_end_time:"2006-01-02 15:40",party_id:5,is_merged:1},{id:6,title:"吃饭",founder_id:6,action_type:4,rectangle:"1",route_json:"1",remark:"1",sequence:0,schedule_start_time:"2006-01-02 15:40",schedule_end_time:"2006-01-02 15:40",party_id:5,is_merged:1}]}},methods:{ToEnd(){u.get("/bocchi/party/status?party_id="+this.id+"&action_type=1",{headers:{"access-token":this.access_token}}),this.$router.push(`/finish/${this.id}`)},Tomember(){this.$router.push(`/member/${this.id}`)},tomerplan(){this.$router.push(`/merplan/${this.id}`)},tocreate(){this.$router.push(`/Createplan/${this.id}`)},tomyitinerarys(){this.$router.push(`/myitinerarys/${this.id}`)},apply_party(){u.get("/bocchi/party/apply?party_id="+this.id,{headers:{"access-token":this.access_token}}).then(s=>{console.log(s),alert("申请成功！")}).catch(s=>{console.error(s)})},getin(){u.get("/bocchi/party/itinerary/show?party_id="+this.id,{headers:{"access-token":this.access_token}}).then(s=>{console.log(s),this.items=s.data.itineraries,console.log(s.data.itineraries),s.data.itineraries===void 0&&(this.partynull=1)}).catch(s=>{console.error(s)})},partyinit(){const s="/bocchi/party/get?party_id="+this.id,e={};u.get(s,e).then(o=>{console.log(o),this.infodata=o.data.party}).catch(o=>{console.error(o)})}},mounted(){console.log(this.$router),this.id=this.$route.params.id,this.access_token=w.get("access_token"),this.partyinit(),this.getin()},computed:{getIcon(){return s=>{switch(s){case 1:return D;case 2:return z;case 3:return V;case 4:return N;case 5:return O}}},getType(){return s=>{switch(s){case 1:return"路线";case 2:return"活动";case 3:return"住宿";case 4:return"餐饮";case 5:return"其他";default:return"未知类型"}}}}},kt=Object.assign(gt,{__name:"party",setup(s){return(e,o)=>{const f=c("a-page-header"),_=c("a-button"),m=c("a-timeline-item"),b=c("a-timeline"),v=c("a-empty");return h(),p(y,null,[t("div",q,[r(f,{style:{border:"1px solid rgb(235, 237, 240)"},title:"活动详情",onBack:o[0]||(o[0]=()=>e.$router.go(-1))})]),t("div",F,[t("div",H,[P,t("div",A,[t("div",L,[t("div",Q,[W,G,a(l(e.infodata.title),1)]),t("div",J,[K,M,a(l(e.infodata.founder_id),1)]),t("div",R,[U,X,a(l(e.infodata.member_count),1)])]),t("div",Y,[Z,tt,a('[本活动于"'+l(e.infodata.province)+","+l(e.infodata.city)+'"处进行] ',1),et,a(l(e.infodata.content),1)]),t("div",st," 起止时间:"+l(e.infodata.start_time)+" - "+l(e.infodata.end_time),1),t("div",nt,[r(_,{type:"dashed",onClick:o[1]||(o[1]=i=>e.apply_party())},{default:d(()=>[a("申请加入")]),_:1}),r(_,{style:{"margin-left":"10px"},onClick:o[2]||(o[2]=i=>e.Tomember())},{default:d(()=>[a("查看成员")]),_:1}),r(_,{type:"primary",onClick:o[3]||(o[3]=i=>e.ToEnd()),style:{"margin-left":"10px"}},{default:d(()=>[a("结束行程")]),_:1})])])]),ot,t("div",it,[r(b,null,{default:d(()=>[(h(!0),p(y,null,T(e.items,i=>(h(),p("div",{key:i.id},[r(m,null,{dot:d(()=>[(h(),x(I(e.getIcon(i.action_type)),{style:{"font-size":"16px"}}))]),default:d(()=>[a(" 计划: "+l(i.title)+" ",1),at,a(" 类型："+l(e.getType(i.action_type))+" ",1),lt,a(" 内容："+l(i.remark)+" ",1),rt,a(" 时间："+l(i.schedule_start_time),1)]),_:2},1024),r(m,null,{dot:d(()=>[r(S(B),{style:{"font-size":"16px"}})]),default:d(()=>[a(" 结束时间: "+l(i.schedule_end_time)+" ",1),t("div",dt,[r(_,{type:"link",onClick:Ct=>e.$router.push("/itinerarys/"+i.id)},{default:d(()=>[a(" 查看详细 ")]),_:2},1032,["onClick"])])]),_:2},1024)]))),128))]),_:1})]),k(t("div",null,[r(v)],512),[[C,e.partynull]])]),t("div",ct,[t("div",_t,[t("button",{class:"btn",onClick:o[4]||(o[4]=(...i)=>e.tocreate&&e.tocreate(...i))},"创建计划"),ut,t("button",{class:"btn",onClick:o[5]||(o[5]=(...i)=>e.tomyitinerarys&&e.tomyitinerarys(...i))},"查看撰写过的计划"),ht,t("button",{class:"btn",onClick:o[6]||(o[6]=(...i)=>e.tomerplan&&e.tomerplan(...i))},"待通过计划")])]),pt,mt,yt,ft,bt,vt],64)}}}),Ot=g(kt,[["__scopeId","data-v-9b2f0001"]]);export{Ot as default};