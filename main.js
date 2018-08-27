//ON CLICK, IMG DISAPPEAR//
$(document).ready( function() {

  //---VARIABLES---//

  var userClick = '';
  var userScore = 0;
  var level = 1;
  var lives = 9;
  var wins = 0;
  var playing = false;
  var buttons = document.querySelectorAll("#box");

  var scoreDisplay = document.getElementById("#score-display");


  //--FUNCTIONS--//

  function gopherUp() {
   
  }

  function scoreBoard() {
    scoreDisplay.innerHTML = "Your Score: " + userScore + "<span id='Wins'> Level: " + level + "</span><span id='lives'> Lives: " + lives + "</span>";
}

  //--EVENT LISTENERS--//
  
  $("button").click(function() { //ALERT WHEN BOX CLICKED -- HIT!
    alert ("HIT!" );
   });

   $(".wrapper").click(function() { //ALERT WHEN BOX MISSED -- MISS!
     alert ("MISS!");
   });
  
   $(".directions").text("Whack the Mole with your cursor!").fadeIn(3000);

  
  //---FUNCTIONS---//
  //function user_click ()
  //if (userClick === 'box' ){ //WHEN IMG POPS UP
  // alert('hit!')
  //  wins ++
  //$('#Wins').text(userScore + wins)
  //} else {
  //alert('miss!')
 // losses ++
 // $('#Losses').text(compScore + losses)
  //}
  });
