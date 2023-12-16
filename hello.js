// JS is a dynamic language

const accountId = 144553
let accountEmail="deep@gmail.com"
var accountPassword="12345"
accountCity="Raniganj"

accountId=2

accountEmail="ok@gmail.com"
accountPassword="878788"
accountCity="Kolkata"
let accountState;
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

"use strict"; // treat all codes as new js
alert("Hi")

let name = "Deep";
let age = 18;
let isLoggedIn = false;

number => 2^53
bigint
string => ""
boolean => true/False
null  => standalone value --> object
undefined
symbol => unique

object
console.log(typeof null);

let userName = {
  name : "pk",
  age : 100
}

console.log(userName.name);

let score ="33"

console.log(typeof score);

let valueInNumber=Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

let score ="33abc" => NaN
true=> 1 ; false=>0

if(0) {
  console.log("hello");
}

let isLoggedIn="DEEP"

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let value=3

let negvalue=-value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%2);

let str1= "Hello"
let str1 : string = 'Hello'
let str2=" Deep"

let str3= str1+str2

console.log(str3);

console.log("1"+2);

console.log(1+"2");

console.log("1"+2+2);

console.log(1+2+"2");

console.log(true);
console.log(true);

console.log("2">1); 

console.log(1<"2");

console.log(null> 0); // false
console.log(null ==0); // false
console.log(null <0); // false
console.log(null>= 0); // false
console.log(undefined==0); // false

===
console.log("2"===2);

premitive data type
 7 types --> call by value : String , number, boolean, null, undefined, Symbol, bigint

reference or non premitive data type
Array, Objects, Functions

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 62484845245565954n;

const friends = ["nandy", "sayan", "pk"];

let myObj = {
  name: "Deep",
  age: 18,
};

// function

const myFunction = function () {
  console.log("Hellow World");
};

console.log(typeof bigNumber);

const ousideTemp = null;
console.log(typeof ousideTemp);

stack (premitive)
let myYoutubename="deeppati"

let anotherName = myYoutubename
anotherName="sayan"
console.log(myYoutubename);
console.log(anotherName);

heap (non-premitive)
let userOne = {
  email: "deep@google.com",
  upi: "deep@paytm",
};
let userTwo = userOne;
userTwo.email = "sayan@google.com";

console.log(userOne);
console.log(userTwo);

strings

const name = "deep";
const repo = 50;
console.log(name,repo);
console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String("Deep-pati-com");
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf("p"));

const newString = gameName.substring(0, 3);
console.log(newString);
const anotherString = gameName.slice(-2,4);
console.log(anotherString);
const anotherStringOne = "    DEEP     ";

console.log(anotherStringOne);
console.log(anotherStringOne.trim());
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));
console.log(url.includes("hhdgdyy")); //false
console.log(gameName.split("-"));
