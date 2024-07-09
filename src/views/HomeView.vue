<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <HeroSection />

      <div class="row mt-4">
        <div class="col">
          <h2>Best <strong>Fashion</strong></h2>
        </div>
        <div class="col">
          <router-link to="/fashion" class="btn btn-success float-right"
            >Lihat Semua <b-icon-eye-fill></b-icon-eye-fill
          ></router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :product="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import CardProduct from '@/components/CardProduct.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    HeroSection,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data
    },
  },
  mounted() {
    axios
      .get('http://localhost:3000/best-products')
      .then(response => {
        this.setProducts(response.data); // Corrected method call to setProducts
      })
      .catch(error => {
        console.log("Failed to fetch products:", error);
      });
  },
};
</script>
