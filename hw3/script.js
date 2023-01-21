//task 1 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// console.log(document.body.firstElementChild);

// console.log(document.body.lastElementChild);

// console.log(document.body.lastElementChild.lastElementChild);


//task 2

//1. Так, бо елемент завжди останній у нього немає лінку.
//2. Ні, бо елем чілдрен нуль буде нащадком, але перед ним можуть бути інші вузли.


//task 3 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// let table = document.body.firstElementChild.firstElementChild;
// diagonal(table);

// function diagonal(table) {
//     function colorize(elem, color) {
//         elem.style.background = color;
//     }

//     for (let i = 0; i < table.children.length; i++) {
//         colorize(table.children[i].children[i], "red")
//     }
// }


//task 4 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// console.log(document.getElementById('age-table'));

// console.log(document.getElementById('age-table').getElementsByTagName('label'));

// console.log(document.getElementById('age-table').getElementsByTagName('td')[0]);

// console.log(document.querySelector('form[name="search"]'));

// console.log(document.querySelector('form[name="search"]').getElementsByTagName('input')[0]);

// console.log(document.querySelector('form[name="search"]').querySelectorAll('input')[document.querySelector('form[name="search"]').querySelectorAll('input').length - 1]);


//task 5 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

//текст

// for (let li of document.querySelectorAll('li')) {
//     console.log(li.firstChild.data);
// }
//Кількість

// for (let li of document.querySelectorAll('li')) {
//     console.log(li.getElementsByTagName('li').length);
// }


//task 6

// Виведе 1 бо коли браузер буде опрацьовувати код, він ще не опрацює іншу частину нашої сторінки, тому результатом буде 1 вузол.


//task 7

// Виведе BODY бо першою властивістю буде тегнейм котрий завжди виводиться великими буквами.


//task 8

// 1. HTMLDocument
// 2. Кореневе місце мабуть, не зовсім зрозумів що від мене хочуть
// 3. Так


//task 9 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// let clear = (elem) => { elem.innerHTML = '' };
// clear(elem);

//task 10

// Тому що взагалі тег тейбл може містити тіки табличні теги, а текст у нас відображається тому що браузер дуже багато нам "пробачає" тобто виправляє помилку.


//task 11

// function createList() {
//     document.body.append(document.createElement('ul'));
//     let list = document.querySelector('ul');

//     while (true) {
//         let text = prompt('Enter text');
//         if (!text) break;
//         let li = document.createElement('li');
//         li.textContent = text;
//         list.append(li);
//     }
// }
// createList();


//task 12 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// document.getElementById('one').insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');