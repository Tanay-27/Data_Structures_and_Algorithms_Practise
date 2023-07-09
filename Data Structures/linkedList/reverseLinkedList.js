/**
 * Title: Reversing a Linked List
 * Brief: We take each element from original list, give the next of new element as previous element. This way we effectively add element at 0th index
 * Correct Logic: We just reverse the next address of each element, like make next of first element as null, next of second as first, next of third as second and so onn.
 */

const {LinkedList,Node} = require('./linkedList');

LinkedList.prototype.reverse =  function (){
    let oldCurrent = this.head;
    let current;
    let previous = new Node();
    previous.element = oldCurrent.element;
    oldCurrent = oldCurrent.next;
    while(oldCurrent != null){
        current = new Node();
        current.element = oldCurrent.element;
        current.next = previous;
        previous = current;
        oldCurrent = oldCurrent.next;
    }
    this.head = current;
}

LinkedList.prototype.reverseUsingInsertAt = function (){
    let current = this.head;
    let newLinkedList = new LinkedList();
    while(current!= null){
        newLinkedList.insertAt(current.element,0);
        current = current.next;
    }
    this.head = newLinkedList.head
}

LinkedList.prototype.reverseCorrectLogic = function(){
    let previous = null;
    let current = this.head;
    let next;
    while(current !== null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    this.head = previous
    return 1;
}

let linkedList = new LinkedList();
linkedList.addFromArray([1,5,3,7,64,24,356,523,8,9,11]);

console.log('Before =>');
linkedList.printList();

linkedList.reverse();
console.log('After =>');
linkedList.printList();

console.log('\n\nUsing insertAt function');
let linkedList2 = new LinkedList();
linkedList2.addFromArray([1,5,3,7,64,24,356,523,8,9,11]);

console.log('Before =>');
linkedList2.printList();

linkedList2.reverseUsingInsertAt();
console.log('After =>');
linkedList2.printList();


console.log('\n\nUsing correct Code');
let linkedList3 = new LinkedList();
linkedList3.addFromArray([1,5,3,7,64,24,356,523,8,9,11]);

console.log('Before =>');
linkedList3.printList();

linkedList3.reverseCorrectLogic();
console.log('After =>');
linkedList3.printList();

