//access the data stored in friends.js
let tableList = require("../data/friends");

//export the routing
module.exports = function(app){

    app.get("/api/allFriends", function(req, res){
        res.json(tableList);
    });

    app.post("/api/allFriends", function(req, res){
       
        tableList.push(req.body);
        res.json(true); 
    });
};