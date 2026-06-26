// You are given 2 strings 'word1' and 'word2'. 
// Merge the strings by adding letters in alternating order, starting with 'word1'.
// If a string is longer that the other, append the additional letters onto the end of the merged string.

function mergeAlternately(word1, word2) {
    let mergedWord = "";

    const longerString = Math.max(word1.length, word2.length);

    for (let i = 0; i < longerString; i++) {
        if (i < word1.length) mergedWord += word1[i];
        if (i < word2.length) mergedWord += word2[i];
    }

    return mergedWord;
};

const word1 = "abc";
const word2 = "pqrfd";

console.log(mergeAlternately(word1, word2));