function test(a) {
	console.log(a);
	console.log("aa");
}
test("hi1");

// function as value
var x = test;
x("hi2");