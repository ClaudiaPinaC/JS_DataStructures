// Given a string 's', return the longest palindromic substring in 's'.

function longestPalindrome(s) {
    if (!s || s.length < 0) return "";

    let start = 0;
    let maxLength = 1;

    function isPalindrome(leftVal, rightVal) {
        while (leftVal >= 0 && rightVal < s.length && s[leftVal] === s[rightVal]) {
            const currentLength = rightVal - leftVal + 1;
            if (currentLength > maxLength) {
                start = leftVal;
                maxLength = currentLength;
            }
            leftVal--;
            rightVal++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        isPalindrome(i, i); // check odd-length palindromes
        isPalindrome(i, i + 1); // check even length palindromes
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));