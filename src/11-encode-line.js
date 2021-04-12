/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [...str];
  const result = [1];
  let i = 0;
  while (i < arr.length) {
    result.push(arr[i]);
    const counter = result.length - 1;
    while (arr[i] === arr[i + 1]) {
      result[counter - 1] += 1;
      i++;
    }
    result.push(1);
    i++;
  }
  return result.filter((x) => x !== 1).join('');
}

module.exports = encodeLine;
