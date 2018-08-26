//ON CLICK, IMG DISAPPEAR//
$(document).ready( function() {

  //---VARIABLES---//

  var userClick = ''
  var userScore = 0
  var compScore = 0
  var level = 1
  var lives = 9
  var wins = 0
  var losses = 0
  var playing = false


  //--FUNCTIONS--//

  function scoreBoard () {
    scoreDisplay.innerHTML = "Score: " + score + "<span id='level-display'> Level: " + level + "</span><span id='lifes-display'> Lives: " + lives + "</span>";
}



  //--EVENT LISTENERS--//
  
  $("button").click(function() { //ALERT WHEN BOX CLICKED -- HIT!
    alert ("HIT!" );
   });

   $(".wrapper").click(function() { //ALERT WHEN BOX MISSED -- MISS!
     alert ("MISS!" );
   });
  
  
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
