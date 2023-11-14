function createCounter(n: number): () => number {
  let sum = n;
  return function (): number {
    return n++;
  };
}

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
