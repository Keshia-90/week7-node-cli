const movie2Arr = [];

class Movie2{
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movie2Arr.push(this);
        console.log(movie2Arr);
    }

}

module.exports = Movie2;