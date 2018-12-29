const path = require('path');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setting up views engine
app.set('view engine', 'ejs');
app.set('views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// importing mongoClient
const mongoConnect = require('./util/database').mongoConnect;

//importing routes
const publicRoutes = require('./routes/public_routes');

app.use(publicRoutes);


app.use(
    (req, res, next)=>{
        res.status(404).render(
            '404',{
                pageTitle: '404 Page Not Found',                
            }
        );
    }
);
mongoConnect(()=>{    
    app.listen(4000);
})

