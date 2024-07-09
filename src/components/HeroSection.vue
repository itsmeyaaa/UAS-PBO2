<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Explore Fashion,</strong> 
                <br />Anytime, Anywhere
              </h2>
              <p>Ayo segera pilih dan pesan busana favorit Anda</p>
              <router-link to="/fashion" class="btn btn-lg btn-success">
                Pesan 
                <b-icon-arrow-right-circle-fill></b-icon-arrow-right-circle-fill>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Explore Fashion,</strong> 
                <br />Anytime, Anywhere
              </h2>
              <p>Ayo segera pilih dan pesan busana favorit Anda</p>
              <router-link to="/fashion" class="btn btn-lg btn-success">
                Pesan 
                <b-icon-arrow-right-circle-fill></b-icon-arrow-right-circle-fill>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style>
</style>
