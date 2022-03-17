<template>
  <Navbar></Navbar>
  <FooterView></FooterView>
  <div class="container">
    <h1 class="text-center">首頁</h1>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-light py-7">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <h3>Lorem ipsum</h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>
          <button class="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    Navbar,
    FooterView,
  },
};
</script>
