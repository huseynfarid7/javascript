
class Book {
    constructor(title,author,isbn,price) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.price = price;
    }
    display() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn}) - $${this.price}`;
    }
}

class Inventory {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    displayInventory() {
        console.log("Inventory: ");
        this.books.forEach(book => {
            console.log(book.display());
        });
    }
}

class ShoppingCart {
    constructor(){
        this.items = [];
    }

    addBook(book) {
        this.items.push(book)
    }

    removeBook(isbn) {
        this.items = this.items.filter(book => book.isbn !== isbn);
    }

    getTotalPrice() {
        return this.items.reduce((total,book) => total + book.price, 0);
    }

    displayCard() {
        console.log("Shopping Cart: ");
        this.items.forEach(book => {
            console.log(book.display())
        });
        console.log(`Total price: $${this.getTotalPrice()}`);
    }
}

const inventory = new Inventory();
const cart = new ShoppingCart();

function addToInventory(title, author, isbn, price) {
    const book = new Book(title, author, isbn, price);
    inventory.addBook(book);
    console.log(`Added ${book.title} to inventory.`);
}

function addToCart(isbn) {
    const bookToAdd = inventory.books.find(book => book.isbn === isbn);
    if (bookToAdd) {
        cart.addBook(bookToAdd);
        console.log(`Added ${bookToAdd.title} to shopping cart.`);
    } else {
        console.log("Book not found in inventory.");
    }
}

function removeFromCart(isbn) {
    const removedBook = cart.items.find(book => book.isbn === isbn);
    if (removedBook) {
        cart.removeBook(isbn);
        console.log(`Removed ${removedBook.title} from shopping cart.`);
    } else {
        console.log("Book not found in shopping cart.");
    }
}

function displayInventory() {
    inventory.displayInventory();
}

function displayCart() {
    cart.displayCard();
}


addToInventory("Programming", "Saidhusein", "1", 11.5);
addToInventory("AI", "Open-AI", "2", 9.5);

addToCart("1");
addToCart("2");

displayInventory();
displayCart();

removeFromCart("2");

displayCart();
