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

const listMovies = async () => {
    try {
        
        console.log(await Movie.find({}));
    } catch (error) {
        console.log(error);
    }
};

const updateMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.updateOne(
            {title: movieObj.title},
            {title: movieObj.newTitle},
            {new: true}
        );
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};

const deleteMovie = async (movieObj) => {
    try {
        const deletedMovie = await Movie.deleteOne({title: movieObj.title});
        return deletedMovie;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addMovie,
    listMovies,
    updateMovie,
    deleteMovie
};