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
    finishCurrentBook(x) {
        if (this.currentBook(x) != null) {
            this.currentBook(x).readDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            this.currentBook.read = true;
            return this.lastBook;
        }
    return null;
    }
    get readedBooks() {
        return this.booklist.filter(book => book.read).length;
    }
    //  
    addNewBook(){  
        //For Different color cards 
        var alertClassesBootstr = ['primary', 'secondary', 'success', 'warning', 'danger']
        //Get the elements
        var name = document.querySelector('#inputName')
        var author = document.querySelector('#inputAuthor')
        var genre = document.querySelector('#inputGenre')
        var str = 'webo'+index
        index++;
    
        //Create the book
        var newBook = new Book(name.value, genre.value, author.value);
        booklist1.add(newBook);
        
        //Create and style elements
        var bookli = document.createElement("div");
        bookli.id= str;
        bookli.className = "alert alert-"+alertClassesBootstr[Math.floor(Math.random()*3)];
        bookli.role = "alert";
        //bookli.dataToggle = "tooltip"
        // bookli.setAttribute('data-toggle', 'modal')
        // bookli.setAttribute('data-target', '#exampleModal')
        bookli.innerHTML = newBook.title+', '+newBook.author+', '+newBook.genre;  
        bookli.title = newBook.title; 
        bookli.style = "display :flex; justify-content: space-between; align-items: center"
    
    
        //Create 2 buttons, 1 to delete, and 1 to finish
        var buttonContainer = document.createElement("div")
        buttonContainer.className = "jumbotronigga"
        buttonContainer.style = "display: flex; justify-content: space-between; align-items:center"
        var buttonDelete = document.createElement("button")
        buttonDelete.className = "btn btn-"+alertClassesBootstr[Math.floor(Math.random()*5)];
        buttonDelete.innerHTML = "Delete"
        var buttonFinish = document.createElement("button")
        buttonFinish.className = "btn btn-"+alertClassesBootstr[Math.floor(Math.random()*5)];
        buttonFinish.innerHTML = "Finish"
    
    
        buttonDelete.addEventListener('click', booklist1.deleteItem)
        buttonFinish.addEventListener('click', booklist1.finishBookx)

        // var bookLi =`
        // <div id = "`+str+`" class="alert alert-primary" role="alert">
        //     `+name.value+`,`+author.value+','+genre.value+`
        // </div>
        // `;
        // document.querySelector('#card1').innerHTML += bookLi;
        document.querySelector('#card1').appendChild(bookli)
        bookli.appendChild(buttonContainer)
    
        buttonContainer.appendChild(buttonDelete)
        buttonContainer.appendChild(buttonFinish)
    
        
        
        
        name.value= '';
        author.value = '';
        genre.value = '';
    }
    


    deleteItem(e){
        var titlex = e.target.parentNode.parentNode.title;
        booklist1.booklist.forEach(element => {
            if (element.title == titlex ){
                var indexOfElement  = booklist1.booklist.indexOf(element)
                booklist1.booklist.splice(indexOfElement, 1)
            }
            
        });
        document.getElementById('card1').removeChild(e.target.parentNode.parentNode);   
    }



    finishBookx(e){
        //Get the finish value and change its location on the interface
        var titlex = e.target.parentNode.parentNode.title;
        booklist1.booklist.forEach(element => {
            if (element.title == titlex ){
                element.readDate = new Date(Date.now());
                booklist1.lastBook = element;
                element.read = true;
            }
            
        });
        
        //console.log(popped)
        document.getElementById('card1').removeChild(e.target.parentNode.parentNode);   
        document.getElementById('card2').appendChild(e.target.parentNode.parentNode);
    }

}





var index = 0;






window.onload = function() {
    //book1 = new Book("weo", "drama", "mike tyson")
    booklist1 = new Booklist();
    //booklist1.add(book1)
    //booklist1.finishCurrentBook()
    //booklist1.addNewBook()
    sendme = document.getElementById('send')
    sendme.addEventListener('click', booklist1.addNewBook)
    //document.getElementById("deleteBook").addEventListener('click', deleteItem)
    //document.getElementById("finishBook").addEventListener('click', finishItem)
} 
