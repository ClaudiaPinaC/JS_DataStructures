
//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
//You must do it in place.

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const mSet = new Set();
    const nSet = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                mSet.add(i);
                nSet.add(j);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mSet.has(i) || nSet.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;

}

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
let matrix2 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
let result = setZeroes(matrix2);

console.log(result);