const CustomError = require("../extensions/custom-error");

function crypt(str, key, op) {
  let result = '';
    let numbersKeys = 0;
    str = str.toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      let code = str[i].codePointAt(0);
      let newCode = 0;
      if (code > 96 && code < 123) {
        let keyCode = key[numbersKeys].codePointAt(0) - 97;
        if (op === "+") {
          newCode = code + keyCode;
        } else {
          newCode = code - keyCode;
        }
        if (newCode > 122) {
          newCode -= 26;
        } else if (newCode < 97) {
          newCode += 26;
        }
        result += String.fromCodePoint(newCode);
        numbersKeys++;
        if (numbersKeys === key.length) {
          numbersKeys -= key.length;
        }
      } else {
        result += str[i];
      }
    }
    return result.toUpperCase();
}

class VigenereCipheringMachine {
  encrypt(str, key) {
    let result = crypt(str, key, "+", this.reverse);
    return result;
  }    
  decrypt(str, key) {
    let result = crypt(str, key, "-", this.reverse);
    return result;
  }
}

module.exports = VigenereCipheringMachine;
