let age: number = 25;
let name: string = "Daniel Hutabarat";
let isActive: boolean = true;
let notFound: null = null;
let notDefined: undefined = undefined;
let anything: any = "any value";
anything = 45;

//Type inference (Typescript akan menebak tipe data secara otomatis)
let salary = 5000; //typescript akan menganggap variable ini sebagai number
let message = "Hello World"; //typescript akan menganggap variable ini sebagai string

function logMessage(): void {
  console.log("Ini adalah fungsi void");
}

console.log("Age: ", age);
console.log("Name: ", name);
console.log("Is Activate: ", isActive);

export {};
