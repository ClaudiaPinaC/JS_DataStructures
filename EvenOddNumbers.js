
// ARRAY: REMOVE ALL EVEN INTEGERS FROM AN ARRAY

// Function to remove the even numbers in a given array using 
// "by hand" solution
function removeEvenNum (arr){
    var arrResult = [];
    for(let num of arr){
        if(num % 2 != 0){
            arrResult.push(num);
        }
    }
    return arrResult;
}
console.log(removeEvenNum([3,2,41,3,34]));

// Function to remove the even number in a given array using 
// lamda expression (arrow function)and filter

function removeEven(arr){
    return arr.filter((v => (v % 2) != 0));
}
console.log(removeEven([3,1,4,6,8,15]));

