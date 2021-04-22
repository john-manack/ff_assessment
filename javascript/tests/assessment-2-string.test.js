const fifthFromEnd = require('../assessment-2-string.js');

test("determines 5th from end in linked list 'a'-->'b'-->'c'-->'d'-->'e'-->'f'-->'g'-->'h'-->'i'-->'j'-->'k'", () => {
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

    expect(fifthFromEnd(myLinkedList)).toBe('f');
});

test("determines 5th from end in linked list 'a'-->'b'-->'c'", () => {
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

    expect(fifthFromEnd(myLinkedList2)).toBe('This linked list is less than five nodes long. Therefore, there is no value fifth from the end.');
});