import{_ as k,c as r,b as i,a as s,F as d,z as f,g as v,f as _,r as n,o as c,w as l}from"./index-BLAE6nMZ.js";const b={class:"travels"},y={class:"follow"},w=["onClick"],C={data(){return{items:[],token:null,access_token:v.get("access_token")}},methods:{applyuser(t){const e=this.access_token;_.post("https://api.xiey.work/bocchi/trust/action?object_uid="+t+"&action_type=1",{},{headers:{"access-token":e}}).then(o=>{console.log(o.data.msg),alert(o.data.base.msg),this.init()})},toinfo(t){this.$router.push(`/about/${t}`)},init(){_.get("https://api.xiey.work/bocchi/trust/follower?page_num=1&user_id="+Number(this.$route.params.id)).then(t=>{console.log(t),console.log(t.data.base.msg),this.items=t.data.follower_list})}},mounted(){this.init()}},$=Object.assign(C,{__name:"followme",setup(t){return(e,o)=>{const p=n("a-page-header"),u=n("a-avatar"),h=n("a-card-meta"),m=n("a-card");return c(),r(d,null,[i("div",b,[s(p,{style:{border:"1px solid rgb(235, 237, 240)"},title:"我的粉丝",onBack:o[0]||(o[0]=()=>e.$router.go(-1))})]),i("div",y,[(c(!0),r(d,null,f(e.items,a=>(c(),r("div",{key:a,style:{display:"grid","justify-content":"center"}},[s(m,{hoverable:"",style:{width:"300px"}},{actions:l(()=>[i("div",{onClick:g=>e.applyuser(a.id)},"回关",8,w)]),default:l(()=>[s(h,{title:a.name,description:a.signature,onClick:g=>e.toinfo(a.id)},{avatar:l(()=>[s(u,{src:a.avatar},null,8,["src"])]),_:2},1032,["title","description","onClick"])]),_:2},1024)]))),128))])],64)}}}),B=k($,[["__scopeId","data-v-8112063d"]]);export{B as default};
