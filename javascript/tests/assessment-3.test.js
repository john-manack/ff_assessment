const findPrimeFactors = require('../assessment-3');

test("ensures a user-readable error message is thrown if the path is invalid", () => {
    
    const path1 = 'a'

    expect(findPrimeFactors(path1)).toBe(console.log("Invalid file path"))
});

test("ensures a comma-delimited list of prime factors is printed to the console for each integer in the text file", () => {
    
    const path1 = '/Users/John/learning/ff_assessment/javascript/tests/integers.txt'

    expect(findPrimeFactors(path1)).toBe(console.log(
        [ 2, 5 ]
        [ 101 ]
        [ 2, 2, 11 ]
        [ 2, 2, 5, 7 ]
    ));
});
