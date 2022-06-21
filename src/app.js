// const Movie = require("./utils/index");
// const yargs = require("yargs");

// console.log(yargs.argv); //yargs.argv.title(actor)--name/title/actor

// const input = process.argv;

// if (input[2] === "add") {
//     const movieObj = new Movie(input[3], input[4]);
//     movieObj.add();
//     const movie2Obj = new Movie(input[5], input[6]);
//     movie2Obj.add();
//     const movie3Obj = new Movie(input[7], input[8]);
//     movie3Obj.add();
// };

// const app = (argvArr) => {
//     if (argvArr[2] === "add") {
//         const movieObj = new Movie( argvArr[3],argvArr[4] );
//         movieObj.add();
//     } else if (argvArr[2] === "addMulti") {
//         const movie1 = new Movie( argvArr [3],argvArr[4] );
//         const movie2 = new Movie( argvArr [5], argvArr[6] );
//         const movie3 = new Movie( argvArr [7], argvArr[8] );
//         movie1.add();
//         movie2.add();
//         movie3.add();
//     }
// };

// app(process.argv);


//yargs movie app

const yargs = require("yargs");
const Movie = require("./utils");

const app = () => {
    if (yargs.argv.command === "add") { //node src/app.js --command add(title and actor)
        const movieObj = new Movie(yargs.argv.title, yargs.argv.actor);
        movieObj.add();

    } else if (yargs.argv.command === "addMulti") { //node src/app.js --command addMulti(title and actor)
                const movieObj = new Movie(yargs.argv.title, yargs.argv.actor);
                movieObj.add();
            }
        };


app();
