// Reasoning for solution: 
// - the function accepts the three integers as arguments
// - by using conditional statements, we arrive at one of our three expected outputs
// - by placing Isosceles last in this order of conditionals, a higher-complexity conditional statement is avoided by using the process of elimination

'use strict';

const defineTriangle = (side1, side2, side3) => {
    if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        return 'Scalene'
    } if (side1 === side2 && side1 === side3) {
        return 'Equilateral'
    } else {
        return 'Isosceles'
    }
}

console.log('Should be Scalene: ', defineTriangle(2,3,4));
console.log('Should be Isosceles: ', defineTriangle(2,3,3));
console.log('Should be Equilateral: ',defineTriangle(2,2,2));
console.log('Should be Scalene: ', defineTriangle(4,3,2));
console.log('Should be Isosceles: ', defineTriangle(3,2,3));
console.log('Should be Scalene: ', defineTriangle(2,4,3));
console.log('Should be Isosceles: ', defineTriangle(3,3,2));