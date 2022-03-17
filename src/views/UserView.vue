<template>
  <Navbar></Navbar>
  <FooterView></FooterView>
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    Navbar,
    FooterView,
  },
};
</script>
