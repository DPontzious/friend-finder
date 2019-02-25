var friendsData = require("./app/data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        // This is where you would need to put the functionality for the matching friends
        friendsData.push(req.body);
        res.join(true);
        console.log(result.json)
    });


};
