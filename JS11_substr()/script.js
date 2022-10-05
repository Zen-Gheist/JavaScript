firstWord = (sentence) => {
   let first = sentence.indexOf(' ');
   let word = sentence.substr(0, first);
   return word;
}

let input = 'Warum sind denn hier Sie?';
console.log(firstWord(input));