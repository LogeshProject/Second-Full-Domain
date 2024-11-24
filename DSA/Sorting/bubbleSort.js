function bubbleSort(arr){

    for(let i=0;i< arr.length ; i++){
        for(let j=i+1;j< arr.length ;j++){

            if(arr[i] > arr[j]){
                [arr[i] , arr[j]] = [ arr[j] , arr[i]]
            }
        }
    }

    return arr ;
}

let arr = [4, 2 , 6 , 9 , 0 , -2]

console.log(bubbleSort(arr))


// Time Complexity = O(n^2)                      =>Best case : if sorted Array  = O(n)

// Space Complexity = O(1)