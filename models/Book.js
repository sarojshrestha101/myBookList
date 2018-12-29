const getDb = require('../util/database').getDb;

class Book {
    constructor(title, authorName, isbn) {
        this.isbn = isbn;
        this.title = title;
        this.authorName = authorName;
    }

    save() {
        const db = getDb();
        return db
        .collection('asdf')
        .insertOne(this)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });

    }
}

module.exports = Book;