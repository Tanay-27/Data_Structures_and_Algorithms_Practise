/**
 * Title: Remove last occurance of an item from Linked List
 * Brief: keep a pointer pointer to previous node where the item occurs.
 * Keep traversing till the end of list, keep updating if item is found.
 * At the end of list, delete that node
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,2,3,4,5,6,4,3,2]);

function removeLastOccurance(linkedList,item){
    let currentNode = linkedList.head;
    let previous = null;
    while(currentNode.next){
        // if item occures, update the previous node as last occuring till now
        if(currentNode.next.element === item) previous = currentNode;

        // move to next node
        currentNode = currentNode.next;
    }

    // remove last occurance
    previous.next = previous?.next?.next;

    return linkedList;
}


console.log('Before');
linkedList.printList();
console.log('After');
removeLastOccurance(linkedList,3).printList();
