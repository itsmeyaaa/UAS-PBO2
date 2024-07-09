<template>
    <div class="pesanan-sukses">
        <Navbar />
        <br>
        <br>
        <br>
        <h2 class="center-text"><strong>Pesanan Sukses</strong></h2>
        <div class="gif-container">
            <img src="https://i.pinimg.com/originals/79/74/d3/7974d36db5d70c1e7b9c54a60f0e0498.gif" alt="GIF">
           
        </div>
        <a href="/"><Strong>BACK</Strong></a>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";  

export default {
    name: "PesananSukses",
    components: {
        Navbar,
    },
}
</script>

<style>
.pesanan-sukses {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Full viewport height */
    text-align: center;
}

.center-text {
    text-align: center;
}

.gif-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

.gif-container img {
    max-width: 100%; /* Ensures GIF is responsive */
    height: auto;
}
</style>
