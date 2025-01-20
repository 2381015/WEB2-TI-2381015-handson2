/*
Typescript arrays

arrays di typescript bisa didelkarasikan dengan dua cara:
1. menggunakan tipe[] syntax
2. menggunakan Array<tipe> syntax (generic)
*/

//cara 1: tipe[]
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Daniel", "Chandra", "Putra", "Hutabarat"];

//cara 2: Array[]
let scores: Array<number> = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["Apel", "Mangga", "Pisang"];

//array dengan multiple types (union type)
let mixed: (string | number)[] = [1, "two", 3, "four"];

//Array methods
numbers.push(6); //menambah element
names.pop(); //menghapus element terakhir

//Iterasi array
numbers.forEach((num) => {
  console.log("Number: ", num);
});

//Array mapping
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers: ", doubledNumbers);

export {};
