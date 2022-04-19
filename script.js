let myLibrary = [];

const newBookFormContainer = document.querySelector('.newBookFormContainer');
const newBookForm = document.querySelector('.newBookForm');

const newBookButton = document.querySelector('#newBookButton');
const sortButton = document.querySelector('#sortButton');

const bookFormAddButton = document.querySelector('#bookFormAddButton');
const bookFormCancelButton = document.querySelector('#bookFormCancelButton');

const bookDisplayContainer = document.querySelector('.content');

newBookButton.addEventListener('click',showNewBookForm);
bookFormCancelButton.addEventListener('click',hideNewBookForm);

testBook = new Book('Ender\'s Game','Orson Scott Card','1985','324 p.','4.5/5');
addBookToLibrary(testBook);

function Book(title, author, date, pages, rating) {
  this.title = title;
  this.author = author;
  this.date = date;
  this.pages = pages;
  this.rating = rating;
}

function addBookToLibrary(book) {
  const bookCardElement = document.createElement('div');
  bookCardElement.classList.add('bookCard');

  const titleAndRemoveContainerElement = document.createElement('div');
  titleAndRemoveContainerElement.classList.add('title-and-remove');
  const titleElement = document.createElement('div');
  titleElement.classList.add('title');
  titleElement.textContent = book.title;
  const deleteIconElement = document.createElement('img');
  deleteIconElement.classList.add('remove');
  deleteIconElement.setAttribute('src','assets/remove.png');
  deleteIconElement.setAttribute('alt','Remove Icon');
  titleAndRemoveContainerElement.appendChild(titleElement);
  titleAndRemoveContainerElement.appendChild(deleteIconElement);

  const authorAndPagesContainerElement = document.createElement('div');
  authorAndPagesContainerElement.classList.add('author-and-pages');
  const authorElement = document.createElement('div');
  authorElement.classList.add('author');
  authorElement.textContent = book.author;
  const pagesElement = document.createElement('div');
  pagesElement.classList.add('pages');
  pagesElement.textContent = book.pages;
  authorAndPagesContainerElement.appendChild(authorElement);
  authorAndPagesContainerElement.appendChild(pagesElement);

  const dateAndRatingContainerElement = document.createElement('div');
  dateAndRatingContainerElement.classList.add('date-and-rating');
  const dateElement = document.createElement('div');
  dateElement.classList.add('date');
  dateElement.textContent = book.date;
  const ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');
  ratingElement.textContent = book.rating;
  dateAndRatingContainerElement.appendChild(dateElement);
  dateAndRatingContainerElement.appendChild(ratingElement);

  const buttonsContainerElement = document.createElement('div');
  buttonsContainerElement.classList.add('buttons');
  const dummyDiv = document.createElement('div');
  const favoriteIconElement = document.createElement('img');
  favoriteIconElement.setAttribute('src','assets/favorite.png');
  favoriteIconElement.setAttribute('alt','Favorite Icon');
  const shareIconElement = document.createElement('img');
  shareIconElement.setAttribute('src','assets/share.png');
  shareIconElement.setAttribute('alt','Share Icon');
  buttonsContainerElement.appendChild(dummyDiv);
  buttonsContainerElement.appendChild(favoriteIconElement);
  buttonsContainerElement.appendChild(shareIconElement);


  bookCardElement.appendChild(titleAndRemoveContainerElement);
  bookCardElement.appendChild(authorAndPagesContainerElement);
  bookCardElement.appendChild(dateAndRatingContainerElement);
  bookCardElement.appendChild(buttonsContainerElement);

  bookDisplayContainer.appendChild(bookCardElement);
}



function showNewBookForm() {
  newBookFormContainer.style.display = 'block';
  window.setTimeout( startNewBookFormTransition, 10);
  newBookButton.style.display = 'none';
  sortButton.style.display = 'none';
}

function startNewBookFormTransition() {
  newBookForm.style.top = '0';
  newBookForm.style.opacity = '100%';
}


function hideNewBookForm() {
  newBookForm.style.top = '-500px';
  newBookForm.style.opacity = '0%';
  window.setTimeout( showSidebarButtons, 500);
}

function showSidebarButtons() {
  newBookFormContainer.style.display = 'none';
  newBookButton.style.display = 'grid';
  sortButton.style.display = 'grid';
}