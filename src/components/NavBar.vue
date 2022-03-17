<template>
  <div class="bg-white sticky-top">
    <div class="container mt-3">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <router-link
          class="navbar-brand position-absolute"
          to="/"
          style="left: 50%; transform: translate(-50%, -50%); top: 50%"
        >
          法式經典甜點
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse bg-white custom-header-md-open"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link ps-0" to="/user/products"
                >產品</router-link
              >
            </li>
          </ul>
        </div>
        <div class="navbar-nav ms-auto">
          <a class="nav-link">Blog</a>
          <router-link class="nav-link position-relative" to="/user/cart"
            ><i class="bi bi-cart fs-5"></i>
            <span
              class="position-absolute start-100 translate-middle badge rounded-pill bg-danger"
              style="top: 10px"
            >
              {{ cartData.carts.length }}
              <span class="visually-hidden">unread messages</span>
            </span>
          </router-link>
          <router-link class="nav-link ps-5" to="/login">後台登入</router-link>
        </div>
      </nav>
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
    };
  },
  methods: {
    // 取得購物車資訊
    getCartList() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          // console.log("getCart", res);
          this.cartData = res.data.data;
          console.log(this.cartData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCartList();
    // 監聽點擊加入購物車，更新購物車的數字
    emitter.on("get-cart", () => {
      this.getCartList();
    });
  },
};
</script>
