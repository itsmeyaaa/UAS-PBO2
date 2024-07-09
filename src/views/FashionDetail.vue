<template>
  <div class="fashion-detail">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/fashion" class="text-dark"
                  >Fashion</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Fashion Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
            alt="Product Image"
            v-if="product.gambar"
          />
        </div>
        <div class="col-md-6">
          <div class="col-md-10">
            <h2>
              <strong>{{ product.nama }}</strong>
            </h2>
            <hr />
            <h4>
              Harga : <strong>Rp. {{ product.harga }}</strong>
            </h4>
            <form class="mt-4" @submit.prevent="pemesanan">
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesan</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="pesan.jumlah_pemesanan"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div class="form-group">
                <label>Size</label>
                <br />
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="sizeOptions"
                    id="sizeS"
                    value="S"
                    v-model="pesan.size"
                  />
                  <label class="form-check-label" for="sizeS">S</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="sizeOptions"
                    id="sizeM"
                    value="M"
                    v-model="pesan.size"
                  />
                  <label class="form-check-label" for="sizeM">M</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="sizeOptions"
                    id="sizeL"
                    value="L"
                    v-model="pesan.size"
                  />
                  <label class="form-check-label" for="sizeL">L</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="sizeOptions"
                    id="sizeXL"
                    value="XL"
                    v-model="pesan.size"
                  />
                  <label class="form-check-label" for="sizeXL">XL</label>
                </div>
              </div>

              <button type="submit" class="btn btn-success">
                Pesan <b-icon-cart2></b-icon-cart2>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FashionDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
      console.log("Product data:", data); // Debugging: Log the product data
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.product = this.product;
        this.pesan.keterangan = `Size: ${this.pesan.size}`;
        axios
          .post("http://localhost:3000/keranjang", this.pesan)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.open({
              message: "Barang Masuk Keranjang",
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.open({
          message: "Jumlah Pesanan Harus Diisi",
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
/* Anda bisa menambahkan gaya CSS di sini */
</style>
