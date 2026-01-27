const div = require('./div.js');

test('Division entre 15 y 5 debe ser 3', () => {
    expect(div(15, 5)).toBe(3);
});