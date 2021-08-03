let form = document.getElementById('book-form');

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addToList = function (book) {
  const bookList = document.querySelector('#book-list');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${book.title}<td>
    <td>${book.author}<td>
    <td>${book.isbn}<td>
    <button class="btn removeLine">Remove</button>
  `;
  bookList.appendChild(tr);

  tr.addEventListener('click', function (e) {
    if (e.target.parentElement.parentElement) {
      tr.remove();
    }
  });
};

UI.prototype.emptyAlarm = function () {
  let div = document.createElement('div');
  let heading = document.querySelector('h1');
  div.className = 'card-panel teal lighten-2';
  div.textContent = 'Please Fill Out';
  heading.parentElement.insertBefore(div, heading);

  setTimeout(function () {
    document.querySelector('.card-panel').remove();
  }, 3000);
};

UI.prototype.clearInput = function () {
  form.reset();
};

// UI.prototype.deleteRow = function () {
//   console.log('Click');
// };

form.addEventListener('submit', function (e) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  let book = new Book(title, author, isbn);
  let ui = new UI(book);

  ui.addToList(book);
  if (title === '' || author === '' || isbn === '') {
    ui.emptyAlarm(book);
  }

  ui.clearInput(book);

  e.preventDefault();
});

// UI.addEventListener('click', function (e) {
//   const title = document.querySelector('#title').value;
//   const author = document.querySelector('#author').value;
//   const isbn = document.querySelector('#isbn').value;

//   let book = new Book(title, author, isbn);
//   let ui = new UI(book);

//   ui.deleteRow(book);

//   e.preventDefault();
// });
