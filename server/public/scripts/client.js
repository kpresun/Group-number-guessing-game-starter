$(handleReady)//Changed it because it was showing as deprecated

function handleReady() {
  console.log("jquery is loaded!")
  getHistory();
}

function getHistory(){
  //Calls last round guesses hints. Should expect and array where
  //each position represents a player like this: [player1Hint, player2Hint, player3Hint, player4Hint]
  $.ajax({
    type: 'GET',
    url: '/history'
    })
    .then(function (response) {
        showHistory(response);
    })
    .catch(function (response){
        console.log('Sorry something went wrong.', response);
    });
}

function showGuesses(playersGuesses){
  $('#p1LastGuess').empty().append(playersGuesses[0]);
  $('#p2LastGuess').empty().append(playersGuesses[1]);
  $('#p3LastGuess').empty().append(playersGuesses[2]);
  $('#p4LastGuess').empty().append(playersGuesses[3]);
}
