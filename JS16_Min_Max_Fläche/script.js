bereichsmittel = (x, y, z) => {
   return (Math.min(x, y, z)+Math.max(x, y, z)) / 2;
}

console.log(bereichsmittel(5, 9 , 1));

let r = bereichsmittel(5, 9 ,1);
flaeche = (r) => {
   return (Math.PI * (Math.pow(r, 2))) + 'cm²';
}

console.log(flaeche(r));
