convert = (today) => {
   while((today.indexOf('/') || today.indexOf('-')) != -1) {
      today = today.replace('-','.');
      today = today.replace('/', '.');
   }
   return today;
}
console.log(convert('27-03-2022'));