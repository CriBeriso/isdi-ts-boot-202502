// interface IEmployee { //las interfaces no pueden tener nada privado.
//   id: string;
//   name: string;

//   promotion(newSalary: number): void;
// }

// abstract class Employee implements IEmployee {
//   protected _salary: number;

//   constructor(public id: string, public name: string, salary: number) {
//     this._salary = salary;
//   }

//   protected updateSalary(newSalary: number): void {
//     if (typeof newSalary !== "number") {
//       throw new Error("new salary is not a number");
//     }

//     if (newSalary < this._salary) {
//       throw new Error("the new salary must be greater than the actual");
//     }

//     this._salary = newSalary;
//   }

//   promotion(newSalary: number): void {
//     this.updateSalary(newSalary);
//   }
  
//   get salary(): number {
//     return this._salary
//   }
// }

// class JuniorEmployee extends Employee {
//   constructor(id: string, name: string, salary: number) {
//     super(id, name, salary);
//   }

//   updateSalary(newSalary: number): void {
//     super.updateSalary(newSalary); //de esta forma podemos hacer que herede de Employee y añadir alguna cosa.
//   }
  
// }

// const rafa = new JuniorEmployee('123', 'Rafa', 1700);

// console.log(rafa.salary);

// rafa.promotion(1500);

// console.log(rafa.salary);

interface IEmployee { //las interfaces no pueden tener nada privado.
  name: string;

  promotion(newSalary: number): void;
}

abstract class Employee implements IEmployee {
  protected _id: string
  protected _salary: number;

  constructor(public name: string, salary: number) {
    this._salary = salary;

    this._id = (Math.random() + 1 ** 15).toString(36);
  }
  
  protected updateSalary(newSalary: number): void {
    if (typeof newSalary !== "number") {
      throw new Error("new salary is not a number");
    }

    if (newSalary < this._salary) {
      throw new Error("the new salary must be greater than the actual");
    }

    this._salary = newSalary;
  }

  promotion(newSalary: number): void {
    this.updateSalary(newSalary);
  }

  get id(): string {
    return this._id
  }
  
  get salary(): number {
    return this._salary
  }
}

class JuniorEmployee extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }
}

const rafa = new JuniorEmployee('Rafa', 1700);

console.log(rafa.salary);

console.log(rafa.id)