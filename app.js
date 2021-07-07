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
  `;
  bookList.appendChild(tr);
};

form.addEventListener('submit', function (e) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  let book = new Book(title, author, isbn);
  let ui = new UI(book);

  ui.addToList(book);

  console.log(title, author, isbn);
  e.preventDefault();
});
