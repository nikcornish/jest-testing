const fruits = require('./arrays');

// expects simple
test('expects an array with 3 items', () => {
    expect(fruits).toHaveLength(3)
});



// expects NOT
test('expects an array to contains bananas', () => {
    expect(fruits).toContain('bananas');
})