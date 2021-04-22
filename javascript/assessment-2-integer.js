// Reasoning for solution (below): 
// - create an array with each value from the linked list
// - use a while loop to append each value to an empty array, and determine the length of the list
// - purposefully did not use a ".length" method, as this method would iterate through the list a second time, breaking the given parameters

'use strict';

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
        return arr[index];
    } else {
        return 'This linked list is less than five nodes long. Therefore, there is no value fifth from the end.'
    }
}

module.exports = fifthFromEnd;