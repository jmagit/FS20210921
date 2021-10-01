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

/*
buques(tab, "", trasf("str", pasatoUpper(guardes(otrsTabla))))
buques(tab, "", trasf("str", pasatoUpper(guardes(otrsTabla))))

buques(tab).trasf("str").pasatoUpper().guardes(otrsTabla)


buques(tab)
wait;
trasf("str")
wait;
pasatoUpper()
wait;
guardes(otrsTabla)
wait;

async function fn() {
await buques(tab).then()
lst = await trasf("str")
lst.toAlgo()
await pasatoUpper()

await guardes(otrsTabla)
}

buques(tab)
    .then(trasf("str"))
    .catch()
    .then(() => lst.toAlgo(); pasatoUpper())
    .then(guardes(otrsTabla))

}
+7