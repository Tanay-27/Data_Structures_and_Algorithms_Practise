/**
 * Title: Construct a binary tree from the level-order traversal of the array
 */

const { TreeNode } = require('./binaryTree');

let arr = [5,3,4, null,null, 5,6];

function createBinaryTree(arr){
    if(!arr || arr.length ==0) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];

    let i=1;
    while(i<arr.length){
        const currentNode = queue.shift();

        if(arr[i] != null){
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        if(i<arr.length && arr[i] != null){
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }
    return root;
}

console.log(createBinaryTree(arr));