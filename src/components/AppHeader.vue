<script setup></script>

<template>
  <v-app-bar app color="transparent" flat>
    <v-row style="height: 60px" justify="center" align-content="center">
      <v-btn large depressed>
        <router-link to="/" class="btn">Home</router-link>
      </v-btn>
      <v-btn large depressed>
        <router-link to="/profile" class="btn">Profile</router-link>
      </v-btn>
      <v-btn large depressed>
        <router-link to="/works" class="btn">Works</router-link>
      </v-btn>
      <v-btn large depressed>
        <router-link to="/timerDemo" class="btn">Timer</router-link>
      </v-btn>
    </v-row>
  </v-app-bar>
</template>

<style>
.btn {
  color: #fff;
}
</style>
