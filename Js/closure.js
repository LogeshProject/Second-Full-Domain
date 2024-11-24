function x(){

    let a = 10 

    function y (){
        console.log(a)
    }
    return y
}

let b = x()

b()
