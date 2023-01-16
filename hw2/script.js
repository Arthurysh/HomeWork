//task 1

function camelize(str) {
    str = str.split('-');
    if (str[0] == "") { str.shift(); }
    return str.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
};

console.log(camelize("list-style-image"));


//task2

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    return arr.filter((item) => item >= a && item <= b);
};

let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);


//task 3

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
};

filterRangeInPlace(arr, 1, 4);
console.log(arr);


//task 4

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);


//task 5

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return arr.slice().sort();
};

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);


//task 6

let calc = new Calculator;

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

function Calculator() {
    this.calculate = function(str) {
        let arr = str.split(" "),
            firstNumber = Number(arr[0]),
            operation = arr[1],
            secondNumber = Number(arr[2])

        return this.method[operation](firstNumber, secondNumber);
    };
    this.method = {
        "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
        "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    };

    this.addMethod = function(name, func) {
        return this.method[name] = func;
    };

}

console.log(calc.calculate("2 * 23"));


//task 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names);


//task 8

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петро", age: 30 };
let masha = { name: "Маша", age: 28 };

let array = [vasya, petya, masha];

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age);

};

sortByAge(array);

console.log(array[0].name);
console.log(array[1].name);
console.log(array[2].name);


//task 9

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let array = [vasya, petya, masha];

function getAverageAge(array) {
    return array.reduce((sum, current) => sum + current.age, 0) / array.length;
}

console.log(getAverageAge(array));


//task 10

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", " кришна ", ":-O"
];

function unique(arr) {
    let arrCopy = arr.slice();

    for (let i = 0; i < arrCopy.length - 1; i++) {
        for (let j = 1; j < arrCopy.length; j++) {
            if (arrCopy[i] == arrCopy[j]) {
                arrCopy.splice(j, 1)
                continue;
            }
        }
    }
    return arrCopy;
}

console.log(unique(strings));


//task 11

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(values));


//task 12

// Вони незалежні, бо викликаємо її у різних змінних. Другий лічильнік покаже теж саме 0 1.


//task 13

// Так буде працювати, бо всередині функції Counter в нас є змінна count і вона одна і для up і для down. Отримаємо 1 2 1.


//task 14

function factorial(n) {
    return (n <= 1) ? n : n * factorial(n - 1);
}

console.log(factorial(5));