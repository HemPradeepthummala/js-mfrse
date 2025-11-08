const playerMoves = [1, 4, 6, 2];
const winningCombinations = [
  [1, 4, 7],
  [1, 2, 3]
];

const isSubset = function (array1, array2) {
  return array1.every((function (ele) {
    return array2.includes(ele);
  }), array1);
}

const result = winningCombinations.some(
  function (ele) {
    return isSubset(ele, playerMoves);
  }
);

console.log(result);