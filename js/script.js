import { Exam } from "./Exam.js";

//задание 1
// let newCar = new Car("BMV","2020","1500000");

//2 задание
//создание массива с обЪектами
let people = [
  new Exam("Иван", "Иванов", "5", "4", "3"),
  new Exam("Петр", "Петров", "5", "5", "5"),
  new Exam("Андрей", "Сидоров", "4", "4", "5"),
  new Exam("Ян", "Титов", "2", "4", "3"),
];
console.log(people);

//сортировка массива
people.sort((a, b) => b.gpa - a.gpa);
people.forEach((item) => console.log(`${item}`));

//хорошисты
console.log("Хорошисты:");
let goodPeople = people.filter((item) => item.good);
goodPeople.forEach((item) => console.log(`${item.toString()}`));

//нашёл двоишников, положил их в массив и посчитал их количество
let debtor = people.filter((item) => item.debtor);
let countDebtor = debtor.length;
let countPeople = people.length;

//определение абсолютной успеваемости
let aap = ((countPeople - countDebtor) * 100) / countPeople;
console.log(`Абсолютная успеваемость: ${aap}%`);

//определение качественной успеваемости
let countGood = goodPeople.length;
let qap = ((countPeople - countGood) * 100) / countPeople;
console.log(`Качественная успеваемость: ${qap}%`);

//средний бал по всем сдающим экзамен
let allGpa = 0;
people.forEach((item) => {
  allGpa += item.gpa;
});
let res = allGpa / countPeople;
console.log(`Средний балл всех сдающих экзамен: ${res.toFixed(2)}`);
