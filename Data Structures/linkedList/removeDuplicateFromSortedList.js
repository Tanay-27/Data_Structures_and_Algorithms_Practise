/**
 * Title: Remove duplicates from sorted Linked List
 * Brief: At each step we remove nodes while current value and next value are same.
 * If not move ahead till end of list is found.
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,2,3,3,3,4,4,5,6,6,6,6,6]);

function removeDuplicates(linkedList){
    let currentNode = linkedList.head;
    while(currentNode){
        // removing elements as long as they are equal
        while(currentNode.element==currentNode?.next?.element) currentNode.next = currentNode.next.next;
        
        // updating condition
        currentNode = currentNode?.next;
    }
    return linkedList;
}

console.log('Before');
linkedList.printList();
console.log('After');
removeDuplicates(linkedList).printList();