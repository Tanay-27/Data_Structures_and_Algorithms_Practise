/**
 * Title: Rotate a Linked List by k nodes.
 * Brief: We go to the kth node, make the next of that as null.
 * Make the next node as head.
 * Traverse to the end of the list, attach the head node to last element.
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,4,5,6]);

function rotate(linkedList,k){
    let currentNode = linkedList.head;

    // we move k-1 rotations since kth element is reached in k-1 rotations.
    while(k>1 && currentNode) currentNode = currentNode.next, k--;
    
    // if k is greater than size, return original list
    if(k!=1 && currentNode===null) return linkedList;

    // save the new head, make next of kth element as null
    let newHead = currentNode.next;
    currentNode.next = null;

    let iterationNode = newHead;
    // iterate to the end of list
    while(iterationNode.next) iterationNode = iterationNode.next;

    // attach head to end of list, attach newhead to head
    iterationNode.next = linkedList.head;
    linkedList.head = newHead;

    return linkedList;
}

console.log('Before');
linkedList.printList();
console.log('After');
rotate(linkedList,14).printList();
