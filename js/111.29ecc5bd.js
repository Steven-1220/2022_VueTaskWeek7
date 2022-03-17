"use strict";(self["webpackChunkweek7_hw_dashboard"]=self["webpackChunkweek7_hw_dashboard"]||[]).push([[111],{9111:function(t,e,l){l.r(e),l.d(e,{default:function(){return Yt}});var o=l(3396),s=l(7139);const a=(0,o._)("h2",{class:"text-center"},"產品列表",-1),d={class:"container"},i={class:"row py-3"},r={class:"col"},c={class:"text-end mt-4"},n={class:"table mt-4"},u=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",{width:"120"},"產品名稱"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"120"},"是否啟用"),(0,o._)("th",{width:"120"},"編輯")])],-1),p={id:"productList"},m={key:0,class:"text-success"},h={key:1},b={class:"btn-group"},g=["onClick"],_=["onClick"],f=(0,o.Uk)(" 本頁面有 "),P={id:"productCount"},w=(0,o.Uk)(" 項產品 ");function v(t,e,l,v,y,M){const k=(0,o.up)("VueLoading"),U=(0,o.up)("PaginationView"),x=(0,o.up)("AdminProductModal"),$=(0,o.up)("DeleteModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(k,{active:y.isLoading},null,8,["active"]),a,(0,o._)("div",d,[(0,o._)("div",i,[(0,o._)("div",r,[(0,o._)("div",c,[(0,o._)("button",{class:"btn btn-warning",onClick:e[0]||(e[0]=t=>M.openModal("new"))}," 建立新的產品 ")]),(0,o._)("table",n,[u,(0,o._)("tbody",p,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(y.products,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("td",null,(0,s.zw)(t.category),1),(0,o._)("td",null,(0,s.zw)(t.title),1),(0,o._)("td",null,(0,s.zw)(t.origin_price),1),(0,o._)("td",null,(0,s.zw)(t.price),1),(0,o._)("td",null,[t.is_enabled?((0,o.wg)(),(0,o.iD)("span",m,"啟用")):((0,o.wg)(),(0,o.iD)("span",h,"未啟用"))]),(0,o._)("td",null,[(0,o._)("div",b,[(0,o._)("button",{type:"button",class:"btn btn-outline-success btn-sm",onClick:e=>M.openModal("edit",t)}," 編輯 ",8,g),(0,o._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>M.openModal("delete",t)}," 刪除 ",8,_)])])])))),128))])]),(0,o._)("p",null,[f,(0,o._)("span",P,(0,s.zw)(y.products.length),1),w])])]),(0,o.Wm)(U,{pages:y.pagination,onEmitGetPage:M.getAllProducts},null,8,["pages","onEmitGetPage"]),(0,o.Wm)(x,{"product-mod":y.tempProduct,"is-new":y.isNew,onUpdateProduct:M.updateProduct,ref:"productModalRef"},null,8,["product-mod","is-new","onUpdateProduct"]),(0,o.Wm)($,{"del-product-item":y.tempProduct,onGetProducts:M.getAllProducts,ref:"delProductModalRef"},null,8,["del-product-item","onGetProducts"])])],64)}var y=l(6567),M=l(9242);const k={class:"modal fade",id:"productModal",ref:"modalRef",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},U={class:"modal-dialog modal-xl"},x={class:"modal-content"},$={class:"modal-header bg-dark text-white"},D={id:"productModalLabel",class:"modal-title"},C={key:0},V={key:1},S=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},N={class:"row"},A={class:"col-sm-4"},I={class:"mb-2"},L={class:"mb-3"},z=(0,o._)("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),F={class:"mb-3"},G=(0,o._)("label",{for:"formFile",class:"form-label"},"選擇檔案",-1),H=["src"],J=(0,o._)("h3",null,"多圖新增",-1),O={key:0},W={class:"my-3"},Y=(0,o._)("label",{for:"multiImg",class:"form-label"},"圖片網址",-1),Z=["onUpdate:modelValue"],q={class:"mb-3"},E=(0,o._)("label",{for:"formFile",class:"form-label"},"選擇檔案",-1),K=["src"],B={key:0},j={key:1},Q={key:1},T={class:"col-sm-8"},X={class:"mb-3"},tt=(0,o._)("label",{for:"title",class:"form-label"},"標題",-1),et={class:"row"},lt={class:"mb-3 col-md-6"},ot=(0,o._)("label",{for:"category",class:"form-label"},"分類",-1),st={class:"mb-3 col-md-6"},at=(0,o._)("label",{for:"price",class:"form-label"},"單位",-1),dt={class:"row"},it={class:"mb-3 col-md-6"},rt=(0,o._)("label",{for:"origin_price",class:"form-label"},"原價",-1),ct={class:"mb-3 col-md-6"},nt=(0,o._)("label",{for:"price",class:"form-label"},"售價",-1),ut=(0,o._)("hr",null,null,-1),pt={class:"mb-3"},mt=(0,o._)("label",{for:"description",class:"form-label"},"產品描述",-1),ht={class:"mb-3"},bt=(0,o._)("label",{for:"content",class:"form-label"},"說明內容",-1),gt={class:"mb-3"},_t={class:"form-check"},ft=(0,o._)("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Pt={class:"modal-footer"},wt=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function vt(t,e,l,s,a,d){return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",U,[(0,o._)("div",x,[(0,o._)("div",$,[(0,o._)("h5",D,[l.isNew?((0,o.wg)(),(0,o.iD)("span",C,"新增產品")):((0,o.wg)(),(0,o.iD)("span",V,"編輯產品"))]),S]),(0,o._)("div",R,[(0,o._)("div",N,[(0,o._)("div",A,[(0,o._)("div",I,[(0,o._)("div",L,[z,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>a.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[M.nr,a.tempProduct.imageUrl]]),(0,o._)("div",F,[G,(0,o._)("input",{class:"form-control",type:"file",ref:"fileRef",onChange:e[1]||(e[1]=t=>d.uploadMainImg())},null,544)])]),(0,o._)("img",{src:a.tempProduct.imageUrl,class:"img-fluid",alt:""},null,8,H)]),J,Array.isArray(a.tempProduct.imagesUrl)?((0,o.wg)(),(0,o.iD)("div",O,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.tempProduct.imagesUrl,((l,s)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:s+123},[(0,o._)("div",W,[Y,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t=>a.tempProduct.imagesUrl[s]=t,placeholder:"請輸入圖片網址"},null,8,Z),[[M.nr,a.tempProduct.imagesUrl[s]]])]),(0,o._)("div",q,[E,(0,o._)("input",{class:"form-control",type:"file",ref_for:!0,ref:"fileRef",onChange:e[2]||(e[2]=e=>t.uploadMain())},null,544)]),(0,o._)("img",{src:a.tempProduct.imagesUrl[s],class:"img-fluid",alt:""},null,8,K)],64)))),128)),!a.tempProduct.imagesUrl.length||a.tempProduct.imagesUrl[a.tempProduct.imagesUrl.length-1]?((0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[3]||(e[3]=t=>a.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(0,o.kq)("",!0),0!==a.tempProduct.imagesUrl.length?((0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[4]||(e[4]=t=>a.tempProduct.imagesUrl.pop())}," 刪除圖片 ")])):(0,o.kq)("",!0)])):((0,o.wg)(),(0,o.iD)("div",Q,[(0,o._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[5]||(e[5]=(...t)=>d.createImages&&d.createImages(...t))}," 新增圖片 ")]))]),(0,o._)("div",T,[(0,o._)("div",X,[tt,(0,o.wy)((0,o._)("input",{id:"title",type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>a.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[M.nr,a.tempProduct.title]])]),(0,o._)("div",et,[(0,o._)("div",lt,[ot,(0,o.wy)((0,o._)("input",{id:"category",type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=t=>a.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[M.nr,a.tempProduct.category]])]),(0,o._)("div",st,[at,(0,o.wy)((0,o._)("input",{id:"unit",type:"text",class:"form-control","onUpdate:modelValue":e[8]||(e[8]=t=>a.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[M.nr,a.tempProduct.unit]])])]),(0,o._)("div",dt,[(0,o._)("div",it,[rt,(0,o.wy)((0,o._)("input",{id:"origin_price",type:"number",min:"0",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=t=>a.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[M.nr,a.tempProduct.origin_price,void 0,{number:!0}]])]),(0,o._)("div",ct,[nt,(0,o.wy)((0,o._)("input",{id:"price",type:"number",min:"0",class:"form-control","onUpdate:modelValue":e[10]||(e[10]=t=>a.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[M.nr,a.tempProduct.price,void 0,{number:!0}]])])]),ut,(0,o._)("div",pt,[mt,(0,o.wy)((0,o._)("textarea",{id:"description",type:"text",class:"form-control","onUpdate:modelValue":e[11]||(e[11]=t=>a.tempProduct.description=t),placeholder:"請輸入產品描述"},"\n                ",512),[[M.nr,a.tempProduct.description]])]),(0,o._)("div",ht,[bt,(0,o.wy)((0,o._)("textarea",{id:"description",type:"text",class:"form-control","onUpdate:modelValue":e[12]||(e[12]=t=>a.tempProduct.content=t),placeholder:"請輸入說明內容"},"\n                ",512),[[M.nr,a.tempProduct.content]])]),(0,o._)("div",gt,[(0,o._)("div",_t,[(0,o.wy)((0,o._)("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"onUpdate:modelValue":e[13]||(e[13]=t=>a.tempProduct.is_enabled=t),"false-value":0},null,512),[[M.e8,a.tempProduct.is_enabled]]),ft])])])])]),(0,o._)("div",Pt,[wt,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=e=>t.$emit("update-product",a.tempProduct))}," 確認 ")])])])],512)}var yt=l(7972),Mt=l.n(yt),kt={data(){return{productModal:"",tempProduct:{}}},props:{productMod:{},isNew:{type:Boolean,default:!1}},emits:["update-product"],watch:{productMod(){this.tempProduct=this.productMod}},methods:{open(){this.productModal.show()},close(){this.productModal.hide()},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},uploadMainImg(){const t=this.$refs.fileRef.files[0],e=new FormData;e.append("file-to-upload",t);let l="圖片上傳";const o="https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/upload";this.$http.post(o,e).then((t=>{this.tempProduct.imageUrl=t.data.imageUrl,this.$refs.fileRef.value="",this.$httpMessageState(t,l)})).catch((t=>{console.log(t.response),l="圖片上傳失敗",this.$httpMessageState(t.response,l)}))},upload(t){let e=document.querySelectorAll("input[type=file]");const l=e[t].files[0],o=new FormData;o.append("file-to-upload",l);let s="圖片上傳";const a="https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/upload";this.$http.post(a,o).then((t=>{this.tempProduct.imagesUrl.push(t.data.imageUrl),this.$httpMessageState(t,s)})).catch((t=>{console.log(t.response),s="圖片上傳失敗",this.$httpMessageState(t.response,s)}))}},mounted(){this.productModal=new(Mt())(this.$refs.modalRef,{keyboard:!1})}},Ut=l(89);const xt=(0,Ut.Z)(kt,[["render",vt]]);var $t=xt;const Dt={id:"delProductModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ct={class:"modal-dialog"},Vt={class:"modal-content border-0"},St=(0,o._)("div",{class:"modal-header bg-danger text-white"},[(0,o._)("h5",{id:"delProductModalLabel",class:"modal-title"},[(0,o._)("span",null,"刪除產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Rt={class:"modal-body"},Nt=(0,o.Uk)(" 是否刪除 "),At={class:"text-danger"},It=(0,o.Uk)(" 商品(刪除後將無法恢復)。 "),Lt={class:"modal-footer"},zt=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ft(t,e,l,a,d,i){return(0,o.wg)(),(0,o.iD)("div",Dt,[(0,o._)("div",Ct,[(0,o._)("div",Vt,[St,(0,o._)("div",Rt,[Nt,(0,o._)("strong",At,(0,s.zw)(l.delProductItem.title),1),It]),(0,o._)("div",Lt,[zt,(0,o._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...t)=>i.deleteProduct&&i.deleteProduct(...t))}," 確認刪除 ")])])])],512)}var Gt={data(){return{delProductModal:""}},props:["delProductItem"],methods:{open(){this.delProductModal.show()},close(){this.delProductModal.hide()},deleteProduct(){this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/product/${this.delProductItem.id}`).then((t=>{this.$emit("get-products"),this.$httpMessageState(t,"刪除產品"),this.close()})).catch((t=>{console.log(t.response),this.$httpMessageState(t.response,"刪除產品")}))}},mounted(){this.delProductModal=new(Mt())(this.$refs.delModal,{keyboard:!1})}};const Ht=(0,Ut.Z)(Gt,[["render",Ft]]);var Jt=Ht,Ot={components:{PaginationView:y.Z,AdminProductModal:$t,DeleteModal:Jt},data(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},productId:"",pagination:{},isLoading:!1}},methods:{getAllProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/products/?page=${t}`;this.$http.get(e).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1})).catch((t=>{console.log(t.data)}))},openModal(t,e){console.log(t,e),"new"==t?(this.tempProduct={imagesUrl:[]},this.$refs.productModalRef.open(),this.isNew=!0):"edit"==t?(this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.productModalRef.open(),this.isNew=!1):"delete"==t&&(this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.delProductModalRef.open())},updateProduct(){let t="https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/product",e="post",l="新增產品";this.isNew||(t=`https://vue3-course-api.hexschool.io/v2/api/steven1220/admin/product/${this.tempProduct.id}`,e="put",l="更新產品"),this.$http[e](t,{data:this.tempProduct}).then((t=>{this.getAllProducts(),this.$httpMessageState(t,l),this.$refs.productModalRef.close()})).catch((t=>{console.log(t.response),this.$httpMessageState(t.response,l)}))}},mounted(){this.getAllProducts()}};const Wt=(0,Ut.Z)(Ot,[["render",v]]);var Yt=Wt}}]);
//# sourceMappingURL=111.29ecc5bd.js.map