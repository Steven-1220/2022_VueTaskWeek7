"use strict";(self["webpackChunkweek7_hw_dashboard"]=self["webpackChunkweek7_hw_dashboard"]||[]).push([[899],{8899:function(s,e,t){t.r(e),t.d(e,{default:function(){return Z}});var a=t(3396);const n={class:"navbar px-0 navbar-expand-lg navbar-light bg-primary"},o={class:"collapse navbar-collapse custom-header-md-open container-fluid",id:"navbarNav"},c={class:"navbar-nav"},i={class:"nav-item active"},l=(0,a.Uk)("產品"),r={class:"nav-item"},u=(0,a.Uk)("訂單"),d={class:"nav-item active"},h=(0,a.Uk)("優惠券"),m={class:"nav-item active"},p=(0,a.Uk)("貼文"),v={class:"nav-item active"},k=(0,a.Uk)("登出");function g(s,e,t,g,w,_){const b=(0,a.up)("ToastMessage"),f=(0,a.up)("router-link"),y=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(b),(0,a._)("nav",n,[(0,a._)("div",o,[(0,a._)("ul",c,[(0,a._)("li",i,[(0,a.Wm)(f,{class:"nav-link ps-md-0",to:"/admin/products"},{default:(0,a.w5)((()=>[l])),_:1})]),(0,a._)("li",r,[(0,a.Wm)(f,{class:"nav-link ps-md-2",to:"/admin/orders"},{default:(0,a.w5)((()=>[u])),_:1})]),(0,a._)("li",d,[(0,a.Wm)(f,{class:"nav-link ps-md-2",to:"/admin/coupon"},{default:(0,a.w5)((()=>[h])),_:1})]),(0,a._)("li",m,[(0,a.Wm)(f,{class:"nav-link ps-md-2",to:"/admin/article"},{default:(0,a.w5)((()=>[p])),_:1})]),(0,a._)("li",v,[(0,a.Wm)(f,{class:"nav-link ps-md-5",to:"/login"},{default:(0,a.w5)((()=>[k])),_:1})])])])]),w.checkSuccess?((0,a.wg)(),(0,a.j4)(y,{key:0})):(0,a.kq)("",!0)],64)}var w=t(7139);const _={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},b={class:"toast-header"},f={class:"me-auto"},y=["onClick"],$={key:0,class:"toast-body"};function C(s,e,t,n,o,c){return(0,a.wg)(),(0,a.iD)("div",_,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.messages,((s,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:(0,w.C_)(["toast show",`toast${e}`]),role:"alert"},[(0,a._)("div",b,[(0,a._)("span",{class:(0,w.C_)([`bg-${s.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,a._)("strong",f,(0,w.zw)(s.title),1),(0,a._)("button",{type:"button",class:"btn-close",onClick:s=>c.clearToast(e),"aria-label":"Close"},null,8,y)]),s.content?((0,a.wg)(),(0,a.iD)("div",$,(0,w.zw)(s.content),1)):(0,a.kq)("",!0)],2)))),128))])}var T=t(7897),x={data(){return{messages:[]}},methods:{toastShow(){setTimeout((()=>{this.messages.shift()}),6e3)},clearToast(s){this.messages.splice(s,1)}},mounted(){T.Z.on("push-message",(s=>{const{style:e="success",title:t,content:a}=s;this.messages.push({style:e,title:t,content:a}),this.toastShow()}))}},W=t(89);const D=(0,W.Z)(x,[["render",C]]);var S=D,U={components:{ToastMessage:S},data(){return{checkSuccess:!1}},methods:{checkLogin(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(s){this.$http.defaults.headers.common.Authorization=s;const e="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(e).then((()=>{this.checkSuccess=!0})).catch((s=>{alert(s.data.message),this.$router.push("/login")}))}else alert("您尚未登入。"),this.$router.push("/login")},logOut(){document.cookie="myToken=;expires=;",alert("已登出"),this.$router.push("/login")}},mounted(){this.checkLogin()}};const z=(0,W.Z)(U,[["render",g]]);var Z=z}}]);
//# sourceMappingURL=899.b077ef2c.js.map