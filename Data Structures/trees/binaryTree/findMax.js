/**
 * Title: Find max in a binary tree
 * Desc: Just traverse through the tree and find max
 */


const { TreeNode } = require('./binaryTree');

let root = new TreeNode(1);
root.left = new TreeNode(12);
root.right = new TreeNode(9);
root.left.left = new TreeNode(43);
root.left.right = new TreeNode(15);
root.right.left = new TreeNode(26);
root.right.right = new TreeNode(73);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(5);


let max =  Number.MIN_SAFE_INTEGER;
function findMaxInOrderTranversal(node){
    if(node===null) return;
    findMaxInOrderTranversal(node.left);
    max = Math.max(max,node.data);
    findMaxInOrderTranversal(node.right);
}
findMaxInOrderTranversal(root);
console.log('Max num is: ',max);
