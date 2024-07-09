<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjang" />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/fashion" class="text-dark">Fashion</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Fashion Order
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      <!-- Tabel Keranjang -->
      <div class="row">
        <div class="col">
          <h2>Keranjang <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="text-center align-middle">No</th>
                  <th scope="col" class="text-center align-middle">Foto</th>
                  <th scope="col" class="text-center align-middle">Item</th>
                  <th scope="col" class="text-center align-middle">Keterangan</th>
                  <th scope="col" class="text-center align-middle">Jumlah Item</th>
                  <th scope="col" class="text-center align-middle">Harga</th>
                  <th scope="col" class="text-center align-middle">Total Harga</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <td><strong>{{ index + 1 }}</strong></td>
                  <td>
                    <img v-if="keranjang.product && keranjang.product.gambar" :src="'../assets/images/' + keranjang.product.gambar" class="img-fluid shadow" width="250" />
                    <span v-else>No Image Available</span>
                  </td>
                  <td class="text-left"><strong>{{ keranjang.product ? keranjang.product.nama : 'Nama Produk Tidak Tersedia' }}</strong></td>
                  <td class="text-left">{{ keranjang.keterangan || "-" }}</td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td class="text-left">Rp. {{ keranjang.product ? keranjang.product.harga : '-' }}</td>
                  <td class="text-left">
                    <strong v-if="keranjang.product">{{ parseFloat(keranjang.product.harga) * parseInt(keranjang.jumlah_pemesanan) }}</strong>
                    <span v-else>-</span>
                  </td>
                  <td class="text-center text-danger">
                    <b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" class="right-align">
                    <strong>Total Harga :</strong>
                  </td>
                  <td class="right-align">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" @submit.prevent="checkout">
            <div class="form-group">
              <label for="nama">Nama :</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="alamat">Alamat :</label>
              <input type="text" class="form-control" v-model="pesan.alamat" />
            </div>
            <button type="submit" class="btn btn-success float-right">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "KeranjangCatalog",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {
        nama: '',
        alamat: '',
        item: []
      },
    };
  },
  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/keranjang")
        .then((response) => {
          this.keranjangs = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    hapusKeranjang(id) {
      axios
        .delete(`http://localhost:3000/keranjang/${id}`)
        .then(() => {
          this.keranjangs = this.keranjangs.filter(item => item.id !== id);
          this.$toast.open({
            message: "Pesanan Berhasil Dihapus",
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        })
        .catch((error) => {
          this.$toast.error("Error deleting item: " + error.message);
        });
    },
    checkout() {
      if (this.pesan.nama && this.pesan.alamat) {
        this.pesan.item = this.keranjangs;
        axios
          .post("http://localhost:3000/pesanan", this.pesan)
          .then(() => {
            this.keranjangs.forEach(item => {
              axios.delete(`http://localhost:3000/keranjang/${item.id}`)
                .catch(error => console.error(error));
            });
            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Pesanan Sukses", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        this.$toast.open({
          message: "Nama dan Alamat Harus Diisi",
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    }
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((total, item) => {
        return total + (item.product ? item.product.harga * item.jumlah_pemesanan : 0);
      }, 0);
    },
  },
};
</script>

<style>
/* CSS styling can be added here */
</style>
