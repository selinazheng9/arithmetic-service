const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
});

test('2000000 + 9999999 is equal to 11999999', () => {
    expect(add(2000000,9999999)).toBe(11999999);
});