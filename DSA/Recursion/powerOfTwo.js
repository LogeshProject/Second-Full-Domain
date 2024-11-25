function power(n) {             
    if (n < 1) return true;       
    return (n & (n - 1 )) === 0;    
  }

let n = 4;

console.log(power(n))

// because binary of 4 : 100
// because binary of 3 : 011
//                      -----
//                       000    === 0