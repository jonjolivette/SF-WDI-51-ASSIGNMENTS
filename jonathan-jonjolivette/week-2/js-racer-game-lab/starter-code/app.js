// Jonathan Jolivette General Assembly WDI - 51 2019


// javascript


// ++++++++++++++++++RED PLAYER++++++++++++++++++++++++++
// TARGET/SELECT THE RED PLAYER OBJECT
var redPlayer = document.getElementById('red');
var moveBluePlayerFwd = 0;
var moveRedPlayerFwd = 0;
// MOVE RED PLAYER 2 SPACES VIA KEY UP EVENT
function moveRed(){
  moveRedPlayerFwd +=200;
  redPlayer.style.left = moveRedPlayerFwd + 'px';
}
// KEYUP EVENT LISTENER
window.addEventListener('keyup', moveRedPlayer, false);
// EXECUTION OF MOVEMENT
function moveRedPlayer(key){
  if (key.keyCode === 8) { //delete key up event
    moveRed();
    console.log('red player moved');
  }
  if(moveRedPlayerFwd===1000){
    alert('Klaw Wins!!!')
  }
}

// ++++++++++++++++++BLUE PLAYER++++++++++++++++++++++++++

// TARGET/SELECT THE RED PLAYER OBJECT
var bluePlayer = document.getElementById('blue');

// MOVES RED PLAYER 2 SPACES VIA KEY UP EVENT
function moveBlue(){
  moveBluePlayerFwd +=200;
  bluePlayer.style.left = moveBluePlayerFwd + 'px';
}
// KEYUP EVENT LISTENER
window.addEventListener('keyup', moveBluePlayer, false);
// EXECUTION OF MOVEMENT
function moveBluePlayer(key){
  if (key.keyCode === 192) { //delete key up event
    moveBlue();
    console.log('blue player moved');
  }
  if(moveBluePlayerFwd===1000){
    alert('Black Panther Wins!!!')
  }
}



// ===============   jquery   =====================
$( document ).ready(function() {
    console.log( "ready!" ); //JUST TESTING CONNECTIVITY

    // FADE IN BLACK PANTHER BACKGROUND ON HOME PAGE

    $(window).on("load", function(){
      $(".kick, #red, #blue").fadeIn(4000);
       // $(".red").fadeIn(4000);
       // $(".blue").fadeIn(4000);
    });

    // $(window).on("load", function(){
    //   $("#red").fadeIn(4000);
    // });

    // $(window).on("load", function(){
    //   $("#blue").fadeIn(4000);
    // });
  }); //CONCLUSION OF JQUERY DOCUMENT READY TAG
