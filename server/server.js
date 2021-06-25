const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(express.urlencoded({extended:true}));
app.use(express.json());//Was missing

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});

//Calculates players hints. Requires players last round guesses and current game random number
app.get('/history', (req, res) => {
  // let hints = calculateHints(playersLastRoundGuesses, currentGameRandomNumber);
  let hints = calculateHints([12,3,16,8], 12);// *** TEST *** Replace with corresponding variables shown above
  res.send(hints);
})

//Input is all players guesses from last round as an array of numbers and the current
//game random number. Output is an array of strings depending if a player guess is higher,
//lower or equal to the random number.
function calculateHints(lastRoundGuesses, randomNumber){
  let playersHints = [];
  for (const playerGuess of lastRoundGuesses) {
    if(playerGuess > randomNumber){
      playersHints.push('Too high!');
    }else if(playerGuess < randomNumber){
      playersHints.push('Too low!');
    }else{
      playersHints.push('Won!')
    }
  }
  return playersHints;
}