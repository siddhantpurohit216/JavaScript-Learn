var x = 1;
let y = 2;
const z = 3;

function testScope() {
    console.log(x); // undefined
    console.log(a); // ref error
    console.log(y); // 2
    console.log(z); // 3
    var x=100;
    let a=100;
}
testScope();