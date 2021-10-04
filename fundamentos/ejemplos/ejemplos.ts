let a: number = 4, y = 2;
var b = "4"
let c: number | string | null = null;
let bool = true;
bool = 0;

c = a * bool;
if (a) {

}

enum Color { Red, Green, Blue };
var color: Color = Color.Green;

let n: string;
//n=''
c = n ?? 'por defecto';
c = n != null ? n : 'por defecto';

let punto: [number, number] = [2, 2]
c = punto[0]
punto[0] = 1;
type Colores = 'Red' | 'Green' | 'Blue'
let otro: Colores = 'Red'

let o: Object = null;

if (o != null && o.toString() != null && o.toString().toLowerCase() == 'algo') {

}
(o == null ? null : o.toString()) == null ? null : o.toString().toLowerCase()

if (o?.toString()?.toLowerCase() == 'algo') {

}

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

function kk(p: string | null) : string | undefined {
    return p?.toLowerCase();
}
c = null;
if (c)
    c = kk(c);