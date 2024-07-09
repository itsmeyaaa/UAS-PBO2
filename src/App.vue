<template>
  <div id="app">
    <router-view/>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/Footer.vue';

export default {
  components: {
    AppFooter,
  }
}
</script>

<style>

</style>