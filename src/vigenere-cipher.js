class VigenereCipheringMachine {
    
    

     encrypt(a , b) {
        if(a === undefined || b=== undefined) throw 'Not implemented';
        let value = 65;
        let arr = [];
        for(let i = 0; i<26; i++){
            arr[i] = new Array(26);
            for(let j = 0; j<26; j++){
                if((value+i+j)>90){arr[i][j]=(value+i+j-26);}
            if((value+i+j)<=90){arr[i][j]=(value+i+j);}
            }
        }
        a=a.toUpperCase();
        b=b.toUpperCase();
        let word = a.split('');
        let keyWord = b.split('');
        let result = '';
        let indexKey = 0;
        for(let i=0; i<word.length; i++){
        if(word[i].charCodeAt(0)>64 && word[i].charCodeAt(0)<91){if(i%keyWord.length==0)indexKey=i;
            result += String.fromCharCode(arr[(word[i].charCodeAt(0)-65)][(keyWord[i-indexKey].charCodeAt(0)-65)]);}
        else { result+=word[i];word.splice(i,1);i--; }
        }
        if (this.reverse === false) result = result.split('').reverse().join('');
         return result;
    
            // remove line with error and write your code here
        }
    
     decrypt(a, b) {
        if(a === undefined || b=== undefined) throw 'Not implemented';
        let value = 65;
        let arr = [];
        for(let i = 0; i<26; i++){
            arr[i] = new Array(26);
            for(let j = 0; j<26; j++){
                if((value+i+j)>90){arr[i][j]=(value+i+j-26);}
            if((value+i+j)<=90){arr[i][j]=(value+i+j);}
            }
        }
        a=a.toUpperCase();
        b=b.toUpperCase();
        let word = a.split('');
        let keyWord = b.split('');
        let result = '';
        let indexKey = 0;
        for(let i=0; i<word.length; i++){
             if(word[i].charCodeAt(0)>64 && word[i].charCodeAt(0)<91){
                if(i%keyWord.length==0)indexKey=i;
                let str = (word[i].charCodeAt(0)-65);
                let key = (keyWord[i-indexKey].charCodeAt(0)-65);
                for(let i=0; i<26; i++){
                if(arr[key][i]==(str+65))result+=String.fromCharCode(i+65);
                }
            }
            else{result+=word[i];word.splice(i,1);i--;}
        }   
         if (this.reverse === false) result = result.split('').reverse().join('');
         return result;
    }

    constructor(reverse) {
        this.reverse = reverse;
          }
}

module.exports = VigenereCipheringMachine;
