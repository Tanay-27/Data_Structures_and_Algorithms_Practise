/**
 * Title: Check if a linked list is a palindrome.
 * Brief: We first find center of the list by fast and slow pointers (adjust even condition). THen we start from the middle point and reverse the rest of the list.
 * Once we have the refernce to first and second half of the lists, we simply iterate through them.
 * At any point if the element is not same, we return false, if while loop is exhausted, return true.
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();

linkedList.addFromArray([1,2,3,3,2,1]);

function isPalindrome(linkedList){
    // find middle of list
    let slow = linkedList.head;
    let fast = linkedList.head;

    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if(fast.next) slow = slow.next;

    // starting from middle, reverse the second half of the play
    let previous = null
    while(slow){
        let next = slow.next;
        slow.next = previous;
        previous = slow;
        slow = next;
    }

    let firstHalf = linkedList.head;
    let secondHalf = previous;

    while(secondHalf){
        if(firstHalf.element !== secondHalf.element) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    return true;
}

linkedList.printList();
console.log('Is Palindrome: ',isPalindrome(linkedList));

