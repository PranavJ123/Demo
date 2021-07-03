console.log("Exercise 3");
// Create a library class and implement the following:
// constructor must take the booklist as an arguement
// getBookList()
// issueBook(bookname,user)
// returnBook(bookname)


class Library{
    constructor (booklist){
        this.booklist = booklist;
        this.issuedBooks = {};
    }
    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }
    issueBooks(bookname,user){
        if(this.issuedBooks[bookname]==undefined){
            this.issuedBooks[bookname] = user;
        }
        else{
            console.log("This book is already issued");
        }
    }
    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }
}