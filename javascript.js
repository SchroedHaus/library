const myLibrary = [];

// Create the new Book object
class Book {
  constructor(newBookTitle, newBookAuthor, newBookRead) {
    this.title = newBookTitle;
    this.author = newBookAuthor;
    this.read = newBookRead;
  }
}

// // Add the new book object to the array
function addBookToLibrary(newBook) {
  // do stuff here
  // Does the book title already exist
  const existingBook = myLibrary.find(existingBook => existingBook.title === newBook.title);

  // Add book to array if it doesn't already exists, otherwise display error message.
  if (!existingBook) {
    myLibrary.push(newBook);
  }
  else {
    console.log(`Book with title "${existingBook.title}" already exists.`);
  }

}


// Run the functions on click
document.querySelector('.addButton').addEventListener('click', function (e) {
    e.preventDefault();

    const newBookTitle = document.querySelector('.title').value;
    const newBookAuthor = document.querySelector('.author').value;
    const newBookRead = document.querySelector('.read').checked;

    if (newBookTitle) {
        const newBook = new Book(newBookTitle, newBookAuthor, newBookRead);

        addBookToLibrary(newBook)

        document.querySelector('.title').value = '';
        document.querySelector('.author').value = '';
        document.querySelector('.read').checked = false;

        displayBooks();
    }
})

function displayBooks() {
    const ul = document.querySelector('.bookList');
    ul.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let li = document.createElement('li');
        li.innerHTML =
        
            `<h2>${book.title}</h2>
            <p>by ${book.author}</p>

            <label for="read">Read</label>
            <input type="checkbox" id="read" class="read" ${book.read ? "checked" : "unchecked"}>

            <button class="trash" onclick="removeBook(${i})">
            
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2zm-7-10.414l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm10-8.586h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-8-3h-4v1h4v-1z"/></svg>
            
            </button>`;

        ul.appendChild(li);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function openNav() {
    document.getElementById('sidebar').style.width = "250px";
    document.getElementById('library').style.marginLeft = "250px";
    document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("library").style.marginLeft = "0";
  document.getElementById("openbtn").style.display = "block";
}