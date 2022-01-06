const mongoose = require("mongoose");
const yargs = require("yargs");

const { addMovie, listMovies, updateMovie, deleteMovie } = require("./utils/index");
const connection = require("./db/connection");

const app = async (args) => {
    try {
        if(args._[0] === "add") {
            const movie = await addMovie({title: args.title, actor: args.actor});
            console.log("hellos")
        } else if (args._[0] === "list") {
            await listMovies();
        } else if (args._[0] === "update") {
            await updateMovie({
                title: args.title,
                newTitle: args.newTitle
            });
        } else if (args._[0] === "delete") {
            const deletedMovie = await deleteMovie({title: args.title});
            console.log(deletedMovie);
        }
    } catch (error) {
        console.log(error);
    }
};


app(yargs.argv);