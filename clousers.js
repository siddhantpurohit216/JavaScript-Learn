function fun() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function fun2() {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
  console.log("halooo");
}
fun();
