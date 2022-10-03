<script setup>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';

const todos = ref([]);
const newTodo = ref('');

const add = () => {
  todos.value.push(newTodo.value);
  newTodo.value = '';
};

const removeTodo = (i) => {
  todos.value.splice(i, 1);
};
</script>

<template>
  <AppHeader x="red">My Todo</AppHeader>
  <input type="text" v-model="newTodo" />
  <button @click="add">追加</button>

  <ul>
    <li v-for="(todo, i) in todos" v-bind:key="i">
      {{ todo }} <span @click="removeTodo"> 削除 </span>
    </li>
  </ul>
</template>

<style scoped></style>
