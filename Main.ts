function addNumbers(a: number, b: number) {
  return a + b;
}
const sum = addNumbers(4, 57);
console.log(sum);

function loop(num: number, msg: string) {
  for (let i = 0; i < num; i++) {
    console.log(msg);
  }
}

loop(2, "Hello!")