const Book = require('../models/Book');

exports.getIndexPage = (req, res, next)=>{
    res.render('view_index',{
        pageTitle: 'My book List'
    })
};

exports.getAddBooks = (req, res, next)=>{
    res.render('view_addBooks',{
        pageTitle: 'Add Books'
    })

};

exports.postAddBooks = (req, res, next)=>{
    const bookTitle = req.body.bookName;
    const authorName = req.body.authorName;
    const isbn = req.body.isbn;

    const book = new Book(bookTitle, authorName, isbn);
    book.save()
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err);
    });


    console.log(req.body)
    res.redirect('/addBooks')
};

exports.getAllBooks = (req, res, next)=>{
    res.render('view_allBooks',{
        pageTitle: 'All Books'
    });
};

exports.getAbout = (req, res, next)=>{
    res.render('view_about',{
        pageTitle: 'About '
    })
};