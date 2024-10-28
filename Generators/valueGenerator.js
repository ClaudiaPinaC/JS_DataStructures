// generator function to display value twice
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // display value as 10 due to the parameter on line 7

console.log(gen.next().value); // display value as 20 due to the sum on the value on line 4 in the funtion
