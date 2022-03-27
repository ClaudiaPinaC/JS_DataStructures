
// Using Stack.js to resolve to problem

"use strict"
const Stack = require('./Stack.js');

function isBalanced(exp) {
    var myStack = new Stack();
    // Iterate through the string exp
    for (var i = 0; i < exp.length; i++){
        // For every closing parenthesis check for its opening parenthesis in stack
        if(exp[i] == '}' || exp[i] == ')' || exp[i] == ']'){
            if(myStack.isEmpty()){
                
                return false;
            }
            let output = myStack.pop();
            // If you can't find the opening parentheses for any closing one then returns false.
            if(((exp[i] == '}') && (output != '{')) || ((exp[i] == ')') && (output != '(')) || ((exp[i] ==']') && (output != '['))) {
                return false;
            }
        } else {
            // For each opening parentheses, push it into stack
            myStack.push(exp[i]);
        }
    }
    // After complete transversal of string exp, if there's any opening parentheses left
    // in stack then also return false
    if (myStack.isEmpty() == false) {
        return false;
    }
    // At the end return true if you haven't encountered any of the above false conditions.
    return true;
}

var inputString = "{[()]}";
console.log(inputString);
console.log(isBalanced(inputString));

inputString = '{[([({))]}}';
console.log(inputString);
console.log(isBalanced(inputString));
