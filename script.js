//task 1

let objTest = {};

function isEmpty(obj) {

    if (Object.keys(obj).length) {

        return console.log(false);

    }
    return console.log(true);

}

isEmpty(objTest);


//task 2

// let objTest = {
//     fontFamily: "Montserrat",
//     fontWeight: 200,
//     fontSize: 28.5,
//     color: "red"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (obj[key] === +obj[key]) obj[key] *= 2;
//     };
//     console.log(objTest);
// };

// multiplyNumeric(objTest);


//task 3

// function readNumber() {

//     let num;

//     do {

//         num = prompt('Enter number', '');

//         if (num === '' || num === null) return null;

//     } while (!isFinite(num));

//     return num;
// }

// alert(readNumber());


//task 4

// function random(min, max) {
//     let num;
//     do {
//         num = Math.random();
//         while (num < max) {
//             if (min <= num && num < max) break;
//             num *= 10;
//         }
//     } while (!(min <= num && num < max));
//     return num;
// }

// console.log(random(1, 4));


//task 5

// function randomInteger(min, max) {
//     let random = min + Math.random() * (max + 1 - min);
//     return console.log(Math.floor(random));
// };
// randomInteger(1, 4);


//task 6

// let firstName = "artur";

// console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1));


//task 7

// let testStr = "ViAgRA";

// function checkSpam(str) {

//     newStr = str.toLowerCase();
//     return console.log(newStr.includes("viagra") || newStr.includes("xxx"));

// };

// checkSpam(testStr);


//task 8

// let testStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// let maxLetter = 20;

// function truncate(str, max) {
//     if (str.length > max) {
//         return (str = str.slice(0, max - 1) + "…");
//     }
//     return str;
// };

// console.log(truncate(testStr, maxLetter));


//task 9

// let price = "₴300";

// extractCurrencyValue = (str) => +str.slice(1);

// console.log(extractCurrencyValue(price));


//task 10

// function sumInput() {

//     let arr = [];
//     let num = 0;

//     while (isFinite(num) && num !== '' && num !== null) {

//         num = prompt('Enter number', 0);

//         if (isFinite(num) && num !== '' && num !== null) { arr.push(+num); }

//     }

//     let sum = 0;

//     for (num of arr) {
//         sum = sum + (+num);
//     }

//     alert(sum);

// }

// sumInput();


//task 11

//Ні, різниці немає, бо інтерпретатор піде далі, а якщо умова if спрацює, то return зупинить виконання далі, оскільки поверне значення.


//task 12

// спосіб з оператором ||

// function checkAge(age) {
//     return (age > 18) || confirm('Батьки дозволили ?');
// }
// checkAge(15);

// спосіб з оператором ?

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Батьки дозволили ?');
// }
// checkAge(19);