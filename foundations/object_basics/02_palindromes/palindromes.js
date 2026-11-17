const palindromes = function (str) {
  let char = str.split('');
  let RevChar = char.slice().reverse();

    for(let i = 0; i < char.length; i++){
      let Org = char[i];
        if(char[i] !== RevChar[i]){
          return false;
        }
    }

    
  return true;
  /*
  First split the word
  Then reversed it 
  Then check it if its the same return a true if not return a false
  */ 
};

// Do not edit below this line
module.exports = palindromes;
