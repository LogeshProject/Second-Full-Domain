function fac(n){

    if(n === 0 || n===1) return n ;

    return n * fac(n-1) ;
}

let n =  5 ;

console.log(fac(n))