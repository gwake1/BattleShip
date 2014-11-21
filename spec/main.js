/* jshint jquery: true, browser: true */

var player = {
  player1: {
    name: "David",
    turn: true,
  },
  player2: {
    name: "Jackie",
    turn: false,
  }
};
var game = {
  turn: true,
}

function playerName(){
  if(game.turn === true){
    return player.player1.name;

  } else {
    return player.player2.name;
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
