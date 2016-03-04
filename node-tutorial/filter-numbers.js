//the numbers
var numbers = [1, 13, 17, 4, 33, 19, 8 , 49, 45, 23,67,22,99,84, 23, 94];

//find the even numbers
var evenNumbers = [];
  for(x= 0; x < numbers.length; x++){
  if (numbers[x] % 2 === 0){
    evenNumbers.push(numbers[x]);
  }

}

//write the even numbers to the console
console.log(evenNumbers);   // you are not allowed to change this line!!!
 
