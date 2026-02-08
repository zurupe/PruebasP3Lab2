const { factorial, fibonacci } = require('./public/math');
//Pablo Zurita
describe('Pruebas unitarias para math.js', () => {

    describe('Función factorial', () => {
        test('factorial de 0 es 1', () => {
            expect(factorial(0)).toBe(1);
        });

        test('factorial de 1 es 1', () => {
            expect(factorial(1)).toBe(1);
        });

        test('factorial de 5 es 120', () => {
            expect(factorial(5)).toBe(120);
        });

        test('factorial de un número negativo es undefined', () => {
            expect(factorial(-1)).toBeUndefined();
        });
    });

    describe('Función fibonacci', () => {
        test('fibonacci de 0 es 0', () => {
            expect(fibonacci(0)).toBe(0);
        });

        test('fibonacci de 1 es 1', () => {
            expect(fibonacci(1)).toBe(1);
        });

        test('fibonacci de 6 es 8', () => {
            expect(fibonacci(6)).toBe(8);
        });

        test('fibonacci de un número negativo es undefined', () => {
            expect(fibonacci(-1)).toBeUndefined();
        });
    });

});
