/**
 * Title: Find the middle of Linked List in a single pass.
 * Brief: Building on logic used in detecting cycle. We use a 2-pointer approach, fast moves 2 paces slow moves 1.
 * We wait for the fast pointer to reach the end. at that time slow pointer is at center.
 */

const {LinkedList,Node} = require('./linkedList');

let linkedList = new LinkedList();
linkedList.addFromArray([1,4,2,3,5,8,7,9,11]);

function findMiddle(linkedList){
    let slow = linkedList.head?.next;
    let fast = linkedList.head?.next?.next;
    while(fast && fast.next){
        if(!fast.next.next) return slow.element;
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow.element;
}

linkedList.printList();
console.log('Middle Element: ',findMiddle(linkedList));

