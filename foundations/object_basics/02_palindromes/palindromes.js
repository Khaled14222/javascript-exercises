const palindromes = function (str) {
  let char = str.split('');
  let RevChar = char.slice().reverse();

  if(RevChar === char){
    return true;
  } else {
    return false;
  }

  /*
  First split the word
  Then reversed it 
  Then check it if its the same return a true if not return a false
  */ 
};

// Do not edit below this line
module.exports = palindromes;
