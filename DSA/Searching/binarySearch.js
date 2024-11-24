function binarySearch(arr , target){

    let start = 0 ;
    let end = arr.length -1 ;

    while(end >= start){

        let mid = Math.floor((start + end) / 2) ;

        if(target === arr[mid]) return mid ;
        else if(arr[mid] < target) start = mid + 1;
        else end = mid - 1 ;
    }

    return -1 ;
}


let arr = [1,2,3,4,5,6,7]

console.log(binarySearch(arr , 5))


// Time Complexity = O(log n)           =>Best case : if target at middle = O(1)

// Space Complexity = O(1) ;