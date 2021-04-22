// Pseudo code for example linked list:
// 'a'-->'b'-->'c'-->'d'-->'e'-->'f'-->'g'-->'h'-->'i'-->'j'-->'k'

'use strict';

const myLinkedList = {
    head: {
        value: 'a',
        next: {
            value: 'b',
            next: {
                value: 'c',
                next: {
                    value: 'd',
                    next: {
                        value: 'd',
                        next: {
                            value: 'e',
                            next: {
                                value: 'f',
                                next: {
                                    value: 'g',
                                    next: {
                                        value: 'h',
                                        next: {
                                            value: 'i',
                                            next: {
                                                value: 'j',
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
        value: 'a',
        next: {
            value: 'b',
            next: {
                value: 'c',
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