const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const KOEF = Math.LN2/HALF_LIFE_PERIOD
module.exports = function dateSample( sampleActivity ) {
      
      if(!arguments ||arguments.length === 0) return false
      if(typeof(sampleActivity) !== String) return false
      sampleActivity = parseInt(sampleActivity)
      
      if(sampleActivity>15||sampleActivity<=0)return false
 
      let num = Math.log(MODERN_ACTIVITY/sampleActivity)
      return Math.ceil(num/KOEF)
      
    
};
