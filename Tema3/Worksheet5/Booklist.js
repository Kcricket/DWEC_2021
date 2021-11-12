class Book{
    constructor(title, genre, author, read = false, readDate = null){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
        //this.newBooks= newBooks;
    }
}
class Booklist {
    constructor(booklist = [], lastBook = null, newBooks ){
        this.newBooks = newBooks;
        this.booklist = booklist;
        this.lastBook = lastBook;
    }
    add(...book) {
    this.booklist.push(...book);
    }
    finishCurrentBook() {
        if (this.currentBook != null) {
            this.currentBook.readDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            this.currentBook.read = true;
            return this.lastBook;
        }
    return null;
    }
    get readedBooks() {
        return this.booklist.filter(book => book.read).length;
    }
    get currentBook() {
        for (const book of this.booklist) {
            if (!book.read) {
                return book;
            }
        }
        return null;
    }
    
    


}

function selectItem(e){
    e.target.parentElement.innerHTML = -e.target
}
function addNewBook(){
    //this.newBooks =1;
    index +=1;

    var name = document.querySelector('#inputName')
    var author = document.querySelector('#inputAuthor')
    var genre = document.querySelector('#inputGenre')
    var str = 'webo'+index

    var newBook = new Book(name, genre, author);
    document.querySelector('#card1').innerHTML +=`
    <div id = "`+str+`" class="alert alert-primary" role="alert">
        `+name.value+`,`+author.value+','+genre.value+`
    </div>
    `;
    document.getElementById(str).addEventListener('click', selectItem)
    //name.value= '';
    //author.value = '';
    //genre.value = '';
}


window.onload = function() {
    index = 1;
    book1 = new Book("weo", "drama", "mike tyson")
    booklist1 = new Booklist();
    booklist1.add(book1)
    booklist1.finishCurrentBook()
    //booklist1.addNewBook()
    sendme = document.getElementById('send')
    sendme.addEventListener('click', addNewBook)
} 
