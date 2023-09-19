<script setup lang="ts">
const myWorker = new Worker('./worker.ts')
// setup composition API模式
const arrayBuffer = new ArrayBuffer(45)
myWorker.postMessage(arrayBuffer, [arrayBuffer])
myWorker.onmessage = (event) => {
  console.log(event.data, '1111111111111')
}
</script>

<template>
  <main>
    3123213
  </main>
</template>

