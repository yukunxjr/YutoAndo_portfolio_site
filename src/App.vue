<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <v-app>
    <v-main class="pa-0">
      <AppHeader />
      <router-view />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<style>
.pa-0 {
  background: gray;
}
</style>
