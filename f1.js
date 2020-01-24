function test(a) {
	console.log(a);
}

var x = test; //parentheses are missing
var y = test("yy");
x("xx");

//-----------------------------------

/*
1. function name is optional for functions defined as expressions
2. 
*/
