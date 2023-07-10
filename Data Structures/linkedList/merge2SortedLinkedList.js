/**
 * Title: Merge two Sorted Linked List.
 * Brief: Keeping first list as constant we are inserting elements at the required index wherever required from list2.
 * This saves memory and time. Also refer to insertAt function to understand insertion of element at given index.
 * 
 */

const {LinkedList,Node} = require('./linkedList');

let list1 = new LinkedList();
list1.addFromArray([3,5,7,9]);

let list2 = new LinkedList();
list2.addFromArray([2,4,6,8,10,12,14]);

function mergeLists(list1,list2){
    let l1 = list1.head;
    let l2 = list2.head;

    let idx = 0;

    while(l1 && l2){
        // lets consider l1 to be the main thread, we will insert elements at index
        if(l1.element>l2.element){
            list1.insertAt(l2.element,idx);
            l2 = l2.next;
        }else l1 = l1.next;
        idx++;
    }
    while(l2){
        list1.add(l2.element);
        l2 = l2.next;
    }
    return list1;
}

console.log('List 1 =>');
list1.printList();
console.log('List 2 =>');
list2.printList();
console.log('Merged =>');
mergeLists(list1,list2).printList();

