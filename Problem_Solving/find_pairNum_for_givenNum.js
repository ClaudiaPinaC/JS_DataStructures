// Find a pair of numbers in an array that sum a given target.

function findPair(arr, target) {
  const seen = new Set();

  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [num, complement];
    }
    seen.add(num);
  }

  return null; // No pair found
}

const numbers = [2, 7, 11, 15];
const targetSum = 9;
const result = findPair(numbers, targetSum);

if (result) {
  console.log(`Pair found: ${result}`);
} else {
  console.log("No pair found.");
}
