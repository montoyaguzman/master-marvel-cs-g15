// Variables simples
var name = "jose";
var app = "montoya";
var bookName = "harry potter y la piedra filosofal";
// Variables complejas
var student = {
    name: 'juanito lopez',
    age: 29,
    isMarried: true,
    matters: [10, 8, 4, 5, 2, 1]
}
var computer = {
    brand: 'dell',
    price: 2000,
    color: 'black'
};
let numbers = [10, 20, 30, 40];
var subjects = ['Math', 'English', 'History', 'English', 'Computer science', 'English', 'History'];
let gradesArr = [10, 9, 0, { value: 10, nota: "excelencia academica"} ];
let matriz = [
    [10, 10, 9],
    [9, 9 , 8, 100, 7, 10]
];

console.log(name);
console.log(student);
console.log(student.name);
console.log(numbers[2]);
console.log(subjects[4]);
console.log(gradesArr[3].nota);
console.log(student.matters[4]);
console.log(matriz[1][3]);



