//Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (charIndexMap.has(s[i]) && charIndexMap.get(s[i]) >= start) {
            start = charIndexMap.get(s[i]) + 1;
        }
        charIndexMap.set(s[i], i);
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
console.log(lengthOfLongestSubstring(""));          // Output: 0
console.log(lengthOfLongestSubstring("au"));        // Output: 2