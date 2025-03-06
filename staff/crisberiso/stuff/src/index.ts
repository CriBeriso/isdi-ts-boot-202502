const age: number = 34;
const name1: string = "Pep";

let surname = "Guardiola";

const numbers: Array<number> = [2, 4, 6, 8]; //en este caso ts infiere que es un array de numeros. 

function sumNumbers(numbers: number[]) {
  return numbers.reduce((total, number) => {
    total += number;

    return total;
  }, 0); //valor inicial
}

//en este caso el callback no necesita de tipado de parametros, porque estamos aplicando el metodo reduce sobre un array de numbers y ya infiere que los parametros seran de tipo numerico. 

const numbersSum = sumNumbers(numbers);

console.log(numbersSum);

// interface Person {
//   name: string;
//   age: number;
// }

// interface Student extends Person{
//   score: number;
// }

// interface Studen {
//   califications: string;
// }

type Person = {
  name: string;
  age: number;
};

type Student = Person & {
  score: number | string; //union type
};

const students: Student[] = [
  {
    name: "Pep",
    age: 25,
    score: 90,
  },
  {
    name: "Josep",
    age: 34,
    score: 75,
  },
  {
    name: "Anna",
    age: 25,
    score: 95,
  },
];

function triplify(value: number | string) {
  if(typeof value === "number"){
    return value * 3;
  }

  return value.repeat(3)
};

const stuff: (number | boolean)[] = [34, false]; //otro uso de union type

type PaymentMethod = "cash" | "paypal" | "card";

function getPayment(payment: PaymentMethod): void {
  switch(payment) {
    case "card":
      console.log("Payment done with card");
      break;
    case "cash":
      console.log("Really, cash?");
      break;
    case "paypal":
      console.log("Paypal...");
      break;
    default:
      console.log("Insert a correc payment method")
      break;
  }
}

