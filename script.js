let myLibrary = [];

const newBookFormContainer = document.querySelector('.newBookFormContainer');
const newBookForm = document.querySelector('.newBookForm');

const newBookButton = document.querySelector('#newBookButton');
const sortButton = document.querySelector('#sortButton');

const bookFormAddButton = document.querySelector('#bookFormAddButton');
const bookFormCancelButton = document.querySelector('#bookFormCancelButton');

const bookDisplayContainer = document.querySelector('.content');

let maxTitleCharacters = 0;

newBookButton.addEventListener('click',showNewBookForm);
bookFormCancelButton.addEventListener('click',hideNewBookForm);
bookFormAddButton.addEventListener('click',addBookFromForm);

testBook = new Book('Ender\'s Game','Orson Scott Card','1985','324','4.5');
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
  deleteIconElement.addEventListener('click',function ()   { bookDisplayContainer.removeChild(bookCardElement); } );
  titleAndRemoveContainerElement.appendChild(titleElement);
  titleAndRemoveContainerElement.appendChild(deleteIconElement);


  const bookCardBottomSection = document.createElement('div');
  bookCardBottomSection.classList.add('bookCardBottomSection');

  const authorAndPagesContainerElement = document.createElement('div');
  authorAndPagesContainerElement.classList.add('author-and-pages');
  const authorElement = document.createElement('div');
  authorElement.classList.add('author');
  authorElement.textContent = 'by ' + book.author;
  const pagesElement = document.createElement('div');
  pagesElement.classList.add('pages');
  pagesElement.textContent = book.pages + ' pages';
  authorAndPagesContainerElement.appendChild(authorElement);
  authorAndPagesContainerElement.appendChild(pagesElement);

  const dateAndRatingContainerElement = document.createElement('div');
  dateAndRatingContainerElement.classList.add('date-and-rating');
  const dateElement = document.createElement('div');
  dateElement.classList.add('date');
  dateElement.textContent = book.date;
  const ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');
  ratingElement.textContent = book.rating + '/5';
  dateAndRatingContainerElement.appendChild(dateElement);
  dateAndRatingContainerElement.appendChild(ratingElement);


 

  const buttonsContainerElement = document.createElement('div');
  buttonsContainerElement.classList.add('buttons');
  const readElement = document.createElement('div')
  readElement.classList.add('readText');
  readElement.textContent = 'NOT READ';
  const dummyDiv = document.createElement('div');
  const markReadIcon = document.createElement('img');
  markReadIcon.setAttribute('src','assets/read.png');
  markReadIcon.setAttribute('alt','Mark Read Icon');

  markReadIcon.addEventListener('click',function () { markRead(book) });

  const favoriteIconElement = document.createElement('img');
  favoriteIconElement.setAttribute('src','assets/favorite.png');
  favoriteIconElement.setAttribute('alt','Favorite Icon');
  const shareIconElement = document.createElement('img');
  shareIconElement.setAttribute('src','assets/share.png');
  shareIconElement.setAttribute('alt','Share Icon');
  buttonsContainerElement.appendChild(readElement);
  buttonsContainerElement.appendChild(dummyDiv);
  buttonsContainerElement.appendChild(markReadIcon);
  buttonsContainerElement.appendChild(favoriteIconElement);
  buttonsContainerElement.appendChild(shareIconElement);

  bookCardBottomSection.appendChild(authorAndPagesContainerElement);
  bookCardBottomSection.appendChild(dateAndRatingContainerElement);
  bookCardBottomSection.appendChild(buttonsContainerElement);




  bookCardElement.appendChild(titleAndRemoveContainerElement);
  bookCardElement.appendChild(bookCardBottomSection);

  bookDisplayContainer.appendChild(bookCardElement);

  updateContentColumnsize(book.title);

  book.htmlObject = bookCardElement;
  book.readText = readElement;
  book.readIcon = markReadIcon;
  myLibrary.push(book);
}



function showNewBookForm() {
  newBookFormContainer.style.display = 'block';
  window.setTimeout( startNewBookFormTransition, 10);
  newBookButton.style.display = 'none';
  sortButton.style.display = 'none';
}

function startNewBookFormTransition() {
  newBookForm.style.top = '0';
  newBookForm.style.width = '30ch';
  newBookForm.style.opacity = '100%';
}


function hideNewBookForm() {
  const titleInput = document.querySelector('#addbook-title');
  const authorInput = document.querySelector('#addbook-author');
  const pagesInput = document.querySelector('#addbook-pages');
  const dateInput = document.querySelector('#addbook-date');
  const ratingInput = document.querySelector('#addbook-rating');
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  dateInput.value = '';
  ratingInput.value = '';
  newBookForm.style.top = '-500px';
  newBookForm.style.width = '18ch';
  newBookForm.style.opacity = '0%';
  window.setTimeout( showSidebarButtons, 250);
}

function showSidebarButtons() {
  newBookFormContainer.style.display = 'none';
  newBookButton.style.display = 'grid';
  sortButton.style.display = 'grid';
}

function addBookFromForm() {
  const titleInput = document.querySelector('#addbook-title');
  const authorInput = document.querySelector('#addbook-author');
  const pagesInput = document.querySelector('#addbook-pages');
  const dateInput = document.querySelector('#addbook-date');
  const ratingInput = document.querySelector('#addbook-rating');
  const newBook = new Book(titleInput.value,authorInput.value,dateInput.value,pagesInput.value,ratingInput.value);
  addBookToLibrary(newBook);
  hideNewBookForm();
}

function updateContentColumnsize(newTitle) {
  if (false && newTitle.length > maxTitleCharacters) {
    maxTitleCharacters = Math.min(newTitle.length,25);
    const content = document.querySelector('.content');
    content.style.gridTemplateColumns = 'repeat(auto-fit,minmax(' + (maxTitleCharacters*1.8) + 'ch,' + ((maxTitleCharacters+3)*1.8) + 'ch))';
  }
}

function markRead(book) {
  book.read = true;
  book.readText.textContent = '✓ READ';
  book.readIcon.style.opacity = 0;
}