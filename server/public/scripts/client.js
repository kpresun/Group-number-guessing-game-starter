$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  //Abrams Code
// Get value on button click and show alert
  $("#myBtn").on('click', submitAnswer(){
  })
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