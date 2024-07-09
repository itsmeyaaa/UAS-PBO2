<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <div class="container">
        <div class="navbar-logo">
          <img src="../assets/images/logo.png" alt="Logo" />
        </div>
        <b-navbar-brand href="#"><strong>RunwayRealM</strong></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/fashion">Category</router-link>
            </li>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">
                Keranjang
                <b-icon-bag-check-fill class="mr-2"></b-icon-bag-check-fill>
                <span class="badge badge-success ms-2">{{
                  updateKeranjang
                    ? updateKeranjang.length
                    : jumlah_pesanans.length
                }}</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AppNavbar",
  data() {
    return {
      jumlah_pesanans: [],
    };
  },
  props: {
    updateKeranjang: {
      type: Array,
      default: null,
    },
  },
  methods: {
    setJumlah(data) {
      this.jumlah_pesanans = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjang")
      .then((response) => {
        this.setJumlah(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch products:", error);
      });
  },
};
</script>

<style>
</style>