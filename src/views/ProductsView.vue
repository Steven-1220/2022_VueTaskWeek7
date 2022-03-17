<template>
  <VueLoading :active="isLoading"></VueLoading>
  <nav
    class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom"
  >
    <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
      <a class="nav-item nav-link text-nowrap px-2" href="#">節慶甜點</a>
      <a class="nav-item nav-link text-nowrap px-2" href="#">經典甜點</a>
      <a class="nav-item nav-link text-nowrap px-2 active" href="#"
        >巧克力甜點 <span class="sr-only">(current)</span></a
      >
      <a class="nav-item nav-link text-nowrap px-2" href="#">餐前鹹點</a>
    </div>
  </nav>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row row-cols-1 row-cols-md-4">
      <div class="col" v-for="item in products" :key="item.id">
        <div class="card border-0 mb-4 position-relative">
          <!-- <img :src="item.imageUrl" class="card-img-top rounded-0" alt="" /> -->
          <div
            :style="{ backgroundImage: `url(${item.imageUrl})` }"
            style="
              height: 300px;
              background-size: cover;
              background-position: center;
            "
          ></div>
          <a href="#" class="text-dark">
            <i
              class="far fa-heart position-absolute"
              style="right: 16px; top: 16px"
            ></i>
          </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3">
              <router-link :to="`product/${item.id}`">{{
                item.title
              }}</router-link>
            </h4>
            <p
              class="card-text text-muted mb-0"
              style="height: 4.5rem; overflow: hidden"
            >
              {{ item.description }}
            </p>
            <p class="text-muted mt-3">NT$ {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/libraries/emitter";

export default {
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          // console.log(res);
          this.products = res.data.products;
          emitter.emit("get-cart");
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
