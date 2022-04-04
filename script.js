// **********************
// ** GREETER FUNCTION **
// **********************
console.log('** Greeter function **');

function greeter (str){
  return 'Hello ' + str;
}

let myGreeting = greeter("gregor");
console.log(myGreeting);
// outputs: Hello gregor

// *************************
// ** CHECK TYPE FUNCTION **
// *************************

console.log('** Check Type **');

function checkType (x){
 switch(typeof x) {
  case 'string':
    return 'string';
    break;
  case 'number':
    return 'number';
    break;
  case 'boolean':
    return 'boolean';
    break;
  case 'object':
    return 'object';
    break;
  case 'symbol':
    return 'symbol';
    break;
  default:
     return 'What is this?';
}
}
console.log(checkType(12));
// ouputs: number
console.log(checkType(['xyz','a']));
// ouputs: object 
let typeOf = "this is a string";
console.log(checkType(typeOf));
// outputs: string

// ***************************
// ** CHECK LENGTH FUNCTION **
// ***************************

console.log('** Check Length **');

function checkLength (x){
  return x.length;
}
const theLength = checkLength("Around the World");
console.log(theLength);
// outputs: 16

console.log(checkLength("One More Time"));
// outputs: 13

// ************************
// ** SUM OF TWO NUMBERS **
// ************************

console.log('** Sum of two numbers **');

function addTwoNumbers (a, b){
  return a + b;
}
console.log(addTwoNumbers(4, 6));
// Outputs to the console: 10

let result = addTwoNumbers(5, 15);
console.log(result);
// Outputs to the console: 20

let newNum = 12;

console.log(addTwoNumbers(result, newNum));
// Outputs to the console: 32;

// **********************
// ** ADD AND MULTIPLY **
// **********************
console.log('** Add and Multiply **');

function addAndMultiply(a,b,c,d) {
  return (a+b) * (c+d);
}

let result2 = addAndMultiply(2,3,4,5);
console.log(result2)
// Logging result outputs 45

console.log(addAndMultiply(1,1,1,1));
// Logs 4

// *******************
// ** RETURN LARGER **
// *******************
console.log('** Return Larger **');

function checkLarger(a,b) {
  return a > b ? a : b
}
console.log(checkLarger(1, 2));
// Outputs 2
console.log(checkLarger(44, 33));
// Returns 44

// *********************
// ** SUM OF ELEMENTS **
// *********************
console.log('** Sum of Elements **');

function addArrNums(arr) {
  let sum = 0;
  for (let i = 0 ; i<arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
let total = addArrNums([4, 7, 12, 11]);

console.log(total);
// Logs 34

total = addArrNums([4, 5, 6, 7, 8, 9]);

console.log(total);
// Logs 39

console.log(total - total);
// Logs 0
// ***********************
// ** Squaring a number **
// ************************
console.log('** Squaring a number **');

function square (num){
  return num*num;
}
console.log(square(2));

// *****************
// ** Odd or Even **
// *****************
console.log('** Odd or Even **');

function oddEven(num) {
  return (num % 2 == 0) ? 'Even' : 'Odd'
}
console.log(oddEven(4));
console.log(oddEven(3));

// *********************
// ** Sum of positive **
// *********************
console.log('** Sum of positive **');

function sumOfPositive(arr) {
   let sum = 0;
   for (let i = 0 ; i<arr.length; i++){
     if (arr[i]>0){
       sum += arr[i];
     }
  }
  return sum;
}

console.log(sumOfPositive([1,2,3,-1,-2,-3]));
// returns 6
console.log(sumOfPositive([-1,-2,-3]));
// returns 0