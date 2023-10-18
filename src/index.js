// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let result = [];
    for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
    result.push(...matrix[i]);
  } else {
    for (let j = matrix[i].length - 1; j > -1; j--) {
      result.push(matrix[i][j]);
    }
  }
  }
  
  return result;
}
