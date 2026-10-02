// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

function findTripletsWithoutMAP(nums) {
  nums.sort((a, b) => a - b); //sort array
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; //skip duplicates
        while (left < right && nums[right] === nums[right - 1]) right++; //skip duplicates
        left++;
        right--;
      } else {
        if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return triplets;
}

function findTripletsWithMap(nums) {
  const result = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    const seen = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      const complement = -nums[i] - nums[j];

      if (seen.has(complement)) {
        const triplet = [nums[i], nums[j], complement].sort((a, b) => a - b);
        result.add(triplet.toString()); // use string representation to store in set
      } else {
        seen.set(nums[j], j);
      }
    }
  }
  return Array.from(result).map((str) => str.split(",").map(Number));
}

let nums = [-1, 0, 1, 2, -1, -4];
let triplets = findTripletsWithMap(nums);
console.log(triplets);
