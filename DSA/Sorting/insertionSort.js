function insertionSort(arr){

    for(let i=1 ; i< arr.length ; i++){

        let numberToInsert = arr[i];
        
        let j=i-1;

        while(j>=0 && numberToInsert < arr[j]){
            arr[j+1] = arr[j] ;
            j-- ;
        }
        arr[j+1] = numberToInsert ;
    }

    return arr ;
}


let arr = [4, 2 , 6 , 9 , 0 , -2];

console.log(insertionSort(arr))


// Time Complexity = O(n^2)              =>Best case : if sorted Array  = O(n)