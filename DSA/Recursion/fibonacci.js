function fibo(n){

    if(n < 2) return n ;

    return fibo(n-1) + fibo(n-2) ;

}


let n = 8 ;

console.log(fibo(n))