

// Array of people objects
const people = [
  { id: 1, name: 'Wes', year: 1988 },
  { id: 2, name: 'Kait', year: 1986 },
  { id: 3, name: 'Irv', year: 1970 },
  { id: 4, name: 'Lux', year: 2015 },
  { id: 5, name: 'John', year: 1990 },
  { id: 6, name: 'Jane', year: 1992 },
  { id: 7, name: 'Doe', year: 1985 },
  { id: 8, name: 'Smith', year: 2000 },
  { id: 9, name: 'Alex', year: 1998 },
  { id: 10, name: 'Chris', year: 1980 }
];

// Array of comment objects
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
  { text: 'So cool', id: 678987 },
  { text: 'Great post', id: 987654 },
  { text: 'Informative', id: 345678 },
  { text: 'Thanks for sharing', id: 234567 },
  { text: 'Awesome!', id: 876543 }
];


// Usiug .some()

//  Look for a person at least 19 or over
const isAdult = people.some((person) => 
    (new Date()).getFullYear() - person.year >= 19) // Make implicit return
console.log(isAdult);

// Check is ALL people are at least 19
const allAdult = people.every((person) => 
    (new Date()).getFullYear() - person.year >= 19) // Make implicit return
console.log(allAdult);