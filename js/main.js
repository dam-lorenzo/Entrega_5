const books = []

class readedBook {
    constructor(title, genre, author, year, pages, timeToRead, rating) {
        this.title = title;
        this.genres = genre.split(' ');
        this.author = author;
        this.year = parseInt(year);
        this.pages = parseInt(pages);
        this.estimateTime = parseFloat(timeToRead);
        this.rating = parseFloat(rating);
    }
    
    addTime(time) {
        time = parseFloat(time);
        this.estimateTime = (this.estimateTime + time)/2;
    }

    addGenre(genres) {
        for (const genre of genres) {
            if (this.genres.includes(genre)) {
                this.genres.push(genre)
            }
        }
    }

    addRating(rating) {
        rating = parseFloat(rating)
        this.rating = (this.rating + rating)/2
    }
}

function requestBookData() {
    let title = prompt("Ingrese el titulo del libro:");
    let genre = prompt("Ingrese los generos del libro (solo separado por espacios):");
    let author = prompt("Ingrese el nombre del autor:");
    let pages = prompt("Ingrese la cantidad de paginas del libro (solo el numero):");
    let time = prompt("Ingrese el tiempo que le llevo leerlo (solo las horas):");
    let rating = prompt("Ingrese cuantas estrellas del 1 al 5 le asigna (solo el numero):");
    let year = prompt("Ingrese el año de publicacion:");
    const book = new readedBook(title, genre, author, year, pages, time, rating);
    return book
}

while (true) {
    const newBook = requestBookData() 
    const book = books.find(item => item.title == newBook.title && item.year == newBook.year )
    if(book) {
        book.addTime(newBook.time)
        book.addRating(newBook.rating)
        book.addGenre(newBook.genres)
    }
    else {
        books.push(newBook);
    }

    if (prompt('Desea ingresar otro libro?:').toLowerCase() == 'no'){
        break;
    }
}

console.log(books)