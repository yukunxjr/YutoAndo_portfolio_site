<template>
  <div class="footer">
    <v-footer padless color="transparent">
      <v-col class="text-center" cols="12">
        &copy;
        {{ new Date().getFullYear() }} — <strong>Yuto Ando.</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<style scoped>
.footer {
  color: #fff;
}
</style>
