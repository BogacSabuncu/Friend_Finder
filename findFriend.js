let friendList = require("./app/data/friends");

module.exports = function(newFriend){

    let bestFriend = {};
    let bestFriendDif = 100;

    friendList.forEach(friend => {
        let diffrence = 0;
        for(let i = 0; i < 10; i++){
            if(friend.scores[i] != newFriend.scores[i]){
               diffrence += Math.abs(parseInt(friend.scores[i])-parseInt(newFriend.scores[i]));
            }
        }
        //console.log(diffrence + " | " + bestFriendDif )
        if(diffrence <= bestFriendDif){
            bestFriendDif = diffrence;
            bestFriend = friend;
        }
        
    });
    return bestFriend;
}