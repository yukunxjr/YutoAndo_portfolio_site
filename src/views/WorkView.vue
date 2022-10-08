<script setup></script>
<template>
  <v-main>
    <v-container class="work-container">
      <v-row>
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="6">
          <v-card height="30vh" class="ma-10"></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
