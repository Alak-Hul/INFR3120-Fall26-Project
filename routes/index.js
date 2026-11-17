
/* GET home page. */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect my router with my model
let Movie = require('../models/movie');

/* Read Operation */
router.get('/',async(req,res,next) => {
    try{
        const MovieList = await Movie.find();
        res.render('movies/list',{
            title:'Movies',
            MovieList:MovieList
        })
    }
    catch(err){
        console.log(err);
        res.render('movies/list',{
            error:'Error on Server'
        })
    }
})
/* Create Operation */

/* Update Operation */

/* Delete Operation */

module.exports = router;

module.exports = router;
