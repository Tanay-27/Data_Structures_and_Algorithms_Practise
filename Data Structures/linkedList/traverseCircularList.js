/**
 * Title: Traverse a Circular Linked List
 * Brief: Stopping condition instead of null is == head. Rest remains the same;
 * */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,4,5]);

// making linked list circular
linkedList.head.next.next.next.next.next = linkedList.head;

function traverseLinkedList(linkedList){
    let currentNode = linkedList.head;

    // print first value and move to second
    console.log('Linked list=>');
    console.log(currentNode.element);
    currentNode = currentNode.next;

    while(currentNode!=linkedList.head){
        console.log(currentNode.element);
        currentNode = currentNode.next;
    }
    return 1;
}

traverseLinkedList(linkedList);


