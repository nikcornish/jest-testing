const sum = require('./sum');

// expects simple
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

// expects NOT 
test('adds 2 + 2 to NOT equal 5', () => {
    expect(sum(2,2)).not.toBe(5);
});