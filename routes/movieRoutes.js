const express = require("express");
const { getallmovies, 
    getmovieById,
    createmovie,
    updatemovie,
    deletemovie } = require("../controllers/usercontroller.js");


const router = express.Router();
 
router.get('/movies', getallmovies);
router.get('/movie/:id', getmovieById);
router.post('/create', createmovie);
router.patch('/updatedmovie/:id', updatemovie);
router.delete('/deletedmovie/:id', deletemovie);
 
module.exports = router;