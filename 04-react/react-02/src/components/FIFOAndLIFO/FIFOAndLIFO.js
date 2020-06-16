
  
class Structure {
    constructor() {
        this.collection = []
    }
    push(object){
        this.collection.push(object);
        return this.collection.length
    }
}

// Stack Implementation
class Stack extends Structure {

    pop(){
        const returnedVal = this.collection.pop();
        return returnedVal
    }
}

// Queue Implementation
class Queue extends Structure{

    shift(){
        const returnedVal = this.collection.shift();
        return returnedVal
    }
}

export { Stack, Queue }

    // class Node {
    //     constructor(value, nextNode) {
    //     this.value = value;
    //     this.nextNode = nextNode;
    //     }
    // }

    // class Stack {
    //     constructor () {
    //         this.top = null
    //     }

    //     push(value) {
    //         console.log('PUSH')

    //         let node = new Node(value, this.top)
    //         this.top = node;

    //         this.print()
    //     }

    //     pop() {
    //         console.log('POP')

    //         let value = null

    //         if(this.top) {
    //             value = this.top.value
    //             this.top = this.top.nextNode
    //         }

    //         this.print()
    //         return value
    //     }

    //     print() {
    //         let ptr = this.top

    //         while(ptr) {
    //             console.log(ptr.value)
    //             ptr = ptr.nextNode
    //         }

    //         console.log('----')
    //     }
    
    // }





    // class Structure{
    //     constructor(){
    //         this.collection = []
    //     }
    //     push(object){
    //         this.collection.push(object);
    //         return this.collection.length
    //     }
    // }
    
    // // Stack Implementation
    // export class Stack extends Structure{
    //     constructor(){
    //         super();
    //     }
    //     pop(){
    //         const returnedVal = this.collection.pop();
    //         return returnedVal
    //     }
    // }
    
    // // Queue Implementation
    // export class Queue extends Structure{
    //     constructor(){
    //         super();
    //     }
    //     shift(){
    //         const returnedVal = this.collection.shift();
    //         return returnedVal
    //     }
    // }

    // export default Stack