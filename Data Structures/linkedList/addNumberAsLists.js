/**
 * Title: Add 2 numbers represented as Linked Lists.
 * Brief: Traverse both, add 0s to make length equal.
 * Make a recursive call untill end of array to add elements and carry remainder to next step.
 * For multiply question, simply generate number by tranversing through tlist and do simple multiply.
 */

const {LinkedList,Node} = require('./linkedList');

let list1 = new LinkedList();
list1.addFromArray([1,2,3,4,5]);

let list2 = new LinkedList();
list2.addFromArray([3,2,3,2,3,3,3]);

function addNumbers(list1,list2){

    // can use while loop and find size, using helper functions
    let len1 = list1.listSize();
    let len2 = list2.listSize();

    // add preceding 0s
    let diff = Math.abs(len1-len2);
    if(len1>len2){
        while(diff--) list2.insertAt(0,0);
    }else{
        while(diff--) list1.insertAt(0,0);
    }

    // calling recursive function

    let sumList = new LinkedList();
    let carry = 0;
    carry = sumOfLists(list1.head,list2.head,sumList);
    if(carry) sumList.insertAt(carry,0);

    return sumList;
}

function sumOfLists(node1,node2,sumList){
    if(!node1.next && !node2.next){
        // last element
        let sum = node1.element + node2.element;
        sumList.add(sum%10);
        return sum >= 10 ? 1 : 0;
    }else{
        // recursively call sumoflists to execute from end to start
        let sum = node1.element + node2.element + sumOfLists(node1.next,node2.next,sumList);
        sumList.insertAt(sum%10,0);
        return sum >= 10 ? 1 : 0;
    }
}

console.log('List 1');
list1.printList();
console.log('List 2');
list2.printList();
console.log('Sum is');
addNumbers(list1,list2).printList();

