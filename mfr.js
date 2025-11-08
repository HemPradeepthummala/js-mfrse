// Festival Ribbon count

const ribbons = ["red", "blue", "red", "green", "red", "blue", "blue"];
const incrementIfBlue = (count, string) => string === 'blue' ? count + 1 : count;
const result = ribbons.reduce(incrementIfBlue,0);
console.log(result, "Festival Ribbon Count");
