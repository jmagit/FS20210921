function suma(a, b) {
    return a + b;
}
function divide(a, b) {
    // debugger;
    return a / b;
}

function calcula(a, b, fn) {
    return fn(a, b)
}

function opera(operador) {
    switch (operador) {
        case '+': return suma;
        case '-': return function (a, b) { return a - b; }
        case '*': return function (a, b) { return a * b; }
        case '/': return divide;
        //default: return function() { return; }
    }
}

console.log(`Resultado: ${opera('/')(2, 2)}`)
console.error('Esto es un error de ejemplo')
