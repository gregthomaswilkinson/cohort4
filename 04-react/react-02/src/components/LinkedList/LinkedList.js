

    class ListNode {
        // constructor(data, next=null) {
        //     this.data = data;

        //     this.next = next;
        constructor(subject, amount, forwardNode=null) {
            this.subject = subject
            this.amount= amount;
            this.forwardNode = forwardNode
        }

        showSubject () {
            return `Subject: ${this.subject}`;
        }

        showAmount () {
            return `Amount: ${this.amount}`;
        }
    }

    
    class LinkedList {
        constructor() {
            this.headNode = this.head;
            this.currentNode = this.head;
            this.head = null;
            this.size = 0;
        }
        
    

        // Insert first node
        insert (subject, amount) {
            // this.head = new ListNode(subject, amount, this.head);
            // this.currentNode = this.head;

        let localNode = this.head;
        const newNode = new ListNode(subject, amount, this.head)

        if(!localNode){
            this.head = newNode
            this.currentNode = this.head
            this.size++
            console.log(this.head)
            return this.currentNode
        }

        while(localNode !== this.currentNode){
            localNode = localNode.forwardNode
        }
        let nextNode = localNode.forwardNode
        localNode.forwardNode = newNode
        newNode.forwardNode = nextNode

        console.log(this.head)
        this.currentNode = newNode
        this.size++

        return this.currentNode
    }
//     insert(subject, amount){
//         let localNode = this.headNode;
//         const newNode = new Node(subject, amount)

//         if(!localNode){
//             this.headNode = newNode
//             this.currentNode = newNode
//             this._length++
//             return this.currentNode
//         }

//         while(localNode !== this.currentNode){
//             localNode = localNode.forwardNode
//         }
//         let nextNode = localNode.forwardNode
//         localNode.forwardNode = newNode
//         newNode.forwardNode = nextNode

//         this.currentNode = newNode
//         this._length++

//         return this.currentNode
//     }


        //SHAPE OF THE DATA
        // {subject: "first", amount: 5, forwardNode: null}

        first () {

            let indexPosition = 0;
            this.currentNode = this.head;
                
                while(indexPosition<this.size) {
                    while(this.currentNode.forwardNode !== null) {
                        this.currentNode = this.currentNode.forwardNode;
                        indexPosition++;
                }
            
            console.log(this.currentNode);
            return this.currentNode;
            }
        }

        last () {

            this.currentNode = this.head;
                
            console.log(this.currentNode)
            return this.currentNodeNode
        }

        //WORKING JUST EXPERIMENTING WITH A DIFFERENT APPROACH
        next () {

            let localNode = this.currentNode;

                if(localNode.forwardNode !== null){
                    localNode = localNode.forwardNode;
                }

            this.currentNode = localNode;

            console.log(this.currentNode);
            return this.currentNode
        }

        // next () {

        //     let localNode = this.head;
        //     let nextNode = this.head;
        //     console.log(localNode);

        //         while(localNode !== this.currentNode){
        //             nextNode = localNode;
        //             localNode = localNode.forwardNode;
        //         }

        //     this.currentNode = nextNode;
        //     console.log(this.currentNode);
        //     return this.currentNode
        // }

        previous () {

            let localNode = this.head;
            let prevNode = this.head;
            console.log(localNode);

                while(localNode !== this.currentNode){
                    prevNode = localNode;
                    localNode = localNode.forwardNode;
                }

            this.currentNode = prevNode;
            console.log(this.currentNode);
            return this.currentNode
        }

        total () {

            let localNode = this.head;
            let sum = 0;

                while(localNode !== null){
                    sum += (localNode.amount);
                    localNode = localNode.forwardNode;
                }

            console.log(sum);
            return sum
        }

        delete () {
            
            let localNode = this.head;
            let prevNode;
            console.log("I am the Head Node", localNode);
            console.log("I am the Previous Node(but not actually yet, just the input)", prevNode);


                if(this.size === 0) {
                    throw new Error()
                }

                if(this.currentNode === this.head){
                    this.head = this.currentNode.forwardNode;
                    this.currentNode = this.head;
                } else {
                    while(localNode !== this.currentNode){
                        prevNode = localNode;
                        localNode = localNode.forwardNode;
                    }

                    prevNode.forwardNode = localNode.forwardNode;
                    this.currentNode = prevNode;
                }

            console.log("I am the the current Node", this.currentNode);
            console.log("I am the head node", this.head);
            this.size--
            return this.currentNode
    }

        // removeAt(index) {

    //     let current = this.head;
    //     let previous;
    //     let count = 0;

    //     //Remove first
    //     if(index === 0) {
    //         this.head = current.next;
    //         return this.head;
    //     } else {
    //         while(count < index-1) {
    //             count++;
    //             previous = current;
    //             current = current.next;
    //             console.log(previous)
    //             console.log(current)
    //         }

    //         previous.next = current.next;
            
    //     }
    //     // console.log(this.head);
    //     // console.log(previous);
    //     console.log(previous.next)
    //     // console.log(current);
    //     // console.log(current.next);
    //     this.size--;
    //     return this.head;
    // }

        // previous () {
        //     let localNode = this.headNode
        //     let prevNode = this.headNode
        //     while(localNode !== this.currentNode){
        //         prevNode = localNode
        //         localNode = localNode.forwardNode
        //     }
        //     this.currentNode = prevNode
        //     return this.currentNode
        // }
        // first ⇒ position to the first node
        // last ⇒ position to the last node
        // next ⇒ move to the next node
        // previous ⇒ backup one node (how are we going to do this?)
        // insert ⇒ inserts a new node after the current node (which node will be the current node after the insertion?)
        // delete ⇒ delete the current node (which node will be the current node after the deletion?)
        // We need to have a total function that will show the total of all the amounts of all the ListNodes


        
    }



