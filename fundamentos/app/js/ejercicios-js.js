function aleatorio(inicio, fin) {
    if (!inicio || isNaN(parseInt(inicio.toString()))) throw new Error('Falta el valor inicial')
    if (!fin || isNaN(parseInt(fin.toString()))) throw new Error('Falta el valor final')
    if (inicio >= fin) throw new Error('El valor final debe ser mayor que el valor inicial')

    fin = fin - inicio;
    return Math.floor(Math.random() * fin) + inicio;
}

function JuegoDelNumero() {
    var numeroBuscado = aleatorio(1, 100);
    var numeroIntroducido;
    var intentos = 0;
    var encontrado = false;
    do {
        intentos += 1;
        numeroIntroducido = +prompt(`Dame tu numero (${intentos} de 10) [${numeroBuscado}]:`);
        // numeroIntroducido = +prompt(`Dame tu numero (${intentos} de 10):`);
        if (numeroBuscado === numeroIntroducido) {
            encontrado = true;
            break;
        } else if (numeroBuscado > numeroIntroducido) {
            alert('Mi número es mayor.');
        } else {
            alert('Mi número es menor.');
        }
    } while (intentos < 10);
    if (encontrado) {
        alert('Bieeen!!! Acertaste.');
    } else {
        alert('Upsss! Se acabaron los intentos, el número era el ' + numeroBuscado);
    }
    return encontrado;
}

function dameArray(numeroElementos, valorPorDefecto = "", ...resto) {
    var rslt = [];
    for (var ind = 0; ind < numeroElementos; ind++) {
        if(resto.length > ind)
            rslt[ind] = resto[ind];
        else 
            rslt[ind] = valorPorDefecto;
    }
    return rslt;
}

// function damePrimos(num) {
//     var calculos = 0;
//     var cuantos = +num;
//     var rslt = [];
//     var candidato = 2;
//     while (cuantos) {
//         while (true) {
//             var esPrimo = true;
//             for (var indice in rslt) {
//                 calculos++;
//                 if (candidato % rslt[indice] == 0) {
//                     esPrimo = false;
//                     break;
//                 }
//             }

//             candidato++;
//             if (esPrimo) {
//                 rslt.push(candidato - 1);
//                 break;
//             }
//         }
//         cuantos--;
//     }
//     console.log('Calculos: ' + calculos);
//     return rslt;
// }


function getPrimos(num) {
    return  {
        rslt : [],
        next: function () {
            if(this.limite <= this.actual) 
                return { done: true}
            
            while (true) {
                var esPrimo = true;
                if(this.actual < this.rslt.length) {
                    this.candidato = this.rslt[this.actual++]
                    return { done: false, value: this.candidato++}
                }
                for (var indice in this.rslt) {
                    this.calculos++;
                    if (this.candidato % this.rslt[indice] == 0) {
                        esPrimo = false;
                        break;
                    }
                }
    
                this.candidato++;
                if (esPrimo) {
                    this.rslt.push(this.candidato - 1);
                    this.actual++;
                    return { done: false, value: this.candidato - 1}
                }
            }
        },
        [Symbol.iterator]: function () { 
            this.calculos = 0
            this.actual = 0;
            this.limite = num;
            this.candidato = 2
            return this; 
        }
    }
}

function damePrimos(num) {
    var rslt = [];
    for (let p of getPrimos(num)) {
        rslt.push(p)
    }
    return rslt;
}

function esNIF(nif) {
    if (!nif || !/^\d{1,8}[A-Za-z]$/.test(nif))
        return false;
    const letterValue = nif.substr(nif.length - 1);
    const numberValue = nif.substr(0, nif.length - 1);
    return letterValue.toUpperCase() === 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(numberValue % 23);
}

function esPalindromo(cadena) {
    if(typeof(cadena) != "string" || cadena.trim().length == 0) return false;
    cadena = cadena.replace(/[ .,;:#¿?¡!()\[\]{}=+\-\*\/_`~$%\^&'"]/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();
    for(let i = 0; i < cadena.length - i; i++) {
        if(cadena.charAt(i) !== cadena.charAt(cadena.length - 1 - i)) return false;
    }
    return true;
}

function Juego(maxIntentos, valores) {
    var numeroBuscado;
    this.intentos;
    this.encontrado;
    this.mensaje;
    this.Inicializa = function () {
        numeroBuscado = aleatorio(1, valores);
        this.intentos = 0;
        this.encontrado = false;
        this.mensaje = 'Listo para jugar';
    }

    this.Inicializa();

    this.PruebaCon = function (numeroIntroducido) {
        if (this.intentos >= maxIntentos)
            throw new Error("Excedido el numero de intentos");
        this.intentos += 1;
        if (numeroBuscado == numeroIntroducido) {
            this.encontrado = true;
            this.mensaje = 'Bieeen!!! Acertaste.';
            return this.mensaje;
        }
        if (this.intentos >= maxIntentos) {
            this.mensaje = 'Upsss! Se acabaron los intentos, el número era el ' + numeroBuscado;
            return this.mensaje;
        }
        if (numeroBuscado > numeroIntroducido) {
            this.mensaje = 'Mi número es mayor.';
            return this.mensaje;
        }
        this.mensaje = 'Mi número es menor.';
        return this.mensaje;
    }
    this.DameMaxIntentos = function () { return maxIntentos; }
}

//Juego.prototype.DameMaxIntentos = function() { return maxIntentos; }
//Juego.prototype.DameIntento = function () { return this.intentos + 1; }

class JuegoConClase {
    #maxIntentos;
    #valores;
    #numeroBuscado;
    constructor(maxIntentos, valores) {
        this.#maxIntentos = maxIntentos;
        this.#valores = valores;
        this.Inicializa();
    }
    Inicializa() {
        this.#numeroBuscado = aleatorio(1, this.#valores);
        this.intentos = 0;
        this.encontrado = false;
        this.mensaje = 'Listo para jugar';
    };
    PruebaCon(numeroIntroducido) {
        if (this.intentos >= this.#maxIntentos)
            throw new Error("Excedido el numero de intentos");
        this.intentos += 1;
        if (this.#numeroBuscado == numeroIntroducido) {
            this.encontrado = true;
            this.mensaje = 'Bieeen!!! Acertaste.';
            return this.mensaje;
        }
        if (this.intentos >= this.#maxIntentos) {
            this.mensaje = 'Upsss! Se acabaron los intentos, el número era el ' + this.#numeroBuscado;
            return this.mensaje;
        }
        if (this.#numeroBuscado > numeroIntroducido) {
            this.mensaje = 'Mi número es mayor.';
            return this.mensaje;
        }
        this.mensaje = 'Mi número es menor.';
        return this.mensaje;
    };

    DameMaxIntentos() { return this.#maxIntentos; }
    
    get maxIntentos() { return this.#maxIntentos; };

    get intento() { return this.intentos + 1; }
}

