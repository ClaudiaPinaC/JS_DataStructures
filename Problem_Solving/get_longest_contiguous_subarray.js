
// Problem:
// Given an array of integers, return the longest contiguous
// subarray containing at most two distinct values.

// Solution:
// sliding window technique --> O(n) time complexity.

function longestSubarrayWithTwoDistinct(nums) {
    let maxLength = 0;
    let left = 0;
    const frequencyMap = new Map();

    for (let right = 0; right < nums.length; right++) {
        const rightNum = nums[right];

        // add cuurent number to the frequency map
        frequencyMap.set(rightNum, (frequencyMap.get(rightNum) || 0) + 1);

        // shrink the window from the left if we have more than 2 distinct numbers
        while (frequencyMap.size > 2) {
            const leftNum = nums[left];
            frequencyMap.set(leftNum, frequencyMap.get(leftNum) - 1);

            // remove the number entirely if its count hits 0
            if (frequencyMap.get(leftNum) === 0) {
                frequencyMap.delete(leftNum);
            }
            left++; // move left pointer forward
        }

        // calculate the maximum length of the valid window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestSubarrayWithTwoDistinct([1, 2, 1, 2, 3]));    // Output: 4  (Subarray:)
console.log(longestSubarrayWithTwoDistinct([0, 1, 2, 2, 2, 3])); // Output: 4  (Subarray:)
console.log(longestSubarrayWithTwoDistinct([1, 2, 3, 4, 5]));    // Output: 2  (Subarray:)
console.log(longestSubarrayWithTwoDistinct([1, 1, 1, 1]));       // Output: 4  (Subarray:)