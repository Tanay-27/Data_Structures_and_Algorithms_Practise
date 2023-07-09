const LinkedList = require('./linkedList');

let linkedList = new LinkedList();

console.log('isempty => ',linkedList.isEmpty());

linkedList.add(10);
linkedList.add(4);
linkedList.add(6);
linkedList.add(8);
linkedList.add(13);

console.log('length of linked list => ',linkedList.listSize());
console.log('isempty => ',linkedList.isEmpty());

console.log('-------- Addition ---------');
console.log('Before=>');
linkedList.printList();
linkedList.insertAt(54,3);
console.log('After=>');
linkedList.printList();

console.log('-------- Remove element ---------');
console.log('Before=>');
linkedList.printList();
linkedList.removeElement(54);
console.log('After=>');
linkedList.printList();


console.log('-------- Remove at index ---------');
console.log('Before=>');
linkedList.printList();
linkedList.removeFrom(3);
console.log('After=>');
linkedList.printList();




