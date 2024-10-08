// 17. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
function absoluteDifference(s) {
  if (s > 19) {
    return (s - 19) * 3;
  } else {
    return 19 - s;
  }
}
console.log("object");
console.log(absoluteDifference(12));
//  2
function absoluteDifference(num) {
  const difference = Math.abs(num - 19);
  return num > 19 ? difference * 3 : difference;
}

// Test cases
console.log(absoluteDifference(12)); // Output: 7
console.log(absoluteDifference(19)); // Output: 0
console.log(absoluteDifference(22)); // Output: 9

//19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
function checked(s) {
  if (s === 20) {
    console.log("its 20");
  } else if (s === 100) {
    console.log("its hundred");
  } else if (s === 400) {
    console.log("its four hundred");
  } else {
    console.log("none");
  }
}
checked(20);
checked(100);
checked(400);
// 20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
function checkedInt(num1, num2) {
  if (num1 > 0 && num2 < 0) {
    console.log(`num one ${num1} is positive numbr and ${num2} is negetive`);
  } else if (num1 < 0 && num2 > 0) {
    console.log(`${num1} is negetive and ${num2} is posivitive`);
  }
}

checkedInt(2, -5);
checkedInt(-2, 5);

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function addPy(str) {
  if (str.startsWith("Py")) {
    return str;
  } else {
    return "Py" + str;
  }
}

console.log(addPy("Pyai"));

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
function removeChar(str, position) {
  if (position < 0 || position >= str.length) {
    return str;
  }
  // return str.slice(0, position)+ str.slice(position+1)
  return str.slice(0, position) + str.slice(position + 1);
}
console.log(removeChar("bachan",2));

let names = ['banana', 'hori', 'koli', 'choli'];
let newNames = names.slice(1, 3);
console.log(newNames);

// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
function newStr(s){
  if(s.length<2){
    return s;
  }
  let fistChar = s[0];
  let middleChar = s.slice(1, s.length-1);
  let lastChar = s[s.length-1];
  return lastChar+middleChar+fistChar;
}
console.log(newStr('bab'));
//24 Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  
function createStirng(s){
  if(s.length<0){
    return s
  }
  let newS = s[0];
  return newS +s+ newS;
}
console.log(createStirng('kubi'));
// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. 
 function checkedNums(s){
  if(s%3 === 0|| s%7===0){
    return `${s} is multiple of 3 or 7`
  }
  return `${s} is not multiples of 3 o 7`;
 }
 console.log(checkedNums(14));
//  26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
function subStr(s){
  if(s.length<3){
    return `String must be at least 3 characters!`
  }
  let lastLetter = s.slice(-3);
  console.log(lastLetter);
  return lastLetter +s+ lastLetter;
}
console.log(subStr('balo'));
// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 
function javaStarts(s){
  if(s.startsWith("Java")){
    return `right`
  };
  return `not right`;
}
console.log(javaStarts('Javascru'));
//29. Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  Click me to see the solution
function range(a,b,c){
  if((a>=50 && a<=99) || (b>=50 && b<=99)|| (c>=50 && c<=99)){
    return `right`;
  }
  return `wrong`;
}
console.log(range(100,555,255));
//30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
function checkScript(s){
  if(s.substring(4, 10)==="Script"){
    return s.slice(0, 4) + s.slice(10);
  }
  return s;
}  
console.log(checkScript('javaScript is awesome'));
// 31. Write a JavaScript program to find the largest of three given integers.  
function largestInt(a,b,c){
  if(a>=b&&a>=c){
    return `${a} is greater`
  } else if(b>=c&&b>=a){
    return `${b} is greater`
  }else{
    return `${c} is greater!`
  }
}
console.log(largestInt(5,5,4));

//32 Write a JavaScript program to find the closest value to 100 from two numerical values. 
function closestValue(a, b){
  let diffA = Math.abs(100-a);
  let diffB = Math.abs(100-b);
  if(diffA<diffB){
    return a;
  } else if(diffB<diffA){
    return b;
  } else{
    return `both are equal to 100`
  }
}

console.log(closestValue(10, 90));  // Output: 90
console.log(closestValue(101, 99));  // Output: 99
console.log(closestValue(100, 100)); // Output: Both are equally close to 100
//33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function inRange(a, b) {
  if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) || 
      (a >= 70 && a <= 100 && b >= 70 && b <= 100)) {
    console.log('Both numbers are in the range.');
  } else {
    console.log('Numbers are not in the same range.');
  }
}

// Example usage:
inRange(45, 50);  // Both numbers are in the range.
inRange(71, 86);  // Both numbers are in the range.
inRange(45, 75);  // Numbers are not in the same range.
//34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
function largInt(a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    if (a > b) {
      console.log(a + ' is the largest number.');
    } else if (b > a) {
      console.log(b + ' is the largest number.');
    } else {
      console.log('Both numbers are equal.');
    }
  } else {
    console.log('One or both numbers are out of the 40..60 range.');
  }
}

// Example usage:
largInt(45, 50);  // 50 is the largest number.
largInt(55, 42);  // 55 is the largest number.
largInt(45, 45);  // Both numbers are equal.
largInt(45, 10);  // One or both numbers are out of the 40..60 range.
function compare(a, char) {
  // Slice the string from the 2nd to the 4th position
  let b = a.slice(1, 4);
  
  // Check if the character exists in the sliced substring
  if (b.includes(char)) {
    console.log(`${char} is in the 2nd to 4th positions.`);
  } else {
    console.log(`${char} is not in the 2nd to 4th positions.`);
  }
}

// Example usage:
compare('hello', 'e');  // e is in the 2nd to 4th positions.
compare('hello', 'o');  // o is not in the 2nd to 4th positions.
// 36. Write a JavaScript program that checks whether the last digit of three positive integers is the same. 
function checkLastDigit(a,b,c){
  let lastDigitA = a%10;
  let lastDigitB = b%10;
  let lastDigitC = c%10;
  if(lastDigitA===lastDigitB && lastDigitB===lastDigitC){
    console.log('last same numebrs');
  }else{
    console.log('not same numbers');
  }
}
checkLastDigit(13, 23, 33);
//37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
function newString(a){
  if(a.length<=3){
    return a.toUpperCase();
  }else{
    return a.slice(0,3).toLowerCase()+a.slice(3);
  }
}
console.log(newString('aaaAAA'));
//38. Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows: If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.

function mark(totalMark, isFinalExam){
  if(isFinalExam){
    return totalMark>=90?true: false
  }else{
    return totalMark>=89 && totalMark<=100?true:false
  }
};
console.log(mark(98, false));
//39. Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function sumInt(a,b){
  let c = a+b;
  if(c<=80 && c>=50){
    return 65;
  }else{
    return 80;
  }
}
console.log(sumInt(100,500));
// 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  
function intChecked(a,b){
   if(a===8 || b===8 ||a+b===8 || Math.abs(a-b)===8){
    return true;
   }else{
    return false;
   }
}
console.log(intChecked(4,4));
// 41. Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.
function checkedTree(a,b,c){
  if(a===b && b===c & c===a){
    return 30
  }else if(a===b || b===c || c===a){
    return 40;
  } else{
    return 20
  }
}
console.log(checkedTree(20,10, 154));
