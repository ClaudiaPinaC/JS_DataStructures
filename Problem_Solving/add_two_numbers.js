// Add Two numbers

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var addTwoNumbers = function (l1, l2) {
    let head = new ListNode();
    let tail = head;
    let carry = 0;

    while (true) {

        if (l1) carry += l1.val;
        if (l2) carry += l2.val;

        if (carry > 9) {
            tail.val = carry - 10;
            carry = 1;
        } else {
            tail.val = carry;
            carry = 0;
        }

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        if (l1 || l2) tail = tail.next = { next: null };
        else {
            if (carry) tail.next = { val: 1, next: null }
            break;
        }
    }

    return head;
};

let list1 = new ListNode(2, new ListNode(4, new ListNode(3)));

let list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let resultList = addTwoNumbers(list1, list2);

function printList(head) {
    let current = head;
    let output = [];
    while (current !== null) {
        output.push(current.val);
        current = current.next;
    }
    console.log(output.join(" -> "));
}

printList(resultList);
