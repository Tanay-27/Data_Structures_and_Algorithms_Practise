/**
 * Title: Clone a linked List having an additional parameter random, that points to random nodes.
 * Brief: Not Solved
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,4,5]);

// create random node pointer
linkedList.head.next.random = linkedList.head.next.next.next;
let node = new Node(45);
node.next = linkedList.head.next;
linkedList.head.next.random = node;

function cloneLinkedList(linkedList){
    let currentNode = linkedList.head;
    let previous = currentNode;
    let newList = new LinkedList();
    newList.add(currentNode.element);
    newList.head.random = currentNode.random;
    currentNode = currentNode.next;
    while(currentNode){
        let node = new Node(currentNode.element);
        node.random = currentNode.random;
        previous.next = node;
        previous = node;
        currentNode = currentNode.next;
    }
    return newList;
}

console.log('Before');
console.log(linkedList);
console.log('After');
console.log(cloneLinkedList(linkedList));
