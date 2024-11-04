"use strict";
{ // destructuring
    var user_1 = {
        id: 345,
        name: {
            firstName: 'Rashedin',
            lastName: 'Islam'
        },
        contactNo: '017313010',
        address: 'Australia'
    };
    var fName = user_1.name.firstName;
    // array destructuring
    var myFriends = ['Chandler', 'Joey', 'Ross', 'Rachel', 'Monica', 'Phoebe'];
    var a = myFriends[0], b = myFriends[1], bestFriend = myFriends[2], rest = myFriends.slice(3);
}
