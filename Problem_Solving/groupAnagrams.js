
//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

function sortString(str) {
    return str.split('').sort().join('');
}

function GroupAnagrams(anagrams) {
    const arrSize = anagrams.length;
    const groupObj = {};

    if (arrSize === 1 || anagrams == []) {
        return [anagrams];
    }

    if (arrSize > 1) {
        //let's sort the strings and group 
        for (let str of anagrams) {
            let sortedStr = sortString(str);
            if (groupObj[sortedStr]) {
                groupObj[sortedStr].push(str);
            } else {
                groupObj[sortedStr] = [str];
            }
        }
        return Object.values(groupObj);
    }
}

let anagramStr1 = [];
let anagramStr2 = [''];
let anagramStr3 = ['a'];
let anagramStr4 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(GroupAnagrams(anagramStr1));
console.log(GroupAnagrams(anagramStr2));
console.log(GroupAnagrams(anagramStr3));
console.log(GroupAnagrams(anagramStr4));
