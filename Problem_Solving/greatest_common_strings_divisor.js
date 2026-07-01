// Greatest common divisor of Strings.

// For two strings 's' and 't', we say 't' divides 's'if and only if 's = t + t + t + ... + t + t' 
// (t is concatenated with itself one or more times).

// Return the largest string 'x' such that 'x' divides the strings given. 

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) { // we verify if the sum of the strings are equal
        return ""; // if it's not, we cannot create the same strings and we cannot find 'x'
    }

    const gcd = (len1, len2) => { // use of Euclid's algorithm
        while (len2 !== 0) {
            [len1, len2] = [len2, len1 % len2];
        }
        return len1;
    };

    return str1.slice(0, gcd(str1.length, str2.length));
}

const str1_c1 = "ABCABC";
const str2_c1 = "ABC";

const str1_c2 = "ABABAB";
const str2_c2 = "AB";

const str1_c3 = "AAAAAAB";
const str2_c3 = "AAA";

console.log("Case 1: " + gcdOfStrings(str1_c1, str2_c1));
console.log("Case 2: " + gcdOfStrings(str1_c2, str2_c2));
console.log("Case 3: " + gcdOfStrings(str1_c3, str2_c3));