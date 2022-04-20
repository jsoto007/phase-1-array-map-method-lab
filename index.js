const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newString = tutorials.map(function (string) {
    let words = string.split(" ")
    let wordsArr = words.map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    console.log(wordsArr)
    return wordsArr.join(" ")
  })
  return newString;
}

// gets each element of the array.
//iterates over each element.
//iterated over a string
//returns one fine array with the new strings.

// function elementFinder(arrOfStrings) {
//   const result = arrOfStrings.map((blogPost) => {
//     return blogPost
//   });
//   return result;
// }

// function stringModifier(string) {
//   const newString = string.map((stringArr) => {
//     stringArr[0].toUpperCase() + stringArr.substring(1)
//   })
//   return newString;
// }
