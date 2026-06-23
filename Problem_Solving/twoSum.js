// Given an array of integers 'nums' and a integer 'target', return indices of the two numbers such that they add up to 'target'.
// You may assume that each input would have exacly one solution, and you may not use the same element twice. 
// You can return the answer in any order. 

function twoSum(nums, target) {
    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) {
            indices.push(i);
            indices.push(i + 1);
        }
    }

    return indices;
};

console.log("Case 1: " + twoSum([2, 7, 11, 15], 9));
console.log("Case 2: " + twoSum([3, 2, 4], 6));
console.log("Case 3: " + twoSum([3, 3], 6));