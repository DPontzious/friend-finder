var path = require("path")
var path = require("path");
module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        // res.sendFile(/Users/danellepontzious / code / code / friend - finder/app/routing/apiRoutes)
    });
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
