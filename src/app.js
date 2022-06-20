const Movie = require("./utils/index");
const input = process.argv;

if (input[2] === "add") {
    const movieObj = new Movie(input[3], input[4]);
    movieObj.add();
    const movie2Obj = new Movie(input[5], input[6]);
    movie2Obj.add();
    const movie3Obj = new Movie(input[7], input[8]);
    movie3Obj.add();
};