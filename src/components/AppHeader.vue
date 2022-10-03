<script setup>
defineProps(['x']);
</script>
<template>
  <header>
    <h1 v-bind:style="{ color: x }"><slot></slot></h1>
  </header>
</template>
