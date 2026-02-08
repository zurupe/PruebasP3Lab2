function suma(a, b) {
    return a + b;
}

// Elementos de la UI
const input = document.getElementById('numInput');
const out = document.getElementById('out');
const btnFact = document.getElementById('btnFactorial');
const btnFibo = document.getElementById('btnFibonacci');

// Inicialización
out.textContent = `6 + 9 = ${suma(6, 9)}`;

// Eventos
btnFact.addEventListener('click', () => {
    const val = parseInt(input.value);
    if (!isNaN(val)) {
        const res = factorial(val);
        out.textContent = `Factorial de ${val} es: ${res}`;
    }
});

btnFibo.addEventListener('click', () => {
    const val = parseInt(input.value);
    if (!isNaN(val)) {
        const res = fibonacci(val);
        out.textContent = `Fibonacci (${val}º término) es: ${res}`;
    }
});