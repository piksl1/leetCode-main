/* 2648. Generate Fibonacci Sequence

Write a generator function that returns a generator object which yields the fibonacci sequence. */

function* fibGenerator(): Generator<number, any, number> {
  let prev = 0;
  let curr = 1;
  yield prev;
  yield curr;
  while (true) {
    const next = prev + curr;
    yield next;
    prev = curr;
    curr = next;
  }
}

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
