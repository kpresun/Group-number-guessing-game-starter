$(handleReady)//Changed it because it was showing as deprecated

function handleReady() {
  console.log("jquery is loaded!")
  getHistory();
//Abrams Code
// Get value on button click and show alert
  $("#myBtn").on('click', submitAnswer(){
  })
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
  

  //created global array with nested object
const answers = [];

//making function to push inputs into employeeList array & grab employee details from the input fields..
function submitAnswer() {
  
let newAnswer= {
   fName: $('#joseInput').val(),
   lName: $('#shawnInput').val(),
   idNumber: $('#KongInput').val(),
   jobTitle: $('#AbramInput').val(),
    }

    //clear the input fields. 
$('#joseInput').val('')
$('#shawnInput').val('')
$('#KongInput').val('')
$('#AbramInput').val('')

answers.push(submitAnswer);
}