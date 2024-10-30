
// STACK: CHECK FOR BALANCED PARENTHESES USING A STACK

// Problem statement: Implement the isBalanced() function to take a string 
// containing only curly {}, square [], and round () parentheses. 
// The function should tell us if all the parentheses in the string are balanced. 
// This means that every opening parenthesis will have a closing one. 
// For example, {[]} is balanced, but {[}] is not.

// Input: A string consisting solely of (, ), {, }, [ and ]
// exp = "{[({})]}"
// Output: Returns False if the expression doesn't have balanced parentheses.
// If it does, the function returns True. 

"use strict";
module.exports = class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    getTop() {
        if(this.items.length == 0)
            return null;
        return this.top;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if(this.items.length != 0) {
            if(this.items.length == 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }
        } else 
            return null;
    }
}