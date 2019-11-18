const f1 = value => secondvalue => value + secondvalue;
const f3 = a => b => a + b;

function f2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(f2(10)(5));
console.log(f1(100)(200));

function sum(a,b) {
    return a + b;
}

let addTen = f2(10);
console.log(addTen(5));
