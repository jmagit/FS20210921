// 'use strict' 

describe('Demos de las pruebas', function() {
    describe('Calculos', function() {
        it('suma 2 + 2', function() {
            let a = 2, b = 2;
            let rslt;

            rslt = suma(a, b)

            expect(rslt).toBe(4)
        })

        it('suma negativo', function() {
            let a = 2, b = -2;
            let rslt;

            rslt = suma(a, b)

            expect(rslt).toBe(0)
            // if(a != 2 || b != 2 || rslt == 0) {
            //     fail('No pasa ...')
            // }
        })

        it('esto queda pendiente')

        describe('sumas', function() {
            [[2,2,4], [-1,2,1], [2,-1,1], [0,0,0], [0.1,0.2,0.3], ['a', 'b', 'ab']].forEach(caso => {
                it(`Suma ${caso[0]} mas ${caso[1]} debe ser ${caso[2]}`, function() {
                    expect(suma(caso[0],caso[1])).toBeCloseTo(caso[2],10)
                })                
            });
            // [['a', 'b']].forEach(caso => {
            //     it(`Suma erronea ${caso[0]} mas ${caso[1]}`, function() {
            //         expect(suma(caso[0],caso[1])).toThrow()
            //     })                
            // });
        })

        describe('divisiones', function() {
            [[4,2,2], [4,0,2], ['a', 'b', NaN]].forEach(caso => {
                it(`Division: ${caso[0]} dividido ${caso[1]} debe ser ${caso[2]}`, function() {
                    expect(divide(caso[0],caso[1])).toBe(caso[2])
                })                
            });
        })
    })

    it('Este pasa siempre', function() {
        expect(true).toBeTruthy()
    })

    xit('Este falla siempre', function() {
        expect(true).not.toBeTruthy()
    })
})

var soyGlobal = 'algo'
const count = 0;

fdescribe('Sintaxis', function() {
    describe('Ejemplos 1', function() {
        xit('Operadores', function() {
            function kk() {
                var i = 1;
                if(true) {
                    var j=2;
                }
                c = i + j;
                return c;
            }
            const calc = 2 + 2;
            // calc = 4;

            // var j = 1;
            
            expect(c === kk()).toBeTrue()

            impresiones= 4;
            a = 1
            b = 2
            expect(a + b).toEqual(3)
            expect(1 + a + b.toString()).toEqual('22')

            expect(a = b).toBeTruthy()
            expect(a = b).not.toBeTrue()
            a += '2'
            a *= 2
            b = '2'
            b = 'a'
            a += impresiones
            rlst = ++b;
            // rlst = a > 0 | a = 1;
            expect(+a + +b == 4).toBeTruthy()
            //expect(a + b).toEqual(22)
            b = 2
            expect(a + b).toEqual('22')
            expect(a * b).toEqual(4)
           
            // expect(a + b == 22).toBeTruthy()

        })
    })
    
})
