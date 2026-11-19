
/* GET home page. */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Movie = require('../models/movie');

/* Read Operation */
router.get('/',async(req,res,next) => {
    try{
        let dbQuery = {};

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
/* Get Operation */
router.get('/add', async(req,res,next)=>{
    try{
        res.render('movies/add',{
            title:'Add movie'
        });
    }
    catch(err){
        console.error(err);
        res.render('movies/list',{
            error:'Error on Server'
        })
    }
})
/* Post operation */
router.post('/add', async(req,res,next)=>{});
/* Update Operation */
router.post('/edit/:id', async(req,res,next)=>{});
router.get('/edit/:id', async(req,res,next)=>{});
/* Delete Operation */
router.get('/delete/:id', async(req,res,next)=>{});

module.exports = router;
'http://127.0.0.1:3200'