// Reasoning for prime factor logic: 
// - We define 'a' as our integer, 'b' as our incrementing divider (starting with 2, as it's the lowest prime number), and the 
//   solution array as an empty array to push in each prime factor.
// - By using a while loop, we can continually divide our given integer until it is less than the smallest prime number, 2.
// - We can be sure that the solution array will only contain factors because of the modulo conditional, and it will 
//   also only contain prime numbers because all previous possible factors have been exhausted with each loop.
// - If our most reduced integer is equal to 1 (per line 28 below), the while loop breaks and returns the solution array, 
//   because by this time the integer has been divided by itself.

'use strict';

const fs = require('fs');
const path1 = '/Users/John/learning/ff_assessment/javascript/tests/integers.txt'


const findPrimeFactors = (path) => {
    try {
        let allData = fs.readFileSync(path, "utf8");
        allData = allData.trim();
        let integerArray = allData.split('\n');
            for (let i = 0; i < integerArray.length; i++) {
                let a = integerArray[i];
                let b = 2;
                let solutionArr = [];

                while (a >= 2) {
                    if (a % b === 0) {
                        a = a / b;
                        solutionArr.push(b);
                    } else {
                        b++;
                    }
                }
                console.log(solutionArr);
            }
    } catch (error) {
        console.log("Invalid file path")
    }
    

}

// findPrimeFactors(path1);
// findPrimeFactors(2);

module.exports = findPrimeFactors;