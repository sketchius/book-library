let myLibrary = [];

const newBookFormContainer = document.querySelector('.newBookFormContainer');
const newBookForm = document.querySelector('.newBookForm');

const newBookButton = document.querySelector('#newBookButton');
const sortButton = document.querySelector('#sortButton');

const bookFormAddButton = document.querySelector('#bookFormAddButton');
const bookFormCancelButton = document.querySelector('#bookFormCancelButton');

newBookButton.addEventListener('click',showNewBookForm);
bookFormCancelButton.addEventListener('click',hideNewBookForm);



function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
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