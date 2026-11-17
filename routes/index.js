
/* GET home page. */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Movie = require('../models/movie');

/* Read Operation */
router.get('/',async(req,res,next) => {
    try{
        let dbQuery = {};

        // 2. Check if the URL has ?searchQuery=something
        if (req.query.searchQuery) {
            dbQuery = { 
                title: { $regex: req.query.searchQuery, $options: 'i' } 
            };
        }


        const MovieList = await Movie.find(dbQuery);
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
