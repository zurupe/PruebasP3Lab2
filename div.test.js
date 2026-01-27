const div = require('./div.js');

test('Division para 0 debe ser 7', () => {
    expect(div(3, 0)).toBe(7);
});