/* 2665. Counter II


The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it. */
type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let currValue: number = init;
  return {
    increment: function (): number {
      currValue++;
      return currValue;
    },
    decrement: function (): number {
      currValue--;
      return currValue;
    },
    reset: function (): number {
      currValue = init;
      return currValue;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4);
