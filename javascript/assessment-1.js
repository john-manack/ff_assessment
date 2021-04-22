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

module.exports = defineTriangle;