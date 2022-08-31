import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { hackerState, cyborgState, } from './game.js';

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
  $('#cyb-power').text('Power:'+ currentState.power);
  $('#cyb-antiVirus').text('Virus-Protection:'+ currentState.antiVirus);
  $('#cyb-health').text('Health:'+ currentState.health);
  console.log(currentState.power);
}



$(document).ready(function() {

  $('#play').click(function() {
    const currentState = hackerState();
    const currentCyborg = cyborgState();
    currentStats();
    cyborgStats();
    console.log(currentState);
    console.log(currentCyborg);
  });




});