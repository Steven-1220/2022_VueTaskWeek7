<template>
  <div class="container">
    <VueLoading :active="isLoading"></VueLoading>
    <div class="text-end">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="deleteAllCartItem"
        :disabled="cartData.carts.length === 0"
      >
        清空購物車
      </button>
    </div>
    <table class="table align-middle">
      <thead>
        <tr>
          <th></th>
          <th>品名</th>
          <th style="width: 150px">數量/單位</th>
          <th>價格</th>
        </tr>
      </thead>
      <tbody>
        <!-- 加入 v-if -->
        <template v-if="cartData.carts">
          <tr v-for="item in cartData.carts" :key="item.id">
            <td>
              <!-- 刪除特定購物車產品按鈕 -->
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                :disabled="loadingState === item.id"
                @click="removeCartItem(item.id)"
              >
                x
              </button>
            </td>
            <td>
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">已套用優惠券</div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <div class="input-group mb-3">
                  <input
                    min="1"
                    type="number"
                    class="form-control"
                    v-model.number="item.qty"
                    :disabled="loadingState === item.id"
                    @change="updateCartNumber(item)"
                  />

                  <span class="input-group-text" id="basic-addon2">{{
                    item.product.unit
                  }}</span>
                </div>
              </div>
            </td>
            <td class="text-end">
              <small class="text-success" v-if="item.final_total !== item.total"
                >折扣價：</small
              >
              {{ item.total - item.final_total }}
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ cartData.total }}</td>
        </tr>
        <tr v-if="cartData.final_total !== cartData.total">
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">
            {{ cartData.total - cartData.final_total }}
          </td>
        </tr>
        <tr v-else>
          <td>{{ cartData.final_total }}</td>
        </tr>
      </tfoot>
    </table>

    <div class="input-group mb-3 input-group-sm">
      <input
        type="text"
        class="form-control"
        v-model="discountCode"
        placeholder="請輸入優惠碼"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="addCoupon"
        >
          套用優惠碼
        </button>
      </div>
    </div>

    <div class="text-end" v-if="cartData.carts.length !== 0">
      <router-link type="button" class="btn btn-lg btn-primary" to="/user/order"
        >結帳去</router-link
      >
    </div>
  </div>
</template>

<script>
import emitter from "@/libraries/emitter";
export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
      discountCode: "",
      loadingState: "",
      isLoading: false,
    };
  },
  methods: {
    // 取得購物車列表資訊
    getCartList() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res);
          this.cartData = res.data.data;
          console.log(this.cartData);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    //更改購物車數量
    updateCartNumber(item) {
      // 判斷是否為 0 或是負數
      if (item.qty == 0 || item.qty < 0) {
        alert("數量至少為1個");
        this.getCartList();
        return;
      }
      // 賦予 disabled 狀態
      this.loadingState = item.id;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };

      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.$http
        .put(url, { data })
        .then(() => {
          // console.log(res);
          // 再取得購物車列表
          this.getCartList();
          this.loadingState = "";
          emitter.emit("get-cart");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    // 刪除購物車特定產品
    removeCartItem(id) {
      // 賦予 disabled 狀態
      this.loadingState = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http
        .delete(url)
        .then(() => {
          // console.log(res);
          // 再取得購物車列表
          this.getCartList();
          this.loadingState = "";
          emitter.emit("get-cart");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    //清空全部購物車產品
    deleteAllCartItem() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then(() => {
          // console.log(res);
          // 再取得購物車列表
          this.getCartList();
          emitter.emit("get-cart");
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    //加入優惠券
    addCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const couponCode = {
        code: this.discountCode,
      };
      this.$http
        .post(url, { data: couponCode })
        .then(() => {
          this.getCartList();
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          alert("折扣碼失效");
        });
    },
  },

  mounted() {
    this.getCartList();
  },
};
</script>
