<script setup>
import { ref } from 'vue';
const hour = ref(0);
const min = ref(0);
const sec = ref(0);
const timerOn = ref(false);
const timer = ref(0);

const count = () => {
  if (hour.value >= 1 && min.value <= 0 && sec.value <= 0) {
    hour.value--;
    min.value = 59;
    sec.value = 59;
  } else if (hour.value <= 0 && sec.value <= 0 && min.value <= 0) {
    complete();
  } else {
    if (sec.value <= 0 && min.value >= 1) {
      min.value--;
      sec.value = 59;
    } else {
      sec.value--;
    }
  }
};

const start = () => {
  timer.value = setInterval(() => {
    count();
  }, 1000);
  timerOn.value = true;
};
const stop = () => {
  clearInterval(timer.value);
  timerOn.value = false;
};

const complete = () => {
  clearInterval(timer.value);
};
</script>

<template>
  <div id="counter">
    <input type="number" v-model="hour" />時間
    <input type="number" v-model="min" />分
    <input type="number" v-model="sec" />秒
    <button @click="start" v-if="!timerOn">start</button>
    <button @click="stop" v-if="timerOn">stop</button>
  </div>
</template>
