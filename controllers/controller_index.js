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