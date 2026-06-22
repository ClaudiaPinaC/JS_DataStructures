//Minimum Swaps to Make Strings Equal

// You are given two strings 's2' and 's2' of equal length consisting of letters 'x' and 'y'
// your task is to make these two strings equal to each other. You can swap two characters that belongs to different strings,
// which means: swap s1[i] and s2[i]

// Return the minimum number of swaps required to make 's1' and 's2' equal, or return -1 if it is impossible to do so. 

function minimumSwaps(s1, s2) {
    let xy = 0;
    let yx = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === 'x' && s2[i] === 'y') {
            xy++;
        } else if (s1[i] === 'y' && s2[i] === 'x') {
            yx++;
        }
    }

    if ((xy + yx) % 2 !== 0) {
        return -1;
    }

    return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) * 2;

};

const s1c1 = "xx";
const s2c1 = "yy";

const s1c2 = "xy";
const s2c2 = "yx";

const s1c3 = "xx";
const s2c3 = "xy";

console.log("Case 1: " + minimumSwaps(s1c1, s2c1));
console.log("Case 2: " + minimumSwaps(s1c2, s2c2));
console.log("Case 2: " + minimumSwaps(s1c3, s2c3));
