//access the data stored in friends.js
let friendList = require("../data/friends");

//export the routing
module.exports = function(app){

    //api get request for all the friends
    app.get("/api/allFriends", function(req, res){
        res.json(friendList);
    });

    //api post request for all the friends
    app.post("/api/allFriends", function(req, res){
        friendList.push(req.body);
        res.json(true); 
    });

    //to get the best friend result
    app.post("/api/bestfriend", function(req, res){
        //call the best friend funtion that returns the best match.
        let bestfriend = require("../../findFriend")(req.body);

        //return bestfriend as JSON
       res.json(bestfriend);
    });
};