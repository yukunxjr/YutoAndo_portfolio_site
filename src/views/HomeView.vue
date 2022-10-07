<script setup>
import portfolio_img from '../assets/img/portfolio_img.jpg';
</script>

<template>
  <v-img
    :src="portfolio_img"
    gradient="to top right, rgba(100,30,40,.33), rgba(25,32,40,.5)"
  ></v-img>

  <p class="myname">Yuto Ando</p>
</template>

<style scoped>
.myname {
  font-family: 'Rockville Brush Font';
}
</style>
