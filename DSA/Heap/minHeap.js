class MinHeap{
    constructor(){
        this.heap = []
    }

    getParentIndex(index){
        return Math.floor((index-1)/2) ;
    }
    
    getLeftChildIndex(index){
        return 2 * index + 1;
    }
    getRightChildIndex(index){
        return 2 * index + 2;
    }


    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){

        let parentIndex = this.getParentIndex(index);

        if( index > 0 && this.heap[parentIndex] > this.heap[index]){
            [this.heap[index] , this.heap[parentIndex] ] = [this.heap[parentIndex], this.heap[index]]
        }

        index = parentIndex ;

        parentIndex = this.getParentIndex(index);
    }


    remove(){

        if(this.heap.length === 0 ) return null ;
        if(this.heap.length === 1 ) return this.heap.pop() ;

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        return root ;
    }


    heapifyDown(index){

        let largest = index ;

        let leftChildIndex = 2 * index + 1 ;
        let rightChildIndex = 2 * index + 2 ;


        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[largest]){

            largest = leftChildIndex ;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[largest]){

            largest = rightChildIndex ;
        }

        if(largest !== index){
            [this.heap[largest], this.heap[index]] = [ this.heap[index], this.heap[largest]]
            this.heapifyDown(largest)
        }
    }

    display(){
        console.log(this.heap.join(' '))
    }
}

let min = new MinHeap()

min.insert(10)
min.insert(7)
min.insert(9)
min.insert(20)
min.insert(12)



min.remove()


min.display()