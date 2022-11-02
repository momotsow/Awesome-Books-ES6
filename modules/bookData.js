import { bookTitle, bookAuthor, bookList } from './declaration.js';

export let StoredBooks = JSON.parse(localStorage.getItem('book')) || []; // eslint-disable-line

// clear inputs
export const clearData = () => {
  bookTitle.value = '';
  bookAuthor.value = '';
};

// display books
export const displayBook = () => {
  bookList.innerHTML = '';
  for (let i = 0; i < StoredBooks.length; i += 1) {
    bookList.innerHTML
          += `
          <div id="bookSection">
          <p class="padding"> ${StoredBooks[i].title}</p>
          <p class="padding">by  ${StoredBooks[i].author}</p>
          <button class="deleteBtn" id="${StoredBooks[i].id}">
          remove</button>
          </div>
        `;
  }

  document.querySelectorAll('.deleteBtn')
    .forEach((btn) => {
      btn.addEventListener('click', () => {
        deleteData(btn.id); // eslint-disable-line
      });
    });
};

// delete function
const deleteData = (id) => {
  StoredBooks = StoredBooks.filter((books) => books.id !== +id);
  localStorage.book = JSON.stringify(StoredBooks);
  displayBook();
};