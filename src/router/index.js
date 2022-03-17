import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    //登入頁面
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    //前台首頁
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    // 使用者頁面
    path: "/user",
    component: () => import("../views/UserView.vue"),
    children: [
      {
        // 產品列表
        path: "products",
        name: "products",
        component: () => import("../views/ProductsView.vue"),
      },
      {
        //個別產品資訊
        path: "product/:id",
        name: "product",
        component: () => import("../views/ProductView.vue"),
      },
      {
        // 顧客購物車
        path: "cart",
        component: () => import("../views/UserCart.vue"),
      },
      {
        // 顧客訂單
        path: "order",
        component: () => import("../views/UserOrder.vue"),
      },
    ],
  },
  {
    // 後台
    path: "/admin",
    component: () => import("../views/DashboardView.vue"),
    children: [
      {
        // 產品
        path: "products",
        component: () => import("../views/Dashboard/AdminProducts.vue"),
      },
      {
        // 訂單
        path: "orders",
        component: () => import("../views/Dashboard/AdminOrders.vue"),
      },
      {
        // 優惠券
        path: "coupon",
        component: () => import("../views/Dashboard/AdminCoupon.vue"),
      },
      {
        //貼文
        path: "article",
        component: () => import("../views/Dashboard/AdminArticle.vue"),
      },
    ],
  },
  {
    // 404 頁面
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
