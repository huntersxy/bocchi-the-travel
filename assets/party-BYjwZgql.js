import{_ as g,c as p,b as t,a as r,j as i,t as l,w as d,d as k,v as C,F as f,a7 as $,f as u,g as w,a4 as x,r as c,o as h,A as O,x as T,W as I,u as S,C as j,p as B,k as E}from"./index-BqY8-j5m.js";import{C as N,H as V,P as D,E as q}from"./PlayCircleOutlined-DZ5wH3vd.js";const n=s=>(B("data-v-1bc5a2f0"),s=s(),E(),s),z={class:"travels"},F={class:"info"},H={class:"card"},P=$('<div class="tools" data-v-1bc5a2f0><div class="circle" data-v-1bc5a2f0><span class="red box" data-v-1bc5a2f0></span></div><div class="circle" data-v-1bc5a2f0><span class="yellow box" data-v-1bc5a2f0></span></div><div class="circle" data-v-1bc5a2f0><span class="green box" data-v-1bc5a2f0></span></div></div>',1),A={class:"card__content"},L={class:"party_info"},Q={class:"title"},W=n(()=>t("text",{class:"info_name"},"活动名:",-1)),G=n(()=>t("br",null,null,-1)),J={class:"title"},K=n(()=>t("text",{class:"info_name"},"创建者:",-1)),M=n(()=>t("br",null,null,-1)),R={class:"title"},U=n(()=>t("text",{class:"info_name"},"成员数:",-1)),X=n(()=>t("br",null,null,-1)),Y={class:"content"},Z=n(()=>t("text",{class:"content_text"},"介绍:",-1)),tt=n(()=>t("br",null,null,-1)),et=n(()=>t("br",null,null,-1)),st={style:{"text-align":"center","margin-top":"10px","margin-bottom":"10px"}},nt={style:{"text-align":"center","margin-top":"10px","margin-bottom":"10px"}},ot=n(()=>t("div",{class:"center"},[t("text",null,"所有计划")],-1)),at={class:"sty"},it=n(()=>t("br",null,null,-1)),lt=n(()=>t("br",null,null,-1)),rt=n(()=>t("br",null,null,-1)),dt=n(()=>t("br",null,null,-1)),ct=n(()=>t("br",null,null,-1)),_t={style:{"border-radius":"12px",border:"3px solid #f5f5f5",width:"fit-content","margin-top":"5px"}},ut={class:"foot"},ht={class:"create"},pt=n(()=>t("br",null,null,-1)),mt=n(()=>t("br",null,null,-1)),ft=n(()=>t("br",null,null,-1)),yt=n(()=>t("br",null,null,-1)),bt=n(()=>t("br",null,null,-1)),vt=n(()=>t("br",null,null,-1)),gt=n(()=>t("br",null,null,-1)),kt=n(()=>t("br",null,null,-1)),Ct={data(){return{partynull:0,id:1,infodata:{id:5,founder_id:6,title:"1",content:"1",type:"",province:"1",city:"1",start_time:"2006-01-02",end_time:"2006-01-02",member_count:0,status:0,rectangle:""},items:[{id:5,title:"第一个",founder_id:6,action_type:2,rectangle:"1",route_json:"1",remark:"1hhhhhhhhhhhhhhhhhhhhhhhhhh",sequence:0,schedule_start_time:"2006-01-02 15:40",schedule_end_time:"2006-01-02 15:40",party_id:5,is_merged:1},{id:6,title:"吃饭",founder_id:6,action_type:4,rectangle:"1",route_json:"1",remark:"1",sequence:0,schedule_start_time:"2006-01-02 15:40",schedule_end_time:"2006-01-02 15:40",party_id:5,is_merged:1}]}},methods:{ToEnd(s){u.get("/bocchi/party/status?party_id="+s+"&action_type=1",{headers:{"access-token":this.access_token}}),this.$router.push(`/finish/${s}`)},Tomember(s){this.$router.push(`/member/${s}`)},apply_party(s){u.get("/bocchi/party/apply?party_id="+s,{headers:{"access-token":this.access_token}}).then(e=>{console.log(e),alert("申请成功！")}).catch(e=>{console.error(e)})},getin(){u.get("/bocchi/party/itinerary/show?party_id="+this.id,{headers:{"access-token":this.access_token}}).then(s=>{console.log(s),this.items=s.data.itineraries,console.log(s.data.itineraries),s.data.itineraries===void 0&&(this.partynull=1)}).catch(s=>{console.error(s)})},partyinit(){const s="/bocchi/party/get?party_id="+this.id,e={};u.get(s,e).then(o=>{console.log(o),this.infodata=o.data.party}).catch(o=>{console.error(o)})}},mounted(){this.id=Number(this.$route.params.id),this.access_token=w.get("access_token"),this.partyinit(),this.getin()},computed:{getIcon(){return s=>{switch(s){case 1:return q;case 2:return D;case 3:return V;case 4:return N;case 5:return x}}},getType(){return s=>{switch(s){case 1:return"路线";case 2:return"活动";case 3:return"住宿";case 4:return"餐饮";case 5:return"其他";default:return"未知类型"}}}}},$t=Object.assign(Ct,{__name:"party",setup(s){return(e,o)=>{const y=c("a-page-header"),_=c("a-button"),m=c("a-timeline-item"),b=c("a-timeline"),v=c("a-empty");return h(),p(f,null,[t("div",z,[r(y,{style:{border:"1px solid rgb(235, 237, 240)"},title:"活动详情",onBack:o[0]||(o[0]=()=>e.$router.go(-1))})]),t("div",F,[t("div",H,[P,t("div",A,[t("div",L,[t("div",Q,[W,G,i(l(e.infodata.title),1)]),t("div",J,[K,M,i(l(e.infodata.founder_id),1)]),t("div",R,[U,X,i(l(e.infodata.member_count),1)])]),t("div",Y,[Z,tt,i('[本活动于"'+l(e.infodata.province)+","+l(e.infodata.city)+'"处进行] ',1),et,i(l(e.infodata.content),1)]),t("div",st," 起止时间:"+l(e.infodata.start_time)+" - "+l(e.infodata.end_time),1),t("div",nt,[r(_,{type:"dashed",onClick:o[1]||(o[1]=a=>e.apply_party(this.id))},{default:d(()=>[i("申请加入")]),_:1}),r(_,{style:{"margin-left":"10px"},onClick:o[2]||(o[2]=a=>e.Tomember(this.id))},{default:d(()=>[i("查看成员")]),_:1}),r(_,{type:"primary",onClick:o[3]||(o[3]=a=>e.ToEnd(this.id)),style:{"margin-left":"10px"}},{default:d(()=>[i("结束行程")]),_:1})])])]),ot,t("div",at,[r(b,null,{default:d(()=>[(h(!0),p(f,null,O(e.items,a=>(h(),p("div",{key:a.id},[r(m,null,{dot:d(()=>[(h(),T(I(e.getIcon(a.action_type)),{style:{"font-size":"16px"}}))]),default:d(()=>[i(" 计划: "+l(a.title)+" ",1),it,i(" 类型："+l(e.getType(a.action_type))+" ",1),lt,i(" 备注："+l(a.remark)+" ",1),rt,i(" 地点："+l(a.rectangle)+" ",1),dt,i(" 路线："+l(a.route_json)+" ",1),ct,i(" 时间："+l(a.schedule_start_time),1)]),_:2},1024),r(m,null,{dot:d(()=>[r(S(j),{style:{"font-size":"16px"}})]),default:d(()=>[i(" 结束时间: "+l(a.schedule_end_time)+" ",1),t("div",_t,[r(_,{type:"link",onClick:wt=>e.$router.push("/itinerarys/"+a.id)},{default:d(()=>[i(" 查看详细 ")]),_:2},1032,["onClick"])])]),_:2},1024)]))),128))]),_:1})]),k(t("div",null,[r(v)],512),[[C,e.partynull]])]),t("div",ut,[t("div",ht,[t("button",{class:"btn",onClick:o[4]||(o[4]=a=>e.$router.push("/Createplan/"+this.id))},"创建计划"),pt,t("button",{class:"btn",onClick:o[5]||(o[5]=a=>e.$router.push("/myitinerarys/"+this.id))}," 查看撰写过的计划 "),mt,t("button",{class:"btn",onClick:o[6]||(o[6]=a=>e.$router.push("/merplan/"+this.id))},"待通过计划")])]),ft,yt,bt,vt,gt,kt],64)}}}),Tt=g($t,[["__scopeId","data-v-1bc5a2f0"]]);export{Tt as default};
