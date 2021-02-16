module.exports = function towelSort (matrix) {

  if(!matrix || matrix.length === 0) return [];

  return matrix.map((item, index) => {
    return index % 2 === 0 ? item : item.reverse();
  }).flat();

}
