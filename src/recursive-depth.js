const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.countMax = 0 
    this.count = 1
  }
  calculateDepth(arr){
      for(let elem of arr){
        if(Array.isArray(elem)){this.count++; this.count = this.calculateDepth( elem)}
      }
      if(this.countMax <= this.count) this.countMax = this.count
      if(this.count == 1 ){let i = this.countMax; this.countMax = 0; return i}
      return this.count-=1
  }
};