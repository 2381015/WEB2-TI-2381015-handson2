//Object type annotation
let user: { name: string; age: number; email: string } = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

//interface untuk object
interface Employee {
  id: number;
  name: string;
  department: string;
  readonly salary: number; //readonly property
  contact?: string;
}

//implementasi interface
let employee: Employee = {
  id: 1,
  name: "Jane Doe",
  department: "IT",
  salary: 50,
  contact: "johndoe@example.com",
};

//nested objects
interface Company {
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  employees: Employee[];
}

let company: Company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "Tech City",
    country: "Techlan",
  },
  employees: [employee],
};

console.log("User : ", user);
console.log("Employee : ", employee);
console.log("Company : ", company);

export {};
