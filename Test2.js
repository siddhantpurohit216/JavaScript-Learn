function outerFunction() {
    var a = 1;
    let b = 2;
    const c = 3;

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3

    function innerFunction() {
        console.log(a); // undefined
        // console.log(b); // ref error
        // console.log(c); // ref error

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30

        if (true) {
            var a = 100; // function-scoped (within innerFunction)
            let b = 200; // block-scoped (within if block)
            const c = 300; // block-scoped (within if block)

            console.log(a); // 100
            console.log(b); // 20
            console.log(c); // 30
        }

        console.log(a); // 100
        console.log(b); // 20
        console.log(c); // 30
    }

    innerFunction();

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
}

outerFunction();
