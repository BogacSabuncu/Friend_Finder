//access the data stored in friends.js
let friendList = require("../data/friends");

//export the routing
module.exports = function(app){

    app.get("/api/allFriends", function(req, res){
        res.json(friendList);
    });

    app.post("/api/allFriends", function(req, res){
        friendList.push(req.body);
        res.json(true); 
    });

    app.post("/api/bestfriend", function(req, res){
        let bestfriend = require("../../findFriend")(req.body);

       res.json(bestfriend);
    });
};