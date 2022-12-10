//1 способ
// export class Exam {
//   //статическое поле
//   static kind = "Человек";

//   //конструктор
//   constructor(surname, name, BD, JS, PHP) {
//     this.surname = surname;
//     this.name = name;
//     this.BD = BD;
//     this.JS = JS;
//     this.PHP = PHP;
//   }
//   get gpa() {
//     return (this.BD + this.JS + this.PHP) / 3;
//   }
//   get good() {
//     return this.BD > 3 && this.JS > 3 && this.PHP > 3;
//   }
//   get debtor() {
//     return this.BD == 2 || this.JS == 2 || this.PHP == 2;
//   }
//   toString() {
//     return `${this.surname} ${this.name} ${this.BD} ${this.JS} ${this.PHP}`;
//   }
// };

//2 способ
export function Exam(surname, name, BD, JS, PHP) {
  this.surname = surname;
  this.name = name;
  this.BD = BD;
  this.JS = JS;
  this.PHP = PHP;
}
//метод
const methodsExam = {
  toString() {
    return `${this.surname} ${this.name} ${this.BD} ${this.JS} ${this.PHP}`;
  },
};
Object.assign(Exam.prototype, methodsExam);

//getter
Object.defineProperties(Exam.prototype, {
  gpa: {
    get() {
      return (this.BD + this.JS + this.PHP) / 3;
    },
  },
  good: {
    get() {
      return this.BD > 3 && this.JS > 3 && this.PHP > 3;
    },
  },
  debtor: {
    get() {
      return this.BD == 2 || this.JS == 2 || this.PHP == 2;
    },
  },
});
