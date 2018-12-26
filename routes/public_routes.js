const express = require('express');
const router = express.Router();

//importing controllers
const controller_index = require('../controllers/controller_index');

//maping with routes

router.get('/index',controller_index.getIndexPage);
router.get('/addBooks', controller_index.getAddBooks);
router.post('/addBooks', controller_index.postAddBooks)
router.get('/allBooks', controller_index.getAllBooks);
router.get('/about', controller_index.getAbout);

module.exports = router;