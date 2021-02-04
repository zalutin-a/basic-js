const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  matrix = matrix.flat(Infinity)
  let str = matrix.join(',')
  let str2 = str.match(/\s\^\^(?!\ )/g)
  str = str.match(/\^\^(?!\ )/g)
  return str === null ? 0 : str2 === null? str.length : str.length - str2.length
};
