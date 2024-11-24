function quickSort(arr){

    if(arr.length < 2) return arr ;

    let pivot = arr[arr.length-1] ;

    let left = []
    let right = []

    for(let i=0;i< arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]) ;
        }else{
            right.push(arr[i])
        }
    }

    return [...quickSort(left) , pivot , ...quickSort(right)]
}


let arr = [4, 2 , 6 , 9 , 0 , -2];

console.log(quickSort(arr))



// Time Complexity = O(n logn)             => But in worst case = O(n^2)