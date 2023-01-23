//task 1

// function createCalendar(elem, year, month) {
//     let mon = month - 1;
//     let date = new Date(year, mon, 1);
//     let calendar = '';
//     let weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//     let calendarCap = `
//       <tr> 
//         ${weekDays
//         .map(item => `<th> ${item} </th>`)
//         .join('')} 
//       </tr>`;
//     let calendarBody = '<tr>';
//     let spaces = date.getDay() === 0 ? 7 : date.getDay();
//     console.log(date.getDay());

//     while (spaces > 1) {
//       let space = '<td></td>';
//       calendarBody += space;
//       spaces--;
//     }

//     for (let i = 1; mon === date.getMonth(); date.setDate(++i)) {

//       if (date.getDay() === 1) calendarBody += '<tr>';

//       calendarBody += `<td> ${i} </td>`;

//       if (date.getDay() === 0) calendarBody += '</tr>';
//     }

//     calendar =`<table> ${calendar + calendarCap + calendarBody} </table>`;
//     elem.innerHTML = calendar;
//   }

//   let elem = document.body;

//   createCalendar(elem, 2012, 9);


//task 2 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// function showNotification(options) {
//     let body = document.body;
//     let div = document.createElement("div");

//     div.classList.add('notification')

//     for (const option of Object.entries(options)) {
//         if (typeof option[1] === "number") {
//             div.style[`${option[0]}`] = `${option[1]}px`;
//         } else if (option[0] === "html") {
//             div.textContent = option[1];
//         } else if (option[0] === "className") {
//             div.classList.add(option[1]);
//         } else {
//             div.style[`${option[0]}`] = option[1];
//         }
//     }

//     body.append(div);

//     setTimeout(() => div.remove(), 1500);
// }

// setInterval(() => {
//     showNotification({
//         top: 10,
//         right: 10,
//         html: "Hello!",
//         className: "welcome",
//         backgroundColor: "red",
//         color: "yellow",
//         padding: 10,
//         position: "absolute",
//         fontSize: 18,
//     });
// }, 2000);


//task 3 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// document.onclick = function(e) { // показує координати точки кліка
//     coords.innerHTML = e.clientX + ':' + e.clientY;
// };

// let elem = field.getBoundingClientRect();
// let taskOne = [elem.left, elem.top];
// let taskTwo = [elem.right, elem.bottom];
// let taskThree = [elem.left + field.clientLeft, elem.top + field.clientTop];
// let taskFour = [
//     elem.right - parseInt(getComputedStyle(field).borderRightWidth),
//     elem.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
// ];

// console.log(taskOne + '\n' + taskTwo + '\n' + taskThree + '\n' + taskFour);


//task 4 - task 6 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// function positionAt(anchor, position, elem) {

//     elem.style.position = 'absolute';

//     let coordinates = anchor.getBoundingClientRect();

//     switch (position) {

//         case "top-out":

//             elem.style.top = `${coordinates.top - elem.offsetHeight}px`;
//             elem.style.left = `${coordinates.left}px`;

//             break;

//         case "right-out":

//             elem.style.top = `${coordinates.top}px`;
//             elem.style.left = `${coordinates.right}px`;

//             break;

//         case "bottom-out":

//             elem.style.top = `${coordinates.top + anchor.offsetHeight}px`
//             elem.style.left = `${coordinates.left}px`;

//             break;

//         case "top-in":

//             elem.style.top = `${coordinates.top}px`;
//             elem.style.left = `${coordinates.left}px`;

//             break;

//         case "right-in":

//             elem.style.top = `${coordinates.top}px`;
//             elem.style.left = `${coordinates.right - elem.offsetWidth}px`;

//             break;

//         case "bottom-in":

//             elem.style.top = `${coordinates.top + anchor.offsetHeight - elem.offsetHeight}px`
//             elem.style.left = `${coordinates.left}px`;

//             break;
//     }
// }

// /**
//  * Показує нотатку із заданим вмістом на заданій позиції
//  * Щодо елемента anchor. */
// function showNote(anchor, position, html) {
//     let note = document.createElement('div');
//     note.className = "note";
//     note.innerHTML = html;
//     document.body.append(note);

//     positionAt(anchor, position, note);
// }

// // test it
// let blockquote = document.querySelector('blockquote');

// showNote(blockquote, "top-out", "note above");
// showNote(blockquote, "right-out", "note at the right");
// showNote(blockquote, "bottom-out", "note below");

// ------- end task 4 - task 6

//task 7

// В даному випадку ремув не спрацює, бо ми передаємо новую функцію, а не ту ж саму що в першому, тому спрацює перший та отримаємо 1 та 2.


//task 8 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// let field = document.getElementById('field');
// let ball = document.getElementById('ball');

// field.addEventListener('click', (event) => {

//     let h = field.clientHeight;
//     let hN = field.offsetTop + field.clientTop;
//     let w = field.clientWidth;
//     let wN = field.offsetLeft + field.clientLeft;

//     let y = event.pageY - hN - ball.offsetHeight / 2;
//     let x = event.pageX - wN - ball.offsetWidth / 2;

//     if (y < 0) y = 0;
//     if (x < 0) x = 0;
//     if (y > h - ball.offsetHeight) y = h - ball.offsetHeight;
//     if (x > w - ball.offsetWidth) x = w - ball.offsetWidth;

//     ball.style.top = y + 'px';
//     ball.style.left = x + 'px';

// });


// task 9 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// let spanBigArrow = document.getElementById('button');

// function onClickHandler(event) {
//     let ulVisible = false;

//     return function() {
//         ulVisible = !ulVisible;
//         if (ulVisible) {
//             document.querySelector('ul').style.display = 'block';
//             document.getElementById('button').textContent = '▼ Солодощі (натисни мене)!';
//         } else {
//             document.querySelector('ul').style.display = '';
//             document.getElementById('button').textContent = '▶ Солодощі (натисни мене)!';
//         }
//     }
// }

// spanBigArrow.addEventListener('click', onClickHandler());


//task 10 в index.html демонстрація роботи коду, треба розкоментити і тут і там.

// Array.from(document.querySelectorAll(".pane")).forEach(
//     (elem) => (
//         elem.insertAdjacentHTML(
//             "afterbegin",
//             '<button class="remove-button">[x]</button>'
//         ),
//         elem.firstChild.addEventListener("click", () => elem.remove())
//     )
// );


//task 11

// console.log(
//     `value: ${genres.value}, text: ${genres.options[genres.selectedIndex].text}`
// );

// genres.insertAdjacentHTML(
//     "beforeend",
//     `<option value="classic">Класика</option>`
// );
// genres.value = "classic";