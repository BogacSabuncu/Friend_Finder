let friendList = require("./app/data/friends");

//function for finding the bestfriend
module.exports = function(newFriend){

    let bestFriend = {};
    let bestFriendDif = 100;

    //for each friend in the datafile
    friendList.forEach(friend => {
        
        let diffrence = 0;
        //go through their individual answers
        for(let i = 0; i < 10; i++){
            //if they are not equal to each other
            if(friend.scores[i] != newFriend.scores[i]){
                //get the difference
               diffrence += Math.abs(parseInt(friend.scores[i])-parseInt(newFriend.scores[i]));
            }
        }
        //the friend with the least difference becomes the new best friend
        if(diffrence <= bestFriendDif){
            bestFriendDif = diffrence;
            bestFriend = friend;
        }
        
    });

    //return the bestfriend
    return bestFriend;
}