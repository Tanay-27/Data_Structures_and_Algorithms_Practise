/**
 * Title: Swap adjacent nodes in pairs in a Linked List
 * Brief: For each iteration we swap the first and second element.
 * Attach swapped first element to the previous element's next.
 * We move the pointers to the next pair.
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,4,5]);

function swapAdjacentPairs(linkedList){
    let currentNode = linkedList.head;
    let first = currentNode;
    let second = currentNode.next;
    let previous = null;
    while(second){
        // swap elements
        first.next = second.next;
        second.next = first;
        
        // attach previous element's next to swapped element
        if(previous) previous.next = second;
        else linkedList.head = second;

        // update the data
        previous = first;
        second = first.next?.next;
        first = first.next;
    }

    return linkedList;
}
console.log('Before');
linkedList.printList();
console.log('After Swap');
swapAdjacentPairs(linkedList).printList();