// START
var friendsData = require("../data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        // console.log(friendsData)
    });
    app.post("/api/friends", function (req, res) {
        // This is where you would need to put the functionality for the matching friends
        var match = {
            name: "",
            photo: "",
            // difference: Infinity
        };
        var newFriend = req.body;
        var newScores = newFriend.scores;
        // console.log(newScores)
        var newScoreMap = newScores.map(Number);
        // console.log(a)
        const add = (a, b) => a + b
        var sumUser = newScoreMap.reduce(add)
        // console.log(sumUser)

        for (var i = 0; i < friendsData.length; i++) {
            totalDifference = 0;
            // console.log(friendsData[i].scores)
            var numbers = friendsData[i].scores;
            // console.log(numbers)
            var scoreMap = numbers.map(Number);

            // var parseNumbers = parseInt(numbers)
            // console.log(b)
            // console.log(parseNumbers)
            // START
            const add = (a, b) => a + b
            var sum = scoreMap.reduce(add)
            // console.log(sum);
            // var totalDifference = Math.abs(sumUser - sum);
            // console.log("diff", totalDifference)
            // STOP HERE
            // for (var j = 0; j < sum.length; j++) {
            //     var totalDifference = Math.abs(sumUser - sum[j]);
            //     console.log(totalDifference)
            // THIS IS GOOD CODE
            if (sumUser <= sum) {
                match.name = friendsData[i].name;
                match.photo = friendsData[i].photo;
                // match.difference = difference;
            }
            res.json(match);
            friendsData.push(newFriend);
        }
    })
}
            // STOP HERE
            // for (var j = 0; j < friendsData[i].scores.length; j++) {
            //     totalDifference += Math.abs(parseInt(newScores[j]) -
            //         parseInt(friendsData[i].scores[j]));
            // }
            // console.log(totalDifference)
            // if (totalDifference <= match.difference) {
            //     match.name = friendsData[i].name;
            //     match.photo = friendsData[i].photo;
            //     match.difference = difference;
            // res.json(match);
            // friendsData.push(newFriend);
            // for (var i = 0; i < friendsData.length; i++) {
            // res.join(true);
            // }
            // )
            // }
            // var friendsData = require("../data/friends.js");
            // module.exports = function (app) {
            //     app.get("/api/friends", function (req, res) {
            //         res.json(friendsData);
            //     });

            //     // add new friends
            //     app.post("/api/friends", function (req, res) {
            //         var match = {
            //             name: "",
            //             photo: "",
            //             friendDifference: Infinity
            //         };

            //         var newFriend = req.body;
            //         var newScores = newFriend.score;
            //         console.log(newScores)
            //         var totalDifference;
            //         // shows eachs persons score array
            //         for (var i = 0; i < friendsData.length; i++) {
            //             totalDifference = 0;
            //             for (var j = 0; j < friendsData[i].score.length; j++) {
            //                 // console.log(friends[i].Score[x]);
            //                 // console.log("new friend", newScores[x]);
            //                 totalDifference += Math.abs(parseInt(newScores[j]) - parseInt(friendsData[i].score[j]));
            //             }
            //             if (totalDifference <= bestMatch.friendDifference) {
            //                 match.name = friends[i].name;
            //                 match.photo = friends[i].photo;
            //                 match.dfference = totalDifference;
            //             }
            //         }

            //         // adding new users
            //         friendsData.push(newFriend);

            //         // send back to browser the best friend match
            //         res.json(match);
            //     });

