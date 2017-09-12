/**
 * 二叉树学习
 * 1.创建二叉树
 * 2.中序遍历
 * 3.前序遍历
 * 4.后续遍历
 */


//创建二叉树
function BinaryTree() {

    //节点
    let Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    //二叉树根节点
    let root = null;

    let insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    // 插入节点
    this.insert = function (key) {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    let inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    //中序遍历
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    }

    let preOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    //前序遍历
    this.preOrderTraverse = callback => {
        preOrderTraverseNode(root, callback);
    }

    let postOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    //后序遍历
    this.postOrderTraverse = callback => {
        postOrderTraverseNode(root, callback);
    }


}

let nodes = [8, 3, 1, 4, 6, 7, 10, 14, 13];
let binaryTree = new BinaryTree();
nodes.forEach(key => {
    binaryTree.insert(key);
});

let callback = key => {
    console.log(key);
};
console.log('======================================');
binaryTree.inOrderTraverse(callback);
console.log('======================================');
binaryTree.preOrderTraverse(callback);
console.log('======================================');
binaryTree.postOrderTraverse(callback);
console.log('======================================');

