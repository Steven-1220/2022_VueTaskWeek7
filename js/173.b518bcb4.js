"use strict";(self["webpackChunkweek7_hw_dashboard"]=self["webpackChunkweek7_hw_dashboard"]||[]).push([[173],{5173:function(t,a,e){e.r(a),e.d(a,{default:function(){return V}});var s=e(3396),o=e(7139),n=e(9242);const i={class:"container"},l={class:"text-end"},d=["disabled"],c={class:"table align-middle"},r=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"品名"),(0,s._)("th",{style:{width:"150px"}},"數量/單位"),(0,s._)("th",null,"價格")])],-1),u=["disabled","onClick"],h={key:0,class:"text-success"},p={class:"input-group input-group-sm"},g={class:"input-group mb-3"},_=["onUpdate:modelValue","disabled","onChange"],b={class:"input-group-text",id:"basic-addon2"},m={class:"text-end"},v={key:0,class:"text-success"},C=(0,s._)("td",{colspan:"3",class:"text-end"},"總計",-1),k={class:"text-end"},y={key:0},w=(0,s._)("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),x={class:"text-end text-success"},D={class:"input-group mb-3 input-group-sm"},L={class:"input-group-append"},f={key:0,class:"text-end"},q=(0,s.Uk)("結帳去");function S(t,a,e,S,$,U){const z=(0,s.up)("VueLoading"),I=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(z,{active:$.isLoading},null,8,["active"]),(0,s._)("div",l,[(0,s._)("button",{class:"btn btn-outline-danger",type:"button",onClick:a[0]||(a[0]=(...t)=>U.deleteAllCartItem&&U.deleteAllCartItem(...t)),disabled:0===$.cartData.carts.length}," 清空購物車 ",8,d)]),(0,s._)("table",c,[r,(0,s._)("tbody",null,[$.cartData.carts?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)($.cartData.carts,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:$.loadingState===t.id,onClick:a=>U.removeCartItem(t.id)}," x ",8,u)]),(0,s._)("td",null,[(0,s.Uk)((0,o.zw)(t.product.title)+" ",1),t.coupon?((0,s.wg)(),(0,s.iD)("div",h,"已套用優惠券")):(0,s.kq)("",!0)]),(0,s._)("td",null,[(0,s._)("div",p,[(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":a=>t.qty=a,disabled:$.loadingState===t.id,onChange:a=>U.updateCartNumber(t)},null,40,_),[[n.nr,t.qty,void 0,{number:!0}]]),(0,s._)("span",b,(0,o.zw)(t.product.unit),1)])])]),(0,s._)("td",m,[t.final_total!==t.total?((0,s.wg)(),(0,s.iD)("small",v,"折扣價：")):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,o.zw)(t.total),1)])])))),128)):(0,s.kq)("",!0)]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[C,(0,s._)("td",k,(0,o.zw)($.cartData.total),1)]),$.cartData.final_total!==$.cartData.total?((0,s.wg)(),(0,s.iD)("tr",y,[w,(0,s._)("td",x,(0,o.zw)($.cartData.total-$.cartData.final_total),1)])):(0,s.kq)("",!0)])]),(0,s._)("div",D,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":a[1]||(a[1]=t=>$.discountCode=t),placeholder:"請輸入優惠碼"},null,512),[[n.nr,$.discountCode]]),(0,s._)("div",L,[(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:a[2]||(a[2]=(...t)=>U.addCoupon&&U.addCoupon(...t))}," 套用優惠碼 ")])]),0!==$.cartData.carts.length?((0,s.wg)(),(0,s.iD)("div",f,[(0,s.Wm)(I,{type:"button",class:"btn btn-lg btn-primary",to:"/user/order"},{default:(0,s.w5)((()=>[q])),_:1})])):(0,s.kq)("",!0)])}var $=e(7897),U={data(){return{cartData:{carts:[]},discountCode:"",loadingState:"",isLoading:!1}},methods:{getCartList(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/v2/api/steven1220/cart";this.$http.get(t).then((t=>{console.log(t),this.cartData=t.data.data,console.log(this.cartData),this.isLoading=!1})).catch((t=>{console.log(t.response.data)}))},updateCartNumber(t){if(0==t.qty||t.qty<0)return alert("數量至少為1個"),void this.getCartList();this.loadingState=t.id;const a={product_id:t.id,qty:t.qty},e=`https://vue3-course-api.hexschool.io/v2/api/steven1220/cart/${t.id}`;this.$http.put(e,{data:a}).then((t=>{console.log(t),this.getCartList(),this.loadingState="",$.Z.emit("get-cart")})).catch((t=>{console.log(t.response.data)}))},removeCartItem(t){this.loadingState=t;const a=`https://vue3-course-api.hexschool.io/v2/api/steven1220/cart/${t}`;this.$http.delete(a).then((()=>{this.getCartList(),this.loadingState="",$.Z.emit("get-cart")})).catch((t=>{console.log(t.response.data)}))},deleteAllCartItem(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/v2/api/steven1220/carts";this.$http.delete(t).then((()=>{this.getCartList(),$.Z.emit("get-cart"),this.isLoading=!1})).catch((t=>{console.log(t.response.data)}))},addCoupon(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/v2/api/steven1220/coupon",a={code:this.discountCode};this.$http.post(t,{data:a}).then((()=>{this.getCartList(),this.isLoading=!1})).catch((()=>{this.isLoading=!1,alert("折扣碼失效")}))}},mounted(){this.getCartList()}},z=e(89);const I=(0,z.Z)(U,[["render",S]]);var V=I}}]);
//# sourceMappingURL=173.b518bcb4.js.map