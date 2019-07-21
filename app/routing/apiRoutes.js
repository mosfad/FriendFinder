// ===============================================================================
// LOAD DATA
// We are linking our routes to a data source
// These data source holds information on friends profiles.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // ---------------------------------------------------------------------------
  // API GET Request
  // Displays json of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
  

  
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  // API POST Requests
  // Handles incoming survey results and compatibility logic
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    friendsData.push(req.body);
    //Get the sum of score for the incoming survey
    //var userScore = 0;
    /*for (var i = 0; i < req.body.scores.length; i++) {
      userScore += parseInt(req.body.scores[i]);
    }*/
    //Returns the sum of scores for any user
    function sumOfScores(friendArray) {
      for (var i = 0; i < friendArray.length; i++) {
        userScore += parseInt(friendArray[i]);
      }
      return userScore;
    }
    //Get user score
    var userScore = sumOfScores(req.body.scores);
    //console.log("user score sum is: ");
    //console.log(userScore);
    //Get scores of possible match
    var scoreDiff = 100;
    var indexOfMatch;
    for (var i = 0; i < friendsData.length - 1; i++) {
      //console.log("Here is the friends scores array: " + friendsData[i].scores);
      var otherScore = sumOfScores(friendsData[i].scores);//--------
      var currScoreDiff = Math.abs(userScore - otherScore);
      if (currScoreDiff < scoreDiff) {
        scoreDiff = currScoreDiff
        indexOfMatch = i;
      }
    }
    console.log(friendsData[indexOfMatch]);
    res.json(friendsData[indexOfMatch]);
    
    
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

};
