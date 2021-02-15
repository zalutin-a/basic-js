const CustomError = require("../extensions/custom-error");


function makeObjOptions(standartOptions, existOptions){
    if(!existOptions.hasOwnProperty('addition')) standartOptions.additionSeparator = ''
    if(existOptions.repeatTimes <= 1) standartOptions.separator = ''
    
    for(let prop in standartOptions){
    if(existOptions.hasOwnProperty(prop)) standartOptions[prop] = existOptions[prop]
    }

    if(typeof(standartOptions.repeatTimes)!=='number') standartOptions.repeatTimes = 1
    if(typeof(standartOptions.additionRepeatTimes)!=='number') standartOptions.additionRepeatTimes = 1
    if(standartOptions.additionRepeatTimes <= 1)  standartOptions.additionSeparator = ''
    return standartOptions
}


function makeStringWithOptions(str, standartOptions){
    let additionString = standartOptions.addition + standartOptions.additionSeparator
    additionString = additionString.repeat(standartOptions.additionRepeatTimes)
    //delete last additionSeparator
    additionString = additionString.slice(0, standartOptions.additionSeparator.length != 0 ? -standartOptions.additionSeparator.length : additionString.length )
    let stringForRepeat = str + additionString + standartOptions.separator 
    let fullString = stringForRepeat.repeat(standartOptions.repeatTimes)
    //delete last Separator
    fullString = fullString.slice(0, standartOptions.separator.length != 0 ? -standartOptions.separator.length : fullString.length)
    return fullString
}


module.exports = function repeater(str, options) {
    str = String(str)
    let standartOptions = {
        repeatTimes: 1, 
        separator: '+', 
        addition: '', 
        additionRepeatTimes: 1, 
        additionSeparator: '|'
    }
    let calculateOptions = makeObjOptions(standartOptions, options)
    return makeStringWithOptions(str, calculateOptions)
    }
  