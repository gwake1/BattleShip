/* jshint jquery: true, browser: true */

var player = {
  player1: {
    name: "Jessica",
    turn: true,
    show: true,
  },
  player2: {
    name: "Jackie",
    turn: false,
    show: false,
  }
};
var game = {
  turn: true,
}

function playerName(){
  if(game.turn === true){
    return player.player1.name;
    gameIndicator();
  } else {
    return player.player2.name;
  }
}

function gameIndicator(){
  if(game.turn === true){
    game.turn = false;
    player.player1.show = false;
    return game.turn;
    return player.player1.show;
  } else {
    game.turn = true;
    player.player2.show = true;
    return game.turn;
    return player.player2.show;
  }
}

function playerTurn(){
  if(game.turn === true){
    return player.player1.name;
    game.turn = false;
    player.player1.turn = false;
    player.player2.turn = true;
  } else {
    return player2;
    game.turn = true;
  }
}

function hide(element){
  if (element.classList){
    element.classList.add("hidden");
  } else {
    element.className += " " + "hidden";
  }
}

function show(element){
  if(element.classList){
    element.classList.remove("hidden");
  } else {
    element.className = element.className
    .replace(new RegExp('(^|\\b)'+ 'hidden'.split(' ')
    .join('|') + '(\\b|$)', 'gi'), ' ');
  }
}
