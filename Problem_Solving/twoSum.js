// Given an array of integers 'nums' and a integer 'target', return indices of the two numbers such that they add up to 'target'.
// You may assume that each input would have exacly one solution, and you may not use the same element twice. 
// You can return the answer in any order. 


// Optimal Solution
// This method loops through the array exaclty once, storing each number complement 
// and it index in a hashmap, this way achieve O(n) time complexity. 

function twoSumOS(nums, target) {
    const complementMap = new Map(); // creating HashMap

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // if the complement is already in our map, we found the pair
        if (complementMap.has(complement)) {
            return [complementMap.get(complement), i];
        }

        // if not then it will save the current number and its index to the map 
        complementMap.set(currentNum, i);
    }

    return [];
};

console.log("Case 1 OS: " + twoSumOS([2, 7, 11, 15], 9));
console.log("Case 2 OS: " + twoSumOS([3, 2, 4], 6));
console.log("Case 3 OS: " + twoSumOS([3, 3], 6));

// Simplified function

function twoSumOS_(nums, target) {
    let hm = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hm.has(nums[i])) return [hm.get(nums[i]), i]
        hm.set(target - nums[i], i);
    }
}

console.log("Case 1 OS_: " + twoSumOS_([2, 7, 11, 15], 9));
console.log("Case 2 OS_: " + twoSumOS_([3, 2, 4], 6));
console.log("Case 3 OS_: " + twoSumOS_([3, 3], 6));


// Brute force Approach
// If it's not possible to use extra memory, we can use a nested loop
// But, this degrades performance to O(n^2) time complexity because it checks every single combination.
function twoSumBF(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }

    }

    return [];
};

console.log("Case 1: " + twoSumBF([2, 7, 11, 15], 9));
console.log("Case 2: " + twoSumBF([3, 2, 4], 6));
console.log("Case 3: " + twoSumBF([3, 3], 6));