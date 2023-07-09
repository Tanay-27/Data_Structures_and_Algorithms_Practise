/**
 * Title: Linked List Implementation
 * Exporting the javascript implementation of linked list
 */

// Defining class Node
class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

// Define class Linked List
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    /**
     * Add element to linked list
     * @param {*} element element
     */
    add(element){
        let node = new Node(element);
        let current;
        if(this.head === null) this.head = node;
        else{
            current = this.head;
            
            // iterate to end of list 
            while(current.next) current = current.next;

            // add node
            current.next = node;
        }
        this.size++;
    }

    /**
     * Insert element at defined index
     * @param {*} element element
     * @param {*} index index to be inserted at
     * @returns error message if invalid index
     */
    insertAt(element,index){
        if(index<0 || index > this.size){
            console.log("Please enter a valid index.")
            return -1;
        } 
        else{
            let node = new Node(element);
            let current = this.head;
            let previous;
            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else{
                for(let i=0;i<index;i++){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }

    /**
     * Removes element from given index
     * @param {*} index index from which element needs to be returned
     * @returns error message if invalid index, removed element otherwise
     */
    removeFrom(index){
        if(index<0 || index> this.size){
            console.log("Please enter a valid index.");
            return -1; 
        } 
        else{
            let current = this.head;
            let previous;
            if(index===0) this.head = this.head.next;
            else{
                for(let i=0;i<index;i++){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
            return current.element;
        }
    }

    /**
     * Removes the first occurance of an element in linked list
     * @param {*} element element
     * @returns error message if invalid index, removed element otherwise
     */
    removeElement(element){
        let current = this.head;
        let previous = null;
        while(current != null){
            if(element === current.element){
                if(previous === null) this.head = current.next;
                else previous.next = current.next;
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }

    /**
     * Find the first occuring index of given element
     * @param {*} element element
     * @returns index of given element, -1 otherwise
     */
    indexOf(element){
        let count = 0;
        let current = this.head;
        while(current != null){
            if(current.element === element) return count;
            count++;
            current = current.next;
        }
        return -1;
    }

    /**
     * Check if linked list is empty
     * @returns true if empty, false otherwise
     */
    isEmpty(){
        return this.size === 0;
    }

    /**
     * Check size of linked list
     * @returns size of linked list
     */
    listSize(){
        return this.size;
    }

    /**
     * Print the linked list
     * @returns log of list
     */
    printList(){
        let current = this.head;
        let printLine = [];
        while(current){
            printLine.push(current.element);
            current = current.next;
        }
        console.log('List=> ',printLine.join(" ,"));
        return -1; 
    }

    addFromArray(arr){
        for(let i=0;i<arr.length;i++) this.add(arr[i]);
        return 1;
    }
}

module.exports = {LinkedList, Node};