// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:
//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"
var userAge = promt("age?");

if (Number(userAge) < 18) {
    alert("fuck you");
} else if (Number(userAge) === 18) {
    alert("sure,it's your first year");
} else {
    alert("go ahead, Drive your car")
}