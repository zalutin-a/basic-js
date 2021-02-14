const CustomError = require("../extensions/custom-error");

const chainMaker = {
  resultArr: [],
  
  getLength() {
      return this.resultArr.length
  },
  addLink(value) {
      if(arguments.length == 0) value = ''
      this.resultArr.push('~~( ' + value + ' )')
      return this
  },
  removeLink(position) {
      if(typeof(position) !== 'number') {this.resultArr = []; throw 'THR'}
      if(position >= this.resultArr.length && position <=0 ) {this.resultArr = []; throw 'THR'}
      this.resultArr.splice(position-1, 1)
      return this
  },
  reverseChain() {
      this.resultArr.reverse()
      return this
  },
  finishChain() {
    let returnArr = ''
    if(this.resultArr.length !== 0){
    this.resultArr[0] = this.resultArr[0].substring(2)
    returnArr  = this.resultArr.join('')
    this.resultArr = []}
    return returnArr
  }
};
module.exports = chainMaker;
