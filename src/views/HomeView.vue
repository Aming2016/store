<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { storeToRefs } from 'pinia';
import appStore from '@/stores';
// setup composition API模式
const { count } = storeToRefs(appStore.counter);
const { increment, doubleCount } = appStore.counter;
console.log(count.value)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
