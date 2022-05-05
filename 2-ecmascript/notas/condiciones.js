const arr = [10, 20, 30, '20', 40, 50, 60, '90'];

arr.map((element) => {
   if( (element > 50 || element % 2 === 0) && (typeof element !== 'string')) {
     console.log(element)
   }
});