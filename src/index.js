import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { hackerState, cyborgState, hackerAttack, retaliate, theWorm} from './game.js';

function currentStats() { 
  const currentState = hackerState();
  $("#show-health").text("Health:"+ currentState.health);
  $("#show-stealth").text("Stealth:"+ currentState.stealth);
  $("#show-int").text("Intelligence:"+ currentState.int);
  $("#show-focus").text("Focus:"+ currentState.focus);
  console.log(currentState.stealth);
}

function cyborgStats() {
  const currentState = cyborgState();
  $('#cyb-power').text('Power:' + currentState.power);
  $('#cyb-antiVirus').text('Virus-Protection:' + currentState.antiVirus);
  $('#cyb-health').text('Health:' + currentState.health);
  console.log(currentState.power);
}

function gameOver() { 
  const currentState = hackerState();
  const currentCyborg = cyborgState();

  if (currentState.health <= 0 && currentCyborg.power >= 0) {
    $('#show-winner').text('The Cyborg has defeated you');
    console.log("show winner");
  }
  else if(currentState.health >= 0 && currentCyborg.power <= 0) {
    $('#show-winner').text("You Win!");
  }
  else {
    currentStats();
    cyborgStats();
  }
}



$(document).ready(function() {

  $('#play').click(function() {
    const currentState = hackerState();
    const currentCyborg = cyborgState();
    currentStats();
    cyborgStats();
    // console.log(currentState);
    // console.log(currentCyborg);
  });

  $('#fight').click(function(){
    
    const hackerTurn = hackerState();
    hackerAttack();
    console.log(hackerTurn);
    currentStats();
    retaliate();
    cyborgStats();
    const currentState = hackerState();
    const currentCyborg = cyborgState();
    if(currentState.int >= 9 ){
      $("#wormButton").show();
    }
    gameOver();
  });
  $("#worm").click(function() {
    cyborgState(theWorm);
    cyborgStats();
    gameOver();
  });
});