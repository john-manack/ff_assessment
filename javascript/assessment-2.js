// Pseudo code for contrived linked list:
// 55-->82-->23-->11-->36-->42-->29-->77-->98-->61-->88

'use strict';

const myLinkedList = {
    head: {
        value: 55,
        next: {
            value: 82,
            next: {
                value: 23,
                next: {
                    value: 11,
                    next: {
                        value: 36,
                        next: {
                            value: 42,
                            next: {
                                value: 29,
                                next: {
                                    value: 77,
                                    next: {
                                        value: 98,
                                        next: {
                                            value: 61,
                                            next: {
                                                value: 88,
                                                next: null
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const myLinkedList2 = {
    head: {
        value: 55,
        next: {
            value: 82,
            next: {
                value: 23,
                next: null
            }
        }
    }
}

// Reasoning for solution (below): 
// - create an array with each value from the linked list
// - use a while loop to append each value to an empty array, and determine the length of the list
// - purposefully did not use a ".length" method, as this method would iterate through the list a second time, breaking the given parameters

const fifthFromEnd = (linkedList) => {
    let head = linkedList.head
    let arr = [];
    let arrLength = 0
    while (head !== null) {
        arr.push(head.value);
        head = head.next;
        arrLength ++;
    }
    if (arrLength >= 5) {
        const index = arrLength - 5;
        return `The fifth value from the end is: ${arr[index]}`;
    } else {
        return 'This linked list is less than five nodes long. Therefore, there is no value fifth from the end.'
    }
}

console.log(fifthFromEnd(myLinkedList));
console.log(fifthFromEnd(myLinkedList2));