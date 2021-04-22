// Reasoning for solution: 
// - To begin, we define 'i' as our integer, our incrementing divider, 'j', as 2, as it's the lowest prime number, and the 
//   solution array as an empty array to push in each prime factor.
// - By using a while loop, we can continually divide our given integer until it is less than the smallest prime number, 2.
// - We can be sure that the solution array will only contain factors because of the modulo conditional, and it will 
//   also only contain prime numbers because all previous possible factors have been exhausted with each loop.
// - If our most reduced integer is equal to 1 (per line 19 below), the while loop breaks and returns the solution array, 
//   because by this time the integer has been divided by itself.

'use strict';

const findPrimeFactors = (integer) => {
    let i = integer;
    let j = 2;
    let arr = [];

    while (i >= 2) {
        if (i % j === 0) {
            i = i / j;
            arr.push(j);
        } else {
            j++;
        }
    }
    return arr;
}

const int = 2759;
console.log(`The prime factors of ${int} are ${findPrimeFactors(int)}`)