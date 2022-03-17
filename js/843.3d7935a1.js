"use strict";(self["webpackChunkweek7_hw_dashboard"]=self["webpackChunkweek7_hw_dashboard"]||[]).push([[843],{9843:function(e,o,t){t.r(o),t.d(o,{default:function(){return pe}});var n=t(3396),a=t(7139);const l=(0,n._)("h2",{class:"text-center"},"優惠券",-1),s={class:"container"},d={class:"text-end mt-4"},i={class:"table mt-4"},p=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),u={key:0},c={key:1,class:"text-muted"},r={class:"btn-group"},h=["onClick"],m=["onClick"];function b(e,o,t,b,_,C){const g=(0,n.up)("VueLoading"),f=(0,n.up)("PaginationView"),w=(0,n.up)("CouponModal"),v=(0,n.up)("DeleteCouponModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(g,{active:_.isLoading},null,8,["active"]),l,(0,n._)("div",s,[(0,n._)("div",d,[(0,n._)("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=e=>C.openModal("new"))}," 建立新的優惠券 ")]),(0,n._)("table",i,[p,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.coupons,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.id},[(0,n._)("td",null,(0,a.zw)(e.title),1),(0,n._)("td",null,(0,a.zw)(e.percent)+"%",1),(0,n._)("td",null,(0,a.zw)(new Date(1e3*e.due_date).toLocaleDateString()),1),(0,n._)("td",null,[e.is_enabled?((0,n.wg)(),(0,n.iD)("span",u,"啟用")):((0,n.wg)(),(0,n.iD)("span",c,"未啟用"))]),(0,n._)("td",null,[(0,n._)("div",r,[(0,n._)("button",{class:"btn btn-outline-success btn-sm",onClick:o=>C.openModal("edit",e)}," 編輯 ",8,h),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>C.openModal("delete",e)}," 刪除 ",8,m)])])])))),128))])]),(0,n.Wm)(f,{pages:_.pagination},null,8,["pages"])]),(0,n.Wm)(w,{coupon:_.tempCoupon,"is-new":_.isNew,onUpdateCoupon:C.updateCoupon,ref:"couponModalRef"},null,8,["coupon","is-new","onUpdateCoupon"]),(0,n.Wm)(v,{"delete-coupon-item":_.tempCoupon,onGetCoupons:C.getCoupon,ref:"delCouponModalRef"},null,8,["delete-coupon-item","onGetCoupons"])],64)}var _=t(9242);const C={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modalRef"},g={class:"modal-dialog",role:"document"},f={class:"modal-content"},w={class:"modal-header"},v={class:"modal-title",id:"exampleModalLabel"},y={key:0},M={key:1},k=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),D={class:"modal-body"},$={class:"mb-3"},x=(0,n._)("label",{for:"title"},"標題",-1),L={class:"mb-3"},N=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),S={class:"mb-3"},U=(0,n._)("label",{for:"due_date"},"到期日",-1),R={class:"mb-3"},V=(0,n._)("label",{for:"price"},"折扣百分比",-1),P={class:"mb-3"},z={class:"form-check"},J=(0,n._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),O={class:"modal-footer"},W=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 關閉 ",-1);function Z(e,o,t,a,l,s){return(0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("div",g,[(0,n._)("div",f,[(0,n._)("div",w,[(0,n._)("h5",v,[t.isNew?((0,n.wg)(),(0,n.iD)("span",y,"新增優惠卷")):((0,n.wg)(),(0,n.iD)("span",M,"編輯優惠卷"))]),k]),(0,n._)("div",D,[(0,n._)("div",$,[x,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":o[0]||(o[0]=e=>l.tempCoupon.title=e)},null,512),[[_.nr,l.tempCoupon.title]])]),(0,n._)("div",L,[N,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code",placeholder:"請輸入優惠碼","onUpdate:modelValue":o[1]||(o[1]=e=>l.tempCoupon.code=e)},null,512),[[_.nr,l.tempCoupon.code]])]),(0,n._)("div",S,[U,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=e=>l.due_date=e)},null,512),[[_.nr,l.due_date]])]),(0,n._)("div",R,[V,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price",min:"0",placeholder:"請輸入折扣百分比","onUpdate:modelValue":o[3]||(o[3]=e=>l.tempCoupon.percent=e)},null,512),[[_.nr,l.tempCoupon.percent]])]),(0,n._)("div",P,[(0,n._)("div",z,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":o[4]||(o[4]=e=>l.tempCoupon.is_enabled=e)},null,512),[[_.e8,l.tempCoupon.is_enabled]]),J])])]),(0,n._)("div",O,[W,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=o=>e.$emit("update-coupon",l.tempCoupon))}," 確定 ")])])])],512)}var I=t(7972),G=t.n(I),H={data(){return{couponModal:{},tempCoupon:{},due_date:""}},props:{coupon:{},isNew:{type:Boolean,default:!1}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date),o=e.toLocaleDateString();this.due_date=o},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{open(){this.couponModal.show()},close(){this.couponModal.hide()}},mounted(){this.couponModal=new(G())(this.$refs.modalRef,{keyboard:!1})}},Y=t(89);const B=(0,Y.Z)(H,[["render",Z]]);var K=B;const T={id:"delProductModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},j={class:"modal-dialog"},q={class:"modal-content border-0"},A=(0,n._)("div",{class:"modal-header bg-danger text-white"},[(0,n._)("h5",{id:"delProductModalLabel",class:"modal-title"},[(0,n._)("span",null,"刪除優惠券")]),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},F=(0,n.Uk)(" 是否刪除 "),Q={class:"text-danger"},X=(0,n.Uk)(" 優惠券(刪除後將無法恢復)。 "),ee={class:"modal-footer"},oe=(0,n._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function te(e,o,t,l,s,d){return(0,n.wg)(),(0,n.iD)("div",T,[(0,n._)("div",j,[(0,n._)("div",q,[A,(0,n._)("div",E,[F,(0,n._)("strong",Q,(0,a.zw)(t.deleteCouponItem.title),1),X]),(0,n._)("div",ee,[oe,(0,n._)("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...e)=>d.deleteCoupon&&d.deleteCoupon(...e))}," 確認刪除 ")])])])],512)}var ne={data(){return{delCouponModal:{}}},props:["deleteCouponItem"],methods:{open(){this.delCouponModal.show()},close(){this.delCouponModal.hide()},deleteCoupon(){this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/coupon/${this.deleteCouponItem.id}`).then((e=>{this.$emit("get-coupons"),this.$httpMessageState(e,"刪除優惠券"),this.close()})).catch((e=>{console.log(e.data),this.$httpMessageState(e.response,"刪除優惠券")}))}},mounted(){this.delCouponModal=new(G())(this.$refs.delModal,{keyboard:!1})}};const ae=(0,Y.Z)(ne,[["render",te]]);var le=ae,se=t(6567),de={components:{CouponModal:K,DeleteCouponModal:le,PaginationView:se.Z},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:50,code:""},pagination:{},isNew:!1,isLoading:!1}},methods:{getCoupon(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/coupons";this.$http.get(e).then((e=>{console.log(e.data),this.coupons=e.data.coupons,this.pagination=e.data.pagination,this.isLoading=!1})).catch((e=>{console.log(e.data)}))},openModal(e,o){console.log(e,o),"new"==e?(this.tempCoupon={due_date:(new Date).getTime()/1e3},this.$refs.couponModalRef.open(),this.isNew=!0):"edit"==e?(this.tempCoupon=JSON.parse(JSON.stringify(o)),this.$refs.couponModalRef.open(),this.isNew=!1):"delete"==e&&(this.tempCoupon=JSON.parse(JSON.stringify(o)),this.$refs.delCouponModalRef.open())},updateCoupon(){let e="https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/coupon",o="post",t="新增優惠券";this.isNew||(e=`https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/coupon/${this.tempCoupon.id}`,o="put",t="更新優惠券"),this.$http[o](e,{data:this.tempCoupon}).then((e=>{this.getCoupon(),this.$httpMessageState(e,t),this.$refs.couponModalRef.close()})).catch((e=>{console.log(e.response),this.$httpMessageState(e.response,t)}))}},mounted(){this.getCoupon()}};const ie=(0,Y.Z)(de,[["render",b]]);var pe=ie}}]);
//# sourceMappingURL=843.3d7935a1.js.map