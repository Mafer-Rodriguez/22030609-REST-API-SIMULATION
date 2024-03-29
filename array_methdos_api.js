//
const library = [
    {
        "title": "Harry Potter and the Philosopher's Stone",
        "ISBN": "9781408855652",
        "year": 1997,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 10,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Harry Potter and the Chamber of Secrets",
        "ISBN": "9781408855669",
        "year": 1998,
        "genre": "Fantasy",
        "author": "J.K. Rowling",
        "stock": 2,
        "publisher": "Bloomsbury"
    },
    {
        "title": "Cracking the Coding Interview",
        "ISBN": "9780984782857",
        "year": 2015,
        "genre": "Technical",
        "author": "Gayle Laakmann McDowell",
        "stock": 5
    },
    {
        "title": "The Alchemist",
        "ISBN": "9780062315007",
        "year": 1988,
        "genre": "Fantasy",
        "author": "Paulo Coelho",
        "stock": 3,
        "publisher": "HarperOne"
    },
    {
        "title": "Educated",
        "ISBN": "9780399590504",
        "year": 2018,
        "genre": "Memoir",
        "author": "Tara Westover",
        "stock": 7,
        "publisher": "Random House"
    },
    {
        "title": "Sapiens: A Brief History of Humankind",
        "ISBN": "9780062316097",
        "year": 2014,
        "genre": "History",
        "author": "Yuval Noah Harari",
        "stock": 4,
        "publisher": "Harper"
    },
    {
        "title": "Becoming",
        "ISBN": "9781524763138",
        "year": 2018,
        "genre": "Autobiography",
        "author": "Michelle Obama",
        "stock": 6,
        "publisher": "Crown"
    },
    {
        "title": "The Night Circus",
        "ISBN": "9780307744432",
        "year": 2011,
        "genre": "Fantasy",
        "author": "Erin Morgenstern",
        "stock": 5,
        "publisher": "Anchor Books"
    },
    {
        "title": "1984",
        "ISBN": "9780451524935",
        "year": 1949,
        "genre": "Dystopian",
        "author": "George Orwell",
        "stock": 8,
        "publisher": "Plume"
    },
    {
        "title": "The Martian",
        "ISBN": "9780804139021",
        "year": 2014,
        "genre": "Science Fiction",
        "author": "Andy Weir",
        "stock": 5,
        "publisher": "Crown Publishing Group"
    },
    {
        "title": "Where the Crawdads Sing",
        "ISBN": "9780735219090",
        "year": 2018,
        "genre": "Fiction",
        "author": "Delia Owens",
        "stock": 4,
        "publisher": "G.P. Putnam's Sons"
    },
    {
        "title": "Atomic Habits",
        "ISBN": "9780735211292",
        "year": 2018,
        "genre": "Self-help",
        "author": "James Clear",
        "stock": 7,
        "publisher": "Avery"
    },
    {
        "title": "The Power of Now",
        "ISBN": "9781577314806",
        "year": 1997,
        "genre": "Spirituality",
        "author": "Eckhart Tolle",
        "stock": 9,
        "publisher": "New World Library"
    },
    {
        "title": "The Catcher in the Rye",
        "ISBN": "9780316769488",
        "year": 1951,
        "genre": "Fiction",
        "author": "J.D. Salinger",
        "stock": 7,
        "publisher": "Little, Brown and Company"
    },
    {
        "title": "The Great Gatsby",
        "ISBN": "9780743273565",
        "year": 1925,
        "genre": "Fiction",
        "author": "F. Scott Fitzgerald",
        "stock": 8,
        "publisher": "Scribner"
    },
    {
        "title": "To Kill a Mockingbird",
        "ISBN": "9780061120084",
        "year": 1960,
        "genre": "Fiction",
        "author": "Harper Lee",
        "stock": 0,
        "publisher": "HarperPerennial Modern Classics"
    },
    {
        "title": "A Brief History of Time",
        "ISBN": "9780553380163",
        "year": 1988,
        "genre": "Science",
        "author": "Stephen Hawking",
        "stock": 6,
        "publisher": "Bantam"
    },
    {
        "title": "The Four Agreements",
        "ISBN": "9781878424310",
        "year": 1997,
        "genre": "Self-help",
        "author": "Don Miguel Ruiz",
        "stock": 7,
        "publisher": "Amber-Allen Publishing"
    },
    {
        "title": "The Lean Startup",
        "ISBN": "9780307887894",
        "year": 2011,
        "genre": "Business",
        "author": "Eric Ries",
        "stock": 9,
        "publisher": "Crown Business"
    },
    {
        "title": "Thinking, Fast and Slow",
        "ISBN": "9780374533557",
        "year": 2011,
        "genre": "Psychology",
        "author": "Daniel Kahneman",
        "stock": 5,
        "publisher": "Farrar, Straus and Giroux"
    }
]

