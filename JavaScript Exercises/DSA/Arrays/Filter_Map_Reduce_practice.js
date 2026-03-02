const people = [
    {name: 'jay', last: 'jung', age: 30},
    {name: 'juin', last: 'wang', age: 25},
    {name: 'yhu', last: 'ung', age: 36},
    {name: 'ujun', last: 'ang', age: 55},
    {name: 'naruto', last: 'geto', age: 38},
    {name: 'Yugi', last: 'huz', age: 18}
];


// Some practice with .filter
console.log(people.filter(a => age< 30));


// .map
console.log(people.map(a => ))

// .reduce


// .sort
console.log(`This is the people object sorted from least
    to greatest: ${JSON.stringify(people.sort((a, b) => a.age- b.age), null, 2)}`);


// .then

// .every