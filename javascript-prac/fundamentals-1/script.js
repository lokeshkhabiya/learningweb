// let js = "amazing";
// console.log(400-454+34);
// console.log("Lokesh");
// console.log(23);

// let firstName = "Lokesh";
// console.log(firstName);
// console.log(44);
// console.log(22); this is aslo called comments

/*--------------------------------------------------- */

// data types basics 

/*--------------------------------------------------- */

//using let
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);


// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Lokesh');


// javaScriptIsFun = 'YES';
// console.log(javaScriptIsFun);

/*--------------------------------------------------- */

// undefined 
// let year;
// console.log(year);
// console.log(typeof year);
// year = 1991;
// console.log(typeof year);
// console.log(typeof null);  //bug in javascript (not changed for legacy reasons)

/*--------------------------------------------------- */

//using const
// let age = 30;
// age = 31; // re assigning value to a variable 

// const PI = 3.14;
// PI = 33;  // error , as const cannot be changed ! 
// const job; // error , as const cannot be undeclared. 

// by default you const! 
/*--------------------------------------------------- */
// using var 
// var job1 = 'programmer';
// job1 = 'boobjob';

// don't use this please ! 
// lastName = 'Khabiya';
// console.log(lastName);

/*--------------------------------------------------- */

// operators basics 
// const now = 2037;
// const ageLokesh = now - 2002;
// const ageSuyog = now - 2000; 
// console.log(ageLokesh, ageSuyog);
// console.log(ageLokesh*2, ageSuyog /10, 2**3);

// //concatenation of strings 
// const firstName = 'Lokesh';
// const secondName = 'Khabiya';
// console.log(firstName +' '+secondName);

// //equal sign operator
// let x = 10+5;
// x+=10; // x = x+10;
// x++; // incrementation by 1
// x--; // decrementation by 1
// console.log(x);

// //comparision operators 
// console.log(ageLokesh>ageSuyog); // < , > , >= , <=

// const isfullAge = ageLokesh >= 20;

// console.log(now - 2002 > now - 2000);

/*--------------------------------------------------- */

// operator precedence ! 
// const now = 2037;
// const ageLokesh = now - 2002;
// const ageSuyog = now - 2000; 
// console.log(ageLokesh, ageSuyog);
// console.log(now - 2002 > now -2000);

/*---------------------------------------------------*/

// coding challenge 

// 1. Store Mark's and John's mass and height in variables 

// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;

// 2. Calculate both their BMI's using formula 

// bmiMark = markMass / ((markHeight**2));
// bmiJohn = johnMass / (johnHeight**2);

// 3. Create a boolean variable 'markHigherBMI' containing information about whether marks has a higher bmi or not 

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBMI);

/*---------------------------------------------------*/

// strings 

// const firstName = 'Lokesh';
// const job = 'Learner';
// const birthYear = 2002;
// const year = 2022;

// const lokesh = "I'm " + firstName + ',a ' + ( year - birthYear) + ' years old ' + job + '!';
// console.log(lokesh);

//template litreals 
// const lokeshNew = `I'm ${firstName},a ${year-birthYear} year old ${job}!`;
// console.log(lokeshNew);
// console.log(`Just a regular string...`);

/*---------------------------------------------------*/

// multiple lines 

//before es6 
// console.log('String with \n\ multiple \n\ lines');

//now 
// console.log(`String with
// multiple
// lines`);


/*---------------------------------------------------*/

// Decisions 

// const age = 15;
// const isOldEnough = age>=18;

// if (isOldEnough) {
//     console.log("Sarah can start driving license");
// } else {
//     console.log(`Sarah cannot start driving until ${18 - age} years.`);
// }

// const birthYear = 2001;
// let century;
// if (birthYear<=2000) {
//     century  = 20;
// } else {
//     century = 21;
// }
// console.log(century);

/*---------------------------------------------------*/

// type conversions 

// const inputYear = '2002';
// console.log(inputYear);
// console.log(inputYear+18);  to convert this use number function (built in). 
// console.log(Number(inputYear)+18);

// console.log(Number('Lokesh'));
// console.log(typeof (NaN));

/*----------*/ 

// other way 
// console.log(String(23));

/*---------------------------------------------------*/

// type coercion

// console.log("I am "+ 23 + " years old!");
// console.log('23' - '10' -2);
// console.log('23' * '2');

/*---------------------------------------------------*/

// Truly and falsy

// 5 falsy values : 0, '', undefined, null, NaN;

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Lokesh'));
// console.log(Boolean(({})));
// console.log(Boolean(''));

// use case 1 
// const money = 0;  else part will get executed as 0 is a falsy value.
// const money = 100;  // if part is executed as all other values are true.
// if (money) {
//     console.log("Don't spend it all !") 
// } else {
//     console.log("You should geta fucking job!")
//}

// use case 2
// let height;  // undefined
// let height = 0; // error as height is defined , but 0 is falsy , hence answer given is nay ! but it should be yay!
// if (height) {
//     console.log("YAY!") 
// } else {
//     console.log("NAY!")
// }

/*---------------------------------------------------*/

// equality operators == , ===

// const age = 18;
// if (age===18) console.log("Adult!");  // === is called strictly true!

// 18 === 18 -> true
// '18' === 18 -> false 
// 18 == 18 -> true 
// '18'==18 -> true

/*---------------------------------------------------*/

// prompt

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite); // by default string. You can convert into number using Number function. 

// if (favourite == 23) {
//     console.log('Cool!')
// }

// if (favourite === 23) {
//     console.log('Cooler!')
// } else {
//     console.log('lamer')
// }

/*---------------------------------------------------*/

