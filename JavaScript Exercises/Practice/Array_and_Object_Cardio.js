const inventors = [
  {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
  {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
  {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
  {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
  {first: 'Nikola', last: 'Tesla', year: 1856, passed: 1943},
  {first: 'Charles', last: 'Darwin', year: 1809, passed: 1882},
  {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
  {first: 'Thomas', last: 'Edison', year: 1847, passed: 1931},
  {first: 'Leonardo', last: 'da Vinci', year: 1452, passed: 1519},
  {first: 'James', last: 'Watt', year: 1736, passed: 1819},
  {first: 'Alexander', last: 'Graham Bell', year: 1847, passed: 1922},
  {first: 'Benjamin', last: 'Franklin', year: 1706, passed: 1790},
  {first: 'Louis', last: 'Pasteur', year: 1822, passed: 1895},
  {first: 'Michael', last: 'Faraday', year: 1791, passed: 1867},
  {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
  {first: 'Gregor', last: 'Mendel', year: 1822, passed: 1884},
  {first: 'Alessandro', last: 'Volta', year: 1745, passed: 1827},
  {first: 'Guglielmo', last: 'Marconi', year: 1874, passed: 1937},
  {first: 'John', last: 'Logie Baird', year: 1888, passed: 1946},
  {first: 'Grace', last: 'Hopper', year: 1906, passed: 1992},
  {first: 'Tim', last: 'Berners-Lee', year: 1955, passed: 2011},
  {first: 'Steve', last: 'Jobs', year: 1955, passed: 2011},
  {first: 'Bill', last: 'Gates', year: 1955, passed: 2011},
  {first: 'Katherine', last: 'Johnson', year: 1918, passed: 2020},
  {first: 'Hedy', last: 'Lamarr', year: 1914, passed: 2000},
  {first: 'Rosalind', last: 'Franklin', year: 1920, passed: 1958},
  {first: 'Carl', last: 'Sagan', year: 1934, passed: 1996},
  {first: 'Richard', last: 'Feynman', year: 1918, passed: 1988},
  {first: 'Jane', last: 'Goodall', year: 1934, passed: 2011}
];


// 1. Filter the list of inventors for those who were borm in the 1800s
const fifteen = inventors.filter((elem) => {
    if(elem.year >= 1700 && elem.year <= 1800){
        return true;
    }
});

console.log(fifteen);

// 2. Give an array of the investors first and last name
const names = inventors.map((elem) => {
    return `First: ${elem.first} Last: ${elem.last}`;
});

console.log(names);

// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort((a, b) => {
//   if(a.year > b.year){
//     return 1;
//   }else;{
//     return -1;
//   }
// });
// OR
const ordered2 = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.log(ordered2);


// 4. how many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// Sort the investors by years
const oldestSort = inventors.sort((a,b) => {
  first = a.passed - a.year;
  next = b.passed - b.year;
  return first > next ? -1 : 1;
});
console.table(oldestSort);


// Create a list of Boulevards in Paris that contain 'de' in the name
// Ref: https


const people = [
  'John Smith',
  'Jane Doe',
  'Michael Johnson',
  'Emily Davis',
  'William Brown',
  'Olivia Wilson',
  'James Taylor',
  'Sophia Martinez',
  'Benjamin Lee',
  'Charlotte Anderson',
  'Daniel Thomas',
  'Amelia Harris',
  'Matthew Clark',
  'Abigail Lewis',
  'David Young',
  'Mia King',
  'Joseph Wright',
  'Ella Scott',
  'Samuel Green',
  'Grace Baker'
];

