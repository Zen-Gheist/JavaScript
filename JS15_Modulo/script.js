einer = (zahl) => {
   return zahl % 10;
}

console.log(einer(2674));

mittelwert = (x, y) => {
   return (x + y) / 2;
}

console.log(mittelwert(1, 2));

hypothenuse = (kat1, kat2) => {
   let hypo = Math.sqrt(Math.pow(kat1, 2)+Math.pow(kat2, 2));
   return hypo;
}

console.log(hypothenuse(3,4));