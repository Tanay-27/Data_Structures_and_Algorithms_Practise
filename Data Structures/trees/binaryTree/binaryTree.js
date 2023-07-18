/**
 * Title: Implementation of Binary Tree
 */

class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    
    insert(data){
        const newNode = new TreeNode(data);
        if(!this.root) this.root = newNode;
        else this.insertNode(this.root,newNode);
    }

    insertNode(node,newNode){
        if(newNode.data < node.data){
            if(!node.left) node.left = newNode;
            else this.insertNode(node.left,newNode);
        }else{
            if(!node.right) node.right = newNode;
            else this.insertNode(node.right,newNode);
        }
    }
}

module.exports = {
    TreeNode,
    BinaryTree
}



/**
 * Implement a function to find the height of a binary tree.
Write a function to traverse the binary tree in pre-order, in-order, and post-order traversal.
Given a binary tree, find the maximum element in it.
Check if a binary tree is a binary search tree (BST).
Find the lowest common ancestor (LCA) of two nodes in a binary tree.
Given an array, construct a binary tree from the level-order traversal of the array.
Find the number of leaf nodes in a binary tree.
Given a binary tree, print all the paths from the root to the leaf nodes.
Convert a binary search tree (BST) into a sorted doubly linked list.
 */