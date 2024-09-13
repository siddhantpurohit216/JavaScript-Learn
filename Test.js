// Global Scope
var x = 1;
let y = 2;
const z = 3;

function testScope() {
    console.log(x); // undefined
    // console.log(y); // reference error
    // console.log(z); // reference error

    var x = 10;
    let y = 20;
    const z = 30;

    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30

    if (true) {
        var x = 100; // function-scoped
        let y = 200; // block-scoped
        const z = 300; // block-scoped

        console.log(x); // 100
        console.log(y); // 200
        console.log(z); // 300
    }

    console.log(x); // 100
    console.log(y); // 20
    console.log(z); // 30
}

testScope();

console.log(x); // 1 //function scope so reclareaction of x to 100 is limimted to the func only
console.log(y); // 2
console.log(z); // 3

{
    var x=-1;
}
console.log(x); //-1 var is not block scope , so it changes the value in global scope