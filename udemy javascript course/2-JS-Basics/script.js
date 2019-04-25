// lecture variables 

/*
var name = 'tim';
console.log(name);

var lastName = 'smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/ 

// Lecture: variable 2 

/*

var name = "tim";
var age = 26;

//console.log(name + age);
//console.log(age+age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;
console.log(name + " is a " + age + " year old " 
+ job + " . Is he married? " + isMarried + " . ");

age = "thirty six";
job = "driver"; 
console.log(name + " is a " + age + " year old " 
+ job + " . Is he married? " + isMarried + " . ");

//var lastName = prompt("what is the last name?");
//console.log(lastName);

alert(name + " is a " + age + " year old " 
+ job + ". Is he married? " + isMarried + ". ")

*/

// lecture: operators

/*
var now = 2016
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52 
//1964

console.log(birthYear);

var ageJohn = 30; 
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26 
//ageJohn = 26 

ageJohn++;  
ageMark *= 2;

console.log (ageJohn);
console.log (ageMark);
*/
 
///////////////////////////////////////////
// Lecture: if/else Satements 
 /*
var name= "jonh";
var age= 26;
var isMarried = "yes"

if (isMarried === "yes"){
    console.log(name + " is married!");
} else {
    console.log(name +" will hopefully marry soon :)")
}


isMarried = true;

if(isMarried) {
    console.log("YES!");
} 

if (23 === "23") {
    console.log("something to print...");
}
*/
////////////////////////////////////
// Lecture: boolean logic and switch 

/*
var age = 22;

if (age < 20) {
    console.log("john is a teenager");
} else if (age > 20 && age < 30 ) { 
    console.log ("john is a young man.")
} 
else {
    console.log("john is a man");
} 
*/

// Coding challenge 1

var massMark = 79;
var heightMark = 1.9;

var heightJohn = 92;
var massjohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
var BMIJohn = massjohn / (heightJohn * heightMark);
console.log(BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('is mark\'s BMI higher than John\'s ? ' + markHigherBMI);

///// Lecture: boolean logic and switch

/*

var age = 25;

if (age < 20) {
    console.log('john is a young man.')
} else if (age >= 20 && age < 30) {
    console.log('john is a young man')
} else {
    console.log('john is a man');
}

var job = 'cop';

job = prompt('what does john do?');

switch (job) {
    case 'teacher':
    console.log ('john teaches kids');
    break;
    case 'driver':
    console.log (  'jonh drives cabs');
    break;
    case 'cop':
    console.log ( 'john copps around');
    break;
    default:
    console.log ('john does something else');
}

*/

/*
var height1 = 126;
var age1 = 34;
var height2 = 133;
var age2 = 35;

var scorePlayer1 = height1 + 5 * age1; 
var scorePlayer2 = height2 + 5 * age2;

/*
if (scorePlayer1 > scorePlayer2) {
    console.log ("player 1 wins with " + scorePlayer1 + " points!");
} else if (scorePlayer2 > scorePlayer1) {
    console.log ("player 2 wins with " + scorePlayer2 + " points");
} else if (scorePlayer2 === scorePlayer1) {
    console.log("draw");
}
*/
/*
var height3 = 153;
var age3 = 31;
var scorePlayer3 = height3 + 5 * age3;

if (scorePlayer1 > scorePlayer2 && scorePlayer3) {
    console.log ("player 1 wins with " + scorePlayer1 + " points!");
} else if (scorePlayer2 > scorePlayer1 && scorePlayer3);{
    console.log ("player 2 wins with " + scorePlayer2 + " points");
 } else if (scorePlayer3 > scorePlayer1 && scorePlayer2){
     console.log ("player 3 wins with" + scorePlayer3 + " points");
 } else ()
 */

 /////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
         console.log(name + " retires in " + retirement + " years"); 
    } else {
        console.log (name + " has already retired. ");
    }
   
}

yearsUntilRetirement("john", 1990);
yearsUntilRetirement("mike", 1969);
yearsUntilRetirement("mary", 1948);

*/

/// Lecture: statements and expressions 

/*

function someFun(par){
    //code 
}

// Expressions 

3 + 4 
var x = 3;

//statements 

if ( x === 5 ) {
    // do something 
}

*/ 


////// Lecture : Arrays 

/*

var names =[ "john", "jane", "mark"];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = "lucy";
console.log(names);

var john = ["john", "smith", 1990, "designer", false];

john.push("blue");
john.unshift("mr.");
john.pop();
john.shift();
console.log(john);

if (john.indexOf('teacher') === -1 ) {
    console.log ('john is not a teacher.')
}

*/
/////////////////////////////////
//// Lecture: Objects


/*

var john = {
    name: "john",
    lastName: "smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false
};

console.log(john.lastName);
console.log(john["lastName"]);

var eee = "job" ;
console.log(john[eee]);

john.lastName = "miller";
john["job"]= "programmer";

console.log(john);

var jane = new Object();
jane.name = "jane";
jane.lastName = "smith";
jane["yearOfBirth"] = 1969;
jane["job"]= "retired";


*/

///////////
// Lecture: Objects and Methods

/*

// john object
var john= {
    name: "john",
    lastName: "smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["jane", "mark", "bob"],
    calculateAge: function(){
        return 2016 - this.yearOfBirth;
    }
};

// console.log(john.calculateAge(1970));
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

*/
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
0, true, print 0, update i to 1 
1, true, print 1, update i to 2 
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

//var names = ["jonh", "jane", "mary","mark","bob"];

// for loops
/*
for (var i =0; i <names.length; i++) {
    console.log(names[i]);
}

for (var i =names.length - 1; i >= 0 ; i--) {
    console.log(names[i])
}
*/

// while loops

/*
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i<= 5; i++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i<= 5; i++) {
    if (i === 3) {
       continue;
    }
    
    console.log(i);

}


var names = ["matt","susan","ester","tom","brat"]

function printFullAge(years) {
    var ages = [];
    var fullAges = [];
 
    for (var i = 0; i < years.length;i++) {
     ages[i] = 2018 - years[i];
 }
 
 for (i =0; i < ages.length; i++){
    if (ages[i] >= 18) {
        console.log( names[i] +  " is " + ages[i] + " years old, and is of full age");
        fullAges.push(true);
    } else {
        console.log( names[i] + " is " + ages[i] + " years old, and is NOT of full age");
        fullAges.push(false);
    }
}
return fullAges;
}

var years = [2010, 1985, 1992, 2012, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012,1915,1999]);

*/


function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product*=(arr[i][j]);
    }


    // Only change code above this line
    return product;
  }
  }
  
  // Modify values below to test your code
  multiplyAll([[1,2],[3,4],[5,6,7]]);




