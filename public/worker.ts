let sum = 0
let num = 10000000
for (let i = 0; i < num; i++) {
  sum = sum + i
}
self.onmessage = (event) => {
  console.log(event)
}
const arrayBuffer = new ArrayBuffer(64)
self.postMessage(arrayBuffer, [arrayBuffer])
console.log(arrayBuffer)