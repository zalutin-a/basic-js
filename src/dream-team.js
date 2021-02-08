const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(typeof(members)!== "object") return false
    if(!Array.isArray(members)) return false
    if(arguments.length === 0) return false
    let arr = []
    //members = members.flat(Infinity)
    for(let elem of members){
      if(typeof(elem) == "string"){
        elem = elem.trim()
        arr.push(elem.charAt(0).toUpperCase())
      }
    }
    return arr.sort().join('')

};
