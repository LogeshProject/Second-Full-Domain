var a = 100

let b = 100 // (outside - let - illegal)

function x(){                          // remove function it would be illegal shadowing ..why because var is an functional scope 
    var a = 10  // shadowing 
    var b = 20 ; // illegal shadowing
    const c = 30 ;

    console.log(a)
    console.log(b)
    console.log(c)
}
    
x()



console.log(b)