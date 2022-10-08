<script setup>
import portfolio_img from '../assets/img/portfolio_img.jpg';
</script>

<template>
  <div class="home">
    <v-img
      :src="portfolio_img"
      gradient="to top right, rgba(100,30,40,.33), rgba(25,32,40,.5)"
    >
    </v-img>
    <p class="text-md-h2 font-weight-thin">YutoAndo PortfolioSite</p>
  </div>
</template>

<style scoped>
.home {
  position: relative;
}
p {
  font-family: 'Caveat';
  color: white;
  /* font-size: 5em; */
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}
</style>
