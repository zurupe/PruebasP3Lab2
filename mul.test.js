const mul = require('./mul.js');

test('Multiplicacion de 3 *4 debe ser 12', () => {
    expect(mul(3, 4)).toBe(12);
}); 