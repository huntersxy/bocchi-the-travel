import{_ as p,r as u,o as m,c as b,a as t,b as r,t as d,w as c,T as k,d as n,v as l,e as _,F as w,f as C,g as v,h as i,i as F,p as S,j as y}from"./index-DDDMsb9I.js";const h=a=>(S("data-v-02da1f62"),a=a(),y(),a),A={class:"about"},V={class:"settings"},B=h(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",viewBox:"0 0 20 20",height:"20",fill:"none",class:"svg-icon"},[t("g",{"stroke-width":"1.5","stroke-linecap":"round",stroke:"#5d41de"},[t("circle",{r:"2.5",cy:"10",cx:"10"}),t("path",{"fill-rule":"evenodd",d:"m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z","clip-rule":"evenodd"})])],-1)),I={class:"lable"},N={class:"info"},D=["src"],T={class:"name"},j={class:"shejiao"},$=h(()=>t("div",null,null,-1)),z={class:"setpage"},E={blur:!0},M=h(()=>t("text",null,"设置界面",-1)),O={class:"setpage-flur"},q={class:"avatarpage"},G=C('<br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><br data-v-02da1f62><div class="bg" data-v-02da1f62></div>',33),H={data(){return{userid:"",setname:"设置",setcount:3,setshow:0,id:1,name:"未登录",avatar:"//xiey.work/ava.png",mail:"",signature:"这个人很懒，什么都没写。",access_token:"",refresh_token:"",avatarFile:null,url:"",showavatarpage:0}},methods:{modavatarpage(){this.showavatarpage=!this.showavatarpage,console.log(this.showavatarpage)},onFileChange(a){this.avatarFile=a.target.files[0]},putavatar(){if(!this.avatarFile){alert("请选择一个文件");return}let a=new FormData;a.append("avatar",this.avatarFile),v.put(this.url+"/bocchi/user/avatar/upload",a,{headers:{"Content-Type":"multipart/form-data","access-token":this.access_token,Accept:"*/*"}}).then(e=>{console.log(e)}).catch(e=>{console.error(e)})},settings(){this.setshow=!this.setshow,this.setcount++},refreshtoken(){v.get(this.url+"/bocchi/access_token/get",{headers:{"refresh-token":this.refresh_token,Accept:"*/*"}}).then(a=>{console.log(a),console.log(a.data.access_token),this.access_token=a.data.access_token,i.remove("access_token"),this.cookiesSet=i.set("access_token",a.data.access_token,{expires:1})}).catch(a=>{console.error(a)})},logout(){i.remove("id"),i.remove("access_token"),i.remove("refresh_token"),window.location.href="/"},init(){v.get(this.url+"/bocchi/user/info?user_id="+this.id).then(a=>{console.log(a),a.data.base.code=="10000"&&(console.log("获取信息成功"),this.name=a.data.user.name,this.avatar=a.data.user.avatar,this.mail=a.data.user.email,this.signature=a.data.user.signature),a.data.base.code=="10007"&&(console.log("不存在"),this.name="该用户不存在"),console.log(this.avatar),this.avatar===""&&(this.avatar="//xiey.work/ava.png"),this.signature===""&&(this.signature="这个人很懒，什么都没写。")}).catch(a=>{console.error(a)})}},mounted(){this.id=i.get("id"),this.access_token=i.get("access_token"),this.refresh_token=i.get("refresh_token"),String(this.$route.params.id)=="undefined"?(this.id=i.get("id"),this.init()):(this.id=Number(this.$route.params.id),this.init())},components:{},computed:{},watch:{setcount(a,e){a%2==1&&(this.setname="设置"),a%2!=1&&(this.setname="关闭")}},props:{},emits:{},setup(){}},J=Object.assign(H,{__name:"AboutView",setup(a){return(e,s)=>{const f=u("a-page-header"),g=u("a-divider");return m(),b(w,null,[t("div",A,[r(f,{style:{border:"1px solid rgb(235, 237, 240)","background-color":"#fff"},title:"个人中心","sub-title":"1",onBack:s[0]||(s[0]=()=>e.$router.go(-1))}),t("div",V,[t("button",{class:"button",onClick:s[1]||(s[1]=(...o)=>e.settings&&e.settings(...o))},[B,t("span",I,d(e.setname),1)])]),t("div",N,[t("div",{class:"touxiang",onClick:s[2]||(s[2]=(...o)=>e.modavatarpage&&e.modavatarpage(...o))},[t("div",null,[t("img",{src:e.avatar,class:"touxiangimg rounded-image"},null,8,D),t("div",null,[t("text",T,d(e.name),1)])])]),t("div",j,[t("text",null,"uid:"+d(e.id),1),t("text",null,"邮箱:"+d(e.mail),1),t("text",null,"签名:"+d(e.signature),1)])]),$,r(k,{name:"fade"},{default:c(()=>[n(t("div",z,[t("mdui-list",E,[M,t("mdui-list-item",{onClick:s[3]||(s[3]=(...o)=>e.refreshtoken&&e.refreshtoken(...o))},"刷新令牌"),t("mdui-list-item",{onClick:s[4]||(s[4]=(...o)=>e.logout&&e.logout(...o))},"退出登陆")])],512),[[l,e.setshow]])]),_:1}),n(t("div",O,null,512),[[l,e.setshow]]),n(t("div",q,[t("form",{onSubmit:s[7]||(s[7]=_((...o)=>e.uploadAvatar&&e.uploadAvatar(...o),["prevent"]))},[t("input",{type:"file",ref:"avatarInput",onChange:s[5]||(s[5]=(...o)=>e.onFileChange&&e.onFileChange(...o))},null,544),t("button",{type:"submit",onClick:s[6]||(s[6]=(...o)=>e.putavatar&&e.putavatar(...o))},"上传头像")],32)],512),[[l,0]]),r(g,{orientation:"center",class:"separate"},{default:c(()=>[F("我的行程")]),_:1})]),G],64)}}}),L=p(J,[["__scopeId","data-v-02da1f62"]]);export{L as default};