export  {ListNode, LinkedList};

//OLD CODE FOR SAMPLE/REFERENCE
// // Insert last node
// insertLast(data) {
//     let node = new ListNode(data);
//     let current;

//     // If empty, make head
//     if(!this.head) {
//         this.head = node;
//     } else {
//         current = this.head;

//         while(current.next) {
//             current = current.next;
//         }

//         current.next = node;
//     }

//     this.size++
//     return this.head;
// }

// // Inset at Index
// insertAt(data, index) {
//     // If index is out of range
//     if (index > 0 && index >this.size) {
//         return this.head;
//     }

//     // If first index
//     if(index === 0) {
//         this.insertFirst(data);
//         return this.head;
//     }

//     const node= new ListNode(data)
//     let current, previous

//     //set current to first
//     current= this.head;
//     let count= 0;

//     while(count < index) {
//         previous= current; // Node before index
//         count++;
//         current= current.next; // Node after index
//     }

//     node.next= current;
//     previous.next= node;
//     return this.head;
// }

// // Get at index
// getAt(index) {
//     let current = this.head;
//     let count = 0;

//     while(current) {
//         if (count === index) {
//             console.log(current.data);
//             return current.data
//         }
//         count++;
//         current= current.next;
//     }
    
//     return null;
// }

// // Remove at index
// removeAt(index) {
//     if(index> 0 && index > this.size) {
//         return this.head;
//     }

//     let current = this.head;
//     let previous;
//     let count = 0;

//     //Remove first
//     if(index === 0) {
//         this.head = current.next;
//         return this.head;
//     } else {
//         while(count < index-1) {
//             count++;
//             previous = current;
//             current = current.next;
//             console.log(previous)
//             console.log(current)
//         }

//         previous.next = current.next;
        
//     }
//     // console.log(this.head);
//     // console.log(previous);
//     console.log(previous.next)
//     // console.log(current);
//     // console.log(current.next);
//     this.size--;
//     return this.head;
// }

// // clear list
// clearList() {
//     this.head = null;
//     this.size = 0;
// }

// // print list data
// printListData = () => {
//     let current = this.head;

//     while(current) {
        
//         console.log(current.data);
//         current=current.next;
        
//     }
// }









// export default class LinkedList {
//     constructor(currentNode, headNode, length){
//         this.currentNode = currentNode || null;
//         this.headNode = headNode || null;
//         this._length = length || 0;
//     }


//     last(){
//         let localNode = this.currentNode
//         while(localNode.forwardNode){
//             localNode = localNode.forwardNode
//         }
//         this.currentNode = localNode
//         return this.currentNode
//     }
//     next(){
//         let localNode = this.currentNode
//         if(localNode.forwardNode !== null){
//             localNode = localNode.forwardNode
//         }
//         this.currentNode = localNode
//         return this.currentNode
//     }
//     previous(){
//         let localNode = this.headNode
//         let prevNode = this.headNode
//         while(localNode !== this.currentNode){
//             prevNode = localNode
//             localNode = localNode.forwardNode
//         }
//         this.currentNode = prevNode
//         return this.currentNode
//     }
//     insert(subject, amount){
//         let localNode = this.headNode;
//         const newNode = new Node(subject, amount)

//         if(!localNode){
//             this.headNode = newNode
//             this.currentNode = newNode
//             this._length++
//             return this.currentNode
//         }

//         while(localNode !== this.currentNode){
//             localNode = localNode.forwardNode
//         }
//         let nextNode = localNode.forwardNode
//         localNode.forwardNode = newNode
//         newNode.forwardNode = nextNode

//         this.currentNode = newNode
//         this._length++

//         return this.currentNode
//     }
//     delete(){
//         let localNode = this.headNode
//         let prevNode = this.headNode

//         if(this._length === 0) {
//             throw new Error()
//         }

//         if(this.currentNode === this.headNode){
//             this.headNode = this.currentNode.forwardNode
//             this.currentNode = this.headNode
//         } else {
//             while(localNode !== this.currentNode){
//                 prevNode = localNode
//                 localNode = localNode.forwardNode
//             }
//             prevNode.forwardNode = localNode.forwardNode
//             this.currentNode = prevNode
//         }
//         this._length--
//         return this.currentNode
//     }
//     total(){
//         let localNode = this.headNode
//         let sum = 0
//         while(localNode !== null){
//             sum += parseFloat(localNode.amount, 10)
//             localNode = localNode.forwardNode
//         }
//         return sum
//     }
// }