// console.log(y);
// let y=100;
// // console.log(y);
// // if(true)
// // {
// //     var x=10;
// //     console.log(x);
// // }
// // console.log(x);
// // console.log(a);

// const a=20;
// global.setTimeout(() => {
//     console.log("100");
// }, 2000);




//_________________________________________________________________________________________//

//var ->function scoped and can be redeclared any num of times within the same func
//let/ const -> let and const variables cannot be re-declared(in any combination[var,let,const]) within the same block scope.

//_________________________________________________________________________________________//


// function example() {
//   console.log(a); // undefined
//   var a = 5;
//   if (true) {
//     //   var a = 10; // Same `a` as above, because `var` is function-scoped
//     console.log(a); // 10
//   }
//   console.log(a); // 10
// }
// // console.log(a) //var is func scoped so cant be used outside example func
// example();


//__________________________________________________________//

//v2:

//   function example() {
//     // console.log(a); // ref error
//     let a = 5;
//     let b=100;
//     console.log(a) //5
//     // let a = 5; //cannot redeclare within the same block (inside brackets of example)
//     if (true) {
//         // console.log(a); 
//         let a = 10;          // different blocks so can be redeclared 
//         console.log(a);      // 10
//         console.log(b);      //100 
//     }
//     console.log(a); // 5
//   }
// // console.log(a) //ref error a is not defined let/const for both since they are block scope
//   example();

//v3:

//   function example() {
//     // console.log(a); // ref error
//     const a = 5;
//     if (true) {
//       const a = 10;        // different blocks so can be redeclared 
//       console.log(a); // 10
//     }
//     console.log(a); // 5
//   }

//   example();

//v4:

//   function example() {
//     // console.log(a); // ref error
//     let a = 5;  //let/const + var -->error else working
//     if (true) {
//       let a = 10; // different `a` from above, because `const and let` are block-scoped
//       console.log(a); // 10
//     }
//     console.log(a); // 10
//   }

//   example();

  //v5:
//The error occurs because you cannot declare a variable with 
// let and then redeclare it with var in the same block or function scope.
//  JavaScript detects this as a syntax conflict, resulting in a SyntaxError

  function example() {
    

    if (true) {
      let a = 10; 
      var a=100;  //error->syntax error a already declared
      console.log(a); 
    }
    console.log(a); 
  }

  example();
