
let input2 = 'JS';
let input1 = 'js';

indexOfIgnoreCase = (text1 , text2) => {
   return text1.toLowerCase().indexOf(text2.toLowerCase());
}
console.log(indexOfIgnoreCase(input1, input2));
