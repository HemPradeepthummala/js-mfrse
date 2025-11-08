// 1. Festival Ribbon count

const ribbons = ["red", "blue", "red", "green", "red", "blue", "blue"];
const incrementIfBlue = (count, string) => string === 'blue' ? count + 1 : count;
let result = ribbons.reduce(incrementIfBlue, 0);
console.log(result, "Festival Ribbon Count");

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

result = log
  .flat()
  .reduce(pushIfNotIncludes, []);
console.log(result, '2. Stargazing Log');

// 3. Birdwatching Duplicate Removal

const birds = ["sparrow", "crow", "sparrow", "eagle", "crow"];
result = birds.reduce(pushIfNotIncludes, []);
console.log(result, '3. Birdwatching Duplicate Removal');

// 4. Classroom Attendance Check

const attendenceLog = [["Asha", "Ravi", "Neel"],
["Ravi"],
["Asha", "Meera"]];

result = attendenceLog
  .flat()
  .reduce(pushIfNotIncludes, []);

console.log(result, '4. Classroom Attendance Check');

// 5. Candy Jar Stocking

const stocking = [[5, 3],
[2],
[4, 1]];

result = stocking
  .flat()
  .reduce((r, n) => r + n, 0);

console.log(result, '5. Candy Jar Stocking');

// 6. Music Rehearsal Notes

const notes = [["mi", "fa", "so"],
["do", "mi"],
["fa"]];

result = notes.some((x) => x.includes('do'));
console.log(result, '6. Music Rehearsal Notes');

// 7. Weather Sensor Validation

const temperatures = [[22, 23],
[25, 24, 22],
[29]];
result = temperatures.every(
  (x) => x.every(x => x < 32)
);
console.log(result, '7. Weather Sensor Validation');

// 8. Fitness Tracker Miles

const runnerLog = [[2, 3, 2],
[4],
[1, 1]];

result = runnerLog
  .flat()
  .reduce((r, n) => r + n, 0);

console.log(result,'8. Fitness Tracker Miles');