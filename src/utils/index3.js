const movie3Arr = [];

class Movie3{
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movie3Arr.push(this);
        console.log(movie3Arr);
    }

}

module.exports = Movie3;