// Kids with the greatest number of candies

// There are 'n' kids with candies. You are an integer arr 'candies', where each 'candies[i]' 
// represents the number of candies that each kid has, and an integer 'extraCandies', denoting 
// the number of extra candies that you have. 

// Return a boolean arr 'result' of length 'n', where 'result[i]' is 'true' if, after giving each kid
// all the 'extraCandies', they will have the greatest number of candies among all the kids, or 'false' otherwise.

// Note that multiple kids can have the greatest number of candies.


// Function with longer run time.
function kidsWithCandies_lrt(candies, extraCandies) {
    let result = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= Math.max(...candies)) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}

// Function with shorter run time.
function kidsWithCandies_srt(candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies);
    for (const i of candies) {
        if (extraCandies + i >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

console.log("Result longer run time: " + kidsWithCandies_lrt(candies, extraCandies));
console.log("Result shorter run time: " + kidsWithCandies_srt(candies, extraCandies));