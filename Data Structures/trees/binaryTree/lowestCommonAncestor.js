/**
 * Title: Find the lowest common ancestor (LCA) of two nodes in a binary tree
 * Brief: LCA stands for "Lowest Common Ancestor." In the context of a binary tree, the Lowest Common Ancestor of two nodes p and q is the deepest node that is a common ancestor of both p and q. In other words, it is the node that is farthest from the root of the tree and still has both p and q as descendants.
 * To find the Lowest Common Ancestor of two nodes in a binary tree, you need to traverse the tree and search for the common ancestor. The LCA can be the node itself or one of its descendants.
 * The concept of LCA is commonly used in various tree-related algorithms and problems. For example, in genealogy, it represents the common ancestor of two individuals in a family tree. In computer science and programming, it is frequently used in data structures like binary trees, where finding the LCA can help solve problems related to node relationships, path finding, and more.
 */

const { TreeNode,  } = require('./binaryTree');

/**
 *              3  
 *            /    \
 *           5      1
 *         /  \    /  \
 *        6    2  0    8
 *            /  \
 *           7    4
 */
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

let node1 = root.right.left;
let node2 = root.left.right.right;

console.log(findLCA(root,node1,node2).data);

function findLCA(root,p,q){
    // if you reach the end of tree, or find either element
    if(!root || root === p || root === q ) return root;

    const leftRoot = findLCA(root.left,p,q);
    const rightRoot = findLCA(root.right,p,q);

    // if both are not null, means p and q are in different subtrees, hence root node is the least common ancestor
    if(leftRoot && rightRoot) return root;

    // if either one is not null, means lca is in the same node, the node which is not null
    return leftRoot || rightRoot;
}