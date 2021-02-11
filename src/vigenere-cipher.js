const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg){
    if(arg === false){
        this.encrypt = function(string, key){
            if(arguments.length === 0||arguments.length === 1) throw 'THROWN'
            let encryptWord = this.encrypting(string,key)
            return encryptWord.reverse().join('')
        }
        this.decrypt = function(string, key){
            if(arguments.length === 0||arguments.length === 1) throw 'THROWN'
            let encryptWord = this.decrypting(string,key)
            return encryptWord.reverse().join('')
        }
    }
    this.arrAbc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
}


createKeyWord(str, shotKey){
    let fullKey = []
    let indx = 0
    for(let elem of str){
      if(elem.match(/[A-z]/)){
        fullKey.push(shotKey[indx])
        indx<(shotKey.length-1)?indx++ : indx = 0
        }
      else fullKey.push(elem)
    }
    return fullKey.join('')
  }


  encrypting(string,key){
    let encryptWord =[]
    let longKey = this.createKeyWord(string, key)
    let char
    let charKey
    for(let i = 0; i < string.length; i++){
      if(string[i].match(/[\[A-Z\]\[a-z\]]/)){
        char = this.arrAbc.indexOf(string[i].toUpperCase())
        charKey = this.arrAbc.indexOf(longKey[i].toUpperCase())
        encryptWord.push(this.arrAbc[(char + charKey)%26])
      }else encryptWord.push(string[i])
    }
    return encryptWord
  }
  decrypting(string, key){
    let encryptWord =[]
    let longKey = this.createKeyWord(string, key)
    let char
    let charKey
    for(let i = 0; i < string.length; i++){
      if(string[i].match(/[\[A-Z\]\[a-z\]]/)){
        char = this.arrAbc.indexOf(string[i].toUpperCase())
        charKey = this.arrAbc.indexOf(longKey[i].toUpperCase())
        encryptWord.push(this.arrAbc[(char + 26 - charKey)%26])
      }else encryptWord.push(string[i])
    }
    return encryptWord
  }


  encrypt(string, key) {
    if(arguments.length === 0||arguments.length === 1) throw 'THROWN'
    let encryptWord = this.encrypting(string,key)
    return encryptWord.join('')
  }
  decrypt(string, key) {
    if(arguments.length === 0||arguments.length === 1) throw 'THROWN'
    let encryptWord = this.decrypting(string,key)
    return encryptWord.join('')
  } 
}

module.exports = VigenereCipheringMachine;
