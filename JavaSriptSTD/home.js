console.log('hello');

// alert('Hello this is Luka')

//Hello This is a comment Line 

//Variables
var b ='smoothie';
console.log(b);

var someNumber = 45;
//console.log(someNumber);

//Manipulate DOM with Javascript 
//... it's just a Fancy way of saying 
// change HTML with Javascript 

//var age = prompt('what is your age?');

//document.getElementById('someText').innerHTML = age;

//Numbes in Javascript 
var num1 = 10;

//Increment num1 by 1
num1++;

//Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, reminder %
console.log(num1 % 6);

// Increment/decrement by any number want
num1 += 10;
console.log(num1);

/* Functions 
1. Create a function
2. Call the function
*/

//Create
function fun() {
    console.log('this is a function')
}

// call
fun();

/* Let's create a function that take in a name  
and says hello followed by your name

For example

Name: "Qazi"
Return: "Hello Qazi"
*/

function greeting(yourName) {
    var result = 'Hello ' + yourName;
    console.log(result);
}

var name = console.log('Names');
greeting(name);

//How do arguments work in functions?
//How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

//while loops 

// var num = 0;

// while(num < 100){
//     num += 1;
//     console.log(num)
// }

for(let num = 0; num <= 100; num++){
    console.log(num);
}

// Data types 
let yourAge = 18; // number
let yourName = 'Bob'; // string
let names = {first: 'Jane' , last: 'Doe'}; //object
let truth = false; //boolean
let groceries = ['apple','banana', 'oranges']; //array
let random; //undefined
let nothing = null; // value null

//Strings in Javascipt (common methods)
let fruit = 'banana,apple,orange';
let moreFruits = 'banana/napple';

console.log(fruit);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));// split by a coma
console.log(fruit.split(''));//split by default

//Array 
let fruits = ['banana' , 'apple' , 'orange', 'pineapples'];
    fruits = new Array('banana' , 'apple' , 'orange' , 'pineapples');

console.log(fruits[2]);// access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//array common methods

console.log('to add a string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);//removes last item
console.log(fruits.push('new fruit I'),fruits);
console.log(fruits[3]);
fruits[fruits.length]='new  fruit II';
console.log(fruits);
fruits.shift();// remove first element from array
console.log(fruits);
fruits.unshift('cucumber'); // add first element to an array 
console.log(fruits);

let vegetables =['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);// combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());// puts  arrays in alphabeticle order


let someNumbers = [5,33,2,3,4,44,10,3,66,31,24,20,3,355,42,355,7];
console.log(someNumbers);
console.log(someNumbers.sort(function(a, b) {return a-b}));// sort in ascending
console.log(someNumbers.sort(function(a, b) {return b-a}));// sort in descending 

let emptyArray = new Array();//=== let emptyArray = [];
for(let num = 0; num <= 10; num++){
emptyArray.push(num);
}

console.log(emptyArray);

// Objects in javascript
// dictionaries in Python

let student = {
    first :'Rafeh',
    last:'Jackel',
    age :25,
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

console.log(student.first);
console.log(student.last);
student.first = 'not Rafeh';// change value
console.log(student.first);
student.age++;
console.log(student.age);

console.log(student.studentInfo());

//Conditionals, Control flows (if else)
// 18-35 is my target demographic 
// && AND
// || OR 

var age = 45;

if((age >= 18) && (age <= 35)){
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}

//Switch statements 
// differentiate between weekday vs. weekend 
//day 0 --> Sunday --> weekend
//day 1 --> Monday --> weekday 
//day 2 --> Tuesday 
//day 3 --> Wednesday
//day 4 --> Thursday --> weekday 
//day 5 --> Friday --> weekend
//day 6 --> Saturday --> weekend 

switch (2){
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text ='weekend';
        break;
    default:
        text ='weekday';    
}

console.log(text);


