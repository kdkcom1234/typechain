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

// const person = new Human("Daekeun", 38, "male");

// 인터페이스는 js로 컴파일 후에 별도의 코드를 생성하지 않음
// 코딩 중에 타입을 체크하는 용도로 사용됨
interface Human {
  name: string;
  gender: string;
  age: number;
}

const person = {
  name: "Daekeun",
  gender: "male",
  age: 38,
};

const sayHi = (person: Human) => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
