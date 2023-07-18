/**
 * Title: Implement a function to find the height of a binary tree
 */

const { TreeNode }  = require('./binaryTree');

function findHeightofBT(node){
    if(node===null) return -1;
    else{
        let leftHt = findHeightofBT(node.left);
        let rightHt = findHeightofBT(node.right);
        return Math.max(leftHt,rightHt) + 1;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);

console.log('Hiegth of tree is: ',findHeightofBT(root));
