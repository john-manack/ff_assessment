const fifthFromEnd = require('../assessment-2-integer.js');

test("determines 5th from end in linked list 55-->82-->23-->11-->36-->42-->29-->77-->98-->61-->88", () => {
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

    expect(fifthFromEnd(myLinkedList)).toBe(29);
});

test("determines 5th from end in linked list 55-->82-->23", () => {
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

    expect(fifthFromEnd(myLinkedList2)).toBe('This linked list is less than five nodes long. Therefore, there is no value fifth from the end.');
});
