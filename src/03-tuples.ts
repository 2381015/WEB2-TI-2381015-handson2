//deklarasi tuples
let person: [string, number, boolean] = ["Daniel", 30, true];

//tuple untuk koordinat
let coordinate: [number, number] = [10.5, 20.1];

//tuple dengan optional element
let optionalTuple: [string, number?] = ["Hello"];
optionalTuple = ["Hello", 45];

//destructing tuple

let [name, age, isEmployed] = person;
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Employed: ", isEmployed);

//tuple dalam array
let employees: [string, number][] = [
  ["John", 30],
  ["Jane", 25],
  ["Bob", 35],
];

employees.forEach(([name, age]) => {
  console.log(`${name} is ${age} years old`);
});

export {};
