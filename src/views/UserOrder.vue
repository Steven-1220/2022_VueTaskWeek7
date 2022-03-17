<template>
  <!-- 訂單資訊 -->
  <div class="container">
    <VueLoading :active="isLoading"></VueLoading>
    <div class="my-5 row justify-content-center">
      <VForm ref="form" class="col-md-6" v-slot="{ errors }">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <VField
            id="email"
            name="email"
            type="email"
            class="form-control"
            rules="email|required"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            v-model="form.user.email"
          ></VField>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VField
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></VField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VField
            id="tel"
            name="電話"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="min:8|max:10|required"
            v-model="form.user.tel"
          ></VField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VField
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></VField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <!-- 驗證沒過時或是購物車中沒產品時，無法 click -->
          <button
            type="submit"
            class="btn btn-danger"
            :disabled="
              Object.keys(errors).length > 0 || cartData.carts.length === 0
            "
            @click.prevent="sendOrder"
          >
            送出訂單
          </button>
        </div>
      </VForm>
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
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      isLoading: false,
    };
  },
  methods: {
    //送出訂單
    sendOrder() {
      const order = this.form;
      // console.log(order);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      this.$http
        .post(url, { data: order })
        .then((res) => {
          // console.log(res);
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.form.message = "";
          emitter.emit("get-cart");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得購物車列表資訊
    getCartList() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res);
          this.cartData = res.data.data;
          // console.log(this.cartData);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    LoadingEffect() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
  },
  mounted() {
    this.LoadingEffect();
    this.getCartList();
  },
};
</script>
