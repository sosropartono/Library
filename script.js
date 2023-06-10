const myLibrary = [];
const bookShelf = document.querySelectorAll("#bookshelf")
const shelves = document.querySelectorAll(".shelf");
let latestShelf;


function Book(name, author, datePublished, hasBeenRead) {
    this.name = name;
    this.author = author;
    this.datePublished = datePublished;
    this.hasBeenRead = hasBeenRead;
}

// Each shelf contains its own number of books
function Shelf(){
    this.storageLeft = 10;
    const books = []
}

const checkShelfLoad = () => {
    return latestShelf.books < 10
}

const getLatestShelf = () =>{
    return shelves[shelves.length - 1]
}
 

const createShelf = () => {
    const newShelf = document.createElement("div");
    newShelf.innerHTML = "br"
    newShelf.classList.add("shelf")
    bookShelf.appendChild(newShelf)
    return new Shelf();

}

const addBookToShelf = () => {
    console.log(myLibrary.length)
    myLibrary.forEach((book, i) => {
        if(latestShelf.storageLeft == 0){
            latestShelf = createShelf();
        }

        const bookCard = document.createElement('div');
        bookCard.classList.add("card")
        console.log(bookCard)
        bookCard.innerHTML = (`
        <p> ${book.name} </p>
        <p> ${book.author} </p>
        <p> ${book.hasBeenRead} </p>`)


    })

}
// does latestShelf automatically update if you 




const addShelf = () =>{
    let newShelf = document.createElement('div');
    newShelf.innerHTML = "<hr>"
    newShelf.classList.add = "shelf"
    bookShelf.appendChild(newShelf)

}


function addBookToLibrary(book)
{
    myLibrary.push(book)
}


const randomBook = new Book("will", "something", 1932, 23, true)
addBookToLibrary(randomBook)
addBookToLibrary(randomBook)
addBookToLibrary(randomBook)
addShelf();
addBookToShelf();




