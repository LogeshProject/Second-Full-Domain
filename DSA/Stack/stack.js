class Stack{
    constructor(){
        this.items = []
    }


    size(){
        return this.items.length ;
    }

    push(value){
        this.items.push(value)
    }

    pop(){
        this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    print(){
        
        console.log(this.items.toString())
    }
}

let stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()

console.log(stack.peek())


stack.print()