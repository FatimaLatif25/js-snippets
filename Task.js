//Question 01
// Write a function to reverse a string?
const reverseString = (str) => {
 let reverse_sentense = ''
 for (let i=str.length-1; i>=0; i--){
    reverse_sentense +=  str[i]
 }
 return reverse_sentense
}
console.log(reverseString("JavaScript"))


//Question 02
// Write a function to check if a number is even or odd.
const evenOddNumber = (num) => {
  if(num%2===0){
    return  `${num} is Even Number`
  }
  else {
    return `${num} is Odd Number`
  }
}
console.log(evenOddNumber(7))



//Question 03
//Sort an array of numbers in ascending order.
const ascendingOrder = (num) => {
    return num.sort((a,b)=>a-b)
}
console.log(ascendingOrder([4,5,2,0,54,23,78]))

//OR using Bubble sort
const ascenOrder = (num) => {
   let temp = 0
  for (let i=0; i< num.length; i++){
   for (let j=0; j<num.length-i-1; j++){
    if(num[j]>num[j+1]){
        temp = num[j+1]
        num[j+1] = num[j]
        num[j] = temp
    }
 }
  }
  return num
}
console.log("Through bubble sort",ascenOrder([4,5,2,0,54,23,78]))


//Question 04
// Create an array of strings and print the longest string.
const longestString = (str) =>{
    let longestString = ''
    for(let i=0; i<str.length; i++){
      if(str[i].length > longestString.length){
        longestString = str[i]
      }
    }
  return longestString
}
console.log(longestString(["Fatima", "Abihanoor", "Mahnoor" ]))


//Question 05
// Find the index of an element in an array.
const findIndexOfElement = (num, element) => {
   return num.indexOf(element)
}
console.log(findIndexOfElement([5,9,7,2,7,8], 8))


//Question 06
// Write a function to check if a string is a palindrome
const isPalindrom = (str) => {
    let string = str.split('')
    let len = string.length
   for (let i=0; i< Math.floor(len/2); i++){
       if (str[i]!==str[len-1-i]){
        return false
       }
   }
   return true
}
console.log(isPalindrom("dad"))


//Question 07
// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
const sumEvenNumber = (num) => {
  let sum=0;
  for(let i=0; i< num.length; i++){
    if(num[i]%2===0){
      sum += num[i]
    }
  }
  return sum
}
console.log("Sum of Even Numbers are:", sumEvenNumber([1,2,3,4,5,6,7,8,9,10]))


//Question 08
//Write a function to find the factorial of a number?
const factorial = (number) => {
    if(number==0 || number==1){
        return 1
    }  
    else {
        return number*factorial(number-1)
    }
}
let number = 5
console.log("Factorial", factorial(number))


//Question 09
// Create an array of objects and print the object with the highest value.
const objects = [
    { Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
    { Fname: 'Ali', Lname : 'Raza', value: 15 },
    { Fname: 'Usman', Lname : 'Umer', value: 5 }
    ];

const highestValueObject = objects.reduce((prev, current) =>{
    return (prev.value > current.value) ? prev : current
})

console.log("highestValueObject is", highestValueObject)


//Question 10
//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.
const fetch = require('node-fetch');

 const fetchData = (url, delay) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
         fetch(url)
         .then(response => response.json())
         .then(data => resolve(data))
         .catch((err)=>{
           console.log("Error", err)
         })
    }, delay)
  })
 }

 const fetchThreeApi = async () => {
   const promiseApi1 = await fetchData('https://jsonplaceholder.typicode.com/posts/1',1000)
   const promiseApi2 = await fetchData('https://jsonplaceholder.typicode.com/posts/2',5000)
   const promiseApi3 = await fetchData('https://jsonplaceholder.typicode.com/posts/3',7000)

   const [api1, api2, api3] = await Promise.all([promiseApi1, promiseApi2, promiseApi3])
   console.log("Api1 Data:",api1)
   console.log("Api1 Data:", api2)
   console.log("Api1 Data:", api3)
 }
 fetchThreeApi()
