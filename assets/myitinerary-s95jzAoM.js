import{l as c,c as o,b as e,a as i,F as d,z as f,h as u,f as _,g,a4 as v,r as h,o as a,w as b,t as n,a6 as k}from"./index-BEB-pBc0.js";/* empty css                                                  */import{C,H as w,P as O,E as B}from"./PlayCircleOutlined-DJzVyTbP.js";const E={class:"travels"},I=e("br",null,null,-1),N={class:"itinerary"},x={class:"item-info"},V=["onClick"],$=e("span",{class:"shadow"},null,-1),j=e("span",{class:"edge"},null,-1),D=e("span",{class:"front text"}," 删除计划 ",-1),F=[$,j,D],H=e("br",null,null,-1),P={key:0,class:"itinerary"},z={key:1},L=e("br",null,null,-1),Q=e("br",null,null,-1),S=e("br",null,null,-1),T=e("br",null,null,-1),q=e("br",null,null,-1),A=e("br",null,null,-1),G=e("br",null,null,-1),J={props:{},data(){return{id:1,party:{start_time:"2006-01-02",end_time:"2006-01-03"},info:{},partynull:!1}},methods:{deleteItinerary(t){const l="http://api.xiey.work/bocchi/party/itinerary/delete?itinerary_id="+t;_.get(l,{headers:{"access-token":this.access_token}}).then(r=>{console.log(r),location.reload()}).catch(r=>{console.error(r)})},init(){_.get("http://api.xiey.work/bocchi/party/itinerary/my?party_id="+this.id,{headers:{"access-token":this.access_token}}).then(t=>{console.log(t),this.partynull=!0,this.info=t.data.itinerary_list,t.data.base.code==1e4&&(this.partynull=1,console.log(this.partynull))}).catch(t=>{console.error(t)})}},mounted(){this.id=Number(this.$route.params.id),this.access_token=g.get("access_token"),this.init()},computed:{getIcon(){return t=>{switch(t){case 1:return B;case 2:return O;case 3:return w;case 4:return C;case 5:return v}}},getType(){return t=>{switch(t){case 1:return"路线";case 2:return"活动";case 3:return"住宿";case 4:return"餐饮";case 5:return"其他";default:return"未知类型"}}}}},W=Object.assign(J,{__name:"myitinerary",setup(t){return c(!1),c(!1),(l,r)=>{const p=h("a-page-header"),y=k,m=h("a-empty");return a(),o(d,null,[e("div",E,[i(p,{style:{border:"1px solid rgb(235, 237, 240)"},title:"我的计划 ",onBack:r[0]||(r[0]=()=>l.$router.go(-1))})]),I,e("div",N,[(a(!0),o(d,null,f(l.info,s=>(a(),o("div",{key:s.id,class:"item"},[i(y,{style:{width:"90vw"}},{default:b(()=>[e("div",x,[e("div",null,"ID:"+n(s.id),1),e("div",null,"标题:"+n(s.title),1),e("div",null,"是否通过审核:"+n(s.is_merged),1),e("div",null,"备注:"+n(s.remark),1),e("div",null,"路线:"+n(s.route_json),1),e("div",null,"地址:"+n(s.rectangle),1),e("div",null,"开始时间:"+n(s.schedule_start_time),1),e("div",null,"结束时间:"+n(s.schedule_end_time),1),e("button",{onClick:K=>l.deleteItinerary(s.id)},F,8,V)])]),_:2},1024),H]))),128))]),l.partynull?(a(),o("div",P)):u("",!0),l.partynull?u("",!0):(a(),o("div",z,[i(m)])),L,Q,S,T,q,A,G],64)}}});export{W as default};
