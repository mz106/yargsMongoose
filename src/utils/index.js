const mongoose = require("mongoose");
const Movie = require("../models/models");

const addMovie = async (movieObj) => {
    try {
        console.log("movieObj: ", movieObj);
        const newMovie = new Movie(movieObj);
        console.log("newMovie: ", newMovie);
        await newMovie.save();
        console.log(`Movie ${movieObj.title} has been added`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addMovie
};