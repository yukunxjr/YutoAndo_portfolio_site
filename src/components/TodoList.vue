<script setup>
defineProps(['todos']);
const emit = defineEmits(['remove']);
const clickRemove = (i) => emit('remove', i);
</script>

<template>
  <ul v-if="todos.length >= 1">
    <li v-for="(todo, i) in todos" v-bind:key="i">
      {{ todo }}
      <span @click="clickRemove(i)" style="cursor: pointer">削除</span>
    </li>
  </ul>
  <p v-else>※TODOを追加してください</p>
</template>
