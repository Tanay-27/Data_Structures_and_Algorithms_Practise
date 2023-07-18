/**
 * Title: Function to traverse the binary tree in pre, in and post-order traversal.
 * Brief: Thers are tranersal techniques refer to the order in which the nodes are visited.
 * Pre-order Traversal: root node is visited first, then the left subtree is traversed recursively then the right tree. root->left->right
 * In-order Traversal: Left Tree is visited first, then the root node and finally the right subtree is traversed recursively. left->root->right
 * Post-order Traversal: Left subtree is visited first, then right  and finally root. left->right->root
 */

/**
 * Tree Structure that is prepared is
 *                 1
 *               /   \
 *             2       3
 *            / \     / \
 *          4    5   6   7
 *         / \
 *        8   9
 */
const { TreeNode } = require('./binaryTree');

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);

function preTraversal(root){
    if(root===null) return ;
    console.log(root.data);
    preTraversal(root.left);
    preTraversal(root.right);
}

function inTraversal(root){
    if(root===null) return;
    inTraversal(root.left);
    console.log(root.data);
    inTraversal(root.right);
}

function postTraversal(root){
    if(root===null) return;
    postTraversal(root.left);
    postTraversal(root.right);
    console.log(root.data);
}

console.log('Pre =======');
preTraversal(root);

console.log('In =======');
inTraversal(root);

console.log('Post =======');
postTraversal(root);