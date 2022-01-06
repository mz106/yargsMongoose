const mongoose = require("mongoose");
const yargs = require("yargs");

const { addMovie } = require("./utils/index");

const app = async (args) => {
    try {
        if(args._[0] === "add") {
            const movie = await addMovie({title: args.title, actor: args.actor});
            
        }
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv)