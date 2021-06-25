$(handleReady)//Changed it because it was showing as deprecated

function handleReady() {
  console.log("jquery is loaded!")
  // Get value on button click and show alert
  $("#myBtn").on('click', submitAnswer)
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

//Updates hints history section
function showHistory(playersGuesses){
  $('#p1LastGuess').empty().append(playersGuesses[0]);
  $('#p2LastGuess').empty().append(playersGuesses[1]);
  $('#p3LastGuess').empty().append(playersGuesses[2]);
  $('#p4LastGuess').empty().append(playersGuesses[3]);
}

function doComparison(name,description){
  $.ajax({
      type: 'POST',
      url: '/comparison',
      data: {
          joseGuess: answers.joseGuess,
          shawnGuess: answers.shawnGuess,
          kongGuess: answers.kongGuess,
          abramGuess: answers.abramGuess,
      },
      dataType: 'json'
  })
  .then(function (response) {
      getHistory(response);
  })
  .catch(function (response){
      console.log('Sorry something went wrong.', response);
  });
}
  
//Abram stuff
let answers = {};
function submitAnswer() {
  answers = {
    joseGuess: $('#joseInput').val(),
    shawnGuess: $('#shawnInput').val(),
    kongGuess: $('#KongInput').val(),
    abramGuess: $('#AbramInput').val(),
  }
    //clear the input fields. 
  $('#joseInput').val('');
  $('#shawnInput').val('');
  $('#KongInput').val('');
  $('#AbramInput').val('');
  doComparison();
}