import{_ as C,c as i,b as r,a as c,F as d,m as y,f as p,g,r as l,o,A as v,w as n,h as b,p as $,k as w}from"./index-B9aJKg17.js";const k=s=>($("data-v-46921824"),s=s(),w(),s),x={class:"travels"},B={class:"main"},j={class:"member"},I=k(()=>r("div",{style:{"text-align":"center","margin-bottom":"5vw"}},"团队成员",-1)),N={class:"applylist"},S=k(()=>r("div",{style:{"text-align":"center","margin-bottom":"5vw"}},"申请列表:",-1)),V=["onClick"],F={data(){return{id:this.$route.params.id,members:[],applylist:[]}},methods:{applyuser(s){p.get("/bocchi/party/apply/permit?party_id="+this.id+"&member_id="+s,{headers:{"access-token":g.get("access_token")}}).then(e=>{this.members=e.data}).catch(e=>{console.log(e)})},get_party_members(s,e){p.get("/bocchi/party/members?party_id="+s+"&page_num="+e,{headers:{}}).then(a=>{console.log(a),this.members=a.data.member_list}).catch(a=>{console.log(a)})},apply_list(s,e){p.get("/bocchi/party/apply/list?party_id="+s+"&page_num="+e,{headers:{"access-token":g.get("access_token")}}).then(a=>{console.log(a.data),this.applylist=a.data.applicant_list}).catch(a=>{console.log(a)})}},mounted(){this.get_party_members(this.id,1),this.apply_list(this.id,1)}},A=Object.assign(F,{__name:"member",setup(s){return(e,a)=>{const f=l("a-page-header"),_=l("a-avatar"),h=l("a-card-meta"),m=l("a-card");return o(),i(d,null,[r("div",x,[c(f,{style:{border:"1px solid rgb(235, 237, 240)"},title:"活动成员",onBack:a[0]||(a[0]=()=>e.$router.go(-1))})]),r("div",B,[r("div",j,[I,(o(!0),i(d,null,y(e.members,t=>(o(),i("div",{key:t,style:{display:"grid","justify-content":"center"}},[t.id?(o(),v(m,{key:0,hoverable:"",style:{width:"300px","justify-content":"center"},onClick:u=>this.$router.push(`/about/${t.id}`)},{actions:n(()=>[]),default:n(()=>[c(h,{title:t.name,description:t.signature},{avatar:n(()=>[c(_,{src:t.avatar},null,8,["src"])]),_:2},1032,["title","description"])]),_:2},1032,["onClick"])):b("",!0)]))),128))]),r("div",N,[S,(o(!0),i(d,null,y(e.applylist,t=>(o(),i("div",{key:t,style:{display:"grid","justify-content":"center"}},[t.id?(o(),v(m,{key:0,hoverable:"",style:{width:"300px"},onClick:u=>this.$router.push(`/about/${t.id}`)},{actions:n(()=>[r("div",{onClick:u=>e.applyuser(t.id)},"同意加入",8,V)]),default:n(()=>[c(h,{title:t.name,description:t.signature},{avatar:n(()=>[c(_,{src:t.avatar},null,8,["src"])]),_:2},1032,["title","description"])]),_:2},1032,["onClick"])):b("",!0)]))),128))])])],64)}}}),L=C(A,[["__scopeId","data-v-46921824"]]);export{L as default};
