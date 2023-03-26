// to start strict mode 
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log("I can drive!");

//-------------------------------------------------//

// const interface = 'Audio';
// const private = 534; ---> these keywords are reserved in strict mode! 
// const if = 23;

//-------------------------------------------------//

// FUNCTIONS 

// function logger() {
//     console.log("My name is Lokesh.");
// }

// // calling / running / invoking
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 7);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(4, 6);
// console.log(appleOrangeJuice);

//-------------------------------------------------//

// Function declaration vs expression 

// function declaration --> You can call this function before declaring
// const age = calAge(1991);
// console.log(age);
// function calAge(birthYear) {
//     return 2023 - birthYear;
// }
// console.log(calAge(2002));


// function expressions --> Can't call before declaring, will give error 
// const calAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// console.log(calAge2(2002));

//-------------------------------------------------//

// Arror function --> Don't get the 'this' keyword
// const calAge3 = birthYear => 2023 - birthYear;
// console.log(calAge3(2002));

// // function to calculate years of retirement 
// const yearsOfRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`
// };
// console.log(yearsOfRetirement(2002, 'Lokesh'));

//-------------------------------------------------//

// Function calling other functions 

// function cutFruitPeices(fruits) {
//     return fruits*4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePeices= cutFruitPeices(apples);
//     const orangePeices = cutFruitPeices(oranges);

//     const juice = `Juice with ${applePeices} pieces of apples and ${orangePeices} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(4, 5));

//-------------------------------------------------//

// ARRAYS

// const friends  = ['Lokesh', 'Suyog', 'kirti']
// console.log(friends);

// //other way 
// const years = new Array(1991, 1992, 1993);
// console.log(years);

// console.log(friends[0]);

// Array is not primitive data type 
// you can mutate array --> but not full 

//-------------------------------------------------//

// Basic operations on array 

// add elements at the end 
// const friends = ['Lokesh', 'Suyog', 'Kirti'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// add elements at beginning
// friends.unshift('Sanjay');
// console.log(friends);

// remove elements 
// friends.pop();   // last
// const pooped = friends.pop();
// console.log(pooped);
// console.log(friends);

// friends.shift();  // first
// console.log(friends);

// console.log(friends.indexOf('Lokesh'));
// console.log(friends.indexOf('Seema'));

// console.log(friends.includes('Lokesh'));
// console.log(friends.includes('Bob'));  // includes uses strict checking operation ===

//-------------------------------------------------//

// Objects

// const lokesh = {
//     firstName: 'Lokesh',
//     lastName: 'Suyog',
//     age: 2023 -2002,
//     job: 'Unemployed',
//     friends: ['Atharva', 'Anuj', 'Prashant']
// };
// console.log(lokesh);


// in objects : order doesnt matter while retrieving data 

//-------------------------------------------------//

// retreiving data from array / object

// const lokesh = {
//     firstName: 'Lokesh',
//     lastName: 'Khabiya',
//     age: 2023 -2002,
//     job: 'Unemployed',
//     friends: ['Atharva', 'Anuj', 'Prashant']
// };

// console.log(lokesh.lastName);

// or 

// console.log(lokesh['firstName']);

// const nameKey = 'Name';
// console.log(lokesh['first' + nameKey]);
// console.log(lokesh['last' + nameKey]);

// wont work with dot operation.
// when we need to first compute the property name then use bracket method , otherwise use dot method.

// const interestedIn = prompt('What do you want to know about lokesh? ');
// console.log(interestedIn);
// // console.log(lokesh.interestedIn); // ERROR
// console.log(lokesh[interestedIn]);

//-------------------------------------------------//

// const lokesh = {
//     firstName: 'Lokesh',
//     lastName: 'Khabiya',
//     birthYear: 2002,
//     job: 'Unemployed',
//     friends: ['Atharva', 'Anuj', 'Prashant'],
//     hasDriversLicense: true,
    
    // calAge: function(birthYear) {
    //     return 2023-birthYear;
    // }


    // calAge: function() {
    //     // console.log(this);
    //     return 2023 - this.birthYear;
    // }

//     calAge: function() {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is ${this.calAge()}-year old fat kid, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };
// console.log(lokesh.calAge());

// console.log(lokesh.age);
// console.log(lokesh.age);
// console.log(lokesh.age);
// console.log(lokesh.age );


//-------------------------------------------------//


// challenge 
// 'Lokesh is 21 year old fat kid, and he has a driver license 

// console.log(lokesh.getSummary())

//-------------------------------------------------//


// basic for looping
// for (let i = 1; i <= 10; i++) {
//     console.log(`lifting weights repetition ${i}`);
// }

// looping throught array 

// const lokesh = [
//     'Lokesh',
//     'Khabiya',
//     2023-2002,
//     'Engineer',
//     ['Suyog', 'Kirti' , 'Seema']
// ];

// console.log(lokesh[0]);
// console.log(lokesh[1]);
// console.log(lokesh[2]);
//...
// console.log(lokesh[4]);

// for (let i = 0; i < lokesh.length; i++) {
//     console.log(lokesh[i]);;
// }

//-------------------------------------------------//



