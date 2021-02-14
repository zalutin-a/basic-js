const CustomError = require("../extensions/custom-error");



function valueTurns(diskValue){
  return (2**diskValue)-1
}

function turnPerSecond(turnsPerHour){
  return turnsPerHour/3600
}
module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let allTurns = valueTurns(disksNumber)
  let times = allTurns/turnPerSecond(turnsSpeed) 
  return {turns: allTurns, seconds: Math.floor(times)}
};
