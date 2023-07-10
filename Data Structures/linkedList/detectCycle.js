/**
 * Title: Detect a cycle in Linked List
 * Brief: We use Floyd's cyc;e finding algorith also known as tortoise and hare algorithm
 * This is a 2 pointer approach where slow moves 1 step each iteration, fast moves 2 steps, 
 * it there is a cycle it'll catch up else fast will reach the end of linked list.
 * */

const {LinkedList,Node} = require('./linkedList');

LinkedList.prototype.hasCycle = function(){
    let slow = this.head;
    let fast = this.head.next;
    while(fast !== null && fast.next != null){
        if(slow===fast) return true;
        else{
            slow = slow.next;
            fast = fast.next.next;
        }
    }
    return false;
}

console.log('Creating Normal LinkedList');
const straightLinkedList = new LinkedList();
straightLinkedList.addFromArray([1,2,3,4,5,6]);
console.log('Check hasCycle => ',straightLinkedList.hasCycle());


console.log('Creating Cyclic LinkedList');
const cyclicLinkedList = new LinkedList();
cyclicLinkedList.addFromArray([1,2,3,4,5,6]);
cyclicLinkedList.head.next.next.next.next = cyclicLinkedList.head.next;
console.log('Check hasCycle => ',cyclicLinkedList.hasCycle());

