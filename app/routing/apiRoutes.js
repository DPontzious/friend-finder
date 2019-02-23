var friendsData = require("..data/friends");
module.exports = function (app) {
    app.get("/api/friends", function (err, result) {
        result.json(friendsData);
    });
    app.post("/api/friends", function (err, result) {
        // This is where you would need to put the functionality for the matching friends
        console.log(result.json)
    })


};
