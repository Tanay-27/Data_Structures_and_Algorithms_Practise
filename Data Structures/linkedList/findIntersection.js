/**
 * Title: Find if two Linked Lists intersect, if so find the intersection node
 * Brief: Traverse both lists to find last element and lengths, if last element are different, no intersection.
 * Else move the longer list by the difference of their lengths, then start moving both together and find common node.
 */

const {LinkedList,Node} = require('./linkedList');

let list1 = new LinkedList();
list1.addFromArray([1,2,3,4,5,7,8]);

let list2 = new LinkedList();
list2.addFromArray([2,3,4,5]);

// form intersection
list2.head.next.next.next = list1.head.next.next.next.next;

function findIntersectingNode(list1,list2){
    let nodeList1 = list1.head;
    let nodeList2 = list2.head;

    let lenList1 = 1;
    while(nodeList1.next){
        lenList1++;
        nodeList1 = nodeList1.next;
    }

    let lenList2 = 1;
    while(nodeList2.next){
        lenList2++;
        nodeList2 = nodeList2.next;
    }

    // check if lists intersect
    if(nodeList1!== nodeList2) return 'No Intersection';

    let diff = Math.abs(lenList1-lenList2);

    // bring both nodes to head again
    nodeList1 = list1.head;
    nodeList2 = list2.head;

    // move longer list by d paces where d is the difference in their lengths
    if(lenList1>lenList2) for(let i=0;i<diff;i++) nodeList1 = nodeList1.next;
    else for(let i=0;i<diff;i++) nodeList2 = nodeList2.next;
    
    // move both untill intersetion is found
    while(nodeList1 !== nodeList2){
        nodeList1 = nodeList1.next;
        nodeList2 = nodeList2.next;
    }

    return nodeList1;
}

console.log('Intersecting Node is => ',findIntersectingNode(list1,list2));