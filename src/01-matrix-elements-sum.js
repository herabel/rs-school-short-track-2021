/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const shape = [matrix[0].length, matrix.length];
  let num = 0;
  for (let frst = 0; frst < shape[0]; frst++) {
    for (let scnd = 0; scnd < shape[1]; scnd++) {
      if (matrix[scnd][frst] === 0) {
        break;
      } else {
        num += matrix[scnd][frst];
      }
    }
  }
  return num;
}

module.exports = getMatrixElementsSum;
