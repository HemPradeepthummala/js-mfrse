const reduceToValue = function (input, predicate, initial, conditioned) {
  return input.reduce(predicate, initial);
}

const reduceNestedArray = function (input, predicate, initial) {
  return reduceToValue(input.flat(), predicate, initial);
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
let result = temperatures.every(
  (x) => x.every(x => x < 32)
);
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

const weights = [[4, 6],
[2, 3, 1],
[5]];
reduceNestedArray(weights, pushIfNotIncludes, []);

