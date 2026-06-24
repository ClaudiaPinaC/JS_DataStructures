// Given an array of intervals where intervails[i] = [start, end],
// merge all overlapping intervals, and return an array of the non-overlaping 
// intervals that cover all the intervals in the input.

function mergeIntervals(intervals) {
    if (intervals.length < 1) return intervals;

    //sort intervals by their starting values
    intervals.sort((a, b) => a[0] - b[0]); // sorting takes O(n long n) time complexity

    const merged = [intervals[0]];

    //iterate and merge overlapping intervals
    for (let i = 0; i < intervals.length; i++) { // O(n) time complexity
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];

        //if the current interval overlaps with the last merged interval
        if (current[0] <= lastMerged[1]) {
            //extend the end of the last merged interval
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            //no overlap, safely add the current interval to the list
            merged.push(current); // space complexity is O(n) to store the new maerged array result
        }
    }

    return merged;
}

var merge = function (intervals) {
    // intervals = [[2,6], [1,4]];
    // output = [[1,6]]
    let i = 0
    intervals.sort((a, b) => a[0] - b[0]);
    let output = [];
    intervals.forEach((interval) => {
        if (output.length == 0 || output[output.length - 1][1] < interval[0]) {
            output.push(interval);
        } else {
            output[output.length - 1][1] = Math.max(output[output.length - 1][1], interval[1])
        }
    })
    return output;
};

const input = [[1, 3], [8, 10], [2, 6], [15, 18]];
console.log(merge(input));