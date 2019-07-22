// ===============================================================================
// DATA
// Below data will hold all of the users' profiles and scores
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

 
var friendsArray = [
    {
    name:"Ahmed",
    photo:"https://source.unsplash.com/VVEwJJRRHgk",
    scores: [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]

    },
    {
    name: "Ted Silva",
    photo: "https://source.unsplash.com/WjkPDHMjWzE",  
    scores: [
        "4",
        "2",
        "2",
        "3",
        "4",
        "4",
        "3",
        "4",
        "4",
        "2"
      ]
    },
    {
    name: "Sammy Perez",
    photo: "https://source.unsplash.com/zIBn97bCJoI",
    scores: [
        "3",
        "2",
        "2",
        "4",
        "2",
        "3",
        "4",
        "3",
        "3",
        "4"
        ]
    }
]  ;
  

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;