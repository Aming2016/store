import { ref } from 'vue';
import { defineStore } from 'pinia';

// 使用setup模式定义
const useCounterStoreForSetup = defineStore('counter', () => {
  const count = ref<number>(3);
  function increment() {
    count.value++;
  }

  function doubleCount() {
    return count.value * 2;
  }

  return { count, increment, doubleCount };
});
export default useCounterStoreForSetup