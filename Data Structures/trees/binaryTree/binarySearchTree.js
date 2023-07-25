/**
 * Title: Check if binary tree is binary search tree
 * Brief: In order Traversal will yeild a sorted sequence
 * Thus we recursively check if left node is null or previous nodes value is null, if either of the cases are satisfied: return false.
 * Also we do inOrderTraversal for right side of the tree as well.
 */

const { TreeNode } = require('./binaryTree');
/**
 *        5
 *       /  \
 *     3     7
 *    /  \   / 
 *   2   4  6
 */
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(7);
// root.left.left.left = new TreeNode(8);
// root.left.left.right = new TreeNode(9);

function isBST(root){
    let previous = null;

    function inOrderTraversal(node){
        // reached the last node
        if(!node) return true;

        // recursively check if left subtree is bst
        if(!inOrderTraversal(node.left)) return false;

        // for this node, to check if previous node is greater than previous node
        if(previous != null && node.data <= previous.data) return false;

        // update node
        previous = node;

        // recursively check if right subtree is bst
        return inOrderTraversal(node.right);
    }
    return inOrderTraversal(root);
}

console.log(isBST(root));