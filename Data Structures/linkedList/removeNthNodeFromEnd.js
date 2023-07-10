/**
 * Title: Remove nth node from the end.
 * Brief: We use two pointer approach. We begin iterating the second pointer after the first one has moved 'n' places.
 * This way when the first pointer reaches the end of list, the second pointer is exactly n paces behind it, meaning: pointer to nth element from behind.
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,4,5,6,7,8,9]);

function removeNthNodeFromEnd(linkedList,n){
    let idx = 1;
    let fastPointer = linkedList.head;
    let slowPointer = linkedList.head;
    
    // iterate through the list, start the slow pointer after n iteration such that, when fast pointer reaches the end of the list, slow pointer is n places behind it.
    while(fastPointer){
        // not taking >= as we want slow pointer to be 1 place behind n
        if(idx>n+1) slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
        idx++
    }
    // skip nth element and return updated list
    slowPointer.next = slowPointer.next.next;
    return linkedList;
}

linkedList.printList();
let n = 4;
console.log(`Removing ${n}th element from behind`);
let newLinkedList = removeNthNodeFromEnd(linkedList,n);
newLinkedList.printList();



