const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr1 = Array.from(arr)
  if(typeof(arr)!== "object") throw 'THROWN'
  if(!Array.isArray(arr)) throw 'THROWN'
  if(arguments.length === 0) throw 'THROWN'
  if(arr.length == 0) return arr

  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] == '--discard-next' && arr1[i+2] == '--double-prev') arr1.splice(i, 3)
    if(arr1[i] == '--discard-next' && arr1[i+2] == '--discard-prev') arr1.splice(i, 3)
    
    if(arr1[i] == '--discard-prev' && i===0) arr1.splice(i, 1)
    if(arr1[i] == '--double-prev' && i===0) arr1.splice(i, 1)
    if(arr1[i] == '--double-next' && i===arr1.length-1) arr1.splice(i, 1)
    if(arr1[i] == '--discard-next' && i===arr1.length-1) arr1.splice(i, 1)
    
    if(arr1[i] == '--double-next') arr1[i] = arr1[i+1]
    if(arr1[i] == '--double-prev') arr1[i] = arr1[i-1]
    if(arr1[i] == '--discard-next') {arr1.splice(i, 2); i = i - 1}
    if(arr1[i] == '--discard-prev') {arr1.splice(i-1, 2); i = i - 2}
  }
  return arr1

};
