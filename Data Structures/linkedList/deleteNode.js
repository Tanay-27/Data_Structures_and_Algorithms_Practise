/**
 * Title: Delete Node from a Linked List when previous value is not given.
 * Brief: We simply store the previous value in a variable and assing previous.next to current.next.
 * Thereby effectively removing current node from the Linked List.
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,4,5,6]);

// select a node randomly; we take 4th node for this example.
let randomNode = linkedList.head.next.next.next;

function removeNode(linkedList,randomNode){
    let previousNode = null;
    let currentNode = linkedList.head;
    
    // loop through untill a match is found
    while(currentNode != randomNode){
        previousNode = currentNode;
        currentNode = currentNode.next;
    }

    // Remove the current node from list 
    previousNode.next = currentNode.next;

    return linkedList;
}

console.log('Before');
linkedList.printList();
console.log('After Removing: ',randomNode.element);
removeNode(linkedList,randomNode).printList();