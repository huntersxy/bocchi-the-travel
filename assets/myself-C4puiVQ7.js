import{_ as y,c as g,a as r,b as s,t as d,w as u,T as k,d as l,v as h,e as C,F as S,f as p,g as i,r as v,o as m,h as B,i as E,j as f,p as F,k as I}from"./index-BNNipqz5.js";const c=t=>(F("data-v-3b392483"),t=t(),I(),t),T={class:"settings"},A=c(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",viewBox:"0 0 20 20",height:"20",fill:"none",class:"svg-icon"},[s("g",{"stroke-width":"1.5","stroke-linecap":"round",stroke:"#5d41de"},[s("circle",{r:"2.5",cy:"10",cx:"10"}),s("path",{"fill-rule":"evenodd",d:"m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z","clip-rule":"evenodd"})])],-1)),V={class:"lable"},$={class:"settingpage"},j={class:"setpage"},z={blur:!0},D=c(()=>s("text",null,"设置界面",-1)),N={class:"setpage-flur"},M={class:"upload"},R={class:"avatarpage"},U={class:"up"},q=["src"],L={id:"about"},O={class:"user_img"},W=["src"],x={class:"user_name"},G={id:"name"},H=c(()=>s("input",{type:"text",placeholder:"请输入内容",class:"input-box"},null,-1)),J=c(()=>s("text",null,"个人签名",-1)),K={class:"signature"},P={key:0,class:"input",style:{"z-index":"500"}},Q={key:1,class:"sign"},X=c(()=>s("br",null,null,-1)),Y={data(){return{userid:"",setname:"设置",setcount:3,setshow:0,id:1,name:"未登录",avatar:"//xiey.work/ava.png",mail:"",signature:"这个人很懒，什么都没写。",access_token:"",refresh_token:"",avatarFile:null,url:"",showavatarpage:0,previewImage:null,file:null,isEditing:!1}},methods:{savesignature(t){this.isEditing=!1,p.post("/bocchi/user/signature",{signature:t},{headers:{"access-token":this.access_token}}).then(e=>{console.log(e)}).catch(e=>{console.error(e)})},editsignature(){this.isEditing=!0,document.querySelector(".input").focus()},modavatarpage(){this.showavatarpage=!this.showavatarpage,console.log(this.showavatarpage)},onFileChange(t){const e=t.target.files[0];if(this.file=e,e){const a=new FileReader;a.onload=n=>{this.previewImage=n.target.result},a.readAsDataURL(e)}},putavatar(t){if(!t){this.warm=1;return}if(!t.type.startsWith("image/")){alert("请选择图片文件");return}if(t.size>4*1024*1024){alert("图片大小不能超过4MB");return}var e=new Date,a=e.getSeconds();console.log(a),p.put(this.url+"/bocchi/user/avatar/upload",{avatar_file:t},{headers:{"Content-Type":"multipart/form-data","access-token":this.access_token,Accept:"*/*"}}).then(n=>{console.log(n),this.avatar=n.data.user.avatar+"?"+a,this.modavatarpage(),this.warm=1}).catch(n=>{console.error(n)})},settings(){this.setshow=!this.setshow,this.setcount++},refreshtoken(){p.get(this.url+"/bocchi/access_token/get",{headers:{"refresh-token":this.refresh_token,Accept:"*/*"}}).then(t=>{console.log(t),console.log(t.data.access_token),this.access_token=t.data.access_token,i.remove("access_token"),this.cookiesSet=i.set("access_token",t.data.access_token,{expires:1})}).catch(t=>{console.error(t)})},logout(){i.remove("id"),i.remove("access_token"),i.remove("refresh_token"),window.location.href="/"},init(){p.get(this.url+"/bocchi/user/info?user_id="+this.id).then(t=>{console.log(t),t.data.base.code=="10000"&&(console.log("获取信息成功"),this.name=t.data.user.name,this.avatar=t.data.user.avatar,this.mail=t.data.user.email,this.signature=t.data.user.signature,this.CookiesSet=i.set("avatar",this.avatar)),t.data.base.code=="10007"&&(console.log("不存在"),this.name="该用户不存在"),console.log(this.avatar),this.avatar===""&&(this.avatar="//xiey.work/ava.png"),this.signature===""&&(this.signature="这个人很懒，什么都没写。")}).catch(t=>{console.error(t)})}},mounted(){this.id=i.get("id"),this.access_token=i.get("access_token"),this.refresh_token=i.get("refresh_token"),this.init()},components:{},computed:{},watch:{setcount(t){t%2==1&&(this.setname="设置"),t%2!=1&&(this.setname="关闭")}},props:{},emits:{},setup(){}},Z=Object.assign(Y,{__name:"myself",setup(t){return(e,a)=>{const n=v("a-page-header"),_=v("a-input"),w=v("a-button"),b=v("a-divider");return m(),g(S,null,[r(n,{style:{border:"1px solid rgb(235, 237, 240)","background-color":"#fff"},title:"个人中心","sub-title":"1",onBack:a[0]||(a[0]=()=>e.$router.go(-1))}),s("div",T,[s("button",{class:"button",onClick:a[1]||(a[1]=(...o)=>e.settings&&e.settings(...o))},[A,s("span",V,d(e.setname),1)])]),s("div",$,[r(k,{name:"fade"},{default:u(()=>[l(s("div",j,[s("mdui-list",z,[D,s("mdui-list-item",{onClick:a[2]||(a[2]=(...o)=>e.refreshtoken&&e.refreshtoken(...o))},"刷新令牌"),s("mdui-list-item",{onClick:a[3]||(a[3]=(...o)=>e.logout&&e.logout(...o))},"退出登陆")])],512),[[h,e.setshow]])]),_:1}),l(s("div",N,null,512),[[h,e.setshow]])]),s("div",M,[r(k,{name:"fade"},{default:u(()=>[l(s("div",R,[s("div",U,[e.previewImage?(m(),g("img",{key:0,src:e.previewImage,alt:"预览图像",style:{"object-fit":"cover","border-radius":"20px 20px 0 0",width:"100%","max-height":"250px"}},null,8,q)):B("",!0),s("form",{onSubmit:a[4]||(a[4]=E((...o)=>e.uploadAvatar&&e.uploadAvatar(...o),["prevent"]))},[r(_,{type:"file",ref:"avatarInput",onChange:e.onFileChange,style:{"margin-top":"20px"},accept:"image/*"},{default:u(()=>[f("上传文件")]),_:1},8,["onChange"])],32),r(w,{type:"primary submit",onClick:a[5]||(a[5]=o=>e.putavatar(e.file)),style:{"margin-bottom":"20px"}},{default:u(()=>[f("上传头像")]),_:1})])],512),[[h,e.showavatarpage]])]),_:1}),l(s("div",{class:"avatarpage-flur",onClick:a[6]||(a[6]=(...o)=>e.modavatarpage&&e.modavatarpage(...o))},null,512),[[h,e.showavatarpage]])]),s("div",L,[s("div",O,[s("img",{src:e.avatar,class:"touxiangimg rounded-image",onClick:a[7]||(a[7]=(...o)=>e.modavatarpage&&e.modavatarpage(...o)),style:{"object-fit":"cover",width:"50vw",height:"50vw","max-width":"300px","max-height":"300px"}},null,8,W)]),s("div",x,[s("text",G,d(e.name),1)]),H,J,s("div",K,[e.isEditing?(m(),g("div",P,[l(s("input",{type:"text","onUpdate:modelValue":a[8]||(a[8]=o=>e.signature=o),onBlur:a[9]||(a[9]=o=>e.savesignature(this.signature)),autofocus:"",style:{"z-index":"6665"}},null,544),[[C,e.signature]])])):(m(),g("div",Q,[s("p",{onClick:a[10]||(a[10]=o=>e.editsignature())},d(e.signature),1)]))]),l(s("div",{class:"sign-flur",onClick:a[11]||(a[11]=o=>e.savesignature(this.signature))},null,512),[[h,e.isEditing]]),s("text",null,"uid:"+d(e.id),1),s("text",null,"邮箱:"+d(e.mail),1)]),r(b,{orientation:"left",class:"separate"},{default:u(()=>[f("评价")]),_:1}),X],64)}}}),te=y(Z,[["__scopeId","data-v-3b392483"]]);export{te as default};