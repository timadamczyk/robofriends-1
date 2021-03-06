///////////////////////////////////////
// Lecture: Hoisting 

//calculateAge(1968);
/*
function calculateAge(year) {
    console.log(2016 - year);
}


// retirement(1990) 
var retirement = function(year) {
    console.log(65-(2016-year));
}
 
*/

// variables
/*
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// lexical scoping showing that the variables are acessible global and above 
// excecution stack 
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello! ';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);

}







