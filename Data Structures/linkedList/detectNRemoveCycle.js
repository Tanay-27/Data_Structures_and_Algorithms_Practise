/**
 * Title: Detect and remove cycle from Linked List
 * Brief: need to understand the part of detecting node that forms cycle
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,4,5,6,7]);
linkedList.printList();

// form a loop
linkedList.head.next.next.next.next.next.next.next = linkedList.head.next.next.next;

/**
 * Detect and Remove Loop
 * @param {*} linkedList Linked List that might be having cycle
 * @returns updated Linked List
 */
function detectNRemoveLoop(linkedList){
    let slow = linkedList.head;
    let fast = linkedList.head;

    // detect a loop
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) break;
    }
    console.log(`Cycle detected : Slow ${slow.element}, Fast ${fast.element}`);
    
    // if no loop is discovered
    if(!fast || !fast.next) return linkedList;

    // To find the node where cycle is formed, reset slow to head
    slow = linkedList.head;

    let previousNode;
    while(slow!==fast){
        console.log('inside whileeee');
        previousNode = fast;
        slow = slow.next;
        fast = fast.next;
        console.log(`Slow ${slow.element}, Fast ${fast.element}`);
    }

    // setting the next of the last node that forms cycle as null
    previousNode.next = null;
    return linkedList;
}

console.log('Linked List after removing cycle');
let deCycledLinkedList = detectNRemoveLoop(linkedList);
deCycledLinkedList.printList();


