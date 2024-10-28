// generator funtion that calls anotherGenerator funtion on a yield* expression

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); //10
console.log(gen.next().value); //11 - from anotherGenerator func
console.log(gen.next().value); //12 - from anotherGenerator func
console.log(gen.next().value); //13 - from anotherGenerator func
console.log(gen.next().value); //20
