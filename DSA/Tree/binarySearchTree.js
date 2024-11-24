class Node{
    constructor(value){
        this.value = value ;
        this.left = null ;
        this.right = null ;

    }
}


class BinarySearchTree{
    constructor(){
        this.root = null ;
    }

    isEmpty(){
        return this.root === null ;
    }

    insert(value){

        let node = new Node(value) ;

        if(this.isEmpty()){
            this.root = node ;
        }else{
            this.insertNode(this.root , node)
        }

    }


    insertNode(root , node){

        if(root.value > node.value){
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left , node)
            }
        }else{
            if(root.right === null){
                root.right = node ;
            }else{
                this.insertNode(root.right , node)
            }
        }
    }


    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            
            this.preOrder(root.left)
            console.log(root.value);
            this.preOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder(){

        let queue = []

        if(this.root ){
            queue.push(this.root )
        }

        while(queue.length){

            let curr = queue.shift();
            console.log(curr.value);

            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }


    min(root){
        if(!root.left){
            return root.value ;
        }else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value ;
        }else{
            return this.min(root.right)
        }
    }


    findNode(value , root){

        if(!root) return null ;

        if( root.value === value) return root ;
        else if(root.value > value) return this.findNode(value ,root.left )
        else if(root.value < value) return this.findNode(value ,root.right )

    }


    findDegree(node){

        let degree = 0;

        if(node.left) degree++ ;
        if(node.right) degree++ ;

        return degree ;
    }

    findHeight(node){

        if(!node) return -1 ;

        const leftHeight = this.findHeight(node.left)
        const rightHeight = this.findHeight(node.right)

        return 1 + Math.max(leftHeight , rightHeight) ;
    }

}


let bst = new BinarySearchTree() ;

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)

bst.levelOrder(bst.root)


console.log('min : ' ,bst.min(bst.root))
console.log('max : ' ,bst.max(bst.root))

let node = bst.findNode(5, bst.root)

console.log('degree : ' , bst.findDegree(node))
console.log('Height : ' , bst.findHeight(node))
