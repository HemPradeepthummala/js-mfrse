const reduceToValue = function (input, predicate, initial) {
  return input.reduce(predicate, initial);
}

const reduceNestedArray = function (input, predicate, initial, cString) {
  return reduceToValue(input.flat(), predicate, initial, cString);
}

const doesSomeSatisfy = function (input, predicate) {
  return input.some(predicate);
}

const doesEverySatisfy = function (input, predicate) {
  return input.every(predicate);
}

const sum = (x, y) => x + y;

// 1. Festival Ribbon count
let problem = 0;
const ribbons = ["red", "blue", "red", "green", "red", "blue", "blue"];
let cString = 'blue'
const incrementIf = (count, string) =>
  string === cString ? count + 1 : count;

console.log(`${++problem}.`, reduceToValue(ribbons, incrementIf, 0, 'blue'));

// 2. Stargazing Log

const log = [["Orion", "Leo"],
["Taurus"],
["Orion", "Gemini"]];

const pushIfNotIncludes = (result, x) => {
  if (!result.includes(x)) {
    result.push(x);
  }
  return result;
}

console.log(`${++problem}.`, reduceNestedArray(log, pushIfNotIncludes, []));

// 3. Birdwatching Duplicate Removal

const birds = ["sparrow", "crow", "sparrow", "eagle", "crow"];
console.log(`${++problem}.`, reduceToValue(birds, pushIfNotIncludes, []));


// 4. Classroom Attendance Check

const attendenceLog = [["Asha", "Ravi", "Neel"],
["Ravi"],
["Asha", "Meera"]];
console.log(`${++problem}.`,
  reduceNestedArray(attendenceLog, pushIfNotIncludes, []));


// 5. Candy Jar Stocking

const stocking = [[5, 3],
[2],
[4, 1]];
console.log(`${++problem}.`, reduceNestedArray(stocking, sum, 0));


// 6. Music Rehearsal Notes

const notes = [["mi", "fa", "so"],
["do", "mi"],
["fa"]];
console.log(`${++problem}.`, doesSomeSatisfy(notes, (x) => x.includes('do')));


// 7. Weather Sensor Validation

const temperatures = [[22, 23],
[25, 24, 22],
[29]];
console.log(`${++problem}.`, doesEverySatisfy(temperatures, (x) => x.every((x) => x < 32)));

// 8. Fitness Tracker Miles

const runnerLog = [[2, 3, 2],
[4],
[1, 1]];
console.log(`${++problem}.`, reduceNestedArray(runnerLog, sum, 0));

// 9. Art Workshop Color Variety

const colors = [["blue", "yellow"],
["yellow", "green"],
["blue"]];
console.log(`${++problem}.`,
  reduceNestedArray(colors, pushIfNotIncludes, []));

// 10. Library Return Counter

const booksLog = ["Dune", "Dune", "Foundation", "Dune"];
cString = 'Dune';
console.log(`${++problem}.`,
  reduceToValue(booksLog, incrementIf, 0));

// 11. Lunchbox Ingredient Inventory

const ingredients = [["rice", "lentils"],
["rice"],
["curd", "lentils"]];
console.log(`${++problem}.`,
  reduceNestedArray(ingredients, pushIfNotIncludes, []));

// 12. Choir Harmony Review

const tunes = [["la", "la"],
["mi"],
["so", "la"]];
console.log(`${++problem}.`,
  doesSomeSatisfy(notes, (x) => x.includes('so')));

// 13. Vegetable Crate Totals

const weights = [[4, 6],
[2, 3, 1],
[5]];
console.log(`${++problem}.`,
  reduceNestedArray(weights, sum, 0));

// 14. Post Office Parcel Record

const record = ["small", "large", "medium", "small"];
console.log(`${++problem}.`,
  reduceToValue(record, pushIfNotIncludes, []));

// 15. Wildlife Sighting Count

const animals = ["deer", "deer", "rabbit", "deer"];
cString = 'deer';
console.log(`${++problem}.`,
  reduceToValue(animals, incrementIf, 0));

// 16. Study Group Completion

const chapters = [[1, 2],
[3],
[2, 4, 1]];
console.log(`${++problem}.`,
  reduceNestedArray(chapters, pushIfNotIncludes, []));

// 17. Dance Class Steps 

const sequences = [["step", "tap"],
["turn", "step"]];
console.log(`${++problem}.`,
  doesSomeSatisfy(sequences, (x) => x.includes('turn')));

// 18. Garden Watering Amount

const usageLog = [[1, 2, 1],
[3],
[2]];
console.log(`${++problem}.`,
  reduceNestedArray(usageLog, sum, 0));

// 19. Paper Crane Making

const cranes = [[3, 2],
[1],
[4]];
console.log(`${++problem}.`,
  reduceNestedArray(cranes, sum, 0));

// 20. Fruit Basket Inventory

const fruits = [["apple", "banana"],
["apple"],
["apple", "orange"]];
console.log(`${++problem}.`,
  fruits.flatMap((x) => x).reduce(pushIfNotIncludes, []));

// 21. Classroom Pen Distribution

const pens = [[2, 3],
[1],
[3, 2]];
console.log(`${++problem}.`,
  pens.flatMap((x) => x).reduce(sum, 0));

// words Starts With 'A'

const sentences = [
  'just a phrase',
  'also another phrase',
  'arbitrary phrase',
  'An interesting phrase'
];

const pushIfStarts = (result, string) => {
  if ((string.toLowerCase()).startsWith('a'))
    result.push(string);
  return result;
}

const wordsWithA = x => {
  const splits = x.split(' ');
  return splits.reduce(pushIfStarts, [])
}

console.log(`${++problem}.`,
  sentences.flatMap(wordsWithA));

// 22. Movie Marathon Titles

const movies = [["Inception", "Dunkirk"],
["Interstellar"],
["Inception"]];
console.log(`${++problem}.`,
  movies.flatMap((x) => x).reduce(pushIfNotIncludes, []));

// 23. Name Badge Sorting

const students = ["A", "B", "A", "C", "B"];
console.log(`${++problem}.`,
  students.reduce(pushIfNotIncludes, []));

// 24. Ice Cream Orders

const iceCreams = [["vanilla", "chocolate"],
["strawberry"],
["chocolate"]];
cString = 'chocolate';
console.log(`${++problem}.`,
  iceCreams.flatMap((x) => x).reduce(incrementIf, 0));

// 25. Flowers in Bouquets

const flowers = [["rose", "lily"],
["lily", "tulip"]];
console.log(`${++problem}.`,
  flowers.flatMap((x) => x).reduce(pushIfNotIncludes, []));

// 26. Morning Exercise Count

const repetations = [[10, 20],
[5],
[15, 10]];
console.log(`${++problem}.`,
  repetations.flatMap((x) => x).reduce(sum, 0));

// 27. Train Station Announcements

const stations = [["A", "B"],
["B", "C"],
["A"]];
console.log(`${++problem}.`,
  stations.flatMap((x) => x).reduce(pushIfNotIncludes, []));

// 28. Book Club Pages Read

const pagesRead = [[12, 10],
[5],
[8, 7]];
console.log(`${++problem}.`,
  pagesRead.flatMap((x) => x).reduce(sum, 0));

// 29. Rainfall Data Check

const numbers = [[3, 4],
[5, 2],
[1]];
console.log(`${++problem}.`, doesEverySatisfy(numbers, (x) => x.every((x) => x > 0)));