const Movie = require("./utils/index");
const Movie2 = require("./utils/index2");
const Movie3 = require("./utils/index3");
const input = process.argv;

if (input[2] === "add") {
    const movieObj = new Movie(input[3], input[4]);
    movieObj.add();
    const movie2Obj = new Movie2(input[5], input[6]);
    movie2Obj.add();
    const movie3Obj = new Movie3(input[7], input[8]);
    movie3Obj.add();
}