var friendsData = [
    {
        name: "Danelle",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi8nLrvcNcrg%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di8nLrvcNcrg&docid=8BohrDA0JdrFWM&tbnid=12qShbrHESfvDM%3A&vet=10ahUKEwjYz_ul5dDgAhW0OH0KHQgUDBcQMwhtKAEwAQ..i&w=1280&h=720&bih=679&biw=1042&q=cat&ved=0ahUKEwjYz_ul5dDgAhW0OH0KHQgUDBcQMwhtKAEwAQ&iact=mrc&uact=8",
        scores: [5, 2, 2, 5, 3],
    },
    {
        name: "Robbie",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fi8nLrvcNcrg%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Di8nLrvcNcrg&docid=8BohrDA0JdrFWM&tbnid=12qShbrHESfvDM%3A&vet=10ahUKEwjYz_ul5dDgAhW0OH0KHQgUDBcQMwhtKAEwAQ..i&w=1280&h=720&bih=679&biw=1042&q=cat&ved=0ahUKEwjYz_ul5dDgAhW0OH0KHQgUDBcQMwhtKAEwAQ&iact=mrc&uact=8",
        scores: [4, 3, 2, 4, 5]
    }];
// var numbers = friendsData[0].scores
// const add = (a, b) => a + b
// var sum = numbers.reduce(add)
// console.log(sum)

// friendsData[].scores[].forEach(x => {
//     console.log(x)
// })

// const myArray = [{ x: 100 }, { x: 200 }, { x: 300 }];
for (var i = 0; i < friendsData.length; i++) {
    var numbers = friendsData[i].scores;
    const add = (a, b) => a + b
    var sum = numbers.reduce(add)
    console.log(sum);
}
// const sum = friendsData.map(element => element.scores).reduce((a, b) => a + b);
// console.log(sum);

var friends = require("../data/friendData.js");

// exports API routes
module.exports = function (app) {
    // list of friend entries
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // add new friends
    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            friendName: "",
            friendPic: "",
            friendDifference: Infinity
        };

        var newFriend = req.body;
        var newScores = newFriend.Score;


        var totalDifference;

        // shows eachs persons score array
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            //console.log(friends[i].Score);

            // goes through each persons score array and extracts individual value
            for (var x = 0; x < friends[i].Score.length; x++) {
                // console.log(friends[i].Score[x]);
                // console.log("new friend", newScores[x]);

                totalDifference += Math.abs(parseInt(newScores[x]) - parseInt(friends[i].Score[x]));

            }

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.friendName = friends[i].friendName;
                bestMatch.friendPic = friends[i].friendPic;
                bestMatch.friendDifference = totalDifference;
            }

        }

        // will add new user
        friends.push(newFriend);

        // send back to browser the best friend match
        res.json(bestMatch);
    });
}