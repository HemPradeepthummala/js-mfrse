// 1. Festival Ribbon count

const ribbons = ["red", "blue", "red", "green", "red", "blue", "blue"];
const incrementIfBlue = (count, string) => string === 'blue' ? count + 1 : count;
let result = ribbons.reduce(incrementIfBlue, 0);
console.log(result, "Festival Ribbon Count");

// 2. Stargazing Log

const log = [["Orion", "Leo"],
["Taurus"],
["Orion", "Gemini"]];

const isNotIncludes = (result, x) => {
  if (!result.includes(x)) {
    result.push(x);
  }
  return result;
}

result = log
  .flat()
  .reduce(isNotIncludes, []);
console.log(result)