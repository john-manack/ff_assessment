const defineTriangle = require('./assessment-1');

test("examines triangle side lengths 1, 2, and 3 to equal 'Scalene'", () => {
    expect(defineTriangle(1,2,3)).toBe('Scalene');
});

test("examines triangle side lengths 1, 2, and 2 to equal 'Isosceles'", () => {
    expect(defineTriangle(1,2,2)).toBe('Isosceles');
});

test("examines triangle side lengths 3, 3, and 3 to equal 'Equilateral'", () => {
    expect(defineTriangle(3,3,3)).toBe('Equilateral');
});

test("examines triangle side lengths 2, 1, and 3 to equal 'Scalene'", () => {
    expect(defineTriangle(2,1,3)).toBe('Scalene');
});

test("examines triangle side lengths 3, 2, and 1 to equal 'Scalene'", () => {
    expect(defineTriangle(3,2,1)).toBe('Scalene');
});

test("examines triangle side lengths 8, 8, and 3 to equal 'Isosceles'", () => {
    expect(defineTriangle(8,8,3)).toBe('Isosceles');
});