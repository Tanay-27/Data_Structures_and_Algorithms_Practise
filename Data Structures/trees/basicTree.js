/**
 * Title: A Tree Data Structure
 * Breif: A tree  is a heirarchical data strucutre consisting of nodes connected by edges, where each node can have 0 or more nodes.
 * There is only 1 root node that has no parent.
 * Trees are used to represent heriarchical relationships, such as file systems, organizational charts, XML/HTML structures, etc.
 * 
 * In a tree data strcuture:
 * 1. Each node has exactly one parent (except root)
 * 2. Each node can have 0 or more child nodes.
 * 3. Nodes at the same level are called siblings.
 * 4. The depth of a node is the length of the path from the root to that node.
 * 5. The height of the tree is the maximum depth of any node in the tree.
 * 6. A leaft node is a node with no children.
 */

class TreeNode{
    constructor(data){
        this.data = data;
        this.children = [];
    }

    addChild(childNode){
        this.children.push(childNode);
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

    setRoot(rootNode){
        this.root = rootNode;
    }
}


const tree = new Tree();

const root = new TreeNode('root');
tree.setRoot(root);

let ch1 = new TreeNode('child 1');
let ch2 = new TreeNode('child 2');
let ch3 = new TreeNode('child 3');

root.addChild(ch1);
root.addChild(ch2);
ch2.addChild(ch3);

