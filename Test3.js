function hoistingTest() {
    console.log(a); // undefined
    // console.log(b); // ref error
    // console.log(c); // ref error

    var a = 1;
    let b = 2;
    const c = 3;

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3

    {
        console.log(a); // 1
        // console.log(b); // ref error   //since hoistind b occrs in this block it is under temporal dead zone
        // console.log(c); // ref error //since hoistind c occrs in this block it is under temporal dead zone

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }

    console.log(a); // 10
    console.log(b); // 2
    console.log(c); // 3
}

hoistingTest();
