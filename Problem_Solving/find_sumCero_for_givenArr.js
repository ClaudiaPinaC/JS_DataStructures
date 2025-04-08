// Given an integer Array, check if it contains a subarray having zero-sum.

function findSubArrays(arr) {
  let sum = 0;
  let seenSums = new Map();
  let result = [];

  seenSums.set(0, [-1]); // Sum 0 has occurred before index -1 (helps in case the sum 0 is from the start)

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (seenSums.has(sum)) {
      let indices = seenSums.get(sum);

      for (let idx of indices) {
        result.push(arr.slice(idx + 1, i + 1));
      }
    }

    if (seenSums.has(sum)) {
      seenSums.get(sum).push(i);
    } else {
      seenSums.set(sum, [i]);
    }
  }

  return result;
}

let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
let subarrays = findSubArrays(arr);
console.log(subarrays);
