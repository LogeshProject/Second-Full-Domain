function prime(n){

    for(let i=2 ; i*i < n ; i++){
        if(n%i===0){
            return false ;
        }
    }
    return true ;
}

let n= 79 ;

console.log(prime(n))