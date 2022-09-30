let input1 = 'Ida-Ida';
let input2 = 'Ida'

secondIndex = (string1, string2) => {
   let second = string1.indexOf(string2);
   return (string1.indexOf(string2, second+1));
}

console.log(secondIndex(input1, input2));
