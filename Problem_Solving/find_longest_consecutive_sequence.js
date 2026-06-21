//Given an unsorted array of integers 'nums', return the length of the longest consecutive elements sequence. 
//You must write an algorithm that runs in O(n) time.

var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let longestCS = 0;

    for (i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentCS = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentCS += 1;
            }

            longestCS = Math.max(longestCS, currentCS);
        }
    }

    return longestCS;
}

const input1 = [100, 4, 200, 1, 3, 2];

const input2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const input3 = [1, 0, 1, 2];

console.log("Input 1 Longest Consecutive is: ", longestConsecutive(input1));
console.log("Input 2 Longest Consecutive is: ", longestConsecutive(input2));
console.log("Input 3 Longest Consecutive is: ", longestConsecutive(input3));