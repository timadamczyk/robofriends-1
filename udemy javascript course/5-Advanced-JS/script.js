/*
var couch = {
    cost: 180,
    yearBuilt: 1909,
    color: "brown",
    taste: "gross"
};

var Item = function(cost, dimentions, color) {
    this.cost = cost;
    this.dimentions = dimentions;
    this.color = color;
    this.taste = taste;
    this.calculateTotal = function(){
        console.log (this.cost + (this.cost * .12));
    }
};

var table = new Item( 300, 2013 ,"white");
var cup = new Item ( 20, 2018, "blue");
var lamp = new Item(400, 1985, "brown");



lamp.calculateTotal();
cup.calculateTotal();

Item.prototype.designer = "Le Bussy";

console.log(cup.designer);
console.log('cup');
console.log('lamp');




//Object.create

var thingProto = {
    calculateCost: function() {
        console.log(cost + (cost * .12));
    }
};

var couch = Object.create(thingProto)

couch.cost = 200;
couch.color = "brown";
couch.yearBuilt = 1990;




// Primitives vs Objects
//Primitives
var a = 23;
var b = a; 
a = 46;
//console.log(a);
//console.log(b);


//Objects
var obj1 = {
    name:'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
//console.log(obj1.age);
//console.log(obj2.age);

//Functions

var age = 26;
var obj = {
    name: "Tim",
    city: "Phoneix"
};

function change(a,b) {
    a = 30;
    b.city = "San Francisco";
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/


//Functions(are also objects :)

var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn) {
    var arrRes = [];
    for (var i = 0, i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
}