function sendReponse(code, body) {
    const response = {
        code,
        body,
    };

    switch (code) {
        case 200:
            response.msg = "Ok";
            break;
        case 400:
            response.msg = "Endpoint not valid";
            break;
        case 404:
            response.msg = "Not found";
            break;
        case 500:
            response.msg = "Internal Server Error";
            break;
        default:
            response.msg = "Unknown status code";
    }

    return response;
}

//Return all existing books.
function get(getBook) {
    for (let i = 0; i < library.length; i++) {//loop through the library array
        if (library[i].title === getBook) {//library[i].title is the title of the book 
            return sendReponse(200, library[i]);
        }

    }
    
    return sendReponse(400);
}

console.log(get("The Lean Startup"));

//Return all existing books.
function getAllBooks(getAllBooks) {
    if (library.length > 0){//length method returns the number of elements in the array
      const book = library;
      return sendReponse(200 , book);
    }else if (library.length === 0){//length method returns the number of elements in the array, if there are no elements in the array, it returns 0

      return sendReponse(404);
    }
    else{
      return sendReponse(500);
    }
  }  
  
  console.log(getAllBooks(library ));


//Adds a new book to the books array and return the book created, and the new array, including the new book.
function addBook(newBook){
    if (library.push(newBook)){//remember to push the new book or agree a new element to the array
    return sendReponse(200 , library)  ;
  }else {
    return sendReponse(404);
  }
}
console.log(addBook({
    "title": "Eleven Minutes",
    "ISBN": "9874562547896",
    "year": 2009,
    "genre": "Fiction", 
    "author": "Paulo Coelho",
    "stock": 6,
    "publisher": "HarperOne"
  }));

function removeBook(removeBook) {
    for (let i = 0; i < library.length; i++) {
        //the next line is checking if the title of the book is the same as the title of the book that we want to remove
        if (library[i].title === removeBook || library[i].ISBN === removeBook) {//library[i].title is the title of the book
            // || operator is used to compare two or more conditions
            const removed = library.splice(i, 1);
            console.log(sendReponse(200, { deleted: removed[0] , library }));
        }
    }
    
    return sendReponse(400);
}
console.log(removeBook("The Lean Startup"));

function filterByGenre(genre){ 
    const filteredLibrary = library.filter(function(book) {//filter method creates a new array with all elements that pass the test implemented by the provided function
        return book.genre === genre;//the function is checking if the genre of the book is the same as the genre that we want to filter
    });
    if (filteredLibrary.length > 0){
        return sendReponse(200, filteredLibrary);
    } else if (library.length === 0) {
        return sendReponse(404);
    } else {
        return sendReponse(500);
    }
}
console.log(filterByGenre("Fantasy"));

function listBooks(){
    const list = library.map(function(book) {//map method creates a new array populated with the results of calling a provided function on every element in the calling array
        return `${book.title} - ${book.author} - ${book.year}`; //$ is used to call the value of the book
    });
    if (list.length > 0){
        return sendReponse(200, list);
    } else if (library.length === 0) {
        return sendReponse(404);
    } else {
        return sendReponse(500);
    }
}
console.log(listBooks());   

function getBooksByYear(year) {
    const books = library.filter(function(book) {//filter method creates a new array with all elements that pass the test implemented by the provided function
        return book.year === year;
    });
    if (books.length > 0) {
        return sendReponse(200, books);
    } else {
        return sendReponse(404);
    }
}
console.log(getBooksByYear(2011));

function genreFullAvallability(genre){
    const books = library.filter(function(book) {
        return  book.genre === genre;
    });
    const stock = books.every(function(book) {//every method tests whether all elements in the array pass the test implemented by the provided function
        return book.stock > 0;//the function is checking if the stock of the book is greater that 0
    }); 
    if (stock === true){
        return sendReponse(200, stock);
    } else {
        return sendReponse(400, stock);
    }
}
console.log(genreFullAvallability("Fantasy"));

function genrePartialAvallability(genre){
    const books = library.filter(function(book) {
        if (book.genre === genre) {
            return sendReponse(200, book);
        }
    });
    const stock = books.some(function(book) {// some method tests whether at least one element in the array passes the test implemented by the provided
        return book.stock > 0;//the function is checking if the stock of the book is greater that 0
    });
    if (stock === true){
        return sendReponse(200, stock);
    } else {
        return sendReponse(400, stock);
    }
}
console.log(genrePartialAvallability("Fiction"));



function getCountBy(countBy){
    const count = library.reduce(function(acc, book) {//reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
        if (acc[book[countBy]]) {//remenber that acc is the accumulator and book is the current value
            acc[book[countBy]] += 1; 
        } else {
            acc[book[countBy]] = 1;
        }
        return acc;
    }, {});
    if (Object.keys(count).length > 0) {
        return sendReponse(200, count);
    } else {
        return sendReponse(404);
    }
}
console.log(getCountBy("author"));