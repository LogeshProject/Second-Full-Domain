class HeapSort{
    constructor(array){
        this.heap = array ;
        this.buildHeap()
    }

    buildHeap(){
        for (let i = this.heap.length-1 ; i>=0 ; i--){
            this.heapifyDown(i);
        }
    }

    heapifyDown(index) {
        let largest = index;
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]){
            largest = leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]){
            largest = rightChildIndex
        }

        if(index != largest){
            [this.heap[index] , this.heap[largest] ] = [this.heap[largest] , this.heap[index]] ;
            this.heapifyDown(largest)
        }
    }


    extractMax(){

        if(this.heap.length === 0) return null ;
        if(this.heap.length === 1) return this.heap.pop() ;

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0)
        return max ;

    }

    
    

    heapSort(){

        const sortedArr = [];

        while(this.heap.length){
            sortedArr.push(this.extractMax())
        }

        return sortedArr.reverse()
    }

}

let arr = [ 4 , 1, 5, 0 , -1]

let sort = new HeapSort(arr);

console.log(sort.heapSort())


// Time Complexity = O(n log n);

// Space Complexity = O(1)