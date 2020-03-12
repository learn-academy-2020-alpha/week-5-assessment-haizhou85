// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

const code = (string) =>{
  //create a string to store result
  let resultStr=""
  //iterates every letter in the given word
  for(let i = 0; i < string.length; i++){
    //change the letter if the condition is met
      if(string[i] === 'a') resultStr += '4'
      else if(string[i] === 'e') resultStr += '3'
      else if(string[i] === 'i') resultStr += '1'
      else if(string[i] === 'o') resultStr += '0'
      //do not change if none of any conditions is met
      else resultStr += string[i]
  }
  //return the result string 
  return resultStr
}

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
console.log(code(secretCodeWord1))
console.log(code(secretCodeWord2))

//--------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.
const aWord = (arr) =>{
  //filter the array with the words that contains 'a'
  return arr.filter(word =>
      word.toLowerCase().includes('a')
  )
}

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
console.log(aWord(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.
const fullHouse = (nums) =>{
  //set the default result to false
  let result = false
  //use set to get rid of duplicate numbers
  let setNums = new Set(nums)
  //full house only contains 2 unique numbers
  if(setNums.size === 2){
      let array = [...setNums]
      //find how many times each number repeats
      let n1 = nums.filter(num => num === array[0]).length
      let n2 = nums.filter(num => num === array[1]).length
      //if both of them repeat 2 or more times, that means full house
      if(n1 > 1 && n2 > 1) result = true
  }
  return result
}


var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 5, 5, 2]
// Expected output: false
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
