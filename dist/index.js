"use strict";
// class Human {
//   public name: string;
//   public age: number;
//   public gender: string;
//   constructor(name: string, age: number, gender: string) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Daekeun",
    gender: "male",
    age: 38,
};
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map