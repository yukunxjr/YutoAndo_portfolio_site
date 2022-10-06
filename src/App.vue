<script setup>
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import Works from './components/Works.vue';
import TodoList from './components/TodoList.vue';
import TimerDemo from './components/TimerDemo.vue';

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
  <AppHeader />
  <!-- <input type="text" v-model="newTodo" />
  <button @click="add">追加</button>
  <TodoList :todos="todos" @removeTodo="removeTodo" /> -->
  <!-- <TimerDemo /> -->
</template>

<style scoped></style>
