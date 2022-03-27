"use strict"
module.exports = class Queue {

    constructor() {
        this.items = [];
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    getFront() {
        if(this.items.length != 0) {
            return this.items[0];
        } else {
            return null;
        }
    }

    size () {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.items.length == 0) {
            return null;
        } else {
            return this.items.shift();
        }
    }
}