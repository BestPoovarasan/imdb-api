const User = require("../modules/usermodels.js");

 
const getallmovies = async (req, res) => {
    try {
        const movies = await User.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getmovieById = async (req, res) => {
    try {
        const movie = await User.findById(req.params.id);
        res.json(movie);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
const createmovie = async (req, res) => {
    const create = new User(req.body);
    try {
        const inserteduser = await create.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
const updatemovie = async (req, res) => {
    try {
        const updatedmovie = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedmovie);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
 const deletemovie = async (req, res) => {
    try {
        const deletedmovie = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deletedmovie);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.getallmovies = getallmovies;
exports.getmovieById = getmovieById;
exports.createmovie = createmovie;
exports.updatemovie = updatemovie;
exports.deletemovie = deletemovie;
